export const chemPeriodicTrendsPart2Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt2-intro',
      type: 'text' as const,
      content: `# Part 2: Atomic Radius

**Part 2 of 7 — How Big Are Atoms?**

---

### Topics in This Part

| Section |
|---------|
| Approximate Atomic Radii (in pm) |
| Why? |
| Example: Period 2 |
| Why? |
| Example: Group 1 (Alkali Metals) |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'pt2-definition',
      type: 'text' as const,
      content: `## 📖 What Is Atomic Radius?

An atom doesn't have a sharp boundary — the electron cloud fades gradually. So chemists define atomic radius in practical terms:

- **Covalent radius:** Half the distance between the nuclei of two identical bonded atoms.
- **Van der Waals radius:** Half the distance between nuclei of adjacent atoms in a solid that are not chemically bonded.

For periodic trend discussions, we usually refer to the **covalent (bonding) atomic radius**.


---

### Approximate Atomic Radii (in pm)

| Element | Radius (pm) | Element | Radius (pm) |
|---------|------------|---------|------------|
| Li | 152 | Na | 186 |
| Be | 112 | Mg | 160 |
| B | 87 | Al | 143 |
| C | 77 | Si | 117 |
| N | 75 | P | 110 |
| O | 73 | S | 104 |
| F | 72 | Cl | 99 |`
    },
    {
      id: 'pt2-across-period',
      type: 'text' as const,
      content: `## � Trend Across a Period (Left → Right)

**Atomic radius decreases across a period.**

> 🔑 **Key Concept:** More protons + same shielding = higher $Z_{eff}$ = electrons pulled closer = smaller atom.


---

### Why?

As you move from left to right across a period:
1. Each element has **one more proton** in the nucleus
2. Each element has **one more electron**, but in the **same shell**
3. Electrons in the same shell shield each other **poorly**
4. $Z_{eff}$ **increases** → the nucleus pulls valence electrons **closer**
5. The atom **shrinks**


---

### Example: Period 2

$$\\boxed{\\text{Li} > \\text{Be} > \\text{B} > \\text{C} > \\text{N} > \\text{O} > \\text{F}}$$
$$152 > 112 > 87 > 77 > 75 > 73 > 72 \\text{ pm}$$

The radius drops by more than half from lithium to fluorine — a dramatic shrinkage driven entirely by increasing $Z_{eff}$.`
    },
    {
      id: 'pt2-down-group',
      type: 'text' as const,
      content: `## 📈 Trend Down a Group (Top → Bottom)

**Atomic radius increases down a group.**

> 🔑 **Key Concept:** Each new period adds an entire electron shell, pushing valence electrons farther from the nucleus.


---

### Why?

As you move down a group:
1. Each period adds a new **principal energy level** (shell)
2. Valence electrons are farther from the nucleus
3. Although $Z$ increases, so does shielding (new core electrons added)
4. $Z_{eff}$ stays roughly constant but the **distance** from nucleus increases
5. The atom **expands**


---

### Example: Group 1 (Alkali Metals)

$$\\text{Li} < \\text{Na} < \\text{K} < \\text{Rb} < \\text{Cs}$$
$$152 < 186 < 227 < 248 < 265 \\text{ pm}$$

Each step down adds an entire new electron shell, making the atom significantly larger.`
    },
    {
      id: 'pt2-summary-diagram',
      type: 'text' as const,
      content: `## 📋 Visual Summary

$$\\boxed{\\text{Atomic Radius Trends}}$$

| Direction | Trend | Reason |
|-----------|-------|--------|
| → Across period | **Decreases** | $Z_{eff}$ increases; same shell, poor shielding |
| ↓ Down group | **Increases** | New shell added; greater distance from nucleus |


---

### Quick Rule of Thumb

The **largest atoms** are in the **bottom-left** of the periodic table (Cs, Fr).

The **smallest atoms** are in the **top-right** (excluding noble gases, which aren't typically measured by covalent radius).

Think: **"Down and to the left = bigger."**

> 💡 **Tip:** When comparing atoms in different groups AND different periods, check both directions. If both effects agree (e.g., lower period AND farther left), the answer is clear. If they conflict, you may need data.`
    },
    {
      id: 'pt2-ranking-quiz',
      type: 'multiple-choice' as const,
      content: `### Ranking Atomic Radii`,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly ranks these atoms from smallest to largest atomic radius?',
            options: [
              'Na < Mg < Al < Si',
              'Si < Al < Mg < Na',
              'Na < Si < Mg < Al',
              'Mg < Na < Al < Si'
            ],
            correctAnswer: 1,
            explanation: 'Na, Mg, Al, and Si are all in Period 3. Atomic radius decreases left to right, so Na is largest and Si is smallest. From smallest to largest: Si < Al < Mg < Na.'
          },
          {
            question: 'Which atom has the largest atomic radius?',
            options: [
              'O',
              'S',
              'Se',
              'F'
            ],
            correctAnswer: 2,
            explanation: 'O, S, and Se are all in Group 16. Radius increases down the group, so Se (Period 4) > S (Period 3) > O (Period 2). F (Period 2, Group 17) is even smaller than O.'
          },
          {
            question: 'Which pair correctly shows the atom with the larger radius listed first?',
            options: [
              'N > O',
              'F > Cl',
              'Mg > Ca',
              'C > Si'
            ],
            correctAnswer: 0,
            explanation: 'N and O are both in Period 2. Radius decreases left to right, so N > O is correct. F < Cl (Cl is below F), Mg < Ca (Ca is below Mg), and C < Si (Si is below C).'
          }
        ]
      }
    },
    {
      id: 'pt2-compare-input',
      type: 'input-box' as const,
      content: `### Comparing Radii

For each pair, type the chemical symbol of the atom with the **larger** atomic radius.

**1.** K vs. Ca (both in Period 4)

**2.** Br vs. I (both in Group 17)

**3.** Al vs. N (Al is in Period 3 Group 13; N is in Period 2 Group 15)`,
      exercise: {
        inputs: [
          {
            label: 'Larger of K vs. Ca:',
            correctAnswer: 'K',
            explanation: 'K and Ca are both in Period 4. K is to the left of Ca, so K has a larger radius (lower $Z_{eff}$, fewer protons pulling electrons inward).'
          },
          {
            label: 'Larger of Br vs. I:',
            correctAnswer: 'I',
            explanation: 'Br and I are both in Group 17. I is below Br (Period 5 vs. Period 4), so I has a larger radius due to the additional electron shell.'
          },
          {
            label: 'Larger of Al vs. N:',
            correctAnswer: 'Al',
            explanation: 'Al (Period 3) is both below and to the left of N (Period 2). Both effects make Al larger: it has an extra shell AND lower $Z_{eff}$ for its period.'
          }
        ]
      }
    },
    {
      id: 'pt2-exit-quiz',
      type: 'dropdown-select' as const,
      content: `### Exit Check: Atomic Radius`,
      exercise: {
        dropdowns: [
          {
            label: 'Across a period, atomic radius:',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: 'Atomic radius decreases across a period because $Z_{eff}$ increases while electrons enter the same shell.'
          },
          {
            label: 'The element with the largest atomic radius in Period 3 is:',
            options: ['Si', 'Cl', 'Na', 'Ar'],
            correctIndex: 2,
            explanation: 'Na is farthest left in Period 3, so it has the largest atomic radius (lowest $Z_{eff}$).'
          },
          {
            label: 'Atomic radius increases down a group because:',
            options: [
              'Zeff increases dramatically',
              'A new principal energy level is added each period',
              'Electrons are removed from inner shells',
              'The nucleus shrinks'
            ],
            correctIndex: 1,
            explanation: 'Each period adds a new electron shell. Although nuclear charge increases, the additional core electrons shield the new shell. The dominant effect is the increased distance from the nucleus.'
          },
          {
            label: 'Which is larger: Li or Cs?',
            options: ['Li', 'Cs', 'They are the same size'],
            correctIndex: 1,
            explanation: 'Both are in Group 1, and Cs is far below Li. Cs has 6 electron shells vs. Li\'s 2, making Cs dramatically larger.'
          }
        ]
      }
    }
  ]
}
