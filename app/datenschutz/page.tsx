export default function Datenschutz() {
    return (
        <main className="flex min-h-screen flex-col items-center py-16 px-4 bg-white dark:bg-gray-800 ">
            <div className="max-w-3xl w-full bg-slate-100 dark:bg-gray-800 rounded-lg p-8 my-8">
                <h1 className="text-4xl font-bold mb-12 text-center border-b pb-4 dark:text-white">
                    Datenschutzerklärung
                </h1>
                <div className="space-y-8">
                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            1. Datenschutz auf einen Blick
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Allgemeine Hinweise zur Datenverarbeitung auf dieser Website.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            2. Hosting
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Information about your hosting provider and data processing.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            3. Allgemeine Hinweise und Pflichtinformationen
                        </h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4">
                            <p className="leading-relaxed">
                                General information about data protection and your rights.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Datenschutz</li>
                                <li>Datenerfassung</li>
                                <li>Ihre Rechte</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}