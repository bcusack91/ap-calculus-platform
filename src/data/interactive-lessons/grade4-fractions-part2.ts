export const g4FractionsPart2Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p2-intro',
      type: 'text' as const,
      content: `
# 📐 Comparing Fractions

**Part 2 of 7 — Comparing Fractions**

To compare fractions with different denominators:

### Method 1: Common Denominator
Find the LCD, convert, compare numerators.

### Method 2: Cross-Multiplication
$\frac{a}{b}$ vs $\frac{c}{d}$: compare $a \times d$ and $b \times c$.
    
    `
    },
    {
      id: 'grade4-fractions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Compare $\frac{3}{5}$ and $\frac{2}{3}$.**

Cross-multiply: $3 \times 3 = 9$ and $5 \times 2 = 10$.

Since $9 < 10$: $\frac{3}{5} < \frac{2}{3}$ ✅
    
    `
    },
    {
      id: 'grade4-fractions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which is greater: $\\\\frac{5}{8}$ or $\\\\frac{3}{4}$?",
                    "options": [
                              "$\\\\frac{3}{4}$",
                              "$\\\\frac{5}{8}$",
                              "They are equal",
                              "Cannot determine"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$\\\\frac{3}{4} = \\\\frac{6}{8}$, and $\\\\frac{6}{8} > \\\\frac{5}{8}$."
          }
]
      }
    },
    {
      id: 'grade4-fractions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Compare Fractions** 🧮

Write >, <, or = :

1) $\frac{3}{4}$ _____ $\frac{2}{3}$

2) $\frac{1}{3}$ _____ $\frac{2}{5}$

3) $\frac{4}{6}$ _____ $\frac{2}{3}$
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: [">","<","="],
        hint1: "Find common denominator 12: 9/12 vs 8/12.",
        hint2: "Common denominator 15: 5/15 vs 6/15.",
        hint3: "Try simplifying 4/6 by dividing both parts by 2.",
        explanation: "1) 9/12 > 8/12, so >. 2) 5/15 < 6/15, so <. 3) 4/6 = 2/3, so =."
      }
    },
    {
      id: 'grade4-fractions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The larger of $\\\\frac{7}{10}$ and $\\\\frac{3}{5}$ is","options":["$\\\\frac{7}{10}$","$\\\\frac{3}{5}$","They are equal","Cannot tell"]},{"label":"To compare fractions with unlike denominators, first find the","options":["Least Common Denominator","Greatest Common Factor","Sum of numerators","Product"]}],
        correctAnswers: ["$\\\\frac{7}{10}$","Least Common Denominator"],
        hint1: "Convert 3/5 to tenths.",
        hint2: "What must the denominators share?",
        explanation: "3/5 = 6/10, and 7/10 > 6/10. Use the LCD to compare."
      }
    },
    {
      id: 'grade4-fractions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Hint |
|---|---------|------|
| 1 | Compare $\frac{1}{3}$ and $\frac{1}{4}$ | Larger denominator = smaller pieces |
| 2 | Order: $\frac{1}{2}, \frac{3}{8}, \frac{5}{8}$ | Convert to eighths |
| 3 | Find a fraction between $\frac{1}{4}$ and $\frac{1}{2}$ | Common denominator |
    
    `
    },
    {
      id: 'grade4-fractions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Using cross-multiplication, $\\\\frac{a}{b} > \\\\frac{c}{d}$ when:",
                    "options": [
                              "$a \\\\times d > b \\\\times c$",
                              "$a \\\\times b > c \\\\times d$",
                              "$a + d > b + c$",
                              "$a > c$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Cross-multiply: if $ad > bc$, then $\\\\frac{a}{b} > \\\\frac{c}{d}$."
          }
]
      }
    }
  ]
};
