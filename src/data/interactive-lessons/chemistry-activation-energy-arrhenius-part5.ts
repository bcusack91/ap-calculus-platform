export const chemActivationEnergyArrheniusPart5Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae5-intro',
      type: 'text' as const,
      content: `# 🏔️ Multistep Energy Profiles

**Part 5 of 7 — Energy Profiles for Reactions with More Than One Step**

---

### Topics in This Part

| Section |
|---------|
| 📌 Building a Multistep Energy Profile |
| Peaks, Valleys, and the Overall ΔH |
| 📌 Finding the Slowest Step |
| 🧪 Worked Example: A Two-Step Profile |

> 🔑 **Why this matters:** Many reactions occur in several elementary steps. Knowing the energetics of each step lets you build and read an energy profile for the whole reaction (CED 5.10.A.1).

---

### What You'll Master in Part 5
- Counting steps, transition states, and intermediates on a profile
- Finding each step's activation energy and the overall ΔH
- Identifying the slowest (rate-limiting) step from the profile`
    },
    {
      id: 'ae5-building-profile',
      type: 'text' as const,
      content: `
## 📌 Building a Multistep Energy Profile

Each elementary step has its own transition state, so a mechanism with $n$ steps produces a profile with $n$ peaks.

### Peaks, Valleys, and the Overall ΔH

| Feature on the profile | Meaning |
|------------------------|---------|
| Each **peak** | The transition state of one elementary step |
| Each **valley** between peaks | A reaction **intermediate** (formed in one step, used up in the next) |
| Rise from a valley to the next peak | The activation energy of that step |
| Starting level → final level | The overall $\\Delta H$ of the reaction |

> 🔑 **Key Concept:** The number of peaks equals the number of elementary steps. The number of valleys **between** peaks equals the number of intermediates.


---

### Steps Can Differ in Sign

Each step has its own energy change. A two-step reaction can have an endothermic first step (its valley sits above the reactants) and an exothermic second step, while the overall reaction is exothermic. Only the overall start and finish levels give the overall $\\Delta H$.
      `
    },
    {
      id: 'ae5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Reading Multistep Profiles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An energy profile has three peaks. How many elementary steps and intermediates does the mechanism have?',
            options: [
              'Three steps and three intermediates',
              'Three steps and two intermediates',
              'Two steps and three intermediates',
              'Three steps and one intermediate'
            ],
            correctAnswer: 1,
            explanation: 'Each peak is one transition state, so there are three elementary steps. The two valleys between the peaks are the intermediates. The reactants and products at the ends are not intermediates.'
          },
          {
            question: 'In a two-step energy profile, the valley between the two peaks sits higher than the reactants. What does this show?',
            options: [
              'The overall reaction is endothermic',
              'The first step is endothermic',
              'The second step is endothermic',
              'The intermediate is a catalyst'
            ],
            correctAnswer: 1,
            explanation: 'The first step goes from the reactants to the intermediate in the valley. If that valley is higher, the first step absorbs energy (endothermic). The overall ΔH depends on where the products end up, and an intermediate is formed and then consumed, unlike a catalyst.'
          },
          {
            question: 'What does the vertical distance between the reactants and the products on a multistep profile represent?',
            options: [
              'The activation energy of the slowest step',
              'The sum of all the activation energies',
              'The overall ΔH of the process',
              'The energy of the intermediate'
            ],
            correctAnswer: 2,
            explanation: 'The overall ΔH depends only on where the reaction starts and ends. Activation energies are measured from a starting level up to a peak, and the intermediate sits in a valley between peaks.'
          }
        ]
      }
    },
    {
      id: 'ae5-slowest-step',
      type: 'text' as const,
      content: `
## 📌 Finding the Slowest Step

Each step's rate depends on its own activation energy: the **taller the barrier for a step**, the slower that step. The slowest step limits the rate of the whole reaction.

| What to compare | How |
|-----------------|-----|
| Barrier of step 1 | Height of peak 1 above the reactants |
| Barrier of step 2 | Height of peak 2 above the intermediate valley |
| Slowest step | The step with the larger barrier |

> ⚠️ **Warning:** Measure each step's barrier from the level it **starts** at, not from the bottom of the graph. A tall second peak can still be a small barrier if the intermediate valley is also high.


---

## 🧪 Worked Example: A Two-Step Profile

> **Problem:** A two-step profile has these energies: reactants 40 kJ, transition state 1 at 120 kJ, intermediate at 70 kJ, transition state 2 at 95 kJ, products 10 kJ. Find each step's activation energy, the slowest step, and the overall ΔH.

> **Solution:**

| Quantity | Calculation | Value |
|----------|-------------|-------|
| $E_a$, step 1 | 120 − 40 | 80 kJ |
| $E_a$, step 2 | 95 − 70 | 25 kJ |
| Slowest step | larger barrier | **Step 1** |
| $\\Delta H$, step 1 | 70 − 40 | +30 kJ (endothermic) |
| $\\Delta H$, step 2 | 10 − 70 | −60 kJ (exothermic) |
| Overall $\\Delta H$ | 10 − 40 | **−30 kJ** |

Check: the step enthalpies add to the overall value, $+30 + (-60) = -30$ kJ.
      `
    },
    {
      id: 'ae5-profile-drill',
      type: 'input-boxes' as const,
      content: `
**Two-Step Profile Practice** 🧮

A two-step energy profile shows: reactants at 20 kJ, first transition state at 60 kJ, intermediate at 45 kJ, second transition state at 130 kJ, products at 0 kJ.

**1)** Activation energy of step 1 (in kJ)

**2)** Activation energy of step 2 (in kJ)

**3)** Which step is slower? (type **1** or **2**)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '40', acceptableAnswers: ['40'] }, { question: '(2)', answer: '85', acceptableAnswers: ['85'] }, { question: '(3)', answer: '2', acceptableAnswers: ['2', 'step 2'] }],
        hint1: 'Peak 1 minus the reactant level.',
        hint2: 'Peak 2 minus the intermediate level, not minus the reactants.',
        hint3: 'The step with the larger barrier is slower.',
        explanation: '1) 60 − 20 = 40 kJ. 2) 130 − 45 = 85 kJ. 3) Step 2 has the larger barrier, so it is the slower, rate-limiting step.'
      }
    },
    {
      id: 'ae5-catalyst-profile',
      type: 'text' as const,
      content: `
## ⚙️ Catalysts Change the Profile's Shape

A catalyst does not lower the original peak; it replaces the original pathway with a **new mechanism**. On a profile this often means:

- More peaks than the uncatalyzed reaction (more steps), but
- Every peak along the new path is **lower** than the uncatalyzed peak, and
- A new valley appears for the **intermediate in which the catalyst is bound to a reactant** (CED 5.11.A.3)

| Feature | Uncatalyzed | Catalyzed |
|---------|-------------|-----------|
| Number of steps | Often one | Often two or more |
| Highest barrier | Larger | Smaller |
| Starting and ending levels | Same | Same |
| Overall $\\Delta H$ | Same | Same |

> 💡 **Tip:** If an AP question shows two profiles with the same start and end but different humps, the one with the lower highest barrier is the catalyzed pathway.
      `
    },
    {
      id: 'ae5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Multistep Profile Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Each valley between two peaks on an energy profile represents',
            options: ['a transition state', 'an intermediate', 'a catalyst', 'the products']
          },
          {
            label: 'The activation energy of the second step is measured from',
            options: ['the reactants', 'the intermediate', 'the products', 'zero energy']
          },
          {
            label: 'Compared with the uncatalyzed profile, a catalyzed profile has',
            options: ['a different overall ΔH', 'a lower highest barrier', 'higher-energy products', 'fewer intermediates always']
          },
          {
            label: 'The slowest step of a mechanism is the step with',
            options: ['the most negative ΔH', 'the largest activation energy', 'the most reactants', 'the highest-energy products']
          }
        ],
        correctAnswers: ['an intermediate', 'the intermediate', 'a lower highest barrier', 'the largest activation energy'],
        hint1: 'Valleys are species that exist briefly between steps.',
        hint2: 'A step starts from the species it consumes.',
        hint3: 'A catalyst lowers the barrier without changing the start or end.',
        explanation: 'Valleys are intermediates. Step 2 starts from the intermediate, so its barrier is measured from there. A catalyzed pathway has a lower highest barrier and the same overall ΔH. The step with the largest activation energy is the slowest.'
      }
    },
    {
      id: 'ae5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Multistep Energy Profiles** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A two-step profile has reactants at 50 kJ, transition state 1 at 90 kJ, an intermediate at 30 kJ, transition state 2 at 110 kJ, and products at 0 kJ. Which step is slower?',
            options: [
              'Step 1, because its peak comes first',
              'Step 2, because its barrier is larger than step 1\'s',
              'Step 1, because it is exothermic overall',
              'Neither; both steps have a 40 kJ barrier'
            ],
            correctAnswer: 1,
            explanation: 'Step 1 barrier = 90 − 50 = 40 kJ; step 2 barrier = 110 − 30 = 80 kJ. The larger barrier belongs to step 2, so it is slower. Order of the peaks does not decide speed, and the step-2 barrier must be measured from the intermediate.'
          },
          {
            question: 'Two energy profiles for the same reaction start and end at the same levels. Profile A has one peak at 150 kJ above the reactants; profile B has two peaks at 70 kJ and 60 kJ above the reactants. Which statement is correct?',
            options: [
              'Profile B is the catalyzed reaction and has the same ΔH as A',
              'Profile A is the catalyzed reaction because it has fewer steps',
              'Profile B has a more negative ΔH because it has more steps',
              'Profile A is faster because a single step has no intermediate'
            ],
            correctAnswer: 0,
            explanation: 'Profile B reaches a much lower maximum, the signature of a catalyzed pathway with a new mechanism. Because both profiles start and end at the same levels, ΔH is the same. More steps do not change ΔH, and fewer steps do not make a reaction faster when the single barrier is higher.'
          }
        ]
      }
    }
  ]
}
