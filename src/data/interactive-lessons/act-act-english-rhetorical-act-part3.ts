export const actRhetoricalPart3Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh3-intro',
      type: 'text' as const,
      content: `
# 🎨 Style & Tone

**Part 3 of 7 — Word Choice, Conciseness, Redundancy & Register**

Style and tone questions ask you to pick the answer that best fits **how** the passage communicates — not just *what* it says. The ACT rewards answers that are:

- **Concise** — no unnecessary words.
- **Consistent in tone** — formal passages stay formal; informal ones stay casual.
- **Precise** — the right word for the context.

**Key Concepts:**

| Concept | Definition |
|---------|-----------|
| **Redundancy** | Saying the same thing twice: "advance forward," "free gift" |
| **Wordiness** | Using more words than necessary: "due to the fact that" → "because" |
| **Register** | Level of formality: academic, conversational, slang |
| **Connotation** | The emotional weight of a word: "thrifty" (positive) vs. "cheap" (negative) |

**ACT Rule of Thumb:** When in doubt, choose the **shortest answer** that preserves the full meaning. The ACT almost always favours conciseness.
      `
    },
    {
      id: 'act-rh3-redundancy',
      type: 'text' as const,
      content: `
## Redundancy — Eliminating Repetition

A **redundant** phrase repeats an idea that is already conveyed:

| Redundant | Why It's Redundant | Fix |
|-----------|-------------------|-----|
| *past history* | History is always in the past | *history* |
| *completely unanimous* | Unanimous already means complete agreement | *unanimous* |
| *each and every* | Each and every mean the same thing | *each* or *every* |
| *basic fundamentals* | Fundamentals are basics | *fundamentals* |
| *revert back* | Revert means to go back | *revert* |

**ACT-Style Example:**

*"The biography tells the story of her life."*

**Problem:** A biography *is* the story of someone's life. Fix: *"The biography covers her achievements and struggles."* Or simply: *"Her biography is fascinating."*

**Watch for "hidden" redundancy:** Sometimes the repeated idea appears in a different sentence. If Sentence 2 says "The building was old," and Sentence 3 says "Having been constructed many decades ago," Sentence 3 is redundant.
      `
    },
    {
      id: 'act-rh3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Conciseness & Redundancy** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision eliminates redundancy? Original: "She returned back to the office after lunch."',
            options: [
              '"She returned back to her office after eating lunch."',
              '"She returned to the office after lunch."',
              '"She went and returned back to the office after lunch."',
              '"She returned back to the place where she worked after lunch."'
            ],
            correctAnswer: 1,
            explanation: '"Returned back" is redundant because "returned" already means "went back." Simply "returned to the office" conveys the full meaning concisely.'
          },
          {
            question: 'Which is the most concise way to say "due to the fact that it was raining"?',
            options: [
              '"because of the fact that it was raining"',
              '"owing to the fact that rain was falling"',
              '"because it was raining"',
              '"in light of the rainy conditions that were occurring"'
            ],
            correctAnswer: 2,
            explanation: '"Because it was raining" says the same thing in four words instead of eight. "Due to the fact that" is a classic wordy construction that should almost always be replaced with "because."'
          }
        ]
      }
    },
    {
      id: 'act-rh3-tone',
      type: 'text' as const,
      content: `
## Tone & Register

The ACT tests whether you can maintain **consistent tone** throughout a passage. Most ACT passages use a **moderately formal, academic** tone.

**Formal vs. Informal:**
- ✅ *"The experiment yielded significant results."* (formal)
- ❌ *"The experiment was totally awesome."* (too casual for an academic passage)

**Matching Connotation:**
- *"The politician was stubborn"* — negative connotation
- *"The politician was determined"* — positive connotation
- *"The politician was resolute"* — formal and positive

Choose the word whose connotation matches the passage's attitude toward the subject.

**ACT Trap:** An answer might be grammatically correct and concise, but if it uses slang or overly casual language in a formal passage, it's wrong.

**Quick Test:** Read the sentence with your chosen answer *aloud in your head.* Does it sound like it belongs with the rest of the passage? If it jars, pick a different option.
      `
    },
    {
      id: 'act-rh3-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Wordiness** 📝

Replace each wordy phrase with a single concise word.

1) "at this point in time" → __________ (one word)

2) "in the event that" → __________ (one word)

3) "has the ability to" → __________ (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['now', 'if', 'can'],
        hint1: '"At this point in time" just means right now.',
        hint2: '"In the event that" introduces a condition — one little word replaces all four.',
        hint3: '"Has the ability to" is a wordy way of saying someone _____ do something.',
        explanation: '"Now" replaces "at this point in time." "If" replaces "in the event that." "Can" replaces "has the ability to." The ACT consistently rewards the most concise phrasing.'
      }
    },
    {
      id: 'act-rh3-precision',
      type: 'text' as const,
      content: `
## Word Choice & Precision

Sometimes the ACT asks you to choose the **most precise** word, not just the shortest:

**Example:** *"The scientist _____ the results."*
- (A) *looked at* — vague
- (B) *analysed* — ✅ precise and appropriate
- (C) *checked out* — too informal
- (D) *observed* — doesn't imply the depth of study

**Precision Checklist:**
- Does the word capture the **exact** action described?
- Is it at the right **formality level**?
- Does it avoid **unnecessary vagueness**? ("things," "stuff," "nice" are usually too vague)

**Common ACT Precision Swaps:**

| Vague | Precise |
|-------|---------|
| *got* | *received, obtained, earned* |
| *things* | *factors, elements, characteristics* |
| *good* | *effective, beneficial, exemplary* |
| *a lot* | *numerous, substantial, considerable* |
      `
    },
    {
      id: 'act-rh3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Style & Tone Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Totally destroyed" in a formal history passage should be revised to …',
            options: ['devastated', 'totally wrecked', 'messed up', 'got rid of']
          },
          {
            label: '"Free gift" is an example of …',
            options: ['a wordy phrase', 'a redundancy', 'an informal register', 'a connotation error']
          },
          {
            label: 'When two ACT answer choices are equally correct grammatically, you should pick the one that is …',
            options: ['longest and most detailed', 'shortest and most concise', 'most informal', 'most complex']
          }
        ],
        correctAnswers: ['devastated', 'a redundancy', 'shortest and most concise'],
        hint1: 'A formal synonym for "totally destroyed" that means the same thing in one word.',
        hint2: 'All gifts are free — the word "free" adds no new information.',
        hint3: 'The ACT rewards brevity when meaning is preserved.',
        explanation: '"Devastated" is formal and precise. "Free gift" is redundant because gifts are inherently free. The ACT favours conciseness — the shortest correct answer is usually best.'
      }
    }
  ]
};
