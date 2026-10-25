export const asvabMkNumberPropertiesPart3Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp3-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 3 of 7 — Order of Operations, Integers and Absolute Value**

### Order of Operations (PEMDAS)

When an expression has more than one operation, do them in this order:

| Step | Operation |
|:---:|:---|
| **P** | Parentheses and other grouping (brackets, fraction bars, absolute value bars) |
| **E** | Exponents and roots |
| **MD** | Multiplication and division, **left to right** |
| **AS** | Addition and subtraction, **left to right** |

The trap: "MD" and "AS" are **pairs**. Multiplication does not always come before division; whichever comes first reading left to right goes first.

### Worked Example 1

$$18 - 12 \\div 3 \\cdot 2$$

- Division and multiplication, left to right: $12 \\div 3 = 4$, then $4 \\cdot 2 = 8$
- Subtraction: $18 - 8 = 10$

(Multiplying first, $3 \\cdot 2 = 6$, then $12 \\div 6 = 2$, gives $16$. Wrong.)

### Worked Example 2

$$4 + 2(7 - 3)^2$$

- Parentheses: $7 - 3 = 4$
- Exponent: $4^2 = 16$
- Multiply: $2 \\cdot 16 = 32$
- Add: $4 + 32 = 36$

### Worked Example 3: a fraction bar groups

$$\\frac{20 - 2 \\cdot 4}{3 + 1} = \\frac{20 - 8}{4} = \\frac{12}{4} = 3$$

Simplify the top and the bottom completely before you divide.`
    },
    {
      id: 'mknp3-integers',
      type: 'text' as const,
      content: `## Negative Numbers

### Adding and subtracting

- **Same signs:** add the sizes, keep the sign. $-6 + (-9) = -15$
- **Different signs:** subtract the sizes, keep the sign of the bigger size. $-14 + 5 = -9$
- **Subtracting a negative is adding:** $7 - (-3) = 7 + 3 = 10$

Think of a thermometer: $-4^\\circ$ rising $10$ degrees is $6^\\circ$, so $-4 + 10 = 6$.

### Multiplying and dividing

| Signs | Result |
|:---|:---|
| positive × positive, negative × negative | **positive** |
| positive × negative | **negative** |

Same rule for division. With several factors, **count the negatives**: an even count gives a positive answer, an odd count gives a negative one.

$$(-2)(-3)(-5) = -30 \\quad \\text{(three negatives: negative)}$$

## Absolute Value

The **absolute value** of a number is its distance from $0$ on the number line, so it is never negative.

$$\\lvert -8 \\rvert = 8 \\qquad \\lvert 8 \\rvert = 8 \\qquad \\lvert 0 \\rvert = 0$$

Absolute value bars are grouping symbols: work **inside** first, then take the absolute value.

$$\\lvert 3 - 11 \\rvert = \\lvert -8 \\rvert = 8 \\qquad -\\lvert -5 \\rvert = -5$$

In the second example the negative sign is **outside** the bars, so it stays.

> **Key Fact:** $\\lvert a - b \\rvert$ is the distance between $a$ and $b$ on the number line. The distance from $-3$ to $9$ is $\\lvert 9 - (-3) \\rvert = 12$.`
    },
    {
      id: 'mknp3-mc-order',
      type: 'multiple-choice' as const,
      content: '**Order of operations.** 🎯 No calculator.',
      exercise: {
        questions: [
          {
            question: 'Evaluate $24 \\div 4 \\cdot 3 - 5$.',
            options: ['$-3$', '$13$', '$9$', '$23$'],
            correctAnswer: 1,
            explanation: 'Left to right for division and multiplication: $24 \\div 4 = 6$, $6 \\cdot 3 = 18$, then $18 - 5 = 13$. Multiplying $4 \\cdot 3$ first gives $2 - 5 = -3$.'
          },
          {
            question: 'Evaluate $3 + 5 \\cdot 2^3$.',
            options: ['$43$', '$1{,}000$', '$64$', '$83$'],
            correctAnswer: 0,
            explanation: 'Exponent first: $2^3 = 8$. Then $5 \\cdot 8 = 40$ and $3 + 40 = 43$. Adding first gives $8 \\cdot 8 = 64$; cubing $5 \\cdot 2$ gives $1{,}000$.'
          },
          {
            question: 'Evaluate $\\dfrac{6^2 - 4}{2 \\cdot 4}$.',
            options: ['$16$', '$1$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: 'Top: $36 - 4 = 32$. Bottom: $8$. Then $32 \\div 8 = 4$. The fraction bar groups the top and the bottom separately.'
          }
        ]
      }
    },
    {
      id: 'mknp3-mc-signs',
      type: 'multiple-choice' as const,
      content: '**Signs and absolute value.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $-9 - (-14)$?',
            options: ['$-23$', '$5$', '$-5$', '$23$'],
            correctAnswer: 1,
            explanation: 'Subtracting a negative is adding: $-9 + 14 = 5$. Treating it as $-9 - 14$ gives $-23$.'
          },
          {
            question: 'What is $(-4)(3)(-2)(-1)$?',
            options: ['$24$', '$-10$', '$-24$', '$10$'],
            correctAnswer: 2,
            explanation: 'The sizes multiply to $24$, and there are three negative factors, an odd count, so the product is $-24$.'
          },
          {
            question: 'What is $\\lvert 4 - 10 \\rvert - \\lvert -3 \\rvert$?',
            options: ['$9$', '$-3$', '$-9$', '$3$'],
            correctAnswer: 3,
            explanation: 'Inside first: $\\lvert -6 \\rvert = 6$ and $\\lvert -3 \\rvert = 3$. Then $6 - 3 = 3$.'
          }
        ]
      }
    },
    {
      id: 'mknp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Step through $40 - 3(2 - 6)^2$.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Inside the parentheses, $2 - 6 =$',
            options: ['$4$', '$-4$', '$-8$', '$8$'],
            correctAnswer: 1
          },
          {
            label: 'Squared, that becomes:',
            options: ['$-16$', '$16$', '$-8$', '$8$'],
            correctAnswer: 1
          },
          {
            label: 'The final value is:',
            options: ['$-8$', '$88$', '$592$', '$-48$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$-4$', '$16$', '$-8$'],
        hint1: 'Start at $2$ and move $6$ to the left.',
        hint2: 'A negative times a negative is positive.',
        hint3: '$3 \\cdot 16 = 48$; subtract from $40$.',
        explanation: '$2 - 6 = -4$, and $(-4)^2 = (-4)(-4) = 16$. Then $3 \\cdot 16 = 48$ and $40 - 48 = -8$. Subtracting first, $(40 - 3) \\cdot 16 = 592$, breaks the order of operations.'
      }
    },
    {
      id: 'mknp3-input',
      type: 'input-boxes' as const,
      content: `**Compute.** ✍️

**1)** $-7 + 15 - 20$:

**2)** $(-48) \\div (-6) - 10$:

**3)** The distance on a number line between $-11$ and $4$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['-12', '-2', '15'],
        hint1: '$-7 + 15 = 8$ first.',
        hint2: 'Negative divided by negative is positive.',
        hint3: 'Distance is $\\lvert 4 - (-11) \\rvert$.',
        explanation: '(1) $-7 + 15 = 8$, then $8 - 20 = -12$. (2) $(-48) \\div (-6) = 8$, then $8 - 10 = -2$. (3) $\\lvert 4 - (-11) \\rvert = \\lvert 15 \\rvert = 15$.'
      }
    },
    {
      id: 'mknp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **PEMDAS**, but multiplication/division and addition/subtraction each go **left to right**
- Fraction bars and absolute value bars **group**: simplify inside first
- Subtracting a negative is **adding**
- Count the negatives: **even** count → positive product, **odd** count → negative
- **Absolute value** is distance from $0$: never negative; $\\lvert a - b \\rvert$ is the distance between $a$ and $b$

> **Up Next:** Part 4 — exponents, their rules and scientific notation.`
    }
  ]
};
