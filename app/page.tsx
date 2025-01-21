import Link from 'next/link';
import Benefits from '@/components/benefits';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">The LaTeX Library</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Open-source LaTeX components for academic excellence</p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Looks cooler in dark mode :)</p>
        <div className="inline-flex items-center justify-center space-x-4">
          <Link href="/components" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
            Browse Library
          </Link>
          <Link href="/new" className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white transition">
            Contribute Component
          </Link>
        </div>
      </div>
      <Benefits />
    </div>
  );
}
