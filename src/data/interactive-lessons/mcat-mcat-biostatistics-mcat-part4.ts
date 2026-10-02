export const mcatBiostatisticsPart4Data = {
  topicSlug: 'mcat-biostatistics-mcat',
  sections: [
    {
      id: 'biostats4-intro',
      type: 'text' as const,
      content: `# Biostatistics Fundamentals

**Part 4 of 4 — Correlation, Causation, Study Design, Diagnostic Tests & Risk**

### Correlation Coefficient (r)

Measures **strength** and **direction** of linear relationship between two variables.

\`\`\`
r = -1 → Perfect negative correlation
r = 0 → No correlation
r = +1 → Perfect positive correlation
\`\`\`

| r Value | Interpretation |
|---------|----------------|
| ±0.0–0.3 | Weak correlation |
| ±0.3–0.7 | Moderate correlation |
| ±0.7–1.0 | Strong correlation |

**Critical:** r close to ±1 does NOT prove causation!

### Correlation ≠ Causation

**Three mechanisms for correlation:**

1. **Causation**: X → Y (aspirin → reduced heart attack risk)
2. **Reverse Causation**: Y → X (depression is linked to poor physical health, but the poor health may be causing the depression rather than the reverse)
3. **Confounding Variable**: Z → both X and Y (smoking → both yellow teeth AND lung cancer)

**Example:** Ice cream sales correlate with drowning deaths. 
- **Confounder:** Summer heat drives both (neither causes the other)

### Study Design & Confounders

| Design | Controls Confounders? | Causation Inference |
|--------|----------------------|-------------------|
| Cross-sectional | Poor (confounding risk; no timing) | Weak |
| Case-Control | Poor–fair (matching on chosen variables only) | Moderate |
| Cohort | Fair (can adjust for measured covariates; still confounded) | Good |
| RCT | Excellent (randomization) | Strong |

Cross-sectional, case-control and cohort studies are all **observational**: the researcher only records exposure. Only the RCT assigns it.

**RCT Gold Standard:** Randomization balances known **and unknown** confounders across groups.

\`\`\`
Observational Study: 
  Does statin use → lower cholesterol?
  (Confounded by: diet, exercise, genetics)

RCT Gold Standard:
  Randomize patients to statin vs placebo
  (Randomization balances confounders)
\`\`\``
    },
    {
      id: 'biostats4-diagnostic',
      type: 'text' as const,
      content: `### Diagnostic Tests: The 2×2 Table

Every screening or diagnostic question on the MCAT can be laid out in one 2×2 table. Rows are the **test result**; columns are the **true disease status**.

| Test result | Disease + | Disease − |
|-------------|-----------|-----------|
| Test + | **a** (true positive) | **b** (false positive) |
| Test − | **c** (false negative) | **d** (true negative) |

| Measure | Formula | Question it answers |
|---------|---------|---------------------|
| Sensitivity | $\\frac{a}{a+c}$ | Of people WITH the disease, what fraction test positive? (true positive rate) |
| Specificity | $\\frac{d}{b+d}$ | Of people WITHOUT the disease, what fraction test negative? (true negative rate) |
| Positive predictive value (PPV) | $\\frac{a}{a+b}$ | Of people who test POSITIVE, what fraction truly have the disease? |
| Negative predictive value (NPV) | $\\frac{d}{c+d}$ | Of people who test NEGATIVE, what fraction are truly disease-free? |

**Shortcut:** sensitivity and specificity read **down the columns** (start from disease status); PPV and NPV read **across the rows** (start from the test result).

**Mnemonics:**
- **SnNout**: a highly **S**e**n**sitive test, when **N**egative, rules **out** disease (few false negatives). Good for screening.
- **SpPin**: a highly **Sp**ecific test, when **P**ositive, rules **in** disease (few false positives). Good for confirming.

**Key reasoning:**
- Sensitivity and specificity are **properties of the test**: they do not change with prevalence.
- PPV and NPV **depend on prevalence**. Higher prevalence → **higher PPV, lower NPV**. Lower prevalence → lower PPV, higher NPV. This is why screening a low-prevalence population produces many false positives.
- **Moving the cutoff trades one for the other.** Lowering the threshold for a "positive" result catches more true cases (sensitivity ↑, fewer false negatives) but flags more healthy people (specificity ↓, more false positives). Raising the threshold does the reverse.

### Risk Measures

For risk questions, rows are **exposure** and columns are **outcome**:

| Exposure | Outcome + | Outcome − |
|----------|-----------|-----------|
| Exposed | **a** | **b** |
| Unexposed | **c** | **d** |

| Measure | Formula | Study design |
|---------|---------|--------------|
| Relative risk (RR) | $\\frac{a/(a+b)}{c/(c+d)}$ | **Cohort** (and RCT): you follow exposed and unexposed groups, so you can compute the risk (incidence) in each |
| Odds ratio (OR) | $\\frac{ad}{bc}$ | **Case-control**: you pick people by outcome, so true risk cannot be computed; compare odds of exposure instead |

- **RR or OR = 1** → no association (the null value for a ratio, as in Part 3). Greater than 1 → exposure linked to more of the outcome; less than 1 → exposure is protective.
- When the disease is **rare**, the OR closely approximates the RR.

**Treatment effect measures (RCTs):**
- **Absolute risk reduction (ARR)** = risk in control group − risk in treated group
- **Relative risk reduction (RRR)** = ARR ÷ risk in control group (equivalently, 1 − RR)
- **Number needed to treat (NNT)** = $\\frac{1}{\\text{ARR}}$: how many patients must be treated to prevent one bad outcome

**Example:** Heart attacks occur in 10% of placebo patients and 6% of drug patients.
- RR = 0.06 ÷ 0.10 = **0.6** (drug patients have 60% of the placebo risk)
- ARR = 10% − 6% = **4%** = 0.04, so RRR = 0.04 ÷ 0.10 = 40%
- NNT = 1 ÷ 0.04 = **25** patients treated to prevent one heart attack`
    },
    {
      id: 'biostats4-quiz',
      type: 'multiple-choice' as const,
      content: `**Correlation, Causation, Diagnostic Tests & Risk** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study finds r = −0.85 between exercise frequency and BMI. Which is correct?`,
            options: [
              `Exercise lowers BMI, as the strong correlation proves`,
              `A strong negative correlation, but causation is unproven`,
              `About 85% of the variation in BMI is due to exercise`,
              `Exercise frequency explains almost none of BMI's variation`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `High |r| indicates strong correlation, NOT causation, and the negative sign means higher exercise frequency goes with lower BMI. The share of variance explained is $r^2 \\approx 0.72$, which is substantial but not 85%, and it would not show cause. Confounders (e.g., diet, genetics) may explain both exercise habits and BMI independently.`
          },
          {
            question: `Coffee consumption correlates with heart attack risk. Which approach best controls for confounding?`,
            options: [
              `Matching drinkers to non-drinkers by age, sex, and income`,
              `Randomizing people to coffee or decaf in an RCT`,
              `Adjusting statistically for smoking, diet, and exercise`,
              `Surveying a much larger sample of coffee drinkers`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `RCT randomization balances confounders on average, both measured and unknown, across groups, so it is the only option that addresses confounding in general; it does not guarantee zero confounding in any single trial, but it controls it better than the alternatives. Statistical adjustment and matching address only the specific confounders chosen (smoking, diet, exercise, age, sex, income), leaving unknown confounders in place, and a larger sample reduces random error but not confounding.`
          },
          {
            question: `A cohort study follows 1000 patients taking medication X for 5 years. Why is this better than a cross-sectional study for inferring causation?`,
            options: [
              `Cohort studies always enroll larger samples`,
              `Exposure is measured before the outcome occurs`,
              `Following patients over time removes confounding`,
              `Cohort studies are cheaper and faster to run`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Both designs are observational, but this cohort is prospective: exposure (medication X) is measured before the outcome occurs, whereas a cross-sectional study measures both at one time point. This temporal relationship (exposure precedes outcome) strengthens causal inference compared to cross-sectional data. Cohorts are not necessarily larger, are usually slower and more costly, and remain vulnerable to confounding.`
          },
          {
            question: `A study reports: "Children watching violent TV shows are more aggressive." Which BEST explains the correlation?`,
            options: [
              `Violent TV must cause it, since viewing came first`,
              `Aggression must drive viewing, since kids pick their shows`,
              `A confounder, like low supervision, could drive both`,
              `No link exists, since r = 0 for this relationship`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A confounding variable (parental supervision) could drive both outcomes: low supervision leads to more TV and more aggression. That explanation fits the reported association without claiming more than it shows. A correlational finding cannot establish either causal direction: the report gives no timing showing viewing came first, and no evidence that children's choices drive viewing, so neither "must" claim is supported. A reported association also means r is not 0. Only an experiment (e.g., RCT with random TV assignment) could establish causation.`
          },
          {
            question: `A blood test with 95% sensitivity and 90% specificity was used in a specialty clinic where 30% of patients have the disease. It is then used to screen the general population, where prevalence is 1%. What happens to the test's performance?`,
            options: [
              `Sensitivity and specificity fall, and PPV falls along with them`,
              `Sensitivity and specificity hold steady, but PPV falls sharply`,
              `PPV rises, because there are far fewer true cases to miss`,
              `Nothing changes, because the test itself is the same`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Sensitivity and specificity are properties of the test, so they stay at 95% and 90% in any population. Predictive values depend on prevalence. At 1% prevalence, among 10,000 people there are 100 true cases (95 true positives) but 9,900 healthy people, of whom 10% (990) test falsely positive, so PPV = 95/1,085 ≈ 9%, down from about 80% in the clinic. Fewer true cases to miss raises NPV, not PPV, and saying nothing changes ignores that the predictive values move with prevalence.`
          },
          {
            question: `In a 5-year RCT, 12% of patients on placebo and 8% of patients on a new statin have a heart attack. What are the relative risk (statin vs placebo) and the number needed to treat?`,
            options: [
              `RR = 1.5 and NNT = 25`,
              `RR ≈ 0.67 and NNT = 25`,
              `RR ≈ 0.67 and NNT = 4`,
              `RR ≈ 0.33 and NNT ≈ 8.3`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `RR = risk in the statin group ÷ risk in the placebo group = 0.08 ÷ 0.12 ≈ 0.67, so the statin lowers risk (RR < 1). The absolute risk reduction is 12% − 8% = 4% = 0.04, and NNT = 1 ÷ ARR = 1 ÷ 0.04 = 25. An RR of 1.5 inverts the ratio (placebo ÷ statin); an NNT of 4 uses the percentage-point difference itself instead of its reciprocal; and 0.33 is the relative risk reduction (1 − RR), with 8.3 coming from 1 ÷ 0.12, the placebo risk rather than the ARR.`
          }
        ]
      }
    },
    {
      id: 'biostats4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Correlation (r)**: Measures linear relationship; high |r| ≠ causation
- **Confounding**: Third variable influences both exposure and outcome
- **Study Hierarchy** (for causation inference): Cross-sectional < Case-Control < Cohort < RCT
- **RCT Gold Standard**: Randomization balances known and unknown confounders
- **Temporal Relationship**: Exposure must precede outcome for causation (cohort better than cross-sectional)
- **2×2 table** (test rows, disease columns): Sensitivity = a/(a+c), Specificity = d/(b+d), PPV = a/(a+b), NPV = d/(c+d)
- **SnNout / SpPin**: a negative result on a highly sensitive test rules disease out; a positive result on a highly specific test rules it in
- **Prevalence**: Sensitivity and specificity are fixed properties of the test; higher prevalence → higher PPV, lower NPV
- **Cutoff trade-off**: Lowering the threshold for "positive" raises sensitivity and lowers specificity (and vice versa)
- **Risk measures**: Relative risk = [a/(a+b)] ÷ [c/(c+d)] for cohort studies; odds ratio = ad/bc for case-control studies; RR or OR = 1 means no association
- **ARR and NNT**: ARR = control risk − treated risk; NNT = 1/ARR
- **MCAT Tip**: Always ask "Could a confounder explain this correlation?" and "What study design would prove causation?"`
    },
    {
      id: 'biostats4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Correlation, Causation & Design

<details>
<summary><b>Example 1: Correlation does not prove causation</b></summary>

Data show coffee intake correlates with heart disease.

1. Correlation indicates association only.
2. Smoking could confound both coffee intake and disease risk.
3. Need stronger design (e.g., randomized intervention) for causal inference.

Conclusion: **association present, causation unproven**.
</details>

<details>
<summary><b>Example 2: Rank study designs for causal strength</b></summary>

Given cross-sectional, case-control, cohort, and RCT:

1. RCT is strongest due to randomization.
2. Cohort is next because exposure precedes outcome.
3. Case-control and cross-sectional are more confounded.

Strongest to weakest: **RCT > cohort > case-control > cross-sectional**.
</details>

<details>
<summary><b>Example 3: Identify temporal logic</b></summary>

Study records current depression and current sleep quality at one time point.

1. Exposure and outcome measured simultaneously.
2. Cannot determine which came first.
3. Reverse causation remains possible.

Takeaway: temporal ambiguity weakens causal claims.
</details>

<details>
<summary><b>Example 4: Compute PPV and NPV from prevalence, sensitivity and specificity</b></summary>

A screening test has **90% sensitivity** and **80% specificity**. It is given to **1,000 people**, and disease prevalence is **10%**.

1. Diseased = 10% × 1,000 = **100**; disease-free = **900**.
2. True positives = 90% × 100 = **90**; false negatives = 100 − 90 = **10**.
3. True negatives = 80% × 900 = **720**; false positives = 900 − 720 = **180**.
4. Fill the 2×2 table:

| Test result | Disease + | Disease − | Row total |
|-------------|-----------|-----------|-----------|
| Test + | 90 (a) | 180 (b) | 270 |
| Test − | 10 (c) | 720 (d) | 730 |

5. PPV = a/(a+b) = 90/270 ≈ **33%**: only one in three positives truly has the disease.
6. NPV = d/(c+d) = 720/730 ≈ **98.6%**: a negative result is very reassuring.

**Same test, prevalence 50%** (500 diseased, 500 disease-free): true positives = 450, false positives = 100, false negatives = 50, true negatives = 400. PPV = 450/550 ≈ **82%** and NPV = 400/450 ≈ **89%**.

Takeaway: sensitivity and specificity did not change, but **raising prevalence raised PPV and lowered NPV**.
</details>`
    }
  ]
};
