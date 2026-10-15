export const englangClaimsEvidencePart7Data = {
  topicSlug: 'englang-claims-evidence',
  sections: [
    {
      id: 'englangc7-intro',
      type: 'text' as const,
      content: `
# 📋 Claims and Evidence

**Part 7 of 7 — Review: Reading and Writing Arguments**

---

| Section |
|---------|
| 📖 The Toolkit on One Page |
| Reading a Fresh Passage: Wollstonecraft and Thoreau |
| ✍️ Writing Checklist for Timed Essays |

> 🔑 **Key Concept:** The same four questions drive both halves of the exam. **What is the claim? What supports it? How does the support connect to the claim? How far does the claim extend?** On multiple-choice questions you answer them about someone else's argument; in the essays you answer them about your own.
`
    },
    {
      id: 'englangc7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Toolkit on One Page

### The Six Skills in This Topic

| Skill | Reading (Section I and rhetorical analysis) | Writing (all three essays) |
|---|---|---|
| Claims and evidence | **3.A** Identify and explain claims and evidence | **4.A** Build paragraphs with a claim, evidence and commentary |
| Thesis | **3.B** Identify the overarching thesis and any preview of structure | **4.B** Write a defensible thesis that may preview the line of reasoning |
| Qualification | **3.C** Explain how modifiers, counterarguments and alternative perspectives qualify claims | **4.C** Qualify your own claims with the same tools |

### Vocabulary

| Term | Meaning |
|---|---|
| **Thesis** | The overarching claim the whole piece defends |
| **Claim** | A statement that requires defense with evidence |
| **Defensible** | Open to reasonable disagreement, so it must be proved |
| **Evidence** | Specific support: facts, examples, anecdotes, data, testimony, hypothetical cases, observations |
| **Commentary** | The writer's explanation of how the evidence supports the claim |
| **Sufficient** | Enough evidence, of good enough quality, to fit the size of the claim |
| **Modifier** | A word or phrase limiting a claim's degree, scope, condition or certainty |
| **Concession** | Accepting all or part of an opposing claim |
| **Rebuttal** | Offering a contrasting perspective on an opposing argument |
| **Refutation** | Showing with evidence that all or part of an opposing argument is false |

### The Texts in This Topic

| Text | What it taught |
|---|---|
| Thoreau, "Civil Disobedience" (1849) | Claims from principle; personal experience as evidence; qualifying a radical motto |
| Wollstonecraft, *A Vindication of the Rights of Woman* (1792) | An explicitly announced thesis; analogy as commentary |
| Woolf, *A Room of One's Own* (1929) | A chain of claims; a hypothetical as evidence; narrowing scope |
| Lincoln, letter to Horace Greeley (August 22, 1862) | A thesis qualified by separating official duty from personal wish |
| Twain, "Corn-pone Opinions" (written 1901) | A sweeping claim, its evidence, and where the two fail to match |
`
    },
    {
      id: 'englangc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer argues that city parks reduce stress, cites a study of park visitors in three cities, and then explains that the visitors\' lower heart rates show the effect is physical, not only a matter of mood. The explanation is best described as',
            options: [
              'a refutation of the study\'s findings',
              'commentary linking the data to the claim',
              'a modifier that narrows the claim\'s scope',
              'a second piece of evidence from the study'
            ],
            correctAnswer: 1,
            explanation: 'The writer interprets what the heart-rate data shows and connects it to the claim, which is commentary. It supports the study rather than refuting it, it does not narrow the claim, and it adds reasoning rather than new data.'
          },
          {
            question: 'Which thesis would most likely earn the Row A point for an essay on whether school cafeterias should ban sugary drinks?',
            options: [
              'Sugary drinks are sold in many school cafeterias across the country.',
              'Schools should ban sugary drinks from cafeterias but not from vending machines.',
              'The debate over sugary drinks in schools has continued for many years.',
              'This essay will look at the arguments on both sides of the cafeteria drink issue.'
            ],
            correctAnswer: 1,
            explanation: 'The thesis that bans sugary drinks from cafeterias while sparing vending machines takes a qualified position a reader could dispute. The other three state a fact, describe a debate, or announce a topic, and none takes a position.'
          }
        ]
      }
    },
    {
      id: 'englangc7-reading',
      type: 'text' as const,
      content: `
## Reading a Fresh Passage: Wollstonecraft and Thoreau

### Wollstonecraft Answers an Opponent

In chapter 4 of *A Vindication of the Rights of Woman* (1792), Wollstonecraft quotes the philosopher Jean-Jacques Rousseau, whose views on women's education she attacks throughout the book, and turns his warning into her goal:

> "'Educate women like men,' says Rousseau, 'and the more they resemble our sex the less power will they have over us.' This is the very point I aim at. I do not wish them to have power over men; but over themselves."

| Step | Answer |
|---|---|
| **What is the opposing claim?** | Educating women like men will cost them their power over men |
| **How does she respond?** | She accepts the predicted consequence ("This is the very point I aim at") and denies that it is a loss |
| **What qualification follows?** | "I do not wish them to have power over men; but over themselves" limits her aim: not dominance, but self-government |
| **Why does it work?** | Readers who feared that educated women would seek power over men are told that she seeks something else entirely |

### Thoreau Ranks Two Values

> "It is not desirable to cultivate a respect for the law, so much as for the right."

The phrase "so much as" is a quiet modifier. Thoreau does not say that respect for the law is worthless; he ranks it **below** respect for the right. A careless reader who summarizes the sentence as "Thoreau rejects the law" overstates the claim, and on a multiple-choice question that overstatement is usually a wrong answer.

### A Reading Routine

| Step | Ask |
|---|---|
| 1 | What is the writer's main claim here, in my own words? |
| 2 | What support is offered, and of what kind? |
| 3 | What does the support do: illustrate, clarify, exemplify, associate, amplify or qualify? |
| 4 | Which words limit the claim (modifiers, concessions, other perspectives)? |
| 5 | Does each answer choice match the claim's actual scope, no stronger and no weaker? |
`
    },
    {
      id: 'englangc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Move** 🔍

Choose the move each sentence makes.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Granted, a later start time would complicate after-school sports schedules." This sentence is ___',
            options: ['a concession', 'a refutation', 'a modifier', 'a hypothetical case']
          },
          {
            label: '"Opponents say the program wastes money, but the city\'s own audit found it under budget for five straight years." This sentence ends with ___',
            options: ['a concession', 'a refutation', 'a modifier', 'a hypothetical case']
          },
          {
            label: '"Imagine a student who must choose between a library card and a bus pass." This sentence offers ___',
            options: ['a concession', 'a refutation', 'a modifier', 'a hypothetical case']
          },
          {
            label: 'In "Homework rarely helps students in the early grades," the word "rarely" is ___',
            options: ['a concession', 'a refutation', 'a modifier', 'a hypothetical case']
          }
        ],
        correctAnswers: ['a concession', 'a refutation', 'a hypothetical case', 'a modifier'],
        hint1: '"Granted" signals that the writer accepts a point from the other side.',
        hint2: 'The audit is evidence that the opposing claim is false.',
        hint3: '"Imagine" introduces an invented example.',
        explanation: '"Granted" opens a concession. The audit result uses evidence to show the opponents\' claim is false, which is a refutation. "Imagine a student" introduces a hypothetical case. "Rarely" limits the degree of the claim, so it is a modifier.'
      }
    },
    {
      id: 'englangc7-writing',
      type: 'text' as const,
      content: `
## ✍️ Writing Checklist for Timed Essays

### Before You Write (2–3 minutes)

1. Underline the prompt's task words ("the extent to which," "evaluate," "develop a position").
2. Write a thesis that takes a position on **that** question and could be disputed.
3. List two or three reasons; each becomes a body paragraph's claim.

### Each Body Paragraph

| Move | Check |
|---|---|
| Claim | Does it advance the thesis, not just name a topic? |
| Evidence | Is it specific: a name, a date, a quotation, a figure, a concrete example? |
| Commentary | After each piece of evidence, have I explained **how** it proves the claim? |
| Qualification | Have I limited the claim where my evidence stops, or answered an objection? |
| Link | Does the last sentence connect back to the thesis? |

### Common Fixes

| Problem | Fix |
|---|---|
| A quotation ends the paragraph | Add two sentences of commentary after it |
| "This shows that..." followed by a restated claim | Name **what** in the evidence shows it and **why** |
| One anecdote asked to prove a universal claim | Add a modifier, or add evidence of a different kind |
| "Some people may disagree" with nothing after it | State the objection specifically, then concede, rebut or refute it |
| A synthesis paragraph that summarizes Source A, then Source B | Start with your claim and use the sources to support it |

> 🔑 **AP Connection:** Row A rewards the defensible thesis (0–1). Row B rewards specific evidence and consistent commentary in a line of reasoning (0–4). Row C (0–1) can reward an argument that consistently explores complexities, which is where careful qualification pays off.
`
    },
    {
      id: 'englangc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the passage from chapter 4, Wollstonecraft\'s sentence "This is the very point I aim at" primarily serves to',
            options: [
              'admit that Rousseau has exposed a weakness in her argument',
              'adopt the result Rousseau warns against as her own purpose',
              'introduce a historical example that supports Rousseau\'s view',
              'shift her focus from the education of women to that of men'
            ],
            correctAnswer: 1,
            explanation: 'She takes the outcome Rousseau presents as a danger, that educated women would have less power over men, and claims it as her goal. She does not concede a weakness, she offers no historical example, and her subject remains the education of women.'
          },
          {
            question: 'Which paraphrase most accurately represents the scope of Thoreau\'s claim "It is not desirable to cultivate a respect for the law, so much as for the right"?',
            options: [
              'Respect for what is right matters more than respect for law.',
              'Citizens should feel no respect at all for any of the laws.',
              'Laws deserve respect only when most citizens have voted for them.',
              'Law and right deserve equal respect from every thoughtful citizen.'
            ],
            correctAnswer: 0,
            explanation: '"So much as" ranks respect for the right above respect for the law without rejecting the law entirely. The paraphrase rejecting all respect overstates the claim, the voting condition is not in the sentence, and treating the two as equal ignores the ranking.'
          },
          {
            question: 'A student\'s body paragraph ends with a quotation from Source B and no further sentences. The student wants to revise the paragraph to strengthen its Row B score. Which revision would best accomplish this goal?',
            options: [
              'Adding a second quotation from Source B that makes a similar point',
              'Adding an explanation of how the quotation supports the claim',
              'Replacing the quotation with a paraphrase of the same passage',
              'Moving the quotation to the start of the paragraph before the claim'
            ],
            correctAnswer: 1,
            explanation: 'Row B rewards commentary that explains how evidence supports a line of reasoning, and the paragraph currently has none after its evidence. Another similar quotation adds evidence without explanation, a paraphrase changes only the form of the evidence, and moving the quotation still leaves it unexplained.'
          }
        ]
      }
    }
  ]
};
