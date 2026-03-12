import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 6: Complete HT (2/6) + Regression Start (4/6)...\n');

  // Find topics
  const pairedData = await prisma.topic.findFirst({
    where: { slug: 'paired-data' }
  });

  const chiSquare = await prisma.topic.findFirst({
    where: { slug: 'chi-square-tests' }
  });

  const scatterplots = await prisma.topic.findFirst({
    where: { slug: 'scatterplots-correlation-stats' }
  });

  const leastSquares = await prisma.topic.findFirst({
    where: { slug: 'least-squares-regression' }
  });

  const residuals = await prisma.topic.findFirst({
    where: { slug: 'residuals-residual-plots' }
  });

  const coefficientDetermination = await prisma.topic.findFirst({
    where: { slug: 'coefficient-determination' }
  });

  if (!pairedData || !chiSquare || !scatterplots || !leastSquares || !residuals || !coefficientDetermination) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Paired Data (Matched Pairs)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: pairedData.id,
        question: 'Ten students take a practice test, study, then retake a similar test. Their scores (before, after) are: (65,70), (70,72), (75,80), (80,78), (85,90), (60,68), (72,75), (68,70), (78,82), (82,85). Test at α = 0.05 if studying improved scores.',
        solution: `Step 1: Identify paired data structure
PAIRED DATA: Same students measured twice
- Before studying (measurement 1)
- After studying (measurement 2)
- Each student is their own control

Not independent samples!

Step 2: Calculate differences
d = After - Before

Student 1: 70 - 65 = 5
Student 2: 72 - 70 = 2
Student 3: 80 - 75 = 5
Student 4: 78 - 80 = -2
Student 5: 90 - 85 = 5
Student 6: 68 - 60 = 8
Student 7: 75 - 72 = 3
Student 8: 70 - 68 = 2
Student 9: 82 - 78 = 4
Student 10: 85 - 82 = 3

Differences: 5, 2, 5, -2, 5, 8, 3, 2, 4, 3

Step 3: Set up hypotheses
Testing if studying helps (positive difference)

H₀: μd = 0 (no improvement)
Hₐ: μd > 0 (scores improved)

One-tailed test (right)

Step 4: Calculate statistics
n = 10 differences

d̄ = (5+2+5-2+5+8+3+2+4+3)/10
  = 35/10 = 3.5

Calculate sd:
(d - d̄)²: 2.25, 2.25, 2.25, 30.25, 2.25, 20.25, 0.25, 2.25, 0.25, 0.25
Sum = 62.5

sd = √(62.5/9) ≈ √6.944 ≈ 2.64

Step 5: Check conditions
RANDOM: Assume random sample ✓
NORMAL: n = 10 < 30, assume differences approximately normal ✓
  (Could check with plot)
PAIRED: Yes, same students ✓

Step 6: Calculate test statistic
df = n - 1 = 9

SE = sd/√n
   = 2.64/√10
   ≈ 0.835

t = (d̄ - 0)/SE
  = 3.5/0.835
  ≈ 4.19

Step 7: Find p-value
Right-tailed test, df = 9, t = 4.19

From t-table:
P(t > 4.19) < 0.001

p-value < 0.001

Step 8: Make decision
p < 0.001 << 0.05

REJECT H₀

Step 9: Conclude
At the α = 0.05 significance level, there is very strong evidence that studying improved test scores.

The mean improvement is 3.5 points, which is statistically significant.

Step 10: Why paired test?
Using paired data:
- Controls for student ability
- Each student compared to themselves
- More powerful (less variability)
- Better than comparing two independent groups

Answer:
H₀: μd = 0, Hₐ: μd > 0
d̄ = 3.5, sd = 2.64, n = 10
Test statistic: t = 4.19 (df = 9)
P-value < 0.001
Decision: Reject H₀
Conclusion: Strong evidence studying improved scores (mean gain = 3.5 points)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: pairedData.id,
        question: 'Explain when to use a paired t-test versus a two-sample t-test. What is the advantage of pairing?',
        solution: `Step 1: When to use PAIRED t-test
Use when:
- Same subjects measured twice (before/after)
- Matched pairs (twins, couples, paired locations)
- Data naturally paired
- Measurements dependent

Examples:
✓ Blood pressure before/after medication
✓ Test scores before/after tutoring
✓ Weight before/after diet
✓ Matched case-control studies
✓ Right hand vs left hand measurements

Step 2: When to use TWO-SAMPLE t-test
Use when:
- Two independent groups
- Different subjects in each group
- Random assignment to groups
- No natural pairing

Examples:
✓ Treatment group vs control group (different people)
✓ Men vs women
✓ School A vs School B
✓ Drug A vs Drug B (different patients)

Step 3: Key difference
PAIRED: Each observation in group 1 matched to specific observation in group 2
- Analyze DIFFERENCES
- One sample of differences
- Test: H₀: μd = 0

TWO-SAMPLE: Groups independent
- Analyze two separate samples
- Compare means
- Test: H₀: μ₁ = μ₂

Step 4: Structure comparison
PAIRED DATA:
Subject  Before  After  Difference
   1       65     70        5
   2       70     72        2
   3       75     80        5
→ Analyze the 3 differences

TWO-SAMPLE DATA:
Group 1: 65, 70, 75
Group 2: 70, 72, 80
→ Compare two independent samples

Step 5: Advantage of pairing
CONTROLS FOR VARIABILITY

Example: Test scores before/after studying

Without pairing (two groups):
- Study group: different students
- Control group: different students
- High variability due to ability differences

With pairing (same students):
- Each student compared to self
- Controls for ability
- Only measures effect of studying
- LESS VARIABILITY in differences

Step 6: Statistical advantage
Paired test is MORE POWERFUL:

Standard error for paired:
SE = sd/√n
- sd = variability of DIFFERENCES
- Usually smaller!

Standard error for two-sample:
SE = √(s₁²/n₁ + s₂²/n₂)
- Includes variability between subjects
- Usually larger

Smaller SE → Larger t → More likely to reject H₀

Step 7: Numerical example
Suppose test scores:

PAIRED approach:
Differences: 2, 3, 4, 3, 3
d̄ = 3, sd = 0.71
SE = 0.71/√5 = 0.32
t = 3/0.32 = 9.4 ← LARGE!

TWO-SAMPLE approach (if we could):
Before: 65, 67, 71, 72, 75 (mean = 70, s = 4.18)
After:  67, 70, 75, 75, 78 (mean = 73, s = 4.18)
SE = √(4.18²/5 + 4.18²/5) = 2.64
t = 3/2.64 = 1.14 ← small!

Paired test is much more powerful!

Step 8: When pairing is REQUIRED
If data naturally paired, MUST use paired test!

Cannot use two-sample test because:
- Violates independence assumption
- Measurements correlated
- Would give wrong SE

Example: Before/after on same people
- Before and after measurements are dependent
- Not two independent samples
- Must use paired analysis

Step 9: Design implications
Want maximum power?
→ Use paired design when possible

Pairing is most helpful when:
- High variability between subjects
- Low variability within subjects
- Can measure same subject twice

Step 10: Summary comparison
PAIRED T-TEST:
✓ Same subjects or matched pairs
✓ Dependent data
✓ Analyze differences: d = x₂ - x₁
✓ Test: μd = 0
✓ More powerful (controls variability)
✓ df = n - 1 (n pairs)

TWO-SAMPLE T-TEST:
✓ Independent groups
✓ Different subjects
✓ Analyze two separate means
✓ Test: μ₁ = μ₂
✓ Less powerful (more variability)
✓ df ≈ smaller of n₁-1, n₂-1

Answer:
USE PAIRED T-TEST when: Same subjects measured twice (before/after) or matched pairs. Analyze differences, test H₀: μd = 0.

USE TWO-SAMPLE T-TEST when: Independent groups with different subjects. Compare means, test H₀: μ₁ = μ₂.

ADVANTAGE OF PAIRING: Controls for subject-to-subject variability, resulting in smaller standard error and more statistical power. Much more likely to detect real effects when data naturally paired.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: pairedData.id,
        question: 'Eight patients measure blood pressure at home and at doctor\'s office. Differences (home - office) are: -8, -5, -10, -3, -12, -6, -8, -4. Test if blood pressure is lower at home (α = 0.05).',
        solution: `Step 1: Understand the data
Paired data: Same patients, two locations
Difference = Home - Office

All differences are negative:
This suggests home BP < office BP

Step 2: Set up hypotheses
Want to test if home BP is lower

d = Home - Office
If home lower, d < 0

H₀: μd = 0
Hₐ: μd < 0 (one-tailed, left)

Step 3: Check conditions
n = 8 paired differences

RANDOM: Assume representative ✓
NORMAL: n = 8 < 30, assume differences normal ✓
  (All negative, consistent pattern)
PAIRED: Same patients, yes ✓

Step 4: Calculate mean difference
Differences: -8, -5, -10, -3, -12, -6, -8, -4

d̄ = (-8-5-10-3-12-6-8-4)/8
  = -56/8
  = -7

Step 5: Calculate standard deviation
(d - d̄)²:
(-8-(-7))² = 1
(-5-(-7))² = 4
(-10-(-7))² = 9
(-3-(-7))² = 16
(-12-(-7))² = 25
(-6-(-7))² = 1
(-8-(-7))² = 1
(-4-(-7))² = 9

Sum = 66

sd = √(66/7) ≈ √9.43 ≈ 3.07

Step 6: Calculate test statistic
df = n - 1 = 7

SE = sd/√n
   = 3.07/√8
   ≈ 1.086

t = (d̄ - 0)/SE
  = -7/1.086
  ≈ -6.45

Step 7: Find p-value
Left-tailed test
df = 7, t = -6.45

This is very extreme!
P(t < -6.45) < 0.001

p-value < 0.001

Step 8: Make decision
p < 0.001 << 0.05

REJECT H₀

Step 9: Conclude
At the α = 0.05 significance level, there is very strong evidence that blood pressure is lower at home than at doctor's office.

Mean difference: -7 mmHg (home lower)

Step 10: Interpret in context
This is "white coat effect":
- Stress of doctor visit raises BP
- Home measurements more relaxed
- Average 7 mmHg higher at office
- Highly significant (p < 0.001)

Clinical relevance:
- Home monitoring may be more accurate
- Office readings may overestimate BP
- Important for diagnosis/treatment

Answer:
H₀: μd = 0, Hₐ: μd < 0
d̄ = -7, sd = 3.07, n = 8
Test statistic: t = -6.45 (df = 7)
P-value < 0.001
Decision: Reject H₀
Conclusion: Very strong evidence BP is lower at home (mean 7 mmHg lower)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: pairedData.id,
        question: 'Construct a 95% confidence interval for the mean difference in the blood pressure problem (d̄ = -7, sd = 3.07, n = 8). Interpret the interval.',
        solution: `Step 1: Recall the data
From paired t-test:
d̄ = -7 mmHg
sd = 3.07
n = 8
df = 7

Step 2: Find t* critical value
95% confidence, df = 7

From t-table:
t* = 2.365

Step 3: Calculate SE
SE = sd/√n
   = 3.07/√8
   ≈ 1.086

Step 4: Calculate margin of error
ME = t* × SE
   = 2.365 × 1.086
   ≈ 2.57

Step 5: Construct CI
CI = d̄ ± ME
   = -7 ± 2.57
   = (-9.57, -4.43)

Step 6: Interpret the interval
We are 95% confident that the true mean difference (home - office blood pressure) is between -9.57 and -4.43 mmHg.

In other words:
Home BP is between 4.43 and 9.57 mmHg LOWER than office BP.

Step 7: Connection to hypothesis test
Notice: 0 is NOT in the interval
All values negative (home < office)

This confirms our hypothesis test result:
- Rejected H₀: μd = 0 at α = 0.05
- 95% CI doesn't contain 0
- Consistent!

Step 8: Precision of estimate
Width of interval:
-4.43 - (-9.57) = 5.14 mmHg

Fairly precise estimate:
- Confident difference is at least 4.43
- Could be as much as 9.57
- Best estimate: 7 mmHg

Step 9: Clinical interpretation
Home BP is consistently lower:
- Minimum difference: ~4.4 mmHg
- Maximum difference: ~9.6 mmHg
- Most likely: ~7 mmHg

All plausible values show home < office
"White coat effect" is real and substantial

Step 10: If we wanted narrower interval
To reduce ME, could:
1. Increase sample size
   - Reduces SE
   - More patients needed

2. Lower confidence level
   - Smaller t*
   - But less confident

3. Reduce variability
   - Better measurement technique
   - More consistent conditions

Step 11: Compare to single-sample CI
This is CI for μd (mean difference)

NOT the same as:
- CI for mean home BP
- CI for mean office BP
- Difference of those CIs

Must analyze differences directly!

Answer:
95% CI: (-9.57, -4.43) mmHg

INTERPRETATION: We are 95% confident that the true mean difference in blood pressure (home - office) is between -9.57 and -4.43 mmHg. This means home blood pressure is between 4.43 and 9.57 mmHg lower than office blood pressure.

Since the entire interval is negative (doesn't contain 0), we can conclude at the 0.05 level that home BP is significantly lower than office BP, confirming the "white coat effect."`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: pairedData.id,
        question: 'A researcher has 20 subjects and wants to compare two treatments. Compare the power of: (a) paired design (same subjects get both treatments) vs (b) independent design (10 subjects per treatment). Explain which has more power and why.',
        solution: `Step 1: Understand the designs
DESIGN A (PAIRED):
- 20 subjects total
- Each subject gets BOTH treatments
- 20 paired differences
- df = 19

DESIGN B (INDEPENDENT):
- 20 subjects total  
- 10 get treatment 1
- 10 get treatment 2
- Two independent samples
- df ≈ 9

Step 2: Standard error comparison
PAIRED DESIGN:
SE = sd/√n
   = sd/√20

Where sd = SD of differences

INDEPENDENT DESIGN:
SE = √(s₁²/n₁ + s₂²/n₂)
   = √(s₁²/10 + s₂²/10)

Where s₁, s₂ = SDs within each group

Step 3: Why paired usually has smaller SE
Subject-to-subject variability:

Example measurements:
Subject A: Treatment 1 = 50, Treatment 2 = 55 (diff = 5)
Subject B: Treatment 1 = 100, Treatment 2 = 105 (diff = 5)

Difference is consistent (both +5)
But raw scores vary widely (50 to 105)

PAIRED: Analyzes differences (5, 5)
- Low variability in differences
- sd small

INDEPENDENT: Treats as separate groups
- Group 1: includes 50, 100
- Group 2: includes 55, 105  
- High variability in raw scores
- s₁, s₂ large

Step 4: Numerical example
Suppose:
- True treatment effect: δ = 5
- Between-subject SD: σ_between = 20
- Within-subject SD: σ_within = 4

PAIRED DESIGN:
sd ≈ σ_within = 4
SE = 4/√20 = 0.894
t = 5/0.894 = 5.59 ← LARGE!

INDEPENDENT DESIGN:
s₁ ≈ s₂ ≈ σ_between = 20
SE = √(20²/10 + 20²/10) = √80 = 8.94
t = 5/8.94 = 0.56 ← small

Paired design gives MUCH larger t-statistic!

Step 5: Power comparison
Power = P(Reject H₀ | H₀ is false)

Larger t-statistic → More likely to reject → Higher power

DESIGN A (Paired):
- Larger t-statistic
- Easier to detect effect
- Higher power
- df = 19 (better)

DESIGN B (Independent):
- Smaller t-statistic
- Harder to detect effect
- Lower power
- df ≈ 9 (worse)

Paired design has MUCH higher power!

Step 6: How much more powerful?
If between-subject variability >> within-subject variability:

Paired design can be 10× more powerful!

Example:
- Independent: need 100 subjects (50 per group)
- Paired: need only 20 subjects
- Same power!

Huge efficiency gain

Step 7: When does pairing help most?
Pairing most beneficial when:

HIGH between-subject variability:
- Subjects naturally differ a lot
- Age, genetics, baseline health vary

LOW within-subject variability:
- Measurements on same subject consistent
- Treatment effect consistent

Ratio: σ_between/σ_within is large
→ Pairing gives huge power boost

Step 8: When does pairing help less?
Pairing less beneficial when:

LOW between-subject variability:
- Subjects similar to begin with
- Controlled experimental conditions

HIGH within-subject variability:
- Lots of measurement error
- Treatment effect variable

Then paired and independent similar power

Step 9: Other advantages of pairing
Beyond statistical power:

1. Fewer subjects needed
   - Easier recruitment
   - Lower cost
   - Ethical (fewer participants)

2. Controls for confounding
   - Each subject is own control
   - Eliminates between-subject differences
   - Better internal validity

3. More efficient
   - Same inference with fewer subjects
   - Faster study completion

Step 10: Disadvantages of pairing
Potential issues:

1. Order effects
   - First treatment affects second
   - Need washout period or counterbalancing

2. Practice effects
   - Subjects improve with practice
   - Confounds treatment effect

3. Carryover effects
   - First treatment lingers
   - Contaminates second measurement

4. Time considerations
   - Takes longer per subject
   - Subject availability

Step 11: Design recommendation
FOR THIS SCENARIO:

If no order/carryover effects:
→ USE PAIRED DESIGN (Design A)
- Much higher power
- Controls subject variability
- More efficient

Only use independent if:
- Pairing impossible
- Order effects serious
- Treatments irreversible

Answer:
DESIGN A (PAIRED) has MUCH MORE POWER.

WHY? Paired design controls for between-subject variability, resulting in:
- Smaller standard error (sd/√20 vs √(s₁²/10 + s₂²/10))
- Larger t-statistic for same effect size
- More degrees of freedom (19 vs 9)
- Much higher probability of detecting real treatment effect

If between-subject variability is large compared to within-subject variability, paired design can be 5-10× more powerful. Same conclusion can be reached with far fewer total subjects.

RECOMMENDATION: Use paired design unless order effects or practical constraints prevent it. Pairing is one of the most powerful tools for increasing statistical power!`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: pairedData.id,
        front: 'When do you use a paired t-test?',
        back: 'When data naturally paired: same subjects measured twice (before/after), matched pairs, or related measurements. Analyze differences (d = x₂ - x₁), test H₀: μd = 0.',
        hint: 'Same subjects twice; matched pairs; analyze differences',
        isPremium: false
      },
      {
        topicId: pairedData.id,
        front: 'What are the conditions for paired t-test?',
        back: 'Random sample of pairs, differences approximately normal (if n < 30) or n ≥ 30, paired measurements dependent (not independent!). Use t-distribution with df = n - 1.',
        hint: 'Random pairs; normal differences; df = n-1',
        isPremium: false
      },
      {
        topicId: pairedData.id,
        front: 'What is the test statistic for paired t-test?',
        back: 't = (d̄ - 0)/(sd/√n), where d̄ = mean difference, sd = SD of differences, n = number of pairs. Use t-distribution with df = n - 1.',
        hint: 't = d̄/(sd/√n); df = n-1',
        isPremium: false
      },
      {
        topicId: pairedData.id,
        front: 'What is the advantage of paired design over independent samples?',
        back: 'Controls for subject-to-subject variability, smaller standard error, larger t-statistic, higher power to detect effects. Each subject is own control, removing between-subject differences.',
        hint: 'Controls variability; higher power; own control',
        isPremium: false
      },
      {
        topicId: pairedData.id,
        front: 'How do you construct CI for paired data?',
        back: 'CI = d̄ ± t*(sd/√n), where t* from t-table with df = n-1. Interprets as: "95% confident true mean difference is in interval." If 0 not in CI, significant at α = 0.05.',
        hint: 'd̄ ± t*(sd/√n); df = n-1',
        isPremium: false
      },
      {
        topicId: pairedData.id,
        front: 'What is the difference between paired and two-sample t-test?',
        back: 'Paired: same subjects/matched pairs, dependent data, one sample of differences, test μd = 0, df = n-1. Two-sample: independent groups, different subjects, test μ₁ = μ₂, df ≈ min(n₁-1, n₂-1).',
        hint: 'Paired = dependent; two-sample = independent',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: paired-data (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Chi-Square Tests
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: chiSquare.id,
        question: 'A die is rolled 60 times with results: 1(8), 2(12), 3(9), 4(11), 5(10), 6(10). Test at α = 0.05 if the die is fair.',
        solution: `Step 1: Set up hypotheses
Fair die: All outcomes equally likely

H₀: p₁ = p₂ = p₃ = p₄ = p₅ = p₆ = 1/6
Hₐ: At least one proportion differs

Chi-square goodness-of-fit test

Step 2: Calculate expected counts
If fair, each outcome should occur:
Expected = n × p = 60 × (1/6) = 10

All expected counts = 10

Step 3: Set up table
Outcome  Observed  Expected  (O-E)²/E
   1        8         10      0.4
   2       12         10      0.4
   3        9         10      0.1
   4       11         10      0.1
   5       10         10      0.0
   6       10         10      0.0

Step 4: Calculate chi-square statistic
χ² = Σ(O-E)²/E

For outcome 1: (8-10)²/10 = 4/10 = 0.4
For outcome 2: (12-10)²/10 = 4/10 = 0.4
For outcome 3: (9-10)²/10 = 1/10 = 0.1
For outcome 4: (11-10)²/10 = 1/10 = 0.1
For outcome 5: (10-10)²/10 = 0/10 = 0.0
For outcome 6: (10-10)²/10 = 0/10 = 0.0

χ² = 0.4 + 0.4 + 0.1 + 0.1 + 0.0 + 0.0 = 1.0

Step 5: Find degrees of freedom
df = number of categories - 1
   = 6 - 1 = 5

Step 6: Check conditions
RANDOM: Assume random rolls ✓
EXPECTED: All expected ≥ 5 ✓
  (All = 10 ≥ 5)
INDEPENDENT: Each roll independent ✓

Step 7: Find p-value
df = 5, χ² = 1.0

From chi-square table:
P(χ² > 1.0) > 0.90

p-value > 0.90 (very large!)

Step 8: Make decision
p > 0.90 >> 0.05

FAIL TO REJECT H₀

Step 9: Conclude
At the α = 0.05 significance level, there is insufficient evidence that the die is unfair.

The observed frequencies are consistent with a fair die.

Step 10: Interpret
χ² = 1.0 is very small
- Observed close to expected
- Little deviation from fairness
- No evidence of bias

Answer:
H₀: Die is fair (all p = 1/6)
Hₐ: Die is not fair
χ² = 1.0, df = 5
P-value > 0.90
Decision: Fail to reject H₀
Conclusion: No evidence die is unfair`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        question: 'Explain the conditions for chi-square tests and why we need expected counts ≥ 5.',
        solution: `Step 1: Conditions for chi-square tests
1. RANDOM: Random sample or random assignment
2. EXPECTED: All expected counts ≥ 5
3. INDEPENDENT: Observations independent

Step 2: Random condition
Need random sample because:
- Generalizing to population
- Avoiding bias
- Valid inference

Without randomness:
- Results may not generalize
- Systematic patterns
- Invalid conclusions

Step 3: Expected count condition
CRITICAL: Expected counts (not observed) ≥ 5

Why expected, not observed?
- Test assumes H₀ is true
- Expected counts calculated under H₀
- These determine distribution

Check: E = np for each category
All E ≥ 5

Step 4: Why need expected ≥ 5?
Chi-square distribution is APPROXIMATION

Small expected counts:
- Approximation poor
- χ² distribution doesn't fit well
- p-values inaccurate
- Can't trust results

Large expected counts:
- Approximation good
- χ² distribution fits well
- p-values accurate

Step 5: Mathematical reason
χ² = Σ(O-E)²/E

When E is small:
- (O-E)²/E can be huge
- Even small deviations matter a lot
- Distribution becomes skewed
- Doesn't follow chi-square curve

When E is large:
- (O-E)²/E more stable
- Follows chi-square distribution
- Central Limit Theorem applies

Step 6: What if expected < 5?
Options:

1. Combine categories
   - Merge small categories
   - Increase expected counts
   - Lose some detail

Example: Ages
Instead of: 0-9, 10-19, 20-29, ...
Use: 0-19, 20-39, 40+

2. Collect more data
   - Increase sample size
   - Increases all expected counts
   - Better solution if possible

3. Use different test
   - Fisher's exact test
   - Other methods for small samples

Step 7: Independent observations
Each observation counted once:
- No repeated measurements
- No clusters
- No matching

Violations:
✗ Same person counted multiple times
✗ Family members (not independent)
✗ Repeated measures

Step 8: Sample size consideration
MINIMUM total sample size?

Rule of thumb:
n ≥ 5k

Where k = number of categories

Example:
6 categories → need n ≥ 30
Then each expected ≥ 30/6 = 5

Step 9: Example: Too small
Survey 20 people about 5 options

If H₀: all equal
Expected per category = 20/5 = 4 < 5 ✗

Chi-square test NOT appropriate!
Need at least 25 people (25/5 = 5)

Step 10: Summary of conditions
┌─────────────────┬───────────────────────┐
│ CONDITION       │ WHY NEEDED            │
├─────────────────┼───────────────────────┤
│ Random sample   │ Valid generalization  │
│                 │ Avoid bias            │
├─────────────────┼───────────────────────┤
│ Expected ≥ 5    │ Chi-square approx good│
│ (all cells)     │ Accurate p-values     │
├─────────────────┼───────────────────────┤
│ Independent obs │ No double-counting    │
│                 │ Valid test statistic  │
└─────────────────┴───────────────────────┘

Answer:
CONDITIONS:
1. Random sample/assignment
2. All EXPECTED counts ≥ 5 (not observed!)
3. Independent observations

WHY EXPECTED ≥ 5? The chi-square distribution is an approximation that works well only when expected counts are large enough. With small expected counts, the approximation breaks down and p-values become inaccurate. The rule E ≥ 5 ensures the sampling distribution follows the chi-square curve closely enough for valid inference.

If expected < 5: Combine categories, collect more data, or use alternative test like Fisher's exact test.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        question: 'Test if political party affiliation is independent of age group. Data: Young (Democrat: 40, Republican: 30, Independent: 30), Middle (50, 50, 40), Old (30, 50, 30). Use α = 0.05.',
        solution: `Step 1: Set up hypotheses
Chi-square test for independence

H₀: Party affiliation independent of age
Hₐ: Party affiliation dependent on age

Step 2: Create observed table
              Dem   Rep   Ind   Total
Young          40    30    30    100
Middle         50    50    40    140
Old            30    50    30    110
Total         120   130   100   350

Step 3: Calculate expected counts
E = (row total × column total)/grand total

Young-Dem: (100×120)/350 = 34.29
Young-Rep: (100×130)/350 = 37.14
Young-Ind: (100×100)/350 = 28.57

Middle-Dem: (140×120)/350 = 48.00
Middle-Rep: (140×130)/350 = 52.00
Middle-Ind: (140×100)/350 = 40.00

Old-Dem: (110×120)/350 = 37.71
Old-Rep: (110×130)/350 = 40.86
Old-Ind: (110×100)/350 = 31.43

Step 4: Expected table
              Dem     Rep     Ind
Young        34.29   37.14   28.57
Middle       48.00   52.00   40.00
Old          37.71   40.86   31.43

Step 5: Check conditions
RANDOM: Assume random sample ✓
EXPECTED: All expected ≥ 5 ✓
  (Minimum is 28.57)
INDEPENDENT: Each person counted once ✓

Step 6: Calculate (O-E)²/E for each cell
Young-Dem: (40-34.29)²/34.29 = 0.95
Young-Rep: (30-37.14)²/37.14 = 1.37
Young-Ind: (30-28.57)²/28.57 = 0.07

Middle-Dem: (50-48.00)²/48.00 = 0.08
Middle-Rep: (50-52.00)²/52.00 = 0.08
Middle-Ind: (40-40.00)²/40.00 = 0.00

Old-Dem: (30-37.71)²/37.71 = 1.58
Old-Rep: (50-40.86)²/40.86 = 2.05
Old-Ind: (30-31.43)²/31.43 = 0.07

Step 7: Calculate χ²
χ² = 0.95 + 1.37 + 0.07 + 0.08 + 0.08 + 0.00 + 1.58 + 2.05 + 0.07
   = 6.25

Step 8: Find degrees of freedom
df = (rows - 1)(columns - 1)
   = (3 - 1)(3 - 1)
   = 2 × 2
   = 4

Step 9: Find p-value
df = 4, χ² = 6.25

From chi-square table:
P(χ² > 6.25) ≈ 0.18

p-value ≈ 0.18

Step 10: Make decision
p = 0.18 > 0.05

FAIL TO REJECT H₀

Step 11: Conclude
At the α = 0.05 significance level, there is insufficient evidence that political party affiliation depends on age group.

Party preference appears independent of age.

Step 12: Interpret
While some cells show deviations:
- Old people slightly more Republican
- Young people slightly more Democrat

These differences could be due to chance
Not statistically significant

Answer:
H₀: Party independent of age
Hₐ: Party dependent on age
χ² = 6.25, df = 4
P-value ≈ 0.18
Decision: Fail to reject H₀
Conclusion: No evidence party depends on age`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        question: 'For a chi-square test of independence with a 2×3 table (2 rows, 3 columns), what are the degrees of freedom? Explain the formula df = (r-1)(c-1).',
        solution: `Step 1: Calculate df for 2×3 table
r = 2 rows
c = 3 columns

df = (r - 1)(c - 1)
   = (2 - 1)(3 - 1)
   = 1 × 2
   = 2

Answer: df = 2

Step 2: Why this formula?
Degrees of freedom = number of free choices

Once we know:
- Row totals
- Column totals
- Grand total

How many cells can we freely choose?

Step 3: Example with 2×3 table
        Col1  Col2  Col3  Row Total
Row1     ?     ?     ?      100
Row2     ?     ?     ?      150
Total   80    90    80      250

Step 4: Fill in cells freely
Start filling cells:

Cell(1,1) = 40 ← FREE CHOICE
Cell(1,2) = 50 ← FREE CHOICE

Now Cell(1,3) is DETERMINED:
Must be 100 - 40 - 50 = 10

        Col1  Col2  Col3  Row Total
Row1     40    50    10      100
Row2     ?     ?     ?      150
Total   80    90    80      250

Step 5: Continue filling
Cell(2,1) is DETERMINED:
Must be 80 - 40 = 40

Cell(2,2) is DETERMINED:
Must be 90 - 50 = 40

Cell(2,3) is DETERMINED:
Must be 80 - 10 = 70

        Col1  Col2  Col3  Row Total
Row1     40    50    10      100
Row2     40    40    70      150
Total   80    90    80      250

Step 6: Count free choices
Total cells: 2 × 3 = 6

Free choices: 2
- Cell(1,1)
- Cell(1,2)

Other 4 cells determined by totals!

df = 2 ✓

Step 7: General pattern
For r × c table:

FREE CHOICES in first r-1 rows:
Can freely choose c-1 cells per row

Total free choices:
(r - 1) × (c - 1)

Last row: All determined
Last column: All determined

Step 8: Visualize with 3×4 table
        C1   C2   C3   C4
R1      F    F    F    D    ← 3 free, 1 determined
R2      F    F    F    D    ← 3 free, 1 determined
R3      D    D    D    D    ← All determined
        ↑    ↑    ↑    ↑
       Free Free Free All
                       Det

Free cells: (3-1)(4-1) = 2×3 = 6 ✓

Step 9: Why does this matter?
Degrees of freedom determine:
- Chi-square distribution shape
- Critical values
- P-values

More df:
- Flatter distribution
- Higher critical values
- Harder to reject H₀

Fewer df:
- More skewed distribution
- Lower critical values
- Easier to reject H₀

Step 10: Common table sizes
2×2: df = (2-1)(2-1) = 1
2×3: df = (2-1)(3-1) = 2
3×3: df = (3-1)(3-1) = 4
4×5: df = (4-1)(5-1) = 12

Step 11: Goodness-of-fit vs Independence
GOODNESS-OF-FIT (one variable):
- k categories
- df = k - 1

INDEPENDENCE (two variables):
- r × c table
- df = (r-1)(c-1)

Different formulas!

Answer:
For 2×3 table: df = 2

FORMULA: df = (r-1)(c-1) where r = rows, c = columns

WHY? Represents number of cells we can freely choose before the rest are determined by the fixed row and column totals. In a 2×3 table, we can freely choose 2 cells; the other 4 are then determined. This is the number of "free choices" or degrees of freedom.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        question: 'A researcher gets χ² = 12.5 with df = 4. They look up the p-value and find p ≈ 0.014. Then they realize one expected count was 4.5 (< 5). How does this affect the validity of their test? What should they do?',
        solution: `Step 1: Identify the problem
CONDITION VIOLATED:
All expected counts should be ≥ 5
One expected count = 4.5 < 5 ✗

This violates chi-square test assumptions!

Step 2: Why this matters
Chi-square distribution is approximation

Approximation good when:
- All expected counts ≥ 5
- Sampling distribution follows χ² curve
- P-values accurate

Approximation poor when:
- Any expected count < 5
- Sampling distribution deviates from χ² curve
- P-values may be WRONG

Step 3: How bad is 4.5?
Borderline case:
- 4.5 is close to 5
- Not terribly small (like 1 or 2)
- But still technically violates rule

Impact depends on:
- How many cells total
- How much below 5
- How close to significance

Step 4: Effect on p-value
With expected = 4.5:

True p-value could be:
- Higher than 0.014 (test too liberal)
- Lower than 0.014 (test too conservative)
- Usually makes test too liberal

Reported: p ≈ 0.014
Actual: p might be 0.02 or 0.03

Step 5: Effect on conclusion
Current result: p = 0.014 < 0.05
Decision: Reject H₀

If true p-value actually 0.06:
Should fail to reject H₀!

WRONG CONCLUSION possible!

Step 6: What to do - Option 1: Combine categories
If possible, merge cells to increase expected counts

Example: Age groups
Current: 18-25, 26-35, 36-45, 46-55, 56+
Problem: 18-25 has E = 4.5

Solution: Combine
New: 18-35, 36-55, 56+
Now all E ≥ 5 ✓

Recalculate χ² with new table

Step 7: What to do - Option 2: Collect more data
Increase sample size

Current: n = 100, E = 4.5
If double to n = 200:
New E = 9.0 ✓

Then retest with larger sample

Step 8: What to do - Option 3: Use exact test
For small samples:
- Fisher's exact test (2×2 tables)
- Monte Carlo simulation
- Permutation tests

Don't rely on chi-square approximation

Step 9: What to do - Option 4: Report with caution
If can't collect more data or combine:

Report:
"χ² = 12.5, df = 4, p ≈ 0.014

NOTE: One expected count (4.5) is slightly below the recommended minimum of 5. Results should be interpreted with caution as the chi-square approximation may not be accurate. P-value may be less reliable."

Step 10: How close was this to 5?
E = 4.5 is 90% of required minimum

Guidelines:
E ≥ 5: Safe ✓
E = 4-5: Borderline, use caution
E = 1-4: Poor approximation
E < 1: Very poor, don't use

4.5 is borderline - not terrible but not ideal

Step 11: Consider practical significance
Even if test valid:

χ² = 12.5, p = 0.014

This is barely significant:
- p close to 0.01
- Not overwhelming evidence
- Borderline result

Combined with violated assumption:
→ Results questionable
→ Need more data or better analysis

Step 12: Best practice going forward
BEFORE collecting data:
1. Calculate needed sample size
2. Ensure all expected ≥ 5
3. Plan category structure
4. Avoid this problem!

AFTER data collection:
1. Check expected counts FIRST
2. If any < 5, combine or collect more
3. Don't proceed if conditions violated

Step 13: Recommendation for this researcher
IMMEDIATE ACTION:
1. Check if categories can be combined
2. If yes: Recalculate with combined table
3. If no: Collect more data or use exact test
4. DON'T trust current p-value of 0.014

REPORT:
State the limitation
Acknowledge violated assumption
Either:
- Present corrected analysis, OR
- Note results are preliminary/suggestive

Step 14: Ethical consideration
Publishing results knowing assumption violated:
- Scientifically questionable
- Potentially misleading
- Should disclose or fix

Better to:
- Acknowledge limitation
- Provide corrected analysis
- Be transparent about methods

Answer:
VALIDITY AFFECTED: The test results are questionable because the expected count condition is violated. The p-value of 0.014 may not be accurate - could be too small (test too liberal) making researchers more likely to reject H₀ when they shouldn't.

WHAT TO DO:
1. BEST: Combine categories to get all expected ≥ 5, then recalculate
2. ALTERNATIVE: Collect more data to increase all expected counts
3. IF IMPOSSIBLE: Use Fisher's exact test or report with strong caution

DON'T: Trust the current p-value or proceed as if test is valid

The violation is borderline (4.5 vs 5) so impact may be small, but results should not be considered reliable without correction. Proper statistical practice requires meeting test conditions before drawing conclusions.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: chiSquare.id,
        front: 'What is the chi-square goodness-of-fit test used for?',
        back: 'Tests if observed frequencies match expected frequencies for a single categorical variable. H₀: All proportions match specified values. χ² = Σ(O-E)²/E, df = k-1 (k categories).',
        hint: 'One variable; observed vs expected frequencies',
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        front: 'What is the chi-square test of independence used for?',
        back: 'Tests if two categorical variables are independent. H₀: Variables are independent. χ² = Σ(O-E)²/E, df = (r-1)(c-1) for r×c table. E = (row total × column total)/grand total.',
        hint: 'Two variables; test independence',
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        front: 'What are the conditions for chi-square tests?',
        back: 'Random sample, all EXPECTED counts ≥ 5 (not observed!), independent observations. If expected < 5: combine categories, collect more data, or use alternative test.',
        hint: 'Random; expected ≥ 5; independent',
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        front: 'How do you calculate degrees of freedom for chi-square tests?',
        back: 'Goodness-of-fit: df = k - 1 (k = categories). Independence: df = (r-1)(c-1) (r = rows, c = columns). df = number of freely choosable cells.',
        hint: 'GOF: k-1; Independence: (r-1)(c-1)',
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        front: 'What is the chi-square test statistic formula?',
        back: 'χ² = Σ(O-E)²/E, sum over all cells. O = observed count, E = expected count. Large χ² means observed far from expected. Compare to chi-square distribution with appropriate df.',
        hint: 'χ² = Σ(O-E)²/E',
        isPremium: false
      },
      {
        topicId: chiSquare.id,
        front: 'How do you find expected counts for test of independence?',
        back: 'E = (row total × column total)/grand total for each cell. Use these expected counts (not observed) to check E ≥ 5 condition and calculate χ².',
        hint: 'E = (row × column)/total',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: chi-square-tests (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Scatterplots and Correlation
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: scatterplots.id,
        question: 'Data shows correlation r = 0.85 between hours studied and exam score. Interpret this value.',
        solution: `Step 1: Understand correlation r
Correlation coefficient r:
- Measures linear relationship strength
- Ranges from -1 to +1
- Direction and strength

Step 2: Interpret sign
r = 0.85 is POSITIVE

Positive correlation means:
- As one variable increases, other increases
- Direct relationship
- Same direction movement

For this problem:
More hours studied → Higher exam scores

Step 3: Interpret magnitude
|r| = 0.85 is HIGH

Correlation strength guidelines:
|r| = 0.0-0.3: Weak
|r| = 0.3-0.7: Moderate  
|r| = 0.7-1.0: Strong

0.85 = Strong positive correlation

Step 4: What r = 0.85 means
Strong linear relationship:
- Points close to straight line
- Can predict score from hours well
- Relationship is consistent

But not perfect (r ≠ 1):
- Some scatter around line
- Other factors matter
- Not deterministic

Step 5: What correlation does NOT mean
r = 0.85 does NOT mean:
✗ Studying CAUSES higher scores (no causation!)
✗ 85% of variation explained (that's r²!)
✗ Scores are 85% determined by hours
✗ Linear relationship is definitely appropriate

Step 6: Proper interpretation
"There is a strong positive linear association between hours studied and exam scores (r = 0.85). Students who study more hours tend to score higher on exams, with the relationship being quite consistent."

Step 7: Limitations
Even with r = 0.85:
- Could be confounding variables
- Relationship might not be causal
- Could be reverse causation
- Might be nonlinear if extended
- Based on sample, not population

Answer:
r = 0.85 indicates a STRONG POSITIVE linear correlation.

INTERPRETATION: There is a strong positive linear relationship between hours studied and exam scores. As study hours increase, exam scores tend to increase in a fairly consistent, predictable manner. About 85% of the straight-line pattern is present, though there is still some variability.

CAUTION: Correlation does not imply causation - we cannot conclude studying causes higher scores without experimental evidence.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        question: 'Explain the difference between r = -0.9 and r = +0.3. Which shows a stronger relationship?',
        solution: `Step 1: Compare magnitudes
r = -0.9: |r| = 0.9
r = +0.3: |r| = 0.3

STRENGTH determined by |r|, not sign!

0.9 > 0.3
Therefore: r = -0.9 shows STRONGER relationship

Step 2: r = -0.9 characteristics
SIGN: Negative (-)
- As x increases, y decreases
- Inverse relationship
- Opposite directions

MAGNITUDE: 0.9
- Very strong relationship
- Points very close to line
- Highly predictable
- Almost perfect linear pattern

Example: Temperature vs heating cost
Strong negative: warmer → lower cost

Step 3: r = +0.3 characteristics
SIGN: Positive (+)
- As x increases, y increases
- Direct relationship
- Same direction

MAGNITUDE: 0.3
- Weak relationship
- Points scattered
- Low predictability
- Lots of variation around line

Example: Shoe size vs intelligence
Weak positive: barely related

Step 4: Visualize the difference
r = -0.9: Nearly perfect downward line
  y |\\
    | \\
    |  \\___
    |      \\
    |________\\__ x
    Very tight around line

r = +0.3: Weak upward trend
  y |    ·   ·
    | ·    ·    ·
    |  ·  ·  ·
    | ·  ·   ·
    |___________x
    Lots of scatter

Step 5: Prediction accuracy
r = -0.9:
- Can predict y from x very well
- Small prediction errors
- Regression line fits tightly
- r² = 0.81 (81% variation explained)

r = +0.3:
- Poor prediction of y from x
- Large prediction errors
- Regression line fits loosely
- r² = 0.09 (only 9% explained!)

Step 6: Statistical significance
Both could be "significant" but:

r = -0.9:
- Almost certainly significant
- Very strong evidence of relationship
- Even with small sample

r = +0.3:
- Might or might not be significant
- Weak evidence
- Need larger sample to detect

Step 7: Practical importance
r = -0.9:
- Practically important
- Strong enough to make predictions
- Variables clearly related
- Worth using for decisions

r = +0.3:
- Questionable practical importance
- Too weak for good predictions
- Other variables more important
- Might not be useful

Step 8: Key misconception
Common mistake:
"Positive correlation is stronger than negative"

WRONG! ✗

Strength depends on |r|, not sign:
- r = -0.9 is STRONGER than r = +0.3
- r = -0.5 is STRONGER than r = +0.4  
- r = -1.0 is STRONGEST possible (perfect)

Step 9: Summary comparison
┌──────────────┬──────────┬──────────┐
│              │ r = -0.9 │ r = +0.3 │
├──────────────┼──────────┼──────────┤
│ Direction    │ Negative │ Positive │
│ Strength     │ Strong   │ Weak     │
│ Which stronger│   ←──    │          │
│ Prediction   │ Excellent│ Poor     │
│ r²           │ 0.81     │ 0.09     │
│ Pattern      │ Tight    │ Scattered│
└──────────────┴──────────┴──────────┘

Answer:
r = -0.9 shows a MUCH STRONGER relationship than r = +0.3.

STRENGTH is determined by |r| (absolute value), NOT the sign:
- |−0.9| = 0.9 = Very strong
- |+0.3| = 0.3 = Weak

DIRECTION differs:
- r = -0.9: Strong NEGATIVE (as x↑, y↓)
- r = +0.3: Weak POSITIVE (as x↑, y↑ slightly)

For prediction and practical use, r = -0.9 is far superior despite being negative. The sign only tells direction, not strength!`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        question: 'Five data points have: Σx = 25, Σy = 40, Σxy = 220, Σx² = 165, Σy² = 360. Calculate the correlation coefficient r.',
        solution: `Step 1: Formula for correlation
r = [nΣxy - (Σx)(Σy)] / √([nΣx² - (Σx)²][nΣy² - (Σy)²])

Step 2: Identify values
n = 5
Σx = 25
Σy = 40
Σxy = 220
Σx² = 165
Σy² = 360

Step 3: Calculate numerator
Numerator = nΣxy - (Σx)(Σy)
          = 5(220) - (25)(40)
          = 1100 - 1000
          = 100

Step 4: Calculate first part of denominator
nΣx² - (Σx)² = 5(165) - (25)²
              = 825 - 625
              = 200

Step 5: Calculate second part of denominator
nΣy² - (Σy)² = 5(360) - (40)²
              = 1800 - 1600
              = 200

Step 6: Calculate denominator
Denominator = √([200][200])
            = √40000
            = 200

Step 7: Calculate r
r = 100/200
  = 0.5

Step 8: Interpret
r = 0.5 means:
- Moderate positive correlation
- As x increases, y tends to increase
- Relationship is fairly consistent
- Not weak, not strong

Step 9: Check reasonableness
r = 0.5 is:
✓ Between -1 and 1 ✓
✓ Positive (makes sense if data trends up)
✓ Moderate magnitude

Answer: r = 0.5

This indicates a moderate positive linear correlation between the variables.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        question: 'A scatterplot shows a clear curved pattern (y increases rapidly then levels off). The correlation is r = 0.4. Is correlation appropriate here? Explain.',
        solution: `Step 1: What correlation measures
Correlation r measures:
- LINEAR relationship strength
- How well points fit straight line
- Only appropriate for linear patterns

Step 2: The problem
Data shows CURVED pattern:
- Not linear
- Exponential, logarithmic, or other curve
- y increases rapidly then levels off

Example shapes:
     y|    ____
      |   /
      |  /
      | /
      |________ x
      Curved!

Step 3: Why r = 0.4 is misleading
r = 0.4 suggests "weak positive linear relationship"

But reality:
- Relationship is STRONG
- Just not LINEAR
- r captures only linear component
- Misses the curved pattern

Step 4: Correlation is NOT appropriate
NO, correlation is not appropriate because:

✗ Relationship is nonlinear
✗ r only measures linear association
✗ r underestimates true strength
✗ Misleading interpretation

Step 5: What should be done instead
BETTER approaches:

1. Transform variables
   - Try log(y), √y, 1/y
   - Linearize relationship
   - Then use correlation

2. Fit nonlinear model
   - Exponential: y = ae^(bx)
   - Power: y = ax^b
   - Better fit than line

3. Describe pattern verbally
   - "Strong curved relationship"
   - "Exponential growth pattern"
   - Don't rely on r

Step 6: Example of the issue
Suppose true relationship: y = x²

Perfect curved relationship!
But if we calculate r:
- r might be only 0.6 or 0.7
- Suggests "moderate" relationship
- Actually PERFECT curved relationship!

Correlation fails for curves

Step 7: How to recognize problem
BEFORE calculating r, check scatterplot:

If pattern is:
✓ Linear → r appropriate
✗ Curved → r NOT appropriate
✗ Clusters → r misleading
✗ Outliers → r distorted

Always plot first!

Step 8: Real example
Temperature vs plant growth:
- Low temp: slow growth
- Medium temp: rapid growth
- High temp: growth slows (stress)

Pattern: Curved (parabola)
r might be 0.3 (weak)
But relationship is STRONG, just curved!

r = 0.3 completely misleading!

Step 9: What the r = 0.4 tells us
For this curved data:

r = 0.4 means:
- Linear component is weak
- Straight line fits poorly
- But tells us nothing about true relationship strength
- Ignores the curvature

Step 10: Proper analysis
For curved pattern:

1. Identify curve type
   - Exponential growth?
   - Logarithmic?
   - Quadratic?

2. Transform to linearize
   - log(y) vs x
   - y vs log(x)
   - √y vs x

3. Check new scatterplot
   - Now linear?
   - Calculate r for transformed data

4. OR use nonlinear regression
   - Fit appropriate curve
   - Report R² for curve
   - Better than forcing line

Answer:
NO, correlation is NOT appropriate for this data.

REASON: Correlation r measures only LINEAR relationships. The data shows a clear CURVED pattern, which r cannot properly capture. The r = 0.4 value is misleading - it suggests a weak relationship, but the true relationship is actually strong, just nonlinear.

WHAT TO DO:
1. Transform variables to linearize the relationship
2. Fit a nonlinear model appropriate for the curve
3. Describe the pattern without relying on r

LESSON: Always examine the scatterplot first. Correlation is only valid for linear patterns. For curved patterns, r underestimates the true strength of the relationship.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        question: 'Data on x and y has r = 0.7. One outlier is removed and r increases to 0.9. Explain how an outlier can decrease correlation. What does this say about the original r = 0.7?',
        solution: `Step 1: Understand the situation
Original data: r = 0.7 (moderate-strong)
After removing outlier: r = 0.9 (very strong)

Change: r increased by 0.2

Outlier was REDUCING correlation!

Step 2: How outliers affect correlation
Outliers can:
- Increase r (if follows pattern)
- Decrease r (if deviates from pattern)
- Change direction of r

Effect depends on outlier location

Step 3: This outlier decreased r
Outlier decreased r from 0.9 to 0.7

Means outlier:
- Didn't fit linear pattern
- Was "off the line"
- Added scatter/noise
- Weakened apparent relationship

Step 4: Types of outliers
OUTLIER THAT DECREASES r:
     y|        ·
      |      o/  ← outlier off line
      |     /·
      |    /·
      |   /·
      |__________x

Main pattern: strong line
Outlier: breaks pattern
r decreases

OUTLIER THAT INCREASES r:
     y|       ·
      |      /·
      |     /·o← outlier extends line
      |    /·
      |   /·
      |__________x

Outlier: extends pattern
r increases

Step 5: What happened here
Without outlier: r = 0.9
- Very tight linear pattern
- Points close to line
- Strong relationship

With outlier: r = 0.7
- Outlier adds scatter
- Pattern less clear
- Appears weaker

Step 6: Original r = 0.7 was misleading
r = 0.7 suggested "moderate-strong" relationship

But:
- True relationship is r = 0.9 (very strong!)
- Outlier masked this
- One bad point distorted whole summary

r = 0.7 underestimated relationship strength

Step 7: Correlation is NOT resistant
Correlation is sensitive to outliers:
- One point can change r substantially
- Not robust statistic
- Can be misleading

In this case:
- 1 outlier changed r by 0.2
- Large effect from single point
- Shows lack of resistance

Step 8: Practical implications
If you only saw r = 0.7:
- Might think relationship moderate
- Might not use for prediction
- Might look for other variables

After removing outlier (r = 0.9):
- Realize relationship is strong
- Good for prediction
- Very useful!

One outlier changed interpretation completely!

Step 9: What to do about outliers
ALWAYS:
1. Make scatterplot first
2. Identify outliers
3. Investigate outliers
   - Data error?
   - Special case?
   - Interesting finding?

4. Calculate r with and without
5. Report both values
6. Make informed decision

Step 10: Investigating the outlier
Should ask:
- Is it a data entry error? (Fix it)
- Is it a measurement error? (Remove it)
- Is it a real but special case? (Analyze separately)
- Does it represent important subgroup? (Keep it)

Don't automatically remove!
But understand its impact

Step 11: Example scenario
Suppose: Height vs weight

Most points: clear linear pattern (r = 0.9)
One outlier: 6'2" person who weighs 120 lbs

This person:
- Real data (not error)
- Special case (medical condition?)
- Breaks pattern
- Reduces r to 0.7

Should probably:
- Report both correlations
- Note the outlier
- Investigate special case

Step 12: Proper reporting
BAD: "Correlation is r = 0.7"
(Misleading!)

BETTER: "Correlation is r = 0.7 overall, but r = 0.9 when excluding one outlier. The outlier appears to be [description]. [Decision about inclusion]."

Transparent about impact!

Step 13: Implications for robustness
This shows:
- Always check for outliers
- Always make scatterplot
- Don't trust correlation alone
- Consider resistant alternatives (Spearman rank correlation)

Step 14: What the r = 0.9 tells us
Without outlier:
- Very strong linear relationship
- Points tightly clustered around line
- Excellent for prediction
- Relationship is robust (except for one point)

This is the "true" relationship
Outlier was exception, not the rule

Answer:
An outlier can DECREASE correlation if it deviates from the linear pattern formed by the other points.

HOW IT HAPPENED:
- Without outlier: points form tight line (r = 0.9)
- Outlier: far from this line, adds scatter
- With outlier: pattern looks weaker (r = 0.7)

The outlier masked the true strong relationship, making it appear more moderate.

WHAT THIS SAYS ABOUT r = 0.7:
The original r = 0.7 was misleading! It underestimated the relationship strength due to one anomalous point. The "true" relationship is actually very strong (r = 0.9). This demonstrates that:
1. Correlation is NOT resistant to outliers
2. A single point can substantially change r
3. Always examine scatterplots to identify outliers
4. Report correlation with and without outliers when appropriate

The strong r = 0.9 likely better represents the actual relationship between the variables.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: scatterplots.id,
        front: 'What does correlation coefficient r measure?',
        back: 'Strength and direction of LINEAR relationship. Range: -1 to +1. Sign = direction (+: positive, -: negative). |r| = strength (0: none, 1: perfect). Only for linear patterns!',
        hint: 'Linear relationship strength; -1 to +1',
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        front: 'How do you interpret correlation strength |r|?',
        back: '|r| = 0.0-0.3: Weak, |r| = 0.3-0.7: Moderate, |r| = 0.7-1.0: Strong. Sign shows direction (+ or -). Strength determined by absolute value, not sign!',
        hint: 'Weak <0.3; Moderate 0.3-0.7; Strong >0.7',
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        front: 'When is correlation NOT appropriate?',
        back: 'When relationship is nonlinear (curved), when outliers present, when dealing with categorical data. r only measures linear patterns. Always check scatterplot first!',
        hint: 'Not for curves, outliers, categorical',
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        front: 'Does correlation imply causation?',
        back: 'NO! Correlation shows association, NOT causation. Could be: confounding variable, reverse causation, or coincidence. Need controlled experiment to establish causation.',
        hint: 'NO - association ≠ causation',
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        front: 'How do outliers affect correlation?',
        back: 'Correlation is NOT resistant to outliers. One outlier can substantially change r (increase or decrease). Can make weak relationships appear strong or vice versa. Always identify outliers!',
        hint: 'Not resistant; can change r substantially',
        isPremium: false
      },
      {
        topicId: scatterplots.id,
        front: 'What\'s the difference between r and r²?',
        back: 'r = correlation (-1 to 1): measures linear relationship strength and direction. r² = coefficient of determination (0 to 1): percent of variation in y explained by x. r² = (r)².',
        hint: 'r: relationship; r²: variation explained',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: scatterplots-correlation-stats (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 6 Complete! HT Complete (6/6) + Regression Start (1/6)');
  console.log('Progress: 27/34 AP Statistics topics complete (79%)');
  
  await prisma.$disconnect();
}

main();
