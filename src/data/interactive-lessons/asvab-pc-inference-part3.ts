export const asvabPcInferencePart3Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p3-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 3 of 7 — Implied Contrasts and Unstated Assumptions**

### Implied Contrasts

Some words quietly set up a **then-versus-now** contrast without spelling out the "then." When a passage says "**Today**, most crews use thermal cameras to find people in smoke," it implies that in the past, crews **did not** usually have them.

| Signal | What it implies |
|:---|:---|
| **today, these days, now, nowadays** | Things were different before |
| **no longer** | It used to be true |
| **used to, once, formerly, at one time** | It is not true anymore |
| **at first, originally** | It changed later |
| **until recently** | It changed not long ago |
| **unlike most…, even** | This case differs from the usual one |

Implied-contrast questions often look like "The passage suggests that in the past…" or "It can be inferred that earlier…"

### Unstated Assumptions

An **assumption** is a belief an argument depends on but never states. To find it, ask: **what must the author believe for this reasoning to work?**

> "The base should build a new gym, because a gym would raise physical fitness scores."

For that to work, the author must assume soldiers will **actually use** the new gym. If no one used it, the argument would fall apart.

> **Key Fact:** An assumption is a missing link **between the evidence and the conclusion**. It is never simply a restatement of something the passage already says.`
    },
    {
      id: 'pcin-p3-example',
      type: 'text' as const,
      content: `## Worked Examples

### An implied contrast

Until recently, most Navy ships relied on paper charts for navigation. Now nearly all of them use electronic chart systems, though sailors are still trained to plot a course by hand.

- **Signals:** "until recently," "now."
- **Implied:** in the past, sailors depended on paper charts far more than they do today.
- **Too far:** "Paper charts are now banned." The passage says sailors still train with them.

### An assumption

Our town should add more streetlights downtown. Better lighting would make people feel safer walking at night, and the downtown shops would get more evening customers.

- **Evidence:** lighting makes people feel safer.
- **Conclusion:** shops would get more evening customers.
- **Missing link:** people who feel safer will actually **come downtown** more in the evening.
- That is the assumption. The passage never says it, but the argument needs it.`
    },
    {
      id: 'pcin-p3-mc1',
      type: 'multiple-choice' as const,
      content: `**Implied contrast.** 🎯

These days, most new cars come with a backup camera that shows the driver what is directly behind the vehicle on a dashboard screen.`,
      exercise: {
        questions: [
          {
            question: 'The passage suggests that in the past',
            options: [
              'dashboards did not have any screens or gauges',
              'fewer new cars came with backup cameras',
              'drivers were not allowed to back up their cars',
              'backup cameras were larger and more expensive than today'
            ],
            correctAnswer: 1,
            explanation: '"These days, most new cars" implies that this was not always so, so fewer cars had cameras before. Size and cost are never mentioned, and nothing suggests backing up was forbidden or that dashboards lacked gauges.'
          }
        ]
      }
    },
    {
      id: 'pcin-p3-mc2',
      type: 'multiple-choice' as const,
      content: `**Implied contrast.** 🎯

At first, the new radios confused many soldiers in the platoon. By the end of the second week, even the soldiers who had complained the loudest could program a frequency in seconds.`,
      exercise: {
        questions: [
          {
            question: 'It can be inferred that',
            options: [
              'only a few soldiers ever used the new radios',
              'the soldiers still could not program the radios',
              'the soldiers became comfortable with the radios over time',
              'the radios were replaced after two weeks'
            ],
            correctAnswer: 2,
            explanation: '"At first … confused" contrasts with "by the end of the second week … in seconds," which implies the soldiers learned the radios over time. Nothing says the radios were replaced, the whole platoon is involved, and the claim that they still could not program the radios contradicts the passage.'
          }
        ]
      }
    },
    {
      id: 'pcin-p3-mc3',
      type: 'multiple-choice' as const,
      content: `**Unstated assumption.** 🎯

The base should add a second shuttle bus route. Many soldiers who do not own cars miss medical appointments because the current route does not stop near the clinic.`,
      exercise: {
        questions: [
          {
            question: 'The author\'s argument assumes that',
            options: [
              'a second route would stop near the clinic',
              'most soldiers on the base own cars',
              'the clinic is open only on weekends',
              'the current shuttle buses are too old and break down too often'
            ],
            correctAnswer: 0,
            explanation: 'The problem is that the current route does not reach the clinic; the solution only works if the new route does. That missing link is the assumption. The passage implies many soldiers lack cars, and clinic hours and bus age are never part of the argument.'
          }
        ]
      }
    },
    {
      id: 'pcin-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `**What does the passage imply?** 🔽

Once a rare sight, solar panels now cover the roofs of many homes in the neighborhood.`,
      exercise: {
        dropdowns: [
          {
            label: '"In the past, solar panels were uncommon in the neighborhood." This is:',
            options: ['implied by the passage', 'not supported', 'too far'],
            correctAnswer: 0
          },
          {
            label: '"Solar panels are cheaper than they have ever been." This is:',
            options: ['implied by the passage', 'not supported', 'contradicted'],
            correctAnswer: 1
          },
          {
            label: '"Every home in the neighborhood has solar panels now." This is:',
            options: ['too far', 'implied by the passage', 'contradicted'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['implied by the passage', 'not supported', 'too far'],
        hint1: '"Once a rare sight" sets up a then-versus-now contrast.',
        hint2: 'Does the passage say anything about price?',
        hint3: '"Many homes" is not "every home."',
        explanation: '"Once a rare sight … now" implies panels used to be uncommon. Price is never mentioned, so the cost claim is not supported. "Every home" stretches "many homes" too far.'
      }
    },
    {
      id: 'pcin-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Implied contrast** signals: today, these days, now, no longer, used to, once, at first, originally, until recently
- They imply that the **past was different**, but not by how much: avoid choices that exaggerate
- An **assumption** is the unstated link between an argument's evidence and its conclusion
- Ask: **what must the author believe for this to work?**

> **Up Next:** Part 4 — tone, attitude and the techniques authors use to make their point.`
    }
  ]
};
