import Link from "next/link"


export default function Footer() {
    return (
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900 mt-auto">
            <div className="max-w-7xl mx-auto mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            About
                        </Link>
                        <Link href="/templates" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Components
                        </Link>
                    </nav>
                    <div className="flex gap-6">
                        <Link
                            href="https://github.com/srothgan/latex-library"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            GitHub
                        </Link>
                        <Link href="/impressum" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}