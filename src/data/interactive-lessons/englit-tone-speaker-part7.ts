export const englitToneSpeakerPart7Data = {
  topicSlug: 'englit-tone-speaker',
  sections: [
    {
      id: 'englitto7-intro',
      type: 'text' as const,
      content: `
# 🗣️ Tone and Speaker

**Part 7 of 7 — Tone and Speaker Synthesis**

---

| Section |
|---------|
| 📖 The Whole Workflow on One Poem |
| Matthew Arnold, "Dover Beach" |
| Step 1: Speaker, Listener, Occasion |
| Step 2: Mapping the Shifts |
| Step 3: Naming the Complex Tone |
| Mixed Review |

> 🔑 **Key Concept:** This part puts every tool from the topic to work on one poem: precise tone words (Part 2), the speaking situation (Part 3), the gap between what seems and what is (Part 4), shifts and complex tone (Part 5), and a thesis that traces the movement (Part 6). Read the poem twice before looking at the tables.
`
    },
    {
      id: 'englitto7-workflow',
      type: 'text' as const,
      content: `
## 📖 The Whole Workflow on One Poem

| Step | Question | Tool from |
|---|---|---|
| 1 | Who speaks, to whom, on what occasion? | Part 3 |
| 2 | Where does the attitude change, and what marks the change? | Part 5 |
| 3 | What exact words name each attitude? | Part 2 |
| 4 | Is anything said that the poem undercuts? | Part 4 |
| 5 | What single sentence captures the movement and its tension? | Part 6 |
`
    },
    {
      id: 'englitto7-poem',
      type: 'text' as const,
      content: `
## Matthew Arnold, "Dover Beach"

> The sea is calm to-night.
> The tide is full, the moon lies fair
> Upon the straits; on the French coast, the light
> Gleams and is gone; the cliffs of England stand,
> Glimmering and vast, out in the tranquil bay.
> Come to the window, sweet is the night-air!
> Only, from the long line of spray
> Where the sea meets the moon-blanched sand,
> Listen! you hear the grating roar
> Of pebbles which the waves draw back, and fling,
> At their return, up the high strand,
> Begin and cease, and then again begin,
> With tremulous cadence slow, and bring
> The eternal note of sadness in.
>
> Sophocles long ago
> Heard it on the Ægean, and it brought
> Into his mind the turbid ebb and flow
> Of human misery: we
> Find also in the sound a thought,
> Hearing it by this distant northern sea.
>
> The sea of faith
> Was once, too, at the full, and round earth's shore
> Lay like the folds of a bright girdle furled.
> But now I only hear
> Its melancholy, long, withdrawing roar,
> Retreating, to the breath
> Of the night-wind, down the vast edges drear
> And naked shingles of the world.
>
> Ah, love, let us be true
> To one another! for the world, which seems
> To lie before us like a land of dreams,
> So various, so beautiful, so new,
> Hath really neither joy, nor love, nor light,
> Nor certitude, nor peace, nor help for pain;
> And we are here as on a darkling plain
> Swept with confused alarms of struggle and flight,
> Where ignorant armies clash by night.
>
> — Matthew Arnold, "Dover Beach," *New Poems*, 1867 (probably written in the early 1850s)

**Glossary:** *straits* = the Strait of Dover, the narrow sea between England and France; *strand* = beach; *turbid* = muddy, churned up; *girdle* = belt or sash; *shingles* = beaches of loose pebbles; *drear* = dreary; *darkling* = in the dark; *certitude* = certainty.
`
    },
    {
      id: 'englitto7-step1',
      type: 'text' as const,
      content: `
## Step 1: Speaker, Listener, Occasion

| Element | Evidence | What it contributes |
|---|---|---|
| **Speaker** | "Come to the window"; "I only hear"; "we are here" | A thoughtful person indoors at night, looking out on the Channel, who moves easily from landscape to history to ideas |
| **Listener** | "Come to the window"; "Listen! you hear"; "Ah, love" | A beloved in the same room, silent throughout. The poem is an intimate speech, not a public lecture |
| **Occasion** | "The sea is calm to-night"; "the cliffs of England stand" | A calm, moonlit night at Dover, facing France. The beauty of the scene is the occasion; the thought it provokes is the subject |

**Why the listener matters.** The listener is called to the window twice in effect, first to see ("Come to the window") and then to hear ("Listen!"). The poem's argument begins when the speaker asks the beloved to attend not to the view but to the sound. When he finally addresses her directly ("Ah, love"), the whole meditation on lost faith becomes the reason for a plea to her.
`
    },
    {
      id: 'englitto7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The tone of the first five lines is best described as`,
            options: [
              `serene and admiring`,
              `uneasy and grim`,
              `bitterly ironic toward the scene`,
              `jubilant and openly celebratory`
            ],
            correctAnswer: 0,
            explanation: `"calm," "full," "fair," "tranquil bay" and the "sweet" night-air make the opening serene and admiring. Unease arrives only with "Only" and the "grating roar"; nothing undercuts the beauty ironically, and the quiet scene is too hushed to be jubilant.`
          },
          {
            question: `The word "Only" in line 7 primarily serves to`,
            options: [
              `introduce a qualification that disturbs the calm scene`,
              `emphasize that the speaker is alone on the beach at night`,
              `limit the description to the sea and exclude the land`,
              `signal that the speaker is about to describe the French coast`
            ],
            correctAnswer: 0,
            explanation: `"Only" works like "except that": the beautiful view is qualified by a sound that brings "The eternal note of sadness in." The speaker is not alone, since he speaks to a listener; the land remains in view; and the French coast was already described.`
          },
          {
            question: `The speaker's address to the listener in the first stanza ("Come to the window," "Listen!") chiefly serves to`,
            options: [
              `draw a present, silent companion into sharing his sense of the sea's sadness`,
              `show that the listener disagrees with the speaker's view of the sea`,
              `suggest that the speaker is lecturing a group of strangers`,
              `reveal that the listener has fallen asleep and must be woken`
            ],
            correctAnswer: 0,
            explanation: `The two commands bring a present, silent companion first to see and then to hear what the speaker hears. The listener never disagrees, "love" shows intimacy rather than strangers, and nothing suggests sleep.`
          }
        ]
      }
    },
    {
      id: 'englitto7-step2',
      type: 'text' as const,
      content: `
## Step 2: Mapping the Shifts

| Lines | Marker | Attitude | Key evidence |
|---|---|---|---|
| 1-6 | Short declaratives; exclamation | Serene, admiring | "calm," "fair," "tranquil bay," "sweet is the night-air!" |
| 7-14 | "Only"; "Listen!" | Unease turning to sadness | "grating roar," "tremulous cadence slow," "The eternal note of sadness" |
| 15-20 | Shift from present place to ancient past | Reflective, consoled by shared experience | Sophocles heard the same sound and thought of "human misery" |
| 21-28 | "But now" | Elegiac: mourning the loss of religious faith | "The sea of faith / Was once, too, at the full"; "melancholy, long, withdrawing roar" |
| 29-30 | "Ah, love"; change of addressee | Tender, urgent plea | "let us be true / To one another!" |
| 30-37 | "which seems ... Hath really" | Bleak, disillusioned, close to despairing | "neither joy, nor love, nor light"; "ignorant armies clash by night" |

### How the Tools Explain the Shifts

- **Imagery carries the tone (Part 2).** The sea moves from "full" and moonlit to "withdrawing" down "naked shingles." The image of faith as a tide going out turns a description of the beach into a description of the age.
- **Sound becomes sense.** The pebbles that "Begin and cease, and then again begin" give the sadness a repeating, unending rhythm.
- **The gap between seeming and being (Part 4).** "the world, which seems / To lie before us like a land of dreams" is undercut by "Hath really neither joy, nor love, nor light." The first stanza's beauty was one of those seemings. The poem's irony is not a narrator's joke; it is the speaker's discovery that the lovely view misled him.
- **The change of listener (Part 3).** For three stanzas the speaker reflects. When he turns to "love," his reflection becomes a reason for action: if the world offers no certainty, two people must be "true / To one another."
`
    },
    {
      id: 'englitto7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Track the Shifts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"But now I only hear / Its melancholy, long, withdrawing roar" expresses an attitude toward the loss of faith that is ___`,
            options: ['elegiac', 'triumphant', 'indifferent', 'sarcastic']
          },
          {
            label: `The phrase "the world, which seems" introduces a contrast between ___`,
            options: ['appearance and reality', 'past and future', 'England and France', 'speaker and poet']
          },
          {
            label: `The final simile of "ignorant armies" that "clash by night" leaves a tone of ___`,
            options: ['bleak disillusionment', 'hopeful resolve', 'detached amusement', 'patriotic pride']
          }
        ],
        correctAnswers: ['elegiac', 'appearance and reality', 'bleak disillusionment'],
        hint1: 'The speaker mourns something that once was "at the full."',
        hint2: 'The world "seems" beautiful but "Hath really" nothing.',
        hint3: 'Confusion, darkness and blind conflict.',
        explanation: 'The withdrawing roar mourns lost faith; "seems ... Hath really" sets appearance against reality; and the night battle of ignorant armies closes the poem in disillusionment.'
      }
    },
    {
      id: 'englitto7-step3',
      type: 'text' as const,
      content: `
## Step 3: Naming the Complex Tone

The poem does not have one tone, and it does not simply move from happy to sad. Its last stanza holds two attitudes at once.

| Attitude | Toward | Evidence |
|---|---|---|
| Tender, urgent devotion | The beloved | "Ah, love, let us be true / To one another!" |
| Bleak disillusionment | The world | "neither joy, nor love, nor light"; "darkling plain" |

The two depend on each other. Love is offered not because the world is good but because it is not; the plea is urgent *because* the vision is bleak. Notice too that "love" appears in the list of things the world lacks. The lovers' truth to each other is set against a world without love, so their bond is a small, private exception, not a cure.

### Sample Thesis Tracing the Shift

*Arnold's speaker moves from serene admiration of a moonlit sea to an elegy for lost religious faith, and the poem's final plea for love is shaped by that loss: tenderness toward the beloved becomes the only shelter in a world the speaker has come to see as dark, uncertain and violent.*

This thesis names the occasion (the moonlit sea), traces the shift (serenity to elegy), and holds a tension (tenderness inside despair), so it supports a line of reasoning and a route to Row C.

### Topic Review

| Part | Core idea | Example |
|---|---|---|
| 2 | Name tone precisely: attitude, object, evidence; tone is not mood | Housman's wryly consoling speaker |
| 3 | Speaker, listener and occasion shape tone | Jonson's restrained epitaph; Wordsworth's late turn to his sister |
| 4 | A narrator's voice can be ironic toward one target and warm toward another | Austen's mock-heroic farewell scene |
| 5 | Shifts leave markers; ambivalence and mixed tone are not shifts | "Surprised by joy" |
| 6 | Paired adjectives: both must fit; trace shifts in a thesis | "Tintern Abbey" model paragraph |
| 7 | All tools on one poem | "Dover Beach" |

> 🔑 **AP Connection:** In a Q1 essay on a poem like this, organize by movement: one paragraph per major attitude, with commentary on what causes each turn. Save your most complex claim, the interdependence of love and despair, for the final paragraph, where it can earn the sophistication point.
`
    },
    {
      id: 'englitto7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In "Dover Beach," the speaker's attitude in the final stanza is best described as`,
            options: [
              `devoted yet despairing`,
              `cheerful and confident about the future`,
              `coldly indifferent toward the listener`,
              `angry and accusing toward the listener`
            ],
            correctAnswer: 0,
            explanation: `The plea "let us be true / To one another!" is devoted, while the vision of a world without "certitude" or "peace" is close to despair. Nothing in the stanza is cheerful, and the address "Ah, love" rules out coldness or accusation.`
          },
          {
            question: `Which pairing correctly matches a text from this topic with the main source of its tonal complexity?`,
            options: [
              `Northanger Abbey: a narrator who mourns the heroine's early death`,
              `"On My First Son": composure that breaks once under grief`,
              `"Surprised by joy": a narrator mocking romance conventions`,
              `"To an Athlete Dying Young": a sister revealed late as listener`
            ],
            correctAnswer: 1,
            explanation: `Jonson's epitaph keeps a controlled, almost legal composure until "Oh! could I lose all father, now!" The mock-heroic narrator belongs to Northanger Abbey, the late-revealed sister to "Tintern Abbey," and no heroine dies in Austen's opening chapters.`
          },
          {
            question: `A student describes the tone of "To an Athlete Dying Young" as "sad." Which replacement is most precise?`,
            options: [
              `sorrowful and gloomy in every stanza`,
              `wryly consoling toward the dead boy`,
              `happy about the boy's praise`,
              `angry at the cheering townspeople`
            ],
            correctAnswer: 1,
            explanation: `The speaker consoles himself and the boy with dry, ironic praise ("Smart lad, to slip betimes away"). Piling up near-synonyms for sad adds no precision, taking the praise as simple happiness misses the irony, and the townspeople are never blamed.`
          }
        ]
      }
    },
    {
      id: 'englitto7-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A tone word for formally mourning something lost, as in Arnold's lines on the "sea of faith"`,
            answer: 'elegiac',
            acceptableAnswers: ['elegaic', 'mournful']
          },
          {
            question: `Saying less than a situation deserves, as in "silence sounds no worse than cheers"`,
            answer: 'understatement',
            acceptableAnswers: ['litotes', 'an understatement']
          },
          {
            question: `The silent person a speaker addresses, like the "love" called to the window in "Dover Beach"`,
            answer: 'listener',
            acceptableAnswers: ['addressee', 'auditor', 'silent listener', 'the listener']
          }
        ],
        hint1: 'The adjective form of "elegy."',
        hint2: 'The opposite of exaggeration.',
        hint3: 'The one who hears but never answers.',
        explanation: 'An elegiac tone mourns what is lost, understatement creates feeling by holding back, and the listener (or addressee) is the person the speaker talks to.'
      }
    }
  ]
}
