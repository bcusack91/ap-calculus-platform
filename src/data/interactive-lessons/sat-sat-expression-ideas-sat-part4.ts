export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei4-intro',
      type: 'text' as const,
      content: `# Synthesis & Integrating Information

**Part 4 of 7 — Combining Ideas Effectively**

Synthesis questions ask you to combine information from multiple sources or multiple parts of a passage into a single, coherent statement.

### Combining with Relative Clauses

Two choppy sentences:
- "Marie Curie discovered radium in 1898."
- "She was the first woman to win a Nobel Prize."

Combined: "Marie Curie, **who was the first woman to win a Nobel Prize**, discovered radium in 1898."

### Combining with Appositives

An appositive renames or describes a noun:
- "Dr. Marcus Thompson, **a leading cardiologist at Johns Hopkins**, published the study."

### Combining with Participial Phrases

- "The hurricane destroyed 500 homes." + "It caused \\$2 billion in damage."
- → "**Destroying 500 homes**, the hurricane caused \\$2 billion in damage."

### Which Information to Keep?

When combining, ask: **What is the most important information for the passage's purpose?**

If the passage is about scientific achievement:
✅ Keep: discovery, impact, significance
❌ Cut: biographical trivia, exact dates (unless relevant)

### SAT Trap ⚠️

Trap answers combine the information correctly but **change the emphasis** or **relationship** between ideas. Always check that the relative importance of each idea is preserved.`
    },
    {
      id: 'ei4-quiz',
      type: 'multiple-choice' as const,
      content: '**Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which best combines these sentences? "The Great Barrier Reef spans 2,300 kilometers. It is the world\'s largest coral reef system. It is visible from space."',
            options: ['At 2,300 kilometers, the Great Barrier Reef is the world\'s largest coral reef system and is visible from space.', 'Spanning 2,300 kilometers, the Great Barrier Reef is large and visible from space, being the world\'s largest coral reef system.', 'The world\'s largest coral reef system is the Great Barrier Reef, which spans 2,300 kilometers, and it is visible from space.', 'The Great Barrier Reef spans 2,300 kilometers; it is the world\'s largest coral reef system; it is visible from space.'],
            correctAnswer: 0,
            explanation: 'The best version folds the length into a short introductory phrase and joins the other two facts with "and," so it flows well and keeps all three pieces of information. The "Spanning" version is wordy and repeats itself ("is large… being the world\'s largest"), the "which spans…, and it is" version is structurally awkward, and the semicolon version just strings the three sentences together without combining them.'
          },
          {
            question: 'When combining sentences on the SAT, the most important factor is:',
            options: ['Keeping the original meaning and emphasis of each idea', 'Making the combined sentence as short as possible', 'Using the most sophisticated grammatical structure', 'Keeping every word from both of the original sentences'],
            correctAnswer: 0,
            explanation: 'The SAT values clarity and flow. You can cut words, but you must not change the meaning or shift which idea is emphasized. Brevity and complexity are secondary, and keeping every original word usually defeats the point of combining.'
          }
        ]
      }    },
    {
      id: 'ei4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Advanced Sentence Combining

### Worked Example 1: Choosing the Best Combination Method

| Original Sentences | Method | Combined |
|---|---|---|
| "Ada Lovelace wrote the first algorithm." + "She is considered the first computer programmer." | Appositive | "Ada Lovelace, **the first computer programmer**, wrote the first algorithm." |
| "The volcano erupted in 79 AD." + "It buried the city of Pompeii." | Participial | "**Erupting in 79 AD**, the volcano buried the city of Pompeii." |
| "The dolphin uses echolocation." + "Echolocation allows it to navigate murky waters." | Relative clause | "The dolphin uses echolocation, **which allows it to navigate murky waters**." |

### Worked Example 2: Spotting the Emphasis Trap

**Original:** "The vaccine was developed in record time. It underwent rigorous safety testing."

| Combined Version | Emphasis | Correct? |
|---|---|---|
| "Although developed in record time, the vaccine underwent rigorous safety testing." | Safety testing is the main point | ✅ if passage emphasizes safety |
| "The vaccine was developed in record time, though it underwent safety testing." | Speed is the main point; safety is downplayed | ✅ if passage emphasizes speed |
| "The vaccine, which underwent safety testing, was developed in record time." | Speed is main; safety is parenthetical | ❌ if passage equally values both |

**Key:** The SAT answer must preserve the passage's intended emphasis.

### Combining Method Quick Reference

| Method | Structure | Best For |
|---|---|---|
| Appositive | Noun, **description**, verb… | Identifying a person/thing |
| Relative clause | …noun **who/which/that** verb… | Adding essential/non-essential info |
| Participial phrase | **Verb-ing/verb-ed**, subject verb… | Showing simultaneous or causal actions |
| Conjunction | Sentence **and/but/so** sentence | Equal-weight ideas |
| Semicolon | Sentence**;** related sentence | Closely related independent clauses |`
    },
    {
      id: 'ei4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Synthesis Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Combine: "Dr. Patel leads the neuroscience lab." + "She has published over 200 papers." The writer wants to emphasize Dr. Patel\'s publication record.',
            options: ['Dr. Patel, who leads the neuroscience lab, has published over 200 papers.', 'Dr. Patel, who has published over 200 papers, leads the neuroscience lab.', 'Having published over 200 papers, Dr. Patel leads the neuroscience lab.', 'Dr. Patel leads the neuroscience lab, although she has published over 200 papers.'],
            correctAnswer: 0,
            explanation: 'The main clause carries the emphasis. To emphasize her publications, "has published over 200 papers" must be the main clause, with her lab role tucked into the relative clause. The second and third versions put the lab role in the main clause, and "although" sets up a contrast that makes no sense.'
          },
          {
            question: 'Which combining method inserts a noun phrase that renames the subject, set off by commas?',
            options: ['Appositive', 'Conjunction', 'Participial phrase', 'Semicolon'],
            correctAnswer: 0,
            explanation: 'An appositive is a noun phrase set off by commas that renames or describes the subject: "Marie Curie, **a Polish physicist**, discovered radium."'
          },
          {
            question: '"Although the cost was high, the results justified the investment." This structure emphasizes:',
            options: ['the cost of the investment', 'the results of the investment', 'the cost and results equally', 'neither cost nor results'],
            correctAnswer: 1,
            explanation: 'The "although" clause is subordinate (background). The main clause — "the results justified the investment" — carries the emphasis. "Although" downgrades the cost concern.'
          }
        ]
      }
    },
    {
      id: 'ei4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sentence Combining Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Einstein, a theoretical physicist, developed relativity." uses an [appositive|relative clause|participial phrase|conjunction]',
          'Combining must preserve the [original meaning and emphasis|exact original words|original sentence count|original word order]',
          '"Discovering penicillin, Fleming changed medicine." uses a [participial phrase|appositive|semicolon|conjunction]',
          'Two closely related independent clauses can be joined by a [semicolon|comma alone|comma + "however"|colon + "and"]'
        ],
        correctAnswers: ['appositive', 'original meaning and emphasis', 'participial phrase', 'semicolon'],
        hint1: '"A theoretical physicist" renames Einstein — that\'s an appositive.',
        hint2: 'The SAT penalizes answers that shift emphasis.',
        hint3: '"Discovering" is a present participle starting a modifying phrase.',
        explanation: 'Appositives rename nouns. Combining must keep meaning + emphasis. "Discovering…" is a participial phrase. Semicolons join related independent clauses.'
      }
    },
    {
      id: 'ei4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Method | Example Pattern | Best For |
|---|---|---|
| Appositive | Noun, *description*, verb | Identifying people/things |
| Relative clause | …who/which + verb | Adding info about a noun |
| Participial phrase | *Verb-ing*, subject verb | Simultaneous/causal actions |
| Conjunction | Sentence + and/but/so | Equal-weight ideas |
| Key rule | Preserve meaning AND emphasis | Always check |

*Next: Style, Tone, and Audience →*`    }
  ]
};