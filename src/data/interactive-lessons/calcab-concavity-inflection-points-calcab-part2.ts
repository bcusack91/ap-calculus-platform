export const calcabConcavityPart2Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c2-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 2\n\n**Part 2 of 7 — The Second Derivative Test for Extrema**"
    },
    {
      "id": "c2-test",
      "type": "text" as const,
      "content": "## 📖 Second Derivative Test\n\nAt a critical point $c$ where $f'(c) = 0$:\n\n$$\\boxed{f''(c) > 0 \\implies \\text{local minimum at } c}$$\n$$\\boxed{f''(c) < 0 \\implies \\text{local maximum at } c}$$\n$$f''(c) = 0 \\implies \\text{test is inconclusive}$$\n\n### Why It Works\n\n- $f'(c) = 0$ and $f''(c) > 0$: curve is concave up at $c$ → ∪ shape → minimum\n- $f'(c) = 0$ and $f''(c) < 0$: curve is concave down at $c$ → ∩ shape → maximum\n\n### Example: $f(x) = x^3 - 12x + 1$\n\n$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 0$ → $x = \\pm 2$\n\n$f''(x) = 6x$\n\n- $f''(2) = 12 > 0$ → local min at $x = 2$; $f(2) = 8 - 24 + 1 = -15$\n- $f''(-2) = -12 < 0$ → local max at $x = -2$; $f(-2) = -8 + 24 + 1 = 17$"
    },
    {
      "id": "c2-vs-first",
      "type": "text" as const,
      "content": "## Second Derivative Test vs. First Derivative Test\n\n| Feature | First DT | Second DT |\n|---------|----------|----------|\n| Requires | Sign chart of $f'$ | Computing $f''$ |\n| Always works? | Yes | No (inconclusive if $f''= 0$) |\n| Speed | Slower (test intervals) | Faster (one computation) |\n| Information | Also finds increasing/decreasing | Only classifies critical points |\n\n### When Second DT Fails\n\n$f(x) = x^4$: $f'(0) = 0$, $f''(0) = 0$ → inconclusive!\n\nUse First Derivative Test: $f' = 4x^3$ changes from $-$ to $+$ → minimum.\n\n> **AP Tip:** If the second derivative test is inconclusive, explicitly state so and switch to the first derivative test."
    },
    {
      "id": "c2-quiz",
      "type": "multiple-choice" as const,
      "content": "**Second Derivative Test** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "$f(x) = x^4 - 4x^2$. At $x = 0$:",
            "options": [
              "Local maximum",
              "Local minimum",
              "Inconclusive",
              "Not a critical point"
            ],
            "correctAnswer": 0,
            "explanation": "$f'(0) = 0$ ✓. $f''(x) = 12x^2 - 8$. $f''(0) = -8 < 0$ → local max."
          },
          {
            "question": "If $f'(5) = 0$ and $f''(5) = 3$:",
            "options": [
              "Local minimum at $x = 5$",
              "Local maximum",
              "Inflection point",
              "Neither"
            ],
            "correctAnswer": 0,
            "explanation": "$f' = 0$ and $f'' > 0$ → concave up → local minimum."
          },
          {
            "question": "The second derivative test fails when:",
            "options": [
              "$f''(c) = 0$",
              "$f'(c) = 0$",
              "$f(c) = 0$",
              "$f''(c) > 0$"
            ],
            "correctAnswer": 0,
            "explanation": "The test is inconclusive when $f''= 0$ at the critical point."
          }
        ]
      }
    },
    {
      "id": "c2-practice",
      "type": "text" as const,
      "content": "## 📌 Comprehensive Example\n\n### $f(x) = 3x^4 - 4x^3 - 12x^2 + 5$\n\n$f'(x) = 12x^3 - 12x^2 - 24x = 12x(x^2 - x - 2) = 12x(x-2)(x+1)$\n\nCritical points: $x = -1, 0, 2$\n\n$f''(x) = 36x^2 - 24x - 24$\n\n| $c$ | $f''(c)$ | Type | $f(c)$ |\n|-----|----------|------|--------|\n| $-1$ | $36 + 24 - 24 = 36$ | Min | $3 + 4 - 12 + 5 = 0$ |\n| $0$ | $-24$ | Max | $5$ |\n| $2$ | $144 - 48 - 24 = 72$ | Min | $48 - 32 - 48 + 5 = -27$ |\n\nLocal max: $(0, 5)$. Local mins: $(-1, 0)$ and $(2, -27)$."
    },
    {
      "id": "c2-input",
      "type": "input-boxes" as const,
      "content": "**Second DT Practice** 🧮\n\n**1)** $f(x) = x^3 - 3x$. $f''(-1) = $ (integer, determines max/min)\n\n**2)** $f(x) = x^3 - 3x$. $f''(1) = $ (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "-6",
          "6"
        ],
        "hint1": "$f''(x) = 6x$. $f''(-1) = -6 < 0$ → local max.",
        "hint2": "$f''(1) = 6 > 0$ → local min.",
        "explanation": "1) $-6$ (max). 2) $6$ (min)."
      }
    },
    {
      "id": "c2-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Test Selection** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "For $f(x) = x^6$ at $x = 0$:",
            "options": [
              "2nd DT fails, use 1st DT",
              "2nd DT shows minimum",
              "2nd DT shows maximum",
              "Not a critical point"
            ]
          },
          {
            "label": "Advantage of 2nd DT over 1st DT:",
            "options": [
              "Faster — just plug into f''",
              "Always works",
              "Gives more information",
              "Easier to compute"
            ]
          },
          {
            "label": "If $f'(c) = 0$ and $f''(c) = -10$:",
            "options": [
              "Local maximum at c",
              "Local minimum",
              "Inflection point",
              "Saddle point"
            ]
          }
        ],
        "correctAnswers": [
          "2nd DT fails, use 1st DT",
          "Faster — just plug into f''",
          "Local maximum at c"
        ],
        "hint1": "$f''(0) = 0$, test fails. By 1st DT, $f' = 6x^5$ changes sign, so min.",
        "hint2": "One evaluation vs. making a sign chart.",
        "hint3": "$f'' < 0$ → concave down → maximum.",
        "explanation": "2nd DT is faster but not always applicable."
      }
    },
    {
      "id": "c2-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "On the AP exam, when asked to \"justify\" a max/min, you should:",
            "options": [
              "State the test used and show the sign of f''(or sign change of f')",
              "Just state \"it's a maximum\"",
              "Show the graph",
              "Use both tests"
            ],
            "correctAnswer": 0,
            "explanation": "AP rubric requires naming and applying the specific test."
          },
          {
            "question": "$f'(a) = 0$, $f''(a) = 0$, $f'''(a) \\neq 0$. Then $x = a$ is:",
            "options": [
              "An inflection point (not a max/min)",
              "A local max",
              "A local min",
              "Cannot determine"
            ],
            "correctAnswer": 0,
            "explanation": "If 2nd derivative is 0 and 3rd is nonzero, it's an inflection point."
          }
        ]
      }
    }
  ]
}
