export const calcabDerivExpLogPart5Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del5-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 5\n\n**Part 5 of 7 — Inverse Function Theorem**"
    },
    {
      "id": "del5-theorem",
      "type": "text" as const,
      "content": "## 📖 Inverse Function Derivative Theorem\n\nIf $f$ and $g$ are inverse functions ($g = f^{-1}$), then:\n\n$$\\boxed{g'(x) = \\frac{1}{f'(g(x))}}$$\n\n### Intuition\n\nIf $f$ stretches by factor $m$ at a point, its inverse compresses by factor $1/m$.\n\n### Verification with $e^x$ and $\\ln x$\n\nLet $f(x) = e^x$, $g(x) = \\ln x$.\n\n$f'(x) = e^x$\n\n$g'(x) = \\frac{1}{f'(g(x))} = \\frac{1}{e^{\\ln x}} = \\frac{1}{x}$ ✓\n\n### Example: $f(x) = x^3 + x$\n\n$f(1) = 2$, so $f^{-1}(2) = 1$.\n\n$(f^{-1})'(2) = \\frac{1}{f'(f^{-1}(2))} = \\frac{1}{f'(1)} = \\frac{1}{3(1)^2 + 1} = \\frac{1}{4}$"
    },
    {
      "id": "del5-table",
      "type": "text" as const,
      "content": "## Table-Based Inverse Problems (AP Style)\n\nGiven a table for $f$:\n\n| $x$ | $f(x)$ | $f'(x)$ |\n|-----|--------|----------|\n| 1 | 4 | 3 |\n| 2 | 7 | 5 |\n| 3 | 11 | 2 |\n| 4 | 1 | 6 |\n\nFind $(f^{-1})'(7)$:\n\n$f(2) = 7$, so $f^{-1}(7) = 2$.\n\n$(f^{-1})'(7) = \\frac{1}{f'(f^{-1}(7))} = \\frac{1}{f'(2)} = \\frac{1}{5}$\n\nFind $(f^{-1})'(4)$:\n\n$f(1) = 4$, so $f^{-1}(4) = 1$.\n\n$(f^{-1})'(4) = \\frac{1}{f'(1)} = \\frac{1}{3}$\n\n> **AP Tip:** These table problems appear almost every year. The recipe: find where $f = $ the given value, then take $1/f'$ at that input."
    },
    {
      "id": "del5-quiz",
      "type": "multiple-choice" as const,
      "content": "**Inverse Function Derivatives** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "From the table above, $(f^{-1})'(11) = $",
            "options": [
              "$1/2$",
              "$1/3$",
              "$1/11$",
              "$2$"
            ],
            "correctAnswer": 0,
            "explanation": "$f(3) = 11$, so $f^{-1}(11) = 3$. $(f^{-1})'(11) = 1/f'(3) = 1/2$."
          },
          {
            "question": "If $f'(a) = 0$, then $(f^{-1})$ at $f(a)$:",
            "options": [
              "Has a vertical tangent (derivative undefined)",
              "Has derivative 0",
              "Has derivative 1",
              "Does not exist"
            ],
            "correctAnswer": 0,
            "explanation": "$(f^{-1})' = 1/f' = 1/0$: undefined (vertical tangent on inverse)."
          },
          {
            "question": "If $f(x) = 2x + 3$, then $(f^{-1})'(x) = $",
            "options": [
              "$1/2$",
              "$2$",
              "$1/(2x+3)$",
              "$x/2$"
            ],
            "correctAnswer": 0,
            "explanation": "$f'(x) = 2$ for all $x$, so $(f^{-1})' = 1/2$ everywhere."
          }
        ]
      }
    },
    {
      "id": "del5-practice",
      "type": "text" as const,
      "content": "## 📌 Practice Problems\n\n### Problem 1\n$f(x) = x^5 + 3x^3 + 2x$. Find $(f^{-1})'(6)$.\n\n$f(1) = 1 + 3 + 2 = 6$ ✓\n\n$f'(x) = 5x^4 + 9x^2 + 2$\n\n$f'(1) = 5 + 9 + 2 = 16$\n\n$(f^{-1})'(6) = 1/16$\n\n### Problem 2\n$f(x) = e^{2x}$. Find $(f^{-1})'(e^4)$.\n\n$f(2) = e^4$, so $f^{-1}(e^4) = 2$.\n\n$f'(x) = 2e^{2x}$\n\n$(f^{-1})'(e^4) = \\frac{1}{f'(2)} = \\frac{1}{2e^4}$"
    },
    {
      "id": "del5-input",
      "type": "input-boxes" as const,
      "content": "**Inverse Derivative Practice** 🧮\n\n**1)** $f(x) = x^3$, $(f^{-1})'(8) = $ (enter as fraction)\n\n**2)** $f(x) = e^x$, $(f^{-1})'(1) = $ (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "1/12",
          "1"
        ],
        "hint1": "$f(2) = 8$. $f'(x) = 3x^2$. $(f^{-1})'(8) = 1/f'(2) = 1/12$.",
        "hint2": "$f(0) = 1$. $f'(0) = 1$. $(f^{-1})'(1) = 1/1 = 1$. ($f^{-1} = \\ln x$, and $(\\ln x)' = 1/x = 1$ at $x = 1$.)",
        "explanation": "1) $1/12$. 2) $1$."
      }
    },
    {
      "id": "del5-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Inverse Function Concepts** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "The graph of $f^{-1}$ is the reflection of $f$ over:",
            "options": [
              "$y = x$",
              "The x-axis",
              "The y-axis",
              "The origin"
            ]
          },
          {
            "label": "Where $f$ has a horizontal tangent, $f^{-1}$ has:",
            "options": [
              "A vertical tangent",
              "A horizontal tangent",
              "No tangent",
              "Slope 1"
            ]
          }
        ],
        "correctAnswers": [
          "$y = x$",
          "A vertical tangent"
        ],
        "hint1": "Inverse functions swap $x$ and $y$ coordinates.",
        "hint2": "Horizontal tangent → $f' = 0$ → $(f^{-1})' = 1/0$ → vertical tangent.",
        "explanation": "Inverse functions reflect over $y = x$. Horizontal/vertical tangents swap."
      }
    },
    {
      "id": "del5-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "The inverse function derivative formula is:",
            "options": [
              "$(f^{-1})'(x) = 1/f'(f^{-1}(x))$",
              "$(f^{-1})'(x) = 1/f(x)$",
              "$(f^{-1})'(x) = f'(1/x)$",
              "$(f^{-1})'(x) = -f'(x)$"
            ],
            "correctAnswer": 0,
            "explanation": "The correct formula uses $f'$ evaluated at $f^{-1}(x)$."
          },
          {
            "question": "For a table problem: to find $(f^{-1})'(a)$, first find $x$ where:",
            "options": [
              "$f(x) = a$",
              "$f'(x) = a$",
              "$x = a$",
              "$f(a) = x$"
            ],
            "correctAnswer": 0,
            "explanation": "We need $f^{-1}(a)$, which is the $x$ where $f(x) = a$."
          }
        ]
      }
    }
  ]
}
