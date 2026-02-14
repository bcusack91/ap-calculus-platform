export const chemSolutionsSolubilityPart3Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss3-intro',
      type: 'text' as const,
      content: `
# 🔬 Dilution

**Part 3 of 7 — $M_1V_1 = M_2V_2$, Preparing Solutions, and Serial Dilutions**

In the laboratory, concentrated stock solutions are routinely diluted to lower concentrations. The dilution equation is one of the most frequently used formulas in chemistry — and a favorite on the AP exam.
      `
    },
    {
      id: 'ss3-dilution-equation',
      type: 'text' as const,
      content: `
## The Dilution Equation

When you dilute a solution, you add more solvent. The **amount of solute stays the same** — only the volume changes.

Since moles of solute before = moles of solute after:

$$M_1V_1 = M_2V_2$$

where:
- $M_1$ = initial molarity (concentrated)
- $V_1$ = initial volume
- $M_2$ = final molarity (diluted)
- $V_2$ = final volume

### Why It Works

$$\\text{moles} = M \\times V$$

Since moles don\'t change: $M_1V_1 = M_2V_2$

### Important Notes

- $V_1$ and $V_2$ must be in the **same units** (both mL or both L)
- $M_2 < M_1$ always (dilution lowers concentration)
- $V_2 > V_1$ always (you\'re adding solvent)
- The volume of solvent added = $V_2 - V_1$
      `
    },
    {
      id: 'ss3-dilution-example',
      type: 'text' as const,
      content: `
## Worked Example

**Problem:** How would you prepare 500.0 mL of 0.100 M HCl from a 12.0 M HCl stock solution?

**Step 1:** Identify knowns.
- $M_1 = 12.0$ M, $M_2 = 0.100$ M, $V_2 = 500.0$ mL, $V_1 = ?$

**Step 2:** Solve for $V_1$.

$$V_1 = \\frac{M_2V_2}{M_1} = \\frac{(0.100)(500.0)}{12.0} = 4.17 \\text{ mL}$$

**Step 3:** Procedure.
1. Measure 4.17 mL of 12.0 M HCl using a pipette
2. **Add the acid to water** (never water to acid — exothermic!)
3. Add water to bring the total volume to 500.0 mL in a volumetric flask
4. Mix thoroughly

### Safety Note ⚠️

Always add **acid to water** ("Do as you oughta — add acid to water"). Adding water to concentrated acid can cause violent spattering due to the large heat of dilution.
      `
    },
    {
      id: 'ss3-dilution-quiz',
      type: 'multiple-choice' as const,
      content: `
**Dilution Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When a solution is diluted, which quantity remains constant?',
            options: [
              'Molarity',
              'Volume',
              'Moles of solute',
              'Concentration'
            ],
            correctAnswer: 2,
            explanation: 'Dilution only adds solvent — the moles of solute remain unchanged. This is why $M_1V_1 = M_2V_2$: both sides equal the moles of solute.'
          },
          {
            question: 'What volume of 6.0 M NaOH is needed to prepare 300.0 mL of 0.50 M NaOH?',
            options: [
              '10 mL',
              '25 mL',
              '50 mL',
              '100 mL'
            ],
            correctAnswer: 1,
            explanation: '$V_1 = \\frac{M_2V_2}{M_1} = \\frac{(0.50)(300.0)}{6.0} = 25$ mL.'
          },
          {
            question: '50.0 mL of 2.00 M KCl is diluted to 200.0 mL. What is the new concentration?',
            options: [
              '0.250 M',
              '0.500 M',
              '1.00 M',
              '8.00 M'
            ],
            correctAnswer: 1,
            explanation: '$M_2 = \\frac{M_1V_1}{V_2} = \\frac{(2.00)(50.0)}{200.0} = 0.500$ M.'
          }
        ]
      }
    },
    {
      id: 'ss3-serial-dilution',
      type: 'text' as const,
      content: `
## Serial Dilutions

A **serial dilution** is a series of sequential dilutions, each using the output of the previous step as input. This technique is used to:

- Create very low concentrations from stock solutions
- Prepare a set of standards for calibration curves
- Reduce concentration by orders of magnitude

### How It Works

If each step dilutes by a factor of 10 (e.g., 1 mL into 9 mL):

| Step | Dilution Factor | Cumulative Concentration |
|------|----------------|------------------------|
| Stock | — | $1.0$ M |
| 1 | 1/10 | $0.10$ M |
| 2 | 1/10 | $0.010$ M |
| 3 | 1/10 | $0.0010$ M |

### General Formula

After $n$ serial dilutions, each with dilution factor $f$:

$$C_n = C_0 \\times f^n$$

For a 1:10 dilution ($f = 0.1$), after 3 steps:

$$C_3 = 1.0 \\times (0.1)^3 = 0.001 \\text{ M} = 1 \\times 10^{-3} \\text{ M}$$
      `
    },
    {
      id: 'ss3-serial-dilution-drill',
      type: 'input-boxes' as const,
      content: `
**Dilution Calculations** 🧮

1) What volume (in mL) of 16.0 M HNO₃ is needed to prepare 1.00 L of 0.400 M HNO₃?

2) If 25.0 mL of 0.800 M CuSO₄ is diluted to 100.0 mL, what is the final molarity? (to 3 significant figures)

3) A 1.00 M stock solution undergoes three serial 1:10 dilutions. What is the final concentration? (answer in M, use scientific notation as a × 10⁻³ — enter just the coefficient $a$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25.0', '0.200', '1.00', '25.00', '0.2000', '0.20', '1.000', '1.0'],
        hint1: '$V_1 = M_2V_2/M_1 = (0.400)(1000)/(16.0)$.',
        hint2: '$M_2 = M_1V_1/V_2 = (0.800)(25.0)/(100.0)$.',
        hint3: 'After 3 dilutions of 1:10: $C = 1.00 \\times (0.1)^3 = 1.00 \\times 10^{-3}$ M.',
        explanation: '1) $V_1 = (0.400)(1000)/(16.0) = 25.0$ mL. 2) $M_2 = (0.800)(25.0)/(100.0) = 0.200$ M. 3) $C = 1.00 \\times (0.1)^3 = 1.00 \\times 10^{-3}$ M, so $a = 1.00$.'
      }
    },
    {
      id: 'ss3-preparing-solutions',
      type: 'text' as const,
      content: `
## Preparing Solutions in the Lab

### From a Solid Solute

To prepare 250.0 mL of 0.200 M Na₂CO₃ ($M = 105.99$ g/mol):

1. **Calculate mass needed:** $m = n \\times M_{\\text{molar}} = (0.200 \\times 0.2500) \\times 105.99 = 5.30$ g
2. **Weigh** 5.30 g of Na₂CO₃ on an analytical balance
3. **Transfer** to a 250 mL volumetric flask
4. **Add water** to dissolve, then fill to the 250 mL mark
5. **Mix** by inverting several times

### From a Stock Solution (Dilution)

To prepare 100.0 mL of 0.0500 M Na₂CO₃ from the 0.200 M solution:

$$V_1 = \\frac{(0.0500)(100.0)}{0.200} = 25.0 \\text{ mL}$$

Pipette 25.0 mL of stock into a 100 mL volumetric flask and add water to the mark.
      `
    },
    {
      id: 'ss3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Dilution and Preparation — Key Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When diluting concentrated sulfuric acid, you should',
            options: ['Add water to acid', 'Add acid to water', 'Mix simultaneously', 'Heat the acid first']
          },
          {
            label: 'If you dilute 10.0 mL of 1.00 M solution to 100.0 mL, the dilution factor is',
            options: ['2', '5', '10', '100']
          },
          {
            label: 'A volumetric flask is used to',
            options: ['Measure mass accurately', 'Prepare a solution of exact volume', 'Heat solutions', 'Filter precipitates']
          },
          {
            label: 'In $M_1V_1 = M_2V_2$, if $V_2$ doubles while $M_1$ and $V_1$ stay the same, then $M_2$',
            options: ['Doubles', 'Is halved', 'Stays the same', 'Quadruples']
          }
        ],
        correctAnswers: ['Add acid to water', '10', 'Prepare a solution of exact volume', 'Is halved'],
        hint1: 'Remember: "Do as you oughta — add acid to water."',
        hint2: 'Dilution factor = $V_2/V_1 = 100.0/10.0$.',
        hint3: 'Volumetric flasks have a precise volume marking on the neck.',
        explanation: 'Always add acid to water for safety. Dilution factor = 100/10 = 10. Volumetric flasks are calibrated to contain an exact volume. If $V_2$ doubles, $M_2 = M_1V_1/(2V_2)$, so $M_2$ is halved.'
      }
    },
    {
      id: 'ss3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Dilution** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs to prepare 2.00 L of 0.150 M NaCl. How many grams of NaCl ($M = 58.44$ g/mol) should be weighed out?',
            options: [
              '4.38 g',
              '8.77 g',
              '17.5 g',
              '58.4 g'
            ],
            correctAnswer: 2,
            explanation: 'Moles: $n = 0.150 \\times 2.00 = 0.300$ mol. Mass: $m = 0.300 \\times 58.44 = 17.5$ g.'
          },
          {
            question: '100.0 mL of 0.500 M HCl is mixed with 100.0 mL of water. What is the resulting molarity?',
            options: [
              '0.125 M',
              '0.250 M',
              '0.500 M',
              '1.00 M'
            ],
            correctAnswer: 1,
            explanation: '$M_2 = M_1V_1/V_2 = (0.500)(100.0)/(200.0) = 0.250$ M. The total volume is 200.0 mL.'
          }
        ]
      }
    }
  ]
}
