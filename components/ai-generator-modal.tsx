"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles } from "lucide-react"
import type { Column } from "./csv-generator"

interface AIGeneratorModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onGenerate: (columns: Column[]) => void
}

export function AIGeneratorModal({ open, onOpenChange, onGenerate }: AIGeneratorModalProps) {
  const [apiKey, setApiKey] = useState("")
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!apiKey.trim()) {
      setError("Please enter your OpenAI API key")
      return
    }

    if (!prompt.trim()) {
      setError("Please enter a prompt describing the data you want to generate")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-columns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey,
          prompt,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate columns")
      }

      const data = await response.json()
      onGenerate(data.columns)
      onOpenChange(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const examplePrompts = [
    "Generate a list of 50 customers with names, emails, and purchase history",
    "Create a dataset of products with IDs, names, prices, and categories",
    "Make a table of employees with departments, salaries, and hire dates",
    "Generate list of company names, products, locations, SEO names, and locations",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-dark-900 border-dark-800">
        <DialogHeader>
          <DialogTitle className="text-xl text-dark-200 flex items-center gap-2">
            <Sparkles className="text-dark-400" size={20} />
            Generate with AI
          </DialogTitle>
          <DialogDescription className="text-dark-400">
            Describe the data you want to generate and AI will create appropriate columns and data types. The system
            will ensure realistic and contextually appropriate data relationships.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="openai-key" className="text-dark-300">
              OpenAI API Key
            </Label>
            <Input
              id="openai-key"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
            />
            <p className="text-xs text-dark-500">Your API key is only used for this request and is not stored.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-dark-300">
              Describe your data
            </Label>
            <Textarea
              id="prompt"
              placeholder="E.g., Generate a list of customers with names, emails, and purchase history"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
            />
            <p className="text-xs text-dark-500">
              For realistic data, be specific about the types of entities you want. For example, "Generate a list of
              tech companies with their appropriate products and locations."
            </p>
          </div>

          <div className="space-y-2">
            <Label className="text-dark-300">Example prompts</Label>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((examplePrompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs bg-dark-850"
                  onClick={() => setPrompt(examplePrompt)}
                >
                  {examplePrompt}
                </Button>
              ))}
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Columns"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
