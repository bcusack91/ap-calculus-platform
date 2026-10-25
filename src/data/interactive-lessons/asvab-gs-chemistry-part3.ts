const gscAtomFigure = {
  svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1.2" fill="none"><circle cx="100" cy="90" r="45"/><circle cx="100" cy="90" r="70"/></g><g class="fig-accent"><circle cx="100" cy="90" r="14" fill="currentColor"/></g><g class="fig-accent-2" fill="currentColor"><circle cx="145" cy="90" r="5"/><circle cx="55" cy="90" r="5"/><circle cx="100" cy="20" r="5"/><circle cx="39.4" cy="125" r="5"/><circle cx="160.6" cy="125" r="5"/></g><line x1="113" y1="84" x2="192" y2="58" stroke="currentColor" stroke-width="1"/><text x="196" y="52" font-size="12" fill="currentColor">Nucleus:</text><text x="196" y="68" font-size="12" fill="currentColor">5 protons</text><text x="196" y="84" font-size="12" fill="currentColor">6 neutrons</text><g class="fig-accent-2"><circle cx="200" cy="122" r="5" fill="currentColor"/></g><text x="212" y="126" font-size="12" fill="currentColor">= electron</text></svg>',
  alt: 'Diagram of an atom. A nucleus at the center is labeled 5 protons and 6 neutrons. Two electrons (dots) sit on an inner ring around the nucleus and three electrons sit on an outer ring, for 5 electrons in all.',
  caption: 'Figure 1. A model of one atom: the nucleus and its electrons.',
  size: 'md' as const,
}

export const asvabGsChemistryPart3Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc3-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 3 of 7 — Atoms and the Periodic Table**

### Element, Atom, Molecule

| Word | Meaning | Example |
|:---|:---|:---|
| **Element** | a pure substance made of only **one kind of atom** | oxygen, gold, carbon |
| **Atom** | the **smallest unit** of an element that is still that element | one carbon atom |
| **Molecule** | two or more atoms **bonded** together | $O_2$, $H_2O$ |
| **Compound** | a substance made of two or more **different** elements bonded in a fixed ratio | water $H_2O$, table salt $NaCl$ |

Every compound is made of molecules or ions, but not every molecule is a compound: $O_2$ is a molecule of a single element.

## Inside the Atom

| Particle | Charge | Where it is | Mass |
|:---|:---:|:---|:---|
| **Proton** | **+1** (positive) | in the nucleus | about 1 atomic mass unit |
| **Neutron** | **0** (neutral) | in the nucleus | about 1 atomic mass unit |
| **Electron** | **−1** (negative) | in shells (energy levels) around the nucleus | almost nothing (about 1/1,800 of a proton) |

**Memory hook: P-E-N.** **P**rotons are **P**ositive, **E**lectrons carry the n**E**gative charge, **N**eutrons are **N**eutral.

The **nucleus** holds almost all of the atom's mass but takes up a tiny fraction of its space. Most of an atom is empty space where the electrons move.

### The two numbers

| Number | What it counts | What it tells you |
|:---|:---|:---|
| **Atomic number** | **protons** | which element it is (change the protons and you change the element) |
| **Mass number** | **protons + neutrons** | how heavy that atom is |

So: $\\text{neutrons} = \\text{mass number} - \\text{atomic number}$.

In a **neutral atom**, electrons = protons, so the charges cancel.`
    },
    {
      id: 'gsc3-ions',
      type: 'text' as const,
      content: `## Ions and Isotopes

**Ions** form when an atom **gains or loses electrons**. The protons never change.

| The atom... | Its charge becomes | Example |
|:---|:---|:---|
| **loses** electrons | **positive** (fewer negatives left) | sodium loses 1 → $Na^{+}$ |
| **gains** electrons | **negative** (extra negatives) | chlorine gains 1 → $Cl^{-}$ |

Count it: **charge = protons − electrons.**

**Isotopes** are atoms of the **same element** (same number of protons) with **different numbers of neutrons**, so their mass numbers differ. Carbon-12 has 6 protons and 6 neutrons; carbon-14 has 6 protons and 8 neutrons. Both are carbon.

## Worked Examples

**1. Sodium-23.** Sodium's atomic number is 11.
- Protons: **11** (the atomic number)
- Neutrons: $23 - 11 = $ **12**
- Electrons (neutral atom): **11**

**2. A magnesium ion, $Mg^{2+}$.** Magnesium has 12 protons. A charge of $+2$ means two more protons than electrons, so it has $12 - 2 = $ **10 electrons**.

**3. The decimal on the table.** The periodic table lists carbon's atomic mass as about 12.01, not exactly 12, because it is an **average** over carbon's natural isotopes. Round it to get the most common mass number.`
    },
    {
      id: 'gsc3-table',
      type: 'text' as const,
      content: `## The Periodic Table

The table lists elements in order of **atomic number** (number of protons).

| Feature | Meaning |
|:---|:---|
| **Period** | a horizontal **row** |
| **Group** (family) | a vertical **column**; elements in a group have the **same number of outer electrons**, so they behave alike |
| **Metals** | the **left side and center**: shiny, conduct heat and electricity, can be hammered into sheets |
| **Nonmetals** | the **upper right**: dull, poor conductors, many are gases (plus hydrogen, at the top left) |
| **Metalloids** | along the **staircase line** between them, with properties of both (silicon is the best-known) |

### Families worth knowing

| Group | Name | Behavior | Examples |
|:---:|:---|:---|:---|
| 1 | **Alkali metals** | the **most reactive** metals; react strongly with water | sodium (Na), potassium (K) |
| 17 | **Halogens** | very reactive nonmetals | fluorine (F), chlorine (Cl) |
| 18 | **Noble gases** | **almost never react** (full outer shell) | helium (He), neon (Ne), argon (Ar) |

> **Key Fact:** The **outer electrons decide how an element reacts.** Same group → same number of outer electrons → similar chemistry.

### Symbols that don't match the English name

Most symbols are easy (H hydrogen, C carbon, O oxygen, N nitrogen, Ca calcium). These come from Latin and trip people up:

| Symbol | Element | Latin root |
|:---:|:---|:---|
| **Na** | sodium | natrium |
| **K** | potassium | kalium |
| **Fe** | iron | ferrum |
| **Cu** | copper | cuprum |
| **Ag** | silver | argentum |
| **Au** | gold | aurum |
| **Pb** | lead | plumbum (think "plumbing") |
| **Sn** | tin | stannum |
| **Hg** | mercury | hydrargyrum |

**Memory hook:** gold is **Au** ("**Au**-some gold"), and silver is **Ag** (picture a federal **ag**ent's silver badge). Don't swap them: that swap is one of the most common wrong answers.`
    },
    {
      id: 'gsc3-figure-input',
      type: 'input-boxes' as const,
      figure: gscAtomFigure,
      content: `**Read the atom.** ✍️ Use Figure 1.

**1)** The atomic number of this atom:

**2)** The mass number of this atom:`,
      exercise: {
        boxes: 2,
        correctAnswers: ['5', '11'],
        hint1: 'The atomic number counts only one kind of particle in the nucleus.',
        hint2: 'The mass number counts every particle in the nucleus.',
        hint3: 'Electrons are too light to count toward the mass number.',
        explanation: '(1) The atomic number is the number of protons: 5 (this is boron). (2) The mass number is protons + neutrons: $5 + 6 = 11$. The 5 electrons match the 5 protons, so the atom is neutral.'
      }
    },
    {
      id: 'gsc3-figure-mc',
      type: 'multiple-choice' as const,
      figure: gscAtomFigure,
      content: '**Change the atom.** 🎯 Use Figure 1 again.',
      exercise: {
        questions: [
          {
            question: 'Suppose the atom in the figure gains one extra electron. What is its charge now, and is it still the same element?',
            options: ['−1, and it is still the same element', '+1, and it is still the same element', '−1, and it becomes a different element', '0, because electrons have almost no mass'],
            correctAnswer: 0,
            explanation: 'One extra electron gives 5 protons and 6 electrons: $5 - 6 = -1$. The element is set by the protons, which did not change, so it is still the same element. Gaining a negative particle cannot make the charge positive, and charge depends on the count of charges, not on mass.'
          }
        ]
      }
    },
    {
      id: 'gsc3-mc',
      type: 'multiple-choice' as const,
      content: '**Atoms and the table.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the chemical symbol for potassium?',
            options: ['K', 'P', 'Po', 'Pt'],
            correctAnswer: 0,
            explanation: 'Potassium is K, from its Latin name kalium. P is phosphorus, Po is polonium and Pt is platinum.'
          },
          {
            question: 'Two atoms are both chlorine, but one has a mass number of 35 and the other 37. How are they different?',
            options: ['They have different numbers of neutrons', 'They have different numbers of protons', 'They have different numbers of electrons', 'One is a metal and the other is not'],
            correctAnswer: 0,
            explanation: 'Atoms of the same element always have the same number of protons, so the difference in mass number must come from neutrons: these are isotopes. Neutral atoms of the same element also have the same number of electrons, and both are chlorine, a nonmetal.'
          },
          {
            question: 'Which group of elements almost never reacts with other elements?',
            options: ['The noble gases', 'The alkali metals', 'The halogens', 'The metalloids'],
            correctAnswer: 0,
            explanation: 'The noble gases (helium, neon, argon and the rest of group 18) have full outer shells, so they rarely react. Alkali metals and halogens are the two most reactive families, and metalloids react in a range of ways.'
          }
        ]
      }
    },
    {
      id: 'gsc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Map the table.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A horizontal row of the periodic table is called a:',
            options: ['Period', 'Group', 'Family', 'Series'],
            correctAnswer: 0
          },
          {
            label: 'Shiny elements that conduct electricity are found mostly on the:',
            options: ['Left side and center', 'Far right column', 'Upper right corner', 'Top row only'],
            correctAnswer: 0
          },
          {
            label: 'Fluorine and chlorine, in group 17, are called the:',
            options: ['Halogens', 'Noble gases', 'Alkali metals', 'Metalloids'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Period', 'Left side and center', 'Halogens'],
        hint1: 'Columns are groups (families); rows are something else.',
        hint2: 'Metals take up most of the table, starting from the left.',
        hint3: 'Group 17 sits just left of the noble gases.',
        explanation: 'Rows are periods, and columns are groups (also called families). Metals fill the left side and the center of the table. Group 17, fluorine and chlorine, are the halogens; group 18 to their right are the noble gases.'
      }
    },
    {
      id: 'gsc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **P-E-N:** protons positive, electrons negative, neutrons neutral; protons and neutrons sit in the nucleus
- **Atomic number = protons** (decides the element); **mass number = protons + neutrons**
- Neutral atom: electrons = protons. **Lose electrons → positive ion; gain electrons → negative ion**
- **Isotopes:** same element, same protons, different neutrons
- Rows are **periods**, columns are **groups**; metals left and center, nonmetals upper right, metalloids on the staircase
- Group 1 alkali metals and group 17 halogens are very reactive; group 18 **noble gases** barely react
- Tricky symbols: Na, K, Fe, Cu, Ag, Au, Pb, Sn, Hg

> **Up Next:** Part 4 — how atoms combine into compounds, and how compounds differ from mixtures and solutions.`
    }
  ]
};
