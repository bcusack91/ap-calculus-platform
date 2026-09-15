/**
 * MCAT psych-soc passage bank — expansion wave 3 (seven new research-study
 * passages so the diagnostic's two Psych/Soc passage sets per attempt can run
 * 15 back-to-back attempts without repeating a passage). Gated by the same
 * checks as wave 2: KaTeX compile, chart integrity, key balance, no
 * letter-position references, duplicate id/stem checks against the live banks.
 * Keys blind re-solved and content fact-checked before needsReview was cleared.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys are
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const PSYCH_SOC_PASSAGES_3: MCATPassage[] = [
  {
    "id": "ps3-01",
    "section": "psych-soc",
    "discipline": "learning-and-memory",
    "title": "Reinforcement Schedules and Persistence During Extinction",
    "passageText": "Operant conditioning research distinguishes continuous reinforcement, in which every target response is reinforced, from intermittent (partial) schedules. On a fixed-ratio (FR) schedule, reinforcement follows a set number of responses; on a variable-ratio (VR) schedule, it follows an unpredictable number of responses that averages a set value. Investigators hypothesized that responding acquired under intermittent reinforcement, particularly variable reinforcement, would persist longer once reinforcement stopped. Their proposed mechanism was discrimination: when rewards have always arrived irregularly, a long run of unrewarded responses is hard to tell apart from ordinary acquisition, so the onset of extinction goes unnoticed.\n\nUndergraduates (N = 120) completed a computer task in which clicking a flashing target earned points, each worth a small cash bonus. Participants were randomly assigned to continuous reinforcement (CRF), FR-5, or VR-5 and were not told their schedule. Acquisition ended when a participant had earned 60 points, so every group received the same number of reinforcers and the same bonus. Without any signal, an extinction phase then began in which clicks no longer earned points. Participants could end the session at any time by pressing a key labeled “Finish,” and their participation payment did not depend on when they finished.\n\nThe dependent measure was the mean number of clicks in each of five consecutive 2-minute extinction blocks, with participants who had pressed “Finish” scored as zero for the remaining blocks (Figure 1). During acquisition, the VR-5 group responded at the highest steady rate, while the FR-5 group paused briefly after each point. In a post-session questionnaire, 71% of CRF participants reported noticing that points had stopped during the first extinction block, compared with 38% of FR-5 participants and 16% of VR-5 participants.",
    "chart": {
      "title": "Figure 1. Mean clicks per 2-minute extinction block, by acquisition schedule",
      "kind": "line",
      "xLabel": "Extinction block",
      "yLabel": "Mean clicks per block",
      "xValues": [1, 2, 3, 4, 5],
      "yValues": [110, 94, 77, 58, 41],
      "seriesLabel": "VR-5",
      "comparisonSeries": [
        { "label": "FR-5", "yValues": [92, 61, 34, 15, 6] },
        { "label": "CRF", "yValues": [64, 18, 5, 1, 0] }
      ]
    },
    "questions": [
      {
        "question": "Which statement is best supported by Figure 1?",
        "options": [
          "Responding declined in every group but fell most gradually in the VR-5 group",
          "The FR-5 group clicked more than the VR-5 group in the first extinction block",
          "The CRF group's clicking rose again in the final block of the extinction phase",
          "The FR-5 group made about twice as many total extinction clicks as the VR-5 group"
        ],
        "correctAnswer": 0,
        "explanation": "All three curves fall across the five blocks, but VR-5 drops only from 110 to 41, whereas FR-5 drops from 92 to 6 and CRF from 64 to 0, so decline was most gradual under the variable-ratio schedule. In block 1 the FR-5 group (92) clicked less than the VR-5 group (110), not more. CRF clicking fell to 1 and then 0 and never rose again. Summing the blocks gives 208 clicks for FR-5 and 380 for VR-5, so FR-5 made only about half as many, not twice as many.",
        "skill": "interpret-data"
      },
      {
        "question": "Outside the laboratory, which situation involves the same type of reinforcement schedule as the VR-5 condition?",
        "options": [
          "A worker is paid a fixed amount for every ten garments she sews",
          "A gambler's slot machine pays out after an unpredictable number of pulls",
          "An employee receives a paycheck on the same day every two weeks",
          "A student checks a portal where grades are posted at unannounced times"
        ],
        "correctAnswer": 1,
        "explanation": "On a variable-ratio schedule, reinforcement depends on the number of responses, and that number varies unpredictably around an average, which is exactly how a slot machine pays out. Pay for every ten garments is a fixed-ratio schedule because the required number of responses never changes. A paycheck on a set calendar date is the textbook illustration of a fixed-interval (time-based) arrangement. Grades posted at unannounced times reward the first check after an unpredictable amount of time, a variable-interval schedule, because checking more often does not make the grades appear sooner.",
        "skill": "apply-a-theory"
      },
      {
        "question": "Which feature of the method poses the most serious alternative explanation for the partial-schedule groups' greater persistence during extinction?",
        "options": [
          "The CRF group earned fewer points during acquisition than the other two groups",
          "Participants on partial schedules received larger payments for taking part",
          "The partial-schedule groups made far more clicks than CRF before extinction",
          "Participants were assigned to schedules based on their own initial click rates"
        ],
        "correctAnswer": 2,
        "explanation": "Because acquisition ended at 60 points, the FR-5 and VR-5 groups had to make roughly 300 clicks while the CRF group needed only 60. The partial groups therefore had much more practice at the response, so their persistence could reflect greater response training rather than the schedule itself. The passage rules out the other possibilities: every group earned the same 60 points and the same bonus, the participation payment did not depend on performance, and schedules were assigned at random rather than by click rate.",
        "skill": "research-design"
      },
      {
        "question": "The questionnaire results most directly support which account of the persistence shown in Figure 1?",
        "options": [
          "Intermittent points became more valuable, raising participants' drive to earn them",
          "Continuous reinforcement produced faster habituation to the flashing target",
          "The VR-5 group's rapid acquisition responding left them too fatigued to stop",
          "Intermittent schedules made it harder to notice that points had stopped"
        ],
        "correctAnswer": 3,
        "explanation": "Far fewer VR-5 participants (16%) than FR-5 (38%) or CRF (71%) participants noticed that points had stopped during the first block, which matches the investigators' discrimination account: when reinforcement was always irregular, the start of extinction was hard to detect. The questionnaire measured noticing, not how much participants valued each point, so it does not bear on the value account. Habituation to the target would not explain why the groups differed in detecting the change. Fatigue would lower clicking, not keep it high, and the questionnaire did not assess it.",
        "skill": "evaluate-evidence"
      },
      {
        "question": "A week later, CRF participants returned to the same task with points still disabled. Many clicked at a moderate rate for the first minute and then stopped again. This return of the extinguished response is best described as:",
        "options": [
          "an extinction burst",
          "spontaneous recovery",
          "stimulus generalization",
          "shaping"
        ],
        "correctAnswer": 1,
        "explanation": "When an extinguished response reappears after a rest period, without any new reinforcement, the reappearance is called spontaneous recovery; it shows that extinction suppresses a learned response rather than erasing it. An extinction burst is a temporary rise in responding right after reinforcement first stops, not a return after a delay. Stimulus generalization is responding to stimuli similar to the original one, but participants saw the same target. Shaping is reinforcing successive approximations of a target behavior, and no reinforcement was given here.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Ending acquisition after a fixed number of points, rather than after a fixed amount of time, was chosen primarily to:",
        "options": [
          "equate the number of reinforcers delivered across the groups",
          "equate the number of responses made across the three groups",
          "keep participants unaware of their assigned schedule",
          "ensure every participant noticed when extinction began"
        ],
        "correctAnswer": 0,
        "explanation": "Stopping every participant at 60 points guarantees that all three groups received the same number of reinforcers (and the same bonus), so differences in extinction cannot be blamed on how much reward each group had received. This choice does the opposite of equating responses: the ratio groups needed about five times as many clicks as the CRF group to reach 60 points. Participants were kept unaware of their schedule simply by not being told it. The switch to extinction was unsignaled, and the questionnaire shows many participants did not notice it.",
        "skill": "research-design"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-02",
    "section": "psych-soc",
    "discipline": "learning-and-memory",
    "title": "Sleep, Interference, and Two Kinds of Memory",
    "passageText": "The consolidation hypothesis proposes that newly encoded memories are initially fragile and become stabilized over the hours after learning. Researchers tested whether sleep does more than passively shelter memories from interference by comparing a 12-hour interval containing a night of sleep with a 12-hour interval of daytime wakefulness.\n\nHealthy adults (N = 144) were randomly assigned to six groups of 24. All learned 40 word pairs (for example, kite–lemon) until they recalled every pair correctly, and all practiced a five-key finger-tapping sequence with the nondominant hand for 12 trials. The sleep groups trained at 9 p.m., slept in the laboratory with polysomnographic recording, and were tested at 9 a.m.; the wake groups trained at 9 a.m. and were tested at 9 p.m. after a normal day without naps. In one sleep group and one wake group, participants learned a second list just before testing in which each original cue word was paired with a new associate (kite–anchor), and then attempted to recall the original pairs. Tapping was not tested in these two groups. Two control groups trained and were tested after only 20 minutes, one at 9 a.m. and one at 9 p.m. Tapping was scored as the number of correct sequences in 30 seconds, expressed as percentage change from the end of training.\n\nResults appear in Table 1. In the sleep group without the second list, the percentage of word pairs recalled correlated with minutes of slow-wave (stage N3) sleep, r = 0.52, but not with minutes of REM sleep, r = 0.08. Tapping improvement correlated with the number of sleep spindles during stage N2 sleep, r = 0.48, but not with minutes of slow-wave sleep, r = 0.11. The authors concluded that sleep consolidates both declarative and procedural memories through partly distinct sleep processes.",
    "figure": "Table 1. Memory at test, by group\n\n| Group | Word pairs recalled (%) | Change in tapping speed (%) |\n|---|---|---|\n| 12-h sleep, no second list | 94 | +19 |\n| 12-h sleep, second list | 88 | not tested |\n| 12-h wake, no second list | 82 | +2 |\n| 12-h wake, second list | 61 | not tested |\n| 20-min delay, 9 a.m. | 97 | +1 |\n| 20-min delay, 9 p.m. | 96 | +2 |",
    "questions": [
      {
        "question": "Which conclusion about sleep and the second list is best supported by Table 1?",
        "options": [
          "The second list reduced word-pair recall by the same amount after sleep as after wakefulness",
          "Training in the evening rather than the morning produced the sleep groups' advantage",
          "Sleep's advantage over wakefulness for word pairs was larger when a second list was learned",
          "After sleep, recall of word pairs rose above the level reached at the end of training"
        ],
        "correctAnswer": 2,
        "explanation": "Without the second list, the sleep group recalled 12 points more than the wake group (94% versus 82%); with the second list the gap grew to 27 points (88% versus 61%), so sleep's benefit was larger under interference. The second list cost only 6 points after sleep but 21 points after wakefulness, so its effect was not equal. The 20-minute controls trained at 9 p.m. and 9 a.m. performed almost identically (96% and 97%), so evening training by itself does not produce the advantage. All participants reached 100% at the end of training, so 94% after sleep is a small loss rather than a gain.",
        "skill": "interpret-data"
      },
      {
        "question": "What was the main purpose of the two 20-minute control groups?",
        "options": [
          "To estimate how much losing sleep impairs the initial encoding of word pairs",
          "To rule out time of day at training or testing as the cause of 12-hour differences",
          "To let each member of the sleep groups serve as his or her own control",
          "To measure how strongly the second list interferes when there is no delay"
        ],
        "correctAnswer": 1,
        "explanation": "The sleep groups trained in the evening and tested in the morning, while the wake groups did the reverse, so time of day is confounded with sleep. Testing at 9 a.m. and 9 p.m. after only 20 minutes shows whether time of day alone changes performance; the nearly identical results (97% and 96% recall, +1% and +2% tapping) indicate it does not. No group was sleep-deprived, so encoding after sleep loss was not studied. The controls were separate participants, not a within-subjects comparison. Neither control group learned the second list, so they could not measure interference.",
        "skill": "research-design"
      },
      {
        "question": "The drop in recall of kite–lemon after participants learned kite–anchor is an example of:",
        "options": [
          "proactive interference",
          "decay of the memory trace",
          "encoding failure",
          "retroactive interference"
        ],
        "correctAnswer": 3,
        "explanation": "New learning (kite–anchor) disrupted recall of older learning (kite–lemon), which is retroactive interference: the interference works backward in time. Proactive interference is the reverse, when older learning disrupts recall of newer material. Decay attributes forgetting to the mere passage of time, but the groups with and without the second list waited the same 12 hours and differed sharply. Encoding failure means the information was never stored, yet every participant recalled all pairs correctly at the end of training.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Which patient would most likely show normal overnight gains on the tapping task but severely impaired learning of the word pairs?",
        "options": [
          "A patient with bilateral hippocampal damage",
          "A patient with degeneration of the basal ganglia",
          "A patient with a stroke affecting the cerebellum",
          "A patient with a lesion of motor cortex for the hand"
        ],
        "correctAnswer": 0,
        "explanation": "Learning word pairs is explicit (declarative) memory, which depends on the hippocampus, while the tapping sequence is procedural (implicit) memory that relies on other systems. Bilateral medial temporal lobe damage including the hippocampus, as in the patient H.M., severely impairs forming new declarative memories while leaving motor-skill learning largely intact. Basal ganglia degeneration, as in Parkinson disease, and cerebellar damage both disrupt procedural and motor-sequence learning, the opposite pattern. A lesion of hand motor cortex would impair executing the tapping sequence itself.",
        "skill": "apply-a-theory"
      },
      {
        "question": "According to the passage, improvement on the tapping task in the sleep group was most closely associated with:",
        "options": [
          "minutes of stage N3 slow-wave sleep",
          "minutes of REM sleep",
          "spindles during stage N2 sleep",
          "total time spent asleep"
        ],
        "correctAnswer": 2,
        "explanation": "The passage reports that tapping improvement correlated with the number of sleep spindles during stage N2 sleep (r = 0.48). Slow-wave sleep correlated with word-pair recall, not with tapping (r = 0.11 for tapping). REM sleep was reported only for word pairs, where it showed no relationship (r = 0.08). The passage gives no correlation for total sleep time.",
        "skill": "passage-detail"
      },
      {
        "question": "The correlation between slow-wave sleep and word-pair recall does not by itself show that slow-wave sleep causes consolidation, primarily because:",
        "options": [
          "slow-wave sleep was measured by polysomnography instead of by self-report",
          "the wake groups' slow-wave sleep was not recorded on the night before",
          "recall was scored as a percentage of the pairs rather than as a raw count",
          "sleep amounts were not manipulated, so a third variable could drive both"
        ],
        "correctAnswer": 3,
        "explanation": "Participants were randomly assigned to sleep or wake, but not to different amounts of slow-wave sleep, so the relationship within the sleep group is correlational. A third variable, such as age or general health, could increase both slow-wave sleep and memory. Polysomnography is the objective standard for measuring sleep stages and makes the measure stronger, not weaker. The wake groups' sleep on the previous night is irrelevant to a correlation computed within the sleep group. Because every participant learned the same 40 pairs, a percentage and a raw count are equivalent.",
        "skill": "research-design"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-03",
    "section": "psych-soc",
    "discipline": "biological-basis-of-behavior",
    "title": "Divided Visual Field Testing After Corpus Callosotomy",
    "passageText": "Cutting the corpus callosum (callosotomy) is a last-resort treatment for epilepsy in which seizures spread between the hemispheres. Because each visual field projects to the opposite hemisphere and each hand is controlled mainly by the opposite hemisphere, callosotomy allows researchers to test what each hemisphere can do on its own. Investigators predicted that patients would be able to name objects shown only to the left hemisphere, which controls speech production in most right-handed people, but not objects shown only to the right hemisphere, even though the right hemisphere would still recognize those objects.\n\nSix right-handed adults who had undergone complete callosotomy at least two years earlier were compared with 12 right-handed adults with epilepsy who had not had surgery. Participants fixated a central dot while a photograph of a common object was flashed for 150 milliseconds either to the left or to the right of fixation. On some trials, participants named the object aloud. On other trials, they reached under an opaque screen with one hand and selected the object by touch from five objects they could not see. Both groups completed identical procedures.\n\nResults are shown in Table 1. On left-visual-field trials, patients who correctly selected an object with the left hand frequently said that they had seen nothing. When asked why the left hand had chosen that object, several patients gave a confident but incorrect explanation, such as saying they had recently used the item. The investigators attributed these explanations to a left-hemisphere system that constructs accounts of behavior whose true causes it cannot access.",
    "figure": "Table 1. Percentage of trials correct (chance for touch selection = 20%)\n\n| Group | Visual field | Naming aloud | Right-hand selection | Left-hand selection |\n|---|---|---|---|---|\n| Callosotomy | Right | 92 | 89 | 21 |\n| Callosotomy | Left | 12 | 24 | 86 |\n| Comparison | Right | 96 | 94 | 93 |\n| Comparison | Left | 93 | 92 | 95 |",
    "questions": [
      {
        "question": "Which result most directly indicates that the patients' right hemispheres recognized objects presented in the left visual field?",
        "options": [
          "Patients' 12% accuracy when naming left-field objects aloud",
          "Patients' 86% accuracy selecting left-field objects with the left hand",
          "Patients' 89% accuracy selecting right-field objects with the right hand",
          "Comparison participants' high accuracy with both hands in both fields"
        ],
        "correctAnswer": 1,
        "explanation": "A left-field image reaches only the right hemisphere, and the left hand is controlled mainly by the right hemisphere, so 86% correct left-hand selection (against 20% chance) shows that the right hemisphere identified the object without help from the left. Poor naming of left-field objects shows only that the right hemisphere could not produce speech, not that it recognized anything. Right-field, right-hand accuracy reflects the left hemisphere. The comparison group has an intact corpus callosum, so its results cannot isolate either hemisphere.",
        "skill": "interpret-data"
      },
      {
        "question": "Presenting each photograph for only 150 milliseconds was necessary mainly to:",
        "options": [
          "keep eye movements from bringing the image to both hemispheres",
          "lower the chance of triggering a seizure during the testing session",
          "make the naming task more difficult for the comparison participants",
          "stop patients from memorizing the five objects behind the screen"
        ],
        "correctAnswer": 0,
        "explanation": "Eye movements toward a new stimulus typically take about 200 milliseconds to begin, so a 150-millisecond flash is usually gone before gaze can shift to it. If they could look directly at the image, it would fall across the center of gaze and reach both hemispheres, destroying the lateralized presentation. Brief flashes are not a seizure precaution. The comparison group stayed highly accurate, so the timing was not meant to handicap them. Remembering which objects sat behind the screen would not reveal which one had been shown on a given trial.",
        "skill": "research-design"
      },
      {
        "question": "A different patient has a lesion that cuts only the crossing fibers at the midline of the optic chiasm. Which visual deficit is most expected?",
        "options": [
          "Loss of the entire left visual field in both eyes",
          "Loss of the inner (nasal) half of the visual field in each eye",
          "Complete loss of vision in one eye, with the other eye spared",
          "Loss of the outer (temporal) half of the visual field in each eye"
        ],
        "correctAnswer": 3,
        "explanation": "The fibers that cross at the optic chiasm come from the nasal half of each retina, and the nasal retina receives light from the temporal (outer) visual field. Cutting them therefore removes the outer half of the visual field in each eye (bitemporal hemianopia). Loss of the whole left visual field in both eyes results from damage behind the chiasm on the right side, such as the right optic tract. Loss of the inner visual fields would require damage to the uncrossed temporal-retina fibers on both sides. Blindness in one eye results from damage to that eye's optic nerve, before the chiasm.",
        "skill": "apply-a-theory"
      },
      {
        "question": "The patients' incorrect explanations for their left hands' choices are best interpreted as evidence that:",
        "options": [
          "the right hemisphere takes over control of speech after callosotomy",
          "visual information still crossed between hemispheres through spared fibers",
          "the left hemisphere generates explanations for actions begun by the right",
          "the patients were deliberately hiding the fact that they had seen the object"
        ],
        "correctAnswer": 2,
        "explanation": "The speaking left hemisphere never received the left-field image, yet it confidently explained a choice made by the right hemisphere, which fits the investigators' account of a left-hemisphere system that builds plausible stories for behavior whose real causes it cannot access. If the right hemisphere controlled speech, patients would have named left-field objects, but naming was only 12% correct. If visual information had crossed, the explanations would have been accurate rather than wrong. The explanations were given confidently and matched the patients' report of seeing nothing, which fits a lack of access rather than deliberate concealment.",
        "skill": "evaluate-evidence"
      },
      {
        "question": "Which statement about brain localization best explains why patients could name right-field objects but not left-field objects?",
        "options": [
          "Broca's area, which is needed for speech production, lies in the left frontal lobe",
          "Wernicke's area, which is needed for speech production, lies in the right temporal lobe",
          "Primary visual cortex, which is needed to see objects, lies only in the left occipital lobe",
          "Motor cortex for the lips and tongue, used in speaking, lies only in the right frontal lobe"
        ],
        "correctAnswer": 0,
        "explanation": "Broca's area, which is critical for fluent speech production, is located in the left frontal lobe in most right-handed people, so only images reaching the left hemisphere (the right visual field) could be named. Wernicke's area chiefly supports language comprehension (damage leaves speech fluent but often meaningless), and it too is usually in the left hemisphere, in the temporal lobe. Primary visual cortex exists in both occipital lobes, which is why patients could still see and select left-field objects. Motor cortex for the lips and tongue exists in both hemispheres.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Which limitation most affects generalizing these findings to people with typical brains?",
        "options": [
          "The comparison group viewed the photographs for longer than the patients",
          "The patients could not see objects presented in the right visual field",
          "Only left-handed participants were included in the comparison group",
          "The patients' long-standing epilepsy may have changed brain organization"
        ],
        "correctAnswer": 3,
        "explanation": "Callosotomy is performed only in people with severe, long-standing epilepsy, and years of seizures can alter how functions are organized in the brain, so what each isolated hemisphere can do may not match a typical brain. The other statements contradict the passage: both groups completed identical procedures, patients named right-field objects 92% of the time, and every participant was right-handed.",
        "skill": "research-design"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-04",
    "section": "psych-soc",
    "discipline": "biological-basis-of-behavior",
    "title": "Twin and Adoption Estimates of Cognitive Ability Across Development",
    "passageText": "Behavioral geneticists use twins to divide individual differences in a trait into sources. Monozygotic (MZ) twins share essentially all of their genes, whereas dizygotic (DZ) twins share, on average, about half of the genes that vary among people. If MZ and DZ twins raised together experience equally similar environments (the equal environments assumption), a higher MZ than DZ correlation indicates genetic influence. Falconer's formulas give rough estimates: heritability, h² = 2(rMZ − rDZ); shared environment, c² = 2rDZ − rMZ; and nonshared environment plus measurement error, e² = 1 − rMZ.\n\nInvestigators pooled data from twin registries in three countries, testing 5,800 same-sex twin pairs raised together on age-appropriate cognitive tests at ages 7, 12, and 17 and in adulthood (mean age 32). Zygosity was confirmed by DNA genotyping. Different pairs were tested at each age, and scores were standardized within each age group before correlations were computed. The investigators hypothesized that heritability would increase with age. They reasoned that as children gain independence, they increasingly choose peers, activities, and settings that fit their genetically influenced dispositions, which magnifies initial genetic differences. Twin correlations are shown in Figure 1.\n\nA companion adoption study followed 240 children adopted in the first month of life. The correlation between the adopted children's scores and their adoptive parents' scores was 0.20 at age 7 but 0.02 in adulthood. Over the same period, the correlation with their biological parents' scores rose from 0.24 to 0.38. The authors cautioned that heritability describes the sources of variation within a particular population and environment; it does not indicate how much of one person's ability is caused by genes.",
    "chart": {
      "title": "Figure 1. Twin correlations for cognitive ability, by age group",
      "kind": "line",
      "xLabel": "Age group",
      "yLabel": "Twin correlation (r)",
      "xValues": ["7 years", "12 years", "17 years", "Adult"],
      "yValues": [0.70, 0.76, 0.80, 0.82],
      "seriesLabel": "MZ pairs",
      "comparisonSeries": [
        { "label": "DZ pairs", "yValues": [0.52, 0.50, 0.46, 0.44] }
      ]
    },
    "questions": [
      {
        "question": "Using Falconer's formula from the passage, the heritability of cognitive ability at age 12 is closest to:",
        "options": [
          "0.24",
          "0.26",
          "0.52",
          "0.76"
        ],
        "correctAnswer": 2,
        "explanation": "At age 12, rMZ = 0.76 and rDZ = 0.50, so h² = 2(0.76 − 0.50) = 2(0.26) = 0.52. The value 0.26 is the MZ–DZ difference before it is doubled. The value 0.24 is the shared-environment estimate (2 × 0.50 − 0.76) and also the nonshared-environment estimate (1 − 0.76), and 0.76 is simply the MZ correlation.",
        "skill": "interpret-data"
      },
      {
        "question": "Applying the passage's formulas to Figure 1, which trend across age groups is supported?",
        "options": [
          "The gap between the MZ and DZ correlations narrowed from childhood to adulthood",
          "Nonshared environment accounted for most of the variation by adulthood",
          "DZ correlations rose with age while MZ correlations fell with age",
          "The shared-environment estimate shrank as the heritability estimate grew"
        ],
        "correctAnswer": 3,
        "explanation": "Heritability rises from 0.36 at age 7 to 0.52, 0.68, and 0.76 in adulthood, while shared environment falls from 0.34 to 0.24, 0.12, and 0.06. The MZ–DZ gap widened (0.18 to 0.38), not narrowed. Adult nonshared environment is 1 − 0.82 = 0.18, a small minority of the variation. The figure shows the reverse of the claimed crossover: MZ correlations rose while DZ correlations fell.",
        "skill": "interpret-data"
      },
      {
        "question": "The adult heritability estimate of about 0.76 means that:",
        "options": [
          "about 76% of each individual adult's cognitive ability is determined by his or her own genes",
          "about 76% of score variation among these adults is associated with genetic differences",
          "changes in the environment cannot meaningfully alter cognitive ability in adults",
          "about 76% of adults score within the range predicted by their parents' scores"
        ],
        "correctAnswer": 1,
        "explanation": "Heritability is a population statistic: the proportion of variation among individuals in a given population and environment that is associated with genetic differences. As the authors caution, it says nothing about how much of one person's ability comes from genes, so the reading about each adult is incorrect. High heritability does not make a trait unchangeable, because a shift in the environment can change the average level of a trait even when heritability stays high. Heritability is not the percentage of people whose scores fall near their parents' scores.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Suppose parents, teachers, and peers treat MZ twins more similarly than DZ twins in ways that affect cognitive development. The heritability estimates would most likely be:",
        "options": [
          "overestimated, because extra environmental similarity would inflate the MZ–DZ gap",
          "underestimated, because extra environmental similarity would inflate the DZ correlation",
          "unaffected, because every twin pair in the study was raised together in one home",
          "unaffected, because zygosity was confirmed by DNA genotyping rather than by appearance"
        ],
        "correctAnswer": 0,
        "explanation": "Falconer's formula attributes the entire MZ–DZ difference to genes. If MZ twins also share more similar environments, their correlation is raised for environmental reasons, the gap widens, and doubling it overstates heritability; this is a violation of the equal environments assumption. The extra similarity described applies to MZ pairs, not DZ pairs, so it would not inflate the DZ correlation. Being raised in the same home does not guarantee equal treatment, which is exactly the problem. Accurate genotyping classifies twins correctly but does nothing to equalize how they are treated.",
        "skill": "research-design"
      },
      {
        "question": "The adoption findings are most consistent with which conclusion?",
        "options": [
          "Being raised by adoptive parents produced a similarity that lasted into adulthood",
          "Adopted children resembled their adoptive and biological parents equally at every age",
          "Shared family environment mattered less as genetic resemblance became more predictive",
          "Adopted children's resemblance to their biological parents weakened as they grew older"
        ],
        "correctAnswer": 2,
        "explanation": "Resemblance to adoptive parents, who share only the environment, fell from 0.20 to 0.02, while resemblance to biological parents, who share only genes, rose from 0.24 to 0.38, matching the twin data's pattern of shrinking shared-environment effects and rising heritability. The adoptive-parent correlation of 0.02 in adulthood shows that the environmental similarity did not last. The two correlations were nearly equal at age 7 but far apart in adulthood, not equal throughout. The biological-parent correlation strengthened rather than weakened.",
        "skill": "evaluate-evidence"
      },
      {
        "question": "The investigators' explanation for why heritability should rise with age describes which process?",
        "options": [
          "Passive gene–environment correlation",
          "Active gene–environment correlation",
          "Evocative gene–environment correlation",
          "The Flynn effect"
        ],
        "correctAnswer": 1,
        "explanation": "In an active gene–environment correlation, individuals seek out environments that fit their genetically influenced traits, which is what the investigators describe when older children choose their own peers, activities, and settings. A passive correlation arises when parents supply both genes and a matching home environment, which matters most in early childhood and does not require the child's choices. An evocative correlation arises when a person's traits draw particular responses from others rather than from the person's own selection. The Flynn effect is the rise in average test scores across generations, not a change in heritability within a lifetime.",
        "skill": "apply-a-theory"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-05",
    "section": "psych-soc",
    "discipline": "personality-and-disorders",
    "title": "Cohort, Age, and Personality Trait Change in Adulthood",
    "passageText": "The five-factor (Big Five) model describes personality along five dimensions: openness to experience, conscientiousness, extraversion, agreeableness, and neuroticism. Trait theorists once assumed that these dimensions stop changing by early adulthood. The maturity principle instead predicts that average conscientiousness and agreeableness rise and average neuroticism falls across adulthood as people take on work, partnership, and caregiving roles.\n\nResearchers tested this prediction with two designs that used the same 60-item questionnaire. Study A was a cross-sectional survey of 6,000 adults aged 20 to 69, all tested in the same year and grouped by decade of age. Study B was longitudinal: 1,200 members of a single birth cohort were tested at age 20 and every 10 years thereafter until age 60. At each age, Study B means were computed from all participants assessed at that age. Scores in both studies were converted to T-scores (mean = 50, SD = 10), with the full Study A sample as the norm group.\n\nFigure 1 shows selected results. In Study A, respondents in their 20s had completed an average of 3.1 more years of formal education than respondents in their 60s. In Study B, 780 of the original 1,200 participants completed the final assessment; those who dropped out had scored, on average, 6 T-score points higher in neuroticism at age 20 than those who remained. Study B also measured rank-order stability: the correlation between participants' conscientiousness scores at successive assessments rose from 0.55 between ages 20 and 30 to 0.74 between ages 50 and 60. The authors concluded that personality traits show meaningful average change in adulthood alongside increasing stability in how individuals rank relative to one another.",
    "chart": {
      "title": "Figure 1. Mean trait T-scores by age (Study B) and by age decade (Study A)",
      "kind": "line",
      "xLabel": "Age (Study B) or start of age decade (Study A)",
      "yLabel": "Mean T-score",
      "xValues": ["20", "30", "40", "50", "60"],
      "yValues": [46, 49, 51, 53, 54],
      "seriesLabel": "Conscientiousness (Study B)",
      "comparisonSeries": [
        { "label": "Neuroticism (Study B)", "yValues": [54, 52, 50, 48, 47] },
        { "label": "Openness (Study B)", "yValues": [52, 52, 51, 50, 49] },
        { "label": "Openness (Study A)", "yValues": [56, 53, 50, 47, 44] }
      ]
    },
    "questions": [
      {
        "question": "Which statement about openness is best supported by Figure 1?",
        "options": [
          "Both studies showed openness scores rising again after age 40",
          "The Study B decline in openness exceeded the Study B rise in conscientiousness",
          "Openness scores at age 20 were the same in the two studies",
          "The Study A decline was several times steeper than the Study B decline"
        ],
        "correctAnswer": 3,
        "explanation": "Openness fell 12 T-score points across age groups in Study A (56 to 44) but only 3 points within the Study B cohort (52 to 49), a decline four times as steep. Neither study shows openness rising after 40; both keep falling. Study B's 3-point openness decline is smaller than its 8-point conscientiousness rise (46 to 54). At age 20, Study A shows 56 and Study B shows 52, so the scores were not the same.",
        "skill": "interpret-data"
      },
      {
        "question": "The education data in the passage most strongly suggest that the Study A openness pattern partly reflects:",
        "options": [
          "cohort effects, since each age group grew up in a different era",
          "practice effects from filling out the same questionnaire more than one time",
          "selective loss of the least open respondents over the course of the survey",
          "regression toward the mean among respondents who had extreme first scores"
        ],
        "correctAnswer": 0,
        "explanation": "In a cross-sectional design, age groups are also birth cohorts. Younger respondents had over three more years of schooling, and education is associated with openness, so part of the age difference in openness may reflect when people were born rather than aging itself, which may help explain why the single-cohort Study B shows a much smaller decline. Study A tested each person once, so there were no practice effects, no dropout over time, and no earlier extreme scores to regress from.",
        "skill": "research-design"
      },
      {
        "question": "Given the information about participants who left Study B, the decline in mean neuroticism shown in Figure 1 is most likely:",
        "options": [
          "understated, because participants low in neuroticism were lost at higher rates",
          "unbiased, because the same people were assessed at each age in the longitudinal study",
          "exaggerated, because participants high in neuroticism were lost at higher rates",
          "a cohort effect, because the participants were born in several different decades"
        ],
        "correctAnswer": 2,
        "explanation": "Dropouts started 6 points higher in neuroticism, and later means were computed only from those who remained, so the later samples contain fewer high-neuroticism people. Mean neuroticism would therefore fall even if no individual changed, which exaggerates the apparent decline (selective attrition). The attrition ran in the opposite direction from the claim about low-neuroticism participants. The later means did not come from the same individuals, since 420 participants were missing by age 60. Study B followed a single birth cohort, so cohort differences cannot explain its results.",
        "skill": "research-design"
      },
      {
        "question": "The rising correlations between successive conscientiousness scores, together with the rising mean, indicate that:",
        "options": [
          "most individuals stopped changing in conscientiousness once they reached age 30",
          "individuals' relative standing became more consistent even as the average level rose",
          "the questionnaire became less reliable as the participants grew older",
          "most individuals' scores fell even though the group's average score went up"
        ],
        "correctAnswer": 1,
        "explanation": "A test–retest correlation reflects whether people keep their rank order, not whether their scores stay the same. Everyone can gain conscientiousness (a rising mean) while keeping roughly the same position relative to others (higher correlations), so rank-order stability and mean-level change can coexist. The mean kept rising after age 30, so individuals had not stopped changing. Declining reliability would lower, not raise, correlations between assessments. A rising average means that scores increased overall, which is inconsistent with most individuals' scores falling.",
        "skill": "evaluate-evidence"
      },
      {
        "question": "A participant with a T-score of 68 on neuroticism would most likely be described as:",
        "options": [
          "curious, imaginative, and drawn to unconventional ideas",
          "organized, dependable, and careful to plan ahead",
          "trusting, cooperative, and sympathetic toward others",
          "prone to worry and to strong reactions to minor stress"
        ],
        "correctAnswer": 3,
        "explanation": "A T-score of 68 is nearly two standard deviations above the mean, and high neuroticism is marked by anxiety, worry, and emotional reactivity. Curiosity and imagination describe openness to experience. Organization and dependability describe conscientiousness. Trust and cooperativeness describe agreeableness.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Compared with Study B, the main practical advantage of Study A's design is that it:",
        "options": [
          "gives age comparisons quickly without decades of follow-up",
          "separates the effects of aging from the effects of cohort",
          "shows how the same individuals change as they grow older",
          "avoids the need to recruit a large sample of participants"
        ],
        "correctAnswer": 0,
        "explanation": "A cross-sectional survey compares age groups at a single point in time, so results are available at once rather than after 40 years of follow-up. It cannot separate aging from cohort, because each age group is also a different birth cohort, and it cannot track change within individuals, which requires repeated measurement of the same people. Study A actually used the larger sample (6,000 versus 1,200).",
        "skill": "research-design"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-06",
    "section": "psych-soc",
    "discipline": "sensation-and-perception",
    "title": "Vibration, Distraction, and the Spinal Gate for Pain",
    "passageText": "Painful stimuli are detected by nociceptors, free nerve endings whose signals travel along thinly myelinated Aδ fibers, which carry sharp, quickly perceived pain, and unmyelinated C fibers, which carry slower, dull or burning pain. Gate control theory proposes that transmission of these signals is modulated in the dorsal horn of the spinal cord. Activity in large-diameter, heavily myelinated Aβ fibers, which carry touch and vibration, excites inhibitory interneurons that reduce the relay of nociceptive input to ascending projection neurons, “closing the gate.” Descending pathways from the brain can also inhibit dorsal-horn transmission, which may help explain why attention alters pain.\n\nResearchers tested two predictions: that vibration would reduce pain only when it activated Aβ fibers entering the same side and level of the spinal cord as the painful input, and that attention-demanding distraction would reduce pain even without vibration. Forty-eight healthy adults each completed four conditions in counterbalanced order. In every condition, a thermode delivered 10-second heat pulses at 47°C to the left forearm, and participants rated each pulse for intensity and for unpleasantness on 0–10 scales. The conditions were baseline (heat alone); same-arm vibration, applied 3 cm from the heated skin; opposite-arm vibration, applied to the matching spot on the right forearm; and distraction, in which participants performed a demanding serial-subtraction task during the heat pulses without vibration. The vibrator was clearly audible in both vibration conditions, and thermode temperature was verified on every trial.\n\nMean ratings are shown in Figure 1. Participants also reported that the vibration felt noticeably weaker by the end of each vibration block, although its amplitude never changed. The authors concluded that both spinal and descending mechanisms can reduce pain.",
    "chart": {
      "title": "Figure 1. Mean pain ratings by condition",
      "kind": "bar",
      "xLabel": "Condition",
      "yLabel": "Mean rating (0–10)",
      "xValues": ["Baseline", "Same-arm vibration", "Opposite-arm vibration", "Distraction"],
      "yValues": [6.6, 4.2, 6.1, 5.0],
      "seriesLabel": "Intensity",
      "comparisonSeries": [
        { "label": "Unpleasantness", "yValues": [6.9, 4.6, 6.5, 4.8] }
      ]
    },
    "questions": [
      {
        "question": "Which comparison best isolates the effect of spinal gating from nonspecific effects of receiving vibration, such as its sound or participants' expectations?",
        "options": [
          "Same-arm vibration versus baseline",
          "Same-arm vibration versus opposite-arm vibration",
          "Distraction versus baseline",
          "Opposite-arm vibration versus the distraction condition"
        ],
        "correctAnswer": 1,
        "explanation": "Both vibration conditions share the audible vibrator, the sensation of being touched, and any expectation that vibration will help; they differ chiefly in whether the vibration enters the same side and level of the spinal cord as the heat input (and, necessarily, in its distance from the heated skin). Their difference (4.2 versus 6.1 for intensity) therefore isolates the spinal effect. Comparing same-arm vibration with baseline mixes the spinal effect with all of the nonspecific effects. Distraction versus baseline tests the attention prediction, and opposite-arm vibration versus distraction compares two conditions that differ in several ways at once.",
        "skill": "research-design"
      },
      {
        "question": "According to gate control theory, same-arm vibration reduced pain mainly by activating:",
        "options": [
          "C fibers that release endorphins into the heated patch of skin",
          "Aδ fibers that silence the nociceptors at the site of heating",
          "Aβ fibers that excite inhibitory interneurons in the dorsal horn",
          "ventral-horn motor neurons that relax the forearm muscles"
        ],
        "correctAnswer": 2,
        "explanation": "The passage describes vibration as activating large-diameter Aβ fibers, which excite inhibitory interneurons in the dorsal horn and reduce the relay of pain signals to ascending neurons. C fibers and Aδ fibers are the pain-carrying fibers whose input the gate restricts, not the fibers that close it, and gating occurs in the spinal cord rather than at the skin. Ventral-horn motor neurons control muscles and play no role in gate control.",
        "skill": "apply-a-theory"
      },
      {
        "question": "Which statement is supported by Figure 1?",
        "options": [
          "Distraction reduced unpleasantness more than it reduced intensity",
          "Opposite-arm vibration reduced intensity more than distraction did",
          "Distraction produced the lowest intensity ratings of any condition",
          "Unpleasantness ratings exceeded intensity ratings in every condition"
        ],
        "correctAnswer": 0,
        "explanation": "Compared with baseline, distraction lowered unpleasantness by 2.1 points (6.9 to 4.8) but intensity by only 1.6 points (6.6 to 5.0). Opposite-arm vibration lowered intensity by just 0.5 points, less than distraction. Same-arm vibration, not distraction, gave the lowest intensity rating (4.2). In the distraction condition, unpleasantness (4.8) was lower than intensity (5.0), so unpleasantness did not exceed intensity everywhere.",
        "skill": "interpret-data"
      },
      {
        "question": "The reduction in pain during the serial-subtraction task is best attributed to:",
        "options": [
          "reduced firing of nociceptors in the heated skin during mental effort",
          "a lower thermode temperature during the distraction condition",
          "sensory adaptation of heat receptors carried over from earlier conditions",
          "descending signals from the brain inhibiting dorsal-horn transmission"
        ],
        "correctAnswer": 3,
        "explanation": "The passage states that descending pathways from the brain can inhibit dorsal-horn transmission, and diverting attention to a demanding task is the kind of top-down influence those pathways are thought to carry. Mental effort does not change how nociceptors in the skin respond to a constant heat stimulus. Thermode temperature was verified on every trial, ruling out a cooler stimulus. Condition order was counterbalanced, so adaptation carried over from earlier conditions would not systematically favor distraction.",
        "skill": "apply-a-theory"
      },
      {
        "question": "The report that vibration felt weaker by the end of each block, although its amplitude never changed, is an example of:",
        "options": [
          "a shift in response criterion",
          "sensory adaptation",
          "Weber's law",
          "gestalt closure"
        ],
        "correctAnswer": 1,
        "explanation": "Sensory adaptation is a decrease in sensitivity to a constant, unchanging stimulus, so the same vibration is perceived as weaker over time. A response-criterion shift in signal detection theory changes the willingness to report a stimulus, not the perceived strength of a clearly present one. Weber's law concerns the just-noticeable difference between two stimuli as a proportion of stimulus magnitude. Gestalt closure is the tendency to perceive incomplete figures as whole.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Counterbalancing the order of the four conditions was most important for:",
        "options": [
          "keeping fatigue or sensitization across trials from being confounded with condition",
          "equating baseline pain sensitivity between separate groups of participants",
          "keeping participants unaware of the hypotheses the study was designed to test",
          "ensuring that the sound of the vibrator was audible during every condition"
        ],
        "correctAnswer": 0,
        "explanation": "In a within-subjects design, each person experiences every condition, so effects that build up over a session, such as fatigue, sensitization of the heated skin, or practice with the rating scales, could be mistaken for condition effects if every participant followed the same order. Counterbalancing spreads these order effects across conditions. There were no separate groups to equate, because all 48 participants completed every condition. Counterbalancing does not conceal hypotheses, and the vibrator was audible only in the two vibration conditions.",
        "skill": "research-design"
      }
    ],
    "needsReview": false
  },
  {
    "id": "ps3-07",
    "section": "psych-soc",
    "discipline": "cognition-and-perception",
    "title": "Survival Versus Mortality Framing in Treatment Choice",
    "passageText": "Normative models of decision making assume description invariance: logically equivalent descriptions of the same options should lead to the same choice. Prospect theory challenges this assumption. It proposes that outcomes are evaluated as gains or losses relative to a reference point, that losses weigh more heavily than equivalent gains (loss aversion), and that people tend to avoid risk when choosing among gains but accept risk when choosing among losses. A framing effect occurs when choices shift with the way equivalent outcomes are described.\n\nResearchers asked 300 adult outpatients and 300 medical residents to imagine that they had operable lung cancer and to choose between surgery and radiation therapy. Surgery carried a risk of death during treatment but better long-term survival. Each participant was randomly assigned to one of three frames. In the survival frame, participants read that of 100 people having surgery, 90 survive the operation, 68 are alive after 1 year, and 34 are alive after 5 years; of 100 people having radiation, all 100 survive treatment, 77 are alive after 1 year, and 22 are alive after 5 years. The mortality frame presented the same outcomes as deaths (10, 32, and 66 for surgery; 0, 23, and 78 for radiation). The mixed frame presented both. Crossed with frame, half of each group wrote a brief justification of their reasoning before choosing, a manipulation intended to encourage slower, more deliberate thinking.\n\nTable 1 shows the percentage choosing surgery; each cell contained 50 participants. The authors proposed that in the mortality frame, the 10 deaths during surgery, compared with none for radiation, loomed especially large, because moving from no chance of loss to some chance of loss is weighted far more heavily than an equivalent change in survivors.",
    "figure": "Table 1. Percentage of participants choosing surgery\n\n| Frame | Outpatients, no justification | Outpatients, justification | Residents, no justification | Residents, justification |\n|---|---|---|---|---|\n| Survival | 82 | 78 | 84 | 80 |\n| Mortality | 56 | 60 | 50 | 56 |\n| Mixed | 60 | 62 | 58 | 60 |",
    "questions": [
      {
        "question": "Among residents who did not write a justification, how large was the framing effect, measured as the percentage-point difference in choosing surgery between the survival and mortality frames?",
        "options": [
          "26 points",
          "18 points",
          "24 points",
          "34 points"
        ],
        "correctAnswer": 3,
        "explanation": "Residents without a justification chose surgery 84% of the time in the survival frame and 50% of the time in the mortality frame, a difference of 34 points. A 26-point difference belongs to outpatients without a justification (82 − 56), 18 points to outpatients with a justification (78 − 60), and 24 points to residents with a justification (80 − 56).",
        "skill": "interpret-data"
      },
      {
        "question": "Which conclusion is best supported by the percentages in Table 1?",
        "options": [
          "Medical training did not protect residents from the framing effect",
          "Writing a justification eliminated the framing effect in both groups",
          "Outpatients showed a larger framing effect than residents showed",
          "The mixed frame led to the highest rate of choosing surgery"
        ],
        "correctAnswer": 0,
        "explanation": "Residents showed framing effects of 34 points without a justification and 24 points with one, as large as or larger than the outpatients' 26 and 18 points, so medical training did not make them immune. Writing a justification shrank the effect somewhat but left large gaps of 18 and 24 points. Outpatients' effects were smaller than residents', not larger. The survival frame, not the mixed frame, produced the highest surgery rates in every column.",
        "skill": "interpret-data"
      },
      {
        "question": "The justification manipulation was designed to test whether the framing effect depends mainly on:",
        "options": [
          "a lack of numerical information in the treatment descriptions",
          "participants' own prior experience with cancer treatment",
          "fast, intuitive processing that slower deliberation might override",
          "forgetting the outcome statistics before the choice was made"
        ],
        "correctAnswer": 2,
        "explanation": "The passage states that writing a justification was meant to encourage slower, more deliberate thinking. If framing arises from fast, intuitive processing, deliberation should weaken it, and the effect did shrink modestly (26 to 18 points for outpatients, 34 to 24 for residents). All frames contained full numerical outcomes, so missing information was not at issue. The manipulation changed how participants reasoned, not anything about their personal experience with cancer. Nothing in the manipulation addresses memory for the statistics.",
        "skill": "research-design"
      },
      {
        "question": "Random assignment to frame was essential because it allowed the researchers to:",
        "options": [
          "have each participant serve as his or her own control across the frames",
          "attribute differences in choice to frame rather than to preexisting differences",
          "generalize the results to all outpatients and medical residents across the country",
          "keep participants from guessing that the study was investigating framing"
        ],
        "correctAnswer": 1,
        "explanation": "Random assignment makes the frame groups equivalent on average in age, risk tolerance, medical knowledge, and every other characteristic, so a difference in choices can be attributed to the frame itself. Each participant saw only one frame, so participants did not serve as their own controls. Generalizing to a wider population depends on random sampling, not random assignment. Assignment to conditions does not keep participants from guessing the purpose of a study.",
        "skill": "research-design"
      },
      {
        "question": "An official must choose between two programs for an outbreak expected to kill 600 people. Program 1 will save 200 people for certain. Program 2 has a one-third chance of saving all 600 and a two-thirds chance of saving no one. According to prospect theory, most people would prefer:",
        "options": [
          "Program 1, since people tend to avoid risk when outcomes are framed as gains",
          "Program 2, since people tend to seek risk when outcomes are framed as gains",
          "Program 1, since people tend to seek risk when outcomes are framed as losses",
          "Program 2, since it offers a higher expected number of lives saved"
        ],
        "correctAnswer": 0,
        "explanation": "Both programs describe lives saved, a gain frame, and prospect theory holds that people are risk-averse for gains, so most prefer the certain outcome of Program 1. People are described as risk-averse, not risk-seeking, for gains. Risk seeking applies to losses, but these outcomes are framed as lives saved, and risk seeking would favor the gamble anyway. The expected values are equal (one-third of 600 is 200), so Program 2 does not save more lives on average.",
        "skill": "apply-a-theory"
      },
      {
        "question": "Which statement best describes the mixed-frame results in Table 1?",
        "options": [
          "They were closer to the survival frame in every column",
          "They were closer to the survival frame for residents only",
          "They fell exactly halfway between the other two frames",
          "They were closer to the mortality frame in each column"
        ],
        "correctAnswer": 3,
        "explanation": "In each column the mixed-frame rate sits just above the mortality-frame rate and far below the survival-frame rate: 60 versus 56 and 82, 62 versus 60 and 78, 58 versus 50 and 84, and 60 versus 56 and 80. So presenting deaths alongside survivors produced choices resembling the mortality frame, not the survival frame, for both outpatients and residents. None of the mixed-frame values is at the midpoint; for example, the midpoint of 82 and 56 is 69, not 60.",
        "skill": "interpret-data"
      }
    ],
    "needsReview": false
  }
]
