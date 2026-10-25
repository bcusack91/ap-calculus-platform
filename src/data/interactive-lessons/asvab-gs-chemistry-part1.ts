export const asvabGsChemistryPart1Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc1-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 1 of 7 — Chemistry on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Chemistry on the ASVAB** |
| 2 | Matter, states and changes |
| 3 | Atoms and the periodic table |
| 4 | Compounds, mixtures and solutions |
| 5 | Acids, bases and chemical reactions |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### Where Chemistry Fits

**General Science (GS)** is the **first subtest** you see on the CAT-ASVAB. It has **15 scored questions** and a **12-minute** limit, which works out to about **48 seconds per question**. GS mixes life science, earth and space science, and physical science, and the official content outline puts **atomic structure and chemistry** inside the physical-science share.

| Test version | GS questions | GS time |
|:---|:---:|:---:|
| CAT-ASVAB (computer, at MEPS) | 15 scored | 12 minutes |
| Paper enlistment test (a few test sites) | 25 | 11 minutes |
| High-school CEP, paper | 25 | 11 minutes |
| High-school CEP, computer (iCAT) | 16 | part of a 90-minute session |

Two rules about the computer test matter right now:

- **You can't go back.** Once you answer a question, it is locked in.
- **Some questions may be unscored tryout items, and you can't tell which ones,** so treat every question as if it counts.

> **Key Fact:** GS chemistry is **high-school level**. No question asks you to memorize the whole periodic table or do long calculations. It asks for one fact or one short step, and you do any arithmetic on scratch paper (no calculator).`
    },
    {
      id: 'gsc1-what',
      type: 'text' as const,
      content: `## What the Questions Look Like

Chemistry questions on GS come in a few familiar shapes:

| Question shape | Example of what it asks |
|:---|:---|
| **Name the change** | "Which of these is a chemical change?" |
| **Read the atom** | "An atom has 9 protons and 10 neutrons. What is its mass number?" |
| **Know the scale** | "Which pH value is a strong acid?" |
| **Explain an everyday effect** | "Why does salt help melt ice on a road?" |
| **Classify the substance** | "Which of these is a mixture rather than a compound?" |
| **Quick calculation** | "A block has a mass of 40 g and a volume of 10 cm³. What is its density?" |

### The facts that show up again and again

| Fact | Short version |
|:---|:---|
| Density | $\\text{density} = \\dfrac{\\text{mass}}{\\text{volume}}$; water is about 1 g/cm³; less dense floats |
| Atomic number | number of **protons**; it decides which element the atom is |
| Mass number | **protons + neutrons** |
| Ions | lose electrons → **positive**; gain electrons → **negative** |
| pH | **7 neutral**, below 7 acid, above 7 base; each step is **10 times** |
| Chemical change | a **new substance** forms (burning, rusting, cooking) |
| Catalyst | speeds up a reaction and is **not used up** |
| Salt on ice | dissolved salt **lowers the freezing point** of water |

You will learn each of these in Parts 2–5, with a memory hook for each one.`
    },
    {
      id: 'gsc1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Answer from what you already know. Nobody expects a perfect score yet: this shows you what the lesson will cover.',
      exercise: {
        questions: [
          {
            question: 'Which of these is a chemical change?',
            options: ['A nail rusting in the rain', 'An ice cube melting on a counter', 'Sugar dissolving in hot tea', 'A glass bottle shattering'],
            correctAnswer: 0,
            explanation: 'Rust is a new substance (iron oxide) made when iron reacts with oxygen and water, so rusting is a chemical change. Melting, dissolving and breaking change only the form or size of the material: the substance itself stays the same.'
          },
          {
            question: 'What is the pH of pure water at room temperature?',
            options: ['7', '0', '14', '1'],
            correctAnswer: 0,
            explanation: 'Pure water is neutral, and neutral is pH 7, the middle of the 0–14 scale. A pH of 0 or 1 would be a very strong acid, and 14 would be a very strong base.'
          },
          {
            question: 'What is the chemical symbol for iron?',
            options: ['Fe', 'Ir', 'I', 'In'],
            correctAnswer: 0,
            explanation: 'Iron is Fe, from its Latin name ferrum. Ir is iridium, I is iodine and In is indium. Part 3 lists the symbols that do not match their English names.'
          }
        ]
      }
    },
    {
      id: 'gsc1-plan',
      type: 'text' as const,
      content: `## How to Use This Lesson

- **Parts 2–5** each teach one cluster of facts with a table or memory hook, then let you practice right away.
- **Part 6** shows the traps the wrong answers are built from, and how to spend your 48 seconds.
- **Part 7** is a mixed set at ASVAB difficulty, so you can check you are ready.

### Study tip

Chemistry questions reward **recognition**. If you can picture the table for a fact (the pH scale, the three particles of an atom, the six phase changes), you can answer in well under 48 seconds and bank time for the harder science questions.`
    },
    {
      id: 'gsc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- GS is the **first** CAT-ASVAB subtest: **15** scored questions in **12** minutes, about **48 seconds** each
- You **can't go back**, and some questions may be unscored tryouts you can't spot, so treat every question as scored
- Chemistry questions are high-school level: one fact or one short step, no calculator
- The big repeat facts: density, atomic and mass number, ions, pH, chemical vs physical change, catalysts, salt on ice

> **Up Next:** Part 2 — matter, the states of matter, and the difference between a physical and a chemical change.`
    }
  ]
};
