export const code1 = {
    name: "Syntax Highlighted Code Block",
    category: "code",
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
    \"\"\"
    Calculate the average of a list of numbers
    \"\"\"
    total = sum(numbers)  # Sum all numbers
    count = len(numbers)  # Get count of numbers
    return total / count  # Return average
\\end{lstlisting}`,
img: "/code/code1.png",
}