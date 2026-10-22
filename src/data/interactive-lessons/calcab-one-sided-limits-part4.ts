export const calcabOneSidedLimitsPart4Data = {
  topicSlug: 'one-sided-limits',
  sections: [
    {
      id: 'osl4-intro',
      type: 'text' as const,
      content: `# ⚠️ When Only ONE Side Exists

**Part 4 of 4 — Domain restrictions and one-sided endpoints**

---

### Topics in This Part

| Section |
|---------|
| Why Only One Side Might Exist |
| 📝 Square Roots and Endpoints |
| Limits at a Domain Endpoint |

> 🔑 **Why this matters:** AP loves to ask about $\\sqrt{x}$ at $x = 0$ and similar functions where one side is *undefined*.`
    },
    {
      id: 'osl4-why',
      type: 'text' as const,
      content: `
## 🤔 Why Only One Side Might Exist

If a function is **only defined on one side** of $x = a$, you can only approach $a$ from that side. The other one-sided limit doesn't exist (because the function values don't exist there).

| Function | Domain near 0 | Limits at 0 |
|----------|---------------|-------------|
| $\\sqrt{x}$ | $x \\ge 0$ only | $\\lim_{x \\to 0^+} \\sqrt{x} = 0$; left limit doesn't make sense |
| $\\ln x$ | $x > 0$ only | $\\lim_{x \\to 0^+} \\ln x = -\\infty$; left limit doesn't make sense |
| $\\sqrt{x - 5}$ | $x \\ge 5$ | $\\lim_{x \\to 5^+} \\sqrt{x - 5} = 0$; left limit not defined |
      `
    },
    {
      id: 'osl4-sqrt',
      type: 'text' as const,
      content: `
## 📝 Worked Example: $\\sqrt{x - 3}$ at $x = 3$

The expression $\\sqrt{x - 3}$ requires $x \\ge 3$.

- $\\lim_{x \\to 3^+} \\sqrt{x - 3} = \\sqrt{0} = 0$. ✅ Defined.
- $\\lim_{x \\to 3^-} \\sqrt{x - 3}$: for $x < 3$, the radicand is negative, so $\\sqrt{x - 3}$ isn't a real number. Left-hand limit doesn't exist.

> 💡 In AP-style problems, the answer here is *"the right-hand limit equals 0; there is no left-hand limit, because no inputs to the left of 3 are in the domain."*
      `
    },
    {
      id: 'osl4-endpoint',
      type: 'text' as const,
      content: `
## ⚖️ Limits at a Domain Endpoint

What happens to $f(x) = \\sqrt{x - 3}$ at $x = 3$, the left end of its domain $[3, \\infty)$?

| Statement about $\\sqrt{x - 3}$ at $x = 3$ | Value |
|----------|-------|
| $\\lim_{x \\to 3^+} \\sqrt{x - 3}$ | $0$ |
| $\\lim_{x \\to 3^-} \\sqrt{x - 3}$ | Does not exist (no inputs in the domain to the left) |
| $f(3)$ | $\\sqrt{0} = 0$ |

At a domain endpoint, use the **one-sided** limit from the side where the function lives:

$$\\lim_{x \\to 3^+} \\sqrt{x - 3} = 0 = f(3),$$

so $f$ is **continuous from the right** at $3$. That is what "continuous on its domain $[3, \\infty)$" means at the endpoint (LIM-2.B.2): power functions such as $\\sqrt{x - 3}$ are continuous at every point of their domains, with one-sided continuity at an endpoint.

> ⚠️ **Contrast:** the "both one-sided limits must exist and agree" test is for a point with domain inputs on **both** sides, like a jump in a piecewise function. At an endpoint, AP questions write the one-sided limit ($\\lim_{x \\to 3^+}$), so the notation tells you which side to use. State the one-sided limit rather than a two-sided one.
      `
    },
    {
      id: 'osl4-mc',
      type: 'multiple-choice' as const,
      content: `**Endpoint Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\sqrt{x - 7}$, what is $\\lim_{x \\to 7^+} f(x)$?',
            options: ['$0$', '$7$', 'DNE', '$-7$'],
            correctAnswer: 0,
            explanation: 'For $x > 7$, $\\sqrt{x-7}$ is defined and approaches $\\sqrt{0} = 0$.'
          },
          {
            question: 'For $f(x) = \\sqrt{x - 7}$, what is $\\lim_{x \\to 7^-} f(x)$?',
            options: ['$0$, the same as the right-hand limit', '$7$, the $x$-value being approached', 'DNE, as $\\sqrt{x-7}$ is not real for $x < 7$', '$-\\infty$, since $x - 7$ becomes negative'],
            correctAnswer: 2,
            explanation: '$\\sqrt{x - 7}$ requires $x \\ge 7$. The left-hand limit asks about $x < 7$, where the function isn\'t real-valued — left-hand limit DNE. Copying the right-hand value 0 ignores the domain, 7 is the input being approached rather than an output, and a negative radicand does not send the root to $-\\infty$.'
          },
          {
            question: 'For $f(x) = \\ln x$, what is $\\lim_{x \\to 0^+} f(x)$?',
            options: ['$0$', '$1$', '$-\\infty$', '$+\\infty$'],
            correctAnswer: 2,
            explanation: '$\\ln x$ heads to $-\\infty$ as $x \\to 0^+$. The left-hand limit doesn\'t exist (function undefined for $x \\le 0$).'
          }
        ]
      }
    },
    {
      id: 'osl4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'Which statement about $f(x) = \\sqrt{x}$ at $x = 0$ is TRUE?',
            options: [
              '$\\lim_{x \\to 0^+} \\sqrt{x} = f(0)$, so $f$ is continuous from the right at $0$',
              '$\\lim_{x \\to 0^-} \\sqrt{x} = f(0)$, so $f$ is continuous from the left at $0$',
              '$f(0)$ is undefined, so $f$ has a removable discontinuity at $0$',
              '$\\sqrt{x} \\to \\infty$ as $x \\to 0^+$, so $f$ has a vertical asymptote at $0$'
            ],
            correctAnswer: 0,
            explanation: 'The domain of $\\sqrt{x}$ is $[0, \\infty)$, so at the endpoint $0$ only the right-hand limit applies: $\\sqrt{x} \\to 0 = f(0)$ as $x \\to 0^+$, and $f$ is continuous from the right at $0$. There are no domain inputs to the left of $0$, $f(0) = \\sqrt{0} = 0$ is defined, and the outputs shrink toward $0$ rather than blowing up.'
          },
          {
            question: 'Two-sided existence theorem in plain English:',
            options: [
              '$\\lim_{x\\to a} f$ exists iff $f(a)$ is defined and finite',
              '$\\lim_{x\\to a} f$ exists iff the one-sided limits exist and agree',
              '$\\lim_{x\\to a} f$ exists iff $f$ is differentiable at $a$',
              '$\\lim_{x\\to a} f$ exists iff $f$ is bounded near $a$'
            ],
            correctAnswer: 1,
            explanation: 'The defining theorem of one-sided vs. two-sided limits. Memorize and cite.'
          }
        ]
      }
    }
  ]
}
