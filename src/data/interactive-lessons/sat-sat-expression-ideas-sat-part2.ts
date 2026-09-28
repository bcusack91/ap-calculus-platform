export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei2-intro',
      type: 'text' as const,
      content: `# Transitions I: Contrast and Concession

**Part 2 of 7 — Transitions: Contrast and Concession**

"However" is the transition students pick most often, right or wrong. The SAT exploits that by offering several words that all *feel* like "but." To choose among them, you need to know which kind of "but" the text needs.

### Three Kinds of "But"

| Relationship | What the second sentence does | Transitions |
|---|---|---|
| **Contrast** | Puts a *second thing* beside the first and shows how it differs | by contrast, in contrast, on the other hand, conversely, however |
| **Concession** | Says something is true *despite* the first sentence | nevertheless, nonetheless, even so, still, however |
| **Replacement** | Says what happened *instead of* something the first sentence expected or denied | instead, rather |

### How to Tell Them Apart

- **Contrast:** two subjects, one feature. "Emperor penguins breed in winter. Adélie penguins, *by contrast*, breed in summer."
- **Concession:** one situation, an obstacle, and a result that holds anyway. "The sample was small. *Nevertheless*, the findings have been confirmed three times."
- **Replacement:** a prediction or a rejected option, then what actually happened. "The committee did not reject the plan. *Instead*, it asked for a cost estimate."

### Why "However" Is Rarely the Deciding Choice

"However" can express contrast or concession, so when it appears among the choices, the other options usually belong to entirely different families. When two "but" words appear together, ask which specific kind of "but" the text needs.`
    },
    {
      id: 'ei2-quiz',
      type: 'multiple-choice' as const,
      content: '**Contrast and Concession Practice** 🎯',
      exercise: {
        questions: [
          {
            question: `Engineers expected the lighter bridge design to sway more in strong winds than the heavier original. ______ in wind-tunnel tests, the lighter design proved the steadier of the two. Which choice completes the text with the most logical transition?`,
            options: ['However,', 'For instance,', 'Thus,', 'Likewise,'],
            correctAnswer: 0,
            explanation: `The engineers predicted more sway, and the tests showed the opposite, so the second sentence contradicts the first: "However" fits. The test result is not an example of the prediction, it is not caused by the prediction, and it is not a parallel case.`
          },
          {
            question: `The first trial of the new malaria vaccine enrolled only 200 volunteers, a small number for a medical study. ______ the results were strong enough that regulators approved a much larger trial within months. Which choice completes the text with the most logical transition?`,
            options: ['Nonetheless,', 'Conversely,', 'Therefore,', 'In fact,'],
            correctAnswer: 0,
            explanation: `A small trial is a reason to doubt the results, yet regulators approved a larger trial anyway: a concession, so "Nonetheless" fits. "Conversely" needs a second thing to set against the first, and there is only one trial. A small sample does not cause approval ("Therefore"), and the approval does not intensify the point about the small sample ("In fact").`
          }
        ]
      }    },
    {
      id: 'ei2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Choosing the Right Kind of "But"

### Worked Example 1: Contrast

"Most spiders live and hunt alone. *Anelosimus eximius*, a spider of South American rainforests, ______ lives in colonies that can hold thousands of spiders."

| Test | Answer |
|---|---|
| Two subjects? | Yes: most spiders and *A. eximius* |
| Same feature? | Yes: living alone or in groups |
| Obstacle overcome? | No: nothing about other spiders makes colony life harder for this one |
| **Choice** | "by contrast," ✅ — "nevertheless," ❌ (no obstacle), "for example," ❌ (this spider breaks the pattern) |

### Worked Example 2: Concession

"Early reviewers called the novel too long to hold readers' attention. ______ it has stayed in print for more than a century."

| Test | Answer |
|---|---|
| Two subjects? | No: one novel |
| Obstacle overcome? | Yes: bad reviews, yet it lasted |
| **Choice** | "Nevertheless," ✅ — "In contrast," ❌ (no second subject), "Therefore," ❌ (bad reviews did not cause its success) |

### Worked Example 3: Replacement

"The city council did not vote the proposal down. ______ it sent the plan back to its authors with a request for a cost estimate."

| Test | Answer |
|---|---|
| Is something denied or predicted? | Yes: the council did not vote it down |
| Does sentence 2 say what happened in its place? | Yes: it sent the plan back |
| **Choice** | "Instead," ✅ — "Similarly," ❌, "As a result," ❌ |

### Quick Reference

| If the text… | Choose… |
|---|---|
| Sets two things side by side on one feature | by contrast / in contrast / on the other hand |
| Reports an outcome that holds despite an obstacle | nevertheless / even so / still |
| Reports what happened in place of what was expected or denied | instead / rather |`
    },
    {
      id: 'ei2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Contrast and Concession Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: `Most frogs lay their eggs in water, and their young hatch as swimming tadpoles. The coquí frog of Puerto Rico, ______ lays its eggs on land, and its young hatch as tiny frogs. Which choice completes the text with the most logical transition?`,
            options: ['by contrast,', 'nevertheless,', 'as a result,', 'for example,'],
            correctAnswer: 0,
            explanation: `The text sets two subjects side by side, most frogs and the coquí, on the same feature: where eggs are laid and how the young hatch. That is a contrast. "Nevertheless" would need an obstacle the coquí overcomes, "as a result" would make the coquí's habits a consequence of other frogs' habits, and the coquí is an exception, not an example.`
          },
          {
            question: `Critics predicted that the novel, at more than 900 pages, would find few readers. ______ it sold more than a million copies in its first year. Which choice completes the text with the most logical transition?`,
            options: ['Instead,', 'Likewise,', 'For instance,', 'Thus,'],
            correctAnswer: 0,
            explanation: `The first sentence makes a prediction, and the second reports what happened in its place, so "Instead" fits. The sales figure is not a parallel case, not an instance of the prediction, and not a result of it.`
          },
          {
            question: `The city's new protected bike lanes carry fewer than 300 riders a day. ______ planners argue that the lanes are worth keeping, since ridership on similar lanes in other cities took about five years to peak. Which choice completes the text with the most logical transition?`,
            options: ['Even so,', 'Thus,', 'Likewise,', 'In other words,'],
            correctAnswer: 0,
            explanation: `Low ridership is a reason to remove the lanes, yet planners want to keep them: a concession, so "Even so" fits. "Thus" would make low ridership the reason to keep them, "Likewise" signals a parallel case, and "In other words" would restate the first sentence rather than push against it.`
          }
        ]
      }
    },
    {
      id: 'ei2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Contrast vs. Concession Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Emperor penguins breed in winter. Adélie penguins, ___, breed in summer." [by contrast|nevertheless|therefore|for instance]',
          '"The study\'s sample was small. ___, its findings have been confirmed three times." [Even so|In contrast|Thus|Similarly]',
          '"The panel did not reject the plan. ___, it asked for a cost estimate." [Instead|Similarly|Therefore|For example]',
          '"In contrast" needs [two things compared on one feature|a cause followed by its result|a claim followed by an example|a list of steps in order]'
        ],
        correctAnswers: ['by contrast', 'Even so', 'Instead', 'two things compared on one feature'],
        hint1: 'Two kinds of penguin, one feature (breeding season).',
        hint2: 'A small sample is an obstacle; the findings held up anyway.',
        hint3: 'The panel did something in place of rejecting the plan.',
        explanation: 'Two subjects on one feature = contrast ("by contrast"). A result that holds despite an obstacle = concession ("Even so"). An action in place of a denied one = replacement ("Instead"). "In contrast" requires two things compared on the same feature.'
      }
    },
    {
      id: 'ei2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Relationship | Signal in the text | Transitions |
|---|---|---|
| Contrast | Two subjects, one feature | by contrast, in contrast, on the other hand |
| Concession | An obstacle, and a result that holds anyway | nevertheless, even so, still |
| Replacement | A prediction or denial, then what happened instead | instead, rather |
| "However" | Works for contrast or concession | Rarely the only "but" among the choices |
| Strategy | Name the kind of "but" before reading the choices | Eliminate other families first |

*Next: Transitions — Cause, Addition, Example, and Sequence →*`    }
  ]
};
