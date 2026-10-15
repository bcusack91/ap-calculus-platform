export const englitPoetry2Part6Data = {
  topicSlug: 'englit-poetry-2',
  sections: [
    {
      id: 'englitpo6-intro',
      type: 'text' as const,
      content: `
# 🌙 Poetry Analysis II

**Part 6 of 7 — Q1 Workshop: Complexity and the Sophistication Point**

---

| Section |
|---------|
| 📖 What Row C Rewards |
| Practice Prompt: Rossetti's "Up-Hill" |
| Reading for Tension |
| From a Simple to a Complex Thesis |
| An Annotated Model Paragraph |

> 🔑 **Key Concept:** Poetry Analysis I walked through the Q1 prompt, the thesis and a 40-minute plan. This part targets the hardest point on the rubric: **Row C, sophistication** (0-1). Most essays that earn it do so because the writer noticed a tension in the poem early and built the whole argument around it.

| Rubric row | Points | What earns it |
|---|---|---|
| A: Thesis | 0-1 | A defensible interpretation of the poem that responds to the prompt |
| B: Evidence and commentary | 0-4 | Specific evidence and commentary that explains how it supports a line of reasoning |
| C: Sophistication | 0-1 | Sophistication of thought or a complex literary argument, sustained across the essay |
`
    },
    {
      id: 'englitpo6-rowc',
      type: 'text' as const,
      content: `
## 📖 What Row C Rewards

The scoring guidelines name several ways to earn the sophistication point. You need only one, and it must be woven into the argument, not tacked on.

| Route | What it looks like in an essay | Trap to avoid |
|---|---|---|
| **Exploring complexities or tensions** | The thesis names two pulls in the poem (comfort and dread, faith and doubt) and the body paragraphs keep both in play | Calling everything "ambiguous" without explaining what the ambiguity does |
| **Situating the interpretation in a broader context** | Connecting the poem's view of death to a wider tradition, such as the journey-of-life allegory | A paragraph of history or biography that is not tied back to the text |
| **Accounting for alternative interpretations** | "One might read the answerer as death itself; yet the promise of 'beds for all' suggests..." | Listing readings without deciding how they relate |
| **A consistently vivid and persuasive style** | Precise verbs, controlled sentences, quotations embedded smoothly | Ornate vocabulary that blurs the argument |

A single sophisticated sentence in the conclusion rarely earns the point. Readers look for complexity that shapes the thesis, the topic sentences and the commentary.
`
    },
    {
      id: 'englitpo6-poem',
      type: 'text' as const,
      content: `
## Practice Prompt: Rossetti's "Up-Hill"

*Practice prompt written in the AP format (not a released exam question):*

> In the following poem, published in 1862, Christina Rossetti presents a conversation about a journey. Read the poem carefully. Then, in a well-written essay, analyze how Rossetti uses literary elements and techniques to convey a complex attitude toward the journey and its end.

> Does the road wind up-hill all the way?
> Yes, to the very end.
> Will the day's journey take the whole long day?
> From morn to night, my friend.
>
> But is there for the night a resting-place?
> A roof for when the slow dark hours begin.
> May not the darkness hide it from my face?
> You cannot miss that inn.
>
> Shall I meet other wayfarers at night?
> Those who have gone before.
> Then must I knock, or call when just in sight?
> They will not keep you standing at that door.
>
> Shall I find comfort, travel-sore and weak?
> Of labour you shall find the sum.
> Will there be beds for me and all who seek?
> Yea, beds for all who come.
>
> — Christina Rossetti, "Up-Hill," *Goblin Market and Other Poems*, 1862

### First Moves

- **Situation:** Two voices. In every stanza a traveler asks questions (lines 1 and 3) and someone answers (lines 2 and 4).
- **Allegory:** The road is life, the day is a lifetime, the night is death, the inn is the grave or the life after it, and the "wayfarers" who have "gone before" are the dead. This is the journey-of-life allegory you met in Part 5.
- **Form:** The questions are long lines; the answers are mostly shorter (in the original the answers are indented). The rhyme scheme is ABAB in every stanza, so each answer rhymes with the other answer, not with a question.
`
    },
    {
      id: 'englitpo6-tension',
      type: 'text' as const,
      content: `
## Reading for Tension

The poem can be read as pure comfort: there is a resting place, it cannot be missed, there are beds for all. It can also be read as quietly grim: the road is uphill "to the very end," and the "inn" is a grave. The richest reading keeps both.

| Answer | Comforting sense | Unsettling sense |
|---|---|---|
| "Yes, to the very end." | Honest: the answerer will not lie | The struggle never eases |
| "You cannot miss that inn." | Reassurance for an anxious traveler | No one can avoid it |
| "Those who have gone before." | Company on arrival | The company is the dead |
| "They will not keep you standing at that door." | A warm welcome | Death admits everyone, promptly |
| "Of labour you shall find the sum." | Rest proportioned to effort, a reward | "Sum" can also mean the total of the labor itself, the end of all work |
| "Yea, beds for all who come." | Room for everyone | Beds as graves, row on row |

Notice also the **syntax of the voices**. The traveler's questions grow more personal and practical (directions, knocking, comfort). The answers stay brief, calm and certain. The answerer never says *what* the inn is. That restraint is the source of the poem's complexity: the answers are true and comforting, and they withhold as much as they reveal.
`
    },
    {
      id: 'englitpo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reading** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The answers in "Up-Hill" are best characterized as`,
            options: [
              `brief and certain, yet reticent about what lies ahead`,
              `impatient with the traveler's foolish questions`,
              `deliberately false, meant to keep the traveler walking`,
              `uncertain, since the answerer has never made the journey`
            ],
            correctAnswer: 0,
            explanation: `Each reply is short and confident, but none says what the "inn" actually is, so comfort and silence coexist. The tone is patient ("my friend"), nothing marks the answers as lies, and their certainty suggests knowledge, not doubt.`
          },
          {
            question: `In context, the line "Of labour you shall find the sum" most likely suggests that`,
            options: [
              `the traveler will be paid in money at the inn`,
              `rest will reward the labor, or end it`,
              `the traveler must calculate the length of the road`,
              `work will continue for the traveler after death`
            ],
            correctAnswer: 1,
            explanation: `"Sum" can mean a reward equal to the effort or the total of the work itself, now completed; both fit a journey that ends in rest. Money, arithmetic and further labor do not fit the promised "beds."`
          },
          {
            question: `The rhyme scheme, in which each answer rhymes with the other answer in its stanza, most likely reinforces`,
            options: [
              `the traveler's growing confidence`,
              `the respondent's settled, steady voice`,
              `the confusion between the two speakers`,
              `the poem's shift from night to morning`
            ],
            correctAnswer: 1,
            explanation: `Answers rhyme with answers (end/friend, begin/inn), giving the respondent a voice that echoes itself and sounds settled. The traveler stays anxious, the two voices are clearly distinct, and the poem moves toward night, not morning.`
          }
        ]
      }
    },
    {
      id: 'englitpo6-thesis',
      type: 'text' as const,
      content: `
## From a Simple to a Complex Thesis

| Level | Thesis | Rubric result |
|---|---|---|
| Summary | "In 'Up-Hill,' a traveler asks questions about a journey and someone answers them." | Row A: 0. Describes, does not interpret |
| Simple and defensible | "Rossetti uses a question-and-answer structure and the image of an inn to show that death brings rest." | Row A: 1. Defensible, but it flattens the poem |
| Complex | "Through the calm, brief answers given to an anxious traveler, Rossetti presents death as both a welcome rest and an inescapable end, so that the poem's comfort cannot be separated from its quiet dread." | Row A: 1, and a line of reasoning that can sustain Row C |

What makes the third thesis complex is not its length. It names a **tension** (rest vs. inevitability) and a **method** (the contrast between the two voices) that will organize every paragraph.

### A Line of Reasoning for the Complex Thesis

1. The traveler's questions grow from practical to fearful, revealing anxiety about the end.
2. The answers comfort through certainty, but the same certainty makes the end unavoidable ("You cannot miss that inn").
3. The final images of community and beds promise rest and also picture a churchyard, holding comfort and dread together.

### Routes to Row C for This Poem

| Route | Example sentence |
|---|---|
| Tension | "The answerer's honesty is itself the comfort and the threat: no lie softens the climb, and none softens the end." |
| Alternative interpretation | "If the answerer is a guide like Christ, the inn promises heaven; if the answerer is Death, the same words become a summons. The poem's refusal to name the speaker allows both." |
| Broader context | "Rossetti, a devout Anglican, reworks the old Christian allegory of life as a pilgrimage, the tradition of Bunyan's *Pilgrim's Progress*, but strips it of any vision of the Celestial City." |
`
    },
    {
      id: 'englitpo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Row C Route?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"Read one way, the inn is heaven; read another, it is the grave. Rossetti's silence allows both." This mainly shows ___`,
            options: ['alternative interpretations', 'broader context', 'vivid style', 'plot summary']
          },
          {
            label: `"The poem reworks the pilgrimage allegory familiar from Bunyan." This mainly shows ___`,
            options: ['broader context', 'alternative interpretations', 'vivid style', 'plot summary']
          },
          {
            label: `"The answers comfort by refusing to lie, and that same honesty makes the end unavoidable." This mainly shows ___`,
            options: ['exploring a tension', 'broader context', 'plot summary', 'device listing']
          }
        ],
        correctAnswers: ['alternative interpretations', 'broader context', 'exploring a tension'],
        hint1: 'Two different readings are weighed.',
        hint2: 'The poem is placed in a tradition beyond itself.',
        hint3: 'One feature produces two opposite effects.',
        explanation: 'Weighing heaven against the grave accounts for alternative readings; linking the poem to Bunyan situates it in a broader context; and showing honesty as both comfort and threat explores a tension.'
      }
    },
    {
      id: 'englitpo6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Paragraph

> **(1)** Rossetti's answers comfort the traveler through certainty, but that certainty is exactly what makes the end impossible to escape. **(2)** When the traveler fears that darkness may "hide" the resting place, the reply is swift and flat: "You cannot miss that inn." **(3)** On its surface the line is reassurance for a nervous traveler; yet "cannot miss" also means cannot avoid, so the inn that promises shelter is also a destination no one is permitted to pass by. **(4)** The same double force runs through the answer that the traveler will meet "Those who have gone before." **(5)** The phrase offers company at the journey's end, but the company is the dead, and the welcome ("They will not keep you standing at that door") is prompt because death admits everyone. **(6)** By never naming the inn, the answerer lets comfort and dread occupy the same words, and the reader, like the traveler, must accept both.

| Sentence | Job | Rubric link |
|---|---|---|
| (1) | Topic sentence: a claim that carries the thesis's tension | Line of reasoning (Row B), sets up Row C |
| (2) | Evidence, embedded with context | Row B: specific evidence |
| (3) | Commentary on a double meaning ("cannot miss") | Row B: explains *how* the evidence supports the claim |
| (4)-(5) | Second piece of evidence, same tension | Row B: develops rather than repeats |
| (6) | Connects the pattern back to the poem's method and meaning | Row C: complexity sustained, not announced |

Notice what the paragraph does **not** do. It never says "Rossetti uses diction" or "this creates imagery." Every device it touches (syntax, double meaning, allegory) is named only through what it does.
`
    },
    {
      id: 'englitpo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student's essay ends with the sentence "Of course, the poem could also be about something else entirely." For Row C, this sentence most likely`,
            options: [
              `earns the point, since it gestures toward other readings`,
              `does not earn the point, since no alternative is developed`,
              `loses the thesis point, since it undercuts the introduction`,
              `earns the point, since sophistication may appear anywhere`
            ],
            correctAnswer: 1,
            explanation: `Row C rewards an alternative reading that is explained and weighed, not a gesture toward one. A weak closing sentence does not erase a thesis earned earlier, and a single undeveloped sentence cannot show sophistication wherever it appears.`
          },
          {
            question: `Which thesis would best support a sophisticated argument about "Up-Hill"?`,
            options: [
              `Rossetti uses many literary devices, such as rhyme and imagery, to describe a journey.`,
              `The calm answers make death both a promised rest and an end no traveler can avoid.`,
              `Rossetti, a religious poet, wrote this poem to persuade readers to believe in heaven.`,
              `The poem is about a long walk up a hill that ends at a comfortable inn for the night.`
            ],
            correctAnswer: 1,
            explanation: `This thesis interprets the poem, names a method, and holds a tension that can organize the essay. Listing devices is not an argument, the persuasion claim reduces the poem to biography, and the literal summary ignores the allegory.`
          },
          {
            question: `The traveler's questions, moving from the road's slope to knocking at a door and finding beds, chiefly convey`,
            options: [
              `a growing concern with the practical details of arrival`,
              `a wish to turn back before the journey is finished`,
              `a suspicion that the answerer is deceiving the traveler`,
              `a confidence that the journey will end before nightfall`
            ],
            correctAnswer: 0,
            explanation: `The questions narrow from the whole road to the door and the bed, showing an anxious mind preparing for arrival. The traveler never proposes turning back, does not doubt the answers, and has been told the journey lasts "From morn to night."`
          }
        ]
      }
    }
  ]
}
