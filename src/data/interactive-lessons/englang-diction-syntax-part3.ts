export const englangDictionSyntaxPart3Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'englangd3-intro',
      type: 'text' as const,
      content: `
# 🧩 Diction and Syntax

**Part 3 of 7 — Syntax in Depth: Clauses, Balance, and Johnson's Letter to Lord Chesterfield, 1755**

---

| Section |
|---------|
| Clauses Show Relationships |
| Where the Main Clause Goes |
| Patterns of Balance |
| 📖 Close Reading: Johnson to Chesterfield |

> 🔑 **Key Concept:** Skill 7.B asks you to explain how writers **create, combine, and place independent and dependent clauses** to show relationships between ideas. Syntax is not only rhythm. Which idea gets the main clause, which is subordinated, and which comes last tell the reader what matters most.
`
    },
    {
      id: 'englangd3-clauses',
      type: 'text' as const,
      content: `
## Clauses Show Relationships

An **independent clause** can stand alone as a sentence. A **dependent (subordinate) clause** cannot; it begins with a word such as *because, although, when, if, unless, since,* or a relative pronoun such as *which* or *who*.

### Coordination and Subordination

| Method | Signals | Relationship shown | Example |
|---|---|---|---|
| **Coordination** | and, but, or, nor, for, so, yet; a semicolon | The ideas are of **equal** weight | "The council debated for hours, but it reached no decision." |
| **Subordination** | because, although, if, when, which | One idea is **main**, the other **supporting** | "Although the council debated for hours, it reached no decision." |

The same two facts can say different things depending on which one gets the main clause.

| Sentence | What it emphasizes |
|---|---|
| "Although the bridge is old, it is safe." | Safety: the age is conceded |
| "Although the bridge is safe, it is old." | Age: the safety is conceded |

A concession placed in a dependent clause is granted and then set aside. That is why "although" clauses are a writer's favorite tool for qualifying a claim without weakening it.

## Where the Main Clause Goes

| Sentence type | Structure | Effect | Example |
|---|---|---|---|
| **Loose (cumulative)** | Main clause first, details added after | Natural, conversational; adds detail as it goes | "She left the hall, pausing at the door, looking back once at the crowd." |
| **Periodic** | Main clause held to the end | Suspense; the final words get the emphasis | "Pausing at the door, looking back once at the crowd, she left the hall." |

The end of a sentence is its position of greatest emphasis. Writers often place the idea they most want remembered there.
`
    },
    {
      id: 'englangd3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence places the most emphasis on the cost of the new stadium?',
            options: [
              'The new stadium will attract visitors, but it will cost \\$400 million.',
              'Although it will cost \\$400 million, the new stadium will attract visitors.',
              'The new stadium will cost \\$400 million and will attract many visitors.',
              'Costing \\$400 million, the new stadium will attract many new visitors.'
            ],
            correctAnswer: 0,
            explanation: 'The cost is in its own independent clause after "but," and it falls at the end of the sentence, the position of greatest emphasis. The other versions subordinate the cost, coordinate it equally with the visitors, or tuck it into an opening phrase.'
          },
          {
            question: 'In the sentence "Although the evidence is incomplete, the committee should act now," the dependent clause functions to',
            options: [
              'state the writer\'s main claim about the evidence',
              'concede a limitation before asserting the claim',
              'give a reason why the committee should wait longer',
              'introduce a second claim equal in weight to the first'
            ],
            correctAnswer: 1,
            explanation: 'The "although" clause grants that the evidence is incomplete and then yields to the main clause, which holds the claim. Subordination makes the concession secondary rather than equal, and the sentence argues against waiting.'
          }
        ]
      }
    },
    {
      id: 'englangd3-balance',
      type: 'text' as const,
      content: `
## Patterns of Balance

| Pattern | Definition | Example |
|---|---|---|
| **Parallelism** | Matching grammatical forms for matching ideas | "to work, to save, and to give" |
| **Tricolon** | A series of three parallel elements, often building | "one act of assistance, one word of encouragement, or one smile of favour" |
| **Antithesis** | Contrasting ideas in parallel form | "had it been early, had been kind; but it has been delayed" |
| **Balanced sentence** | Two halves of similar length and structure | "Such treatment I did not expect, for I never had a Patron before." |
| **Inversion** | Normal word order reversed | "Such treatment I did not expect" (object before subject) |

Balance suggests control and judgment. A writer who weighs one clause against another sounds as if he has weighed the ideas themselves. That impression of control is part of the writer's ethos.

> 💡 The names in these tables are shorthand. The AP exam will not ask you to supply them; it asks what a sentence's structure does for the writer's purpose.
`
    },
    {
      id: 'englangd3-situation',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Johnson to Chesterfield

### The Situation

| Component | Details |
|---|---|
| **Writer** | Samuel Johnson, who spent most of a decade compiling *A Dictionary of the English Language* (published April 1755) |
| **Audience** | Philip Stanhope, Earl of Chesterfield, a powerful nobleman whom Johnson had approached as a possible patron years earlier, with little result |
| **Exigence** | Shortly before the Dictionary appeared, Chesterfield published two essays in the periodical *The World* praising it, as if he had been its supporter all along |
| **Purpose** | To refuse, with perfect courtesy, the credit Chesterfield was claiming |

The text follows James Boswell's *Life of Samuel Johnson* (1791), including Boswell's spellings ("past," "favour").

> Seven years, my Lord, have now past, since I waited in your outward rooms, or was repulsed from your door; during which time I have been pushing on my work through difficulties, of which it is useless to complain, and have brought it, at last, to the verge of publication, without one act of assistance, one word of encouragement, or one smile of favour. Such treatment I did not expect, for I never had a Patron before.
>
> The shepherd in Virgil grew at last acquainted with Love, and found him a native of the rocks.
>
> Is not a Patron, my Lord, one who looks with unconcern on a man struggling for life in the water, and, when he has reached ground, encumbers him with help? The notice which you have been pleased to take of my labours, had it been early, had been kind; but it has been delayed till I am indifferent, and cannot enjoy it; till I am solitary, and cannot impart it; till I am known, and do not want it.
>
> — Samuel Johnson, letter to the Earl of Chesterfield, February 7, 1755
`
    },
    {
      id: 'englangd3-reading',
      type: 'text' as const,
      content: `
### Sentence 1: The Long Wait, Then the Tricolon

The first sentence is long and loaded with subordinate material ("since I waited...," "during which time...," "of which it is useless to complain"). Its length imitates the seven years of labor it describes. Then it ends on a tricolon of absence: "without one act of assistance, one word of encouragement, or one smile of favour." The repeated "one" shrinks the request to almost nothing. Johnson did not need much, and he received none of it.

### Sentence 2: Inversion and Irony

"Such treatment I did not expect, for I never had a Patron before." Normal order would be "I did not expect such treatment." Moving "Such treatment" to the front puts the insult first. The coordinating "for" then supplies a reason that is really an accusation: Johnson did not know patrons behaved this way because Chesterfield is the only patron he has had.

### Sentence 3: The Question That Saves Its Sting for the End

The question builds a picture of a drowning man and then delivers its point in the last three words: "encumbers him with help." "Help" should be welcome; "encumbers" makes it a burden. Because the sentence is periodic in effect, holding its main point to the end, the irony lands last and hardest.

### Sentence 4: Antithesis and a Climactic Tricolon

| Clause | Structure | Meaning |
|---|---|---|
| "had it been early, had been kind" | Conditional (subordinate) clause | Help would once have been welcome |
| "but it has been delayed" | Coordinate clause after "but" | The turn |
| "till I am indifferent, and cannot enjoy it" | "till" clause + consequence | Too late for pleasure |
| "till I am solitary, and cannot impart it" | Same structure | Too late to share (Johnson's wife had died in 1752) |
| "till I am known, and do not want it" | Same structure, shortest | Too late to be needed |

Each "till" clause is built the same way, so the reader hears the pattern and waits for its last step. The adjectives shrink as they go, from "indifferent" to "solitary" to the one-syllable "known." The final one is the most damaging: Johnson is now famous and "do[es] not want" (does not need) Chesterfield at all. Placing that clause last makes independence, not grievance, the letter's final word on patronage.

> 🔑 **AP Connection:** When a Section I question asks about "the series of clauses beginning with 'till,'" do not stop at "parallelism." Explain what the **order** does: each clause names a later and larger loss, ending with the one that hurts Chesterfield most.
`
    },
    {
      id: 'englangd3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A clause that cannot stand alone as a sentence is a _______ clause.

2) In "one act of assistance, one word of encouragement, or one smile of favour," the repeated "one" and each smaller item shrink Johnson's request to almost _______.

3) A sentence that holds its main clause until the end places its greatest _______ on the final words.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dependent', 'nothing', 'emphasis'],
        hint1: 'Also called subordinate.',
        hint2: 'An act, then a word, then only a smile: the request keeps shrinking.',
        hint3: 'The end of a sentence is its position of greatest ___.',
        explanation: 'A dependent clause cannot stand alone; Johnson\'s shrinking three-part series reduces the kindness he asked for to almost nothing, which sharpens the charge against Chesterfield; and a sentence that saves its main clause for the end puts its emphasis on the final words.'
      }
    },
    {
      id: 'englangd3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The phrase "encumbers him with help" at the end of Johnson\'s question about the drowning man is effective chiefly because',
            options: [
              'it describes the rescue in plain, everyday language',
              'its placement at the very end delivers an ironic reversal',
              'it repeats the opening words of the question exactly',
              'it introduces a literary allusion to Virgil\'s poetry'
            ],
            correctAnswer: 1,
            explanation: 'The sentence saves the paradox of burdensome "help" for its final position, so the irony lands with full force. The phrase is not plain description, does not repeat the opening, and the Virgil allusion appears in a separate sentence.'
          },
          {
            question: 'The inversion in "Such treatment I did not expect" primarily serves to',
            options: [
              'make the sentence sound more like ordinary speech',
              'place the insult Johnson received in a position of emphasis',
              'conceal the fact that Chesterfield is the one being criticized',
              'indicate that Johnson is uncertain about what happened to him'
            ],
            correctAnswer: 1,
            explanation: 'Fronting "Such treatment" puts Chesterfield\'s neglect first, where it cannot be missed. Inversion makes a sentence less like ordinary speech, does not hide the target, and the clipped sentence shows certainty rather than doubt.'
          },
          {
            question: 'The three "till" clauses in the final sentence are arranged so that',
            options: [
              'each repeats the same loss in more elaborate language',
              'the last presents Johnson as a man who no longer needs any patron',
              'the first shows Johnson\'s anger and the others forgive it',
              'they move backward in time toward their first meeting'
            ],
            correctAnswer: 1,
            explanation: 'The series ends with "till I am known, and do not want it," which shifts from what Johnson has lost to his independence. The clauses name different losses, grow plainer rather than more elaborate, show no forgiveness, and move forward rather than backward in time.'
          }
        ]
      }
    }
  ]
};
