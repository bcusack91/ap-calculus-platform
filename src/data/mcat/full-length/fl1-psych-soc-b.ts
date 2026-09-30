/**
 * MCAT Full-Length Form 1 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL1_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — information passage: attachment, Erikson, Kohlberg
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Attachment, Psychosocial Stages, and Moral Reasoning Across the Lifespan',
    passageText:
      'Developmental psychologists describe the lifespan as a sequence of tasks that build on one another, with early relationships shaping later social and moral functioning. Three frameworks are widely used to organize this view.\n\nMary Ainsworth’s Strange Situation assesses attachment in children between roughly 12 and 18 months of age. A caregiver and child enter an unfamiliar playroom; a stranger enters; the caregiver leaves and later returns, and the sequence is repeated. Classification depends less on how much a child protests separation than on how the child uses the caregiver on reunion. Securely attached children may cry when left but greet the returning caregiver, accept comfort, and go back to exploring. Insecure-avoidant children show little visible distress and ignore or turn away from the caregiver on return, although their heart rates and stress hormones rise as much as those of secure children. Insecure-resistant (ambivalent) children become extremely upset, seek contact on reunion yet resist it, arching away or pushing at the caregiver, and fail to return to play. A later-added disorganized category describes contradictory, dazed, or frozen behavior with no consistent strategy. Ainsworth argued that these patterns reflect the child’s internal working model of whether the caregiver can be counted on, a model built from the consistency of caregiving during the first year.\n\nErik Erikson proposed eight psychosocial stages, each organized around a crisis between two possible outcomes. Infants face trust versus mistrust; toddlers, autonomy versus shame and doubt; preschoolers, initiative versus guilt; school-age children, industry versus inferiority; adolescents, identity versus role confusion; young adults, intimacy versus isolation; middle-aged adults, generativity versus stagnation; and older adults, integrity versus despair. Generativity refers to guiding and investing in the next generation, whether through parenting, mentoring, or productive work that outlasts the self. Erikson held that a crisis is never fully closed: a favorable balance at one stage supplies the resources for the next, while an unfavorable balance can be revisited and repaired later in life.\n\nLawrence Kohlberg studied moral development by presenting dilemmas, most famously a man deciding whether to steal an unaffordable drug to save his wife, and classifying the reasoning behind participants’ answers rather than the answers themselves. Preconventional reasoning (stages 1 and 2) judges acts by the punishment avoided or the reward gained by the actor. Conventional reasoning (stages 3 and 4) judges acts by the approval of others and by the maintenance of rules, laws, and social order. Postconventional reasoning (stages 5 and 6) appeals to a social contract that laws are meant to serve and, at the highest stage, to self-chosen universal ethical principles that may override particular laws. Kohlberg claimed the sequence is invariant, and later researchers found that most adults reason at the conventional level. Carol Gilligan objected that the scheme, developed on male participants, privileges an ethic of justice over an ethic of care centered on relationships and responsibility.\n\nLongitudinal studies link the three frameworks. Infants classified as secure are more likely, as adolescents, to have close friendships and to reason about moral dilemmas at higher stages, and adults who describe their own childhood attachments coherently tend to have securely attached children of their own.',
    questions: [
      {
        question:
          'In the Strange Situation, a 15-month-old cries intensely when the caregiver leaves. On reunion the child reaches to be picked up, then stiffens and pushes the caregiver away, and does not resume playing before the session ends. According to the passage, this child would most likely be classified as:',
        options: [
          'secure, because the child sought contact from the caregiver on reunion',
          'insecure-avoidant, because the child ultimately rejected the caregiver',
          'insecure-resistant, because the child both sought and resisted contact',
          'disorganized, because the child failed to return to play after reunion',
        ],
        correctAnswer: 2,
        explanation:
          'The defining feature of the insecure-resistant (ambivalent) pattern is ambivalence on reunion: intense distress, contact-seeking, and then resistance to the contact, with no return to exploration. Seeking contact alone does not make the child secure, because a secure child accepts comfort and goes back to play. Avoidant children show little distress and do not seek to be picked up at all, so the intense crying and reaching rule that pattern out. The disorganized category requires contradictory or dazed behavior with no coherent strategy, whereas this child shows the consistent seek-then-resist strategy that defines resistance.',
        skill: '7A attachment',
      },
      {
        question:
          'A 50-year-old spends most weekends coaching a youth soccer team and has begun mentoring two new employees, describing this as the most worthwhile thing she does. This pattern is best described as a favorable resolution of which of Erikson’s crises?',
        options: [
          'Industry versus inferiority',
          'Generativity versus stagnation',
          'Integrity versus despair',
          'Intimacy versus isolation',
        ],
        correctAnswer: 1,
        explanation:
          'The passage places generativity versus stagnation in middle adulthood and defines generativity as investing in the next generation through parenting, mentoring, or lasting work; coaching youth and mentoring junior colleagues at age 50 fit both the age and the content. Industry versus inferiority belongs to school-age children mastering skills. Integrity versus despair is the late-adulthood review of a life already lived. Intimacy versus isolation concerns forming close partnerships in young adulthood rather than guiding others.',
        skill: '7A Erikson psychosocial stages',
      },
      {
        question:
          'Two participants are asked whether the man in Kohlberg’s dilemma should steal the drug. The first says no, “because he would be caught and sent to prison.” The second says no, “because if everyone broke the law whenever they had a good reason, society could not function.” Which conclusion about their moral reasoning is best supported?',
        options: [
          'Both reason at the conventional level, because each defers to legal authority',
          'Both reason at the postconventional level, because each looks beyond the act itself',
          'The first reasons at the conventional level and the second at the postconventional level',
          'The first reasons at the preconventional level and the second at the conventional level',
        ],
        correctAnswer: 3,
        explanation:
          'Kohlberg classifies the reasoning, not the verdict, so two identical answers can sit at different levels. The first participant judges the act by the punishment the actor would suffer, which is preconventional reasoning. The second judges it by the need to maintain laws and social order, which is the law-and-order form of conventional reasoning. Neither invokes a social contract or self-chosen universal principles, so postconventional reasoning is not shown by either participant, and fear of prison is not deference to legal authority as a shared social good.',
        skill: '7A Kohlberg moral development',
      },
      {
        question:
          'A longitudinal study reports that infants classified as secure in the Strange Situation have closer friendships at age 16 than infants classified as insecure. Which of the following, if true, would most weaken the claim that the infant’s internal working model caused the later difference?',
        options: [
          'The responsive caregiving that produced secure classifications tended to continue throughout adolescence',
          'Friendship closeness at age 16 was measured by adolescent self-report rather than by direct observation',
          'Roughly a third of the original infants could not be located for the assessment carried out at age 16',
          'Secure and insecure infants did not differ on the temperament ratings that their parents provided',
        ],
        correctAnswer: 0,
        explanation:
          'If the caregiving environment that created the infant classification persisted, then later friendship quality could be produced directly by the ongoing environment, and the infant working model would be a marker rather than a cause; this is the classic alternative explanation for continuity in longitudinal attachment data. Self-report measurement raises a question about the accuracy of the outcome, not about which variable produced it. Attrition weakens generalizability but does not by itself supply a rival cause for the observed association. Finding no temperament difference removes a potential confound and therefore strengthens, rather than weakens, the causal claim.',
        skill: '7A attachment research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — experiment/table: labeling vs strain in a school network
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Suspension, Peer Networks, and Delinquency in a High School',
    passageText:
      'Sociologists distinguish culture, the shared beliefs, norms, and symbols of a group, from social structure, the patterned relationships through which people are connected. Socialization transmits culture through agents such as families, schools, and peer groups, and adolescence is a period in which peers become especially influential. Two theories of deviance emphasize different parts of this process. Labeling theory holds that deviance is created by the reaction of others: when a person is publicly tagged as deviant, conventional others may withdraw, the person’s opportunities narrow, and the deviant identity may be adopted, producing further (secondary) deviance. Merton’s strain theory instead locates deviance in a gap between culturally approved goals, such as educational success, and the structurally available means of achieving them.\n\nResearchers tested these ideas in a two-year study of 600 students at a public high school. In Year 1, each student named up to ten closest friends at the school, which allowed the researchers to map the friendship network and to compute, for each student, the share of friends who reported frequent rule-breaking (the delinquent peer share, classified as high if above 50%). Students also completed a confidential questionnaire measuring their own delinquency (theft, vandalism, fighting, and substance use) over the previous six months, their educational aspirations (the highest degree they hoped to earn), and their educational expectations (the highest degree they realistically expected to earn). School records identified students who received at least one out-of-school suspension during Year 1, a formal and publicly visible sanction. In Year 2 the friendship nominations and the delinquency questionnaire were repeated.\n\nThe researchers divided students into four groups by suspension status and delinquent peer share and compared Year 2 delinquency (the percentage reporting at least one serious act) and the mean number of Year 1 friendship ties that were still named in Year 2. Because students who were suspended may already have been more delinquent, the four groups were matched on Year 1 self-reported delinquency: within every group, roughly 10% of students had reported a serious act in Year 1. Results are shown in Table 1.\n\nStudents whose expected degree fell at least two levels below their aspired degree (for example, aspiring to a bachelor’s degree but expecting to finish only high school) were classified as high strain, and the researchers planned to relate strain to Year 2 delinquency in a later report.\n\nThe researchers concluded that the formal label and the peer network were each associated with later delinquency and that their combination was associated with more delinquency than either alone. They cautioned that their design could not rule out every alternative account of the differences among groups.',
    figure:
      '**Table 1. Year 2 outcomes by Year 1 suspension status and delinquent peer share (groups matched on Year 1 delinquency)**\n\n| Group | Suspended in Year 1 | Delinquent peer share | n | Year 2 delinquency (%) | Year 1 ties still named in Year 2 (mean) |\n|-------|---------------------|-----------------------|---|------------------------|------------------------------------------|\n| 1 | No | Low | 310 | 8 | 4.6 |\n| 2 | No | High | 90 | 21 | 4.1 |\n| 3 | Yes | Low | 120 | 19 | 3.2 |\n| 4 | Yes | High | 80 | 44 | 2.9 |',
    questions: [
      {
        question:
          'Which comparison in Table 1 most directly estimates the association between the formal label and Year 2 delinquency while holding the peer network constant?',
        options: [
          'Group 1 with Group 2',
          'Group 1 with Group 3',
          'Group 1 with Group 4',
          'Group 2 with Group 3',
        ],
        correctAnswer: 1,
        explanation:
          'Groups 1 and 3 share a low delinquent peer share and differ only in whether the student was suspended, so their difference (8% versus 19%) isolates the label with the network held constant. Comparing Groups 1 and 2 holds the label constant and varies the network, which isolates the peer effect instead. Comparing Groups 1 and 4 changes both the label and the network at once, so neither can be attributed the difference. Comparing Groups 2 and 3 also changes both variables, in opposite directions, and cannot isolate either one.',
        skill: '9A deviance data interpretation',
      },
      {
        question:
          'The pattern of retained friendship ties across the four groups in Table 1 is most consistent with which process proposed by labeling theory?',
        options: [
          'Students with many delinquent friends formed tighter networks that excluded conventional peers',
          'Students with a high delinquent peer share named fewer friends in Year 1, so fewer ties were available to retain',
          'Suspended students were physically absent from school for part of Year 1, leaving less time to maintain friendships',
          'Conventional classmates withdrew from students who carried a visible deviant label',
        ],
        correctAnswer: 3,
        explanation:
          'Retained ties are lowest in the two suspended groups (3.2 and 2.9) regardless of peer composition, and labeling theory specifically predicts that a public label leads conventional others to withdraw, narrowing the labeled person’s network. A tightening of delinquent networks would predict more retained ties for the high-peer-share groups, but those groups retained fewer ties than their counterparts. Naming fewer friends at the outset is not a process described by labeling theory, and the largest drop in retained ties tracks suspension rather than peer share. Absence from school during a suspension is a mechanical explanation for lost contact, not the social reaction to a label that the theory proposes.',
        skill: '9A labeling theory',
      },
      {
        question:
          'Which additional finding would provide the strongest support for strain theory, as opposed to labeling theory, as an explanation of Year 2 delinquency?',
        options: [
          'Students who had accepted the description “troublemaker” in Year 1 were the most delinquent students in Year 2',
          'Delinquency was rare among suspended students whose classmates and teachers never learned of the suspension',
          'Students who hoped for a college degree but expected only a high school diploma were more delinquent whether or not they had been suspended',
          'Students whose closest friends had themselves been suspended were more delinquent than students whose friends had not been',
        ],
        correctAnswer: 2,
        explanation:
          'Strain theory attributes deviance to the gap between approved goals and available means; the aspiration–expectation gap is exactly that measure, and an effect that appears regardless of suspension status shows strain operating independently of any label. Accepting a deviant self-description is the internalization of a label, which supports labeling theory. Low delinquency when the label was never public supports the labeling claim that the audience’s reaction matters. Delinquency that tracks friends’ suspensions points to peer influence or the spread of labels, not to blocked goals.',
        skill: '9A strain theory',
      },
      {
        question:
          'The researchers matched the four groups on Year 1 self-reported delinquency. This step was intended primarily to address the possibility that:',
        options: [
          'students who were suspended already behaved differently, so the label marked rather than produced later delinquency',
          'students who were suspended underreported their Year 2 delinquency because they feared further school sanctions',
          'friendship nominations that were not reciprocated inflated the count of retained ties in some of the groups',
          'one school year was too short an interval for secondary deviance to develop following a suspension',
        ],
        correctAnswer: 0,
        explanation:
          'Suspensions are not assigned at random; students who are already more delinquent are more likely to be suspended, so a higher Year 2 rate among suspended students could simply reflect pre-existing differences (selection) rather than an effect of the label. Matching on Year 1 delinquency removes that particular alternative. Underreporting is a measurement problem that matching on a prior variable cannot fix. Unreciprocated nominations concern how ties were counted, not who was suspended. The length of the follow-up interval is a design limitation unrelated to group equivalence at baseline.',
        skill: '9A research design: selection',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PERSONALITY & DISORDERS — information passage: diagnostic criteria and
  //    three personality perspectives
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Diagnosing Mood and Psychotic Disorders; Perspectives on Personality',
    passageText:
      'Clinical diagnosis in psychiatry rests on patterns of symptoms, their duration, and the impairment they cause, not on any single sign. Mood disorders illustrate the approach. A major depressive episode requires at least two weeks during which a person experiences either depressed mood or a marked loss of interest or pleasure in nearly all activities, together with enough additional symptoms (changes in appetite or weight, insomnia or hypersomnia, fatigue, feelings of worthlessness or guilt, diminished concentration, psychomotor change, or recurrent thoughts of death) to total five. Major depressive disorder is diagnosed when one or more such episodes occur without any history of mania. Persistent depressive disorder describes chronic, milder depressive symptoms lasting at least two years.\n\nBipolar disorders are defined by episodes of elevated or irritable mood with increased energy. A manic episode lasts at least one week (or any length if hospitalization is required) and features symptoms such as inflated self-esteem, decreased need for sleep, pressured speech, racing thoughts, distractibility, and reckless involvement in pleasurable activities, with clear impairment. A hypomanic episode involves the same kinds of symptoms for at least four days without marked impairment, hospitalization, or psychosis. Bipolar I disorder requires at least one manic episode; depressive episodes are common but not necessary for the diagnosis. Bipolar II disorder requires at least one hypomanic episode and at least one major depressive episode, and no manic episode ever. Cyclothymic disorder involves two years of fluctuating hypomanic and depressive symptoms that never meet full episode criteria.\n\nSchizophrenia is diagnosed when at least two of five symptom types are present for a significant portion of one month, at least one of them being delusions, hallucinations, or disorganized speech; the others are grossly disorganized or catatonic behavior and negative symptoms. Positive symptoms are additions to normal experience, such as hearing voices or holding fixed false beliefs. Negative symptoms are reductions of normal function, including flattened affect, poverty of speech, and avolition, the loss of motivation to begin and sustain activities. Continuous signs of disturbance must persist for at least six months, which may include prodromal or residual periods of attenuated symptoms, and the disturbance must not be better explained by a mood disorder with psychotic features or by a substance.\n\nPersonality, in contrast to disorder, refers to the enduring dispositions that make a person’s behavior recognizably their own, and theories differ about what those dispositions are. The trait perspective, exemplified by the five-factor model (openness, conscientiousness, extraversion, agreeableness, and neuroticism), treats personality as a set of continuous dimensions on which people differ, assumes that a person’s position on each dimension is largely consistent across situations and stable across adulthood, and measures traits with self-report questionnaires. The psychoanalytic perspective, originating with Freud, holds that personality arises from conflicts among unconscious drives, internalized moral standards, and the reality-oriented ego, and that defense mechanisms such as repression, projection, and displacement keep anxiety-provoking impulses out of awareness while shaping observable behavior. The humanistic perspective of Rogers and Maslow emphasizes an innate drive toward growth and self-actualization; psychological distress is understood as incongruence between the actual self and the ideal self, often created by conditions of worth imposed by others, and it is relieved by unconditional positive regard.',
    questions: [
      {
        question:
          'A 24-year-old is hospitalized after ten days of sleeping two hours a night, speaking rapidly, believing she has a plan to end world hunger, and spending her savings on gifts for strangers. She has never experienced a depressive episode. Based on the passage, the most appropriate diagnosis is:',
        options: [
          'bipolar I disorder, because one manic episode is sufficient for the diagnosis',
          'bipolar II disorder, because the episode has not alternated with depression',
          'cyclothymic disorder, because the mood elevation has lasted more than one week',
          'no bipolar disorder, because a major depressive episode has never occurred',
        ],
        correctAnswer: 0,
        explanation:
          'Ten days of decreased need for sleep, pressured speech, grandiosity, and reckless spending severe enough to require hospitalization meet the passage’s definition of a manic episode, and bipolar I requires only one manic episode, with depression common but not necessary. Bipolar II is excluded by the presence of full mania (hospitalization and marked impairment) and by the absence of any depressive episode. Cyclothymic disorder requires two years of symptoms that never reach full episode criteria, whereas this episode clearly does. A depressive history is not required for bipolar I, so its absence does not rule out a bipolar diagnosis.',
        skill: '7A bipolar disorder diagnosis',
      },
      {
        question:
          'A 19-year-old has, for the past five weeks, heard voices commenting on his actions and become convinced that his neighbors are transmitting his thoughts; he has no prior psychiatric history and no mood symptoms. According to the passage, which statement about diagnosis is correct?',
        options: [
          'Schizophrenia can be diagnosed, because two of the required symptom types are present',
          'Bipolar I disorder is more likely, because psychotic symptoms typically indicate a manic episode',
          'Schizophrenia cannot yet be diagnosed, because the disturbance has not persisted for six months',
          'Major depressive disorder with psychotic features is more likely, because hallucinations are present',
        ],
        correctAnswer: 2,
        explanation:
          'Hallucinations and delusions satisfy the symptom-type requirement, but the passage also requires continuous signs of disturbance for at least six months, and this patient has a five-week history with no prodrome, so the duration criterion is unmet. The symptom count alone is therefore insufficient. Bipolar I requires a manic episode, and no elevated mood, decreased sleep, or increased energy is described. Major depressive disorder with psychotic features requires a depressive episode, and the patient has no mood symptoms.',
        skill: '7A schizophrenia diagnostic criteria',
      },
      {
        question:
          'A man’s coworkers describe him as hostile toward nearly everyone. Which explanation of his hostility is most consistent with the psychoanalytic perspective as described in the passage?',
        options: [
          'He scores high on neuroticism and low on agreeableness, dimensions that are stable across situations',
          'He redirects unconscious anger toward a parent onto coworkers, who are safer targets',
          'He experiences a wide gap between the person he is and the person he wants to become',
          'He was consistently rewarded for aggressive behavior during childhood and adolescence',
        ],
        correctAnswer: 1,
        explanation:
          'The psychoanalytic account explains behavior through unconscious conflict managed by defense mechanisms; redirecting anger from its true, threatening object onto safer targets is displacement, one of the mechanisms the passage names. Placing the man on stable trait dimensions is the trait perspective. A gap between the actual and ideal self is the humanistic notion of incongruence. Reinforcement history is a learning explanation and involves no unconscious conflict at all.',
        skill: '7A psychoanalytic perspective',
      },
      {
        question:
          'For three weeks a patient has lost interest in activities he once enjoyed, sleeps poorly, has lost weight without trying, feels exhausted, and cannot concentrate at work; he insists that he does not feel sad. Based on the passage, which of the following is true?',
        options: [
          'A major depressive episode cannot be diagnosed, because depressed mood is absent from his presentation',
          'Persistent depressive disorder is the better fit, because the symptoms are mostly physical',
          'Bipolar II disorder should be considered, because decreased sleep suggests hypomania',
          'A major depressive episode can be diagnosed, because loss of interest can serve as the core symptom',
        ],
        correctAnswer: 3,
        explanation:
          'The passage requires either depressed mood or marked loss of interest as the core symptom, so the patient’s anhedonia satisfies that requirement; with insomnia, weight loss, fatigue, and poor concentration the total reaches five symptoms over more than two weeks. Depressed mood is therefore not required. Persistent depressive disorder requires at least two years of symptoms, not three weeks. Hypomania involves decreased need for sleep with increased energy, whereas this patient sleeps poorly and feels exhausted.',
        skill: '7A major depressive episode criteria',
      },
      {
        question:
          'Which finding would most directly challenge a central assumption of the trait perspective described in the passage?',
        options: [
          'Self-report scores on a trait questionnaire agree closely with ratings of the same people by their friends',
          'Identical twins reared in different homes obtain similar scores on the five-factor dimensions',
          'The same individuals behave very differently from one situation to the next on the same dimension',
          'Scores on the five-factor dimensions at age 25 correlate strongly with scores at age 50',
        ],
        correctAnswer: 2,
        explanation:
          'The passage states that the trait perspective assumes a person’s standing on a dimension is largely consistent across situations, so strong situational variability in the same people directly contradicts that assumption. Agreement between self-reports and friends’ ratings supports the validity of questionnaire measurement, which the perspective relies on. Similarity in twins reared apart suggests a heritable basis for traits and is compatible with the perspective. Strong correlations between ages 25 and 50 confirm the assumption of stability across adulthood rather than challenging it.',
        skill: '7A trait perspective',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — experiment/chart: attribution, group membership,
  //    social identity, self-serving bias
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Situational Information and Attributions for an In-Group or Out-Group Failure',
    passageText:
      'People explain behavior by attributing it to dispositions (traits, abilities, and character) or to situations. Observers tend to overweight dispositions when explaining other people’s behavior, a tendency known as the fundamental attribution error, and a related literature suggests that observers are less willing to accept situational explanations when the actor belongs to a group they regard as an out-group. Social identity theory adds that group memberships form part of the self-concept, so that evaluations of in-group and out-group members can serve to maintain a positive view of the self.\n\nResearchers recruited 240 undergraduates from a university with a long-standing athletic rivalry with a neighboring institution. Each participant read a short account of a student who missed a deadline for a group project, causing the whole group to lose credit. The account identified the student as attending either the participant’s own university (in-group target) or the rival university (out-group target). Participants were randomly assigned to receive zero, one, two, three, or four situational cues embedded in the account, drawn in a fixed order from a list of four (the student’s computer failed the night before; a family member had been hospitalized; the student was covering extra shifts at work; the instructor had changed the deadline with little notice). After reading, participants rated on a 1-to-9 scale the extent to which the missed deadline reflected the student’s own character and ability rather than circumstances, with 9 indicating a wholly dispositional cause. Mean ratings are plotted in Figure 1.\n\nBefore the main task, participants completed a scale measuring how central their university membership was to their sense of self. When participants were divided at the median score, the gap between ratings of in-group and out-group targets who had been presented with four cues was 3.4 points among high identifiers and 0.9 points among low identifiers; at zero cues the gap was under 0.3 points in both subgroups.\n\nIn a final block, participants were asked to recall one recent occasion on which they themselves had missed a deadline and one on which they had completed a difficult assignment early, and to rate each on the same scale with no cues supplied. The mean rating for the participants’ own missed deadline was 3.2, and the mean for their own early completion was 7.5.\n\nThe researchers reported that the effect of the number of cues, the effect of target group, and their interaction were all statistically significant, that the pattern held for both male and female participants, and that ratings did not differ by whether the participant had ever personally missed a group deadline.',
    chart: {
      title: 'Figure 1. Mean dispositional attribution rating for the target’s missed deadline as a function of the number of situational cues provided',
      kind: 'line',
      xLabel: 'Situational cues provided',
      yLabel: 'Dispositional attribution rating',
      yUnit: '1–9 scale',
      xValues: [0, 1, 2, 3, 4],
      yValues: [6.9, 6.1, 5.3, 4.6, 4.0],
      seriesLabel: 'In-group target (own university)',
      comparisonSeries: [{ label: 'Out-group target (rival university)', yValues: [7.0, 6.7, 6.5, 6.3, 6.1] }],
    },
    questions: [
      {
        question:
          'Based on Figure 1, each added situational cue lowered the mean dispositional rating for in-group targets by approximately how much more than it lowered the rating for out-group targets?',
        options: ['0.2 points', '0.5 points', '0.7 points', '2.0 points'],
        correctAnswer: 1,
        explanation:
          'Across four cues the in-group rating fell from 6.9 to 4.0, a drop of 2.9 points, or about 0.7 points per cue; the out-group rating fell from 7.0 to 6.1, a drop of 0.9 points, or about 0.2 points per cue. The difference is roughly 0.5 points per cue. The 0.2 value is the out-group drop per cue alone, and the 0.7 value is the in-group drop per cue alone, not the difference between them. The 2.0 value is close to the total gap between the two series at four cues rather than a per-cue difference.',
        skill: '8B attribution data interpretation',
      },
      {
        question:
          'The ratings of out-group targets who were presented with four situational cues are best explained by which of the following?',
        options: [
          'Observers were less willing to accept situational explanations for a rival, keeping a dispositional account',
          'Observers assumed the rival group member deserved the outcome, reflecting a belief that the world is just',
          'Observers treated the rival group member’s failure as their own, reflecting the actor–observer difference',
          'Observers protected the rival group member’s reputation, reflecting the self-serving bias',
        ],
        correctAnswer: 0,
        explanation:
          'Out-group ratings stayed near 6 even when four situational explanations were available, so the dispositional attribution that characterizes the fundamental attribution error persisted for the rival group member while in-group ratings were revised downward. Nothing in the design measured whether participants believed the outcome was deserved, so a just-world explanation goes beyond the data. The actor–observer difference concerns how people explain their own behavior versus others’, and participants were observers of both targets. The self-serving bias concerns attributions for one’s own outcomes, and a persistently dispositional rating for a failure does not protect anyone’s reputation.',
        skill: '8B fundamental attribution error and group membership',
      },
      {
        question:
          'The participants’ ratings of their own missed deadline (3.2) and their own early completion (7.5) are together best explained by:',
        options: [
          'the actor–observer difference, since actors attribute their own behavior to situations',
          'the fundamental attribution error, since observers overweight dispositional causes',
          'in-group favoritism, since participants rated themselves as members of the in-group',
          'the self-serving bias, since successes are claimed and failures are externalized',
        ],
        correctAnswer: 3,
        explanation:
          'A low dispositional rating for one’s own failure together with a high dispositional rating for one’s own success is the signature of the self-serving bias: internal credit for good outcomes and external blame for bad ones. The actor–observer difference predicts situational attributions for one’s own behavior regardless of outcome, so it cannot explain the 7.5 rating for the success. The fundamental attribution error describes explanations of others’ behavior, not one’s own. In-group favoritism concerns evaluations of fellow group members and would not produce opposite attributions for success and failure.',
        skill: '8B self-serving bias',
      },
      {
        question:
          'Which additional condition would best distinguish a stereotype specific to the rival university from a general bias against any out-group?',
        options: [
          'Presenting the rival-university target with five or six situational cues instead of four',
          'Asking participants to rate how much they like the rival university before reading the account',
          'Adding a target from a distant university with which participants have no rivalry',
          'Replacing the missed deadline with an early completion for the rival-university target',
        ],
        correctAnswer: 2,
        explanation:
          'A target who is an out-group member but carries no rivalry-based stereotype separates the two explanations: if ratings for that target fall with cues like the in-group ratings, the effect is specific to the rival; if they stay high, the effect is general out-group bias. Adding more cues for the rival only extends the existing manipulation and does not vary group type. Measuring liking for the rival may predict the size of the effect but cannot show whether a non-rival out-group would be treated differently. Changing the outcome to a success tests attributions for positive behavior, which is a different question.',
        skill: '8B research design: stereotype vs out-group bias',
      },
      {
        question:
          'The results of the median split on university identification most directly support which claim?',
        options: [
          'People categorize others into groups only when the categories are made salient by an authority',
          'Bias against an out-group disappears once people identify strongly with any group at all',
          'High identifiers ignore situational information about every target, in-group or out-group',
          'The more central a group is to a person’s self-concept, the stronger the bias favoring that group',
        ],
        correctAnswer: 3,
        explanation:
          'The in-group versus out-group gap at four cues was nearly four times larger among participants for whom the university was central to the self (3.4 points) than among low identifiers (0.9 points), which is what social identity theory predicts when group membership is a larger part of the self-concept. No authority made categories salient in this study, and participants sorted targets by university on their own. Strong identification increased rather than removed the bias. High identifiers cannot have ignored situational information for every target, because the large gap at four cues requires that in-group ratings dropped substantially while the zero-cue gap was near zero.',
        skill: '8A social identity theory',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — experiment/table: health disparities by income, insurance,
  //     and race/ethnicity (preventable hospitalization rates)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Preventable Hospitalization Across Income, Insurance, and Race',
    passageText:
      'Sociologists describe a social gradient in health: at each step up the socioeconomic ladder, whether measured by income, education, or occupation, average health improves. Explanations for the gradient include differences in access to medical care, in material conditions such as housing and nutrition, in exposure to chronic stress, and in health-related behaviors. Race and ethnicity are associated with health outcomes as well, and because racial and ethnic minority groups are overrepresented in lower socioeconomic positions, a central question is how much of the racial difference in health is a product of socioeconomic difference and how much reflects other mechanisms, such as residential segregation, discrimination within and outside the health system, and cumulative disadvantage across the life course.\n\nTwo interpretations of income gradients compete. One holds that income affects health chiefly through access to care, so that extending coverage should largely remove the gradient. The other, sometimes called the fundamental cause view, holds that socioeconomic resources (money, knowledge, power, and social connections) can be used flexibly to avoid risk and adopt protective strategies whatever the health threat, so that gradients persist even when a particular pathway such as insurance is equalized.\n\nA state health department examined preventable hospitalizations, defined as admissions for conditions, such as uncontrolled asthma, diabetes complications, and hypertensive crises, that timely and adequate outpatient care can usually keep from progressing to the point of requiring a hospital stay. Preventable hospitalization is widely used as an indicator of access to and quality of primary care rather than of underlying disease burden alone. The department linked a survey of 20,000 adults aged 25 to 64 to hospital discharge records over the following three years. The survey recorded household income, insurance status at the time of the survey, race and ethnicity, and whether the respondent had a usual source of care, meaning a particular clinic or clinician they would go to when sick.\n\nRates were computed as hospitalizations per 1,000 person-years of follow-up. Because older adults are hospitalized more often than younger adults and the age composition of income groups differs, every rate was age-adjusted by direct standardization to the age distribution of the full sample. Table 1 gives rates by income quartile and insurance status, along with the percentage of each quartile reporting a usual source of care. Table 2 gives rates for insured adults in the highest income quartile by race and ethnicity; within this subgroup, the three groups did not differ meaningfully in the percentage with a usual source of care or in the self-reported prevalence of diabetes, asthma, or hypertension.\n\nThe department noted that the survey measured income and insurance only once, at baseline, and that some respondents likely changed insurance status during follow-up.',
    figure:
      '**Table 1. Age-adjusted preventable hospitalizations per 1,000 person-years, by household income quartile and insurance status**\n\n| Income quartile | Insured | Uninsured | Usual source of care (%) |\n|-----------------|---------|-----------|--------------------------|\n| Lowest | 14.0 | 24.5 | 58 |\n| Second | 10.2 | 18.0 | 70 |\n| Third | 7.5 | 13.1 | 81 |\n| Highest | 5.6 | 10.0 | 90 |\n\n**Table 2. Age-adjusted preventable hospitalizations per 1,000 person-years among insured adults in the highest income quartile, by race and ethnicity**\n\n| Group | n | Rate |\n|-------|---|------|\n| White | 2,400 | 5.0 |\n| Black | 450 | 7.6 |\n| Hispanic | 520 | 6.2 |',
    questions: [
      {
        question:
          'Which statement about the relationship between insurance status and preventable hospitalization is best supported by Table 1?',
        options: [
          'Being uninsured is associated with roughly the same proportional increase in the rate in every income quartile',
          'Being uninsured is associated with roughly the same absolute increase in the rate in every income quartile',
          'Being uninsured eliminates the income gradient, since uninsured adults have similar rates across quartiles',
          'Being uninsured has no association with the rate once the percentage with a usual source of care is considered',
        ],
        correctAnswer: 0,
        explanation:
          'The uninsured-to-insured ratio is about 1.75 in every quartile (24.5/14.0, 18.0/10.2, 13.1/7.5, and 10.0/5.6 all round to 1.75–1.8), so lacking insurance multiplies the rate by a nearly constant factor. The absolute differences shrink from 10.5 to 4.4 as income rises, so they are not constant. Uninsured rates fall from 24.5 to 10.0 across quartiles, so the gradient is present among the uninsured, not eliminated. The usual-source-of-care column varies with income, not insurance, and the table gives no way to remove insurance’s association by using it.',
        skill: '10A health disparities data interpretation',
      },
      {
        question:
          'Suppose the rates in Table 1 had NOT been age-adjusted and the lowest income quartile contained a larger share of adults aged 55 to 64 than the other quartiles. Compared with the adjusted rates, the unadjusted comparison would most likely have:',
        options: [
          'understated the income gradient, because older adults are hospitalized less often than younger adults',
          'overstated the income gradient, because part of the difference would reflect age rather than income',
          'left the gradient unchanged, because standardization affects only the rates of uninsured adults',
          'reversed the gradient, because the highest quartile would then contain the youngest adults in the sample',
        ],
        correctAnswer: 1,
        explanation:
          'Age raises hospitalization independently of income, so a lowest quartile that is older would show an inflated crude rate, and the gap between it and the highest quartile would mix an age effect with the income effect; age adjustment removes that confound, so the unadjusted gradient would be exaggerated. Older adults are hospitalized more often, not less, so the gradient would not be understated. Standardization is applied to every rate, not only to uninsured adults. A larger older share in the lowest quartile pushes its rate up, which cannot reverse a gradient in which the lowest quartile already has the highest rate.',
        skill: '10A confounding and age standardization',
      },
      {
        question:
          'The results in Table 2 are most consistent with which of the following claims?',
        options: [
          'Racial and ethnic differences in preventable hospitalization are fully explained by differences in income',
          'Racial and ethnic differences in preventable hospitalization arise mainly from differences in the prevalence of chronic disease',
          'Racial and ethnic differences in preventable hospitalization disappear once adults have a usual source of care',
          'Racial and ethnic differences in preventable hospitalization persist through pathways other than income and insurance',
        ],
        correctAnswer: 3,
        explanation:
          'Table 2 holds income (highest quartile) and insurance (insured only) constant, and the passage states that the groups also had similar rates of a usual source of care and similar disease prevalence; the remaining differences (5.0 versus 7.6 and 6.2) therefore cannot be attributed to income, insurance, access, or disease burden, which points to other mechanisms such as those the passage lists. Differences that remain within the same income quartile are, by construction, not fully explained by income. Similar self-reported prevalence of the relevant chronic conditions rules out disease burden as the main explanation. Similar rates of having a usual source of care rule out that variable as the reason the differences would disappear.',
        skill: '10A race, socioeconomic status, and health',
      },
      {
        question:
          'A legislator argues that providing insurance to all uninsured adults in the lowest income quartile would lower their preventable hospitalization rate to about the level of the highest quartile. Based on Table 1, this expectation is:',
        options: [
          'reasonable, because insurance status is the stronger of the two predictors of hospitalization shown in the table',
          'too pessimistic, because uninsured adults gain more from coverage than the insured rates would suggest',
          'too optimistic, because insured adults in the lowest quartile still have 2.5 times the rate of the highest quartile',
          'impossible to evaluate, because the table does not report rates for adults who gained insurance during follow-up',
        ],
        correctAnswer: 2,
        explanation:
          'Even among adults who already have insurance, the lowest quartile’s rate (14.0) is 2.5 times the highest quartile’s (5.6), so equalizing insurance would at best move the uninsured toward 14.0, not toward 5.6; this is the pattern the fundamental cause view predicts. Insurance is not the stronger predictor: within the insured, income spans 14.0 to 5.6 (a 2.5-fold range), while within the lowest quartile insurance spans 24.5 to 14.0 (a 1.75-fold range). Nothing in the table suggests newly insured adults would do better than adults who were already insured. The table cannot report outcomes for people who gained coverage, but the insured rates already show what income does when coverage is held constant, so the expectation can be evaluated.',
        skill: '10A social gradient and access to care',
      },
    ],
  },
]

export const FL1_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-ps-b-d01',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A cumulative record shows a pause in responding immediately after each reinforcer, followed by a gradual acceleration of responding until the next reinforcer is delivered. This scalloped pattern is characteristic of which schedule of reinforcement?',
    options: ['Fixed-ratio', 'Fixed-interval', 'Variable-ratio', 'Variable-interval'],
    correctAnswer: 1,
    explanation:
      'On a fixed-interval schedule the first response after a set time is reinforced, so responding is pointless right after a reinforcer and increasingly likely as the interval elapses, producing the classic scallop. A fixed-ratio schedule produces a brief post-reinforcement pause followed by a high, steady run of responses rather than a gradual acceleration. Variable-ratio schedules produce high, steady rates with little or no pause. Variable-interval schedules produce moderate, steady rates because the time to the next available reinforcer is unpredictable.',
    skill: '7A reinforcement schedules',
  },
  {
    id: 'fl1-ps-b-d02',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'A nursing student is confident that she can master intravenous catheter placement with practice, yet she describes herself as generally worthless and a disappointment to her family. This combination best illustrates:',
    options: [
      'low self-efficacy for the skill combined with high global self-esteem',
      'an external locus of control combined with high global self-esteem',
      'high self-efficacy for the skill combined with low global self-esteem',
      'learned helplessness about the skill combined with low global self-esteem',
    ],
    correctAnswer: 2,
    explanation:
      'Self-efficacy is a belief about one’s ability to succeed at a specific task, and the student’s confidence that she can master the procedure is high; self-esteem is a global evaluation of one’s worth, and hers is low. The two are distinct, so they can diverge exactly this way. Low self-efficacy would mean she doubted she could learn the skill. An external locus of control would mean she attributed outcomes to luck or others, which is not described, and her self-esteem is low rather than high. Learned helplessness involves giving up on a task after uncontrollable failure, the opposite of her confidence about the skill.',
    skill: '8A self-efficacy and self-esteem',
  },
  {
    id: 'fl1-ps-b-d03',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'A restaurant server smiles and speaks formally with customers, then steps into the kitchen and mocks the same customers with coworkers. In Goffman’s dramaturgical approach, the kitchen behavior represents:',
    options: [
      'back-stage behavior, in which the performance given to customers is set aside',
      'front-stage behavior, since coworkers are also an audience for the performance',
      'role strain, since the server faces competing expectations within a single role',
      'role conflict, since the roles of server and coworker require opposite behaviors',
    ],
    correctAnswer: 0,
    explanation:
      'In the dramaturgical approach, the front stage is where a performance is given to an audience and the back stage is where the performer relaxes, prepares, and drops the front; the kitchen, away from customers, is the back stage. The presence of coworkers does not make the kitchen a front stage, because they are fellow performers rather than the audience the performance is aimed at. Role strain refers to difficulty meeting competing demands within one role, which is not what mocking customers privately shows. Role conflict involves incompatible demands from two different roles, and being a coworker is part of the same job rather than a competing role.',
    skill: '8C dramaturgical approach',
  },
  {
    id: 'fl1-ps-b-d04',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A 72-year-old outperforms a group of 25-year-olds on a vocabulary test and on questions about historical facts but performs worse on a timed test that requires detecting the rule in a series of novel abstract patterns. This profile is best described as:',
    options: [
      'fluid intelligence preserved while crystallized intelligence declines',
      'both forms of intelligence declining, with vocabulary loss masked by practice',
      'general intelligence increasing with age in verbal domains only',
      'crystallized intelligence preserved while fluid intelligence declines',
    ],
    correctAnswer: 3,
    explanation:
      'Crystallized intelligence, the accumulated knowledge and verbal skill measured by vocabulary and factual questions, typically holds steady or grows into late adulthood, while fluid intelligence, the capacity to reason quickly about novel material, declines with age; the profile matches that pattern. Reversing the two labels contradicts the results, since the novel-pattern task is the one that suffered. Vocabulary performance exceeded that of the younger adults, so it is not declining and masked. General intelligence is a single overall factor and is not described as rising selectively in verbal domains.',
    skill: '6B fluid and crystallized intelligence',
  },
  {
    id: 'fl1-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Residents of a region had complained for decades about pollution from a nearby plant, but an organized movement demanding its closure emerged only after a national environmental organization supplied staff, funding, legal advice, and media contacts. This history best supports which theory of social movements?',
    options: ['Relative deprivation theory', 'Resource mobilization theory', 'Structural strain theory', 'Emergent norm theory'],
    correctAnswer: 1,
    explanation:
      'Resource mobilization theory holds that grievances alone are not enough; movements form when organizational resources such as money, leadership, expertise, and media access become available, which is exactly what changed here. Relative deprivation theory would predict that the movement arose when residents felt newly disadvantaged relative to others, but the grievance had existed unchanged for decades. Structural strain theory emphasizes generalized beliefs and precipitating events rather than organizational capacity. Emergent norm theory explains how norms arise within crowds during collective behavior, not why an organized movement forms.',
    skill: '9B social movements',
  },
  {
    id: 'fl1-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A sociologist observes that a town’s weekly religious services bring residents together, reaffirm shared norms, and strengthen a sense of belonging, and argues that these effects occur whether or not members privately accept the doctrine. This analysis reflects which theoretical perspective on religion?',
    options: [
      'Functionalism, which stresses the role of religion in producing social cohesion',
      'Conflict theory, which stresses the role of religion in legitimating inequality',
      'Symbolic interactionism, which stresses the meanings people create in face-to-face ritual',
      'Rational choice theory, which stresses individuals weighing the costs and benefits of membership',
    ],
    correctAnswer: 0,
    explanation:
      'Analyzing religion by the functions it serves for the group as a whole, such as solidarity and the reaffirmation of shared norms, is the functionalist perspective associated with Durkheim, and the claim that these functions operate independently of private belief is characteristic of it. Conflict theory would ask whose interests the institution serves and how it justifies existing power arrangements, which the observation does not address. Symbolic interactionism would focus on how participants interpret symbols in interaction rather than on society-level cohesion. Rational choice theory treats religious participation as an individual cost–benefit decision rather than as a source of collective integration.',
    skill: '9B religion as a social institution',
  },
  {
    id: 'fl1-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'During jury deliberation, a juror privately believes the defendant is not guilty but votes guilty along with the other eleven jurors, later explaining that she did not want to be the one holding everyone up. Her vote is best described as:',
    options: [
      'obedience, since the other jurors held authority over her and directed her decision',
      'internalization, since informational influence changed her private belief about the case',
      'compliance, since normative influence changed her public vote but not her belief',
      'deindividuation, since being in a group reduced her sense of personal responsibility for the vote',
    ],
    correctAnswer: 2,
    explanation:
      'Changing public behavior to match a group while privately disagreeing, in order to avoid disapproval or standing out, is compliance produced by normative social influence. Obedience requires a directive from an authority figure, and fellow jurors are peers who gave no orders. Internalization would mean the group’s information persuaded her that the defendant was guilty, but her private belief did not change. Deindividuation involves a loss of self-awareness in anonymous group settings and is not what a juror describing her own reluctance to hold up the group is showing.',
    skill: '7C conformity and social influence',
  },
]
