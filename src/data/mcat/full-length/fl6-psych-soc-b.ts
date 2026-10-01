/**
 * MCAT Full-Length Form 6 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1–5 (fl1- … fl5-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL6_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — information passage: late adulthood (social theories
  //    of aging, socioemotional selectivity, SOC, grief models, retirement)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Goals, Loss, and Adaptation in Late Adulthood',
    passageText:
      'Early theories of social aging disagreed about what a good old age looks like. Disengagement theory held that older adults and society withdraw from each other by mutual consent, and that the separation is natural and benefits both: the individual is released from demanding roles, and positions are opened for the young. Activity theory replied that well-being in late life depends on staying involved, so that roles lost through retirement or widowhood should be replaced with new ones. Continuity theory took a third position: people adapt best when they preserve the activities, relationships, and ways of living that have long defined them, modifying these patterns only as far as circumstances require.\n\nLater work shifted attention from how much older adults do to what they are trying to accomplish. Socioemotional selectivity theory starts from the observation that social networks shrink with age and asks why. Its answer is that goals depend on how much time a person believes remains. When the future seems open-ended, people give priority to goals that pay off later, such as acquiring information and meeting people who may prove useful. When time seems limited, they give priority to goals realized in the present, above all emotionally meaningful contact. The theory therefore treats the shrinking network as the product of choice: peripheral acquaintances are dropped while close partners are kept. A notable feature of the theory is that its operative variable is perceived time remaining, not chronological age.\n\nA related approach, selective optimization with compensation, describes how people maintain performance as physical and cognitive reserves decline. Selection means narrowing one’s goals to a smaller number of valued domains. Optimization means investing time and practice to maximize performance in the domains retained. Compensation means adopting new means, such as aids, altered strategies, or help from others, when former means no longer suffice. The approach was offered partly in response to biomedical definitions of successful aging, which require freedom from disease and disability together with high functioning and active engagement, and which few people in their eighties can satisfy even when they report high satisfaction with life.\n\nLate adulthood also brings bereavement. A well-known account proposed five stages (denial, anger, bargaining, depression, and acceptance), although it was derived from interviews with terminally ill patients about their own approaching deaths, not from studies of the bereaved. Longitudinal studies of widowed adults have found no reliable sequence of this kind, and a large fraction of them show stable, low levels of distress throughout. The dual process model offers an alternative. It distinguishes loss-oriented coping, in which a person confronts the loss itself by remembering, yearning, and expressing grief, from restoration-oriented coping, in which a person attends to the secondary consequences of the loss by mastering new tasks and building a changed identity. The model holds that healthy adjustment involves oscillation between the two, with periods of respite from both, and that exclusive reliance on either one predicts poorer outcomes.\n\nRetirement poses a parallel challenge to identity, because for many adults an occupation supplies a daily structure, a circle of contacts, and an answer to the question of who one is. Adjustment tends to be better when retirement is chosen and anticipated than when it is imposed, and when work was only one of several valued roles.',
    questions: [
      {
        question:
          'Adults in their seventies were asked to choose one of three partners for a free half hour: a member of their immediate family, the author of a book they had just read, or a recent acquaintance with whom they seemed to have much in common. Before choosing, half of the participants were asked to imagine that a medical advance had just guaranteed them 20 additional years of good health. Socioemotional selectivity theory predicts that, relative to the other participants, those who imagined the advance would:',
        options: [
          'choose the family member more often, because good health would make visits easier',
          'choose the family member just as often, because the two groups were the same age',
          'choose the author or the acquaintance more often, because their time horizon had lengthened',
          'choose to spend the time alone more often, because withdrawal is preferred in old age',
        ],
        correctAnswer: 2,
        explanation:
          'The theory makes perceived time remaining, not age, the variable that sets goals, so older adults who imagine an extended future should shift toward the knowledge- and future-oriented goals served by novel partners such as the author or the new acquaintance. A stronger preference for the family member is what a shortened horizon produces, not a lengthened one, and ease of visiting is not part of the theory. Predicting no difference because the groups were the same age treats age itself as the cause, which the theory explicitly rejects. A preference for solitude is the prediction of disengagement theory and is unrelated to the manipulation.',
        skill: '7A socioemotional selectivity theory (new situation)',
      },
      {
        question:
          'An 82-year-old woman with arthritis has gardened all her adult life. Which of her recent changes is an example of compensation, as the passage defines the term?',
        options: [
          'Working from a stool with long-handled tools because she can no longer kneel',
          'Giving up her vegetable plots so that she can concentrate on her rose beds',
          'Spending extra hours each week refining the way she prunes and feeds the roses',
          'Joining a reading group to fill the afternoons she once spent in the far plots',
        ],
        correctAnswer: 0,
        explanation:
          'Compensation is the adoption of new means to reach the same goal when the old means are no longer available, and the stool and long-handled tools let her keep gardening despite being unable to kneel. Giving up the vegetable plots to concentrate on roses narrows her goals, which is selection. Putting more practice into pruning and feeding raises her performance in the retained domain, which is optimization. Joining a reading group replaces a lost activity with a different one, the remedy activity theory recommends, and does nothing to sustain her gardening.',
        skill: '7A selective optimization with compensation',
      },
      {
        question:
          'Eight months after his wife’s death, a 79-year-old man spends some days looking through photographs and weeping and other days learning to cook and to manage the accounts she used to keep. On the dual process model, this pattern is best regarded as:',
        options: [
          'incomplete, because he has not yet passed from depression into acceptance',
          'avoidant, because the household tasks distract him from confronting the loss',
          'excessive, because yearning for the deceased should have ended months ago',
          'adaptive, because he alternates between grieving and rebuilding',
        ],
        correctAnswer: 3,
        explanation:
          'Days spent with photographs are loss-oriented coping and days spent mastering her former tasks are restoration-oriented coping; the model treats movement back and forth between the two as the mark of healthy adjustment. Describing him as stalled between depression and acceptance applies the stage account, which the dual process model was proposed to replace. The model regards restoration work and respite from grief as necessary parts of coping, not as avoidance. It sets no deadline after which yearning becomes excessive, and only exclusive reliance on one orientation predicts poorer outcomes.',
        skill: '7A grief: dual process model',
      },
      {
        question:
          'Two engineers retire at 65. The first is required to leave by his employer and had few interests outside his work. The second chose his retirement date years in advance, still consults a few days each month, and sings in the choir he joined at 30. The second engineer adjusts more easily. Which explanation of his easier adjustment applies continuity theory?',
        options: [
          'He has withdrawn from more of his obligations, as both he and society expect at his age',
          'He has kept familiar pursuits and a reduced form of his working role',
          'He has replaced each of the roles he lost with a new and equally demanding role',
          'He has come to see his remaining time as open-ended and is seeking new contacts',
        ],
        correctAnswer: 1,
        explanation:
          'Continuity theory attributes good adjustment to preserving long-standing patterns with only the modifications circumstances require, and the second engineer keeps both a scaled-down version of his occupation and a decades-old pastime. Mutual withdrawal from obligations is the mechanism of disengagement theory, and he has in fact withdrawn less than the first engineer. Substituting new roles for lost ones is the mechanism of activity theory, and he has taken on no new roles. An open-ended time horizon and a search for new contacts come from socioemotional selectivity theory and are not described in the scenario.',
        skill: '7A theories of aging: continuity vs activity vs disengagement',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — cross-sectional survey, table: heritage-language use and
  //    intermarriage across three immigrant generations in two origin groups
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Language and Marriage Across Three Immigrant Generations',
    passageText:
      'Sociologists who study immigration count generations from the point of arrival. The first generation consists of people born abroad who migrated; the second generation, of people born in the receiving country to at least one foreign-born parent; and the third generation, of people born in the receiving country to native-born parents and at least one foreign-born grandparent. Comparing generations is a common way to gauge how quickly the descendants of immigrants come to resemble the rest of the population.\n\nTwo indicators receive particular attention. The first is language. A long-standing model of language shift holds that the immigrant generation continues to rely on its heritage language while learning enough of the host language to manage work and public life; that their children grow up bilingual, speaking the heritage language with parents and the host language everywhere else; and that their grandchildren speak the host language only. The second indicator is intermarriage, or exogamy: marriage to someone outside one’s group of origin. Because a marriage joins two sets of kin as well as two people, sociologists have treated the frequency of intermarriage as a measure of the social distance between groups. Whether a person marries within the group depends, however, on two different things: a preference for partners of similar background, which families and communities may encourage, and the opportunity to meet such partners, which depends on how numerous and how residentially concentrated the group is.\n\nResearchers surveyed married adults aged 25 to 44 in one metropolitan area during a single year. Respondents belonged to one of two origin groups. Group X is large, and most of its members live in a few adjoining districts where shops, congregations, and many employers operate in the heritage language; migration from its country of origin is continuing. Group Y is small, its members are scattered throughout the metropolitan area, and migration from its country of origin largely ended decades ago. The two groups have similar average levels of schooling and income. Each respondent’s generation was determined from the respondent’s own report of where he or she, the parents, and the grandparents had been born, and third-generation respondents were located by asking adults in randomly selected households whether they had ancestry in either group. Respondents rated how well they spoke the heritage language, named the language used most at home, and reported whether their spouse had any ancestry in the same origin group. Results appear in Table 1.\n\nThe researchers noted two limits on their conclusions. First, the three generations were interviewed at the same time, so the third-generation respondents are the grandchildren of people who arrived many decades ago, not the eventual grandchildren of the first-generation respondents in the sample. Second, locating the third generation depended on respondents knowing and reporting a grandparent’s origin.',
    figure:
      '**Table 1. Heritage-language use and intermarriage by origin group and generation (married adults aged 25–44)**\n\n| Group | Generation | n | Speaks heritage language well (%) | Uses heritage language most at home (%) | Spouse from outside the group (%) |\n|---|---|---|---|---|---|\n| X | First | 600 | 98 | 90 | 8 |\n| X | Second | 500 | 70 | 35 | 26 |\n| X | Third | 300 | 22 | 6 | 44 |\n| Y | First | 300 | 97 | 85 | 20 |\n| Y | Second | 250 | 40 | 12 | 54 |\n| Y | Third | 100 | 5 | 1 | 78 |',
    questions: [
      {
        question: 'Table 1 supports which generalization about how a heritage language is lost across generations?',
        options: [
          'The ability to speak it is lost first, and home use continues for a generation afterward',
          'The ability to speak it and home use are lost together, at the same pace in each generation',
          'Home use is given up only after most of a generation has married outside the group',
          'Home use declines first, while many who have given it up can still speak it well',
        ],
        correctAnswer: 3,
        explanation:
          'In every row the percentage who speak the language well exceeds the percentage who use it most at home, and the gap is widest in the second generation (70% versus 35% in Group X, 40% versus 12% in Group Y), so daily use is abandoned by many people who retain the ability. Ability outlasting use is the reverse of ability being lost first. The two measures do not fall at the same pace, since in Group X’s second generation home use has dropped to 35% while 70% still speak the language well. Home use in Group X falls from 90% to 35% in a generation in which only 26% married out, so the decline does not wait for majority intermarriage.',
        skill: '9B data interpretation: language shift',
      },
      {
        question:
          'The researchers suspect that the higher rate of intermarriage in Group Y reflects opportunity more than preference. Which additional finding would best support that view?',
        options: [
          'Members of Group X who live inside its districts say that a spouse’s background matters to them',
          'Members of Group X who live far from its districts marry out about as often as members of Group Y',
          'Members of Group Y in all three generations say that a spouse’s background does not matter to them',
          'Members of both groups marry out more often in the third generation than in the first generation',
        ],
        correctAnswer: 1,
        explanation:
          'If members of Group X marry out at Group Y’s rate once they live away from the districts where co-ethnic partners are concentrated, then the difference between the groups tracks who is available to meet, which is the opportunity explanation. A stated preference for same-background spouses among Group X residents, or stated indifference among Group Y members, would instead point to a difference in preference. A rise in intermarriage from the first to the third generation occurs in both groups and so cannot discriminate between explanations of why the groups differ from each other.',
        skill: '9B research design: distinguishing rival explanations',
      },
      {
        question:
          'Suppose that the grandchildren of intermarried couples are less likely than other grandchildren to know of, or to mention, their ancestry in an origin group. The third-generation rows of Table 1 would then most likely:',
        options: [
          'overstate language retention and understate intermarriage',
          'understate language retention and overstate intermarriage',
          'overstate both language retention and intermarriage',
          'understate both language retention and intermarriage',
        ],
        correctAnswer: 0,
        explanation:
          'Grandchildren raised in intermarried families are the descendants least likely to have learned the heritage language and most likely to marry outside the group themselves, so if they disproportionately go uncounted, the third-generation respondents who remain are the ones with the strongest ties to the group. The sample would therefore show more language retention and less intermarriage than the true third generation. The reverse pattern would require that the most attached descendants were the ones missed. The two biases run in opposite directions because the missing respondents are low on one measure and high on the other, which rules out both measures being overstated or both understated.',
        skill: '9B research design: selective identification',
      },
      {
        question:
          'Measured against the model of language shift described in the passage, the results for Group Y indicate that the shift was:',
        options: [
          'slower than the model predicts, because most of the second generation uses the language at home',
          'as fast as the model predicts, because fluency is lost only between the second and third generations',
          'faster than the model predicts, because most of the second generation does not speak the language well',
          'absent, contrary to the model, because the first generation speaks the language as well as Group X does',
        ],
        correctAnswer: 2,
        explanation:
          'The model expects the second generation to be bilingual and the loss of the heritage language to come in the third, but only 40% of Group Y’s second generation speaks the language well, so most of that generation has already made the change the model assigns to their children. Only 12% of Group Y’s second generation uses the language most at home, so the claim of slower shift rests on a false reading. Fluency falls from 97% to 40% between the first and second generations, so the loss is not confined to the later step. Near-universal fluency in the immigrant generation is what the model predicts and says nothing about whether later generations shifted.',
        skill: '9B evaluating a model against data',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PERSONALITY/DISORDERS — prospective cohort, chart: hostility vs the
  //    global Type A pattern and 20-year coronary events; pathways; confounds
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Hostility, Time Urgency, and Coronary Events in a Twenty-Year Cohort',
    passageText:
      'In the 1950s two cardiologists proposed that a particular style of behavior predisposes people to coronary heart disease. The Type A behavior pattern, as they called it, combines competitive striving for achievement, a chronic sense of time urgency and impatience, and easily aroused hostility; people who lack these characteristics are designated Type B. An early prospective study reported that Type A men developed coronary disease at about twice the rate of Type B men, but several later studies found no difference at all, and researchers began to ask whether the global pattern concealed components of unequal importance.\n\nThree pathways have been proposed by which a behavioral disposition could damage the heart. The reactivity pathway holds that some people respond to everyday provocations with unusually large and prolonged surges in heart rate, blood pressure, and stress hormones, and that repeated surges injure the lining of the coronary arteries. The health-behavior pathway holds that the disposition is accompanied by smoking, heavy drinking, poor diet, and inactivity, which are themselves causes of disease. The psychosocial vulnerability pathway holds that the disposition generates conflict and drives away the friends and family whose support would otherwise soften the effects of stress.\n\nTo separate the components of the Type A pattern, researchers enrolled 3,000 employed adults aged 40 to 55 who showed no evidence of coronary disease on examination. At enrollment each participant completed two questionnaires. One measured hostility: cynical beliefs about other people’s motives, frequent anger, and a readiness to express it. The other measured time urgency: hurrying, doing several things at once, and impatience with delay. Scores on the two scales were only weakly correlated. Participants also reported their smoking, alcohol use, and physical activity, and their height and weight were measured. Physicians who were unaware of the questionnaire scores reviewed medical records for the next 20 years and recorded each participant’s first coronary event, defined as a heart attack or death from coronary disease.\n\nThe sample was divided into thirds of 1,000 participants each according to hostility score. Figure 1 shows the cumulative percentage of each third that had experienced a coronary event by each five-year point. When the sample was divided instead into thirds according to time-urgency score, the curves for the three groups nearly coincided: by year 20, events had occurred in 10.6% of the highest third and 10.1% of the lowest third, a difference that was not statistically significant.\n\nThe researchers then repeated the hostility analysis with statistical adjustment for smoking, alcohol use, physical activity, and body mass index. The adjustment reduced the excess risk of the highest third relative to the lowest third by roughly two-fifths, but the remaining difference was still statistically significant. The researchers cautioned that hostility had been measured only once and by self-report, and that an observational study of this kind cannot by itself establish that hostility is a cause of coronary disease.',
    chart: {
      title: 'Figure 1. Cumulative incidence of a first coronary event over 20 years, by third of hostility score at enrollment',
      kind: 'line',
      xLabel: 'Time since enrollment',
      yLabel: 'Participants with a coronary event',
      xUnit: 'years',
      yUnit: '%',
      xValues: [0, 5, 10, 15, 20],
      yValues: [0, 2.0, 5.0, 9.0, 14.0],
      seriesLabel: 'Highest third of hostility',
      comparisonSeries: [
        { label: 'Middle third of hostility', yValues: [0, 1.4, 3.6, 6.4, 10.0] },
        { label: 'Lowest third of hostility', yValues: [0, 1.0, 2.5, 4.5, 7.0] },
      ],
    },
    questions: [
      {
        question:
          'Which feature of Figure 1 most strengthens the inference that coronary risk is related to hostility in a graded, dose-dependent way?',
        options: [
          'At each point after enrollment, incidence rises stepwise from lowest to highest third',
          'At enrollment, the cumulative incidence of coronary events is zero in all three thirds',
          'At each successive five-year point, incidence is higher than before in all three thirds',
          'At 20 years, the incidence in the highest third of hostility scores has reached 14%',
        ],
        correctAnswer: 0,
        explanation:
          'A graded relationship means that each increment in the predictor is accompanied by an increment in the outcome, and the middle third lies between the other two at every follow-up point. Zero incidence at enrollment is a consequence of enrolling only people free of coronary disease and says nothing about hostility. Rising incidence over time in every group reflects the accumulation of events as the cohort ages. A single value for one group cannot show a gradient, because a gradient requires comparing groups at different levels of the predictor.',
        skill: '6C data interpretation: dose–response gradient',
      },
      {
        question:
          'Over the 20 years, about how many more participants in the highest third of hostility had a coronary event than would have been expected if that third had experienced the rate of the lowest third?',
        options: ['7', '70', '140', '210'],
        correctAnswer: 1,
        explanation:
          'Each third contains 1,000 participants. The highest third had a 20-year incidence of 14%, or about 140 events; at the lowest third’s incidence of about 7%, only about 70 events would have been expected, leaving an excess of about 70. The figure 7 is the difference in percentage points, not in participants. The figure 140 is the total number of events in the highest third, not the excess. The figure 210 adds the two groups’ events instead of subtracting them.',
        skill: '6C data interpretation: excess events (calculation)',
      },
      {
        question: 'The outcome of the statistical adjustment described in the final paragraph is most consistent with which interpretation?',
        options: [
          'Health behaviors account for all of the association, so hostility itself is harmless',
          'Health behaviors are unrelated to hostility, so the adjustment was not needed',
          'Health behaviors are a result of coronary disease, so the adjustment was misleading',
          'Health behaviors carry part of the association, so at least one other route is at work',
        ],
        correctAnswer: 3,
        explanation:
          'Removing the contribution of smoking, drinking, inactivity, and body mass shrank the excess risk by about two-fifths, which shows that these behaviors convey part of the link, but a significant difference remained, so some other route, such as reactivity or loss of support, or an unmeasured factor, must convey the rest. If health behaviors accounted for the whole association, the adjusted difference would have vanished. If they were unrelated to hostility, adjusting for them would have left the excess risk unchanged. The behaviors were recorded at enrollment in people free of coronary disease, so they cannot be consequences of the events counted later.',
        skill: '6C stress and health: mediation by health behaviors',
      },
      {
        question:
          'A critic argues that the association in Figure 1 may be confounded. Which variable, if left unmeasured, would be a confounder and not a link in one of the three proposed pathways?',
        options: [
          'Blood pressure surges during arguments, which are larger in hostile adults and injure arteries',
          'Loss of close friendships during follow-up, which hostility brings about and which harms health',
          'Childhood poverty, which fosters adult hostility and separately promotes arterial disease',
          'Cigarette smoking in midlife, which hostile adults take up more often and which injures arteries',
        ],
        correctAnswer: 2,
        explanation:
          'A confounder is a prior factor that produces both the supposed cause and the outcome, so that the two are associated even if one does not affect the other; childhood poverty that independently fosters hostility and arterial disease fits that description. Exaggerated blood pressure responses are the reactivity pathway, a route by which hostility itself would do harm. Friendships lost because of hostility are the psychosocial vulnerability pathway. Smoking taken up more often by hostile adults is the health-behavior pathway. Each of these lies between hostility and disease, so it would transmit an effect of hostility instead of creating a spurious one.',
        skill: '6C research design: confounder vs mediator',
      },
      {
        question:
          'Which explanation for the inconsistent results of earlier Type A studies is best supported by the findings in the passage?',
        options: [
          'Earlier studies followed their participants for too few years for coronary events to occur',
          'Earlier studies scored a global pattern in which a harmful element was mixed with a harmless one',
          'Earlier studies enrolled participants who already had coronary disease at the first examination',
          'Earlier studies relied on physicians who knew how each participant’s behavior had been classified',
        ],
        correctAnswer: 1,
        explanation:
          'Hostility predicted coronary events in a graded fashion, whereas time urgency, another defining element of Type A, predicted almost nothing; a global Type A score therefore blends a predictive element with at least one nonpredictive one, and its relation to disease would vary with how heavily hostility happened to weigh in each study’s classification. Nothing in the passage indicates that the earlier studies were short, and Figure 1 shows differences emerging within five years. The passage does not report that earlier studies enrolled people with existing disease or that their physicians knew the classifications, and neither problem would explain why time urgency fails to predict events in the present cohort.',
        skill: '7A Type A pattern: components and prediction',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: drive reduction, optimal
  //    arousal / Yerkes–Dodson, self-determination theory, achievement motivation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Tension, Stimulation, and Psychological Needs: Four Accounts of Motivation',
    passageText:
      'Why do people begin an activity, persist at it, and stop? Drive-reduction theory, the dominant account in the middle of the twentieth century, answered in terms of homeostasis. A physiological need such as a shortage of water or nutrients produces a drive, an unpleasant state of tension that energizes behavior. Any action that reduces the drive is reinforced and so becomes more likely the next time the drive arises. The theory was built largely on studies of hungry and thirsty animals, and on its account the goal of all motivated behavior is to return the organism to a quiet, balanced state.\n\nArousal theory proposed instead that organisms seek not minimal tension but an intermediate level of arousal, and that they act to raise stimulation when it falls below that level as well as to lower it when it rises above. A companion principle, the Yerkes–Dodson law, concerns performance, not preference: performance on a task improves as arousal rises to a certain point and then deteriorates, tracing an inverted U. The point at which performance peaks is not fixed. It lies at a higher level of arousal for simple or thoroughly practiced tasks and at a lower level for difficult or unfamiliar ones.\n\nSelf-determination theory shifts attention from the quantity of motivation to its quality. It proposes three basic psychological needs: autonomy, the experience of acting from one’s own choice; competence, the experience of being effective; and relatedness, the experience of connection with other people. Conditions that satisfy the needs foster intrinsic motivation, in which an activity is performed because it is interesting or enjoyable in itself. Extrinsic motivation, in which an activity is performed for the sake of some separable outcome, is not all of one kind. The theory arranges it along a continuum of internalization. In external regulation, a person acts to obtain a reward or avoid a punishment controlled by others. In introjected regulation, the pressure has moved inside the person but is still experienced as pressure: the person acts to avoid guilt or to protect self-worth. In identified regulation, the person acts because he or she personally endorses the value of the activity, even if the activity is not enjoyable. The more internalized the regulation, the more autonomous the behavior, and the theory predicts that autonomous forms of motivation yield greater persistence and well-being than controlled forms.\n\nTheories of achievement motivation address a narrower question: how people behave when their performance can be judged against a standard of excellence. In one influential model, every such situation arouses both a motive to approach success and a motive to avoid failure, and individuals differ in which motive is stronger. People in whom the motive for success dominates prefer tasks of intermediate difficulty, on which the outcome is uncertain and therefore most informative about their ability. People in whom the motive to avoid failure dominates prefer tasks that are either very easy, on which failure is unlikely, or very hard, on which failure can be attributed to the task and carries no shame.',
    questions: [
      {
        question:
          'A participant’s performance on simple addition problems is highest at a particular level of arousal. According to the Yerkes–Dodson law, at that same level of arousal her performance on unfamiliar, complex puzzles would most likely be:',
        options: [
          'below its peak, and rising as arousal increases still further',
          'at its peak, just as her addition performance is',
          'below its peak, and falling as arousal increases further',
          'the same as her performance at very low arousal',
        ],
        correctAnswer: 2,
        explanation:
          'Performance on difficult, unfamiliar tasks peaks at a lower level of arousal than performance on simple tasks, so the arousal level that is optimal for addition lies beyond the optimum for the puzzles, on the descending limb of their inverted U. Performance that is still rising would require the puzzles’ optimum to lie at a higher arousal level than that of addition, which reverses the law. The two tasks cannot peak at the same level, because the optimum shifts with difficulty. Nothing in the law implies that performance past the peak happens to equal performance at very low arousal.',
        skill: '7A Yerkes–Dodson law (application)',
      },
      {
        question:
          'Volunteers were paid generously to lie on a comfortable bed in a quiet, dimly lit room for as long as they wished, with food, water, and toilet breaks available on request. Most asked to leave within three days, and many had begun whistling, talking to themselves, or tapping on the walls. This outcome is best explained by:',
        options: [
          'drive-reduction theory, because isolation deprived the volunteers of a basic bodily need',
          'achievement motivation, because the task offered no standard against which to succeed',
          'self-determination theory, because payment made their participation externally regulated',
          'arousal theory, because stimulation had fallen below the level the volunteers preferred',
        ],
        correctAnswer: 3,
        explanation:
          'The volunteers’ bodily needs were met, yet they generated stimulation for themselves and then left, which is what an organism seeking an intermediate level of arousal does when stimulation falls too low. Drive-reduction theory predicts contentment once physiological needs are satisfied and cannot explain behavior that increases tension. The achievement model concerns choices among tasks judged against a standard and says nothing about seeking sensory stimulation. External regulation by payment might reduce the quality of motivation, but it would not explain whistling and tapping, which were not rewarded.',
        skill: '7A optimal arousal vs drive reduction',
      },
      {
        question:
          'Two medical students study the same number of hours. The first studies because she would feel ashamed of herself if she fell behind. The second finds the material dull but studies because he considers mastering it essential to the kind of physician he wants to be. According to self-determination theory:',
        options: [
          'both are extrinsically motivated, but the second student’s motivation is the more autonomous',
          'both are extrinsically motivated, and the two students’ motivation is equally controlled',
          'the first is intrinsically motivated, because the pressure she feels comes from within her',
          'the second is intrinsically motivated, because he acts on values that he holds himself',
        ],
        correctAnswer: 0,
        explanation:
          'Neither student studies because the activity is enjoyable in itself, so both are extrinsically motivated; the first acts to avoid shame, which is introjected regulation, and the second acts on a value he endorses, which is identified regulation and lies further along the continuum of internalization. The theory does not treat all extrinsic motivation as equally controlled, which is the point of the continuum. Pressure that originates inside the person is still pressure and does not make the first student’s motivation intrinsic. Acting on personally held values makes the second student’s motivation autonomous but not intrinsic, because he finds the material dull and studies for a separable outcome.',
        skill: '7A self-determination theory: internalization of extrinsic motivation',
      },
      {
        question:
          'Offered a choice among three practice examinations, one that nearly everyone passes, one that about half of students pass, and one that almost no one passes, a student selects the last. When she fails it, she remarks that no one could have passed. In the achievement model described in the passage, her choice suggests that:',
        options: [
          'her motive for success dominates, since she chose the most demanding standard available',
          'her motive to avoid failure dominates, since failing this test reveals little about her',
          'her motive for success dominates, since the outcome of this test was the least certain',
          'her motive to avoid failure dominates, since this test made failing the least likely',
        ],
        correctAnswer: 1,
        explanation:
          'A test that almost no one passes lets failure be blamed on the test, which protects a person who is mainly concerned with avoiding the shame of failing, and her remark shows that she uses it in just this way. A person in whom the motive for success dominates would choose the examination that half of students pass, because that outcome is the most uncertain and the most informative; the nearly impossible test is neither. Its outcome is close to certain, not the least certain of the three. Failure on it is the most likely result, not the least likely, so the appeal of the hard test lies in the excuse it provides and not in a low chance of failing.',
        skill: '7A achievement motivation: task choice',
      },
      {
        question:
          'The need for relatedness described in the passage corresponds most closely to which level of Maslow’s hierarchy of needs?',
        options: ['Safety needs', 'Esteem needs', 'Love and belonging needs', 'Self-actualization needs'],
        correctAnswer: 2,
        explanation:
          'Relatedness is the experience of connection with other people, which matches the third level of Maslow’s hierarchy, the need for affection, acceptance, and membership in groups. Safety needs concern security and protection from harm. Esteem needs concern respect, recognition, and a sense of accomplishment, which resemble the need for competence more than relatedness. Self-actualization is the realization of one’s full potential, the level Maslow placed at the top of the hierarchy.',
        skill: '7A Maslow’s hierarchy of needs',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — information passage: religious organizations (church,
  //     sect, cult), fundamentalism, the secularization debate, cohesion
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Churches, Sects, and the Secularization Debate',
    passageText:
      'Sociologists study religion less as a set of doctrines than as an institution: an organized pattern of beliefs and practices that binds people into communities. Religious organizations are commonly classified by their size, their source of members, and above all their relationship to the surrounding society. A church is a large, bureaucratically organized body with a professional clergy that is well integrated into the wider society and makes few demands that set its members apart. Most of its members are born into it. When a church claims nearly the whole population and is allied with the state, it is called an ecclesia; when it is one of several bodies that accept one another’s legitimacy, it is called a denomination. A sect is a smaller group that has typically broken away from a church in order to restore what its members regard as the original purity of the faith. Sects recruit by conversion, expect intense commitment, rely on lay leaders, and stand in tension with the surrounding society. A cult, or new religious movement, also stands in tension with society, but it is not a breakaway from an established body; it introduces beliefs that are new to the society in which it appears. These categories describe positions along a path as much as fixed types, and groups can move from one to another as their membership and their relations with outsiders change.\n\nFundamentalism cuts across this classification. It refers to movements, found within many traditions, that insist on strict adherence to what are taken to be the founding tenets, usually including a literal reading of sacred texts, and that reject accommodation with the secular world. Although fundamentalists present themselves as defenders of tradition, most sociologists regard fundamentalism as a product of modern conditions.\n\nThe place of religion in modern societies is disputed. The secularization thesis holds that modernization weakens religion. As science offers competing explanations, and as schooling, medicine, and welfare pass from religious bodies to the state and the market, religion loses social significance and becomes a private matter. Proponents point to the long decline of worship attendance in much of western Europe. Critics reply that religion remains vigorous in some highly modern societies and is expanding in much of the world. One alternative, the religious-economies model, treats religious organizations as suppliers that must attract and retain adherents. On this view the level of participation in a society depends less on the demand for religion, which is assumed to be fairly constant, than on the energy of those who supply it, and suppliers that enjoy a protected position have little reason to exert themselves.\n\nSociologists also disagree about what religion does for a society. One classic tradition holds that shared ritual renews the bonds among worshippers and lends moral authority to the group’s rules, so that religion is a principal source of social cohesion. A second holds that religion more often reconciles the disadvantaged to their position by promising compensation in another life. A third observes that religious ideas have sometimes been engines of social transformation and not brakes upon it.',
    questions: [
      {
        question:
          'A congregation was founded 60 years ago by members who left a national church that they believed had abandoned its original teachings. Its early members were all converts, its preachers were untrained volunteers, and its rules of dress set members visibly apart. Today most members were born into it, its ministers hold seminary degrees, the dress rules have lapsed, and it takes part in a council with other religious bodies. This history is best described as that of a:',
        options: [
          'sect that has become a denomination',
          'cult that has become a sect',
          'denomination that has become an ecclesia',
          'church that has become a sect',
        ],
        correctAnswer: 0,
        explanation:
          'A breakaway group of converts with lay leaders and practices that set it apart from society is a sect, and its later membership by birth, professional clergy, relaxed demands, and cooperation with other bodies it treats as legitimate are the marks of a denomination. It did not begin as a cult, because it split from an established church to restore older teachings and did not introduce novel beliefs. It has not become an ecclesia, which would claim nearly the whole population and be allied with the state. A church becoming a sect would involve rising tension with society, the opposite of the direction described.',
        skill: '9B types of religious organizations',
      },
      {
        question: 'Which finding would provide the strongest support for the religious-economies model over the secularization thesis?',
        options: [
          'Worship attendance declines within a country as its average schooling and income rise',
          'Worship attendance is lower among young adults than among their grandparents’ generation',
          'Worship attendance is higher in rural districts than in the largest industrial cities',
          'Worship attendance is higher in rich countries with many rival faiths than in those with one',
        ],
        correctAnswer: 3,
        explanation:
          'The religious-economies model predicts that participation depends on how hard suppliers must work, so among societies that are equally modern, those in which many bodies compete should show more participation than those in which one protected body dominates; the secularization thesis predicts low participation in all of them. Attendance that declines as schooling and income rise is the pattern the secularization thesis expects. Lower attendance among the young than among their grandparents is also consistent with a society growing more secular over time. Higher attendance in rural districts than in industrial cities links religious decline to modernization and again favors the secularization thesis.',
        skill: '9B secularization vs religious-economies model (evidence)',
      },
      {
        question:
          'The passage states that most sociologists regard fundamentalism as a product of modern conditions. The reasoning behind this view is most likely that fundamentalist movements:',
        options: [
          'adopt the scientific outlook of modern societies and apply it to sacred texts',
          'arise in reaction to the challenges that modernization poses to religious authority',
          'recruit mainly among people who have had no previous religious affiliation',
          'appear only in societies in which a state church has lost its legal privileges',
        ],
        correctAnswer: 1,
        explanation:
          'A movement that insists on founding tenets and refuses accommodation with the secular world presupposes a secular world that is pressing on the faith, so fundamentalism is understood as a response to modernization and would have no occasion to arise without it. Fundamentalists read sacred texts literally and resist the scientific outlook; they do not adopt it. The passage places fundamentalism within existing traditions, so its adherents are typically people already affiliated with those traditions. Fundamentalist movements arise in many traditions and settings, not only where a state church has been disestablished.',
        skill: '9B fundamentalism and modernization',
      },
      {
        question: 'The third position described in the final paragraph is most closely associated with which argument?',
        options: [
          'Durkheim’s argument that worshippers revere a symbol of their own society',
          'Marx’s argument that religion dulls the suffering produced by class inequality',
          'Weber’s argument that an ascetic religious ethic fostered the rise of capitalism',
          'Mead’s argument that the self arises from taking the role of the generalized other',
        ],
        correctAnswer: 2,
        explanation:
          'Weber argued that the disciplined, ascetic conduct encouraged by certain Protestant teachings helped bring modern capitalism into being, which makes religious ideas a cause of large-scale social change. Durkheim’s argument that the object of worship represents the society itself belongs to the first position, in which religion is a source of cohesion. Marx’s argument that religion eases the suffering of the disadvantaged belongs to the second position, in which religion reconciles people to inequality. Mead’s account of the generalized other concerns the development of the self through social interaction and is not a theory of religion.',
        skill: '9B religion and social change (Weber)',
      },
    ],
  },
]

export const FL6_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A lesion confined to the sensory relay nuclei of the thalamus would be expected to interfere LEAST with the perception of:',
    options: [
      'a tone played through headphones',
      'a light flashed in one visual field',
      'a pinprick applied to a fingertip',
      'an odor presented at the nostrils',
    ],
    correctAnswer: 3,
    explanation:
      'Olfactory receptor neurons project to the olfactory bulb, which sends its output directly to olfactory cortex and limbic structures without first relaying in the thalamus, so smell would be the sense least affected. Auditory signals reach the cortex by way of the medial geniculate nucleus of the thalamus. Visual signals relay in the lateral geniculate nucleus. Pain and touch signals from the hand relay in the ventral posterior nucleus before reaching somatosensory cortex.',
    skill: '6A olfactory pathway and the thalamus',
  },
  {
    id: 'fl6-ps-b-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'On a rehabilitation unit, patients earn plastic tokens for completing their exercises and exchange the tokens each evening for snacks and television time. The tokens would lose their power to reinforce exercise most quickly if:',
    options: [
      'they could no longer be exchanged for anything',
      'they were handed out after every exercise session',
      'they were replaced by paper slips of the same value',
      'they were exchanged each morning and not each evening',
    ],
    correctAnswer: 0,
    explanation:
      'Tokens are secondary (conditioned) reinforcers: they have no value of their own and reinforce behavior only because they have been associated with primary reinforcers such as food, so breaking that association extinguishes their effect. Delivering a token after every session is continuous reinforcement, which maintains the behavior as long as the tokens keep their value. Paper slips that buy the same goods would acquire the same conditioned value as the plastic tokens. Moving the exchange from evening to morning changes the delay only slightly and leaves the association with the backup reinforcers intact.',
    skill: '7A primary vs secondary reinforcers',
  },
  {
    id: 'fl6-ps-b-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Replacing the first sound of the spoken word “bat” yields “pat,” and adding “-s” to “bat” yields “bats.” The first change alters the smallest unit of sound that can distinguish one word from another, and the second adds the smallest unit that carries meaning. These units are, respectively:',
    options: [
      'a morpheme and a phoneme',
      'a phoneme and a morpheme',
      'a phoneme and a rule of syntax',
      'a morpheme and a rule of syntax',
    ],
    correctAnswer: 1,
    explanation:
      'A phoneme is the smallest unit of sound that distinguishes one word from another, as the first sounds of “bat” and “pat” do, and a morpheme is the smallest unit that carries meaning, as the plural ending does. Reversing the two terms assigns meaning to a single consonant sound and treats the plural ending as a mere sound. Syntax concerns the rules for ordering words into phrases and sentences, and no change in word order occurs in either example.',
    skill: '6B language: phonemes vs morphemes',
  },
  {
    id: 'fl6-ps-b-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A patient cannot be roused after a small stroke, although imaging shows that both cerebral hemispheres are structurally intact. The stroke most likely damaged the:',
    options: ['cerebellum', 'substantia nigra', 'reticular formation', 'hippocampus'],
    correctAnswer: 2,
    explanation:
      'The reticular formation is a network of neurons in the core of the brainstem whose ascending projections maintain cortical arousal and wakefulness; damage to it can produce coma even when the cortex itself is undamaged. Cerebellar damage impairs coordination and balance without abolishing consciousness. Loss of the dopamine neurons of the substantia nigra impairs the initiation of movement, as in Parkinson disease. Hippocampal damage impairs the formation of new memories in a person who remains awake and alert.',
    skill: '6A reticular formation and arousal',
  },
  {
    id: 'fl6-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Which finding would be the most direct evidence that the allocation of occupations in a society is NOT meritocratic?',
    options: [
      'Incomes in the highest-paid occupations are many times those in the lowest-paid',
      'Most holders of the highest-paid positions have completed advanced degrees',
      'Adults in the highest-paid occupations report working the longest weekly hours',
      'Among adults with equal schooling and test scores, those from richer families earn more',
    ],
    correctAnswer: 3,
    explanation:
      'A meritocracy allocates positions by ability and effort, so people of equal measured merit should fare equally whatever their origins; an advantage for those from richer families among adults with identical schooling and test scores shows that family background is being rewarded directly and that mobility is limited by origin. Large differences in income describe the degree of inequality, which a meritocracy can tolerate so long as positions are open to talent. High credentials among top earners and long hours among them are both what a system rewarding ability and effort would be expected to produce.',
    skill: '10A meritocracy and social mobility',
  },
  {
    id: 'fl6-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Three friends share an apartment. One moves out, and the other two continue to share it. According to Simmel’s analysis of group size, the household has become:',
    options: [
      'more stable and more intimate',
      'less stable but more intimate',
      'more stable but less intimate',
      'less stable and less intimate',
    ],
    correctAnswer: 1,
    explanation:
      'A dyad is the most intimate group because each member deals only with the other, but it is also the most fragile, because it ceases to exist if either member withdraws. A triad is more stable: it survives the loss of one member, and a third party can mediate disputes, though coalitions of two against one reduce intimacy. Moving from three members to two therefore increases intimacy while decreasing stability, which rules out each of the other combinations.',
    skill: '9A group size: dyads and triads',
  },
  {
    id: 'fl6-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a farming village, married sons bring their wives to live in the father’s household, and three generations pool their labor and income. After a factory opens in a distant city, young couples move there and set up households consisting only of themselves and their children. The change in family form is from:',
    options: [
      'extended to nuclear, as wage work favors small households that can relocate',
      'nuclear to extended, as wage work requires several adult earners to pool their pay',
      'extended to blended, as migration merges families that were previously unrelated',
      'nuclear to single-parent, as migration separates husbands from wives and children',
    ],
    correctAnswer: 0,
    explanation:
      'A household of three generations pooling resources is an extended family, and a couple living only with their children is a nuclear family; industrial wage work, which is paid to individuals and requires moving to where the jobs are, favors the smaller unit. The change runs from extended to nuclear, not the reverse, and the new households pool less income across kin, not more. A blended family is formed when partners bring children from earlier unions, which is not described. The couples move together with their children, so the households are not single-parent families.',
    skill: '9B family forms: nuclear vs extended',
  },
]
