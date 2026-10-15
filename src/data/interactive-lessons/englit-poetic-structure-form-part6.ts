export const englitPoeticStructureFormPart6Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo6-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 6 of 7 — Writing About Form on the Exam**

---

| Section |
|---------|
| 📖 How the Exam Asks About Structure |
| Practice Poem: Keats's "When I have fears" |
| The Observation Ladder: From Label to Argument |
| An Annotated Model Paragraph |
| Form in the Thesis |

> 🔑 **Key Concept:** On the AP exam, form matters only as part of an interpretation. Section I (55 questions, 60 minutes, 45% of the score) asks what structural choices *do*. In Section II, the poetry analysis essay (Q1) rewards structure woven into a line of reasoning, never a separate "form paragraph" that lists features.
`
    },
    {
      id: 'englitpo6-stems',
      type: 'text' as const,
      content: `
## 📖 How the Exam Asks About Structure

| Question stem you may see | What it is really asking | First move |
|---|---|---|
| "The structure of the poem as a whole is best described as" | The movement of the argument from part to part | Label each unit's job: problem, example, turn, resolution |
| "The shift in line 9 (or 12) is from ... to ..." | Where and how the speaker's thinking turns | Find the volta; compare tone before and after |
| "The final couplet primarily serves to" | How the ending relates to everything before it | Does it sum up, reverse, or undercut? |
| "The repetition of 'When' at the start of lines 1, 5 and 9 serves to" | How a structural pattern organizes ideas | Ask what each repetition introduces |
| "Which of the following best describes the relationship between stanzas 1 and 2?" | Parallel, contrast, cause and effect, question and answer | Paraphrase each stanza in one line |

Correct answers in this category almost always describe a **movement** or **relationship**, such as "from anxious speculation to a stark acceptance." Wrong answers often describe a feature accurately but misstate its effect.
`
    },
    {
      id: 'englitpo6-keats',
      type: 'text' as const,
      content: `
## Practice Poem: Keats's "When I have fears"

> When I have fears that I may cease to be
> Before my pen has glean'd my teeming brain,
> Before high-piléd books, in charact'ry,
> Hold like rich garners the full-ripen'd grain;
> When I behold, upon the night's starr'd face,
> Huge cloudy symbols of a high romance,
> And think that I may never live to trace
> Their shadows, with the magic hand of chance;
> And when I feel, fair Creature of an hour!
> That I shall never look upon thee more,
> Never have relish in the fairy power
> Of unreflecting love—then on the shore
> Of the wide world I stand alone, and think,
> Till Love and Fame to nothingness do sink.
>
> — John Keats, "When I have fears that I may cease to be," written 1818, published 1848 (text from Palgrave's *Golden Treasury*, 1861)

**Glossary:** *glean'd*: gathered, as grain left after harvest; *charact'ry*: written characters, print; *garners*: granaries.

### Mapping the Form

| Unit | Rhyme | Opening word | Fear |
|---|---|---|---|
| Quatrain 1 (1-4) | be / brain / charact'ry / grain | "When" | Dying before writing all his poems; harvest metaphor (pen gleaning the brain, books as granaries) |
| Quatrain 2 (5-8) | face / romance / trace / chance | "When" | Dying before capturing the grand visions he sees in the night sky |
| Quatrain 3 (9-12) | hour / more / power / shore | "And when" | Losing a beloved, the "fair Creature of an hour" |
| Couplet (13-14) | think / sink | (no new clause) | All ambitions sink to "nothingness" |

**The key structural fact.** The whole poem is one sentence. Three "When" clauses, one per quatrain, pile up fears; the main clause does not arrive until the dash in **line 12**: "then on the shore / Of the wide world I stand alone, and think." The sonnet's grouping into three quatrains and a couplet leads us to expect a turn at line 9 and a separate closing couplet. Keats delays the turn to the middle of line 12 and runs the sentence straight across the boundary into the couplet. The couplet does not stand apart to resolve the poem; it completes the sinking.
`
    },
    {
      id: 'englitpo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The repetition of "When" at the beginning of each quatrain primarily serves to`,
            options: [
              `separate three unrelated memories from the speaker's youth`,
              `pile up fears before the main clause arrives`,
              `signal that each quatrain will end with a moment of hope`,
              `mark a change of speaker at the start of every quatrain`
            ],
            correctAnswer: 1,
            explanation: `Each "When" opens another subordinate clause of fear, and the sentence's main clause is withheld until line 12, so dread accumulates. The fears are related, not memories; no quatrain ends in hope; and the speaker never changes.`
          },
          {
            question: `The shift that occurs in line 12 is best described as a movement from`,
            options: [
              `listing fears to confronting them in isolation`,
              `celebrating fame to lamenting a lost love`,
              `addressing the reader to addressing the stars`,
              `present-tense reflection to a story of the past`
            ],
            correctAnswer: 0,
            explanation: `After three "When" clauses of fear, the dash brings the main clause: the speaker stands "alone" on the shore and thinks until ambition sinks. The poem never celebrates fame, the beloved (not the stars) is addressed, and the tense stays present.`
          },
          {
            question: `Unlike the closing couplet of many sonnets, Keats's final couplet is distinctive chiefly because it`,
            options: [
              `continues the sentence begun in line 1 rather than standing apart`,
              `abandons the poem's steady beat for a shorter, freer line`,
              `introduces a new rhyme sound not found elsewhere`,
              `reverses the poem's argument with a hopeful twist`
            ],
            correctAnswer: 0,
            explanation: `The couplet is the end of the poem's single sentence, so it completes the turn rather than delivering a separate summary. It keeps the poem's five-beat line, a closing couplet normally brings a new rhyme sound, and its "nothingness" offers no hopeful reversal.`
          }
        ]
      }
    },
    {
      id: 'englitpo6-ladder',
      type: 'text' as const,
      content: `
## The Observation Ladder: From Label to Argument

| Rung | Example on Keats | Value on the exam |
|---|---|---|
| 1. **Label** | "The poem is a Shakespearean sonnet." | Nothing yet |
| 2. **Description** | "The poem is one sentence whose main clause comes in line 12." | Accurate, but not interpretive |
| 3. **Function** | "Delaying the main clause lets fears pile up before the speaker can act or conclude." | Commentary begins |
| 4. **Interpretation** | "By withholding the turn until line 12 and running it into the couplet, Keats denies the sonnet its usual resolution, so the poem enacts a mind overwhelmed until even 'Love and Fame' sink." | Commentary that serves a line of reasoning (Row B) |

Climb every rung, quickly. Skipping straight to interpretation without describing the feature leaves the reader unsure what you noticed. Stopping at rung 2 leaves your evidence unexplained.

### Three Moves That Connect Form to Meaning

1. **Expectation and departure.** Name what the form leads a reader to expect, then show where the poem departs and why.
2. **Form mirrors content.** Show a structure enacting what the words say (the sinking sentence, the circling refrain, the interlocking rhymes).
3. **Form against content.** Show a structure in tension with what the words say (a calm, regular rhythm describing horror). Tensions like this are often where Row C sophistication lives.
`
    },
    {
      id: 'englitpo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Rung?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"The poem is a sonnet that ends with a rhymed couplet." This sentence is ___`,
            options: ['a label or description', 'a function', 'an interpretation', 'a thesis']
          },
          {
            label: `"Each 'When' clause adds another fear before any resolution can come." This sentence explains a ___`,
            options: ['function', 'label', 'summary', 'context']
          },
          {
            label: `"Keats withholds the volta so long that the sonnet's promised resolution collapses into 'nothingness.'" This sentence is ___`,
            options: ['an interpretation', 'a label', 'a description', 'a summary']
          }
        ],
        correctAnswers: ['a label or description', 'function', 'an interpretation'],
        hint1: 'It reports a fact without saying what the fact does.',
        hint2: 'It says what the repetition does, but not yet what it means for the whole poem.',
        hint3: 'It links a structural choice to the poem\'s overall meaning.',
        explanation: 'Naming the form only describes; saying what the repeated "When" does is function; and tying the delayed turn to the poem\'s collapse into "nothingness" is interpretation.'
      }
    },
    {
      id: 'englitpo6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Paragraph

*Prompt (practice, in the AP format): analyze how Keats uses literary elements and techniques to convey the speaker's complex response to the possibility of an early death.*

> **(1)** Keats builds the sonnet as a single sentence that cannot reach its conclusion, so the reader feels the speaker's fears accumulate faster than he can master them. **(2)** Each quatrain opens with "When," and each "When" adds a new loss: unwritten books, unrecorded visions of "a high romance," and a "fair Creature of an hour." **(3)** Because these are subordinate clauses, the sentence keeps postponing its main verb; the speaker, like the grammar, is suspended in dread. **(4)** The sonnet's four-part shape leads a reader to expect a turn at line 9 and a couplet that resolves the argument, but Keats delays the turn until the dash in line 12. **(5)** When it finally comes, "then on the shore / Of the wide world I stand alone," the main clause offers no answer, only isolation. **(6)** The sentence then runs straight into the couplet, where "Love and Fame to nothingness do sink," so the place a sonnet usually reserves for resolution becomes the place where everything the speaker desires goes under. **(7)** The structure thus makes the poem's response complex: the speaker does not defeat his fear, yet by standing and thinking he reaches a stark calm in which ambition no longer matters.

| Sentence | Job | Rubric link |
|---|---|---|
| (1) | Claim about structure *and* meaning | Line of reasoning (Row B) |
| (2) | Evidence: the repeated "When" and the three fears | Row B: specific evidence |
| (3) | Commentary: grammar enacts suspension | Row B: explains how |
| (4)-(5) | Expectation and departure: the delayed volta | Row B, and complexity |
| (6) | Form mirrors content: the couplet sinks | Row B commentary |
| (7) | Names the complexity: fear and calm together | Row C opportunity, if sustained across the essay |

## Form in the Thesis

A strong Q1 thesis names a structural choice alongside other techniques, in service of one interpretation:

> "Through a single sentence that delays its turn until the twelfth line, and through images of harvest and starlight that the speaker fears he will never gather, Keats portrays a mind that moves from frantic ambition to a stark, solitary calm."

> 🔑 **AP Connection:** Avoid organizing an essay by device ("Paragraph 1: form; Paragraph 2: imagery"). Organize by stages of your interpretation, and bring in form wherever it supports a stage.
`
    },
    {
      id: 'englitpo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Writing Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which sentence about Keats's sonnet would add the most to an essay's commentary?`,
            options: [
              `"The poem follows the usual rhyme pattern of an English sonnet."`,
              `"Keats wrote this sonnet in 1818, three years before his death."`,
              `"Withholding the main clause leaves the speaker suspended in dread."`,
              `"The poem has fourteen lines, and each line has five beats."`
            ],
            correctAnswer: 2,
            explanation: `Only this sentence explains what a structural feature does for meaning. The rhyme pattern and line count are labels, and the biographical date is context that still needs to be tied to the text.`
          },
          {
            question: `A student's essay has one paragraph on "form," one on "imagery" and one on "diction." The best advice is to`,
            options: [
              `add a fourth paragraph on sound devices`,
              `reorganize by stages of the interpretation`,
              `remove the form paragraph entirely`,
              `begin each paragraph with a definition`
            ],
            correctAnswer: 1,
            explanation: `Device-by-device organization tends to list features; paragraphs built on stages of an argument use any device that serves each stage. Another device paragraph or definitions would deepen the list, and structure should be used, not removed.`
          }
        ]
      }
    }
  ]
}
