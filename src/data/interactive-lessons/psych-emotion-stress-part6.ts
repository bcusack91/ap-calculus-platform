export const psychEmotionPart6Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot6-s1-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Applying Emotion & Stress Concepts**

This workshop integrates Parts 1-5: the order of body and mind in emotion, broaden-and-build, universality and display rules, stressors and health, the GAS and tend-and-befriend, and coping and positive psychology. AP questions often combine several concepts in one scenario, and the Article Analysis Question (AAQ) asks you to analyze a study.

### Problem-Solving Framework

| Step | Question to ask |
|------|----------------|
| **1. Order the emotion** | What came first: the body, the thought, or both at once? Was a cognitive label needed? |
| **2. Identify the emotion component** | Is this physiological, behavioral (expressive), or cognitive? |
| **3. Identify the stressor type** | Traumatic stressor, daily hassle, or ACE? Eustress or distress? |
| **4. Identify the stress response** | GAS phase? Fight-flight-freeze? Tend-and-befriend? |
| **5. Identify the coping strategy** | Problem-focused or emotion-focused? |
| **6. Evaluate health implications** | Hypertension, headaches, immune suppression? Positive-psychology protective factors? |

### Quick Reference: Ordering Body and Mind

| Idea | First event | Key phrase |
|------|------------|-----------|
| **Body first** | Body reacts first | "I'm trembling, so I must be scared" |
| **Simultaneous** | Body AND feeling at once | "Both at the same time" |
| **Cognitive label required** | Arousal, then a label | "Why is my heart racing? It must be because of X" |
| **Appraisal first** | A quick judgment of the situation | "That's dangerous → now I feel scared" |
      `
    },
    {
      id: 'emot6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maria is stuck in traffic, her heart is pounding, she grips the wheel and clenches her jaw, and she thinks, "I\'m going to be late, and my boss will be furious." She then calls a coworker to cover for her and plays calming music. How many distinct concepts from this unit are illustrated?',
            options: [
              'Three: one emotion idea, one stressor type, and one coping method',
              'Four: a physiological, a behavioral, and a cognitive response, plus one coping type',
              'Six: a daily hassle, three emotion components, and two coping strategies',
              'Five: a daily hassle, three emotion components, and one coping strategy'
            ],
            correctAnswer: 2,
            explanation: 'Traffic is a daily hassle; the pounding heart, clenched jaw, and worried thought are the physiological, behavioral, and cognitive components; calling a coworker is problem-focused coping, and calming music is emotion-focused coping.'
          },
          {
            question: 'A man walking alone at night hears footsteps behind him. If a quick cognitive appraisal must come first, which sequence would occur?',
            options: [
              'His heart races → he feels afraid → he then evaluates the danger',
              'He feels afraid and his heart races at once, before any thought',
              'He judges the sound a threat → feels fear → body responds',
              'His heart races → he labels the arousal as fear from the dark setting'
            ],
            correctAnswer: 2,
            explanation: 'An appraisal-first sequence starts with judging the situation ("that could be a threat"), and the fear and bodily response follow. If he judged the footsteps harmless, he would not feel fear at all.'
          }
        ]
      }
    },
    {
      id: 'emot6-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Complex Scenario Analysis

#### Scenario 1 — The Swaying Bridge

*In a classic field study, a woman interviewed men who had just crossed either a high, swaying suspension bridge or a low, stable bridge, and gave each her phone number. Men from the swaying bridge were more likely to call her afterward.*

| Idea | Interpretation |
|------|---------------|
| **Cognitive label required** | The scary bridge produced arousal; the men looked for an explanation and labeled it as attraction to the woman |
| **Body first** | The racing heart itself was felt as excitement |
| **Simultaneous** | Seeing the woman produced the arousal and the attraction at once |

**AP takeaway:** When the **same arousal** gets **different emotional labels** depending on the setting, the evidence supports the view that a cognitive label is required.

#### Scenario 2 — GAS in Action

*A nurse works 12-hour shifts during a disease outbreak.*

| Phase | What happens |
|-------|-------------|
| **Alarm (days 1-3)** | Adrenaline surge, heightened alertness, fight-flight-freeze mobilization |
| **Resistance (weeks 1-8)** | Appears to function normally while confronting the stress; resources are being used up |
| **Exhaustion (months 3+)** | Resources spent; susceptibility to illness peaks, and she catches the virus despite precautions |

#### Scenario 3 — Practice AAQ Study

*This practice study is invented for this lesson; it is not a real published study.*

**Hypothesis:** Students who keep a gratitude journal will report higher well-being than students who keep a neutral journal.

**Method:** 120 volunteers from introductory psychology classes at one large public university were randomly assigned to write, each night for three weeks, either three things they were grateful for (gratitude group) or three things that happened that day (neutral group). Well-being was measured as the total score (10 to 50) on a 10-item life-satisfaction questionnaire completed before and after the three weeks. Students gave informed consent, could stop at any time, and were debriefed at the end.

**Results:** Well-being rose by an average of 4.1 points in the gratitude group and 0.6 points in the neutral group; the difference was statistically significant.

| AAQ task | Model answer |
|---------|-------------|
| **Research method** | Experiment: participants were randomly assigned to the gratitude or neutral condition |
| **Operational definition** | Well-being = total score (10 to 50) on a 10-item life-satisfaction questionnaire |
| **Statistic** | The gratitude group's mean gain (4.1) was much larger than the neutral group's (0.6), and the difference was statistically significant, so it is unlikely to be due to chance alone |
| **Ethical guideline** | Informed consent: students agreed to take part and were told they could stop at any time. (Debriefing is another choice.) |
| **Generalizability** | Limited: all participants were volunteers from psychology classes at one university |
| **Support or refute** | Supports the hypothesis, because the gratitude group's well-being rose more than the neutral group's |
      `
    },
    {
      id: 'emot6-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'In the bridge study, the men explained their bridge-caused arousal as attraction. That fits the view that emotion requires a cognitive _____.',
            answer: 'label',
            acceptableAnswers: ['labels', 'labeling', 'interpretation'],
            explanation: 'The cognitive-label view says arousal becomes a specific emotion once it is interpreted; the setting supplied the label "attraction."'
          },
          {
            question: 'In the practice AAQ study, students were placed in the gratitude or neutral group by random _____.',
            answer: 'assignment',
            acceptableAnswers: ['assigning', 'allocation'],
            explanation: 'Random assignment to conditions is what makes the study an experiment.'
          },
          {
            question: 'Selye\'s three GAS phases in order are alarm, resistance, and _____.',
            answer: 'exhaustion',
            acceptableAnswers: ['exhaustion phase', 'exhaustion stage'],
            explanation: 'In exhaustion, resources are spent and susceptibility to illness is greatest.'
          }
        ]
      }
    },
    {
      id: 'emot6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After a car accident, your heart races and you feel fear at the exact same moment. This fits the _____ view',
            options: ['body-first', 'simultaneous', 'cognitive-label', 'appraisal-first']
          },
          {
            label: 'A student makes a study plan and gets a tutor after failing a test. This is _____ coping',
            options: ['problem-focused', 'emotion-focused', 'helpless', 'external']
          },
          {
            label: 'Months of caregiving stress leave a man with frequently high blood pressure. This stress-linked problem is called _____',
            options: ['hypertension', 'immune suppression', 'eustress', 'learned helplessness']
          }
        ],
        correctAnswers: ['simultaneous', 'problem-focused', 'hypertension'],
        hint1: 'Arousal and feeling at the same moment.',
        hint2: 'Directly changing the situation.',
        hint3: 'Chronically high blood pressure.',
        explanation: 'Arousal and fear at the same moment fits the simultaneous view. Making a study plan changes the situation, so it is problem-focused coping. Chronically high blood pressure is hypertension.'
      }
    },
    {
      id: 'emot6-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"The body-first and cognitive-label views are identical"** — Both start with arousal, but in the body-first view the bodily reaction itself becomes the feeling, while the cognitive-label view says arousal must be interpreted before it becomes a specific emotion.
- **"Labeling arousal from the setting means the emotion is fake"** — The emotion is real; the label is simply drawn from context, sometimes from the wrong source.
- **"Problem-focused coping is always the answer"** — For uncontrollable stressors, emotion-focused coping is more adaptive.

### AP Problem-Solving Checklist
When analyzing an emotion or stress scenario on the exam:

1. **Is there a sequence?** → Body first, both at once, arousal + label, or appraisal first?
2. **Is arousal labeled from the setting?** → The cognitive-label view
3. **Is there a stressor?** → Traumatic stressor or daily hassle? Eustress or distress?
4. **Is the body responding?** → Sympathetic (fight-flight-freeze) or parasympathetic (rest and digest)?
5. **Is there a time progression?** → GAS: alarm → resistance → exhaustion
6. **Is the person coping?** → Problem-focused (changing the situation) or emotion-focused (managing feelings)?
7. **Is there a health impact?** → Hypertension, headaches, immune suppression

### Free-Response Formats
- **AAQ (7 points, 6 parts):** method, operational definition, statistic, ethical guideline and how it was applied, generalizability with evidence, and how a finding supports or refutes the hypothesis.
- **EBQ (7 points, 3 parts):** a defensible claim, then evidence from one source explained with a psychological concept, then evidence from a **different** source explained with a **different** concept. Cite as "(Source 1)".
      `
    },
    {
      id: 'emot6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the bridge study, men who crossed a frightening suspension bridge were more likely to call the same woman afterward than men who crossed a stable bridge. This best supports the idea that:',
            options: [
              'Fear and attraction arose at once, independent of each other',
              'Arousal from the height was interpreted as attraction to her',
              'The men judged the bridge romantic before any arousal began',
              'Facial expressions on the bridge caused the attraction directly'
            ],
            correctAnswer: 1,
            explanation: 'Both groups met the same woman, but only the scary-bridge group had extra arousal. Those men appear to have interpreted that arousal as attraction, which supports the view that a cognitive label shapes the emotion.'
          },
          {
            question: 'An EBQ asks for an argument about whether stress harms physical health. A student uses a source on caregivers\' slower wound healing in Part B, explained with immune suppression. Which plan for Part C best meets the EBQ requirements?',
            options: [
              'The caregiver source again, explained with hypertension',
              'A source on blood pressure, explained with hypertension',
              'A source on blood pressure, explained with immune suppression',
              'No source, with a personal story about a stressful week'
            ],
            correctAnswer: 1,
            explanation: 'Part C needs evidence from a different source and a different psychological concept from Part B. A blood-pressure source explained with hypertension changes both the source and the concept.'
          }
        ]
      }
    }
  ]
}
