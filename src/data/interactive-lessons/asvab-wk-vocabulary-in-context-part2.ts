export const asvabWkVocabularyInContextPart2Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p2-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 2 of 7 — Definition and Restatement Clues**

### The Sentence That Explains Itself

The friendliest clue a sentence can give is a **definition** or **restatement**: the writer uses a hard word and then, right next to it, says the same thing in plainer words.

These clues hide behind punctuation and a handful of signal words:

| Signal | How it looks |
|:---|:---|
| **Comma pair (appositive)** | The **debris**, broken boards and twisted metal, covered the road. |
| **Dash** | The warning light was **conspicuous** — impossible to miss. |
| **or** | The medic checked for **lacerations**, or deep cuts. |
| **that is / in other words** | We need to **expedite** the order; in other words, speed it up. |
| **which means / meaning** | The unit is on standby, which means ready to move on short notice. |
| **is / are / was (a linking verb)** | A **novice** is someone who has just started learning a skill. |

> **Key Fact:** When you see one of these signals, the plain-language meaning is usually sitting **right beside** the bold word. Read a few words past it before you look at the choices.`
    },
    {
      id: 'wkvc-p2-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: the dash

The new safety vests were **conspicuous** — bright orange with silver stripes that drivers could spot a block away.

- **Signal:** the dash.
- **What follows it:** "bright orange … drivers could spot a block away."
- **So:** conspicuous means **easy to notice**, obvious, eye-catching.

If the choices were *hidden · obvious · cheap · heavy*, "obvious" matches the restatement. "Hidden" is the exact opposite, a common trap.

### Example 2: the comma pair

After the storm, crews spent two days clearing **debris**, the broken branches, shingles and fence boards scattered across the base.

- **Signal:** a comma right after the word, then a list that renames it.
- **So:** debris means **scattered pieces of wreckage** or rubbish.

### Example 3: "in other words"

The commander asked supply to **expedite** the parts order; in other words, she wanted it filled as fast as possible.

- **Signal:** "in other words."
- **So:** expedite means **speed up** or hurry along.

Notice the part of speech: **expedite** is something you *do*, so its synonym must also be an action word: *speed up, hasten, rush*. A choice like "speedy" (a describing word) is the wrong part of speech even though it sounds close.

### A Two-Step Routine

1. **Spot the signal.** Comma, dash, *or*, *that is*, *in other words*, *which means*, or a plain "is."
2. **Read the restatement**, then pick the choice that says the same thing in the same part of speech.`
    },
    {
      id: 'wkvc-p2-mc',
      type: 'multiple-choice' as const,
      content: '**Use the restatement.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `Inventory day was **tedious**: eight hours of counting identical boxes, one shelf at a time.\n\n**Tedious** most nearly means`,
            options: ['boring', 'useful', 'noisy', 'risky'],
            correctAnswer: 0,
            explanation: 'The colon introduces the restatement: eight hours of counting identical boxes. Tedious means boring and tiresome. Useful might even be true of inventory, but the sentence describes how the day felt, not its value.'
          },
          {
            question: `As a **novice**, someone who had never driven a forklift before, Jenkins practiced in an empty lot first.\n\n**Novice** most nearly means`,
            options: ['beginner', 'mechanic', 'champion', 'neighbor'],
            correctAnswer: 0,
            explanation: 'The comma pair restates the word: "someone who had never driven a forklift before." A novice is a beginner. Champion is the opposite end of the skill scale.'
          },
          {
            question: `The long patrol would **deplete**, or use up, most of the team's water by the second day.\n\n**Deplete** most nearly means`,
            options: ['refill', 'protect', 'exhaust', 'measure'],
            correctAnswer: 2,
            explanation: 'The signal "or" gives the meaning directly: use up. Exhaust (as in exhausting a supply) means the same. Refill is the opposite, and protect and measure are things you might do to water but not what the sentence says.'
          },
          {
            question: `The armory is **adjacent** to the gym; that is, the two buildings share a wall.\n\n**Adjacent** most nearly means`,
            options: ['next', 'opposite', 'behind', 'similar'],
            correctAnswer: 0,
            explanation: '"That is, the two buildings share a wall" restates the idea: adjacent means next to, neighboring. Opposite and behind name other positions, and similar is about likeness, not location.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Find the restatement, then the meaning.** 🔽

**Sentence A.** The volcano has been **dormant** for centuries — quiet and inactive, though scientists still watch it.

**Sentence B.** The staff gave the visiting families a **cordial** welcome, which means a warm and friendly one.`,
      exercise: {
        dropdowns: [
          {
            label: 'In Sentence A, the clue that restates the bold word is:',
            options: ['The volcano', 'quiet and inactive', 'for centuries', 'scientists still watch it'],
            correctAnswer: 1
          },
          {
            label: 'In Sentence A, **dormant** most nearly means:',
            options: ['ancient', 'enormous', 'sleeping', 'erupting'],
            correctAnswer: 2
          },
          {
            label: 'In Sentence B, **cordial** most nearly means:',
            options: ['formal', 'welcoming', 'brief', 'nervous'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['quiet and inactive', 'sleeping', 'welcoming'],
        hint1: 'Look right after the dash in Sentence A.',
        hint2: 'Dormant things are inactive for now but could wake up later.',
        hint3: 'In Sentence B, "which means" hands you the answer.',
        explanation: 'The dash in Sentence A introduces "quiet and inactive," so dormant means sleeping or inactive (a dormant volcano can wake up). "For centuries" tells how long, not what the word means. In Sentence B, "which means a warm and friendly one" restates cordial: warm and friendly, that is, welcoming. Formal is a tempting trap, but a cordial welcome is warm, not stiff.'
      }
    },
    {
      id: 'wkvc-p2-input',
      type: 'input-boxes' as const,
      content: `**Which sentences carry a definition clue?** ✍️

(1) The barracks room was **vacant**, or empty, when the inspector arrived.

(2) The team will **evacuate** the building at noon.

(3) The engineers plan to **augment** the bridge — that is, to add steel supports that make it stronger.

(4) Everyone agreed that the plan was **feasible**.

**1)** Type the number of the sentence that uses the word **or** to restate its bold word:

**2)** Type the number of the other sentence that restates its bold word:

**3)** How many of the four sentences give no definition clue at all?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3', '2'],
        hint1: 'Sentence 1 has "or, empty."',
        hint2: 'Look for a dash followed by "that is."',
        hint3: 'Neither sentence 2 nor sentence 4 explains its bold word.',
        explanation: 'Sentence 1 restates vacant with "or, empty." Sentence 3 restates augment with "— that is, to add steel supports," so augment means to increase or add to. Sentences 2 and 4 give no definition clue, so the count is 2. There you would have to rely on knowing the words: evacuate means to leave or clear out, and feasible means possible or workable.'
      }
    },
    {
      id: 'wkvc-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- A **definition / restatement clue** puts the plain meaning right beside the hard word
- Watch for **commas, dashes, colons, "or," "that is," "in other words," "which means,"** and a plain "is"
- Read a few words **past** the bold word before you look at the choices
- Match the **part of speech**: an action word needs an action synonym
- The **opposite** of the restatement is a favorite wrong choice

> **Up Next:** Part 3 — contrast clues, where the sentence tells you what the word is **not**.`
    }
  ]
};
