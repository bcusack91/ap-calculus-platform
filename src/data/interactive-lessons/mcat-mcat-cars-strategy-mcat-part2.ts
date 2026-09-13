export const mcatCarsStratPart2Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 2 of 7 — Active Reading Techniques**

### How to Read CARS Passages

**DO NOT** read passively! Active reading means:

1. **Identify the main idea** of each paragraph as you go
2. **Track the author's tone** (positive, negative, neutral, critical?)
3. **Note structural shifts** ("However," "On the other hand," "Despite this")
4. **Don't memorize details** — know WHERE things are, not WHAT they say

### The Paragraph Map Strategy

After reading each paragraph, mentally note:
- P1: Main claim or thesis
- P2: Supporting evidence or counterargument
- P3: Author's response or new perspective
- Continue...

### Author's Main Idea (AMI)

After finishing the passage, you should be able to state:
- What is the MAIN argument?
- Is the author FOR or AGAINST it?
- What evidence supports the position?

### Warning Signs of Passive Reading

- You reached the end but can't summarize the passage
- You're rereading sentences multiple times
- You're highlighting everything (or nothing)
- You don't know the author's position`
    },
    {
      id: 'cs2-worked',
      type: 'text' as const,
      content: `### Worked Example — Building a Paragraph Map in Real Time

A paragraph map is a one-phrase tag per paragraph that you build *while reading*, so that when a question sends you back, you know exactly where to look. Watch it form on a four-paragraph passage skeleton.

> **P1:** Introduces the long-held view that folk tales are simple entertainment for children.
> **P2:** "However," presents anthropologists' finding that the same tales encode survival knowledge and social rules.
> **P3:** Gives a detailed case — an Arctic tale that secretly teaches ice-safety — as evidence.
> **P4:** Author concludes folk tales are a serious cultural technology, gently faulting scholars who still dismiss them.

**The map (what you jot or hold in mind):**
- P1: old view — "just entertainment"
- P2: HOWEVER — tales encode knowledge (turn)
- P3: example — Arctic ice-safety tale (evidence for P2)
- P4: author's verdict — tales = cultural technology; mild critique of doubters

**Why this is enough.** Notice you did *not* memorize the Arctic tale's details. You recorded its *function* ("evidence for the encode-knowledge claim") and its *location* (P3). If a detail question asks about the Arctic tale, you flip to P3 in seconds. If a main-idea question appears, P4 hands you the answer. If a tone question appears, "gently faulting" in P4 tells you the attitude.

**The pivot is the spine.** The single most important mark is the "However" at P2 — it is where the passage turns from the old view to the author's view. In most CARS passages the author's real position lives *after* the main pivot. Find that hinge and the structure clicks into place.

**Takeaway:** Tag each paragraph with its *role* (claim, turn, evidence, verdict), not its content. The map costs seconds to build and saves minutes hunting through the passage during questions.`
    },
    {
      id: 'cs2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Active Reading** 🎯`,
      exercise: {
        questions: [
          {
            question: `While reading a CARS passage, you encounter the phrase "Although critics have argued otherwise." This signals:`,
            options: [`A contrast — the author is setting up their own opposing view`, `Agreement — the author is about to endorse the critics' position`, `A topic — the passage is mainly about literary criticism`, `A conclusion — the argument is about to wrap up`],
            correctAnswer: 0,
            explanation: `"Although" is a contrast word. The author is acknowledging an opposing view and will likely argue against it. Track these transitions — they reveal argument structure.`
          },
          {
            question: `What should a paragraph map record for each paragraph?`,
            options: [`A brief tag for the paragraph's role or main point and its location`, `Every fact and name in the paragraph, so nothing must be looked up later`, `The first sentence copied exactly, since it always states the main point`, `Nothing — building a map costs more time than it later saves`],
            correctAnswer: 0,
            explanation: `A paragraph map captures each paragraph's function (claim, evidence, counterargument, conclusion) and location so you can navigate quickly. Memorizing details defeats the purpose; you want to know WHERE information lives, not reproduce it.`
          },
          {
            question: `In a passage that introduces a common view, then pivots with "However" to the author's response, where is the author's actual position most likely found?`,
            options: [`After the pivot, in the response to the common view`, `Only in the passage's title or heading`, `In the common view presented before the pivot`, `In the quotations the author cites from other writers`],
            correctAnswer: 0,
            explanation: `Authors frequently set up a prevailing or opposing view first, then pivot ("however," "yet," "but") to their own stance. The position after the main pivot is typically the author's real argument, so the hinge word marks where to focus.`
          },
          {
            question: `Which is a reliable warning sign that you are reading passively?`,
            options: [`At the end, you cannot state the author's main point or attitude`, `You finish each paragraph able to summarize its role in one phrase`, `You notice and mentally tag every "however," "yet," and "but"`, `You can locate where a detail appears without rereading everything`],
            correctAnswer: 0,
            explanation: `Reaching the end with no grasp of the main point or tone means comprehension did not happen — the classic symptom of passive reading. The other options describe active-reading successes: summarizing roles, tracking transitions, and knowing where information sits.`
          },
          {
            question: `When you finish a passage, the most useful thing to have firmly in mind is the Author's Main Idea (AMI), which includes:`,
            options: [`The central argument and whether the author is for or against it`, `The exact wording of every statistic the author cites`, `A list of the passage's proper nouns in the order they appear`, `Your own opinion on the topic and how it compares with the author's`],
            correctAnswer: 0,
            explanation: `The AMI is the author's central claim plus their stance toward it (supportive, critical, neutral). This anchor drives main-idea, inference, and tone questions. Memorized statistics, name lists, or your own opinion are not what the AMI captures.`
          },
          {
            question: `Tracking transition words such as "however," "in contrast," and "consequently" while reading primarily helps you:`,
            options: [`Follow how the argument shifts, concedes, and draws conclusions`, `Memorize the passage faster by anchoring its sentences to key words`, `Identify the passage's subject area and the discipline it comes from`, `Decide within the first paragraph whether to skip the passage`],
            correctAnswer: 0,
            explanation: `Transition words are signposts for argument structure: contrast words mark shifts or concessions, and result words mark conclusions. Mapping them lets you reconstruct how the author's reasoning moves, which underlies nearly every question type.`
          }
        ]
      }
    },
    {
      id: 'cs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Read ACTIVELY: track main ideas, author's tone, and transitions
- Build a paragraph map: tag each paragraph's role and location
- The author's real position usually follows the main pivot ("however")
- Know WHERE information is, not every detail
- After the passage: state the Author's Main Idea (claim + stance)`
    }
  ]
};
