import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Complex Poetic Analysis (AP English Literature & Composition).
 * Registry key / DB Topic.slug: 'englit-complex-poetic-analysis'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * close reading / worked applications → Exit Quiz. Concept-forward (non-math topic), so
 * checks favor multiple-choice + dropdown, with a few short-answer input-boxes (scansion
 * counts, term recall, rhyme-scheme letters). Every poem excerpt quoted is public domain.
 * LaTeX uses DOUBLED backslashes (template-literal strings). Scansion marks use ˘ (unstressed)
 * and ´ (stressed) Unicode glyphs to render reliably in markdown.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa1-intro',
        type: 'text' as const,
        content: `# 🖋️ Complex Poetic Analysis

**Part 1 of 7 — From Paraphrase to Interpretation**

---

### Topics in This Part

| Section |
|---------|
| What "Analysis" Actually Means |
| The Three Levels of Reading a Poem |
| Denotation, Connotation & the Loaded Word |
| Building a Defensible Claim |

> 🔑 **Key Concept:** Analysis is not summary. A summary tells what a poem *says*; analysis explains **how** the poem makes meaning and **why** those choices matter. The AP Literature poetry essay (and the harder multiple-choice questions) reward the move from *what happens* to *how the language produces an effect*.`,
      },
      {
        id: 'cpa1-three-levels',
        type: 'text' as const,
        content: `## The Three Levels of Reading

Skilled readers pass through three levels, in order. Skipping a level is the most common cause of a misreading.

| Level | Question it answers | Example move |
|-------|--------------------|--------------|
| **1. Literal (paraphrase)** | What is literally happening, line by line? | "The speaker is looking at a stopped clock." |
| **2. Inferential (connotation)** | What is implied — tone, attitude, situation? | "The stopped clock suggests grief has frozen time." |
| **3. Interpretive (claim)** | What does the poem *mean*, and how does form prove it? | "The poem uses a broken meter to enact the speaker's broken sense of time." |

> 💡 **You must earn level 3.** A claim about meaning is only persuasive if it is grounded in level-1 accuracy. If you misread the literal situation, every "deep" reading built on top of it collapses. Always paraphrase first — even silently — before you interpret.`,
      },
      {
        id: 'cpa1-q-levels',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of the following statements is *analysis* rather than *summary*?',
              options: [
                'The harsh consonants in "cracked black bark" slow the line and mimic the roughness the speaker describes.',
                'The poem is about a tree in winter.',
                'In the second stanza, the speaker walks past the tree.',
                'The poem has four stanzas and ends with a question.',
              ],
              correctAnswer: 0,
              explanation: 'Only the first option connects a specific technique (clustered hard consonants) to an effect (slowing, roughness) and to meaning. The others merely restate content or describe structure without explaining its effect.',
            },
            {
              question: 'A reader claims a poem is "about hope" but has misidentified the speaker as cheerful when the diction is actually bitter. Which level of reading failed?',
              options: [
                'Level 1 (literal) — the situation/tone was misread, so the interpretation is unsupported',
                'Level 3 (interpretive) — the claim was too ambitious',
                'No level failed; "hope" is always a valid reading',
                'Level 2 only, because tone is purely subjective',
              ],
              correctAnswer: 0,
              explanation: 'A wrong interpretation that rests on a misread tone is a level-1/level-2 accuracy failure. The fix is to re-paraphrase and re-check the diction before claiming meaning. Tone is inferred from evidence, not "purely subjective."',
            },
          ],
        },
      },
      {
        id: 'cpa1-connotation',
        type: 'text' as const,
        content: `## Denotation vs. Connotation

- **Denotation** = a word's literal dictionary definition.
- **Connotation** = the emotional, cultural, and associative baggage a word carries.

Two words can share a denotation but pull in opposite directions:

| Pair | Shared denotation | Connotation difference |
|------|-------------------|------------------------|
| *childlike* vs. *childish* | having qualities of a child | innocent/wonder vs. immature/petulant |
| *slender* vs. *scrawny* | thin | graceful vs. unhealthy |
| *home* vs. *house* | dwelling | warmth/belonging vs. mere structure |

> ⚠️ **The loaded word is where meaning hides.** When a poet had many synonyms available and chose *this* one, the connotation is a deliberate signal. Ask: *Why this word and not its neighbor?* That question alone generates most strong thesis ideas.`,
      },
      {
        id: 'cpa1-dd-connotation',
        type: 'dropdown-select' as const,
        content: `**Connotation Sort** 🔽

For each pair, choose the word with the **more negative** connotation.`,
        exercise: {
          dropdowns: [
            { label: 'Describing a leader:', options: ['firm', 'rigid'] },
            { label: 'Describing a crowd:', options: ['gathering', 'mob'] },
            { label: 'Describing a smell:', options: ['aroma', 'odor'] },
            { label: 'Describing curiosity:', options: ['inquisitive', 'nosy'] },
          ],
          correctAnswers: ['rigid', 'mob', 'odor', 'nosy'],
          hint1: 'Both words in each pair share a denotation; you want the one with the harsher emotional pull.',
          hint2: '"Firm" praises; "rigid" criticizes inflexibility. "Aroma" is pleasant; "odor" is neutral-to-bad.',
          hint3: '"Mob" implies disorder/violence vs. neutral "gathering"; "nosy" implies intrusion vs. admiring "inquisitive."',
          explanation: 'Rigid, mob, odor, and nosy all carry negative associations their partners lack. Identifying which member of a near-synonym pair a poet chose is a direct route to tone.',
        },
      },
      {
        id: 'cpa1-claim',
        type: 'text' as const,
        content: `## Building a Defensible Claim

A strong analytical claim has three parts:

$$\\text{technique} \\;+\\; \\text{effect} \\;+\\; \\text{meaning}$$

**Weak:** "The poet uses imagery." *(technique only — no effect, no meaning)*

**Strong:** "The poet's images of rust and rot **(technique)** make the remembered house feel actively decaying rather than simply old **(effect)**, suggesting that memory itself corrodes what it tries to preserve **(meaning)**."

> 🔑 **The "so what?" test:** After any observation, ask "so what?" until you reach a claim about meaning. *"There's alliteration."* — so what? *"It speeds the line."* — so what? *"The speed mirrors the speaker's panic."* — now you have analysis. We'll build the toolkit for that move across the next six parts: sound, form, figurative language, syntax, structure, and tone.`,
      },
      {
        id: 'cpa1-input-claim',
        type: 'input-boxes' as const,
        content: `**The Claim Formula** ✍️

A complete analytical claim names a technique, its **effect**, and its **meaning**. Fill in the two missing pieces of the formula (one word each, lowercase):

$$\\text{technique} \\;+\\; \\boxed{?_1} \\;+\\; \\boxed{?_2}$$

**1)** What a device *does* to the reader/line — the ?
**2)** What the choice ultimately *signifies* — the ?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['effect', 'meaning'],
          hint1: 'Re-read the formula at the top of this part: technique + ___ + ___.',
          hint2: 'The middle term describes the device\'s impact; the last term is what it adds up to.',
          hint3: 'technique + effect + meaning. "Effect" = what it does; "meaning" = why it matters.',
          explanation: 'A defensible claim = technique + effect + meaning. Naming a device alone (technique) earns little; you must say what it does (effect) and what it signifies (meaning).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa2-intro',
        type: 'text' as const,
        content: `# 🥁 Complex Poetic Analysis

**Part 2 of 7 — Meter & Scansion**

---

> 🔑 **The Idea:** Meter is the pattern of stressed and unstressed syllables in a line. **Scansion** is the act of marking that pattern. Meter matters because *departures* from it create emphasis — and emphasis is meaning. We mark **˘** for an unstressed syllable and **´** for a stressed one.`,
      },
      {
        id: 'cpa2-feet',
        type: 'text' as const,
        content: `## The Common Feet

A **foot** is a small unit of stressed/unstressed syllables. The four you must know cold:

| Foot | Pattern | Stress sketch | Example word/phrase |
|------|---------|---------------|---------------------|
| **Iamb** | unstressed–stressed | ˘ ´ | a·**bove**, the **sun** |
| **Trochee** | stressed–unstressed | ´ ˘ | **gar**·den, **ti**·ger |
| **Anapest** | unstressed–unstressed–stressed | ˘ ˘ ´ | in·ter·**rupt**, on the **road** |
| **Dactyl** | stressed–unstressed–unstressed | ´ ˘ ˘ | **mer**·ri·ly, **el**·e·phant |

The **iamb** is the natural rhythm of English — most ordinary phrases ("today," "I went," "the dog") are iambic. That is why deviations *stand out*.

> 💡 **Quick test:** Say the word naturally and notice where your voice rises in volume/pitch. "GAR-den" stresses the first syllable → trochee. "a-BOVE" stresses the second → iamb.`,
      },
      {
        id: 'cpa2-q-feet',
        type: 'multiple-choice' as const,
        content: `**Identify the Foot** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The natural stress of the word "remember" (re·MEM·ber) follows which pattern?',
              options: ['˘ ´ ˘ (amphibrach)', '´ ˘ ˘ (dactyl)', '˘ ˘ ´ (anapest)', '´ ˘ (trochee)'],
              correctAnswer: 0,
              explanation: 're-MEM-ber is unstressed–stressed–unstressed (˘ ´ ˘), an amphibrach. The point: hear the stress on the middle syllable. The dactyl would be STRESSED first (MEM is not first).',
            },
            {
              question: 'Which phrase is naturally **trochaic** (´ ˘)?',
              options: ['"Tiger, tiger"', '"the road ahead"', '"to be or not"', '"in the deep"'],
              correctAnswer: 0,
              explanation: '"TI-ger, TI-ger" stresses the first syllable of each word: ´ ˘ ´ ˘ — trochaic (the famous opening of Blake\'s "The Tyger"). "the road aHEAD" and "to BE or NOT" are iambic; "in the DEEP" is anapestic.',
            },
          ],
        },
      },
      {
        id: 'cpa2-meter-names',
        type: 'text' as const,
        content: `## Naming a Meter: Foot × Count

A meter's full name is the **foot** plus the **number of feet per line**:

| Feet per line | Name |
|---------------|------|
| 1 | monometer |
| 2 | dimeter |
| 3 | trimeter |
| 4 | tetrameter |
| 5 | pentameter |
| 6 | hexameter |

So **iambic pentameter** = five iambs per line (10 syllables, ˘ ´ × 5) — the meter of Shakespeare's sonnets and most English blank verse.

### Worked Scansion

Shakespeare, Sonnet 18, line 1:

> "Shall **I** com·**pare** thee **to** a **sum**·mer's **day**?"

Marking it:  ˘ ´ | ˘ ´ | ˘ ´ | ˘ ´ | ˘ ´  — five iambs → **iambic pentameter**.

> 🔑 **Count syllables first.** Ten syllables in a regular line almost always means pentameter; eight often means tetrameter. Then determine which syllables are stressed to name the foot.`,
      },
      {
        id: 'cpa2-input-count',
        type: 'input-boxes' as const,
        content: `**Count the Feet** 🧮

Answer with a whole number.

**1)** A line of **iambic pentameter** contains how many *feet*?
**2)** That same line contains how many *syllables*?
**3)** A line of **trochaic tetrameter** contains how many *syllables*?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '8'],
          hint1: 'The prefix tells the count: penta- = 5, tetra- = 4.',
          hint2: 'An iamb has 2 syllables; a trochee has 2 syllables. Multiply feet × syllables-per-foot.',
          hint3: 'Pentameter = 5 feet. 5 iambs × 2 = 10 syllables. Tetrameter = 4 feet; 4 trochees × 2 = 8 syllables.',
          explanation: '1) 5 feet (penta = 5).  2) 5 iambs × 2 syllables = 10.  3) 4 trochees × 2 syllables = 8. Counting syllables is your fastest first check on a meter.',
        },
      },
      {
        id: 'cpa2-substitution',
        type: 'text' as const,
        content: `## Why Meter Matters: The Meaningful Deviation

Poets rarely keep a meter perfectly. A **substitution** (swapping one foot for another) draws the ear to exactly that spot.

The most common is the **trochaic substitution at the start of an iambic line** — a stressed first syllable that jolts the reader awake:

> "**Bat**·ter my **heart**, three-**per**·soned **God**" — John Donne

The line is iambic pentameter, but the first foot is reversed (**BAT**-ter = ´ ˘). Donne literally *batters* the meter with a stress on "Batter," enacting the violence he begs for.

> ⚠️ **Don't just label — interpret the break.** Naming "trochaic substitution" earns nothing on its own. The points come from connecting the metrical jolt to the poem's meaning (here, the speaker's plea to be forcibly remade).`,
      },
      {
        id: 'cpa2-dd-meter',
        type: 'dropdown-select' as const,
        content: `**Name the Meter** 🔽

Combine the **foot** with the **line length** to name each meter.`,
        exercise: {
          dropdowns: [
            { label: 'Five iambs per line (˘ ´ ×5):', options: ['Iambic pentameter', 'Iambic tetrameter', 'Trochaic pentameter', 'Dactylic hexameter'] },
            { label: 'Four trochees per line (´ ˘ ×4):', options: ['Trochaic tetrameter', 'Iambic tetrameter', 'Trochaic pentameter', 'Anapestic trimeter'] },
            { label: 'Three anapests per line (˘ ˘ ´ ×3):', options: ['Anapestic trimeter', 'Iambic trimeter', 'Dactylic trimeter', 'Anapestic tetrameter'] },
          ],
          correctAnswers: ['Iambic pentameter', 'Trochaic tetrameter', 'Anapestic trimeter'],
          hint1: 'Name = foot type + line-length word (penta = 5, tetra = 4, tri = 3).',
          hint2: 'The foot tells the first word (iambic/trochaic/anapestic); the count tells the second.',
          hint3: 'Five iambs = iambic pentameter; four trochees = trochaic tetrameter; three anapests = anapestic trimeter.',
          explanation: 'A meter is named foot + count: 5 iambs → iambic pentameter, 4 trochees → trochaic tetrameter, 3 anapests → anapestic trimeter. Watch the foot word AND the length word — mixing them up is a common slip.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa3-intro',
        type: 'text' as const,
        content: `# 🔔 Complex Poetic Analysis

**Part 3 of 7 — Sound: Rhyme, Alliteration & Sonic Texture**

---

> 🔑 **The Idea:** Poetry is meant to be heard. Sound devices bind words together, slow or speed a line, and let the *sound* of a line reinforce (or undercut) its *sense*. This is "sound echoing sense."`,
      },
      {
        id: 'cpa3-rhyme-scheme',
        type: 'text' as const,
        content: `## Rhyme Scheme Notation

A **rhyme scheme** labels line-end sounds with letters: the first sound is **A**, the next new sound **B**, and so on; repeats reuse the earlier letter.

Take this quatrain (Frost, "Stopping by Woods..."):

> "Whose woods these are I think I know. **(A)**
> His house is in the village though; **(A)**
> He will not see me stopping here **(B)**
> To watch his woods fill up with snow. **(A)**"

So the scheme is **A A B A**.

### Types of Rhyme

| Type | Definition | Example |
|------|------------|---------|
| **End rhyme** | rhyme at line ends | know / though |
| **Internal rhyme** | rhyme *within* a line | "I bring fresh **showers** for the thirsting **flowers**" |
| **Slant (near) rhyme** | approximate, imperfect rhyme | "**eyes** / **Paradise**" or "**soul** / **all**" |
| **Eye rhyme** | looks like it should rhyme, but doesn't aloud | "love / move," "cough / bough" |

> 💡 **Slant rhyme** is an analysis goldmine: when a poet *almost* rhymes, the friction can signal something unresolved or "off" in the poem's world (think of Emily Dickinson's deliberate near-rhymes).`,
      },
      {
        id: 'cpa3-dd-rhyme',
        type: 'dropdown-select' as const,
        content: `**Label the Rhyme** 🔽

Classify each described rhyme.`,
        exercise: {
          dropdowns: [
            { label: '"flood" rhymed with "blood":', options: ['Perfect (true) rhyme', 'Slant rhyme', 'Eye rhyme'] },
            { label: '"prove" rhymed with "love":', options: ['Perfect (true) rhyme', 'Slant rhyme', 'Eye rhyme'] },
            { label: '"hall" rhymed with "soul":', options: ['Perfect (true) rhyme', 'Slant rhyme', 'Eye rhyme'] },
          ],
          correctAnswers: ['Perfect (true) rhyme', 'Eye rhyme', 'Slant rhyme'],
          hint1: 'Say each pair aloud. Do the stressed vowel sounds match exactly, approximately, or only on the page?',
          hint2: '"flood/blood" truly rhyme aloud. "prove/love" look alike but sound different — that is eye rhyme.',
          hint3: '"hall/soul" share consonants but the vowels differ — an approximate, slant rhyme.',
          explanation: 'flood/blood = perfect (matching sound). prove/love = eye rhyme (matching spelling, mismatched sound). hall/soul = slant rhyme (close but imperfect sound). Reading aloud is the only reliable test.',
        },
      },
      {
        id: 'cpa3-devices',
        type: 'text' as const,
        content: `## Consonant & Vowel Music

| Device | Definition | Example |
|--------|------------|---------|
| **Alliteration** | repeated *initial* consonant sounds | "**w**ild and **w**oolly **w**inds" |
| **Assonance** | repeated *vowel* sounds within words | "the l**igh**t of the f**i**re is a br**igh**t" |
| **Consonance** | repeated consonant sounds (often at ends) | "pi**tt**er pa**tt**er," "blank / think" |
| **Onomatopoeia** | the word imitates its sound | *buzz, hiss, clang, murmur* |
| **Cacophony** | harsh, clashing sounds | "the **cr**a**ck**ed, **cl**u**tt**ered ro**ck**s" |
| **Euphony** | smooth, pleasing sounds | "the **l**ull of the **l**ow, **l**ulling sea" |

> 🔑 **Sound echoing sense:** harsh **cacophony** (clustered hard *k/t/g* sounds) suits violence, ugliness, or effort; smooth **euphony** (liquid *l/m/n* and long vowels) suits calm, beauty, or sleep. When the *texture* of the sound matches the meaning, that pairing is your analysis.`,
      },
      {
        id: 'cpa3-q-devices',
        type: 'multiple-choice' as const,
        content: `**Hear the Device** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In "the silken, sad, uncertain rustling of each purple curtain" (Poe), the repeated *s* sounds are an example of —',
              options: ['Sibilance/alliteration that creates a hushed, whispery euphony', 'Cacophony that creates harshness', 'Onomatopoeia of a bell', 'Slant rhyme'],
              correctAnswer: 0,
              explanation: 'The clustered soft *s* sounds (sibilance, a form of alliteration/consonance) produce a whispering, uneasy hush — euphonic in texture, matching the eerie quiet of the scene. There are no harsh stops, so it is not cacophony.',
            },
            {
              question: 'A line packed with hard *k*, *t*, and *g* sounds describing a battlefield best illustrates —',
              options: ['Cacophony reinforcing violence (sound echoing sense)', 'Euphony reinforcing calm', 'Eye rhyme', 'Iambic substitution'],
              correctAnswer: 0,
              explanation: 'Clustered harsh stop-consonants create cacophony; pairing that grating texture with a violent subject is "sound echoing sense." Euphony would be the opposite (smooth, pleasing).',
            },
          ],
        },
      },
      {
        id: 'cpa3-input-scheme',
        type: 'input-boxes' as const,
        content: `**Write the Scheme** 🔤

Read this stanza and give the rhyme scheme as **four capital letters, no spaces** (e.g. \`ABAB\`). The first new sound is A, the next new sound B.

> "I wandered lonely as a **cloud**
> That floats on high o'er vales and **hills**,
> When all at once I saw a **crowd**,
> A host, of golden **daffodils**;"

**1)** Rhyme scheme of the stanza = ?  *(four letters)*`,
        exercise: {
          boxes: 1,
          correctAnswers: ['ABAB'],
          hint1: 'Label line 1 "A." Then ask whether line 2 rhymes with it — if not, it becomes "B."',
          hint2: 'cloud/crowd rhyme; hills/daffodils rhyme. The rhyming lines should share a letter.',
          hint3: 'Lines 1 and 3 (cloud/crowd) = A; lines 2 and 4 (hills/daffodils) = B → A,B,A,B.',
          explanation: 'cloud (A), hills (B), crowd (A), daffodils (B) → ABAB, an alternating/cross rhyme. This is the opening of Wordsworth\'s "I Wandered Lonely as a Cloud."',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa4-intro',
        type: 'text' as const,
        content: `# 🪞 Complex Poetic Analysis

**Part 4 of 7 — Figurative Language & Imagery**

---

> 🔑 **The Idea:** Figurative language says one thing to mean another. Its job is to make the abstract concrete, the familiar strange, and the felt visible. Imagery is the sensory raw material; figures of speech are the machinery that shapes it.`,
      },
      {
        id: 'cpa4-figures',
        type: 'text' as const,
        content: `## The Core Figures

| Figure | Definition | Example |
|--------|------------|---------|
| **Metaphor** | one thing *is* another (no "like"/"as") | "Hope is the thing with feathers" |
| **Simile** | comparison *using* "like" or "as" | "O my love is like a red, red rose" |
| **Personification** | human qualities given to nonhuman things | "Because I could not stop for Death — / He kindly stopped for me" |
| **Metonymy** | a thing named by something associated with it | "the **crown** ruled" (= the monarchy) |
| **Synecdoche** | a part stands for the whole (or vice versa) | "all hands on deck" (= sailors) |
| **Apostrophe** | direct address to an absent/abstract/dead thing | "Death, be not proud" |
| **Hyperbole** | deliberate exaggeration | "I'll love you till the seas gang dry" |
| **Symbol** | a concrete thing standing for a larger idea | a road = a life choice |

> 💡 **Metonymy vs. synecdoche:** synecdoche uses a literal **part** ("hands" are literally part of sailors); metonymy uses an **associated** thing that isn't a part ("crown" is associated with, but not part of, a monarch). When unsure on the exam, "metonymy" is the safer umbrella term.`,
      },
      {
        id: 'cpa4-dd-figures',
        type: 'dropdown-select' as const,
        content: `**Name That Figure** 🔽`,
        exercise: {
          dropdowns: [
            { label: '"The wind whispered secrets through the pines."', options: ['Personification', 'Simile', 'Metonymy', 'Hyperbole'] },
            { label: '"The pen is mightier than the sword."', options: ['Metonymy', 'Simile', 'Personification', 'Apostrophe'] },
            { label: '"My heart is a hollow drum, beaten thin."', options: ['Metaphor', 'Simile', 'Synecdoche', 'Apostrophe'] },
            { label: '"O Wild West Wind, thou breath of Autumn\'s being!"', options: ['Apostrophe', 'Metonymy', 'Hyperbole', 'Simile'] },
          ],
          correctAnswers: ['Personification', 'Metonymy', 'Metaphor', 'Apostrophe'],
          hint1: 'Look for the signal: "like/as" = simile; direct address to a thing = apostrophe; no signal but a stated identity = metaphor.',
          hint2: '"Pen"/"sword" stand for writing/warfare by association → metonymy. Whispering wind gets a human act → personification.',
          hint3: '"My heart IS a drum" (no like/as) = metaphor. "O Wild West Wind, thou..." addresses an absent force = apostrophe.',
          explanation: 'Whispering wind = personification. pen/sword = metonymy (associated objects). "heart is a drum" = metaphor (direct identity). "O Wild West Wind" = apostrophe (Shelley addresses the wind directly).',
        },
      },
      {
        id: 'cpa4-imagery',
        type: 'text' as const,
        content: `## Imagery: The Five Senses

**Imagery** is language that evokes sensory experience. It is not limited to sight.

| Type | Sense | Example |
|------|-------|---------|
| **Visual** | sight | "the **yellow** fog that rubs its back" |
| **Auditory** | sound | "the **murmuring** of innumerable bees" |
| **Tactile** | touch | "the **cold** wet stone under bare feet" |
| **Olfactory** | smell | "the **reek** of the diesel and the dust" |
| **Gustatory** | taste | "the **sweet** rot of fallen plums" |
| **Kinesthetic** | movement | "she **lunged**, the muscles **wrenching**" |

> ⚠️ **Don't just spot imagery — track its *pattern*.** A poem that piles up cold, dark, downward images is building a **motif**. The accumulation, not any single image, creates the mood. Ask: *what do these images have in common, and what feeling does that shared quality produce?*`,
      },
      {
        id: 'cpa4-q-imagery',
        type: 'multiple-choice' as const,
        content: `**Read the Imagery** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A stanza repeatedly invokes "ash," "smoke," "embers," and "the last red coal." This *pattern* most directly creates —',
              options: [
                'A motif of dying fire that suggests fading vitality or an ending',
                'A cheerful, energetic tone',
                'An example of synecdoche',
                'Iambic pentameter',
              ],
              correctAnswer: 0,
              explanation: 'The shared quality of the images — a fire in its final stage — accumulates into a motif of decline/ending. The mood comes from the pattern, not from any single word. None of the other options describes what repeated dying-fire images do.',
            },
            {
              question: 'In "the murmuring of innumerable bees," the dominant imagery is —',
              options: ['Auditory (sound)', 'Gustatory (taste)', 'Tactile (touch)', 'Olfactory (smell)'],
              correctAnswer: 0,
              explanation: '"Murmuring" appeals to hearing — it is auditory imagery (and the soft *m/r/n* sounds reinforce the drowsy hum, an instance of sound echoing sense).',
            },
          ],
        },
      },
      {
        id: 'cpa4-input-figure',
        type: 'input-boxes' as const,
        content: `**Name the Figure** ✍️

Type the single best term (one word, lowercase) for the figure of speech in each quotation.

**1)** "Because I could not stop for Death — / He kindly stopped for me" → Death is given human behavior. Figure = ?
**2)** "She is as fierce as a cornered lioness." Figure = ?  *(it uses "as")*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['personification', 'simile'],
          hint1: 'When a nonhuman thing acts or feels like a person, the figure starts with "person-".',
          hint2: 'A comparison that uses the word "like" or "as" has a specific four-letter-plus name.',
          hint3: 'Death "kindly stopping" = personification. A comparison with "as ... as" = simile.',
          explanation: '1) personification — Death performs the human, courteous act of stopping (Dickinson). 2) simile — the explicit "as ... as" comparison signals a simile, not a metaphor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa5-intro',
        type: 'text' as const,
        content: `# 🧱 Complex Poetic Analysis

**Part 5 of 7 — Form, Structure & Syntax**

---

> 🔑 **The Idea:** *Form* is the container (sonnet, ode, free verse); *structure* is how the argument moves through the poem (the turn, the stanza breaks); *syntax* is how sentences are built across the lines. All three are meaning-bearing, not decoration.`,
      },
      {
        id: 'cpa5-forms',
        type: 'text' as const,
        content: `## Fixed Forms to Recognize

| Form | Key features |
|------|--------------|
| **Shakespearean (English) sonnet** | 14 lines, iambic pentameter, **ABAB CDCD EFEF GG**; turn often at the closing couplet |
| **Petrarchan (Italian) sonnet** | 14 lines; **octave (ABBAABBA)** poses a problem, **sestet (CDECDE/CDCDCD)** resolves it; turn (volta) at line 9 |
| **Villanelle** | 19 lines, two refrains repeating in a fixed pattern (e.g. "Do not go gentle into that good night") |
| **Ode** | long lyric of praise/serious meditation on a subject |
| **Elegy** | a poem of mourning for the dead |
| **Free verse** | no fixed meter or rhyme — but line breaks and rhythm are still deliberate |
| **Blank verse** | unrhymed **iambic pentameter** (Milton, much of Shakespeare's dialogue) |

> 💡 **The volta (turn)** is the most testable structural feature of a sonnet. It is the pivot where the argument shifts — a "but," "yet," or change of direction. In a Shakespearean sonnet it often lands at the final couplet; in a Petrarchan one, near line 9.`,
      },
      {
        id: 'cpa5-dd-form',
        type: 'dropdown-select' as const,
        content: `**Match the Form** 🔽`,
        exercise: {
          dropdowns: [
            { label: '14 lines ending in a rhymed couplet (…EFEF GG):', options: ['Shakespearean sonnet', 'Villanelle', 'Free verse', 'Elegy'] },
            { label: 'Unrhymed iambic pentameter:', options: ['Blank verse', 'Petrarchan sonnet', 'Ode', 'Free verse'] },
            { label: 'A poem mourning someone\'s death:', options: ['Elegy', 'Ode', 'Sonnet', 'Villanelle'] },
            { label: 'No regular meter or rhyme scheme at all:', options: ['Free verse', 'Blank verse', 'Sonnet', 'Villanelle'] },
          ],
          correctAnswers: ['Shakespearean sonnet', 'Blank verse', 'Elegy', 'Free verse'],
          hint1: 'Watch the two traps: "blank verse" rhymes nothing but IS metered; "free verse" has neither meter nor rhyme.',
          hint2: 'A closing couplet "GG" after three quatrains is the Shakespearean signature.',
          hint3: 'Elegy = mourning the dead; ode = praise. Blank verse = metered-but-unrhymed; free verse = neither.',
          explanation: 'The closing GG couplet marks a Shakespearean sonnet. Unrhymed iambic pentameter = blank verse. A mourning poem = elegy. No meter AND no rhyme = free verse. The blank-verse/free-verse distinction (metered vs. unmetered) is a classic exam trap.',
        },
      },
      {
        id: 'cpa5-enjambment',
        type: 'text' as const,
        content: `## Line Breaks: Enjambment vs. End-Stop

| Term | Definition | Effect |
|------|------------|--------|
| **End-stopped line** | a line ending with punctuation / a complete grammatical pause | closure, control, deliberation |
| **Enjambment** | a sentence runs past the line break with no pause | momentum, urgency, surprise, or a "trick" where line 2 revises line 1 |
| **Caesura** | a strong pause *within* a line (often marked by punctuation) | hesitation, emphasis, a turn of thought mid-line |

### Why enjambment creates meaning

Consider:

> "I am not yet so old
> But I may learn..."

Read line 1 alone — "I am not yet so old" — and it sounds like a confident claim. The enjambment then **delays and qualifies** it: the thought isn't finished, and the eye's hop to line 2 enacts the speaker reaching for more. The *break itself* produces a small drama of expectation and revision.

> ⚠️ **Always ask what the line break *does*.** A break that splits a noun from its verb, or lands on a charged word, is doing work. "There is enjambment" is worthless; "the enjambment strands 'falling' at the line's edge, making the reader *fall* into the next line" is analysis.`,
      },
      {
        id: 'cpa5-q-structure',
        type: 'multiple-choice' as const,
        content: `**Structure in Action** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Petrarchan sonnet poses a question across its octave, then begins line 9 with "Yet—". This "Yet" most likely marks the —',
              options: ['Volta (the turn), where the poem pivots from problem to resolution', 'Caesura', 'End rhyme', 'Refrain'],
              correctAnswer: 0,
              explanation: 'In a Petrarchan sonnet the volta (turn) characteristically falls around line 9, opening the sestet; a pivot word like "Yet" signals the shift from the octave\'s problem to the sestet\'s response.',
            },
            {
              question: 'A poet enjambs a line so that "she let it / go" splits the verb across the break. The most defensible reading is that the break —',
              options: [
                'Enacts the release — the eye must "let go" of one line and drop to the next, mirroring the action',
                'Is a printing error with no meaning',
                'Proves the poem is a sonnet',
                'Creates perfect rhyme',
              ],
              correctAnswer: 0,
              explanation: 'Form mirrors content: by splitting "let it / go," the line break makes the reader perform a small letting-go, dropping to the next line. That is enjambment doing interpretive work, not an error.',
            },
          ],
        },
      },
      {
        id: 'cpa5-input-volta',
        type: 'input-boxes' as const,
        content: `**Structure Vocabulary** ✍️

One-word (lowercase) answers.

**1)** The term for a strong pause *within* a line, often at a comma or dash, is a ?
**2)** A line that ends with a grammatical/punctuation stop is called end-? (one word that completes "end-___")`,
        exercise: {
          boxes: 2,
          correctAnswers: ['caesura', 'stopped'],
          hint1: 'The within-line pause is a Latin-derived term beginning with "c."',
          hint2: 'A line stopped by punctuation at its end is "end-_______."',
          hint3: 'A mid-line pause = caesura. A line halted by end punctuation = end-stopped.',
          explanation: '1) caesura — a pause inside the line (e.g., "To be, ‖ or not to be"). 2) stopped — an end-stopped line closes with punctuation, the opposite of enjambment.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa6-intro',
        type: 'text' as const,
        content: `# 🎭 Complex Poetic Analysis

**Part 6 of 7 — Speaker, Tone & the Ambiguous Poem**

---

> 🔑 **The Idea:** The **speaker** is the voice of the poem — never assume it is the poet. **Tone** is the speaker's attitude toward the subject; **mood** is the feeling created in the reader. Complex poems hold *more than one* tone at once, and reading that tension is the heart of advanced analysis.`,
      },
      {
        id: 'cpa6-speaker-tone',
        type: 'text' as const,
        content: `## Speaker ≠ Poet; Tone ≠ Mood

- **Speaker:** the constructed voice. A poet may write in the voice of a murderer, a child, a tree, or Death itself. Identify the speaker's situation and attitude from evidence in the text.
- **Tone:** the *speaker's* attitude (toward the subject, the listener, or themselves) — *reverent, bitter, ironic, wistful, defiant.*
- **Mood:** the *reader's* feeling — *uneasy, comforted, melancholy.*

### How to pin down tone

Tone lives in **diction** (word choice), **imagery**, **syntax**, and **sound**. Build a precise tone word from the evidence, then make it more exact:

| Vague | Better | Best (precise) |
|-------|--------|----------------|
| "sad" | "mournful" | "resigned grief that refuses self-pity" |
| "happy" | "joyful" | "giddy, almost manic delight" |
| "angry" | "bitter" | "cold, controlled contempt" |

> 💡 **Avoid one-word tone answers in essays.** "The tone is sad" is a level-2 observation. "The flat, monosyllabic diction creates a numbed, *exhausted* grief — too tired even for tears" connects evidence to a precise attitude. That precision is what separates a 5 from a 7 on the rubric.`,
      },
      {
        id: 'cpa6-q-tone',
        type: 'multiple-choice' as const,
        content: `**Diagnose the Tone** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A speaker describes a lavish party using only words like "glittering," "brittle," "hollow," and "polished smiles." The tone is best described as —',
              options: [
                'Ironic / quietly contemptuous — surface glamour undercut by words implying emptiness',
                'Sincerely celebratory and warm',
                'Furious and openly hostile',
                'Neutral and purely descriptive',
              ],
              correctAnswer: 0,
              explanation: 'The connotations ("brittle," "hollow," "polished smiles") signal that the speaker sees through the glamour to something empty — a controlled, ironic contempt, not warmth or open fury. The diction is evaluative, so it is not neutral.',
            },
            {
              question: 'Why is it risky to say "the poet feels lonely" when analyzing a first-person poem?',
              options: [
                'Because the "I" is the speaker — a crafted voice that may differ from the poet\'s own feelings',
                'Because poems never use the word "I"',
                'Because loneliness cannot be a tone',
                'Because the poet always agrees with the speaker',
              ],
              correctAnswer: 0,
              explanation: 'The first-person "I" is a constructed speaker, not necessarily the biographical poet. Strong analysis says "the speaker," reserving claims about the poet for cases with clear external evidence.',
            },
          ],
        },
      },
      {
        id: 'cpa6-complexity',
        type: 'text' as const,
        content: `## Tonal Complexity & Ambiguity

A "complex" poem resists a single label. Watch for:

| Signal | What it means |
|--------|---------------|
| **Tonal shift** | the attitude changes mid-poem (often at a volta or stanza break) — track *where* and *why* |
| **Irony** | a gap between what is said and what is meant (verbal), expected vs. actual (situational), or known vs. unknown (dramatic) |
| **Paradox** | an apparent contradiction that reveals a truth ("I must be cruel only to be kind") |
| **Ambiguity** | language that sustains *two valid readings at once* — a feature, not a flaw |

### Worked reading

Frost's "The Road Not Taken" is famously *misread* as a triumphant anthem of individualism. But the speaker admits the two roads were "really about the same," and foresees telling the story "with a sigh" "ages and ages hence." The tone is **gently self-mocking and ambivalent** — the poem dramatizes how we *retroactively* invent meaning for arbitrary choices.

> ⚠️ **The strongest essays embrace ambiguity.** When a poem supports two readings, don't force one. Name the tension ("the poem is at once nostalgic *and* skeptical of its own nostalgia") and show how the text sustains both. The AP rubric explicitly rewards interpretations that account for **complexity**.`,
      },
      {
        id: 'cpa6-dd-irony',
        type: 'dropdown-select' as const,
        content: `**Spot the Device** 🔽

Classify each as verbal irony, situational irony, or paradox.`,
        exercise: {
          dropdowns: [
            { label: 'A fire station burns down.', options: ['Situational irony', 'Verbal irony', 'Paradox'] },
            { label: '"What a wonderful day," she says, soaked in the freezing rain.', options: ['Verbal irony', 'Situational irony', 'Paradox'] },
            { label: '"The child is father of the man."', options: ['Paradox', 'Verbal irony', 'Situational irony'] },
          ],
          correctAnswers: ['Situational irony', 'Verbal irony', 'Paradox'],
          hint1: 'Verbal irony = saying the opposite of what you mean. Situational = outcome opposite to expectation. Paradox = a self-contradiction that is somehow true.',
          hint2: 'A fire station — of all places — burning is an outcome at odds with expectation.',
          hint3: '"Wonderful day" while freezing = saying the opposite (verbal). "Child is father of the man" contradicts itself yet rings true (paradox).',
          explanation: 'Fire station burning = situational irony (reality contradicts expectation). Praising a miserable moment = verbal irony. "The child is father of the man" (Wordsworth) is a paradox — impossible literally, true figuratively (childhood shapes adulthood).',
        },
      },
      {
        id: 'cpa6-vocab-bridge',
        type: 'text' as const,
        content: `## One Distinction to Lock In

Before moving on, separate the three voice-and-feeling terms cleanly — graders penalize blurring them:

| Term | Belongs to | Quick gloss |
|------|------------|-------------|
| **Speaker** | the poem | the constructed *voice* (not the poet) |
| **Tone** | the speaker | the speaker's *attitude* toward the subject |
| **Mood** | the reader | the *feeling* the poem produces in you |

> 💡 Memory hook: **T**one is what the speaker **T**hinks/feels; **M**ood is what the reader is **M**ade to feel.`,
      },
      {
        id: 'cpa6-input-voice',
        type: 'input-boxes' as const,
        content: `**Voice & Feeling** ✍️

One-word, lowercase answers.

**1)** The constructed *voice* of a poem — which you should never assume is the poet — is the ?
**2)** The *speaker's attitude* toward the subject is the poem's ?
**3)** The feeling produced *in the reader* is the ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['speaker', 'tone', 'mood'],
          hint1: 'Review the table just above: voice / attitude / reader-feeling.',
          hint2: 'Two of these are easy to swap — attitude belongs to the speaker, feeling belongs to the reader.',
          hint3: 'Voice = speaker; speaker\'s attitude = tone; reader\'s feeling = mood.',
          explanation: '1) speaker — the crafted voice, distinct from the poet. 2) tone — the speaker\'s attitude. 3) mood — the reader\'s feeling. Keeping tone (speaker) and mood (reader) separate is a hallmark of precise analysis.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englit-complex-poetic-analysis',
    sections: [
      {
        id: 'cpa7-intro',
        type: 'text' as const,
        content: `# 🏁 Complex Poetic Analysis

**Part 7 of 7 — Synthesis: The Full Close Reading & Exit Quiz**

---

You now command the whole toolkit: levels of reading, meter, sound, figurative language, form/structure/syntax, and speaker/tone. In this final part we **assemble** them into a single argument and finish with a mastery check.`,
      },
      {
        id: 'cpa7-method',
        type: 'text' as const,
        content: `## A Repeatable Method for Any Poem

| Step | What to do |
|------|------------|
| **1. Paraphrase** | Get the literal situation right (level 1). Who speaks, to whom, about what? |
| **2. Identify the turn** | Where does the poem shift — argument, tone, or image? Mark the volta/break. |
| **3. Read the diction** | Find the loaded words; build a precise tone from connotation. |
| **4. Map the devices** | Note sound, figures, meter *only where they do work*. |
| **5. Connect form to meaning** | How do structure/syntax/line breaks reinforce the idea? |
| **6. State a complex thesis** | technique + effect + meaning, accounting for any ambiguity. |

> 🔑 **The thesis is everything.** A defensible thesis names a *tension* or *development* in the poem and previews how form proves it — e.g., "Through a tonal shift at the volta and increasingly fractured syntax, the poem moves from confident grief to an unsettling doubt that its mourning means anything."`,
      },
      {
        id: 'cpa7-worked',
        type: 'text' as const,
        content: `## Worked Close Reading: Shakespeare, Sonnet 73 (opening)

> "That time of year thou mayst in me behold
> When yellow leaves, or none, or few, do hang
> Upon those boughs which shake against the cold,
> Bare ruined choirs, where late the sweet birds sang."

**Paraphrase:** The aging speaker tells a beloved: *you can see in me the late autumn of life.*

**Diction & imagery:** "yellow leaves, or none, or few" — the hesitant, self-correcting list (leaves → none → few) gropes toward bareness, the wavering revisions enacting a mind reluctant to settle on so few. "Bare ruined choirs" is a **metaphor**: the empty branches become the roofless ruins of a church where birds (a choir) once sang — fusing autumn, death, and lost music.

**Form:** Shakespearean sonnet, iambic pentameter. The quatrain piles one image of decline on another; the regular meter lends a calm, almost accepting cadence.

**Tone:** not panic but **resigned, tender melancholy** — the beauty of the imagery makes the coming loss poignant rather than terrifying.

**Complex thesis:** *Sonnet 73 uses an extended metaphor of late autumn and a ruined church to reframe mortality not as horror but as a final, fragile beauty — making the beloved's love (and the speaker's) "more strong" precisely because it must soon end.*

> 💡 Notice that every claim is tethered to a specific word or structural choice. That tethering — evidence → effect → meaning — is the whole game.`,
      },
      {
        id: 'cpa7-q-synthesis',
        type: 'multiple-choice' as const,
        content: `**Synthesis Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In "Bare ruined choirs, where late the sweet birds sang," the phrase "ruined choirs" works primarily as —',
              options: [
                'A metaphor equating the bare branches with the empty ruins of a church',
                'A simile comparing leaves to birds',
                'An example of perfect end rhyme',
                'Onomatopoeia',
              ],
              correctAnswer: 0,
              explanation: 'The branches are not *like* ruins — they *become* "ruined choirs," a compressed metaphor. (Historically, "choirs" were the part of a church where singers sat; stripped boughs = roofless ruins where birds, the former "choir," once sang.)',
            },
            {
              question: 'The best reason to call a poem "complex" in a thesis is that —',
              options: [
                'It sustains a genuine tension or development (e.g., two tones, a turn) that the evidence supports',
                'It is long and uses difficult vocabulary',
                'It rhymes perfectly throughout',
                'It can only mean one thing',
              ],
              correctAnswer: 0,
              explanation: 'Complexity, on the AP rubric, means a defensible tension, development, or ambiguity supported by the text — not mere length, vocabulary, or rhyme. A poem with only one possible meaning is the opposite of complex.',
            },
          ],
        },
      },
      {
        id: 'cpa7-input-final',
        type: 'input-boxes' as const,
        content: `**Term Recall** ✍️

Single-word, lowercase answers.

**1)** The pivot/turn in a sonnet, where the argument shifts, is the ?  *(Italian-derived term)*
**2)** A comparison stating one thing *is* another, with no "like" or "as," is a ?
**3)** When a sentence runs past the line break with no pause, that is ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['volta', 'metaphor', 'enjambment'],
          hint1: 'The sonnet "turn" is an Italian word meaning, literally, "turn."',
          hint2: '"Hope IS the thing with feathers" — direct identity, no "like/as."',
          hint3: 'A line break crossed without a pause, carrying the sense forward, is en-________.',
          explanation: '1) volta — the structural turn (≈ line 9 in a Petrarchan sonnet; the couplet in a Shakespearean one). 2) metaphor — a direct, unsignaled comparison. 3) enjambment — running the sense past the line break.',
        },
      },
      {
        id: 'cpa7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A line of poetry reads: "and MILES to GO be-FORE I SLEEP." Counting the stresses, this line is closest to —',
              options: [
                'Iambic tetrameter (four iambs: ˘ ´ ˘ ´ ˘ ´ ˘ ´)',
                'Trochaic pentameter',
                'Dactylic hexameter',
                'Free verse with no meter',
              ],
              correctAnswer: 0,
              explanation: '"and MILES | to GO | be-FORE | I SLEEP" = four unstressed–stressed feet → iambic tetrameter (Frost\'s famous closing lines). Eight syllables in four iambs.',
            },
            {
              question: 'A poem\'s tone is "wistful" in its first three stanzas but turns "defiant" in the last. The most useful analytical move is to —',
              options: [
                'Identify the shift, locate exactly where it happens, and explain what triggers and means it',
                'Pick only one tone and ignore the other',
                'Conclude the poem is poorly written',
                'List every sound device in the poem regardless of relevance',
              ],
              correctAnswer: 0,
              explanation: 'A tonal shift is a gift to the analyst: pinpoint the turn, then explain its cause and significance. Ignoring half the poem, or dumping unconnected devices, abandons the complexity the rubric rewards.',
            },
            {
              question: 'Which thesis best demonstrates "technique + effect + meaning"?',
              options: [
                'Through harsh cacophony and fractured enjambment, the poem makes grief feel physically violent, suggesting that mourning is an assault the speaker cannot control.',
                'This poem uses many literary devices to talk about grief.',
                'The poem is sad and has fourteen lines.',
                'The poet probably felt bad when writing this.',
              ],
              correctAnswer: 0,
              explanation: 'Only the first names specific techniques (cacophony, enjambment), states their effect (grief feels violent), and reaches meaning (mourning as uncontrollable assault). The others stop at vague labeling, summary, or biography.',
            },
          ],
        },
      },
    ],
  },
]
