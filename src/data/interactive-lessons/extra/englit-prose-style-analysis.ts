import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Prose Style Analysis (AP English Literature
 * and Composition). Registry key / DB slug: 'englit-prose-style-analysis'.
 * 7 parts, gold-standard structure modeled on the Completing-the-Square pilot:
 * teach → worked passage analysis → interactive practice (multiple-choice +
 * dropdown + input-boxes) → exit quiz. Non-math topic, so concept checks favor
 * multiple-choice and dropdown over numeric input; the few input boxes ask for
 * short, unambiguous terms. Bare dollar signs in prose are escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps1-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 1 of 7 — What Style Is (and Isn't)**

---

### Topics in This Part

| Section |
|---------|
| Defining style: choices, not decoration |
| The four pillars: diction, syntax, tone, imagery |
| Reading for the *how*, not just the *what* |

> 🔑 **Key Concept:** **Style** is the sum of an author's *choices* — the words they pick, the way they arrange sentences, the attitude they project. Two writers can report the same event and produce completely different effects. On the AP Lit prose essay, your job is to analyze **how** those choices create **meaning**, not merely to summarize what happens.`,
      },
      {
        id: 'eps1-define',
        type: 'text' as const,
        content: `## Style Is a Set of Choices

Every sentence an author writes could have been written another way. **Style is what they chose instead.**

Compare these two reports of the same moment:

> A. *The door opened and a man came in.*
>
> B. *The door shuddered inward, and into the lamplight stepped a man who filled the frame.*

Both tell us a man entered. But B **chooses** vivid verbs (*shuddered*), spatial drama (*filled the frame*), and a slower rhythm — producing tension where A produces a fact.

| Element | Sentence A | Sentence B |
|---------|-----------|-----------|
| Verbs | flat (*opened, came*) | charged (*shuddered, stepped*) |
| Detail | none | lamplight, filled frame |
| Effect | neutral report | suspense, menace |

> 💡 The phrase to keep on repeat in your head: **"The author chose to..."** That phrase forces you from *plot* into *analysis*.`,
      },
      {
        id: 'eps1-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In an AP Lit prose-style analysis, your primary task is to analyze:',
              options: [
                'how the author\'s choices create meaning and effect',
                'whether you agree with the author\'s opinions',
                'what happens in the passage, in order',
                'the author\'s biography and historical period',
              ],
              correctAnswer: 0,
              explanation: 'Style analysis is about the *how*: how diction, syntax, tone, and imagery generate meaning and effect. Plot summary, personal agreement, and biography are not the goal.',
            },
            {
              question: 'Which of the following is the clearest example of analyzing rather than just identifying a device?',
              options: [
                'The author uses imagery in the passage.',
                'There is a lot of figurative language here.',
                'The decaying-garden imagery makes the family\'s wealth feel hollow and doomed.',
                'The passage contains several metaphors and similes.',
              ],
              correctAnswer: 2,
              explanation: 'Only the third option connects a specific device (decaying-garden imagery) to a specific effect (wealth feeling hollow and doomed). The others merely name or count devices.',
            },
          ],
        },
      },
      {
        id: 'eps1-pillars',
        type: 'text' as const,
        content: `## The Four Pillars of Style

Almost every prose-analysis observation lands on one of four elements:

| Pillar | Question it answers | Quick example |
|--------|--------------------|---------------|
| **Diction** | *What kind of words?* | formal vs. colloquial; harsh vs. soft |
| **Syntax** | *How are sentences built?* | short and clipped vs. long and winding |
| **Tone** | *What attitude toward the subject?* | mocking, reverent, detached |
| **Imagery** | *What sensory pictures?* | sight, sound, touch, smell, taste |

These overlap and reinforce each other — short syntax can *create* an anxious tone; harsh diction can *sharpen* an image. The best essays show how the pillars **work together** toward one effect.

> ⚠️ **Common trap:** naming a device ("the author uses imagery") without explaining its **effect**. Identification is not analysis. Always finish the thought: imagery of *what*, doing *what* to the reader?`,
      },
      {
        id: 'eps1-pillar-drill',
        type: 'input-boxes' as const,
        content: `**Name the Pillars** 🧮

Fill in the four pillars of style (one lowercase word each), in the order introduced above.

**1)** word choice = ____________
**2)** sentence construction = ____________
**3)** the author's attitude = ____________
**4)** sensory pictures = ____________`,
        exercise: {
          boxes: 4,
          correctAnswers: ['diction', 'syntax', 'tone', 'imagery'],
          hint1: 'Word choice is "d______"; sentence building is "s_____."',
          hint2: 'The author\'s attitude toward the subject is "t___."',
          hint3: 'Sensory, picture-making language (sight, sound, touch...) is "i______."',
          explanation: 'The four pillars are diction (word choice), syntax (sentence construction), tone (attitude), and imagery (sensory detail).',
        },
      },
      {
        id: 'eps1-how-not-what',
        type: 'text' as const,
        content: `## Reading for the *How*

Most students arrive in AP Lit trained to ask **"What happened?"** Style analysis demands a second, harder question: **"How is it written, and why does that matter?"**

A reliable mental loop:

1. **Notice** something specific (a word, a sentence shape, a sound).
2. **Name** the element (diction? syntax? imagery?).
3. **Connect** it to an effect or meaning.

> 🔑 **The golden sentence frame:** *"By choosing ___ (specific detail), the author creates ___ (effect), which suggests ___ (meaning)."* If you can fill all three blanks, you are doing real analysis.`,
      },
      {
        id: 'eps1-frame-drill',
        type: 'dropdown-select' as const,
        content: `**Build the Analysis** 🔽

A passage describes a battlefield using only short, fragmentary sentences and the words *mud, blood, silence*. Complete the analytic frame.`,
        exercise: {
          dropdowns: [
            { label: 'The specific choice to notice:', options: ['short, fragmentary sentences and bleak word choice', 'the author\'s nationality', 'the length of the whole book', 'the title of the chapter'] },
            { label: 'The element it belongs to:', options: ['syntax and diction', 'meter and rhyme', 'stage directions', 'a thesis statement'] },
            { label: 'A reasonable effect:', options: ['a numbed, exhausted mood that mirrors the soldiers', 'comic relief and playfulness', 'a sense of luxurious abundance', 'scientific precision'] },
          ],
          correctAnswers: ['short, fragmentary sentences and bleak word choice', 'syntax and diction', 'a numbed, exhausted mood that mirrors the soldiers'],
          hint1: 'Notice the form (sentence length) and the words themselves before anything else.',
          hint2: 'Sentence construction = syntax; word choice = diction. Both are at work here.',
          hint3: 'Clipped fragments + bleak words (mud, blood, silence) drain energy from the prose — match that to the soldiers\' state.',
          explanation: 'Fragmentary syntax plus stark, monosyllabic diction strips the prose of momentum, creating a numb, depleted mood that mirrors the soldiers\' own exhaustion. Notice → name → connect.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps2-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 2 of 7 — Diction: The Weight of Word Choice**

---

> 🔑 **The Idea:** **Diction** is an author's word choice. Words carry not just *denotation* (dictionary meaning) but *connotation* (emotional coloring). Choosing *thrifty* vs. *cheap* vs. *stingy* describes the same behavior but loads it with very different judgment.`,
      },
      {
        id: 'eps2-conn',
        type: 'text' as const,
        content: `## Denotation vs. Connotation

- **Denotation** = the literal definition.
- **Connotation** = the feelings and associations a word carries.

The three words below share roughly the same denotation but very different connotations:

| Word | Connotation |
|------|------------|
| *slender* | positive — graceful, elegant |
| *thin* | neutral |
| *scrawny* | negative — frail, undernourished |

An author who calls a character *scrawny* rather than *slender* is making a **judgment** through diction alone — before a single event occurs.

> 💡 When a word surprises you, ask: *why this word and not its neutral synonym?* The gap between the chosen word and the neutral one is where the author's attitude lives.`,
      },
      {
        id: 'eps2-conn-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A narrator describes a politician\'s smile as "oily." The connotation of "oily" most directly suggests the politician is:',
              options: ['well-groomed and clean', 'insincere and slippery', 'wealthy and successful', 'tired and overworked'],
              correctAnswer: 1,
              explanation: '"Oily" connotes slickness and falseness — a slippery, untrustworthy quality. The denotation (greasy) becomes a moral judgment through connotation.',
            },
            {
              question: 'Which phrase best describes diction that is plain, blunt, and built from one-syllable words like "cold, hard, dead"?',
              options: ['ornate, Latinate diction', 'harsh, monosyllabic diction', 'flowery, sentimental diction', 'archaic, poetic diction'],
              correctAnswer: 1,
              explanation: 'One-syllable, blunt words like cold/hard/dead are harsh and monosyllabic. "Latinate," "flowery," and "archaic" all describe the opposite — elaborate or old-fashioned word choice.',
            },
          ],
        },
      },
      {
        id: 'eps2-axes',
        type: 'text' as const,
        content: `## Useful Axes for Describing Diction

You will sound far more precise if you describe diction along **spectrums** rather than just calling it "good" or "descriptive":

| Spectrum | One end | Other end |
|----------|---------|-----------|
| Formality | formal / elevated | colloquial / slang |
| Concreteness | abstract (*freedom, dread*) | concrete (*rust, salt, knuckles*) |
| Sound | harsh / guttural | soft / liquid |
| Register | learned / Latinate | plain / Anglo-Saxon |
| Emotion | charged / loaded | clinical / detached |

> ⚠️ Avoid the empty label **"strong diction."** It says nothing. Say *harsh, monosyllabic diction* or *ornate, Latinate diction* — naming the *kind* of word choice is what earns credit.`,
      },
      {
        id: 'eps2-term-drill',
        type: 'input-boxes' as const,
        content: `**Name the Term** 🧮

Fill in the single best vocabulary term for each definition. Lowercase, one word each.

**1)** The *literal*, dictionary meaning of a word = its ____________.
**2)** The emotional associations a word carries beyond its literal meaning = its ____________.
**3)** The general term for an author's word choice = ____________.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['denotation', 'connotation', 'diction'],
          hint1: 'Think of the "deno-" word that sounds like "denote" / "define."',
          hint2: 'The feelings a word connotes — same root as "connote."',
          hint3: '"Word choice" is summarized by a single five-letter literary term starting with "d."',
          explanation: '1) denotation = literal meaning. 2) connotation = emotional associations. 3) diction = word choice overall.',
        },
      },
      {
        id: 'eps2-worked',
        type: 'text' as const,
        content: `## Worked Mini-Analysis

> *He didn't eat his dinner; he* **devoured** *it, fork* **stabbing** *and jaw* **grinding**, *until the plate was* **scoured** *clean.*

Walk the loop:

1. **Notice:** the verbs *devoured, stabbing, grinding, scoured.*
2. **Name:** violent, animalistic **diction** (and strong verb choice).
3. **Connect:** these verbs turn an ordinary meal into something feral, suggesting the character's hunger is desperate — perhaps a desperation that goes beyond food.

A sentence you could write: *"The violent, animalistic diction — devoured, stabbing, scoured — recasts eating as an act of survival, hinting that the character's deprivation runs deeper than this single meal."*

> 💡 Notice we never said "the author uses good verbs." We named the *kind* of diction and tied it to *meaning*.`,
      },
      {
        id: 'eps2-spectrum-drill',
        type: 'dropdown-select' as const,
        content: `**Pick the Precise Label** 🔽

For each word choice, choose the most accurate diction label.`,
        exercise: {
          dropdowns: [
            { label: '"steed, henceforth, thou shalt"', options: ['archaic, elevated diction', 'colloquial, slangy diction', 'clinical, scientific diction', 'harsh, guttural diction'] },
            { label: '"gonna, kinda, no biggie"', options: ['colloquial, informal diction', 'ornate, Latinate diction', 'archaic, poetic diction', 'abstract diction'] },
            { label: '"subject, dosage, variable, control group"', options: ['clinical, detached diction', 'sentimental diction', 'colloquial diction', 'figurative diction'] },
          ],
          correctAnswers: ['archaic, elevated diction', 'colloquial, informal diction', 'clinical, detached diction'],
          hint1: 'Old-fashioned words like "thou shalt" signal an archaic, elevated register.',
          hint2: '"Gonna / kinda" is everyday, casual speech — that is colloquial.',
          hint3: 'Lab vocabulary ("dosage, control group") is cold and impersonal — clinical/detached.',
          explanation: 'Old/poetic words = archaic, elevated. Casual speech = colloquial, informal. Detached lab terms = clinical. Naming the *kind* of diction beats calling it "strong."',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps3-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 3 of 7 — Syntax: The Architecture of Sentences**

---

> 🔑 **The Idea:** **Syntax** is sentence construction — length, structure, order, and punctuation. Syntax controls *pace* and *emphasis*. A page of short sentences sprints; a single page-long sentence sprawls. The shape of a sentence is itself an argument.`,
      },
      {
        id: 'eps3-length',
        type: 'text' as const,
        content: `## Sentence Length and Pace

| Syntax | Typical effect |
|--------|---------------|
| **Short / clipped** sentences | urgency, tension, finality, shock |
| **Long / flowing** sentences | reflection, abundance, breathlessness, complexity |
| **Sudden short sentence** after long ones | emphasis — it lands like a hammer |

Example of the "hammer":

> *The guests laughed and the music swelled and the lights burned gold over the dancing, glittering, endless crowd. Then the telegram came.*

The long first sentence builds momentum; the abrupt **"Then the telegram came."** stops it cold. The *contrast* in length is the effect.

> 💡 Always read for **variation**. A change in sentence length is usually a deliberate signal — slow down and ask what just shifted.`,
      },
      {
        id: 'eps3-syntax-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields..." This repetition of "we shall fight" at the start of each clause is an example of:',
              options: ['anaphora', 'asyndeton', 'a periodic sentence', 'denotation'],
              correctAnswer: 0,
              explanation: 'Repeating the same words at the *beginning* of successive clauses is anaphora. It builds insistence and momentum.',
            },
            {
              question: 'A writer ends a long, suspenseful sentence by withholding the main clause until the very last words. This structure is called a:',
              options: ['cumulative sentence', 'periodic sentence', 'fragment', 'polysyndeton'],
              correctAnswer: 1,
              explanation: 'A periodic sentence delays its main idea until the end, creating suspense. A cumulative (loose) sentence does the opposite, leading with the main idea.',
            },
            {
              question: 'The most likely effect of a sudden three-word sentence after a paragraph of long, winding ones is to:',
              options: ['confuse the reader by accident', 'create emphasis and make that short sentence stand out', 'signal that the passage is over', 'show the author ran out of ideas'],
              correctAnswer: 1,
              explanation: 'Breaking a pattern of long sentences with an abrupt short one throws emphasis onto the short sentence. Contrast in syntax is a deliberate spotlight.',
            },
          ],
        },
      },
      {
        id: 'eps3-structures',
        type: 'text' as const,
        content: `## Key Syntactic Structures

A few named structures show up constantly on AP Lit. Use the names — they read as expertise.

| Structure | Definition | Effect |
|-----------|-----------|--------|
| **Parallelism** | repeated grammatical form | rhythm, balance, building force |
| **Anaphora** | repeating the same word(s) at the start of clauses | insistence, incantation |
| **Asyndeton** | omitting conjunctions (*I came, I saw, I conquered*) | speed, breathless accumulation |
| **Polysyndeton** | piling up conjunctions (*and... and... and*) | weight, overwhelm, relentlessness |
| **Periodic sentence** | main idea withheld until the end | suspense, climax |
| **Cumulative (loose) sentence** | main idea first, details trailing after | natural, expansive, conversational |

> ⚠️ Don't just label *"this is anaphora."* Always pair it with the effect: anaphora that hammers home grief, parallelism that makes a promise feel inevitable, etc.`,
      },
      {
        id: 'eps3-struct-input',
        type: 'input-boxes' as const,
        content: `**Name the Structure** 🧮

Give the single term (one lowercase word each) for each definition.

**1)** Repeating the same word(s) at the *start* of successive clauses = ____________
**2)** A sentence that withholds its main idea until the *end* = ____________ (the type, one word)
**3)** Omitting conjunctions for speed (*I came, I saw, I conquered*) = ____________`,
        exercise: {
          boxes: 3,
          correctAnswers: ['anaphora', 'periodic', 'asyndeton'],
          hint1: 'Repetition at the *beginning* of clauses starts with "ana-".',
          hint2: 'The sentence type that saves its main clause for last is called "______ic"; the one-word root is "period___".',
          hint3: 'Dropping the "ands" for a clipped, rapid list is "asyn______".',
          explanation: '1) anaphora = front-of-clause repetition. 2) periodic = main idea withheld to the end. 3) asyndeton = conjunctions omitted for speed.',
        },
      },
      {
        id: 'eps3-effects',
        type: 'text' as const,
        content: `## Structure, Then Effect

Naming a structure is step one; the points come from the **effect**. A quick reference:

| Structure | The effect to claim |
|-----------|--------------------|
| Anaphora | drives home an idea through insistent repetition |
| Asyndeton | accelerates the prose, creating breathless speed |
| Polysyndeton | slows and weighs the prose down, feeling relentless |
| Periodic sentence | delays resolution to build suspense |

> 🔑 Template: *"The [structure] of ___ creates [effect], which underscores ___."* Pair every device with what it *does*.`,
      },
      {
        id: 'eps3-match-drill',
        type: 'dropdown-select' as const,
        content: `**Match the Structure** 🔽

Identify the syntactic device in each example.`,
        exercise: {
          dropdowns: [
            { label: '"I came, I saw, I conquered." (no conjunctions)', options: ['asyndeton', 'polysyndeton', 'anaphora', 'periodic sentence'] },
            { label: '"He ran and stumbled and rose and ran and fell again." (piled-up "and")', options: ['asyndeton', 'polysyndeton', 'parallelism', 'periodic sentence'] },
            { label: '"To err is human; to forgive, divine." (matched grammatical form)', options: ['parallelism', 'anaphora', 'asyndeton', 'cumulative sentence'] },
          ],
          correctAnswers: ['asyndeton', 'polysyndeton', 'parallelism'],
          hint1: 'Asyndeton = *absence* of conjunctions; polysyndeton = an *excess* of them.',
          hint2: 'Count the "ands." None = asyndeton. Too many = polysyndeton.',
          hint3: 'When two halves mirror the same grammar ("to err... / to forgive..."), that balanced repetition is parallelism.',
          explanation: 'Dropping conjunctions = asyndeton (speed). Stacking conjunctions = polysyndeton (weight). Mirrored grammatical structure = parallelism (balance).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps4-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 4 of 7 — Tone & Imagery: Attitude and the Senses**

---

> 🔑 **The Idea:** **Tone** is the author's attitude toward the subject; **mood** is the feeling created in the reader. **Imagery** is sensory language — the concrete details that make a passage felt rather than merely understood. Together they decide *how the passage feels.*`,
      },
      {
        id: 'eps4-tone',
        type: 'text' as const,
        content: `## Tone vs. Mood

These two are constantly confused. Keep them straight:

| Term | Whose feeling? | Example |
|------|---------------|---------|
| **Tone** | the *author's/narrator's* attitude toward the subject | sarcastic, reverent, nostalgic, bitter |
| **Mood** | the *reader's* emotional response / atmosphere | eerie, tense, peaceful, melancholy |

A narrator can adopt a *mocking tone* toward a pompous character, which creates an *amused, satirical mood* in the reader. Tone is the source; mood is the result.

> ⚠️ **Precision matters.** "The tone is negative" earns little. Reach for an exact adjective: *contemptuous, wistful, clinical, indignant, elegiac.* Build a tone vocabulary — it directly raises essay scores.`,
      },
      {
        id: 'eps4-tone-drill',
        type: 'input-boxes' as const,
        content: `**Precise Tone Words** 🧮

Replace each vague label with a precise one-word tone adjective (lowercase). Use the hint in parentheses.

**1)** "negative + mocking" → a single word meaning bitterly mocking/scornful (starts with "s," 8 letters): ____________
**2)** "sad + longing for the past" → a single word meaning fondly looking back (starts with "n"): ____________
**3)** "respectful + worshipful" → a single word meaning deeply respectful/worshipful (starts with "r"): ____________`,
        exercise: {
          boxes: 3,
          correctAnswers: ['sardonic', 'nostalgic', 'reverent'],
          hint1: 'Bitter, scornful mockery — an 8-letter word beginning "sar-".',
          hint2: 'A tender, bittersweet longing for the past begins with "nos-".',
          hint3: 'Treating something as sacred or worthy of awe begins with "rev-".',
          explanation: '1) sardonic = grimly mocking. 2) nostalgic = wistful longing for the past. 3) reverent = full of deep respect. Precise tone words beat "negative/sad/respectful."',
        },
      },
      {
        id: 'eps4-imagery',
        type: 'text' as const,
        content: `## Imagery: The Five Senses (and a Sixth)

**Imagery** is sensory detail. The classic five plus a useful extra:

| Type | Sense | Example |
|------|-------|---------|
| Visual | sight | *a sky bruised purple* |
| Auditory | sound | *the gate's iron shriek* |
| Tactile | touch | *grit between the teeth* |
| Olfactory | smell | *wet ash and rotting fruit* |
| Gustatory | taste | *the copper tang of blood* |
| Kinesthetic | movement | *limbs jerking against the current* |

Imagery does more than decorate. **Patterns** of imagery build meaning: recurring images of *light* and *decay*, of *cages* and *flight*, of *cold* and *warmth*. Trace the pattern and you find the passage's argument.

> 💡 Strongest move: identify an **imagery pattern** (not a single image) and tie it to theme — e.g., *imagery of confinement (cages, locked doors, narrow halls) mirrors the heroine's stifled ambition.*`,
      },
      {
        id: 'eps4-imagery-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A narrator describes a foolish duke with elaborate mock-praise, clearly inviting the reader to laugh at him. The narrator\'s TONE is best described as:',
              options: ['mournful', 'satirical', 'objective', 'terrified'],
              correctAnswer: 1,
              explanation: 'Mock-praise that invites the reader to laugh at its target is satirical. The tone (author\'s attitude) is one of ridicule.',
            },
            {
              question: '"The copper tang of blood filled her mouth." This line is an example of which type of imagery?',
              options: ['visual', 'auditory', 'gustatory', 'olfactory'],
              correctAnswer: 2,
              explanation: 'Taste imagery is gustatory ("tang... in her mouth"). Visual = sight, auditory = sound, olfactory = smell.',
            },
            {
              question: 'The single MOST sophisticated thing to do with imagery in an essay is to:',
              options: [
                'count how many images appear',
                'identify a recurring imagery pattern and connect it to theme',
                'note that imagery makes writing "more descriptive"',
                'list every sense the author uses',
              ],
              correctAnswer: 1,
              explanation: 'Connecting a *pattern* of imagery to the passage\'s theme is far stronger than counting, generic praise, or sense-listing. Patterns reveal meaning.',
            },
          ],
        },
      },
      {
        id: 'eps4-senses',
        type: 'text' as const,
        content: `## Sorting Imagery by Sense

When you spot vivid detail, name the **sense** it engages — it makes your analysis specific:

| Cue words | Sense / type |
|-----------|-------------|
| color, light, shape | visual |
| sound, ring, hush | auditory |
| touch, texture, temperature | tactile |
| smell, scent, stench | olfactory |
| taste, flavor, tang | gustatory |

> 💡 A passage that floods one sense (say, relentless *sound* imagery) often does so for a reason — perhaps to overwhelm, to disorient, or to immerse.`,
      },
      {
        id: 'eps4-sense-drill',
        type: 'dropdown-select' as const,
        content: `**Sort the Senses** 🔽

Identify the type of imagery in each phrase.`,
        exercise: {
          dropdowns: [
            { label: '"the reek of low tide and diesel"', options: ['olfactory', 'visual', 'auditory', 'gustatory'] },
            { label: '"the clang and screech of the foundry"', options: ['auditory', 'tactile', 'olfactory', 'visual'] },
            { label: '"sweat slicked her palms, grit under every nail"', options: ['tactile', 'gustatory', 'auditory', 'visual'] },
          ],
          correctAnswers: ['olfactory', 'auditory', 'tactile'],
          hint1: '"Reek" appeals to the nose — which sense is that?',
          hint2: '"Clang" and "screech" are sounds — name that imagery type.',
          hint3: '"Slicked... grit under the nails" is about touch and texture.',
          explanation: 'Reek = olfactory (smell). Clang/screech = auditory (sound). Slick sweat and grit = tactile (touch). Naming the sense sharpens the analysis.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps5-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 5 of 7 — Point of View, Voice & Figurative Layers**

---

> 🔑 **The Idea:** *Who* tells the story shapes everything we're allowed to feel and know. **Narrative point of view** filters the events; **figurative language** (metaphor, simile, personification, hyperbole, irony) adds layers of meaning on top of the literal.`,
      },
      {
        id: 'eps5-pov',
        type: 'text' as const,
        content: `## Point of View

| POV | Pronouns / signal | What it controls |
|-----|------------------|------------------|
| **First person** | *I, we* | intimacy + limitation (we know only what the narrator knows) |
| **Second person** | *you* | implicates the reader; rare, unsettling |
| **Third limited** | *he/she* + one mind | close to a single character's thoughts |
| **Third omniscient** | *he/she* + any mind | god's-eye view; can roam between characters |

A special, high-value concept:

- **Unreliable narrator** — a first-person voice we cannot fully trust (biased, naïve, deceptive, or self-deceiving). The *gap* between what the narrator claims and what we infer is itself the meaning.

> 💡 Ask: *What does this narrator's position let them see — and, crucially, what does it hide?* Limitation is a tool, not a flaw.`,
      },
      {
        id: 'eps5-pov-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A first-person narrator insists he is calm and rational, but his frantic, contradictory account makes the reader doubt him. This narrator is best described as:',
              options: ['omniscient', 'unreliable', 'second-person', 'objective'],
              correctAnswer: 1,
              explanation: 'When the gap between what the narrator claims and what we infer makes us distrust him, he is an unreliable narrator. That gap is where the passage\'s meaning lives.',
            },
            {
              question: 'A character cheerfully steps onto a bridge the reader has just been told is about to collapse. The reader\'s superior knowledge here creates:',
              options: ['verbal irony', 'dramatic irony', 'a simile', 'hyperbole'],
              correctAnswer: 1,
              explanation: 'Dramatic irony occurs when the reader knows something a character does not. Verbal irony is about saying the opposite of what one means.',
            },
          ],
        },
      },
      {
        id: 'eps5-figurative',
        type: 'text' as const,
        content: `## Figurative Language Layers

| Device | Definition | Quick example |
|--------|-----------|---------------|
| **Metaphor** | direct comparison (no "like/as") | *the city was a furnace* |
| **Simile** | comparison using *like* or *as* | *quiet as a held breath* |
| **Personification** | human traits to nonhuman things | *the wind complained* |
| **Hyperbole** | deliberate exaggeration | *I've told you a million times* |
| **Understatement** | deliberate downplaying | *"a bit of a scratch"* (of a deep wound) |
| **Verbal irony** | saying the opposite of what's meant | *"Lovely weather"* in a hurricane |

These create the *gap* in which meaning lives. Irony, especially, is the engine of satire: the distance between what is said and what is meant **is** the criticism.

> ⚠️ Don't confuse the **types of irony**: *verbal* (saying ≠ meaning), *situational* (outcome ≠ expectation), *dramatic* (reader knows what a character does not).`,
      },
      {
        id: 'eps5-fig-input',
        type: 'input-boxes' as const,
        content: `**Name the Device** 🧮

Give the single term (one lowercase word each).

**1)** A comparison using "like" or "as" = ____________
**2)** A direct comparison with NO "like/as" (e.g., *the city was a furnace*) = ____________
**3)** Deliberate, obvious exaggeration (e.g., *a million times*) = ____________`,
        exercise: {
          boxes: 3,
          correctAnswers: ['simile', 'metaphor', 'hyperbole'],
          hint1: 'The "like/as" comparison is a "sim___".',
          hint2: 'A comparison without "like/as" that says one thing *is* another is a "meta____".',
          hint3: 'Over-the-top exaggeration for effect is "hyper____".',
          explanation: '1) simile (uses like/as). 2) metaphor (direct, no like/as). 3) hyperbole (exaggeration). Keep simile vs. metaphor straight by checking for "like/as."',
        },
      },
      {
        id: 'eps5-irony-note',
        type: 'text' as const,
        content: `## Why the Gap Matters

Figurative language matters because it opens a **gap** between the literal and the intended. Your job is to read *into* that gap.

- A **metaphor** asks: what does equating X with Y reveal? (*the city as furnace* → relentless, consuming heat)
- **Irony** asks: why say the opposite? (the gap *is* the criticism)
- **Personification** asks: why give this object a will? (the storm "punishing" the coast feels vengeful, fated)

> 🔑 Never stop at the label. The meaning lives in the *distance* between what is said and what is meant.`,
      },
      {
        id: 'eps5-fig-drill',
        type: 'dropdown-select' as const,
        content: `**Identify the Device** 🔽`,
        exercise: {
          dropdowns: [
            { label: '"The old house groaned and settled in its sleep."', options: ['personification', 'hyperbole', 'simile', 'understatement'] },
            { label: '"My backpack weighs a literal ton today."', options: ['hyperbole', 'metaphor', 'verbal irony', 'simile'] },
            { label: 'Surveying total wreckage: "Well, that went perfectly."', options: ['verbal irony', 'personification', 'simile', 'metaphor'] },
            { label: '"Her courage was a fortress that no fear could breach."', options: ['metaphor', 'simile', 'understatement', 'hyperbole'] },
          ],
          correctAnswers: ['personification', 'hyperbole', 'verbal irony', 'metaphor'],
          hint1: 'A house "groaning in its sleep" gets human/living traits — that names one device.',
          hint2: '"A literal ton" is impossible exaggeration; saying the opposite of the truth ("perfectly") is irony.',
          hint3: '"Courage WAS a fortress" is a direct comparison with no "like/as" — that is the metaphor.',
          explanation: 'Groaning house = personification. "A literal ton" = hyperbole. "Went perfectly" amid ruin = verbal irony. "Courage was a fortress" (no like/as) = metaphor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps6-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 6 of 7 — Putting It Together: A Full Worked Analysis**

---

> 🔑 **Goal:** Take everything — diction, syntax, tone, imagery, POV, figurative language — and assemble it into a real analytic paragraph, the kind that earns the AP "Analysis" points.`,
      },
      {
        id: 'eps6-passage',
        type: 'text' as const,
        content: `## The Passage

Read this short invented passage closely:

> *The factory swallowed them at dawn and gave them back at dusk, husks. Inside, the machines never tired — they hummed, they clanged, they hungered. Marta fed them, hour upon hour upon hour, her hands learning a language her mind had long stopped translating. Outside, somewhere, there was sky. She was almost sure of it.*

Before reading on, try to notice **three** specific stylistic choices and what each one does.`,
      },
      {
        id: 'eps6-spot-input',
        type: 'input-boxes' as const,
        content: `**Spot the Device** 🧮

Name the single element at work in each line from the passage (one lowercase word each).

**1)** *"The factory swallowed them... gave them back... husks"* — a direct comparison with no "like/as" = ____________
**2)** *"they hummed, they clanged, they hungered"* — nonhuman machines given living/human action = ____________
**3)** *"hour upon hour upon hour"* — the deliberate restating of words for effect = ____________`,
        exercise: {
          boxes: 3,
          correctAnswers: ['metaphor', 'personification', 'repetition'],
          hint1: 'A factory that "swallows" workers is being compared to a creature with no "like/as" — that is a meta____.',
          hint2: 'Machines that "hunger" are given human appetite — that device starts with "person-".',
          hint3: '"hour upon hour upon hour" simply repeats — name that plain device ("rep______").',
          explanation: '1) metaphor (factory as devouring creature). 2) personification (machines that hunger). 3) repetition ("hour upon hour upon hour" enacts monotony).',
        },
      },
      {
        id: 'eps6-breakdown',
        type: 'text' as const,
        content: `## The Breakdown

| Choice (notice) | Element (name) | Effect (connect) |
|-----------------|---------------|------------------|
| *"swallowed... gave them back... husks"* | metaphor + diction | the factory becomes a devouring creature; workers are emptied out |
| *"they hummed, they clanged, they hungered"* | parallelism + personification | the machines feel alive and predatory; rhythm builds menace |
| *"hour upon hour upon hour"* | repetition (polysyndeton-like piling) | enacts monotony; the reader *feels* the grind |
| *"She was almost sure of it."* | short sentence + understatement | sudden brevity isolates her doubt; the world beyond work has grown unreal |

Notice how the choices **converge** on one idea: industrial labor consumes the human being. That convergence — many devices, one effect — is the heart of a strong essay.

> 💡 You do not need to catch *every* device. Catch the few that **point the same direction**, and build your paragraph around that shared effect.`,
      },
      {
        id: 'eps6-thesis-drill',
        type: 'dropdown-select' as const,
        content: `**Assemble the Paragraph** 🔽

Build a strong analytic claim about the passage above.`,
        exercise: {
          dropdowns: [
            { label: 'Strongest thesis:', options: [
              'Through devouring metaphors and grinding repetition, the passage portrays industrial labor as a force that hollows out the human worker.',
              'This passage is about a woman named Marta who works in a factory.',
              'The author uses many literary devices in this passage.',
              'The passage has good imagery and a sad tone.',
            ] },
            { label: 'Best evidence to cite first:', options: [
              'the factory "swallowed them... and gave them back... husks"',
              'the passage is set at a factory',
              'Marta is the main character',
              'the passage is fairly short',
            ] },
            { label: 'Best closing move:', options: [
              'explain how the brief final sentence isolates Marta\'s fading certainty that a world exists beyond the factory',
              'summarize the plot again',
              'guess the author\'s nationality',
              'say the passage was enjoyable to read',
            ] },
          ],
          correctAnswers: [
            'Through devouring metaphors and grinding repetition, the passage portrays industrial labor as a force that hollows out the human worker.',
            'the factory "swallowed them... and gave them back... husks"',
            'explain how the brief final sentence isolates Marta\'s fading certainty that a world exists beyond the factory',
          ],
          hint1: 'A strong thesis names the *devices* AND the *meaning* — not just "uses devices" or plot summary.',
          hint2: 'Lead with the most loaded line — the devouring "swallowed... husks" metaphor — not a plot fact.',
          hint3: 'Close by analyzing the abrupt last sentence and what its brevity does to Marta\'s sense of the outside world.',
          explanation: 'The winning choices each pair a *specific device* with *meaning*: the devouring metaphor, the "swallowed... husks" evidence, and the isolating final sentence. Plot summary and vague praise score nothing.',
        },
      },
      {
        id: 'eps6-traps-text',
        type: 'text' as const,
        content: `## The Three Essay-Killers

Even strong readers lose points by drifting into these three habits. Watch for them in your own writing:

| Killer | What it looks like | The fix |
|--------|--------------------|---------|
| **Summary** | retelling the plot in order | swap "then X happens" for "the author chooses X, which..." |
| **Naming without effect** | "uses imagery and diction" | always finish "...which creates / suggests ___" |
| **Vague thesis** | "the author uses many devices" | claim a *specific* meaning or effect |

> ⚠️ A single device tied to meaning is worth more than ten devices merely listed. Depth beats breadth.`,
      },
      {
        id: 'eps6-trap-check',
        type: 'multiple-choice' as const,
        content: `**Avoiding the Traps** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence would WEAKEN an AP Lit style-analysis essay the most?',
              options: [
                'The personification of the machines ("they hungered") makes labor feel like being consumed by a living predator.',
                'First, Marta goes to the factory, then she works all day, and then it gets dark.',
                'The clipped final sentence severs Marta from the outside world, dramatizing her isolation.',
                'The metaphor of the factory "swallowing" workers reduces them to food.',
              ],
              correctAnswer: 1,
              explanation: 'Option B is pure plot summary — sequence of events with no analysis of choices or effects. The other three each tie a device to meaning.',
            },
            {
              question: 'The phrase "many devices converge on one effect" is valuable in an essay because it:',
              options: [
                'lets you avoid quoting the passage',
                'shows how separate stylistic choices work together to build a unified meaning',
                'proves you memorized the most terms',
                'replaces the need for a thesis',
              ],
              correctAnswer: 1,
              explanation: 'Showing convergence — multiple choices pointing to one meaning — is exactly the synthesis AP readers reward. It is not a substitute for quoting or for a thesis; it organizes them.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englit-prose-style-analysis',
    sections: [
      {
        id: 'eps7-intro',
        type: 'text' as const,
        content: `# 🖋️ Prose Style Analysis

**Part 7 of 7 — The Prose Essay & Mastery Check**

---

You can now read for diction, syntax, tone, imagery, point of view, and figurative language — and assemble them into analysis. This final part turns those skills into **AP free-response strategy** and finishes with an Exit Quiz.`,
      },
      {
        id: 'eps7-essay',
        type: 'text' as const,
        content: `## The AP Prose Essay (Free-Response Question 2)

The prose-analysis FRQ is scored on a **6-point rubric**: 1 point for the **thesis**, up to **4 points** for **evidence + commentary**, and 1 point for **sophistication**.

A workflow that hits all three:

1. **Read twice.** First for plot, then annotating style choices.
2. **Find the pattern.** What do several choices have in common?
3. **Write a defensible thesis** naming the effect/meaning — not "the author uses devices."
4. **Body = evidence + commentary**, weighted toward *commentary* (the *why*).
5. **Earn sophistication** by addressing complexity: tension, shift, or how the parts unify.

> ⚠️ **Top score-killers:** (1) summarizing instead of analyzing; (2) naming devices without effect; (3) a vague thesis ("the author uses imagery and diction"). Each of these caps your score.`,
      },
      {
        id: 'eps7-rubric-check',
        type: 'multiple-choice' as const,
        content: `**Strategy Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the AP Lit prose FRQ, the largest share of points comes from:',
              options: ['the thesis statement', 'evidence and commentary', 'sophistication', 'correct spelling'],
              correctAnswer: 1,
              explanation: 'The rubric awards 1 point for thesis, up to 4 for evidence + commentary, and 1 for sophistication. Evidence + commentary is the heaviest section — and commentary (the "why") is where most points are won or lost.',
            },
            {
              question: 'Which thesis is most likely to EARN the thesis point?',
              options: [
                'The author uses diction, syntax, and imagery in this passage.',
                'This passage is about a sad factory worker.',
                'By rendering the factory as a living predator, the passage frames industrial labor as a force that consumes human identity.',
                'There are many literary devices to discuss here.',
              ],
              correctAnswer: 2,
              explanation: 'A thesis must make a defensible claim about meaning/effect. Only the third does so; the others list devices, summarize, or merely promise discussion.',
            },
          ],
        },
      },
      {
        id: 'eps7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Element | What to look for | What to say |
|---------|-----------------|-------------|
| **Diction** | connotation, formality, sound | "harsh, monosyllabic diction creates..." |
| **Syntax** | length, parallelism, periodic/loose | "clipped syntax enacts urgency..." |
| **Tone** | author's attitude (precise adjective) | "the sardonic tone undercuts..." |
| **Imagery** | sensory *patterns* | "the imagery of decay suggests..." |
| **POV** | who knows what; reliability | "the limited narrator hides..." |
| **Figurative** | metaphor, irony, personification | "the irony exposes..." |

> 🔑 **The one habit that matters most:** for every device you name, finish the sentence with **"...which creates / suggests / reveals ___."** Identification without effect is the difference between a 3 and a 6.`,
      },
      {
        id: 'eps7-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Mastery** 🔽

Match each excerpt to the element doing the heaviest lifting.`,
        exercise: {
          dropdowns: [
            { label: '"Cold. Sharp. Final. The verdict fell."', options: ['clipped syntax', 'omniscient POV', 'gustatory imagery', 'simile'] },
            { label: '"a stench of brine, diesel, and rot rolled off the docks"', options: ['olfactory imagery', 'periodic sentence', 'verbal irony', 'understatement'] },
            { label: '"The mountain shrugged off the climbers and went back to sleep."', options: ['personification', 'asyndeton', 'denotation', 'parallelism'] },
          ],
          correctAnswers: ['clipped syntax', 'olfactory imagery', 'personification'],
          hint1: 'One-word fragments ("Cold. Sharp. Final.") are about *sentence construction* — that points to syntax.',
          hint2: '"Stench... brine... rot" appeals to the nose — name that sense.',
          hint3: 'A mountain that "shrugs" and "sleeps" is given human action — that device starts with "person-".',
          explanation: 'Fragmentary one-word sentences = clipped syntax (finality). Smell language = olfactory imagery. A mountain that shrugs and sleeps = personification.',
        },
      },
      {
        id: 'eps7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'An author describes a villain\'s laugh as "a sound like rusted hinges." This comparison using "like" is a:',
              options: ['metaphor', 'simile', 'personification', 'periodic sentence'],
              correctAnswer: 1,
              explanation: 'A comparison using "like" or "as" is a simile. (A metaphor would say the laugh *was* rusted hinges, with no "like.") The unpleasant comparison also colors the villain through harsh imagery.',
            },
            {
              question: 'Which describes the difference between TONE and MOOD most accurately?',
              options: [
                'Tone is the reader\'s feeling; mood is the author\'s attitude.',
                'Tone is the author\'s attitude toward the subject; mood is the atmosphere/feeling created in the reader.',
                'They mean exactly the same thing.',
                'Tone applies only to poetry; mood only to prose.',
              ],
              correctAnswer: 1,
              explanation: 'Tone = the author\'s/narrator\'s attitude toward the subject; mood = the feeling or atmosphere created in the reader. Tone is the cause; mood is the effect.',
            },
            {
              question: 'The single best way to turn device-spotting into genuine analysis is to:',
              options: [
                'list as many devices as possible',
                'connect each device to the specific effect or meaning it creates',
                'summarize the passage\'s plot first',
                'always use the longest literary terms available',
              ],
              correctAnswer: 1,
              explanation: 'Analysis means tying each named device to its effect or meaning ("...which creates / suggests / reveals ___"). Listing, summarizing, and jargon-stacking are not analysis.',
            },
          ],
        },
      },
    ],
  },
]
