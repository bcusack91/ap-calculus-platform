export const lessonData = {
  topicSlug: 'sat-central-ideas-details-advanced',
  sections: [
    {
      id: 'advci2-intro',
      type: 'text' as const,
      content: `# Central Ideas & Details: Traps & Speed

**Part 2 of 3 — The Distractor Taxonomy**

Hard main-idea items reuse the same five wrong-answer species. Learn to name them and elimination becomes mechanical.

### The five distractor species
1. **The Half-Keeper** — states the concession or the limit, never both. Often quotes the passage's own first sentence back at you. It's the appearance the passage exists to complicate.
2. **The Hedge-Inflator** — turns "may," "suggests," or "in most cases" into "proves," "never," "no effect." Also inflates in reverse: a passage that *questions* a claim gets an answer that *denies* it.
3. **The Prescriber** — converts description into advice: "should stop funding," "should be adopted everywhere." Hard passages diagnose; they almost never prescribe. If the passage contains no "should," the answer can't either.
4. **The True-But-Not-It** — a statement the passage genuinely supports, drawn from a supporting detail, background fact, or mechanism. Truth is not the test; *aboutness* is. Ask: "is this what the passage was built to establish, or something it used along the way?"
5. **The Motive-Inventor** (literary and historical passages) — assigns intent, blame, or emotion the text never states: evasion, resentment, fraud, deliberate avoidance. The passage always plants one explicit phrase that kills it.

### Speed protocol (target: 75 seconds)
- Read the **last sentence first** when the question is "main idea" — hard passages almost always land the thesis there, hedges intact.
- Then read the whole passage to verify, watching for the pivot word (but, however, yet, though).
- Eliminate by species, not by re-reading: label each choice Half-Keeper / Inflator / Prescriber / True-But-Not-It / Motive-Inventor. Any label you can attach is a kill.
- The surviving choice usually sounds *less* impressive than the distractors — correct answers at this level are precise, hedged, and a little boring.`
    },
    {
      id: 'advci2-q1',
      type: 'quiz' as const,
      question: `A passage concedes that a mentoring program "may well have helped some participants" but argues that, because participants volunteered, its evaluation cannot separate the program's effect from the motivation of those who signed up. Which answer choice should a trained test-taker eliminate on sight, and why?`,
      options: [
        '"The evaluation cannot isolate the program\'s effect" — because it merely repeats a claim the passage already makes itself',
        '"Participants volunteered for the mentoring program" — because volunteering plays no real role in the author\'s argument',
        '"The program did not help its participants" — because it turns the author\'s hedged concession into a flat denial',
        '"The evaluation\'s design has a limitation" — because a concession this cautious is too limited to serve as a main idea'
      ],
      correctAnswer: 2,
      explanation: `"Did not help" is the Hedge-Inflator in its reverse form: the author explicitly holds the door open ("may well have helped") and attacks only the evaluation's ability to *show* the effect. Denying the effect claims more than the author does, in the opposite direction — the most common wrong answer on selection-bias passages. The "merely repeats the passage" choice describes the correct answer's core, not a trap; restating the passage's actual claim is what right answers do. The "volunteering is irrelevant" choice is wrong about the passage: volunteering is the entire mechanism of the argument. The "too cautious" choice mistakes the signature of a hard-tier correct answer — cautious, limited — for a flaw.`
    },
    {
      id: 'advci2-q2',
      type: 'quiz' as const,
      question: `On hard main-idea items, a choice can be fully supported by the passage — every word verifiable — and still be wrong. What makes such a choice wrong?`,
      options: [
        'Main-idea questions ask what the passage is built to establish, and a detail used only as evidence does not answer that',
        'Verifiable choices are decoys, since a correct main-idea answer always requires an inference beyond the text',
        'A choice that restates the passage word for word is usually too long and too detailed to capture its central claim',
        'The passage supports such a choice only in its first half, before the pivot that introduces the author\'s actual claim'
      ],
      correctAnswer: 0,
      explanation: `This is the True-But-Not-It species. Hard passages contain several true statements — the mechanism ("pavement releases stored heat slowly"), the background fact, the concession — and any of them can be dressed as a choice. The test is aboutness: the main idea is the claim the whole passage is organized to deliver, usually the two-part turn in the final sentence. The decoy choice overcorrects into a myth — correct main-idea answers are supported, not inferred beyond the text; what distinguishes them is scope, not extra inference. The too-long choice is a folk heuristic with no reliability: length says nothing about scope, and a correct two-part answer and a narrow detail can run the same length. The before-the-pivot choice describes the Half-Keeper, a different species: this question is about choices supported by the *whole* passage that still miss its point.`
    },
    {
      id: 'advci2-q3',
      type: 'quiz' as const,
      question: `The following is adapted from a short story.

"After the sale of the house went through, Tomás drove past it exactly once. He slowed at the corner, saw that the new owners had already taken down the fence he had spent a whole summer building, and found, to his surprise, that what he felt was lighter than anything he had braced himself for."

A test-taker answers that the text suggests Tomás regrets selling the house. Which detail most directly defeats that answer?`,
      options: [
        'The detail that he drove past "exactly once," which suggests he could not bear to see the house again',
        'The detail that he "slowed at the corner," which shows he was still attached to the property',
        'The detail that the owners "had already taken down the fence," which shows his work was erased',
        'The detail that he felt "lighter than anything he had braced himself for," which reads as relief'
      ],
      correctAnswer: 3,
      explanation: `Motive-Inventor autopsy: "regret" is the plausible imported emotion — a sold house, a demolished summer's work — and the passage supplies the fence detail precisely to make it tempting. But literary hard-tier passages always plant one explicit phrase that settles the feeling, and here it is the final clause: he expected weight and felt lightness, and "to his surprise" confirms the expectation-reality gap. The drove-past-once and slowed-at-the-corner choices point to behaviors compatible with either reading, and their glosses lean toward regret rather than against it (a regretful man and a curious one both drive past once and slow down), so neither can defeat anything. The taken-down-fence choice is the bait detail itself — it's what makes regret tempting, not what disproves it. The discipline: never answer a "most strongly suggests" question from setup details when the passage states the character's inner state.`
    }
  ]
}
