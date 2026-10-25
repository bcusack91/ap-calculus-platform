export const asvabWkWordPartsPart6Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p6-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 6 of 7 — Test Strategy and Common Traps**

### Word Parts on the Clock

You have about **36 seconds** per Word Knowledge question on the CAT-ASVAB (15 questions in 9 minutes). Word parts are fast **when you use them as a shortcut**, not as a research project.

| Time | What to do |
|:---|:---|
| First few seconds | Do you know the word? If yes, answer and move on |
| Next 10–15 seconds | Split it: is there a prefix, root or suffix you recognize? |
| Next 10 seconds | Eliminate choices that point the wrong way or are the wrong part of speech |
| By about 36 seconds | Choose the best remaining answer; you cannot skip, and you cannot come back |

You cannot return to an answered question on the CAT, and you must answer to move on. Unanswered questions at the time limit are scored as random guesses, and a run of wrong answers at the very end of a subtest carries a relatively large penalty, so do not get stuck dissecting one word.

### Trap 1: The Prefix That Is Not "Not"

**In-** usually means *not*, but it can also mean **in** or **into**:

| in- = not | in- = in, into |
|:---|:---|
| inactive, incorrect, invisible | inhale (breathe in), insert, inject, inhabit (live in) |

And a few words are famous for fooling people:

- **Inflammable** means **easily set on fire**, the same as flammable. (The *in-* here means *into*, as in bursting into flame.) A truck marked INFLAMMABLE is dangerous, not safe.
- **Invaluable** means **priceless**, so valuable it cannot be measured, not "worthless."
- **Infamous** means **famous for something bad**, not "unknown."

### Trap 2: Letters That Only Look Like a Root

Not every "port" is a root. **Portion** (a share) and **portrait** (a picture of a person) have nothing to do with carrying. **Pressure** contains *pre*, but it does not mean "before." If a split gives you nonsense, drop it and use another strategy.

### Trap 3: Trusting a Root Too Far

A root gives a **direction**, not a definition. **Sub**marine and **sub**stantial both start with *sub*, but substantial means large or considerable, nothing to do with being under anything. Use the root to rule out choices that point the wrong way, then choose the best fit among what is left.`
    },
    {
      id: 'wkwp-p6-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: the "in-" that means "into"

**Inflammable** most nearly means: *fireproof · burnable · harmless · invisible*

- If you read *in-* as *not*, you would pick "fireproof," the trap.
- Inflammable shares its root with **inflame** and **flame**: it means able to burst into flame.
- **Answer:** burnable.

### Example 2: the "in-" that intensifies

**Invaluable** most nearly means: *worthless · priceless · cheap · ordinary*

- Reading *in-* as *not* gives "not valuable," so "worthless," the trap.
- Invaluable means too valuable to put a price on.
- **Answer:** priceless.

### Example 3: the "in-" that turns famous bad

**Infamous** most nearly means: *unknown · notorious · humble · lucky*

- "Not famous" would give "unknown," the trap.
- An infamous outlaw is well known **for being bad**.
- **Answer:** notorious.

### How to Protect Yourself

1. If the split gives a meaning that sounds strange, **doubt it**.
2. Ask whether you have heard the word in real life (a warning sign, a news story).
3. Use **part of speech** and **elimination** to back up the root.`
    },
    {
      id: 'wkwp-p6-mc',
      type: 'multiple-choice' as const,
      content: '**Avoid the traps.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `After a week of rain kept them in their tents, the troops grew **restive**, pacing and snapping at one another.\n\n**Restive** most nearly means`,
            options: ['unhurried', 'sleepy', 'rested', 'restless'],
            correctAnswer: 3,
            explanation: 'Despite the "rest" inside it, restive means restless and impatient. Pacing and snapping at each other confirm it. Unhurried and rested are the traps that trust the letters "rest."'
          },
          {
            question: '**Inhabit** most nearly means',
            options: ['avoid', 'build', 'abandon', 'occupy'],
            correctAnswer: 3,
            explanation: 'Here in- means in, not not: to inhabit is to live in, that is, to occupy. Abandon is the trap for anyone who reads in- as not.'
          },
          {
            question: `The **disgruntled** customer demanded to speak to a manager about the broken heater.\n\n**Disgruntled** most nearly means`,
            options: ['polite', 'satisfied', 'annoyed', 'confused'],
            correctAnswer: 2,
            explanation: 'Disgruntled means annoyed and dissatisfied. The dis- here does not reverse a word you know, so lean on the sentence: demanding a manager over a broken heater is what an annoyed customer does.'
          },
          {
            question: '**Enervate** most nearly means',
            options: ['weaken', 'irritate', 'motivate', 'energize'],
            correctAnswer: 0,
            explanation: 'Enervate looks like "energize," but it means the opposite: to drain of energy, to weaken. A long march in the heat can enervate even a fit soldier. This is a classic look-alike trap.'
          }
        ]
      }
    },
    {
      id: 'wkwp-p6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which "in-"?** 🔽 Decide what the prefix means in each word.',
      exercise: {
        dropdowns: [
          {
            label: '**inexpensive**: the prefix in- means',
            options: ['very much', 'not', 'in, into'],
            correctAnswer: 1
          },
          {
            label: '**inhale**: the prefix in- means',
            options: ['in, into', 'very much', 'not'],
            correctAnswer: 0
          },
          {
            label: '**insert**: the prefix in- means',
            options: ['not', 'in, into', 'very much'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['not', 'in, into', 'in, into'],
        hint1: 'Inexpensive things cost little: are they expensive?',
        hint2: 'Inhale is the opposite of exhale (breathe out).',
        hint3: 'You insert a key into a lock.',
        explanation: 'Inexpensive means not expensive, so in- = not. Inhale means breathe in (the opposite of ex-hale, breathe out), and insert means put into, so in both of those in- = in, into.'
      }
    },
    {
      id: 'wkwp-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Budget about **36 seconds**: know it → split it → eliminate → choose; you cannot skip or go back
- **In-** can mean *not* or *in/into*: inflammable = burnable, invaluable = priceless, infamous = famous for something bad, inhabit = live in
- Some letters only **look** like a root (portion, portrait, pressure, restive)
- A root gives a **direction**, not a definition; back it up with part of speech, real-life memory and elimination

> **Up Next:** Part 7 — a mixed mastery set using every kind of word part.`
    }
  ]
};
