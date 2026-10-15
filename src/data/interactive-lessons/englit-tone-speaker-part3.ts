export const englitToneSpeakerPart3Data = {
  topicSlug: 'englit-tone-speaker',
  sections: [
    {
      id: 'englitto3-intro',
      type: 'text' as const,
      content: `
# 🗣️ Tone and Speaker

**Part 3 of 7 — Speaker, Listener and Occasion**

---

| Section |
|---------|
| 📖 The Speaking Situation |
| Kinds of Listener |
| Close Reading: Jonson's "On My First Son" |
| Close Reading: Wordsworth Turns to His Sister |
| How the Situation Shapes Tone |

> 🔑 **Key Concept:** Skill **4.A** asks you to identify and describe the speaker of a text, and skill **4.B** asks how the position from which a text is told shapes it. Every lyric poem is a speech act: someone speaks, to someone, on some occasion. Change any one of the three and the tone changes with it.
`
    },
    {
      id: 'englitto3-situation',
      type: 'text' as const,
      content: `
## 📖 The Speaking Situation

| Element | Question | Where the evidence is |
|---|---|---|
| **Speaker** | Who is talking? What do we learn about age, role, relationship, state of mind? | Pronouns, self-description, what the speaker notices and how |
| **Listener (addressee)** | Who is being spoken to? Is that person present, absent, dead, or the reader? | Second-person pronouns ("thou," "you"), commands, names, questions |
| **Occasion** | What event or moment prompts the speech? | Titles, dates, place names, the first lines, the poem's genre (an epitaph, a farewell, a love request) |

### Poet and Speaker

The poet is the person who wrote the poem; the speaker is the voice inside it. Poetry Analysis II covered personas and dramatic monologues, where the gap is obvious. In a **lyric** poem (a short poem voicing one person's thoughts and feelings) the speaker often sounds like the poet, and some lyrics tell us so: Ben Jonson writes his own name into the poem below. Even then, write "the speaker." The speaker is a crafted version of the poet in one moment and one mood, not the whole person, and your claims are about the text, not the biography.

### The Occasion Sets Expectations

A genre is partly an occasion with rules. An **epitaph** (a short inscription for a tomb, or a poem written as one) is expected to be brief, dignified and memorial. An **elegy** mourns at greater length. A poem written on returning to a place invites comparison of then and now. Knowing the occasion tells you what the reader expects, so you can notice when the speaker meets or breaks those expectations.
`
    },
    {
      id: 'englitto3-listeners',
      type: 'text' as const,
      content: `
## Kinds of Listener

| Listener | Signal | Effect on tone |
|---|---|---|
| **The reader in general** | No addressee named; statements about the world | Public, reflective, often generalizing |
| **A present, silent listener** | "you" or "thou" who never answers; gestures like "Come to the window" | Intimate, persuasive; the speech is shaped to move that person |
| **An absent or dead person** | Address to someone who cannot hear | Grief, longing, or self-exposure, since no reply is possible |
| **The self** | "I" speaking to "my soul," "my heart," or reasoning aloud | Private, divided, deliberative |
| **A thing or idea** | Address to Death, a bird, a season (apostrophe, covered earlier) | Heightened, ceremonial or impassioned |

A poem can change listeners partway through. When it does, the tone almost always changes too. Watch for a shift in pronouns: from "thou" to "man," or from "I" to "thou."
`
    },
    {
      id: 'englitto3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student's first draft says that in this poem Jonson grieves for his son. Which revision best keeps the claim about the voice inside the poem rather than the man who wrote it?`,
            options: [
              `In this poem Jonson's son mourns the life he has lost.`,
              `In this poem the speaker mourns the death of his son.`,
              `In this poem the reader mourns the death of Jonson's son.`,
              `In this poem the speaker invents a son in order to grieve.`
            ],
            correctAnswer: 1,
            explanation: `Naming the speaker keeps the claim about the voice in the text, even when that voice resembles the poet. The son does not mourn himself, the reader is not the griever, and nothing supports the idea that the son is invented.`
          },
          {
            question: `A poem titled *Lines Written on Leaving My Childhood Home* most directly announces its`,
            options: [
              `speaker`,
              `listener`,
              `occasion`,
              `meter`
            ],
            correctAnswer: 2,
            explanation: `The title names the moment that prompts the poem, a departure from home. It tells us little about the speaker's identity, names no addressee, and says nothing about rhythm.`
          }
        ]
      }
    },
    {
      id: 'englitto3-jonson',
      type: 'text' as const,
      content: `
## Close Reading: Jonson's "On My First Son"

Ben Jonson's son Benjamin died in 1603 at the age of seven. The poem is written as an epitaph.

> Farewell, thou child of my right hand, and joy;
> My sin was too much hope of thee, loved boy;
> Seven years thou wert lent to me, and I thee pay,
> Exacted by thy fate, on the just day.
> Oh! could I lose all father, now! for why,
> Will man lament the state he should envy?
> To have so soon 'scaped world's, and flesh's rage,
> And, if no other misery, yet age!
> Rest in soft peace, and, asked, say here doth lie
> Ben Jonson his best piece of poetry;
> For whose sake, henceforth, all his vows be such,
> As what he loves may never like too much.
>
> — Ben Jonson, "On My First Son," *Epigrams*, published in his *Works*, 1616

**Notes:** "child of my right hand" translates the Hebrew name Benjamin. "Lent" and "pay" use the language of a loan. "Poetry" comes from a Greek word for *making*, so the boy is the best thing his father ever made.

### Speaker, Listener, Occasion

| Element | In this poem |
|---|---|
| Speaker | A father, who names himself in line 10 as "Ben Jonson" |
| Listener | Changes: the dead son ("thou," lines 1-4), then no one in particular as the speaker reasons with himself (lines 5-8), then the son again, asked to speak for his own grave (lines 9-12) |
| Occasion | The burial of a seven-year-old; the poem takes the form of a tomb inscription |

### A Worked Reading of the Tone

| Lines | Evidence | Tone |
|---|---|---|
| 1-2 | "Farewell ... and joy"; "My sin was too much hope of thee" | Tender, then self-accusing: the father blames his own excessive hope |
| 3-4 | "lent," "pay," "Exacted," "the just day" | Controlled, almost legal; grief is held in check by the logic of a debt repaid on time |
| 5 | "Oh! could I lose all father, now!" | The control breaks: two exclamations and a wish to stop being a father, so as to stop feeling the loss |
| 6-8 | "Will man lament the state he should envy?" | The speaker argues himself toward consolation: the boy escaped the world's "rage" and old age. The question sounds more like an effort than a conviction |
| 9-10 | "Rest in soft peace"; "Ben Jonson his best piece of poetry" | Gentle and proud: the son becomes his father's finest work |
| 11-12 | "what he loves may never like too much" | Resolved but wounded: a vow to guard against loving this much again |

**The overall tone is restrained grief.** The epitaph occasion demands brevity and composure, and the speaker mostly keeps to it; the one exclamatory line shows how much the composure costs. The shifts in listener carry the poem's movement: speaking *to* the son is intimate, speaking *about* "man" is an attempt at philosophical distance, and handing the last words to the son lets the father praise the boy without praising himself.
`
    },
    {
      id: 'englitto3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Jonson** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The financial language of lines 3-4 ("lent," "pay," "Exacted") primarily serves to`,
            options: [
              `express the father's worry about the cost of the funeral`,
              `present the loss as a loan repaid, and so steady the grief`,
              `accuse the boy's fate of cheating the family out of its money`,
              `suggest the son was a burden the father was glad to repay`
            ],
            correctAnswer: 1,
            explanation: `Treating the boy as a loan returned "on the just day" lets the speaker accept the loss as fair, keeping his tone composed. The poem concerns no real money, does not accuse fate of cheating, and calls the boy his "joy," not a burden.`
          },
          {
            question: `The question "Will man lament the state he should envy?" marks a shift from`,
            options: [
              `direct address to the son to general reasoning about mankind`,
              `public mourning to private anger at the boy's physicians`,
              `an epitaph to a love poem addressed to the boy's mother`,
              `consolation to despair over the boy's lost future`
            ],
            correctAnswer: 0,
            explanation: `After four lines spoken to "thou," the speaker turns to "man" and argues in general terms that death spared the boy from the world's "rage" and age. No physicians, mother or slide into despair appear; the movement is toward consolation.`
          },
          {
            question: `The speaker's attitude in the final couplet is best described as`,
            options: [
              `bitter`,
              `chastened`,
              `indifferent`,
              `triumphant`
            ],
            correctAnswer: 1,
            explanation: `The vow that "what he loves may never like too much" shows a man taught by suffering to restrain his hopes. He is not bitter at anyone, his grief rules out indifference, and the vow is a wound, not a victory.`
          }
        ]
      }
    },
    {
      id: 'englitto3-tintern',
      type: 'text' as const,
      content: `
## Close Reading: Wordsworth Turns to His Sister

"Lines Written a Few Miles above Tintern Abbey" announces its occasion in its full title: it was composed "on revisiting the banks of the Wye during a tour, July 13, 1798." It opens with the return:

> Five years have passed; five summers, with the length
> Of five long winters! and again I hear
> These waters, rolling from their mountain-springs
> With a sweet inland murmur.

For more than a hundred lines the speaker seems to be alone, meditating on the landscape, on the boy he was five years earlier, and on what nature means to him now. The reader assumes the listener is the reader, or no one. Then the poem reveals that someone has been standing beside him all along:

> For thou art with me, here, upon the banks
> Of this fair river; thou, my dearest Friend,
> My dear, dear Friend, and in thy voice I catch
> The language of my former heart, and read
> My former pleasures in the shooting lights
> Of thy wild eyes. Oh! yet a little while
> May I behold in thee what I was once,
> My dear, dear Sister! And this prayer I make,
> Knowing that Nature never did betray
> The heart that loved her
>
> — William Wordsworth, "Lines Written a Few Miles above Tintern Abbey," *Lyrical Ballads*, 1798

### What the Late-Revealed Listener Does

| Feature | Evidence | Effect on tone |
|---|---|---|
| Change of pronoun | From "I" to "thou" | The solitary meditation becomes a shared, intimate speech |
| Repetition | "My dear, dear Friend" ... "My dear, dear Sister" | Warmth that is almost breathless; the measured syntax of the meditation gives way to feeling |
| The sister as mirror | "in thy voice I catch / The language of my former heart" | Tender and a little wistful: he sees in her the eager self he has lost |
| From reflection to blessing | "this prayer I make"; later "let the moon / Shine on thee" | The tone becomes protective and hopeful, a blessing spoken over a younger listener |

**Why it matters.** The late turn recasts everything before it. The speaker's reflections on loss and "Abundant recompence" were, it turns out, spoken in his sister's presence; his confidence about nature becomes a gift he hands to her, and perhaps a reassurance he needs to hear himself say aloud.
`
    },
    {
      id: 'englitto3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Speaking Situation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `In "On My First Son," lines 1-4 are addressed to ___`,
            options: ['the dead son', 'the boy\'s mother', 'the reader', 'God']
          },
          {
            label: `The phrase "July 13, 1798" in Wordsworth's title chiefly establishes the poem's ___`,
            options: ['occasion', 'speaker', 'meter', 'listener']
          },
          {
            label: `When "thou, my dearest Friend" appears, the poem's tone moves from solitary meditation toward ___`,
            options: ['intimate blessing', 'bitter complaint', 'detached analysis', 'comic mockery']
          }
        ],
        correctAnswers: ['the dead son', 'occasion', 'intimate blessing'],
        hint1: 'Look for "thou" and "loved boy."',
        hint2: 'A date marks the moment that prompts the poem.',
        hint3: 'He goes on to make "this prayer" for her.',
        explanation: 'Jonson opens by speaking to his dead son; the date in Wordsworth\'s title fixes the occasion of the return; and the turn to "thou" makes the meditation an affectionate blessing spoken to his sister.'
      }
    },
    {
      id: 'englitto3-writing',
      type: 'text' as const,
      content: `
## How the Situation Shapes Tone

Put the three elements into your claims. A tone word becomes an argument when you explain *why* the speaker sounds that way *in this situation*.

| Weak | Strong |
|---|---|
| *Jonson's tone is sad.* | *Writing an epitaph, a form that asks for composure, Jonson's speaker holds his grief in the language of a repaid loan until a single exclamation, "could I lose all father," shows what that composure costs.* |
| *Wordsworth talks to his sister.* | *By revealing his sister only late in the poem, Wordsworth turns a private meditation into a blessing, so his confidence in nature becomes something offered to another person rather than merely asserted.* |

### Quick Checklist for Any Poem

1. Who speaks? Note at least one detail that characterizes the speaker.
2. To whom? Find every "you" or "thou," and note if the addressee changes.
3. On what occasion? Check the title, any date or place, and the first lines.
4. How does that situation explain the tone? Look for where the speaker meets, or breaks, what the occasion expects.

> 🔑 **AP Connection:** Section I often asks who is addressed in a given line, or what a shift in address reveals. In Q1, a thesis that names the occasion (*Writing an epitaph for his son, Jonson...*) gives your line of reasoning a built-in context for every tone claim that follows.
`
    },
    {
      id: 'englitto3-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `The event or moment that prompts a poem, such as a burial or a return to a place`,
            answer: 'occasion',
            acceptableAnswers: ['the occasion']
          },
          {
            question: `A short poem written as, or in the style of, an inscription on a tomb`,
            answer: 'epitaph',
            acceptableAnswers: ['an epitaph']
          },
          {
            question: `The person or thing a speaker talks to in a poem`,
            answer: 'addressee',
            acceptableAnswers: ['listener', 'the listener', 'the addressee', 'auditor']
          }
        ],
        hint1: 'The "when and why" of the speech.',
        hint2: 'Jonson\'s poem asks the son to speak for his own grave.',
        hint3: 'The one addressed; also called the listener.',
        explanation: 'The occasion prompts the speech, an epitaph is a tomb inscription or a poem written as one, and the addressee (or listener) is whoever the speaker talks to.'
      }
    }
  ]
}
