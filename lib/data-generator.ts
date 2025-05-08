import type { Column } from "@/components/csv-generator"

// Helper function to generate random number
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Helper function to generate random date
const randomDate = (start: Date = new Date(2020, 0, 1), end: Date = new Date()) => {
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
  const date = new Date(randomTime)
  return date.toISOString().split("T")[0]
}

// List of random first names
const firstNames = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen",
  "Christopher",
  "Nancy",
  "Daniel",
  "Lisa",
  "Matthew",
  "Margaret",
  "Anthony",
  "Betty",
  "Mark",
  "Sandra",
  "Donald",
  "Ashley",
  "Steven",
  "Dorothy",
  "Paul",
  "Kimberly",
  "Andrew",
  "Emily",
  "Joshua",
  "Donna",
  "Kenneth",
  "Michelle",
  "Kevin",
  "Carol",
  "Brian",
  "Amanda",
  "George",
  "Melissa",
]

// List of random last names
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Gonzalez",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans",
]

// List of random words
const words = [
  "time",
  "year",
  "people",
  "way",
  "day",
  "man",
  "thing",
  "woman",
  "life",
  "child",
  "world",
  "school",
  "state",
  "family",
  "student",
  "group",
  "country",
  "problem",
  "hand",
  "part",
  "place",
  "case",
  "week",
  "company",
  "system",
  "program",
  "question",
  "work",
  "government",
  "number",
  "night",
  "point",
  "home",
  "water",
  "room",
  "mother",
  "area",
  "money",
  "story",
  "fact",
  "month",
  "lot",
  "right",
  "study",
  "book",
  "eye",
  "job",
  "word",
]

// Colors
const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Teal",
  "Indigo",
  "Violet",
  "Maroon",
  "Navy",
  "Olive",
  "Turquoise",
  "Silver",
  "Gold",
  "Beige",
  "Coral",
  "Crimson",
  "Lavender",
  "Plum",
  "Tan",
  "Khaki",
]

// Hex colors
const hexColors = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`
}

// RGB colors
const rgbColors = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

// Fruits
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Grape",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Peach",
  "Pear",
  "Cherry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Lemon",
  "Lime",
  "Coconut",
  "Avocado",
  "Pomegranate",
  "Plum",
  "Apricot",
  "Fig",
  "Guava",
  "Papaya",
  "Dragonfruit",
  "Passionfruit",
  "Lychee",
  "Persimmon",
  "Cantaloupe",
]

// Vegetables
const vegetables = [
  "Carrot",
  "Broccoli",
  "Spinach",
  "Potato",
  "Tomato",
  "Cucumber",
  "Lettuce",
  "Onion",
  "Garlic",
  "Bell Pepper",
  "Cabbage",
  "Cauliflower",
  "Corn",
  "Eggplant",
  "Zucchini",
  "Asparagus",
  "Celery",
  "Radish",
  "Kale",
  "Pumpkin",
  "Sweet Potato",
  "Mushroom",
  "Peas",
  "Beans",
  "Artichoke",
  "Brussels Sprout",
  "Leek",
  "Turnip",
  "Beet",
  "Okra",
]

// Dishes
const dishes = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Taco",
  "Curry",
  "Steak",
  "Salad",
  "Soup",
  "Sandwich",
  "Fried Chicken",
  "Ramen",
  "Lasagna",
  "Burrito",
  "Pad Thai",
  "Risotto",
  "Paella",
  "Stir Fry",
  "Kebab",
  "Fish and Chips",
  "Pho",
  "Biryani",
  "Gnocchi",
  "Falafel",
  "Moussaka",
  "Enchiladas",
  "Poutine",
  "Gumbo",
  "Chili",
  "Couscous",
]

// Drinks
const drinks = [
  "Coffee",
  "Tea",
  "Water",
  "Soda",
  "Juice",
  "Beer",
  "Wine",
  "Cocktail",
  "Smoothie",
  "Milkshake",
  "Lemonade",
  "Hot Chocolate",
  "Espresso",
  "Cappuccino",
  "Latte",
  "Mojito",
  "Margarita",
  "Whiskey",
  "Vodka",
  "Rum",
  "Gin",
  "Tequila",
  "Champagne",
  "Cider",
  "Energy Drink",
  "Iced Tea",
  "Kombucha",
  "Coconut Water",
  "Protein Shake",
  "Boba Tea",
]

// Games
const games = [
  "Minecraft",
  "Fortnite",
  "The Legend of Zelda",
  "Grand Theft Auto",
  "Call of Duty",
  "FIFA",
  "Super Mario",
  "Pokémon",
  "Overwatch",
  "League of Legends",
  "Apex Legends",
  "The Witcher",
  "Red Dead Redemption",
  "Skyrim",
  "Halo",
  "Assassin's Creed",
  "World of Warcraft",
  "Dota 2",
  "Counter-Strike",
  "Final Fantasy",
  "Resident Evil",
  "Destiny",
  "Valorant",
  "Among Us",
  "Cyberpunk",
  "God of War",
  "Tetris",
  "Pac-Man",
  "Street Fighter",
  "Mortal Kombat",
]

// Movies
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "Pulp Fiction",
  "The Dark Knight",
  "Fight Club",
  "Inception",
  "Goodfellas",
  "The Matrix",
  "Star Wars",
  "Jurassic Park",
  "Titanic",
  "Avatar",
  "Forrest Gump",
  "The Lion King",
  "Gladiator",
  "The Avengers",
  "Interstellar",
  "Back to the Future",
  "The Silence of the Lambs",
  "Schindler's List",
  "Casablanca",
  "Lord of the Rings",
  "The Departed",
  "Jaws",
  "Toy Story",
  "Parasite",
  "The Social Network",
  "Whiplash",
  "The Truman Show",
  "Eternal Sunshine of the Spotless Mind",
]

// Music Genres
const musicGenres = [
  "Rock",
  "Pop",
  "Hip Hop",
  "Jazz",
  "Classical",
  "Electronic",
  "R&B",
  "Country",
  "Blues",
  "Reggae",
  "Metal",
  "Folk",
  "Punk",
  "Soul",
  "Funk",
  "Disco",
  "Techno",
  "House",
  "Ambient",
  "Indie",
  "Alternative",
  "Rap",
  "EDM",
  "Latin",
  "K-pop",
  "J-pop",
  "Gospel",
  "Opera",
  "Dubstep",
  "Trap",
]

// Books
const books = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Hobbit",
  "Harry Potter",
  "The Lord of the Rings",
  "Brave New World",
  "Animal Farm",
  "The Alchemist",
  "Don Quixote",
  "Moby Dick",
  "War and Peace",
  "Crime and Punishment",
  "The Odyssey",
  "Jane Eyre",
  "Wuthering Heights",
  "The Chronicles of Narnia",
  "The Hunger Games",
  "The Da Vinci Code",
  "The Little Prince",
  "Alice's Adventures in Wonderland",
  "The Grapes of Wrath",
  "The Old Man and the Sea",
  "One Hundred Years of Solitude",
  "The Picture of Dorian Gray",
  "Frankenstein",
  "Dracula",
  "Hamlet",
]

// Realistic Companies with their industries
const realisticCompanies = [
  { name: "Apple", industry: "technology" },
  { name: "Microsoft", industry: "technology" },
  { name: "Google", industry: "technology" },
  { name: "Amazon", industry: "e-commerce" },
  { name: "Facebook", industry: "social media" },
  { name: "Tesla", industry: "automotive" },
  { name: "Walmart", industry: "retail" },
  { name: "McDonald's", industry: "fast food" },
  { name: "Coca-Cola", industry: "beverages" },
  { name: "PepsiCo", industry: "beverages" },
  { name: "Nike", industry: "sportswear" },
  { name: "Adidas", industry: "sportswear" },
  { name: "Samsung", industry: "technology" },
  { name: "Sony", industry: "technology" },
  { name: "Toyota", industry: "automotive" },
  { name: "Honda", industry: "automotive" },
  { name: "BMW", industry: "automotive" },
  { name: "Ford", industry: "automotive" },
  { name: "Starbucks", industry: "coffee" },
  { name: "Netflix", industry: "entertainment" },
  { name: "Disney", industry: "entertainment" },
  { name: "Spotify", industry: "music streaming" },
  { name: "IBM", industry: "technology" },
  { name: "Intel", industry: "technology" },
  { name: "NVIDIA", industry: "technology" },
  { name: "Johnson & Johnson", industry: "healthcare" },
  { name: "Pfizer", industry: "pharmaceuticals" },
  { name: "Procter & Gamble", industry: "consumer goods" },
  { name: "Unilever", industry: "consumer goods" },
  { name: "IKEA", industry: "furniture" },
]

// Industry-specific products
const industryProducts = {
  technology: [
    "Smartphone",
    "Laptop",
    "Tablet",
    "Smart Watch",
    "Wireless Earbuds",
    "Smart Speaker",
    "VR Headset",
    "Gaming Console",
    "Desktop Computer",
    "Wireless Router",
  ],
  "e-commerce": [
    "Online Marketplace",
    "Subscription Service",
    "Same-Day Delivery",
    "Digital Content",
    "Cloud Storage",
    "Smart Home Devices",
    "E-reader",
    "Streaming Device",
  ],
  "social media": [
    "Social Network",
    "Messaging App",
    "Photo Sharing Platform",
    "Video Platform",
    "Professional Network",
    "Content Management System",
    "Analytics Dashboard",
  ],
  automotive: [
    "Electric Vehicle",
    "SUV",
    "Sedan",
    "Sports Car",
    "Hybrid Car",
    "Pickup Truck",
    "Autonomous Driving System",
    "Electric Scooter",
  ],
  retail: [
    "Clothing Line",
    "Home Goods",
    "Grocery Delivery",
    "Pharmacy Services",
    "Optical Services",
    "Financial Services",
    "Gift Cards",
    "Membership Program",
  ],
  "fast food": [
    "Burger",
    "Fries",
    "Chicken Sandwich",
    "Salad",
    "Breakfast Menu",
    "Coffee",
    "Milkshake",
    "Ice Cream",
    "Pizza",
    "Taco",
  ],
  beverages: [
    "Cola",
    "Diet Soda",
    "Sparkling Water",
    "Sports Drink",
    "Energy Drink",
    "Fruit Juice",
    "Bottled Water",
    "Tea",
    "Coffee",
    "Plant-based Beverage",
  ],
  sportswear: [
    "Athletic Shoes",
    "Running Shoes",
    "Basketball Shoes",
    "Athletic Apparel",
    "Sports Equipment",
    "Fitness Tracker",
    "Backpack",
    "Sports Accessories",
  ],
  coffee: [
    "Coffee Beans",
    "Espresso",
    "Latte",
    "Cold Brew",
    "Frappuccino",
    "Tea",
    "Pastry",
    "Sandwich",
    "Coffee Maker",
    "Travel Mug",
  ],
  entertainment: [
    "Streaming Service",
    "Movie Studio",
    "Theme Park",
    "Merchandise",
    "Video Game",
    "Animation",
    "Music Production",
    "Publishing",
  ],
  "music streaming": [
    "Subscription Plan",
    "Podcast Platform",
    "Playlist Curation",
    "Artist Promotion",
    "Live Audio Rooms",
    "Music Discovery Algorithm",
    "Offline Listening",
  ],
  healthcare: [
    "Medical Devices",
    "Pharmaceuticals",
    "Baby Products",
    "First Aid",
    "Skincare",
    "Contact Lenses",
    "Surgical Equipment",
    "Diagnostic Tools",
  ],
  pharmaceuticals: [
    "Vaccines",
    "Prescription Drugs",
    "Over-the-counter Medicine",
    "Pain Relievers",
    "Allergy Medication",
    "Antibiotics",
    "Diabetes Medication",
    "Research Services",
  ],
  "consumer goods": [
    "Cleaning Products",
    "Personal Care",
    "Laundry Detergent",
    "Toothpaste",
    "Shampoo",
    "Deodorant",
    "Baby Products",
    "Household Paper Products",
  ],
  furniture: [
    "Sofa",
    "Bed Frame",
    "Dining Table",
    "Office Desk",
    "Bookshelf",
    "Kitchen Cabinet",
    "Wardrobe",
    "Chair",
    "Lighting",
    "Home Decor",
  ],
}

// Realistic locations (cities with their countries)
const realisticLocations = [
  { city: "New York", country: "United States" },
  { city: "Los Angeles", country: "United States" },
  { city: "Chicago", country: "United States" },
  { city: "Houston", country: "United States" },
  { city: "Phoenix", country: "United States" },
  { city: "Philadelphia", country: "United States" },
  { city: "San Antonio", country: "United States" },
  { city: "San Diego", country: "United States" },
  { city: "Dallas", country: "United States" },
  { city: "San Jose", country: "United States" },
  { city: "London", country: "United Kingdom" },
  { city: "Birmingham", country: "United Kingdom" },
  { city: "Manchester", country: "United Kingdom" },
  { city: "Glasgow", country: "United Kingdom" },
  { city: "Tokyo", country: "Japan" },
  { city: "Osaka", country: "Japan" },
  { city: "Kyoto", country: "Japan" },
  { city: "Toronto", country: "Canada" },
  { city: "Montreal", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
  { city: "Sydney", country: "Australia" },
  { city: "Melbourne", country: "Australia" },
  { city: "Brisbane", country: "Australia" },
  { city: "Paris", country: "France" },
  { city: "Marseille", country: "France" },
  { city: "Lyon", country: "France" },
  { city: "Berlin", country: "Germany" },
  { city: "Hamburg", country: "Germany" },
  { city: "Munich", country: "Germany" },
  { city: "Rome", country: "Italy" },
  { city: "Milan", country: "Italy" },
  { city: "Naples", country: "Italy" },
  { city: "Madrid", country: "Spain" },
  { city: "Barcelona", country: "Spain" },
  { city: "Valencia", country: "Spain" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Seoul", country: "South Korea" },
  { city: "São Paulo", country: "Brazil" },
  { city: "Rio de Janeiro", country: "Brazil" },
  { city: "Mexico City", country: "Mexico" },
]

// Companies
const companies = [
  "Google",
  "Apple",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Tesla",
  "Netflix",
  "Uber",
  "Airbnb",
  "Twitter",
  "Spotify",
  "Adobe",
  "Intel",
  "IBM",
  "Oracle",
  "Samsung",
  "Sony",
  "Nike",
  "Adidas",
  "Coca-Cola",
  "Pepsi",
  "McDonald's",
  "Starbucks",
  "Walmart",
  "Target",
  "Disney",
  "Warner Bros",
  "Universal",
  "Paramount",
  "Sony Pictures",
]

// Brands
const brands = [
  "Nike",
  "Adidas",
  "Apple",
  "Samsung",
  "Google",
  "Microsoft",
  "Amazon",
  "Coca-Cola",
  "Pepsi",
  "McDonald's",
  "Starbucks",
  "Toyota",
  "Honda",
  "BMW",
  "Mercedes-Benz",
  "Ferrari",
  "Rolex",
  "Gucci",
  "Louis Vuitton",
  "Chanel",
  "H&M",
  "Zara",
  "IKEA",
  "Lego",
  "Sony",
  "Nintendo",
  "Canon",
  "Nikon",
  "Visa",
  "Mastercard",
]

// Products
const products = [
  "Smartphone",
  "Laptop",
  "Headphones",
  "Smart TV",
  "Tablet",
  "Smartwatch",
  "Camera",
  "Gaming Console",
  "Bluetooth Speaker",
  "Wireless Earbuds",
  "Fitness Tracker",
  "Drone",
  "VR Headset",
  "E-reader",
  "External Hard Drive",
  "Printer",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Router",
  "Smart Home Hub",
  "Security Camera",
  "Microwave",
  "Refrigerator",
  "Washing Machine",
  "Air Conditioner",
  "Coffee Maker",
  "Blender",
  "Vacuum Cleaner",
  "Air Purifier",
]

// Countries
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Italy",
  "Spain",
  "Russia",
  "South Korea",
  "South Africa",
  "Egypt",
  "Nigeria",
  "Argentina",
  "Sweden",
  "Norway",
  "Denmark",
  "Netherlands",
  "Switzerland",
  "Singapore",
  "New Zealand",
  "Ireland",
  "Poland",
  "Turkey",
  "Greece",
]

// Cities
const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Los Angeles",
  "Berlin",
  "Sydney",
  "Toronto",
  "Rome",
  "Barcelona",
  "Amsterdam",
  "Dubai",
  "Singapore",
  "Hong Kong",
  "San Francisco",
  "Chicago",
  "Miami",
  "Vancouver",
  "Madrid",
  "Seoul",
  "Mumbai",
  "Rio de Janeiro",
  "Mexico City",
  "Cairo",
  "Cape Town",
  "Stockholm",
  "Vienna",
  "Prague",
  "Bangkok",
  "Istanbul",
]

// States/Provinces
const states = [
  "California",
  "New York",
  "Texas",
  "Florida",
  "Illinois",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
  "New Jersey",
  "Virginia",
  "Washington",
  "Arizona",
  "Massachusetts",
  "Tennessee",
  "Indiana",
  "Missouri",
  "Maryland",
  "Wisconsin",
  "Colorado",
  "Minnesota",
  "South Carolina",
  "Alabama",
  "Louisiana",
  "Kentucky",
  "Oregon",
  "Oklahoma",
  "Connecticut",
  "Utah",
]

// Job Titles
const jobTitles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "Marketing Manager",
  "Graphic Designer",
  "Financial Analyst",
  "Human Resources Manager",
  "Sales Representative",
  "Customer Service Representative",
  "Operations Manager",
  "Project Manager",
  "Business Analyst",
  "UX Designer",
  "Content Writer",
  "Social Media Manager",
  "Web Developer",
  "Systems Administrator",
  "Network Engineer",
  "Database Administrator",
  "IT Support Specialist",
  "Chief Executive Officer",
  "Chief Technology Officer",
  "Chief Financial Officer",
  "Chief Marketing Officer",
  "Chief Operating Officer",
]

// Departments
const departments = [
  "Engineering",
  "Product",
  "Marketing",
  "Sales",
  "Finance",
  "Human Resources",
  "Operations",
  "Customer Support",
  "Research & Development",
  "Legal",
  "IT",
  "Administration",
  "Design",
  "Quality Assurance",
  "Business Development",
  "Public Relations",
  "Supply Chain",
  "Logistics",
  "Procurement",
  "Manufacturing",
]

// Genders
const genders = ["Male", "Female", "Non-binary", "Other", "Prefer not to say"]

// Weekdays
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// Months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Currencies
const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "BRL"]

// Generate SEO-friendly name from a regular name
const generateSeoName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/gi, "-")
}

// Generate random name
const randomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  return `${firstName} ${lastName}`
}

// Generate random word
const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

// Generate random email
const randomEmail = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase()
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "example.com"]
  const domain = domains[Math.floor(Math.random() * domains.length)]
  return `${firstName}.${lastName}@${domain}`
}

// Generate random phone number
const randomPhone = () => {
  const formats = ["(###) ###-####", "###-###-####", "+1 ### ### ####"]
  const format = formats[Math.floor(Math.random() * formats.length)]

  return format.replace(/#/g, () => Math.floor(Math.random() * 10).toString())
}

// Track company-product relationships for consistent data
const companyProductMap = new Map()

export const generateData = (columns: Column[], rowCount: number) => {
  const rows = []

  // First, identify if we have company and product columns for contextual generation
  const companyColumn = columns.find((col) => col.type === "company-name")
  const productColumn = columns.find((col) => col.type === "product")
  const hasCompanyProductRelation = companyColumn && productColumn

  // Reset the company-product map for this generation
  companyProductMap.clear()

  // Pre-generate company-product mappings if needed
  if (hasCompanyProductRelation) {
    // Use the mapping from OpenAI if available
    if (companyColumn.options?.companyProductMap) {
      // Already have the mapping from OpenAI
    } else {
      // Create mappings for each realistic company
      realisticCompanies.forEach((company) => {
        companyProductMap.set(company.name, company.industry)
      })
    }
  }

  for (let i = 0; i < rowCount; i++) {
    const row: Record<string, any> = {}

    // First pass: generate basic data and company names
    columns.forEach((column) => {
      if (column.type === "company-name") {
        if (column.options?.realistic) {
          const company = realisticCompanies[Math.floor(Math.random() * realisticCompanies.length)]
          row[column.id] = company.name
          // Store the company's industry for product generation
          row._companyIndustry = company.industry
        } else {
          row[column.id] = companies[Math.floor(Math.random() * companies.length)]
        }
      }
    })

    // Second pass: generate all other data, using company context if available
    columns.forEach((column) => {
      if (column.type === "company-name") {
        // Already handled in first pass
        return
      }

      switch (column.type) {
        case "sequential":
          row[column.id] = i + 1
          break
        case "random-number":
          const min = column.options?.min || 0
          const max = column.options?.max || 100
          row[column.id] = randomNumber(min, max)
          break
        case "uuid":
          row[column.id] = crypto.randomUUID()
          break
        case "random-name":
          row[column.id] = randomName()
          break
        case "first-name":
          row[column.id] = firstNames[Math.floor(Math.random() * firstNames.length)]
          break
        case "last-name":
          row[column.id] = lastNames[Math.floor(Math.random() * lastNames.length)]
          break
        case "random-word":
          row[column.id] = randomWord()
          break
        case "date":
          row[column.id] = randomDate()
          break
        case "time":
          const hours = String(Math.floor(Math.random() * 24)).padStart(2, "0")
          const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0")
          const seconds = String(Math.floor(Math.random() * 60)).padStart(2, "0")
          row[column.id] = `${hours}:${minutes}:${seconds}`
          break
        case "datetime":
          row[column.id] = new Date(randomDate()).toISOString()
          break
        case "month":
          row[column.id] = months[Math.floor(Math.random() * months.length)]
          break
        case "weekday":
          row[column.id] = weekdays[Math.floor(Math.random() * weekdays.length)]
          break
        case "email":
          row[column.id] = randomEmail()
          break
        case "phone":
          row[column.id] = randomPhone()
          break
        case "boolean":
          row[column.id] = Math.random() > 0.5 ? true : false
          break
        case "gender":
          row[column.id] = genders[Math.floor(Math.random() * genders.length)]
          break
        case "age":
          row[column.id] = Math.floor(Math.random() * 80) + 18
          break
        case "color-name":
          row[column.id] = colors[Math.floor(Math.random() * colors.length)]
          break
        case "hex-color":
          row[column.id] = hexColors()
          break
        case "rgb-color":
          row[column.id] = rgbColors()
          break
        case "fruit":
          row[column.id] = fruits[Math.floor(Math.random() * fruits.length)]
          break
        case "vegetable":
          row[column.id] = vegetables[Math.floor(Math.random() * vegetables.length)]
          break
        case "dish":
          row[column.id] = dishes[Math.floor(Math.random() * dishes.length)]
          break
        case "drink":
          row[column.id] = drinks[Math.floor(Math.random() * drinks.length)]
          break
        case "game":
          row[column.id] = games[Math.floor(Math.random() * games.length)]
          break
        case "movie":
          row[column.id] = movies[Math.floor(Math.random() * movies.length)]
          break
        case "music-genre":
          row[column.id] = musicGenres[Math.floor(Math.random() * musicGenres.length)]
          break
        case "book":
          row[column.id] = books[Math.floor(Math.random() * books.length)]
          break
        case "company-name":
          // Already handled in first pass
          break
        case "brand":
          row[column.id] = brands[Math.floor(Math.random() * brands.length)]
          break
        case "product":
          // If we have company context, use it to generate a relevant product
          if (row._companyIndustry && industryProducts[row._companyIndustry]) {
            const industrySpecificProducts = industryProducts[row._companyIndustry]
            row[column.id] = industrySpecificProducts[Math.floor(Math.random() * industrySpecificProducts.length)]
          } else {
            row[column.id] = products[Math.floor(Math.random() * products.length)]
          }
          break
        case "country":
          row[column.id] = countries[Math.floor(Math.random() * countries.length)]
          break
        case "city":
          // If we already have a country in this row, try to match a city to it
          const countryCol = columns.find((col) => col.type === "country")
          if (countryCol && row[countryCol.id]) {
            const matchingLocations = realisticLocations.filter((loc) => loc.country === row[countryCol.id])
            if (matchingLocations.length > 0) {
              const location = matchingLocations[Math.floor(Math.random() * matchingLocations.length)]
              row[column.id] = location.city
            } else {
              row[column.id] = cities[Math.floor(Math.random() * cities.length)]
            }
          } else {
            row[column.id] = cities[Math.floor(Math.random() * cities.length)]
          }
          break
        case "state":
          row[column.id] = states[Math.floor(Math.random() * states.length)]
          break
        case "job-title":
          row[column.id] = jobTitles[Math.floor(Math.random() * jobTitles.length)]
          break
        case "department":
          row[column.id] = departments[Math.floor(Math.random() * departments.length)]
          break
        case "sentence":
          const wordCount = Math.floor(Math.random() * 10) + 5
          const sentenceWords = Array.from({ length: wordCount }, () => randomWord())
          row[column.id] = sentenceWords.join(" ") + "."
          break
        case "paragraph":
          const sentenceCount = Math.floor(Math.random() * 5) + 3
          const sentences = []
          for (let i = 0; i < sentenceCount; i++) {
            const wordCount = Math.floor(Math.random() * 10) + 5
            const sentenceWords = Array.from({ length: wordCount }, () => randomWord())
            sentences.push(sentenceWords.join(" ") + ".")
          }
          row[column.id] = sentences.join(" ")
          break
        case "lorem":
          row[column.id] =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          break
        case "username":
          const name = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()
          const num = Math.floor(Math.random() * 1000)
          row[column.id] = `${name}${num}`
          break
        case "password":
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
          let password = ""
          for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length))
          }
          row[column.id] = password
          break
        case "url":
          const domains = ["example.com", "test.org", "demo.net", "sample.io", "mock.dev"]
          const domain = domains[Math.floor(Math.random() * domains.length)]
          row[column.id] = `https://www.${domain}/page${Math.floor(Math.random() * 100)}`
          break
        case "domain":
          const domainNames = ["example", "test", "demo", "sample", "mock", "acme", "globex", "widget"]
          const tlds = [".com", ".org", ".net", ".io", ".dev", ".co", ".app"]
          const domainName = domainNames[Math.floor(Math.random() * domainNames.length)]
          const tld = tlds[Math.floor(Math.random() * tlds.length)]
          row[column.id] = `${domainName}${tld}`
          break
        case "ip-address":
          const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".")
          row[column.id] = ip
          break
        case "currency":
          row[column.id] = currencies[Math.floor(Math.random() * currencies.length)]
          break
        case "price":
          const price = (Math.random() * 1000).toFixed(2)
          row[column.id] = `$${price}`
          break
        case "zip-code":
          let zipCode = ""
          for (let i = 0; i < 5; i++) {
            zipCode += Math.floor(Math.random() * 10)
          }
          row[column.id] = zipCode
          break
        case "latitude":
          row[column.id] = (Math.random() * 180 - 90).toFixed(6)
          break
        case "longitude":
          row[column.id] = (Math.random() * 360 - 180).toFixed(6)
          break
        case "address":
          const streetNum = Math.floor(Math.random() * 9000) + 1000
          const streetNames = [
            "Main St",
            "Oak Ave",
            "Maple Rd",
            "Washington Blvd",
            "Park Lane",
            "Cedar Dr",
            "Pine St",
            "Elm Rd",
          ]
          const streetName = streetNames[Math.floor(Math.random() * streetNames.length)]
          const city = cities[Math.floor(Math.random() * cities.length)]
          const state = states[Math.floor(Math.random() * states.length)]
          let zip = ""
          for (let i = 0; i < 5; i++) {
            zip += Math.floor(Math.random() * 10)
          }
          row[column.id] = `${streetNum} ${streetName}, ${city}, ${state} ${zip}`
          break
        case "credit-card":
          let ccNum = ""
          for (let i = 0; i < 4; i++) {
            let group = ""
            for (let j = 0; j < 4; j++) {
              group += Math.floor(Math.random() * 10)
            }
            ccNum += group + (i < 3 ? "-" : "")
          }
          row[column.id] = ccNum
          break
        case "user-agent":
          const browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"]
          const browser = browsers[Math.floor(Math.random() * browsers.length)]
          const version = `${Math.floor(Math.random() * 100)}.${Math.floor(Math.random() * 10)}`
          row[column.id] =
            `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}/${version}`
          break
        case "seo-name":
          // Generate SEO name from another column if available
          const nameColumn = columns.find(
            (col) => col.type === "company-name" || col.type === "product" || col.type === "random-name",
          )

          if (nameColumn && row[nameColumn.id]) {
            row[column.id] = generateSeoName(row[nameColumn.id])
          } else {
            row[column.id] = generateSeoName(randomWord() + " " + randomWord())
          }
          break
        default:
          row[column.id] = "Unknown type"
      }
    })

    // Remove temporary properties
    delete row._companyIndustry

    rows.push(row)
  }

  return { columns, rows }
}
