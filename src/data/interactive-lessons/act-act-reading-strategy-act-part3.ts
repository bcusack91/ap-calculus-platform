export const actReadingStratPart3Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs3-intro',
      type: 'text' as const,
      content: `
# 🔎 Words in Context and Best Evidence

**Part 3 of 7 — Vocabulary in Context, Sentences That Need Their Neighbors & Choosing the Strongest Support**

These questions all send you to a specific spot in the passage. That makes them some of the most winnable questions on the test, but only if you actually reread the spot and the sentences around it instead of answering from memory.

## Words in Context

**Typical stem:** *"As it is used in the passage, the word 'measured' most nearly means…"*

ACT chooses words with **more than one meaning**, and the most common, dictionary-first meaning is usually a trap. The question is never "What does this word mean?" It is "What does this word mean **here**?"

**The cover-and-predict method:**
1. **Cover** the word and reread the full sentence, plus the sentence before it.
2. **Predict** your own replacement word from the context: "The orchestra's newly _____ sound" after quiet, precise rehearsals → *controlled, careful*.
3. **Substitute** each choice into the sentence. The right one keeps the meaning *and* the tone.
4. **Reject** the choice that matches the word's most familiar meaning unless the context clearly calls for it.

| Word | Familiar meaning (often the trap) | Meaning in a likely ACT context |
|---|---|---|
| measured | quantified with a ruler | controlled, deliberate ("a measured response") |
| sound | noise | reliable, sensible ("a sound plan") |
| check | verify, examine | restrain, hold back ("check its ambitions") |
| striking | hitting | remarkable, noticeable ("striking results") |
| arresting | taking into custody | attention-grabbing ("an arresting opening line") |
| appreciate | be grateful for | increase in value ("the land appreciated") |
| cultivate | grow crops | develop, encourage ("cultivate a friendship") |
| conventional | related to a convention | ordinary, traditional ("conventional methods") |

**Tone counts too.** If the passage praises something, a negative synonym is wrong even if its dictionary meaning is close: "measured" praise of an orchestra is *controlled*, not *sluggish*.

## Sentences That Need Their Neighbors

Some of the shortest sentences on the test carry the most meaning, and they mean almost nothing on their own:

- "That is exactly the point." (Which point? Read the sentence before.)
- "After that, the grumbling stopped." (After what? Why did it stop?)
- "She had no objection." (To what, and why not?)

**Rule:** for any question about a single sentence, read **one sentence before and one sentence after**. The answer to "In context, this sentence indicates…" almost always comes from a neighbor.

## Best Evidence and Support Questions

**Typical stems:** *"Which sentence provides the strongest evidence that…," "Which detail best supports the claim that…," "The information in sentence 3 primarily serves to…"*

**Step 1 — Pin down the exact claim.** "Evidence that the decision was **successful**" is different from "evidence that the decision was **difficult**." Underline the key word.

**Step 2 — Rank the candidates.** Evidence comes in strengths:

| Strength | Kind of sentence | Example (claim: the new schedule improved attendance) |
|---|---|---|
| Strongest | A direct, measured result tied to the claim | "Absences fell by a third the following year." |
| Moderate | An observation or impression | "Teachers said students seemed more alert." |
| Weak | Effort, plans, or background | "The district spent months designing the schedule." |
| Indirect | A later consequence that only hints at the claim | "Other districts have asked to copy the plan." |

**Step 3 — Check the match.** The strongest evidence must support **all** of the claim, not a neighboring idea. A sentence that proves people *liked* the program does not prove the program *worked*.

## How Evidence Functions

When a question asks what a sentence or detail **does** for the argument, name its role:

| Role | What it does | Common signals |
|---|---|---|
| example | gives a concrete case of a general claim | "For instance," "During one…," "In one study…" |
| statistic / data | gives a measured result | numbers, "a third," "twice as many" |
| counterpoint | presents the other side | "Critics argue," "Some worry" |
| concession | admits a limit before responding | "Admittedly," "It is true that" |
| conclusion | states what the evidence adds up to | "then," "therefore," "so" |

A detail that **follows** a general claim and makes it concrete is almost always an **example** supporting that claim, not a counterargument, even if it mentions something negative.
      `
    },
    {
      id: 'act-rs3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A word with a familiar meaning that does not fit</b></summary>

**Passage:** The council received the proposal coolly. Its author knew the idea would need careful **cultivation** before it found enough allies to pass.

**Cover and predict:** "The idea would need careful _____ before it found allies" → *development, support-building*.

**Substitute:**
- *farming* (the familiar meaning; nothing is being planted) ✗
- *development* ✓ (an idea can be developed until it wins support)
- *refinement of manners* (another real sense of "cultivated," but the subject is an idea, not a person) ✗
- *harvesting* (the opposite stage; the idea has not yet produced anything) ✗
</details>

<details>
<summary><b>Example 2: Choosing the strongest evidence</b></summary>

**Passage:** (1) Two years ago, the Linden Street library began staying open until 9 p.m. (2) Some board members feared the late hours would be wasted. (3) Staff noticed more teenagers studying in the evenings. (4) Evening checkouts now make up a quarter of the library's total. (5) The board recently voted to extend the late hours to weekends.

**Question:** Which sentence provides the strongest evidence that the late hours have been well used?

- Sentence 2 states the fear, the opposite of the claim. ✗
- Sentence 3 is an impression ("noticed"), moderate support. ✗
- **Sentence 4** is a measured result tied directly to evening use. ✓
- Sentence 5 is a consequence that implies success, but a vote could have other reasons; it only hints. ✗
</details>
      `
    },
    {
      id: 'act-rs3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Words in Context** 🎯

Use cover-and-predict on each sentence before you look at the choices.
      `,
      exercise: {
        questions: [
          {
            question: `"After years of neglect, the garden's paths were barely passable, but the new caretaker's sound plan quickly won the board's approval." As it is used here, "sound" most nearly means:`,
            options: [`audible`, `healthy`, `wise`, `complete`],
            correctAnswer: 2,
            explanation: `A plan that "quickly won the board's approval" is one that seemed reasonable, so "sound" means wise, or sensible. "Audible" is the familiar noise meaning and cannot describe a plan. "Healthy" fits "a sound body," not a proposal, and nothing suggests the plan's approval depended on its being complete.`,
          },
          {
            question: `"Rising costs forced the theater to check its ambitions, staging two plays that season instead of the five it had announced." As it is used here, "check" most nearly means:`,
            options: [`restrain`, `scrutinize`, `verify`, `mark`],
            correctAnswer: 0,
            explanation: `Cutting five plays to two is holding back, so "check" means restrain. "Scrutinize" and "verify" match the familiar sense of checking, but the theater did not inspect its ambitions; it reduced them. "Mark" is a sense of "check" as in a check mark, which has nothing to do with the cuts.`,
          },
          {
            question: `"The critic's arresting first line, 'This novel will ruin your weekend,' made readers want to find out why." As it is used here, "arresting" most nearly means:`,
            options: [`detaining`, `frightening`, `halting`, `eye-catching`],
            correctAnswer: 3,
            explanation: `A line that "made readers want to find out why" grabbed their attention, so "arresting" means eye-catching. "Detaining" is the police meaning. "Halting" suggests stopping or hesitating rather than drawing interest, and the line is playful, not frightening.`,
          },
          {
            question: `"The two scientists had little in common, but their partnership was cultivated over many years of shared fieldwork." As it is used here, "cultivated" most nearly means:`,
            options: [`planted`, `developed`, `refined`, `harvested`],
            correctAnswer: 1,
            explanation: `A partnership built gradually over "many years of shared fieldwork" was developed. "Planted" and "harvested" are farming senses that do not describe a relationship, and "refined" would suggest polishing an existing partnership rather than building one between people with "little in common."`,
          },
        ],
      },
    },
    {
      id: 'act-rs3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rank the Evidence** 🔍

Claim: *"The town's new recycling program has reduced the amount of trash sent to the landfill."* Rate each sentence as evidence for that exact claim.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Landfill deliveries from the town dropped by 18 percent in the program\'s first year."',
            options: ['strong: a measured result', 'moderate: an impression', 'weak: effort or background', 'off target: a different claim'],
          },
          {
            label: '"Residents say they feel good about sorting their cans and bottles."',
            options: ['strong: a measured result', 'moderate: an impression', 'weak: effort or background', 'off target: a different claim'],
          },
          {
            label: '"The town spent a year designing the program and printing guides."',
            options: ['strong: a measured result', 'moderate: an impression', 'weak: effort or background', 'off target: a different claim'],
          },
        ],
        correctAnswers: ['strong: a measured result', 'off target: a different claim', 'weak: effort or background'],
        hint1: 'Which sentence measures what happened to landfill trash?',
        hint2: 'Feeling good about recycling says nothing about the amount of trash.',
        hint3: 'Designing a program shows effort, not results.',
        explanation: 'The 18 percent drop measures the exact outcome in the claim. Residents\' feelings support a different claim (the program is popular), not that trash decreased. A year of design work is effort, which cannot show the program reduced anything.',
      },
    },
    {
      id: 'act-rs3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage:** (1) The orchestra's new concert hall was widely criticized for its plain gray exterior. (2) The architect had no objection. (3) Every dollar saved on the outside, she explained, had gone into the hall's acoustics. (4) On opening night, critics who had mocked the building called its sound the finest in the state.

<details>
<summary><b>Try it: In context, what does sentence 2 suggest about the plain exterior?</b></summary>

It was a deliberate trade-off. Alone, "The architect had no objection" is puzzling; sentence 3 explains that she chose to spend the money on sound instead. Choices such as "an embarrassing mistake" read sentence 1 without its neighbors.
</details>

<details>
<summary><b>Try it: Which sentence gives the strongest evidence that the architect's choice paid off?</b></summary>

Sentence 4. Former critics now praise the sound, which is the outcome the choice was meant to produce. Sentence 3 explains the plan but not its result.
</details>

**ACT Tip:** When a question names a sentence or a line, put your finger (or cursor) on it and read one sentence on either side before you look at the choices. Most wrong answers on these questions come from answering what you remember rather than what the lines say.
      `
    },
    {
      id: 'act-rs3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Social science: this passage describes one district's schedule change.

(1) In 2019, the Ridgeview school district moved its high school start time from 7:30 to 8:30 a.m. (2) Some parents worried that the later dismissal would cut into after-school jobs and sports. (3) Teachers, meanwhile, reported that first-period students seemed more alert. (4) Over the following year, the share of students absent from first period fell by nearly a third. (5) Athletic directors shifted practice times later, and no team dropped out of its league. (6) The district now plans to study whether grades have changed as well.
      `,
      exercise: {
        questions: [
          {
            question: `Which sentence provides the strongest evidence that the later start time improved attendance?`,
            options: [`Sentence 3`, `Sentence 4`, `Sentence 5`, `Sentence 6`],
            correctAnswer: 1,
            explanation: `Sentence 4 reports a measured drop in first-period absences, the exact outcome in the claim. Sentence 3 is an impression about alertness, not attendance. Sentence 5 concerns sports schedules, and sentence 6 describes a future study of grades.`,
          },
          {
            question: `Which sentence most directly addresses the concern raised in sentence 2?`,
            options: [`Sentence 3`, `Sentence 4`, `Sentence 6`, `Sentence 5`],
            correctAnswer: 3,
            explanation: `Sentence 2 worries about sports and jobs; sentence 5 reports that practices moved and no team dropped out, which answers the sports part of that worry. Sentences 3 and 4 address alertness and attendance, and sentence 6 concerns grades.`,
          },
          {
            question: `Compared with sentence 4, sentence 3 offers:`,
            options: [
              `an impression rather than a measured result`,
              `a measured result rather than an opinion`,
              `a parent's complaint about the schedule`,
              `a plan for future research on grades`,
            ],
            correctAnswer: 0,
            explanation: `"Seemed more alert" is what teachers noticed, an impression, while sentence 4 gives a measured drop in absences. The measured result is in sentence 4, not 3. Parents' worries appear in sentence 2, and the plan to study grades is in sentence 6.`,
          },
          {
            question: `Sentence 6 suggests that, at the time described, the change's effect on grades was:`,
            options: [`clearly positive`, `slightly negative`, `not yet known`, `too small to matter`],
            correctAnswer: 2,
            explanation: `A district that "plans to study whether grades have changed" does not yet know the answer. Calling the effect positive, negative, or too small would each claim a finding the passage says has not been made.`,
          },
          {
            question: `The information in sentence 4 primarily serves to:`,
            options: [
              `give a measured result that supports the change`,
              `introduce a worry that the passage later rejects`,
              `explain why the district first chose 7:30 a.m.`,
              `describe how coaches adjusted their practices`,
            ],
            correctAnswer: 0,
            explanation: `Sentence 4 follows the teachers' impression with hard numbers, which makes it supporting data for the schedule change. The worry appears in sentence 2, the passage never explains the old start time, and the coaches' adjustment is the subject of sentence 5.`,
          },
        ],
      },
    },
    {
      id: 'act-rs3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Words in context: cover, predict, substitute.** The word's most familiar meaning is usually the trap.
- **Match tone as well as meaning.** In a passage of praise, a negative synonym is wrong.
- **Short sentences need their neighbors.** Read one sentence before and one after any sentence a question names.
- **Strongest evidence = a direct, measured result tied to the exact claim.** Impressions are moderate; effort, plans, and background are weak; later consequences only hint.
- **Match all of the claim.** Evidence that a program is popular does not show that it works.
- **Name the role:** example, data, counterpoint, concession, or conclusion. A concrete case that follows a claim is usually an example supporting it.
      `
    }
  ]
};
