export const mcatResearchMethodsPart1Data = {
  topicSlug: 'mcat-research-methods-mcat',
  sections: [
    {
      id: 'rm1-intro',
      type: 'text' as const,
      content: `# Research Methods & Study Design

**Part 1 of 4 — Variables, Sampling & Study Types**

### Types of Variables

| Variable Type | Definition | Example |
|--------------|-----------|---------|
| **Independent Variable (IV)** | What the researcher manipulates/measures | Drug dose, light exposure, temperature |
| **Dependent Variable (DV)** | What the researcher measures as an outcome | Patient recovery time, test score, enzyme activity |
| **Confound Variable** | Unmeasured/uncontrolled variable affecting DV | Age, baseline health status, observer bias |

### Sampling Methods

| Method | Description | Bias Risk |
|--------|------------|-----------|
| **Random Sampling** | Every participant has equal chance | Low bias; representative |
| **Convenience Sampling** | Easiest to access (first n patients) | High bias; may not represent population |
| **Stratified Sampling** | Divide population into groups, sample proportionally | Lower bias than convenience |
| **Matched Sampling** | Match participants on key variables | Controls specific confounds; less effective than randomization |

### Study Types (by Causation Inference)

| Type | Design | Causation Evidence |
|------|--------|------------------|
| **Experimental (RCT)** | Researcher manipulates IV, randomly assigns | **Strongest** |
| **Quasi-Experimental** | Researcher manipulates IV, no randomization | Moderate |
| **Correlational** | Researcher measures variables, finds association | Weak |
| **Observational** | Passive observation; no manipulation | Weak |

**Key:** Only **random assignment** (RCT) can establish causation by balancing confounds.`
    },
    {
      id: 'rm1-quiz',
      type: 'multiple-choice' as const,
      content: `**Variables & Sampling** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher tests: "Does caffeine improve memory?" Subjects consume caffeine or placebo, then complete a memory test. What is the IV?`,
            options: [`Memory performance`, `Caffeine vs Placebo`, `Subject age`, `Test difficulty`],
            correctAnswer: 1,
            explanation: `The IV is what the researcher **manipulates** (caffeine vs placebo). The DV is the outcome measured (memory performance).`
          },
          {
            question: `A public health survey samples first 100 people entering a clinic. Which sampling bias is most likely?`,
            options: [`Healthy volunteers (sampling bias)`, `Sicker patients may visit clinics (selection bias)`, `Observer rating errors`, `None; 100 is large`],
            correctAnswer: 1,
            explanation: `Convenience sampling (first 100 people) doesn't represent the population—sicker people seek clinics more. Systematic bias affects generalizability.`
          },
          {
            question: `An RCT randomly assigns patients to drug vs placebo. Randomization **most importantly** controls for:`,
            options: [`Known confounds only`, `Unknown confounds`, `Both known and unknown confounds`, `Measurement error`],
            correctAnswer: 2,
            explanation: `Random assignment balances **all** variables (known and unknown) across groups, preventing confounding.`
          },
          {
            question: `A behavioral study observes teenagers' social media use and depression without intervention. This is which study type?`,
            options: [`Experimental RCT`, `Quasi-experimental`, `Correlational/Observational`, `Case study`],
            correctAnswer: 2,
            explanation: `The researcher observes naturally occurring variables without manipulation (no random assignment). This is correlational/observational—causation cannot be inferred.`
          }
        ]
      }
    },
    {
      id: 'rm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **IV** = Independent Variable (what's manipulated/measured); **DV** = Outcome (what's measured)
- **Confound** = Unmeasured variable that could influence DV
- **Random Assignment** ⟹ RCT ⟹ Strongest causation inference
- **Convenience/Stratified Sampling** ⟹ Observational ⟹ Weaker causation inference
- **Matched Sampling** controls specific confounds but not unknown ones (inferior to randomization)`
    },
    {
      id: 'rm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Variables, Sampling & Study Types

<details>
<summary><b>Example 1: Separate IV and DV cleanly</b></summary>

Question: Participants receive either 0 mg, 50 mg, or 100 mg caffeine, then complete a reaction-time test.

1. Manipulated factor is caffeine dose.
2. Measured outcome is reaction time.

IV: **caffeine dose**. DV: **reaction time**.
</details>

<details>
<summary><b>Example 2: Spot sampling bias</b></summary>

Question: A stress survey recruits only pre-med students from one campus.

1. Recruitment is convenience-based and narrow.
2. Sample likely differs from general population.

Main issue: **selection/sampling bias**, reducing external validity.
</details>

<details>
<summary><b>Example 3: Distinguish observational from experimental</b></summary>

Question: Researchers record average sleep and exam scores without assigning sleep schedules.

1. No manipulation of sleep duration.
2. No random assignment.

Design type: **observational/correlational**, not experimental.
</details>`
    }
  ]
};
