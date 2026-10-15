export const englangArgumentStructurePart7Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'englanga7-intro',
      type: 'text' as const,
      content: `
# 🏗️ Argument Structure

**Part 7 of 7 — Review: Choosing, Reading, and Building Structures**

---

| Part | What it taught | Main text |
|---|---|---|
| 1 | Classical, Rogerian, Toulmin, problem-solution, and cause-effect structures; transitions | Short models |
| 2 | Classical arrangement as functions; why proof comes before refutation | Lincoln, Cooper Union, 1860 |
| 3 | Toulmin analysis: finding and testing warrants; qualifiers and rebuttals | Franklin, Constitutional Convention, 1787 |
| 4 | Common-ground (Rogerian) structure and the delayed thesis | Addams, "Why Women Should Vote," 1910 |
| 5 | Problem-solution structure, classification, hybrids, misconceptions | T. Roosevelt, "Conservation as a National Duty," 1908 |
| 6 | Section I passage set; planning and writing a structured Q3 essay | Lincoln, First Inaugural, 1861 |

> 🔑 **Key Concept:** Structure is reasoning made visible. Whether you are reading or writing, the question is always the same: **why does this part come here, for this audience?**
`
    },
    {
      id: 'englanga7-chooser',
      type: 'text' as const,
      content: `
## The Structure Chooser

| Situation | Structure that fits | Example from this unit |
|---|---|---|
| Audience open-minded but needs proof; opponents' charges must be answered | **Classical**, with refutation after confirmation | Cooper Union: prove the framers' record, then answer the South |
| Audience resistant; shares a value with the writer | **Common ground**, delayed thesis | Addams: begin with "woman's place," end with the ballot |
| Audience must be convinced a problem exists before acting | **Problem-solution** | Roosevelt: forests and coal first, coordination later |
| Writer supports a flawed proposal and must persuade doubters | **Qualified claim** with explicit warrant and rebuttal | Franklin: "with all its faults, if they are such" |
| Audience divided and fearful; writer must hold both reason and feeling | **Head to heart** sequence: logic, practicality, responsibility, emotion | First Inaugural |

## Vocabulary

| Term | Meaning |
|---|---|
| **Exordium / narratio / propositio / confirmatio / refutatio / peroratio** | The six functions of classical arrangement: introduction, background, claim, proof, answering objections, conclusion |
| **Grounds** | The evidence or reasons offered (Toulmin) |
| **Warrant** | The general rule linking grounds to claim; often unstated |
| **Backing** | Support for the warrant |
| **Qualifier** | A word or phrase that limits the strength or scope of a claim |
| **Rebuttal** | A condition under which the claim would not hold |
| **Delayed thesis** | A claim held until after the reader has accepted the steps leading to it |
| **Classification** | Dividing a subject into types, often to show that different types need different treatment |
| **Peroration** | A closing that moves from proof to feeling or action |
`
    },
    {
      id: 'englanga7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which choice correctly pairs a writer with the structural strategy most central to the text studied in this unit?',
            options: [
              'Addams: stating the thesis in the first sentence',
              'Franklin: qualifying a claim he only partly supports',
              'Roosevelt: answering an absent audience\'s charges',
              'Lincoln at Cooper Union: delaying the claim to the end'
            ],
            correctAnswer: 1,
            explanation: 'Franklin argues for a Constitution he does not fully approve, qualifying his claim "with all its faults, if they are such." Addams delays her thesis, the Cooper Union speech is where Lincoln answers an absent audience, and Lincoln there states his claim early.'
          },
          {
            question: 'A writer argues that a city should adopt a bike-share program because a similar program reduced traffic in another city. A reader who doubts the argument would most effectively challenge its',
            options: [
              'qualifier',
              'warrant',
              'exordium',
              'peroration'
            ],
            correctAnswer: 1,
            explanation: 'The argument depends on an analogy warrant, that what worked in one city will work in this one, so questioning whether the cities are alike attacks its logic. The qualifier, opening, and closing are not where the inference can fail.'
          },
          {
            question: 'Both Addams and Lincoln in his First Inaugural end with a return to a shared value. In each case this ending mainly serves to',
            options: [
              'summarize the evidence for readers who skimmed it',
              'leave the audience with something it already holds',
              'introduce a new claim for a later speech to develop',
              'concede the strongest objection to the main claim'
            ],
            correctAnswer: 1,
            explanation: 'Addams returns to preserving "the home," and Lincoln to "bonds of affection" and memory, so each audience leaves holding a value it already shares with the speaker. Neither ending summarizes evidence, opens a new claim, or concedes an objection.'
          }
        ]
      }
    },
    {
      id: 'englanga7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Structural Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lincoln: "You say we are sectional. We deny it. That makes an issue; and the burden of proof is upon you." This sentence begins a ___',
            options: ['refutation', 'narration', 'peroration', 'propositio']
          },
          {
            label: 'Franklin: "when the people shall become so corrupted as to need despotic government." In Toulmin\'s terms this condition is a ___',
            options: ['warrant', 'rebuttal', 'backing', 'grounds']
          },
          {
            label: 'Roosevelt: dividing resources into those that are and are not "capable of renewal" is a method called ___',
            options: ['narration', 'definition', 'comparison', 'classification']
          }
        ],
        correctAnswers: ['refutation', 'rebuttal', 'classification'],
        hint1: 'He is answering a charge made against his party.',
        hint2: 'It names when the claim that the government will be well administered would fail.',
        hint3: 'Sorting a subject into types.',
        explanation: 'Answering the sectionalism charge is refutation; Franklin\'s condition for failure is a rebuttal; sorting resources into types is classification.'
      }
    },
    {
      id: 'englanga7-stems',
      type: 'text' as const,
      content: `
## Section I Stem Bank: Structure

| Stem | How to answer |
|---|---|
| "The primary function of the second paragraph is to..." | Name what the paragraph **does** in the line of reasoning (supplies evidence, answers an objection, narrows the claim), not what it says |
| "The shift from the third to the fourth paragraph can best be described as a movement from... to..." | Name both kinds of appeal or function (logical to emotional, general to specific, proof to call to action) |
| "The writer's argument depends on the assumption that..." | Reconstruct the warrant |
| "The writer delays the main claim until the final paragraph most likely in order to..." | Think about a resistant audience and common ground |
| "Which of the following best describes the organization of the passage as a whole?" | Check each part of the answer against the passage; one wrong stage makes the choice wrong |

## Q3 Essay Structure Checklist

1. **Thesis** with a defensible position, and a qualification if your position has one (Row A).
2. **Order your body paragraphs by logic**, not by the order you thought of them: value before limit, cause before effect, strongest objection after your confirmation.
3. **Every body paragraph** = claim + specific evidence + commentary that explains the link (Row B).
4. **Place the counterargument** where the reader would raise it, and answer it, rather than tacking it on at the end.
5. **Conclude** by resolving the tension your thesis named, not by repeating the thesis (Row C).
`
    },
    {
      id: 'englanga7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The Toulmin term for the general rule that links evidence to a claim is the _______.

2) In classical arrangement, the closing that turns proof into feeling or action is the _______.

3) A thesis held back until the end of a common-ground argument is called a _______ thesis.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['warrant', 'peroration', 'delayed'],
        hint1: 'Often unstated; the bridge.',
        hint2: 'Latin peroratio.',
        hint3: 'Postponed.',
        explanation: 'The warrant links evidence to claim, the peroration closes a classical argument, and a delayed thesis arrives at the end.'
      }
    },
    {
      id: 'englanga7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Roosevelt uses problem-solution structure to persuade the governors." What would most improve this sentence as analysis?',
            options: [
              'Adding a second structure name, such as classification',
              'Explaining how the order of the parts moves the audience',
              'Quoting the speech\'s title and date at the sentence\'s end',
              'Replacing "persuade" with a more formal verb like "convince"'
            ],
            correctAnswer: 1,
            explanation: 'Analysis explains why the arrangement works on this audience, for example how establishing the problem first prepares governors to accept a coordinated plan. Adding labels, citations, or a synonym does not explain anything.'
          },
          {
            question: 'Which revision of an essay plan best reflects a classical arrangement for a resistant reader who has one strong objection?',
            options: [
              'Answer the objection first, before giving any evidence at all',
              'Give the evidence, then answer the objection using that evidence',
              'Leave out the objection so the reader does not think of it',
              'Mention the objection only in the final sentence of the essay'
            ],
            correctAnswer: 1,
            explanation: 'As at Cooper Union, a refutation that follows the confirmation can draw on the evidence already established. Answering first leaves the reply unsupported, omitting the objection invites the reader to raise it, and a last-sentence mention leaves it unanswered.'
          },
          {
            question: 'Why is Franklin\'s qualifier "if they are such" more than modesty?',
            options: [
              'It invites the holdouts to doubt the objections they still hold.',
              'It admits that he wrote most of the Constitution himself.',
              'It hides his real opinion of the Constitution\'s faults.',
              'It warns that the delegates will be blamed for failure.'
            ],
            correctAnswer: 0,
            explanation: 'By treating the faults as possibly not faults at all, Franklin models the self-doubt he asks of the objectors. He did not write most of the Constitution, he openly says he disapproves of parts of it, and the phrase assigns no blame.'
          }
        ]
      }
    }
  ]
};
