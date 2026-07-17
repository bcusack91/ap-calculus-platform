export const satGeometryPart4Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo4-intro',
      type: 'text' as const,
      content: `# Circles: Arc Length, Sector Area, Central Angles

**Part 4 of 7 — Circle Geometry**

### Circle Fundamentals

| Property | Formula |
|---|---|
| Circumference | $C = 2\\pi r = \\pi d$ |
| Area | $A = \\pi r^2$ |
| Arc length | $L = \\frac{\\theta}{360°} \\times 2\\pi r$ |
| Sector area | $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$ |

Where $\\theta$ is the central angle in degrees.

### The Proportion Rule

A central angle of $\\theta°$ creates an arc that is $\\frac{\\theta}{360}$ of the full circle. This fraction applies to BOTH arc length AND sector area.

**Example:** A circle with radius 10 has a central angle of $72°$.

- Arc length $= \\frac{72}{360} \\times 2\\pi(10) = \\frac{1}{5} \\times 20\\pi = 4\\pi$
- Sector area $= \\frac{72}{360} \\times \\pi(10)^2 = \\frac{1}{5} \\times 100\\pi = 20\\pi$

### Inscribed Angle Theorem

An inscribed angle is HALF the central angle that subtends the same arc.

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{Central angle}$$

**Special case:** An inscribed angle that subtends a diameter (semicircle) is always $90°$.

### Tangent Lines

A tangent to a circle is perpendicular to the radius at the point of tangency (`
    },
    {
      id: 'geo4-quiz',
      type: 'multiple-choice' as const,
      content: '**Circle Geometry Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circle has radius 12. What is the area of a sector with central angle $90°$?',
            options: ['$36\\pi$', '$144\\pi$', '$72\\pi$', '$12\\pi$'],
            correctAnswer: 0,
            explanation: 'Sector area $= \\frac{90}{360} \\times \\pi(12)^2 = \\frac{1}{4} \\times 144\\pi = 36\\pi$.'
          },
          {
            question: 'An inscribed angle measures $35°$. What is the measure of the central angle subtending the same arc?',
            options: ['$70°$', '$35°$', '$17.5°$', '$145°$'],
            correctAnswer: 0,
            explanation: 'Central angle $= 2 \\times$ inscribed angle $= 2 \\times 35° = 70°$.'
          },
          {
            question: 'A circle has circumference $20\\pi$. What is its area?',
            options: ['$100\\pi$', '$400\\pi$', '$10\\pi$', '$200\\pi$'],
            correctAnswer: 0,
            explanation: '$C = 2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi(10)^2 = 100\\pi$.'
          }
        ]
      }
    },
    {
      id: 'geo4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Step Circle Problems

### Worked Example 1: Arc Length from Context

| Step | Work |
|---|---|
| **Problem** | A clock's minute hand is 6 inches long. How far does the tip travel in 20 minutes? |
| **Central angle** | 20 min $= \\frac{20}{60} = \\frac{1}{3}$ of full rotation $= \\frac{1}{3} \\times 360° = 120°$ |
| **Arc length** | $L = \\frac{120}{360} \\times 2\\pi(6) = \\frac{1}{3} \\times 12\\pi = 4\\pi \\approx 12.57$ inches |

### Worked Example 2: Sector Area to Find Radius

| Step | Work |
|---|---|
| **Problem** | A sector with central angle $60°$ has area $24\\pi$. Find the radius. |
| **Set up** | $\\frac{60}{360} \\times \\pi r^2 = 24\\pi$ |
| **Simplify** | $\\frac{1}{6}\\pi r^2 = 24\\pi$ → $r^2 = 144$ |
| **Answer** | $r = 12$ |

### Key Circle Relationships

| Given | Find | Method |
|---|---|---|
| Radius | Circumference | $C = 2\\pi r$ |
| Circumference | Radius | $r = \\frac{C}{2\\pi}$ |
| Area | Radius | $r = \\sqrt{\\frac{A}{\\pi}}$ |
| Arc length + angle | Radius | $r = \\frac{L \\times 360}{2\\pi \\times \\theta}$ |
| Sector area + angle | Radius | $r = \\sqrt{\\frac{A_{\\text{sector}} \\times 360}{\\pi \\times \\theta}}$ |

### Radians on the SAT

Some SAT questions use radians instead of degrees:
- Full circle $= 2\\pi$ radians $= 360°$
- Arc length in radians: $L = r\\theta$
- Sector area in radians: $A = \\frac{1}{2}r^2\\theta$

**Conversion:** $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$`
    },
    {
      id: 'geo4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Circle Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A sector with central angle $\\frac{\\pi}{3}$ radians has arc length $5\\pi$. What is the radius?',
            options: ['$15$', '$5$', '$10$', '$3$'],
            correctAnswer: 0,
            explanation: '$L = r\\theta$ → $5\\pi = r \\cdot \\frac{\\pi}{3}$ → $r = 15$.'
          },
          {
            question: 'A circle has area $49\\pi$. A chord divides the circle into a minor arc of $120°$ and a major arc. What is the length of the major arc?',
            options: ['$\\frac{28\\pi}{3}$', '$\\frac{14\\pi}{3}$', '$14\\pi$', '$\\frac{49\\pi}{3}$'],
            correctAnswer: 0,
            explanation: '$r = 7$. Major arc angle $= 360° - 120° = 240°$. Arc length $= \\frac{240}{360} \\times 2\\pi(7) = \\frac{2}{3} \\times 14\\pi = \\frac{28\\pi}{3}$.'
          },
          {
            question: 'An inscribed angle subtends the same arc as a central angle of $100°$. What is the inscribed angle?',
            options: ['$50°$', '$100°$', '$200°$', '$80°$'],
            correctAnswer: 0,
            explanation: 'Inscribed angle $= \\frac{1}{2} \\times$ central angle $= \\frac{1}{2} \\times 100° = 50°$.'
          }
        ]
      }
    },
    {
      id: 'geo4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Circle Calculations** — Select the correct result.',
      exercise: {
        dropdowns: [
          'Circle with r = 8, central angle 90°. Arc length = [4π|8π|16π|2π]',
          'Circle with r = 10, central angle 36°. Sector area = [10π|36π|100π|20π]',
          'Inscribed angle subtending a semicircle = [90°|180°|45°|60°]',
          'Circle with circumference 18π. Radius = [9|18|36|6]'
        ],
        correctAnswers: ['4π', '10π', '90°', '9'],
        hint1: 'Arc length = (angle/360) × 2πr.',
        hint2: 'Sector area = (angle/360) × $\\pi r^{2}$.',
        hint3: 'An inscribed angle subtending a diameter (semicircle) is always 90°.',
        explanation: 'Arc: (90/360)(2π×8) = (1/4)(16π) = 4π. Sector: (36/360)(π×100) = (1/10)(100π) = 10π. Semicircle inscribed angle = 90° (Thales\' theorem). Circumference: 2πr = 18π → r = 9.'
      }
    },
    {
      id: 'geo4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary: Circle Geometry

| Property | Formula | Key Relationship |
|---|---|---|
| Circumference | $C = 2\\pi r$ | $r = C/(2\\pi)$ |
| Area | $A = \\pi r^2$ | $r = \\sqrt{A/\\pi}$ |
| Arc length (deg) | $\\frac{\\theta}{360} \\times 2\\pi r$ | Fraction of circumference |
| Sector area (deg) | $\\frac{\\theta}{360} \\times \\pi r^2$ | Same fraction of area |
| Arc length (rad) | $L = r\\theta$ | Simpler in radians |
| Inscribed angle | $= \\frac{1}{2} \\times$ central angle | Inscribed in semicircle $= 90°$ |
| Tangent line | $\\perp$ to radius | Creates right angle at tangent point |

### SAT Strategy
- The **fraction** $\\frac{\\theta}{360}$ is the same for both arc length and sector area.
- If the SAT gives you arc length, work backward to find radius or angle.
- Watch for radian vs. degree — the formulas change.

*Next: Volume and surface area of 3D figures →*`
    }
  ]
};