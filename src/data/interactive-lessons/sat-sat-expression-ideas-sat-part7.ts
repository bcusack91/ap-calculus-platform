export const satExpressionPart7Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `# Expression of Ideas: Mixed Timed Practice

**Part 7 of 7 — Mixed Timed Practice**

Expression of Ideas questions are among the fastest on the Reading and Writing section once the routines are automatic. The texts are short, and the question line tells you exactly what to do. Aim for **under a minute** on each, which banks time for longer reading questions.

### Quick Decision Guide

| You see… | Routine |
|---|---|
| "…the most logical transition?" | Cover the blank → sum up each sentence in a few words → name the relationship → pick the matching family |
| "…relevant information from the notes to accomplish this goal?" | Read the goal first → write a checklist → tick the notes that serve it → check each choice against the checklist |

### Transition Relationships at a Glance

| Relationship | Words |
|---|---|
| Contrast | however, by contrast, on the other hand |
| Concession | nevertheless, even so, still |
| Replacement | instead, rather |
| Cause → effect | therefore, thus, consequently, as a result |
| Addition / similarity | moreover, furthermore, similarly, likewise |
| Example | for example, for instance |
| Restatement | in other words, that is |
| Sequence | next, then, subsequently, finally |

### Synthesis Goals at a Glance

| Goal | Checklist |
|---|---|
| Emphasize X | X at the center |
| Finding vs. method vs. aim | What they learned / what they did / what they wanted to learn |
| Explain why or how | A reason or mechanism |
| Unfamiliar audience | Identify X |
| Similarity / difference | Both items + the named feature |
| Generalization | A broad claim, not one example |

### The Most Common Misses

1. Picking "however" because it sounds right, without naming the relationship.
2. Running cause and effect backward.
3. Choosing a synthesis option because it is accurate or packed with facts.
4. Accepting a one-sided or wrong-feature comparison.`
    },
    {
      id: 'ei7-quiz',
      type: 'multiple-choice' as const,
      content: '**Timed Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: `Tube worms near deep-sea hydrothermal vents have no mouth or digestive system. ______ they rely on bacteria living inside their bodies, which turn chemicals from the vents into food. Which choice completes the text with the most logical transition?`,
            options: ['Instead,', 'Similarly,', 'For example,', 'Also,'],
            correctAnswer: 0,
            explanation: `The first sentence says what the worms lack; the second says what they do in its place. That is replacement, so "Instead" fits. The bacteria are not a parallel case, not an example of lacking a mouth, and not an additional thing the worms lack.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • In a 2019 study, Tim Gordon's team placed underwater speakers on patches of dead coral on the Great Barrier Reef. • The speakers played recordings of sounds from healthy reefs. • The researchers wanted to know whether these sounds would draw young fish to damaged reefs. • Over 40 days, patches with speakers attracted twice as many fish as silent patches. The student wants to present the aim of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Gordon\'s team asked whether healthy-reef sounds could draw young fish to damaged reefs.', 'Over 40 days, patches of reef with speakers drew twice as many fish as silent patches did.', 'Gordon\'s team placed underwater speakers on patches of dead coral on the Great Barrier Reef.', 'The speakers that Gordon\'s team placed on the reef played recordings of the sounds of healthy reefs.'],
            correctAnswer: 0,
            explanation: `An aim is what the researchers set out to learn, which the third note states directly. The twice-as-many-fish sentence is the finding, and the two speaker sentences describe the method.`
          }
        ]
      }    },
    {
      id: 'ei7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Solving Under Time Pressure

### Worked Example 1: A 30-Second Transition

"Glass looks perfectly solid. ______ its atoms are arranged in a disordered pattern, like a liquid's, rather than in a regular crystal."

| Seconds | Thought |
|---|---|
| 0–10 | Sentence 1: glass looks solid. Sentence 2: its atoms are arranged like a liquid's. |
| 10–20 | Appearance vs. inner structure → contrast |
| 20–30 | Pick the contrast word ("However,"); reject cause, example, and addition words |

### Worked Example 2: A 45-Second Synthesis

**Goal:** make a generalization about island birds.

| Seconds | Thought |
|---|---|
| 0–10 | Goal: generalization → the answer must be broad, not about one species |
| 10–30 | Scan the choices: three name one bird group; one describes a pattern |
| 30–45 | Confirm the broad choice is supported by the notes → done |

### Pacing Plan for Expression Questions

| Question type | Target time | If stuck |
|---|---|---|
| Transition | 30–45 seconds | Name the relationship out loud; eliminate other families |
| Synthesis | 45–60 seconds | Reread only the goal, not the notes |

### Error Log: What to Record After Practice

| Miss type | Fix |
|---|---|
| Chose the wrong "but" | Ask: two subjects (contrast), obstacle (concession), or replacement (instead)? |
| Reversed cause and effect | Check which sentence happens first in time |
| Chose an accurate but off-goal note | Rewrite the goal as a checklist before scanning |
| Chose a one-sided comparison | Check that both items appear |`
    },
    {
      id: 'ei7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Timed Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: `Sea otters eat large numbers of sea urchins, and sea urchins graze on kelp. ______ along coastlines where otters have returned, kelp forests have often grown back. Which choice completes the text with the most logical transition?`,
            options: ['As a result,', 'Nevertheless,', 'Similarly,', 'For instance,'],
            correctAnswer: 0,
            explanation: `More otters means fewer urchins, and fewer urchins means more kelp, so the regrowth is a result of the food chain the first sentence describes: "As a result" fits. Nothing is overcome, kelp regrowth is not a parallel case, and it is a consequence of the chain rather than an instance of it.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Venus flytraps catch insects with hinged leaves that snap shut. • The traps can close in about a tenth of a second. • Pitcher plants catch insects with tube-shaped leaves filled with digestive fluid. • Insects slip on the rim and fall in; the leaf itself does not move. The student wants to emphasize a difference in how the two plants trap insects. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['A flytrap\'s leaves snap shut on insects, but a pitcher plant\'s leaves stay still as insects fall in.', 'Both the Venus flytrap and the pitcher plant catch insects with leaves that are specially shaped.', 'A Venus flytrap\'s hinged leaves can snap shut on an insect in about a tenth of a second.', 'Pitcher plants catch insects using tube-shaped leaves that are filled with digestive fluid.'],
            correctAnswer: 0,
            explanation: `A difference needs both plants and the feature the goal names, how they trap insects. Only the snap-shut-versus-stay-still sentence does both. The both-plants sentence is a similarity, and the other two describe one plant each.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Hawaiian honeycreepers are a group of birds found only in Hawaii. • They descend from a single finch species that arrived millions of years ago. • Over time, different honeycreeper species evolved beaks suited to nectar, seeds, or insects. • Darwin's finches in the Galápagos Islands show the same pattern: one ancestral species gave rise to many species with different beaks. The student wants to make a generalization about how bird species can arise on islands. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['On islands, one ancestral bird species can give rise to many species with varied beaks.', 'Hawaiian honeycreepers, found only in Hawaii, descend from a single species of finch.', 'Darwin\'s finches live on the Galápagos Islands, far from the honeycreepers of Hawaii.', 'Different honeycreeper species have beaks suited to eating nectar, seeds, or small insects.'],
            correctAnswer: 0,
            explanation: `A generalization states a pattern beyond any one example, and the notes support one: in both Hawaii and the Galápagos, one ancestral species gave rise to many. The honeycreeper sentences describe one group only, and the Galápagos sentence gives a location without any pattern.`
          }
        ]
      }
    },
    {
      id: 'ei7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Expression of Ideas Final Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"The theory was widely doubted at first. ___, later experiments confirmed it." [However|Similarly|For example|Thus]',
          'Goal: "present the study\'s aim." Choose the sentence about [what the researchers wanted to learn|what the researchers found|where the study took place|how many animals were studied]',
          'Goal: "make a generalization." The answer should be [broad, beyond one example|about one species only|a list of every note|a single statistic]',
          'Transition routine: cover the blank, then [name the relationship|read the choices|count the words|check the commas]'
        ],
        correctAnswers: ['However', 'what the researchers wanted to learn', 'broad, beyond one example', 'name the relationship'],
        hint1: 'Doubted, then confirmed: the second sentence pushes against the first.',
        hint2: 'An aim is a goal set before the results are in.',
        hint3: 'A generalization covers more than one case.',
        explanation: 'Doubt followed by confirmation is a contrast ("However"). A study\'s aim is what the researchers wanted to learn. A generalization is broad. Name the relationship before reading the transition choices.'
      }
    },
    {
      id: 'ei7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Expression of Ideas

| Part | Topic | Core Skill |
|---|---|---|
| 1 | How the questions work | Two types: transitions and rhetorical synthesis |
| 2 | Contrast and concession | Choose the right kind of "but" |
| 3 | Cause, addition, example, sequence | Keep each family's promise; check direction |
| 4 | Reading the goal | Turn the goal into a checklist |
| 5 | Choosing the notes | Tick only the notes the goal needs |
| 6 | Comparisons and audience | Both items + the named feature; identify X for new readers |
| 7 | Mixed timed practice | Under a minute per question |

### Top 3 Expression of Ideas Rules
1. **Name the relationship** before reading the transition choices.
2. **Read the goal first**; accuracy never decides a synthesis question.
3. **Check both halves** of any comparison, trade-off, or cause and effect.

🎉 *Expression of Ideas complete!*`    }
  ]
};
