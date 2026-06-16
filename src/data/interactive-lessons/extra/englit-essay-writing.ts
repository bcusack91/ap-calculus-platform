import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — AP Lit Essay Writing
 * (AP English Literature and Composition).
 * Registry key: 'englit-essay-writing' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: teach → models → interactive practice
 * (multiple-choice + dropdown + input-boxes) → exit quiz.
 * Non-math humanities topic: concept checks favor multiple-choice + dropdown,
 * with short-text input-boxes used for vocabulary/structure recall.
 * Every quoted line and literary term has been verified for accuracy.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit1-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 1 of 7 — The Three Free-Response Essays**

---

### Topics in This Part

| Section |
|---------|
| What the AP Lit Exam Asks You to Write |
| The Three Prompt Types |
| How the Reader Scores You |

> 🔑 **Key Concept:** The AP English Literature exam ends with a 2-hour, 3-essay Free-Response section. Every essay is graded on the **same 6-point rubric** with three rows: **Thesis (0–1)**, **Evidence & Commentary (0–4)**, and **Sophistication (0–1)**. Master that rubric and you master all three essays.`,
      },
      {
        id: 'lit1-three-essays',
        type: 'text' as const,
        content: `## What You Write

The Free-Response section gives you **three** distinct essay prompts. You write all three in **120 minutes** (about 40 minutes each).

| # | Prompt Type | What you get | What you do |
|---|-------------|--------------|-------------|
| Q1 | **Poetry Analysis** | A printed poem | Analyze how poetic techniques convey meaning |
| Q2 | **Prose Fiction Analysis** | A passage of prose | Analyze how literary techniques convey meaning |
| Q3 | **Literary Argument** | A thematic prompt (no passage) | Argue a thesis using a novel/play *you* choose |

> 💡 Q1 and Q2 are **closed-book** analyses of a text on the page. Q3 is an **open** argument — you supply the work from memory, so you must enter the exam with 3–4 novels or plays you know deeply.`,
      },
      {
        id: 'lit1-prompt-match',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which Free-Response question does NOT provide a text on the page for you to analyze?',
              options: ['Q3, the Literary Argument', 'Q1, the Poetry Analysis', 'Q2, the Prose Fiction Analysis', 'All three provide a text'],
              correctAnswer: 0,
              explanation: 'Q3 (Literary Argument) gives only a thematic prompt — you choose a novel or play from memory. Q1 and Q2 print a poem and a prose passage, respectively.',
            },
            {
              question: 'Roughly how many minutes should you spend on each of the three essays?',
              options: ['About 40 minutes', 'About 20 minutes', 'About 60 minutes', 'About 90 minutes'],
              correctAnswer: 0,
              explanation: 'The section is 120 minutes for 3 essays, so about 40 minutes each — including a few minutes to read and plan.',
            },
          ],
        },
      },
      {
        id: 'lit1-rubric',
        type: 'text' as const,
        content: `## The 6-Point Rubric

Since 2019, every AP Lit essay is scored out of **6 points** across three rows:

| Row | Name | Points | What earns it |
|-----|------|--------|---------------|
| A | **Thesis** | 0–1 | A defensible claim that answers the prompt |
| B | **Evidence & Commentary** | 0–4 | Specific textual evidence + reasoning that connects it to your claim |
| C | **Sophistication** | 0–1 | A more complex, nuanced understanding of the text |

> 🔑 **Where points live:** Row B is worth **4 of the 6 points** — two-thirds of your score is *evidence plus commentary*. The single biggest lever on your score is choosing strong evidence and explaining it well.`,
      },
      {
        id: 'lit1-rubric-check',
        type: 'dropdown-select' as const,
        content: `**Match the Rubric Row** 🔽

For each student move, choose the rubric row it most directly serves.`,
        exercise: {
          dropdowns: [
            { label: 'Stating a defensible claim in the intro:', options: ['Row A — Thesis', 'Row B — Evidence & Commentary', 'Row C — Sophistication'] },
            { label: 'Quoting a line and explaining its effect:', options: ['Row B — Evidence & Commentary', 'Row A — Thesis', 'Row C — Sophistication'] },
            { label: 'Noting a tension or complexity in the text:', options: ['Row C — Sophistication', 'Row A — Thesis', 'Row B — Evidence & Commentary'] },
          ],
          correctAnswers: ['Row A — Thesis', 'Row B — Evidence & Commentary', 'Row C — Sophistication'],
          hint1: 'The defensible claim is the definition of the Thesis row.',
          hint2: 'Quoting plus explaining the effect is the heart of Row B.',
          hint3: 'Complexity, tension, and nuance are exactly what the Sophistication row rewards.',
          explanation: 'A defensible claim = Row A (Thesis); evidence + commentary = Row B; nuance/complexity = Row C (Sophistication).',
        },
      },
      {
        id: 'lit1-points-bridge',
        type: 'text' as const,
        content: `## Lock In the Numbers

Before moving on, fix the scoring math in memory. The whole exam runs on three numbers: **6** points total, **4** of them in Row B, across **3** essays. Internalizing where the points live tells you where to spend your effort.`,
      },
      {
        id: 'lit1-points-input',
        type: 'input-boxes' as const,
        content: `**Point Tally** 📝

Enter a number in each box.

**1)** Total points on the AP Lit essay rubric: ______
**2)** Points the Evidence & Commentary row (Row B) is worth: ______
**3)** Number of essays in the Free-Response section: ______`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '3'],
          hint1: 'Thesis (1) + Evidence & Commentary (4) + Sophistication (1).',
          hint2: 'Row B alone carries two-thirds of the score.',
          hint3: 'Q1 Poetry, Q2 Prose, Q3 Literary Argument.',
          explanation: '1) 6 total. 2) Row B = 4 (the biggest share). 3) 3 essays in 120 minutes.',
        },
      },
      {
        id: 'lit1-recap',
        type: 'text' as const,
        content: `## Recap

You now know the terrain:
- **Three essays** (Poetry, Prose, Literary Argument) in **120 minutes**.
- One shared **6-point rubric**: Thesis (1) + Evidence & Commentary (4) + Sophistication (1).
- Row B carries the most weight — evidence and commentary win the essay.

> 💡 The rest of this lesson builds each rubric row in turn: Part 2 = thesis, Parts 3–4 = evidence & commentary, Part 7 = sophistication — plus the timing strategy that ties it together.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit2-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 2 of 7 — The Defensible Thesis**

---

> 🔑 **The Idea:** A thesis earns Row A when it is **defensible** — an interpretive *claim* about meaning that a reasonable reader could argue against. Restating the prompt or naming devices is not a thesis.`,
      },
      {
        id: 'lit2-defensible',
        type: 'text' as const,
        content: `## What "Defensible" Means

A defensible thesis makes an **arguable interpretive claim** about what the text means or does — not a fact, not a summary, not a list of devices.

| Statement | Defensible? | Why |
|-----------|-------------|-----|
| "The poem uses imagery and metaphor." | ❌ | Names devices; no claim about meaning |
| "The poem is about a storm." | ❌ | Summary of subject, not interpretation |
| "Through shifting imagery, the poem reframes the storm as a welcome release rather than a threat." | ✅ | Interpretive, arguable, answers *how meaning is made* |

> 💡 A strong test: **Could a smart classmate disagree?** If the answer is "no, that's just obvious," it isn't yet a thesis.`,
      },
      {
        id: 'lit2-thesis-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is the strongest defensible thesis for a poetry-analysis essay?',
              options: [
                'By contrasting caged and open-sky imagery, the speaker exposes freedom as something imagined rather than lived.',
                'The poet uses similes, alliteration, and personification throughout the poem.',
                'This poem is about a bird that wants to be free.',
                'The poem has four stanzas and a regular rhyme scheme.',
              ],
              correctAnswer: 0,
              explanation: 'Only the first option makes an arguable interpretive claim about meaning ("freedom as imagined rather than lived"). The others list devices, summarize, or describe form.',
            },
            {
              question: 'Why is "The author uses tone and diction to create mood" a weak thesis?',
              options: [
                'It names devices without claiming what specific meaning they create',
                'It is too long',
                'It mentions more than one device',
                'It is grammatically incorrect',
              ],
              correctAnswer: 0,
              explanation: 'A device list with no interpretive payoff is not defensible. The reader cannot disagree with "tone creates mood" — it says nothing specific about meaning.',
            },
          ],
        },
      },
      {
        id: 'lit2-build',
        type: 'text' as const,
        content: `## Building a Thesis: the "so what" move

A reliable formula moves from technique → effect → meaning:

> *Through* **[technique/pattern]**, *the text* **[does what]**, *revealing* **[larger meaning / so what]**.

**Worked build** for a passage where a character obsessively cleans a house after a loss:

1. **Technique/pattern:** repeated images of scrubbing and order.
2. **Effect:** the cleaning reads as ritual, not chore.
3. **Meaning (so what):** the character is trying to *control grief she cannot otherwise face.*

**Thesis:** *Through relentless images of scrubbing and order, the passage transforms housework into a ritual of control, revealing a woman managing a grief she cannot confront directly.*

> ⚠️ **Avoid the trap:** Stopping at the *effect* ("the cleaning is ritualistic") without the *so what*. The "revealing…" clause is what lifts a thesis from observation to argument.`,
      },
      {
        id: 'lit2-thesis-order',
        type: 'dropdown-select' as const,
        content: `**Assemble the Thesis** 🔽

Choose the part that belongs in each slot of the technique → effect → meaning formula, using the "scrubbing" example.`,
        exercise: {
          dropdowns: [
            { label: 'Technique / pattern:', options: ['repeated images of scrubbing and order', 'a woman who is sad', 'the house is dirty', 'grief is hard'] },
            { label: 'Effect:', options: ['the cleaning becomes a ritual of control', 'the house gets clean', 'the reader feels bored', 'nothing changes'] },
            { label: 'Meaning (so what):', options: ['she manages a grief she cannot confront directly', 'she likes a tidy home', 'cleaning is good exercise', 'the passage is well written'] },
          ],
          correctAnswers: ['repeated images of scrubbing and order', 'the cleaning becomes a ritual of control', 'she manages a grief she cannot confront directly'],
          hint1: 'The technique is the concrete textual pattern you can point to.',
          hint2: 'The effect is what that pattern does to how we read the action.',
          hint3: 'The "so what" connects the action to a deeper truth about the character.',
          explanation: 'Pattern (scrubbing imagery) → effect (ritual of control) → meaning (managing unconfronted grief). The meaning clause is what makes the thesis defensible.',
        },
      },
      {
        id: 'lit2-terms-bridge',
        type: 'text' as const,
        content: `## The Words the Rubric Uses

Two terms recur every time we talk about a thesis: a thesis must be **defensible** (arguable, not obvious), and it must avoid being mere **summary** (retelling with no claim). Knowing the exact vocabulary helps you self-check your own thesis under pressure.`,
      },
      {
        id: 'lit2-thesis-input',
        type: 'input-boxes' as const,
        content: `**Vocabulary Recall** 📝

One word per box.

**1)** A thesis must be ______ — an arguable claim a reasonable reader could dispute. (the rubric's adjective)
**2)** A statement that just retells what happens in the text, with no claim, is a ______.
**3)** The clause beginning "revealing…" supplies the larger meaning, often phrased as the "so ______?" payoff.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['defensible', 'summary', 'what'],
          hint1: 'It starts with "defens-" and is the exact word the rubric uses for the thesis.',
          hint2: 'Retelling the plot/subject with no interpretation = ______.',
          hint3: 'The interpretive test is "so ______?"',
          explanation: '1) defensible — arguable and interpretive. 2) summary — not a thesis. 3) what — the "so what?" meaning clause.',
        },
      },
      {
        id: 'lit2-recap',
        type: 'text' as const,
        content: `## Recap

A thesis earns Row A when it is **defensible**: an arguable interpretive claim, not a summary or device list.

> 🔑 Use the formula **Through [technique], the text [effect], revealing [so what].** The "revealing" clause is non-negotiable — it converts observation into argument. Next, in Part 3, we feed that thesis with evidence.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit3-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 3 of 7 — Evidence: Quote, Embed, Curate**

---

> 🔑 **Row B is worth 4 points.** The first half of those points comes from *evidence*: specific, well-chosen, smoothly embedded references to the text. Vague gestures ("the author uses good words") earn nothing.`,
      },
      {
        id: 'lit3-specific',
        type: 'text' as const,
        content: `## Specific Beats General

The rubric distinguishes **specific** evidence from **general** evidence. Quote the smallest exact phrase that proves your point.

| Evidence | Quality |
|----------|---------|
| "The author talks about the weather a lot." | General — no score-worthy specificity |
| "The speaker describes the sky as a 'bruised' grey." | Specific — exact diction you can analyze |

> 💡 The word **"bruised"** is analyzable: it implies injury and pain. "Talks about the weather" gives you nothing to interpret. **Choose evidence you can say something about.**`,
      },
      {
        id: 'lit3-evidence-input',
        type: 'input-boxes' as const,
        content: `**Vocabulary Recall** 📝

One word per box.

**1)** Tucking a quotation inside your own sentence with a lead-in is called ______ the quote.
**2)** A quote dropped in with no setup and no follow-up is a ______-and-run quote.
**3)** Evidence you can actually interpret is called ______ (the opposite of vague/general).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['embedding', 'hit', 'specific'],
          hint1: 'You "______" a quote when you weave it into your sentence.',
          hint2: 'A "____-and-run" quote is dropped and abandoned.',
          hint3: 'The rubric prizes ______ evidence over general evidence.',
          explanation: '1) embedding — lead-in + quote + follow-up. 2) hit (hit-and-run) — an unexplained quote. 3) specific — analyzable evidence.',
        },
      },
      {
        id: 'lit3-embed',
        type: 'text' as const,
        content: `## Embedding Quotes

**Embed** short quotations inside your own sentence rather than dropping them in alone.

| Style | Example |
|-------|---------|
| ❌ Dropped quote | The speaker is angry. "I will not stay." |
| ✅ Embedded quote | The speaker's flat refusal — "I will not stay" — signals a resolve that the earlier hesitation only hinted at. |

Rules of thumb:
- Keep quotes **short** (a phrase, not whole sentences when avoidable).
- **Lead in** with your own words so the quote completes your sentence.
- After the quote, **explain** — never let a quote stand as its own sentence.

> ⚠️ A "hit-and-run" quote (dropped, then unexplained) earns no commentary credit. Every quote needs a lead-in and a follow-up.`,
      },
      {
        id: 'lit3-embed-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence best EMBEDS the quotation "a thin, careful smile"?',
              options: [
                'Her greeting — "a thin, careful smile" — reveals a politeness she does not feel.',
                'She smiled at him. "A thin, careful smile."',
                'The author writes "a thin, careful smile" in the passage.',
                'Quote: "a thin, careful smile."',
              ],
              correctAnswer: 0,
              explanation: 'The first option leads in with the writer\'s own words, embeds the phrase mid-sentence, and adds interpretation ("politeness she does not feel"). The others drop the quote or merely announce it.',
            },
            {
              question: 'What is the main weakness of a "hit-and-run" quotation?',
              options: [
                'It is dropped in without a lead-in or follow-up explanation',
                'It is too short',
                'It uses quotation marks',
                'It comes from the assigned text',
              ],
              correctAnswer: 0,
              explanation: 'A hit-and-run quote stands alone with no setup and no analysis, so it earns evidence-with-no-commentary — and the rubric rewards evidence ONLY when paired with commentary.',
            },
          ],
        },
      },
      {
        id: 'lit3-curate',
        type: 'text' as const,
        content: `## Curating: choose the BEST, not the MOST

A common myth is that more quotes = a higher score. The rubric rewards **well-chosen, well-explained** evidence. Three quotes you analyze deeply beat ten you merely list.

> 🔑 **Quality + commentary > quantity.** A body paragraph with one rich quote and three sentences of reasoning outscores a paragraph that "quote-bombs" five lines with no analysis.

A good body paragraph follows the **P-E-C** loop, often more than once:

- **P** — Point (the paragraph's claim, tied to your thesis)
- **E** — Evidence (an embedded quote)
- **C** — Commentary (your reasoning connecting evidence to the point)`,
      },
      {
        id: 'lit3-pec-order',
        type: 'dropdown-select' as const,
        content: `**Order a Body Paragraph** 🔽

Put the P-E-C sentences in the order a strong body paragraph uses them.`,
        exercise: {
          dropdowns: [
            { label: 'First sentence:', options: ['Point — the paragraph\'s claim tied to the thesis', 'Evidence — an embedded quote', 'Commentary — reasoning about the quote'] },
            { label: 'Second sentence:', options: ['Evidence — an embedded quote', 'Point — the paragraph\'s claim tied to the thesis', 'Commentary — reasoning about the quote'] },
            { label: 'Third sentence:', options: ['Commentary — reasoning about the quote', 'Point — the paragraph\'s claim tied to the thesis', 'Evidence — an embedded quote'] },
          ],
          correctAnswers: [
            'Point — the paragraph\'s claim tied to the thesis',
            'Evidence — an embedded quote',
            'Commentary — reasoning about the quote',
          ],
          hint1: 'Open by telling the reader what this paragraph will prove.',
          hint2: 'Then supply the textual proof.',
          hint3: 'End by reasoning — the commentary that connects proof back to your point.',
          explanation: 'P-E-C: Point (claim) → Evidence (quote) → Commentary (reasoning). Commentary, not the quote, does the persuading.',
        },
      },
      {
        id: 'lit3-recap',
        type: 'text' as const,
        content: `## Recap

- Pick **specific** evidence you can actually analyze (analyzable diction, not vague summary).
- **Embed** quotes with a lead-in and a follow-up; no hit-and-run quotes.
- **Curate**: the best evidence well explained beats a pile of quotes. Run the **P-E-C** loop.

> 💡 Notice the loop ends on **Commentary** — that is the other half of Row B, and the focus of Part 4.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit4-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 4 of 7 — Commentary: Where Points Are Won**

---

> 🔑 **Commentary is the reasoning that connects your evidence to your claim.** It answers *why this quote matters* and *how it supports the thesis.* Readers consistently say weak commentary — not weak evidence — caps most scores at a 4/6.`,
      },
      {
        id: 'lit4-not-paraphrase',
        type: 'text' as const,
        content: `## Commentary ≠ Paraphrase

The #1 commentary error is **paraphrasing** the quote instead of **analyzing** it.

| After the quote "the sky was a bruised grey"… | Type |
|-----------------------------------------------|------|
| "This means the sky looked grey, like a bruise." | ❌ Paraphrase — just restates the image |
| "The word *bruised* frames the landscape as wounded, so the setting mirrors the speaker's own unhealed grief." | ✅ Commentary — interprets effect and links to meaning |

> 💡 Test: if your "analysis" could be replaced by "in other words, the quote says…", it's paraphrase. Real commentary explains an **effect** and ties to your **thesis**.`,
      },
      {
        id: 'lit4-paraphrase-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which follow-up is genuine COMMENTARY rather than paraphrase, after the quote "his laughter cracked"?',
              options: [
                'The verb "cracked" likens his laughter to breaking glass, hinting that his cheer is fragile and about to shatter into the grief beneath it.',
                'This shows that his laughter cracked.',
                'In other words, his laugh made a cracking sound.',
                'The author chose to write that his laughter cracked.',
              ],
              correctAnswer: 0,
              explanation: 'Option 1 interprets the verb\'s connotation (breaking glass → fragility) and links it to meaning (grief beneath the cheer). The others restate or merely note the quote — paraphrase, not analysis.',
            },
            {
              question: 'According to AP Lit readers, which most often limits an otherwise solid essay to a 4 out of 6?',
              options: [
                'Commentary that summarizes the text instead of analyzing it',
                'Using too many quotation marks',
                'Writing in the past tense',
                'Choosing a famous novel for Q3',
              ],
              correctAnswer: 0,
              explanation: 'Even with good evidence, commentary that drifts into plot summary caps Row B. The persuasion lives in reasoning, not retelling.',
            },
          ],
        },
      },
      {
        id: 'lit4-line-of-reasoning',
        type: 'text' as const,
        content: `## A Line of Reasoning

To earn the **top of Row B (4/4)**, your commentary must form a **line of reasoning** — claims that build on one another and consistently develop the thesis, not a scattered set of observations.

A line of reasoning has:
1. **Topic sentences** that each advance one part of the thesis.
2. **Commentary** in every paragraph that explicitly ties evidence back to the claim.
3. **Logical flow** — each paragraph follows from the last (often signposted with transitions like *moreover*, *yet*, *as a result*).

> ⚠️ Three disconnected "device hunts" (here's an image, here's a simile, here's irony) do **not** make a line of reasoning. The paragraphs must add up to the thesis.`,
      },
      {
        id: 'lit4-reasoning-input',
        type: 'input-boxes' as const,
        content: `**Vocabulary Recall** 📝

Fill in the missing word (one word per box).

**1)** Restating what a quote says, instead of analyzing it, is the error called ______.
**2)** Commentary that builds claim upon claim to develop the thesis is called a line of ______.
**3)** In the P-E-C loop, the letter **C** stands for ______.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['paraphrase', 'reasoning', 'commentary'],
          hint1: 'It starts with "para-" and means restating in other words.',
          hint2: 'AP calls it a "line of ___" — synonym for logical argument.',
          hint3: 'P = Point, E = Evidence, C = ___.',
          explanation: '1) paraphrase — restating, not analyzing. 2) reasoning — a connected argument. 3) commentary — the reasoning that wins Row B.',
        },
      },
      {
        id: 'lit4-classify-bridge',
        type: 'text' as const,
        content: `## Spot the Difference Yourself

The fastest way to stop paraphrasing is to learn to *catch* it. Paraphrase restates the quote in plainer words; commentary explains an **effect** and links it to meaning. Practice telling them apart on the same quote below.`,
      },
      {
        id: 'lit4-classify',
        type: 'dropdown-select' as const,
        content: `**Paraphrase or Commentary?** 🔽

For each follow-up to the quote "her voice was ice," choose which it is.`,
        exercise: {
          dropdowns: [
            { label: '"This means her voice sounded cold, like ice."', options: ['Paraphrase', 'Commentary'] },
            { label: '"The metaphor freezes her warmth into hostility, signaling a rift the dialogue never names aloud."', options: ['Commentary', 'Paraphrase'] },
            { label: '"In other words, she spoke coldly."', options: ['Paraphrase', 'Commentary'] },
          ],
          correctAnswers: ['Paraphrase', 'Commentary', 'Paraphrase'],
          hint1: 'If it just restates the image in plainer words, it is paraphrase.',
          hint2: 'If it interprets an EFFECT and ties to meaning, it is commentary.',
          hint3: 'The "in other words…" rephrasing is the classic paraphrase tell.',
          explanation: 'Only the middle option interprets the metaphor\'s effect and links it to meaning (a rift) — that is commentary. The other two merely restate.',
        },
      },
      {
        id: 'lit4-recap',
        type: 'text' as const,
        content: `## Recap

- Commentary **interprets effect** and **links to the thesis** — it never paraphrases.
- The top of Row B requires a **line of reasoning**: connected claims, not a device scavenger hunt.
- Each paragraph's commentary should answer **"so what?"** about its evidence.

> 🔑 With Thesis (Part 2) + Evidence and Commentary (Parts 3–4) in hand, you can reliably reach 5/6. Parts 5 and 6 adapt this to the specific demands of poetry and prose, and Part 7 chases the final Sophistication point.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit5-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 5 of 7 — The Poetry Essay (Q1)**

---

> 🔑 **Q1 prints a poem.** Your job is not to find devices for their own sake but to analyze how the poem's craft — imagery, diction, structure, sound, speaker — **creates meaning.** Always tie technique to meaning.`,
      },
      {
        id: 'lit5-toolkit',
        type: 'text' as const,
        content: `## A Poetry Reading Toolkit

When you read the Q1 poem, look for these meaning-bearing elements:

| Element | Question to ask | Term to know |
|---------|-----------------|--------------|
| **Speaker** | Who speaks, and what's their attitude? | *Tone* = the speaker's attitude |
| **Imagery** | What sensory pictures recur? | *Imagery* = sensory language |
| **Diction** | Which exact word choices carry weight? | *Connotation* = a word's emotional charge |
| **Structure** | Where does the poem **shift**? | *Volta* = a turn in argument or feeling |
| **Sound** | Does rhythm or rhyme reinforce sense? | *Meter*, *enjambment* |
| **Comparison** | What is likened to what? | *Metaphor*, *simile*, *conceit* |

> 💡 **Mood vs. Tone:** *Tone* is the **speaker's** attitude; *mood* is the **reader's** feeling. They're related but not the same — keep them straight on the exam.`,
      },
      {
        id: 'lit5-poetry-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Q1 essay observes "the poem uses a metaphor in line 4." To turn this into scoring analysis, the writer should next:',
              options: [
                'Explain what the metaphor reveals about the speaker\'s feeling and tie it to the thesis',
                'Point out two more metaphors in other lines',
                'Count the syllables in line 4',
                'Note that line 4 rhymes with line 2',
              ],
              correctAnswer: 0,
              explanation: 'Identifying a device is only evidence. The score comes from commentary: what the metaphor DOES to meaning, connected to the thesis. Listing more devices repeats the same mistake.',
            },
            {
              question: 'Which word would most likely signal a volta?',
              options: ['Yet', 'And', 'The', 'Also'],
              correctAnswer: 0,
              explanation: '"Yet" introduces contrast and often marks the poem\'s turn. "And," "the," and "also" tend to continue rather than reverse the thought.',
            },
          ],
        },
      },
      {
        id: 'lit5-shift',
        type: 'text' as const,
        content: `## Hunt for the Shift (Volta)

Many high-scoring poetry essays are organized around the poem's **turn** — the **volta**, a shift in tone, argument, or perspective. Voltas are often signaled by:

- A pivot word: *but*, *yet*, *however*, *still*, *now*.
- A stanza break or a change in punctuation.
- A move from problem → resolution, or outside → inside.

**Why it matters:** Structuring your essay around *before the shift vs. after the shift* almost guarantees a line of reasoning, because the poem's own structure carries your argument.

> ⚠️ Don't just *label* the volta ("there is a shift in line 9"). Explain what the shift **does to meaning** — that's the commentary that scores.`,
      },
      {
        id: 'lit5-poetry-terms',
        type: 'dropdown-select' as const,
        content: `**Name the Device** 🔽

Match each example to its term.`,
        exercise: {
          dropdowns: [
            { label: '"Her smile was the sun breaking through clouds." (direct comparison, no "like/as")', options: ['Metaphor', 'Simile', 'Alliteration', 'Hyperbole'] },
            { label: 'A turn from despair to hope at the poem\'s midpoint:', options: ['Volta', 'Meter', 'Stanza', 'Refrain'] },
            { label: '"the cold, careful, calculating clerk" (repeated initial consonant):', options: ['Alliteration', 'Assonance', 'Onomatopoeia', 'Metaphor'] },
            { label: 'The speaker\'s attitude toward the subject:', options: ['Tone', 'Mood', 'Meter', 'Plot'] },
          ],
          correctAnswers: ['Metaphor', 'Volta', 'Alliteration', 'Tone'],
          hint1: 'A direct comparison without "like" or "as" is a metaphor; with them it is a simile.',
          hint2: 'The Italian word for the structural "turn" in a poem is the volta.',
          hint3: 'Repeated initial CONSONANT sounds = alliteration; the SPEAKER\'s attitude = tone.',
          explanation: 'Metaphor (direct comparison), volta (the turn), alliteration (repeated initial consonants), and tone (the speaker\'s attitude) are core Q1 vocabulary.',
        },
      },
      {
        id: 'lit5-terms-bridge',
        type: 'text' as const,
        content: `## From Naming to Knowing

Naming devices is only the warm-up. The recall below makes sure three structural terms — *volta*, *tone*, and *connotation* — are second nature, because you will reach for them in nearly every Q1 essay.`,
      },
      {
        id: 'lit5-poetry-input',
        type: 'input-boxes' as const,
        content: `**Vocabulary Recall** 📝

One word per box.

**1)** The structural turn or shift in a poem (Italian term): ______
**2)** The speaker's attitude toward the subject is the poem's ______.
**3)** The emotional charge a word carries beyond its dictionary definition is its ______.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['volta', 'tone', 'connotation'],
          hint1: 'It begins with "vol-" and names the poem\'s turn.',
          hint2: 'Speaker\'s attitude = ______ (not "mood," which is the reader\'s feeling).',
          hint3: 'A word\'s emotional charge (vs. its literal denotation) is its ______.',
          explanation: '1) volta — the turn. 2) tone — the speaker\'s attitude. 3) connotation — a word\'s emotional charge.',
        },
      },
      {
        id: 'lit5-recap',
        type: 'text' as const,
        content: `## Recap

- Read the Q1 poem for **speaker, imagery, diction, structure, sound, comparison** — always asking *how does this make meaning?*
- Organize around the **volta** when the poem turns; it hands you a built-in line of reasoning.
- **Tone** = speaker's attitude; **mood** = reader's feeling. Never just label a device — explain its effect.

> 💡 Prose (Q2) uses the same engine — thesis, evidence, commentary — but a different toolkit. That's Part 6.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit6-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 6 of 7 — Prose (Q2) & Literary Argument (Q3)**

---

> 🔑 **Q2 analyzes a prose passage; Q3 argues a thesis about a whole work from memory.** Both reuse your thesis–evidence–commentary engine, but Q2 leans on narrative craft and Q3 on deep recall of a chosen text.`,
      },
      {
        id: 'lit6-prose-toolkit',
        type: 'text' as const,
        content: `## The Prose Toolkit (Q2)

For a fiction passage, analyze the tools of **narrative**:

| Element | Question to ask | Term |
|---------|-----------------|------|
| **Point of view** | Who narrates, and how much do they know? | *First person*, *third-person omniscient/limited* |
| **Characterization** | How is character revealed — by action, speech, others? | *Direct* vs. *indirect characterization* |
| **Tone** | What is the narrator's attitude? | *Tone*, *diction* |
| **Detail & syntax** | Which details are selected; how are sentences built? | *Selection of detail*, *syntax* |
| **Irony** | Does meaning diverge from appearance? | *Verbal*, *situational*, *dramatic irony* |

> 💡 **Dramatic irony** = the reader knows something a character does not. **Situational irony** = an outcome that contradicts expectation. **Verbal irony** = saying the opposite of what is meant. Use the right label.`,
      },
      {
        id: 'lit6-irony-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The reader knows a letter is a forgery, but the trusting heroine does not. This is:',
              options: ['Dramatic irony', 'Verbal irony', 'Situational irony', 'Not irony at all'],
              correctAnswer: 0,
              explanation: 'Dramatic irony occurs when the audience knows something a character does not — here, that the letter is forged.',
            },
            {
              question: 'A fire station burns down. The mismatch between expectation and outcome is:',
              options: ['Situational irony', 'Dramatic irony', 'Verbal irony', 'Characterization'],
              correctAnswer: 0,
              explanation: 'Situational irony is an outcome that sharply contradicts what we would expect — a fire station, of all places, burning down.',
            },
          ],
        },
      },
      {
        id: 'lit6-q3',
        type: 'text' as const,
        content: `## The Literary Argument (Q3)

Q3 gives a **thematic prompt** and asks you to argue a thesis about a **novel or play of literary merit** that you choose from memory.

To do Q3 well:
- **Prepare 3–4 works** in advance. Know characters, key scenes, the arc, and central themes cold.
- **Answer the actual prompt** — bend your known work to *this* question, don't recite a canned summary.
- **Use specific evidence from memory** — name characters, moments, and turning points (you won't have the text, so precision of recall is your "quotation").
- **Avoid plot summary.** Q3 fails most often when it retells the story instead of arguing a claim.

> ⚠️ "Literary merit" matters: choose complex, widely taught works (e.g., *Beloved*, *Hamlet*, *The Great Gatsby*, *Their Eyes Were Watching God*). Avoid thin or purely commercial books that give you little to analyze.`,
      },
      {
        id: 'lit6-q3-input',
        type: 'input-boxes' as const,
        content: `**Quick Recall** 📝

One word (or short phrase) per box.

**1)** The biggest pitfall on Q3 is retelling events instead of arguing — this error is called plot ______.
**2)** Q3 asks you to choose a work of literary ______.
**3)** Before exam day, you should have how many works prepared in depth? (a single number is fine — give the lower end of the recommended 3–4)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['summary', 'merit', '3'],
          hint1: 'Retelling the story = plot ______.',
          hint2: 'The prompt requires a work of literary ______ — its worth/quality.',
          hint3: 'The recommendation is 3–4 works; the lower bound is a single digit.',
          explanation: '1) summary — the cardinal Q3 sin. 2) merit — complex, analyzable works. 3) 3 (prepare 3–4 works deeply).',
        },
      },
      {
        id: 'lit6-q-match-bridge',
        type: 'text' as const,
        content: `## Keep the Three Essays Straight

It is easy to blur the three prompts under time pressure. The check below cements which is which: Q1 = a printed **poem**, Q2 = a printed **prose** passage, Q3 = an **open** argument on a work you supply. Same engine, different starting material.`,
      },
      {
        id: 'lit6-q-match',
        type: 'dropdown-select' as const,
        content: `**Which Essay Is This?** 🔽

Match each demand to the essay it describes.`,
        exercise: {
          dropdowns: [
            { label: 'Analyze a printed prose passage\'s narrative craft:', options: ['Q2 Prose', 'Q1 Poetry', 'Q3 Literary Argument'] },
            { label: 'Argue a thesis about a novel you supply from memory:', options: ['Q3 Literary Argument', 'Q1 Poetry', 'Q2 Prose'] },
            { label: 'Analyze how a printed poem\'s devices create meaning:', options: ['Q1 Poetry', 'Q2 Prose', 'Q3 Literary Argument'] },
          ],
          correctAnswers: ['Q2 Prose', 'Q3 Literary Argument', 'Q1 Poetry'],
          hint1: 'A printed prose passage with narrative craft = Q2.',
          hint2: 'No passage, choose your own novel = Q3.',
          hint3: 'A printed poem = Q1.',
          explanation: 'Q1 = printed poem; Q2 = printed prose passage; Q3 = open argument on a chosen work.',
        },
      },
      {
        id: 'lit6-recap',
        type: 'text' as const,
        content: `## Recap

- **Q2 prose:** analyze point of view, characterization, tone, detail/syntax, and irony.
- **Q3 argument:** prepare 3–4 works of **literary merit**, answer the real prompt, evidence from memory, **no plot summary.**
- Same engine throughout: defensible **thesis** → specific **evidence** → linked **commentary.**

> 💡 You can now reach a solid 5/6 on all three. Part 7 chases the final point — **Sophistication** — and locks in timing and structure.`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englit-essay-writing',
    sections: [
      {
        id: 'lit7-intro',
        type: 'text' as const,
        content: `# 🖋️ AP Lit Essay Writing

**Part 7 of 7 — Sophistication, Timing & Exit Quiz**

---

You can build a defensible thesis, marshal specific evidence, and reason in commentary. Now we earn the sixth point and put it all under the clock.`,
      },
      {
        id: 'lit7-soph',
        type: 'text' as const,
        content: `## The Sophistication Point (Row C)

Row C (1 point) rewards a **more complex understanding** of the text. You can earn it by:

| Path to Row C | What it looks like |
|---------------|--------------------|
| **Tension / complexity** | Acknowledging a counter-reading or paradox in the text |
| **Broad significance** | Situating your reading in a wider context (the human condition, an idea, a movement) |
| **Vivid, controlled style** | Prose that is consistently precise and persuasive |
| **Nuanced thesis** | A thesis that captures complexity rather than a flat statement |

> ⚠️ Row C is **all or nothing** and is earned across the whole essay, not in one "deep" sentence. Tacking a grand phrase about "the human experience" onto a weak essay does **not** earn it — sophistication must be *demonstrated*, not announced.`,
      },
      {
        id: 'lit7-soph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which move most genuinely earns the Sophistication point?',
              options: [
                'Showing how the poem\'s hopeful ending is undercut by its darker imagery, so the comfort it offers is deliberately uneasy',
                'Ending the essay with "This proves that literature reflects the human condition."',
                'Using the word "juxtaposition" several times',
                'Writing a longer conclusion',
              ],
              correctAnswer: 0,
              explanation: 'Naming a real tension (hope undercut by dark imagery) demonstrates a complex understanding. Grand closing clichés, jargon, and length do not.',
            },
            {
              question: 'How is the Sophistication point scored?',
              options: [
                'All-or-nothing, earned across the whole essay',
                'Partial credit, half a point at a time',
                'Only from the thesis sentence',
                'Automatically if the essay is over two pages',
              ],
              correctAnswer: 0,
              explanation: 'Row C is a single all-or-nothing point reflecting sophistication demonstrated throughout — not partial, not from one sentence, not length-based.',
            },
          ],
        },
      },
      {
        id: 'lit7-timing',
        type: 'text' as const,
        content: `## Timing & Structure Under the Clock

A repeatable 40-minute plan per essay:

| Minutes | Task |
|---------|------|
| 0–5 | **Read & annotate**; mark the shift/key evidence |
| 5–8 | **Plan**: write your thesis + 2–3 paragraph points |
| 8–35 | **Draft**: intro (thesis), 2–3 P-E-C body paragraphs |
| 35–40 | **Quick conclusion** + proofread the thesis |

A clean structure:
1. **Intro** — one to two sentences of context, then the **thesis**.
2. **Body** — each paragraph = one point, run through **P-E-C**.
3. **Conclusion** — brief; reinforce the argument, gesture at significance (a Row C opportunity).

> 🔑 **Always write all three essays.** A rushed third essay still scores points; a blank one scores zero. Budget time so none is left blank.`,
      },
      {
        id: 'lit7-timing-input',
        type: 'input-boxes' as const,
        content: `**Plan Recall** 📝

**1)** With 120 minutes for 3 essays, the per-essay budget is about how many minutes? (a number)
**2)** A complete essay structure is intro, body, and ______ (one word).
**3)** The all-or-nothing rubric row that rewards complexity is Row ______ (a single letter).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', 'conclusion', 'C'],
          hint1: '120 ÷ 3 = ?',
          hint2: 'Intro, body, and the closing paragraph called the ______.',
          hint3: 'Thesis = A, Evidence & Commentary = B, Sophistication = ?',
          explanation: '1) 40 minutes each. 2) conclusion. 3) Row C (Sophistication) — the all-or-nothing complexity point.',
        },
      },
      {
        id: 'lit7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Rubric Row | Points | How to earn it |
|------------|--------|----------------|
| A — Thesis | 1 | Defensible interpretive claim: *Through [technique], the text [effect], revealing [so what].* |
| B — Evidence & Commentary | 4 | Specific embedded evidence + a **line of reasoning** (P-E-C, no paraphrase) |
| C — Sophistication | 1 | Demonstrated complexity, tension, significance, or controlled style |

> 💡 Build A and B first (that's a 5), then layer C. Across Q1/Q2/Q3 the engine never changes — only the toolkit does.`,
      },
      {
        id: 'lit7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How many of the 6 rubric points come from the Evidence & Commentary row?',
              options: ['4', '1', '2', '6'],
              correctAnswer: 0,
              explanation: 'Row B (Evidence & Commentary) is worth 4 of the 6 points — the largest share — which is why evidence and reasoning matter most.',
            },
            {
              question: 'A student writes a great quote, then says only "This shows the character is sad." The main problem is:',
              options: [
                'The follow-up paraphrases instead of analyzing the quote\'s effect',
                'The quote is too specific',
                'The quote should not be in quotation marks',
                'The sentence is too long',
              ],
              correctAnswer: 0,
              explanation: '"This shows the character is sad" restates rather than analyzes. Commentary must interpret the quote\'s effect and tie it to the thesis to earn Row B.',
            },
            {
              question: 'Which best describes the Q3 Literary Argument essay?',
              options: [
                'You argue a thesis about a novel or play you choose from memory, with no passage provided',
                'You analyze a printed poem\'s devices',
                'You analyze a printed prose passage',
                'You summarize the plot of any book you like',
              ],
              correctAnswer: 0,
              explanation: 'Q3 provides only a thematic prompt; you supply a work of literary merit from memory and argue a defensible thesis — not a plot summary.',
            },
          ],
        },
      },
    ],
  },
]
