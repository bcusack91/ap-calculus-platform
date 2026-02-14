export const chemAcidBaseTheoriesPhPart7Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Acid-Base Theories and pH**

This final part ties together all the concepts: Arrhenius, Brønsted-Lowry, and Lewis definitions, conjugate pairs, the pH scale, and strong acid/base calculations. These are high-yield AP exam topics!
      `
    },
    {
      id: 'ab7-summary',
      type: 'text' as const,
      content: `
## Complete Summary

### Three Acid-Base Theories

| Theory | Acid | Base | Scope |
|--------|------|------|-------|
| Arrhenius | Produces $H^+$ | Produces $OH^-$ | Aqueous only |
| Brønsted-Lowry | Proton donor | Proton acceptor | Any solvent |
| Lewis | e⁻ pair acceptor | e⁻ pair donor | Broadest |

### Key Equations

$$pH = -\\log[H^+] \\qquad pOH = -\\log[OH^-]$$

$$pH + pOH = 14 \\qquad K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$$

$$[H^+] = 10^{-pH} \\qquad [OH^-] = 10^{-pOH}$$

### Strong Acid/Base Rules

- Strong acids: $HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4$
- Strong bases: Group 1 hydroxides + $Ca(OH)_2, Sr(OH)_2, Ba(OH)_2$
- $[H^+] = C_{acid}$ for monoprotic strong acids
- $[OH^-] = nC_{base}$ where $n$ = number of $OH^-$ per formula unit
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
            question: 'Which reaction can ONLY be explained by the Lewis acid-base theory?',
            options: [
              '$HCl + NaOH \\rightarrow NaCl + H_2O$',
              '$NH_3 + HCl \\rightarrow NH_4Cl$',
              '$BF_3 + NH_3 \\rightarrow F_3B\\text{-}NH_3$',
              '$CH_3COOH + H_2O \\rightleftharpoons CH_3COO^- + H_3O^+$'
            ],
            correctAnswer: 2,
            explanation: '$BF_3 + NH_3$ involves no proton transfer. $BF_3$ accepts an electron pair (Lewis acid) from $NH_3$ (Lewis base). The other reactions all involve proton transfer.'
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

1) What is the pH of a solution made by mixing 100.0 mL of 0.15 M $HCl$ with 75.0 mL of 0.15 M $NaOH$? (2 decimal places)

2) A solution has a pH of 11.50. What is $[H^+]$? (Enter in scientific notation, e.g. 3.2e-12)

3) What volume (mL) of 0.20 M $NaOH$ is needed to exactly neutralize 50.0 mL of 0.10 M $H_2SO_4$? (Enter as whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.43', '3.2e-12', '50', '1.430', '0.000000', '0.0000'],
        hint1: 'Mol $H^+$ = $(0.100)(0.15)$; mol $OH^-$ = $(0.075)(0.15)$; excess $H^+$ in 175 mL.',
        hint2: '$[H^+] = 10^{-11.50}$.',
        hint3: '$H_2SO_4$ is diprotic: mol $H^+$ = $2(0.050)(0.10)$; set equal to mol $OH^-$ = $(V)(0.20)$.',
        explanation: '1) Mol $H^+$ = 0.015; mol $OH^-$ = 0.01125; excess $H^+$ = 0.00375 in 0.175 L; $[H^+] = 0.0214$ M; $pH = 1.67$. 2) $[H^+] = 10^{-11.50} = 3.16 \\times 10^{-12} \\approx 3.2 \\times 10^{-12}$ M. 3) Mol $H^+$ = $2(0.050)(0.10) = 0.010$; $V = 0.010/0.20 = 0.050$ L = 50 mL.'
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
            question: 'A student claims the pH of $10^{-15}$ M $HCl$ is 15. This is incorrect because:',
            options: [
              '$HCl$ doesn\'t dissociate at that concentration',
              'The pH scale only goes to 14',
              'The autoionization of water dominates at this concentration',
              'You need $K_a$ for this calculation'
            ],
            correctAnswer: 2,
            explanation: 'At $10^{-15}$ M, the $H^+$ from water autoionization ($10^{-7}$ M) overwhelmingly exceeds the acid contribution. The pH would be essentially 7.00 (very slightly below). The pH scale CAN go above 14, but that\'s not the issue here.'
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
            options: ['$HCl$', '$HF$', '$HBr$', '$HClO_4$']
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
        correctAnswers: ['$HF$', '25°C only', 'one proton', '14'],
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
            question: 'In the reaction $Fe^{3+}(aq) + 6H_2O(l) \\rightarrow [Fe(H_2O)_6]^{3+}$, $Fe^{3+}$ is classified as a:',
            options: [
              'Brønsted-Lowry acid',
              'Arrhenius acid',
              'Lewis acid',
              'Lewis base'
            ],
            correctAnswer: 2,
            explanation: '$Fe^{3+}$ accepts electron pairs from the lone pairs on water molecules. No proton transfer occurs, so only the Lewis definition applies. $Fe^{3+}$ is a Lewis acid.'
          }
        ]
      }
    }
  ]
}
