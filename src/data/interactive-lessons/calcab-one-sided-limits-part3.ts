export const calcabOneSidedLimitsPart3Data = {
  topicSlug: 'one-sided-limits',
  sections: [
    {
      id: 'osl3-intro',
      type: 'text' as const,
      content: `# ✅ The Two-Sided Existence Theorem

**Part 3 of 4 — When does $\\lim_{x \\to a} f(x)$ exist?**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Theorem |
| 📝 Worked Examples |
| Why It Matters |

> 🔑 **Why this matters:** This is *the* defining theorem connecting one-sided and two-sided limits. AP graders look for it explicitly in justifications.`
    },
    {
      id: 'osl3-theorem',
      type: 'text' as const,
      content: `
## 🔑 The Existence Theorem

> $\\displaystyle \\lim_{x \\to a} f(x) = L$ **if and only if** $\\displaystyle \\lim_{x \\to a^-} f(x) = L$ **and** $\\displaystyle \\lim_{x \\to a^+} f(x) = L$.

Three things must all hold:
1. The left-hand limit exists.
2. The right-hand limit exists.
3. They agree on a single value $L$.

If **any one** fails, the two-sided limit DNE.

> 💡 Notice: the value $f(a)$ itself does not enter the theorem at all. The theorem is about the two arms of the function — not the dot.
      `
    },
    {
      id: 'osl3-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

**Example 1.** $f(x) = x^2$. $\\lim_{x \\to 3^-} f = 9$ and $\\lim_{x \\to 3^+} f = 9$. Both agree → $\\lim_{x \\to 3} f = 9$. ✅

**Example 2.** Piecewise $f$ with left limit 4 and right limit 4 at $x = 1$, but $f(1) = 100$. Both one-sided limits agree on 4 → $\\lim_{x \\to 1} f = 4$. ✅ (The value $f(1)$ doesn't change this.)

**Example 3.** Piecewise $f$ with left limit 2 and right limit 6 at $x = 0$. Disagreement → $\\lim_{x \\to 0} f$ DNE.

**Example 4.** $f(x) = 1/x$ at $x = 0$: left limit $= -\\infty$, right limit $= +\\infty$. Neither one-sided limit exists as a finite value, so the two-sided limit DNE.
      `
    },
    {
      id: 'osl3-why',
      type: 'text' as const,
      content: `
## 🎯 Why It Matters

The theorem is the official tool for two of the most common AP tasks:

| Task | How the theorem helps |
|------|----------------------|
| **Show a limit exists** | Verify both one-sided limits exist and equal each other |
| **Show a limit DNE** | Show the one-sided limits disagree, OR show one is $\\pm\\infty$ |
| **Continuity check** | Continuity at $a$ requires (limit exists) AND (limit = $f(a)$) — first half is the existence theorem |

> 🔑 On free-response: when justifying continuity or DNE, *cite* the existence theorem by name or by structure.
      `
    },
    {
      id: 'osl3-mc',
      type: 'multiple-choice' as const,
      content: `**Theorem Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'You compute $\\lim_{x \\to 5^-} f(x) = 3$ and $\\lim_{x \\to 5^+} f(x) = 3$. What can you conclude?',
            options: [
              '$\\lim_{x \\to 5} f(x)$ DNE',
              '$\\lim_{x \\to 5} f(x) = 3$',
              '$f(5) = 3$',
              'Nothing — need to know $f(5)$'
            ],
            correctAnswer: 1,
            explanation: 'Existence theorem: both one-sided limits exist and agree on 3, so the two-sided limit equals 3.'
          },
          {
            question: 'You compute $\\lim_{x \\to 2^-} f(x) = 7$ and $\\lim_{x \\to 2^+} f(x) = -1$, and $f(2) = 7$. Then $\\lim_{x \\to 2} f(x) = ?$',
            options: ['$7$', '$-1$', '$3$ (average)', 'DNE'],
            correctAnswer: 3,
            explanation: 'One-sided limits disagree → two-sided limit DNE. The value $f(2) = 7$ matches the LEFT limit, but matching only one side isn\'t enough.'
          }
        ]
      }
    },
    {
      id: 'osl3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Apply the Theorem** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Left $= 4$, Right $= 4$, $f(a) = 100$. $\\lim_{x \\to a} f = $', options: ['$4$', '$100$', '$52$', 'DNE'] },
          { label: 'Left $= 4$, Right $= 4$, $f(a)$ undefined. $\\lim_{x \\to a} f = $', options: ['$4$', 'undefined', '$0$', 'DNE'] },
          { label: 'Left $= -2$, Right $= +2$. $\\lim_{x \\to a} f = $', options: ['$0$', '$2$', '$-2$', 'DNE'] },
          { label: 'Left $= +\\infty$, Right $= +\\infty$. $\\lim_{x \\to a} f = $', options: ['$+\\infty$ (descriptively); does not exist as a finite value', '$0$', '$1$', 'undefined'] },
        ],
        correctAnswers: ['$4$', '$4$', 'DNE', '$+\\infty$ (descriptively); does not exist as a finite value'],
        hint1: 'Existence theorem ignores $f(a)$.',
        hint2: 'Limit can exist even if $f(a)$ doesn\'t.',
        hint3: 'Disagreeing one-sided limits → DNE.',
        explanation: 'The existence theorem depends only on the two one-sided limits, never on $f(a)$.'
      }
    }
  ]
}
