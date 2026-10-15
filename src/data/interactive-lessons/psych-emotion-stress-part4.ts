export const psychEmotionPart4Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot4-s1-intro',
      type: 'text' as const,
      content: `
## Stress Responses

**Part 4 of 7 — The General Adaptation Syndrome, Fight-Flight-Freeze & Tend-and-Befriend**

> 🔑 **Key Concept:** The **general adaptation syndrome (GAS)** describes the process of experiencing stress in three phases: **alarm** (with a fight-flight-freeze response), **resistance**, and **exhaustion**, where susceptibility to illness is greatest. Some people, mostly women, instead **tend and befriend** under stress.

When stressors hit, the body responds through predictable pathways. The AP exam tests Selye's GAS, the fight-flight-freeze response, and tend-and-befriend.

### Core Definitions

| Term | Definition |
|------|-----------|
| **General adaptation syndrome (GAS)** | Selye's three-phase description of the stress process: alarm → resistance → exhaustion |
| **Fight-flight-freeze response** | Sympathetic nervous system activation that prepares the body to confront a threat, escape it, or stay motionless |
| **Tend-and-befriend** | A stress reaction in which people tend to their own needs and/or the needs of others and seek connection with others; it seems to occur mostly in women |
| **Adrenaline** | A hormone released during the alarm reaction that speeds heart rate and mobilizes energy |

### The General Adaptation Syndrome

| Phase | What happens | Body state |
|-------|-------------|------------|
| **1. Alarm reaction** | The stressor is encountered; a fight-flight-freeze response mobilizes the body | Heart rate ↑, breathing ↑, blood pressure ↑, adrenaline released |
| **2. Resistance** | The stressor is confronted; the body stays mobilized and appears to cope | Arousal stays elevated while resources are used up |
| **3. Exhaustion** | The stress subsides, or the body's resources are spent | **Greatest susceptibility to illness**; fatigue, getting sick |

### Real-World Example

A college student during finals week: **Alarm** (day 1, her heart races, she can't sleep, adrenaline kicks in), **Resistance** (days 2-6, she pushes through exams and appears functional but fatigued), **Exhaustion** (after finals, she gets a bad cold because her resources are spent). This is why students often get sick right after finals.
      `
    },
    {
      id: 'emot4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A soldier deployed overseas describes three phases of stress: initial shock and heightened alertness, then weeks of functioning under constant danger, and finally physical breakdown with illness and inability to continue. This pattern most closely matches:',
            options: [
              'Broaden-and-build theory',
              'Selye\'s general adaptation syndrome',
              'The tend-and-befriend response',
              'The biopsychosocial model of illness'
            ],
            correctAnswer: 1,
            explanation: 'Initial shock is the alarm reaction, weeks of coping is resistance, and breakdown with illness is exhaustion, the phase of greatest susceptibility to illness. That three-phase sequence is the GAS.'
          },
          {
            question: 'The tend-and-befriend theory of stress proposes that:',
            options: [
              'Under stress, all people either fight the threat or run from it',
              'Under stress, some people care for others and seek out connection with others',
              'Under stress, seeking out others is a sign of a weak coping style',
              'Under stress, people freeze in place until the danger has passed'
            ],
            correctAnswer: 1,
            explanation: 'Tend-and-befriend proposes that some people react to stress by tending to their own needs or the needs of others and by seeking connection with others. It seems to occur mostly in women and is an alternative to fight-flight-freeze.'
          }
        ]
      }
    },
    {
      id: 'emot4-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: The Nervous System Under Stress

#### Fight-Flight-Freeze: Sympathetic vs. Parasympathetic

| System | Role | Effects |
|--------|------|---------|
| **Sympathetic nervous system** | Arouses the body in the alarm reaction (fight, flight, or freeze) | Heart rate ↑, breathing ↑, pupils dilate, digestion slows, blood flows to muscles, adrenaline released |
| **Parasympathetic nervous system** | Calms the body after the threat passes ("rest and digest") | Heart rate ↓, breathing ↓, digestion resumes, body returns to homeostasis |

**AP key point:** The two divisions of the autonomic nervous system work in opposition. The sympathetic division accelerates; the parasympathetic division brakes.

#### Fight, Flight, or Freeze?

| Response | What it looks like | When it tends to happen |
|---------|-------------------|------------------------|
| **Fight** | Confronting the threat | The threat seems beatable |
| **Flight** | Escaping | Escape seems possible |
| **Freeze** | Going still, "deer in the headlights" | Neither fighting nor fleeing seems possible, or staying still may avoid notice |

#### Tend-and-Befriend

Researcher Shelley Taylor noted that early stress research studied mostly males. She proposed that many people, especially women, respond to stress by:

- **Tending:** protecting and caring for themselves, their children, or others in need
- **Befriending:** reaching out to friends and family for connection and mutual support

The hormone **oxytocin**, which promotes bonding, is thought to support this response.

#### Why Exhaustion Brings Illness

Each phase draws on the body's resources. During prolonged resistance, the body stays mobilized; by the exhaustion phase, those resources are spent, and the **immune system is suppressed**, which explains why susceptibility to illness peaks there. Part 3 showed the evidence: students under exam stress and long-term caregivers show weaker immune responses.
      `
    },
    {
      id: 'emot4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Selye\'s three GAS phases in order are alarm, _____, and exhaustion.',
            answer: 'resistance',
            acceptableAnswers: ['resistance phase', 'resistance stage'],
            explanation: 'In the resistance phase, the stressor is confronted and the body stays mobilized while resources are used up.'
          },
          {
            question: 'The division of the autonomic nervous system that produces the fight-flight-freeze response is the _____ nervous system.',
            answer: 'sympathetic',
            acceptableAnswers: ['sympathetic division'],
            explanation: 'The sympathetic division arouses the body; the parasympathetic division calms it afterward.'
          },
          {
            question: 'The GAS phase in which a person is most susceptible to illness is the _____ phase.',
            answer: 'exhaustion',
            acceptableAnswers: ['exhaustion stage', 'third'],
            explanation: 'In exhaustion, the stress subsides or resources are spent, and susceptibility to illness is greatest.'
          }
        ]
      }
    },
    {
      id: 'emot4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A hiker who spots a bear and goes completely still is showing the _____ part of the alarm reaction',
            options: ['fight', 'flight', 'freeze', 'befriend']
          },
          {
            label: 'A mother under stress protects her children and calls friends for support. This illustrates the _____',
            options: ['fight-flight-freeze response', 'tend-and-befriend response', 'general adaptation syndrome', 'parasympathetic response']
          },
          {
            label: 'After prolonged stress, the body\'s resources are spent and illness becomes more likely. This is the _____ phase of GAS',
            options: ['alarm', 'resistance', 'exhaustion', 'recovery']
          }
        ],
        correctAnswers: ['freeze', 'tend-and-befriend response', 'exhaustion'],
        hint1: 'Neither confronting nor running.',
        hint2: 'Caring for others and seeking connection.',
        hint3: 'Resources depleted, illness more likely.',
        explanation: 'Going still is the freeze response. Protecting children and reaching out to friends is tend-and-befriend. Spent resources and higher illness risk mark the exhaustion phase.'
      }
    },
    {
      id: 'emot4-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "Fight-or-flight is the ONLY stress response." | The CED's term is fight-flight-**freeze**, and tend-and-befriend is an alternative reaction seen mostly in women. |
| "Resistance means the stress is gone." | In resistance the person is still confronting the stressor and using up resources. |
| "Exhaustion just means being tired." | Exhaustion is when resources are spent and susceptibility to illness is greatest. |
| "Sympathetic and parasympathetic do the same job." | They work in opposition: one arouses, the other calms. |

> 🔑 **AP Connection:** Expect scenario questions that ask you to place a moment in the GAS (alarm, resistance, or exhaustion) and to explain why illness peaks in exhaustion. If a stem describes someone reaching out to friends or caring for others under stress, think **tend-and-befriend**, not fight-flight-freeze.
      `
    },
    {
      id: 'emot4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A nurse works long shifts for months during a disease outbreak. She seems to cope well for weeks, but when the outbreak ends she comes down with pneumonia. Her illness fits which phase of the GAS?',
            options: [
              'Exhaustion, when resources are spent',
              'Alarm, when the stressor first appears',
              'Resistance, when the body first relaxes',
              'Recovery, a fourth phase after resistance'
            ],
            correctAnswer: 0,
            explanation: 'Exhaustion occurs when the stress subsides or resources are spent, and susceptibility to illness is greatest then. The weeks of coping were the resistance phase; the GAS has no fourth recovery phase.'
          },
          {
            question: 'After a car accident, a passenger\'s heart races, her breathing becomes rapid, and blood rushes to her muscles. Minutes later, the danger has passed; her breathing slows, her heart rate returns to normal, and she feels her stomach "unclench." These two phases illustrate:',
            options: [
              'The alarm and resistance phases of the general adaptation syndrome',
              'A body-first emotion followed by a cognitive label for the feeling',
              'Sympathetic arousal followed by parasympathetic calming of the body',
              'A tend-and-befriend reaction followed by a fight-flight-freeze one'
            ],
            correctAnswer: 2,
            explanation: 'During the accident, the sympathetic division raises heart rate and breathing and sends blood to the muscles. Afterward, the parasympathetic division slows the heart and lets digestion resume.'
          }
        ]
      }
    }
  ]
}
