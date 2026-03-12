export const satPunctuationPart6Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p6-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 6 of 7 — Problem-Solving Workshop**

Time to apply everything you've learned to SAT-style questions. These passages and questions mirror what you'll see on test day.

### The SAT Punctuation Decision Tree

When you encounter a punctuation question, run through this checklist:

1. **Identify the sentence parts** — Where are the independent clauses, dependent clauses, and phrases?
2. **Check for nonessential elements** — Can any phrase be removed without changing the core meaning?
3. **Look at what's being joined** — Are two independent clauses connected? If so, how?
4. **Verify matching marks** — Do paired commas or dashes have both an opener and a closer?
5. **Eliminate unnecessary punctuation** — Is any comma separating things that shouldn't be separated?
      `
    },
    {
      id: 'sat-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Passage Practice** 🎯

*Read the passage and answer the questions.*

The International Space Station __(1)__ a collaboration among five space agencies __(2)__ orbits Earth approximately every 90 minutes. Astronauts living aboard the station __(3)__ conduct experiments in biology, physics, and astronomy __(4)__ their research has contributed to advances in medicine, materials science, and climate monitoring. Since its launch in 1998 __(5)__ the station has hosted more than 250 visitors from 20 countries.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the best punctuation for blanks (1) and (2)?',
            options: [
              '(1) no punctuation ... (2) no punctuation',
              '(1) , ... (2) ,',
              '(1) ; ... (2) ,',
              '(1) , ... (2) no punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "a collaboration among five space agencies" is a nonrestrictive appositive renaming "The International Space Station." It needs commas on both sides.'
          },
          {
            question: 'What is the best punctuation for blanks (3) and (4)?',
            options: [
              '(3) no punctuation ... (4) , (comma)',
              '(3) , ... (4) ,',
              '(3) no punctuation ... (4) ; (semicolon)',
              '(3) no punctuation ... (4) . (period)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Astronauts living aboard the station" is the subject (no comma before verb "conduct"). After "astronomy," two independent clauses need a semicolon (or period) — a comma would create a comma splice.'
          },
          {
            question: 'What is the best punctuation for blank (5)?',
            options: [
              'No punctuation',
              ', (comma)',
              '; (semicolon)',
              ': (colon)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Since its launch in 1998" is an introductory prepositional phrase. It needs a comma before the main clause begins.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-detail1',
      type: 'text' as const,
      content: `
### Passage Analysis

Here is the corrected passage:

> *The International Space Station, a collaboration among five space agencies, orbits Earth approximately every 90 minutes. Astronauts living aboard the station conduct experiments in biology, physics, and astronomy; their research has contributed to advances in medicine, materials science, and climate monitoring. Since its launch in 1998, the station has hosted more than 250 visitors from 20 countries.*

**Decisions made:**
- "a collaboration among five space agencies" → nonrestrictive appositive → paired commas
- No comma between "station" (subject) and "conduct" (verb) — **never separate subject from verb**
- Semicolon after "astronomy" joins two independent clauses
- "Since its launch in 1998" → introductory phrase → comma after it
      `
    },
    {
      id: 'sat-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**More SAT-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The novelist __(6)__ whose latest book was a bestseller __(7)__ spoke at the university. The event __(8)__ which was free and open to the public __(9)__ drew a crowd of over 500 people. What is the correct punctuation for all four blanks?',
            options: [
              '(6) , (7) , (8) , (9) ,',
              '(6) no punctuation (7) no punctuation (8) , (9) ,',
              '(6) , (7) , (8) no punctuation (9) no punctuation',
              '(6) , (7) no punctuation (8) , (9) ,'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Both "whose latest book was a bestseller" and "which was free and open to the public" are nonrestrictive clauses adding extra information. Each needs commas on both sides.'
          },
          {
            question: 'Which sentence is free of all punctuation errors?',
            options: [
              'The committee voted to approve the budget, and the new park, however, they rejected the parking garage proposal.',
              'The committee voted to approve the budget and new park; however, they rejected the parking garage proposal.',
              'The committee voted to approve the budget and new park, however, they rejected the parking garage proposal.',
              'The committee voted, to approve the budget and new park; however they rejected the parking garage proposal.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The committee voted to approve the budget and new park" is one independent clause. A semicolon precedes "however" (conjunctive adverb), which is followed by a comma. Option C is a comma splice.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rapid-Fire Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nonessential phrase in the middle of a sentence',
            options: ['Commas on both sides (or dashes on both sides)', 'Semicolon before', 'Colon before', 'No punctuation']
          },
          {
            label: 'Complete sentence introducing a list',
            options: ['Colon after the sentence', 'Semicolon after the sentence', 'Comma after the sentence', 'Dash after the sentence']
          },
          {
            label: 'Introductory dependent clause',
            options: ['Comma after the clause', 'Semicolon after the clause', 'Colon after the clause', 'No punctuation']
          },
          {
            label: 'Two independent clauses with "nevertheless" between them',
            options: ['Semicolon + nevertheless + comma', 'Comma + nevertheless + comma', 'Period + Nevertheless + no comma', 'Colon + nevertheless + comma']
          }
        ],
        correctAnswers: [
          'Commas on both sides (or dashes on both sides)',
          'Colon after the sentence',
          'Comma after the clause',
          'Semicolon + nevertheless + comma'
        ],
        hint1: 'Nonessential elements need matching marks — commas or dashes — on both sides.',
        hint2: 'Colons follow a complete sentence and introduce what\'s next.',
        hint3: 'Introductory elements are followed by a comma, not a semicolon.',
        explanation: 'Nonessential = paired commas/dashes. Lists after a complete sentence = colon. Introductory clause = comma. Conjunctive adverb = semicolon before + comma after.'
      }
    }
  ]
}
