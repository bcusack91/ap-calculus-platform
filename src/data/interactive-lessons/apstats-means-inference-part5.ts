export const apStatsMeansInfPart5Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p5-intro',
      type: 'text' as const,
      content: `# 🤝 Matched Pairs

**Part 5 of 7 — Paired t-Procedures**

---

### When to Use Paired t

- Same subjects measured twice (before/after)
- Subjects matched in pairs
- Two measurements on the same item

### Procedure

1. Compute **differences** $d = x_1 - x_2$ for each pair
2. Perform a **one-sample t-test** on the differences

$$t = \\\\frac{\\\\bar{d} - 0}{s_d/\\\\sqrt{n}}$$

where $n$ = number of pairs, $\\\\bar{d}$ = mean of differences, $s_d$ = SD of differences.

---

### Example

10 patients’ blood pressure before and after a drug:
$\\\\bar{d} = -8.5$ (mean decrease), $s_d = 6.2$

$$t = \\\\frac{-8.5 - 0}{6.2/\\\\sqrt{10}} = \\\\frac{-8.5}{1.96} = -4.34$$

$df = 9$. Strong evidence that the drug reduces blood pressure.`
    },    {
      id: 'meansinference-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Matched pairs t-test is used when:',
            options: ['Two independent groups are compared', 'The same subjects are measured twice', 'The sample size is small', 'We know $\\\\sigma$'],
            correctAnswer: 1,
            explanation: 'Matched pairs involves paired measurements — usually before/after on the same subjects.'
          },
          {
            question: 'In a matched pairs test, you analyze:',
            options: ['The original measurements', 'The differences within each pair', 'The means of the two groups', 'The pooled data'],
            correctAnswer: 1,
            explanation: 'Compute differences within pairs, then use a one-sample t-test on those differences.'
          },
          {
            question: '$df$ for a matched pairs test with 15 pairs is:',
            options: ['15', '14', '28', '13'],
            correctAnswer: 1,
            explanation: '$df = n - 1 = 15 - 1 = 14$ where $n$ is the number of pairs.'
          }
        ]
      }
    },    {
      id: 'meansinference-p5-input',
      type: 'input-boxes' as const,
      content: `
**Matched Pairs** 🧮

12 students take a test before and after tutoring. Mean difference $\\\\bar{d} = 5.0$ (improvement), $s_d = 3.6$.

**1)** $SE = s_d/\\\\sqrt{n} = ?$ (round to 2 places)

**2)** $t = \\\\bar{d}/SE = ?$ (round to 2 places)

**3)** $df = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.04', '4.81', '11'],
        hint1: '$3.6/\\\\sqrt{12}$',
        hint2: '$5.0/1.04$',
        hint3: '$n - 1 = 12 - 1$',
        explanation: '1) $3.6/3.464 \\\\approx 1.04$. 2) $5.0/1.04 \\\\approx 4.81$. 3) $df = 11$.'
      }
    }
  ]
};
