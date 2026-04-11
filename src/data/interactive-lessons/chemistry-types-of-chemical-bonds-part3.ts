export const chemTypesOfChemicalBondsPart3Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb3-intro',
      type: 'text' as const,
      content: `# Part 3: Metallic Bonding

**Part 3 of 7 — The Sea of Electrons**

---

### Topics in This Part

| Section |
|---------|
| The Model |
| What Holds It Together? |
| Metallic Bond Strength |
| Example Comparison |
| Electrical Conductivity |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'cb3-sea-model',
      type: 'text' as const,
      content: `## 🔋 The Electron Sea Model

In a metallic solid, atoms are packed closely together in a regular arrangement. Unlike ionic or covalent compounds, the valence electrons in a metal are not transferred or shared between specific atoms. Instead, they are **delocalized** — free to move throughout the entire metal structure.


---

### The Model

- Metal **cations** form a fixed lattice (the "positive cores")
- Valence electrons are **delocalized**, forming an "electron sea" that flows around and between the cations
- Every cation is attracted to the surrounding sea of electrons, and every electron is attracted to many cations simultaneously


---

### What Holds It Together?

The metallic bond is the **electrostatic attraction** between the positively charged metal cations and the delocalized valence electrons. This is a **non-directional** interaction — unlike covalent bonds, which are localized between specific atom pairs.

> 💡 **Tip:** Think of the "electron sea" as a glue of negative charge holding all the positive metal cations together — it’s non-directional, so it works equally in all directions.


---

### Metallic Bond Strength

Metallic bond strength depends on:

| Factor | Effect |
|--------|--------|
| **Number of valence electrons** | More delocalized electrons → stronger metallic bond |
| **Cation size** | Smaller cations → electrons closer to nuclei → stronger bond |
| **Charge on cation** | Higher charge → stronger attraction to electron sea |


---

### Example Comparison

| Metal | Valence $e^-$ | Melting Point | Bond Strength |
|-------|--------------|---------------|---------------|
| Na | 1 | 98 °C | Weak |
| Mg | 2 | 650 °C | Moderate |
| Al | 3 | 660 °C | Strong |
| Fe | variable (d-electrons) | 1538 °C | Very strong |

Metals with more valence electrons and smaller ionic radii tend to have **stronger** metallic bonds and **higher** melting points.

> 🔑 **Key Concept:** Metallic bond strength increases with more valence electrons, smaller cation size, and higher cation charge.`
    },
    {
      id: 'cb3-model-quiz',
      type: 'multiple-choice' as const,
      content: `### Check: Electron Sea Model`,
      exercise: {
        questions: [
          {
            question: 'In the electron sea model of metallic bonding, the valence electrons are:',
            options: [
              'Transferred from one atom to another',
              'Shared between two specific atoms',
              'Delocalized and free to move throughout the metal',
              'Trapped in fixed positions between atoms'
            ],
            correctAnswer: 2,
            explanation: 'In metallic bonding, valence electrons are delocalized — they are not associated with any particular atom but move freely throughout the entire metal lattice, forming an "electron sea."'
          },
          {
            question: 'Which metal would you expect to have the strongest metallic bonding?',
            options: [
              'K (1 valence electron, large atomic radius)',
              'Ca (2 valence electrons, medium radius)',
              'Al (3 valence electrons, small radius)',
              'Cs (1 valence electron, very large radius)'
            ],
            correctAnswer: 2,
            explanation: 'Aluminum has 3 valence electrons (more delocalized electrons) and a relatively small atomic radius. Both factors increase metallic bond strength. More electrons in the sea and smaller cations = stronger bonds.'
          }
        ]
      }
    },
    {
      id: 'cb3-conductivity',
      type: 'text' as const,
      content: `## 📌 Electrical and Thermal Conductivity

### Electrical Conductivity

Metals are excellent electrical conductors because their delocalized electrons can **flow freely** in response to an applied electric field (voltage).

- Apply a voltage → electrons drift toward the positive terminal
- The "electron sea" provides a continuous pathway for charge flow
- This is why metals are used for wires, circuits, and electrodes

**Key difference from ionic compounds:**
- Ionic solids do NOT conduct (ions fixed in lattice)
- Ionic liquids/solutions DO conduct (ions mobile)
- Metals conduct in **both** solid and liquid states


---

### Thermal Conductivity

Metals also conduct heat well because:
1. **Free electrons** can carry kinetic energy rapidly through the metal
2. Vibrations in the lattice (phonons) also transfer energy, but electron transport is faster

This is why a metal spoon in hot soup gets hot quickly, while a wooden spoon stays cool.`
    },
    {
      id: 'cb3-malleability',
      type: 'text' as const,
      content: `## 📌 Malleability and Ductility

### Definitions

- **Malleable**: Can be hammered or pressed into thin sheets (e.g., aluminum foil)
- **Ductile**: Can be drawn into thin wires (e.g., copper wire)


---

### Why Are Metals Malleable?

When a metal is struck:
1. Layers of cations **slide** past each other
2. The delocalized electron sea **adjusts** and continues to hold the cations together
3. The metallic bond is maintained — no fracturing


---

### Contrast with Ionic Compounds

When an ionic crystal is struck:
1. Layers shift → like charges (cation next to cation) line up
2. **Electrostatic repulsion** causes the crystal to shatter
3. Ionic compounds are **brittle**, not malleable


---

### Metallic Luster

Metals are shiny because the delocalized electrons can absorb and re-emit photons of light across a wide range of wavelengths. The "electron sea" interacts with incoming light, reflecting it back — producing the characteristic metallic **luster**.`
    },
    {
      id: 'cb3-properties-dropdown',
      type: 'dropdown-select' as const,
      content: `### Metallic Properties — Fill in the Blanks`,
      exercise: {
        dropdowns: [
          {
            label: 'Metals are good electrical conductors because their valence electrons are:',
            options: ['fixed in place', 'delocalized and mobile', 'transferred to nonmetals', 'shared in covalent bonds'],
            correctIndex: 1,
            explanation: 'Delocalized (free) electrons can move in response to an applied voltage, allowing electric current to flow.'
          },
          {
            label: 'Metals are malleable because when layers slide, the electron sea:',
            options: ['causes repulsion and shattering', 'adjusts and maintains bonding', 'evaporates', 'forms covalent bonds'],
            correctIndex: 1,
            explanation: 'The non-directional electron sea adjusts around the shifted cations and continues to hold them together. This is why metals bend instead of shattering.'
          },
          {
            label: 'Compared to ionic solids, metals in the solid state:',
            options: ['do not conduct electricity', 'conduct electricity', 'are brittle', 'have ions as charge carriers'],
            correctIndex: 1,
            explanation: 'Metals conduct electricity even as solids because their delocalized electrons are mobile. Ionic solids have fixed ions and do not conduct.'
          },
          {
            label: 'Metallic luster (shininess) is due to:',
            options: ['ion-dipole interactions', 'delocalized electrons absorbing and re-emitting light', 'high melting points', 'crystal lattice symmetry'],
            correctIndex: 1,
            explanation: 'The delocalized electron sea interacts with incoming photons, absorbing and re-emitting them across a broad spectrum — giving metals their characteristic shine.'
          }
        ]
      }
    },
    {
      id: 'cb3-alloys',
      type: 'text' as const,
      content: `## 📌 Alloys

An **alloy** is a mixture of a metal with one or more other elements (usually metals). Alloys modify the properties of pure metals.


---

### Types of Alloys

| Type | Description | Example |
|------|-------------|---------|
| **Substitutional** | Atoms of similar size replace metal atoms in the lattice | Brass (Cu + Zn) |
| **Interstitial** | Smaller atoms fit into gaps between metal atoms | Steel (Fe + C) |


---

### Why Use Alloys?

- **Harder and stronger** than pure metals (different-sized atoms disrupt layer sliding)
- **Customizable properties** — adjust composition to tune hardness, corrosion resistance, etc.
- Still maintain metallic properties (conductivity, luster)


---

### Why Are Alloys Harder?

In a pure metal, uniform layers slide easily. In an alloy, atoms of different sizes **disrupt the regular arrangement**, making it harder for layers to slide past each other.`
    },
    {
      id: 'cb3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Part 3 Exit Quiz`,
      exercise: {
        questions: [
          {
            question: 'Alloys are generally harder than pure metals because:',
            options: [
              'They have fewer valence electrons',
              'Different-sized atoms disrupt the regular lattice, preventing easy layer sliding',
              'They form ionic bonds instead of metallic bonds',
              'They have lower melting points'
            ],
            correctAnswer: 1,
            explanation: 'In an alloy, atoms of different sizes break up the regular arrangement of the lattice. This makes it more difficult for layers to slide past each other, increasing hardness and strength.'
          },
          {
            question: 'Which of the following correctly compares metallic and ionic bonding?',
            options: [
              'Both involve delocalized electrons',
              'Metallic solids conduct electricity; ionic solids do not',
              'Ionic compounds are malleable; metals are brittle',
              'Both involve electron transfer from metals to nonmetals'
            ],
            correctAnswer: 1,
            explanation: 'Metallic solids conduct electricity due to mobile delocalized electrons. Ionic solids do not conduct because their ions are locked in fixed positions. (Ionic compounds conduct when melted or dissolved.)'
          },
          {
            question: 'Steel is an example of a(n) ______ alloy because small carbon atoms fit into the gaps of the iron lattice.',
            options: [
              'Substitutional',
              'Interstitial',
              'Ionic',
              'Covalent network'
            ],
            correctAnswer: 1,
            explanation: 'Steel is an interstitial alloy. Carbon atoms are much smaller than iron atoms and fit into the interstices (gaps) between iron atoms in the lattice.'
          }
        ]
      }
    }
  ]
}
