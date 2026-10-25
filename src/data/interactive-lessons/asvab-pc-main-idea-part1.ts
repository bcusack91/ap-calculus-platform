export const asvabPcMainIdeaPart1Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p1-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 1 of 7 — Paragraph Comprehension on the CAT-ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Paragraph Comprehension on the CAT-ASVAB** |
| 2 | Topic and main idea |
| 3 | Too broad, too narrow: main idea vs. detail |
| 4 | Author's purpose |
| 5 | Best title, summary and implied main idea |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What the Subtest Looks Like

Paragraph Comprehension (PC) comes right after Word Knowledge on the CAT-ASVAB.

| Fact | CAT-ASVAB | Paper ASVAB / CEP |
|:---|:---|:---|
| Scored questions | 10 | 15 |
| Time limit | 27 minutes | 13 minutes |
| Time per question | about 2 minutes 40 seconds | about 52 seconds |
| Answer choices | 4 | 4 |

On the computer test you usually see **one short passage** (often a single paragraph) followed by **one question**. Then a new passage appears. That is a lot of time per question compared with Word Knowledge, so PC rewards **careful** reading more than fast reading.

### The Six Kinds of Questions

| Question type | What it asks | Covered in |
|:---|:---|:---|
| **Main idea** | What is the passage mostly about? | this lesson |
| **Author's purpose** | Why did the author write it? | this lesson |
| **Stated detail** | What does the passage say about X? | Stated Details and Sequence |
| **Sequence** | What happened first, next, last? | Stated Details and Sequence |
| **Inference / conclusion** | What does the passage suggest? | Inference, Tone and Word Meaning |
| **Tone and word meaning** | How does the author feel? What does a word mean here? | Inference, Tone and Word Meaning |

### Why PC Matters

The AFQT sum is AR + MK + 2 × VE, where VE is a weighted blend of Word Knowledge and Paragraph Comprehension. PC carries less weight inside VE than WK does, but VE as a whole is counted **twice**, so every PC question still feeds the most heavily weighted part of your AFQT.`
    },
    {
      id: 'pcmi-p1-approach',
      type: 'text' as const,
      content: `## A Reliable Approach for Every Passage

1. **Read the question first.** Know what you are hunting for: the main idea, a detail, the author's purpose.
2. **Read the whole passage once**, carefully. It is short; you have time.
3. **Answer in your own words** before looking at the choices.
4. **Eliminate** choices that the passage does not support, then pick the best one.
5. **Check** your answer against the passage text, not against your own opinions or outside knowledge.

> **Key Fact:** Every correct answer on PC can be proven from the passage. If you cannot point to the words that support a choice, it is probably wrong, no matter how true it sounds in real life.

Try three warm-up passages. Each has one question, just like the real test.`
    },
    {
      id: 'pcmi-p1-warmup1',
      type: 'multiple-choice' as const,
      content: `**Warm-up 1.** 🎯

When a honeybee finds a rich patch of flowers, she flies back to the hive and performs what scientists call a waggle dance. The angle of her dance shows the other bees which direction to fly, measured against the position of the sun. The length of each waggle tells them how far away the flowers are. With this simple routine, a single scout can guide dozens of workers straight to food she found far from the hive.`,
      exercise: {
        questions: [
          {
            question: 'What is the main idea of the passage?',
            options: [
              'Honeybees use a dance to tell other bees where to find food',
              'Honeybees can fly farther than most other kinds of insects',
              'The position of the sun is important to every kind of animal',
              'Scout bees are larger and stronger than ordinary worker bees'
            ],
            correctAnswer: 0,
            explanation: 'Every sentence explains how the waggle dance guides other bees to food. The passage never compares bees with other insects or describes scouts as larger, and "every kind of animal" is far broader than anything the passage discusses.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p1-warmup2',
      type: 'multiple-choice' as const,
      content: `**Warm-up 2.** 🎯

New employees at the distribution center must earn forklift certification before they may operate any powered equipment. The course takes two days: the first in a classroom and the second on the warehouse floor with an instructor. Employees who fail the driving test may take it again after waiting one week.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, an employee who fails the driving test must',
            options: [
              'repeat both days of the course',
              'wait a week before retesting',
              'find work in a different building',
              'pass a written exam the next day'
            ],
            correctAnswer: 1,
            explanation: 'The last sentence says employees who fail "may take it again after waiting one week." The passage never says they must repeat the course, move to another building or take a written exam.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p1-warmup3',
      type: 'multiple-choice' as const,
      content: `**Warm-up 3.** 🎯

Every driver on base should keep a winter kit in the trunk from November through March. A good kit includes a blanket, a flashlight with spare batteries, a small shovel, a bag of sand for traction and enough water and snacks for one day. Check the kit at the start of each month and replace anything that has been used.`,
      exercise: {
        questions: [
          {
            question: 'The main purpose of the passage is to',
            options: [
              'persuade drivers to stay off the roads in the winter',
              'tell drivers how to prepare for winter emergencies',
              'explain why winter weather causes traffic accidents',
              'describe what happened to a driver caught in a storm'
            ],
            correctAnswer: 1,
            explanation: 'The passage gives instructions: what to put in a winter kit and when to check it. It never explains causes of accidents, tells a story or urges people to stop driving.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- PC on the CAT-ASVAB: **10 questions in 27 minutes**, about **2 minutes 40 seconds** each; usually one short passage, one question
- Six question types: **main idea, purpose, stated detail, sequence, inference, tone/word meaning**
- PC is part of VE, which counts **twice** in the AFQT
- Approach: **read the question → read the passage → answer in your own words → eliminate → check against the text**
- Every right answer can be **proven from the passage**

> **Up Next:** Part 2 — telling the topic apart from the main idea, and finding the sentence that states it.`
    }
  ]
};
