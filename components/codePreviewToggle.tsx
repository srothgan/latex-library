"use client"
import { useState } from "react"
import { Code, Eye, Copy } from "lucide-react"
import Image from "next/image"

interface CodePreviewToggleProps {
  code: string
  img: string
}

export function CodePreviewToggle({ code, img}: CodePreviewToggleProps) {
  const [showPreview, setShowPreview] = useState(true)

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowPreview(true)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              showPreview ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            <Eye className="h-4 w-4 inline-block mr-1" />
            Preview
          </button>
          <button
            onClick={() => setShowPreview(false)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              !showPreview ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            <Code className="h-4 w-4 inline-block mr-1" />
            Code
          </button>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors duration-200"
        >
          <Copy className="h-4 w-4 inline-block mr-1" />
          Copy
        </button>
      </div>
      <div className="relative">
        {showPreview ? (
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
            <Image
              src={img}
              alt="Example code"
              width={300}
              height={300}
              className="w-full"/>
          </div>
        ) : (
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
            <code
              className="text-gray-800 dark:text-gray-200 font-mono"
              dangerouslySetInnerHTML={{ __html: code }}
            ></code>
          </pre>
        )}
      </div>
    </div>
  )
}

