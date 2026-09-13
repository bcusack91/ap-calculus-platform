export const mcatResearchMethodsPart3Data = {
  topicSlug: 'mcat-research-methods-mcat',
  sections: [
    {
      id: 'rm3-intro',
      type: 'text' as const,
      content: `# Research Methods & Study Design

**Part 3 of 4 — Blinding & Experimental Controls**

### Blinding in Studies

| Type | Who is Blinded? | Effect |
|------|----------------|--------|
| **No Blinding** | Participants & researchers know treatment | Maximum placebo effect + researcher bias |
| **Single-Blind** | Participants don't know (researcher knows) | Reduces placebo effect; researcher may bias |
| **Double-Blind** | Both participants & researchers don't know | Gold standard; minimizes bias |

**Mechanism of Placebo Effect:** Brain expectation → neurotransmitter release → real physiological changes (30-40% of patients benefit from placebo alone)

### Placebo & Control Groups

| Group | Purpose |
|-------|---------|
| **Placebo Control** | Isolates IV effect from placebo effect |
| **Active Control** | Compares new drug to gold-standard treatment (ethical) |
| **No-Treatment Control** | Measures natural recovery/maturation |
| **Waitlist Control** | Ethical alternative for beneficial treatments |

**Example:** Depression RCT
- Placebo group: 30% improve (placebo effect alone)
- Antidepressant group: 60% improve
- **True drug effect** = 60% − 30% = 30%

### Types of Experimental Designs

| Design | Structure | Use Case |
|--------|-----------|----------|
| **Within-Subjects** | Same subjects in all conditions | Measures change pre-post (power maximized) |
| **Between-Subjects** | Different subjects per condition | No carryover effects; larger N needed |
| **Factorial** | Multiple IVs tested simultaneously | Efficiency; can detect interactions |
| **Longitudinal** | Follow subjects over time | Tracks development, long-term effects |

**Carryover Effect:** Practice in Condition A affects performance in Condition B. Randomize order or use between-subjects design.`
    },
    {
      id: 'rm3-quiz',
      type: 'multiple-choice' as const,
      content: `**Blinding & Controls** 🎯`,
      exercise: {
        questions: [
          {
            question: `A pain medication study is double-blind. Which statement is true?`,
            options: [
              `Neither subjects nor researchers know the assignments`,
              `Only subjects are unaware of the assignments`,
              `Only researchers are unaware of the assignments`,
              `Assignments are concealed twice, at enrollment and analysis`
            ],
            correctAnswer: 0,
            explanation: `Double-blind means both participants and researchers don't know who received drug vs placebo, minimizing bias and placebo effect. Blinding only the subjects is single-blind; "double" refers to the two parties kept unaware, not to blinding done twice.`
          },
          {
            question: `A sleep deprivation study tests whether lack of sleep impairs memory. What is the best control group?`,
            options: [
              `Participants who sleep a normal amount`,
              `Participants who are partially sleep-deprived`,
              `Participants who get no sleep at all`,
              `Participants given extra sleep beforehand`
            ],
            correctAnswer: 0,
            explanation: `A control group should match the experimental group except for the manipulation, so participants with normal sleep provide the baseline that isolates the effect of deprivation. Partial deprivation is a second experimental level (useful for dose-response), not a control; no sleep at all is the deprivation condition itself; and extra sleep is a different manipulation, not a normal baseline.`
          },
          {
            question: `A study measures student exam performance under quiet vs loud conditions (same students, both conditions). What design is this?`,
            options: [`Between-subjects`, `Within-subjects`, `Factorial design`, `Longitudinal`],
            correctAnswer: 1,
            explanation: `Within-subjects: same students tested in both conditions. Power is high because individual differences are controlled (students serve as their own control).`
          },
          {
            question: `In a depression medication trial, 40% of placebo group improve. What does this indicate?`,
            options: [
              `The medication is ineffective, since placebo also helps`,
              `Placebo effects and natural recovery produce improvement`,
              `Selection bias skewed who landed in the placebo arm`,
              `The sample is too small to show any drug effect`
            ],
            correctAnswer: 1,
            explanation: `Placebo response (and natural recovery/maturation) explain baseline improvement. If medication group shows >40% improvement, the drug has added benefit beyond placebo, so the placebo rate alone cannot show the drug is ineffective. Nothing in the result points to biased assignment or an inadequate sample.`
          }
        ]
      }
    },
    {
      id: 'rm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Double-Blind** > Single-Blind > No Blinding (minimizes placebo effect + researcher bias)
- **Placebo Control** isolates IV effect by subtracting baseline placebo response
- **Within-Subjects** design increases power (subjects are own controls); risk of carryover effects
- **Between-Subjects** design avoids carryover; requires larger N
- **MCAT Tip**: Always check: Is the study blinded? Is there a placebo control? Could carryover effects bias results?`
    },
    {
      id: 'rm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Blinding & Experimental Controls

<details>
<summary><b>Example 1: Why double-blind helps</b></summary>

Question: In a pain trial, nurses who know treatment assignment rate pain outcomes more favorably for the drug group.

1. Knowledge of assignment can influence ratings.
2. Blinding raters removes expectancy effects.

Fix: use a **double-blind design**.
</details>

<details>
<summary><b>Example 2: Compute true treatment effect from placebo baseline</b></summary>

Question: Placebo improves 25%; drug improves 55%.

1. Total observed drug-group response includes placebo component.
2. Subtract placebo baseline.

Estimated drug-specific effect: **30 percentage points**.
</details>

<details>
<summary><b>Example 3: Carryover in within-subjects design</b></summary>

Question: Subjects take memory test after caffeine in week 1 and after placebo in week 2. Scores improve in week 2.

1. Practice effects can increase later scores independent of treatment.
2. Order effects threaten interpretation.
3. Counterbalancing or between-subjects design can reduce this issue.

Threat identified: **carryover/order effect**.
</details>`
    }
  ]
};
