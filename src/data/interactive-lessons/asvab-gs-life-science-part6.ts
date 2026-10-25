export const asvabGsLifeSciencePart6Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl6-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on GS

| Version | Questions | Time | Per question |
|:---|:---:|:---:|:---:|
| CAT-ASVAB | 15 scored | 12 min | about **48 seconds** |
| Paper test | 25 | 11 min | about 26 seconds |

On the CAT-ASVAB, the time and questions remaining show in the **lower-right corner** of the screen.

### How the computer test treats you

- **No going back.** You can't return to a question once you answer it, so give each one your real best answer before moving on.
- **Adaptive.** The first question is of average difficulty. A correct answer usually brings a harder question; a wrong one, an easier question. Getting a hard question is a sign you are doing well.
- **Tryout questions** may be mixed in, and you can't tell which, so treat every question as scored.
- **Don't speed-guess at the end.** Unfinished questions are scored as if you had guessed at random, and the official guidance says the CAT applies a relatively large penalty when several wrong answers come toward the end of a subtest. If time is short, keep reading and genuinely answering.
- **Paper test:** answer every question; there is no penalty for guessing.

> **Key Fact:** A life science fact question should take **10–20 seconds** if you know it. Save the rest of your 48-second average for questions that need a step of reasoning, like a Punnett square or a food-chain energy question.`
    },
    {
      id: 'gsl6-traps',
      type: 'text' as const,
      content: `## The Traps Wrong Answers Are Built From

| Trap | The wrong answer says... | The truth |
|:---|:---|:---|
| **Plants and energy** | plants have chloroplasts **instead of** mitochondria | plants have **both** |
| **Reversed equations** | photosynthesis gives off CO₂ | photosynthesis gives off **O₂**; respiration gives off CO₂ |
| **Germs** | antibiotics cure colds and flu | antibiotics kill **bacteria**, not viruses |
| **Vessels** | arteries always carry oxygen-rich blood | arteries carry blood **away** from the heart; the pulmonary artery carries oxygen-**poor** blood to the lungs |
| **Digestion** | the stomach absorbs most nutrients | the **small intestine** absorbs most nutrients |
| **Genetics** | dominant means most common | dominant means it shows with **one copy** |
| **Look-alike animals** | whales are fish; bats are birds; penguins are mammals | whales and bats are **mammals**; penguins are **birds** |
| **Bugs** | spiders are insects | spiders have **8 legs** (arachnids); insects have **6** |
| **Fungi** | mushrooms are plants | mushrooms are **fungi** (no photosynthesis) |
| **Sex of a baby** | the mother determines it | the **father's** sperm (X or Y) determines it |
| **Organ size** | the liver is the largest organ | the **skin** is the largest organ (the liver is the largest **internal** organ) |

## Three Moves for Every Question

1. **Find the key word.** "Away from the heart" → artery. "Makes its own food" → producer. "No nucleus" → bacteria. "Shows with one copy" → dominant.
2. **Decode with roots.** Unknown term? Break it apart: *hemo-* blood, *derm-* skin, *pulmon-* lung, *photo-* light, *-cide* kill.
3. **Watch the direction.** Many wrong answers flip the right one: in or out, toward or away, gives off or takes in. Decide the direction first, then look at the choices.`
    },
    {
      id: 'gsl6-mc',
      type: 'multiple-choice' as const,
      content: '**Trap check.** 🎯 Each question is built around one of the traps above.',
      exercise: {
        questions: [
          {
            question: 'Which statement about plant cells is correct?',
            options: ['They contain both chloroplasts and mitochondria', 'They contain chloroplasts in place of mitochondria', 'They contain mitochondria but never chloroplasts', 'They have neither chloroplasts nor mitochondria'],
            correctAnswer: 0,
            explanation: 'Plant cells make sugar in their chloroplasts and then release its energy in their mitochondria, so they have both. (Root cells, which get no light, may lack chloroplasts, but they still have mitochondria.)'
          },
          {
            question: 'Which blood vessel carries oxygen-poor blood?',
            options: ['Pulmonary artery', 'Aorta', 'Pulmonary vein', 'Coronary artery'],
            correctAnswer: 0,
            explanation: 'The pulmonary artery carries blood away from the heart to the lungs to pick up oxygen, so that blood is oxygen-poor. The pulmonary vein brings oxygen-rich blood back from the lungs, and the aorta and coronary arteries carry oxygen-rich blood to the body and the heart muscle.'
          },
          {
            question: 'Which animal is an insect?',
            options: ['Beetle', 'Spider', 'Tick', 'Scorpion'],
            correctAnswer: 0,
            explanation: 'Beetles have six legs and three body sections, the mark of an insect. Spiders, ticks and scorpions have eight legs; they are arachnids.'
          },
          {
            question: 'A couple already has three daughters. What is the chance that their next child is a boy?',
            options: ['1 in 2', '1 in 4', '3 in 4', '1 in 8'],
            correctAnswer: 0,
            explanation: 'Each child\'s sex depends only on whether the father\'s sperm carries an X or a Y, about a 1 in 2 chance every time. Earlier children do not change the odds for the next one.'
          }
        ]
      }
    },
    {
      id: 'gsl6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Decode the term.** 🔽 You may not have met these words before. The roots give them away.',
      exercise: {
        dropdowns: [
          {
            label: '"Hematology" is the study of:',
            options: ['Blood', 'Skin', 'Nerves', 'Lungs'],
            correctAnswer: 0
          },
          {
            label: 'A "dermatologist" treats problems of the:',
            options: ['Skin', 'Ears', 'Stomach', 'Bones'],
            correctAnswer: 0
          },
          {
            label: 'A "herbicide" is designed to:',
            options: ['Kill weeds and other plants', 'Make crops grow faster and larger', 'Kill insects on crops', 'Feed plant-eating animals'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Blood', 'Skin', 'Kill weeds and other plants'],
        hint1: 'hem- means blood; -ology means study of.',
        hint2: 'derm- means skin.',
        hint3: 'herbi- means plant; -cide means kill.',
        explanation: '"Hem-" (blood) + "-ology" (study of) = the study of blood. "Derm-" means skin, so a dermatologist is a skin doctor. "Herbi-" (plant) + "-cide" (kill) = a chemical that kills plants, such as weeds. An insecticide is the one that kills insects.'
      }
    },
    {
      id: 'gsl6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **15 questions in 12 minutes** on the CAT: about **48 seconds** each; fact questions should take 10–20 seconds
- **No going back** on the CAT, and **don't speed-guess** at the end: a run of wrong answers late in a subtest is penalized heavily
- Know the classic traps: plants have **both** organelles, **antibiotics ≠ viruses**, the **pulmonary artery** carries oxygen-poor blood, **spiders aren't insects**, **mushrooms are fungi**, the **father** determines sex
- Three moves: **find the key word, decode with roots, check the direction**

> **Up Next:** Part 7 — a mixed mastery set across the whole lesson.`
    }
  ]
};
