export const lessonData = {
  topicSlug: 'sat-punctuation-advanced',
  sections: [
    {
      id: 'punc-adv-p3-drill-intro',
      type: 'text' as const,
      content: `# Punctuation: Timed Drill

**Part 3 of 3 — Full Difficulty, Test Pace**

Four questions at genuine 700-800 difficulty. Target **45-60 seconds each**.

Run the same three-step check every time:
1. **Left of the blank** — complete clause, or fragment? (Ignore length; hunt for a subject-verb core.)
2. **Right of the blank** — complete clause, list, or subjectless phrase?
3. **Pairs** — did a comma, dash, or parenthesis open earlier that must be closed?

Only after the structure is settled do you think about meaning (colon = specification, semicolon = related or contrasting clause). Start the clock.`
    },
    {
      id: 'punc-adv-p3-q1',
      type: 'quiz' as const,
      question: `After months of dead ends, the genealogist finally identified the letter's author ______ ship's cook who had signed on under his brother's name.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `, a`,
        `; a`,
        `: a`,
        `. A`
      ],
      correctAnswer: 2,
      explanation: `A complete clause precedes the blank and promises an identification; the noun phrase that follows delivers exactly that answer, which is the defining job of a colon. The semicolon and period both demand an independent clause on the right, but 'a ship's cook who had signed on...' has no main verb. The comma is the tempting near-miss, but the word before the blank is 'author' at the end of a clause announcing a reveal — the colon's emphatic specification is the standard construction, and this is the pattern the hard tier rewards.`
    },
    {
      id: 'punc-adv-p3-q2',
      type: 'quiz' as const,
      question: `The prototype passed every stress test in the ______ failed, however, within weeks of deployment in coastal air.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `laboratory, it`,
        `laboratory; it`,
        `laboratory it`,
        `laboratory: it`
      ],
      correctAnswer: 1,
      explanation: `Both sides of the blank are independent clauses, so the semicolon is the only offered mark that can join them. The postponed 'however' sits inside the second clause and has no joining power — that placement is the trap, since many students expect 'however' at a boundary. The comma creates a comma splice, and no punctuation fuses the clauses. The colon fails on meaning: the second clause contradicts the first rather than explaining or specifying it.`
    },
    {
      id: 'punc-adv-p3-q3',
      type: 'quiz' as const,
      question: `Tucked into the ledger's final pages ______ receipt for the passage to Valparaiso and a pressed fern that no botanist has yet identified.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `were: a`,
        `were, a`,
        `were -- a`,
        `were a`
      ],
      correctAnswer: 3,
      explanation: `The sentence is inverted: 'were' is the verb and the two listed objects form its subject, so nothing may come between them. A colon or dash may introduce a list only after a complete clause, and 'Tucked into the ledger's final pages were' stops mid-predicate — it is not complete. The comma cuts the verb off from its own subject, the same violation in a different costume. Inversion is the hard tier's favorite way to hide a subject-verb bond.`
    },
    {
      id: 'punc-adv-p3-q4',
      type: 'quiz' as const,
      question: `The three ingredients the recipe treats as non-negotiable ______ all appear in the earliest surviving version of the dish.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        ` -- saffron, preserved lemon, and smoked paprika --`,
        `, saffron, preserved lemon, and smoked paprika,`,
        `: saffron, preserved lemon, and smoked paprika,`,
        ` (saffron, preserved lemon, and smoked paprika,`
      ],
      correctAnswer: 0,
      explanation: `The supplement is a three-item list with its own internal commas, and the sentence resumes with 'all appear' — so the interruption must be both opened and closed, with marks the internal commas cannot swallow. Matched dashes do exactly that. Commas on both sides would merge with the list's commas, leaving the reader unable to tell where the subject resumes. The colon can open a specification but can never be closed by a comma, and the parenthesis version never closes at all.`
    }
  ]
}
