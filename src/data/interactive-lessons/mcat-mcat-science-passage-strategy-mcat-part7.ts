export const mcatSciPassagePart7Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp7-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 7 of 7 — Psych/Soc Passage Tactics**

### Psych/Soc Passage Features

- Describe research studies in psychology or sociology
- Often include statistics (mean, standard deviation, p-values)
- Test application of theories to new scenarios

### Common Statistical Concepts

| Concept | Meaning |
|---------|---------|
| **Mean** | Average |
| **Standard deviation** | Spread of data around the mean |
| **p-value** | Probability result occurred by chance ($p < 0.05$ = significant) |
| **Correlation ($r$)** | Strength and direction of linear relationship ($-1$ to $+1$) |
| **Confidence interval** | Range likely to contain true value |

### Psych/Soc Question Strategy

1. **Identify the theory being tested**: What psychological/sociological concept applies?
2. **Match the scenario to the theory**: Don't just know definitions — apply them
3. **Watch for bait answers**: Answers that use correct psych terms but wrong context
4. **Eliminate**: If two answers are similar, usually neither is correct — look for the one that's distinctly right

### Research Methods in Psych/Soc Passages

- **Operationalization**: How abstract concepts are measured (e.g., "happiness" measured by survey score)
- **Sampling bias**: Sample doesn't represent population
- **Self-report bias**: Participants may not report truthfully
- **Hawthorne effect**: Behavior changes because subjects know they're being observed`
    },
    {
      id: 'sp7-worked',
      type: 'text' as const,
      content: `### Worked Example — Interpreting Stats in a Psych/Soc Passage

> *"Researchers surveyed 400 adults and found a correlation of $r = -0.45$ ($p = 0.001$) between daily social-media use and self-reported life satisfaction. They conclude that social media reduces life satisfaction."*

**Step 1 — Read $r$ correctly.** $r = -0.45$ means a **moderate, negative** linear relationship: more social-media use is associated with *lower* satisfaction. The sign gives direction; the magnitude ($0.45$) gives a moderate strength on the $-1$ to $+1$ scale.

**Step 2 — Read the p-value correctly.** $p = 0.001$ means there is only a 0.1% chance of seeing an association this strong if the true relationship were zero — it is **statistically significant**. Significance does **not** mean the effect is large or causal.

**Step 3 — Spot the causal overreach.** This is a *correlational* survey. The conclusion "social media reduces satisfaction" asserts causation the design can't support. Plausible alternatives: less-satisfied people *seek out* social media (reverse causation), or a confounder (e.g., loneliness) drives both.

**Step 4 — Note method limitations.** "Self-reported" satisfaction and "self-reported" use both invite **self-report bias**, and a single survey is a snapshot (cross-sectional). The MCAT answer flags these limits rather than endorsing the causal claim.

**Bottom line:** A significant, moderate correlation supports an *association*, never a one-directional cause — exactly the distinction Psych/Soc passages test.`
    },
    {
      id: 'sp7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Psych/Soc Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study on exercise and mood has $p = 0.03$. This means:`,
            options: [`There is a 3% probability the results occurred by chance — the result is statistically significant`, `There is a 97% chance the hypothesis is true`, `The effect size is large`, `The study has high reliability`],
            correctAnswer: 0,
            explanation: `$p < 0.05$ means statistically significant — there's less than a 5% chance the results are due to random chance. However, p-value does NOT tell you effect size, clinical significance, or the probability the hypothesis is true (common MCAT trap).`
          },
          {
            question: `In the worked example, $r = -0.45$ is best described as:`,
            options: [`A moderate negative correlation — as one variable rises, the other tends to fall`, `A strong positive correlation`, `No relationship at all`, `Proof that social media causes lower satisfaction`],
            correctAnswer: 0,
            explanation: `The negative sign indicates an inverse relationship and the magnitude (0.45) indicates moderate strength. Correlation describes association and direction, not causation.`
          },
          {
            question: `Why does the passage's conclusion that "social media reduces satisfaction" overreach?`,
            options: [`The study is correlational, so reverse causation or a confounder could explain the association`, `The p-value is too small to trust`, `A correlation of $-0.45$ is too strong to be real`, `Surveys can never measure satisfaction`],
            correctAnswer: 0,
            explanation: `Correlational designs cannot establish direction of causation. Less-satisfied people might use more social media (reverse causation), or a third variable could drive both. A significant correlation supports association, not a causal claim.`
          }
        ]
      }
    },
    {
      id: 'sp7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Methods & Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `Defining "stress" as a participant's score on a validated 10-item questionnaire is an example of:`,
            options: [`Operationalization — turning an abstract construct into a measurable variable`, `Sampling bias`, `The Hawthorne effect`, `A confounding variable`],
            correctAnswer: 0,
            explanation: `Operationalization specifies how an abstract concept (stress) is concretely measured (questionnaire score). It is essential for testing hypotheses and is frequently probed in Psych/Soc passages.`
          },
          {
            question: `Workers increase their productivity simply because they know researchers are watching them. This illustrates:`,
            options: [`The Hawthorne effect`, `Self-report bias`, `Operationalization`, `Random sampling`],
            correctAnswer: 0,
            explanation: `The Hawthorne effect is a change in behavior that results from awareness of being observed, independent of any experimental manipulation. It threatens the validity of observational studies.`
          },
          {
            question: `A phone survey conducted only on weekday mornings likely suffers from:`,
            options: [`Sampling bias — the sample excludes people unavailable at that time (e.g., daytime workers)`, `The Hawthorne effect`, `High external validity`, `Operationalization error only`],
            correctAnswer: 0,
            explanation: `Restricting calls to weekday mornings systematically misses people who work during those hours, so the sample is not representative of the broader population — a form of sampling bias that limits generalizability.`
          }
        ]
      }
    },
    {
      id: 'sp7-summary',
      type: 'text' as const,
      content: `### Science Passage Strategy — Complete! ✅

Master these passage-reading and question-answering strategies across all three science sections. Read $r$ for direction and strength, read p-values for significance only, and never let a correlational study tempt you into a causal claim. The MCAT rewards methodical reading, strategic elimination, and the ability to connect passage data with your content knowledge.`
    }
  ]
};
