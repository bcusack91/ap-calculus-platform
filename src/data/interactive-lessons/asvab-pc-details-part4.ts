export const asvabPcDetailsPart4Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p4-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 4 of 7 — Sequence of Events and Steps**

### Order Questions

**Sequence of events** is one of the official PC skills. Sequence questions ask what happened first, next or last, or what step comes before or after another. They show up with two kinds of passages:

- **Procedures**: instructions such as safety steps, maintenance or first aid
- **Narratives and histories**: stories and timelines

### Signal Words

| They mark… | Signal words |
|:---|:---|
| a beginning | first, to begin, initially, at dawn, originally |
| the next step | next, then, second, after that, afterward |
| something earlier | before, earlier, previously, had (as in "had stopped") |
| the same time | while, meanwhile, during, as, at the same time |
| a condition for the next step | once, when, as soon as, until, only after |
| the end | finally, last, at last, in the end |

### Writers Don't Always Tell Events in Order

A writer may start with the ending and then jump back: "The convoy reached the depot at noon. Two hours **earlier**, it **had stopped** for a flat tire." The order of the **sentences** is not always the order of the **events**. When the timing matters, build a quick timeline.

> **Key Fact:** For "which happened first" questions, look for the words **before, earlier, had** and **originally**. They often mark events that happened earlier than the sentence placement suggests.`
    },
    {
      id: 'pcdt-p4-example',
      type: 'text' as const,
      content: `## Worked Example: Build a Timeline

The convoy reached the depot at noon. Two hours earlier, it had stopped to repair a flat tire. The trip had begun at dawn, when the trucks were loaded with water and fuel. After unloading at the depot, the drivers rested before starting the return trip.

| Order | Event | Clue |
|:---:|:---|:---|
| 1 | Trucks loaded with water and fuel at dawn | "had begun at dawn" |
| 2 | Stop to repair a flat tire (about 10 a.m.) | "two hours earlier … had stopped" |
| 3 | Convoy reaches the depot at noon | the first sentence, but the third event |
| 4 | Trucks unloaded | "after unloading" |
| 5 | Drivers rest, then start the return trip | "rested before starting" |

**Which happened first?** Loading at dawn, even though it is in the third sentence.

### Procedures: Watch for Conditions

In instructions, words like **once**, **until** and **only after** set a condition that must be met before the next step:

"Let the engine cool **until** the radiator cap is cool to the touch. **Only then** remove the cap."

A choice that says "remove the cap while the engine is warm" breaks the condition, even though every word in it appears in the passage.`
    },
    {
      id: 'pcdt-p4-mc',
      type: 'multiple-choice' as const,
      content: `**Put the events in order.** 🎯

Specialist Grant finally passed her swim qualification on Friday. She had failed her first attempt on Monday, when she panicked in the deep end. Before her second try, she spent two evenings practicing floating with a lifeguard. On Wednesday she tried again and made it halfway across the pool before she had to stop.`,
      exercise: {
        questions: [
          {
            question: 'What did Grant do just before her Wednesday attempt?',
            options: [
              'She made it halfway across the pool',
              'She passed the swim qualification',
              'She practiced floating with a lifeguard',
              'She panicked in the deep end of the pool'
            ],
            correctAnswer: 2,
            explanation: 'The timeline is Monday (failed, panicked) → two evenings of practice → Wednesday (halfway) → Friday (passed). Just before Wednesday came the practice. Passing happened last, on Friday.'
          },
          {
            question: 'According to the passage, Grant\'s first attempt took place on',
            options: ['Tuesday', 'Wednesday', 'Friday', 'Monday'],
            correctAnswer: 3,
            explanation: '"She had failed her first attempt on Monday." The passage opens with Friday, the last event, which is why reading sentence order as event order leads to the wrong answer.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p4-input',
      type: 'input-boxes' as const,
      content: `**Steps out of order.** ✍️

(1) Cover the burn loosely with a clean, dry bandage. (2) Before you do that, though, cool the burn under cool running water for about ten minutes. (3) First of all, remove rings, watches or anything tight near the burned area before it starts to swell. (4) Do not put ice, butter or ointment on the burn.

**1)** Type the number of the sentence that describes the FIRST step:

**2)** Type the number of the sentence that describes the LAST step:

**3)** How many sentences describe something the reader should NOT do?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '1', '1'],
        hint1: '"First of all" marks the first step, whatever sentence it is in.',
        hint2: '"Before you do that" means sentence 2 comes before sentence 1.',
        hint3: 'Which sentence begins with "Do not"?',
        explanation: 'The steps in order are: remove tight items (sentence 3, "First of all"), cool the burn under running water (sentence 2, "Before you do that"), then cover it loosely (sentence 1). So the first step is in sentence 3 and the last is in sentence 1. Only sentence 4 says what not to do.'
      }
    },
    {
      id: 'pcdt-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Build the timeline.** 🔽

In 1858, workers finished laying the first telegraph cable across the floor of the Atlantic Ocean. Queen Victoria sent a message of congratulations to President James Buchanan, but within about three weeks the cable failed. The American Civil War then delayed new attempts for several years. Finally, in 1866, the huge steamship Great Eastern laid a stronger cable that worked, and messages that once took ten days by ship crossed the ocean in minutes.`,
      exercise: {
        dropdowns: [
          {
            label: 'Of these events, which happened first?',
            options: ['The cable failed', 'Queen Victoria sent a message', 'The Great Eastern laid a cable', 'The Civil War delayed attempts'],
            correctAnswer: 1
          },
          {
            label: 'Which happened right after the first cable failed?',
            options: ['Workers laid the first cable', 'The Civil War delayed attempts', 'Queen Victoria sent a message', 'The Great Eastern laid a cable'],
            correctAnswer: 1
          },
          {
            label: 'Of these events, which happened last?',
            options: ['Queen Victoria sent a message', 'The Great Eastern laid a cable', 'The Civil War delayed attempts', 'The cable failed'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Queen Victoria sent a message', 'The Civil War delayed attempts', 'The Great Eastern laid a cable'],
        hint1: 'The message was sent over the new cable before it broke.',
        hint2: 'Look for the word "then" after the failure.',
        hint3: '"Finally, in 1866…"',
        explanation: 'Of the choices, the message came first: it was sent over the new cable before it failed. After the failure, the Civil War "then" delayed new attempts. "Finally, in 1866," the Great Eastern laid the cable that worked, the last event.'
      }
    },
    {
      id: 'pcdt-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Sequence questions come with **procedures** and with **stories or histories**
- Learn the signal words: **first, next, then, before, earlier, had, while, once, until, only after, finally**
- The order of **sentences** is not always the order of **events**: build a quick timeline
- In procedures, **once / until / only after** set conditions that a wrong choice will break

> **Up Next:** Part 5 — stated reasons, comparisons and EXCEPT questions.`
    }
  ]
};
