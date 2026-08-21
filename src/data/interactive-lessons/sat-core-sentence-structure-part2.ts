export const lessonData = {
  topicSlug: 'sat-sentence-structure-core-skills',
  sections: [
    {
      id: 'ss-core-p2-recap',
      type: 'text' as const,
      content: `# Sentence Structure: Practice

**Part 2 of 2 — Fixing Run-Ons**

Part 1 was about sentences with too little: fragments. This part is about sentences with too much: **run-ons**.

### What a run-on is

A **run-on** happens when two complete sentences are pushed together without the right punctuation.

> The power went out we lit candles.

"The power went out" is complete. "We lit candles" is complete. Nothing separates them, so the reader has no place to stop.

If a comma is doing the job all by itself, that version has a special name — a **comma splice** — and it is just as wrong:

> The power went out, we lit candles.

### Three fixes — all correct

1. **Period.** The power went out. We lit candles.
2. **Semicolon.** The power went out; we lit candles.
3. **Comma + a joining word.** The power went out, so we lit candles.

The joining words for fix 3 are **for, and, nor, but, or, yet, so** — remembered as **FANBOYS**.

### The names for sentence types

- **Simple** = one independent clause. *We lit candles.*
- **Compound** = two independent clauses joined by a semicolon, or by a comma + FANBOYS. *The power went out, so we lit candles.*
- **Complex** = one independent clause plus at least one dependent clause. *When the power went out, we lit candles.*

### Your checklist

1. Find the subject and verb in each half.
2. Can each half stand alone? If yes, they are two complete sentences.
3. Two complete sentences need a period, a semicolon, or a comma + FANBOYS.
4. A comma alone between two complete sentences is always wrong.
5. A dependent clause at the front (because, although, when, if, since) takes a comma after it.`
    },
    {
      id: 'ss-core-p2-q1',
      type: 'quiz' as const,
      question: 'Which choice correctly fixes this run-on?\n\n"The power went out we lit candles."',
      options: [
        'The power went out; we lit candles.',
        'The power went out, we lit candles.',
        'The power went out we, lit candles.',
        'The power went out and, we lit candles.'
      ],
      correctAnswer: 0,
      explanation: 'The semicolon is the fix. "The power went out" is a complete sentence and "we lit candles" is a complete sentence, and a semicolon is strong enough to separate two complete sentences. A comma by itself creates a comma splice, and moving a comma to the middle of either half does not address the missing break between the sentences.'
    },
    {
      id: 'ss-core-p2-q2',
      type: 'quiz' as const,
      question: 'What defines a compound sentence?',
      options: [
        'One independent clause by itself.',
        'One dependent clause by itself.',
        'Two independent clauses joined by a semicolon, or by a comma plus a FANBOYS word.',
        'Two dependent clauses with no main sentence.'
      ],
      correctAnswer: 2,
      explanation: 'A compound sentence has two independent clauses joined by a semicolon or by a comma plus a FANBOYS word. Each half could stand alone as its own sentence, and the joining mark puts them together as equals: "The trail was steep, but the hikers kept going." One clause on its own is a simple sentence, and dependent clauses with no main sentence are fragments.'
    },
    {
      id: 'ss-core-p2-q3',
      type: 'quiz' as const,
      question: 'Which list gives the FANBOYS words?',
      options: [
        'because, although, since, when',
        'for, and, nor, but, or, yet, so',
        'however, therefore, moreover',
        'who, which, that'
      ],
      correctAnswer: 1,
      explanation: 'FANBOYS stands for **for, and, nor, but, or, yet, so**. Each letter of the word is the first letter of one of them. These are the words that can join two complete sentences when a comma comes before them. The other lists are real words with real jobs, but they are not the FANBOYS set — "because" and "although" start dependent clauses instead.'
    },
    {
      id: 'ss-core-p2-q4',
      type: 'quiz' as const,
      question: 'Which of these is a complete sentence?',
      options: [
        'Running down the street on a cold morning.',
        'While the team practiced for the big game.',
        'Since the library opened at noon.',
        'The team practiced for two hours.'
      ],
      correctAnswer: 3,
      explanation: '"The team practiced for two hours" is complete. It has a subject (*the team*), a verb (*practiced*), and it finishes its thought with nothing left hanging. The other three are fragments: one has no subject doing the action, and the other two begin with "While" and "Since," which leave the reader waiting for a main sentence.'
    }
  ]
}
