export const satPunctuationCommasPart3Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc3-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 3 of 7 — Semicolons**

Semicolons are tested less frequently than commas on the SAT, but when they appear, students who know the rules have a major advantage.

### The Core Rule

A **semicolon (;)** joins two **independent clauses** that are closely related in meaning — **without** a coordinating conjunction.

> *The experiment succeeded; the results confirmed the hypothesis.*

Both sides of the semicolon must be able to stand alone as complete sentences.
      `
    },
    {
      id: 'sat-pc3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses a semicolon correctly?',
            options: [
              'She loves reading; and writing poetry.',
              'She loves reading; writing is also a passion.',
              'She loves; reading and writing poetry.',
              'She loves reading and; writing poetry.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Both "She loves reading" and "writing is also a passion" are independent clauses. A semicolon correctly joins them without a conjunction.'
          },
          {
            question: 'Why is this semicolon INCORRECT? "The dog barked; loudly at the stranger."',
            options: [
              'You cannot use semicolons with animals.',
              '"Loudly at the stranger" is not an independent clause.',
              'A comma should always replace a semicolon.',
              'There should be a conjunction after the semicolon.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Loudly at the stranger" cannot stand alone as a complete sentence. Both sides of a semicolon must be independent clauses.'
          }
        ]
      }
    },
    {
      id: 'sat-pc3-detail1',
      type: 'text' as const,
      content: `
### Semicolons with Conjunctive Adverbs

When you use a **conjunctive adverb** (however, therefore, moreover, furthermore, nevertheless, consequently, meanwhile) to connect two independent clauses, use a **semicolon before** and a **comma after** the conjunctive adverb.

> *The data was inconclusive; however, the team continued the experiment.*

> *She studied for weeks; therefore, she felt confident on test day.*

**Common Conjunctive Adverbs on the SAT:**
- however, therefore, moreover, furthermore
- nevertheless, consequently, meanwhile, instead
- in addition, for example, in fact, as a result

### SAT Trap: Comma Splice

A **comma splice** is one of the most common errors tested on the SAT. It occurs when two independent clauses are joined by only a comma (no conjunction).

❌ *The rain stopped, the sun came out.* (COMMA SPLICE)

**Three ways to fix a comma splice:**
1. **Semicolon:** *The rain stopped; the sun came out.*
2. **Comma + FANBOYS:** *The rain stopped, and the sun came out.*
3. **Period:** *The rain stopped. The sun came out.*
      `
    },
    {
      id: 'sat-pc3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which option correctly fixes this comma splice? "The students were tired, they kept studying."',
            options: [
              'The students were tired; they kept studying.',
              'The students were tired, however they kept studying.',
              'The students were tired; and, they kept studying.',
              'The students; were tired, they kept studying.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — A semicolon between two independent clauses fixes the comma splice. Option B is also a comma splice (missing semicolon before "however"). Option C incorrectly combines a semicolon with "and."'
          },
          {
            question: 'Which sentence correctly uses a semicolon with a conjunctive adverb?',
            options: [
              'She was exhausted, nevertheless; she finished the race.',
              'She was exhausted; nevertheless, she finished the race.',
              'She was exhausted nevertheless; she finished the race.',
              'She was exhausted; nevertheless she finished, the race.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The pattern is: Independent clause + semicolon + conjunctive adverb + comma + independent clause.'
          }
        ]
      }
    },
    {
      id: 'sat-pc3-detail2',
      type: 'text' as const,
      content: `
### Semicolons in a Complex Series

Semicolons can also separate items in a list when the items themselves contain commas:

> *The conference attendees came from Austin, Texas; Portland, Oregon; and Miami, Florida.*

Without semicolons, this list would be confusing:
> *The conference attendees came from Austin, Texas, Portland, Oregon, and Miami, Florida.* ❌

**SAT Tip:** This usage is rare on the SAT but can appear in harder questions.
      `
    },
    {
      id: 'sat-pc3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Punctuation Fix** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She ran fast, she won the race."',
            options: ['Comma splice — needs semicolon or conjunction', 'Correct as written', 'Needs a colon', 'Needs a dash']
          },
          {
            label: '"He practiced daily; his skills improved."',
            options: ['Comma splice — needs semicolon or conjunction', 'Correct as written', 'Needs a colon', 'Needs a dash']
          },
          {
            label: '"The cities included Paris, France; London, England; and Rome, Italy."',
            options: ['Semicolons separate items with internal commas', 'Comma splice — needs fixing', 'Incorrect use of semicolons', 'Needs a colon before the list']
          }
        ],
        correctAnswers: [
          'Comma splice — needs semicolon or conjunction',
          'Correct as written',
          'Semicolons separate items with internal commas'
        ],
        hint1: 'Check if both sides of the comma or semicolon are independent clauses.',
        hint2: 'A semicolon between two independent clauses (without a conjunction) is correct.',
        hint3: 'When list items contain commas, semicolons prevent confusion.',
        explanation: 'The first sentence is a comma splice (two independent clauses joined by only a comma). The second correctly uses a semicolon between two independent clauses. The third correctly uses semicolons to separate list items that contain internal commas.'
      }
    }
  ]
}
