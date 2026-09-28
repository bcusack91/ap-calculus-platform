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
**SAT-Style Practice** 🎯

*Each question is a short text with one blank, just as on the digital SAT.*
      `,
      exercise: {
        questions: [
          {
            question: 'The International Space Station, a collaboration among five space _____ Earth approximately every 90 minutes. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              'agencies orbits',
              'agencies, orbits',
              'agencies; orbits',
              'agencies: orbits'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "a collaboration among five space agencies" is a nonrestrictive appositive renaming "The International Space Station." The comma after "Station" opens it, so a comma after "agencies" must close it. A semicolon or colon would cut the subject off from its verb "orbits."'
          },
          {
            question: 'Astronauts living aboard the station conduct experiments in biology, physics, and _____ research has contributed to advances in medicine and climate monitoring. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              'astronomy, their',
              'astronomy their',
              'astronomy; their',
              'astronomy; and, their'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Astronauts… conduct experiments in biology, physics, and astronomy" and "their research has contributed…" are both independent clauses, so a semicolon joins them. A comma alone creates a comma splice, no punctuation fuses the clauses, and a semicolon followed by "and," doubles up the connectors and adds a comma that does not belong.'
          },
          {
            question: 'Since its launch in _____ station has hosted more than 250 visitors from 20 countries. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              '1998 and the',
              '1998, the',
              '1998; the',
              '1998: the'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Since its launch in 1998" is an introductory phrase, so a comma separates it from the main clause. A semicolon or colon needs a complete sentence before it, and "and" would leave the introductory phrase with no main clause to attach to.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-detail1',
      type: 'text' as const,
      content: `
### Passage Analysis

Here is the full text these three questions come from, correctly punctuated:

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
            question: 'The novelist, whose latest book was a _____ at the university. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              'bestseller, spoke',
              'bestseller spoke',
              'bestseller; spoke',
              'bestseller: spoke'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "whose latest book was a bestseller" is a nonrestrictive clause adding extra information about a specific novelist. The comma after "novelist" opens it, so a comma after "bestseller" must close it. A semicolon or colon would cut the subject off from its verb "spoke."'
          },
          {
            question: 'Which sentence is free of all punctuation errors?',
            options: [
              'The committee voted to approve the budget, and the new park, however, it rejected the parking garage proposal.',
              'The committee voted to approve the budget and new park; however, it rejected the parking garage proposal.',
              'The committee voted to approve the budget and new park, however, it rejected the parking garage proposal.',
              'The committee voted, to approve the budget and new park; however it rejected the parking garage proposal.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The committee voted to approve the budget and new park" is one independent clause. A semicolon precedes "however" (conjunctive adverb), which is followed by a comma. The "budget and new park, however," version is a comma splice.'
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
