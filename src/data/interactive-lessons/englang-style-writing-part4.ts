export const englangStyleWritingPart4Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs4-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 4 of 7 — Concision, Emphasis, and Variety**

---

| Section |
|---------|
| 📖 "Make Every Word Tell": Strunk on Concision |
| Active and Passive Voice |
| Emphasis, Variety, and Parallelism |
| Worked Revision: A Body Paragraph on Convenience |

> 🔑 **Key Concept:** Skills 8.A and 8.B ask you to use syntax to convey a tone and to write sentences that clearly convey your argument. Three habits do most of that work in timed writing: **cutting** words that do nothing, **placing** the important idea where the reader will feel it, and **varying** sentence shape so that the important sentence stands out from the ones around it.

Part 3 showed how joining clauses names relationships. This part is about the shape and weight of sentences once the relationships are clear.
`
    },
    {
      id: 'englangs4-concision',
      type: 'text' as const,
      content: `
## 📖 "Make Every Word Tell": Strunk on Concision

> "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all his sentences short, or that he avoid all detail and treat his subjects only in outline, but that every word tell."
>
> — William Strunk Jr., *The Elements of Style* (1918), "Omit needless words"

Read the last sentence twice. Concision is **not** brevity. A long sentence full of working detail is concise; a short sentence padded with "it is important to note that" is not.

### Strunk's Examples

| Wordy | Concise |
|---|---|
| the question as to whether | whether |
| there is no doubt but that | no doubt (doubtless) |
| owing to the fact that | since (because) |
| in spite of the fact that | though (although) |
| the fact that he had not succeeded | his failure |
| His brother, who is a member of the same firm | His brother, a member of the same firm |

He says *the fact that* "should be revised out of every sentence in which it occurs."

### The Modern Student Version

| Padding | Why it fails | Fix |
|---|---|---|
| "In today's society..." | Says nothing a reader did not assume | Start with the claim |
| "It is important to note that..." | Announces importance instead of showing it | Delete; state the point |
| "This quote shows that..." | Wastes the commentary's opening words | "The phrase 'X' turns..." |
| "In order to" | Two extra words | "to" |
| "In conclusion, ..." | Labels the paragraph instead of concluding | End on your strongest sentence |
`
    },
    {
      id: 'englangs4-voice',
      type: 'text' as const,
      content: `
## Active and Passive Voice

In the **active voice** the subject performs the action ("The council closed the branch"). In the **passive voice** the subject receives it ("The branch was closed by the council," or simply "The branch was closed").

> "The active voice is usually more direct and vigorous than the passive:
>
> I shall always remember my first visit to Boston.
>
> This is much better than
>
> My first visit to Boston will always be remembered by me."
>
> — Strunk, *The Elements of Style* (1918), "Use the active voice"

Strunk's revisions of tame sentences show the same move:

| Before | After |
|---|---|
| There were a great number of dead leaves lying on the ground. | Dead leaves covered the ground. |
| A survey of this region was made in 1900. | This region was surveyed in 1900. |
| The reason that he left college was that his health became impaired. | Failing health compelled him to leave college. |

### When the Passive Is the Right Choice

Strunk does not ban it: "This rule does not, of course, mean that the writer should entirely discard the passive voice, which is frequently convenient and sometimes necessary." His example: "The dramatists of the Restoration are little esteemed to-day" is right "in a paragraph on the dramatists of the Restoration," while "Modern readers have little esteem for the dramatists of the Restoration" is right in a paragraph on modern readers. The choice of voice follows the **topic**: make the thing the paragraph is about the subject of the sentence.

| Use the passive when... | Example |
|---|---|
| The actor is unknown or unimportant | The bridge was built in 1932. |
| The paragraph's topic receives the action | The petition was signed by four hundred residents. |

| Avoid the passive when... | Example | Problem |
|---|---|---|
| It hides responsibility you should name | "Mistakes were made." | Who made them? |
| It buries the verb in a noun | "A decision was reached by the board." | "The board decided." |

> 🔑 **AP Connection:** In rhetorical analysis you may point out a speaker's evasive passive. In your own argument, an agentless passive at the moment you assign blame weakens the claim: "The program was cut" lets the reader wonder who did it; "The board cut the program" does not.
`
    },
    {
      id: 'englangs4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of "Due to the fact that the vote was delayed, the question as to whether the bill would pass remained open" best follows Strunk\'s advice to omit needless words?',
            options: [
              'Because the vote was delayed, whether the bill would pass remained open.',
              'Due to the vote\'s delay, the question as to whether the bill would pass stayed open.',
              'Owing to the fact of the delay, whether or not the bill would pass remained open.',
              'Since the vote was delayed, the question of the bill\'s passage remained an open one.'
            ],
            correctAnswer: 0,
            explanation: 'Both stock phrases Strunk names are gone: "due to the fact that" becomes "because," and "the question as to whether" becomes "whether." Each other revision keeps one of the padded phrases or adds a new one, such as "remained an open one."'
          },
          {
            question: 'Strunk keeps "The dramatists of the Restoration are little esteemed to-day" in the passive when the paragraph concerns the dramatists. What principle does this illustrate?',
            options: [
              'The topic being discussed should usually be the subject of the sentence.',
              'The passive voice is more formal and therefore suits literary topics.',
              'The active voice should be avoided when the actor is a large group.',
              'A paragraph about the past should be written in the passive voice.'
            ],
            correctAnswer: 0,
            explanation: 'Strunk explains that the need to make a particular word the subject often decides the voice, so the dramatists stay in subject position when they are the topic. He never ties the passive to formality, to group actors, or to past events.'
          }
        ]
      }
    },
    {
      id: 'englangs4-emphasis',
      type: 'text' as const,
      content: `
## Emphasis, Variety, and Parallelism

### The End Is the Emphatic Position

> "The proper place for the word, or group of words, which the writer desires to make most prominent is usually the end of the sentence."
>
> — Strunk, *The Elements of Style* (1918), "Place the emphatic words of a sentence at the end"

| Weaker | Stronger (Strunk's revision) |
|---|---|
| Humanity has hardly advanced in fortitude since that time, though it has advanced in many other ways. | Humanity, since that time, has advanced in many other ways, but it has hardly advanced in fortitude. |

The revision saves the surprising idea, the lack of progress in fortitude, for last. Strunk adds that the principle "applies equally to the words of a sentence, to the sentences of a paragraph, and to the paragraphs of a composition." End your paragraph on the commentary that matters most, not on a summary of what you just said.

### Variety: Breaking a Monotonous Pattern

Strunk warns against "a succession of loose sentences," each made of two co-ordinate clauses joined by *and*, *but*, or a word such as *which* or *while*. His example begins:

> The third concert of the subscription series was given last evening, and a large audience was in attendance. Mr. Edward Appleton was the soloist, and the Boston Symphony Orchestra furnished the instrumental music.

His remedy is not random variety but variety that follows the logic: recast enough of them, "replacing them by simple sentences, by sentences of two clauses joined by a semicolon, by periodic sentences of two clauses, by sentences, loose or periodic, of three clauses—whichever best represent the real relations of the thought."

| Sentence shape | What it does in an essay |
|---|---|
| Short simple sentence after longer ones | Lands a judgment with force |
| Periodic sentence (main clause delayed to the end) | Builds suspense toward the claim |
| Loose sentence (main clause first, details after) | Feels natural; good for evidence |
| Two clauses joined by a semicolon | Presses two closely related ideas together |

### Parallelism

> "This principle, that of parallel construction, requires that expressions of similar content and function should be outwardly similar. The likeness of form enables the reader to recognize more readily the likeness of content and function."
>
> — Strunk, *The Elements of Style* (1918), "Express co-ordinate ideas in similar form"

| Not parallel | Parallel |
|---|---|
| My objections are, first, the injustice of the measure; second, that it is unconstitutional. | My objections are, first, that the measure is unjust; second, that it is unconstitutional. |
| The plan would cost more, delay construction, and it would anger residents. | The plan would cost more, delay construction, and anger residents. |

The first pair is Strunk's; the second is a student model. Parallel form tells the reader that the items belong to the same category and carry equal weight.
`
    },
    {
      id: 'englangs4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Strunk says the place for the words a writer wants to make most prominent is usually the _______ of the sentence.

2) Putting ideas of similar content and function in similar grammatical form is called _______.

3) In the _______ voice, the subject of the sentence performs the action.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['end', 'parallelism', 'active'],
        hint1: 'The opposite of the beginning; the last thing the reader meets.',
        hint2: 'Strunk calls it the principle of parallel construction.',
        hint3: '"The council closed the branch," not "The branch was closed."',
        explanation: 'The end of a sentence is its most emphatic position, matching form to matching content is parallelism, and in the active voice the subject acts.'
      }
    },
    {
      id: 'englangs4-revision',
      type: 'text' as const,
      content: `
## Worked Revision: A Body Paragraph on Convenience

**Prompt (Question 3 style):** Write an essay that argues your position on the value of convenience.

**Student thesis:** *Convenience is worth its price only when we know what we are paying, and the costs of the most convenient tools are the ones we notice last.*

### The Draft (student model, 108 words)

> In today's society, it is important to note that there are many technologies that make life more convenient. One example of this is GPS navigation. GPS is used by many drivers every day in order to get to where they are going. Due to the fact that the app tells drivers exactly when to turn, drivers do not have to pay attention to where they are. My brother has driven to his job across town for two years. Last month his phone died. He did not know how to get there. This shows that convenience can be bad. In conclusion, GPS is convenient but it has a cost.

### The Revision (student model, 101 words)

> Navigation apps spare drivers the work of knowing where they are, and that work is how people learn a place. My brother has driven to his job across town every weekday for two years, guided turn by turn. Last month his phone died at a red light, and he could not say whether to turn left or right. Two years of driving had given him a commute but not a map. The app did not merely save him effort; it absorbed the attention that would have taught him the city. We pay for that convenience in knowledge we never notice losing.

### What Changed

| Move | Draft | Revision |
|---|---|---|
| **Cut padding** | "In today's society, it is important to note that"; "One example of this is"; "in order to"; "Due to the fact that"; "This shows that"; "In conclusion" | All gone |
| **Active voice** | "GPS is used by many drivers" | "Navigation apps spare drivers the work..." |
| **Concrete detail** | "his phone died. He did not know how to get there." | "died at a red light, and he could not say whether to turn left or right" |
| **Antithesis** | "convenience can be bad" | "a commute but not a map"; "did not merely save him effort; it absorbed the attention" |
| **Emphatic end** | "it has a cost" | "knowledge we never notice losing" |
| **Variety** | Three short sentences in a row that all begin with the subject | Long explanatory sentences framing one short judgment |

The revision is only seven words shorter. That is Strunk's point: concision "requires not that the writer make all his sentences short... but that every word tell." The draft spent about forty words on padding; the revision spent them on the red light, the turn, and the commentary.

### Mapped to the Rubric

- **Row B:** the brother's story is the evidence; "that work is how people learn a place" and "absorbed the attention that would have taught him the city" are the commentary that explains what the story proves.
- **Row C:** the antitheses and the emphatic last sentence are the kind of choices that, kept up across an essay, make a style "consistently vivid and persuasive."
`
    },
    {
      id: 'englangs4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants to make the draft\'s sentence "GPS is used by many drivers every day in order to get to where they are going" more concise and direct. Which version best accomplishes this goal?',
            options: [
              'Many drivers use GPS every day to reach their destinations.',
              'Every day, GPS is used by many drivers to get where they are going.',
              'GPS gets used daily by many drivers in order to reach their destinations.',
              'Drivers rely on GPS every day for getting to where they\'re going.'
            ],
            correctAnswer: 0,
            explanation: 'The active voice puts the drivers in charge of the verb, and "to reach their destinations" replaces the padded "in order to get to where they are going." The other versions keep the passive, keep "in order to," or swap in a wordier phrase.'
          },
          {
            question: 'The writer wants the paragraph\'s final sentence to place its most important idea in the most emphatic position. Which version best accomplishes this goal?',
            options: [
              'We pay for that convenience in knowledge we never notice losing.',
              'Knowledge we never notice losing is what we pay for that convenience with.',
              'In knowledge we never notice losing, we pay for that convenience.',
              'We never notice losing the knowledge we pay for that convenience with.'
            ],
            correctAnswer: 0,
            explanation: 'The hidden loss of knowledge is the paragraph\'s new idea, and this version saves it for the end. The other arrangements finish on "convenience" or on a dangling "with," which wastes the final position on familiar or empty words.'
          },
          {
            question: 'A paragraph contains five sentences in a row, each built as "clause, and clause." According to Strunk, the best remedy is to',
            options: [
              'recast some of them into shapes that show how the ideas relate',
              'replace every "and" with a semicolon so the clauses stay equal',
              'split each one into two short sentences of the same length',
              'vary the vocabulary so that no connecting word is ever repeated'
            ],
            correctAnswer: 0,
            explanation: 'Strunk says to recast enough of the sentences to remove the monotony, choosing whichever forms best represent the real relations of the thought. Swapping every "and" for a semicolon or splitting every sentence just creates a new uniform pattern, and changing words leaves the structure untouched.'
          }
        ]
      }
    }
  ]
};
