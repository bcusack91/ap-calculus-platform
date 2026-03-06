export const satGeometryPart7Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo7-intro',
      type: 'text' as const,
      content: `# Geometry Review & SAT Strategy

**Part 7 of 7 — Comprehensive Review**

### Formula Quick Reference

| Category | Key Formulas |
|---|---|
| **Angles** | Triangle sum $= 180°$, exterior angle $=$ sum of remotes |
| **Triangles** | $A = \\frac{1}{2}bh$, Pythagorean theorem: $a^2 + b^2 = c^2$ |
| **Special △** | 30-60-90: $x, x\\sqrt{3}, 2x$; 45-45-90: $x, x, x\\sqrt{2}$ |
| **Circles** | $C = 2\\pi r$, $A = \\pi r^2$, sector $= \\frac{\\theta}{360}$ of full |
| **Volume** | Cylinder $= \\pi r^2 h$, Cone $= \\frac{1}{3}\\pi r^2 h$, Sphere $= \\frac{4}{3}\\pi r^3$ |
| **Coordinate** | $d = \\sqrt{\\Delta x^2 + \\Delta y^2}$, circle: $(x-h)^2 + (y-k)^2 = r^2$ |

### Common SAT Geometry Question Patterns

1. **"Find the missing angle"** → Use angle sum rules
2. **"Find the area of the shaded region"** → Total minus unshaded
3. **"Similar triangles"** → Set up proportions
4. **"Volume word problem"** → Identify the shape, plug into formula
5. **"Coordinate geometry"** → Distance, midpoint, or circle equation

### Strategy: Draw It

If the SAT doesn't give you a figure, **draw one yourself**. Even a rough sketch helps you avoid errors.

If they DO give you a figure:
- **"Not drawn to scale"** → Don't trust visual proportions
- **"Figure drawn to scale"** → You can estimate to eliminate wrong answers

### Top 3 Geometry Mistakes

1. Using the wrong formula (mixing up circumference and area)
2. Forgetting to take the square root when finding radius from area
3. Not converting units (e.g., diameter given but formula needs radius)`
    },
    {
      id: 'geo7-quiz',
      type: 'multiple-choice' as const,
      content: '**Geometry Comprehensive Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A right triangle has legs 5 and 12. What is the area?',
            options: ['$30$', '$60$', '$13$', '$17$'],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{1}{2}(5)(12) = 30$. Note: the hypotenuse is $13$ (5-12-13 triple) but that\'s the perimeter trap—the question asks for area.'
          },
          {
            question: 'A cylinder has volume $200\\pi$ and radius 5. What is its height?',
            options: ['$8$', '$40$', '$4$', '$10$'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h$ → $200\\pi = \\pi(25)h$ → $h = \\frac{200}{25} = 8$.'
          },
          {
            question: 'Two similar triangles have areas 16 and 64. What is the ratio of their corresponding sides?',
            options: ['$1:2$', '$1:4$', '$1:8$', '$4:16$'],
            correctAnswer: 0,
            explanation: 'Area ratio $= $ (side ratio)$^2$. So $\\frac{16}{64} = \\frac{1}{4} = k^2$, meaning $k = \\frac{1}{2}$. Side ratio is $1:2$.'
          }
        ]
      }
    }
  ]
};