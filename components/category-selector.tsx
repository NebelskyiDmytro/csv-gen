"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategorySelectorProps {
  selectedType: string
  onSelect: (type: string) => void
}

export function CategorySelector({ selectedType, onSelect }: CategorySelectorProps) {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const dataCategories = [
    {
      category: "Basic",
      types: [
        { value: "sequential", label: "Sequential ID" },
        { value: "random-number", label: "Random Number" },
        { value: "uuid", label: "UUID" },
        { value: "boolean", label: "Boolean" },
      ],
    },
    {
      category: "Personal",
      types: [
        { value: "random-name", label: "Full Name" },
        { value: "first-name", label: "First Name" },
        { value: "last-name", label: "Last Name" },
        { value: "gender", label: "Gender" },
        { value: "age", label: "Age" },
        { value: "email", label: "Email" },
        { value: "phone", label: "Phone Number" },
        { value: "address", label: "Address" },
        { value: "job-title", label: "Job Title" },
        { value: "department", label: "Department" },
      ],
    },
    {
      category: "Business",
      types: [
        { value: "company-name", label: "Company Name" },
        { value: "brand", label: "Brand" },
        { value: "product", label: "Product" },
        { value: "price", label: "Price" },
        { value: "currency", label: "Currency" },
        { value: "credit-card", label: "Credit Card" },
        { value: "industry", label: "Industry" },
        { value: "business-type", label: "Business Type" },
        { value: "tax-id", label: "Tax ID" },
      ],
    },
    {
      category: "Financial",
      types: [
        { value: "account-number", label: "Account Number" },
        { value: "transaction-id", label: "Transaction ID" },
        { value: "amount", label: "Amount" },
        { value: "payment-method", label: "Payment Method" },
        { value: "bank-name", label: "Bank Name" },
        { value: "iban", label: "IBAN" },
        { value: "swift-code", label: "SWIFT Code" },
        { value: "crypto-address", label: "Crypto Address" },
      ],
    },
    {
      category: "E-commerce",
      types: [
        { value: "product-id", label: "Product ID" },
        { value: "sku", label: "SKU" },
        { value: "order-id", label: "Order ID" },
        { value: "order-status", label: "Order Status" },
        { value: "shipping-method", label: "Shipping Method" },
        { value: "tracking-number", label: "Tracking Number" },
        { value: "review-rating", label: "Review Rating" },
        { value: "discount-code", label: "Discount Code" },
      ],
    },
    {
      category: "Geography",
      types: [
        { value: "country", label: "Country" },
        { value: "city", label: "City" },
        { value: "state", label: "State/Province" },
        { value: "zip-code", label: "Zip/Postal Code" },
        { value: "latitude", label: "Latitude" },
        { value: "longitude", label: "Longitude" },
        { value: "continent", label: "Continent" },
        { value: "timezone", label: "Timezone" },
      ],
    },
    {
      category: "Date & Time",
      types: [
        { value: "date", label: "Date (YYYY-MM-DD)" },
        { value: "time", label: "Time" },
        { value: "datetime", label: "Date & Time" },
        { value: "month", label: "Month" },
        { value: "weekday", label: "Weekday" },
        { value: "year", label: "Year" },
        { value: "quarter", label: "Quarter" },
        { value: "unix-timestamp", label: "Unix Timestamp" },
      ],
    },
    {
      category: "Internet",
      types: [
        { value: "username", label: "Username" },
        { value: "password", label: "Password" },
        { value: "url", label: "URL" },
        { value: "domain", label: "Domain Name" },
        { value: "ip-address", label: "IP Address" },
        { value: "user-agent", label: "User Agent" },
        { value: "seo-name", label: "SEO-friendly Name" },
        { value: "email-domain", label: "Email Domain" },
        { value: "mac-address", label: "MAC Address" },
      ],
    },
    {
      category: "Technology",
      types: [
        { value: "programming-language", label: "Programming Language" },
        { value: "framework", label: "Framework" },
        { value: "database", label: "Database" },
        { value: "os", label: "Operating System" },
        { value: "browser", label: "Browser" },
        { value: "device-type", label: "Device Type" },
        { value: "screen-resolution", label: "Screen Resolution" },
        { value: "file-extension", label: "File Extension" },
      ],
    },
    {
      category: "Social Media",
      types: [
        { value: "social-username", label: "Social Username" },
        { value: "hashtag", label: "Hashtag" },
        { value: "post-type", label: "Post Type" },
        { value: "engagement-count", label: "Engagement Count" },
        { value: "follower-count", label: "Follower Count" },
        { value: "social-platform", label: "Social Platform" },
        { value: "content-category", label: "Content Category" },
      ],
    },
    {
      category: "Healthcare",
      types: [
        { value: "blood-type", label: "Blood Type" },
        { value: "medical-record-number", label: "Medical Record Number" },
        { value: "diagnosis-code", label: "Diagnosis Code" },
        { value: "medication", label: "Medication" },
        { value: "treatment", label: "Treatment" },
        { value: "insurance-provider", label: "Insurance Provider" },
        { value: "medical-specialty", label: "Medical Specialty" },
      ],
    },
    {
      category: "Education",
      types: [
        { value: "degree", label: "Degree" },
        { value: "field-of-study", label: "Field of Study" },
        { value: "course-name", label: "Course Name" },
        { value: "grade", label: "Grade" },
        { value: "school-name", label: "School Name" },
        { value: "student-id", label: "Student ID" },
        { value: "education-level", label: "Education Level" },
      ],
    },
    {
      category: "Transportation",
      types: [
        { value: "vehicle-type", label: "Vehicle Type" },
        { value: "license-plate", label: "License Plate" },
        { value: "vin", label: "VIN" },
        { value: "make-model", label: "Make & Model" },
        { value: "flight-number", label: "Flight Number" },
        { value: "travel-class", label: "Travel Class" },
        { value: "distance", label: "Distance" },
      ],
    },
    {
      category: "Sports",
      types: [
        { value: "sport-type", label: "Sport Type" },
        { value: "team-name", label: "Team Name" },
        { value: "player-name", label: "Player Name" },
        { value: "position", label: "Position" },
        { value: "score", label: "Score" },
        { value: "statistic", label: "Statistic" },
        { value: "league", label: "League" },
      ],
    },
    {
      category: "Text",
      types: [
        { value: "random-word", label: "Random Word" },
        { value: "sentence", label: "Sentence" },
        { value: "paragraph", label: "Paragraph" },
        { value: "lorem", label: "Lorem Ipsum" },
        { value: "quote", label: "Quote" },
        { value: "headline", label: "Headline" },
        { value: "article", label: "Article" },
      ],
    },
    {
      category: "Colors",
      types: [
        { value: "color-name", label: "Color Name" },
        { value: "hex-color", label: "Hex Color" },
        { value: "rgb-color", label: "RGB Color" },
        { value: "hsl-color", label: "HSL Color" },
        { value: "color-palette", label: "Color Palette" },
      ],
    },
    {
      category: "Food & Drink",
      types: [
        { value: "fruit", label: "Fruit" },
        { value: "vegetable", label: "Vegetable" },
        { value: "dish", label: "Dish" },
        { value: "drink", label: "Drink" },
        { value: "cuisine", label: "Cuisine" },
        { value: "ingredient", label: "Ingredient" },
        { value: "dietary-restriction", label: "Dietary Restriction" },
      ],
    },
    {
      category: "Entertainment",
      types: [
        { value: "game", label: "Game" },
        { value: "movie", label: "Movie" },
        { value: "music-genre", label: "Music Genre" },
        { value: "book", label: "Book" },
        { value: "tv-show", label: "TV Show" },
        { value: "artist", label: "Artist" },
        { value: "character", label: "Character" },
        { value: "genre", label: "Genre" },
      ],
    },
  ]

  const handleSelect = (type: string) => {
    onSelect(type)
    setOpen(false)
  }

  // Filter categories and types based on search query
  const filteredCategories = searchQuery
    ? dataCategories
        .map((category) => ({
          ...category,
          types: category.types.filter((type) => type.label.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
        .filter((category) => category.types.length > 0)
    : dataCategories

  // Split categories into left and right columns
  const leftCategories = filteredCategories.filter((_, index) => index % 2 === 0)
  const rightCategories = filteredCategories.filter((_, index) => index % 2 === 1)

  return (
    <Dialog open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start bg-dark-850" onClick={() => setOpen(true)}>
          <span>
            {dataCategories.flatMap((category) => category.types).find((type) => type.value === selectedType)?.label ||
              "Select data type"}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-hidden flex flex-col bg-dark-900 border-dark-800">
        <DialogHeader>
          <DialogTitle className="text-xl text-dark-200">Select Data Type</DialogTitle>
          <div className="relative mt-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-dark-400" />
            <Input
              type="search"
              placeholder="Search data types..."
              className="pl-8 bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </DialogHeader>
        <div className="overflow-y-auto pr-2 -mr-2 mt-4">
          <div className="flex">
            {/* Left column */}
            <div className="w-1/2 pr-2">
              {leftCategories.map((category) => (
                <div key={category.category} className="mb-4">
                  <h3 className="font-medium text-sm text-dark-400 uppercase tracking-wider mb-1">
                    {category.category}
                  </h3>
                  <div>
                    {category.types.map((type) => (
                      <Button
                        key={type.value}
                        variant="ghost"
                        className={cn(
                          "justify-start w-full h-8 py-0 px-3 text-dark-300 mb-0.5",
                          selectedType === type.value && "bg-dark-800 text-dark-100 font-medium",
                        )}
                        onClick={() => handleSelect(type.value)}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="w-1/2 pl-2">
              {rightCategories.map((category) => (
                <div key={category.category} className="mb-4">
                  <h3 className="font-medium text-sm text-dark-400 uppercase tracking-wider mb-1">
                    {category.category}
                  </h3>
                  <div>
                    {category.types.map((type) => (
                      <Button
                        key={type.value}
                        variant="ghost"
                        className={cn(
                          "justify-start w-full h-8 py-0 px-3 text-dark-300 mb-0.5",
                          selectedType === type.value && "bg-dark-800 text-dark-100 font-medium",
                        )}
                        onClick={() => handleSelect(type.value)}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
