export const englangStyleWritingPart7Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs7-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 7 of 7 — Review: A Revision Toolkit for Your Own Prose**

---

| Section |
|---------|
| The Unit in One Table |
| The Revision Chooser |
| Key Vocabulary |
| A Timed-Writing Checklist |

> 🔑 **Key Concept:** Style in writing is a set of decisions you make on purpose (skills 8.A, 8.B, and 8.C). On the exam those decisions show up twice: in Section I, where you choose the best revision of someone else's draft, and in the essays, where your own sentences either carry your reasoning or get in its way.

## The Unit in One Table

| Part | Focus | The idea to keep |
|---|---|---|
| 1 | What AP style means | Clarity, precision, control, consistency |
| 2 | Diction | The right word, not the almost right word: specific nouns, precise verbs, controlled register and connotation |
| 3 | Combining sentences | Coordination gives equal weight; subordination names the relationship, and the main clause wins |
| 4 | Concision, emphasis, variety | Make every word tell; put the key idea at the end; vary shape to follow the logic |
| 5 | Conventions | Each mark signals a relationship; rules can be broken only for a visible gain |
| 6 | Exam practice | Answer the stated goal; style earns Row C only when it is consistent and serves the argument |
`
    },
    {
      id: 'englangs7-chooser',
      type: 'text' as const,
      content: `
## The Revision Chooser

| If you want to... | Use this move | Example |
|---|---|---|
| Make a claim precise | Climb the specificity ladder; choose a verb that carries the claim | "night-shift aides, line cooks, and janitors" for "people" |
| Set and hold a tone | Choose connotation and register on purpose; keep both steady | "streamline" (favorable) vs. "gut" (hostile) |
| State instead of evade | Positive form; *not* only for denial or antithesis | "ignored" for "did not pay any attention to" |
| Show how ideas relate | A subordinating conjunction or precise connector | "Although the program is expensive, it pays for itself within four years." |
| Stress one idea | Put it in the main clause and near the end; follow long sentences with a short one | "The struggle returned a mechanic." |
| Cut padding | Delete stock phrases; prefer the active voice | "Because" for "Due to the fact that" |
| Present equal items | Parallel structure | "cost more, delay construction, and anger residents" |
| Reveal or punch | A colon after a complete clause; a dash, sparingly | "The plan had one flaw: it ignored night riders." |
| Press two statements together | A semicolon between independent clauses | "Naming a library after a donor seems harmless; the building still lends the same books." |

### Two Old Voices Worth Remembering

> "...the difference between the almost right word and the right word is really a large matter—'tis the difference between the lightning-bug and the lightning."
>
> — Mark Twain, letter to George Bainton (1888), printed in *The Art of Authorship* (1890)

> "This requires not that the writer make all his sentences short, or that he avoid all detail and treat his subjects only in outline, but that every word tell."
>
> — William Strunk Jr., *The Elements of Style* (1918)
`
    },
    {
      id: 'englangs7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Part A** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A draft reads, "The plan was not very successful." Which revision best applies both positive form and specific diction?',
            options: [
              'The plan was not as successful as many had hoped.',
              'The plan was quite unsuccessful in a number of ways.',
              'The plan failed to shorten wait times at a single clinic.',
              'The plan had a less than successful outcome overall.'
            ],
            correctAnswer: 2,
            explanation: 'A positive verb states what happened, and the wait times and clinics make the failure concrete. The other revisions keep the vague idea of "success," either hedged with "not as" or padded with "a number of ways" and "less than."'
          },
          {
            question: 'Which sentence places the writer\'s concession in a subordinate clause and the writer\'s claim in the main clause?',
            options: [
              'Although the stadium will bring jobs, it will raise rents for the families nearby.',
              'The stadium will bring jobs, and it will raise rents for the families nearby.',
              'The stadium will raise rents for nearby families, yet it will bring some jobs.',
              'Because the stadium will bring jobs, it will also raise rents for the families nearby.'
            ],
            correctAnswer: 0,
            explanation: 'The "although" clause grants the benefit and the main clause asserts the cost, which is the claim. The "and" and "yet" versions coordinate two independent clauses, and the "because" version invents a causal link between jobs and rents.'
          },
          {
            question: 'Which revision corrects the comma splice in "The study was small, its findings were consistent"?',
            options: [
              'The study was small; its findings were consistent.',
              'The study was small, its findings, however, were consistent.',
              'The study was small, however its findings were consistent.',
              'The study, was small, but its findings were consistent.'
            ],
            correctAnswer: 0,
            explanation: 'A semicolon correctly joins two independent clauses. Adding "however" with commas does not repair the splice, since "however" is an adverb rather than a conjunction, and the comma after "study" splits the subject from its verb.'
          }
        ]
      }
    },
    {
      id: 'englangs7-vocab',
      type: 'text' as const,
      content: `
## Key Vocabulary

| Term | Meaning | In your writing |
|---|---|---|
| **Diction** | Word choice | Specific nouns and precise verbs |
| **Connotation** | Associations a word carries beyond its definition | "thrifty" vs. "stingy" |
| **Register** | Level of formality | Formal but plain |
| **Coordination** | Joining ideas of equal weight | ", and" / ", but" / semicolon |
| **Subordination** | Making one clause depend on another | "although," "because," "if," "when" |
| **Comma splice** | Two independent clauses joined by a comma alone | Fix with a period, a semicolon, or a conjunction |
| **Dangling modifier** | An opening phrase that attaches to the wrong subject | Make the actor the subject |
| **Active / passive voice** | Subject acts / subject receives the action | Active by default; passive to keep the topic as subject |
| **Parallelism** | Matching form for matching ideas | Items in a series share grammatical shape |
| **Periodic / loose sentence** | Main clause delayed to the end / main clause first | Periodic for suspense; loose for easy evidence |
| **Antithesis** | Contrasting ideas set in balanced form | "a commute but not a map" |
| **Thesaurus style** | Words chosen for size rather than fit | Replace with the precise plain word |
| **Over-ornament** | Devices piled up until they compete | Keep the one that serves the claim |
`
    },
    {
      id: 'englangs7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A semicolon without a conjunction joins two _______ clauses.

2) Words chosen for their size rather than their fit produce what this unit calls _______ style.

3) In "Although the plan is costly, it works," the "although" clause is a _______ clause.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['independent', 'thesaurus', 'subordinate'],
        hint1: 'Each clause could stand alone as a sentence.',
        hint2: 'Named for the reference book students reach for.',
        hint3: 'It cannot stand alone; it depends on the main clause.',
        explanation: 'Semicolons join independent clauses, thesaurus style trades precision for size, and an "although" clause is subordinate to the main clause it introduces.'
      }
    },
    {
      id: 'englangs7-checklist',
      type: 'text' as const,
      content: `
## A Timed-Writing Checklist

You will not have time to revise a whole essay on exam day. In the last few minutes, run these checks on your strongest body paragraph and your thesis.

1. **Nouns:** replace one vague noun ("people," "things," "society") with the specific group or instance.
2. **Verbs:** replace one "is," "shows," or "there is" with a verb that carries the claim.
3. **Padding:** delete "it is important to note that," "in today's society," and "this quote shows that."
4. **Relationships:** find one "and" between clauses and ask whether *because*, *although*, or *whereas* is what you meant.
5. **Endings:** make sure the paragraph ends on commentary, not on a summary.
6. **Splices:** check any comma that sits between two complete statements.

### Section I Quick Checks

- Read the goal in the stem twice; answer **that** goal.
- Rule out grammar and punctuation errors first.
- For combining questions, decide which idea should be in the main clause.
- For add or delete questions, settle yes or no on relevance, then check that the reason is true.
- Do not pick the longest or fanciest choice by default; pick the one that fits the draft's tone and purpose.
`
    },
    {
      id: 'englangs7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Part B** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to Strunk, concision requires that a writer',
            options: [
              'make every word do work, whatever the sentence length',
              'keep every sentence shorter than about twenty words',
              'leave out detail and treat subjects only in outline',
              'replace long words with shorter words wherever possible'
            ],
            correctAnswer: 0,
            explanation: 'Strunk says concision "requires not that the writer make all his sentences short, or that he avoid all detail... but that every word tell." He names short sentences and outline treatment as what concision does not require, and he sets no word limit.'
          },
          {
            question: 'The writer of a letter to a skeptical school board wants to describe opponents of a proposal respectfully. Which choice best accomplishes this goal?',
            options: [
              'board members who just don\'t get what is at stake here',
              'board members stubbornly clinging to the past',
              'board members who have raised concerns about cost',
              'board members whose objections are baseless'
            ],
            correctAnswer: 2,
            explanation: 'Describing the opponents by the concern they raised is accurate and neutral, which keeps a skeptical audience listening. The other phrases dismiss, mock, or insult the very readers the letter needs to persuade.'
          },
          {
            question: 'Which approach best describes how an essay can earn the Row C point through style?',
            options: [
              'Sustain precise, purposeful prose across the entire essay.',
              'Insert one elaborate sentence into the concluding paragraph.',
              'Use several advanced vocabulary words in each paragraph.',
              'Open the essay with a quotation from a famous writer.'
            ],
            correctAnswer: 0,
            explanation: 'The style route requires prose that is consistently vivid and persuasive, so the quality must hold throughout and serve the argument. A single flourish, scattered vocabulary, or an opening quotation does not meet that standard.'
          }
        ]
      }
    }
  ]
};
