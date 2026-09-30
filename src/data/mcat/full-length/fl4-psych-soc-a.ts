/**
 * MCAT Full-Length Form 4 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-09-30 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 *
 * Question counts per passage are 5/4/4/5/4 (= 22). BLUEPRINT-F34 listed
 * passage 3 at 5 questions, which would total 23; passage 3 was set to 4 to
 * keep the file at the fixed 22 + 8 = 30 (same pattern as Forms 1–3).
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL4_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. SENSATION & PERCEPTION — dark adaptation, opponent process, trichromacy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-a-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    title: 'Rods, Cones, and Opposing Colors After a Bright Flash',
    passageText:
      'Human color vision has been explained by two theories that were long treated as rivals. The trichromatic theory, developed by Young and Helmholtz, holds that color is encoded by the relative activity of three receptor types, now identified as cones most sensitive to short, medium, and long wavelengths. The opponent-process theory, proposed by Hering, holds that color is encoded by channels that signal one member of a pair at the expense of the other: red versus green, blue versus yellow, and black versus white. Current accounts treat the two theories as descriptions of different stages of a single system. Rods, which outnumber cones roughly twentyfold and are absent from the central fovea, contain a single photopigment, rhodopsin, and contribute little to color perception. Rhodopsin is most sensitive near 500 nm and responds weakly to wavelengths longer than about 620 nm, whereas long-wavelength cones respond well in that range.\n\nResearchers studied 24 adults with normal color vision. In Experiment 1, each participant first viewed a bright white field for 2 minutes, which bleaches most of the photopigment in both rods and cones. The room was then darkened, and every 5 minutes for 30 minutes the researchers measured the dimmest flash of a small test light that the participant could detect. The test light was always presented 20° above a fixation point. In one session the test light was green (500 nm); in a separate session, held on a different day in counterbalanced order, it was deep red (650 nm). Detection thresholds, expressed in log units relative to an arbitrary reference intensity, are shown in Figure 1. A lower threshold indicates greater sensitivity.\n\nIn Experiment 2, the same participants fixated for 45 seconds on the center of a pattern made of three horizontal stripes: green on top, yellow in the middle, and black on the bottom. They then shifted their gaze to a uniform white screen. All participants reported a faint image of the striped pattern on the white screen, and each described its colors to the researchers.\n\nIn Experiment 3, participants adjusted a mixture of primary lights until it matched a single test wavelength presented beside it. Every participant could match every test wavelength by adjusting three primaries, but no participant could match all of them with only two. Two additional volunteers, who had been screened out of Experiments 1 and 2, were also tested. Both matched every test wavelength using just two primaries, and both accepted as identical some pairs of lights that looked obviously different to the experimenter.\n\nThe researchers argued that the three experiments together trace the path from photoreceptors to neural coding. The first separates the time courses of the two receptor systems, the second reveals the aftereffects of adaptation in opponent channels, and the third reflects the number of independent receptor signals available for color.',
    chart: {
      title: 'Figure 1. Detection threshold for a test flash 20° above fixation, by time in the dark and wavelength of the test light',
      kind: 'line',
      xLabel: 'Time in the dark',
      xUnit: 'min',
      yLabel: 'Log threshold (relative units)',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [5.0, 3.3, 3.0, 2.1, 1.4, 1.1, 1.0],
      seriesLabel: 'Green test light (500 nm)',
      comparisonSeries: [{ label: 'Red test light (650 nm)', yValues: [5.1, 3.4, 3.1, 3.0, 3.0, 3.0, 3.0] }],
    },
    questions: [
      {
        question: 'According to Figure 1, between 10 and 30 minutes in the dark, sensitivity to the green test light:',
        options: [
          'rose by a factor of about 2.',
          'rose by a factor of about 3.',
          'rose by a factor of about 100.',
          'fell by a factor of about 100.',
        ],
        correctAnswer: 2,
        explanation:
          'The green-light threshold falls from 3.0 to 1.0 log units, a drop of 2 log units, so the dimmest detectable flash became 10² = 100 times weaker and sensitivity rose about 100-fold. A factor of 2 treats the difference in log units as if it were a ratio of intensities. A factor of 3 divides one log value by the other, which is not how log units convert to intensity. Sensitivity fell only if a falling threshold is misread as falling sensitivity; the passage states that a lower threshold means greater sensitivity.',
        skill: '6A data interpretation: dark adaptation',
      },
      {
        question: 'Which explanation best accounts for the difference between the two curves in Figure 1 after about 10 minutes in the dark?',
        options: [
          'Only cones could detect the red flash, and cone sensitivity had stopped improving by about 10 minutes.',
          'Rods recover from bleaching more slowly when they are tested with red light than with green light.',
          'Long-wavelength cones kept regenerating pigment all session, masking any later gain made by the rods.',
          'Each red flash was intense enough to bleach the rods again, which prevented them from recovering.',
        ],
        correctAnswer: 0,
        explanation:
          'Because rhodopsin responds poorly above about 620 nm, the 650 nm flash is detected by cones throughout, and the red curve therefore shows only the cone plateau reached by about 10 minutes, whereas the green curve continues downward as the more sensitive rods recover. The rate of rod recovery depends on pigment regeneration after the white bleaching field, which was the same in both sessions, not on the color of the dim test flash. Cones that were still improving would make the red curve keep falling, but it is flat after 10 minutes. Threshold flashes are by definition barely detectable and far too dim to re-bleach photopigment.',
        skill: '6A rods vs cones (reasoning)',
      },
      {
        question: 'The researchers presented the test light 20° above the fixation point rather than at the fixation point most likely because:',
        options: [
          'the periphery contains no cones, so a peripheral flash isolates rod function in both sessions.',
          'the fovea contains only short-wavelength cones, which cannot respond to the red test light.',
          'the fovea adapts to darkness more slowly than the periphery, which would lengthen each session.',
          'a flash at fixation would reach almost no rods, so the later rod-driven drop would be missed.',
        ],
        correctAnswer: 3,
        explanation:
          'Rods are absent from the central fovea, so a flash at fixation would stimulate only cones, and the second, rod-driven phase of dark adaptation seen with the green light could not appear. Cones are present in the periphery as well, which is why the red curve still shows a cone plateau there. The fovea is dominated by medium- and long-wavelength cones and actually lacks short-wavelength cones, so it responds well to red light. Foveal cones reach their plateau within minutes; the concern is the absence of rods, not slow adaptation.',
        skill: '6A research design: retinal distribution of receptors',
      },
      {
        question: 'According to the opponent-process account, the image that participants saw on the white screen in Experiment 2 most likely appeared, from top to bottom, as:',
        options: ['green, yellow, and black.', 'red, blue, and white.', 'red, blue, and black.', 'blue, red, and white.'],
        correctAnswer: 1,
        explanation:
          'Prolonged viewing fatigues the member of each opponent pair that was driven, so when the eyes move to a neutral white field the partner signal dominates: green gives way to red, yellow to blue, and black to white. Seeing the original colors would describe a positive afterimage, not the adaptation-based negative afterimage that opponent processing predicts. Keeping black for the bottom stripe ignores the black–white opponent pair. Swapping red and blue pairs green with blue and yellow with red, which are not the opponent pairings.',
        skill: '6A opponent-process theory: afterimages',
      },
      {
        question: 'Which conclusion about the two volunteers who were screened out of Experiments 1 and 2 is best supported by the results of Experiment 3?',
        options: [
          'They have only two functioning cone types, so two primaries suffice to match any wavelength.',
          'They have no functioning cones, so all of their color matches depend on rods alone.',
          'They have a fourth type of cone that lets them tell apart lights the experimenter cannot.',
          'They have three normal cone types but a slower recovery of the rods after bleaching.',
        ],
        correctAnswer: 0,
        explanation:
          'Under trichromatic theory the number of primaries needed to match every wavelength equals the number of independent cone signals, so needing only two primaries, and confusing lights that a normal observer distinguishes, indicates dichromacy with one cone type missing. Someone relying on rods alone would have a single receptor signal and could match any wavelength with one primary by adjusting its intensity. A fourth cone type would require more primaries, not fewer, and the volunteers failed to distinguish lights the experimenter could, the reverse of an added discrimination. Rod recovery after bleaching plays no role in color matching at normal light levels, and three normal cone types would require three primaries.',
        skill: '6A trichromatic theory: color deficiency',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — culture: material/nonmaterial, sub/counterculture, lag, diffusion
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'How Cultures Hold Together and Change',
    passageText:
      'Sociologists use the term culture for the shared ways of life that members of a society learn and pass on. Material culture consists of the physical objects a group makes and uses, such as tools, buildings, clothing, and medical devices. Nonmaterial culture consists of the ideas attached to those objects and to social life generally: values, which define what is good and desirable; norms, which specify expected behavior; beliefs; symbols; and language. The same object can carry very different nonmaterial meanings in two societies, so that a wristwatch may be a mere instrument in one place and a mark of adulthood in another.\n\nWithin a large society, many groups share most of the dominant culture while maintaining distinctive practices of their own. A subculture is such a group. Its members may have a specialized vocabulary, style of dress, or set of leisure activities, yet they generally accept the society’s central values and institutions. A counterculture, by contrast, is defined by opposition. Its members reject some of the core values or norms of the wider society and often try to live by an alternative set, as when a movement withdraws from wage labor or refuses to recognize the authority of established institutions. Whether a group is regarded as a subculture or a counterculture can shift over time as the surrounding society itself changes.\n\nCultures change through invention, the creation of new objects or ideas by combining existing elements; discovery, the recognition of something that already existed; and diffusion. Diffusion is the spread of cultural elements from one group or society to another through trade, migration, media, or conquest. It can involve objects, practices, or ideas, and borrowed elements are often reinterpreted so that they fit the receiving culture. Change seldom proceeds evenly across all of culture’s parts. William Ogburn argued that material culture, especially technology, usually changes faster than the norms, laws, and values that govern its use. He called the resulting period of maladjustment, during which a society possesses a technology but has not yet settled on the rules for it, cultural lag.\n\nWhen people from different cultures come to live in one society, several outcomes are possible. Under assimilation, a minority group gradually adopts the language, customs, and values of the dominant group, and the distinctive features of the minority culture fade across generations. Under multiculturalism, groups retain distinct identities and practices while participating in shared political and economic institutions, and public policy may actively support this, for example by funding instruction in heritage languages. Individuals who move between cultures may experience culture shock, the disorientation that comes from suddenly encountering unfamiliar norms. Sociologists continue to debate whether a common civic culture is best sustained by expecting convergence or by recognizing difference, and national policies have swung between the two approaches over the past century.',
    questions: [
      {
        question:
          'Home genetic-testing kits were sold widely for years before any law addressed whether insurers could use the results, and during that period families disputed whether one member could share findings that also revealed information about relatives. Ogburn would most likely describe this period as an example of:',
        options: [
          'cultural diffusion, since the kits spread from laboratories into ordinary homes.',
          'counterculture, since buyers rejected medical authority over genetic information.',
          'cultural lag, since rules for using the kits trailed the kits’ availability.',
          'culture shock, since families were disoriented by unfamiliar scientific findings.',
        ],
        correctAnswer: 2,
        explanation:
          'The kits (material culture) were available before laws and family norms about their use (nonmaterial culture) had settled, which is the maladjustment Ogburn called cultural lag. Diffusion refers to spread between groups or societies; movement of a product from laboratories to consumers within one society does not capture the mismatch between technology and rules. Buying a test kit does not reject the core values of the society, so it is not a counterculture. Culture shock is the disorientation of individuals encountering an unfamiliar culture, not a society-wide gap between a technology and its norms.',
        skill: '9A cultural lag',
      },
      {
        question: 'Which group is best described as a counterculture rather than a subculture?',
        options: [
          'Emergency physicians who share technical slang and a dark humor unfamiliar to outsiders',
          'Collectors of antique radios who hold yearly conventions and publish their own newsletter',
          'Competitive video gamers who follow professional leagues and use a distinctive vocabulary',
          'A rural community whose members refuse money, private property, and state schooling',
        ],
        correctAnswer: 3,
        explanation:
          'Refusing money, private property, and state schooling rejects core economic and institutional norms of the wider society and replaces them with an alternative way of life, which defines a counterculture. Emergency physicians, radio collectors, and competitive gamers each have distinctive vocabulary or practices, but all of them work, buy, and participate within mainstream institutions and accept the society’s central values, so each is a subculture.',
        skill: '9A subculture vs counterculture',
      },
      {
        question:
          'A hospital adopts a system in which every patient judged to be at risk of falling wears a yellow wristband. Which of the following belongs to the nonmaterial culture associated with this system?',
        options: [
          'The plastic bands, which the hospital orders in several colors',
          'The expectation that staff check the band before moving a patient',
          'The printer at each nursing station that labels the bands',
          'The locked cabinet in which the unused bands are stored',
        ],
        correctAnswer: 1,
        explanation:
          'An expectation about how staff should behave is a norm, and norms, along with the symbolic meaning of the yellow color, are nonmaterial culture. The bands themselves, the printer that labels them, and the cabinet that stores them are physical objects and therefore belong to material culture, even though each is used within the system.',
        skill: '9A material vs nonmaterial culture',
      },
      {
        question:
          'Practices that began as part of a spiritual discipline in South Asia were taken up by gyms in North America and Europe, where they were taught mainly as exercise and their religious meanings were largely dropped. This case best illustrates:',
        options: [
          'diffusion, with a borrowed practice reshaped to suit the receiving culture.',
          'invention, because a new kind of exercise was built from existing elements.',
          'assimilation, because the adopters took on a minority group’s way of life.',
          'cultural lag, because the practice’s meaning changed more slowly than its form.',
        ],
        correctAnswer: 0,
        explanation:
          'The practices moved from one society to others, which is diffusion, and the loss of their religious meaning shows the reinterpretation that borrowed elements commonly undergo. Invention creates something new by combining elements, but here an existing practice was borrowed rather than created. Assimilation describes a minority group adopting the dominant culture, whereas here the dominant societies borrowed a practice and did not take on a whole way of life. Cultural lag concerns norms trailing technology, not the reinterpretation of a borrowed practice.',
        skill: '9A cultural diffusion',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. COGNITION/EMOTION — Lazarus appraisal and goodness-of-fit coping
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-a-03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Appraisal and Coping Before and After a Licensing Examination',
    passageText:
      'According to Richard Lazarus’s transactional model, stress is not a property of an event but of a relationship between a person and a situation. In primary appraisal, the person judges whether a situation is irrelevant, benign, or stressful and, if it is stressful, whether it represents harm already done, a threat of future harm, or a challenge that offers an opportunity for growth. In secondary appraisal, the person evaluates the options and resources available for dealing with the situation. Coping refers to the cognitive and behavioral efforts that follow. Problem-focused coping attempts to change the situation itself, for example by making a plan, gathering information, or acting directly on the source of stress. Emotion-focused coping attempts to regulate the distress the situation produces, for example by reframing its meaning, seeking comfort from others, or turning attention elsewhere. A goodness-of-fit hypothesis derived from the model proposes that neither form of coping is superior in general; each should be most useful when it matches what the situation actually allows.\n\nTo test this hypothesis, researchers followed 180 nursing graduates who were preparing to take a licensing examination. Participants completed questionnaires at two points: six weeks before the examination, while they were still studying, and three weeks after it, while they were waiting for results that would not be released for another month. At each point, participants rated how much they believed their own actions could still affect whether they passed (1 = not at all, 7 = completely). They also completed a coping inventory that asked how often they had used each of 28 strategies in the preceding week. At each point, every participant was classified as predominantly problem-focused or predominantly emotion-focused, according to which subscale score was higher relative to the sample average. Anxiety was measured with a standardized scale on which scores can range from 20 to 80. Results are summarized in Table 1.\n\nBecause classification was repeated, some participants changed category between the two points. Of the 110 participants who were predominantly problem-focused while preparing, 52 remained so while waiting. Strategies commonly endorsed by the problem-focused group during the waiting period included rechecking answers against textbooks and repeatedly contacting the licensing board to ask whether results were ready. The researchers also noted that participants who described the examination as a chance to prove their competence, rather than as a danger to their careers, reported somewhat lower anxiety at both points, regardless of coping category.\n\nThe researchers concluded that the results support the goodness-of-fit hypothesis. They recommended that programs for students facing high-stakes examinations teach flexible coping rather than a single preferred strategy.',
    figure:
      '**Table 1.** Mean perceived control, number of participants, and mean anxiety score, by time point and predominant coping category\n\n| Time point | Predominant coping | n | Perceived control (1–7) | Anxiety (20–80) |\n|---|---|---|---|---|\n| Six weeks before exam | Problem-focused | 110 | 5.8 | 37 |\n| Six weeks before exam | Emotion-focused | 70 | 5.3 | 48 |\n| Three weeks after exam | Problem-focused | 60 | 2.1 | 52 |\n| Three weeks after exam | Emotion-focused | 120 | 1.6 | 39 |',
    questions: [
      {
        question: 'Which conclusion is best supported by Table 1?',
        options: [
          'Emotion-focused coping was associated with lower anxiety at both time points.',
          'Which coping category went with lower anxiety depended on the time point.',
          'Anxiety rose from the first to the second time point in both coping categories.',
          'Problem-focused coping lowered perceived control during the waiting period.',
        ],
        correctAnswer: 1,
        explanation:
          'Before the examination the problem-focused group had lower anxiety (37 vs 48), but while waiting for results the emotion-focused group did (39 vs 52), so the advantage reversed with the time point. Emotion-focused coping was associated with higher, not lower, anxiety before the examination. Mean anxiety in the emotion-focused category fell from 48 to 39, so anxiety did not rise in both categories. Perceived control was low in both groups while waiting, and a correlational table cannot show that a coping style caused a change in control.',
        skill: '6C data interpretation: coping and anxiety',
      },
      {
        question: 'Participants who described the examination as a chance to prove their competence had most likely made:',
        options: [
          'a secondary appraisal that their coping resources were low.',
          'a primary appraisal that the examination posed a threat.',
          'a problem-focused effort to change how the examination turned out.',
          'a primary appraisal that the examination was a challenge.',
        ],
        correctAnswer: 3,
        explanation:
          'Judging what a stressful situation means, whether harm, threat, or an opportunity for growth, is primary appraisal, and seeing the examination as a chance to prove oneself is a challenge appraisal. Secondary appraisal concerns available resources, and nothing in the description indicates that these participants judged their resources to be low. A threat appraisal would describe the examination as a danger to their careers, the contrast the researchers drew. Describing the meaning of an event is an appraisal, not an action taken to alter its outcome, so it is not problem-focused coping.',
        skill: '6C primary vs secondary appraisal',
      },
      {
        question:
          'Which alternative explanation for the anxiety difference between the two coping categories during the waiting period is most difficult to rule out with this design?',
        options: [
          'Highly anxious participants may have been drawn to checking and calling, so anxiety shaped coping.',
          'Taking the anxiety scale a second time may have raised scores for everyone at the waiting point.',
          'Perceived control differed between time points, so the two waiting-period groups are not comparable.',
          'The problem-focused waiting group had only 60 members, too few for a meaningful mean anxiety score.',
        ],
        correctAnswer: 0,
        explanation:
          'Coping category was measured, not assigned, so the association could run in reverse: people who were already very anxious may have been the ones who kept rechecking answers and calling the board. A practice effect from retaking the scale would affect both waiting-period groups equally and could not produce a difference between them. The comparison in question is between two groups measured at the same time point, so a change in perceived control across time points does not undermine it. Sixty participants is ample for computing a group mean.',
        skill: '6C research design: correlational confound',
      },
      {
        question:
          'A patient is told that daily exercise and a low-salt diet can bring his high blood pressure into the normal range within a few months. According to the goodness-of-fit hypothesis, which response would be expected to benefit him most?',
        options: [
          'Reminding himself that many people live full lives with the condition',
          'Talking with friends about his worries so that he feels less alone',
          'Drawing up a weekly schedule of walks and low-salt meals to follow',
          'Keeping busy with hobbies so that he thinks less about his diagnosis',
        ],
        correctAnswer: 2,
        explanation:
          'The patient has been told that his own actions can change the outcome, so the situation is controllable and the hypothesis predicts that problem-focused coping, such as planning exercise and meals, will fit best. Reminding himself that others live well with the condition is emotion-focused reframing. Talking with friends to feel less alone is emotion-focused support seeking. Keeping busy to avoid thinking about the diagnosis is emotion-focused distraction. None of those three changes his blood pressure, which is the aspect of the situation he can control.',
        skill: '6C problem- vs emotion-focused coping (application)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — aggression, helping, attraction
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Why People Harm, Help, and Befriend One Another',
    passageText:
      'Social psychologists have tried to explain three kinds of behavior that at first seem to have little in common: aggression, helping, and attraction. A recurring theme is that each depends on both internal states and features of the immediate situation.\n\nAggression is behavior intended to harm another person who wishes to avoid that harm. The original frustration–aggression hypothesis held that frustration, the blocking of progress toward a goal, always produces an aggressive drive and that aggression always results from frustration. Later work weakened both claims. Leonard Berkowitz argued that frustration produces aggression chiefly by generating negative affect, and that any aversive event, such as pain, heat, or a foul odor, can do the same. Whether the resulting readiness becomes an attack depends on situational cues associated with aggression and on whether the person perceives the frustration as intentional and unjustified. When the source of a frustration is powerful or unavailable, aggression may be redirected toward a safer target.\n\nHelping raises a different puzzle: why would anyone incur a cost to benefit someone else? Social exchange theory proposes that people help when the anticipated rewards of helping, including praise, relief from guilt, or the reduction of their own distress at seeing another suffer, outweigh the anticipated costs. A norm of reciprocity, found in some form in nearly every society, obliges people to return benefits they have received, which makes helping a kind of investment. Daniel Batson’s empathy–altruism hypothesis grants that much helping is motivated in these ways but proposes that empathic concern for a specific person can produce a genuinely altruistic motive, whose goal is the other person’s welfare rather than one’s own. To distinguish the two accounts, Batson varied how easy it was for observers to leave a situation without helping. An egoistic motive to relieve one’s own distress can be satisfied by escaping, whereas an altruistic motive cannot.\n\nAttraction is predicted by surprisingly mundane factors. Proximity matters: people are more likely to become friends with those they encounter often, in part because repeated exposure to a neutral stimulus tends to increase liking for it. Similarity in attitudes, background, and interests predicts liking more reliably than complementarity does, perhaps because similar others validate one’s views and make interaction easier. Physical attractiveness strongly influences first impressions, though its effect on lasting relationships is smaller. Exchange principles appear here as well. A relationship tends to be stable when each partner judges that its rewards relative to its costs are at least as good as what could be expected elsewhere, a benchmark called the comparison level for alternatives.\n\nTaken together, these accounts suggest that behaviors often attributed to character are strongly shaped by circumstance, although none of them denies that individuals differ in how readily they aggress, help, or form attachments.',
    questions: [
      {
        question:
          'Participants whose work on a puzzle was repeatedly interrupted by a confederate were later allowed to set the loudness of noise blasts delivered to that confederate. Based on Berkowitz’s account, in which condition would participants most likely choose the loudest blasts?',
        options: [
          'The interruptions seemed accidental, and the room was cool and quiet.',
          'The interruptions seemed deliberate, and the room was uncomfortably hot.',
          'The interruptions seemed accidental, and the room was uncomfortably hot.',
          'The interruptions seemed deliberate, and the room was cool and quiet.',
        ],
        correctAnswer: 1,
        explanation:
          'Berkowitz’s account predicts the most aggression when negative affect is strongest and the frustration is seen as intentional and unjustified; deliberate interruptions combined with an aversive hot room satisfy both conditions. Accidental interruptions in a comfortable room provide neither, so aggression should be lowest there. Accidental interruptions in a hot room add aversive affect but lack perceived intent. Deliberate interruptions in a comfortable room supply intent without the added negative affect from heat, so aggression should be lower than when both are present.',
        skill: '7B frustration–aggression (Berkowitz)',
      },
      {
        question:
          'In a study using Batson’s method, participants watch a student receive mildly painful shocks and are offered the chance to take her place. Which pattern of results would most strongly support the empathy–altruism hypothesis over a purely egoistic account?',
        options: [
          'All participants volunteer less often when they may leave after two trials than when they must watch all ten.',
          'High-empathy participants volunteer often only when they must stay and watch all ten trials.',
          'Low-empathy participants volunteer more often when leaving is difficult than when leaving is easy.',
          'High-empathy participants volunteer often even when they may leave after watching two trials.',
        ],
        correctAnswer: 3,
        explanation:
          'If high-empathy observers help even when they could simply leave, relieving their own distress cannot be the goal, because escape would accomplish that at no cost; helping that survives an easy escape points to concern for the victim’s welfare. A general drop in helping whenever escape is easy is exactly what an egoistic account predicts. High-empathy helping that appears only when escape is difficult is also consistent with an egoistic motive to end one’s own distress. Low-empathy participants helping more when escape is hard fits the egoistic account and says nothing in favor of an altruistic motive.',
        skill: '7B research design: empathy–altruism vs egoism',
      },
      {
        question:
          'A charity mails potential donors a set of free address labels along with its request, and donations rise compared with requests sent without labels. This effect is best explained by:',
        options: [
          'the norm of reciprocity, since recipients feel obliged to return a benefit.',
          'the mere-exposure effect, since the labels make the charity’s name familiar.',
          'the similarity principle, since donors favor groups that share their values.',
          'the comparison level for alternatives, since donors weigh other charities.',
        ],
        correctAnswer: 0,
        explanation:
          'An unsolicited gift creates a sense of obligation to give something back, which is the norm of reciprocity. Mere exposure requires repeated encounters with a stimulus, whereas the comparison is between single mailings that both carry the charity’s name. Nothing about the labels signals shared values, so similarity does not explain the difference. The comparison level for alternatives concerns whether a person stays in a relationship, and the labels do not change what other charities offer.',
        skill: '7B reciprocity norm',
      },
      {
        question:
          'New residents of a large senior-housing complex are assigned apartments by lottery. A year later, each resident is asked to name close friends who live in the complex. Based on the passage, which result is most likely?',
        options: [
          'Residents most often name people whose personalities are opposite to their own.',
          'Residents most often name the people rated as the most physically attractive.',
          'Residents most often name people whose doors are closest to their own.',
          'Residents name people living in all parts of the complex at about equal rates.',
        ],
        correctAnswer: 2,
        explanation:
          'Because apartments were assigned at random, residents living near one another meet most often, and proximity with repeated exposure increases liking, so nearby neighbors should be named most. The passage says similarity predicts liking more reliably than complementarity, so friendships concentrated among opposites are unlikely. Attractiveness mainly shapes first impressions and has a smaller effect on lasting ties such as year-long friendships. Equal rates across the complex would mean distance played no role, contrary to the proximity effect.',
        skill: '7B attraction: proximity and mere exposure',
      },
      {
        question:
          'A woman says her marriage gives her fewer rewards than she once expected from a partner, yet she has no plans to leave, because she believes that living alone on her income would be worse. Social exchange theory attributes her decision to stay mainly to the fact that:',
        options: [
          'her marriage exceeds the standard she once expected from a partner.',
          'the norm of reciprocity obliges her to repay benefits already received.',
          'frequent exposure to her husband has steadily increased her liking for him.',
          'her marriage still compares favorably with what she could obtain elsewhere.',
        ],
        correctAnswer: 3,
        explanation:
          'Stability depends on the comparison level for alternatives: she stays because the outcomes of the marriage, though disappointing, exceed what she believes she could obtain outside it. Her marriage falls short of, rather than exceeds, what she once expected from a partner, which is why she is dissatisfied. She gives no indication that she stays to repay past benefits, so reciprocity is not her stated reason. Increased liking through exposure would make her more satisfied, but she describes the marriage as disappointing and stays for lack of a better option.',
        skill: '7B social exchange: comparison level for alternatives',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LEARNING & MEMORY — misinformation effect, source monitoring
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Misleading Accounts, Delay, and Memory for Sources',
    passageText:
      'Memory for an event is not a fixed record. Information encountered after an event can be incorporated into later reports of it, a phenomenon known as the misinformation effect. Two broad explanations have been offered. On one view, misleading information alters or replaces the original memory trace, so the witness genuinely no longer has access to what was seen. On a second view, both the original trace and the later information are stored, but the witness fails to keep track of where each came from. Source monitoring refers to the processes by which people attribute a memory to its origin, such as something seen, heard, read, or imagined, and errors in these attributions are thought to underlie many false memories.\n\nResearchers showed 300 undergraduates a 3-minute video of a collision between a cyclist and a delivery van at an intersection. The video contained 12 critical details, such as the color of the cyclist’s jacket and the type of sign at the corner. After a delay of 0, 2, 4, 6, or 8 days (60 participants per delay), each participant read a written summary of the collision that was described as a police officer’s account. For each participant, the summary misdescribed 6 of the 12 critical details (misled items) and did not mention the other 6 (control items); which details were misdescribed was counterbalanced across participants. Twenty minutes after reading the summary, all participants were tested on all 12 details.\n\nHalf of the participants at each delay received a standard recognition test in which they chose, for each detail, between the version shown in the video and an alternative. For misled items the alternative was the version in the summary; for control items it was a new version that had never been presented. The other half received a source test. For each version of each detail, participants indicated whether they had encountered it in the video only, in the summary only, in both, or in neither, and a response was scored as a false report only if the participant attributed the summary’s version to the video. Figure 1 shows the percentage of misled items falsely reported under each test, together with the percentage of control items on which participants chose the new version, pooled across test types because the two tests did not differ on control items.\n\nAt the end of the session, participants rated their confidence in each response. Among misled items that were falsely reported, mean confidence was only slightly lower than it was for correct responses. The researchers suggested that procedures for interviewing witnesses should take into account both the timing of any information a witness receives after an event and the way that memory for the event is later probed.',
    chart: {
      title: 'Figure 1. Percentage of items falsely reported, by delay between the video and the summary',
      kind: 'line',
      xLabel: 'Delay between video and summary',
      xUnit: 'days',
      yLabel: 'Items falsely reported',
      yUnit: '%',
      xValues: [0, 2, 4, 6, 8],
      yValues: [22, 30, 37, 42, 46],
      seriesLabel: 'Misled items, standard test',
      comparisonSeries: [
        { label: 'Misled items, source test', yValues: [9, 12, 15, 17, 19] },
        { label: 'Control items, both tests', yValues: [6, 6, 7, 6, 7] },
      ],
    },
    questions: [
      {
        question: 'Which conclusion is best supported by Figure 1?',
        options: [
          'Longer delays raised false reports under both tests, but more steeply under the standard test.',
          'The source test eliminated the misinformation effect at every one of the delays tested.',
          'Errors on control items increased steadily as the delay before the summary grew longer.',
          'False reports on the standard test roughly doubled from the 4-day to the 8-day delay.',
        ],
        correctAnswer: 0,
        explanation:
          'From 0 to 8 days, false reports rose from 22% to 46% on the standard test and from 9% to 19% on the source test, so both increased but the standard-test curve climbed more than twice as much. The source test did not eliminate the effect, because misled items were still falsely reported more often (9–19%) than control items (6–7%). Control-item errors stayed flat at 6–7% across delays. On the standard test the rate rose from 37% to 46% between 4 and 8 days, an increase of about a quarter, not a doubling.',
        skill: '6B data interpretation: misinformation effect',
      },
      {
        question: 'The difference between the two misled-item curves in Figure 1 is most consistent with which interpretation?',
        options: [
          'The summary had erased the video details for every misled item, leaving only its version available.',
          'Participants given the source test had watched the video more closely than the other participants.',
          'Some false reports on the standard test came from confusion about origin, not from a lost original memory.',
          'The source test was given after a longer interval, which allowed the summary’s influence to fade.',
        ],
        correctAnswer: 2,
        explanation:
          'When participants were asked explicitly where each version came from, many of them correctly placed the summary’s version in the summary, so a large share of standard-test errors reflected misattribution of source rather than loss of the video memory. If the summary had erased the original details, asking about sources could not recover them, and the two curves would coincide. Both halves watched the same video under the same conditions and differed only in the test they later received, so there is no basis for a difference in attention to the video. Both tests were given 20 minutes after the summary, so the interval did not differ.',
        skill: '6B source monitoring',
      },
      {
        question: 'Which explanation best accounts for the rise in false reports as the delay grew longer?',
        options: [
          'Proactive interference from the video grew stronger and blocked encoding of the summary.',
          'Memory for the video had faded, so conflicts with the summary were less likely to be noticed.',
          'At longer delays the summary was more recent at test, so its details were easier to retrieve.',
          'Participants at longer delays had rehearsed the video’s details more often before the test.',
        ],
        correctAnswer: 1,
        explanation:
          'As the delay lengthens, the original trace weakens through forgetting, so a participant is less likely to notice that the summary contradicts what was seen and more likely to accept its version. Proactive interference from the video would impair learning of the summary and should reduce, not increase, false reports. The summary was always read 20 minutes before the test, so its recency was the same at every delay. Rehearsing the video’s details would strengthen the original memory and lower false reports, the opposite of the trend observed.',
        skill: '6B forgetting and the misinformation effect',
      },
      {
        question:
          'A critic argues that participants chose the summary’s version not because their memories changed but because they assumed a police officer’s account must be accurate. Which modification would best test this criticism?',
        options: [
          'Increase the number of critical details in the video from 12 to 24.',
          'Show the video twice so that its details are encoded more strongly.',
          'Collect confidence ratings for control items as well as misled items.',
          'Warn some participants before testing that the summary contained errors.',
        ],
        correctAnswer: 3,
        explanation:
          'If participants were merely deferring to an authority they believed accurate, telling them that the summary contained errors should remove the reason to defer and bring false reports down to the control level; if false reports persist after the warning, the summary must have changed what participants remember. Doubling the number of details changes memory load but does not separate deference from memory change. Showing the video twice strengthens the original memory, which would reduce false reports under either account. Confidence ratings for control items would not reveal why misled items were falsely reported.',
        skill: '6B research design: demand characteristics',
      },
    ],
  },
]

export const FL4_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-ps-a-d01',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A drug binds to the GABA-binding site on postsynaptic GABA-A receptors without opening their chloride channels, and while it is bound, GABA cannot bind. The drug is best classified as:',
    options: [
      'an agonist, increasing inhibition of the postsynaptic neuron.',
      'an antagonist, increasing excitability of the postsynaptic neuron.',
      'an antagonist, decreasing excitability of the postsynaptic neuron.',
      'a reuptake inhibitor, prolonging the action of GABA in the synapse.',
    ],
    correctAnswer: 1,
    explanation:
      'A drug that occupies the receptor without activating it and blocks the natural ligand is an antagonist; because GABA-A activation normally lets chloride in and inhibits the neuron, blocking it removes inhibition and makes the neuron more excitable. An agonist would open the channel and increase inhibition. Decreased excitability would follow from enhancing GABA’s effect, not from blocking it. A reuptake inhibitor acts on presynaptic transporters, not on the postsynaptic receptor, and would increase rather than block GABA signaling.',
    skill: '6A drug action: agonist vs antagonist',
  },
  {
    id: 'fl4-ps-a-d02',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A medical resident working repeated overnight shifts at first had a pounding heart and could not sleep. After several weeks these acute symptoms subsided, although her cortisol levels stayed above baseline and she continued to perform well. In Selye’s general adaptation syndrome, she is most likely in the:',
    options: [
      'alarm stage, because the stressor is still present each week.',
      'exhaustion stage, because her cortisol remains above baseline.',
      'resistance stage, because her body has adapted while staying aroused.',
      'recovery stage, because her acute symptoms have now subsided.',
    ],
    correctAnswer: 2,
    explanation:
      'In the resistance stage the body adapts to a continuing stressor, the initial surge of arousal settles, and elevated hormones such as cortisol sustain functioning, matching her situation. The alarm stage is the initial emergency response she showed at first, not the adjusted state weeks later. Exhaustion occurs when resources are depleted and illness or breakdown appears, whereas she is performing well. Selye’s model has no recovery stage while the stressor continues, and her elevated cortisol shows she is still responding to it.',
    skill: '6C general adaptation syndrome',
  },
  {
    id: 'fl4-ps-a-d03',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question: 'Which statement would a social-cognitive theorist of personality accept but a strict behaviorist reject?',
    options: [
      'A person’s expectations about whether effort will pay off shape how she behaves.',
      'Consistent patterns of behavior arise largely from a person’s history of reinforcement.',
      'Personality differences are best explained by unconscious conflicts rooted in childhood.',
      'Explanations of behavior should refer to observable events rather than to inner states.',
    ],
    correctAnswer: 0,
    explanation:
      'Social-cognitive theory adds cognitive variables, such as expectancies about outcomes, to learning, whereas strict behaviorism explains behavior without appeal to mental states, so only the social-cognitive theorist would accept that expectations shape behavior. Both views agree that reinforcement history contributes to consistent behavior. Both reject unconscious childhood conflict, which belongs to psychoanalytic theory. Limiting explanation to observable events is the behaviorist position, which the social-cognitive theorist would reject.',
    skill: '7A behaviorist vs social-cognitive personality theory',
  },
  {
    id: 'fl4-ps-a-d04',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'According to Freud, a boy’s resolution of the Oedipal conflict by identifying with his father takes place during which psychosexual stage, and which structure of personality does it establish?',
    options: [
      'The anal stage; it establishes the ego',
      'The latency stage; it establishes the superego',
      'The phallic stage; it establishes the superego',
      'The genital stage; it establishes the ego',
    ],
    correctAnswer: 2,
    explanation:
      'Freud placed the Oedipal conflict in the phallic stage (about ages 3–6) and held that identifying with the same-sex parent internalizes that parent’s standards, forming the superego. The anal stage centers on toilet training and precedes the Oedipal conflict, and the ego emerges earlier as the child learns to deal with reality. Latency follows the resolution of the conflict and is a period of dormant sexual interest. The genital stage begins at puberty, long after the ego has formed.',
    skill: '7A psychoanalytic theory: psychosexual stages',
  },
  {
    id: 'fl4-ps-a-d05',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A person sits in a chair that is spun at a constant speed for a minute and then stopped abruptly. For several seconds afterward she feels as though she is turning in the opposite direction. This sensation originates in:',
    options: [
      'the utricle and saccule, whose otoliths shift as the head tilts.',
      'the cochlea, whose basilar membrane vibrates during the spinning.',
      'stretch receptors in the neck muscles that signal head position.',
      'the semicircular canals, whose fluid keeps moving after the head stops.',
    ],
    correctAnswer: 3,
    explanation:
      'The semicircular canals detect rotational acceleration through the movement of endolymph relative to the canal; when the chair stops, the fluid’s inertia keeps it moving, bending the hair cells as a turn in the opposite direction would. The utricle and saccule respond to linear acceleration and head tilt, not rotation. The cochlea transduces sound, not motion of the head. Neck proprioceptors signal the head’s position relative to the body, which did not change while she sat in the chair.',
    skill: '6A vestibular sense',
  },
  {
    id: 'fl4-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Interviews with physicians find that Black women report forms of workplace mistreatment that differ from those reported by Black men and by white women, and that cannot be predicted by adding together separate effects of race and of gender. This finding most directly illustrates:',
    options: [
      'social reproduction, the passing of inequality from one generation to the next.',
      'intersectionality, the combined and interacting effects of social positions.',
      'meritocracy, the allocation of positions on the basis of individual ability.',
      'cultural relativism, the judging of practices by a culture’s own standards.',
    ],
    correctAnswer: 1,
    explanation:
      'Intersectionality holds that social positions such as race and gender combine to produce distinct experiences that are not simply the sum of each position’s separate effects, which is exactly what the interviews show. Social reproduction concerns the transmission of advantage across generations, which the study does not examine. Meritocracy is a principle of allocation by ability and would not predict group-specific mistreatment. Cultural relativism is a stance for evaluating other cultures, not a pattern of inequality.',
    skill: '10A intersectionality',
  },
  {
    id: 'fl4-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A chain of walk-in clinics books one patient every 12 minutes, uses identical protocols at every location, and requires physicians to use software that prompts each question they ask and suggests a diagnosis. The software requirement most directly exemplifies which dimension of McDonaldization?',
    options: ['Control', 'Calculability', 'Predictability', 'Efficiency'],
    correctAnswer: 0,
    explanation:
      'In Ritzer’s account, control is achieved by replacing human judgment with nonhuman technology, as when software scripts a physician’s questions and suggests the diagnosis. Calculability, the emphasis on quantity that can be counted, is illustrated by the 12-minute appointment slot. Predictability, the sameness of products and services across settings, is illustrated by identical protocols at every location. Efficiency is the pursuit of the fastest means to an end; the software may save time, but its defining feature here is that it constrains the physician’s decisions.',
    skill: '9A rationalization: McDonaldization',
  },
  {
    id: 'fl4-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Surveys of people who recently changed jobs find that the information leading to the new position came more often from acquaintances than from close friends. Which explanation is most consistent with network research on the strength of ties?',
    options: [
      'Close friends withhold job leads because they often compete for the same positions.',
      'Acquaintances usually know what the job seeker knows, which makes their tips more credible.',
      'Acquaintances link a person to other social circles whose information differs from her own.',
      'Close friends are formed mainly at work, so they rarely know about openings at other employers.',
    ],
    correctAnswer: 2,
    explanation:
      'Weak ties act as bridges to other social circles, so acquaintances carry information that the job seeker and her close friends, who know many of the same people, do not already have. Network research does not attribute the effect to competition among friends. Acquaintances are valuable precisely because their information differs from the seeker’s, not because it overlaps. Close friendships form in many settings, and the explanation rests on the redundancy of information within a tight cluster, not on where friends are met.',
    skill: '9A social networks: strength of weak ties',
  },
]
