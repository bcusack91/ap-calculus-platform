export const lessonData = {
  topicSlug: 'sat-transitions-organization-advanced',
  sections: [
    {
      id: 'trans-adv-p1-intro',
      type: 'text' as const,
      content: `# Transitions: The 700-800 Patterns

**Part 1 of 3 — What the Hardest Items Actually Test**

Easy transition items ask you to tell contrast from cause. Hard-tier items make you distinguish **between two transitions in the same family** — or recognize a rarer logical move that generic 'however/therefore' thinking cannot handle. The passage is always three sentences; the entire answer lives in the **exact relationship between sentence 2 and sentence 3**.

### Archetype 1: Concede, Then Push Back
Sentence 2 grants a point ('and that estimate is accurate'); sentence 3 limits its force. The move is *Nevertheless / Even so / Still* — acknowledged obstacle, claim survives anyway. The killer distinction: **Consequently** claims the obstacle *caused* the outcome, reversing the logic. Nineteen seasons of slow excavation did not *produce* thorough documentation — the documentation exists *despite* the constraint.

### Archetype 2: Same Direction, Higher Intensity
Sentence 3 pushes sentence 2's point further: *Indeed, In fact, Sure enough*. Fine distinctions inside the family: **Indeed** escalates a claim already accepted; **In fact** corrects or outdoes an expectation just raised ('might seem impossible... In fact, detailed accounts survive'); **Sure enough** confirms a stated prediction. If both facts point the same way, every contrast word is dead — no matter how tempting 'however' feels after a surprise.

### Archetype 3: The Rarer Moves
The 700-800 tier loves transitions most students never practice:
- **Rather** — a denial, then the substituted explanation ('Their reasoning was not sentimental. Rather, they calculated...')
- **After all** — a justification for the claim just made
- **At best** — the ceiling on a claim given damaging evidence
- **If so** — an inference conditional on the previous claim being true
- **In such cases** — what happens under the specific condition just named

### Archetype 4: Structural Signals
Some items are organized by the paragraph's skeleton, not sentence-pair logic: a timeline (1908 → 1980s → **Today**), a two-system tour (*By contrast* at the pivot), or a narrated sequence of attempts ending in **Ultimately**. Ask what the paragraph is *doing* before you ask what the sentence *says*.`
    },
    {
      id: 'trans-adv-p1-q1',
      type: 'quiz' as const,
      question: `Skeptics note that the trial enrolled only ninety patients, and small samples do warrant caution. ______ the effect size was large enough that the result would remain statistically significant even if a third of the responders were excluded.

Which choice completes the text with the most logical transition?`,
      options: [
        `Consequently,`,
        `Nevertheless,`,
        `For example,`,
        `In other words,`
      ],
      correctAnswer: 1,
      explanation: `The writer concedes the skeptics' point — the sample really is small — and then limits its force: the result stands anyway. That concede-then-counter move is exactly 'Nevertheless.' 'Consequently' would claim the robust result follows from the small sample, reversing the logic. 'For example' would make the effect size an instance of small samples warranting caution, which it is not. 'In other words' would mark a restatement, but the third sentence adds new evidence rather than rephrasing the concession.`
    },
    {
      id: 'trans-adv-p1-q2',
      type: 'quiz' as const,
      question: `Planners expected the protected bike lane to draw riders away from the parallel avenue. Counts on the avenue fell by half within a month. ______ total bicycle traffic across both streets rose, suggesting the lane was creating new riders rather than merely rerouting old ones.

Which choice completes the text with the most logical transition?`,
      options: [
        `Indeed,`,
        `However,`,
        `Otherwise,`,
        `By contrast,`
      ],
      correctAnswer: 0,
      explanation: `The third sentence pushes the second's point further in the same direction: not only did riders shift as predicted, the lane outperformed the prediction by growing total ridership. 'Indeed' marks that escalation of an established point. 'However' and 'By contrast' both signal reversal, but nothing is reversed — both data points show the lane succeeding; the surface surprise of 'rose' after 'fell' is the trap. 'Otherwise' introduces what would happen if the previous condition failed to hold, a relationship absent here.`
    },
    {
      id: 'trans-adv-p1-q3',
      type: 'quiz' as const,
      question: `The dye used to trace the groundwater is visible under ultraviolet light at concentrations of a few parts per billion. Only a trace of it therefore needs to be injected at the sinkhole. ______ the test can be run without any measurable effect on the spring's chemistry.

Which choice completes the text with the most logical transition?`,
      options: [
        `Even so,`,
        `In particular,`,
        `As a result,`,
        `Meanwhile,`
      ],
      correctAnswer: 2,
      explanation: `The third sentence states the consequence of the tiny injection the second sentence establishes: because so little dye is needed, the spring's chemistry is unaffected. That cause-and-effect link is 'As a result.' 'Even so' would concede the small dose and then report a problem despite it, but the sentence reports a benefit because of it. 'In particular' would narrow the previous claim to a specific case rather than draw its consequence. 'Meanwhile' asserts mere simultaneity, erasing the causal chain the passage is built on.`
    }
  ]
}
