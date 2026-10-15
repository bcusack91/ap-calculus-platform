export const englitPoeticStructureFormPart5Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo5-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 5 of 7 — Blank Verse, Free Verse and Broken Patterns**

---

| Section |
|---------|
| 📖 Three Degrees of Pattern |
| Blank Verse: Tennyson's "Ulysses" |
| Free Verse: Crane's "In the desert" |
| A Broken Sonnet: Shelley's "Ozymandias" |
| Misconceptions About Form |

> 🔑 **Key Concept:** Form is not only a set of rules a poem obeys. Some poems keep meter and drop rhyme; some drop both; some bend a fixed form out of shape. In each case, skill **3.C** asks the same question: what does this structural choice do? Where there are fewer rules, every remaining choice (a line break, a pause, a repetition) carries more weight.
`
    },
    {
      id: 'englitpo5-degrees',
      type: 'text' as const,
      content: `
## 📖 Three Degrees of Pattern

| Kind | Meter? | Rhyme? | Famous uses |
|---|---|---|---|
| **Rhymed metrical verse** | Yes | Yes | Sonnets, ballads, couplets |
| **Blank verse** | Yes: unrhymed **iambic pentameter** | No | Shakespeare's plays, Milton's *Paradise Lost* (1667), Wordsworth, Tennyson |
| **Free verse** | No regular meter | Usually no | Whitman, Stephen Crane, many modern poets |

Blank verse is not "blank" of form. It keeps the beat of iambic pentameter, close to the rhythm of English speech, while freeing the poet from rhyme. That combination suits long speeches and thinking aloud, which is why it dominates English drama and epic.

### Three Line-Level Terms

| Term | Definition | Effect to look for |
|---|---|---|
| **End-stopped line** | The line ends with a grammatical pause, usually marked by punctuation | Finality, firmness, a completed thought |
| **Enjambment** | A sentence runs past the line end without a pause | Momentum, surprise, a word held in suspense at the line's end |
| **Caesura** | A strong pause within a line, usually at punctuation | A break in thought; weight on what comes before or after |
`
    },
    {
      id: 'englitpo5-ulysses',
      type: 'text' as const,
      content: `
## Blank Verse: Tennyson's "Ulysses"

In Homer, Ulysses (Odysseus) struggles for ten years to get home. Tennyson imagines him old, back on his island of Ithaca, and restless. Two passages of the dramatic monologue:

> I am a part of all that I have met;
> Yet all experience is an arch wherethro'
> Gleams that untravell'd world, whose margin fades
> For ever and for ever when I move.
> How dull it is to pause, to make an end,
> To rust unburnish'd, not to shine in use!

> The lights begin to twinkle from the rocks:
> The long day wanes: the slow moon climbs: the deep
> Moans round with many voices. Come, my friends,
> 'Tis not too late to seek a newer world.
>
> — Alfred, Lord Tennyson, "Ulysses," 1842

### A Worked Reading of the Lines

| Lines | Structural feature | Effect |
|---|---|---|
| "an arch wherethro' / Gleams that untravell'd world" | **Enjambment**: the sentence pours over the line end | The reader, like Ulysses, is carried forward toward a horizon |
| "whose margin fades / For ever and for ever when I move" | Enjambment, then a repeated phrase | The horizon recedes as he advances; the line itself seems to stretch |
| "How dull it is to pause, to make an end," | A line *about* pausing that contains a pause | Stopping is presented as death ("rust") |
| "The long day wanes: the slow moon climbs: the deep" | Two colons create **caesuras**; the stressed monosyllables pile up | The line moves slowly, like the evening it describes |
| "the deep / Moans round with many voices" | Enjambment after "deep" | The word hangs at the line's edge like the open sea itself |

The poem ends with its most famous line, which is fully **end-stopped**:

> Made weak by time and fate, but strong in will
> To strive, to seek, to find, and not to yield.

After so much enjambment and searching, the last line stands complete and firm, a perfectly regular iambic pentameter (to **STRIVE**, to **SEEK**, to **FIND**, and **NOT** to **YIELD**). Form enacts the resolve the line declares.
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
            question: `"Ulysses" is written in blank verse, which means its lines are`,
            options: [
              `unrhymed iambic pentameter`,
              `rhymed in heroic couplets`,
              `free of any regular meter`,
              `arranged in ballad stanzas`
            ],
            correctAnswer: 0,
            explanation: `Blank verse keeps the iambic pentameter beat and drops rhyme. Heroic couplets and ballad stanzas rhyme, and a line with no regular meter is free verse.`
          },
          {
            question: `The enjambment in "an arch wherethro' / Gleams that untravell'd world" chiefly reinforces`,
            options: [
              `the speaker's wish to stay at home and rest`,
              `the forward pull of an always-receding horizon`,
              `the speaker's confusion about his own past`,
              `a sudden end to the speaker's long journey`
            ],
            correctAnswer: 1,
            explanation: `The sentence pours over the line break toward a world "whose margin fades," so the reader is pulled forward as Ulysses is. He scorns rest, he speaks of his past with clarity, and the passage describes a journey without end.`
          },
          {
            question: `The final line, "To strive, to seek, to find, and not to yield," differs from much of the poem chiefly in being`,
            options: [
              `unrhymed, unlike the rest of the poem`,
              `end-stopped and metrically regular`,
              `written in a different, shorter meter`,
              `addressed to a different listener`
            ],
            correctAnswer: 1,
            explanation: `After many enjambed lines, the last line is complete in itself and beats out five clean iambs, enacting resolve. The whole poem is unrhymed, its meter stays iambic pentameter, and Ulysses is still addressing his mariners.`
          }
        ]
      }
    },
    {
      id: 'englitpo5-crane',
      type: 'text' as const,
      content: `
## Free Verse: Crane's "In the desert"

> In the desert
> I saw a creature, naked, bestial,
> Who, squatting upon the ground,
> Held his heart in his hands,
> And ate of it.
> I said, "Is it good, friend?"
> "It is bitter—bitter," he answered;
> "But I like it
> Because it is bitter,
> And because it is my heart."
>
> — Stephen Crane, poem III of *The Black Riders and Other Lines*, 1895

Crane's title calls these pieces "lines," not poems. There is no meter and no rhyme, yet the form is precise.

| Choice | Effect |
|---|---|
| Short opening line, "In the desert" | Isolates the setting: bare, like the line itself |
| "And ate of it." as a line of its own | The shocking act gets a line to itself and a full stop |
| Dialogue set out in lines | A grotesque scene is told in the calm rhythms of a parable |
| The answer split across four lines ("But I like it / Because it is bitter, / And because it is my heart.") | Each reason arrives separately, so the logic of self-consuming bitterness unfolds slowly |
| Plain diction, almost biblical ("ate of it") | The strangeness of the image stands out against the simple words |

Free verse replaces meter and rhyme with other structural tools: **line breaks**, **white space**, **syntax**, and **repetition**. Analyze those as carefully as you would a sonnet's rhyme scheme.
`
    },
    {
      id: 'englitpo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Structure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Crane's lines, with no regular meter and no rhyme, are ___`,
            options: ['free verse', 'blank verse', 'terza rima', 'a villanelle']
          },
          {
            label: `"The long day wanes: the slow moon climbs: the deep" has two strong pauses inside it; each is a ___`,
            options: ['caesura', 'enjambment', 'refrain', 'volta']
          },
          {
            label: `A sentence that runs on from one line into the next without a pause is ___`,
            options: ['enjambment', 'an end-stopped line', 'a caesura', 'a couplet']
          }
        ],
        correctAnswers: ['free verse', 'caesura', 'enjambment'],
        hint1: 'No meter, no rhyme.',
        hint2: 'A pause in the middle of a line.',
        hint3: 'From a French word for "straddling."',
        explanation: 'Crane writes free verse; the colons in Tennyson\'s line mark caesuras; and a sentence carried over a line break is enjambment.'
      }
    },
    {
      id: 'englitpo5-ozymandias',
      type: 'text' as const,
      content: `
## A Broken Sonnet: Shelley's "Ozymandias"

> I met a traveller from an antique land
> Who said: Two vast and trunkless legs of stone
> Stand in the desert...Near them, on the sand,
> Half sunk, a shattered visage lies, whose frown,
> And wrinkled lip, and sneer of cold command,
> Tell that its sculptor well those passions read
> Which yet survive, stamped on these lifeless things,
> The hand that mocked them, and the heart that fed:
> And on the pedestal these words appear:
> 'My name is Ozymandias, king of kings:
> Look on my works, ye Mighty, and despair!'
> Nothing beside remains. Round the decay
> Of that colossal wreck, boundless and bare
> The lone and level sands stretch far away.
>
> — Percy Bysshe Shelley, "Ozymandias," 1818

### The Form Does Not Behave

Fourteen lines of iambic pentameter announce a sonnet. But the rhyme scheme fits neither standard type:

| Lines | End words | Scheme |
|---|---|---|
| 1-5 | land / stone / sand / frown / command | A B A B A |
| 6-8 | read / things / fed | C D C |
| 9-11 | appear / kings / despair | E D E |
| 12-14 | decay / bare / away | F E F |

The rhymes interlock irregularly, and the octave and sestet do not separate cleanly: the sentence describing the statue runs from line 2 to line 8, and the inscription straddles the usual turn. The real turn comes mid-line 12, after a hard caesura: "Nothing beside remains."

### What the Broken Form Can Mean

One persuasive reading: a poem about a shattered monument is itself a sonnet whose structure has been knocked out of shape. The tyrant boasted that his "works" would make the mighty "despair"; the form, like the statue, survives only in pieces. The framing adds distance too: the speaker reports a traveller who reports a sculptor's work that records a king's words. Ozymandias's voice reaches us only through layers, as faint as the ruin.

Note the irony the structure delivers. "Look on my works" is followed, after the line break and a caesura, by "Nothing beside remains." The arrangement makes the inscription's boast collide with the empty desert.
`
    },
    {
      id: 'englitpo5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions About Form

| Misconception | Correction |
|---|---|
| "Free verse has no structure." | Free verse replaces meter and rhyme with line breaks, white space, syntax and repetition |
| "Blank verse is the same as free verse." | Blank verse has strict meter (iambic pentameter); only rhyme is absent |
| "A poem that breaks a form is badly written." | Departures from a form's expectations are often where meaning concentrates, as in "Ozymandias" |
| "Enjambment always creates speed." | It can also create suspense, ambiguity or emphasis on the word left hanging at the line's end |

> 🔑 **AP Connection:** Essays reward explaining a structural choice at a specific moment. Phrases such as "the enjambment carries the reader past the line break just as..." or "the caesura halts the line at the moment..." show the reader how form and meaning work together.
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
            question: `Setting "And ate of it." as a line by itself in Crane's poem primarily serves to`,
            options: [
              `isolate the shocking act and give it full weight`,
              `make the line rhyme with the line before it`,
              `show that the speaker has joined the creature`,
              `soften the image so the reader is not disturbed`
            ],
            correctAnswer: 0,
            explanation: `A short line ending in a full stop isolates the grotesque action and makes the reader pause on it. The poem does not rhyme, the speaker only watches and asks a question, and the stark line intensifies rather than softens the image.`
          },
          {
            question: `A critic argues that the irregular rhyme scheme of "Ozymandias" mirrors the broken statue. This claim is best supported by the observation that`,
            options: [
              `the poem uses fourteen lines of iambic pentameter`,
              `the end sounds fit neither standard sonnet pattern`,
              `the traveller comes "from an antique land"`,
              `the poem's title names an ancient Egyptian king`
            ],
            correctAnswer: 1,
            explanation: `The claim is about broken form, so the evidence must be the departure from expected sonnet patterns. Fourteen pentameter lines show only that the poem is sonnet-like, and the traveller's origin and the title do not concern structure.`
          },
          {
            question: `The placement of "Nothing beside remains" immediately after the inscription chiefly creates`,
            options: [
              `irony, as the boast meets an empty desert`,
              `suspense, as the reader waits for the king`,
              `comedy, as the sculptor mocks his patron`,
              `nostalgia, as the speaker mourns the kingdom`
            ],
            correctAnswer: 0,
            explanation: `The king's command to "Look on my works" collides with the fact that nothing is left to look at. The king does not appear, the sculptor's mockery is not comic in tone, and the speaker records the ruin without mourning it.`
          }
        ]
      }
    }
  ]
}
