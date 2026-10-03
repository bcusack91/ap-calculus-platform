export const actReadingStratPart7Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs7-intro',
      type: 'text' as const,
      content: `
# 🔗 Paired Passages and Integrated Review

**Part 7 of 7 — Reading Two Authors, Relationship Questions & a Full Mixed Set**

## How a Paired Set Works

One passage set on the ACT Reading section may contain **two shorter passages** (Passage A and Passage B) on a related topic. The questions come in three groups: questions about **Passage A only**, questions about **Passage B only**, and questions about **both passages**.

**The divide-and-conquer order:**
1. Read **Passage A**, map it, and answer the A-only questions.
2. Read **Passage B**, map it, and answer the B-only questions.
3. Write a one-line **relationship note**, then answer the questions about both.

This order keeps you from mixing up which author said what, the single most common error on paired sets, and it means the "both" questions come last, when you know each passage well.

## The Relationship Note

After both passages, write each author's position in a few words and the link between them:

> A: zoo breeding saves species · B: valuable but reaches few, money goes to crowd-pleasers · **B qualifies A**

Almost every paired relationship fits one of these:

| Relationship | What B does to A | Typical B language |
|---|---|---|
| **agrees / extends** | accepts A's point and adds more | "Moreover," "Beyond that" |
| **qualifies** | accepts part of A but limits it | "valuable, but…," "true, yet only…" |
| **challenges** | disputes A's central claim | "In fact," "This view overlooks…" |
| **illustrates** | gives an example of A's general point | "Consider…," "One case…" |
| **shifts focus** | discusses a different aspect of the topic | a new question entirely |

**"Qualifies" is the most common relationship and the most commonly missed.** Students who see a "but" in Passage B often jump to "rejects" or "disagrees completely." If B opens by granting A's point ("Printing certainly made books cheaper, but…"), the relationship is a qualification, not a rejection.

## Relationship Question Types

| Stem | What to do |
|---|---|
| "The author of Passage B would most likely respond to the claim in Passage A by…" | Use your relationship note. Concede? Limit? Reject? Match the strength. |
| "Both authors would most likely agree that…" | The answer must be supported by **both** passages. Check each passage separately. |
| "Unlike the author of Passage A, the author of Passage B…" | Find something B does (or says) that A does not. |
| "Which statement best describes how the passages differ in their focus?" | Name what each emphasizes: A on X, B on Y. |
| "Compared with Passage A, Passage B is more…" | A tone or attitude comparison: direction and strength (Part 4). |

**The "both" trap:** a choice that is clearly true for **one** passage. On an agreement question, read each choice twice, once against A and once against B, and eliminate it the moment either passage contradicts it or fails to support it.

## Integrated Review: Name the Question, Then Use the Tool

On test day, questions from every part of this lesson arrive mixed together. The fastest readers identify the question type from the stem and reach for the matching move.

| Stem clue | Skill | The move |
|---|---|---|
| "mainly serves to," "function of paragraph 3" | Structure (Part 1) | Job verb + deletion test |
| "main idea," "primarily concerned with" | Main idea (Part 2) | Umbrella test; keep the condition |
| "most nearly means," "strongest evidence" | Words and evidence (Part 3) | Cover and predict; rank evidence by strength |
| "tone," "attitude," "in order to" | Tone and purpose (Part 4) | Direction then strength; what the detail does |
| "suggests," "inferred," "best supported" | Inference (Part 5) | One step; least extreme supported |
| "According to the passage," "EXCEPT" | Direct evidence (Part 6) | Keyword, full sentence, check each choice |
| "Passage A… Passage B…," "both authors" | Paired passages (Part 7) | Relationship note; test against each passage |

## Phrases That Signal Degree

Many review questions turn on small, carefully chosen phrases. Read them for **degree**:

- "a little less badly each week" → progress that is **real but slow**
- "not unkindly" → gentle, even though the action (laughing) might sound harsh
- "partly fair" → a **partial** concession, not agreement
- "for now," "so far," "has not yet" → a situation that may change

When a question asks what a phrase "suggests," translate its degree first, then pick the choice that matches it, neither stronger nor weaker.
      `
    },
    {
      id: 'act-rs7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A paired set from start to finish</b></summary>

**Passage A:** Public libraries in several cities now lend more than books: drills, sewing machines, even telescopes. Supporters say these "libraries of things" save residents money and keep rarely used items out of landfills.

**Passage B:** Lending tools sounds sensible, but it is costly. Items break, need repair, and require trained staff to check them in and out. A library that spends its budget maintaining ladders may have less to spend on reading programs, which remain its central mission.

**Relationship note:** A: tool lending saves money and waste · B: sensible idea, but costly and may pull money from reading · **B qualifies A**

**"How would the author of B respond to A?"** By granting that tool lending is appealing but warning about its costs to the library. Reject "dismiss it as pointless" (B calls it "sensible") and "agree it costs nothing" (B's whole point is cost).

**"Both authors would agree that…"** Tool lending has some appeal or benefit. A praises it; B calls it "sensible." A choice like "tool lending threatens reading programs" fits B only.
</details>

<details>
<summary><b>Example 2: Translate a phrase's degree</b></summary>

**Passage:** After the flood, the shop reopened in stages: first the front counter, then two aisles, then, by the end of summer, most of the store. "We're getting there," the owner said.

**Question:** The owner's comment "We're getting there" suggests that the recovery was:
- complete by the end of summer (too strong; "most of the store") ✗
- **progressing but not finished** ✓ ("getting there" = moving toward a goal not yet reached)
- stalled after the front counter reopened (contradicted by the stages that followed) ✗
- faster than the owner had expected (no comparison to expectations is given) ✗
</details>
      `
    },
    {
      id: 'act-rs7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Paired Passages** 🎯

**Passage A**

The printing press, introduced in Europe in the fifteenth century, is often credited with spreading the ability to read. Within a few decades, printed books cost far less than hand-copied ones, and print shops had opened in hundreds of towns. Cheaper books, the argument goes, gave ordinary people a reason to learn to read.

**Passage B**

Printing certainly made books cheaper, but in many regions the share of people who could read rose slowly for centuries afterward. Reading spread widely only where churches and, later, governments set up schools. A cheap book is of little use to someone who has never been taught to read it.
      `,
      exercise: {
        questions: [
          {
            question: `The author of Passage B would most likely respond to the argument in Passage A by:`,
            options: [
              `denying that printing made books any less expensive`,
              `granting that print cut costs but stressing the role of schools`,
              `agreeing that cheap books alone explain the spread of reading`,
              `arguing that hand-copied books were better than printed ones`,
            ],
            correctAnswer: 1,
            explanation: `Passage B opens by conceding A's premise ("Printing certainly made books cheaper") and then argues that schooling was what spread reading, a qualification of A's argument. B explicitly accepts that books got cheaper, it rejects the idea that cheap books alone did the job, and neither passage compares the quality of hand-copied and printed books.`,
          },
          {
            question: `The authors of both passages would most likely agree that:`,
            options: [
              `schools were the main cause of rising literacy`,
              `literacy rose quickly once printing began`,
              `printing made books less expensive`,
              `print shops opened mainly in large cities`,
            ],
            correctAnswer: 2,
            explanation: `Passage A says printed books "cost far less," and Passage B says printing "certainly made books cheaper," so lower cost is common ground. Schools as the main cause is B's view alone; B says literacy rose slowly, contradicting a quick rise; and A says shops opened in "hundreds of towns," with no claim that they were mainly in large cities.`,
          },
          {
            question: `Which choice best describes how the passages differ in focus?`,
            options: [
              `A focuses on the supply of cheap books; B on access to teaching`,
              `A focuses on governments; B on the cost of hand-copied books`,
              `A focuses on schools; B on the number of print shops in towns`,
              `A focuses on modern libraries; B on medieval church records`,
            ],
            correctAnswer: 0,
            explanation: `A builds its case on cheaper, more plentiful books, while B argues that being taught to read mattered more. Governments and schools appear only in B, the cost of hand-copied books and the spread of print shops appear only in A, and neither passage discusses modern libraries or church records.`,
          },
          {
            question: `Which statement from Passage B most directly challenges the reasoning in Passage A?`,
            options: [
              `"Printing certainly made books cheaper"`,
              `"A cheap book is of little use to someone who has never been taught"`,
              `"Reading spread widely only where churches… set up schools"`,
              `"the share of people who could read rose slowly for centuries"`,
            ],
            correctAnswer: 3,
            explanation: `A's argument predicts that cheaper books quickly led people to read; a slow rise "for centuries afterward" is evidence against that link. "Printing certainly made books cheaper" agrees with A. The statements about schools and about a cheap book being of little use to an untaught reader support B's alternative explanation, but the slow rise is the evidence that directly undercuts A's cause-and-effect reasoning.`,
          },
        ],
      },
    },
    {
      id: 'act-rs7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Name the Relationship** 🔍

Passage A in each pair argues: *"Homework helps students learn."* Choose how each Passage B relates to it.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'B: "Homework can help, but only when it is short and closely tied to the day\'s lesson."',
            options: ['agrees and extends', 'qualifies', 'challenges', 'illustrates'],
          },
          {
            label: 'B: "In one district, students who did twenty minutes of math practice a night improved their test scores."',
            options: ['agrees and extends', 'qualifies', 'challenges', 'illustrates'],
          },
          {
            label: 'B: "Studies of young children find no link between homework and learning; the belief is mostly habit."',
            options: ['agrees and extends', 'qualifies', 'challenges', 'illustrates'],
          },
        ],
        correctAnswers: ['qualifies', 'illustrates', 'challenges'],
        hint1: '"Can help, but only when…" accepts the claim with a limit.',
        hint2: 'A single district\'s results are a concrete case of A\'s general claim.',
        hint3: '"No link" disputes the central claim.',
        explanation: '"Can help, but only when…" accepts A with conditions (qualifies). A district where practice raised scores is an example of A\'s claim (illustrates). "No link… mostly habit" denies A\'s claim outright (challenges).',
      },
    },
    {
      id: 'act-rs7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage A:** Community gardens turn vacant lots into sources of fresh food. In neighborhoods without grocery stores, a single garden can supply dozens of families with vegetables through the summer.

**Passage B:** Gardens are a welcome sight, but a summer harvest cannot replace a year-round grocery store. Families still need somewhere to buy food in January.

<details>
<summary><b>Try it: How would the author of Passage B most likely respond to Passage A?</b></summary>

By agreeing that gardens have value ("a welcome sight") while pointing out that they cannot meet year-round needs. This is a qualification, so "rejects community gardens as useless" is too strong.
</details>

<details>
<summary><b>Try it: Which claim would both authors accept: "gardens provide some fresh food" or "gardens solve the lack of grocery stores"?</b></summary>

"Gardens provide some fresh food." A says so directly, and B's point that a summer harvest exists implies it. B explicitly denies that gardens replace grocery stores.
</details>

**ACT Tip:** On paired sets, finish all the single-passage questions before touching any "both passages" question. You will answer the comparisons faster and with fewer mix-ups once each author's position is settled in your notes.
      `
    },
    {
      id: 'act-rs7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Integrated Review** 📋

Literary narrative: this passage is adapted from a story about learning to bake.

¶1 The first time Ana tried to make her grandmother's bread, the loaf came out of the oven flat and pale, as dense as a paving stone. She had followed the recipe card exactly, or so she thought: four cups of flour, a spoonful of yeast, warm water, salt.

¶2 Her mother laughed when she saw it, not unkindly, and pointed out what the card did not say. Grandmother had never measured the water; she had added it until the dough "felt right," a judgment no card could record.

¶3 So Ana baked again, and again. Some loaves rose; most did not. By the end of the winter, she could tell by touch when the dough was ready, though she could not have explained how.

¶4 She has since written a new card for her own daughter. On the line for water, it says only: "Until it feels right. Keep trying."
      `,
      exercise: {
        questions: [
          {
            question: `Which choice best states the main idea of the passage?`,
            options: [
              `Ana's mother teases her about her baking every winter`,
              `A written recipe is the most reliable way to learn to bake bread`,
              `Ana's grandmother refused to share her real bread recipe`,
              `Ana learns by practice what her recipe card could not teach`,
            ],
            correctAnswer: 3,
            explanation: `The passage moves from a failed loaf, to the discovery that the card leaves out the key judgment, to a winter of practice, to a new card that tells her daughter to keep trying, so the main idea is learning by practice what writing cannot convey. The mother laughs once, the passage argues against relying on a card alone, and nothing suggests the grandmother hid her recipe.`,
          },
          {
            question: `The second paragraph mainly serves to:`,
            options: [
              `explain why following the card alone had failed`,
              `describe the grandmother's life before she baked`,
              `show that Ana's mother was a better baker than Ana`,
              `list the ingredients that Ana used in her first loaf`,
            ],
            correctAnswer: 0,
            explanation: `The mother points out that the grandmother added water by feel, something "no card could record," which explains the flat first loaf. The paragraph says nothing about the grandmother's earlier life or the mother's own baking, and the ingredients are listed in the first paragraph.`,
          },
          {
            question: `As it is used in paragraph 2, "record" most nearly means:`,
            options: [`capture in writing`, `set a new best mark`, `play back aloud`, `count over time`],
            correctAnswer: 0,
            explanation: `A judgment "no card could record" is one that cannot be written down, so "record" means capture in writing. "Set a new best mark" is the sports meaning, "play back aloud" suggests audio, and nothing is being counted.`,
          },
          {
            question: `The phrase "not unkindly" (paragraph 2) suggests that the mother's laughter was:`,
            options: [`cruel and mocking`, `forced and nervous`, `gentle and amused`, `angry and impatient`],
            correctAnswer: 2,
            explanation: `"Not unkindly" tells the reader that the laugh, which might sound harsh, carried no meanness, and the mother goes on to help by explaining the missing step, so the laughter was gentle and amused. The phrase rules out cruelty and anger directly, and nothing in the passage suggests nervousness.`,
          },
          {
            question: `The note on Ana's new card most strongly suggests that she believes:`,
            options: [
              `her daughter will never learn to bake bread well`,
              `the skill is learned through repeated practice`,
              `recipes should always list exact measurements`,
              `her grandmother's recipe contained an error`,
            ],
            correctAnswer: 1,
            explanation: `"Until it feels right. Keep trying." passes on the lesson Ana learned over a winter of loaves: the right amount of water is learned by doing. "Keep trying" expresses confidence, not doubt, about her daughter; the card deliberately avoids an exact measurement; and the problem was what the card left out, not an error in it.`,
          },
        ],
      },
    },
    {
      id: 'act-rs7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Paired sets: divide and conquer.** Passage A and its questions, then Passage B and its questions, then the questions on both.
- **Write a relationship note:** each author's position in a few words, plus how B relates to A (agrees, qualifies, challenges, illustrates, shifts focus).
- **"Qualifies" is common and often missed.** A "but" after a concession limits A's claim; it does not reject it.
- **"Both authors agree" answers must pass two tests,** one against each passage. A choice true for only one passage is the standard trap.
- **On mixed sets, name the question type from the stem** and use the matching tool: job verb, umbrella test, cover-and-predict, direction-and-strength, one-step inference, keyword-and-sentence.
- **Read small phrases for degree.** "A little less badly," "not unkindly," "partly fair," and "not yet" each set a precise level, so match it exactly.
      `
    }
  ]
};
