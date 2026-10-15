export const psychEmotionPart3Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot3-s1-intro',
      type: 'text' as const,
      content: `
## Stress & Health

**Part 3 of 7 — Stressors and Their Effects on Health**

> 🔑 **Key Concept:** Stress raises susceptibility to disorders and disease. It has been linked to **hypertension, headaches, and immune suppression**. Stressors can be experienced as motivating (**eustress**) or debilitating (**distress**), and they range from traumatic events to **daily hassles** that build up over time.

**Health psychology** studies how psychological factors, including stress, affect physical health, illness, and health-related behavior.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Stress** | The process of perceiving and responding to events that we see as threatening or challenging |
| **Stressor** | Any event or situation that triggers a stress response |
| **Eustress** | Stress viewed as motivating: it energizes effort (e.g., training for a race, a new job you want) |
| **Distress** | Stress viewed as debilitating: it overwhelms and harms health (e.g., ongoing conflict at home) |
| **Traumatic stressor** | A severe, often sudden event such as an assault, a disaster, or combat |
| **Daily hassles** | Small, everyday irritations (traffic, lost keys, deadlines) that can **build up over time** |
| **Adverse childhood experiences (ACEs)** | Childhood abuse, neglect, or household dysfunction: sources of stress that can affect a person throughout the lifespan |

### Real-World Example

Two seniors face the same college application season. Jada sees it as a chance to show what she can do; the deadlines energize her (eustress). Marcus feels he can't possibly finish; he sleeps badly and gets headaches (distress). Meanwhile, both deal with daily hassles: a long bus ride, a noisy house, a broken laptop charger. None is a big deal alone, but together they add to the load.
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
            question: 'Which set lists physiological problems that research has linked to stress?',
            options: [
              'Hypertension, headaches, and immune suppression',
              'Improved immunity, lower blood pressure, and deeper sleep',
              'Color blindness, hearing loss, and nearsightedness',
              'Faster wound healing and fewer colds in winter'
            ],
            correctAnswer: 0,
            explanation: 'Stress has been linked to hypertension (high blood pressure), headaches, and immune suppression, which raises susceptibility to illness. It does not improve immunity or speed healing.'
          },
          {
            question: 'A student who is excited about a debate tournament practices harder as the date approaches and performs her best. Her stress is best described as:',
            options: [
              'Distress, since any stressor harms performance',
              'A traumatic stressor that she has adapted to',
              'Eustress, because the stressor is motivating her',
              'A daily hassle that has built up over the season'
            ],
            correctAnswer: 2,
            explanation: 'Eustress is stress viewed as motivating, and it energizes effort. Distress is debilitating; a traumatic stressor is a severe event, and a debate tournament is neither.'
          }
        ]
      }
    },
    {
      id: 'emot3-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: From Stressor to Illness

#### Kinds of Stressors

| Type | What it is | Examples | Health note |
|------|-----------|----------|-------------|
| **Traumatic stressors** | Severe events that threaten safety or life | Assault, natural disaster, combat, a serious accident | Can lead to lasting psychological effects such as PTSD |
| **Daily hassles** | Minor, frequent irritations | Traffic, deadlines, arguments, crowded buses | Individually small, but they **build up over time**; studies find accumulated hassles predict everyday symptoms such as headaches and colds |
| **ACEs** | Stressful or traumatic experiences in childhood | Abuse, neglect, a parent's incarceration or addiction | Linked to health and relationship problems across the lifespan; what counts as an ACE and how it affects people differ across cultures |

#### Same Stressor, Different Stress

Whether a stressor becomes **eustress** or **distress** depends partly on how the person views it:

| Viewed as... | Typical thought | Typical result |
|-------------|----------------|----------------|
| **A challenge** | "This is hard, but I can handle it." | Energized effort (eustress) |
| **A threat** | "This is too much for me." | Worry, poor sleep, physical symptoms (distress) |

#### How Stress Damages Health

| Link | What research shows |
|------|---------------------|
| **Hypertension** | Repeated surges of arousal raise blood pressure; chronic stress is linked to lasting high blood pressure and heart disease |
| **Headaches** | Tension headaches and migraines become more frequent during stressful periods |
| **Immune suppression** | Students show weaker immune responses during exam periods than during breaks, and long-term caregivers' wounds heal more slowly than those of similar non-caregivers |
| **Behavior** | Stressed people often sleep less, exercise less, and smoke or drink more, which harms health further |

These findings are mostly **correlational** or **quasi-experimental**: researchers cannot ethically assign people to years of stress. In some experiments, though, volunteers who reported more stress were more likely to develop a cold after being exposed to a cold virus.

#### The Biopsychosocial View of Health

| Factor | Example influences on stress-related illness |
|--------|---------------------------------------------|
| **Biological** | Genetic vulnerability, current health |
| **Psychological** | Whether stressors are viewed as challenges or threats, coping strategies |
| **Social** | Social support, poverty, discrimination, culture |
      `
    },
    {
      id: 'emot3-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Stress that a person views as motivating rather than debilitating is called _____.',
            answer: 'eustress',
            acceptableAnswers: ['eu-stress', 'good stress', 'positive stress'],
            explanation: 'Eustress is motivating stress; distress is debilitating stress.'
          },
          {
            question: 'Small, everyday irritations such as lost keys and traffic, which can build up over time, are called daily _____.',
            answer: 'hassles',
            acceptableAnswers: ['hassle'],
            explanation: 'Daily hassles are minor stressors, but their effects accumulate.'
          },
          {
            question: 'Chronically high blood pressure, one physiological problem linked to stress, is called _____.',
            answer: 'hypertension',
            acceptableAnswers: ['high blood pressure'],
            explanation: 'The CED names hypertension, headaches, and immune suppression as physiological issues linked to stress.'
          }
        ]
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
            label: 'Traffic jams, lost keys, and late deadlines are examples of _____',
            options: ['traumatic stressors', 'ACEs', 'daily hassles', 'eustress']
          },
          {
            label: 'A soldier who survived a roadside bomb experienced a _____',
            options: ['daily hassle', 'traumatic stressor', 'form of eustress', 'social clock']
          },
          {
            label: 'Students catch more colds during exam weeks. This pattern best illustrates stress-related _____',
            options: ['hypertension', 'immune suppression', 'eustress', 'headaches']
          }
        ],
        correctAnswers: ['daily hassles', 'traumatic stressor', 'immune suppression'],
        hint1: 'Small, ongoing, everyday stressors.',
        hint2: 'A severe event that threatened his life.',
        hint3: 'The body is less able to fight off infection.',
        explanation: 'Traffic, lost keys, and deadlines are daily hassles. A life-threatening blast is a traumatic stressor. More colds under stress reflects immune suppression.'
      }
    },
    {
      id: 'emot3-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "Stress is always bad." | Eustress motivates and energizes. Only debilitating stress is distress. |
| "Only big events matter for health." | Daily hassles build up over time and predict everyday symptoms. |
| "Stress only affects mood." | It is linked to hypertension, headaches, and immune suppression. |
| "ACEs only matter in childhood." | They are sources of stress that can affect a person across the whole lifespan. |
| "Studies prove stress causes illness." | Most stress research is correlational; be careful with causal claims. |

> 🔑 **AP Connection:** If a stem describes **the same stressor** producing energy in one person and symptoms in another, the answer is about **how the stressor is viewed** (eustress vs. distress). If it asks what predicts everyday health complaints such as colds and headaches, look for **accumulated daily hassles**.
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
            question: 'Two employees both receive a surprise promotion. Employee A feels excited and energized, while Employee B feels overwhelmed and gets frequent headaches. The difference in their reactions is BEST explained by:',
            options: [
              'Employee B has more daily hassles at home than Employee A does',
              'A views the promotion as a challenge and B views it as a threat',
              'A promotion is a traumatic stressor for B but not for A',
              'B is in a later stage of the stress response than A is'
            ],
            correctAnswer: 1,
            explanation: 'The same event can become eustress or distress depending on how a person views it. Employee A sees a manageable challenge; Employee B sees a threat and develops symptoms.'
          },
          {
            question: 'A researcher wants to predict which college students will visit the health center most often for colds and headaches this semester. Based on stress research, the BEST predictor would be:',
            options: [
              'Whether they experienced a natural disaster as children',
              'How many major life events they had in the past ten years',
              'How often they face daily hassles such as roommate conflicts',
              'Whether they describe themselves as competitive or relaxed'
            ],
            correctAnswer: 2,
            explanation: 'Daily hassles build up over time, and research links their accumulation to everyday symptoms such as colds and headaches. Rare major events matter, but they predict day-to-day complaints less well.'
          }
        ]
      }
    }
  ]
}
