export const calcbcLogisticPart4Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log4-intro',
      type: 'text' as const,
      content: `# Logistic Models in Context

**Part 4 of 7 — AP Word Problems and Applications**

### AP Exam Context Problems

The AP exam presents logistic growth in real-world contexts:

| Context | $P$ represents | $L$ represents |
|---------|---------------|---------------|
| Population biology | Number of organisms | Environment capacity |
| Disease spread | Number infected | Total susceptible population |
| Technology adoption | Number of users | Market size |
| Rumors | People who heard | Total community |

### Reading a Logistic FRQ

**Typical structure:**
- "A population of fish in a lake grows at a rate modeled by $dP/dt = 0.4P(1 - P/5000)$."
- Part (a): Find the carrying capacity.
- Part (b): Find the population when growth is fastest.
- Part (c): Find the particular solution given $P(0) = 200$.
- Part (d): When does the population reach 4000?

### Example: Complete FRQ

$dP/dt = 0.1P(1 - P/2000)$, $P(0) = 100$.

**(a)** $L = 2000$

**(b)** Growth fastest at $P = L/2 = 1000$; rate $= kL/4 = 0.1(2000)/4 = 50$

**(c)** $A = (2000 - 100)/100 = 19$. $P(t) = \\frac{2000}{1 + 19e^{-0.1t}}$

**(d)** $4000/(1 + 19e^{-0.1t}) = 4000$... wait, that's above $L$. If $P_{\\text{target}} = 1500$:
$$1 + 19e^{-0.1t} = 2000/1500 = 4/3 \\quad \\Rightarrow \\quad e^{-0.1t} = 1/57 \\quad \\Rightarrow \\quad t = \\frac{\\ln 57}{0.1} \\approx 40.4$$

> **AP Tip:** Always check units and whether the target population is below $L$. A logistic model never exceeds $L$ (when starting below it).`
    },
    {
      id: 'log4-euler',
      type: 'text' as const,
      content: `### Euler's Method with Logistic Equations

AP exams sometimes combine Euler's method with logistic growth.

**Example:** $dP/dt = 0.5P(1 - P/100)$, $P(0) = 20$, $\\Delta t = 1$.

| $t$ | $P$ | $f = 0.5P(1-P/100)$ | $\\Delta P$ | $P_{\\text{next}}$ |
|-----|-----|---------------------|-----------|-------------------|
| 0 | 20 | $0.5(20)(0.8) = 8$ | 8 | 28 |
| 1 | 28 | $0.5(28)(0.72) = 10.08$ | 10.08 | 38.08 |
| 2 | 38.08 | $0.5(38.08)(0.6192) = 11.79$ | 11.79 | 49.87 |

$$\\boxed{P(3) \\approx 49.87}$$

Notice: $\\Delta P$ increases until $P$ passes $L/2 = 50$, then decreases.`
    },
    {
      id: 'log4-mc1',
      type: 'multiple-choice' as const,
      content: '**Contextual Problems**',
      exercise: {
        questions: [
          {
            question: 'A rumor spreads through a school of 800 students at rate $dN/dt = 0.02N(800 - N)$. In standard form, $k =$',
            options: ['$k = 16$ (rewrite as $16N(1 - N/800)$)', '$k = 0.02$', '$k = 800$', '$k = 0.02 \\cdot 800 = 16$'],
            correctAnswer: 0,
            explanation: '$0.02N(800 - N) = 0.02 \\cdot 800 \\cdot N(1 - N/800) = 16N(1 - N/800)$. $k = 16$.'
          },
          {
            question: 'In the rumor problem, when is the rumor spreading fastest?',
            options: ['When 400 students know it ($N = L/2$)', 'When 800 students know it', 'At $t = 0$', 'When 200 students know it'],
            correctAnswer: 0,
            explanation: 'Max spread rate at $N = L/2 = 400$.'
          },
          {
            question: 'A logistic model has $P(0) = 50$ and $L = 1000$. As $t \\to \\infty$:',
            options: ['$P \\to 1000$ and $dP/dt \\to 0$', '$P \\to \\infty$', '$P$ oscillates around 1000', '$P \\to 50$'],
            correctAnswer: 0,
            explanation: '$P \\to L = 1000$ and the growth rate approaches 0 as $P$ nears carrying capacity.'
          }
        ]
      }
    },
    {
      id: 'log4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Word Problem Setup**\n\nA population of bacteria grows logistically. At $t = 0$, there are 1000 bacteria. The carrying capacity is 10000, and the initial growth rate is $dP/dt = 450$.',
      exercise: {
        dropdowns: [
          {
            label: 'From $dP/dt = kP(1-P/L)$ at $t=0$: $450 = k(1000)(1 - 1000/10000)$. $k =$',
            options: ['$k = 0.5$', '$k = 0.45$', '$k = 450$', '$k = 4.5$'],
            correctAnswers: ['$k = 0.5$'],
            hints: ['$450 = k(1000)(0.9)$. $k = 450/900$.'],
            explanation: '$450 = 900k$, so $k = 0.5$.'
          },
          {
            label: 'The maximum growth rate for this population is:',
            options: ['$kL/4 = 0.5(10000)/4 = 1250$ bacteria/time', '$450$', '$kL = 5000$', '$10000/4 = 2500$'],
            correctAnswers: ['$kL/4 = 0.5(10000)/4 = 1250$ bacteria/time'],
            hints: ['Max rate $= kL/4$.'],
            explanation: 'Max rate $= 0.5(10000)/4 = 1250$, occurring when $P = 5000$.'
          }
        ]
      }
    },
    {
      id: 'log4-input',
      type: 'input-box' as const,
      content: '**Solve for Time**',
      exercise: {
        question: '$P(t) = 500/(1 + 4e^{-t})$. When does $P = 400$? Enter the exact expression using ln (e.g., "ln(16)").',
        correctAnswer: 'ln(16)',
        acceptableAnswers: ['ln(16)', 'ln16', '4ln(2)', '4ln2', '\\ln(16)', '\\ln 16'],
        hints: ['$400 = 500/(1+4e^{-t})$ → $1+4e^{-t} = 5/4$ → $e^{-t} = 1/16$ → $t = \\ln(16)$.'],
        explanation: '$1 + 4e^{-t} = 500/400 = 5/4$. $4e^{-t} = 1/4$. $e^{-t} = 1/16$. $t = \\ln(16) = 4\\ln 2 \\approx 2.77$.'
      }
    },
    {
      id: 'log4-summary',
      type: 'text' as const,
      content: `### Summary

- Logistic models appear in population, disease, technology contexts
- Convert non-standard forms to identify $k$ and $L$
- FRQs: find $L$, max rate, solve for particular solutions and specific times
- Can combine with Euler's method

> **Next:** Part 5 — AP Exam Strategies.`
    }
  ]
};
