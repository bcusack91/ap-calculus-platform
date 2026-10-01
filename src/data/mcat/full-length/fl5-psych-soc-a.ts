/**
 * MCAT Full-Length Form 5 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-09-30 against the AAMC blueprint rebuild brief (BLUEPRINT-F56):
 * 400–600-word passages, experiment/information mix, keys never restate a
 * passage sentence, option lengths and key positions balanced, science skill
 * mix ≈ 35/45/10/10. Scenarios are disjoint from Forms 1–4 (checked against
 * every fl1–fl4 psych-soc title and the F56 avoid-list).
 *
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 *
 * Question counts per passage: 5/4/4/5/4 (= 22).
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL5_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. SENSATION & PERCEPTION — place vs frequency theory, audiogram,
  //    interaural time/level differences (noise-exposed machinists)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-a-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    title: 'Pitch, Hearing Loss, and Finding Where a Sound Comes From',
    passageText:
      'The cochlea converts pressure waves into neural signals along the basilar membrane, which is narrow and stiff near the base (closest to the oval window) and wide and flexible near the apex. According to place theory, each sound frequency produces its greatest displacement at a characteristic location: high frequencies peak near the base and low frequencies near the apex, so the brain can read pitch from which hair cells are most active. According to frequency theory, pitch is instead encoded by the rate of auditory nerve firing, with neurons discharging in step with the pressure peaks of the sound wave. Because a single neuron cannot fire more than roughly 1,000 times per second, frequency theory in its simple form cannot account for pitches above about 1,000 Hz; the volley principle extends it by proposing that groups of neurons fire in alternation, so that their combined output follows the waveform up to about 4,000 Hz. Most researchers now hold that both mechanisms operate, with firing rate dominant at low frequencies and place dominant at high frequencies.\n\nLocating a sound in the horizontal plane depends on comparing the two ears. A sound off to one side reaches the nearer ear slightly earlier (an interaural time difference) and, because the head blocks short-wavelength sound, somewhat more intensely (an interaural level difference). Time differences are most useful below roughly 1,500 Hz, where the wavelength exceeds the width of the head and the phase at the two ears can be compared without ambiguity. Level differences are most useful at higher frequencies, where the head casts a substantial acoustic shadow.\n\nHearing sensitivity is summarized on an audiogram, which plots the threshold intensity at each test frequency in decibels of hearing level (dB HL). Zero dB HL is the average threshold of healthy young adults, and each 10-dB increase represents a tenfold increase in the sound intensity needed for detection. Exposure to intense noise damages hair cells, particularly outer hair cells, and the damage typically begins in a restricted region of the cochlea.\n\nResearchers measured audiograms in 40 machinists (mean age 45) who had worked for at least 15 years in a factory without hearing protection and in 40 university students (mean age 24) with no history of noise exposure. Pure tones from 1,000 to 8,000 Hz were used, and each group’s mean threshold, averaged across both ears, is shown in Figure 1.\n\nIn a second session, participants sat at the center of a semicircle of eight loudspeakers and pointed to the speaker that had emitted a brief tone. Students located 500-Hz tones correctly on 92% of trials and 4,000-Hz tones on 88%. Machinists located 500-Hz tones on 90% of trials but 4,000-Hz tones on only 61%, and their errors for 4,000-Hz tones were not random: twelve machinists whose left-ear thresholds at 4,000 Hz exceeded their right-ear thresholds by at least 20 dB pointed too far to the right on most of their incorrect trials. The researchers noted that these twelve had spent most of their careers standing with the left side of their body toward the loudest machines.',
    chart: {
      title: 'Figure 1. Mean hearing threshold by test frequency, machinists versus students (higher values indicate poorer hearing)',
      kind: 'line',
      xLabel: 'Test frequency',
      xUnit: 'kHz',
      yLabel: 'Threshold',
      yUnit: 'dB HL',
      xValues: [1, 2, 3, 4, 5, 6, 7, 8],
      yValues: [10, 15, 30, 50, 45, 40, 40, 45],
      seriesLabel: 'Machinists (n = 40)',
      comparisonSeries: [{ label: 'Students (n = 40)', yValues: [5, 5, 5, 10, 10, 10, 10, 15] }],
    },
    questions: [
      {
        question:
          'According to Figure 1, the sound intensity needed for the average machinist to detect a 4,000-Hz tone is approximately how many times greater than the intensity needed by the average student?',
        options: ['4 times', '40 times', '10,000 times', '100,000 times'],
        correctAnswer: 2,
        explanation:
          'At 4 kHz the machinists’ mean threshold is 50 dB HL and the students’ is 10 dB HL, a difference of 40 dB. The passage states that each 10-dB step is a tenfold change in intensity, so 40 dB corresponds to four tenfold steps, or 10⁴ = 10,000 times. A factor of 4 counts the number of 10-dB steps instead of multiplying them. A factor of 40 treats the decibel difference as if it were itself an intensity ratio. A factor of 100,000 adds a fifth tenfold step that the 40-dB difference does not contain.',
        skill: '6A data interpretation: decibel scale',
      },
      {
        question: 'The pattern of thresholds in Figure 1 is most consistent with hair-cell damage that is concentrated:',
        options: [
          'near the apex of the basilar membrane, where it is widest and most flexible.',
          'in the basal half of the basilar membrane.',
          'uniformly along the basilar membrane from the oval window to the apex.',
          'in the auditory nerve fibers rather than in the hair cells of the cochlea.',
        ],
        correctAnswer: 1,
        explanation:
          'The machinists’ loss is small at 1–2 kHz and large from 4 kHz upward, and place theory maps those higher frequencies to the stiff basal portion of the membrane, so damage in that region produces exactly this frequency-selective pattern. Damage near the apex would raise thresholds mainly for low frequencies, which were least affected. Uniform damage would raise thresholds by a similar amount at every frequency instead of producing a loss that grows with frequency. The passage attributes noise damage to hair cells, and damage to the nerve as a whole would not single out one band of frequencies.',
        skill: '6A place theory: cochlear tonotopy',
      },
      {
        question: 'Which explanation best accounts for the direction of the localization errors made by the twelve machinists with asymmetric thresholds?',
        options: [
          'The 4,000-Hz tone arrived at their damaged left ears later than at their right ears, producing a false interaural time difference.',
          'Their damaged left ears could not detect the 4,000-Hz tone at all, so they relied on the right ear alone and guessed at random.',
          'Place coding in the left cochlea shifted the apparent pitch of the tone, and they confused the change in pitch with a change in location.',
          'The 4,000-Hz tone sounded louder in their right ears, producing a false interaural level difference that pointed toward the right.',
        ],
        correctAnswer: 3,
        explanation:
          'Localization of a 4,000-Hz tone relies mainly on interaural level differences, and an ear that is 20 dB less sensitive at that frequency makes the tone seem quieter on that side, which mimics a sound coming from the opposite side; a 500-Hz tone, localized by timing, was unaffected. Hair-cell damage lowers the sensitivity of an ear but does not delay the arrival of sound, and timing cues are not the primary cue at 4,000 Hz in any case. Elevated thresholds mean the tone was heard less well, not that it was inaudible, and random guessing would not produce errors consistently toward one side. A change in perceived pitch would not by itself bias pointing in a particular direction.',
        skill: '6A sound localization: interaural level differences',
      },
      {
        question: 'Which finding would most directly support frequency theory, rather than place theory, as the mechanism for coding the pitch of a 500-Hz tone?',
        options: [
          'Auditory nerve fibers arising from many different locations along the basilar membrane fire in synchrony with the pressure peaks of the 500-Hz wave.',
          'The displacement of the basilar membrane produced by the 500-Hz tone reaches its maximum at a single location near the apex.',
          'Damage to hair cells near the base of the cochlea leaves perception of the 500-Hz tone unaffected.',
          'Individual auditory nerve fibers are unable to fire more than about 1,000 times per second.',
        ],
        correctAnswer: 0,
        explanation:
          'Frequency theory holds that pitch is carried by the timing of nerve firing, so the decisive evidence is that fibers lock to the waveform at a rate matching the tone regardless of where along the membrane they originate. A single peak of displacement near the apex is the signature of place coding. Insensitivity to basal damage is also what place theory predicts, since a 500-Hz tone peaks far from the base. The firing-rate ceiling of neurons is a limitation that frequency theory must work around, not evidence for it.',
        skill: '6A frequency theory of pitch',
      },
      {
        question: 'Which change to the study design would best address the most serious limitation of the comparison shown in Figure 1?',
        options: [
          'Testing each ear separately rather than averaging the two ears for every participant.',
          'Recruiting a comparison group of 45-year-old office workers from the same factory.',
          'Measuring thresholds at frequencies below 1,000 Hz as well as above it.',
          'Lengthening each pure tone so that thresholds are measured more reliably.',
        ],
        correctAnswer: 1,
        explanation:
          'The machinists are two decades older than the students, and hearing loss that accompanies aging also affects high frequencies, so Figure 1 cannot separate the effect of noise from the effect of age; a same-age comparison group without noise exposure removes that confound. Separate-ear testing would help describe asymmetry but would not address the age difference between the groups. Adding low frequencies and lengthening tones would refine the measurements without changing the fact that the groups differ in age as well as in exposure.',
        skill: '6A research design: age as a confound',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — systems of stratification: caste vs class, Marx and Weber,
  //    Davis–Moore, meritocracy as ideology
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Ranking People: Caste, Class, and the Belief in Merit',
    passageText:
      'Every known society ranks its members, but societies differ in what is ranked, how positions are acquired, and how the resulting inequality is justified. Sociologists distinguish systems by their openness. In a caste system, position is ascribed at birth, fixed for life, and reinforced by rules that forbid marriage across strata and by beliefs that present the hierarchy as natural or sacred. In a class system, position is at least partly achieved: it depends on economic resources that can in principle be gained or lost, and movement between strata, or social mobility, is possible and often celebrated. Class systems nevertheless show strong continuity across generations, so sociologists ask how much of a person’s position is explained by the position of that person’s parents.\n\nKarl Marx defined class by a single criterion: one’s relation to the means of production. Those who own productive property (the bourgeoisie) and those who must sell their labor in order to live (the proletariat) have opposed interests, because the owners’ profit is the value of what workers produce beyond what they are paid. Marx expected members of a class to develop class consciousness, an awareness of shared position and shared interests; where workers instead accept beliefs that serve the owners’ interests, he spoke of false consciousness. Ideas that justify an existing distribution of advantage are called ideology.\n\nMax Weber accepted that economic position matters but argued that it is not the only dimension of stratification. He distinguished class (one’s market situation, which includes not only property but also the skills and credentials one can sell), status (the social honor or prestige attached to a group’s way of life), and party (organized power to influence collective decisions). The three dimensions usually go together but can diverge: a profitable but despised occupation carries class advantage without status, and a political movement can confer power on people who have neither wealth nor prestige. Weber’s scheme also implies that people with similar incomes may occupy different class positions if their incomes rest on different resources.\n\nA functionalist account, associated with Davis and Moore, holds that inequality persists because it is useful: the positions that matter most to society and that require the scarcest talents must offer the greatest rewards in order to attract and motivate qualified people. Critics reply that the account cannot specify a position’s importance independently of what it is paid, and that rewards reflect the power of occupational groups to restrict entry at least as much as any social need.\n\nMeritocracy, the principle that positions should be allocated according to ability and effort, is often treated in modern societies as a description of how things already work. Conflict theorists regard this as ideology in Marx’s sense. When people believe that outcomes reflect merit, those who are disadvantaged tend to blame themselves, those who are advantaged feel entitled, and demands for redistribution weaken. Comparative research complicates the picture: in several countries where the correlation between parents’ and children’s earnings is strongest, belief in the fairness of the economic system is nonetheless widespread, including among low earners.',
    questions: [
      {
        question:
          'A plant manager who earns a large salary but owns no shares in the firm supervises assembly workers who are paid by the hour. Marx and Weber would differ in classifying the manager because:',
        options: [
          'Marx would place the manager with the owners on account of his authority, whereas Weber would place him with the workers because he earns a wage.',
          'Marx would place the manager with the workers because he sells his labor, whereas Weber would distinguish his position by the credentials he brings to the market.',
          'Marx would classify the manager by the size of his income, whereas Weber would classify him by his control over the labor of others.',
          'Marx would treat the manager’s salary as surplus value taken from the workers, whereas Weber would treat it as a form of party power.',
        ],
        correctAnswer: 1,
        explanation:
          'For Marx the only criterion is ownership of productive property, and a salaried manager who owns none must sell his labor like the workers he supervises; for Weber, class is market situation, and the manager’s scarce skills and credentials give him a market position different from that of hourly workers. Authority over others is not Marx’s criterion, and Weber would not group a credentialed manager with the workers. Marx did not classify by income, and control of labor is not Weber’s definition of class. Surplus value is extracted from those who produce, not paid to a manager, and a salary is a market return, not party power.',
        skill: '9A/10A Marx vs Weber on class',
      },
      {
        question: 'Which observation would most strongly indicate that a society’s stratification is a caste system rather than a class system?',
        options: [
          'Children of wealthy parents are far more likely than the children of other families to become wealthy adults themselves.',
          'The highest-ranking groups justify their position by pointing to their own ability and effort.',
          'Marriage between members of different strata is prohibited, and occupations pass from parent to child by rule.',
          'The wealthiest tenth of households owns a majority of all productive property in the society.',
        ],
        correctAnswer: 2,
        explanation:
          'Enforced endogamy and hereditary occupation are the defining features of a closed, ascribed system in which position cannot be changed by what a person does. A strong intergenerational correlation in wealth is common in class systems, which the passage notes show considerable continuity. Justifying rank by ability and effort is the meritocratic ideology typical of class systems, not caste systems that invoke nature or the sacred. Concentrated ownership of productive property describes the distribution of economic resources in a class society rather than fixed, inherited ranks.',
        skill: '10A caste vs class systems',
      },
      {
        question:
          'In the comparative research mentioned at the end of the passage, low earners in low-mobility countries widely endorse the fairness of the economic system. A conflict theorist would most likely interpret this finding as evidence of:',
        options: [
          'class consciousness, since the low earners accurately perceive the interests they share with one another.',
          'status inconsistency, since the low earners rank higher in social honor than in economic resources.',
          'achieved status, since the low earners attribute their position to choices they themselves have made.',
          'false consciousness, since the low earners’ beliefs serve the interests of those above them.',
        ],
        correctAnswer: 3,
        explanation:
          'Where mobility is low, outcomes depend heavily on parental position, so a belief among low earners that the system is fair legitimates an arrangement that disadvantages them, which is precisely what conflict theorists mean by false consciousness. Class consciousness would involve recognizing shared disadvantage and opposed interests, the opposite of endorsing the system. Status inconsistency refers to a mismatch among Weber’s dimensions and is not shown by the survey. Achieved status is a type of position, not a belief about the fairness of a system.',
        skill: '10A meritocracy as ideology; false consciousness',
      },
      {
        question: 'Which finding would most directly challenge the functionalist account of stratification described in the passage?',
        options: [
          'The rewards attached to an occupation rise when its professional association limits the number of people licensed to practice, even though the work itself is unchanged.',
          'Occupations that require long periods of training generally pay more than occupations that do not.',
          'People in highly paid occupations report greater satisfaction with their jobs than people in poorly paid occupations.',
          'Societies with greater inequality of income also tend to have higher rates of economic growth.',
        ],
        correctAnswer: 0,
        explanation:
          'The functionalist account ties rewards to a position’s importance and the scarcity of the talent it requires, so a rise in pay produced purely by restricting entry, with no change in the work’s importance, shows rewards tracking group power instead, which is the critics’ objection. Higher pay for long-training occupations is what the account predicts, since training makes qualified people scarce. Job satisfaction among the well paid says nothing about why the positions are rewarded. A link between inequality and growth would, if anything, support the claim that inequality is useful.',
        skill: '10A functionalist view of stratification (evaluate)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASIS OF BEHAVIOR — sleep stages/EEG, homeostatic vs
  //    circadian processes, 40-h deprivation, evening light and melatonin
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Two Clocks: Sleep Pressure, Daylight, and the Melatonin Rhythm',
    passageText:
      'Sleep is not a uniform state. Recordings of brain electrical activity (EEG), eye movements, and muscle tone divide it into non-REM (NREM) stages and rapid eye movement (REM) sleep. As a person drifts off, the low-amplitude, fast beta waves of alert waking give way to alpha waves and then to the slower theta waves of stage N1. Stage N2 is marked by sleep spindles, brief bursts of fast activity, and K-complexes, large single waves. Stage N3, also called slow-wave sleep, is dominated by high-amplitude delta waves and is the stage from which a sleeper is hardest to rouse. REM sleep shows an EEG resembling waking, rapid eye movements, vivid dreaming, and loss of skeletal muscle tone. A healthy adult cycles through these stages roughly every 90 minutes; N3 is concentrated in the first cycles of the night, and REM periods lengthen toward morning.\n\nTwo processes regulate the timing of sleep. A homeostatic process tracks time spent awake: the longer one has been awake, the stronger the drive to sleep and the deeper the sleep that follows. A circadian process, generated by the suprachiasmatic nucleus (SCN) of the hypothalamus, imposes a roughly 24-hour rhythm of alertness that is independent of prior sleep. The SCN receives direct input from the retina and is reset primarily by light. It controls the pineal gland’s release of melatonin, a hormone whose concentration is low during the day, rises in the evening, and falls before waking. Light in the evening both suppresses melatonin while the light is present and shifts the circadian clock to a later time, whereas light in the early morning shifts the clock earlier.\n\nIn Study 1, twelve healthy adults slept in a laboratory for a baseline night, then remained awake under supervision for 40 hours before a recovery night. Each night was scored for stage. On the baseline night, participants spent 20% of sleep time in N3 and 22% in REM. On the recovery night they slept 70 minutes longer than at baseline; N3 rose to 34% of sleep time and was concentrated even more strongly in the first hours, while REM fell to 18% in the first half of the night and exceeded baseline only in the final cycles. During the deprivation period, participants rated themselves sleepiest and performed worst on a reaction-time task between 4 and 6 a.m., and their performance partially recovered by late morning even though no sleep had occurred.\n\nIn Study 2, the same participants completed two evening sessions one week apart, in counterbalanced order. In the dim-light session, room illumination was held below 10 lux from 6 p.m. until bedtime. In the bright-light session, participants sat before a 2,500-lux light source from 7 p.m. to 11 p.m. and were otherwise in dim light. Saliva was collected every 2 hours, and the melatonin concentration in each sample is plotted in Figure 1. The researchers defined melatonin onset as the first time at which the concentration exceeded 5 pg/mL.',
    chart: {
      title: 'Figure 1. Salivary melatonin concentration across the night, dim-light session versus bright-light session (clock time in hours; 24 = midnight, 26 = 2 a.m.)',
      kind: 'line',
      xLabel: 'Clock time',
      xUnit: 'h',
      yLabel: 'Melatonin',
      yUnit: 'pg/mL',
      xValues: [18, 20, 22, 24, 26, 28, 30, 32],
      yValues: [2, 3, 9, 18, 24, 22, 12, 4],
      seriesLabel: 'Dim light all evening',
      comparisonSeries: [{ label: 'Bright light 7–11 p.m.', yValues: [2, 2, 3, 8, 19, 24, 16, 6] }],
    },
    questions: [
      {
        question: 'Based on Figure 1 and the researchers’ definition, evening bright light delayed melatonin onset by approximately:',
        options: ['30 minutes.', '1 hour.', '2 hours.', '4 hours.'],
        correctAnswer: 2,
        explanation:
          'In the dim-light session the concentration crosses 5 pg/mL between the 8 p.m. (3 pg/mL) and 10 p.m. (9 pg/mL) samples, so onset falls at roughly 8:40 p.m.; in the bright-light session it crosses 5 pg/mL between 10 p.m. (3 pg/mL) and midnight (8 pg/mL), roughly 10:50 p.m. The difference is close to 2 hours. A delay of 30 minutes or 1 hour would require the bright-light curve to reach 5 pg/mL before the 10 p.m. sample, which it does not. A 4-hour delay would place onset after midnight, but the midnight sample is already above 5 pg/mL.',
        skill: '6A data interpretation: melatonin onset',
      },
      {
        question: 'Which feature of Figure 1 best indicates that the bright light shifted the circadian clock rather than only suppressing melatonin while the light was present?',
        options: [
          'Melatonin in the bright-light session remained low until the light source was switched off at 11 p.m., then rose rapidly.',
          'The peak concentration reached in the bright-light session was no lower than the peak in the dim-light session.',
          'The two sessions showed the same concentration at 6 p.m., before either lighting condition had begun.',
          'Melatonin peaked and began to decline about 2 hours later in the bright-light session, long after the light was off.',
        ],
        correctAnswer: 3,
        explanation:
          'Acute suppression can only hold melatonin down while the light is on; once the light is off at 11 p.m., a clock that had not shifted would produce a peak and decline at the usual times, so a peak and fall that occur about 2 hours late, in the dark, show that the clock itself was reset. Low melatonin during the exposure is exactly what acute suppression alone would produce, so it cannot distinguish the two. An unchanged peak height shows that the rhythm was not blunted but says nothing about its timing. Equal 6 p.m. values simply confirm that the sessions started from the same baseline.',
        skill: '6A circadian phase shift vs acute suppression (reasoning)',
      },
      {
        question: 'The results of Study 1 for stage N3 are best explained by:',
        options: [
          'the homeostatic process, because sleep pressure built up over 40 hours awake.',
          'the circadian process, because the recovery night began at the same clock time as the baseline night.',
          'REM rebound, because REM sleep lost during the deprivation was recovered during the first sleep cycles.',
          'a resetting of the suprachiasmatic nucleus by the laboratory lighting during the period of deprivation.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage describes the homeostatic process as producing deeper sleep the longer one has been awake, and the rise of N3 from 20% to 34%, concentrated at the start of the night, is the deep-sleep rebound that process predicts. The circadian process is independent of time awake and would not increase deep sleep because the clock time was unchanged. REM actually fell in the first half of the recovery night and rose only in the final cycles, so it was not recovered first. Nothing in Study 1 involved a light manipulation, and resetting the SCN would alter timing rather than the amount of delta-wave sleep.',
        skill: '6A homeostatic regulation of slow-wave sleep',
      },
      {
        question:
          'Participants’ reaction-time performance improved by late morning of the deprivation period even though they had not slept. This improvement is best explained by:',
        options: [
          'adaptation of the homeostatic process to prolonged wakefulness, which lowers sleep pressure.',
          'the rising phase of the circadian alertness rhythm, which operates independently of time spent awake.',
          'a decline in melatonin produced by the dim lighting of the laboratory during the morning.',
          'brief episodes of stage N3 sleep during the task that partially discharged accumulated sleep pressure.',
        ],
        correctAnswer: 1,
        explanation:
          'The circadian process imposes a daily rhythm of alertness regardless of prior sleep, so alertness falls to a trough in the early morning hours and climbs again toward midday even as time awake, and therefore homeostatic pressure, keeps increasing. The homeostatic process does not adapt; sleep pressure continues to rise the longer one is awake. Dim light does not lower melatonin, which in any case falls on its own circadian schedule and would not explain a performance rise. Participants were supervised to stay awake, and sleep pressure built up over 40 hours was discharged during the recovery night, not during the task.',
        skill: '6A circadian vs homeostatic processes (application)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — compliance techniques (foot-in-the-door,
  //    door-in-the-face, lowball) in a field experiment with a table
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Three Ways of Asking: Sequential Requests at a Shopping Center',
    passageText:
      'Compliance is a change in behavior in response to a direct request, as distinct from conformity to unstated group norms or obedience to an authority. Social psychologists have identified sequential-request techniques that raise compliance above what a target request achieves on its own. In the foot-in-the-door technique, a small request that nearly everyone grants is followed by the larger target request; the usual explanation is self-perception, in which people infer from their first act that they are the kind of person who helps and then act consistently with that self-image. In the door-in-the-face technique, a large request that is almost always refused is followed by the smaller target request; the usual explanation is reciprocal concession, in which the requester’s retreat to a smaller request is experienced as a concession that the target feels obliged to match. In the lowball technique, people first agree to a request whose full cost is hidden; the cost is then revealed, and the explanation is that a commitment once made tends to be maintained even after the terms worsen.\n\nResearchers tested the three techniques in a field experiment. Research assistants approached adults who were alone at a shopping center in a mid-sized city and asked them to volunteer for a river cleanup organized by a community group. The target request in every condition was two hours of work on the coming Saturday starting at 6 a.m. Shoppers were randomly assigned to one of five conditions of 80 people each. In the control condition, the target request was made alone. In the foot-in-the-door condition, shoppers were first asked to sign a petition supporting river protection (97% did) and then, after signing, were given the target request. In the door-in-the-face conditions, shoppers were first asked to commit to one Saturday a month for a year (no one agreed); in one version the same assistant immediately made the target request, and in another version a second assistant, who appeared unrelated to the first, made the target request after the first assistant had walked away. In the lowball condition, shoppers were asked to volunteer for two hours on Saturday without being told the starting time; 70% agreed, and only then were they told that work began at 6 a.m. and asked whether they still wished to take part. Everyone who agreed to the target request gave a name and phone number, and the research team recorded who actually appeared at the river on Saturday. Results are shown in Table 1.\n\nThe researchers noted that the techniques are often used by people who have no intention of making the larger request again, and that the door-in-the-face technique in particular depends on the target perceiving the second request as a genuine retreat. They cautioned that their design could not establish whether shoppers who agreed under any of the techniques felt pressured, because no measure of how participants experienced the request was taken.',
    figure:
      '**Table 1. Compliance with the target request and attendance on the day of the cleanup, by condition (n = 80 per condition)**\n\n| Condition | Agreed to target request (%) | Appeared on Saturday (%) |\n|---|---|---|\n| Control (target request only) | 25 | 20 |\n| Foot-in-the-door | 48 | 40 |\n| Door-in-the-face, same requester | 50 | 38 |\n| Door-in-the-face, different requester | 26 | 21 |\n| Lowball | 56 | 45 |',
    questions: [
      {
        question: 'Which comparison in Table 1 most directly tests the reciprocal-concession explanation of the door-in-the-face technique?',
        options: [
          'Door-in-the-face with the same requester versus the control condition.',
          'The two door-in-the-face conditions versus each other.',
          'Door-in-the-face with the same requester versus the foot-in-the-door condition.',
          'Door-in-the-face with a different requester versus the lowball condition.',
        ],
        correctAnswer: 1,
        explanation:
          'A concession can only be reciprocated if the person who made the large request is the one who retreats to the smaller one; comparing the same-requester and different-requester versions holds everything else constant and isolates that element, and the collapse of compliance to the control level (26% versus 25%) when the requester changes supports the explanation. Comparing the same-requester version with the control shows only that the technique works, not why. Comparing it with the foot-in-the-door condition contrasts two different techniques and cannot isolate the concession. Comparing the different-requester version with lowball mixes two techniques and two explanations.',
        skill: '7B research design: isolating a mechanism',
      },
      {
        question:
          'Which additional finding would most strengthen the self-perception explanation of the foot-in-the-door result over the alternative that signing the petition simply made the community group seem more familiar and trustworthy?',
        options: [
          'The foot-in-the-door effect is just as large when the target request comes two weeks later from an unrelated organization seeking volunteers for a different cause.',
          'The foot-in-the-door effect is larger among shoppers who report having heard of the community group before being approached.',
          'Shoppers who signed the petition rate the community group as more trustworthy than control shoppers do.',
          'The foot-in-the-door effect is larger when the assistant who makes the target request is wearing the community group’s T-shirt.',
        ],
        correctAnswer: 0,
        explanation:
          'If the effect survives a change of organization, cause, and time, it cannot depend on familiarity with this particular group, leaving the shopper’s inference about being a helpful person as the explanation. A larger effect among those already familiar with the group, higher trust ratings after signing, and a stronger effect when the group is made more identifiable all point toward familiarity and trust rather than toward a changed self-image.',
        skill: '7B self-perception account of compliance (strengthen)',
      },
      {
        question: 'Of the shoppers in the lowball condition who initially agreed to volunteer, approximately what proportion still agreed after learning the starting time?',
        options: ['0.56', '0.70', '0.80', '0.90'],
        correctAnswer: 2,
        explanation:
          'The passage reports that 70% of the lowball shoppers agreed before the starting time was revealed, and Table 1 shows that 56% agreed to the target request afterward, so the proportion who maintained their commitment is 56/70 = 0.80. The value 0.56 is the final compliance rate for the whole condition, not the proportion of initial agreers. The value 0.70 is the initial agreement rate. The value 0.90 would require about 63% to have persisted.',
        skill: '7B data interpretation: conditional proportion',
      },
      {
        question:
          'A landlord tells a tenant that the rent will rise by 30 percent next year; after the tenant protests, the landlord agrees to raise it by only 10 percent, which is the increase he had intended all along. The landlord’s approach most closely resembles:',
        options: ['the foot-in-the-door technique.', 'the lowball technique.', 'conformity to a descriptive norm.', 'the door-in-the-face technique.'],
        correctAnswer: 3,
        explanation:
          'An initial demand that is expected to be refused, followed by a retreat to the smaller demand the requester wanted all along, is the door-in-the-face sequence; the tenant is likely to accept the 10 percent increase as a concession to be reciprocated. Foot-in-the-door would begin with a small request that is granted, not a large one that is rejected. Lowball would secure agreement first and reveal a hidden cost afterward. Conformity to a descriptive norm involves matching what others are observed to do, and no information about other tenants is involved.',
        skill: '7B compliance techniques (application)',
      },
      {
        question:
          'Suppose a sixth condition had paid shoppers five dollars for signing the petition before making the target request. According to the self-perception account, compliance with the target request in this condition would most likely be:',
        options: [
          'higher than in the foot-in-the-door condition, because the payment would add a motive of reciprocity to the self-image of a helpful person.',
          'about the same as in the foot-in-the-door condition, because the first act was performed regardless of why.',
          'closer to the control condition, because shoppers would attribute their signing to the payment rather than to a helpful disposition.',
          'lower than in the control condition, because shoppers would experience the small payment as an insult.',
        ],
        correctAnswer: 2,
        explanation:
          'Self-perception holds that people infer their dispositions from their behavior only when no obvious external cause explains it; a payment supplies such a cause, so signing would no longer imply a helpful self-image and the boost over the control condition should largely disappear. Reciprocity for a payment the shopper already received would not add to a self-image that the payment has undermined. The account depends on the inference drawn from the act, not merely on the act having occurred. Nothing in the account predicts that a small payment would reduce compliance below the control level.',
        skill: '7B self-perception theory (new situation)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LEARNING & MEMORY — observational learning: Bandura's processes,
  //    acquisition vs performance, mirror neurons, media effects
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Learning by Watching: Models, Mirror Responses, and the Media Debate',
    passageText:
      'Much of what people learn, they learn without being reinforced themselves. In observational learning, an observer acquires a behavior by watching a model perform it, and the observer’s tendency to perform the behavior is shaped by what happens to the model. Albert Bandura’s early studies showed that children who watched an adult strike an inflatable doll later reproduced the adult’s specific actions, and that children who had seen the adult rewarded performed many more of these actions than children who had seen the adult scolded. Yet when all of the children were later offered a prize for imitating the adult, those who had watched the scolded model reproduced the actions as fully as the others. Bandura concluded that the consequences delivered to a model affect whether an observer performs what was learned, not whether it was learned: vicarious reinforcement and vicarious punishment act on performance, whereas acquisition occurs through observation alone.\n\nBandura’s social cognitive account specifies four processes that observational learning requires. The observer must attend to the model, which depends on the model’s salience and on the observer’s interest; must retain what was observed, usually as a verbal or visual representation; must be capable of reproducing the behavior, which for complex motor skills may require practice and feedback; and must be motivated to perform it, which depends on anticipated consequences, including those observed to befall the model. Models are imitated more readily when they are similar to the observer, admired by the observer, or seen to be rewarded.\n\nNeurons in the premotor and parietal cortex of monkeys fire both when the animal performs a grasping action and when it watches another individual perform the same action. Human imaging studies show overlapping activity in corresponding regions during action and during action observation. These mirror responses are often proposed as a neural basis for imitation and for understanding the intentions of others, though the evidence in humans is largely correlational, and the responses are strongest for actions already in the observer’s repertoire.\n\nThe theory has been applied to media. Correlational studies find that children who watch more violent television or play more violent video games behave more aggressively, and laboratory experiments find that brief exposure to violent content raises aggressive responses immediately afterward. Both kinds of evidence have limits. Correlations may reflect children who are already aggressive choosing violent media, or a third factor such as an unsupervised home environment that raises both; laboratory measures of aggression may not reflect behavior outside the laboratory. Longitudinal studies that measure media use first and aggression years later, controlling for initial aggression, address the first problem but not the others. Observational learning principles have also been used deliberately, as when health campaigns portray admired peers choosing not to smoke and being accepted for it, or when a dramatic series models the negotiation of condom use between partners.',
    questions: [
      {
        question:
          'A six-year-old watches her older brother use a swear word and be sent to his room for it. She does not use the word for several weeks, but one afternoon, while playing alone in the yard, she uses it repeatedly. According to Bandura’s account, the girl’s behavior shows that:',
        options: [
          'vicarious punishment prevented acquisition of the word until the memory of the punishment faded.',
          'the word was acquired by observation, and vicarious punishment suppressed only its performance.',
          'observational learning requires direct reinforcement of the observer before the behavior can appear.',
          'the brother’s punishment acted as vicarious reinforcement by drawing the girl’s attention to the word.',
        ],
        correctAnswer: 1,
        explanation:
          'The girl clearly learned the word when she observed it, and seeing her brother punished suppressed her use of it only while the risk of similar consequences seemed real; alone in the yard, the anticipated consequences changed and the already-acquired behavior appeared, which is the acquisition–performance distinction Bandura drew. Vicarious punishment affects performance, not acquisition, so it could not have blocked learning. The girl was never reinforced herself, so direct reinforcement was not required. Punishment of a model reduces, rather than increases, the observer’s tendency to perform the behavior, so it is not vicarious reinforcement.',
        skill: '7A acquisition vs performance in observational learning',
      },
      {
        question:
          'A medical student watches an attending physician tie a surgical knot, can describe the sequence of steps in order the next day, and wants very much to do it well, but her first attempts fail. According to Bandura’s account, the process that is limiting her performance is:',
        options: ['attention.', 'retention.', 'reproduction.', 'motivation.'],
        correctAnswer: 2,
        explanation:
          'She watched the demonstration, retained it well enough to describe the steps in order, and is motivated, so the failure lies in the capacity to execute the motor sequence, which the passage notes may require practice and feedback for complex skills. Attention was adequate, as shown by her later accurate description. Retention was adequate for the same reason. Motivation is explicitly present.',
        skill: '7A Bandura’s four processes of modeling',
      },
      {
        question:
          'A longitudinal study measures children’s use of violent media at age 8 and their aggression at age 15, controlling statistically for aggression at age 8, and finds a positive association. Which alternative explanation for this association remains most difficult to rule out?',
        options: [
          'Children who were already aggressive at age 8 chose more violent media at that age.',
          'Aggression at age 15 caused the children to seek out more violent media at age 8.',
          'Laboratory measures of aggression do not reflect how the children behave outside the laboratory.',
          'An unmeasured third factor raised both media use and later aggression.',
        ],
        correctAnswer: 3,
        explanation:
          'Controlling for initial aggression addresses the possibility that aggressive children selected violent media, and measuring media use seven years before the outcome rules out reverse causation, but a factor that influences both media use and later aggression has not been measured or controlled and remains a plausible explanation. The selection explanation is exactly what the control for age-8 aggression addresses. A later outcome cannot cause an earlier behavior. The study measures behavior over years, not in a laboratory, so the laboratory-validity concern does not apply.',
        skill: '7A research design: longitudinal studies and confounding',
      },
      {
        question:
          'A health department wants to use observational learning to reduce vaping among high school students. Based on the passage, which campaign would be expected to be most effective?',
        options: [
          'A video in which a popular senior at the school declines a vape at a party and is then warmly included by the friends around her.',
          'A video in which a physician in a white coat lists the health consequences of vaping and tells students that they should not vape.',
          'A video in which a celebrity unknown to most of the students reads a scripted warning about the dangers of nicotine.',
          'A poster that reports the percentage of students at the school who vaped during the past month.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage says models are imitated most readily when they are similar to the observer, admired, and seen to be rewarded, and a popular schoolmate who refuses and is accepted for it supplies all three features along with a modeled behavior to copy. A physician is an authority delivering a message, not a similar model performing the desired behavior. An unfamiliar celebrity is neither similar nor admired by the students and models no behavior. A statistic about prevalence provides no model at all and, if the percentage is high, may even suggest that vaping is common.',
        skill: '7A characteristics of effective models (application)',
      },
    ],
  },
]

export const FL5_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl5-ps-a-d01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'In a task in which participants decide as quickly as possible whether a string of letters is a word, they respond faster to BUTTER when it is preceded by BREAD than when it is preceded by CHAIR. This result is best explained by:',
    options: [
      'spreading activation from the first word to related concepts in a semantic network.',
      'the serial position effect, since the first word is remembered better than the second.',
      'rehearsal of the first word in working memory, which frees capacity for the second word.',
      'a dual-coding advantage for words that can be stored as both images and sounds.',
    ],
    correctAnswer: 0,
    explanation:
      'In a semantic network, activating one concept partially activates the concepts linked to it, so BREAD leaves BUTTER already primed and recognizable more quickly, whereas an unrelated word provides no such head start. The serial position effect concerns recall of items from a list, not recognition speed for a single word. Rehearsal would apply equally to related and unrelated first words and would not favor BUTTER after BREAD specifically. Dual coding concerns the memorability of concrete words and does not depend on the relation between two words.',
    skill: '6B semantic networks and spreading activation',
  },
  {
    id: 'fl5-ps-a-d02',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Members of an isolated group with almost no exposure to outsiders or to mass media were told brief stories, such as one about a person whose child had died, and asked to choose from photographs of people from another culture the face that fit each story. Their choices matched those of participants in industrialized countries for most of the emotions tested. This result most directly supports the claim that:',
    options: [
      'the display rules that govern when an emotion may be shown are the same in every culture.',
      'emotion arises from the cognitive interpretation of a state of physiological arousal.',
      'people identify their own emotions by sensing the movements of their own facial muscles.',
      'the facial expressions of several basic emotions are recognized across cultures and are not learned from shared media.',
    ],
    correctAnswer: 3,
    explanation:
      'A group that could not have learned the expressions from films or television yet reads them the same way as people elsewhere indicates that the expressions of basic emotions are universal rather than culturally transmitted. Display rules concern when an expression is shown or masked and are known to vary across cultures; the study did not examine them. The two-factor interpretation of arousal concerns how emotion is produced, not how expressions are recognized. The facial feedback idea concerns a person’s own emotional experience, whereas these participants were judging the faces of others.',
    skill: '6C universality of facial expressions',
  },
  {
    id: 'fl5-ps-a-d03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A patient with damage confined to both amygdalae and a patient with damage confined to both hippocampi each take part in a procedure in which a blue square is repeatedly followed by a loud, unpleasant noise. Which outcome is most likely?',
    options: [
      'Neither patient develops a conditioned response, because both structures are required for conditioning to occur.',
      'The amygdala patient develops a conditioned skin-conductance response to the square but cannot state that it predicted the noise; the hippocampal patient shows the reverse.',
      'Both patients develop a conditioned response and can state the contingency, because conditioning of this kind depends on the cerebellum.',
      'The amygdala patient can state that the square predicted the noise but develops no conditioned skin-conductance response; the hippocampal patient shows the reverse.',
    ],
    correctAnswer: 3,
    explanation:
      'The amygdala is required for acquiring the conditioned autonomic fear response, whereas the hippocampus is required for forming the explicit memory of the pairing, so amygdala damage leaves a patient who knows the rule but shows no bodily response, and hippocampal damage leaves a patient who responds bodily without being able to report why. Because the two structures support different components, damage to one does not abolish both, so neither patient losing everything is incorrect. The pattern of the second option assigns each deficit to the wrong structure. The cerebellum is involved in conditioning simple motor reflexes such as eye-blinks, not in autonomic fear responses.',
    skill: '6A amygdala and conditioned fear',
  },
  {
    id: 'fl5-ps-a-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'Adults who have cared for a spouse with dementia for several years produce fewer antibodies after an influenza vaccination than age-matched adults who are not caregivers. The most likely explanation is that:',
    options: [
      'prolonged glucocorticoid elevation suppresses the caregivers’ lymphocyte responses.',
      'acute sympathetic activation in the caregivers diverts blood from lymphoid tissue to skeletal muscle.',
      'chronic stress raises the caregivers’ body temperature enough to inactivate the vaccine antigens.',
      'social isolation reduces the caregivers’ exposure to pathogens, leaving their immune systems less prepared.',
    ],
    correctAnswer: 0,
    explanation:
      'Years of caregiving are a chronic stressor, and sustained glucocorticoid exposure dampens the lymphocyte responses on which an antibody response to vaccination depends. Sympathetic activation is a rapid, short-lived response to an acute threat and does not explain a deficit measured over weeks after vaccination. Stress does not raise core temperature to levels that would damage a vaccine. Lower everyday pathogen exposure would not reduce the specific antibody response to an antigen that was injected directly.',
    skill: '6C chronic stress and immune suppression',
  },
  {
    id: 'fl5-ps-a-d05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A car’s warning chime sounds continuously until the driver fastens the seat belt, and after a few weeks the driver buckles up before starting the engine. Separately, a teenager who comes home after curfew loses phone privileges for a week and thereafter comes home on time. The two procedures are, respectively, examples of:',
    options: [
      'negative punishment and negative reinforcement.',
      'positive reinforcement and negative punishment.',
      'negative reinforcement and negative punishment.',
      'negative reinforcement and positive punishment.',
    ],
    correctAnswer: 2,
    explanation:
      'Buckling up removes an aversive chime and the behavior becomes more frequent, which is negative reinforcement; losing the phone removes a desirable stimulus and the late behavior becomes less frequent, which is negative punishment. Reversing the two labels mismatches each procedure with its effect on behavior. Nothing pleasant is added when the driver buckles up, so it is not positive reinforcement. The teenager has something taken away rather than something aversive added, so it is not positive punishment.',
    skill: '7A negative reinforcement vs negative punishment',
  },
  {
    id: 'fl5-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A hospital publicly presents a nurse with a certificate for a year without a medication error, and on the same ward colleagues stop inviting a physician to lunch after he repeatedly belittles the staff. In sociological terms, the certificate and the exclusion are, respectively:',
    options: [
      'an informal positive sanction and a formal negative sanction.',
      'a formal positive sanction and an informal negative sanction.',
      'a formal positive sanction and a formal negative sanction.',
      'an informal positive sanction and an informal negative sanction.',
    ],
    correctAnswer: 1,
    explanation:
      'A certificate awarded by the institution through an official procedure is a formal sanction, and because it rewards conformity it is positive; being excluded from lunch is a spontaneous reaction by peers with no official standing, so it is an informal sanction, and because it punishes a norm violation it is negative. Describing the certificate as informal ignores its official source, and describing the exclusion as formal ignores that no rule or authority imposed it. Treating both as formal or both as informal misclassifies one of the two.',
    skill: '9A formal vs informal sanctions',
  },
  {
    id: 'fl5-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a country, 24% of the population is younger than 15, 16% is 65 or older, and the remainder is of working age (15 to 64). The country’s total dependency ratio, expressed as the number of dependents per 100 people of working age, is closest to:',
    options: ['40', '60', '67', '150'],
    correctAnswer: 2,
    explanation:
      'The dependency ratio divides the dependent population (those under 15 plus those 65 and older, 24% + 16% = 40%) by the working-age population (100% − 40% = 60%) and multiplies by 100: (40/60) × 100 ≈ 67. The value 40 is the percentage of the population that is dependent, not a ratio to the working-age group. The value 60 is the working-age share of the population. The value 150 inverts the ratio, dividing the working-age population by the dependents.',
    skill: '9B dependency ratio (calculation)',
  },
  {
    id: 'fl5-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a national survey, the median household income of Group A is 1.3 times that of Group B, but the median net worth of Group A households is 8 times that of Group B households. Which statement best accounts for the much larger gap in wealth than in income?',
    options: [
      'Wealth is a stock that accumulates over a lifetime and passes between generations, so past differences in income and inheritance compound in a way that a single year’s income does not show.',
      'Income is reported before taxes, whereas net worth is reported after taxes, and taxes fall more heavily on the households of Group B.',
      'Group B households spend a larger share of their income on housing, and the value of housing is excluded from net worth.',
      'A median income is more strongly influenced by a few very high earners than a median net worth is.',
    ],
    correctAnswer: 0,
    explanation:
      'Income is a flow measured over a year, whereas wealth is the stock of assets minus debts built up over decades and often inherited, so even modest and persistent income differences, together with differences in what previous generations could pass on, produce much larger gaps in wealth. Net worth is not a post-tax version of income; it is a different quantity altogether. Housing equity is a major component of net worth, not an exclusion from it. Medians are resistant to extreme values, so a handful of very high earners would not distort either measure.',
    skill: '10A wealth vs income inequality',
  },
]
