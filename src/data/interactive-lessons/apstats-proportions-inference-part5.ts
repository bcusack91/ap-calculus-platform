export const apStatsPropInfPart5Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p5-intro',
      type: 'text' as const,
      content: `# 📐 Sample Size Determination

**Part 5 of 7 — Planning a Study**

---

### Finding the Required Sample Size

For a desired margin of error $ME$ at confidence level $z^*$:

$$n = \\\\left(\\\\frac{z^*}{ME}\\\\right)^2 \\\\hat{p}(1-\\\\hat{p})$$

If no prior estimate of $p$ exists, use $\\\\hat{p} = 0.5$ (maximizes $n$, conservative).

$$n = \\\\left(\\\\frac{z^*}{ME}\\\\right)^2 (0.25)$$

---

### Example

Want a 95% CI with margin of error $\\\\leq 0.03$:

$$n = \\\\left(\\\\frac{1.96}{0.03}\\\\right)^2 (0.25) = (65.33)^2(0.25) = 4268.4(0.25) = 1067.1$$

**Round up:** $n = 1068$

> 🔑 Always round UP to the next whole number when computing sample size.`
    },    {
      id: 'propinference-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Using $\\\\hat{p} = 0.5$ when computing sample size:',
            options: ['Gives the smallest possible $n$', 'Gives the largest possible $n$ (most conservative)', 'Is never appropriate', 'Only works for 95% confidence'],
            correctAnswer: 1,
            explanation: '$p(1-p)$ is maximized at $p = 0.5$, which gives the largest (most conservative) sample size.'
          },
          {
            question: 'To cut the margin of error in half, you need to:',
            options: ['Double the sample size', 'Quadruple the sample size', 'Halve the sample size', 'Use a lower confidence level'],
            correctAnswer: 1,
            explanation: 'ME is proportional to $1/\\\\sqrt{n}$. Halving ME requires $4\\\\times$ the sample size.'
          },
          {
            question: 'When computing sample size, always round:',
            options: ['Down to the nearest integer', 'Up to the nearest integer', 'To the nearest even number', 'To the nearest ten'],
            correctAnswer: 1,
            explanation: 'Round up to ensure the margin of error requirement is met.'
          }
        ]
      }
    },    {
      id: 'propinference-p5-input',
      type: 'input-boxes' as const,
      content: `
**Sample Size Calculation** 🧮

Desired: 95% CI, margin of error $\\\\leq 0.04$, no prior estimate of $p$.

**1)** What value of $\\\\hat{p}$ should you use?

**2)** $n = (1.96/0.04)^2 \\\\times 0.25 = ?$ (round to nearest integer)

**3)** What $n$ do you report? (remember rounding rule)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '600', '601'],
        hint1: 'Conservative estimate when $p$ is unknown',
        hint2: '$(49)^2 \\\\times 0.25 = 2401 \\\\times 0.25$',
        hint3: 'Always round UP',
        explanation: '1) Use $\\\\hat{p} = 0.5$. 2) $(49)^2 \\\\times 0.25 = 600.25$. 3) Round up: $n = 601$.'
      }
    }
  ]
};
