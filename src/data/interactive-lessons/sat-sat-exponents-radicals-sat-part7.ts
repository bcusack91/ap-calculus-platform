export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp7-cheatsheet',
      type: 'text' as const,
      content: `
# 🏆 Exponents & Radicals — Complete Review

**Part 7 of 7 — Cheat Sheet + Mixed Practice**

**Master Cheat Sheet — All Rules in One Place**

| Rule | Formula |
|------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ |
| Quotient | $\\frac{a^m}{a^n} = a^{m-n}$ |
| Power | $(a^m)^n = a^{mn}$ |
| Zero Exponent | $a^0 = 1$ |
| Negative Exp. | $a^{-n} = \\frac{1}{a^n}$ |
| Fractional Exp. | $x^{m/n} = \\sqrt[n]{x^m}$ |
| Radical Product | $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ |
| Rationalize | $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$ |
| Growth Model | $A = P(1+r)^t$ |
| Decay Model | $A = P(1-r)^t$ |
| Half-Life | $A = P(\\frac{1}{2})^{t/h}$ |
| Scientific Not. | $a \\times 10^n,\\; 1 \\le a < 10$ |
      `
    },
    {
      id: 'sat-exp7-tips',
      type: 'text' as const,
      content: `
## SAT Strategy Recap

**Time Management:**
- Exponent-rule questions should take **30–45 seconds** max.
- Growth/decay word problems: budget **60–90 seconds**.
- If stuck, try plugging in answer choices — it often works faster than algebra.

**Common Traps:**
1. Confusing $(2x)^3 = 8x^3$ with $2x^3$ (missing the 8).
2. Forgetting that $x^0 = 1$, not $0$.
3. Adding exponents when bases are different: $2^3 \\cdot 3^2 \\neq 6^5$.
4. Misreading decay: $0.85^t$ means 15% decay, NOT 85% decay.
5. In scientific notation, $32 \\times 10^4$ is not proper form — adjust to $3.2 \\times 10^5$.

**Power Moves:**
- Convert everything to the same base before comparing.
- When in doubt, write it out: expand the exponent to see the pattern.
- On calculator-allowed sections, verify your algebraic answer numerically.
      `
    },
    {
      id: 'sat-exp7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{(2x^3)^2 \\cdot x^{-4}}{2x^2}$',
            options: ['$2$', '$2x^0 = 2$', '$2x^{-2}$', '$4x$'],
            correctAnswer: 1,
            explanation: 'Numerator: $(2x^3)^2 = 4x^6$. Then $4x^6 \\cdot x^{-4} = 4x^2$. Divide: $\\frac{4x^2}{2x^2} = 2$. Since $x^0 = 1$, the answer is $2$.'
          },
          {
            question: 'If $\\sqrt[3]{x} = 4$, what is $x^{2/3}$?',
            options: ['$2$', '$8$', '$16$', '$64$'],
            correctAnswer: 2,
            explanation: '$x^{1/3} = 4$, so $x^{2/3} = (x^{1/3})^2 = 4^2 = 16$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A radioactive sample of 640 mg has a half-life of 8 hours. How much remains after 24 hours?',
            options: ['$320$ mg', '$160$ mg', '$80$ mg', '$40$ mg'],
            correctAnswer: 2,
            explanation: '24 hours = 3 half-lives. $640 \\to 320 \\to 160 \\to 80$ mg.'
          },
          {
            question: '$\\frac{6 \\times 10^9}{2 \\times 10^{-3}}$ equals:',
            options: ['$3 \\times 10^{6}$', '$3 \\times 10^{12}$', '$3 \\times 10^{-27}$', '$12 \\times 10^{6}$'],
            correctAnswer: 1,
            explanation: '$6/2 = 3$ and $10^{9-(-3)} = 10^{12}$. Answer: $3 \\times 10^{12}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge — enter a number for each.** 🧮

1) $4^{3/2}$ = ?

2) Rationalize: $\\frac{10}{\\sqrt{5}} = a\\sqrt{5}$. What is $a$?

3) If an investment grows by 20% per year, by what factor has it grown after 3 years? (Give answer as a decimal, e.g., 1.728)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '2', '1.728'],
        hint1: '$4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$.',
        hint2: '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$. So $a = 2$.',
        hint3: '$(1.20)^3 = 1.728$.',
        explanation: '1) $8$. 2) $a = 2$. 3) $(1.2)^3 = 1.728$.'
      }
    },
    {
      id: 'sat-exp7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify each statement as TRUE or FALSE.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(-5)^0 = 1$',
            options: ['TRUE', 'FALSE']
          },
          {
            label: '$2^3 \\cdot 3^2 = 6^5$',
            options: ['TRUE', 'FALSE']
          },
          {
            label: '$x^{-1} + x^{-1} = 2x^{-1}$',
            options: ['TRUE', 'FALSE']
          }
        ],
        correctAnswers: ['TRUE', 'FALSE', 'TRUE'],
        hint1: 'Any nonzero number raised to the 0 power equals 1.',
        hint2: '$2^3 \\cdot 3^2 = 8 \\cdot 9 = 72$, but $6^5 = 7776$. Not equal! You can only add exponents when bases are the same.',
        hint3: 'Like terms: $\\frac{1}{x} + \\frac{1}{x} = \\frac{2}{x} = 2x^{-1}$. This is addition of like terms, not an exponent rule.',
        explanation: '1) TRUE. 2) FALSE — different bases cannot be combined by adding exponents. 3) TRUE — adding like terms.'
      }
    },
    {
      id: 'sat-exp7-final',
      type: 'text' as const,
      content: `
## You're Ready! 🎯

**What you've mastered:**
- ✅ All 7 exponent laws (product, quotient, power, zero, negative, products/quotients of powers)
- ✅ Fractional exponents and radical ↔ exponent conversion
- ✅ Simplifying radicals and rationalizing denominators
- ✅ Solving exponential equations by matching bases
- ✅ Scientific notation — converting and computing
- ✅ Growth, decay, half-life, and doubling-time models

**Next steps:**
- Practice timed sets of 5 questions in under 5 minutes.
- Pay special attention to negative and fractional exponents — they appear most frequently.
- On test day, if an exponent problem feels hard, try plugging in small numbers to test the answer choices.

Good luck on the SAT! 🚀
      `
    }
  ]
}
