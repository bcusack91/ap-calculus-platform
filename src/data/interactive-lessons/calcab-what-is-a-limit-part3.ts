export const calcabWhatIsALimitPart3Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal3-intro',
      type: 'text' as const,
      content: `# ✅ When Does a Limit Exist?

**Part 3 of 7 — The "left = right" rule**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Existence Theorem |
| Sided Limits Walkthrough |
| 📌 Why "approach the same value" matters |
| Quick Diagnostic Procedure |

> 🔑 **Why this matters:** Almost every "does this limit exist?" AP question reduces to checking whether the two one-sided limits agree.`
    },
    {
      id: 'wal3-theorem',
      type: 'text' as const,
      content: `
## 🔑 The Existence Theorem

> **Theorem.** $\\lim_{x \\to a} f(x) = L$ exists **if and only if**
> $$\\lim_{x \\to a^-} f(x) = L \\;\\;\\text{and}\\;\\; \\lim_{x \\to a^+} f(x) = L.$$

In words: **the limit exists ⟺ the left and right one-sided limits both exist and are equal.**

If the two one-sided limits are different — or if one of them doesn't exist (oscillation, $\\pm\\infty$) — the two-sided limit **does not exist** (DNE).
      `
    },
    {
      id: 'wal3-walkthrough',
      type: 'text' as const,
      content: `
## 📐 Walkthrough — A Piecewise Function

Let
$$f(x) = \\begin{cases} 2x + 1 & x < 1 \\\\ 5 - x & x \\ge 1 \\end{cases}$$

**Step 1.** Compute $\\lim_{x \\to 1^-} f(x)$. From the left we use $2x + 1$:
$$\\lim_{x \\to 1^-} (2x+1) = 2(1) + 1 = 3.$$

**Step 2.** Compute $\\lim_{x \\to 1^+} f(x)$. From the right we use $5 - x$:
$$\\lim_{x \\to 1^+} (5 - x) = 5 - 1 = 4.$$

**Step 3.** Compare. Left limit $3 \\ne$ right limit $4$, so by the existence theorem,
$$\\boxed{\\lim_{x \\to 1} f(x) \\;\\text{does not exist.}}$$

> 💡 The graph would show a **jump discontinuity** at $x = 1$ — exactly the visual signature of unequal one-sided limits.
      `
    },
    {
      id: 'wal3-why',
      type: 'text' as const,
      content: `
## 📌 Why "Same Value" Matters

A limit is a *destination*. If walking toward $a$ from the left lands you at one place, and walking from the right lands you somewhere else, then there is no single destination — and so no limit.

| Scenario | Left limit | Right limit | Two-sided limit |
|----------|-----------|-------------|-----------------|
| Continuous (best case) | 5 | 5 | 5 (exists) |
| Removable hole | 5 | 5 | 5 (exists; $f(a)$ may differ) |
| Jump | 5 | 7 | DNE |
| One-sided blow-up | 5 | $+\\infty$ | DNE |
| Two-sided blow-up | $+\\infty$ | $+\\infty$ | DNE (we say "$=\\infty$" descriptively) |
      `
    },
    {
      id: 'wal3-procedure',
      type: 'text' as const,
      content: `
## 🧭 The Diagnostic Procedure

When asked **"Does $\\lim_{x \\to a} f(x)$ exist?"** follow this checklist:

1. **Try direct substitution.** If $f(a)$ is defined and the function is "well-behaved" (polynomial, rational with $f(a) \\ne 0/0$, etc.), the limit equals $f(a)$.
2. **If you get $0/0$,** try algebraic simplification (factor, rationalize, common denominator) — Parts 5–7 cover these.
3. **If the function is piecewise or has an absolute value,** compute both one-sided limits separately and compare.
4. **If a denominator $\\to 0$ but numerator $\\not\\to 0$,** check the sign on each side — usually a vertical asymptote / DNE.

> 🎯 **AP test framing:** "Does the limit exist?" almost always means "do the left and right one-sided limits agree?"
      `
    },
    {
      id: 'wal3-mc',
      type: 'multiple-choice' as const,
      content: `
**Existence Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For some function $f$: $\\lim_{x \\to 2^-} f(x) = 4$ and $\\lim_{x \\to 2^+} f(x) = 4$, but $f(2) = 7$. What is $\\lim_{x \\to 2} f(x)$?',
            options: ['4', '7', 'Does not exist', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: 'Both one-sided limits equal 4, so the two-sided limit equals 4. The value $f(2) = 7$ is irrelevant — that just tells us $f$ is discontinuous (removable) at $x = 2$.'
          },
          {
            question: 'For some function $g$: $\\lim_{x \\to 0^-} g(x) = -1$ and $\\lim_{x \\to 0^+} g(x) = +1$. What is $\\lim_{x \\to 0} g(x)$?',
            options: ['$-1$', '$+1$', '$0$ (the average)', 'Does not exist'],
            correctAnswer: 3,
            explanation: 'The two one-sided limits disagree, so the two-sided limit DNE. (This is the classic jump in $f(x) = x/|x|$.)'
          },
          {
            question: '$\\lim_{x \\to a} f(x) = L$ exists if and only if:',
            options: [
              '$f(a) = L$',
              '$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$',
              '$f$ is continuous at $a$',
              '$f$ is bounded on an interval around $a$'
            ],
            correctAnswer: 1,
            explanation: 'This is the Existence Theorem. It says nothing about $f(a)$ — only about behavior approaching $a$.'
          }
        ]
      }
    },
    {
      id: 'wal3-input',
      type: 'input-boxes' as const,
      content: `
**Apply the Theorem** 🧮

Let $f(x) = \\begin{cases} x^2 + 1 & x \\le 2 \\\\ 3x - 1 & x > 2 \\end{cases}$.

**1)** $\\lim_{x \\to 2^-} f(x) = ?$ (whole number)

**2)** $\\lim_{x \\to 2^+} f(x) = ?$ (whole number)

**3)** Does $\\lim_{x \\to 2} f(x)$ exist? Answer \`yes\` or \`no\`.

**4)** If yes, what is its value? (If no, type \`DNE\`.)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['5', '5', 'yes', '5'],
        hint1: 'For the left limit, plug 2 into the top piece: $x^2 + 1$.',
        hint2: 'For the right limit, plug 2 into the bottom piece: $3x - 1$.',
        hint3: 'If both one-sided limits agree, the two-sided limit exists and equals their common value.',
        explanation: 'Left: $2^2 + 1 = 5$. Right: $3(2) - 1 = 5$. Both agree, so the two-sided limit exists and equals 5. Notice this happens at the seam of a piecewise function — when the two pieces "meet up."'
      }
    },
    {
      id: 'wal3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Limit** 🔽

For each scenario, decide whether $\\lim_{x \\to a} f(x)$ exists.
      `,
      exercise: {
        dropdowns: [
          { label: 'Left = 3, right = 3, $f(a)$ undefined →', options: ['exists, equals 3', 'DNE', 'exists, equals undefined', 'exists, equals 0'] },
          { label: 'Left = 3, right = 5, $f(a) = 3$ →', options: ['exists, equals 3', 'exists, equals 4 (average)', 'DNE', 'exists, equals 5'] },
          { label: 'Left = $-\\infty$, right = $+\\infty$ →', options: ['exists, equals 0', 'exists, equals $\\infty$', 'DNE', 'exists, equals $f(a)$'] },
        ],
        correctAnswers: [
          'exists, equals 3',
          'DNE',
          'DNE'
        ],
        hint1: 'A limit can exist when $f(a)$ is undefined.',
        hint2: 'Different one-sided limits → DNE.',
        hint3: 'Opposite blow-ups → no single destination → DNE.',
        explanation: '1) Both sides agree at 3 — the limit exists (removable hole at $a$). 2) The sides disagree — DNE (jump). 3) Opposite-signed infinities — DNE (the two-sided limit does not even have a sign).'
      }
    },
    {
      id: 'wal3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'Suppose $f$ is defined by $f(x) = |x|/x$ for $x \\ne 0$. What is $\\lim_{x \\to 0} f(x)$?',
            options: ['$-1$', '$0$', '$1$', 'Does not exist'],
            correctAnswer: 3,
            explanation: 'For $x < 0$, $|x|/x = -1$. For $x > 0$, $|x|/x = +1$. Left limit $= -1$, right limit $= +1$ — they disagree, so the two-sided limit DNE.'
          },
          {
            question: 'A piecewise function $f$ has $\\lim_{x\\to 3^-} f(x) = 7$ and $\\lim_{x\\to 3^+} f(x) = 7$, with $f(3)$ undefined. Choose the strongest true statement.',
            options: [
              '$f$ is continuous at 3.',
              'The two-sided limit at 3 exists and equals 7, but $f$ is not continuous at 3.',
              'The two-sided limit at 3 does not exist.',
              '$f$ has a jump discontinuity at 3.'
            ],
            correctAnswer: 1,
            explanation: 'Both one-sided limits agree at 7, so the limit exists and equals 7. But continuity additionally requires $f(3)$ to be defined and equal to that limit — here $f(3)$ is undefined, giving a removable discontinuity.'
          }
        ]
      }
    }
  ]
}
