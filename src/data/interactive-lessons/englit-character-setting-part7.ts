export const englitCharacterSettingPart7Data = {
  topicSlug: 'englit-character-setting',
  sections: [
    {
      id: 'englitch7-intro',
      type: 'text' as const,
      content: `
# 🏛️ Character and Setting

**Part 7 of 7 — Character and Setting Synthesis**

---

| Section |
|---------|
| 🧭 The Toolkit So Far |
| The Passage: Chesney Wold in the Rain |
| Pass 1: Reading the Setting |
| Pass 2: Reading the Characters |
| Pass 3: Character, Setting and Argument |

> 🔑 **Key Concept:** This part puts every skill from Parts 2–6 to work on one new passage. Read it three times: once for setting, once for character, once for the relationship between them. Then turn the three readings into a thesis.

## 🧭 The Toolkit So Far

| Part | Skill | Key question |
|---|---|---|
| 2 | Channels of characterization (1.A) | Which channels build this character, and do they agree? |
| 3 | Setting as a social world (2.A, 2.B) | What rules does this world enforce, and what do they cost? |
| 4 | Atmosphere, mirror, antagonist (2.B, 5.D) | What is this description of place doing? |
| 5 | Relationships and setting inside character (1.D, 2.C) | Who shapes, embodies, resists or is drawn into this place? |
| 6 | The exam | What complex claim can I defend with this evidence? |
`
    },
    {
      id: 'englitch7-passage',
      type: 'text' as const,
      content: `
## The Passage: Chesney Wold in the Rain

In the second chapter of *Bleak House*, Dickens leaves the fog of Chancery (Part 3) for the "world of fashion." Lady Dedlock, wife of the baronet Sir Leicester Dedlock, has just left their country house, Chesney Wold, in Lincolnshire.

> My Lady Dedlock has been down at what she calls, in familiar conversation, her "place" in Lincolnshire. The waters are out in Lincolnshire. An arch of the bridge in the park has been sapped and sopped away. The adjacent low-lying ground for half a mile in breadth is a stagnant river with melancholy trees for islands in it and a surface punctured all over, all day long, with falling rain. My Lady Dedlock's place has been extremely dreary. The weather for many a day and night has been so wet that the trees seem wet through, and the soft loppings and prunings of the woodman's axe can make no crash or crackle as they fall. The deer, looking soaked, leave quagmires where they pass. The shot of a rifle loses its sharpness in the moist air, and its smoke moves in a tardy little cloud towards the green rise, coppice-topped, that makes a background for the falling rain. The view from my Lady Dedlock's own windows is alternately a lead-coloured view and a view in Indian ink. The vases on the stone terrace in the foreground catch the rain all day; and the heavy drops fall—drip, drip, drip—upon the broad flagged pavement, called from old time the Ghost's Walk, all night. On Sundays the little church in the park is mouldy; the oaken pulpit breaks out into a cold sweat; and there is a general smell and taste as of the ancient Dedlocks in their graves. My Lady Dedlock (who is childless), looking out in the early twilight from her boudoir at a keeper's lodge and seeing the light of a fire upon the latticed panes, and smoke rising from the chimney, and a child, chased by a woman, running out into the rain to meet the shining figure of a wrapped-up man coming through the gate, has been put quite out of temper. My Lady Dedlock says she has been "bored to death."
>
> — Charles Dickens, *Bleak House*, 1852–53

A few paragraphs later the narrator introduces her husband:

> Sir Leicester Dedlock is only a baronet, but there is no mightier baronet than he. His family is as old as the hills, and infinitely more respectable. He has a general opinion that the world might get on without hills but would be done up without Dedlocks. He would on the whole admit nature to be a good idea (a little low, perhaps, when not enclosed with a park-fence), but an idea dependent for its execution on your great county families.
`
    },
    {
      id: 'englitch7-pass1',
      type: 'text' as const,
      content: `
## Pass 1: Reading the Setting

| Detail | Function (Parts 3–4) | What it adds |
|---|---|---|
| "a stagnant river with melancholy trees for islands" | Atmosphere; a touch of pathetic fallacy ("melancholy") | Nothing flows; the land itself seems sad |
| The axe that makes "no crash or crackle," the rifle shot that "loses its sharpness" | Atmosphere | Every sound and action is muffled: a world where nothing has impact |
| "a lead-coloured view and a view in Indian ink" | Imagery | Color drains to gray and black; the view looks like a dull print rather than a living scene |
| "drip, drip, drip ... upon ... the Ghost's Walk, all night" | Sound and repetition | Time measured in drops; the old house's ghost story keeps its place in the scene |
| "the oaken pulpit breaks out into a cold sweat" | Personification | Even the church seems sick with damp |
| "smell and taste as of the ancient Dedlocks in their graves" | Social world | The estate is saturated with the family's dead past |
| The keeper's lodge: fire, smoke, a child, a "shining figure" | Ironic contrast | The only warmth in the scene belongs to servants, not to the great house |

The setting does three jobs at once. It creates an **atmosphere** of stagnation, it presents a **social world** of ancient rank, and, through the lodge window, it offers a small **contrast** of warmth and family that the great house lacks.
`
    },
    {
      id: 'englitch7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reading** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The details of the axe that makes "no crash or crackle" and the rifle shot that "loses its sharpness in the moist air" chiefly create an atmosphere of`,
            options: [
              `sudden danger`,
              `muffled, stagnant deadness`,
              `country contentment`,
              `busy preparation for a hunt`
            ],
            correctAnswer: 1,
            explanation: `Sounds that should be sharp are dulled, so the details build a world where nothing makes an impact. No danger threatens, the scene is "dreary" rather than content, and the rifle and axe are background sounds, not a hunt being prepared.`
          },
          {
            question: `In context, the description of the oaken pulpit that "breaks out into a cold sweat" primarily serves to`,
            options: [
              `suggest that the parish clergyman is nervous before his sermons`,
              `show that the Dedlocks are pious and attend church faithfully`,
              `contrast the warm church with the cold, wet park around it`,
              `carry the estate's decay into its church, as if it were sick`
            ],
            correctAnswer: 3,
            explanation: `The personified pulpit sweats like a sick body, carrying the "mouldy" damp of the park into the church. No clergyman is described, the Dedlocks' piety is not the point, and the church is as damp as the park rather than warmer.`
          },
          {
            question: `The "general smell and taste as of the ancient Dedlocks in their graves" suggests that the estate`,
            options: [
              `has recently suffered a death in the family`,
              `stands right beside the village graveyard`,
              `is weighed down by the family's long-dead past`,
              `is being restored by its present owners`
            ],
            correctAnswer: 2,
            explanation: `The phrase makes the family's long-dead ancestors part of the air of the place, so the estate is steeped in an old, lifeless past. No recent death is mentioned, the "as of" marks a comparison rather than a location, and no restoration is under way.`
          }
        ]
      }
    },
    {
      id: 'englitch7-pass2',
      type: 'text' as const,
      content: `
## Pass 2: Reading the Characters

### Lady Dedlock: the channels

| Channel (Part 2) | Detail | Inference |
|---|---|---|
| **Name** | "Dedlock" | It sounds like "dead" + "lock," and a deadlock is a standstill; the name fits the stagnant estate |
| **Speech idiom** | What she calls "her 'place'" | The understatement of a great lady, for whom a vast estate is just a "place" |
| **Narrator's comment** | "(who is childless)" | A parenthesis placed just before what she sees from her window |
| **What she notices** | A child running to "a wrapped-up man" coming home, a fire in the lodge | Her eye settles on the one scene of family warmth |
| **Reaction** | "put quite out of temper" | The scene upsets her, and the narrator does not say why |
| **Her own words** | "bored to death" | A fashionable phrase, which the narrator quotes as hers |

### Climb the ladder, then test it

1. **Detail:** a childless woman watches a family reunion and is "put quite out of temper."
2. **Literal inference:** the scene affects her.
3. **Perspective:** the warmth she sees may touch a lack she will not name.
4. **Interpretation:** "bored to death" may be a fashionable mask over grief or longing.

**Counter-evidence:** the narrator's tone is ironic throughout, and a jaded great lady might simply find the rain dull. A careful reader keeps both readings open on this page. (Much later, the novel reveals that before her marriage she bore a child she believes died at birth, which gives the parenthesis its full weight. On the exam you would argue only from the passage, so the hedge "may" is the right one.)

### Sir Leicester: the narrator's irony

"He has a general opinion that the world might get on without hills but would be done up without Dedlocks." The narrator reports Sir Leicester's views in a mock-serious voice that makes them absurd. Nature itself, he thinks, is "a little low" unless "enclosed with a park-fence." He does not merely own the estate; he believes the estate, and the world, exist for families like his. In Part 5's terms, he **embodies** the place.
`
    },
    {
      id: 'englitch7-input',
      type: 'input-boxes' as const,
      content: `
**Review the Terms** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `Characterization in which the reader infers traits from speech, action or detail rather than being told them`,
            answer: 'indirect',
            acceptableAnswers: ['indirect', 'indirect characterization']
          },
          {
            question: `A character whose contrast with another highlights that other character's traits, as Clym does for Eustacia`,
            answer: 'foil',
            acceptableAnswers: ['foil', 'a foil', 'foils']
          },
          {
            question: `The felt quality a writer gives a place itself, as distinct from the mood created in the reader`,
            answer: 'atmosphere',
            acceptableAnswers: ['atmosphere', 'the atmosphere']
          }
        ],
        hint1: 'The opposite of direct characterization.',
        hint2: 'Hardy defines Clym and Eustacia as opposites through the heath.',
        hint3: 'Chesney Wold\'s stagnant, muffled quality belongs to the place.',
        explanation: 'Lady Dedlock is revealed mainly through indirect characterization; Clym and Eustacia are foils; and the stagnant quality of Chesney Wold is its atmosphere, which produces a mood of unease in the reader.'
      }
    },
    {
      id: 'englitch7-pass3',
      type: 'text' as const,
      content: `
## Pass 3: Character, Setting and Argument

### The relationships

| Relationship | Evidence | Kind (Part 5) |
|---|---|---|
| Lady Dedlock and Chesney Wold | She "has come away from the place in Lincolnshire and has left it to the rain, and the crows" | **Resists**: she flees the place that mirrors her |
| Sir Leicester and Chesney Wold | "the world ... would be done up without Dedlocks" | **Embodies**: the estate's pride is his own |
| Husband and wife | One identifies with the place; the other cannot bear it | A marriage defined, like Clym and Eustacia's, by opposite feelings about one place |
| Lady Dedlock and the keeper's family | She watches them from her boudoir | Rank separates her from the warmth she sees |

### The social world behind it

Just before this passage, the narrator links the fashionable world to the court of Part 3: "Both the world of fashion and the Court of Chancery are things of precedent and usage." He calls the fashionable world "a deadened world, and its growth is sometimes unhealthy for want of air." The rain at Chesney Wold is to fashion what the fog is to Chancery: weather that pictures an institution that has stopped moving.

### A thesis built from three passes

> In Dickens's portrait of Chesney Wold, a drowned and muffled estate mirrors a fashionable world that has stopped moving, yet the one warm scene in the passage, a servant's family glimpsed through a window, unsettles Lady Dedlock enough to suggest that her famous boredom may conceal a grief her rank will not let her name.

### Five questions for any character–setting passage

1. What does the place feel like, and which details build that atmosphere?
2. What rules does this world enforce (rank, money, custom)?
3. Which channels characterize each person, and do they agree?
4. How does each character relate to the place: shaped, embodying, resisting, drawn in?
5. Where is the **tension**, the detail that complicates the obvious reading?

> 🔑 **AP Connection:** The fifth question is where Row C lives. In this passage it is the lodge window. A thesis that notices it is already more than a description of rain.
`
    },
    {
      id: 'englitch7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The parenthetical "(who is childless)," placed just before Lady Dedlock watches the keeper's family, primarily serves to`,
            options: [
              `show that she dislikes children and avoids them`,
              `suggest that the keeper's child is in fact her own`,
              `establish that she is much older than her husband`,
              `link her irritation to a lack in her own life`
            ],
            correctAnswer: 3,
            explanation: `The placement invites the reader to connect what she sees, a child and a homecoming, with what she lacks. Nothing shows a dislike of children, the passage does not suggest the keeper's child is hers, and the parenthesis concerns children, not age.`
          },
          {
            question: `Lady Dedlock's description of herself as "bored to death" is best read as`,
            options: [
              `a literal statement that the dull weather has made her ill`,
              `a fashionable phrase that may cover a feeling she does not name`,
              `evidence that she longs to return to Chesney Wold very soon`,
              `proof that she is the novel's cold and heartless villain`
            ],
            correctAnswer: 1,
            explanation: `The phrase follows a scene of family warmth that put her "out of temper," so the passage hints that boredom may mask something deeper. She is not literally ill, she has just left Chesney Wold, and one ironic phrase cannot prove villainy.`
          },
          {
            question: `The remark that Sir Leicester would "admit nature to be a good idea (a little low, perhaps, when not enclosed with a park-fence)" characterizes him chiefly through`,
            options: [
              `direct praise of his deep love of the countryside`,
              `his own words, quoted exactly in his own idiom`,
              `the narrator's irony about his sense of rank`,
              `the reactions of his servants and his tenants`
            ],
            correctAnswer: 2,
            explanation: `The narrator paraphrases Sir Leicester's view in a mock-serious voice, exposing a pride so great that nature must be fenced to be respectable. It is not praise, the words are the narrator's rather than a direct quotation, and no servants or tenants react.`
          },
          {
            question: `Which claim best connects the Chesney Wold passage to the Chancery fog of Part 3?`,
            options: [
              `In both, the weather is described chiefly to fix the season`,
              `In both, a sympathetic hero is set against a hostile place`,
              `In both, weather pictures an institution that has stopped moving`,
              `In both, the city is praised as livelier than the country`
            ],
            correctAnswer: 2,
            explanation: `The narrator calls fashion and Chancery "things of precedent and usage," and the fog and the rain picture each as clogged and stagnant. The weather does more than mark a season, neither passage introduces a hero, and London's fog is no livelier than Lincolnshire's rain.`
          }
        ]
      }
    }
  ]
}
