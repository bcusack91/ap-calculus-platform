export const lessonData = {
  topicSlug: 'sat-linear-inequalities-graphs-core-skills',
  sections: [
    {
      id: 'lig-core-p2-recap',
      type: 'text' as const,
      content: `# Graphing Inequalities: Practice

**Part 2 of 2 — Practice**

### The steps, every time

1. Make sure $y$ is alone on the left side.
2. Pick the line type. A sign with a line underneath ($\\geq$ or $\\leq$) gets a **solid** boundary line. A sign without one ($>$ or $<$) gets a **dashed** boundary line.
3. Pick the shading. $y >$ or $y \\geq$ shades **above**. $y <$ or $y \\leq$ shades **below**.
4. If you are unsure, use the **test point**.

### The test point

A point is in the shaded region if it makes the inequality true. So pick an easy point, put its numbers in, and see what happens.

The easiest point to test is $(0, 0)$, because zeros are simple to work with.

**Worked example.** Is $(0, 0)$ in the solution set of $y < x + 4$?

Put $x = 0$ and $y = 0$ into the inequality:

$0 < 0 + 4$

$0 < 4$

That statement is true, so the point $(0, 0)$ **is** in the shaded region, and you shade the side of the line that contains the origin.

If the statement had come out false, you would shade the other side instead.`
    },
    {
      id: 'lig-core-p2-q1',
      type: 'quiz' as const,
      question: 'Is the point $(0, 0)$ in the solution set of $y < x + 6$?',
      options: ['No, because $0$ is not less than $6$', 'Yes, because $0 < 6$ is true', 'It is on the boundary line', 'There is not enough information'],
      correctAnswer: 1,
      explanation: 'The answer is yes. Put $x = 0$ and $y = 0$ into the inequality to get $0 < 0 + 6$, which is $0 < 6$. That statement is true, so the point $(0, 0)$ is inside the shaded region. Since $0$ really is smaller than $6$, the first choice states something that is not true.'
    },
    {
      id: 'lig-core-p2-q2',
      type: 'quiz' as const,
      question: 'Which point is in the solution region of $y > x + 1$?',
      options: ['$(2, 1)$', '$(3, 3)$', '$(1, 0)$', '$(0, 5)$'],
      correctAnswer: 3,
      explanation: 'The answer is $(0, 5)$. Put $x = 0$ and $y = 5$ into the inequality: $5 > 0 + 1$, which is $5 > 1$. That is true, so this point works. Testing $(3, 3)$ gives $3 > 4$, which is false, and the other two points fail the same way.'
    },
    {
      id: 'lig-core-p2-q3',
      type: 'quiz' as const,
      question: 'How is $x \\geq 2$ graphed on the coordinate plane?',
      options: ['A vertical line at $x = 2$, shaded to the right', 'A vertical line at $x = 2$, shaded to the left', 'A horizontal line at $y = 2$, shaded above', 'A slanted line through the origin'],
      correctAnswer: 0,
      explanation: 'The answer is a vertical line at $x = 2$ with shading to the right. The boundary is the vertical line where $x$ equals $2$. Numbers greater than $2$ sit to the right on the $x$-axis, so that is the side you shade. The sign $\\geq$ also tells you the line itself is solid, because points on it are included.'
    },
    {
      id: 'lig-core-p2-q4',
      type: 'quiz' as const,
      question: 'A boundary line has slope $2$ and $y$-intercept $6$, so its equation is $y = 2x + 6$. Which inequality describes the points above the line, not including the line itself?',
      options: ['$y \\geq 2x + 6$', '$y < 2x + 6$', '$y > 2x + 6$', '$y \\leq 2x + 6$'],
      correctAnswer: 2,
      explanation: 'The answer is $y > 2x + 6$. "Above" means larger $y$ values, so the sign points the greater-than way. "Not including the line" means the boundary points are left out, so there is no small line underneath the sign and the graph uses a dashed line. The choice $y \\geq 2x + 6$ shades the right region but wrongly includes the line.'
    }
  ]
}
