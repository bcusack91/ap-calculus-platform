export const asvabWkVocabularyInContextPart4Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p4-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 4 of 7 — Example and Cause-and-Effect Clues**

### Two More Ways a Sentence Helps

**Example clues** list cases of the word. Figure out what the examples have in common, and you have the meaning.

| Signal words | Example |
|:---|:---|
| **such as, including** | Wear protective gear around **hazardous** materials, **such as** acids and fuel. |
| **for example, for instance** | Some jobs are physically **demanding**; **for example**, loading cargo all day. |
| **like, especially** | **Like** most desert plants, the cactus needs little water. |

**Cause-and-effect clues** show what the word leads to, or what led to it. Ask: *if this caused that, what must the word mean?*

| Signal words | Example |
|:---|:---|
| **because, since** | **Because** she was **diligent**, she finished every checklist on time. |
| **so, therefore, as a result** | The road was icy, **so** the convoy slowed down. |
| **if … then, when** | **When** water is **contaminated**, it must be boiled before drinking. |

> **Key Fact:** Example clues answer "what kind of thing is this?" Cause-and-effect clues answer "what does this do, or what made it happen?"`
    },
    {
      id: 'wkvc-p4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: an example clue

Keep **hazardous** items, **such as** gasoline cans, frayed extension cords and rat poison, locked in the outdoor shed.

- **Signal:** such as.
- **What the examples share:** each one can burn, shock or poison you.
- **So:** hazardous means **dangerous**.

### Example 2: a cause-and-effect clue

**Because** Ramirez was so **diligent** about her studying, she finished the course a week ahead of everyone else.

- **Signal:** because.
- **Effect:** she finished a week early.
- **What kind of studying causes that?** Steady, careful, hard-working studying.
- **So:** diligent means **hard-working**, careful and persistent.

### Example 3: effect first, then cause

After the fuel leak **contaminated** the stream, the town warned residents not to drink from it.

- **Signal:** after (the effect is a warning not to drink).
- **What would make water unsafe to drink?** Something dirty or poisonous got into it.
- **So:** contaminated means **polluted**, made impure.

### Watch the Direction

Cause-and-effect clues are good at telling you the **direction** of a word (good or bad, more or less) even when they do not pin down the exact meaning. In Example 2 you know diligent is a **positive** quality that makes you finish early. That alone rules out choices like *careless*, *lazy* or *confused*.`
    },
    {
      id: 'wkvc-p4-mc',
      type: 'multiple-choice' as const,
      content: '**Use examples and causes.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `The old radio sets were so **cumbersome** that it took two soldiers to carry each one up the hill.\n\n**Cumbersome** most nearly means`,
            options: ['outdated', 'noisy', 'fragile', 'bulky'],
            correctAnswer: 3,
            explanation: 'The effect, needing two soldiers to carry one radio, tells you the sets were large and awkward to handle. Cumbersome means bulky. Outdated may also be true of old radios, but it would not explain the carrying problem.'
          },
          {
            question: `The medic gave Kowalski an ice pack to **alleviate** the swelling in his ankle.\n\n**Alleviate** most nearly means`,
            options: ['worsen', 'reduce', 'hide', 'examine'],
            correctAnswer: 1,
            explanation: 'An ice pack is used to bring swelling down, so alleviate means to reduce or ease. Worsen is the opposite, and examine and hide are not what ice does to swelling.'
          },
          {
            question: `Thick fog and a stalled truck on the bridge **hindered** the rescue team, so they arrived an hour late.\n\n**Hindered** most nearly means`,
            options: ['warned', 'divided', 'delayed', 'guided'],
            correctAnswer: 2,
            explanation: 'The effect is arriving an hour late, so the fog and the truck got in the way: hindered means delayed or held back. Guided and warned would help the team, not slow it down.'
          },
          {
            question: `Engineers chose a **robust** design for the shelter, one that could stand up to hurricane winds, heavy snow and even small earthquakes.\n\n**Robust** most nearly means`,
            options: ['simple', 'strong', 'modern', 'roomy'],
            correctAnswer: 1,
            explanation: 'The examples, standing up to hurricane winds, heavy snow and earthquakes, all show toughness. Robust means strong and sturdy. Simple, modern and roomy might describe a shelter, but none of them explains surviving those forces.'
          },
          {
            question: `Only about half of the candidates passed, because the selection course was so **rigorous**.\n\n**Rigorous** most nearly means`,
            options: ['unfair', 'popular', 'demanding', 'expensive'],
            correctAnswer: 2,
            explanation: 'The cause of half the candidates failing is how hard the course is: rigorous means demanding, strict and thorough. Unfair is tempting, but a hard course is not necessarily an unfair one, and the sentence gives no sign of unfairness.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Cause, effect and examples.** 🔽

**Sentence A.** Bright motion-sensor lights were installed to **deter** thieves from breaking into the supply yard.

**Sentence B.** Colds are **prevalent** in crowded barracks during winter; nearly every room has someone coughing.`,
      exercise: {
        dropdowns: [
          {
            label: 'In Sentence A, the lights are meant to:',
            options: ['catch thieves inside', 'record the thieves', 'keep thieves away', 'help thieves see'],
            correctAnswer: 2
          },
          {
            label: 'So **deter** most nearly means:',
            options: ['follow', 'attract', 'discourage', 'punish'],
            correctAnswer: 2
          },
          {
            label: 'In Sentence B, **prevalent** most nearly means:',
            options: ['widespread', 'dangerous', 'rare', 'mild'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['keep thieves away', 'discourage', 'widespread'],
        hint1: 'Why would a supply yard want bright lights that switch on when someone moves?',
        hint2: 'The lights are there to stop break-ins before they happen.',
        hint3: '"Nearly every room has someone coughing" describes how common colds are.',
        explanation: 'The lights are a cause meant to produce one effect: no break-ins. To deter is to discourage someone from acting. Punish happens after a crime, not before. In Sentence B, the example "nearly every room has someone coughing" shows colds are common everywhere, so prevalent means widespread. Rare is the opposite, and mild or dangerous describe how bad a cold is, not how common.'
      }
    },
    {
      id: 'wkvc-p4-input',
      type: 'input-boxes' as const,
      content: `**Name the clue type.** ✍️

(1) Tomato plants **thrive** in warm, sunny weather, so the garden produces a big harvest every July.

(2) Wind and rain **erode** soft rock; for example, the cliffs along the coast lose a few inches every year.

(3) The water in the drainage ditch was **stagnant**.

**1)** Type the number of the sentence that uses an **example** clue:

**2)** Type the number of the sentence that uses a **cause-and-effect** clue:

**3)** Type the number of the sentence with **no** helpful clue:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '3'],
        hint1: 'Look for "for example."',
        hint2: 'Look for "so."',
        hint3: 'Which sentence gives no signal words and no explanation?',
        explanation: 'Sentence 2 gives an example (the cliffs lose inches each year), so erode means wear away. Sentence 1 uses "so": warm weather leads to a big harvest, so thrive means grow well. Sentence 3 gives no clue; you would need to know that stagnant means not flowing, still and often stale.'
      }
    },
    {
      id: 'wkvc-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Example clues** (such as, including, for example, like): find what the examples have in common
- **Cause-and-effect clues** (because, since, so, therefore, as a result, when): ask what the word does or what made it happen
- Even when a clue does not give the exact meaning, it usually gives the **direction**: positive or negative, more or less
- Use that direction to throw out choices before you choose

> **Up Next:** Part 5 — familiar words with more than one meaning, where the sentence decides which meaning counts.`
    }
  ]
};
