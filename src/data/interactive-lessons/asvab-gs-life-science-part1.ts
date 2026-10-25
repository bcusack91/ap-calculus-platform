export const asvabGsLifeSciencePart1Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl1-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 1 of 7 — Life Science on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Life science on the ASVAB** |
| 2 | Cells and organelles |
| 3 | Genetics, DNA and classification |
| 4 | Human body systems, nutrition and health |
| 5 | Plants, ecology and energy flow |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### Where This Fits on the Test

General Science (GS) is the **first subtest** of the CAT-ASVAB. It counts toward several service line scores (for example, the Air Force Electronics composite and the Navy and Marine Corps Electronics composites all include GS), so a strong GS score opens technical and medical jobs.

| Version of the test | GS questions | Time |
|:---|:---:|:---:|
| CAT-ASVAB (computer, at MEPS and most MET sites) | 15 scored | 12 minutes |
| Paper ASVAB (a few MET sites) | 25 | 11 minutes |
| High-school CEP, computer version (iCAT) | 16 | part of about 90 minutes total |

On the CAT that is about **48 seconds per question**. Some questions may be unscored tryout items, and you can't tell which ones, so treat every question as if it counts.

### What "life science" covers

The official description of GS names **life science** as one of its three areas, next to earth and space science and physical science. Life science covers four fields:

| Field | What it studies | Typical question |
|:---|:---|:---|
| **Botany** | Plants | "In which organelle does photosynthesis take place?" |
| **Zoology** | Animals and how they are grouped | "A whale is classified as which kind of animal?" |
| **Anatomy and physiology** | The human body and how it works | "Which organ produces insulin?" |
| **Ecology** | How living things interact with each other and their environment | "An organism that breaks down dead matter is called a..." |

> **Key Fact:** Life science items are short: one fact, or one cause-and-effect step. You don't need a biology degree. You need a compact set of facts you can recall in a few seconds, and this lesson gives you that set in tables built to memorize.`
    },
    {
      id: 'gsl1-roots',
      type: 'text' as const,
      content: `## Your Secret Weapon: Word Roots

Biology vocabulary is built from a small set of Greek and Latin pieces. Knowing them lets you decode a word you have never seen, which is often enough to pick the answer.

| Root | Meaning | Examples |
|:---|:---|:---|
| **bio-** | life | biology, biome |
| **-ology** | study of | zoology, ecology |
| **cardi-** | heart | cardiac muscle |
| **hem- / hemo-** | blood | hemoglobin |
| **derm-** | skin | epidermis |
| **neur-** | nerve | neuron |
| **gastr-** | stomach | gastric juice |
| **pulmon-** | lung | pulmonary artery |
| **photo-** | light | photosynthesis |
| **herbi- / carni- / omni-** | plant / meat / all | herbivore, carnivore, omnivore |
| **-cide** | kill | pesticide |

### The four big lists you will build

- The **organelles** and their jobs (Part 2)
- The **levels of classification**: domain, kingdom, phylum, class, order, family, genus, species (Part 3)
- The **body systems** and their main organs (Part 4)
- The **feeding levels** of an ecosystem: producers, consumers, decomposers (Part 5)

> **Key Fact:** If a question asks about the "dermis," you already know it is about skin. If it asks what an "herbivore" eats, the root answers it. Roots turn many "I never learned that" questions into easy points.`
    },
    {
      id: 'gsl1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Three quick questions to see what you already know. Missing some is fine: each one is taught later in the lesson.',
      exercise: {
        questions: [
          {
            question: 'Which organelle is known as the "powerhouse" of the cell because it releases energy from food?',
            options: ['Mitochondrion', 'Nucleus', 'Ribosome', 'Golgi apparatus'],
            correctAnswer: 0,
            explanation: 'Mitochondria carry out cellular respiration, which releases the energy stored in sugar. The nucleus stores DNA and directs the cell, ribosomes build proteins, and the Golgi apparatus packages and ships proteins.'
          },
          {
            question: 'Which blood cells carry oxygen from the lungs to the rest of the body?',
            options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma cells'],
            correctAnswer: 0,
            explanation: 'Red blood cells contain hemoglobin, an iron-containing protein that picks up oxygen in the lungs. White blood cells fight infection and platelets help blood clot.'
          },
          {
            question: 'In a food chain, what role does grass play?',
            options: ['Producer', 'Primary consumer', 'Decomposer', 'Predator'],
            correctAnswer: 0,
            explanation: 'Grass makes its own food from sunlight by photosynthesis, so it is a producer. Animals that eat the grass are primary consumers, and decomposers break down dead material.'
          }
        ]
      }
    },
    {
      id: 'gsl1-roots-check',
      type: 'dropdown-select' as const,
      content: '**Decode the word.** 🔽 Use the root table above. You have never needed to memorize these words; the roots give them away.',
      exercise: {
        dropdowns: [
          {
            label: 'An "insecticide" is a chemical that:',
            options: ['Kills insects', 'Feeds insects', 'Attracts insects', 'Studies insects'],
            correctAnswer: 0
          },
          {
            label: 'A "cardiologist" is a doctor who specializes in the:',
            options: ['Heart', 'Skin', 'Lungs', 'Stomach'],
            correctAnswer: 0
          },
          {
            label: 'An animal described as "omnivorous" eats:',
            options: ['Plants and animals', 'Only green plants', 'Only other animals', 'Only dead material'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Kills insects', 'Heart', 'Plants and animals'],
        hint1: 'Find the root in each word: -cide, cardi-, omni-.',
        hint2: '-cide means kill, cardi- means heart, omni- means all.',
        hint3: 'An omnivore eats "all" kinds of food.',
        explanation: '"-cide" means kill, so an insecticide kills insects. "Cardi-" means heart, so a cardiologist is a heart doctor. "Omni-" means all, so an omnivore eats both plants and animals (people, bears and raccoons are omnivores).'
      }
    },
    {
      id: 'gsl1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- GS is the **first** CAT-ASVAB subtest: **15** scored questions in **12** minutes, about **48 seconds** each
- Life science covers **botany, zoology, anatomy and physiology, and ecology**
- Most items test one fact or one cause-and-effect step, so memorized tables pay off
- **Word roots** (bio-, cardi-, hem-, derm-, neur-, photo-, -cide) let you decode unfamiliar terms
- Four lists carry most of the points: **organelles, classification levels, body systems, feeding levels**

> **Up Next:** Part 2 — cells and the organelles inside them.`
    }
  ]
};
