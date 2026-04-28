export const calcabWhatIsALimitPart7Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Tying it all together**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Big Picture: Why Limits Matter |
| AP Exam Question Patterns |
| Common Trap Questions |
| Where We Go From Here |

> 🔑 **Why this matters:** Every other tool in calculus — derivatives, integrals, continuity, asymptotic behavior — is built on top of the limit. This part secures the foundation before you move into the next topics.`
    },
    {
      id: 'wal7-bigpicture',
      type: 'text' as const,
      content: `
## 🌍 The Big Picture

Limits show up everywhere in calculus:

| Concept | Limit definition |
|---------|------------------|
| **Continuity** at $a$ | $\\lim_{x \\to a} f(x) = f(a)$ |
| **Derivative** at $a$ | $f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$ |
| **Definite integral** | $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x$ |
| **Horizontal asymptote** $y = L$ | $\\lim_{x \\to \\pm\\infty} f(x) = L$ |
| **Vertical asymptote** at $a$ | $\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty$ |

> 🎯 If you understand limits at the level "as $x$ approaches $a$, $f(x)$ approaches $L$," then every later concept becomes a special case — not a brand-new idea.
      `
    },
    {
      id: 'wal7-patterns',
      type: 'text' as const,
      content: `
## 📝 AP Exam Question Patterns

### Pattern 1 — "Find the limit"
Direct evaluation, often involving algebraic simplification (Parts 6–8 of Unit 1).

### Pattern 2 — "Does the limit exist?"
Check the two one-sided limits. If they agree (and are finite), the limit exists; otherwise DNE.

### Pattern 3 — "Read from the graph"
Trace the curve from each side toward $a$. Ignore dots at $x = a$ when finding the limit; consult them only for $f(a)$.

### Pattern 4 — "Continuity at $a$"
Three checks: (i) $f(a)$ defined, (ii) $\\lim_{x \\to a} f(x)$ exists, (iii) the two are equal.

### Pattern 5 — "Make the function continuous"
Choose the missing parameter so that $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$.
      `
    },
    {
      id: 'wal7-traps',
      type: 'text' as const,
      content: `
## ⚠️ Common Trap Questions

### Trap 1 — "Plug in" without checking
$\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$ is **not** $0/0$ — it's a famous limit equal to **1**. Algebra (or L'Hôpital later) is required.

### Trap 2 — Confusing limit with value
A function can have $f(2) = 100$ but $\\lim_{x \\to 2} f(x) = 5$. Always read the limit and the value as separate quantities.

### Trap 3 — Not checking both sides
$\\lim_{x \\to 0} 1/x$ is NOT $+\\infty$ — the function tends to $-\\infty$ from the left and $+\\infty$ from the right. Two-sided limit DNE.

### Trap 4 — Treating $\\infty$ as a number
"$\\lim = \\infty$" describes unbounded behavior; the limit does not exist in the standard finite-value sense.

### Trap 5 — Forgetting the seam in piecewise functions
At the seam $x = a$, you MUST evaluate the left limit using the left piece and the right limit using the right piece — even if both pieces are continuous in their own intervals.
      `
    },
    {
      id: 'wal7-onward',
      type: 'text' as const,
      content: `
## 🚀 Where We Go From Here

You now have the **conceptual foundation** for every limit problem. Coming up in Unit 1:

| Topic | What you'll learn |
|-------|-------------------|
| Estimating limits from tables | Build a numerical table of values to predict the limit |
| Estimating limits from graphs | Use the finger-trace technique on harder graphs |
| One-sided limits | Drill problems on left and right limits |
| Direct substitution | When and how to "just plug in" |
| Factoring method | Resolving $0/0$ by factoring and cancelling |
| Rationalizing | Resolving $0/0$ involving square roots |
| Limits at infinity | End behavior and horizontal asymptotes |
| Infinite limits | Vertical asymptotes |
| Continuity introduction | The three-step continuity test |
| Types of discontinuity | Removable, jump, infinite |

> 🎯 The rest of Unit 1 is a *toolkit* for *computing* limits. The conceptual definition you mastered here is what justifies every one of those techniques.
      `
    },
    {
      id: 'wal7-mc',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which AP-exam concept is NOT directly defined as a limit?',
            options: [
              'The derivative $f\'(a)$',
              'The definite integral $\\int_a^b f(x)\\,dx$',
              'A polynomial of degree $n$',
              'A horizontal asymptote $y = L$'
            ],
            correctAnswer: 2,
            explanation: 'A polynomial is just an algebraic expression — its definition does not involve a limit. Derivatives, integrals, and asymptotes are all defined via limits.'
          },
          {
            question: 'Continuity of $f$ at $a$ requires THREE conditions. Which is not one of them?',
            options: [
              '$f(a)$ is defined',
              '$\\lim_{x \\to a} f(x)$ exists',
              '$\\lim_{x \\to a} f(x) = f(a)$',
              '$f$ is differentiable at $a$'
            ],
            correctAnswer: 3,
            explanation: 'Differentiability is a stronger condition than continuity. Continuity itself only needs the value to be defined, the limit to exist, and the two to agree.'
          },
          {
            question: 'A student says "$\\lim_{x \\to 0} 1/x = \\infty$ because $1/x$ gets very big." What is the correct response?',
            options: [
              'Agreed — that\'s the right limit',
              'Wrong — the left side gives $-\\infty$ and the right side gives $+\\infty$, so the two-sided limit DNE',
              'Wrong — the limit equals 0',
              'Wrong — the limit equals 1'
            ],
            correctAnswer: 1,
            explanation: 'For tiny *negative* $x$, $1/x$ is a large negative number. The two one-sided limits disagree, so the two-sided limit fails — even though *each* side is unbounded.'
          }
        ]
      }
    },
    {
      id: 'wal7-input',
      type: 'input-boxes' as const,
      content: `
**Final Mastery Drill** 🧮

For $f(x) = \\dfrac{x^2 - 16}{x - 4}$:

**1)** $f(4)$ direct substitution gives the indeterminate form. Type the form (e.g. \`0/0\` or \`infty/infty\`):

**2)** $\\lim_{x \\to 4} f(x) = ?$ (whole number)

**3)** Is $f$ continuous at 4? (\`yes\` or \`no\`)

**4)** What kind of discontinuity is at $x = 4$? Type \`removable\`, \`jump\`, or \`infinite\`:
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0/0', '8', 'no', 'removable'],
        hint1: 'Numerator and denominator are both zero at $x = 4$.',
        hint2: 'Factor: $(x-4)(x+4)/(x-4) = x + 4$ for $x \\ne 4$.',
        hint3: '$f(4)$ is undefined, so $f$ cannot be continuous there. Since the limit exists (=8), the discontinuity is removable.',
        explanation: 'Direct substitution: $0/0$. Factoring: $f(x) = x+4$ for $x \\ne 4$, so the limit is 8. But $f(4)$ is undefined, so $f$ is not continuous at 4. Because the limit exists and is finite, redefining $f(4) = 8$ would patch the function — a removable discontinuity.'
      }
    },
    {
      id: 'wal7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Vocabulary Final Check** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: '"$\\lim_{x \\to 2} f(x) = 5$" means', options: ['$f(2) = 5$', 'as $x$ approaches 2, $f(x)$ approaches 5', 'the slope at 2 is 5', 'the area from 0 to 2 is 5'] },
          { label: '"$f$ is continuous at $a$" requires', options: ['only that $f(a)$ exists', 'only that the limit at $a$ exists', '$f(a)$ defined, limit exists, and they\'re equal', 'only that $f$ is differentiable at $a$'] },
          { label: 'A removable discontinuity occurs when', options: ['the limit DNE', 'the limit exists but $f(a)$ is undefined or differs from the limit', '$f$ has a vertical asymptote', '$f$ has a jump'] },
        ],
        correctAnswers: [
          'as $x$ approaches 2, $f(x)$ approaches 5',
          '$f(a)$ defined, limit exists, and they\'re equal',
          'the limit exists but $f(a)$ is undefined or differs from the limit'
        ],
        hint1: 'Limits are about *approaching*, not *equaling*.',
        hint2: 'Continuity is the three-step test.',
        hint3: 'A removable hole is "easily fixable" by redefining $f(a)$.',
        explanation: 'A limit describes approach. Continuity is the three-condition test. A removable discontinuity is one where redefining $f(a)$ would patch the function.'
      }
    },
    {
      id: 'wal7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'Pick the BEST one-sentence summary of "what a limit is."',
            options: [
              'The value of the function at a specific point',
              'The value the function approaches as the input approaches a target',
              'The slope of the tangent line at a point',
              'The area between the curve and the x-axis'
            ],
            correctAnswer: 1,
            explanation: 'That is the intuitive definition. The other three describe value, derivative, and integral respectively — all built on limits but each different from the limit itself.'
          },
          {
            question: 'Why is the limit concept the foundation of calculus?',
            options: [
              'Because it lets us study behavior NEAR a point even when the function is undefined or misbehaves AT that point',
              'Because limits are the same as plug-in values',
              'Because limits only apply to polynomials',
              'Because limits eliminate the need for graphs'
            ],
            correctAnswer: 0,
            explanation: 'The whole power of the limit is that it sidesteps the value $f(a)$ and asks "where is the function heading?" That allows us to define derivatives ($0/0$ form), integrals ($\\infty - \\infty$), and asymptotes ($1/0$) — each a situation where direct substitution would fail.'
          }
        ]
      }
    }
  ]
}
