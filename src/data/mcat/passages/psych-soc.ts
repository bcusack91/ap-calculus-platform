/**
 * MCAT Psychological, Social, & Biological Foundations of Behavior (Psych/Soc).
 *
 * Seven passages spanning the section's real composition (~65% psychology,
 * ~30% sociology, ~5% biology of behavior) plus six discrete items. Most
 * passages describe a study with a results table, mirroring the heavily
 * data-driven design of the real Psych/Soc section.
 *
 * Definitions, named theories, and theorists were checked for precision
 * (e.g. assimilation vs. accommodation, the attribution types, the
 * neurotransmitter/HPA biology). Keys stand behind their reasoning; only
 * genuinely contestable items carry needsReview.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const PSYCH_SOC_PASSAGES: MCATPassage[] = [
  // (1) Learning / memory study with a results table
  {
    id: 'ps-learnmem-01',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Spacing, Testing, and Long-Term Retention',
    passageText:
      'Researchers examined how the scheduling of study influences durable memory for vocabulary. Undergraduates (N = 160) learned 40 foreign-language word pairs across two sessions and were assigned to one of four conditions that crossed two factors: study schedule (massed, in which the two sessions occurred back-to-back, vs. spaced, in which the sessions were separated by 24 hours) and second-session activity (restudy, in which participants reread the pairs, vs. retrieval practice, in which participants attempted to recall each translation before seeing the answer).\n\nAll participants returned one week later for a cued-recall final test in which they were shown each foreign word and asked to produce its English translation. No feedback was given on the final test. The researchers reasoned that retrieval practice should strengthen later recall more than passive restudy (the testing effect), and that distributing study across time should produce better retention than cramming (the spacing effect). They further predicted that the two manipulations would combine additively.\n\nA potential concern was that participants in the retrieval-practice conditions, who experienced the difficulty of effortful recall during learning, might judge their own learning as poorer and therefore disengage. To probe this, immediately after the second session every participant predicted the percentage of items they expected to recall one week later (a judgment of learning, or JOL). The researchers compared these predictions with actual final-test performance.',
    chart: {
      title: 'Figure 1. Predicted (JOL) vs. actual cued-recall one week after learning, by condition',
      kind: 'bar',
      xLabel: 'Study condition',
      yLabel: 'Recall (% of 40 pairs)',
      yUnit: '%',
      seriesLabel: 'Predicted recall (JOL)',
      xValues: ['Massed + restudy', 'Massed + retrieval', 'Spaced + restudy', 'Spaced + retrieval'],
      yValues: [58, 42, 55, 47],
      comparisonSeries: [{ label: 'Actual recall', yValues: [31, 48, 44, 61] }],
      annotations: [{ xIndex: 3, label: 'highest actual recall' }],
    },
    questions: [
      {
        question:
          'The pattern in which spaced + retrieval produced the highest actual recall while spaced + restudy and massed + retrieval each produced intermediate recall best supports which of the study’s predictions?',
        options: [
          'That only retrieval practice, not spacing, improves retention',
          'That massing study improves retention when combined with restudy',
          'That JOLs accurately track final performance',
          'That spacing and retrieval practice each independently improve retention'],
        correctAnswer: 3,
        explanation:
          'Moving from massed+restudy (31%) to either spaced+restudy (44%) or massed+retrieval (48%) raises recall, and combining both yields the highest (61%). This shows each manipulation independently helps—the spacing effect and the testing effect both operate. Claiming only retrieval matters fails because spacing alone (spaced+restudy, 44%) beat massed+restudy (31%); claiming massed practice was best contradicts the data (massed+restudy was lowest); and claiming learners judged their memory accurately is contradicted by the JOL/actual mismatch.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'The improved retention from attempting to recall translations before seeing answers, relative to simply rereading them, is best termed the:',
        options: [ 'Misinformation effect','Spacing effect', 'Testing effect', 'Serial position effect'],
        correctAnswer: 2,
        explanation:
          'The testing effect (retrieval practice effect) is the finding that actively retrieving information strengthens later memory more than additional passive study. The spacing effect concerns distributing study over time (the other factor here). The serial position effect concerns recall advantages for items at the beginning/end of a list. The misinformation effect concerns memory distortion by post-event information.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'Participants in the retrieval-practice conditions predicted LOWER recall than restudy participants yet actually recalled MORE. This dissociation most directly illustrates a failure of:',
        options: [
          'The availability heuristic',
          'Source monitoring',
          'Sensory (iconic) memory',
          'Metacognition'],
        correctAnswer: 3,
        explanation:
          'Judgments of learning are metacognitive—beliefs about one’s own learning. Because the effort of retrieval felt like poor learning, participants underpredicted their later recall, a metacognitive miscalibration (the "desirable difficulties" illusion). Sensory memory is the brief icon/echo store, irrelevant to week-long retention. The availability heuristic is about judging frequency by ease of recall, not predicting one’s own future memory. Source monitoring is attributing a memory to its origin.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'Which feature of the design most strengthens the claim that retrieval practice (not just extra exposure) caused better recall?',
        options: [
          'Both the restudy and retrieval-practice groups had equal opportunity to view the pairs across two sessions',
          'The final test gave no feedback',
          'Participants were undergraduates',
          'The retention interval was one week',
        ],
        correctAnswer: 0,
        explanation:
          'Restudy participants reread the pairs while retrieval participants tried to recall first, then saw the answer—so total exposure to the correct pairs is held roughly constant, isolating the act of retrieval as the manipulated variable. Withholding final-test feedback is appropriate but does not isolate the cause. C and D are features shared by all conditions and do not address the comparison.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'If the researchers had given the final test 5 minutes after learning instead of one week later, prior literature predicts that the advantage of retrieval practice over restudy would most likely:',
        options: [
          'Reverse, with restudy outperforming retrieval practice',
          'Disappear, with both methods performing identically and poorly',
          'Shrink or reverse, because the testing effect emerges mainly at delayed tests',
          'Grow even larger than at one week',
        ],
        correctAnswer: 2,
        explanation:
          'A robust finding is that restudy can match or exceed retrieval practice on immediate tests, with retrieval practice’s benefit appearing on delayed tests—the testing effect is largest after a delay. So at 5 minutes the advantage would shrink or reverse. Predicting poor immediate recall is wrong because immediate recall is typically high. A growing retrieval advantage at 5 minutes is the opposite of the established time course.',
        skill: 'experimental-reasoning',
        needsReview: false,
      },
    ],
  },

  // (2) Social psychology experiment with data
  {
    id: 'ps-socpsych-01',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Effort Justification and Group Initiation',
    passageText:
      'A classic line of research holds that when people freely choose to undergo an unpleasant experience to obtain a goal, they reduce the resulting discomfort by inflating the value of the goal—an effort-justification prediction derived from cognitive dissonance theory. To test this, investigators recruited volunteers (N = 90) who believed they were joining a discussion group on the psychology of relationships.\n\nTo gain admission, participants completed an "embarrassment screening." In the severe-initiation condition they read aloud sexually explicit material to a male experimenter; in the mild-initiation condition they read mildly suggestive words; in the control condition they were admitted without any screening. All participants were then randomly led to believe admission was earned and were asked to listen to the same recording of an actual group discussion, which had been designed to be dull and banal. Afterward, participants rated how interesting and worthwhile the discussion and its members were on a composite 0–100 attractiveness scale.\n\nThe investigators predicted that participants who suffered most to join would rate the group most favorably, because devaluing the group while acknowledging the suffering would create an uncomfortable inconsistency. Critically, the recording was identical across conditions, so any rating differences could not reflect real differences in the group. The researchers also recorded each participant’s self-reported anxiety during screening to check that the severe condition was in fact more aversive.',
    chart: {
      title: 'Figure 1. Mean rated group attractiveness and screening anxiety, by initiation condition',
      kind: 'bar',
      xLabel: 'Initiation condition',
      yLabel: 'Rating (0–100 scale)',
      seriesLabel: 'Group attractiveness',
      xValues: ['Control (none)', 'Mild', 'Severe'],
      yValues: [81, 80, 95],
      comparisonSeries: [{ label: 'Screening anxiety', yValues: [12, 38, 71] }],
      annotations: [{ xIndex: 2, label: 'value inflation appears only here' }],
    },
    questions: [
      {
        question:
          'The finding that severe-initiation participants rated the dull group MORE attractive than control or mild participants is best explained by:',
        options: [
          'The mere-exposure effect',
          'Social facilitation',
          'The fundamental attribution error',
          'Cognitive dissonance reduction (effort justification)'],
        correctAnswer: 3,
        explanation:
          'Effort justification follows from cognitive dissonance theory: having freely suffered to join, participants face dissonance between "I endured a lot" and "the group is boring," and resolve it by inflating the group’s value. Mere exposure would predict equal ratings since all heard the same recording once. Social facilitation concerns performance changes from others’ presence. The fundamental attribution error is about over-attributing others’ behavior to disposition.',
        skill: 'which-theory',
      },
      {
        question:
          'Including the screening-anxiety measure (control 12, mild 38, severe 71) primarily serves to:',
        options: [
          'Confound the independent variable with anxiety',
          'Demonstrate a manipulation check that the severe condition was more aversive',
          'Establish that the dependent variable was reliable',
          'Show a placebo effect'],
        correctAnswer: 1,
        explanation:
          'A manipulation check verifies that the independent variable (initiation severity) actually produced the intended difference in experience—here, that the severe condition was genuinely more aversive (anxiety rose 12 → 38 → 71). It is not a measure of the dependent variable’s reliability. There is no inert treatment, so no placebo. The anxiety differences are the intended effect of the manipulation, not a confound.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'For dissonance theory to apply, participants must perceive that they freely chose to undergo the screening. If the experimenter had instead ORDERED participants to endure the severe screening, dissonance theory predicts the inflated rating would:',
        options: [
          'Increase further, because the experience was still aversive',
          'Be weakened, because external coercion provides sufficient justification',
          'Be unchanged, because only the aversiveness matters',
          'Reverse, producing the lowest ratings',
        ],
        correctAnswer: 1,
        explanation:
          'Dissonance requires insufficient external justification plus perceived choice. If an authority orders the behavior, the coercion supplies an external explanation ("I had no choice"), so there is little dissonance to reduce and attitude change weakens. Aversiveness alone (C) is not sufficient—the cognitive inconsistency depends on freely choosing. A full reversal is not predicted.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'That the mild-initiation and control groups gave nearly identical ratings (80 vs. 81) while the severe group diverged sharply (95) suggests the value-inflation effect is:',
        options: [
          'Driven by the control group',
          'Linear with anxiety across all conditions',
          'Present only above a threshold of suffering, not a simple linear function of anxiety',
          'An artifact of the rating scale ceiling'],
        correctAnswer: 2,
        explanation:
          'Anxiety rose steadily (12 → 38 → 71) but attractiveness was flat from control to mild (81 → 80) and jumped only at the severe level (95). So the effect is not a simple linear function of anxiety; substantial dissonance/value inflation appears only once suffering is high enough. A is contradicted by the flat mild–control comparison. The top condition (95) is not at the 100 ceiling for all, and the control is the baseline, not the driver.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'A reviewer worries the severe group simply felt relieved the screening was over, biasing their ratings upward. The best control to address THIS alternative would be to:',
        options: [
          'Increase the sample size',
          'Use a within-subjects design',
          'Tell participants the true hypothesis',
          'Add a severe-screening group that rates an unrelated neutral object afterward'],
        correctAnswer: 3,
        explanation:
          'If post-screening relief produced a general positive glow, a severe group rating an unrelated object should also rate it high; if instead inflation is specific to the joined group, dissonance is supported. This directly tests the relief alternative. A larger N sharpens precision but not specificity. A within-subjects design risks demand and does not isolate relief. Revealing the hypothesis would introduce demand characteristics.',
        skill: 'experimental-reasoning',
        needsReview: false,
      },
    ],
  },

  // (3) Sociology — stratification / health disparities with a data table
  {
    id: 'ps-soc-01',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Socioeconomic Gradients in Health',
    passageText:
      'Sociologists studying health disparities document a "social gradient": across many outcomes, health improves at each step up the socioeconomic ladder, not merely between the poorest and everyone else. Researchers analyzed a national cohort, grouping adults into five quintiles by household income and recording self-rated poor health, smoking, and life expectancy at age 25.\n\nTwo competing explanations are debated. The social-causation hypothesis holds that low socioeconomic status (SES) causes poor health through material deprivation, chronic stress, and reduced access to care. The social-selection (or drift) hypothesis holds the reverse: people in poor health drift downward in SES because illness limits earnings and education. The researchers note both processes likely operate, but emphasize that the gradient persists even among adults who were healthy at baseline, and even in countries with universal health coverage—findings that strain a pure access-to-care account and point toward psychosocial pathways such as allostatic load.\n\nThe team also examined whether the gradient reflects absolute deprivation or relative position. Within wealthy nations, where even lower quintiles meet basic material needs, the gradient remained steep, consistent with the relative-income hypothesis that one’s rank in the status hierarchy—and the chronic stress of lower status—affects health independent of absolute resources. The authors situate these findings within the fundamental-cause framework, which argues that SES remains linked to mortality across eras because higher-SES individuals can deploy flexible resources (knowledge, money, power, beneficial social connections) to avoid whatever the current leading risks happen to be.',
    chart: {
      title: 'Figure 1. Health indicators by household income quintile (Q1 = lowest, Q5 = highest)',
      kind: 'line',
      xLabel: 'Household income quintile',
      yLabel: 'Indicator value',
      seriesLabel: 'Self-rated poor health (%)',
      xValues: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      yValues: [28, 21, 15, 10, 6],
      comparisonSeries: [
        { label: 'Current smokers (%)', yValues: [33, 27, 21, 16, 9] },
        { label: 'Life expectancy at 25 (+yr)', yValues: [48, 51, 54, 57, 60] },
      ],
    },
    questions: [
      {
        question:
          'The stepwise improvement in every indicator from Q1 through Q5—rather than a gap only between Q1 and the rest—is the defining feature of the:',
        options: ['Social gradient in health', 'Sick role', 'Medicalization of deviance', 'Demographic transition'],
        correctAnswer: 0,
        explanation:
          'A social gradient means health improves at each successive step up the SES hierarchy, exactly the monotonic Q1→Q5 pattern in all three columns. The sick role (Parsons) is a set of social expectations for ill people. Medicalization is reframing nonmedical problems as medical. The demographic transition describes population shifts from high to low birth/death rates with development.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The observation that the gradient persists among adults healthy at baseline most directly argues against which explanation?',
        options: [
          'The social-causation hypothesis',
          'The social-selection (drift) hypothesis',
          'The relative-income hypothesis',
          'The fundamental-cause framework',
        ],
        correctAnswer: 1,
        explanation:
          'Social selection says poor health pushes people down the ladder. If people who were healthy at baseline still show the gradient, the gradient cannot be merely the result of pre-existing illness driving SES—undercutting selection and favoring causation. The relative-income and fundamental-cause accounts are causation-type explanations the passage supports, not the one weakened here.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'That the gradient stays steep even in countries with universal health coverage best supports the passage’s claim that:',
        options: [
          'The drift hypothesis fully explains the data',
          'Lack of medical insurance is the sole driver of disparities',
          'Psychosocial pathways, not only access to care, contribute to the gradient',
          'Health disparities are biologically predetermined'],
        correctAnswer: 2,
        explanation:
          'If equalizing medical access does not erase the gradient, then access alone cannot explain it; the passage points to psychosocial pathways such as chronic stress/allostatic load. A is the opposite of what universal coverage results imply. The passage never claims a biological inevitability, and it explicitly says selection is only partial.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'According to the fundamental-cause framework cited in the passage, SES will continue to predict mortality even as specific diseases change over time because higher-SES individuals:',
        options: [
          'Are genetically more resilient',
          'Can deploy flexible resources (knowledge, money, power, connections) to avoid emerging risks',
          'Are exempt from the sick role',
          'Experience less relative deprivation only in poor nations',
        ],
        correctAnswer: 1,
        explanation:
          'Fundamental-cause theory (Link & Phelan) holds that SES persists as a cause of disease across eras precisely because flexible resources let advantaged people adopt whatever protective behaviors or technologies arise. It is explicitly not a genetic claim. The sick role is unrelated. The relative-deprivation point in the passage applies within wealthy nations, contradicting D.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'The relative-income hypothesis, as used in the passage, is best supported by which observation?',
        options: [
          'The lowest quintile has the highest smoking rate',
          'Life expectancy rises monotonically with income',
          'Universal coverage exists in some countries',
          'Lower quintiles in wealthy nations meet basic needs yet still show worse health'],
        correctAnswer: 3,
        explanation:
          'The relative-income hypothesis says one’s rank in the hierarchy affects health beyond absolute resources. The strongest evidence is that in wealthy nations, where lower quintiles still meet material needs, the gradient persists—implicating relative position rather than absolute deprivation. The smoking rate and the monotonic gradient describe the gradient but not specifically its relative-vs-absolute basis. Universal coverage speaks to access, not relative income.',
        skill: 'interpret-the-data',
      },
    ],
  },

  // (4) Cognition / perception study
  {
    id: 'ps-cogperc-01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Top-Down Influences on Perception and Attention',
    passageText:
      'Perception is shaped both by incoming sensory data (bottom-up processing) and by expectations, context, and prior knowledge (top-down processing). Researchers tested how top-down set affects what observers consciously detect. In a selective-attention task, participants watched a 30-second video of two teams passing basketballs and were instructed to count the passes made by one team. Midway, a person in a gorilla suit walked through the scene for several seconds. After the video, participants reported their pass count and were asked whether they had noticed anything unusual.\n\nIn a second study, the same researchers manipulated perceptual expectation. Participants briefly viewed an ambiguous figure (it could be read as the letter "B" or the number "13") embedded either in a row of letters (_, C) or a column of numbers (12, _, 14). The stimulus itself was identical across conditions; only the flanking context differed.\n\nThe investigators predicted that demanding focused attention on the counting task would cause many observers to miss the salient but task-irrelevant gorilla—a phenomenon they attributed to limited attentional capacity rather than to a failure of the eyes. For the ambiguous-figure study, they predicted that context would bias interpretation, with letter context yielding "B" and number context yielding "13," demonstrating that the same retinal input can be perceived differently depending on the active perceptual set.',
    figure:
      'Table 1. Results across the two studies.\n\n| Measure | Result |\n| --- | --- |\n| Noticed the gorilla (focused-counting group) | 42% |\n| Noticed the gorilla (passive-viewing control) | 91% |\n| Ambiguous figure read as "B" (letter context) | 83% |\n| Ambiguous figure read as "13" (number context) | 79% |',
    questions: [
      {
        question:
          'The failure of many counting-task participants to notice the gorilla is best labeled:',
        options: ['Inattentional blindness', 'Change blindness', 'Sensory adaptation', 'Weber’s law'],
        correctAnswer: 0,
        explanation:
          'Inattentional blindness is failing to perceive a fully visible but unexpected object when attention is engaged elsewhere—exactly the gorilla result. Change blindness is failing to detect a change between two views/scenes. Sensory adaptation is reduced sensitivity to a constant stimulus. Weber’s law concerns the proportional just-noticeable difference between stimuli.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The ambiguous-figure result—identical input read as "B" among letters but "13" among numbers—demonstrates the influence of:',
        options: [
          'Bottom-up processing alone',
          'Top-down processing via perceptual set',
          'Signal detection at the absolute threshold',
          'Transduction',
        ],
        correctAnswer: 1,
        explanation:
          'Because the stimulus was physically identical and only context changed, interpretation must be driven by expectations/context—top-down processing operating through a perceptual set primed by the surrounding letters or numbers. Bottom-up processing would predict identical percepts. Absolute threshold concerns minimum detectable intensity. Transduction is converting physical energy into neural signals, not interpretation.',
        skill: 'which-theory',
      },
      {
        question:
          'The investigators argue the gorilla result reflects limited attention rather than a visual-sensory failure. Which additional finding would most strengthen that interpretation?',
        options: [
          'The gorilla was small and dimly lit',
          'Noticers counted passes less accurately',
          'Eye-tracking shows non-noticers fixated directly on the gorilla yet did not report it',
          'Non-noticers had worse visual acuity than noticers'],
        correctAnswer: 2,
        explanation:
          'If eye-tracking shows the eyes landed on the gorilla yet observers still failed to report it, the information reached the retina/visual cortex but was not consciously processed—pinpointing an attentional, not sensory, bottleneck. Worse acuity or a dim stimulus would support a sensory explanation, the opposite. Counting accuracy does not bear on the sensory-vs-attention question.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'In the gorilla study, the heavy attentional demand of counting passes most directly illustrates the role of:',
        options: [
          'Divided attention with unlimited capacity',
          'Iconic memory decay',
          'The cocktail-party effect',
          'Selective attention with limited capacity'],
        correctAnswer: 3,
        explanation:
          'Counting one team’s passes requires selective attention, and because attentional capacity is limited, resources devoted to counting leave the gorilla unprocessed. The premise is precisely that capacity is NOT unlimited. Iconic memory decay is about the brief visual store, not this miss. The cocktail-party effect is detecting a salient personal stimulus in an unattended channel—the reverse of what happened here.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'The 91% noticing rate in the passive-viewing control mainly serves to show that:',
        options: [
          'The gorilla was perceptually salient and easily seen when attention was not loaded',
          'Passive viewers had better eyesight',
          'Counting improves memory',
          'The gorilla appeared longer for controls',
        ],
        correctAnswer: 0,
        explanation:
          'When viewers were not loaded by a counting task, almost everyone (91%) saw the gorilla, confirming it was salient and visible—so the 42% miss rate under counting load must stem from the attentional demand, not invisibility. B is unsupported (groups were comparable). C is irrelevant to noticing the gorilla. The stimulus duration was the same across groups.',
        skill: 'interpret-the-data',
      },
    ],
  },

  // (5) Development passage
  {
    id: 'ps-dev-01',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Attachment and the Strange Situation',
    passageText:
      'To classify the quality of infant–caregiver attachment, developmental psychologists use the Strange Situation, a structured laboratory procedure of brief separations and reunions between a 12- to 18-month-old infant and the caregiver, interspersed with the entrance of an unfamiliar adult. The behavior of greatest diagnostic interest is how the infant responds to the caregiver’s RETURN after a brief separation, not how distressed the infant becomes during the separation itself.\n\nFrom such observations, researchers identify several patterns. Securely attached infants use the caregiver as a secure base to explore, show some distress at separation, and are readily comforted and resume play upon reunion. Infants classified as insecure-avoidant show little distress at separation and conspicuously avoid or ignore the caregiver at reunion. Infants classified as insecure-resistant (anxious-ambivalent) are highly distressed at separation and, at reunion, simultaneously seek contact and resist it—for example, reaching to be picked up and then arching away, remaining inconsolable. A later-identified disorganized pattern features contradictory, apprehensive behaviors.\n\nLongitudinal work links the security of early attachment to the caregiver’s sensitivity—the consistency and appropriateness of responses to infant signals—rather than to the sheer quantity of contact. The passage notes that attachment classifications predict, modestly, later social competence, and that cross-cultural studies find the secure pattern most common everywhere but with meaningful variation in the relative frequency of the insecure patterns, prompting debate about whether the procedure’s "ideal" reflects culturally specific caregiving norms.',
    questions: [
      {
        question:
          'According to the passage, the behavior most diagnostic of attachment classification in the Strange Situation is the infant’s response to:',
        options: [
          'The caregiver’s return at reunion',
          'The novelty of the room',
          'The separation itself',
          'The stranger’s entrance'],
        correctAnswer: 0,
        explanation:
          'The passage states explicitly that the behavior of greatest diagnostic interest is how the infant responds to the caregiver’s return at reunion, not the degree of separation distress. The stranger’s entrance and room novelty are part of the procedure but not the key index. Separation distress is explicitly downplayed relative to reunion behavior.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'An infant who shows little distress when the caregiver leaves and then ignores or turns away from the caregiver at reunion would most likely be classified as:',
        options: ['Securely attached', 'Insecure-avoidant', 'Insecure-resistant (ambivalent)', 'Disorganized'],
        correctAnswer: 1,
        explanation:
          'Minimal separation distress combined with active avoidance/ignoring at reunion is the defining profile of insecure-avoidant attachment. Secure infants seek and accept comfort at reunion. Insecure-resistant infants are very distressed and show the seek-and-resist pattern. Disorganized infants show contradictory, fearful behaviors. The avoidance-at-reunion signature points to avoidant.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'An infant who is intensely distressed at separation and, at reunion, reaches to be held but then arches away and cannot be soothed best fits which pattern?',
        options: ['Secure', 'Insecure-avoidant', 'Insecure-resistant (ambivalent)', 'Disorganized'],
        correctAnswer: 2,
        explanation:
          'Simultaneously seeking contact and resisting it—reaching up then arching away, remaining inconsolable—is the hallmark of the insecure-resistant/anxious-ambivalent pattern described in the passage. Avoidant infants ignore the caregiver rather than seek-and-resist; secure infants are comforted; disorganized infants show contradictory, apprehensive (often fearful) behavior rather than this specific approach–resist profile.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'The passage attributes individual differences in attachment security primarily to:',
        options: [
          'The infant’s innate temperament alone',
          'The number of strangers the infant has met',
          'The total amount of time the caregiver spends with the infant',
          'The caregiver’s sensitivity—consistent, appropriate responses to infant signals'],
        correctAnswer: 3,
        explanation:
          'The passage links security to caregiver sensitivity—the consistency and appropriateness of responses to the infant’s signals—explicitly contrasting this with the sheer quantity of contact. Temperament is not named as the sole cause, and exposure to strangers is not offered as the determinant.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'Cross-cultural data showing the secure pattern is most common everywhere but with varying rates of insecure patterns is used in the passage to raise the concern that the Strange Situation may:',
        options: [
          'Be biased toward culturally specific caregiving norms',
          'Lack any predictive validity',
          'Measure temperament rather than attachment',
          'Apply only to infants over age three',
        ],
        correctAnswer: 0,
        explanation:
          'The passage notes the debate over whether the procedure’s "ideal" reflects culturally specific caregiving norms—i.e., a potential cultural bias in interpreting the insecure patterns. It does not claim the measure lacks all predictive validity (B; it says classifications modestly predict later competence). It does not equate the measure with temperament, and the procedure targets 12–18-month-olds.',
        skill: 'interpret-the-data',
      },
    ],
  },

  // (6) Psychological disorders / biological basis of behavior
  {
    id: 'ps-biopsych-01',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Chronic Stress, the HPA Axis, and Depression',
    passageText:
      'Acute stress activates the hypothalamic–pituitary–adrenal (HPA) axis: the hypothalamus releases corticotropin-releasing hormone, prompting the anterior pituitary to release adrenocorticotropic hormone (ACTH), which signals the adrenal cortex to secrete the glucocorticoid cortisol. Cortisol mobilizes energy and, under normal conditions, feeds back on the hypothalamus and pituitary to shut the axis off—a negative-feedback loop that limits the duration of the response.\n\nResearchers investigated whether chronic stress dysregulates this loop in a way relevant to major depressive disorder. They compared cortisol regulation in adults with depression and matched healthy controls using the dexamethasone suppression test, in which a synthetic glucocorticoid (dexamethasone) is administered at night; in healthy individuals it mimics cortisol’s feedback signal and suppresses next-morning cortisol. A failure to suppress indicates a blunted negative-feedback loop.\n\nThe team also measured hippocampal volume by MRI, motivated by evidence that the hippocampus contributes to inhibiting the HPA axis and that prolonged glucocorticoid exposure can damage hippocampal neurons—a potential vicious cycle. Separately, they reviewed the monoamine hypothesis, which links depressive symptoms to reduced signaling of monoamine neurotransmitters (serotonin, norepinephrine, and dopamine), consistent with the action of antidepressants that increase synaptic availability of these transmitters. The investigators framed their predictions around the idea that depression involves both neuroendocrine dysregulation and altered monoamine signaling rather than a single cause.',
    figure:
      'Table 1. Neuroendocrine and structural measures (group means).\n\n| Measure | Depressed group | Control group |\n| --- | --- | --- |\n| Post-dexamethasone morning cortisol (µg/dL) | 9.8 | 2.1 |\n| Normal cortisol suppression after dexamethasone | Failed | Achieved |\n| Relative hippocampal volume (% of control mean) | 91 | 100 |',
    questions: [
      {
        question:
          'In a healthy person, cortisol acting on the hypothalamus and pituitary to shut down further cortisol release is an example of:',
        options: [ 'Negative feedback', 'Feed-forward activation', 'Sensory adaptation','Positive feedback'],
        correctAnswer: 0,
        explanation:
          'When the output (cortisol) inhibits the upstream steps that produced it, returning the system toward baseline, that is negative feedback—the defining loop of the HPA axis. Positive feedback would amplify the response. Feed-forward activation initiates a response in anticipation, not shutting it off. Sensory adaptation is reduced neural response to a constant stimulus, a different concept.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The depressed group’s failure to suppress cortisol after dexamethasone (9.8 vs. 2.1 µg/dL) most directly indicates:',
        options: [
          'An overactive negative-feedback loop',
          'A blunted negative-feedback loop with HPA-axis hyperactivity',
          'Adrenal insufficiency',
          'Normal HPA function',
        ],
        correctAnswer: 1,
        explanation:
          'Dexamethasone should mimic cortisol’s feedback and suppress morning cortisol; in the depressed group it failed (cortisol stayed high), signaling impaired/blunted negative feedback and a chronically overactive HPA axis. An overactive feedback loop would over-suppress, the opposite. Adrenal insufficiency would mean too little cortisol. The non-suppression is by definition abnormal.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'The lower hippocampal volume in the depressed group, combined with the stated role of the hippocampus in inhibiting the HPA axis, supports which mechanism?',
        options: [
          'A vicious cycle in which glucocorticoid exposure damages the hippocampus, further weakening HPA inhibition',
          'A protective adaptation that down-regulates cortisol',
          'A purely genetic cause unrelated to cortisol',
          'Increased negative feedback over time',
        ],
        correctAnswer: 0,
        explanation:
          'The passage notes the hippocampus helps inhibit the HPA axis and that prolonged glucocorticoids can damage hippocampal neurons. A smaller hippocampus would impair that inhibition, raising cortisol and causing more damage—the vicious cycle the passage flags. Smaller volume would weaken, not strengthen, feedback (D). The passage frames a stress–cortisol mechanism, not a purely genetic one.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'The monoamine hypothesis as described links depression to reduced signaling of which neurotransmitters?',
        options: [
          'Cortisol and ACTH',
          'GABA and glutamate',
          'Serotonin, norepinephrine, and dopamine',
          'Acetylcholine and histamine'],
        correctAnswer: 2,
        explanation:
          'The monoamines implicated in the hypothesis are serotonin, norepinephrine, and dopamine; many antidepressants increase their synaptic availability. GABA/glutamate are amino-acid transmitters, not monoamines. Acetylcholine and histamine are not the monoamines named here. Cortisol and ACTH are hormones of the HPA axis, not neurotransmitters in this hypothesis.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'A drug that selectively blocks reuptake of serotonin at the synapse would, according to the monoamine framework, be expected to:',
        options: [
          'Have no effect on monoamine signaling',
          'Directly suppress the HPA axis within minutes',
          'Decrease serotonin signaling and worsen mood',
          'Increase synaptic serotonin availability and improve depressive symptoms'],
        correctAnswer: 3,
        explanation:
          'Blocking reuptake leaves more serotonin in the synapse, increasing signaling—consistent with how SSRIs are described as raising synaptic availability and, per the monoamine hypothesis, improving symptoms. Blocking reuptake increases rather than decreases serotonin. It clearly affects monoamine signaling. It does not act as an immediate HPA suppressant; the passage treats neuroendocrine and monoamine systems as related but distinct.',
        skill: 'apply-a-theory',
      },
    ],
  },

  // (7) Social structure / group dynamics with data
  {
    id: 'ps-socstruct-01',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Bystander Intervention and Group Size',
    passageText:
      'Researchers tested how the number of bystanders affects helping in an emergency, drawing on the proposed mechanism of diffusion of responsibility: as the number of witnesses grows, each individual feels a smaller share of the obligation to act, so the probability that any one person helps declines.\n\nIn the experiment, a participant sat in a cubicle and communicated over an intercom with what they believed were one, two, or five other participants (in fact prerecorded voices). Early in the discussion, one of the "other participants" appeared to suffer a seizure, calling for help and then falling silent. The dependent measures were whether the real participant left the cubicle to seek help and, if so, how quickly. The experimenters reasoned that because participants in larger groups could not see whether others were responding, any drop in helping would reflect the felt diffusion of responsibility rather than direct observation of others’ inaction.\n\nThe researchers distinguished diffusion of responsibility from a related process, pluralistic ignorance, in which bystanders who CAN see one another each interpret others’ calm as evidence that no real emergency exists. Because participants here were isolated and could not observe the others, the design was intended to isolate diffusion of responsibility as the operative mechanism. After the session, participants who had not helped frequently reported uncertainty and conflict rather than indifference, which the authors took as evidence against a simple "apathy" explanation.',
    chart: {
      title: 'Figure 1. Helping by number of other bystanders believed present',
      kind: 'line',
      xLabel: 'Number of others believed present',
      yLabel: 'Helping measure',
      seriesLabel: 'Participants who sought help (%)',
      xValues: [1, 2, 5],
      yValues: [85, 62, 31],
      comparisonSeries: [{ label: 'Median time to respond (s)', yValues: [52, 93, 166] }],
    },
    questions: [
      {
        question:
          'The decline in helping as the believed number of other bystanders increased (85% → 62% → 31%) is the signature of:',
        options: ['The bystander effect via diffusion of responsibility', 'Social facilitation', 'Deindividuation', 'Groupthink'],
        correctAnswer: 0,
        explanation:
          'Fewer individuals help as group size rises—the bystander effect—here attributed to diffusion of responsibility, with each witness feeling a smaller share of the obligation. Social facilitation concerns performance changes due to others’ presence, not helping. Deindividuation is loss of self-awareness in groups. Groupthink is faulty group decision-making prioritizing consensus.',
        skill: 'which-theory',
      },
      {
        question:
          'By isolating participants in cubicles so they could NOT see the others, the design specifically rules out which alternative explanation?',
        options: [
          'Diffusion of responsibility',
          'Pluralistic ignorance from observing others’ calm',
          'Evaluation apprehension',
          'Conformity to a unanimous majority',
        ],
        correctAnswer: 1,
        explanation:
          'Pluralistic ignorance requires seeing others appear calm and inferring no emergency. Because participants were isolated and could not observe the others, that visual mechanism is removed, leaving diffusion of responsibility (which does not require seeing others) as the operative cause. The design is meant to preserve diffusion, not rule it out. Evaluation apprehension and majority conformity are not the targeted alternative here.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'That non-helpers commonly reported uncertainty and conflict rather than indifference is used to argue against which interpretation?',
        options: [
          'That group size affected helping',
          'That the emergency seemed real',
          'That bystanders failed to help out of apathy/indifference',
          'That diffusion of responsibility occurred'],
        correctAnswer: 2,
        explanation:
          'The authors invoke participants’ reported conflict to counter a "they just didn’t care" (apathy) account: non-helpers were torn, not indifferent. This evidence does not undercut diffusion of responsibility, the group-size effect, or the realism of the emergency—it specifically targets the apathy explanation.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'Diffusion of responsibility, as defined in the passage, refers to the process by which:',
        options: [
          'A group makes riskier decisions than individuals',
          'People conform to perceived group norms',
          'Individuals work less hard in a group than alone on a shared task',
          'Each additional witness reduces any single person’s felt obligation to act'],
        correctAnswer: 3,
        explanation:
          'Diffusion of responsibility is the spreading of perceived obligation across witnesses, so each feels less personally responsible as the group grows. Reduced effort on a collective task describes social loafing, a related but distinct phenomenon; shifting toward extreme positions describes group polarization; and matching one’s behavior to the group describes conformity—none matches the passage’s definition.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The median response time also lengthened with group size (52 → 93 → 166 s). This pattern is best interpreted as:',
        options: [
          'A second measure converging with the helping-rate data to support diffusion of responsibility',
          'Proof that the emergency was not believable',
          'An artifact unrelated to group size',
          'Evidence that larger groups helped faster'],
        correctAnswer: 0,
        explanation:
          'Both that fewer people helped and that those who did acted more slowly as the group grew point the same direction, providing converging evidence for diffusion of responsibility. Larger groups responded slower, not faster. Slower, more conflicted responding does not show the emergency was unbelievable, and the systematic increase with group size is the opposite of an unrelated artifact.',
        skill: 'interpret-the-data',
      },
    ],
  },

  // (8) Sensation / perception — signal detection theory study with data
  {
    id: 'ps-sensperc-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    title: 'Signal Detection in Radiologists',
    passageText:
      'Signal detection theory (SDT) holds that detecting a faint stimulus is not a simple matter of whether it exceeds a fixed sensory threshold. Instead, performance reflects two separable components: sensitivity (d′), the observer’s ability to discriminate signal-plus-noise from noise alone, and response criterion (β), the willingness to say "yes, signal present," which depends on expectations and on the costs and benefits of each outcome. Every trial yields one of four outcomes: a hit (signal present, "yes"), a miss (signal present, "no"), a false alarm (signal absent, "yes"), or a correct rejection (signal absent, "no").\n\nResearchers had radiologists judge whether a faint nodule was present in a series of chest images, half of which actually contained a nodule. In a baseline block, readers were told nothing about prevalence or stakes. In a second block, readers were warned that missing a nodule could be fatal (raising the cost of a miss); in a third, they were told that unnecessary follow-up scans were extremely costly (raising the cost of a false alarm). The physical images were equally faint across blocks. Investigators predicted that the cost manipulations would shift the response criterion without changing underlying sensitivity, because the visual information in the images was unchanged.\n\nThe researchers stressed that an observer can improve the hit rate simply by saying "yes" more often, but only at the price of more false alarms—so the hit rate alone is an incomplete measure of perceptual skill. A genuine improvement in discrimination would raise hits while holding or lowering false alarms.',
    chart: {
      title: 'Figure 1. Detection outcomes by block (hit rate and false-alarm rate move together while d′ stays constant)',
      kind: 'bar',
      xLabel: 'Block',
      yLabel: 'Rate (proportion) / d′',
      seriesLabel: 'Hit rate',
      xValues: ['Baseline', 'Miss costly', 'False alarm costly'],
      yValues: [0.72, 0.91, 0.55],
      comparisonSeries: [
        { label: 'False-alarm rate', yValues: [0.20, 0.41, 0.07] },
        { label: "Estimated d′", yValues: [1.43, 1.45, 1.42] },
      ],
      annotations: [{ xIndex: 0, label: 'd′ ≈ constant across blocks' }],
    },
    questions: [
      {
        question:
          'Across the three blocks the hit rate and false-alarm rate shift substantially while d′ stays near 1.43. This pattern most directly indicates that the cost manipulations changed the:',
        options: [
          'Observer’s sensitivity to the nodule',
          'Observer’s response criterion (β)',
          'Absolute threshold for the stimulus',
          'Physical contrast of the images',
        ],
        correctAnswer: 1,
        explanation:
          'A nearly constant d′ alongside moving hit and false-alarm rates is the signature of a criterion (β) shift: the observer changes how readily they say "yes," not how well they discriminate signal from noise. If sensitivity had changed, d′ would move. The absolute threshold is a classical-psychophysics construct SDT explicitly replaces with sensitivity-plus-criterion. The images were held constant.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'When told that missing a nodule could be fatal, readers’ hits rose to 0.91 but false alarms also rose to 0.41. This shift is best described as adopting a:',
        options: [
          'More conservative (strict) criterion',
          'More liberal (lenient) criterion',
          'Higher sensitivity',
          'Lower sensitivity',
        ],
        correctAnswer: 1,
        explanation:
          'Raising the cost of a miss pushes the observer to say "yes" more often, increasing both hits and false alarms—a liberal/lenient criterion. A conservative criterion would lower both rates, as in the false-alarm-costly block (hits 0.55, false alarms 0.07). Because d′ barely moved, sensitivity did not change (D).',
        skill: 'apply-a-theory',
      },
      {
        question:
          'A reader in the baseline block correctly reports "no nodule" on an image that in fact contains none. In SDT terms this outcome is a:',
        options: [ 'Miss', 'False alarm', 'Correct rejection','Hit'],
        correctAnswer: 2,
        explanation:
          'Signal absent and the observer responds "no" → correct rejection. A hit is signal present plus "yes"; a miss is signal present plus "no"; a false alarm is signal absent plus "yes." Saying "no" when nothing is there is the correct rejection.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The passage argues that hit rate alone is an incomplete measure of perceptual skill chiefly because:',
        options: [
          'Hit rate is unaffected by the stimulus',
          'Sensitivity cannot be measured',
          'False alarms are always zero',
          'Hits can be inflated by simply responding "yes" more often, at the cost of more false alarms'],
        correctAnswer: 3,
        explanation:
          'A reader can raise the hit rate just by adopting a more liberal criterion, but this also raises false alarms—so a high hit rate may reflect a lax criterion rather than better discrimination. That is exactly why d′, which combines hits and false alarms, is the proper index. The other options are false: hits do depend on the stimulus, sensitivity is measurable (d′), and false alarms are clearly nonzero in the data.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'Which result, if observed, would constitute a genuine improvement in the radiologists’ discrimination rather than a criterion shift?',
        options: [
          'Hits rise from 0.72 to 0.85 while false alarms fall from 0.20 to 0.12',
          'Hits fall and false alarms fall by the same amount',
          'Hits and false alarms both stay exactly the same',
          'Hits rise from 0.72 to 0.90 while false alarms rise from 0.20 to 0.40'],
        correctAnswer: 0,
        explanation:
          'True gains in sensitivity (higher d′) show up as more hits WITHOUT a corresponding rise in false alarms—ideally hits up and false alarms down. A pattern where both hits and false alarms rise is the hallmark of a looser criterion at constant sensitivity; fewer hits with fewer false alarms is a stricter criterion; and identical rates are no change at all.',
        skill: 'experimental-reasoning',
      },
    ],
  },

  // (9) Personality theories + psychological disorders / treatment
  {
    id: 'ps-personality-01',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Locus of Control, Attribution, and Depression',
    passageText:
      'Personality and clinical researchers have long studied how people explain the events of their lives. Within the social-cognitive tradition, Rotter’s concept of locus of control distinguishes people who attribute outcomes to their own actions (internal locus) from those who attribute outcomes to luck, fate, or powerful others (external locus). A related clinical model, the reformulated learned-helplessness (hopelessness) theory, proposes that vulnerability to depression is heightened in people with a depressive attributional (explanatory) style—those who explain negative events with internal, stable, and global causes ("It’s my fault, it always happens, and it ruins everything").\n\nTo test this, investigators administered an explanatory-style questionnaire to 240 first-year students at the start of the year and measured depressive symptoms then and again after students received a disappointing midterm grade. The team distinguished their account from the trait perspective embodied in the Big Five (openness, conscientiousness, extraversion, agreeableness, neuroticism), noting that neuroticism predicts distress broadly, whereas explanatory style was meant to predict who becomes depressed specifically after a negative event.\n\nThe researchers also contrasted two treatment rationales for depression. A cognitive-behavioral rationale targets the maladaptive thoughts and attributions themselves, training patients to reattribute setbacks to specific, unstable, external causes where appropriate. A biomedical rationale targets monoamine neurotransmission pharmacologically. The investigators predicted that students with a pessimistic explanatory style at baseline would show the largest increase in depressive symptoms after the disappointing grade, and that this interaction—style × negative event—would exceed the effect of either factor alone.',
    chart: {
      title: 'Figure 1. Increase in depressive-symptom score from baseline to post-grade, by explanatory style × grade outcome',
      kind: 'bar',
      xLabel: 'Grade outcome',
      yLabel: 'Symptom-score increase from baseline',
      seriesLabel: 'Optimistic style (external/unstable/specific)',
      xValues: ['After good grade', 'After disappointing grade'],
      yValues: [0.4, 1.1],
      comparisonSeries: [
        { label: 'Pessimistic style (internal/stable/global)', yValues: [0.6, 5.8] },
      ],
      annotations: [{ xIndex: 1, label: 'diathesis × stress spike' }],
    },
    questions: [
      {
        question:
          'A student who explains a failing grade as "I’m just not smart, I never do well, and this will wreck everything" is displaying the depressive explanatory style’s three dimensions, which are:',
        options: [
          'External, unstable, and specific',
          'Internal, stable, and global',
          'Internal, unstable, and specific',
          'External, stable, and global',
        ],
        correctAnswer: 1,
        explanation:
          'The depressive (pessimistic) attributional style explains negative events with internal ("my fault"), stable ("always"), and global ("affects everything") causes—exactly the quoted statement. The opposite, more adaptive pattern is external, unstable, and specific. Mixed patterns (external-stable-global, internal-unstable-specific) do not match the hopelessness-theory profile.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The largest symptom increase (+5.8) occurs only for pessimistic-style students after a disappointing grade, not for either factor alone. This pattern best supports:',
        options: [
          'A main effect of explanatory style only',
          'A main effect of grade outcome only',
          'A diathesis–stress (style × event) interaction',
          'No relationship between style and depression',
        ],
        correctAnswer: 2,
        explanation:
          'Symptoms spike only when a vulnerability (pessimistic style) meets a stressor (the disappointing grade)—the classic diathesis–stress interaction the researchers predicted. A pure main effect of style would raise symptoms even after a good grade; a pure main effect of grade would affect optimists as much as pessimists. The data clearly show a relationship (not D).',
        skill: 'interpret-the-data',
      },
      {
        question:
          'A person who believes that whether they pass exams is mainly a matter of luck and the whims of professors, beyond their own effort, has a(n):',
        options: [ 'Internal attribution for success','Internal locus of control', 'External locus of control', 'High self-efficacy'],
        correctAnswer: 2,
        explanation:
          'Attributing outcomes to luck, fate, or powerful others rather than one’s own actions defines an external locus of control (Rotter). An internal locus credits one’s own effort. Self-efficacy is Bandura’s belief in one’s capability to execute a behavior—related but distinct, and here the person feels low control. Crediting one’s own actions for outcomes describes the opposite attribution.',
        skill: 'apply-a-theory',
      },
      {
        question:
          'The passage distinguishes explanatory style from the Big Five trait neuroticism by claiming that, unlike neuroticism, explanatory style was designed to predict:',
        options: [
          'Extraversion in social settings',
          'Performance on intelligence tests',
          'General distress across all situations',
          'Who becomes depressed specifically after a negative event'],
        correctAnswer: 3,
        explanation:
          'The passage states neuroticism predicts distress broadly, whereas explanatory style was meant to predict who becomes depressed specifically after a negative event—a situation-contingent vulnerability, consistent with the diathesis–stress framing. Broad distress-proneness describes neuroticism itself, not the contrast intended. Extraversion and intelligence are unrelated to the comparison.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The cognitive-behavioral treatment rationale described in the passage would most directly attempt to:',
        options: [
          'Train patients to reattribute setbacks to specific, unstable, and external causes where appropriate',
          'Use systematic desensitization to extinguish a phobia',
          'Strengthen the unconscious transference relationship',
          'Increase synaptic serotonin pharmacologically'],
        correctAnswer: 0,
        explanation:
          'The cognitive-behavioral rationale here targets maladaptive attributions, retraining the internal/stable/global pattern toward specific/unstable/external explanations—cognitive restructuring. Increasing serotonin is the biomedical rationale the passage contrasts it with. Systematic desensitization is a behavioral technique for phobias, not the attributional retraining described. Transference is a psychodynamic concept, not the cognitive model.',
        skill: 'apply-a-theory',
      },
    ],
  },

  // (10) Demographics / social institutions / stratification with data
  {
    id: 'ps-demog-01',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Demographic Transition and Intergenerational Mobility',
    passageText:
      'Demographers describe the demographic transition, a model in which societies move from a pre-industrial regime of high birth rates and high death rates, through a transitional phase in which death rates fall first (thanks to sanitation, nutrition, and medicine) while birth rates remain high—producing rapid population growth—and finally to a post-industrial regime of low birth and low death rates and slow or negative growth. The lag between falling mortality and falling fertility is the engine of the population explosion seen in many industrializing societies.\n\nA research team paired demographic indicators with measures of social mobility for several countries at different transition stages. They distinguished intergenerational mobility (change in social position between parents and children) from intragenerational mobility (change within a single person’s lifetime), and structural mobility (movement caused by changes in the occupational structure, such as industrialization creating many new white-collar jobs) from exchange mobility (individuals trading places within a fixed structure). They also tracked the dependency ratio—the ratio of dependents (the young and the elderly) to the working-age population—which they noted is high early in the transition because of many children and high late in the transition because of population aging.\n\nThe investigators argued that much of the upward mobility observed during rapid industrialization is structural rather than exchange mobility: as the economy adds professional and technical positions, children can occupy higher-status jobs than their parents without anyone necessarily moving downward. They cautioned that high observed upward mobility therefore need not indicate an increasingly "open," merit-based society.',
    chart: {
      title: 'Figure 1. Birth and death rates across the demographic transition (illustrative national means)',
      kind: 'line',
      xLabel: 'Transition stage',
      yLabel: 'Rate',
      yUnit: 'per 1,000',
      seriesLabel: 'Birth rate',
      xValues: ['Stage 1: pre-industrial', 'Stage 2: early transition', 'Stage 3: late transition', 'Stage 4: post-industrial'],
      yValues: [40, 39, 20, 11],
      comparisonSeries: [{ label: 'Death rate', yValues: [38, 18, 10, 10] }],
      annotations: [{ xIndex: 1, label: 'widest gap → rapid growth' }],
    },
    questions: [
      {
        question:
          'According to the demographic-transition model, the rapid population growth of Stage 2 results from the fact that:',
        options: [
          'Birth rates rise sharply while death rates stay high',
          'Death rates fall while birth rates remain high',
          'Both birth and death rates fall together',
          'Immigration exceeds emigration',
        ],
        correctAnswer: 1,
        explanation:
          'In the transitional stage, mortality drops first (sanitation, nutrition, medicine) while fertility remains high, so births greatly exceed deaths and the population surges—visible in the table (Stage 2: births 39, deaths 18). Birth rates do not rise; the simultaneous fall of both characterizes the later stages with slow growth; the model is about natural increase, not migration.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'A factory worker’s child becomes a physician, occupying a higher social position than her parents. This is an example of:',
        options: [
          'Exchange mobility within a fixed structure',
          'Intragenerational mobility',
          'Intergenerational mobility',
          'Horizontal mobility'],
        correctAnswer: 2,
        explanation:
          'Change in social position BETWEEN parents and children is intergenerational mobility. Intragenerational mobility is change within one person’s own career. Horizontal mobility is movement between positions of similar status, not upward. Exchange mobility describes the mechanism of mobility, not the parent-to-child comparison; the stem is defined by the generational comparison.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The researchers warn that high upward mobility during industrialization may be mostly structural mobility. Structural mobility means movement caused by:',
        options: [
          'Random measurement error',
          'Marriage between social classes',
          'Individuals trading places within an unchanged occupational structure',
          'Changes in the occupational structure itself, such as new white-collar jobs being created'],
        correctAnswer: 3,
        explanation:
          'Structural mobility is upward (or downward) movement driven by changes in the occupational structure—e.g., industrialization creating many new professional jobs—so people can rise without others falling. Trading places within a fixed structure is exchange mobility, the contrast the passage draws. It is not error or marital mobility.',
        skill: 'identify-the-concept',
      },
      {
        question:
          'The passage notes the dependency ratio is high both early and late in the transition, but for different reasons. The Stage 4 (post-industrial) increase in the dependency ratio is driven mainly by:',
        options: [
          'Population aging (a growing elderly share)',
          'Falling life expectancy',
          'Rising death rates among children',
          'A surge in births'],
        correctAnswer: 0,
        explanation:
          'Late in the transition, low fertility and long life expectancy raise the elderly share, so the dependency ratio rises because of aging—not because of more children, which dominates early. Life expectancy rises, not falls, and child mortality is low in post-industrial societies.',
        skill: 'interpret-the-data',
      },
      {
        question:
          'The investigators’ caution that high observed upward mobility "need not indicate an increasingly open, merit-based society" follows most directly because:',
        options: [
          'The dependency ratio determines mobility',
          'Structural mobility can lift many children above their parents without genuine openness or competition for fixed slots',
          'Mobility is impossible to measure',
          'Intragenerational mobility is always downward'],
        correctAnswer: 1,
        explanation:
          'If industrialization simply creates more high-status slots, children can rise without anyone losing position—so upward movement reflects a changing structure, not necessarily a more meritocratic or fluid contest for limited positions. The other options are unsupported: mobility is measured here, intragenerational mobility is not inherently downward, and the dependency ratio is a separate demographic measure.',
        skill: 'experimental-reasoning',
      },
      {
        question:
          'A government wishing to reduce the rapid population growth of Stage 2 would, per the model, most effectively focus on policies that:',
        options: [
          'Halt all industrialization',
          'Raise the death rate',
          'Lower the birth rate (e.g., via education, family planning, women’s economic opportunity)',
          'Increase the dependency ratio'],
        correctAnswer: 2,
        explanation:
          'Stage 2 growth comes from births outpacing the already-fallen death rate, so accelerating the fertility decline—through education, access to family planning, and expanded economic opportunity for women—addresses the cause and moves the society toward Stage 3. Raising the death rate is neither ethical nor the model’s mechanism, manipulating the dependency ratio is not a growth lever, and halting industrialization would not by itself lower fertility.',
        skill: 'apply-a-theory',
      },
    ],
  },
]

export const PSYCH_SOC_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'ps-disc-01',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    question:
      'In Piaget’s theory, a child who calls every four-legged animal "doggie," fitting new animals into an existing schema, is engaging in:',
    options: [ 'Accommodation', 'Conservation', 'Object permanence','Assimilation'],
    correctAnswer: 3,
    explanation:
      'Assimilation incorporates new information into an EXISTING schema (all four-legged animals → "doggie"). Accommodation would MODIFY the schema to fit new information (creating a separate "cat" category). Conservation is understanding that quantity is unchanged despite changes in appearance. Object permanence is knowing objects exist when out of sight.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-02',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'Observers explaining a stranger’s stumble as "he’s clumsy" while explaining their own stumble as "the floor was slippery" best illustrates:',
    options: [
      'The fundamental attribution error / actor–observer bias',
      'The just-world hypothesis',
      'The self-serving bias',
      'Cognitive dissonance',
    ],
    correctAnswer: 0,
    explanation:
      'Over-attributing others’ behavior to disposition while attributing one’s own to the situation is the actor–observer asymmetry, of which the fundamental attribution error (favoring dispositional causes for others) is the core. The just-world hypothesis is the belief people get what they deserve. The self-serving bias specifically credits the self for successes and blames the situation for failures. Cognitive dissonance is discomfort from inconsistent cognitions.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-03',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A rat presses a lever and receives a food pellet after an unpredictable, varying number of presses. This reinforcement schedule is:',
    options: ['Fixed-ratio', 'Variable-ratio', 'Fixed-interval', 'Variable-interval'],
    correctAnswer: 1,
    explanation:
      'Reinforcement after a varying NUMBER of responses is a variable-ratio schedule, which produces high, steady responding and is most resistant to extinction (as in gambling). Fixed-ratio reinforces after a set number of responses. Interval schedules (fixed or variable) reinforce based on TIME elapsed, not number of responses.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-04',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A sociologist argues that crime persists because it serves latent functions, such as clarifying moral boundaries and promoting social cohesion. This argument reflects which theoretical perspective?',
    options: ['Symbolic interactionism', 'Conflict theory', 'Structural functionalism', 'Rational choice theory'],
    correctAnswer: 2,
    explanation:
      'Explaining a social phenomenon by the functions (manifest and latent) it serves for social stability is structural functionalism (Durkheim’s view that deviance reinforces norms). Symbolic interactionism focuses on meaning in micro-level interaction. Conflict theory emphasizes power and inequality between groups. Rational choice theory explains behavior via individual cost–benefit calculation.',
    skill: 'which-theory',
  },
  {
    id: 'ps-disc-05',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'Which neurotransmitter is most directly implicated in the reward/reinforcement pathways activated by most drugs of abuse?',
    options: [ 'Acetylcholine', 'Serotonin','GABA', 'Dopamine'],
    correctAnswer: 3,
    explanation:
      'Dopamine, especially within the mesolimbic pathway (ventral tegmental area to nucleus accumbens), is central to reward and reinforcement, and most addictive drugs increase dopamine signaling there. GABA is the main inhibitory transmitter. Acetylcholine governs muscle action and aspects of attention/memory. Serotonin modulates mood, sleep, and appetite but is not the primary reward transmitter.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-06',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Judging that more words start with the letter "K" than have "K" as their third letter—because the former come to mind more easily—best illustrates:',
    options: [ 'The availability heuristic', 'Confirmation bias', 'Anchoring','The representativeness heuristic'],
    correctAnswer: 0,
    explanation:
      'The availability heuristic judges frequency or probability by how easily examples come to mind; words starting with "K" are easier to retrieve, so people overestimate them (in fact more words have "K" third). The representativeness heuristic judges likelihood by similarity to a prototype. Confirmation bias is seeking information that confirms prior beliefs. Anchoring is over-relying on an initial reference value.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-07',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'After learning to fear a tone paired with shock, a rat is later given many tone presentations with no shock until the fear response fades. The next day the tone again elicits mild fear. This return of the response illustrates:',
    options: ['Stimulus generalization', 'Spontaneous recovery', 'Higher-order conditioning', 'Latent inhibition'],
    correctAnswer: 1,
    explanation:
      'Spontaneous recovery is the reappearance of a previously extinguished conditioned response after a rest interval, showing that extinction suppresses rather than erases the original learning. Stimulus generalization is responding to stimuli similar to the conditioned one. Higher-order conditioning uses an established conditioned stimulus to condition a new one. Latent inhibition is slowed conditioning to a familiar, pre-exposed stimulus.',
    skill: 'identify-the-concept',
  },
  {
    id: 'ps-disc-08',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'An interviewer rates a physically attractive candidate as more competent and trustworthy than an equally qualified but plainer candidate, letting one favorable trait color unrelated judgments. This best illustrates:',
    options: [ 'Stereotype threat', 'The mere-exposure effect','The halo effect', 'The just-world hypothesis'],
    correctAnswer: 2,
    explanation:
      'The halo effect is the tendency for one positive characteristic (e.g., attractiveness or likability) to bias overall judgments of an unrelated trait, such as competence. The just-world hypothesis is the belief that people get the outcomes they deserve. Stereotype threat is underperformance driven by fear of confirming a negative group stereotype. The mere-exposure effect is increased liking from repeated exposure—related to familiarity but not to a single trait coloring global judgment.',
    skill: 'identify-the-concept',
  },
]
