export const asvabPcInferencePart5Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p5-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 5 of 7 — Word Meaning in a Passage**

### "As Used in the Passage…"

Paragraph Comprehension includes questions such as "As used in the passage, *address* most nearly means…". These are different from Word Knowledge questions in one important way: the word is usually **familiar**, and the test is whether you can tell **which of its meanings** the passage is using.

| Word | Everyday meaning | Another meaning you may see in a passage |
|:---|:---|:---|
| **address** | where you live | to deal with (address a problem) |
| **command** | an order | to be able to get (command a high price); to overlook (commands a view of the valley) |
| **issue** | a problem; an edition of a magazine | to hand out officially (issue uniforms) |
| **sharp** | able to cut | sudden and large (a sharp drop in temperature) |
| **cultivate** | to grow crops | to develop on purpose (cultivate good habits) |

### The Substitution Test

1. Cover the choices and reread the sentence.
2. Put your **own** word in place of the tested word.
3. Find the choice closest to your word.
4. Plug that choice into the sentence. It should make **sense** and keep the **meaning**.

> **Key Fact:** The most common everyday meaning of the word is very often a **wrong** choice. If a choice is the first meaning that popped into your head, check it against the sentence before you pick it.`
    },
    {
      id: 'pcin-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### address

The new commander promised to **address** the housing shortage within her first six months.

- Your own word: *deal with*.
- Choices: *write to · fix · speak to · locate*. **Fix** matches "deal with." *Speak to* and *write to* play on the everyday meanings (address a crowd, address a letter).

### command

Because so few were made, the old motorcycle can **command** a price of more than 50,000 dollars.

- Your own word: *get, bring in*.
- *Order* is the everyday meaning of command and makes no sense here. **Bring in** fits.

### issue

The supply sergeant will **issue** cold-weather gear to every soldier before the field exercise.

- Your own word: *hand out*.
- *Problem* and *magazine edition* are other meanings that do not fit an action done to gear. **Distribute** is the match.

### Clues Around the Word

The rest of the sentence usually tells you which meaning is in play:

- Is the word an **action**, a **thing**, or a **description** in this sentence? (Issue is an action here, not a problem.)
- What are the **people or things** around it? (A price is something you *command*, not something you order.)`
    },
    {
      id: 'pcin-p5-mc',
      type: 'multiple-choice' as const,
      content: `**Which meaning?** 🎯

**Passage A.** After twenty years with the company, Lopez decided to tender her resignation so that she could start her own landscaping business.

**Passage B.** Homes near the new train station have appreciated quickly; some are now worth twice what their owners paid five years ago.

**Passage C.** The general's standing among the troops rose after she ate every meal in the field with them during the exercise.

**Passage D.** Though friendly, the new captain spoke with a certain reserve, rarely sharing anything about her personal life.`,
      exercise: {
        questions: [
          {
            question: 'In Passage A, "tender" most nearly means',
            options: ['soften', 'submit', 'delay', 'withdraw'],
            correctAnswer: 1,
            explanation: 'To tender a resignation is to offer or submit it formally. Soften plays on "tender" as gentle, and delay and withdraw do not fit someone leaving to start a business.'
          },
          {
            question: 'In Passage B, "appreciated" most nearly means',
            options: ['been sold', 'been admired', 'gained value', 'been thanked'],
            correctAnswer: 2,
            explanation: 'Homes worth twice what was paid have gone up in value. Admired and thanked play on the everyday meaning of appreciate, and the passage never says the homes were sold.'
          },
          {
            question: 'In Passage C, "standing" most nearly means',
            options: ['height', 'posture', 'reputation', 'location'],
            correctAnswer: 2,
            explanation: 'The general\'s standing "rose" because of how she treated the troops: her reputation improved. Posture and height play on standing up, and location does not change by eating with troops.'
          },
          {
            question: 'In Passage D, "reserve" most nearly means',
            options: ['backup supply', 'restraint', 'booking', 'anger'],
            correctAnswer: 1,
            explanation: 'Speaking with reserve and "rarely sharing anything about her personal life" means holding back: restraint. Backup supply and booking are other meanings of reserve, and nothing suggests anger in a "friendly" captain.'
          }
        ]
      }
    },
    {
      id: 'pcin-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Substitute and check.** 🔽

**Sentence 1.** The town meeting gave employees a chance to air their complaints about the new bus schedule.

**Sentence 2.** The city council approved new measures to reduce speeding near the elementary school.

**Sentence 3.** It took the union and the company a week to settle the dispute over overtime pay.`,
      exercise: {
        dropdowns: [
          {
            label: 'In Sentence 1, **air** most nearly means:',
            options: ['express', 'dry out', 'breathe', 'hide'],
            correctAnswer: 0
          },
          {
            label: 'In Sentence 2, **measures** most nearly means:',
            options: ['rulers', 'amounts', 'sizes', 'actions'],
            correctAnswer: 3
          },
          {
            label: 'In Sentence 3, **settle** most nearly means:',
            options: ['resolve', 'move into', 'pay off', 'sink'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['express', 'actions', 'resolve'],
        hint1: 'What do people do with complaints at a meeting?',
        hint2: 'What does a council approve to reduce speeding: sizes, or steps it will take?',
        hint3: 'What happens to a dispute that ends after a week of talks?',
        explanation: 'To air complaints is to express them openly. Measures here are actions or steps, such as speed bumps or signs; sizes and amounts are the "measurement" meaning. To settle a dispute is to resolve it; sink and move into are other meanings of settle.'
      }
    },
    {
      id: 'pcin-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- "As used in the passage" questions test **which meaning** of a familiar word the passage uses
- Know second meanings: **address** (deal with), **command** (bring in), **issue** (hand out), **tender** (offer), **appreciate** (gain value), **standing** (reputation), **reserve** (restraint)
- **Substitution test**: cover the choices, put in your own word, match, then plug it back in
- The **everyday meaning** is often the trap

> **Up Next:** Part 6 — strategy and the traps that catch inference, tone and word-meaning questions.`
    }
  ]
};
