export const satComplexPart2Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx2-intro',
      type: 'text' as const,
      content: `
# ➕ Adding & Subtracting Complex Numbers

**Part 2 of 7 — Combine Real with Real, Imaginary with Imaginary**

Complex numbers have the form $a + bi$. When adding or subtracting, treat $i$ like a variable — combine **like terms**.

$$
(a + bi) + (c + di) = (a + c) + (b + d)i
$$

$$
(a + bi) - (c + di) = (a - c) + (b - d)i
$$

| Operation | Example | Result |
|-----------|---------|--------|
| Addition | $(3 + 2i) + (5 + 4i)$ | $8 + 6i$ |
| Subtraction | $(7 + 3i) - (2 + 5i)$ | $5 - 2i$ |
| Mixed | $(4 - i) + (-1 + 6i)$ | $3 + 5i$ |
      `
    },
    {
      id: 'sat-cx2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** $(6 + 3i) + (-2 + 7i)$

1. Real parts: $6 + (-2) = 4$
2. Imaginary parts: $3i + 7i = 10i$
3. **Result:** $4 + 10i$

**Example 2:** $(9 - 4i) - (3 - 8i)$

1. Distribute the minus sign: $9 - 4i - 3 + 8i$
2. Real parts: $9 - 3 = 6$
3. Imaginary parts: $-4i + 8i = 4i$
4. **Result:** $6 + 4i$

**Example 3:** $(-5 + 2i) - (-5 + 2i)$

1. $-5 + 2i + 5 - 2i = 0 + 0i = 0$

---

**⚠️ Watch the signs!** The most common error is forgetting to distribute the negative sign when subtracting. $(a+bi)-(c+di) = a+bi-c-di$, NOT $a+bi-c+di$.
      `
    },
    {
      id: 'sat-cx2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Addition & Subtraction** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(3 + 5i) + (-7 + 2i)$?',
            options: ['$-4 + 7i$', '$10 + 7i$', '$-4 + 3i$', '$4 - 7i$'],
            correctAnswer: 0,
            explanation: 'Real: $3 + (-7) = -4$. Imaginary: $5i + 2i = 7i$. Result: $-4 + 7i$.'
          },
          {
            question: 'What is $(8 - 3i) - (2 + 4i)$?',
            options: ['$6 + i$', '$10 - 7i$', '$6 - 7i$', '$6 + 7i$'],
            correctAnswer: 2,
            explanation: 'Distribute: $8 - 3i - 2 - 4i$. Real: $8-2=6$. Imaginary: $-3i-4i=-7i$. Result: $6-7i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx2-multi-step',
      type: 'text' as const,
      content: `
## Multi-Step Problems

**Example 4:** If $z_1 = 2 + 3i$ and $z_2 = -1 + 4i$, find $2z_1 - z_2$.

1. $2z_1 = 2(2+3i) = 4 + 6i$
2. $2z_1 - z_2 = (4+6i) - (-1+4i) = 4+6i+1-4i = 5+2i$

**Example 5:** Find the value of $a$ and $b$ such that $(a + bi) + (3 - 2i) = 7 + i$.

1. $(a+3) + (b-2)i = 7 + i$
2. Real parts: $a+3=7 \\Rightarrow a=4$
3. Imaginary parts: $b-2=1 \\Rightarrow b=3$

---

**SAT Tip:** Some problems ask for just the real part or just the imaginary part. Read the question carefully!
      `
    },
    {
      id: 'sat-cx2-input1',
      type: 'input-boxes' as const,
      content: `
**Compute each result.** 🧮

Write answers in $a + bi$ form (e.g. "3 + 2i" or "-1 - 4i"). For real answers, just write the number.

1) $(4 + 9i) + (-4 + i) = $

2) $(10 - 6i) - (3 - 6i) = $

3) $3(2 + i) - (1 + 5i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10i', '7', '5 - 2i'],
        hint1: 'Real: $4+(-4)=0$. Imaginary: $9i+i=10i$. When the real part is 0, the answer is just $10i$.',
        hint2: 'Real: $10-3=7$. Imaginary: $-6i-(-6i)=-6i+6i=0$. The answer is just $7$.',
        hint3: '$3(2+i)=6+3i$. Then $6+3i-1-5i=5-2i$.',
        explanation: '$(4+9i)+(-4+i)=10i$. $(10-6i)-(3-6i)=7$. $3(2+i)-(1+5i)=5-2i$.'
      }
    },
    {
      id: 'sat-cx2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the real and imaginary parts.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Real part of $(5 + 3i) - (2 - i)$',
            options: ['$3$', '$7$', '$4$', '$2$']
          },
          {
            label: 'Imaginary part of $(5 + 3i) - (2 - i)$',
            options: ['$2i$', '$3i$', '$4i$', '$-4i$']
          },
          {
            label: 'Real part of $4i + (6 - 2i)$',
            options: ['$4$', '$6$', '$0$', '$2$']
          }
        ],
        correctAnswers: ['$3$', '$4i$', '$6$'],
        hint1: '$(5+3i)-(2-i)=5+3i-2+i=3+4i$. The real part is $3$.',
        hint2: 'From the same calculation, the imaginary part is $4i$.',
        hint3: '$4i + (6-2i) = 6 + 2i$. The real part is $6$.',
        explanation: '$(5+3i)-(2-i)=3+4i$: real part $3$, imaginary part $4i$. $4i+(6-2i)=6+2i$: real part $6$.'
      }
    },
    {
      id: 'sat-cx2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(a+bi)+(4-3i)=6+2i$, what is the value of $a+b$?',
            options: ['$5$', '$7$', '$3$', '$9$'],
            correctAnswer: 1,
            explanation: '$a+4=6 \\Rightarrow a=2$. $b-3=2 \\Rightarrow b=5$. So $a+b=2+5=7$.'
          },
          {
            question: 'What is the sum $(1+i)+(2+2i)+(3+3i)+\\cdots+(10+10i)$?',
            options: ['$55 + 55i$', '$55$', '$10 + 10i$', '$100 + 100i$'],
            correctAnswer: 0,
            explanation: 'Real parts: $1+2+3+\\cdots+10 = 55$. Imaginary parts: $1+2+3+\\cdots+10 = 55$. Total: $55+55i$.'
          }
        ]
      }
    }
  ]
}
