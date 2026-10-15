export const englitPoetry1Part2Data = {
  topicSlug: 'englit-poetry-1',
  sections: [
    {
      id: 'englitpo2-intro',
      type: 'text' as const,
      content: `
# 🌿 Poetry Analysis I

**Part 2 of 7 — Lines, Stanzas and Form**

---

| Section |
|---------|
| 📖 The Building Blocks of a Poem |
| Closed Form: Shakespeare's Sonnet 73 |
| A Different Closed Form: Keats's Petrarchan Sonnet |
| Open Form: Whitman's "When I Heard the Learn'd Astronomer" |
| Line Breaks and What They Do |

> 🔑 **Key Concept:** In prose the sentence and paragraph organize ideas. In poetry the **line** and **stanza** do too. Skill **3.C** asks you to explain the function of structure: how the arrangement of lines, stanzas and parts develops the poem's ideas.
`
    },
    {
      id: 'englitpo2-blocks',
      type: 'text' as const,
      content: `
## 📖 The Building Blocks of a Poem

| Term | Definition |
|---|---|
| **Line** | The basic unit of a poem; where it ends is a choice |
| **Stanza** | A group of lines set off as a unit, like a paragraph of verse |
| **Couplet / quatrain / sestet / octave** | Units of 2, 4, 6 and 8 lines |
| **End-stopped line** | A line that ends with a pause, usually marked by punctuation |
| **Enjambment** | A sentence that runs past the end of a line without a pause |
| **Caesura** | A strong pause within a line |
| **Rhyme scheme** | The pattern of end rhymes, marked with letters (ABAB) |
| **Meter** | A regular pattern of stressed and unstressed syllables; **iambic pentameter** has five unstressed-stressed pairs per line |

### Closed and Open Forms

- A **closed form** follows a set pattern of lines, rhyme or meter. The sonnet is the best-known example: 14 lines, usually in iambic pentameter.
- An **open form** (often called **free verse**) has no fixed pattern of rhyme or meter. Open does not mean shapeless: free-verse poets still choose every line break.

| Sonnet type | Shape | Typical rhyme scheme | Where the turn usually comes |
|---|---|---|---|
| **Shakespearean (English)** | Three quatrains + a couplet | ABAB CDCD EFEF GG | At line 9 or in the final couplet |
| **Petrarchan (Italian)** | An octave + a sestet | ABBAABBA, then a varied sestet | At line 9, where the sestet begins |

The **turn**, or **volta**, is a shift in thought, tone or direction.
`
    },
    {
      id: 'englitpo2-73',
      type: 'text' as const,
      content: `
## Closed Form: Shakespeare's Sonnet 73

> That time of year thou mayst in me behold
> When yellow leaves, or none, or few, do hang
> Upon those boughs which shake against the cold,
> Bare ruin'd choirs, where late the sweet birds sang.
> In me thou see'st the twilight of such day
> As after sunset fadeth in the west;
> Which by and by black night doth take away,
> Death's second self, that seals up all in rest.
> In me thou see'st the glowing of such fire,
> That on the ashes of his youth doth lie,
> As the death-bed, whereon it must expire,
> Consum'd with that which it was nourish'd by.
> This thou perceiv'st, which makes thy love more strong,
> To love that well, which thou must leave ere long.
>
> — William Shakespeare, Sonnet 73, 1609

### How the Structure Builds the Argument

| Unit | Image of the speaker's age | Time scale |
|---|---|---|
| Quatrain 1 | Late autumn: a few yellow leaves on cold boughs | A **year** |
| Quatrain 2 | Twilight fading into "black night" | A **day** |
| Quatrain 3 | A fire's last glow on its own ashes | The last minutes of a **fire** |
| Couplet | "This thou perceiv'st": the listener's love grows stronger | The present moment |

Each quatrain opens with the speaker presenting himself ("in me behold," "In me thou see'st," "In me thou see'st"), and each image is shorter-lived than the last. The structure itself shrinks time: a season, then an evening, then a dying fire. By the third quatrain the speaker's remaining life is measured in embers.

The couplet then **turns** from the speaker to the listener. After twelve lines of decline, the final two lines draw a conclusion: knowing the speaker will die makes the listener love "more strong." The closed form lets Shakespeare build three parallel steps and then deliver a two-line verdict.
`
    },
    {
      id: 'englitpo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The progression of images across the three quatrains of Sonnet 73 (autumn, twilight, a dying fire) primarily serves to`,
            options: [
              `compress the speaker's sense of the time he has left`,
              `show how the seasons change over a whole year`,
              `contrast the speaker's youth with his present age`,
              `prove that the listener has stopped loving him`
            ],
            correctAnswer: 0,
            explanation: `Each image covers less time than the one before (a season, an evening, the last glow of a fire), so the structure narrows the speaker's remaining life. The poem does not track a full year, stays in the present, and ends by saying the listener's love grows "more strong."`
          },
          {
            question: `In Sonnet 73, the final couplet differs from the three quatrains chiefly in that it`,
            options: [
              `adds a fourth image of the speaker's decline`,
              `drops the rhyme scheme of the quatrains`,
              `turns to the listener's response`,
              `abandons the argument`
            ],
            correctAnswer: 2,
            explanation: `The quatrains describe the speaker; the couplet turns to what the listener "perceiv'st" and how that sharpens love. It adds no new image, keeps its rhyme (strong/long), and completes rather than abandons the argument.`
          }
        ]
      }
    },
    {
      id: 'englitpo2-keats',
      type: 'text' as const,
      content: `
## A Different Closed Form: Keats's Petrarchan Sonnet

> Much have I traveled in the realms of gold,
> And many goodly states and kingdoms seen;
> Round many western islands have I been
> Which bards in fealty to Apollo hold.
> Oft of one wide expanse had I been told
> That deep-brow'd Homer ruled as his demesne;
> Yet did I never breathe its pure serene
> Till I heard Chapman speak out loud and bold:
> Then felt I like some watcher of the skies
> When a new planet swims into his ken;
> Or like stout Cortez when with eagle eyes
> He star'd at the Pacific—and all his men
> Look'd at each other with a wild surmise—
> Silent, upon a peak in Darien.
>
> — John Keats, "On First Looking into Chapman's Homer," 1816

*Glossary:* the "realms of gold" are the world of poetry; George Chapman published English translations of Homer in the early 1600s; "demesne" means domain; "ken" means range of sight.

| Part | Rhyme | What happens |
|---|---|---|
| **Octave** (lines 1–8) | ABBAABBA | The speaker has read widely but only *heard of* Homer, until Chapman's translation |
| **Sestet** (lines 9–14) | CDCDCD | "Then felt I": two comparisons to discoverers seeing something new |

The octave is about **travel and report**; the sestet is about **sudden discovery**. The volta at "Then felt I" is where reading turns into wonder. Notice the enjambment late in the sestet: "with eagle eyes / He star'd at the Pacific—and all his men / Look'd at each other." The sentence spills over the line ends like a view opening up, and then the last line ends in stillness: "Silent, upon a peak in Darien."
`
    },
    {
      id: 'englitpo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Structure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `The last two lines of Sonnet 73, which rhyme with each other, form a ___`,
            options: ['couplet', 'quatrain', 'sestet', 'caesura']
          },
          {
            label: `In Keats's "with eagle eyes / He star'd at the Pacific," the sentence running past the line end is ___`,
            options: ['enjambment', 'end-stopping', 'a refrain', 'a caesura']
          },
          {
            label: `A poem with no fixed rhyme scheme or meter is usually called ___`,
            options: ['free verse', 'a sonnet', 'blank verse', 'a ballad']
          }
        ],
        correctAnswers: ['couplet', 'enjambment', 'free verse'],
        hint1: 'Two lines.',
        hint2: 'The thought "strides" over the line break.',
        hint3: 'Careful: blank verse has meter but no rhyme.',
        explanation: 'A rhymed pair of lines is a couplet; a sentence that continues across a line break is enjambment; and verse without fixed rhyme or meter is free verse (blank verse is unrhymed iambic pentameter).'
      }
    },
    {
      id: 'englitpo2-whitman',
      type: 'text' as const,
      content: `
## Open Form: Whitman's "When I Heard the Learn'd Astronomer"

> When I heard the learn'd astronomer,
> When the proofs, the figures, were ranged in columns before me,
> When I was shown the charts and diagrams, to add, divide, and measure them,
> When I sitting heard the astronomer where he lectured with much applause in the lecture-room,
> How soon unaccountable I became tired and sick,
> Till rising and gliding out I wander'd off by myself,
> In the mystical moist night-air, and from time to time,
> Look'd up in perfect silence at the stars.
>
> — Walt Whitman, "When I Heard the Learn'd Astronomer," 1865

This is free verse, and its form is carefully built.

| Feature | Where | Effect |
|---|---|---|
| **Anaphora** (repeated "When") | Lines 1–4 | The lecture piles up clause after clause |
| Lines grow longer | Lines 1–4 | The accumulating "proofs," "figures," "charts and diagrams" crowd the page |
| Shift at "How soon" | Line 5 | The poem turns from the lecture to the speaker's reaction |
| The whole poem is one sentence | Lines 1–8 | Everything leads to the final action |
| The shortest, plainest last line | Line 8 | "perfect silence" after a crowded lecture; the form becomes quiet |

The **form enacts the meaning**: the long, cluttered lines of measurement give way to a short line of looking. Whitman does not argue that wonder is better than measurement; the shape of the poem makes the reader feel the relief of stepping outside.
`
    },
    {
      id: 'englitpo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In "When I Heard the Learn'd Astronomer," the lengthening of lines 1–4 most directly mirrors`,
            options: [
              `the speaker's growing excitement about the astronomer's findings`,
              `the accumulation of information that wearies the speaker`,
              `the size of the crowd leaving the lecture-room together`,
              `the distance the speaker walks before he reaches home`
            ],
            correctAnswer: 1,
            explanation: `The lines swell with "proofs," "figures," "charts and diagrams," and the speaker then becomes "tired and sick," so the growing lines enact the overload. He is not excited, he leaves "by myself," and no walk home is described.`
          },
          {
            question: `The final line, "Look'd up in perfect silence at the stars," is best described as`,
            options: [
              `a sudden return to the lecture's main argument`,
              `a quiet resolution set against the four crowded lines before it`,
              `an ironic hint that the speaker is now lost`,
              `a question the poem leaves the reader to answer`
            ],
            correctAnswer: 1,
            explanation: `After four crowded "When" lines, the plain, short final line brings stillness, and "perfect silence" answers the noisy lecture. The speaker has left the lecture behind, nothing suggests he is lost, and the line is a statement, not a question.`
          },
          {
            question: `Which statement about the sestet of Keats's sonnet is most accurate?`,
            options: [
              `It continues listing places the speaker has traveled`,
              `It turns from report to discovery`,
              `It switches to an argument about translation methods`,
              `It ends with the speaker doubting what he has read`
            ],
            correctAnswer: 1,
            explanation: `The octave reports wide reading; the sestet begins "Then felt I" and compares the experience to finding a new planet or a new ocean. It does not keep listing places, debate translation or end in doubt.`
          }
        ]
      }
    }
  ]
}
