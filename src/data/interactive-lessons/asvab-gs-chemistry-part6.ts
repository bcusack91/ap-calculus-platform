export const asvabGsChemistryPart6Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc6-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on GS

| Version | Questions | Time | Per question |
|:---|:---:|:---:|:---:|
| CAT-ASVAB | 15 scored | 12 min | about **48 seconds** |
| Paper test | 25 | 11 min | about 26 seconds |

On the CAT-ASVAB, remaining time and remaining questions show in the **lower-right corner** of the screen.

### How the computer test treats you

- **No going back.** Answer each question for real before you move on: there is no "flag and return."
- **Adaptive.** The first question is of average difficulty; a correct answer usually brings a harder question and a wrong one an easier question. A hard question means you are doing well, so don't panic.
- **Tryout questions** may be mixed in, and you can't tell which, so treat every question as scored.
- **Don't speed-guess at the end.** Unfinished questions are scored as if you had guessed at random, and the official guidance says the CAT applies a relatively large penalty when several wrong answers come in a row near the end of a subtest. If time is short, keep reading and genuinely answering.
- **Paper test:** answer every question; there is no penalty for guessing.

> **Key Fact:** Most chemistry questions take one fact. If you know the fact, answer in 15–20 seconds and bank the time for the questions that need a step of reasoning.`
    },
    {
      id: 'gsc6-traps',
      type: 'text' as const,
      content: `## The Traps Wrong Answers Are Built From

| Trap | The wrong answer says... | The truth |
|:---|:---|:---|
| **Mass number vs atomic number** | the number of protons, or the neutrons alone | mass number = **protons + neutrons** |
| **Ion charge backwards** | losing electrons makes an atom negative | losing negatives leaves it **positive** |
| **pH direction** | a higher pH is more acidic | **lower** pH is more acidic |
| **pH steps** | pH 3 is 2 times as acidic as pH 5 (just subtracting) | each step is **10 times**; 2 steps = **100 times** |
| **Dissolving** | dissolving sugar is a chemical change | dissolving is **physical**; no new substance forms |
| **Evaporation vs boiling** | evaporation needs the boiling point | evaporation happens at the **surface**, at **any** temperature |
| **Latin symbols** | S is sodium, P is potassium, Ir is iron | **Na, K, Fe** (also Ag silver, Au gold, Pb lead) |
| **Catalyst** | it is used up, or it becomes a product | it speeds things up and is **not consumed** |
| **Mixture vs compound** | salt water or air is a compound | both are **mixtures**; water, salt and $CO_2$ are compounds |
| **Salt on ice** | salt heats the ice | salt **lowers the freezing point** |
| **Ice** | solids are always denser than liquids | **ice is less dense** than water and floats |

## Three Moves for Every Question

1. **Spot the keyword.** "Protons" means atomic number; "neutral" means pH 7 or no charge; "new substance" means chemical change; "not used up" means catalyst.
2. **Kill the opposite.** Many wrong answers flip the right one (gain/lose, acid/base, raise/lower). Decide the direction first, then choose.
3. **Distrust extreme words.** Options with "always," "never" or "all" are usually wrong in science unless the rule truly has no exceptions.`
    },
    {
      id: 'gsc6-mc',
      type: 'multiple-choice' as const,
      content: '**Trap check.** 🎯 Each question is built around one of the traps above.',
      exercise: {
        questions: [
          {
            question: 'An atom has 26 protons and 30 neutrons. What is its mass number?',
            options: ['56', '26', '30', '4'],
            correctAnswer: 0,
            explanation: 'Mass number = protons + neutrons = $26 + 30 = 56$. The 26 is the atomic number (it makes the atom iron), 30 is the neutron count alone, and 4 is the difference between them.'
          },
          {
            question: 'Which of these is NOT a chemical change?',
            options: ['Butter melting in a hot pan', 'Bread turning to toast', 'Milk going sour', 'A cake baking'],
            correctAnswer: 0,
            explanation: 'Melting changes only the state: melted butter is still butter, so it is a physical change. Toasting, souring and baking all produce new substances with new colors, flavors or textures, so they are chemical changes.'
          },
          {
            question: 'A solution has a pH of 3. Another has a pH of 6. How do they compare?',
            options: ['The pH 3 solution is 1,000 times as acidic', 'The pH 6 solution is 1,000 times as acidic', 'The pH 3 solution is 3 times as acidic', 'The pH 3 solution is twice as acidic'],
            correctAnswer: 0,
            explanation: 'Lower pH is more acidic, so the pH 3 solution is the stronger acid. They are 3 steps apart and each step is a factor of 10: $10 \\times 10 \\times 10 = 1{,}000$. "3 times" and "twice" treat the scale as ordinary subtraction or division.'
          },
          {
            question: 'A calcium atom loses 2 electrons. What is the charge of the ion it forms?',
            options: ['+2', '−2', '0', '+20'],
            correctAnswer: 0,
            explanation: 'Losing 2 negative electrons leaves 2 more protons than electrons, so the charge is $+2$. Gaining electrons would give $-2$, the protons are unchanged so the charge is not 0, and $+20$ confuses the charge with the number of protons.'
          },
          {
            question: 'Which symbol stands for silver?',
            options: ['Ag', 'Au', 'Si', 'S'],
            correctAnswer: 0,
            explanation: 'Silver is Ag (Latin argentum). Au is gold, Si is silicon and S is sulfur.'
          }
        ]
      }
    },
    {
      id: 'gsc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Decide the direction first.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Dissolving antifreeze in radiator water makes the freezing point:',
            options: ['Lower', 'Higher', 'Exactly 0 °C', 'Unchanged'],
            correctAnswer: 0
          },
          {
            label: 'Moving from pH 9 to pH 12, a solution becomes:',
            options: ['More basic', 'More acidic', 'Neutral', 'Less basic'],
            correctAnswer: 0
          },
          {
            label: 'Compared with liquid water, the density of ice is:',
            options: ['Lower', 'Higher', 'The same', 'Zero'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Lower', 'More basic', 'Lower'],
        hint1: 'Dissolved particles get in the way of freezing.',
        hint2: 'Above 7 is basic, and higher means more basic.',
        hint3: 'Ice floats on water.',
        explanation: 'A dissolved substance lowers the freezing point, which is the whole point of antifreeze. Above 7, a higher pH means a stronger base. Ice floats because it is less dense than liquid water.'
      }
    },
    {
      id: 'gsc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **48 seconds** per GS question on the CAT (15 in 12 minutes); most chemistry facts take far less
- **No going back**, and don't speed-guess at the end: a run of wrong answers late in a subtest is penalized
- Common traps: mass number vs atomic number, ion charge direction, **pH direction and 10× steps**, dissolving is physical, Latin symbols, catalysts not used up, mixture vs compound
- Spot the keyword, **decide the direction**, then distrust "always" and "never"

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`
    }
  ]
};
