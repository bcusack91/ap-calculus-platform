export const chemHybridizationSigmaPiBondsPart4Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-4-1',
      type: 'text',
      title: 'Determining Hybridization from Structure',
      content: `# 🔍 Hybridization from Molecular Structure

**Part 4 of 7 — Using Steric Number to Assign Hybridization**

---

### Topics in This Part

| Section |
|---------|
| Step 1: Draw the Lewis Structure |
| Step 2: Count Electron Domains |
| Step 3: Match Steric Number to Hybridization |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'hy-4-2',
      type: 'text',
      title: 'The Steric Number Method',
      content: `## Step-by-Step: Finding Hybridization

### Step 1: Draw the Lewis Structure

This gives you bond types and lone pairs.

### Step 2: Count Electron Domains

For the atom in question, count:
- Each single bond = 1 domain
- Each double bond = 1 domain
- Each triple bond = 1 domain
- Each lone pair = 1 domain

$$\\boxed{\\text{Steric Number} = \\text{bonded atoms} + \\text{lone pairs}}$$

### Step 3: Match Steric Number to Hybridization

| Steric Number | Hybridization | Geometry |
|--------------|---------------|----------|
| 2 | sp | Linear (180°) |
| 3 | $sp^{2}$ | Trigonal planar (120°) |
| 4 | $sp^{3}$ | Tetrahedral (109.5°) |

> ⚠️ **Warning:** Lone pairs count as electron domains! An atom with 2 bonds and 2 lone pairs has steric number 4 → $sp^{3}$ (not sp).`
    },
    {
      id: 'hy-4-3',
      type: 'text',
      title: 'Worked Examples',
      content: `## Worked Examples

> **Problem:** Determine the hybridization of oxygen in water $(H_{2}O)$.

> **Solution:**
> - O has 2 bonds + 2 lone pairs = **4 electron domains**
> - Steric number = 4 → **$sp^{3}$**
> - Electron geometry: tetrahedral
> - Molecular geometry: bent (because 2 lone pairs are "invisible")
> - Bond angle: ~104.5° (less than 109.5° due to lone pair compression)

---

> **Problem:** Determine the hybridization of the central oxygen in ozone $(O_{3})$.

> **Solution:**
> - Central O has 1 single bond + 1 double bond + 1 lone pair = **3 electron domains**
> - Steric number = 3 → **$sp^{2}$**
> - Electron geometry: trigonal planar
> - Molecular geometry: bent
> - Bond angle: ~117° (lone pair compresses slightly from 120°)

---

> **Problem:** Determine the hybridization of carbon in the cyanide ion $(CN^{-})$.

> **Solution:**
> - Carbon has 1 triple bond to nitrogen + 1 lone pair = **2 electron domains**
> - Steric number = 2 → **sp**
> - Geometry: linear

---

> **Problem:** Determine the hybridization of nitrogen in ammonia $(NH_{3})$.

> **Solution:**
> - N has 3 bonds + 1 lone pair = **4 electron domains**
> - Steric number = 4 → **$sp^{3}$**
> - Even though $NH_{3}$ has a trigonal pyramidal *molecular* shape, the nitrogen is still $sp^{3}$ hybridized`
    },
    {
      id: 'hy-4-4',
      type: 'multiple-choice',
      title: 'Hybridization from Electron Domains',
      content: 'Determine the hybridization of the indicated atom.',
      exercise: {
        questions: [
          {
            question: 'What is the hybridization of oxygen in water $(H_{2}O)$? (2 bonds, 2 lone pairs)',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'],
            correctAnswer: 2,
            explanation: 'Oxygen in $H_{2}O$ has 2 bonds + 2 lone pairs = 4 electron domains. Steric number 4 → $sp^{3}$ hybridization.'
          },
          {
            question: 'What is the hybridization of the central carbon in $CO_{3}^{2-}$? (3 resonance positions, 0 lone pairs)',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctAnswer: 1,
            explanation: 'Carbon in $CO_{3}^{2-}$ has 3 electron domains (bonded to 3 oxygen atoms, regardless of resonance) → $sp^{2}$ hybridization.'
          },
          {
            question: 'What is the hybridization of nitrogen in $NO_{2}^{-}$? (1 single bond + 1 double bond + 1 lone pair)',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctAnswer: 1,
            explanation: 'Nitrogen in $NO_{2}^{-}$ has 3 electron domains (1 single bond + 1 double bond + 1 lone pair) → $sp^{2}$ hybridization.'
          },
          {
            question: 'A central atom has 2 bonded atoms and 0 lone pairs. What is the bond angle?',
            options: ['109.5°', '120°', '180°', '90°'],
            correctAnswer: 2,
            explanation: '2 electron domains → sp hybridization → linear geometry → 180° bond angle.'
          }
        ]
      }
    },
    {
      id: 'hy-4-5',
      type: 'input-boxes',
      title: 'Steric Number and Hybridization Practice',
      content: 'Calculate the steric number and identify the hybridization.',
      exercise: {
        inputs: [
          {
            label: 'Steric number of sulfur in $SO_{2}$ (2 bonded atoms + 1 lone pair)',
            correctAnswer: '3',
            explanation: 'Sulfur in $SO_{2}$ has 2 bonds to oxygen + 1 lone pair = 3 electron domains. Steric number = 3.'
          },
          {
            label: 'Hybridization of sulfur in $SO_{2}$ (enter sp, sp2, or sp3)',
            correctAnswer: 'sp2',
            explanation: 'Steric number 3 → $sp^{2}$ hybridization. The molecule has a bent molecular geometry.'
          },
          {
            label: 'Steric number of carbon in $CH_{2}O$ (formaldehyde: 2 H atoms + 1 double bond to O, 0 lone pairs)',
            correctAnswer: '3',
            explanation: 'Carbon has 2 single bonds to H + 1 double bond to O = 3 electron domains. Steric number = 3.'
          },
          {
            label: 'Bond angle (degrees) predicted for an $sp^{2}$-hybridized atom with no lone pairs',
            correctAnswer: '120',
            explanation: '$sp^{2}$ hybridization with no lone pairs gives an ideal trigonal planar geometry with 120° bond angles.'
          }
        ]
      }
    },
    {
      id: 'hy-4-6',
      type: 'text',
      title: 'Common Mistakes',
      content: `## Common Mistakes to Avoid

> ⚠️ **Warning:** Hybridization ≠ molecular geometry! The shape you "see" may differ from what hybridization implies:
> - $H_{2}O$ is **bent** but oxygen is **$sp^{3}$**
> - $NH_{3}$ is **trigonal pyramidal** but nitrogen is **$sp^{3}$**
>
> Hybridization depends on the **total** number of electron domains (steric number), not just the bonding arrangement.

---

> ⚠️ **Warning:** Don\'t count double/triple bonds as multiple domains!
> - C=O is **1** electron domain (not 2)
> - C≡N is **1** electron domain (not 3)

---

> ⚠️ **Warning:** Always check for lone pairs on the atom of interest. They occupy hybrid orbitals just like bonding pairs — lone pairs count in hybridization!

---

> 💡 **Tip:** Hybridization applies to atoms that form covalent bonds. Terminal atoms (like H or F) don\'t need hybridization analysis — focus on **central atoms** or atoms bonded to multiple groups.`
    },
    {
      id: 'hy-4-7',
      type: 'dropdown-select',
      title: 'Bond Angles and Hybridization',
      content: 'Select the correct answer for each scenario.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-4-7-dd1',
            label: '$sp^{3}$ hybridization gives an ideal bond angle of',
            options: ['109.5°', '120°', '180°', '90°'],
            correctIndex: 0,
            explanation: '$sp^{3}$ hybridization gives an ideal bond angle of 109.5° (tetrahedral geometry).'
          },
          {
            id: 'hy-4-7-dd2',
            label: 'An atom with 3 bonds and 1 lone pair has steric number 4 → _______ hybridization',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctIndex: 2,
            explanation: 'An atom with 3 bonds and 1 lone pair has steric number 4 → $sp^{3}$ hybridization. The lone pair counts!'
          },
          {
            id: 'hy-4-7-dd3',
            label: 'Steric number 3 with 0 lone pairs → $sp^{2}$ → _______ electron and molecular',
            options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
            correctIndex: 1,
            explanation: 'Steric number 3 with 0 lone pairs → $sp^{2}$ → trigonal planar electron and molecular geometry.'
          },
          {
            id: 'hy-4-7-dd4',
            label: 'Adding a lone pair changes the steric number from 3 to 4',
            options: ['Stays $sp^{2}$', 'Changes to $sp^{3}$', 'Changes to sp', 'Becomes unhybridized'],
            correctIndex: 1,
            explanation: 'Adding a lone pair changes the steric number from 3 to 4, changing the hybridization from $sp^{2}$ to $sp^{3}$.'
          }
        ]
      }
    },
    {
      id: 'hy-4-8',
      type: 'multiple-choice',
      title: 'Exit Quiz — Hybridization from Structure',
      content: 'Apply the steric number method to determine hybridization.',
      exercise: {
        questions: [
          {
            question: 'In the molecule $H_{2}C$=CH–$CH_{3}$ (propene), what is the hybridization of the middle carbon?',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctAnswer: 1,
            explanation: 'The middle carbon has 3 electron domains: 1 C=C double bond + 1 C–C single bond + 1 C–H bond. Steric number = 3 → $sp^{2}$.'
          },
          {
            question: 'In carbon monoxide (CO, which has a triple bond and a lone pair on C), what is the hybridization of carbon?',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'],
            correctAnswer: 0,
            explanation: 'Carbon in CO has 1 triple bond + 1 lone pair = 2 electron domains. Steric number = 2 → sp hybridization.'
          }
        ]
      }
    }
  ]
};
