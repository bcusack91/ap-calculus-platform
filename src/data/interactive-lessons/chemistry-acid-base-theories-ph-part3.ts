export const chemAcidBaseTheoriesPhPart3Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab3-intro',
      type: 'text' as const,
      content: `# 🧬 Molecular Structure and Acid Strength

**Part 3 of 7 — Why Some Acids Are Stronger Than Others**

---

### Topics in This Part

| Section |
|---------|
| 📖 Strength Depends on the Conjugate Base |
| 🧪 Oxyacids: Electronegativity and Number of Oxygens |
| Carboxylic Acids and Resonance |
| ✏️ Strong Bases and Common Weak Bases |

> 🔑 **Why this matters:** The AP exam asks you to explain acid and base strength from molecular structure (CED 8.6.A): which proton is acidic, and why one acid gives up its proton more readily than another.

---

### What You'll Master in Part 3
- Linking acid strength to the stability of the conjugate base
- Comparing oxyacids and carboxylic acids using electronegativity, inductive effects, and resonance
- Recognizing the common strong bases and weak bases`
    },
    {
      id: 'ab3-conjugate-stability',
      type: 'text' as const,
      content: `
## 📖 Strength Depends on the Conjugate Base

When an acid HA donates a proton, it leaves behind its conjugate base $A^-$. The **more stable** $A^-$ is with its extra negative charge, the more readily HA gives up the proton, and the **stronger** the acid.

$$\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{A}^-$$

| Strong acid | Conjugate base | Why the conjugate base is so stable (and so weak) |
|-------------|----------------|-----------------------------------------------|
| HCl, HBr, HI | $\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$ | Charge held by an electronegative or large atom |
| $\\text{HNO}_3$ | $\\text{NO}_3^-$ | Charge spread over three O atoms by resonance |
| $\\text{H}_2\\text{SO}_4$, $\\text{HClO}_4$ | $\\text{HSO}_4^-$, $\\text{ClO}_4^-$ | Charge spread over several electronegative O atoms |

> 🔑 **Key Concept:** Strong acids have very weak conjugate bases, stabilized by **electronegativity**, **inductive effects**, **resonance**, or a combination (CED 8.6.A.1).


---

### Three Stabilizing Effects

| Effect | What it means |
|--------|---------------|
| **Electronegativity** | An electronegative atom holds negative charge well |
| **Inductive effect** | Electronegative atoms nearby pull electron density away from the O–H bond and help hold the negative charge |
| **Resonance** | The negative charge is shared over two or more atoms instead of sitting on one |

> 💡 **Tip:** The acidic proton is almost always an H bonded to a highly electronegative atom (usually O). The H atoms bonded to carbon in acetic acid, $\\text{CH}_3\\text{COOH}$, are not acidic; only the O–H proton is.
      `
    },
    {
      id: 'ab3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Structure and Strength Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why $HNO_{3}$ is a strong acid?',
            options: [
              'It contains three oxygen atoms that each donate a proton',
              '$NO_{3}^{-}$ is stabilized by resonance',
              'Its N–O bonds are weaker than its O–H bond',
              'Nitrogen is a metal that forms stable cations'
            ],
            correctAnswer: 1,
            explanation: 'Nitric acid has one acidic proton. When it is lost, the negative charge of nitrate is shared over three electronegative O atoms by resonance, so $NO_{3}^{-}$ is a very weak base and the acid ionizes completely. Nitrogen is a nonmetal, and the number of O atoms does not equal the number of acidic protons.'
          },
          {
            question: 'In acetic acid, $CH_{3}COOH$, which hydrogen is acidic?',
            options: [
              'Any of the three H atoms bonded to carbon',
              'The H atom bonded to oxygen',
              'All four H atoms equally',
              'None; acetic acid has no acidic hydrogen'
            ],
            correctAnswer: 1,
            explanation: 'The O–H hydrogen is acidic because removing it leaves a carboxylate ion stabilized by resonance between two O atoms. C–H bonds are not polar enough to ionize in water, so acetic acid is monoprotic.'
          },
          {
            question: 'Comparing a strong acid HA with a weak acid HB, which statement is true?',
            options: [
              '$A^{-}$ is a stronger base than $B^{-}$',
              '$A^{-}$ is a weaker base than $B^{-}$',
              '$A^{-}$ and $B^{-}$ have equal base strength',
              'Neither $A^{-}$ nor $B^{-}$ can accept a proton at all'
            ],
            correctAnswer: 1,
            explanation: 'The stronger the acid, the weaker (more stable) its conjugate base. The conjugate base of a strong acid has negligible tendency to accept a proton, while the conjugate base of a weak acid is a weak base that does accept protons to some extent.'
          }
        ]
      }
    },
    {
      id: 'ab3-oxyacids',
      type: 'text' as const,
      content: `
## 🧪 Oxyacids: Electronegativity and Number of Oxygens

In an oxyacid, the acidic H is bonded to an O atom, which is bonded to a central atom (H–O–X).

### Same central atom, more oxygens → stronger acid

| Acid | Formula | Strength |
|------|---------|----------|
| Hypochlorous | HClO | Weak |
| Chlorous | $\\text{HClO}_2$ | Weak (stronger) |
| Chloric | $\\text{HClO}_3$ | Strong |
| Perchloric | $\\text{HClO}_4$ | Strongest |

Each extra O atom pulls electron density away from the O–H bond (inductive effect) and gives the conjugate base more atoms over which to spread its charge (resonance).


---

### Same number of oxygens, more electronegative central atom → stronger acid

$$\\text{HOCl} > \\text{HOBr} > \\text{HOI}$$

Chlorine is the most electronegative, so it pulls the most electron density from the O–H bond and best stabilizes the conjugate base.


---

### Carboxylic Acids and Resonance

Carboxylic acids (–COOH) are a common class of weak acid (CED 8.6.A.1.ii). Their conjugate bases, carboxylate ions, are stabilized by resonance between two O atoms. Electronegative atoms near the –COOH group make the acid stronger through the inductive effect:

$$\\text{CH}_3\\text{COOH} < \\text{CH}_2\\text{ClCOOH} < \\text{CCl}_3\\text{COOH} \\quad \\text{(increasing acid strength)}$$
      `
    },
    {
      id: 'ab3-comparison-input',
      type: 'input-boxes' as const,
      content: `
**Which Acid Is Stronger?** 🧮

Type the formula of the **stronger** acid in each pair.

**1)** $\\text{HClO}_3$ or $\\text{HClO}_4$

**2)** HOCl or HOBr

**3)** $\\text{CH}_3\\text{COOH}$ or $\\text{CCl}_3\\text{COOH}$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'HClO4', acceptableAnswers: ['HClO4', 'perchloric acid'] }, { question: '(2)', answer: 'HOCl', acceptableAnswers: ['HOCl', 'HClO', 'hypochlorous acid'] }, { question: '(3)', answer: 'CCl3COOH', acceptableAnswers: ['CCl3COOH', 'trichloroacetic acid'] }],
        hint1: 'Same central atom: which has more oxygen atoms?',
        hint2: 'Same number of oxygens: which central atom is more electronegative?',
        hint3: 'Electronegative Cl atoms near the –COOH group pull electron density.',
        explanation: '1) $\\text{HClO}_4$: the extra O atom strengthens the inductive effect and spreads the conjugate base\'s charge over more atoms. 2) HOCl: Cl is more electronegative than Br. 3) $\\text{CCl}_3\\text{COOH}$: three electronegative Cl atoms stabilize the carboxylate ion by the inductive effect.'
      }
    },
    {
      id: 'ab3-bases',
      type: 'text' as const,
      content: `
## ✏️ Strong Bases and Common Weak Bases

| Type | Examples | Notes |
|------|----------|-------|
| **Strong bases** | Group 1 and Group 2 hydroxides: NaOH, KOH, $\\text{Ca(OH)}_2$, $\\text{Ba(OH)}_2$ | Dissociate completely; their conjugate acids (such as $\\text{H}_2\\text{O}$ formed from $\\text{OH}^-$) are very weak |
| **Weak nitrogen bases** | $\\text{NH}_3$, amines such as $\\text{CH}_3\\text{NH}_2$ | The lone pair on N accepts a proton to form $\\text{NH}_4^+$ or $\\text{CH}_3\\text{NH}_3^+$ |
| **Carboxylate ions** | $\\text{CH}_3\\text{COO}^-$ | The conjugate bases of carboxylic acids are weak bases |

> 🔑 **Key Concept:** Weak bases accept protons only partially in water. Ammonia and amines are the most common examples on the AP exam (CED 8.6.A.1.iv).
      `
    },
    {
      id: 'ab3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Structure and Strength Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A more stable conjugate base means the acid is',
            options: ['weaker', 'stronger', 'unchanged in strength', 'not an acid']
          },
          {
            label: 'Among HClO, $HClO_{2}$, $HClO_{3}$, and $HClO_{4}$, the strongest acid is',
            options: ['HClO', '$HClO_{2}$', '$HClO_{3}$', '$HClO_{4}$']
          },
          {
            label: 'The negative charge of a carboxylate ion is stabilized mainly by',
            options: ['resonance between two O atoms', 'a metal cation', 'hydrogen bonding to carbon', 'a full octet on carbon']
          },
          {
            label: 'Methylamine, $CH_{3}NH_{2}$, behaves in water as a',
            options: ['strong acid', 'weak acid', 'strong base', 'weak base']
          }
        ],
        correctAnswers: ['stronger', '$HClO_{4}$', 'resonance between two O atoms', 'weak base'],
        hint1: 'A stable conjugate base has little tendency to take the proton back.',
        hint2: 'More oxygens on the same central atom.',
        hint3: 'The charge is shared between the two oxygens.',
        explanation: 'A stable conjugate base means a stronger acid. $HClO_{4}$ has the most O atoms. Carboxylate charge is shared between two O atoms by resonance. Amines, like ammonia, are weak nitrogen bases.'
      }
    },
    {
      id: 'ab3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Structure and Acid Strength** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why HOCl is a stronger acid than HOI?',
            options: [
              'Cl is more electronegative than I',
              'HOCl has more oxygen atoms than HOI',
              'The O–H bond in HOCl is stronger than the O–H bond in HOI',
              'I is more electronegative than Cl, so HOI holds its proton more tightly'
            ],
            correctAnswer: 0,
            explanation: 'Both acids have one O atom, so the difference is the central atom. Chlorine is more electronegative than iodine, pulling more electron density away from the O–H bond and stabilizing $OCl^{-}$. A stronger O–H bond would make an acid weaker, not stronger, and iodine is less electronegative than chlorine.'
          },
          {
            question: 'Trichloroacetic acid, $CCl_{3}COOH$, is a much stronger acid than acetic acid, $CH_{3}COOH$. Which explanation is best?',
            options: [
              'The Cl atoms donate additional protons to water',
              'The Cl atoms withdraw electron density',
              'The C–Cl bonds break to release $H^{+}$',
              'Trichloroacetic acid has more O–H groups'
            ],
            correctAnswer: 1,
            explanation: 'The inductive effect of three electronegative Cl atoms draws electron density toward them, weakening the O–H bond and stabilizing the negative charge on the carboxylate. Cl atoms carry no protons, no C–Cl bonds break, and both acids have a single O–H group.'
          }
        ]
      }
    }
  ]
}
