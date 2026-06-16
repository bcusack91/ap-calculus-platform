import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rhetorical Devices (AP English Language & Composition).
 * Registry key / DB Topic.slug: 'englang-rhetorical-devices'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked rhetorical analysis → Exit Quiz. Non-math humanities topic, so concept checks
 * favor multiple-choice and dropdown-select, with short-answer input-boxes used for
 * device-naming drills. No LaTeX needed; any bare dollar signs in prose are escaped as \$.
 * Every device, definition, and example below was verified before writing.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd1-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 1 of 7 — What Rhetoric Is and Why Devices Matter**

---

### Topics in This Part

| Section |
|---------|
| Rhetoric, Audience, and Purpose |
| The Rhetorical Situation (SOAPSTone) |
| Device vs. Effect: the move you must make on the exam |

> 🔑 **Key Concept:** A **rhetorical device** is a deliberate language choice a writer makes to *act on* an audience — to persuade, move, clarify, or amuse. On the AP exam you are never asked to merely *name* a device; you are asked what the device *does* to the reader and how it advances the writer's purpose.`,
      },
      {
        id: 'erd1-rhetoric',
        type: 'text' as const,
        content: `## Rhetoric, Audience, and Purpose

**Rhetoric** is the art of effective or persuasive communication. Aristotle defined it as "the faculty of observing in any given case the available means of persuasion." Every rhetorical choice answers three questions:

- **Who** is the audience? (their knowledge, values, biases)
- **What** is the purpose? (to persuade, inform, satirize, console, inspire)
- **How** will language achieve it? (the devices)

A device that works for one audience can fail for another. A solemn metaphor that moves mourners at a funeral would feel absurd in a stand-up routine. So we always read a device **in context**.

> 💡 **The AP move:** Devices are *tools*, not trophies. Spotting "anaphora" earns nothing; explaining that the repeated opening builds *rhythm and urgency that hammer the audience toward agreement* earns the point.`,
      },
      {
        id: 'erd1-soapstone',
        type: 'text' as const,
        content: `## The Rhetorical Situation: SOAPSTone

Before naming devices, map the **rhetorical situation**. A handy acronym is **SOAPSTone**:

| Letter | Element | Question it answers |
|--------|---------|---------------------|
| **S** | Speaker | Who is the voice, and what is their credibility? |
| **O** | Occasion | What event or context prompted this? |
| **A** | Audience | Who is meant to receive it? |
| **P** | Purpose | What does the speaker want to happen? |
| **S** | Subject | What is the text about? |
| **Tone** | Tone | What is the speaker's attitude? |

A device's *effect* depends on every one of these. "I have a dream" lands as it does because the **speaker** (King), the **occasion** (the 1963 March on Washington), and the **audience** (a nation watching) all charge those four words with meaning.

> 🔑 **Key Idea:** Identify the situation first, then ask how each device serves the **purpose** for that **audience**. Purpose is the hinge of all rhetorical analysis.`,
      },
      {
        id: 'erd1-check-purpose',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the AP English Language exam, what are you primarily asked to do with a rhetorical device?',
              options: [
                'Name the device using its Greek or Latin term',
                'Explain the effect the device has on the audience and how it advances the writer’s purpose',
                'Count how many times the device appears in the passage',
                'Replace the device with a plainer phrasing',
              ],
              correctAnswer: 1,
              explanation: 'AP rewards analysis of *function*, not labeling. Naming a device earns nothing on its own; you must connect the choice to its effect on the audience and the writer’s purpose.',
            },
            {
              question: 'In SOAPSTone, which element is the "hinge" that most rhetorical analysis turns on?',
              options: ['Subject', 'Occasion', 'Purpose', 'Speaker'],
              correctAnswer: 2,
              explanation: 'Purpose answers "What does the speaker want to happen?" Every device is judged by how well it serves that purpose for the intended audience.',
            },
          ],
        },
      },
      {
        id: 'erd1-three-appeals-preview',
        type: 'text' as const,
        content: `## A Map of What’s Coming

The rest of this lesson moves from the *big strategy* of persuasion down to the *small machinery* of individual devices:

- **Part 2 — Ethos, Pathos, Logos:** the three classical appeals.
- **Part 3 — Schemes:** devices of *word order and arrangement* (repetition, parallelism, antithesis).
- **Part 4 — Tropes:** devices of *meaning* (metaphor, irony, hyperbole, understatement).
- **Part 5 — Diction, Tone, and Syntax:** how word choice and sentence shape create effect.
- **Part 6 — Putting It Together:** analyzing a full passage like an AP reader.
- **Part 7 — Mastery Check & Exit Quiz.**

> ⚠️ **Don’t memorize a glossary.** A student who knows ten devices *deeply* — what each one does and why a writer would reach for it — outscores a student who can recite fifty names.`,
      },
      {
        id: 'erd1-check-situation',
        type: 'dropdown-select' as const,
        content: `**Map the Situation** 🔽

A senator delivers a televised speech urging Congress to fund flood relief after a hurricane. Identify each SOAPSTone element.`,
        exercise: {
          dropdowns: [
            { label: 'Speaker:', options: ['the hurricane', 'the senator', 'the flood victims', 'Congress'] },
            { label: 'Occasion:', options: ['a routine budget hearing', 'the aftermath of a hurricane', 'an election victory', 'a book launch'] },
            { label: 'Purpose:', options: ['to entertain viewers', 'to persuade Congress to fund relief', 'to describe weather patterns', 'to apologize'] },
          ],
          correctAnswers: ['the senator', 'the aftermath of a hurricane', 'to persuade Congress to fund relief'],
          hint1: 'The Speaker is the voice delivering the message — the person who chose the words.',
          hint2: 'The Occasion is the event that prompted the speech.',
          hint3: 'The Purpose is the specific action the speaker wants the audience to take.',
          explanation: 'Speaker = the senator (the voice); Occasion = the hurricane aftermath (the prompting event); Purpose = persuade Congress to fund relief (the desired action). Every device in such a speech would be judged against that persuasive purpose.',
        },
      },
      {
        id: 'erd1-soapstone-letters',
        type: 'input-boxes' as const,
        content: `**Recall the Acronym** ✍️

Fill in the missing SOAPSTone elements. Type each word in lowercase, exactly as named in the lesson.

**1)** **S** — the voice delivering the message is the \\_\\_\\_\\_\\_\\_\\_.
**2)** **A** — the intended receiver of the message is the \\_\\_\\_\\_\\_\\_\\_.
**3)** **P** — the action the speaker wants is the \\_\\_\\_\\_\\_\\_\\_ (the analysis "hinge").`,
        exercise: {
          boxes: 3,
          correctAnswers: ['speaker', 'audience', 'purpose'],
          hint1: 'The first S in SOAPSTone is the person whose words these are.',
          hint2: 'The A is whoever the message is aimed at.',
          hint3: 'The P is what the speaker wants to happen — the hinge of rhetorical analysis.',
          explanation: 'S = speaker (the voice), A = audience (the receiver), P = purpose (the desired action). Purpose is the element every device is ultimately judged against.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd2-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 2 of 7 — The Three Appeals: Ethos, Pathos, Logos**

---

> 🔑 **The Idea:** Aristotle identified three modes of persuasion. **Ethos** appeals through the speaker’s *credibility*, **pathos** through the audience’s *emotion*, and **logos** through *logic and evidence*. Nearly every rhetorical device ultimately serves one of these three.`,
      },
      {
        id: 'erd2-appeals',
        type: 'text' as const,
        content: `## The Three Appeals

| Appeal | Greek root | Persuades by | Signals to look for |
|--------|-----------|--------------|---------------------|
| **Ethos** | "character" | trust in the speaker | credentials, shared values, fair tone, "as a doctor…" |
| **Pathos** | "suffering / feeling" | stirring emotion | vivid imagery, anecdotes, charged diction, appeals to fear or hope |
| **Logos** | "word / reason" | logic and evidence | statistics, facts, cause-effect, syllogisms, "studies show…" |

**Ethos** — *"I have spent thirty years as an emergency-room nurse, and I can tell you…"* The speaker borrows authority from experience.

**Pathos** — *"Picture your own child trapped in that water, calling a name no one can hear."* The appeal targets the heart.

**Logos** — *"Relief funding returns \\$4 in avoided damage for every \\$1 spent."* The appeal targets reason.

> 💡 The strongest persuasion usually **braids all three**: a credible speaker (ethos) presents hard evidence (logos) in language that makes us *care* (pathos).`,
      },
      {
        id: 'erd2-check-identify',
        type: 'multiple-choice' as const,
        content: `**Identify the Appeal** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which appeal is at work? "According to the CDC, vaccination has reduced measles cases by 99% since 1963."',
              options: ['Ethos — credibility', 'Pathos — emotion', 'Logos — logic and evidence', 'None of these'],
              correctAnswer: 2,
              explanation: 'A precise statistic from a study is a textbook appeal to logos — persuasion through evidence and reason. (The CDC citation adds a touch of ethos, but the dominant move is the data.)',
            },
            {
              question: '"As someone who lost a brother to this disease, I beg you to listen." The phrase "As someone who lost a brother" primarily builds:',
              options: ['Logos', 'Ethos', 'Antithesis', 'Logos and only logos'],
              correctAnswer: 1,
              explanation: 'Personal experience establishes the speaker’s standing to speak — ethos. (The loss also stirs pathos, but the clause "as someone who…" is doing credibility work.)',
            },
          ],
        },
      },
      {
        id: 'erd2-pathos-deep',
        type: 'text' as const,
        content: `## Why Pathos Gets Misjudged

Students often treat **pathos** as cheap or manipulative. It isn’t inherently so. A surgeon describing a patient’s recovery, or a witness recounting a flood, may use emotion *honestly* to convey the human stakes that statistics flatten.

Pathos becomes a **fallacy** only when emotion *substitutes* for reasoning rather than supporting it — for example, when fear is stoked to dodge an honest look at evidence.

> ⚠️ **AP analysis tip:** Don’t label every emotional sentence "pathos" and stop. Ask: *what* emotion, aimed at *whom*, to produce *what* response that serves the purpose? "Pathos" alone is a name; the analysis is in the *how* and *why*.`,
      },
      {
        id: 'erd2-check-match',
        type: 'dropdown-select' as const,
        content: `**Match Strategy to Appeal** 🔽

A charity’s fundraising letter uses several moves. Classify each.`,
        exercise: {
          dropdowns: [
            { label: '"Our founder is a Nobel-winning economist."', options: ['ethos', 'pathos', 'logos'] },
            { label: '"\\$1 feeds a family for a week — our audited reports prove it."', options: ['ethos', 'pathos', 'logos'] },
            { label: '"Meet Amara, 7, who walks six miles for clean water."', options: ['ethos', 'pathos', 'logos'] },
          ],
          correctAnswers: ['ethos', 'logos', 'pathos'],
          hint1: 'Credentials and reputation build trust in the speaker — that’s ethos.',
          hint2: 'A measurable claim backed by audited reports is evidence — that’s logos.',
          hint3: 'A named, vivid individual we are meant to feel for targets emotion — that’s pathos.',
          explanation: 'Credentials = ethos; an audited, quantified claim = logos; a vivid sympathetic individual (Amara) = pathos. Real persuasion braids all three, but each move here leans on one appeal.',
        },
      },
      {
        id: 'erd2-name-appeal',
        type: 'input-boxes' as const,
        content: `**Name the Appeal** ✍️

Type the single appeal each sentence relies on most. Use exactly one of: **ethos**, **pathos**, or **logos** (lowercase).

**1)** "Three peer-reviewed trials found the same result."
**2)** "Imagine never hearing your mother’s voice again."
**3)** "I’ve practiced law for forty years, and I have never seen a clearer case."`,
        exercise: {
          boxes: 3,
          correctAnswers: ['logos', 'pathos', 'ethos'],
          hint1: 'Evidence and reasoning = logos; emotion = pathos; speaker credibility = ethos.',
          hint2: '"Peer-reviewed trials" is data; "imagine never hearing" targets feeling.',
          hint3: '"I’ve practiced law for forty years" asserts the speaker’s authority.',
          explanation: '1) logos (repeated evidence). 2) pathos (an emotional appeal to fear/loss). 3) ethos (decades of experience establish credibility).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd3-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 3 of 7 — Schemes: Devices of Arrangement**

---

> 🔑 **The Idea:** A **scheme** is a device that changes the *order or arrangement* of words without changing their literal meaning. Schemes work on the *ear* — through repetition, balance, and rhythm — to make ideas memorable and forceful.`,
      },
      {
        id: 'erd3-schemes',
        type: 'text' as const,
        content: `## The Core Schemes

| Scheme | What it does | Example |
|--------|-------------|---------|
| **Anaphora** | repeats the *same opening words* across clauses | "We shall fight on the beaches, we shall fight on the landing grounds…" |
| **Epistrophe** | repeats the *same ending words* | "…of the people, by the people, for the people." |
| **Parallelism** | matches grammatical *structure* across items | "to err is human; to forgive, divine" |
| **Antithesis** | balances *opposing* ideas in parallel form | "That’s one small step for man, one giant leap for mankind." |
| **Asyndeton** | omits conjunctions for speed | "I came, I saw, I conquered." |
| **Polysyndeton** | piles on conjunctions for weight | "and the rain… and the wind… and the cold." |

> 💡 **Effect, not label:** Anaphora doesn’t just "repeat words" — the drumbeat opening builds **rhythm and emotional momentum**, pulling the audience along clause by clause toward the speaker’s conclusion.`,
      },
      {
        id: 'erd3-check-schemes',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lincoln’s "government of the people, by the people, for the people" repeats "the people" at the *end* of each phrase. This scheme is:',
              options: ['Anaphora', 'Epistrophe', 'Asyndeton', 'Antithesis'],
              correctAnswer: 1,
              explanation: 'Epistrophe is repetition at the *end* of successive phrases (epi- = "upon," strophe = "turning back"). Anaphora would be repetition at the *beginning*.',
            },
            {
              question: 'Which device is illustrated by Caesar’s "I came, I saw, I conquered" (no "and")?',
              options: ['Polysyndeton', 'Asyndeton', 'Anaphora', 'Antithesis'],
              correctAnswer: 1,
              explanation: 'Asyndeton omits conjunctions, creating a clipped, accelerating rhythm that conveys swift, decisive action.',
            },
          ],
        },
      },
      {
        id: 'erd3-antithesis',
        type: 'text' as const,
        content: `## A Closer Look: Antithesis and Parallelism

**Parallelism** is the backbone scheme: it sets matching grammatical structures side by side so ideas feel balanced and complete. "Easy come, easy go" pairs two two-word clauses.

**Antithesis** is parallelism *put in service of contrast*. The parallel frame makes the opposition land harder:

> "Ask not what your country can do for you — ask what you can do for your country." (Kennedy)

The two halves share an identical structure ("ask… what… can do for…"), and that mirror makes the *reversal* — from receiving to giving — unforgettable.

> 🔑 **Key Idea:** Antithesis = **parallel structure + opposing ideas.** The balance is what gives the contrast its snap.`,
      },
      {
        id: 'erd3-check-asyn',
        type: 'dropdown-select' as const,
        content: `**Schemes in Action** 🔽

Classify each underlined construction.`,
        exercise: {
          dropdowns: [
            { label: '"Every day, every hour, every minute, we hope."', options: ['anaphora', 'antithesis', 'asyndeton'] },
            { label: '"It was the best of times, it was the worst of times."', options: ['epistrophe', 'antithesis', 'polysyndeton'] },
            { label: '"We lived and laughed and loved and left."', options: ['asyndeton', 'anaphora', 'polysyndeton'] },
          ],
          correctAnswers: ['anaphora', 'antithesis', 'polysyndeton'],
          hint1: 'Repeating the *same opening word* ("every…") across phrases is anaphora.',
          hint2: 'Balancing opposite ideas ("best… worst") in matching structure is antithesis.',
          hint3: 'Piling on "and… and… and" to slow the rhythm and add weight is polysyndeton.',
          explanation: '"Every… every… every" repeats the opening = anaphora. "Best… worst" in mirrored form = antithesis. "and… and… and" multiplies conjunctions = polysyndeton (note: asyndeton would *omit* them).',
        },
      },
      {
        id: 'erd3-name-scheme',
        type: 'input-boxes' as const,
        content: `**Name the Scheme** ✍️

Type the scheme each sentence uses (lowercase, one word).

**1)** "We shall not flag or fail. We shall go on to the end. We shall fight in France…" (each sentence opens "We shall")
**2)** "I came, I saw, I conquered." (no conjunctions)
**3)** "Float like a butterfly, sting like a bee." (matched grammatical structure)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['anaphora', 'asyndeton', 'parallelism'],
          hint1: 'Repetition at the *start* of clauses is anaphora.',
          hint2: 'Dropping "and" between items is asyndeton.',
          hint3: 'Matching "[verb] like a [noun]" twice is parallelism.',
          explanation: '1) anaphora (repeated "We shall" openings). 2) asyndeton (conjunctions omitted). 3) parallelism ("Float like a butterfly, sting like a bee" repeats the verb-like-a-noun structure).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd4-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 4 of 7 — Tropes: Devices of Meaning**

---

> 🔑 **The Idea:** A **trope** is a device that changes the *meaning* of words — it makes a word or phrase mean something other than its literal sense. Where schemes rearrange words, tropes *turn* them (Greek *tropos* = "a turn"). Metaphor, irony, and hyperbole are tropes.`,
      },
      {
        id: 'erd4-tropes',
        type: 'text' as const,
        content: `## The Core Tropes

| Trope | What it does | Example |
|-------|-------------|---------|
| **Metaphor** | calls one thing *another* (no "like/as") | "Time is a thief." |
| **Simile** | compares with "like" or "as" | "as busy as a bee" |
| **Personification** | gives human traits to non-human things | "the wind whispered" |
| **Hyperbole** | deliberate *exaggeration* | "I’ve told you a million times." |
| **Understatement** | deliberately *downplays* | (of a hurricane) "a bit breezy" |
| **Irony (verbal)** | says the *opposite* of what is meant | "Lovely weather," in a downpour |
| **Metonymy** | names a thing by a closely related one | "The **crown** declared war." |
| **Synecdoche** | names a thing by a *part* of it | "All hands on deck." |

> 💡 **Effect, not label:** Hyperbole isn’t just "exaggeration." Saying you’ve repeated something "a million times" conveys *exasperation* — the figure communicates the speaker’s emotional state, not a literal count.`,
      },
      {
        id: 'erd4-check-tropes',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '"The pen is mightier than the sword." Here "the pen" stands for writing and "the sword" for force. This device — naming something by a closely associated object — is:',
              options: ['Metonymy', 'Simile', 'Personification', 'Understatement'],
              correctAnswer: 0,
              explanation: 'Metonymy substitutes a closely associated thing for the concept itself (pen → writing/diplomacy; sword → military force). It is not a part-for-whole (that would be synecdoche), but an associated-thing-for-concept.',
            },
            {
              question: 'After surviving a serious car crash, a driver says, "Well, that was inconvenient." This is an example of:',
              options: ['Hyperbole', 'Understatement', 'Metaphor', 'Anaphora'],
              correctAnswer: 1,
              explanation: 'Calling a life-threatening crash merely "inconvenient" deliberately downplays its severity — understatement — often for dry humor or stoic effect.',
            },
          ],
        },
      },
      {
        id: 'erd4-irony',
        type: 'text' as const,
        content: `## A Closer Look: The Three Ironies

"Irony" is one word for three different effects. AP passages most often use **verbal irony**, but you should know all three:

- **Verbal irony** — a speaker says the *opposite* of what they mean. "What a brilliant idea," said about a clearly terrible one. (Sarcasm is pointed, mocking verbal irony.)
- **Situational irony** — an outcome is the *opposite* of what is expected. A fire station burns down.
- **Dramatic irony** — the *audience* knows something a character does not. We see the villain hiding while the hero walks in calmly.

> ⚠️ **Common trap:** Verbal irony is **not** the same as a lie. A liar wants to be believed; an ironist *wants* the audience to catch the gap between the words and the truth. The gap is the point.`,
      },
      {
        id: 'erd4-check-irony',
        type: 'dropdown-select' as const,
        content: `**Classify the Trope** 🔽

Identify each figure.`,
        exercise: {
          dropdowns: [
            { label: '"The classroom was a zoo."', options: ['metaphor', 'simile', 'hyperbole'] },
            { label: '"This bag weighs a ton!" (about a backpack)', options: ['understatement', 'hyperbole', 'metonymy'] },
            { label: '"Friendly fire" used to describe being shot by your own side', options: ['situational irony', 'verbal irony', 'synecdoche'] },
          ],
          correctAnswers: ['metaphor', 'hyperbole', 'verbal irony'],
          hint1: 'Calling the classroom "a zoo" *directly* (no "like/as") is a metaphor.',
          hint2: 'A backpack cannot weigh a literal ton — the exaggeration is hyperbole.',
          hint3: '"Friendly" applied to gunfire that harms your own side says the opposite of the truth — verbal irony.',
          explanation: 'Direct comparison with no "like/as" = metaphor. Obvious exaggeration = hyperbole. A term whose literal sense contradicts the grim reality ("friendly" fire) = verbal irony.',
        },
      },
      {
        id: 'erd4-name-trope',
        type: 'input-boxes' as const,
        content: `**Name the Trope** ✍️

Type the device (lowercase, one word).

**1)** "Her smile was like sunshine after rain." (uses "like")
**2)** "The lonely lighthouse kept watch over the harbor." (the lighthouse "keeps watch")
**3)** "I have a thousand things to do before noon." (deliberate exaggeration)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['simile', 'personification', 'hyperbole'],
          hint1: 'A comparison using "like" or "as" is a simile.',
          hint2: 'Giving a human action ("kept watch") to an object is personification.',
          hint3: 'An obvious overstatement for emphasis is hyperbole.',
          explanation: '1) simile (comparison with "like"). 2) personification ("kept watch" is a human action given to a lighthouse). 3) hyperbole (a deliberate, non-literal exaggeration).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd5-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 5 of 7 — Diction, Tone, and Syntax**

---

> 🔑 **The Idea:** Not every rhetorical effect comes from a named figure. Three quieter tools — **diction** (word choice), **tone** (attitude), and **syntax** (sentence structure) — shape how a passage feels long before the reader notices a single metaphor.`,
      },
      {
        id: 'erd5-diction',
        type: 'text' as const,
        content: `## Diction and Connotation

**Diction** is a writer’s deliberate word choice. The key idea is **connotation** — the feelings and associations a word carries *beyond* its dictionary definition (its **denotation**).

| Denotation (same idea) | Word A | Word B | The choice signals… |
|------------------------|--------|--------|----------------------|
| "thin" | slender | scrawny | admiration vs. disdain |
| "determined" | resolute | stubborn | praise vs. criticism |
| "inexpensive" | thrifty | cheap | approval vs. contempt |

Diction also ranges on a scale of **formality**: *formal* ("commence," "purchase") vs. *colloquial / informal* ("kick off," "grab"). A writer’s level of diction signals how they see their audience and occasion.

> 💡 Word choice is often the *first* place tone lives. Swap "slender" for "scrawny" and the sentence’s whole attitude flips, even though the literal meaning barely moves.`,
      },
      {
        id: 'erd5-check-diction',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A reviewer calls a politician’s plan "a scheme cooked up behind closed doors." The diction ("scheme," "cooked up") most clearly conveys a tone of:',
              options: ['Admiration', 'Suspicion / disapproval', 'Neutral reporting', 'Joyful celebration'],
              correctAnswer: 1,
              explanation: '"Scheme" and "cooked up" carry negative connotations of secrecy and trickery. The denotation (a plan made privately) is neutral, but the connotation signals suspicion and disapproval.',
            },
            {
              question: 'The difference between a word’s strict dictionary meaning and the associations it carries is the difference between:',
              options: ['syntax and diction', 'denotation and connotation', 'ethos and pathos', 'scheme and trope'],
              correctAnswer: 1,
              explanation: 'Denotation = the literal dictionary definition; connotation = the emotional and cultural associations layered on top. Writers exploit connotation to steer tone.',
            },
          ],
        },
      },
      {
        id: 'erd5-syntax',
        type: 'text' as const,
        content: `## Syntax: How Sentences Move

**Syntax** is sentence structure — length, order, and rhythm. Writers manipulate it for effect:

- **Short, clipped sentences** create urgency, tension, or finality. *"He ran. He fell. It was over."*
- **Long, flowing sentences** can build momentum, layer detail, or mimic a wandering mind.
- A **rhetorical question** ("Have we no shame?") asks not for an answer but to provoke reflection and steer the audience toward an obvious conclusion.
- A **periodic sentence** withholds the main clause until the end, building suspense; a **loose sentence** states the main idea first, then adds detail.

**Tone** is the *attitude* a passage takes toward its subject or audience — solemn, ironic, indignant, nostalgic. Tone is the *product* of diction, syntax, and devices working together.

> 🔑 **Key Idea:** Diction and syntax are *causes*; tone is the *effect*. On the exam, support a tone claim by pointing to the specific word choices and sentence structures that create it.`,
      },
      {
        id: 'erd5-check-syntax',
        type: 'dropdown-select' as const,
        content: `**Diction, Syntax, Tone** 🔽

Make each analytical choice.`,
        exercise: {
          dropdowns: [
            { label: '"Are we really going to stand by and do nothing?" is a:', options: ['rhetorical question', 'periodic sentence', 'simile'] },
            { label: 'Choosing "home" over "residence" makes the diction more:', options: ['formal and distant', 'warm and personal', 'technical'] },
            { label: 'A string of three two-word sentences mainly creates a tone of:', options: ['leisurely calm', 'urgency or finality', 'confusion'] },
          ],
          correctAnswers: ['rhetorical question', 'warm and personal', 'urgency or finality'],
          hint1: 'A question asked for effect, not for information, is rhetorical.',
          hint2: '"Home" carries warmer connotations than the clinical "residence."',
          hint3: 'Short, clipped sentences speed the rhythm and signal urgency or a sense of finality.',
          explanation: 'The question seeks no real answer (rhetorical question). "Home" connotes warmth/belonging vs. the cold "residence." Clipped short sentences accelerate rhythm, creating urgency or finality.',
        },
      },
      {
        id: 'erd5-name-tone',
        type: 'input-boxes' as const,
        content: `**Denotation vs. Connotation** ✍️

For each pair describing the *same* person, type the word with the more **positive** connotation (copy it exactly, lowercase).

**1)** thrifty / cheap
**2)** confident / arrogant
**3)** curious / nosy`,
        exercise: {
          boxes: 3,
          correctAnswers: ['thrifty', 'confident', 'curious'],
          hint1: 'Both words share a denotation; pick the one that *flatters*.',
          hint2: '"Thrifty" praises careful spending; "cheap" criticizes it.',
          hint3: '"Confident" and "curious" are approving; "arrogant" and "nosy" are critical.',
          explanation: 'Each pair shares a denotation but differs in connotation. The positive choices are "thrifty," "confident," and "curious"; their partners ("cheap," "arrogant," "nosy") carry disapproval.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd6-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 6 of 7 — Putting It Together: Analyzing a Passage**

---

> 🔑 **The Idea:** AP rewards *integrated* analysis. You don’t list devices — you show how a writer’s choices *work together* to achieve a purpose for an audience. This part walks one short passage the way an AP reader would.`,
      },
      {
        id: 'erd6-passage',
        type: 'text' as const,
        content: `## The Passage

Read this closing of a (fictional) appeal to a city council arguing to save a public library:

> "This is not just a building. It is the room where my daughter read her first word, where a jobless veteran wrote his first résumé in a decade, where a lonely widow found her only Tuesday-afternoon company. Close it, and you do not save money — you spend it, in dropouts, in despair, in a community that forgets how to hope. Ask yourselves: what kind of city balances its budget on the backs of its children?"

Before reading on, notice how *many* moves are packed into four sentences.`,
      },
      {
        id: 'erd6-walkthrough',
        type: 'text' as const,
        content: `## Walking the Passage Like an AP Reader

| Device | Where | Effect / how it serves the purpose |
|--------|-------|-----------------------------------|
| **Antithesis** | "not just a building. It is the room where…" | reframes the issue from *cost* to *human value* |
| **Anaphora** | "where my daughter… where a jobless veteran… where a lonely widow…" | repetition builds emotional momentum and breadth |
| **Pathos** | the daughter, veteran, widow | concrete sympathetic figures make the stakes feel human |
| **Antithesis** | "you do not save money — you spend it" | flips the council’s own logic against them |
| **Asyndeton + parallelism** | "in dropouts, in despair, in a…" | clipped triple accelerates and intensifies the cost |
| **Rhetorical question** | "what kind of city…?" | forces the council to judge themselves; no answer needed |

Notice the *braid*: anaphora (a scheme) carries three pathos appeals; antithesis (a scheme) reframes a logos claim about money. The devices don’t sit in isolation — they cooperate toward one purpose: **persuading the council the library is worth funding.**

> 💡 **The model sentence:** "The speaker’s anaphora — ‘where… where… where’ — accumulates concrete human examples, so that by the final clause the audience feels the library’s value as personal rather than abstract." That sentence *names, locates, and explains.* Do that, and you earn the point.`,
      },
      {
        id: 'erd6-check-passage',
        type: 'multiple-choice' as const,
        content: `**Analyze the Passage** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the primary effect of the anaphora "where my daughter… where a jobless veteran… where a lonely widow…"?',
              options: [
                'It provides statistical proof of the library’s budget',
                'It accumulates concrete human examples, making the library’s value feel personal and broad',
                'It confuses the council with overly formal diction',
                'It changes the literal meaning of the word "where"',
              ],
              correctAnswer: 1,
              explanation: 'The repeated "where" stacks three vivid, sympathetic users of the library. The repetition (a scheme) carries the pathos, so the value feels personal and wide-reaching — exactly what the persuasive purpose needs.',
            },
            {
              question: '"You do not save money — you spend it" works mainly by:',
              options: [
                'Using a simile to compare money to time',
                'Employing antithesis to flip the council’s own cost logic against them',
                'Understating the seriousness of the closure',
                'Citing a peer-reviewed study',
              ],
              correctAnswer: 1,
              explanation: 'The balanced opposition "save… / spend…" is antithesis. It takes the council’s framing (closing saves money) and reverses it (closing actually costs more), turning their own logic into the speaker’s argument.',
            },
          ],
        },
      },
      {
        id: 'erd6-check-integrate',
        type: 'dropdown-select' as const,
        content: `**Name the Move** 🔽

Map each quoted phrase to its device.`,
        exercise: {
          dropdowns: [
            { label: '"in dropouts, in despair, in a community…" (no "and")', options: ['asyndeton', 'polysyndeton', 'simile'] },
            { label: '"what kind of city balances its budget on the backs of its children?"', options: ['metaphor only', 'rhetorical question', 'understatement'] },
            { label: '"This is not just a building."', options: ['antithesis (reframing)', 'epistrophe', 'logos statistic'] },
          ],
          correctAnswers: ['asyndeton', 'rhetorical question', 'antithesis (reframing)'],
          hint1: 'A list with the conjunctions dropped is asyndeton.',
          hint2: 'A question posed for effect, expecting no literal answer, is rhetorical.',
          hint3: '"Not just a building — [but] the room where…" sets up a contrast that reframes the issue: antithesis.',
          explanation: '"in dropouts, in despair, in a…" omits "and" = asyndeton. "What kind of city…?" is a rhetorical question. "This is not just a building" reframes by contrast = antithesis. (The phrase "on the backs of its children" is also a metaphor — strong passages layer devices.)',
        },
      },
      {
        id: 'erd6-takeaway',
        type: 'text' as const,
        content: `## The Takeaway

The difference between a low and high AP analysis essay is almost never the *number* of devices spotted. It is whether you:

1. **Quote** the specific text,
2. **Name** the device accurately, and
3. **Explain** how it acts on the audience to serve the writer’s purpose.

> ⚠️ A list of labels ("there is anaphora, pathos, and a rhetorical question") with no *because* is a glossary, not an analysis. The points live in the *because*.`,
      },
      {
        id: 'erd6-name-from-passage',
        type: 'input-boxes' as const,
        content: `**Name the Device** ✍️

Using the library passage, name the device behind each phrase (lowercase, one word).

**1)** "where my daughter… where a jobless veteran… where a lonely widow…" (repeated opening)
**2)** "in dropouts, in despair, in a community…" (no "and" between items)
**3)** "what kind of city balances its budget on the backs of its children?" (asked for effect, not an answer) — type the two-word phrase`,
        exercise: {
          boxes: 3,
          correctAnswers: ['anaphora', 'asyndeton', 'rhetorical question'],
          hint1: 'Repetition at the *start* of clauses is anaphora.',
          hint2: 'A list with the conjunctions dropped is asyndeton.',
          hint3: 'A question posed for effect, not for a literal answer, is a rhetorical question.',
          explanation: '1) anaphora (the repeated "where" openings). 2) asyndeton (the "and" is dropped from the list). 3) rhetorical question (it indicts the council rather than seeking an answer).',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-devices',
    sections: [
      {
        id: 'erd7-intro',
        type: 'text' as const,
        content: `# 🗣️ Rhetorical Devices

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read the rhetorical situation, (2) identify the three appeals, (3) tell schemes from tropes, (4) analyze diction, tone, and syntax, and (5) integrate it all into real analysis. Let’s consolidate.`,
      },
      {
        id: 'erd7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| You see… | It’s likely… | Because… |
|----------|--------------|----------|
| repetition at the *start* of clauses | **anaphora** | same opening words build rhythm |
| repetition at the *end* of clauses | **epistrophe** | same closing words hammer a point home |
| balanced *opposite* ideas | **antithesis** | parallel form sharpens the contrast |
| a list with no "and" | **asyndeton** | dropped conjunctions speed it up |
| a direct "X is Y" comparison | **metaphor** | one thing is called another |
| obvious exaggeration | **hyperbole** | overstatement conveys feeling, not fact |
| saying the opposite of the truth | **verbal irony** | the gap between words and meaning *is* the point |
| a question with no expected answer | **rhetorical question** | it provokes thought and steers the audience |

> 🔑 **Master rule:** Scheme = arrangement (the *ear*); trope = meaning (the *mind*); appeal = ethos/pathos/logos (the *strategy*). Always end on *effect*.`,
      },
      {
        id: 'erd7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly distinguishes a scheme from a trope?',
              options: [
                'A scheme changes word *meaning*; a trope changes word *order*',
                'A scheme changes word *order/arrangement*; a trope changes word *meaning*',
                'Schemes are emotional; tropes are logical',
                'There is no difference — the terms are synonyms',
              ],
              correctAnswer: 1,
              explanation: 'A scheme (e.g., anaphora, antithesis) alters arrangement without changing literal meaning. A trope (e.g., metaphor, irony) turns the meaning of words themselves.',
            },
            {
              question: '"My backpack weighs a thousand pounds" and "I’ve asked you a million times" are both examples of:',
              options: ['Litotes', 'Hyperbole', 'Metonymy', 'Epistrophe'],
              correctAnswer: 1,
              explanation: 'Both deliberately exaggerate for emphasis or emotional effect — hyperbole — and neither is meant to be taken literally.',
            },
          ],
        },
      },
      {
        id: 'erd7-mixed2',
        type: 'dropdown-select' as const,
        content: `**One More Pass** 🔽

Match each example to its device.`,
        exercise: {
          dropdowns: [
            { label: '"The White House announced the policy today."', options: ['metonymy', 'simile', 'antithesis'] },
            { label: '"Give me liberty, or give me death!" (each clause opens "Give me")', options: ['anaphora', 'understatement', 'metaphor'] },
            { label: '"I think we did okay," after winning by 50 points', options: ['hyperbole', 'understatement', 'personification'] },
          ],
          correctAnswers: ['metonymy', 'anaphora', 'understatement'],
          hint1: '"The White House" stands in for the administration — an associated thing for the concept.',
          hint2: 'Both clauses begin "Give me" — repetition at the start.',
          hint3: 'Calling a 50-point blowout merely "okay" downplays the result.',
          explanation: '"The White House" = metonymy (a place names the administration). "Give me… / Give me…" = anaphora (repeated opening). "We did okay" after a blowout = understatement (deliberate downplaying).',
        },
      },
      {
        id: 'erd7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A speaker says, "Studies show that for every dollar invested in early education, society saves seven." Which appeal is primarily at work?',
              options: ['Pathos', 'Logos', 'Ethos', 'Anaphora'],
              correctAnswer: 1,
              explanation: 'A measurable, evidence-based claim ("for every dollar… society saves seven") is an appeal to logos — persuasion through reason and data.',
            },
            {
              question: '"Ask not what your country can do for you — ask what you can do for your country" relies most on which device?',
              options: ['Hyperbole', 'Antithesis', 'Metonymy', 'Situational irony'],
              correctAnswer: 1,
              explanation: 'The line places two opposed ideas (receiving from vs. giving to your country) in mirror-image parallel structure — antithesis — which makes the reversal memorable.',
            },
            {
              question: 'On the AP English Language exam, a complete analysis of a device must do all of the following EXCEPT:',
              options: [
                'Quote or point to the specific text',
                'Name the device accurately',
                'Explain the device’s effect on the audience and link it to purpose',
                'Count the total number of devices in the passage',
              ],
              correctAnswer: 3,
              explanation: 'Quoting, naming, and explaining the effect/purpose are the three essentials. Tallying how many devices appear earns nothing — analysis lives in the *because*, not the count.',
            },
          ],
        },
      },
    ],
  },
]
