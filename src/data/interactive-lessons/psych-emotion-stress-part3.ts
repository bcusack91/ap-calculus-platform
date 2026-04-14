export const psychEmotionPart3Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot3-s1-intro',
      type: 'text' as const,
      content: `
## Stress & Health

**Part 3 of 7 — Stressors, Personality, and Health**

Stress is not just "feeling overwhelmed" — it's a measurable psychological and physiological response with real health consequences. The AP exam tests your understanding of different types of stressors, personality factors that affect stress responses, and the connection between stress and physical health.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Stress** | The process by which we perceive and respond to events (stressors) that we appraise as threatening or challenging |
| **Stressor** | Any event or situation that triggers a stress response |
| **Eustress** | Positive stress that motivates and energizes (e.g., a wedding, a promotion) |
| **Distress** | Negative stress that overwhelms and damages health (e.g., job loss, chronic illness) |
| **Health psychology** | A subfield that studies how psychological factors affect health, illness, and health-related behaviors |

### Types of Stressors

| Type | Time frame | Examples | Impact |
|------|-----------|----------|--------|
| **Catastrophes** | Sudden, large-scale | Earthquakes, pandemics, terrorist attacks | Affect large groups; can cause PTSD |
| **Significant life changes** | Medium-term | Death of a spouse, divorce, job loss, retirement | Measured by Holmes and Rahe SRRS |
| **Daily hassles** | Ongoing, small | Traffic, deadlines, arguments, lost keys | Research shows these are the BEST predictor of day-to-day health problems |

### Personality Types and Stress

| Type | Characteristics | Health risk |
|------|----------------|-------------|
| **Type A** | Competitive, impatient, hostile, time-urgent, aggressive | Higher risk of coronary heart disease (specifically the HOSTILITY component) |
| **Type B** | Relaxed, easygoing, patient, non-competitive | Lower health risk from stress |
| **Type C** | Suppresses emotions, avoids conflict, passive | Some research links to cancer susceptibility (controversial) |

### Real-World Example

A student's daily hassles (alarm didn't go off, traffic jam, cold coffee, late to class) may predict her health better than the "big" stressor of her parents' divorce. Research consistently shows that the accumulation of daily hassles has a stronger correlation with health problems than major life events.
      `
    },
    {
      id: 'emot3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Research on stress and health has consistently found that the BEST predictor of day-to-day health problems is:',
            options: [
              'Catastrophic events like natural disasters',
              'Major life changes on the Holmes-Rahe scale',
              'The accumulation of daily hassles (traffic, deadlines, minor conflicts)',
              'Type B personality characteristics'
            ],
            correctAnswer: 2,
            explanation: 'While catastrophes and major life changes are significant stressors, research consistently shows that the accumulation of DAILY HASSLES is the best predictor of everyday health problems. This is because daily hassles are chronic and ongoing — their effects compound over time. The AP exam frequently tests this counterintuitive finding.'
          },
          {
            question: 'Research on Type A personality and heart disease found that the SPECIFIC component most strongly linked to coronary heart disease is:',
            options: [
              'Competitiveness — striving to achieve more than others',
              'Time urgency — feeling constantly rushed',
              'Hostility — chronic anger, cynicism, and aggressive responses to frustration',
              'Perfectionism — setting unreasonably high standards'
            ],
            correctAnswer: 2,
            explanation: 'While the original Type A description included competitiveness, time urgency, and hostility, subsequent research by Redford Williams and others found that HOSTILITY is the specific "toxic" component most strongly linked to heart disease. Not all competitive or time-urgent people have elevated cardiac risk — but hostile, chronically angry people do.'
          }
        ]
      }
    },
    {
      id: 'emot3-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Measuring Stress & The Biopsychosocial Model

#### The Holmes and Rahe Social Readjustment Rating Scale (SRRS)

Holmes and Rahe quantified stress by assigning "life change units" (LCUs) to major events:

| Event | LCUs |
|-------|------|
| Death of a spouse | 100 |
| Divorce | 73 |
| Marriage | 50 |
| Job loss | 47 |
| Retirement | 45 |
| Pregnancy | 40 |
| Vacation | 13 |

**Key insight:** BOTH positive and negative events require adjustment → BOTH cause stress. Marriage (50 LCUs) and vacation (13 LCUs) are on the scale because they still require adaptation.

#### The Biopsychosocial Model of Health

| Factor | Influence on health |
|--------|-------------------|
| **Biological** | Genetics, immune function, hormones, brain chemistry |
| **Psychological** | Stress appraisal, coping strategies, personality type, perceived control |
| **Social** | Social support, cultural norms, socioeconomic status, relationships |

This model emphasizes that health and illness result from the INTERACTION of all three factors — not just one. A biologically vulnerable person (genetics) with poor coping strategies (psychological) and no social support (social) is at the highest risk.

#### Stress Appraisal: Why the Same Event Affects People Differently

| Step | Appraisal | Question asked |
|------|-----------|---------------|
| **Primary appraisal** | Is this event threatening, challenging, or irrelevant? | "Is this a problem for me?" |
| **Secondary appraisal** | Do I have the resources to cope? | "Can I handle this?" |

A job promotion can be appraised as exciting (challenge = eustress) or terrifying (threat = distress) depending on the person's secondary appraisal of their resources.
      `
    },
    {
      id: 'emot3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) The specific component of Type A personality most linked to heart disease is ___. (one word)

      2) Positive stress that motivates and energizes is called ___. (one word)

      3) Holmes and Rahe measured stress using the Social Readjustment Rating ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hostility', 'eustress', 'Scale'],
        hint1: 'Chronic anger and cynicism — the "toxic" part of Type A',
        hint2: 'Eu- (Greek for "good") + stress = positive stress',
        hint3: 'SRRS — the last S stands for ___',
        explanation: 'Expected answers: hostility (the specific toxic component of Type A personality most associated with coronary heart disease), eustress (positive, motivating stress — eu = good in Greek), and Scale (the SRRS = Social Readjustment Rating Scale, which assigns life change units to stressful events).'
      }
    },
    {
      id: 'emot3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Traffic jams, lost keys, and late deadlines are examples of ___',
            options: ['catastrophes', 'significant life changes', 'daily hassles', 'eustress']
          },
          {
            label: 'The model that says health results from the interaction of biological, psychological, and social factors is the ___',
            options: ['biomedical model', 'biopsychosocial model', 'medical model', 'cognitive model']
          },
          {
            label: 'A relaxed, easygoing, patient person with lower stress-related health risk has ___ personality',
            options: ['Type A', 'Type B', 'Type C', 'Type D']
          }
        ],
        correctAnswers: ['daily hassles', 'biopsychosocial model', 'Type B'],
        hint1: 'Small, ongoing, everyday stressors.',
        hint2: 'Bio + psycho + social = three factors interact.',
        hint3: 'The opposite of competitive, hostile Type A.',
        explanation: 'Traffic, lost keys, deadlines = daily hassles (chronic, small stressors that are the best predictor of health problems). The biopsychosocial model integrates biological, psychological, and social factors. Type B personality = relaxed, easygoing, lower stress-related health risk.'
      }
    },
    {
      id: 'emot3-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Only negative events cause stress"** — BOTH positive (marriage, promotion) and negative (divorce, job loss) events require adjustment and cause stress. The Holmes-Rahe scale includes positive events.
- **"Type A personality = heart disease"** — The WHOLE Type A profile doesn't predict heart disease. Only the HOSTILITY component (chronic anger, cynicism) is the key predictor.
- **"Major life events are the biggest health threat"** — Counterintuitively, daily hassles are actually the BEST predictor of day-to-day health problems because they are chronic and cumulative.
- **"Stress is always bad"** — Eustress (positive stress) can enhance performance and motivation. The Yerkes-Dodson law shows moderate arousal produces optimal performance.

### AP Strategy Moves
- **Daily hassles > major life events** for predicting health. The AP exam loves this counterintuitive finding.
- **Type A → hostility → heart disease.** Know the specific connection: not ALL of Type A, just the hostility component.
- **Holmes-Rahe SRRS:** Know that it measures life CHANGES (both positive and negative), not just negative events.
- **Biopsychosocial model** is the modern framework for understanding health — it replaces the purely biomedical model. The AP exam may ask you to apply it.
- **Primary appraisal** = "Is this threatening?" **Secondary appraisal** = "Can I cope?" Know both.
      `
    },
    {
      id: 'emot3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two employees both receive a surprise promotion. Employee A feels excited and energized, while Employee B feels overwhelmed and anxious. The difference in their reactions is BEST explained by:',
            options: [
              'Employee A has Type A personality and Employee B has Type B',
              'They differ in their cognitive appraisal — Employee A appraised the promotion as a challenge (eustress), while Employee B appraised it as a threat (distress)',
              'Employee A is biologically less sensitive to stress hormones',
              'Only negative events can cause genuine stress responses'
            ],
            correctAnswer: 1,
            explanation: 'The same event can be appraised differently by different people. Employee A\'s primary appraisal = "this is exciting" (challenge) and secondary appraisal = "I can handle this." Employee B\'s primary appraisal = "this is overwhelming" (threat) and secondary appraisal = "I don\'t have the resources to cope." This is exactly what Lazarus\'s cognitive appraisal model predicts — appraisal determines the stress response.'
          },
          {
            question: 'A researcher wants to predict which college students will visit the health center most frequently during the semester. Based on stress research, the BEST predictor would be:',
            options: [
              'Whether they experienced a catastrophic event in the past year',
              'Their score on the Holmes-Rahe SRRS (major life changes)',
              'Their frequency and severity of daily hassles (roommate conflicts, academic pressure, financial worries)',
              'Whether they have Type A personality'
            ],
            correctAnswer: 2,
            explanation: 'Research consistently shows that daily hassles are the best predictor of everyday health problems like headaches, colds, and health center visits. Major life events (SRRS) predict health over longer periods, but for day-to-day health, chronic daily hassles have the strongest correlation. This is one of the most commonly tested findings in the stress unit.'
          }
        ]
      }
    }
  ]
}
