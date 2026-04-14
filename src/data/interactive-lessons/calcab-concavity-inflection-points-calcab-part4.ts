export const calcabConcavityPart4Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c4-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 4\n\n**Part 4 of 7 — Reading Derivative Graphs**"
    },
    {
      "id": "c4-reading",
      "type": "text" as const,
      "content": "## 📖 From $f'$ Graph to $f$ Information\n\nThe graph of $f'$ tells us EVERYTHING about $f$:\n\n| Feature of $f'$ graph | Information about $f$ |\n|-----------------------|---------------------|\n| $f'(x) > 0$ | $f$ is increasing |\n| $f'(x) < 0$ | $f$ is decreasing |\n| $f'(x) = 0$ | $f$ has critical point |\n| $f'$ changes + to - | $f$ has local maximum |\n| $f'$ changes - to + | $f$ has local minimum |\n| $f'$ is increasing | $f$ is concave up |\n| $f'$ is decreasing | $f$ is concave down |\n| $f'$ has a max/min | $f$ has inflection point |\n\n> **Critical Insight:** The concavity of $f$ comes from the *slope* of $f'$, not its sign!"
    },
    {
      "id": "c4-f-double-prime",
      "type": "text" as const,
      "content": "## From $f''$ Graph to $f$ Information\n\n| Feature of $f''$ graph | Information about $f$ |\n|------------------------|---------------------|\n| $f''(x) > 0$ | $f$ concave up |\n| $f''(x) < 0$ | $f$ concave down |\n| $f''$ crosses x-axis | $f$ has inflection point |\n| $f''$ touches but doesn't cross | Not an inflection point |\n\n### Example Reading\n\nIf $f''$ graph is a line crossing zero at $x = 3$:\n- $f$ has an inflection point at $x = 3$\n- Concavity changes at $x = 3$\n\nIf $f''$ graph is a parabola touching zero at $x = 2$:\n- NOT an inflection point at $x = 2$ (no sign change)"
    },
    {
      "id": "c4-quiz",
      "type": "multiple-choice" as const,
      "content": "**Derivative Graph Reading** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "If the graph of $f'$ has a local maximum at $x = 4$, then $f$ at $x = 4$ has:",
            "options": [
              "An inflection point",
              "A local maximum",
              "A local minimum",
              "A critical point"
            ],
            "correctAnswer": 0,
            "explanation": "Local max of $f'$ → $f'' = 0$ with sign change → $f$ has inflection point."
          },
          {
            "question": "If $f'(x) > 0$ for all $x$ but $f'$ is decreasing, then $f$ is:",
            "options": [
              "Increasing and concave down",
              "Increasing and concave up",
              "Decreasing",
              "Constant"
            ],
            "correctAnswer": 0,
            "explanation": "$f' > 0$: increasing. $f'$ decreasing: $f'' < 0$: concave down."
          },
          {
            "question": "The number of inflection points of $f$ equals:",
            "options": [
              "The number of local extrema of $f'$",
              "The number of zeros of $f'$",
              "The number of zeros of $f$",
              "Cannot be determined from $f'$"
            ],
            "correctAnswer": 0,
            "explanation": "Each local extremum of $f'$ corresponds to a sign change in $f''$."
          }
        ]
      }
    },
    {
      "id": "c4-reconstruct",
      "type": "text" as const,
      "content": "## 📌 Reconstructing $f$ from $f'$ or $f''$\n\n### Key AP Skill\n\nGiven a graph of $f'$, sketch $f$:\n\n1. Find zeros of $f'$ → critical points of $f$\n2. Where $f' > 0$: $f$ goes up; where $f' < 0$: $f$ goes down\n3. Where $f'$ increases: $f$ is concave up\n4. Where $f'$ decreases: $f$ is concave down\n5. Use $f'$ values for steepness info\n\n### Common AP Setup\n\nGiven the graph of $f'$ and $f(0) = 2$, find $f(3)$.\n\n$f(3) = f(0) + \\int_0^3 f'(x) dx = 2 + \\text{(area under f')}$\n\nThis connects derivatives to integrals via the FTC!"
    },
    {
      "id": "c4-input",
      "type": "input-boxes" as const,
      "content": "**Graph Reading** 🧮\n\n**1)** If $f'$ has 3 local extrema, $f$ has ___ inflection points: (integer)\n\n**2)** If $f'(x) = 0$ at $x = 1, 4$ and $f' > 0$ on $(1,4)$, $f$ is ___ on $(1,4)$: (enter \"increasing\" or \"decreasing\")",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "3",
          "increasing"
        ],
        "hint1": "Each local extremum of $f'$ is a sign change of $f''$.",
        "hint2": "$f' > 0$ means $f$ is increasing.",
        "explanation": "1) 3 inflection points. 2) Increasing (f' positive)."
      }
    },
    {
      "id": "c4-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Graph Feature Mapping** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$f'$ crosses x-axis from + to - means $f$ has:",
            "options": [
              "Local maximum",
              "Local minimum",
              "Inflection point",
              "Discontinuity"
            ]
          },
          {
            "label": "$f'$ has a horizontal tangent means:",
            "options": [
              "$f''= 0$ (potential inflection of $f$)",
              "$f' = 0$",
              "$f = 0$",
              "$f$ has a max"
            ]
          },
          {
            "label": "The area under $f'$ from $a$ to $b$ gives:",
            "options": [
              "$f(b) - f(a)$",
              "$f'(b) - f'(a)$",
              "The slope of $f$",
              "The concavity of $f$"
            ]
          }
        ],
        "correctAnswers": [
          "Local maximum",
          "$f''= 0$ (potential inflection of $f$)",
          "$f(b) - f(a)$"
        ],
        "hint1": "$f'$ sign change + to - → local max.",
        "hint2": "Horizontal tangent on $f'$ graph → $f'' = 0$.",
        "hint3": "FTC: $\\int_a^b f'(x)dx = f(b) - f(a)$.",
        "explanation": "Derivative graph features map directly to original function properties."
      }
    },
    {
      "id": "c4-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "If $f'$ is a straight line with positive slope, $f$ is:",
            "options": [
              "A parabola opening up (concave up)",
              "A straight line",
              "Concave down",
              "A cubic"
            ],
            "correctAnswer": 0,
            "explanation": "$f'$ linear with positive slope → $f'' = $ constant $> 0$ → $f$ concave up, quadratic."
          },
          {
            "question": "On the AP exam, which is more commonly given — graph of $f$ or graph of $f'$?",
            "options": [
              "Graph of $f'$",
              "Graph of $f$",
              "Graph of $f''$",
              "They all appear equally"
            ],
            "correctAnswer": 0,
            "explanation": "AP loves giving $f'$ graphs and asking about $f$ properties. It tests deeper understanding."
          }
        ]
      }
    }
  ]
}
