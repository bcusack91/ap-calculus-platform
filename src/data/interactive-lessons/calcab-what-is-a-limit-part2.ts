export const calcabWhatIsALimitPart2Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal2-intro',
      type: 'text' as const,
      content: `# 📝 Limit Notation

**Part 2 of 7 — Reading and writing limits like a mathematician**

---

### Topics in This Part

| Section |
|---------|
| 📌 The Standard Notation $\\lim_{x \\to a} f(x) = L$ |
| 🔑 One-Sided Notation: $x \\to a^-$ vs $x \\to a^+$ |
| Limits at Infinity Notation |
| Common Notation Pitfalls |

> 🔑 **Why this matters:** Calculus is a language. Once you can fluently read $\\lim_{x \\to 3^+} f(x) = 5$ and translate it into "as $x$ approaches 3 from the right, $f(x)$ approaches 5," every theorem will be much easier to absorb.`
    },
    {
      id: 'wal2-standard',
      type: 'text' as const,
      content: `
## 📌 Standard Two-Sided Limit Notation

$$\\boxed{\\lim_{x \\to a} f(x) = L}$$

| Piece | Meaning |
|-------|---------|
| $\\lim$ | "the limit of" |
| $x \\to a$ | "as $x$ approaches $a$" |
| $f(x)$ | the function we are evaluating |
| $= L$ | "equals the value $L$" |

**Read it aloud as:** "the limit, as $x$ approaches $a$, of $f(x)$, equals $L$."

> 💡 The arrow $\\to$ never means "equals." $x$ never actually reaches $a$ — it gets arbitrarily close.
      `
    },
    {
      id: 'wal2-onesided',
      type: 'text' as const,
      content: `
## 🔑 One-Sided Limits

Sometimes the function behaves differently on each side of $a$. We use a small $-$ or $+$ on the limit:

$$\\lim_{x \\to a^-} f(x) \\quad \\text{(approach from the left)}$$

$$\\lim_{x \\to a^+} f(x) \\quad \\text{(approach from the right)}$$

| Symbol | Meaning | Mental picture |
|--------|---------|----------------|
| $x \\to a^-$ | $x$ slides up toward $a$ from values *less than* $a$ | $x = 2.9, 2.99, 2.999, \\ldots \\to 3$ |
| $x \\to a^+$ | $x$ slides down toward $a$ from values *greater than* $a$ | $x = 3.1, 3.01, 3.001, \\ldots \\to 3$ |

> 🔑 **Key fact:** The two-sided limit $\\lim_{x \\to a} f(x)$ exists **if and only if** both one-sided limits exist *and are equal*:
> $$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L \\;\\Longleftrightarrow\\; \\lim_{x \\to a} f(x) = L$$
      `
    },
    {
      id: 'wal2-infinity',
      type: 'text' as const,
      content: `
## ♾️ Limits Involving Infinity

Two completely different scenarios use the symbol $\\infty$:

### 1. Limits *at* infinity (end behavior of $f$)

$$\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L$$

Asks: "what value is $f$ approaching as $x$ runs off to the right (or left) forever?"

### 2. Limits *equal to* infinity (vertical asymptotes)

$$\\lim_{x \\to a} f(x) = \\infty$$

Asks: "as $x$ approaches $a$, does $f(x)$ grow without bound?" (Note: technically the limit *does not exist* in the usual sense — we use $\\infty$ as a *description* of the unbounded behavior.)

| Notation | Translation |
|----------|-------------|
| $\\lim_{x \\to \\infty} (1/x) = 0$ | "as $x$ runs to the right forever, $1/x$ shrinks toward 0" |
| $\\lim_{x \\to 0^+} (1/x) = \\infty$ | "as $x$ approaches 0 from the right, $1/x$ blows up" |
      `
    },
    {
      id: 'wal2-pitfalls',
      type: 'text' as const,
      content: `
## ⚠️ Common Notation Pitfalls

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| $\\lim_{x = a} f(x)$ | $\\lim_{x \\to a} f(x)$ | $x$ approaches, never equals |
| $\\lim f(x) = L$ (no $x \\to$) | $\\lim_{x \\to a} f(x) = L$ | Must specify what $x$ is approaching |
| $\\lim_{x \\to a^-} = 5$ | $\\lim_{x \\to a^-} f(x) = 5$ | The function name is required |
| $\\lim_{x \\to a} f(x) = f(a)$ | True only if $f$ is continuous at $a$ | These are different in general |
      `
    },
    {
      id: 'wal2-mc',
      type: 'multiple-choice' as const,
      content: `
**Notation Reading Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How would you READ ALOUD the symbol $\\lim_{x \\to 4^-} g(x) = 2$?',
            options: [
              'The limit of g of x, as x equals 4 minus 1, equals 2',
              'The limit of g of x, as x approaches 4 from the left, equals 2',
              'g of x minus 4 equals 2',
              'g approaches 2 as x equals 4'
            ],
            correctAnswer: 1,
            explanation: 'The "$-$" superscript indicates one-sided approach from below (the left side of $a$).'
          },
          {
            question: 'Which statement correctly says "$\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x) = L$ implies $\\lim_{x \\to a} f(x) = L$"?',
            options: [
              'If both one-sided limits exist and equal $L$, then the two-sided limit equals $L$',
              'If the two-sided limit equals $L$, the function is continuous at $a$',
              'If $f(a) = L$, then both one-sided limits equal $L$',
              'A limit only exists when both one-sided limits go to infinity'
            ],
            correctAnswer: 0,
            explanation: 'The two-sided limit exists ⟺ both one-sided limits exist AND are equal. This is the formal "left = right ⇒ exists" rule.'
          },
          {
            question: 'Which expression describes "as $x$ runs off to negative infinity, $h(x)$ approaches 7"?',
            options: [
              '$\\lim_{x \\to 7} h(x) = -\\infty$',
              '$\\lim_{x \\to -\\infty} h(x) = 7$',
              '$\\lim_{x \\to -7} h(x) = \\infty$',
              '$h(-\\infty) = 7$'
            ],
            correctAnswer: 1,
            explanation: 'The variable approaches a value (here, $-\\infty$) and the function approaches a value (here, $7$). The arrow always points to where $x$ is going.'
          }
        ]
      }
    },
    {
      id: 'wal2-input',
      type: 'input-boxes' as const,
      content: `
**Translate the Sentence** 🧮

For each English sentence, fill in the missing piece of the limit notation. Type the simplified expression — no extra spaces.

**1)** "As $x$ approaches $5$ from the right, $f(x)$ approaches $9$." 
$$\\lim_{x \\to ?} f(x) = 9$$
Enter the missing right side of the arrow (e.g. \`5+\` or \`-2-\`):

**2)** "As $x$ runs to positive infinity, $g(x)$ approaches $0$."
$$\\lim_{x \\to ?} g(x) = 0$$

**3)** "As $x$ approaches $2$ from the left, $h(x)$ blows up to $-\\infty$."
$$\\lim_{x \\to 2^-} h(x) = ?$$
Enter \`infinity\`, \`-infinity\`, or a number:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5+', 'infinity', '-infinity'],
        hint1: 'The "+" sign as a superscript means "from the right."',
        hint2: 'Positive infinity is just $\\infty$.',
        hint3: '"Blows up to $-\\infty$" describes a negative vertical asymptote behavior.',
        explanation: '1) "From the right" means $x \\to 5^+$. 2) "$x$ runs to positive infinity" means $x \\to \\infty$. 3) "Blows up to $-\\infty$" is the description for the limit being $-\\infty$.'
      }
    },
    {
      id: 'wal2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Symbol to the Sentence** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 3^-} f(x) = 5$ means', options: ['$f(3) = 5$', 'as $x$ approaches 3 from the left, $f(x) \\to 5$', 'as $x$ approaches 3 from the right, $f(x) \\to 5$', '$f$ has an asymptote at $x=3$'] },
          { label: '$\\lim_{x \\to \\infty} f(x) = 0$ describes', options: ['a vertical asymptote at $x = 0$', 'a horizontal asymptote $y = 0$ on the right', 'a hole at $x = \\infty$', 'continuity at the origin'] },
          { label: '$\\lim_{x \\to 2} f(x)$ exists means', options: ['$f(2)$ is defined', 'left and right limits at 2 are both defined and equal', 'the function is increasing near 2', '$f$ has no asymptote at 2'] },
        ],
        correctAnswers: [
          'as $x$ approaches 3 from the left, $f(x) \\to 5$',
          'a horizontal asymptote $y = 0$ on the right',
          'left and right limits at 2 are both defined and equal'
        ],
        hint1: 'Superscript $-$ means "from the left."',
        hint2: 'A finite limit at $\\pm\\infty$ corresponds to a horizontal asymptote.',
        hint3: 'Two-sided existence requires both one-sided limits to agree.',
        explanation: '1) "$3^-$" is approach-from-the-left. 2) A horizontal asymptote $y = L$ corresponds to $\\lim_{x \\to \\pm\\infty} f(x) = L$. 3) The two-sided limit exists ⟺ both one-sided limits exist and are equal.'
      }
    },
    {
      id: 'wal2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'Which two limits, taken together, force $\\lim_{x \\to 1} f(x) = 7$ to exist and equal 7?',
            options: [
              '$f(1) = 7$ and $f$ is differentiable at 1',
              '$\\lim_{x \\to 1^-} f(x) = 7$ and $\\lim_{x \\to 1^+} f(x) = 7$',
              '$\\lim_{x \\to 1^-} f(x) = 7$ and $f(1) = 7$',
              '$f(1) = 7$ and $f(1.0001) = 7.0001$'
            ],
            correctAnswer: 1,
            explanation: 'Two-sided limit exists ⟺ both one-sided limits exist and are equal. The value $f(1)$ does not enter the definition of the limit at all.'
          },
          {
            question: '$\\lim_{x \\to 0^+} \\dfrac{1}{x}$ is best described as:',
            options: [
              'equal to 0',
              'equal to $+\\infty$ (the limit grows without bound from the right)',
              'equal to $-\\infty$',
              'equal to 1'
            ],
            correctAnswer: 1,
            explanation: 'For tiny positive $x$, $1/x$ is huge and positive, growing without bound. We write this as $\\lim_{x \\to 0^+} 1/x = +\\infty$.'
          }
        ]
      }
    }
  ]
}
