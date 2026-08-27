import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Critical Approaches to Literature
 * (AP English Literature and Composition).
 * Registry key / DB slug: 'englit-literary-criticism'.
 * 7 parts, gold-standard structure modeled on the Completing-the-Square pilot:
 * teach → worked passage analysis → interactive practice (multiple-choice +
 * dropdown + input-boxes) → exit quiz. Non-math topic, so concept checks favor
 * multiple-choice and dropdown over numeric input. Any rare LaTeX uses doubled
 * backslashes (template-literal strings); bare dollar signs in prose are
 * escaped as \\$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit1-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 1 of 7 — What Is a Critical Lens?**

---

### Topics in This Part

| Section |
|---------|
| What "literary criticism" actually means |
| The lens metaphor: same text, different questions |
| Why AP rewards interpretation, not summary |

> 🔑 **Key Concept:** A **critical approach** (or *critical lens*) is a deliberate set of questions you bring to a text. The text doesn't change — but the lens decides *what counts as evidence* and *what counts as meaning*. Learning the lenses gives you more than one way to be right.`,
      },
      {
        id: 'crit1-what-is-criticism',
        type: 'text' as const,
        content: `## Criticism Is Not Criticizing

In everyday speech, "criticism" means finding fault. In literary study it means something closer to **careful, principled interpretation**. A literary critic asks, *What does this work mean, how does it create that meaning, and why does that matter?*

There is rarely a single correct reading. Instead, a strong interpretation is one that is:

| Quality | What it means |
|---------|---------------|
| **Textually grounded** | Anchored in specific words, images, and structures |
| **Coherent** | The parts support one consistent claim |
| **Defensible** | Another careful reader could be persuaded by the evidence |

> 💡 On the AP exam, the prose- and poetry-analysis essays reward exactly this: a defensible interpretive claim (a **thesis**) supported by close reading. The critical lenses give you a *vocabulary* and a *set of questions* for generating those claims.`,
      },
      {
        id: 'crit1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In literary study, "criticism" most nearly means:',
              options: [
                'Pointing out the flaws and weaknesses of a book',
                'Careful, principled interpretation of how a work makes meaning',
                'Ranking books from best to worst',
                'Correcting an author’s grammar and style',
              ],
              correctAnswer: 1,
              explanation: 'Literary criticism is interpretation, not fault-finding. A critic explains how and why a text means what it does — the everyday "find fault" sense does not apply.',
            },
            {
              question: 'According to the lesson, a strong literary interpretation must above all be:',
              options: [
                'The only possible reading of the text',
                'Identical to what the author intended',
                'Defensible and grounded in textual evidence',
                'Longer and more detailed than rival readings',
              ],
              correctAnswer: 2,
              explanation: 'There is rarely one "correct" reading. Strength comes from being textually grounded, coherent, and defensible — not from being the single truth or the longest essay.',
            },
          ],
        },
      },
      {
        id: 'crit1-lens-metaphor',
        type: 'text' as const,
        content: `## The Lens Metaphor

Imagine a single short poem about a garden. Point three different lenses at it and you get three different essays:

- A **formalist** asks: *How do the line breaks, imagery, and sound shape the experience of the poem itself?*
- A **feminist** critic asks: *Who tends this garden, and what does the poem assume about women's labor and space?*
- A **Marxist** critic asks: *Who owns the land, and whose work is invisible in this image of leisure?*

Same words. Different questions. Different evidence rises to the surface.

> ⚠️ **Common misconception:** A lens is not a bias you "fall into" by accident. It is a *choice* you make on purpose, and a sophisticated reader can switch lenses deliberately to see more of the text.`,
      },
      {
        id: 'crit1-match-lens',
        type: 'dropdown-select' as const,
        content: `**Match the Question to the Lens** 🔽

Each lens is defined by the kind of question it asks. Match each question below to the lens most associated with it.`,
        exercise: {
          dropdowns: [
            { label: 'How do imagery, meter, and structure create meaning *within the text itself*?', options: ['Formalist', 'Feminist', 'Marxist', 'Biographical'] },
            { label: 'How does the work represent gender, power, and women’s experience?', options: ['Feminist', 'Formalist', 'Historical', 'Psychoanalytic'] },
            { label: 'Whose economic class and labor does the work make visible or hide?', options: ['Marxist', 'Reader-Response', 'Formalist', 'Feminist'] },
          ],
          correctAnswers: ['Formalist', 'Feminist', 'Marxist'],
          hint1: 'The lens focused on the text’s internal craft — words, sound, structure — is *formalist*.',
          hint2: 'A lens centered on gender and power is *feminist*.',
          hint3: 'A lens centered on class, labor, and ownership is *Marxist*.',
          explanation: 'Formalism asks about craft inside the text; feminist criticism asks about gender and power; Marxist criticism asks about class, labor, and economics. Each is a different set of questions aimed at the same words.',
        },
      },
      {
        id: 'crit1-summary-vs-interpretation',
        type: 'text' as const,
        content: `## Summary Is Not Interpretation

The single most common way AP essays lose points is **summarizing** the plot instead of **interpreting** it.

| Summary (low value) | Interpretation (high value) |
|---------------------|------------------------------|
| "The narrator describes a garden." | "The narrator's lush garden imagery masks an anxiety about decay, signaled by the recurring word *fading*." |
| "Then the character leaves home." | "Leaving home is staged as a loss of identity, not freedom — the door 'closes' on him rather than opening." |

Notice the interpretation always points to **specific language** and makes a **claim** about its effect.

> 🔑 **Takeaway:** Every lens in this lesson is a tool for turning summary into interpretation. Next, we start with the lens AP relies on most — **formalism / close reading**.`,
      },
      {
        id: 'crit1-summary-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence is an INTERPRETATION rather than a summary?',
              options: [
                'The recurring word "fading" turns the garden’s lushness into a quiet meditation on decay.',
                'The narrator walks through a garden and looks at the flowers.',
                'There are three stanzas, and each describes a different plant.',
                'The poem is set outdoors in the morning.',
              ],
              correctAnswer: 0,
              explanation: 'Only the first sentence makes a *claim* about effect ("a quiet meditation on decay") and anchors it in *specific language* ("the recurring word fading"). The others merely restate what happens — that is summary.',
            },
            {
              question: 'On the AP prose- and poetry-analysis essays, the central thing you must produce is —',
              options: [
                'A defensible interpretive thesis supported by close reading',
                'A complete retelling of the plot',
                'A biography of the author',
                'A list of every literary device present',
              ],
              correctAnswer: 0,
              explanation: 'AP rewards a defensible interpretive claim (a thesis) supported by specific textual evidence. Plot retelling, biography, and bare device-lists do not score on their own.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit2-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 2 of 7 — Formalism & New Criticism (Close Reading)**

---

> 🔑 **The Idea:** **Formalism** treats the text as a self-contained object. Meaning lives in the words *on the page* — in diction, imagery, structure, and sound — not in the author's biography or the reader's mood. This is the lens that powers AP close reading.`,
      },
      {
        id: 'crit2-principles',
        type: 'text' as const,
        content: `## Core Principles of New Criticism

**New Criticism** (the mid-20th-century version of formalism) gave us the toolkit AP still uses:

| Principle | What it means for you |
|-----------|------------------------|
| **The text is autonomous** | Read what's there; don't import gossip about the author |
| **Close reading** | Slow, word-level attention to *how* meaning is built |
| **Form and content are one** | A poem's shape *is* part of its meaning |
| **Unity** | Good works cohere; tensions resolve into a whole |

Two famous warnings come from New Criticism:

- The **Intentional Fallacy** — you cannot prove a reading just by claiming "the author meant it."
- The **Affective Fallacy** — you cannot prove a reading just by reporting "it made me feel sad."

> 💡 Both fallacies push you back to the same place: **the evidence on the page**. That is exactly the standard an AP reader applies to your essay.`,
      },
      {
        id: 'crit2-fallacy-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes: "This poem is about grief because reading it made me cry." A New Critic would say this commits the —',
              options: ['Affective Fallacy', 'Intentional Fallacy', 'Pathetic Fallacy', 'Genetic Fallacy'],
              correctAnswer: 0,
              explanation: 'The Affective Fallacy is the error of judging a text by the emotional effect it has on the reader ("it made me cry") rather than by evidence in the text itself.',
            },
            {
              question: 'Another student writes: "The author said in an interview that the river symbolizes death, so it does." A New Critic objects that this is the —',
              options: ['Affective Fallacy', 'Intentional Fallacy', 'Anachronism', 'Allegory'],
              correctAnswer: 1,
              explanation: 'The Intentional Fallacy is the error of settling a reading by appealing to the author’s stated intention rather than to evidence in the text. For a New Critic, the text must support the claim on its own.',
            },
          ],
        },
      },
      {
        id: 'crit2-toolkit',
        type: 'text' as const,
        content: `## The Close-Reading Toolkit

When you read formally, you hunt for these devices and ask what each *does*:

| Device | Question to ask |
|--------|-----------------|
| **Diction** | Why *this* word and not a synonym? Connotation? |
| **Imagery** | What senses are engaged? What mood is built? |
| **Figurative language** | What does the metaphor/simile compare, and why? |
| **Syntax** | Are sentences long and winding, or short and clipped? Why? |
| **Sound** | Does alliteration, rhyme, or meter reinforce meaning? |
| **Structure** | How do shifts (*volta*, stanza breaks, turns) reshape meaning? |

> ⚠️ Naming a device earns nothing by itself. "There is alliteration in line 4" is a *summary*. You must say what the alliteration **accomplishes** — that is interpretation.`,
      },
      {
        id: 'crit2-worked',
        type: 'text' as const,
        content: `## Worked Close Reading

Consider the line: *"The cold clock kept consuming the room."*

A formalist walks through it:

1. **Diction:** *consuming* is violent and total — far stronger than "filling." Time is devouring, not merely passing.
2. **Sound:** the hard *c*/*k* sounds (*cold, clock, kept, consuming*) click like the ticking itself; form echoes content.
3. **Personification:** the clock *acts*, making time the room's predator.

**Resulting interpretive claim:** *The line makes time an active, consuming force, transforming an ordinary room into a space of quiet dread.*

> 🔑 Notice the move: device → effect → claim. The claim never leaves the page, yet it goes far beyond summary.`,
      },
      {
        id: 'crit2-device-effect',
        type: 'dropdown-select' as const,
        content: `**Device → Effect** 🔽

For each observation, choose the close-reading term that names it.`,
        exercise: {
          dropdowns: [
            { label: 'The choice of "consuming" over "filling" is an analysis of —', options: ['Diction', 'Syntax', 'Meter', 'Genre'] },
            { label: 'The repeated hard "c"/"k" sounds reinforcing the ticking is —', options: ['Alliteration', 'Personification', 'Hyperbole', 'Enjambment'] },
            { label: 'Giving the clock the power to "consume" the room is —', options: ['Personification', 'Diction', 'Irony', 'Caesura'] },
          ],
          correctAnswers: ['Diction', 'Alliteration', 'Personification'],
          hint1: 'Word choice and its connotations is *diction*.',
          hint2: 'Repetition of an initial consonant sound is *alliteration*.',
          hint3: 'Giving a non-human thing human action is *personification*.',
          explanation: 'Word choice = diction; repeated initial consonants = alliteration; a clock that "consumes" acts like a living agent = personification. Each device is then linked to its effect — dread — to become interpretation.',
        },
      },
      {
        id: 'crit2-effect-rule',
        type: 'text' as const,
        content: `## The Rule That Separates A's from C's

Every device you spot must be cashed out as an **effect**. The structure of a winning sentence is always:

> *This **device** produces this **effect**, which supports this **claim**.*

A reader who only labels devices is writing a catalog; a reader who links each device to what it *does* is writing an argument. Keep that test in front of you in the check below.`,
      },
      {
        id: 'crit2-naming-trap',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence earns credit on an AP essay as genuine analysis?',
              options: [
                'The clipped, one-word sentences enact the speaker’s panic, refusing the reader any room to breathe.',
                'There is short syntax in this passage.',
                'The author uses a metaphor in line 6.',
                'This stanza contains alliteration.',
              ],
              correctAnswer: 0,
              explanation: 'Naming a device ("there is short syntax," "uses a metaphor," "contains alliteration") is just summary. Credit comes from stating what the device *accomplishes* — here, clipped syntax that "enacts the speaker’s panic."',
            },
            {
              question: 'The New Critical claim that "form and content are one" implies that —',
              options: [
                'A poem’s shape and structure are part of its meaning, not just decoration',
                'Form should always be ignored in favor of content',
                'Only the literal content of a poem matters',
                'A poem’s meaning comes entirely from the author’s biography',
              ],
              correctAnswer: 0,
              explanation: 'For New Criticism, form *is* meaning: line breaks, structure, and sound do interpretive work, so they cannot be separated from "what the poem says."',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit3-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 3 of 7 — Historical, Biographical & New Historicist Lenses**

---

> 🔑 **The Idea:** Where formalism seals the text off from the world, **contextual** lenses open it back up. They ask how the *moment of writing* — its history, the author's life, the surrounding culture — shapes and is shaped by the work.`,
      },
      {
        id: 'crit3-three-lenses',
        type: 'text' as const,
        content: `## Three Related Lenses

| Lens | Central question | Watch out for |
|------|------------------|---------------|
| **Biographical** | How does the author's life illuminate the work? | Don't reduce the work to autobiography |
| **Historical** | How does the period's events and beliefs shape the text? | Avoid anachronism — judging the past by today's norms |
| **New Historicism** | How does the text both reflect *and* shape the power and discourse of its era? | Treat the literary text as one document among many |

**New Historicism** is the most sophisticated of the three. It refuses to treat history as mere "background." Instead it reads a poem alongside a sermon, a law, or a pamphlet from the same moment, asking how all of them *circulate the same cultural energy*.

> 💡 A key New Historicist insight: literature does not just *passively reflect* its age — it actively *participates* in shaping what people believe and how power is exercised.`,
      },
      {
        id: 'crit3-lens-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A critic reads a 1850s novel alongside fugitive-slave laws and abolitionist pamphlets to show how all three shaped ideas about freedom. This approach is most clearly —',
              options: ['New Historicism', 'Formalism', 'Reader-Response', 'Structuralism'],
              correctAnswer: 0,
              explanation: 'New Historicism reads the literary text alongside non-literary documents of the same period, treating them as a network that circulates and shapes cultural beliefs about power — here, freedom and slavery.',
            },
            {
              question: 'Criticizing a medieval text for failing to hold modern views on equality is an example of —',
              options: ['Anachronism', 'The Intentional Fallacy', 'Allegory', 'Close reading'],
              correctAnswer: 0,
              explanation: 'Anachronism is judging or interpreting the past by standards or knowledge that did not exist at the time. Historical critics work to avoid it.',
            },
          ],
        },
      },
      {
        id: 'crit3-biographical-caution',
        type: 'text' as const,
        content: `## The Promise and Trap of Biography

Biographical reading can be illuminating: knowing that a poet lost a child can deepen a poem about grief. But it carries a sharp danger.

| Helpful biographical move | Dangerous biographical move |
|---------------------------|------------------------------|
| Using a life-fact to *enrich* a reading the text already supports | Replacing the text with the life ("she was sad, so the poem is sad") |
| Treating biography as *one* kind of evidence | Treating biography as the *final* word on meaning |

This is why New Criticism warned about the **Intentional Fallacy** — and why mature critics use biography *carefully*, as a supplement to textual evidence rather than a substitute for it.

> ⚠️ On the AP exam you are given **no biography** of the author for a reason: the College Board wants you to read the *text*. Biographical knowledge is a tool for the world beyond the exam.`,
      },
      {
        id: 'crit3-context-drill',
        type: 'dropdown-select' as const,
        content: `**Name That Approach** 🔽

Match each critic's move to the lens it best illustrates.`,
        exercise: {
          dropdowns: [
            { label: '"The poet wrote this during a war, which explains its imagery of ruin."', options: ['Historical', 'Formalist', 'Reader-Response', 'Feminist'] },
            { label: '"Knowing the author’s brother died young deepens this elegy."', options: ['Biographical', 'Marxist', 'Structuralist', 'New Historicist'] },
            { label: '"This sonnet and a royal proclamation share the same anxiety about order."', options: ['New Historicist', 'Affective', 'Formalist', 'Psychoanalytic'] },
          ],
          correctAnswers: ['Historical', 'Biographical', 'New Historicist'],
          hint1: 'Linking a work to the events of its *period* is the *historical* lens.',
          hint2: 'Linking a work to the *author’s personal life* is the *biographical* lens.',
          hint3: 'Reading a poem *alongside* a non-literary document of its era is *New Historicist*.',
          explanation: 'Period events = historical; the author’s life = biographical; pairing a literary text with another era-document to trace shared cultural anxieties = New Historicist.',
        },
      },
      {
        id: 'crit3-active-text',
        type: 'text' as const,
        content: `## Literature as an Actor, Not a Mirror

The deepest of the three contextual lenses, **New Historicism**, makes a claim worth pausing on: a text is not a *mirror* held up to its age. It is a *participant* in that age.

A play about a rebellious prince does not merely record anxieties about royal succession — performed before thousands, it helps *shape* what its audience fears and believes about authority. The next check tests whether you can hold onto that distinction.`,
      },
      {
        id: 'crit3-newhist-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the key idea that distinguishes New Historicism from older historical criticism?',
              options: [
                'Literature does not merely reflect its era passively — it actively participates in shaping power and belief',
                'History is only useful as decorative background for a text',
                'The author’s intention always settles the meaning',
                'Only the formal features of a text matter',
              ],
              correctAnswer: 0,
              explanation: 'New Historicism rejects history-as-background. It treats the literary text as one document in a network that both reflects *and* shapes the era’s power and discourse.',
            },
            {
              question: 'Why does the AP exam withhold biographical information about the authors of its passages?',
              options: [
                'To push you to build your reading from the text itself rather than the author’s life',
                'Because biography is never relevant to any interpretation',
                'To make the passages harder for no reason',
                'Because the authors are always anonymous',
              ],
              correctAnswer: 0,
              explanation: 'The College Board gives no biography so that your interpretation rests on textual evidence — mirroring the New Critical caution against the Intentional Fallacy.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit4-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 4 of 7 — Psychoanalytic & Archetypal Lenses**

---

> 🔑 **The Idea:** These lenses look *beneath* the surface. **Psychoanalytic** criticism reads for unconscious desire and repression; **archetypal** (mythological) criticism reads for the deep, recurring patterns humans tell over and over.`,
      },
      {
        id: 'crit4-psychoanalytic',
        type: 'text' as const,
        content: `## Psychoanalytic Criticism (Freud → Lacan)

Rooted in **Sigmund Freud**, this lens treats a text like a mind with a surface and a hidden depth.

| Term | Quick meaning |
|------|----------------|
| **Id / Ego / Superego** | Raw desire / the negotiating self / the internalized rules |
| **The unconscious** | Repressed wishes that surface in disguised form |
| **Repression** | Pushing forbidden desire out of awareness |
| **The uncanny (*unheimlich*)** | The familiar made strange and unsettling |

A psychoanalytic critic reads symbols, slips, and dreams in the text as **disguised expressions** of what a character — or the culture — cannot say directly.

> 💡 Later theorists like **Jacques Lacan** reframed this around *language and desire*, but for AP purposes the core move is the same: look for what the text **represses** and where that repressed material **leaks back in**.`,
      },
      {
        id: 'crit4-psych-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A character insists he feels "nothing" about his father’s death, yet keeps dreaming of locked doors. A psychoanalytic critic would read the dreams as —',
              options: [
                'A disguised return of repressed grief',
                'A formal example of alliteration',
                'Proof of the author’s biography',
                'An anachronism',
              ],
              correctAnswer: 0,
              explanation: 'Psychoanalytic criticism reads recurring symbols (locked doors) as the disguised return of repressed material — here, the grief the character denies feeling consciously.',
            },
            {
              question: 'The psychoanalytic term for a forbidden wish being pushed out of conscious awareness is —',
              options: ['Repression', 'Catharsis', 'Allusion', 'Synecdoche'],
              correctAnswer: 0,
              explanation: 'Repression is the defense mechanism of pushing unacceptable desires out of consciousness; the repressed material then resurfaces in disguised forms such as dreams or symbols.',
            },
          ],
        },
      },
      {
        id: 'crit4-archetypal',
        type: 'text' as const,
        content: `## Archetypal / Mythological Criticism (Jung → Frye)

Where psychoanalysis looks at the individual psyche, **archetypal criticism** looks at humanity's *shared* one. Drawing on **Carl Jung's** "collective unconscious" and systematized by **Northrop Frye**, it finds recurring figures and patterns across all cultures.

Common **archetypes**:

| Archetype | Example |
|-----------|---------|
| **The Hero** | The quester who leaves home, is tested, and returns changed |
| **The Mentor** | The wise guide (the old teacher, the seer) |
| **The Shadow** | The hero's dark double or repressed self |
| **The Trickster** | The rule-breaking disruptor |

And recurring **patterns / motifs**: the *quest*, the *journey to the underworld*, *death and rebirth*, the seasonal cycle (spring = comedy, winter = irony).

> ⚠️ Don't confuse a **symbol** (local to one text) with an **archetype** (a pattern recurring across *many* texts and cultures). A white whale can be a symbol; the *quest* it drives is an archetype.`,
      },
      {
        id: 'crit4-archetype-drill',
        type: 'dropdown-select' as const,
        content: `**Spot the Archetype** 🔽

Match each figure to the archetype it represents.`,
        exercise: {
          dropdowns: [
            { label: 'The old wizard who trains and advises the young protagonist', options: ['The Mentor', 'The Shadow', 'The Trickster', 'The Hero'] },
            { label: 'The villain who is revealed to be the hero’s dark mirror image', options: ['The Shadow', 'The Mentor', 'The Hero', 'The Trickster'] },
            { label: 'The clever, rule-breaking figure who upends the established order for fun', options: ['The Trickster', 'The Mentor', 'The Shadow', 'The Hero'] },
          ],
          correctAnswers: ['The Mentor', 'The Shadow', 'The Trickster'],
          hint1: 'The wise guide who trains the hero is the *Mentor*.',
          hint2: 'A dark double or repressed self mirroring the hero is the *Shadow*.',
          hint3: 'The disruptive rule-breaker is the *Trickster*.',
          explanation: 'Mentor = wise guide; Shadow = the hero’s dark double / repressed self; Trickster = the disruptive rule-breaker. These archetypes recur across myths and literatures worldwide.',
        },
      },
      {
        id: 'crit4-depth-text',
        type: 'text' as const,
        content: `## Two Ways of Reading "Beneath"

Both lenses in this part read *beneath* the surface — but at very different scales.

| | Psychoanalytic | Archetypal |
|---|----------------|------------|
| **Whose depth?** | The *individual* psyche | Humanity's *shared* imagination |
| **Reads for** | Repressed desire, disguise | Recurring patterns and figures |
| **Roots** | Freud, Lacan | Jung, Frye |

Keep that contrast — *individual* versus *collective* — in mind for the final check of this part.`,
      },
      {
        id: 'crit4-distinguish',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which best distinguishes archetypal criticism from psychoanalytic criticism?',
              options: [
                'Archetypal criticism studies humanity’s *shared* patterns; psychoanalytic criticism focuses on the *individual* psyche’s desires and repressions',
                'Archetypal criticism ignores symbols, while psychoanalytic criticism studies them',
                'Archetypal criticism is about economics; psychoanalytic criticism is about history',
                'They are two names for the same approach',
              ],
              correctAnswer: 0,
              explanation: 'Archetypal (Jungian/Frye) criticism reads recurring, *collective* patterns across cultures; psychoanalytic (Freudian/Lacanian) criticism reads the *individual* psyche’s unconscious desire and repression. Both look beneath the surface, but at different scales.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit5-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 5 of 7 — Marxist, Feminist & Postcolonial Lenses**

---

> 🔑 **The Idea:** These are the **power-and-identity** lenses. Each asks *who has power, who lacks it, and how literature naturalizes or challenges that arrangement* — through class, gender, or empire.`,
      },
      {
        id: 'crit5-marxist',
        type: 'text' as const,
        content: `## Marxist Criticism — Class & Economics

Drawing on **Karl Marx**, this lens reads literature through *material conditions*: who owns, who labors, and how the work treats wealth.

| Concept | Quick meaning |
|---------|----------------|
| **Class** | Economic position (owners vs. workers) |
| **Ideology** | The beliefs that make an unequal order seem "natural" |
| **Commodification** | Turning people or relationships into things to be bought/sold |
| **Base & superstructure** | Economics (base) shapes culture, law, art (superstructure) |

A Marxist critic asks: *Whose labor is invisible here? Does the text expose inequality or disguise it as natural?*

> 💡 A common Marxist reading move is to notice who is **absent** — the servants who make a leisure scene possible but never speak.`,
      },
      {
        id: 'crit5-feminist',
        type: 'text' as const,
        content: `## Feminist & Gender Criticism

Feminist criticism examines how texts construct **gender** and distribute **power** between men and women.

Key moves:
- Analyzing the **representation** of women (are they agents or objects?).
- Recovering neglected **women writers** and traditions.
- Exposing the **"male gaze"** — narration that frames women as objects to be looked at.
- **Gender criticism / queer theory** extends this to how *all* gender and sexuality are constructed, not "natural."

> ⚠️ A feminist reading is not "the women are good, the men are bad." It is an analysis of how **power and gender roles** operate in the text — which can be subtle, contradictory, or even self-critical.`,
      },
      {
        id: 'crit5-power-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A critic argues that a novel’s glittering ballroom depends on unseen, unnamed servants whose labor the text erases. This is most clearly a —',
              options: ['Marxist reading', 'Formalist reading', 'Archetypal reading', 'Affective reading'],
              correctAnswer: 0,
              explanation: 'Reading for invisible labor, class, and how the text naturalizes economic inequality is the signature move of Marxist criticism.',
            },
            {
              question: 'The term "male gaze" refers to —',
              options: [
                'Narration or framing that positions women as objects to be looked at',
                'Any scene in which a man appears',
                'A masculine writing style',
                'A poem addressed to a man',
              ],
              correctAnswer: 0,
              explanation: 'The "male gaze," a key feminist concept, describes how a text’s point of view can frame women as passive objects of a male viewer’s look rather than as active subjects.',
            },
          ],
        },
      },
      {
        id: 'crit5-postcolonial',
        type: 'text' as const,
        content: `## Postcolonial Criticism — Empire & the "Other"

Postcolonial criticism, associated with **Edward Said**, **Gayatri Spivak**, and **Homi Bhabha**, reads literature in the long shadow of **colonialism and empire**.

| Concept | Quick meaning |
|---------|----------------|
| **Othering** | Defining colonized peoples as foreign, inferior, "not us" |
| **Orientalism** | The West's stereotyped construction of "the East" (Said) |
| **The subaltern** | Those silenced by power; can they "speak"? (Spivak) |
| **Hybridity** | The mixed, in-between identities empire produces (Bhabha) |

A postcolonial critic asks: *Who narrates, and who is narrated about? Whose voice is missing? How does the text reproduce or resist imperial assumptions?*

> 🔑 The power-and-identity lenses share a family resemblance: each asks **who is centered, who is marginalized, and how the form of the text encodes that arrangement** — class (Marxist), gender (feminist), empire (postcolonial).`,
      },
      {
        id: 'crit5-identity-drill',
        type: 'dropdown-select' as const,
        content: `**Match the Term to the Lens** 🔽

Each term belongs to one power-and-identity lens.`,
        exercise: {
          dropdowns: [
            { label: '"Commodification" and "ideology" belong to —', options: ['Marxist', 'Feminist', 'Postcolonial', 'Formalist'] },
            { label: '"The male gaze" belongs to —', options: ['Feminist', 'Marxist', 'Postcolonial', 'Archetypal'] },
            { label: '"Orientalism" and "the subaltern" belong to —', options: ['Postcolonial', 'Marxist', 'Feminist', 'Psychoanalytic'] },
          ],
          correctAnswers: ['Marxist', 'Feminist', 'Postcolonial'],
          hint1: 'Commodification and ideology are about *class and economics*.',
          hint2: 'The male gaze is about *gender and representation*.',
          hint3: 'Orientalism and the subaltern are about *empire and colonized voices*.',
          explanation: 'Class/economics = Marxist (commodification, ideology); gender = feminist (the male gaze); empire and colonized voices = postcolonial (Orientalism, the subaltern).',
        },
      },
      {
        id: 'crit5-family-text',
        type: 'text' as const,
        content: `## One Family of Questions

Although they study different things — money, gender, empire — these three lenses are siblings. Each begins from the same suspicion: that an arrangement the text presents as **natural and inevitable** is in fact a **distribution of power** that could be otherwise.

That suspicion is also what protects you from a reductive reading. The goal is never to score the characters as good or bad, but to map *how power moves through the text*. The final check makes sure that distinction is solid.`,
      },
      {
        id: 'crit5-family-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Marxist, feminist, and postcolonial lenses share which underlying question?',
              options: [
                'Who is centered, who is marginalized, and how does the text naturalize that arrangement?',
                'How do the rhyme and meter create sound effects?',
                'What did the author intend in a private interview?',
                'What universal archetypes appear across all myths?',
              ],
              correctAnswer: 0,
              explanation: 'These are the power-and-identity lenses. Each asks who holds power and who is marginalized — by class, gender, or empire — and how the text makes that arrangement seem natural.',
            },
            {
              question: 'Which statement reflects a sophisticated (rather than reductive) feminist reading?',
              options: [
                'It analyzes how power and gender roles operate in the text, including subtle or self-critical patterns',
                'It concludes simply that the women are good and the men are bad',
                'It ignores how women are represented in the text',
                'It judges the work only by how it made the reader feel',
              ],
              correctAnswer: 0,
              explanation: 'Mature feminist criticism analyzes how gender and power operate — which can be subtle, contradictory, or self-critical. "Women good, men bad" is the reductive caricature the lesson warns against.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit6-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 6 of 7 — Reader-Response, Structuralism & Deconstruction**

---

> 🔑 **The Idea:** This final cluster turns to **where meaning is located**. Does it live in the reader, in a system of signs, or does it never quite settle at all? These lenses push hardest on what "meaning" even is.`,
      },
      {
        id: 'crit6-reader-response',
        type: 'text' as const,
        content: `## Reader-Response Criticism

Formalism locates meaning *in the text*. **Reader-Response** criticism (Wolfgang **Iser**, Stanley **Fish**) relocates it to the **transaction between text and reader**.

Core claims:
- A text is full of **gaps** the reader must fill; meaning is *completed* in the act of reading.
- Different readers — and different *eras* of readers — actualize different meanings.
- Fish's **"interpretive communities"**: shared assumptions, not lone genius, shape what a group of readers sees.

> ⚠️ Reader-Response is **not** "anything goes / my feelings are the meaning." Readings are still constrained by the text and by the conventions of an interpretive community. The reader is *active*, not *unlimited*.`,
      },
      {
        id: 'crit6-reader-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement best captures the Reader-Response view of meaning?',
              options: [
                'Meaning is completed in the transaction between an active reader and the text’s gaps',
                'Meaning is fixed entirely by the words on the page, independent of any reader',
                'Meaning is determined solely by the author’s intention',
                'Meaning is whatever an individual reader privately feels, with no constraints',
              ],
              correctAnswer: 0,
              explanation: 'Reader-Response locates meaning in the interaction between reader and text — the reader fills the text’s gaps. It is neither purely in the text (formalism) nor purely private and unconstrained.',
            },
            {
              question: 'Stanley Fish’s "interpretive communities" idea claims that —',
              options: [
                'Shared assumptions of a group of readers shape what they find in a text',
                'Only the author belongs to the true interpretive community',
                'All readers everywhere must reach the same reading',
                'Texts have no readers',
              ],
              correctAnswer: 0,
              explanation: 'Fish argued that the conventions and assumptions shared by an "interpretive community" — not a lone reader or the text alone — guide and constrain how its members read.',
            },
          ],
        },
      },
      {
        id: 'crit6-structuralism',
        type: 'text' as const,
        content: `## Structuralism — Meaning as a System

**Structuralism** (rooted in linguist **Ferdinand de Saussure**) argues that meaning comes not from things themselves but from **relationships within a system** — especially **binary oppositions** (light/dark, nature/culture, raw/cooked).

| Saussure's terms | Meaning |
|------------------|---------|
| **Signifier** | The word/sound-image ("t-r-e-e") |
| **Signified** | The concept it points to (the idea of a tree) |
| **Arbitrary sign** | No natural link between word and thing — only convention |

A structuralist reads a single story as one instance of a **deeper underlying pattern** (a "grammar" of narrative) shared by many stories.

> 💡 Structuralism's big move: stop asking what a symbol "really" is, and start asking how it gets its meaning from what it is *opposed to* in the system.`,
      },
      {
        id: 'crit6-deconstruction',
        type: 'text' as const,
        content: `## Deconstruction — When the System Breaks Down

**Post-structuralism** and **deconstruction** (**Jacques Derrida**) accept structuralism's premise — meaning comes from differences between signs — and then push it to a destabilizing conclusion.

- Meaning is endlessly **deferred**: each word is defined by other words, with no final stopping point (Derrida's *différance*).
- Texts contain **internal contradictions** that undo their own apparent claims.
- The deconstructive reader finds the place where a text's privileged term secretly depends on the term it tries to subordinate.

| Lens | Where is meaning? |
|------|-------------------|
| Formalism | Fixed, in the text |
| Reader-Response | In the reader–text transaction |
| Structuralism | In a stable system of differences |
| **Deconstruction** | **Unstable — endlessly deferred, never fully present** |

> ⚠️ Deconstruction does *not* claim "texts mean nothing." It claims meaning can never be made fully **stable or final** — there is always more slippage to uncover.`,
      },
      {
        id: 'crit6-locate-meaning',
        type: 'dropdown-select' as const,
        content: `**Where Does Meaning Live?** 🔽

Match each lens to where it locates meaning.`,
        exercise: {
          dropdowns: [
            { label: 'Meaning is fixed and complete in the words on the page.', options: ['Formalism', 'Reader-Response', 'Deconstruction', 'Marxism'] },
            { label: 'Meaning is produced in the transaction between reader and text.', options: ['Reader-Response', 'Structuralism', 'Formalism', 'Postcolonialism'] },
            { label: 'Meaning is endlessly deferred and never fully stable.', options: ['Deconstruction', 'Formalism', 'Biographical', 'Archetypal'] },
          ],
          correctAnswers: ['Formalism', 'Reader-Response', 'Deconstruction'],
          hint1: 'The lens that seals meaning *inside the text* is *formalism*.',
          hint2: 'The lens that puts meaning in the *reader–text exchange* is *Reader-Response*.',
          hint3: 'The lens that says meaning is *never final* is *deconstruction*.',
          explanation: 'Formalism = meaning fixed in the text; Reader-Response = meaning made in the reader–text transaction; Deconstruction = meaning endlessly deferred and never fully stable.',
        },
      },
      {
        id: 'crit6-sign-text',
        type: 'text' as const,
        content: `## The Engine Underneath: the Sign

Both structuralism and deconstruction run on one idea from **Saussure**: the link between a word and its meaning is **arbitrary**. Nothing about the sounds in "dog" is doglike; the word means what it means only by *differing* from "cog," "bog," and "log."

Structuralism finds that reassuring — meaning is stable *within the system*. Deconstruction finds it destabilizing — if every word leans on other words, the chain never reaches solid ground. The next check pins down both moves.`,
      },
      {
        id: 'crit6-poststructure-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In Saussure’s structuralism, the relationship between a word (signifier) and the concept it points to (signified) is —',
              options: [
                'Arbitrary — fixed only by convention, with no natural link',
                'Natural and inevitable, fixed by the thing itself',
                'Decided by the individual reader’s feelings',
                'Determined by the author’s biography',
              ],
              correctAnswer: 0,
              explanation: 'Saussure argued the sign is arbitrary: nothing about the sound "tree" naturally connects to the concept of a tree — the link is pure convention within the language system.',
            },
            {
              question: 'Which best states what deconstruction claims about meaning?',
              options: [
                'Meaning can never be made fully stable or final; there is always more slippage to uncover',
                'Texts mean absolutely nothing at all',
                'Meaning is perfectly fixed by the dictionary',
                'Only the author can decide what a text means',
              ],
              correctAnswer: 0,
              explanation: 'Deconstruction does not say texts mean nothing. It says meaning is endlessly deferred and never fully stable — a text’s own contradictions keep undoing any final, settled reading.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englit-literary-criticism',
    sections: [
      {
        id: 'crit7-intro',
        type: 'text' as const,
        content: `# 📚 Critical Approaches to Literature

**Part 7 of 7 — Putting the Lenses to Work & Mastery Check**

---

You now hold a full toolkit: formalism, contextual lenses, the depth lenses, the power-and-identity lenses, and the meaning-location lenses. The final skill is **choosing and combining** them in an actual essay.`,
      },
      {
        id: 'crit7-master-table',
        type: 'text' as const,
        content: `## Quick Reference — The Whole Toolkit

| Lens | Central question |
|------|------------------|
| **Formalism / New Criticism** | How do the words *on the page* create meaning? |
| **Biographical** | How does the author's life illuminate the work? |
| **Historical / New Historicism** | How do the work and its era shape each other? |
| **Psychoanalytic** | What does the text desire, repress, and disguise? |
| **Archetypal** | What universal patterns and figures recur here? |
| **Marxist** | Whose class and labor does the text reveal or hide? |
| **Feminist / Gender** | How does the text construct gender and power? |
| **Postcolonial** | Whose voice is centered; whose is silenced by empire? |
| **Reader-Response** | How does the reader complete the text's meaning? |
| **Structuralism** | How does meaning arise from a system of differences? |
| **Deconstruction** | Where does the text undo its own stable meaning? |

> 🔑 A sophisticated AP essay often blends two lenses — e.g., a *formalist* close reading *in service of* a *feminist* claim. The close reading supplies evidence; the lens supplies the stakes.`,
      },
      {
        id: 'crit7-apply',
        type: 'text' as const,
        content: `## Worked Application

Take the image: *"She arranged the roses for the dinner her husband's guests would admire."*

- **Formalist:** the subordinating syntax — her action exists only *for* the dinner and *her husband's* guests — frames her as a decorator of someone else's event.
- **Feminist:** her labor exists to serve male social standing; she is positioned as ornament and host, never guest.
- **Marxist:** the unnamed "guests" and the implied servants reveal a class display the line treats as natural.

**Best combined thesis:** *Through its subordinating syntax and the woman's invisible domestic labor, the line stages how a wife's work is absorbed into her husband's social prestige.*

> 💡 Notice: the **formalist** reading supplies the *evidence* (the syntax, "for ... admire"), while the **feminist/Marxist** lenses supply the *significance*. That is the move AP graders reward most.`,
      },
      {
        id: 'crit7-choose-lens',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to argue that a poem’s meaning shifts depending on whether a 1920s or a 2020s audience reads it. Which lens is most directly relevant?',
              options: ['Reader-Response', 'Formalism', 'Archetypal', 'The Intentional Fallacy'],
              correctAnswer: 0,
              explanation: 'Reader-Response holds that different readers and eras actualize different meanings, making it the natural lens for an argument about how the audience changes the reading.',
            },
            {
              question: 'A thesis claims a story’s hero, mentor, and underworld journey echo patterns found across world myths. This is best supported by —',
              options: ['Archetypal criticism', 'Marxist criticism', 'Deconstruction', 'Biographical criticism'],
              correctAnswer: 0,
              explanation: 'Hero, mentor, and the journey to the underworld are archetypes — recurring cross-cultural patterns — so archetypal (mythological) criticism is the right framework.',
            },
          ],
        },
      },
      {
        id: 'crit7-organize-text',
        type: 'text' as const,
        content: `## Organizing the Toolkit in Your Head

Eleven lenses is a lot to hold. It helps to group them by the **question** they begin from:

| Family | Lenses | Starting question |
|--------|--------|-------------------|
| **Craft** | Formalism | What do the words *do*? |
| **Context** | Biographical, Historical / New Historicist | What world made this, and which does it make? |
| **Depth** | Psychoanalytic, Archetypal | What lies beneath the surface? |
| **Power** | Marxist, Feminist, Postcolonial | Who is centered, who is silenced? |
| **Meaning** | Reader-Response, Structuralism, Deconstruction | Where does meaning live? |

Use this grouping to answer the quick tally below.`,
      },
      {
        id: 'crit7-count-lenses',
        type: 'input-boxes' as const,
        content: `**Quick Tally** 🧮

Using the **Quick Reference** table above, answer these counting questions. Enter a number only.

**1)** How many of the eleven lenses listed center on **power or identity** (class, gender, empire)? *(Count Marxist, Feminist/Gender, and Postcolonial.)*
**2)** How many lenses in the table locate meaning **outside the fixed words of the text** — i.e., Reader-Response **and** Deconstruction? *(Count just those two.)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '2'],
          hint1: 'The power-and-identity lenses are Marxist, Feminist/Gender, and Postcolonial.',
          hint2: 'Reader-Response puts meaning in the reader; Deconstruction says it is never fixed.',
          hint3: 'Question 1 counts three lenses; question 2 counts exactly the two named.',
          explanation: '1) Three lenses center on power/identity: Marxist (class), Feminist/Gender (gender), Postcolonial (empire). 2) Two lenses locate meaning outside the fixed text: Reader-Response and Deconstruction.',
        },
      },
      {
        id: 'crit7-wrap',
        type: 'text' as const,
        content: `## Before the Exit Quiz

You have moved from "what does *criticism* even mean?" to a working command of eleven distinct lenses and how to combine them. The single thread running through all of it:

> 🔑 A critical approach is a **set of questions** that decides what counts as evidence and meaning. Strong AP writing chooses a lens on purpose, then uses **close textual evidence** to build a **defensible interpretive claim**.

Three questions remain. Answer all three to complete the lesson.`,
      },
      {
        id: 'crit7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A critic refuses to use the author’s interviews or biography and argues only from diction, imagery, and structure. This critic is working in the tradition of —',
              options: ['Formalism / New Criticism', 'Biographical criticism', 'Marxist criticism', 'Reader-Response'],
              correctAnswer: 0,
              explanation: 'Refusing biography and arguing strictly from the words on the page — diction, imagery, structure — is the defining commitment of Formalism / New Criticism. Importing the author’s stated intent would risk the Intentional Fallacy.',
            },
            {
              question: 'Which pairing of lens and central question is CORRECT?',
              options: [
                'Postcolonial → Whose voice is centered or silenced under empire?',
                'Formalism → How does the author’s childhood shape the work?',
                'Marxist → What universal archetypes recur across cultures?',
                'Reader-Response → How do the line breaks create sound?',
              ],
              correctAnswer: 0,
              explanation: 'Postcolonial criticism asks who is centered or silenced under empire. The other pairings are mismatched: childhood = biographical, archetypes = archetypal, line breaks/sound = formalist.',
            },
            {
              question: 'The strongest AP literary-analysis essays typically —',
              options: [
                'Use close textual evidence to support a defensible interpretive claim, often informed by a critical lens',
                'Summarize the plot thoroughly from beginning to end',
                'Declare the single correct meaning the author intended',
                'Report how the text made the writer personally feel',
              ],
              correctAnswer: 0,
              explanation: 'AP rewards a defensible interpretive thesis grounded in close textual evidence — exactly what the critical lenses help you generate. Plot summary, appeals to author intent alone, and pure emotional reaction are the classic ways to lose points.',
            },
          ],
        },
      },
    ],
  },
]
