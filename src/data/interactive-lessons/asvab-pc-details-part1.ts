export const asvabPcDetailsPart1Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p1-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 1 of 7 — Detail Questions on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Detail questions on the ASVAB** |
| 2 | Locating stated facts |
| 3 | Reworded facts |
| 4 | Sequence of events and steps |
| 5 | Reasons, comparisons and EXCEPT questions |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### The Most Common PC Question

Paragraph Comprehension on the CAT-ASVAB has **10 questions in 27 minutes** (about **2 minutes 40 seconds** each). The official list of PC skills starts with **stated and reworded facts** and **sequence of events**. These are detail questions: the answer is written in the passage, though often in different words.

Detail questions usually look like this:

| Question stem | What it wants |
|:---|:---|
| "According to the passage, …" | A fact the passage states |
| "The passage states that …" | The same: find it and match it |
| "Which of the following happened first?" | The order of events |
| "What should a worker do after …?" | The next step in a procedure |
| "Why did …?" | A reason the passage gives |
| "All of the following are mentioned EXCEPT …" | The one choice the passage does **not** state |

### Why Details Are Good News

Detail questions are the most **provable** questions on the test. You never have to guess what the author meant; you only have to **find** the sentence and **match** it. Students who miss them usually answer from memory instead of going back to the text.

> **Key Fact:** For a detail question, the passage is an open book. Find the sentence that answers the question, read it again, and only then choose.`
    },
    {
      id: 'pcdt-p1-method',
      type: 'text' as const,
      content: `## The Find-and-Match Method

1. **Read the question** and pick out its **key words**: a name, a number, a date, a place or an unusual word.
2. **Read the passage**, noticing where each kind of information sits.
3. **Go back** to the sentence that contains the key words and read it, plus the sentence before and after.
4. **Match**: choose the answer that says the same thing as that sentence, even if the wording is different.
5. **Reject** choices that are not in the passage, even if they are true in real life.

### Quick Example

The ferry leaves the north dock at 7:15 a.m. and 4:30 p.m. on weekdays. On Saturdays it runs only in the morning, and there is no service on Sundays.

**On Saturdays, the ferry runs:** *only in the morning · only in the afternoon · twice a day · not at all*

- Key word: **Saturdays**.
- The sentence with that key word: "On Saturdays it runs only in the morning."
- **Answer:** only in the morning. "Twice a day" is the **weekday** schedule, a true detail from the wrong part of the passage.`
    },
    {
      id: 'pcdt-p1-warmup1',
      type: 'multiple-choice' as const,
      content: `**Warm-up 1.** 🎯

The base library lends up to five books at a time for three weeks. DVDs may be borrowed for one week, and reference books must stay in the building. Patrons can renew any item once online, as long as no one else has requested it.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, how long may DVDs be borrowed?',
            options: ['Three weeks', 'Five weeks', 'One week', 'Two weeks'],
            correctAnswer: 2,
            explanation: 'The second sentence says "DVDs may be borrowed for one week." Three weeks is the loan period for books, and five is the number of books allowed, not a number of weeks.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p1-warmup2',
      type: 'multiple-choice' as const,
      content: `**Warm-up 2.** 🎯

To clean a rifle bore, first make sure the weapon is clear and unloaded. Next, run a patch soaked in solvent through the barrel from the chamber end. Let the solvent work for a few minutes, then scrub with a bore brush. Finish by running dry patches through until they come out clean.`,
      exercise: {
        questions: [
          {
            question: 'What should be done right after the solvent-soaked patch is run through the barrel?',
            options: [
              'Run dry patches until they come out clean',
              'Let the solvent work for a few minutes',
              'Make sure the weapon is clear and unloaded',
              'Scrub immediately with a bore brush'
            ],
            correctAnswer: 1,
            explanation: 'The order is: clear the weapon, run the solvent patch, let the solvent work, scrub, then dry patches. Right after the solvent patch comes waiting a few minutes. Scrubbing comes after that wait, so "scrub immediately" skips a step.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p1-warmup3',
      type: 'multiple-choice' as const,
      content: `**Warm-up 3.** 🎯

Wildfires spread fastest uphill. Heat rises, so flames preheat the brush above them, making it catch fire more easily. Wind can push a fire in any direction, but on a steep slope even a light breeze can turn a small fire into a dangerous one within minutes.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, wildfires spread fastest uphill because',
            options: [
              'wind always blows up the side of a hill',
              'rising heat warms the brush above the flames',
              'brush on hillsides is drier than other brush',
              'firefighters cannot reach steep slopes easily'
            ],
            correctAnswer: 1,
            explanation: 'The second sentence gives the reason: heat rises and preheats the brush above the fire. The passage says wind can push fire "in any direction," not always uphill, and never mentions drier brush or firefighter access.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Stated details and sequence are official PC skills, and they are the most **provable** questions on the test
- Common stems: "According to the passage," "The passage states," "What happened first," "Why did," "EXCEPT"
- **Find and match**: pick out key words, go back to the sentence, read around it, match the meaning
- A true detail from the **wrong part** of the passage is a classic wrong answer

> **Up Next:** Part 2 — scanning for names, numbers and key words to locate stated facts fast.`
    }
  ]
};
