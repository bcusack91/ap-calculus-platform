export const lessonData = {
  topicSlug: 'sat-effective-language-use-advanced',
  sections: [
    {
      id: 'elu-adv-p2-traps',
      type: 'text' as const,
      content: `# Effective Language Use: Traps & Speed

**Part 2 of 3 — The Four Distractor Species**

Since every option is true, elimination runs on goal-fit alone. The test builds its wrong answers from exactly four molds — name the mold, and the option dies in seconds.

### Species 1: True-but-Off-Goal
The most common distractor states a **different** relationship than the goal names: the shared trait when the goal wants a contrast, the cause when the goal wants the change itself, the setup when the goal wants the result. It usually reads as the most "informative" option. Kill it by matching its relationship word-for-word against the goal's.

### Species 2: The Half-Sentence
For any two-halves goal (difference, change, trade-off, tension), a distractor delivers **one half at full volume** — the most dramatic single figure in the notes. Emphasis is not comparison. If the goal names two poles and the option contains one, eliminate without rereading.

### Species 3: The Impressive Wrong-Sider
When the goal says *emphasize the advantage of X* (or *the cost*, not the benefit), one distractor gives a vivid, number-heavy fact that actually scores for the **other side** — a big cost figure for X, a big advantage for Y. Big numbers read as emphatic; check whose case the number supports before admiring it. A cousin: the **balanced** option that grants both sides equal billing when the goal asked you to weight one.

### Species 4: The Familiarity Mismatch
Background definitions offered to an expert audience; insider results offered to novices; a study's scope ('analyzed 1,100 hours of recordings') offered where the goal demands its **finding**. Scope is not a finding; a method is not a result.

**Speed protocol:** read the goal FIRST, before the notes. Convert it into a checklist ('needs both dates + both counts'). Then scan options against the checklist — most hard synthesis items resolve without carefully reading the notes at all.`
    },
    {
      id: 'elu-adv-p2-q1',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Radio interferometers combine signals from many small dishes to mimic one giant dish.
- Each dish added to the array sharpens its angular resolution.
- Each added dish also increases the computing load required to correlate the signals.
- The correlator at one such observatory already consumes half the operating budget.

The student wants to emphasize the trade-off involved in adding dishes to an interferometer. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Radio interferometers combine the signals from many small dishes so that the array behaves like one giant dish.`,
        `Each dish added to an interferometer sharpens its angular resolution but also swells the computing load required to correlate the signals.`,
        `The correlator that combines one observatory's signals already consumes half of its operating budget.`,
        `Combining signals from many small dishes yields extremely fine angular resolution.`
      ],
      correctAnswer: 1,
      explanation: `A trade-off is an advantage set against its cost, and only the second option holds both in one sentence: sharper resolution bought with heavier computation. The fourth states the benefit alone and the third the cost alone — each is a half-sentence, and emphasis without the opposing pole is not a trade-off. The first explains how an interferometer works, accurate background that names neither a gain nor a price.`
    },
    {
      id: 'elu-adv-p2-q2',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Navigation apps show a hiker's live position on the trail.
- The apps depend on phone batteries, which drain quickly in cold weather.
- Paper maps require no power source.
- Paper maps cannot show a hiker's current position.
- Rangers recommend carrying both.

The student wants to emphasize the advantage navigation apps hold over paper maps. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Paper maps require no power source and keep working in cold that can drain a phone's battery within hours.`,
        `Rangers recommend that hikers carry both a navigation app and a paper map.`,
        `Unlike a paper map, a navigation app can show a hiker's live position on the trail.`,
        `Navigation apps depend on phone batteries, which cold weather drains quickly.`
      ],
      correctAnswer: 2,
      explanation: `Only one note gives apps an edge — live position — and the correct sentence pairs it against the paper map's inability to do the same. The first option is the impressive wrong-sider: vivid and concrete, but every word of it argues for paper maps, the opposite of the assigned goal. The last option states the apps' weakness, scoring against the side you were told to champion. The rangers' recommendation ranks neither tool, and a goal that says 'advantage over' requires a ranking.`
    },
    {
      id: 'elu-adv-p2-q3',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- A 2003 acoustic survey detected a whale species' call at 12 of 40 listening stations.
- A 2023 survey using the same 40 stations detected the call at 29.
- Shipping lanes in the region were shifted in 2008 to reduce ship strikes.
- The call carries roughly 30 kilometers in deep water.

The student wants to emphasize the change in detections between the two surveys. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Shipping lanes in the region were shifted in 2008 to protect the species from ship strikes.`,
        `A 2023 acoustic survey detected the whale's call at 29 of 40 listening stations.`,
        `The whale's call can carry roughly 30 kilometers in deep water.`,
        `The whale's call, detected at just 12 of 40 stations in 2003, was picked up at 29 of those same stations two decades later.`
      ],
      correctAnswer: 3,
      explanation: `A change between surveys requires both counts and both dates in one sentence, which only the last option supplies. The 29-of-40 option is the half-sentence trap — a strong figure with no baseline, so no change is visible. The shipping-lane option is true-but-off-goal: it offers a possible cause of the change rather than the change itself, a distinction the hard tier tests relentlessly. The call's 30-kilometer range is method-relevant background that measures nothing across time.`
    }
  ]
}
