export const actPunctuationPart1Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn1-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas

**Part 1 of 7 — Items in a Series, Introductory Elements, Nonessential Clauses & Coordinate Adjectives**

Commas are the most frequently tested punctuation mark on the ACT English section. Approximately **5–8 questions per test** involve comma usage, so mastering these rules gives you a significant scoring advantage.

**The Four Big Comma Rules on the ACT:**

| Rule | Example |
|------|---------|
| Items in a series | *She packed books, snacks, and water.* |
| After introductory elements | *After the lecture, students asked questions.* |
| Around nonessential clauses | *My sister, who lives in Chicago, is visiting.* |
| Between coordinate adjectives | *It was a long, exhausting day.* |

**Why this matters:** The ACT doesn't just test whether you know the rules — it tests whether you can avoid **adding commas where they don't belong**.
      `
    },
    {
      id: 'act-pn1-series',
      type: 'text' as const,
      content: `
## Items in a Series & the Oxford Comma

When you list **three or more items**, place commas between each item. The ACT typically includes the comma before the conjunction (the **Oxford comma**).

**Correct:**
- ✅ *The lab requires goggles, gloves, and a lab coat.*
- ✅ *She studied biology, chemistry, and physics.*

**Incorrect — Missing Comma:**
- ❌ *The lab requires goggles, gloves and a lab coat.*

**Two-Item Lists — No Comma Before "and":**
- ✅ *She studied biology and chemistry.*
- ❌ *She studied biology, and chemistry.* (Don't add a comma with only two items!)

**ACT Trap:** The ACT will sometimes offer an answer that inserts a comma between just two items. Always count the items in the list before choosing.

**Introductory Elements:**

After an introductory word, phrase, or clause, use a comma:
- ✅ *However, the results were inconclusive.*
- ✅ *After running for three miles, she stopped to rest.*
- ✅ *When the bell rang, students rushed to the door.*

**Short introductory phrases** (1–2 words) may sometimes omit the comma, but on the ACT, the safer choice is to include it.
      `
    },
    {
      id: 'act-pn1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comma Usage — Spot the Correct Version** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses commas correctly? (A) The recipe calls for flour, sugar and butter. (B) The recipe calls for flour, sugar, and butter. (C) The recipe calls for flour sugar and butter.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 1,
            explanation: 'Sentence B correctly uses the serial (Oxford) comma. With three items in a series, commas separate each item, including before the conjunction "and."'
          },
          {
            question: '"After reviewing the data the scientists published their findings." What punctuation fix does this sentence need?',
            options: ['A comma after "data"', 'A comma after "scientists"', 'A semicolon after "data"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"After reviewing the data" is an introductory clause. A comma is needed after "data" to separate it from the main clause.'
          }
        ]
      }
    },
    {
      id: 'act-pn1-nonessential',
      type: 'text' as const,
      content: `
## Nonessential (Nonrestrictive) Clauses

A **nonessential clause** adds extra information that can be removed without changing the sentence's meaning. Set it off with **commas on both sides**.

**Nonessential (commas needed):**
- ✅ *My brother, who is a pilot, travels frequently.*
- Removing "who is a pilot" leaves a complete sentence: *My brother travels frequently.*

**Essential (no commas):**
- ✅ *Students who study regularly tend to score higher.*
- Removing "who study regularly" changes the meaning — we no longer know which students.

**The "Which" vs. "That" Shortcut:**
- **Which** → usually nonessential → needs commas: *The car, which was red, sped away.*
- **That** → usually essential → no commas: *The car that was red sped away.*

**Coordinate Adjectives:**

Two adjectives are **coordinate** (equal) when you can swap their order or insert "and" between them:
- ✅ *It was a cold, dreary morning.* (You could say "dreary, cold morning" or "cold and dreary morning.")
- ❌ *She wore a bright red scarf.* ("Red bright scarf" sounds wrong — not coordinate, so no comma.)

**ACT Tip:** Try the swap test. If the adjectives sound natural in either order, use a comma.
      `
    },
    {
      id: 'act-pn1-input1',
      type: 'input-boxes' as const,
      content: `
**Add the Missing Punctuation** ✏️

Type the correct punctuation mark (comma, no comma, two commas) for each sentence.

1) "The museum ___ which was built in 1920 ___ is undergoing renovation." — What punctuation goes in each blank?
2) "Running through the park ___ she noticed a rare bird." — What punctuation goes in the blank?
3) "They brought sandwiches ___ drinks ___ and fruit to the picnic." — What punctuation goes in each blank?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma', 'comma', 'comma'],
        hint1: '"Which was built in 1920" is nonessential info — it needs commas on both sides.',
        hint2: '"Running through the park" is an introductory phrase — add a comma after it.',
        hint3: 'This is a list of three items — use commas between each item (serial comma).',
        explanation: '1) Commas on both sides of the nonessential clause. 2) Comma after the introductory participial phrase. 3) Commas between items in a series.'
      }
    },
    {
      id: 'act-pn1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Comma Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A nonessential clause should be …',
            options: ['set off with commas on both sides', 'preceded by a semicolon', 'left without any punctuation', 'followed by a colon']
          },
          {
            label: 'In a list of three items, commas go …',
            options: ['only after the first item', 'between each item including before the conjunction', 'only before the conjunction', 'nowhere — the conjunction is enough']
          },
          {
            label: 'After a long introductory phrase, you should add a …',
            options: ['comma', 'semicolon', 'colon', 'dash']
          }
        ],
        correctAnswers: ['set off with commas on both sides', 'between each item including before the conjunction', 'comma'],
        hint1: 'Nonessential means the info can be removed — the commas signal that.',
        hint2: 'The ACT uses the Oxford/serial comma.',
        hint3: 'Introductory elements are followed by a comma to separate them from the main clause.',
        explanation: 'Nonessential clauses need commas on both sides. Series use commas between all items (Oxford comma). Introductory phrases are followed by a comma.'
      }
    },
    {
      id: 'act-pn1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The town\'s annual festival which draws thousands of visitors every summer is scheduled for July." Which is the best punctuation? (A) No change. (B) festival, which draws thousands of visitors every summer, is scheduled. (C) festival; which draws thousands of visitors every summer; is scheduled. (D) festival which draws thousands of visitors every summer is scheduled.',
            options: ['A — No change', 'B — Commas around the clause', 'C — Semicolons around the clause', 'D — Remove all punctuation'],
            correctAnswer: 1,
            explanation: '"Which draws thousands of visitors every summer" is a nonessential clause — it provides extra detail about the festival. It must be set off with commas on both sides.'
          },
          {
            question: '"Before the experiment began the researchers calibrated their instruments checked the controls and reviewed the hypothesis." How should this sentence be punctuated?',
            options: ['Comma after "began" only', 'Commas after "began," "instruments," and "controls"', 'Semicolons after "began" and "instruments"', 'No punctuation needed'],
            correctAnswer: 1,
            explanation: 'A comma is needed after the introductory clause "Before the experiment began." Then commas separate the three items in the series: "calibrated their instruments," "checked the controls," and "reviewed the hypothesis."'
          }
        ]
      }
    }
  ]
};
