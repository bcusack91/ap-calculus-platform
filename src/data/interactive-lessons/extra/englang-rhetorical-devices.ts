import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rhetorical Devices (AP English Language & Composition).
 * Registry key / DB Topic.slug: 'englang-rhetorical-devices'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked rhetorical analysis → Exit Quiz. Non-math humanities topic, so concept checks
 * favor multiple-choice and dropdown-select, with short-answer input-boxes used for
 * function and recall checks (never for naming schemes or tropes: the Lang CED's
 * "Use of Rhetorical Terminology" note keeps device names in the teacher's vernacular). No LaTeX needed; any bare dollar signs in prose are escaped as \\$.
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

> 💡 **The AP move:** Devices are *tools*, not trophies. Spotting a repeated opening and naming it earns nothing; explaining that the repetition builds *rhythm and urgency that hammer the audience toward agreement* earns the point.`,
      },
      {
        id: 'erd1-soapstone',
        type: 'text' as const,
        content: `## The Rhetorical Situation: SOAPSTone

Before analyzing any choice, map the **rhetorical situation**. A handy acronym is **SOAPSTone**:

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
                'Identify the device precisely by its correct Greek or Latin term',
                'Explain the device’s effect on the audience and its link to purpose',
                'Count how often the device appears to show how central it is to the text',
                'Rewrite the device in plainer language to show what it means',
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
- **Part 3 — Arrangement Choices:** repetition, parallel structure, contrast, and where emphasis falls.
- **Part 4 — Figurative Choices:** comparison, exaggeration, understatement, and irony.
- **Part 5 — Diction, Tone, and Syntax:** how word choice and sentence shape create effect.
- **Part 6 — Putting It Together:** analyzing a full passage like an AP reader.
- **Part 7 — Mastery Check & Exit Quiz.**

> ⚠️ **Don’t memorize a glossary.** The exam never asks you to name a scheme or trope. A student who understands ten choices *deeply* — what each one does and why a writer would reach for it — outscores a student who can recite fifty names.`,
      },
      {
        id: 'erd1-check-situation',
        type: 'dropdown-select' as const,
        content: `**Map the Situation** 🔽

A senator delivers a televised speech urging Congress to fund flood relief after a hurricane. Identify each SOAPSTone element.`,
        exercise: {
          dropdowns: [
            { label: 'Speaker:', options: ['the hurricane', 'the senator', 'the flood victims', 'Congress'] },
            { label: 'Occasion:', options: ['a routine budget hearing', 'the aftermath of a hurricane', 'an election victory', 'a campaign rally'] },
            { label: 'Purpose:', options: ['to console the flood victims', 'to persuade Congress to fund relief', 'to explain what caused the storm', 'to criticize the relief agencies'] },
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
              options: ['Ethos — credibility', 'Pathos — emotion', 'Logos — reasoning', 'None of these'],
              correctAnswer: 2,
              explanation: 'A precise statistic from a study is a textbook appeal to logos — persuasion through evidence and reason. (The CDC citation adds a touch of ethos, but the dominant move is the data.)',
            },
            {
              question: '"As someone who lost a brother to this disease, I beg you to listen." The phrase "As someone who lost a brother" primarily builds:',
              options: ['Logos', 'Ethos', 'Irony', 'Exaggeration'],
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

**Part 3 of 7 — Arrangement Choices: Repetition, Parallel Structure, and Contrast**

---

> 🔑 **The Idea:** Writers do not only choose words; they **arrange** them. Repeating a phrase, matching the structure of two clauses, setting opposites side by side, or adding and dropping "and" all change what a sentence stresses and how its ideas relate. The CED says so directly: "Repetition, synonyms, pronoun references, and parallel structure may indicate or develop a relationship between elements of a text" (REO-1.O), and "The arrangement of clauses, phrases, and words in a sentence can emphasize ideas" (STL-1.L).`,
      },
      {
        id: 'erd3-schemes',
        type: 'text' as const,
        content: `## Six Arrangement Choices and What They Do

| Choice | Example | What it can do in an argument |
|--------|---------|-------------------------------|
| **Repeating the opening words** of successive clauses | "We shall fight on the beaches, we shall fight on the landing grounds…" (Churchill, 1940) | Holds one commitment steady while the details change, building momentum and resolve |
| **Repeating the closing words** | "…government of the people, by the people, for the people…" (Lincoln, 1863) | Makes one idea the place every phrase lands, so it becomes the point the audience remembers |
| **Parallel structure**: the same grammatical form across items | "To err is human; to forgive, divine." (Pope) | Presents ideas as equal or related, so the reader compares them |
| **Contrast in parallel form**: opposed ideas in matching frames | "That’s one small step for man, one giant leap for mankind." (Armstrong, 1969) | Sharpens a difference, because the matching frame isolates the words that change |
| **Dropping the conjunctions** from a list | "I came, I saw, I conquered." (Caesar, in the traditional translation) | Speeds the list, so the actions feel swift, easy, or relentless |
| **Adding extra conjunctions** | "And the rain descended, and the floods came, and the winds blew, and beat upon that house" (Matthew 7:25, King James Version) | Slows the list and gives each item its own weight, so the blows pile up |

> 💡 **Effect, not label:** Textbooks give these patterns Greek names, but the exam never asks for them; it asks what the arrangement does. The repeated "We shall" does not just "repeat words": it keeps the vow fixed while the battlefield moves, so every clause renews the same promise.`,
      },
      {
        id: 'erd3-check-schemes',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lincoln’s "government of the people, by the people, for the people" ends each phrase with "the people." What does that repeated ending mainly do?',
              options: [
                'It sets the people against the government that rules over them',
                'It makes "the people" the fixed point where each phrase lands',
                'It slows the sentence by adding a conjunction between every phrase',
                'It shifts attention from the nation to the speaker’s own authority',
              ],
              correctAnswer: 1,
              explanation: 'Each phrase changes its preposition (of, by, for) but ends on the same words, so "the people" becomes the fixed point the sentence keeps returning to. The phrases do not oppose the people to the government, contain no added conjunctions, and say nothing about Lincoln’s authority.',
            },
            {
              question: 'Caesar’s "I came, I saw, I conquered" leaves out "and." The effect of dropping the conjunction is to',
              options: [
                'give each action separate weight and slow the pace',
                'contrast the ease of arriving with the struggle to win',
                'make the victory seem swift and almost effortless',
                'suggest the actions happened in no clear order',
              ],
              correctAnswer: 2,
              explanation: 'With no "and" to pause on, the three clauses arrive in quick succession, so conquering sounds as easy as arriving. Slowing the pace is the effect of adding conjunctions; the clauses do not contrast arriving with struggling; and their order (came, saw, conquered) is clear.',
            },
          ],
        },
      },
      {
        id: 'erd3-antithesis',
        type: 'text' as const,
        content: `## A Closer Look: Contrast Inside Parallel Structure

**Parallel structure** sets matching grammatical forms side by side so ideas feel balanced and related. "Easy come, easy go" pairs two two-word clauses.

When the matching halves carry **opposed** ideas, the frame makes the contrast land harder:

> "And so, my fellow Americans: ask not what your country can do for you—ask what you can do for your country." (Kennedy, 1961)

The two halves share one structure ("ask… what… can do for…"); only the positions of "your country" and "you" swap. That small reversal inside an otherwise identical frame carries the whole argument: citizenship means giving, not receiving.

## Order and Emphasis

Arrangement also decides **where the weight of a sentence falls** (STL-1.H, STL-1.L).

- **The end of a sentence is a position of emphasis.** "Close it, and you do not save money—you spend it" ends on the reversal the speaker wants remembered.
- **Coordination presents ideas as equals** (STL-1.J). "The plan is costly, and it will save lives" gives the cost and the lives equal standing.
- **Subordination ranks ideas** (STL-1.K). Put one idea in an "although" or "because" clause and it becomes secondary. "Although the plan is costly, it will save lives" stresses the lives; "Although it will save lives, the plan is costly" stresses the cost.

> 🔑 **Key Idea:** When you analyze arrangement, ask two questions: **what is being linked to, or set against, what?** and **where does the emphasis fall?** Then explain how the answer serves the writer’s purpose.`,
      },
      {
        id: 'erd3-check-asyn',
        type: 'dropdown-select' as const,
        content: `**Arrangement in Action** 🔽

Choose what each arrangement mainly does.`,
        exercise: {
          dropdowns: [
            { label: '"Every day, every hour, every minute, we hope." The repeated "every" mainly:', options: ['contrasts hope with despair', 'stresses how constant the hope is', 'slows the list with added conjunctions'] },
            { label: '"It was the best of times, it was the worst of times." (Dickens) The matched clauses mainly:', options: ['exaggerate how good the times were', 'repeat one idea to build a single mood', 'present two opposed judgments as both true'] },
            { label: '"We lived and laughed and loved and left." The extra "and"s mainly:', options: ['give each action its own weight', 'speed the actions into a blur', 'contrast the speaker with the listener'] },
          ],
          correctAnswers: ['stresses how constant the hope is', 'present two opposed judgments as both true', 'give each action its own weight'],
          hint1: 'Each repetition shrinks the unit of time, but the hoping never stops.',
          hint2: '"Best" and "worst" sit in identical frames, and neither cancels the other.',
          hint3: 'Each "and" makes the reader pause on one more action.',
          explanation: 'The repeated "every" narrows from days to minutes while the hope continues, so it stresses constancy. Dickens’s matched clauses hold two opposite verdicts side by side as both true of the same era. The extra conjunctions slow the list, so each action (living, laughing, loving, leaving) gets its own beat; dropping them would speed it up instead.',
        },
      },
      {
        id: 'erd3-name-scheme',
        type: 'input-boxes' as const,
        content: `**Arrangement Check** ✍️

Type one word (lowercase) for each blank.

**1)** "I came, I saw, I conquered" leaves out the word \\_\\_\\_\\_\\_\\_\\_ between the actions, which speeds the list.
**2)** "Float like a butterfly, sting like a bee" repeats the same grammatical \\_\\_\\_\\_\\_\\_\\_ in both halves.
**3)** In "Although the plan is costly, it will save lives," the idea that gets the emphasis is that the plan will save \\_\\_\\_\\_\\_\\_\\_.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['and', 'structure', 'lives'],
          hint1: 'The most common conjunction in English.',
          hint2: 'Both halves follow "[verb] like a [noun]": the same parallel ___.',
          hint3: 'The idea in the "although" clause is the secondary one.',
          explanation: '1) The missing "and" is what makes the actions feel swift. 2) Both halves share the structure "[verb] like a [noun]," which invites the reader to compare the two actions. 3) The cost sits in the subordinate "although" clause, so the main clause, about saving lives, carries the emphasis.',
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

**Part 4 of 7 — Figurative Choices: Comparison, Exaggeration, and Irony**

---

> 🔑 **The Idea:** Sometimes a writer means more than, or other than, what the words literally say. A comparison carries the qualities of one thing over to another; an exaggeration or an understatement signals feeling; irony opens a gap between what is said and what is meant. The CED treats these as choices aimed at an audience: "Writers may make comparisons (e.g., similes, metaphors, analogies, or anecdotes) in an attempt to relate to an audience. Effective comparisons must be shared and understood by the audience to advance the writer’s purpose" (RHS-1.K), and "Writers may signal a complex or ironic perspective through stylistic choices" (STL-1.R).`,
      },
      {
        id: 'erd4-tropes',
        type: 'text' as const,
        content: `## Figurative Choices and What They Do

| Choice | Example | What it can do in an argument |
|-------|-------------|---------|
| **Comparison** (simile, metaphor, analogy) | "Time is a thief." / "as busy as a bee" | Carries the qualities of something familiar onto the subject: time becomes something that takes from us without asking |
| **Giving human qualities to things** | "the wind whispered" | Makes a force or object seem to act with intent, so it feels close, gentle, or threatening |
| **Exaggeration** | "I’ve told you a million times." | Conveys feeling (here, exasperation) rather than a count; signals how much something matters to the speaker |
| **Understatement** | (of a hurricane) "a bit breezy" | Creates dry humor or restraint and leaves the reader to supply the seriousness, which can make it hit harder |
| **Irony** | "Lovely weather," in a downpour | Says the opposite of what is meant, inviting the audience to share the speaker’s judgment |
| **A symbol standing in for the thing** | "The crown declared war." | Makes an abstraction (royal power) concrete and lends it the authority the symbol carries |

The exam will not ask you to name a figure; it asks what the figure does for the writer’s purpose.

## Comparisons Must Be Shared

A comparison persuades only if the audience knows the familiar thing and feels about it the way the writer expects. "The classroom was a zoo" works for readers who picture a zoo as loud and chaotic. An analogy fails the same test when the two things differ in the very feature the argument depends on. When you analyze a comparison, ask: **which qualities carry over, and why would this audience accept them?**`,
      },
      {
        id: 'erd4-check-tropes',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '"The pen is mightier than the sword." By letting a pen and a sword stand for writing and military force, the sentence mainly',
              options: [
                'exaggerates the danger of writing in order to warn readers away from it',
                'makes an abstract contrast concrete with objects anyone can picture',
                'understates the power of armies so that it can mock the soldiers in them',
                'compares two famous writers whose styles the audience already knows',
              ],
              correctAnswer: 1,
              explanation: 'Writing and force are abstractions; a pen and a sword are objects anyone can picture, so the claim about their relative power becomes vivid and easy to remember. The line praises writing rather than warning against it, mocks no one, and names no writers.',
            },
            {
              question: 'After surviving a serious car crash, a driver says, "Well, that was inconvenient." The remark’s effect comes mainly from',
              options: [
                'the gap between the mild word and the real danger',
                'an exaggeration that makes the crash sound worse than it was',
                'a comparison that likens the crash to a daily annoyance',
                'a literal report that the crash caused only short delays',
              ],
              correctAnswer: 0,
              explanation: 'Calling a life-threatening crash merely "inconvenient" deliberately downplays it, and the distance between the word and the danger creates dry humor or stoic calm. The remark shrinks the crash rather than enlarging it, makes no comparison, and is not meant literally.',
            },
          ],
        },
      },
      {
        id: 'erd4-irony',
        type: 'text' as const,
        content: `## A Closer Look: Irony in Arguments

Irony opens a gap between what is said and what is meant, and the audience is expected to notice it.

- **Saying the opposite of what is meant.** "What a brilliant idea," said about a clearly terrible one. Sarcasm is the pointed, mocking version.
- **A gap between an argument and the reader’s values.** The CED notes that irony "may emerge from the differences between an argument and the readers’ expectations or values" (STL-1.R). Jonathan Swift’s *A Modest Proposal* (1729) calmly recommends that the children of Ireland’s poor be sold as food for the rich. Readers recoil, and the recoil is the point: Swift’s real target is a society that already treats the poor as disposable.
- **An outcome opposite to what was expected.** A fire station burns down. In arguments, writers point to such outcomes to show that a policy has defeated its own aim.

> ⚠️ **Common trap:** Irony is **not** the same as a lie. A liar wants to be believed; an ironist *wants* the audience to catch the gap between the words and the truth. The gap is the point, so the first question to ask of an ironic passage is: **what does the writer actually believe?**`,
      },
      {
        id: 'erd4-check-irony',
        type: 'dropdown-select' as const,
        content: `**What Does Each Figure Do?** 🔽

Choose the main effect of each figure.`,
        exercise: {
          dropdowns: [
            { label: '"The classroom was a zoo." The comparison suggests:', options: ['careful supervision', 'noise and disorder', 'a love of animals'] },
            { label: '"This bag weighs a ton!" (about a backpack) The exaggeration conveys:', options: ['the bag’s measured weight', 'the speaker’s calm', 'the speaker’s frustration'] },
            { label: '"Friendly fire," used for being shot by your own side. The mild-sounding word:', options: ['softens a grim event', 'praises the soldiers’ loyalty', 'exaggerates how often it happens'] },
          ],
          correctAnswers: ['noise and disorder', 'the speaker’s frustration', 'softens a grim event'],
          hint1: 'What qualities of a zoo would carry over to a room full of students?',
          hint2: 'No backpack weighs a literal ton, so the figure is about feeling, not weight.',
          hint3: '"Friendly" sits uneasily next to being shot.',
          explanation: 'Calling a classroom a zoo carries over a zoo’s noise and chaos. The impossible "ton" signals frustration rather than a measurement. "Friendly" puts a mild, even pleasant word on a deadly mistake, softening it, and the gap between word and event is what makes the phrase grimly ironic.',
        },
      },
      {
        id: 'erd4-name-trope',
        type: 'input-boxes' as const,
        content: `**Figurative Language Check** ✍️

Type one word (lowercase) for each blank.

**1)** "I have a thousand things to do before noon" is not meant \\_\\_\\_\\_\\_\\_\\_; it conveys stress, not a count.
**2)** An ironist, unlike a liar, wants the audience to notice the \\_\\_\\_\\_\\_\\_\\_ between the words and the meaning.
**3)** The CED says effective comparisons must be shared and \\_\\_\\_\\_\\_\\_\\_ by the audience.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['literally', 'gap', 'understood'],
          hint1: 'The opposite of "figuratively."',
          hint2: 'The lesson calls it "the point" of irony: the distance between what is said and what is meant.',
          hint3: 'An audience must grasp the comparison: "shared and ___."',
          explanation: '1) The exaggeration is not meant literally; it signals how stressed the speaker feels. 2) Irony depends on the audience catching the gap between words and meaning, which is what separates it from a lie. 3) RHS-1.K: a comparison advances the purpose only when it is shared and understood by the audience.',
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
              options: ['Admiration', 'Suspicion', 'Neutral reporting', 'Amused affection'],
              correctAnswer: 1,
              explanation: '"Scheme" and "cooked up" carry negative connotations of secrecy and trickery. The denotation (a plan made privately) is neutral, but the connotation signals suspicion and disapproval.',
            },
            {
              question: 'The difference between a word’s strict dictionary meaning and the associations it carries is the difference between:',
              options: ['syntax and diction', 'denotation and connotation', 'ethos and pathos', 'tone and purpose'],
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
- A sentence that **holds its main clause until the end** builds suspense and lands hard on its final words; one that **states the main idea first and then adds detail** feels relaxed and cumulative.

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
            { label: '"Are we really going to stand by and do nothing?" mainly works to:', options: ['request information', 'push listeners toward an obvious answer', 'compare inaction to an image'] },
            { label: 'Choosing "home" over "residence" makes the diction more:', options: ['formal and distant', 'warm and personal', 'technical'] },
            { label: 'A string of three two-word sentences mainly creates a tone of:', options: ['leisurely calm', 'urgency or finality', 'confusion'] },
          ],
          correctAnswers: ['push listeners toward an obvious answer', 'warm and personal', 'urgency or finality'],
          hint1: 'The speaker is not waiting for a reply; the answer is supposed to be obvious.',
          hint2: '"Home" carries warmer connotations than the clinical "residence."',
          hint3: 'Short, clipped sentences speed the rhythm and signal urgency or a sense of finality.',
          explanation: 'The question seeks no real answer; it steers listeners to the conclusion that they must act. "Home" connotes warmth/belonging vs. the cold "residence." Clipped short sentences accelerate rhythm, creating urgency or finality.',
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

| Choice | Where | Effect / how it serves the purpose |
|--------|-------|-----------------------------------|
| **Contrast** ("not X — it is Y") | "not just a building. It is the room where…" | reframes the issue from *cost* to *human value* |
| **Repeated opening** | "where my daughter… where a jobless veteran… where a lonely widow…" | repetition builds emotional momentum and breadth |
| **Pathos** | the daughter, veteran, widow | concrete sympathetic figures make the stakes feel human |
| **Reversal in parallel form** | "you do not save money — you spend it" | flips the council’s own logic against them |
| **Parallel list with no "and"** | "in dropouts, in despair, in a…" | clipped triple accelerates and intensifies the cost |
| **Question asked for effect** | "what kind of city…?" | forces the council to judge themselves; no answer needed |

Notice the *braid*: the repeated "where" carries three pathos appeals; the save/spend reversal turns a logos claim about money. The choices don’t sit in isolation — they cooperate toward one purpose: **persuading the council the library is worth funding.**

> 💡 **The model sentence:** "The speaker’s repeated ‘where… where… where’ accumulates concrete human examples, so that by the final clause the audience feels the library’s value as personal rather than abstract." That sentence *quotes, locates, and explains* without needing a technical term. Do that, and you earn the point.`,
      },
      {
        id: 'erd6-check-passage',
        type: 'multiple-choice' as const,
        content: `**Analyze the Passage** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the primary effect of the repeated "where my daughter… where a jobless veteran… where a lonely widow…"?',
              options: [
                'It supplies statistical proof that the library saves the city money',
                'It stacks concrete human examples so the library’s value feels personal',
                'It confuses the council by shifting into an overly formal register',
                'It changes the literal meaning of "where" from a place to a time',
              ],
              correctAnswer: 1,
              explanation: 'The repeated "where" stacks three vivid, sympathetic users of the library. The repetition carries the pathos, so the value feels personal and wide-reaching — exactly what the persuasive purpose needs. It offers no statistics, keeps a plain register, and leaves "where" meaning a place.',
            },
            {
              question: '"You do not save money — you spend it" works mainly by:',
              options: [
                'Comparing the act of spending money to wasting an afternoon',
                'Reversing the council’s own cost logic in a balanced contrast',
                'Understating how serious the closure will be for the city',
                'Citing budget data showing closure costs more than it saves',
              ],
              correctAnswer: 1,
              explanation: 'The balanced opposition "save… / spend…" takes the council’s framing (closing saves money) and reverses it (closing actually costs more), turning their own logic into the speaker’s argument. The line makes no comparison, does not downplay the harm, and cites no figures.',
            },
          ],
        },
      },
      {
        id: 'erd6-check-integrate',
        type: 'dropdown-select' as const,
        content: `**What Does Each Choice Do?** 🔽

Choose the main effect of each quoted phrase.`,
        exercise: {
          dropdowns: [
            { label: '"in dropouts, in despair, in a community…" (no "and")', options: ['slows the list to a calm pace', 'piles up costs relentlessly', 'compares the library to a school'] },
            { label: '"what kind of city balances its budget on the backs of its children?"', options: ['asks for budget figures', 'understates the harm of closing', 'makes the council judge itself'] },
            { label: '"This is not just a building."', options: ['reframes cost as human value', 'agrees with the council’s view', 'supplies a usage statistic'] },
          ],
          correctAnswers: ['piles up costs relentlessly', 'makes the council judge itself', 'reframes cost as human value'],
          hint1: 'Without "and," the costs arrive one after another with no pause.',
          hint2: 'The speaker expects no literal answer; the question points back at the listeners.',
          hint3: '"Not just a building — [but] the room where…" shifts what the library is said to be.',
          explanation: 'Dropping "and" makes the costs arrive in a rapid, relentless series. "What kind of city…?" expects no literal answer and makes the council judge its own choice. "This is not just a building" uses contrast to move the debate from cost to human value. (The phrase "on the backs of its children" is also a metaphor — strong passages layer choices.)',
        },
      },
      {
        id: 'erd6-takeaway',
        type: 'text' as const,
        content: `## The Takeaway

The difference between a low and high AP analysis essay is almost never the *number* of devices spotted. It is whether you:

1. **Quote** the specific text,
2. **Describe** the choice precisely (a technical name is optional), and
3. **Explain** how it acts on the audience to serve the writer’s purpose.

> ⚠️ A list of labels ("there is anaphora, pathos, and a rhetorical question") with no *because* is a glossary, not an analysis. The points live in the *because*.`,
      },
      {
        id: 'erd6-name-from-passage',
        type: 'input-boxes' as const,
        content: `**Read the Choices** ✍️

Using the library passage, type one word (lowercase) for each blank.

**1)** The repeated "where my daughter… where a jobless veteran… where a lonely widow…" stacks three concrete human \\_\\_\\_\\_\\_\\_\\_ of the library’s value.
**2)** "in dropouts, in despair, in a community…" drops the word \\_\\_\\_\\_\\_\\_\\_ between items, so the costs pile up quickly.
**3)** "What kind of city balances its budget on the backs of its children?" expects no literal \\_\\_\\_\\_\\_\\_\\_; it asks the council to judge itself.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['examples', 'and', 'answer'],
          hint1: 'The walkthrough says the repetition "accumulates concrete human ___."',
          hint2: 'The most common conjunction in English.',
          hint3: 'The question is asked for effect, not for a reply.',
          explanation: '1) The repeated "where" stacks examples (a daughter, a veteran, a widow) so the value feels personal. 2) Dropping "and" makes the costs arrive in a rapid series. 3) The question expects no answer; it turns the council’s attention on its own choice.',
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

You can now (1) read the rhetorical situation, (2) identify the three appeals, (3) explain what arrangement choices and figurative choices do, (4) analyze diction, tone, and syntax, and (5) integrate it all into real analysis. Let’s consolidate.`,
      },
      {
        id: 'erd7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| You see… | It often… | Ask… |
|----------|--------------|----------|
| repetition at the *start* of clauses | builds rhythm and holds one commitment steady | what stays fixed while the details change? |
| repetition at the *end* of clauses | makes one idea the point everything lands on | why does the writer keep returning to this word? |
| opposite ideas in matching structure | sharpens a contrast | what exactly is being set against what? |
| a list with no "and" | speeds the list | does the speed suggest ease, urgency, or relentlessness? |
| a list with extra "and"s | slows the list and gives each item weight | why should each item count separately? |
| a comparison ("X is Y," "like," an analogy) | carries qualities from a familiar thing to the subject | which qualities carry over, and does this audience share them? |
| obvious exaggeration or understatement | conveys feeling, not fact | what attitude does the distortion reveal? |
| saying the opposite of what is meant | creates irony | what does the writer actually believe? |
| a question with no expected answer | steers the audience to a conclusion | what answer is the audience supposed to supply? |

> 🔑 **Master rule:** Arrangement shapes emphasis and relationships; figurative language shapes meaning and feeling; the appeals (ethos, pathos, logos) are the strategy. Always end on *effect*.`,
      },
      {
        id: 'erd7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A school board member says, "We will rebuild our gym, we will reopen our library, we will restore our music program." How does the parallel structure most help her argument?',
              options: [
                'It changes the literal meaning of each promise so listeners must decode it',
                'It presents the three promises as equal parts of one commitment',
                'It replaces the evidence she would otherwise need for her plan',
                'It slows her delivery so the audience has time to take notes',
              ],
              correctAnswer: 1,
              explanation: 'Matching structure ("we will [verb] our [noun]") signals that the three promises belong together and carry equal weight, so they read as one plan (REO-1.O). Parallel structure does not change literal meaning, cannot substitute for evidence, and here speeds rather than slows the delivery.',
            },
            {
              question: '"My backpack weighs a thousand pounds" and "I’ve asked you a million times" both work by',
              options: [
                'downplaying a problem so the speaker sounds calm',
                'making literal claims that a listener could check',
                'comparing an object to something unlike it',
                'conveying feeling through obvious exaggeration',
              ],
              correctAnswer: 3,
              explanation: 'Both deliberately exaggerate, and neither is meant literally: the impossible numbers express the speaker’s strain or exasperation. They overstate rather than downplay, and neither compares one thing to another.',
            },
          ],
        },
      },
      {
        id: 'erd7-mixed2',
        type: 'dropdown-select' as const,
        content: `**One More Pass** 🔽

Choose what each choice mainly does.`,
        exercise: {
          dropdowns: [
            { label: '"The White House announced the policy today." Naming the building instead of the officials:', options: ['exaggerates the policy’s scope', 'presents it as the institution’s act', 'contrasts two branches of government'] },
            { label: '"Give me liberty or give me death!" The repeated "give me" sets up:', options: ['a long list of equal options', 'a joke at the speaker’s expense', 'a stark choice between two fates'] },
            { label: '"I think we did okay," after winning by 50 points. The understatement:', options: ['signals modesty or dry humor', 'complains about the margin', 'exaggerates the victory'] },
          ],
          correctAnswers: ['presents it as the institution’s act', 'a stark choice between two fates', 'signals modesty or dry humor'],
          hint1: 'The building stands for the whole administration, not for one person.',
          hint2: 'The same two words open both halves, and only the object changes.',
          hint3: 'Calling a 50-point blowout merely "okay" downplays the result on purpose.',
          explanation: 'Using "The White House" makes the announcement the act of the institution, with its authority, rather than of particular officials. The repeated "give me" frames two outcomes in identical form, so the choice between liberty and death feels absolute. Calling a blowout "okay" downplays it, which reads as modesty or dry humor.',
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
              options: ['Pathos', 'Logos', 'Ethos', 'None of the three'],
              correctAnswer: 1,
              explanation: 'A measurable, evidence-based claim ("for every dollar… society saves seven") is an appeal to logos — persuasion through reason and data.',
            },
            {
              question: '"Ask not what your country can do for you — ask what you can do for your country" is memorable mainly because',
              options: [
                'it exaggerates what the country can do for its citizens',
                'its matching halves reverse who gives and who receives',
                'it lets a symbol stand in for the government as a whole',
                'its outcome is the opposite of what listeners expected',
              ],
              correctAnswer: 1,
              explanation: 'The two halves share one structure, and only the positions of "your country" and "you" swap, so the reversal from receiving to giving stands out sharply. The line exaggerates nothing, uses no symbol for the government, and describes no unexpected outcome.',
            },
            {
              question: 'On the AP English Language exam, a complete analysis of a device must do all of the following EXCEPT:',
              options: [
                'Quote or point to the specific text',
                'Explain the choice’s effect on the audience',
                'Link that effect to the writer’s purpose',
                'Supply the technical Greek or Latin name for each choice',
              ],
              correctAnswer: 3,
              explanation: 'Quoting the text, explaining the effect, and linking it to purpose are the essentials. The exam never requires a technical name for a device: a precise plain-language description earns the same credit, because the analysis lives in the *because*, not the label.',
            },
          ],
        },
      },
    ],
  },
]
