export const englangStyleWritingPart6Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'englangs6-intro',
      type: 'text' as const,
      content: `
# 🖋️ Style in Writing

**Part 6 of 7 — Exam Practice: Revising Drafts and Earning Row C**

---

| Section |
|---------|
| How Section I Writing Questions Work |
| Practice Set: A Student Draft on Mill Creek |
| Reviewing the Reasoning |
| Annotated Question 3 Paragraph: From Row B to Row C Style |

> 🔑 **Key Concept:** The multiple-choice section has 45 questions in 60 minutes, and about 20 to 22 of them are **writing** questions. Each set gives you a student's draft with numbered sentences and asks how the writer should revise it to accomplish a stated goal. These questions test skills 8.A, 8.B, and 8.C directly: word choice for tone, combining sentences, placing and cutting material, and punctuation.

## How Section I Writing Questions Work

| Stem | What to do |
|---|---|
| "The writer wants to... Which choice best accomplishes this goal?" | Reread the goal. The right answer meets **that** goal; a choice that is merely well written but does something else is wrong. |
| "Which version of sentence 4 (reproduced below)..." | Read the sentences before and after. Check grammar first, then tone and logic in context. |
| "The writer wants to combine sentences 3 and 4..." | Decide which idea the writer needs to stress, then find the version that puts it in the main clause (Part 3). |
| "Where would it best be placed?" | Find the sentence the new material explains or supports. Check that pronouns and transitions still work. |
| "Should the writer make this addition/deletion?" | Judge relevance to the paragraph's claim. Then check that the **reason** given in your choice is accurate. |

Two habits save time. First, eliminate any choice with a grammar or punctuation error before weighing style. Second, never choose an answer because it is the longest or most elaborate; the exam rewards the choice that fits the goal.
`
    },
    {
      id: 'englangs6-draft',
      type: 'text' as const,
      content: `
## Practice Set: A Student Draft on Mill Creek

The following is a draft of a student's opinion piece for the local newspaper (student model).

> (1) Beneath the parking lot behind Main Street runs Mill Creek, sealed inside a concrete pipe since 1956. (2) The town council is now considering a proposal to remove part of the lot and restore the creek to open air, a practice known as daylighting. (3) Critics say the plan would cost the town forty parking spaces. (4) They are right about that. (5) But the pipe is cracked and floods the lot after heavy rain, and repairing it would cost more than removing it. (6) An open channel can hold more water than a buried pipe. (7) Mill Creek also appears on a 1790 survey map of the county. (8) Towns that have daylighted streams report that the restored banks draw walkers, diners, and shoppers to nearby businesses. (9) A creek would give people a reason to linger downtown, it would do this more than a parking space does. (10) For seventy years the town has paved over its creek and paid to keep it hidden. (11) It is time to let it see the sun.

Before you answer, find the writer's claim (restore the creek), the concession (lost parking), and the two lines of support (flood control and business). Each question asks whether a change serves that structure.
`
    },
    {
      id: 'englangs6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice, Part A** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants to combine sentences 3 and 4 in a way that concedes the critics\' point and prepares for the counterargument in sentence 5. Which version best accomplishes this goal?',
            options: [
              'Critics say the plan would cost the town forty parking spaces, and they are right about that.',
              'Critics are right that the plan would cost the town forty parking spaces.',
              'Critics, who are right about that, say the plan would cost forty parking spaces.',
              'Although critics say it would cost forty parking spaces, they are right about it.'
            ],
            correctAnswer: 1,
            explanation: 'Stating that the critics are right grants the point in one clean clause, so the "But" of sentence 5 can turn against it. The "and" version is loose and wordy, the relative-clause version leaves "that" with nothing to refer to, and the "although" version contradicts itself.'
          },
          {
            question: 'In sentence 10, the writer is considering replacing "paved over" with another verb. Which choice best conveys disapproval of the town\'s past decision while keeping the measured tone of the draft?',
            options: [
              'buried',
              'strangled',
              'managed',
              'relocated'
            ],
            correctAnswer: 0,
            explanation: 'The creek was hidden underground, and the word suggests a loss without exaggerating it, which fits the draft\'s calm voice and its closing image of letting the creek "see the sun." The violent verb overstates, while the other two are neutral or inaccurate and drop the disapproval.'
          },
          {
            question: 'The writer wants to add this sentence: "Last August, water from the pipe stood a foot deep across the lot for two days." Where would it best be placed?',
            options: [
              'After sentence 2',
              'After sentence 5',
              'After sentence 8',
              'After sentence 10'
            ],
            correctAnswer: 1,
            explanation: 'Sentence 5 claims that the pipe floods the lot after heavy rain, and the August flood is a concrete instance of that claim. Elsewhere the sentence would interrupt the introduction, the point about business, or the conclusion.'
          }
        ]
      }
    },
    {
      id: 'englangs6-review',
      type: 'text' as const,
      content: `
## Reviewing the Reasoning

The first three items show the three most common ways a draft can be improved.

| Item | Skill | The move |
|---|---|---|
| Combining sentences 3 and 4 | 8.B | A concession stated once, plainly, sets up the turn on "But" |
| Replacing "paved over" | 8.A | The verb carries the writer's attitude; it must fit both the facts and the tone |
| Placing the flood detail | 8.B | Evidence belongs directly after the claim it supports |

### Addition and Deletion Questions

When a question asks whether to add or delete a sentence, two answers usually say "Yes" and two say "No," each with a reason. Settle the yes-or-no question first by asking whether the sentence supports the paragraph's claim. Then choose the reason that accurately describes what the sentence does. A choice with the right "Yes" and a false reason is still wrong.

### Revising for Correctness and Clarity Together

Some sentences have two problems at once, such as a comma splice and a roundabout phrase. The best revision fixes both. A choice that repairs the punctuation but keeps the wordiness is correct, yet it is not the most effective, and "most effective" is what the question asks for.
`
    },
    {
      id: 'englangs6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice, Part B** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The writer is considering deleting sentence 7. Should the writer make this deletion?',
            options: [
              'Yes, because it offers a detail unrelated to the case for restoring the creek.',
              'Yes, since it contradicts the date given for the pipe in sentence 1.',
              'No, because it shows the creek\'s long history and so supports its restoration.',
              'No, because it provides evidence for the claim about flooding in sentence 6.'
            ],
            correctAnswer: 0,
            explanation: 'An old survey map has nothing to do with flood control or downtown business, so the sentence interrupts the argument and should go. It does not conflict with the 1956 date, and it supports neither the case for restoration nor the claim about water capacity.'
          },
          {
            question: 'Which version of sentence 9 best corrects its error and states the comparison most clearly?',
            options: [
              'A creek would give people more reason to linger downtown than a parking space does.',
              'A creek would give people a reason to linger downtown; it would do this more than a parking space does.',
              'A creek would give people a reason to linger downtown, more than a parking space would do this.',
              'A creek, more than a parking space does, would give people a reason, to linger downtown.'
            ],
            correctAnswer: 0,
            explanation: 'Folding the comparison into "more reason... than" removes the splice and states the contrast in one clause. The semicolon version is correct but keeps the wordy "it would do this," and the other two remain awkward or add a comma that splits the verb from its object.'
          },
          {
            question: 'The writer wants to replace sentence 11 with a conclusion that weighs the cost against the benefit and ends on the main claim. Which choice best accomplishes this goal?',
            options: [
              'Restoring Mill Creek would cost forty parking spaces and return a downtown worth visiting.',
              'In conclusion, the town should think carefully about every side of the creek proposal.',
              'Mill Creek has been hidden for seventy years, which is a very long time for any creek.',
              'Some people will disagree with this plan, but everyone has a right to an opinion.'
            ],
            correctAnswer: 0,
            explanation: 'The sentence sets the conceded cost against the gain and ends on the benefit, the point the whole piece argues. The others retreat into a neutral summary, a vague observation, or a statement that abandons the argument.'
          }
        ]
      }
    },
    {
      id: 'englangs6-q3',
      type: 'text' as const,
      content: `
## Annotated Question 3 Paragraph: From Row B to Row C Style

**Prompt:** Write an essay that argues your position on the value of difficulty.

**Thesis:** *Difficulty is the price of understanding, and it is usually worth paying.*

### Version 1 (student model): solid reasoning, plain style

> Difficulty is valuable because it forces people to understand how things work. For example, when my bike chain kept slipping last summer, I could have taken it to a shop. Instead I spent three afternoons watching videos and trying different adjustments. Most of my attempts failed. Eventually I learned that the problem was a worn cog, not the chain. Because the process was hard, I learned how the gears work together, and now I can fix similar problems. If the shop had fixed it, I would have a working bike but no understanding. This shows that difficulty leads to real knowledge.

This paragraph has a clear claim, specific evidence, and commentary that explains what the evidence proves ("I would have a working bike but no understanding"). Across an essay, work like this can reach the top of **Row B**. Its style is clear but not yet doing persuasive work: "This shows that" announces a conclusion the reader has already drawn.

### Version 2 (student model): the same reasoning, written to persuade

> **(1)** Difficulty is the price of understanding, and it is usually worth paying. **(2)** Last summer my bike chain began to slip on every hill. **(3)** A shop would have fixed it in twenty minutes. **(4)** Instead I spent three afternoons with a borrowed wrench and a stack of tutorial videos, adjusting the derailleur, replacing the chain, failing, and failing again, until I found the real culprit: a single worn cog. **(5)** Those failures were not wasted time. **(6)** Each wrong guess taught me one more thing the problem was not, and by the end I understood the drivetrain as a system rather than a mystery. **(7)** The shop would have returned a working bike. **(8)** The struggle returned a mechanic.

### The Moves, Mapped to the Rubric

| Sentence | Style move | Why it persuades |
|---|---|---|
| 1 | Metaphor of price; concession built into "usually" | Frames the claim as a trade, which invites the reader to weigh it |
| 3 | Short sentence | Makes the easy option sound tempting before the paragraph rejects it |
| 4 | Long cumulative sentence with a parallel series ending in "failing, and failing again," then a colon | The sentence feels as long as the work; the colon reveals the answer as the repair did |
| 5 | Positive form through antithesis ("not wasted time") | Answers the reader's likely objection directly |
| 6 | Precise commentary; antithesis of "system" and "mystery" | Explains how failure produced knowledge, the heart of the claim |
| 7–8 | Parallel pair; emphatic end | "returned a working bike" against "returned a mechanic" turns the evidence into the thesis |

### What Row C Requires

One route to the sophistication point is "employing a style that is consistently vivid and persuasive." Three cautions:

- **Consistently** means the whole essay. One polished paragraph in an otherwise plain essay does not earn the point.
- **Persuasive** means the style serves the argument. Readers do not award the point for impressive vocabulary or elaborate sentences that do not strengthen the reasoning.
- Version 2 does not add evidence. Its commentary in sentence 6 is sharper, but its main gain is that every sentence is shaped to make the reader feel the trade between ease and understanding.
`
    },
    {
      id: 'englangs6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Analyze the Style Moves in Version 2** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sentence 3, "A shop would have fixed it in twenty minutes," mainly serves to ___',
            options: ['set up a contrast with the hard way', 'concede that the writer chose poorly', 'state the paragraph\'s main claim', 'shift the tone from serious to comic']
          },
          {
            label: 'The series "adjusting..., replacing..., failing, and failing again" uses ___ to mirror the writer\'s effort.',
            options: ['parallel structure', 'the passive voice', 'a rhetorical question', 'a dangling modifier']
          },
          {
            label: 'Ending with "The struggle returned a mechanic" places the key idea in ___',
            options: ['the sentence-final position', 'a subordinate clause of concession', 'a passive construction', 'a parenthetical aside']
          }
        ],
        correctAnswers: ['set up a contrast with the hard way', 'parallel structure', 'the sentence-final position'],
        hint1: 'Twenty minutes against three afternoons.',
        hint2: 'Several -ing words in matching form.',
        hint3: 'Strunk names the end as the emphatic position.',
        explanation: 'The quick fix sets up the three afternoons that follow, the matching -ing words form a parallel series that feels like repeated effort, and the final word of the paragraph sits in the most emphatic position.'
      }
    }
  ]
};
