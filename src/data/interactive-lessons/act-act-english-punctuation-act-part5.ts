export const actPunctuationPart5Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn5-intro',
      type: 'text' as const,
      content: `
# 📌 End Punctuation & Quotation Marks

**Part 5 of 7 — Periods with Quotes, Question Marks & Exclamation Points**

End punctuation and quotation marks don't appear as often on the ACT as commas, but when they do, the rules are strict. Getting these right is easy — once you know the conventions.

**The Basics:**

| Mark | Use |
|------|-----|
| Period (.) | End a declarative or imperative sentence |
| Question mark (?) | End a direct question |
| Exclamation point (!) | End an exclamatory sentence (rare on the ACT) |

**ACT Approach:** The ACT strongly prefers a **neutral, academic tone**. This means periods are almost always preferred over exclamation points. If an answer choice uses an exclamation point, it's usually wrong.
      `
    },
    {
      id: 'act-pn5-quotes',
      type: 'text' as const,
      content: `
## Quotation Marks & Punctuation Placement

**Rule 1 — Periods and Commas Go INSIDE Quotation Marks (Always in American English):**
- ✅ *She said, "The experiment was a success."*
- ✅ *"The experiment was a success," she said.*
- ❌ *She said, "The experiment was a success".* (Period outside — wrong!)

**Rule 2 — Colons and Semicolons Go OUTSIDE Quotation Marks:**
- ✅ *He described the project as "groundbreaking"; others disagreed.*
- ✅ *She listed her "essentials": water, sunscreen, and a hat.*

**Rule 3 — Question Marks and Exclamation Points — It Depends:**
- If the **quote itself** is a question: *She asked, "Where is the library?"*
- If the **whole sentence** is a question: *Did she really say "I quit"?*
- If **both** are questions, use one question mark inside: *Did she ask, "Where is the library?"*

**Rule 4 — Titles of Short Works:**
Quotation marks enclose titles of short works (articles, poems, short stories, chapters):
- ✅ *She read "The Raven" by Edgar Allan Poe.*
- Longer works (books, films, newspapers) use italics, not quotes.

**ACT Tip:** On the ACT, periods and commas **always** go inside quotation marks. This is a hard rule — no exceptions in American English.
      `
    },
    {
      id: 'act-pn5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quotation Marks — Spot the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence places the period correctly? (A) She called the plan "ambitious." (B) She called the plan "ambitious". (C) She called the plan \"ambitious\". ',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'In American English, periods always go inside quotation marks. Sentence A is correct.'
          },
          {
            question: '"Did the teacher really say \"There will be no homework\"?" Where should the question mark go?',
            options: ['Inside the quotation marks', 'Outside the quotation marks (as shown)', 'Both inside and outside', 'No question mark is needed'],
            correctAnswer: 1,
            explanation: 'The overall sentence is asking a question, but the quote itself is a statement. The question mark goes outside the quotation marks because it belongs to the larger sentence, not the quote.'
          }
        ]
      }
    },
    {
      id: 'act-pn5-endpunct',
      type: 'text' as const,
      content: `
## End Punctuation — Periods, Question Marks & Exclamation Points

**Periods — The Default:**
Most ACT passages use declarative sentences, so the period is the most common end mark. The ACT tests whether you can avoid creating:
- **Run-on sentences** (two sentences jammed together with no punctuation)
- **Sentence fragments** (ending a dependent clause with a period)

**Run-on:** ❌ *The experiment succeeded the team celebrated.*
**Fragment:** ❌ *Although the experiment succeeded.*
**Correct:** ✅ *The experiment succeeded. The team celebrated.*

**Question Marks:**
- Use for **direct** questions: *What were the results?*
- Do NOT use for **indirect** questions: ✅ *She asked what the results were.* (Period, not a question mark!)

**Exclamation Points:**
- Almost never correct on the ACT. Academic prose maintains a neutral tone.
- If you see an exclamation point in an answer choice, it's almost certainly wrong.

**ACT Tip:** When you see a period underlined, the ACT is testing whether a period is the right choice. Check: Is it a run-on? A fragment? Or a properly punctuated sentence?
      `
    },
    {
      id: 'act-pn5-input1',
      type: 'input-boxes' as const,
      content: `
**End Punctuation Practice** ✏️

What end punctuation mark should close each sentence? Type "period," "question mark," or "exclamation point."

1) "She wondered whether the results would be significant ___" — What goes in the blank?
2) "What factors contributed to the colony\'s decline ___" — What goes in the blank?
3) "The researchers published their findings in a peer-reviewed journal ___" — What goes in the blank?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['period', 'question mark', 'period'],
        hint1: 'This is an indirect question ("She wondered whether…") — not a direct question.',
        hint2: 'This is a direct question — it begins with "What."',
        hint3: 'This is a standard declarative sentence.',
        explanation: '1) Indirect questions end with a period. 2) Direct questions end with a question mark. 3) Declarative sentences end with a period.'
      }
    },
    {
      id: 'act-pn5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: End Punctuation & Quotes** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In American English, periods and commas go ___ quotation marks.',
            options: ['inside', 'outside', 'either inside or outside', 'before']
          },
          {
            label: 'Indirect questions end with a …',
            options: ['question mark', 'period', 'semicolon', 'comma']
          },
          {
            label: 'On the ACT, exclamation points are …',
            options: ['frequently correct', 'almost never correct', 'used for emphasis', 'required after interjections']
          }
        ],
        correctAnswers: ['inside', 'period', 'almost never correct'],
        hint1: 'American English always places periods and commas inside the closing quotation mark.',
        hint2: 'Think about it: "She asked whether…" — is that a direct question?',
        hint3: 'The ACT prefers an academic, neutral tone.',
        explanation: 'Periods and commas go inside quotes in American English. Indirect questions end with periods. Exclamation points are almost never correct on the ACT.'
      }
    },
    {
      id: 'act-pn5-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The journalist asked whether the governor planned to seek re-election?" What change, if any, is needed?',
            options: ['No change', 'Replace the question mark with a period', 'Add quotation marks around the question', 'Replace "whether" with "if" and keep the question mark'],
            correctAnswer: 1,
            explanation: 'This is an indirect question (reported speech using "whether"). Indirect questions end with a period, not a question mark.'
          },
          {
            question: '"The reviewer described the film as \"a masterpiece\"; however, audiences were divided." Is the semicolon placed correctly?',
            options: ['Yes — semicolons go outside quotation marks', 'No — it should be inside the quotation marks', 'No — it should be a comma', 'No — it should be a colon'],
            correctAnswer: 0,
            explanation: 'Semicolons always go outside quotation marks in American English. The semicolon is correctly placed after the closing quotation mark.'
          }
        ]
      }
    }
  ]
};
