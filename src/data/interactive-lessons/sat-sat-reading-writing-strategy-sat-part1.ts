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
      }
    }
  ]
};