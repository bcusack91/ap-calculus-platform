import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rhetorical Analysis & Argument Essays
 * (AP English Language and Composition).
 * Registry key: 'englang-rhetorical-analysis-essay' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: teach → annotated models → interactive practice
 * (multiple-choice + dropdown + input-boxes) → exit quiz.
 * Non-math topic: favors multiple-choice + dropdown concept checks; input-boxes
 * used only for short, unambiguous fill-ins (rubric scores, term recall).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae1-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 1 of 7 — The Rhetorical Situation**

---

### Topics in This Part

| Section |
|---------|
| What "Rhetoric" Actually Means |
| The Rhetorical Situation (SPACECAT) |
| Reading for *How*, Not Just *What* |

> 🔑 **Key Concept:** AP Lang asks you to analyze **how** a writer builds an argument, not just **what** the argument says. Every analytical move you make starts by pinning down the **rhetorical situation** — the speaker, audience, purpose, and context behind a text. Get that wrong and the rest of your essay drifts off-target.`,
      },
      {
        id: 'rae1-what-is-rhetoric',
        type: 'text' as const,
        content: `## What "Rhetoric" Actually Means

**Rhetoric** is the art of using language to inform, persuade, or move an audience. Aristotle defined it as discovering "the available means of persuasion" in any situation.

When you write a **rhetorical analysis**, you are not arguing whether the author is *right*. You are explaining the **choices** the author made and the **effect** those choices have on a specific audience. That distinction is the whole game.

| You are NOT doing | You ARE doing |
|-------------------|---------------|
| Summarizing the passage | Analyzing the writer's *strategies* |
| Saying whether you agree | Explaining the *effect* on the audience |
| Listing devices ("there is a metaphor") | Connecting devices to *purpose* |

> ⚠️ **The #1 trap:** *device-spotting.* Naming "the author uses pathos" earns nothing. You must explain **what the choice accomplishes** and **how it advances the writer's purpose.** Strategy → effect → purpose, every time.`,
      },
      {
        id: 'rae1-summary-vs-analysis',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence is *analysis* rather than *summary*?',
              options: [
                'King argues that the time for patient waiting is over and that racial justice has to arrive now, not later.',
                "By repeating \"now is the time,\" King builds an insistent rhythm that presses listeners to stop waiting for justice.",
                'King gave the speech at the 1963 March on Washington, addressing a huge crowd at the Lincoln Memorial.',
                'The passage is about civil rights, the problem of injustice, and the long delay in fixing that problem.',
              ],
              correctAnswer: 1,
              explanation: 'Analysis names a *choice* (the repetition of "now is the time"), describes its *effect* (an insistent rhythm), and ties it to *purpose* (pressing listeners to stop waiting). The other sentences only restate content or give the setting.',
            },
            {
              question: 'In a rhetorical analysis essay, your job is primarily to:',
              options: [
                'Judge whether the author\'s argument is correct and well supported',
                'Restate the author\'s main points in the order they appear',
                "Explain how the author's choices affect the audience",
                'Argue the opposing side of the issue using your own examples',
              ],
              correctAnswer: 2,
              explanation: 'Rhetorical analysis is about *how*, not *whether*. You explain the writer\'s strategies and their effects on a specific audience — you neither agree, disagree, nor merely summarize.',
            },
          ],
        },
      },
      {
        id: 'rae1-rhetorical-situation',
        type: 'text' as const,
        content: `## The Rhetorical Situation

Every text is produced by **someone**, for **someone**, for a **reason**, in a **moment**. Those four anchors are the **rhetorical situation**. A popular memory device is **SPACECAT**:

| Letter | Element | Question to ask |
|--------|---------|-----------------|
| **S** | Speaker | Who is the persona/voice? What's their credibility? |
| **P** | Purpose | What does the speaker want the audience to do/feel/think? |
| **A** | Audience | Who is being addressed? What do they value? |
| **C** | Context | What occasion/moment prompted this text? |
| **E** | Exigence | What problem or urgency sparked it? |
| **C** | Choices | What rhetorical strategies are used? |
| **A** | Appeals | Ethos, pathos, logos at work? |
| **T** | Tone | The speaker's attitude toward subject/audience |

> 💡 **Audience is the hinge.** The *same* word choice can be reassuring to one audience and threatening to another. You can't judge an effect until you know **who is listening.**`,
      },
      {
        id: 'rae1-spacecat-drill',
        type: 'dropdown-select' as const,
        content: `**Map the Situation** 🔽

A senator delivers a televised address to the nation the night after a natural disaster, urging citizens to donate to relief funds. Match each element of the rhetorical situation.`,
        exercise: {
          dropdowns: [
            { label: 'Exigence (what sparked the text):', options: ['The natural disaster and its victims', 'The senator\'s upcoming re-election race', 'A scheduled yearly address on the budget', 'A new report on long-term weather trends'] },
            { label: 'Audience:', options: ['Citizens watching the address', 'Fellow senators voting on aid', 'Relief workers already on site', 'Reporters covering the storm'] },
            { label: 'Purpose:', options: ['To persuade citizens to donate', 'To report the extent of the damage', 'To praise the first responders', 'To build support for re-election'] },
          ],
          correctAnswers: ['The natural disaster and its victims', 'Citizens watching the address', 'To persuade citizens to donate'],
          hint1: 'Exigence is the *problem or urgency* that made the speech necessary.',
          hint2: 'Audience is *who is being addressed* — the people the speaker hopes to move.',
          hint3: 'Purpose is the *desired outcome*: what the speaker wants the audience to do.',
          explanation: 'The disaster is the exigence (the urgent problem), the watching citizens are the audience, and persuading them to donate is the purpose. Context = the televised night-after-disaster moment.',
        },
      },
      {
        id: 'rae1-read-for-how',
        type: 'text' as const,
        content: `## Reading for *How*, Not Just *What*

When you first read an AP Lang passage, annotate for **moves**, not just meaning. Ask at every paragraph:

- **What is the writer doing here?** (telling a story, conceding a point, citing data, mocking an opponent)
- **Why here?** (Why this move at this moment in the argument?)
- **What does it do to the audience?**

This shift — from *what is being said* to *what the writer is doing* — is the mental habit the whole essay depends on.

> 🔑 **Takeaway:** Lock down the rhetorical situation first (SPACECAT), then read the passage as a sequence of deliberate **choices**. In Part 2 we name the three classical appeals those choices draw on.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae2-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 2 of 7 — Ethos, Pathos, Logos**

---

> 🔑 **The Idea:** Aristotle named three appeals a speaker uses to persuade: **ethos** (credibility), **pathos** (emotion), and **logos** (logic). Identifying which appeal a passage leans on — and *how* — is the backbone of most rhetorical analysis.`,
      },
      {
        id: 'rae2-three-appeals',
        type: 'text' as const,
        content: `## The Three Appeals

| Appeal | Persuades through | Signals to look for |
|--------|-------------------|---------------------|
| **Ethos** | the speaker's *character & credibility* | credentials, shared values, fairness, acknowledging the other side |
| **Pathos** | the audience's *emotions* | vivid imagery, anecdotes, charged diction, appeals to fear/hope/pride |
| **Logos** | *logic & evidence* | data, statistics, cause-effect reasoning, expert testimony, syllogisms |

### Quick examples

- **Ethos:** *"As a physician of thirty years, I have watched this disease firsthand."* → builds trust through experience.
- **Pathos:** *"Picture a child who goes to bed hungry every night."* → stirs sympathy through a vivid image.
- **Logos:** *"Studies show a 40% drop in cases after the policy."* → persuades with evidence.

> 💡 Most persuasive texts **blend** all three. Your job is not to pick the *only* appeal but to explain how the **dominant** appeal — and the blend — advances the purpose.`,
      },
      {
        id: 'rae2-identify-appeal',
        type: 'multiple-choice' as const,
        content: `**Name the Appeal** 🎯`,
        exercise: {
          questions: [
            {
              question: '"In my four decades serving this community as a teacher, I have never seen a budget cut this reckless." Which appeal dominates?',
              options: ['Pathos', 'Ethos', 'Logos', 'No appeal'],
              correctAnswer: 1,
              explanation: 'The speaker leans on personal credibility — "four decades serving this community as a teacher" establishes authority and trustworthiness. That is **ethos.**',
            },
            {
              question: '"If we do nothing, by 2040 nearly one-third of these wetlands will simply be gone." Which appeal dominates?',
              options: ['Ethos', 'Pathos', 'Logos', 'Tone'],
              correctAnswer: 2,
              explanation: 'A projection with a specific figure ("one-third... by 2040") is evidence-and-reasoning based, so it is primarily **logos.** Note the loss could also evoke pathos — but the *structure* here is data-driven.',
            },
            {
              question: '"Imagine your own grandmother, alone and shivering, with no one to call." This most strongly appeals to:',
              options: ['Logos', 'Ethos', 'Pathos', 'Syntax'],
              correctAnswer: 2,
              explanation: 'A vivid, emotionally charged image ("your own grandmother... shivering") is designed to stir feeling. That is **pathos.**',
            },
          ],
        },
      },
      {
        id: 'rae2-blend',
        type: 'text' as const,
        content: `## Appeals Work Together

Consider this single sentence from a public-health op-ed:

> *"As an ER nurse, I've held the hands of patients who waited too long — and the data is brutal: untreated, this condition kills within hours."*

| Phrase | Appeal | What it does |
|--------|--------|--------------|
| "As an ER nurse" | ethos | establishes firsthand authority |
| "held the hands of patients" | pathos | humanizes the stakes |
| "the data is brutal... kills within hours" | logos | adds urgency with factual weight |

One sentence, three appeals, one purpose: convince readers the condition is an emergency.

> ⚠️ **Don't stop at the label.** "This is pathos" is device-spotting. Push to: *this pathos makes an abstract policy feel personal, so the skeptical reader can no longer dismiss it as someone else's problem.*`,
      },
      {
        id: 'rae2-appeal-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Strategy to Appeal** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Citing a peer-reviewed study:', options: ['Logos', 'Pathos', 'Ethos'] },
            { label: 'Admitting the opposing side has a fair point:', options: ['Ethos', 'Pathos', 'Logos'] },
            { label: 'Describing a starving child in vivid detail:', options: ['Pathos', 'Logos', 'Ethos'] },
          ],
          correctAnswers: ['Logos', 'Ethos', 'Pathos'],
          hint1: 'Evidence and data appeal to logic.',
          hint2: 'Fairness and acknowledging the other side build the speaker\'s *credibility*.',
          hint3: 'Vivid, feeling-driven images target *emotion*.',
          explanation: 'Studies → logos (logic/evidence); conceding a fair point → ethos (it makes the speaker seem reasonable and trustworthy); a vivid suffering image → pathos (emotion).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae3-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 3 of 7 — Rhetorical Strategies & Devices**

---

> 🔑 **The Idea:** Appeals are the *goals*; **strategies and devices** are the *tools*. Diction, syntax, imagery, juxtaposition, and figurative language are the concrete choices you'll point to as evidence in your essay.`,
      },
      {
        id: 'rae3-strategies-table',
        type: 'text' as const,
        content: `## A Working Toolkit

You do not need to memorize a hundred Greek terms. You need a reliable handful and the habit of explaining their **effect.**

| Strategy / Device | What it is | Typical effect |
|-------------------|-----------|----------------|
| **Diction** | word choice (connotation) | sets tone; reveals attitude |
| **Syntax** | sentence structure & length | controls pace, emphasis, urgency |
| **Imagery** | sensory language | makes ideas concrete & felt |
| **Juxtaposition** | placing contrasts side by side | sharpens a distinction |
| **Anaphora** | repeating the start of clauses | builds rhythm & momentum |
| **Rhetorical question** | a question not meant to be answered | pulls the audience into agreement |
| **Analogy** | comparison to clarify | makes the unfamiliar familiar |
| **Concession & rebuttal** | granting then countering a point | builds ethos; defuses objections |

> 💡 **Two-sentence rule:** for any device, sentence one *names* it with textual evidence; sentence two explains its *effect on this audience and purpose.* No effect = no points.`,
      },
      {
        id: 'rae3-anaphora',
        type: 'text' as const,
        content: `## Worked Example: Anaphora

Read the closing of a graduation speech:

> *"You will fail. You will doubt. You will want to quit. And you will, every single time, choose to begin again."*

**Naming:** The speaker uses **anaphora**, repeating "You will" at the start of four clauses.

**Effect:** The repetition builds an insistent, drumbeat rhythm that makes failure sound inevitable and ordinary — until the final clause breaks the pattern with "choose to begin again," landing emphasis on resilience. The structure *enacts* the message: struggle, struggle, struggle, then triumph.

> ⚠️ Notice the model never says "this is good writing." It explains a **mechanism**: how the repeated structure plus the final break creates the effect.`,
      },
      {
        id: 'rae3-device-id',
        type: 'multiple-choice' as const,
        content: `**What the Choice Does** 🎯`,
        exercise: {
          questions: [
            {
              question: '"We had everything before us, we had nothing before us." Setting these opposite clauses side by side chiefly serves to:',
              options: ['Capture an age that held hope and despair at once', 'Show that the speaker has changed his mind mid-sentence', 'Signal that the speaker exaggerates for comic effect', 'Prove with evidence that the age was a prosperous one'],
              correctAnswer: 0,
              explanation: 'Placing "everything" directly against "nothing" in matching clauses (juxtaposition) sharpens the sense of an age that was both promising and hopeless. The two clauses are a deliberate pairing rather than a change of mind, the tone is not comic, and the sentence offers no evidence of prosperity.',
            },
            {
              question: '"Is it not time, at long last, that we acted?" The speaker asks this to:',
              options: [
                'Gather the audience\'s views by inviting them to answer aloud',
                'Nudge the audience toward agreement without expecting an answer',
                'Admit the speaker\'s own doubt about whether to act at all',
                'Move the discussion from the current issue to a new one',
              ],
              correctAnswer: 1,
              explanation: 'A **rhetorical question** is asked for effect, not for an answer. Here it pressures the audience to agree that the time to act has come.',
            },
          ],
        },
      },
      {
        id: 'rae3-effect-dropdown',
        type: 'dropdown-select' as const,
        content: `**Strategy → Effect** 🔽

Pick the most precise *effect* for each choice.`,
        exercise: {
          dropdowns: [
            { label: 'A long, breathless sentence piling clause on clause:', options: ['Creates a sense of mounting urgency', 'Slows the reader to a calm, even pace', 'Adds factual weight through evidence', 'Establishes the speaker\'s credentials'] },
            { label: 'Short, blunt three-word sentence after a long one:', options: ['Lands emphatic finality', 'Softens the tone', 'Introduces a statistic', 'Builds a vivid image'] },
            { label: 'Conceding a point to the opposing side:', options: ['Builds ethos as fair-minded', 'Admits the opponent is right', 'Adds vivid sensory imagery', 'Stirs pity for the opponent'] },
          ],
          correctAnswers: ['Creates a sense of mounting urgency', 'Lands emphatic finality', 'Builds ethos as fair-minded'],
          hint1: 'Long, accumulating syntax speeds the reader up and builds pressure.',
          hint2: 'A sudden short sentence stops the momentum and stresses what it says.',
          hint3: 'Granting a fair point makes the speaker seem reasonable — that\'s an ethos move.',
          explanation: 'Sprawling syntax builds urgency; an abrupt short sentence delivers emphatic finality; a concession boosts ethos by making the speaker appear balanced and trustworthy.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae4-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 4 of 7 — Thesis & the AP Rubric**

---

> 🔑 **Big Payoff:** A defensible **thesis** that previews the writer's strategies is the single highest-leverage sentence in your essay. The AP rubric awards points in three rows — **Thesis (1), Evidence & Commentary (4), Sophistication (1)** — and the thesis unlocks all of them.`,
      },
      {
        id: 'rae4-rubric',
        type: 'text' as const,
        content: `## The 6-Point Rubric

Both the Rhetorical Analysis (FRQ 2) and the Argument essay (FRQ 3) are scored out of **6 points**:

| Row | Worth | What earns it |
|-----|-------|---------------|
| **A. Thesis** | 1 pt | A defensible thesis that responds to the prompt |
| **B. Evidence & Commentary** | 0–4 pts | Specific evidence + reasoning that explains *how/why* the choices work |
| **C. Sophistication** | 1 pt | Nuanced, complex understanding (tensions, broader significance, vivid control) |

> 💡 **Row B is where essays are won or lost.** Earning 4/4 requires evidence **plus** commentary that consistently explains how the writer's choices achieve the purpose — not a list, but an argument about the text.`,
      },
      {
        id: 'rae4-rubric-points',
        type: 'input-boxes' as const,
        content: `**Know the Rubric** 🧮

Enter each value as a whole number.

**1)** Total points possible on the AP Lang Rhetorical Analysis essay: \\,?
**2)** Maximum points the Evidence & Commentary row can earn: \\,?
**3)** Points awarded for a defensible thesis: \\,?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '1'],
          hint1: 'The essay is scored out of a single-digit total.',
          hint2: 'Evidence & Commentary is the largest row.',
          hint3: 'Thesis and Sophistication are each worth a single point.',
          explanation: 'The essay is scored 0–6: Thesis (1) + Evidence & Commentary (0–4) + Sophistication (1) = 6 total.',
        },
      },
      {
        id: 'rae4-thesis-anatomy',
        type: 'text' as const,
        content: `## Anatomy of a Strong Thesis

A defensible rhetorical-analysis thesis does **not** just restate the prompt or say "the author uses ethos, pathos, and logos." It makes a **claim about how the writer achieves a purpose.**

**Weak (restates / lists):**
> *"The author uses ethos, pathos, and logos to make her argument."*

**Strong (defensible, purposeful):**
> *"By pairing her own firsthand testimony with stark statistics and a series of rhetorical questions, the author transforms a distant policy debate into a personal moral demand her skeptical readers cannot easily refuse."*

Notice the strong version:
- names **specific** strategies (testimony, statistics, rhetorical questions),
- states a **purpose** (turn a distant debate into a personal moral demand),
- identifies the **audience** (skeptical readers).

> ⚠️ A thesis that could be copied onto *any* passage ("the author uses rhetorical devices to persuade the reader") is not defensible — it makes no claim worth defending.`,
      },
      {
        id: 'rae4-thesis-mc',
        type: 'multiple-choice' as const,
        content: `**Pick the Defensible Thesis** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is the strongest rhetorical-analysis thesis?',
              options: [
                'The author uses many rhetorical strategies, including imagery, irony, and repetition, to persuade the reader to accept his argument.',
                'This essay will discuss the author\'s use of ethos, pathos, and logos, showing how each appears in the passage from start to finish.',
                'By juxtaposing his readers\' comfort with vivid images of famine, Swift shocks a complacent audience into seeing its own indifference.',
                'The author is correct that something must be done about poverty in Ireland, and every reader should come to agree with his view.',
              ],
              correctAnswer: 2,
              explanation: 'Only the Swift thesis is defensible: it names a *specific* strategy (juxtaposition), an *audience* (complacent readers), and a *purpose* (shocking them into seeing their indifference). The others are vague, merely list devices, or take a side instead of analyzing.',
            },
            {
              question: 'A thesis that "could fit almost any passage" is a problem because it:',
              options: [
                'Runs too long for a reader to score in the time allowed',
                'Makes no specific, defensible claim about *this* text',
                'Relies on too much evidence for a single opening sentence',
                'Takes a side on the issue instead of analyzing the author',
              ],
              correctAnswer: 1,
              explanation: 'A defensible thesis must make a claim *specific to the passage* — its strategies, audience, and purpose. A one-size-fits-all sentence defends nothing and earns no thesis point.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae5-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 5 of 7 — Body Paragraphs: Evidence & Commentary**

---

> 🔑 **The Idea:** Each body paragraph makes one analytical point. The pattern is **claim → evidence → commentary**, where *commentary* — the explanation of how and why a choice works — is the part that actually scores Row B.`,
      },
      {
        id: 'rae5-cec',
        type: 'text' as const,
        content: `## The Claim → Evidence → Commentary Pattern

| Move | Question it answers | Example |
|------|---------------------|---------|
| **Claim** | What is the writer doing in this section? | *"Early on, the author builds credibility before making any demand."* |
| **Evidence** | What's the proof? (quote/paraphrase) | *"She notes she 'spent twenty years in the classroom.'"* |
| **Commentary** | How/why does it work on the audience? | *"This credential reassures wary parents that her critique comes from inside the profession, not from a distant bureaucrat — so they lower their defenses before the harder claims arrive."* |

The **ratio** matters: aim for roughly **twice as much commentary as evidence.** Quoting is easy; explaining is what earns the four-point row.

> 💡 A good test: cross out every quotation. If your paragraph still makes a clear analytical point, your commentary is doing its job. If only quotes remain, you were summarizing.`,
      },
      {
        id: 'rae5-spot-commentary',
        type: 'multiple-choice' as const,
        content: `**Evidence vs. Commentary** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sentence is *commentary* (the part that earns Row B), not just evidence?',
              options: [
                'The author writes that she "spent twenty years in the classroom" before turning to her critique.',
                'The author mentions her many years of teaching early in the passage, before the main argument.',
                'Leading with two decades of teaching disarms readers who might dismiss her as an outsider.',
                'The passage includes a quotation about her classroom years, which appears in the opening paragraph.',
              ],
              correctAnswer: 2,
              explanation: 'Commentary explains the *effect and reasoning* — here, that leading with the credential "disarms readers who might dismiss her as an outsider." The other sentences merely report, locate, or paraphrase the evidence.',
            },
            {
              question: 'On the AP rubric, a body paragraph that quotes heavily but rarely explains *how* the choices work will:',
              options: [
                'Earn full Row B credit because the evidence is plentiful',
                'Earn limited Row B credit because commentary is thin',
                'Earn the Sophistication point for its wealth of quotation',
                'Lose the thesis point, though Row B is unaffected',
              ],
              correctAnswer: 1,
              explanation: 'Row B rewards *commentary that explains how the choices achieve the purpose.* Quotes alone — without explanation — cap the score; the highest bands require consistent, specific commentary.',
            },
          ],
        },
      },
      {
        id: 'rae5-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Paragraph** 🔽

Order the moves of a well-built analytical paragraph.`,
        exercise: {
          dropdowns: [
            { label: 'Sentence 1 (topic sentence):', options: ['A claim about what the writer does here', 'A long quotation from the passage', 'The thesis restated word for word', 'A summary of what the passage says'] },
            { label: 'Sentence 2:', options: ['Specific evidence (quote or paraphrase)', 'A definition of the device being used', 'A personal opinion on the issue', 'A second claim about a new device'] },
            { label: 'Sentences 3–4:', options: ['Commentary on how the choice works', 'More quotes with no explanation', 'A summary of the whole passage', 'A shift to a different device'] },
          ],
          correctAnswers: ['A claim about what the writer does here', 'Specific evidence (quote or paraphrase)', 'Commentary on how the choice works'],
          hint1: 'Start with the analytical *claim* for the paragraph.',
          hint2: 'Then prove it with *evidence* from the text.',
          hint3: 'End with *commentary* — the largest, most important part.',
          explanation: 'Claim → evidence → commentary. Lead with the analytical claim, support it with a specific quote, then spend most of your words explaining the effect.',
        },
      },
      {
        id: 'rae5-transitions',
        type: 'text' as const,
        content: `## Linking Paragraphs to the Argument's *Movement*

Strong analyses track how an argument **develops** — they don't just hop from device to device. Use transitions that show *progression*:

- *"Having established her credibility, the author now turns to..."*
- *"Only after unsettling the reader with these images does she introduce the data..."*
- *"This concession sets up the rebuttal that follows..."*

This sense of **sequence** — that the writer arranged choices deliberately, in order — is exactly the kind of nuanced reading that earns the **Sophistication** point.

> 🔑 **Takeaway:** Body paragraphs = claim → evidence → (lots of) commentary, stitched together so the essay traces the *arc* of the original argument. Part 6 turns to the second essay: writing your *own* argument.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae6-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 6 of 7 — Writing the Argument Essay (FRQ 3)**

---

> 🔑 **The Idea:** FRQ 3 flips the task. Instead of analyzing *someone else's* argument, you build **your own** — taking a defensible position on a prompt and defending it with reasoning and evidence. Same 6-point rubric; new skill.`,
      },
      {
        id: 'rae6-argument-vs-analysis',
        type: 'text' as const,
        content: `## Argument ≠ Analysis

| | Rhetorical Analysis (FRQ 2) | Argument (FRQ 3) |
|--|----------------------------|------------------|
| You analyze... | someone else's text | a general issue/claim |
| Your thesis... | claims *how* a writer persuades | takes *your* position |
| Evidence comes from... | the given passage | your own knowledge, reading, observation |
| You should... | stay neutral on the issue | clearly pick and defend a side |

**A strong argument thesis is a defensible position, not a fence-sit.**

- ❌ *"There are good points on both sides of this issue."* (defends nothing)
- ✅ *"Although ambition can curdle into ruthlessness, a society that discourages it stagnates; therefore, ambition is, on balance, a virtue worth cultivating."* (takes a nuanced but clear side)

> 💡 You may **qualify** your claim ("although... on balance..."). Qualification shows complexity — but it is *not* the same as refusing to take a position.`,
      },
      {
        id: 'rae6-thesis-mc',
        type: 'multiple-choice' as const,
        content: `**Defensible Argument Thesis?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For an argument prompt on whether failure helps people grow, which is the strongest thesis?',
              options: [
                'Failure has both advantages and disadvantages, and how much it helps depends on each person and situation.',
                'This essay will explore the topic of failure and growth by looking at examples from history and from life.',
                'Because failure forces a reckoning that comfort never demands, it drives real growth, provided one has the chance to recover.',
                'Since failure is painful and discouraging, it should be avoided whenever possible, through careful planning.',
              ],
              correctAnswer: 2,
              explanation: 'The "reckoning" thesis takes a clear, defensible position (failure drives real growth) and qualifies it intelligently (provided one has the chance to recover). The "advantages and disadvantages" thesis fence-sits, the "This essay will explore" sentence announces a topic without a claim, and the "avoid failure" thesis — while a position — is harder to defend against the prompt and ignores nuance.',
            },
            {
              question: 'In the argument essay, your evidence should come primarily from:',
              options: [
                'The short prompt, quoted as often as possible',
                'What you know from your own reading and observation',
                'Statistics you estimate to sound precise',
                'A restatement of the prompt with your opinion',
              ],
              correctAnswer: 1,
              explanation: 'FRQ 3 gives only a short prompt — you supply the evidence from your own knowledge: literature, history, current events, science, and personal observation. Never fabricate specific data; invented statistics undercut your ethos.',
            },
          ],
        },
      },
      {
        id: 'rae6-evidence-types',
        type: 'text' as const,
        content: `## Evidence That Convinces

The best argument essays use **specific, relevant** evidence and **explain its relevance** — the same commentary discipline as the analysis essay.

| Evidence type | Example | Watch out for |
|---------------|---------|---------------|
| Historical | the Civil Rights Movement; the Apollo program | get the facts right |
| Literary | a novel, play, or memoir you know well | tie it precisely to the claim |
| Current events | a recent, well-known development | avoid the hyper-obscure |
| Personal/observed | a community you know firsthand | make it representative, not trivial |

> ⚠️ **One developed example beats five name-drops.** A single piece of evidence you actually *analyze* outperforms a shopping list of references you merely mention. And **never invent specific statistics or quotations** — graders can tell, and it undercuts your ethos.`,
      },
      {
        id: 'rae6-counterargument',
        type: 'dropdown-select' as const,
        content: `**Handle the Other Side** 🔽

A mature argument acknowledges objections. Complete this concession-and-rebuttal move.`,
        exercise: {
          dropdowns: [
            { label: 'Concession (grant a real point):', options: ['Admittedly, unchecked ambition has driven people to ruin.', 'My opponents are simply wrong about everything.', 'Ambition has always been admired by everyone.', 'Clearly, ambition is the root of all success.'] },
            { label: 'Pivot word that signals the rebuttal:', options: ['Yet', 'Because', 'For example', 'Similarly'] },
            { label: 'Rebuttal (turn back to your claim):', options: ['the alternative — a culture with no drive at all — produces a deeper stagnation.', 'and that is the end of the discussion.', 'so both sides are equally right.', 'which proves nothing either way.'] },
          ],
          correctAnswers: ['Admittedly, unchecked ambition has driven people to ruin.', 'Yet', 'the alternative — a culture with no drive at all — produces a deeper stagnation.'],
          hint1: 'A real concession grants a *legitimate* point the other side could make.',
          hint2: 'A contrast word ("yet," "however," "still") pivots from concession to rebuttal.',
          hint3: 'The rebuttal must steer back toward *your* thesis, showing your side still wins.',
          explanation: 'Concede a genuine point ("ambition has driven people to ruin"), pivot with a contrast word ("Yet"), then rebut by showing your position still holds ("no drive at all produces deeper stagnation"). This concession–rebuttal move builds ethos and earns sophistication.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'englang-rhetorical-analysis-essay',
    sections: [
      {
        id: 'rae7-intro',
        type: 'text' as const,
        content: `# 🖋️ Rhetorical Analysis & Argument Essays

**Part 7 of 7 — Synthesis, Mastery & Exit Quiz**

---

You can now (1) read the rhetorical situation, (2) name the appeals, (3) analyze strategies for *effect*, (4) write a defensible thesis, (5) build claim–evidence–commentary paragraphs, and (6) argue your own position. Let's put it together and check mastery.`,
      },
      {
        id: 'rae7-cheatsheet',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Orient to any text | SPACECAT — Speaker, Purpose, Audience, Context, Exigence, Choices, Appeals, Tone |
| Classify persuasion | Ethos (credibility), Pathos (emotion), Logos (logic) |
| Analyze a device | name it + evidence, then explain its **effect** on the audience |
| Write a thesis | specific strategies → clear purpose → (analysis) or your defensible position (argument) |
| Build a paragraph | claim → evidence → **commentary** (≈2× the evidence) |
| Earn sophistication | tension, nuance, the argument's *arc*, broader significance |

> ⚠️ **The three repeat-offender mistakes:** (1) device-spotting with no effect, (2) a thesis that fits any passage, (3) summary masquerading as analysis. Eliminate these and you clear the rubric.`,
      },
      {
        id: 'rae7-synthesis-dropdown',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Essay** 🔽

A student wrote: *"The author uses pathos. He also uses logos. These help his argument."* Diagnose and fix.`,
        exercise: {
          dropdowns: [
            { label: 'The core problem is:', options: ['Device-spotting with no explained effect', 'Too much commentary', 'Taking the wrong side', 'Too many specific quotations'] },
            { label: 'The missing rubric element is:', options: ['Commentary on how the choices work', 'A list of more device names', 'Sophisticated vocabulary', 'A concession to the other side'] },
            { label: 'Best fix:', options: ['Explain how each appeal moves the audience', 'Name three more appeals or devices', 'Replace the claims with long quotations', 'Restate the prompt more precisely'] },
          ],
          correctAnswers: ['Device-spotting with no explained effect', 'Commentary on how the choices work', 'Explain how each appeal moves the audience'],
          hint1: 'The student *names* appeals but never says what they *do.*',
          hint2: 'Row B rewards explanation of *how/why* choices work.',
          hint3: 'The fix is commentary tied to audience and purpose.',
          explanation: 'The passage is pure device-spotting — it labels appeals but never explains their effect. The missing ingredient is commentary, and the fix is to explain how each appeal moves *this* audience toward the writer\'s purpose.',
        },
      },
      {
        id: 'rae7-recall',
        type: 'input-boxes' as const,
        content: `**Term Recall** 🧮

Fill in each blank with a single word (lowercase).

**1)** The appeal based on the speaker's *credibility* is called \\,?
**2)** The appeal based on the audience's *emotions* is called \\,?
**3)** The appeal based on *logic and evidence* is called \\,?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['ethos', 'pathos', 'logos'],
          hint1: 'It shares a root with "ethics" — character and trust.',
          hint2: 'It shares a root with "empathy" and "sympathy" — feeling.',
          hint3: 'It shares a root with "logic."',
          explanation: 'Ethos = credibility/character; pathos = emotion; logos = logic and evidence. These are Aristotle\'s three rhetorical appeals.',
        },
      },
      {
        id: 'rae7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Mastery** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A writer spends the first third of an op-ed admitting the strengths of the opposing view before arguing against it. This primarily:',
              options: [
                'Weakens the argument by handing the opposing side its best points',
                'Builds ethos by making the author seem fair and reasonable',
                'Relies on pure logos, since conceding a point is a form of evidence',
                'Serves as the thesis, since it sets out the issue being argued',
              ],
              correctAnswer: 1,
              explanation: 'Concession — acknowledging the other side\'s strengths — makes the writer seem balanced and trustworthy, strengthening **ethos** and disarming skeptical readers before the rebuttal.',
            },
            {
              question: 'Which best demonstrates the "sophistication" the AP rubric rewards?',
              options: [
                'Identifying every rhetorical device in the passage and naming each one correctly',
                'Using an elevated vocabulary and long, complex sentences throughout the essay',
                'Showing how a tension in the text complicates a simple reading of it',
                'Quoting extensively from the passage so that no key line is left out',
              ],
              correctAnswer: 2,
              explanation: 'Sophistication comes from nuanced thinking — noticing tensions or complexities and situating the text\'s significance more broadly — not from vocabulary, quantity of quotation, or the number of devices named.',
            },
          ],
        },
      },
      {
        id: 'rae7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The single most important difference between summary and rhetorical analysis is that analysis explains:',
              options: [
                'what the passage says, restated in the order it is said',
                'how the writer\'s choices create an effect on the audience',
                'whether the writer\'s argument is convincing and correct',
                'the life and background that shaped the writer\'s views',
              ],
              correctAnswer: 1,
              explanation: 'Analysis is about *how* the text works — the writer\'s choices and their effects — not a restatement of content, your opinion, or the author\'s life story.',
            },
            {
              question: 'On the 6-point AP essay rubric, the row worth the most points is:',
              options: [
                'Thesis',
                'Evidence & Commentary',
                'Sophistication',
                'Conventions & Organization',
              ],
              correctAnswer: 1,
              explanation: 'Thesis and Sophistication are each worth 1 point; Evidence & Commentary is worth 0–4 — the largest and most decisive row. There is no separate row for grammar or organization.',
            },
            {
              question: 'Which thesis is defensible for a rhetorical analysis?',
              options: [
                'The author uses a variety of rhetorical devices, such as anecdote and repetition, to persuade his audience to agree.',
                'By opening with a personal failure, the speaker earns the goodwill a privileged audience needs to accept his criticism.',
                'This passage is about courage and responsibility, and the speaker conveys these ideas in a very well-written way.',
                'I agree with the speaker\'s position on privilege and responsibility, because his criticism of the audience is fair.',
              ],
              correctAnswer: 1,
              explanation: 'The personal-failure thesis is defensible: it names a specific strategy (opening with a personal failure), identifies the audience (a privileged one), and states a purpose (earning the goodwill that lets criticism land). The others are generic, evaluative, or off-task.',
            },
          ],
        },
      },
    ],
  },
]
