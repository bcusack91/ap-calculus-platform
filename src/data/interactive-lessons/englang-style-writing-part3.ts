export const englangStyleWritingPart3Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs3-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 3 of 7 — Building Clear Sentences: Coordination and Subordination**

---

| Section |
|---------|
| 📖 Strunk on the Weakest Connective |
| The Connector Toolkit |
| What Goes in the Main Clause Wins |
| Worked Example: Combining Sentences Three Ways |

> 🔑 **Key Concept:** Skill 8.B asks you to **write sentences that clearly convey ideas and arguments**. Every time you join two ideas, you make a claim about how they relate: one causes the other, one limits the other, one matters more. Coordination gives ideas equal weight; subordination makes one idea lean on another. Choosing between them is choosing what your argument stresses.

Part 2 worked at the level of the word. This part works at the level of the clause. A paragraph of accurate words can still read as a list of facts if the sentences never say how those facts connect.
`
    },
    {
      id: 'englangs3-strunk',
      type: 'text' as const,
      content: `
## 📖 Strunk on the Weakest Connective

In *The Elements of Style* (1918), William Strunk Jr. gives two sentences that are grammatically correct and still, in his view, weak:

> The early records of the city have disappeared, and the story of its first years can no longer be reconstructed.
>
> The situation is perilous, but there is still one chance of escape.

His diagnosis:

> "...*and* is the least specific of connectives. Used between independent clauses, it indicates only that a relation exists between them without defining that relation. In the example above, the relation is that of cause and result."
>
> — William Strunk Jr., *The Elements of Style* (1918)

His rewrites subordinate one clause so that the relationship is named:

> As the early records of the city have disappeared, the story of its first years can no longer be reconstructed.
>
> Although the situation is perilous, there is still one chance of escape.

### Reading the Revision

| Original | Revision | What the reader now knows |
|---|---|---|
| "have disappeared, **and** the story..." | "**As** the early records... have disappeared, the story..." | The loss of the records **causes** the gap in the story |
| "is perilous, **but** there is still..." | "**Although** the situation is perilous, there is still..." | The danger is conceded; the chance of escape is the point |

Strunk does not ban the loose, *and*-joined sentence. He adds that "an occasional loose sentence prevents the style from becoming too formal and gives the reader a certain relief." The fault is a paragraph built entirely of them, where every relationship is left for the reader to guess.
`
    },
    {
      id: 'englangs3-toolkit',
      type: 'text' as const,
      content: `
## The Connector Toolkit

### Connectors by Relationship

| Relationship | Coordinating (equal weight) | Subordinating (one clause depends) | Adverb (after a semicolon or period) |
|---|---|---|---|
| Addition | and | — | moreover, also, furthermore |
| Contrast | but, yet | whereas | however, by contrast |
| Concession | yet | although, though, even though | still, nevertheless |
| Cause | for | because, since, as | — |
| Result | so | — | therefore, consequently, thus |
| Purpose | — | so that, in order that | — |
| Condition | or (as an alternative) | if, unless, provided that | otherwise |
| Time | — | when, after, before, until | then, afterward |

### Four Sentence Patterns and Their Punctuation

| Pattern | Example |
|---|---|
| Independent clause, + coordinating conjunction + independent clause | The fare rose, **but** ridership held steady. |
| Independent clause; independent clause | The fare rose; ridership held steady. |
| Independent clause; adverb, independent clause | The fare rose; **however,** ridership held steady. |
| Subordinate clause, independent clause | **Although** the fare rose, ridership held steady. |

Strunk's rule for the first pattern is to "place a comma before *and* or *but* introducing an independent clause." The second and third patterns need a semicolon; a comma alone between two independent clauses is a **comma splice**, which Part 5 returns to.

### Choosing the Precise Connector

- **Because** and **since** state a cause. Do not use *since* where a reader could take it to mean time ("Since the plant closed, wages fell" can mean either).
- **While** means "at the same time." Strunk warns against using it as a loose substitute for *and*, *but*, or *although*.
- **However** is an adverb, not a conjunction. "The fare rose, however ridership held steady" is a comma splice.
- **So** is fine in speech but vague in argument. "Therefore" or a *because* clause usually names the logic more exactly.
`
    },
    {
      id: 'englangs3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Strunk objects to joining two independent clauses with "and" when the real link between them is cause and result, chiefly because "and"',
            options: [
              'names no relationship beyond the fact that one exists',
              'always produces a comma splice between the two halves',
              'makes the second clause grammatically depend on the first',
              'is too informal for any writing meant for an educated reader'
            ],
            correctAnswer: 0,
            explanation: 'Strunk calls "and" the least specific of connectives because it shows that a relation exists without defining it. A comma before "and" is correct, "and" keeps both clauses independent, and his complaint is about vagueness, not informality.'
          },
          {
            question: 'Which connector best fits the blank? "The measure passed easily, ___ its opponents had predicted defeat for months."',
            options: [
              'although',
              'because',
              'so',
              'therefore'
            ],
            correctAnswer: 0,
            explanation: 'The second clause states something that might have prevented the first, so the relationship is concession. A cause or result connector would claim that the predictions produced the easy passage, and "therefore" would also need a semicolon.'
          }
        ]
      }
    },
    {
      id: 'englangs3-emphasis',
      type: 'text' as const,
      content: `
## What Goes in the Main Clause Wins

The independent clause carries the assertion; the subordinate clause carries what the writer concedes, assumes, or sets aside. The same two facts can argue opposite positions.

| Sentence | Which side it argues |
|---|---|
| Although the program is expensive, **it pays for itself within four years.** | For the program |
| Although the program pays for itself within four years, **it is expensive.** | Against the program |

This is why subordination is one of the quickest ways to show the nuance AP readers look for. A concession in a subordinate clause tells the reader you have weighed the other side, and the main clause tells them where you landed.

### Other Ways to Combine

| Tool | Example | Best for |
|---|---|---|
| **Relative clause** | The garden, **which students planted last spring,** now supplies the cafeteria. | Adding a fact about a noun without a new sentence |
| **Appositive** | Ms. Ortiz, **the only teacher who stays past five,** supervises the garden. | Renaming or identifying a person or thing |
| **Participial phrase** | **Facing a budget gap,** the board cut the late bus. | Compressing a cause or circumstance |
| **Parallel series** | The cut **saved money, angered parents, and stranded athletes.** | Several results of equal weight |

### The Dangling Modifier

An opening phrase attaches to the subject that follows it. Strunk's rule: "A participial phrase at the beginning of a sentence must refer to the grammatical subject." His examples show what goes wrong.

> Being in a dilapidated condition, I was able to buy the house very cheap.
>
> Young and inexperienced, the task seemed easy to me.

The first sentence says the writer was dilapidated; the second says the task was young. Strunk's correction of the second: "Young and inexperienced, I thought the task easy." In an essay, a dangling modifier rarely confuses the reader for long, but it makes the writer look careless at exactly the moment the sentence is trying to sound controlled.
`
    },
    {
      id: 'englangs3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Connector** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The bridge closed for repairs; ___ commuters added twenty minutes to each trip." ___',
            options: ['as a result,', 'in contrast,', 'for example,', 'nevertheless,']
          },
          {
            label: '"___ the plan costs more at first, it saves money within four years." ___',
            options: ['Although', 'Because', 'Unless', 'Once']
          },
          {
            label: '"The library will stay open late ___ enough parents volunteer to supervise." ___',
            options: ['only if', 'even though', 'whereas', 'so that']
          }
        ],
        correctAnswers: ['as a result,', 'Although', 'only if'],
        hint1: 'The longer commute follows from the closing.',
        hint2: 'The first clause is a drawback the writer concedes.',
        hint3: 'The volunteers are a condition the late hours depend on.',
        explanation: 'The closing causes the longer trips, so a result adverb fits after the semicolon. The higher first cost is conceded before the main point, and the late hours depend on the volunteers, which is a condition.'
      }
    },
    {
      id: 'englangs3-worked',
      type: 'text' as const,
      content: `
## Worked Example: Combining Sentences Three Ways

### Strunk's Model

Strunk shows how a string of short sentences can become one sentence that states the relationships:

> Macbeth was very ambitious. This led him to wish to become king of Scotland. The witches told him that this wish of his would come true. The king of Scotland at this time was Duncan. Encouraged by his wife, Macbeth murdered Duncan. He was thus enabled to succeed Duncan as king.

> Encouraged by his wife, Macbeth achieved his ambition and realized the prediction of the witches by murdering Duncan and becoming king of Scotland in his place.
>
> — William Strunk Jr., *The Elements of Style* (1918), "Omit needless words"

Fifty-one words become twenty-six. Nothing is lost, because the combined sentence keeps every fact and adds what the short sentences left out: that the murder was the **means** ("by murdering") by which ambition and prophecy were fulfilled.

### A Student Draft (student model)

> The city plans to replace the Elm Street library branch with a self-service kiosk. The kiosk would cost about a third as much to run. It would not offer story hours. It would not help people fill out job applications. Those services are what most patrons come for.

**Combination A: coordination only**

> The kiosk would cost about a third as much to run, and it would not offer story hours, and it would not help with job applications, and those are what most patrons come for.

Every idea gets equal weight, so the sentence has no point. This is the "succession of loose sentences" Strunk warns against, compressed into one.

**Combination B: subordination favoring the kiosk**

> Although the kiosk would offer neither story hours nor help with job applications, it would cost about a third as much to run.

**Combination C: subordination favoring the branch**

> Although a kiosk would cost about a third as much to run, it would offer neither story hours nor help with job applications, the services that bring most patrons through the door.

B and C contain the same facts and argue opposite conclusions. C is the version for a writer defending the branch: the savings are conceded in the subordinate clause, the loss sits in the main clause, and an appositive at the end ("the services that bring...") explains why the loss matters. Notice also the parallel pair "neither story hours nor help," which keeps the two lost services in matching form.

### Long Sentences Are Not the Problem

Mark Twain, describing how a writer's ear develops, allowed for the long sentence on one condition:

> "At times he may indulge himself with a long one, but he will make sure that there are no folds in it, no vaguenesses, no parenthetical interruptions of its view as a whole; when he is done with it, it won't be a sea-serpent, with half of its arches under the water, it will be a torch-light procession."
>
> — Mark Twain, letter to George Bainton (1888), as printed in Bainton's *The Art of Authorship* (1890)

Combination C is long, but each clause follows the last in plain view: concession, claim, explanation. That is a torch-light procession. Combination A is a sea-serpent: the reader cannot see which part matters.

> 🔑 **AP Connection:** Section I writing questions often ask which version of a combined sentence "most effectively" joins two ideas or emphasizes one of them. Identify the idea the writer wants stressed, then find the version that puts it in the independent clause.
`
    },
    {
      id: 'englangs3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯

The questions refer to this student draft.

> (1) The town council voted to replace the crossing guard at Maple and Fifth with a flashing signal. (2) The signal costs less than a guard's salary. (3) It cannot see a child who darts into the street. (4) Mr. Reyes has worked the corner for eleven years. (5) He knows most of the children by name.
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants to combine sentences 2 and 3 so that the main clause carries the writer\'s objection to the signal. Which version best accomplishes this goal?',
            options: [
              'Although the signal costs less than a guard\'s salary, it cannot see a child who darts into the street.',
              'Even though the signal cannot see a child who darts into the street, it costs less than a guard\'s salary.',
              'The signal costs less than a guard\'s salary, and it cannot see a child who darts into the street.',
              'The signal, which cannot see a child who darts into the street, costs less than a guard\'s salary.'
            ],
            correctAnswer: 0,
            explanation: 'Placing the savings in an "although" clause concedes them and leaves the danger to children in the main clause, where it receives the emphasis. The reversed concession and the relative-clause version stress the savings, and the "and" version gives both ideas equal weight.'
          },
          {
            question: 'The writer wants to combine sentences 4 and 5 so that the guard\'s familiarity with the children receives the most emphasis. Which version best accomplishes this goal?',
            options: [
              'Mr. Reyes has worked the corner for eleven years, and he knows most of the children by name.',
              'Mr. Reyes, who knows most of the children by name, has worked the corner for eleven years.',
              'Mr. Reyes, who has worked the corner for eleven years, knows most of the children by name.',
              'Having worked the corner for eleven years, most of the children are known by Mr. Reyes.'
            ],
            correctAnswer: 2,
            explanation: 'The relative clause tucks the eleven years into a supporting role, and the main clause, which ends the sentence, delivers the point about knowing the children by name. The "and" version weights both facts equally, the reversed version stresses the years, and the participial version dangles, since the children did not work the corner.'
          },
          {
            question: 'A classmate merges ideas from the draft into this sentence: "Darting into the street without looking, the signal cannot see the child." Which revision corrects the dangling modifier?',
            options: [
              'Darting into the street without looking, the signal\'s sensor cannot see the child.',
              'The signal cannot see the child darting into the street without looking.',
              'Darting into the street without looking, the signal fails to see the child.',
              'Without looking and darting into the street, the signal cannot see a child.'
            ],
            correctAnswer: 1,
            explanation: 'Moving the phrase next to "the child" makes it clear who is darting. Every other version still opens with a phrase about darting and then names the signal or its sensor as the subject, so the machine appears to be the one running into the street.'
          }
        ]
      }
    }
  ]
};
