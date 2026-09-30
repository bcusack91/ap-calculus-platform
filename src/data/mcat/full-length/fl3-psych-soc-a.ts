/**
 * MCAT Full-Length Form 3 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-09-30 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. COGNITION — selective attention, change blindness, divided attention
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-a-01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Shadowing, Flicker, and the Limits of Clinical Vigilance',
    passageText:
      'Attention allows a perceptual system of limited capacity to select some information for further processing at the expense of other information. Theories of selective attention disagree about where that selection happens. Early-selection models hold that unattended input is filtered on the basis of physical features, such as pitch or location, before its meaning is analyzed. Attenuation models hold that unattended input is weakened rather than blocked, so that items with unusually low activation thresholds can still reach awareness. Late-selection models hold that all input is analyzed for meaning and that selection determines only which analyzed items enter awareness and guide responses.\n\nResearchers studied attention in 72 nursing students using three tasks.\n\n**Study 1.** Participants wore headphones and repeated aloud (shadowed) a recorded patient handoff played to the right ear, while a list of common nouns, read by the same male voice, played to the left ear. Without warning, three events occurred in the left ear: the participant’s own first name was spoken once; the voice changed from male to female for 30 seconds; and, for a different 30 seconds, the list switched from English to Dutch, a language none of the participants spoke. Afterward, 31% of participants reported hearing their name, 88% reported the change of voice, and 7% reported the change of language. On a recognition test for nouns from the left-ear list, performance did not differ from chance.\n\n**Study 2.** Participants viewed a flicker display in which a photograph of a hospital room alternated with a modified version of the same photograph. Each image was shown for 240 ms, and the two images were separated by a blank gray screen whose duration varied across blocks. In each modified image, one object changed color or disappeared. Before the study, a separate group of raters classified each changed object as being of central interest (for example, an infusion pump beside the bed) or of marginal interest (for example, a picture frame on the wall), and the two sets of objects were matched in size and in distance from the center of the image. Participants pressed a key when they detected the change and then named it. Figure 1 shows the percentage of changes correctly detected within 20 seconds.\n\n**Study 3.** Participants performed the flicker task with an 80 ms blank while listening to a list of spoken digits. In one block they merely listened; in another they pressed a foot pedal whenever two consecutive digits were both odd. Detection of central-interest changes was 69% in the listen-only block and 48% in the pedal block. The 22 participants who had worked for at least two years as nursing assistants showed a smaller decline in the pedal block than participants with no clinical work experience. The two groups did not differ in detection during the listen-only block or in the accuracy of their pedal responses.\n\nThe researchers concluded that a clinician’s awareness of a familiar scene is far less complete than it subjectively feels, and that whether a change is noticed depends on where attention happens to be directed when the change occurs.',
    chart: {
      title: 'Figure 1. Percentage of changes detected within 20 seconds, by blank duration and interest level of the changed object',
      kind: 'line',
      xLabel: 'Duration of blank between images',
      yLabel: 'Changes detected',
      xUnit: 'ms',
      yUnit: '%',
      xValues: [0, 80, 160, 240, 320],
      yValues: [97, 70, 67, 65, 64],
      seriesLabel: 'Central-interest changes',
      comparisonSeries: [{ label: 'Marginal-interest changes', yValues: [95, 38, 33, 31, 30] }],
    },
    questions: [
      {
        question: 'Which result of Study 1 is most difficult to reconcile with an early-selection model of attention?',
        options: [
          'Most participants reported the change from a male to a female voice.',
          'Few participants reported the switch from English to Dutch.',
          'About a third of participants reported hearing their own name.',
          'Recognition of nouns from the left-ear list was at chance.',
        ],
        correctAnswer: 2,
        explanation:
          'An early filter blocks unattended input before its meaning is analyzed, so a word should never break through because of what it means; detection of one’s own name, which differs from the other words only in meaning, contradicts that. A change of voice is a physical feature that an early filter is supposed to pass, so noticing it fits the model. Failing to notice the language switch is predicted, because a change of language alters meaning rather than the voice. Chance-level recognition of the ignored nouns is exactly what blocking unattended meaning would produce.',
        skill: '6B selective attention: dichotic listening',
      },
      {
        question: 'Which conclusion is best supported by Figure 1?',
        options: [
          'Any blank tested sharply lowered detection, and the loss was larger for marginal-interest changes.',
          'Detection fell steadily as the blank lengthened, dropping by about the same amount at each step.',
          'The advantage for central-interest changes was greatest when the two images had no blank between them.',
          'Lengthening the blank beyond 80 ms impaired central-interest changes more than marginal-interest ones.',
        ],
        correctAnswer: 0,
        explanation:
          'Detection fell from 97% to 70% for central changes and from 95% to 38% for marginal changes as soon as an 80 ms blank was added, a larger loss for marginal changes, with only small further declines afterward. The decline was not steady: almost all of it occurred between 0 and 80 ms. The central-interest advantage was smallest, only 2 points, with no blank, and grew to more than 30 points once a blank was present. Beyond 80 ms, central detection fell 6 points (70% to 64%) while marginal detection fell 8 points (38% to 30%), so marginal changes were not spared.',
        skill: '6B data interpretation: change blindness',
      },
      {
        question: 'The high detection rates in the 0 ms condition are best explained by the fact that, without a blank,',
        options: [
          'each image remained on the screen longer, giving participants more time to scan the whole scene.',
          'the changed object was more often one that the raters had classified as being of central interest.',
          'the modified image was encoded more deeply because it followed the original image without delay.',
          'the change made a local flicker that pulled attention to that spot automatically.',
        ],
        correctAnswer: 3,
        explanation:
          'When one image replaces the other directly, the altered region produces a localized visual transient that captures attention, so the change is found at once; a blank masks that transient, and the viewer must then search the scene object by object, which is why detection collapses once any blank is added. Image duration was fixed at 240 ms in every condition, so viewing time did not differ. The interest classification was a property of each object, fixed across blank conditions. Depth of encoding concerns how meaningfully information is processed for later memory, not whether a transient signal is available during viewing.',
        skill: '6B attention and change blindness',
      },
      {
        question: 'Why was it important that central-interest and marginal-interest objects were matched in size and in distance from the image center?',
        options: [
          'It ensured that participants could not predict which of the objects would change on a given trial.',
          'It ruled out the possibility that the central advantage came from greater physical salience.',
          'It allowed the blank duration to be varied without altering the total length of each cycle.',
          'It ensured that the raters’ classifications would agree with those of the participants.',
        ],
        correctAnswer: 1,
        explanation:
          'Larger or more centrally placed objects are easier to see, so without matching, better detection of central-interest changes could reflect low-level visibility rather than the meaning of the object; matching removes that confound. Matching size and position does nothing to hide which object will change. Cycle length depends on image and blank durations, not on object properties. Matching physical features cannot guarantee that participants would judge interest the same way the raters did.',
        skill: '6B research design: controlling confounds',
      },
      {
        question: 'The smaller pedal-block decline among participants with clinical work experience is best explained by the idea that',
        options: [
          'practice had made scanning clinical scenes more automatic, freeing capacity for the second task.',
          'experienced participants attended less to the digits, accepting lower accuracy on the pedal task.',
          'experienced participants had keener visual acuity for small changes in color and object presence.',
          'inexperienced participants used a stricter criterion, reporting only changes they felt sure about.',
        ],
        correctAnswer: 0,
        explanation:
          'Well-practiced activities demand less of the limited capacity that controlled processing requires, so experienced participants could search a hospital scene while monitoring digits with less mutual interference. Pedal accuracy did not differ between the groups, so experienced participants did not buy their detection advantage by neglecting the digits. Keener acuity and a more lenient response criterion would both have produced a group difference in the listen-only block as well, but none was found; the difference appeared only when attention had to be divided.',
        skill: '6B divided attention and automaticity',
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — economy and government as institutions; power and authority
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Markets, States, and the Sources of Authority',
    passageText:
      'Every society must organize the production and distribution of goods and must settle who may make decisions that bind everyone else. Sociologists therefore treat the economy and the government, or polity, as social institutions: durable arrangements of roles, norms, and expectations that persist even as the individuals who fill them come and go.\n\nEconomic systems are usually placed along a continuum. In a capitalist system, the means of production are mostly privately owned, prices are set largely in markets, and firms and individuals pursue profit. In a socialist system, the means of production are owned collectively or by the state, and planning rather than market price determines much of what is produced and how it is distributed. Nearly every contemporary economy mixes the two. A welfare state is a largely capitalist economy in which the government guarantees a floor of security, such as pensions, unemployment insurance, and health coverage, financed through taxes and transfers. Welfare states differ in the degree to which they decommodify labor, that is, the degree to which they allow people to maintain an acceptable standard of living without selling their labor on the market.\n\nÉmile Durkheim argued that the division of labor transforms the basis of social cohesion. In small societies with little specialization, people perform similar tasks and hold similar beliefs, and cohesion rests on that likeness, which Durkheim called mechanical solidarity. As societies grow and work becomes specialized, cohesion comes to rest on differences, because each person depends on the distinct contributions of many others; Durkheim called this organic solidarity. He warned, however, that rapid economic change can outpace the development of shared norms, leaving people without clear guidance about what to expect or aim for, a condition he called anomie. Karl Marx located the defining feature of capitalism elsewhere, in the relationship between those who own the means of production and those who have nothing to sell but their labor, and he expected that relationship to generate conflict.\n\nMax Weber defined power as the capacity to realize one’s will even against the resistance of others, and authority as power that those subject to it accept as legitimate. He described three ideal types of authority. Traditional authority rests on custom and inherited status: obedience is owed to a position because it has always been owed. Charismatic authority rests on followers’ devotion to the extraordinary personal qualities of a particular leader. Rational-legal authority rests on impersonal rules; officials are obeyed because they hold offices defined by law or regulation, not because of who they are. Weber noted that charismatic authority is inherently unstable, because it cannot outlive its bearer unless it is routinized, that is, converted into one of the other two forms.\n\nPolities vary as well. Democracies distribute formal power broadly through elections and protected rights of participation, whereas authoritarian regimes concentrate power and restrict participation. Even within democracies, sociologists disagree about whether real power is dispersed among many competing interest groups, the pluralist view, or concentrated in a small, interlocking elite drawn from corporate, military, and political leadership, the power-elite view.',
    questions: [
      {
        question: 'A healing movement founded by a revered preacher adopts, after his death, a written constitution under which members elect a council that chooses each new leader for a fixed term. This change best illustrates:',
        options: [
          'the replacement of rational-legal authority with authority grounded in inherited custom.',
          'the transfer of authority from a leader’s personal qualities to offices defined by rules.',
          'the emergence of charismatic authority out of a long-standing tradition of leadership.',
          'a shift from organic solidarity to mechanical solidarity among the movement’s members.',
        ],
        correctAnswer: 1,
        explanation:
          'The movement’s authority originally rested on devotion to its founder’s personal qualities; the constitution vests it in an elected council and a term-limited office, which is the routinization of charisma into rational-legal authority. Nothing in the scenario involves inherited custom, and the movement moved toward written rules, not away from them. The founder’s authority was charismatic from the start and did not arise from tradition. Solidarity types describe the basis of cohesion in a whole society’s division of labor, not a change in how leaders are chosen.',
        skill: '9B authority: routinization of charisma',
      },
      {
        question: 'Country X pays unemployment benefits only to households whose income falls below a set threshold, and for at most six months. Country Y pays every unemployed citizen 70% of his or her prior wage for up to two years. Based on the passage, which comparison is most accurate?',
        options: [
          'Country X is closer to socialism, because its benefits are directed to those most in need.',
          'Country Y is closer to socialism, because its benefits are financed by taxes and transfers.',
          'Country X decommodifies labor more, because its benefits are concentrated on the poorest.',
          'Country Y decommodifies labor more, because more people can live longer without wages.',
        ],
        correctAnswer: 3,
        explanation:
          'Decommodification is the degree to which people can maintain a decent standard of living without selling their labor; universal, wage-related, long-lasting benefits let more people do so for longer than narrow, means-tested, short benefits. Neither country is described as owning the means of production or replacing markets with planning, so neither comparison with socialism follows; both are welfare states. Targeting benefits at the poorest leaves most people dependent on wages, so it decommodifies less, not more.',
        skill: '9B economy: the welfare state',
      },
      {
        question: 'As a country’s economy shifts from small family farms to hospitals, factories, and specialized services, which prediction would Durkheim, but not Marx, be most likely to make?',
        options: [
          'Conflict will intensify between those who own productive property and those who sell their labor.',
          'Cohesion will weaken for good, because people will no longer share the same tasks and beliefs.',
          'Specialization will make people more dependent on one another and so can bind them more closely.',
          'Workers will recognize a shared interest and organize to take control of the means of production.',
        ],
        correctAnswer: 2,
        explanation:
          'Durkheim held that a specialized division of labor produces organic solidarity, cohesion grounded in mutual dependence among people who do different things. Growing conflict between owners and workers, and workers organizing to seize the means of production, are Marx’s predictions. The claim that cohesion will be lost for good mistakes the decline of mechanical solidarity for the end of solidarity; Durkheim argued that a new basis of cohesion replaces the old one, although rapid change can bring temporary anomie.',
        skill: '9B division of labor: Durkheim vs Marx',
      },
      {
        question: 'A military council seizes control of a country and holds it only by threatening arrest; most citizens regard its officers as usurpers but comply out of fear. In Weber’s terms, the council has:',
        options: [
          'power without authority, because its commands are not accepted as legitimate.',
          'rational-legal authority, because its officers occupy clearly defined positions.',
          'charismatic authority, because it took control through extraordinary action.',
          'neither power nor authority, because citizens privately resist its rule.',
        ],
        correctAnswer: 0,
        explanation:
          'The council realizes its will against resistance, which is power, but because the governed do not regard it as legitimate, that power is not authority. Occupying defined positions does not create rational-legal authority unless the rules establishing those offices are accepted as legitimate. Charismatic authority rests on followers’ devotion to a leader’s personal qualities, not on a dramatic seizure backed by fear. Power by definition can operate against resistance, so private opposition does not mean the council lacks power.',
        skill: '9B government: power and authority',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASES — methods, lateralization, plasticity after injury
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Methods for Locating Function in the Brain',
    passageText:
      'Much of what is known about how functions are distributed across the human brain comes from a small set of methods, each with characteristic strengths and blind spots.\n\nLesion studies examine people in whom a region has been damaged by stroke, injury, or surgery. If damage to a region reliably abolishes an ability while sparing others, the region is inferred to be necessary for that ability. The inference has limits: naturally occurring damage rarely respects anatomical boundaries, patients are few and differ from one another, and the brain may reorganize in the months after injury, so that what is observed later may not reflect the region’s original role.\n\nElectroencephalography (EEG) records voltage fluctuations at the scalp produced by the summed activity of large populations of cortical neurons firing together. EEG follows changes in neural activity on a scale of milliseconds, but because electrical signals spread as they pass through the skull and scalp, it identifies the source of activity only coarsely. Functional magnetic resonance imaging (fMRI) instead measures the blood-oxygen-level-dependent (BOLD) signal, which rises a few seconds after neurons in a region become more active and freshly oxygenated blood flows in. fMRI can localize activity to within a few millimeters, but its sluggish hemodynamic response blurs events separated by less than a few seconds. Both EEG and fMRI are correlational: they reveal that a region is active while a task is performed, not that performance depends on the region. Transcranial magnetic stimulation (TMS), in which a brief magnetic pulse applied over the scalp induces currents in the cortex beneath it, can temporarily and reversibly disrupt a targeted area in healthy volunteers.\n\nThe two cerebral hemispheres are not functionally identical. In most right-handed people, the left hemisphere is dominant for producing language and for fine sequential analysis, whereas the right hemisphere is relatively specialized for spatial relations, face recognition, and the emotional tone of speech. Each hemisphere receives visual information from the opposite visual field and controls movement and touch on the opposite side of the body. In patients whose corpus callosum has been surgically cut to control severe epilepsy, information that reaches one hemisphere cannot be passed to the other, which allows the capacities of each hemisphere to be tested separately.\n\nThe brain also changes with experience. Synaptic connections strengthen or weaken with use, the cortical area devoted to a body part expands when that part is used extensively, and regions deprived of their usual input can be recruited for other functions. Recovery after injury depends heavily on age. Children who sustain extensive damage to one hemisphere early in life often develop near-normal abilities, apparently because undamaged tissue assumes functions it would not ordinarily have taken on, whereas adults with comparable damage usually show lasting deficits. Plasticity is not uniformly beneficial, however. After an arm is amputated, the cortical territory that once represented it can be taken over by neighboring representations, a reorganization associated with sensations that the person refers to the missing limb.',
    questions: [
      {
        question: 'A researcher wants to know whether a brain response that distinguishes familiar from unfamiliar faces begins about 170 ms or about 400 ms after a face appears. Which approach is best suited to this question?',
        options: [
          'fMRI recorded while participants view familiar and unfamiliar faces',
          'Testing patients with right-hemisphere lesions who cannot recognize faces',
          'Structural MRI comparing face-region size in people with good and poor face memory',
          'EEG recorded while participants view familiar and unfamiliar faces',
        ],
        correctAnswer: 3,
        explanation:
          'Distinguishing 170 ms from 400 ms requires millisecond temporal resolution, which EEG provides. The BOLD signal used by fMRI lags neural activity by seconds and blurs events that close together, however precisely it localizes them. A lesion study could show that a region is needed for recognizing faces but says nothing about when a response begins. Structural MRI measures anatomy, not activity, so it cannot time a response at all.',
        skill: '6A methods: temporal resolution of EEG vs fMRI',
      },
      {
        question: 'An fMRI study finds that a region of right parietal cortex becomes more active whenever participants judge which of two lines is longer. Which additional finding would most strongly indicate that this region is necessary for the judgment?',
        options: [
          'Activation in the region is greater when the two lines differ only slightly in length.',
          'TMS over the region briefly impairs line-length judgments but leaves color judgments intact.',
          'EEG over the parietal scalp shows a response about 200 ms after the lines appear.',
          'The same region also becomes active when participants judge the orientation of lines.',
        ],
        correctAnswer: 1,
        explanation:
          'Necessity is shown by disrupting a region and observing a selective loss; TMS produces a temporary disruption, and sparing color judgments shows that the impairment is specific rather than a general effect of stimulation. Greater activation for harder judgments, an EEG response at a particular latency, and activation during a related task are all additional correlations between activity and performance, and none shows that performance depends on the region.',
        skill: '6A research design: correlational vs disruption methods',
      },
      {
        question: 'A patient whose corpus callosum has been cut fixates a central point while the word SPOON is flashed briefly in her left visual field. Which response is most likely?',
        options: [
          'She says she saw nothing, but her left hand can pick out a spoon by touch.',
          'She names the word aloud, but her left hand cannot pick out a spoon by touch.',
          'She names the word aloud, and either hand can pick out a spoon by touch.',
          'She says she saw nothing, and neither hand can pick out a spoon by touch.',
        ],
        correctAnswer: 0,
        explanation:
          'Input from the left visual field reaches only the right hemisphere, which cannot produce speech, so the patient reports seeing nothing; the right hemisphere controls the left hand, which can still identify a spoon by touch. Naming the word would require the information to reach the language-dominant left hemisphere, which the cut callosum prevents. The right hand is controlled by the left hemisphere, which never received the word, so it cannot select the spoon, but the left hand can.',
        skill: '6A lateralization: split-brain',
      },
      {
        question: 'Two patients sustained comparable damage to the left-hemisphere regions that support speech, one at age 3 and the other at age 40. Fifteen years later, briefly anesthetizing only the right hemisphere would most likely disrupt speech in:',
        options: [
          'both patients, because speech is controlled by the right hemisphere in most adults.',
          'neither patient, because each regained speech within the damaged left hemisphere.',
          'mainly the patient injured at age 3, whose speech likely came to depend on the right hemisphere.',
          'mainly the patient injured at age 40, whose speech recovered least after the injury.',
        ],
        correctAnswer: 2,
        explanation:
          'Early extensive damage allows undamaged tissue, here the right hemisphere, to take over functions it would not normally serve, so the patient injured at age 3 most likely relies on the right hemisphere for speech. Speech is left-dominant in most adults, not right-dominant. The child’s recovery is attributed to undamaged tissue rather than to the damaged hemisphere. The adult’s limited recovery indicates that the right hemisphere did not take over, so silencing it should disturb what speech remains the least.',
        skill: '6A neuroplasticity and age at injury',
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — social facilitation, social loafing, deindividuation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Audiences, Pooled Effort, and Anonymity in a Laboratory Task',
    passageText:
      'Social psychologists have long observed that people behave differently when others are present. In social facilitation, the mere presence of observers or coactors changes how well a person performs. In social loafing, people exert less effort on a collective task than they would exert working alone. In deindividuation, a loss of self-awareness that can occur in groups, especially under conditions of anonymity, weakens the restraint normally imposed by personal standards. Researchers designed a single experiment to examine all three phenomena.\n\nUndergraduates (N = 160) were randomly assigned to one of four conditions (n = 40 each). In the alone condition, participants worked by themselves in a small room and were told that their individual output would be recorded. In the audience condition, participants also worked by themselves, but two graduate students sat nearby and appeared to take notes on their performance; individual output was again recorded. In the pooled condition, participants worked in groups of four at separate stations and were told that only the group’s total output would be recorded; each wore a name tag, and members were introduced to one another by name. The anonymous pooled condition was identical to the pooled condition, except that participants wore identical oversized lab coats and hoods, were addressed only by station number, and were assured that no one, including the experimenters, could link any output to a particular person. In fact, software at each station recorded every participant’s individual output in all four conditions.\n\nEach participant completed two tasks in counterbalanced order. The simple task required copying strings of letters and digits from a screen for 5 minutes, a task that participants had practiced during a warm-up period. The complex task required solving anagrams presented in an unfamiliar letter-substitution code for 5 minutes, with no practice. Between the tasks, participants rated how aware they currently felt of themselves and of how they appeared to others, on a scale from 1 (not at all) to 7 (extremely).\n\nAt the end of the session, each participant received a sealed envelope containing twenty tokens, each exchangeable for one dollar, and was instructed to keep one token for every anagram he or she had solved and to leave the remainder in the envelope. Participants recorded the number they kept on an unsigned slip. Because the station software had recorded individual output, the researchers could determine whether each participant kept more tokens than he or she had earned. After a full debriefing, all participants received the maximum payment regardless of what they had kept. Results are summarized in Table 1.',
    figure:
      '**Table 1.** Mean output on each task, mean self-awareness rating, and percentage of participants who kept more tokens than earned, by condition\n\n| Condition | n | Strings copied (simple task) | Anagrams solved (complex task) | Self-awareness (1–7) | Kept extra tokens (%) |\n|---|---|---|---|---|---|\n| Alone | 40 | 52 | 14 | 4.1 | 10 |\n| Audience | 40 | 61 | 10 | 5.6 | 5 |\n| Pooled | 40 | 44 | 12 | 3.8 | 13 |\n| Anonymous pooled | 40 | 43 | 12 | 2.3 | 35 |',
    questions: [
      {
        question: 'According to Table 1, compared with working alone, working in front of an audience was associated with:',
        options: [
          'better performance on the practiced task and worse performance on the unpracticed task.',
          'better performance on both tasks, with the larger gain on the unpracticed task.',
          'worse performance on the practiced task and better performance on the unpracticed task.',
          'no change in performance on either task, along with lower self-awareness.',
        ],
        correctAnswer: 0,
        explanation:
          'The audience group copied more strings than the alone group (61 vs 52) but solved fewer anagrams (10 vs 14), so performance rose on the practiced task and fell on the unpracticed one. Anagram performance fell rather than rose, which rules out gains on both tasks. Worse copying with better anagram solving is the exact reverse of the observed pattern. Performance changed on both tasks, and self-awareness was higher (5.6 vs 4.1), not lower.',
        skill: '7C data interpretation: social facilitation',
      },
      {
        question: 'Which explanation of the audience results is most consistent with Zajonc’s drive theory of social facilitation?',
        options: [
          'Observers weakened each person’s sense of responsibility, lowering effort on both tasks.',
          'Observers lowered self-awareness, so personal standards no longer guided people’s work.',
          'Observers raised arousal, which strengthens well-learned responses and disrupts new ones.',
          'Observers distracted participants to the same degree on both tasks, slowing all responses.',
        ],
        correctAnswer: 2,
        explanation:
          'Zajonc proposed that the presence of others increases arousal, which makes dominant (well-learned) responses more likely; on a practiced task the dominant response is correct, and on an unfamiliar task it is often wrong, producing the observed crossover. Diffused responsibility and lowered effort describe social loafing, which occurs when individual output cannot be identified, not when observers are watching. Lowered self-awareness describes deindividuation, and self-awareness actually rose with an audience. Equal distraction on both tasks would impair both, not improve copying.',
        skill: '7C social facilitation: drive theory',
      },
      {
        question: 'Based on the results, which change to the pooled condition would most likely raise simple-task output to about the level of the alone condition?',
        options: [
          'Enlarging each group from four members to eight members',
          'Telling participants that each member’s output would be recorded and shown to the group',
          'Having participants wear the hoods and coats used in the anonymous pooled condition',
          'Paying each group a fixed fee regardless of how much its members produced',
        ],
        correctAnswer: 1,
        explanation:
          'Output fell in both pooled conditions, where individual contributions were said to be unidentifiable, which is the signature of social loafing; making each person’s contribution identifiable and evaluable removes the conditions that produce it. Larger groups make any one contribution less identifiable and typically increase loafing. Hoods and coats added anonymity without changing output (43 vs 44), so they would not restore effort. A fixed fee severs the link between effort and outcome and would, if anything, reduce effort further.',
        skill: '7C social loafing',
      },
      {
        question: 'Which additional condition would best test whether the high rate of token-keeping in the anonymous pooled condition required being part of a group?',
        options: [
          'A pooled condition in which participants’ names were displayed on their stations',
          'A pooled condition in which only one member of each group wore a hood and coat',
          'An audience condition in which the two observers wore identical hoods and coats',
          'A solo condition in which participants wore hoods and coats and were addressed by number',
        ],
        correctAnswer: 3,
        explanation:
          'The anonymous pooled condition combined anonymity with group membership, so the question is whether anonymity alone produces the effect; an otherwise identical condition with anonymity but no group isolates that factor. Displaying names in a pooled group essentially reproduces the existing pooled condition. Hooding one member changes the anonymity of only that person while still keeping everyone in a group. Hooding the observers changes the anonymity of other people, not of the participant whose behavior is being measured.',
        skill: '7C research design: isolating a variable',
      },
      {
        question: 'Which conclusion about deindividuation is best supported by the token-keeping results?',
        options: [
          'Dishonesty rose with how little effort participants made, regardless of their condition.',
          'Being observed by others increased dishonesty by making participants more self-conscious.',
          'Group membership alone did little; dishonesty rose sharply when paired with anonymity.',
          'Anonymity reduced effort on both tasks relative to the ordinary pooled condition.',
        ],
        correctAnswer: 2,
        explanation:
          'Token-keeping was similar in the alone (10%) and named pooled (13%) conditions but rose to 35% when group membership was combined with anonymity, alongside the lowest self-awareness rating, which is the pattern deindividuation predicts. Effort was about equally low in the two pooled conditions, yet dishonesty differed nearly threefold, so dishonesty did not track effort. The audience group, the most self-aware, was the least dishonest (5%). Output in the two pooled conditions was essentially identical, so anonymity did not reduce effort further.',
        skill: '7C deindividuation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. DEVELOPMENT — temperament, behavioral inhibition, parenting styles
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-a-05',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Infant Reactivity, Parenting, and Shyness Through Childhood',
    passageText:
      'Temperament refers to individual differences in emotional reactivity, activity level, and self-regulation that appear early in life and are partly heritable. In a classic longitudinal project, Thomas and Chess classified most infants as easy, difficult, or slow-to-warm-up on the basis of traits such as the regularity of their routines, the intensity of their reactions, and whether they approached or withdrew from new situations. Later researchers identified behavioral inhibition, a tendency to become distressed and wary in response to unfamiliar people, objects, and settings. Infants who, at 4 months of age, thrash their limbs and cry vigorously when shown novel mobiles or smells are more likely than calmer infants to be inhibited as toddlers. Inhibition is moderately stable: many, though not all, inhibited toddlers remain cautious in new social situations well into childhood.\n\nParenting is commonly described along two dimensions: responsiveness, meaning warmth and attention to the child’s needs, and demandingness, meaning expectations, supervision, and control. Diana Baumrind’s typology combines these dimensions to yield authoritative, authoritarian, and permissive styles; a fourth, uninvolved, style was added by later researchers.\n\nIn a longitudinal study, researchers assessed 220 infants at 4 months and, at 24 months, classified each child as behaviorally inhibited (n = 64) or uninhibited (n = 156) on the basis of laboratory encounters with a stranger and with unfamiliar toys. When each child was 3 years old, trained observers watched parents and children during a structured play session and a home visit and classified each parent’s style. Among parents of inhibited children, 25 were classified as authoritative, 27 as authoritarian, and 12 as permissive or uninvolved; the last group was too small to analyze separately. Teachers, who were unaware of the children’s temperament classifications and of the parenting ratings, rated each child’s social withdrawal on a 0–10 scale at ages 4, 6, 8, 10, and 12; the scale reflected how often a child stayed at the edge of group activities, avoided unfamiliar peers, or remained silent when addressed. Of the 220 children, 208 were still participating at age 12; group sizes in Figure 1 are the counts at 24 months, and children who left the study are omitted from later means. Because withdrawal did not differ by parenting style among uninhibited children, their scores were combined. Mean withdrawal scores are shown in Figure 1.\n\nThe researchers also reported that the toddlers who had shown the most intense distress toward the stranger at 24 months had parents who were rated as more controlling at the 3-year observation ($r = 0.38$).\n\nThe researchers concluded that temperament sets a starting point for a child’s social development, but that the environment a child encounters helps determine whether early wariness persists or fades.',
    chart: {
      title: 'Figure 1. Mean teacher-rated social withdrawal (0–10) from age 4 to age 12, by temperament at 24 months and parenting style at age 3',
      kind: 'line',
      xLabel: 'Child’s age',
      yLabel: 'Mean social withdrawal',
      xUnit: 'years',
      xValues: [4, 6, 8, 10, 12],
      yValues: [6.8, 5.9, 5.0, 4.3, 3.9],
      seriesLabel: 'Inhibited, authoritative parents (n = 25)',
      comparisonSeries: [
        { label: 'Inhibited, authoritarian parents (n = 27)', yValues: [7.0, 7.1, 7.3, 7.4, 7.5] },
        { label: 'Uninhibited, all parenting styles (n = 156)', yValues: [2.4, 2.3, 2.3, 2.2, 2.2] },
      ],
    },
    questions: [
      {
        question: 'Which statement is best supported by Figure 1?',
        options: [
          'At age 4, inhibited children of authoritarian parents were far more withdrawn than those of authoritative parents.',
          'The gap between the two inhibited groups grew with age as one group moved toward the uninhibited group.',
          'Uninhibited children became steadily more withdrawn as they progressed from age 4 to age 12.',
          'By age 12, inhibited children of authoritative parents were no more withdrawn than uninhibited children.',
        ],
        correctAnswer: 1,
        explanation:
          'The two inhibited groups began nearly equal (6.8 vs 7.0 at age 4) and diverged to 3.9 vs 7.5 at age 12, with the authoritative group declining toward the uninhibited group’s level. The groups were not far apart at age 4. Uninhibited children’s scores stayed flat near 2.2 to 2.4. At age 12 the authoritative inhibited group (3.9) remained more withdrawn than the uninhibited group (2.2).',
        skill: '7A data interpretation: longitudinal trends',
      },
      {
        question: 'Parents classified as authoritative in the study would most likely be described as:',
        options: [
          'warm and accepting, but setting few rules and rarely enforcing limits.',
          'firm and controlling, expecting obedience without explaining their rules.',
          'low in both warmth and demands, providing little supervision or guidance.',
          'warm and responsive, while setting clear limits and giving reasons.',
        ],
        correctAnswer: 3,
        explanation:
          'Authoritative parenting combines high responsiveness with high demandingness: parents are warm, set and enforce clear expectations, and explain their reasons. Warmth with few rules is permissive parenting. Control and demands for unexplained obedience, with little warmth, describe authoritarian parenting. Low warmth and low demands describe the uninvolved style.',
        skill: '7A parenting styles (Baumrind)',
      },
      {
        question: 'Which alternative to the conclusion that authoritarian parenting maintained children’s withdrawal is most directly suggested by the passage?',
        options: [
          'The most intensely inhibited toddlers may have drawn more control from their parents.',
          'Teachers may have rated children as more withdrawn when they knew that the parents were strict.',
          'Authoritarian parenting may have caused the behavioral inhibition first observed at 24 months.',
          'Uninhibited children may have received permissive parenting, which reduced their withdrawal.',
        ],
        correctAnswer: 0,
        explanation:
          'Toddler distress at 24 months predicted how controlling parents were a year later, so a child’s intense inhibition may elicit controlling parenting, and the same intensity could independently predict persistent withdrawal; the association would then reflect a child effect rather than a parenting effect. Teachers were unaware of the parenting ratings, so rater bias is ruled out. An effect of parenting on inhibition is not an alternative to parenting causing withdrawal; it is another parenting effect. Parenting style was unrelated to withdrawal among uninhibited children, so their parenting cannot explain the inhibited children’s outcomes.',
        skill: '7A research design: bidirectional effects',
      },
      {
        question: 'Thomas and Chess proposed that development goes best when there is a “goodness of fit” between a child’s temperament and the demands of the environment. Which result from the study most directly illustrates this idea?',
        options: [
          'Inhibited children were more withdrawn than uninhibited children at every age tested.',
          'Infants who reacted intensely at 4 months were more often inhibited at 24 months.',
          'Parenting predicted later withdrawal among inhibited but not uninhibited children.',
          'Withdrawal among children of authoritarian parents rose slightly from age 4 to age 12.',
        ],
        correctAnswer: 2,
        explanation:
          'Goodness of fit is an interaction: the same environment matters differently depending on the child’s temperament, and parenting style mattered for inhibited children but made no difference for uninhibited ones. A difference between temperament groups at every age is a main effect of temperament alone. Continuity from infant reactivity to toddler inhibition concerns the stability of temperament, not its match with the environment. A slight rise in one group describes a single trajectory and involves no comparison of temperaments.',
        skill: '7A temperament: goodness of fit',
      },
    ],
  },
]

export const FL3_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-ps-a-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A patient loses all vision in one eye after a retinal injury. Which depth cue is no longer available to her?',
    options: ['relative size', 'linear perspective', 'retinal disparity', 'interposition'],
    correctAnswer: 2,
    explanation:
      'Retinal disparity, the slight difference between the images on the two retinas, requires input from both eyes, so it is lost with monocular vision. Relative size, linear perspective, and interposition (one object blocking another) are monocular cues that are present in the image of a single eye and remain available.',
    skill: '6A depth perception: binocular vs monocular cues',
  },
  {
    id: 'fl3-ps-a-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'Participants read a list of words on a screen and then recall them in order. When they repeat “the, the, the” aloud while reading the list, recall drops and the usual advantage for short words over long words disappears. In Baddeley’s model, the repetition most directly interferes with:',
    options: ['the phonological loop', 'the visuospatial sketchpad', 'the central executive', 'the episodic buffer'],
    correctAnswer: 0,
    explanation:
      'Repeating irrelevant speech occupies the articulatory rehearsal process of the phonological loop, which is also what recodes visually presented words into sound; the short-word advantage arises because short words can be rehearsed faster, so blocking rehearsal abolishes it. The visuospatial sketchpad holds images and spatial layouts and is not taxed by repeating a word. Saying one word over and over requires little executive control, and the central executive would not explain the specific loss of the word-length effect. The episodic buffer integrates information across systems and with long-term memory rather than supporting subvocal rehearsal.',
    skill: '6B working memory (Baddeley)',
  },
  {
    id: 'fl3-ps-a-d03',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A child rides in the back seat every week as a parent drives to a grandparent’s house and is never asked to learn the route. Months later, when the parent offers a treat for giving directions, the child gives correct directions on the first attempt. This is best described as:',
    options: [
      'insight learning, because the solution came suddenly after a period of impasse.',
      'latent learning, because knowledge gained without reward showed once a reward was offered.',
      'shaping, because closer approximations of the route had been reinforced over many trips.',
      'operant conditioning, because giving directions had been reinforced on earlier trips.',
    ],
    correctAnswer: 1,
    explanation:
      'The route was learned without any reinforcement and remained unexpressed until an incentive made performing it worthwhile, which is latent learning. Insight involves suddenly restructuring an unsolved problem after an impasse, and the child had no problem or impasse. Shaping and operant conditioning both require reinforcement of the behavior or approximations of it, but the child had never been asked for or rewarded for giving directions.',
    skill: '7A latent learning',
  },
  {
    id: 'fl3-ps-a-d04',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'A woman who harbors intense but unacknowledged resentment toward her younger brother praises him lavishly and conspicuously at every family gathering. Her behavior best illustrates which defense mechanism?',
    options: ['projection', 'displacement', 'sublimation', 'reaction formation'],
    correctAnswer: 3,
    explanation:
      'Reaction formation manages an unacceptable impulse by expressing its exaggerated opposite, here conspicuous praise in place of resentment. Projection would attribute her own resentment to her brother, for instance by believing he resents her. Displacement would redirect the hostility toward a safer target. Sublimation would channel the impulse into a socially valued activity, such as competitive work, rather than into its opposite.',
    skill: '7A psychoanalytic defense mechanisms',
  },
  {
    id: 'fl3-ps-a-d05',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Hypnotized participants told that they will feel no pain hold a hand in ice water and report little discomfort. When the hypnotist then asks a “hidden part” of them to raise a finger if pain is present, many do so and later describe the pain as intense. This finding is most consistent with the view that hypnosis involves:',
    options: [
      'a sleep-like state in which sensory input no longer reaches the cortex.',
      'a split in consciousness, with some processing outside awareness.',
      'a loss of sensation comparable to that produced by a local anesthetic.',
      'a heightened state of arousal in which attention to the body increases.',
    ],
    correctAnswer: 1,
    explanation:
      'The pain was registered and could be reported by a “hidden” channel even though the hypnotized participant did not consciously experience it, which fits the dissociation account that hypnosis splits consciousness into separate streams. Hypnotized people show waking EEG patterns, and the pain clearly reached the processing needed to report it, so a sleep-like state blocking sensory input does not fit. Anesthetic-like loss of sensation would leave nothing for the hidden part to report. Heightened attention to the body would increase reported discomfort, not reduce it.',
    skill: '6B altered states: hypnosis',
  },
  {
    id: 'fl3-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Two applicants to a competitive summer research program have similar grades. One, whose parents are professors, is at ease with the conventions of academic interviews, and his mother is acquainted with the program’s director. His ease with interview conventions and his mother’s acquaintance with the director are examples, respectively, of:',
    options: [
      'social capital and cultural capital',
      'human capital and social capital',
      'cultural capital and human capital',
      'cultural capital and social capital',
    ],
    correctAnswer: 3,
    explanation:
      'Familiarity with the tastes, manners, and conventions valued by elite institutions is cultural capital, and resources available through relationships with other people are social capital. Reversing the two labels mislabels both. Human capital refers to skills and knowledge that raise productivity, such as training or grades, and describes neither the applicant’s comfort with interview etiquette nor his mother’s connection.',
    skill: '10A social vs cultural capital',
  },
  {
    id: 'fl3-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Over a decade, a working-class neighborhood near a city’s downtown attracts new cafés and higher-income residents; rents and property taxes rise, and many long-time renters move to outlying areas. This process is best described as:',
    options: ['gentrification', 'suburbanization', 'urban renewal', 'ghettoization'],
    correctAnswer: 0,
    explanation:
      'Gentrification is the influx of higher-income residents and investment into a lower-income urban neighborhood, raising costs and displacing earlier residents. Suburbanization is the broad movement of population from central cities to suburbs by choice, not displacement of renters by an incoming wealthier population. Urban renewal refers to planned, usually government-led clearance and redevelopment. Ghettoization is the concentration and isolation of a disadvantaged group, the opposite of an inflow of affluent residents.',
    skill: '9B urbanization: gentrification',
  },
  {
    id: 'fl3-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A first-generation medical student with no physicians in her family adopts the dress, vocabulary, and study routines of the residents she hopes to join someday. For her, the residents serve primarily as:',
    options: ['a primary group', 'an out-group', 'a reference group', 'a secondary group'],
    correctAnswer: 2,
    explanation:
      'A reference group is one whose standards a person uses to evaluate and shape her own behavior, whether or not she belongs to it, and the student models herself on residents she has not yet joined. A primary group is a small, intimate, long-lasting group such as family or close friends. An out-group is one a person does not identify with and often views competitively, which is not how she regards the residents. A secondary group is a larger, impersonal, goal-directed group in which she would already be a member.',
    skill: '7C groups: reference groups',
  },
]
