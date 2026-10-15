export const englitPoeticStructureFormPart4Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo4-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 4 of 7 — Closed Forms at Work: Turns and Refrains**

---

| Section |
|---------|
| 📖 How a Sonnet Divides Its Argument |
| An Eight-and-Six Sonnet: Wordsworth |
| A Four-Part Sonnet: Sonnet 29 |
| Refrains at Work: Robinson's "The House on the Hill" |
| What Closed Forms Do |

> 🔑 **Key Concept:** A **closed form** repeats predictable patterns of line, stanza, rhythm and rhyme, and those patterns "develop relationships among ideas in the poem" (CED STR-1.U). Each pattern carries built-in expectations: where the argument will turn, which lines will return. Skill **3.C** asks what the structure does; with a closed form, ask how the poem uses, delays or breaks those expectations.
`
    },
    {
      id: 'englitpo4-sonnets',
      type: 'text' as const,
      content: `
## 📖 How a Sonnet Divides Its Argument

A sonnet has 14 lines, usually with five beats each. Its rhymes group those lines into parts, and the grouping shapes the argument: it tells the reader where a **turn** (a shift in argument or feeling, sometimes called the *volta*) is likely to come.

| | Grouped 8 + 6 | Grouped 4 + 4 + 4 + 2 |
|---|---|---|
| Parts | An **octave** (8 lines) bound by a few shared rhyme sounds, then a **sestet** (6 lines) | Three **quatrains** (4 lines each), then a rhymed **couplet** |
| Where the turn usually falls | Line 9, at the start of the sestet | Line 9, or held back to the couplet |
| Typical logic | Problem, then response; observation, then reflection | Three variations on an idea, then a summing-up or twist |

Your teacher may call these the Petrarchan and Shakespearean sonnets; the exam will not ask you to name a form, only to explain what its parts and turn do. Poetry Analysis I traced the narrowing quatrains of Sonnet 73. Here is one sonnet of each shape.

## An Eight-and-Six Sonnet: Wordsworth

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

**Octave (lines 1-8).** soon / powers / ours / boon / moon / hours / flowers / tune. Only two rhyme sounds for eight lines: the octave is tightly bound, a single complaint. "We" are so busy "Getting and spending" that Nature no longer moves us. The sea and winds are beautiful, yet "we are out of tune."

**The volta.** It arrives *inside* line 9: "It moves us not." Then a break (the dash) and an outburst: "Great God! I'd rather be / A Pagan." The turn is marked by a sudden change of syntax, from long descriptive clauses to a short blunt sentence and an exclamation. Wordsworth places the turn right where an eight-and-six sonnet leads us to expect it, but makes it erupt mid-line.

**Sestet (lines 9-14).** be / outworn / lea / forlorn / sea / horn: two new sounds alternate. The response: the speaker would rather hold an outdated pagan faith that sees gods in nature (Proteus, a shape-shifting sea god; Triton, who blows a conch-shell horn) than live with modern indifference.

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
            question: `The octave of Wordsworth's sonnet binds eight lines with only two rhyme sounds. This tight pattern most directly suits the octave's`,
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
            explanation: `"It moves us not." is followed by a dash and "Great God!", a break in syntax and tone right at line 9. The speaker stays in the first person, this sonnet's last six lines have no closing couplet, and the wish for pagan vision is in the conditional present, not a narrative of the past.`
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
## A Four-Part Sonnet: Sonnet 29

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
| Quatrain 1 | 1-4 | eyes / state / cries / fate | Despair: outcast, unheard ("deaf heaven," "bootless," meaning useless, cries) |
| Quatrain 2 | 5-8 | hope / possess'd / scope / least | Envy: wishing for other men's looks, friends, talent |
| Quatrain 3 | 9-12 | despising / state / arising / gate | The turn: "Haply" (by chance) he thinks of the beloved, and his mood rises like a lark |
| Couplet | 13-14 | brings / kings | The conclusion: love makes him richer than kings |

**Syntax and form together.** Lines 1-8 are a long string of subordinate clauses ("When ... I ... beweep," "Wishing," "Desiring"), as heavy as the speaker's mood. The turn comes at line 9 ("Yet"), exactly where the sonnet's grouping leads us to expect it, and the main movement of the poem lifts with the lark.

**The repeated rhyme word.** "State" appears three times: "my outcast state" (line 2), "my state ... sings hymns" (line 10), "change my state with kings" (line 14). The same word means misery, then a soaring condition, then a royal rank he scorns. The form lets one word carry the poem's whole change.

**Two-syllable rhymes at the turn.** "Despising / arising" are the poem's only rhymes that end on a light extra syllable. That soft extra beat gives these lines a lifting, unfinished sound at the moment the mood begins to rise.
`
    },
    {
      id: 'englitpo4-villanelle',
      type: 'text' as const,
      content: `
## Refrains at Work: Robinson's "The House on the Hill"

A **refrain** is a line that returns at set points in a poem. Robinson's poem is built on two of them. Its first and third lines, "They are all gone away" and "There is nothing more to say," take turns closing each three-line stanza and come together as the last two lines of the poem. Every line ends on one of only two rhyme sounds. (This closed form is traditionally called a villanelle.) Watch what the returns do to the meaning.

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
- **Short lines.** Robinson uses lines of three beats rather than the five-beat lines of most sonnets, so the poem sounds clipped and bare, like the "broken walls."

Two famous twentieth-century poems built the same way, still under copyright, are Dylan Thomas's "Do not go gentle into that good night" (1951) and Elizabeth Bishop's "One Art" (1976). In both, the refrains carry an emotion the speaker struggles to control, as in Robinson.
`
    },
    {
      id: 'englitpo4-input',
      type: 'input-boxes' as const,
      content: `
**Key Words** ✍️

Type one word for each description.
      `,
      exercise: {
        questions: [
          {
            question: `The point where a poem's argument or feeling shifts, as at "Yet" in line 9 of Sonnet 29`,
            answer: 'turn',
            acceptableAnswers: ['the turn', 'volta', 'shift']
          },
          {
            question: `A line that returns at set points in a poem, gathering new meaning each time, as in "The House on the Hill"`,
            answer: 'refrain',
            acceptableAnswers: ['a refrain', 'refrains']
          },
          {
            question: `The word Shakespeare repeats three times in Sonnet 29 to trace the speaker's change from misery to joy`,
            answer: 'state',
            acceptableAnswers: ['"state"']
          }
        ],
        hint1: 'The plain English word for where an argument changes direction.',
        hint2: 'Songs have one too: the part that comes back.',
        hint3: '"my outcast ___" ... "change my ___ with kings."',
        explanation: 'The turn is where the argument shifts, a refrain is a returning line whose meaning changes with its context, and "state" carries Sonnet 29 from an "outcast state" to a state the speaker would not trade with kings.'
      }
    },
    {
      id: 'englitpo4-forms',
      type: 'text' as const,
      content: `
## What Closed Forms Do

Every pattern in a closed form creates a relationship among the poem's ideas. The three poems in this part show the main ones.

| Pattern | Relationship it can create | Example |
|---|---|---|
| Lines grouped 8 + 6 | Problem and response; the second part answers, reverses or escapes the first | Wordsworth's complaint, then his wish |
| Three quatrains and a couplet | Variations building toward a summing-up, a twist or a collapse | Sonnet 29's despair and envy, then the lark, then the couplet |
| Few rhyme sounds | Confinement, obsession, a single sustained mood | Wordsworth's octave; Robinson's "-ay" and "-ill" |
| A repeated word | One word whose meaning changes as the poem moves | "state" in Sonnet 29 |
| Returning refrains | A thought that cannot be escaped; a claim the poem tests by repeating it | "There is nothing more to say" |

### Common Misconceptions

- **"Identifying the form is enough."** "This is a sonnet" is a label. "The volta erupts mid-line, so the speaker's restraint breaks at the very point the form expects a turn" is analysis.
- **"A sonnet's turn is always at line 9."** It is often there, but it can come early, late, or only in the couplet. Find where the argument actually shifts.
- **"Repeated refrains are filler."** The refrains change meaning as their context changes, and that change is the poem's argument.

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
