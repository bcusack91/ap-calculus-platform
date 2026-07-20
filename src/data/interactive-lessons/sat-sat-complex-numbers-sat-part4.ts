export const satComplexPart4Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx4-intro',
      type: 'text' as const,
      content: `
# ➗ Complex Conjugates & Division

**Part 4 of 7 — Conjugates, Rationalizing, Division**

The **complex conjugate** of $a + bi$ is $a - bi$. The product of a number and its conjugate is always **real**:

$$
(a + bi)(a - bi) = a^2 + b^2
$$

| Number | Conjugate | Product |
|--------|-----------|---------|
| $3 + 4i$ | $3 - 4i$ | $25$ |
| $2 - i$ | $2 + i$ | $5$ |
| $7i$ | $-7i$ | $49$ |

This property is the key to dividing complex numbers.
      `
    },
    {
      id: 'sat-cx4-division',
      type: 'text' as const,
      content: `
## Division — Multiply by the Conjugate

To divide $\\frac{a + bi}{c + di}$, multiply top and bottom by the conjugate of the denominator:

$$
\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{(c+di)(c-di)} = \\frac{(a+bi)(c-di)}{c^2+d^2}
$$

**Example 1:** $\\frac{3+i}{1-2i}$

$$= \\frac{(3+i)(1+2i)}{(1-2i)(1+2i)} = \\frac{3+6i+i+2i^2}{1+4} = \\frac{3+7i-2}{5} = \\frac{1+7i}{5} = \\frac{1}{5}+\\frac{7}{5}i$$

**Example 2:** $\\frac{4}{2+i}$

$$= \\frac{4(2-i)}{(2+i)(2-i)} = \\frac{8-4i}{4+1} = \\frac{8-4i}{5} = \\frac{8}{5}-\\frac{4}{5}i$$
      `
    },
    {
      id: 'sat-cx4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Division** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\frac{5+i}{2+3i}$ in $a+bi$ form?',
            options: ['$1 - i$', '$-1 - i$', '$1+i$', '$-1+i$'],
            correctAnswer: 0,
            explanation: 'Multiply by conjugate: $\\frac{(5+i)(2-3i)}{(2+3i)(2-3i)}=\\frac{10-15i+2i-3i^2}{4+9}=\\frac{10-13i+3}{13}=\\frac{13-13i}{13}=1-i$.'
          },
          {
            question: 'What is $\\frac{6i}{3-i}$?',
            options: ['$-\\frac{3}{5}+\\frac{9}{5}i$', '$\\frac{3}{5}+\\frac{9}{5}i$', '$2i$', '$\\frac{6}{5}+\\frac{18}{5}i$'],
            correctAnswer: 0,
            explanation: '$\\frac{6i(3+i)}{(3-i)(3+i)}=\\frac{18i+6i^2}{9+1}=\\frac{-6+18i}{10}=-\\frac{3}{5}+\\frac{9}{5}i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx4-steps',
      type: 'text' as const,
      content: `
## Step-by-Step Division Checklist

When dividing complex numbers on the SAT:

1. **Identify** the denominator (e.g., $c + di$)
2. **Write** its conjugate ($c - di$)
3. **Multiply** numerator and denominator by the conjugate
4. **FOIL** the numerator
5. Use $i^2 = -1$ to simplify
6. Denominator becomes $c^2 + d^2$ (always a real number)
7. **Split** into real and imaginary parts if needed

**Example:** $\\frac{2-3i}{4+i}$

$$= \\frac{(2-3i)(4-i)}{(4+i)(4-i)} = \\frac{8-2i-12i+3i^2}{16+1} = \\frac{8-14i-3}{17} = \\frac{5-14i}{17}$$

$$= \\frac{5}{17} - \\frac{14}{17}i$$
      `
    },
    {
      id: 'sat-cx4-input1',
      type: 'input-boxes' as const,
      content: `
**Divide and simplify.** 🧮

Give answers as simplified fractions or whole numbers.

1) $\\frac{10}{1+3i}$ — what is the real part?

2) $\\frac{10}{1+3i}$ — what is the coefficient of $i$?

3) $(3+4i)(3-4i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-3', '25'],
        hint1: 'Multiply by conjugate: $\\frac{10(1-3i)}{(1+3i)(1-3i)}=\\frac{10-30i}{1+9}=\\frac{10-30i}{10}=1-3i$.',
        hint2: 'From $1-3i$, the coefficient of $i$ is $-3$.',
        hint3: 'Conjugate pair: $3^2+4^2=9+16=25$.',
        explanation: '$\\frac{10}{1+3i}=\\frac{10(1-3i)}{10}=1-3i$. Real part: $1$, imaginary coefficient: $-3$. $(3+4i)(3-4i)=25$.'
      }
    },
    {
      id: 'sat-cx4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to the correct conjugate.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conjugate of $5 - 2i$',
            options: ['$5 + 2i$', '$-5 + 2i$', '$-5 - 2i$', '$2 - 5i$']
          },
          {
            label: 'Conjugate of $-3i$',
            options: ['$3$', '$3i$', '$-3$', '$-3i$']
          },
          {
            label: 'Conjugate of $4$',
            options: ['$-4$', '$4i$', '$4$', '$-4i$']
          }
        ],
        correctAnswers: ['$5 + 2i$', '$3i$', '$4$'],
        hint1: 'Change the sign of the imaginary part: $5-2i \\to 5+2i$.',
        hint2: '$-3i = 0 - 3i$, so the conjugate is $0 + 3i = 3i$.',
        hint3: '$4 = 4 + 0i$, so the conjugate is $4 - 0i = 4$. Real numbers are their own conjugates.',
        explanation: 'Flip the sign of the imaginary part. Real numbers are self-conjugate.'
      }
    },
    {
      id: 'sat-cx4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\frac{(1+i)^2}{i}$?',
            options: ['$2$', '$-2$', '$2i$', '$-2i$'],
            correctAnswer: 0,
            explanation: '$(1+i)^2=1+2i+i^2=2i$. Then $\\frac{2i}{i}=2$.'
          },
          {
            question: 'If $z = a+bi$ and $z \\cdot \\bar{z} = 25$, which could be $z$?',
            options: ['$5+i$', '$3+4i$', '$5+5i$', '$25$'],
            correctAnswer: 1,
            explanation: '$z \\cdot \\bar{z} = a^2+b^2$. For $3+4i$: $9+16=25$. ✓'
          }
        ]
      }
    }
  ]
}
