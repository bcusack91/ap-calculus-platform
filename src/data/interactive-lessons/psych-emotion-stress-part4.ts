export const psychEmotionPart4Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot4-s1-intro',
      type: 'text' as const,
      content: `
## Stress Responses

**Part 4 of 7 — GAS, Fight-or-Flight & the Immune System**

When stressors hit, the body responds through predictable physiological pathways. The AP exam tests three key models: Selye's General Adaptation Syndrome, the fight-or-flight response, and the connection between stress and immune function (psychoneuroimmunology).

### Core Definitions

| Term | Definition |
|------|-----------|
| **General Adaptation Syndrome (GAS)** | Selye's three-stage model of the body's stress response: Alarm → Resistance → Exhaustion |
| **Fight-or-flight response** | Sympathetic nervous system activation that prepares the body to confront or flee a threat |
| **Tend-and-befriend** | Alternative stress response (especially in females) — nurturing offspring and seeking social support under stress |
| **Cortisol** | The primary stress hormone released by the adrenal glands; helpful short-term, harmful when chronically elevated |
| **Psychoneuroimmunology** | The study of how psychological factors (especially stress) affect the immune system |

### Selye's General Adaptation Syndrome (GAS)

| Stage | What happens | Duration | Body state |
|-------|-------------|----------|------------|
| **1. Alarm** | Body mobilizes resources — sympathetic nervous system activates, adrenaline and cortisol release | Minutes to hours | Heart rate ↑, blood pressure ↑, blood sugar ↑, immune suppressed temporarily |
| **2. Resistance** | Body adapts and copes with the ongoing stressor; appears to function normally but resources are being used | Days to weeks | Hormone levels remain elevated, body is working hard to maintain homeostasis |
| **3. Exhaustion** | Body's resources are depleted; vulnerability to illness increases dramatically | Prolonged stress | Immune system fails, physical illness, burnout, organ damage, potential death |

### Real-World Example

A college student during finals week: **Alarm** (day 1 — heart races, can't sleep, adrenaline kicks in), **Resistance** (days 2-6 — pushes through exams, appears functional but fatigued), **Exhaustion** (after finals — gets a terrible cold because her immune system was depleted). This is why students often get sick right after finals.
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
              'The James-Lange theory of emotion',
              'Selye\'s General Adaptation Syndrome: Alarm → Resistance → Exhaustion',
              'The Holmes-Rahe Social Readjustment Rating Scale',
              'The biopsychosocial model of health'
            ],
            correctAnswer: 1,
            explanation: 'This perfectly illustrates Selye\'s GAS: (1) Alarm — initial shock and heightened alertness as the body mobilizes; (2) Resistance — weeks of coping and functioning despite ongoing stress; (3) Exhaustion — body\'s resources deplete, immune system fails, physical illness and breakdown. Selye\'s model specifically describes this three-stage progression.'
          },
          {
            question: 'The tend-and-befriend response to stress, proposed by Shelley Taylor, suggests that:',
            options: [
              'All people respond to stress by fighting or running away',
              'Under stress, some individuals (especially females) respond by nurturing offspring and forming social alliances rather than fighting or fleeing',
              'Befriending strangers under stress is a sign of pathological anxiety',
              'The sympathetic nervous system produces nurturing behavior'
            ],
            correctAnswer: 1,
            explanation: 'Shelley Taylor proposed that the classic fight-or-flight model was based primarily on research with males. Females, influenced by the hormone oxytocin, may respond to stress by tending to offspring (protective caregiving) and befriending others (seeking social bonds for mutual support). This is an important alternative model tested on the AP exam.'
          }
        ]
      }
    },
    {
      id: 'emot4-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: The Nervous System, Hormones & Immunity

#### Fight-or-Flight: Sympathetic vs. Parasympathetic

| System | Role | Effects |
|--------|------|---------|
| **Sympathetic nervous system** | "Fight or flight" — activates during stress | Heart rate ↑, breathing ↑, pupils dilate, digestion stops, blood flows to muscles, adrenaline/cortisol released |
| **Parasympathetic nervous system** | "Rest and digest" — activates after stress passes | Heart rate ↓, breathing ↓, digestion resumes, body returns to homeostasis |

**AP key point:** These systems are ANTAGONISTIC — they work in opposition. The sympathetic system accelerates; the parasympathetic system brakes.

#### Stress Hormones

| Hormone | Source | Short-term effect | Long-term danger |
|---------|--------|-------------------|-----------------|
| **Adrenaline (epinephrine)** | Adrenal medulla | Rapid energy burst, heightened alertness | Cardiovascular strain if chronic |
| **Cortisol** | Adrenal cortex | Maintains blood sugar, reduces inflammation | Chronic elevation → weakened immune system, weight gain, impaired memory, hippocampal damage |

#### Psychoneuroimmunology (PNI): Stress → Illness

| Finding | Explanation |
|---------|------------|
| **Exam stress study** | Medical students showed reduced immune function during exam periods compared to vacation |
| **Wound healing** | Stressed caregivers' wounds healed 40% slower than non-stressed controls |
| **Disease susceptibility** | Chronically stressed individuals are more susceptible to colds, infections, and slower recovery |
| **Mechanism** | Cortisol suppresses lymphocyte (white blood cell) production → weakened immune response |

#### The HPA Axis

Hypothalamus → Pituitary gland → Adrenal glands

This is the body's stress response pathway: the hypothalamus signals the pituitary, which signals the adrenal glands to release cortisol. Chronic activation of the HPA axis leads to the health problems described above.
      `
    },
    {
      id: 'emot4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Selye's three GAS stages in order are: Alarm, ___, Exhaustion. (one word)

      2) The primary stress hormone released by the adrenal glands is ___. (one word)

      3) The study of how psychological factors affect the immune system is called ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Resistance', 'cortisol', 'psychoneuroimmunology'],
        hint1: 'The middle stage where the body copes and adapts',
        hint2: 'Starts with C — chronic elevation damages the immune system',
        hint3: 'Psycho + neuro + immunology = one long word',
        explanation: 'Expected answers: Resistance (the middle GAS stage where the body adapts to ongoing stress), cortisol (the primary stress hormone — helpful short-term but damaging long-term), and psychoneuroimmunology (the field studying the connection between psychological stress and immune function).'
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
            label: 'The nervous system division that activates fight-or-flight (heart rate up, pupils dilate) is the ___',
            options: ['parasympathetic', 'sympathetic', 'somatic', 'central']
          },
          {
            label: 'A mother under stress protects her children and calls friends for support — this illustrates the ___',
            options: ['fight-or-flight response', 'tend-and-befriend response', 'general adaptation syndrome', 'parasympathetic response']
          },
          {
            label: 'After prolonged stress, the body\'s resources are depleted and vulnerability to illness increases. This is the ___ stage of GAS',
            options: ['alarm', 'resistance', 'exhaustion']
          }
        ],
        correctAnswers: ['sympathetic', 'tend-and-befriend response', 'exhaustion'],
        hint1: 'Fight-or-flight = sympathetic activation.',
        hint2: 'Nurturing offspring + seeking social support = tend-and-befriend.',
        hint3: 'Resources depleted = exhaustion (the final GAS stage).',
        explanation: 'Sympathetic nervous system = fight-or-flight activation. Tend-and-befriend (Taylor) = nurturing/social response to stress, especially in females. Exhaustion = the third GAS stage where the body\'s defenses fail after prolonged stress.'
      }
    },
    {
      id: 'emot4-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Fight-or-flight is the ONLY stress response"** — Tend-and-befriend (Taylor) is an important alternative, especially in females. The AP exam tests this as a critique of the traditional model.
- **"Cortisol is always bad"** — Cortisol is essential in the short term: it maintains blood sugar, reduces inflammation, and helps the body respond to danger. It's only harmful when CHRONICALLY elevated.
- **"GAS exhaustion = just being tired"** — Exhaustion in Selye's model means the immune system and body resources are DEPLETED, leading to serious illness, not just fatigue.
- **"The sympathetic and parasympathetic systems work together"** — They are ANTAGONISTIC. One activates while the other inhibits. They don't work simultaneously.

### AP Strategy Moves
- **GAS stages:** Alarm → Resistance → Exhaustion. Know all three and be able to identify them from scenarios.
- **Sympathetic = stress activation; Parasympathetic = recovery.** If a question describes heart rate increasing and digestion stopping → sympathetic. If heart rate decreasing and digestion resuming → parasympathetic.
- **Psychoneuroimmunology** is a common vocabulary word on the AP exam. Know the definition AND the evidence (exam stress studies, wound healing studies).
- **Cortisol's dual nature:** Short-term helpful, long-term harmful. If a question asks about chronic stress effects → cortisol suppresses immune function.
- Know the **HPA axis** pathway: Hypothalamus → Pituitary → Adrenal glands.
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
            question: 'A researcher finds that caregivers of Alzheimer\'s patients have significantly lower levels of immune cells and heal from wounds 40% slower than non-caregivers of the same age. This finding is an example of research in:',
            options: [
              'Health psychology — studying personality types and health',
              'Psychoneuroimmunology — demonstrating that chronic psychological stress suppresses immune function',
              'Behavioral neuroscience — studying brain structures involved in caregiving',
              'Clinical psychology — diagnosing caregivers with immune disorders'
            ],
            correctAnswer: 1,
            explanation: 'This is a classic psychoneuroimmunology finding: chronic psychological stress (caregiving) directly impacts immune function (lower immune cells, slower wound healing). The mechanism: chronic stress → chronic cortisol elevation → suppressed lymphocyte production → weakened immune system. This specific caregiver study is frequently cited in AP Psychology.'
          },
          {
            question: 'After a car accident, a passenger\'s heart races, her breathing becomes rapid, and blood rushes to her muscles. Minutes later, the danger has passed; her breathing slows, her heart rate returns to normal, and she feels her stomach "unclench." These two phases illustrate the:',
            options: [
              'Alarm and Resistance stages of GAS',
              'Two stages of cognitive appraisal (primary and secondary)',
              'Activation of the sympathetic nervous system (fight-or-flight) followed by the parasympathetic nervous system (rest-and-digest)',
              'Tend-and-befriend response followed by fight-or-flight'
            ],
            correctAnswer: 2,
            explanation: 'During the accident: sympathetic nervous system activates → heart rate ↑, breathing ↑, blood to muscles, digestion stops. After the danger passes: parasympathetic nervous system takes over → heart rate ↓, breathing ↓, stomach "unclenches" (digestion resumes). These two antagonistic systems work in sequence — sympathetic for emergencies, parasympathetic for recovery.'
          }
        ]
      }
    }
  ]
}
