export const mcatSolutionsGasesPart2Data = {
  topicSlug: 'mcat-general-chemistry-solutions-gases-mcat',
  sections: [
    {
      id: 'st4-intro',
      type: 'text' as const,
      content: `# Solutions, Gases & Electrolysis

**Part 2 of 3 — Gas Laws & Electrochemistry Stoichiometry**

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

**Problem.** 6.54 g of zinc ($M = 65.4$ g/mol) reacts with excess HCl, and the $\\text{H}_2$ is collected dry at 27°C and 1.00 atm ($R = 0.0821$ L·atm/mol·K):

$$\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$$

- **(a)** How many moles of Zn react?
- **(b)** How many moles of $\\text{H}_2$ form?
- **(c)** What volume does that $\\text{H}_2$ occupy?

**(a) Moles of zinc.** $n = 6.54/65.4 = 0.100$ mol

**(b) Mole ratio.** One $\\text{H}_2$ forms per Zn, so the 0.100 mol from (a) gives 0.100 mol $\\text{H}_2$.

**(c) Volume.** Convert to kelvin, $T = 27 + 273 = 300$ K, then with 0.100 mol from (b):
$$V = \\frac{nRT}{P} = \\frac{0.100 \\times 0.0821 \\times 300}{1.00} = \\mathbf{2.46\\text{ L}}$$

## Dalton's Law of Partial Pressures

$$P_{\\text{total}} = P_A + P_B + P_C + \\cdots$$

Each gas in a mixture exerts its partial pressure independently, and each contributes in proportion to its mole fraction: $P_A = \\chi_A \\times P_{\\text{total}}$.

**MCAT application — gas collected over water:** the tube holds the gas plus water vapor, so $P_{\\text{gas}} = P_{\\text{atm}} - P_{\\text{H}_2\\text{O (vapor)}}$.

## Faraday's Law: Electrochemical Stoichiometry

In electrolysis, electric current drives non-spontaneous redox reactions. The amount of product depends on the charge passed.

$$\\text{moles of electrons} = \\frac{I \\times t}{F}$$

where $I$ = current (amperes), $t$ = time (seconds), $F = 96{,}485$ C/mol $\\approx 96{,}500$ C/mol.

$$\\text{moles of product} = \\frac{\\text{moles of electrons}}{n}$$

where $n$ = electrons required per atom/ion reduced or oxidized.

### Worked Example — Electroplating Copper

**Problem.** A current of 2.00 A passes for 1930 s through $\\text{CuSO}_4$ solution, plating copper: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$ ($M_{\\text{Cu}} = 63.5$ g/mol, $F \\approx 96{,}500$ C/mol).

- **(a)** How many moles of electrons pass through the cell?
- **(b)** How many moles of Cu deposit?
- **(c)** What mass of Cu is that?

**(a) Moles of electrons.**
$$\\text{mol } e^- = \\frac{2.00 \\times 1930}{96{,}500} = \\frac{3860}{96{,}500} = 0.0400\\text{ mol}$$

**(b) Moles of copper.** Each $\\text{Cu}^{2+}$ takes 2 electrons, so the 0.0400 mol from (a) gives:
$$\\text{mol Cu} = \\frac{0.0400}{2} = 0.0200\\text{ mol}$$

**(c) Mass of copper.** With 0.0200 mol from (b):
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
            yield: 'HIGH',
            explanation: `Boyle's law: $P_1V_1 = P_2V_2$. $P_2 = P_1V_1/V_2 = (2.0)(4.0)/1.0 = \\mathbf{8.0\\text{ atm}}$. 0.5 atm inverts the volume ratio, 2.0 atm leaves the pressure unchanged, and 4.0 atm only doubles the pressure; squeezing the gas to a quarter of its volume quadruples its pressure.`
          },
          {
            question: `A gas at 300 K and 1.0 atm occupies 5.0 L. What volume does it occupy at 600 K and 2.0 atm?`,
            options: [`1.25 L`, `5.0 L`, `10.0 L`, `20.0 L`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Combined gas law: $V_2 = V_1 \\times (P_1/P_2) \\times (T_2/T_1) = 5.0 \\times (1.0/2.0) \\times (600/300) = 5.0 \\times 0.5 \\times 2 = \\mathbf{5.0\\text{ L}}$. The pressure doubling and temperature doubling exactly cancel. The value 10.0 L applies only the temperature change; 20.0 L applies it but inverts the pressure ratio, and 1.25 L inverts the temperature ratio instead.`
          },
          {
            question: `A mixture contains 0.50 mol $\\text{N}_2$, 0.30 mol $\\text{O}_2$, and 0.20 mol $\\text{CO}_2$. Total pressure = 800 mmHg. What is the partial pressure of $\\text{O}_2$?`,
            options: [`160 mmHg`, `240 mmHg`, `400 mmHg`, `560 mmHg`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Mole fraction of $\\text{O}_2 = 0.30/(0.50+0.30+0.20) = 0.30$. $P_{\\text{O}_2} = 0.30 \\times 800 = \\mathbf{240\\text{ mmHg}}$. 160 mmHg is the partial pressure of $\\text{CO}_2$, 400 mmHg is that of $\\text{N}_2$, and 560 mmHg is everything except $\\text{O}_2$.`
          },
          {
            question: `How many moles of gas are in a 10.0 L container at 2.0 atm and 273°C?`,
            options: [`0.22 mol`, `0.45 mol`, `0.89 mol`, `1.79 mol`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$T = 273 + 273 = 546$ K, so $n = PV/RT = (2.0 \\times 10.0)/(0.0821 \\times 546) = 20.0/44.8 \\approx \\mathbf{0.45\\text{ mol}}$. The value 0.89 mol uses 273 K, forgetting to add 273 to the Celsius temperature; 0.22 mol halves the pressure, and 1.79 mol doubles the 273 K mistake.`
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

**Example:** Which effuses faster — $\\text{H}_2$ or $\\text{O}_2$, and by what factor? $\\text{rate}_{\\text{H}_2}/\\text{rate}_{\\text{O}_2} = \\sqrt{32/2} = \\sqrt{16} = 4$, so $\\text{H}_2$ effuses **4 times faster** than $\\text{O}_2$.

## Real Gases vs. Ideal Gases

Ideal gas assumptions (particles have no volume, no intermolecular forces) deviate at:
- **High pressure** (volume of particles becomes significant)
- **Low temperature** (attractive forces between molecules become significant)

**van der Waals equation:**
$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$

- $a$ accounts for intermolecular attractions: they pull particles back from the walls, so the measured pressure is LOWER than the ideal-gas value
- $b$ accounts for molecular volume: the particles take up space, so the measured volume is LARGER than the ideal-gas value

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
            options: [`38.6 s`, `386 s`, `1930 s`, `9650 s`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Moles $\\text{Ag} = 2.16/108 = 0.0200\\text{ mol}$. Since $n=1$ electron per Ag, mol $e^- = 0.0200$. Charge $= 0.0200 \\times 96{,}500 = 1930$ C. Time $= Q/I = 1930/5.00 = \\mathbf{386\\text{ s}}$. The value 1930 s stops at the charge in coulombs without dividing by the current, 9650 s multiplies by the current instead, and 38.6 s slips a decimal place.`
          },
          {
            question: `Gas A (molar mass 4 g/mol) and Gas B (molar mass 36 g/mol) are placed in adjacent chambers separated by a porous barrier. Which effuses faster, and by what factor?`,
            options: [
              `B; 3 times faster`,
              `A; 3 times faster`,
              `A; 9 times faster`,
              `B; 9 times faster`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\text{rate}_A/\\text{rate}_B = \\sqrt{M_B/M_A} = \\sqrt{36/4} = \\sqrt{9} = 3$. Gas A (lighter) effuses **3 times faster** than Gas B. A factor of 9 forgets the square root, and the heavier gas B is always the slower one.`
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
            yield: 'HIGH',
            explanation: `At **low pressure**, molecules are far apart (intermolecular forces negligible; molecular volume negligible relative to container). At **high temperature**, kinetic energy dominates over attractive forces. Both conditions minimize deviations from ideal behavior. High pressure crowds the molecules so their own volume matters, and low temperature lets attractions take hold, so every option containing either one moves the gas away from ideal.`
          }
        ]
      }
    },
    {
      id: 'st4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Ideal gas law.** $PV = nRT$ with $R = 0.0821$ L·atm/mol·K and $T$ in kelvin; for fixed $n$, $P_1V_1/T_1 = P_2V_2/T_2$.
- **Dalton's law.** Partial pressures add up to the total, and each gas contributes $P_i = \\chi_i P_{\\text{total}}$.
- **Graham's law.** $\\text{rate}_A/\\text{rate}_B = \\sqrt{M_B/M_A}$: the lighter gas effuses faster.
- **Faraday's law.** mol $e^- = It/F$; divide by the electrons each ion gains or loses to get mol of product.

**Common traps**

- **Celsius in gas laws.** Gas-law temperatures are in kelvin: warming 27°C to 54°C takes 300 K to 327 K, not double.
- **Wet gas pressure.** For a gas collected over water, subtract the water's vapor pressure from the total first.
- **Forgetting the square root.** A 16-fold mass ratio gives only a 4-fold rate ratio, and the heavier gas is the slower one.
- **Backwards real-gas deviations.** Attractions make real $P$ lower than ideal, and particle volume makes real $V$ larger, not the reverse.
`
    }
  ]
};
