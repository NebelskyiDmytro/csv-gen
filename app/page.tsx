import { CSVGenerator } from "@/components/csv-generator"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      <main className="container mx-auto py-10 px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-dark-100">CSV Generator</h1>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Create custom CSV files with various data types for testing, development, or any data needs
          </p>
        </div>
        <CSVGenerator />
      </main>
    </div>
  )
}
