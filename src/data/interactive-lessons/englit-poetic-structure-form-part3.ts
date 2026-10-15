export const englitPoeticStructureFormPart3Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo3-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 3 of 7 — Rhyme and Stanza Patterns**

---

| Section |
|---------|
| 📖 Exact and Slant Rhyme |
| How Rhyme Groups Lines |
| Stanzas as Units of Thought |
| Three Stanzas at Work: Pope, Shelley, Coleridge |
| What Rhyme Does |

> 🔑 **Key Concept:** Skill **3.C** asks you to explain the function of structure. Rhyme and stanza are the poem's architecture: they group lines, link words, and set up expectations a poet can satisfy or frustrate. The CED puts it this way: patterns of lines, stanzas and rhyme "develop relationships among ideas in the poem" (STR-1.U), and "the arrangement of lines and stanzas contributes to the development and relationship of ideas" (STR-1.E).
`
    },
    {
      id: 'englitpo3-rhyme',
      type: 'text' as const,
      content: `
## 📖 Exact and Slant Rhyme

| Term | Definition | Example |
|---|---|---|
| **Exact (perfect) rhyme** | Final stressed vowel and everything after it match | day / May (Shakespeare, Sonnet 18) |
| **Slant (near) rhyme** | Sounds are close but not identical, usually matching only the vowel or only the consonants | light / weight (Dickinson); sure / power (Dickinson) |
| **End rhyme** | Rhyme at the ends of lines | The rhymes that group lines into units |
| **Internal rhyme** | Rhyme within a line | Treated in the Sound Devices lesson |

An exact rhyme satisfies the ear; a slant rhyme almost does, and the near miss can be part of the meaning. Pronunciation changes over time, though. Some pairs that sound imperfect to us (Blake's "eye / symmetry") may have been closer in the poet's day, so be careful before calling a 200-year-old rhyme deliberate dissonance. With Emily Dickinson, slant rhyme is clearly a habit and a choice:

> There's a certain slant of light,
> On winter afternoons,
> That oppresses, like the weight
> Of cathedral tunes.
>
> — Emily Dickinson, "There's a certain slant of light," *Poems*, 1890

"Light" and "weight" almost rhyme. The near miss suits a poem about a "Heavenly hurt" that leaves "no scar": something is slightly, unsettlingly off.

## How Rhyme Groups Lines

Rhyme is a link. Two lines that end on the same sound are heard as belonging together, and a returning sound tells the ear that a unit is complete. Look again at Dickinson's stanza. Lines 1 and 3 are joined by the near miss "light / weight"; lines 2 and 4 by the exact rhyme "afternoons / tunes." The uneasy pair sits inside the stanza, and the firm rhyme closes it. The stanza ends in a satisfying chime even as its imagery stays troubled.

| How the rhymes are arranged | What it tends to do (context decides) |
|---|---|
| Lines rhymed in pairs, one pair after another | Each pair completes a small thought; quick closure, balance, wit |
| Alternating rhymes within a stanza | Weaves the lines together; the stanza closes when the last sound returns |
| A rhyme from one stanza carried into the next | Links stanzas and pushes the poem forward |
| A sound that never finds its partner | Leaves something unresolved |

The exam will not ask you to label a poem's rhyme scheme; it asks what the grouping does or what a particular rhyme pair suggests.
`
    },
    {
      id: 'englitpo3-stanzas',
      type: 'text' as const,
      content: `
## Stanzas as Units of Thought

A **stanza** is a group of lines set off by white space, often repeating a pattern of rhythm and rhyme. Plain counting words are enough to locate one: a **couplet** is two lines, a **tercet** three, a **quatrain** four. What matters is what each stanza groups together and how stanzas relate (CED STR-1.D: "Line and stanza breaks contribute to the development and relationship of ideas in a poem").

| Question to ask | What to look for |
|---|---|
| What does this stanza hold together? | One image, one step of an argument, one moment of a story |
| How does it relate to the next stanza? | Parallel, contrast, cause and effect, question and answer, a shift in time |
| What does the white space do? | A pause, a silence, a jump in time or place |
| Does a sentence run across the stanza break? | Tension between the unit the stanza marks and the thought that will not stop |
| Does the last stanza break the pattern? | A shorter stanza, a missing rhyme or an extra line often signals an ending or a turn |
`
    },
    {
      id: 'englitpo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Dickinson pairs "light" with "weight," a near rhyme rather than an exact one. The near miss most directly contributes to`,
            options: [
              `a firm sense that the stanza's thought is settled`,
              `the feeling that something is slightly, unsettlingly off`,
              `a cheerful, singsong sound suited to a winter holiday`,
              `a clear signal that a second speaker has begun talking`
            ],
            correctAnswer: 1,
            explanation: `The words share the final "t" but not the vowel, so the ear expects a rhyme and is denied it, which suits a "Heavenly hurt" that leaves "no scar." A near miss unsettles rather than settles, the oppressive "weight" and "cathedral tunes" are not cheerful, and there is only one speaker.`
          },
          {
            question: `In Dickinson's stanza, the exact rhyme "afternoons / tunes" falls on the second and fourth lines. Placing the firm rhyme last chiefly`,
            options: [
              `closes the stanza as one unit even though its mood stays uneasy`,
              `shows that Dickinson could not find an exact rhyme for "light"`,
              `breaks the stanza into two unrelated halves`,
              `speeds the reader past the stanza's imagery`
            ],
            correctAnswer: 0,
            explanation: `The returning sound on the last line tells the ear the stanza is complete, while the slant pair inside it keeps the feeling troubled. Dickinson's near rhymes are deliberate, the alternating rhymes weave the four lines together rather than splitting them, and a closing chime slows rather than hurries the reader.`
          },
          {
            question: `When a sentence runs across a stanza break, the most useful thing to ask is how the break`,
            options: [
              `shows that the poet made a careless error in arranging the poem's stanzas`,
              `separates two ideas that have no connection to each other`,
              `creates tension between the stanza's unit and the ongoing thought`,
              `turns the poem's sentences into a list of separate images`
            ],
            correctAnswer: 2,
            explanation: `The white space marks a unit, but the sentence refuses to stop there, and that pull between pause and continuation is worth interpreting. A run-on across stanzas is a deliberate choice rather than an error, it links ideas rather than separating unconnected ones, and it keeps a sentence whole rather than breaking it into a list.`
          }
        ]
      }
    },
    {
      id: 'englitpo3-examples',
      type: 'text' as const,
      content: `
## Three Stanzas at Work: Pope, Shelley, Coleridge

### The Closed Couplet: Pope

> Good-nature and good sense must ever join;
> To err is human, to forgive, divine.
>
> — Alexander Pope, *An Essay on Criticism*, 1711

A **closed couplet** completes its thought in two rhymed lines. The second line is split by a pause (a **caesura**) into two balanced halves: "To err is human, / to forgive, divine." The structure of the couplet matches its claim. Two qualities "join" in one pair of lines, and human error is balanced against divine forgiveness. Balanced, self-contained couplets make Pope's verse sound like settled wisdom, which is why so many of his lines became proverbs.

### Interlocking Tercets: Shelley

> O wild West Wind, thou breath of Autumn's being,
> Thou, from whose unseen presence the leaves dead
> Are driven, like ghosts from an enchanter fleeing,
>
> Yellow, and black, and pale, and hectic red,
> Pestilence-stricken multitudes: O thou,
> Who chariotest to their dark wintry bed
>
> — Percy Bysshe Shelley, "Ode to the West Wind," 1820

| Tercet | End words | What carries forward |
|---|---|---|
| 1 | being / dead / fleeing | "dead" waits for its partner in the next tercet |
| 2 | red / thou / bed | "red / bed" answers "dead"; "thou" waits in turn |
| 3 (next) | low / until / blow | "low / blow" answers "thou"; "until" waits in turn |

The middle line of each tercet supplies the rhymes of the next. Each tercet reaches forward into the following one, so the poem never comes to rest, like leaves driven before the wind. Notice too that the sentence runs across the stanza break: the leaves are "driven" from one tercet into the next.

### A Folk-Song Quatrain: Coleridge

> Water, water, every where
> And all the boards did shrink;
> Water, water, every where,
> Ne any drop to drink.
>
> — Samuel Taylor Coleridge, "The Rime of the Ancyent Marinere," *Lyrical Ballads*, 1798

Lines of four stresses alternate with lines of three, and only the second and fourth lines rhyme (shrink / drink). This is the stanza of traditional folk ballads, and Coleridge borrows its plainness for a tale of the supernatural. The short, repeated lines make the sailors' thirst feel like a chant they cannot escape. The rhyme lands on "drink," the one thing they cannot have.
`
    },
    {
      id: 'englitpo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Does the Pattern Do?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Pope's couplets, each finishing its thought in two rhymed lines, make his claims sound ___`,
            options: ['settled and proverbial', 'restless and unfinished', 'hesitant and broken', 'casual and chatty']
          },
          {
            label: `Because Shelley's sentence runs across the break between tercets, the leaves seem ___`,
            options: ['driven from one stanza into the next', 'frozen in place on the page', 'gathered safely into one stanza', 'cut off from the wind entirely']
          },
          {
            label: `In Coleridge's stanza, placing the rhyme on "drink" stresses ___`,
            options: ['the one thing the sailors cannot have', 'how calm the water has become', 'the speed of the ship at sea', 'the sailors\' relief at finding land']
          }
        ],
        correctAnswers: ['settled and proverbial', 'driven from one stanza into the next', 'the one thing the sailors cannot have'],
        hint1: 'A thought that closes neatly with a rhyme sounds finished.',
        hint2: 'Where does the sentence go when the stanza ends?',
        hint3: 'The rhyme position is the most prominent spot in the stanza.',
        explanation: 'Pope\'s closed couplets sound like settled wisdom, Shelley\'s sentence carries the "driven" leaves across the stanza break, and Coleridge\'s rhyme lands on the water the sailors cannot drink.'
      }
    },
    {
      id: 'englitpo3-function',
      type: 'text' as const,
      content: `
## What Rhyme Does

| Function | How it works | Example |
|---|---|---|
| **Emphasis** | The rhyme position is the most prominent spot in a line | "drink," the word the thirsty sailors cannot act on |
| **Linking meaning** | Rhyme pairs can echo, oppose or comment on each other | "join" and "divine": human and divine joined by sound |
| **Grouping** | A pattern of rhymes binds lines into units of thought | Each of Shelley's tercets reaching into the next |
| **Closure** | A rhymed couplet or a returning sound signals an ending | The final rhymed couplet of many sonnets |
| **Unease** | Slant rhyme or a missing rhyme frustrates the ear's expectation | Dickinson's "light / weight" |

### Common Misconceptions

- **"Describing the rhyme pattern is the main thing to say about form."** Reporting which lines rhyme earns nothing by itself. Ask what the grouping or a particular rhyme pair does.
- **"Slant rhyme means the poet failed to find a rhyme."** For poets like Dickinson it is a deliberate effect.
- **"A stanza is the same as a paragraph."** A stanza is often a unit of thought, but sentences can run across stanza breaks, as in Shelley, and that tension is itself worth noticing.

> 🔑 **AP Connection:** Multiple-choice questions often ask about a rhyme pair ("the rhyme of 'X' and 'Y' serves to") or a stanza break ("the shift between the second and third stanzas"). Look at the two words together: do they agree, clash, or reveal an irony?
`
    },
    {
      id: 'englitpo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The interlocking rhymes of Shelley's tercets in "Ode to the West Wind" most directly reinforce the poem's sense of`,
            options: [
              `restless, unbroken forward motion`,
              `calm stillness after a passing storm`,
              `a debate between two opposed voices`,
              `the speaker's slow recovery of hope`
            ],
            correctAnswer: 0,
            explanation: `Each tercet's middle rhyme carries into the next, so the stanzas chain forward without rest, like leaves "driven" by the wind. The opening describes violent motion, not calm, there is only one voice, and nothing yet suggests recovery.`
          },
          {
            question: `In Pope's line "To err is human, to forgive, divine," the balanced halves chiefly serve to`,
            options: [
              `weigh our failings against heaven's mercy`,
              `suggest that the speaker has never made an error`,
              `mock the reader's belief in a divine order`,
              `show that erring and forgiving are the same act`
            ],
            correctAnswer: 0,
            explanation: `The caesura divides the line into matched halves, so human error is weighed against the divine capacity to forgive. The line claims error is universal, it is not mocking, and the antithesis distinguishes the two acts rather than equating them.`
          },
          {
            question: `Which statement about Coleridge's stanza is most defensible?`,
            options: [
              `Its plain folk form makes the eerie tale sound like an old song.`,
              `Its rhyme scheme shows that Coleridge could not find exact rhymes.`,
              `Its form proves the poem was composed to be sung in church.`,
              `Its shortness indicates that the poem is a fragment left unfinished.`
            ],
            correctAnswer: 0,
            explanation: `Coleridge borrowed the stanza of folk ballads deliberately, and its simple, chant-like form gives the tale the feel of oral tradition. Shrink and drink rhyme exactly, nothing points to church singing, and short stanzas are the ballad norm, not a sign of an unfinished work.`
          }
        ]
      }
    }
  ]
}
