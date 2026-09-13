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
            options: [`Results at least this extreme occur 3% of the time if the null holds`, `There is a 97% chance that the research hypothesis is correct`, `There is a 3% chance that the null hypothesis is actually true`, `The effect is large enough to matter clinically for patients`],
            correctAnswer: 0,
            explanation: `A p-value is the probability of getting results at least this extreme if the null hypothesis ($H_0$, no effect) were true. Because $0.03 < 0.05$, the result is statistically significant. The p-value does NOT give the probability that the null or the research hypothesis is true, and it says nothing about effect size or clinical importance (common MCAT traps).`
          },
          {
            question: `In the worked example, $r = -0.45$ is best described as:`,
            options: [`A moderate negative correlation`, `A moderate positive correlation`, `Essentially no relationship`, `Proof that social media lowers satisfaction`],
            correctAnswer: 0,
            explanation: `The negative sign indicates an inverse relationship (as one variable rises, the other tends to fall) and the magnitude (0.45) indicates moderate strength, well above zero. Correlation describes association and direction, not causation.`
          },
          {
            question: `Why does the passage's conclusion that "social media reduces satisfaction" overreach?`,
            options: [`Correlational data allow reverse causation or a confounder`, `The p-value is so small that the result is likely a false positive`, `An $r$ of $-0.45$ is too weak to count as any association`, `Surveys cannot measure an internal state like satisfaction`],
            correctAnswer: 0,
            explanation: `Correlational designs cannot establish direction of causation. Less-satisfied people might use more social media (reverse causation), or a third variable could drive both. A significant correlation supports association, not a causal claim. A small p-value makes a false positive less likely, not more, and a moderate $r$ is a real association.`
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
            options: [`Operationalization of a construct`, `Sampling bias in participant selection`, `The Hawthorne effect on self-report`, `A confounding variable in the design`],
            correctAnswer: 0,
            explanation: `Operationalization turns an abstract construct into a measurable variable: it specifies how a concept (stress) is concretely measured (questionnaire score). It says nothing about who was sampled, observation effects, or a third variable. It is essential for testing hypotheses and is frequently probed in Psych/Soc passages.`
          },
          {
            question: `Workers increase their productivity simply because they know researchers are watching them. This illustrates:`,
            options: [`The Hawthorne effect`, `Self-report bias`, `The placebo effect`, `Observer bias in ratings`],
            correctAnswer: 0,
            explanation: `The Hawthorne effect is a change in behavior that results from awareness of being observed, independent of any experimental manipulation. It threatens the validity of observational studies. The placebo effect comes from expecting a treatment to work, and observer bias is a distortion in how researchers record behavior, not a change in the behavior itself.`
          },
          {
            question: `A phone survey conducted only on weekday mornings likely suffers from:`,
            options: [`Sampling bias, since people who work mornings are left out`, `Attrition bias, since many people hang up partway through`, `Response bias, since morning answers are less honest`, `Low reliability, since call times vary from day to day`],
            correctAnswer: 0,
            explanation: `Restricting calls to weekday mornings systematically misses people who work during those hours, so the sample is not representative of the broader population — a form of sampling bias that limits generalizability. Attrition refers to participants dropping out of a study over time, and nothing suggests morning answers are less honest or that the measure itself is inconsistent.`
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
