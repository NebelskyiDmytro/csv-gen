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

// Programming Languages
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
  "Swift",
  "TypeScript",
  "Go",
  "Rust",
  "Kotlin",
  "Scala",
  "R",
  "Dart",
  "Perl",
  "Haskell",
  "Lua",
  "Clojure",
  "Elixir",
  "F#",
  "COBOL",
  "Fortran",
  "Assembly",
]

// Frameworks
const frameworks = [
  "React",
  "Angular",
  "Vue",
  "Django",
  "Flask",
  "Spring",
  "ASP.NET",
  "Laravel",
  "Express",
  "Ruby on Rails",
  "Symfony",
  "Next.js",
  "Flutter",
  "TensorFlow",
  "PyTorch",
  "Svelte",
  "Bootstrap",
  "Tailwind CSS",
  "jQuery",
  "Ember",
]

// Databases
const databases = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Oracle",
  "SQL Server",
  "Redis",
  "Cassandra",
  "DynamoDB",
  "Firebase",
  "Elasticsearch",
  "MariaDB",
  "Neo4j",
  "CouchDB",
  "Supabase",
  "Firestore",
  "InfluxDB",
  "Couchbase",
]

// Operating Systems
const operatingSystems = [
  "Windows 11",
  "Windows 10",
  "macOS",
  "Ubuntu",
  "Debian",
  "Fedora",
  "CentOS",
  "Red Hat Enterprise Linux",
  "Android",
  "iOS",
  "Chrome OS",
  "FreeBSD",
]

// Browsers
const browsers = [
  "Chrome",
  "Firefox",
  "Safari",
  "Edge",
  "Opera",
  "Brave",
  "Vivaldi",
  "Internet Explorer",
  "Tor Browser",
  "DuckDuckGo",
]

// Device Types
const deviceTypes = [
  "Smartphone",
  "Laptop",
  "Desktop",
  "Tablet",
  "Smart Watch",
  "Smart TV",
  "Gaming Console",
  "IoT Device",
  "VR Headset",
  "Server",
]

// Screen Resolutions
const screenResolutions = [
  "1920x1080",
  "1366x768",
  "2560x1440",
  "3840x2160",
  "1280x720",
  "1440x900",
  "1600x900",
  "1024x768",
  "2560x1600",
  "3440x1440",
]

// File Extensions
const fileExtensions = [
  ".jpg",
  ".png",
  ".pdf",
  ".docx",
  ".xlsx",
  ".mp3",
  ".mp4",
  ".html",
  ".css",
  ".js",
  ".json",
  ".xml",
  ".csv",
  ".txt",
  ".zip",
  ".exe",
]

// Social Platforms
const socialPlatforms = [
  "Facebook",
  "Instagram",
  "Twitter",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Reddit",
  "Snapchat",
  "Discord",
  "Twitch",
  "WhatsApp",
]

// Content Categories
const contentCategories = [
  "News",
  "Entertainment",
  "Sports",
  "Technology",
  "Science",
  "Health",
  "Business",
  "Politics",
  "Education",
  "Travel",
  "Food",
  "Fashion",
]

// Blood Types
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

// Medications
const medications = [
  "Aspirin",
  "Ibuprofen",
  "Acetaminophen",
  "Amoxicillin",
  "Lisinopril",
  "Atorvastatin",
  "Metformin",
  "Levothyroxine",
  "Albuterol",
  "Omeprazole",
]

// Insurance Providers
const insuranceProviders = [
  "Blue Cross Blue Shield",
  "UnitedHealthcare",
  "Aetna",
  "Cigna",
  "Humana",
  "Kaiser Permanente",
  "Anthem",
  "Centene",
  "Molina Healthcare",
  "WellCare",
]

// Medical Specialties
const medicalSpecialties = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Neurology",
  "Obstetrics",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Urology",
  "Immunology",
  "Rheumatology",
]

// Degrees
const degrees = [
  "Bachelor of Arts",
  "Bachelor of Science",
  "Master of Arts",
  "Master of Science",
  "Doctor of Philosophy",
  "Doctor of Medicine",
  "Juris Doctor",
  "Associate of Arts",
  "Bachelor of Business Administration",
  "Master of Business Administration",
]

// Fields of Study
const fieldsOfStudy = [
  "Computer Science",
  "Business Administration",
  "Psychology",
  "Engineering",
  "Biology",
  "Chemistry",
  "Mathematics",
  "Physics",
  "English Literature",
  "History",
  "Political Science",
  "Sociology",
  "Economics",
  "Art",
  "Music",
]

// Grades
const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]

// Education Levels
const educationLevels = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Degree",
  "Vocational Training",
  "Certificate",
]

// Vehicle Types
const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Van",
  "Coupe",
  "Convertible",
  "Hatchback",
  "Wagon",
  "Crossover",
  "Motorcycle",
  "Electric Vehicle",
  "Hybrid",
]

// Makes and Models
const makeModels = [
  "Toyota Camry",
  "Honda Civic",
  "Ford F-150",
  "Chevrolet Silverado",
  "Tesla Model 3",
  "BMW 3 Series",
  "Mercedes-Benz C-Class",
  "Audi A4",
  "Nissan Altima",
  "Subaru Outback",
  "Jeep Wrangler",
  "Hyundai Sonata",
]

// Travel Classes
const travelClasses = ["Economy", "Premium Economy", "Business", "First Class", "Basic Economy"]

// Sports
const sports = [
  "Football",
  "Basketball",
  "Baseball",
  "Soccer",
  "Tennis",
  "Golf",
  "Hockey",
  "Cricket",
  "Rugby",
  "Volleyball",
  "Swimming",
  "Athletics",
]

// Team Names
const teamNames = [
  "Eagles",
  "Tigers",
  "Lions",
  "Bears",
  "Wolves",
  "Sharks",
  "Falcons",
  "Warriors",
  "Knights",
  "Titans",
  "Spartans",
  "Hurricanes",
  "Thunder",
]

// Player Positions
const playerPositions = [
  "Quarterback",
  "Forward",
  "Guard",
  "Pitcher",
  "Striker",
  "Defender",
  "Midfielder",
  "Goalie",
  "Center",
  "Winger",
  "Shortstop",
  "Point Guard",
]

// Leagues
const leagues = [
  "NFL",
  "NBA",
  "MLB",
  "NHL",
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
  "MLS",
  "ATP",
  "WTA",
  "PGA Tour",
  "UFC",
  "Formula 1",
]

// Payment Methods
const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Bank Transfer",
  "Venmo",
  "Cash",
  "Cryptocurrency",
  "Check",
]

// Bank Names
const bankNames = [
  "Chase",
  "Bank of America",
  "Wells Fargo",
  "Citibank",
  "Capital One",
  "TD Bank",
  "US Bank",
  "PNC Bank",
  "HSBC",
  "Barclays",
  "Santander",
]

// Order Statuses
const orderStatuses = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
  "Refunded",
  "On Hold",
  "Backordered",
  "Completed",
  "Failed",
  "Returned",
]

// Shipping Methods
const shippingMethods = [
  "Standard",
  "Express",
  "Overnight",
  "Two-Day",
  "Free Shipping",
  "Local Pickup",
  "International",
  "Priority",
  "Economy",
]

// Cuisines
const cuisines = [
  "Italian",
  "Chinese",
  "Mexican",
  "Japanese",
  "Indian",
  "Thai",
  "French",
  "Greek",
  "Spanish",
  "Korean",
  "Vietnamese",
  "American",
  "Mediterranean",
]

// Dietary Restrictions
const dietaryRestrictions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Kosher",
  "Halal",
  "Keto",
  "Paleo",
  "Low-Carb",
  "Sugar-Free",
]

// Continents
const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"]

// Timezones
const timezones = [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+04:00",
  "UTC+05:00",
  "UTC+06:00",
  "UTC+07:00",
  "UTC+08:00",
  "UTC+09:00",
  "UTC+10:00",
  "UTC+11:00",
  "UTC+12:00",
]

// Industries
const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Hospitality",
  "Entertainment",
  "Transportation",
  "Energy",
  "Agriculture",
  "Construction",
  "Real Estate",
  "Media",
  "Telecommunications",
]

// Business Types
const businessTypes = [
  "Corporation",
  "LLC",
  "Partnership",
  "Sole Proprietorship",
  "Nonprofit",
  "Cooperative",
  "S-Corporation",
  "B-Corporation",
  "Franchise",
  "Startup",
]

// Generate a random account number
const generateAccountNumber = () => {
  let accNum = ""
  for (let i = 0; i < 10; i++) {
    accNum += Math.floor(Math.random() * 10)
  }
  return accNum
}

// Generate a random transaction ID
const generateTransactionId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let txId = "TX-"
  for (let i = 0; i < 8; i++) {
    txId += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return txId
}

// Generate a random IBAN
const generateIBAN = () => {
  const countryCode = "US"
  const checkDigits = "12"
  let bankCode = ""
  for (let i = 0; i < 4; i++) {
    bankCode += Math.floor(Math.random() * 10)
  }
  let accountNumber = ""
  for (let i = 0; i < 12; i++) {
    accountNumber += Math.floor(Math.random() * 10)
  }
  return `${countryCode}${checkDigits}${bankCode}${accountNumber}`
}

// Generate a random SWIFT code
const generateSWIFT = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let swift = ""
  // Bank code (4 characters)
  for (let i = 0; i < 4; i++) {
    swift += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  // Country code (2 characters)
  swift += "US"
  // Location code (2 characters)
  for (let i = 0; i < 2; i++) {
    swift += Math.floor(Math.random() * 10)
  }
  // Branch code (3 characters, optional)
  for (let i = 0; i < 3; i++) {
    swift += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return swift
}

// Generate a random crypto address
const generateCryptoAddress = () => {
  const chars = "abcdef0123456789"
  let address = "0x"
  for (let i = 0; i < 40; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return address
}

// Generate a random product ID
const generateProductId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let pid = "P"
  for (let i = 0; i < 7; i++) {
    pid += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return pid
}

// Generate a random SKU
const generateSKU = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let sku = ""
  for (let i = 0; i < 8; i++) {
    sku += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return sku
}

// Generate a random order ID
const generateOrderId = () => {
  const chars = "0123456789"
  let oid = "ORD-"
  for (let i = 0; i < 6; i++) {
    oid += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return oid
}

// Generate a random tracking number
const generateTrackingNumber = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let tracking = ""
  for (let i = 0; i < 12; i++) {
    tracking += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return tracking
}

// Generate a random discount code
const generateDiscountCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Generate a random license plate
const generateLicensePlate = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const nums = "0123456789"
  let plate = ""
  for (let i = 0; i < 3; i++) {
    plate += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  plate += " "
  for (let i = 0; i < 3; i++) {
    plate += nums.charAt(Math.floor(Math.random() * nums.length))
  }
  return plate
}

// Generate a random VIN
const generateVIN = () => {
  const chars = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789" // Excluding I, O, Q
  let vin = ""
  for (let i = 0; i < 17; i++) {
    vin += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return vin
}

// Generate a random flight number
const generateFlightNumber = () => {
  const airlines = ["AA", "DL", "UA", "WN", "BA", "LH", "AF", "EK", "QF", "SQ"]
  const airline = airlines[Math.floor(Math.random() * airlines.length)]
  const flightNum = Math.floor(Math.random() * 9000) + 1000
  return `${airline}${flightNum}`
}

// Generate a random medical record number
const generateMedicalRecordNumber = () => {
  let mrn = "MRN"
  for (let i = 0; i < 8; i++) {
    mrn += Math.floor(Math.random() * 10)
  }
  return mrn
}

// Generate a random diagnosis code
const generateDiagnosisCode = () => {
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26))
  const num1 = Math.floor(Math.random() * 10)
  const num2 = Math.floor(Math.random() * 10)
  return `${letter}${num1}${num2}.${Math.floor(Math.random() * 10)}`
}

// Generate a random student ID
const generateStudentId = () => {
  let sid = "S"
  for (let i = 0; i < 7; i++) {
    sid += Math.floor(Math.random() * 10)
  }
  return sid
}

// Generate a random tax ID
const generateTaxId = () => {
  let taxId = ""
  for (let i = 0; i < 2; i++) {
    taxId += Math.floor(Math.random() * 10)
  }
  taxId += "-"
  for (let i = 0; i < 7; i++) {
    taxId += Math.floor(Math.random() * 10)
  }
  return taxId
}

// Generate a random quote
const generateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "In the middle of difficulty lies opportunity.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Quality is not an act, it is a habit.",
  ]
  return quotes[Math.floor(Math.random() * quotes.length)]
}

// Generate a random headline
const generateHeadline = () => {
  const headlines = [
    "New Study Reveals Surprising Benefits of Coffee",
    "Tech Giant Announces Revolutionary Product",
    "Scientists Make Breakthrough Discovery",
    "Global Economy Shows Signs of Recovery",
    "Local Team Wins Championship in Dramatic Fashion",
    "Experts Warn of Climate Change Impact",
    "New Policy Aims to Address Housing Crisis",
    "Researchers Develop Innovative Solution",
    "Industry Leaders Gather for Annual Conference",
    "Community Comes Together for Charitable Cause",
  ]
  return headlines[Math.floor(Math.random() * headlines.length)]
}

// Generate a random HSL color
const generateHSLColor = () => {
  const h = Math.floor(Math.random() * 360)
  const s = Math.floor(Math.random() * 101)
  const l = Math.floor(Math.random() * 101)
  return `hsl(${h}, ${s}%, ${l}%)`
}

// Generate a random color palette
const generateColorPalette = () => {
  const colors = []
  for (let i = 0; i < 5; i++) {
    colors.push(hexColors())
  }
  return colors.join(", ")
}

// Generate a random year
const generateYear = () => {
  return Math.floor(Math.random() * 100) + 1950
}

// Generate a random quarter
const generateQuarter = () => {
  return `Q${Math.floor(Math.random() * 4) + 1}`
}

// Generate a random Unix timestamp
const generateUnixTimestamp = () => {
  return Math.floor(Math.random() * 2000000000)
}

// Generate a random MAC address
const generateMACAddress = () => {
  const hexChars = "0123456789ABCDEF"
  let mac = ""
  for (let i = 0; i < 6; i++) {
    let octet = ""
    for (let j = 0; j < 2; j++) {
      octet += hexChars.charAt(Math.floor(Math.random() * 16))
    }
    mac += octet + (i < 5 ? ":" : "")
  }
  return mac
}

// Generate a random email domain
const generateEmailDomain = () => {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "aol.com",
    "protonmail.com",
    "mail.com",
    "zoho.com",
    "yandex.com",
  ]
  return domains[Math.floor(Math.random() * domains.length)]
}

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
        case "year":
          row[column.id] = generateYear()
          break
        case "quarter":
          row[column.id] = generateQuarter()
          break
        case "unix-timestamp":
          row[column.id] = generateUnixTimestamp()
          break
        case "email":
          row[column.id] = randomEmail()
          break
        case "email-domain":
          row[column.id] = generateEmailDomain()
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
        case "hsl-color":
          row[column.id] = generateHSLColor()
          break
        case "color-palette":
          row[column.id] = generateColorPalette()
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
        case "cuisine":
          row[column.id] = cuisines[Math.floor(Math.random() * cuisines.length)]
          break
        case "ingredient":
          row[column.id] = [...fruits, ...vegetables][Math.floor(Math.random() * (fruits.length + vegetables.length))]
          break
        case "dietary-restriction":
          row[column.id] = dietaryRestrictions[Math.floor(Math.random() * dietaryRestrictions.length)]
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
        case "tv-show":
          row[column.id] = [
            "Game of Thrones",
            "Breaking Bad",
            "Stranger Things",
            "The Office",
            "Friends",
            "The Crown",
            "The Mandalorian",
            "Black Mirror",
            "The Witcher",
            "Westworld",
          ][Math.floor(Math.random() * 10)]
          break
        case "artist":
          row[column.id] = [
            "Taylor Swift",
            "Ed Sheeran",
            "Beyoncé",
            "Drake",
            "Adele",
            "The Beatles",
            "Michael Jackson",
            "Queen",
            "Billie Eilish",
            "BTS",
          ][Math.floor(Math.random() * 10)]
          break
        case "character":
          row[column.id] = [
            "Harry Potter",
            "Darth Vader",
            "Sherlock Holmes",
            "Iron Man",
            "Wonder Woman",
            "James Bond",
            "Frodo Baggins",
            "Katniss Everdeen",
            "Batman",
            "Captain America",
          ][Math.floor(Math.random() * 10)]
          break
        case "genre":
          row[column.id] = [
            "Action",
            "Comedy",
            "Drama",
            "Horror",
            "Romance",
            "Sci-Fi",
            "Fantasy",
            "Thriller",
            "Mystery",
            "Documentary",
          ][Math.floor(Math.random() * 10)]
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
        case "industry":
          row[column.id] = industries[Math.floor(Math.random() * industries.length)]
          break
        case "business-type":
          row[column.id] = businessTypes[Math.floor(Math.random() * businessTypes.length)]
          break
        case "tax-id":
          row[column.id] = generateTaxId()
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
        case "continent":
          row[column.id] = continents[Math.floor(Math.random() * continents.length)]
          break
        case "timezone":
          row[column.id] = timezones[Math.floor(Math.random() * timezones.length)]
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
        case "quote":
          row[column.id] = generateQuote()
          break
        case "headline":
          row[column.id] = generateHeadline()
          break
        case "article":
          row[column.id] =
            "This is a sample article. " +
            Array.from({ length: 5 }, () => {
              const sentenceCount = Math.floor(Math.random() * 5) + 3
              const sentences = []
              for (let i = 0; i < sentenceCount; i++) {
                const wordCount = Math.floor(Math.random() * 10) + 5
                const sentenceWords = Array.from({ length: wordCount }, () => randomWord())
                sentences.push(sentenceWords.join(" ") + ".")
              }
              return sentences.join(" ")
            }).join(" ")
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
          const tlds = [".com", ".org"]
          const tld = tlds[Math.floor(Math.random() * tlds.length)]
          row[column.id] = `${domainNames[Math.floor(Math.random() * domainNames.length)]}${tld}`
          break
        case "ip-address":
          const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".")
          row[column.id] = ip
          break
        case "mac-address":
          row[column.id] = generateMACAddress()
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
        // New data types
        case "programming-language":
          row[column.id] = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)]
          break
        case "framework":
          row[column.id] = frameworks[Math.floor(Math.random() * frameworks.length)]
          break
        case "database":
          row[column.id] = databases[Math.floor(Math.random() * databases.length)]
          break
        case "os":
          row[column.id] = operatingSystems[Math.floor(Math.random() * operatingSystems.length)]
          break
        case "browser":
          row[column.id] = browsers[Math.floor(Math.random() * browsers.length)]
          break
        case "device-type":
          row[column.id] = deviceTypes[Math.floor(Math.random() * deviceTypes.length)]
          break
        case "screen-resolution":
          row[column.id] = screenResolutions[Math.floor(Math.random() * screenResolutions.length)]
          break
        case "file-extension":
          row[column.id] = fileExtensions[Math.floor(Math.random() * fileExtensions.length)]
          break
        case "social-username":
          const username = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()
          row[column.id] = `@${username}${Math.floor(Math.random() * 1000)}`
          break
        case "hashtag":
          row[column.id] = `#${randomWord().charAt(0).toUpperCase() + randomWord().slice(1)}`
          break
        case "post-type":
          row[column.id] = ["Text", "Image", "Video", "Link", "Poll", "Story", "Reel", "Live"][
            Math.floor(Math.random() * 8)
          ]
          break
        case "engagement-count":
          row[column.id] = Math.floor(Math.random() * 10000)
          break
        case "follower-count":
          row[column.id] = Math.floor(Math.random() * 1000000)
          break
        case "social-platform":
          row[column.id] = socialPlatforms[Math.floor(Math.random() * socialPlatforms.length)]
          break
        case "content-category":
          row[column.id] = contentCategories[Math.floor(Math.random() * contentCategories.length)]
          break
        case "blood-type":
          row[column.id] = bloodTypes[Math.floor(Math.random() * bloodTypes.length)]
          break
        case "medical-record-number":
          row[column.id] = generateMedicalRecordNumber()
          break
        case "diagnosis-code":
          row[column.id] = generateDiagnosisCode()
          break
        case "medication":
          row[column.id] = medications[Math.floor(Math.random() * medications.length)]
          break
        case "treatment":
          row[column.id] = [
            "Surgery",
            "Medication",
            "Physical Therapy",
            "Radiation",
            "Chemotherapy",
            "Counseling",
            "Vaccination",
            "Dialysis",
          ][Math.floor(Math.random() * 8)]
          break
        case "insurance-provider":
          row[column.id] = insuranceProviders[Math.floor(Math.random() * insuranceProviders.length)]
          break
        case "medical-specialty":
          row[column.id] = medicalSpecialties[Math.floor(Math.random() * medicalSpecialties.length)]
          break
        case "degree":
          row[column.id] = degrees[Math.floor(Math.random() * degrees.length)]
          break
        case "field-of-study":
          row[column.id] = fieldsOfStudy[Math.floor(Math.random() * fieldsOfStudy.length)]
          break
        case "course-name":
          row[column.id] = [
            "Introduction to Psychology",
            "Calculus I",
            "World History",
            "Organic Chemistry",
            "Principles of Economics",
            "Creative Writing",
            "Data Structures",
            "Marketing 101",
          ][Math.floor(Math.random() * 8)]
          break
        case "grade":
          row[column.id] = grades[Math.floor(Math.random() * grades.length)]
          break
        case "school-name":
          row[column.id] = [
            "Harvard University",
            "Stanford University",
            "MIT",
            "Oxford University",
            "Cambridge University",
            "Yale University",
            "Princeton University",
            "Columbia University",
          ][Math.floor(Math.random() * 8)]
          break
        case "student-id":
          row[column.id] = generateStudentId()
          break
        case "education-level":
          row[column.id] = educationLevels[Math.floor(Math.random() * educationLevels.length)]
          break
        case "vehicle-type":
          row[column.id] = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)]
          break
        case "license-plate":
          row[column.id] = generateLicensePlate()
          break
        case "vin":
          row[column.id] = generateVIN()
          break
        case "make-model":
          row[column.id] = makeModels[Math.floor(Math.random() * makeModels.length)]
          break
        case "flight-number":
          row[column.id] = generateFlightNumber()
          break
        case "travel-class":
          row[column.id] = travelClasses[Math.floor(Math.random() * travelClasses.length)]
          break
        case "distance":
          row[column.id] = `${Math.floor(Math.random() * 1000)} km`
          break
        case "sport-type":
          row[column.id] = sports[Math.floor(Math.random() * sports.length)]
          break
        case "team-name":
          row[column.id] = teamNames[Math.floor(Math.random() * teamNames.length)]
          break
        case "player-name":
          row[column.id] = randomName()
          break
        case "position":
          row[column.id] = playerPositions[Math.floor(Math.random() * playerPositions.length)]
          break
        case "score":
          row[column.id] = `${Math.floor(Math.random() * 10)} - ${Math.floor(Math.random() * 10)}`
          break
        case "statistic":
          row[column.id] = Math.floor(Math.random() * 100)
          break
        case "league":
          row[column.id] = leagues[Math.floor(Math.random() * leagues.length)]
          break
        case "account-number":
          row[column.id] = generateAccountNumber()
          break
        case "transaction-id":
          row[column.id] = generateTransactionId()
          break
        case "amount":
          row[column.id] = `$${(Math.random() * 10000).toFixed(2)}`
          break
        case "payment-method":
          row[column.id] = paymentMethods[Math.floor(Math.random() * paymentMethods.length)]
          break
        case "bank-name":
          row[column.id] = bankNames[Math.floor(Math.random() * bankNames.length)]
          break
        case "iban":
          row[column.id] = generateIBAN()
          break
        case "swift-code":
          row[column.id] = generateSWIFT()
          break
        case "crypto-address":
          row[column.id] = generateCryptoAddress()
          break
        case "product-id":
          row[column.id] = generateProductId()
          break
        case "sku":
          row[column.id] = generateSKU()
          break
        case "order-id":
          row[column.id] = generateOrderId()
          break
        case "order-status":
          row[column.id] = orderStatuses[Math.floor(Math.random() * orderStatuses.length)]
          break
        case "shipping-method":
          row[column.id] = shippingMethods[Math.floor(Math.random() * shippingMethods.length)]
          break
        case "tracking-number":
          row[column.id] = generateTrackingNumber()
          break
        case "review-rating":
          row[column.id] = Math.floor(Math.random() * 5) + 1
          break
        case "discount-code":
          row[column.id] = generateDiscountCode()
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
