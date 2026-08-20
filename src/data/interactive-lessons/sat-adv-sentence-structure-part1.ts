export const lessonData = {
  topicSlug: 'sat-sentence-structure-advanced',
  sections: [
    {
      id: 'ss-adv-p1-intro',
      type: 'text' as const,
      content: `# Sentence Structure: The 700-800 Patterns

**Part 1 of 3 — What the Hardest Items Actually Test**

Hard-tier sentence structure items make every option grammatical **in isolation** — the error only exists in how the pieces connect. Four archetypes cover nearly all of them.

### Archetype 1: The Dangling Opener
A sentence begins with a long participial phrase (*Having spent eleven seasons mapping..., Assembled from fragments..., Trained as a cartographer...*) and the blank is the entire main clause. The rule: **the first noun after the comma must be the thing the phrase describes.** The traps are always the same four costumes:
- an abstract noun (*the conclusion, installation, preservation*) that couldn't perform the action
- the placeholder **it** (*it became clear that...*), which the phrase cannot modify
- a **possessive** (*Bergstrom's maps*) — the possessor doesn't count as the modified noun
- a related-but-wrong noun (*the scarp's offset* instead of the person mapping it)

### Archetype 2: Agreement Across the Gap
The subject and verb are separated by 15-25 words of prepositional phrases and relative clauses, and the nearest noun to the verb has the **wrong** number. Anchor points: *collection / variety / number of / each / neither* are **singular** no matter what plural nouns follow; in **inverted** sentences (*Among the tools recovered... were two blades*), the subject comes AFTER the verb; *neither...nor* agrees with the **nearer** subject; *along with / together with* adds nothing to a singular subject.

### Archetype 3: Tense Logic, Not Tense Labels
*By the time [past event]* → the earlier action takes **past perfect** (*had fallen*). *Since [past date]* or *ever since* → **present perfect** (*has fallen*). A closed past window (*in the two years following the bond issue*) → simple **past**. The wrong options are real tenses attached to the wrong timeline.

### Archetype 4: Parallelism Under Correlatives
Series items and correlative pairs (*not only...but also, not...but, less...than*) must repeat the same grammatical form — infinitive with infinitive, *for*-phrase with *for*-phrase, *because*-clause with *because*-clause. The trap swaps in a near-synonym of the right structure (*since* for *because*, a gerund for an infinitive).`
    },
    {
      id: 'ss-adv-p1-q1',
      type: 'quiz' as const,
      question: `Calibrated against tide gauges along three hundred kilometers of coastline, ______

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `the satellite altimetry data proved reliable even in shallow water where such measurements usually degrade.`,
        `the researchers trusted the satellite altimetry data even in shallow water where such measurements usually degrade.`,
        `it was possible to trust the satellite altimetry data even in shallow water where such measurements usually degrade.`,
        `the reliability of the satellite altimetry data extended even into shallow water where such measurements usually degrade.`
      ],
      correctAnswer: 0,
      explanation: `The opening phrase describes something calibrated against tide gauges, and only the data itself can be calibrated — so the main clause must begin with 'the satellite altimetry data.' The 'researchers' option makes the people the thing being calibrated. The placeholder 'it' gives the participle nothing to modify. 'The reliability' is the abstract-noun trap: reliability was never calibrated against anything; the data was.`
    },
    {
      id: 'ss-adv-p1-q2',
      type: 'quiz' as const,
      question: `The catalog of medieval charters, land grants, and monastic account books ______ scholars their first searchable index of the region's property disputes.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `give`,
        `have given`,
        `gives`,
        `are giving`
      ],
      correctAnswer: 2,
      explanation: `The subject is the singular 'catalog'; the plural nouns 'charters, land grants, and account books' all sit inside the prepositional phrase 'of...' and cannot govern the verb. Only 'gives' agrees. 'Give' and 'have given' both latch onto the plural nouns nearest the blank — exactly the proximity trap this archetype is built on. 'Are giving' repeats the agreement error and adds a progressive aspect that suits an ongoing action, not a standing fact about what the catalog provides.`
    },
    {
      id: 'ss-adv-p1-q3',
      type: 'quiz' as const,
      question: `By the time the replacement parts finally cleared customs, the field team ______ the damaged sensor array with components scavenged from a retired weather station.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
      options: [
        `has already rebuilt`,
        `had already rebuilt`,
        `already rebuilds`,
        `was already rebuilding`
      ],
      correctAnswer: 1,
      explanation: `'By the time the parts cleared customs' fixes a reference point in the past, and the rebuilding was complete at that point, so the past perfect 'had already rebuilt' is required. 'Has already rebuilt' is present perfect, which measures up to now rather than up to that past moment. 'Already rebuilds' drops a finished past event into the present. 'Was already rebuilding' leaves the repair in progress, contradicting 'already' plus the completed sense the sentence reports.`
    }
  ]
}
