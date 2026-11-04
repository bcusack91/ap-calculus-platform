export const mcatPsychCogLangPart4Data = {
  topicSlug: 'mcat-psychology-behavior-cognition-language-mcat',
  sections: [
    {
      id: 'cog4-intro',
      type: 'text' as const,
      content: `# Cognition & Language — Deep Dive

**Part 4 of 4 — MCAT Integration: Consciousness, Sleep & Reading Cognition Experiments**

### States of Consciousness

Consciousness ranges from alert wakefulness through drowsiness, sleep, and altered states (hypnosis, meditation, drug states). **Circadian rhythms** (~24 h) are set by the **suprachiasmatic nucleus**, entrained by light, with **melatonin** from the pineal gland rising in darkness.

### Sleep Architecture (EEG signatures are the test)

| Stage | EEG | Events |
|-------|-----|--------|
| Awake, alert | Beta waves | Eyes open, actively thinking |
| Awake, relaxed | Alpha waves | Eyes closed, drowsy |
| **N1** | Theta | Hypnagogic jerks, easily woken |
| **N2** | Theta + **sleep spindles & K-complexes** | Bulk of the night |
| **N3** (slow-wave) | **Delta** | Deepest; hardest to wake; **night terrors, sleepwalking, bedwetting**; growth hormone release |
| **REM** | Beta-like (awake-looking) | Vivid dreams, rapid eye movements, **muscle atonia** ("paradoxical sleep") |

- Cycles run ~90 minutes; **N3 dominates early night, REM periods lengthen toward morning**
- **REM rebound** after deprivation implies REM serves a needed function; sleep (both SWS and REM) supports **memory consolidation** — the direct bridge to the learning-memory lesson
- Dream theories: **activation-synthesis** (cortex narrates random brainstem activity) vs. problem-solving/consolidation views; Freudian manifest/latent content is historical context

### Sleep Disorders (differentiate by stage and timing)

- **Insomnia** (most common); **narcolepsy** (daytime REM intrusions, cataplexy — atonia while awake); **sleep apnea** (breathing stops, O2 drops, daytime fatigue; often no memory of waking)

<!-- yield:low -->
- Narcolepsy reflects a deficiency of the wake-promoting neuropeptide orexin (hypocretin).
<!-- /yield -->

- **Night terrors** (N3, early night, no dream recall, child inconsolable) vs. **nightmares** (REM, later night, recalled) — a guaranteed discrimination item
- **Somnambulism** (sleepwalking): N3, not dream enactment

### Psychoactive Drugs in One Table

| Class | Examples | Core action |
|-------|----------|-------------|
| **Depressants** | Alcohol, barbiturates, benzodiazepines | Enhance GABA; slow CNS |
| **Stimulants** | Caffeine, nicotine, amphetamine, cocaine | Arousal up; amphetamine and cocaine boost dopamine/norepinephrine, caffeine blocks adenosine receptors, nicotine activates nicotinic ACh receptors |
| **Opioids** | Heroin, morphine | Endorphin receptors; pain relief, euphoria |
| **Hallucinogens** | LSD (serotonergic), marijuana (mixed) | Perceptual distortion |

Reward circuit: mesolimbic **dopamine** pathway (VTA → nucleus accumbens); tolerance, withdrawal, and dependence follow from adaptation to it.

### Reading Cognition Experiments — the Method Layer

1. **Reaction time** is the workhorse dependent variable: slower RT = more processing or more conflict (Stroop); priming = faster RT
2. **Within-subject designs** need **counterbalancing** against order/practice effects; between-subject designs need random assignment
3. Check what a manipulation touched: perception, attention, memory stage, decision criterion — then match the theory whose MECHANISM lives at that stage
4. Sleep studies: self-report diaries vs. polysomnography (EEG) — objective staging beats recall; deprivation designs need a control for general fatigue`
    },
    {
      id: 'cog4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Sleep-and-Memory Passage, Fully Read

**Problem 1.** Participants learn a word-pair list at 9 PM. Group A sleeps normally with polysomnography; Group B stays awake until 3 AM, then sleeps; Group C sleeps but is briefly awakened whenever delta activity appears, so it gets almost no N3. At 9 AM, recall is: A 74%, B 51%, C 58%.

- **(a)** What can Group B's deficit show, and what can it not?
- **(b)** What does Group C's design isolate?
- **(c)** What does the gap between Groups A and C let you conclude?
- **(d)** What extra control group would strengthen that conclusion?

**(a) Sleep helps, stage unknown.** Group B still sleeps, but later and for less time, so its deficit mixes timing and duration. It shows sleep helps but cannot say which stage matters.

**(b) A stage, not duration.** Group C sleeps a full night minus N3. Group B alone cannot isolate a stage; Group C's selective N3 removal, compared with Group A, can, because total sleep time is held roughly equal.

**(c) N3 aids declarative recall.** Removing N3 alone cut recall from 74% to 58%, so slow-wave sleep supports consolidation of the word pairs. This selective disruption carries the causal claim.

**(d) A yoked control.** The awakenings themselves stress participants. A group awakened equally often at random times separates N3 loss from disruption, and on the real exam the best experimental-design option is usually that control.

**Problem 2.** Within Group A, recall correlates r = 0.62 with minutes of N3 sleep in the first half of the night. A second task, a mirror-tracing motor skill, shows improvement correlating instead with REM plus N2 spindle density, not N3.

- **(a)** Does the r = 0.62 correlation show that N3 causes better recall?
- **(b)** How do the two tasks map onto sleep stages and memory systems?
- **(c)** A drug suppresses REM but preserves N3. Which task should it impair?
- **(d)** An early alarm cuts the last hours of sleep. Which stage is lost most?

**(a) No.** The correlation within Group A is only correlational: deeper sleepers may differ in ways that also aid memory. The causal claim rests on Group C's selective removal of N3.

**(b) A double dissociation.** Declarative word pairs track N3 slow-wave sleep (early night); procedural mirror tracing tracks REM and N2 spindles. Two tasks with two different stage correlates mirror the explicit/implicit split: different memory systems consolidate in different sleep states.

**(c) Mirror tracing.** The procedural task should suffer while word pairs are spared, read directly off the dissociation in (b).

**(d) REM.** Reason from architecture: REM concentrates late in the night, so early waking preferentially costs REM, and with it the procedural gains.`
    },
    {
      id: 'cog4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Consciousness, Sleep & Experimental Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: `A polysomnogram segment shows theta background punctuated by brief high-frequency bursts and large biphasic waves, with no rapid eye movements and normal muscle tone. The sleeper is in:`,
            options: [`REM sleep`, `Stage N1`, `Stage N2`, `Stage N3`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Spindles (brief bursts) and K-complexes (large biphasic waves) are the defining markers of N2. N1 shows plain theta without them; N3 is dominated by slow delta waves; REM pairs an awake-looking EEG with rapid eye movements and muscle atonia — both absent here.`
          },
          {
            question: `A 6-year-old sits up screaming 90 minutes after bedtime, is inconsolable and unresponsive for several minutes, then returns to sleep and remembers nothing in the morning. This episode is best classified as:`,
            options: [`A nightmare, since it involved fear`, `A narcoleptic attack of sleep-onset REM`, `An episode of REM sleep behavior disorder`, `A night terror from N3 sleep`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Timing (first sleep cycle, when N3 dominates), inconsolability, and morning amnesia are the night-terror triad, an N3 parasomnia common in children. Nightmares are REM events later in the night and are RECALLED. Narcolepsy is daytime REM intrusion; REM behavior disorder involves acting out dreams when atonia fails, typically in older adults.`
          },
          {
            question: `After several nights of selective REM deprivation, participants allowed to sleep freely show a marked increase in the proportion of the night spent in REM. This "rebound" is most directly interpreted as evidence that:`,
            options: [`REM sleep is dispensable and can be skipped`, `REM meets a regulated need the brain repays`, `Delta waves of deep sleep generate dreams`, `The suprachiasmatic nucleus has been damaged`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Compensatory overshoot after selective deprivation is the standard signature of a regulated need: the brain tracks a REM debt and repays it, implying REM does necessary work (consolidation and emotional processing are leading candidates). Dispensable processes show no rebound. Delta belongs to N3, and circadian pacemaker damage would disorganize timing, not produce selective REM repayment.`
          },
          {
            question: `A drug increases synaptic dopamine and norepinephrine; users show elevated heart rate, suppressed appetite, insomnia, and — with heavy use — paranoia. Withdrawal brings fatigue and depressed mood. This profile identifies a:`,
            options: [`Stimulant, such as amphetamine`, `Depressant enhancing GABA`, `Narcotic at opioid receptors`, `Classic hallucinogen like LSD`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Catecholamine elevation with sympathetic arousal, appetite suppression, insomnia, and a crash-type withdrawal is the stimulant signature; high-dose paranoia links to excess dopamine (one pillar of the dopamine hypothesis covered in the disorders lesson). Depressants sedate via GABA, opioids produce analgesia and respiratory depression, and hallucinogens act mainly on serotonin with perceptual distortion.`
          },
          {
            question: `In a within-subject Stroop experiment, every participant completes the congruent block first and the incongruent block second. The interference effect the researchers report is uninterpretable primarily because:`,
            options: [`Reaction time cannot measure interference`, `The sample was too small to detect interference`, `Block order was fixed rather than counterbalanced`, `Stroop effects appear only in between-subject designs`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `With a fixed order, any difference between blocks could reflect the manipulation OR systematic change over time (practice speeding people up, fatigue slowing them down); the two are inseparable. Counterbalancing order across participants breaks the confound. RT is the standard interference measure, and Stroop is robust in within-subject designs when properly counterbalanced.`
          }
        ]
      }
    },
    {
      id: 'cog4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **The EEG ladder.** Beta alert, alpha relaxed, N1 theta, N2 spindles and K-complexes, N3 delta, REM beta-like with atonia.
- **Night architecture.** Cycles run ~90 min; N3 dominates early in the night, and REM periods lengthen toward morning.
- **Sleep and memory.** Declarative memory tracks N3, procedural skill tracks REM and N2 spindles; REM rebound signals a need.
- **Drug classes.** Depressants enhance GABA, amphetamine/cocaine boost dopamine/NE, opioids hit endorphin receptors.

**Common traps**

- **Night terror vs. nightmare.** Night terrors are N3, early and unrecalled; nightmares are REM, later in the night, and remembered.
- **Sleepwalking as dream enactment.** Somnambulism happens in N3, not REM, so the sleeper is not acting out a dream.
- **Fixed block order.** A within-subject design run in one order confounds the manipulation with practice and fatigue; counterbalance.
- **Correlation as cause.** A stage-recall correlation is not causal; selective disruption of that stage, with a yoked control, is.

<!-- yield:low -->
**Low-yield extras**

- Narcolepsy reflects a deficiency of orexin (hypocretin)
<!-- /yield -->`
    }
  ]
};
