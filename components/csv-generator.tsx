"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ColumnDefinition } from "@/components/column-definition"
import { DataPreview } from "@/components/data-preview"
import { generateData } from "@/lib/data-generator"
import { Download, Plus, FileSpreadsheet, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AIGeneratorModal } from "./ai-generator-modal"

export type Column = {
  id: string
  name: string
  type: string
  options?: {
    min?: number
    max?: number
    format?: string
    realistic?: boolean
    category?: string
    companyProductMap?: Record<string, string>
    useCompanyContext?: boolean
  }
}

export type GeneratedData = {
  columns: Column[]
  rows: Record<string, any>[]
}

export function CSVGenerator() {
  const [columns, setColumns] = useState<Column[]>([{ id: "col1", name: "ID", type: "sequential" }])
  const [rowCount, setRowCount] = useState(10)
  const [generatedData, setGeneratedData] = useState<GeneratedData | null>(null)
  const [aiModalOpen, setAiModalOpen] = useState(false)

  const addColumn = () => {
    const newId = `col${columns.length + 1}`
    setColumns([...columns, { id: newId, name: `Column ${columns.length + 1}`, type: "random-word" }])
  }

  const updateColumn = (id: string, updatedColumn: Partial<Column>) => {
    setColumns(columns.map((col) => (col.id === id ? { ...col, ...updatedColumn } : col)))
  }

  const removeColumn = (id: string) => {
    if (columns.length > 1) {
      setColumns(columns.filter((col) => col.id !== id))
    }
  }

  const generateCSV = () => {
    const data = generateData(columns, rowCount)
    setGeneratedData(data)
  }

  const handleAIGenerate = (newColumns: Column[]) => {
    setColumns(newColumns)
    // Automatically generate preview after AI generates columns
    setTimeout(() => {
      const data = generateData(newColumns, rowCount)
      setGeneratedData(data)
    }, 100)
  }

  const downloadCSV = () => {
    if (!generatedData) return

    const headers = generatedData.columns.map((col) => col.name).join(",")
    const rows = generatedData.rows.map((row) => generatedData.columns.map((col) => row[col.id]).join(",")).join("\n")

    const csvContent = `${headers}\n${rows}`
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "generated-data.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-8">
      <Card className="border-dark-800 bg-dark-900 shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="rowCount" className="text-dark-300 font-medium">
                Number of Rows
              </Label>
              <Input
                id="rowCount"
                type="number"
                min="1"
                max="1000"
                value={rowCount}
                onChange={(e) => setRowCount(Number.parseInt(e.target.value) || 10)}
                className="bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
              />
            </div>
            <div className="flex gap-2 sm:mt-auto">
              <Button onClick={generateCSV}>Generate Preview</Button>
              <Button onClick={() => setAiModalOpen(true)}>
                <Sparkles size={16} className="mr-2" />
                Generate with AI
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark-200">Column Definitions</h2>
              <Button size="sm" onClick={addColumn}>
                <Plus size={16} className="mr-2" />
                Add Column
              </Button>
            </div>
            <div className="space-y-6">
              {columns.map((column, index) => (
                <div
                  key={column.id}
                  className="p-4 rounded-lg bg-dark-850 shadow-sm border border-dark-800 hover:border-dark-700 transition-colors"
                >
                  <ColumnDefinition
                    column={column}
                    updateColumn={updateColumn}
                    removeColumn={removeColumn}
                    canRemove={columns.length > 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {generatedData && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-dark-200 flex items-center gap-2">
              <FileSpreadsheet className="text-dark-400" size={20} />
              Data Preview
            </h2>
            <Button onClick={downloadCSV}>
              <Download size={16} className="mr-2" />
              Download CSV
            </Button>
          </div>
          <Card className="border-dark-800 overflow-hidden bg-dark-900 shadow-md">
            <DataPreview data={generatedData} />
          </Card>
        </div>
      )}

      <AIGeneratorModal open={aiModalOpen} onOpenChange={setAiModalOpen} onGenerate={handleAIGenerate} />
    </div>
  )
}
