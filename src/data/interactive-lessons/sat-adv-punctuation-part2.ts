export const lessonData = {
  topicSlug: 'sat-punctuation-advanced',
  sections: [
    {
      id: 'punc-adv-p2-traps',
      type: 'text' as const,
      content: `# Punctuation: Traps & Speed

**Part 2 of 3 — How the Wrong Answers Are Built**

Each hard-tier archetype has a signature trap. Learn the trap, and elimination becomes mechanical.

### Trap 1: The Long-Modifier Comma
The single most common wrong answer at this level puts a lone comma **between a subject and its verb** — and it feels right because a long modifier ('The claim that the marshes removed more nitrogen than the wetlands immediately downstream') begs for a breath. **No single mark — comma, dash, or colon — may ever separate a subject from its verb.** If the interrupting material opened with a comma, it must close with one (that's a pair, which is legal); if nothing opened, nothing closes. Ask: *did a paired mark open earlier?* If not, the answer is usually **no punctuation at all**.

### Trap 2: The Fake Second Clause
Semicolons and periods are wrong whenever the right-hand side has **no subject of its own**. Two verbs sharing one subject ('catalogued... and later argued') form a compound predicate — no comma before *and*, and certainly no semicolon. The trap counts on you seeing a second verb and assuming a second clause. Check for a second **subject**, not a second verb.

### Trap 3: The Mismatched Pair
When a supplement opens with one mark, every option that closes it with a different mark is dead on arrival: dash-comma, paren-comma, comma-dash. Scan **backward** from the blank for an opening comma, dash, or parenthesis before you evaluate anything else — it's the fastest kill available.

### Trap 4: The Colon That Explains Nothing
A colon promises that what follows will *specify or explain* the preceding clause. Hard items offer a colon where the second clause actually **contrasts** ('costs three times as much, however') or merely gives one example. Both sides may be grammatical clauses — the colon still fails on meaning, and the semicolon wins.`
    },
    {
      id: 'punc-adv-p2-q1',
      type: 'quiz' as const,
      question: `The hypothesis that the reservoir's algal blooms were being seeded by waterfowl arriving from lakes farther ______ within a single field season.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `south, collapsed`,
        `south collapsed`,
        `south -- collapsed`,
        `south: collapsed`
      ],
      correctAnswer: 1,
      explanation: `The subject is 'The hypothesis' and its verb is 'collapsed'; the long 'that...' clause in between changes nothing. No single comma, dash, or colon may separate a subject from its verb, so the correct choice is no punctuation. The comma is the classic long-modifier trap — the sentence feels like it needs a breath, but no paired mark ever opened. The colon additionally fails because a subject plus its modifier is not a complete clause.`
    },
    {
      id: 'punc-adv-p2-q2',
      type: 'quiz' as const,
      question: `The surveyor photographed each boundary marker at dawn ______ returned in the afternoon to log its coordinates under better light.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `and`,
        `, and`,
        `; and`,
        `: and`
      ],
      correctAnswer: 0,
      explanation: `'Photographed' and 'returned' share the single subject 'The surveyor,' so this is a compound predicate, not two independent clauses — and no comma belongs before the conjunction. The comma option applies the two-independent-clauses rule, but 'returned in the afternoon...' has no subject of its own. The semicolon and colon both require an independent clause on the right, and a subjectless verb phrase is not one. Spot the trap by hunting for a second subject, not a second verb.`
    },
    {
      id: 'punc-adv-p2-q3',
      type: 'quiz' as const,
      question: `The festival's oldest competition ______ dating to the 1920s and open only to amateur ensembles, will be retired next year.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        ` -- a category`,
        `: a category`,
        `, a category`,
        `; a category`
      ],
      correctAnswer: 2,
      explanation: `Scan forward from the blank: the supplement closes with a comma after 'ensembles,' so it must open with a comma — interruptions require a matched pair. The dash creates a mismatched dash-comma pair. The colon fails twice: it cannot follow the bare noun phrase 'The festival's oldest competition,' and it cannot be closed by a comma. The semicolon requires an independent clause on each side, and neither side of it here would be one.`
    }
  ]
}
