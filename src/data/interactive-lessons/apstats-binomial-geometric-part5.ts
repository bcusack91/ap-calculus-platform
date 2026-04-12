export const apStatsBinomGeomPart5Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p5-intro',
      type: 'text' as const,
      content: `# 🔄 Binomial vs Geometric

**Part 5 of 7 — Choosing the Right Model**

---

### Side-by-Side Comparison

| Feature | Binomial | Geometric |
|---------|----------|-----------|
| **Counts** | Successes in $n$ trials | Trials until 1st success |
| **Fixed** | Number of trials $n$ | Probability $p$ |
| **$n$** | Specified | Not fixed |
| **Values** | $0, 1, 2, \\\\ldots, n$ | $1, 2, 3, \\\\ldots$ |
| **Mean** | $np$ | $1/p$ |
| **Formula** | $\\\\binom{n}{k}p^k(1-p)^{n-k}$ | $(1-p)^{k-1}p$ |

---

### Decision Flowchart

1. Are there binary outcomes with constant $p$? → If no, neither
2. Is $n$ fixed? → **Yes**: Binomial. **No**: continue
3. Counting trials until first success? → **Yes**: Geometric`
    },    {
      id: 'binomialgeometric-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A student guesses on 20 multiple-choice questions ($p = 0.25$). The number correct is:',
            options: ['Binomial', 'Geometric', 'Normal', 'Neither'],
            correctAnswer: 0,
            explanation: 'Fixed $n = 20$, binary (correct/incorrect), same $p$ → Binomial.'
          },
          {
            question: 'A student guesses until getting one right. The number of attempts is:',
            options: ['Binomial', 'Geometric', 'Poisson', 'Neither'],
            correctAnswer: 1,
            explanation: 'Counting trials until first success with no fixed $n$ → Geometric.'
          },
          {
            question: 'A survey asks 1000 people yes/no. The number saying “yes” is:',
            options: ['Geometric', 'Binomial', 'Uniform', 'Continuous'],
            correctAnswer: 1,
            explanation: 'Fixed $n = 1000$, binary outcomes, same $p$ each → Binomial.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p5-input',
      type: 'input-boxes' as const,
      content: `
**Model Identification** 🧮

**1)** Flipping a coin until heads: Binomial or Geometric?

**2)** Number of heads in 50 flips: Binomial or Geometric?

**3)** For scenario 2: $E(X) = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['geometric', 'binomial', '25'],
        hint1: 'No fixed $n$, waiting for first success',
        hint2: 'Fixed $n = 50$, counting successes',
        hint3: '$np = 50(0.5)$',
        explanation: '1) Geometric — waiting for first success. 2) Binomial — fixed trials, counting successes. 3) $50(0.5) = 25$.'
      }
    }
  ]
};
