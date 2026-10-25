const gslPyramidFigure = {
  svg: '<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><polygon points="110,20 200,200 20,200" fill="none" stroke="currentColor" stroke-width="2.5"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="42.5" y1="155" x2="177.5" y2="155"/><line x1="65" y1="110" x2="155" y2="110"/><line x1="87.5" y1="65" x2="132.5" y2="65"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="110" y="182">Level 1</text><text x="110" y="137">Level 2</text><text x="110" y="92">Level 3</text><text x="110" y="50" font-size="9">Level 4</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="190" y1="178" x2="210" y2="178"/><line x1="167" y1="132" x2="210" y2="132"/><line x1="145" y1="88" x2="210" y2="88"/><line x1="124" y1="44" x2="210" y2="44"/></g><g font-size="11" fill="currentColor"><text x="214" y="175">Grass (producers)</text><text x="214" y="189">30,000 kcal</text><text x="214" y="129">Grasshoppers</text><text x="214" y="143">A kcal</text><text x="214" y="85">Frogs</text><text x="214" y="99">300 kcal</text><text x="214" y="41">Snakes</text><text x="214" y="55">B kcal</text></g></svg>',
  alt: 'An energy pyramid with four levels. Level 1, the wide base, is grass (producers) with 30,000 kcal of energy. Level 2 above it is grasshoppers, with an unknown amount labeled A kcal. Level 3 is frogs, with 300 kcal. Level 4, the narrow top, is snakes, with an unknown amount labeled B kcal.',
  caption: 'Figure 2. An energy pyramid for a grassland food chain.',
  size: 'md' as const,
}

export const asvabGsLifeSciencePart5Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl5-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 5 of 7 — Plants, Ecology and Energy Flow**

### Photosynthesis and Respiration: Mirror Images

**Photosynthesis** happens in the **chloroplasts** of plants (and algae). The green pigment **chlorophyll** captures light energy:

$$\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light}} \\text{glucose} + \\text{oxygen}$$

$$6\\,CO_2 + 6\\,H_2O \\rightarrow C_6H_{12}O_6 + 6\\,O_2$$

**Cellular respiration** happens in the **mitochondria** of plants **and** animals. It runs the same reaction backward to release the energy stored in sugar:

$$\\text{glucose} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water} + \\text{energy}$$

| | Photosynthesis | Cellular respiration |
|:---|:---|:---|
| Where | Chloroplasts | Mitochondria |
| Who | Plants, algae, some bacteria | Nearly all living things, **including plants** |
| Takes in | CO₂, water, light | Glucose, O₂ |
| Gives off | Glucose, **O₂** | CO₂, water, usable energy |

### Plant parts

| Part | Job |
|:---|:---|
| **Roots** | Anchor the plant; absorb water and minerals |
| **Stem** | Holds the plant up; carries materials |
| **Xylem** | Tubes that carry **water up** from the roots |
| **Phloem** | Tubes that carry **sugar (food)** from the leaves to the rest of the plant |
| **Leaves** | Main site of photosynthesis |
| **Stomata** | Tiny pores in leaves that let CO₂ in and O₂ and water vapor out |
| **Flower** | Reproduction: **pollen** carries the male cells; **pollination** moves pollen to the female part |

Loss of water vapor through the stomata is **transpiration**. Plant growth toward light is **phototropism**; roots growing downward with gravity is **gravitropism**.

Memory hook: **x**ylem carries **water** ("**x** marks the water"), **ph**loem carries **f**ood.`
    },
    {
      id: 'gsl5-ecology',
      type: 'text' as const,
      content: `## Ecology: Who Eats Whom

### Feeding roles

| Role | What it does | Examples |
|:---|:---|:---|
| **Producer** (autotroph) | Makes its own food, usually by photosynthesis | Grass, trees, algae |
| **Primary consumer** | Eats producers (an **herbivore**) | Rabbits, deer, grasshoppers |
| **Secondary consumer** | Eats primary consumers | Frogs, foxes, small fish |
| **Tertiary consumer** | Eats secondary consumers | Hawks, sharks |
| **Decomposer** | Breaks down dead matter and wastes, returning nutrients to the soil | **Bacteria, fungi** (mushrooms) |

A **food chain** is one path of energy (grass → rabbit → fox). A **food web** is all the connected chains in an ecosystem.

### The 10% rule

Only about **10%** of the energy at one level is passed to the next. The rest is used for living (movement, body heat) or lost as heat. That is why food chains are short and why there are far fewer hawks than rabbits. Drawn as levels, this makes an **energy pyramid**: wide at the producers, narrow at the top.

### Relationships between species (symbiosis)

| Relationship | Species 1 | Species 2 | Example |
|:---|:---:|:---:|:---|
| **Mutualism** | helped | helped | Bees and flowers |
| **Commensalism** | helped | not affected | Barnacles riding on a whale |
| **Parasitism** | helped | **harmed** | A tick on a dog |

**Predation** (a lion eating a zebra) and **competition** (two species after the same food) are the other key interactions.

### Levels of ecology and the big cycles

$$\\text{organism} \\rightarrow \\text{population} \\rightarrow \\text{community} \\rightarrow \\text{ecosystem} \\rightarrow \\text{biome} \\rightarrow \\text{biosphere}$$

- A **population** is one species in one area; a **community** is all the species there; an **ecosystem** adds the nonliving parts (water, soil, air).
- **Carbon cycle:** photosynthesis removes CO₂ from the air; respiration, decay and burning fuel put it back.
- **Nitrogen cycle:** air is mostly nitrogen, but plants can't use it directly. **Bacteria** (many in the root nodules of beans and peas) "fix" nitrogen into a usable form.`
    },
    {
      id: 'gsl5-figure-input',
      type: 'input-boxes' as const,
      figure: gslPyramidFigure,
      content: `**Read the pyramid.** ✍️ Use the 10% rule with Figure 2.

**1)** About how many kcal of energy reach the grasshoppers (A)?

**2)** About how many kcal reach the snakes (B)?

**3)** What percent of the grass's energy reaches the snakes?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '30', '0.1'],
        hint1: 'Each level up keeps about one tenth of the energy below it.',
        hint2: 'Snakes eat frogs, which have 300 kcal.',
        hint3: 'Compare 30 with 30,000.',
        explanation: '(1) $10\\%$ of $30{,}000$ is $3{,}000$ kcal. (Check: $10\\%$ of $3{,}000$ is the frogs\' $300$.) (2) $10\\%$ of $300$ is $30$ kcal. (3) $\\frac{30}{30{,}000} = \\frac{1}{1{,}000} = 0.1\\%$. Three steps of "keep one tenth" leave one thousandth of the original energy.'
      }
    },
    {
      id: 'gsl5-mc',
      type: 'multiple-choice' as const,
      content: '**Plants and ecosystems.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which gas do plants release into the air as a product of photosynthesis?',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Ozone'],
            correctAnswer: 0,
            explanation: 'Photosynthesis turns carbon dioxide and water into glucose and oxygen, and the oxygen is released. Carbon dioxide is taken in, not given off; nitrogen and ozone are not products of photosynthesis.'
          },
          {
            question: 'Which plant tissue carries water up from the roots to the leaves?',
            options: ['Xylem', 'Phloem', 'Bark', 'Chlorophyll'],
            correctAnswer: 0,
            explanation: 'Xylem carries water and minerals upward. Phloem carries sugar from the leaves to the rest of the plant, bark is the protective outer layer of a woody stem, and chlorophyll is the green pigment that captures light.'
          },
          {
            question: 'Which organism is a decomposer?',
            options: ['Mushroom', 'Rabbit', 'Oak tree', 'Hawk'],
            correctAnswer: 0,
            explanation: 'Mushrooms are fungi, which break down dead matter and recycle nutrients. The rabbit is a primary consumer, the oak tree is a producer and the hawk is a predator near the top of the food chain.'
          },
          {
            question: 'In the food chain algae → small fish → large fish → seal, which organism is the secondary consumer?',
            options: ['Large fish', 'Small fish', 'Seal', 'Algae'],
            correctAnswer: 0,
            explanation: 'Algae are the producers, the small fish eat algae (primary consumers), and the large fish eat the small fish, making them secondary consumers. The seal is the tertiary consumer.'
          }
        ]
      }
    },
    {
      id: 'gsl5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the relationship.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Clownfish shelter in a sea anemone and chase off fish that would eat the anemone. This is:',
            options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'],
            correctAnswer: 0
          },
          {
            label: 'A tapeworm lives in a dog\'s intestine and absorbs its food. This is:',
            options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'],
            correctAnswer: 2
          },
          {
            label: 'A bird builds a nest in a tree without helping or harming the tree. This is:',
            options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Mutualism', 'Parasitism', 'Commensalism'],
        hint1: 'Ask: is each species helped, harmed or unaffected?',
        hint2: 'If one side is harmed, it is parasitism.',
        hint3: 'If one side is unaffected, it is commensalism.',
        explanation: 'Clownfish and anemone both benefit (shelter for the fish, protection for the anemone): mutualism. The tapeworm benefits while the dog is harmed: parasitism. The bird benefits and the tree is unaffected: commensalism.'
      }
    },
    {
      id: 'gsl5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Photosynthesis** (chloroplasts): CO₂ + water + light → glucose + **O₂**
- **Respiration** (mitochondria, in plants **and** animals): glucose + O₂ → CO₂ + water + energy
- **Xylem** carries water up; **phloem** carries food; **stomata** are leaf pores; **transpiration** is water loss from leaves
- **Producers → primary → secondary → tertiary consumers**; **decomposers** (bacteria, fungi) recycle nutrients
- About **10%** of energy passes to each higher level, so pyramids narrow fast
- **Mutualism** (both helped), **commensalism** (one helped, one unaffected), **parasitism** (one harmed)
- **Population** (one species) → **community** (all species) → **ecosystem** (plus nonliving parts); bacteria **fix nitrogen**

> **Up Next:** Part 6 — test strategy and the traps that wrong answers are built from.`
    }
  ]
};
