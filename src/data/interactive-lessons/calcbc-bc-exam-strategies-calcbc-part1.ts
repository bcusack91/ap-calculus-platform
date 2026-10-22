export const calcbcExamStrategyPart1Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es1-intro',
      type: 'text' as const,
      content: `# Understanding the AP Calculus BC Exam

**Part 1 of 7 — Exam Format, Scoring, and the AB Subscore**

### Exam Structure

| Section | Questions | Time | Calculator | Weight |
|---------|-----------|------|------------|--------|
| I-A (MC) | 29 questions | 62 min | **No** | Section I (both MC parts): 50% |
| I-B (MC) | 13 questions | 38 min | **Yes (graphing)** | (counted in Section I) |
| II-A (FRQ) | 2 questions | 30 min | **Yes (graphing)** | Section II (all 6 FRQs): 50% |
| II-B (FRQ) | 4 questions | 60 min | **No** | (counted in Section II) |

**Total: 42 MC + 6 FRQ, 3 hours 10 minutes** (MC: 100 min; FRQ: 90 min)

### The AB Subscore

The BC exam also generates an **AB subscore** from a subset of questions. This subscore covers AB-level topics:
- Limits, derivatives, and integrals
- Applications (related rates, optimization, volumes)
- FTC and accumulation functions
- Basic differential equations

> **Key Fact:** About 60% of the BC exam covers AB topics. A strong AB foundation is essential for BC success.`
    },
    {
      id: 'es1-scoring',
      type: 'text' as const,
      content: `### Scoring Breakdown

**Multiple Choice:**
- 1 point per correct answer
- No deduction for wrong answers — **always guess!**

**Free Response:**
- Each FRQ is worth 9 points (54 points in Section II)
- Partial credit is available on every part
- Points are earned for:
  - Correct setups, such as an integral with the right integrand and limits
  - Justification and reasoning
  - Correct answers (decimal answers must be accurate to three places after the decimal point)

### BC-Specific FRQ Topics

Expect BC-only free-response questions on:
1. **Series** — Taylor/Maclaurin, interval of convergence, error bounds
2. **Parametric/polar/vector** — motion, polar area, parametric arc length

Units 9 and 10 together carry about 30% of the BC exam weighting (CED). Prepare them thoroughly.`
    },
    {
      id: 'es1-mc',
      type: 'multiple-choice' as const,
      content: '**Format Check**',
      exercise: {
        questions: [
          {
            question: 'On the AP BC exam, how many FRQs are there total?',
            options: ['6', '4', '8', '5'],
            correctAnswer: 0,
            explanation: 'There are 6 FRQs: 2 with calculator (Section II-A) and 4 without (Section II-B).'
          },
          {
            question: 'If you do not know the answer to a multiple-choice question, you should:',
            options: ['Guess — wrong answers carry no penalty', 'Leave it blank — a wrong answer loses a quarter point', 'Pick the longest option — it is most often correct', 'Skip it, and leave it blank if no time is left over'],
            correctAnswer: 0,
            explanation: 'There is no penalty for wrong answers, so a blank earns nothing while a guess might earn a point. Eliminate what you can, then guess; never leave an MC answer blank.'
          },
          {
            question: 'The AB subscore is important because:',
            options: ['Some colleges grant AB credit from it even when the BC score is too low', 'It replaces a lower BC score on your score report', 'It is printed on your high school transcript', 'It decides whether you earn AP Scholar awards'],
            correctAnswer: 0,
            explanation: 'Some colleges award AB credit based on the AB subscore, even if the overall BC score doesn\'t qualify for BC credit. It does not replace the BC score, it is not a transcript grade, and AP Scholar awards are based on exam scores, not subscores.'
          }
        ]
      }
    },
    {
      id: 'es1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Topic Frequency on BC Exam**',
      exercise: {
        dropdowns: [
          {
            label: 'The topic MOST likely to appear as a full FRQ on the BC exam:',
            options: ['Taylor series', 'Related rates of change', 'Optimization problems', 'Volumes of revolution'],
            correctAnswers: ['Taylor series'],
            hints: ['This BC-only topic appears nearly every year.'],
            explanation: 'A Taylor/Maclaurin series FRQ is a regular feature of the BC exam. It typically includes finding terms, determining convergence, and bounding error. The other three are AB topics that BC shares.'
          },
          {
            label: 'The BC exam calculator sections allow you to:',
            options: ['Graph, solve, and find integrals and derivatives numerically', 'Graph functions only — numerical integration is not allowed', 'Do arithmetic only — graphing features must stay off', 'Access the internet to look up formulas'],
            correctAnswers: ['Graph, solve, and find integrals and derivatives numerically'],
            hints: ['Four calculator capabilities are expected by the AP exam.'],
            explanation: 'The AP exam expects four calculator uses: graphing, numerical solving, numerical differentiation, and numerical integration.'
          }
        ]
      }
    },
    {
      id: 'es1-input',
      type: 'input-box' as const,
      content: '**Quick Math**',
      exercise: {
        question: 'If a student earns 30/42 on MC and 40/54 on FRQ, what is the approximate composite percentage? (Round to the nearest whole number.)',
        correctAnswer: '73',
        acceptableAnswers: ['73', '73%'],
        hints: ['MC is 50% of composite, FRQ is 50%. Weight each score accordingly.'],
        explanation: 'MC: 30/42 = 71.4%. FRQ: 40/54 = 74.1%. Average: (71.4 + 74.1)/2 ≈ 72.7% ≈ 73%. (In reality, College Board uses a more complex curve.)'
      }
    },
    {
      id: 'es1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- The BC exam is 3 hours 10 minutes: 42 MC + 6 FRQ
- **Always guess** on MC — no penalty for wrong answers
- Series and parametric/polar FRQs appear nearly every year
- The AB subscore covers ~60% of the exam content
- Calculator is allowed on Section I-B and Section II-A only

**Next: Part 2 — Multiple-Choice Strategies**`
    }
  ]
};
