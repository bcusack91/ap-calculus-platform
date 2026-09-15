/**
 * MCAT Psych/Soc discrete (standalone) items — wave 2.
 *
 * 22 items spread across the AAMC content categories (sensation/perception,
 * learning & memory, cognition/language, emotion/stress, biological bases,
 * personality/disorders, social processes, identity/development, sociology,
 * research methods). Skills deliberately mix concept identification with
 * application: prediction, research design, and data interpretation.
 *
 * Keys are position-balanced and explanations reference options by CONTENT,
 * never by letter, so options may be reordered safely.
 */
import type { MCATDiscreteQuestion } from '../types'

export const PSYCH_SOC_DISCRETES_2: MCATDiscreteQuestion[] = [
  {
    id: 'psd2-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'In a weight-discrimination task, a participant can just barely tell a 105 g weight from a 100 g standard. According to Weber’s law, what is the smallest increase she should be able to detect when the standard is 400 g?',
    options: ['5 g', '10 g', '20 g', '40 g'],
    correctAnswer: 2,
    explanation:
      'Weber’s law states that the just-noticeable difference is a constant proportion of the standard stimulus. Here the Weber fraction is 5/100 = 0.05, so for a 400 g standard the smallest detectable increase is 0.05 × 400 = 20 g. Answering 5 g treats the just-noticeable difference as a fixed absolute amount, which is exactly what Weber’s law denies. An increase of 10 g corresponds to a 200 g standard, not a 400 g one. An increase of 40 g would require a Weber fraction of 0.10, double the one measured.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-02',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'At baseline, radiologists screening scans for tumors receive no feedback. In a new condition they earn a bonus for every tumor they correctly flag and face no penalty for flagging a healthy scan. Signal detection theory predicts that, relative to baseline, they will show:',
    options: [
      'More hits and more false alarms, from a more liberal criterion',
      'More hits and fewer false alarms, from an increase in sensitivity (d′)',
      'Fewer false alarms and unchanged hits, from a stricter response criterion',
      'No change in hits or false alarms, since the absolute threshold is fixed',
    ],
    correctAnswer: 0,
    explanation:
      'In signal detection theory, payoffs shift the response criterion (response bias), not sensitivity. Rewarding hits while never penalizing false alarms makes a "tumor present" response cheap, so the criterion becomes more liberal: hits and false alarms both rise. A rise in sensitivity (d′) would raise hits while lowering false alarms, but payoffs do not change how discriminable the tumors are on the scans. A stricter criterion is what a penalty for false alarms would produce, the opposite of these incentives. Predicting no change ignores that detection responses depend on the decision criterion as well as on the sensory evidence, so changing the payoffs changes responding even though the scans themselves are unchanged.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-03',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'Participants hear a 15-word list. One group recalls the words immediately; a second group first counts backward by threes for 30 seconds and then recalls. Compared with the immediate-recall group, the delayed group is most likely to show:',
    options: [
      'A loss of the primacy effect with the recency effect intact',
      'Equal loss of both the primacy effect and the recency effect',
      'Better recall of middle items than of the first few items',
      'A loss of the recency effect with the primacy effect preserved',
    ],
    correctAnswer: 3,
    explanation:
      'The recency effect reflects the last few items still being held in short-term memory; a 30-second distractor task displaces them, so the recency advantage disappears. The primacy effect reflects extra rehearsal that moved the first items into long-term memory, so it survives the delay (the classic Glanzer and Cunitz result). Losing primacy while keeping recency is the reverse pattern, produced by preventing rehearsal during presentation (for example, very fast presentation), not by a delay after the list. Equal loss of both effects is wrong because long-term storage of the early items is not disrupted by a brief distractor. Middle items remain poorly recalled because they receive neither the rehearsal advantage nor the short-term memory advantage.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-04',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'Group 1 studies a list of Spanish–English word pairs, then studies a second list pairing the same Spanish words with different English words. Group 2 studies the first list and then rests for the same length of time. Both groups study and are tested in the same room. When tested on the first list, Group 1 recalls far fewer pairs. Which explanation does this design best support?',
    options: [
      'Proactive interference from having learned the first list',
      'Retroactive interference from learning the second list',
      'Trace decay over the time since the first list was studied',
      'Retrieval failure from a mismatch between study and test contexts',
    ],
    correctAnswer: 1,
    explanation:
      'When newly learned material impairs recall of earlier material, the effect is retroactive interference: learning the second list disrupted memory for the first, which is exactly what was tested. Proactive interference runs the other way, with earlier learning impairing recall of later material, so it would show up on a test of the second list. Trace decay cannot explain the difference because both groups had the same retention interval; the only difference between them was the second list. A context mismatch is ruled out because both groups studied and were tested in the same room.',
    skill: 'experimental-reasoning',
  },
  {
    id: 'psd2-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A car sounds a loud, persistent chime until the driver fastens her seat belt. Over several weeks she begins fastening the belt sooner each time she gets in. The increase in belt-fastening is best explained by:',
    options: ['Positive reinforcement', 'Positive punishment', 'Negative reinforcement', 'Negative punishment'],
    correctAnswer: 2,
    explanation:
      'Fastening the belt removes an aversive stimulus (the chime), and the behavior becomes more frequent, which defines negative reinforcement. Positive reinforcement would require adding a pleasant stimulus after the behavior, but nothing is added here. Both forms of punishment decrease a behavior, whereas belt-fastening increases: positive punishment adds an aversive stimulus after the behavior, and negative punishment takes away a pleasant one.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-06',
    section: 'psych-soc',
    discipline: 'cognition-and-language',
    question:
      'Speakers of a language that describes locations using only cardinal directions (north, south, east, west), with no words for "left" or "right," stay better oriented in unfamiliar buildings than English speakers do. Which theoretical position does this finding most directly support?',
    options: [
      'Whorf’s linguistic relativity hypothesis',
      'Chomsky’s nativist theory of language',
      'Skinner’s learning theory of language',
      'The social interactionist theory of language',
    ],
    correctAnswer: 0,
    explanation:
      'The finding suggests that the categories a language provides shape nonlinguistic thinking (here, spatial orientation), which is the claim of Whorf’s linguistic relativity hypothesis. Chomsky’s nativist theory holds that children acquire language through an innate language acquisition device; it explains how language is learned, not how a particular language shapes thought. Skinner’s learning theory explains language acquisition through reinforcement and imitation, again saying nothing about language shaping cognition. The social interactionist theory explains acquisition as arising from biology interacting with social exchange, and likewise addresses how language develops rather than its effect on thought.',
    skill: 'which-theory',
  },
  {
    id: 'psd2-07',
    section: 'psych-soc',
    discipline: 'cognition-and-language',
    question:
      'Participants must mount a candle on a wall using a book of matches and a box of thumbtacks. Those given the tacks inside the box solve the problem far less often than those given the same tacks lying beside the empty box. This difference is best attributed to:',
    options: ['Confirmation bias', 'Belief perseverance', 'The availability heuristic', 'Functional fixedness'],
    correctAnswer: 3,
    explanation:
      'The solution is to tack the box to the wall as a shelf. When the box is presented full of tacks, people see it only in its usual role as a container and fail to see another use for it, which is functional fixedness; presenting the box empty weakens that fixation. Confirmation bias is seeking or favoring evidence that supports an existing belief, and no hypothesis is being tested here. Belief perseverance is holding on to a belief after the evidence for it has been discredited, which does not describe a problem-solving failure. The availability heuristic is judging frequency or likelihood by how easily examples come to mind, which has nothing to do with seeing a new use for an object.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-08',
    section: 'psych-soc',
    discipline: 'emotion-and-stress',
    question:
      'In a classic study, participants were injected with epinephrine and then waited with a confederate who acted euphoric. Participants correctly told to expect a pounding heart and trembling hands reported less euphoria than participants who were given no accurate explanation of these effects. According to the Schachter–Singer two-factor theory, the informed participants felt less euphoric because they:',
    options: [
      'Experienced less physiological arousal from the injection',
      'Attributed their arousal to the injection, not the situation',
      'Felt emotion through appraisal alone, bypassing bodily arousal',
      'Imitated the confederate’s facial expressions less often',
    ],
    correctAnswer: 1,
    explanation:
      'The two-factor theory holds that emotion requires both physiological arousal and a cognitive label for it. The informed participants had a non-emotional explanation for their racing hearts (the drug), so they did not label the arousal as euphoria; the uninformed participants used the euphoric situation as the label. Less arousal cannot explain the difference, because both groups received the same epinephrine, and the theory locates the difference in labeling. Emotion through appraisal alone contradicts the two-factor theory, which requires arousal as one of its two factors. Reduced imitation of facial expressions belongs to the facial feedback hypothesis, and the manipulation here was information about side effects, not facial expression.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-09',
    section: 'psych-soc',
    discipline: 'emotion-and-stress',
    question:
      'A student learns she has a major exam in three days and immediately judges it stressful, a real danger to her grade. She then asks herself whether she has enough time, notes, and help from classmates to handle it. In Lazarus’s model of stress, her question about whether she can handle it is an example of:',
    options: ['Secondary appraisal', 'Primary appraisal', 'Problem-focused coping', 'Emotion-focused coping'],
    correctAnswer: 0,
    explanation:
      'In Lazarus’s transactional model, primary appraisal judges whether a situation is irrelevant, benign-positive, or stressful; secondary appraisal then evaluates whether one has the resources to cope with it. Weighing her time, notes, and classmates is secondary appraisal. Primary appraisal is the first step she already took when she judged the exam stressful. Problem-focused coping is acting on the stressor itself, such as making a study schedule, and she has not yet acted. Emotion-focused coping is managing the emotional response, such as through relaxation or reframing, which is not what an inventory of resources does.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-10',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A patient whose corpus callosum has been surgically severed fixates on a central point while a picture of a key is flashed briefly to his left visual field. Asked what he saw, and then asked to find the object by touch among hidden items, he will most likely:',
    options: [
      'Name the key aloud, but fail to find it with his left hand',
      'Name the key aloud and find it by touch with his right hand',
      'Say he saw nothing, yet find the key by touch with his left hand',
      'Say he saw nothing and fail to find the key with either hand',
    ],
    correctAnswer: 2,
    explanation:
      'Input from the left visual field goes to the right hemisphere. With the corpus callosum cut, that information cannot reach the left hemisphere, where speech is usually produced, so the patient cannot name the key. The right hemisphere does control and receive touch from the left hand, so the left hand can find the key. Naming the key aloud is wrong because it requires the left hemisphere, which never received the image. Finding it with the right hand fails for the same reason, since the right hand is controlled by the left hemisphere. Failing with both hands ignores the right hemisphere’s nonverbal recognition and its control of the left hand.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-11',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'For a psychiatric disorder, concordance is 48% among identical (monozygotic) twins and 17% among fraternal (dizygotic) twins. Which conclusion do these data best support?',
    options: [
      'Shared family environment, not genes, is the main cause of the disorder',
      'Genes contribute to the disorder, but nongenetic factors also play a role',
      'Each person’s risk for the disorder is 48% determined by their genes',
      'Environment has no role, because identical twins share all their genes',
    ],
    correctAnswer: 1,
    explanation:
      'Identical twins share essentially all of their genes and fraternal twins about half, while both types typically share a family environment. Much higher concordance in identical twins therefore points to a genetic contribution, and identical-twin concordance far below 100% shows that nongenetic factors also matter. Shared family environment as the main cause would predict similar concordance in both twin types. A concordance of 48% is not a heritability estimate, and heritability describes variation within a population, not how much of one person’s risk comes from genes. Saying environment has no role is contradicted by the fact that more than half of identical twin pairs are discordant despite sharing their genes.',
    skill: 'interpret-the-data',
  },
  {
    id: 'psd2-12',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'A therapist explains that a client’s anxiety stems from the gap between who she is and the self she believes she must become to earn her parents’ approval. This explanation reflects which perspective on personality?',
    options: ['Psychoanalytic', 'Behaviorist', 'Trait', 'Humanistic'],
    correctAnswer: 3,
    explanation:
      'Incongruence between the real self and an ideal self shaped by conditions of worth (approval that depends on meeting others’ standards) is Carl Rogers’s account of anxiety, a humanistic perspective. The mention of parents can suggest a psychoanalytic account, but that perspective attributes anxiety to unconscious conflicts among id, ego, and superego rooted in early drives, not to a consciously experienced gap between real and ideal selves. The behaviorist perspective explains personality as learned responses shaped by reinforcement and would treat the anxiety with conditioning techniques. Trait theory describes stable dispositions, such as the Big Five, and offers no account of a gap between real and ideal selves.',
    skill: 'which-theory',
  },
  {
    id: 'psd2-13',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'First-generation antipsychotics act mainly by blocking dopamine D2 receptors. Consistent with the dopamine hypothesis of schizophrenia, these drugs are expected to be most effective at reducing which symptoms?',
    options: [
      'Hallucinations and delusions',
      'Flat affect and social withdrawal',
      'Avolition and poverty of speech',
      'Working-memory and attention deficits',
    ],
    correctAnswer: 0,
    explanation:
      'The dopamine hypothesis links excess dopamine activity, particularly in the mesolimbic pathway, to the positive symptoms of schizophrenia, and D2-blocking antipsychotics reduce those positive symptoms (hallucinations and delusions) most effectively. Flat affect and social withdrawal are negative symptoms, which respond poorly to first-generation antipsychotics. Avolition and poverty of speech are also negative symptoms with the same poor response. Working-memory and attention deficits are cognitive symptoms, which these drugs also do little to improve.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-14',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'In an Asch-style study, a participant judges which of three lines matches a standard line after hearing several confederates unanimously give the same wrong answer. Which change would most reduce the participant’s conformity?',
    options: [
      'Adding several more confederates to the unanimous majority',
      'Making the comparison lines much closer in length to one another',
      'Having one confederate dissent by giving the correct answer',
      'Introducing the confederates as experts in visual perception',
    ],
    correctAnswer: 2,
    explanation:
      'Asch found that a single dissenter who breaks the group’s unanimity sharply reduces conformity, even when the majority is otherwise intact. Adding more confederates would not reduce conformity; beyond a majority of about three or four, larger groups add little further pressure. Making the lines closer in length makes the judgment harder and more ambiguous, which increases reliance on others through informational influence. Presenting the confederates as perceptual experts also strengthens informational influence and would raise conformity.',
    skill: 'apply-a-theory',
  },
  {
    id: 'psd2-15',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'Researchers watched pool players in a student union. When four observers stood near the table, skilled players made a higher percentage of their shots than when unobserved, while novice players made a lower percentage. Which account best explains both results?',
    options: [
      'Social loafing, since observers made individual effort harder to evaluate',
      'Social facilitation, as arousal strengthens each player’s dominant response',
      'Deindividuation, since being watched reduced players’ self-awareness',
      'Group polarization, since observers pushed players toward prior leanings',
    ],
    correctAnswer: 1,
    explanation:
      'Social facilitation (Zajonc’s arousal account) holds that the presence of others raises arousal, which strengthens the dominant response. For skilled players the dominant response is an accurate shot, so performance improves; for novices it is an error, so performance declines. Social loafing occurs when individual contributions are pooled and cannot be evaluated, but observers make each player’s performance more identifiable, not less. Deindividuation involves reduced self-awareness in anonymous crowds, whereas being watched heightens self-awareness. Group polarization is the shift of a group’s attitudes toward a more extreme position after discussion, which does not apply to individual shooting accuracy.',
    skill: 'interpret-the-data',
  },
  {
    id: 'psd2-16',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    question:
      'In Ainsworth’s Strange Situation, an infant explores the room without checking back with her mother, shows little distress when the mother leaves, and turns away from the mother when she returns. This pattern best fits which attachment style?',
    options: ['Secure attachment', 'Ambivalent attachment', 'Disorganized attachment', 'Avoidant attachment'],
    correctAnswer: 3,
    explanation:
      'Avoidant attachment is marked by little distress at separation and avoidance of, or indifference to, the caregiver at reunion, with exploration that does not use the caregiver as a secure base. Secure infants use the caregiver as a base for exploration, show some distress when she leaves, and seek comfort and settle quickly when she returns. Ambivalent (resistant) infants are highly distressed at separation and both seek and resist contact at reunion. Disorganized infants show contradictory or confused behavior, such as freezing or approaching while looking away, rather than a consistent avoidant strategy.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-17',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    question:
      'A college sophomore declared a pre-med major because her parents, both physicians, always expected her to become a doctor. She is firmly committed to this path but has never seriously considered any other career. In Marcia’s framework, her identity status is:',
    options: ['Identity foreclosure', 'Identity diffusion', 'Identity moratorium', 'Identity achievement'],
    correctAnswer: 0,
    explanation:
      'Marcia classifies identity status by two dimensions, exploration and commitment. Commitment without exploration, typically adopting the path others expect, is identity foreclosure. Identity diffusion involves neither commitment nor exploration, but she is firmly committed. Identity moratorium involves active exploration without commitment, the reverse of her situation. Identity achievement requires commitment reached after a period of exploring alternatives, and she never explored any.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-18',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A man began his career as a line cook and, by age 50, owned a regional restaurant chain. His father had owned a similarly successful restaurant business. Comparing the man’s first job with his position at age 50 illustrates:',
    options: [
      'Intergenerational upward mobility',
      'Intragenerational upward mobility',
      'Horizontal occupational mobility',
      'Upward structural mobility',
    ],
    correctAnswer: 1,
    explanation:
      'Movement up the class ladder within a single person’s lifetime or career is intragenerational upward mobility, and the comparison is between his own first job and his later position. Intergenerational mobility compares a person’s position with a parent’s, and since his father held similar standing there is little intergenerational change. Horizontal mobility is a move between positions of roughly equal status, but going from line cook to chain owner is a large vertical rise. Structural mobility is movement driven by society-wide changes in the economy or occupational structure, and the scenario describes one individual’s career, not such a shift.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-19',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Over three decades, a country’s crude death rate fell from 25 to 9 per 1,000 people as vaccination and clean water spread, while its crude birth rate stayed near 40 per 1,000. Demographic transition theory best describes this country as:',
    options: [
      'In the first stage, with population held stable by high mortality',
      'In a late stage, with an aging population that is beginning to shrink',
      'In the second stage, with rapid growth because births far outnumber deaths',
      'In the third stage, with growth slowing as fertility begins to fall',
    ],
    correctAnswer: 2,
    explanation:
      'The demographic transition begins with high birth and death rates. In the second stage, death rates fall through improved sanitation, nutrition, and medicine while birth rates stay high, producing rapid growth; here natural increase is about 40 − 9 = 31 per 1,000, or roughly 3% per year. The first stage requires high mortality, but the death rate has already fallen to 9 per 1,000. A late stage with an aging, shrinking population requires low fertility, not a birth rate of 40 per 1,000. The third stage is defined by falling birth rates, but this country’s birth rate has stayed high.',
    skill: 'interpret-the-data',
  },
  {
    id: 'psd2-20',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A physician who is also a single parent is asked to cover an emergency weekend shift on the same day as her child’s school recital, and she cannot do both. The tension she experiences is best described as:',
    options: ['Role strain', 'Role exit', 'Master status', 'Role conflict'],
    correctAnswer: 3,
    explanation:
      'Role conflict is tension between the demands of two or more different roles a person holds, here physician and parent. Role strain is tension among the demands of a single role, such as a physician torn between seeing more patients and spending more time with each one. Role exit is the process of disengaging from a role that has been central to one’s identity, which is not happening here. A master status is the status that dominates how others see a person, and it does not describe a clash between competing obligations.',
    skill: 'identify-the-concept',
  },
  {
    id: 'psd2-21',
    section: 'psych-soc',
    discipline: 'research-methods',
    question:
      'A researcher finds that students who choose to attend optional review sessions score higher on the final exam than students who do not, and concludes that the sessions improve performance. Which change to the study would best justify a causal conclusion?',
    options: [
      'Recruiting students from several universities to enlarge the sample',
      'Randomly assigning students to attend or skip the review sessions',
      'Replacing the exam with one that has higher test–retest reliability',
      'Surveying attendees about how much the sessions improved their learning',
    ],
    correctAnswer: 1,
    explanation:
      'Because students chose whether to attend, attenders may differ from non-attenders in motivation or prior achievement, a self-selection confound. Random assignment balances such differences across groups on average, so a difference in exam scores can be attributed to the sessions. Enlarging the sample across universities improves statistical power and generalizability, but the self-selected groups would still differ. A more reliable exam measures performance more consistently but does nothing to remove the confound. Surveying attendees yields subjective self-reports from only one group and provides no comparison between equivalent groups.',
    skill: 'experimental-reasoning',
  },
  {
    id: 'psd2-22',
    section: 'psych-soc',
    discipline: 'research-methods',
    question:
      'In a town of 2,000 households, most earn between \\$40,000 and \\$80,000 a year, but a few earn several million dollars. Which statement about the distribution of household income is most accurate?',
    options: [
      'The mean is above the median, so the median better reflects a typical household',
      'The mean is above the median, so the mean better reflects a typical household',
      'The median is above the mean, so the median better reflects a typical household',
      'The mean equals the median, since the extreme incomes offset one another',
    ],
    correctAnswer: 0,
    explanation:
      'A few extremely high incomes create a positive (right) skew. The mean is pulled toward the extreme values while the median, the middle household, is resistant to them, so the mean exceeds the median and the median better represents a typical household. Saying the mean better reflects a typical household gets the ordering right but the conclusion wrong, since the inflated mean overstates what most households earn. A median above the mean describes a negatively skewed distribution, the opposite of this one. The mean and median coincide in a symmetric distribution, but here the extreme incomes lie on one side only, so nothing offsets them.',
    skill: 'interpret-the-data',
  },
]
