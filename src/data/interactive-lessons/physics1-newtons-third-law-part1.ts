export const physics1NewtonsThirdLawPart1Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt1-intro',
      type: 'text' as const,
      content: `
# 🔄 Action-Reaction Pairs

**Part 1 of 7 — Newton\'s Third Law**

Newton\'s Third Law is one of the most frequently misunderstood ideas in physics. It\'s simple to state but tricky to apply — and it\'s a favorite on the AP exam.

> **For every action, there is an equal and opposite reaction.**

But what does this *really* mean? Let\'s break it down carefully.
      `
    },
    {
      id: 'nt1-third-law-statement',
      type: 'text' as const,
      content: `
## Newton\'s Third Law — Precise Statement

> **If object A exerts a force on object B, then object B exerts a force on object A that is equal in magnitude and opposite in direction.**

$$\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$$

### Three Critical Properties of Action-Reaction Pairs

| Property | Description |
|----------|-------------|
| **Equal magnitude** | $|F_{A \\text{ on } B}| = |F_{B \\text{ on } A}|$ — always, no exceptions |
| **Opposite direction** | If A pushes B to the right, B pushes A to the left |
| **Different objects** | The two forces act on **different** objects — this is the key! |

### Additional Rules

- Action-reaction pairs are the **same type** of force (both gravitational, both normal, both contact, etc.)
- They exist **simultaneously** — one cannot exist without the other
- They **never cancel** each other because they act on different objects
      `
    },
    {
      id: 'nt1-examples',
      type: 'text' as const,
      content: `
## Action-Reaction Examples

### Example 1: You Push a Wall

- **Action:** You push the wall with 50 N to the right
- **Reaction:** The wall pushes you with 50 N to the left
- These act on different objects (you and the wall)

### Example 2: Earth Pulls an Apple

- **Action:** Earth pulls the apple down with gravitational force $mg$
- **Reaction:** The apple pulls Earth up with gravitational force $mg$
- Earth accelerates negligibly because $a = F/M_{\\text{Earth}} \\approx 0$

### Example 3: Foot on Ground (Walking)

- **Action:** Your foot pushes backward on the ground
- **Reaction:** The ground pushes your foot forward (friction)
- This is what propels you forward!

### Common Misconception Alert ⚠️

The normal force on a book sitting on a table is **NOT** the reaction to the book\'s weight!

- Weight = Earth pulls book down (gravitational)
- Normal = Table pushes book up (contact)
- These are different *types* of forces acting on the *same* object

**Actual pairs:**
- Earth pulls book ↔ Book pulls Earth (gravitational pair)
- Book pushes table ↔ Table pushes book (contact pair)
      `
    },
    {
      id: 'nt1-identifying-pairs',
      type: 'text' as const,
      content: `
## How to Identify Action-Reaction Pairs

### The "Flip Test"

To find the reaction to any force:

1. **Identify the two objects** — the one exerting the force and the one receiving it
2. **Swap the objects** — the reaction force has the same two objects but swapped

**Template:**
- Action: "Object A pushes/pulls Object B"
- Reaction: "Object B pushes/pulls Object A"

### Example

| Action Force | Reaction Force |
|-------------|---------------|
| Bat hits ball (bat → ball) | Ball hits bat (ball → bat) |
| Rocket pushes exhaust down | Exhaust pushes rocket up |
| Swimmer pushes water backward | Water pushes swimmer forward |
| Car tires push road backward | Road pushes car forward |

> **Every force in the universe has a reaction partner.** You can never have an isolated single force.
      `
    },
    {
      id: 'nt1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Action-Reaction Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A hammer strikes a nail. Compared to the force the hammer exerts on the nail, the force the nail exerts on the hammer is:',
            options: [
              'Smaller, because the hammer is moving',
              'Larger, because the nail has more resistance',
              'Equal in magnitude, opposite in direction',
              'Zero, because the nail doesn\'t move much'
            ],
            correctAnswer: 2,
            explanation: 'Newton\'s Third Law: the forces are always equal in magnitude and opposite in direction, regardless of the objects\' sizes, masses, or motion.'
          },
          {
            question: 'A book rests on a table. The reaction force to the weight of the book (Earth pulling the book down) is:',
            options: [
              'The normal force from the table pushing the book up',
              'The book pulling the Earth upward',
              'The friction between the book and the table',
              'The weight of the table pushing down'
            ],
            correctAnswer: 1,
            explanation: 'The reaction to "Earth pulls book down" is "Book pulls Earth up." They are both gravitational forces between the same two objects (Earth and book). The normal force is NOT the reaction — it involves a different object (the table).'
          },
          {
            question: 'Which of the following is a valid action-reaction pair?',
            options: [
              'Weight of a box and the normal force on the box',
              'Tension in a rope pulling a block and friction on the block',
              'Earth\'s gravity on a ball and the ball\'s gravity on Earth',
              'A person\'s push on a wall and friction on the person\'s feet'
            ],
            correctAnswer: 2,
            explanation: 'Action-reaction pairs must involve the same two objects and the same type of force. "Earth pulls ball" and "ball pulls Earth" satisfy both conditions. The other options involve different types of forces or different objects.'
          }
        ]
      }
    },
    {
      id: 'nt1-pair-inputs',
      type: 'input-boxes' as const,
      content: `
**Force Pair Reasoning** 🧮

1) A person pushes a 30 kg box with 150 N. How much force does the box exert on the person (in N)?

2) Earth exerts a gravitational force of 9.8 N on a 1 kg apple. What gravitational force does the apple exert on Earth (in N)?

3) A 1000 kg car pushes backward on the road with 3000 N (via its tires). The road pushes the car forward with how many N?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['150', '9.8', '3000'],
        hint1: 'Newton\'s Third Law: the forces are always equal in magnitude.',
        hint2: 'The gravitational force is mutual — the apple pulls Earth just as much as Earth pulls the apple.',
        hint3: 'Action-reaction: the road pushes the car with the same magnitude the car pushes the road.',
        explanation: '1) 150 N. By Newton\'s Third Law, the box pushes back on the person with 150 N. 2) 9.8 N. The apple\'s pull on Earth equals Earth\'s pull on the apple. 3) 3000 N. The road pushes the car forward with 3000 N (this is what accelerates the car!).'
      }
    },
    {
      id: 'nt1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Classify the Force Pairs** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Action-reaction forces act on:',
            options: ['The same object', 'Different objects', 'Only one object', 'Neither object'],
            correctIndex: 1,
            explanation: 'This is the defining feature: action-reaction pairs always act on two different objects.'
          },
          {
            label: 'A bullet exits a gun. The reaction force acts on:',
            options: ['The bullet', 'The gun', 'The air', 'The target'],
            correctIndex: 1,
            explanation: 'The gun pushes the bullet forward; the reaction is the bullet pushing the gun backward (recoil).'
          },
          {
            label: 'Can an action-reaction pair ever cancel each other out?',
            options: ['Yes, when the forces are equal', 'Yes, when objects are at rest', 'No, because they act on different objects', 'No, because they are different types of force'],
            correctIndex: 2,
            explanation: 'Forces can only cancel when they act on the SAME object. Since action-reaction pairs act on different objects, they never cancel.'
          },
          {
            label: 'When you walk, the force that moves you forward is:',
            options: ['Your muscles pushing you forward', 'Friction from the ground pushing you forward', 'Gravity pulling you forward', 'Normal force from the ground'],
            correctIndex: 1,
            explanation: 'Your foot pushes backward on the ground; by Newton\'s Third Law, the ground pushes your foot forward. This friction force is what propels you.'
          }
        ]
      }
    },
    {
      id: 'nt1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Action-Reaction Pairs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A horse pulls a cart. The cart pulls back on the horse with an equal force. How is the horse able to accelerate the cart?',
            options: [
              'The horse actually pulls harder than the cart pulls back',
              'The action-reaction forces are on different objects — the cart accelerates because the horse\'s pull is the only horizontal force on the cart',
              'Newton\'s Third Law doesn\'t apply to moving objects',
              'Friction cancels the reaction force'
            ],
            correctAnswer: 1,
            explanation: 'The horse\'s pull on the cart and the cart\'s pull on the horse are on DIFFERENT objects. For the cart\'s motion, we only look at forces on the cart. The horse pulls the cart forward, and if that exceeds friction on the cart, the cart accelerates.'
          },
          {
            question: 'Two ice skaters push off each other. Skater A has mass 80 kg and skater B has mass 40 kg. How do their accelerations compare?',
            options: [
              'A accelerates twice as much as B',
              'Both accelerate equally',
              'B accelerates twice as much as A',
              'Neither accelerates'
            ],
            correctAnswer: 2,
            explanation: 'Both experience the same force magnitude (Third Law). Since $a = F/m$, the lighter skater (B, 40 kg) accelerates twice as much as the heavier one (A, 80 kg).'
          }
        ]
      }
    }
  ]
}
