export const lessonData = {
  topicSlug: 'sat-vocabulary-context-advanced',
  sections: [
    {
      id: 'advvc1-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context: The 700-800 Patterns

**Part 1 of 3 — The Four Archetypes Hard Items Are Built From**

At this level, every wrong answer is *plausible*. The test no longer includes words that are simply the wrong register or obviously off-topic. Instead, hard items are engineered from four repeatable patterns — and each pattern tells you exactly where the answer is hiding.

### Archetype 1: The Colon-Defined Blank
The sentence defines the blank **after** it appears — usually with a colon, dash, or appositive: *"The claim is ______: it is offered as a hypothesis, not a settled result."* The definition is a contract. Test every candidate against the definition **word for word**, not against your overall impression. The trap choice is a near-synonym that matches the vibe but violates one clause of the definition (e.g., *imprecise* when the passage stipulates the number was "accurately derived" — the flaw is in what it *reveals*, so the answer is *uninformative*).

### Archetype 2: The "Rather Than" Scaffold
*"...served to ______ the initial enthusiasm rather than to overturn it."* The blank is defined by what it is **not**. The answer must be the mid-strength move: reduce without eliminating (*temper*), add exceptions without refuting (*complicate*), attach conditions without withdrawing (*qualify*). Both extremes appear as choices — the too-strong word contradicts "rather than overturn," and the too-positive word ignores the shift the passage describes.

### Archetype 3: Secondary Meanings and Collocation Traps
The blank takes a preposition ("______ on," "______ with," "______ of"), and several choices are *idiomatic* with that preposition. Idiomatic is not the test. The test is the **relation**: does the passage describe dependence (*contingent on*), compatibility (*consistent with*), or indication (*characteristic of*)? Separately: common words show up in their secondary senses (*appreciate* = detect, *warrant* = justify). Never eliminate a word on its everyday meaning until you've tested its technical one.

### Archetype 4: The Negated Blank
*"The text is not ______ in the way a riddle is..."* The blank names the quality the author is **rejecting**. The deadliest distractor is the word that accurately describes the passage's subject — precisely because it's true, it cannot fill a blank the sentence negates.`
    },
    {
      id: 'advvc1-q1',
      type: 'quiz' as const,
      question: `The union's history of the strike has been checked against newspapers, court records, and company files, and no reviewer has caught it in an error of fact. The complaint that survives is different in kind. Members who lived through the strike appear only when arrested or quoted at rallies; the daily work of keeping four thousand households fed for a winter goes unmentioned. The history is not inaccurate. It is ______: every event it records occurred, and the events a reader most needs in order to understand the strike are the ones it leaves out.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'obsolete',
        'disorganized',
        'incomplete',
        'biased'
      ],
      correctAnswer: 2,
      explanation: `Colon-defined blank: the definition is "every event it records occurred" (so nothing present is wrong) plus "the events a reader most needs... are the ones it leaves out" (the defect is omission). That is "incomplete." "Biased" is the strong trap — the omissions do have a slant, but bias implies distortion of what is said, and the passage has just certified everything said as accurate; the sentence also explicitly frames the flaw as leaving out, not tilting. "Obsolete" would require the history to be superseded or out of date, which nothing supports. "Disorganized" is about arrangement, and the passage never discusses order.`
    },
    {
      id: 'advvc1-q2',
      type: 'quiz' as const,
      question: `The original 2009 paper reported that the training effect transferred to untrained tasks of every kind. Fifteen years of replication have not been kind to the adverb. The effect itself appears in study after study, robustly, but only on tasks that share a response format with the training — a boundary the original authors did not test. The replications have served to ______ the original claim rather than to demolish it, and the current literature reads less like a retraction than like a map of where the effect stops.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'circumscribe',
        'corroborate',
        'refute',
        'anticipate'
      ],
      correctAnswer: 0,
      explanation: `"Rather than" scaffold: the blank must be the mid-strength move between confirming and demolishing. The passage supplies both halves — the effect "appears in study after study, robustly" (so not refuted) "but only on tasks that share a response format" (so not confirmed as stated). "Circumscribe" — to draw a boundary around — matches "a map of where the effect stops" exactly. "Corroborate" is the trap for readers who anchor on "robustly": a replication that narrows "every kind" to one format has not confirmed the claim as made. "Refute" is excluded twice, by "rather than to demolish" and "less like a retraction." "Anticipate" (to arrive at an idea early) describes no relationship a replication can have to a paper that preceded it.`
    },
    {
      id: 'advvc1-q3',
      type: 'quiz' as const,
      question: `The mussel's spread through the canal system was attributed for years to warming water, and the correlation looked clean: colonized reaches were, on average, warmer. Transplant experiments have now shown that larvae mature normally in the coldest reaches of the system. Meanwhile a plot of colonization dates against commercial traffic shows new populations appearing in the exact order that ports reopened to barge traffic after dredging. The species' distribution appears ______ to temperature and governed instead by where ballast water is discharged.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'attributable',
        'hostile',
        'essential',
        'indifferent'
      ],
      correctAnswer: 3,
      explanation: `Collocation trap: three of the four choices are idiomatic with "to," so idiom eliminates almost nothing — the relation decides. The experiments show temperature does not constrain the mussel ("larvae mature normally in the coldest reaches"), so the distribution ignores temperature: "indifferent to." "Attributable to" states the rejected explanation — it's the residue of the first sentence, and the sentence's own structure ("and governed instead by...") requires the blank to deny temperature's role, not assert it. "Essential to" reverses the direction of dependence (the distribution isn't necessary for temperature). "Hostile to" ascribes an attitude and would wrongly claim cold harms the species, which the transplant experiments refute.`
    }
  ]
}
