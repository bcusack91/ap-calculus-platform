export const asvabWkVocabularyInContextPart5Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p5-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 5 of 7 — Words with More Than One Meaning**

### The Easy Word That Isn't

Some of the trickiest Word Knowledge questions use words you already know. The catch is that the sentence uses a **less common meaning**, and the most common meaning is waiting among the choices as a trap.

| Word | Common meaning | Other meanings |
|:---|:---|:---|
| **charge** | the price of something | an attack (the cavalry charge); a duty or responsibility (in charge of the keys) |
| **post** | to mail a letter | an assigned position (the guard's post); a job; to put up a notice |
| **brief** | short | to give someone instructions or information (to brief the squad) |
| **sound** | a noise | healthy, in good condition (safe and sound); sensible (sound advice) |
| **yield** | to give way (yield to traffic) | to produce (the savings account yields interest); the amount produced |
| **grave** | a burial place | serious (a grave mistake) |

Military life is full of these: a **detail** is a small group given a task, to **muster** is to gather troops, to **relieve** a guard is to take over the post, and a **drill** is a practice routine as well as a tool.

> **Key Fact:** When a short, everyday word shows up on Word Knowledge, assume the test may be using a **second meaning**. Let the sentence decide, never your first instinct.`
    },
    {
      id: 'wkvc-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: charge

Lieutenant Brooks was placed in **charge** of the night shift at the motor pool.

Choices: *price · attack · control · accusation*

- "Price" is the most common meaning, but nobody is placed in the price of a shift.
- "Attack" and "accusation" are real meanings of charge (a cavalry charge, criminal charges), but neither fits "placed in charge of."
- **So:** charge here means **control** or responsibility.

### Example 2: post

The sentry stayed at his **post** until his replacement arrived at midnight.

Choices: *letter · station · pole · message*

- A post can be a wooden pole or mail, but a sentry "stays at" a place.
- **So:** post means an assigned **station**.

### Example 3: brief

Before the exercise, the sergeant will **brief** the squad on the route and the radio codes.

Choices: *shorten · inform · praise · question*

- Brief usually means short, so "shorten" is the planted trap.
- Here brief is an **action** done to the squad, about the route and codes.
- **So:** brief means **inform**, give instructions to.

### The Substitution Check

Put each choice into the sentence in place of the bold word and read it aloud in your head. Only the right meaning sounds like the sentence the writer meant:

- "placed in **control** of the night shift" ✅
- "placed in **price** of the night shift" ❌`
    },
    {
      id: 'wkvc-p5-mc',
      type: 'multiple-choice' as const,
      content: '**Which meaning?** 🎯 Pick the choice closest in meaning to the bold word as it is used in the sentence.',
      exercise: {
        questions: [
          {
            question: `The inspector found the old bridge **sound** and approved it for heavy trucks.\n\n**Sound** most nearly means`,
            options: ['noisy', 'solid', 'quiet', 'famous'],
            correctAnswer: 1,
            explanation: 'An inspector approves a bridge for heavy trucks when it is structurally strong, so sound here means solid and in good condition. Noisy and quiet both play on the common meaning of sound as a noise.'
          },
          {
            question: `The recruiter liked Patel's **novel** idea for reaching students: a video series filmed by recent graduates.\n\n**Novel** most nearly means`,
            options: ['well-liked', 'written', 'lengthy', 'original'],
            correctAnswer: 3,
            explanation: 'Here novel describes an idea, not a book. A novel idea is new and original. Written and lengthy play on the book meaning, and well-liked is not what novel means.'
          },
          {
            question: `With better seed and irrigation, the farm now **yields** twice as much wheat as it did ten years ago.\n\n**Yields** most nearly means`,
            options: ['stores', 'sells', 'surrenders', 'produces'],
            correctAnswer: 3,
            explanation: 'The farm turns out twice as much wheat, so yields means produces. Surrenders is the "give way" meaning of yield, which does not fit a farm and its crop. Stores and sells are things done with wheat after it is grown.'
          },
          {
            question: `The doctor said the infection was **grave** and ordered that the patient be flown to a larger hospital.\n\n**Grave** most nearly means`,
            options: ['hidden', 'widespread', 'serious', 'buried'],
            correctAnswer: 2,
            explanation: 'Flying the patient to a larger hospital shows how dangerous the infection is: grave means serious. Buried plays on the burial-place meaning of grave.'
          },
          {
            question: `Anyone who sees a safety problem on the flight line should **file** a report with the duty officer.\n\n**File** most nearly means`,
            options: ['smooth', 'submit', 'sort', 'copy'],
            correctAnswer: 1,
            explanation: 'You file a report by turning it in officially, so file means submit. Smooth is the tool meaning (a metal file smooths edges), and sort plays on filing papers away in a cabinet.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Military meanings.** 🔽

**Sentence A.** Shaking with nerves, Gomez tried to **muster** the courage to climb the rappel tower.

**Sentence B.** At 0600, Private Lee will **relieve** Private Shaw at the front gate.

**Sentence C.** Six soldiers were assigned to the cleanup **detail** after the field exercise.`,
      exercise: {
        dropdowns: [
          {
            label: 'In Sentence A, **muster** most nearly means:',
            options: ['gather', 'hide', 'lose', 'test'],
            correctAnswer: 0
          },
          {
            label: 'In Sentence B, **relieve** most nearly means:',
            options: ['dismiss', 'praise', 'comfort', 'replace'],
            correctAnswer: 3
          },
          {
            label: 'In Sentence C, **detail** most nearly means:',
            options: ['drawing', 'team', 'plan', 'fact'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['gather', 'replace', 'team'],
        hint1: 'To muster troops is to call them together. What would Gomez call together inside himself?',
        hint2: 'Lee shows up at the gate at 0600 and Shaw can then leave.',
        hint3: 'Six soldiers are "assigned to" it.',
        explanation: 'Muster means to gather or summon, here gathering courage. To relieve someone at a post means to take over the duty from them, so replace fits; comfort plays on relieving pain. A detail, in military use, is a small group assigned to a task, so team fits; "fact" is the everyday meaning of a detail.'
      }
    },
    {
      id: 'wkvc-p5-input',
      type: 'input-boxes' as const,
      content: `**Match the meaning to the sentence.** ✍️

(1) The judge promised a **fair** hearing for both sides.

(2) The county **fair** opens next weekend with rides and a livestock show.

(3) The forecast calls for **fair** skies, so the jump will go on as planned.

(4) The baby has **fair** hair, almost white in the sun.

**1)** Type the number of the sentence where **fair** means **just** or **unbiased**:

**2)** Type the number of the sentence where **fair** means **clear** or **pleasant** weather:

**3)** Type the number of the sentence where **fair** means **light in color**:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3', '4'],
        hint1: 'Which sentence is about treating people equally?',
        hint2: 'Which sentence lets a parachute jump go ahead?',
        hint3: 'Which sentence describes hair "almost white"?',
        explanation: 'A judge promises a fair hearing: just, unbiased (1). Fair skies let the jump go on: clear, pleasant weather (3). Fair hair "almost white" is light in color (4). In sentence 2, fair is a noun: an outdoor event with rides and shows.'
      }
    },
    {
      id: 'wkvc-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Short, familiar words often appear with a **second meaning**: charge, post, brief, sound, yield, grave, file, detail, muster, relieve
- The **most common meaning** is usually one of the wrong choices
- Use the **substitution check**: put each choice in place of the word and reread the sentence
- Check the **part of speech**: "brief the squad" is an action, so its synonym must be an action

> **Up Next:** Part 6 — strategy for the whole subtest: pacing at 36 seconds a question and the traps test writers use most.`
    }
  ]
};
