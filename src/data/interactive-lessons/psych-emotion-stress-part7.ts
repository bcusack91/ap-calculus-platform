export const psychEmotionPart7Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Integrating Emotion & Stress for the AP Exam**

This final part brings together the concepts from the Emotion & Stress topic. The order of body and mind in emotion, universality and display rules, stressors, stress responses, coping, and positive psychology often appear together on the AP exam, in multiple-choice scenarios and as concepts you use to explain evidence in an EBQ.

### Master Integration Table

| Concept | What to remember | Common AP trap |
|---------|------------------|----------------|
| **Ordering body and mind** | Succession (body first, or appraisal first), simultaneous, or cognitive label required | Trying to name the theory: names are outside the scope of the exam; describe the sequence |
| **Facial-feedback hypothesis** | Facial expressions influence felt emotion; supports physiology before appraisal | Forgetting that results are mixed |
| **Broaden-and-build** | Positive emotions broaden thinking and build resources; negative emotions narrow them | Thinking negative emotions have no function |
| **Universality and display rules** | Some expressions may be recognized across cultures (mixed results); display rules and elicitors vary by culture, gender, age, and class | Treating expression as a reliable readout of feeling |
| **Eustress vs. distress** | Motivating vs. debilitating stress | Thinking all stress is harmful |
| **Stressors** | Traumatic stressors, daily hassles that build up, ACEs | Overlooking daily hassles |
| **Stress and health** | Hypertension, headaches, immune suppression | Claiming causation from correlational studies |
| **GAS (Selye)** | Alarm (fight-flight-freeze) → resistance → exhaustion | Thinking exhaustion is just tiredness (illness risk peaks there) |
| **Tend-and-befriend** | Caring for others and seeking connection, mostly in women | Treating fight-flight-freeze as the only response |
| **Coping** | Problem-focused vs. emotion-focused | Thinking problem-focused is always better (it depends on controllability) |
| **Learned helplessness** | No control → giving up | Thinking it is laziness |
| **Positive psychology** | Gratitude, signature strengths and six virtues, posttraumatic growth | Thinking it ignores suffering |
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
            question: 'A college student\'s roommate plays loud music every night. The student\'s heart races, she clenches her fists, she thinks "this is unacceptable," she asks the roommate to agree on quiet hours, and her grades drop because she can\'t sleep. Which set of terms correctly identifies the concepts illustrated?',
            options: [
              'Simultaneous emotion, one emotion component, problem-focused coping, and a traumatic stressor',
              'Three emotion components, problem-focused coping, and a daily hassle affecting health',
              'Body-first emotion, learned helplessness, emotion-focused coping, and a daily hassle',
              'Cognitive labeling, the exhaustion phase of the GAS, and tend-and-befriend'
            ],
            correctAnswer: 1,
            explanation: 'The racing heart, clenched fists, and angry thought are the physiological, behavioral, and cognitive components; asking for quiet hours is problem-focused coping; and the nightly music is a daily hassle that affects her sleep and grades.'
          },
          {
            question: 'Which statement about theories of emotion is MOST accurate for the AP exam?',
            options: [
              'Only one theory is correct, and the AP exam expects you to identify which one',
              'Each captures part of emotion; the exam tests the sequences, not the theory names',
              'The theories have been disproven by neuroscience, so the exam no longer covers emotion',
              'The theories apply only to negative emotions such as fear, anger, and disgust'
            ],
            correctAnswer: 1,
            explanation: 'The current AP Psychology framework treats the specific names of emotion theories as outside the scope of the exam. It tests the ideas: physiological and cognitive experiences in succession, simultaneously, or with a required cognitive label.'
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

#### Emotion & Stress + Biological Bases

| Connection | How they link |
|-----------|-------------|
| **Amygdala** | Processes fear and emotional memories |
| **Autonomic nervous system** | Sympathetic division drives fight-flight-freeze; parasympathetic division restores rest and digest |
| **Adrenaline and oxytocin** | Adrenaline mobilizes the alarm reaction; oxytocin is linked to bonding in tend-and-befriend |
| **Prefrontal cortex** | Involved in appraising situations and regulating emotion |

#### Emotion & Stress + Learning

| Connection | How they link |
|-----------|-------------|
| **Classical conditioning** | Phobias = conditioned emotional responses (Little Albert) |
| **Operant conditioning** | Learned helplessness = uncontrollable aversive events → passive behavior |
| **Observational learning** | Children learn emotional expression, display rules, and coping by watching parents |

#### Emotion & Stress + Motivation and Social Psychology

| Connection | How they link |
|-----------|-------------|
| **Arousal theory (Yerkes-Dodson law)** | Moderate arousal aids performance, which helps explain eustress |
| **Locus of control and explanatory style** | Shape whether people cope actively or give up |
| **Display rules** | Cultural norms shape emotional expression |

#### Using These Concepts on the Free-Response Section

| Format | How emotion and stress concepts earn points |
|--------|--------------------------------------------|
| **AAQ (7 points, 6 parts)** | A stress or emotion study is the source. Identify the method, give the operational definition (e.g., well-being = score on a questionnaire), describe a statistic, name an ethical guideline and how it was applied, judge generalizability from the sample, and explain support or refutation |
| **EBQ (7 points, 3 parts)** | Make a defensible claim, then explain evidence from two different sources with two different concepts, such as immune suppression for one source and daily hassles for another |
      `
    },
    {
      id: 'emot7-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'The hypothesis that facial expressions influence the experience of emotion is the facial-_____ hypothesis.',
            answer: 'feedback',
            acceptableAnswers: ['feed-back'],
            explanation: 'The facial-feedback hypothesis supports the idea that physiology comes before appraisal, though research results are mixed.'
          },
          {
            question: 'The three GAS phases in order are alarm, resistance, and _____.',
            answer: 'exhaustion',
            acceptableAnswers: ['exhaustion phase', 'exhaustion stage'],
            explanation: 'Exhaustion is the phase of greatest susceptibility to illness.'
          },
          {
            question: 'Character strengths are classified under six categories of _____, such as wisdom and courage.',
            answer: 'virtues',
            acceptableAnswers: ['virtue'],
            explanation: 'The six virtue categories are wisdom, courage, humanity, justice, temperance, and transcendence.'
          }
        ]
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
            label: 'You judge a situation as threatening FIRST, then feel fear and a racing heart. This fits the _____ view',
            options: ['body-first', 'simultaneous', 'cognitive-label', 'appraisal-first']
          },
          {
            label: 'Small stressors that build up over time and predict everyday colds and headaches are _____',
            options: ['traumatic stressors', 'major life events', 'daily hassles', 'eustress']
          },
          {
            label: 'A patient with an incurable illness practices meditation and spends time with family. This is _____ coping',
            options: ['problem-focused', 'emotion-focused', 'helpless', 'external']
          }
        ],
        correctAnswers: ['appraisal-first', 'daily hassles', 'emotion-focused'],
        hint1: 'A judgment of the situation comes before the feeling.',
        hint2: 'Chronic, small, everyday stressors.',
        hint3: 'The illness cannot be changed, so manage the emotional experience.',
        explanation: 'Judging first, then feeling, is the appraisal-first succession. Daily hassles build up and predict everyday symptoms. With an uncontrollable illness, managing the emotional response is emotion-focused coping.'
      }
    },
    {
      id: 'emot7-s6-strategy',
      type: 'text' as const,
      content: `
## Final Exam Strategy: Emotion & Stress

### High-Frequency AP Topics (This Topic)
1. **Ordering body and mind** — succession, simultaneous, or cognitive label required (no theory names)
2. **Facial feedback and broaden-and-build** — the two emotion ideas the CED names
3. **Universality and display rules** — including within-culture differences
4. **Stress and health** — eustress vs. distress, daily hassles, ACEs, hypertension, headaches, immune suppression
5. **GAS and tend-and-befriend** — alarm, resistance, exhaustion
6. **Problem-focused vs. emotion-focused coping** — matching to the scenario
7. **Positive psychology** — gratitude, signature strengths, six virtues, posttraumatic growth

### Critical Distinctions to Master
- **Body first vs. cognitive label required:** both start with arousal, but the label view says arousal must be interpreted
- **Problem-focused vs. emotion-focused:** change the situation vs. change how you feel
- **Sympathetic vs. parasympathetic:** accelerator vs. brake
- **Stress vs. stressor:** the response vs. the event
- **Eustress vs. distress:** motivating vs. debilitating

### EBQ Sentence Frame
"According to Source 2, [specific evidence]. This supports the claim that [claim] because [psychological concept, e.g., immune suppression] explains [how the evidence connects to the claim]."
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
            question: 'Two hikers see a bear. Hiker A notices his heart pounding and only then feels afraid. Hiker B feels afraid at the very moment her heart starts pounding. Which statement best compares them?',
            options: [
              'A shows a body-first succession; B shows a simultaneous experience',
              'A shows a simultaneous experience; B shows a body-first succession',
              'Both show a cognitive label applied after searching for a reason',
              'Both show a quick appraisal of danger that came before any arousal'
            ],
            correctAnswer: 0,
            explanation: 'For Hiker A the arousal came first and the fear followed, a body-first succession. For Hiker B the arousal and the fear occurred together, the simultaneous view.'
          },
          {
            question: 'A student learns she is failing calculus; her heart pounds and she can\'t sleep. For the next month, she studies intensely and appears to function normally. After the final exam, she comes down with bronchitis and sleeps for three days. This sequence illustrates:',
            options: [
              'The three components of emotion, from physiological to cognitive',
              'Selye\'s general adaptation syndrome, from the alarm phase to exhaustion',
              'Problem-focused coping that later shifts to emotion-focused coping',
              'The broaden-and-build effect of a negative emotion on her thinking'
            ],
            correctAnswer: 1,
            explanation: 'The pounding heart and sleeplessness are the alarm reaction, the month of intense but functional studying is resistance, and getting sick once the stress ends is exhaustion, when susceptibility to illness is greatest.'
          }
        ]
      }
    }
  ]
}
