export const calcabConcavityPart3Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c3-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 3\n\n**Part 3 of 7 — Complete Curve Sketching Framework**"
    },
    {
      "id": "c3-framework",
      "type": "text" as const,
      "content": "## 📖 The Complete Curve Sketching Checklist\n\n1. **Domain** and key features ($x$-intercepts, $y$-intercept)\n2. **Symmetry** (even, odd, periodic)\n3. **First derivative** → critical points, increasing/decreasing\n4. **Second derivative** → inflection points, concavity\n5. **End behavior** → limits as $x \\to \\pm\\infty$\n6. **Asymptotes** (vertical, horizontal, oblique)\n7. **Plot key points** and connect\n\n---\n\n### Example: $f(x) = x^3 - 3x^2 + 4$\n\n$f'(x) = 3x^2 - 6x = 3x(x - 2)$\n\nCritical points: $x = 0$ (max, $f = 4$), $x = 2$ (min, $f = 0$)\n\n$f''(x) = 6x - 6 = 6(x - 1)$\n\nInflection point: $x = 1$ ($f = 2$)\n\n| Interval | $f'$ | $f''$ | Shape |\n|----------|------|--------|-------|\n| $(-\\infty, 0)$ | $+$ | $-$ | ↗ ∩ |\n| $(0, 1)$ | $-$ | $-$ | ↘ ∩ |\n| $(1, 2)$ | $-$ | $+$ | ↘ ∪ |\n| $(2, \\infty)$ | $+$ | $+$ | ↗ ∪ |"
    },
    {
      "id": "c3-shapes",
      "type": "text" as const,
      "content": "## The Four Shape Combinations\n\n| $f'$ | $f''$ | Shape | Description |\n|------|--------|-------|-------------|\n| $+$ | $+$ | ↗ ∪ | Increasing, concave up |\n| $+$ | $-$ | ↗ ∩ | Increasing, concave down |\n| $-$ | $+$ | ↘ ∪ | Decreasing, concave up |\n| $-$ | $-$ | ↘ ∩ | Decreasing, concave down |\n\n### Transitions\n\n- $f' = 0$: changes from increasing ↔ decreasing (potential extremum)\n- $f'' = 0$ with sign change: changes concavity (inflection point)\n- Both change: the four shapes cycle through combinations"
    },
    {
      "id": "c3-quiz",
      "type": "multiple-choice" as const,
      "content": "**Shape Analysis** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "If $f' > 0$ and $f'' < 0$, the graph looks like:",
            "options": [
              "Increasing and bending down (like top of a hill approach)",
              "Increasing and bending up",
              "Decreasing and bending down",
              "Decreasing and bending up"
            ],
            "correctAnswer": 0,
            "explanation": "$f' > 0$: increasing. $f'' < 0$: concave down."
          },
          {
            "question": "The number of shape combinations is:",
            "options": [
              "4",
              "2",
              "3",
              "8"
            ],
            "correctAnswer": 0,
            "explanation": "2 options for $f'$ (±) × 2 options for $f''$ (±) = 4 combinations."
          },
          {
            "question": "An inflection point occurs between consecutive intervals of:",
            "options": [
              "Different concavity",
              "Different slope sign",
              "Same concavity",
              "Different function values"
            ],
            "correctAnswer": 0,
            "explanation": "Inflection = concavity change."
          }
        ]
      }
    },
    {
      "id": "c3-example",
      "type": "text" as const,
      "content": "## 📌 AP-Style Complete Analysis\n\n### $f(x) = \\frac{x}{x^2 + 1}$\n\n**Domain:** All real numbers\n\n**Symmetry:** Odd ($f(-x) = -f(x)$)\n\n**$f'(x)$:** Using quotient rule:\n$f'(x) = \\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1-x^2}{(x^2+1)^2}$\n\nCritical: $x = \\pm 1$. $f(-1) = -1/2$ (min), $f(1) = 1/2$ (max)\n\n**$f''(x)$:** $= \\frac{2x(x^2-3)}{(x^2+1)^3}$\n\nInflection: $x = 0, \\pm\\sqrt{3}$\n\n**End behavior:** $\\lim_{x \\to \\pm\\infty} f(x) = 0$ (HA: $y = 0$)\n\nThis is a classic AP exam function."
    },
    {
      "id": "c3-input",
      "type": "input-boxes" as const,
      "content": "**Curve Analysis** 🧮\n\n**1)** $f(x) = x^4 - 4x^3$. Number of inflection points: (integer)\n\n**2)** $f(x) = x^3 - 12x$. Local min value: (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "2",
          "-16"
        ],
        "hint1": "$f''= 12x^2 - 24x = 12x(x-2) = 0$: $x = 0, 2$. Both are sign changes.",
        "hint2": "$f' = 3x^2 - 12 = 0$: $x = \\pm 2$. $f''(2) = 12 > 0$: min at $x = 2$. $f(2) = 8 - 24 = -16$.",
        "explanation": "1) Two inflection points. 2) Local minimum value is $-16$."
      }
    },
    {
      "id": "c3-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Curve Sketching Steps** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "The first step in curve sketching is:",
            "options": [
              "Find the domain",
              "Find f'(x)",
              "Plot points",
              "Find end behavior"
            ]
          },
          {
            "label": "For a polynomial of degree $n$, max inflection points:",
            "options": [
              "$n - 2$",
              "$n - 1$",
              "$n$",
              "$2n$"
            ]
          },
          {
            "label": "End behavior of $f(x) = -2x^5 + ...$:",
            "options": [
              "$f \\to +\\infty$ as $x \\to -\\infty$, $f \\to -\\infty$ as $x \\to +\\infty$",
              "Both to $+\\infty$",
              "Both to $-\\infty$",
              "$f \\to -\\infty$ as $x \\to -\\infty$, $f \\to +\\infty$ as $x \\to +\\infty$"
            ]
          }
        ],
        "correctAnswers": [
          "Find the domain",
          "$n - 2$",
          "$f \\to +\\infty$ as $x \\to -\\infty$, $f \\to -\\infty$ as $x \\to +\\infty$"
        ],
        "hint1": "Domain determines where the function exists.",
        "hint2": "$f''$ has degree $n-2$, at most $n-2$ real roots.",
        "hint3": "Odd degree, negative leading coefficient.",
        "explanation": "Domain first, then derivatives. Degree $n$ polynomial has at most $n-2$ inflection points."
      }
    },
    {
      "id": "c3-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "A cubic $f(x) = ax^3 + bx^2 + cx + d$ always has exactly:",
            "options": [
              "1 inflection point",
              "0 inflection points",
              "2 inflection points",
              "3 inflection points"
            ],
            "correctAnswer": 0,
            "explanation": "$f'' = 6ax + 2b = 0$: exactly one solution. Sign change guaranteed."
          },
          {
            "question": "If $f$ is increasing and concave up, then $f'$ is:",
            "options": [
              "Positive and increasing",
              "Positive and decreasing",
              "Negative",
              "Zero"
            ],
            "correctAnswer": 0,
            "explanation": "Increasing: $f' > 0$. Concave up: $f'' > 0$ → $f'$ is increasing."
          }
        ]
      }
    }
  ]
}
