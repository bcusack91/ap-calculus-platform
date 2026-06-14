export const mcatSciPassagePart3Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 3 of 7 — Experimental Design**

### Key Experimental Components

| Component | Definition | Example |
|-----------|-----------|---------|
| **Independent variable (IV)** | What the researcher manipulates | Drug dosage |
| **Dependent variable (DV)** | What is measured | Blood pressure |
| **Control group** | No treatment / standard treatment | Placebo group |
| **Experimental group** | Receives treatment | Drug group |
| **Confounding variable** | Uncontrolled factor that could explain results | Age differences between groups |

### Types of Studies

| Type | Description | Strength |
|------|-------------|---------|
| Randomized controlled trial (RCT) | Random assignment, intervention, control | Gold standard for causation |
| Cohort study | Follow groups over time | Good for rare exposures |
| Case-control study | Compare cases vs. controls (retrospective) | Good for rare diseases |
| Cross-sectional | Snapshot at one time point | Quick, shows associations |

### Validity & Reliability

- **Internal validity**: Can you conclude cause-and-effect? (controlled confounders)
- **External validity**: Can you generalize to broader population?
- **Reliability**: Reproducibility — same results with repeated testing`
    },
    {
      id: 'sp3-worked',
      type: 'text' as const,
      content: `### Worked Example — Critiquing an Experimental Design

> *"Researchers tested whether a new drug lowers LDL cholesterol. Patients who chose to take the drug (n = 60) were compared after 12 weeks to patients who declined (n = 60). The drug group's mean LDL fell by 35 mg/dL; the no-drug group's fell by 5 mg/dL. The authors conclude the drug lowers LDL."*

**Step 1 — Identify the design.** Patients *self-selected* into groups (drug vs. no drug). This is an **observational** comparison, not a randomized controlled trial — no random assignment.

**Step 2 — Hunt for confounders.** People who *choose* to take a cholesterol drug may also exercise more, eat better, or be more health-conscious. Any of these could lower LDL independent of the drug. Because assignment wasn't random, these confounders aren't balanced between groups.

**Step 3 — Judge internal validity.** Low. Without randomization or a placebo control, the 30 mg/dL difference cannot be attributed to the drug alone — the conclusion overreaches.

**Step 4 — Propose the fix.** Randomly assign patients to drug vs. placebo (a double-blind RCT). Randomization distributes confounders evenly, and a placebo controls for the act of taking a pill. *That* design would license a causal claim.

**Takeaway:** When a passage says participants "chose," "volunteered," or were "grouped by existing status," flag it as observational and look for the confounder the question wants you to name.`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Experimental Design** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study finds that coffee drinkers have lower rates of depression, but coffee drinkers also exercise more. Exercise is a:`,
            options: [`Confounding variable — it could explain the association instead of coffee itself`, `Dependent variable`, `Independent variable`, `Control variable`],
            correctAnswer: 0,
            explanation: `Exercise is a confounding variable because it's associated with both the exposure (coffee drinking) and the outcome (depression) and could be the real cause of the observed association. This limits internal validity.`
          },
          {
            question: `In the LDL worked example, the central design flaw is that:`,
            options: [`Patients self-selected into groups, so confounders were not balanced (no randomization)`, `The sample size was far too small to detect any effect`, `LDL cannot be measured reliably in blood`, `Twelve weeks is too short for any cholesterol change`],
            correctAnswer: 0,
            explanation: `Self-selection means health-conscious behaviors could cluster in the drug group. Without random assignment, the groups differ in more than just the drug, undermining a causal conclusion.`
          },
          {
            question: `Which redesign would best justify the causal claim that the drug lowers LDL?`,
            options: [`A double-blind, randomized, placebo-controlled trial`, `A larger observational cohort that follows self-selected users`, `A retrospective case-control study of past users`, `A one-time cross-sectional survey of LDL levels`],
            correctAnswer: 0,
            explanation: `A randomized, placebo-controlled, double-blind trial balances confounders through randomization and isolates the drug's effect with a placebo — the gold standard for causal inference.`
          }
        ]
      }
    },
    {
      id: 'sp3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Validity & Study Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `A drug trial enrolls only healthy 20-year-old men. Its results may have limited:`,
            options: [`External validity — generalizability to women, older adults, and people with comorbidities`, `Internal validity, because the sample is too uniform`, `Reliability, because young men give inconsistent data`, `Statistical power, regardless of effect size`],
            correctAnswer: 0,
            explanation: `A narrow, homogeneous sample can have strong internal validity but poor external validity: you cannot confidently extend the findings to populations not represented in the study.`
          },
          {
            question: `To study a rare disease, which design is generally most efficient?`,
            options: [`Case-control study — start with people who have the disease and look backward at exposures`, `Randomized controlled trial assigning people to get the disease`, `Cross-sectional snapshot of the general population`, `A single case report`],
            correctAnswer: 0,
            explanation: `For rare outcomes, recruiting enough cases prospectively is impractical. A case-control study starts with existing cases and matched controls, then compares prior exposures — efficient for rare diseases.`
          },
          {
            question: `Repeating an assay three times yields nearly identical values each run. This demonstrates high:`,
            options: [`Reliability (reproducibility)`, `External validity`, `Internal validity`, `Statistical significance`],
            correctAnswer: 0,
            explanation: `Consistent, repeatable measurements indicate reliability. Reliability is necessary but not sufficient for validity — a measurement can be precisely reproducible yet still systematically biased.`
          }
        ]
      }
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- IV = manipulated. DV = measured. Confounders = uncontrolled alternatives.
- "Self-selected" or "volunteered" groups = observational → hunt for confounders
- RCTs are gold standard for causation. Observational studies show associations only.
- Internal validity = cause-and-effect confidence. External validity = generalizability.
- ALWAYS look for confounding variables in MCAT passages`
    }
  ]
};
