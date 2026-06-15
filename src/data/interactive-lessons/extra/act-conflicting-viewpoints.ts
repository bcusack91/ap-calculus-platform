import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Conflicting Viewpoints (ACT Science).
 * Registry key / DB slug: 'act-conflicting-viewpoints'.
 * 5 parts, gold-standard structure modeled on the Completing-the-Square pilot:
 * teach → worked passage analysis → interactive practice (multiple-choice +
 * dropdown + input-boxes) → exit quiz. Non-math topic, so concept checks
 * favor multiple-choice and dropdown over numeric input. LaTeX (rare here)
 * uses doubled backslashes (template-literal strings); bare dollar signs in
 * prose are escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'act-conflicting-viewpoints',
    sections: [
      {
        id: 'acv1-intro',
        type: 'text' as const,
        content: `# 🔬 Conflicting Viewpoints

**Part 1 of 5 — Meet the Only "Reading" Passage on the Science Test**

---

### Topics in This Part

| Section |
|---------|
| What a Conflicting Viewpoints passage looks like |
| Why there are no graphs to fall back on |
| The job each question is really asking you to do |

> 🔑 **Key Concept:** A **Conflicting Viewpoints** passage (sometimes called *Fighting Scientists* or a *Student/Hypothesis* passage) gives you **two or more explanations** of the *same* phenomenon. Each one is internally consistent — your job is to track **who claims what**, not to decide who is "correct."`,
      },
      {
        id: 'acv1-anatomy',
        type: 'text' as const,
        content: `## Anatomy of the Passage

Most ACT Science forms contain **exactly one** Conflicting Viewpoints passage. It is the only passage built almost entirely from **prose** instead of charts.

A typical structure:

| Piece | What it contains |
|-------|------------------|
| **Introduction** | The phenomenon + a key fact or two everyone accepts |
| **Viewpoint 1** | Hypothesis A (e.g., *Scientist 1* / *Student 1* / *Theory 1*) |
| **Viewpoint 2** | Hypothesis B that disagrees with A |
| (sometimes) **Viewpoint 3** | A third competing or hybrid explanation |

> 💡 The viewpoints **agree** on the *observation* (what happened) but **disagree** on the *mechanism or cause* (why it happened). Finding that shared starting point is the single most useful thing you can do before answering questions.`,
      },
      {
        id: 'acv1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a standard ACT Science test, how many Conflicting Viewpoints passages typically appear?',
              options: ['Exactly one', 'Exactly three', 'One per other passage', 'Zero — they were removed'],
              correctAnswer: 0,
              explanation: 'A standard form has one Conflicting Viewpoints passage. The remaining passages are Data Representation and Research Summaries, which are chart-heavy.',
            },
            {
              question: 'The competing viewpoints in such a passage usually agree about which of the following?',
              options: [
                'The underlying cause or mechanism',
                'The basic observation or phenomenon being explained',
                'Which scientist deserves credit',
                'The conclusion of the experiment',
              ],
              correctAnswer: 1,
              explanation: 'The viewpoints share the same observation (the *what*) and argue over the explanation (the *why*). Spotting that shared fact is your anchor.',
            },
          ],
        },
      },
      {
        id: 'acv1-prose',
        type: 'text' as const,
        content: `## Why This Passage Feels Different

On Data Representation and Research Summaries passages, you can often answer by reading a graph without understanding the science. **Not here.** Conflicting Viewpoints rewards careful reading and penalizes skimming.

That is actually good news: the skills are the same ones tested on the **ACT Reading** test —

- find the **main claim** of each viewpoint,
- locate a **supporting detail** by line/sentence,
- and notice where two views **agree, disagree, or fail to address** a point.

> ⚠️ **Trap to avoid:** Do **not** import your own outside science knowledge to decide a winner. Every answer must be supported by *the passage as written*, even if a viewpoint is scientifically outdated.`,
      },
      {
        id: 'acv1-skills-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Conflicting Viewpoints passage describes a viewpoint you know is scientifically outdated. How should you treat it on the questions?',
              options: [
                'Answer based on what the passage says about that viewpoint, not on outside knowledge.',
                'Mark every question about it as wrong because the science is dated.',
                'Skip all questions tied to that viewpoint.',
                'Replace its claims with the modern theory before answering.',
              ],
              correctAnswer: 0,
              explanation: 'The ACT tests whether you can read and represent each viewpoint as written. Even an outdated viewpoint is "correct" for the purpose of reporting what it claims.',
            },
            {
              question: 'Which skill set does a Conflicting Viewpoints passage draw on most heavily?',
              options: [
                'Close reading: finding main claims, supporting details, and points of agreement',
                'Graph reading and trend extrapolation',
                'Mental arithmetic and unit conversion',
                'Memorized biology and chemistry facts',
              ],
              correctAnswer: 0,
              explanation: 'This passage is built from prose, so it leans on the same close-reading skills as the ACT Reading test — not graph-reading, arithmetic, or recalled science facts.',
            },
          ],
        },
      },
      {
        id: 'acv1-jobcheck',
        type: 'dropdown-select' as const,
        content: `**Match the Question to the Skill** 🔽

For each question stem, choose the reading skill it is really testing.`,
        exercise: {
          dropdowns: [
            { label: '"According to Scientist 2, what causes the glow?"', options: ['Find one viewpoint\'s claim', 'Compare two viewpoints', 'Use outside knowledge'] },
            { label: '"On which point would Scientists 1 and 2 most likely agree?"', options: ['Find one viewpoint\'s claim', 'Compare two viewpoints', 'Use outside knowledge'] },
            { label: '"Scientist 1 states the sample is 4 cm long. This detail supports which claim?"', options: ['Find one viewpoint\'s claim', 'Compare two viewpoints', 'Use outside knowledge'] },
          ],
          correctAnswers: ['Find one viewpoint\'s claim', 'Compare two viewpoints', 'Find one viewpoint\'s claim'],
          hint1: 'A question naming a single scientist asks you to report that one viewpoint.',
          hint2: '"Agree" or "both" or "disagree" signals a comparison question.',
          hint3: 'Outside knowledge is essentially never required — answers live in the text.',
          explanation: 'Single-viewpoint questions ask you to report one claim; "agree/both/disagree" questions ask you to compare; supporting-detail questions still live inside one viewpoint. Outside knowledge is rarely the answer.',
        },
      },
      {
        id: 'acv1-strategy',
        type: 'text' as const,
        content: `## Your Three-Move Plan

Every Conflicting Viewpoints passage can be attacked the same way:

1. **Read the intro carefully** — it defines the phenomenon and the shared facts.
2. **Read each viewpoint and one-sentence summarize it** in your head: *"Scientist 1 thinks ___ because ___."*
3. **Answer by ownership** — each question belongs to one viewpoint, both viewpoints, or the shared intro. Find the owner first, then the detail.

In Part 2 we'll practice Move 2 — boiling each viewpoint down to a single claim — on a real sample passage.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'act-conflicting-viewpoints',
    sections: [
      {
        id: 'acv2-intro',
        type: 'text' as const,
        content: `# 🔬 Conflicting Viewpoints

**Part 2 of 5 — Summarizing Each Viewpoint**

---

> 🔑 **The Idea:** Before you answer a single question, compress each viewpoint into one sentence: a **claim** plus its **reason**. Most wrong answers attach the *right detail to the wrong scientist* — a clean summary makes that trap obvious.`,
      },
      {
        id: 'acv2-passage',
        type: 'text' as const,
        content: `## Sample Passage — "The Disappearing Lake"

Read this short passage; we'll use it for the next several questions.

> **Introduction.** Each summer, Lake Verde shrinks to half its spring size, then refills by winter. The lake sits in a valley with no rivers flowing out of it.
>
> **Scientist 1.** The lake shrinks because of **evaporation**. Summer air over the valley is hot and dry, so water leaves the lake surface as vapor. The lake refills in winter when cool, rainy weather slows evaporation and adds rainfall.
>
> **Scientist 2.** The lake shrinks because water **drains into the ground**. Cracks in the lakebed open as summer heat dries the surrounding soil, letting water seep down into an underground reservoir. In winter the soil swells shut and the lake refills from rain and runoff.

> 💡 Notice the **shared fact**: *both* scientists accept that the lake halves in summer and refills in winter. They disagree only about **where the water goes** — into the air or into the ground.`,
      },
      {
        id: 'acv2-summary-mc',
        type: 'multiple-choice' as const,
        content: `**Summarize the Claim** 🎯`,
        exercise: {
          questions: [
            {
              question: "Which sentence best summarizes Scientist 1's viewpoint?",
              options: [
                'Summer heat evaporates lake water into the air; winter rain refills it.',
                'Cracks in the lakebed let water drain underground.',
                'A river carries water out of the valley each summer.',
                'The lake never actually changes size.',
              ],
              correctAnswer: 0,
              explanation: "Scientist 1's mechanism is evaporation (water → air) with winter rainfall refilling the lake. The other options belong to Scientist 2 or contradict the intro.",
            },
            {
              question: "Scientist 2's central claim is that the water:",
              options: [
                'evaporates into hot summer air.',
                'seeps through lakebed cracks into an underground reservoir.',
                'flows out through a river.',
                'is removed by people for farming.',
              ],
              correctAnswer: 1,
              explanation: "Scientist 2 attributes the loss to drainage through cracks into the ground, not evaporation. Evaporation is Scientist 1's mechanism.",
            },
          ],
        },
      },
      {
        id: 'acv2-owner',
        type: 'text' as const,
        content: `## Tagging Details to Their Owner

A favorite ACT trick is to take a detail that **one** scientist mentioned and ask whether the **other** scientist would say it. The cure is to mentally tag each detail with its owner as you read.

| Detail | Owner |
|--------|-------|
| Water leaves as vapor | Scientist 1 |
| Cracks open in the lakebed | Scientist 2 |
| Lake halves in summer | Both (intro) |
| Underground reservoir | Scientist 2 |
| Winter brings rain | Both |

> ⚠️ "Winter brings rain" is shared, but the two scientists use it for **different refill mechanisms**. Shared facts can still play different roles in each argument.`,
      },
      {
        id: 'acv2-tag-dropdown',
        type: 'dropdown-select' as const,
        content: `**Tag the Owner** 🔽

Assign each detail to the viewpoint (or shared intro) that states it.`,
        exercise: {
          dropdowns: [
            { label: 'Water turns to vapor over the lake', options: ['Scientist 1', 'Scientist 2', 'Both / Intro'] },
            { label: 'An underground reservoir holds the lost water', options: ['Scientist 1', 'Scientist 2', 'Both / Intro'] },
            { label: 'The lake has no outflowing river', options: ['Scientist 1', 'Scientist 2', 'Both / Intro'] },
            { label: 'Summer heat dries the surrounding soil', options: ['Scientist 1', 'Scientist 2', 'Both / Intro'] },
          ],
          correctAnswers: ['Scientist 1', 'Scientist 2', 'Both / Intro', 'Scientist 2'],
          hint1: 'Vapor and evaporation belong to Scientist 1.',
          hint2: 'Underground reservoir and cracks/soil belong to Scientist 2.',
          hint3: 'The "no outflowing river" fact is in the introduction, so both scientists accept it.',
          explanation: 'Vapor → Scientist 1; underground reservoir and drying soil → Scientist 2; "no river" is in the intro, so it is shared by both.',
        },
      },
      {
        id: 'acv2-count',
        type: 'input-boxes' as const,
        content: `**Count the Viewpoints** 🧮

How many **distinct competing explanations** are offered in the sample passage above? Enter a single number.`,
        exercise: {
          boxes: 1,
          correctAnswers: ['2'],
          hint1: 'Count the labeled scientists, not the intro.',
          hint2: 'The intro is shared background, not a competing explanation.',
          hint3: 'Scientist 1 and Scientist 2 each give one explanation.',
          explanation: 'There are 2 competing explanations: evaporation (Scientist 1) and underground drainage (Scientist 2). The intro is shared, not a viewpoint.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'act-conflicting-viewpoints',
    sections: [
      {
        id: 'acv3-intro',
        type: 'text' as const,
        content: `# 🔬 Conflicting Viewpoints

**Part 3 of 5 — Agreement, Disagreement & Comparison Questions**

---

> 🔑 **Why it matters:** The hardest questions ask what the viewpoints share or where they split. The key insight: viewpoints **agree on observations** and **disagree on explanations**. Sort every statement into those two buckets and the answer falls out.`,
      },
      {
        id: 'acv3-agree',
        type: 'text' as const,
        content: `## "On which point would they agree?"

To answer an **agreement** question, look for a statement that is **true under both viewpoints** — usually a fact from the intro, or an observation neither one disputes.

Using "The Disappearing Lake":

| Candidate statement | Agree? | Why |
|--------------------|--------|-----|
| The lake shrinks in summer | ✅ Both | Stated in the intro |
| Water leaves as vapor | ❌ No | Only Scientist 1 |
| The valley has no outflow river | ✅ Both | Stated in the intro |
| Cracks drain the lakebed | ❌ No | Only Scientist 2 |

> 💡 The correct answer to an agreement question is almost always a **shared observation**, never one side's **mechanism**.`,
      },
      {
        id: 'acv3-agree-mc',
        type: 'multiple-choice' as const,
        content: `**Agreement Question** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On which statement would Scientist 1 AND Scientist 2 most likely agree?',
              options: [
                'Lake Verde refills during the winter.',
                'Water from the lake collects in an underground reservoir.',
                'Evaporation is the main cause of summer water loss.',
                'The lakebed develops cracks in summer.',
              ],
              correctAnswer: 0,
              explanation: 'Both scientists describe a winter refill — that is shared. The other three options are each owned by only one scientist (drainage/cracks = Scientist 2, evaporation = Scientist 1).',
            },
            {
              question: 'Which point is a source of DISAGREEMENT between the two scientists?',
              options: [
                'Whether the lake changes size during the year',
                'Where the lost water goes',
                'Whether winter is rainier than summer',
                'Whether the valley has an outflowing river',
              ],
              correctAnswer: 1,
              explanation: 'They disagree only about the destination of the water — into the air (Scientist 1) versus into the ground (Scientist 2). The other items are shared facts from the intro.',
            },
          ],
        },
      },
      {
        id: 'acv3-bucket',
        type: 'text' as const,
        content: `## The Two-Bucket Sort

Before a comparison question, drop each idea into one of two buckets:

- **Observation bucket** (the *what*): things both sides accept — the data, the timing, the setting.
- **Explanation bucket** (the *why*): the competing mechanisms — this is where they split.

> ⚠️ A classic wrong answer takes a *mechanism* (explanation bucket) and dresses it up as something "both agree on." If a statement names a cause, it almost certainly belongs to **one** side only.`,
      },
      {
        id: 'acv3-bucket-dropdown',
        type: 'dropdown-select' as const,
        content: `**Two-Bucket Sort** 🔽

Sort each statement into the bucket that determines whether it's shared or contested.`,
        exercise: {
          dropdowns: [
            { label: 'The lake loses half its volume each summer', options: ['Observation (shared)', 'Explanation (contested)'] },
            { label: 'Hot, dry air pulls water off the surface as vapor', options: ['Observation (shared)', 'Explanation (contested)'] },
            { label: 'The lake returns to full size by winter', options: ['Observation (shared)', 'Explanation (contested)'] },
            { label: 'Lakebed cracks send water to an underground reservoir', options: ['Observation (shared)', 'Explanation (contested)'] },
          ],
          correctAnswers: ['Observation (shared)', 'Explanation (contested)', 'Observation (shared)', 'Explanation (contested)'],
          hint1: 'If the statement just reports what happens (and when), it is an observation.',
          hint2: 'If the statement names a cause or mechanism, it is an explanation.',
          hint3: 'Vapor and lakebed cracks are competing mechanisms; volume loss and winter refill are shared observations.',
          explanation: 'Volume loss and winter refill are shared observations; the vapor mechanism (Scientist 1) and the crack/reservoir mechanism (Scientist 2) are contested explanations.',
        },
      },
      {
        id: 'acv3-points',
        type: 'input-boxes' as const,
        content: `**Count the Shared Observations** 🧮

From the sample passage, how many of these four statements are **shared observations** that BOTH scientists accept? Enter a number.

1. The lake shrinks to half its size in summer.
2. Water evaporates into the air.
3. The lake refills by winter.
4. The valley has no outflowing river.`,
        exercise: {
          boxes: 1,
          correctAnswers: ['3'],
          hint1: 'Statement 2 names a mechanism, so it belongs to one scientist only.',
          hint2: 'Statements 1, 3, and 4 are intro facts both accept.',
          hint3: 'Count statements 1, 3, and 4.',
          explanation: 'Statements 1, 3, and 4 are shared observations (3 total). Statement 2 (evaporation) is Scientist 1\'s contested mechanism, so it does not count.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'act-conflicting-viewpoints',
    sections: [
      {
        id: 'acv4-intro',
        type: 'text' as const,
        content: `# 🔬 Conflicting Viewpoints

**Part 4 of 5 — Strengthen, Weaken & "What If" Questions**

---

> 🔑 **Big Payoff:** The toughest Conflicting Viewpoints questions hand you a **new fact** and ask which viewpoint it helps or hurts. The move is always the same: ask *"Does this new fact fit this scientist's mechanism?"*`,
      },
      {
        id: 'acv4-strengthen',
        type: 'text' as const,
        content: `## Strengthen vs. Weaken

A new observation **strengthens** a viewpoint if it's exactly what that mechanism predicts, and **weakens** it if the mechanism predicts the opposite.

Apply it to "The Disappearing Lake":

| New fact | Effect | Reasoning |
|----------|--------|-----------|
| Air humidity above the lake rises sharply each summer | **Strengthens Scientist 1** | More water vapor in the air is what evaporation produces |
| The underground reservoir's water level rises each summer | **Strengthens Scientist 2** | Drained lake water has to go somewhere — the reservoir fills |
| Sealing the lakebed with a liner stops the summer shrinkage | **Weakens Scientist 1** | If blocking the *bed* stops loss, the water left through the ground, not the air |

> 💡 To test a strengthen/weaken answer, ask: **"If this scientist were right, would I expect to see this?"** If yes, it strengthens; if it contradicts the prediction, it weakens.`,
      },
      {
        id: 'acv4-strengthen-mc',
        type: 'multiple-choice' as const,
        content: `**Strengthen / Weaken** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A researcher covers the lakebed with a waterproof liner, and afterward the lake no longer shrinks at all during the summer. This finding most directly:',
              options: [
                "strengthens Scientist 2's drainage viewpoint.",
                "strengthens Scientist 1's evaporation viewpoint.",
                'supports both viewpoints equally.',
                'is irrelevant to both viewpoints.',
              ],
              correctAnswer: 0,
              explanation: "A liner blocks the lakebed cracks — exactly Scientist 2's drainage route. If blocking that route stops the shrinkage, drainage must have been the cause, which strengthens Scientist 2. (It also weakens Scientist 1, because surface evaporation would have continued despite a bed liner.)",
            },
            {
              question: 'Humidity readings show the air just above Lake Verde becomes far more humid during summer days. This most directly strengthens:',
              options: [
                "Scientist 1's evaporation viewpoint.",
                "Scientist 2's drainage viewpoint.",
                'neither viewpoint.',
                'the claim that the lake never shrinks.',
              ],
              correctAnswer: 0,
              explanation: 'Rising humidity directly above the lake is what evaporation produces (water entering the air). That supports Scientist 1. It says nothing about underground drainage, so it does not help Scientist 2.',
            },
          ],
        },
      },
      {
        id: 'acv4-fix',
        type: 'text' as const,
        content: `## A Cleaner Way to Read the Liner Experiment

Let's make the liner result airtight so there's no ambiguity:

- **Scientist 1 (evaporation):** a bed liner does **nothing** to the surface, so evaporation — and therefore summer shrinkage — should **continue**.
- **Scientist 2 (drainage):** a bed liner **blocks the cracks**, so drainage stops and summer shrinkage should **stop**.

So if installing the liner **stops** the shrinkage, that result **matches Scientist 2's prediction** and **contradicts Scientist 1's**.

| Liner result | Scientist 1 | Scientist 2 |
|--------------|-------------|-------------|
| Shrinkage stops | Weakened ❌ | Strengthened ✅ |
| Shrinkage continues | Strengthened ✅ | Weakened ❌ |

> ⚠️ Always pin a "what if" fact to a **prediction** each viewpoint makes. The fact that *matches* one prediction and *breaks* the other is doing double duty — it strengthens one side while weakening the other.`,
      },
      {
        id: 'acv4-predict-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict, Then Judge** 🔽

For each new finding, choose its effect using the liner table and humidity logic.`,
        exercise: {
          dropdowns: [
            { label: 'A bed liner stops the summer shrinkage', options: ['Strengthens Scientist 1', 'Strengthens Scientist 2', 'No effect on either'] },
            { label: 'Air above the lake gets much more humid in summer', options: ['Strengthens Scientist 1', 'Strengthens Scientist 2', 'No effect on either'] },
            { label: 'The underground reservoir fills as the lake shrinks', options: ['Strengthens Scientist 1', 'Strengthens Scientist 2', 'No effect on either'] },
            { label: 'A passing bird lands on the lake each morning', options: ['Strengthens Scientist 1', 'Strengthens Scientist 2', 'No effect on either'] },
          ],
          correctAnswers: ['Strengthens Scientist 2', 'Strengthens Scientist 1', 'Strengthens Scientist 2', 'No effect on either'],
          hint1: 'A liner blocks the lakebed cracks — that is Scientist 2\'s mechanism.',
          hint2: 'Humidity above the surface is the signature of evaporation (Scientist 1).',
          hint3: 'A bird landing is irrelevant to where the lake water goes, so it affects neither.',
          explanation: 'Liner stopping shrinkage → drainage was the cause → Scientist 2. Rising humidity → evaporation → Scientist 1. Reservoir filling as lake drops → Scientist 2. The bird is irrelevant — no effect.',
        },
      },
      {
        id: 'acv4-eval',
        type: 'multiple-choice' as const,
        content: `**Evaluating Evidence** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which type of new evidence would let you DISTINGUISH between the two viewpoints most decisively?',
              options: [
                'A measurement of where the lost water ends up (air vs. ground)',
                'A photo confirming the lake is smaller in August',
                'A record of the valley\'s average winter rainfall',
                'A note that the lake has existed for centuries',
              ],
              correctAnswer: 0,
              explanation: 'The scientists agree the lake shrinks and refills; they only disagree about the water\'s destination. Evidence tracking where the water goes (air vs. underground) is the one thing that separates them. The others are shared facts that test nothing.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'act-conflicting-viewpoints',
    sections: [
      {
        id: 'acv5-intro',
        type: 'text' as const,
        content: `# 🔬 Conflicting Viewpoints

**Part 5 of 5 — Strategy, Timing & Mastery Check**

---

You can now (1) recognize the passage, (2) summarize each viewpoint, (3) sort agreement vs. disagreement, and (4) judge new strengthen/weaken evidence. Let's lock in timing strategy and finish with a mastery check.`,
      },
      {
        id: 'acv5-strategy',
        type: 'text' as const,
        content: `## Timing & Test-Day Strategy

| Move | Do this |
|------|---------|
| **Read order** | Read the **intro fully**, then skim each viewpoint for its main claim before touching questions |
| **Single-scientist Qs** | Go straight to that scientist's paragraph — ignore the others |
| **Agreement Qs** | Hunt in the **intro / shared observations** first |
| **Strengthen/weaken Qs** | Match the new fact to a viewpoint's **prediction** |
| **Don't** | Bring outside knowledge; pick a "winner"; let a long passage rush you on the data passages |

> 💡 **Pacing tip:** Conflicting Viewpoints often takes the **longest per question** because it's reading-heavy. Some students save it for last so it can't eat time they need for quick chart questions. Others do it first while fresh — practice both and keep what works for you.

> ⚠️ Every answer must be **supported by the passage**. If you can't point to a sentence, it's probably a trap.`,
      },
      {
        id: 'acv5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A question asks, "Which detail does Scientist 2 cite but Scientist 1 does NOT?" The fastest reliable approach is to:',
              options: [
                "scan Scientist 2's paragraph for a mechanism detail and confirm it's absent from Scientist 1's.",
                'use your own knowledge of lakes to guess.',
                're-read the entire passage twice.',
                'pick the answer with the most scientific-sounding words.',
              ],
              correctAnswer: 0,
              explanation: 'Ownership questions are solved by locating the detail in one paragraph and confirming it is missing from the other. Outside knowledge and word-difficulty guessing are both traps.',
            },
            {
              question: 'A new finding perfectly matches what Scientist 1 predicts but contradicts what Scientist 2 predicts. This finding:',
              options: [
                "strengthens Scientist 1 and weakens Scientist 2.",
                "strengthens both equally.",
                "weakens Scientist 1 and strengthens Scientist 2.",
                'has no bearing on either.',
              ],
              correctAnswer: 0,
              explanation: 'A single fact can do double duty: matching one prediction strengthens that viewpoint, while contradicting the other\'s prediction weakens it.',
            },
          ],
        },
      },
      {
        id: 'acv5-quickref',
        type: 'text' as const,
        content: `## Quick Reference

| Question type | Where the answer lives |
|---------------|------------------------|
| "According to Scientist X…" | That scientist's paragraph only |
| "On which point would they agree?" | Shared observations / intro |
| "Where do they disagree?" | The competing mechanisms |
| "This new fact supports/weakens…" | Match fact to a viewpoint's prediction |
| "What evidence would settle it?" | The one contested point they differ on |

> 🔑 **One-line takeaway:** Viewpoints **agree on what happened** and **fight over why** — sort every statement into *observation* vs. *explanation* and the questions answer themselves.`,
      },
      {
        id: 'acv5-strategy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Move** 🔽

For each question stem, choose where the answer lives.`,
        exercise: {
          dropdowns: [
            { label: '"According to Scientist 1, why does the lake refill?"', options: ["Scientist 1's paragraph", 'Shared observations / intro', "Match a fact to a prediction"] },
            { label: '"On which point would both scientists agree?"', options: ["Scientist 1's paragraph", 'Shared observations / intro', "Match a fact to a prediction"] },
            { label: '"This new humidity reading most supports which view?"', options: ["Scientist 1's paragraph", 'Shared observations / intro', "Match a fact to a prediction"] },
          ],
          correctAnswers: ["Scientist 1's paragraph", 'Shared observations / intro', "Match a fact to a prediction"],
          hint1: 'A question naming one scientist sends you to that scientist\'s paragraph.',
          hint2: 'An "agree" question lives in the shared intro / observations.',
          hint3: 'A "new fact supports/weakens" question is solved by matching the fact to each viewpoint\'s prediction.',
          explanation: 'Single-scientist → that paragraph; "agree" → shared observations; "new fact supports" → match the fact to a prediction. Each stem maps to exactly one move.',
        },
      },
      {
        id: 'acv5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson. (All refer to "The Disappearing Lake.")`,
        exercise: {
          questions: [
            {
              question: 'According to Scientist 2, the lake shrinks in summer because water:',
              options: [
                'drains through lakebed cracks into the ground.',
                'evaporates into hot, dry air.',
                'flows out through a river.',
                'is pumped out for irrigation.',
              ],
              correctAnswer: 0,
              explanation: 'Scientist 2 attributes the loss to drainage through cracks into an underground reservoir. Evaporation is Scientist 1\'s claim; the passage gives no river or pump.',
            },
            {
              question: 'On which point would BOTH scientists most likely agree?',
              options: [
                'The lake refills by winter.',
                'Water escapes as vapor.',
                'An underground reservoir exists.',
                'Cracks form in the lakebed.',
              ],
              correctAnswer: 0,
              explanation: 'Both describe a winter refill — a shared observation. The other three are mechanisms owned by just one scientist.',
            },
            {
              question: 'Installing a waterproof liner over the lakebed stops the summer shrinkage. This result:',
              options: [
                "strengthens Scientist 2 and weakens Scientist 1.",
                "strengthens Scientist 1 and weakens Scientist 2.",
                'supports both scientists.',
                'is irrelevant to both.',
              ],
              correctAnswer: 0,
              explanation: 'A bed liner blocks drainage (Scientist 2\'s mechanism), so if it stops the loss, drainage was the cause — strengthening Scientist 2. A liner does nothing to surface evaporation, so the loss should have continued under Scientist 1, whose viewpoint is therefore weakened.',
            },
          ],
        },
      },
    ],
  },
]
