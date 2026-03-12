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
    }
  ]
};