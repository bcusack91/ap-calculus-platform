/**
 * MCAT Full-Length Form 5 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1–4 (fl1- … fl4-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL5_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — experiment, table: teratogen timing (sensitive
  //    periods), motor milestones, a prospective birth cohort
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Timing of Prenatal Alcohol Exposure in a Birth Cohort',
    passageText:
      'Prenatal development is divided into the germinal period (conception through implantation, about two weeks), the embryonic period (weeks 3 through 8), during which the major organ systems form, and the fetal period (week 9 to birth), during which existing structures grow and mature. A teratogen is any environmental agent that can disturb development; alcohol, tobacco smoke, certain prescription drugs, maternal infections such as rubella, and radiation are examples. Three principles govern teratogenic effects. First, timing: an agent produces structural malformations mainly when it acts during the sensitive period in which the affected organ is forming, whereas later exposure to the same agent tends to impair growth or function instead. Second, dose: effects generally increase with the amount and duration of exposure. Third, individual susceptibility: the same exposure harms some embryos more than others, partly because of genetic differences in how mother and fetus metabolize the agent. The central nervous system is unusual in that it continues to form new cells and connections throughout gestation and after birth, so its window of vulnerability is long.\n\nMotor development after birth follows two reliable gradients. Control proceeds cephalocaudally, from the head downward: infants hold up the head before they sit, sit before they stand, and stand before they walk. Control also proceeds proximodistally, from the center of the body outward: reaching with the whole arm precedes grasping with the fingers. Primitive reflexes such as rooting, grasping, and stepping are present at birth and disappear during the first months as cortical control matures. Typical infants sit without support at about 6 months, crawl at about 8 to 9 months, and walk alone at about 12 months, but normal variation is wide, and walking anywhere between 9 and 15 months is considered ordinary. Experience and opportunity affect the timing of milestones more than their order.\n\nResearchers followed 2,000 women enrolled during the first trimester and asked them at each prenatal visit about their alcohol use. Four groups were formed. Women in the first-trimester-only group drank during the early weeks of pregnancy but stopped by week 8, usually when the pregnancy was recognized. Women in the third-trimester-only group reported no alcohol until week 28 and drank afterward. Women in the throughout group drank at similar levels in all three trimesters. Average daily intake among the drinkers was similar in the three exposed groups. Examiners who did not know the mothers’ drinking histories assessed each child at birth for the facial anomalies characteristic of prenatal alcohol exposure, recorded birth weight, documented the age at which the child first walked alone, and at age 4 administered a standardized attention test scaled so that the population mean is 100. Results appear in Table 1.\n\nThe exposed mothers were on average younger, more likely to smoke, and less likely to have attended all scheduled prenatal visits than the unexposed mothers. The researchers reported the group results before and after statistically adjusting for these differences; the adjusted differences were smaller but followed the same pattern.',
    figure:
      '**Table 1. Outcomes by timing of prenatal alcohol exposure**\n\n| Group | n | Facial anomalies (%) | Birth weight below 2,500 g (%) | Mean age at walking alone (months) | Mean attention score at age 4 |\n|---|---|---|---|---|---|\n| No alcohol | 1,200 | 1.0 | 6 | 12.1 | 100 |\n| First trimester only | 500 | 4.8 | 7 | 12.2 | 97 |\n| Third trimester only | 100 | 1.1 | 14 | 12.4 | 93 |\n| Throughout | 200 | 5.0 | 16 | 12.9 | 90 |',
    questions: [
      {
        question: 'Which conclusion about the timing of exposure is best supported by Table 1?',
        options: [
          'Facial anomalies and low birth weight both depend on exposure during the third trimester',
          'Facial anomalies depend on early exposure, whereas low birth weight depends on late exposure',
          'Facial anomalies and low birth weight both require exposure that continues through gestation',
          'Facial anomalies depend on late exposure, whereas low birth weight depends on early exposure',
        ],
        correctAnswer: 1,
        explanation:
          'The first-trimester-only group shows nearly the full rate of facial anomalies (4.8% versus 5.0% for exposure throughout) with an almost normal rate of low birth weight, whereas the third-trimester-only group shows the reverse: a baseline rate of anomalies but a doubled rate of low birth weight. Facial structures form during the embryonic period, so early exposure produces malformations; late exposure acts on a fetus whose structures are already formed and impairs growth instead. Neither outcome requires continuous exposure, since each appears at nearly full strength in a single-trimester group. The remaining pairing reverses the direction of both effects.',
        skill: '7A teratogens: sensitive periods',
      },
      {
        question:
          'The researchers’ decision to report results after adjusting for maternal age, smoking, and prenatal care was intended to address which concern?',
        options: [
          'That examiners who knew the drinking histories might have rated exposed infants more harshly',
          'That the number of women in the third-trimester-only group was too small to detect an effect',
          'That mothers who drank may have underreported their intake at their prenatal visits',
          'That characteristics of the mothers other than drinking could account for the children’s outcomes',
        ],
        correctAnswer: 3,
        explanation:
          'Because the exposed mothers differed from the unexposed mothers in age, smoking, and prenatal care, any of those variables could produce the observed outcomes independently of alcohol; adjusting for them is the standard way to address such confounding in an observational cohort. Examiner bias was handled separately by keeping the examiners unaware of exposure status. A small group size is a question of statistical power, which adjustment cannot fix. Underreporting is a measurement problem in the exposure variable, and adjusting for other maternal characteristics does nothing to correct it.',
        skill: '7A research design: confounding',
      },
      {
        question: 'Which statement about sensitive periods is most consistent with the attention scores in Table 1?',
        options: [
          'The nervous system stays vulnerable throughout gestation, so any exposure lowers scores and longer exposure lowers them further',
          'Attention is impaired only by exposure after week 28, because the brain’s period of most rapid growth begins in the third trimester',
          'The lower scores are a consequence of low birth weight rather than alcohol, because the groups with more small infants scored lower',
          'The sensitive period for attention closes by week 8, which is why the first-trimester-only group shows the largest deficit of all',
        ],
        correctAnswer: 0,
        explanation:
          'Every exposed group scores below the unexposed group, including the group exposed only before week 8 and the group exposed only after week 28, and the group exposed throughout scores lowest; that pattern is what a long window of vulnerability with a dose-duration effect predicts. Exposure confined to the first trimester lowered scores, so the effect is not limited to late exposure. The first-trimester-only group had a nearly normal rate of low birth weight yet still scored below the unexposed group, so birth weight cannot be the explanation. The first-trimester-only group shows the smallest deficit, not the largest, so the window does not close at week 8.',
        skill: '7A prenatal development: CNS vulnerability',
      },
      {
        question:
          'Infants in all four groups passed motor milestones in the same order even though mean ages differed slightly. This pattern is best explained by the principle that:',
        options: [
          'maturation of neural control proceeds from the head downward, so the order is fixed while the timing varies',
          'infants acquire each skill by imitating caregivers, who demonstrate the skills in the same order everywhere',
          'primitive reflexes such as stepping must disappear in a fixed order before each new skill can appear',
          'each milestone opens a critical period that closes only once the next skill has been fully practiced',
        ],
        correctAnswer: 0,
        explanation:
          'Gross motor control depends on cephalocaudal maturation of the nervous system: head control precedes sitting, which precedes standing and walking, so the sequence is invariant even when environmental factors shift the ages at which steps are reached. Infants do not learn to sit or walk by imitation, and caregivers do not teach these skills in a scripted order. Primitive reflexes fade as cortical control matures, but their disappearance is not a gate that must open in sequence before each milestone. Milestones are not critical periods, and a skill such as walking does not require the previous skill to be practiced to completion.',
        skill: '7A motor development: cephalocaudal principle',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — repeated cross-sections, chart: smoking prevalence by
  //    education 1980–2020; fundamental cause theory; composition effects
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Cigarette Smoking and Schooling Across Four Decades',
    passageText:
      'Social epidemiology studies how the distribution of health and disease follows the organization of society. One of its most consistent findings is a social gradient: at each step up a hierarchy of education, income, or occupational rank, people live longer and suffer less illness. Gradients are observed for many conditions, which has led some sociologists to argue that socioeconomic status is a fundamental cause of disease. On this view, what matters is not any single pathway but a set of flexible resources, including money, knowledge, power, prestige, and beneficial social connections, that can be used to avoid whatever risks are known at a given time and to adopt whatever protective strategies are available. Because the resources are flexible, the gradient persists even as the diseases and risk factors of an era change. A testable implication is that gradients should be steepest for conditions people know how to prevent and shallowest for conditions that no one knows how to prevent, since resources confer little advantage when there is nothing to act upon.\n\nCigarette smoking offers a historical test. Early in the twentieth century smoking was more common among the affluent, and in 1960 the prevalence of smoking varied little by education. The decades that followed brought scientific consensus on the harms of smoking, warning labels, restrictions on advertising, workplace and restaurant bans, rising taxes, and the arrival of cessation aids such as nicotine replacement and prescription medications. Surveys indicate that by 1990 more than 90% of adults in every educational group agreed that smoking causes cancer and heart disease.\n\nResearchers analyzed a national health survey that draws an independent random sample of roughly 30,000 adults each year. Respondents aged 25 to 64 were classified by the highest level of schooling completed and asked whether they currently smoked cigarettes. Figure 1 shows the prevalence of current smoking at ten-year intervals for three educational groups. Over the same period, the share of adults aged 25 to 64 without a high school diploma fell from 30% to 9%, while the share with a four-year college degree rose from 15% to 38%. Among respondents who had ever smoked, the proportion who had quit rose in every group, but it rose fastest among college graduates. The researchers also observed that the price of cigarettes, adjusted for inflation, more than doubled between 1990 and 2010, a period in which prevalence fell in every education group but by very different amounts.\n\nThe researchers interpreted the overall pattern as evidence for the fundamental cause account. They acknowledged, however, that the survey measures education only at the time of the interview, that respondents who leave school early are also more likely than others to be unemployed, to live in poorer neighborhoods, and to report psychological distress, and that the meaning of belonging to any particular educational category may itself change as the category grows or shrinks.',
    chart: {
      title: 'Figure 1. Prevalence of current cigarette smoking among adults aged 25–64, by highest level of education, 1980–2020',
      kind: 'line',
      xLabel: 'Survey year',
      yLabel: 'Current smokers',
      yUnit: '%',
      xValues: [1980, 1990, 2000, 2010, 2020],
      yValues: [42, 38, 36, 33, 30],
      seriesLabel: 'Less than high school',
      comparisonSeries: [
        { label: 'High school diploma or some college', yValues: [36, 31, 27, 23, 19] },
        { label: 'Four-year college degree or more', yValues: [28, 20, 14, 9, 5] },
      ],
    },
    questions: [
      {
        question:
          'Between 1980 and 2020, how did the difference in smoking prevalence between adults without a high school diploma and adults with a college degree change?',
        options: [
          'The absolute difference grew, but the ratio of the two prevalences fell',
          'The absolute difference shrank, but the ratio of the two prevalences grew',
          'Both the absolute difference and the ratio of the two prevalences grew',
          'Both the absolute difference and the ratio of the two prevalences shrank',
        ],
        correctAnswer: 2,
        explanation:
          'In 1980 the two groups were at 42% and 28%, an absolute gap of 14 percentage points and a ratio of 1.5; in 2020 they were at 30% and 5%, a gap of 25 points and a ratio of 6. Both measures of inequality therefore increased. The ratio could not have fallen while the absolute gap grew, because the lower prevalence shrank far faster than the higher one. The absolute gap did not shrink, since prevalence fell by 12 points in the least-educated group and by 23 points in the most-educated group.',
        skill: '10A health disparities: absolute vs relative measures',
      },
      {
        question: 'According to the fundamental cause account, the widening gap in Figure 1 occurred mainly because:',
        options: [
          'adults with less schooling remained unaware that smoking harms health long after college graduates had learned of it',
          'adults with more schooling had the money, information, and connections to act first on new ways of avoiding a known risk',
          'adults with less schooling are biologically more susceptible to nicotine dependence once they begin to smoke regularly',
          'adults with more schooling were exposed to fewer cigarette advertisements because they lived in different neighborhoods',
        ],
        correctAnswer: 1,
        explanation:
          'The theory holds that flexible resources let advantaged groups take up each new means of protection, such as cessation aids, smoke-free workplaces, and medical advice, as it becomes available, so once smoking became a known and avoidable risk their prevalence fell first and fastest. Simple lack of awareness cannot explain the gap, because the passage reports that by 1990 more than 90% of every educational group accepted that smoking causes disease. The theory concerns social resources, not biological susceptibility, and the gradient reversed direction over the century, which a fixed biological difference could not produce. Advertising exposure is one possible pathway, but the theory emphasizes that the gradient does not depend on any single pathway.',
        skill: '10A fundamental cause theory',
      },
      {
        question:
          'The change in the share of adults without a high school diploma between 1980 and 2020 complicates the interpretation of Figure 1 because:',
        options: [
          'the group became too small to survey reliably, so its prevalence estimates for recent years are unstable guesses',
          'those who left school early in 2020 were younger on average than in 1980, and younger adults in general smoke less',
          'educational categories came to measure income instead of schooling, so the later gradient reflects wealth alone',
          'the group that remains is more selected on other disadvantages, so part of the widening reflects changed composition',
        ],
        correctAnswer: 3,
        explanation:
          'When a category shrinks from 30% to 9% of the population, the people who remain in it are increasingly those with additional disadvantages, such as the unemployment, poor neighborhoods, and distress the researchers mention, so the later gap compares a more selected group with a less selected one, and some of the widening reflects that change in composition rather than a growing effect of schooling itself. Nine percent of a 30,000-person sample is still about 2,700 respondents, enough for a stable estimate. The age range was fixed at 25 to 64 in every survey year, and nothing in the passage suggests that early leavers became younger. The categories continued to be defined by schooling completed, not by income.',
        skill: '9B research design: composition and selection effects',
      },
      {
        question: 'Which additional finding would most weaken the fundamental cause interpretation of Figure 1?',
        options: [
          'Educational gradients in death rates are as steep for causes with no known means of prevention as for highly preventable ones',
          'College graduates were the first educational group to adopt nicotine replacement therapy once it became available',
          'Smoking prevalence fell in all educational groups after restaurant and workplace smoking bans took effect',
          'The educational gradient in smoking was largely absent before the health consequences of smoking became widely known',
        ],
        correctAnswer: 0,
        explanation:
          'The passage identifies a testable implication of the theory: because flexible resources help only when there is something to act upon, gradients should be steeper for preventable conditions than for conditions no one knows how to prevent. Equal gradients for the two kinds of conditions would contradict that prediction. Early adoption of cessation aids by the most-educated group is exactly the mechanism the theory proposes. A decline in all groups after smoking bans says nothing about the gap and is compatible with the theory. The absence of a gradient before the risks were known is also what the theory predicts, since resources could not yet be deployed against an unrecognized risk.',
        skill: '9B evaluating a theory with evidence',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PERSONALITY/DISORDERS — information passage: tolerance mechanisms,
  //    withdrawal, dependence vs addiction, DSM criteria logic, biopsychosocial
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Tolerance, Withdrawal, and the Logic of a Diagnosis',
    passageText:
      'A substance use disorder is a pattern of use that continues despite significant problems. Clinicians distinguish several phenomena that are often confused. Tolerance is a reduced response to a given dose after repeated exposure, so that a larger dose is needed to produce the original effect. Tolerance can arise from several mechanisms. Metabolic tolerance develops when the liver induces enzymes that clear the drug faster. Pharmacodynamic tolerance develops when target neurons adapt, for example by reducing the number or sensitivity of their receptors. Conditioned tolerance develops when the body learns to prepare for the drug: cues that reliably precede drug taking come to elicit compensatory physiological responses opposite to the drug’s effects, which blunt the drug’s impact in the usual setting. Withdrawal is a set of symptoms that appears when use of a drug stops or is sharply reduced, and its symptoms are generally opposite to the drug’s acute effects. Together, tolerance and withdrawal define physiological dependence.\n\nPhysiological dependence is not the same as addiction, which is characterized by compulsive use and loss of control. A patient who takes opioids for cancer pain for several months will usually develop tolerance and will experience withdrawal if the drug is stopped abruptly, yet most such patients have no craving and no difficulty stopping once the drug is tapered. Conversely, some drugs that produce only mild physical withdrawal, cocaine among them, nevertheless produce profoundly compulsive patterns of use.\n\nThe current diagnostic manual reflects this distinction. A substance use disorder is diagnosed when at least 2 of 11 criteria are met within a 12-month period. The criteria fall into four clusters: impaired control (using more or for longer than intended, unsuccessful efforts to cut down, much time spent obtaining or recovering from the substance, craving); social impairment (failure to meet obligations at work, school, or home, continued use despite relationship problems, giving up important activities); risky use (use in physically hazardous situations, continued use despite a physical or psychological problem the substance causes); and pharmacological criteria (tolerance and withdrawal). Severity is graded by the number of criteria met: 2 or 3 is mild, 4 or 5 is moderate, and 6 or more is severe. Tolerance and withdrawal are not counted toward the diagnosis when the substance is taken as prescribed under medical supervision.\n\nExplanations of why some people who try a substance develop a disorder and others do not generally adopt a biopsychosocial model. Biological contributions include inherited differences in drug metabolism and in reward circuitry; twin studies attribute roughly half of the variation in risk to genetic factors. For alcohol, people who carry a less active variant of the enzyme aldehyde dehydrogenase accumulate acetaldehyde when they drink, experience flushing and nausea, and have markedly lower rates of alcohol use disorder. Psychological contributions include expectancies about what the substance will do, use to relieve negative emotional states, and co-occurring conditions such as depression and anxiety. Social contributions include availability and price, the norms of peer groups and workplaces, and chronic stressors such as poverty. These influences interact: a biological protection can be overridden by strong social pressure to drink, and a genetic vulnerability may never be expressed in an environment where the substance is unavailable. Treatment likewise spans levels: medications that substitute for, block, or punish use of the drug; behavioral treatments that teach coping skills or reward abstinence; and mutual-help groups that change a person’s social network.',
    questions: [
      {
        question:
          'A woman took prescribed oxycodone exactly as directed for 6 weeks after spinal surgery. By the third week she needed a higher dose to control her pain, and when her physician tapered the drug she had two days of sweating, cramps, and insomnia. She reports no craving and no other problems related to the drug. According to the diagnostic logic described in the passage, she meets criteria for:',
        options: [
          'mild opioid use disorder',
          'moderate opioid use disorder',
          'severe opioid use disorder',
          'no opioid use disorder',
        ],
        correctAnswer: 3,
        explanation:
          'She shows tolerance and withdrawal, but both occurred while she took the drug as prescribed under medical supervision, and the passage states that in that case neither counts toward the diagnosis; with no other criteria met, she has zero countable criteria and no disorder. A mild disorder would require at least 2 countable criteria, so even counting one pharmacological criterion would not suffice. Moderate and severe disorders require 4 or more and 6 or more criteria, far beyond anything in her history. Her physiological dependence is real but, as the passage emphasizes, it is not the same as a use disorder.',
        skill: '6C substance use disorder: diagnostic criteria',
      },
      {
        question:
          'A man who has consumed large amounts of alcohol daily for years stops abruptly. Based on the passage’s account of withdrawal, which set of symptoms is most likely during the following two days?',
        options: [
          'Tremor, agitation, insomnia, and risk of seizures',
          'Drowsiness, slowed breathing, and constricted pupils',
          'Fatigue, increased sleep, and depressed mood',
          'Euphoria, reduced appetite, and rapid speech',
        ],
        correctAnswer: 0,
        explanation:
          'Alcohol is a central nervous system depressant, and withdrawal symptoms are generally opposite to a drug’s acute effects, so abrupt cessation after heavy chronic use produces nervous system overactivity: tremor, agitation, insomnia, and in severe cases seizures. Drowsiness, slowed breathing, and constricted pupils describe intoxication with a depressant such as an opioid, not withdrawal from one. Fatigue, hypersomnia, and depressed mood are the opposite of a stimulant’s effects and characterize withdrawal from drugs such as cocaine or amphetamine. Euphoria, reduced appetite, and rapid speech describe stimulant intoxication.',
        skill: '6C withdrawal from depressants',
      },
      {
        question:
          'A man with a long history of heroin use injects his usual dose in a hotel room while traveling and suffers a life-threatening overdose, although the same dose had been well tolerated at home for months. The mechanism described in the passage that best accounts for this outcome is that:',
        options: [
          'metabolic tolerance was lost during the trip because the liver enzymes that clear heroin returned to baseline within hours',
          'the stress of travel sensitized his reward circuitry, which amplified the drug’s suppressive effect on his breathing',
          'the unfamiliar setting lacked the cues that usually trigger compensatory responses, so the dose acted at full strength',
          'the hotel room contained cues previously paired with withdrawal, which triggered craving that led him to use more than usual',
        ],
        correctAnswer: 2,
        explanation:
          'Conditioned tolerance is tied to the cues that normally precede drug taking: at home those cues elicit compensatory responses that oppose the drug, but in a novel setting the cues are absent, the compensatory responses do not occur, and a dose that was safe at home becomes dangerous. Induced liver enzymes do not revert to baseline within hours, and metabolic tolerance is not setting-specific. Sensitization of reward circuitry concerns the drug’s rewarding effects, not respiratory depression, and nothing in the passage ties it to travel. The question specifies that he used his usual dose, so an increase driven by craving is ruled out.',
        skill: '7A conditioned tolerance',
      },
      {
        question: 'Which of the following individuals best illustrates addiction in the absence of physiological dependence?',
        options: [
          'A hospice patient who requires steadily rising doses of morphine and who would suffer withdrawal if the drug were stopped',
          'A stockbroker who keeps using cocaine despite losing his job and failed attempts to quit, with little discomfort when abstaining',
          'A college student who drinks heavily at weekend parties, has been hungover several times, and drinks nothing on weekdays',
          'A nurse who develops nausea and headaches whenever she skips her morning coffee but who could stop drinking it without difficulty',
        ],
        correctAnswer: 1,
        explanation:
          'Compulsive use that continues despite serious consequences, together with repeated failed efforts to stop, is the signature of addiction, and the passage notes that cocaine produces only mild physical withdrawal, so this man is addicted without being physiologically dependent. The hospice patient shows the reverse: tolerance and withdrawal without compulsion. The student’s weekend drinking involves neither compulsion nor evidence of dependence; hangovers are acute aftereffects, not withdrawal from chronic use. The nurse has withdrawal symptoms, which is physiological dependence, but no loss of control.',
        skill: '6C dependence vs addiction',
      },
      {
        question:
          'In a country where heavy drinking at work gatherings is expected, the rate of alcohol use disorder among carriers of the less active aldehyde dehydrogenase variant is considerably higher than among carriers in countries without this expectation. In terms of the model described in the passage, this finding is best interpreted as:',
        options: [
          'a genetic main effect: the variant raises the risk of the disorder regardless of social context',
          'social selection: people who carry the variant migrate toward settings where heavy drinking is required',
          'a gene–environment interaction: social norms weaken a biological protection against the disorder',
          'self-medication: carriers drink in order to relieve the flushing and nausea the variant causes',
        ],
        correctAnswer: 2,
        explanation:
          'The variant ordinarily protects against the disorder, and its protective effect shrinks where norms press people to drink heavily, which is exactly the passage’s statement that a biological protection can be overridden by social pressure: the effect of the gene depends on the environment. The variant lowers rather than raises risk, and the finding shows that its effect does vary with context. Nothing suggests that carriers move toward heavy-drinking settings; the norms are a feature of the country, not a destination chosen by carriers. Flushing and nausea are caused by drinking, so drinking more would worsen them, not relieve them.',
        skill: '6C biopsychosocial model: gene–environment interaction',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: explicit vs implicit attitudes,
  //    IAT logic and reliability, attitude–behavior consistency, planned behavior
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Two Kinds of Attitude and When Either Predicts Behavior',
    passageText:
      'An attitude is a relatively enduring evaluation of a person, object, or idea. Social psychologists commonly describe attitudes as having affective, behavioral, and cognitive components: how one feels about the object, how one is disposed to act toward it, and what one believes about it. For most of the twentieth century attitudes were measured by asking. Respondents rated their agreement with statements, placed objects on scales anchored by opposing adjectives, or ranked alternatives. Such explicit measures capture attitudes that people are aware of and willing to report. They are vulnerable to social desirability bias, the tendency to answer in ways that will be viewed favorably, which is most pronounced for sensitive topics and for responses given in person.\n\nBeginning in the 1990s, researchers developed implicit measures intended to tap evaluations that are automatic, fast, and not necessarily open to introspection. The most widely used is the Implicit Association Test (IAT). A participant sorts stimuli as quickly as possible using two response keys. In one block, one key is assigned both to a target category (for example, exercise) and to the attribute pleasant, while the other key is assigned to a contrasting category (television) and to unpleasant; in another block the pairings are reversed. The difference in average response time between the two blocks is taken as an index of the strength of association between the target and the attribute, on the logic that sorting is faster when a shared key matches an existing association. Implicit and explicit measures of the same attitude typically correlate only modestly, and the two often disagree, especially for socially sensitive attitudes. A frequently reported limitation is that an individual’s IAT score varies considerably from one occasion to another; test–retest correlations are near 0.5, well below those of good explicit scales, although average scores for groups are quite stable.\n\nWhether an attitude predicts behavior depends on which attitude, which behavior, and which measure. Explicit attitudes predict deliberate, controllable behaviors better, whereas implicit measures better predict spontaneous behaviors such as nonverbal signs of warmth, seating distance, and speed of approach. In a classic study from the 1930s, a researcher traveled across the United States with a young, well-dressed Chinese couple and recorded that all but one of the roughly 250 hotels and restaurants they visited served them. Six months later he wrote to the same establishments asking whether they would accept Chinese guests, and more than 90% of those who replied said they would not. Later work identified conditions under which attitudes and behavior correspond more closely: the attitude and the behavior are measured at the same level of specificity; the attitude is strong, accessible, and based on direct experience; and situational pressures on the behavior are weak.\n\nThe theory of planned behavior formalizes the link. The most immediate predictor of a deliberate behavior is the intention to perform it, and intention in turn depends on three factors: the person’s attitude toward the behavior itself, subjective norms (perceived pressure from important others to perform or not perform the behavior), and perceived behavioral control (the person’s belief about how easy or difficult the behavior would be). Perceived control also influences behavior directly, because people who believe they lack control over a behavior rarely attempt it, and because such beliefs often track real obstacles. The theory accounts well for intentions, but intentions translate into action imperfectly: the intention–behavior gap is largest when a behavior must be repeated over long periods or when it competes with established habits.',
    questions: [
      {
        question:
          'A hospital wants to identify staff members who, when caring for patients with a stigmatized illness, will stand farther away and make less eye contact than usual. Based on the passage, the measure most likely to predict this behavior is:',
        options: [
          'a questionnaire on which staff rate their agreement with statements about the illness',
          'an IAT pairing the illness with pleasant and unpleasant words',
          'a face-to-face interview about staff members’ beliefs regarding the illness',
          'a scale on which staff rate their intention to care for such patients',
        ],
        correctAnswer: 1,
        explanation:
          'Interpersonal distance and eye contact are spontaneous, nonverbal behaviors, which the passage says implicit measures predict better than explicit ones, and the illness is a sensitive topic on which explicit and implicit measures tend to diverge. An agreement questionnaire is an explicit measure that predicts deliberate behavior better than spontaneous behavior. A face-to-face interview is also explicit and, being given in person on a sensitive topic, is especially exposed to social desirability bias. Intention is the proximal predictor of deliberate behavior in the theory of planned behavior, not of unintended nonverbal behavior.',
        skill: '7B implicit vs explicit attitudes and behavior',
      },
      {
        question:
          'A nurse rates hand hygiene as extremely important, reports that her supervisors and colleagues expect it, and sincerely intends to clean her hands before every patient contact, yet observation shows that she does so about half the time, usually skipping it when the ward is busy. According to the theory of planned behavior, which factor best explains the gap?',
        options: [
          'Her attitude toward hand hygiene is weaker than her self-report would suggest',
          'The subjective norm on her ward in fact favors skipping hand hygiene when busy',
          'Intention does not predict this behavior because hand hygiene is not deliberate',
          'Situational demands limit her perceived and actual control over the behavior',
        ],
        correctAnswer: 3,
        explanation:
          'Her attitude, subjective norm, and intention are all favorable, so the component that remains is behavioral control: when the ward is busy, real obstacles make the behavior harder, and the theory holds that control affects behavior directly as well as through intention. Nothing in the scenario indicates that her attitude is weaker than reported; the gap appears specifically under time pressure. Her supervisors and colleagues expect hand hygiene, so the norm favors the behavior. Hand hygiene is a deliberate, controllable act, precisely the kind of behavior the theory is built to explain.',
        skill: '7B theory of planned behavior',
      },
      {
        question:
          'A participant completes an IAT on exercise as described in the passage. His average response time is 650 ms in the block pairing exercise with pleasant and 900 ms in the block pairing exercise with unpleasant. On a questionnaire he strongly agrees that he dislikes exercising. This pattern is best described as:',
        options: [
          'a positive implicit attitude that diverges from a negative explicit attitude',
          'a negative implicit attitude that agrees with a negative explicit attitude',
          'a negative implicit attitude that diverges from a positive explicit attitude',
          'a positive implicit attitude that agrees with a positive explicit attitude',
        ],
        correctAnswer: 0,
        explanation:
          'Sorting is faster when a shared key matches an existing association, and he was 250 ms faster when exercise shared a key with pleasant, so his implicit attitude toward exercise is positive; his questionnaire response is explicitly negative, so the two measures disagree. Reading the faster block as a negative association reverses the logic of the test. His explicit attitude is negative, not positive, so the two descriptions that call it positive misread the questionnaire.',
        skill: '7B interpreting an Implicit Association Test',
      },
      {
        question:
          'A city wants to use a survey to predict which households will put glass in their recycling bins each week over the coming year. According to the passage, the best predictor would be the residents’ attitudes toward:',
        options: [
          'protecting the natural environment for future generations',
          'the performance of the city’s waste management department',
          'placing glass in their own recycling bin each week',
          'the importance of civic participation by ordinary residents',
        ],
        correctAnswer: 2,
        explanation:
          'Attitudes predict behavior best when both are measured at the same level of specificity, so an attitude toward the exact behavior in question, placing glass in one’s own bin each week, is the strongest predictor of that behavior. A general attitude toward the environment is far broader than the behavior and corresponds to it only loosely. An attitude toward the waste department concerns an organization rather than the behavior. Civic participation in general is likewise too broad, and the theory of planned behavior specifies that it is attitude toward the behavior itself that feeds into intention.',
        skill: '7B attitude–behavior specificity',
      },
      {
        question:
          'Each of the following considerations weakens the inference from the 1930s study that attitudes fail to predict behavior EXCEPT:',
        options: [
          'The letter asked about Chinese guests in general, whereas the behavior involved one specific, well-dressed couple',
          'The establishments were located in many different regions of the country rather than in a single area',
          'The person who answered the letter may not have been the employee who had served the couple',
          'Refusing service in person would have required a confrontation, so situational pressure favored serving them',
        ],
        correctAnswer: 1,
        explanation:
          'The geographic spread of the establishments does not bear on whether the letter responses and the service behavior came from comparable attitudes, so it leaves the inference untouched. The mismatch between a general question and a specific, favorably presented couple is the specificity problem the passage describes, and it weakens the inference. If different people produced the two measures, the study did not compare an attitude with the same person’s behavior, which also weakens it. Strong situational pressure, in this case the awkwardness of a face-to-face refusal, is one of the conditions under which attitudes predict behavior poorly, so the behavior may not have reflected attitudes at all.',
        skill: '7B evaluating attitude–behavior evidence',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — repeated cross-sections, two tables: marriage,
  //     cohabitation, divorce by education; deinstitutionalization of marriage
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Marriage, Cohabitation, and Household Forms Over Fifty Years',
    passageText:
      'Sociologists treat the family as a social institution: a durable, patterned set of roles and norms organized around the recurring tasks of reproduction, child rearing, economic cooperation, and intimate support. Functionalist accounts emphasize the tasks a family performs for society, including socializing children, regulating sexual activity, assigning social position, and providing emotional security, and ask how other arrangements take up those tasks when family forms change. Conflict accounts emphasize inequality within and between families: unequal power between partners, the unpaid labor of child rearing and housework, and the way family resources transmit advantage across generations. Symbolic interactionist accounts examine how partners negotiate the meaning of their roles in everyday interaction.\n\nFamily forms vary. A nuclear family consists of parents and their dependent children; an extended family adds other relatives in the same household or in close cooperation; single-parent families, stepfamilies formed after remarriage, cohabiting couples with and without children, and childless couples are also common. Which forms are prevalent changes over time, and some sociologists describe recent decades in wealthy countries as a period of deinstitutionalization of marriage: the norms that once defined what married partners did for each other and when people should marry have weakened, so that couples increasingly work out their own arrangements, and marriage has become something to be achieved after other milestones, such as finishing school, finding stable work, and sometimes having a child, rather than the foundation on which those milestones are built.\n\nResearchers examined national surveys that interview a new random sample of households each year. Table 1 reports, for adults aged 25 to 44, the percentage currently married, the percentage living with an unmarried partner, and the percentage divorced or separated at each of four dates, together with the median age at which women first married and the percentage of births that occurred outside marriage in that year. Table 2 reports, for women who first married in 1980 and for women who first married in 2010, the percentage whose marriage ended in divorce within ten years, by the woman’s education at the time of marriage.\n\nThe researchers noted that the share of women aged 40 who had ever married was 94% in 1970 and 78% in 2020, and that the share of cohabiting couples who married within five years fell from roughly two-thirds in the 1980s to about one-third in the 2010s. They also reported that in 2020, 41% of children lived with two married biological parents, 13% with two cohabiting parents, and 25% with one parent; the remainder lived in stepfamilies or with other relatives. Among children of college-educated mothers, the share living with two married parents was more than twice the share among children of mothers who had not completed high school. Finally, they cautioned that because each survey interviews different people, the tables describe the population at each date and not the life course of any particular group of individuals.',
    figure:
      '**Table 1. Adults aged 25–44, selected years**\n\n| Year | Currently married (%) | Cohabiting (%) | Divorced or separated (%) | Median age at first marriage, women (years) | Births outside marriage (%) |\n|---|---|---|---|---|---|\n| 1970 | 80 | 1 | 5 | 21 | 11 |\n| 1990 | 62 | 6 | 11 | 24 | 28 |\n| 2010 | 52 | 10 | 11 | 26 | 41 |\n| 2020 | 48 | 13 | 10 | 28 | 40 |\n\n**Table 2. First marriages ending in divorce within ten years, by wife’s education at marriage (%)**\n\n| Education | Married in 1980 | Married in 2010 |\n|---|---|---|\n| Less than high school | 38 | 46 |\n| High school or some college | 33 | 36 |\n| Four-year college degree | 27 | 17 |',
    questions: [
      {
        question: 'Which statement about adults aged 25 to 44 is best supported by Table 1?',
        options: [
          'The rise in cohabitation fully offset the decline in marriage, leaving the share living with a partner unchanged',
          'The rise in divorce and separation accounts for most of the decline in the share who were currently married',
          'The rise in cohabitation offset less than half of the decline in marriage, so the share living with any partner fell',
          'The share neither married nor cohabiting doubled, with divorce and separation contributing most of the increase',
        ],
        correctAnswer: 2,
        explanation:
          'Marriage fell by 32 percentage points (80% to 48%) while cohabitation rose by 12 points (1% to 13%), so cohabitation replaced less than half of the lost marriages and the share living with a partner of either kind fell from 81% to 61%. Because the offset was partial, the partnered share was not unchanged. Divorce and separation rose by only 5 points, far short of the 32-point decline in marriage, so most of that decline reflects people who had not married. The unpartnered share did roughly double, from 19% to 39%, but divorce and separation contributed 5 of those 20 points; the larger part came from adults who had never married.',
        skill: '9B family trends: reading a rate table',
      },
      {
        question: 'Taken together, Table 2 and the researchers’ observations about children indicate that between 1980 and 2020:',
        options: [
          'family stability grew more stratified by education, with marriages of the most-educated women becoming more durable',
          'divorce became more common at every level of education, with the sharpest increase among college graduates',
          'marriage became less stable for women at every educational level, so that differences by education narrowed',
          'college-educated women postponed marriage for so long that few of their marriages could be followed for ten years',
        ],
        correctAnswer: 0,
        explanation:
          'Ten-year divorce rose among women without a high school diploma (38% to 46%) and fell among college graduates (27% to 17%), widening the gap from 11 to 29 points, and children of college-educated mothers were more than twice as likely to live with two married parents; both facts show family stability diverging by education. Divorce did not rise at every level, since it fell by 10 points among college graduates. Differences by education widened rather than narrowed. Table 2 follows each marriage cohort for ten years regardless of the age at which the women married, so later marriage does not shorten the follow-up.',
        skill: '10A stratification of family stability',
      },
      {
        question:
          'A sociologist studies a society in which marriage has NOT undergone the deinstitutionalization described in the passage. Relative to the 2020 population in Table 1, this society would be expected to show:',
        options: [
          'a higher share of adults cohabiting but a similar share currently married',
          'a higher share of couples who negotiate their own division of household duties',
          'a lower share of women ever married by age 40 and a higher rate of divorce',
          'a lower share of births outside marriage and a younger age at first marriage',
        ],
        correctAnswer: 3,
        explanation:
          'Where marriage remains institutionalized, strong norms regulate when people marry and expect childbearing to occur within marriage, and marriage is the foundation laid before other milestones rather than a capstone reached after them, so first marriages come earlier and fewer births occur outside marriage, as in the 1970 row of Table 1. Cohabitation is a feature of the deinstitutionalized pattern, so it would be lower, not higher, and the married share would be higher rather than similar. Couples negotiating their own household arrangements is precisely what replaces shared norms when marriage deinstitutionalizes. An institutionalized regime would have a higher, not lower, share of women married by 40, and nothing in the passage ties institutionalized marriage to more divorce.',
        skill: '9B deinstitutionalization of marriage',
      },
      {
        question:
          'The decline in the percentage currently married in Table 1 could reflect either postponement of marriage or a decision never to marry. Which of the researchers’ additional observations best helps to distinguish between these?',
        options: [
          'The fall in the share of cohabiting couples who married within five years',
          'The fall in the share of women who had ever married by age 40',
          'The rise in the median age at which women first married',
          'The rise in the share of births occurring outside marriage',
        ],
        correctAnswer: 1,
        explanation:
          'If people were merely postponing marriage, nearly as many would still have married by age 40 as before; the drop from 94% to 78% shows that a substantial share had not married by an age at which first marriage becomes uncommon, so part of the decline reflects forgoing marriage rather than delaying it. A fall in the share of cohabiting couples who marry within five years is consistent with either delay or forgoing. A rising median age at first marriage establishes postponement among those who marry but says nothing about whether others ever marry. Births outside marriage can rise under either interpretation and do not track whether the parents later marry.',
        skill: '9B interpreting cross-sectional trend data',
      },
    ],
  },
]

export const FL5_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl5-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'With her eyes closed, a patient is asked to report whether the examiner has moved her big toe upward or downward. Accurate performance on this test depends primarily on:',
    options: [
      'receptors in muscles, tendons, and joint capsules that signal limb position',
      'hair cells in the semicircular canals that signal rotation of the head',
      'thermoreceptors in the skin of the toe that signal contact with the examiner',
      'free nerve endings in the toe that signal the pressure of the examiner’s grip',
    ],
    correctAnswer: 0,
    explanation:
      'Judging the position and movement of a body part without vision is proprioception (kinesthesia), which depends on muscle spindles, Golgi tendon organs, and joint receptors that encode stretch, tension, and joint angle. The semicircular canals are part of the vestibular system and signal rotation of the head, not the position of a toe. Thermoreceptors signal temperature and could indicate that the examiner is touching the toe but not which way it was moved. Pressure from the examiner’s grip is the same whether the toe is moved up or down, so cutaneous pressure receptors cannot supply the direction.',
    skill: '6A proprioception and kinesthesia',
  },
  {
    id: 'fl5-ps-b-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A pigeon reinforced for pecking a key illuminated with yellow light also pecks when the key is orange or green. The experimenter now wants the pigeon to peck only when the key is yellow. Which procedure would accomplish this?',
    options: [
      'Present the yellow key repeatedly with no reinforcement until the pigeon stops pecking it altogether',
      'Pair the yellow key with a tone, and then reinforce pecking only when the tone is sounded by itself',
      'Reinforce pecks to the yellow key while withholding reinforcement for pecks to orange and green keys',
      'Reinforce pecks on a variable-ratio schedule regardless of which color the key displays at the time',
    ],
    correctAnswer: 2,
    explanation:
      'Pecking at orange and green is stimulus generalization, and the way to narrow responding to one stimulus is discrimination training: reinforce the response in the presence of the target stimulus and withhold reinforcement in the presence of similar stimuli until responding to them extinguishes. Presenting the yellow key without reinforcement is extinction and would eliminate pecking to yellow as well. Pairing the key with a tone and transferring reinforcement to the tone shifts control to a new stimulus rather than sharpening control by color. Reinforcing regardless of color maintains generalized responding and would, if anything, strengthen pecking to all colors.',
    skill: '7A stimulus generalization and discrimination',
  },
  {
    id: 'fl5-ps-b-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Participants were told, on the basis of a fabricated test score, that they were unusually good at judging whether suicide notes were genuine. Later the experimenter explained that the feedback had been assigned at random and had no relation to their performance. Participants who had received the positive feedback nevertheless continued to rate their ability at this task as above average. This result demonstrates:',
    options: ['confirmation bias', 'the availability heuristic', 'hindsight bias', 'belief perseverance'],
    correctAnswer: 3,
    explanation:
      'Belief perseverance is the persistence of a belief after the evidence that originally supported it has been discredited, which is exactly what happened when participants held on to their self-assessment after learning that the feedback was random. Confirmation bias is the tendency to seek or weight evidence that supports an existing belief; here no new evidence was gathered, and the only evidence was explicitly withdrawn. The availability heuristic concerns judging frequency or probability by the ease with which examples come to mind. Hindsight bias is the tendency to see an outcome as having been predictable after it is known, which does not describe a judgment about one’s own ability.',
    skill: '6B belief perseverance',
  },
  {
    id: 'fl5-ps-b-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'After a stroke, a 60-year-old accountant can recall recent events, name objects, and walk without difficulty, but he now starts tasks without planning them, abandons them when distracted, and makes impulsive purchases that he later regrets. The stroke most likely damaged his:',
    options: ['hippocampus', 'prefrontal cortex', 'cerebellum', 'primary motor cortex'],
    correctAnswer: 1,
    explanation:
      'Planning, sustaining attention on a goal, and inhibiting impulses are executive functions that depend on the prefrontal cortex, and the pattern of impaired executive function with preserved memory, language, and movement points there. Hippocampal damage would impair the formation of new memories, yet he recalls recent events. Cerebellar damage produces problems with coordination and balance, yet he walks normally. Primary motor cortex damage produces weakness or paralysis of the opposite side of the body, not changes in judgment and planning.',
    skill: '6A prefrontal cortex and executive function',
  },
  {
    id: 'fl5-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'After a sudden economic boom brought unexpected wealth to a mining region, rates of suicide rose even though most residents were better off than before. Durkheim would attribute this increase mainly to:',
    options: [
      'egoism: ties that integrate individuals into groups had weakened',
      'alienation: workers had become estranged from the products of their labor',
      'anomie: the norms that regulate people’s aspirations had lost their hold',
      'strain: a gap between culturally valued goals and legitimate means had widened',
    ],
    correctAnswer: 2,
    explanation:
      'Durkheim argued that abrupt social change, including sudden prosperity as well as sudden hardship, disrupts the norms that ordinarily limit what people expect and desire, producing anomie, a state of normlessness in which unregulated aspirations lead to frustration and, in his analysis, higher suicide rates. Egoism in Durkheim’s scheme refers to weak integration into groups, and the scenario describes a change in regulation, not in group ties. Alienation is Marx’s concept, not Durkheim’s. Strain between goals and means is Merton’s later extension of anomie, and a boom narrows rather than widens the gap between goals and legitimate means.',
    skill: '9A anomie (Durkheim)',
  },
  {
    id: 'fl5-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A man released from prison after serving his sentence finds that he cannot vote, is barred from many occupational licenses, is turned away by landlords, and is no longer invited to his former friends’ gatherings, although his income is above the poverty line. Sociologists would describe his situation as:',
    options: ['absolute poverty', 'status inconsistency', 'role strain', 'social exclusion'],
    correctAnswer: 3,
    explanation:
      'Social exclusion is the process by which people are shut out of full participation in the political, economic, and social life of their society, and his situation combines all three dimensions, political rights, work and housing, and social ties, even though his income is adequate. Absolute poverty refers to lacking the resources needed for basic survival, which his income rules out. Status inconsistency describes holding positions that rank differently on separate dimensions of stratification, such as high education with low income. Role strain refers to competing demands within a single role, not to being barred from participation.',
    skill: '10A social exclusion',
  },
  {
    id: 'fl5-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A researcher maps friendships among 10 medical students and finds 18 friendship ties. One student, K, is friends with 7 of the other 9 students, more than any other member. (A network of n people can have at most n(n − 1)/2 ties.) Which statement correctly describes the network?',
    options: [
      'Its density is 0.40, and K has the highest degree centrality',
      'Its density is 0.40, and K has the lowest degree centrality',
      'Its density is 0.18, and K has the highest degree centrality',
      'Its density is 0.78, and K has the highest degree centrality',
    ],
    correctAnswer: 0,
    explanation:
      'Density is the proportion of possible ties that actually exist: 10 people can have 10 × 9 / 2 = 45 ties, and 18 / 45 = 0.40. Degree centrality is the number of ties a member has, so K, with 7 ties, the most of anyone, has the highest degree centrality, not the lowest. A density of 0.18 results from dividing the tie count by 100 rather than by the 45 possible ties. A density of 0.78 is K’s own share of possible ties (7 of 9), a property of one member rather than of the whole network.',
    skill: '9A social networks: density and centrality',
  },
]
