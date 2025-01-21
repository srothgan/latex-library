export const table2 = {
    name: "Comparison Table",
    category: "tables",
    description: "Comparison table with alternating row colors and mixed column alignments",
    packages: [
        "\\usepackage{booktabs}",
        "\\usepackage{xcolor}",
        "\\usepackage{array}"
    ],
    code: `\\begin{table}[htbp]
    \\centering
    \\caption{Product Comparison Overview}
    \\rowcolors{2}{gray!15}{white}
    \\begin{tabular}{l>{\\\$}r<{.00}cp{4.5cm}}
    \\toprule
    \\rowcolor{gray!25}
    Product & {Price} & Available & Description \\\\
    \\midrule
    Basic Model & 299 & Yes & Entry-level version with standard features \\\\
    Pro Version & 599 & Yes & Enhanced performance with additional tools \\\\
    Enterprise & 999 & No & Full feature set with priority support \\\\
    Custom Build & 1499 & Limited & Tailored solution with specific modifications \\\\
    \\bottomrule
    \\end{tabular}
    \\label{tab:comparison}
    \\end{table}`,
    img: "/table/table2.png",
}
