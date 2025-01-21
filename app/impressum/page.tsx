import Link from "next/link"

export default function Impressum() {
    return (
        <main className="flex min-h-screen flex-col items-center py-16 px-4 bg-white dark:bg-gray-800">
            <div className="max-w-3xl w-full  bg-slate-100 dark:bg-gray-800 rounded-lg  p-8 my-8">
                <h1 className="text-4xl font-bold mb-12 text-center border-b pb-4 dark:text-white">
                    Impressum
                </h1>
                <div className="space-y-8">
                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
                            <p className="font-medium">Simon Peter Rothgang</p>
                            <p>Rudolf-Harbig-Weg 2b</p>
                            <p>48149 Münster</p>
                        </div>
                    </section>
                    
                    <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                            Kontakt
                        </h2>
                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
                            <p>E-Mail: <Link href="mailto:srothgan@uni-muenster.de" 
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                srothgan@uni-muenster.de
                            </Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}