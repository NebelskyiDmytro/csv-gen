"use client"

import type { Column } from "@/components/csv-generator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import { CategorySelector } from "./category-selector"

interface ColumnDefinitionProps {
  column: Column
  updateColumn: (id: string, updatedColumn: Partial<Column>) => void
  removeColumn: (id: string) => void
  canRemove: boolean
}

export function ColumnDefinition({ column, updateColumn, removeColumn, canRemove }: ColumnDefinitionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={`column-name-${column.id}`} className="text-dark-300 font-medium">
          Column Name
        </Label>
        <Input
          id={`column-name-${column.id}`}
          value={column.name}
          onChange={(e) => updateColumn(column.id, { name: e.target.value })}
          className="bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={`column-type-${column.id}`} className="text-dark-300 font-medium">
          Data Type
        </Label>
        <CategorySelector selectedType={column.type} onSelect={(type) => updateColumn(column.id, { type })} />
      </div>

      {column.type === "random-number" && (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={`min-${column.id}`} className="text-dark-300 font-medium">
              Min
            </Label>
            <Input
              id={`min-${column.id}`}
              type="number"
              value={column.options?.min || 0}
              onChange={(e) =>
                updateColumn(column.id, {
                  options: { ...column.options, min: Number.parseInt(e.target.value) || 0 },
                })
              }
              className="bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={`max-${column.id}`} className="text-dark-300 font-medium">
              Max
            </Label>
            <Input
              id={`max-${column.id}`}
              type="number"
              value={column.options?.max || 100}
              onChange={(e) =>
                updateColumn(column.id, {
                  options: { ...column.options, max: Number.parseInt(e.target.value) || 100 },
                })
              }
              className="bg-dark-850 border-dark-800 text-dark-200 focus:border-dark-700 focus:ring-dark-700"
            />
          </div>
        </>
      )}

      {canRemove && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeColumn(column.id)}
          className="text-dark-500 hover:text-red-400 mt-auto"
        >
          <Trash2 size={18} />
        </Button>
      )}
    </div>
  )
}
