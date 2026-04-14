export const psychEmotionPart7Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Integrating Emotion & Stress for the AP Exam**

This final part brings together ALL concepts from the Emotion & Stress unit. Emotion theories, components of emotion, stressors, stress responses, and coping strategies frequently appear together on the AP exam — often in a single free-response question.

### Master Integration Table

| Concept | Theorist/Key term | What to remember | Common AP trap |
|---------|-------------------|------------------|----------------|
| **James-Lange** | James, Lange | Body first → then emotion | Confusing with Schachter-Singer (both start with body — but SS adds cognitive label) |
| **Cannon-Bard** | Cannon, Bard | Simultaneous body + emotion | Thinking this means the body doesn't matter (it does — just simultaneously) |
| **Schachter-Singer** | Schachter, Singer | Arousal + label = emotion | Confusing with James-Lange (SS requires cognitive interpretation of AMBIGUOUS arousal) |
| **Lazarus** | Lazarus | Thought first → then emotion | Confusing with Zajonc (who says some emotions skip cognition) |
| **Ekman** | Ekman | 6 universal emotions | Thinking these are the ONLY emotions (they're the only UNIVERSAL ones) |
| **GAS** | Selye | Alarm → Resistance → Exhaustion | Thinking exhaustion = just tiredness (it means immune system failure) |
| **Type A** | Friedman & Rosenman | Hostility → heart disease | Thinking ALL Type A traits cause heart disease (only hostility) |
| **Coping** | Lazarus & Folkman | Problem-focused vs. emotion-focused | Thinking problem-focused is always better (depends on controllability) |
| **Learned helplessness** | Seligman | No control → giving up | Thinking it's laziness (it's a conditioned response) |
| **Social support** | Cohen et al. | Buffers stress impact | Thinking it prevents stress (it buffers, doesn't prevent) |

### Why This Matters

The Motivation, Emotion, and Stress unit accounts for approximately 6-8% of the AP Psychology exam. Questions in this unit are heavily scenario-based — you must be able to apply theories to real-world situations, not just recite definitions.
      `
    },
    {
      id: 'emot7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question describes a college student whose roommate plays loud music every night. The student\'s heart races (physiology), she clenches her fists (behavioral), she thinks "this is unacceptable" (cognitive), she confronts the roommate about quiet hours (coping), and her grades drop because she can\'t sleep (health). Which set of terms CORRECTLY identifies ALL the concepts illustrated?',
            options: [
              'Cannon-Bard theory, one emotion component, problem-focused coping, daily hassle',
              'Three emotion components (physiological, behavioral, cognitive), problem-focused coping, and a daily hassle stressor affecting health',
              'James-Lange theory, learned helplessness, and emotion-focused coping',
              'Schachter-Singer theory, GAS exhaustion, and social support'
            ],
            correctAnswer: 1,
            explanation: 'Five concepts: (1) Physiological component — heart racing, (2) Behavioral component — clenching fists, (3) Cognitive component — "this is unacceptable," (4) Problem-focused coping — confronting the roommate to change the situation, (5) Daily hassle — the recurring loud music is a chronic, daily stressor that affects health (sleep/grades). Notice that this scenario illustrates concepts from MULTIPLE parts of the unit — exactly how the AP exam works.'
          },
          {
            question: 'Which statement about the relationship between emotion theories is MOST accurate for the AP exam?',
            options: [
              'Only one theory is correct — the AP exam expects you to identify which one',
              'Each theory captures a different aspect of emotional experience, and the AP exam tests your ability to distinguish which theory a specific scenario illustrates',
              'The theories have been disproven by modern neuroscience research',
              'The theories apply only to negative emotions like fear and anger'
            ],
            correctAnswer: 1,
            explanation: 'The AP exam does NOT ask which theory is "correct" — it asks you to identify which theory a given scenario illustrates. James-Lange works well for body-first experiences, Schachter-Singer explains misattribution of arousal, Lazarus explains how reappraisal changes emotion, and Cannon-Bard explains simultaneous reactions. Each captures part of the truth, and you must match scenarios to the right framework.'
          }
        ]
      }
    },
    {
      id: 'emot7-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Cross-Unit Connections

The AP exam loves questions that connect Emotion & Stress to other units:

#### Emotion & Stress + Biological Psychology

| Connection | How they link |
|-----------|-------------|
| **Amygdala** | Processes fear and emotional memories — connects to all emotion theories |
| **Hypothalamus** | Triggers the HPA axis stress response — links emotion to GAS |
| **Autonomic nervous system** | Mediates fight-or-flight (sympathetic) and rest-and-digest (parasympathetic) |
| **Prefrontal cortex** | Involved in cognitive appraisal (Lazarus) and emotion regulation |

#### Emotion & Stress + Learning

| Connection | How they link |
|-----------|-------------|
| **Classical conditioning** | Phobias = conditioned emotional responses (Little Albert) |
| **Operant conditioning** | Learned helplessness = uncontrollable punishment → passive behavior |
| **Observational learning** | Children learn emotional expression and coping by watching parents |

#### Emotion & Stress + Social Psychology

| Connection | How they link |
|-----------|-------------|
| **Social facilitation** | Arousal from others' presence affects performance (Yerkes-Dodson law) |
| **Social support** | Group membership buffers stress |
| **Display rules** | Cultural norms shape emotional expression |

#### Free-Response Scoring Guide

When analyzing an emotion/stress scenario in the FRQ:

**Point 1:** Name the theory or concept correctly
**Point 2:** Define it accurately in your own words
**Point 3:** Apply it to the specific scenario with behavioral evidence
**Point 4:** Explain WHY this evidence matches (connect behavior to definition)
      `
    },
    {
      id: 'emot7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) The emotion theory that explains "misattribution of arousal" (same arousal, different label) is ___. (hyphenated last names)

      2) The three GAS stages in order: Alarm, Resistance, ___. (one word)

      3) The specific Type A component most linked to coronary heart disease is ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Schachter-Singer', 'Exhaustion', 'hostility'],
        hint1: 'Two-factor theory: arousal + label = emotion',
        hint2: 'Body resources depleted → illness → potential organ failure',
        hint3: 'Not competitiveness, not time urgency — the "toxic" component is chronic anger',
        explanation: 'Expected answers: Schachter-Singer (two-factor theory — the only theory that explains how the same arousal can produce different emotions based on cognitive labeling), Exhaustion (the final GAS stage where body resources are depleted and vulnerability to illness increases), and hostility (the specific component of Type A personality most strongly linked to heart disease).'
      }
    },
    {
      id: 'emot7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You appraise a situation as threatening FIRST, then feel fear. This is ___',
            options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Lazarus']
          },
          {
            label: 'The best predictor of day-to-day health problems is ___',
            options: ['catastrophes', 'major life changes', 'daily hassles', 'Type A personality']
          },
          {
            label: 'A patient with terminal illness practices meditation and spends time with family. This is ___ coping',
            options: ['problem-focused', 'emotion-focused', 'avoidance']
          }
        ],
        correctAnswers: ['Lazarus', 'daily hassles', 'emotion-focused'],
        hint1: 'Cognitive appraisal FIRST = Lazarus.',
        hint2: 'Chronic, small, everyday stressors are the strongest predictor.',
        hint3: 'Can\'t change the illness — managing the emotional experience.',
        explanation: 'Thinking/appraising first = Lazarus (cognitive appraisal precedes emotion). Daily hassles = best predictor of everyday health problems (chronic and cumulative). Terminal illness is uncontrollable → emotion-focused coping (meditation, family time) is most adaptive.'
      }
    },
    {
      id: 'emot7-s6-strategy',
      type: 'text' as const,
      content: `
## Final Exam Strategy: Emotion & Stress

### High-Frequency AP Topics (This Unit)
1. **Emotion theory comparison** — Identifying which theory a scenario illustrates (especially James-Lange vs. Schachter-Singer)
2. **Misattribution of arousal** — The bridge study (Dutton & Aron) is a classic
3. **GAS stages** — Alarm, Resistance, Exhaustion
4. **Daily hassles** — Best predictor of health problems (counterintuitive)
5. **Type A hostility** — Only hostility (not all Type A traits) predicts heart disease
6. **Problem-focused vs. emotion-focused coping** — Matching to scenario
7. **Learned helplessness** — Seligman, connection to depression

### Critical Distinctions to Master
- **James-Lange vs. Schachter-Singer:** Both body-first, but JL = specific body → specific emotion; SS = ambiguous arousal + label from context
- **Problem-focused vs. emotion-focused:** PF = change the situation; EF = change how you feel
- **Sympathetic vs. parasympathetic:** Sympathetic = accelerator; parasympathetic = brake
- **Stress vs. stressor:** Stress = response; stressor = the event/situation
- **Eustress vs. distress:** Both are stress, just positive vs. negative

### Free-Response Template
"According to [theory/concept] proposed by [theorist], [definition]. In this scenario, the person is demonstrating [concept] because [specific behavioral evidence]. This is an example of [concept] because [explanation connecting evidence to definition]."
      `
    },
    {
      id: 'emot7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP free-response question asks: "Using TWO theories of emotion, explain how a person might experience fear differently when encountering a bear on a hiking trail." The strongest response would compare:',
            options: [
              'Type A and Type B personality responses to the bear',
              'Problem-focused coping (running away) and emotion-focused coping (deep breathing)',
              'Two distinct theories — for example, James-Lange (body reacts first → "my heart is racing, so I must be afraid") and Lazarus (cognitive appraisal first → "I evaluate this bear as dangerous, which triggers my fear response")',
              'Ekman\'s universal emotions and display rules for showing fear'
            ],
            correctAnswer: 2,
            explanation: 'The question asks for TWO THEORIES OF EMOTION. A strong response picks two theories and shows how they predict DIFFERENT sequences: (1) James-Lange: see bear → heart races → "I must be afraid" (body first). (2) Lazarus: see bear → appraise "dangerous animal" → feel fear (thought first). Notice the same situation (bear) but the order of events differs by theory. This is exactly what the AP exam wants — you demonstrate understanding by showing HOW the theories differ, not just WHAT they say.'
          },
          {
            question: 'A student experiences the following sequence during a semester: (1) Learns she will be failing calculus — heart pounds, can\'t sleep. (2) For the next month, she studies intensely, appears to function normally, but cortisol remains elevated. (3) After the final exam, she collapses with bronchitis and sleeps for three days. This sequence illustrates:',
            options: [
              'The three components of emotion (physiological, behavioral, cognitive)',
              'Selye\'s General Adaptation Syndrome: Alarm (initial shock), Resistance (adapting to ongoing stress), Exhaustion (immune system failure and illness)',
              'Problem-focused coping transitioning to emotion-focused coping',
              'The Lazarus-Zajonc debate about whether cognition precedes emotion'
            ],
            correctAnswer: 1,
            explanation: 'This is a textbook GAS sequence: (1) ALARM — learning about failure triggers sympathetic activation (heart pounds, can\'t sleep). (2) RESISTANCE — she adapts and functions but body is working hard (cortisol elevated). (3) EXHAUSTION — body resources depleted, immune system fails, she gets sick (bronchitis). This is the same pattern Selye identified: prolonged stress → resistance → eventual physical breakdown.'
          }
        ]
      }
    }
  ]
}
