export const lessonData = {
  topicSlug: 'sat-reading-comprehension-advanced',
  sections: [
    {
      id: 'advrc3-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: Timed Drill

**Part 3 of 3 — Four Items at Full Difficulty**

Pacing target: **70 seconds per question** (cross-text pairs earn 90). The pre-choice ritual:

1. **Function items:** name the sentence's target and check the next sentence for the receipt.
2. **Cross-text items:** read Text 2's final sentence first; eliminate any "denies the result" choice on sight; watch for the committed near-miss.
3. **Structure items:** map the beats in order; reject answers whose verbs (defends, urges, proves) don't match the passage's actual moves.

Trust eliminations made on quoted phrases. On this question type, your second-guess is statistically worse than your first elimination.`
    },
    {
      id: 'advrc3-q1',
      type: 'quiz' as const,
      question: `For a century the falls were the reason the town existed: the mills took their power from the drop, and the town took its wages from the mills. The dam that submerged the falls in 1931 is therefore remembered as the end of something, and the memorial beside the spillway encourages the memory. The town's population, though, peaked in 1948. Whatever ended in 1931, it was not the town, and the memorial marks the death of an explanation as much as the death of a waterfall.

Which choice best describes the function of the sentence "The town's population, though, peaked in 1948" in the text as a whole?`,
      options: [
        'It supplies the fact that unsettles the memorial\'s account of 1931 as the end of the town.',
        'It establishes that the dam improved the town\'s economy.',
        'It explains why the memorial was placed beside the spillway.',
        'It corrects the date at which the falls were submerged.'
      ],
      correctAnswer: 0,
      explanation: `The sentence is the pivot, flagged by "though": a town supposedly ended in 1931 kept growing for seventeen more years, and the final sentence draws the receipt — "it was not the town," so the memorial commemorates "the death of an explanation." Choice B overshoots the fact into a causal claim: the passage never credits the dam with the growth, only uses the growth to break the ending story. Choice C attaches the sentence to a logistical detail it has nothing to do with — the memorial's location is scenery, not argument. Choice D invents a dating dispute; 1931 stands unchallenged, and the sentence adds a second date rather than correcting the first.`
    },
    {
      id: 'advrc3-q2',
      type: 'quiz' as const,
      question: `Text 1
Students who take notes by hand recall lecture material better than students who type, a result replicated across laboratories. Typists transcribe nearly verbatim, while writers must compress ideas into fewer words, and compression is the processing that fixes material in memory. Schools should accordingly steer students toward handwritten notes.

Text 2
The replicated studies observe each participant once, comparing lifelong writers with lifelong typists on a single unfamiliar task. Students who type notes daily develop compression habits of their own — abbreviating, restructuring, flagging — that a one-session design has no chance to observe. The laboratory gap is real. The one study that followed students across a full term found it narrowing month by month.

Based on the texts, how would the author of Text 2 most likely respond to the recommendation in Text 1?`,
      options: [
        'By denying that handwritten notes have ever produced better recall in laboratory studies.',
        'By arguing that laptops should be banned from classrooms until more research is complete.',
        'By agreeing that schools should steer students toward handwriting, since the replications are so consistent.',
        'By noting that an advantage measured in single sessions may shrink as typists\' own habits develop, so the classroom recommendation outruns what the studies can show.'
      ],
      correctAnswer: 3,
      explanation: `Text 2's shape is accept-and-narrow: "The laboratory gap is real" concedes the data, and the design critique (one session, unfamiliar task, habits "a one-session design has no chance to observe") plus the term-long study's narrowing gap confine the result to the lab. The recommendation is where Text 1 outran its evidence, so choice D is the response. Choice A is the denial overshoot, contradicted by "is real." Choice B reverses the direction of Text 2's caution — a critic of over-strong recommendations doesn't answer with a stronger one. Choice C hands Text 2 the very conclusion its two paragraphs undermine, mistaking its concession about the data for agreement about the advice.`
    },
    {
      id: 'advrc3-q3',
      type: 'quiz' as const,
      question: `The proposal to reintroduce the lynx has now failed at two referendums, and after each defeat the campaign blamed public misinformation. Panel surveys collected before both votes tell a plainer story. Voters answered factual questions about the lynx correctly at high rates in both campaigns — in the second, opponents outscored supporters. What divides the sides, the surveys find, is not information but stakes: opposition concentrates in the small fraction of voters whose herds and livelihoods the animal would touch. A campaign that spends its budget correcting facts is speaking to the voters it already has.

Which choice best describes the overall structure of the text?`,
      options: [
        'It advocates for the reintroduction of the lynx and criticizes those who oppose it.',
        'It describes two referendum campaigns and predicts the result of a third.',
        'It reports the campaigns\' explanation for their defeats, presents survey evidence against that explanation, and locates the actual division in voters\' stakes rather than their knowledge.',
        'It argues that voters are too poorly informed about the lynx to vote responsibly.'
      ],
      correctAnswer: 2,
      explanation: `Three beats, in order: the blamed cause (misinformation), the evidence against it (high factual accuracy; opponents outscoring supporters), and the relocated division ("not information but stakes"), capped by the consequence for strategy. Choice C maps all three with matching verbs — reports, presents against, locates. Choice A imposes advocacy: the passage analyzes why campaigns lose without endorsing either side; if anything it treats the opponents' position as grounded in real stakes. Choice B promotes a prediction the text never makes — no third vote is mentioned. Choice D asserts the exact claim the surveys refute, mistaking the campaigns' excuse for the passage's finding.`
    },
    {
      id: 'advrc3-q4',
      type: 'quiz' as const,
      question: `Text 1
Ancient DNA recovered from fourteenth-century plague victims shows that the medieval strain differs remarkably little from strains circulating today, which respond readily to antibiotics. Some historians conclude that the Black Death's staggering lethality owed less to the pathogen itself than to the medieval world — its crowding, its malnutrition, its absence of effective medicine.

Text 2
Similarity is scored across the whole genome, and virulence can turn on a handful of genes; how strongly those genes are expressed cannot be read from sequence at all. The medieval genomes are authentic and beautifully recovered. What they cannot yet tell us is how the strain behaved in a living host — which is the very thing the lethality debate is about.

Based on the texts, how would the author of Text 2 most likely respond to the conclusion described in Text 1?`,
      options: [
        'By denying that the medieval plague genomes were accurately sequenced.',
        'By objecting that overall genomic similarity cannot establish similar behavior in hosts, so the sequences do not settle what made the Black Death so lethal.',
        'By agreeing that the medieval world\'s conditions fully explain the Black Death\'s lethality.',
        'By arguing that the medieval strain would resist modern antibiotics.'
      ],
      correctAnswer: 1,
      explanation: `Text 2 concedes the data in the strongest terms ("authentic and beautifully recovered") and attacks the inferential bridge: whole-genome similarity is the wrong measure for virulence, which "can turn on a handful of genes" and on expression that sequence can't reveal. The conclusion — pathogen versus conditions — is exactly what the sequences "cannot yet tell us," so choice B has the right shape and the right modesty ("do not settle," not "are wrong"). Choice A is the denial overshoot, contradicted by Text 2's own praise of the recovery. Choice C flips Text 2 to the other side of the debate, when its position is that the evidence decides for neither. Choice D commits Text 2 to a biological claim it never makes; antibiotics appear only in Text 1, and Text 2's argument needs no position on them.`
    }
  ]
}
