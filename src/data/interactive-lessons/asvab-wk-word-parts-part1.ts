export const asvabWkWordPartsPart1Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p1-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 1 of 7 — How Word Parts Unlock Meaning**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **How word parts unlock meaning** |
| 2 | Prefixes that change meaning |
| 3 | Latin roots |
| 4 | Greek roots and number parts |
| 5 | Suffixes and parts of speech |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### Why Word Parts Matter on Word Knowledge

Word Knowledge (WK) gives you **15 questions in 9 minutes** on the CAT-ASVAB, about **36 seconds** each. Many questions show a word **alone**, with no sentence to help: "**Malfunction** most nearly means ___." When there is no context, the word itself is the only clue you have.

That is where word parts come in. Most longer English words are built from smaller pieces borrowed from Latin and Greek. A few dozen of those pieces show up in thousands of words. Learn the pieces once and you can take apart words you have never seen.

And WK is worth the effort. Your AFQT sum is AR + MK + 2 × VE, where VE is a weighted blend of Word Knowledge and Paragraph Comprehension (WK counting more). Verbal skill is half of the AFQT sum.

### The Three Kinds of Parts

| Part | Where it goes | What it does | Example |
|:---|:---|:---|:---|
| **Prefix** | front | changes or flips the meaning | **un**happy, **re**build |
| **Root** | middle (the core) | carries the main meaning | pre**dict**, in**spect** |
| **Suffix** | end | sets the part of speech (noun, verb, describing word) | predict**able**, inspect**ion** |

A word can have more than one prefix or suffix, and some words are just a root plus a suffix.`
    },
    {
      id: 'wkwp-p1-examples',
      type: 'text' as const,
      content: `## Taking Words Apart

### Example 1: unpredictable

| un | pre | dict | able |
|:---:|:---:|:---:|:---:|
| not | before | say | can be |

Put it back together: **not able to be said beforehand**. In plain words, **unpredictable** means impossible to know in advance, changing without warning.

### Example 2: transport

| trans | port |
|:---:|:---:|
| across | carry |

**Transport** means to carry across, from one place to another. The same root shows up in **port**able (can be carried), ex**port** (carry out of a country) and im**port** (carry in).

### The Big Idea: Word Families

One root opens a whole family of words. Once you know that **port** means *carry*, every member of the family gives up its meaning. The goal of this lesson is not to memorize lists of words, but to learn the **families**.

> **Key Fact:** Word parts give you a **direction**, not always an exact dictionary definition. Use them to rule out choices that point the wrong way, then pick the choice that fits best.

### A Three-Step Routine for a Word-Alone Question

1. **Split** the word into parts you recognize.
2. **Translate** each part and build a rough meaning.
3. **Match** the rough meaning to the closest choice, and eliminate choices that point the opposite way.`
    },
    {
      id: 'wkwp-p1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Split, translate, match.',
      exercise: {
        questions: [
          {
            question: '**Inaudible** most nearly means',
            options: ['easy to remember', 'impossible to hear', 'painful to hear', 'pleasant to hear'],
            correctAnswer: 1,
            explanation: 'In- (not) + aud (hear) + -ible (able to be): not able to be heard. Painful and pleasant both assume you can hear the sound; the prefix says you cannot.'
          },
          {
            question: '**Malfunction** most nearly means',
            options: ['failure', 'repair', 'design', 'upgrade'],
            correctAnswer: 0,
            explanation: 'Mal- means bad or badly, so a malfunction is a function gone bad: a failure to work properly. Repair and upgrade are things you do after a malfunction.'
          },
          {
            question: `After two days without food, the stranded hikers began to **revive** once rescuers gave them water and soup.\n\n**Revive** most nearly means`,
            options: ['sleep', 'weaken', 'recover', 'complain'],
            correctAnswer: 2,
            explanation: 'Re- (again) + viv (live): to come back to life or strength. Food and water bring the hikers back to strength, so they recover. Weaken is the opposite direction.'
          }
        ]
      }
    },
    {
      id: 'wkwp-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Word-alone WK questions give you **no context**; word parts become your clue
- **Prefix** (front) changes meaning; **root** (core) carries meaning; **suffix** (end) sets the part of speech
- Learn **families**: one root, many words (port: transport, portable, export, import)
- Parts give a **direction**: split → translate → match, and eliminate choices that point the wrong way

> **Up Next:** Part 2 — the prefixes that flip, place and time a word's meaning.`
    }
  ]
};
