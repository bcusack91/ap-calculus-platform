export const calcabConcavityPart1Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c1-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points\n\n**Part 1 of 7 — Understanding Concavity**\n\n> 🔑 **Key Concept:** The second derivative tells us about the *shape* of a curve — whether it bends upward (concave up) or downward (concave down)."
    },
    {
      "id": "c1-def",
      "type": "text" as const,
      "content": "## 📖 What Is Concavity?\n\n$$f''(x) > 0 \\implies \\text{concave up (cup shape, ∪)}$$\n$$f''(x) < 0 \\implies \\text{concave down (cap shape, ∩)}$$\n\n### Interpretations\n\n| Concavity | $f''$ | $f'$ | Rate of Change |\n|-----------|--------|------|----------------|\n| Up (∪) | $> 0$ | Increasing | Accelerating |\n| Down (∩) | $< 0$ | Decreasing slope | Decelerating |\n\n### Visual Test\n\n- **Concave up:** Tangent lines lie BELOW the curve\n- **Concave down:** Tangent lines lie ABOVE the curve\n- If you drive along the curve, you'd turn your steering wheel left (concave up) or right (concave down)\n\n---\n\n### Example: $f(x) = x^3$\n\n$f''(x) = 6x$\n\n- $x < 0$: $f'' < 0$ → concave down\n- $x > 0$: $f'' > 0$ → concave up\n- $x = 0$: inflection point (concavity changes!)"
    },
    {
      "id": "c1-finding",
      "type": "text" as const,
      "content": "## Finding Intervals of Concavity\n\n### Step-by-Step Process\n\n1. Find $f''(x)$\n2. Set $f''(x) = 0$ and find where $f''$ is undefined → candidate inflection points\n3. Test intervals: create a sign chart for $f''$\n4. $f'' > 0$ → concave up; $f'' < 0$ → concave down\n\n### Example: $f(x) = x^4 - 6x^2 + 1$\n\n$f'(x) = 4x^3 - 12x$\n$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$\n\n$f''(x) = 0$: $x = -1, 1$\n\nSign chart for $f''$:\n| Interval | $f''$ | Concavity |\n|----------|--------|----------|\n| $(-\\infty, -1)$ | $+$ | Up |\n| $(-1, 1)$ | $-$ | Down |\n| $(1, \\infty)$ | $+$ | Up |"
    },
    {
      "id": "c1-quiz",
      "type": "multiple-choice" as const,
      "content": "**Concavity Basics** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "If $f''(3) = -5$, at $x = 3$ the graph is:",
            "options": [
              "Concave down",
              "Concave up",
              "At an inflection point",
              "Decreasing"
            ],
            "correctAnswer": 0,
            "explanation": "$f'' < 0$ means concave down."
          },
          {
            "question": "$f(x) = \\sin x$ on $(0, \\pi)$ is:",
            "options": [
              "Concave down",
              "Concave up",
              "Both",
              "Neither"
            ],
            "correctAnswer": 0,
            "explanation": "$f''(x) = -\\sin x < 0$ on $(0, \\pi)$."
          },
          {
            "question": "Concave up means tangent lines are:",
            "options": [
              "Below the curve",
              "Above the curve",
              "Touching the curve",
              "Parallel to x-axis"
            ],
            "correctAnswer": 0,
            "explanation": "When concave up, the curve bends above its tangent lines."
          }
        ]
      }
    },
    {
      "id": "c1-inflection",
      "type": "text" as const,
      "content": "## 📌 Inflection Points\n\nAn inflection point is where concavity **changes**.\n\n### Requirements\n\n1. $f''(c) = 0$ or $f''(c)$ is undefined\n2. $f''$ changes sign at $c$\n3. $f(c)$ exists (point must be on the curve)\n\n### ⚠️ $f''(c) = 0$ Does NOT Guarantee an Inflection Point!\n\n$f(x) = x^4$: $f''(x) = 12x^2$, $f''(0) = 0$\n\nBut $f''$ does NOT change sign at $0$ (it's positive on both sides).\n\nSo $x = 0$ is NOT an inflection point.\n\n### Shortcut: If $f''$ changes sign → inflection point. If $f''$ doesn't change sign → not an inflection point.\n\n> **AP Tip:** When asked to \"justify\" an inflection point, you MUST show the sign change in $f''$. Simply stating $f''(c) = 0$ is insufficient."
    },
    {
      "id": "c1-input",
      "type": "input-boxes" as const,
      "content": "**Find Inflection Points** 🧮\n\n**1)** $f(x) = x^3 - 3x$. Inflection point x-coordinate: (integer)\n\n**2)** $f(x) = x^4 - 4x^3$. Number of inflection points: (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "0",
          "2"
        ],
        "hint1": "$f''(x) = 6x = 0$ at $x = 0$. Sign changes. Inflection at $x = 0$.",
        "hint2": "$f''(x) = 12x^2 - 24x = 12x(x-2) = 0$ at $x = 0, 2$. Both are sign changes.",
        "explanation": "1) $x = 0$. 2) Two inflection points at $x = 0$ and $x = 2$."
      }
    },
    {
      "id": "c1-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Concavity Concepts** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$f''(x) = 0$ is:",
            "options": [
              "Necessary but not sufficient for inflection",
              "Sufficient for inflection",
              "Neither",
              "Both necessary and sufficient"
            ]
          },
          {
            "label": "A linear function is:",
            "options": [
              "Neither concave up nor down",
              "Concave up",
              "Concave down",
              "Both"
            ]
          },
          {
            "label": "At an inflection point, the tangent line:",
            "options": [
              "Crosses the curve",
              "Is horizontal",
              "Is vertical",
              "Doesn't touch the curve"
            ]
          }
        ],
        "correctAnswers": [
          "Necessary but not sufficient for inflection",
          "Neither concave up nor down",
          "Crosses the curve"
        ],
        "hint1": "$f(x) = x^4$ shows $f''= 0$ without inflection.",
        "hint2": "Linear: $f'' = 0$ everywhere.",
        "hint3": "At an inflection point, the tangent crosses from one side to the other.",
        "explanation": "Key distinctions about inflection points and concavity."
      }
    },
    {
      "id": "c1-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "How many inflection points does $f(x) = x^5$ have?",
            "options": [
              "$1$ (at $x = 0$)",
              "$0$",
              "$2$",
              "$5$"
            ],
            "correctAnswer": 0,
            "explanation": "$f''(x) = 20x^3 = 0$ at $x = 0$. Sign change: negative for $x < 0$, positive for $x > 0$."
          },
          {
            "question": "On a velocity-time graph, an inflection point on the position graph corresponds to:",
            "options": [
              "Maximum or minimum velocity",
              "Zero velocity",
              "Constant velocity",
              "Zero position"
            ],
            "correctAnswer": 0,
            "explanation": "Inflection on position → $f''= 0$ → $a(t) = 0$. Velocity has local extreme."
          }
        ]
      }
    }
  ]
}
