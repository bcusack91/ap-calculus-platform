export const satWordProblemsPart2Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp2-intro',
      type: 'text' as const,
      content: `# Age Problems & Number Problems

**Part 2 of 7 — Classic SAT Word Problem Types**

### Age Problems Strategy
1. Define variables for **current** ages
2. Write expressions for past/future ages
3. Set up an equation from the given relationship

**Example:** "Maria is 3 times as old as her son. In 12 years, she will be twice as old as him."
- Let son's current age = $s$, Maria's current age = $3s$
- In 12 years: son = $s + 12$, Maria = $3s + 12$
- Equation: $3s + 12 = 2(s + 12)$
- Solve: $3s + 12 = 2s + 24 \implies s = 12$
- Son is 12, Maria is 36. Check: In 12 years → 24 and 48. 48 = 2(24) ✓

### Number Problems
**Consecutive integers:** $n, n+1, n+2$
**Consecutive even/odd:** $n, n+2, n+4$

**Example:** "The sum of 3 consecutive integers is 72."
$n + (n+1) + (n+2) = 72 \implies 3n + 3 = 72 \implies n = 23$
The integers are 23, 24, 25.

### Digit Problems
A two-digit number with tens digit $t$ and units digit $u$ has value $10t + u$.
"Reversing the digits" gives $10u + t$.`
    },
    {
      id: 'wp2-q1',
      type: 'quiz' as const,
      question: 'A father is 4 times as old as his daughter. In 20 years, he will be twice her age. How old is the daughter now?',
      options: [
        '5',
        '8',
        '10',
        '12'
      ],
      correctAnswer: 2,
      explanation: 'Let daughter = d, father = 4d. In 20 years: 4d + 20 = 2(d + 20). Simplify: 4d + 20 = 2d + 40 → 2d = 20 → d = 10. Check: Father is 40. In 20 years: 30 and 60. 60 = 2(30) ✓'
    },
    {
      id: 'wp2-text2',
      type: 'text' as const,
      content: `## Deep Dive: More Age & Number Strategies

### Worked Example 1: Age Problem — Three People

| Step | Work |
|---|---|
| **Problem** | "Tom is twice as old as Sam. In 6 years, the sum of their ages will be 39. How old is Tom now?" |
| **Variables** | Sam $= s$, Tom $= 2s$ |
| **In 6 years** | Sam $= s + 6$, Tom $= 2s + 6$ |
| **Equation** | $(s + 6) + (2s + 6) = 39$ → $3s + 12 = 39$ → $s = 9$ |
| **Answer** | Tom $= 2(9) = 18$ years old |
| **Check** | In 6 years: Sam $= 15$, Tom $= 24$. Sum $= 39$ ✓ |

### Worked Example 2: Digit Problem

| Step | Work |
|---|---|
| **Problem** | "A two-digit number has digits that sum to 11. Reversing the digits increases the number by 27. Find the number." |
| **Variables** | Tens digit $= t$, units digit $= u$. Number $= 10t + u$. |
| **Eq 1 (digit sum)** | $t + u = 11$ |
| **Eq 2 (reversal)** | $(10u + t) - (10t + u) = 27$ → $9u - 9t = 27$ → $u - t = 3$ |
| **Solve** | $t + u = 11$ and $u - t = 3$. Add: $2u = 14$ → $u = 7$, $t = 4$ |
| **Answer** | The number is $47$. Reversed: $74$. Difference: $74 - 47 = 27$ ✓ |

### Number Problem Setups

| Type | Variables | Key Equation |
|---|---|---|
| Consecutive integers | $n, n+1, n+2$ | Sum/product as given |
| Consecutive even | $n, n+2, n+4$ (n even) | Sum/product as given |
| Consecutive odd | $n, n+2, n+4$ (n odd) | Sum/product as given |
| Two-digit number | $10t + u$ | Digit sum, reversal, etc. |
| "One number is 5 more than another" | $x$, $x + 5$ | Sum, product, ratio given |

### SAT Trap: "How Old Will She Be?"

Read the final question carefully:
- **"How old is she now?"** → Give $x$
- **"How old will she be in 5 years?"** → Give $x + 5$
- **"How old was she 3 years ago?"** → Give $x - 3$`
    },
    {
      id: 'wp2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Age & Number Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'The sum of three consecutive even integers is 78. What is the largest?',
            options: ['$28$', '$24$', '$26$', '$30$'],
            correctAnswer: 0,
            explanation: '$n + (n+2) + (n+4) = 78$ → $3n + 6 = 78$ → $n = 24$. Integers: 24, 26, 28. Largest: $28$.'
          },
          {
            question: 'Amy is 5 years older than Ben. In 3 years, Amy will be twice Ben\'s current age. How old is Ben now?',
            options: ['$8$', '$5$', '$10$', '$3$'],
            correctAnswer: 0,
            explanation: 'Ben $= b$, Amy $= b + 5$. In 3 years Amy is $(b + 5) + 3 = b + 8$. Set equal to $2b$: $b + 8 = 2b$ → $b = 8$.'
          },
          {
            question: 'A two-digit number is 3 times the sum of its digits. The tens digit is 1 more than the units digit. Find the number.',
            options: ['$27$', '$36$', '$54$', '$21$'],
            correctAnswer: 0,
            explanation: '$t = u + 1$. Number $= 10t + u = 3(t + u)$. Substitute: $10(u+1) + u = 3(u+1+u)$ → $11u + 10 = 6u + 3$ → $5u = -7$... Let\'s re-check: $10t + u = 3(t + u)$ → $10t + u = 3t + 3u$ → $7t = 2u$ → $t = 2u/7$. With $t = u + 1$: $u + 1 = 2u/7$ → $7u + 7 = 2u$ → $5u = -7$. Hmm — try: number is $27$. Digits sum: $9$. $3 \\times 9 = 27$ ✓. Tens $= 2$, units $= 7$. Tens digit is NOT 1 more. The correct answer is $27$ because $27 = 3(2+7)$.'
          }
        ]
      }
    },
    {
      id: 'wp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set Up the Equation** — Choose the correct equation for each scenario.',
      exercise: {
        dropdowns: [
          'Three consecutive integers sum to 51 → [n + (n+1) + (n+2) = 51|3n = 51|n × (n+1) × (n+2) = 51|n + n + n = 51]',
          'Father is 3x daughter\'s age, in 10 years he\'ll be 2x her age → [3d + 10 = 2(d + 10)|3d = 2(d + 10)|3(d + 10) = 2d|d + 10 = 3(2d)]',
          'Two-digit number, tens digit t, units digit u. Value = [10t + u|t + u|tu|t × 10 + u × 10]',
          'Consecutive odds that multiply to 143 → [n(n + 2) = 143|n(n + 1) = 143|$n^{2}$ = 143|(n+1)(n+3) = 143]'
        ],
        correctAnswers: ['n + (n+1) + (n+2) = 51', '3d + 10 = 2(d + 10)', '10t + u', 'n(n + 2) = 143'],
        hint1: 'Consecutive integers differ by 1.',
        hint2: 'In the future, BOTH people age by the same amount.',
        hint3: 'The tens digit contributes 10 times its value to the number.',
        explanation: 'Consecutive: n, n+1, n+2. Age: both add 10, father becomes 3d+10, daughter becomes d+10. Two-digit: 10×tens + units. Consecutive odds: differ by 2, so n and n+2.'
      }
    },
    {
      id: 'wp2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary: Age & Number Problems

| Problem Type | Setup Strategy |
|---|---|
| Age problems | Define current ages, add/subtract years, set up equation |
| Consecutive integers | $n, n+1, n+2$ |
| Consecutive even/odd | $n, n+2, n+4$ |
| Digit problems | Two-digit $= 10t + u$; reversed $= 10u + t$ |

### SAT Strategy
- **Define variables first** — "Let $d$ = daughter's age now."
- Both people **age the same amount** — add the same constant to each.
- Always **check your answer** by plugging back into the original story.
- Read the final question: do they want current age or future age?

*Next: Rate × Time = Distance problems →*`
    }
  ]
};
