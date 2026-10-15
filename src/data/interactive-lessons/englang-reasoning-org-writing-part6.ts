export const englangReasoningOrgWritingPart6Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'englangr6-intro',
      type: 'text' as const,
      content: `
# 🧱 Reasoning and Organization in Writing

**Part 6 of 7 — Exam Practice: Writing Questions and an Annotated Essay**

---

| Section |
|---------|
| 📖 Section I Writing Questions on Organization |
| Practice Set: a Student Draft About Franklin |
| An Annotated Argument Essay Mapped to the Rubric |

> 🔑 **Key Concept:** Skills 6.A, 6.B and 6.C are tested twice. **Section I** has 45 multiple-choice questions in 60 minutes, each with four options: about 23–25 reading questions and 20–22 **writing** questions, which ask you to revise student drafts. Many of those writing questions are about organization: where a sentence belongs, which transition fits, which sentence to cut, how to conclude. **Section II** (2 hours 15 minutes, including a 15-minute reading period) has the synthesis, rhetorical analysis and argument essays, each scored out of 6: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), and **Row C** sophistication (0–1).
`
    },
    {
      id: 'englangr6-draft',
      type: 'text' as const,
      content: `
## 📖 Section I Writing Questions on Organization

| Question type | Typical stem | What to settle before reading the options |
|---|---|---|
| **Placement** | "Where would sentence 6 best be placed?" | What the sentence refers back to, and what must come after it |
| **Transition in context** | "Which choice best introduces sentence 8?" | The relationship between the two sentences, in your own words |
| **Delete** | "Which sentence should be deleted to improve the focus?" | The paragraph's one job, from its topic sentence |
| **Add** | "Should the writer add this sentence? Yes, because... No, because..." | Whether the sentence serves the paragraph's job, not whether it is true |
| **Conclusion** | "Which choice most effectively concludes the paragraph?" | What the paragraph has established and what it implies |

### Practice Set: a Student Draft About Franklin

*The following is a draft of an essay a student is writing for a class on American writers. (The draft is invented for practice; the facts about Franklin come from his* Autobiography*.)*

**Paragraph 1**

> *(1) Benjamin Franklin left school at the age of ten, yet he became one of the best-known writers in colonial America. (2) As a teenager working in his brother's printing house, he came across a volume of the Spectator, an English periodical of essays. (3) He took brief notes on several of its essays, set the notes aside for a few days, and then tried to rewrite each essay in his own words. (4) Finally, he compared his version with the original and corrected his faults. (5) Franklin also became a printer, a scientist, and a diplomat. (6) Sometimes he scrambled his notes and, weeks later, tried to arrange them in the best order before writing.*

**Paragraph 2**

> *(7) Students today are often told to "find their own voice" before they have studied anyone else's. (8) Franklin's method suggests the opposite order. (9) By imitating a model closely, he learned which choices made the Spectator's prose work, and he could then make those choices on his own. (10) [Concluding sentence]*
`
    },
    {
      id: 'englangr6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Practice Writing Questions** 🎯

Use the Franklin draft above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence should be deleted because it interrupts the focus of paragraph 1?',
            options: [
              'Sentence 2',
              'Sentence 3',
              'Sentence 5',
              'Sentence 6'
            ],
            correctAnswer: 2,
            explanation: 'Paragraph 1 describes how Franklin taught himself to write, and his later careers do not belong to that sequence. Sentence 2 sets up the Spectator, while sentences 3 and 6 describe steps in his method.'
          },
          {
            question: 'Where would sentence 6 best be placed to improve the logical order of paragraph 1?',
            options: [
              'Before sentence 2',
              'After sentence 2',
              'After sentence 3',
              'After sentence 7'
            ],
            correctAnswer: 2,
            explanation: 'Sentence 6 describes a variation on the rewriting step, so it belongs right after sentence 3, leaving "Finally" in sentence 4 to close the sequence. Before or after sentence 2 the notes have not yet been introduced, and sentence 7 begins a different paragraph.'
          },
          {
            question: 'The writer wants to revise the beginning of sentence 8 to make the relationship to sentence 7 clearer. Which choice best accomplishes this goal?',
            options: [
              'In addition, Franklin\'s method',
              'For example, Franklin\'s method',
              'On the other hand, Franklin\'s method',
              'As a result, Franklin\'s method'
            ],
            correctAnswer: 2,
            explanation: 'Sentence 7 describes advice to find one\'s voice first, and sentence 8 says Franklin\'s method reverses that order, which is a contrast. Adding, exemplifying, or presenting a result misstates how the two sentences relate.'
          },
          {
            question: 'The writer is considering adding this sentence after sentence 1: "Franklin was born in Boston in 1706 and was one of seventeen children." Should the writer make this addition?',
            options: [
              'Yes, because it gives readers background they need to follow the paragraph',
              'Yes, because it explains why Franklin had to leave school at an early age',
              'No, because its biographical detail does not serve the paragraph\'s focus',
              'No, because it contradicts what sentence 2 says about Franklin\'s boyhood'
            ],
            correctAnswer: 2,
            explanation: 'The paragraph is about Franklin\'s method of teaching himself to write, and his birthplace and family size do not advance it. Readers can follow the paragraph without the detail, the sentence does not explain his leaving school, and nothing in it conflicts with sentence 2.'
          },
          {
            question: 'Which choice most effectively concludes paragraph 2 by stating the implication of the writer\'s argument?',
            options: [
              'In conclusion, Franklin was one of the most important writers in American history.',
              'Franklin later wrote his Autobiography, the book in which he describes the method.',
              'A voice worth finding may begin as a careful echo of somebody else\'s voice.',
              'Today most students write on computers rather than with pens and printing presses.'
            ],
            correctAnswer: 2,
            explanation: 'The paragraph argues that imitation should come before originality, and the echo sentence states what that means for a writer\'s voice. Praising Franklin restates nothing the paragraph argued, the note about the Autobiography is background, and the remark about computers changes the subject.'
          }
        ]
      }
    },
    {
      id: 'englangr6-model',
      type: 'text' as const,
      content: `
## An Annotated Argument Essay Mapped to the Rubric

**Prompt (AP style, not released):** In his Farewell Address (1796), George Washington warned against "the baneful effects of the spirit of party," which he said "serves always to distract the public councils and enfeeble the public administration." Write an essay that argues your position on the extent to which loyalty to a group harms the decisions that group makes.

### Student model: introduction

> *(1) Washington feared parties because they ask members to stand with a side before they have weighed a question. (2) Yet he also admitted that the opinion that parties keep governments honest was, "within certain limits," probably true. (3) That admission holds the key to the problem. (4) Loyalty to a group harms its decisions when the loyalty is to winning, but it can improve them when the loyalty is to a goal the group shares, because then disagreement serves the goal instead of the side.*

| Sentence | Rubric and skill work |
|---|---|
| (1)–(2) | Uses the prompt's source fairly, including Washington's own concession |
| (3) | A **bridge** (6.B): "That admission" names the antecedent and turns the essay toward its thesis |
| (4) | **Row A**: a defensible, qualified thesis whose two halves preview a line of reasoning (6.A) |

### Student model: first body paragraph

> *(5) Loyalty to winning damages decisions first by deciding them in advance. (6) Last year our student council split into two friend groups over whether to spend its budget on a spring dance or on supplies for clubs. (7) Before any data was presented, each group had chosen its side, and the vote ended 6–5 along friendship lines, even after a survey showed that more students belonged to clubs than had attended the previous dance. (8) The survey did not lose the argument; it was never part of the argument, because the members were loyal to their side rather than to the students they represented. (9) This is the distraction Washington named: not disagreement, which a council needs, but disagreement settled by membership instead of evidence. (10) If loyalty to a side shuts evidence out, the question becomes what kind of loyalty would let it back in.*

| Sentence | Method and rubric work |
|---|---|
| (5) | **Claim** in the line of reasoning; "first" previews a sequence |
| (6)–(7) | **Narration** with specific detail (6.C): the split, the vote, the survey |
| (8) | **Commentary** that explains how the evidence supports the claim |
| (9) | Commentary that ties the case to the prompt's source and **distinguishes** good disagreement from bad, a complexity |
| (10) | **Exit sentence** that hands the reasoning to the second body paragraph |

### How the rows would read this essay if it continued at this level

- **Row A (1):** sentence (4) takes a defensible position on the extent of the harm.
- **Row B (heading toward 4):** specific evidence supports the claim, and commentary consistently explains how; the second body paragraph would need equally specific evidence for the "shared goal" claim.
- **Row C (possible):** the essay explores a tension, between loyalty that distorts and loyalty that directs, starting from Washington's own concession. To earn the point, that tension must develop across the whole essay, not appear only in the introduction.
`
    },
    {
      id: 'englangr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Rubric Check** 🎯

Use the annotated argument essay above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature of the introduction does the most to set up a line of reasoning rather than a list?',
            options: [
              'Its opening quotes the source word for word to show accuracy',
              'Its thesis names two kinds of loyalty that the body paragraphs must contrast',
              'Its sentences grow steadily longer from the first to the last one',
              'Its tone shows respect for Washington, which wins over readers'
            ],
            correctAnswer: 1,
            explanation: 'A thesis that divides loyalty into a harmful kind and a helpful kind commits the essay to a sequence: show the harm, then show the alternative. Quotation, sentence length and tone do not determine how the claims relate.'
          },
          {
            question: 'Sentence 8 ("The survey did not lose the argument; it was never part of the argument...") contributes to Row B mainly by',
            options: [
              'adding a second example about the student council',
              'explaining how the council vote supports the claim',
              'conceding that the council was right to ignore the survey',
              'restating the thesis from the introduction in new words'
            ],
            correctAnswer: 1,
            explanation: 'The sentence explains what the vote shows: members were loyal to a side, so evidence played no role, which is commentary connecting evidence to claim. It adds no new example, concedes nothing, and argues something narrower than the thesis.'
          },
          {
            question: 'Why is sentence 10 an effective way to end the first body paragraph?',
            options: [
              'It summarizes the student council example for any reader who skimmed it',
              'It quotes Washington a final time so that the paragraph ends on authority',
              'It turns what the paragraph established into the question the next paragraph takes up',
              'It shows that the writer is uncertain, which the rubric rewards as nuance'
            ],
            correctAnswer: 2,
            explanation: 'The exit sentence draws a consequence from the paragraph and poses the question the "shared goal" paragraph will answer, which carries the line of reasoning forward. It does not summarize, it contains no quotation, and its question is a hand-off, not uncertainty.'
          }
        ]
      }
    },
    {
      id: 'englangr6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Question Type** 🔍

Choose the type of Section I writing question each stem represents.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Where would sentence 4 best be placed?" ___',
            options: ['placement', 'transition', 'delete or add', 'conclusion']
          },
          {
            label: '"Which choice best connects sentence 8 to sentence 7?" ___',
            options: ['placement', 'transition', 'delete or add', 'conclusion']
          },
          {
            label: '"Should the writer keep or remove sentence 5?" ___',
            options: ['placement', 'transition', 'delete or add', 'conclusion']
          }
        ],
        correctAnswers: ['placement', 'transition', 'delete or add'],
        hint1: 'It asks where a sentence goes.',
        hint2: 'It asks how two sentences connect.',
        hint3: 'It asks whether a sentence stays.',
        explanation: 'Placement questions ask where a sentence belongs, transition questions ask how two sentences relate, and delete-or-add questions ask whether a sentence serves the paragraph\'s purpose.'
      }
    }
  ]
}
