export const mcatCarsPsgPart2Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp2-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 2 of 7 — Social Science Passages**

### Social Science Topics on CARS

- **History**: Social movements, political events, cultural shifts
- **Economics**: Theories, policy debates, market analysis
- **Political Science**: Governance, democracy, rights
- **Psychology/Sociology**: Social behavior, cultural norms (non-scientific)
- **Anthropology**: Cultural practices, human societies

### How Social Science Differs from Humanities

| Feature | Humanities | Social Sciences |
|---------|-----------|----------------|
| Evidence | Reasoning, textual analysis | Data, case studies, historical examples |
| Tone | Often more subjective | Often aims for objectivity |
| Arguments | Philosophical/theoretical | Empirical/evidence-based |

### Strategy for Social Science Passages

- **Identify the research question** or central issue
- **Note cause-and-effect claims** — authors often argue X caused Y
- **Pay attention to dates and context** — historical arguments depend on timeline
- **Watch for bias** — even "objective" passages have an author viewpoint`
    },
    {
      id: 'cp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Social Science Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A social science passage presents data showing a correlation between two variables. The author concludes one causes the other. A good critical reader would:',
            options: ['Note that the author may be conflating correlation with causation — a potential weakness', 'Accept the conclusion since data supports it', 'Ignore the data and focus on the argument', 'Assume the author is wrong without evidence'],
            correctAnswer: 0,
            explanation: 'Correlation ≠ causation is a fundamental critical thinking principle. CARS questions often test whether you can identify logical weaknesses, including unwarranted causal claims.'
          }
        ]
      }
    },
    {
      id: 'cp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Social science passages use evidence/data more than humanities
- Watch for cause-effect claims — are they justified?
- Note the historical/social context of claims
- Even data-driven passages reflect the author's perspective`
    }
  ]
};
