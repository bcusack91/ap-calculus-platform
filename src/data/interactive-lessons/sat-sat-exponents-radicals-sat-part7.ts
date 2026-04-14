export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er7-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 7 of 7 — Review & SAT-Level Practice**

### Quick Reference Card

| Operation | Rule | Example |
|-----------|------|---------|
| $a^m \\cdot a^n$ | $a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| $a^m / a^n$ | $a^{m-n}$ | $x^5 / x^2 = x^3$ |
| $(a^m)^n$ | $a^{mn}$ | $(x^3)^2 = x^6$ |
| $a^{-n}$ | $1/a^n$ | $x^{-2} = 1/x^2$ |
| $a^{m/n}$ | $\\sqrt[n]{a^m}$ | $8^{2/3} = 4$ |
| $\\sqrt{ab}$ | $\\sqrt{a}\\cdot\\sqrt{b}$ | $\\sqrt{12} = 2\\sqrt{3}$ |

### Common SAT Exponent Traps

1. $(x + y)^2 \\neq x^2 + y^2$ — must FOIL
2. $(-x)^2 = x^2$ but $-x^2 = -(x^2)$ — order of operations!
3. $\\sqrt{x^2} = |x|$, not just $x$
4. $a^0 = 1$ for ALL nonzero $a$, including negatives: $(-5)^0 = 1$

---

### Worked Example 1 — Trap-Style Problem

**If $(-3)^4 - 3^4 + (-3)^3 + 3^3 = ?$**

| Step | Work |
|------|------|
| $(-3)^4$ | $81$ (even power, positive) |
| $3^4$ | $81$ |
| $(-3)^3$ | $-27$ (odd power, negative) |
| $3^3$ | $27$ |
| Combine | $81 - 81 + (-27) + 27 = 0$ |

**Shortcut:** Even powers make signs agree; odd powers make signs cancel.

### Worked Example 2 — Multi-Rule Problem

**If $\\frac{(2x^3)^2 \\cdot x^{-4}}{4x^2} = x^n$, find $n$.**

| Step | Work |
|------|------|
| Expand numerator | $(2x^3)^2 = 4x^6$ |
| Multiply | $4x^6 \\cdot x^{-4} = 4x^2$ |
| Divide | $\\frac{4x^2}{4x^2} = x^0 = 1$ |
| Result | $n = 0$ |`
    },
    {
      id: 'er7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x^a \\cdot x^5}{x^3} = x^{10}$, what is $a$?',
            options: ['$8$', '$2$', '$12$', '$5$'],
            correctAnswer: 0,
            explanation: '$x^{a+5-3} = x^{a+2} = x^{10}$ → $a + 2 = 10$ → $a = 8$.'
          },
          {
            question: 'Which is greatest: $2^{10}$, $4^5$, $8^3$, $16^2$?',
            options: ['$2^{10}$ and $4^5$ are equal (both 1024), and they are the greatest', '$16^2$', '$8^3$', 'All are equal'],
            correctAnswer: 0,
            explanation: '$2^{10} = 1024$, $4^5 = (2^2)^5 = 2^{10} = 1024$, $8^3 = (2^3)^3 = 2^9 = 512$, $16^2 = (2^4)^2 = 2^8 = 256$. $2^{10} = 4^5 = 1024$ is greatest.'
          },
          {
            question: 'Simplify: $\\frac{\\sqrt{50}}{\\sqrt{2}}$',
            options: ['$5$', '$5\\sqrt{2}$', '$\\sqrt{25}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{50/2} = \\sqrt{25} = 5$. Both A and C are correct since $\\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'er7-text2',
      type: 'text' as const,
      content: `### SAT Strategy: Rewrite Everything as Powers of Small Primes

Many SAT problems look complex but simplify once you rewrite bases as powers of 2, 3, or 5.

### Worked Example 3

**If $8^x = 32$, what is $x$?**

| Step | Work |
|------|------|
| Rewrite as powers of 2 | $(2^3)^x = 2^5$ |
| Simplify | $2^{3x} = 2^5$ |
| Set exponents equal | $3x = 5$ → $x = 5/3$ |

### Worked Example 4

**Simplify $\\frac{9^{n+1}}{3^{2n-1}}$.**

| Step | Work |
|------|------|
| Rewrite $9 = 3^2$ | $\\frac{(3^2)^{n+1}}{3^{2n-1}} = \\frac{3^{2n+2}}{3^{2n-1}}$ |
| Subtract exponents | $3^{(2n+2)-(2n-1)} = 3^3$ |
| Result | $27$ |

### Worked Example 5

**If $\\sqrt{x^2 + 6x + 9} = 7$, find $x$.**

| Step | Work |
|------|------|
| Recognize perfect square | $\\sqrt{(x+3)^2} = 7$ |
| Apply $\\sqrt{a^2} = |a|$ | $|x + 3| = 7$ |
| Solve | $x + 3 = 7$ → $x = 4$, or $x + 3 = -7$ → $x = -10$ |
| Both valid | $x = 4$ or $x = -10$ |`
    },
    {
      id: 'er7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT-Level Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $27^x = 9^{x+1}$, what is $x$?',
            options: ['$2$', '$3$', '$1$', '$4$'],
            correctAnswer: 0,
            explanation: '$3^{3x} = 3^{2(x+1)} = 3^{2x+2}$. So $3x = 2x + 2$ → $x = 2$.'
          },
          {
            question: 'What is $(-2)^5 + (-2)^4$?',
            options: ['$-16$', '$16$', '$0$', '$-48$'],
            correctAnswer: 0,
            explanation: '$(-2)^5 = -32$ and $(-2)^4 = 16$. Sum: $-32 + 16 = -16$.'
          },
          {
            question: 'If $x > 0$ and $x^{1/2} = x^{-1/2} \\cdot x^k$, what is $k$?',
            options: ['$1$', '$0$', '$1/2$', '$-1$'],
            correctAnswer: 0,
            explanation: '$x^{-1/2} \\cdot x^k = x^{k - 1/2}$. Set equal to $x^{1/2}$: $k - 1/2 = 1/2$ → $k = 1$.'
          },
          {
            question: 'How many solutions does $\\sqrt{x^2} = -x$ have for real $x$?',
            options: ['Infinitely many ($x \\leq 0$)', 'One ($x = 0$)', 'None', 'Two'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x^2} = |x|$. For $|x| = -x$, we need $-x \\geq 0$, meaning $x \\leq 0$. All non-positive $x$ work.'
          }
        ]
      }
    },
    {
      id: 'er7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which Strategy?** 🔍\n\nFor each problem, choose the best first step.',
      exercise: {
        dropdowns: [
          { label: 'Solve $4^{x+1} = 8^x$', options: ['Rewrite as powers of 2', 'Take the log of both sides', 'Multiply both sides by 4', 'Square both sides'] },
          { label: 'Simplify $\\sqrt{75} - \\sqrt{27}$', options: ['Simplify each radical first', 'Multiply the radicals together', 'Square both radicals', 'Add the radicands'] },
          { label: 'Solve $\\sqrt{3x + 1} = 5$', options: ['Square both sides', 'Subtract 1 from both sides', 'Divide by 3', 'Cube both sides'] },
          { label: 'Find $(-1)^{47} + (-1)^{50}$', options: ['Odd power = −1, even power = +1', 'Calculate both powers directly', 'Factor out (−1)', 'Rewrite as powers of i'] }
        ],
        correctAnswers: ['Rewrite as powers of 2', 'Simplify each radical first', 'Square both sides', 'Odd power = −1, even power = +1'],
        hint1: 'Both 4 and 8 are powers of 2: $4 = 2^2$, $8 = 2^3$.',
        hint2: '$\\sqrt{75} = 5\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$ — now combine.',
        hint3: 'Squaring removes the radical: $(\\sqrt{3x+1})^2 = 25$.',
        explanation: 'Rewrite as same base for exponential equations. Simplify radicals before combining. Square to eliminate square roots. For $(-1)^n$, just check if $n$ is odd or even: $-1 + 1 = 0$.'
      }
    },
    {
      id: 'er7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Full Topic Review

| Category | Key Rules |
|----------|-----------|
| Multiplying | $a^m \\cdot a^n = a^{m+n}$ |
| Dividing | $a^m / a^n = a^{m-n}$ |
| Power of power | $(a^m)^n = a^{mn}$ |
| Negative exponent | $a^{-n} = 1/a^n$ |
| Rational exponent | $a^{m/n} = \\sqrt[n]{a^m}$ |
| Radical product | $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$ |
| Radical equation | Square both sides, check for extraneous |
| Trap: sign | $(-x)^2 \\neq -x^2$ |
| Trap: addition | $(x+y)^2 \\neq x^2 + y^2$ |
| Trap: square root | $\\sqrt{x^2} = |x|$ |

**SAT Strategies:**
- Rewrite all bases as powers of small primes (2, 3, 5)
- Convert between radical and exponent form freely
- Check extraneous solutions after squaring
- For $(-1)^n$: odd → $-1$, even → $1$`
    }
  ]
};
