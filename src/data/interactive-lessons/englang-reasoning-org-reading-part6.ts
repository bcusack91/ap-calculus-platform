export const englangReasoningOrgReadingPart6Data = {
  topicSlug: 'englang-reasoning-org-reading',
  sections: [
    {
      id: 'englangr6-intro',
      type: 'text' as const,
      content: `
# 🧠 Reasoning and Organization in Reading

**Part 6 of 7 — Exam Practice: A Passage Set and a Model Analysis**

---

| Section |
|---------|
| 📖 Where Skills 5.A–5.C Appear on the Exam |
| Passage: Paine Answers the Case for Reconciliation |
| Section I Practice Set |
| Elimination Walk-Through |
| A Model Rhetorical Analysis Paragraph on Mill |

> 🔑 **Key Concept:** On the exam, reasoning and organization are tested in two places. **Section I** reading sets ask what a sentence or paragraph does, how two parts relate and how a passage develops its claim. **Free-response Question 2** (rhetorical analysis) rewards an essay that explains how a writer's choices, including the order of those choices, build an argument.
`
    },
    {
      id: 'englangr6-exam',
      type: 'text' as const,
      content: `
## 📖 Where Skills 5.A–5.C Appear on the Exam

| Exam part | Format | What reasoning and organization look like there |
|---|---|---|
| **Section I** | 45 multiple-choice questions in 60 minutes, four answer choices each, in sets; 23–25 are reading questions on passages | "The sentence beginning... serves to," "The relationship between the second and third paragraphs," "The passage develops its claim primarily through" |
| **Section II, Question 2** | Rhetorical analysis essay, scored 0–6 | An essay that traces how the writer's choices work in sequence earns more than one that lists devices |

### The Rhetorical Analysis Rubric (6 points)

| Row | Points | What earns them |
|---|---|---|
| **A: Thesis** | 0–1 | A defensible thesis that analyzes the writer's rhetorical choices |
| **B: Evidence and Commentary** | 0–4 | The top score requires specific evidence that supports all claims in a line of reasoning, and commentary that consistently explains how multiple choices contribute to the writer's argument, purpose or message |
| **C: Sophistication** | 0–1 | A sophistication of thought or a complex understanding of the rhetorical situation, shown across the essay, for example by explaining the significance of the writer's choices for the situation |

Organization is one of the strongest subjects for Row B commentary, because explaining **why a choice comes where it does** is explanation, not summary.
`
    },
    {
      id: 'englangr6-passage',
      type: 'text' as const,
      content: `
## Passage: Paine Answers the Case for Reconciliation

*The following excerpts are from* Common Sense *(1776). Paine is answering colonists who argued that America should remain connected to Great Britain.*

> **(1)** I have heard it asserted by some, that as America hath flourished under her former connexion with Great-Britain, that the same connexion is necessary towards her future happiness, and will always have the same effect. Nothing can be more fallacious than this kind of argument. We may as well assert, that because a child has thrived upon milk, that it is never to have meat; or that the first twenty years of our lives is to be a precedent for the next twenty. But even this is admitting more than is true, for I answer roundly, that America would have flourished as much, and probably much more, had no European power had any thing to do with her.
>
> **(2)** But Britain is the parent country, say some. Then the more shame upon her conduct. Even brutes do not devour their young, nor savages make war upon their families; wherefore the assertion, if true, turns to her reproach; but it happens not to be true, or only partly so... Europe, and not England, is the parent country of America.
>
> **(3)** Small islands not capable of protecting themselves are the proper objects for kingdoms to take under their care; but there is something very absurd, in supposing a continent to be perpetually governed by an island. In no instance hath nature made the satellite larger than its primary planet.
>
> — Thomas Paine, *Common Sense*, 1776 (excerpts; the paragraphs are not consecutive in the original)

Before you answer, sketch the function of each paragraph in a few words. A quick outline is the best defense against distractors.
`
    },
    {
      id: 'englangr6-set',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice Set** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes the organization of the excerpts taken together?',
            options: [
              'A series of opposing claims, each stated and then answered',
              'A chronological history of the colonies\' relations with Britain',
              'A single extended analogy developed across all three paragraphs',
              'A definition of independence followed by examples of its benefits'
            ],
            correctAnswer: 0,
            explanation: 'Paragraphs 1 and 2 each open with what "some" assert and then answer it, and paragraph 3 dismisses the idea of island rule. The excerpts are not chronological, they use several comparisons rather than one, and they define nothing.'
          },
          {
            question: 'In paragraph 1, the comparison to a child who "has thrived upon milk" primarily serves to',
            options: [
              'show that America depends on Britain as a child on a parent',
              'expose the error of inferring a future need from a past benefit',
              'describe the hardships of the colonists in their first twenty years',
              'concede that the connection with Britain helped America in its youth'
            ],
            correctAnswer: 1,
            explanation: 'The milk analogy shows that what helped once need not be needed always, which is exactly the flaw Paine finds in the argument from past flourishing. It argues against dependence, describes no hardships, and the concession comes later with "even this is admitting more than is true."'
          },
          {
            question: 'The sentence beginning "But even this is admitting more than is true" functions mainly to',
            options: [
              'withdraw the milk comparison as unfair to Paine\'s opponents',
              'introduce a new topic unrelated to the connection with Britain',
              'signal that Paine will now deny the premise he had let stand so far',
              'summarize the argument of paragraph 1 before paragraph 2 begins'
            ],
            correctAnswer: 2,
            explanation: 'Paine first attacks the inference while letting the premise, that America flourished because of Britain, stand; this sentence turns to deny the premise too. He does not withdraw the analogy, change topics or summarize.'
          },
          {
            question: 'The phrase "say some" at the start of paragraph 2 indicates that the claim "Britain is the parent country" is',
            options: [
              'a view Paine assigns to his opponents',
              'a fact Paine and all his readers share',
              'a conclusion Paine reached earlier',
              'a slogan Paine hopes to popularize'
            ],
            correctAnswer: 0,
            explanation: '"Say some" assigns the claim to opponents, which sets up Paine\'s reply, "Then the more shame upon her conduct." He goes on to deny that the claim is fully true, so it is not shared ground, his conclusion or his slogan.'
          },
          {
            question: 'Paragraph 3 develops its claim chiefly through',
            options: [
              'a narrative of the war that had already begun at Lexington',
              'an analogy from nature that makes island rule seem absurd',
              'statistics comparing the populations of Britain and America',
              'a definition of "kingdom" drawn from the history of Europe'
            ],
            correctAnswer: 1,
            explanation: 'The satellite that cannot be larger than its planet compares Britain and America to an order of nature, so a continent ruled by an island looks unnatural. The paragraph contains no narrative, statistics or definition.'
          }
        ]
      }
    },
    {
      id: 'englangr6-walkthrough',
      type: 'text' as const,
      content: `
## Elimination Walk-Through

Take the question on "But even this is admitting more than is true." Work from what the sentence **does**.

1. **Locate it in the paragraph.** It comes after Paine has called the argument "fallacious" and offered the milk analogy. So far he has attacked the reasoning, not the facts.
2. **Name its job before reading the choices.** "Even this" points back to what he has let stand, that America flourished under Britain. "Admitting more than is true" says he will take that back. Job: deny the premise, too.
3. **Test each choice against that job.**

| Choice | Verdict | Misconception it relies on |
|---|---|---|
| Withdraw the milk comparison | Wrong | Reads "admitting more than is true" as retracting the analogy; what Paine retracts is a concession |
| Introduce a new topic | Wrong | Ignores "this," which refers back to the paragraph's own subject |
| Signal that Paine will deny the premise | **Right** | Matches the job named in step 2 |
| Summarize paragraph 1 | Wrong | Takes a turning point for a recap; the sentence adds a new claim |

The pattern Paine uses, first "even if your premise were true, your conclusion would not follow," then "and your premise is not true," is a common two-stage refutation. Recognizing it lets you predict the answer before you read the choices.
`
    },
    {
      id: 'englangr6-model',
      type: 'text' as const,
      content: `
## A Model Rhetorical Analysis Paragraph on Mill

**Practice prompt (adapted for this lesson):** The following passage is from John Stuart Mill's *On Liberty* (1859). Read the passage carefully. Write an essay that analyzes the rhetorical choices Mill makes to argue that silencing any opinion is wrong.

> If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be no more justified in silencing that one person, than he, if he had the power, would be justified in silencing mankind. ... But the peculiar evil of silencing the expression of an opinion is, that it is robbing the human race; posterity as well as the existing generation; those who dissent from the opinion, still more than those who hold it. If the opinion is right, they are deprived of the opportunity of exchanging error for truth: if wrong, they lose, what is almost as great a benefit, the clearer perception and livelier impression of truth, produced by its collision with error.
>
> — John Stuart Mill, *On Liberty*, 1859, Chapter II

### Thesis

*Writing for readers inclined to let the majority decide which opinions deserve a hearing, Mill orders his argument so that they concede the dissenter's right before they see what they have conceded: he first sets one person against all of mankind to dissolve the argument from numbers, then divides every case in two to show that silencing harms the silencers themselves.*

### Body Paragraph

*Mill begins not with a principle but with the most extreme case he can imagine, "all mankind minus one." By setting the whole human race against a single dissenter, he turns a question of numbers into a question of right: mankind would be "no more justified in silencing that one person" than that person would be in "silencing mankind." The balanced sentence makes the two acts of silencing mirror images, so a reader who would reject tyranny by one person must reject it from everyone else. With the argument from numbers cleared away, Mill moves the injury from the speaker to the audience. Silencing, he writes, is "robbing the human race," and he extends the victims in a series, "posterity as well as the existing generation," until the dissenter's loss belongs to everyone. He then splits the possibilities: "If the opinion is right," the hearers lose the chance to correct an error, and "if wrong," they lose "the clearer perception and livelier impression of truth." Since both branches end in loss, no case remains in which censorship helps the people it claims to protect. The order is essential: only after Mill has made the lone dissenter's claim equal to the majority's can he argue that the majority is the injured party, and that sequence turns a plea for tolerance into an appeal to the censor's own interest.*

### Mapping the Model to the Rubric

| Feature of the model | Rubric row | Why it counts |
|---|---|---|
| Thesis names choices (extreme case, division) and their purpose | **Row A** (1 point) | Defensible, and it analyzes choices rather than summarizing Mill's view |
| Each claim is supported by a short embedded quotation | **Row B** | Specific evidence for every claim |
| "turns a question of numbers into a question of right" | **Row B** | Commentary explains how the choice works, not just what it is |
| "With the argument from numbers cleared away, Mill moves..." | **Row B** | Traces the line of reasoning from one choice to the next (5.A, 5.B) |
| "He then splits the possibilities" | **Row B** | Identifies a method of development, division, and its effect (5.C) |
| "The order is essential..." | **Row B**, contributing to **Row C** | Explains why the sequence matters for an audience inclined to side with the majority; sustained across a full essay, this kind of insight into the rhetorical situation earns the sophistication point |

A full essay would add at least one more body paragraph, for example on Mill's diction ("robbing," "peculiar evil"). Row C is judged across the whole response, so a single paragraph cannot earn it alone, but this one shows the kind of thinking the point rewards.
`
    },
    {
      id: 'englangr6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Map It to the Rubric** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence stating a defensible interpretation of Mill\'s rhetorical choices is scored in ___',
            options: ['Row A', 'Row B', 'Row C', 'no row']
          },
          {
            label: 'Commentary explaining how the "If... if wrong" division leaves no case where censorship helps is scored in ___',
            options: ['Row B', 'Row A', 'Row C', 'no row']
          },
          {
            label: 'A sustained explanation, across the essay, of why Mill\'s order suits readers who favor the majority can earn ___',
            options: ['Row C', 'Row A', 'Row B only', 'no credit']
          }
        ],
        correctAnswers: ['Row A', 'Row B', 'Row C'],
        hint1: 'This is the thesis point.',
        hint2: 'Evidence and commentary make up the four-point row.',
        hint3: 'Insight into the rhetorical situation across the whole response.',
        explanation: 'The thesis earns Row A, explanation of how choices work earns Row B, and a sustained complex understanding of the rhetorical situation can earn Row C.'
      }
    },
    {
      id: 'englangr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Judge the Model** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision would most likely lower the model paragraph\'s score in Row B?',
            options: [
              'Using plainer words for "mirror images" in one sentence',
              'Replacing the commentary with a list of device names',
              'Adding a sentence on "peculiar evil" with commentary',
              'Moving the sentence on order earlier, explanation intact'
            ],
            correctAnswer: 1,
            explanation: 'Row B depends on commentary that explains how choices work, and a list of device names removes exactly that. Plainer wording, an added analyzed choice or a moved sentence all keep the explanation in place.'
          },
          {
            question: 'The model paragraph addresses skill 5.A most directly when it',
            options: [
              'quotes the phrase "all mankind minus one" as the opening case',
              'identifies "robbing the human race" as a striking metaphor',
              'notes that Mill wrote On Liberty in the middle of the century',
              'explains how each choice prepares the way for the next one in turn'
            ],
            correctAnswer: 3,
            explanation: 'Skill 5.A is about describing the line of reasoning, and the paragraph does that when it shows how clearing away the argument from numbers makes the later moves possible. Quoting a phrase or naming a metaphor is evidence and identification, and the date is context.'
          }
        ]
      }
    }
  ]
}
