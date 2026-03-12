export const alg1SystemsPart5Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Word Problems

**Part 5 of 7 — Word Problems**

Systems model real situations with two unknowns.

**Strategy:**
1. Define variables
2. Write two equations from the given info
3. Solve by substitution or elimination
4. Check the answer makes sense
      `
    },
    {
      id: 'algebra1-systems-of-equations-p5-worked',
      type: 'text' as const,
      content: `
Two numbers sum to 20 and differ by 6. Find them.

$x + y = 20$, $x - y = 6$. Add: $2x = 26, x = 13, y = 7$.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Adult tickets cost \\$8, child \\$5. 50 tickets sold for \\$310. How many adult tickets?",
            options: ["20","30","25","15"],
            correctAnswer: 0,
            explanation: "$a + c = 50$, $8a + 5c = 310$. $a = 20$."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

1) Sum of two numbers is 15, difference is 3. Larger = ?
2) 3 pens + 2 notebooks = \$11, 1 pen + 2 notebooks = \$7. Pen costs?
3) Perimeter of rectangle = 30, length = 2 × width. Width = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["9","2","5"],
        hint1: "$x+y=15, x-y=3$.",
        hint2: "Subtract equations.",
        hint3: "$2(2w+w)=30$.",
        explanation: "1) $x=9$. 2) Pen = \\$2. 3) $w = 5$."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Word Problems is important because:",
            options: ["It builds on prior concepts","It is tested frequently","Both of these","Neither"]
          },
          {
            label: "The best study strategy is:",
            options: ["Memorize formulas only","Practice problems regularly","Skip to review","Guess on tests"]
          }
        ],
        correctAnswers: ["Both of these","Practice problems regularly"],
        hint1: "Think about why we study this.",
        hint2: "Active practice is key.",
        explanation: "Word Problems builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Word Problems | Core word problems principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in word problems?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
