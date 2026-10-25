export const asvabWkVocabularyInContextPart6Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p6-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 6 of 7 — Test Strategy and Common Traps**

### Pacing: 36 Seconds a Word

On the CAT-ASVAB you get **9 minutes for 15 scored questions**, about **36 seconds** each. The screen shows your remaining time and remaining questions in the lower-right corner.

| Checkpoint | Where you want to be |
|:---|:---|
| After 5 questions | about 3 minutes used |
| After 10 questions | about 6 minutes used |
| After 15 questions | done, with a little time to spare |

Most questions will not take the full 36 seconds. If you know the word, answer in a few seconds and **bank the time** for the hard ones.

### Rules of the Road

- **You cannot skip or go back.** You must answer each question to move on, and an answered question is locked.
- **Finish the subtest.** Questions left unanswered when time runs out are scored as if you had guessed at random, and a string of wrong answers at the very end of a subtest carries a relatively large penalty. Pace yourself so that you are still reading and genuinely answering at the end, not clicking wildly.
- **Treat every question as scored.** Some questions may be unscored tryout items, and you cannot tell which ones.
- **Expect harder words if you are doing well.** The test adapts upward after correct answers.

> **Key Fact:** On the paper test there is no penalty for guessing, so you answer every item. On the computer test you also answer every item, because the screen will not let you move on without one.`
    },
    {
      id: 'wkvc-p6-routine',
      type: 'text' as const,
      content: `## The 4-Step Routine for a Sentence Question

1. **Read the sentence, cover the choices.** Decide what kind of word belongs in the blank spot: an action, a description, a thing? Good or bad? More or less?
2. **Predict.** Put your own simple word in place of the bold word. It does not have to be fancy.
3. **Match.** Find the choice closest to your prediction.
4. **Check.** Substitute your choice into the sentence. Does it say what the writer meant?

### Worked Example: Predict First

Even after three failed attempts, the team chose to **persevere** until the antenna finally worked.

- **Predict:** "keep going," "not quit."
- **Choices:** *continue · rest · complain · celebrate*
- **Match:** continue. To persevere is to keep at something despite difficulty.

## The Five Traps Test Writers Use

| Trap | What it looks like | Defense |
|:---|:---|:---|
| **Opposite** | The antonym of the right answer | Contrast sentences plant this one on purpose; check the direction |
| **Fits the sentence** | A word that makes a sensible sentence but is not what the bold word means | Ask "does the word **mean** this?" not just "does this fit?" |
| **Common meaning** | The everyday meaning of a multiple-meaning word | Let the sentence decide the sense |
| **Look-alike** | A choice that looks or sounds like the bold word, or like a word it is often confused with | Sound is not meaning |
| **Wrong form** | A describing word offered for an action word, or a past-tense word for a present one | Match the part of speech and form of the bold word |

### Worked Example: The "Fits the Sentence" Trap

The mayor publicly **endorsed** the plan to build a new veterans' center.

Choices: *supported · announced · designed · opposed*

- "Announced" makes a perfectly good sentence: the mayor publicly announced the plan. But endorse does not mean announce.
- "Opposed" is the opposite trap.
- **Endorse** means to **support** or approve. Supported is correct.

### Worked Example: The Look-Alike Trap

The fox managed to **elude** the hounds by doubling back through the creek.

Choices: *escape · include · tease · injure*

- "Include" shares most of its letters with elude, but means something unrelated.
- Doubling back through a creek is a way of getting away.
- **Elude** means to **escape** or avoid.`
    },
    {
      id: 'wkvc-p6-mc',
      type: 'multiple-choice' as const,
      content: '**Dodge the traps.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `After reviewing the damage report, both engineers **concurred** that the bridge should stay closed.\n\n**Concurred** most nearly means`,
            options: ['agreed', 'worried', 'reported', 'argued'],
            correctAnswer: 0,
            explanation: '"Both engineers" reaching the same conclusion signals agreement: to concur is to agree. Argued is the opposite trap, and reported fits the sentence but is not what concur means.'
          },
          {
            question: `The crew worked through the night to **rectify** the wiring error before the morning launch.\n\n**Rectify** most nearly means`,
            options: ['repeat', 'discover', 'explain', 'correct'],
            correctAnswer: 3,
            explanation: 'Working through the night before a launch to deal with an error means fixing it: rectify means correct. Discover and explain fit the sentence (you could discover or explain an error) but do not mean rectify.'
          },
          {
            question: `One careless mistake at the end of the exercise could **negate** all the progress the squad had made.\n\n**Negate** most nearly means`,
            options: ['double', 'review', 'reward', 'cancel'],
            correctAnswer: 3,
            explanation: 'A careless mistake wiping out progress means undoing it: negate means cancel or cancel out. Double and reward point the opposite direction.'
          },
          {
            question: `Although the truck rolled over twice, the cargo of medical supplies arrived **intact**.\n\n**Intact** most nearly means`,
            options: ['scattered', 'undamaged', 'insured', 'delayed'],
            correctAnswer: 1,
            explanation: '"Although" sets up a contrast with the rollover: despite the crash, the supplies were fine. Intact means undamaged, whole. Scattered is the opposite trap.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Name the trap.** 🔽

The city council voted to **sustain** funding for the free clinic for another five years.

Choices: *support · cut · study · sustained*`,
      exercise: {
        dropdowns: [
          {
            label: 'The correct choice is:',
            options: ['study', 'support', 'cut'],
            correctAnswer: 1
          },
          {
            label: 'The choice "cut" is which trap?',
            options: ['Look-alike', 'Opposite', 'Fits the sentence'],
            correctAnswer: 1
          },
          {
            label: 'The choice "study" is which trap?',
            options: ['Opposite', 'Fits the sentence', 'Look-alike'],
            correctAnswer: 1
          },
          {
            label: 'The choice "sustained" is which trap?',
            options: ['Wrong form', 'Opposite', 'Common meaning'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['support', 'Opposite', 'Fits the sentence', 'Wrong form'],
        hint1: 'Funding "for another five years" means keeping it going.',
        hint2: 'Which choice means the reverse of keeping funding going?',
        hint3: 'A council could study funding, but does sustain mean study? And "sustained" is a past-tense form, not a match for "to sustain."',
        explanation: 'To sustain is to keep something going or support it, so support is correct. Cut is the opposite. Study makes a sensible sentence (the council voted to study funding) but is not what sustain means. "Sustained" is the same word in a different form, which does not fit "voted to ___."'
      }
    },
    {
      id: 'wkvc-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **15 questions, 9 minutes**: about 36 seconds each; check yourself at 5 questions (about 3 minutes) and 10 questions (about 6 minutes)
- You cannot skip or go back, and you must finish: unanswered items count as random guesses, and a run of wrong answers at the end is penalized
- Routine: **cover the choices → predict → match → check by substitution**
- Know the five traps: **opposite, fits the sentence, common meaning, look-alike, wrong form**

> **Up Next:** Part 7 — a mixed mastery set with every clue type and both question formats.`
    }
  ]
};
