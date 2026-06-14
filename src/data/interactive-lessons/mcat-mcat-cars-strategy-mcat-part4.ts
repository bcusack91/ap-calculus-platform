export const mcatCarsStratPart4Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 4 of 7 — Handling Difficult Passages**

### When You're Lost

1. **Don't panic** — difficult passages are designed to be difficult for everyone
2. **Focus on structure**: Even if content is confusing, you can track:
   - What is the author arguing?
   - Are they for or against something?
   - Where does the argument shift?

### Difficult Passage Types

| Type | Challenge | Strategy |
|------|-----------|----------|
| **Philosophy** | Abstract, dense language | Focus on the core claim, ignore jargon |
| **Art criticism** | Subjective, opinionated | Track the critic's position clearly |
| **Ethics** | Multiple perspectives | Note who says what |
| **History** | Dense dates/names | Focus on cause → effect, not memorizing specifics |

### The 2-Pass Approach for Hard Passages

**Pass 1**: Read through once, get the gist (don't stop to reread)
**Pass 2**: Use questions to guide you back to specific sections

### When to Skip a Passage

- If a passage is extremely difficult, flag ALL its questions
- Answer what you can on the first pass
- Come back with remaining time
- Always guess before time runs out!`
    },
    {
      id: 'cs4-worked',
      type: 'text' as const,
      content: `### Worked Example — Surviving a Dense Philosophy Passage

When the vocabulary is fogging your comprehension, switch from reading *for content* to reading *for structure*. Here is the technique on an intentionally opaque passage.

> "The phenomenological reduction does not abolish the natural attitude but brackets it, suspending the thesis of the world so that the noematic correlate may be interrogated as pure givenness rather than as posited existent."

If you try to *understand every term*, you stall. Instead, extract the skeleton:

**1. Subject + verb hunt.** Strip modifiers: "The reduction... brackets [the natural attitude]... so that [something] may be interrogated as [one thing] rather than [another thing]." You now have the shape — *X does not abolish but brackets Y, in order to study Z as A rather than B* — even without knowing what "noematic correlate" means.

**2. Track contrast, not definitions.** The load-bearing words are "not... but" and "rather than." The author is drawing *distinctions*: bracket vs. abolish; pure givenness vs. posited existent. You can answer most questions by knowing *that a contrast is being drawn* and *on which side the author stands*, without translating the jargon.

**3. Tag the paragraph by function.** "This paragraph defines the author's method (the reduction) and contrasts it with a cruder alternative (abolishing)." That tag is enough to navigate.

**4. Let the questions do the decoding.** When a question quotes "noematic correlate," return to this sentence and read the *local contrast* around it. You translate one phrase on demand instead of the whole passage up front.

**When to cut losses.** If after one honest pass you still cannot state even the structure, **flag every question, answer the one or two that are pure retrieval, and move on** — protecting the easier passages ahead. Come back only if time remains.

**Takeaway:** Dense passages punish word-by-word translation and reward structural reading. Hunt the subject-verb spine, follow the "not... but / rather than" contrasts, tag the function, and decode individual terms only when a question forces you to.`
    },
    {
      id: 'cs4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Difficult Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `You finish reading a dense philosophy passage and cannot state the main idea. The best next step is:`,
            options: [`Start the questions — they will guide you to re-examine specific parts of the passage`, `Reread the entire passage from the beginning`, `Skip the passage entirely and move on`, `Guess on all questions immediately`],
            correctAnswer: 0,
            explanation: `Questions point you to specific sections. Often, working through the questions helps you understand the passage structure better than a second full read. This is more time-efficient than rereading everything.`
          },
          {
            question: `When a passage is packed with unfamiliar jargon, the most efficient reading approach is to:`,
            options: [`Follow the argument's structure and contrasts, decoding specific terms only when a question requires it`, `Stop and define every unfamiliar word before continuing`, `Memorize the difficult terms in order`, `Assume the passage is unanswerable and guess`],
            correctAnswer: 0,
            explanation: `Tracking structure — the subject-verb spine and "not...but/rather than" contrasts — lets you grasp the argument without translating all the jargon. You can decode an individual term on demand when a question points to it, which is far faster than front-loading every definition.`
          },
          {
            question: `In a dense sentence, which words are most useful for grasping the author's meaning quickly?`,
            options: [`Contrast and structure words like "not...but," "rather than," and "however"`, `The most technical nouns`, `Proper names and dates`, `Adjectives describing minor details`],
            correctAnswer: 0,
            explanation: `Contrast and structure words reveal the distinctions and turns that carry an argument's logic. Knowing that the author favors one side of a "not...but" or "rather than" contrast often answers the question, even when the technical nouns remain fuzzy.`
          },
          {
            question: `A history passage is crowded with dates and names. To stay oriented, you should primarily track:`,
            options: [`The cause-and-effect relationships and the author's overall argument`, `Every date in chronological order`, `The spelling of each proper name`, `The number of paragraphs`],
            correctAnswer: 0,
            explanation: `Dense factual passages are best handled by following causal links and the author's thesis rather than memorizing specifics. You can return for an exact date if a question demands it; the durable understanding comes from cause -> effect and the main argument.`
          },
          {
            question: `After one honest pass through an extremely hard passage, you still cannot grasp its structure. The most time-savvy move is to:`,
            options: [`Flag its questions, answer any straightforward retrieval items, and move on to protect easier passages`, `Reread it three more times until it makes sense`, `Leave all its questions blank permanently`, `Spend your remaining time only on this passage`],
            correctAnswer: 0,
            explanation: `Difficult passages should not consume time owed to easier ones. Flagging, banking any easy retrieval points, and moving on preserves your overall score. You can revisit with leftover time, and you should still guess on every item before the section ends.`
          },
          {
            question: `Why is it reassuring to remember that a CARS passage feels difficult to nearly everyone?`,
            options: [`It reduces panic, helping you keep tracking structure instead of freezing`, `It means the questions will be scored more leniently`, `It guarantees you will get those questions right`, `It signals you should skip the rest of the section`],
            correctAnswer: 0,
            explanation: `Hard passages are calibrated to challenge all test-takers, so a feeling of difficulty is normal, not a sign of personal failure. Recognizing this keeps you calm enough to keep mapping structure. It does not change scoring or guarantee correct answers.`
          }
        ]
      }
    },
    {
      id: 'cs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Difficult passages are expected — don't let them derail you
- Read for structure: find the subject-verb spine and the contrasts
- Decode jargon only when a question points to it
- Let questions guide your understanding on a second targeted read
- Skip wisely: flag, bank easy points, guess, and return if time permits`
    }
  ]
};
