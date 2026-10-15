export const englitPoetry2Part5Data = {
  topicSlug: 'englit-poetry-2',
  sections: [
    {
      id: 'englitpo5-intro',
      type: 'text' as const,
      content: `
# 🌙 Poetry Analysis II

**Part 5 of 7 — Symbol, Allegory, Allusion and Irony**

---

| Section |
|---------|
| 📖 Four Ways a Poem Points Beyond Itself |
| Blake's Rose: An Open Symbol |
| Allegory: A Whole Story That Means Something Else |
| Owen's Allusion and "The old Lie" |
| Misconceptions and Writing Moves |

> 🔑 **Key Concept:** Skill **5.C** asks you to identify and explain the function of a symbol, and skill **6.D** asks the same of an allusion. These figures connect a poem's concrete details to meanings beyond them: another idea, another story, another text. Irony then measures the gap between what is said and what is meant.
`
    },
    {
      id: 'englitpo5-four',
      type: 'text' as const,
      content: `
## 📖 Four Ways a Poem Points Beyond Itself

| Figure | How it works | Key test |
|---|---|---|
| **Symbol** | A concrete object, person or action that keeps its literal meaning while suggesting further ones | Does the thing exist in the poem's world *and* carry meaning beyond it? |
| **Allegory** | A sustained narrative in which characters, places and events stand for abstract ideas in a consistent system | Does a *whole story* map onto a second level of meaning? |
| **Allusion** | A brief reference to a well-known person, event, place or text outside the work | Does the poem borrow meaning from something the reader is expected to know? |
| **Irony** | A gap between what is said and what is meant (verbal), what a speaker knows and what the reader knows (dramatic), or what is expected and what happens (situational) | Is there a gap the reader is meant to notice? |

Symbols tend to be **open**: they suggest several meanings at once. Allegory tends to be **closed**: its correspondences are more fixed. That difference shapes how cautiously you should write about each.
`
    },
    {
      id: 'englitpo5-blake',
      type: 'text' as const,
      content: `
## Blake's Rose: An Open Symbol

> O rose, thou art sick!
> The invisible worm,
> That flies in the night,
> In the howling storm,
>
> Has found out thy bed
> Of crimson joy,
> And his dark secret love
> Does thy life destroy.
>
> — William Blake, "The Sick Rose," *Songs of Experience*, 1794

Literally, the poem describes a rose eaten by a worm or insect larva. But the language will not stay literal. A worm that "flies" in a "howling storm," a "bed / Of crimson joy," a "dark secret love" that destroys: these are words for human passion.

### Building, Not Decoding, a Reading

| Reading | Support | What it leaves open |
|---|---|---|
| Love corrupted by secrecy, jealousy or shame | "dark secret love," "bed," "crimson joy" | Whose secrecy? The worm's, the rose's, or society's? |
| Innocence destroyed by experience | The poem belongs to *Songs of Experience*; the worm is "invisible," a hidden corruption | What exactly counts as experience here? |
| Physical disease or decay | "sick," "destroy," the literal canker-worm in a rose | Why does disease speak the language of love? |

Each reading is defensible. The strongest essays do not pick one and discard the rest; they show how the symbol holds love and destruction together, so that the same "love" that seeks the rose's "bed" is what kills it.

Note the apostrophe in the first line. The speaker addresses the rose as one would a person, which prepares us to read it as more than a flower.
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
            question: `The phrase "his dark secret love" chiefly suggests that the worm's destructiveness is`,
            options: [
              `a form of desire that harms what it seeks`,
              `an accident of the weather in the storm`,
              `a punishment the rose has rightly earned`,
              `a natural process the speaker welcomes`
            ],
            correctAnswer: 0,
            explanation: `The worm's harm is called "love," and it seeks the rose's "bed / Of crimson joy," so desire and destruction merge. The storm is only the setting, the poem assigns the rose no guilt, and the opening cry "thou art sick!" is not welcoming.`
          },
          {
            question: `Which statement best describes how the rose functions in the poem?`,
            options: [
              `It is a code word that stands for one specific person.`,
              `It is literal and suggestive at once, open to several readings.`,
              `It is purely a flower, so symbolic readings are mistaken.`,
              `It is an allusion to a famous rose in an earlier poem.`
            ],
            correctAnswer: 1,
            explanation: `The poem describes a real blighted flower while its diction ("bed," "joy," "love") invites readings about passion, innocence and corruption. It does not encode one person, the human language makes a purely literal reading too narrow, and no earlier poem is invoked.`
          }
        ]
      }
    },
    {
      id: 'englitpo5-allegory',
      type: 'text' as const,
      content: `
## Allegory: A Whole Story That Means Something Else

An allegory carries its second meaning through the entire narrative. The classic example in English is John Bunyan's prose allegory *The Pilgrim's Progress* (1678). Its hero, named Christian, journeys from the City of Destruction toward the Celestial City. On the way he sinks in the Slough of Despond (a bog of despair) and passes through the town of Vanity Fair (worldly temptation).

| Allegorical element | Literal level | Second level |
|---|---|---|
| Christian | A traveler | Any believer |
| The journey | A road between two cities | The spiritual life, from sin to salvation |
| Slough of Despond | A swamp | Despair over one's sins |
| Vanity Fair | A market town | The world's distractions |

Notice the **names**. Allegory often labels its figures with the ideas they represent. Poems can be allegorical too. A poem that presents life as a single journey, with each stage of the road matching a stage of life, works by allegory; you will read one, Christina Rossetti's "Up-Hill," in Part 6.

### Symbol or Allegory?

| | Symbol | Allegory |
|---|---|---|
| Scale | One object or image | A whole narrative system |
| Meanings | Open, several at once | More fixed one-to-one correspondences |
| Literal level | Strong; the object matters in itself | Often thin; the second level dominates |
| How to write about it | "suggests," "evokes," "can be read as" | "represents," "corresponds to," then ask what the system argues |
`
    },
    {
      id: 'englitpo5-owen',
      type: 'text' as const,
      content: `
## Owen's Allusion and "The old Lie"

Wilfred Owen was an English officer on the Western Front in World War I. He was killed on 4 November 1918, a week before the Armistice; his poems were collected in 1920. "Dulce et Decorum est" begins with soldiers trudging away from the front line:

> Bent double, like old beggars under sacks,
> Knock-kneed, coughing like hags, we cursed through sludge,
> Till on the haunting flares we turned our backs,
> And towards our distant rest began to trudge.
> Men marched asleep. Many had lost their boots,
> But limped on, blood-shod. All went lame, all blind;

A gas attack follows, and one man fails to get his helmet on in time. The final stanza turns to a "you" who praises war:

> My friend, you would not tell with such high zest
> To children ardent for some desperate glory,
> The old Lie: Dulce et decorum est
> Pro patria mori.
>
> — Wilfred Owen, "Dulce et Decorum est," *Poems*, 1920

### The Allusion

The Latin comes from the Roman poet **Horace** (Odes, Book III): *Dulce et decorum est pro patria mori*, "It is sweet and fitting to die for one's country." The line was familiar to British schoolboys of Owen's era as a patriotic motto.

| Step | Analysis |
|---|---|
| What is alluded to? | A famous classical line praising death for one's country |
| What does the allusion bring with it? | Centuries of authority, the classroom, ideals of honor |
| How does Owen use it? | He sets the motto against what the poem has just shown: a man "drowning" in gas |
| What does the clash produce? | Bitter **irony**: the "sweet and fitting" death is exposed as "The old Lie" |

### The Ironies

- **Verbal irony in the title.** The title promises a patriotic poem; the poem delivers the opposite.
- **Situational irony in the first stanza.** Soldiers, supposedly heroic young men, are "like old beggars" and "hags," "Knock-kneed" and coughing.
- **Irony in "my friend."** The address sounds cordial, but the "friend" is the one telling "The old Lie" to "children ardent for some desperate glory." (An early draft of the poem was addressed to Jessie Pope, a writer of patriotic verse; the published version leaves the target general.)

The allusion works because readers know the motto. Allusion always depends on shared knowledge, and on the exam you are not expected to know obscure references: the passage or a note will supply what you need. You are expected to explain how the reference functions.
`
    },
    {
      id: 'englitpo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Figure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Owen quotes a line from Horace and calls it "The old Lie." The quotation is an ___`,
            options: ['allusion', 'allegory', 'apostrophe', 'anaphora']
          },
          {
            label: `A traveler named Christian journeying to the Celestial City, each stage standing for a spiritual stage, is an ___`,
            options: ['allegory', 'allusion', 'extended simile', 'elegy']
          },
          {
            label: `Young soldiers described as "old beggars" and "hags" is an example of ___`,
            options: ['situational irony', 'verbal irony', 'personification', 'synecdoche']
          }
        ],
        correctAnswers: ['allusion', 'allegory', 'situational irony'],
        hint1: 'A reference to a well-known text outside the poem.',
        hint2: 'A whole story with a consistent second level of meaning.',
        hint3: 'The reality is the opposite of what one would expect of young men.',
        explanation: 'Quoting Horace is an allusion; Bunyan\'s journey is an allegory; and young men reduced to the state of old beggars is situational irony.'
      }
    },
    {
      id: 'englitpo5-writing',
      type: 'text' as const,
      content: `
## Misconceptions and Writing Moves

### Common Misconceptions

- **"Every object in a poem is a symbol."** An object becomes symbolic when the poem gives it weight: repetition, emphasis, language that will not stay literal, a title.
- **"A symbol has one correct meaning."** Symbols are usually open. Say what a symbol *suggests*, and consider how two meanings interact.
- **"An allusion is just a reference to show off."** An allusion imports a whole context. Ask what it brings and how the poem uses or overturns it.
- **"Irony means sarcasm."** Sarcasm is one crude kind of verbal irony. Literary irony is any meaningful gap between expectation and reality, statement and meaning.

| Weak | Strong |
|---|---|
| "The rose symbolizes love." | "Blake's rose holds love and decay together: the same 'dark secret love' that seeks its 'bed / Of crimson joy' destroys it." |
| "Owen uses an allusion to Horace." | "Owen ends with Horace's motto only after making the reader watch a man drown in gas, so the classical line collapses into 'The old Lie.'" |

> 🔑 **AP Connection:** Section I questions about symbols usually ask what an object "most likely represents" or "suggests." Choose the answer the whole poem supports, not the one most familiar from outside it (roses do not always mean romance). For allusions, the question will give you enough context; focus on the function.
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
            question: `The similes "like old beggars under sacks" and "coughing like hags" primarily serve to`,
            options: [
              `strip the soldiers of the glamour of youthful heroism`,
              `mock the soldiers for their lack of discipline`,
              `show how poverty drove the men to enlist`,
              `suggest the men are older than official records claim`
            ],
            correctAnswer: 0,
            explanation: `Young soldiers made to look like beggars and old women expose the gap between war's heroic image and its reality. Owen sympathizes rather than mocks, enlistment is not discussed, and the similes describe condition, not actual age.`
          },
          {
            question: `By calling Horace's motto "The old Lie," the speaker`,
            options: [
              `praises the wisdom of classical poets`,
              `rejects a long-honored ideal as false`,
              `admits that he once believed it himself`,
              `suggests the Latin has been mistranslated`
            ],
            correctAnswer: 1,
            explanation: `"Old" points to the motto's long authority and "Lie" denies its truth, after the poem has shown what dying for one's country looks like. The speaker does not praise Horace, confess an earlier belief, or quarrel with the translation.`
          },
          {
            question: `The address "My friend" in the final stanza is best described as`,
            options: [
              `sincere gratitude toward a fellow soldier`,
              `bitter irony aimed at a promoter of war`,
              `a plea for help from a sympathetic reader`,
              `an apostrophe to the soldier who has died`
            ],
            correctAnswer: 1,
            explanation: `The "friend" is the one who tells children "The old Lie," so the cordial address is ironic. The listener is not a fellow soldier, the speaker is accusing rather than pleading, and the dead man is described, not addressed.`
          }
        ]
      }
    }
  ]
}
