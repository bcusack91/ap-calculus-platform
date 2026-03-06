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
- Geometry problems with dilations`
    },
    {
      id: 'rp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scale Factors** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two similar rectangles have lengths 4 cm and 12 cm. If the area of the smaller is 20 cm², what is the area of the larger?',
            options: ['$180$ cm²', '$60$ cm²', '$240$ cm²', '$80$ cm²'],
            correctAnswer: 0,
            explanation: 'Scale factor $k = 12/4 = 3$. Area scales by $k^2 = 9$. Larger area $= 20 \\times 9 = 180$ cm².'
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
      id: 'rp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Lengths → $k$, Areas → $k^2$, Volumes → $k^3$
- Find the scale factor by comparing corresponding lengths
- Map/model problems: set up a proportion with the scale
- This length/area/volume relationship is a frequent SAT topic`
    }
  ]
};
