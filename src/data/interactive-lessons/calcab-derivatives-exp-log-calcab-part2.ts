export const calcabDerivExpLogPart2Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del2-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 2\n\n**Part 2 of 7 — Natural Logarithm Derivatives**"
    },
    {
      "id": "del2-ln",
      "type": "text" as const,
      "content": "## 📖 The Derivative of $\\ln x$\n\n$$\\boxed{\\frac{d}{dx}[\\ln x] = \\frac{1}{x}, \\quad x > 0}$$\n\nWith the chain rule:\n\n$$\\frac{d}{dx}[\\ln(g(x))] = \\frac{g'(x)}{g(x)}$$\n\n| Function | Derivative |\n|----------|----------|\n| $\\ln(2x)$ | $1/x$ |\n| $\\ln(x^2)$ | $2/x$ |\n| $\\ln(\\sin x)$ | $\\cot x$ |\n| $\\ln(x^2 + 1)$ | $\\frac{2x}{x^2+1}$ |\n| $\\ln|x|$ | $1/x$ (for $x \\neq 0$) |\n\n### Why $\\ln|x|$?\n\n$$\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$$ for all $x \\neq 0$.\n\nThis extends the domain to negative $x$, which is important for integration."
    },
    {
      "id": "del2-general",
      "type": "text" as const,
      "content": "## General Logarithmic Derivatives\n\n$$\\boxed{\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}}$$\n\nSince $\\log_a x = \\frac{\\ln x}{\\ln a}$:\n\n$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{\\ln a} \\cdot \\frac{1}{x} = \\frac{1}{x \\ln a}$$\n\n| Function | Derivative |\n|----------|----------|\n| $\\log_{10} x$ | $\\frac{1}{x \\ln 10}$ |\n| $\\log_2 x$ | $\\frac{1}{x \\ln 2}$ |\n| $\\log_a(g(x))$ | $\\frac{g'(x)}{g(x) \\ln a}$ |\n\n> **AP Note:** $\\log_{10}$ and $\\log_2$ rarely appear on the AP exam. Focus on $\\ln x$."
    },
    {
      "id": "del2-quiz",
      "type": "multiple-choice" as const,
      "content": "**Logarithmic Derivatives** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "$\\frac{d}{dx}[\\ln(3x)] = $",
            "options": [
              "$1/x$",
              "$3/x$",
              "$1/(3x)$",
              "$\\ln 3$"
            ],
            "correctAnswer": 0,
            "explanation": "$\\frac{d}{dx}[\\ln(3x)] = \\frac{3}{3x} = \\frac{1}{x}$. Or: $\\ln(3x) = \\ln 3 + \\ln x$, so derivative is $0 + 1/x$."
          },
          {
            "question": "$\\frac{d}{dx}[\\ln(x^3)] = $",
            "options": ["$3/x$", "$1/x^3$", "$3x^2$", "$\\frac{1}{3x}$"],
            "correctAnswer": 0,
            "explanation": "$\\frac{3x^2}{x^3} = \\frac{3}{x}$. Alternatively: $\\ln(x^3) = 3\\ln x$, so derivative is $3/x$."
          },
          {
            "question": "$\\frac{d}{dx}[\\ln(\\cos x)] = $",
            "options": [
              "$-\\tan x$",
              "$\\tan x$",
              "$1/\\cos x$",
              "$-\\sec x$"
            ],
            "correctAnswer": 0,
            "explanation": "$\\frac{-\\sin x}{\\cos x} = -\\tan x$."
          }
        ]
      }
    },
    {
      "id": "del2-log-props",
      "type": "text" as const,
      "content": "## 📌 Simplify with Log Properties First\n\nWhen the inside of a logarithm is a product, quotient, or power, use log properties to split it **before** differentiating. Each piece then needs only the basic $\\frac{g'}{g}$ rule.\n\n| Property | Rewrite |\n|----------|---------|\n| Product | $\\ln(AB) = \\ln A + \\ln B$ |\n| Quotient | $\\ln\\frac{A}{B} = \\ln A - \\ln B$ |\n| Power | $\\ln(A^k) = k\\ln A$ |\n\n### Example: $f(x) = \\ln\\left(\\frac{x^2\\sqrt{x+1}}{(2x-1)^3}\\right)$\n\n**Step 1. Split:** $f(x) = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 3\\ln(2x-1)$\n\n**Step 2. Differentiate each term:**\n\n$$f'(x) = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{6}{2x-1}$$\n\nThe last term needs the chain rule: $\\frac{d}{dx}\\ln(2x-1) = \\frac{2}{2x-1}$, and $3 \\cdot 2 = 6$.\n\n### Example: $f(x) = \\ln(x\\,e^{3x})$\n\n$$f(x) = \\ln x + 3x \\quad \\Longrightarrow \\quad f'(x) = \\frac{1}{x} + 3$$\n\n> **AP Tip:** Without the split, the first example needs the quotient rule inside the chain rule. Splitting first is faster and avoids algebra mistakes."
    },
    {
      "id": "del2-input",
      "type": "input-boxes" as const,
      "content": "**Logarithmic Derivative Practice** 🧮\n\n**1)** $\\frac{d}{dx}[\\ln(5x)]$ at $x = 1$: (integer)\n\n**2)** $\\frac{d}{dx}[\\ln(x^2+1)]$ at $x = 0$: (integer)\n\n**3)** $\\frac{d}{dx}[x\\ln x]$ at $x = 1$: (integer)",
      "exercise": {
        "boxes": 3,
        "correctAnswers": [
          "1",
          "0",
          "1"
        ],
        "hint1": "$1/x$ at $x = 1$ is $1$.",
        "hint2": "$2x/(x^2+1)$ at $x = 0$ is $0$.",
        "hint3": "$\\ln x + 1$ at $x = 1$ is $0 + 1 = 1$.",
        "explanation": "1) $1$. 2) $0$. 3) $1$."
      }
    },
    {
      "id": "del2-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Log Rules in Derivatives** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$\\frac{d}{dx}[\\ln(e^x)] = $",
            "options": [
              "$1$",
              "$e^x$",
              "$1/e^x$",
              "$x$"
            ]
          },
          {
            "label": "$\\frac{d}{dx}[e^{\\ln x}] = $",
            "options": [
              "$1$",
              "$e^{\\ln x}/x$",
              "$x$",
              "$\\ln x$"
            ]
          },
          {
            "label": "Before differentiating, $\\ln\\left(\\frac{x^2}{x+1}\\right)$ can be rewritten as:",
            "options": [
              "$2\\ln x - \\ln(x+1)$",
              "$\\frac{2\\ln x}{\\ln(x+1)}$",
              "$2\\ln x + \\ln(x+1)$",
              "$\\ln(x^2) \\cdot \\ln(x+1)$"
            ]
          }
        ],
        "correctAnswers": [
          "$1$",
          "$1$",
          "$2\\ln x - \\ln(x+1)$"
        ],
        "hint1": "$\\ln(e^x) = x$, derivative is $1$.",
        "hint2": "$e^{\\ln x} = x$, derivative is $1$.",
        "hint3": "The log of a quotient is a difference of logs, and the exponent 2 moves to the front.",
        "explanation": "$\\ln$ and $e^x$ are inverses: $\\ln(e^x) = x$ and $e^{\\ln x} = x$."
      }
    },
    {
      "id": "del2-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "The domain of $\\frac{d}{dx}[\\ln x]$ is:",
            "options": [
              "$x > 0$",
              "All real numbers",
              "$x \\neq 0$",
              "$x \\geq 0$"
            ],
            "correctAnswer": 0,
            "explanation": "$\\ln x$ is defined only for $x > 0$, so its derivative $1/x$ has the same domain."
          },
          {
            "question": "$\\frac{d}{dx}[\\ln|\\sec x + \\tan x|] = $",
            "options": [
              "$\\sec x$",
              "$\\sec x\\tan x + \\sec^2 x$",
              "$\\sec x \\tan x$",
              "$1/(\\sec x + \\tan x)$"
            ],
            "correctAnswer": 0,
            "explanation": "This is a classic result. $\\frac{\\sec x \\tan x + \\sec^2 x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x$. Stopping at the numerator forgets to divide by the inside function."
          }
        ]
      }
    }
  ]
}
