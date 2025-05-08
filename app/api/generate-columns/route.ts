import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { apiKey, prompt } = await request.json()

    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key is required" }, { status: 400 })
    }

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const systemPrompt = `
      You are a CSV data structure generator that creates realistic and contextually appropriate data. 
      Based on the user's description, create a JSON array of column definitions that can be used to generate a CSV file.
      
      Each column should have:
      - id: A unique identifier (e.g., "col1", "col2")
      - name: A human-readable name for the column
      - type: One of the following data types:
        - sequential (for IDs)
        - random-number
        - random-name
        - first-name
        - last-name
        - gender
        - age
        - email
        - phone
        - address
        - job-title
        - department
        - company-name
        - brand
        - product
        - price
        - country
        - city
        - state
        - date
        - time
        - datetime
        - boolean
        - random-word
        - sentence
        - paragraph
        - color-name
        - hex-color
        - fruit
        - vegetable
        - game
        - movie
      
      IMPORTANT GUIDELINES:
      1. Ensure data coherence - if the user requests related data (like companies and their products), 
         add a special "options" field to indicate they should be contextually related.
      2. For real-world entities (companies, products, locations), add a "realistic: true" option to ensure 
         the data generator uses realistic values instead of random ones.
      3. If the user requests specific types of companies or products, specify this in the "category" option.
      
      Example of enhanced column definition with options:
      {
        "id": "col1",
        "name": "Company",
        "type": "company-name",
        "options": {
          "realistic": true,
          "category": "technology" // or "retail", "food", "automotive", etc.
        }
      }
      
      Return ONLY a JSON array of column objects without any explanation or additional text.
    `

    // First, let's get the column structure from OpenAI
    const structureResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    })

    if (!structureResponse.ok) {
      const errorData = await structureResponse.json()
      return NextResponse.json(
        { error: errorData.error?.message || "Failed to generate columns with OpenAI" },
        { status: structureResponse.status },
      )
    }

    const structureData = await structureResponse.json()
    const structureContent = structureData.choices[0]?.message?.content

    try {
      let columns = JSON.parse(structureContent)

      // Now let's enhance the columns with realistic data mappings if needed
      const hasCompanies = columns.some((col) => col.type === "company-name")
      const hasProducts = columns.some((col) => col.type === "product")

      // If we have both companies and products, let's create a realistic mapping
      if (hasCompanies && hasProducts) {
        // Get realistic company-product mappings from OpenAI
        const mappingPrompt = `
          Create a JSON object that maps company names to their appropriate product categories.
          For example:
          {
            "Apple": "technology",
            "McDonald's": "fast food",
            "Nike": "sportswear",
            "Tesla": "automotive",
            "Starbucks": "coffee and beverages"
          }
          Include at least 20 well-known companies from various industries.
          Return ONLY the JSON object without any explanation.
        `

        const mappingResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that provides accurate information about companies and their products.",
              },
              {
                role: "user",
                content: mappingPrompt,
              },
            ],
            temperature: 0.3,
          }),
        })

        if (mappingResponse.ok) {
          const mappingData = await mappingResponse.json()
          const mappingContent = mappingData.choices[0]?.message?.content

          try {
            const companyProductMap = JSON.parse(mappingContent)

            // Add the mapping information to our columns
            columns = columns.map((col) => {
              if (col.type === "company-name") {
                return {
                  ...col,
                  options: {
                    ...col.options,
                    realistic: true,
                    companyProductMap: companyProductMap,
                  },
                }
              }
              if (col.type === "product") {
                return {
                  ...col,
                  options: {
                    ...col.options,
                    realistic: true,
                    useCompanyContext: true,
                  },
                }
              }
              return col
            })
          } catch (error) {
            console.error("Failed to parse company-product mapping:", error)
          }
        }
      }

      return NextResponse.json({ columns })
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to parse OpenAI response. Please try a different prompt." },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error generating columns:", error)
    return NextResponse.json({ error: "An error occurred while generating columns" }, { status: 500 })
  }
}
