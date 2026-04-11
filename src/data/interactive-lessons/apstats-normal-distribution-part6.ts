export const apStatsNormalDistPart6Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Normal Distribution Workshop

**Part 6 of 7 — Comprehensive Practice**

---

### Strategy for Normal Distribution Problems

1. **Identify** $\mu$ and $\sigma$ from the problem
2. **Sketch** the curve and shade the desired region
3. **Standardize** using $z = (x - \mu)/\sigma$
4. **Use the table** or calculator to find probabilities
5. **For percentiles:** work backward from probability to z to x

---

### Worked Example

**Problem:** A machine fills cereal boxes with $\mu = 368$ g and $\sigma = 4$ g. What proportion of boxes have less than 360 g?

**Solution:**
1. $z = (360 - 368)/4 = -8/4 = -2$
2. $P(Z \leq -2) = 0.0228$
3. About $2.28\%$ of boxes are underfilled.

**Follow-up:** What weight is exceeded by 90% of boxes?
1. "Exceeded by 90%" means 10th percentile (10% are below)
2. $z = -1.28$ (from table)
3. $x = 368 + (-1.28)(4) = 368 - 5.12 = 362.88$ g`
    },
    {
      id: 'apstats-normaldistribution-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Battery life $\sim N(500, 40)$ hours. What proportion lasts between 460 and 540 hours?',
            options: ['50%', '68%', '95%', '99.7%'],
            correctAnswer: 1,
            explanation: '$460 = 500 - 40$ and $540 = 500 + 40$. This is $\mu \pm 1\sigma \approx 68\%$.'
          },
          {
            question: 'The 95th percentile of $N(0,1)$ is approximately:',
            options: ['$1.28$', '$1.645$', '$1.96$', '$2.33$'],
            correctAnswer: 1,
            explanation: '$P(Z \leq 1.645) \approx 0.95$. This is a commonly used value in statistics.'
          }
        ]
      }
    }
  ]
};
