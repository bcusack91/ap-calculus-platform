export const actPunctuationPart4Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn4-intro',
      type: 'text' as const,
      content: `
# — Dashes & Parentheses

**Part 4 of 7 — Em Dashes for Emphasis, Parenthetical Asides & When to Use Which**

Dashes and parentheses both set off extra information in a sentence, but they create different effects. The ACT tests whether you know the rules for each — and whether you can keep them consistent.

**The Big Three Tools for Setting Off Information:**

| Tool | Effect | Example |
|------|--------|---------|
| Commas | Neutral, most common | *My cousin, a doctor, helped.* |
| Parentheses | De-emphasize / aside | *My cousin (a doctor) helped.* |
| Em dashes | Emphasize / dramatic pause | *My cousin — a doctor — helped.* |

**Critical ACT Rule:** When you use **two** dashes or **two** commas or **two** parentheses to set off information, you must use the **same mark on both sides**. You cannot mix them.
- ❌ *The results — which surprised everyone, were published Friday.*
- ✅ *The results — which surprised everyone — were published Friday.*
      `
    },
    {
      id: 'act-pn4-emdash',
      type: 'text' as const,
      content: `
## Em Dashes

**Use 1 — Set Off a Dramatic or Emphatic Aside:**
- *The discovery — one that would change the field forever — was published in a small journal.*
- The dashes emphasize the importance of the clause.

**Use 2 — Introduce an Explanation or List (Like a Colon):**
- *She had one priority — finishing the project on time.*
- *Three states — California, Texas, and Florida — have the largest populations.*

**Use 3 — Indicate a Sudden Break in Thought:**
- *I was about to leave when — wait, did you hear that?*

**The Pair Rule:** If the aside is in the **middle** of a sentence, you need dashes on **both sides**:
- ✅ *The mayor — beloved by residents — announced her retirement.*
- ❌ *The mayor — beloved by residents, announced her retirement.* (Mismatched punctuation!)

If the aside is at the **end** of a sentence, you only need one dash:
- ✅ *She had one dream — to become a scientist.*

**ACT Trap:** The ACT frequently offers one answer with paired dashes and another with mismatched punctuation (one dash + one comma). Always check that pairs match.
      `
    },
    {
      id: 'act-pn4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Dashes — Choose the Correct Version** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The proposal — which had been debated for months, was finally approved." What is the error?',
            options: ['No error', 'Mismatched punctuation — needs a dash after "months" instead of a comma', 'The dash should be a comma', 'The entire clause should be removed'],
            correctAnswer: 1,
            explanation: 'The aside "which had been debated for months" must be closed with the same punctuation that opened it. Since a dash opens it, a dash must close it: "The proposal — which had been debated for months — was finally approved."'
          },
          {
            question: 'Which sentence correctly uses an em dash? (A) She wanted one thing — to win. (B) She wanted one thing; to win. (C) She wanted one thing, to win.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'An em dash can introduce an explanation at the end of a sentence, similar to a colon. Sentence A is correct. A semicolon (B) requires an independent clause on both sides. A comma (C) creates a weak connection where emphasis is intended.'
          }
        ]
      }
    },
    {
      id: 'act-pn4-parentheses',
      type: 'text' as const,
      content: `
## Parentheses

Parentheses **de-emphasize** information — they tell the reader, "This is a side note."

**Use 1 — Supplementary Details:**
- *The study (conducted over three years) confirmed earlier findings.*
- *Marie Curie (1867–1934) won two Nobel Prizes.*

**Use 2 — Abbreviations or Acronyms:**
- *The Environmental Protection Agency (EPA) issued new guidelines.*

**Punctuation with Parentheses:**
- Periods and commas go **outside** the closing parenthesis when the parenthetical is part of a larger sentence:
  - ✅ *She passed the exam (with a perfect score), surprising everyone.*
  - ❌ *She passed the exam (with a perfect score,) surprising everyone.*
- If the entire sentence is in parentheses, the period goes **inside**:
  - ✅ *(She passed the exam with a perfect score.)*

**When to Use What — Decision Guide:**
- Need to **emphasize** the aside? → Em dashes
- Need to **de-emphasize** / add a side note? → Parentheses
- Neutral — the most common, default choice? → Commas

**ACT Tip:** The ACT rarely tests parentheses directly, but when it does, it tests whether you can maintain consistent pairing and proper punctuation placement.
      `
    },
    {
      id: 'act-pn4-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Correct Punctuation** ✏️

Type "dashes," "parentheses," or "commas" for the best choice in each sentence.

1) "The keynote speaker — a Nobel laureate ___ captivated the audience." — What should replace the blank to close the aside?
2) "The festival (held annually in October) ___ attracts visitors from across the country." — What punctuation, if any, goes in the blank?
3) "Three countries ___ France, Germany, and Italy ___ signed the agreement." — What paired punctuation best sets off this list in an emphatic way?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dash', 'none', 'dashes'],
        hint1: 'The aside opened with a dash, so it must close with the same mark.',
        hint2: 'The parenthetical is already closed with a parenthesis — no extra punctuation is needed before the verb.',
        hint3: 'Setting off a list dramatically favors em dashes.',
        explanation: '1) A dash must close what a dash opens. 2) No extra punctuation — the closing parenthesis ends the aside. 3) Em dashes emphasize the list of countries.'
      }
    },
    {
      id: 'act-pn4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Dashes & Parentheses** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When an em dash opens an aside in the middle of a sentence, it must be closed with …',
            options: ['another em dash', 'a comma', 'a parenthesis', 'a semicolon']
          },
          {
            label: 'Parentheses are best used to …',
            options: ['emphasize important information', 'de-emphasize supplementary details', 'replace commas in all cases', 'introduce a list']
          },
          {
            label: 'Periods go ___ the closing parenthesis when the parenthetical is inside a larger sentence.',
            options: ['inside', 'outside', 'either inside or outside', 'before']
          }
        ],
        correctAnswers: ['another em dash', 'de-emphasize supplementary details', 'outside'],
        hint1: 'Matching pairs — open and close with the same punctuation mark.',
        hint2: 'Parentheses tell the reader this is a side note.',
        hint3: 'The period belongs to the larger sentence, not the parenthetical.',
        explanation: 'Dashes must pair with dashes. Parentheses de-emphasize. When part of a larger sentence, periods go outside the closing parenthesis.'
      }
    },
    {
      id: 'act-pn4-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The architect — who had designed several award-winning buildings, unveiled her latest project at the conference." Which revision is correct?',
            options: ['No change needed', 'Replace the comma after "buildings" with an em dash', 'Replace the em dash with a comma', 'Remove both the dash and the comma'],
            correctAnswer: 1,
            explanation: 'The aside "who had designed several award-winning buildings" opens with an em dash but closes with a comma — a mismatch. It must close with an em dash: "The architect — who had designed several award-winning buildings — unveiled her latest project."'
          },
          {
            question: '"The CEO announced that the merger (originally planned for March) would be delayed, and that employees would receive updates — in the coming weeks." What change is needed?',
            options: ['Remove the dash before "in the coming weeks"', 'Replace the parentheses with dashes', 'Add a dash after "delayed"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"In the coming weeks" is not a dramatic aside requiring a dash — it flows naturally from the sentence. Removing the dash creates a cleaner, correct sentence.'
          }
        ]
      }
    }
  ]
};
