export const satComplexPart3Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx3-intro',
      type: 'text' as const,
      content: `
# ✖️ Multiplying Complex Numbers

**Part 3 of 7 — FOIL Method, $i^2 = -1$, and Special Products**

To multiply two complex numbers, use FOIL just like with binomials, then replace $i^2$ with $-1$:

$$
(a+bi)(c+di) = ac + adi + bci + bdi^2
$$
$$
= ac + adi + bci + bd(-1)
$$
$$
= (ac - bd) + (ad + bc)i
$$

**Quick formula:**
$$
(a+bi)(c+di) = (ac-bd) + (ad+bc)i
$$

Don't memorize the formula — just FOIL and replace $i^2 = -1$.
      `
    },
    {
      id: 'sat-cx3-examples',
      type: 'text' as const,
      content: `
## Worked Examples — FOIL

**Example 1:** $(3 + 2i)(4 + 5i)$

| Step | Calculation |
|------|-------------|
| **F**irst | $3 \\cdot 4 = 12$ |
| **O**uter | $3 \\cdot 5i = 15i$ |
| **I**nner | $2i \\cdot 4 = 8i$ |
| **L**ast | $2i \\cdot 5i = 10i^2 = -10$ |

$$12 + 15i + 8i - 10 = 2 + 23i$$

**Example 2:** $(1 - 3i)(2 + i)$

$$= 2 + i - 6i - 3i^2 = 2 - 5i - 3(-1) = 2 - 5i + 3 = 5 - 5i$$

**Example 3:** $(4i)(3 - 2i)$

$$= 12i - 8i^2 = 12i - 8(-1) = 8 + 12i$$
      `
    },
    {
      id: 'sat-cx3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Multiplication** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(2 + 3i)(2 - 3i)$?',
            options: ['$4 + 9$', '$13$', '$4 - 9i^2$', '$-5$'],
            correctAnswer: 1,
            explanation: '$(2+3i)(2-3i)=4-6i+6i-9i^2=4-9(-1)=4+9=13$. This is a conjugate pair!'
          },
          {
            question: 'What is $(1 + i)^2$?',
            options: ['$2$', '$2i$', '$1 + 2i$', '$2 + 2i$'],
            correctAnswer: 1,
            explanation: '$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i + (-1) = 2i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx3-special',
      type: 'text' as const,
      content: `
## Special Products

**Conjugate pairs** give real results — this is crucial for division (Part 4):

$$
(a+bi)(a-bi) = a^2 + b^2
$$

| Example | Conjugate Pair | Product |
|---------|---------------|---------|
| $(3+4i)(3-4i)$ | Yes | $9+16=25$ |
| $(1+i)(1-i)$ | Yes | $1+1=2$ |
| $(5+2i)(5-2i)$ | Yes | $25+4=29$ |

**Squaring a complex number:**

$$(a+bi)^2 = a^2 + 2abi + b^2i^2 = (a^2-b^2) + 2abi$$

**Example:** $(3+i)^2 = 9 + 6i + i^2 = 9 + 6i - 1 = 8 + 6i$
      `
    },
    {
      id: 'sat-cx3-input1',
      type: 'input-boxes' as const,
      content: `
**Multiply and simplify.** 🧮

Write answers in $a + bi$ form.

1) $(5 + i)(2 + 3i) = $

2) $(4 - 2i)^2 = $

3) $(6 + i)(6 - i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7 + 17i', '12 - 16i', '37'],
        hint1: 'FOIL: $10 + 15i + 2i + 3i^2 = 10 + 17i + 3(-1) = 7 + 17i$.',
        hint2: '$(4-2i)^2 = 16 - 16i + 4i^2 = 16 - 16i - 4 = 12 - 16i$.',
        hint3: 'Conjugate pair: $6^2 + 1^2 = 36 + 1 = 37$.',
        explanation: '$(5+i)(2+3i)=7+17i$. $(4-2i)^2=12-16i$. $(6+i)(6-i)=37$.'
      }
    },
    {
      id: 'sat-cx3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Classify each product.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(3+2i)(3-2i)$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          },
          {
            label: '$(1+i)^2$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          },
          {
            label: '$(2+i)(1+3i)$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          }
        ],
        correctAnswers: ['purely real', 'purely imaginary', 'complex (has both parts)'],
        hint1: 'Conjugate pairs always produce a purely real number: $9+4=13$.',
        hint2: '$(1+i)^2 = 1+2i+i^2 = 2i$, which is purely imaginary.',
        hint3: '$(2+i)(1+3i) = 2+6i+i+3i^2 = 2+7i-3 = -1+7i$, which has both parts.',
        explanation: 'Conjugate pairs → real. $(1+i)^2=2i$ → imaginary. $(2+i)(1+3i)=-1+7i$ → complex.'
      }
    },
    {
      id: 'sat-cx3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(3+2i)(3-2i)-(1+i)(1-i)$?',
            options: ['$13$', '$11$', '$15$', '$2$'],
            correctAnswer: 1,
            explanation: '$(3+2i)(3-2i)=9+4=13$. $(1+i)(1-i)=1+1=2$. Difference: $13-2=11$.'
          },
          {
            question: 'If $(a+bi)^2 = -16$, which of the following could be $a+bi$?',
            options: ['$4$', '$4i$', '$-4$', '$2+2i$'],
            correctAnswer: 1,
            explanation: '$(4i)^2 = 16i^2 = 16(-1) = -16$. ✓'
          }
        ]
      }
    }
  ]
}
