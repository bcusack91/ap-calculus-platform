export const lessonData = {
  topicSlug: 'sat-punctuation-core-skills',
  sections: [
    {
      id: 'punc-core-p1-intro',
      type: 'text' as const,
      content: `# Punctuation: The Basics

**Part 1 of 2 — One Question to Ask Every Time**

Punctuation questions on the SAT look like they are about commas and semicolons. They are really about one thing: **where does one sentence stop and the next one start?**

### First, a word we will use: *clause*

A **clause** is a group of words with a subject and a verb.

- The **subject** is who or what the sentence is about.
- The **verb** is what they do or are.

A clause that can stand alone as its own sentence is called **independent**. "The bus was late" is independent. It has a subject (*the bus*), a verb (*was*), and it makes sense by itself.

### The rule

Two independent clauses cannot be glued together with only a comma.

Look at this:

> The bus was late, we missed the movie.

"The bus was late" is a complete sentence. "We missed the movie" is a complete sentence. A comma is too weak to hold two complete sentences together. This mistake has a name: a **comma splice**.

### Three ways to fix it

1. **Period.** The bus was late. We missed the movie.
2. **Semicolon.** The bus was late; we missed the movie.
3. **Comma plus a joining word.** The bus was late, so we missed the movie.

All three are correct. The SAT usually gives you only one of them in the answer choices, so you pick whichever one shows up.

The joining words that work in option 3 are **for, and, nor, but, or, yet, so**. Many students remember them as **FANBOYS**.

### Your move

When you see a punctuation question, cover the answer choices. Read the words on the left of the blank and ask: could that be its own sentence? Then read the words on the right and ask the same thing. If the answer is yes both times, you need a period, a semicolon, or a comma plus a FANBOYS word — never a comma alone.`
    },
    {
      id: 'punc-core-p1-q1',
      type: 'quiz' as const,
      question: 'Which choice joins these two ideas correctly?',
      options: [
        'The bakery closed early, we bought bread somewhere else.',
        'The bakery closed early we bought bread somewhere else.',
        'The bakery closed early; we bought bread somewhere else.',
        'The bakery closed, early we bought bread somewhere else.'
      ],
      correctAnswer: 2,
      explanation: 'The semicolon is correct. "The bakery closed early" is a complete sentence, and "we bought bread somewhere else" is also a complete sentence. A semicolon is one of the marks strong enough to hold two complete sentences together. A comma by itself is not strong enough, and running the two sentences together with no mark at all leaves the reader with no place to stop.'
    },
    {
      id: 'punc-core-p1-q2',
      type: 'quiz' as const,
      question: 'My brother cooks dinner, I wash the dishes.\n\nThis sentence is:',
      options: [
        'a comma splice (incorrect)',
        'correct as written',
        'missing a colon',
        'missing a question mark'
      ],
      correctAnswer: 0,
      explanation: 'This is a comma splice. "My brother cooks dinner" can stand alone as a sentence, and so can "I wash the dishes." When two complete sentences are joined by only a comma, that is a comma splice, and it is always wrong on the SAT. Changing the comma to a semicolon or a period would fix it.'
    },
    {
      id: 'punc-core-p1-q3',
      type: 'quiz' as const,
      question: 'I called the office ______ no one answered.\n\nWhich choice completes the sentence correctly?',
      options: [
        'but',
        '; but',
        ': but',
        ', but'
      ],
      correctAnswer: 3,
      explanation: 'A comma plus "but" is correct. Both halves are complete sentences: "I called the office" and "no one answered." One correct way to join two complete sentences is a comma plus a FANBOYS word, and "but" is on that list. Using "but" with no comma leaves the two sentences without a break, and a semicolon or colon placed before a FANBOYS word doubles up on the joining job.'
    },
    {
      id: 'punc-core-p1-q4',
      type: 'quiz' as const,
      question: 'Two complete sentences sit next to each other with no joining word like "and" or "but" between them. What punctuation do they need?',
      options: [
        'a comma by itself',
        'a period or a semicolon',
        'no punctuation at all',
        'a question mark'
      ],
      correctAnswer: 1,
      explanation: 'A period or a semicolon is correct. Both marks are strong enough to separate two complete sentences, and with no joining word present, one of those two is what the sentence needs. A comma by itself creates a comma splice, and leaving out punctuation entirely runs the two sentences together.'
    }
  ]
}
