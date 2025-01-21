'use client';
import Link from 'next/link';
import { Copy} from "lucide-react"

export default function NewComponent() {

    const category_structure = {
        "id": "your-category", 
        "name": "Your Category",
        "description": "Brief description of the category"
    }
    return (
        <main className="flex min-h-screen flex-col items-center py-16 px-4 bg-white dark:bg-gray-800">
            <div className="max-w-3xl w-full bg-slate-100 dark:bg-gray-800 rounded-lg p-8 my-8">
                <h1 className="text-4xl font-bold mb-12 text-center border-b pb-4 dark:text-white">
                    Contributing Components
                </h1>
                <div className="space-y-8">
                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            How to Contribute
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p className="leading-relaxed">
                                We welcome contributions from the LaTeX community. Follow these steps to add your components:
                            </p>
                            <ol className="list-decimal list-inside space-y-4 ml-4">
                                <li className="p-2 bg-gray-100 dark:bg-gray-600 rounded">
                                    <span className="font-semibold">Fork the Repository</span>
                                    <p className="ml-6 mt-2">Visit our <Link href="https://github.com/srothgan/latex-library" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:underline">GitHub repository</Link> and create your fork</p>
                                </li>
                                <li className="p-2 bg-gray-100 dark:bg-gray-600 rounded">
                                    <span className="font-semibold">Read Contribution Guide</span>
                                    <p className="ml-6 mt-2">Read the contribution guide in <code className="bg-gray-200 dark:bg-gray-500 px-2 py-1 rounded">latex/guide.md</code></p>
                                </li>
                                <li className="p-2 bg-gray-100 dark:bg-gray-600 rounded">
                                    <span className="font-semibold">Add Your Component</span>
                                    <p className="ml-6 mt-2">Place your LaTeX component in the appropriate directory:
                                        <code className="block bg-gray-200 dark:bg-gray-500 p-2 mt-2 rounded">
                                            latex/<br/>
                                            ├── components/<br/>
                                            ├── images/<br/>
                                            ├── categories.js<br/>
                                            └── guide.md
                                        </code>
                                    </p>
                                </li>
                                <li className="p-2 bg-gray-100 dark:bg-gray-600 rounded">
                                    <span className="font-semibold">Add New Category</span>
                                    <p className="ml-6 mt-2">If your component needs a new category:</p>
                                    <div className="ml-6 mt-2">
                                        <p>1. Open <code className="bg-gray-200 dark:bg-gray-500 px-2 py-1 rounded">latex/categories.js</code></p>
                                        <p>2. Add your category following the existing format:</p>
                                        <div className="relative">
                                        <button
                                            onClick={() => category_structure && navigator.clipboard.writeText(JSON.stringify(category_structure, null, 2))}
                                            className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            <Copy className="h-4 w-4 inline-block mr-1" />
                                            Copy
                                        </button>
                                        <code className="block bg-gray-200 dark:bg-gray-500 p-2 my-2 rounded">
                                            {
                                            JSON.stringify(category_structure, null, 2)
                                                .split('\n')
                                                .map((line, i) => (
                                                    <span key={i}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))
                                            }
                                        </code>
                                        </div>
                                        <p className="mt-2">Ensure your category name is clear and descriptive</p>
                                    </div>
                                </li>
                                <li className="p-2 bg-gray-100 dark:bg-gray-600 rounded">
                                    <span className="font-semibold">Create Pull Request</span>
                                    <p className="ml-6 mt-2">Submit your changes through a pull request with clear documentation</p>
                                </li>
                            </ol>
                        </div>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            Need Help?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            If you need assistance or have questions, feel free to:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-center">
                                Contact Us
                            </Link>
                            <Link href="https://github.com/srothgan/latex-library/issues" className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors text-center">
                                Open an Issue
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}