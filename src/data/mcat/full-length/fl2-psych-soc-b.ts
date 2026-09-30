/**
 * MCAT Full-Length Form 2 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Form 1 (fl1-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — experiment, table: Piaget conservation vs Vygotsky ZPD
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Conservation, Scaffolding, and the Limits of Assistance',
    passageText:
      'Jean Piaget proposed that children construct understanding through a fixed sequence of stages, each defined by the mental operations available to the child. In the preoperational stage (roughly ages 2 to 7), thinking is dominated by appearances: a child who watches water poured from a short, wide glass into a tall, narrow one typically reports that the tall glass now holds more. Piaget attributed this failure of conservation to centration, the tendency to focus on a single perceptual dimension such as height, and to the absence of reversibility, the ability to mentally undo a transformation. He argued that conservation emerges with the concrete operational stage (roughly ages 7 to 11) and that instruction cannot produce it before the child is developmentally ready.\n\nLev Vygotsky placed less weight on internal maturation and more on social interaction. He distinguished what a child can accomplish alone from what the child can accomplish with guidance from a more capable partner, calling the gap between the two the zone of proximal development. Skills within this zone are, in his view, precisely those that instruction can advance: through scaffolding, the partner supplies prompts and structure that the child gradually internalizes, so that performance that first required help later occurs independently.\n\nResearchers designed a study to compare these predictions. Children aged 4, 5, 6, and 8 years (40 per group) were tested on a standard liquid-conservation task. After agreeing that two identical glasses held equal amounts of juice, each child watched the contents of one glass poured into a taller, narrower glass and was asked whether the two now held the same amount or different amounts, and why. Children who failed were then retested on a parallel task with scaffolding: before repeating the question, the experimenter asked the child to say whether any juice had been added or removed during the pouring and to imagine pouring the juice back into the original glass. Children who passed only with scaffolding were retested alone, on new materials, two weeks later. Table 1 shows the percentage of each age group passing alone and passing after scaffolding, and the percentage of scaffolded-only passers who passed at the two-week retest.\n\nThe investigators noted that in the 4-year-old group, children who received the scaffolding prompts frequently agreed that nothing had been added and nonetheless insisted that the taller glass held more, whereas most 6-year-olds who initially failed changed their answer after being asked to imagine pouring the juice back, often adding a justification such as “it would be the same again.” Several 8-year-olds who failed alone appeared to have misunderstood the question rather than the transformation.',
    figure:
      '**Table 1. Liquid-conservation performance by age group (n = 40 per group)**\n\n| Age (years) | Passed alone (%) | Passed with scaffolding (%) | Scaffolded-only passers who passed the two-week retest (%) |\n|---|---|---|---|\n| 4 | 10 | 20 | 25 |\n| 5 | 25 | 55 | 58 |\n| 6 | 40 | 85 | 83 |\n| 8 | 90 | 95 | 100 |',
    questions: [
      {
        question:
          'As operationalized in this study, the zone of proximal development for liquid conservation was largest for which age group?',
        options: ['4-year-olds', '5-year-olds', '6-year-olds', '8-year-olds'],
        correctAnswer: 2,
        explanation:
          'The zone of proximal development is the gap between what a child can do alone and what the child can do with guidance, which in Table 1 is the difference between the two pass-rate columns: 10 points at age 4, 30 at age 5, 45 at age 6, and 5 at age 8. The 6-year-olds therefore show the largest zone. The 4-year-olds gained little from help, indicating the task lay beyond their zone; the 8-year-olds gained little because most already succeeded alone; the 5-year-olds gained substantially but less than the 6-year-olds.',
        skill: '7A Vygotsky zone of proximal development',
      },
      {
        question:
          'The scaffolding prompt that asked children to imagine pouring the juice back into the original glass was designed to support which mental operation?',
        options: ['Reversibility', 'Object permanence', 'Conservation of number', 'Hypothetical-deductive reasoning'],
        correctAnswer: 0,
        explanation:
          'Mentally undoing a transformation to see that the original state would be restored is reversibility, which Piaget held preoperational children lack; the prompt walks the child through exactly this operation. Object permanence, knowing that hidden objects continue to exist, is a sensorimotor achievement not tested here. Conservation of number is a different conservation task rather than an underlying operation. Hypothetical-deductive reasoning belongs to the formal operational stage and involves testing abstract possibilities, not undoing a concrete change.',
        skill: '6B Piaget cognitive operations',
      },
      {
        question:
          'The two-week retest of scaffolded-only passers was most likely included to determine whether:',
        options: [
          'the alone condition had acceptable test-retest reliability across parallel forms',
          'children in the older groups had matured into the concrete operational stage during the interval',
          'the experimenter’s presence during the first session had suppressed the children’s performance',
          'the assisted passes reflected internalized understanding rather than momentary cueing by the adult',
        ],
        correctAnswer: 3,
        explanation:
          'Vygotsky’s claim is that scaffolded performance is gradually internalized and later occurs independently; a child who passes only with prompts might instead be echoing the adult in the moment, so an unassisted retest on new materials distinguishes genuine internalization from cueing. Test-retest reliability of the alone condition would require retesting children who were tested alone twice, not those who passed only with help. Two weeks is far too short an interval to study stage maturation, and the design does not compare the groups over time. The experimenter was present at the retest as well, so it cannot isolate an effect of the experimenter’s presence.',
        skill: '7A research design',
      },
      {
        question:
          'Which finding in Table 1 provides the strongest support for Piaget’s claim that instruction cannot produce conservation before the child is developmentally ready?',
        options: [
          'The 8-year-olds passed at nearly the same rate with and without scaffolding',
          'Scaffolding raised the 4-year-olds’ pass rate by only 10 percentage points',
          'Most 6-year-olds who passed only with scaffolding also passed the retest',
          'The pass rate alone increased steadily from 4 to 8 years of age',
        ],
        correctAnswer: 1,
        explanation:
          'Piaget’s readiness claim predicts that guidance will fail for children who lack the underlying operations, and the 4-year-olds, squarely preoperational, gained only 10 points from scaffolding even though they accepted that no juice was added. The 8-year-olds’ near-ceiling performance says nothing about whether instruction could have helped them earlier. The 6-year-olds’ durable gains after scaffolding favor Vygotsky’s internalization account rather than Piaget’s. A steady rise in unaided performance with age is consistent with both theories and does not bear on whether instruction can accelerate it.',
        skill: '6B Piaget stage theory',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — information passage: education & health care as
  //    institutions; hidden curriculum; tracking; teacher expectancy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Schools, Hospitals, and the Lessons No One Teaches',
    passageText:
      'Sociologists treat education and health care as social institutions: durable, organized patterns of roles and norms that meet a society’s needs and that persist beyond the individuals who occupy them at any moment. Each of the major theoretical perspectives asks a different question about them.\n\nFunctionalists ask what an institution does for society as a whole and distinguish manifest functions, the intended and recognized purposes, from latent functions, the unintended and often unrecognized consequences. The manifest functions of schooling include transmitting knowledge and skills and, in the functionalist account, sorting students into occupations according to their abilities. Its latent functions include providing child care, forming friendships and marriages, and delaying young people’s entry into the labor market. Hospitals and medical schools likewise have manifest functions of treating illness and certifying competence, along with latent functions such as creating professional networks and reinforcing the authority of credentialed experts.\n\nConflict theorists ask whom the institution benefits. They point to the hidden curriculum: the values, behaviors, and expectations that are transmitted through the routines of schooling without appearing in any lesson plan. Students learn to obey authority, work for external rewards, tolerate boredom, and accept ranking by others. Samuel Bowles and Herbert Gintis argued that this hidden curriculum corresponds to the demands of the workplace, so that schools serving working-class communities emphasize rule-following while schools serving affluent communities emphasize independence and self-direction, thereby reproducing the class structure across generations. Conflict theorists also note that tracking, the assignment of students to separate ability groups or programs, tends to correspond with family income and race, and that lower tracks receive less experienced teachers and less demanding material.\n\nMedical educators have borrowed the term. Formal curricula in medical schools teach shared decision-making, empathy, and the equal worth of every patient; the hidden curriculum, transmitted through the example of senior physicians, the allocation of time, and the humor of the wards, may teach detachment, deference to hierarchy, and the view of some patients as less deserving of effort. Surveys of students find that professed attitudes toward patients tend to shift over the clinical years in the direction of the observed behavior of residents rather than the content of ethics courses.\n\nSymbolic interactionists ask how institutions operate in face-to-face encounters. In a classic study, teachers were told that certain randomly selected pupils had been identified by a test as likely to show unusual intellectual gains. By the end of the year those pupils had in fact gained more on an intelligence test than their classmates, apparently because teachers gave them more attention, more challenging work, and more encouragement. The finding illustrates a self-fulfilling prophecy: an expectation, once held, produces behavior that makes the expectation come true. Interactionists argue that labels such as “gifted,” “slow,” or “difficult patient” operate the same way, shaping the treatment a person receives and, through it, the person’s own self-concept and performance.',
    questions: [
      {
        question:
          'A public school in a low-income district grades students on punctuality and on following directions, uses bells to end every activity, and rewards quiet compliance with privileges. A school in a wealthy district nearby lets students choose their own projects and evaluates them on originality. According to the correspondence argument described in the passage, the difference is best interpreted as:',
        options: [
          'a latent function of schooling, since neither school intends to shape work habits',
          'preparation of each group of students for the kinds of jobs they are expected to hold',
          'evidence that teachers in the low-income district hold lower expectations of their pupils',
          'a response to differences in ability, since sorting by talent is a manifest function of schooling',
        ],
        correctAnswer: 1,
        explanation:
          'Bowles and Gintis’s correspondence argument holds that the hidden curriculum mirrors the workplace each group of students is headed for: rule-following and external rewards for subordinate jobs, independence and self-direction for jobs with autonomy, which is exactly the contrast between the two schools. Calling the difference a latent function misses that the conflict account treats the reproduction of class as the institution serving dominant interests, not an unrecognized side effect. Teacher expectations are the interactionist self-fulfilling-prophecy mechanism, which the scenario does not describe. Attributing the contrast to ability differences is the functionalist sorting claim that the correspondence argument is meant to challenge.',
        skill: '9B hidden curriculum',
      },
      {
        question:
          'Nurses on a pediatric ward are told by a supervisor that two new residents, chosen at random, were rated “exceptionally promising” in medical school. By the end of the year those two residents have performed more procedures and receive higher evaluations than their peers. This outcome is best explained by:',
        options: [
          'the hidden curriculum, which taught the two residents to imitate senior physicians',
          'tracking, which placed the two residents in a more demanding rotation',
          'a latent function of the ward’s hierarchy that favors residents with greater ability',
          'a self-fulfilling prophecy, in which the label changed the treatment the residents received',
        ],
        correctAnswer: 3,
        explanation:
          'The residents were chosen at random, so the label rather than any real difference produced the outcome, presumably because nurses offered the “promising” residents more opportunities and support, which is the teacher-expectancy mechanism applied to a hospital. The hidden curriculum concerns values transmitted to all trainees through routines, not a difference produced by a label attached to two of them. No formal reassignment to a different rotation occurred, so tracking does not apply. A latent function favoring greater ability is ruled out by the random selection, which guarantees the two residents were not more able on average.',
        skill: '9B self-fulfilling prophecy / teacher expectancy',
      },
      {
        question:
          'Residency programs require long hours in shared workspaces, and residents who train together commonly go on to refer patients to one another for decades. From a functionalist perspective, the referral networks are best classified as:',
        options: [
          'a latent function of residency, because they are an unintended consequence of training',
          'a manifest function of residency, because programs are designed to certify competence',
          'part of the hidden curriculum, because they transmit values that are never made explicit',
          'a form of tracking, because they sort residents into distinct professional groups',
        ],
        correctAnswer: 0,
        explanation:
          'Referral networks are a useful consequence of residency that no program is designed to produce, which is the functionalist definition of a latent function. Certifying competence is indeed a manifest function, but the networks are not what the certification process intends, so they cannot be classified under it. The hidden curriculum is a conflict-theory concept about the transmission of values, whereas the networks are relationships rather than values. Tracking refers to formal assignment of students to separate programs, which the informal growth of referral ties does not involve.',
        skill: '9B manifest and latent functions',
      },
      {
        question:
          'Which of the following findings, if observed, would most weaken the functionalist claim that tracking sorts students according to their abilities?',
        options: [
          'Students in higher tracks score higher on achievement tests at the end of the year',
          'Teachers in lower tracks report that their students are less motivated',
          'Among students with identical entry test scores, track placement varies with family income',
          'Higher-track students are more likely to enroll in college after graduation',
        ],
        correctAnswer: 2,
        explanation:
          'If students who enter with the same measured ability are placed in different tracks depending on income, then something other than ability is doing the sorting, which directly contradicts the functionalist claim. Higher end-of-year scores in higher tracks are consistent with sorting by ability and also with the conflict view that higher tracks receive better instruction, so they do not discriminate between the claims. Teachers’ reports of low motivation in lower tracks could reflect either accurate sorting or the effect of labeling. Greater college enrollment among higher-track students is likewise compatible with either account.',
        skill: '9B tracking and educational inequality',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. DISORDERS — experiment, chart: OCD trial of ERP vs SSRI, durability
  //    after discontinuation; PTSD exposure logic; biological basis
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'Exposure, Serotonin, and What Lasts After Treatment Ends',
    passageText:
      'Obsessive-compulsive disorder (OCD) is defined by obsessions, which are intrusive and unwanted thoughts, images, or urges that cause marked distress, and compulsions, which are repetitive behaviors or mental acts that the person feels driven to perform in response to an obsession. A patient troubled by thoughts of contamination may wash her hands dozens of times a day; one who fears that a careless act will harm others may check the stove again and again. Performing the compulsion brings a temporary drop in distress, but the drop is short-lived, and the cycle begins again with the next intrusive thought. Earlier editions of the Diagnostic and Statistical Manual of Mental Disorders (DSM) listed OCD and posttraumatic stress disorder (PTSD) among the anxiety disorders. DSM-5 moved each into a chapter of its own, obsessive-compulsive and related disorders and trauma- and stressor-related disorders, while recognizing that fear and avoidance are central to both. PTSD follows exposure to actual or threatened death, serious injury, or sexual violence and involves intrusive memories or nightmares, avoidance of reminders, negative changes in mood and thinking, and heightened arousal that persist for more than a month.\n\nTwo treatments for OCD have strong empirical support. Selective serotonin reuptake inhibitors (SSRIs) block the transporter that returns serotonin from the synaptic cleft into the presynaptic neuron. The blockade occurs within hours of the first dose, yet clinical improvement typically takes several weeks. Exposure and response prevention (ERP), a form of cognitive-behavioral therapy, has the patient confront feared situations in a graded sequence, such as touching a doorknob and then a public railing, while refraining from the ritual that would ordinarily follow. Over repeated sessions the patient learns that the feared outcome does not occur and that distress subsides without the ritual. Exposure-based therapies for PTSD apply similar logic: in prolonged exposure, the patient repeatedly recounts the traumatic memory in detail and gradually approaches safe situations that he or she has been avoiding.\n\nImaging studies of untreated patients with OCD have found elevated metabolic activity in a circuit linking the orbitofrontal cortex, the caudate nucleus, and the thalamus, a circuit thought to generate the persistent sense that something is wrong and must be corrected.\n\nTo compare the two treatments, researchers randomly assigned 160 adults with OCD to one of four 12-week conditions (40 per group): pill placebo, SSRI, ERP plus pill placebo, or ERP plus SSRI. Participants in the ERP conditions attended two 90-minute therapy sessions per week; participants in the other two conditions met briefly with a physician every 2 weeks to receive capsules. Active and placebo capsules looked identical, and neither the participants nor the physicians knew which a participant was receiving. At the end of week 12, all therapy sessions ended and all capsules were tapered off over 2 weeks. Clinicians who did not know the participants’ conditions rated symptom severity on a 0–40 scale every 4 weeks through week 24. Figure 1 shows the mean ratings for each condition.',
    chart: {
      title: 'Figure 1. Mean clinician-rated OCD symptom severity by condition (treatment ended at week 12)',
      kind: 'line',
      xLabel: 'Week',
      yLabel: 'Symptom severity (0–40)',
      xValues: [0, 4, 8, 12, 16, 20, 24],
      yValues: [26, 25, 24, 23, 23, 23.5, 24],
      seriesLabel: 'Pill placebo',
      comparisonSeries: [
        { label: 'SSRI', yValues: [26, 24, 20, 18, 20, 22, 23] },
        { label: 'ERP + placebo', yValues: [26, 21, 16, 13, 13, 13.5, 14] },
        { label: 'ERP + SSRI', yValues: [26, 20, 15, 12, 13, 13.5, 14] },
      ],
      annotations: [{ xIndex: 3, label: 'Treatment ends' }],
      hidePointLabels: true,
    },
    questions: [
      {
        question:
          'Based on the passage’s description of how compulsions affect distress, repeated handwashing in a patient with contamination obsessions is maintained mainly through:',
        options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment'],
        correctAnswer: 1,
        explanation:
          'Washing removes an aversive state, the distress provoked by the obsession, and behavior that is strengthened because it removes something unpleasant is negatively reinforced. Positive reinforcement would require that washing add a pleasant consequence, but the passage describes only relief from distress. Positive punishment and negative punishment both decrease a behavior, whereas the compulsion is repeated more and more often.',
        skill: '7A negative reinforcement in OCD',
      },
      {
        question: 'Which conclusion about the period after treatment ended is best supported by Figure 1?',
        options: [
          'Adding the SSRI to ERP produced an advantage over ERP alone that grew after treatment',
          'Each active treatment lost about the same proportion of its week-12 improvement',
          'Symptoms in all four groups returned to near their pretreatment levels by week 24',
          'ERP recipients kept most of their week-12 gain, but SSRI-only recipients lost most of theirs',
        ],
        correctAnswer: 3,
        explanation:
          'From week 12 to week 24, the SSRI group rose from 18 to 23, giving back 5 of its 8 points of improvement, whereas the two ERP groups rose only 1 to 2 points and kept about 12 of their 13 to 14 points. The ERP-plus-SSRI group was 1 point better than ERP alone at week 12, and the two converged afterward rather than diverging. The proportions lost differed sharply between the SSRI-only group and the ERP groups. Only the SSRI group moved back toward baseline; both ERP groups remained far below the pretreatment score of 26.',
        skill: '7A treatment data interpretation',
      },
      {
        question:
          'Which feature of the design most limits the conclusion that ERP was more effective than the SSRI during the 12 weeks of treatment?',
        options: [
          'ERP participants had much more clinician contact than SSRI-only participants',
          'The 12 weeks of treatment were too short for an SSRI to begin reducing symptoms',
          'Symptom severity was rated by clinicians instead of by the participants themselves',
          'Capsules were tapered after week 12 instead of being continued through week 24',
        ],
        correctAnswer: 0,
        explanation:
          'ERP participants had two 90-minute sessions each week while SSRI-only participants had brief visits every 2 weeks, so the ERP advantage could reflect therapist attention, support, or expectancy rather than exposure itself; the conditions differ in more than one respect. The SSRI group improved steadily through week 12, so the treatment period was long enough for the drug to act. Blinded clinician ratings are a strength, since they reduce bias in the outcome measure. Tapering after week 12 affects only the follow-up period and cannot account for differences observed during treatment.',
        skill: '7A research design: confounding',
      },
      {
        question:
          'Suppose that PET scans taken before and after treatment showed a similar decrease in caudate metabolism among responders in the SSRI group and among responders in the ERP-plus-placebo group. This finding would most directly support the conclusion that:',
        options: [
          'ERP works by increasing the amount of serotonin available at synapses in the caudate',
          'elevated caudate activity results from performing compulsions rather than causing them',
          'a psychological treatment can change activity in the same brain circuit a drug affects',
          'medication and ERP should produce equally lasting benefits once treatment has ended',
        ],
        correctAnswer: 2,
        explanation:
          'Responders to a purely behavioral treatment showed the same change in the circuit that is overactive in OCD as responders to medication, which indicates that psychotherapy can alter brain function. A shared end result does not show a shared molecular mechanism, so the finding does not establish that ERP acts through serotonin. Because caudate activity and symptoms fell together in both groups, the data cannot show which causes which. Figure 1 shows that the SSRI’s benefit faded after treatment while ERP’s did not, so equal durability is contradicted rather than supported.',
        skill: '6C biological basis of disorders',
      },
      {
        question:
          'A woman with PTSD after an assault begins prolonged exposure. Based on the passage’s account of how exposure-based treatment works, which behavior during her exposure exercises would most likely reduce its benefit?',
        options: [
          'Silently repeating a calming phrase whenever her distress begins to rise',
          'Reporting more distress in early sessions than she felt before treatment',
          'Describing the memory in greater detail in each successive session',
          'Practicing approach to avoided places between scheduled sessions',
        ],
        correctAnswer: 0,
        explanation:
          'Exposure works when the patient stays with the feared memory or situation until she learns that distress subsides and the feared outcome does not occur; a phrase used to neutralize rising distress functions like the ritual that ERP prevents, so relief is credited to the phrase rather than to the passage of time. Heightened distress early in exposure is expected and does not reduce benefit. Adding detail deepens engagement with the memory, which is the aim of the procedure. Approaching avoided places between sessions extends exposure and should increase benefit.',
        skill: '6C exposure therapy for PTSD',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: looking-glass self, Mead,
  //    agents of socialization, dramaturgy, impression management
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'The Self as a Social Product',
    passageText:
      'Sociologists and social psychologists have long argued that the self is not present at birth but emerges through social interaction. Charles Horton Cooley compared the process to looking into a mirror and called its product the looking-glass self. In his account, a person first imagines how he or she appears to others, then imagines how those others judge that appearance, and finally experiences a self-feeling, such as pride or embarrassment, in response to the imagined judgment. Cooley wrote that people are shaped less by what others actually say than by the reflected image they construct from glances, silences, and offhand remarks.\n\nGeorge Herbert Mead extended this idea by describing how children acquire the capacity to take the role of the other. In the preparatory stage, young children imitate the actions of people around them without grasping their meaning. In the play stage, they act out the roles of specific significant others, such as a parent or a teacher, adopting one perspective at a time. In the game stage, they learn to hold in mind the expectations of many people at once and to see how their own role fits within an organized activity. The culmination is the generalized other, an internalized sense of the expectations of the community as a whole. Mead also divided the self into the “me,” the organized set of social attitudes a person has taken in from others, and the “I,” the spontaneous and unpredictable response of the individual to those attitudes.\n\nThese processes unfold through agents of socialization. The family is usually the earliest and most influential, transmitting language, basic norms, and a social class position. Schools add impersonal evaluation and the experience of being one member of a large group; peer groups provide a setting in which young people try out roles away from adult authority; and mass media supply images of roles that people may never directly observe. Socialization continues throughout life. In anticipatory socialization, people take on the values and behaviors of a group they expect to join. In resocialization, earlier norms are deliberately stripped away and replaced, most intensively in total institutions such as military boot camps and prisons.\n\nOnce formed, the self is also something people present. Erving Goffman’s dramaturgical approach compares social life to theater. In front-stage regions, a person performs for an audience and follows the script the setting demands; in back-stage regions, the person can drop the performance, rehearse, and relax among teammates who share in staging it. People also manage the impressions they create through several strategies. In ingratiation, they use flattery or agreement to become liked. In self-promotion, they draw attention to their competence and accomplishments. In aligning actions, they offer socially acceptable explanations for conduct that might otherwise be judged negatively. In alter-casting, they impose an identity on another person, as when a salesperson tells a customer, “Someone with your taste will appreciate this,” in order to shape how that person will act.',
    questions: [
      {
        question:
          'A 9-year-old playing shortstop moves to cover second base as soon as a runner leaves first, knowing that the pitcher, the catcher, and the other infielders each expect her to do so. Mead would interpret this behavior as evidence of:',
        options: [
          'the preparatory stage, because she copies the actions of older players around her',
          'the play stage, because she adopts the perspective of one significant other at a time',
          'the game stage, because she weighs several roles’ expectations at once',
          'the spontaneous “I,” because she acts before consciously weighing others’ views',
        ],
        correctAnswer: 2,
        explanation:
          'Knowing simultaneously what the pitcher, catcher, and infielders expect and fitting her own action into the team’s organized play is the defining achievement of Mead’s game stage. Imitation without understanding marks the preparatory stage, but she understands why she moves. The play stage involves taking one specific other’s perspective at a time, not several at once. Her action is guided by internalized expectations of others, which corresponds to the “me” rather than the spontaneous “I.”',
        skill: '8A Mead role-taking stages',
      },
      {
        question:
          'A first-year graduate student whose adviser privately rates her as the strongest student in the laboratory grows discouraged because she interprets the adviser’s brief, hurried comments as signs of disappointment. According to Cooley’s model, her self-feeling:',
        options: [
          'follows the judgment she imagines the adviser holds, even though it is inaccurate',
          'will improve once she sees that other students receive equally brief comments',
          'reflects the adviser’s actual evaluation, absorbed through repeated daily contact',
          'depends on the generalized other rather than on the view of any single person',
        ],
        correctAnswer: 0,
        explanation:
          'In the looking-glass self, every step, from how one appears to how one is judged, is imagined, so self-feeling tracks the judgment the person attributes to others; the student feels discouraged because of the disappointment she reads into the comments, not the adviser’s actual high regard. Comparing herself with other students is a different process, social comparison, and Cooley’s model makes no such prediction. Her feelings run opposite to the adviser’s real evaluation, so they cannot reflect it. The generalized other is Mead’s concept of community-wide expectations, whereas her distress concerns one specific person’s view.',
        skill: '8A looking-glass self',
      },
      {
        question:
          'A college junior who plans to apply to medical school begins reading clinical case reports, shadowing physicians, and copying their vocabulary and manner of dress. Her behavior is best described as:',
        options: [
          'resocialization, since she is discarding the norms she learned as a student',
          'primary socialization, since the family remains her main agent of learning',
          'role exit, since she is disengaging from her identity as an undergraduate',
          'anticipatory socialization, since she adopts a future group’s norms',
        ],
        correctAnswer: 3,
        explanation:
          'Taking on the values, speech, and appearance of physicians before becoming one is anticipatory socialization toward a group she expects to enter. Resocialization involves the deliberate stripping away of prior norms, typically in a total institution, and she remains a student in every respect. Primary socialization is early-childhood learning within the family, and no family role is described. Role exit is the process of leaving a role, whereas she is adding a prospective identity while still fully an undergraduate.',
        skill: '8A agents and types of socialization',
      },
      {
        question:
          'In a job interview, an applicant who was dismissed from her last position says, “The company was downsizing, and like most of my department, I was let go.” Her statement is best described as an example of:',
        options: ['ingratiation', 'aligning actions', 'self-promotion', 'alter-casting'],
        correctAnswer: 1,
        explanation:
          'By presenting her dismissal as the result of company-wide downsizing, the applicant offers a socially acceptable account of an event that could otherwise be judged against her, which is an aligning action. Ingratiation would involve flattering the interviewer or agreeing with him to be liked. Self-promotion would highlight her competence or achievements, which the statement does not do. Alter-casting would assign an identity to the interviewer to steer his behavior, whereas her statement concerns her own conduct.',
        skill: '8C impression management strategies',
      },
      {
        question:
          'A junior associate at a law firm is joking with fellow associates in the break room when a senior partner walks in, and the associate immediately begins discussing a client’s case in formal terms. Within the dramaturgical approach, this change best illustrates that:',
        options: [
          'the break room had been a front-stage region the associate failed to recognize',
          'the associate felt role conflict between being a peer and being a subordinate',
          'the associate used alter-casting to shape how the partner would respond',
          'whether a region is front or back stage depends on the audience present',
        ],
        correctAnswer: 3,
        explanation:
          'The same break room served as a back stage among fellow associates, who were teammates, and became a front stage the moment the partner, an audience for the associate’s professional performance, arrived; the region changed because the audience changed, not the room. The associate behaved appropriately for a back stage until the partner entered, so nothing indicates a misread front stage. Role conflict involves incompatible demands of two roles, whereas the associate simply switched performances when the audience changed. Alter-casting imposes an identity on another person, and the associate altered only his or her own presentation.',
        skill: '8C dramaturgical approach: audience and region',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — experiment/field study, chart: referral hiring,
  //     individual vs institutional discrimination, in-group favoritism
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Referral Hiring and Discrimination Without Hostility',
    passageText:
      'Sociologists distinguish individual discrimination, in which a particular person treats others unfavorably because of their group membership, from institutional discrimination, in which the ordinary rules and practices of an organization produce unequal outcomes for groups whether or not anyone involved intends harm. A related distinction concerns the attitudes that may lie behind unequal treatment. People readily divide the social world into in-groups, to which they feel they belong, and out-groups. Early research on intergroup relations emphasized out-group derogation, active dislike of or hostility toward members of other groups. More recent work suggests that much unequal treatment instead reflects in-group favoritism: people extend help, trust, and opportunities to members of their own group without feeling any animosity toward outsiders. Because networks of friends and acquaintances tend to be homophilous, made up of people similar in ethnicity, class, and background, favoritism channeled through personal networks can disadvantage people who were never the target of anyone’s hostility.\n\nResearchers examined these ideas in a regional grocery chain that employs about 9,000 people in stores and warehouses across several counties, where hiring decisions are made by individual store and warehouse managers rather than by a central office. In 2008, members of a minority ethnic group made up about 25% of the workers in the region who were qualified for the chain’s entry-level store and warehouse jobs. In 2010, the chain began paying employees a bonus for each referred applicant who was hired, and within a few years more than half of all new hires came through employee referrals. In 2016, after an internal review, the chain ended the referral bonus, began posting every opening publicly, and replaced unstructured interviews with structured interviews in which all candidates for a position were asked the same questions and scored on the same rubric.\n\nIn every even-numbered year from 2008 to 2020, the researchers recorded the percentage of new hires who belonged to the minority group. In the same years, they gave all of the chain’s hiring managers a validated questionnaire measuring explicit prejudice and recorded the percentage of managers whose scores exceeded a cutoff indicating hostile attitudes toward the minority group. Managers completed the questionnaire anonymously, and more than 90% of them responded in every survey year. Both measures are shown in Figure 1.\n\nThe researchers also interviewed 40 managers. Those who had hired referred applicants often described the practice as “giving good people a chance” and said that a recommendation from a trusted employee reduced the risk of a bad hire. Almost none of the employees who made referrals had referred anyone outside their own ethnic group, and most said they had simply recommended the people they knew best.',
    chart: {
      title: 'Figure 1. Minority share of new hires and share of hiring managers above the explicit-prejudice cutoff, 2008–2020',
      kind: 'line',
      xLabel: 'Year',
      yLabel: 'Percentage',
      yUnit: '%',
      xValues: [2008, 2010, 2012, 2014, 2016, 2018, 2020],
      yValues: [24, 23, 18, 15, 14, 20, 23],
      seriesLabel: 'Minority group share of new hires',
      comparisonSeries: [{ label: 'Managers above prejudice cutoff', yValues: [11, 10, 9, 9, 8, 8, 8] }],
    },
    questions: [
      {
        question: 'Which conclusion about the period from 2010 to 2016 is best supported by Figure 1?',
        options: [
          'Minority hiring declined while the share of prejudiced managers stayed low',
          'Minority hiring declined in step with a rise in the share of prejudiced managers',
          'Minority hiring held steady even though the share of prejudiced managers fell',
          'Minority hiring recovered as soon as the share of prejudiced managers began to fall',
        ],
        correctAnswer: 0,
        explanation:
          'Between 2010 and 2016 the minority share of new hires fell from 23% to 14%, while the share of managers above the prejudice cutoff drifted down from 10% to 8%, so the drop in hiring cannot be traced to rising hostility among managers. The prejudice measure never rose, so the two did not move in step. Minority hiring fell by 9 percentage points rather than holding steady. The recovery in hiring began only after 2016, while the prejudice measure had been falling slowly since 2008.',
        skill: '10A discrimination data interpretation',
      },
      {
        question:
          'Which additional information would best help determine whether the referral bonus, rather than a change in the region’s labor supply, caused the decline in minority hiring?',
        options: [
          'Explicit-prejudice scores for the employees who made referrals',
          'The total number of people the chain hired in each year of the study',
          'The minority share of qualified workers in the region in each year',
          'Interviews with minority applicants whom the chain did not hire',
        ],
        correctAnswer: 2,
        explanation:
          'The passage gives the minority share of qualified workers only for 2008; if that share fell after 2010, the decline in hiring might simply mirror a shrinking pool, whereas a stable share would point to the hiring process itself. Referrers’ prejudice scores bear on why they referred whom they did, not on whether the pool of qualified workers changed. The total number of hires describes the chain’s volume of hiring but not the ethnic composition of the available workforce. Rejected applicants’ accounts could describe their experiences but cannot show whether fewer minority workers were available.',
        skill: '10A research design: alternative explanations',
      },
      {
        question:
          'A store manager says, “I have nothing against anyone, but when my friends’ kids need jobs, I make sure their applications get a close look.” If her friends belong mostly to her own ethnic group, her practice best illustrates:',
        options: [
          'out-group derogation, since it lowers the chances of applicants from other groups',
          'in-group favoritism, since it helps members of her own group without hostility toward others',
          'institutional discrimination, since it violates the chain’s formal hiring policy',
          'stereotype threat, since it signals to other applicants that they are unwelcome',
        ],
        correctAnswer: 1,
        explanation:
          'She extends an advantage to people in her own network and group while expressing no animosity toward outsiders, which is in-group favoritism; the disadvantage to others is a by-product rather than the aim. Out-group derogation requires active dislike or hostility toward the other group, which she disclaims and nothing indicates. Institutional discrimination arises from an organization’s ordinary rules rather than from one person’s choices, and her practice does not break any rule described. Stereotype threat concerns how awareness of a stereotype impairs a target’s own performance, not how a manager treats applications.',
        skill: '8B in-group favoritism vs out-group derogation',
      },
      {
        question:
          'The results after 2016 most strongly support which approach to reducing unequal hiring outcomes in organizations like the chain?',
        options: [
          'Screening managers for prejudiced attitudes before promoting them',
          'Training managers with the aim of reducing their explicit prejudice',
          'Paying a larger bonus to employees who refer minority applicants',
          'Changing the procedures used to recruit and evaluate candidates',
        ],
        correctAnswer: 3,
        explanation:
          'After the chain replaced referral hiring with public postings and structured interviews, the minority share of new hires returned to about its 2008 level even though the share of prejudiced managers stayed at 8%, so the improvement tracked a change in procedure rather than in attitudes. Screening and training both target managers’ attitudes, which were already rare and did not change when outcomes improved. A targeted referral bonus was never tried, so the data offer no evidence about it, and it would still depend on referrers’ homophilous networks.',
        skill: '10A reducing discrimination: procedures vs attitudes',
      },
    ],
  },
]

export const FL2_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A worker in a textile mill stops noticing the steady hum of the machines within an hour of each shift. Her hearing thresholds are normal, and she hears the hum again at once whenever a coworker mentions it. Her failure to notice the hum is best explained as:',
    options: [
      'sensory adaptation, because her auditory receptors stop responding to a constant tone',
      'sensitization, because repeated exposure to the hum heightens her response to it',
      'habituation, because a learned decline in attention reduces her awareness of it',
      'a raised absolute threshold, because prolonged noise has damaged her hair cells',
    ],
    correctAnswer: 2,
    explanation:
      'Because she hears the hum immediately when her attention is redirected, her receptors are still responding; the decline lies in a learned, central decrease in responding to a repeated, unimportant stimulus, which is habituation. Sensory adaptation is a reduction in the receptors’ own response to constant stimulation and would not reverse the instant attention shifts. Sensitization is an increase in responsiveness, the opposite of what she shows. Normal hearing thresholds rule out hair-cell damage.',
    skill: '6A sensory adaptation vs habituation',
  },
  {
    id: 'fl2-ps-b-d02',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'Maya complains about the food at a new restaurant. Most other diners also complain about it, Maya rarely complains about restaurants, and she has complained about this one on each of her three visits. According to Kelley’s covariation model, observers are most likely to attribute her complaint to:',
    options: [
      'Maya’s disposition, because her behavior is consistent across visits',
      'the restaurant, because consensus, distinctiveness, and consistency are all high',
      'the circumstances of one visit, because distinctiveness is high but consistency is low',
      'Maya’s disposition, because consensus is high and distinctiveness is low',
    ],
    correctAnswer: 1,
    explanation:
      'Others react the same way (high consensus), Maya does not react this way to other restaurants (high distinctiveness), and she reacts this way every time (high consistency), a combination that leads to an external attribution to the stimulus, the restaurant. High consistency alone does not produce a dispositional attribution; a dispositional attribution requires low consensus and low distinctiveness as well. Consistency is high, not low, so a one-time circumstance is not implicated. Maya rarely complains elsewhere, so distinctiveness is high rather than low.',
    skill: '8B attribution theory: covariation model',
  },
  {
    id: 'fl2-ps-b-d03',
    section: 'psych-soc',
    discipline: 'social-psychology',
    question:
      'Among students with equal math preparation, women score lower than men on a difficult test that is described as diagnostic of mathematical ability. Which additional finding would most strongly indicate that the gap reflects stereotype threat rather than a difference in ability?',
    options: [
      'The gap vanishes if the test is framed as unrelated to ability',
      'The gap is larger on the most difficult items than on the easiest items',
      'Women report lower confidence than men do before the test begins',
      'Women with more math coursework outscore women with less coursework',
    ],
    correctAnswer: 0,
    explanation:
      'Stereotype threat is the impairment that arises when a test-taker fears confirming a negative stereotype about her group, so the gap should vanish when the identical test is framed as irrelevant to the stereotyped ability; a real ability difference would persist regardless of framing. A larger gap on harder items is consistent with either explanation. Lower pretest confidence could reflect either anxiety about the stereotype or accurate self-assessment. The effect of coursework among women says nothing about why women and men with equal preparation differ.',
    skill: '8B stereotype threat',
  },
  {
    id: 'fl2-ps-b-d04',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A dog conditioned to salivate to a tone paired with food stops salivating after many presentations of the tone alone. The next day, with no further training, the tone again elicits salivation, though less than before. This observation most strongly suggests that extinction:',
    options: [
      'erased the tone–food association, which the dog then relearned overnight',
      'reflected fatigue of the salivary glands rather than any new learning',
      'led the dog to generalize its response to sounds resembling the tone',
      'suppressed the original association through new learning rather than erasing it',
    ],
    correctAnswer: 3,
    explanation:
      'The reappearance of the conditioned response after a rest, without any new pairings, is spontaneous recovery, and it shows that the original tone–food association survived extinction; extinction therefore adds new inhibitory learning rather than erasing what was learned. Relearning overnight is impossible because the tone and food were never paired again. Fatigue would not explain why the response returns specifically to the tone after rest yet is weaker than before. Stimulus generalization concerns responding to similar stimuli, whereas the response returned to the original tone.',
    skill: '7A extinction and spontaneous recovery',
  },
  {
    id: 'fl2-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A neighborhood health cooperative is founded with rotating leadership and with decisions made by all members at open meetings. Fifteen years later, a few long-serving officers control the budget and set the agenda, and most members no longer attend meetings. This change best illustrates:',
    options: [
      'McDonaldization, the spread of efficiency, predictability, and control',
      'groupthink, the suppression of dissent within a cohesive decision group',
      'the iron law of oligarchy, the concentration of power in a few leaders',
      'the ideal-type bureaucracy, with authority vested in impersonal offices',
    ],
    correctAnswer: 2,
    explanation:
      'Michels’s iron law of oligarchy holds that even democratically organized groups tend over time to be ruled by a small group of leaders, which is what happened to the cooperative. McDonaldization describes the spread of fast-food principles such as efficiency and standardization, not the concentration of control. Groupthink is a pattern of faulty decision-making in cohesive groups and says nothing about who holds power. Weber’s ideal-type bureaucracy places authority in offices governed by rules, whereas here power rests with particular long-serving individuals.',
    skill: '9A formal organizations and bureaucracy',
  },
  {
    id: 'fl2-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a metropolitan area, neighborhoods remain segregated by race decades after discriminatory lending was outlawed, and public schools are funded mainly through local property taxes. The resulting gap in school resources between neighborhoods is best described as:',
    options: [
      'individual discrimination, since homeowners in wealthy areas choose to pay more tax',
      'institutional discrimination, since a race-neutral rule perpetuates past disadvantage',
      'de jure segregation, since the school funding rule is written into state law',
      'prejudice, since the funding rule expresses negative attitudes toward minority residents',
    ],
    correctAnswer: 1,
    explanation:
      'A funding rule that mentions no race nonetheless channels fewer resources to neighborhoods that segregation left with lower property values, producing unequal outcomes through ordinary institutional practice, which is institutional discrimination. Individual discrimination requires a person treating others unfavorably because of their group, and paying taxes on one’s own property is not such an act. De jure segregation is separation required by law, whereas this rule does not assign anyone to schools or neighborhoods by race. Prejudice is an attitude held by individuals, and nothing indicates that the rule reflects anyone’s attitudes.',
    skill: '10A institutional discrimination and residential segregation',
  },
  {
    id: 'fl2-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a certain society, children are considered members of their mother’s clan and inherit land from her relatives, and newly married couples set up a household apart from both sets of parents. This society’s kinship system combines:',
    options: [
      'patrilineal descent with matrilocal residence',
      'bilateral descent with neolocal residence',
      'matrilineal descent with matrilocal residence',
      'matrilineal descent with neolocal residence',
    ],
    correctAnswer: 3,
    explanation:
      'Tracing clan membership and inheritance through the mother’s line is matrilineal descent, and a couple living apart from both families practices neolocal residence. Patrilineal descent would trace membership through the father. Bilateral descent counts both parents’ lines equally, which contradicts membership in the mother’s clan alone. Matrilocal residence would require the couple to live with or near the wife’s family, which they do not.',
    skill: '9B family and kinship patterns',
  },
]
