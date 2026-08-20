export const lessonData = {
  topicSlug: 'sat-reading-comprehension-advanced',
  sections: [
    {
      id: 'advrc1-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: The 700-800 Patterns

**Part 1 of 3 — Function, Cross-Text, and Structure at the Top of the Scale**

The hardest Reading & Writing passages don't test whether you understood the sentences. They test whether you tracked what each sentence was **doing** — and hard items cluster into three forms.

### Archetype 1: The Function Question (what is this sentence FOR?)
A short sentence — often three to six words ("The enjoyment is cheap." "The counting is preliminary.") — gets singled out. It is almost always one of:
- **The pivot** — it turns the passage from reporting a view to challenging it. Everything before it belongs to someone else's reading; everything after is the author's case.
- **The strategic concession** — it grants a point ("That classification may be defensible") so the objection that follows lands on a narrower, harder target. A concession is not a retraction: the criticism always arrives in the next sentence.
- **The stage-setter** — it establishes how firmly a view held ("for two centuries it was the only one") so the coming evidence has something to overturn.

The trap answers **reverse the target** (reading criticism of the commentators as criticism of their subject) or **mistake the concession for surrender**.

### Archetype 2: Cross-Text Response
Text 2 almost never denies Text 1's data. It accepts the numbers and attacks the **inference**: the measurement's boundary, the study's design, the confound, the missing population. Correct answers have the shape "accepts X while noting/asking Y." Distractors: outright denial (too strong), a specific rival cause Text 2 refuses to pick (too committed), a policy recommendation Text 2 never makes (too far).

### Archetype 3: Overall Structure
The answer is a **three-beat map** — goal, obstacles, compromise; explanation offered, evidence against, real division located. Distractors reorder the beats, promote a subordinate clause to a main beat, or impose an organizing principle (severity, chronology, advocacy) the passage doesn't use.

**Master move:** for any singled-out sentence, ask two questions — *whose side is it on?* and *what does the next sentence do with it?* The next sentence is the function's receipt.`
    },
    {
      id: 'advrc1-q1',
      type: 'quiz' as const,
      question: `The orchard survey's most-cited finding is that farms with hedgerows host twice the pollinator diversity of open farms. Less cited is the survey's own note on how farms entered the study: hedgerow farms volunteered, and volunteering farms scored high on every unrelated measure of habitat care that the surveyors recorded. The doubling may be real. What the survey's design cannot say is whose work it is — the hedgerows', or the kind of farmer who plants them.

Which choice best describes the function of the sentence "The doubling may be real" in the text as a whole?`,
      options: [
        'It retracts the finding described in the first sentence.',
        'It argues that hedgerows have no effect on pollinator diversity.',
        'It concedes the result so that the objection that follows falls on the study\'s design rather than on its data.',
        'It summarizes the survey\'s note about how farms entered the study.'
      ],
      correctAnswer: 2,
      explanation: `Strategic concession: by granting that the measured doubling may be genuine, the author narrows the coming objection to attribution — "whose work it is" — where it can't be answered by re-checking the data. The receipt is the next sentence, which attacks only "the survey's design." Choice A mistakes concession for retraction; "may be real" keeps the finding alive, which is the opposite of withdrawing it. Choice B overstates in the other direction — the passage questions whether the hedgerows *caused* the diversity, never whether they could. Choice D attaches the sentence to the wrong material: the volunteering note precedes it and is the objection's evidence, not what this sentence restates.`
    },
    {
      id: 'advrc1-q2',
      type: 'quiz' as const,
      question: `Text 1
Cities that adopted congestion pricing saw traffic delays inside the charged zone fall by roughly twenty percent within a year. The result shows that drivers respond to prices, and it recommends the policy to any city with a crowded core.

Text 2
Delay is measured where the charge applies and when it applies. In the priced cities, delivery firms moved routes to four in the morning, and ride-hail trips thinned inside the zone while lengthening along the ring roads that border it. The zone's clock improved. What the rest of the day, and the rest of the city, absorbed is the number the twenty percent does not contain.

Based on the texts, how would the author of Text 2 most likely respond to the evidence cited in Text 1?`,
      options: [
        'By accepting that delays fell inside the zone while asking how much traffic was displaced to other hours and other roads rather than eliminated.',
        'By denying that traffic delays fell inside the charged zone.',
        'By arguing that congestion pricing should be repealed in the cities that adopted it.',
        'By claiming that drivers do not respond to prices.'
      ],
      correctAnswer: 0,
      explanation: `Text 2 concedes the measured result in so many words ("The zone's clock improved") and objects to the measurement's boundary: the twenty percent excludes the 4 a.m. deliveries and the ring-road lengthening it may have created. That's the accept-the-data, question-the-boundary shape — choice A. Choice B is the reflex denial that hard cross-text items are built to punish; Text 2 never disputes the number. Choice D fails doubly: rerouted deliveries and thinned ride-hail trips *are* drivers responding to prices, so Text 2's own evidence assumes the responsiveness. Choice C converts a measurement critique into a policy verdict — Text 2 says the twenty percent doesn't contain the full answer, not that the answer is repeal.`
    },
    {
      id: 'advrc1-q3',
      type: 'quiz' as const,
      question: `Critics of the chess federation's new rating index observe that it weights recent games so heavily that a player's rating can fall after a victory, if the victory was narrow and the opponent weak. The objection is arithmetically correct. It also mistakes what the index is for. The index exists to forecast the next game, not to reward the last one, and a narrow win over a weak opponent is, for that purpose, genuinely bad news.

Which choice best describes the function of the sentence "The objection is arithmetically correct" in the text as a whole?`,
      options: [
        'It shows that the author believes the index should be revised.',
        'It grants the critics\' calculation before redirecting the dispute to the index\'s purpose, where the criticism loses its force.',
        'It concedes that the index cannot forecast the outcomes of games.',
        'It explains the formula by which the index weights recent games.'
      ],
      correctAnswer: 1,
      explanation: `Concede-and-redirect: the author gives the critics their arithmetic in full, which moves the disagreement to the only remaining ground — what the number is *for* — where the next sentences win it ("exists to forecast the next game, not to reward the last one"). The receipt is "It also mistakes," which tells you the concession was a setup. Choice A reads the concession as agreement with the critics' conclusion; the passage defends the index, so the trap reverses the author's side. Choice C concedes the wrong thing — forecasting is the capacity the passage asserts, not surrenders. Choice D mistakes a rhetorical move for exposition; no formula appears anywhere in the text.`
    }
  ]
}
