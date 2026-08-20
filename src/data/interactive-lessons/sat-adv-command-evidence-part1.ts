export const lessonData = {
  topicSlug: 'sat-command-evidence-advanced',
  sections: [
    {
      id: 'advce1-intro',
      type: 'text' as const,
      content: `# Command of Evidence: The 700-800 Patterns

**Part 1 of 3 — Matching Evidence to the Exact Shape of the Claim**

Hard evidence items are not reading tests; they are **logic-matching** tests. The conclusion or claim has a precise logical shape, and exactly one choice has the same shape. Everything else is on-topic, accurate — and shaped wrong.

### Archetype 1: Two-Part Conclusions Need Two-Part Evidence (data tables)
"The change sped the step it targeted **without** improving outcomes." "Support is highest nearby, **but** most supporters live far away." Count the claims: if the conclusion compares, contrasts, or says "only," the evidence must contain **every** comparison in one choice. Distractors cite one true row — a single value can never show a decrease, a contrast, or an "only."

### Archetype 2: The Headline Number That Argues for the Other Side
When the student's conclusion is skeptical ("the data cannot show the program worked"), the most tempting distractor is the table's flashiest comparison — which supports the *opposite* conclusion. Before reading choices, ask: *which side is this student on?* Then reject anything a believer would cite.

### Archetype 3: The Quotation With the Right Topic and the Wrong Mechanism
Literary claims specify a mechanism: influence exercised *through others*, adaptation *without confrontation*, grief conveyed *through record-keeping*. The trap quote shows the right phenomenon by the wrong route — she speaks *publicly herself*, he objects *to his face*. One word ("to his face," "at the podium") defeats it. Underline the claim's restrictive phrase and demand the quote satisfy it.

### Archetype 4: Discriminating Evidence Between Rival Hypotheses
When two explanations compete, supporting evidence must be something the favored hypothesis predicts **and the rival doesn't**. Findings consistent with both (the phenomenon exists; the correlate grew) discriminate nothing. The strongest form is the **dissociation**: the effect appears where only the favored cause is present, and fails to appear where only the rival cause is present.`
    },
    {
      id: 'advce1-q1',
      type: 'quiz' as const,
      question: `A student is examining whether a library's elimination of overdue fines brought back lapsed borrowers of all ages or mainly younger ones. She compiles circulation records.

Cardholders borrowing at least one item per month
Adults: before, 12,400; after, 12,900
Teens: before, 3,100; after, 6,800

The student concludes that the policy's effect was concentrated among teen borrowers.

Which choice most effectively uses data from the table to support the student's conclusion?`,
      options: [
        'Teen borrowers rose from 3,100 to 6,800 after fines were eliminated.',
        'Adult borrowers rose from 12,400 to 12,900 after fines were eliminated.',
        'Total monthly borrowers rose by roughly 4,200 after fines were eliminated.',
        'Teen borrowers more than doubled, from 3,100 to 6,800, while adult borrowers rose only about four percent, from 12,400 to 12,900.'
      ],
      correctAnswer: 3,
      explanation: `"Concentrated among teens" is a comparative claim — it requires the teen gain AND the adult near-flatness in the same choice, which only D supplies. Choice A is the classic one-row trap: a teen increase alone cannot show concentration, because adults might have doubled too — the choice is true, on-topic, and shaped wrong. Choice B cites the wrong group and, alone, would suggest the policy helped adults. Choice C reports the total, which is the one number that *cannot* localize an effect in either group; totals are how concentration hides.`
    },
    {
      id: 'advce1-q2',
      type: 'quiz' as const,
      question: `In the novel The Glass Orchard, the aging landowner Mireille insists throughout that she runs the estate exactly as her mother did. A student argues that the novel undercuts this self-description by showing Mireille making substantial changes while narrating them to herself as continuities.

Which quotation from The Glass Orchard most effectively illustrates the student's claim?`,
      options: [
        '"Her mother had kept the ledgers in French, and Mireille kept them in French still."',
        '"She sold the west orchard to pay for the new irrigation, and recorded in the ledger, as her mother would have recorded it, that the estate remained whole."',
        '"Mireille often said that the estate would outlast every fashion in farming."',
        '"Her neighbors had long since replaced their hedgerows with wire fencing."'
      ],
      correctAnswer: 1,
      explanation: `The claim has two required parts: a real change AND a self-narration of continuity. Choice B contains both in one sentence — selling the orchard for new irrigation is the substantial change, and recording "as her mother would have... that the estate remained whole" is the continuity story she tells herself. Choice A is the trap for readers matching topic instead of shape: it shows genuine continuity, which *supports* Mireille's self-description rather than undercutting it. Choice C restates her general attitude with no change and no narration of one. Choice D describes the neighbors — change happening around her, not by her — so neither part of the claim is present.`
    },
    {
      id: 'advce1-q3',
      type: 'quiz' as const,
      question: `Two explanations compete for the near-disappearance of a native bee from a region's meadows: drift of pesticides from adjacent farmland, or competition from an introduced bee that forages on the same flowers. A student wants a finding that supports the competition explanation specifically, not one that is merely consistent with it.

Which finding, if true, most directly supports the competition explanation?`,
      options: [
        'Native bee counts have declined at more than eighty percent of the monitored meadows.',
        'Pesticide residues measured at the meadows fall below the concentrations shown to harm bees in laboratory studies.',
        'The native bee remains abundant in meadows treated with the same pesticides but lying outside the introduced bee\'s range, and is scarce in untreated meadows the introduced bee has colonized.',
        'The introduced bee\'s population in the region has grown every year since its arrival.'
      ],
      correctAnswer: 2,
      explanation: `Choice C is the dissociation: pesticides without the competitor produce no decline, and the competitor without pesticides produces one. That pattern is predicted by the competition account and contradicts the pesticide account — it discriminates. Choice B is the sophisticated near-miss: it *weakens* the rival, but weakening one hypothesis is not positive evidence for the other (a third cause could be at work), and the student asked for support, not for absence of the alternative. Choice A documents the decline both explanations exist to explain. Choice D shows the proposed competitor thriving, which is consistent with competition but equally consistent with the introduced bee simply tolerating whatever else — including pesticides — killed the native.`
    }
  ]
}
