export const apStatsExpDesignPart6Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP Exam Framework

Experimental design questions often ask you to:
1. **Describe** a completely randomized design
2. **Explain** why blocking is used
3. **Identify** confounding variables
4. **Distinguish** between observational and experimental studies

---

### How to Describe a Design (AP FRQ)

1. State groups and sizes
2. Describe random assignment method
3. Identify treatments
4. State the response variable
5. Mention comparison between groups

### Template Answer

“Randomly assign the 80 subjects to two groups of 40. Group 1 receives Treatment A and Group 2 receives Treatment B. After 6 weeks, compare the mean [response variable] between the two groups.”`
    },    {
      id: 'experimentaldesign-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'When describing a completely randomized design on the AP exam, you must include:',
            options: ['Only the treatments', 'Random assignment, treatments, and response variable', 'Only the sample size', 'Only the hypothesis'],
            correctAnswer: 1,
            explanation: 'A complete description needs random assignment method, specific treatments, and the response variable being measured.'
          },
          {
            question: 'A researcher wants to test 3 brands of sunscreen. With 90 subjects, each group should have:',
            options: ['90 subjects', '30 subjects', '45 subjects', 'It doesn’t matter'],
            correctAnswer: 1,
            explanation: '90 subjects ÷ 3 treatments = 30 per group for a balanced design.'
          },
          {
            question: 'Why should you include a control group?',
            options: ['To increase sample size', 'To provide a baseline for comparison', 'To make the experiment double-blind', 'To reduce blocking'],
            correctAnswer: 1,
            explanation: 'A control group provides a baseline to compare against the treatment’s effect.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p6-input',
      type: 'input-boxes' as const,
      content: `
**Design an Experiment** 🧮

A teacher wants to test whether background music improves quiz scores. She has 40 students.

**1)** How many students per group in a completely randomized design with 2 treatments?

**2)** What is the explanatory variable?

**3)** Should students know whether music is being played for them? (yes/no) Why?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', 'background music', 'no'],
        hint1: '40 ÷ 2',
        hint2: 'What is being varied?',
        hint3: 'Think about placebo effect',
        explanation: '1) 20 per group. 2) Background music (present vs. absent). 3) No — to prevent the placebo effect from influencing results.'
      }
    }
  ]
};
