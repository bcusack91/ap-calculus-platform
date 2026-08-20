export const lessonData = {
  topicSlug: 'sat-punctuation-advanced',
  sections: [
    {
      id: 'punc-adv-p1-intro',
      type: 'text' as const,
      content: `# Punctuation: The 700-800 Patterns

**Part 1 of 3 — What the Hardest Items Actually Test**

At the 700-800 level, punctuation questions never test a rule in isolation. They bury a familiar rule under 30-40 words of academic prose so that the sentence's skeleton is hard to see. Every hard item reduces to one question: **what is on each side of the blank — a full clause, or a fragment?**

### Archetype 1: The Disguised Dependent Opener
A sentence opens with *Because...*, *Although...*, or a stacked pair of subordinate clauses, then stretches on with participial phrases (*driving them to..., leaving whole passages...*). By the time you reach the blank, the opener FEELS like a complete sentence — but it is still dependent. A dependent opener takes a **comma** before the main clause. Semicolons, colons, and periods all fail because each requires a complete clause on the left.

### Archetype 2: The Colon Before a Complex List
A complete clause announces a set (*"...came down to three problems"*), and a list of noun phrases follows — often with the list items separated by **semicolons** because the items contain internal commas. The introducing mark must be a **colon**. The semicolon and period fail on the right side (a list is not a clause); the comma cannot introduce a list after a complete clause.

### Archetype 3: The Matched-Pair Supplement
An interrupting element must open and close with the **same** mark: comma...comma, dash...dash, or parentheses. Hard items open the supplement for you (or close it for you) and make you supply the matching half. A dash paired with a comma is always wrong. If the supplement itself contains commas (a three-item list), use **dashes** so the boundaries stay visible.

### Archetype 4: Essential vs. Supplementary — Decided by the *Previous* Sentence
*"Torres has four sisters. She credits her sister Mireille..."* — the name is **essential** (which sister?), so no commas. *"Kaneko has only one sibling. ...her brother, a marine geologist,..."* — the description is **supplementary**, so a matched pair of commas. The hard tier makes the earlier sentence, not the tested sentence, carry the deciding fact.`
    },
    {
      id: 'punc-adv-p1-q1',
      type: 'quiz' as const,
      question: `Although the mural's pigments had faded unevenly, leaving whole passages of the sky nearly indistinguishable from the plaster beneath ______ were able to recover the original palette from flecks of paint trapped under the frame.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `. Conservators`,
        `; conservators`,
        `: conservators`,
        `, conservators`
      ],
      correctAnswer: 3,
      explanation: `Everything before the blank is a subordinate clause introduced by 'Although,' stretched by the participial phrase 'leaving whole passages...' — length does not make it independent. An introductory dependent element is joined to the main clause with a comma. The period strands the 'Although' clause as a fragment; the semicolon and colon both require a complete clause on the left, and a subordinate clause is not one.`
    },
    {
      id: 'punc-adv-p1-q2',
      type: 'quiz' as const,
      question: `The audit traced the shortfall to three sources ______ fees, which had been waived for early registrants; unbilled equipment rentals; and a transcription error in the June ledger.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `: late`,
        `; late`,
        `, late`,
        `. Late`
      ],
      correctAnswer: 0,
      explanation: `The clause before the blank is complete and promises a set of three sources, and what follows is a list of noun phrases — the exact job of a colon. The list items are already separated by semicolons because the first item carries an internal comma, so the semicolon option would be indistinguishable from the item dividers, and it also requires a full clause on the right. The period leaves a verbless fragment, and a comma cannot introduce a formal list after a complete clause.`
    },
    {
      id: 'punc-adv-p1-q3',
      type: 'quiz' as const,
      question: `Okafor has published three novels. Reviewers agree that ______ is the most formally daring of the three.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `her novel, Windward Station,`,
        `her novel: Windward Station`,
        `her novel Windward Station`,
        `her novel; Windward Station`
      ],
      correctAnswer: 2,
      explanation: `The first sentence establishes that Okafor has three novels, so the title is essential — it tells the reader which novel is meant — and essential elements take no punctuation. Enclosing the title in commas marks it as supplementary, falsely implying Okafor wrote exactly one novel, which contradicts the previous sentence. The colon and semicolon both require a complete clause before them, and 'Reviewers agree that her novel' is not one; each would also sever the subject of the embedded clause from its verb 'is.'`
    }
  ]
}
