import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Complex Poetic Analysis (AP English Literature & Composition).
 * Registry key / DB Topic.slug: 'englit-complex-poetic-analysis'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * close reading / worked applications → Exit Quiz. Concept-forward (non-math topic), so
 * checks favor multiple-choice + dropdown, with a few short-answer input-boxes (single words
 * drawn from the passages and the teaching). Poem excerpts are public domain except one short
 * fair-use title reference (Dylan Thomas) in the closed-forms table.
 * LaTeX uses DOUBLED backslashes (template-literal strings). Stressed syllables are marked
 * with capitals or bold; per the AP Lit CED (STR-1.U note) no item asks students to name a
 * meter, a rhyme scheme or a fixed form.
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
| **3. Interpretive (claim)** | What does the poem *mean*, and how does form prove it? | "The poem breaks its steady rhythm to enact the speaker's broken sense of time." |

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
                'The harsh consonants in "cracked black bark" slow the line and mimic the roughness described.',
                'The poem is about a tree in winter, standing alone in a field with its bark cracked and black.',
                'In the second stanza, the speaker walks past the tree and notices its "cracked black bark."',
                'The poem has four stanzas, uses many hard consonant sounds, and ends with a question.',
              ],
              correctAnswer: 0,
              explanation: 'Only the "cracked black bark" sound analysis connects a specific technique (clustered hard consonants) to an effect (slowing, roughness) and to meaning. The others merely restate content or describe structure without explaining its effect.',
            },
            {
              question: 'A reader claims a poem is "about hope" but has misidentified the speaker as cheerful when the diction is actually bitter. Which level of reading failed?',
              options: [
                'Level 1 (literal) — the tone was misread, so the claim built on it is unsupported',
                'Level 3 (interpretive) — the claim about hope was simply too ambitious to defend',
                'No level failed — "hope" is a valid reading of any poem, whatever its diction',
                'Level 2 only — tone is subjective, so the reader\'s cheerful reading is just as valid',
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

**Part 2 of 7 — Rhythm & Emphasis: Where the Beat Breaks**

---

### Topics in This Part

| Section |
|---------|
| Hearing the Beat |
| Where the Beat Breaks |
| Line Length, Pauses & Repetition |

> 🔑 **The Idea:** Rhythm is the pattern of stressed and unstressed syllables in a line. In a closed form, a steady rhythm is one of the "predictable patterns" that "develop relationships among ideas in the poem" (CED STR-1.U). A steady beat sets up an expectation, so a *departure* from it creates emphasis, and emphasis is meaning. In this part, capital letters mark stressed syllables. The AP exam will not ask you to name a meter or count its feet; it asks what the rhythm does.`,
      },
      {
        id: 'cpa2-beat',
        type: 'text' as const,
        content: `## Hearing the Beat

Every English word of more than one syllable has a stressed syllable: a-**BOVE**, **GAR**-den, re-**MEM**-ber. In a sentence, important words (nouns, verbs, adjectives) usually take the stress, and small words (the, a, of, to) usually do not.

Ordinary English speech tends to alternate light and heavy syllables ("to-**DAY**," "i **WENT**," "the **DOG**"), and many poems build that alternation into a steady beat:

> "Shall I com**pare** thee **to** a **sum**mer's **day**?" — Shakespeare, Sonnet 18

Five evenly spaced beats, close to natural speech. Because the pattern is so familiar, a line that breaks it *stands out*.

| Listen for | Question to ask |
|------------|-----------------|
| A steady beat | Is there a norm the poem keeps returning to? |
| Stresses crowded together | Where does a line slow down or gain force? |
| A run of light syllables | Where does a line speed up or lighten? |
| A change in line length | Where does a line suddenly shrink or stretch? |

> 💡 **Quick test:** Say the line aloud at a natural pace and notice where your voice rises in volume and pitch. Don't force a beat the words won't carry.`,
      },
      {
        id: 'cpa2-q-beat',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why does it matter for analysis that so much English speech falls into a light-heavy alternation?',
              options: [
                'Poems that keep the pattern are always calm and orderly in tone.',
                'Such a pattern proves that a poem was written to be sung aloud.',
                'The pattern is familiar, so a line that breaks it stands out.',
                'A line that keeps the pattern has no stresses worth analyzing.',
              ],
              correctAnswer: 2,
              explanation: 'A familiar beat creates an expectation, so a departure draws the reader\'s attention to exactly that spot. A steady rhythm can carry any tone, it proves nothing about music, and every line has stresses whose placement can matter.',
            },
            {
              question: 'A poem moving in a steady, gentle beat suddenly has a line that begins "Stop! Look! Wait!" The most likely purpose of the crowded stresses is to —',
              options: [
                'Halt the reader with urgency at that moment',
                'Show that the poet has lost control of the rhythm',
                'Make the line flow more smoothly into the next',
                'Signal that the poem has switched to a new form',
              ],
              correctAnswer: 0,
              explanation: 'Three stressed words, each followed by a hard stop, break the gentle norm and force the reader to halt, which is the urgency the words demand. A deliberate break is a choice, not a loss of control; the stops interrupt rather than smooth the flow; and one emphatic line does not change the poem\'s form.',
            },
          ],
        },
      },
      {
        id: 'cpa2-departure',
        type: 'text' as const,
        content: `## Where the Beat Breaks

Poets rarely keep a rhythm perfectly. A line that swaps a light syllable for a heavy one, or piles stresses together, draws the ear to exactly that spot.

> "Batter my heart, three-person'd God, for you
> As yet but knock, breathe, shine, and seek to mend;"
>
> — John Donne, Holy Sonnet 14 (modernized spelling)

The sonnet's lines usually open on a light syllable. This one opens on a heavy one: **BAT**-ter my **HEART**. Donne literally *batters* the rhythm with a stress on "Batter," enacting the violence he begs for. In the next line, "knock, breathe, shine," three stressed one-syllable verbs, each cut off by a comma, describe God's gentle efforts so far. Later the speaker demands harsher ones: "Your force to break, blow, burn, and make me new." The stresses crowd together as the verbs grow violent.

> "Break, break, break,
> On thy cold gray stones, O Sea!"
>
> — Alfred, Lord Tennyson, "Break, Break, Break," 1842

Tennyson's first line has no light syllables at all: three stressed words, three waves hitting the rocks. The reader cannot hurry past any of them.

> ⚠️ **Don't just describe — interpret the break.** "The line has an unusual rhythm" earns nothing on its own. The points come from connecting the jolt to the poem's meaning (here, Donne's plea to be forcibly remade, or the relentless sea against which Tennyson's speaker grieves).`,
      },
      {
        id: 'cpa2-input-rhythm',
        type: 'input-boxes' as const,
        content: `**Find the Emphasis** ✍️

One word each, lowercase.`,
        exercise: {
          questions: [
            { question: 'The first word of Donne\'s line, whose heavy opening stress enacts the violence the speaker asks for', answer: 'batter', acceptableAnswers: ['"batter"'] },
            { question: 'The word Tennyson repeats three times in his short opening line', answer: 'break', acceptableAnswers: ['"break"'] },
            { question: 'A steady beat sets up an ___ that a break in the rhythm can surprise', answer: 'expectation', acceptableAnswers: ['expectations'] },
          ],
          hint1: 'Donne wants God to strike his heart like a battering ram.',
          hint2: 'The same word is in the poem\'s title, three times.',
          hint3: 'What a reader comes to expect from a pattern is an ex________.',
          explanation: '1) "Batter" lands a stress where the line would normally start light. 2) "Break" three times, all stressed, pounds like waves. 3) A steady beat creates an expectation, and a break in it creates emphasis.',
        },
      },
      {
        id: 'cpa2-lines',
        type: 'text' as const,
        content: `## Line Length, Pauses & Repetition

**Line length.** Short lines slow reading: each ends quickly and the white space forces a pause. Tennyson's three-word opening line is a pause after every word. Longer lines can sweep the reader along or make a thought feel crowded.

**Pauses inside the line.** Commas, colons and dashes interrupt the beat. Donne's "knock, breathe, shine" stops three times in four words, so each verb gets its own weight.

**Repetition in a steady beat.** When a rhythm stays perfectly even, repetition can make it almost hypnotic:

> "The woods are lovely, dark and deep,
> But I have promises to keep,
> And miles to go before I sleep,
> And miles to go before I sleep."
>
> — Robert Frost, "Stopping by Woods on a Snowy Evening," 1923

The last line is repeated word for word, in the same even rhythm. The first time, "sleep" means a night's rest at the end of a journey. Said again, slowly, in the drowsy beat of a poem about dark woods, the line invites a weightier reading: the long work of a life, and the rest that ends it.

> 🔑 **Rhythm questions on the exam are effect questions.** Ask: *Where does the beat change, and what is happening in the words at that exact moment?*`,
      },
      {
        id: 'cpa2-dd-rhythm',
        type: 'dropdown-select' as const,
        content: `**What Does the Rhythm Do?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Donne\'s stressed opening, "Batter my heart," ___', options: ['enacts the violence the speaker asks for', 'softens the speaker\'s plea to God', 'slows the line to a gentle prayer', 'hides the line\'s meaning from readers'] },
            { label: 'Tennyson\'s "Break, break, break," with no light syllables, sounds like ___', options: ['waves pounding on stones', 'a calm and gentle tide', 'a lively folk dance', 'a polite conversation'] },
            { label: 'Frost\'s repeated last line, in an unchanged even beat, invites the reader to hear "sleep" as ___', options: ['more than a night\'s rest', 'a cheerful promise to wake', 'proof the journey is over', 'the name of a nearby village'] },
          ],
          correctAnswers: ['enacts the violence the speaker asks for', 'waves pounding on stones', 'more than a night\'s rest'],
          hint1: 'What does the speaker want God to do to his heart?',
          hint2: 'Three heavy words, each like a blow.',
          hint3: 'Why say the same line twice?',
          explanation: 'Donne\'s opening stress batters the line as he asks God to batter his heart; Tennyson\'s three stressed words pound like waves; and Frost\'s repetition lets "sleep" carry a second, heavier meaning beyond a night\'s rest.',
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
        content: `## Rhyme: Linking Sounds and Ideas

Rhyme is a link. Lines that end on the same sound are heard as belonging together, and a returning sound tells the ear that a unit is complete. In a closed form, these "predictable patterns" of rhyme "develop relationships among ideas in the poem" (CED STR-1.U). The exam will not ask you to label a rhyme scheme; it asks what the pattern, or a particular rhyme pair, does.

Take the first two stanzas of Frost's "Stopping by Woods on a Snowy Evening" (1923):

> "Whose woods these are I think I know.
> His house is in the village though;
> He will not see me stopping here
> To watch his woods fill up with snow.
>
> My little horse must think it queer
> To stop without a farmhouse near
> Between the woods and frozen lake
> The darkest evening of the year."

Three lines of the first stanza share a sound (know / though / snow). The odd one out, "here," does not stay unpaired: its sound becomes the main rhyme of the next stanza (queer / near / year), whose own odd word, "lake," is picked up in turn by the third. Each stanza hands a sound forward, so the poem moves like the traveler, one stop leading on to the next. In the last stanza all four lines rhyme (deep / keep / sleep / sleep), and the chain stops: the pattern itself signals the ending.

### Kinds of Rhyme

| Type | Definition | Example |
|------|------------|---------|
| **End rhyme** | rhyme at line ends | know / though |
| **Internal rhyme** | rhyme *within* a line | "I bring fresh **showers** for the thirsting **flowers**" |
| **Exact rhyme** | the sounds match fully | night / light |
| **Slant (near) rhyme** | approximate, imperfect rhyme | "**eyes** / **Paradise**" or "**soul** / **all**" |

> 💡 **Slant rhyme** is an analysis goldmine: when a poet *almost* rhymes, the friction can signal something unresolved or "off" in the poem's world (think of Emily Dickinson's deliberate near-rhymes).`,
      },
      {
        id: 'cpa3-dd-rhyme',
        type: 'dropdown-select' as const,
        content: `**Hear the Rhyme** 🔽

Say each pair aloud, then answer.`,
        exercise: {
          dropdowns: [
            { label: '"flood" rhymed with "blood":', options: ['Exact rhyme', 'Slant rhyme', 'No rhyme'] },
            { label: '"hall" rhymed with "soul":', options: ['Exact rhyme', 'Slant rhyme', 'No rhyme'] },
            { label: 'A slant rhyme on a poem\'s final lines tends to leave the ending feeling:', options: ['Unsettled', 'Resolved', 'Comic'] },
          ],
          correctAnswers: ['Exact rhyme', 'Slant rhyme', 'Unsettled'],
          hint1: 'Say each pair aloud. Do the stressed vowel sounds match exactly or only approximately?',
          hint2: '"flood/blood" truly rhyme aloud; "hall/soul" share the final "l" but the vowels differ.',
          hint3: 'A near miss denies the ear the full chime it expects.',
          explanation: 'flood/blood = exact rhyme (matching sound). hall/soul = slant rhyme (close but imperfect sound). A slant rhyme at the close withholds the full chime of an exact rhyme, so the ending tends to feel unresolved, which a poet can use to signal that something remains "off."',
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
              options: ['Sibilance that creates a hushed, whispery sound', 'Cacophony that creates a harsh, grating sound', 'Onomatopoeia that imitates the sound of a bell', 'Internal slant rhyme that unsettles the line'],
              correctAnswer: 0,
              explanation: 'The clustered soft *s* sounds (sibilance, a form of alliteration/consonance) produce a whispering, uneasy hush — euphonic in texture, matching the eerie quiet of the scene. There are no harsh stops, so it is not cacophony.',
            },
            {
              question: 'A line packed with hard *k*, *t*, and *g* sounds describing a battlefield best illustrates —',
              options: ['Cacophony echoing violence', 'Euphony that softens the violence', 'Assonance that slows the whole line', 'Slant rhyme linking the line endings'],
              correctAnswer: 0,
              explanation: 'Clustered harsh stop-consonants create cacophony; pairing that grating texture with a violent subject is "sound echoing sense." Euphony would be the opposite (smooth, pleasing), assonance is repeated vowel sounds, and slant rhyme concerns near-matching sounds at line ends.',
            },
          ],
        },
      },
      {
        id: 'cpa3-input-scheme',
        type: 'input-boxes' as const,
        content: `**Follow the Rhyme** 🔤

Read this stanza, then answer with one word each, lowercase.

> "I wandered lonely as a **cloud**
> That floats on high o'er vales and **hills**,
> When all at once I saw a **crowd**,
> A host, of golden **daffodils**;"
>
> — William Wordsworth, "I wandered lonely as a cloud," 1807`,
        exercise: {
          questions: [
            { question: 'The lonely "cloud" of line 1 is answered by a rhyme in line 3. The rhyming word is', answer: 'crowd', acceptableAnswers: ['"crowd"'] },
            { question: 'The stanza\'s last rhyme holds back its subject until the final word. That word, the flowers the poem is about, is', answer: 'daffodils', acceptableAnswers: ['"daffodils"', 'daffodil'] },
          ],
          hint1: 'Which end word sounds like "cloud"?',
          hint2: 'Which end word sounds like "hills"?',
          hint3: 'cloud / crowd; hills / daffodils.',
          explanation: 'The rhyme links the solitary "cloud" to the "crowd" that ends its loneliness, so the sound pattern carries the stanza\'s change from isolation to company. The second rhyme saves "daffodils" for the stanza\'s last word, so the subject arrives as the stanza closes.',
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
| **Hyperbole** | deliberate exaggeration | "Till a' the seas gang dry" (Burns) |
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
                'A motif of dying fire suggesting decline or an ending',
                'A warm, hopeful mood of comfort beside the hearth',
                'A synecdoche in which the embers stand for the whole house',
                'A sound pattern of harsh, clashing consonants',
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

> 🔑 **The Idea:** *Form* is the container, closed (built on predictable patterns, like a sonnet) or open; *structure* is how the argument moves through the poem (the turn, the stanza breaks); *syntax* is how sentences are built across the lines. All three are meaning-bearing, not decoration.`,
      },
      {
        id: 'cpa5-forms',
        type: 'text' as const,
        content: `## Closed and Open Forms

The CED sorts poems by how predictable their patterns are. The exam will not ask you to name a form; it asks what the form's patterns do.

| | What it is | What its patterns can do |
|------|------------|--------------|
| **Closed form** | Predictable patterns of line, stanza, rhythm and rhyme (STR-1.U), e.g. a sonnet, or a poem built on returning refrains such as "Do not go gentle into that good night" | Set up expectations: where the argument will turn, which line will return, when the poem will close |
| **Open form** | No predictable pattern of lines or stanzas, "but they may still have structures that develop relationships between ideas" (STR-1.V) | Line breaks, white space, syntax and repetition take over the shaping |

### What closed-form patterns do

| Pattern | Relationship it can create |
|---------|----------------------------|
| Fourteen lines grouped 8 + 6 | Problem in the first eight lines, response in the last six |
| Three groups of four lines, then two | Variations on an idea, then a summing-up or twist in the closing couplet |
| A refrain that returns in new contexts | Obsession; a line whose meaning shifts each time it returns |
| A steady beat without rhyme | Speech-like thinking aloud, with line breaks and pauses doing the shaping |

> 💡 **The turn** is the structural feature to look for in any sonnet. It is the pivot where the argument shifts — a "but," "yet," or change of direction (sometimes called the *volta*). It often comes near line 9, but it can be held back to the closing couplet.`,
      },
      {
        id: 'cpa5-dd-form',
        type: 'dropdown-select' as const,
        content: `**What Does the Form Do?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'A sonnet whose last two lines form a rhymed couplet often uses them to:', options: ['Sum up or twist the argument', 'Introduce a brand-new speaker', 'Repeat the poem\'s opening line', 'List new images at random'] },
            { label: 'In a closed form, a refrain that returns in new contexts tends to:', options: ['Gather new meaning each time', 'Keep exactly the same meaning', 'Replace the need for a turn', 'Mark only the poem\'s ending'] },
            { label: 'An open-form poem with no steady beat or rhyme still shapes meaning through:', options: ['Line breaks and white space', 'Its fixed rhyme pattern', 'Its regular beat', 'Its required refrains'] },
          ],
          correctAnswers: ['Sum up or twist the argument', 'Gather new meaning each time', 'Line breaks and white space'],
          hint1: 'Two rhymed lines at the very end are a natural place for closure — or a surprise.',
          hint2: 'The words stay the same; what changes around them?',
          hint3: 'Without beat or rhyme, what is left to shape the poem on the page?',
          explanation: 'A closing couplet tends to sum up or twist what came before. A refrain\'s words stay fixed while its context changes, so its meaning shifts. An open form gives up a steady beat and rhyme but still shapes meaning through line breaks, white space, syntax and repetition (CED STR-1.V).',
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
>
> — adapted from Shakespeare, *The Merchant of Venice* 3.2 ("She is not yet so old / But she may learn")

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
              question: 'A sonnet poses a question across its first eight lines, then begins line 9 with "Yet—". The most defensible reading of this "Yet" is that it —',
              options: ['Signals that the speaker has abandoned the question', 'Signals a shift from the problem toward a response', 'Signals that a second speaker now begins to talk', 'Signals that the poem will restate its question'],
              correctAnswer: 1,
              explanation: 'In a sonnet grouped eight and six, the turn often falls at line 9, and a pivot word like "Yet" signals the move from the problem posed in the first eight lines to a response in the last six. "Yet" introduces a qualification or answer, not a retreat from the question, a new speaker or a mere restatement.',
            },
            {
              question: 'A poet enjambs a line so that "she let it / go" splits the verb across the break. The most defensible reading is that the break —',
              options: [
                'Enacts the release, as the reader must "let go" and drop to the next line',
                'Marks a caesura that slows the reader down at the moment of release',
                'Signals the volta, where the poem turns from problem to resolution',
                'Creates an end-stopped line that closes off the speaker\'s thought',
              ],
              correctAnswer: 0,
              explanation: 'Form mirrors content: by splitting "let it / go," the line break makes the reader perform a small letting-go, dropping to the next line. That is enjambment doing interpretive work — the opposite of an end-stopped line, and not a mid-line pause or a sonnet\'s turn.',
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
                'Quietly contemptuous, undercutting the glamour as empty',
                'Sincerely celebratory, delighting in the glamour of the evening',
                'Openly furious, attacking the guests in harsh, direct language',
                'Neutral and descriptive, recording the scene without judgment',
              ],
              correctAnswer: 0,
              explanation: 'The connotations ("brittle," "hollow," "polished smiles") signal that the speaker sees through the glamour to something empty — a controlled, ironic contempt, not warmth or open fury. The diction is evaluative, so it is not neutral.',
            },
            {
              question: 'Why is it risky to say "the poet feels lonely" when analyzing a first-person poem?',
              options: [
                'The "I" is a crafted speaker whose feelings may differ from the poet\'s',
                'Loneliness is a mood felt by the reader, not a tone held by a speaker',
                'Claims about feelings are opinions that evidence cannot support',
                'First-person poems are written to be read aloud, not analyzed as text',
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

You now command the whole toolkit: levels of reading, rhythm, sound, figurative language, form/structure/syntax, and speaker/tone. In this final part we **assemble** them into a single argument and finish with a mastery check.`,
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
| **4. Map the devices** | Note sound, figures, rhythm *only where they do work*. |
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

**Form:** the opening quatrain of a sonnet. It piles one image of decline on another; the steady, regular beat lends a calm, almost accepting cadence.

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
                'A metaphor equating bare branches with a roofless church',
                'A simile comparing the yellow leaves to singing birds',
                'A personification giving the trees the voices of a choir',
                'An apostrophe addressing the empty church directly',
              ],
              correctAnswer: 0,
              explanation: 'The branches are not *like* ruins — they *become* "ruined choirs," a compressed metaphor. (Historically, "choirs" were the part of a church where singers sat; stripped boughs = roofless ruins where birds, the former "choir," once sang.)',
            },
            {
              question: 'The best reason to call a poem "complex" in a thesis is that —',
              options: [
                'It sustains a real tension that the evidence supports',
                'It is long and uses difficult, unfamiliar vocabulary throughout',
                'It follows a demanding fixed form with a perfect rhyme scheme',
                'It has one hidden meaning that careful readers must decode',
              ],
              correctAnswer: 0,
              explanation: 'Complexity, on the AP rubric, means a defensible tension, development (such as a turn), or ambiguity supported by the text — not mere length, vocabulary, or strict form. A poem with a single hidden meaning to decode is not complex in this sense.',
            },
          ],
        },
      },
      {
        id: 'cpa7-input-final',
        type: 'input-boxes' as const,
        content: `**Close-Reading Recall** ✍️

Single-word, lowercase answers.`,
        exercise: {
          questions: [
            { question: 'In Sonnet 73, the bare boughs become "ruined choirs": the empty branches are pictured as the ruins of a', answer: 'church', acceptableAnswers: ['chapel', 'cathedral', 'abbey'] },
            { question: 'A comparison stating one thing *is* another, with no "like" or "as," is a', answer: 'metaphor', acceptableAnswers: ['a metaphor'] },
            { question: 'When a sentence runs past the line break with no pause, that is', answer: 'enjambment', acceptableAnswers: ['enjambement', 'enjambed'] },
          ],
          hint1: 'Choirs once sang inside this building; now it stands roofless.',
          hint2: '"Hope IS the thing with feathers" — direct identity, no "like/as."',
          hint3: 'A line break crossed without a pause, carrying the sense forward, is en-________.',
          explanation: '1) church — the leafless boughs become a roofless church where the birds, its former choir, once sang. 2) metaphor — a direct, unsignaled comparison. 3) enjambment — running the sense past the line break.',
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
              question: 'In Sonnet 73\'s "When yellow leaves, or none, or few, do hang," the commas that break up the list chiefly —',
              options: [
                'Speed the line toward its final image of the singing birds',
                'Enact a mind hesitating to admit how bare the boughs are',
                'Show that the speaker cannot remember what season it is',
                'Separate three different trees the speaker is describing',
              ],
              correctAnswer: 1,
              explanation: 'Each comma is a pause in which the speaker revises the count, from "yellow leaves" to "none" to "few," so the line gropes toward bareness the way a mind reluctant to face decline would. The pauses slow rather than speed the line, the season is clearly late autumn, and the list describes one set of boughs, not three trees.',
            },
            {
              question: 'A poem\'s tone is "wistful" in its first three stanzas but turns "defiant" in the last. The most useful analytical move is to —',
              options: [
                'Locate the shift and explain what triggers it and what it means',
                'Choose the dominant tone and treat the final stanza as an exception',
                'Conclude that the poem is inconsistent and poorly controlled',
                'List every sound device so the essay covers the whole poem',
              ],
              correctAnswer: 0,
              explanation: 'A tonal shift is a gift to the analyst: pinpoint the turn, then explain its cause and significance. Ignoring half the poem, or dumping unconnected devices, abandons the complexity the rubric rewards.',
            },
            {
              question: 'Which thesis best demonstrates "technique + effect + meaning"?',
              options: [
                'Through harsh cacophony and broken enjambment, the poem makes grief feel violent, an assault the speaker cannot control.',
                'This poem uses many literary devices, such as cacophony, enjambment, and imagery, to talk about the speaker\'s feelings of grief.',
                'The poem is a sad sonnet of fourteen lines in which the speaker describes the death of someone close and the grief that follows.',
                'The poet probably felt very bad when writing this poem, since it seems to come from a real loss in the poet\'s own life.',
              ],
              correctAnswer: 0,
              explanation: 'Only the cacophony thesis names specific techniques (cacophony, enjambment), states their effect (grief feels violent), and reaches meaning (mourning as an assault the speaker cannot control). The others stop at device-listing, summary, or biography.',
            },
          ],
        },
      },
    ],
  },
]
