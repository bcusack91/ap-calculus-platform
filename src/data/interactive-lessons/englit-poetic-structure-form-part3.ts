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
| 📖 Kinds of Rhyme |
| Writing a Rhyme Scheme |
| The Stanza Shelf |
| Three Stanzas at Work: Pope, Shelley, Coleridge |
| What Rhyme Does |

> 🔑 **Key Concept:** Skill **3.C** asks you to explain the function of structure. Rhyme and stanza are the poem's architecture: they group lines, link words, and set up expectations a poet can satisfy or frustrate. As with meter, labeling is the first step, not the analysis.
`
    },
    {
      id: 'englitpo3-rhyme',
      type: 'text' as const,
      content: `
## 📖 Kinds of Rhyme

| Term | Definition | Example |
|---|---|---|
| **Exact (perfect) rhyme** | Final stressed vowel and everything after it match | day / May (Shakespeare, Sonnet 18) |
| **Slant (near) rhyme** | Sounds are close but not identical, usually matching only the vowel or only the consonants | light / weight (Dickinson); sure / power (Dickinson) |
| **Eye rhyme** | Words that look alike but sound different (today) | eye / symmetry (Blake, "The Tiger") |
| **Masculine rhyme** | Rhyme on a single final stressed syllable | bright / night |
| **Feminine rhyme** | Rhyme on a stressed syllable followed by an unstressed one | despising / arising (Shakespeare, Sonnet 29) |
| **End rhyme** | Rhyme at the ends of lines | The usual basis of a rhyme scheme |
| **Internal rhyme** | Rhyme within a line | Treated in the Sound Devices lesson |

Pronunciation changes over time. Some rhymes that look slant or "eye" to us may have been closer in the poet's day, so be careful before calling a 200-year-old rhyme deliberate dissonance. With Emily Dickinson, though, slant rhyme is clearly a habit and a choice:

> There's a certain slant of light,
> On winter afternoons,
> That oppresses, like the weight
> Of cathedral tunes.
>
> — Emily Dickinson, "There's a certain slant of light," *Poems*, 1890

"Light" and "weight" almost rhyme. The near miss suits a poem about a "Heavenly hurt" that leaves "no scar": something is slightly, unsettlingly off.

## Writing a Rhyme Scheme

Give the first end sound **A**, the next new sound **B**, and so on. Repeat a letter whenever a sound returns. Lines that do not rhyme with anything still get a letter.

| Poem | Rhyme scheme |
|---|---|
| Shakespearean sonnet (Sonnet 18) | ABAB CDCD EFEF GG |
| Couplets (Byron, Pope) | AA BB CC ... |
| Ballad stanza (Coleridge) | ABCB |
| Terza rima (Shelley) | ABA BCB CDC ... |
`
    },
    {
      id: 'englitpo3-stanzas',
      type: 'text' as const,
      content: `
## The Stanza Shelf

A **stanza** is a group of lines set off as a unit, often with a repeated pattern of meter and rhyme.

| Lines | Name | Common pattern | Typical uses |
|---|---|---|---|
| 2 | **Couplet**; **heroic couplet** = rhymed iambic pentameter pair | AA | Wit, balance, closure; the final couplet of a Shakespearean sonnet |
| 3 | **Tercet**; **terza rima** = interlocking tercets | ABA BCB | Forward momentum (Dante's *Divine Comedy*, Shelley) |
| 4 | **Quatrain**; **ballad stanza** = alternating tetrameter and trimeter | ABCB or ABAB | Narrative song, hymns, many lyrics |
| 6 | **Sestet** | varies | Second part of a Petrarchan sonnet |
| 7 | **Rhyme royal** | ABABBCC | Narrative poems (Chaucer) |
| 8 | **Octave**; **ottava rima** = ABABABCC | varies | First part of a Petrarchan sonnet; Byron's *Don Juan* |
| 9 | **Spenserian stanza** | ABABBCBCC, last line a hexameter | Spenser's *The Faerie Queene*, Keats |

You do not need to memorize every row. You do need to recognize couplets, tercets, quatrains and the ballad stanza, and to ask what a stanza groups together.
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
            question: `Dickinson's pairing of "light" and "weight" is best classified as`,
            options: [
              `exact rhyme`,
              `slant rhyme`,
              `eye rhyme`,
              `feminine rhyme`
            ],
            correctAnswer: 1,
            explanation: `The words share the final "t" but not the vowel, so the rhyme is close but imperfect. Exact rhyme needs matching vowels, eye rhyme depends on spelling, and both words are single stressed syllables, so the rhyme is not feminine.`
          },
          {
            question: `"Despising" and "arising" at the ends of two lines form a feminine rhyme because the rhyme`,
            options: [
              `falls on a stressed syllable followed by an unstressed one`,
              `connects words that are spelled alike but pronounced differently`,
              `occurs inside the line rather than at its very end`,
              `involves only the first consonant sounds of the words`
            ],
            correctAnswer: 0,
            explanation: `The rhyme matches "-SPI-sing" with "-RI-sing": a stressed syllable and then an unstressed one. The words sound alike rather than merely look alike, the rhyme sits at line ends, and matching first consonants would be alliteration.`
          },
          {
            question: `A poem in quatrains whose rhyme scheme is ABCB rhymes`,
            options: [
              `only its second and fourth lines`,
              `all four lines on the same sound`,
              `the first and third lines with each other`,
              `each line with the line just after it`
            ],
            correctAnswer: 0,
            explanation: `Only the two lines marked B share a sound; A and C are different, unrhymed endings. Four identical letters would mean one sound throughout, and each line rhyming with the next would be couplets.`
          }
        ]
      }
    },
    {
      id: 'englitpo3-examples',
      type: 'text' as const,
      content: `
## Three Stanzas at Work: Pope, Shelley, Coleridge

### The Heroic Couplet: Pope

> Good-nature and good sense must ever join;
> To err is human, to forgive, divine.
>
> — Alexander Pope, *An Essay on Criticism*, 1711

A **closed couplet** completes its thought in two rhymed lines. The second line is split by a pause (a **caesura**) into two balanced halves: "To err is human, / to forgive, divine." The structure of the couplet matches its claim. Two qualities "join" in one pair of lines, and human error is balanced against divine forgiveness. Balanced, self-contained couplets make Pope's verse sound like settled wisdom, which is why so many of his lines became proverbs.

### Terza Rima: Shelley

> O wild West Wind, thou breath of Autumn's being,
> Thou, from whose unseen presence the leaves dead
> Are driven, like ghosts from an enchanter fleeing,
>
> Yellow, and black, and pale, and hectic red,
> Pestilence-stricken multitudes: O thou,
> Who chariotest to their dark wintry bed
>
> — Percy Bysshe Shelley, "Ode to the West Wind," 1820

| Tercet | End words | Scheme |
|---|---|---|
| 1 | being / dead / fleeing | A B A |
| 2 | red / thou / bed | B C B |
| 3 (next) | low / until / blow | C D C |

The middle line of each tercet supplies the rhymes of the next. Each tercet reaches forward into the following one, so the poem never comes to rest, like leaves driven before the wind. Notice too that the sentence runs across the stanza break: the leaves are "driven" from one tercet into the next.

### The Ballad Stanza: Coleridge

> Water, water, every where
> And all the boards did shrink;
> Water, water, every where,
> Ne any drop to drink.
>
> — Samuel Taylor Coleridge, "The Rime of the Ancyent Marinere," *Lyrical Ballads*, 1798

Lines of four stresses alternate with lines of three, rhyming ABCB (shrink / drink). This is the stanza of traditional folk ballads, and Coleridge borrows its plainness for a tale of the supernatural. The short, repeated lines make the sailors' thirst feel like a chant they cannot escape. The rhyme lands on "drink," the one thing they cannot have.
`
    },
    {
      id: 'englitpo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Pattern** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Interlocking tercets rhyming ABA BCB CDC are called ___`,
            options: ['terza rima', 'ottava rima', 'rhyme royal', 'heroic couplets']
          },
          {
            label: `Pope's rhymed pairs of iambic pentameter lines are ___`,
            options: ['heroic couplets', 'ballad stanzas', 'terza rima', 'blank verse']
          },
          {
            label: `Coleridge's quatrains of alternating four- and three-stress lines, rhyming ABCB, are ___`,
            options: ['ballad stanzas', 'heroic couplets', 'Spenserian stanzas', 'terza rima']
          }
        ],
        correctAnswers: ['terza rima', 'heroic couplets', 'ballad stanzas'],
        hint1: 'The Italian name Dante used, "third rhyme."',
        hint2: 'Named for their use in heroic (epic) poetry in English.',
        hint3: 'The stanza of traditional folk song.',
        explanation: 'Shelley\'s interlocking tercets are terza rima, Pope writes heroic couplets, and Coleridge borrows the ballad stanza.'
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
| **Grouping** | A rhyme scheme binds lines into units of thought | Each tercet of terza rima reaching into the next |
| **Closure** | A rhymed couplet or a returning sound signals an ending | The final couplet of a Shakespearean sonnet |
| **Unease** | Slant rhyme or a missing rhyme frustrates the ear's expectation | Dickinson's "light / weight" |

### Common Misconceptions

- **"Rhyme scheme is the main thing to say about form."** Writing out ABAB CDCD earns nothing by itself. Ask what the grouping or a particular rhyme pair does.
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
            question: `The interlocking rhyme of terza rima in "Ode to the West Wind" most directly reinforces the poem's sense of`,
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
            explanation: `Coleridge borrowed the ballad stanza deliberately, and its simple, chant-like form gives the tale the feel of oral tradition. Shrink and drink rhyme exactly, nothing points to church singing, and short stanzas are the ballad norm, not a sign of an unfinished work.`
          }
        ]
      }
    }
  ]
}
