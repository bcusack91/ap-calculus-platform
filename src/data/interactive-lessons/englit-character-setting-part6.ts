export const englitCharacterSettingPart6Data = {
  topicSlug: 'englit-character-setting',
  sections: [
    {
      id: 'englitch6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Character and Setting

**Part 6 of 7 — Character and Setting on the Exam**

---

| Section |
|---------|
| 📝 Where Character and Setting Appear |
| A Practice Prompt and Passage |
| Annotating for Character and Place |
| From Thesis to Model Paragraph |
| Common Errors on Character–Setting Prompts |

> 🔑 **Key Concept:** Short Fiction II (Part 6) walked through the Q2 essay in general. This part applies it to the most common kind of prose prompt: one that asks how an author portrays a character's **relationship** with a place or with other people. The winning move is the same every time: make the setting do **argumentative** work, never just descriptive work.
`
    },
    {
      id: 'englitch6-where',
      type: 'text' as const,
      content: `
## 📝 Where Character and Setting Appear

| Part of the exam | Format (May 2027) | How character and setting show up |
|---|---|---|
| **Section I** | 55 multiple-choice questions, 60 minutes, 45% of the score, 4 choices each, in 5 sets of prose and poetry passages | Questions ask what a detail "suggests about" a character, what a description of place "primarily serves to" do, how a relationship is characterized |
| **Q2: Prose Fiction Analysis** | One of 3 essays in Section II (2 hours, 55% of the score); a passage you have not seen | Prompts often name a character's response to a place, a relationship, or a moment of change |
| **Q3: Literary Argument** | You choose the work | Prompts may focus on a character's relationship to a home, community or place; your prepared novels supply the evidence |

The Q1 and Q2 prompts end with the same instructions:

> Respond to the prompt with a thesis that presents a defensible interpretation. Select and use evidence to support your line of reasoning. Explain how the evidence supports your line of reasoning. Use appropriate grammar and punctuation in communicating your argument.

Each essay is scored 0–6: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), **Row C** sophistication (0–1). Row C can be earned by exploring complexities or tensions, situating the interpretation in a broader context, accounting for alternative interpretations, or writing with a consistently vivid and persuasive style.
`
    },
    {
      id: 'englitch6-prompt',
      type: 'text' as const,
      content: `
## A Practice Prompt and Passage

**Practice prompt (written in the exam's format):** The following excerpt is from Edith Wharton's 1911 novel *Ethan Frome*. In this passage, the narrator, an engineer working near the village of Starkfield, rides with Ethan Frome past Frome's farm for the first time. Read the passage carefully. Then, in a well-written essay, analyze how Wharton uses literary elements and techniques to portray the complex relationship between Ethan Frome and his home.

> About a mile farther, on a road I had never travelled, we came to an orchard of starved apple-trees writhing over a hillside among outcroppings of slate that nuzzled up through the snow like animals pushing out their noses to breathe. Beyond the orchard lay a field or two, their boundaries lost under drifts; and above the fields, huddled against the white immensities of land and sky, one of those lonely New England farm-houses that make the landscape lonelier.
>
> "That's my place," said Frome, with a sideway jerk of his lame elbow; and in the distress and oppression of the scene I did not know what to answer. The snow had ceased, and a flash of watery sunlight exposed the house on the slope above us in all its plaintive ugliness. The black wraith of a deciduous creeper flapped from the porch, and the thin wooden walls, under their worn coat of paint, seemed to shiver in the wind that had risen with the ceasing of the snow.
>
> "The house was bigger in my father's time: I had to take down the 'L,' a while back," Frome continued ...
>
> I saw then that the unusually forlorn and stunted look of the house was partly due to the loss of what is known in New England as the "L": that long deep-roofed adjunct usually built at right angles to the main house, and connecting it, by way of storerooms and tool-house, with the wood-shed and cow-barn. Whether because of its symbolic sense, the image it presents of a life linked with the soil, and enclosing in itself the chief sources of warmth and nourishment, or whether merely because of the consolatory thought that it enables the dwellers in that harsh climate to get to their morning's work without facing the weather, it is certain that the "L" rather than the house itself seems to be the centre, the actual hearth-stone of the New England farm. Perhaps this connection of ideas, which had often occurred to me in my rambles about Starkfield, caused me to hear a wistful note in Frome's words, and to see in the diminished dwelling the image of his own shrunken body.
>
> "We're kinder side-tracked here now," he added, "but there was considerable passing before the railroad was carried through to the Flats."
>
> — Edith Wharton, *Ethan Frome*, 1911
`
    },
    {
      id: 'englitch6-annotate',
      type: 'text' as const,
      content: `
## Annotating for Character and Place

Annotate with three columns in mind: what the place is like, what Ethan is like, and where the two meet.

| Detail | The place | Ethan | Where they meet |
|---|---|---|---|
| "starved apple-trees writhing" | Hunger and pain in the land | — | Life that survives in torment |
| slate "like animals pushing out their noses to breathe" | Even the rock struggles for air under the snow | — | — |
| "huddled against the white immensities" | The house cowers in vast cold space | — | Isolation |
| "That's my place" + "jerk of his lame elbow" | — | Few words; a damaged body | His only comment is a gesture with his injury |
| "plaintive ugliness," "black wraith," walls that "seemed to shiver" | The house is sad, ghostly, cold | — | The house suffers the winters Ethan suffers |
| The lost "L," "the actual hearth-stone" | Warmth and nourishment removed | "I had to take down the 'L'" | **The narrator states the mirror**: "the image of his own shrunken body" |
| "Perhaps this connection of ideas ... caused me to hear" | — | — | **The narrator questions his own reading** |
| "side-tracked ... before the railroad" | A place history has passed by | The family's decline has economic causes | — |

Two details in this passage are easy to miss and worth a whole paragraph each: the word **"Perhaps,"** which admits that the house-as-body comparison may be the narrator's projection, and the word **"side-tracked,"** which gives Ethan's own, unsentimental explanation.
`
    },
    {
      id: 'englitch6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice** 🎯

Use the passage above.
      `,
      exercise: {
        questions: [
          {
            question: `The description of slate outcroppings that "nuzzled up through the snow like animals pushing out their noses to breathe" chiefly suggests`,
            options: [
              `a gentle, playful countryside that welcomes travelers`,
              `the farm animals Ethan has recently been forced to sell`,
              `the narrator's fear of the wild animals that roam the hills`,
              `a land where even stone seems to struggle for air`
            ],
            correctAnswer: 3,
            explanation: `The simile makes the rock a creature gasping beneath the snow, extending the struggle to survive from the "starved" orchard to the land itself. Nothing playful or welcoming appears, no sale of animals is mentioned, and the narrator expresses no fear of wildlife.`
          },
          {
            question: `The phrase "one of those lonely New England farm-houses that make the landscape lonelier" implies that the house`,
            options: [
              `is the only building the narrator has passed all day`,
              `deepens the very isolation it might have relieved`,
              `was abandoned by its owners many years before`,
              `looks exactly like every other farm in the region`
            ],
            correctAnswer: 1,
            explanation: `A house usually signals human company, but this one makes the scene "lonelier," so it intensifies isolation instead of easing it. The narrator has passed Starkfield and the orchard, Ethan still lives in the house, and "one of those" names a type without saying all farms are identical.`
          },
          {
            question: `The narrator's admission that "Perhaps this connection of ideas ... caused me to hear a wistful note in Frome's words" serves mainly to`,
            options: [
              `concede that his reading of Ethan may be partly his own projection`,
              `prove that Ethan openly mourns the loss of the "L" to his visitor`,
              `establish the narrator as an expert on New England farm design`,
              `reveal that Ethan has already told the narrator his life story`
            ],
            correctAnswer: 0,
            explanation: `"Perhaps" and "caused me to hear" concede that the narrator's own habit of thought may have supplied the wistfulness. Ethan speaks briefly and does not mourn openly, the narrator's architectural remarks serve the comparison rather than claim expertise, and Ethan has told him almost nothing.`
          }
        ]
      }
    },
    {
      id: 'englitch6-thesis',
      type: 'text' as const,
      content: `
## From Thesis to Model Paragraph

### A thesis ladder

| Thesis | Row A? | Why |
|---|---|---|
| "Wharton uses imagery and diction to portray the relationship between Ethan and his home." | No | Restates the prompt; no interpretation |
| "In this passage the narrator sees Ethan's farm and learns that Ethan took down part of his house." | No | Summary, not a claim |
| "Wharton uses a ruined farmhouse to show that Ethan's home reflects his broken life." | Yes | Defensible, but the "complex relationship" is left simple |
| "Wharton builds Ethan's farmhouse into an image of his damaged body and starved life, yet she lets the narrator admit that this mirror may be his own sympathetic invention, so Ethan's relationship to his home stays partly closed to the reader." | Yes | Defensible, answers "complex," and sets up a line of reasoning |

### The line of reasoning

1. **The land as struggle:** starved trees, slate gasping for air, a house "huddled" against the cold.
2. **The house as body:** the lost "L" removes warmth and nourishment, as Ethan's life has lost both.
3. **The limits of the mirror:** "Perhaps" and "side-tracked" show that the comparison is the narrator's, while Ethan offers only a plain fact about the railroad.

### A model body paragraph (for move 2 and 3)

> Wharton makes the farmhouse a portrait of the man who lives in it. The house is "huddled against the white immensities of land and sky," a verb that gives it a body cowering from the cold, and its "thin wooden walls ... seemed to shiver in the wind," as if the building suffered the same winters that Starkfield blames for Ethan's condition. The most telling loss is the "L," which the narrator calls "the actual hearth-stone of the New England farm" because it encloses "the chief sources of warmth and nourishment." Ethan "had to take down" the part of his home that held warmth, and the narrator sees "in the diminished dwelling the image of his own shrunken body": a man with a "lame elbow" lives in a house that has lost a limb. Yet Wharton qualifies the comparison even as she makes it. The narrator concedes that "Perhaps" his own "connection of ideas" made him "hear a wistful note" in words Ethan speaks flatly, and Ethan's own explanation, that the farm is "side-tracked" since the railroad went elsewhere, is economic, not emotional. The house mirrors Ethan most clearly to a sympathetic stranger; to Ethan, it is simply what history left him.

| Sentence or move | What it earns |
|---|---|
| Opening claim: "a portrait of the man who lives in it" | A topic sentence tied to the thesis (line of reasoning, Row B) |
| "huddled" as a verb that gives the house a body | Specific evidence + commentary on one word (Row B) |
| The "L" as "hearth-stone" → house that "has lost a limb" | Commentary that links setting to character, not just to mood (Row B, toward 4) |
| "Yet Wharton qualifies the comparison" + "Perhaps" | An alternative interpretation built into the argument (Row C) |
| "economic, not emotional" + "side-tracked" | A tension between two explanations, and a broader context drawn from the passage itself (Row C) |
`
    },
    {
      id: 'englitch6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Score the Move** 🔍

Which row does each sentence, on its own, most help to earn?
      `,
      exercise: {
        dropdowns: [
          {
            label: `"The walls that 'seemed to shiver' make the house suffer the cold Ethan endures, so the building shares his hardship." This sentence helps earn ___`,
            options: ['Row B', 'Row A', 'Row C', 'no point']
          },
          {
            label: `"The narrator's 'Perhaps' warns that we see Ethan only through a stranger's sympathy, which complicates the mirror the passage builds." This sentence helps earn ___`,
            options: ['Row C', 'Row A', 'Row B', 'no point']
          },
          {
            label: `"Wharton uses a lot of imagery, which shows that setting is important in this passage." This sentence earns ___`,
            options: ['no point', 'Row A', 'Row B', 'Row C']
          }
        ],
        correctAnswers: ['Row B', 'Row C', 'no point'],
        hint1: 'Specific evidence with an explanation of what it does.',
        hint2: 'It accounts for a second way of reading the passage.',
        hint3: 'No specific evidence and no defensible interpretation.',
        explanation: 'Explaining "seemed to shiver" is evidence plus commentary (Row B); questioning the narrator\'s comparison accounts for an alternative interpretation (Row C); and a vague claim that "setting is important" is neither a defensible thesis nor commentary.'
      }
    },
    {
      id: 'englitch6-errors',
      type: 'text' as const,
      content: `
## Common Errors on Character–Setting Prompts

| Error | Example | Fix |
|---|---|---|
| **Setting inventory** | Listing snow, orchard, slate and porch in order | Group details by what they do: struggle, body, history |
| **Mood boilerplate** | "The dark imagery creates a gloomy mood." | Say what the gloom reveals about the **character** or the **relationship** |
| **Character sketch without place** | Three paragraphs on Ethan's personality | Every paragraph needs a link between the person and the place |
| **Plot from outside the passage** | Explaining the sledding accident | Q2 is about the passage. Use only what the excerpt gives you |
| **One-way mirror** | "The house reflects Ethan." End of argument | Ask whether the mirror is complete, who builds it, and what it leaves out |

### Moving to Q3

If a Q3 prompt asks about a character's relationship to a place or community, choose a work in which the place **changes a choice**. *Ethan Frome* (debt, winter, duty), *Silas Marner* (Raveloe's distrust and later its customs) and *Bleak House* (a lawsuit that becomes a world) all qualify. Plan one paragraph per stage of the relationship rather than one per setting detail.

> 🔑 **AP Connection:** The word "complex" in a Q2 prompt is an invitation. A thesis that names a tension (the house is Ethan's mirror **and** the narrator's projection) answers the prompt and opens the way to Row C.
`
    },
    {
      id: 'englitch6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Essay Judgment Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which thesis best responds to the practice prompt on the *Ethan Frome* passage?`,
            options: [
              `Wharton describes Ethan's farm with imagery, diction and figurative language, showing the reader many details of the house and the land.`,
              `Wharton shows that Ethan is a poor farmer who lives in a cold, lonely part of New England and has taken down part of his house.`,
              `Wharton turns the farm into an image of Ethan's damaged life, yet lets the narrator doubt that the mirror is more than his own sympathy.`,
              `Wharton suggests that Ethan should have sold the farm and moved to a town while young, since staying has ruined his health and hopes.`
            ],
            correctAnswer: 2,
            explanation: `This thesis makes a defensible interpretation of the relationship and names its complexity, which sets up a line of reasoning. The others list devices, summarize, or judge Ethan's choices instead of analyzing the passage.`
          },
          {
            question: `A body paragraph quotes "plaintive ugliness," "black wraith" and "seemed to shiver," then states, "These words create a gloomy mood." The most effective revision would`,
            options: [
              `add several more quotations about the winter weather`,
              `replace the quotations with a summary of the novel's plot`,
              `define "wraith" and "plaintive" with dictionary entries`,
              `show how the house is made to share Ethan's suffering`
            ],
            correctAnswer: 3,
            explanation: `The paragraph has evidence but generic commentary, and linking the suffering house to Ethan turns description into an argument about the relationship. More quotations, plot summary or definitions would not supply the missing explanation.`
          },
          {
            question: `Which of the following would most likely help an essay on this prompt earn the sophistication point?`,
            options: [
              `naming as many literary devices as possible in each paragraph`,
              `arguing that the narrator's admitted projection complicates the mirror`,
              `adding a biography of Wharton's own years in rural New England`,
              `using elevated vocabulary throughout an essay that mostly summarizes`
            ],
            correctAnswer: 1,
            explanation: `Treating the narrator's "Perhaps" as a challenge to the house-as-body reading explores a tension and accounts for an alternative interpretation. Device lists, unrelated biography and ornate summary do not deepen the argument.`
          }
        ]
      }
    }
  ]
}
