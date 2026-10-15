export const chemElectrolyticCellsFaradayPart5Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `# 🏭 Electroplating and Faraday Problems

**Part 5 of 7 — Electroplating and Working Backward**

---

### Topics in This Part

| Section |
|---------|
| 🔋 Electroplating |
| Setup |
| How It Works |
| Controlling Thickness |
| 🔁 Working Backward: Time, Current and Ion Charge |

> 🔑 **Key Concept:** The CED lists five quantities Faraday's law links: electrons transferred, mass deposited or removed (as in electroplating), current, time, and the charge of the ion (9.11.A.1). Any one can be the unknown.

---

### What You'll Master in Part 5
- Describe what happens at each electrode during electroplating
- Solve for time or current needed to plate a given mass
- Use plating data to find the charge on a metal ion`
    },
    {
      id: 'ef5-electroplating',
      type: 'text' as const,
      content: `
## 🔋 Electroplating

Electroplating is the process of coating an object with a thin layer of metal using electrolysis.


---

### Setup

- **Cathode**: the object to be plated (e.g., a spoon)
- **Anode**: a piece of the plating metal (e.g., silver)
- **Electrolyte**: a solution of the plating metal ions (e.g., $AgNO_{3}$)

> 🔑 **Key Rule:** The object you want to coat is ALWAYS the cathode (where metal deposits). The plating metal is the anode (where it dissolves).


---

### How It Works

1. At the anode: plating metal dissolves → $\\text{Ag}(s) \\rightarrow \\text{Ag}^+(aq) + e^-$
2. $Ag^{+}$ ions migrate through solution
3. At the cathode: metal ions deposit → $\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s)$

The object at the cathode gets coated with a layer of silver!


---

### Controlling Thickness

The thickness of the coating depends on:
- **Current** ($I$): higher current → faster deposition
- **Time** ($t$): longer time → thicker coating
- **Faraday\'s law**: $m = ItM/(nF)$

> 💡 The mass the cathode gains equals the mass the plating-metal anode loses, because the same number of electrons passes through each electrode.
      `
    },
    {
      id: 'ef5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In electroplating, the object to be coated is placed at the:',
            options: [
              'Anode (where metal dissolves)',
              'Cathode (where metal deposits)',
              'Salt bridge (where ions flow)',
              'Electrolyte (in solution)'
            ],
            correctAnswer: 1,
            explanation: 'The object to be plated is the cathode — metal ions from solution are reduced and deposited onto its surface. At the anode, metal is oxidized and dissolves, which would remove metal from the object instead of coating it.'
          },
          {
            question: 'While a spoon is silver-plated with a silver-bar anode in AgNO₃(aq), what happens to the mass of the silver bar?',
            options: [
              'It increases, because Ag⁺ is reduced onto it',
              'It decreases, because Ag is oxidized to Ag⁺',
              'It stays the same, because the bar only conducts',
              'It increases, because nitrate deposits on it'
            ],
            correctAnswer: 1,
            explanation: 'The silver bar is the anode, so silver atoms are oxidized to $\\text{Ag}^{+}$ and dissolve, lowering its mass. Reduction, and the gain in mass, happens at the spoon (the cathode). Nitrate is a spectator ion.'
          },
          {
            question: 'The same current runs for the same time through two cells in series, one plating Ag from Ag⁺ and one plating Cu from Cu²⁺. How do the moles of metal deposited compare?',
            options: [
              'Equal moles of Ag and Cu are deposited',
              'Twice as many moles of Ag as Cu are deposited',
              'Twice as many moles of Cu as Ag are deposited',
              'The ratio depends on the molar masses of the metals'
            ],
            correctAnswer: 1,
            explanation: 'Both cells receive the same moles of electrons. Each $\\text{Ag}^{+}$ needs one electron and each $\\text{Cu}^{2+}$ needs two, so twice as many moles of silver are deposited. Molar mass matters for the masses, not the moles.'
          }
        ]
      }
    },
    {
      id: 'ef5-working-backward',
      type: 'text' as const,
      content: `
## 🔁 Working Backward: Time, Current and Ion Charge

The chain $q = It \\;\\rightarrow\\; \\text{mol } e^- = q/F \\;\\rightarrow\\; \\text{mol metal} = \\text{mol } e^-/n \\;\\rightarrow\\; \\text{mass}$ runs in either direction.

### Example 1 — How long?

> **Problem:** How many minutes does a 3.00 A current need to plate 1.00 g of silver ($\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$, 107.87 g/mol)?

| Step | Calculation | Result |
|------|-------------|--------|
| mol Ag | $1.00/107.87$ | 0.00927 mol |
| mol $e^-$ ($n = 1$) | $0.00927 \\times 1$ | 0.00927 mol |
| charge | $0.00927 \\times 96{,}485$ | 894 C |
| time | $t = q/I = 894/3.00$ | 298 s ≈ **4.97 min** |

### Example 2 — What is the ion's charge?

> **Problem:** Passing 0.800 A for 965 s through a solution of a chromium salt deposits 0.1387 g of Cr (52.00 g/mol). Find the charge on the chromium ion.

| Step | Calculation | Result |
|------|-------------|--------|
| charge | $(0.800)(965)$ | 772 C |
| mol $e^-$ | $772/96{,}485$ | 0.00800 mol |
| mol Cr | $0.1387/52.00$ | 0.00267 mol |
| electrons per Cr | $0.00800/0.00267$ | 3.00 → **$\\text{Cr}^{3+}$** |

> 🔑 **AP Connection:** Free-response items often give mass, current and time and ask for the identity or charge of the metal ion, or ask how the mass would change if the current or time changed.
      `
    },
    {
      id: 'ef5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Electroplating Calculations** 🧮

A piece of jewelry is silver-plated using $I = 2.0$ A for $20$ minutes.
$\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$, $n = 1$, $M_{\\text{Ag}} = 107.87$ g/mol

**1)** Total charge in coulombs?

**2)** Moles of Ag deposited? (to 3 significant figures)

**3)** Mass of Ag deposited in grams? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2400', '0.0249', '2.68'],
        hint1: '$q = It = (2.0)(20 \\times 60)$',
        hint2: '$\\text{mol } e^- = 2400/96485$. Since $n = 1$, mol Ag = mol $e^-$.',
        hint3: '$m = 0.0249 \\times 107.87$',
        explanation: '1) $q = 2.0 \\times 1200 = 2400$ C. 2) mol Ag = $2400/96485 = 0.0249$ mol. 3) $m = 0.0249 \\times 107.87 = 2.68$ g.'
      }
    },
    {
      id: 'ef5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Applications** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'To increase the thickness of an electroplated coating, a technician should:',
            options: [
              'Use a more concentrated electrolyte',
              'Increase current and/or time',
              'Lower the voltage so the metal deposits slowly',
              'Switch to a cathode made of a less reactive metal'
            ],
            correctAnswer: 1,
            explanation: 'By Faraday\'s law ($m = ItM/nF$), the mass deposited depends on current ($I$) and time ($t$). Increasing either deposits more metal and creates a thicker coating. Electrolyte concentration and the cathode\'s own metal do not appear in Faraday\'s law, and lowering the voltage reduces the current.'
          },
          {
            question: 'A current of 1.50 A for 1.00 h deposits 1.64 g of nickel (58.69 g/mol) from a solution of a nickel salt. What is the charge on the nickel ion?',
            options: [
              '+1',
              '+2',
              '+3',
              '+4'
            ],
            correctAnswer: 1,
            explanation: '$q = It = (1.50)(3600) = 5400$ C, or $5400/96{,}485 = 0.0560$ mol $e^-$. Moles of Ni = $1.64/58.69 = 0.0279$ mol. The ratio $0.0560/0.0279 \\approx 2$ electrons per Ni atom, so the ion is $\\text{Ni}^{2+}$.'
          }
        ]
      }
    }
  ]
}
