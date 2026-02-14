export const physics1NewtonsFirstSecondLawsPart1Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Newton\'s First Law and Inertia

**Part 1 of 7 — Newton\'s First and Second Laws**

For centuries, people believed that objects naturally come to rest — that you need a force to keep things moving. **Galileo** challenged this, and **Newton** formalized it into his First Law.

Newton\'s First Law tells us what happens when forces are **balanced** (or absent). It\'s more profound than it seems — it defines the very framework in which physics works.
      `
    },
    {
      id: 'nf1-first-law',
      type: 'text' as const,
      content: `
## Newton\'s First Law (The Law of Inertia)

> **An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net external force.**

### Breaking It Down

| Condition | What Happens |
|-----------|-------------|
| $\\vec{F}_{\\text{net}} = 0$, object at rest | Object **remains at rest** |
| $\\vec{F}_{\\text{net}} = 0$, object moving | Object continues with **constant velocity** (same speed, same direction) |
| $\\vec{F}_{\\text{net}} \\neq 0$ | Object **accelerates** (changes velocity) |

### Key Insight

No force is needed to **maintain** motion — only to **change** it. A hockey puck sliding on frictionless ice would slide forever at constant velocity.

### Common Misconception

❌ "An object in motion will eventually stop."

✅ Objects stop because of friction, air resistance, or other forces — not because motion naturally "wears out."
      `
    },
    {
      id: 'nf1-inertia',
      type: 'text' as const,
      content: `
## Inertia

**Inertia** is an object\'s tendency to resist changes in its state of motion.

### Mass as a Measure of Inertia

- **Mass** ($m$) quantifies inertia
- Greater mass → greater inertia → harder to accelerate
- Mass is a **scalar** quantity measured in kilograms (kg)
- Mass is **not** the same as weight (weight depends on gravity)

### Everyday Examples of Inertia

| Example | Explanation |
|---------|-------------|
| Passengers lurch forward when a car brakes | Your body wants to keep moving (inertia) |
| Tablecloth trick | Dishes have inertia — they resist the brief horizontal pull |
| Ketchup trick (smack the bottle) | Ketchup has inertia; the bottle accelerates but the ketchup lags behind |
| Seatbelts | Prevent your body from continuing forward in a crash |

### Mass vs. Weight

| Property | Mass | Weight |
|----------|------|--------|
| What it measures | Amount of matter / inertia | Gravitational force |
| Type | Scalar | Vector (force) |
| Units | kg | N (newtons) |
| Depends on location? | No | Yes ($W = mg$) |
      `
    },
    {
      id: 'nf1-reference-frames',
      type: 'text' as const,
      content: `
## Inertial Reference Frames

Newton\'s First Law doesn\'t work in every reference frame. It works in **inertial reference frames**.

### What Is a Reference Frame?

A reference frame is a coordinate system attached to an observer. Different observers can describe the same event differently.

### Inertial vs. Non-Inertial

| Type | Definition | Example |
|------|-----------|---------|
| **Inertial** | Not accelerating (at rest or constant velocity) | A lab on solid ground; a train moving at constant speed |
| **Non-Inertial** | Accelerating | A car rounding a curve; an elevator accelerating upward |

### Why It Matters

In a non-inertial frame, objects appear to accelerate without any real force. For example:
- In a turning car, you feel "pushed" outward — but there\'s no outward force
- This "fictitious force" is called the **centrifugal force**

> **AP Physics 1 focuses on inertial reference frames**, where Newton\'s laws apply directly.
      `
    },
    {
      id: 'nf1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Newton\'s First Law Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A book sits on a table with no net force acting on it. According to Newton\'s First Law, the book will:',
            options: [
              'Eventually slide off the table',
              'Remain at rest indefinitely',
              'Start moving in a random direction',
              'Slowly decelerate'
            ],
            correctAnswer: 1,
            explanation: 'Newton\'s First Law states that an object at rest stays at rest when the net force is zero. The book will remain at rest indefinitely unless an unbalanced force acts on it.'
          },
          {
            question: 'A spaceship in deep space (far from any stars or planets) shuts off its engines. The spaceship will:',
            options: [
              'Gradually slow down and stop',
              'Continue at constant velocity forever',
              'Speed up slightly due to residual thrust',
              'Start drifting in a random direction'
            ],
            correctAnswer: 1,
            explanation: 'With no net external force (no friction, no gravity in deep space), the spaceship maintains its velocity indefinitely — this is Newton\'s First Law in action.'
          },
          {
            question: 'Which of the following is an inertial reference frame?',
            options: [
              'A car accelerating from a stop light',
              'A merry-go-round spinning at constant speed',
              'A train moving at constant velocity on straight tracks',
              'An elevator that is speeding up as it goes up'
            ],
            correctAnswer: 2,
            explanation: 'An inertial reference frame is one that is not accelerating. A train moving at constant velocity on straight tracks has zero acceleration, making it an inertial frame. The merry-go-round has centripetal acceleration even at constant speed.'
          }
        ]
      }
    },
    {
      id: 'nf1-inertia-ranking',
      type: 'input-boxes' as const,
      content: `
**Inertia Calculations** 🧮

1) A 1500 kg car and a 75 kg person both experience the same net force. The ratio of the car\'s acceleration to the person\'s acceleration is $a_{\\text{car}}/a_{\\text{person}}$ = ? (express as a decimal)

2) On the Moon, $g_{\\text{Moon}} = 1.6$ m/s². What is the weight (in N) of a 60 kg astronaut on the Moon?

3) An object weighs 490 N on Earth ($g = 9.8$ m/s²). What is its mass in kg?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.05', '96', '50'],
        hint1: 'If $F = ma$ and the same $F$ acts on both, then $a = F/m$. The ratio is $a_{\\text{car}}/a_{\\text{person}} = m_{\\text{person}}/m_{\\text{car}}$.',
        hint2: 'Weight $W = mg_{\\text{Moon}} = 60 \\times 1.6$.',
        hint3: '$W = mg$, so $m = W/g = 490/9.8$.',
        explanation: '1) $a_{\\text{car}}/a_{\\text{person}} = m_{\\text{person}}/m_{\\text{car}} = 75/1500 = 0.05$. The car accelerates 20 times less. 2) $W = 60 \\times 1.6 = 96$ N. 3) $m = 490/9.8 = 50$ kg.'
      }
    },
    {
      id: 'nf1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Classify and Identify** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newton\'s First Law is also called the Law of:',
            options: ['Acceleration', 'Inertia', 'Gravity', 'Action-Reaction'],
            correctIndex: 1,
            explanation: 'Newton\'s First Law is the Law of Inertia — it describes how objects resist changes in their state of motion.'
          },
          {
            label: 'An object moving at constant velocity has a net force that is:',
            options: ['Positive', 'Negative', 'Zero', 'Increasing'],
            correctIndex: 2,
            explanation: 'Constant velocity means zero acceleration, which by Newton\'s Second Law means the net force is zero.'
          },
          {
            label: 'Inertia depends on an object\'s:',
            options: ['Speed', 'Weight', 'Mass', 'Shape'],
            correctIndex: 2,
            explanation: 'Mass is the quantitative measure of inertia. A more massive object resists changes in motion more strongly.'
          },
          {
            label: 'A rotating space station is a(n) _____ reference frame.',
            options: ['Inertial', 'Non-inertial', 'Stationary', 'Galilean'],
            correctIndex: 1,
            explanation: 'A rotating frame is accelerating (centripetally), making it a non-inertial reference frame where fictitious forces appear.'
          }
        ]
      }
    },
    {
      id: 'nf1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Newton\'s First Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A passenger in a car is wearing a seatbelt. When the car suddenly stops, the seatbelt exerts a force on the passenger. Which best explains why the seatbelt is necessary?',
            options: [
              'The passenger\'s weight increases during braking',
              'The passenger\'s inertia tends to keep them moving forward',
              'The car pushes the passenger forward',
              'Gravity pulls the passenger toward the dashboard'
            ],
            correctAnswer: 1,
            explanation: 'Due to inertia, the passenger\'s body tends to continue moving forward at the car\'s original speed. The seatbelt provides the force needed to decelerate the passenger along with the car.'
          },
          {
            question: 'Which situation describes an object in equilibrium (net force = 0)?',
            options: [
              'A ball rolling down a hill and speeding up',
              'A satellite orbiting Earth at constant speed',
              'A box sliding across a floor at constant velocity',
              'A skydiver accelerating downward after jumping'
            ],
            correctAnswer: 2,
            explanation: 'A box sliding at constant velocity has zero acceleration, meaning the net force is zero — it\'s in dynamic equilibrium. The satellite has centripetal acceleration, so it\'s not in equilibrium despite constant speed.'
          }
        ]
      }
    }
  ]
}
