export const englitFigurativeLanguagePart4Data = {
  topicSlug: 'englit-figurative-language',
  sections: [
    {
      id: 'englitfi4-intro',
      type: 'text' as const,
      content: `
# 🪞 Figurative Language

**Part 4 of 7 — Allusion and Its Work**

---

| Section |
|---------|
| 📖 Kinds of Allusion |
| Three Questions for Any Allusion: Keats's Ruth |
| Prufrock's Borrowed Heroes |
| Ironic Allusion and Mock-Heroic Deflation |
| Writing About Allusion |

> 🔑 **Key Concept:** Skill **6.D** asks you to identify and explain the function of an allusion. An **allusion** is a brief reference to a person, place, event or text outside the work, which the author expects the reader to recognize. Poetry Analysis II introduced it with Owen's use of Horace. This part shows what an allusion carries into a poem, how to work out its function when you only half-know the source, and how a whole poem can be built from allusions that turn against the speaker.
`
    },
    {
      id: 'englitfi4-kinds',
      type: 'text' as const,
      content: `
## 📖 Kinds of Allusion

An allusion works like a hyperlink: a word or two opens a whole story, and the author borrows its feelings and meanings without retelling it. Keats's "Ode to a Nightingale" (1819; collected 1820) packs several kinds into eighty lines.

| Kind | Source | Example from the ode | What it brings in |
|---|---|---|---|
| **Classical** (Greek and Roman myth and literature) | Myth | "Lethe-wards had sunk" | Lethe, the underworld river whose water makes the dead forget their lives |
| **Classical** | Myth | "the true, the blushful Hippocrene" | The spring of the Muses, whose water inspires poets; here a playful name for red wine |
| **Classical** | Myth | "Not charioted by Bacchus and his pards" | The wine god in his leopard-drawn chariot; the speaker rejects drunken escape for "the viewless wings of Poesy" |
| **Biblical** | Scripture | "the sad heart of Ruth, when, sick for home, / She stood in tears amid the alien corn" | The widow Ruth, who left her homeland to follow her mother-in-law and gleaned grain in a foreign field |
| **Literary** | Another work of literature | (Prufrock, below) "I am not Prince Hamlet" | A famous character and everything he stands for |
| **Historical or artistic** | Real people and events | (Prufrock, below) "Talking of Michelangelo" | A real artist and the heroic scale of his work |

You will not know every allusion on the exam. Section I questions that hinge on one usually explain it or make it clear from context. What you must do is reason about **function**.
`
    },
    {
      id: 'englitfi4-ruth',
      type: 'text' as const,
      content: `
## Three Questions for Any Allusion: Keats's Ruth

| Question | What to ask |
|---|---|
| **1. What is the source moment?** | Who or what is referred to, and what happens there? |
| **2. Which part fits?** | Which feature of the source matches the situation in the poem? An allusion borrows selectively. |
| **3. Straight or ironic?** | Does the poem's situation live up to the source, or fall comically or bitterly short of it? |

### A Worked Example

In the seventh stanza the speaker imagines that the nightingale's song has been heard for centuries:

> Thou wast not born for death, immortal Bird!
> No hungry generations tread thee down;
> The voice I hear this passing night was heard
> In ancient days by emperor and clown:
> Perhaps the self-same song that found a path
> Through the sad heart of Ruth, when, sick for home,
> She stood in tears amid the alien corn;
>
> — John Keats, "Ode to a Nightingale"

**1. Source moment.** In the Book of Ruth, Ruth, a widow from Moab, leaves her own country to go with her mother-in-law Naomi to Bethlehem, and there she gathers leftover grain in the fields of a stranger, Boaz. ("Corn" in British English means grain.)

**2. Which part fits.** Keats does not use the story's happy ending (Ruth marries Boaz). He imagines a moment the Bible never describes: Ruth "sick for home," weeping in a foreign field. What he borrows is **exile and homesickness**.

**3. Straight or ironic.** The allusion is straight, but its placement is pointed. The song is "immortal," passed down through "ancient days" to "emperor and clown" alike, while every listener, from Ruth to the speaker, is mortal and far from home. The allusion turns the speaker's private longing into a human condition: we listen to beauty that outlasts us, as exiles. And "alien corn" is a transferred epithet: the grain is not alien; Ruth is.

### What an Allusion Can Do

| Function | Example |
|---|---|
| Compress a whole story into a phrase | "Ruth" brings exile, loyalty and grief in one name |
| Lend dignity or scale | Comparing an ordinary moment to a biblical or epic one |
| Measure a fall | A speaker set beside a hero who makes him look small (ironic) |
| Build a community of readers | The reader who catches the reference shares a culture with the poet |
`
    },
    {
      id: 'englitfi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, the allusion to Ruth "sick for home" amid "the alien corn" primarily serves to`,
            options: [
              `link the speaker's longing to an ancient image of exile and homesickness`,
              `suggest that the speaker plans to leave England for a foreign country`,
              `remind the reader of the happy marriage that ends Ruth's story`,
              `prove that nightingales lived in biblical lands`
            ],
            correctAnswer: 0,
            explanation: `Keats chooses Ruth weeping in a foreign field, so the immortal song is heard by an exile far from home, as the speaker feels exiled from the bird's world. The stanza mentions no journey, avoids the story's happy ending and makes no factual claim about birds.`
          },
          {
            question: `The speaker's rejection of travel "charioted by Bacchus and his pards" in favor of "the viewless wings of Poesy" suggests that he`,
            options: [
              `fears that wine will make him ill`,
              `prefers imagination to drunkenness as a means of escape`,
              `believes that the classical gods are angry with him`,
              `wants the nightingale to carry him away on its own wings`
            ],
            correctAnswer: 1,
            explanation: `Bacchus is the god of wine, so the speaker turns from the wine he longed for in stanza two to the "wings of Poesy," poetry and imagination. Illness, the gods' anger and the bird's own wings play no part in the choice.`
          },
          {
            question: `The phrase "the true, the blushful Hippocrene" is best described as`,
            options: [
              `a literal description of a spring the speaker once visited`,
              `a biblical allusion to wine at a wedding`,
              `a playful classical name for red wine`,
              `an allusion to the tears of the exiled Ruth`
            ],
            correctAnswer: 2,
            explanation: `The Hippocrene was the Muses' spring, whose water inspired poets; making it "blushful" turns it into red wine, so the speaker half-jokes that red wine is a source of poetic inspiration. It is classical, not biblical, the speaker has never been to the spring, and Ruth appears only later.`
          }
        ]
      }
    },
    {
      id: 'englitfi4-prufrock',
      type: 'text' as const,
      content: `
## Prufrock's Borrowed Heroes

T. S. Eliot's "The Love Song of J. Alfred Prufrock" (first published in *Poetry* magazine in 1915; collected in *Prufrock and Other Observations*, 1917) is a dramatic monologue by a timid, aging man who cannot bring himself to ask an "overwhelming question" at an evening party. The poem is crowded with allusions, and almost every one measures Prufrock against a figure he cannot live up to.

### The Epigraph

The poem opens with six lines in Italian from Dante's *Inferno* (Canto 27). They are spoken by Guido da Montefeltro, a soul burning inside a flame in hell, who agrees to tell his story only because he believes no one ever returns from that pit to repeat it. In paraphrase: if I thought I were answering someone who could go back to the world, this flame would stop moving; but since no one ever returns alive from this depth, I can answer you without fear of disgrace.

**Function.** Before Prufrock speaks a word, the epigraph frames what follows as a confession made in a private hell, by someone who speaks only because he thinks no one will hear. The "you" of "Let us go then, you and I" inherits the role of Dante, the listener who should not exist.

### The Allusions in Order

| Line | Source | What the source carries | How Prufrock's world twists it |
|---|---|---|---|
| "In the room the women come and go / Talking of Michelangelo." | Michelangelo, Renaissance sculptor and painter of heroic human bodies | Grandeur, genius, the heroic body | Made into idle party chatter; Prufrock worries that people will say "how his arms and legs are thin!" |
| "There will be time to murder and create, / And time for all the works and days of hands" | Ecclesiastes 3 ("A time to kill, and a time to heal"); Hesiod's *Works and Days*, a Greek poem about farm labor | The solemn order of a life's seasons; honest work | Spent on "a hundred indecisions" before "toast and tea" |
| "I know the voices dying with a dying fall" | Duke Orsino in Shakespeare's *Twelfth Night*: "That strain again, it had a dying fall" | A lovesick duke indulging in music | Only the fading voices remain, and Prufrock is not the lover |
| "my head (grown slightly bald) brought in upon a platter" | John the Baptist, beheaded at Salome's request: "his head was brought in a charger" (Matthew 14) | A prophet martyred for speaking the truth | Prufrock's head is balding, and he admits, "I am no prophet" |
| "To have squeezed the universe into a ball" | Andrew Marvell's "To His Coy Mistress," whose speaker urges rolling the lovers' strength and sweetness into one ball | Seize the moment; love conquers time | Prufrock cannot seize even a conversation |
| "I am Lazarus, come from the dead, / Come back to tell you all" | Lazarus raised by Jesus (John 11), and the beggar Lazarus whom a rich man begs Abraham to send back to warn the living (Luke 16) | A miraculous return with a message | His imagined revelation is met with "That is not what I meant at all." |
| "No! I am not Prince Hamlet, nor was meant to be; / Am an attendant lord" | Shakespeare's *Hamlet* | The great indecisive hero | Prufrock casts himself as a minor courtier "Full of high sentence, but a bit obtuse," almost "the Fool" |
`
    },
    {
      id: 'englitfi4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Source** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"I am Lazarus, come from the dead": a ___ allusion`,
            options: ['biblical', 'classical', 'literary', 'historical']
          },
          {
            label: `"Lethe-wards had sunk": a ___ allusion`,
            options: ['classical', 'biblical', 'literary', 'historical']
          },
          {
            label: `"No! I am not Prince Hamlet": a ___ allusion`,
            options: ['literary', 'biblical', 'classical', 'historical']
          }
        ],
        correctAnswers: ['biblical', 'classical', 'literary'],
        hint1: 'Lazarus appears in the Gospels of John and Luke.',
        hint2: 'Lethe is a river of the Greek underworld.',
        hint3: 'Hamlet is a character in a play.',
        explanation: 'Lazarus comes from the Bible, Lethe from Greek myth, and Hamlet from Shakespeare, so the allusions are biblical, classical and literary.'
      }
    },
    {
      id: 'englitfi4-irony',
      type: 'text' as const,
      content: `
## Ironic Allusion and Mock-Heroic Deflation

A **straight allusion** asks the reader to see the poem's situation as like its source (Keats's exiled listeners are really like Ruth). An **ironic allusion** sets a situation beside a source it fails to match, so the gap becomes the meaning. When the source is heroic and the present is petty, the effect is **mock-heroic deflation**.

> Though I have seen my head (grown slightly bald) brought in upon a platter,
> I am no prophet—and here's no great matter;
>
> — T. S. Eliot, "The Love Song of J. Alfred Prufrock," 1915

Watch the line deflate itself. It begins with the grandest possible image, the martyred prophet's head on a platter. Then a parenthesis drops in "(grown slightly bald)," a vain, trivial worry. Then Prufrock denies the role outright ("I am no prophet"), and the litotes "no great matter" shrinks the whole crisis. The sentence enacts his life: it reaches for greatness and sinks into embarrassment.

### The Pattern Across the Poem

| Heroic source | Prufrock's version |
|---|---|
| Michelangelo's heroic bodies | His own thin arms and legs |
| A prophet beheaded for truth | A balding man afraid of a tea party |
| Lazarus with news from the dead | A message no one wants: "That is not it, at all." |
| Prince Hamlet, the tragic hero | "an attendant lord," almost "the Fool" |

**Complexity, not just mockery.** It would be too simple to say that Eliot mocks Prufrock. Prufrock chooses these comparisons himself and then rejects them, so he is painfully aware of his own smallness. The allusions show a man educated in the grand stories of his culture who knows he lives in none of them. The irony therefore produces pathos as well as comedy, and a reading that holds both earns a more sophisticated argument.
`
    },
    {
      id: 'englitfi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Prufrock** 🔍
      `,
      exercise: {
        questions: [
          {
            question: `The allusion to John the Baptist in "my head (grown slightly bald) brought in upon a platter" primarily serves to`,
            options: [
              `foreshadow Prufrock's execution later in the poem`,
              `set a martyred prophet against a vain, fearful man`,
              `show that Prufrock is at heart a deeply religious man`,
              `praise Prufrock's courage in the face of social disapproval`
            ],
            correctAnswer: 1,
            explanation: `The prophet died for speaking the truth; Prufrock's version adds a worry about baldness and ends with "I am no prophet." No execution follows, the poem shows no real devotion, and Prufrock's own conclusion is "I was afraid."`
          },
          {
            question: `By declaring "No! I am not Prince Hamlet, nor was meant to be," the speaker`,
            options: [
              `refuses any comparison with literature`,
              `claims that he is in fact far more decisive than Hamlet ever managed to be`,
              `insists that he is the hero of his own story`,
              `rejects the role of tragic hero and casts himself as a minor figure`
            ],
            correctAnswer: 3,
            explanation: `He immediately makes himself "an attendant lord" and almost "the Fool," secondary roles in the same play. He keeps using literature to describe himself, he is anything but decisive, and he denies, rather than claims, the central role.`
          },
          {
            question: `The epigraph from Dante's Inferno, spoken by a soul who talks only because he believes no listener will return to the world, most likely suggests that`,
            options: [
              `the poem is a confession made from a private hell`,
              `Prufrock has committed a crime and is hiding from justice`,
              `Eliot intended the poem for readers of Italian alone`,
              `Prufrock is a soldier who has died in battle`
            ],
            correctAnswer: 0,
            explanation: `Guido speaks freely only because he thinks his words will never be repeated, which frames Prufrock's monologue as a secret confession from a kind of hell. The poem charges Prufrock with no crime, its English monologue follows the Italian, and nothing places him in a war.`
          }
        ]
      }
    },
    {
      id: 'englitfi4-writing',
      type: 'text' as const,
      content: `
## Writing About Allusion

| Weak | Strong |
|---|---|
| *Eliot alludes to Hamlet and the Bible.* | *Eliot lines Prufrock up beside Hamlet, Lazarus and John the Baptist only to have him reject each role, so the allusions become a ladder of greatness that the speaker keeps climbing down.* |
| *Keats mentions Ruth from the Bible.* | *By imagining the song reaching Ruth "sick for home," Keats makes the immortal bird's listeners a line of exiles, and the speaker joins them.* |

### Common Misconceptions

- **"Explaining the source is the analysis."** Retelling the story of Lazarus is background. The analysis is what the comparison does to the speaker in this poem.
- **"An allusion always elevates."** Many allusions deflate. Ask whether the present lives up to the source.
- **"If I miss the allusion, I can't answer."** Exam questions give enough context. Use the three questions with whatever the passage tells you.
- **"Every capitalized name is an allusion."** A name is an allusion only when it points outside the work to something the reader is expected to know.

> 🔑 **AP Connection:** On Q1 and Q2, a well-used allusion can support Row C: explaining how a reference situates the passage in a broader literary or cultural tradition is one recognized route to the sophistication point. Keep it brief and tied to your line of reasoning; a paragraph of background on the Book of Ruth earns nothing.
`
    },
    {
      id: 'englitfi4-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A brief reference to a person, place, event or text outside the work`,
            answer: 'allusion',
            acceptableAnswers: ['an allusion']
          },
          {
            question: `A quotation placed at the head of a poem or chapter, like Prufrock's lines from Dante`,
            answer: 'epigraph',
            acceptableAnswers: ['an epigraph']
          },
          {
            question: `The comic effect of setting a petty modern situation beside a grand heroic source (two words, joined by a hyphen)`,
            answer: 'mock-heroic',
            acceptableAnswers: ['mock heroic', 'mock-epic', 'mock epic']
          }
        ],
        hint1: 'Not "illusion": the word comes from a Latin verb meaning "to play with."',
        hint2: 'Greek roots meaning "written upon."',
        hint3: 'The first word means to imitate in order to ridicule.',
        explanation: 'An allusion points outside the work, an epigraph is a quotation placed at the start, and mock-heroic writing deflates the present by comparing it with grand sources.'
      }
    }
  ]
}
