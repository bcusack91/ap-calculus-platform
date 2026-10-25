const gscPhFigure = {
  svg: '<svg viewBox="0 0 330 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.2" fill="none"><rect x="15" y="70" width="20" height="24"/><rect x="35" y="70" width="20" height="24"/><rect x="55" y="70" width="20" height="24"/><rect x="75" y="70" width="20" height="24"/><rect x="95" y="70" width="20" height="24"/><rect x="115" y="70" width="20" height="24"/><rect x="135" y="70" width="20" height="24"/><rect x="175" y="70" width="20" height="24"/><rect x="195" y="70" width="20" height="24"/><rect x="215" y="70" width="20" height="24"/><rect x="235" y="70" width="20" height="24"/><rect x="255" y="70" width="20" height="24"/><rect x="275" y="70" width="20" height="24"/><rect x="295" y="70" width="20" height="24"/></g><g class="fig-accent"><rect x="155" y="70" width="20" height="24" fill="none" stroke="currentColor" stroke-width="2.5"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="25" y="86">0</text><text x="45" y="86">1</text><text x="65" y="86">2</text><text x="85" y="86">3</text><text x="105" y="86">4</text><text x="125" y="86">5</text><text x="145" y="86">6</text><text x="165" y="86">7</text><text x="185" y="86">8</text><text x="205" y="86">9</text><text x="225" y="86">10</text><text x="245" y="86">11</text><text x="265" y="86">12</text><text x="285" y="86">13</text><text x="305" y="86">14</text></g><g stroke="currentColor" stroke-width="1"><line x1="65" y1="70" x2="65" y2="60"/><line x1="125" y1="70" x2="125" y2="60"/><line x1="185" y1="70" x2="185" y2="60"/><line x1="285" y1="70" x2="285" y2="60"/><line x1="85" y1="94" x2="85" y2="104"/><line x1="165" y1="94" x2="165" y2="104"/><line x1="245" y1="94" x2="245" y2="104"/></g><g font-size="10" fill="currentColor" text-anchor="middle"><text x="65" y="55">lemon juice</text><text x="125" y="55">black coffee</text><text x="185" y="55">baking soda</text><text x="285" y="55">bleach</text><text x="85" y="116">vinegar</text><text x="165" y="116">pure water</text><text x="245" y="116">ammonia</text></g><g font-size="11" fill="currentColor" text-anchor="middle" font-weight="bold"><text x="75" y="140">ACIDIC</text><text x="165" y="140">NEUTRAL</text><text x="255" y="140">BASIC</text></g><text x="165" y="22" font-size="12" fill="currentColor" text-anchor="middle">pH scale with approximate values</text></svg>',
  alt: 'A pH scale drawn as a strip of boxes numbered 0 through 14, with 7 highlighted in the middle. Substances are marked at their approximate pH: lemon juice at 2, vinegar at 3, black coffee at 5, pure water at 7, baking soda (dissolved in water) at 8, ammonia at 11 and bleach at 13. The left end is labeled acidic, the middle neutral and the right end basic.',
  caption: 'Figure 1. The pH scale. Lower numbers are more acidic; higher numbers are more basic.',
  size: 'lg' as const,
}

export const asvabGsChemistryPart5Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc5-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 5 of 7 — Acids, Bases and Chemical Reactions**

### The pH Scale

pH measures how **acidic** or **basic** (alkaline) a solution is, on a scale from **0 to 14**:

| pH | Meaning | Examples |
|:---:|:---|:---|
| 0–2 | strong acid | stomach acid, lemon juice, battery acid |
| 3–6 | weak acid | vinegar, soda pop, black coffee, rainwater (slightly acidic) |
| **7** | **neutral** | pure water |
| 8–10 | weak base | baking soda solution, seawater, antacid tablets |
| 11–14 | strong base | ammonia cleaner, bleach, drain cleaner (lye) |

> **Key Fact:** Each step on the pH scale is a **factor of 10**. A pH 3 solution is **10 times** as acidic as pH 4 and **100 times** as acidic as pH 5. Lower pH = **more** acidic.

### Acids vs bases

| | Acid | Base |
|:---|:---|:---|
| pH | **below 7** | **above 7** |
| Releases in water | hydrogen ions, $H^{+}$ | hydroxide ions, $OH^{-}$ |
| Taste / feel | sour (citrus, vinegar) | bitter; feels **slippery** (soap) |
| Litmus paper | turns **blue litmus red** | turns **red litmus blue** |
| Other | reacts with many metals to release hydrogen gas | many cleaners and soaps are bases |

**Memory hook: "BRA" = Blue turns Red in Acid.** (Never taste or touch lab chemicals to test them: indicators exist for a reason.)

### Neutralization

An acid and a base react to cancel each other out:

$$\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}$$

For example, hydrochloric acid plus sodium hydroxide gives table salt and water: $HCl + NaOH \\rightarrow NaCl + H_2O$. An antacid tablet (a mild base) neutralizes extra stomach acid, and baking soda is used to neutralize acid spills.`
    },
    {
      id: 'gsc5-figure-mc',
      type: 'multiple-choice' as const,
      figure: gscPhFigure,
      content: '**Read the pH scale.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'Which substance marked on the scale is the strongest base?',
            options: ['Bleach', 'Ammonia', 'Baking soda', 'Lemon juice'],
            correctAnswer: 0,
            explanation: 'Bases are above 7, and the higher the pH, the stronger the base: bleach at 13 is highest. Ammonia (11) and baking soda (8) are weaker bases, and lemon juice (2) is a strong acid, the opposite end of the scale.'
          },
          {
            question: 'Compared with pure water, how many times as acidic is the black coffee shown on the scale?',
            options: ['100 times', '2 times', '10 times', '20 times'],
            correctAnswer: 0,
            explanation: 'Coffee is at pH 5 and pure water at pH 7, two steps apart. Each step is a factor of 10, so $10 \\times 10 = 100$ times as acidic. "2 times" just subtracts the pH values, and 10 times would be only one step.'
          }
        ]
      }
    },
    {
      id: 'gsc5-reactions',
      type: 'text' as const,
      content: `## Chemical Reactions

In a reaction, **reactants** (on the left) turn into **products** (on the right):

$$\\text{reactants} \\rightarrow \\text{products}$$

### Conservation of mass

Atoms are **rearranged**, never created or destroyed. So the **total mass of the products equals the total mass of the reactants** in a closed container. If a burning log seems to "lose" mass, it is because gases escaped into the air.

### Balancing: count the atoms

A balanced equation has the **same number of each kind of atom on both sides**. You balance by changing **coefficients** (big numbers in front), never the subscripts.

**Worked example:** $H_2 + O_2 \\rightarrow H_2O$ has 2 O atoms on the left but 1 on the right.

1. Put a 2 in front of water: $H_2 + O_2 \\rightarrow 2H_2O$. Now O: 2 = 2, but H: 2 on the left, 4 on the right.
2. Put a 2 in front of hydrogen: $2H_2 + O_2 \\rightarrow 2H_2O$. H: 4 = 4, O: 2 = 2. Balanced.

### Five reaction types

| Type | Pattern | Example |
|:---|:---|:---|
| **Synthesis** (combination) | $A + B \\rightarrow AB$ | iron + sulfur → iron sulfide |
| **Decomposition** | $AB \\rightarrow A + B$ | water split by electricity into hydrogen and oxygen |
| **Single replacement** | $A + BC \\rightarrow AC + B$ | zinc + hydrochloric acid → zinc chloride + hydrogen |
| **Double replacement** | $AB + CD \\rightarrow AD + CB$ | two salt solutions swap partners and a solid forms |
| **Combustion** | fuel + oxygen → carbon dioxide + water | burning methane, gasoline or wood |

### Speed, energy and catalysts

**Reactions go faster** with: higher **temperature**, higher **concentration**, more **surface area** (powder reacts faster than a lump), or a **catalyst**.

A **catalyst** speeds up a reaction **without being used up**; it lowers the energy needed to get the reaction started. **Enzymes** are the catalysts in living things, and a car's **catalytic converter** speeds up reactions that clean exhaust.

| | Exothermic | Endothermic |
|:---|:---|:---|
| Energy | **releases** heat (surroundings get warmer) | **absorbs** heat (surroundings get colder) |
| Examples | burning, a hand warmer, rusting (slowly) | an instant cold pack, baking bread, cooking an egg |

**Oxidation:** rusting is iron combining with oxygen (helped by water) to make iron oxide. Burning is a very fast oxidation.`
    },
    {
      id: 'gsc5-mc',
      type: 'multiple-choice' as const,
      content: '**Acids, bases and reactions.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A strip of blue litmus paper is dipped into a solution and turns red. What does that tell you?',
            options: ['The solution is an acid', 'The solution is a base', 'The solution is neutral', 'The solution is a metal'],
            correctAnswer: 0,
            explanation: 'Blue turns Red in Acid ("BRA"). A base would turn red litmus blue and leave blue litmus blue, and a neutral solution would not change either color.'
          },
          {
            question: 'What does a catalyst do in a chemical reaction?',
            options: ['It speeds up the reaction and is not used up', 'It is used up as the reaction speeds along', 'It slows the reaction so it can be controlled', 'It becomes one of the products of the reaction'],
            correctAnswer: 0,
            explanation: 'A catalyst lowers the energy needed to start the reaction, so the reaction runs faster, and the catalyst comes out unchanged at the end. It is not consumed, it does not slow reactions, and it does not become a product.'
          },
          {
            question: 'A hand warmer gets hot when you open it and shake it. Which word describes the reaction inside?',
            options: ['Exothermic', 'Endothermic', 'Neutralization', 'Decomposition'],
            correctAnswer: 0,
            explanation: 'A reaction that releases heat to its surroundings is exothermic (inside a hand warmer, iron powder oxidizes quickly). Endothermic reactions absorb heat and feel cold, like an instant cold pack. Neutralization and decomposition name reaction types, not the heat direction.'
          }
        ]
      }
    },
    {
      id: 'gsc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the reaction type.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '$2Na + Cl_2 \\rightarrow 2NaCl$',
            options: ['Synthesis', 'Decomposition', 'Single replacement', 'Combustion'],
            correctAnswer: 0
          },
          {
            label: '$2H_2O_2 \\rightarrow 2H_2O + O_2$',
            options: ['Synthesis', 'Decomposition', 'Double replacement', 'Combustion'],
            correctAnswer: 1
          },
          {
            label: '$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$',
            options: ['Synthesis', 'Decomposition', 'Single replacement', 'Combustion'],
            correctAnswer: 3
          },
          {
            label: '$Zn + 2HCl \\rightarrow ZnCl_2 + H_2$',
            options: ['Synthesis', 'Decomposition', 'Single replacement', 'Double replacement'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Synthesis', 'Decomposition', 'Combustion', 'Single replacement'],
        hint1: 'Two things becoming one is synthesis; one thing breaking into two is decomposition.',
        hint2: 'A fuel reacting with $O_2$ to make $CO_2$ and water is combustion.',
        hint3: 'One element pushing another out of a compound is single replacement.',
        explanation: 'Sodium and chlorine combine into one product: synthesis. Hydrogen peroxide breaks apart into water and oxygen: decomposition. Methane burns in oxygen to give carbon dioxide and water: combustion. Zinc takes the place of hydrogen in HCl and frees hydrogen gas: single replacement.'
      }
    },
    {
      id: 'gsc5-input',
      type: 'input-boxes' as const,
      content: `**Conservation and balancing.** ✍️

**1)** Fill in the blank to balance the equation: $\\_\\_\\, Mg + O_2 \\rightarrow 2MgO$. The coefficient in front of $Mg$ is:

**2)** In a sealed jar, 12 g of iron powder reacts completely with 5 g of sulfur. The mass of the iron sulfide produced, in grams:

**3)** In the reactants $CH_4 + 2O_2$, how many oxygen atoms are there in total?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '17', '4'],
        hint1: 'Count the Mg atoms on the right side: $2MgO$ has two.',
        hint2: 'Mass is conserved in a closed container.',
        hint3: 'The coefficient 2 multiplies both oxygen atoms in $O_2$.',
        explanation: '(1) $2MgO$ contains 2 Mg atoms (and 2 O atoms, matching $O_2$), so the left side needs $2Mg$. (2) Mass is conserved: $12 + 5 = 17$ g. (3) $2O_2$ means 2 molecules of 2 oxygen atoms each, so $2 \\times 2 = 4$.'
      }
    },
    {
      id: 'gsc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- pH runs **0–14**: **7 neutral**, below 7 **acid**, above 7 **base**; each step is **10 times**
- Acids: sour, release $H^{+}$, turn blue litmus red (**BRA**). Bases: bitter, slippery, release $OH^{-}$, turn red litmus blue
- **Acid + base → salt + water** (neutralization: antacids, baking soda on spills)
- **Mass is conserved**: atoms are rearranged, not created or destroyed; balance with **coefficients**
- Five types: synthesis, decomposition, single replacement, double replacement, **combustion** (fuel + $O_2$ → $CO_2$ + $H_2O$)
- Faster reactions: heat, concentration, surface area, **catalysts** (speed up, **not used up**; enzymes are biological catalysts)
- **Exothermic releases heat**, **endothermic absorbs heat**; rusting is slow oxidation

> **Up Next:** Part 6 — the traps GS chemistry questions are built from, and how to use your 48 seconds.`
    }
  ]
};
