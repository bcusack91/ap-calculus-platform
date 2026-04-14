export const psychEmotionPart6Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot6-s1-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Applying Emotion & Stress Concepts**

This workshop integrates all concepts from Parts 1-5: emotion theories (James-Lange, Cannon-Bard, Schachter-Singer, Lazarus), emotion components, stress/stressors, GAS, fight-or-flight, coping strategies, and psychoneuroimmunology. AP questions often combine multiple concepts in a single scenario.

### Problem-Solving Framework

| Step | Question to ask |
|------|----------------|
| **1. Identify the emotion theory** | What came first — body, thought, both, or arousal + label? |
| **2. Identify the emotion component** | Is this physiological, behavioral, or cognitive? |
| **3. Identify the stressor type** | Catastrophe, major life change, or daily hassle? |
| **4. Identify the stress response** | GAS stage? Fight-or-flight? Tend-and-befriend? |
| **5. Identify the coping strategy** | Problem-focused or emotion-focused? |
| **6. Evaluate health implications** | Role of cortisol, immune function, perceived control? |

### Quick Reference: The Four Emotion Theories

| Theory | First event | Key phrase |
|--------|------------|-----------|
| **James-Lange** | Body reacts first | "I'm trembling, so I must be scared" |
| **Cannon-Bard** | Body AND emotion simultaneously | "Both at the same time" |
| **Schachter-Singer** | Arousal + cognitive label | "Why is my heart racing? Oh, it must be because of X" |
| **Lazarus** | Cognitive appraisal first | "I think this is dangerous → now I feel scared" |
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
            question: 'Maria is stuck in traffic (daily hassle), her heart is pounding (physiological), she\'s gripping the steering wheel and clenching her jaw (behavioral), and she thinks, "I\'m going to be late and my boss will be furious" (cognitive). She then calls a coworker to cover for her (problem-focused) and plays calming music (emotion-focused). How many distinct psychological concepts from this unit are illustrated?',
            options: [
              'Three — one emotion theory, one stressor type, and one coping method',
              'Four — a physiological response, a behavioral response, a cognitive response, and one coping type',
              'Six — daily hassle stressor, three emotion components (physiological, behavioral, cognitive), and two coping strategies (problem-focused and emotion-focused)',
              'Two — stress and coping'
            ],
            correctAnswer: 2,
            explanation: 'Six concepts are present: (1) daily hassle = stressor type, (2) heart pounding = physiological component, (3) clenching jaw = behavioral component, (4) "I\'m going to be late" = cognitive component, (5) calling coworker = problem-focused coping, (6) playing music = emotion-focused coping. The AP exam rewards your ability to identify multiple concepts operating simultaneously in a scenario.'
          },
          {
            question: 'A man walking alone at night hears footsteps behind him. According to the Lazarus cognitive appraisal theory, the CORRECT sequence would be:',
            options: [
              'His heart races → he feels afraid → he evaluates the danger',
              'He simultaneously feels afraid and his heart races',
              'He evaluates the footsteps as potentially threatening → then he feels fear and his body responds',
              'His heart races → he labels the arousal as fear based on the dark setting'
            ],
            correctAnswer: 2,
            explanation: 'Lazarus\'s cognitive appraisal theory says thought comes FIRST. The man hears footsteps → he cognitively evaluates: "Am I in danger? Is this a threat?" → only AFTER this appraisal does he feel fear and experience physiological arousal. If he appraises the footsteps as non-threatening ("probably just another pedestrian"), he wouldn\'t feel fear at all — proving that the appraisal determines the emotion.'
          }
        ]
      }
    },
    {
      id: 'emot6-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Complex Scenario Analysis

#### Scenario 1 — The Misattribution Trap

*On a first date, Alex and Jordan walk across a narrow, swaying suspension bridge. By the end, both report feeling intensely attracted to each other. Were they actually attracted, or did they misattribute their bridge-induced arousal?*

| Theory | Interpretation |
|--------|---------------|
| **Schachter-Singer** | Their bodies were aroused by the bridge (heart racing, adrenaline) → they looked for an explanation → "I must be excited because I'm attracted to this person" → misattribution of arousal |
| **James-Lange** | Their bodies responded → the bodily sensation was interpreted as attraction |
| **Lazarus** | They already appraised the date context → the appraisal drove the emotion |

**AP takeaway:** "Misattribution of arousal" is a Schachter-Singer concept. The bridge study (Dutton & Aron) is a classic AP example.

#### Scenario 2 — GAS in Action

*A nurse works 12-hour shifts during a pandemic.*

| Phase | What happens |
|-------|-------------|
| **Alarm (Day 1-3)** | Adrenaline surge, heightened alertness, body mobilizes |
| **Resistance (Weeks 1-8)** | Appears to function normally, adapts to the stress, but cortisol remains elevated |
| **Exhaustion (Months 3+)** | Burnout, weakened immune system, catches COVID despite precautions, emotional collapse |

#### Scenario 3 — Coping Classification

| Behavior | Classification |
|---------|---------------|
| Making a budget after job loss | Problem-focused |
| Talking to a therapist about anxiety | Emotion-focused |
| Joining a support group | Both — emotional support AND informational/problem-solving |
| Exercising to relieve stress | Emotion-focused (managing the feeling) |
| Moving away from a noisy neighbor | Problem-focused (changing the situation) |
      `
    },
    {
      id: 'emot6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) When you mistake bridge-induced arousal for romantic attraction, this is called ___ of arousal. (one word, starts with M)

      2) The emotion theory that says thought/appraisal comes FIRST is ___'s cognitive appraisal theory. (last name)

      3) Selye's three GAS stages in order: Alarm, Resistance, ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['misattribution', 'Lazarus', 'Exhaustion'],
        hint1: 'Mis + attribution = incorrectly attributing your arousal to the wrong cause',
        hint2: 'He debated Zajonc about whether cognition must precede emotion',
        hint3: 'The body\'s resources are completely depleted in this final stage',
        explanation: 'Expected answers: misattribution (incorrectly attributing the cause of your arousal — a Schachter-Singer concept), Lazarus (cognitive appraisal theory — thought precedes emotion), and Exhaustion (the third GAS stage where body resources are depleted).'
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
            label: 'After a car accident, your heart races and you feel fear at the exact same moment. This is ___',
            options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Lazarus']
          },
          {
            label: 'A student makes a study plan and gets a tutor after failing a test. This is ___ coping',
            options: ['problem-focused', 'emotion-focused', 'avoidant']
          },
          {
            label: 'A researcher studying how exam stress weakens immune function is working in the field of ___',
            options: ['clinical psychology', 'psychoneuroimmunology', 'behavioral neuroscience', 'social psychology']
          }
        ],
        correctAnswers: ['Cannon-Bard', 'problem-focused', 'psychoneuroimmunology'],
        hint1: 'Simultaneous arousal and emotion = Cannon-Bard.',
        hint2: 'Directly changing the situation = problem-focused.',
        hint3: 'Psycho + neuro + immunology = stress affects immunity.',
        explanation: 'Simultaneous body response and emotion = Cannon-Bard. Making a study plan = problem-focused (changing the situation). Stress weakening immunity = psychoneuroimmunology.'
      }
    },
    {
      id: 'emot6-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Schachter-Singer and James-Lange are identical"** — James-Lange: specific body reaction → specific emotion. Schachter-Singer: AMBIGUOUS arousal → cognitive label based on context. The key difference is whether the arousal is specific or needs interpretation.
- **"Misattribution of arousal proves emotions are fake"** — No, it proves that the cognitive label can be influenced by context. The emotion is real — it's just attributed to the wrong source.
- **"Problem-focused coping is always the answer"** — For uncontrollable stressors, emotion-focused coping is more adaptive. The "best" strategy depends on the situation.

### AP Problem-Solving Checklist
When analyzing an emotion/stress scenario on the exam:

1. **Is there a sequence?** → Which emotion theory: body first (JL), both at once (CB), arousal + label (SS), thinking first (L)?
2. **Is arousal ambiguous?** → Schachter-Singer is the answer
3. **Is there a stressor?** → What type: catastrophe, life change, or daily hassle?
4. **Is the body responding?** → Sympathetic (fight-or-flight) or parasympathetic (rest-and-digest)?
5. **Is there a time progression?** → GAS: alarm → resistance → exhaustion?
6. **Is the person coping?** → Problem-focused (changing situation) or emotion-focused (managing feelings)?
7. **Is there a health impact?** → Psychoneuroimmunology: stress → cortisol → immune suppression
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
            question: 'In the classic Dutton & Aron bridge study, men who crossed a fear-inducing suspension bridge rated a female experimenter as more attractive than men who crossed a stable bridge. Both groups experienced the same experimenter. This best supports:',
            options: [
              'Cannon-Bard — fear and attraction are simultaneous emotions',
              'James-Lange — their bodies reacted to the bridge and they interpreted the arousal as attraction',
              'Schachter-Singer — the men misattributed their bridge-induced arousal (fear) to the presence of the attractive experimenter (attraction)',
              'Lazarus — they cognitively appraised the bridge as romantic'
            ],
            correctAnswer: 2,
            explanation: 'The bridge study is THE classic example of Schachter-Singer\'s misattribution of arousal. Both groups had the same experimenter, but the suspension bridge group had extra physiological arousal (from the scary bridge). They misattributed that arousal to attraction rather than fear. This only works if emotion = arousal + label (Schachter-Singer), because the SAME arousal was labeled differently based on context.'
          },
          {
            question: 'A free-response question asks: "Explain how a person\'s response to losing a job can be understood through the biopsychosocial model." The strongest response would include:',
            options: [
              'Only the biological effects of stress hormones on the body',
              'Only the psychological impact of lowered self-esteem',
              'Biological factors (cortisol, immune changes), psychological factors (coping style, perceived control, explanatory style), AND social factors (social support network, socioeconomic status)',
              'Only the social impact of losing workplace relationships'
            ],
            correctAnswer: 2,
            explanation: 'The biopsychosocial model requires ALL THREE levels: (1) Biological — stress hormones (cortisol), potential immune suppression, sleep disruption; (2) Psychological — coping strategies (problem-focused vs. emotion-focused), perceived control, explanatory style (optimistic vs. pessimistic); (3) Social — quality of social support network, financial resources, cultural attitudes toward unemployment. A strong FRQ answer addresses all three domains with specific examples.'
          }
        ]
      }
    }
  ]
}
