export const table1 = {
    name: "Measurement Table",
    category: "tables",
    description: "Professional table for scientific measurements including error margins and units",
    packages: [
    "\\usepackage{booktabs}",
    "\\usepackage{siunitx}"
    ],
    code: `\\begin{table}[htbp]
    \\centering
    \\caption{Experimental Measurements with Uncertainties}
    \\begin{tabular}{
    l
    S[table-format=2.2]
    S[table-format=1.3]
    S[table-format=2.2]
    }
    \\toprule
    {Sample} & {Value (\\si{\\meter})} & {Error (\\si{\\meter})} & {Temperature (\\si{\\celsius})} \\\\
    \\midrule
    A1 & 25.42 & 0.123 & 20.50 \\\\
    B2 & 31.89 & 0.156 & 22.31 \\\\
    C3 & 28.76 & 0.145 & 21.45 \\\\
    \\bottomrule
    \\end{tabular}
    \\label{tab:measurements}
    \\end{table}`,
    img: "/table/table1.png",
}