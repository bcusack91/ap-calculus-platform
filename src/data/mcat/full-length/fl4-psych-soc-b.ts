/**
 * MCAT Full-Length Form 4 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1–3 (fl1-, fl2-, fl3-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL4_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — information passage: Marcia's identity statuses,
  //    Kohlberg's gender constancy / gender schema, cognitive aging
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Identity, Gender, and Thinking From Adolescence Into Late Life',
    passageText:
      'Adolescence was long described as a period of storm and stress, but developmental psychologists now emphasize the work it accomplishes: the construction of an identity that will guide adult choices. Building on Erik Erikson’s account of identity formation, James Marcia interviewed young people about occupation, religious belief, and political values and classified each person along two dimensions. Exploration, which Marcia originally called crisis, refers to a period of actively considering alternatives; commitment refers to a firm investment in a particular choice. Crossing the two dimensions yields four identity statuses. Identity achievement describes people who have explored and then committed. Moratorium describes people who are exploring but have not yet committed. Foreclosure describes people who have committed without exploring, usually by adopting the values or plans of parents or other authorities. Identity diffusion describes people who are neither exploring nor committed. The statuses are not stages that must occur in a fixed order, and a person can occupy different statuses in different domains at the same time. Longitudinal studies show that the proportion of people in achievement rises across the late teens and twenties, and that adults often re-enter moratorium after divorce, job loss, or other disruptions.\n\nGender identity, a person’s internal sense of being male, female, or another gender, has a developmental history of its own. Lawrence Kohlberg proposed that children’s understanding of gender unfolds in three steps. By about age 2 or 3, children can label themselves and others as boys or girls, an achievement Kohlberg called basic gender identity. Around age 4, they understand gender stability: a boy will grow up to be a man. Only around age 5 to 7 do most children achieve gender constancy, the understanding that gender is not changed by superficial alterations such as clothing, hairstyle, or activities. Gender schema theory adds that once children possess a category for gender, they actively sort information by it, attending to and remembering behaviors labeled as appropriate for their own gender and neglecting others. Social learning theorists emphasize a complementary route: children imitate same-gender models and are reinforced for behavior that others regard as gender appropriate.\n\nCognitive change continues throughout adulthood, and its direction depends on the ability measured. The speed with which people perform simple mental operations declines steadily from early adulthood, and many age differences on more complex tasks shrink substantially when speed is statistically controlled. Episodic memory, memory for specific personally experienced events, declines more than semantic memory, the store of general knowledge and word meanings, which is maintained or even grows into late life. Fergus Craik proposed that age deficits are largest when a task demands self-initiated processing and smallest when the environment provides support, such as cues, a familiar context, or the to-be-remembered items themselves. Older adults therefore show larger deficits in free recall than in recognition. Finally, estimates of the size of age-related decline depend on research design. Cross-sectional studies, which compare different age groups at a single time, typically show earlier and steeper declines than longitudinal studies, which follow the same people as they age.',
    questions: [
      {
        question:
          'A 20-year-old college student has declared a major in accounting, the field in which both of her parents work, and says she has never seriously considered another career. Since taking a philosophy course last semester, she has spent many weekends attending services at several different religious congregations, trying to decide what she believes. In Marcia’s framework, her identity is best described as:',
        options: [
          'identity achievement overall, because she has made a firm occupational commitment',
          'identity diffusion overall, because she has not committed in the religious domain',
          'foreclosed in the occupational domain and in moratorium in the religious domain',
          'moratorium overall, because exploring any one domain postpones commitment in all',
        ],
        correctAnswer: 2,
        explanation:
          'Her career commitment was adopted from her parents without exploration, which is foreclosure, while her religious beliefs are being actively explored without commitment, which is moratorium; the passage notes that a person can hold different statuses in different domains at once. Identity achievement requires exploration followed by commitment, and she never considered other careers. Diffusion requires the absence of both exploration and commitment, whereas she is actively exploring religion and firmly committed to a career. Nothing in Marcia’s framework holds that exploration in one domain suspends commitment in the others.',
        skill: '8A identity statuses (Marcia)',
      },
      {
        question:
          'A 4-year-old girl correctly says that she will grow up to be a woman. When her friend puts on a firefighter’s costume and a short wig, the girl announces, “Now you’re a boy.” According to Kohlberg’s account, the girl has most likely:',
        options: [
          'attained gender stability but not yet gender constancy',
          'attained gender constancy but not yet gender stability',
          'not yet formed a gender schema to organize information',
          'not yet learned to label herself and others by gender',
        ],
        correctAnswer: 0,
        explanation:
          'Knowing that she will become a woman shows gender stability across time, but believing that a costume and wig change her friend’s gender shows that she lacks constancy across superficial changes, the typical pattern at age 4. Constancy is the last of the three steps and cannot be present while stability is absent. She clearly sorts people by gender, assigning the costumed friend to a category on the basis of appearance, so a gender schema is present. She uses the labels “woman” and “boy” correctly, so basic gender identity is already in place.',
        skill: '8A gender identity development',
      },
      {
        question:
          'Based on Craik’s account, older adults would be expected to show the SMALLEST deficit relative to young adults on which task?',
        options: [
          'Taking a pill at 3:00 p.m. with no alarm or other reminder',
          'Retelling the plot of a film seen a week earlier without prompts',
          'Listing the names of everyone they met at a party the night before',
          'Passing on a message when the intended recipient walks into the room',
        ],
        correctAnswer: 3,
        explanation:
          'The arrival of the recipient is an environmental cue that prompts the intended action, so this task requires little self-initiated processing and should show the smallest age deficit. Taking a pill at a set time with no reminder requires the person to monitor the time and initiate the action unaided, which Craik’s account predicts older adults will find especially difficult. Retelling a film without prompts and listing the names of new acquaintances are both forms of free recall, which provide no retrieval support and show larger age deficits.',
        skill: '6B cognitive aging: environmental support',
      },
      {
        question:
          'Which factor most likely contributes to the difference between cross-sectional and longitudinal estimates of cognitive aging described in the passage?',
        options: [
          'Longitudinal studies measure only semantic memory, which does not decline with age',
          'Older cohorts in cross-sectional samples received less schooling than younger ones',
          'Cross-sectional studies retest the same people, who improve with repeated practice',
          'Longitudinal studies compare different people, whose abilities differ from the start',
        ],
        correctAnswer: 1,
        explanation:
          'A cross-sectional study confounds age with cohort: older participants grew up with less education and different experiences than younger ones, so part of the apparent age difference is a cohort effect, which makes cross-sectional declines look steeper. Longitudinal studies can measure any ability, including episodic memory and speed, so they are not limited to semantic memory. Retesting the same people is the defining feature of longitudinal, not cross-sectional, designs. Comparing different people at one time describes the cross-sectional design, not the longitudinal one.',
        skill: '6B research design: cohort effects',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — experiment/panel study, chart: intergenerational
  //    educational mobility; structural vs exchange; absolute vs relative
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'College Completion Across Five Birth Cohorts',
    passageText:
      'Sociologists study social mobility, the movement of individuals or groups between positions in a system of stratification. Intragenerational mobility refers to change within a single person’s lifetime, such as a clerk who later becomes a manager; intergenerational mobility compares a person’s position with that of his or her parents. Movement can be vertical, up or down a hierarchy, or horizontal, between positions of similar rank. Researchers also distinguish two sources of intergenerational mobility. Structural mobility results from changes in the economy or in social institutions that alter the number of positions available at each level, so that many people move up (or down) largely regardless of their own efforts. Exchange mobility, sometimes called circulation mobility, occurs when some people rise while a comparable number of others fall, leaving the overall distribution of positions unchanged.\n\nBecause educational credentials strongly shape occupational attainment in industrialized societies, many studies of mobility focus on education. Two quantities are commonly reported. Absolute mobility is the share of children who attain more, or less, than their parents did. Relative mobility concerns the strength of the link between parents’ and children’s positions: how much a child’s chances depend on where the child started, whatever the total number of positions available. Functionalist accounts expect that as schooling expands and admission becomes more competitive on merit, the link between family background and attainment will weaken. Conflict accounts expect advantaged families to use their resources to keep their children ahead, so that the link persists even as overall attainment rises.\n\nResearchers analyzed a national household panel that has followed the same families since the 1960s. For children born in 1950, 1960, 1970, 1980, and 1990, they recorded whether each child had earned a four-year college degree by age 30 and classified each child by whether at least one parent held such a degree. Over the same period, the number of places in the country’s four-year colleges more than tripled, and the share of all jobs listing a four-year degree as a requirement rose from about 15% to about 40%. Figure 1 shows the percentage of children in each birth cohort who completed a degree by age 30, separately for children with and without a degree-holding parent.\n\nThe researchers also examined adult occupations. Among degree holders born in 1950, 72% worked in professional or managerial occupations at age 35; among degree holders born in 1980, the corresponding figure was 55%. Finally, the researchers noted that the panel had lost about a quarter of its original families by the time the 1990 cohort reached age 30, and that the families who left the panel had lower incomes, on average, than those who remained.',
    chart: {
      title: 'Figure 1. Percentage of children completing a four-year degree by age 30, by birth cohort and parental education',
      kind: 'line',
      xLabel: 'Birth cohort',
      yLabel: 'Completed degree by age 30',
      yUnit: '%',
      xValues: [1950, 1960, 1970, 1980, 1990],
      yValues: [40, 48, 56, 62, 66],
      seriesLabel: 'At least one parent with a degree',
      comparisonSeries: [{ label: 'Neither parent with a degree', yValues: [8, 12, 16, 20, 24] }],
    },
    questions: [
      {
        question:
          'According to Figure 1, from the 1950 to the 1990 birth cohort, the difference in degree completion between children with and without a degree-holding parent:',
        options: [
          'grew in percentage points while the ratio of the two groups’ rates fell',
          'shrank in percentage points while the ratio of the two groups’ rates rose',
          'grew in percentage points and in the ratio of the two groups’ rates',
          'held steady in percentage points while the ratio of the two groups’ rates fell',
        ],
        correctAnswer: 0,
        explanation:
          'The gap was 40 − 8 = 32 points for the 1950 cohort and 66 − 24 = 42 points for the 1990 cohort, so it grew in absolute terms, while the ratio fell from 40/8 = 5 to 66/24 ≈ 2.75. The gap in points did not shrink or hold steady; it widened by 10 points. The ratio did not grow; children without a degree-holding parent tripled their rate while the others’ rate rose by about two-thirds, so their relative disadvantage narrowed.',
        skill: '10A data interpretation: absolute vs relative gaps',
      },
      {
        question:
          'Which feature of the results provides the clearest evidence that the change in degree completion reflects structural rather than exchange mobility?',
        options: [
          'Completion rose among children whose parents lacked degrees',
          'Completion rose in both parental-education groups at the same time',
          'The gap between the two groups widened in percentage points',
          'The ratio of the two groups’ completion rates declined steadily',
        ],
        correctAnswer: 1,
        explanation:
          'Exchange mobility leaves the number of positions unchanged, so some people’s gains must be offset by others’ losses; when completion rises in both groups at once, total attainment has expanded, which is the signature of structural mobility, here driven by the growth in college places. A rise among children of non-graduates alone could in principle be offset by a fall among children of graduates, so by itself it cannot rule out exchange. A widening point gap and a falling ratio describe the relation between the groups, which bears on relative mobility rather than on whether the total number of positions grew.',
        skill: '10A structural vs exchange mobility',
      },
      {
        question:
          'Which aspect of the study most threatens the accuracy of the 1990 value for children without a degree-holding parent?',
        options: [
          'Classifying children by the more educated parent, ignoring the other parent',
          'Measuring completion at age 30, which omits children who never enroll',
          'Losing lower-income families from the panel, likely inflating the rate',
          'Tripling college places, which makes later degrees worth less to employers',
        ],
        correctAnswer: 2,
        explanation:
          'Families who left the panel had lower incomes, and lower-income children are less likely to complete college, so the remaining sample for the 1990 cohort is probably advantaged and its completion rate overstated; this selective attrition bears most heavily on the latest cohort and on children of non-graduates. Classifying by the more educated parent is a consistent rule applied to every cohort and does not bias one value. Children who never enroll are counted as non-completers, not omitted. The value of a degree to employers concerns the occupational payoff of degrees, not the accuracy of the completion rate.',
        skill: '10A research design: selective attrition',
      },
      {
        question:
          'Considered together with the change in jobs requiring a degree, the occupational data for degree holders best support which conclusion?',
        options: [
          'Upward exchange mobility replaced structural mobility for later cohorts',
          'Degree holders born in 1980 experienced downward intragenerational mobility',
          'Relative mobility declined for children without a degree-holding parent',
          'A degree conferred less occupational advantage as degrees became common',
        ],
        correctAnswer: 3,
        explanation:
          'As degrees became far more common and more jobs began listing them as requirements, the share of degree holders reaching professional or managerial jobs fell from 72% to 55%, indicating that a degree came to buy less occupational standing, a pattern often called credential inflation. Comparing people born in different years is a comparison across cohorts, not a change within anyone’s lifetime, so it does not show intragenerational mobility. The occupational data are not broken down by parental education, and Figure 1 shows the ratio between the groups narrowing, so they cannot show a decline in relative mobility. Nothing in these data shows the total number of positions holding constant, which exchange mobility requires.',
        skill: '10A credential inflation and occupational attainment',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. DISORDERS — information passage: somatic symptom & related,
  //    dissociative, personality-disorder clusters; biomedical vs
  //    biopsychosocial models
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'When Distress Does Not Match the Body: Somatic, Dissociative, and Personality Disorders',
    passageText:
      'Few patients test the assumptions of medical training as sharply as those whose distress does not map neatly onto tissue damage. The biomedical model, which has guided Western medicine since the nineteenth century, holds that illness results from identifiable biological abnormalities such as pathogens, lesions, or biochemical imbalances, and that treatment should correct the abnormality. The biopsychosocial model, proposed by the psychiatrist George Engel in 1977, argues that biological, psychological, and social factors interact in causing, maintaining, and relieving illness, so that a full account of a patient’s condition must include beliefs, emotions, behavior, relationships, and circumstances as well as physiology.\n\nSeveral categories in the fifth edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-5) illustrate the stakes of the choice. In somatic symptom disorder, a person has one or more bodily symptoms that are distressing or disruptive, together with excessive thoughts, feelings, or behaviors related to them, such as persistent worry about their seriousness or a great deal of time devoted to them. The symptoms may or may not have an identified medical cause; what defines the disorder is the disproportionate response. In illness anxiety disorder, by contrast, somatic symptoms are absent or mild, and the central feature is preoccupation with having or acquiring a serious illness. In conversion disorder, also called functional neurological symptom disorder, a person has symptoms of altered motor or sensory function, such as weakness, abnormal movements, or loss of sensation, and clinical findings show that the symptoms are incompatible with recognized neurological disease. None of these conditions implies that the symptoms are feigned. When symptoms are deliberately produced or faked, the diagnosis is factitious disorder if the person seeks no obvious external reward, and malingering, which is not considered a mental disorder, if the goal is an external incentive such as money or avoiding work.\n\nDissociative disorders involve disruptions in the normally integrated functions of consciousness, memory, identity, and perception. In dissociative amnesia, a person cannot recall important autobiographical information, usually of a traumatic or stressful nature, to a degree beyond ordinary forgetting; in some cases the person travels purposefully or wanders in bewilderment, a feature called dissociative fugue. In depersonalization/derealization disorder, a person repeatedly feels detached from his or her own mind or body, or experiences the surroundings as unreal, while reality testing remains intact. Dissociative identity disorder involves two or more distinct personality states and recurrent gaps in memory. Its origin is contested. The trauma model holds that the disorder develops as a defense against severe, repeated abuse in childhood. The sociocognitive model holds that it is shaped largely by suggestion, including cues from therapists and cultural portrayals of the disorder.\n\nPersonality disorders are enduring patterns of inner experience and behavior that deviate markedly from cultural expectations, are inflexible and pervasive, begin by adolescence or early adulthood, and cause distress or impairment. DSM-5 groups them into three clusters: Cluster A, the odd or eccentric disorders (paranoid, schizoid, and schizotypal); Cluster B, the dramatic, emotional, or erratic disorders (antisocial, borderline, histrionic, and narcissistic); and Cluster C, the anxious or fearful disorders (avoidant, dependent, and obsessive-compulsive).',
    questions: [
      {
        question:
          'A 34-year-old man has no physical complaints, but since a coworker was diagnosed with a brain tumor he has spent hours each day reading about tumors, has requested three brain scans that were all normal, and remains convinced that he has one. Which diagnosis best fits this presentation?',
        options: ['somatic symptom disorder', 'conversion disorder', 'factitious disorder', 'illness anxiety disorder'],
        correctAnswer: 3,
        explanation:
          'The man has no bodily symptoms at all, and his distress centers on the conviction that he has a serious illness despite normal findings, which is the defining pattern of illness anxiety disorder. Somatic symptom disorder requires distressing bodily symptoms to which the person responds excessively, and he has none. Conversion disorder requires altered motor or sensory function, which is absent. Factitious disorder requires deliberately producing or faking symptoms, whereas he sincerely believes he is ill and has fabricated nothing.',
        skill: '7A somatic symptom and related disorders',
      },
      {
        question:
          'A woman secretly injects herself with insulin, repeatedly producing dangerously low blood sugar. She hides the injections from her physicians and gains nothing from her hospital admissions except medical care and attention. Which classification is most appropriate?',
        options: [
          'malingering, because she deliberately produces her symptoms',
          'factitious disorder, because she causes illness with no outside gain',
          'conversion disorder, because her illness lacks a recognized cause',
          'somatic symptom disorder, because she is preoccupied with her health',
        ],
        correctAnswer: 1,
        explanation:
          'Deliberately producing illness while concealing it, with no external incentive beyond being treated as a patient, is factitious disorder. Malingering also involves deliberate production of symptoms, but it requires an external incentive such as money or escape from work, and none is present. Conversion disorder involves symptoms that are not intentionally produced, whereas hers are self-induced. Somatic symptom disorder involves genuine symptoms and an excessive response to them, not fabricated illness.',
        skill: '7A factitious disorder vs malingering',
      },
      {
        question:
          'Which of the following patients would most likely be diagnosed with a Cluster B personality disorder?\n\nI. A man who since his teens has repeatedly lied, stolen, and shown no remorse after injuring others\nII. A woman with intense, unstable relationships, a shifting self-image, and recurrent impulsive self-harm\nIII. A man who cannot make everyday decisions without reassurance and dreads being left to care for himself',
        options: ['I and II only', 'I and III only', 'II and III only', 'I, II, and III'],
        correctAnswer: 0,
        explanation:
          'Patient I shows a long-standing disregard for the rights of others with deceit and lack of remorse, the pattern of antisocial personality disorder, and patient II shows the instability of relationships, identity, and impulse control that characterizes borderline personality disorder; both are Cluster B disorders. Patient III shows an excessive need to be taken care of and difficulty deciding without reassurance, which is dependent personality disorder, a Cluster C (anxious or fearful) disorder. Any option that includes III is therefore wrong, and any that omits I or II is incomplete.',
        skill: '7A personality disorder clusters',
      },
      {
        question:
          'Which finding would most strongly support the sociocognitive model over the trauma model of dissociative identity disorder?',
        options: [
          'Patients with the disorder report childhood abuse far more often than other psychiatric patients do',
          'Different personality states within a patient show different patterns of brain activity on imaging',
          'Diagnoses rose sharply after a popular film about the disorder and came mostly from a few therapists',
          'Patients’ memory gaps usually cover periods during which another personality state was in control',
        ],
        correctAnswer: 2,
        explanation:
          'If diagnoses surge after a cultural portrayal and cluster among a handful of clinicians, suggestion from media and from therapists becomes a plausible cause, which is what the sociocognitive model predicts and the trauma model does not. A high rate of reported childhood abuse is the pattern the trauma model predicts. Differences in brain activity between personality states show that the states differ but not how they arose, so they do not favor either model. Memory gaps tied to alternate states are part of the disorder’s definition and are expected under both accounts.',
        skill: '7A dissociative identity disorder: competing models',
      },
      {
        question:
          'A patient with somatic symptom disorder has had chronic abdominal pain for two years, and repeated examinations have found no medical cause. A physician who adopts the biopsychosocial model would be most likely to:',
        options: [
          'order more imaging, reasoning that an undetected lesion must explain the pain',
          'refer the patient to psychotherapy alone, reasoning that the pain is imagined',
          'prescribe an antidepressant, reasoning that a chemical imbalance causes the pain',
          'combine medical care with attention to the patient’s stress, beliefs, and family',
        ],
        correctAnswer: 3,
        explanation:
          'The biopsychosocial model treats illness as the product of interacting biological, psychological, and social factors, so the physician would continue medical care while also addressing stress, the patient’s beliefs about the pain, and the responses of the people around the patient. Searching for a hidden lesion and attributing the pain to a chemical imbalance both locate the cause in a single biological abnormality, which is the biomedical model. Treating the pain as purely psychological and imagined replaces one single-cause account with another and ignores the biological contribution the model retains.',
        skill: '7A biomedical vs biopsychosocial models',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — experiment, table: contact hypothesis conditions,
  //    superordinate goals, equal vs unequal status, subtyping
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Contact, Competition, and Cooperation Between Rival Schools',
    passageText:
      'Gordon Allport’s contact hypothesis proposed that interaction between members of different groups reduces prejudice, but only under certain conditions: the groups should have equal status within the situation, pursue common goals, depend on one another’s cooperation to reach those goals, and have the support of authorities or prevailing norms. Muzafer Sherif’s Robbers Cave study illustrated both halves of the claim. Boys at a summer camp who had been divided into two groups became openly hostile after a series of contests in which one group’s win was the other’s loss, and merely bringing the groups together for meals and films did not reduce the hostility. Only when the boys faced problems that neither group could solve alone, which Sherif called superordinate goals, did hostility decline.\n\nTo test whether these conditions matter in a contemporary setting, researchers ran a two-week residential science program for students aged 13 to 15 from two neighboring secondary schools with a long history of athletic rivalry. On the first day, each student rated students from the other school, as a group, on a 0–100 feeling thermometer on which higher numbers indicate warmer feelings. The 240 participants were randomly assigned to one of four conditions, with 60 per condition and equal numbers from each school.\n\nIn the mere-contact condition, students from both schools lived in the same dormitory and shared meals and recreation, but science activities were done in single-school teams. In the competition condition, the same single-school teams competed against teams from the other school for prizes, and scores were posted daily. In the equal-status cooperation condition, mixed teams of four, two from each school, built a water-filtration device that could meet the program’s standard only if every member contributed a component that he or she alone had been trained to make, and the team shared a single grade. The unequal-status cooperation condition used the same mixed teams and the same task, but in each team the counselors appointed the two members from one school, chosen by a coin flip, as team leaders who assigned the work and presented the results; the other two members followed their instructions.\n\nOn the last day of the program, students completed the thermometer again. They also listed up to five friends they had made during the program, and the researchers recorded the percentage of students who named at least one friend from the other school. Six months later, a researcher who did not know the students’ conditions administered the thermometer a third time at the students’ own schools. Table 1 shows the results.\n\nIn interviews at the end of the program, many students in the unequal-status condition who had named a friend from the other school described that friend as “not like the rest of them.” Such remarks were rare in the equal-status condition, where students more often described the program as a time when “we were all on the same side.”',
    figure:
      '**Table 1. Mean feeling-thermometer ratings of students from the other school (0–100) and cross-school friendships, by condition (n = 60 per condition)**\n\n| Condition | First day | Last day | Six months | Named a cross-school friend (%) |\n|---|---|---|---|---|\n| Mere contact | 44 | 46 | 45 | 15 |\n| Competition | 45 | 31 | 36 | 3 |\n| Equal-status cooperation | 44 | 67 | 62 | 58 |\n| Unequal-status cooperation | 45 | 52 | 47 | 30 |',
    questions: [
      {
        question: 'Which conclusion is best supported by Table 1?',
        options: [
          'Contact of any kind between the schools produced a lasting rise in thermometer ratings',
          'Cooperation raised ratings most, and most durably, when teammates held equal status',
          'Unequal-status teams formed cross-school friendships about as often as equal-status teams',
          'Competition lowered ratings by more points than equal-status cooperation raised them',
        ],
        correctAnswer: 1,
        explanation:
          'Equal-status cooperation raised ratings by 23 points by the last day and still by 18 points after six months, whereas unequal-status cooperation raised them by 7 points and only 2 points at six months. Contact did not uniformly help: mere contact changed ratings by 1 to 2 points, and competition lowered them. Cross-school friendships were nearly twice as common with equal status (58%) as with unequal status (30%). Competition lowered ratings by 14 points, fewer than the 23 points that equal-status cooperation added.',
        skill: '8B data interpretation: contact conditions',
      },
      {
        question: 'The change in ratings in the competition condition is most directly predicted by:',
        options: [
          'the mere-exposure effect, since repeated contact increases liking for others',
          'the just-world hypothesis, since students blamed the losing teams for losing',
          'realistic conflict theory, since the groups competed for prizes only one could win',
          'cognitive dissonance, since students justified the effort they spent to win',
        ],
        correctAnswer: 2,
        explanation:
          'Realistic conflict theory, the account Sherif’s work supports, holds that competition between groups for scarce resources that only one side can obtain generates hostility, matching the 14-point drop when single-school teams competed for prizes. The mere-exposure effect predicts that familiarity increases liking, the opposite of what happened. The just-world hypothesis concerns blaming victims for their misfortune and would not predict hostility from both schools regardless of who lost. Dissonance over effort spent would enhance attachment to one’s own team’s goals but does not explain derogation of the rival school.',
        skill: '8B realistic conflict theory',
      },
      {
        question:
          'The researchers used a coin flip to decide which school supplied the leaders of each unequal-status team. This procedure was most likely intended to:',
        options: [
          'keep any preexisting difference between the schools from being confounded with leadership',
          'ensure that the students with the strongest science skills were chosen as team leaders',
          'make the leaders’ higher status seem legitimate to the teammates who followed them',
          'equalize the number of cross-school friendships that each team could possibly form',
        ],
        correctAnswer: 0,
        explanation:
          'If one school always supplied the leaders, any effect of holding or lacking the leader role would be inseparable from differences between the schools, such as their initial attitudes or academic preparation; randomizing leadership by team balances such differences across the two roles. A coin flip is blind to skill, so it cannot select the most capable students. Nothing about a random draw makes the status difference seem more deserved. The number of possible cross-school friendships is fixed by team composition, two from each school, not by who leads.',
        skill: '8B research design: counterbalancing',
      },
      {
        question:
          'A middle-school teacher wants to reduce tension between two ethnic groups in her class. Based on the study’s results, which classroom practice would be most effective?',
        options: [
          'Seating students from both groups at shared tables during free reading periods',
          'Holding weekly quiz contests between teams, each drawn from a single group',
          'Pairing students so that stronger readers from one group tutor the other group',
          'Giving each member of a mixed group one piece of a lesson the group needs',
        ],
        correctAnswer: 3,
        explanation:
          'Giving each member of a mixed group an indispensable piece of a shared task, as in the jigsaw classroom, reproduces the equal-status cooperation condition, with interdependence, a common goal, and equal standing, which produced the largest and most durable gains. Shared seating without a joint task corresponds to mere contact, which changed ratings very little. Contests between single-group teams correspond to the competition condition, which worsened ratings. Tutoring by one group places members of the other group in a subordinate role, like the unequal-status condition, which produced only small, short-lived gains.',
        skill: '8B contact hypothesis: superordinate goals',
      },
      {
        question:
          'The interview remarks made by students in the unequal-status condition best help explain why, in that condition:',
        options: [
          'more students named a cross-school friend than in the mere-contact condition',
          'last-day ratings fell below the last-day ratings in the competition condition',
          'friendships barely raised lasting ratings of the other school as a group',
          'first-day ratings were similar to the first-day ratings in other conditions',
        ],
        correctAnswer: 2,
        explanation:
          'Describing a friend as an exception is subtyping: the liked individual is set apart from the category, so positive feelings do not transfer to the group, which fits the unequal-status condition’s 30% friendship rate alongside a six-month rating only 2 points above baseline. The remarks describe friends as exceptions, so they cannot explain why friendships were more common than under mere contact. Last-day ratings in the unequal-status condition (52) were higher, not lower, than in the competition condition (31). Similar first-day ratings reflect random assignment, not anything students said at the end of the program.',
        skill: '8B subtyping and the generalization of contact',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — information passage: race as a social construct,
  //     racialization, racial formation, symbolic ethnicity, assimilation /
  //     amalgamation / pluralism, segmented assimilation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'How Racial and Ethnic Boundaries Are Drawn and Redrawn',
    passageText:
      'Sociologists distinguish race from ethnicity while recognizing that the two overlap in everyday use. Race refers to categories that a society treats as based on inherited physical characteristics such as skin color; ethnicity refers to shared cultural heritage, including language, religion, ancestry, cuisine, and customs. Although many people assume that racial categories reflect deep biological divisions, most human genetic variation occurs within any socially defined racial group rather than between groups, and the physical traits used to assign race vary gradually across geographic space rather than falling into discrete clusters. For these reasons, sociologists describe race as a social construct: a category whose boundaries and meanings are created and maintained by social practices, even though the consequences of being assigned to a category are real.\n\nRacialization is the process by which a group comes to be defined in racial terms, so that characteristics once understood as matters of religion, nationality, or culture come to be seen as inherited and fixed. Michael Omi and Howard Winant’s theory of racial formation emphasizes that such processes are political. In their account, racial categories are created, inhabited, transformed, and destroyed through racial projects: efforts by governments, movements, and institutions to interpret racial meanings and to organize the distribution of resources along racial lines.\n\nEthnic identity also varies in how much it shapes daily life. For the descendants of immigrants several generations removed, ethnicity may become largely voluntary. Herbert Gans used the term symbolic ethnicity for an attachment to an ancestral heritage that is expressed through occasional festivals, foods, or emblems but that places few demands on where a person lives, whom the person marries, or how the person earns a living. Such a choice is more available to groups whose ancestry is not visibly marked than to those whom others continue to classify by appearance.\n\nWhen groups come into sustained contact, several patterns of relations may follow. In assimilation, a minority group gradually adopts the culture of the dominant group and loses its distinctiveness, a pattern sometimes summarized as A + B = A. Milton Gordon distinguished cultural assimilation, the adoption of the dominant group’s language, values, and behavior, from structural assimilation, the entry of minority members into the dominant group’s schools, workplaces, neighborhoods, clubs, and social networks, and argued that the first can occur without the second. In amalgamation, groups intermarry and blend into a new group and culture unlike any of the originals (A + B = C). In pluralism, groups retain their distinct cultures while participating as equals in shared political and economic institutions (A + B = A + B). The classic straight-line model predicted that each generation of immigrants’ descendants would become both more assimilated and more prosperous than the last. The later theory of segmented assimilation holds that outcomes depend on the resources a group brings and the reception it encounters: some descendants enter the middle class, some are absorbed into disadvantaged segments of society, and some advance economically while deliberately preserving close ties to their ethnic community.',
    questions: [
      {
        question:
          'For centuries, a religious minority in a certain country was described in terms of its beliefs and customs. After a period of political conflict, newspapers and laws began to describe its members as sharing distinctive inherited traits, and people who had left the religion continued to be classified as members. This change best exemplifies:',
        options: ['racialization', 'symbolic ethnicity', 'cultural assimilation', 'amalgamation'],
        correctAnswer: 0,
        explanation:
          'A group once defined by religion came to be treated as possessing fixed, inherited traits, so that even those who abandoned the religion remained in the category; that transformation of a cultural category into a racial one is racialization. Symbolic ethnicity is a voluntary, low-cost attachment to heritage, whereas this classification was imposed and could not be shed. Cultural assimilation is a minority’s adoption of the dominant culture, which is not described. Amalgamation involves groups blending through intermarriage into a new group, the opposite of the sharpened boundary here.',
        skill: '9B racialization',
      },
      {
        question:
          'Second-generation children of immigrants in a city speak the dominant language without an accent and share the tastes and values of their classmates, yet as adults they rarely enter the professional networks, private clubs, or neighborhoods of the dominant group. In Gordon’s terms, this group has experienced:',
        options: [
          'structural assimilation without cultural assimilation',
          'amalgamation without any structural assimilation',
          'cultural assimilation without structural assimilation',
          'pluralism without any cultural assimilation',
        ],
        correctAnswer: 2,
        explanation:
          'Adopting the dominant group’s language, tastes, and values is cultural assimilation, while continued exclusion from its networks, clubs, and neighborhoods means structural assimilation has not followed, which is exactly the gap Gordon said could open between the two. The reverse combination misreads which dimension has occurred. Amalgamation requires intermarriage producing a new blended culture, which is not described. Pluralism would involve retaining a distinct culture, whereas these children have largely adopted the dominant one.',
        skill: '9B cultural vs structural assimilation',
      },
      {
        question:
          'Which finding would most directly support the central claim of racial formation theory as described in the passage?',
        options: [
          'Skin color and other visible traits vary gradually across geographic regions',
          'A national census redrew its racial categories after lobbying by advocacy groups',
          'Descendants of immigrants celebrate ancestral holidays yet marry outside the group',
          'Most human genetic variation lies within, not between, socially defined races',
        ],
        correctAnswer: 1,
        explanation:
          'Racial formation theory holds that racial categories are made and remade through political projects of governments and movements; a census redefining its categories in response to organized lobbying shows exactly such a project changing the categories themselves. Gradual variation in visible traits and the distribution of genetic variation support the general claim that race is not a biological division, but neither shows that political processes shape the categories. Celebrating ancestral holidays while marrying out describes symbolic ethnicity rather than the political construction of race.',
        skill: '9B race as a social construct: racial formation',
      },
      {
        question:
          'A daughter of immigrants speaks both her parents’ language and the dominant language, attends services at an ethnic congregation, and has become a hospital pharmacist. Her case most directly challenges the assumption that:',
        options: [
          'racial categories rest on physical traits rather than on shared culture',
          'cultural assimilation can occur without any structural assimilation',
          'symbolic ethnicity is most available to groups without visible markers',
          'economic advancement requires weakening ties to one’s ethnic community',
        ],
        correctAnswer: 3,
        explanation:
          'The straight-line model linked prosperity to fuller assimilation, implying that getting ahead means leaving ethnic ties behind; a woman who has entered a professional occupation while keeping her ethnic language and congregation shows that advancement and retained ties can go together, the path segmented assimilation describes. The distinction between race and ethnicity is not at issue in her case. Her case does not bear on whether cultural assimilation can precede structural assimilation, since she has entered a professional workplace. The availability of symbolic ethnicity to visibly unmarked groups concerns a different question, and her active ethnic ties are more than symbolic.',
        skill: '9B segmented assimilation',
      },
    ],
  },
]

export const FL4_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'After striking her shin on a table, a woman rubs the spot vigorously and reports that the pain eases. According to the gate-control theory of pain, rubbing helps because:',
    options: [
      'rubbing depletes substance P from the nociceptors that detected the injury',
      'input from large touch fibers blocks pain transmission in the spinal cord',
      'rubbing releases endorphins that act on the injured tissue to silence nociceptors',
      'the brain habituates to pain signals once a second stimulus competes with them',
    ],
    correctAnswer: 1,
    explanation:
      'Gate-control theory holds that activity in large-diameter touch and pressure fibers excites inhibitory interneurons in the dorsal horn of the spinal cord, closing the “gate” on signals from small pain fibers before they ascend to the brain. Rubbing does not deplete substance P, the transmitter released by nociceptors; depletion occurs with agents such as capsaicin. Endorphins act mainly on opioid receptors in the central nervous system, not on the injured tissue. Habituation is a gradual decline in response to a repeated stimulus, whereas the relief from rubbing is immediate and depends on a second, different input.',
    skill: '6A gate-control theory of pain',
  },
  {
    id: 'fl4-ps-b-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'To teach a child with a developmental disability to wash his hands, a therapist divides the task into steps: turning on the water, wetting the hands, applying soap, rinsing, and drying. She first reinforces only drying, then rinsing followed by drying, and so on backward until the child performs the whole sequence for a single reward at the end. What distinguishes this procedure from shaping?',
    options: [
      'It relies on negative reinforcement rather than on positive reinforcement',
      'It reinforces successive approximations to a single target response',
      'It uses a variable-ratio schedule rather than continuous reinforcement',
      'It links a sequence of distinct responses rather than refining one response',
    ],
    correctAnswer: 3,
    explanation:
      'The therapist is using backward chaining: separate responses are linked so that each step sets the occasion for the next and the whole sequence ends in reinforcement, whereas shaping reinforces successive approximations to one target behavior. Reinforcing approximations to a single response is the definition of shaping itself, not what sets this procedure apart. The reward is added, so the procedure uses positive reinforcement. Reinforcement is delivered each time the chain is completed, not after an unpredictable number of responses.',
    skill: '7C shaping and chaining',
  },
  {
    id: 'fl4-ps-b-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A laboratory technician has fixed a jammed centrifuge several times by restarting it. When the machine stops again, he restarts it over and over and fails to notice a warning light indicating that the rotor is unbalanced. His difficulty is best described as:',
    options: ['mental set', 'functional fixedness', 'belief perseverance', 'confirmation bias'],
    correctAnswer: 0,
    explanation:
      'A mental set is the tendency to keep applying a strategy that has worked before even when a new problem calls for a different approach, which is why the technician keeps restarting the machine. Functional fixedness is the inability to see an object as usable for anything other than its customary function, which is not at issue. Belief perseverance is holding a belief after the evidence for it has been discredited, whereas he never processed the contrary evidence. Confirmation bias is seeking or favoring evidence that supports a hypothesis, and he is not evaluating evidence at all.',
    skill: '6B problem solving: mental set',
  },
  {
    id: 'fl4-ps-b-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question: 'A slow-growing tumor confined to the hypothalamus would be LEAST likely to directly disrupt:',
    options: [
      'the daily cycle of sleep and wakefulness',
      'the regulation of body temperature',
      'the coordination of rapid skilled movements',
      'the balance between thirst and urine output',
    ],
    correctAnswer: 2,
    explanation:
      'Coordination of rapid, skilled movement depends mainly on the cerebellum and motor cortex, not the hypothalamus. The hypothalamus contains the suprachiasmatic nucleus, which sets circadian sleep–wake rhythms; it serves as the body’s thermostat; and it detects blood osmolarity, drives thirst, and produces antidiuretic hormone, which controls urine output. A hypothalamic tumor could therefore disrupt each of the other three functions directly.',
    skill: '7A hypothalamic functions',
  },
  {
    id: 'fl4-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Over two decades, the share of adults in a country who name a religious denomination falls only from 82% to 78%, while the share who attend services at least monthly falls from 55% to 30% and the share who pray daily drops by a similar amount. This pattern is most accurately described as:',
    options: [
      'a decline in religiosity that is steeper than the decline in religious affiliation',
      'a shift in membership from established churches toward sects and new movements',
      'a rise in fundamentalism as believers reject the practices of their congregations',
      'a decline in religious affiliation that is steeper than the decline in religiosity',
    ],
    correctAnswer: 0,
    explanation:
      'Affiliation, identifying with a denomination, barely changed, while religiosity, the intensity of religious belief and practice shown in attendance and prayer, fell sharply. The reverse description inverts the two measures. Movement toward sects would show up as changes in which groups people name, not as lower participation among those still affiliated. Fundamentalism involves a stricter return to traditional practice, which would raise rather than lower attendance and prayer.',
    skill: '9B religiosity vs religious affiliation',
  },
  {
    id: 'fl4-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a certain region, neighborhoods near hazardous-waste facilities have larger shares of low-income and minority residents than other neighborhoods. Which additional information would best help determine whether facilities were placed in such neighborhoods, rather than such residents moving in after the facilities lowered housing costs?',
    options: [
      'Current asthma rates among residents living near and far from each facility',
      'The number of facilities built in the region in each decade since 1970',
      'Residents’ current attitudes toward the facilities and local government',
      'Each neighborhood’s demographic makeup in the year its facility was sited',
    ],
    correctAnswer: 3,
    explanation:
      'The two explanations differ in timing: if the neighborhoods were already disproportionately low-income and minority when the facilities were sited, siting decisions targeted them, a core environmental-justice concern, whereas if they became so only afterward, market-driven moves followed the facilities. Asthma rates bear on the health consequences of exposure, not on the order of events. The number of facilities built per decade says nothing about who lived nearby at the time. Current attitudes cannot reveal the demographic history of the neighborhoods.',
    skill: '10A environmental justice: research design',
  },
  {
    id: 'fl4-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Several years after leaving the police force to teach high school, a man still introduces himself as a “former cop,” is often asked by students about police work, and finds that colleagues expect him to handle disciplinary problems. His experience is best described as part of:',
    options: [
      'role strain, since the teaching role makes demands he cannot reconcile',
      'role exit, since a role he has left still shapes his identity and treatment',
      'role conflict, since he holds the police and teaching roles simultaneously',
      'anticipatory socialization, since he is preparing to return to police work',
    ],
    correctAnswer: 1,
    explanation:
      'Role exit is the process of disengaging from a role central to one’s identity, and its final stage involves building an ex-role identity in which the former role continues to shape how the person sees himself and how others treat him, as when colleagues and students still respond to him as a former officer. Role strain involves conflicting demands within a single role, which is not described. Role conflict requires holding two roles at once, but he no longer holds the police role. Anticipatory socialization prepares a person for a role he expects to enter, and nothing suggests he plans to return.',
    skill: '9A role exit',
  },
]
