"use client"

import type { GeneratedData } from "@/components/csv-generator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataPreviewProps {
  data: GeneratedData
}

export function DataPreview({ data }: DataPreviewProps) {
  // Only show first 10 rows in preview
  const previewRows = data.rows.slice(0, 10)
  const hasMoreRows = data.rows.length > 10

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-dark-850">
              {data.columns.map((column) => (
                <TableHead key={column.id} className="text-dark-300 font-medium">
                  {column.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {previewRows.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-dark-900" : "bg-dark-850"}>
                {data.columns.map((column) => (
                  <TableCell key={column.id} className="text-dark-300 border-dark-800">
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {hasMoreRows && (
        <div className="p-2 text-center text-sm text-dark-400 border-t border-dark-800 bg-dark-850">
          Showing 10 of {data.rows.length} rows
        </div>
      )}
    </div>
  )
}
