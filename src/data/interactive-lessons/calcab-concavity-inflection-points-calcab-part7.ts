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
      "content": "## AP Free Response Walkthrough\n\n### Given: $f'(x) = (x-1)(x-3)^2(x-5)$\n\n**(a)** Find where $f$ has local extrema.\n\n$f'(x) = 0$ at $x = 1, 3, 5$.\n\nSign analysis of $f'$:\n- $f' > 0$ on $(-\\infty, 1)$, $f' < 0$ on $(1, 3)$\n- $f' < 0$ on $(3, 5)$ ($(x-3)^2 \\geq 0$, doesn't change sign!)\n- $f' > 0$ on $(5, \\infty)$\n\nLocal max at $x = 1$ (+ to -). Local min at $x = 5$ (- to +).\n$x = 3$ is NOT an extremum (no sign change).\n\n**(b)** Find inflection points.\n\nInflection points of $f$ are where $f''$ changes sign, which is where $f'$ switches between increasing and decreasing.\n\nLet $u = x - 3$. Then $(x-1)(x-5) = (u+2)(u-2) = u^2 - 4$, so\n$f'(x) = u^2(u^2 - 4) = u^4 - 4u^2$.\n\n$f''(x) = 4u^3 - 8u = 4u(u^2 - 2) = 4(x-3)\\left(x - 3 - \\sqrt{2}\\right)\\left(x - 3 + \\sqrt{2}\\right)$\n\n$f'' = 0$ at $x = 3 - \\sqrt{2}$, $x = 3$, and $x = 3 + \\sqrt{2}$.\n\nSign analysis of $f''$:\n- $f'' < 0$ on $(-\\infty, 3 - \\sqrt{2})$, $f'' > 0$ on $(3 - \\sqrt{2}, 3)$\n- $f'' < 0$ on $(3, 3 + \\sqrt{2})$, $f'' > 0$ on $(3 + \\sqrt{2}, \\infty)$\n\n$f''$ changes sign at all three values, so $f$ has inflection points at $x = 3 - \\sqrt{2}$, $x = 3$, and $x = 3 + \\sqrt{2}$.\n\n> **Check with $f'$:** $f' \\le 0$ on $[1, 5]$ with $f'(3) = 0$, so $f'$ has a local max at $x = 3$ and a local min in each of $(1, 3)$ and $(3, 5)$. Those three extrema of $f'$ are exactly the three inflection points. Note that $x = 3$ is an inflection point even though it is not an extremum of $f$."
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
              "$f$ changes from + to − at $x = 2$",
              "$f''(2)$ exists"
            ],
            "correctAnswer": 0,
            "explanation": "A sign change of $f'$ from + to − is the standard justification. $f'(2) = 0$ alone does not show a sign change, the sign of $f$ itself says nothing about extrema, and $f''(2)$ existing is not a test."
          },
          {
            "question": "Which is NOT a valid justification for inflection at $x = 4$?",
            "options": [
              "$f''(4) = 0$ alone",
              "$f''$ changes from + to − at $x = 4$",
              "$f''$ changes sign at $x = 4$",
              "$f'$ has a local max at $x = 4$"
            ],
            "correctAnswer": 0,
            "explanation": "Just $f''(4) = 0$ is insufficient; you must show a sign change. A sign change of $f''$, in either direction, and a local max of $f'$ (where $f'$ switches from increasing to decreasing) are both valid."
          },
          {
            "question": "If $f'(c) = 0$ and $f$ is twice differentiable, you should first try:",
            "options": [
              "Second derivative test, then first if inconclusive",
              "First derivative test only; the second test is unreliable",
              "Candidates Test, comparing $f$ at the interval endpoints",
              "Evaluating $f(c)$ to see if it is positive or negative"
            ],
            "correctAnswer": 0,
            "explanation": "The Second Derivative Test is faster; fall back to the First Derivative Test if $f''(c) = 0$. The second test is reliable whenever $f''(c) \\neq 0$, the Candidates Test is for absolute extrema on a closed interval, and the sign of $f(c)$ says nothing about max vs. min."
          }
        ]
      }
    },
    {
      "id": "c7-practice",
      "type": "text" as const,
      "content": "## 📌 Common AP Setups\n\n### Type 1: Given $f'$ as a formula\n\nFind critical points, use $f''$ or sign chart.\n\n### Type 2: Given $f'$ as a graph\n\nRead increasing/decreasing, extrema, concavity from the graph.\n\n### Type 3: Given a table of $f$, $f'$, $f''$ values\n\nUse values to determine properties at specific points.\n\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|----------|----------|\n| 0 | 3 | $-2$ | 4 |\n| 1 | 1 | 0 | $-1$ |\n| 2 | 2 | 3 | 0 |\n| 3 | 5 | 1 | $-3$ |\n\nFrom this table:\n- At $x = 1$: $f'= 0$ and $f'' < 0$ → local maximum\n- At $x = 0$: $f$ is decreasing, concave up\n- At $x = 2$: $f''(2) = 0$, but $f''(1) = -1$ and $f''(3) = -3$ are both negative. The table shows no sign change around $x = 2$, so it gives no evidence of an inflection point there. A zero of $f''$ is only a candidate.\n- Between $x = 0$ and $x = 1$: $f''$ goes from $4$ to $-1$. If $f''$ is continuous, it changes sign somewhere in $(0, 1)$, so $f$ has an inflection point in that interval."
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
              "Restate the question and give the final answer in a full sentence",
              "Show the arithmetic for every computed value",
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
              "$f$ is concave up and $f'$ is increasing",
              "$f$ is increasing and $f'$ is positive",
              "$f$ is concave down and $f'$ is decreasing",
              "$f$ has no critical points"
            ]
          }
        ],
        "correctAnswers": [
          "Provide mathematical reasoning with specific theorem/test",
          "3 inflection points",
          "$f$ is concave up and $f'$ is increasing"
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
              "Calling every zero of $f''$ an inflection point",
              "Forgetting to compute $f'$ before $f''$",
              "Rounding inflection $x$-values too early",
              "Sketching the graph without a sign chart"
            ],
            "correctAnswer": 0,
            "explanation": "Students lose points for not verifying the sign change in $f''$: a zero of $f''$ is only a candidate."
          },
          {
            "question": "If $f'$ is always positive and $f''$ is always negative, the graph of $f$ is:",
            "options": [
              "Always increasing, always concave down",
              "Always increasing, always concave up",
              "Always decreasing, always concave up",
              "Increasing, then decreasing"
            ],
            "correctAnswer": 0,
            "explanation": "$f' > 0$: always increasing. $f'' < 0$: always concave down. The graph never turns around because $f'$ never changes sign."
          }
        ]
      }
    }
  ]
}
