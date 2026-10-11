/**
 * MCAT Full-Length Form 1 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-09-29 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL1_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. SENSATION & PERCEPTION — thresholds, Weber’s law, signal detection
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-a-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    title: 'Detection Thresholds and Response Bias in Hearing',
    passageText:
      'Auditory sensitivity is commonly measured with the method of constant stimuli. Brief pure tones at several fixed intensities are presented in random order, and on each trial the listener reports whether a tone was heard. The proportion of “yes” responses plotted against intensity forms a psychometric function, and the absolute threshold is conventionally taken as the intensity detected on 50% of trials. Because the function is estimated from many trials, it is usually reported for a group of listeners rather than for a single listener.\n\nResearchers measured psychometric functions for a 1000-Hz tone in 24 young adults with normal hearing. Each participant was tested in a sound-attenuating booth under two conditions: in quiet, and while continuous broadband noise was played at a fixed level through the same headphones. Tone intensities from 0 to 30 dB above a reference level were presented in 5-dB steps, with 40 trials per intensity in each condition. One-quarter of all trials in each condition contained no tone, and participants were not told how many such trials there were. The pooled results are shown in Figure 1.\n\nIn a second task, participants heard a reference tone followed by a comparison tone and reported which of the two was louder. With the reference set to 100 units on a linear intensity scale, the comparison had to be raised to about 110 units before it was judged louder on 75% of trials, the level the researchers used to define the difference threshold. The researchers then repeated the procedure with the reference set to higher intensities.\n\nIn a third task, a faint tone at a fixed intensity was embedded in noise on exactly half of the trials, and participants responded “tone” or “no tone” after each trial. Payoffs were manipulated across two blocks. In Block A, each miss (failing to report a tone that was present) cost 5 points and each false alarm (reporting a tone that was absent) cost 1 point. In Block B, the penalties were reversed. Participants were told the payoff rule before each block, and the tone level and the noise were identical in both blocks. In Block A, participants reported the tone on 88% of tone-present trials and on 34% of tone-absent trials. In Block B, the corresponding values were 61% and 9%.\n\nThe researchers interpreted the third task within signal detection theory, which treats each decision as a comparison of an internal sensory response against a criterion. Sensory responses on tone-present trials and on tone-absent trials are assumed to form two overlapping distributions, so no criterion can separate them perfectly. Two quantities summarize performance: a sensitivity index that reflects the separation between the two distributions, and a criterion that reflects the listener’s willingness to respond “tone” when uncertain.',
    chart: {
      title: 'Figure 1. Proportion of trials on which the tone was reported, by tone intensity and listening condition',
      kind: 'line',
      xLabel: 'Tone intensity above reference',
      xUnit: 'dB',
      yLabel: 'Trials with “yes” response',
      yUnit: '%',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [3, 9, 26, 50, 77, 93, 98],
      seriesLabel: 'Quiet',
      comparisonSeries: [{ label: 'Background noise', yValues: [2, 4, 11, 26, 50, 76, 92] }],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'According to Figure 1, background noise raised the absolute threshold for the tone by approximately:',
        options: ['2.5 dB', '5 dB', '10 dB', '15 dB'],
        correctAnswer: 1,
        explanation:
          'The absolute threshold is the intensity detected on 50% of trials. The quiet curve crosses 50% at 15 dB and the noise curve crosses 50% at 20 dB, so the noise raised the threshold by about 5 dB. A shift of 2.5 dB is smaller than the spacing of the tested intensities and does not match the curves. A shift of 10 dB or 15 dB would require the noise curve to reach 50% at 25 or 30 dB, where it is actually near 76% and 92%.',
        optionExplanations: [
          'A shift of 2.5 dB is smaller than the 5-dB spacing of tested intensities and does not match the curves: the quiet curve hits 50% at 15 dB and the noise curve at 20 dB, a full step apart.',
          'The absolute threshold is the intensity detected on 50% of trials. The quiet curve crosses 50% at 15 dB and the noise curve crosses 50% at 20 dB, so noise raised the threshold by about 5 dB.',
          'A 10-dB shift would require the noise curve to reach 50% at 25 dB, where it is actually at about 76%. This overstates the masking effect shown in Figure 1.',
          'A 15-dB shift would require the noise curve to reach 50% at 30 dB, where it is actually near 92%. The noise curve is shifted by one 5-dB step, not three.',
        ],
        skill: '6A sensory thresholds',
      },
      {
        question: 'If loudness discrimination in the second task follows Weber’s law, the difference threshold at a reference intensity of 400 units would be closest to:',
        options: ['10 units', '20 units', '40 units', '110 units'],
        correctAnswer: 2,
        explanation:
          'Weber’s law states that the just noticeable difference is a constant fraction of the reference stimulus. At a reference of 100 units the threshold was 110 − 100 = 10 units, a Weber fraction of 0.10. At 400 units the difference threshold should therefore be 0.10 × 400 = 40 units. A value of 10 units assumes the difference threshold is constant in absolute terms regardless of the reference, which is what Weber’s law denies. A value of 20 units would correspond to doubling rather than quadrupling the reference. The value 110 units is the comparison intensity from the original measurement, not a difference threshold.',
        optionExplanations: [
          'Ten units assumes the difference threshold is constant in absolute terms regardless of the reference. Weber’s law denies exactly this: the JND grows in proportion to the reference.',
          'Twenty units would correspond to doubling the reference (to 200 units), not quadrupling it. At 400 units the proportional increase is fourfold.',
          'At a 100-unit reference the threshold was 110 − 100 = 10 units, a Weber fraction of 0.10. Weber’s law makes the JND a constant fraction of the reference, so at 400 units it is 0.10 × 400 = 40 units.',
          'The value 110 units is the comparison intensity from the original measurement, not a difference threshold. The threshold is the difference (10), scaled to the new reference.',
        ],
        skill: '6A Weber’s law',
      },
      {
        question: 'Compared with their performance in Block A, participants in Block B most likely:',
        options: [
          'became more sensitive to the tone, as shown by the lower false-alarm rate',
          'became less sensitive to the tone, as shown by the lower hit rate',
          'adopted a more lenient criterion, which lowered the false-alarm rate more than the hit rate',
          'adopted a stricter criterion, which lowered both the hit rate and the false-alarm rate',
        ],
        correctAnswer: 3,
        explanation:
          'From Block A to Block B both the hit rate (88% to 61%) and the false-alarm rate (34% to 9%) fell. When false alarms become costly, a listener requires stronger evidence before saying “tone,” which is a shift of the criterion toward strictness; a stricter criterion reduces hits and false alarms together while sensitivity, which depends on the separation of the two distributions, is unchanged because the tone and noise were identical. A change in sensitivity would move hits and false alarms in opposite directions (more hits with fewer false alarms), which did not occur, so neither greater nor lesser sensitivity explains the data. A more lenient criterion would raise, not lower, the false-alarm rate.',
        optionExplanations: [
          'A change in sensitivity would move hits and false alarms in opposite directions (more hits, fewer false alarms). Here both fell, and the tone and noise were identical, so sensitivity did not change.',
          'A lower hit rate alone does not indicate reduced sensitivity, because false alarms also dropped sharply. Identical stimuli across blocks mean the separation of the distributions was unchanged; only the criterion moved.',
          'A more lenient criterion would raise, not lower, the false-alarm rate. The drop from 34% to 9% false alarms indicates the opposite shift.',
          'From Block A to B both hits (88% → 61%) and false alarms (34% → 9%) fell. When false alarms become costly, listeners demand stronger evidence before saying “tone,” a stricter criterion that reduces both rates while sensitivity stays constant.',
        ],
        skill: '6A signal detection theory',
      },
      {
        question: 'The tone-absent trials included in the threshold measurement (Figure 1) mainly allowed the researchers to:',
        options: [
          'estimate how often participants reported a tone that was not presented',
          'reduce the number of trials needed to estimate each point on the curve',
          'prevent the background noise from masking the tone at low intensities',
          'confirm that the reference intensity was inaudible to all participants',
        ],
        correctAnswer: 0,
        explanation:
          'Trials with no tone are catch trials: a “yes” response on such a trial is a false alarm, so their inclusion measures how willing participants are to report a tone on the basis of guessing or expectation, which is needed to interpret the “yes” rates at low intensities. Catch trials add trials rather than reducing the number needed. They have no effect on the physical masking produced by the noise. The audibility of the reference intensity is measured by the 0-dB tone-present trials, not by trials with no tone.',
        optionExplanations: [
          'Trials with no tone are catch trials: a “yes” response on such a trial is a false alarm. Including them measures how willing participants are to report a tone from guessing or expectation, which is needed to interpret low-intensity “yes” rates.',
          'Catch trials add trials to the session rather than reducing the number needed. Each psychometric point still required 40 tone-present trials per intensity.',
          'Tone-absent trials have no effect on the physical masking produced by background noise. Masking is a property of the acoustic signal, not of the trial design.',
          'The audibility of the reference intensity is measured by the 0-dB tone-present trials, which yielded 3% “yes” responses. Trials with no tone cannot test whether a presented tone is audible.',
        ],
        skill: '6A research design',
      },
      {
        question: 'The gradual rather than abrupt rise of the curves in Figure 1 is most consistent with which view of the absolute threshold?',
        options: [
          'It is a fixed intensity below which the auditory receptors do not respond',
          'It fluctuates from moment to moment, so detection near threshold is probabilistic',
          'It is set entirely by the payoffs that are in effect during the task',
          'It is the intensity at which the just noticeable difference is smallest',
        ],
        correctAnswer: 1,
        explanation:
          'If the threshold were a fixed boundary, every tone above it would be detected and every tone below it missed, producing a step-shaped function. The smooth S-shaped curves show that a tone of a given intensity is sometimes detected and sometimes not, which is expected if the sensory system’s internal response and the listener’s state vary from trial to trial, so that the threshold is defined statistically rather than as a fixed cutoff. Payoffs affect the criterion but were not manipulated in this task, and they cannot explain the shape of the function. The just noticeable difference concerns discrimination between two stimuli, not the detection of a single tone.',
        optionExplanations: [
          'A fixed intensity below which receptors never respond would produce a step-shaped function: every tone above threshold detected, every tone below missed. The smooth S-curves in Figure 1 contradict this.',
          'The smooth S-shaped curves show that a tone of a given intensity is sometimes detected and sometimes not. This fits a threshold that varies from trial to trial with the sensory system’s internal response and the listener’s state, making detection probabilistic.',
          'Payoffs affect the criterion, not the shape of the psychometric function, and payoffs were not manipulated in the threshold task. The gradual rise reflects variability, not incentives.',
          'The just noticeable difference concerns discrimination between two stimuli (the second task), not detection of a single tone. It does not define the absolute threshold.',
        ],
        skill: '6A sensory thresholds',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. LEARNING — reinforcement schedules, modeling, classical conditioning
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-a-02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Increasing Toothbrushing in a Pediatric Dental Program',
    passageText:
      'Behavioral principles are widely used in pediatric dentistry, both to manage fear during procedures and to build home-care habits that persist after a program ends. A community dental clinic tested whether different procedures could increase the number of times children aged 7 to 9 brushed their teeth each week. Parents recorded each brushing session in a log that was verified with a time-stamped smartphone photo, so the maximum possible score was 14 sessions per week (twice daily). The clinic was particularly interested in what happened after the procedures were withdrawn, since the goal was durable habit change rather than short-term compliance.\n\nOne hundred twenty children were randomly assigned to four groups of 30, and all groups completed a 2-week baseline period with logging only. During a 4-week treatment phase, children in the continuous-reinforcement group received a token for every logged session, and children in the variable-ratio group received a token after an unpredictable number of sessions that averaged four. Tokens in both groups were exchangeable for small prizes. Children in the modeling group received no tokens; instead, they watched a short video twice a week in which a slightly older child brushed thoroughly and was then warmly praised by a parent. The control group only continued logging. In every group, a child who logged all 14 sessions in a week was allowed to skip the fluoride rinse at the next clinic visit, a procedure that most children reported disliking.\n\nDuring a subsequent 4-week extinction phase, tokens and videos were discontinued while logging continued. Table 1 reports the mean number of logged sessions per week for each group in each phase.\n\nClinic staff also recorded observations made during visits. Several children who had received an injection at the clinic during the previous year began to cry as soon as the hygienist put on gloves, before any instrument had been touched. Children with no history of injections at the clinic showed no such reaction. Over repeated visits in which gloves were worn but no injection was given, the crying gradually diminished.\n\nThe researchers noted two limitations. Tokens in both reinforcement groups were handed out at a weekly clinic visit rather than immediately after each brushing, so the delay between the behavior and its consequence was the same for both schedules and longer than is typical in laboratory studies. In addition, parents knew their child’s group assignment and may have prompted brushing more in some groups than in others.',
    figure:
      '**Table 1. Mean logged brushing sessions per week (maximum 14)**\n\n| Group | n | Baseline | Treatment (weeks 1–4) | Extinction (weeks 5–8) |\n|---|---|---|---|---|\n| Continuous reinforcement | 30 | 5.1 | 12.8 | 6.0 |\n| Variable-ratio reinforcement | 30 | 5.0 | 12.1 | 10.9 |\n| Modeling video | 30 | 5.2 | 9.4 | 9.0 |\n| Control | 30 | 5.1 | 5.3 | 5.2 |',
    questions: [
      {
        question: 'The results in Table 1 most strongly support which conclusion about the two token schedules?',
        options: [
          'Continuous reinforcement produced a higher rate of brushing that persisted once tokens were withdrawn',
          'The two schedules produced equivalent brushing rates once the tokens were withdrawn',
          'Brushing reinforced intermittently was more resistant to extinction than brushing reinforced continuously',
          'Intermittent reinforcement was less effective than continuous reinforcement during every phase of the study',
        ],
        correctAnswer: 2,
        explanation:
          'Both token groups rose to similar treatment-phase rates (12.8 and 12.1 sessions per week), but when tokens stopped the continuous-reinforcement group fell almost to baseline (6.0) while the variable-ratio group stayed high (10.9). This is the partial-reinforcement extinction effect: behavior that has been reinforced unpredictably persists longer without reinforcement, because the absence of a token is not a reliable signal that reinforcement has ended. The claim that continuous reinforcement persisted is contradicted by its drop to 6.0. The two groups were far from equivalent during extinction. Intermittent reinforcement was slightly lower during treatment but clearly higher during extinction, so it was not less effective in every phase.',
        optionExplanations: [
          'The continuous-reinforcement group fell from 12.8 to 6.0 sessions per week when tokens stopped, nearly back to baseline. Its gain did not persist.',
          'During extinction the two groups were far from equivalent: 6.0 sessions for continuous reinforcement versus 10.9 for variable ratio.',
          'Both token groups reached similar treatment rates (12.8 and 12.1), but after tokens stopped the continuous group fell to 6.0 while the variable-ratio group held at 10.9. Unpredictable reinforcement produces behavior that persists longer without reinforcement, the partial-reinforcement extinction effect.',
          'Intermittent reinforcement was slightly lower during treatment (12.1 vs 12.8) but clearly higher during extinction (10.9 vs 6.0), so it was not less effective in every phase.',
        ],
        skill: '7A reinforcement schedules',
      },
      {
        question: 'According to Table 1, which group retained the largest proportion of its treatment-phase gain over baseline during the extinction phase?',
        options: ['Continuous reinforcement', 'Variable-ratio reinforcement', 'Modeling video', 'Control'],
        correctAnswer: 2,
        explanation:
          'Treatment-phase gains over baseline were 7.7 sessions (continuous), 7.1 (variable ratio), 4.2 (modeling), and 0.2 (control). During extinction the groups were 0.9, 5.9, 3.8, and 0.1 above their baselines, so the proportions retained were about 12%, 83%, 90%, and 50%. The modeling group kept roughly nine-tenths of its gain, which fits observational learning: the behavior was acquired by watching a praised model and never depended on tokens, so withdrawing the videos removed little. The continuous-reinforcement group lost nearly all of its gain. The variable-ratio group retained much of its gain but less than the modeling group. The control group’s 0.2-session change is within noise, and half of it is far less than the modeling group’s retention.',
        optionExplanations: [
          'The continuous-reinforcement group gained 7.7 sessions during treatment but was only 0.9 above baseline during extinction, retaining about 12% of its gain, the smallest proportion of any group.',
          'The variable-ratio group gained 7.1 and retained 5.9 during extinction, about 83%. That is substantial, but less than the modeling group’s roughly 90%.',
          'Treatment gains over baseline were 7.7, 7.1, 4.2, and 0.2; extinction gains were 0.9, 5.9, 3.8, and 0.1. The modeling group retained 3.8/4.2 ≈ 90%, the largest proportion, because its behavior never depended on tokens.',
          'The control group’s 0.2-session change is within noise; half of it (0.1) nominally gives 50%, but this is far below the modeling group’s 90% retention and reflects no real treatment gain.',
        ],
        skill: '7A observational learning',
      },
      {
        question: 'For the children who cried when the hygienist put on gloves, the gloves are best classified as a(n):',
        options: [
          'unconditioned stimulus, because gloves naturally elicit distress in young children',
          'conditioned response, because the crying was learned during the earlier visit',
          'discriminative stimulus, because gloves signaled that crying would be reinforced',
          'conditioned stimulus, because gloves came to elicit crying through their pairing with an injection',
        ],
        correctAnswer: 3,
        explanation:
          'The children with a history of injections cried at the gloves, while those without that history did not, so the gloves acquired their effect through pairing with the painful injection (the unconditioned stimulus). A previously neutral event that comes to elicit a response after such pairing is a conditioned stimulus. Gloves do not naturally elicit distress, as the injection-naive children show, so they are not an unconditioned stimulus. The crying is the response, not the stimulus. A discriminative stimulus is an operant concept indicating that a voluntary behavior will be reinforced, but the crying here is a reflexive emotional response elicited by the gloves rather than behavior maintained by its consequences.',
        optionExplanations: [
          'Gloves do not naturally elicit distress, as the injection-naive children show by not crying. An unconditioned stimulus produces the response without prior learning.',
          'The crying is the response, not the stimulus. The question asks how the gloves should be classified, and gloves are a stimulus that elicits the crying.',
          'A discriminative stimulus is an operant concept signaling that a voluntary behavior will be reinforced. The crying here is a reflexive emotional response elicited by the gloves, not behavior maintained by consequences.',
          'Children with a history of injections cried at the gloves; those without did not. A previously neutral stimulus that comes to elicit a response through pairing with an unconditioned stimulus (the injection) is a conditioned stimulus.',
        ],
        skill: '7A classical conditioning',
      },
      {
        question: 'Allowing a child who logged all 14 sessions in a week to skip the fluoride rinse is best described as:',
        options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment'],
        correctAnswer: 1,
        explanation:
          'The consequence is intended to increase brushing, so it is reinforcement, and it works by removing an aversive event (the disliked rinse), which makes it negative reinforcement. Positive reinforcement would add a desirable stimulus, such as the tokens. Both forms of punishment aim to decrease a behavior, which is not the goal here; positive punishment adds an aversive stimulus and negative punishment removes a desirable one.',
        optionExplanations: [
          'Positive reinforcement adds a desirable stimulus, such as the tokens. Skipping the rinse removes something rather than adding it.',
          'The consequence is meant to increase brushing (reinforcement) and works by removing an aversive event, the disliked fluoride rinse. Removing an aversive stimulus to strengthen behavior is negative reinforcement.',
          'Positive punishment adds an aversive stimulus to decrease a behavior. The rinse is removed, and the goal is to increase brushing, not decrease it.',
          'Negative punishment removes a desirable stimulus to decrease a behavior. Here an aversive stimulus is removed and the goal is to increase brushing, so neither element fits.',
        ],
        skill: '7A operant conditioning',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. SOCIOLOGY (information) — sick role, illness experience, medicalization
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-a-03',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'The Sick Role and the Boundaries of Medicine',
    passageText:
      'Sociologists distinguish disease, a biological condition identified by clinicians, from illness, the person’s lived experience of symptoms, limitation, and altered identity. A person can have a disease without feeling ill, as with early hypertension, and can feel ill without any identifiable disease. Medicine as a social institution mediates between the two: it holds the authority to declare that a person’s complaints correspond to a recognized condition, and this declaration carries consequences well beyond the clinic.\n\nThe classic account of these consequences is the sick role. In this view, being sick is not merely a biological state but a social position with its own rights and duties. The sick person is released from ordinary obligations such as work or school and is not held responsible for the condition, since illness is understood as something that happens to a person rather than something chosen. In exchange, the sick person is expected to regard the condition as undesirable, to try to get well, and to seek and cooperate with technically competent help. The physician acts as gatekeeper: a physician’s certification transforms a private complaint into a legitimate exemption that employers, teachers, and family are expected to honor. Because the rights of the role are conditional on its duties, a person who appears to enjoy the exemption, or who declines treatment, risks losing the legitimacy the role confers.\n\nCritics have noted that this model fits acute, curable conditions far better than the chronic conditions that now dominate medical practice. A person managing diabetes or arthritis for decades cannot be temporarily excused from life, nor can she “get well” in the sense the model assumes; her task is to incorporate treatment into ordinary roles rather than to withdraw from them. Access to the role is also uneven. Complaints without visible signs or laboratory findings, such as chronic pain or fatigue, may be doubted by clinicians and employers alike, and the person is left with the burdens of illness but without its exemptions. Sociologists studying the illness experience describe how a serious diagnosis can produce biographical disruption: the assumptions that organized a person’s past and expected future are broken, and the person must rebuild a sense of self that includes the condition. Stigma compounds this process for conditions that others regard as the person’s own fault or as a mark of moral failure.\n\nThe boundaries of the medical institution are not fixed. Medicalization is the process by which conditions previously understood as ordinary variation, moral failing, or social problem come to be defined and treated as medical matters. Baldness, menopause, shyness, and childhood restlessness have all traveled some distance along this path. The process is driven from several directions: by professions seeking to extend their jurisdiction, by industries whose products require a diagnosis before they can be prescribed, and sometimes by affected people themselves, for whom a diagnosis converts a suspect status into a legitimate one and unlocks insurance coverage and accommodations. The process can also reverse. Conditions once treated by physicians can be redefined as lifestyle choices or as normal variation, a change usually achieved through political and professional argument rather than through new biological evidence. Whether medicalization helps or harms therefore depends on the case: it can relieve blame and secure resources, but it can also narrow a social problem to an individual body and transfer authority over everyday life to medical experts.',
    questions: [
      {
        question: 'A warehouse worker reports months of severe fatigue. His test results are normal, his physician declines to provide a note excusing him from work, and his employer treats his absences as unexcused. According to the passage’s account of the sick role, his situation arises mainly because:',
        options: [
          'he has failed the duty to try to get well, which forfeits the exemptions of the role',
          'fatigue is a chronic condition, and the sick role applies only to acute conditions',
          'his employer, rather than a physician, is acting as the gatekeeper of the sick role',
          'the role’s exemptions depend on a certification that his complaint has not received',
        ],
        correctAnswer: 3,
        explanation:
          'The passage describes the physician as gatekeeper: the exemption from ordinary obligations becomes legitimate only when a physician certifies the condition, and complaints without visible signs or laboratory findings are often doubted. The worker has the burdens of illness but, lacking certification, none of its rights. Nothing indicates that he has stopped trying to get well; he sought medical help. The passage says the sick role fits acute conditions better than chronic ones, not that it applies only to acute conditions, and fatigue of a few months is not the decades-long management it describes. The employer is honoring, not replacing, the physician’s gatekeeping.',
        optionExplanations: [
          'Nothing indicates he has stopped trying to get well; he sought medical help, which fulfills that duty. The problem is that his complaint has not been certified, not that he has violated a duty.',
          'The passage says the sick role fits acute conditions better than chronic ones, not that it applies only to acute conditions. Fatigue of a few months is not the decades-long management described for chronic illness.',
          'The employer is honoring the physician’s gatekeeping, not replacing it. The passage says employers are expected to honor a physician’s certification; without one, the employer treats absences as unexcused.',
          'The passage describes the physician as gatekeeper: exemptions become legitimate only when a physician certifies the condition, and complaints without visible signs or lab findings are often doubted. The worker has illness’s burdens but, lacking certification, none of its rights.',
        ],
        skill: '9B the sick role',
      },
      {
        question: 'Which of the following is the best example of medicalization as the passage describes it?',
        options: [
          'Grief lasting months after a bereavement being classified as a drug-treatable disorder',
          'A hospital replacing its paper charts with a computerized electronic record system',
          'A patient with a rare disease founding a support group for others who share the condition',
          'A public health agency requiring restaurants to display calorie counts on their menus',
        ],
        correctAnswer: 0,
        explanation:
          'Medicalization is the redefinition of a condition previously seen as ordinary experience, moral failing, or social problem as a medical matter to be diagnosed and treated. Prolonged grief has traditionally been understood as a normal, if painful, part of life; classifying it as a disorder that warrants medication moves it into medical jurisdiction, exactly the shift the passage describes. Adopting electronic records changes how medicine operates but does not redefine any condition. A support group is a response by people who already have a recognized disease. A calorie-labeling rule is a public policy about food, not the redefinition of a human condition as a disease.',
        optionExplanations: [
          'Prolonged grief has traditionally been understood as a normal, painful part of life. Classifying it as a disorder warranting medication moves it into medical jurisdiction, exactly the redefinition of ordinary experience as medical matter the passage describes.',
          'Adopting electronic records changes how medicine operates administratively but does not redefine any human condition as medical. No boundary of the institution has moved.',
          'A support group is a response by people who already have a recognized disease. It does not expand what counts as a medical condition.',
          'A calorie-labeling rule is a public policy about food information, not the redefinition of a human condition or behavior as a disease to be diagnosed and treated.',
        ],
        skill: '9B medicalization',
      },
      {
        question: 'A woman with rheumatoid arthritis works full time while taking medication and attending regular appointments. Which expectation of the classic sick role is LEAST applicable to her situation?',
        options: [
          'She should cooperate with technically competent help',
          'She should regard her condition as something undesirable',
          'She should be exempt from her usual obligations',
          'She should not be held responsible for having the condition',
        ],
        correctAnswer: 2,
        explanation:
          'The passage’s critique of the sick role is that a person with a chronic condition cannot be temporarily excused from life and instead must fit treatment into ordinary roles. The woman is doing exactly that, so the exemption from ordinary obligations is the element that fails to describe her. The other three expectations still apply to her: she is cooperating with treatment, she presumably regards the arthritis as undesirable, and no one holds her responsible for developing an autoimmune condition.',
        optionExplanations: [
          'Cooperating with technically competent help still applies: she is taking medication and attending regular appointments, which is exactly this duty in action.',
          'Regarding her condition as undesirable still applies; nothing suggests she welcomes her arthritis, and the passage’s critique of chronic illness does not concern this expectation.',
          'The passage’s critique is that a person with a chronic condition cannot be temporarily excused from life and must fit treatment into ordinary roles. She works full time, so exemption from usual obligations is the element that fails to describe her.',
          'Not being held responsible still applies: no one holds her responsible for developing an autoimmune condition, and the passage does not suggest chronic illness changes this.',
        ],
        skill: '9B the sick role',
      },
      {
        question: 'Which patient statement best illustrates biographical disruption as the passage uses the term?',
        options: [
          '“Now that I must stay near a hospital, the retirement I planned is gone, and I am not sure who I am without it.”',
          '“The nurses explained my medication schedule so clearly that I know exactly what to take and precisely when to take it.”',
          '“My coworkers keep asking whether I brought this on myself by not exercising enough or eating badly.”',
          '“I felt completely fine, so I refused to believe the test results until a second doctor had confirmed them.”',
        ],
        correctAnswer: 0,
        explanation:
          'Biographical disruption is the breaking of the assumptions that organized a person’s past and expected future, followed by the need to rebuild a sense of self that includes the condition. The statement about the lost retirement plan and uncertainty about identity captures both the broken expected future and the threatened self. The statement about the medication schedule describes cooperation with treatment, a sick-role duty. The remark about coworkers illustrates stigma, the attribution of fault to the person. The statement about feeling fine despite test results illustrates disease without illness, the distinction drawn in the first paragraph.',
        optionExplanations: [
          'Biographical disruption is the breaking of assumptions that organized a person’s past and expected future, followed by rebuilding a sense of self. The lost retirement plan and uncertainty about identity capture both the broken future and the threatened self.',
          'Knowing the medication schedule precisely describes cooperation with competent help, a sick-role duty. It involves no disruption of identity or life plans.',
          'Coworkers asking whether the patient brought it on himself illustrates stigma, the attribution of fault, which the passage says compounds disruption but is a distinct concept.',
          'Feeling fine despite test results illustrates disease without illness, the distinction drawn in the first paragraph, not the rebuilding of self that defines biographical disruption.',
        ],
        skill: '9B illness experience',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — elaboration likelihood, attitude persistence, dissonance
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Message Processing and Attitude Change Toward a Campus Beverage Policy',
    passageText:
      'Persuasion research distinguishes two broad ways in which a message can change attitudes. When people are motivated and able to think carefully about a message, they evaluate its arguments, and their attitudes come to depend on the quality of those arguments. When motivation or ability is low, attitudes are shaped instead by cues that require little thought, such as the apparent expertise of the source, the length of the message, or the reactions of other people. The route by which an attitude is formed is thought to affect how long the attitude lasts and how well it predicts behavior.\n\nResearchers tested these ideas with a proposed policy that would remove sugar-sweetened beverages from campus vending machines. Two hundred undergraduates first rated the policy on a 9-point scale (1 = strongly oppose, 9 = strongly favor); the mean initial rating was 4.3 and did not differ across groups. Each participant then read a written message supporting the policy that was attributed to a panel of public health researchers. Personal relevance was manipulated by telling participants either that the policy was being considered for their own campus beginning next semester (high relevance) or for a distant campus in ten years (low relevance). Argument quality was manipulated by giving participants either eight strong arguments supported by evidence or eight weak arguments based on anecdote and vague claims. Participants rated the policy again immediately after reading the message and then once a week for four weeks by e-mail. Group means are shown in Figure 1. On a manipulation check, all four groups rated the panel as equally expert, and participants in the high-relevance groups listed more than twice as many thoughts about the message content as participants in the low-relevance groups.\n\nIn a second phase, participants from the high-relevance groups who had rated the policy at 4 or below after reading the message were invited to record a short video statement supporting the policy, which they were told would be shown to incoming students. Half were told that recording the video was required to receive full study credit (low choice). The other half were told that the video would be helpful but that recording it was entirely their decision (high choice); nearly all agreed. After recording, participants rated the policy once more. The mean rating rose to 6.1 in the high-choice group but was 4.0 in the low-choice group, essentially unchanged from before the recording.\n\nThe researchers concluded that the immediate attitude changes in Figure 1 reflected different processes in the high- and low-relevance groups, and that the second phase demonstrated a distinct mechanism of attitude change that did not depend on the persuasive message at all.',
    chart: {
      title: 'Figure 1. Mean attitude toward the policy after the message, by condition (initial mean = 4.3 in all groups)',
      kind: 'line',
      xLabel: 'Weeks after message',
      xUnit: 'weeks',
      yLabel: 'Mean attitude rating (1–9)',
      xValues: [0, 1, 2, 3, 4],
      yValues: [7.6, 7.5, 7.4, 7.4, 7.3],
      seriesLabel: 'High relevance, strong arguments',
      comparisonSeries: [
        { label: 'High relevance, weak arguments', yValues: [3.4, 3.5, 3.5, 3.6, 3.6] },
        { label: 'Low relevance, strong arguments', yValues: [6.0, 5.4, 4.9, 4.6, 4.4] },
        { label: 'Low relevance, weak arguments', yValues: [5.7, 5.2, 4.8, 4.5, 4.4] },
      ],
    },
    questions: [
      {
        question: 'Based on Figure 1, argument quality had its largest effect on attitudes:',
        options: [
          'immediately after the message in the two low-relevance groups',
          'immediately after the message in the high-relevance groups',
          'four weeks after the message in the two low-relevance groups',
          'to an equal degree in the high- and low-relevance groups at every time point',
        ],
        correctAnswer: 1,
        explanation:
          'Immediately after the message, the high-relevance groups differed by 7.6 − 3.4 = 4.2 points depending on argument quality, whereas the low-relevance groups differed by only 6.0 − 5.7 = 0.3 points. The gap in the high-relevance groups remained near 4 points at every later time, and the low-relevance gap shrank to zero by week 4. So argument quality mattered greatly when relevance was high and hardly at all when relevance was low, which rules out an equal effect across groups.',
        optionExplanations: [
          'In the low-relevance groups, argument quality made almost no immediate difference: 6.0 for strong versus 5.7 for weak, a 0.3-point gap. These participants were persuaded by the source cue, not the arguments.',
          'Immediately after the message, high-relevance groups differed by 7.6 − 3.4 = 4.2 points depending on argument quality, while low-relevance groups differed by only 0.3. The gap in high-relevance groups stayed near 4 points at every later time.',
          'By week 4 both low-relevance groups had returned to 4.4, so the argument-quality gap in those groups was zero, not at its largest.',
          'Argument quality had a large effect in the high-relevance groups and almost none in the low-relevance groups at every time point, so the effect was far from equal across groups.',
        ],
        skill: '7B attitude change',
      },
      {
        question: 'The trajectories of the two low-relevance groups over the four weeks are most consistent with which conclusion?',
        options: [
          'Attitudes based on careful evaluation of arguments decay rapidly without reinforcement',
          'Weak arguments eventually produced the same attitude change as strong arguments',
          'Attitude change produced by a source cue was less durable than change produced by elaboration',
          'Participants in the low-relevance groups never formed a genuine attitude toward the policy at all',
        ],
        correctAnswer: 2,
        explanation:
          'The low-relevance groups shifted about 1.5 points above the 4.3 baseline immediately after the message regardless of argument quality, which indicates that they were persuaded by the peripheral cue of the expert panel rather than by the arguments, and their ratings then drifted back to baseline within four weeks. The high-relevance strong-argument group, which elaborated on the content, stayed near 7.4 throughout. This contrast shows that cue-based attitude change is less persistent than elaboration-based change. The rapid decay occurred in the groups that did not evaluate the arguments, not in those that did. Weak and strong arguments produced the same change in the low-relevance groups from the start, not eventually. Participants clearly held attitudes; they simply reverted toward their initial ones.',
        optionExplanations: [
          'The rapid decay occurred in the low-relevance groups, which did not evaluate the arguments. The high-relevance strong-argument group, which did elaborate, stayed near 7.4 throughout.',
          'Weak and strong arguments produced nearly the same change in the low-relevance groups from the very start (5.7 vs 6.0), not eventually. Argument quality never mattered to them.',
          'Low-relevance groups shifted about 1.5 points above baseline regardless of argument quality, indicating persuasion by the expert-panel cue, then drifted back to baseline within four weeks. The elaborating high-relevance group stayed near 7.4, so cue-based change is less durable.',
          'Participants clearly held attitudes; their ratings moved and then reverted toward initial values. Reverting to a prior attitude is not the same as having no attitude.',
        ],
        skill: '7B elaboration likelihood',
      },
      {
        question: 'The finding that all four groups rated the panel as equally expert is important because it:',
        options: [
          'confirms that participants in every group processed the message primarily through the central route',
          'shows that the relevance manipulation failed to change participants’ motivation',
          'demonstrates that source expertise had no influence on attitudes in any group',
          'rules out perceived source credibility as an explanation for differences between conditions',
        ],
        correctAnswer: 3,
        explanation:
          'Because the source was perceived identically in all conditions, any difference between groups cannot be attributed to some groups finding the source more credible; the effects of relevance and argument quality are therefore interpretable. The check says nothing about which route participants used; the thought-listing data show that the high-relevance groups elaborated more. The relevance manipulation evidently succeeded, since high-relevance participants listed twice as many thoughts. Equal ratings of expertise do not mean expertise had no influence; the low-relevance groups appear to have been persuaded mainly by that cue.',
        optionExplanations: [
          'The manipulation check says nothing about which route participants used. The thought-listing data, not the expertise ratings, show that only high-relevance groups elaborated on content.',
          'The relevance manipulation evidently succeeded, since high-relevance participants listed more than twice as many thoughts about the message. Equal expertise ratings do not indicate motivation was unchanged.',
          'Equal ratings of expertise do not mean expertise had no influence. The low-relevance groups appear to have been persuaded mainly by that cue, shifting 1.5 points regardless of argument quality.',
          'Because the source was perceived identically in all conditions, differences between groups cannot be attributed to some groups finding the source more credible. The effects of relevance and argument quality are therefore interpretable.',
        ],
        skill: '7B research design',
      },
      {
        question: 'The difference between the high-choice and low-choice groups in the second phase is best explained by which process?',
        options: [
          'High-choice participants, lacking a sufficient external reason for advocating a view they opposed, reduced their discomfort by changing their attitude',
          'Low-choice participants experienced greater discomfort because the video was required, which led them to reject the policy more firmly',
          'High-choice participants were persuaded by the peripheral cue of seeing themselves on video supporting the policy',
          'Low-choice participants elaborated more on the arguments in their own videos and therefore counterargued them',
        ],
        correctAnswer: 0,
        explanation:
          'All participants in this phase opposed the policy yet publicly advocated it. Those who were required to do so had an adequate external justification, so the inconsistency between attitude and behavior created little dissonance and their attitude did not move. Those who freely chose to advocate had no such justification, experienced dissonance, and resolved it by bringing their attitude into line with their behavior. Being required to act does not produce more dissonance; it removes it. Seeing oneself on video is not a peripheral cue of the kind described in the passage, and the low-choice group’s rating was unchanged rather than lowered by counterarguing.',
        optionExplanations: [
          'All participants opposed the policy yet publicly advocated it. Those who freely chose to do so had no external justification, experienced dissonance between attitude and behavior, and resolved it by shifting their attitude toward the policy (4.0 → 6.1).',
          'Being required to act does not produce more dissonance; it removes it, because the requirement supplies an adequate external justification. The low-choice rating stayed at 4.0, not lower.',
          'Seeing oneself on video is not a peripheral cue of the kind the passage describes (source expertise, message length, others’ reactions). The change came from justifying one’s own freely chosen behavior.',
          'The low-choice group’s rating was unchanged at 4.0, not lowered, so no counterarguing effect occurred. Elaboration on one’s own video is not the mechanism at work.',
        ],
        skill: '7B cognitive dissonance',
      },
      {
        question: 'The immediate ratings of the high-relevance, weak-argument group fell below the initial mean of 4.3. This result is best explained by participants having:',
        options: [
          'relied on the expertise of the source rather than on the content of the message',
          'generated counterarguments while scrutinizing the weak message',
          'experienced dissonance between the message and their initial attitude',
          'lacked the ability to process a message containing that many arguments',
        ],
        correctAnswer: 1,
        explanation:
          'High-relevance participants elaborated on the message, as the thought-listing data show. Careful scrutiny of weak, anecdotal arguments tends to produce counterarguments, and generating reasons against a position pushes the attitude away from it, so these participants ended up more opposed than they started. Reliance on source expertise would have produced a modest favorable shift, as in the low-relevance groups. Reading a message one disagrees with does not by itself create dissonance, which requires a freely chosen behavior inconsistent with one’s attitude. Ability was not limited; the same message length was processed fully by the strong-argument group.',
        optionExplanations: [
          'Reliance on source expertise would have produced a modest favorable shift, as in the low-relevance groups (about 5.7). These participants moved downward instead, below baseline.',
          'High-relevance participants elaborated on content, as thought-listing showed. Scrutinizing weak, anecdotal arguments generates counterarguments, and producing reasons against a position pushes attitude away from it, so they ended more opposed than they began.',
          'Reading a message one disagrees with does not by itself create dissonance, which requires a freely chosen behavior inconsistent with one’s attitude. No such behavior occurred in the first phase.',
          'Ability was not limited; the same eight-argument message length was processed fully by the high-relevance strong-argument group, which moved to 7.6.',
        ],
        skill: '7B elaboration likelihood',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. COGNITION — encoding tasks, interference, recall vs recognition
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-ps-a-05',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Encoding Tasks and Retention of Drug Names',
    passageText:
      'Memory researchers distinguish three stages at which a memory can fail: encoding, when information is first processed; storage, when the memory trace is maintained over time; and retrieval, when stored information is accessed. Manipulations that appear to act on one stage often turn out to act on another, so experiments typically vary encoding conditions and test conditions independently.\n\nResearchers examined how first-year pharmacy students learned a list of 40 unfamiliar drug names. Each name was presented on a screen together with a one-sentence description of its use (for example, “a drug that lowers blood pressure by relaxing arteries”). Ninety students were randomly assigned to one of three encoding tasks. In the structural task, students counted the number of vowels in the drug name. In the phonemic task, students judged whether the name rhymed with a cue word. In the semantic task, students judged whether the drug would be appropriate for a briefly described patient. Each name remained on the screen until the student had responded, and students were not told that a memory test would follow. Students in the semantic condition took an average of 4.1 s per name, compared with 2.3 s in the structural condition and 2.9 s in the phonemic condition.\n\nRetention was assessed with free recall, in which students wrote down as many of the names as they could, immediately after the list and again one week later. Free recall was scored as the percentage of the 40 original names produced. To examine a further variable, half of the students in each encoding group learned a second list of 40 different drug names on the sixth day, one day before the delayed test, using the same encoding task as before; the remaining students did no additional learning. At the one-week session, all students also completed a recognition test in which the 40 original names were mixed with 40 new names and students indicated which they had seen during the first session. Results are shown in Table 1.\n\nThe researchers noted that the names on the second list resembled the original names in length and sound, and that several students in the second-list groups wrote names from the second list while attempting to recall the first list. They also observed that the three encoding groups did not differ in the proportion of new names correctly rejected on the recognition test, with every group rejecting more than 90% of them.',
    figure:
      '**Table 1. Retention of the original 40 drug names (%)**\n\n| Encoding task | Immediate recall | 1-week recall, no second list | 1-week recall, second list | 1-week recognition, no second list |\n|---|---|---|---|---|\n| Structural (vowel counting) | 36 | 12 | 7 | 58 |\n| Phonemic (rhyme judgment) | 51 | 22 | 15 | 71 |\n| Semantic (patient judgment) | 79 | 56 | 43 | 93 |',
    questions: [
      {
        question: 'Because students were not told that a memory test would follow, the immediate-recall differences in Table 1 are best attributed to:',
        options: [
          'differences in how strongly the three groups intended to remember the names',
          'rehearsal strategies that students in each group deliberately chose',
          'the kind of processing each task required during encoding',
          'the relative difficulty of the three judgment tasks',
        ],
        correctAnswer: 2,
        explanation:
          'Learning was incidental: no group expected a test, so intention to remember and deliberate rehearsal strategies cannot account for the large differences in recall. What differed was the task performed on each name at encoding. Judging a drug’s suitability for a patient requires processing its meaning, whereas counting vowels or judging rhyme involves only its appearance or sound, and meaning-based (deeper) processing produces a more elaborated and better-retrieved trace. Difficulty does not explain the ordering, since vowel counting is not obviously easier than rhyme judgment yet produced worse recall, and difficulty alone would not favor the semantic task.',
        optionExplanations: [
          'Learning was incidental: no group expected a test, so differences in intention to remember cannot account for the recall differences. Students did not know remembering mattered.',
          'Deliberate rehearsal strategies require knowing a test is coming. Since students were not told a memory test would follow, no group chose strategies to remember the names.',
          'With incidental learning, what differed was the task performed on each name. Judging a drug’s suitability for a patient requires processing meaning, whereas vowel counting or rhyme judgment involves only appearance or sound; deeper processing yields a better-retrieved trace.',
          'Difficulty does not explain the ordering: vowel counting is not obviously easier than rhyme judgment yet produced worse recall, and difficulty alone would not single out the semantic task as superior.',
        ],
        skill: '6B encoding',
      },
      {
        question: 'The lower one-week recall among students who learned a second list is best described as an effect of:',
        options: ['proactive interference', 'trace decay', 'encoding specificity', 'retroactive interference'],
        correctAnswer: 3,
        explanation:
          'The second list was learned after the original list and impaired recall of the original names; newly learned material disrupting retrieval of older material is retroactive interference, and the intrusion of second-list names during recall is a signature of it. Proactive interference runs in the other direction, with older learning impairing memory for newer material. Trace decay attributes forgetting to the passage of time alone, but the two groups were tested after the same interval and differed only in whether a second list was learned. Encoding specificity concerns the match between encoding and retrieval contexts, which was not manipulated.',
        optionExplanations: [
          'Proactive interference runs the other direction: older learning impairs memory for newer material. Here the newer (second) list impaired recall of the older (original) list.',
          'Trace decay attributes forgetting to the passage of time alone, but both groups were tested after the same one-week interval and differed only in whether a second list was learned.',
          'Encoding specificity concerns the match between encoding and retrieval contexts. That was not manipulated; both groups encoded and were tested under the same conditions.',
          'The second list was learned after the original list and impaired its recall, with second-list names intruding during recall. Newly learned material disrupting retrieval of older material is retroactive interference.',
        ],
        skill: '6B interference',
      },
      {
        question: 'For the structural group, the one-week recognition result compared with the one-week recall result (no second list) indicates that:',
        options: [
          'many names were stored but could not be retrieved without cues',
          'most of the names had never been encoded into long-term memory',
          'the names had been held in short-term memory only',
          'the recognition score was inflated by guessing on the new names',
        ],
        correctAnswer: 0,
        explanation:
          'Recall without cues produced only 12% of the names, yet when the names themselves were presented as cues, 58% were recognized. Names that can be recognized must be stored, so the recall failure reflects limited accessibility rather than absence of the memory. If most names had never been encoded, recognition would have been near chance as well. Short-term memory lasts seconds, not a week. Guessing is ruled out by the finding that every group correctly rejected more than 90% of the new names.',
        optionExplanations: [
          'Recall without cues produced only 12% of names, yet 58% were recognized when the names were presented. Names that can be recognized must be stored, so the recall failure reflects limited accessibility, not absent memory.',
          'If most names had never been encoded, recognition would have been near chance as well. A 58% recognition rate with over 90% correct rejection of new names shows substantial storage.',
          'Short-term memory lasts seconds, not a week. Any names recognized after seven days were held in long-term memory.',
          'Guessing is ruled out by the finding that every group correctly rejected more than 90% of the new names. A guesser would have many false alarms on the new names.',
        ],
        skill: '6B retrieval',
      },
      {
        question: 'A critic argues that the semantic group’s advantage reflects longer exposure to each name rather than deeper processing. Which modification to the procedure would best address this criticism?',
        options: [
          'Increasing the list to 80 names so that the effect of time per name is diluted',
          'Testing recall after two weeks, by which time exposure differences would have faded',
          'Presenting every name for a fixed 4 s and requiring a response within that time',
          'Adding a fourth group that views the names for 4 s each with no judgment task',
        ],
        correctAnswer: 2,
        explanation:
          'The criticism rests on the confound that semantic judgments took longer (4.1 s versus 2.3 s and 2.9 s). Fixing the exposure time for all groups removes the confound directly: if the semantic advantage persists with equal exposure, it must reflect the processing itself. A longer list does not equate exposure time across groups. A longer delay does not address how the names were encoded. A no-task viewing group adds a comparison condition but leaves the three original groups unequal in exposure, so the confound remains.',
        optionExplanations: [
          'A longer list does not equate exposure time across groups; the semantic group would still spend more seconds per name than the other groups.',
          'A longer delay does not address how the names were encoded. The exposure-time confound would still be present at two weeks, so the critic’s objection stands.',
          'The criticism rests on the confound that semantic judgments took longer (4.1 s vs 2.3 and 2.9 s). Fixing exposure time for all groups removes it directly: if the semantic advantage persists with equal exposure, it reflects processing itself.',
          'A no-task viewing group adds a comparison but leaves the three original groups unequal in exposure, so the confound in their comparison remains.',
        ],
        skill: '6B research design',
      },
    ],
  },
]

export const FL1_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-ps-a-d01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Shortly after finishing an intense workout, a man is teased by a friend and reacts with far more anger than the remark would usually provoke. Which theory of emotion best accounts for his reaction?',
    options: [
      'James–Lange theory, because the remark triggered a physiological pattern specific to anger',
      'Cannon–Bard theory, because the remark produced arousal and anger at the same moment',
      'Appraisal theory, because he judged the remark as harmful before any arousal occurred',
      'Schachter–Singer theory, because leftover arousal from exercise was attributed to the remark',
    ],
    correctAnswer: 3,
    explanation:
      'The two-factor (Schachter–Singer) theory holds that emotion arises from physiological arousal plus a cognitive label for it. Residual arousal from exercise was misattributed to the teasing, so the anger felt more intense than the remark alone would justify. James–Lange theory would require the remark itself to produce an anger-specific bodily pattern, but the arousal here preceded and was unrelated to the remark. Cannon–Bard theory treats arousal and emotion as simultaneous, independent outputs and cannot explain why unrelated arousal intensified the emotion. Appraisal theory emphasizes the evaluation of the event, but the distinctive feature here is the contribution of unexplained arousal, not an unusually harsh appraisal.',
    optionExplanations: [
      'James–Lange theory would require the remark itself to produce an anger-specific bodily pattern. Here the arousal preceded the remark and came from exercise, so the pattern was not remark-specific.',
      'Cannon–Bard theory treats arousal and emotion as simultaneous, independent outputs of the thalamus. It cannot explain why unrelated pre-existing arousal intensified the emotion.',
      'Appraisal theory emphasizes evaluating the event, but the distinctive feature here is the contribution of unexplained residual arousal, not an unusually harsh judgment of the remark.',
      'Two-factor (Schachter–Singer) theory holds that emotion is arousal plus a cognitive label. Residual arousal from exercise was misattributed to the teasing, making the anger more intense than the remark alone would justify.',
    ],
    skill: '6C theories of emotion',
  },
  {
    id: 'fl1-ps-a-d02',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A 3-year-old says “I goed to the park” although she has never heard an adult use the word “goed.” This observation most directly supports which view of language acquisition?',
    options: [
      'Children acquire language mainly by imitating the speech of the adults around them',
      'Children extract grammatical rules on their own, as nativist accounts hold',
      'Language develops mainly through parental reinforcement of correct utterances',
      'Language and thought develop along independent paths during early childhood',
    ],
    correctAnswer: 1,
    explanation:
      'Overregularization errors such as “goed” apply the regular past-tense rule to an irregular verb. Because the child has never heard the form, she cannot have imitated it, and no adult would have reinforced it; she must have induced the rule herself, which is the kind of rule-extracting capacity that nativist accounts attribute to an inborn language faculty. Imitation and reinforcement accounts predict that children produce only forms they have heard or been rewarded for. The independence of language and thought is a separate question that this error does not address.',
    optionExplanations: [
      'The child has never heard “goed,” so she cannot have imitated it. Imitation accounts predict children produce only forms they have encountered in adult speech.',
      'Overregularization like “goed” applies the regular past-tense rule to an irregular verb. Since the child never heard it, she must have induced the rule herself, the rule-extracting capacity nativist accounts attribute to an inborn language faculty.',
      'No adult would reinforce “goed,” so reinforcement accounts predict the child would not produce it. The error arises despite, not because of, parental feedback.',
      'The independence of language and thought is a separate question that an overregularization error does not address. The observation concerns how grammatical rules are acquired.',
    ],
    skill: '6B language acquisition',
  },
  {
    id: 'fl1-ps-a-d03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A graduate student has had persistently elevated cortisol for several months. Compared with a person whose cortisol levels are normal, she is most likely to show:',
    options: [
      'higher blood glucose and a weaker immune response',
      'lower blood glucose and a stronger inflammatory response',
      'a lower resting heart rate and increased digestive activity',
      'increased ACTH secretion resulting from positive feedback',
    ],
    correctAnswer: 0,
    explanation:
      'Cortisol, the principal glucocorticoid released by the adrenal cortex during the stress response, raises blood glucose by promoting gluconeogenesis and suppresses immune and inflammatory activity; chronically high levels therefore impair immune defenses. Lower glucose and stronger inflammation are the opposite of cortisol’s actions. Reduced heart rate and increased digestion describe parasympathetic dominance, not a state of chronic stress. Cortisol exerts negative feedback on the hypothalamus and pituitary, so persistently high cortisol would decrease, not increase, ACTH release.',
    optionExplanations: [
      'Cortisol, the principal glucocorticoid of the stress response, raises blood glucose through gluconeogenesis and suppresses immune and inflammatory activity. Chronically high levels therefore impair immune defenses.',
      'Lower glucose and stronger inflammation are the opposite of cortisol’s actions. Cortisol mobilizes glucose and is anti-inflammatory, which is why it is used therapeutically to suppress inflammation.',
      'Reduced heart rate and increased digestion describe parasympathetic dominance, the rest-and-digest state, not the physiology of chronic stress with elevated cortisol.',
      'Cortisol exerts negative feedback on the hypothalamus and pituitary, so persistently high cortisol would decrease ACTH release, not increase it. There is no positive feedback in this axis.',
    ],
    skill: '6C stress physiology',
  },
  {
    id: 'fl1-ps-a-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A drug that blocks dopamine receptors reduces hallucinations in a patient with schizophrenia but also produces tremor and muscle rigidity. The motor side effects most likely result from reduced dopamine signaling in the:',
    options: ['hippocampus', 'basal ganglia', 'cerebellum', 'hypothalamus'],
    correctAnswer: 1,
    explanation:
      'The basal ganglia depend on dopamine input from the substantia nigra to regulate the initiation and smoothness of voluntary movement; loss of that signaling, whether from degeneration in Parkinson’s disease or from receptor blockade by antipsychotic drugs, produces tremor and rigidity. The hippocampus is central to forming new declarative memories, and its dysfunction would not cause these motor signs. The cerebellum coordinates movement and balance but is not the major target of dopamine-blocking drugs. The hypothalamus regulates homeostasis and endocrine function rather than voluntary motor control.',
    optionExplanations: [
      'The hippocampus is central to forming new declarative memories. Its dysfunction would produce memory deficits, not tremor and rigidity.',
      'The basal ganglia depend on dopamine from the substantia nigra to regulate initiation and smoothness of movement. Blocking dopamine receptors there produces tremor and rigidity, the same signs seen in Parkinson’s disease.',
      'The cerebellum coordinates movement and balance, but it is not the major target of dopamine-blocking drugs. Cerebellar damage produces ataxia, not parkinsonian tremor and rigidity.',
      'The hypothalamus regulates homeostasis and endocrine function. Dopamine blockade there can raise prolactin, but it does not produce motor rigidity or tremor.',
    ],
    skill: '6A neurotransmitters and brain regions',
  },
  {
    id: 'fl1-ps-a-d05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A diner who has just finished a large meal and reports feeling completely full orders dessert after the dessert cart is wheeled past the table. Which theory of motivation best explains this behavior?',
    options: [
      'Drive-reduction theory, because the dessert reduces a remaining hunger drive',
      'Maslow’s hierarchy, because physiological needs must be satisfied before other needs',
      'Instinct theory, because eating whenever food is available is an innate fixed pattern',
      'Incentive theory, because an external stimulus pulled the behavior in the absence of a need',
    ],
    correctAnswer: 3,
    explanation:
      'Incentive theory explains behavior that is drawn by the attractiveness of an external stimulus rather than pushed by an internal deficit; the diner has no hunger drive left, yet the sight of dessert motivates eating. Drive-reduction theory cannot explain eating when the drive has already been reduced to zero. Maslow’s hierarchy describes the ordering of needs and does not address why a satisfied need would motivate further eating. Instinct theory refers to fixed, species-typical behaviors and does not account for a learned, stimulus-dependent choice like ordering dessert.',
    optionExplanations: [
      'Drive-reduction theory cannot explain eating when the hunger drive has already been reduced to zero. The diner reports feeling completely full, so no drive remains to reduce.',
      'Maslow’s hierarchy describes the ordering of needs and does not address why an already-satisfied physiological need would motivate further eating.',
      'Instinct theory refers to fixed, species-typical behaviors. Ordering dessert is a learned, stimulus-dependent choice, not an innate fixed action pattern.',
      'Incentive theory explains behavior drawn by the attractiveness of an external stimulus rather than pushed by an internal deficit. The diner has no hunger left, yet the sight of the dessert cart motivates eating.',
    ],
    skill: '7A theories of motivation',
  },
  {
    id: 'fl1-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A city in a low-income country doubles in population over 15 years, mainly because young adults arrive from rural areas seeking wage work, while its birth and death rates remain similar to those of the surrounding countryside. Which factor best explains the city’s growth?',
    options: [
      'Natural increase among the city’s existing residents',
      'Suburbanization of the region surrounding the city',
      'Pull factors driving rural-to-urban migration',
      'A decline in the city’s mortality rate over the period',
    ],
    correctAnswer: 2,
    explanation:
      'Urbanization in developing countries is driven largely by migration: the availability of wage work is a pull factor that draws working-age people from rural areas into the city. Natural increase (births exceeding deaths) cannot explain the growth, since the city’s birth and death rates are no different from the countryside’s. Suburbanization describes movement outward from a city center to its periphery, the opposite of the influx described. A falling mortality rate is ruled out by the statement that death rates were unchanged.',
    optionExplanations: [
      'Natural increase (births exceeding deaths) cannot explain the growth, since the city’s birth and death rates are stated to be no different from the countryside’s.',
      'Suburbanization describes movement outward from a city center to its periphery, the opposite of the influx of rural young adults into the city described here.',
      'Urbanization in developing countries is driven largely by migration. The availability of wage work is a pull factor drawing working-age people from rural areas into the city, which matches the described growth.',
      'A falling mortality rate is ruled out by the statement that death rates remained similar to those of the surrounding countryside over the period.',
    ],
    skill: '9B urbanization',
  },
  {
    id: 'fl1-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question: 'Which observation would most strongly indicate that a society’s stratification system is relatively closed?',
    options: [
      'A person’s social position at midlife is almost fully predicted by that person’s parents’ position',
      'Most adults hold occupations that require formal educational credentials',
      'The income gap between the highest and lowest tenth of households is large',
      'A large share of workers change employers several times during their careers',
    ],
    correctAnswer: 0,
    explanation:
      'A closed stratification system is one in which social position is ascribed at birth and there is little intergenerational mobility; if parents’ position nearly determines a child’s adult position, movement between strata is rare. Credential-based occupations suggest positions are achieved, which characterizes a more open system. A large income gap measures inequality, which can be high in both open and closed systems, and does not by itself indicate whether people can move between levels. Changing employers is horizontal movement within the labor market and says nothing about movement between strata.',
    optionExplanations: [
      'A closed stratification system is one in which position is ascribed at birth with little intergenerational mobility. If parents’ position nearly determines a child’s adult position, movement between strata is rare.',
      'Credential-based occupations suggest positions are achieved through education rather than ascribed, which characterizes a more open system, not a closed one.',
      'A large income gap measures inequality, which can be high in both open and closed systems. It does not by itself indicate whether people can move between levels.',
      'Changing employers is horizontal movement within the labor market. It says nothing about movement between social strata, which is what defines openness or closure.',
    ],
    skill: '10A social stratification and mobility',
  },
  {
    id: 'fl1-ps-a-d08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'About an hour after falling asleep, a child sits up screaming with a racing heart, is difficult to awaken, and has no memory of the episode the next morning. The episode most likely occurred during:',
    options: ['rapid eye movement (REM) sleep', 'stage 1 (N1) sleep', 'stage 2 (N2) sleep', 'slow-wave (N3) sleep'],
    correctAnswer: 3,
    explanation:
      'Sleep terrors arise from slow-wave (N3) sleep, which is most abundant in the first third of the night; the intense autonomic arousal, difficulty in awakening, and amnesia for the event are characteristic. REM sleep is when vivid narrative dreams and nightmares occur, but the sleeper awakens readily and typically remembers the dream, and skeletal muscle atonia makes sitting up unlikely. Stage 1 is a brief transitional stage from which people are easily roused. Stage 2, marked by sleep spindles and K-complexes, is not the stage from which sleep terrors emerge.',
    optionExplanations: [
      'REM sleep is when vivid narrative dreams and nightmares occur, but the sleeper awakens readily and typically remembers the dream. REM muscle atonia also makes sitting up unlikely.',
      'Stage 1 (N1) is a brief transitional stage from which people are easily roused. Sleep terrors with difficulty awakening do not emerge from it.',
      'Stage 2 (N2), marked by sleep spindles and K-complexes, is not the stage from which sleep terrors emerge, and awakening from it is relatively easy.',
      'Sleep terrors arise from slow-wave (N3) sleep, most abundant in the first third of the night. Intense autonomic arousal, difficulty awakening, and amnesia for the event are characteristic.',
    ],
    skill: '6B sleep stages',
  },
]
