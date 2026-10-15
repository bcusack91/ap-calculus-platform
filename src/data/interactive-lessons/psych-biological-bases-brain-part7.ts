export const psychBrainPart7Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p7-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 7 of 7 — AP Practice and Synthesis**

---

| Section |
|---------|
| AAQ practice: a sleep-restriction study |
| Walking through the six AAQ tasks |
| EBQ practice: caffeine, sleep and school performance |
| Synthesis: from one neuron to a night's sleep |
| Integrated review questions |

> 🔑 **Key Concept:** The free-response section has two 7-point questions. The **Article Analysis Question (AAQ)** gives you one study summary and asks six parts (A–F) about its method, variables, statistics, ethics, generalizability and support for a hypothesis; you get 25 minutes, including a 10-minute reading period. The **Evidence-Based Question (EBQ)** gives you three source summaries; you make a claim and support it with evidence from two **different** sources, each explained with a **different** psychological concept, in 45 minutes including a 15-minute reading period.

## AAQ practice study (hypothetical)

**Introduction.** Researchers tested the hypothesis that restricting sleep impairs sustained attention.

**Participants.** Sixty undergraduate volunteers (ages 18–22, 34 women and 26 men) from one university responded to campus flyers. People with a diagnosed sleep disorder or who worked night shifts were excluded. All gave informed consent and were told they could leave the study at any time without penalty.

**Method.** A computer randomly assigned participants to one of two groups. For four nights in a sleep lab, the **8-hour group** was allowed 8 hours in bed and the **5-hour group** was allowed 5 hours in bed. Each morning, participants completed a 10-minute reaction-time task: they pressed a button as soon as a dot appeared on a screen at unpredictable intervals. Attention was measured as **mean reaction time in milliseconds** on the fourth morning. Afterward, participants were debriefed and paid \\$100.

**Results.**

| Group | Mean reaction time (ms) | Standard deviation |
|---|---|---|
| 8 hours in bed | 289 | 35 |
| 5 hours in bed | 352 | 41 |

The difference was statistically significant (p = .002).

**Discussion.** The researchers concluded that four nights of restricted sleep slowed reactions, suggesting reduced sustained attention.`
    },
    {
      id: 'biological-bases-brain-p7-s2-aaq-walk',
      type: 'text' as const,
      content: `## Walking through the six AAQ tasks

| Part | Task | Strong answer for this study | Why it earns credit |
|---|---|---|---|
| **A** | Identify the research method | An **experiment** | Researchers **manipulated** time in bed and used **random assignment** |
| **B** | State the operational definition of a variable | Attention was operationalized as **mean reaction time in milliseconds** to a dot on a 10-minute task on the fourth morning | Names exactly how the variable was measured, not just "attention" |
| **C** | Describe what a statistic indicates | The 5-hour group's mean was **63 ms slower** (352 − 289), so on average restricted sleepers reacted more slowly | Interprets the **difference in means** in the study's terms |
| **D** | Identify an ethical guideline and how it was applied | **Informed consent**: participants agreed after learning about the study; **right to withdraw**: they could leave without penalty; **debriefing** afterward | Names the guideline **and** points to how the researchers applied it |
| **E** | Explain generalizability | Findings may **not** generalize to teens, older adults or people with sleep disorders, because the sample was 18- to 22-year-old volunteers from one university | Uses **specific evidence** from the participant description |
| **F** | Explain how a finding supports or refutes the hypothesis | **Supports**: random assignment means the slower reaction times can be attributed to less sleep, consistent with the hypothesis that restriction impairs attention | Links a **specific result** back to the **specific hypothesis** |

### Common AAQ mistakes

| Mistake | Fix |
|---|---|
| Calling it "correlational" because two variables are measured | Look for **manipulation + random assignment**: that makes it an experiment |
| Defining the variable in general terms ("how well people pay attention") | Quote the **measure**: units, task and timing |
| Saying "random sample" | The study used **random assignment** of volunteers, not random **sampling** |
| Saying "it's generalizable because it's an experiment" | Generalizability depends on **who was studied**, not on the design |`
    },
    {
      id: 'biological-bases-brain-p7-s3-aaq-items',
      type: 'dropdown-select' as const,
      content: `**AAQ Elements — Practice Study** 🔎`,
      exercise: {
        dropdowns: [
          {
            label: 'The independent variable in the practice study is _____.',
            options: ['time allowed in bed', 'mean reaction time', 'participant age', 'the payment amount']
          },
          {
            label: 'Telling participants they could leave at any time without penalty applies the guideline of _____.',
            options: ['debriefing', 'confidentiality', 'right to withdraw', 'deception']
          },
          {
            label: 'The 63-millisecond figure is a _____.',
            options: ['standard deviation', 'difference in means', 'correlation coefficient', 'p-value']
          }
        ],
        correctAnswers: ['time allowed in bed', 'right to withdraw', 'difference in means'],
        hint1: 'The independent variable is what the researchers changed between groups.',
        hint2: 'Which guideline protects a participant\'s choice to stop participating?',
        hint3: 'Subtract one group\'s mean from the other\'s.',
        explanation: 'Researchers manipulated time in bed (independent variable); letting people quit is the right to withdraw; 352 − 289 = 63 ms is the difference between the group means.'
      }
    },
    {
      id: 'biological-bases-brain-p7-s4-aaq-mc',
      type: 'multiple-choice' as const,
      content: `**AAQ Reasoning — Practice Study** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which feature of the practice study makes it an experiment rather than a correlational study?',
            options: [
              'Recruiting 60 volunteers from one university',
              'Measuring reaction time over 4 nights in a lab',
              'Randomly assigning people to 8 or 5 hours in bed',
              'Reporting means and standard deviations'
            ],
            correctAnswer: 2,
            explanation: 'Manipulating time in bed and randomly assigning participants to the conditions defines an experiment. Sample size, setting and descriptive statistics appear in correlational studies too.'
          },
          {
            question: 'Which statement best evaluates the generalizability of the practice study?',
            options: [
              'Findings apply to everyone, since the study was an experiment',
              'Findings may not extend to older adults or teens',
              'Findings generalize well, since the sample was random',
              'Findings cannot be trusted, since no one gave consent'
            ],
            correctAnswer: 1,
            explanation: 'All participants were 18- to 22-year-old volunteers from one university, so results may not hold for other ages. The study used random assignment, not random sampling, and participants did give informed consent.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p7-s5-ebq',
      type: 'text' as const,
      content: `## EBQ practice: caffeine, sleep and school performance

**Prompt:** Using the sources, develop and justify an argument about whether daily caffeine use helps or hurts high school students' academic performance.

**Source 1 (practice experiment).** Eighty college students were randomly assigned to drink a beverage with 200 mg of caffeine or an identical placebo 30 minutes before a 20-minute attention test. The caffeine group made fewer errors (mean 4.1 vs. 6.3).

**Source 2 (practice correlational survey).** In a survey of 1,200 high school students, those who drank caffeine after 4 p.m. reported sleeping 48 fewer minutes per school night on average. Evening caffeine and sleep duration were negatively correlated (r = −.31).

**Source 3 (practice longitudinal study).** Researchers followed 300 teens for a school year. Daily heavy caffeine users reported headaches, fatigue and low mood on weekend mornings before their first drink, and average nightly sleep was positively correlated with grade point average (r = .28).

### A model response

**A. Claim:** Daily caffeine use is more likely to hurt than help high school students' academic performance, because it shortens sleep and creates dependence.

**B(i). Evidence:** Students who drank caffeine after 4 p.m. slept 48 fewer minutes per school night (Source 2).
**B(ii). Explanation:** Caffeine is a **stimulant** that increases neural activity, so evening use delays sleep onset while school start times stay fixed. Less sleep means less time for **memory consolidation**, so material studied that day is stored less well, which hurts performance on tests.

**C(i). Evidence:** According to Source 3, daily heavy users reported headaches, fatigue and low mood before their first drink on weekends.
**C(ii). Explanation:** These symptoms are **withdrawal**, a sign that repeated use has produced **tolerance** and dependence. Students then need caffeine just to feel normal, so any benefit like the one in Source 1 shrinks, while fatigue during withdrawal works against concentration in class.

Notice the structure: each explanation uses a **different** psychological concept (stimulants and memory consolidation; tolerance and withdrawal), each cites a **different** source, and the evidence is **specific** (numbers, groups), not a vague summary. A strong writer may also acknowledge Source 1 and explain why a short-term lab boost does not outweigh the nightly sleep loss.`
    },
    {
      id: 'biological-bases-brain-p7-s6-ebq-mc',
      type: 'multiple-choice' as const,
      content: `**EBQ Reasoning — Caffeine Sources** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which claim would earn the EBQ claim point for the caffeine prompt?',
            options: [
              'Caffeine is a topic that many students have opinions about',
              'Sleep and caffeine both matter for teenagers in school',
              'Students should think carefully about how they use caffeine',
              'Daily caffeine use lowers students\' academic performance'
            ],
            correctAnswer: 3,
            explanation: 'A scoring claim takes a specific, defensible position on the effect asked about. The other statements describe the topic or give general advice without saying whether caffeine helps or hurts performance.'
          },
          {
            question: 'A student uses Source 2 to argue that evening caffeine causes poorer sleep. What is the main weakness of relying on that source for a causal claim?',
            options: [
              'Its sample of 1,200 students is too small to analyze',
              'It is correlational, so a third variable may explain both',
              'A correlation of −.31 shows that caffeine improves sleep',
              'It measured college students instead of high schoolers'
            ],
            correctAnswer: 1,
            explanation: 'A survey correlation cannot establish cause; for example, heavy homework loads could lead to both evening caffeine and later bedtimes. A negative r means more caffeine goes with less sleep, and the sample was high school students.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p7-s7-synthesis',
      type: 'text' as const,
      content: `## Synthesis: from one neuron to a night's sleep

| Level | Big idea | Key terms | Typical exam cue |
|---|---|---|---|
| **Neuron** (Part 1) | Neurons fire all-or-none when input passes threshold | Dendrite, axon, myelin, glia, resting potential, depolarization, refractory period, reflex arc; MS, myasthenia gravis | "fires at the same strength," "reacts before feeling pain" |
| **Synapse** (Part 2) | Neurotransmitters excite or inhibit; drugs change the message | Reuptake; the eight neurotransmitters; agonist, antagonist, reuptake inhibitor; tolerance, withdrawal, addiction | "blocks reabsorption," "mimics," "needs more for the same effect" |
| **Systems** (Part 3) | Fast nerves and slow hormones work together | CNS, PNS, somatic, autonomic, sympathetic, parasympathetic; pituitary; adrenaline, leptin, ghrelin, melatonin, oxytocin | "heart races," "feels full," "voluntary vs. involuntary" |
| **Brain structures** (Part 4) | Functions map, roughly, from survival (bottom) to planning (front) | Medulla, RAS, reward center, cerebellum, limbic system, lobes, motor and somatosensory cortex, prefrontal cortex | "after damage to…, the patient can no longer…" |
| **Hemispheres and methods** (Part 5) | Hemispheres specialize; the brain rewires; methods differ in what they can show | Corpus callosum, split brain, contralateral, Broca's, Wernicke's, aphasia, plasticity, EEG, fMRI, lesioning, case study | "left visual field," "fluent but meaningless," "best method to measure timing" |
| **Sleep** (Part 6) | Sleep is an active, cycling state of consciousness | Circadian rhythm, NREM 1–3, REM, REM rebound, hypnagogic sensations, restoration, consolidation, activation-synthesis, five disorders | "eyes darting," "acts out dreams," "jet lag" |

### One chain that connects everything

A student stays up late on a phone. Bright light delays **melatonin** and shifts the **circadian rhythm**. Cut short in the morning, the night loses mostly **REM** sleep, which shows up as **REM rebound** on the weekend. Tired the next day, the student drinks coffee, a **stimulant**, and over weeks develops **tolerance**. In class, a slower **prefrontal cortex** (executive functioning) and less **memory consolidation** make learning harder. Every piece of that chain is on the AP exam.`
    },
    {
      id: 'biological-bases-brain-p7-s8-integrated',
      type: 'multiple-choice' as const,
      content: `**Integrated Review** 🔬`,
      exercise: {
        questions: [
          {
            question: 'A new anti-anxiety medication works by making the brain\'s main inhibitory neurotransmitter more effective. Which side effect would you most expect?',
            options: [
              'Racing heart and widened pupils',
              'Hallucinations and distorted perceptions',
              'Tremors from reduced dopamine signaling',
              'Drowsiness and slower reaction times'
            ],
            correctAnswer: 3,
            explanation: 'Strengthening GABA reduces neural firing broadly, which calms anxiety but also causes drowsiness and slower reactions. A racing heart reflects sympathetic arousal, the opposite effect.'
          },
          {
            question: 'After a stroke, a patient cannot feel touch on his right hand, although he can still move it normally. Where is the damage most likely?',
            options: [
              'Left parietal lobe',
              'Right parietal lobe',
              'Left frontal lobe',
              'Right occipital lobe'
            ],
            correctAnswer: 0,
            explanation: 'Touch is processed in the somatosensory cortex of the parietal lobe, and the right hand is served by the left hemisphere. Intact movement shows the motor cortex in the frontal lobe was spared.'
          },
          {
            question: 'A night-shift nurse sleeps during the day in a sunny bedroom and reports poor sleep. Which change would best support her sleep?',
            options: [
              'Bright lamps in the bedroom to keep her circadian rhythm alert',
              'A large meal before bed to lower her ghrelin levels',
              'Blackout curtains that keep the bedroom dark all day',
              'Short naps that avoid REM so she wakes feeling rested'
            ],
            correctAnswer: 2,
            explanation: 'Darkness lets melatonin rise and signals the body clock that it is time to sleep, helping a shifted schedule. Bright light suppresses melatonin, and ghrelin signals hunger rather than sleep.'
          }
        ]
      }
    }
  ]
}
