export const g4FractionsPart7Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p7-intro',
      type: 'text' as const,
      content: `
# 📐 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts Review
- **Equivalent fractions**: Multiply/divide both parts by same number
- **Comparing**: Common denominator, then compare numerators
- **Adding** (like denom.): Add numerators, keep denominator
- **Mixed numbers**: Convert between mixed and improper
- **Number lines**: Fractions as points between whole numbers
    
    `
    },
    {
      id: 'grade4-fractions-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Simplify $\frac{12}{18}$, then compare to $\frac{1}{2}$.**

GCF(12,18) = 6: $\frac{12}{18} = \frac{2}{3}$

$\frac{2}{3} = \frac{4}{6}$ and $\frac{1}{2} = \frac{3}{6}$ → $\frac{2}{3} > \frac{1}{2}$ ✅
    
    `
    },
    {
      id: 'grade4-fractions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Simplified $\\\\frac{8}{12}$ is:",
                    "options": [
                              "$\\\\frac{2}{3}$",
                              "$\\\\frac{4}{6}$",
                              "$\\\\frac{3}{4}$",
                              "Already simplified"
                    ],
                    "correctAnswer": 0,
                    "explanation": "GCF(8,12)=4. 8÷4=2, 12÷4=3."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) Simplify $\frac{9}{12}$. Numerator?

2) $\frac{3}{5} + \frac{4}{5} = \frac{?}{5}$. Numerator?

3) $\frac{3}{4} \times 4 = $ ? (whole number)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","7","3"],
        hint1: "GCF of 9 and 12?",
        hint2: "Add the numerators.",
        hint3: "(3×4)/4 = 12/4.",
        explanation: "1) GCF=3: 3/4. 2) 3+4=7. 3) 12/4=3."
      }
    },
    {
      id: 'grade4-fractions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$2\\\\frac{1}{4}$ improper is","options":["$\\\\frac{9}{4}$","$\\\\frac{8}{4}$","$\\\\frac{21}{4}$","$\\\\frac{3}{4}$"]},{"label":"To add unlike denominators, first find the","options":["Least Common Denominator","Greatest Common Factor","Sum","Product"]}],
        correctAnswers: ["$\\\\frac{9}{4}$","Least Common Denominator"],
        hint1: "2 × 4 + 1 = ?",
        hint2: "Denominators must match.",
        explanation: "2(4)+1=9. Need LCD to add fractions."
      }
    },
    {
      id: 'grade4-fractions-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Simplify | $\frac{8}{12}$ |
| 2 | Compare | $\frac{5}{6}$ vs $\frac{7}{8}$ |
| 3 | Add | $\frac{3}{10} + \frac{7}{10}$ |
    
    `
    },
    {
      id: 'grade4-fractions-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A student says $\\\\frac{3}{5} > \\\\frac{7}{10}$. Correct?",
                    "options": [
                              "No — $\\\\frac{3}{5} = \\\\frac{6}{10} < \\\\frac{7}{10}$",
                              "Yes — 3 and 5 are closer",
                              "Cannot compare",
                              "Yes — fifths are bigger"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3/5 = 6/10, and 6/10 < 7/10."
          }
]
      }
    }
  ]
};
