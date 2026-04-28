export const calcabWhatIsALimitPart5Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal5-intro',
      type: 'text' as const,
      content: `# 📈 Reading Limits From a Graph

**Part 5 of 7 — The "trace with your finger" technique**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Finger-Trace Technique |
| Open vs. Closed Circles |
| 📌 Reading One-Sided & Two-Sided Limits |
| When the Function Value Disagrees with the Limit |

> 🔑 **Why this matters:** Many AP multiple-choice questions show a graph and ask you to evaluate limits. You need to be able to read 4–5 different limits off the same picture in under a minute.`
    },
    {
      id: 'wal5-finger',
      type: 'text' as const,
      content: `
## 👆 The Finger-Trace Technique

To find $\\lim_{x \\to a^-} f(x)$:

1. Place your finger on the graph **far to the left** of $x = a$.
2. **Slide your finger to the right** along the curve toward $x = a$.
3. Read the **$y$-value** your finger is heading toward — that's the left-hand limit.

Repeat from the right (slide leftward toward $a$) for the right-hand limit. If they match, that's the two-sided limit.

> 💡 You are deliberately **NOT looking at $f(a)$** — that may be a hole, a dot above the curve, or anything. You only care about where the curve is heading.
      `
    },
    {
      id: 'wal5-circles',
      type: 'text' as const,
      content: `
## ⭕ Open vs. Closed Circles

| Symbol | Meaning |
|--------|---------|
| **Solid (closed) dot** $\\bullet$ | The point IS on the graph — that's the value $f(a)$ |
| **Open (hollow) circle** $\\circ$ | The graph **approaches** this point but doesn't include it |

These markers describe **the function's value** at a single $x$, not the limit. The limit ignores them and just looks at where the curve is heading.

### Quick example

Suppose at $x = 2$:
- The curve approaches $y = 5$ from both sides.
- There's an *open* circle at $(2, 5)$ — meaning $f(2) \\ne 5$.
- There's a *closed* circle at $(2, 8)$ — meaning $f(2) = 8$.

Then:
- $\\lim_{x \\to 2^-} f(x) = 5$ (curve approaches 5).
- $\\lim_{x \\to 2^+} f(x) = 5$.
- $\\lim_{x \\to 2} f(x) = 5$ (both sides agree).
- $f(2) = 8$ (the actual function value, from the solid dot).

So the limit and the value disagree — a removable discontinuity, despite the function being defined.
      `
    },
    {
      id: 'wal5-onesided',
      type: 'text' as const,
      content: `
## 📐 One-Sided vs. Two-Sided From a Graph

Steps for any graph problem:

1. **Approach from the left:** trace until just before $a$ — note the $y$-value the curve is heading toward.
2. **Approach from the right:** repeat from the right side.
3. **Compare:**
   - Equal → two-sided limit equals the common value.
   - Unequal → two-sided limit DNE (jump).
   - One side blows up → DNE (vertical asymptote).
4. **Then look at $f(a)$ separately:** check for a solid dot at $x = a$. That gives the value, which may or may not match the limit.

> 🎯 You will sometimes get questions like *"Find all values of $a$ at which $f$ is discontinuous,"* which is the same as finding $a$ values where $\\lim_{x\\to a} f(x)$ either DNE or doesn't equal $f(a)$.
      `
    },
    {
      id: 'wal5-mc',
      type: 'multiple-choice' as const,
      content: `
**Reading Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a graph, an OPEN circle at $(3, 4)$ tells you:',
            options: [
              '$f(3) = 4$',
              'The function approaches 4 but $f(3) \\ne 4$',
              'There is a vertical asymptote at $x = 3$',
              '$\\lim_{x \\to 3} f(x)$ does not exist'
            ],
            correctAnswer: 1,
            explanation: 'An open circle marks a value the curve *would* hit if extended, but excludes — so the curve is approaching $(3, 4)$ but $f(3)$ is something else (or undefined).'
          },
          {
            question: 'When evaluating $\\lim_{x \\to a} f(x)$ from a graph, you should:',
            options: [
              'Always read $f(a)$ — the limit equals the function value',
              'Trace toward $a$ from both sides and read the $y$-value the curve is heading toward, IGNORING dots at $x = a$',
              'Only look at the solid dot, not the curve',
              'Check if the slope is positive or negative'
            ],
            correctAnswer: 1,
            explanation: 'Limits are about behavior near $a$, not value at $a$. Solid/open dots tell you about $f(a)$, which is irrelevant to the limit.'
          },
          {
            question: 'Suppose a graph approaches $y = 7$ from the left at $x = 5$, and approaches $y = 7$ from the right at $x = 5$, with a SOLID dot at $(5, 2)$. What is $\\lim_{x \\to 5} f(x)$?',
            options: ['2', '7', 'Does not exist', 'Cannot tell'],
            correctAnswer: 1,
            explanation: 'Both one-sided limits agree at 7, so the limit is 7. The fact that $f(5) = 2$ (the solid dot) doesn\'t change the limit — it just tells you the function is discontinuous at 5.'
          }
        ]
      }
    },
    {
      id: 'wal5-input',
      type: 'input-boxes' as const,
      content: `
**Read From a Description** 🧮

A graph of $h$ is described as follows:
- For $x < 1$, the curve traces $y = x + 2$.
- At $x = 1$, there is an *open* circle on the line $y = x + 2$.
- For $1 < x < 4$, the curve traces $y = 5 - x$.
- At $x = 4$, the curve has a *closed* circle at $(4, 0)$.
- For $x > 4$, the curve traces $y = x - 4$.

**1)** $\\lim_{x \\to 1^-} h(x) = ?$ (whole number)

**2)** $\\lim_{x \\to 1^+} h(x) = ?$ (whole number)

**3)** $\\lim_{x \\to 1} h(x) = ?$ (whole number, or \`DNE\`)

**4)** $h(1) = ?$ (whole number, or \`undefined\`)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '4', 'DNE', 'undefined'],
        hint1: 'Plug $x=1$ into the left piece $x + 2$ → 3.',
        hint2: 'Plug $x = 1$ into the right piece $5 - x$ → 4.',
        hint3: 'Different one-sided limits → two-sided DNE. The open circle on the left piece means $h(1)$ is undefined (no closed dot covers it).',
        explanation: 'Left limit = 3 (from $x+2$), right limit = 4 (from $5-x$). Different → two-sided limit DNE. The open circle says the value at $x=1$ is *not* 3, and no other piece covers $x=1$, so $h(1)$ is undefined.'
      }
    },
    {
      id: 'wal5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Graph Feature** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'Open circle at $(a, L)$ on the curve →', options: ['$f(a) = L$', '$f(a) \\ne L$, but the curve approaches $L$', 'vertical asymptote', 'horizontal asymptote'] },
          { label: 'Vertical line that the graph hugs but never touches →', options: ['horizontal asymptote', 'vertical asymptote (limit at that $x$ is $\\pm\\infty$)', 'jump discontinuity', 'continuous point'] },
          { label: 'Curve approaches $y = 4$ from the left of $a$ and $y = -1$ from the right →', options: ['continuous at $a$', 'jump discontinuity at $a$', 'removable hole at $a$', 'limit equals 4'] },
        ],
        correctAnswers: [
          '$f(a) \\ne L$, but the curve approaches $L$',
          'vertical asymptote (limit at that $x$ is $\\pm\\infty$)',
          'jump discontinuity at $a$'
        ],
        hint1: 'Open circle = "would be there but isn\'t."',
        hint2: 'A vertical line the function never crosses but hugs is a vertical asymptote.',
        hint3: 'Two finite, disagreeing one-sided limits = jump.',
        explanation: 'Open circle means the value is approached but not attained. A vertical asymptote signals an infinite one-sided (or both-sided) limit. Two unequal one-sided limits define a jump discontinuity.'
      }
    },
    {
      id: 'wal5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'Looking at a graph, the curve approaches $(2, 5)$ from both sides, with a CLOSED dot at $(2, 5)$. Which is the strongest correct statement?',
            options: [
              '$\\lim_{x \\to 2} f(x) = 5$ but $f$ is discontinuous at 2',
              '$\\lim_{x \\to 2} f(x) = 5$ AND $f$ is continuous at 2 (limit and value both equal 5)',
              'Limit DNE',
              '$f(2) = 0$'
            ],
            correctAnswer: 1,
            explanation: 'Both one-sided limits agree at 5, and $f(2) = 5$ (closed dot). Limit equals value — that is the definition of continuity at 2.'
          },
          {
            question: 'A graph has a vertical asymptote at $x = 3$, with the curve going up to $+\\infty$ on both sides. Which is correct?',
            options: [
              '$\\lim_{x \\to 3} f(x) = +\\infty$ (descriptively); strictly speaking, the limit DNE',
              '$\\lim_{x \\to 3} f(x) = 0$',
              '$f$ is continuous at 3',
              'The limit equals the average of $\\pm\\infty$, which is 0'
            ],
            correctAnswer: 0,
            explanation: 'When a function blows up, we describe the limit as $+\\infty$ to communicate the unbounded behavior — but in the strict numerical sense, the limit does not exist (no finite $L$).'
          }
        ]
      }
    }
  ]
}
