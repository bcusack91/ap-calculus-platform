/**
 * MCAT Full-Length Form 8 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1–7 (fl1- … fl7-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — experiment, chart: looking time across six habituation
  //    trials and two test trials (possible vs impossible event); a control
  //    experiment for a perceptual preference; what looking time can show
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'What Infants Look At When a Truck Should Have Stopped',
    passageText:
      'Jean Piaget concluded that infants younger than about 8 months lack object permanence, the understanding that an object continues to exist when it is out of sight. His evidence was a failure to act: when a toy that a young infant is reaching for is covered with a cloth, the infant stops reaching and does not lift the cloth. Later investigators pointed out that retrieving a covered toy demands more than knowing that it is there. A test that asked less of the infant’s ability to act might give a different answer.\n\nSuch tests rely on how long infants look at a display. When the same event is shown repeatedly, looking time declines, a simple form of learning called habituation. If a new event is then presented and looking time recovers, the recovery, called dishabituation, indicates that the infant registers the new event as different from the old one. In the violation-of-expectation method, infants are familiarized with an event and then shown variations of it, one consistent with a physical principle and one that appears to break it.\n\nIn one study, 40 infants aged 5 months sat on a parent’s lap facing a small stage. A ramp at the left led to a level track that crossed the stage. On each habituation trial, a screen in front of the middle of the track was raised to show that nothing lay behind it and was lowered again; a toy truck was then released, rolled down the ramp, passed behind the screen, and reappeared at the right. A trial ended when the infant looked away for 2 consecutive seconds. Two observers who could not see the stage timed the infant’s looking through peepholes, and parents kept their eyes closed throughout.\n\nAfter six habituation trials, each infant received two test trials. The screen was raised to reveal a box and was lowered again; the truck was then released and reappeared at the right as before. For infants randomly assigned to the possible-event group, the box stood behind the track, out of the truck’s path. For infants assigned to the impossible-event group, the box stood on the track, where it should have blocked the truck; it was withdrawn through a concealed door once the screen was down. Figure 1 shows the mean looking time on each trial.\n\nIn a second experiment, 40 new infants were habituated in the same way. On the test trials the screen was raised to reveal the box either on the track or behind it and was then lowered, but the truck was not released. Mean looking time was about 16 seconds for each position of the box.\n\nThe researchers concluded that 5-month-olds represent a hidden object as continuing to exist and to occupy space. What longer looking reveals about an infant’s mental life nevertheless remains a matter of debate.',
    chart: {
      title:
        'Figure 1. Mean looking time on each trial, by group (trials 1–6, habituation event; trials 7 and 8, test event)',
      kind: 'line',
      xLabel: 'Trial',
      yLabel: 'Mean looking time',
      yUnit: 's',
      xValues: [1, 2, 3, 4, 5, 6, 7, 8],
      yValues: [44, 33, 26, 21, 17, 15, 32, 29],
      seriesLabel: 'Impossible-event group',
      comparisonSeries: [{ label: 'Possible-event group', yValues: [43, 34, 25, 20, 18, 15, 18, 16] }],
      annotations: [{ xIndex: 6, label: 'Test trials begin' }],
    },
    questions: [
      {
        question:
          'A skeptic proposes that looking time fell across trials 1–6 only because the infants were growing tired or drowsy. Which result in Figure 1 most directly counts against this proposal?',
        options: [
          'Looking time on trial 1 was nearly the same in the two groups of infants',
          'Looking time fell by about two-thirds between trials 1 and 6 in each group',
          'Looking time about doubled between trials 6 and 7 in the impossible-event group',
          'Looking time on trials 7 and 8 stayed near its trial 6 level in the possible-event group',
        ],
        correctAnswer: 2,
        explanation:
          'Tired infants should look briefly at whatever is shown next, yet infants in the impossible-event group looked for 32 seconds on trial 7 after 15 seconds on trial 6; this recovery (dishabituation) shows that they were still able to attend and that the earlier decline was specific to the repeated event. Equal looking on trial 1 shows only that the groups began alike. A two-thirds decline in both groups is the very observation that fatigue is offered to explain. Continued brief looking in the possible-event group is what fatigue would also predict, so it cannot count against the proposal.',
        skill: '7A habituation vs fatigue: dishabituation (reasoning from data)',
      },
      {
        question:
          'Had the second experiment not been run, the difference between the two groups on the test trials in Figure 1 could most reasonably have been attributed to:',
        options: [
          'greater interest in a box placed on the track than in one placed behind it',
          'greater tiredness among the infants who saw the box behind the track',
          'failure of the infants to notice where the box had been placed',
          'cues from parents who reacted when the truck reappeared',
        ],
        correctAnswer: 0,
        explanation:
          'The two test events differed in where the box stood as well as in whether the outcome was physically possible, so longer looking in the impossible-event group might have reflected nothing more than the arrangement with the box on the track holding attention better. The second experiment presented the two arrangements without the truck, and looking was equal, which removes that account. Unequal tiredness is unlikely given random assignment and equal looking on trial 6, and the second experiment does not bear on it. Failure to notice the position of the box would predict no difference between the groups. Parents kept their eyes closed in the first experiment itself.',
        skill: '7A research design: control for a perceptual preference',
      },
      {
        question: 'Which conclusion is LEAST warranted by the looking-time results of the two experiments?',
        options: [
          'The infants told apart the test event with the box on the track and the one with the box behind it',
          'The infants’ longer looking at the impossible event was not due to the position of the box alone',
          'The infants responded as though the box was still in place after the screen had hidden it',
          'The infants felt the same surprise at the impossible event that an adult observer would feel',
        ],
        correctAnswer: 3,
        explanation:
          'Looking time shows that infants treated two events differently, and with suitable controls it can narrow down which difference they responded to, but it does not reveal what the experience was like; attributing adult-like surprise goes beyond a difference in seconds of looking. That the two test events were told apart follows from the unequal looking times in Figure 1. That the position of the box alone was not responsible follows from the second experiment, in which the two positions drew equal looking. Responding as though the hidden box were still in place is the interpretation that remains once that alternative is removed.',
        skill: '7A limits of looking-time measures',
      },
      {
        question:
          'In a separate study, 5-month-olds who made no attempt to lift a cloth from a toy they had seen covered did reach out and grasp a toy when the room lights were switched off while the toy was within reach. This finding is most consistent with the view that young infants fail Piaget’s task because of:',
        options: [
          'an inability to remember a toy once it has gone out of sight',
          'a difficulty in combining two actions to reach a goal',
          'a loss of interest in a toy as soon as it is hidden from view',
          'a general weakness in reaching toward and grasping objects',
        ],
        correctAnswer: 1,
        explanation:
          'Reaching in the dark requires the infant to act on an object that can no longer be seen but requires only a single, direct action; lifting a cloth and then grasping requires one action to be performed as the means to another. Success on the first and failure on the second therefore locates the problem in sequencing actions. An infant who could not remember an unseen toy, or who lost interest in it, would not reach for it in the dark. A general weakness of reaching is contradicted by the successful reaches in the dark.',
        skill: '6B object permanence: competence vs performance on search tasks',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — experiment, table: a 2 × 2 vignette experiment (behavior ×
  //    mention of a psychiatric hospitalization) on desired social distance,
  //    split by respondents’ prior belief; Goffman’s types of stigma;
  //    self-stigma and help-seeking
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'A Label, a Vignette, and the Distance People Keep',
    passageText:
      'The sociologist Erving Goffman described stigma as an attribute that discredits its bearer in the eyes of others, reducing a whole person to a tainted one. He distinguished three types: abominations of the body, such as visible deformities; blemishes of individual character, inferred from a known record of, for example, mental disorder or addiction; and tribal stigmas of race, nation, and religion, which pass along family lines. He also separated the discredited, whose stigmatizing attribute is evident or already known, from the discreditable, whose attribute is hidden and who must therefore manage what others learn about them.\n\nWhether a psychiatric label does harm in itself has long been disputed. Labeling theorists held that being officially designated as mentally ill sets in motion rejection by others. Critics replied that the public reacts to disturbed behavior and that a label adds little. A modified labeling theory offers a middle position: people absorb their culture’s conceptions of mental illness long before any of them becomes a patient, and a label makes those conceptions applicable to a particular person.\n\nTo test these positions, researchers surveyed a national sample of 1,600 adults. Each respondent was randomly assigned to read one of four descriptions of a man named Daniel. In the mild versions, Daniel has slept poorly and worried since a dispute at work but continues to meet his obligations. In the severe versions, he hears voices, believes that his neighbors are monitoring him, and has stopped going to work. Half of the versions of each kind add that Daniel “was hospitalized last year for a mental illness”; the others say nothing about his history. Respondents then indicated whether they would refuse to accept Daniel in each of five relationships (as a coworker, a neighbor, a tenant, a friend, and a relative by marriage). The number of refusals, from 0 to 5, is the measure of desired social distance. Earlier in the survey, before reading any vignette, respondents had rated their agreement with statements such as “People who have been in a psychiatric hospital are more dangerous than other people”; those who scored above the midpoint were classified as holding the dangerousness belief. Table 1 gives the results.\n\nThe survey also addressed self-stigma, the turning of public stereotypes against oneself. The 400 respondents who reported at least two weeks of depressed mood during the past year completed a scale made up of items such as “I would feel inadequate if I went to a therapist.” Of those who scored in the lowest third on this scale, 48% had consulted a professional about their mood; of those in the highest third, 20% had. The researchers concluded that self-stigma deters people from seeking help.',
    figure:
      '**Table 1. Mean desired social distance (number of relationships refused, 0–5), by vignette version and respondents’ prior belief**\n\n| Behavior described | Hospitalization mentioned | All respondents | Respondents holding the dangerousness belief | Respondents not holding the belief |\n|---|---|---|---|---|\n| Mild | No | 1.0 | 1.0 | 1.0 |\n| Mild | Yes | 1.6 | 2.4 | 0.9 |\n| Severe | No | 2.8 | 2.9 | 2.7 |\n| Severe | Yes | 3.3 | 4.1 | 2.6 |',
    questions: [
      {
        question:
          'Among all respondents, how did the effect of describing severe behavior compare with the effect of mentioning a hospitalization?',
        options: [
          'Severe behavior added about 1.7 to 1.8 refusals; the hospitalization added about 0.5 to 0.6',
          'Severe behavior added about 0.5 to 0.6 refusals; the hospitalization added about 1.7 to 1.8',
          'Severe behavior added about 2.8 to 3.3 refusals; the hospitalization added about 1.6 to 3.3',
          'Severe behavior added about 1.1 to 1.2 refusals; the hospitalization added about 1.1 to 1.2',
        ],
        correctAnswer: 0,
        explanation:
          'In the “All respondents” column, moving from mild to severe behavior raises the mean from 1.0 to 2.8 without the hospitalization and from 1.6 to 3.3 with it, gains of 1.8 and 1.7; adding the hospitalization raises it from 1.0 to 1.6 for mild behavior and from 2.8 to 3.3 for severe behavior, gains of 0.6 and 0.5. Reversing the two effects assigns the smaller differences to behavior. Values of 2.8 to 3.3 and 1.6 to 3.3 are cell means, not differences between cells. Equal effects of about 1.2 match no pair of rows.',
        skill: '10A data interpretation: separate effects in a 2 × 2 table',
      },
      {
        question:
          'Which position described in the passage is best supported by the two right-hand columns of Table 1?',
        options: [
          'The original labeling position, because the hospitalization raised distance among all respondents alike',
          'The critics’ position, because the hospitalization raised distance among neither group of respondents',
          'The modified labeling position, because the hospitalization mattered only where a prior belief was held',
          'The modified labeling position, because the behavior mattered only where a prior belief was held',
        ],
        correctAnswer: 2,
        explanation:
          'Among respondents who held the dangerousness belief, mentioning the hospitalization raised desired distance by 1.4 for mild behavior and 1.2 for severe behavior; among those who did not, it changed distance by no more than 0.1. A label that acts only by way of conceptions the audience already holds is what the modified labeling position proposes. The label did not act on all respondents alike, as the original position would expect, and it clearly acted on one group, contrary to the critics. Severe behavior raised distance in both groups (by 1.7 to 1.9), so the effect of behavior did not depend on a prior belief.',
        skill: '9B modified labeling theory (reasoning from data)',
      },
      {
        question:
          'A man was dismissed from his last job for embezzlement, a fact that no one at his new workplace knows. In Goffman’s terms, he bears:',
        options: [
          'a blemish of character and is discredited',
          'a blemish of character and is discreditable',
          'a tribal stigma and is discredited',
          'a tribal stigma and is discreditable',
        ],
        correctAnswer: 1,
        explanation:
          'Dishonesty inferred from a person’s record is a blemish of individual character, the category that also holds mental disorder and addiction, and because his record is unknown to those around him he is discreditable: his task is to manage what they learn. He would be discredited only if the dismissal were evident or already known. A tribal stigma attaches to membership in a racial, national, or religious group and passes along family lines, which a personal history of embezzlement does not.',
        skill: '8B stigma: Goffman’s types; discredited vs discreditable',
      },
      {
        question: 'The researchers’ conclusion about self-stigma is open to which alternative explanation?',
        options: [
          'Respondents who held the dangerousness belief were assigned to the labeled vignettes more often',
          'Respondents in the middle third of the self-stigma scale were omitted from the comparison',
          'Respondents with depressed mood made up only a quarter of the national sample surveyed',
          'Respondents who had consulted a professional came to feel less ashamed of doing so',
        ],
        correctAnswer: 3,
        explanation:
          'Self-stigma and help-seeking were measured at the same time, so the association can run in either direction: treatment may reduce shame about treatment, which would produce low self-stigma scores among those who had sought help without self-stigma having deterred anyone. Vignettes were assigned at random, so beliefs could not differ systematically between versions, and vignette assignment has no bearing on the self-stigma comparison. Leaving the middle third unreported does not create a difference between the outer thirds. That 400 of 1,600 respondents reported depressed mood limits the size of the subsample but offers no competing account of the association.',
        skill: '9B self-stigma and help-seeking: direction of causation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PERSONALITY/DISORDERS — information passage: objective inventories
  //    (rational vs empirical keying) vs projective tests, reliability and
  //    validity, social desirability bias, the person–situation debate
  //    (aggregation, situational strength), the Barnum effect
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Inventories, Inkblots, and the Trouble With Feeling Understood',
    passageText:
      'Psychologists measure personality with two broad families of instruments. Objective tests are inventories of statements to which a person responds in a fixed format, such as true or false, and which are scored with a key that requires no judgment. Some inventories are built by writing items that openly describe a trait. Others are empirically keyed: an item is kept only if groups known to differ, such as patients with a given diagnosis and people without it, answer it differently, whatever the item appears to be about. Projective tests present ambiguous material, such as inkblots or drawings of people in undefined situations, and ask what the person sees or what story the picture suggests. Their rationale, drawn from psychodynamic theory, is that a person faced with a stimulus that has no definite meaning will supply one from his or her own needs and conflicts, including ones that the person cannot report. Responses are open-ended, and scoring them calls for interpretation.\n\nAny instrument is judged by two standards. Reliability is consistency: a reliable measure gives similar results when the same person is tested again or when different examiners score the same responses. Validity is the extent to which a measure captures the characteristic it is meant to capture, as shown, for example, by its relation to relevant behavior or to other accepted measures of that characteristic.\n\nSelf-report is open to distortion. Social desirability bias is the tendency to answer in the way that will make a good impression instead of the way that is accurate. Some inventories therefore include items describing virtues that almost no one can truthfully claim, or ask the respondent to choose between statements that have been matched for desirability.\n\nA deeper challenge concerns what test scores are good for. In the 1960s Walter Mischel observed that scores on trait measures typically correlated only about 0.30 with behavior observed in a particular situation, and he argued that behavior depends more on the situation than on stable dispositions. Defenders of traits answered in two ways. First, any single act has many momentary causes, so a trait should be tested against behavior sampled on many occasions. Second, situations differ in strength: where the norms for conduct are explicit and nearly everyone behaves alike, individual differences have little room to appear. Most researchers now hold that behavior reflects the interaction of person and situation.\n\nFinally, a test-taker’s sense that a personality report is accurate is weak evidence that it is. In classroom demonstrations, students who are each handed the identical description, assembled from vague and mostly flattering statements (“You have a need for other people to like you, yet you tend to be critical of yourself”), rate it as an excellent description of themselves in particular. This tendency is known as the Barnum effect.',
    questions: [
      {
        question:
          'In one study, volunteers who had gone without food for 16 hours told more stories about eating when shown ambiguous drawings than did volunteers who had just eaten. For the use of such drawings to assess personality, this result implies that the stories:',
        options: [
          'expose conflicts that the storytellers are unable to report directly',
          'reflect passing states as well as lasting characteristics of a person',
          'depend more on the examiner’s interpretation than on the storyteller',
          'carry the same meaning whichever examiner happens to score them',
        ],
        correctAnswer: 1,
        explanation:
          'Hunger is a temporary condition, and its appearance in the stories shows that what a person supplies to an ambiguous picture depends in part on the state he or she happens to be in; a test meant to describe enduring personality must then separate the lasting from the momentary. Hunger after a fast is something the volunteers could readily report, so the result does not show access to unreportable conflicts. The groups differed in what the storytellers said, not in how examiners scored it, so the result speaks neither to dependence on the examiner nor to agreement among examiners.',
        skill: '7A projective tests: state vs trait influences',
      },
      {
        question:
          'A magazine quiz sorts readers into four “color personalities.” Readers who retake the quiz a month later almost always receive the same color, but the colors are unrelated to ratings by friends, to scores on established inventories, and to any behavior that has been observed. The quiz is best described as:',
        options: [
          'neither reliable nor valid',
          'valid but not reliable',
          'reliable and valid',
          'reliable but not valid',
        ],
        correctAnswer: 3,
        explanation:
          'Receiving the same result on retesting is consistency, which is reliability; having no relation to other accepted measures or to relevant behavior means that there is no evidence the quiz measures any characteristic of personality, which is a lack of validity. Consistent results rule out the two descriptions that deny reliability. The absence of any relation to outside criteria rules out calling the quiz valid, and it shows that a measure can be consistent without being accurate.',
        skill: '7A reliability without validity',
      },
      {
        question:
          'Scores on a punctuality scale that students completed once, at the start of a term, correlated 0.18 with whether students arrived on time for one particular lecture and 0.62 with the proportion of 30 lectures for which they arrived on time. Which explanation of the difference is most consistent with the passage?',
        options: [
          'Lectures are strong situations, in which a trait has little room to show itself',
          'The scale grew more reliable as the students completed it on more occasions',
          'Chance influences on one arrival tend to cancel when many arrivals are averaged',
          'Students behaved more consistently once they knew their arrivals were recorded',
        ],
        correctAnswer: 2,
        explanation:
          'Whether a student is on time on a given day depends on many things besides punctuality, such as a late bus or a prior appointment; these momentary influences vary from day to day and wash out of a 30-lecture average, leaving the stable tendency that the scale measures, so the correlation rises. If lectures were strong situations, the scale would predict poorly in both cases. The scale was completed once; it is the behavior that was sampled more often. Nothing indicates that students were told about the recording, and the same kind of arrival enters both correlations.',
        skill: '7A person–situation debate: aggregation (reasoning from data)',
      },
      {
        question:
          'On an inventory completed as part of a job application, a candidate answers “true” to nearly all of a set of statements such as “I have never been irritated by anyone.” The most reasonable inference is that the candidate’s scores on the inventory’s other scales:',
        options: [
          'are more favorable than the candidate’s actual characteristics warrant',
          'are less favorable than the candidate’s actual characteristics warrant',
          'would change a great deal if the candidate took the inventory again',
          'would resemble those of a candidate who had answered at random',
        ],
        correctAnswer: 0,
        explanation:
          'Statements of this kind describe virtues that almost no one can truthfully claim, so endorsing most of them signals an effort to make a good impression, and the same motive is likely to have inflated the candidate’s answers elsewhere. Social desirability bias pushes scores in the favorable direction, not the unfavorable one. A candidate who is motivated to look good would be expected to answer the same way on retesting in the same circumstances. Random answering would lead to endorsement of about half of such statements, not nearly all.',
        skill: '7A social desirability bias: validity scales',
      },
      {
        question:
          'A company claims that its inventory yields individualized reports and cites the fact that 90% of customers rate their own report as accurate. Which procedure would best show whether the reports are accurate in a way that the Barnum effect cannot explain?',
        options: [
          'Asking customers to rate the accuracy of their own reports again six months later',
          'Asking customers whether they would recommend the inventory to their friends',
          'Asking customers to pick their own report from a set that includes other people’s',
          'Asking customers to rate their reports after the flattering statements are removed',
        ],
        correctAnswer: 2,
        explanation:
          'If a report is truly specific to the individual, its owner should be able to tell it from reports written for other people; if customers choose their own report no more often than chance, the 90% figure reflects statements that fit almost anyone. Repeating the accuracy rating later measures the same subjective impression a second time. Willingness to recommend the product is another expression of satisfaction, not of accuracy. Removing flattering statements might lower ratings, but a vague report could still be endorsed by everyone, so this would not show whether reports distinguish one person from another.',
        skill: '7A research design: testing for the Barnum effect',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: self-concept and self-esteem,
  //    social comparison (upward/downward), self-enhancement vs
  //    self-verification, self-handicapping, self-fulfilling prophecy,
  //    independent vs interdependent self-construal
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Knowing, Judging, and Protecting the Self',
    passageText:
      'The self-concept is the organized body of beliefs that a person holds about who he or she is: traits, abilities, roles, and relationships. Self-esteem is the evaluative side of that knowledge, the degree to which a person regards the self as worthy. Because few personal qualities can be measured against a physical standard, people learn where they stand largely through social comparison. Leon Festinger proposed that people prefer to compare themselves with others who are similar to them, since a similar person’s standing is the most informative. Later research added that the direction of comparison depends on the motive at work. Someone who wants to improve tends to look upward, toward people who are doing better, at some cost to present satisfaction. Someone whose self-regard has been threatened tends to look downward, toward people who are doing worse, and feels better for it.\n\nTwo motives shape the feedback that people seek about themselves. Self-enhancement is the desire to think well of oneself. Self-verification is the desire to be seen by others as one sees oneself, because stable self-views make the social world predictable. For a person with a favorable self-view, the two motives point the same way. For a person with an unfavorable self-view they conflict, and self-verification theory makes the counterintuitive prediction that such a person will often seek out, and stay with, partners who share the unfavorable view.\n\nPeople also act in advance to protect self-esteem. In self-handicapping, a person arranges an obstacle to his or her own performance, such as going without sleep or leaving preparation to the last hour, so that failure can be blamed on the obstacle and success will seem all the more creditable. Self-handicapping is most likely when a person values an ability but is uncertain of being able to demonstrate it.\n\nThe beliefs of other people can shape the self as well. In a self-fulfilling prophecy, one person’s expectation about another leads the first to act in ways that draw out the expected behavior, so that a belief with no initial foundation appears to be confirmed.\n\nFinally, cultures differ in what the self is taken to be. Where an independent self-construal prevails, as in much of North America and Western Europe, the self is understood as a bounded individual defined by internal attributes that remain the same across settings, and self-esteem rests on expressing those attributes and on standing out. Where an interdependent self-construal prevails, as in much of East Asia, the self is understood through its relationships and roles; it is expected to vary with the company one is in, and feeling good about oneself depends more on fitting in and on meeting obligations to others. Consistent with this difference, the tendency to rate oneself as better than average, which is robust in North American samples, is weaker or absent in East Asian ones.',
    questions: [
      {
        question:
          'In interviews soon after a diagnosis of breast cancer, many patients spontaneously described other patients who were coping less well than they were, and some described such patients without having met any. According to the passage, these comparisons most likely served to:',
        options: [
          'supply accurate information about the patients’ own prognosis',
          'provide models whose example would spur the patients to improve',
          'confirm unfavorable views that the patients held of themselves',
          'restore the patients’ sense that they were doing reasonably well',
        ],
        correctAnswer: 3,
        explanation:
          'A serious diagnosis threatens self-regard, and a person under such a threat tends to compare downward, with people who are worse off, and feels better as a result; inventing such people shows that the aim was reassurance. Patients seeking accurate information would compare with similar patients, not with imagined ones chosen for doing poorly. Models for improvement are found by looking upward, toward those who are doing better. Seeking confirmation of an unfavorable self-view is self-verification, and it would not lead patients to cast themselves as the ones who were coping well.',
        skill: '8A social comparison: downward comparison under threat',
      },
      {
        question:
          'People who rated themselves as socially awkward were shown two written evaluations of themselves, one calling them socially skilled and one calling them socially awkward, and were asked which evaluator they would prefer to meet. Self-verification theory and a self-enhancement account would predict, respectively, a preference for the evaluator who called them:',
        options: [
          'awkward, and the evaluator who called them skilled',
          'skilled, and the evaluator who called them awkward',
          'awkward, on both of the two accounts',
          'skilled, on both of the two accounts',
        ],
        correctAnswer: 0,
        explanation:
          'Self-verification is the wish to be seen as one sees oneself, so people with an unfavorable self-view should choose the evaluator who shares it; self-enhancement is the wish to think well of oneself, so on that account they should choose the flattering evaluator. Reversing the two assigns each motive the other’s prediction. The accounts would agree only for people whose self-view is favorable, for whom being seen accurately and being seen positively coincide; for these participants the motives conflict, so the two predictions cannot be the same.',
        skill: '8A self-verification vs self-enhancement',
      },
      {
        question:
          'All of the students in a study were told that they had scored very well on a first test. For half of them the problems had been solvable; for the others the problems had no correct answers, so the praise was unrelated to anything they had done. Before a second test, each student chose between a drug said to improve performance and a drug said to impair it. The passage’s account of self-handicapping predicts that the impairing drug would be chosen more often by students whose first test was:',
        options: [
          'solvable, because they were confident enough to accept a disadvantage',
          'unsolvable, because they doubted that they could repeat their success',
          'solvable, because they wished to find out how able they really were',
          'unsolvable, because they wished to find out how able they really were',
        ],
        correctAnswer: 1,
        explanation:
          'Self-handicapping is most likely when a person values an ability but is unsure of being able to demonstrate it; students praised for a performance they could not account for have a reputation to protect and no basis for expecting to repeat it, so an impairing drug offers a ready excuse. Students who solved real problems have grounds for confidence and little need of an excuse, and confidence is not a reason to seek a disadvantage. A wish to learn one’s true ability would lead away from the impairing drug in either group, because a handicap makes the next result uninformative.',
        skill: '8A self-handicapping (prediction)',
      },
      {
        question:
          'Students in two countries completed the sentence “I am ___” twenty times while imagining themselves at home with family, and twenty times while imagining themselves among classmates. Compared with students in Country A, students in Country B gave two sets of answers that overlapped much less and that contained more roles, such as “eldest daughter.” Which inference is best supported?',
        options: [
          'Self-esteem is lower among the students in Country B than among those in Country A',
          'Self-handicapping is more common among students in Country B than in Country A',
          'An interdependent self-construal is more prevalent in Country B than in Country A',
          'An independent self-construal is more prevalent in Country B than in Country A',
        ],
        correctAnswer: 2,
        explanation:
          'An interdependent self is understood through relationships and roles and is expected to vary with the company one is in, which is what answers that name roles and that change between family and classmates show. An independent self is defined by internal attributes that stay the same across settings, which would produce overlapping, trait-based answers. The task asks who the students are, not how favorably they evaluate themselves, so it gives no measure of self-esteem. Self-handicapping concerns arranging excuses before a performance, and nothing in the task involves performance.',
        skill: '8A independent vs interdependent self-construal',
      },
      {
        question:
          'Men spoke by telephone with women they had never met. Each man had first been given a photograph, assigned at random and not of his actual partner, that showed either an attractive or an unattractive woman. Judges who heard only the women’s side of each conversation, and who knew nothing of the photographs, rated the women whose partners held “attractive” photographs as warmer. Having such judges rate the recordings was essential to the claim that a self-fulfilling prophecy had occurred, because their ratings showed that:',
        options: [
          'the men’s expectations had changed how the men heard the women',
          'the men’s expectations had changed how the women behaved',
          'the women’s own attractiveness had determined how warm they were',
          'the women’s self-esteem had determined how warm the men were',
        ],
        correctAnswer: 1,
        explanation:
          'A self-fulfilling prophecy requires that the expectation draw out the expected behavior from its target, not merely color the perceiver’s impression; judges who heard the women alone and knew nothing of the photographs could only have been responding to real differences in how the women spoke. The men’s own impressions would show a change in perception, which is exactly what unbiased judges were needed to go beyond. Photographs were assigned at random and were not of the partners, so the women’s actual attractiveness did not differ between conditions. The judges did not rate the men, and self-esteem was not measured.',
        skill: '8A self-fulfilling prophecy: research design (behavioral confirmation)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — information passage: globalization (technology and
  //     policy drivers), mobile capital vs less mobile labor, outsourcing,
  //     migration of health workers and remittances, cultural homogenization
  //     vs hybridization, global health inequities
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Capital, Workers, and Culture in Motion',
    passageText:
      'Globalization is the growing interdependence of societies through the movement of capital, goods, people, information, and culture across national borders. Its recent acceleration owes much to technology. Container shipping lowered the cost of moving goods, and digital communication made it possible to coordinate production among distant sites and to deliver over a network any service whose product is information. Governments contributed by reducing tariffs and loosening controls on foreign investment.\n\nThese changes did not free every participant in the economy equally. Capital moves with few obstacles: a firm can close a plant in one country and contract with a supplier in another, a practice known as outsourcing when work is transferred to an outside firm and as offshoring when it is moved abroad. Workers, by contrast, face immigration law, language barriers, licensing rules, and family ties. Employers and investors can therefore choose among countries, whereas most workers cannot, and governments that compete for investment may be reluctant to raise wages, taxes, or safety standards.\n\nLabor does move, however, and its movement is selective. Wealthy countries with aging populations recruit physicians and nurses who were trained elsewhere. For the individual, migration can multiply earnings several times over, and the money that migrants send to relatives at home, called remittances, exceeds foreign aid in many countries. For the health system left behind, the accounting is different. Training is typically paid for by the public in the source country, while the benefit goes to patients in the destination country. Sub-Saharan Africa bears roughly a quarter of the world’s burden of disease and has about 3% of its health workers. Critics describe the recruitment of the region’s clinicians as a subsidy from poor countries to rich ones and as a loss that its health systems cannot absorb; defenders reply that people have a right to seek better lives and that the remedy lies in conditions at home.\n\nCulture travels along the same channels. One view holds that globalization produces homogenization: films, music, brands, and languages from a few powerful countries displace local forms, and the world’s cultures converge. A competing view emphasizes hybridization. Imported forms are rarely adopted unchanged; they are reinterpreted, combined with local traditions, and sometimes exported again in altered form, so that contact generates new variety even as it erodes some of the old. Global firms themselves adapt their products to local tastes.\n\nHealth inequities are shaped by all of these flows. Pathogens cross borders with travelers within days. Commercial products that harm health, such as tobacco, find new markets as old ones are regulated. And because research investment follows purchasing power, conditions that chiefly afflict the poor attract little of it. The same connections, however, carry vaccines, clinical knowledge, and the organized pressure of international agencies and advocacy networks.',
    questions: [
      {
        question:
          'The managers of an appliance factory tell its unionized workers that production will be moved abroad unless they accept a pay freeze, and the workers accept. The managers’ leverage in this negotiation derives most directly from the fact that:',
        options: [
          'the firm can relocate across borders far more easily than its workers can',
          'the workers can find equivalent jobs abroad as easily as the firm can',
          'the firm’s products are adapted to the tastes of each national market',
          'the workers’ remittances make them less dependent on local wages',
        ],
        correctAnswer: 0,
        explanation:
          'The threat is credible because a firm can shift production to another country, whereas the workers are held in place by immigration law, language, and family ties; this difference in mobility lets employers choose among workforces while workers cannot choose among countries. If workers could move abroad as easily as the firm, the threat would lose its force. Adapting products to local tastes concerns the marketing of goods, not the location of production. Remittances are money sent home by migrants and play no part in a negotiation between a factory and its local workforce.',
        skill: '9B globalization: mobility of capital vs labor',
      },
      {
        question:
          'Which finding would most weaken the critics’ claim that recruiting nurses from a low-income country harms that country’s health system?',
        options: [
          'Nurses who emigrate from the country earn about five times what they earned at home',
          'Remittances from nurses abroad are spent chiefly on their relatives’ housing and schooling',
          'Hospitals in the destination country fill vacancies more cheaply than by training nurses',
          'Opportunities abroad draw so many into nursing that more nurses now remain at home',
        ],
        correctAnswer: 3,
        explanation:
          'The critics’ claim is that recruitment drains the source country’s health workforce. If the chance to work abroad attracts enough additional trainees that the number of nurses staying home rises, the health system gains workers and the claim is undercut. Higher earnings abroad benefit the individual migrant, which critics do not dispute. Remittances spent on relatives’ housing and schooling help households, not clinics. Savings to hospitals in the destination country are the benefit that critics describe as a subsidy from the poorer country, so that finding supports their claim.',
        skill: '9B migration of health workers: evaluating evidence',
      },
      {
        question:
          'Which observation is hardest to reconcile with the homogenization view of cultural globalization?',
        options: [
          'A few film studios in one country account for most ticket sales on every continent',
          'Young musicians in one city set local-language verse to an imported style and sell it abroad',
          'Speakers of a regional language shift to a world language within two generations',
          'Shopping districts in distant capitals come to be dominated by the same retail brands',
        ],
        correctAnswer: 1,
        explanation:
          'Homogenization predicts that imported forms displace local ones and that cultures converge; a new style made by joining an imported form to a local language, and then exported, is variety created by contact, which is hybridization. Dominance of ticket sales by a few studios, the replacement of a regional language by a world language, and the spread of identical retail brands are each cases of local forms giving way to a few global ones, as the homogenization view expects.',
        skill: '9B cultural globalization: homogenization vs hybridization',
      },
      {
        question:
          'Based on the passage’s account of the technologies behind globalization, which job in a high-income country is LEAST likely to be moved offshore?',
        options: [
          'A radiologist who interprets digital images sent from hospitals',
          'A machine operator who sews garments on a production line',
          'An aide who bathes and feeds elderly clients in their homes',
          'An agent who answers customers’ billing questions by telephone',
        ],
        correctAnswer: 2,
        explanation:
          'Digital networks allow any service whose product is information to be delivered from a distance, and container shipping does the same for manufactured goods; work that must be done on a client’s body in the client’s home can be done only where the client is. Reading digital images and answering billing questions by telephone are information services that a network can carry across borders. Sewing garments yields a good that can be shipped cheaply, and such production is among the most readily relocated.',
        skill: '9B globalization: communication technology and tradable services',
      },
    ],
  },
]

export const FL8_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A pituitary tumor presses on the center of the optic chiasm, damaging only the axons that cross there, which arise from the nasal half of each retina. The patient is most likely to lose vision in:',
    options: [
      'the left half of the visual field of each eye',
      'the inner half of the visual field of each eye',
      'the whole of the visual field of one eye only',
      'the outer half of the visual field of each eye',
    ],
    correctAnswer: 3,
    explanation:
      'Because the optics of the eye reverse the image, the nasal half of each retina receives light from the temporal, or outer, half of that eye’s visual field, so loss of the crossing fibers removes the outer half of the field on both sides (bitemporal hemianopia). The inner halves of the fields fall on the temporal retinas, whose axons do not cross and are spared. Loss of the same half-field in both eyes follows damage behind the chiasm, in one optic tract or the visual cortex. Loss of all vision in one eye follows damage to one optic nerve in front of the chiasm.',
    skill: '6A visual pathway: lesion at the optic chiasm',
  },
  {
    id: 'fl8-ps-b-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'The day after a national disaster, students wrote down how they had learned of it. Three years later they wrote new accounts: about 40% of the details contradicted the first accounts, yet the students rated their memories as highly vivid and were confident of their accuracy. The study supports the conclusion that memories of emotionally significant public events are:',
    options: [
      'vivid and confidently held but not reliably accurate',
      'stored in a fixed form that resists later distortion',
      'forgotten more rapidly than memories of ordinary events',
      'accurate in their details but difficult to bring to mind',
    ],
    correctAnswer: 0,
    explanation:
      'Such flashbulb memories feel exceptionally clear, but the students’ later accounts departed from what they had written the next day, so vividness and confidence did not guarantee accuracy; like other memories, these are reconstructed over time. A fixed, distortion-proof record is contradicted by the 40% of details that changed. The study did not compare the rate of forgetting with that for ordinary events. The students produced detailed accounts readily, so their difficulty lay not in bringing the memory to mind but in the accuracy of what came to mind.',
    skill: '6B flashbulb memories: confidence vs accuracy',
  },
  {
    id: 'fl8-ps-b-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Spearman proposed that a single general intelligence (g) underlies performance on all mental tests, whereas Gardner proposed several intelligences that are independent of one another. Which finding offers the most direct support for Gardner’s position?',
    options: [
      'People who score high on verbal tests tend to score high on spatial tests as well',
      'A stroke abolishes a composer’s speech but leaves his musical ability unimpaired',
      'Scores on a test of abstract reasoning predict grades in many school subjects',
      'Identical twins have more similar test scores than fraternal twins usually do',
    ],
    correctAnswer: 1,
    explanation:
      'If abilities were expressions of one general capacity, damage should lower them together; the loss of language with music preserved shows that the two can be dissociated, as independent intelligences would be. Positive correlations among different tests are the original evidence for g. A single reasoning score that predicts performance across many subjects likewise points to a general factor. Greater similarity of identical twins bears on heritability and does not distinguish one intelligence from several.',
    skill: '6B general intelligence vs multiple intelligences (evidence)',
  },
  {
    id: 'fl8-ps-b-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'After a stroke, a patient cannot move the right hand or the lower right side of the face, although the sense of touch is normal on both sides of the body. The damage is most likely in the:',
    options: [
      'somatosensory cortex of the right parietal lobe',
      'somatosensory cortex of the left parietal lobe',
      'primary motor cortex of the right frontal lobe',
      'primary motor cortex of the left frontal lobe',
    ],
    correctAnswer: 3,
    explanation:
      'Voluntary movement is commanded by the primary motor cortex in the precentral gyrus of the frontal lobe, and because the descending motor fibers cross to the opposite side, each hemisphere controls the opposite half of the body; right-sided weakness therefore points to the left motor cortex. Damage to the right motor cortex would weaken the left side. The somatosensory cortex of the parietal lobe receives touch information, which is intact in this patient, so neither parietal option fits.',
    skill: '6A motor cortex: contralateral control',
  },
  {
    id: 'fl8-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Sutherland’s differential association theory holds that deviant behavior is learned through interaction within intimate groups. Which finding does this theory explain more readily than strain theory or labeling theory does?',
    options: [
      'Theft is most common in districts where legitimate jobs are scarcest',
      'Youths who have been arrested once offend more often afterward',
      'Embezzlers usually learned their methods and excuses from colleagues',
      'Offending declines as young adults marry and take up steady work',
    ],
    correctAnswer: 2,
    explanation:
      'Differential association locates the origin of deviance in close contacts who pass on both techniques and the definitions that justify using them, which is what learning methods and excuses from colleagues describes. High theft where legitimate jobs are scarce is the pattern strain theory predicts when approved means to success are blocked. More offending after an arrest is the labeling account, in which an official designation changes how a person is treated and sees himself. Declining offending with marriage and work points to the restraining effect of social bonds, not to learning from intimates.',
    skill: '9A differential association theory',
  },
  {
    id: 'fl8-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Residents of a town come to believe, wrongly, that the municipal water is contaminated. Sales of bottled water triple, several families move away, and house prices fall, although the water is safe throughout. A sociologist citing the Thomas theorem would emphasize that:',
    options: [
      'a belief need not be accurate to have real social consequences',
      'a belief that is widely shared will eventually prove to be accurate',
      'a belief spreads most quickly among people who are loosely connected',
      'a belief persists when it serves the interests of a powerful group',
    ],
    correctAnswer: 0,
    explanation:
      'The Thomas theorem states that situations people define as real are real in their consequences: residents acted on their definition of the water as unsafe, and the purchases, departures, and falling prices were real although the belief was false. The belief never became accurate, since the water stayed safe, so this is not a case of a prophecy fulfilling itself. How quickly a belief travels through a network is a question about diffusion, not about its consequences. Attributing the persistence of a belief to powerful interests is a conflict-theory claim for which the scenario gives no basis.',
    skill: '9A the Thomas theorem',
  },
  {
    id: 'fl8-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a cohort followed from age 30, the gap in median wealth between those who had finished college and those who had not was 20,000 dollars at age 30, 90,000 dollars at age 45, and 300,000 dollars at age 60. Which process most directly accounts for the widening of the gap?',
    options: [
      'Economic growth raises the wealth of every member of a cohort by a similar amount',
      'People born in different decades meet different economic conditions as adults',
      'Those who begin with the least wealth tend to move up faster than the others',
      'Early advantages bring resources that go on to produce still further advantages',
    ],
    correctAnswer: 3,
    explanation:
      'Cumulative advantage is the process by which an initial edge, such as a degree, yields higher earnings, savings, and returns on investments, each of which makes the next gain easier, so that a small early gap compounds over the life course. Equal gains for everyone would leave the gap unchanged. Differences between people born in different decades are cohort effects, and all of these people belong to one cohort. If those who started with the least rose fastest, the gap would narrow.',
    skill: '10A cumulative advantage',
  },
]
