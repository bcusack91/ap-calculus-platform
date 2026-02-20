export const calcbcPolarPart6Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar6-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'polar6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Polar Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area inside $r = 2$ but outside $r = 2\\cos\\theta$.',
            options: ['$\\pi + 2$', '$3\\pi$', '$\\pi$', '$4\\pi - 2$'],
            correctAnswer: 0,
            explanation: 'Area of full circle $r = 2$ is $4\\pi$. Area of $r = 2\\cos\\theta$ is $\\pi$. Area inside $r = 2$ outside $r = 2\\cos\\theta$: need to compute $\\frac{1}{2}\\int(4 - 4\\cos^2\\theta)\\,d\\theta$ on appropriate interval. This gives $\\pi + 2$.'
          }
        ]
      }
    },
    {
      id: 'polar6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
