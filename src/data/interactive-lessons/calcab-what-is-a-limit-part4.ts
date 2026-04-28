export const calcabWhatIsALimitPart4Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal4-intro',
      type: 'text' as const,
      content: `# 🚫 Limits That Do NOT Exist

**Part 4 of 7 — The three classic failure modes**

---

### Topics in This Part

| Section |
|---------|
| 📌 Failure Mode 1: Jump |
| 📌 Failure Mode 2: Unbounded (blow-up) |
| 📌 Failure Mode 3: Oscillation |
| Putting Them Side-by-Side |

> 🔑 **Why this matters:** "Does the limit exist?" is one of the most common AP free-response prompts. You'll be expected to *name* the failure mode and *explain why* the limit doesn't exist.`
    },
    {
      id: 'wal4-jump',
      type: 'text' as const,
      content: `
## 1️⃣ Jump

The two one-sided limits exist but **disagree**.

**Canonical example:** $f(x) = \\dfrac{|x|}{x}$.

- Left: $\\lim_{x \\to 0^-} \\dfrac{|x|}{x} = \\dfrac{-x}{x} = -1$.
- Right: $\\lim_{x \\to 0^+} \\dfrac{|x|}{x} = \\dfrac{x}{x} = +1$.
- Conclusion: $\\lim_{x \\to 0} f(x)$ DNE — jump of size 2 at the origin.

> 💡 Visual signature: a graph that "jumps up" or "jumps down" at $a$ with a step.
      `
    },
    {
      id: 'wal4-blowup',
      type: 'text' as const,
      content: `
## 2️⃣ Unbounded (vertical asymptote)

The function values grow without bound on at least one side of $a$.

**Canonical example:** $f(x) = \\dfrac{1}{x}$ near $x = 0$.

- Left: $\\lim_{x \\to 0^-} \\dfrac{1}{x} = -\\infty$ (large negative).
- Right: $\\lim_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$ (large positive).
- Conclusion: limit DNE; we say $f$ has a vertical asymptote at $x = 0$.

> 🔑 **Notation note:** When a limit equals $\\pm\\infty$, the limit *technically does not exist* — but we write $\\lim = \\pm\\infty$ as a *description* of the unbounded behavior.

A subtler case: $f(x) = \\dfrac{1}{x^2}$. Both sides blow up to $+\\infty$, so we say
$$\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$$
(unbounded — DNE in the strict numerical sense, but the description $+\\infty$ is meaningful since both sides agree).
      `
    },
    {
      id: 'wal4-oscillation',
      type: 'text' as const,
      content: `
## 3️⃣ Oscillation

The function refuses to settle on any value as $x$ approaches $a$.

**Canonical example:** $f(x) = \\sin\\!\\left(\\dfrac{1}{x}\\right)$ as $x \\to 0$.

As $x$ shrinks toward 0, $1/x$ races to $\\infty$, and $\\sin(1/x)$ keeps oscillating between $-1$ and $+1$ — infinitely many times in any tiny window around 0. There is **no destination value**.

- Left: oscillates — DNE.
- Right: oscillates — DNE.
- Conclusion: $\\lim_{x \\to 0} \\sin(1/x)$ DNE.

> 💡 **Test for oscillation:** if you can build two sequences $x_n \\to a$ that yield *different* output sequences, the limit does not exist.
      `
    },
    {
      id: 'wal4-summary',
      type: 'text' as const,
      content: `
## 📊 Summary Table

| Failure mode | Visual signature | Example | One-sided limits |
|-------------|------------------|---------|------------------|
| **Jump** | Step in the graph | $\\|x\\|/x$ at 0 | both exist but unequal |
| **Unbounded** | Vertical asymptote | $1/x$ at 0; $\\tan x$ at $\\pi/2$ | one or both = $\\pm\\infty$ |
| **Oscillation** | Infinitely wiggly | $\\sin(1/x)$ at 0 | one or both fail to exist |

> 🎯 On the AP exam, you should be able to **identify which failure mode** is present and **explain it in one sentence**.
      `
    },
    {
      id: 'wal4-mc',
      type: 'multiple-choice' as const,
      content: `
**Identify the Failure Mode** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = 1/(x-3)^2$ as $x \\to 3$, the limit fails to exist because:',
            options: [
              'The function jumps from one value to another',
              'The function blows up to $+\\infty$ from both sides',
              'The function oscillates between $-1$ and $+1$',
              'The function is not defined for $x < 3$'
            ],
            correctAnswer: 1,
            explanation: 'Squared denominator → always positive → both sides go to $+\\infty$. Unbounded behavior, vertical asymptote.'
          },
          {
            question: 'For $f(x) = \\cos(1/x)$ as $x \\to 0^+$, the limit fails because:',
            options: [
              'The function jumps',
              'The function blows up to $\\pm\\infty$',
              'The function oscillates infinitely fast and never settles',
              'The function is identically zero'
            ],
            correctAnswer: 2,
            explanation: 'As $x \\to 0^+$, $1/x \\to \\infty$, and $\\cos(1/x)$ keeps cycling through $[-1,1]$ infinitely many times. Oscillation.'
          },
          {
            question: 'For the floor function $\\lfloor x \\rfloor$ at $x = 2$, the limit fails because:',
            options: [
              'Left limit is 1, right limit is 2 (they disagree → jump)',
              'The function blows up',
              'The function oscillates',
              'The function is undefined at 2'
            ],
            correctAnswer: 0,
            explanation: '$\\lfloor 1.999 \\rfloor = 1$ but $\\lfloor 2.001 \\rfloor = 2$. Two finite, disagreeing one-sided limits — a jump.'
          }
        ]
      }
    },
    {
      id: 'wal4-input',
      type: 'input-boxes' as const,
      content: `
**Diagnose Numerically** 🧮

Consider $f(x) = \\dfrac{|x - 4|}{x - 4}$.

**1)** $f(3.99) = ?$ (whole number with sign, e.g. \`-1\`)

**2)** $f(4.01) = ?$ (whole number with sign)

**3)** Does $\\lim_{x \\to 4} f(x)$ exist? Type \`yes\` or \`no\`.

**4)** What is the failure mode? Type \`jump\`, \`blowup\`, \`oscillation\`, or \`none\`:
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['-1', '1', 'no', 'jump'],
        hint1: 'For $x < 4$, $|x-4| = -(x-4)$, so the ratio is $-1$.',
        hint2: 'For $x > 4$, $|x-4| = x-4$, so the ratio is $+1$.',
        hint3: 'Two finite but unequal one-sided limits → jump.',
        explanation: 'The function equals $-1$ to the left of 4 and $+1$ to the right. Both one-sided limits exist but disagree, so the two-sided limit DNE — and the failure mode is a jump discontinuity.'
      }
    },
    {
      id: 'wal4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Failure Mode Match** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0} \\sin(\\pi/x)$ DNE because of', options: ['jump', 'unbounded blow-up', 'oscillation', 'continuity'] },
          { label: '$\\lim_{x \\to 5} \\dfrac{1}{(x-5)^2}$ DNE because of', options: ['jump', 'unbounded blow-up', 'oscillation', 'continuity'] },
          { label: '$\\lim_{x \\to 0} \\lfloor x \\rfloor$ DNE because of', options: ['jump', 'unbounded blow-up', 'oscillation', 'continuity'] },
        ],
        correctAnswers: ['oscillation', 'unbounded blow-up', 'jump'],
        hint1: '$\\sin$ of a quantity that races to infinity oscillates.',
        hint2: 'A nonzero numerator over a tiny squared denominator blows up.',
        hint3: 'The floor function steps up by 1 at each integer.',
        explanation: '1) $\\sin(\\pi/x)$ oscillates between $-1$ and $+1$ as $x \\to 0$. 2) $1/(x-5)^2$ blows up to $+\\infty$ from both sides. 3) Floor jumps from $-1$ on the left of 0 to $0$ on the right.'
      }
    },
    {
      id: 'wal4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these limits DNE because the function blows up to $\\pm\\infty$?',
            options: [
              '$\\lim_{x \\to 0} \\sin(1/x)$',
              '$\\lim_{x \\to 0} \\dfrac{1}{x}$',
              '$\\lim_{x \\to 0} \\dfrac{|x|}{x}$',
              '$\\lim_{x \\to 0} (x+3)$'
            ],
            correctAnswer: 1,
            explanation: '$1/x$ goes to $-\\infty$ on the left and $+\\infty$ on the right — unbounded blow-up. The first oscillates, the third jumps, the fourth has a perfectly fine limit (3).'
          },
          {
            question: 'A student claims "the limit exists because the left limit equals 5 and the function blows up to $+\\infty$ on the right." What is the correct response?',
            options: [
              'The student is right — the average is well-defined',
              'The student is wrong — both one-sided limits must exist as finite values *and* be equal',
              'The student is right because the right limit is bigger',
              'The student is right when the function is even'
            ],
            correctAnswer: 1,
            explanation: 'Existence requires both one-sided limits to exist (as finite, equal values). $+\\infty$ is not a finite value, and even if it were, $5 \\ne +\\infty$. The two-sided limit DNE.'
          }
        ]
      }
    }
  ]
}
