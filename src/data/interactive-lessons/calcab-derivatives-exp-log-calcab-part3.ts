export const calcabDerivExpLogPart3Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del3-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 3\n\n**Part 3 of 7 — Combining with Product, Quotient, Chain Rules**"
    },
    {
      "id": "del3-product",
      "type": "text" as const,
      "content": "## 📖 Product Rule Combinations\n\n### Pattern: $f(x) = p(x) \\cdot e^{q(x)}$\n\n$$f'(x) = p'(x)e^{q(x)} + p(x) \\cdot q'(x)e^{q(x)} = e^{q(x)}[p'(x) + p(x)q'(x)]$$\n\n### Examples\n\n| $f(x)$ | $f'(x)$ |\n|--------|-------|\n| $x^2e^x$ | $e^x(2x + x^2) = xe^x(2+x)$ |\n| $x^3e^{-2x}$ | $e^{-2x}(3x^2 - 2x^3) = x^2e^{-2x}(3-2x)$ |\n| $(x+1)e^{3x}$ | $e^{3x}(1 + 3(x+1)) = e^{3x}(3x+4)$ |\n| $e^x\\cos x$ | $e^x(\\cos x - \\sin x)$ |\n\n> **Pattern:** Factor out $e^{q(x)}$ since it's never zero. This simplifies finding critical points."
    },
    {
      "id": "del3-quotient",
      "type": "text" as const,
      "content": "## Quotient Rule with Exp/Log\n\n### Example 1: $f(x) = \\frac{e^x}{x^2}$\n\n$$f'(x) = \\frac{x^2 e^x - e^x \\cdot 2x}{x^4} = \\frac{e^x(x^2 - 2x)}{x^4} = \\frac{e^x(x-2)}{x^3}$$\n\nCritical point at $x = 2$ (not $x = 0$ — that's not in the domain).\n\n### Example 2: $f(x) = \\frac{\\ln x}{x}$\n\n$$f'(x) = \\frac{(1/x) \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$$\n\n$f'(x) = 0$ when $\\ln x = 1$, i.e., $x = e$.\n\nMaximum of $\\frac{\\ln x}{x}$ at $x = e$: value $= \\frac{1}{e}$.\n\n### Example 3: $f(x) = \\frac{e^x - e^{-x}}{2}$ (this is $\\sinh x$)\n\n$$f'(x) = \\frac{e^x + e^{-x}}{2} = \\cosh x$$"
    },
    {
      "id": "del3-quiz",
      "type": "multiple-choice" as const,
      "content": "**Combined Rules** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "$\\frac{d}{dx}[x \\cdot e^{2x}] = $",
            "options": [
              "$e^{2x}(1 + 2x)$",
              "$2xe^{2x}$",
              "$e^{2x}$",
              "$2e^{2x} + x$"
            ],
            "correctAnswer": 0,
            "explanation": "Product rule: $1 \\cdot e^{2x} + x \\cdot 2e^{2x} = e^{2x}(1+2x)$."
          },
          {
            "question": "$\\frac{\\ln x}{x}$ has a maximum at:",
            "options": [
              "$x = e$",
              "$x = 1$",
              "$x = 0$",
              "$x = e^2$"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = (1 - \\ln x)/x^2 = 0$ when $\\ln x = 1$, so $x = e$."
          },
          {
            "question": "$f(x) = x^2 e^{-x}$ has critical points at:",
            "options": [
              "$x = 0$ and $x = 2$",
              "$x = 0$ only",
              "$x = 2$ only",
              "$x = 1$"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = xe^{-x}(2-x) = 0$: $x = 0$ or $x = 2$. ($e^{-x} \\neq 0$)."
          }
        ]
      }
    },
    {
      "id": "del3-chain",
      "type": "text" as const,
      "content": "## 📌 Nested Chain Rule\n\n### Double Chain Rule\n\n$\\frac{d}{dx}[e^{\\sin(2x)}] = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x)e^{\\sin(2x)}$\n\n$\\frac{d}{dx}[\\ln(\\ln x)] = \\frac{1}{\\ln x} \\cdot \\frac{1}{x} = \\frac{1}{x \\ln x}$\n\n$\\frac{d}{dx}[e^{e^x}] = e^{e^x} \\cdot e^x = e^{x + e^x}$\n\n---\n\n### Implicit with Exp/Log\n\n$e^{xy} = x + y$:\n\n$e^{xy}(y + x\\frac{dy}{dx}) = 1 + \\frac{dy}{dx}$\n\n$(xe^{xy} - 1)\\frac{dy}{dx} = 1 - ye^{xy}$\n\n$\\frac{dy}{dx} = \\frac{1 - ye^{xy}}{xe^{xy} - 1}$"
    },
    {
      "id": "del3-input",
      "type": "input-boxes" as const,
      "content": "**Combined Practice** 🧮\n\n**1)** $\\frac{d}{dx}[xe^x]$ at $x = 0$: (integer)\n\n**2)** $\\frac{d}{dx}[\\frac{\\ln x}{x}]$ at $x = e$: (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "1",
          "0"
        ],
        "hint1": "$e^x(1+x)$ at $x=0$: $1(1) = 1$.",
        "hint2": "$(1 - \\ln e)/e^2 = (1-1)/e^2 = 0$.",
        "explanation": "1) $1$. 2) $0$ (this is the maximum point!)."
      }
    },
    {
      "id": "del3-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Rule Selection** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$f(x) = e^x \\sin x$ needs:",
            "options": [
              "Product rule + chain rule",
              "Chain rule only",
              "Quotient rule",
              "Power rule"
            ]
          },
          {
            "label": "$f(x) = e^{\\ln x}$ simplifies to:",
            "options": [
              "$f(x) = x$, so $f'(x) = 1$",
              "$f(x) = e^x$",
              "$f'(x) = e^{\\ln x}/x$",
              "$f'(x) = \\ln x \\cdot e^{\\ln x}$"
            ]
          },
          {
            "label": "$\\frac{d}{dx}[\\ln(e^{3x})] = $",
            "options": [
              "$3$",
              "$3e^{3x}$",
              "$1/(e^{3x})$",
              "$e^3$"
            ]
          }
        ],
        "correctAnswers": [
          "Product rule + chain rule",
          "$f(x) = x$, so $f'(x) = 1$",
          "$3$"
        ],
        "hint1": "Two functions multiplied: product rule. Each involves transcendental functions.",
        "hint2": "$e^{\\ln x} = x$ by inverse properties.",
        "hint3": "$\\ln(e^{3x}) = 3x$, derivative is $3$.",
        "explanation": "Recognize inverse pairs to simplify before differentiating."
      }
    },
    {
      "id": "del3-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "The function $f(x) = e^{-x^2}$ (Gaussian bell curve) has:",
            "options": [
              "One maximum at $x = 0$",
              "No critical points",
              "Minimum at $x = 0$",
              "Critical points at $x = \\pm 1$"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = -2xe^{-x^2} = 0$ at $x = 0$. $f''(0) = -2 < 0$, so maximum."
          },
          {
            "question": "$\\frac{d}{dx}[e^x + \\ln x]$ at $x = 1$:",
            "options": [
              "$e + 1$",
              "$e$",
              "$1$",
              "$2$"
            ],
            "correctAnswer": 0,
            "explanation": "$e^x + 1/x$ at $x = 1$: $e + 1$."
          }
        ]
      }
    }
  ]
}
