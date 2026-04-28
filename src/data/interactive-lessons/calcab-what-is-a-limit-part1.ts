export const calcabWhatIsALimitPart1Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal1-intro',
      type: 'text' as const,
      content: `# 🎯 What Is a Limit?

**Part 1 of 7 — The intuitive idea**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea |
| 📌 An Everyday Analogy |
| 🔑 What a Limit Asks |
| Why $f(a)$ and $\\lim_{x\\to a} f(x)$ Are Different |

> 🔑 **Why this matters:** Limits are the foundation of every other idea in calculus. The derivative, the definite integral, continuity, asymptotes — all are limits in disguise.

---

### What You'll Master in Part 1
- The intuitive ("approaching") meaning of a limit
- The crucial distinction between *what $f$ is doing near $a$* and *what $f(a)$ equals*
- Why you cannot just "plug in" when the function misbehaves at the target point`
    },
    {
      id: 'wal1-big-idea',
      type: 'text' as const,
      content: `
## 💡 The Big Idea

A **limit** asks the question:

> **As $x$ gets arbitrarily close to a target value $a$, what number is $f(x)$ getting arbitrarily close to?**

We write this as

$$\\boxed{\\lim_{x \\to a} f(x) = L}$$

read aloud as "the limit of $f$ of $x$ as $x$ approaches $a$ equals $L$."

---

### Three crucial words

| Word | What it means |
|------|---------------|
| **Approaches** | $x$ is getting closer and closer to $a$ — but $x \\ne a$ |
| **Arbitrarily close** | We can make the gap between $f(x)$ and $L$ as small as we like by choosing $x$ close enough to $a$ |
| **Equals $L$** | The output is *settling on* a single value |

> 💡 **Limits are about a destination, not about the journey.** The path $x$ takes to get to $a$ doesn't matter — only what $f(x)$ trends toward.
      `
    },
    {
      id: 'wal1-analogy',
      type: 'text' as const,
      content: `
## 🚗 An Everyday Analogy

Imagine you're driving toward a town named $a$ on the highway. As your odometer reading $x$ gets closer to $a$, the elevation $f(x)$ of the highway approaches some specific value $L$ — the elevation of the town.

- The **limit** is "what elevation will I reach as I get to town $a$?" — that's $L$.
- The **value** $f(a)$ is "what is the elevation *exactly at the town sign*?" That might be missing (sign blown over), wrong (sign vandalized to say something silly), or different from $L$ for any number of reasons.

The whole power of calculus comes from this separation: we can describe what's happening *as you approach* a point without needing the function to be defined or sensible *at* the point itself.
      `
    },
    {
      id: 'wal1-vs-fa',
      type: 'text' as const,
      content: `
## 📌 $\\lim_{x\\to a} f(x)$ vs. $f(a)$

These are **different questions**.

| Question | What it asks | Notation |
|----------|-------------|----------|
| What is the limit? | The value $f(x)$ is *trending toward* near $a$ | $\\lim_{x\\to a} f(x)$ |
| What is the value? | The value $f$ actually *outputs* at $a$ | $f(a)$ |

### Three things that can happen

For the function $f(x) = \\dfrac{x^2 - 4}{x - 2}$:

- **Direct substitution gives $0/0$**, so $f(2)$ is **undefined**.
- But **near** $x = 2$, factor: $\\dfrac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$.
- So $\\lim_{x \\to 2} f(x) = 2 + 2 = 4$, even though $f(2)$ doesn't exist.

> 💡 **The limit can exist even when $f(a)$ does not.** This is exactly why limits are the right tool for calculus.
      `
    },
    {
      id: 'wal1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the symbol $\\lim_{x \\to 3} f(x) = 7$, what does $x \\to 3$ mean?',
            options: [
              '$x$ equals 3',
              '$x$ is getting arbitrarily close to 3 (but $x \\ne 3$)',
              '$x$ is exactly 3.0001',
              '$x$ is moving away from 3'
            ],
            correctAnswer: 1,
            explanation: '$x \\to 3$ means $x$ is approaching 3 from values nearby. We deliberately exclude $x = 3$ — the limit is about behavior *near* 3, not *at* 3.'
          },
          {
            question: 'If $f(2)$ is undefined, what can we say about $\\lim_{x\\to 2} f(x)$?',
            options: [
              'The limit is also automatically undefined',
              'The limit might still exist — undefined value at a point does not prevent the limit from existing',
              'The limit must equal 0',
              'The limit must equal $\\infty$'
            ],
            correctAnswer: 1,
            explanation: 'The limit only cares about behavior near $a$, not at $a$. A function can have $f(a)$ undefined and still have a perfectly good limit at $a$ (this is called a removable discontinuity).'
          },
          {
            question: 'Which of these is the BEST informal definition of $\\lim_{x \\to a} f(x) = L$?',
            options: [
              'There exists some $x$ near $a$ with $f(x) = L$',
              'As $x$ gets close to $a$, $f(x)$ gets close to $L$',
              '$f(a) = L$',
              '$f$ is continuous at $a$'
            ],
            correctAnswer: 1,
            explanation: '"As $x$ approaches $a$, $f(x)$ approaches $L$." The other three either confuse limit with value, or describe continuity (which is a stronger condition).'
          }
        ]
      }
    },
    {
      id: 'wal1-table-drill',
      type: 'input-boxes' as const,
      content: `
**Numerical Sanity Check** 🧮

The function $f(x) = \\dfrac{x^2 - 9}{x - 3}$ is undefined at $x = 3$. Fill in the table to see what value the function approaches.

**1)** $f(2.9) = ?$ (to 1 decimal place)

**2)** $f(2.99) = ?$ (to 2 decimal places)

**3)** $f(3.01) = ?$ (to 2 decimal places)

**4)** Based on your numerical evidence, $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = ?$ (whole number)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['5.9', '5.99', '6.01', '6'],
        hint1: 'Factor: $\\dfrac{x^2-9}{x-3} = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ when $x \\ne 3$.',
        hint2: 'So $f(2.9) \\approx 2.9 + 3 = 5.9$.',
        hint3: 'As $x \\to 3$, the simplified form $x + 3 \\to 6$. The limit is the value the table is *converging* to — even though $f(3)$ itself is $0/0$ and undefined.',
        explanation: 'The factored form shows $f(x) = x + 3$ everywhere except $x = 3$. So as $x \\to 3$, the values approach $6$. The limit equals $6$ even though plugging in $x=3$ gives the indeterminate form $0/0$.'
      }
    },
    {
      id: 'wal1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'A limit asks what $f(x)$ is doing as $x$', options: ['equals $a$', 'approaches $a$ but is not equal to $a$', 'goes to infinity', 'becomes undefined'] },
          { label: 'If $\\lim_{x\\to 4} f(x) = 9$ and $f(4) = 9$, then $f$ is', options: ['discontinuous at 4', 'continuous at 4', 'undefined at 4', 'approaching infinity at 4'] },
          { label: 'If $f(a)$ is undefined, the limit at $a$', options: ['is automatically undefined', 'might still exist', 'must be zero', 'must be $+\\infty$'] },
        ],
        correctAnswers: [
          'approaches $a$ but is not equal to $a$',
          'continuous at 4',
          'might still exist'
        ],
        hint1: 'Limits are always about *approaching*, never *equaling*.',
        hint2: 'When the limit equals the function value, the function is continuous there.',
        hint3: 'The limit does not require $f(a)$ to be defined.',
        explanation: 'A limit is about the trend as $x$ approaches $a$. When the limit and the function value agree, that is the definition of continuity. And a limit can exist even when $f(a)$ does not — that is exactly the case of a removable discontinuity (a "hole").'
      }
    },
    {
      id: 'wal1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'For the function $g(x) = \\begin{cases} x + 1 & x \\ne 5 \\\\ 100 & x = 5 \\end{cases}$, what is $\\lim_{x \\to 5} g(x)$?',
            options: ['$5$', '$6$', '$100$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'The limit ignores the value $g(5)$ and asks what $g(x)$ is approaching. As $x \\to 5$ (with $x \\ne 5$), $g(x) = x + 1 \\to 6$. The limit is $6$, even though $g(5) = 100$. (This is a function that has a limit but is not continuous.)'
          },
          {
            question: 'Which statement is TRUE?',
            options: [
              '$\\lim_{x\\to a} f(x)$ always equals $f(a)$.',
              '$\\lim_{x\\to a} f(x)$ depends on what $f$ does near $a$, not at $a$.',
              'A limit cannot exist if $f$ is undefined anywhere.',
              'Limits are only defined for polynomials.'
            ],
            correctAnswer: 1,
            explanation: 'The whole power of the limit concept is that it ignores $f(a)$ itself and only looks at behavior nearby. The limit equals $f(a)$ only when the function is continuous at $a$ — that is a special case, not a definition.'
          }
        ]
      }
    }
  ]
}
