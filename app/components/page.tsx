"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { categories } from "@/latex/categories"
import { components as rawComponents } from "@/latex/component"
import { Copy} from "lucide-react"
import { CodePreviewToggle } from "@/components/codePreviewToggle"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
// Add TypeScript interfaces
interface Subcategory {
  [key: string]: string
}

interface Category {
  name: string
  description: string
  subcategories: Subcategory
}

interface Categories {
  [key: string]: Category
}

interface Component {
  name: string
  description: string
  category: string
  subcategory: string
  packages?: string[]
  setupCode?: string
  code: string
  img: string
}

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [components, setComponents] = useState<Component[]>(rawComponents)

  const [filteredComponents, setFilteredComponents] = useState<Component[]>(components)

  // Filter components based on selection
  useEffect(() => {
    let filtered = components
    if (selectedCategory !== "all") {
      filtered = components.filter((comp) => comp.category === selectedCategory)
    }
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((comp) => comp.subcategory === selectedSubcategory)
    }
    setFilteredComponents(filtered)
  }, [selectedCategory, selectedSubcategory])

  // Fix the subcategories mapping
  const getSubcategories = (category: string) => {
    const selectedCat = (categories as Categories)[category]
    return selectedCat ? Object.entries(selectedCat.subcategories) : []
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:justify-between">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row gap-4">
        <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value)
              setSelectedSubcategory("all")
            }}
          >
            <SelectTrigger className="w-full md:w-[250px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-70">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {Object.entries(categories).map(([key, category]) => (
                <SelectItem key={key} value={key}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedCategory !== "all" && (
            <Select value={selectedSubcategory} onValueChange={(value) => setSelectedSubcategory(value)}>
              <SelectTrigger className="w-full md:w-[250px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-70">
                <SelectValue placeholder="Select a subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories(selectedCategory).map(([key, name]) => (
                  <SelectItem key={key} value={key}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          </div>
          <Link href="new" className="w-full md:w-[250px] bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
              Add new Component
          </Link>
          
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredComponents.map((component, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{component.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{component.description}</p>

              {/* Packages */}
              {component.packages && component.packages.length > 0 && (
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Required Packages</AccordionTrigger>
                        <AccordionContent>
                        <div className="relative">
                          <button
                            onClick={() => component.packages && navigator.clipboard.writeText(component.packages.join('\n'))}
                            className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors duration-200"
                          >
                            <Copy className="h-4 w-4 inline-block mr-1" />
                            Copy
                          </button>
                          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                            <code className="text-gray-800 dark:text-gray-200 font-mono">
                              {component.packages.join('\n')}
                            </code>
                          </pre>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              )}

              {/* Setup Code */}
              {component.setupCode && (
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Setup Code</AccordionTrigger>
                        <AccordionContent>
                            <div className="relative">
                            <button
                                onClick={() => component.setupCode && navigator.clipboard.writeText(component.setupCode)}
                                className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors duration-200"
                            >
                                <Copy className="h-4 w-4 inline-block mr-1" />
                                Copy
                            </button>
                            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-800 dark:text-gray-200 font-mono">{component.setupCode}</code>
                            </pre>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              )}

              {/* Code Preview Toggle */}
              <CodePreviewToggle code={component.code} img={component.img}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

