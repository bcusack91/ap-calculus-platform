export const satTestDayPart4Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-test-p4-intro',
      type: 'text' as const,
      content: `
# 🧠 Stress Management

**Part 4 of 7 — Stress Management**

Breathing techniques, positive self-talk, dealing with anxiety

This section builds on the foundations from previous parts. Understanding these concepts is essential for SAT success.

**Key Concepts in This Section:**
- Core principles and definitions
- Step-by-step problem-solving methods
- Common SAT question patterns
- Strategic tips for test day
      `
    },
    {
      id: 'sat-test-p4-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the concepts in this section, which approach is most effective?',
            options: [
              'Memorize formulas without understanding when to apply them',
              'Understand the underlying concepts and practice with varied problems',
              'Only practice problems you find easy to build confidence',
              'Skip practice and rely on intuition during the test'
            ],
            correctAnswer: 1,
            explanation: 'Understanding concepts deeply and practicing with varied problems leads to the strongest SAT performance. Memorization alone fails when problems are presented in unfamiliar contexts.'
          }
        ]
      }
    },
    {
      id: 'sat-test-p4-detail',
      type: 'text' as const,
      content: `
**Detailed Concepts & Examples**

This topic requires careful attention to detail. On the SAT, questions in this area test your ability to:

1. **Identify** the type of problem quickly
2. **Apply** the correct method systematically
3. **Verify** your answer makes sense in context

Work through each example carefully before attempting the practice problems below.
      `
    },
    {
      id: 'sat-test-p4-practice',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'When approaching an unfamiliar problem on the SAT, what is the best first step?',
            options: [
              'Guess and move on quickly',
              'Identify what the question is actually asking for',
              'Try every formula you know until one works',
              'Skip it permanently'
            ],
            correctAnswer: 1,
            explanation: 'Always start by identifying what the question asks. Many SAT mistakes come from solving for the wrong variable or misreading what\'s being requested.'
          }
        ]
      }
    }
  ]
}
