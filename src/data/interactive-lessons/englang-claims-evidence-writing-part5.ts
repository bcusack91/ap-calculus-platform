export const englangClaimsEvidenceWritingPart5Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'englangc5-intro',
      type: 'text' as const,
      content: `
# 🛠️ Claims and Evidence in Writing

**Part 5 of 7 — Qualifying Your Own Claims Without Losing Your Position**

---

| Section |
|---------|
| 📖 Where Qualification Belongs in an Essay |
| Model: A Paragraph That Limits the Writer's Own Side |
| Over-Hedging and Other Misconceptions |

> 🔑 **Key Concept:** Skill 4.C asks you to qualify a claim using **modifiers, counterarguments or alternative perspectives**. In timed writing the risk runs both ways. Unqualified claims ("always," "never," "everyone") are easy to knock down, but a claim buried under hedges says nothing. The goal is a claim that is **precise about its limits and firm inside them**.
`
    },
    {
      id: 'englangc5-where',
      type: 'text' as const,
      content: `
## 📖 Where Qualification Belongs in an Essay

### Four Places to Qualify

| Location | What it looks like | Example on the Roosevelt prompt |
|---|---|---|
| **In the thesis** | A limit built into the position | "Roosevelt is right to honor those who risk failure, **but** he undervalues critics..." |
| **In a topic sentence** | One paragraph's claim is narrowed | "**In public life**, where failure is visible, the doer deserves the credit." |
| **Inside commentary** | A sentence that marks how far an example reaches | "Langley's case shows the cost of failure, **though not** that every failure is honorable." |
| **In a limits paragraph** | A whole paragraph that tests the claim against a strong objection | The model paragraph below |

### Three Ways to Handle an Opposing View

| Response | What you do | Signal phrases |
|---|---|---|
| **Concede and rebut** | Grant the objection, then argue that your claim still outweighs it | "Admittedly... yet the larger point remains..." |
| **Concede and refine** | Grant the objection and **change your claim** to absorb it, so the claim ends up more precise | "This objection is right, and it sharpens the claim: ..." |
| **Refute** | Show that the objection is mistaken | "This view rests on a false assumption..." |

Concede-and-refine is the least used and often the most impressive. Instead of defending territory, it lets the opposing view improve your argument, which is one of the clearest ways to show the complexity that Row C rewards.

> 🔑 **AP Connection:** The rubric does not require a counterargument. An essay can earn every point without one. But a well-chosen concession is one of the most dependable ways to demonstrate "complexities or tensions" in a timed essay, so it is worth planning one.
`
    },
    {
      id: 'englangc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Critics often seem useless. This objection is fair, and it sharpens my claim: the doer deserves credit for risk, but the critic deserves credit for the standards that decide which risks are worth taking." The student\'s response to the objection is best described as',
            options: [
              'refuting the objection by showing that it rests on false facts',
              'granting the point and rebuilding the position around it',
              'ignoring the objection and restating the original thesis word for word',
              'abandoning the thesis in favor of the opposing view'
            ],
            correctAnswer: 1,
            explanation: 'The student grants the point and builds a more precise two-part claim from it, which is concede-and-refine. Nothing is shown to be false, the objection is addressed, and the thesis is sharpened rather than dropped.'
          },
          {
            question: 'Which statement about counterarguments and the AP rubric is accurate?',
            options: [
              'Every essay must include a counterargument paragraph to score above a 3.',
              'A counterargument automatically earns the sophistication point in Row C.',
              'Counterarguments are optional, though a strong one can show complexity.',
              'A counterargument belongs only in the argument essay, not the synthesis essay.'
            ],
            correctAnswer: 2,
            explanation: 'No row requires a counterargument, but exploring a real tension can help earn Row C. A token counterargument earns nothing by itself, and concessions are welcome in synthesis essays too.'
          }
        ]
      }
    },
    {
      id: 'englangc5-model',
      type: 'text' as const,
      content: `
## Model: A Paragraph That Limits the Writer's Own Side

**Thesis:** *Roosevelt is right to honor those who risk failure, because action exposes a person to costs that commentary never does, but he undervalues critics, whose standards tell the doer what is worth attempting.*

Part 3 built the paragraph that supports Roosevelt. This paragraph supplies the second half of the thesis.

> **(1)** Roosevelt's contempt for "the critic" holds only when criticism is idle; when critics apply standards, they become part of the arena's machinery. **(2)** In March 1989, two chemists at the University of Utah announced at a press conference that they had produced "cold fusion," nuclear fusion at room temperature, a discovery that promised nearly limitless energy. **(3)** Laboratories around the world rushed to repeat the experiment, and within months most had failed to reproduce the results, and the claim collapsed. **(4)** The chemists had certainly been in the arena, and by Roosevelt's measure they deserved credit for daring greatly. **(5)** Yet it was the critics, scientists who did nothing but check another's work, who spared governments and investors from pouring far more money into a dead end. **(6)** This does not mean Roosevelt is simply wrong: the critics were valuable precisely because they too ran experiments, not because they "point out how the strong man stumbles" from a seat in the stands. **(7)** The credit, then, belongs not to the doer alone but to anyone who submits a claim to a real test, whether that claim is one's own or someone else's.

| Sentence | Qualification move |
|---|---|
| 1 | **Condition** in the topic sentence: "only when criticism is idle" |
| 2–3 | Evidence chosen to challenge the writer's own first paragraph |
| 4 | **Concession** to Roosevelt: the chemists did dare |
| 5 | **Rebuttal**: critics prevented real harm |
| 6 | **Refinement**: Roosevelt is limited, not refuted; the line between idle and active critics is drawn |
| 7 | **Refined claim**: credit goes to whoever tests, which absorbs both sides |

### Why This Paragraph Reaches Toward Row C

The paragraph does not simply switch sides. It keeps the first paragraph's point (doers take risks) and adds a distinction (idle versus testing critics) that neither Roosevelt nor a simple opponent would make. That is what "exploring complexities or tensions" looks like on the page.
`
    },
    {
      id: 'englangc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sentence 4 ("The chemists had certainly been in the arena...") is a ___',
            options: ['concession', 'refutation', 'refined claim', 'statistic']
          },
          {
            label: 'The phrase "only when criticism is idle" in sentence 1 qualifies by ___',
            options: ['condition', 'degree', 'concession', 'example']
          },
          {
            label: 'Sentence 7 ("The credit, then, belongs not to the doer alone...") is a ___',
            options: ['refined claim', 'concession', 'refutation', 'statistic']
          }
        ],
        correctAnswers: ['concession', 'condition', 'refined claim'],
        hint1: 'The writer grants Roosevelt\'s point about the chemists.',
        hint2: 'The claim holds only under a stated circumstance.',
        hint3: 'It states a new, more precise version of the position.',
        explanation: 'Sentence 4 concedes, "only when" sets a condition, and sentence 7 states the refined claim that absorbs both sides.'
      }
    },
    {
      id: 'englangc5-misconceptions',
      type: 'text' as const,
      content: `
## Over-Hedging and Other Misconceptions

### The Hedge Stack

> Over-hedged: "It could perhaps be argued that, in some cases, critics might possibly be somewhat useful."
>
> Qualified: "Critics are useful when they test claims rather than mock them."

The first sentence stacks five hedges (*could, perhaps, in some cases, might possibly, somewhat*) and commits to nothing. The second sets **one limit** and is confident inside it. One precise qualifier does more work than five vague ones.

### Choosing the Right Modifier

| Too absolute | Over-hedged | Precise |
|---|---|---|
| "Critics never help." | "Critics may sometimes perhaps help a little." | "Critics help most when they share the doer's risks." |
| "Free transit always increases ridership." | "Free transit could possibly affect ridership in some ways." | "Free transit raises ridership most on routes where fares were the main barrier." |

### Misconceptions

| Misconception | Correction |
|---|---|
| "Qualifying means admitting I'm wrong." | Qualifying means stating exactly where you are right |
| "Every essay needs a counterargument paragraph." | The rubric requires none; use one when it strengthens the line of reasoning |
| "Any concession shows sophistication." | A token concession ("Some may disagree, but they are wrong") shows nothing; Row C requires exploring the tension |
| "Opponents can be summarized in one weak sentence." | A straw man is easy to beat and impresses no one; concede the **strongest** objection |
| "Qualifiers belong in every sentence." | Qualify claims where the limit matters; state evidence and commentary plainly |

> 🔑 **AP Connection:** Section I writing questions sometimes ask which revision of a claim "most effectively qualifies" it. The right answer usually adds **one** limiting condition or scope; choices that pile up hedges, or that reverse the claim, are wrong.
`
    },
    {
      id: 'englangc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student\'s draft claims, "Public libraries are the most important institution in every community." Which revision most effectively qualifies the claim?',
            options: [
              'Public libraries might perhaps be somewhat important in certain communities.',
              'Public libraries are unimportant in communities where most homes have internet.',
              'In towns without other free indoor spaces, the public library is often the most vital.',
              'Public libraries are the most important institution in every single community.'
            ],
            correctAnswer: 2,
            explanation: 'The revision adds one limiting condition and stays committed within it. The other choices stack hedges, reverse the claim, or make it even more absolute.'
          },
          {
            question: 'In the cold fusion paragraph, the writer chooses evidence that challenges the essay\'s first body paragraph in order to',
            options: [
              'abandon the thesis',
              'test and refine it',
              'add a second topic',
              'appeal to emotion'
            ],
            correctAnswer: 1,
            explanation: 'The paragraph sets the thesis against a hard case and emerges with a more precise claim about testing. It keeps the thesis, stays on the prompt, and relies on reasoning rather than emotion.'
          },
          {
            question: 'Which sentence is the strongest concession in an essay arguing that critics deserve more credit than Roosevelt allows?',
            options: [
              'Some people might say that doers matter more, but they are simply wrong.',
              'Of course, nobody really agrees with Roosevelt about critics nowadays anyway.',
              'Roosevelt is right that a critic who never risks failure learns little from it.',
              'Doers are important too, and that is something everyone can probably agree on.'
            ],
            correctAnswer: 2,
            explanation: 'The concession grants a real, specific point from Roosevelt\'s side, which the essay can then limit or answer. The other choices dismiss a straw man, misstate the debate, or offer a vague truism.'
          }
        ]
      }
    }
  ]
};
