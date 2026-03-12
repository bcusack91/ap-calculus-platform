export const satGeometryPart5Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo5-intro',
      type: 'text' as const,
      content: `# Volume and Surface Area

**Part 5 of 7 — 3D Figures**

The SAT reference sheet includes these formulas, but knowing them cold saves time.

### Volume Formulas

| Shape | Volume |
|---|---|
| Rectangular prism | $V = lwh$ |
| Cylinder | $V = \\pi r^2 h$ |
| Cone | $V = \\frac{1}{3}\\pi r^2 h$ |
| Sphere | $V = \\frac{4}{3}\\pi r^3$ |
| Pyramid | $V = \\frac{1}{3}Bh$ (where $B$ = base area) |

### Surface Area

| Shape | Surface Area |
|---|---|
| Rectangular prism | $SA = 2(lw + lh + wh)$ |
| Cylinder | $SA = 2\\pi r^2 + 2\\pi rh$ |
| Sphere | $SA = 4\\pi r^2$ |

### Common SAT Problem: Filling and Draining

"A cylindrical tank has radius 3 ft and height 10 ft. Water fills it at 2 cubic feet per minute. How long until it's full?"

$$V = \\pi(3)^2(10) = 90\\pi \\approx 282.7 \\text{ ft}^3$$
$$\\text{Time} = \\frac{90\\pi}{2} = 45\\pi \\approx 141.4 \\text{ minutes}$$

### Scaling Rule for 3D

If dimensions are scaled by factor $k$:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$
- **Volumes** scale by $k^3$

**Example:** If you double all dimensions of a box, its volume increases by $2^3 = 8$ times.`
    },
    {
      id: 'geo5-quiz',
      type: 'multiple-choice' as const,
      content: '**Volume & Surface Area Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cone and a cylinder have the same radius and height. The volume of the cone is:',
            options: ['$\\frac{1}{3}$ of the cylinder\'s volume', '$\\frac{1}{2}$ of the cylinder\'s volume', 'Equal to the cylinder\'s volume', '$\\frac{2}{3}$ of the cylinder\'s volume'],
            correctAnswer: 0,
            explanation: 'Cone volume $= \\frac{1}{3}\\pi r^2 h$, cylinder volume $= \\pi r^2 h$. The cone is exactly $\\frac{1}{3}$ of the cylinder.'
          },
          {
            question: 'A sphere has surface area $100\\pi$. What is its volume?',
            options: ['$\\frac{500\\pi}{3}$', '$\\frac{400\\pi}{3}$', '$500\\pi$', '$100\\pi$'],
            correctAnswer: 0,
            explanation: '$SA = 4\\pi r^2 = 100\\pi$ → $r^2 = 25$ → $r = 5$. Volume $= \\frac{4}{3}\\pi(5)^3 = \\frac{500\\pi}{3}$.'
          },
          {
            question: 'A model building is a 1:50 scale replica. If the model has volume 8 cubic inches, the real building has volume:',
            options: ['$1{,}000{,}000$ cubic inches', '$400$ cubic inches', '$125{,}000$ cubic inches', '$50{,}000$ cubic inches'],
            correctAnswer: 0,
            explanation: 'Volume scales by $k^3$. Scale factor is 50, so real volume $= 8 \\times 50^3 = 8 \\times 125{,}000 = 1{,}000{,}000$ cubic inches.'
          }
        ]
      }
    }
  ]
};