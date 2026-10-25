export const asvabPcInferencePart2Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p2-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 2 of 7 — Drawing Supported Conclusions**

### The "Could It Be False?" Test

A conclusion question asks what the passage **supports**. The best answer is the one that would be hard to deny after reading the passage. A useful test for each choice:

> **If everything in the passage is true, could this choice still easily be false?**

- If **no**, the choice is strongly supported. It is probably the answer.
- If **yes**, the choice is a guess, a possibility, or a leap. It is probably wrong.

### Three Kinds of Wrong Conclusions

| Kind | What it does | Example (passage: "Every seat was full and people stood along the walls.") |
|:---|:---|:---|
| **Too far** | Stretches a small fact into a big claim | The show was the best in the city. |
| **Unsupported** | Could be true, but nothing in the passage points to it | The tickets were expensive. |
| **Contradicted** | Goes against the passage | Few people came to the show. |

### Small Steps Beat Big Leaps

The right answer is often **less exciting** than the wrong ones. "The show was popular" sounds dull next to "The show was the best in the city," but only the dull one is proven.

> **Key Fact:** Inference answers usually use **careful** language (*likely, probably, some, may*). Choices with **big** claims (*best, always, all, never, proves*) go further than a short passage can support.`
    },
    {
      id: 'pcin-p2-example',
      type: 'text' as const,
      content: `## Worked Example

Every chair in the clinic waiting room was taken, several people stood along the wall, and the receptionist was telling new arrivals to expect a two-hour wait.

**Which conclusion is best supported?**

| Choice | Could it be false if the passage is true? | Verdict |
|:---|:---|:---|
| The clinic is very busy today | Hardly: full chairs, people standing, two-hour wait | **Supported** |
| The clinic needs to hire more doctors | Yes: maybe today is unusual, or a doctor is out sick | Too far |
| Many patients have the flu | Yes: the passage never says why people came | Unsupported |
| Patients are seen quickly at this clinic | It is contradicted by the two-hour wait | Contradicted |

### Inference From Actions

Narrative passages often show a character's feelings or plans through **actions** instead of stating them. A character who checks a schedule twice, frowns and reaches for the phone is upset about something on the schedule and about to do something about it.`
    },
    {
      id: 'pcin-p2-mc1',
      type: 'multiple-choice' as const,
      content: `**Most strongly supported.** 🎯

Mendez checked the posted schedule twice, then frowned. Her name was listed for the night shift on Saturday, the same night as her brother's wedding. She took out her phone and dialed her supervisor's number.`,
      exercise: {
        questions: [
          {
            question: 'Which statement is most strongly supported by the passage?',
            options: [
              'Mendez dislikes working any night shift, no matter which day it falls on',
              'Mendez has decided to skip her brother\'s wedding',
              'Mendez is calling to ask about her Saturday shift',
              'Mendez\'s supervisor scheduled her by mistake'
            ],
            correctAnswer: 2,
            explanation: 'She sees a conflict between the shift and the wedding, frowns, and immediately calls her supervisor: the call is almost certainly about the shift. Nothing shows she will skip the wedding, the passage does not say the schedule is a mistake, and her reaction is about this one night, not all night shifts.'
          }
        ]
      }
    },
    {
      id: 'pcin-p2-mc2',
      type: 'multiple-choice' as const,
      content: `**Most strongly supported.** 🎯

In a classroom experiment, bean plants that had music played to them grew no taller than plants kept in silence. Plants that received two extra hours of light each day, however, grew noticeably taller than both of the other groups.`,
      exercise: {
        questions: [
          {
            question: 'Which conclusion is best supported by the results?',
            options: [
              'Music slows the growth of bean plants',
              'Extra light affected growth more than music did',
              'Bean plants grow best with loud music',
              'All plants need some kind of music in order to grow properly and stay healthy'
            ],
            correctAnswer: 1,
            explanation: 'Music made no difference in height, while extra light made the plants noticeably taller, so light mattered more than music. The music plants grew the same as the silent plants, which contradicts "slows growth" and "grow best with music," and "all plants" goes far beyond one bean experiment.'
          }
        ]
      }
    },
    {
      id: 'pcin-p2-mc3',
      type: 'multiple-choice' as const,
      content: `**Most strongly supported.** 🎯

When the Erie Canal opened in 1825, the cost of shipping a ton of goods between Buffalo and New York City fell from about 100 dollars to about 10 dollars, and the trip took about a third as long as it had before.`,
      exercise: {
        questions: [
          {
            question: 'It can be inferred from the passage that the Erie Canal',
            options: [
              'made New York City the capital of the state',
              'made it much cheaper to move goods between the two cities',
              'was built to carry passengers rather than cargo',
              'was soon replaced by a faster and cheaper railroad line along the same route'
            ],
            correctAnswer: 1,
            explanation: 'Shipping costs fell to about a tenth and travel time to about a third, so moving goods became far cheaper. The passage says nothing about the state capital, passengers or railroads.'
          }
        ]
      }
    },
    {
      id: 'pcin-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Supported, too far or contradicted?** 🔽

The parking lot at the trailhead was full by 7 a.m. on Saturday, and cars were parked along the road for half a mile in both directions.`,
      exercise: {
        dropdowns: [
          {
            label: '"Many people came to hike the trail that Saturday." This conclusion is:',
            options: ['supported', 'too far', 'contradicted'],
            correctAnswer: 0
          },
          {
            label: '"This is the most popular trail in the state." This conclusion is:',
            options: ['too far', 'contradicted', 'supported'],
            correctAnswer: 0
          },
          {
            label: '"Few people visited the trail that Saturday." This conclusion is:',
            options: ['contradicted', 'supported', 'too far'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['supported', 'too far', 'contradicted'],
        hint1: 'A full lot by 7 a.m. and cars along the road: is the trail busy?',
        hint2: 'Does one busy Saturday prove it beats every other trail in the state?',
        hint3: 'Can "few people" fit a full lot and half a mile of parked cars?',
        explanation: 'A lot full by 7 a.m. plus cars lining the road strongly supports a big crowd that Saturday. Calling it the most popular trail in the state goes too far, because no other trails are compared. "Few people" is contradicted by the crowded parking.'
      }
    },
    {
      id: 'pcin-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Test each choice: **if the passage is true, could this still easily be false?**
- Wrong conclusions go **too far**, are **unsupported**, or are **contradicted**
- The right answer is often the **least exciting** one; careful words (likely, some, may) are a good sign
- In stories, read **actions** for feelings and plans

> **Up Next:** Part 3 — implied contrasts ("these days…") and the unstated assumptions behind an argument.`
    }
  ]
};
