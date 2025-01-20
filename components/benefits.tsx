import { Share2, Copy, BadgeCheck, Box} from 'lucide-react';

export default function Benefits(){
    const benefits = [
        {
          icon: <BadgeCheck className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 stroke-[1.5]" />,
          title: "MIT Licensed",
          description: "Free to use in any project, commercial or personal"
        },
        {
          icon: <Share2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 stroke-[1.5]" />,
          title: "Collaboration",
          description: "Work together with the academic community"
        },
        {
          icon: <Box className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 stroke-[1.5]" />,
          title: "Ready-made Components",
          description: "Tables, graphs, and models ready for use"
        },
        {
          icon: <Copy className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 stroke-[1.5]" />,
          title: "Easy Reuse",
          description: "Copy, paste, and customize components instantly"
        }
      ];

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-100 dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/30">
                {benefit.icon}
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}