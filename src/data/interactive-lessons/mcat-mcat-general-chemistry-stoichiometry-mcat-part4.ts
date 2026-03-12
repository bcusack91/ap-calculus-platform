export const mcatStoichiometryPart4Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st4-intro',
      type: 'text' as const,
      content: `# Stoichiometry & Chemical Reactions

**Part 4 of 5 — Gas Laws & Electrochemistry Stoichiometry**

## Ideal Gas Law

$$PV = nRT$$

$P$ = pressure (atm), $V$ = volume (L), $n$ = moles, $R = 0.0821$ L·atm/mol·K, $T$ = temperature (K)

**Always convert temperature to Kelvin:** $T(\\text{K}) = T(°\\text{C}) + 273$

### Combined Gas Law (fixed $n$)

$$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$$

### Special Cases

| Law | Fixed variables | Relationship |
|-----|----------------|-------------|
| Boyle's | $T, n$ | $P_1V_1 = P_2V_2$ |
| Charles's | $P, n$ | $V_1/T_1 = V_2/T_2$ |
| Gay-Lussac's | $V, n$ | $P_1/T_1 = P_2/T_2$ |
| Avogadro's | $P, T$ | $V \\propto n$ |

### Worked Example: Ideal Gas Law

What volume does 2.00 mol of gas occupy at 1.50 atm and 27°C?

$$V = \\frac{nRT}{P} = \\frac{2.00 \\times 0.0821 \\times 300}{1.50} = \\frac{49.26}{1.50} = \\mathbf{32.8\\text{ L}}$$

## Dalton's Law of Partial Pressures

$$P_{\\text{total}} = P_A + P_B + P_C + \\cdots$$

Each gas in a mixture exerts its partial pressure independently.

$$P_A = \\chi_A \\times P_{\\text{total}}$$

where $\\chi_A$ = mole fraction of gas A.

**MCAT application — Gas collected over water:**  
When collecting a gas by water displacement: $P_{\\text{gas}} = P_{\\text{atm}} - P_{\\text{H}_2\\text{O (vapor)}}$

## Faraday's Law: Electrochemical Stoichiometry

In electrolysis, electric current drives non-spontaneous redox reactions. The amount of product depends on the charge passed.

$$\\text{moles of electrons} = \\frac{I \\times t}{F}$$

where $I$ = current (amperes), $t$ = time (seconds), $F = 96{,}485$ C/mol $\\approx 96{,}500$ C/mol.

$$\\text{moles of product} = \\frac{\\text{moles of electrons}}{n}$$

where $n$ = electrons required per atom/ion reduced or oxidized.

**Example:** How many grams of Cu are deposited by passing 2.00 A for 1930 s through $\\text{CuSO}_4$ solution? ($\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$, $M_{\\text{Cu}} = 63.5$ g/mol)

$$\\text{mol } e^- = \\frac{2.00 \\times 1930}{96{,}500} = \\frac{3860}{96{,}500} = 0.0400\\text{ mol}$$

$$\\text{mol Cu} = \\frac{0.0400}{2} = 0.0200\\text{ mol}$$

$$\\text{mass Cu} = 0.0200 \\times 63.5 = \\mathbf{1.27\\text{ g}}$$
`
    },
    {
      id: 'st4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gas Laws** 🎯`,
      exercise: {
        questions: [
          {
            question: `A gas occupies 4.0 L at 2.0 atm. At constant temperature, what pressure is needed to compress it to 1.0 L?`,
            options: [`0.5 atm`, `2.0 atm`, `4.0 atm`, `8.0 atm`],
            correctAnswer: 3,
            explanation: `Boyle's law: $P_1V_1 = P_2V_2$. $P_2 = P_1V_1/V_2 = (2.0)(4.0)/1.0 = \\mathbf{8.0\\text{ atm}}$.`
          },
          {
            question: `A gas at 300 K and 1.0 atm occupies 5.0 L. What volume does it occupy at 600 K and 2.0 atm?`,
            options: [`2.5 L`, `5.0 L`, `10.0 L`, `20.0 L`],
            correctAnswer: 1,
            explanation: `Combined gas law: $V_2 = V_1 \\times (P_1/P_2) \\times (T_2/T_1) = 5.0 \\times (1.0/2.0) \\times (600/300) = 5.0 \\times 0.5 \\times 2 = \\mathbf{5.0\\text{ L}}$. The pressure doubling and temperature doubling exactly cancel.`
          },
          {
            question: `A mixture contains 0.50 mol $\\text{N}_2$, 0.30 mol $\\text{O}_2$, and 0.20 mol $\\text{CO}_2$. Total pressure = 800 mmHg. What is the partial pressure of $\\text{O}_2$?`,
            options: [`160 mmHg`, `240 mmHg`, `400 mmHg`, `560 mmHg`],
            correctAnswer: 1,
            explanation: `Mole fraction of $\\text{O}_2 = 0.30/(0.50+0.30+0.20) = 0.30$. $P_{\\text{O}_2} = 0.30 \\times 800 = \\mathbf{240\\text{ mmHg}}$.`
          },
          {
            question: `How many moles of gas are in a 10.0 L container at 2.0 atm and 273°C ($T = 546$ K)?`,
            options: [`0.22 mol`, `0.45 mol`, `0.89 mol`, `1.79 mol`],
            correctAnswer: 1,
            explanation: `$n = PV/RT = (2.0 \\times 10.0)/(0.0821 \\times 546) = 20.0/44.8 \\approx \\mathbf{0.45\\text{ mol}}$.`
          }
        ]
      }
    },
    {
      id: 'st4-electro',
      type: 'text' as const,
      content: `## Graham's Law of Effusion

The rate at which a gas escapes through a small orifice depends on its molar mass:

$$\\frac{\\text{rate}_A}{\\text{rate}_B} = \\sqrt{\\frac{M_B}{M_A}}$$

Lighter gases effuse faster. **MCAT application:** Compare rates of diffusion/effusion for two gases at the same T and P.

**Example:** Which effuses faster — $\\text{H}_2$ or $\\text{O}_2$? By what factor?

$$\\frac{\\text{rate}_{\\text{H}_2}}{\\text{rate}_{\\text{O}_2}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$$

$\\text{H}_2$ effuses **4 times faster** than $\\text{O}_2$.

## Real Gases vs. Ideal Gases

Ideal gas assumptions (particles have no volume, no intermolecular forces) deviate at:
- **High pressure** (volume of particles becomes significant)
- **Low temperature** (attractive forces between molecules become significant)

**van der Waals equation:**
$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$

- $a$ accounts for intermolecular attractions (reduces effective pressure)
- $b$ accounts for molecular volume (reduces available volume)

On the MCAT, you don't calculate with van der Waals, but you must identify when gases deviate from ideal behavior and in which direction.
`
    },
    {
      id: 'st4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Faraday's Law & Graham's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `How long must a current of 5.00 A flow to deposit 2.16 g of silver ($M = 108$ g/mol) from $\\text{AgNO}_3$ solution? ($\\text{Ag}^+ + e^- \\to \\text{Ag}$; $F = 96{,}500$ C/mol)`,
            options: [`193 s`, `386 s`, `965 s`, `3860 s`],
            correctAnswer: 3,
            explanation: `Moles $\\text{Ag} = 2.16/108 = 0.0200\\text{ mol}$. Since $n=1$ electron per Ag, mol $e^- = 0.0200$. Charge $= 0.0200 \\times 96{,}500 = 1930$ C. Time $= Q/I = 1930/5.00 = \\mathbf{386\\text{ s}}$. Wait — let me recheck: $t = 1930/5.00 = 386$ s. The correct answer is 386 s.`
          },
          {
            question: `Gas A (molar mass 4 g/mol) and Gas B (molar mass 64 g/mol) are placed in adjacent chambers separated by a porous barrier. Which effuses faster, and by what factor?`,
            options: [
              `B; 4 times faster`,
              `A; 4 times faster`,
              `A; 16 times faster`,
              `B; 16 times faster`
            ],
            correctAnswer: 1,
            explanation: `$\\text{rate}_A/\\text{rate}_B = \\sqrt{M_B/M_A} = \\sqrt{64/4} = \\sqrt{16} = 4$. Gas A (lighter) effuses **4 times faster** than Gas B.`
          },
          {
            question: `Under which conditions does a real gas most closely approach ideal behavior?`,
            options: [
              `High pressure and low temperature`,
              `High pressure and high temperature`,
              `Low pressure and high temperature`,
              `Low pressure and low temperature`
            ],
            correctAnswer: 2,
            explanation: `At **low pressure**, molecules are far apart (intermolecular forces negligible; molecular volume negligible relative to container). At **high temperature**, kinetic energy dominates over attractive forces. Both conditions minimize deviations from ideal behavior.`
          }
        ]
      }
    },
    {
      id: 'st4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- **Ideal gas law:** $PV = nRT$; $R = 0.0821$ L·atm/mol·K; always use Kelvin.
- **Combined gas law:** $P_1V_1/T_1 = P_2V_2/T_2$ (fixed $n$).
- **Dalton's law:** $P_{\\text{total}} = \\sum P_i$; $P_i = \\chi_i P_{\\text{total}}$.
- **Graham's law:** lighter gas effuses faster; rate ratio $= \\sqrt{M_B/M_A}$.
- **Real gases deviate** most from ideal at high $P$ and low $T$.
- **Faraday's law:** mol $e^- = It/F$; mol product = mol $e^-$ / $n$ electrons transferred per ion.
- **Gas collected over water:** subtract water vapor pressure to get gas pressure.
`
    }
  ]
};
