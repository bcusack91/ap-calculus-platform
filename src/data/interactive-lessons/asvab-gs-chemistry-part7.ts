export const asvabGsChemistryPart7Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc7-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 7 of 7 — Mixed Mastery Set**

### How to Use This Set

These 11 questions mix everything from Parts 2–5, in the same style and difficulty range as GS chemistry on the ASVAB: a few quick recall questions, several one-step reasoning questions, and a few that need careful thought.

- Give yourself about **48 seconds** per question, the CAT-ASVAB pace.
- Do the arithmetic on scratch paper; no calculator.
- When you miss one, go back to the part it came from:

| If you missed a question about... | Review |
|:---|:---|
| density, states, phase changes, physical vs chemical change | Part 2 |
| protons, neutrons, electrons, ions, the periodic table | Part 3 |
| compounds, mixtures, solutions, formulas, salt on ice | Part 4 |
| pH, reactions, balancing, catalysts, heat in reactions | Part 5 |`
    },
    {
      id: 'gsc7-mc1',
      type: 'multiple-choice' as const,
      content: '**Mastery set, questions 1–4.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which state of matter has a definite volume but takes the shape of its container?',
            options: ['Liquid', 'Solid', 'Gas', 'Plasma'],
            correctAnswer: 0,
            explanation: 'A liquid keeps its volume but flows to fit its container. A solid keeps both its shape and volume, and a gas or plasma spreads out to fill the whole container.'
          },
          {
            question: 'What is the chemical symbol for mercury?',
            options: ['Hg', 'Me', 'Mg', 'Mn'],
            correctAnswer: 0,
            explanation: 'Mercury is Hg, from its Latin name hydrargyrum ("liquid silver"). Mg is magnesium and Mn is manganese; there is no element with the symbol Me.'
          },
          {
            question: 'A plastic block has a density of 1.3 g/cm³. What happens when it is placed in a tub of fresh water?',
            options: ['It sinks, since it is denser than water', 'It floats, since its density is near 1', 'It sinks only if the block is large enough', 'It floats, since plastic is lighter than water'],
            correctAnswer: 0,
            explanation: 'Fresh water has a density of about 1 g/cm³, and 1.3 is greater than 1, so the block sinks. "Close to 1" still means denser, the size of the block does not change its density, and this plastic is denser than water, not lighter.'
          },
          {
            question: 'Which type of reaction follows the pattern $AB + CD \\rightarrow AD + CB$?',
            options: ['Double replacement', 'Single replacement', 'Synthesis', 'Decomposition'],
            correctAnswer: 0,
            explanation: 'Two compounds swap partners, so two parts are replaced: double replacement. Single replacement has one element replacing another ($A + BC \\rightarrow AC + B$), synthesis combines into one product, and decomposition breaks one compound apart.'
          }
        ]
      }
    },
    {
      id: 'gsc7-mc2',
      type: 'multiple-choice' as const,
      content: '**Mastery set, questions 5–8.** 🎯 These take a step of reasoning.',
      exercise: {
        questions: [
          {
            question: 'A cook dissolves a large amount of salt in a pot of water. Compared with plain water, the salty water will:',
            options: ['Boil at a slightly higher temperature', 'Boil at a slightly lower temperature', 'Freeze at a slightly higher temperature', 'Boil at exactly the same temperature'],
            correctAnswer: 0,
            explanation: 'Dissolved particles raise the boiling point and lower the freezing point of water. So the salty water boils at a slightly higher temperature (and would freeze at a lower one, not a higher one).'
          },
          {
            question: 'A gas is pushed into a container half the size, with no gas added or removed and the temperature unchanged. What happens to the density of the gas?',
            options: ['It increases', 'It decreases', 'It stays the same', 'It drops to zero'],
            correctAnswer: 0,
            explanation: 'The mass stays the same while the volume shrinks, so mass ÷ volume gets larger: the particles are packed closer together. Density would fall only if the gas spread into more space.'
          },
          {
            question: 'Which of these best describes what happens when an iron fence rusts?',
            options: ['Iron combining with oxygen', 'Iron dissolving into rainwater', 'Iron melting at a low heat', 'Iron losing its protons'],
            correctAnswer: 0,
            explanation: 'Rusting is oxidation: iron combines with oxygen (with water helping) to form iron oxide, a new substance. Rust is not dissolved or melted iron, and protons never change in a chemical reaction.'
          },
          {
            question: 'Lithium is in the same group of the periodic table as sodium. Which prediction about lithium is most reasonable?',
            options: ['Like sodium, it reacts with water', 'Like neon, it is an unreactive gas', 'Like chlorine, it is a nonmetal', 'It has exactly the same mass as sodium'],
            correctAnswer: 0,
            explanation: 'Elements in the same group have the same number of outer electrons, so they react in similar ways: lithium, like sodium, is an alkali metal that reacts with water. Neon and chlorine are in other groups, and elements in the same group have different masses.'
          }
        ]
      }
    },
    {
      id: 'gsc7-input',
      type: 'input-boxes' as const,
      content: `**Mastery set, questions 9–11.** ✍️

An atom has **19 protons** and **20 neutrons**.

**9)** Its mass number:

**10)** The number of electrons in the ion it forms when it has a charge of $+1$:

**11)** Balance the equation $N_2 + \\_\\_\\, H_2 \\rightarrow 2NH_3$. The coefficient in front of $H_2$ is:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['39', '18', '3'],
        hint1: 'Mass number = protons + neutrons.',
        hint2: 'A $+1$ charge means one more proton than electrons.',
        hint3: '$2NH_3$ contains $2 \\times 3 = 6$ hydrogen atoms.',
        explanation: '(9) $19 + 20 = 39$. (10) A neutral atom would have 19 electrons; a $+1$ ion has lost one, leaving 18. (11) The right side has 6 hydrogen atoms, and each $H_2$ has 2, so the left side needs $3H_2$ (nitrogen is already balanced: 2 = 2).'
      }
    },
    {
      id: 'gsc7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- **Density** decides floating (water ≈ 1 g/cm³), and squeezing the same mass into less space raises it
- **Atomic number = protons**, **mass number = protons + neutrons**, charge = protons − electrons
- Same group of the periodic table → **similar reactions**
- Dissolved substances **raise the boiling point** and **lower the freezing point**
- Know the five reaction types, and balance with **coefficients**
- Rusting = iron + oxygen (oxidation), a **chemical** change

> **You finished Chemistry: Matter and Reactions.** Next, take the exit quiz for this topic, then move on to the next General Science topic.`
    }
  ]
};
