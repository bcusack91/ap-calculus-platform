export const lessonData = {
  topicSlug: 'sat-transitions-organization-advanced',
  sections: [
    {
      id: 'trans-adv-p2-traps',
      type: 'text' as const,
      content: `# Transitions: Traps & Speed

**Part 2 of 3 — How the Wrong Answers Are Built**

At this level the wrong answers are not opposites of the right one — they are **near misses engineered around a predictable misreading**. Learn the four traps.

### Trap 1: The Skim Trap (*Furthermore* where *However* belongs)
Sentence 3 draws another fact **from the same source** as sentence 2 ('the same filings show...', 'the same study projects...'). A skimming reader sees "another fact" and reaches for an additive. But the new fact **cuts against** the party sentence 2 described. Technique: don't classify the fact's origin; classify its **direction** — for whom does this fact score?

### Trap 2: The Reversed Arrow (*Consequently* where *Even so* belongs, and vice versa)
Both transitions connect an obstacle to an outcome; they differ only in the arrow's direction. Ask: did the first fact *produce* the second (→ result word), or did the second happen *despite* the first (→ concession word)? Hard passages choose obstacle-outcome pairs where either reading feels momentarily plausible.

### Trap 3: The Fake Parallel (*Similarly / Likewise* where *By contrast* belongs)
Two parties do the same **kind** of thing — two groups both 'reasoning,' two systems both 'delivering water' — but from opposite bases or with opposite effects. The shared verb makes 'Likewise' glitter. Technique: compare the two at the level the paragraph cares about. If the point is the difference, the surface similarity is bait.

### Trap 4: The Denial Setup (*Rather*)
When sentence 2 is a **negation** ('Their reasoning was not sentimental,' 'This was not a stunt'), sentence 3 almost always supplies the substituted explanation, and the answer is 'Rather' or 'Instead.' The trap options treat the denial as an obstacle ('Nevertheless') or a cause ('Consequently'). A denial is neither — it clears the ground for a replacement.

**Elimination order for speed:** (1) direction — same way or against? This kills half the options. (2) Arrow — cause, concession, or neither? (3) Only then weigh the fine distinctions inside the surviving family.`
    },
    {
      id: 'trans-adv-p2-q1',
      type: 'quiz' as const,
      question: `The orchestra's decision to perform the symphony without a conductor was not a publicity stunt. ______ it revived a practice the composer himself had insisted on for the work's premiere.

Which choice completes the text with the most logical transition?`,
      options: [
        `Similarly,`,
        `Consequently,`,
        `Nevertheless,`,
        `Rather,`
      ],
      correctAnswer: 3,
      explanation: `The first sentence denies one explanation (a stunt), and the second supplies the real one in its place — the signature setup for 'Rather,' which marks a substituted explanation after a negation. 'Nevertheless' treats the denial as an obstacle the second sentence must overcome, but nothing is being overcome. 'Consequently' would make the historical revival a result of the decision's not being a stunt, which is incoherent. 'Similarly' requires a parallel case, and the second sentence replaces rather than parallels.`
    },
    {
      id: 'trans-adv-p2-q2',
      type: 'quiz' as const,
      question: `The startup's filings emphasize that revenue doubled last year, and investors repeat the figure approvingly. ______ the same filings show that the cost of acquiring each new customer tripled over the identical period.

Which choice completes the text with the most logical transition?`,
      options: [
        `Furthermore,`,
        `However,`,
        `Therefore,`,
        `In other words,`
      ],
      correctAnswer: 1,
      explanation: `The third sentence undercuts the rosy picture by naming what the celebrated filings also contain, so a contrastive transition is required. 'Furthermore' is the skim trap: it correctly registers 'another fact from the same filings' but misses that this fact scores against the company rather than for it — classify the fact's direction, not its source. 'Therefore' would make the tripled costs a consequence of investors repeating the revenue figure. 'In other words' would claim the cost figure restates the revenue figure, but it is new and opposing information.`
    },
    {
      id: 'trans-adv-p2-q3',
      type: 'quiz' as const,
      question: `Court records suggest that women in the medieval town routinely managed commercial property. ______ a 1327 dispute lists a widow named Aldith as the sole lessor of four riverfront warehouses.

Which choice completes the text with the most logical transition?`,
      options: [
        `In contrast,`,
        `Nevertheless,`,
        `For example,`,
        `As a result,`
      ],
      correctAnswer: 2,
      explanation: `The first sentence makes a general claim about women in the town; the second offers one named case that illustrates it, so an exemplifying transition is required. 'In contrast' and 'Nevertheless' both signal that Aldith's case runs against the general claim, when it is the evidence for it. 'As a result' would make the 1327 dispute a consequence of the historians' claim — but a document from 1327 cannot result from a modern generalization; it supports it.`
    }
  ]
}
