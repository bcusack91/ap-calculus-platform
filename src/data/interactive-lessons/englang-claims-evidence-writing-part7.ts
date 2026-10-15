export const englangClaimsEvidenceWritingPart7Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'englangc7-intro',
      type: 'text' as const,
      content: `
# 🛠️ Claims and Evidence in Writing

**Part 7 of 7 — Review: Writing Claims, Evidence and Commentary Under Time**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| A Self-Scoring Checklist, Row by Row |
| Fresh Practice: Diagnose and Revise |

> 🔑 **Key Concept:** Everything in this topic serves one sequence: a **defensible claim**, **specific evidence**, and **commentary** that explains how the evidence supports a line of reasoning, with **qualifications** placed where the limits really are. This part reviews that sequence and gives you a checklist you can run in the last minutes of any essay.
`
    },
    {
      id: 'englangc7-toolkit',
      type: 'text' as const,
      content: `
## 📖 The Topic on One Page

### The Three Writing Skills

| Skill | What you do | Where we practiced it |
|---|---|---|
| **4.A** | Develop a paragraph with a claim and supporting evidence | The Langley paragraph (Part 3); the Johnson revision (Part 4) |
| **4.B** | Write a thesis that requires defense and may preview the argument | Theses for all three essays (Part 2); the Wilde introduction (Part 6) |
| **4.C** | Qualify a claim with modifiers, counterarguments or alternative perspectives | The cold fusion paragraph (Part 5); the Parks paragraph (Part 6) |

### Vocabulary

| Term | Meaning |
|---|---|
| **Defensible thesis** | A position a reasonable reader could dispute, so it requires support |
| **Open / closed thesis** | A thesis that names its claim and logic / one that also names each step |
| **Specific evidence** | Evidence with names, places, dates or details a reader can picture |
| **Commentary** | Explanation of what the evidence means, how it works, and why it supports the claim |
| **Warrant** | The assumption that connects a piece of evidence to a claim |
| **Integration** | Embedding quotations in your own sentences with a signal phrase or as a phrase |
| **Concede and refine** | Granting an objection and revising your claim to absorb it |
| **Over-hedging** | Stacking qualifiers until the claim commits to nothing |

### The Prompts in This Topic

| Prompt | Essay | Key lesson |
|---|---|---|
| Roosevelt, "Citizenship in a Republic," 1910 | Argument | Specific evidence that includes both terms of the prompt |
| Johnson to Chesterfield, 1755 | Rhetorical analysis | Commentary on mechanism and audience, not paraphrase |
| Free public transit | Synthesis | A qualified policy thesis |
| Wilde, "The Soul of Man under Socialism," 1891 | Argument | A thesis built on a tension, sustained for Row C |
`
    },
    {
      id: 'englangc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Quick Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence is commentary rather than evidence or paraphrase?',
            options: [
              'Johnson waited in Chesterfield\'s outer rooms for help that never came.',
              'Johnson says that the help came after he no longer needed it from anyone.',
              'The question form makes the lord supply the insult, so he cannot object.',
              'Johnson\'s letter was written in 1755, just before his dictionary appeared.'
            ],
            correctAnswer: 2,
            explanation: 'Explaining how the question form traps Chesterfield is analysis of a choice and its effect. The other sentences report events, paraphrase the letter, or give dates.'
          },
          {
            question: 'A student\'s argument paragraph contains a specific example and a sentence restating it, but no explanation of why the example proves the claim. What is missing?',
            options: [
              'a thesis',
              'a warrant',
              'a citation',
              'a hook'
            ],
            correctAnswer: 1,
            explanation: 'The warrant is the commentary that explains why the evidence supports the claim, and it is what the paragraph lacks. A thesis, a citation or a hook would not supply that link.'
          }
        ]
      }
    },
    {
      id: 'englangc7-checklist',
      type: 'text' as const,
      content: `
## A Self-Scoring Checklist, Row by Row

Use the last three or four minutes of each essay to run this check. Fix the first problem you find in each row.

### Row A: Thesis (0–1)

- [ ] Does one sentence, or a few adjacent sentences, take a **position** (Q1, Q3) or **analyze choices** (Q2)?
- [ ] Could a reasonable reader disagree?
- [ ] Is it more than a restatement of the prompt or a summary of the passage?

### Row B: Evidence and Commentary (0–4)

- [ ] Does every body paragraph open with a claim tied to the thesis?
- [ ] Is each piece of evidence **specific** (names, details, short embedded quotations)?
- [ ] Synthesis only: have I cited **at least three** sources by letter or author?
- [ ] Does each piece of evidence get at least one sentence explaining **how** or **why** it supports the claim?
- [ ] Does each paragraph end with my commentary, not a quotation?

### Row C: Sophistication (0–1)

- [ ] Does the essay explore a **tension or limit** throughout, not just in one sentence?
- [ ] Is any concession a real one, granting the strongest opposing point?
- [ ] Rhetorical analysis: do I explain choices in light of the **situation**, such as audience, occasion and purpose?

### Quick Fixes When Time Is Short

| Problem found | Fastest fix |
|---|---|
| No clear thesis | Add one sentence at the end of the introduction stating position plus reason |
| Evidence with no commentary | Add one "This matters because..." sentence after each piece |
| Paragraph ends on a quotation | Add a closing sentence linking to the thesis |
| Claim too absolute | Insert one precise limit: "when...," "in cases where...," "most often..." |
`
    },
    {
      id: 'englangc7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A thesis must be _______: a reasonable reader could disagree with it.

2) The synthesis essay requires evidence from at least this many provided sources (write a numeral): _______.

3) Granting an objection and revising your claim to absorb it is called concede and _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['defensible', '3', 'refine'],
        hint1: 'It can be argued for and against.',
        hint2: 'Row B for synthesis names a minimum number of sources.',
        hint3: 'The claim becomes more precise.',
        explanation: 'Row A requires a defensible thesis, synthesis Row B requires evidence from at least three sources, and concede-and-refine turns an objection into a better claim.'
      }
    },
    {
      id: 'englangc7-practice',
      type: 'text' as const,
      content: `
## Fresh Practice: Diagnose and Revise

**Prompt (argument):** Write an essay that argues your position on whether high schools should require every student to learn a musical instrument.

**Student paragraph (draft):**

> **(1)** Schools should require music because music is very important. **(2)** Music has been around for thousands of years in every culture. **(3)** Everyone likes some kind of music. **(4)** "Music gives a soul to the universe," as a famous quotation says. **(5)** Therefore, all students should have to learn an instrument.

### Diagnosis

| Sentence | Problem |
|---|---|
| 1 | Claim rests on a vague reason ("very important") |
| 2–3 | General evidence; neither shows why **learning an instrument** in school matters |
| 4 | An unattributed quotation, and one that is often misattributed online; it is dropped in with no commentary |
| 5 | Restates sentence 1; no warrant connects evidence to claim |
| Overall | No qualification, though "every student" invites the obvious objection about cost and choice |

### One Possible Revision

> **(1)** Schools should require a year of instrumental music, because learning an instrument teaches a kind of persistence that few other classes demand. **(2)** A beginning violinist practices the same eight bars for weeks, and the improvement is audible only to someone who keeps going. **(3)** Unlike a test, which rewards the night before, an instrument rewards the hundredth repetition, so it trains students to value slow progress. **(4)** A single required year would not make every student a musician, and it should not; but it would give every student at least one experience of getting better at something difficult through practice alone.

The revision gives a specific reason, a concrete example, a warrant that explains the example, and a qualification ("a single required year") that answers the strongest objection.
`
    },
    {
      id: 'englangc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the revised music paragraph, sentence 3 ("Unlike a test, which rewards the night before...") functions primarily as',
            options: [
              'a counterargument against the claim',
              'commentary that states the warrant',
              'a second, unrelated piece of evidence',
              'a restatement of the opening claim'
            ],
            correctAnswer: 1,
            explanation: 'Sentence 3 explains why the violin example supports the claim about persistence, which is the job of a warrant. It does not argue against the claim, introduce new evidence, or simply restate sentence 1.'
          },
          {
            question: 'Why is sentence 4 of the draft ("Music gives a soul to the universe," as a famous quotation says) weak evidence?',
            options: [
              'It has no named source and no commentary to explain it.',
              'It is too short to count as a quotation in an argument essay.',
              'Quotations are not permitted in the argument essay at all.',
              'It contradicts the claim that music should be required.'
            ],
            correctAnswer: 0,
            explanation: 'Without a reliable source or any explanation, the quotation supports nothing. Short quotations are fine, quotations are allowed in argument essays, and the line does not contradict the claim.'
          },
          {
            question: 'Which addition would most help the revised paragraph toward Row C if the idea were developed across the essay?',
            options: [
              'A list of famous musicians who learned instruments as children.',
              'A sentence repeating that music is important in every culture.',
              'A tension between building persistence and killing a love of music.',
              'A dictionary definition of the word "instrument" to open the paragraph.'
            ],
            correctAnswer: 2,
            explanation: 'Exploring the tension between required practice and genuine interest is the kind of complexity that sophistication rewards. A list of names, a repetition or a definition adds no complexity.'
          }
        ]
      }
    }
  ]
};
