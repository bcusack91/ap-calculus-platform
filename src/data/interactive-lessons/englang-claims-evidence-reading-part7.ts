export const englangClaimsEvidenceReadingPart7Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'englangc7-intro',
      type: 'text' as const,
      content: `
# 📖 Claims and Evidence in Reading

**Part 7 of 7 — Review: Reading Any Argument for Its Claims**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| A Reading Routine and a Stem Bank |
| Fresh Practice: The Main Street Oaks |

> 🔑 **Key Concept:** Every argument you read on the exam can be mapped with the same questions. **What is the position, and where is it stated? What supports it, and is the support enough? Where does the writer limit or concede?** This part gathers the tools from Parts 1 through 6 and applies them to a new passage.
`
    },
    {
      id: 'englangc7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Topic on One Page

### The Three Reading Skills

| Skill | What you do | Where we practiced it |
|---|---|---|
| **3.A** | Identify and explain claims and evidence | Johnson's registrar examples and founding phrases (Part 3) |
| **3.B** | Identify the overarching thesis and any qualification of it | Eisenhower's delayed thesis and the word "unwarranted" (Part 2) |
| **3.C** | Explain how claims are qualified by modifiers, counterarguments and alternative perspectives | Roosevelt's conditions (Part 4); Du Bois's limited causal claim (Part 6) |

### Vocabulary

| Term | Meaning |
|---|---|
| **Thesis** | The overarching position the whole text defends; it may be stated early, delayed or implied |
| **Subclaim** | A supporting claim that sits beneath the thesis |
| **Evidence** | Specific support: examples, data, anecdotes, analogies, testimony, allusions, shared principles |
| **Inference** | A conclusion the writer draws from evidence |
| **Concession** | Granting part of an opposing view, usually before a turn word |
| **Voiced view** | A position the writer reports in order to answer it ("We are told...") |
| **Condition** | A qualification that makes a claim depend on something else ("only if," "provided") |
| **Scope limit** | A qualification that narrows whom or what the claim covers |
| **Degree modifier** | A word that limits how strongly or how often a claim holds ("often," "usually") |

### The Texts in This Topic

| Text | Main lesson |
|---|---|
| Eisenhower, Farewell Address, 1961 | A thesis can arrive after a sincere concession; one adjective can qualify it |
| Johnson, "The American Promise," 1965 | Evidence of fact (examples) and evidence of value (founding principles) work together |
| Roosevelt, "The Man with the Muck-Rake," 1906 | Emphatic praise plus a condition yields qualified approval |
| Abigail Adams to John Adams, 1776 | Tone decides what a claim means; a joke can carry a serious argument |
| Du Bois, *The Souls of Black Folk*, 1903 | Concession, evidence as a ledger, and a limited causal claim |
`
    },
    {
      id: 'englangc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Vocabulary in Context** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Du Bois\'s "One hesitates, therefore, to criticise a life which... has done so much" is a ___',
            options: ['concession', 'condition', 'subclaim', 'voiced view']
          },
          {
            label: 'Roosevelt\'s "provided always that... the attack is of use only if it is absolutely truthful" is a ___',
            options: ['condition', 'concession', 'subclaim', 'voiced view']
          },
          {
            label: 'Johnson\'s "the only way to pass these barriers is to show a white skin" is an ___',
            options: ['inference', 'allusion', 'anecdote', 'analogy']
          }
        ],
        correctAnswers: ['concession', 'condition', 'inference'],
        hint1: 'He grants Washington\'s achievement before "And yet."',
        hint2: 'The praise holds only when the attack is truthful.',
        hint3: 'It is the conclusion the registrar examples point to.',
        explanation: 'Du Bois concedes before criticizing, Roosevelt attaches a condition to his praise, and Johnson draws an inference from his examples.'
      }
    },
    {
      id: 'englangc7-routine',
      type: 'text' as const,
      content: `
## A Reading Routine and a Stem Bank

### Five Passes Through a Passage

1. **Situation first.** Read the introductory note: who, when, for whom. Audience explains evidence choices.
2. **Mark the turns.** Circle *yet, but, still, however, and yet, not... but*. The thesis often follows a turn.
3. **Label the statements.** Thesis, subclaim, evidence, inference, concession, voiced view.
4. **Underline the limits.** Conditions, scope limits and degree modifiers show how far the writer commits.
5. **Set the tone and strength.** Serious or playful? Warning or condemnation? Then answer.

### Stem Bank

| If the stem says... | Look for... |
|---|---|
| "The central claim of the passage is..." | The position every paragraph serves, at the writer's strength |
| "The example in paragraph X primarily serves to support the claim that..." | The claim just before or just after the example |
| "The writer qualifies the claim by..." | Conditions, scope limits, degree modifiers, concessions |
| "The phrase X primarily serves to..." | The phrase's job: concede, limit, illustrate, infer, anticipate an objection |
| "The writer's attitude toward X is best described as..." | Both halves of a qualified position |
| "Which of the following, if added, would most strengthen..." | Evidence that matches the claim's scope and the audience's doubt |
`
    },
    {
      id: 'englangc7-practice',
      type: 'text' as const,
      content: `
## Fresh Practice: The Main Street Oaks

*This passage was written for this practice, and its figures are hypothetical.*

> **(1)** We are told that the oaks on Main Street must come down because their roots crack the sidewalks and their branches threaten the power lines. **(2)** The complaints are real; last spring a falling limb cut power to forty homes for a day. **(3)** Yet the arithmetic of removal is worse than the arithmetic of repair. **(4)** The town's own engineer estimates that grinding and patching the sidewalks would cost less than a third of what removal and replanting would, and young trees need roughly twenty years to shade a street the way the oaks do now. **(5)** On a July afternoon last summer, the shaded block measured nine degrees cooler than the open lot beside the bank. **(6)** The town should not cut down the oaks, at least not until it has tried pruning the limbs and repairing the walks.

Before you answer, apply the routine: find the turn word, label each sentence, and underline the limit in sentence 6.
`
    },
    {
      id: 'englangc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Sentence 1 of the practice passage primarily serves to',
            options: [
              'state the writer\'s own position on the trees',
              'present a view that the writer will dispute',
              'offer statistical evidence about tree damage',
              'define the problem the engineer was hired to solve'
            ],
            correctAnswer: 1,
            explanation: '"We are told" signals a reported view, and sentence 3 turns against it. The writer\'s position comes in sentence 6, sentence 1 contains no data, and the engineer appears only later.'
          },
          {
            question: 'Which sentence states the thesis of the practice passage?',
            options: [
              'sentence 2',
              'sentence 3',
              'sentence 5',
              'sentence 6'
            ],
            correctAnswer: 3,
            explanation: 'Sentence 6 states the policy the passage defends, delayed until after the concession and the evidence. Sentence 2 is a concession, sentence 3 is the turn and a subclaim about cost, and sentence 5 is evidence.'
          },
          {
            question: 'The phrase "at least not until it has tried pruning the limbs and repairing the walks" qualifies the thesis by',
            options: [
              'making the claim depend on cheaper remedies coming first',
              'conceding that the oaks should be removed as soon as possible',
              'limiting the claim to the oaks that stand beside the bank',
              'introducing the engineer as an authority on tree removal'
            ],
            correctAnswer: 0,
            explanation: 'The phrase sets a condition: the writer opposes removal for now, until the cheaper fixes have been tried. It does not concede immediate removal, narrow the claim to certain trees, or introduce the engineer.'
          },
          {
            question: 'Which piece of evidence would most strengthen the writer\'s argument for an audience worried chiefly about power outages?',
            options: [
              'A resident\'s memory of picnics held beneath the oaks.',
              'A record showing pruned oaks rarely drop large limbs.',
              'A survey ranking Main Street the town\'s prettiest road.',
              'A study of the history of oak trees in North America.'
            ],
            correctAnswer: 1,
            explanation: 'The audience\'s doubt is about falling limbs, so evidence that pruning prevents them answers that doubt directly. Memories, beauty rankings and general history do not address outages.'
          }
        ]
      }
    },
    {
      id: 'englangc7-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

1) In the practice passage, sentence 2 ("The complaints are real") is a _______.

2) The word that marks the turn in the practice passage is _______.

3) A thesis that appears only after context or concession is called a _______ thesis.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['concession', 'yet', 'delayed'],
        hint1: 'The writer grants part of the opposing case.',
        hint2: 'It opens sentence 3.',
        hint3: 'It arrives later than the first paragraph.',
        explanation: 'Sentence 2 concedes, "Yet" turns, and the thesis arrives late, so it is delayed.'
      }
    },
    {
      id: 'englangc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Review Across the Topic** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Eisenhower, Roosevelt and Du Bois all do which of the following before stating their main criticism?',
            options: [
              'cite statistics',
              'grant a point',
              'tell a story',
              'quote a critic'
            ],
            correctAnswer: 1,
            explanation: 'Eisenhower grants the need for military strength, Roosevelt grants the need for exposure, and Du Bois grants Washington\'s achievement. None relies chiefly on statistics, a story or a quoted critic before the turn.'
          },
          {
            question: 'What do Johnson\'s quotation of the Declaration and Adams\'s phrase "no voice, or Representation" have in common?',
            options: [
              'Both use principles the audience already holds to support a new demand.',
              'Both quote documents that were written by the speaker or writer.',
              'Both introduce statistics that the audience would find surprising.',
              'Both concede that the audience\'s principles are out of date.'
            ],
            correctAnswer: 0,
            explanation: 'Johnson invokes the founding principles and Adams invokes the colonists\' complaint about representation, each to show that the audience\'s own beliefs require the change. Neither quotes their own writing, offers statistics or calls the principles outdated.'
          }
        ]
      }
    }
  ]
};
