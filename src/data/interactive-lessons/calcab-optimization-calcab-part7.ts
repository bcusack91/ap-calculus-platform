export const calcabOptimizationPart7Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt7-intro',
      type: 'text' as const,
      content: `# Optimization — Review

**Part 7 of 7 — Comprehensive Assessment**

### Optimization Checklist
1. \\u2705 Define variables and draw a picture
2. \\u2705 Write the objective function
3. \\u2705 Use constraint to reduce to one variable
4. \\u2705 Find critical points
5. \\u2705 Verify max/min (Second Derivative Test or domain check)`
    },
    {
      id: 'opt7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'A rectangular page has margins of 1 inch on all sides. The printable area (inside margins) must be 24 sq in. Find the page width that minimizes total paper area.',
            options: ['$\\sqrt{24} + 2$ inches', '$6$ inches', '$4 + 2 = 6$ inches', '$2\\sqrt{6} + 2$ inches'],
            correctAnswer: 3,
            explanation: 'Print area: $(w-2)(h-2) = 24$, so $h = \\frac{24}{w-2} + 2$. Total area: $A = wh = w(\\frac{24}{w-2}+2)$. Using calculus, the minimum occurs at $w = 2 + 2\\sqrt{6}$.'
          }
        ]
      }
    },
    {
      id: 'opt7-summary',
      type: 'text' as const,
      content: `### Optimization — Complete! \\u2705

You have mastered:
- \\u2705 Setting up objective functions and constraints
- \\u2705 Geometric, business, and distance optimization
- \\u2705 Verifying solutions using calculus tests`
    }
  ]
};
