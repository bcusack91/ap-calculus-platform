export const englitPoetry1Part5Data = {
  topicSlug: 'englit-poetry-1',
  sections: [
    {
      id: 'englitpo5-intro',
      type: 'text' as const,
      content: `
# 🌿 Poetry Analysis I

**Part 5 of 7 — Simile and Metaphor: How Comparisons Make Meaning**

---

| Section |
|---------|
| 📖 The Anatomy of a Comparison |
| Simile in Action: Burns and Wordsworth |
| Metaphor in Action: Sonnet 73 Revisited |
| When the Comparison Is "Wrong": Keats's Cortez |
| Writing About Comparisons |

> 🔑 **Key Concept:** Skills **6.A** and **6.B** ask you to identify and explain the function of a simile and a metaphor. A comparison transfers selected qualities from one thing to another. Your job is to say **which** qualities transfer and **what that does** for the poem.
`
    },
    {
      id: 'englitpo5-anatomy',
      type: 'text' as const,
      content: `
## 📖 The Anatomy of a Comparison

| Part | Traditional name | Example: "O my Luve's like a red, red rose" |
|---|---|---|
| The thing being described | **Tenor** (subject of the comparison) | "my Luve" |
| The thing it is compared to | **Vehicle** (object of the comparison) | "a red, red rose" |
| The qualities they share | **Ground** | Beauty, freshness, color, natural life |

| Device | How it works | Example |
|---|---|---|
| **Simile** | Compares explicitly, using "like" or "as" | "I wandered lonely as a Cloud" |
| **Metaphor** | Speaks of one thing as if it were another | "Bare ruin'd choirs" for winter branches |
| **Extended metaphor** | A metaphor developed over several lines or a whole poem | Hope as a bird throughout Dickinson's poem |
| **Literal comparison** | Compares two things of the same kind; not figurative | "Her voice is like her mother's" |

### Three Questions for Any Comparison

1. **What is compared to what?** Name both sides.
2. **Which qualities transfer, and which do not?** A rose is beautiful, but it also fades and has thorns. Does the poem activate those too?
3. **What does the comparison do?** What attitude, feeling or idea does it create that plain statement would not?
`
    },
    {
      id: 'englitpo5-similes',
      type: 'text' as const,
      content: `
## Simile in Action: Burns and Wordsworth

> O my Luve's like a red, red rose,
> That's newly sprung in June:
> O my Luve's like the melodie,
> That's sweetly play'd in tune.
>
> — Robert Burns, "A Red, Red Rose," 1794

| Simile | Qualities transferred | What else it carries |
|---|---|---|
| Love like "a red, red rose / That's newly sprung in June" | Beauty, vivid color, freshness | A June rose is at its peak, and a peak does not last |
| Love like "the melodie / That's sweetly play'd in tune" | Harmony, pleasure, sweetness | A melody exists only while it is played |

"Luve" can mean the beloved person or the feeling of love, and the poem keeps both meanings alive. Later stanzas answer the hint of transience with vows of permanence: he will love her "Till a' the seas gang dry" (until all the seas go dry). The similes and the vows together give the poem its tension: love is as fresh as a June rose, and the speaker insists it will outlast the seas.

> I wandered lonely as a Cloud
> That floats on high o'er Vales and Hills,
> When all at once I saw a crowd
> A host of dancing Daffodills;
>
> — William Wordsworth, "I wandered lonely as a Cloud," 1807

The simile makes the speaker a cloud: high, drifting, detached and alone. Then "all at once" he sees a "crowd," a "host" of flowers. "Host" can mean a great number, an army or a band of angels. The lonely, drifting cloud is set against a lively crowd. By the final stanza the memory of the flowers can "flash upon that inward eye / Which is the bliss of solitude." The metaphor of an "inward eye" (memory or imagination) turns the opening's loneliness into "bliss."
`
    },
    {
      id: 'englitpo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In "A Red, Red Rose," comparing love to a rose "newly sprung in June" most likely suggests that the love is`,
            options: [
              `fresh and at its height, though perhaps not lasting`,
              `painful, like the thorns that protect a rose's stem`,
              `ordinary, since roses grow in every garden in June`,
              `secret, since the rose has only just come into bloom`
            ],
            correctAnswer: 0,
            explanation: `"Newly sprung" stresses freshness and peak beauty, and a June bloom also hints at transience, which later vows of permanence answer. The poem never mentions thorns, does not treat the rose as common, and nothing suggests secrecy.`
          },
          {
            question: `The simile "I wandered lonely as a Cloud" chiefly characterizes the speaker as`,
            options: [
              `gloomy`,
              `detached and drifting`,
              `proud of his isolation`,
              `ready for a coming storm`
            ],
            correctAnswer: 1,
            explanation: `A cloud floating "on high" is apart from the world below and moves without purpose, which suits a solitary wanderer about to be surprised. "Lonely" is not the same as gloomy, the line shows no pride, and the cloud brings no storm.`
          }
        ]
      }
    },
    {
      id: 'englitpo5-metaphor',
      type: 'text' as const,
      content: `
## Metaphor in Action: Sonnet 73 Revisited

In Part 2 you saw how Sonnet 73's quatrains narrow time. Now look at how its metaphors work.

> Upon those boughs which shake against the cold,
> Bare ruin'd choirs, where late the sweet birds sang.
>
> — William Shakespeare, Sonnet 73, 1609

| Layer | Tenor | Vehicle | Effect |
|---|---|---|---|
| 1 | The speaker's aging body | A tree in late autumn | Age is a season of loss |
| 2 | The bare branches | "ruin'd choirs" (the part of a church where singers stand) | Branches that once held singing birds are now an empty, ruined place of song |

The metaphor stacks: the speaker is a tree, and the tree's branches are a ruined choir. The "sweet birds" that "late" sang (recently sang) can suggest the speaker's past youth, pleasures or poetry. The word "ruin'd" adds human loss to a natural cycle.

> As the death-bed, whereon it must expire,
> Consum'd with that which it was nourish'd by.

The fire's ashes, once its fuel, now smother it. As a metaphor for the speaker, the line says that the energies which fed his youth now help consume him. The comparison contains a **paradox**: what nourished him is what destroys him.
`
    },
    {
      id: 'englitpo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Comparison** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"The tangled bine-stems scored the sky / Like strings from broken lyres" (Hardy) is a ___`,
            options: ['simile', 'metaphor', 'literal comparison', 'pun']
          },
          {
            label: `Calling bare branches "Bare ruin'd choirs" (Shakespeare) is a ___`,
            options: ['metaphor', 'simile', 'literal comparison', 'refrain']
          },
          {
            label: `In "my Luve's like a red, red rose," the rose is the comparison's ___`,
            options: ['vehicle', 'tenor', 'speaker', 'volta']
          }
        ],
        correctAnswers: ['simile', 'metaphor', 'vehicle'],
        hint1: 'Look for "like" or "as."',
        hint2: 'Branches are spoken of as if they were choirs, without "like."',
        hint3: 'The image brought in to describe the subject.',
        explanation: 'Hardy uses "Like," so his comparison is a simile; Shakespeare names branches as choirs directly, a metaphor; and the rose is the vehicle that describes the tenor, "my Luve."'
      }
    },
    {
      id: 'englitpo5-keats',
      type: 'text' as const,
      content: `
## When the Comparison Is "Wrong": Keats's Cortez

> Then felt I like some watcher of the skies
> When a new planet swims into his ken;
> Or like stout Cortez when with eagle eyes
> He star'd at the Pacific—and all his men
> Look'd at each other with a wild surmise—
> Silent, upon a peak in Darien.
>
> — John Keats, "On First Looking into Chapman's Homer," 1816

Keats compares reading Chapman's Homer to two discoveries: an astronomer seeing a new planet and an explorer seeing a new ocean. Historians credit Vasco Núñez de Balboa, not Hernán Cortés, as the first European to see the Pacific from Darien, in 1513. Does the mistake matter?

For literary analysis, no. A simile's job is to transfer **feeling**, not to report history. Both similes share:

- **suddenness:** a planet "swims into" view; the ocean appears from a peak;
- **vastness:** a new world in the sky, a new ocean below;
- **awe beyond words:** the men "Silent," looking "at each other with a wild surmise."

The two similes widen the scale from the sky to the earth, and both turn reading into exploration. The speaker had "traveled in the realms of gold" by report; Chapman's translation lets him see the ocean himself.

## Writing About Comparisons

| Weak | Strong |
|---|---|
| "Keats uses two similes." | "Keats's similes turn a reader into a discoverer, so the act of reading takes on the awe of seeing a new planet or ocean." |
| "The rose symbolizes love." | "By likening love to a rose 'newly sprung in June,' Burns captures its freshness while hinting at a brevity his later vows try to defy." |

### Common Misconceptions

- **"A metaphor is stronger than a simile."** Neither is automatically stronger; ask what each comparison does.
- **"Every quality transfers."** Only selected qualities transfer. Explain which ones the context activates.
- **"Any 'like' is a simile."** Comparing things of the same kind ("a house like ours") is literal.

> 🔑 **AP Connection:** Exam questions often ask what a comparison "emphasizes" or "suggests about" the speaker. Choose the answer that names the transferred quality the context supports.
`
    },
    {
      id: 'englitpo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In Keats's sestet, the two similes (the "watcher of the skies" and "stout Cortez") share chiefly a sense of`,
            options: [
              `sudden, awed discovery of something vast`,
              `fear of what lies beyond familiar lands`,
              `pride in a long and difficult achievement`,
              `regret for opportunities missed in youth`
            ],
            correctAnswer: 0,
            explanation: `A planet that "swims into" view and an ocean seen from a peak both capture an abrupt encounter with something immense, ending in silent wonder. The lines express no fear, the discovery is sudden rather than laborious, and nothing suggests regret.`
          },
          {
            question: `The line "Consum'd with that which it was nourish'd by" presents the speaker's decline as`,
            options: [
              `a punishment imposed by the listener`,
              `a paradox of fuel turned to ash`,
              `a sudden accident that could be avoided`,
              `a cure that will restore his former youth`
            ],
            correctAnswer: 1,
            explanation: `The ashes that were once the fire's fuel now smother it, so the same thing nourishes and destroys. The listener imposes nothing, the decline is gradual and certain, and no cure is suggested.`
          },
          {
            question: `A student writes that Keats's poem is weakened because Balboa, not Cortez, first saw the Pacific. The best response is that`,
            options: [
              `the student is right, and the simile should be ignored`,
              `the simile is meant to convey a feeling, and its sense of awe holds`,
              `Cortez was in fact the first European to see the Pacific`,
              `Keats meant the comparison as a joke about explorers`
            ],
            correctAnswer: 1,
            explanation: `Literary analysis asks what a comparison does, and this one conveys awe and sudden vision whatever the historical slip. Balboa did see the Pacific first, and nothing in the poem's tone is joking.`
          }
        ]
      }
    }
  ]
}
