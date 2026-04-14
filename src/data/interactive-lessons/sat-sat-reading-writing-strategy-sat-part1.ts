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
            options: ['The museum opened in 1923; it quickly became a cultural landmark.', 'The museum opened in 1923 it quickly became a cultural landmark.', 'The museum opened in 1923, becoming a cultural landmark quickly.', 'The museum, opened in 1923, it quickly became a cultural landmark.'],
            correctAnswer: 0,
            explanation: 'A semicolon correctly joins two related independent clauses. The original is a comma splice (two independent clauses joined by just a comma). Option C changes the meaning, and D creates a new error.'
          },
          {
            question: 'Which is a sentence fragment? (A) "Although she studied for weeks." (B) "She studied for weeks." (C) "She studied for weeks and passed the exam."',
            options: ['A—"Although" makes it a dependent clause that can\'t stand alone', 'B—it\'s too short to be a complete sentence', 'C—compound sentences are fragments', 'None of these are fragments'],
            correctAnswer: 0,
            explanation: '"Although she studied for weeks" is a dependent clause—it has a subject and verb but starts with a subordinating conjunction ("although") that makes it incomplete. It needs an independent clause to finish the thought.'
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
            options: ['and', 'she', 'it', 'they'],
            correctAnswer: 0,
            explanation: 'Two independent clauses need a conjunction after the comma. "And" creates a proper comma + coordinating conjunction. "She," "it," or "they" after a comma creates a comma splice.'
          },
          {
            question: 'Which of the following is a complete sentence?',
            options: ['The researchers, having analyzed data from three continents, published their results.', 'Although the researchers analyzed data from three continents.', 'Having analyzed data from three continents, the results of which were surprising.', 'The researchers who, despite many setbacks in their work.'],
            correctAnswer: 0,
            explanation: 'A has subject (researchers) + main verb (published). B starts with "although" (dependent). C has no main verb. D has no main verb — "who" starts a relative clause that never completes.'
          },
          {
            question: 'How can you tell the difference between a long correct sentence and a run-on?',
            options: ['Check whether independent clauses are properly joined (conjunction, semicolon, or period)', 'Long sentences are always run-ons', 'Count the commas — more than 2 means run-on', 'Read it aloud — if you need to breathe, it\'s a run-on'],
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
          'Two independent clauses can be joined by [semicolon or comma + conjunction|comma alone|nothing|a subordinating word]',
          'A fragment is missing a [subject, verb, or complete thought|comma|transition|paragraph]'
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