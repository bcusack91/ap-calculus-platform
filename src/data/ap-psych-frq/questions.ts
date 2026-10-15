/**
 * AP Psychology — FRQ practice pool in the current (2024–25 CED) exam format.
 *
 * Section II is two 7-point questions in 70 minutes:
 *   • Article Analysis Question (AAQ, ~25 min): one study summary; (A) research
 *     method, (B) operational definition, (C) a statistic, (D) an ethical
 *     guideline the researchers applied, (E) generalizability, (F) whether a
 *     finding supports or refutes the hypothesis (2 pts).
 *   • Evidence-Based Question (EBQ, ~45 min): three source summaries; (A) a
 *     claim, (B) evidence from one source + explanation with a psychological
 *     concept (3 pts), (C) evidence from a different source + explanation with
 *     a different concept (3 pts).
 *
 * Every study and source here is a fictional practice summary written for
 * StudyMondo, not a real citation, and no finding is attributed to a real
 * researcher. Rubric keywords drive the page's quick self-check; the rubric
 * descriptions follow the College Board's published scoring criteria.
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type PsychFRQType = 'aaq' | 'ebq'

export interface PsychFRQ {
  id: string
  type: PsychFRQType
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

export const PSYCH_FRQ_TYPE_LABELS: Record<PsychFRQType, string> = {
  aaq: 'Article Analysis (AAQ)',
  ebq: 'Evidence-Based (EBQ)',
}

const PRACTICE_NOTE = '*Practice study summary written for StudyMondo — fictional, not a real publication.*'
const EBQ_NOTE = '*The sources are fictional practice study summaries written for StudyMondo, not real publications. Cite each source you use, for example "(Source 1)."*'

/* ------------------------------------------------------------------ */
/*  AAQ builder — the six parts are the same on every AAQ               */
/* ------------------------------------------------------------------ */

interface AAQSpec {
  id: string
  title: string
  study: string
  method: { keywords: string[]; description: string; sample: string }
  opDef: { variable: string; keywords: string[]; description: string; sample: string }
  statistic: { prompt: string; keywords: string[]; description: string; sample: string }
  ethics: { keywords: string[]; description: string; sample: string }
  generalize: { keywords: string[]; description: string; sample: string }
  hypothesis: {
    text: string
    resultKeywords: string[]
    resultDescription: string
    explainKeywords: string[]
    explainDescription: string
    sample: string
  }
}

function aaq(s: AAQSpec): PsychFRQ {
  return {
    id: s.id,
    type: 'aaq',
    title: s.title,
    prompt: `Using the source provided, respond to all parts of the question.\n\n${PRACTICE_NOTE}\n\n${s.study}`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt: 'Identify the research method used in the study.',
        maxPoints: 1,
        rubric: [{ points: 1, description: s.method.description, keywords: s.method.keywords }],
        sampleAnswer: s.method.sample,
      },
      {
        label: 'B',
        prompt: `State the operational definition of ${s.opDef.variable}.`,
        maxPoints: 1,
        rubric: [{ points: 1, description: s.opDef.description, keywords: s.opDef.keywords }],
        sampleAnswer: s.opDef.sample,
      },
      {
        label: 'C',
        prompt: s.statistic.prompt,
        maxPoints: 1,
        rubric: [{ points: 1, description: s.statistic.description, keywords: s.statistic.keywords }],
        sampleAnswer: s.statistic.sample,
      },
      {
        label: 'D',
        prompt: 'Identify at least one ethical guideline applied by the researchers.',
        maxPoints: 1,
        rubric: [{ points: 1, description: s.ethics.description, keywords: s.ethics.keywords }],
        sampleAnswer: s.ethics.sample,
      },
      {
        label: 'E',
        prompt: 'Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study.',
        maxPoints: 1,
        rubric: [{ points: 1, description: s.generalize.description, keywords: s.generalize.keywords }],
        sampleAnswer: s.generalize.sample,
      },
      {
        label: 'F',
        prompt: `Explain how at least one of the research findings supports or refutes the researchers' hypothesis that ${s.hypothesis.text}.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: s.hypothesis.resultDescription, keywords: s.hypothesis.resultKeywords },
          { points: 1, description: s.hypothesis.explainDescription, keywords: s.hypothesis.explainKeywords },
        ],
        sampleAnswer: s.hypothesis.sample,
      },
    ],
  }
}

/* ------------------------------------------------------------------ */
/*  EBQ builder — claim + two evidence/explanation blocks               */
/* ------------------------------------------------------------------ */

interface EBQSpec {
  id: string
  title: string
  question: string
  sources: string
  claim: { description: string; keywords: string[]; sample: string }
  b: { evidence: string; concepts: string[]; conceptDescription: string; sample: string }
  c: { evidence: string; concepts: string[]; conceptDescription: string; sample: string }
}

const CITE_KEYWORDS = ['source 1', 'source 2', 'source 3', '(1)', '(2)', '(3)']
const EXPLAIN_KEYWORDS = ['because', 'this shows', 'which shows', 'this suggests', 'supports my claim', 'demonstrates', 'indicates', 'this means']

function ebq(s: EBQSpec): PsychFRQ {
  return {
    id: s.id,
    type: 'ebq',
    title: s.title,
    prompt: `Using the sources provided, develop and justify an argument about ${s.question}\n\n${EBQ_NOTE}\n\n${s.sources}`,
    totalPoints: 7,
    timeRecommendation: '~45 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt: 'Propose a specific and defensible claim based in psychological science that responds to the question.',
        maxPoints: 1,
        rubric: [{ points: 1, description: s.claim.description, keywords: s.claim.keywords }],
        sampleAnswer: s.claim.sample,
      },
      {
        label: 'B',
        prompt: '(i) Support your claim using at least one piece of specific and relevant evidence from one of the sources. (ii) Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: `B(i) Evidence: uses one piece of specific, accurate, relevant evidence and cites its source. ${s.b.evidence}`, keywords: CITE_KEYWORDS },
          { points: 1, description: 'B(ii) Explanation: correctly interprets the evidence and explains how it supports the claim (not just restating it).', keywords: EXPLAIN_KEYWORDS },
          { points: 1, description: `B(ii) Application: names and correctly applies a psychological perspective, theory, concept, or research finding from the CED. ${s.b.conceptDescription}`, keywords: s.b.concepts },
        ],
        sampleAnswer: s.b.sample,
      },
      {
        label: 'C',
        prompt: '(i) Support your claim using an additional piece of specific and relevant evidence from a different source. (ii) Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: `C(i) Evidence: uses specific, accurate, correctly cited evidence from a DIFFERENT source than Part B. ${s.c.evidence}`, keywords: CITE_KEYWORDS },
          { points: 1, description: 'C(ii) Explanation: correctly interprets the evidence and explains how it supports the claim.', keywords: EXPLAIN_KEYWORDS },
          { points: 1, description: `C(ii) Application: applies a DIFFERENT concept from the one used in Part B. ${s.c.conceptDescription}`, keywords: s.c.concepts },
        ],
        sampleAnswer: s.c.sample,
      },
    ],
  }
}

/* ------------------------------------------------------------------ */
/*  Article Analysis Questions                                         */
/* ------------------------------------------------------------------ */

const aaqFRQs: PsychFRQ[] = [
  aaq({
    id: 'psych-aaq-1',
    title: 'Sleep Deprivation and False Memories',
    study: `**Introduction.** Researchers hypothesized that going without sleep makes people more likely to accept misleading information into their memories of an event.

**Participants.** 120 adults ages 18–30 (64 women, 56 men) who answered online advertisements in one mid-sized U.S. city. Each was paid for taking part. All participants gave informed consent and were told they could withdraw at any time.

**Method.** Participants spent a night in a sleep laboratory and were randomly assigned to one of two conditions. In the sleep-deprived condition (n = 60), they were kept awake all night under supervision. In the rested condition (n = 60), they slept for 8 hours. The next morning, all participants watched a slideshow of a theft and then read a written summary of it that contained six misleading details. Finally, they took a recognition test. False memory was measured as the number of the six misleading details (0–6) that a participant reported having seen in the slideshow.

**Results.** Sleep-deprived participants reported more misleading details (M = 3.1, SD = 1.2) than rested participants (M = 1.8, SD = 1.0). The difference was statistically significant.`,
    method: {
      keywords: ['experiment'],
      description: 'Identifies the study as an experiment (participants were randomly assigned to a sleep condition that the researchers manipulated). "Correlational study" does not earn the point.',
      sample: 'The researchers used an experiment: they manipulated sleep (deprived vs. rested) and randomly assigned participants to the two conditions.',
    },
    opDef: {
      variable: 'false memory in the study',
      keywords: ['number of misleading', 'misleading details', '0 to 6', '0-6', '0–6', 'six misleading', 'recognition test'],
      description: 'States the measurable definition: the number of the six misleading details (0–6) a participant reported having seen in the slideshow on the recognition test.',
      sample: 'False memory was operationally defined as how many of the six misleading details from the written summary (0–6) a participant reported seeing in the slideshow on the recognition test.',
    },
    statistic: {
      prompt: 'Describe the meaning of the difference in the mean number of misleading details reported by the two groups.',
      keywords: ['more misleading', 'fewer misleading', 'more false', 'on average', 'sleep-deprived', '3.1', '1.8'],
      description: 'Explains what the means show in context: on average, sleep-deprived participants reported more misleading details as seen (3.1 vs. 1.8) than rested participants. Restating one mean alone or defining "mean" does not earn the point.',
      sample: 'On average, participants who stayed awake all night reported about 1.3 more of the misleading details as things they had actually seen (3.1 vs. 1.8) than participants who slept, so the sleep-deprived group formed more false memories.',
    },
    ethics: {
      keywords: ['informed consent', 'consent', 'withdraw'],
      description: 'Names a guideline the summary says was applied: informed consent, or the right to withdraw at any time. Guidelines not mentioned in the summary (e.g., debriefing) do not earn the point.',
      sample: 'The researchers obtained informed consent from every participant and told them they could withdraw at any time.',
    },
    generalize: {
      keywords: ['18', 'one city', 'one mid-sized', 'ages', 'paid', 'may not generalize', 'not generalizable', 'cannot be generalized'],
      description: 'Makes a claim about a population and supports it with participant evidence, e.g., the findings may not generalize to older adults or to people elsewhere because all participants were 18–30-year-olds from one U.S. city. Sample size alone is not participant evidence.',
      sample: 'The findings may not generalize to all adults, because every participant was 18 to 30 years old and lived in one U.S. city; older adults, whose memory and sleep differ, might respond differently to a night without sleep.',
    },
    hypothesis: {
      text: 'going without sleep makes people more likely to accept misleading information into their memories',
      resultKeywords: ['3.1', '1.8', 'more misleading', 'sleep-deprived group reported more', 'sleep-deprived participants reported more'],
      resultDescription: 'Uses a specific, accurately interpreted result, such as the sleep-deprived group\'s higher mean number of misleading details (3.1 vs. 1.8).',
      explainKeywords: ['supports', 'refutes', 'random assignment', 'randomly assigned', 'misinformation effect'],
      explainDescription: 'Explains how the result supports (or refutes) the hypothesis, e.g., because participants were randomly assigned and only sleep differed, the greater acceptance of misleading details in the deprived group supports the hypothesis.',
      sample: 'The finding that sleep-deprived participants reported an average of 3.1 misleading details compared with 1.8 for rested participants supports the hypothesis. Because participants were randomly assigned and both groups read the same misleading summary, the larger misinformation effect in the deprived group can be attributed to the lack of sleep.',
    },
  }),

  aaq({
    id: 'psych-aaq-2',
    title: 'Bedtime Phone Use and Adolescent Sleep',
    study: `**Introduction.** Researchers hypothesized that adolescents who use their phones more in the hour before bed get less sleep.

**Participants.** 412 students ages 13–17 (51 percent girls) from four public high schools in one Midwestern school district. Parents gave written consent and students gave assent. Each student's data were stored under a code number rather than a name to keep responses confidential.

**Method.** For two weeks, an app on each student's phone recorded the number of minutes the phone screen was in use during the hour before the student's bedtime. Each student also wore a wrist sleep tracker that recorded total minutes of sleep each night. The researchers calculated each student's average bedtime phone use and average nightly sleep and measured the relationship between the two. No conditions were assigned; students followed their normal routines.

**Results.** Average bedtime phone use and average nightly sleep were negatively correlated, r = −.41. Students in the top quarter of bedtime phone use slept an average of 47 fewer minutes per night than students in the bottom quarter.`,
    method: {
      keywords: ['correlational', 'correlation'],
      description: 'Identifies the study as correlational (it measured two variables as they naturally occurred; no variable was manipulated and no one was randomly assigned). Calling it an experiment does not earn the point.',
      sample: 'The researchers used a correlational study: they measured phone use and sleep as they naturally occurred and examined the relationship between them without manipulating either one.',
    },
    opDef: {
      variable: 'bedtime phone use',
      keywords: ['minutes', 'hour before', 'screen was in use', 'recorded by an app', 'app recorded', 'app'],
      description: 'States the measurable definition: the number of minutes the phone screen was in use during the hour before bedtime, as recorded by an app (averaged over two weeks).',
      sample: 'Bedtime phone use was operationally defined as the number of minutes the phone screen was in use during the hour before bedtime, recorded by an app and averaged over the two weeks.',
    },
    statistic: {
      prompt: 'Describe the meaning of the correlation coefficient (r = −.41) in the context of the study.',
      keywords: ['negative', 'moderate', 'less sleep', 'fewer minutes', 'more phone use', 'as phone use increased'],
      description: 'Explains the coefficient in context: a moderate negative correlation, meaning students who used their phones more before bed tended to sleep less. Saying only "negative correlation" without relating it to the variables does not earn the point.',
      sample: 'The coefficient of −.41 is a moderate negative correlation: students who used their phones more in the hour before bed tended to get fewer minutes of sleep per night, although the relationship was far from perfect.',
    },
    ethics: {
      keywords: ['consent', 'assent', 'confidential', 'code number', 'confidentiality'],
      description: 'Names a guideline the summary says was applied: parental (informed) consent, student assent, or confidentiality (data stored under code numbers).',
      sample: 'The researchers obtained written consent from parents and assent from the students, and they kept data confidential by storing it under code numbers.',
    },
    generalize: {
      keywords: ['13', 'one midwestern', 'one school district', 'four public', 'may not generalize', 'not generalizable', 'high school students'],
      description: 'Makes a claim about a population with participant evidence, e.g., the results may generalize to U.S. high school students but not to adults or to teens in other regions, because all participants were 13–17-year-olds from one Midwestern district.',
      sample: 'The findings may not generalize beyond this population, because all participants were 13- to 17-year-olds from four schools in one Midwestern district; adults or students from other regions might use phones and sleep differently.',
    },
    hypothesis: {
      text: 'adolescents who use their phones more in the hour before bed get less sleep',
      resultKeywords: ['-.41', '−.41', '47', 'negative correlation', 'top quarter'],
      resultDescription: 'Uses a specific result, such as r = −.41 or the 47-minute difference between the top and bottom quarters of phone use.',
      explainKeywords: ['supports', 'refutes', 'associated', 'tended to'],
      explainDescription: 'Explains how the result supports (or refutes) the hypothesis, e.g., the negative correlation shows that more bedtime phone use goes with less sleep, as predicted. (The hypothesis is about association, so the response need not claim causation; claiming the study proves phones cause sleep loss is an inaccurate interpretation.)',
      sample: 'The negative correlation (r = −.41) supports the hypothesis: students who used their phones more before bed slept less, and the heaviest users slept 47 fewer minutes per night than the lightest users. Because the study is correlational, it supports an association but does not show that phone use causes the lost sleep.',
    },
  }),

  aaq({
    id: 'psych-aaq-3',
    title: 'Idealized Social Media Feeds and Self-Esteem',
    study: `**Introduction.** Researchers hypothesized that viewing other people's idealized social media posts lowers viewers' self-esteem.

**Participants.** 150 undergraduates ages 18–24 (98 women, 52 men) at one private university in the northeastern United States, who took part for course credit. All participants gave informed consent. Because they were told the study was about "website design," all participants were debriefed about the true purpose at the end.

**Method.** Participants were randomly assigned to scroll for 10 minutes through one of two mock social media feeds. The idealized feed (n = 75) showed posts of same-age peers announcing awards, luxury vacations, and fitness achievements. The neutral feed (n = 75) showed posts of landscapes and recipes. Participants then completed a 20-item self-esteem questionnaire scored from 20 to 100, with higher scores meaning higher self-esteem.

**Results.** Self-esteem scores were lower after the idealized feed (M = 61.2, SD = 9.8) than after the neutral feed (M = 68.5, SD = 10.1). The difference was statistically significant.`,
    method: {
      keywords: ['experiment'],
      description: 'Identifies the study as an experiment (the feed type was manipulated and participants were randomly assigned).',
      sample: 'This was an experiment, because the researchers randomly assigned participants to view either the idealized feed or the neutral feed.',
    },
    opDef: {
      variable: 'self-esteem in the study',
      keywords: ['20-item', '20 to 100', '20–100', 'questionnaire', 'score'],
      description: 'States the measurable definition: the score (20–100) on a 20-item self-esteem questionnaire completed after scrolling, with higher scores meaning higher self-esteem.',
      sample: 'Self-esteem was operationally defined as a participant\'s score from 20 to 100 on a 20-item self-esteem questionnaire completed right after scrolling, with higher scores meaning higher self-esteem.',
    },
    statistic: {
      prompt: 'Describe the meaning of the difference between the mean self-esteem scores of the two groups.',
      keywords: ['lower self-esteem', 'lower', 'higher', 'on average', '61.2', '68.5'],
      description: 'Explains the means in context: on average, participants who scrolled the idealized feed reported lower self-esteem (61.2) than those who saw the neutral feed (68.5).',
      sample: 'On average, participants who viewed peers\' idealized posts scored about 7 points lower in self-esteem (61.2) than participants who viewed neutral posts (68.5), so the idealized feed was followed by lower self-esteem.',
    },
    ethics: {
      keywords: ['informed consent', 'consent', 'debrief'],
      description: 'Names a guideline the summary says was applied: informed consent or debriefing (participants were told the true purpose afterward).',
      sample: 'Because participants were misled about the purpose, the researchers debriefed them at the end of the study; they had also obtained informed consent.',
    },
    generalize: {
      keywords: ['18', 'one private', 'undergraduates', 'college students', 'northeastern', 'may not generalize', 'not generalizable', 'mostly women', '98 women'],
      description: 'Makes a claim about a population with participant evidence, e.g., the results may not generalize to adolescents or older adults because all participants were 18–24-year-old undergraduates at one private university, about two-thirds of them women.',
      sample: 'The findings may not generalize to all social media users, because every participant was an 18- to 24-year-old undergraduate at a single private university in the Northeast, and nearly two-thirds were women; younger teens or older adults might compare themselves to others differently.',
    },
    hypothesis: {
      text: 'viewing other people\'s idealized social media posts lowers viewers\' self-esteem',
      resultKeywords: ['61.2', '68.5', 'lower self-esteem', 'idealized feed'],
      resultDescription: 'Uses a specific result, such as the lower mean self-esteem after the idealized feed (61.2 vs. 68.5).',
      explainKeywords: ['supports', 'refutes', 'random assignment', 'randomly assigned', 'upward social comparison', 'social comparison'],
      explainDescription: 'Explains how the result supports (or refutes) the hypothesis, e.g., with random assignment and identical procedures except the feed, the lower scores after the idealized feed support the claim that viewing idealized posts lowers self-esteem (consistent with upward social comparison).',
      sample: 'The finding that self-esteem averaged 61.2 after the idealized feed versus 68.5 after the neutral feed supports the hypothesis. Since participants were randomly assigned and the only difference was the type of posts, viewing peers\' idealized lives, which invites upward social comparison, appears to have lowered their self-esteem.',
    },
  }),

  aaq({
    id: 'psych-aaq-4',
    title: 'Aerobic Exercise and Depressive Symptoms',
    study: `**Introduction.** Researchers hypothesized that a regular aerobic exercise program reduces symptoms of depression.

**Participants.** 96 adults ages 25–60 (60 women, 36 men) diagnosed with mild to moderate major depressive disorder, recruited from two outpatient clinics in one city. Participants gave informed consent, were told they could leave the study at any time, and continued their usual care. Control participants were offered the exercise program after the study ended.

**Method.** Participants were randomly assigned to 12 weeks of supervised aerobic exercise (40 minutes, three times per week; n = 48) or to a wait-list control group (n = 48). Before and after the 12 weeks, all participants completed a 21-item depression questionnaire scored from 0 to 63, with higher scores meaning more severe symptoms.

**Results.** After 12 weeks, the exercise group's mean score was 14.6 (down from 24.1), and the control group's mean score was 21.9 (down from 23.8). The difference between the groups after 12 weeks was statistically significant.`,
    method: {
      keywords: ['experiment'],
      description: 'Identifies the study as an experiment (participants were randomly assigned to an exercise program or a wait-list control).',
      sample: 'The researchers used an experiment, randomly assigning participants to either the exercise program or a wait-list control group.',
    },
    opDef: {
      variable: 'depressive symptoms in the study',
      keywords: ['21-item', '0 to 63', '0–63', 'questionnaire', 'score'],
      description: 'States the measurable definition: the score from 0 to 63 on a 21-item depression questionnaire, with higher scores meaning more severe symptoms.',
      sample: 'Depressive symptoms were operationally defined as a participant\'s score from 0 to 63 on a 21-item depression questionnaire, where higher scores mean more severe symptoms.',
    },
    statistic: {
      prompt: 'Describe the meaning of the difference between the two groups\' mean scores after 12 weeks (14.6 and 21.9).',
      keywords: ['lower', 'fewer symptoms', 'less severe', 'on average', '14.6', '21.9'],
      description: 'Explains the means in context: after 12 weeks, the exercise group reported less severe depressive symptoms, on average, than the wait-list group.',
      sample: 'After 12 weeks, participants in the exercise program averaged 14.6 on the questionnaire compared with 21.9 for the wait-list group, meaning the exercisers reported noticeably less severe depressive symptoms on average.',
    },
    ethics: {
      keywords: ['informed consent', 'consent', 'withdraw', 'leave the study', 'offered the exercise'],
      description: 'Names a guideline the summary says was applied: informed consent, the right to withdraw, or protecting control participants from harm by continuing their usual care and offering them the program afterward.',
      sample: 'The researchers obtained informed consent and told participants they could leave the study at any time.',
    },
    generalize: {
      keywords: ['25', 'mild to moderate', 'two outpatient', 'one city', 'may not generalize', 'not generalizable', 'severe depression'],
      description: 'Makes a claim about a population with participant evidence, e.g., the results may generalize to adults with mild to moderate depression but not to people with severe depression, teenagers, or adults over 60, because participants were 25–60-year-olds with mild to moderate diagnoses from two clinics in one city.',
      sample: 'The findings may generalize to adults with mild to moderate depression, but not to people with severe depression, adolescents, or adults over 60, because every participant was 25 to 60 years old with a mild or moderate diagnosis from two clinics in one city.',
    },
    hypothesis: {
      text: 'a regular aerobic exercise program reduces symptoms of depression',
      resultKeywords: ['14.6', '21.9', '24.1', 'exercise group', 'dropped'],
      resultDescription: 'Uses a specific result, such as the exercise group\'s lower final mean (14.6 vs. 21.9) or its larger drop from 24.1.',
      explainKeywords: ['supports', 'refutes', 'random assignment', 'randomly assigned', 'control group'],
      explainDescription: 'Explains how the result supports (or refutes) the hypothesis, e.g., both groups started at similar levels and were randomly assigned, so the much larger drop in the exercise group supports the claim that exercise reduced symptoms.',
      sample: 'The finding supports the hypothesis: the exercise group\'s mean fell from 24.1 to 14.6, while the wait-list group\'s fell only from 23.8 to 21.9. Because the groups started at similar levels and were randomly assigned, the larger improvement can be attributed to the exercise program rather than to time passing.',
    },
  }),

  aaq({
    id: 'psych-aaq-5',
    title: 'Toddlers Learning from a Video Model',
    study: `**Introduction.** Researchers hypothesized that toddlers can learn a new sequence of actions by watching an adult perform it on video.

**Participants.** 64 toddlers ages 18–24 months (30 girls, 34 boys) recruited from childcare centers in one suburban county. A parent of each child gave informed consent, and a session was stopped if a child became upset.

**Method.** Toddlers were randomly assigned to watch one of two 2-minute videos. In the demonstration video (n = 32), an adult performed a three-step sequence with a new toy (pressing a button, lifting a lid, and pulling out a ring). In the control video (n = 32), the same adult held and turned the toy without performing the steps. Ten minutes later, each toddler was given the toy for 2 minutes. Two coders who did not know which video the child had watched counted how many of the three target actions (0–3) the child performed.

**Results.** Toddlers who watched the demonstration performed more target actions (M = 1.9, SD = 0.8) than toddlers who watched the control video (M = 0.4, SD = 0.6). The difference was statistically significant. The two coders agreed on 94 percent of their counts.`,
    method: {
      keywords: ['experiment'],
      description: 'Identifies the study as an experiment (toddlers were randomly assigned to a demonstration or control video).',
      sample: 'The study is an experiment: the researchers randomly assigned toddlers to watch either the demonstration video or the control video.',
    },
    opDef: {
      variable: 'learning of the action sequence',
      keywords: ['number of', 'target actions', '0 to 3', '0–3', 'three target', 'counted'],
      description: 'States the measurable definition: the number of the three target actions (0–3) the toddler performed with the toy during the 2-minute test, as counted by coders.',
      sample: 'Learning was operationally defined as how many of the three target actions (0–3) a toddler performed with the toy during the 2-minute test period, as counted by the coders.',
    },
    statistic: {
      prompt: 'Describe the meaning of the difference between the mean number of target actions in the two groups.',
      keywords: ['more target', 'more actions', 'on average', 'demonstration', '1.9', '0.4'],
      description: 'Explains the means in context: on average, toddlers who watched the demonstration performed more of the target actions (1.9 of 3) than toddlers who watched the control video (0.4).',
      sample: 'On average, toddlers who saw the demonstration video performed about 1.9 of the three target actions, compared with 0.4 for toddlers who saw the control video, so watching the adult perform the steps led to much more imitation.',
    },
    ethics: {
      keywords: ['informed consent', 'consent', 'stopped', 'upset', 'protect'],
      description: 'Names a guideline the summary says was applied: informed consent from a parent, or protection from harm (stopping a session if a child became upset).',
      sample: 'The researchers obtained informed consent from each child\'s parent and protected the children from harm by stopping a session if a child became upset.',
    },
    generalize: {
      keywords: ['18', 'months', 'one suburban', 'childcare', 'may not generalize', 'not generalizable', 'older children'],
      description: 'Makes a claim about a population with participant evidence, e.g., the results may not generalize to older children or to toddlers from rural or urban areas or who are not in childcare, because all participants were 18–24-month-olds from childcare centers in one suburban county.',
      sample: 'The findings may not generalize to all young children, because every participant was 18 to 24 months old and attended childcare in one suburban county; toddlers who are not in childcare or who live in very different settings might have different experience with screens and models.',
    },
    hypothesis: {
      text: 'toddlers can learn a new sequence of actions by watching an adult perform it on video',
      resultKeywords: ['1.9', '0.4', 'more target actions', 'demonstration group'],
      resultDescription: 'Uses a specific result, such as the higher mean number of target actions after the demonstration video (1.9 vs. 0.4).',
      explainKeywords: ['supports', 'refutes', 'observational learning', 'modeling', 'random assignment', 'randomly assigned'],
      explainDescription: 'Explains how the result supports (or refutes) the hypothesis, e.g., because the only difference was whether the model performed the steps, the toddlers\' greater performance of the steps shows observational learning from video.',
      sample: 'The result supports the hypothesis. Toddlers who watched the adult perform the steps averaged 1.9 target actions, compared with 0.4 after the control video. Because toddlers were randomly assigned and both videos showed the same adult and toy, the difference shows that they learned the sequence by observing the model, which is observational learning.',
    },
  }),
]

/* ------------------------------------------------------------------ */
/*  Evidence-Based Questions                                           */
/* ------------------------------------------------------------------ */

const ebqFRQs: PsychFRQ[] = [
  ebq({
    id: 'psych-ebq-1',
    title: 'Sleep, Learning, and Memory',
    question: 'whether sleep plays an important role in learning and memory.',
    sources: `**Source 1 — Sleeping after learning**
*Participants:* 60 college students.
*Method:* Students learned 40 word pairs. Half learned them at 9 a.m. and were tested at 9 p.m. the same day after a normal day awake. The other half learned them at 9 p.m. and were tested at 9 a.m. after a night of sleep. Students were randomly assigned to the two schedules.
*Results:* Students who slept between learning and testing recalled 82 percent of the pairs; students who stayed awake recalled 66 percent.

---

**Source 2 — School-night sleep and grades**
*Participants:* 2,100 high school students in three states.
*Method:* Students reported their average sleep on school nights and their most recent grade point average (GPA).
*Results:* Students who averaged fewer than 6 hours of sleep reported GPAs about 0.4 points lower than students who averaged 8 or more hours. The researchers note that the study cannot show which variable caused the other.

---

**Source 3 — Napping and a motor skill**
*Participants:* 40 adults.
*Method:* Adults practiced typing a five-key finger sequence as fast as possible. They were then randomly assigned to take a 90-minute nap or to stay awake quietly for 90 minutes before being retested.
*Results:* Typing speed improved 18 percent in the nap group and 3 percent in the awake group. Nappers who spent more time in REM sleep improved the most.`,
    claim: {
      description: 'Takes a position, e.g., "Sleep plays an important role in learning because it helps stabilize newly learned information and skills." Restating the question is not a claim.',
      keywords: ['sleep helps', 'sleep improves', 'sleep is important', 'sleep plays', 'sleep is essential', 'without sleep'],
      sample: 'Sleep plays an important role in learning and memory, because sleeping after learning helps the brain stabilize new information and skills.',
    },
    b: {
      evidence: 'E.g., students who slept between learning and testing recalled 82 percent of word pairs vs. 66 percent for those who stayed awake (Source 1).',
      concepts: ['consolidation', 'long-term memory', 'long-term potentiation', 'hippocampus', 'retroactive interference', 'interference', 'encoding'],
      conceptDescription: 'E.g., memory consolidation (sleep helps transfer and stabilize new memories in long-term memory), or interference (being awake exposes people to new information that disrupts recall).',
      sample: 'Students who slept between learning and testing recalled 82 percent of the word pairs, compared with 66 percent for students who stayed awake (Source 1). This supports my claim because the only difference in schedules was whether sleep came between learning and testing. This reflects memory consolidation: during sleep the brain stabilizes newly encoded information into long-term memory, so the sleepers kept more of what they learned.',
    },
    c: {
      evidence: 'E.g., typing speed improved 18 percent after a nap vs. 3 percent after staying awake, with the most improvement in those with more REM sleep (Source 3).',
      concepts: ['procedural memory', 'implicit memory', 'rem sleep', 'rem', 'motor', 'cerebellum', 'sleep deprivation'],
      conceptDescription: 'E.g., procedural (implicit) memory and REM sleep for the motor skill in Source 3, or sleep deprivation effects for Source 2 (noting that Source 2 is correlational).',
      sample: 'Adults who napped improved their typing speed by 18 percent, while those who stayed awake improved only 3 percent, and nappers with more REM sleep improved the most (Source 3). This shows that sleep improves skills as well as facts. The typing sequence is a procedural memory, an implicit memory for how to perform an action, and the link between REM time and improvement suggests that REM sleep helps strengthen these skill memories.',
    },
  }),

  ebq({
    id: 'psych-ebq-2',
    title: 'Do Rewards Increase Motivation?',
    question: 'whether offering rewards is an effective way to increase motivation.',
    sources: `**Source 1 — A school reading incentive**
*Participants:* 220 students in grades 3–5 at two elementary schools.
*Method:* For three months, students earned points toward prizes for each book they read. Researchers counted books read per month before, during, and after the program.
*Results:* Students read an average of 2.1 books per month before the program, 5.4 during it, and 1.6 in the three months after the points ended.

---

**Source 2 — Paying for puzzles**
*Participants:* 120 college students.
*Method:* Students were randomly assigned to be paid for each puzzle they solved or to solve the same puzzles without pay. Afterward, each student was left alone for 10 minutes with the puzzles and some magazines and was secretly observed.
*Results:* Unpaid students spent an average of 6.2 minutes on the puzzles during the free period; paid students spent an average of 3.1 minutes.

---

**Source 3 — A workplace bonus**
*Participants:* 300 employees of a customer-service call center.
*Method:* The company introduced a monthly bonus for employees who resolved at least 9 customer calls per hour. Researchers compared performance in the six months before and the six months after the bonus began.
*Results:* Calls resolved per hour rose from an average of 7.8 to 9.6, and customer satisfaction ratings did not change.`,
    claim: {
      description: 'Takes a position, e.g., "Rewards increase motivation for tasks people do not already enjoy, but they can undermine motivation for activities people find interesting." Restating the question is not a claim.',
      keywords: ['rewards increase', 'rewards can', 'rewards reduce', 'rewards undermine', 'rewards are effective', 'rewards are not', 'rewards only'],
      sample: 'Rewards can increase effort in the short run, but they can undermine people\'s own interest in activities they would otherwise enjoy.',
    },
    b: {
      evidence: 'E.g., unpaid students spent 6.2 minutes on the puzzles in free time vs. 3.1 minutes for paid students (Source 2).',
      concepts: ['intrinsic motivation', 'extrinsic motivation', 'intrinsic', 'extrinsic', 'self-determination', 'autonomy'],
      conceptDescription: 'E.g., intrinsic vs. extrinsic motivation, or self-determination theory (rewards that feel controlling reduce the sense of autonomy that sustains interest).',
      sample: 'When students were later left alone with the puzzles, unpaid students spent 6.2 minutes on them while paid students spent only 3.1 minutes (Source 2). This supports my claim because the paid students lost interest in an activity once the pay was gone. Paying them shifted their reason for solving puzzles from intrinsic motivation, doing it for its own enjoyment, to extrinsic motivation, doing it for the money, so they had less reason to continue when no reward was offered.',
    },
    c: {
      evidence: 'E.g., books read rose from 2.1 to 5.4 per month during the points program and fell to 1.6 after it ended (Source 1), or calls resolved rose from 7.8 to 9.6 per hour after the bonus (Source 3).',
      concepts: ['positive reinforcement', 'reinforcement', 'extinction', 'incentive theory', 'incentive', 'token economy'],
      conceptDescription: 'E.g., positive reinforcement and extinction (Source 1: reading rose with points and fell when they stopped), or incentive theory (Source 3: the bonus pulled performance toward a goal).',
      sample: 'Students read 5.4 books per month while earning points but only 1.6 after the points ended, fewer than the 2.1 they read before the program (Source 1). This shows that the reward raised effort only while it lasted. The points acted as positive reinforcement that increased reading, but when the reinforcement stopped, reading underwent extinction and fell even below its starting level.',
    },
  }),

  ebq({
    id: 'psych-ebq-3',
    title: 'Do Early Experiences Have Lasting Effects?',
    question: 'whether experiences in early childhood have lasting effects on development.',
    sources: `**Source 1 — Age at adoption**
*Participants:* 180 children who spent their first months or years in understaffed orphanages and were then adopted into families.
*Method:* Researchers compared children adopted before 6 months of age with children adopted after age 2. Intelligence and social skills were measured at age 11.
*Results:* Children adopted before 6 months averaged an IQ score of 102; children adopted after age 2 averaged 88. The later-adopted group also had more difficulty forming close friendships.

---

**Source 2 — A 30-year follow-up**
*Participants:* 1,000 people followed from infancy to age 30.
*Method:* At age 1, each child's attachment was classified in a laboratory separation-and-reunion procedure. At ages 10 and 30, researchers measured friendship quality and adult relationship satisfaction.
*Results:* Children classified as securely attached at age 1 had higher-quality friendships at age 10. Secure attachment at age 1 was weakly correlated with relationship satisfaction at age 30 (r = .21).

---

**Source 3 — Adversity and support**
*Participants:* 2,400 eighteen-year-olds.
*Method:* Participants reported the number of serious adverse childhood experiences (such as abuse or household violence) they had faced, whether they had a supportive adult mentor during childhood, and their current symptoms of depression.
*Results:* Those with four or more adverse experiences reported depression at 2.5 times the rate of those with none. Among those who had a supportive mentor, this difference was about half as large.`,
    claim: {
      description: 'Takes a position, e.g., "Early childhood experiences have lasting effects on development, although later support can reduce the harm of early adversity." Restating the question is not a claim.',
      keywords: ['early experiences', 'early childhood', 'lasting effects', 'have lasting', 'shape development', 'early adversity'],
      sample: 'Experiences in early childhood have lasting effects on intellectual and social development, although supportive relationships later in childhood can soften the effects of early adversity.',
    },
    b: {
      evidence: 'E.g., children adopted before 6 months averaged IQ 102 at age 11 vs. 88 for those adopted after age 2 (Source 1).',
      concepts: ['sensitive period', 'critical period', 'attachment', 'neuroplasticity', 'plasticity', 'neural pruning'],
      conceptDescription: 'E.g., a sensitive or critical period (early environments shape brain and social development most strongly at certain ages), or neuroplasticity.',
      sample: 'Children who left orphanage care before 6 months of age averaged an IQ of 102 at age 11, while those adopted after age 2 averaged 88 (Source 1). This supports my claim because the effect of early deprivation was still visible nine or more years later. This fits the idea of a sensitive period: the first years of life are a time when the developing brain depends heavily on stimulation and caregiving, so missing those experiences early has effects that later care does not fully reverse.',
    },
    c: {
      evidence: 'E.g., secure attachment at age 1 predicted better friendships at 10 and correlated r = .21 with adult relationship satisfaction (Source 2), or ACE-related depression rates (Source 3).',
      concepts: ['secure attachment', 'attachment style', 'adverse childhood experiences', 'resilience', 'diathesis-stress', 'internal working model'],
      conceptDescription: 'A concept different from Part B, e.g., attachment styles (Source 2), or adverse childhood experiences and resilience (Source 3). If Part B used "attachment," Part C must use a different concept.',
      sample: 'Eighteen-year-olds who had faced four or more adverse childhood experiences reported depression at 2.5 times the rate of those with none, but the gap was about half as large for those who had a supportive mentor (Source 3). This shows that early adversity has lasting effects that can still be reduced. Adverse childhood experiences raise the risk of later disorders, while a supportive adult builds resilience, the ability to recover and adapt after hardship, which explains why the mentored group was less affected.',
    },
  }),

  ebq({
    id: 'psych-ebq-4',
    title: 'Physical Activity, Stress, and Mental Health',
    question: 'whether regular physical activity is an effective way to manage stress and improve mental health.',
    sources: `**Source 1 — An eight-week running program**
*Participants:* 220 college students.
*Method:* Students were randomly assigned to jog for 30 minutes three times a week or to do light stretching for 30 minutes three times a week, for eight weeks. Perceived stress was measured with a questionnaire before and after.
*Results:* Perceived stress scores fell by 22 percent in the jogging group and by 6 percent in the stretching group.

---

**Source 2 — A national survey**
*Participants:* 5,400 adults.
*Method:* Adults reported their minutes of moderate physical activity per week and the number of days in the past month their mental health was "not good."
*Results:* Adults who reported at least 150 minutes of activity per week reported 1.4 fewer poor-mental-health days per month than less active adults. The researchers note that people who feel well may also be more likely to exercise.

---

**Source 3 — Exercise before a stressful task**
*Participants:* 80 adults.
*Method:* Participants were randomly assigned to cycle for 20 minutes or sit quietly for 20 minutes. All then gave a speech in front of judges. Heart rate and stress-hormone levels were measured.
*Results:* Compared with the resting group, the cycling group showed a 30 percent smaller rise in stress-hormone levels during the speech and reported less anxiety.`,
    claim: {
      description: 'Takes a position, e.g., "Regular physical activity is an effective way to reduce stress and improve mental health." Restating the question is not a claim.',
      keywords: ['physical activity', 'exercise reduces', 'exercise is', 'exercise helps', 'exercise improves', 'is effective', 'is not effective'],
      sample: 'Regular physical activity is an effective way to reduce stress and improve mental health.',
    },
    b: {
      evidence: 'E.g., perceived stress fell 22 percent with jogging vs. 6 percent with stretching (Source 1).',
      concepts: ['problem-focused', 'emotion-focused', 'coping', 'endorphins', 'general adaptation syndrome', 'resistance'],
      conceptDescription: 'E.g., coping strategies (exercise as a healthy coping strategy), endorphins, or the general adaptation syndrome.',
      sample: 'Students randomly assigned to jog three times a week reduced their perceived stress by 22 percent, compared with 6 percent for students who stretched (Source 1). Because random assignment made the groups comparable, this supports the claim that the activity itself lowered stress. Vigorous exercise releases endorphins, the body\'s natural opioid-like neurotransmitters, which reduce pain and improve mood, helping explain why joggers felt less stressed.',
    },
    c: {
      evidence: 'E.g., cycling before a speech produced a 30 percent smaller rise in stress hormones (Source 3), or active adults reported 1.4 fewer poor-mental-health days per month (Source 2).',
      concepts: ['sympathetic', 'fight-or-flight', 'fight or flight', 'autonomic', 'stress hormones', 'biopsychosocial', 'well-being'],
      conceptDescription: 'A concept different from Part B, e.g., the sympathetic nervous system and fight-or-flight response (Source 3), or subjective well-being from positive psychology (Source 2, noting it is correlational).',
      sample: 'Adults who cycled for 20 minutes before giving a speech showed a 30 percent smaller rise in stress hormones than adults who rested (Source 3). This shows that exercise can blunt the body\'s reaction to a stressor. Giving a speech triggers the sympathetic nervous system\'s fight-or-flight response, and the smaller hormone rise suggests that exercise reduced that physiological stress reaction.',
    },
  }),

  ebq({
    id: 'psych-ebq-5',
    title: 'How Reliable Is Eyewitness Memory?',
    question: 'whether eyewitness memory is a reliable basis for important decisions such as criminal convictions.',
    sources: `**Source 1 — A misleading summary**
*Participants:* 200 adults.
*Method:* Participants watched a video of a store robbery in which the robber had no facial hair. Half then read a news-style summary that said the robber had a mustache; the other half read an accurate summary. A week later, all described the robber.
*Results:* 41 percent of participants who read the misleading summary said the robber had a mustache, compared with 8 percent of those who read the accurate summary.

---

**Source 2 — A weapon in view**
*Participants:* 120 college students.
*Method:* Students watched a short video of a customer approaching a cashier. The customer was holding either a handgun or a wallet. Students later tried to pick the customer out of a six-person photo lineup.
*Results:* 33 percent of students in the handgun condition chose the correct person, compared with 64 percent in the wallet condition. Students in the handgun condition could describe the gun in detail.

---

**Source 3 — Fast, confident identifications**
*Participants:* 300 adults.
*Method:* Participants watched a staged theft and later viewed a lineup. Researchers recorded how quickly each participant made a choice and how confident they were.
*Results:* Participants who chose within 10 seconds and said they were highly confident were correct 88 percent of the time; participants who took longer and were less confident were correct 54 percent of the time.`,
    claim: {
      description: 'Takes a position, e.g., "Eyewitness memory is often unreliable because memories are reconstructed and easily distorted, so it should not be the only basis for a conviction." A qualified claim that uses Source 3 is also acceptable.',
      keywords: ['eyewitness memory is', 'eyewitness testimony is', 'unreliable', 'not reliable', 'is reliable', 'should not'],
      sample: 'Eyewitness memory is too easily distorted to serve as the only basis for a criminal conviction.',
    },
    b: {
      evidence: 'E.g., 41 percent of misled participants reported a mustache that was never there vs. 8 percent of others (Source 1).',
      concepts: ['misinformation effect', 'misinformation', 'reconstructive', 'constructive memory', 'source amnesia', 'misattribution', 'imagination inflation'],
      conceptDescription: 'E.g., the misinformation effect, reconstructive memory, or source amnesia (misattributing where information came from).',
      sample: 'After reading a summary that falsely described a mustache, 41 percent of participants remembered the robber as having one, compared with 8 percent of participants who read an accurate summary (Source 1). This supports my claim because a simple news story changed what people believed they had seen. This is the misinformation effect: misleading information encountered after an event becomes incorporated into the memory of the event, so witnesses who hear news or leading questions can sincerely report details that never happened.',
    },
    c: {
      evidence: 'E.g., only 33 percent identified the customer correctly when a gun was present vs. 64 percent with a wallet (Source 2).',
      concepts: ['selective attention', 'attention', 'encoding failure', 'arousal', 'yerkes-dodson', 'inattentional blindness'],
      conceptDescription: 'A concept different from Part B, e.g., selective attention or encoding failure (attention drawn to the weapon left the face poorly encoded), or high arousal under the Yerkes-Dodson law.',
      sample: 'Only 33 percent of students who saw the customer holding a gun picked the right person from the lineup, compared with 64 percent who saw a wallet, even though the gun group could describe the weapon in detail (Source 2). This shows that the conditions of a real crime can keep witnesses from forming accurate memories of the culprit. Because of selective attention, witnesses focused on the threatening gun, so the face was never fully encoded; this encoding failure means later identifications are unreliable.',
    },
  }),
]

export const apPsychFRQs: PsychFRQ[] = [...aaqFRQs, ...ebqFRQs]

export function getApPsychFRQs(): PsychFRQ[] {
  return apPsychFRQs
}

export function getAAQs(): PsychFRQ[] {
  return aaqFRQs
}

export function getEBQs(): PsychFRQ[] {
  return ebqFRQs
}

/** One AAQ + one EBQ, as on the real exam (14 points, 70 minutes). */
export function generateFullExamFRQs(): {
  aaq: PsychFRQ
  ebq: PsychFRQ
  totalPoints: number
  totalTime: string
} {
  const a = aaqFRQs[Math.floor(Math.random() * aaqFRQs.length)]
  const e = ebqFRQs[Math.floor(Math.random() * ebqFRQs.length)]
  return {
    aaq: a,
    ebq: e,
    totalPoints: a.totalPoints + e.totalPoints,
    totalTime: '70 min',
  }
}
