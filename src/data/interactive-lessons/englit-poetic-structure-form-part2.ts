export const englitPoeticStructureFormPart2Data = {
  topicSlug: 'englit-poetic-structure-form',
  sections: [
    {
      id: 'englitpo2-intro',
      type: 'text' as const,
      content: `
# 📐 Poetic Structure and Form

**Part 2 of 7 — Meter: Feet, Line Length and Scansion**

---

| Section |
|---------|
| 📖 Stress: The Raw Material of Meter |
| The Five Feet You Need |
| Naming Line Length |
| Scanning Four Famous Lines |
| When the Pattern Bends: Substitution |

> 🔑 **Key Concept:** Skill **3.C** asks you to explain the function of structure in a text, and in poetry structure begins with the line. **Meter** is a regular pattern of stressed and unstressed syllables within lines. Knowing the names lets you describe a rhythm precisely. What earns credit is explaining what the rhythm, and especially a break in it, does.
`
    },
    {
      id: 'englitpo2-feet',
      type: 'text' as const,
      content: `
## 📖 Stress: The Raw Material of Meter

Every English word of more than one syllable has a stressed syllable: be-**LIEVE**, **GAR**-den, un-der-**STAND**. In a sentence, important words (nouns, verbs, adjectives) usually take stress, and small words (the, a, of, and) usually do not. Meter organizes these natural stresses into a pattern.

Notation: **x** marks an unstressed syllable and **/** a stressed one. A **foot** is the basic unit of the pattern.

## The Five Feet You Need

| Foot | Pattern | Sounds like | Example word or phrase | Movement |
|---|---|---|---|---|
| **Iamb** (iambic) | x / | da-DUM | be-LIEVE, the SUN | Rising; closest to ordinary English speech |
| **Trochee** (trochaic) | / x | DUM-da | TI-ger, GAR-den | Falling; insistent, chant-like |
| **Anapest** (anapestic) | x x / | da-da-DUM | in-ter-VENE, on the FOLD | Rising; galloping, quick |
| **Dactyl** (dactylic) | / x x | DUM-da-da | MUR-mur-ing, HAP-pi-ly | Falling; rolling, sometimes mournful |
| **Spondee** (spondaic) | / / | DUM-DUM | HEART-BREAK, ROUGH WINDS | Heavy; slows the line; usually a substitute foot, not a whole meter |

**Rising** meters (iambic, anapestic) end each foot on a stress. **Falling** meters (trochaic, dactylic) begin each foot on a stress.

## Naming Line Length

| Feet per line | Name | Example meter |
|---|---|---|
| 3 | trimeter | iambic trimeter |
| 4 | tetrameter | trochaic tetrameter, anapestic tetrameter |
| 5 | pentameter | iambic pentameter (the sonnet's line, Shakespeare's verse) |
| 6 | hexameter | dactylic hexameter (Homer's line, imitated in English) |

A full name combines the two: **iambic pentameter** means five iambs per line, about ten syllables.

### How to Scan a Line

1. Read the line aloud naturally. Do not force a beat.
2. Mark the stressed syllable in each word of two or more syllables.
3. Decide on one-syllable words by importance: "SUN" is stressed, "the" is not.
4. Look for the dominant pattern, then divide the line into feet.
5. Note where the line departs from the pattern. That is usually what is worth writing about.
`
    },
    {
      id: 'englitpo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A line of iambic pentameter contains`,
            options: [
              `five feet, each an unstressed syllable then a stressed one`,
              `five syllables, each one carrying an equal stress`,
              `five trochees, each a stressed syllable then an unstressed one`,
              `five stressed syllables followed by five unstressed ones`
            ],
            correctAnswer: 0,
            explanation: `"Penta-" means five and an iamb is unstressed-stressed (da-DUM), so the line has five da-DUM feet, about ten syllables. Stressed-unstressed is a trochee, and meter alternates stresses rather than grouping them.`
          },
          {
            question: `Which word, spoken naturally, forms a dactyl?`,
            options: [
              `"tomorrow"`,
              `"murmuring"`,
              `"understand"`,
              `"forgive"`
            ],
            correctAnswer: 1,
            explanation: `"MUR-mur-ing" is stressed-unstressed-unstressed, a dactyl. "to-MOR-row" puts the stress in the middle, "un-der-STAND" is an anapest, and "for-GIVE" is an iamb.`
          }
        ]
      }
    },
    {
      id: 'englitpo2-scan',
      type: 'text' as const,
      content: `
## Scanning Four Famous Lines

### 1. Iambic pentameter

> Shall I compare thee to a summer's day?
>
> — William Shakespeare, Sonnet 18, 1609

| Foot | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Syllables | shall I | com-PARE | thee TO | a SUM | mer's DAY |

Ten syllables, five feet. Some readers stress "I" in the first foot; that flexibility is normal. A line does not have to be mechanically perfect to be iambic. The meter is the pattern the line keeps returning to.

### 2. Trochaic tetrameter

> Tiger, tiger, burning bright
> In the forests of the night,
>
> — William Blake, "The Tiger," *Songs of Experience*, 1794 (Blake spelled it "Tyger"; this edition modernizes)

| Foot | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Syllables | TI-ger | TI-ger | BURN-ing | BRIGHT |

Four stresses, but only seven syllables: the last foot is missing its unstressed syllable. Ending on a stress makes each line land hard. Combined with the falling trochees, the rhythm sounds like a chant, or a hammer. That suits a poem full of a blacksmith's tools ("What the hammer? what the chain?").

### 3. Anapestic tetrameter

> And his cohorts were gleaming in purple and gold;
>
> — Lord Byron, "The Destruction of Sennacherib," 1815

| Foot | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Syllables | and his CO | horts were GLEAM | ing in PUR | ple and GOLD |

Two light syllables before every stress create a galloping speed. The poem describes an army sweeping down on Jerusalem, and the meter supplies the hoofbeats.

### 4. Dactylic hexameter

> This is the forest primeval. The murmuring pines and the hemlocks,
>
> — Henry Wadsworth Longfellow, *Evangeline*, 1847

| Foot | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Syllables | THIS is the | FOR-est pri | ME-val. The | MUR-mur-ing | PINES and the | HEM-locks |

Five dactyls and a final two-syllable foot: the long, rolling line of Greek and Latin epic. Longfellow chose it for an epic of the Acadians' exile, and its falling, wave-like motion suits the poem's mood of loss.
`
    },
    {
      id: 'englitpo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Meter** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"TI-ger, TI-ger, BURN-ing BRIGHT" is mainly ___`,
            options: ['trochaic tetrameter', 'iambic tetrameter', 'anapestic trimeter', 'dactylic hexameter']
          },
          {
            label: `"and his CO / horts were GLEAM / ing in PUR / ple and GOLD" is ___`,
            options: ['anapestic tetrameter', 'dactylic tetrameter', 'iambic pentameter', 'trochaic tetrameter']
          },
          {
            label: `A line with five da-DUM feet is ___`,
            options: ['iambic pentameter', 'trochaic pentameter', 'iambic hexameter', 'anapestic pentameter']
          }
        ],
        correctAnswers: ['trochaic tetrameter', 'anapestic tetrameter', 'iambic pentameter'],
        hint1: 'Stressed-unstressed feet, four stresses.',
        hint2: 'Two light syllables, then a stress, four times.',
        hint3: 'Unstressed-stressed, five times.',
        explanation: 'Blake\'s line falls in four trochees (the last one shortened), Byron\'s gallops in four anapests, and five iambs make iambic pentameter.'
      }
    },
    {
      id: 'englitpo2-substitution',
      type: 'text' as const,
      content: `
## When the Pattern Bends: Substitution

Meter sets up an expectation, and the most meaningful moments come when a line breaks it. A **substitution** replaces the expected foot with a different one.

> Rough winds do shake the darling buds of May,
>
> — William Shakespeare, Sonnet 18, 1609

| Foot | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Expected (iamb) | x / | x / | x / | x / | x / |
| Actual | ROUGH WINDS | do SHAKE | the DAR | ling BUDS | of MAY |

The line opens with a **spondee**: "Rough" is too strong a word to leave unstressed. Two heavy stresses in a row make the line itself feel buffeted before it settles back into iambs. The roughness of the weather is in the rhythm.

| Common variation | Pattern | Typical effect (context decides) |
|---|---|---|
| **Trochaic inversion** at the start of an iambic line | / x instead of x / | A jolt of emphasis on the first word |
| **Spondee** | / / | Weight, slowness, force |
| **Pyrrhic** (two unstressed) | x x | Speed, lightness, then a stronger next stress |
| **Feminine ending** (extra unstressed syllable at line end) | ... x / x | A softer, falling close |
| **Catalexis** (a missing final syllable) | ... / | A clipped, emphatic ending, as in Blake |

### Common Misconceptions

- **"Every line must scan perfectly."** No real poem does. Meter is a norm that lines vary.
- **"A meter has a fixed emotional meaning."** Trochees are not always angry, and anapests are not always cheerful. Byron's galloping anapests describe a slaughter.
- **"Naming the meter is analysis."** "The poem is in iambic pentameter" earns nothing on its own. Explain what a regularity or a break does at a specific moment.

> 🔑 **AP Connection:** Section I questions rarely ask you to name a meter. They ask about the *effect* of rhythm, such as why a line slows or why an ending feels emphatic. In an essay, one precise sentence on a substitution at a key moment is worth more than a paragraph labeling feet.
`
    },
    {
      id: 'englitpo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The opening spondee of "Rough winds do shake the darling buds of May" primarily serves to`,
            options: [
              `slow the line with weight, enacting the gusts' force`,
              `quicken the line to suggest the speed of a summer day`,
              `signal that the sonnet is about to change its rhyme scheme`,
              `soften the image so the buds seem safe from all harm`
            ],
            correctAnswer: 0,
            explanation: `Two stressed syllables in a row give the line a heavy, buffeted start that matches "Rough winds." Stacked stresses slow rather than quicken a line, the rhyme scheme does not change, and the image threatens the buds rather than protecting them.`
          },
          {
            question: `In Blake's "Tiger, tiger, burning bright," the missing final unstressed syllable of each line chiefly creates`,
            options: [
              `a hesitant, trailing close`,
              `a hammering, emphatic close`,
              `a conversational, casual tone`,
              `a smooth link into the next line`
            ],
            correctAnswer: 1,
            explanation: `Ending on a stress ("BRIGHT," "NIGHT") makes each line land hard, like a hammer blow, which suits the poem's forge imagery. A trailing close needs an unstressed ending, the chant is far from casual, and the stressed end-stop separates rather than links the lines.`
          },
          {
            question: `A student writes, "Byron uses anapestic tetrameter." The best revision would`,
            options: [
              `replace the term with a simpler word such as "rhythm"`,
              `explain how the galloping meter conveys the army's onrush`,
              `add the number of syllables in every line of the poem`,
              `argue that anapests always express a cheerful mood`
            ],
            correctAnswer: 1,
            explanation: `Naming the meter is only a start; the analysis lies in connecting its speed to the charging army. A vaguer word, a syllable count, or a false rule about anapests would not add interpretation.`
          }
        ]
      }
    }
  ]
}
