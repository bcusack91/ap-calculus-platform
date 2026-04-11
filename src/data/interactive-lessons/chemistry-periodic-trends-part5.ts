export const chemPeriodicTrendsPart5Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt5-intro',
      type: 'text' as const,
      content: `# Part 5: Electronegativity

**Part 5 of 7 — Who Pulls Harder on Shared Electrons?**

---

### Topics in This Part

| Section |
|---------|
| The Pauling Scale |
| Key Facts |
| Across a Period (Left → Right) |
| Down a Group (Top → Bottom) |
| Summary |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'pt5-definition',
      type: 'text' as const,
      content: `## 📖 What Is Electronegativity?

**Electronegativity** is a measure of an atom's ability to attract electrons **toward itself** in a chemical bond.


---

### The Pauling Scale

Linus Pauling developed the most widely used electronegativity scale:

| Element | EN | Element | EN |
|---------|-----|---------|-----|
| F | 4.0 | C | 2.5 |
| O | 3.5 | H | 2.1 |
| N | 3.0 | Na | 0.9 |
| Cl | 3.0 | K | 0.8 |
| Br | 2.8 | Cs | 0.7 |


---

### Key Facts

- **Fluorine** has the highest electronegativity of any element (4.0)
- **Noble gases** are generally not assigned electronegativity values (they rarely form bonds)
- Electronegativity is a **relative** scale, not an absolute energy measurement
- It combines aspects of both ionization energy and electron affinity`
    },
    {
      id: 'pt5-trends',
      type: 'text' as const,
      content: `## 📈 Periodic Trends in Electronegativity

### Across a Period (Left → Right)

Electronegativity **increases** across a period.

**Why?**
- $Z_{eff}$ increases → atoms pull harder on bonding electrons
- Nonmetals (right side) are the most electronegative


---

### Down a Group (Top → Bottom)

Electronegativity **decreases** down a group.

**Why?**
- Bonding electrons are farther from the nucleus
- Additional shielding reduces the attraction for bonding electrons


---

### Summary

| Direction | Trend |
|-----------|-------|
| → Across period | EN **increases** |
| ↓ Down group | EN **decreases** |

The most electronegative elements are in the **top-right** corner (F, O, N, Cl).

The least electronegative elements are in the **bottom-left** corner (Cs, Fr, Ba).

> 🔑 **Key Concept:** Electronegativity follows the same pattern as ionization energy and is the **opposite** of atomic radius. Small atoms with high $Z_{eff}$ pull hardest on bonding electrons.

> 💡 **Tip:** If you know the atomic radius trend, you know the EN trend — just flip the direction!`
    },
    {
      id: 'pt5-bond-polarity',
      type: 'text' as const,
      content: `## 🔋 Electronegativity and Bond Polarity

The **difference** in electronegativity ($\\Delta EN$) between two bonded atoms determines the type of bond:

$$\\boxed{\\Delta EN = |EN_A - EN_B|}$$

| $\\Delta EN$ | Bond Type | Example |
|-------------|-----------|---------|
| $0$ | Nonpolar covalent | $\\text{H}_2$ ($\\Delta EN = 0$) |
| $0.1 - 0.4$ | Slightly polar covalent | $\\text{C-H}$ ($\\Delta EN = 0.4$) |
| $0.5 - 1.7$ | Polar covalent | $\\text{H-Cl}$ ($\\Delta EN = 0.9$) |
| $> 1.7$ | Ionic | $\\text{NaCl}$ ($\\Delta EN = 2.1$) |


---

### Dipole Direction

In a polar bond, the **more electronegative** atom carries a partial negative charge ($\\delta^-$) and the **less electronegative** atom carries a partial positive charge ($\\delta^+$).

$$\\overset{\\delta^+}{\\text{H}} — \\overset{\\delta^-}{\\text{Cl}}$$

The dipole arrow points **toward** the more electronegative atom.`
    },
    {
      id: 'pt5-trend-quiz',
      type: 'multiple-choice' as const,
      content: `### Electronegativity Trends`,
      exercise: {
        questions: [
          {
            question: 'Which of the following elements has the highest electronegativity?',
            options: [
              'Na',
              'Cl',
              'K',
              'Ca'
            ],
            correctAnswer: 1,
            explanation: 'Cl is the farthest right and highest up among these elements. Electronegativity increases across a period and up a group, making Cl the most electronegative option.'
          },
          {
            question: 'Which ranking correctly orders these elements from lowest to highest electronegativity?',
            options: [
              'F < O < N < C',
              'C < N < O < F',
              'N < C < F < O',
              'F < N < O < C'
            ],
            correctAnswer: 1,
            explanation: 'All four are in Period 2. Electronegativity increases left to right: C (2.5) < N (3.0) < O (3.5) < F (4.0).'
          },
          {
            question: 'Why does electronegativity decrease down a group?',
            options: [
              'There are more protons pulling on bonding electrons',
              'The atomic radius is smaller',
              'Bonding electrons are farther from the nucleus and more shielded',
              'Noble gases have increasing electronegativity'
            ],
            correctAnswer: 2,
            explanation: 'Down a group, each new shell places bonding electrons farther from the nucleus. The additional core electrons also increase shielding, reducing the effective attraction for bonding electrons.'
          }
        ]
      }
    },
    {
      id: 'pt5-polarity-input',
      type: 'input-box' as const,
      content: `### Bond Polarity Practice

Calculate the electronegativity difference ($\\Delta EN$) for each bond and classify it. Use the values: H = 2.1, C = 2.5, O = 3.5, F = 4.0, Na = 0.9, Cl = 3.0.

**1.** $\\text{C-O}$ bond: What is $\\Delta EN$? (Give your answer to 3 significant figures.)

**2.** $\\text{Na-Cl}$ bond: What is $\\Delta EN$? (Give your answer to 3 significant figures.)

**3.** $\\text{C-H}$ bond: What is $\\Delta EN$? (Give your answer to 3 significant figures.)`,
      exercise: {
        inputs: [
          {
            label: 'ΔEN for C-O:',
            correctAnswer: '1.0',
            explanation: '$\\Delta EN = |3.5 - 2.5| = 1.0$. This is a polar covalent bond.'
          },
          {
            label: 'ΔEN for Na-Cl:',
            correctAnswer: '2.1',
            explanation: '$\\Delta EN = |3.0 - 0.9| = 2.1$. This large difference indicates an ionic bond.'
          },
          {
            label: 'ΔEN for C-H:',
            correctAnswer: '0.4',
            explanation: '$\\Delta EN = |2.5 - 2.1| = 0.4$. This small difference makes C-H a nearly nonpolar covalent bond.'
          }
        ]
      }
    },
    {
      id: 'pt5-ranking-dropdown',
      type: 'dropdown-select' as const,
      content: `### Ranking Practice`,
      exercise: {
        dropdowns: [
          {
            label: 'Among the halogens, the most electronegative is:',
            options: ['I', 'Br', 'Cl', 'F'],
            correctIndex: 3,
            explanation: 'F is at the top of Group 17 and has the highest electronegativity (4.0). Electronegativity decreases down the group: F > Cl > Br > I.'
          },
          {
            label: 'The bond H-F ($\\Delta EN = 1.9$) is classified as:',
            options: ['nonpolar covalent', 'polar covalent', 'ionic'],
            correctIndex: 2,
            explanation: '$\\Delta EN = 4.0 - 2.1 = 1.9 > 1.7$, which falls in the ionic range. However, H-F is often considered a very polar covalent bond. The boundary at 1.7 is approximate, and many sources classify H-F as polar covalent. The AP exam treats $\\Delta EN > 1.7$ as ionic.'
          },
          {
            label: 'In a C-Cl bond, the partial negative charge is on:',
            options: ['C', 'Cl', 'neither — the bond is nonpolar'],
            correctIndex: 1,
            explanation: 'Cl (EN = 3.0) is more electronegative than C (EN = 2.5), so Cl pulls the shared electrons closer, gaining a partial negative charge ($\\delta^-$).'
          },
          {
            label: 'The least electronegative element listed here is:',
            options: ['Li', 'Na', 'K', 'Cs'],
            correctIndex: 3,
            explanation: 'All are in Group 1. Electronegativity decreases down the group: Li > Na > K > Cs. Cesium is the least electronegative of these.'
          }
        ]
      }
    },
    {
      id: 'pt5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Exit Quiz`,
      exercise: {
        questions: [
          {
            question: 'Which bond is the most polar?',
            options: [
              'C-H ($\\Delta EN = 0.4$)',
              'N-H ($\\Delta EN = 0.9$)',
              'O-H ($\\Delta EN = 1.4$)',
              'C-C ($\\Delta EN = 0$)'
            ],
            correctAnswer: 2,
            explanation: 'The larger the $\\Delta EN$, the more polar the bond. O-H has the largest electronegativity difference (1.4) among these choices, making it the most polar.'
          },
          {
            question: 'Electronegativity and atomic radius have what relationship?',
            options: [
              'They increase together',
              'They are inversely related — as one increases, the other decreases',
              'They are unrelated',
              'Both decrease across a period'
            ],
            correctAnswer: 1,
            explanation: 'Electronegativity increases across a period and up a group, while atomic radius decreases across a period and up a group. They show opposite trends because smaller atoms with higher $Z_{eff}$ attract bonding electrons more strongly.'
          }
        ]
      }
    }
  ]
}
