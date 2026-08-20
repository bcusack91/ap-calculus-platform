export const lessonData = {
  topicSlug: 'sat-sentence-structure-advanced',
  sections: [
    {
      id: 'ss-adv-p3-drill-intro',
      type: 'text' as const,
      content: `# Sentence Structure: Timed Drill

**Part 3 of 3 — Full Difficulty, Test Pace**

Four questions at genuine 700-800 difficulty. Target **45-60 seconds each**.

Fast protocol:
1. **Blank is a whole clause?** → dangling-opener item. Find what the opening phrase describes; that noun must lead the answer. Kill possessives, placeholders, and abstract nouns first.
2. **Blank is a verb?** → strike the interveners, find the true subject (un-invert if needed), then check the timeline words (*by the time, since, ever since, before*) for tense.
3. **Blank sits after a correlative or in a series?** → match form to the first element, character for character.

Start the clock.`
    },
    {
      id: 'ss-adv-p3-q1',
      type: 'quiz' as const,
      question: `Neither the county's three incorporated towns nor the unincorporated settlement at the crossroads ______ a full-time building inspector before the ordinance passed.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `were employing`,
        `have employed`,
        `employ`,
        `employed`
      ],
      correctAnswer: 3,
      explanation: `With 'neither...nor,' the verb agrees with the nearer subject — the singular 'settlement' — and 'before the ordinance passed' fixes the action in the past, so the singular-compatible past 'employed' is correct. 'Were employing' and 'employ' agree with the plural 'towns,' the farther half of the pair, and 'employ' is also present tense. 'Have employed' is plural and its present perfect cannot sit inside a window closed off by a past event.`
    },
    {
      id: 'ss-adv-p3-q2',
      type: 'quiz' as const,
      question: `Having transcribed the interviews in the dialect the speakers actually used rather than in standard orthography, ______

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `the archive's usefulness to phonologists was greatly increased by Ramirez.`,
        `Ramirez produced an archive far more useful to phonologists than a standardized text would have been.`,
        `the archive Ramirez produced was far more useful to phonologists than a standardized text would have been.`,
        `it was phonologists who benefited most from the archive Ramirez produced.`
      ],
      correctAnswer: 1,
      explanation: `Only a person can have transcribed the interviews, so the main clause must open with 'Ramirez.' The first option leads with 'the archive's usefulness' — an abstract noun that transcribed nothing, with Ramirez demoted to a by-phrase. The third leads with 'the archive,' which is the product of the transcription, not the transcriber. The last leads with the placeholder 'it,' leaving the participle unattached. All four clauses are internally grammatical; the item turns entirely on the modified subject.`
    },
    {
      id: 'ss-adv-p3-q3',
      type: 'quiz' as const,
      question: `Since the quota system was introduced in 2012, the fishery's spawning stock ______ to nearly triple its previous low.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `recovered`,
        `had recovered`,
        `has recovered`,
        `recovers`
      ],
      correctAnswer: 2,
      explanation: `'Since' plus a past starting point marks a span running from 2012 to the present — precisely the territory of the present perfect, 'has recovered.' The simple past 'recovered' seals the change off in the past and leaves 'since 2012' dangling. The past perfect 'had recovered' demands a later past reference point that the sentence never supplies. The present 'recovers' states a habitual action rather than a cumulative change measured across a span.`
    },
    {
      id: 'ss-adv-p3-q4',
      type: 'quiz' as const,
      question: `The number of volunteers trained to staff the warning sirens in the villages along the estuary ______ every year since the near miss of 2018.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `have risen`,
        `has risen`,
        `rise`,
        `are rising`
      ],
      correctAnswer: 1,
      explanation: `Two checks stack on one blank. First, 'the number of' takes a singular verb — the plurals 'volunteers,' 'sirens,' 'villages' all sit inside modifying phrases. Second, 'every year since 2018' spans from a past point to now, requiring the present perfect. 'Has risen' passes both. 'Have risen' fails on number; 'rise' and 'are rising' fail on number and on aspect, since neither can reach back to 2018 the way 'since' demands.`
    }
  ]
}
