export const satRWStrategyPart1Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw1-intro',
      type: 'text' as const,
      content: `# R&W Module Strategy: Sentence Structure & Boundaries

**Part 1 of 7 — Run-ons, Fragments, and Sentence Combining**

The SAT Writing section tests your ability to identify and fix sentence structure errors. These appear in nearly every test.

### Run-on Sentences (Comma Splices)

A **run-on** joins two independent clauses incorrectly.

❌ "The experiment failed, the researchers tried again."

**Four ways to fix a run-on:**

| Fix | Example |
|---|---|
| Period | "The experiment failed. The researchers tried again." |
| Semicolon | "The experiment failed; the researchers tried again." |
| Comma + conjunction | "The experiment failed, so the researchers tried again." |
| Subordinate clause | "Because the experiment failed, the researchers tried again." |

### Fragments

A **fragment** lacks a subject, verb, or complete thought.

❌ "Running through the park on a sunny afternoon."  
✅ "She was running through the park on a sunny afternoon."

❌ "Which caused significant delays in the project."  
✅ "The supply shortage caused significant delays in the project."

### SAT Trap ⚠️

Long sentences aren't automatically run-ons. A sentence can be 40+ words and still be grammatically correct if properly structured. Similarly, short "sentences" can be fragments.`
    },
    {
      id: 'rw1-quiz',
      type: 'multiple-choice' as const,
      content: '**Sentence Structure Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which correctly fixes this run-on? "The museum opened in 1923, it quickly became a cultural landmark."',
            options: ['The museum opened in 1923; it quickly became a cultural landmark.', 'The museum opened in 1923 it quickly became a cultural landmark.', 'The museum opened in 1923, quickly it became a cultural landmark.', 'The museum, opened in 1923, it quickly became a cultural landmark.'],
            correctAnswer: 0,
            explanation: 'A semicolon correctly joins two related independent clauses. The original is a comma splice (two independent clauses joined by just a comma). The "quickly it became" version is still a comma splice (moving the adverb does not change the clause), the version with no punctuation is a fused sentence, and "The museum, opened in 1923, it" gives the sentence two subjects for one verb.'
          },
          {
            question: 'Which of these is a sentence fragment?',
            options: ['Although she studied for weeks.', 'She studied for weeks.', 'She studied for weeks and passed the exam.', 'After weeks of study, she passed.'],
            correctAnswer: 0,
            explanation: '"Although she studied for weeks" is a dependent clause: it has a subject and verb, but the subordinating conjunction "although" makes it incomplete. It needs an independent clause to finish the thought. "She studied for weeks" is short but complete, the compound sentence is complete, and "After weeks of study, she passed" has a full independent clause after the introductory phrase.'
          }
        ]
      }    },
    {
      id: 'rw1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Sentence Boundary Mastery

### Worked Example 1: Identifying & Fixing Run-ons

| Original (Run-on) | Fix Method | Corrected |
|---|---|---|
| "The lake froze early, ice fishing began in November." | Semicolon | "The lake froze early; ice fishing began in November." |
| "She earned her degree she started her own company." | Period | "She earned her degree. She started her own company." |
| "The data was clear, the results showed improvement." | Comma + conj. | "The data was clear, and the results showed improvement." |
| "Prices rose dramatically, consumers cut spending." | Subordination | "Because prices rose dramatically, consumers cut spending." |

### Worked Example 2: Fragment vs. Complete Sentence

| Sentence | Fragment or Complete? | Why |
|---|---|---|
| "Running faster than anyone expected." | ❌ Fragment | No subject, no main verb (running is a participle) |
| "Which was completed ahead of schedule." | ❌ Fragment | Starts with "which" — dependent clause |
| "The team, having trained for months, competed." | ✅ Complete | Subject (team) + main verb (competed) |
| "After the storm passed through the valley." | ❌ Fragment | "After" makes it dependent |
| "Stop." | ✅ Complete | Implied subject (you) + verb (stop) |

### The Independent Clause Test

Ask two questions:
1. **Does it have a subject and verb?** If no → fragment
2. **Can it stand alone as a complete thought?** If no → fragment (likely starts with a subordinating word)

### Subordinating Words That Create Fragments

| These words make a clause DEPENDENT |
|---|
| although, because, since, while, when, if, after, before, until, unless, whereas, even though, as long as, so that, in order that, provided that |`
    },
    {
      id: 'rw1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Sentence Structure Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: '"The professor published her findings, _____ her colleagues praised her methodology." Which creates a grammatically correct sentence?',
            options: ['and', 'then', 'thus', 'also'],
            correctAnswer: 0,
            explanation: 'Two independent clauses joined by a comma need a coordinating conjunction (for, and, nor, but, or, yet, so). "And" is one. "Then," "thus," and "also" are adverbs, not conjunctions, so a comma followed by any of them still leaves a comma splice.'
          },
          {
            question: 'Which of the following is a complete sentence?',
            options: ['The researchers, having analyzed data from three continents, published results.', 'Although the researchers analyzed data from three continents and published results.', 'Having analyzed data from three continents, the results of which were surprising.', 'Researchers who, despite setbacks, had analyzed data from three continents.'],
            correctAnswer: 0,
            explanation: 'The complete sentence has a subject ("researchers") and a main verb ("published"), with the participial phrase set off by commas. The "Although" version is one long dependent clause. The "Having analyzed" version never gets a main verb ("the results of which were surprising" is a relative clause). In the "Researchers who" version, "who" starts a relative clause, so "Researchers" never gets a verb of its own.'
          },
          {
            question: 'How can you tell the difference between a long correct sentence and a run-on?',
            options: ['Check whether each pair of independent clauses is properly joined', 'Count the commas, since more than two usually signals a run-on', 'Read it aloud, since needing a breath signals a run-on', 'Assume any sentence over thirty words is probably a run-on'],
            correctAnswer: 0,
            explanation: 'Length doesn\'t determine correctness. A run-on happens when independent clauses are joined improperly (usually a comma splice). Properly connected clauses can form long, correct sentences.'
          }
        ]
      }
    },
    {
      id: 'rw1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sentence Structure Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"She ran to the store, she bought milk." is a [comma splice|fragment|correct sentence|complex sentence]',
          '"Although she studied all night." is a [fragment|run-on|complete sentence|comma splice]',
          'Two independent clauses can be joined by [semicolon or comma + conjunction|comma alone|no punctuation at all|comma + "however"]',
          'A fragment is missing a [subject, verb, or complete thought|comma before the verb|transition word|closing punctuation mark]'
        ],
        correctAnswers: ['comma splice', 'fragment', 'semicolon or comma + conjunction', 'subject, verb, or complete thought'],
        hint1: 'Two independent clauses joined by only a comma = comma splice.',
        hint2: '"Although" makes the clause dependent — it can\'t stand alone.',
        hint3: 'Comma + conjunction OR semicolon = proper joining methods.',
        explanation: 'Comma + two independent clauses = comma splice. "Although" creates a dependent clause (fragment). Use semicolon or comma + conjunction to join clauses. Fragments lack a subject, verb, or complete thought.'
      }
    },
    {
      id: 'rw1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Error | Definition | Fix |
|---|---|---|
| Run-on / comma splice | Two independent clauses joined improperly | Period, semicolon, or comma + conjunction |
| Fragment | Missing subject, verb, or complete thought | Add the missing element |
| Key test | Can it stand alone as a complete sentence? | If no → fragment |
| SAT trap | Long ≠ run-on; short ≠ fragment | Check structure, not length |

*Next: Subject-Verb Agreement →*`    }
  ]
};