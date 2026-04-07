export const chemElectrolyticCellsFaradayPart5Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `
# 🏭 Electroplating and Industrial Applications

**Part 5 of 7 — Real-World Electrolysis**

Electrolysis has enormous industrial importance. From electroplating jewelry to producing aluminum, these applications demonstrate the practical power of electrochemistry.
      `
    },
    {
      id: 'ef5-electroplating',
      type: 'text' as const,
      content: `
## Electroplating

Electroplating is the process of coating an object with a thin layer of metal using electrolysis.

### Setup

- **Cathode**: the object to be plated (e.g., a spoon)
- **Anode**: a piece of the plating metal (e.g., silver)
- **Electrolyte**: a solution of the plating metal ions (e.g., AgNO₃)

### How It Works

1. At the anode: plating metal dissolves → $\\text{Ag}(s) \\rightarrow \\text{Ag}^+(aq) + e^-$
2. Ag⁺ ions migrate through solution
3. At the cathode: metal ions deposit → $\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s)$

The object at the cathode gets coated with a layer of silver!

### Controlling Thickness

The thickness of the coating depends on:
- **Current** ($I$): higher current → faster deposition
- **Time** ($t$): longer time → thicker coating
- **Faraday\'s law**: $m = ItM/(nF)$

### Common Plating Metals

| Metal | Application |
|-------|------------|
| Chrome | Car bumpers, faucets |
| Silver | Jewelry, silverware |
| Gold | Electronics, jewelry |
| Nickel | Corrosion protection |
| Zinc | Galvanization of steel |
      `
    },
    {
      id: 'ef5-industrial',
      type: 'text' as const,
      content: `
## Major Industrial Processes

### 1. Hall-Héroult Process (Aluminum Production)

$$2\\text{Al}_2\\text{O}_3(l) \\rightarrow 4\\text{Al}(l) + 3\\text{O}_2(g)$$

- Al₂O₃ is dissolved in molten cryolite ($\\text{Na}_3\\text{AlF}_6$) to lower the melting point
- Enormous current (100,000+ A!)
- Carbon anodes are consumed: $\\text{C} + \\text{O}^{2-} \\rightarrow \\text{CO}_2 + e^-$
- Produces ~65 million tonnes of Al per year worldwide

### 2. Chlor-Alkali Process

$$2\\text{NaCl}(aq) + 2\\text{H}_2\\text{O}(l) \\rightarrow \\text{Cl}_2(g) + \\text{H}_2(g) + 2\\text{NaOH}(aq)$$

- Produces three valuable products: chlorine, hydrogen, and sodium hydroxide
- Membrane cell separates products
- Uses aqueous NaCl (brine)

### 3. Electrorefining of Copper

- Impure Cu = anode; pure Cu = cathode
- Cu²⁺ from impure anode deposits as pure Cu on cathode
- Impurities fall to the bottom ("anode mud") — contains Ag, Au, Pt!
- Produces 99.99% pure copper for electrical wiring
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
              'Salt bridge',
              'In the electrolyte solution'
            ],
            correctAnswer: 1,
            explanation: 'The object to be plated is the cathode — metal ions from solution are reduced and deposited onto its surface.'
          },
          {
            question: 'In electrorefining of copper, impure Cu is the:',
            options: [
              'Cathode — impure Cu is purified by reduction',
              'Anode — impure Cu dissolves and pure Cu deposits at cathode',
              'Electrolyte',
              'Salt bridge'
            ],
            correctAnswer: 1,
            explanation: 'Impure Cu is the anode: it dissolves (oxidizes) into solution. Cu²⁺ ions then deposit as pure Cu on the cathode. Noble metal impurities fall as "anode mud."'
          },
          {
            question: 'The Hall-Héroult process produces aluminum from:',
            options: [
              'Aqueous AlCl₃',
              'Molten Al₂O₃ dissolved in cryolite',
              'Solid aluminum ore directly',
              'Aqueous Al₂(SO₄)₃'
            ],
            correctAnswer: 1,
            explanation: 'Al₂O₃ cannot be electrolyzed from aqueous solution (water would be reduced instead). It is dissolved in molten cryolite (Na₃AlF₆) to lower the melting point from 2072°C to ~960°C.'
          }
        ]
      }
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
      id: 'ef5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Industrial Electrolysis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In electroplating, the anode is made of',
            options: ['the object to be plated', 'the plating metal', 'platinum', 'graphite']
          },
          {
            label: 'The chlor-alkali process electrolyzes',
            options: ['molten NaCl', 'aqueous NaCl (brine)', 'solid NaCl', 'NaOH solution']
          },
          {
            label: 'Aluminum cannot be produced from aqueous solution because',
            options: ['Al is too expensive', 'water would be reduced instead of Al³⁺', 'Al₂O₃ does not dissolve in water', 'the voltage is too low']
          },
          {
            label: 'In copper electrorefining, the anode mud contains',
            options: ['copper oxide', 'aluminum', 'precious metals (Ag, Au, Pt)', 'salt']
          }
        ],
        correctAnswers: ['the plating metal', 'aqueous NaCl (brine)', 'water would be reduced instead of Al³⁺', 'precious metals (Ag, Au, Pt)'],
        hint1: 'The anode dissolves to provide metal ions for plating.',
        hint2: 'The chlor-alkali process uses dissolved salt.',
        hint3: 'Al³⁺ has E° = −1.66 V, far below water (−0.83 V).',
        explanation: 'Anode = plating metal (dissolves). Chlor-alkali uses brine. Al³⁺ cannot be reduced from water (E° too negative). Anode mud contains noble metals that do not dissolve.'
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
              'Use a stronger electrolyte',
              'Increase current and/or time',
              'Decrease the voltage',
              'Use a smaller cathode'
            ],
            correctAnswer: 1,
            explanation: 'By Faraday\'s law ($m = ItM/nF$), the mass deposited depends on current ($I$) and time ($t$). Increasing either deposits more metal and creates a thicker coating.'
          },
          {
            question: 'Why does the Hall-Héroult process use carbon anodes?',
            options: [
              'Carbon is the cheapest conductor',
              'Carbon reacts with O²⁻ ions, reducing the required voltage',
              'Carbon does not conduct electricity',
              'Carbon is required for Al production'
            ],
            correctAnswer: 1,
            explanation: 'Carbon anodes react with O²⁻ to form CO₂, which is less energy-intensive than producing pure O₂. This reduces the overall voltage needed, saving energy. The carbon anodes are consumed and must be replaced.'
          }
        ]
      }
    }
  ]
}
