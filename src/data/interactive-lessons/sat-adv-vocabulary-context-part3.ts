export const lessonData = {
  topicSlug: 'sat-vocabulary-context-advanced',
  sections: [
    {
      id: 'advvc3-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context: Timed Drill

**Part 3 of 3 — Four Items at Full Difficulty**

Pacing target: **60 seconds per question.** These four items use the archetypes from Parts 1 and 2 at real hard-tier difficulty. For each one, run the protocol before touching the choices:

1. **Find the structural signal** — colon/appositive definition, "rather than" contrast, negation, or a preposition-bound relation.
2. **Predict a phrase** ("holds back on purpose," "makes it official," "depends on").
3. **Kill each wrong choice with a quoted phrase.** If your elimination is "doesn't sound right," it isn't an elimination.

If an item takes more than 90 seconds, pick from your surviving choices and move on — on test day, the next question pays better than the fourth re-read.`
    },
    {
      id: 'advvc3-q1',
      type: 'quiz' as const,
      question: `The translator's preface disclaims any ambition to improve the original, and the finished translation bears the disclaimer out: where the source text repeats itself, the English repeats itself; where the syntax knots, the English knots. Reviewers who know her earlier, freer work agree that fidelity of this kind is not timidity. It is a form of ______, since the translator plainly possessed the skill to smooth what she chose instead to preserve.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'restraint',
        'negligence',
        'imitation',
        'vanity'
      ],
      correctAnswer: 0,
      explanation: `The final clause defines the blank: she had "the skill to smooth what she chose instead to preserve" — ability deliberately withheld, which is "restraint." "Imitation" is the near-miss: it correctly names the activity (reproducing the source's features) but not the quality the sentence is defining, which is the *self-denial* involved — the sentence is explaining what the fidelity reveals about the translator, not what fidelity is. "Negligence" is killed by three signals: the disclaimed ambition (a stated plan), "chose," and "not timidity" — the passage insists the roughness is deliberate. "Vanity" points backward: a translator showing off would smooth and embellish, exactly what she declined to do.`
    },
    {
      id: 'advvc3-q2',
      type: 'quiz' as const,
      question: `The letters establish that each chemist read the other's publications closely, that they met twice at conferences, and that both were working on the same class of compounds in the same three years. What the letters do not contain is any exchange of data, drafts, or plans. Historians hoping to credit the discovery jointly must therefore be careful about what the archive licenses: the correspondence ______ a collaboration without documenting one.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'rules out',
        'commemorates',
        'permits',
        'confirms'
      ],
      correctAnswer: 2,
      explanation: `The scaffold is "______ a collaboration without documenting one" — the blank must be weaker than "documents" but still leave collaboration open. Evidence that is compatible with a hypothesis without establishing it "permits" it. "Confirms" collapses the sentence's contrast: to confirm just is to document, so "confirms without documenting" is self-contradictory. "Rules out" reverses the passage — mutual reading, meetings, and shared timing keep collaboration live rather than excluding it (and "hoping to credit the discovery jointly" would be senseless if the archive ruled it out). "Commemorates" would require the letters to look back on a known collaboration, but whether one occurred is exactly what the archive leaves undetermined.`
    },
    {
      id: 'advvc3-q3',
      type: 'quiz' as const,
      question: `The marginal corrections in the manuscript are not ______ in the way a copyeditor's are, imposing one standard from the first page to the last; they answer each passage on its own terms, sometimes reversing on one page a change made on the page before. Whoever made them was reading, not regularizing.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'responsive',
        'systematic',
        'legible',
        'frequent'
      ],
      correctAnswer: 1,
      explanation: `Negated blank: the sentence denies the blank and then describes what the corrections actually are. The rejected quality is defined in apposition — "imposing one standard from the first page to the last" — which is "systematic." "Responsive" is the classic negated-blank trap: it accurately describes these corrections ("answer each passage on its own terms"), and that is precisely why it cannot fill a blank the sentence negates — you'd be making the author deny the very quality the passage affirms. "Legible" and "frequent" fail the appositive test: neither means "imposing one standard," so neither can be the quality the copyeditor comparison defines.`
    },
    {
      id: 'advvc3-q4',
      type: 'quiz' as const,
      question: `Whether the treaty produced the peace or merely ______ it is the question that divides the two schools. The fighting had slackened for more than a year before the delegations met; demobilization was already underway in three provinces; and the treaty's terms track, clause by clause, arrangements the local commanders had improvised on their own. On one reading, the diplomats ended a war. On the other, they signed its death certificate.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'prevented',
        'prolonged',
        'enforced',
        'ratified'
      ],
      correctAnswer: 3,
      explanation: `The scaffold opposes "produced" to the blank, and the final metaphor defines the alternative: signing a death certificate records a death that already happened. To formally confirm an existing state of affairs is to "ratify" it — the peace was already in place ("slackened for more than a year," terms that "track... arrangements the local commanders had improvised"). "Enforced" is the near-miss: enforcement makes the peace hold going forward, which quietly gives the treaty the causal power the second school denies — the whole point of the contrast. "Prolonged" would require the treaty to extend the peace, again a causal claim, and one no school is described as making about a mere signature. "Prevented" reverses the object: nobody claims the treaty prevented the peace.`
    }
  ]
}
