export const apStatsNormalDistPart1Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p1-intro',
      type: 'text' as const,
      content: `# 📊 The Normal Distribution

**Part 1 of 7 — Bell Curves and the Empirical Rule**

---

### The Normal Distribution

The **normal distribution** is the most important distribution in statistics. It is:
- **Symmetric** and **bell-shaped**
- Described by two parameters: mean $\mu$ and standard deviation $\sigma$
- Notation: $X \sim N(\mu, \sigma)$

---

### The Empirical Rule (68-95-99.7)

For any normal distribution:

| Range | Percentage |
|-------|-----------|
| $\mu \pm 1\sigma$ | **68%** of data |
| $\mu \pm 2\sigma$ | **95%** of data |
| $\mu \pm 3\sigma$ | **99.7%** of data |

**Example:** IQ scores follow $N(100, 15)$
- 68% of scores between $100 \pm 15 = [85, 115]$
- 95% between $100 \pm 30 = [70, 130]$
- 99.7% between $100 \pm 45 = [55, 145]$

> 🔑 The Empirical Rule gives a quick estimate for normal data. For exact probabilities, use z-scores.`
    },
    {
      id: 'apstats-normaldistribution-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Normal Distribution Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'SAT scores follow $N(1060, 195)$. Approximately what percent score between 865 and 1255?',
            options: ['50%', '68%', '95%', '99.7%'],
            correctAnswer: 1,
            explanation: '$865 = 1060 - 195$ and $1255 = 1060 + 195$. This is $\mu \pm 1\sigma$, so about 68%.'
          },
          {
            question: 'In a normal distribution, the mean, median, and mode are:',
            options: ['All different', 'Mean = median only', 'All equal', 'Depends on $\sigma$'],
            correctAnswer: 2,
            explanation: 'Normal distributions are perfectly symmetric, so the mean, median, and mode all coincide.'
          },
          {
            question: 'About what percentage of data in a normal distribution falls more than 2 standard deviations from the mean?',
            options: ['2.5%', '5%', '10%', '32%'],
            correctAnswer: 1,
            explanation: '95% falls within $\mu \pm 2\sigma$, so $100\% - 95\% = 5\%$ falls outside (both tails combined).'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p1-input',
      type: 'input-boxes' as const,
      content: `
**Empirical Rule Calculations** 🧮

Adult male heights follow $N(70, 3)$ inches.

**1)** What percentage of men are between 67 and 73 inches tall?

**2)** What percentage are shorter than 64 inches? (Hint: 64 = 70 − 2(3))

**3)** Between what two heights do the middle 99.7% of men fall? Give the upper bound.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['68', '2.5', '79'],
        hint1: '$67 = 70-3$ and $73 = 70+3$, so $\mu \pm 1\sigma$ → 68%.',
        hint2: '64 is 2 SDs below mean. About 2.5% are below $\mu - 2\sigma$.',
        hint3: '$70 + 3(3) = 79$ inches.',
        explanation: '1) 68%. 2) 2.5% (half of the 5% outside $\mu \pm 2\sigma$). 3) 79 inches ($\mu + 3\sigma$).'
      }
    }
  ]
};
