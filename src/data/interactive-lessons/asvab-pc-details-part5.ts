export const asvabPcDetailsPart5Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p5-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 5 of 7 — Reasons, Comparisons and EXCEPT Questions**

### Stated Reasons

"Why" questions on PC usually have the answer written in the passage, marked by a signal word.

| Signal | Example |
|:---|:---|
| **because, since** | Passengers keep belts fastened **because** turbulence can strike without warning. |
| **due to, as a result of** | The road closed **due to** flooding. |
| **so, as a result, that is why** | The bridge was icy, **so** the convoy took the long route. |
| **so that, in order to** (purpose) | Sentries rotate every two hours **so that** no one gets too tired. |

### Stated Comparisons

Comparison questions ask how two things are **alike** or **different**. Watch for *more than, less than, larger, both, similar, unlike, while, whereas*. The most common wrong answer **reverses** the comparison, saying the first thing is larger when the passage says the second is.

### EXCEPT and NOT Questions

"All of the following are mentioned EXCEPT…" or "Which of these is NOT stated?" flips the usual job. Three choices **are** in the passage; the answer is the one that **is not**.

1. Read each choice.
2. Find it in the passage and mentally check it off. (A reworded version counts as found.)
3. The choice you **cannot** find, or that the passage contradicts, is the answer.

> **Key Fact:** On an EXCEPT question, a choice you can find in the passage is a **wrong** answer. Slow down; it is easy to pick the first familiar choice out of habit.`
    },
    {
      id: 'pcdt-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### A reason question

Many airlines ask passengers to keep their seat belts fastened even when the seat belt sign is off. The reason is clear-air turbulence: sudden rough air that can occur in a cloudless sky and that pilots often cannot see on radar.

**Why do airlines ask passengers to keep belts fastened?**

- **Signal:** "The reason is…"
- **Answer:** rough air can strike without warning, even in clear skies.
- A choice such as "because the seat belt sign is always on" contradicts the passage, which says the sign may be off.

### An EXCEPT question

The emergency kit in each barracks room holds a flashlight, a whistle, a first-aid pouch and two bottles of water.

**The kit contains all of the following EXCEPT:** *a light · a signaling whistle · a radio · bandages*

- a light = flashlight ✓ (reworded)
- a signaling whistle = whistle ✓
- bandages = first-aid pouch ✓ (reworded)
- a radio: not listed. **Answer: a radio.**`
    },
    {
      id: 'pcdt-p5-mc1',
      type: 'multiple-choice' as const,
      content: `**EXCEPT question.** 🎯

Full-time employees at the shipyard receive health insurance, two weeks of paid vacation each year and help paying for college courses. After one year on the job, they may also join the company's retirement plan.`,
      exercise: {
        questions: [
          {
            question: 'The passage mentions all of the following benefits EXCEPT',
            options: [
              'medical coverage',
              'free meals in the company cafeteria',
              'paid time off',
              'help with the cost of college classes'
            ],
            correctAnswer: 1,
            explanation: 'Medical coverage (health insurance), paid time off (two weeks of vacation) and help with college costs are all mentioned in reworded form. Free cafeteria meals never appear, so that is the exception.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p5-input',
      type: 'input-boxes' as const,
      content: `**Count the details.** ✍️ Use the shipyard passage above. Type numbers only.

**1)** How many weeks of paid vacation do full-time employees receive each year?

**2)** How many years must an employee work before joining the retirement plan?

**3)** How many benefits does a full-time employee have from the first day (before the one-year mark)?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '3'],
        hint1: 'Look for the word "vacation."',
        hint2: 'Look for "After one year."',
        hint3: 'The first sentence lists the benefits that do not require a waiting period.',
        explanation: 'Employees receive 2 weeks of paid vacation. The retirement plan opens after 1 year. From the start they have 3 benefits: health insurance, paid vacation and help with college costs.'
      }
    },
    {
      id: 'pcdt-p5-mc2',
      type: 'multiple-choice' as const,
      content: `**Reason question.** 🎯

Leaves are green in summer because they are packed with chlorophyll, the substance plants use to capture energy from sunlight. In autumn, as the days grow shorter and cooler, many trees stop making chlorophyll. As the green fades, yellow and orange pigments that were in the leaves all along finally become visible.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, many leaves turn yellow and orange in autumn because',
            options: [
              'cold air causes the leaves to freeze and change color',
              'sunlight is stronger in the fall than in the summer',
              'trees begin making a new kind of yellow and orange chlorophyll',
              'the fading green reveals colors that were already present'
            ],
            correctAnswer: 3,
            explanation: 'The last sentence explains that yellow and orange pigments "were in the leaves all along" and show once the green fades. The "new kind of chlorophyll" choice borrows a passage word but reverses the process, freezing is never mentioned, and the passage says the days grow shorter, not sunnier.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p5-mc3',
      type: 'multiple-choice' as const,
      content: `**Comparison question.** 🎯

African and Asian elephants are both the largest land animals on their continents, but they differ in several ways. African elephants are bigger and have large ears shaped a little like the continent of Africa, while Asian elephants have smaller, rounded ears. Among African elephants, both males and females usually grow tusks; among Asian elephants, usually only some of the males do.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, one difference between the two kinds of elephants is that',
            options: [
              'only female African elephants grow tusks',
              'Asian elephants live on the continent of Africa',
              'Asian elephants are larger than African elephants',
              'African elephants have larger ears than Asian elephants'
            ],
            correctAnswer: 3,
            explanation: 'The passage says African elephants have large ears while Asian elephants have "smaller, rounded ears." The claim that Asian elephants are larger reverses the size comparison, African males and females both usually grow tusks, and Asian elephants are named for Asia.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sort the comparison.** 🔽 Use the elephant passage above.',
      exercise: {
        dropdowns: [
          {
            label: 'Which kind of elephant is bigger?',
            options: ['They are the same size', 'African', 'Asian'],
            correctAnswer: 1
          },
          {
            label: 'In which kind do both males and females usually have tusks?',
            options: ['Neither', 'African', 'Asian'],
            correctAnswer: 1
          },
          {
            label: 'Which kind has smaller, rounded ears?',
            options: ['Both', 'African', 'Asian'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['African', 'African', 'Asian'],
        hint1: '"African elephants are bigger…"',
        hint2: 'Read the last sentence carefully: which group has tusks in both sexes?',
        hint3: '"…while Asian elephants have smaller, rounded ears."',
        explanation: 'African elephants are bigger, have the large Africa-shaped ears, and usually grow tusks in both males and females. Asian elephants have smaller, rounded ears, and usually only some males have tusks.'
      }
    },
    {
      id: 'pcdt-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Reason** questions: find the signal (because, since, due to, so, so that, the reason is)
- **Comparison** questions: watch for a choice that **reverses** the comparison
- **EXCEPT/NOT** questions: check off the three choices you can find (reworded counts); the one left over is the answer
- On EXCEPT questions, a familiar choice is a **wrong** choice

> **Up Next:** Part 6 — strategy for detail questions and the traps that catch careful readers.`
    }
  ]
};
