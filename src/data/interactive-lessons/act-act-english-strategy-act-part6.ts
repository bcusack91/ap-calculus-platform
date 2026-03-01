export const actEnglishStratPart6Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Common Traps & Tricks

**Part 6 of 7 — Patterns the ACT Uses to Trick You**

The ACT is a standardised test, which means it uses **predictable patterns** to create wrong answers. Recognising these traps turns difficult questions into easy ones.

**The Big Three Traps:**
1. **Wordiness** — making you choose a long, fancy answer when a short one is better.
2. **"DELETE the underlined portion"** — offering deletion as a choice (and it's often correct!).
3. **"Sounds right" bias** — wrong answers that sound conversational but break grammar rules.

Let's explore each one.
      `
    },
    {
      id: 'act-es6-wordiness',
      type: 'text' as const,
      content: `
## Trap 1: Wordiness

The ACT **loves** testing conciseness. If two choices say the same thing but one uses fewer words, the **shorter one is almost always correct**.

**Examples of wordy traps:**

| Wordy (Wrong) | Concise (Correct) |
|---------------|-------------------|
| "at this point in time" | "now" |
| "due to the fact that" | "because" |
| "in the event that" | "if" |
| "the reason being that" | "because" |
| "has the ability to" | "can" |

**Redundancy** is a sub-category of wordiness:
- ~~"She returned back to the store."~~ → "She returned to the store." ("returned" already means "went back.")
- ~~"The new innovation was groundbreaking."~~ → "The innovation was groundbreaking." ("innovation" already implies "new.")
- ~~"They collaborated together on the project."~~ → "They collaborated on the project."

**Rule:** When in doubt, pick the shortest answer that maintains the original meaning.
      `
    },
    {
      id: 'act-es6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Wordiness & Conciseness** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the most concise way to express: "Despite the fact that the weather was bad, they went hiking"?',
            options: [
              'Despite the fact that the weather was bad, they went hiking.',
              'Although the weather was bad, they went hiking.',
              'In spite of the fact that there was bad weather occurring, they went hiking.',
              'Regardless of the fact that the weather turned out to be bad in nature, they went hiking.'
            ],
            correctAnswer: 1,
            explanation: '"Although the weather was bad" conveys the same meaning in fewer words. "Despite the fact that" and similar constructions are unnecessarily wordy.'
          },
          {
            question: 'Which sentence contains a redundancy?',
            options: [
              'The museum displayed artifacts from ancient civilisations.',
              'She cautiously approached the unfamiliar dog.',
              'The consensus of opinion among the group was unanimous.',
              'After the storm, the streets were flooded with water.'
            ],
            correctAnswer: 2,
            explanation: '"Consensus" already means "agreement of opinion," so "of opinion" is redundant. Additionally, "unanimous" repeats the idea of full agreement. The sentence is triply redundant.'
          }
        ]
      }
    },
    {
      id: 'act-es6-delete',
      type: 'text' as const,
      content: `
## Trap 2: "DELETE the Underlined Portion"

On some questions, one choice is **"DELETE the underlined portion."** Students often skip this option because it seems drastic. But:

**DELETE is correct when:**
- The underlined portion is **redundant** (it repeats what's already said).
- The underlined portion is **irrelevant** (it doesn't belong in the sentence or paragraph).
- Removing it makes the sentence **grammatically cleaner**.

**Example:**

> "The tall skyscraper, ~~which was very tall and imposing in its height,~~ dominated the city skyline."

DELETE is correct here — "tall skyscraper" already conveys the idea. The underlined clause is redundant.

**Real ACT data:** DELETE is the correct answer on roughly **30–40%** of the questions where it appears as an option. Don't ignore it!

**Strategy:** Whenever you see DELETE as an option, ask: "Does removing this make the sentence better or worse?" If the sentence reads just as well (or better) without the underlined portion, DELETE is likely correct.
      `
    },
    {
      id: 'act-es6-input1',
      type: 'input-boxes' as const,
      content: `
**Trap Identification** 📝

1) "She returned back home" contains a __________ (the error type where words repeat the same meaning).
2) When DELETE appears as an answer choice, it is correct roughly __________–40% of the time.
3) "Due to the fact that" should be replaced with the single word "__________.".
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['redundancy', '30', 'because'],
        hint1: '"Returned" already means "went back" — the extra word repeats the meaning.',
        hint2: 'It\'s correct more often than students expect — between 30 and 40 percent.',
        hint3: 'A one-word replacement for "due to the fact that."',
        explanation: '"Returned back" is a redundancy. DELETE is correct 30–40% of the time when offered. "Due to the fact that" = "because."'
      }
    },
    {
      id: 'act-es6-soundsright',
      type: 'text' as const,
      content: `
## Trap 3: "Sounds Right" Bias

Many students rely on their **ear** — "this sounds right to me." But spoken English breaks grammar rules constantly. The ACT tests *written* standard English.

**Common "sounds right" errors:**

- **"Me and my friend went…"** → "My friend and **I** went…" (subjective case for subjects)
- **"Between you and I"** → "Between you and **me**" (objective case after prepositions)
- **"Everyone should bring their book"** → "Everyone should bring **his or her** book" (singular antecedent — though the ACT has become more accepting of singular "they" in recent years)
- **"The data shows"** → "The data **show**" ("data" is technically plural)

**Defence:** Don't trust your ear alone. Apply the grammar rule, then check if the answer sounds right as a final confirmation.

**The "Cross-Out" Test:** For pronoun case, remove the other person from the sentence:
- "Me went to the store" → clearly wrong → use "I"
- "Give it to I" → clearly wrong → use "me"
      `
    },
    {
      id: 'act-es6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Trap Detection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"In the modern world of today" should be shortened to …',
            options: ['"In today\'s world"', '"In the modern contemporary world"', '"In the world that exists in modern times"', '"In our current modern era of today"']
          },
          {
            label: 'DELETE is the correct answer choice roughly …',
            options: ['5% of the time — it\'s almost never right', '30–40% of the time when it appears', '75% of the time — always pick it', '50% of the time — it\'s a coin flip']
          },
          {
            label: '"Between you and I" is incorrect because …',
            options: ['"I" should be capitalised', 'prepositions require the objective case ("me")', '"between" is an informal word', 'the sentence needs a comma']
          }
        ],
        correctAnswers: ['"In today\'s world"', '30–40% of the time when it appears', 'prepositions require the objective case ("me")'],
        hint1: 'Eliminate the redundant words: "modern" and "of today" say the same thing.',
        hint2: 'It is more common than most students expect.',
        hint3: '"Between" is a preposition, so the pronoun must be in the objective form.',
        explanation: '"In the modern world of today" is redundant — use "In today\'s world." DELETE is correct 30–40% when available. "Between" requires objective case: "between you and me."'
      }
    }
  ]
};
