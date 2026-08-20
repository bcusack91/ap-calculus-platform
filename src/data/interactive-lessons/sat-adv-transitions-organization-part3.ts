export const lessonData = {
  topicSlug: 'sat-transitions-organization-advanced',
  sections: [
    {
      id: 'trans-adv-p3-drill-intro',
      type: 'text' as const,
      content: `# Transitions: Timed Drill

**Part 3 of 3 — Full Difficulty, Test Pace**

Four questions at genuine 700-800 difficulty. Target **45-60 seconds each**.

The two-pass method under time pressure:
1. **Read the two sentences flanking the blank and state their relationship in your own words BEFORE looking at the options.** One clause each: "grants the point, then pushes back," "backs up the claim just made," "names what follows under that condition."
2. **Match your phrase to a transition — then test the winner by reading the sentence with it inserted.** If you go option-first, the near-miss families (Indeed/In fact, Nevertheless/However/Even so, Thus/As a result) will read interchangeably.

Start the clock.`
    },
    {
      id: 'trans-adv-p3-q1',
      type: 'quiz' as const,
      question: `Critics who call the restoration too speculative underestimate how much evidence survives. ______ the workshop's own contracts specify the pigments, the gilding, and even the number of apprentice-hours each panel was to receive.

Which choice completes the text with the most logical transition?`,
      options: [
        `After all,`,
        `Even so,`,
        `By contrast,`,
        `In turn,`
      ],
      correctAnswer: 0,
      explanation: `The second sentence supplies the reason to accept the claim just made — the critics underestimate the evidence *because* the contracts are this detailed. 'After all' is the transition that introduces a supporting justification for a preceding assertion. 'Even so' would concede the contracts and then defeat an expectation, but the contracts are the writer's own ammunition. 'By contrast' needs two compared items, and none are offered. 'In turn' asserts a sequence of reciprocal effects the passage does not describe.`
    },
    {
      id: 'trans-adv-p3-q2',
      type: 'quiz' as const,
      question: `The observatory sits beside a growing city whose nights brighten each decade, and its spectrograph was designed a generation ago. ______ the instrument continues to produce measurements of stellar composition that newer facilities cite as benchmarks.

Which choice completes the text with the most logical transition?`,
      options: [
        `Accordingly,`,
        `For instance,`,
        `In other words,`,
        `Even so,`
      ],
      correctAnswer: 3,
      explanation: `The first sentence stacks two handicaps — light pollution and aging equipment — that would ordinarily predict declining output; the second reports benchmark-quality results anyway. 'Even so' marks precisely that defeated expectation. 'Accordingly' is the reversed arrow: it claims the handicaps produced the excellent measurements. 'For instance' would make the benchmark citations an example of the handicaps. 'In other words' would mark a restatement, but the instrument's success is new information running against what preceded it.`
    },
    {
      id: 'trans-adv-p3-q3',
      type: 'quiz' as const,
      question: `The moth flies only after midnight, and the orchid it pollinates releases scent only in the hours before dawn. The two schedules overlap for less than ninety minutes. ______ the plant's entire reproductive chance each night is compressed into a window shorter than a feature film.

Which choice completes the text with the most logical transition?`,
      options: [
        `Nevertheless,`,
        `Thus,`,
        `For example,`,
        `On the other hand,`
      ],
      correctAnswer: 1,
      explanation: `The third sentence draws the conclusion that follows from combining the two schedules described before it: a ninety-minute overlap means a ninety-minute reproductive window. That synthesis calls for the conclusion-marker 'Thus.' 'Nevertheless' would claim the narrow window exists despite the overlap, when it is the overlap restated as a consequence. 'For example' would need the third sentence to be one instance of a generalization, but it is an inference. 'On the other hand' signals opposition, and nothing here opposes.`
    },
    {
      id: 'trans-adv-p3-q4',
      type: 'quiz' as const,
      question: `Ring counting can date a timber to the exact year only when the bark edge survives, because the outermost ring marks the season the tree was felled. Sawmills, however, usually trimmed that edge away. ______ dendrochronologists can offer only a range of dates whose precision depends on how many outer rings were lost.

Which choice completes the text with the most logical transition?`,
      options: [
        `In addition,`,
        `By contrast,`,
        `In such cases,`,
        `For example,`
      ],
      correctAnswer: 2,
      explanation: `The third sentence describes what dendrochronologists do under the specific condition the second names — when the bark edge has been trimmed away — so the transition must mark that conditional trigger: 'In such cases.' 'In addition' would present the date range as a routine further step rather than a fallback forced by a specific failure. 'By contrast' would set the two dating outcomes against each other as rivals without capturing that one applies only when the other is impossible. 'For example' would make the range-giving an instance of sawmill trimming, which it is not.`
    }
  ]
}
