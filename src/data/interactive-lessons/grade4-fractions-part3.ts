export const g4FractionsPart3Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p3-intro',
      type: 'text' as const,
      content: `
# 📐 Adding Fractions (Like Denominators)

**Part 3 of 7 — Adding Like Denominators**

When fractions share a denominator, add the numerators and keep the denominator:

$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$

Always simplify the result!
    
    `
    },
    {
      id: 'grade4-fractions-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

$\\frac{3}{8} + \\frac{4}{8} = \\frac{7}{8}$ ✅

$\\frac{5}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$ ✅
    
    `
    },
    {
      id: 'grade4-fractions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "What is $\\\\frac{2}{7} + \\\\frac{3}{7}$?",
                    "options": [
                              "$\\\\frac{5}{7}$",
                              "$\\\\frac{5}{14}$",
                              "$\\\\frac{6}{7}$",
                              "$\\\\frac{2}{3}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Same denominator: $\\\\frac{2+3}{7} = \\\\frac{5}{7}$."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Adding Practice** 🧮

1) $\\frac{2}{8} + \\frac{3}{8} = \\frac{?}{8}$ — Numerator?

2) $\\frac{3}{10} + \\frac{4}{10} = \\frac{?}{10}$ — Numerator?

3) $\\frac{5}{6} + \\frac{1}{6} = $ ? (simplify to a whole number)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","7","1"],
        hint1: "Add the numerators: 2 + 3.",
        hint2: "Add the numerators: 3 + 4.",
        hint3: "(5+1)/6 = 6/6. What does that equal?",
        explanation: "1) 2+3=5. 2) 3+4=7. 3) 6/6 = 1."
      }
    },
    {
      id: 'grade4-fractions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$\\\\frac{4}{9} + \\\\frac{2}{9}$ equals","options":["$\\\\frac{6}{9}$","$\\\\frac{6}{18}$","$\\\\frac{8}{9}$","$\\\\frac{4}{18}$"]},{"label":"$\\\\frac{6}{9}$ simplifies to","options":["$\\\\frac{2}{3}$","$\\\\frac{3}{4}$","$\\\\frac{1}{3}$","Cannot simplify"]}],
        correctAnswers: ["$\\\\frac{6}{9}$","$\\\\frac{2}{3}$"],
        hint1: "Add numerators, keep denominator.",
        hint2: "GCF of 6 and 9 is 3. Divide both.",
        explanation: "(4+2)/9 = 6/9. GCF = 3: 6/9 = 2/3."
      }
    },
    {
      id: 'grade4-fractions-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Key Idea |
|---|---------|----------|
| 1 | $\\frac{1}{5} + \\frac{2}{5}$ | Keep denominator |
| 2 | $\\frac{3}{10} + \\frac{7}{10}$ | Simplify result |
| 3 | $\\frac{2}{9} + \\frac{4}{9}$ | Check for simplification |
    
    `
    },
    {
      id: 'grade4-fractions-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "When adding fractions with the same denominator, you should:",
                    "options": [
                              "Keep the denominator the same",
                              "Add the denominators",
                              "Multiply the denominators",
                              "Find the LCM"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Like denominators: keep the denominator, add only the numerators."
          }
]
      }
    }
  ]
};
