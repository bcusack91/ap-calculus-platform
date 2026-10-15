export const englangStyleWritingPart5Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs5-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 5 of 7 — Conventions as Rhetoric, and Common Misconceptions**

---

| Section |
|---------|
| 📖 The Marks That Join and Separate Ideas |
| Same Words, Different Marks |
| Myths About "Good Style" |
| Worked Revision: Fixing and Using Punctuation |

> 🔑 **Key Concept:** Skill 8.C asks you to **use established conventions of grammar and mechanics**, and skill 7.C asks how those conventions contribute to the clarity and effectiveness of an argument. Punctuation is not a layer of correctness added at the end. A semicolon, a colon, and a dash each tell the reader something different about how two ideas relate.

The essay rubric has no separate row for grammar. But a reader can credit only the reasoning that reaches the page, and errors that blur which idea depends on which can cost commentary credit in Row B. Section I writing questions also test conventions directly, usually by asking which punctuation of a sentence in a student draft is most effective.
`
    },
    {
      id: 'englangs5-marks',
      type: 'text' as const,
      content: `
## 📖 The Marks That Join and Separate Ideas

### The Semicolon

> "If two or more clauses, grammatically complete and not joined by a conjunction, are to form a single compound sentence, the proper mark of punctuation is a semicolon.
>
> Stevenson's romances are entertaining; they are full of exciting adventures."
>
> — William Strunk Jr., *The Elements of Style* (1918), "Do not join independent clauses by a comma"

A semicolon presses two complete statements together and lets the reader infer the link. Strunk adds that the semicolon is still required when the second clause begins with an adverb such as *therefore*, *then*, or *thus* rather than a conjunction. Joining two independent clauses with a comma alone is a **comma splice**. Strunk allows one exception, when the clauses "are very short, and are alike in form," as in "Man proposes, God disposes."

### The Colon

A colon follows a **complete clause** and announces that what comes next will explain, specify, or list what the clause promised.

| Correct | Incorrect | Why |
|---|---|---|
| The plan had one flaw: it ignored night riders. | The plan's flaw was: it ignored night riders. | The words before a colon must form a complete clause |

Rhetorically, the colon is a reveal. The clause before it raises a question ("one flaw"), and the words after it answer that question with the emphasis of an ending.

### The Dash

A dash interrupts. A single dash can attach an emphatic afterthought; a pair can set off an aside the writer wants noticed. Dashes are louder than commas, so their force depends on scarcity. Three in a paragraph read as breathlessness.

### Paired Commas

Strunk: "Enclose parenthetic expressions between commas." A clause that adds information about a noun already identified takes a pair of commas; a clause that identifies which one is meant takes none.

> The audience, which had at first been indifferent, became more and more interested.
>
> The candidate who best meets these requirements will obtain the place.

In the first sentence, the audience is already known, so the clause is extra. In the second, the clause tells which candidate. Strunk insists the writer "must never omit one comma and leave the other," calling "Marjorie's husband, Colonel Nelson paid us a visit yesterday" "indefensible."

### The Deliberate Fragment

Strunk's rule is "Do not break sentences in two," but he allows an exception:

> "It is permissible to make an emphatic word or expression serve the purpose of a sentence and to punctuate it accordingly:
>
> Again and again he called out. No reply.
>
> The writer must, however, be certain that the emphasis is warranted, and that he will not be suspected of a mere blunder in punctuation."
>
> — Strunk, *The Elements of Style* (1918)

One fragment placed after a long sentence can land a judgment. A fragment that looks like a detached *because* clause looks like an error.
`
    },
    {
      id: 'englangs5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Strunk punctuates "The audience, which had at first been indifferent, became more and more interested" with commas but "The candidate who best meets these requirements will obtain the place" without them. What accounts for the difference?',
            options: [
              'The first clause is long enough that commas make it easier to read.',
              'Any clause that begins with "which" must be enclosed by commas.',
              'Only the second clause tells the reader which of several people is meant.',
              'The second sentence states a rule, and rules are never punctuated.'
            ],
            correctAnswer: 2,
            explanation: 'The clause about the candidate identifies who is meant, so it is restrictive and takes no commas, while the audience is already known and the clause about it is extra. Length does not decide the matter, the rule depends on function rather than on the word "which," and the type of statement is irrelevant.'
          },
          {
            question: 'Which sentence uses a colon correctly?',
            options: [
              'The council had: one goal, which was finishing the vote before recess.',
              'The council had one goal: to finish the vote before the holiday recess.',
              'The council\'s goal was: to finish the vote before the holiday recess.',
              'The council had one goal, it was: to finish the vote before recess.'
            ],
            correctAnswer: 1,
            explanation: 'A colon must follow a complete clause, and "The council had one goal" is complete and promises what follows. The other sentences put the colon after an incomplete clause such as "The council had" or "was," and one also contains a comma splice.'
          }
        ]
      }
    },
    {
      id: 'englangs5-same-words',
      type: 'text' as const,
      content: `
## Same Words, Different Marks

Punctuation can change what a sentence claims. Each version below uses the same words.

| Version | What the reader takes from it |
|---|---|
| The tax passed, and rents rose. | Two events, relation unstated |
| The tax passed; rents rose. | Two closely linked events; the reader infers a connection |
| The tax passed: rents rose. | The second clause is presented as the consequence, the thing the first clause led to |
| The tax passed—and rents rose. | The second event arrives as an emphatic, perhaps ironic, sequel |
| The students who finished early left. | Only some students left |
| The students, who finished early, left. | All the students left; they all finished early |

> 🔑 **AP Connection:** In a Section I punctuation question, first ask whether each choice is **correct** (no splice, no colon after an incomplete clause, no single comma where a pair is needed). Then, among correct choices, ask which mark expresses the relationship the writer intends.
`
    },
    {
      id: 'englangs5-myths',
      type: 'text' as const,
      content: `
## Myths About "Good Style"

| Myth | What is actually true |
|---|---|
| **"Sophistication means big words."** | "Utilize," "plethora," and "myriad" make a sentence longer, not smarter. This is **thesaurus style**: words chosen for their size rather than their fit. The Row C style route requires prose that is consistently vivid and persuasive, which depends on precision. |
| **"Never use I."** | The rubric does not forbid first person, and in the argument essay your own experience can be evidence. What weakens a claim is the hedge "I think" or "I feel," not the pronoun. |
| **"Never begin a sentence with *And* or *But*."** | This is a classroom rule, not a convention of published prose. Strunk himself opens a sentence with it: "But a writer may err by making his sentences too uniformly compact and periodic." Use it for a sharp turn, sparingly. |
| **"The passive voice is always wrong."** | Strunk calls it "frequently convenient and sometimes necessary." The fault is the passive that hides an actor you should name. |
| **"Semicolons make writing sound smart."** | A semicolon has one main job, joining closely related independent clauses (or separating list items that already contain commas). Anywhere else it is an error. |
| **"More devices means more style."** | Three rhetorical questions in a row, alliteration in every sentence, or a metaphor per line is **over-ornament**. Each device competes with the others, and the claim gets lost. |
| **"*While* works for any contrast."** | Strunk warns against "the indiscriminate use of this word for *and*, *but*, and *although*." Use *while* for time, or choose the exact connector. |

### When Breaking a Rule Works

In his introductory chapter, Strunk admits that the rules are not absolute:

> "It is an old observation that the best writers sometimes disregard the rules of rhetoric. When they do so, however, the reader will usually find in the sentence some compensating merit, attained at the cost of the violation."
>
> — Strunk, *The Elements of Style* (1918), "Introductory"

A fragment that lands a judgment, a sentence-opening *But* that turns an argument, a one-word paragraph: each can work, but only when the reader can see the **compensating merit**. If a reader might mistake the choice for a slip, it costs more than it earns.
`
    },
    {
      id: 'englangs5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Mark** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The audience, which had at first been indifferent ___ became more and more interested." The missing mark is a ___',
            options: ['comma', 'semicolon', 'colon', 'dash']
          },
          {
            label: '"The budget is balanced ___ however, the reserve fund is empty." ___',
            options: [';', ',', ':', 'no mark']
          },
          {
            label: '"The survey confirmed three problems ___ late arrivals, crowded seats, and missed transfers." ___',
            options: [':', ';', ',', 'no mark']
          }
        ],
        correctAnswers: ['comma', ';', ':'],
        hint1: 'The clause opened with one mark; it must close with the same one.',
        hint2: '"However" is an adverb, not a conjunction.',
        hint3: 'A complete clause promises a list, and the list follows.',
        explanation: 'A parenthetic clause opened with a comma must close with one. Two independent clauses joined by the adverb "however" need a semicolon, and a complete clause that announces a list takes a colon.'
      }
    },
    {
      id: 'englangs5-worked',
      type: 'text' as const,
      content: `
## Worked Revision: Fixing and Using Punctuation

**Prompt (Question 3 style):** Write an essay that argues your position on whether public buildings should be named after donors.

### The Draft (student model)

> Naming a library after a donor seems harmless, after all the building still lends the same books. But names teach, a child who studies in the Hartwell Reading Room learns, that generosity is measured in dollars. The city's oldest branch is named for Mary Kelso, a librarian who served there for forty years, it reminds every patron that service built the place. When a donor's name replaces hers the lesson changes. Because names outlast the people who choose them.

### The Revision (student model)

> Naming a library after a donor seems harmless; the building still lends the same books. But names teach. A child who studies in the Hartwell Reading Room learns that generosity is measured in dollars. The city's oldest branch is named for Mary Kelso, a librarian who served there for forty years; her name reminds every patron that service built the place. When a donor's name replaces hers, the lesson changes, and it changes for good: names outlast the people who choose them.

### Fixes and Their Rhetorical Payoff

| Draft problem | Revision | Payoff |
|---|---|---|
| Comma splice: "harmless, after all the building..." | Semicolon | The concession and its reason stay pressed together |
| Comma splice: "But names teach, a child..." | "But names teach." as its own sentence | A three-word sentence after a long one becomes the paragraph's turn |
| Stray comma: "learns, that generosity" | Comma removed | The verb and its object are no longer split |
| Comma splice: "forty years, it reminds" | Semicolon and a named subject, "her name" | Two linked facts; the vague "it" is gone |
| Missing comma after a long opening clause | "replaces hers, the lesson changes" | The reader sees where the main clause begins |
| Accidental fragment: "Because names outlast..." | Colon after a complete clause | The fragment becomes the reveal that ends the paragraph |

Notice that the revision uses one deliberate short sentence and one colon. That restraint is what makes each of them felt.
`
    },
    {
      id: 'englangs5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯

The questions refer to this student draft.

> (1) The district's new attendance policy counts a student as absent after ten minutes, the old policy allowed twenty. (2) Supporters say the change will teach punctuality. (3) It may, but it will also punish the students who have the least control over the clock: those who ride the city bus. (4) Arriving late through no fault of their own, the policy treats these students as truants. (5) The district should keep the ten-minute rule but excuse students whose buses run late—a fix that costs nothing.
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of sentence 1 corrects the comma splice and makes the contrast between the two policies clear?',
            options: [
              'The district\'s new policy counts a student absent after ten minutes, the old one allowed twenty.',
              'The district\'s new policy counts a student absent after ten minutes: the old policy allowed twenty.',
              'The district\'s new policy counts a student absent after ten minutes, and the old policy allowed twenty.',
              'The district\'s new policy counts a student absent after ten minutes, but the old policy allowed twenty.'
            ],
            correctAnswer: 3,
            explanation: 'A comma followed by "but" joins the clauses correctly and names the relationship as contrast. Shortening the second clause leaves the splice, a colon wrongly presents the old rule as an explanation of the new one, and "and" is correct but names no contrast.'
          },
          {
            question: 'Which revision of sentence 4 corrects the error in modification?',
            options: [
              'Arriving late through no fault of their own, the policy treats these students as truants.',
              'Arriving late through no fault of their own, these students are treated as truants by the policy.',
              'Arriving late through no fault of their own, truancy is how the policy classifies them.',
              'The policy, arriving late through no fault of their own, treats these students as truants.'
            ],
            correctAnswer: 1,
            explanation: 'The opening phrase describes the students, so the students must be the subject that follows it. The other versions attach the phrase to the policy or to truancy, which cannot arrive late.'
          },
          {
            question: 'In sentence 5, the writer places a dash before "a fix that costs nothing." What is the main effect of this choice?',
            options: [
              'It sets the closing phrase apart and makes the fix\'s low price stand out.',
              'It signals that the phrase is quoted from the district\'s own officials.',
              'It shows that the writer is unsure whether the fix will actually work.',
              'It joins two independent clauses that would otherwise form a splice.'
            ],
            correctAnswer: 0,
            explanation: 'The dash pauses before the final phrase and gives it the weight of an ending, which stresses that the remedy is free. Dashes do not mark quotations or doubt, and the phrase after this dash is not an independent clause.'
          }
        ]
      }
    }
  ]
};
