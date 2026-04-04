export const g4FractionsPart1Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Equivalent Fractions

**Part 1 of 7 — Equivalent Fractions**

Two fractions are **equivalent** if they represent the same value.

Create equivalent fractions by **multiplying or dividing** both the numerator and denominator by the same non-zero number.

### Examples
- $\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \frac{4}{8}$
- $\frac{2}{3} = \frac{4}{6} = \frac{6}{9}$
- $\frac{6}{8} = \frac{3}{4}$ (divided both by 2)
    
    `
    },
    {
      id: 'grade4-fractions-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Find the missing numerator:** $\frac{3}{5} = \frac{?}{15}$

**Step 1:** Denominators: $5 \to 15$, multiplied by $3$.

**Step 2:** Multiply numerator by same: $3 \times 3 = 9$.

**Answer:** $\frac{3}{5} = \frac{9}{15}$ ✅
    
    `
    },
    {
      id: 'grade4-fractions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which fraction is equivalent to $\\\\frac{2}{3}$?",
                    "options": [
                              "$\\\\frac{4}{6}$",
                              "$\\\\frac{3}{4}$",
                              "$\\\\frac{4}{9}$",
                              "$\\\\frac{2}{6}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\frac{2}{3} = \\\\frac{2 \\\\times 2}{3 \\\\times 2} = \\\\frac{4}{6}$."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Equivalent Fractions Practice** 🧮

1) $\frac{1}{2} = \frac{?}{8}$ — What goes in the numerator?

2) $\frac{2}{3} = \frac{?}{9}$ — What goes in the numerator?

3) Simplify $\frac{9}{12}$. What is the numerator of the simplified fraction?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","6","3"],
        hint1: "The denominator went from 2 to 8. What did you multiply by? Do the same to the numerator.",
        hint2: "The denominator went from 3 to 9. What factor was used?",
        hint3: "Find the greatest common factor of 9 and 12, then divide both by it.",
        explanation: "1) 2→8 means ×4, so 1×4=4. 2) 3→9 means ×3, so 2×3=6. 3) GCF(9,12)=3. 9÷3=3, 12÷3=4, so 3/4."
      }
    },
    {
      id: 'grade4-fractions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"$\\\\frac{3}{4}$ is equivalent to","options":["$\\\\frac{6}{8}$","$\\\\frac{6}{12}$","$\\\\frac{9}{16}$","$\\\\frac{4}{5}$"]},{"label":"To simplify a fraction, you divide by the","options":["Greatest Common Factor","Least Common Multiple","Denominator","Numerator"]}],
        correctAnswers: ["$\\\\frac{6}{8}$","Greatest Common Factor"],
        hint1: "Multiply both parts of 3/4 by the same number.",
        hint2: "Simplifying means making the numbers smaller.",
        explanation: "3/4 = 6/8 (multiply by 2). Simplify by dividing by the GCF."
      }
    },
    {
      id: 'grade4-fractions-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | Find equivalent fractions for $\frac{2}{5}$ | Multiply top and bottom by 2, 3, or 4 |
| 2 | Simplify $\frac{12}{16}$ | Divide by GCF |
| 3 | Is $\frac{3}{4} = \frac{9}{12}$? | Cross-multiply to check |
    
    `
    },
    {
      id: 'grade4-fractions-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which method tests whether two fractions are equivalent?",
                    "options": [
                              "Add the numerators",
                              "Cross-multiply and compare",
                              "Subtract the denominators",
                              "Multiply the numerators only"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Cross-multiplication: $\\\\frac{a}{b} = \\\\frac{c}{d}$ if and only if $a \\\\times d = b \\\\times c$."
          }
]
      }
    }
  ]
};
