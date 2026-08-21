export const lessonData = {
  topicSlug: 'sat-linear-inequalities-graphs-core-skills',
  sections: [
    {
      id: 'lig-core-p1-intro',
      type: 'text' as const,
      content: `# Graphing Inequalities: The Basics

**Part 1 of 2 — The Basics**

An equation like $y = 2x + 1$ draws a **line**. An inequality like $y > 2x + 1$ draws a whole **region** — a shaded area on one side of that line.

Every one of these graphs has exactly two decisions to make.

### Decision 1: Solid line or dashed line?

The line itself is called the **boundary line**. You draw it by pretending the inequality sign is an equals sign.

- $\\geq$ or $\\leq$ (the ones with the little line underneath) mean the points **on** the line count. Draw a **solid** line.
- $>$ or $<$ (no line underneath) mean the points on the line do **not** count. Draw a **dashed** line.

An easy way to remember it: the line under the sign becomes a solid line on the graph.

### Decision 2: Shade above or shade below?

Get $y$ by itself on the left, then look at the sign:

- $y >$ or $y \\geq$ means shade **above** the line.
- $y <$ or $y \\leq$ means shade **below** the line.

"Greater" means higher up on the graph, so you shade upward.

### Worked example

Graph $y < 2x + 1$.

**Step 1.** Draw the boundary line $y = 2x + 1$. The sign is $<$ with no line underneath, so the boundary line is **dashed**.

**Step 2.** The sign is $y <$, so shade **below** the line.

That is the finished graph: a dashed line with everything below it shaded.`
    },
    {
      id: 'lig-core-p1-q1',
      type: 'quiz' as const,
      question: 'When graphing $y \\geq 3x + 1$, what kind of boundary line should you draw?',
      options: ['Dashed', 'No line at all', 'A double line', 'Solid'],
      correctAnswer: 3,
      explanation: 'The answer is a solid line. The sign $\\geq$ has a small line underneath it, which means "or equal to." Points sitting right on the boundary line make the inequality true, so those points count and the line is drawn solid. A dashed line is used only for $>$ and $<$, where the boundary points do not count.'
    },
    {
      id: 'lig-core-p1-q2',
      type: 'quiz' as const,
      question: 'When graphing $y < x - 4$, what kind of boundary line should you draw?',
      options: ['Dashed', 'Solid', 'A double line', 'No line at all'],
      correctAnswer: 0,
      explanation: 'The answer is a dashed line. The sign $<$ has no line underneath it, so points sitting right on the boundary do not make the inequality true. A dashed line shows that those points are left out. A solid line would be used for $\\leq$, which does include the boundary points.'
    },
    {
      id: 'lig-core-p1-q3',
      type: 'quiz' as const,
      question: 'To graph $y > 2x + 3$, where do you shade?',
      options: ['On the line only', 'Above the line', 'Below the line', 'Both sides of the line'],
      correctAnswer: 1,
      explanation: 'The answer is above the line. The variable $y$ is already alone on the left, and the sign is $>$, which means "greater than." Greater $y$ values sit higher up on the graph, so you shade the region above the boundary line. Shading below would be right for $y < 2x + 3$.'
    },
    {
      id: 'lig-core-p1-q4',
      type: 'quiz' as const,
      question: 'A line has the equation $y = x + 5$. Which inequality describes all the points that are on the line or below it?',
      options: ['$y > x + 5$', '$y \\geq x + 5$', '$y \\leq x + 5$', '$y < x + 5$'],
      correctAnswer: 2,
      explanation: 'The answer is $y \\leq x + 5$. "Below" means smaller $y$ values, which calls for a less-than sign. "On the line" means the boundary points are included, which calls for the small line underneath the sign. Putting those together gives $\\leq$. The choice $y < x + 5$ covers the region below but leaves the line itself out.'
    }
  ]
}
