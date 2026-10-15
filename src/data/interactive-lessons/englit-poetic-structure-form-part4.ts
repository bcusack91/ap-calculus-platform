export const englitPoeticStructureFormPart4Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo4-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 4 of 7 — Fixed Forms: Two Sonnets and the Villanelle**

---

| Section |
|---------|
| 📖 Petrarchan vs. Shakespearean |
| The Petrarchan Sonnet: Wordsworth |
| The Shakespearean Sonnet: Sonnet 29 |
| The Villanelle: Robinson's "The House on the Hill" |
| Other Named Forms |

> 🔑 **Key Concept:** A **fixed form** prescribes the number of lines, the meter, the rhyme scheme, and sometimes repeated lines. Each form carries built-in expectations: where the argument will turn, which lines will return. Skill **3.C** asks what the structure does; with a fixed form, ask how the poem uses the form's expectations.
`
    },
    {
      id: 'englitpo4-sonnets',
      type: 'text' as const,
      content: `
## 📖 Petrarchan vs. Shakespearean

Both sonnet types have 14 lines, usually in iambic pentameter. They divide those lines differently, and the division shapes the argument.

| | Petrarchan (Italian) | Shakespearean (English) |
|---|---|---|
| Named for | Petrarch, 14th-century Italian poet | Shakespeare, whose 154 sonnets were published in 1609 |
| Divisions | **Octave** (8 lines) + **sestet** (6 lines) | Three **quatrains** (4 lines each) + a **couplet** |
| Rhyme scheme | ABBAABBA + CDECDE or CDCDCD (sestet varies) | ABAB CDCD EFEF GG |
| Where the turn (volta) usually falls | Line 9, start of the sestet | Line 9, or held back to the couplet |
| Typical logic | Problem, then response; observation, then reflection | Three variations on an idea, then a summing-up or twist |
| Rhyme demand | Needs four words on each octave sound, harder in English | New rhymes in each quatrain, easier in English |

Poetry Analysis I traced the narrowing quatrains of Sonnet 73. Here are one sonnet of each type.

## The Petrarchan Sonnet: Wordsworth

> The World is too much with us; late and soon,
> Getting and spending, we lay waste our powers;
> Little we see in Nature that is ours;
> We have given our hearts away, a sordid boon!
> This Sea that bares her bosom to the moon,
> The winds that will be howling at all hours
> And are up-gather'd now like sleeping flowers,
> For this, for everything, we are out of tune;
> It moves us not.—Great God! I'd rather be
> A Pagan suckled in a creed outworn,—
> So might I, standing on this pleasant lea,
> Have glimpses that would make me less forlorn;
> Have sight of Proteus rising from the sea;
> Or hear old Triton blow his wreathed horn.
>
> — William Wordsworth, "The world is too much with us," *Poems, in Two Volumes*, 1807 (text from Palgrave's *Golden Treasury*, 1861)

### A Worked Reading of the Form

**Octave (lines 1-8), ABBAABBA.** soon / powers / ours / boon / moon / hours / flowers / tune. Only two rhyme sounds for eight lines: the octave is tightly bound, a single complaint. "We" are so busy "Getting and spending" that Nature no longer moves us. The sea and winds are beautiful, yet "we are out of tune."

**The volta.** It arrives *inside* line 9: "It moves us not." Then a break (the dash) and an outburst: "Great God! I'd rather be / A Pagan." The turn is marked by a sudden change of syntax, from long descriptive clauses to a short blunt sentence and an exclamation. Wordsworth places the volta right where the Petrarchan form expects it, but makes it erupt mid-line.

**Sestet (lines 9-14), CDCDCD.** be / outworn / lea / forlorn / sea / horn. The response: the speaker would rather hold an outdated pagan faith that sees gods in nature (Proteus, a shape-shifting sea god; Triton, who blows a conch-shell horn) than live with modern indifference.

| Section | Function |
|---|---|
| Octave | Diagnoses a problem: modern people are cut off from Nature |
| Volta | Flat statement ("It moves us not") gives way to an outburst |
| Sestet | Imagines a solution, but only as a wish ("I'd rather be") |
`
    },
    {
      id: 'englitpo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The octave of Wordsworth's sonnet rhymes ABBAABBA. This tight scheme most directly suits the octave's`,
            options: [
              `single, sustained complaint about modern life`,
              `rapid shifts between several unrelated topics`,
              `debate between a pagan and a Christian voice`,
              `cheerful description of a calm seaside scene`
            ],
            correctAnswer: 0,
            explanation: `Two rhyme sounds bind eight lines into one unit, matching one continuous diagnosis: "we" have lost our connection to Nature. The octave stays on one topic, holds no debate, and its tone is critical rather than cheerful.`
          },
          {
            question: `The volta in Wordsworth's sonnet is marked chiefly by`,
            options: [
              `a sudden exclamation after a blunt, short sentence`,
              `a change from first person to third person`,
              `a final rhymed couplet that sums up the argument`,
              `a shift from the present to the distant past`
            ],
            correctAnswer: 0,
            explanation: `"It moves us not." is followed by a dash and "Great God!", a break in syntax and tone right at line 9. The speaker stays in the first person, a Petrarchan sestet has no closing couplet, and the wish for pagan vision is in the conditional present, not a narrative of the past.`
          },
          {
            question: `The allusions to Proteus and Triton function primarily to`,
            options: [
              `show the speaker's scholarly knowledge of Greek`,
              `picture nature alive with gods, as moderns cannot`,
              `warn readers against abandoning their Christian faith`,
              `suggest that the speaker is planning a sea voyage`
            ],
            correctAnswer: 1,
            explanation: `The sea gods represent a way of seeing nature as sacred and alive, which the speaker contrasts with modern indifference. They are not a display of learning, the speaker prefers the pagan vision rather than warning against it, and no voyage is planned.`
          }
        ]
      }
    },
    {
      id: 'englitpo4-sonnet29',
      type: 'text' as const,
      content: `
## The Shakespearean Sonnet: Sonnet 29

> When in disgrace with fortune and men's eyes
> I all alone beweep my outcast state,
> And trouble deaf heaven with my bootless cries,
> And look upon myself, and curse my fate,
> Wishing me like to one more rich in hope,
> Featur'd like him, like him with friends possess'd,
> Desiring this man's art, and that man's scope,
> With what I most enjoy contented least;
> Yet in these thoughts my self almost despising,
> Haply I think on thee, and then my state,
> Like to the lark at break of day arising
> From sullen earth, sings hymns at heaven's gate;
> For thy sweet love remember'd such wealth brings
> That then I scorn to change my state with kings.
>
> — William Shakespeare, Sonnet 29, 1609

### A Worked Reading of the Form

| Unit | Lines | Rhymes | What happens |
|---|---|---|---|
| Quatrain 1 | 1-4 | eyes / state / cries / fate (ABAB) | Despair: outcast, unheard ("deaf heaven," "bootless," meaning useless, cries) |
| Quatrain 2 | 5-8 | hope / possess'd / scope / least (CDCD) | Envy: wishing for other men's looks, friends, talent |
| Quatrain 3 | 9-12 | despising / state / arising / gate (EFEF) | The turn: "Haply" (by chance) he thinks of the beloved, and his mood rises like a lark |
| Couplet | 13-14 | brings / kings (GG) | The conclusion: love makes him richer than kings |

**Syntax and form together.** Lines 1-8 are a long string of subordinate clauses ("When ... I ... beweep," "Wishing," "Desiring"), as heavy as the speaker's mood. The volta comes at line 9 ("Yet"), exactly where both sonnet types expect it, and the main movement of the poem lifts with the lark.

**The repeated rhyme word.** "State" appears three times: "my outcast state" (line 2), "my state ... sings hymns" (line 10), "change my state with kings" (line 14). The same word means misery, then a soaring condition, then a royal rank he scorns. The form lets one word carry the poem's whole change.

**Feminine rhyme at the turn.** "Despising / arising" are the poem's only two-syllable rhymes. The extra syllable gives these lines a lifting, unfinished sound at the moment the mood begins to rise.
`
    },
    {
      id: 'englitpo4-villanelle',
      type: 'text' as const,
      content: `
## The Villanelle: Robinson's "The House on the Hill"

The **villanelle** has 19 lines: five tercets and a closing quatrain, on only two rhyme sounds. Two lines from the first stanza, the **refrains**, return in turn as the last line of each tercet and come together as the final two lines of the poem.

| Stanza | Rhyme | Refrain that closes it |
|---|---|---|
| Tercet 1 | A1 b A2 | (sets up both refrains: lines 1 and 3) |
| Tercet 2 | a b A1 | Refrain 1 |
| Tercet 3 | a b A2 | Refrain 2 |
| Tercet 4 | a b A1 | Refrain 1 |
| Tercet 5 | a b A2 | Refrain 2 |
| Quatrain | a b A1 A2 | Both refrains |

> They are all gone away,
> The House is shut and still,
> There is nothing more to say.
>
> Through broken walls and gray
> The winds blow bleak and shrill:
> They are all gone away.
>
> Nor is there one to-day
> To speak them good or ill:
> There is nothing more to say.
>
> Why is it then we stray
> Around that sunken sill?
> They are all gone away,
>
> And our poor fancy-play
> For them is wasted skill:
> There is nothing more to say.
>
> There is ruin and decay
> In the House on the Hill:
> They are all gone away,
> There is nothing more to say.
>
> — Edwin Arlington Robinson, "The House on the Hill," *The Children of the Night*, 1897

### How the Form Makes Meaning

- **Refrains as obsession.** The two refrains keep returning however the middle lines vary, like thoughts the speaker cannot stop thinking. Loss is not something one gets over; it recurs.
- **Irony in the second refrain.** "There is nothing more to say" is said four times. The form contradicts the claim: the speakers keep circling back, just as they "stray / Around that sunken sill."
- **Two rhyme sounds.** Every line ends on an "-ay" sound or an "-ill" sound. The narrow sound world matches the narrow, shut house.
- **Short lines.** Robinson uses three-stress lines rather than the more common pentameter, so the poem sounds clipped and bare, like the "broken walls."

Two famous twentieth-century villanelles, still under copyright, are Dylan Thomas's "Do not go gentle into that good night" (1951) and Elizabeth Bishop's "One Art" (1976). In both, the refrains carry an emotion the speaker struggles to control, as in Robinson.
`
    },
    {
      id: 'englitpo4-input',
      type: 'input-boxes' as const,
      content: `
**Name the Part** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `The first eight lines of a Petrarchan sonnet`,
            answer: 'octave',
            acceptableAnswers: ['the octave', 'octet']
          },
          {
            question: `A line that repeats at set points in a poem, as in a villanelle`,
            answer: 'refrain',
            acceptableAnswers: ['a refrain', 'refrains']
          },
          {
            question: `The two-line unit that ends a Shakespearean sonnet`,
            answer: 'couplet',
            acceptableAnswers: ['the couplet', 'heroic couplet', 'final couplet']
          }
        ],
        hint1: 'From the Latin for "eight."',
        hint2: 'Songs have one too: the part that comes back.',
        hint3: 'Two rhymed lines.',
        explanation: 'A Petrarchan sonnet divides into octave and sestet, a villanelle is built on two refrains, and a Shakespearean sonnet closes with a couplet.'
      }
    },
    {
      id: 'englitpo4-forms',
      type: 'text' as const,
      content: `
## Other Named Forms

| Form | Defining features | Example |
|---|---|---|
| **Ode** | A serious, elevated lyric, often addressing its subject | Shelley's "Ode to the West Wind" (1820), Keats's "To Autumn" (1820) |
| **Elegy** | A lament for the dead or for something lost, often moving from grief to consolation | Thomas Gray's "Elegy Written in a Country Churchyard" (1751) |
| **Ballad** | A narrative song, usually in ballad stanzas, often with dialogue and refrain | Coleridge's "Rime of the Ancyent Marinere" (1798) |
| **Dramatic monologue** | One character speaks to a silent listener | Browning's "My Last Duchess" (1842) |
| **Sestina** | Six stanzas of six lines that rotate the same six end-words, plus a three-line close | Developed by medieval Provençal poets |
| **Haiku** | A Japanese form; in English usually three short lines (often 5-7-5 syllables) built on a single image | Matsuo Bashō (17th century) |

### Common Misconceptions

- **"Identifying the form is enough."** "This is a Petrarchan sonnet" is a label. "The volta erupts mid-line, so the speaker's restraint breaks at the very point the form expects a turn" is analysis.
- **"A sonnet's turn is always at line 9."** It is often there, but it can come early, late, or only in the couplet. Find where the argument actually shifts.
- **"Repetition in a villanelle is filler."** The refrains change meaning as their context changes, and that change is the poem's argument.

> 🔑 **AP Connection:** When a Section I question asks about "the structure of the poem as a whole," map the parts first (octave/sestet, quatrains/couplet, refrains). Then ask how each part's job differs. Correct answers often describe a movement, such as "from despair to consolation."
`
    },
    {
      id: 'englitpo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In Sonnet 29, the three uses of the word "state" chiefly serve to`,
            options: [
              `trace the speaker's change from misery to contentment`,
              `show that the speaker is a politician seeking office`,
              `suggest that the speaker's mood never truly changes`,
              `emphasize that the beloved belongs to a royal family`
            ],
            correctAnswer: 0,
            explanation: `"My outcast state," the "state" that "sings hymns," and the refusal to "change my state with kings" mark the arc from despair to joy. The speaker is not a politician, his mood clearly lifts, and the beloved's rank is never mentioned.`
          },
          {
            question: `The lark simile in lines 11-12 functions mainly to`,
            options: [
              `enact the speaker's sudden lift of spirit after the turn`,
              `describe the morning when the speaker first met the beloved`,
              `contrast the speaker's sorrow with the indifference of nature`,
              `foreshadow the speaker's death in the poem's closing couplet`
            ],
            correctAnswer: 0,
            explanation: `The lark rises "From sullen earth" to sing at "heaven's gate," so the image carries the mood upward right after "Haply I think on thee." No first meeting is described, nature here shares rather than ignores the joy, and the couplet celebrates rather than foreshadows death.`
          },
          {
            question: `In "The House on the Hill," the repeated line "There is nothing more to say" is best described as`,
            options: [
              `ironic, since the poem keeps returning to the loss`,
              `literal, since the speaker refuses to describe the house in any detail`,
              `hopeful, since the speakers expect the departed to come back soon`,
              `angry, since the speakers blame the absent family for the ruin`
            ],
            correctAnswer: 0,
            explanation: `The claim is repeated four times as the speakers "stray / Around that sunken sill," so the form undercuts what the line says. The poem does describe the house, it offers no hope of return, and no blame is assigned.`
          }
        ]
      }
    }
  ]
}
