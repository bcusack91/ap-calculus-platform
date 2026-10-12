export const satTextStructurePurposePart1Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp1-intro',
      type: 'text' as const,
      content: `# Text Structure and Purpose

**Part 1 of 7 — Reading for What a Text Does**

Craft and Structure is the largest Reading and Writing domain on the digital SAT (about 28% of the section). It has three skills: **Words in Context**, **Text Structure and Purpose**, and **Cross-Text Connections**. This lesson covers the second one.

Every Text Structure and Purpose question gives you one short text (25 to 150 words) and asks about **how the text is built and why**, not about its facts. It comes in three shapes:

| Question shape | What the stem says | What it really asks |
|---|---|---|
| **Main purpose** | "Which choice best states the main purpose of the text?" | Why did the author write the whole text? |
| **Overall structure** | "Which choice best describes the overall structure of the text?" | In what order does the text make its moves? |
| **Function** | "Which choice best describes the function of the second sentence in the text as a whole?" | What job does one sentence do for the others? |

### Says vs. Does

The single most important habit in this skill is separating what a sentence **says** from what it **does**.

> "In 1990, only 12 percent of the town's homes had solar panels."

- **Says:** a fact about solar panels.
- **Does:** it depends on its neighbors. If the next sentence reports that 70 percent of homes have panels today, this sentence **establishes a baseline** for a change. If the next sentence says "Critics call the program a failure," it might be **evidence for** that criticism.

The answer choices on these questions are written in the language of *doing*: verbs like these.

| Move verb | The author is... |
|---|---|
| describe / present | reporting something without judging it |
| explain | showing how or why something happens |
| illustrate | giving an example of a general point |
| argue / advocate | taking a position and pushing for it |
| challenge / question | casting doubt on a view |
| qualify | limiting a claim ("only," "in some cases") |
| concede | granting a point to the other side |
| compare / contrast | setting two things side by side |
| propose / speculate | offering a possible answer or plan |`,
    },
    {
      id: 'tsp1-quiz',
      type: 'multiple-choice' as const,
      content: '**Warm-Up: The Three Question Shapes** 🎯',
      exercise: {
        questions: [
          {
            question: `Many people assume that a glacier moves too slowly to notice. Yet a glacier on the coast of Greenland has been measured advancing more than forty meters in a single summer day. Researchers attribute such bursts of speed to warming ocean water, which thins the floating ice at the glacier's front that had been holding back the ice behind it.

Which choice best states the main purpose of the text?`,
            options: [
              `To explain what allows a glacier to move much faster than people usually expect`,
              `To argue that warming ocean water will soon melt every glacier on Greenland's coast`,
              `To compare the speeds of glaciers in Greenland with the speeds of glaciers elsewhere`,
              `To describe how researchers developed new tools for measuring a glacier's speed`,
            ],
            correctAnswer: 0,
            explanation: `The text opens with a common assumption (glaciers are slow), gives a striking counterexample, and then explains the cause (warm water thinning the ice that held the glacier back), so its purpose is to explain the surprising speed. The "every glacier" choice is far stronger than anything the text claims. No other glaciers are compared, and the text never discusses measuring tools.`,
          },
          {
            question: `The town of Wexford once dumped its yard waste in a landfill. In 2019, it opened a composting site instead. Within three years, the waste sent to the landfill had dropped by a quarter, and the town was selling finished compost back to residents at half the price of store-bought soil.

Which choice best describes the function of the second sentence in the text as a whole?`,
            options: [
              `It presents a claim that the rest of the text goes on to dispute.`,
              `It explains why the town had relied on a landfill for so many years.`,
              `It describes a change whose results the rest of the text then reports.`,
              `It offers a prediction about the future price of store-bought soil.`,
            ],
            correctAnswer: 2,
            explanation: `The second sentence introduces the switch to composting, and the third sentence reports what happened as a result (less landfill waste, cheaper compost). Nothing in the text disputes the change, no reason is given for the earlier landfill use, and the comparison with store-bought soil is a reported fact, not a prediction.`,
          },
          {
            question: `For years, biologists assumed that a small mountain songbird survived freezing nights only by sheltering in tree hollows. Then a field team attached temperature sensors to dozens of the birds and found that many spent cold nights in the open, entering torpor, a sleeplike state in which body temperature falls and the heart slows. By morning, the birds had warmed up and resumed feeding.

Which choice best describes the overall structure of the text?`,
            options: [
              `It presents a hypothesis and then explains why researchers abandoned the study of it.`,
              `It describes an assumption and then presents findings that complicate it.`,
              `It describes a bird's daily routine and then compares it with the routines of other birds.`,
              `It states a problem facing a bird species and then proposes a way to protect the species.`,
            ],
            correctAnswer: 1,
            explanation: `"For years, biologists assumed" sets up a belief, and "Then a field team... found" brings evidence that the belief was incomplete: many birds survive in the open through torpor. No research is abandoned, no other species are compared, and the text proposes no protection plan.`,
          },
        ],
      },
    },
    {
      id: 'tsp1-text2',
      type: 'text' as const,
      content: `## Worked Example: Label the Moves

Read the text one sentence at a time and give each sentence a one- to three-word label for its **job**.

> (1) Archaeologists have long dated the harbor at Kalos to the fifth century BCE, the date carved on its oldest pier. (2) But the carving may tell us when the pier was dedicated, not when it was built. (3) Shells trapped in the pier's mortar, dated by radiocarbon, suggest that construction began nearly a century earlier. (4) If so, the harbor was already busy when the city's earliest surviving records were written.

| Sentence | Says | Does (label) |
|---|---|---|
| 1 | The harbor is dated to the 5th century BCE | **Accepted view** |
| 2 | The carving may mark a dedication | **Raises a doubt** (the pivot: "But") |
| 3 | Shells suggest an earlier date | **Evidence** for the doubt |
| 4 | The harbor was busy before the records | **Implication** of the new date |

Now the three question shapes almost answer themselves:

- **Main purpose:** *to present evidence that a harbor may be older than its accepted date.*
- **Overall structure:** *accepted view → reason to doubt it → supporting evidence → consequence.*
- **Function of sentence 2:** *it introduces a reason to question the date given in sentence 1.*

### The Three-Step Habit

| Step | Do this | Why |
|---|---|---|
| 1. Label | One short label per sentence | Turns content into moves |
| 2. Find the pivot | Look for "but," "yet," "however," "in fact" | The pivot usually carries the author's real point |
| 3. Predict | Say the answer in your own words **before** reading the choices | Wrong choices are written to sound plausible; a prediction protects you |

**Watch the verbs.** Sentence 3 says "suggest," and sentence 4 says "If so." The author is careful, so a choice claiming the text *proves* the harbor's age would be too strong.`,
    },
    {
      id: 'tsp1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Practice: Says vs. Does** 🎯',
      exercise: {
        questions: [
          {
            question: `Spider silk is, by weight, stronger than steel, and engineers have spent decades trying to produce it in bulk. Farming spiders has never worked: kept together, the animals eat one another. One laboratory has instead inserted silk-making genes into bacteria, which produce silk proteins in large vats. The fibers spun from those proteins are not yet as strong as natural silk, but they are improving with each batch.

Which choice best describes the function of the second sentence in the text as a whole?`,
            options: [
              `It provides evidence that spider silk is stronger than steel when measured by weight.`,
              `It describes a laboratory method that the text later presents as a promising option.`,
              `It suggests that engineers have given up on producing spider silk in bulk.`,
              `It explains why one obvious way of obtaining large amounts of spider silk has not worked.`,
            ],
            correctAnswer: 3,
            explanation: `The second sentence explains why simply farming spiders cannot supply silk in bulk (the spiders eat one another), which sets up the laboratory alternative that follows. The strength claim appears in the first sentence, the laboratory method appears in the third, and the text says engineers are still working on the problem.`,
          },
          {
            question: `Most bridges are designed to stay as rigid as possible. Engineer Rosa Delgado's footbridge over the Arno Canal does the opposite: its deck hangs from cables that let it sway slightly as people cross. Delgado argues that a small, controlled sway spreads the force of footsteps across the whole structure, so the bridge can be built with far less steel than a rigid design would require.

Which choice best states the main purpose of the text?`,
            options: [
              `To describe a bridge design that departs from common practice and the reasoning behind it`,
              `To argue that every new footbridge should be built so that it sways as people cross it`,
              `To explain why most engineers have long preferred to build rigid bridges rather than flexible ones`,
              `To compare the cost of steel with the cost of the cables used to build footbridges`,
            ],
            correctAnswer: 0,
            explanation: `The text sets up the usual practice (rigid bridges), describes Delgado's swaying design, and gives her reasoning for it, so its purpose is to describe an unusual design and why it works. Delgado argues for her own bridge's design, not that every footbridge should sway. The text never explains engineers' preference for rigidity or compares the prices of materials.`,
          },
          {
            question: `Each spring, the town of Millbrook floods when snowmelt overwhelms its narrow river channel. Widening the channel would cost millions of dollars and destroy the riverside park. A group of residents has proposed a cheaper option: restoring a wetland upstream that once soaked up meltwater before it reached town. Engineers estimate that the wetland could absorb about a third of a typical spring surge.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a proposal, lists the objections raised against it, and then rejects the proposal.`,
              `It compares two towns that face floods and explains why only one has solved the problem.`,
              `It identifies a problem, notes a drawback of one solution, and then presents an alternative.`,
              `It traces the history of a riverside park and then explains why the park should be expanded.`,
            ],
            correctAnswer: 2,
            explanation: `Sentence 1 states the problem (spring floods), sentence 2 gives the drawback of the obvious fix (widening is costly and would destroy the park), and sentences 3 and 4 present the wetland alternative with an estimate of its effect. The text raises no objections to the wetland plan, mentions only one town, and never argues for expanding the park.`,
          },
        ],
      },
    },
    {
      id: 'tsp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A "main purpose" question asks about [the whole text|the first sentence|the most surprising detail|the author\'s background]',
          'A "function" question asks what a sentence [does in the text|literally states|reveals about the author|predicts about the future]',
          'A sentence that begins with "But" or "Yet" usually [marks a pivot|restates the previous point|gives an example|summarizes the text]',
          'Before reading the answer choices, [label each sentence\'s job|reread the question three times|choose the longest choice|count the sentences]',
        ],
        correctAnswers: ['the whole text', 'does in the text', 'marks a pivot', 'label each sentence\'s job'],
        hint1: 'Purpose covers everything the author wrote, not one sentence.',
        hint2: 'Function = job, not content.',
        hint3: 'Contrast words turn a text toward the author\'s real point.',
        explanation: 'Main purpose covers the whole text. Function questions ask about a sentence\'s job. "But" and "Yet" usually mark the pivot. Labeling each sentence\'s job before reading the choices gives you a prediction to test the choices against.',
      },
    },
    {
      id: 'tsp1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key Rule |
|---|---|
| Three shapes | Main purpose, overall structure, function of a sentence |
| Says vs. does | Answer choices describe a sentence's **job**, not its facts |
| Move verbs | describe, explain, illustrate, argue, challenge, qualify, concede, compare, propose |
| Habit | Label each sentence → find the pivot → predict before reading choices |
| Verb strength | Match the author's caution: "suggests" is not "proves" |

*Next: Main Purpose Questions →*`,
    },
  ],
}
