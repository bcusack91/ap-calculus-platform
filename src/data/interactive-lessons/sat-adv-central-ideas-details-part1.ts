export const lessonData = {
  topicSlug: 'sat-central-ideas-details-advanced',
  sections: [
    {
      id: 'advci1-intro',
      type: 'text' as const,
      content: `# Central Ideas & Details: The 700-800 Patterns

**Part 1 of 3 — What Hard Main-Idea Passages Actually Look Like**

Easy main-idea passages announce a thesis. Hard ones are built on a **turn**: they grant something real, then locate its limit. The main idea is always *both halves*, and every distractor is a way of keeping only one.

### Archetype 1: The Two-Part Main Idea (concede + limit)
The passage's shape: "X works / is real / is well documented... **but** at the wrong hours / in the wrong place / for a different reason." The correct answer carries the concession *and* the limitation ("cut energy per fixture, but total brightness held"). Distractors: one that keeps only the success, one that inflates the limit into total failure. If your answer could have been written without reading past the pivot, it's wrong.

### Archetype 2: The Hedge-Preserver
Authors at this level say "may," "suggests," "appears," "not all." Correct answers preserve the hedge exactly. Distractors convert it: "may reflect collection timing" becomes "proves flowering hasn't changed"; "two of four differences persisted" becomes "has no influence." A hedged passage **never** supports an absolute answer — and it also never supports a *recommendation* ("cities should stop..."), because describing a limit is not prescribing a policy.

### Archetype 3: The Relocated Problem
A fix improves the measured spot while the problem moves — off the reporting books, to the adjacent street, to the ships waiting offshore. The main idea is the *relocation*, not the improvement and not a scandal. Watch for the quiet sentence telling you where the measurement was taken.

### Archetype 4: The Literary Inference
Fiction excerpts ask what the text "most strongly suggests." The near-miss choice assigns a plausible emotion (resentment, regret, suspicion) that one explicit phrase rules out ("she was not sorry," "he did not think of a thief"). Find that phrase before you answer — the passage always plants it.

**The move that solves all four:** locate the final sentence's claim, then check which choice needs *every* preceding sentence to be true. Hard passages waste nothing.`
    },
    {
      id: 'advci1-q1',
      type: 'quiz' as const,
      question: `A city that converted its streetlights to LEDs cut lighting energy use per fixture by half, the outcome the conversion was funded to achieve. Satellite images from the following three years, however, show the city's total nighttime brightness unchanged: the money saved per fixture was spent lighting parks, paths, and building facades that had previously been dark. Cheaper light, the study's authors observe, turned out to mean more of it.

Which choice best states the main idea of the text?`,
      options: [
        'The LED conversion failed to reduce the energy used by each streetlight.',
        'The conversion cut energy per fixture, but the savings financed new lighting that left the city\'s total brightness unchanged.',
        'Cities should not convert their streetlights to LEDs.',
        'Satellite images are an unreliable way to measure a city\'s brightness.'
      ],
      correctAnswer: 1,
      explanation: `Two-part main idea: the passage grants the funded outcome ("cut lighting energy use per fixture by half") and then supplies the limit and its mechanism ("total nighttime brightness unchanged" because savings bought new lighting). Only choice B carries both halves. Choice A inflates the limit into a failure the text denies — the per-fixture cut is confirmed in the first sentence. Choice C converts a described rebound effect into a recommendation the authors never make; noting that cheaper light meant more light is not advice to keep light expensive. Choice D attacks the instrument, but the passage treats the satellite record as the reliable evidence that revealed the result.`
    },
    {
      id: 'advci1-q2',
      type: 'quiz' as const,
      question: `Herbarium sheets collected before 1900 show the alpine gentian flowering in late June; sheets from the past two decades show it flowering in April. The obvious reading is that warming has advanced the flowering date by two months. Kimura notes a complication: nineteenth-century collectors, traveling by rail and mule, reached remote alpine sites weeks later in the season than today's collectors do, and a plant is pressed when a collector arrives, not when it first blooms. The archive may record a change in the flowers, a change in the collectors, or some mixture the sheets alone cannot apportion.

Which choice best states the main idea of the text?`,
      options: [
        'Kimura demonstrates that the gentian\'s flowering date has not changed since 1900.',
        'Nineteenth-century collectors deliberately avoided early-flowering plants.',
        'The herbarium record proves that warming has advanced flowering by two months.',
        'Kimura argues that the apparent shift in flowering dates could reflect changes in when collectors arrived rather than only changes in the plants.'
      ],
      correctAnswer: 3,
      explanation: `Hedge-preserver: the passage's last sentence keeps three possibilities open ("a change in the flowers, a change in the collectors, or some mixture"), and only choice D preserves that hedge ("could reflect... rather than only"). Choice A converts the hedge into the opposite absolute — Kimura shows the record is ambiguous, not that flowering is unchanged; that's the same overreach as choice C, just pointed the other way. Choice C states "the obvious reading" that the complication was introduced to unsettle. Choice B invents intent: the collectors' late arrivals came from rail and mule travel, a logistical fact, not a sampling preference.`
    },
    {
      id: 'advci1-q3',
      type: 'quiz' as const,
      question: `When the port began requiring docked ships to plug into shore electricity instead of running their diesel auxiliary engines, monitors on the wharf recorded the expected drop in exhaust particulates. Monitors two kilometers inland recorded almost none. Ships anchored offshore awaiting a berth — a queue that lengthened over the same period as traffic grew — burn the same fuel the rule addresses, and the sea breeze carries their exhaust across the same neighborhoods. The regulation, its evaluators concluded, cleaned the air where the compliance measurement was taken.

Which choice best states the main idea of the text?`,
      options: [
        'The shore-power rule improved air quality at the dock while the offshore queue kept the neighborhoods\' exposure largely unchanged.',
        'The shore-power rule had no effect on exhaust particulates anywhere in the port.',
        'Ships anchored offshore in order to evade the shore-power regulation.',
        'The port should extend the shore-power requirement to ships waiting at anchor.'
      ],
      correctAnswer: 0,
      explanation: `Relocated-problem passage: the improvement is real but local ("monitors on the wharf recorded the expected drop"), while the exposure that matters persists because the emitting activity sits outside the rule's reach — and the closing sentence's dry phrasing ("where the compliance measurement was taken") signals that the gap between measured success and experienced air is the point. Choice B inflates the limit into a universal null that the wharf monitors refute. Choice C invents evasion: the queue lengthened because "traffic grew," and ships at anchor are waiting for berths, not dodging the rule. Choice D is the recommendation trap — the passage diagnoses a boundary problem without prescribing the fix.`
    }
  ]
}
