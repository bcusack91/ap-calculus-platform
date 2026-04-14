export const calcabConcavityPart7Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c7-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 7\n\n**Part 7 of 7 — AP Free Response Justifications**"
    },
    {
      "id": "c7-justify",
      "type": "text" as const,
      "content": "## 📖 AP Justification Standards\n\nThe AP exam requires specific language when justifying conclusions about concavity and inflection points.\n\n### Justifying Local Extrema\n\n**Using First Derivative Test:**\n\"Since $f'$ changes from positive to negative at $x = c$, $f$ has a local maximum at $x = c$.\" ✅\n\n**Using Second Derivative Test:**\n\"Since $f'(c) = 0$ and $f''(c) < 0$, $f$ has a local maximum at $x = c$.\" ✅\n\n### Justifying Inflection Points\n\n\"Since $f''$ changes sign at $x = c$ (from negative to positive), $f$ has an inflection point at $x = c$.\" ✅\n\n\"$f''(c) = 0$, so $c$ is an inflection point.\" ❌ (Insufficient! Need sign change!)"
    },
    {
      "id": "c7-fr-example",
      "type": "text" as const,
      "content": "## AP Free Response Walkthrough\n\n### Given: $f'(x) = (x-1)(x-3)^2(x-5)$\n\n**(a)** Find where $f$ has local extrema.\n\n$f'(x) = 0$ at $x = 1, 3, 5$.\n\nSign analysis of $f'$:\n- $f' > 0$ on $(-\\infty, 1)$, $f' < 0$ on $(1, 3)$\n- $f' < 0$ on $(3, 5)$ ($(x-3)^2 \\geq 0$, doesn't change sign!)\n- $f' > 0$ on $(5, \\infty)$\n\nLocal max at $x = 1$ (+ to -). Local min at $x = 5$ (- to +).\n$x = 3$ is NOT an extremum (no sign change).\n\n**(b)** Find inflection points.\n\n$f'$ has local extrema (which means $f'' = 0$ with sign change).\n\n$f'(x) = (x-1)(x-3)^2(x-5)$\n\n$f'$ has local max/min where $f'' = 0$. By analyzing $f'$: it has a local min near $x = 3$ (since $f' \\leq 0$ there and $f'(3) = 0$) — but actually, at $x = 3$, $f'$ has a local max (of $0$). And $f'$ has a local min somewhere in $(1, 3)$ and another in $(3, 5)$.\n\nThe inflection points of $f$ occur where $f'' = 0$ changes sign — at the extrema of $f'$."
    },
    {
      "id": "c7-quiz",
      "type": "multiple-choice" as const,
      "content": "**AP Justifications** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "Which justification is valid for a local max at $x = 2$?",
            "options": [
              "$f'$ changes from + to − at $x = 2$",
              "$f'(2) = 0$",
              "$f(2)$ is the largest value nearby",
              "$f''(2)$ exists"
            ],
            "correctAnswer": 0,
            "explanation": "Sign change of $f'$ is the standard justification."
          },
          {
            "question": "Which is NOT a valid justification for inflection at $x = 4$?",
            "options": [
              "$f''(4) = 0$ (without mentioning sign change)",
              "$f''$ changes from + to − at $x = 4$",
              "$f'' changes sign at $x = 4$",
              "$f'$ has a local max at $x = 4$"
            ],
            "correctAnswer": 0,
            "explanation": "Just $f'' = 0$ is insufficient. Must show sign change."
          },
          {
            "question": "If $f'(c) = 0$ and $f$ is twice differentiable, you should first try:",
            "options": [
              "Second derivative test, then first if inconclusive",
              "First derivative test always",
              "L'Hôpital's Rule",
              "Evaluating $f(c)$"
            ],
            "correctAnswer": 0,
            "explanation": "Second DT is faster. Fall back to first DT if $f''(c) = 0$."
          }
        ]
      }
    },
    {
      "id": "c7-practice",
      "type": "text" as const,
      "content": "## 📌 Common AP Setups\n\n### Type 1: Given $f'$ as a formula\n\nFind critical points, use $f''$ or sign chart.\n\n### Type 2: Given $f'$ as a graph\n\nRead increasing/decreasing, extrema, concavity from the graph.\n\n### Type 3: Given a table of $f$, $f'$, $f''$ values\n\nUse values to determine properties at specific points.\n\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|----------|----------|\n| 0 | 3 | $-2$ | 4 |\n| 1 | 1 | 0 | $-1$ |\n| 2 | 2 | 3 | 0 |\n| 3 | 5 | 1 | $-3$ |\n\nFrom this table:\n- At $x = 1$: $f'= 0$ and $f'' < 0$ → local maximum\n- At $x = 0$: $f$ is decreasing, concave up\n- At $x = 2$: possible inflection point ($f'' = 0$, need to check sign change)\n- Between $x = 1$ and $x = 3$: $f''$ goes from $-1$ to $-3$, staying negative. But $f''(2) = 0$... so $f''$ changes sign around $x = 2$? Between $x = 0$ ($f'' = 4$) and $x = 1$ ($f'' = -1$): sign change! Inflection between $x = 0$ and $x = 1$."
    },
    {
      "id": "c7-input",
      "type": "input-boxes" as const,
      "content": "**AP Practice** 🧮\n\n**1)** $f(x) = x^4/4 - 2x^2$. Number of inflection points: (integer)\n\n**2)** Same $f$: $x$-value of local maximum: (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "2",
          "0"
        ],
        "hint1": "$f'' = 3x^2 - 4 = 0$: $x = \\pm 2/\\sqrt{3}$. Both are sign changes.",
        "hint2": "$f' = x^3 - 4x = x(x^2-4) = 0$: $x = 0, \\pm 2$. $f''(0) = -4 < 0$: local max.",
        "explanation": "1) 2 inflection points. 2) Local max at $x = 0$."
      }
    },
    {
      "id": "c7-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Final Concepts** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "The word \"justify\" on the AP exam means:",
            "options": [
              "Provide mathematical reasoning with specific theorem/test",
              "Write a paragraph",
              "Show your arithmetic",
              "Graph the function"
            ]
          },
          {
            "label": "A polynomial of degree 5 has at most:",
            "options": [
              "3 inflection points",
              "4 inflection points",
              "5 inflection points",
              "2 inflection points"
            ]
          },
          {
            "label": "If $f''(x) > 0$ for all $x$ in $(a, b)$, then on that interval:",
            "options": [
              "$f$ is concave up and f'is increasing",
              "f is increasing",
              "f is concave down",
              "f has no critical points"
            ]
          }
        ],
        "correctAnswers": [
          "Provide mathematical reasoning with specific theorem/test",
          "3 inflection points",
          "$f$ is concave up and f'is increasing"
        ],
        "hint1": "Justify = cite theorem + verify conditions.",
        "hint2": "$f''$ has degree 3, at most 3 real roots.",
        "hint3": "$f'' > 0$ → concave up AND $f'$ increasing.",
        "explanation": "AP justification requires theorem citation. Degree $n$ polynomial: at most $n-2$ inflection points."
      }
    },
    {
      "id": "c7-exit",
      "type": "multiple-choice" as const,
      "content": "**Final Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "On the AP exam, the most common error in concavity problems is:",
            "options": [
              "Claiming inflection at $f''= 0$ without checking sign change",
              "Arithmetic errors",
              "Not finding $f'$",
              "Graphing incorrectly"
            ],
            "correctAnswer": 0,
            "explanation": "Students lose points for not verifying the sign change in $f''$."
          },
          {
            "question": "If $f'$ is always positive and $f''$ is always negative, the graph of $f$ is:",
            "options": [
              "Always increasing, always concave down",
              "Always increasing, always concave up",
              "Always decreasing",
              "S-shaped"
            ],
            "correctAnswer": 0,
            "explanation": "$f' > 0$: increasing. $f'' < 0$: concave down."
          }
        ]
      }
    }
  ]
}
