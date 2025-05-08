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
      ],
    },
    {
      category: "Text",
      types: [
        { value: "random-word", label: "Random Word" },
        { value: "sentence", label: "Sentence" },
        { value: "paragraph", label: "Paragraph" },
        { value: "lorem", label: "Lorem Ipsum" },
      ],
    },
    {
      category: "Colors",
      types: [
        { value: "color-name", label: "Color Name" },
        { value: "hex-color", label: "Hex Color" },
        { value: "rgb-color", label: "RGB Color" },
      ],
    },
    {
      category: "Food & Drink",
      types: [
        { value: "fruit", label: "Fruit" },
        { value: "vegetable", label: "Vegetable" },
        { value: "dish", label: "Dish" },
        { value: "drink", label: "Drink" },
      ],
    },
    {
      category: "Entertainment",
      types: [
        { value: "game", label: "Game" },
        { value: "movie", label: "Movie" },
        { value: "music-genre", label: "Music Genre" },
        { value: "book", label: "Book" },
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
        <div className="overflow-y-auto pr-2 -mr-2">
          <div className="flex flex-wrap">
            {filteredCategories.map((category) => (
              <div key={category.category} className="w-full md:w-1/2 p-2">
                <h3 className="font-medium text-sm text-dark-400 uppercase tracking-wider mb-1">{category.category}</h3>
                <div className="grid gap-1">
                  {category.types.map((type) => (
                    <Button
                      key={type.value}
                      variant="ghost"
                      className={cn(
                        "justify-start h-auto py-1.5 px-3 text-dark-300",
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
      </DialogContent>
    </Dialog>
  )
}
