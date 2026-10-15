export const chemAcidBaseTheoriesPhPart7Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Acid-Base Theories and pH**

---

### Everything Comes Together

| Topic | Key Equation or Concept |
|-------|------------------------|
| Acid-base models | Arrhenius ⊂ Brønsted-Lowry (the AP model) |
| Acid strength | A more stable conjugate base means a stronger acid |
| pH/pOH | $pH + pOH = 14$ |
| Strong acids | $[H^+]$ = concentration (complete dissociation) |
| Conjugate pairs | Acid → conjugate base + $H^+$ |
| $K_w$ | $[H^+][OH^-] = 1.0 \\times 10^{-14}$ at 25°C |

> 🔑 **Why this matters:** This review mirrors the AP exam format — expect questions that require you to connect theory, calculations, and conceptual reasoning in a single problem.

---

### What You'll Master in Part 7
- Tackling AP-style multiple choice across all acid-base topics
- Writing free-response explanations using proper chemistry terminology
- Identifying common AP traps and avoiding them`
    },
    {
      id: 'ab7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Summary

### Acid-Base Models

| Model | Acid | Base | Scope |
|-------|------|------|-------|
| Arrhenius | Produces $H^+$ | Produces $OH^-$ | Aqueous only |
| Brønsted-Lowry | Proton donor | Proton acceptor | The model used on the AP exam |

### Structure and Strength

- Strong acids have very weak conjugate bases, stabilized by electronegativity, inductive effects, or resonance.
- Oxyacids: more O atoms or a more electronegative central atom → stronger acid.


---

### Key Equations

$$\\boxed{pH = -\\log[H^+] \\qquad pOH = -\\log[OH^-]}$$

$$\\boxed{pH + pOH = 14 \\qquad K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}}$$

$$[H^+] = 10^{-pH} \\qquad [OH^-] = 10^{-pOH}$$


---

### Strong Acid/Base Rules

- Strong acids: $HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4$
- Strong bases: Group 1 hydroxides + $Ca(OH)_2, Sr(OH)_2, Ba(OH)_2$
- $[H^+] = C_{acid}$ for monoprotic strong acids
- $[OH^-] = nC_{base}$ where $n$ = number of $OH^-$ per formula unit

> 🔑 **Strong = complete dissociation.** No $K_a$ or $K_b$ needed — just use the concentration directly.
      `
    },
    {
      id: 'ab7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.0050 M solution of $Ba(OH)_2$ has a pH of:',
            options: [
              '2.00',
              '2.30',
              '11.70',
              '12.00'
            ],
            correctAnswer: 3,
            explanation: '$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$. $[OH^-] = 2(0.0050) = 0.010$ M. $pOH = -\\log(0.010) = 2.00$. $pH = 14 - 2.00 = 12.00$.'
          },
          {
            question: 'Which reaction can be described by the Brønsted-Lowry model but NOT by the Arrhenius model?',
            options: [
              '$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$',
              '$KOH(aq) \\rightarrow K^+(aq) + OH^-(aq)$',
              '$NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s)$',
              '$HNO_3(aq) \\rightarrow H^+(aq) + NO_3^-(aq)$'
            ],
            correctAnswer: 2,
            explanation: 'In the gas-phase reaction of $NH_3$ with HCl, a proton moves from HCl to $NH_3$, but no water is present and no $OH^-$ forms, so only the Brønsted-Lowry model describes it. The other three involve $H^+$ or $OH^-$ in water, which the Arrhenius model also covers.'
          },
          {
            question: 'The conjugate acid of $HPO_4^{2-}$ is:',
            options: [
              '$PO_4^{3-}$',
              '$H_2PO_4^-$',
              '$H_3PO_4$',
              '$H^+$'
            ],
            correctAnswer: 1,
            explanation: 'To find the conjugate acid, add $H^+$: $HPO_4^{2-} + H^+ \\rightarrow H_2PO_4^-$. The charge goes from $-2$ to $-1$.'
          }
        ]
      }
    },
    {
      id: 'ab7-ap-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

**1)** What is the pH of a solution made by mixing 100.0 mL of 0.15 M $HCl$ with 75.0 mL of 0.15 M $NaOH$? (2 decimal places)

**2)** A solution has a pH of 11.50. What is $[H^+]$? (Enter in scientific notation, e.g. 4.7e-9)

**3)** What volume (mL) of 0.20 M $NaOH$ is needed to exactly neutralize 50.0 mL of 0.10 M $H_2SO_4$? (Enter as whole number)
      `,
      exercise: {
        questions: [{ question: '1)', answer: '1.67', acceptableAnswers: ['1.67'] }, { question: '2)', answer: '3.2e-12', acceptableAnswers: ['3.2e-12', '3.16e-12'] }, { question: '3)', answer: '50', acceptableAnswers: ['50'] }],
        hint1: 'Mol $H^+$ = $(0.100)(0.15)$; mol $OH^-$ = $(0.075)(0.15)$; excess $H^+$ in 175 mL.',
        hint2: '$[H^+] = 10^{-11.50}$.',
        hint3: '$H_2SO_4$ is diprotic: mol $H^+$ = $2(0.050)(0.10)$; set equal to mol $OH^-$ = $(V)(0.20)$.',
        explanation: '1) Mol $H^+$ = 0.015; mol $OH^-$ = 0.01125; excess $H^+$ = 0.00375 in 0.175 L; $[H^+] = 0.0214$ M; $pH = -\\log(0.0214) = 1.67$. 2) $[H^+] = 10^{-11.50} = 3.16 \\times 10^{-12} \\approx 3.2 \\times 10^{-12}$ M. 3) Mol $H^+$ = $2(0.050)(0.10) = 0.010$; $V = 0.010/0.20 = 0.050$ L = 50 mL.'
      }
    },
    {
      id: 'ab7-ap-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Water is described as amphoteric because it:',
            options: [
              'Can dissolve both acids and bases',
              'Has a pH of exactly 7',
              'Can act as either a proton donor or acceptor',
              'Can exist as solid, liquid, or gas'
            ],
            correctAnswer: 2,
            explanation: 'Amphoteric means water can act as a Brønsted-Lowry acid (donate $H^+$) or base (accept $H^+$). With $HCl$, water accepts $H^+$; with $NH_3$, water donates $H^+$.'
          },
          {
            question: 'Which acid is the strongest?',
            options: [
              'HOI',
              'HOBr',
              '$HClO_4$',
              'HOCl'
            ],
            correctAnswer: 2,
            explanation: 'Perchloric acid has four O atoms on Cl, so its conjugate base spreads the negative charge over four electronegative O atoms; it is a strong acid. HOCl, HOBr, and HOI each have a single O atom and are weak acids.'
          }
        ]
      }
    },
    {
      id: 'ab7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The 6 strong acids include all EXCEPT',
            options: ['HCl', 'HF', 'HBr', '$HClO_{4}$']
          },
          {
            label: 'pH + pOH = 14 is true at',
            options: ['all temperatures', '25°C only', 'high concentrations only', 'for strong acids only']
          },
          {
            label: 'A conjugate acid-base pair always differs by',
            options: ['one electron', 'one proton', 'two protons', 'one hydroxide ion']
          },
          {
            label: '$pK_w$ at 25°C equals',
            options: ['7', '14', '1.0e-14', '1.0e-7']
          }
        ],
        correctAnswers: ['HF', '25°C only', 'one proton', '14'],
        hint1: '$HF$ is a weak acid.',
        hint2: '$K_w$ varies with temperature; 14 is only at 25°C.',
        hint3: 'Conjugate pairs differ by exactly one $H^+$.',
        explanation: '$HF$ is weak (not one of the 6 strong acids). $pH + pOH = 14$ only at 25°C because $K_w = 10^{-14}$ only at that temperature. Conjugate pairs differ by one $H^+$. $pK_w = -\\log(10^{-14}) = 14$.'
      }
    },
    {
      id: 'ab7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Acid-Base Theories & pH** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.040 M $HI$ solution is diluted to double its volume. The new pH is:',
            options: [
              '1.10',
              '1.40',
              '1.70',
              '2.80'
            ],
            correctAnswer: 2,
            explanation: 'Doubling volume halves concentration: $[H^+] = 0.020$ M. $pH = -\\log(0.020) = 1.70$.'
          },
          {
            question: 'At 0°C, $K_w = 1.1 \\times 10^{-15}$. Pure water at 0°C has a pH of 7.47. Which statement is correct?',
            options: [
              'The water is basic, because its pH is above 7',
              'The water is acidic, because $K_w$ is small',
              'The water is neutral, because $[H_3O^+] = [OH^-]$',
              'The water contains no ions at 0°C'
            ],
            correctAnswer: 2,
            explanation: 'Autoionization always produces $H_3O^+$ and $OH^-$ in equal amounts, so pure water is neutral at every temperature. At 0°C, $K_w$ is smaller, so both concentrations are below $10^{-7}$ M and the neutral pH is above 7 (CED 8.1.A.4).'
          }
        ]
      }
    }
  ]
}
