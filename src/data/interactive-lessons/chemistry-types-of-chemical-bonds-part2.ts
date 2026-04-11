export const chemTypesOfChemicalBondsPart2Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb2-intro',
      type: 'text' as const,
      content: `# Part 2: Covalent Bonds

**Part 2 of 7 — Electron Sharing**

---

### Topics in This Part

| Section |
|---------|
| Why Share? |
| Example: $\\text{H}_2$ |
| The Bonding Pair |
| Examples |
| Key Pattern |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'cb2-sharing',
      type: 'text' as const,
      content: `## 🔋 Covalent Bond Formation: Electron Sharing

A **covalent bond** forms when two nonmetal atoms share one or more pairs of valence electrons so that each atom achieves a more stable electron configuration.


---

### Why Share?

Nonmetals have **high ionization energies** — it's too costly to remove electrons completely. Instead, atoms achieve stability by sharing electrons so that each atom has access to a full valence shell (usually an octet, or a duet for hydrogen).


---

### Example: $\\text{H}_2$

Each hydrogen atom has 1 electron and needs 2 (a duet). By sharing their electrons, both atoms have access to 2 electrons:

$$\\text{H}\\cdot + \\cdot\\text{H} \\rightarrow \\text{H—H}$$

The shared pair of electrons is attracted to **both** nuclei simultaneously. This mutual attraction is what holds the molecule together.


---

### The Bonding Pair

- The shared electrons spend most of their time **between** the two nuclei
- Both nuclei are attracted to this shared electron density
- This creates a net **attractive force** that holds the atoms together`
    },
    {
      id: 'cb2-sharing-quiz',
      type: 'multiple-choice' as const,
      content: `### Check: Covalent Bond Basics`,
      exercise: {
        questions: [
          {
            question: 'A covalent bond forms when:',
            options: [
              'A metal transfers electrons to a nonmetal',
              'Two atoms share one or more pairs of electrons',
              'Oppositely charged ions attract each other',
              'Electrons are delocalized across many atoms'
            ],
            correctAnswer: 1,
            explanation: 'Covalent bonds form when two atoms (typically nonmetals) share electron pairs. Both nuclei are attracted to the shared electron density between them.'
          },
          {
            question: 'Covalent bonds typically form between:',
            options: [
              'Two metals',
              'A metal and a nonmetal',
              'Two nonmetals',
              'A metal and a noble gas'
            ],
            correctAnswer: 2,
            explanation: 'Covalent bonds form between nonmetals. Both atoms have high ionization energies, so neither can easily lose electrons. Sharing is the energetically favorable strategy.'
          }
        ]
      }
    },
    {
      id: 'cb2-bond-types',
      type: 'text' as const,
      content: `## 🔗 Single, Double, and Triple Bonds

Atoms can share more than one pair of electrons:

| Bond Type | Shared Pairs | Shared Electrons | Example |
|-----------|-------------|-----------------|---------|
| **Single bond** | 1 | 2 | $\\text{H—H}$, $\\text{C—H}$ |
| **Double bond** | 2 | 4 | $\\text{O=O}$, $\\text{C=O}$ |
| **Triple bond** | 3 | 6 | $\\text{N≡N}$, $\\text{C≡O}$ |


---

### Examples

**Oxygen ($\\text{O}_2$):** Each oxygen has 6 valence electrons and needs 2 more for an octet. They share 2 pairs → **double bond**.

$$\\text{O=O}$$

**Nitrogen ($\\text{N}_2$):** Each nitrogen has 5 valence electrons and needs 3 more. They share 3 pairs → **triple bond**.

$$\\text{N≡N}$$


---

### Key Pattern

The number of bonds an atom typically forms = **8 minus the number of valence electrons** (for atoms that follow the octet rule).

> 🔑 **Key Concept:** Bonds formed = 8 − valence electrons (for atoms following the octet rule). Carbon forms 4, nitrogen 3, oxygen 2, halogens 1.

| Atom | Valence $e^-$ | Bonds Typically Formed |
|------|--------------|----------------------|
| C | 4 | 4 (single, double, or triple) |
| N | 5 | 3 |
| O | 6 | 2 |
| F, Cl | 7 | 1 |
| H | 1 | 1 |`
    },
    {
      id: 'cb2-bond-types-dropdown',
      type: 'dropdown-select' as const,
      content: `### Identify the Bond Type`,
      exercise: {
        dropdowns: [
          {
            label: 'The bond in $\\text{H}_2$ (H—H) is a:',
            options: ['single bond', 'double bond', 'triple bond'],
            correctIndex: 0,
            explanation: '$\\text{H}_2$ shares one pair of electrons — a single bond. Each hydrogen achieves a duet.'
          },
          {
            label: 'The bond in $\\text{N}_2$ (N≡N) is a:',
            options: ['single bond', 'double bond', 'triple bond'],
            correctIndex: 2,
            explanation: 'Nitrogen shares 3 pairs of electrons (6 electrons total) to satisfy the octet rule — a triple bond.'
          },
          {
            label: 'Carbon typically forms this many covalent bonds:',
            options: ['1', '2', '3', '4'],
            correctIndex: 3,
            explanation: 'Carbon has 4 valence electrons and needs 4 more for an octet: $8 - 4 = 4$ bonds.'
          },
          {
            label: 'The bond order in $\\text{O}_2$ is:',
            options: ['1', '2', '3'],
            correctIndex: 1,
            explanation: 'Oxygen shares 2 pairs of electrons — a double bond (bond order = 2).'
          }
        ]
      }
    },
    {
      id: 'cb2-energy-length',
      type: 'text' as const,
      content: `## 🔗 Bond Energy and Bond Length

### Bond Energy (Bond Dissociation Energy)

**Bond energy** is the energy required to break one mole of a particular bond in the gas phase:

$$\boxed{\text{A—B}(g) \rightarrow \text{A}(g) + \text{B}(g) \quad \Delta H = \text{bond energy} > 0}$$

Breaking bonds always requires energy (endothermic). Forming bonds always releases energy (exothermic).

> 💡 **Tip:** Bond energy is always the energy required to **break** a bond (endothermic, $\Delta H > 0$). Forming the same bond **releases** the same amount of energy (exothermic).


---

### Bond Length

**Bond length** is the distance between the nuclei of two bonded atoms, measured at the point of minimum potential energy.


---

### Trends: Single vs. Double vs. Triple

| Property | Single | Double | Triple |
|----------|--------|--------|--------|
| **Bond energy** | Lowest | Medium | Highest |
| **Bond length** | Longest | Medium | Shortest |
| **Bond strength** | Weakest | Medium | Strongest |


---

### Why?

More shared electron pairs means:
- **More electron density** between the nuclei → **stronger** attraction → higher bond energy
- Nuclei pulled **closer** together → shorter bond length


---

### Typical C–C Bond Data

| Bond | Energy (kJ/mol) | Length (pm) |
|------|-----------------|-------------|
| C—C | 347 | 154 |
| C=C | 614 | 134 |
| C≡C | 839 | 120 |`
    },
    {
      id: 'cb2-energy-quiz',
      type: 'multiple-choice' as const,
      content: `### Bond Energy and Length Quiz`,
      exercise: {
        questions: [
          {
            question: 'Which of the following bonds is the shortest?',
            options: [
              'C—C (single)',
              'C=C (double)',
              'C≡C (triple)',
              'They are all the same length'
            ],
            correctAnswer: 2,
            explanation: 'Triple bonds have the most shared electron density between nuclei, pulling the atoms closest together. C≡C is the shortest at about 120 pm.'
          },
          {
            question: 'Which statement about bond energy is correct?',
            options: [
              'Breaking bonds releases energy',
              'Forming bonds requires energy',
              'A triple bond has a higher bond energy than a single bond',
              'Bond energy decreases as bond order increases'
            ],
            correctAnswer: 2,
            explanation: 'Triple bonds have 3 shared pairs of electrons creating strong attraction between nuclei. More shared pairs = higher bond energy. Breaking bonds is endothermic; forming bonds is exothermic.'
          },
          {
            question: 'The N≡N triple bond in $\\text{N}_2$ has a bond energy of 945 kJ/mol. This unusually high value explains why:',
            options: [
              '$\\text{N}_2$ is highly reactive',
              '$\\text{N}_2$ easily decomposes',
              '$\\text{N}_2$ is kinetically inert (unreactive) at room temperature',
              '$\\text{N}_2$ readily forms ionic bonds'
            ],
            correctAnswer: 2,
            explanation: 'The extremely high bond energy of the N≡N triple bond means it requires a massive amount of energy to break. This makes $\\text{N}_2$ very unreactive under normal conditions — despite nitrogen being essential for life.'
          }
        ]
      }
    },
    {
      id: 'cb2-exit-input',
      type: 'input-box' as const,
      content: `### Part 2 Practice — Bond Analysis

**1.** How many shared electron pairs are in a double bond?

**2.** A C—C single bond is 154 pm long and a C≡C triple bond is 120 pm. Which is shorter: the single or triple bond? (Enter "single" or "triple")

**3.** Carbon has 4 valence electrons. Using the rule (8 minus valence electrons), how many bonds does carbon typically form?`,
      exercise: {
        inputs: [
          {
            label: 'Shared pairs in a double bond:',
            correctAnswer: '2',
            explanation: 'A double bond consists of 2 shared electron pairs (4 shared electrons total).'
          },
          {
            label: 'Shorter bond (single or triple):',
            correctAnswer: 'triple',
            explanation: 'Triple bonds are shorter than single bonds because the 3 shared pairs pull the nuclei closer together. C≡C = 120 pm vs. C—C = 154 pm.'
          },
          {
            label: 'Bonds carbon forms:',
            correctAnswer: '4',
            explanation: 'Carbon has 4 valence electrons and needs 4 more for an octet: $8 - 4 = 4$ bonds. This is why carbon is so versatile in bonding.'
          }
        ]
      }
    }
  ]
}
