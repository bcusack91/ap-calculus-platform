export const physics1NewtonsThirdLawPart3Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt3-intro',
      type: 'text' as const,
      content: `
# 💡 Why Action-Reaction Doesn\'t Mean Nothing Moves

**Part 3 of 7 — Newton\'s Third Law**

If the forces are always equal and opposite, why doesn\'t everything just cancel out? Why can anything move at all? This is the #1 conceptual trap with Newton\'s Third Law, and this lesson will clear it up once and for all.
      `
    },
    {
      id: 'nt3-the-paradox',
      type: 'text' as const,
      content: `
## The "Paradox"

**Student question:** "If the horse pulls the cart with force $F$, and the cart pulls the horse back with force $-F$, the total force is zero, so nothing should move. Right?"

**Wrong!** Here\'s why:

### The Critical Error

The student is adding forces that act on **different objects**. You can only add forces that act on the **same** object to find the net force.

### Correct Analysis

**Forces on the cart:**
- Horse pulls cart forward: $+F$
- Friction/ground on cart: $-f_{\\text{cart}}$
- Net force on cart: $F - f_{\\text{cart}}$

**Forces on the horse:**
- Cart pulls horse backward: $-F$
- Ground pushes horse forward: $+f_{\\text{ground}}$
- Net force on horse: $f_{\\text{ground}} - F$

If $f_{\\text{ground}} > F > f_{\\text{cart}}$, both the horse and the cart accelerate forward!

> **Key rule:** To determine if an object accelerates, look at the forces ON THAT OBJECT ONLY.
      `
    },
    {
      id: 'nt3-system-vs-object',
      type: 'text' as const,
      content: `
## System vs. Individual Object Analysis

### Individual Object Analysis

To find the acceleration of a single object, draw its FBD and apply $F_{\\text{net}} = ma$ to **that object alone**.

Action-reaction pairs always involve two different objects, so they appear on **two different FBDs** — never on the same one.

### System Analysis

When analyzing multiple objects as a **system**:
- Internal forces (Third Law pairs between objects in the system) **cancel**
- Only **external forces** determine the system\'s acceleration

### Example: Person Pushing a Box

Person (60 kg) pushes box (20 kg) with 100 N on a frictionless floor.

**System approach (person + box):**
- External forces: only friction from ground on person\'s feet = 100 N forward
- Wait — on a frictionless floor, the person pushes the box and the floor provides no traction. Let\'s say the person can push off a wall.
- The person pushes the wall with force $F$; the wall pushes back on the person with $F$
- System mass: $60 + 20 = 80$ kg
- If the person exerts 100 N: $a = 100/80 = 1.25$ m/s² for the whole system

**Individual analysis (box only):**
- Person pushes box: 100 N... but wait, we need to find the *actual* contact force
- If $a = 1.25$ m/s²: $F_{\\text{on box}} = m_{\\text{box}} \\times a = 20 \\times 1.25 = 25$ N
      `
    },
    {
      id: 'nt3-real-world',
      type: 'text' as const,
      content: `
## Real-World Examples

### Rocket Propulsion

- Rocket pushes exhaust gases backward
- Exhaust pushes rocket forward (Third Law)
- Net force on **rocket alone**: thrust forward > weight → acceleration up!

### Swimming

- Swimmer pushes water backward with hands
- Water pushes swimmer forward
- Net force on **swimmer alone**: forward push from water > drag → swimmer moves forward

### Walking

- Foot pushes ground backward
- Ground pushes foot forward (static friction)
- Net force on **person alone**: ground\'s push > air resistance → you walk forward

### Key Pattern

In every case, the object accelerates because the **net external force on that object** is nonzero. The reaction force acts on a *different* object and doesn\'t affect the first object\'s motion.
      `
    },
    {
      id: 'nt3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Resolving the "Paradox"** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A tow truck pulls a car. The truck accelerates. How is this possible if the car pulls back on the truck with an equal force?',
            options: [
              'The truck\'s engine overcomes the reaction force',
              'The pull-back force on the truck is less than the ground\'s forward push on the truck',
              'Newton\'s Third Law doesn\'t apply to accelerating objects',
              'The reaction force acts with a time delay'
            ],
            correctAnswer: 1,
            explanation: 'The truck accelerates because the total forces on the TRUCK give a net forward force. The ground\'s friction on the truck\'s tires (forward) exceeds the car\'s pull (backward). The Third Law pair is between truck and car, but the truck also interacts with the ground.'
          },
          {
            question: 'Two astronauts in space push off each other. Astronaut A (90 kg) and Astronaut B (60 kg). Which accelerates more?',
            options: [
              'A, because they have more mass',
              'B, because they have less mass',
              'Both accelerate equally',
              'Neither accelerates — the forces cancel'
            ],
            correctAnswer: 1,
            explanation: 'Both experience the same force magnitude (Third Law), but $a = F/m$. B has less mass, so B has a greater acceleration. The forces DON\'T cancel because they act on different astronauts.'
          },
          {
            question: 'Why don\'t action-reaction forces cancel?',
            options: [
              'They aren\'t really equal',
              'One is always slightly delayed',
              'They act on different objects',
              'Only the larger force matters'
            ],
            correctAnswer: 2,
            explanation: 'Forces only cancel (produce zero net force) when they act on the SAME object. Action-reaction pairs always act on DIFFERENT objects, so they never cancel each other.'
          }
        ]
      }
    },
    {
      id: 'nt3-analysis-inputs',
      type: 'input-boxes' as const,
      content: `
**System and Object Analysis** 🧮

A person (80 kg) pushes a cart (40 kg) on a frictionless surface. The system accelerates at 2 m/s².

1) What is the net external force on the system (in N)?

2) What force does the person exert on the cart (in N)?

3) What force does the cart exert on the person (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['240', '80', '80'],
        hint1: '$F_{\\text{net}} = (m_{\\text{person}} + m_{\\text{cart}}) \\times a = 120 \\times 2$.',
        hint2: 'For the cart alone: $F_{\\text{on cart}} = m_{\\text{cart}} \\times a = 40 \\times 2$.',
        hint3: 'By Newton\'s Third Law, the cart pushes back on the person with equal magnitude.',
        explanation: '1) $F_{\\text{net}} = 120 \\times 2 = 240$ N. 2) For the cart: $F = 40 \\times 2 = 80$ N. The person pushes the cart with 80 N. 3) By Newton\'s Third Law: 80 N. The cart pushes back on the person with 80 N.'
      }
    },
    {
      id: 'nt3-dropdown-reasoning',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To determine if an object accelerates, you should examine:',
            options: ['All forces in the universe', 'Only forces on that object', 'Only action-reaction pairs', 'Only the largest force'],
            correctIndex: 1,
            explanation: 'An object\'s acceleration depends on the net force on THAT object only. Forces on other objects are irrelevant for determining its acceleration.'
          },
          {
            label: 'Internal forces within a system:',
            options: ['Add to the net force', 'Cancel out (Third Law pairs)', 'Only act on one object', 'Are always zero'],
            correctIndex: 1,
            explanation: 'Internal forces come in Third Law pairs that cancel when summing forces for the system. Only external forces affect the system\'s acceleration.'
          },
          {
            label: 'A rocket in space (no gravity, no air) can accelerate because:',
            options: ['It pushes against the air', 'The exhaust pushes the rocket forward', 'Fuel burns inside', 'It needs something to push against'],
            correctIndex: 1,
            explanation: 'The rocket pushes exhaust backward; the exhaust pushes the rocket forward. No medium is needed — Newton\'s Third Law works in a vacuum.'
          }
        ]
      }
    },
    {
      id: 'nt3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Why Things Move** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A large truck collides head-on with a small car. During the collision:',
            options: [
              'The truck exerts a larger force on the car',
              'The car exerts a larger force on the truck',
              'Both exert equal forces on each other',
              'The forces depend on which is moving faster'
            ],
            correctAnswer: 2,
            explanation: 'Newton\'s Third Law: the forces are always equal regardless of size, mass, or speed. The car suffers more damage because it has more acceleration ($a = F/m$ with smaller $m$), not because it experiences more force.'
          },
          {
            question: 'A person stands on a skateboard and throws a heavy ball forward. The person and skateboard move backward. This is best explained by:',
            options: [
              'Conservation of energy',
              'Newton\'s First Law',
              'Newton\'s Third Law — the person pushes the ball forward, the ball pushes the person backward',
              'Air resistance pushing the person backward'
            ],
            correctAnswer: 2,
            explanation: 'The person exerts a forward force on the ball; by Newton\'s Third Law, the ball exerts an equal backward force on the person, causing them to roll backward on the skateboard.'
          }
        ]
      }
    }
  ]
}
