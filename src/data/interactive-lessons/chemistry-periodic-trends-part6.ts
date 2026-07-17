export const chemPeriodicTrendsPart6Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt6-intro',
      type: 'text' as const,
      content: `# Part 6: Ionic Radius

**Part 6 of 7 — How Does Gaining or Losing Electrons Change Size?**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'pt6-cations',
      type: 'text' as const,
      content: `## 📌 Cations Are Smaller Than Their Parent Atoms

When an atom **loses** electrons to form a cation:

> 💡 **Tip:** Cations lose electrons → fewer electrons, same protons → electrons pulled in tighter → **smaller** ion.

1. The outermost shell may be **completely emptied**, exposing a smaller inner shell
2. Even if the shell isn't emptied, fewer electrons means less electron-electron repulsion
3. The same nuclear charge pulls the remaining electrons **closer**


---

### Example: Na → $Na^{+}$

| | Na | $Na^{+}$ |
|--|-----|------|
| Protons | 11 | 11 |
| Electrons | 11 | 10 |
| Config | $1s^2\\,2s^2\\,2p^6\\,3s^1$ | $1s^2\\,2s^2\\,2p^6$ |
| Radius | 186 pm | 95 pm |

Sodium loses its single $3s$ electron, eliminating the entire $n = 3$ shell. The radius drops by nearly **half**.


---

### General Pattern

The more electrons removed, the smaller the cation:

$$\\text{Fe} (126\\text{ pm}) > \\text{Fe}^{2+} (76\\text{ pm}) > \\text{Fe}^{3+} (65\\text{ pm})$$`
    },
    {
      id: 'pt6-anions',
      type: 'text' as const,
      content: `## 📌 Anions Are Larger Than Their Parent Atoms

When an atom **gains** electrons to form an anion:

1. More electrons means increased **electron-electron repulsion**
2. The electron cloud **expands** as electrons push each other apart
3. The same nuclear charge now must hold **more** electrons


---

### Example: Cl → $Cl^{-}$

| | Cl | $Cl^{-}$ |
|--|-----|------|
| Protons | 17 | 17 |
| Electrons | 17 | 18 |
| Config | $[Ne]\\,3s^2\\,3p^5$ | $[Ne]\\,3s^2\\,3p^6$ |
| Radius | 99 pm | 181 pm |

Chlorine gains one electron, nearly **doubling** its radius due to increased electron repulsion with the same nuclear charge.


---

### Summary Table

| Ion Type | Size vs. Parent Atom | Example |
|----------|---------------------|---------|
| Cation ($+$) | **Smaller** | $Na^{+}$ (95 pm) < Na (186 pm) |
| Anion ($-$) | **Larger** | $Cl^{-}$ (181 pm) > Cl (99 pm) |`
    },
    {
      id: 'pt6-size-quiz',
      type: 'multiple-choice' as const,
      content: `### Cation vs. Anion Size`,
      exercise: {
        questions: [
          {
            question: 'Which is larger: a calcium atom (Ca) or a calcium ion $(Ca^{2+})$?',
            options: [
              '$Ca^{2+}$ is larger',
              'Ca is larger',
              'They are the same size',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$Ca^{2+}$ is a cation — it has lost 2 electrons. Cations are always smaller than their parent atoms. Ca loses its two $4s$ electrons, collapsing to the $3p^6$ shell.'
          },
          {
            question: 'Which is larger: a sulfur atom (S) or a sulfide ion $(S^{2-})$?',
            options: [
              'S is larger',
              '$S^{2-}$ is larger',
              'They are the same size',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$S^{2-}$ is an anion — it has gained 2 electrons. Anions are always larger than their parent atoms because the additional electrons increase electron-electron repulsion while the nuclear charge remains the same.'
          },
          {
            question: 'Which ion is smaller: $Fe^{2+}$ or $Fe^{3+}$?',
            options: [
              '$Fe^{2+}$',
              '$Fe^{3+}$',
              'They are the same size'
            ],
            correctAnswer: 1,
            explanation: '$Fe^{3+}$ has lost more electrons than $Fe^{2+}$ (3 vs. 2). More electrons removed means less electron-electron repulsion and a stronger pull on remaining electrons. $Fe^{3+}$ (65 pm) < $Fe^{2+}$ (76 pm).'
          }
        ]
      }
    },
    {
      id: 'pt6-isoelectronic',
      type: 'text' as const,
      content: `## 📌 Isoelectronic Series

An **isoelectronic series** is a set of atoms and ions that all have the **same number of electrons**.


---

### Example: The 10-Electron Series

All of the following species have 10 electrons (same as neon):

| Species | Protons | Electrons | Radius (pm) |
|---------|---------|-----------|-------------|
| $N^{3-}$ | 7 | 10 | 146 |
| $O^{2-}$ | 8 | 10 | 140 |
| $F^{-}$ | 9 | 10 | 133 |
| Ne | 10 | 10 | — |
| $Na^{+}$ | 11 | 10 | 95 |
| $Mg^{2+}$ | 12 | 10 | 65 |
| $Al^{3+}$ | 13 | 10 | 50 |


---

### The Rule

In an isoelectronic series, all species have the same electron count, so the size is determined entirely by **nuclear charge**:

$$\\boxed{\\text{More protons} = \\text{smaller radius}}$$

> 🔑 **Key Concept:** In an isoelectronic series, rank by proton count — the species with the **most protons** is the **smallest**.

$$\\text{N}^{3-} > \\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+} > \\text{Al}^{3+}$$`
    },
    {
      id: 'pt6-isoelectronic-quiz',
      type: 'multiple-choice' as const,
      content: `### Isoelectronic Series Practice`,
      exercise: {
        questions: [
          {
            question: 'In the isoelectronic series $O^{2-}$, $F^{-}$, $Na^{+}$, $Mg^{2+}$ (all with 10 electrons), which ion has the smallest radius?',
            options: [
              '$O^{2-}$',
              '$F^{-}$',
              '$Na^{+}$',
              '$Mg^{2+}$'
            ],
            correctAnswer: 3,
            explanation: 'All four species have 10 electrons. $Mg^{2+}$ has the most protons (12), so it pulls the electron cloud in most tightly, giving it the smallest radius.'
          },
          {
            question: 'Which of the following is NOT isoelectronic with the others?',
            options: [
              '$S^{2-}$ (18 electrons)',
              '$Cl^{-}$ (18 electrons)',
              '$K^{+}$ (18 electrons)',
              '$Na^{+}$ (10 electrons)'
            ],
            correctAnswer: 3,
            explanation: '$S^{2-}$, $Cl^{-}$, and $K^{+}$ all have 18 electrons (isoelectronic with argon). $Na^{+}$ has only 10 electrons (isoelectronic with neon).'
          }
        ]
      }
    },
    {
      id: 'pt6-ranking-input',
      type: 'input-box' as const,
      content: `### Ranking Exercises

**1.** Rank the following isoelectronic species from **smallest to largest** radius: $K^{+}$, $Cl^{-}$, $Ca^{2+}$, $S^{2-}$. All have 18 electrons. Type your answer as symbols separated by commas (smallest first).

**2.** Consider the pair $Mg^{2+}$ and $O^{2-}$. Both have 10 electrons. Which has the larger radius? (Type the ion, e.g., "Mg2+" or "O2-".)`,
      exercise: {
        inputs: [
          {
            label: 'Smallest to largest $(18e^{-} series)$:',
            correctAnswer: 'Ca2+, K+, Cl-, S2-',
            explanation: 'All have 18 electrons. Proton counts: $Ca^{2+}$ = 20, $K^{+}$ = 19, $Cl^{-}$ = 17, $S^{2-}$ = 16. More protons = smaller radius. So $Ca^{2+}$ < $K^{+}$ < $Cl^{-}$ < $S^{2-}$.'
          },
          {
            label: 'Larger ion:',
            correctAnswer: 'O2-',
            explanation: 'Both have 10 electrons. $O^{2-}$ has 8 protons; $Mg^{2+}$ has 12 protons. Fewer protons means less pull on the electrons → larger radius. $O^{2-}$ (140 pm) >> $Mg^{2+}$ (65 pm).'
          }
        ]
      }
    },
    {
      id: 'pt6-exit-dropdown',
      type: 'dropdown-select' as const,
      content: `### Exit Check: Ionic Radius`,
      exercise: {
        dropdowns: [
          {
            label: 'A cation is always ______ than its parent atom:',
            options: ['larger', 'smaller', 'the same size'],
            correctIndex: 1,
            explanation: 'Losing electrons reduces electron-electron repulsion and may eliminate the outermost shell entirely. Cations are always smaller than their parent atoms.'
          },
          {
            label: 'An anion is always ______ than its parent atom:',
            options: ['larger', 'smaller', 'the same size'],
            correctIndex: 0,
            explanation: 'Gaining electrons increases electron-electron repulsion. The same nuclear charge must hold more electrons, causing the electron cloud to expand.'
          },
          {
            label: 'In an isoelectronic series, the ion with the most protons is:',
            options: ['the largest', 'the smallest', 'the same size as the others'],
            correctIndex: 1,
            explanation: 'With the same number of electrons, more protons means a stronger pull on the electron cloud, resulting in a smaller radius.'
          },
          {
            label: 'Which is larger: $Na^{+}$ or $F^{-}$?',
            options: ['$Na^{+}$', '$F^{-}$', 'They are the same size'],
            correctIndex: 1,
            explanation: 'Both have 10 electrons. $Na^{+}$ has 11 protons; $F^{-}$ has 9. Fewer protons in $F^{-}$ means less pull → $F^{-}$ is larger (133 pm vs. 95 pm).'
          }
        ]
      }
    }
  ]
}
