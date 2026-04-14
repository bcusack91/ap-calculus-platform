export const calcabDerivExpLogPart6Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del6-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 6\n\n**Part 6 of 7 — Graphing & Analysis**"
    },
    {
      "id": "del6-exp-graph",
      "type": "text" as const,
      "content": "## 📖 Graphing Exponential Functions\n\n### $f(x) = e^{-x^2/2}$ (Normal Distribution Shape)\n\n**First derivative:** $f'(x) = -xe^{-x^2/2}$\n\n- $f'(x) = 0$ at $x = 0$\n- $f'(x) > 0$ for $x < 0$ (increasing)\n- $f'(x) < 0$ for $x > 0$ (decreasing)\n\n**Second derivative:** $f''(x) = (x^2 - 1)e^{-x^2/2}$\n\n- $f''(x) = 0$ at $x = \\pm 1$ (inflection points)\n- Concave up for $|x| > 1$, concave down for $|x| < 1$\n\n**Summary:** Bell-shaped curve, max at $x = 0$, inflection at $\\pm 1$.\n\n---\n\n### $f(x) = xe^{-x}$\n\n$f'(x) = e^{-x}(1 - x)$: max at $x = 1$, $f(1) = 1/e$\n\n$f''(x) = e^{-x}(x - 2)$: inflection at $x = 2$\n\nAs $x \\to \\infty$: $f(x) \\to 0$ (exponential dominates polynomial)"
    },
    {
      "id": "del6-log-graph",
      "type": "text" as const,
      "content": "## Graphing Logarithmic Functions\n\n### $f(x) = x - \\ln x$ (for $x > 0$)\n\n$f'(x) = 1 - 1/x = (x-1)/x$\n\n$f'(x) = 0$ at $x = 1$: minimum $f(1) = 1$\n\n$f''(x) = 1/x^2 > 0$: always concave up\n\n### $f(x) = \\frac{\\ln x}{x}$\n\n$f'(x) = \\frac{1 - \\ln x}{x^2}$\n\nMax at $x = e$: $f(e) = 1/e \\approx 0.368$\n\nAs $x \\to \\infty$: $f(x) \\to 0$ (log grows slower than any power)\n\n---\n\n### Growth Rate Comparison\n\n$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^p} = 0 \\quad \\text{for any } p > 0$$\n\n$$\\lim_{x \\to \\infty} \\frac{x^p}{e^x} = 0 \\quad \\text{for any } p > 0$$\n\n> **Hierarchy:** $\\ln x \\ll x^p \\ll e^x$ as $x \\to \\infty$"
    },
    {
      "id": "del6-quiz",
      "type": "multiple-choice" as const,
      "content": "**Graphing Analysis** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "$f(x) = x^2 e^{-x}$ has inflection points at:",
            "options": [
              "$x = 2 \\pm \\sqrt{2}$",
              "$x = 0$ and $x = 2$",
              "$x = 1$",
              "$x = 2$"
            ],
            "correctAnswer": 0,
            "explanation": "$f'' = e^{-x}(x^2 - 4x + 2) = 0$ when $x = 2 \\pm \\sqrt{2}$."
          },
          {
            "question": "As $x \\to \\infty$, $e^x/x^{100}$:",
            "options": [
              "$\\to \\infty$",
              "$\\to 0$",
              "$\\to 1$",
              "Oscillates"
            ],
            "correctAnswer": 0,
            "explanation": "Exponential growth dominates any polynomial."
          },
          {
            "question": "$\\ln x$ grows _____ than $\\sqrt{x}$:",
            "options": [
              "Slower",
              "Faster",
              "At the same rate",
              "It depends"
            ],
            "correctAnswer": 0,
            "explanation": "$\\ln x / \\sqrt{x} \\to 0$ as $x \\to \\infty$."
          }
        ]
      }
    },
    {
      "id": "del6-analysis",
      "type": "text" as const,
      "content": "## 📌 Complete Analysis Example\n\n### $f(x) = x^2 \\ln x$ (for $x > 0$)\n\n**Domain:** $x > 0$\n\n**First derivative:** $f'(x) = 2x\\ln x + x = x(2\\ln x + 1)$\n\n$f'(x) = 0$: $x = 0$ (not in domain) or $\\ln x = -1/2$ → $x = e^{-1/2} = 1/\\sqrt{e}$\n\n**Second derivative:** $f''(x) = 2\\ln x + 3$\n\n$f''(x) = 0$: $\\ln x = -3/2$ → $x = e^{-3/2}$\n\n**At $x = 1/\\sqrt{e}$:** $f = (1/e)(-1/2) = -1/(2e)$ (minimum)\n\n**Behavior:** $f(x) \\to 0$ as $x \\to 0^+$ (since $x^2$ dominates $|\\ln x|$)"
    },
    {
      "id": "del6-input",
      "type": "input-boxes" as const,
      "content": "**Graphing Practice** 🧮\n\n**1)** $f(x) = xe^{-x}$ max value: (enter as 1/e)\n\n**2)** $f(x) = \\ln x / x$ max value: (enter as 1/e)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "1/e",
          "1/e"
        ],
        "hint1": "Max at $x = 1$: $f(1) = 1 \\cdot e^{-1} = 1/e$.",
        "hint2": "Max at $x = e$: $f(e) = \\ln e / e = 1/e$.",
        "explanation": "Both functions have maximum value $1/e$, an interesting coincidence."
      }
    },
    {
      "id": "del6-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Function Behavior** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$\\lim_{x \\to \\infty} x^{10}/e^x = $",
            "options": [
              "$0$",
              "$\\infty$",
              "$1$",
              "DNE"
            ]
          },
          {
            "label": "$\\lim_{x \\to 0^+} x \\ln x = $",
            "options": [
              "$0$",
              "$-\\infty$",
              "$\\infty$",
              "DNE"
            ]
          },
          {
            "label": "$e^x$ passes $x^{100}$ at approximately:",
            "options": [
              "$x \\approx 700$",
              "$x \\approx 100$",
              "$x \\approx 10$",
              "$x \\approx 1$"
            ]
          }
        ],
        "correctAnswers": [
          "$0$",
          "$0$",
          "$x \\approx 700$"
        ],
        "hint1": "Exponential always wins.",
        "hint2": "$x \\to 0^+$: $x \\to 0$ beats $\\ln x \\to -\\infty$.",
        "hint3": "It takes a while for $e^x$ to overtake $x^{100}$.",
        "explanation": "Exponential eventually dominates polynomials, and $x \\to 0$ dominates $\\ln x$."
      }
    },
    {
      "id": "del6-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "The number of inflection points of $f(x) = e^{-x^2}$ is:",
            "options": [
              "$2$",
              "$0$",
              "$1$",
              "$4$"
            ],
            "correctAnswer": 0,
            "explanation": "$f'' = 0$ at $x = \\pm 1/\\sqrt{2}$: two inflection points."
          },
          {
            "question": "For $f(x) = e^x - x$, the minimum value is:",
            "options": [
              "$1$",
              "$0$",
              "$e$",
              "$-1$"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = e^x - 1 = 0$ at $x = 0$. $f(0) = 1 - 0 = 1$."
          }
        ]
      }
    }
  ]
}
