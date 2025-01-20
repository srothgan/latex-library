export const components = [
  {
    name: "Scientific Data Table with Error Margins",
    category: "tables",
    subcategory: "scientific",
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
  },

  {
    name: "Syntax Highlighted Code Block",
    category: "code",
    subcategory: "syntax",
    description: "Code listing with syntax highlighting, line numbers, and caption",
    packages: [
      "\\usepackage{listings}",
      "\\usepackage{xcolor}",
      "\\usepackage{caption}"
    ],
    setupCode: `\\lstset{
    language=Python,
    backgroundcolor=\\color{gray!10},
    basicstyle=\\ttfamily\\small,
    keywordstyle=\\color{blue},
    stringstyle=\\color{red},
    commentstyle=\\color{green!60!black},
    numbers=left,
    numberstyle=\\tiny,
    numbersep=5pt,
    frame=single,
    breaklines=true,
    breakatwhitespace=true,
    showstringspaces=false
}`,
    code: `\\begin{lstlisting}[caption={Example Python Function},label={lst:example}]
def calculate_average(numbers):
    """
    Calculate the average of a list of numbers
    """
    total = sum(numbers)  # Sum all numbers
    count = len(numbers)  # Get count of numbers
    return total / count  # Return average
\\end{lstlisting}`,
  }
];
