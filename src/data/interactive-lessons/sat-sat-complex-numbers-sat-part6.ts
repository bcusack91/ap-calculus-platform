export const satComplexPart6Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx6-intro',
      type: 'text' as const,
      content: `
# 🎯 Complex Numbers on the SAT

**Part 6 of 7 — Pattern Recognition, Common Traps, $i^n$ Cycles**

Complex number questions appear in the **Calculator** and **No Calculator** sections. They test three main skills:

| Skill | Frequency |
|-------|-----------|
| Powers of $i$ | ★★★ Very common |
| Add/subtract/multiply | ★★★ Very common |
| Division (conjugates) | ★★ Common |
| Discriminant / non-real solutions | ★★ Common |
| Writing $\\frac{a+bi}{c+di}$ in $a+bi$ form | ★★ Common |

**Key pattern:** Most SAT complex-number problems take 30–60 seconds if you know the rules. They reward **memorization** of the $i$-cycle and fluency with FOIL.
      `
    },
    {
      id: 'sat-cx6-trap1',
      type: 'text' as const,
      content: `
## Common SAT Traps

**Trap 1: Forgetting $i^2 = -1$ when multiplying**

Wrong: $(2+i)(3+i) = 6 + 2i + 3i + i^2 = 6 + 5i + i^2 = ?$

Students who leave $i^2$ or write $+1$ instead of $-1$ get the wrong answer.

Correct: $6 + 5i + (-1) = 5 + 5i$

**Trap 2: Sign errors when subtracting**

Wrong: $(4+3i)-(2+5i) = 4+3i-2+5i = 2+8i$ ❌

Correct: $(4+3i)-(2+5i) = 4+3i-2-5i = 2-2i$ ✅

**Trap 3: Confusing $r^2$ in the discriminant**

When $\\Delta < 0$, students sometimes forget to put $\\sqrt{|\\Delta|}$ over $2a$.

$$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$$
      `
    },
    {
      id: 'sat-cx6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Trap-Spotting Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A student says $(3i)^2 = 9$. What is the correct value?',
            options: ['$9$', '$-9$', '$9i$', '$-9i$'],
            correctAnswer: 1,
            explanation: '$(3i)^2 = 9i^2 = 9(-1) = -9$. Remember to apply the exponent to $i$ too!'
          },
          {
            question: 'Which expression is equivalent to $i + i^2 + i^3 + i^4$?',
            options: ['$4i$', '$-1$', '$0$', '$1$'],
            correctAnswer: 2,
            explanation: '$i + (-1) + (-i) + 1 = (i - i) + (-1 + 1) = 0$. One complete cycle of powers of $i$ always sums to $0$!'
          }
        ]
      }
    },
    {
      id: 'sat-cx6-cycle-sum',
      type: 'text' as const,
      content: `
## The Cycle Sum Trick

One complete cycle of consecutive powers of $i$ sums to $0$:

$$i^1 + i^2 + i^3 + i^4 = i + (-1) + (-i) + 1 = 0$$

This means:
- $i + i^2 + i^3 + \\cdots + i^{100} = 0$ (25 complete cycles)
- $i + i^2 + i^3 + \\cdots + i^{99} = i + i^2 + i^3 = i - 1 - i = -1$ (24 complete cycles + 3 extra)

**Shortcut for sums:** Divide the number of terms by 4. Complete groups of 4 cancel to $0$. Then add up the remaining terms.

**Example:** $i + i^2 + \\cdots + i^{42}$

42 terms: $42 \\div 4 = 10$ complete groups (40 terms) + 2 remaining.

Remaining: $i^{41} + i^{42} = i + (-1) = i - 1 = -1 + i$.
      `
    },
    {
      id: 'sat-cx6-input1',
      type: 'input-boxes' as const,
      content: `
**Quick calculations.** 🧮

1) $(2i)^3 = $

2) $i + i^2 + i^3 + i^4 + i^5 = $

3) $\\frac{1}{i} = $ (Write in the form $ai$ or $-ai$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-8i', 'i', '-i'],
        hint1: '$(2i)^3 = 8i^3 = 8(-i) = -8i$.',
        hint2: 'The first four terms sum to $0$, so just add $i^5 = i$.',
        hint3: 'Multiply by $\\frac{i}{i}$: $\\frac{1}{i} \\cdot \\frac{i}{i} = \\frac{i}{i^2} = \\frac{i}{-1} = -i$.',
        explanation: '$(2i)^3=-8i$. Sum of full cycle is $0$, plus $i^5=i$. $\\frac{1}{i}=-i$.'
      }
    },
    {
      id: 'sat-cx6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the correct approach for each SAT problem type.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Simplify $i^{203}$',
            options: ['Divide 203 by 4, use remainder', 'Multiply out 203 times', 'Use calculator', 'Factor 203']
          },
          {
            label: 'Write $\\frac{3}{2-i}$ in $a+bi$ form',
            options: ['Multiply by $\\frac{2+i}{2+i}$', 'Multiply by $\\frac{2-i}{2-i}$', 'Divide 3 by 2, ignore $i$', 'Set equal to $a+bi$ and guess']
          },
          {
            label: 'Find non-real solutions of $x^2+2x+10=0$',
            options: ['Factor the quadratic', 'Use the quadratic formula', 'Complete the square only', 'Graph it']
          }
        ],
        correctAnswers: ['Divide 203 by 4, use remainder', 'Multiply by $\\frac{2+i}{2+i}$', 'Use the quadratic formula'],
        hint1: 'The power-of-$i$ cycle has period 4. $203 \\div 4 = 50$ remainder $3$, so $i^{203}=-i$.',
        hint2: 'Multiply numerator and denominator by the conjugate of the denominator.',
        hint3: 'When the discriminant is negative, the quadratic formula gives complex solutions.',
        explanation: 'Powers of $i$: divide by 4. Division: multiply by conjugate. Non-real solutions: quadratic formula.'
      }
    },
    {
      id: 'sat-cx6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(1+i)(1-i)(1+i)$?',
            options: ['$2+2i$', '$2-2i$', '$4$', '$0$'],
            correctAnswer: 0,
            explanation: 'First: $(1+i)(1-i)=1+1=2$. Then $2(1+i)=2+2i$.'
          },
          {
            question: 'If $z = 3-2i$, what is $z \\cdot \\bar{z}$ (where $\\bar{z}$ is the conjugate)?',
            options: ['$5$', '$13$', '$9+4i$', '$9-4i$'],
            correctAnswer: 1,
            explanation: '$z \\cdot \\bar{z} = (3-2i)(3+2i) = 9+4 = 13$. A number times its conjugate equals $a^2+b^2$.'
          }
        ]
      }
    }
  ]
}
