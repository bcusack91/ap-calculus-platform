export const calcabDerivExpLogPart7Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del7-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 7\n\n**Part 7 of 7 — AP Exam Review & Comprehensive Practice**"
    },
    {
      "id": "del7-formulas",
      "type": "text" as const,
      "content": "## 📖 Complete Formula Summary\n\n| Function | Derivative |\n|----------|----------|\n| $e^x$ | $e^x$ |\n| $e^{g(x)}$ | $g'(x)e^{g(x)}$ |\n| $a^x$ | $a^x \\ln a$ |\n| $\\ln x$ | $1/x$ |\n| $\\ln(g(x))$ | $g'(x)/g(x)$ |\n| $\\log_a x$ | $1/(x \\ln a)$ |\n\n### Inverse Connections\n\n$$\\frac{d}{dx}[\\ln(e^x)] = 1 \\quad \\text{and} \\quad \\frac{d}{dx}[e^{\\ln x}] = 1$$\n\n### Integration Preview\n\n$$\\int e^x \\, dx = e^x + C$$\n$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$\n$$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$"
    },
    {
      "id": "del7-ap-problems",
      "type": "text" as const,
      "content": "## AP-Style Free Response\n\n### Problem: $f(x) = x^2 e^{-x}$ for $x \\geq 0$\n\n**(a)** Find critical points:\n$f'(x) = xe^{-x}(2 - x) = 0$\n$x = 0$ (min) and $x = 2$ (max, $f(2) = 4/e^2$)\n\n**(b)** Inflection points:\n$f''(x) = e^{-x}(x^2 - 4x + 2) = 0$\n$x = 2 \\pm \\sqrt{2}$\n\n**(c)** End behavior:\n$\\lim_{x \\to \\infty} x^2 e^{-x} = 0$ (exp dominates)\n\n**(d)** Tangent line at $x = 1$:\n$f(1) = e^{-1}$ and $f'(1) = 1 \\cdot e^{-1}(2 - 1) = e^{-1}$, so $y = \\frac{1}{e} + \\frac{1}{e}(x - 1) = \\frac{x}{e}$"
    },
    {
      "id": "del7-quiz",
      "type": "multiple-choice" as const,
      "content": "**Comprehensive Review** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "$\\frac{d}{dx}[\\ln(\\sec x)] = $",
            "options": [
              "$\\tan x$",
              "$\\sec x$",
              "$1/\\sec x$",
              "$\\sec x \\tan x$"
            ],
            "correctAnswer": 0,
            "explanation": "$\\frac{\\sec x \\tan x}{\\sec x} = \\tan x$."
          },
          {
            "question": "If $f(x) = 2^{\\sin x}$, then $f'(x) = $",
            "options": [
              "$2^{\\sin x} \\cdot \\cos x \\cdot \\ln 2$",
              "$2^{\\sin x} \\cdot \\cos x$",
              "$2^{\\sin x} \\cdot \\frac{\\cos x}{\\ln 2}$",
              "$\\sin x \\cdot 2^{\\sin x - 1}$"
            ],
            "correctAnswer": 0,
            "explanation": "$a^{g(x)} \\cdot g'(x) \\cdot \\ln a$ with $a = 2$, $g(x) = \\sin x$. The factor $\\ln 2$ multiplies; it does not divide, and it cannot be dropped."
          },
          {
            "question": "If $f(x) = e^{2x}\\cos x$, then $f'(0) = $",
            "options": [
              "$2$",
              "$1$",
              "$-2$",
              "$0$"
            ],
            "correctAnswer": 0,
            "explanation": "Product rule with the chain rule: $f'(x) = 2e^{2x}\\cos x - e^{2x}\\sin x$, so $f'(0) = 2(1)(1) - (1)(0) = 2$. Forgetting the chain-rule factor 2 gives $1$, a sign slip on the $\\cos x$ term gives $-2$, and differentiating only the cosine factor, $-e^{2x}\\sin x$, gives $0$."
          }
        ]
      }
    },
    {
      "id": "del7-mistakes",
      "type": "text" as const,
      "content": "## 📌 Common AP Mistakes\n\n### ❌ Confusing $\\frac{d}{dx}[a^x]$ and $\\frac{d}{dx}[x^a]$\n\n- $\\frac{d}{dx}[2^x] = 2^x \\ln 2$ (exponential rule)\n- $\\frac{d}{dx}[x^2] = 2x$ (power rule)\n\n### ❌ Forgetting $\\ln a$ in $\\frac{d}{dx}[a^x]$\n\n$\\frac{d}{dx}[3^x] \\neq 3^x$ — you need the $\\ln 3$ factor!\n\n### ❌ Domain errors with $\\ln x$\n\n$\\ln x$ requires $x > 0$. Don't forget to check domain.\n\n### ❌ Misapplying the chain rule\n\n$\\frac{d}{dx}[e^{x^2}] = 2xe^{x^2}$, NOT $e^{x^2}$!"
    },
    {
      "id": "del7-input",
      "type": "input-boxes" as const,
      "content": "**Final Challenge** 🧮\n\n**1)** $\\frac{d}{dx}[e^x \\cdot \\ln x]$ at $x = 1$: (enter as e)\n\n**2)** $\\frac{d}{dx}[3^x]$ at $x = 0$: (enter as ln3)",
      "exercise": {
        "questions": [{ "question": "(1)", "answer": "e", "acceptableAnswers": ["e", "2.718"] }, { "question": "(2)", "answer": "ln3", "acceptableAnswers": ["ln3", "ln(3)", "ln 3", "1.099"] }],
        "hint1": "Product rule: $e^x \\ln x + e^x/x$. At $x = 1$: $e(0) + e(1) = e$.",
        "hint2": "$3^0 \\ln 3 = \\ln 3$.",
        "explanation": "1) $e$. 2) $\\ln 3$."
      }
    },
    {
      "id": "del7-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Final Review** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "Is $\\frac{d}{dx}[e^x]$ given to you on the AP Calculus exam?",
            "options": [
              "No — memorize it",
              "Yes — on the reference page",
              "Only on the BC exam",
              "Only in calculator sections"
            ]
          },
          {
            "label": "The most common AP question on exp/log derivatives involves:",
            "options": [
              "Chain rule with $e^{g(x)}$",
              "Derivatives of plain $e^x$ only",
              "Base-10 logarithm identities",
              "Euler's formula with complex numbers"
            ]
          }
        ],
        "correctAnswers": [
          "No — memorize it",
          "Chain rule with $e^{g(x)}$"
        ],
        "hint1": "AP Calculus provides no formula sheet.",
        "hint2": "AP loves testing chain rule with exponential and log compositions.",
        "explanation": "Memorize all derivative formulas. The AP primarily tests chain rule combinations."
      }
    },
    {
      "id": "del7-exit",
      "type": "multiple-choice" as const,
      "content": "**Final Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "Which grows fastest as $x \\to \\infty$?",
            "options": [
              "$e^x$",
              "$x^{100}$",
              "$\\ln(x^{100})$",
              "$2^x$"
            ],
            "correctAnswer": 0,
            "explanation": "Exponentials beat powers and logarithms, and between exponentials the larger base wins: $e \\approx 2.718 > 2$, so $e^x$ outgrows $2^x$. $\\ln(x^{100}) = 100\\ln x$ grows slowest of all."
          },
          {
            "question": "The function $f(x) = e^x - x$ has minimum value:",
            "options": [
              "$1$ at $x = 0$",
              "$0$ at $x = 0$",
              "$e - 1$ at $x = 1$",
              "No minimum value"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = e^x - 1 = 0$ at $x = 0$, and $f'$ changes from negative to positive there. $f(0) = 1 - 0 = 1$. Treating $e^0$ as $0$ gives $0$; solving $e^x = e$ instead gives $x = 1$."
          }
        ]
      }
    }
  ]
}
