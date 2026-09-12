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
| Awake, relaxed | Alpha waves | Eyes closed, drowsy |
| **N1** | Theta | Hypnagogic jerks, easily woken |
| **N2** | Theta + **sleep spindles & K-complexes** | Bulk of the night |
| **N3** (slow-wave) | **Delta** | Deepest; hardest to wake; **night terrors, sleepwalking, bedwetting**; growth hormone release |
| **REM** | Beta-like (awake-looking) | Vivid dreams, rapid eye movements, **muscle atonia** ("paradoxical sleep") |

- Cycles run ~90 minutes; **N3 dominates early night, REM periods lengthen toward morning**
- **REM rebound** after deprivation implies REM serves a needed function; sleep (both SWS and REM) supports **memory consolidation** — the direct bridge to the learning-memory lesson
- Dream theories: **activation-synthesis** (cortex narrates random brainstem activity) vs. problem-solving/consolidation views; Freudian manifest/latent content is historical context

### Sleep Disorders (differentiate by stage and timing)

- **Insomnia** (most common); **narcolepsy** (daytime REM intrusions, cataplexy — atonia while awake; orexin/hypocretin deficiency); **sleep apnea** (breathing stops, O2 drops, daytime fatigue; often no memory of waking)
- **Night terrors** (N3, early night, no dream recall, child inconsolable) vs. **nightmares** (REM, later night, recalled) — a guaranteed discrimination item
- **Somnambulism** (sleepwalking): N3, not dream enactment

### Psychoactive Drugs in One Table

| Class | Examples | Core action |
|-------|----------|-------------|
| **Depressants** | Alcohol, barbiturates, benzodiazepines | Enhance GABA; slow CNS |
| **Stimulants** | Caffeine, nicotine, amphetamine, cocaine | Boost dopamine/norepinephrine; arousal up |
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

**Passage.** Participants learn a word-pair list at 9 PM. Group A sleeps normally with polysomnography; Group B stays awake until 3 AM, then sleeps; Group C sleeps but is awakened at every sleep-spindle burst. At 9 AM, recall is: A 74%, B 51%, C 58%. Within Group A, recall correlates r = 0.62 with minutes of N3 sleep in the first half of the night. A second task — a mirror-tracing motor skill — shows improvement correlating instead with REM plus N2 spindle density, not N3.

**Step 1 — identify the logic of three groups.** B controls for total sleep obtained (they eventually sleep) but delays it, showing consolidation benefits are time-sensitive; C sleeps a full night minus spindle-associated processes, isolating a specific stage-linked mechanism rather than sleep duration. Neither group alone would justify a stage-specific conclusion.

**Step 2 — map task to stage.** Declarative word pairs track N3 slow-wave sleep (early night); procedural mirror tracing tracks REM/N2 spindles. This double dissociation — two tasks, two different stage correlates — mirrors the explicit/implicit memory split: different memory systems consolidate in different sleep states.

**Step 3 — flag the inference limits.** The N3 correlation within Group A is correlational: deeper sleepers may differ in ways that also aid memory. The causal claim rests on Group C's selective disruption. Also note awakenings themselves stress participants — a strong answer choice will mention a yoked-control (awakened equally often at random times), and the best experimental-design option on the real exam usually is that control.

**Step 4 — the integration item.** "A drug that suppresses REM but preserves N3 should impair which task?" Mirror tracing (procedural), sparing word pairs — answer directly off the dissociation. If the stem instead describes morning-shifted REM loss from an early alarm, reason from architecture: REM concentrates late in the night, so early waking preferentially costs REM.`
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
            explanation: `Spindles (brief bursts) and K-complexes (large biphasic waves) are the exclusive markers of N2. N1 shows plain theta without them; N3 is dominated by slow delta waves; REM pairs an awake-looking EEG with rapid eye movements and muscle atonia — both absent here.`
          },
          {
            question: `A 6-year-old sits up screaming 90 minutes after bedtime, is inconsolable and unresponsive for several minutes, then returns to sleep and remembers nothing in the morning. This episode is best classified as:`,
            options: [`A nightmare, since it involved fear`, `A narcoleptic attack of sleep-onset REM`, `An episode of REM sleep behavior disorder`, `A night terror arising from N3 sleep`],
            correctAnswer: 3,
            explanation: `Timing (first sleep cycle, when N3 dominates), inconsolability, and morning amnesia are the night-terror triad, an N3 parasomnia common in children. Nightmares are REM events later in the night and are RECALLED. Narcolepsy is daytime REM intrusion; REM behavior disorder involves acting out dreams when atonia fails, typically in older adults.`
          },
          {
            question: `After several nights of selective REM deprivation, participants allowed to sleep freely show a marked increase in the proportion of the night spent in REM. This "rebound" is most directly interpreted as evidence that:`,
            options: [`REM sleep is dispensable and can be skipped`, `REM meets a regulated need the brain repays`, `Delta waves of deep sleep generate dreams`, `The suprachiasmatic nucleus has been damaged`],
            correctAnswer: 1,
            explanation: `Compensatory overshoot after selective deprivation is the standard signature of a regulated need: the brain tracks a REM debt and repays it, implying REM does necessary work (consolidation and emotional processing are leading candidates). Dispensable processes show no rebound. Delta belongs to N3, and circadian pacemaker damage would disorganize timing, not produce selective REM repayment.`
          },
          {
            question: `A drug increases synaptic dopamine and norepinephrine; users show elevated heart rate, suppressed appetite, insomnia, and — with heavy use — paranoia. Withdrawal brings fatigue and depressed mood. This profile identifies a:`,
            options: [`Stimulant, such as amphetamine`, `Depressant enhancing GABA`, `Narcotic at opioid receptors`, `Classic hallucinogen like LSD`],
            correctAnswer: 0,
            explanation: `Catecholamine elevation with sympathetic arousal, appetite suppression, insomnia, and a crash-type withdrawal is the stimulant signature; high-dose paranoia links to excess dopamine (one pillar of the dopamine hypothesis covered in the disorders lesson). Depressants sedate via GABA, opioids produce analgesia and respiratory depression, and hallucinogens act mainly on serotonin with perceptual distortion.`
          },
          {
            question: `In a within-subject Stroop experiment, every participant completes the congruent block first and the incongruent block second. The interference effect the researchers report is uninterpretable primarily because:`,
            options: [`Reaction time cannot measure interference`, `The sample was too small to detect interference`, `Block order was fixed rather than counterbalanced`, `Stroop effects appear only in between-subject designs`],
            correctAnswer: 2,
            explanation: `With a fixed order, any difference between blocks could reflect the manipulation OR systematic change over time (practice speeding people up, fatigue slowing them down); the two are inseparable. Counterbalancing order across participants breaks the confound. RT is the standard interference measure, and Stroop is robust in within-subject designs when properly counterbalanced.`
          }
        ]
      }
    },
    {
      id: 'cog4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- EEG ladder: alpha (relaxed wake) → N1 theta → N2 spindles/K-complexes → N3 delta (terrors, sleepwalking, early night) → REM (vivid dreams, atonia, lengthens toward morning); cycles ~90 min
- REM rebound = regulated need; declarative memory tracks N3, procedural tracks REM/N2 spindles — the sleep-consolidation double dissociation
- Disorders by stage: night terrors and somnambulism = N3 early; nightmares = REM late; narcolepsy = waking REM intrusion (orexin); apnea = breathing, not staging
- Drug classes: depressants (GABA), stimulants (dopamine/NE), opioids (endorphin receptors), hallucinogens (serotonin); reward = VTA-to-accumbens dopamine
- Experiment reading: RT indexes processing and conflict; within-subject designs demand counterbalancing; match each manipulation to the processing stage it touches before choosing a theory`
    }
  ]
};
