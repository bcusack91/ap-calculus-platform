export const lessonData = {
  topicSlug: 'sat-central-ideas-details-advanced',
  sections: [
    {
      id: 'advci3-intro',
      type: 'text' as const,
      content: `# Central Ideas & Details: Timed Drill

**Part 3 of 3 — Four Items at Full Difficulty**

Pacing target: **60-75 seconds per question.** Run the protocol:

1. Last sentence first — find the thesis and its hedges.
2. Full read — mark the pivot.
3. Label distractors by species: **Half-Keeper, Hedge-Inflator, Prescriber, True-But-Not-It, Motive-Inventor.**
4. The right answer needs both halves of the turn and keeps every hedge.

One literary item is included — for that one, find the planted phrase that states the character's actual inner state before you judge any choice.`
    },
    {
      id: 'advci3-q1',
      type: 'quiz' as const,
      question: `Trials of a text-message alert that warns farmers of overnight frost report large average reductions in crop loss. Danquah's re-analysis divides the enrolled farms by cellular coverage. Where coverage was reliable, losses fell as reported. Where coverage was intermittent, losses did not change — and those farms, being the most remote, had also suffered the highest losses before the program began. Averaged together, the program looks broadly effective; separated, it proves effective precisely where the problem was smallest.

Which choice best states the main idea of the text?`,
      options: [
        'The frost alerts caused crop losses to increase on remote farms.',
        'Danquah shows that the frost-alert system does not reduce crop losses.',
        'Farmers with intermittent cellular coverage chose to ignore the alerts they received.',
        'The program\'s average benefit conceals that it helped least where losses were greatest, because its delivery depended on the coverage those farms lacked.'
      ],
      correctAnswer: 3,
      explanation: `The turn is in the final sentence's semicolon: averaged, effective; separated, "effective precisely where the problem was smallest." Choice D carries the concession (losses fell where coverage was reliable), the limit (no change where it wasn't), and the mechanism (delivery depends on coverage). Choice B is the Hedge-Inflator: Danquah confirms the reduction on covered farms; the finding is about distribution, not existence. Choice A invents an increase — "did not change" is a null, not a harm. Choice C is the Motive-Inventor: farmers with intermittent coverage often never received the alerts; nothing in the text reports a choice to ignore them.`
    },
    {
      id: 'advci3-q2',
      type: 'quiz' as const,
      question: `The following is adapted from a short story. Odile is a retired violinist.

"When her granddaughter first asked to be taught, Odile said no, and said it again the following summer. The third summer she said nothing, but left the violin case unlatched on the hall table before the girl arrived, and spent the morning in the garden, where she could not hear whether the latch was lifted. She did not ask at dinner. At breakfast she noticed the case had been turned a quarter-inch from where she had left it, and said, before the girl could speak: bring it to the porch after lunch."

Which choice does the text most strongly suggest about Odile?`,
      options: [
        'She refused to teach her granddaughter because she doubted the girl\'s talent.',
        'She arranges for the girl\'s interest to reveal itself before she consents to teach her.',
        'She has forgotten exactly where she left the violin case.',
        'She is angry that the case was moved without her permission.'
      ],
      correctAnswer: 1,
      explanation: `Every staged detail points one way: the unlatched case, the deliberately absent morning ("where she could not hear"), the withheld question at dinner, and the immediate offer to teach ("bring it to the porch") the moment the quarter-inch turn proves the girl touched it. That's a test of the girl's initiative, arranged so it couldn't be performed for Odile's benefit. Choice A invents a motive for the refusals that no detail supports — the passage never evaluates the girl's ability. Choice C is refuted by the very precision the plot requires: only someone who knew the case's position to the quarter-inch could read the evidence. Choice D is the Motive-Inventor killed by the outcome — her response to the moved case is an invitation, not a reproach.`
    },
    {
      id: 'advci3-q3',
      type: 'quiz' as const,
      question: `Museums acquiring digital artworks increasingly receive, along with the files, the artist's written specification of acceptable display hardware. Conservators at first filed these documents as technical metadata. Ito argues they are better understood as part of the work itself: when an artist specifies a monitor whose phosphor glow no manufactured screen now reproduces, the document is not describing the piece but setting a problem the museum must solve anew in every future decade — much as a score sets a problem for performers who no longer play period instruments.

Which choice best states the main idea of the text?`,
      options: [
        'Conservators should decline to acquire artworks that specify obsolete display hardware.',
        'Digital artworks cannot be exhibited once their specified hardware is no longer manufactured.',
        'Ito argues that display specifications function as part of the artwork, posing a recurring interpretive problem rather than recording fixed technical facts.',
        'Musical scores are more difficult to interpret than digital artworks.'
      ],
      correctAnswer: 2,
      explanation: `The thesis is the reclassification — "better understood as part of the work" — plus its consequence, "a problem the museum must solve anew in every future decade," and choice C carries both. Choice B is the Hedge-Inflator: the score analogy points the opposite way — performers without period instruments still perform, so the problem is recurring interpretation, not impossibility. Choice A is the Prescriber, drawing acquisition advice from a passage that describes how to *understand* documents, and pointing against its spirit besides. Choice D borrows the analogy and turns it into a difficulty ranking the text never draws; the score appears to illuminate the specification's function, not to be compared for hardness.`
    },
    {
      id: 'advci3-q4',
      type: 'quiz' as const,
      question: `The registry that tracks the disease added an online self-report option in 2019, and registered diagnoses rose forty percent within two years. Commentators wrote of an epidemic. But mortality from the disease, recorded by a vital-statistics system whose methods did not change, stayed flat across the same period, and the new self-reported cases cluster in the mild range that clinic-based reporting had always captured worst. The registry may at last be measuring the same disease more fully, rather than measuring more disease.

Which choice best states the main idea of the text?`,
      options: [
        'The rise in registered diagnoses likely reflects fuller counting of mild cases rather than a true increase in the disease.',
        'Mortality from the disease rose sharply after 2019.',
        'The online self-report option caused an epidemic of the disease.',
        'Clinic-based reporting counts mild cases more completely than self-reporting does.'
      ],
      correctAnswer: 0,
      explanation: `The final sentence is the thesis with its hedge: "may at last be measuring the same disease more fully, rather than measuring more disease," supported by two details — flat mortality under unchanged methods, and new cases clustering exactly where the old method "had always captured worst." Choice A preserves the hedge ("likely") and the mechanism. Choice B contradicts "stayed flat." Choice C adopts the commentators' reading, the appearance the passage was built to dismantle — and misplaces the cause besides, since a reporting channel cannot cause disease. Choice D reverses a detail: the mild range is where clinic-based reporting was *poorest*, which is why the self-reports concentrate there.`
    }
  ]
}
