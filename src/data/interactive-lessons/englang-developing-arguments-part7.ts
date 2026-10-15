export const englangDevelopingArgumentsPart7Data = {
  topicSlug: 'englang-developing-arguments',
  sections: [
    {
      id: 'englangd7-intro',
      type: 'text' as const,
      content: `
# 🧠 Developing Arguments

**Part 7 of 7 — Review: Choosing the Right Development Move**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| Key Terms |
| The Mentor Texts in One Line Each |
| Mixed Practice: One Prompt, Every Move |

> 🔑 **Key Concept:** Development is a set of choices, not a length requirement. Each move in this topic answers a specific weakness in a draft: an undefined key term, a thin example, an unexamined objection, a conclusion that stops short. This review lets you diagnose the weakness and pick the move.

## 📖 The Topic on One Page

| If your plan or draft... | The move it needs | Mentor model | Part |
|---|---|---|---|
| Uses the prompt's key term in more than one sense | **Define**: concede, stipulate, define negatively or by degree | Douglass, "Self-Made Men" | 2 |
| Has examples that only agree with you | **Test**: choose evidence where the claim could have failed | Douglass's own literacy; Gatsby's patrons | 2 |
| Lists many names without explaining any | **Extend**: situate, narrate the turn, interpret, complicate | Hazlitt's Baxter anecdote; the Semmelweis paragraph | 3 |
| Is threatened by an obvious exception | **Distinguish**: separate two ideas the exception blurs | Hazlitt on Porson; James on virtues and war | 3, 4 |
| Answers an absolute claim | **Counterexample**: one case that breaks "only" or "always" | James's priests and doctors | 4 |
| Treats the other side as simply wrong | **Grant a value, move the point** | James and J. J. Chapman's advice | 4 |
| Ends where it began | **Revise the claim** after a concession, or draw an **implication** | James's national service; Douglass on "fair play" | 4, 5 |
| Concludes by restating the thesis | **Implication**, limitation, or crystallizing contrast | Douglass on detraction; Hazlitt on Shakespeare | 5 |

### The Rubric, Row by Row

| Row | What development contributes |
|---|---|
| **A: Thesis (0–1)** | A position of **degree**, often with a built-in distinction, answers a "to what extent" prompt directly |
| **B: Evidence and commentary (0–4)** | Specific evidence for **every** claim and commentary that consistently explains it: extended examples, tested evidence |
| **C: Sophistication (0–1)** | Tensions explored throughout, or implications and limitations situated in a broader context, as part of the argument rather than a phrase |
`
    },
    {
      id: 'englangd7-terms',
      type: 'text' as const,
      content: `
## Key Terms

| Term | Meaning |
|---|---|
| **Invention** | Finding what can be said, by questioning the prompt's key term, causes, context, objections, and consequences |
| **Key term** | The word in a prompt that can be read more than one way and decides what counts as evidence |
| **Stipulation** | Declaring the sense in which you will use a term |
| **Negative definition** | Defining something by what it lacks or is not |
| **Test vs. illustration** | A test is evidence that could have gone against the claim; an illustration only shows the claim in action |
| **Catalog** | Many brief examples showing that a pattern is widespread |
| **Composite portrait** | A single type built from many observations |
| **Extended example** | One case developed in enough detail to show how and why |
| **Distinction** | Separating two ideas that a claim or counterexample treats as one |
| **Counterexample** | A single case that breaks a universal claim |
| **Concession that changes the claim** | Granting a point so fully that the writer's position is revised |
| **Redefinition** | Reopening a key term so that it demands more, or less, than it seemed to |
| **Implication** | A consequence that follows if the argument is right |

## The Mentor Texts in One Line Each

| Text | What it models |
|---|---|
| Frederick Douglass, "Self-Made Men" (lecture first given 1859; Carlisle text, 1893) | Invention by questions; definition that concedes its own term; redefining "fair play"; ending by turning criticism into support |
| William Hazlitt, "On the Ignorance of the Learned," *Table-Talk* (1821) | Catalog vs. composite portrait vs. anecdote; absorbing a counterexample through distinction; a crystallizing final contrast |
| William James, "The Moral Equivalent of War" (1910) | Diagnosing one's own side; granting the opponent's values; distinction, counterexample, and a concession that produces a new proposal |
`
    },
    {
      id: 'englangd7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hazlitt and James each face a case that seems to contradict their claim. What do Hazlitt\'s handling of Porson and James\'s handling of "the martial virtues" have in common?',
            options: [
              'Both writers ignore the troublesome case and move to safer ground.',
              'Both writers abandon their original claim once the case is raised.',
              'Both writers separate two ideas the claim had blurred.',
              'Both writers dismiss the case as too rare to deserve attention.'
            ],
            correctAnswer: 2,
            explanation: 'Hazlitt separates learning from talent and knowledge, and James separates the virtues from the war that first produced them, so each case strengthens a refined claim. Neither writer ignores the case, abandons the argument, or dismisses it as rare.'
          },
          {
            question: 'Which statement best describes the difference between testing evidence and illustrating a claim?',
            options: [
              'A test could have disproved the point, while an illustration only shows it in action.',
              'A test comes from history, while an illustration comes from personal experience.',
              'A test uses a statistic, while an illustration relies on a story or an anecdote.',
              'A test appears in the conclusion, while an illustration belongs in a body paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'Evidence persuades more when the claim could have failed in that case, as with Douglass\'s literacy or Darwin\'s wealth. The difference is not the domain, the form of the evidence, or where it appears in the essay.'
          },
          {
            question: 'Which conclusion type would best suit an essay built on a sustained distinction between two terms?',
            options: [
              'A summary that lists each body paragraph\'s main example again in order',
              'A crystallizing contrast that sorts both ideas into one memorable image',
              'A rhetorical question asking the reader what they think about the issue',
              'A famous quotation on the topic that the essay has not yet discussed'
            ],
            correctAnswer: 1,
            explanation: 'Hazlitt\'s Shakespeare-and-commentators ending shows how a final contrast can hold an essay\'s distinction in one image. A summary repeats, an open question hands the argument away, and an unused quotation is a reference rather than development.'
          }
        ]
      }
    },
    {
      id: 'englangd7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Classical rhetoric's name for the stage of finding what can be said about a subject is _______.

2) Declaring the sense in which you will use a term, as Douglass does with "self-made men," is called _______.

3) A consequence that follows if an argument is right is an _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['invention', 'stipulation', 'implication'],
        hint1: 'It shares a root with "invent."',
        hint2: 'The noun form of "stipulate."',
        hint3: 'The answer to "so what?"',
        explanation: 'Invention generates material, stipulation fixes the sense of a key term, and an implication extends the argument to its consequences.'
      }
    },
    {
      id: 'englangd7-practice',
      type: 'text' as const,
      content: `
## Mixed Practice: One Prompt, Every Move

*Practice prompt written for this lesson, modeled on the format of AP argument prompts. The quotation is real.*

> In "The Moral Equivalent of War" (1910), the philosopher William James wrote: "Great indeed is fear; but it is not, as our military enthusiasts believe and try to make us believe, the only stimulus known for awakening the higher ranges of men's spiritual energy."
>
> Write an essay that argues your position on the extent to which fear motivates people to do their best work.

*Student plan written for this lesson.*

> **Thesis:** Fear is a bad motivator.
>
> **Body 1:** Students who fear failing tests often freeze up. Also athletes choke under pressure. Also workers who fear being fired do worse work. Also soldiers.
>
> **Body 2:** Some people say fear helps, but they are wrong.
>
> **Conclusion:** So fear is a bad motivator, as I said in my thesis.

Each question below asks which development move would fix one weakness in this plan.
`
    },
    {
      id: 'englangd7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of the thesis best responds to the "extent" the prompt asks about?',
            options: [
              'Fear is a bad motivator, and people should try to avoid feeling it.',
              'Fear motivates some people and does not motivate others in many cases.',
              'Fear can spur a burst of effort but cannot sustain good work.',
              'Fear has been discussed by many writers, including William James.'
            ],
            correctAnswer: 2,
            explanation: 'This thesis draws a distinction between short bursts and sustained work, which states how far fear motivates and sets up a line of reasoning. The first repeats the plan\'s absolute claim, the second sits on the fence, and the last takes no position.'
          },
          {
            question: 'What is the best way to develop Body 1?',
            options: [
              'Add three more groups, such as musicians and actors, to show the pattern is widespread.',
              'Choose one case, such as a student freezing on an exam, and explain what fear does.',
              'Replace the examples with a statistic about how many people say they feel anxious.',
              'Remove the examples and explain the thesis in more abstract and general terms.'
            ],
            correctAnswer: 1,
            explanation: 'Body 1 is a catalog, so the fix is one extended example that explains the mechanism. More groups lengthen the catalog, an unsourced statistic does not explain anything, and abstract restatement removes the evidence.'
          },
          {
            question: 'Body 2 dismisses the other side. Which revision best develops it through complication?',
            options: [
              'Grant that a deadline sharpens focus, then ask whether the focus outlasts the fear.',
              'Explain that people who say fear helps are usually trying to control others.',
              'State the opposing view in one sentence and then return to the thesis.',
              'Quote James again to show that a famous philosopher agrees with the essay.'
            ],
            correctAnswer: 0,
            explanation: 'This revision grants the opponents\' strongest point and moves the question, as James does with the militarists. Attacking motives ignores the argument, a one-line mention is the token gesture the rubric does not reward, and a second quotation adds authority but no development.'
          },
          {
            question: 'Which conclusion would best develop the argument beyond restatement?',
            options: [
              'So, as I have shown, fear is a bad motivator and it should be avoided.',
              'If fear works only in bursts, institutions built on it get only bursts.',
              'Fear is a complicated emotion that people have discussed for centuries.',
              'In the end, everyone has to decide for themselves what motivates them.'
            ],
            correctAnswer: 1,
            explanation: 'This conclusion draws an implication from the revised thesis for institutions that rely on fear. The other choices restate the thesis, retreat to a generality, or abandon the argument.'
          }
        ]
      }
    }
  ]
};
