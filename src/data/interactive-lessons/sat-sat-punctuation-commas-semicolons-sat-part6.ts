export const satPunctuationCommasPart6Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc6-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 6 of 7 — Problem-Solving Workshop**

Now let's work through SAT-style passages and questions. These mirror the format you'll see on test day.

### Strategy Recap

Before we dive in, remember the decision tree:

1. **Is there a list of 3+ items?** → Commas between items
2. **Is there an introductory element?** → Comma after it
3. **Are two independent clauses being joined?**
   - With FANBOYS → comma before the conjunction
   - Without a conjunction → semicolon
   - With a conjunctive adverb → semicolon + adverb + comma
4. **Is there a nonessential phrase?** → Commas on both sides
5. **Does a complete sentence introduce a list or explanation?** → Colon
6. **Is someone trying to put a comma where it doesn't belong?** → Remove it!
      `
    },
    {
      id: 'sat-pc6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Practice** 🎯

*Read the passage below and answer the questions.*

The Great Barrier Reef __(1)__ the world's largest coral reef system __(2)__ is home to thousands of species. Scientists have warned that rising ocean temperatures __(3)__ which contribute to coral bleaching __(4)__ could devastate the reef within decades. Many conservation groups are working to protect the reef __(5)__ however __(6)__ funding remains limited.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the best punctuation for blanks (1) and (2)?',
            options: [
              '(1) no punctuation ... (2) no punctuation',
              '(1) , ... (2) ,',
              '(1) : ... (2) ,',
              '(1) , ... (2) no punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "the world\'s largest coral reef system" is a nonessential appositive renaming "The Great Barrier Reef." It needs commas on BOTH sides.'
          },
          {
            question: 'What is the best punctuation for blanks (3) and (4)?',
            options: [
              '(3) no punctuation ... (4) no punctuation',
              '(3) , ... (4) ,',
              '(3) , ... (4) no punctuation',
              '(3) : ... (4) ,'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "which contribute to coral bleaching" is a nonessential clause (it adds information but isn\'t required to identify which temperatures). Nonessential clauses with "which" need commas on both sides.'
          },
          {
            question: 'What is the best punctuation for blanks (5) and (6)?',
            options: [
              '(5) , ... (6) ,',
              '(5) ; ... (6) ,',
              '(5) : ... (6) ,',
              '(5) . ... (6) no punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "however" is a conjunctive adverb joining two independent clauses. The pattern is: clause + semicolon + however + comma + clause.'
          }
        ]
      }
    },
    {
      id: 'sat-pc6-detail1',
      type: 'text' as const,
      content: `
### Passage Analysis

Let's look at the corrected passage:

> *The Great Barrier Reef, the world's largest coral reef system, is home to thousands of species. Scientists have warned that rising ocean temperatures, which contribute to coral bleaching, could devastate the reef within decades. Many conservation groups are working to protect the reef; however, funding remains limited.*

**Key decisions:**
- "the world's largest coral reef system" → nonessential appositive → commas on both sides
- "which contribute to coral bleaching" → nonessential "which" clause → commas on both sides
- "however" → conjunctive adverb between two independent clauses → semicolon before, comma after
      `
    },
    {
      id: 'sat-pc6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**More SAT-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The city council approved the new park, the playground equipment, and the walking trails. However funding for the parking lot __(7)__ which was the most expensive item __(8)__ was delayed. The mayor explained the situation: the budget had been allocated to emergency road repairs. Which correctly fills blanks (7) and (8)?',
            options: [
              '(7) no punctuation ... (8) no punctuation',
              '(7) , ... (8) ,',
              '(7) , ... (8) no punctuation',
              '(7) ; ... (8) ,'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "which was the most expensive item" is a nonessential clause providing extra information about the parking lot. It needs commas on both sides.'
          },
          {
            question: 'Which sentence is correctly punctuated?',
            options: [
              'The team played well and they won the championship, the crowd cheered.',
              'The team played well, and they won the championship; the crowd cheered.',
              'The team played well and, they won the championship, the crowd cheered.',
              'The team played well; and they won the championship: the crowd cheered.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The team played well" + comma + "and" + "they won the championship" = two independent clauses joined by FANBOYS. Then a semicolon correctly joins the third independent clause.'
          }
        ]
      }
    },
    {
      id: 'sat-pc6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Decision Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Join two independent clauses without a conjunction',
            options: ['Use a semicolon', 'Use a comma', 'Use a colon', 'Use no punctuation']
          },
          {
            label: 'Introduce a list after a complete sentence',
            options: ['Use a semicolon', 'Use a comma', 'Use a colon', 'Use no punctuation']
          },
          {
            label: 'Separate a nonessential phrase',
            options: ['Use commas on both sides', 'Use a semicolon before it', 'Use a colon before it', 'Use no punctuation']
          },
          {
            label: 'Join two independent clauses with "but"',
            options: ['Comma before "but"', 'Semicolon before "but"', 'Colon before "but"', 'No punctuation before "but"']
          }
        ],
        correctAnswers: [
          'Use a semicolon',
          'Use a colon',
          'Use commas on both sides',
          'Comma before "but"'
        ],
        hint1: 'Semicolons and periods can both separate independent clauses.',
        hint2: 'Colons follow a complete sentence to introduce what\'s next.',
        hint3: 'Nonessential elements are like parenthetical asides — set them off on both sides.',
        explanation: 'Two independent clauses without a conjunction = semicolon. A list after a complete sentence = colon. Nonessential phrases = paired commas. "But" is a FANBOYS conjunction = comma before it when joining independent clauses.'
      }
    }
  ]
}
