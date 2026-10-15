export const englangStyleWritingPart2Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs2-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 2 of 7 — Precise Diction in Your Own Writing**

---

| Section |
|---------|
| 📖 Two Writers on the Right Word: Twain and Strunk |
| Four Diction Decisions |
| Choosing Words for a Tone |
| Worked Revision: A Student Paragraph on Late-Night Buses |

> 🔑 **Key Concept:** Skill 8.A asks you to **strategically use words, comparisons, and syntax to convey a specific tone or style in an argument**. In your own essays, diction is not decoration added after the thinking is done. The word you choose decides how precise your claim is, how your reader feels about it, and whether your voice sounds like someone worth believing.

In Part 1 you saw the difference between a vague sentence and a precise one. This part slows that difference down into decisions you can make on purpose: how specific to be, which verb carries the claim, what register fits the audience, and which connotations help or hurt your argument.
`
    },
    {
      id: 'englangs2-sources',
      type: 'text' as const,
      content: `
## 📖 Two Writers on the Right Word: Twain and Strunk

### Mark Twain, 1888

In 1888 George Bainton, an Englishman compiling a book of advice for young writers, asked well-known authors about their methods of composition. Mark Twain answered that he was not sure he had a method at all, and then described one anyway:

> "...the difference between the almost right word and the right word is really a large matter—'tis the difference between the lightning-bug and the lightning."
>
> — Mark Twain, letter to George Bainton (1888), as printed in Bainton's *The Art of Authorship* (1890)

*Quotation books often print "it's" for "'tis"; the wording above is the 1890 printing.*

The comparison is itself a lesson in diction. A lightning-bug and lightning share a name and a glow. One is a flicker in the yard; the other splits a tree. An "almost right" word, such as *affected* where you meant *priced out*, shares a general meaning with the right one but delivers a fraction of its force.

### William Strunk Jr., 1918

Strunk, a Cornell professor, printed *The Elements of Style* for his own students in 1918. Three of his entries apply directly to diction in an argument.

> "Make definite assertions. Avoid tame, colorless, hesitating, non-committal language. Use the word *not* as a means of denial or in antithesis, never as a means of evasion."
>
> — Strunk, *The Elements of Style* (1918), "Put statements in positive form"

He gives pairs: *not honest* becomes *dishonest*; *did not remember* becomes *forgot*; *did not pay any attention to* becomes *ignored*; *did not have much confidence in* becomes *distrusted*.

> "*Very*. Use this word sparingly. Where emphasis is necessary, use words strong in themselves."
>
> — Strunk, *The Elements of Style* (1918), "Words and Expressions Commonly Misused"

The 1920 edition added a rule that sums up the rest:

> "Prefer the specific to the general, the definite to the vague, the concrete to the abstract."
>
> — Strunk, *The Elements of Style* (1920 edition), "Use definite, specific, concrete language"

His own illustration: "A period of unfavorable weather set in" becomes "It rained every day for a week."

### What This Means in an AP Essay

| Strunk or Twain | In your essay |
|---|---|
| The right word, not the almost right word | Write *priced out of the neighborhood*, not *affected by the changes* |
| Positive form | "The council ignored the petition," not "The council did not really pay attention to the petition" |
| *Very* sparingly | "a crippling fee," not "a very, very bad fee" |
| Specific over general | "It rained every day for a week," not "a period of unfavorable weather" |
`
    },
    {
      id: 'englangs2-decisions',
      type: 'text' as const,
      content: `
## Four Diction Decisions

### 1. How Specific? Climb the Ladder

| Rung | Example | Use it when |
|---|---|---|
| General | people | Almost never in a body paragraph |
| Group | residents | Naming who is involved |
| Subgroup | renters on fixed incomes | Naming who is affected **and how** |
| Instance | the retired bus driver on the fourth floor whose rent rose twice in one year | Making the reader see one case that stands for the group |

Strong paragraphs move up and down the ladder. The claim sits on a middle rung; the evidence climbs to an instance; the commentary steps back to the group and explains what the instance proves.

### 2. Which Verb Carries the Claim?

Weak drafts lean on *is*, *has*, *shows*, and *there is*. A precise verb can do the work of a whole clause.

| Vague | Precise | What the precise verb adds |
|---|---|---|
| The report shows the plan's flaws. | The report **exposes** the plan's flaws. | The flaws were hidden |
| The mayor has a different view. | The mayor **concedes** the point but **disputes** the cost. | Two distinct stances |
| There is a problem with the data. | The data **omit** night riders. | The exact problem |

### 3. Which Register?

**Register** is the level of formality. AP readers reward a voice that is formal but plain: the register of a thoughtful op-ed, not a text message and not a legal brief.

| Too casual | Inflated | Formal but plain |
|---|---|---|
| a total no-brainer | it is incumbent upon us to ascertain | the choice is clear |
| kids | the youthful demographic | students |
| super important | of paramount and inestimable significance | essential |

The inflated column is the more common mistake on the exam. Long words chosen to sound academic blur the claim, and a reader who has to translate your sentence is not being persuaded by it.

### 4. Which Connotation?

Words with the same dictionary meaning carry different associations, called **connotations**. Choose the one that fits both your claim and your reader.

| Neutral | Favorable | Unfavorable |
|---|---|---|
| reduce funding | streamline | gut |
| careful with money | thrifty | stingy |
| stubborn | persistent | obstinate |

A loaded word can win a sentence and lose the argument. Calling a budget cut "gutting" may please readers who already agree, but a skeptical reader will notice the thumb on the scale. Save the strongest connotation for the claim you can best support.

> 🔑 **AP Connection:** Comparisons are diction too. One apt analogy, like Twain's lightning-bug, can carry an idea a reader remembers. A chain of stock images ("the tip of the iceberg," "a slippery slope," "a double-edged sword") tells the reader you reached for the nearest phrase instead of the right one.
`
    },
    {
      id: 'englangs2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A draft reads: "The new policy had a big effect on a lot of people in our town." Which revision best follows the advice to prefer the specific to the general?',
            options: [
              'The policy had a significant impact on a substantial portion of our town.',
              'The policy closed the east-side branch library on weeknights after six.',
              'The policy was felt in a variety of ways by many different people here.',
              'The policy had a truly major and serious effect on many local residents.'
            ],
            correctAnswer: 1,
            explanation: 'Naming the branch, the side of town, and the hours turns a vague effect into a concrete one the reader can picture and weigh. The other revisions only swap in longer abstract words such as "significant impact" or add intensifiers, so they stay just as general.'
          },
          {
            question: 'Applying Strunk\'s advice to put statements in positive form, the best revision of "The council did not have much confidence in the report" is',
            options: [
              'The council distrusted the report.',
              'The council was not very sure of the report.',
              'The council had little confidence at all in it.',
              'The council did not fully trust the report.'
            ],
            correctAnswer: 0,
            explanation: 'A single positive verb states what the council did think, which is Strunk\'s own pairing of "did not have much confidence in" with "distrusted." The other versions keep the hesitating negative or water it down with "little" and "not very."'
          }
        ]
      }
    },
    {
      id: 'englangs2-tone',
      type: 'text' as const,
      content: `
## Choosing Words for a Tone

**Tone** is the writer's attitude toward the subject and audience, and in your own essay you set it on purpose. Decide the tone from the rhetorical situation first: who is reading, and what you need them to do. Then choose words that hold that tone steady.

### One Claim, Four Tones

The claim: *the school should keep its library open after the last bell.*

| Tone | Sentence | Words doing the work |
|---|---|---|
| **Urgent** | Every afternoon the library locks its doors on the students who need it most. | *locks its doors on*, *need it most* |
| **Measured** | Extending library hours by ninety minutes would serve students who have no quiet place to study at home. | *would serve*, *no quiet place* |
| **Wry** | The building with the most books in town closes before most of its readers are free to open one. | the irony of *most books* and *closes* |
| **Conciliatory** | The administration's concern about staffing is fair, and a volunteer schedule could answer it. | *is fair*, *could answer it* |

None of these tones is correct in the abstract. A letter to a skeptical principal probably calls for measured or conciliatory diction; a speech to students who already agree can afford urgency. The mistake is mixing them without a reason, so that a measured paragraph suddenly calls the principal "heartless."

### Keeping Tone Consistent

- Read your paragraph and underline every evaluative word: *heartless*, *reasonable*, *absurd*, *fair*. Do they belong to the same attitude?
- Watch intensifiers. *Very*, *really*, *extremely*, and *totally* usually signal that the base word is too weak; replace the base word instead.
- Keep the register level. One slang phrase in a formal paragraph sounds like a lapse, not a choice.
`
    },
    {
      id: 'englangs2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Words with the same dictionary meaning can differ in _______, the associations and feelings they carry.

2) The level of formality a writer chooses, from casual to formal, is the writer's _______.

3) Strunk says to use "not" for denial or in antithesis, never as a means of _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['connotation', 'register', 'evasion'],
        hint1: 'Thrifty and stingy share a meaning but not this.',
        hint2: 'A text message and a legal brief sit at opposite ends of it.',
        hint3: 'A hesitating, non-committal way of avoiding a definite statement.',
        explanation: 'Connotation is what a word suggests beyond its definition, register is the level of formality, and Strunk objects to "not" used as a means of evasion.'
      }
    },
    {
      id: 'englangs2-revision',
      type: 'text' as const,
      content: `
## Worked Revision: A Student Paragraph on Late-Night Buses

**Prompt (Question 3 style):** Write an essay that argues your position on whether a public service should be judged mainly by how many people use it.

**Student thesis:** *Usage counts measure a service's reach, not its value; a service used by few can matter most when those few have no alternative.*

### The Draft (student model)

> Some people think that late-night buses are not important because not a lot of people ride them. However, this is a very bad way of thinking about it. The people who do ride them are really impacted by this. They have jobs and things they need to get to. If the buses are taken away, it will have a big effect on their lives. Therefore, the city should not do this.

### The Revision (student model)

> Ridership counts measure how many people a bus carries; they say nothing about what the ride is worth. The 11:40 route past the county hospital may carry only a dozen passengers, but those passengers are night-shift aides, line cooks, and janitors, workers whose shifts end after the last train and who cannot absorb a forty-dollar cab fare. For them the late bus is not a convenience; it is the reason they can keep the job. A city that cuts the route to save money has not trimmed waste. It has moved the cost onto the people least able to pay it.

### What Changed

| Draft | Revision | Decision |
|---|---|---|
| "some people," "the people who do ride them" | "night-shift aides, line cooks, and janitors" | Climbed the ladder from general to instance |
| "really impacted," "a big effect" | "cannot absorb a forty-dollar cab fare," "the reason they can keep the job" | Replaced intensifiers with concrete consequences |
| "a very bad way of thinking" | "they say nothing about what the ride is worth" | Named the flaw instead of labeling it |
| "if the buses are taken away" | "a city that cuts the route" | Named the agent and gave it an active verb |
| "should not do this" | "has moved the cost onto the people least able to pay it" | Ended on the claim the paragraph exists to make |

### Tone and the Rubric

The revision is **measured but pointed**. It never insults the city, yet the phrase "has not trimmed waste" borrows the budget-cutters' own vocabulary and turns it against them. Notice too that "not a convenience; it is the reason" uses *not* in antithesis, exactly the use Strunk allows.

- **Row B (evidence and commentary):** the specific riders are the evidence, and "they say nothing about what the ride is worth" is commentary that explains why the evidence defeats the usage argument.
- **Row C (sophistication):** one of the routes to this point is "a style that is consistently vivid and persuasive." A single strong paragraph does not earn it; prose like this, sustained across the essay, can.
`
    },
    {
      id: 'englangs2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯

The questions refer to this student draft.

> (1) Our school library closes at 3:30, ten minutes after the last bell. (2) For students who ride the late bus or wait for a parent's shift to end, that leaves nowhere quiet to work. (3) Last spring the student council proposed keeping the library open until 5:00 on weekdays, staffed by parent volunteers. (4) The administration said no because of money stuff. (5) This decision hurts a lot of students.
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants sentence 4 to report the administration\'s decision in a neutral tone, so that the criticism that follows seems fair. Which version best accomplishes this goal?',
            options: [
              'The administration rejected the plan, citing the cost of an extra hour of custodial work.',
              'The administration shot the plan down over money, which is what it usually does.',
              'The administration heartlessly crushed the plan to save a few measly dollars.',
              'The administration had some reasons about costs for not going with the plan.'
            ],
            correctAnswer: 0,
            explanation: 'Reporting the decision with a plain verb and the stated reason keeps the tone neutral and specific, which makes the writer\'s later objection look reasonable. The other versions are sarcastic, openly hostile, or too vague to tell the reader what the concern was.'
          },
          {
            question: 'The writer wants to replace "a lot of students" in sentence 5 with a phrase that gives the reader a concrete sense of who is harmed. Which choice best accomplishes this goal?',
            options: [
              'a great many students from all kinds of different backgrounds and grades',
              'a large and quite significant portion of our school\'s student body',
              'the forty students who sign in at the front office each afternoon',
              'the students who truly need the library more than anyone else'
            ],
            correctAnswer: 2,
            explanation: 'A count tied to a visible routine, signing in at the front office, lets the reader see the group. The other phrases are longer but still general, and "truly need" asserts the need instead of showing it.'
          },
          {
            question: 'The writer wants to end the paragraph with a sentence whose diction matches the formal but plain register of the draft. Which choice best accomplishes this goal?',
            options: [
              'Ninety more minutes of supervision would cost little and return a great deal.',
              'Honestly, keeping the library open late is a total no-brainer for everyone.',
              'It is imperative that the aforementioned facility remain operational henceforth.',
              'Keeping it open longer would be good and would help kids do better on stuff.'
            ],
            correctAnswer: 0,
            explanation: 'The sentence is formal without strain, and its balance of "cost little" against "return a great deal" gives the paragraph a firm close. The others slip into slang, inflate into legalese, or fall back on vague words like "good" and "stuff."'
          }
        ]
      }
    }
  ]
};
