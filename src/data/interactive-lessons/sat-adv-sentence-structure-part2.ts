export const lessonData = {
  topicSlug: 'sat-sentence-structure-advanced',
  sections: [
    {
      id: 'ss-adv-p2-traps',
      type: 'text' as const,
      content: `# Sentence Structure: Traps & Speed

**Part 2 of 3 — How the Wrong Answers Are Built**

### Trap 1: The Nearest-Noun Verb
Wrong agreement options are never random — they agree perfectly with the noun **immediately before the blank**, which is always inside a prepositional phrase or relative clause. Elimination technique: physically strike out everything from the first preposition or relative pronoun to the blank, then read subject + verb naked. *The catalog ~~of charters, grants, and books~~ gives...* Ten words become three, and the error is undisguised.

### Trap 2: The Inversion Flip
When a sentence opens with a place or direction (*Among the tools..., Beneath the floor..., In the loft above the stable...*), the subject follows the verb. The trap verb agrees with the last noun of the opening phrase (*floor, layer, stable*) — a noun that is only the object of a preposition. Technique: **un-invert the sentence** ("The foundations lie beneath the floor") and agreement resolves instantly. Watch tense too: excavation narratives set in the past kill present-tense options for free.

### Trap 3: The Correlative Half-Match
With *not only X but also Y*, *not X but Y*, and *less for X than for Y*, the wrong options give you the right **idea** in the wrong **form**: *because* swapped for *since*, *for the rigor... but also the fact* (dropped preposition), an infinitive series ending in a gerund. Technique: copy the exact first word(s) after the first correlative and demand the identical part of speech after the second. It is a matching exercise, not a comprehension exercise.

### Trap 4: The Additive Decoy
*Together with, along with, as well as, accompanied by* — none of these makes a subject plural, but each parks extra people next to the verb so a plural option sounds natural. Only **and** builds a compound subject. Meanwhile *each of / neither of / the number of* stay singular regardless of the plural noun that follows. If the sentence also fixes a past time frame ('before the shipment was released'), present-perfect and progressive options die on tense even where their number is right — a double check that eliminates in one pass.`
    },
    {
      id: 'ss-adv-p2-q1',
      type: 'quiz' as const,
      question: `Beneath the chapel's original floor ______ the foundations of a far older structure aligned to a different compass point.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `lies`,
        `was lying`,
        `has lain`,
        `lie`
      ],
      correctAnswer: 3,
      explanation: `The sentence is inverted: un-invert it and you get 'The foundations... lie beneath the floor.' The subject is the plural 'foundations,' so the verb must be plural — 'lie.' The singular 'lies' agrees with 'floor,' which is merely the object of the preposition ending the opening phrase. 'Was lying' and 'has lain' repeat the singular error, and the progressive additionally treats a permanent structural fact as an action in progress.`
    },
    {
      id: 'ss-adv-p2-q2',
      type: 'quiz' as const,
      question: `The fellowship rewards candidates not only for the originality of their research but also ______ to explain that research to nonspecialists.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `because they are able`,
        `for their ability`,
        `their ability`,
        `being able`
      ],
      correctAnswer: 1,
      explanation: `'Not only' is followed by the prepositional phrase 'for the originality,' so 'but also' must be followed by a matching prepositional phrase: 'for their ability.' The technique is mechanical — copy the word after the first correlative ('for') and demand it after the second. 'Because they are able' swaps in a subordinate clause. 'Their ability' drops the preposition the parallel requires. 'Being able' substitutes a gerund phrase that matches nothing in the first half.`
    },
    {
      id: 'ss-adv-p2-q3',
      type: 'quiz' as const,
      question: `The violinist, together with the quartet's two founding members and their longtime accompanist, ______ the disputed recording in a single afternoon session.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `have completed`,
        `complete`,
        `completed`,
        `were completing`
      ],
      correctAnswer: 2,
      explanation: `'Together with' is an additive decoy — it does not build a compound subject, so 'The violinist' remains singular. The session is a completed past event, so the singular past 'completed' is correct on both counts. 'Have completed' and 'complete' treat the accompanying musicians as part of a plural subject, and 'complete' is also present tense. 'Were completing' is plural and leaves the recording unfinished, contradicting 'in a single afternoon session.'`
    }
  ]
}
