export const asvabGsChemistryPart4Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc4-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 4 of 7 — Compounds, Mixtures and Solutions**

### Sorting All Matter

Every sample of matter is either a **pure substance** or a **mixture**:

| Category | Kind | What it is | Examples |
|:---|:---|:---|:---|
| Pure substance | **Element** | one kind of atom | gold, oxygen gas, helium |
| Pure substance | **Compound** | two or more elements **chemically bonded** in a **fixed ratio** | water, table salt, carbon dioxide, sugar |
| Mixture | **Homogeneous** (a solution) | blended evenly; looks the same throughout | salt water, air, brass, vinegar |
| Mixture | **Heterogeneous** | parts you can see or pick apart | sand and gravel, salad, granite, oil and water |

### Compound vs mixture: the four tests

| Question | Compound | Mixture |
|:---|:---|:---|
| Are the parts chemically bonded? | **yes** | no |
| Is the ratio fixed? | **yes** (water is always 2 H to 1 O) | no (salt water can be weak or strong) |
| Do the parts keep their own properties? | **no**: the compound has new properties | **yes** |
| How do you separate it? | only by a **chemical** reaction | by **physical** means (filter, boil, magnet) |

The classic example: sodium is a soft metal that reacts violently with water, and chlorine is a poisonous green gas. Bonded together as **sodium chloride**, they make table salt, which you sprinkle on food. New substance, new properties: a **compound**.

## Solutions

A **solution** is a homogeneous mixture.

| Term | Meaning | In salt water |
|:---|:---|:---|
| **Solute** | the substance that gets dissolved | the salt |
| **Solvent** | the substance that does the dissolving | the water |
| **Concentrated / dilute** | a lot of solute / a little solute | strong / weak brine |
| **Saturated** | holds all the solute it can at that temperature | extra salt sits on the bottom |

**Water is called the "universal solvent"** because it dissolves more substances than any other common liquid. It does not dissolve everything: oil and water stay separate ("like dissolves like").

**Temperature and solubility:**

- Most **solids** dissolve **better in hot** water (sugar in hot tea vs iced tea).
- **Gases** dissolve **better in cold** water. A warm soda loses its fizz faster, and warm water holds less dissolved oxygen.`
    },
    {
      id: 'gsc4-bonds',
      type: 'text' as const,
      content: `## How Atoms Bond

| Bond | How it forms | Usually between | Examples |
|:---|:---|:---|:---|
| **Ionic** | one atom **gives** electrons to another; the + and − ions attract | a **metal** and a **nonmetal** | $NaCl$ (table salt), $CaO$ |
| **Covalent** | atoms **share** electrons | **two nonmetals** | $H_2O$, $CO_2$, $CH_4$ (methane) |

**Memory hook:** *ionic = "I give," covalent = "co-operate" (share).*

## Reading a Chemical Formula

- **Symbols** name the elements: $CO_2$ contains carbon and oxygen.
- A **subscript** (small number below) counts the atom just **before** it: $H_2O$ has 2 H and 1 O.
- No subscript means **1**.
- **Parentheses** multiply everything inside: $Ca(OH)_2$ has 1 Ca, 2 O and 2 H, so **5 atoms**.
- A **coefficient** (big number in front) multiplies the **whole formula**: $2H_2O$ means 2 water molecules, so 4 H and 2 O.

## Separating Mixtures

| Method | How it works | Example |
|:---|:---|:---|
| **Filtration** | a filter holds back undissolved solids | sand out of water, coffee grounds |
| **Evaporation** | the liquid is driven off, leaving the solid | salt left behind from seawater |
| **Distillation** | boil the mixture and **condense the vapor**; parts separate by boiling point | fresh water from seawater; refining crude oil |
| **Magnet** | pulls out iron-containing pieces | iron filings out of sand |

## Freezing-Point Depression: Why Salt Melts Ice

Dissolved particles get in the way of water molecules trying to lock into ice crystals. So a solution **freezes at a lower temperature** than pure water, and it also **boils at a higher temperature**.

| Everyday use | What the dissolved substance does |
|:---|:---|
| **Salt on icy roads** | salt water freezes below 0 °C, so ice melts even when the air is below freezing |
| **Antifreeze** in a car radiator | lowers the coolant's freezing point **and** raises its boiling point |
| **Salt in an ice-cream maker** | the salty ice water gets colder than 0 °C, cold enough to freeze the cream |

> **Key Fact:** Salt does **not** heat the ice. It **lowers the freezing point** of the water, so the ice melts at a temperature where pure water would stay frozen.`
    },
    {
      id: 'gsc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the matter.** 🔽 Choose the category for each sample.',
      exercise: {
        dropdowns: [
          {
            label: 'A bar of pure gold:',
            options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correctAnswer: 0
          },
          {
            label: 'Granite, with visible specks of different minerals:',
            options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correctAnswer: 3
          },
          {
            label: 'Sugar fully dissolved in a glass of water:',
            options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correctAnswer: 2
          },
          {
            label: 'Carbon dioxide gas:',
            options: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Element', 'Heterogeneous mixture', 'Homogeneous mixture', 'Compound'],
        hint1: 'One kind of atom is an element; different elements bonded in a fixed ratio is a compound.',
        hint2: 'If you can see the different parts, the mixture is heterogeneous.',
        hint3: 'A solution looks the same throughout: homogeneous.',
        explanation: 'Gold is a single element. Granite shows separate mineral grains, so it is a heterogeneous mixture. Dissolved sugar water looks the same everywhere: a homogeneous mixture (a solution). Carbon dioxide is carbon and oxygen bonded in a fixed 1 : 2 ratio, a compound.'
      }
    },
    {
      id: 'gsc4-input',
      type: 'input-boxes' as const,
      content: `**Count the atoms.** ✍️

**1)** How many hydrogen atoms are in one molecule of glucose, $C_6H_{12}O_6$?

**2)** How many atoms in total are in one molecule of sulfuric acid, $H_2SO_4$?

**3)** How many oxygen atoms are in $3CO_2$?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '7', '6'],
        hint1: 'The subscript right after H tells you the hydrogen count.',
        hint2: 'Add the counts for H, S and O; a symbol with no subscript counts 1.',
        hint3: 'The coefficient 3 multiplies every atom in the formula.',
        explanation: '(1) The subscript after H is 12. (2) $H_2SO_4$ has 2 H + 1 S + 4 O = 7 atoms. (3) Each $CO_2$ has 2 oxygen atoms, and there are 3 molecules: $3 \\times 2 = 6$.'
      }
    },
    {
      id: 'gsc4-mc',
      type: 'multiple-choice' as const,
      content: '**Mixtures, bonds and solutions.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which method would get drinkable water back out of seawater?',
            options: ['Distillation', 'Filtration', 'Using a magnet', 'Letting it settle'],
            correctAnswer: 0,
            explanation: 'Distillation boils the seawater and condenses the vapor, which leaves the dissolved salt behind. Dissolved salt passes straight through a filter and does not settle out, and a magnet does nothing to salt.'
          },
          {
            question: 'Highway crews spread salt on icy roads. How does the salt help?',
            options: ['It lowers the temperature at which water freezes', 'It raises the temperature of the ice above 0 °C', 'It reacts with the ice to form a new gas', 'It makes the ice denser so it sinks away'],
            correctAnswer: 0,
            explanation: 'Dissolved salt lowers the freezing point of water, so the ice melts even when it is a little below 0 °C. Salt does not heat the ice, it does not turn the water into a gas, and road ice has nowhere to sink.'
          },
          {
            question: 'What usually happens when a metal and a nonmetal form an ionic bond?',
            options: ['The metal gives electrons to the nonmetal', 'The two atoms share a pair of electrons', 'The nonmetal gives protons to the metal', 'The two nuclei fuse into a single nucleus'],
            correctAnswer: 0,
            explanation: 'In an ionic bond the metal loses electrons (becoming a positive ion) and the nonmetal gains them (becoming a negative ion); the opposite charges attract. Sharing electrons is a covalent bond, protons never move in a chemical reaction, and nuclei fusing is a nuclear process, not a chemical bond.'
          },
          {
            question: 'An opened bottle of soda goes flat faster on a hot day than in the refrigerator. Why?',
            options: ['Gases dissolve less in warm liquids', 'Warm liquids dissolve more gas', 'Sugar traps the gas in cold soda', 'Cold soda has a higher boiling point'],
            correctAnswer: 0,
            explanation: 'Unlike most solids, gases are less soluble at higher temperatures, so warm soda loses its dissolved carbon dioxide faster. That is the opposite of "warm liquids dissolve more gas." Sugar does not trap the gas, and the soda is nowhere near boiling.'
          }
        ]
      }
    },
    {
      id: 'gsc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Pure substances:** elements (one kind of atom) and compounds (elements bonded in a **fixed ratio**, with **new properties**)
- **Mixtures:** homogeneous (solutions: salt water, air, brass) or heterogeneous (sand and gravel, granite)
- Mixtures separate **physically**: filtration, evaporation, **distillation** (boil and condense), magnets
- **Solute** dissolves in a **solvent**; water is the "universal solvent"
- Solids dissolve better when **hot**; gases dissolve better when **cold**
- **Ionic:** metal gives electrons to nonmetal. **Covalent:** nonmetals share electrons
- Subscripts count the atom before them; coefficients multiply the whole formula
- Dissolved substances **lower the freezing point** and **raise the boiling point** (salt on roads, antifreeze)

> **Up Next:** Part 5 — acids, bases, pH, and what happens during a chemical reaction.`
    }
  ]
};
