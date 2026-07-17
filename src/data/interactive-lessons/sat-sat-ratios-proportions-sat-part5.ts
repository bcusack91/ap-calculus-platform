export const satRatiosPart5Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp5-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 5 of 7 — Scale Factors and Similar Figures**

### Scale Factor

If two figures are similar with a scale factor of $k$:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$
- **Volumes** scale by $k^3$

### Similar Triangles

Two triangles are similar if they have the same angles (AA similarity).

If triangle $A$ has sides 3, 4, 5 and triangle $B$ has a side of 6 corresponding to 3:
- Scale factor $k = 6/3 = 2$
- Other sides of $B$: $4 \\times 2 = 8$ and $5 \\times 2 = 10$
- Area of $B$ = Area of $A \\times k^2 = A_{\\text{area}} \\times 4$

### Map/Model Problems

"On a map, 1 inch = 25 miles. Two cities are 3.5 inches apart."

Distance $= 3.5 \\times 25 = 87.5$ miles.

### SAT Application

Scale factors appear in:
- Similar triangle problems
- Map and blueprint questions
- Geometry problems with dilations

---

### Worked Example 1 — Area from Scale Factor

**Two similar pentagons have perimeters of 20 cm and 30 cm. If the smaller has an area of 50 $cm^{2}$, what is the area of the larger?**

| Step | Work |
|------|------|
| Scale factor | $k = 30/20 = 1.5$ |
| Area factor | $k^2 = 2.25$ |
| Larger area | $50 × 2.25 = 112.5$ $cm^{2}$ |

### Worked Example 2 — Volume from Scale Factor

**A model car is built at 1:24 scale. If the model holds 0.5 mL of fuel in its tank, what does the actual tank hold?**

| Step | Work |
|------|------|
| Scale factor | $k = 24$ |
| Volume factor | $k^3 = 13{,}824$ |
| Actual volume | $0.5 × 13{,}824 = 6{,}912$ mL $≈ 6.9$ liters |`
    },
    {
      id: 'rp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scale Factors** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two similar rectangles have lengths 4 cm and 12 cm. If the area of the smaller is 20 $cm^{2}$, what is the area of the larger?',
            options: ['$180$ $cm^{2}$', '$60$ $cm^{2}$', '$240$ $cm^{2}$', '$80$ $cm^{2}$'],
            correctAnswer: 0,
            explanation: 'Scale factor $k = 12/4 = 3$. Area scales by $k^2 = 9$. Larger area $= 20 \\times 9 = 180$ $cm^{2}$.'
          },
          {
            question: 'On a scale model, 2 cm represents 5 meters. If the model building is 14 cm tall, how tall is the actual building?',
            options: ['$35$ meters', '$28$ meters', '$5.6$ meters', '$56$ meters'],
            correctAnswer: 0,
            explanation: '$14 \\times (5/2) = 35$ meters.'
          },
          {
            question: 'Two similar cones have radii 3 and 9. The ratio of their volumes is:',
            options: ['$1 : 27$', '$1 : 9$', '$1 : 3$', '$1 : 81$'],
            correctAnswer: 0,
            explanation: 'Scale factor $k = 9/3 = 3$. Volume ratio $= k^3 = 27$. So $1:27$.'
          }
        ]
      }
    },
    {
      id: 'rp5-text2',
      type: 'text' as const,
      content: `### Similar Triangles on the SAT

The SAT loves problems where you must first identify similar triangles, then set up a proportion.

### Worked Example 3

**A 6-foot person casts a 4-foot shadow. A tree next to them casts a 20-foot shadow. How tall is the tree?**

| Step | Work |
|------|------|
| Set up similar triangles | $\\frac{\\text{height}}{\\text{shadow}} = \\frac{6}{4}$ |
| Apply to tree | $\\frac{h}{20} = \\frac{6}{4}$ |
| Solve | $h = \\frac{6 × 20}{4} = 30$ feet |

### Worked Example 4

**On a map, the scale is 1 inch : 40 miles. Two cities are 6.5 inches apart on the map. A car travels at 65 mph. How long is the drive?**

| Step | Work |
|------|------|
| Actual distance | $6.5 × 40 = 260$ miles |
| Time | $260 ÷ 65 = 4$ hours |

### The Scale Factor Cheat Sheet

| What scales? | Factor |
|-------------|--------|
| Length, perimeter, height | $k$ |
| Area, surface area | $k^2$ |
| Volume, capacity, weight* | $k^3$ |

*Weight scales as $k^3$ when density is the same.`
    },
    {
      id: 'rp5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Applied Scale Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 5-foot child casts a 3-foot shadow. A flagpole casts a 21-foot shadow. How tall is the flagpole?',
            options: ['$35$ feet', '$12.6$ feet', '$63$ feet', '$7$ feet'],
            correctAnswer: 0,
            explanation: '$\\frac{h}{21} = \\frac{5}{3}$ → $h = 5 × 7 = 35$ feet.'
          },
          {
            question: 'Two similar cylinders have heights 4 and 10. If the smaller has surface area 48 $cm^{2}$, what is the larger\'s surface area?',
            options: ['$300$ $cm^{2}$', '$120$ $cm^{2}$', '$192$ $cm^{2}$', '$750$ $cm^{2}$'],
            correctAnswer: 0,
            explanation: '$k = 10/4 = 2.5$. Surface area $= 48 × (2.5)^2 = 48 × 6.25 = 300$ $cm^{2}$.'
          },
          {
            question: 'If you double every dimension of a box, by what factor does the volume increase?',
            options: ['$8$', '$2$', '$4$', '$6$'],
            correctAnswer: 0,
            explanation: 'Volume scales by $k^3 = 2^3 = 8$.'
          }
        ]
      }
    },
    {
      id: 'rp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**What Power of $k$?** 🔍\n\nFor each quantity, decide whether it scales by $k$, $k^2$, or $k^3$.',
      exercise: {
        dropdowns: [
          { label: 'The perimeter of a similar figure', options: ['k (linear)', '$k^{2}$ (area)', '$k^{3}$ (volume)', 'Does not scale'] },
          { label: 'The surface area of a similar solid', options: ['$k^{2}$ (area)', 'k (linear)', '$k^{3}$ (volume)', 'Does not scale'] },
          { label: 'The volume of a similar solid', options: ['$k^{3}$ (volume)', 'k (linear)', '$k^{2}$ (area)', 'Does not scale'] },
          { label: 'The angles of a similar figure', options: ['Does not scale (angles are equal)', 'k (linear)', '$k^{2}$ (area)', '$k^{3}$ (volume)'] }
        ],
        correctAnswers: ['k (linear)', '$k^{2}$ (area)', '$k^{3}$ (volume)', 'Does not scale (angles are equal)'],
        hint1: 'Perimeter is a sum of lengths — each length scales by $k$.',
        hint2: 'Surface area is a 2D measurement → $k^2$.',
        hint3: 'Volume is a 3D measurement → $k^3$.',
        explanation: 'Perimeter = sum of sides = $k$. Surface area = 2D → $k^2$. Volume = 3D → $k^3$. Angles stay the same in similar figures — that\'s what "similar" means!'
      }
    },
    {
      id: 'rp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Measurement | Scaling Factor | Example ($k = 3$) |
|------------|---------------|-------------------|
| Length | $k$ | $×3$ |
| Area | $k^2$ | $×9$ |
| Volume | $k^3$ | $×27$ |
| Angles | 1 (unchanged) | Same |

- Find $k$ by dividing corresponding lengths
- Shadow problems → similar triangles → set up proportion
- Map problems → multiply map distance by scale
- The SAT frequently combines scale factors with other ratio concepts`
    }
  ]
};
