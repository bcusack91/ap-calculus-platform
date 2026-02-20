export const mcatGenChemPart4Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc4-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 4 of 7 — Acids, Bases, pH & Buffers (ULTRA HIGH YIELD)**

### Definitions

| Theory | Acid | Base |
|--------|------|------|
| Arrhenius | Produces $H^+$ | Produces $OH^-$ |
| Bronsted-Lowry | Donates $H^+$ | Accepts $H^+$ |
| Lewis | Accepts $e^-$ pair | Donates $e^-$ pair |

### pH Calculations

$$\\text{pH} = -\\log[H^+] \\qquad \\text{pOH} = -\\log[OH^-]$$

$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25°C)$$

$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$$

### Henderson-Hasselbalch (Buffer Equation)

$$\\text{pH} = pK_a + \\log\\frac{[A^-]}{[HA]}$$

- At half-equivalence point: $[A^-] = [HA]$, so $\\text{pH} = pK_a$
- Buffers work best when pH is within $\\pm 1$ of $pK_a$`
    },
    {
      id: 'gc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acids, Bases & Buffers** 🎯',
      exercise: {
        questions: [
          {
            question: 'A weak acid has $K_a = 1.0 \\times 10^{-5}$. What is the pH of a 0.1 M solution?',
            options: ['3.0', '5.0', '2.0', '4.0'],
            correctAnswer: 0,
            explanation: '$[H^+] = \\sqrt{K_a \\cdot C} = \\sqrt{10^{-5} \\times 0.1} = \\sqrt{10^{-6}} = 10^{-3}$. pH = 3.0. This shortcut (valid when $C \\gg K_a$) is extremely high yield for the MCAT.'
          },
          {
            question: 'An acetic acid buffer ($pK_a = 4.76$) contains 0.2 M $\\text{CH}_3\\text{COOH}$ and 0.6 M $\\text{CH}_3\\text{COO}^-$. The pH is:',
            options: ['5.24', '4.76', '4.28', '5.76'],
            correctAnswer: 0,
            explanation: 'Henderson-Hasselbalch: pH = $4.76 + \\log(0.6/0.2) = 4.76 + \\log(3) \\approx 4.76 + 0.48 = 5.24$.'
          },
          {
            question: 'During titration of a weak acid with a strong base, the pH at the equivalence point is:',
            options: ['Greater than 7', 'Equal to 7', 'Less than 7', 'Equal to $pK_a$'],
            correctAnswer: 0,
            explanation: 'At equivalence, all HA is converted to $A^-$ (conjugate base), which hydrolyzes water to produce $OH^-$. So pH > 7.'
          }
        ]
      }
    },
    {
      id: 'gc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Weak acid pH: $\\text{pH} = \\frac{1}{2}(pK_a - \\log C)$ or use $[H^+] = \\sqrt{K_a C}$
- Henderson-Hasselbalch: memorize and practice
- Titration: weak acid + strong base → equivalence pH > 7
- At half-equivalence: pH = $pK_a$ (most common MCAT question!)`
    }
  ]
};
