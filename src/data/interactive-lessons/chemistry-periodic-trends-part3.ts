export const chemPeriodicTrendsPart3Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt3-intro',
      type: 'text' as const,
      content: `# Part 3: Ionization Energy

**Part 3 of 7 — How Tightly Do Atoms Hold Their Electrons?**

Ionization energy measures how difficult it is to remove an electron from an atom. This property is central to understanding reactivity: metals lose electrons easily (low ionization energy), while nonmetals hold onto them tightly (high ionization energy).`
    },
    {
      id: 'pt3-definition',
      type: 'text' as const,
      content: `## 📖 What Is Ionization Energy?

**Ionization energy (IE)** is the minimum energy required to remove the most loosely bound electron from a gaseous atom or ion.

$$X(g) \\rightarrow X^+(g) + e^- \\qquad \\Delta E = IE_1$$

- $IE_1$ = **first ionization energy** (removing the first electron)
- $IE_2$ = **second ionization energy** (removing a second electron from $X^+$)
- And so on for $IE_3$, $IE_4$, etc.


---

### Important Details

- Ionization energy is always **positive** (energy must be **added** to remove an electron)
- Measured in **kJ/mol** or **eV**
- We usually focus on the **first** ionization energy ($IE_1$) when discussing periodic trends`
    },
    {
      id: 'pt3-across-period',
      type: 'text' as const,
      content: `## 📈 Trend Across a Period (Left → Right)

**First ionization energy generally increases across a period.**


---

### Why?

Moving left to right across a period:
1. $Z_{eff}$ increases (more protons, same shielding)
2. Valence electrons are held more tightly
3. It takes **more energy** to remove an electron


---

### First Ionization Energies in Period 2 (kJ/mol)

| Li | Be | B | C | N | O | F | Ne |
|----|-----|---|----|---|----|---|----|
| 520 | 900 | 801 | 1086 | 1402 | 1314 | 1681 | 2081 |


---

### Notice the Exceptions!

The trend is **generally** upward, but there are two dips:

1. **B < Be:** Boron's outermost electron is in a $2p$ orbital (higher energy, easier to remove) versus beryllium's $2s$ orbital.

2. **O < N:** Nitrogen has a half-filled $2p^3$ configuration (extra stability). Oxygen's fourth $2p$ electron is **paired**, experiencing electron-electron repulsion that makes it easier to remove.

These exceptions are frequently tested on the AP exam!`
    },
    {
      id: 'pt3-down-group',
      type: 'text' as const,
      content: `## 📈 Trend Down a Group (Top → Bottom)

**First ionization energy decreases down a group.**


---

### Why?

Moving down a group:
1. Valence electrons are in higher energy levels, **farther** from the nucleus
2. More shielding from additional core electron shells
3. The outermost electron is easier to remove → **lower $IE_1$**


---

### Example: Group 1 (Alkali Metals) $IE_1$ (kJ/mol)

| Li | Na | K | Rb | Cs |
|----|----|---|----|----|
| 520 | 496 | 419 | 403 | 376 |

This explains why cesium is more reactive than lithium — its valence electron is much easier to remove.`
    },
    {
      id: 'pt3-trend-quiz',
      type: 'multiple-choice' as const,
      content: `### Ionization Energy Trends`,
      exercise: {
        questions: [
          {
            question: 'Which element has the highest first ionization energy?',
            options: [
              'Na',
              'Mg',
              'Al',
              'Cl'
            ],
            correctAnswer: 3,
            explanation: 'All four elements are in Period 3. $IE_1$ generally increases across a period, so Cl (Group 17) has the highest among these choices.'
          },
          {
            question: 'The first ionization energy of oxygen is slightly LESS than that of nitrogen because:',
            options: [
              'Oxygen has fewer protons',
              'Oxygen has a paired electron in one 2p orbital, increasing electron-electron repulsion',
              'Nitrogen is a larger atom',
              'Oxygen is a noble gas'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen has a half-filled $2p^3$ configuration ($\\uparrow$ $\\uparrow$ $\\uparrow$). Oxygen adds a fourth electron that must pair up ($\\uparrow\\!\\!\\downarrow$ $\\uparrow$ $\\uparrow$). The repulsion between paired electrons in the same orbital makes that electron easier to remove.'
          },
          {
            question: 'Which of the following has the lowest first ionization energy?',
            options: [
              'Li',
              'Na',
              'K',
              'Be'
            ],
            correctAnswer: 2,
            explanation: 'Li, Na, and K are all in Group 1. $IE_1$ decreases down the group, so K has the lowest. Be is in Group 2 with a higher $IE_1$ than any Group 1 element in the same period.'
          }
        ]
      }
    },
    {
      id: 'pt3-successive-ie',
      type: 'text' as const,
      content: `## ⚛️ Successive Ionization Energies

Each successive ionization energy is **larger** than the previous one because:
- You're removing an electron from a **more positive** ion
- The remaining electrons are held more tightly


---

### The Big Jump

The most important pattern: there is a **huge jump** in ionization energy when you start removing **core electrons**.


---

### Example: Magnesium ($1s^2\\,2s^2\\,2p^6\\,3s^2$)

| $IE_1$ | $IE_2$ | $IE_3$ | $IE_4$ |
|--------|--------|--------|--------|
| 738 | 1,451 | 7,733 | 10,543 |

The jump from $IE_2$ to $IE_3$ is **enormous** — more than 5× larger! This is because $IE_1$ and $IE_2$ remove the two $3s$ valence electrons, but $IE_3$ must remove a **core** electron from the tightly held $2p$ subshell.


---

### AP Insight

If you see successive IE data, the **location of the big jump** tells you the **number of valence electrons**:
- Jump after $IE_2$ → 2 valence electrons (Group 2)
- Jump after $IE_3$ → 3 valence electrons (Group 13)
- Jump after $IE_1$ → 1 valence electron (Group 1)`
    },
    {
      id: 'pt3-successive-quiz',
      type: 'multiple-choice' as const,
      content: `### Successive IE Analysis`,
      exercise: {
        questions: [
          {
            question: 'An element has the following successive ionization energies (kJ/mol): 578, 1,817, 2,745, 11,578, 14,842. This element is most likely in Group:',
            options: [
              '1',
              '2',
              '13',
              '14'
            ],
            correctAnswer: 2,
            explanation: 'The huge jump occurs between $IE_3$ (2,745) and $IE_4$ (11,578) — a factor of about 4×. This means the element has 3 valence electrons, placing it in Group 13 (like Al).'
          },
          {
            question: 'For sodium ($Z = 11$), which ionization energy shows the largest jump from the previous one?',
            options: [
              '$IE_1$ to $IE_2$',
              '$IE_2$ to $IE_3$',
              '$IE_3$ to $IE_4$',
              '$IE_{10}$ to $IE_{11}$'
            ],
            correctAnswer: 0,
            explanation: 'Sodium has 1 valence electron. After removing it ($IE_1$), the next electron comes from the core ($2p$ subshell). The jump from $IE_1$ to $IE_2$ is the largest because it crosses from valence to core electrons.'
          }
        ]
      }
    },
    {
      id: 'pt3-practice-input',
      type: 'input-box' as const,
      content: `### Practice Problems

1. Rank these elements from lowest to highest $IE_1$: Na, Mg, K. Type your answer as three symbols separated by commas with the lowest first (e.g., "K, Na, Mg").

2. An element has successive IEs (kJ/mol): 786, 1,577, 3,232, 4,356, 16,091. How many valence electrons does this element have? (Enter a number.)`,
      exercise: {
        inputs: [
          {
            label: 'Ranking (lowest IE first):',
            correctAnswer: 'K, Na, Mg',
            explanation: 'K (Period 4, Group 1) has the lowest $IE_1$ — farthest down in Group 1. Na (Period 3, Group 1) is next. Mg (Period 3, Group 2) has the highest — it is to the right of Na and has a full $3s^2$ subshell.'
          },
          {
            label: 'Number of valence electrons:',
            correctAnswer: '4',
            explanation: 'The huge jump occurs between $IE_4$ (4,356) and $IE_5$ (16,091) — nearly a 4× increase. This means 4 electrons are relatively easy to remove (valence), and the 5th requires breaking into the core. The element has 4 valence electrons (Group 14, like Si or C).'
          }
        ]
      }
    }
  ]
}
