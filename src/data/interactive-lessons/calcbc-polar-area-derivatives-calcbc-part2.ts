export const calcbcPolarAreaPart2Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa2-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Advanced Applications

**Part 2 of 7 \u2014 Finding Polar Intersections**

Intersection-finding in polar coordinates has a critical subtlety: two curves can meet at the origin at different $\\theta$-values.

### Method 1: Algebraic ($r_1 = r_2$)

Set $f(\\theta) = g(\\theta)$ and solve. This finds all intersections EXCEPT possibly the origin.

### Method 2: Check the Origin

If $f(\\theta_1) = 0$ and $g(\\theta_2) = 0$ for any $\\theta_1, \\theta_2$, both curves pass through the origin\u2014even though they are there at different parameter values.

### Method 3: Negative $r$ Intersections

Sometimes $f(\\theta) = -g(\\theta + \\pi)$ gives additional intersections, since $(r, \\theta)$ and $(-r, \\theta + \\pi)$ are the same point.`
    },
    {
      id: 'pa2-example',
      type: 'text' as const,
      content: `### Example: Intersections of $r = \\sin\\theta$ and $r = \\cos\\theta$

**Algebraic:** $\\sin\\theta = \\cos\\theta \\implies \\tan\\theta = 1 \\implies \\theta = \\pi/4$

At $\\theta = \\pi/4$: $r = \\sqrt{2}/2$. Point: $(\\sqrt{2}/2,\\, \\pi/4)$.

**Origin check:** $r = \\sin\\theta = 0$ at $\\theta = 0$. $r = \\cos\\theta = 0$ at $\\theta = \\pi/2$.

Both pass through the origin, but at different $\\theta$-values. Setting $\\sin\\theta = \\cos\\theta$ does NOT find this.

**Total intersections: $(\\sqrt{2}/2,\\, \\pi/4)$ and $(0, 0)$.**

> **AP Tip:** ALWAYS check whether both curves pass through the origin. This is the most commonly missed intersection on the BC exam.`
    },
    {
      id: 'pa2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$r = 1$ and $r = 2\\cos\\theta$ intersect at:',
            options: ['$\\theta = \\pm\\pi/3$ (two points, no origin)', '$\\theta = 0$ only', '$\\theta = \\pi/4$', 'They do not intersect'],
            correctAnswer: 0,
            explanation: '$2\\cos\\theta = 1 \\implies \\cos\\theta = 1/2 \\implies \\theta = \\pm\\pi/3$. Neither passes through the origin at $r = 0$ for valid intersection.'
          },
          {
            question: '$r = 1 - \\cos\\theta$ and $r = 1 + \\cos\\theta$ intersect at:',
            options: ['$\\theta = \\pi/2, 3\\pi/2$ and the origin', '$\\theta = 0, \\pi$ only', '$\\theta = \\pi/2$ only', 'Everywhere'],
            correctAnswer: 0,
            explanation: '$1-\\cos\\theta = 1+\\cos\\theta \\implies \\cos\\theta = 0 \\implies \\theta = \\pi/2, 3\\pi/2$. Both also pass through origin: $r = 0$ at $\\theta = 0$ and $\\theta = \\pi$ respectively.'
          },
          {
            question: 'The intersection at the origin is missed by $r_1 = r_2$ because:',
            options: ['The curves reach the origin at different $\\theta$-values', 'The origin has no angle', '$r$ cannot be zero', 'The curves are tangent'],
            correctAnswer: 0,
            explanation: 'Setting $r_1(\\theta) = r_2(\\theta)$ requires the SAME $\\theta$. At the origin, each curve has $r = 0$ at potentially different angles.'
          }
        ]
      }
    },
    {
      id: 'pa2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Intersection Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $r = \\sin(2\\theta)$ and $r = \\cos(2\\theta)$, how do you find intersections?',
            options: ['Set $\\sin(2\\theta) = \\cos(2\\theta)$ to get $\\tan(2\\theta) = 1$, plus check origin', 'Graph and guess', 'Only check the origin', 'Set $r_1 r_2 = 0$'],
            correctAnswers: ['Set $\\sin(2\\theta) = \\cos(2\\theta)$ to get $\\tan(2\\theta) = 1$, plus check origin'],
            hints: ['$\\tan(2\\theta) = 1$ gives $2\\theta = \\pi/4 + n\\pi$.'],
            explanation: '$2\\theta = \\pi/4 + n\\pi \\implies \\theta = \\pi/8, 5\\pi/8, 9\\pi/8, 13\\pi/8$. Also both pass through the origin (roses always do).'
          },
          {
            label: 'Two circles $r = a\\cos\\theta$ and $r = b\\sin\\theta$ always intersect at:',
            options: ['The origin and one other point', 'Two points (excluding origin)', 'Only the origin', 'Infinitely many points'],
            correctAnswers: ['The origin and one other point'],
            hints: ['$a\\cos\\theta = b\\sin\\theta \\implies \\tan\\theta = a/b$.'],
            explanation: 'Algebraically: one intersection at $\\theta = \\arctan(a/b)$. Plus both pass through the origin. Total: 2 intersections.'
          }
        ]
      }
    },
    {
      id: 'pa2-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the number of intersection points of $r = 2$ and $r = 3\\sin\\theta$ (for $0 \\le \\theta < 2\\pi$). Solve $3\\sin\\theta = 2$.',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: ['$\\sin\\theta = 2/3$. How many solutions in $[0, 2\\pi)$?', '$\\theta = \\arcsin(2/3)$ and $\\theta = \\pi - \\arcsin(2/3)$.'],
        explanation: '$\\sin\\theta = 2/3$ has two solutions in $[0, 2\\pi)$: $\\theta \\approx 0.7297$ and $\\theta \\approx 2.4119$. The circle $r = 2$ does not pass through the origin, so no additional intersection there.'
      }
    },
    {
      id: 'pa2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Always use TWO methods: algebraic ($r_1 = r_2$) AND origin check
- Consider negative $r$ intersections for completeness
- Roses and cardioids always pass through the origin
- Know your trig inverses to count solutions in $[0, 2\\pi)$

> **Next:** Part 3 covers **tangent lines to polar curves** in AP exam contexts.`
    }
  ]
};
