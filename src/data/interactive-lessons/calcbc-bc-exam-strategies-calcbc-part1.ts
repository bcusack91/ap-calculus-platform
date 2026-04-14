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
| I-A (MC) | 30 questions | 60 min | **No** | 33.3% |
| I-B (MC) | 15 questions | 45 min | **Yes** | 16.7% |
| II-A (FRQ) | 2 questions | 30 min | **Yes** | 16.7% |
| II-B (FRQ) | 4 questions | 60 min | **No** | 33.3% |

**Total: 45 MC + 6 FRQ, 3 hours 15 minutes**

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
- Each FRQ is worth 9 points
- Partial credit is available on every part
- Points are earned for:
  - Correct setup (even without the final answer)
  - Proper notation (e.g., $\\frac{d}{dx}$, $\\int_a^b$)
  - Justification and reasoning

### BC-Specific FRQ Topics

The BC exam **always** includes FRQs on:
1. **Series** — Taylor/Maclaurin, interval of convergence, error bounds
2. **Parametric/polar/vector** — motion, area, arc length

These are **guaranteed BC-only** FRQ topics. Prepare them thoroughly.`
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
            options: ['Guess — there is no penalty for wrong answers', 'Leave it blank', 'Mark C always', 'Skip and come back only if time permits'],
            correctAnswer: 0,
            explanation: 'There is no penalty for wrong answers. Always guess if you cannot eliminate options.'
          },
          {
            question: 'The AB subscore is important because:',
            options: ['Some colleges accept the AB subscore for credit even if the overall BC score is lower', 'It determines your grade in the class', 'It is reported separately on your transcript', 'It affects scholarship eligibility directly'],
            correctAnswer: 0,
            explanation: 'Some colleges award AB credit based on the AB subscore, even if the overall BC score doesn\'t qualify for BC credit.'
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
            options: ['Taylor/Maclaurin series', 'Related rates', 'Optimization', 'Volumes of revolution'],
            correctAnswers: ['Taylor/Maclaurin series'],
            hints: ['This BC-only topic appears nearly every year.'],
            explanation: 'A Taylor/Maclaurin series FRQ appears on almost every BC exam. It typically includes finding terms, determining convergence, and bounding error.'
          },
          {
            label: 'The BC exam calculator sections allow you to:',
            options: ['Graph, solve numerically, evaluate integrals, find derivatives at points', 'Only graph functions', 'Use a CAS (Computer Algebra System)', 'Access the internet for formulas'],
            correctAnswers: ['Graph, solve numerically, evaluate integrals, find derivatives at points'],
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
        question: 'If a student earns 32/45 on MC and 40/54 on FRQ, what is the approximate composite percentage? (Round to the nearest whole number.)',
        correctAnswer: '73',
        acceptableAnswers: ['73', '73%'],
        hints: ['MC is 50% of composite, FRQ is 50%. Weight each score accordingly.'],
        explanation: 'MC: 32/45 = 71.1%. FRQ: 40/54 = 74.1%. Average: (71.1 + 74.1)/2 ≈ 72.6% ≈ 73%. (In reality, College Board uses a more complex curve.)'
      }
    },
    {
      id: 'es1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- The BC exam is 3 hours 15 minutes: 45 MC + 6 FRQ
- **Always guess** on MC — no penalty for wrong answers
- Series and parametric/polar FRQs appear nearly every year
- The AB subscore covers ~60% of the exam content
- Calculator is allowed on Section I-B and Section II-A only

**Next: Part 2 — Multiple-Choice Strategies**`
    }
  ]
};
