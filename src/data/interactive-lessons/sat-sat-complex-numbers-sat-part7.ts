export const satComplexPart7Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx7-cheatsheet',
      type: 'text' as const,
      content: `
# 📋 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed Problems, Strategies**

## Complex Numbers Cheat Sheet

| Concept | Formula / Rule |
|---------|---------------|
| Imaginary unit | $i = \\sqrt{-1},\\; i^2 = -1$ |
| Powers of $i$ | Cycle: $i, -1, -i, 1$ (period 4) |
| Addition | $(a+bi)+(c+di)=(a+c)+(b+d)i$ |
| Subtraction | $(a+bi)-(c+di)=(a-c)+(b-d)i$ |
| Multiplication | $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ |
| Conjugate of $a+bi$ | $a-bi$ |
| Conjugate product | $(a+bi)(a-bi)=a^2+b^2$ |
| Division | Multiply by $\\frac{\\overline{\\text{denom}}}{\\overline{\\text{denom}}}$ |
| Discriminant | $\\Delta = b^2-4ac$ |
| Complex solutions | When $\\Delta<0$: $x=\\frac{-b\\pm i\\sqrt{|\\Delta|}}{2a}$ |
      `
    },
    {
      id: 'sat-cx7-strategy',
      type: 'text' as const,
      content: `
## SAT Test-Day Strategies

**1. Time management:** Complex number problems are usually quick (30–60 sec). Don't skip them!

**2. Powers of $i$:** Always divide the exponent by 4 and use the remainder. This takes 5 seconds.

**3. Multiplication:** FOIL and replace $i^2 = -1$. Double-check the sign on the last term.

**4. Division:** Multiply top and bottom by the conjugate. The denominator becomes $a^2+b^2$.

**5. "Which is equivalent to…":** These problems usually test multiplication or division. Just compute carefully.

**6. Discriminant questions:** If they ask about "non-real" or "no real" solutions, compute $b^2-4ac$ and check if it's negative.

**7. Verify with conjugate pairs:** If one complex solution is $a+bi$, the other is $a-bi$. You can check by adding them ($=2a$) or multiplying them ($=a^2+b^2$).
      `
    },
    {
      id: 'sat-cx7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $i^{99} - i^{97}$?',
            options: ['$0$', '$2i$', '$-2i$', '$2$'],
            correctAnswer: 2,
            explanation: '$99 \\div 4$: rem $3 \\Rightarrow i^{99}=-i$. $97 \\div 4$: rem $1 \\Rightarrow i^{97}=i$. So $-i - i = -2i$.'
          },
          {
            question: 'What is $(4-i)(4+i)-(3+2i)(3-2i)$?',
            options: ['$0$', '$4$', '$30$', '$-4$'],
            correctAnswer: 1,
            explanation: '$(4-i)(4+i)=16+1=17$. $(3+2i)(3-2i)=9+4=13$. Difference: $17-13=4$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed computations.** 🧮

1) $(3+i)(1-2i) + (2+3i) = $

2) The discriminant of $x^2 + 4x + 8 = 0$ is $\\Delta = $

3) $\\frac{(2+i)^2}{i} = $ (Write in $a+bi$ form)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7 - 2i', '-16', '4 - 3i'],
        hint1: '$(3+i)(1-2i) = 3-6i+i-2i^2 = 3-5i+2 = 5-5i$. Then $5-5i+2+3i = 7-2i$.',
        hint2: '$\\Delta = 16 - 32 = -16$.',
        hint3: '$(2+i)^2 = 4+4i+i^2 = 3+4i$. Then $\\frac{3+4i}{i} \\cdot \\frac{-i}{-i} = \\frac{-3i-4i^2}{-i^2} = \\frac{4-3i}{1}=4-3i$.',
        explanation: '$(3+i)(1-2i)+(2+3i)=7-2i$. $\\Delta=16-32=-16$. $\\frac{(2+i)^2}{i}=4-3i$.'
      }
    },
    {
      id: 'sat-cx7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final review — true or false?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The sum of a complex number and its conjugate is always real.',
            options: ['True', 'False']
          },
          {
            label: 'The product of a complex number and its conjugate can be negative.',
            options: ['True', 'False']
          },
          {
            label: '$i^{4n} = 1$ for every positive integer $n$.',
            options: ['True', 'False']
          }
        ],
        correctAnswers: ['True', 'False', 'True'],
        hint1: '$(a+bi)+(a-bi)=2a$, which is real.',
        hint2: '$(a+bi)(a-bi)=a^2+b^2 \\geq 0$. A sum of squares is never negative.',
        hint3: '$i^{4n} = (i^4)^n = 1^n = 1$.',
        explanation: 'Sum = $2a$ (real). Product = $a^2+b^2 \\geq 0$ (never negative). $i^{4n}=1$.'
      }
    },
    {
      id: 'sat-cx7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^2 - 2x + 5 = 0$, what is the product of the two solutions?',
            options: ['$5$', '$-5$', '$2$', '$-2$'],
            correctAnswer: 0,
            explanation: 'By Vieta\'s formulas, the product of the roots of $ax^2+bx+c=0$ is $\\frac{c}{a}=\\frac{5}{1}=5$. (You can verify: the solutions are $1 \\pm 2i$, and $(1+2i)(1-2i)=1+4=5$.)'
          },
          {
            question: 'Which value of $k$ makes $x^2-6x+k=0$ have complex (non-real) solutions?',
            options: ['$k = 8$', '$k = 9$', '$k = 10$', '$k = 0$'],
            correctAnswer: 2,
            explanation: 'Need $\\Delta < 0$: $36 - 4k < 0 \\Rightarrow k > 9$. Only $k=10 > 9$ satisfies this.'
          }
        ]
      }
    },
    {
      id: 'sat-cx7-final',
      type: 'text' as const,
      content: `
## 🎉 You've Completed SAT Complex Numbers!

**What you've mastered:**

✅ The imaginary unit $i$ and its power cycle

✅ Adding, subtracting, multiplying complex numbers

✅ Complex conjugates and division

✅ Solving equations with complex solutions

✅ SAT-specific patterns and traps

**Key takeaways for test day:**

- Powers of $i$: divide exponent by 4, use remainder
- Multiply: FOIL + replace $i^2 = -1$
- Divide: multiply by the conjugate
- Complex solutions: discriminant $< 0$
- Solutions come in conjugate pairs

Keep practicing — complex numbers are some of the easiest points on the SAT once you know the rules!
      `
    }
  ]
}
