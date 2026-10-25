export const asvabPcDetailsPart6Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p6-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 6 of 7 — Test Strategy and Common Traps**

### Pacing for Detail Questions

On the CAT-ASVAB you have **27 minutes for 10 questions**, about **2 minutes 40 seconds** each. Detail questions are often the fastest PC questions, because the answer is sitting in one sentence. Use the time you save to **double-check** that sentence before you click: once you answer, you **cannot go back**.

On the paper test (15 questions in 13 minutes, about 52 seconds each) the same method works, just faster.

If time runs short on the CAT, keep reading and answering for real: unanswered questions are scored as random guesses, and a run of wrong answers at the end of a subtest carries a relatively large penalty. Some questions may be unscored tryouts, but you cannot tell which, so treat every one as scored.

### Seven Detail Traps

| Trap | What it looks like |
|:---|:---|
| **Word match** | Copies passage words but changes what they mean |
| **Wrong part** | A true detail from the passage that answers a **different** question |
| **Swap** | A real number, name or day from the passage attached to the wrong thing |
| **Half right** | The first half matches the passage; the second half does not |
| **Reversed** | Flips a comparison, a cause, or an order of events |
| **Outside knowledge** | True in real life, but not in the passage |
| **EXCEPT flip** | On an EXCEPT question, choosing a detail you **did** find |

> **Key Fact:** Read **every word** of a choice. A choice is only correct if **all** of it matches the passage. One wrong half makes the whole choice wrong.`
    },
    {
      id: 'pcdt-p6-mc1',
      type: 'multiple-choice' as const,
      content: `**Watch for half-right choices.** 🎯

The base pool is open for lap swimming from 0600 to 0800 and from 1700 to 1900 on weekdays. Family swim runs from 1200 to 1600 on Saturdays and Sundays. The pool closes for cleaning on the first Monday of each month.`,
      exercise: {
        questions: [
          {
            question: 'According to the notice, which statement is true?',
            options: [
              'Lifeguards are on duty during all of the pool\'s open hours',
              'Lap swimming is offered on weekday mornings and on Saturday evenings',
              'Families can swim at the pool on weekend afternoons',
              'The pool closes for cleaning on the first Sunday of each month'
            ],
            correctAnswer: 2,
            explanation: 'Family swim runs 1200 to 1600 on Saturdays and Sundays: weekend afternoons. The lap-swimming choice is half right (weekday mornings, yes; Saturday evenings, no). The cleaning day is swapped (Monday, not Sunday), and lifeguards are outside knowledge the notice never mentions.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p6-mc2',
      type: 'multiple-choice' as const,
      content: `**Watch for swaps.** 🎯

Sacagawea, a Shoshone woman, set out with the Lewis and Clark expedition in the spring of 1805 as an interpreter. Traveling with her infant son, she helped the explorers trade for horses with the Shoshone, whose chief turned out to be her brother. The expedition reached the Pacific Ocean in November of that year.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, the Shoshone chief was',
            options: [
              'Sacagawea\'s brother',
              'the expedition\'s interpreter',
              'a trader from the Pacific coast',
              'Sacagawea\'s infant son'
            ],
            correctAnswer: 0,
            explanation: 'The passage says the chief "turned out to be her brother." Her infant son and the interpreter role (Sacagawea herself) are real details swapped onto the wrong person, and nothing connects the chief to the Pacific coast.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p6-mc3',
      type: 'multiple-choice' as const,
      content: `**Watch for the wrong part.** 🎯

Before entering a confined space such as a storage tank, a worker must have the air tested for oxygen and toxic gases. A second worker, called an attendant, stays outside the entrance the whole time and keeps in contact. If the attendant sees a problem, he calls for a trained rescue team rather than going in himself, since untrained rescuers are often overcome by the same hazard.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, why should the attendant not go into the space himself?',
            options: [
              'The air must be tested before anyone enters',
              'He could be overcome by the same hazard',
              'He must keep in contact with his supervisor',
              'Only one worker is allowed in a tank at a time'
            ],
            correctAnswer: 1,
            explanation: 'The last sentence gives the reason: untrained rescuers "are often overcome by the same hazard." Air testing is a true detail, but it answers a different question (what happens before entry). The attendant keeps in contact with the worker inside, not a supervisor, and the passage sets no one-worker limit.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the trap.** 🔽 Use the Sacagawea passage above. Each choice below is a wrong answer to the question "According to the passage, what did Sacagawea help the explorers do?"',
      exercise: {
        dropdowns: [
          {
            label: '"Reach the Pacific Ocean in November" is a wrong answer because it is:',
            options: ['a reversed comparison', 'outside knowledge', 'a true detail that answers a different question'],
            correctAnswer: 2
          },
          {
            label: '"Trade for horses with her son, the Shoshone chief" is a wrong answer because it is:',
            options: ['a true detail that answers a different question', 'a swap of a real detail onto the wrong person', 'outside knowledge'],
            correctAnswer: 1
          },
          {
            label: '"Find a river route through the Rocky Mountains" is a wrong answer because it is:',
            options: ['a reversed order of events', 'not stated in the passage', 'a swap of a real detail onto the wrong person'],
            correctAnswer: 1
          }
        ],
        correctAnswers: [
          'a true detail that answers a different question',
          'a swap of a real detail onto the wrong person',
          'not stated in the passage'
        ],
        hint1: 'The expedition did reach the Pacific, but is that what she helped with?',
        hint2: 'Who was the chief, according to the passage?',
        hint3: 'Does the passage mention rivers or the Rockies?',
        explanation: 'She helped them trade for horses with the Shoshone. Reaching the Pacific is true but answers a different question (when the expedition arrived). Calling the chief "her son" swaps in a real detail (her infant son) where the passage names her brother. A river route through the Rockies is never mentioned.'
      }
    },
    {
      id: 'pcdt-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes 40 seconds** per question on the CAT: detail questions are fast, so spend the extra time **double-checking** the sentence; you cannot go back
- Seven traps: **word match, wrong part, swap, half right, reversed, outside knowledge, EXCEPT flip**
- A choice is right only if **every word** of it matches the passage

> **Up Next:** Part 7 — a mixed mastery set of detail and sequence questions.`
    }
  ]
};
