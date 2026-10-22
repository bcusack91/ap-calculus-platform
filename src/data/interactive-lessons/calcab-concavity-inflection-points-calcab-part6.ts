export const calcabConcavityPart6Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c6-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 6\n\n**Part 6 of 7 — Connecting Concavity to Optimization**"
    },
    {
      "id": "c6-optimize",
      "type": "text" as const,
      "content": "## 📖 Second Derivative Test in Optimization\n\nIn optimization problems, after finding critical points, the second derivative test confirms max/min:\n\n### Example: Maximize Area\n\nA farmer has 400 ft of fencing for a rectangular pen against a barn. Maximize area.\n\n$A = x(400 - 2x) = 400x - 2x^2$\n\n$A' = 400 - 4x = 0 \\implies x = 100$\n\n$A'' = -4 < 0$ → maximum confirmed!\n\n$A_{max} = 100(200) = 20,000$ $ft^{2}$\n\n---\n\n### When the Domain is Restricted\n\nIf $f''< 0$ everywhere on an interval, then:\n- Only ONE critical point → it MUST be the absolute max\n- No need for endpoint checking if domain is all reals\n\nIf $f'' > 0$ everywhere:\n- The single critical point is the absolute min"
    },
    {
      "id": "c6-economics",
      "type": "text" as const,
      "content": "## Economic Applications\n\n### Marginal Analysis\n\n$C(x)$ = cost, $R(x)$ = revenue, $P(x) = R(x) - C(x)$ = profit\n\n$P'(x) = R'(x) - C'(x) = 0 \\implies R'(x) = C'(x)$\n\n**Profit is maximized when marginal revenue = marginal cost.**\n\n$P''(x) = R''(x) - C''(x)$\n\nIf $R''(x) < 0$ (diminishing returns) and $C''(x) > 0$ (increasing marginal cost), then $P'' < 0$ → confirmed maximum.\n\n### Point of Diminishing Returns\n\nThe inflection point of $R(x)$: where revenue growth starts slowing.\n\n$R''(x) = 0$ with sign change from + to - → this is where each additional unit adds less revenue than the previous one."
    },
    {
      "id": "c6-quiz",
      "type": "multiple-choice" as const,
      "content": "**Optimization & Concavity** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "If $A'' < 0$ everywhere and $A'(c) = 0$, then $c$ gives:",
            "options": [
              "The absolute maximum",
              "A local maximum only",
              "The absolute minimum",
              "An inflection point"
            ],
            "correctAnswer": 0,
            "explanation": "Always concave down + single critical point = absolute max, not just a local one. A minimum needs $A'' > 0$, and an inflection point needs $A''$ to change sign."
          },
          {
            "question": "Profit is maximized when:",
            "options": [
              "Marginal revenue = marginal cost",
              "Revenue is maximized",
              "Cost is minimized",
              "Revenue equals cost"
            ],
            "correctAnswer": 0,
            "explanation": "$P' = R' - C' = 0$ → $R' = C'$. Revenue equal to cost is the break-even point (zero profit), and maximizing revenue or minimizing cost alone ignores the other side."
          },
          {
            "question": "The \"point of diminishing returns\" is:",
            "options": [
              "An inflection point of the revenue curve",
              "The maximum point of the total revenue function",
              "The break-even point, where profit equals zero",
              "The point where revenue first exceeds total cost"
            ],
            "correctAnswer": 0,
            "explanation": "It's where $R'' = 0$ with a sign change: revenue keeps growing, but its growth rate starts declining. The maximum of revenue is where $R' = 0$, and break-even is where revenue and cost are equal."
          }
        ]
      }
    },
    {
      "id": "c6-global",
      "type": "text" as const,
      "content": "## 📌 Global vs. Local Extrema\n\n### Closed Interval Method (Absolute Extrema)\n\nOn a closed interval $[a, b]$:\n1. Find all critical points in $(a, b)$\n2. Evaluate $f$ at critical points AND endpoints\n3. Largest value = absolute max, smallest = absolute min\n\n### When Second Derivative Helps\n\nIf there's only one critical point $c$ on the domain:\n- $f''(c) > 0$ → absolute minimum\n- $f''(c) < 0$ → absolute maximum\n\n### Example: Minimize Surface Area\n\nCylinder with volume $1000$ $cm^{3}$. Minimize $SA = 2\\pi r^2 + 2\\pi r h$.\n\nConstraint: $\\pi r^2 h = 1000 \\implies h = 1000/(\\pi r^2)$\n\n$SA = 2\\pi r^2 + 2000/r$\n\n$SA' = 4\\pi r - 2000/r^2 = 0 \\implies r^3 = 500/\\pi \\implies r = (500/\\pi)^{1/3}$\n\n$SA'' = 4\\pi + 4000/r^3 > 0$ always → confirmed minimum!"
    },
    {
      "id": "c6-input",
      "type": "input-boxes" as const,
      "content": "**Optimization Check** 🧮\n\n**1)** $A = 200x - x^2$. $A'' = $ (integer, confirms max/min?)\n\n**2)** $A$ is maximized at $x = $ (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "-2",
          "100"
        ],
        "hint1": "$A' = 200 - 2x$, $A'' = -2 < 0$ → max.",
        "hint2": "$A' = 0$: $x = 100$.",
        "explanation": "1) $A'' = -2$ (confirms maximum). 2) $x = 100$."
      }
    },
    {
      "id": "c6-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Optimization Strategies** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "On a closed interval, absolute extrema occur at:",
            "options": [
              "Critical points or endpoints",
              "Only critical points",
              "Only endpoints of the interval",
              "Inflection points"
            ]
          },
          {
            "label": "A continuous function on a closed interval:",
            "options": [
              "Must have absolute max and min (EVT)",
              "May lack a max unless it is differentiable",
              "May not have a min",
              "Has only relative extrema"
            ]
          },
          {
            "label": "If f has exactly one critical point on ℝ and f'' > 0 there:",
            "options": [
              "It's the absolute minimum",
              "It's a local min, not absolute",
              "It could be a max",
              "Need more info"
            ]
          }
        ],
        "correctAnswers": [
          "Critical points or endpoints",
          "Must have absolute max and min (EVT)",
          "It's the absolute minimum"
        ],
        "hint1": "Candidates: critical points + endpoints.",
        "hint2": "Extreme Value Theorem guarantees extrema on closed intervals.",
        "hint3": "The only critical point on the interval, and $f'' > 0$ there → local min → absolute min.",
        "explanation": "EVT guarantees extrema on closed intervals. Check all candidates."
      }
    },
    {
      "id": "c6-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "In optimization, the second derivative test is useful because:",
            "options": [
              "It classifies a critical point in one step",
              "It works even when $f''(c) = 0$ at the critical point",
              "It locates the critical points without solving $f' = 0$",
              "It gives the optimal value without evaluating $f$"
            ],
            "correctAnswer": 0,
            "explanation": "One computation ($f''(c)$) replaces testing multiple intervals. It is inconclusive when $f''(c) = 0$, it does not find the critical points, and you still evaluate $f$ to get the optimal value."
          },
          {
            "question": "The Extreme Value Theorem requires:",
            "options": [
              "$f$ continuous on a closed interval $[a,b]$",
              "$f$ continuous on an open interval $(a,b)$",
              "$f$ differentiable on $(a,b)$",
              "$f'(c) = 0$ for some $c$ in $(a,b)$"
            ],
            "correctAnswer": 0,
            "explanation": "Continuity on a closed interval guarantees absolute extrema. An open interval is not enough ($\\frac{1}{x}$ on $(0,1)$ has no max), differentiability is a hypothesis of the MVT, not the EVT, and $f'(c) = 0$ is a conclusion of Rolle's Theorem."
          }
        ]
      }
    }
  ]
}
