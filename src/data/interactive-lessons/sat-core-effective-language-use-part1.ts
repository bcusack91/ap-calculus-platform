export const lessonData = {
  topicSlug: 'sat-effective-language-use-core-skills',
  sections: [
    {
      id: 'elu-core-p1-intro',
      type: 'text' as const,
      content: `# Word Choice: The Basics

**Part 1 of 2 — The Precise Word**

Some SAT questions give you a short text with a blank and four words that all mean something close. The question asks:

> Which choice completes the text with the most **logical and precise** word or phrase?

"Close" is not enough. Only one choice has **exactly** the meaning the text needs. The text itself tells you which one.

### Three ways close words differ

**1. Detail.** Many words share a general meaning but add a different detail.
- *said, whispered, shouted, announced* — all are ways of speaking, but only one is quiet.

**2. Strength.** Some words are milder or stronger versions of the same idea.
- *liked* → *adored*
- *limited* → *banned*
- *disagreed* → *refused*

**3. Feeling.** Some words point the same way but carry a positive or a negative feel.
- *careful with money* (positive) vs. *stingy* (negative)
- *confident* (positive) vs. *arrogant* (negative)

### Look at a real example

> The coach did not cancel Monday's practice; she ______ it, moving it to Thursday afternoon.

The clue is "moving it to Thursday afternoon." Practice still happens, just later. **Postponed** fits exactly: it means moved to a later time. *Canceled* is too strong, since the text says practice was not canceled, and *shortened* changes the length of practice, which the text never mentions.

### Your move

1. Read the text and find the **clue** — the part that describes the blank.
2. Say your own word, and decide **how strong** it should be.
3. Cross out choices that are too strong, too weak, or carry the wrong feel.
4. Pick the choice that matches **every** detail of the clue.`
    },
    {
      id: 'elu-core-p1-q1',
      type: 'quiz' as const,
      question: `The librarian ______ a warning to the noisy students, speaking so softly that only the students at the nearest table could hear her.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'shouted',
        'announced',
        'whispered',
        'posted'
      ],
      correctAnswer: 2,
      explanation: '"Whispered" is correct. The clue is "speaking so softly that only the students at the nearest table could hear her," and to whisper means to speak very quietly. "Shouted" is the opposite of soft speech. "Announced" suggests telling a whole room or group, but only one table could hear. "Posted" means putting up a written notice, and the text says she was speaking.'
    },
    {
      id: 'elu-core-p1-q2',
      type: 'quiz' as const,
      question: `The new pool rule did not completely ban phones; it ______ them, allowing phone use only in the shaded seating area.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'banned',
        'limited',
        'ignored',
        'encouraged'
      ],
      correctAnswer: 1,
      explanation: '"Limited" is correct. The text says the rule did not completely ban phones, but it did allow them only in one area. To limit something is to hold it within set bounds without getting rid of it, which matches both parts of the clue. "Banned" is too strong, since the text says the ban was not complete. "Encouraged" goes the wrong direction, and "ignored" would mean the rule had no effect on phones at all.'
    },
    {
      id: 'elu-core-p1-q3',
      type: 'quiz' as const,
      question: `Friends describe Omar as ______ with money. He compares prices before every purchase, but he happily pays for his sister's birthday dinner every year.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'wasteful',
        'stingy',
        'careful',
        'careless'
      ],
      correctAnswer: 2,
      explanation: '"Careful" is correct. Comparing prices shows that Omar pays close attention to how he spends, and happily paying for his sister\'s dinner shows he is not unwilling to spend. "Careful" fits both facts and has a positive feel. "Stingy" means unwilling to spend or share, which the birthday dinner contradicts. "Wasteful" and "careless" go against his habit of comparing prices.'
    },
    {
      id: 'elu-core-p1-q4',
      type: 'quiz' as const,
      question: 'On a question that asks for the "most logical and precise word," two of the choices mean roughly the same thing. How should you decide between them?',
      options: [
        'Pick the one whose strength and detail fit the clue in the text.',
        'Pick the longer, more advanced word, since it sounds more academic.',
        'Pick the more common word, since everyday words are safer choices.',
        'Pick either one, since two words with the same meaning both work.'
      ],
      correctAnswer: 0,
      explanation: 'Words that mean roughly the same thing still differ in strength, detail, or feel, and the clue in the text decides which one fits exactly. A word is not better because it sounds advanced or because it is common. And two close words almost never both work: one of them will be too strong, too weak, or missing a detail the text requires.'
    }
  ]
}
