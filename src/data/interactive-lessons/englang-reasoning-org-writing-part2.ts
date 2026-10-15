export const englangReasoningOrgWritingPart2Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'englangr2-intro',
      type: 'text' as const,
      content: `
# 🧱 Reasoning and Organization in Writing

**Part 2 of 7 — Planning a Line of Reasoning**

---

| Section |
|---------|
| 📖 From Thesis to Ordered Claims: a List Versus a Line |
| Four Ways to Order Your Claims |
| 🗺️ A Five-Minute Plan for Each Essay |

> 🔑 **Key Concept:** Skill **6.A** asks you to *develop a line of reasoning and commentary that explains it throughout an argument*. A line of reasoning is not a set of reasons that happen to share a thesis. It is a **sequence of claims in which each one does work the next one needs**. If you could shuffle your body paragraphs without losing anything, you have written a list, not a line. Part 1 gave you the essay blueprint; this part is about the thinking you do before you write, so that the blueprint has a direction.
`
    },
    {
      id: 'englangr2-ladder',
      type: 'text' as const,
      content: `
## 📖 From Thesis to Ordered Claims: a List Versus a Line

**Practice prompt (written in the AP style, not a released question):** In his essay "Self-Reliance" (1841), Ralph Waldo Emerson wrote, "A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines." Write an essay that argues your position on the value of consistency.

### Plan 1: a list

\`\`\`
Thesis: Emerson is right that consistency is overrated.
1. Consistency is boring and stops creativity.
2. People change as they grow up.
3. Famous scientists changed their minds.
\`\`\`

Each claim agrees with the thesis, but none depends on another. Paragraph 3 could come first and nothing would break. The essay will sound like three separate points, and the commentary in each paragraph will keep restating "so consistency is overrated."

### Plan 2: a line

\`\`\`
Thesis: Emerson is right about consistency of opinion but wrong if he
        means consistency of commitment; the "foolish" kind is the kind
        kept to protect an image rather than a promise.
1. Changing an opinion when evidence changes is how judgment improves.
   (Ground: what consistency of opinion costs.)
2. A promise, by contrast, is valuable because it holds after opinion
   shifts. (Builds on 1: the same change that helps belief destroys trust.)
3. So the useful test is motive: consistency kept for image is foolish;
   consistency kept for others is integrity. (Resolves 1 and 2.)
\`\`\`

| Test | Plan 1 | Plan 2 |
|---|---|---|
| Does each claim answer the prompt? | Yes | Yes |
| Could a reader disagree with each claim? | Barely: claim 2 is a fact about growing up | Yes: each is arguable |
| Does claim 2 need claim 1? | No | Yes: "by contrast" only works after claim 1 |
| Where does the essay end up? | Where it started | At a test the thesis promised |

Notice that Plan 2 uses Emerson's own word, **"foolish,"** as a lever: if some consistency is foolish, some may not be. Reading the prompt's quotation closely often hands you the distinction that turns a list into a line.

### The "because, but, so" check

Before you write, say your plan aloud as one sentence: *"[Claim 1], **but** [Claim 2], **so** [Claim 3]"* or *"[Claim 1], and **because** of that, [Claim 2]..."* If the only connector that fits is "and also," the claims are parallel rather than linked. Parallel claims can still score, but a linked plan makes Row B commentary much easier to write, because every paragraph has something to explain beyond its own example.
`
    },
    {
      id: 'englangr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly makes Plan 2 a line of reasoning rather than a list?',
            options: [
              'Its claims rely on one another, so their order cannot change',
              'It has three body claims, which matches the standard essay length',
              'Its thesis quotes Emerson, which shows close reading of the prompt',
              'All of its claims agree with Emerson, so its position stays consistent'
            ],
            correctAnswer: 0,
            explanation: 'Plan 2 is a line because claim 2 contrasts with claim 1 and claim 3 resolves both, so the order carries meaning. Plan 1 also has three claims and also agrees with Emerson, and quoting the prompt does not by itself connect claims.'
          },
          {
            question: 'A student\'s plan reads: "Social media spreads misinformation, and also it wastes time, and also it harms sleep." According to the "because, but, so" check, the plan',
            options: [
              'is strong, since three harms make a clear and well-supported thesis',
              'has parallel reasons that do not yet depend on or build on each other',
              'is off topic, since social media is not a subject for argument essays',
              'needs a counterargument paragraph first, before any of the three harms'
            ],
            correctAnswer: 1,
            explanation: 'The only connector that fits is "and also," which signals parallel reasons rather than linked ones. Such a plan can still score, and social media is a fine subject, but nothing in the check requires a counterargument to come first.'
          }
        ]
      }
    },
    {
      id: 'englangr2-orders',
      type: 'text' as const,
      content: `
## Four Ways to Order Your Claims

Once your claims are linked, choose an order on purpose. Each order makes a different promise to the reader.

| Order | The logic | Use it when | A topic-sentence signal |
|---|---|---|---|
| **Building (climactic)** | Each claim raises the stakes; the most important comes last | Your reasons differ in weight | "More important than cost is..." |
| **Dependency (chain)** | Claim 2 cannot be argued until the reader accepts claim 1 | Your argument runs on cause and effect | "Once we grant that..., it follows that..." |
| **Concession first** | Clear away the strongest objection, then build | Your audience starts out skeptical | "It is true that... Yet..." |
| **Narrow to broad** | Move from a person to a community to a nation or era | You want to end on implications (a route to Row C) | "The same pressure works on whole institutions..." |

### Mentor text: George Washington, Farewell Address (1796)

Washington's argument for union builds to the value his audience cared about most:

> "The unity of government which constitutes you one people is also now dear to you. It is justly so, for it is a main pillar in the edifice of your real independence, the support of your tranquility at home, your peace abroad; of your safety; of your prosperity; of that very liberty which you so highly prize."

The benefits move from **order** (tranquility, peace, safety) to **wealth** (prosperity) to **liberty**, the one he marks with "that very... which you so highly prize." That is building order compressed into one sentence. The address as a whole follows a dependency order too: Washington first argues that union is the foundation, *then* warns against the forces that could break it (sectional parties, the spirit of party), and only later turns to relations with foreign nations. The warnings would mean little to a reader not yet convinced that union is worth protecting.

> 🔑 **AP Connection:** Rhetorical analysis essays often follow the passage's own order, which is fine as long as each paragraph explains a **choice and its purpose**. On the argument and synthesis essays, you choose the order, so choose one you could defend in a sentence.
`
    },
    {
      id: 'englangr2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An order in which the most important claim comes last is called _______ (or building) order.

2) In Washington's sentence about the "main pillar," the benefit placed last for emphasis is _______.

3) If you can shuffle your body paragraphs without losing meaning, your plan is a _______ rather than a line.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['climactic', 'liberty', 'list'],
        hint1: 'It comes from the Greek word for "ladder."',
        hint2: 'Washington says his audience "so highly prize[s]" it.',
        hint3: 'Plan 1 in the first section was one of these.',
        explanation: 'Climactic order saves the weightiest claim for last, as Washington does by ending on liberty. Claims that can be reordered without loss form a list rather than a line of reasoning.'
      }
    },
    {
      id: 'englangr2-plans',
      type: 'text' as const,
      content: `
## 🗺️ A Five-Minute Plan for Each Essay

Section II lasts **2 hours 15 minutes**, including a **15-minute reading period**, with about **40 minutes** suggested per essay. Spending four or five of those minutes on a plan is what lets the other thirty-five go to commentary.

| Essay | What the plan must settle | Typical order |
|---|---|---|
| **Synthesis** | Your position; two or three claims; which **sources** (at least three) support each; which source voices the strongest objection | Concession first or dependency |
| **Rhetorical analysis** | A thesis about the writer's **choices and purpose**; which moves you will analyze | Usually the passage's order, with each paragraph tied to purpose |
| **Argument** | Your position; claims that build; one specific example per claim | Building or narrow to broad |

### Worked example: an argument plan in five minutes

**Prompt (AP style, not released):** Benjamin Franklin, in his *Autobiography*, describes listing thirteen virtues and tracking his faults against them each day in a small book. Argue your position on the value of tracking one's own progress toward a goal.

\`\`\`
Minute 1: Position. Tracking helps, but only when it measures behavior,
          not identity.
Minute 2: Claims, in order.
   1. Tracking makes progress visible, which keeps effort going
      (Franklin's book: he could see his marks grow fewer).
   2. But the same record can turn into a scoreboard of who you are,
      and a bad week then feels like a verdict (fitness-app streaks).
   3. So the useful tracker counts actions you can repeat tomorrow,
      not traits you are trying to prove (study hours vs "being smart").
Minute 3: Test the order. 2 needs 1 (the same visibility cuts both ways);
          3 resolves the tension. Dependency order: keep it.
Minute 4: One sentence of commentary per claim, written as a fragment.
Minute 5: Note the broader implication for the conclusion
          (schools that grade effort vs ability).
\`\`\`

The plan has no full sentences and no introduction. It does have the one thing a plan exists for: each claim says how it relates to the one before.
`
    },
    {
      id: 'englangr2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Order** 🔍

Pick the order that best fits each writer's situation.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Your readers already oppose your position, and one objection dominates: ___',
            options: ['concession first', 'building order', 'narrow to broad', 'dependency order']
          },
          {
            label: 'Your second claim only makes sense once readers accept your first: ___',
            options: ['concession first', 'building order', 'narrow to broad', 'dependency order']
          },
          {
            label: 'Your claims move from one student to a whole school system: ___',
            options: ['concession first', 'building order', 'narrow to broad', 'dependency order']
          }
        ],
        correctAnswers: ['concession first', 'dependency order', 'narrow to broad'],
        hint1: 'Clear the obstacle before you build.',
        hint2: 'One claim is the premise for the next.',
        hint3: 'The scale widens as the essay goes on.',
        explanation: 'A skeptical audience calls for answering its objection first; a premise-then-consequence plan is dependency order; moving from an individual to an institution is narrow to broad, which sets up implications.'
      }
    },
    {
      id: 'englangr2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the Franklin plan, why does the student place the claim about tracking as a "verdict" second rather than first?',
            options: [
              'It is the weakest claim, so it belongs where readers notice it least',
              'It turns the benefit of visibility from the first claim into a risk',
              'It is a counterargument, and rebuttals must follow every main claim',
              'It needs a modern example, and those belong in the middle of essays'
            ],
            correctAnswer: 1,
            explanation: 'The second claim depends on the first: the same visibility that sustains effort can make a bad week feel like a judgment. Its placement has nothing to do with hiding a weak claim, a fixed rule for rebuttals, or where modern examples go.'
          },
          {
            question: 'A synthesis plan lists a position and three claims but does not say which sources support which claim. What is the most likely problem in the essay that results?',
            options: [
              'The thesis will lose its defensibility',
              'Evidence may pile up in one paragraph',
              'The essay may have too many claims',
              'The conclusion will repeat the thesis'
            ],
            correctAnswer: 1,
            explanation: 'Without assigning sources to claims, writers tend to pile sources wherever they remember them, leaving other claims with no evidence. The missing assignments do not change whether the thesis is defensible, how many claims there are, or what the conclusion says.'
          },
          {
            question: 'Which revision of the list plan ("consistency is boring; people change; scientists changed their minds") would best turn it into a line of reasoning?',
            options: [
              'Add a fourth claim about historical figures who refused to change',
              'Move the claim about scientists first because it is the most specific',
              'Recast the claims so that each one answers a question the one before raises',
              'Replace "boring" with a more formal word, such as "monotonous" or "stale"'
            ],
            correctAnswer: 2,
            explanation: 'A line exists when each claim responds to what the previous one leaves open. Adding a claim lengthens the list, reordering for specificity does not connect the claims, and word choice changes style rather than structure.'
          }
        ]
      }
    }
  ]
}
