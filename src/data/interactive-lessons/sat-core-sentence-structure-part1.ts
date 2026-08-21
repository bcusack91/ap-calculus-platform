export const lessonData = {
  topicSlug: 'sat-sentence-structure-core-skills',
  sections: [
    {
      id: 'ss-core-p1-intro',
      type: 'text' as const,
      content: `# Sentence Structure: The Basics

**Part 1 of 2 — Complete or Not Complete?**

Every sentence-structure question comes down to one check: **is this a complete sentence?**

### The building block: a clause

A **clause** is a group of words that has a subject and a verb.

- **Subject** = who or what the words are about.
- **Verb** = what the subject does or is.

"The students packed up" is a clause. The subject is *the students*. The verb is *packed*.

### Two kinds of clauses

An **independent clause** can stand alone as a sentence. "The students packed up." Say it out loud and it feels finished.

A **dependent clause** has a subject and a verb but still cannot stand alone. Something is missing. What makes it dependent is the word it starts with:

**because, although, since, when, while, if, unless, after, before, though**

Add one of those words to the front and the clause stops being able to stand alone:

> When the bell rang.

Subject: *the bell*. Verb: *rang*. But the word "When" leaves you waiting. When the bell rang, **what happened?** The thought is not finished.

### The fragment

A **fragment** is a group of words punctuated like a sentence that is not actually a complete sentence. "When the bell rang." is a fragment. So is "Running down the street." (no subject doing the running).

### The fix

Attach the dependent clause to a complete sentence:

> When the bell rang**, the students packed up.**

Notice the comma. When the dependent clause comes **first**, put a comma after it. When it comes second, you usually do not need one:

> The students packed up **when the bell rang.**

### Your move

Read the words. Find the subject and the verb. Then ask: does this finish a thought, or am I left waiting? If you are left waiting, it is a fragment, and it needs to be joined to a complete sentence.`
    },
    {
      id: 'ss-core-p1-q1',
      type: 'quiz' as const,
      question: '"Because the store closed early."\n\nWhy is this a fragment?',
      options: [
        'It is too short to be a sentence.',
        'It has no verb.',
        'It has no subject.',
        'It starts with "Because," so the thought is not finished — it needs a main sentence.'
      ],
      correctAnswer: 3,
      explanation: 'The word "Because" is what makes this a fragment. The words do have a subject (*the store*) and a verb (*closed*), but "Because" leaves the reader waiting to hear what happened as a result. Adding a complete sentence fixes it: "Because the store closed early, we drove to the next town." Length has nothing to do with it — plenty of two-word sentences are complete.'
    },
    {
      id: 'ss-core-p1-q2',
      type: 'quiz' as const,
      question: 'What does the word "although" do at the start of a clause?',
      options: [
        'It joins two complete sentences as equals.',
        'It starts a dependent clause, which cannot stand alone as a sentence.',
        'It ends a sentence.',
        'It takes the place of a comma.'
      ],
      correctAnswer: 1,
      explanation: '"Although" starts a dependent clause. Words like although, because, since, when, and if turn a group of words into one that leaves the thought unfinished, so it has to attach to a complete sentence. "Although the trail was steep" is not a sentence, but "Although the trail was steep, the hikers kept going" is. Joining two complete sentences as equals is the job of a different set of words, such as "and" and "but."'
    },
    {
      id: 'ss-core-p1-q3',
      type: 'quiz' as const,
      question: 'Which choice fixes this fragment?\n\n"Since the project began."',
      options: [
        'Since the project began!',
        'Since the project began, and',
        'Since the project began, costs have risen.',
        'Since, the project began.'
      ],
      correctAnswer: 2,
      explanation: '"Since the project began, costs have risen" is the fix. The dependent clause now attaches to a complete sentence, "costs have risen," and a comma marks where the dependent clause ends. That finishes the thought the word "Since" started. The other choices change the punctuation but never supply the complete sentence the fragment is missing.'
    },
    {
      id: 'ss-core-p1-q4',
      type: 'quiz' as const,
      question: 'Which choice is punctuated correctly?',
      options: [
        'If it snows, the game will be canceled.',
        'If it snows the game will be canceled.',
        'If, it snows the game will be canceled.',
        'If it snows the game, will be canceled.'
      ],
      correctAnswer: 0,
      explanation: 'A comma after "snows" is correct. The sentence opens with the dependent clause "If it snows," and when a dependent clause comes first, a comma marks where it ends and the main sentence begins. The other choices either leave that comma out or drop it inside the clause, which splits words that belong together.'
    }
  ]
}
