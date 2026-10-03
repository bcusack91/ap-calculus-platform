export const actPunctuationPart7Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Punctuation Rules Cheat Sheet & Mixed ACT-Style Questions**

You've now covered every major punctuation rule tested on the ACT English section. This final lesson reviews the key rules and challenges you with mixed-format questions that mimic real ACT passages.

**ACT English Punctuation — Master Cheat Sheet:**

| Rule | Key Point |
|------|-----------|
| **Commas in a series** | Use commas between 3+ items, including before the conjunction |
| **Introductory elements** | Comma after introductory words, phrases, or clauses |
| **Nonessential clauses** | Commas on both sides (which → commas; that → no commas) |
| **Coordinate adjectives** | Comma between adjectives if they pass the swap/and test |
| **Semicolons** | Join two independent clauses; precede "however"/"therefore" only when it joins two clauses |
| **"However" as an interrupter** | Mid-clause "however" takes a pair of commas: *The team, however, continued.* |
| **Colons** | Follow a complete sentence; introduce a list or explanation |
| **Apostrophes** | Possessives (dog's) vs. contractions (it's = it is) |
| **Possessive pronouns** | NEVER use apostrophes (its, their, your, whose) |
| **Dashes** | Emphasize asides; pairs must match |
| **Parentheses** | De-emphasize asides; punctuation goes outside |
| **Periods & commas with quotes** | Always inside quotation marks (American English) |
| **Unnecessary commas** | Never between subject-verb or verb-object |
| **Comma splices** | A comma alone can't join two independent clauses |
      `
    },
    {
      id: 'act-pn7-strategy',
      type: 'text' as const,
      content: `
## ACT Punctuation Strategy Guide

**Step 1 — Identify the Question Type:**
When you see punctuation underlined, categorize the question:
- Is it testing **commas** (series, introductory, nonessential)?
- Is it testing **semicolons/colons** (independent clauses)?
- Is it testing **apostrophes** (possession vs. contraction)?
- Is it testing **matching pairs** (dashes, parentheses)?
- Is it asking you to **remove unnecessary punctuation**?

**Step 2 — Apply the Specific Rule:**
Each question type has a clear rule. Don't go by what "sounds right" — apply the rule mechanically.

**Step 3 — Watch for the Trap Answer:**
The ACT often includes one answer that "sounds" correct but violates a rule. Common traps:
- Comma before "and" in a two-item construction
- Semicolon after a dependent clause
- Apostrophe in a possessive pronoun
- A dash opening an aside with a comma closing it

**The "No Change" Reality:**
"No Change" is correct often enough that you should treat it as a real option, not a trap. Don't be afraid to choose it if the original is correct — but always verify by checking every rule that applies.

**Time Management:**
The enhanced ACT English section gives you 35 minutes for 50 questions — about 42 seconds per question, with 4 answer choices each. Punctuation questions are usually the fastest to answer, so aim to finish them in well under that average (identify the rule, apply it, move on) and bank the extra time for rhetorical questions that require rereading the passage.
      `
    },
    {
      id: 'act-pn7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Identify the Rule** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The artist\'s latest exhibition, which features paintings, sculptures, and mixed-media installations, opens next Friday." Is this sentence correctly punctuated?',
            options: ['Yes — commas correctly set off the nonessential clause and items in a series', 'No — the commas around "which…installations" should be dashes', 'No — the semicolons should replace the commas in the series', 'No — the comma after "installations" is unnecessary'],
            correctAnswer: 0,
            explanation: 'The sentence is correct. The nonessential clause "which features paintings, sculptures, and mixed-media installations" is properly set off with commas. The items in the list within the clause are also correctly separated by commas.'
          },
          {
            question: '"Dr. Hernandez — a renowned cardiologist and author, has published over fifty peer-reviewed articles." What correction is needed?',
            options: ['No change', 'Replace the comma after "author" with an em dash', 'Replace the em dash with a comma', 'Remove both the dash and the comma'],
            correctAnswer: 1,
            explanation: 'The aside "a renowned cardiologist and author" opens with an em dash but closes with a comma — mismatched pair. Replace the comma with an em dash: "Dr. Hernandez — a renowned cardiologist and author — has published…"'
          }
        ]
      }
    },
    {
      id: 'act-pn7-passage',
      type: 'text' as const,
      content: `
## Mixed Practice — Mini Passage

Read the following passage and consider the punctuation at each numbered point:

*The Great Barrier Reef [1] which stretches over 1,400 miles along Australia\'s northeastern coast [2] is the world\'s largest coral reef system. Scientists have documented its decline over the past several decades [3] rising ocean temperatures, pollution, and overfishing have all contributed to the damage. Despite these challenges [4] conservation efforts have shown promising results [5] researchers recently reported that coral coverage in some areas has increased for the first time in years.*

**Correct punctuation at each point:**
- **[1]** Comma — opens nonessential clause
- **[2]** Comma — closes nonessential clause
- **[3]** Period or semicolon — two independent clauses (comma here = comma splice)
- **[4]** Comma — after introductory phrase ("Despite these challenges")
- **[5]** Period, semicolon, or colon — two independent clauses (the second explains the first, so a colon also works)

This passage tests five rules in a single paragraph — a realistic representation of how the ACT combines punctuation concepts.
      `
    },
    {
      id: 'act-pn7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — Name the Error** ✏️

Identify the specific punctuation error in each sentence. Type "mismatched dashes," "apostrophe errors," or "unnecessary commas."

1) "The new library — designed by a world-famous architect, will open to the public in September."

2) "Its important to review you\'re notes before the exam begins."

3) "The coach praised the players\' hard work, and encouraged them to keep practicing, and studying film."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mismatched dashes', 'apostrophe errors', 'unnecessary commas'],
        hint1: 'What opened the aside? What closed it? Do they match?',
        hint2: 'Check each apostrophe: should "Its" have one? Should "you\'re" keep its?',
        hint3: 'How many subjects go with "praised" and "encouraged"? How many items are joined by "and studying"?',
        explanation: '1) The dash opens the aside but a comma closes it — mismatched pair (needs a dash before "will"). 2) "Its" should be "It\'s" (contraction: "It is important") and "you\'re" should be "your" (possessive: "your notes"). 3) Two unnecessary commas. The comma before "and encouraged" splits a compound predicate: one subject ("The coach") with two verbs ("praised" and "encouraged"), so no comma goes before "and." The comma before "and studying" splits a pair of only two items ("practicing and studying film"), which is not a series, so it needs no comma either. Correct: "The coach praised the players\' hard work and encouraged them to keep practicing and studying film."'
      }
    },
    {
      id: 'act-pn7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Check: Master Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A comma splice can be fixed by using …',
            options: ['a period, semicolon, or comma + FANBOYS', 'only a period', 'only a semicolon', 'adding another comma']
          },
          {
            label: 'On the ACT, "which" clauses are usually …',
            options: ['essential — no commas', 'nonessential — set off with commas', 'followed by a colon', 'preceded by a semicolon']
          },
          {
            label: 'Possessive pronouns (its, their, your) take …',
            options: ['an apostrophe', 'no apostrophe', 'an apostrophe only for emphasis', 'an apostrophe in formal writing']
          }
        ],
        correctAnswers: ['a period, semicolon, or comma + FANBOYS', 'nonessential — set off with commas', 'no apostrophe'],
        hint1: 'Multiple strategies can fix a comma splice — the key is separating or properly joining the clauses.',
        hint2: '"Which" introduces extra information that is usually nonessential.',
        hint3: 'Possessive pronouns are already possessive — no apostrophe needed.',
        explanation: 'Comma splices can be fixed with a period, semicolon, or comma + FANBOYS. "Which" clauses are typically nonessential and need commas. Possessive pronouns never take apostrophes.'
      }
    },
    {
      id: 'act-pn7-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Mixed Practice — Final Challenge** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The committee — after months of deliberation — released its report, it recommended sweeping changes to the district\'s transportation infrastructure." What is the primary punctuation error?',
            options: ['The dashes should be commas', 'Comma splice after "report"', '"Its" should be "it\'s"', 'The apostrophe in "district\'s" is wrong'],
            correctAnswer: 1,
            explanation: 'The comma after "report" creates a comma splice — two independent clauses joined by only a comma. Fix: "…released its report. It recommended…" or "…released its report; it recommended…" The dashes are correctly paired, "its" is correctly possessive, and "district\'s" correctly shows possession.'
          },
          {
            question: '"Although the researchers hypothesized that the treatment would be effective, the clinical trial\'s results; however, suggested that further testing was needed before the drug could be approved." What change is needed?',
            options: ['No change — the semicolon correctly precedes "however"', 'Replace the comma after "however" with a semicolon', 'Delete the comma after "effective" and keep the semicolon', 'Replace the semicolon after "results" with a comma'],
            correctAnswer: 3,
            explanation: 'Cover "however": what remains is one sentence — "the clinical trial\'s results suggested that further testing was needed." Because "however" interrupts a single independent clause instead of joining two, it is set off with a pair of commas: "…the clinical trial\'s results, however, suggested…" The semicolon is wrong because "Although … the clinical trial\'s results" is not a complete sentence, so leaving it unchanged fails, and swapping the comma after "however" for a semicolon creates the same problem on the other side. The comma after "effective" correctly ends the introductory dependent clause, so deleting it introduces a new error.'
          }
        ]
      }
    }
  ]
};
