import { GraduationCap, Briefcase, Server, BookOpen, GitBranch } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About The LaTeX Library
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Simplifying academic writing through shared LaTeX components
        </p>

        {/* Project Mission */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Project Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
                <BookOpen className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                Why This Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                While programming languages have extensive component libraries, LaTeX lacks a centralized platform for sharing reusable components. This project aims to fill that gap, allowing researchers to focus on content rather than formatting.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
                <GitBranch className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The LaTeX Library is built on the principle of academic collaboration. By sharing and reusing components, we can collectively improve the quality of academic documents while saving valuable time.
              </p>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            About the Creator
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Master Student in Information Systems at University of Münster
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Role</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Research Assistant for Process Management at the Chair of Professor Becker
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Server className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Infrastructure support provided by University of Münster
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}