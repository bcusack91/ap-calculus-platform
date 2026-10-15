export const englitFigurativeLanguagePart6Data = {
  topicSlug: 'englit-figurative-language',
  sections: [
    {
      id: 'englitfi6-intro',
      type: 'text' as const,
      content: `
# 🪞 Figurative Language

**Part 6 of 7 — Figurative Language on the Exam**

---

| Section |
|---------|
| 📖 Figurative Language in Section I |
| Practice Passage: The Opening of "Prufrock" |
| From Figure to Claim: A Four-Step Method |
| An Annotated Q1 Paragraph |
| Writing Practice |

> 🔑 **Key Concept:** Figurative language appears everywhere on the exam. In Section I (55 multiple-choice questions in 60 minutes, 45% of the score, in five sets of passage-based questions) many questions ask what an image, comparison or allusion "suggests," "emphasizes" or "serves to" do. In Section II, Q1 (poetry) and Q2 (prose fiction) ask you to analyze how an author uses literary elements and techniques, and figures are often the richest evidence. Earlier units covered the Q1 and Q2 prompts, the thesis and the rubric. This part focuses on one skill: turning a figure into an argument.
`
    },
    {
      id: 'englitfi6-stems',
      type: 'text' as const,
      content: `
## 📖 Figurative Language in Section I

| Stem you will see | What it is really asking | How to approach it |
|---|---|---|
| "In context, the image of ... primarily serves to" | The **function** of the image in this passage | Reread the lines around it; the right answer fits the passage's argument, not just the image |
| "The comparison of ... to ... emphasizes" | Which **quality** transfers from vehicle to tenor | List what the vehicle is like; keep only what fits the tenor here |
| "The metaphor in line ... suggests that the speaker" | What the figure reveals about a **perspective** | Ask why this speaker would reach for this vehicle |
| "Which of the following best describes the function of the allusion to ..." | What the reference **imports** | Use the three questions from Part 4: source, fit, straight or ironic |
| "In line ..., the word ... is best understood as" | **Literal vs figurative** meaning (skill 5.A) | Test both senses in context; "in context" warns that the familiar meaning may be wrong |

### How the Wrong Answers Are Built

Distractors on figurative questions usually fail in one of four predictable ways. Learn to spot them.

| Trap | What it does | Example (for "the evening ... Like a patient etherized upon a table") |
|---|---|---|
| **Literal reading** | Treats the vehicle as real | "The speaker is a surgeon on his way to work" |
| **Wrong quality** | Transfers a trait the context does not support | "The evening is peaceful and healing" |
| **Vehicle only** | Says something true of the vehicle but not the tenor | "Ether puts surgical patients to sleep" |
| **Too broad** | States a theme the passage cannot support alone | "Modern life is meaningless" |
`
    },
    {
      id: 'englitfi6-passage',
      type: 'text' as const,
      content: `
## Practice Passage: The Opening of "Prufrock"

Part 4 traced the allusions in this poem. Here is its opening, read for imagery and comparison.

> Let us go then, you and I,
> When the evening is spread out against the sky
> Like a patient etherized upon a table;
> Let us go, through certain half-deserted streets,
> The muttering retreats
> Of restless nights in one-night cheap hotels
> And sawdust restaurants with oyster-shells:
> Streets that follow like a tedious argument
> Of insidious intent
> To lead you to an overwhelming question ...
> Oh, do not ask, "What is it?"
> Let us go and make our visit.
>
> In the room the women come and go
> Talking of Michelangelo.
>
> The yellow fog that rubs its back upon the window-panes,
> The yellow smoke that rubs its muzzle on the window-panes,
> Licked its tongue into the corners of the evening,
> Lingered upon the pools that stand in drains,
> Let fall upon its back the soot that falls from chimneys,
> Slipped by the terrace, made a sudden leap,
> And seeing that it was a soft October night,
> Curled once about the house, and fell asleep.
>
> — T. S. Eliot, "The Love Song of J. Alfred Prufrock," *Poetry*, 1915; collected in *Prufrock and Other Observations*, 1917
`
    },
    {
      id: 'englitfi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, the simile comparing the evening to "a patient etherized upon a table" primarily serves to`,
            options: [
              `replace a romantic sunset with an image of numb, clinical passivity`,
              `suggest that the speaker is a doctor walking to a hospital`,
              `celebrate the calm beauty of the sky at sunset`,
              `warn that the speaker is about to become seriously ill`
            ],
            correctAnswer: 0,
            explanation: `A poem titled a "Love Song" might be expected to open on a romantic sunset; instead the sky is a drugged body laid out for surgery, motionless and waiting. Reading the vehicle literally (a doctor, an illness) or as peaceful beauty misses its unsettling effect.`
          },
          {
            question: `The streets that "follow like a tedious argument / Of insidious intent" are presented as`,
            options: [
              `a pleasant distraction from the speaker's worries`,
              `the setting of a debate that the speaker hopes to win`,
              `a route leading the speaker toward a question he dreads`,
              `evidence that the speaker is lost in an unfamiliar city`
            ],
            correctAnswer: 2,
            explanation: `Like an argument with a hidden aim, the streets lead "To an overwhelming question," and the speaker immediately refuses to say what it is. They are tedious, not pleasant; no actual debate takes place; and the speaker seems to know these streets well.`
          },
          {
            question: `The fog stanza's final action, "Curled once about the house, and fell asleep," chiefly suggests`,
            options: [
              `that the fog has finally lifted from the city`,
              `restless energy that subsides into stillness`,
              `the comfort that the speaker finds in his own home`,
              `that the speaker owns a pet cat that he loves dearly`
            ],
            correctAnswer: 1,
            explanation: `After rubbing, licking, slipping and "a sudden leap," the fog simply curls up and sleeps, so its energy collapses into rest, the same pattern of approach and retreat that marks the speaker. The fog has not lifted, the house is not shown to be his, and the cat exists only as the metaphor's vehicle.`
          }
        ]
      }
    },
    {
      id: 'englitfi6-method',
      type: 'text' as const,
      content: `
## From Figure to Claim: A Four-Step Method

| Step | Question | "Patient etherized" | The fog as a cat |
|---|---|---|---|
| **1. Tenor and vehicle** | What is compared to what? | The evening sky / an anesthetized surgical patient | The yellow fog and smoke / a cat (never named) |
| **2. Transferred qualities** | What does the tenor borrow? | Stillness, unconsciousness, being laid out, waiting to be cut | Sensuous rubbing, licking, lingering; a sudden leap; curling up asleep |
| **3. Perspective** | Why would *this* speaker see it this way? | A man who feels inspected and helpless projects his own state onto the sky | A man who approaches and retreats sees the same motion in the fog |
| **4. Claim** | What does the figure argue, in terms of the prompt? | The poem's world is numbed and clinical, not romantic | Even the fog acts out paralysis: energy that never completes its act |

**Steps 3 and 4 earn the points.** Steps 1 and 2 are notes in your margin. A Row B score of 3 or 4 depends on commentary that explains how the evidence supports the line of reasoning, which means writing steps 3 and 4 in full sentences.

### One Figure, One Paragraph? Not Necessarily

The strongest paragraphs are organized by **idea**, not by device. Here, two different figures (a simile and an extended metaphor) support one idea: action that sinks into stillness. A paragraph that pairs them makes a stronger argument than two separate paragraphs, one on "simile" and one on "metaphor."
`
    },
    {
      id: 'englitfi6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Move to the Rubric** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `A defensible claim in the introduction that the poem's images enact the speaker's paralysis: ___`,
            options: ['Row A (thesis)', 'Row B (evidence and commentary)', 'Row C (sophistication)', 'no point (summary)']
          },
          {
            label: `Explaining how "fell asleep" turns the fog's leap into inaction, and linking this to the speaker: ___`,
            options: ['Row B (evidence and commentary)', 'Row A (thesis)', 'Row C (sophistication)', 'no point (summary)']
          },
          {
            label: `Arguing throughout that the fog is both sensuously appealing and a picture of the speaker's paralysis: ___`,
            options: ['Row C (sophistication)', 'Row A (thesis)', 'Row B (evidence and commentary)', 'no point (summary)']
          }
        ],
        correctAnswers: ['Row A (thesis)', 'Row B (evidence and commentary)', 'Row C (sophistication)'],
        hint1: 'Row A is worth 0-1 point and rewards a defensible interpretation.',
        hint2: 'Row B (0-4) rewards specific evidence plus explanation of how it supports the reasoning.',
        hint3: 'Row C (0-1) can be earned by exploring a complexity or tension consistently, not in one sentence.',
        explanation: 'The thesis earns Row A, explained evidence builds Row B, and a tension sustained across the essay is one route to Row C.'
      }
    },
    {
      id: 'englitfi6-model',
      type: 'text' as const,
      content: `
## An Annotated Q1 Paragraph

**Practice prompt.**

> **Prompt:** The following excerpt is the opening of T. S. Eliot's "The Love Song of J. Alfred Prufrock," published in 1915. Read the passage carefully. Then, in a well-written essay, analyze how Eliot uses literary elements and techniques to convey the speaker's complex state of mind.

The prompt also gives the standard instructions: "Respond to the prompt with a thesis that presents a defensible interpretation. Select and use evidence to support your line of reasoning. Explain how the evidence supports your line of reasoning. Use appropriate grammar and punctuation in communicating your argument."

### A Weak Paragraph (Device-Spotting)

> **Weak:** Eliot uses a simile when he compares the evening to a patient etherized upon a table. He also uses personification and metaphor with the fog, which acts like a cat. These devices create vivid imagery and show how the speaker feels about the evening.

It names devices correctly and quotes accurately, but it never says *how* the speaker feels or *why* these figures show it. It would earn little in Row B.

### A Strong Paragraph

> **(1)** Eliot's images of the evening do not describe a setting so much as diagnose the man moving through it: each one gathers itself toward action and then sinks into stillness. **(2)** The first simile lays the evening out "Like a patient etherized upon a table," replacing the sunset a love song might promise with an operating room. **(3)** The sky borrows the patient's condition, drugged, motionless and waiting to be cut, and that is Prufrock's condition too, for he will spend the poem dreading "The eyes that fix you in a formulated phrase." **(4)** The fog stanza stretches the same pattern across eight lines. **(5)** Eliot never names a cat, yet the fog "rubs its back," "Licked its tongue into the corners of the evening," and "made a sudden leap," verbs that promise sensuous, even predatory, energy. **(6)** But the leap goes nowhere: the fog "Curled once about the house, and fell asleep." **(7)** The stanza thus acts out in miniature the shape of Prufrock's evening, a burst of approach that circles the house where the "overwhelming question" waits and then subsides into sleep. **(8)** Read together, the two figures suggest that Prufrock's paralysis is not a single failure of nerve but the condition of the world as he perceives it, a world in which even the weather cannot finish what it starts.

### How the Paragraph Earns Its Points

| Sentence | What it does | Rubric |
|---|---|---|
| (1) | States the paragraph's claim, which develops the essay's line of reasoning (paralysis) | Supports Row A's thesis; organizes Row B |
| (2) | Specific evidence, introduced with its context (a love song's expected sunset) | Row B: evidence |
| (3) | Commentary: names the transferred qualities and links them to the speaker, with a second quotation | Row B: commentary (the key move) |
| (4)-(6) | Evidence chosen as a sequence: verbs of energy, then the turn to sleep | Row B: evidence selected to show a pattern |
| (7) | Commentary: explains how the stanza's shape mirrors the speaker | Row B: commentary |
| (8) | Widens the claim: paralysis as the speaker's whole way of seeing, holding the fog's appeal and its inertia together | A move toward Row C if sustained across the essay |

Notice what the paragraph does **not** do: it does not label "simile" or "metaphor" more than necessary, it does not retell the poem, and it does not claim to know what the "overwhelming question" is.
`
    },
    {
      id: 'englitfi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Writing Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: `Which thesis would best respond to the practice prompt about the speaker's complex state of mind?`,
            options: [
              `Eliot uses simile, metaphor and allusion to describe a city on an autumn evening.`,
              `In "Prufrock," Eliot writes about a nervous man who is on his way to a party.`,
              `Eliot shows that the speaker is a lonely, sad person who is afraid of women.`,
              `Eliot's drowsy images reveal a man drawn toward action yet unable to act.`
            ],
            correctAnswer: 3,
            explanation: `This thesis makes a defensible interpretation of a complex state, attraction and paralysis, and implies a line of reasoning through the images. Listing devices, summarizing the situation or offering a vague label does not present an interpretation that an essay could develop.`
          },
          {
            question: `Which sentence offers the strongest commentary on the fog's "sudden leap"?`,
            options: [
              `This leap is an example of personification.`,
              `The fog leaps, which shows that it is moving very quickly through the darkening city streets.`,
              `The leap promises action, yet it ends in sleep and so mirrors the speaker's own retreats.`,
              `Cats often leap suddenly, so this is a realistic detail that helps the reader picture the scene.`
            ],
            correctAnswer: 2,
            explanation: `Strong commentary connects the detail to the speaker and the line of reasoning: a leap that ends in sleep mirrors his approach and retreat. Naming the device, restating the action or praising its realism does not explain how the evidence supports a claim.`
          },
          {
            question: `A student's body paragraph discusses the simile, then the metaphor, then the allusion to Michelangelo, each in a separate sentence with no link between them. The most effective revision would be to`,
            options: [
              `add two more devices so the paragraph seems thorough`,
              `organize the figures around the one idea they jointly support`,
              `replace all the quotations with a summary of the poem`,
              `move the allusion to Michelangelo into a separate concluding paragraph`
            ],
            correctAnswer: 1,
            explanation: `Paragraphs score best when evidence serves a single claim, so the figures should be arranged around the idea they share. More devices, less evidence or a relocated allusion would leave the paragraph a list rather than an argument.`
          }
        ]
      }
    },
    {
      id: 'englitfi6-checklist',
      type: 'text' as const,
      content: `
## A Checklist for Writing About Figures

| Before you write about a figure, ask... | Because... |
|---|---|
| Can I say what is compared to what, in my own words? | If you cannot, you are not ready to explain it |
| Which qualities transfer, and which do not? | The answer to "emphasizes" questions is a transferred quality |
| Whose figure is it, and what does it reveal about that mind? | Perspective turns labeling into interpretation |
| Does it belong to a pattern? | Patterns supply a line of reasoning |
| Does it complicate my claim? | Tensions are the most reliable route to Row C |

> 🔑 **AP Connection:** In the 40 minutes for each essay, you have time for only two or three body paragraphs. Choose the figures that do the most work for your thesis, quote them briefly, and spend most of your words explaining them. A short quotation with three sentences of commentary beats a long quotation with one.
`
    }
  ]
}
