/**
 * MCAT Full-Length Form 6 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-10-01 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 *
 * Question counts per passage are 5/4/4/5/4 (= 22), as BLUEPRINT-F56 lists.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL6_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. COGNITION — insight vs incremental problem solving, incubation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-a-01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Warmth Ratings, Time Away, and the Moment of Solution',
    passageText:
      'Psychologists distinguish problems that are solved incrementally from problems that are solved by insight. In an incremental problem, such as a multi-step algebra exercise, each operation carries the solver measurably closer to the goal. In an insight problem, the solver’s first reading of the problem typically leads to an impasse, and a solution becomes available only after the problem is represented in a new way. Solvers often report that such solutions arrive abruptly, but critics have asked whether insight is truly sudden or only seems so because solvers fail to notice their own gradual progress.\n\nIn Experiment 1, 48 undergraduates each attempted four algebra problems and four insight puzzles in random order, with up to 5 minutes allowed per problem. One puzzle read: “A dealer is offered a bronze coin stamped 544 B.C. How does he know at once that it is a forgery?” Every 15 seconds a tone sounded, and participants marked a “warmth” rating from 1 (cold, nowhere near a solution) to 7 (hot, solution all but reached). For each correctly solved problem, the researchers aligned the ratings backward from the moment the participant wrote the answer. Mean ratings at the last five tones before the solution are shown in Figure 1.\n\nExperiment 2 examined incubation, the improvement in problem solving that sometimes follows time spent away from an unsolved problem. Ninety new participants attempted 20 word puzzles. In each puzzle three words were displayed (for example, *cottage*, *blue*, and *cake*), and the task was to find a fourth word that forms a familiar phrase or compound with each of them (*cheese*). For half of the puzzles, chosen at random for each participant, a misleading associate was printed beside each word (for example, *hut*, *sky*, and *icing*); the remaining puzzles were shown without associates. Each puzzle was displayed for 30 seconds. Puzzles that a participant failed to solve were later shown again for another 30 seconds, this time without any associates. Participants were randomly assigned to one of two conditions. In the immediate condition, the second attempts began as soon as the first attempts were complete. In the break condition, the second attempts began after 10 minutes spent reading comic strips; these participants were not told, before or during the break, that any puzzle would return.\n\nAmong puzzles first shown without associates, participants solved 28% of their previously unsolved puzzles on the second attempt in the immediate condition and 30% in the break condition, a difference that was not statistically significant. Among puzzles first shown with misleading associates, the corresponding values were 18% and 41%, a significant difference.\n\nThree explanations of incubation were considered. The unconscious-work account holds that problem-solving processes continue outside awareness during a break. The fatigue account holds that a break restores mental resources depleted by the first attempt. The forgetting-fixation account holds that a break allows the solver’s early, unproductive approaches to lose strength in memory, so that they compete less with other possibilities when the solver returns.',
    chart: {
      title: 'Figure 1. Mean warmth rating at each of the last five tones before a correct solution, by problem type (solution written at time 0)',
      kind: 'line',
      xLabel: 'Time relative to solution',
      xUnit: 's',
      yLabel: 'Mean warmth rating (1–7)',
      xValues: [-75, -60, -45, -30, -15],
      yValues: [2.1, 3.0, 3.9, 4.8, 5.7],
      seriesLabel: 'Algebra problems',
      comparisonSeries: [{ label: 'Insight puzzles', yValues: [1.9, 2.0, 1.9, 2.1, 2.2] }],
    },
    questions: [
      {
        question: 'Which conclusion about solvers’ awareness of their own progress is best supported by Figure 1?',
        options: [
          'Solvers felt nearer to a solution on insight puzzles than on algebra problems at every tone.',
          'Solvers sensed a steady approach to the solution on both problem types, though at different rates.',
          'Solvers sensed their approach to algebra solutions but had little warning of insight solutions.',
          'Solvers sensed early progress on insight puzzles and then lost it shortly before the solution.',
        ],
        correctAnswer: 2,
        explanation:
          'Mean warmth on algebra problems climbs from about 2 to nearly 6 across the five tones, whereas on insight puzzles it stays near 2 until the answer is written, so solvers could feel an algebra solution coming but not an insight solution. Insight ratings are lower than algebra ratings at every tone, not higher. A steady approach on both types would require the insight line to rise, and it is essentially flat. Early progress that was later lost would appear as a line that starts high and falls, which neither series shows.',
        skill: '6B data interpretation: insight vs incremental solving',
      },
      {
        question: 'The results of Experiment 2 are most consistent with which explanation of incubation?',
        options: [
          'Forgetting fixation, because the break helped only where the first attempt had steered solvers toward wrong answers.',
          'Unconscious work, because the break helped on puzzles that solvers had stopped consciously thinking about.',
          'Recovery from fatigue, because the break helped most on the puzzles that had been most tiring to attempt.',
          'Unconscious work, because the break helped only on puzzles that were shown again without any associates.',
        ],
        correctAnswer: 0,
        explanation:
          'A break improved second-attempt success only for puzzles that had been presented with misleading associates (18% versus 41%) and did nothing for puzzles presented without them (28% versus 30%). That is what the forgetting-fixation account predicts: time away matters when there is a wrong approach to lose. Unconscious work would continue on any unsolved puzzle, so it predicts a benefit for both puzzle types, and every puzzle was shown again without associates, so that feature cannot explain a selective benefit. Recovery from fatigue would likewise help both types, and nothing indicates that the cued puzzles, displayed for the same 30 seconds, were more tiring.',
        skill: '6B incubation and fixation (reasoning)',
      },
      {
        question:
          'Participants in the break condition were not told that unsolved puzzles would be shown again. This feature of the design most likely served to:',
        options: [
          'keep participants from guessing which puzzles had carried misleading associates.',
          'make sure that both conditions saw each unsolved puzzle the same number of times.',
          'equalize the difficulty of the puzzles that were assigned to the two conditions.',
          'keep participants from deliberately working on the puzzles during the break.',
        ],
        correctAnswer: 3,
        explanation:
          'If participants expected the puzzles to return, they could keep thinking about them while supposedly reading, and any benefit of the break could then reflect extra conscious work rather than incubation; withholding the information guards against that. Participants saw for themselves which puzzles carried associates, and news of a second attempt would not change that. Both conditions saw each unsolved puzzle exactly twice regardless of what participants were told. Puzzle difficulty was equated by random assignment of participants and of cues, not by instructions.',
        skill: '6B research design: controlling conscious work in incubation',
      },
      {
        question:
          'A critic argues that warmth ratings on insight puzzles stayed low only because participants who were nearing an answer were too absorbed to update their ratings. Which feature of Experiment 1 most directly counters this argument?',
        options: [
          'Every problem was allowed the same maximum working time of 5 minutes.',
          'The same participants gave rising ratings on algebra problems.',
          'The ratings were aligned backward from the moment of each solution.',
          'The eight problems were presented to each participant in random order.',
        ],
        correctAnswer: 1,
        explanation:
          'Because every participant attempted both kinds of problem, the very people whose insight ratings stayed flat reported rising warmth as they neared algebra solutions, which shows that they were able and willing to update ratings when they sensed progress. An equal time limit does not bear on whether ratings were updated. Backward alignment is what allows the two curves to be compared, but it does not show that participants could report progress. Random ordering controls for practice and fatigue across problems, not for absorption near a solution.',
        skill: '6B research design: within-subjects comparison',
      },
      {
        question:
          'Suppose a third group in Experiment 2 took the same 10-minute break, but the misleading associates for their unsolved puzzles stayed posted in front of them throughout it. If the forgetting-fixation account is correct, the percentage of these puzzles solved on the second attempt would be closest to:',
        options: ['18%', '30%', '41%', '60%'],
        correctAnswer: 0,
        explanation:
          'On the forgetting-fixation account the break helps because the misleading associates lose strength while the solver is occupied elsewhere. Keeping them in view would maintain their strength, so the break should confer no advantage and the success rate should match the 18% seen when cued puzzles were retried immediately. A value of 41% would mean the break helped just as much with the associates still present, which is what an unconscious-work or fatigue account would predict. A value of 30% is the rate for puzzles that never carried associates and has no basis for this group, and 60% would mean that continued exposure to misleading words aided solution.',
        skill: '6B incubation: predicting from a hypothesis',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — collective behavior (crowds, rumor, panics) and modernization
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Crowds, Rumors, and Theories of How Societies Change',
    passageText:
      'Most social life is patterned by established norms and institutions. Sociologists use the term collective behavior for action that falls outside those patterns: relatively spontaneous, loosely organized activity by large numbers of people in situations where conventional guidelines are unclear or absent. Collective behavior differs from a social movement, which is organized, sustained over time, and directed at a defined goal.\n\nCrowds are the most visible form. Three theories attempt to explain why people in crowds sometimes act in ways they would not act alone. Contagion theory, proposed by Gustave Le Bon in the 1890s, holds that the anonymity of a crowd releases individuals from personal responsibility and that emotion spreads from person to person until the crowd acts as a single irrational unit. Convergence theory reverses the direction of explanation: a crowd does not transform its members but assembles people who already share particular dispositions, so that crowd action expresses what participants brought with them. Emergent-norm theory holds that crowds form in ambiguous situations in which members are uncertain how to act; as a few people act or speak, shared definitions of appropriate conduct develop on the spot, and members then follow these new norms much as they follow conventional ones elsewhere.\n\nCollective behavior also occurs among people who are physically dispersed. A rumor is unverified information that passes informally from person to person. Allport and Postman proposed that the intensity of a rumor varies with the importance of the topic to those involved multiplied by the ambiguity of the available evidence, so that a rumor should die out if either term approaches zero. A fad is a novel behavior that is adopted enthusiastically by many people and then quickly abandoned. In mass hysteria, people respond to a real or imagined event with anxiety or even bodily symptoms that have no identifiable physical cause, as when students at one school report nausea after noticing an unfamiliar odor that investigators later find to be harmless. A panic is uncoordinated, self-protective action in response to a perceived immediate threat, such as depositors rushing to withdraw their savings from a bank. In a moral panic, a condition or group comes to be defined as a threat to social values; media coverage and public officials amplify concern to a level far out of proportion to the measurable harm.\n\nSociologists have also sought general explanations of long-term social change. Modernization theory, prominent in the mid-twentieth century, holds that societies move through broadly similar stages as they industrialize. Kinship and tradition give way to specialized institutions, formal education, and bureaucratic administration; populations shift from villages to cities; and religious authority recedes from public life. On this view, societies that industrialize later are expected to come to resemble those that industrialized first. Critics object that the theory treats one region’s history as a universal template, and that it attributes persistent poverty to a society’s internal traditions while overlooking the unequal economic relationships that tie poorer societies to wealthier ones.',
    questions: [
      {
        question:
          'Police records show that most of those arrested after a riot at a football match had traveled to the city together, had exchanged messages beforehand about confronting rival supporters, and had prior arrests for similar conduct. These records give the strongest support to:',
        options: [
          'contagion theory, because the arrests followed an emotionally charged event.',
          'convergence theory, because the offenders arrived already inclined to fight.',
          'emergent-norm theory, because the offenders were unsure how they should act.',
          'contagion theory, because the offenders were strangers to one another.',
        ],
        correctAnswer: 1,
        explanation:
          'Shared histories of similar offenses and advance talk of confrontation indicate that the rioters brought their dispositions with them, which is the claim of convergence theory: the crowd gathered like-minded people rather than changing them. Contagion theory would be supported by evidence that ordinary spectators were swept up by spreading emotion, and an emotionally charged setting alone does not show that. The offenders knew one another and had traveled together, so anonymity among strangers is contradicted. Emergent-norm theory requires uncertainty resolved on the spot, whereas these offenders had settled on their conduct beforehand.',
        skill: '9A crowd theories (application)',
      },
      {
        question:
          'A hospital announces that an unspecified “reorganization” will take place within the year, and a rumor that the pediatric unit will close spreads among the staff. According to the proposal of Allport and Postman, which response by administrators would most effectively weaken the rumor?',
        options: [
          'Asking supervisors to discourage staff from discussing the reorganization at work',
          'Reminding staff that the reorganization will shape the future of every unit',
          'Identifying and reprimanding the employees who first repeated the rumor',
          'Stating which units will be affected and what will happen to them',
        ],
        correctAnswer: 3,
        explanation:
          'In the proposal, rumor intensity is the product of importance and ambiguity, so removing ambiguity by giving specific, verifiable information drives the product toward zero even though the topic remains important. Discouraging discussion changes neither term and leaves staff with the same unanswered questions. Stressing that every unit’s future is at stake raises importance while leaving ambiguity intact, which should intensify the rumor. Punishing the first tellers addresses the source rather than the conditions that make the rumor worth repeating.',
        skill: '9A rumor (applying a model)',
      },
      {
        question:
          'After two assaults by teenagers receive national coverage, commentators describe an “epidemic” of youth violence and a legislature imposes a curfew on minors, although police data show that youth violence has declined for a decade. This sequence is best described as:',
        options: [
          'a panic, because people acted suddenly to escape an immediate danger.',
          'mass hysteria, because people developed symptoms without a physical cause.',
          'a moral panic, because alarm about a group far exceeded the documented harm.',
          'a social movement, because people organized to pursue a defined goal.',
        ],
        correctAnswer: 2,
        explanation:
          'Teenagers were cast as a threat, the media and officials magnified the concern, and the reaction was disproportionate to a problem that the data show was shrinking; these are the defining features of a moral panic. A panic is uncoordinated flight or self-protection in the face of an immediate threat, not a legislative response. Mass hysteria involves anxiety or bodily symptoms spreading through a group, and no symptoms are described. A social movement is a sustained, organized effort, whereas this was a brief burst of amplified concern.',
        skill: '9A forms of collective behavior: moral panic',
      },
      {
        question: 'Which observation would most directly challenge modernization theory as it is described in the passage?',
        options: [
          'Societies that industrialized recently have kept strong religious authority and kin-run firms.',
          'Societies that industrialized early saw large migrations from villages to factory towns.',
          'Societies with little industry have most of their workers employed in family agriculture.',
          'Societies now industrializing show rapid growth in schooling and in state bureaucracy.',
        ],
        correctAnswer: 0,
        explanation:
          'Modernization theory predicts that late industrializers will come to resemble early ones, with kinship giving way to specialized institutions and religion receding from public life; industrial societies that retain kin-based firms and strong religious authority show that there is more than one path, which undercuts the claim of common stages. Migration to factory towns in early industrializers is the urbanization the theory describes. Agricultural, family-based work in societies with little industry matches its picture of the traditional starting point. Growth of schooling and bureaucracy during industrialization is exactly what it expects.',
        skill: '9B modernization theory (evaluating evidence)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASIS — testosterone & status, oxytocin & bonding
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Testosterone, Oxytocin, and Social Behavior',
    passageText:
      'Hormones influence behavior more slowly than neurotransmitters do, but their effects can last far longer. Behavioral endocrinologists distinguish two kinds of hormonal influence. Organizational effects occur during sensitive periods of development, when a hormone shapes the structure of neural circuits; such effects persist long after the hormone is gone. Activational effects are reversible changes in behavior that appear while a hormone is present in the mature animal and disappear when it is removed.\n\nTestosterone, a steroid synthesized from cholesterol, is secreted mainly by the testes and in smaller amounts by the ovaries and the adrenal cortex. In many vertebrate species, males castrated in adulthood fight less often, and injections of testosterone restore fighting. Findings in humans are less tidy. Across many studies, a person’s resting testosterone concentration is only weakly correlated with measures of aggression, and the relationship runs in both directions. Among athletes, testosterone rises shortly before a contest; afterward it remains elevated in winners and declines in losers. These changes do not require physical exertion, since they occur in chess players as well as in wrestlers. Many researchers therefore link testosterone less to aggression itself than to the pursuit and defense of social status, of which aggression is only one possible expression.\n\nOxytocin is a peptide of nine amino acids produced by neurons in the hypothalamus. Axons of these neurons release it into the bloodstream from the posterior pituitary, and it acts on the uterus during labor and on the mammary glands during nursing. Other axons from the same hypothalamic nuclei release oxytocin within the brain, where it acts as a neuromodulator.\n\nThe clearest evidence that oxytocin affects social attachment comes from voles. Prairie voles form lasting pair bonds after mating: each animal subsequently prefers its partner to a stranger. Closely related montane voles mate without forming such preferences. The two species produce similar amounts of oxytocin, but in prairie voles oxytocin receptors are dense in the nucleus accumbens, a region of the reward circuit, whereas in montane voles they are sparse there. Infusing oxytocin into the brain of a female prairie vole produces a partner preference even without mating, and a drug that blocks oxytocin receptors prevents the preference that normally follows mating. In males, the related peptide vasopressin plays a comparable role.\n\nHuman studies typically deliver oxytocin by nasal spray and compare its effects with those of a placebo spray. In games played for money, participants given oxytocin entrust larger sums to a partner. The popular description of oxytocin as a “love hormone” is nonetheless too simple. In studies that assign participants to teams, oxytocin increases cooperation with teammates and favoritism toward them but does not increase generosity toward members of the other team, and under threat it can increase defensive action against them. Oxytocin appears to heighten the importance of existing social ties rather than to produce goodwill in general.',
    questions: [
      {
        question:
          'A study finds that men imprisoned for violent offenses have higher mean testosterone than men imprisoned for nonviolent offenses, and its authors conclude that high testosterone causes violent behavior. Based on the passage, the most serious objection to this conclusion is that:',
        options: [
          'testosterone is also secreted by the adrenal cortex, so the measurements cannot be traced to the testes.',
          'testosterone acts on behavior only during early development, so adult concentrations are beside the point.',
          'testosterone changes with physical exertion, so the violent group may simply have been more active.',
          'a history of confrontations and contests for status may itself have raised testosterone in the violent group.',
        ],
        correctAnswer: 3,
        explanation:
          'The passage shows that testosterone responds to social experience, rising before contests and staying high after wins, so a group with more confrontations in its past and present could have higher concentrations as a result of its behavior rather than as the cause of it. The gland that supplied the hormone does not affect whether the hormone causes violence. Castration and replacement in adult animals show that testosterone has activational effects in maturity, so adult concentrations are not irrelevant. The contest-related changes occur in chess players too, so exertion is not what drives them, and nothing indicates the groups differed in activity.',
        skill: '6A testosterone and aggression: direction of causation',
      },
      {
        question: 'Given the chemical classes of the two hormones described in the passage, testosterone is more likely than oxytocin to:',
        options: [
          'bind receptors on the cell surface and act through second messengers.',
          'bind receptors inside the cell and act by altering gene transcription.',
          'be stored in vesicles and released from axon terminals on demand.',
          'be broken down within seconds and act only close to its site of release.',
        ],
        correctAnswer: 1,
        explanation:
          'Steroids are lipid soluble, so testosterone diffuses across the plasma membrane, binds an intracellular receptor, and the hormone–receptor complex regulates transcription, which is why steroid effects are slow in onset and long lasting. Peptides such as oxytocin cannot cross the membrane and instead bind surface receptors coupled to second messengers. Peptides, not steroids, are packaged in vesicles and released from terminals; steroids are made on demand and diffuse out of the cell. Steroids travel bound to carrier proteins and persist far longer than seconds.',
        skill: '6A steroid vs peptide hormone action',
      },
      {
        question:
          'Which additional finding would most strengthen the conclusion that the difference in pair bonding between the two vole species results from where oxytocin receptors are located?',
        options: [
          'Montane voles engineered to express more accumbens receptors form partner preferences.',
          'Prairie voles given a receptor blocker before mating fail to form partner preferences.',
          'Prairie voles release more oxytocin during mating than during other social contact.',
          'Montane voles have lower blood oxytocin concentrations than prairie voles after mating.',
        ],
        correctAnswer: 0,
        explanation:
          'If adding receptors to the accumbens of the non-bonding species is enough to produce bonding, then receptor location is what separates the species, which is the conclusion at issue. Blocking receptors in prairie voles shows that oxytocin signaling is necessary in that species but says nothing about why montane voles differ. Greater release during mating describes when the hormone is secreted within one species, not a difference between species. Lower hormone concentrations in montane voles would point to the amount of hormone rather than to receptor location as the explanation.',
        skill: '6A oxytocin and pair bonding (evaluating evidence)',
      },
      {
        question:
          'Members of two rival sports clubs receive either oxytocin or a placebo by nasal spray and then decide how much money to share with a member of their own club and with a member of the rival club. Based on the passage, oxytocin would most likely:',
        options: [
          'increase sharing with both recipients by about the same amount.',
          'increase sharing with the rival more than with the fellow member.',
          'increase sharing with the fellow member but not with the rival.',
          'decrease sharing with both recipients by about the same amount.',
        ],
        correctAnswer: 2,
        explanation:
          'The team studies described in the passage indicate that oxytocin strengthens behavior toward people with whom a tie already exists, so sharing should rise for the fellow club member while the rival gains nothing. An equal rise for both recipients is what the “love hormone” label would predict, and the passage rejects that description. A larger rise for the rival reverses the reported favoritism toward one’s own side. An overall decrease conflicts with the finding that oxytocin raises the sums entrusted to partners.',
        skill: '6A oxytocin and in-group behavior (application)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — repeated prisoner's dilemma, conditional cooperation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Repeated Choices in a Two-Person Dilemma',
    passageText:
      'A social dilemma is a situation in which the choice that pays each individual best, if made by everyone, leaves all of them worse off than a different choice would have. The best-studied laboratory version is the prisoner’s dilemma. In each round, two players choose privately and simultaneously between two options, conventionally labeled cooperate and defect. In the version used here, each player earned 3 points if both cooperated and 1 point if both defected; if only one player defected, the defector earned 5 points and the cooperator earned nothing.\n\nResearchers recruited 160 undergraduates for a study described as an investigation of decision making. Each participant sat alone at a computer and was told that a student in another room would be the other player for 20 rounds and that points would be exchanged for money at the end of the session. After each round the screen showed both players’ choices and the points earned. In fact there was no other student. Each participant was randomly assigned to play against one of four programs (n = 40 each). The always-cooperate program cooperated on every round, and the always-defect program defected on every round. The tit-for-tat program cooperated on round 1 and thereafter made whatever choice the participant had made on the preceding round. The random program cooperated or defected with equal probability on each round, regardless of what the participant had done.\n\nAfter round 20, participants rated how much they had trusted the other player on a scale from 1 (not at all) to 7 (completely). They were then told about the programs and the reason for the deception. Table 1 shows the percentage of participants’ choices that were cooperative in the first five and the last five rounds, together with the mean trust ratings.\n\nIn a follow-up study, 80 new participants all played against the tit-for-tat program. Half were told, as in the original study, that the game would last exactly 20 rounds. The other half were told that the game would stop at a point chosen by the computer, and it was in fact stopped after round 20. On round 20, 44% of the participants who knew the length of the game cooperated, compared with 79% of those who did not.\n\nThe researchers noted that cooperation in everyday life usually occurs between people who expect to deal with each other again, and they proposed that such expectations, more than any general willingness to trust, are what keep cooperation going between parties whose interests partly conflict.',
    figure:
      '**Table 1. Participants’ cooperative choices and trust ratings, by the program they played against (n = 40 per program)**\n\n| Program | Cooperative choices, rounds 1–5 (%) | Cooperative choices, rounds 16–20 (%) | Mean trust rating (1–7) |\n|---|---|---|---|\n| Always cooperate | 62 | 45 | 5.9 |\n| Always defect | 58 | 8 | 1.6 |\n| Tit-for-tat | 60 | 74 | 5.4 |\n| Random | 61 | 30 | 2.8 |',
    questions: [
      {
        question: 'Which conclusion is best supported by Table 1?',
        options: [
          'Lasting cooperation required a partner whose cooperation depended on the participant’s own choices.',
          'Participants cooperated most in the late rounds with the partner they rated as most trustworthy.',
          'Participants cooperated more in the early rounds with partners who went on to reciprocate.',
          'Lasting cooperation required only a partner who cooperated on a large share of the rounds.',
        ],
        correctAnswer: 0,
        explanation:
          'Cooperation rose over the game only against tit-for-tat (60% to 74%), the one program whose choices were contingent on the participant’s; against a partner who cooperated unconditionally it fell from 62% to 45%. The most trusted partner was the always-cooperate program (5.9), yet late cooperation with it was well below the tit-for-tat value, so trust ratings did not track late cooperation. Early-round cooperation was nearly identical (58–62%) across programs, as it must be before participants could learn the partner’s rule. The always-cooperate program cooperated on every round and still did not sustain cooperation, so frequency alone was not enough.',
        skill: '8C data interpretation: conditional cooperation',
      },
      {
        question:
          'Suppose a participant cares only about her own points and is certain that the current round is the only one that will be played. Given the payoffs described in the passage, she should:',
        options: [
          'cooperate, because mutual cooperation pays more than mutual defection.',
          'cooperate if she expects cooperation and defect if she expects defection.',
          'defect, because defecting pays her more whichever choice the other makes.',
          'defect only if she expects the other player to cooperate on that round.',
        ],
        correctAnswer: 2,
        explanation:
          'If the other player cooperates, she earns 5 by defecting rather than 3 by cooperating; if the other defects, she earns 1 by defecting rather than 0 by cooperating. Defection is better for her in both cases, which is what makes the situation a dilemma. Mutual cooperation does beat mutual defection, but she cannot secure it by her own choice and would still gain by defecting from it. Matching the expected choice gives up 2 points when the other cooperates. Defecting only against a cooperator gives up 1 point when the other defects.',
        skill: '8C prisoner’s dilemma payoff reasoning',
      },
      {
        question:
          'The difference between the two groups in the follow-up study is best explained by the fact that participants who knew the length of the game:',
        options: [
          'had come to trust the other player less over the preceding rounds.',
          'could defect on the last round without risk of later retaliation.',
          'had earned fewer points and were trying to recover them at the end.',
          'were more likely to suspect that the other player was a program.',
        ],
        correctAnswer: 1,
        explanation:
          'Tit-for-tat punishes a defection on the following round, so defection is costly only when there is a following round; participants who knew that round 20 was the last could take the 5-point payoff with nothing to fear, whereas those who thought the game might continue still had a reason to cooperate. Both groups faced the same program for the same rounds, so their experience of the partner, and hence their trust and their accumulated points, should not have differed before round 20. Knowing the number of rounds gives no additional reason to suspect a program.',
        skill: '8C repeated interaction and cooperation (reasoning)',
      },
      {
        question:
          'Given the payoffs described in the passage and the data in Table 1, the mean number of points that participants earned per round in rounds 16–20 against the always-cooperate program was closest to:',
        options: ['1.9', '3.0', '3.9', '4.1'],
        correctAnswer: 3,
        explanation:
          'This program cooperated on every round, so a participant earned 3 points on each round in which she cooperated and 5 points on each round in which she defected. Participants cooperated on 45% of these rounds and defected on 55%, giving 0.45 × 3 + 0.55 × 5 = 1.35 + 2.75 = 4.1 points per round. A value of 1.9 wrongly assigns the mutual-defection payoff of 1 point to the rounds on which participants defected, although the program was still cooperating. A value of 3.0 assumes that participants always cooperated. A value of 3.9 comes from reversing the two percentages (0.55 × 3 + 0.45 × 5).',
        skill: '8C data interpretation: expected payoff from a table',
      },
      {
        question: 'Which situation outside the laboratory has the incentive structure that defines a social dilemma?',
        options: [
          'Two firms bid for a single contract, and whatever one of them wins the other must lose.',
          'Two coworkers each prefer the same meeting time, and both gain by choosing it.',
          'Two fishing crews each profit by exceeding a quota, but both lose if the stock collapses.',
          'Two farmers trade surplus crops, and each ends up better off than before the exchange.',
        ],
        correctAnswer: 2,
        explanation:
          'Each crew does better by overfishing whatever the other does, yet if both overfish the stock collapses and both end up worse off than if both had held back, which is the same structure as the game. Rival bidders are in pure competition: no outcome exists that is better for both, so there is nothing to cooperate on. Coworkers who want the same meeting time have no temptation to do otherwise. A voluntary trade that benefits both parties likewise involves no conflict between individual and joint interest.',
        skill: '8C social dilemmas (concept)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LEARNING & MEMORY — testing effect and spaced practice
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Restudy, Retrieval, and Spacing Over Four Weeks',
    passageText:
      'Students commonly prepare for examinations by rereading, a method that feels effective because the material becomes more familiar with each pass. Laboratory research suggests that attempting to recall material can benefit later memory more than reading it again, a finding known as the testing effect, and that practice distributed over time is retained better than the same amount of practice massed into one sitting, a finding known as the spacing effect. Researchers examined both effects in a single study.\n\nA total of 300 undergraduates learned 40 Lithuanian–English word pairs (for example, *namas*–house). All participants completed four training periods of 10 minutes each and were randomly assigned to one of three training conditions. In the massed-restudy condition, all four periods took place in one session, and in every period each pair was shown in full for study. In the massed-retrieval condition, all four periods also took place in one session; the first was a study period, and in the remaining three each Lithuanian word was shown alone, the participant typed the English word if possible, and the correct pair was then displayed. The spaced-retrieval condition used the same sequence of one study period followed by three retrieval periods, but the four periods were held on separate days, each 2 days after the one before. During the retrieval periods, the massed-retrieval group answered 88% of items correctly on average, and the spaced-retrieval group answered 64% correctly.\n\nAt the end of the final training period, participants estimated the percentage of the pairs they would be able to recall 1 week later. Mean estimates were 71% in the massed-restudy group, 56% in the massed-retrieval group, and 54% in the spaced-retrieval group.\n\nWithin each training condition, participants were then randomly divided into five subgroups of 20, and each subgroup took a single final test at one retention interval: 5 minutes, or 1, 2, 3, or 4 weeks after the end of training. On the final test, each Lithuanian word was shown alone and participants typed the English word; no answers were displayed. No participant took more than one final test. Mean final-test scores are shown in Figure 1, in which the 5-minute test is plotted at week 0.\n\nIn a questionnaire completed after the final test, most participants in all three conditions reported that, when studying for their own courses, they reread their notes far more often than they tested themselves. The researchers discussed what their results imply for students who choose study methods according to their own sense of how well they know the material.',
    chart: {
      title: 'Figure 1. Mean percentage of word pairs recalled on the final test, by training condition and retention interval (week 0 = 5 minutes after training)',
      kind: 'line',
      xLabel: 'Retention interval',
      xUnit: 'weeks',
      yLabel: 'Pairs recalled',
      yUnit: '%',
      xValues: [0, 1, 2, 3, 4],
      yValues: [82, 48, 36, 30, 27],
      seriesLabel: 'Massed restudy',
      comparisonSeries: [
        { label: 'Massed retrieval', yValues: [74, 60, 52, 47, 44] },
        { label: 'Spaced retrieval', yValues: [70, 66, 63, 61, 60] },
      ],
    },
    questions: [
      {
        question: 'Comparing the participants’ estimates with Figure 1, which statement is accurate?',
        options: [
          'All three groups overestimated their recall at 1 week.',
          'Only the massed-restudy group overestimated its recall at 1 week.',
          'Only the spaced-retrieval group overestimated its recall at 1 week.',
          'All three groups underestimated their recall at 1 week.',
        ],
        correctAnswer: 1,
        explanation:
          'At 1 week the massed-restudy group recalled 48% after predicting 71%, an overestimate of 23 points, whereas the massed-retrieval group recalled 60% after predicting 56% and the spaced-retrieval group recalled 66% after predicting 54%, so both retrieval groups did better than they expected. Because two groups underestimated, it is not true that all three overestimated. The spaced-retrieval group’s error was the largest underestimate, not an overestimate. Because the restudy group overestimated, it is not true that all three underestimated.',
        skill: '6B data interpretation: predicted vs actual retention',
      },
      {
        question: 'The rule that no participant took more than one final test was most important because it:',
        options: [
          'equalized the total time that the three groups spent with the word pairs.',
          'kept participants from learning which training condition they were in.',
          'ensured that every retention interval was sampled within each participant.',
          'kept an earlier final test from acting as added retrieval practice.',
        ],
        correctAnswer: 3,
        explanation:
          'A final test is itself an act of retrieval, so a participant tested at week 1 and again at week 2 would bring extra retrieval practice to the later test; that would contaminate the later scores and would give the restudy group the very treatment it was meant to lack. Total training time was equalized by the four 10-minute periods, not by the testing rule. Participants necessarily knew whether they had studied or been tested during training. Testing each person once means that intervals were compared between participants, the opposite of sampling every interval within each participant.',
        skill: '6B research design: avoiding repeated-testing contamination',
      },
      {
        question: 'Which statement best reconciles the week-0 scores in Figure 1 with the scores at later intervals?',
        options: [
          'Restudy raised immediate accessibility, whereas retrieval practice slowed the later rate of forgetting.',
          'Restudy and retrieval practice produced equal learning, but the restudy group later lost motivation.',
          'Retrieval practice raised immediate accessibility, whereas restudy slowed the later rate of forgetting.',
          'Retrieval practice produced more learning at every interval, and its advantage grew over the weeks.',
        ],
        correctAnswer: 0,
        explanation:
          'At 5 minutes the massed-restudy group scored highest (82% versus 74% and 70%), but it then lost more than half of what it could recall, while the retrieval groups declined far less; restudy therefore made the pairs highly available in the short term without protecting them from forgetting. Motivation is not measured, and each subgroup was tested only once, so a loss of motivation over repeated testing cannot be involved. The reversed statement contradicts both ends of the figure. Retrieval practice did not produce more recall at every interval, because the restudy group led at week 0.',
        skill: '6B testing effect (reasoning from data)',
      },
      {
        question:
          'The spaced-retrieval group answered fewer items correctly during training than the massed-retrieval group did, yet it recalled more at every interval from 1 to 4 weeks. Taken together, these results most strongly suggest that:',
        options: [
          'performance during training is a dependable guide to how much will be retained.',
          'retrieval attempts that fail during training weaken memory for the items involved.',
          'retrieval that demands more effort during training yields more durable memory.',
          'spacing is beneficial only because it adds to the total time spent on the material.',
        ],
        correctAnswer: 2,
        explanation:
          'With 2 days between periods, some forgetting occurred before each retrieval attempt, which made retrieval harder (64% versus 88% correct) but left memories that survived better; the pattern indicates that difficulty during practice can enhance long-term retention. If training performance were a dependable guide, the massed-retrieval group would have retained more. If failed attempts weakened memory, the group with more failures would have retained less. Total training time was 40 minutes in every condition, so added time cannot be the source of the advantage.',
        skill: '6B spacing effect (reasoning)',
      },
    ],
  },
]

export const FL6_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-ps-a-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A child with a rare inherited condition detects light touch and vibration normally, can tell a warm object from a cool one, and reports limb position accurately with eyes closed, yet does not react to cuts, fractures, or scalding water. Which class of receptor is most likely nonfunctional?',
    options: [
      'Mechanoreceptors, which respond to pressure and to deformation of the skin',
      'Thermoreceptors, which respond to moderate changes in skin temperature',
      'Proprioceptors, which respond to muscle stretch and to joint position',
      'Nociceptors, which respond to stimuli intense enough to damage tissue',
    ],
    correctAnswer: 3,
    explanation:
      'Cuts, fractures, and scalding are tissue-damaging mechanical and thermal stimuli, and they are signaled by nociceptors, the free nerve endings that give rise to pain; losing them abolishes protective reactions while leaving other senses intact. Mechanoreceptors are working, because touch and vibration are normal. Thermoreceptors signal innocuous warmth and coolness, which the child still discriminates; scalding heat is detected by nociceptors. Proprioceptors are working, because the child reports limb position accurately.',
    skill: '6A somatosensory receptor types',
  },
  {
    id: 'fl6-ps-a-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'In a two-compartment box, a tone sounds 5 seconds before the floor of the rat’s compartment is electrified. Early in training the rat crosses to the other compartment only after the shock begins. Later it crosses as soon as the tone sounds and receives no shock. The rat’s later behavior is an example of:',
    options: [
      'escape learning, which is maintained by positive reinforcement.',
      'avoidance learning, which is maintained by negative reinforcement.',
      'escape learning, which is maintained by negative reinforcement.',
      'avoidance learning, which is maintained by positive reinforcement.',
    ],
    correctAnswer: 1,
    explanation:
      'Responding to the warning signal so that the aversive event never occurs is avoidance, and the response is strengthened because it prevents or removes something unpleasant, which is negative reinforcement. Escape describes the early trials, in which the rat ended a shock that had already begun; escape is also negatively reinforced, so pairing it with positive reinforcement is wrong on both counts. Positive reinforcement of avoidance would require that something desirable be delivered after crossing, and the only consequence of crossing is the absence of shock.',
    skill: '7A escape vs avoidance learning',
  },
  {
    id: 'fl6-ps-a-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A child watches a puppet place a marble in a basket and leave the room. A second puppet moves the marble to a box. Asked where the first puppet will look for the marble on returning, most 3-year-olds say “the box,” and most 5-year-olds say “the basket.” The older children’s answer reflects the development of:',
    options: [
      'object permanence, the understanding that hidden objects continue to exist.',
      'conservation, the understanding that quantity survives changes in appearance.',
      'theory of mind, the understanding that others can hold beliefs that are false.',
      'seriation, the ability to arrange objects in order along a single dimension.',
    ],
    correctAnswer: 2,
    explanation:
      'To answer “the basket,” a child must represent what the puppet believes separately from what the child knows to be true, which is the capacity called theory of mind; younger children answer from their own knowledge. Object permanence is established in infancy, and both age groups know the marble still exists. Conservation concerns quantity across transformations such as pouring, and no quantity is changed. Seriation concerns ordering objects by a property such as length, which the task does not require.',
    skill: '6B theory of mind (false-belief reasoning)',
  },
  {
    id: 'fl6-ps-a-d04',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'Eysenck proposed that the trait of extraversion has a biological basis in the activity of the brain’s arousal systems. According to his theory, compared with extraverts, introverts tend to:',
    options: [
      'prefer quieter settings, because their baseline cortical arousal is higher.',
      'prefer livelier settings, because their baseline cortical arousal is higher.',
      'prefer quieter settings, because their baseline cortical arousal is lower.',
      'prefer livelier settings, because their baseline cortical arousal is lower.',
    ],
    correctAnswer: 0,
    explanation:
      'Eysenck held that introverts have a higher resting level of cortical arousal, so modest stimulation brings them to or past their optimum and they seek calmer surroundings, whereas extraverts, with lower resting arousal, seek stimulation to reach theirs. Higher arousal paired with a preference for livelier settings would push introverts further past their optimum. The two options that give introverts lower arousal reverse the theory’s central claim; lower arousal with a preference for livelier settings describes the extravert.',
    skill: '7A biological trait theory (Eysenck)',
  },
  {
    id: 'fl6-ps-a-d05',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'Two patients have poorly controlled type 2 diabetes. Patient 1 says, “My numbers depend on what I eat and how much I walk.” Patient 2 says, “It runs in my family; whatever happens will happen.” Which patient is more likely to follow a self-management plan, and how is that patient’s outlook best described?',
    options: [
      'Patient 2, who shows an internal locus of control',
      'Patient 1, who shows an external locus of control',
      'Patient 2, who shows an external locus of control',
      'Patient 1, who shows an internal locus of control',
    ],
    correctAnswer: 3,
    explanation:
      'Patient 1 attributes outcomes to his own actions, which is an internal locus of control, and people who believe their behavior determines their outcomes are more likely to act on a plan that depends on that behavior. Patient 2 attributes outcomes to heredity and fate, an external locus of control, which predicts poorer adherence; calling that outlook internal mislabels it. Calling Patient 1’s outlook external likewise mislabels it, since he places control in his own conduct.',
    skill: '7A locus of control',
  },
  {
    id: 'fl6-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In one country, women headed 24% of all households in both 1980 and 2020, but the share of poor households that were headed by women rose from 30% to 52% over the same period. Sociologists would most likely describe this change as:',
    options: [
      'the glass ceiling, since women are being kept out of the highest-paid positions.',
      'the feminization of poverty, since women are a growing share of the poor.',
      'absolute poverty, since the households lack the resources to meet basic needs.',
      'occupational segregation, since women are concentrated in lower-paid fields.',
    ],
    correctAnswer: 1,
    explanation:
      'Women’s share of all households was constant while their share of poor households nearly doubled, so poverty became increasingly concentrated among women and the households they head, which is what the feminization of poverty denotes. The glass ceiling refers to barriers to advancement into top positions, which the figures do not address. Absolute poverty is a standard for deciding who is poor, not a description of a shift in who the poor are. Occupational segregation may contribute to the trend, but it names a pattern in the labor market rather than the change in the composition of the poor.',
    skill: '10A feminization of poverty',
  },
  {
    id: 'fl6-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a remote farming village, every family raises the same crops, attends the same place of worship, and responds to rule-breaking with severe public punishment. In Durkheim’s analysis, the cohesion of this village rests mainly on:',
    options: [
      'mechanical solidarity, which arises from shared beliefs and similar ways of life.',
      'organic solidarity, which arises from shared beliefs and similar ways of life.',
      'mechanical solidarity, which arises from interdependence among specialized roles.',
      'organic solidarity, which arises from interdependence among specialized roles.',
    ],
    correctAnswer: 0,
    explanation:
      'Where members do the same work and hold the same beliefs, cohesion comes from likeness and a strong collective conscience, enforced by harsh punishment of deviance; Durkheim called this mechanical solidarity. Organic solidarity based on interdependence among specialized roles is correctly defined but belongs to societies with a complex division of labor, which the village lacks. The remaining two options attach each term to the other’s definition.',
    skill: '9A mechanical vs organic solidarity',
  },
  {
    id: 'fl6-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In one society a 15-year-old is regarded as an adult who may marry and work full time. In another, a person of the same age is regarded as a child who is legally barred from both. This contrast best illustrates the idea that:',
    options: [
      'age categories are ascribed statuses that are fixed by biological maturation.',
      'age categories are items of material culture handed down across generations.',
      'age categories are meanings created and upheld by social agreement.',
      'age categories are manifest functions of the institution of the family.',
    ],
    correctAnswer: 2,
    explanation:
      'The same biological age carries different rights and expectations in the two societies, so “child” and “adult” are not given by nature but are defined, taught, and enforced by each society, which is what is meant by the social construction of reality. If maturation fixed the categories, they would not differ between societies. Material culture consists of physical objects, whereas categories are nonmaterial. A manifest function is an intended consequence of an institution, not a shared definition of who counts as a child.',
    skill: '9A social construction of reality',
  },
]
