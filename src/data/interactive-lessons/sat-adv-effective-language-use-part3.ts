export const lessonData = {
  topicSlug: 'sat-effective-language-use-advanced',
  sections: [
    {
      id: 'elu-adv-p3-drill-intro',
      type: 'text' as const,
      content: `# Effective Language Use: Timed Drill

**Part 3 of 3 — Full Difficulty, Test Pace**

Four questions at genuine 700-800 difficulty. These passages are long, so budget **60 seconds each** — and win the time back with reading order:

1. **Goal sentence first.** Convert it to a structural checklist before touching the notes.
2. **Options second**, scanned against the checklist. Two-halves goals kill single-half options on sight; audience goals kill mismatched register on sight.
3. **Notes last**, and only to break a tie.

Start the clock.`
    },
    {
      id: 'elu-adv-p3-q1',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Leyla Demir tracked 60 urban foxes fitted with GPS collars for two years.
- Urban foxes are a familiar sight in the study city's parks and gardens.
- Collared foxes crossed an average of 14 roads per night.
- Crossings clustered in the hour after traffic thinned below ten vehicles per minute.

The student wants to present Demir's central finding to an audience already familiar with urban foxes. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Urban foxes are a familiar sight in the study city's parks and gardens, where Demir tracked 60 of them for two years.`,
        `Demir found that collared foxes crossed an average of 14 roads per night, mostly in the hour after traffic thinned.`,
        `Leyla Demir fitted 60 urban foxes with GPS collars and tracked their movements through the city for two years.`,
        `GPS collars allowed Demir's team to record each fox's position continuously throughout the two-year study.`
      ],
      correctAnswer: 1,
      explanation: `The central finding is what the tracking revealed — the crossing rate and its timing — and only the 14-roads-per-night option reports it. The study-scope option (60 foxes, two years) describes the investigation without any result, the classic scope-for-finding swap. The GPS option explains method, not outcome. The familiar-sight option leads with background the specified audience explicitly does not need and then adds only the study's scope, never its result.`
    },
    {
      id: 'elu-adv-p3-q2',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Some historians argue the hilltop fortress was abandoned because its well ran dry.
- Sediment cores show the local water table dropped sharply in the decades before abandonment.
- A roster from the fortress's final year lists a larger garrison than at any earlier point.
- The fortress overlooked the region's main caravan route.

The student wants to emphasize the evidence that complicates the dry-well explanation. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Sediment cores show that the local water table dropped sharply in the decades before the fortress was abandoned.`,
        `Historians continue to debate why the hilltop fortress was abandoned, and some blame a well that ran dry.`,
        `The fortress's final-year roster lists its largest garrison ever, a fact hard to square with a failing well.`,
        `The hilltop fortress occupied a commanding position overlooking the region's main caravan route.`
      ],
      correctAnswer: 2,
      explanation: `The goal asks for evidence that presses against the dry-well theory, and only the roster option presents a finding and states how it complicates that account: a garrison at peak strength is hard to reconcile with a failing water supply. The sediment-core option is the mirror trap — genuine evidence that cuts the other way, supporting the theory. The debate option reports disagreement without any evidence bearing on it, and the caravan-route option is location background tied to no explanation at all.`
    },
    {
      id: 'elu-adv-p3-q3',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- LED grow lights use 40 percent less electricity than the sodium lamps they replace.
- LEDs emit far less heat than sodium lamps.
- The sodium lamps' waste heat had warmed the greenhouses through winter.
- Growers who switched to LEDs now run gas heaters on cold nights.

The student wants to explain why switching to LEDs does not straightforwardly cut a greenhouse's energy costs. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `LED electricity savings are partly offset by gas heating, since the old lamps' waste heat had warmed the greenhouses.`,
        `LED grow lights use 40 percent less electricity than the sodium lamps they replaced, a steep cut in the power bill.`,
        `Growers who switched their greenhouses to LEDs now run gas heaters on cold nights to keep their plants warm.`,
        `LED grow lights emit far less heat than the sodium lamps, which had warmed the greenhouses with their waste heat.`
      ],
      correctAnswer: 0,
      explanation: `Explaining why the savings fail to materialize requires the saving and the offsetting cost linked in one causal sentence, which only the offset-by-gas-heating option provides. The 40-percent option gives the saving alone — the very fact the goal asks you to complicate. The gas-heater option gives the new cost with no connection to the lamps' lost heat, and the less-heat option supplies a middle link of the mechanism without ever reaching the cost. Three accurate fragments, one complete explanation.`
    },
    {
      id: 'elu-adv-p3-q4',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- An individual Antarctic krill is about the length of a paper clip.
- The species' total biomass is estimated at 400 million tonnes, among the largest of any wild animal.
- Krill swarms can stretch unbroken for kilometers.
- Whales, seals, and penguins all feed heavily on krill.

The student wants to emphasize the disproportion between an individual krill's size and the species' total biomass. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Antarctic krill, each about the length of a paper clip, gather in swarms that stretch unbroken for kilometers.`,
        `Whales, seals, and penguins all feed heavily on Antarctic krill, making the species central to the food web.`,
        `The total biomass of Antarctic krill, estimated at 400 million tonnes, is among the largest of any wild animal.`,
        `A single krill is about as long as a paper clip, yet the species' total biomass is some 400 million tonnes.`
      ],
      correctAnswer: 3,
      explanation: `Disproportion is a relation between two quantities, so the tiny individual and the enormous total must share one sentence; only the paper-clip-and-biomass option pairs them. The among-the-largest option is the half-sentence trap — a staggering figure, even ranked against other animals, but disproportionate to nothing until the paper-clip size appears beside it. The swarm option is vivid but pairs the wrong quantities (individual size against swarm length, not against species biomass), and the predators option shifts to ecological importance, a different claim entirely.`
    }
  ]
}
