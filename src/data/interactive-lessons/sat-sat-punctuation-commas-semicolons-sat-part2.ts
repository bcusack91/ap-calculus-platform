export const satPunctuationCommasPart2Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc2-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 2 of 7 — Nonessential vs. Essential Clauses**

One of the most frequently tested comma rules on the SAT involves **nonessential (nonrestrictive)** vs. **essential (restrictive)** elements. The key question is: *Can you remove the phrase without changing the core meaning?*

### The Rule

- **Nonessential** information → set it off with commas (you can remove it, and the sentence still makes sense).
- **Essential** information → NO commas (removing it would change the meaning).
      `
    },
    {
      id: 'sat-pc2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly punctuates a nonessential clause?',
            options: [
              'The scientist who discovered penicillin won a Nobel Prize.',
              'The scientist, who discovered penicillin, won a Nobel Prize.',
              'The scientist who discovered penicillin, won a Nobel Prize.',
              'The scientist, who discovered penicillin won a Nobel Prize.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "who discovered penicillin" is nonessential information (we already know which scientist). It should be set off by commas on BOTH sides.'
          },
          {
            question: 'In which sentence is the clause essential (no commas needed)?',
            options: [
              'My brother, who lives in Boston, is a doctor.',
              'The book, which was published in 1984, became a classic.',
              'Students who study regularly tend to perform better.',
              'Dr. Smith, who teaches chemistry, won an award.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "who study regularly" is essential because removing it changes the meaning from specific students to ALL students. Essential clauses are not set off by commas.'
          }
        ]
      }
    },
    {
      id: 'sat-pc2-detail1',
      type: 'text' as const,
      content: `
### How to Tell the Difference

**Nonessential (use commas):**
> *My mother, who is an engineer, works at NASA.*

Why? You only have one mother — "who is an engineer" adds extra info but doesn't identify *which* mother.

**Essential (no commas):**
> *The students who completed the extra credit passed the exam.*

Why? Without "who completed the extra credit," the sentence claims ALL students passed — which changes the meaning entirely.

### The "Which" vs. "That" Shortcut

- **"Which"** often introduces **nonessential** clauses → commas
- **"That"** often introduces **essential** clauses → no commas

> *The experiment, which took three hours, yielded surprising results.* ✅

> *The experiment that took three hours yielded surprising results.* ✅

**SAT Tip:** If you see an answer choice that puts a comma before "that," it is almost always wrong.
      `
    },
    {
      id: 'sat-pc2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Select the correctly punctuated sentence.',
            options: [
              'The painting that, hangs in the lobby, is priceless.',
              'The painting, that hangs in the lobby, is priceless.',
              'The painting that hangs in the lobby is priceless.',
              'The painting that hangs in the lobby, is priceless.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "That" introduces an essential clause. Essential clauses have no commas. The clause "that hangs in the lobby" tells us WHICH painting, so it is essential to the meaning.'
          },
          {
            question: 'Which version correctly uses commas with a nonessential phrase?',
            options: [
              'Abraham Lincoln the 16th president abolished slavery.',
              'Abraham Lincoln, the 16th president, abolished slavery.',
              'Abraham Lincoln, the 16th president abolished slavery.',
              'Abraham Lincoln the 16th president, abolished slavery.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "the 16th president" is an appositive (a renaming phrase) that is nonessential — we already know who Abraham Lincoln is. Nonessential phrases require commas on both sides.'
          }
        ]
      }
    },
    {
      id: 'sat-pc2-detail2',
      type: 'text' as const,
      content: `
### Appositives

An **appositive** is a noun or noun phrase that renames another noun right next to it.

**Nonessential appositive** (most common on the SAT):
> *Dr. Patel, a renowned biologist, published a new study.*

**Essential appositive** (rare):
> *The novelist Jane Austen wrote six major novels.*

Here, "Jane Austen" is essential because "the novelist" alone isn't specific enough.

### SAT Strategy: The "Remove It" Test

1. Read the sentence without the phrase between the commas.
2. If the sentence still makes sense and the meaning doesn't change → commas are correct (nonessential).
3. If removing the phrase changes who or what is being discussed → no commas (essential).
      `
    },
    {
      id: 'sat-pc2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Element** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"My sister, who is 12, loves soccer."',
            options: ['Nonessential — use commas', 'Essential — no commas']
          },
          {
            label: '"The player who scored the goal celebrated."',
            options: ['Nonessential — use commas', 'Essential — no commas']
          },
          {
            label: '"Paris, the capital of France, is beautiful."',
            options: ['Nonessential — use commas', 'Essential — no commas']
          },
          {
            label: '"Cars that run on electricity are eco-friendly."',
            options: ['Nonessential — use commas', 'Essential — no commas']
          }
        ],
        correctAnswers: [
          'Nonessential — use commas',
          'Essential — no commas',
          'Nonessential — use commas',
          'Essential — no commas'
        ],
        hint1: 'Ask: "Does removing this phrase change WHICH thing we are talking about?"',
        hint2: 'Proper nouns and unique items tend to have nonessential clauses; general nouns tend to have essential ones.',
        hint3: 'If "that" introduces the clause, it is almost always essential (no commas).',
        explanation: '"Who is 12" and "the capital of France" add extra info about already-identified subjects. "Who scored the goal" and "that run on electricity" narrow down which player/cars — essential for meaning.'
      }
    }
  ]
}
