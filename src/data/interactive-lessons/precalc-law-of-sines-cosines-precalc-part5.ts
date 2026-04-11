export const precalcLawSinesCosinesPart5Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🌍 Applications — Navigation & Surveying

**Part 5 of 7**

The Laws of Sines and Cosines solve real-world problems involving distances and angles that can't be measured directly.

### Application Types

| Application | Typical Setup |
|:-----------|:-------------|
| Navigation | Find distance between two points using bearings |
| Surveying | Measure inaccessible distances from two known positions |
| Engineering | Force resolution in non-rectangular systems |
| Aviation | Distance between waypoints on non-straight routes |

### The Triangulation Method

To find an inaccessible distance:
1. Measure a **baseline** (known distance between two observation points)
2. Measure the **angles** from each end of the baseline to the target
3. Use Law of Sines to compute the unknown distances
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Distance Across a River

From points $A$ and $B$ on one bank, $AB = 200$ m. Angles to a tree $C$ on the other bank: $\\angle A = 72°$, $\\angle B = 63°$.

$\\angle C = 180° - 72° - 63° = 45°$

$$\\frac{AC}{\\sin B} = \\frac{AB}{\\sin C}$$
$$AC = \\frac{200 \\sin 63°}{\\sin 45°} = \\frac{200(0.891)}{0.707} \\approx 252.1 \\text{ m}$$

### Example 2: Two Ships from a Lighthouse

A lighthouse sees Ship 1 at bearing N40°E, distance 8 km, and Ship 2 at bearing S50°E, distance 6 km.

The angle at the lighthouse = $40° + 50° = 90°$.

By Law of Cosines:
$$d^2 = 8^2 + 6^2 - 2(8)(6)\\cos 90° = 64 + 36 - 0 = 100$$
$$d = 10 \\text{ km}$$

### Example 3: Hiking Problem

A hiker walks 5 km on bearing 060°, then turns and walks 7 km on bearing 150°. How far from the start?

Angle between paths = $150° - 60° = 90°$ (the turn angle is $180° - 90° = 90°$).

Actually, the angle in the triangle at the turning point = $180° - (150° - 60°) = 90°$.

$$d = \\sqrt{5^2 + 7^2} = \\sqrt{74} \\approx 8.60 \\text{ km}$$
      `
    },
    {
      id: 'p5-forces',
      type: 'text' as const,
      content: `
## ⚡ Force and Velocity Problems

### Resultant of Two Forces

Two forces $F_1 = 30$ N and $F_2 = 40$ N act at an angle of $60°$ to each other.

The resultant magnitude uses the Law of Cosines (the angle in the triangle is $180° - 60° = 120°$):

$$R^2 = F_1^2 + F_2^2 - 2F_1 F_2 \\cos 120°$$
$$R^2 = 900 + 1600 - 2400(-0.5) = 2500 + 1200 = 3700$$
$$R = \\sqrt{3700} \\approx 60.8 \\text{ N}$$

Wait — actually for the parallelogram law, the angle between the forces in the triangle is the supplement:

$$R^2 = 30^2 + 40^2 + 2(30)(40)\\cos 60° = 900 + 1600 + 1200 = 3700$$
$$R \\approx 60.8 \\text{ N}$$

### Direction of the Resultant

Use Law of Sines to find the angle $\\alpha$ the resultant makes with $F_1$:

$$\\frac{\\sin \\alpha}{40} = \\frac{\\sin 60°}{60.8}$$
$$\\sin \\alpha = \\frac{40(0.866)}{60.8} \\approx 0.570 \\implies \\alpha \\approx 34.7°$$
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To find the distance across a lake using triangulation, you need at minimum:',
            options: [
              'One distance and one angle',
              'One distance and two angles',
              'Two distances and one angle',
              'Three distances'
            ],
            correctAnswer: 1,
            explanation: 'With one baseline distance and two angles (ASA), you can use Law of Sines to find all other distances.'
          },
          {
            question: 'Two forces of 10 N and 10 N act at 120° to each other. The resultant is:',
            options: [
              '$20$ N',
              '$10$ N',
              '$10\\sqrt{3}$ N',
              '$10\\sqrt{2}$ N'
            ],
            correctAnswer: 1,
            explanation: '$R^2 = 100 + 100 + 2(100)\\cos 120° = 200 + 200(-0.5) = 200 - 100 = 100$. $R = 10$ N.'
          },
          {
            question: 'A surveyor measures a baseline of 500 m. The angles to a tower from each end are 55° and 68°. Which law finds the distances to the tower?',
            options: [
              'Law of Cosines only',
              'Law of Sines',
              'Pythagorean theorem',
              'None of the above'
            ],
            correctAnswer: 1,
            explanation: 'With ASA data (two angles + included side), use Law of Sines after finding the third angle.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Solve Applications** 🧮

Round to nearest integer.

**1)** Baseline $AB = 100$ m. Angles to target $C$: $\\angle A = 70°$, $\\angle B = 65°$. Find $\\angle C$ in degrees. (e.g., $\\angle C = 180 - 72 - 63 = 45$)

**2)** Two ships 12 km apart at an angle of 90° from a port. Find the distance between the ships. (e.g., $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$)

**3)** Forces of 50 N and 50 N at 60° to each other. Resultant $R = \\sqrt{50^2 + 50^2 + 2(50)(50)\\cos 60°}$. Find $R$ to nearest integer. (e.g., $\\sqrt{100 + 100 + 100} \\approx 17$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '17', '87'],
        hint1: '$\\angle C = 180° - 70° - 65° = 45°$.',
        hint2: '$\\sqrt{12^2 + 12^2 - 2(12)(12)\\cos 90°} = \\sqrt{288} \\approx 17$. Wait, re-read: two ships are at distances from a port... Using $\\sqrt{144 + 144} = \\sqrt{288} \\approx 17$.',
        hint3: '$R^2 = 2500 + 2500 + 5000(0.5) = 7500$. $R = \\sqrt{7500} \\approx 87$.',
        explanation: '1) $45°$. 2) $\\sqrt{288} \\approx 17$ km. 3) $\\sqrt{7500} \\approx 87$ N.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Application Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Finding distance across a river with a baseline and two angles is an example of',
            options: ['Triangulation', 'Trilateration', 'Force resolution', 'Dead reckoning']
          },
          {
            label: 'For SAS navigation problems, start with',
            options: ['Law of Sines', 'Law of Cosines', 'Heron\'s formula', 'Pythagorean theorem']
          },
          {
            label: 'The resultant of two equal forces $F$ at angle $\\theta$ has magnitude',
            options: ['$2F$', '$F\\sqrt{2}$', '$F\\sqrt{2 + 2\\cos\\theta}$', '$2F\\cos\\theta$']
          },
          {
            label: 'When computing a force resultant, the triangle angle is the ____ of the angle between forces',
            options: ['Same as', 'Supplement of', 'Complement of', 'Double of']
          }
        ],
        correctAnswers: ['Triangulation', 'Law of Cosines', '$F\\sqrt{2 + 2\\cos\\theta}$', 'Supplement of'],
        hint1: 'Triangulation uses angles from known positions.',
        hint2: 'SAS has no complete pair — start with Law of Cosines.',
        hint3: '$R^2 = F^2 + F^2 + 2F^2\\cos\\theta = 2F^2(1+\\cos\\theta)$.',
        explanation: 'Triangulation for baseline+angles. SAS → Law of Cosines. Equal forces: $R = F\\sqrt{2+2\\cos\\theta}$. Force triangle uses supplement.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A plane flies 300 km at bearing 040°, then 200 km at bearing 130°. The angle at the turning point in the triangle is:',
            options: [
              '$90°$',
              '$130°$',
              '$40°$',
              '$50°$'
            ],
            correctAnswer: 0,
            explanation: 'The turn angle: from bearing 040° to 130°, the change is $130° - 40° = 90°$. The interior angle of the triangle at the turning point is $180° - 90° = 90°$.'
          },
          {
            question: 'What is the distance from start to end for the plane above?',
            options: [
              '$\\sqrt{300^2 + 200^2} \\approx 361$ km',
              '$500$ km',
              '$100$ km',
              '$250$ km'
            ],
            correctAnswer: 0,
            explanation: 'With a $90°$ angle: $d = \\sqrt{300^2 + 200^2} = \\sqrt{130000} \\approx 360.6$ km.'
          }
        ]
      }
    }
  ]
};
