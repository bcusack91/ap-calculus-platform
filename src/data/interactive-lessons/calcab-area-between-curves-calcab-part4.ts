export const calcabAreaCurvesPart4Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area4-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 4 of 7 \u2014 Multiple Regions**

When three or more curves define a region, identify which curves bound each piece of the region separately.`
    },
    {
      id: 'area4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multi-Region Area** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the total area bounded by $y = x$, $y = 2-x$, and $y = 0$.',
            options: ['$1$', '$2$', '$\\frac{3}{2}$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'The three lines form a triangle with vertices $(0,0)$, $(2,0)$, $(1,1)$. Area = $\\frac{1}{2}(2)(1) = 1$.'
          }
        ]
      }
    },
    {
      id: 'area4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Sketch the region! Identify all intersection points.
2. Break complex regions into simpler sub-regions if needed.`
    }
  ]
};
