import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateTopic(slug: string, textContent: string) {
  try {
    await prisma.topic.update({
      where: { slug },
      data: { textContent },
    })
    console.log(`✅ ${slug}`)
  } catch (e) {
    console.warn(`⚠️  ${slug}: ${(e as Error).message}`)
  }
}

async function main() {
  console.log('📊 Expanding AP Stats textContent (part 2/4)…\n')

  await updateTopic(
    'sampling-methods',
    `
# 🎯 Sampling Methods

## Types of Sampling

**Simple Random Sample (SRS)**
- Every possible sample of size $n$ has equal chance of selection
- Use random number generator or table
- Advantages: unbiased, easy to analyze
- Disadvantages: may miss subgroups, expensive for large populations

**Stratified Random Sample**
- Divide population into homogeneous groups (strata)
- Randomly sample from each stratum
- Proportional allocation: sample size per stratum ∝ stratum size
- Advantages: ensures representation, reduces variability
- Example: sample 10% from each grade level separately

**Cluster Sample**
- Divide population into clusters (typically geographic)
- Randomly select clusters, measure all units in selected clusters
- Advantages: economical, practical for spread-out populations
- Disadvantages: less precise, within-cluster correlation inflates variance
- Example: randomly select 5 schools, test all students in those schools

**Systematic Sample**
- Order population, randomly select first unit, then every $k$-th unit
- $k = \\text{Population size} / \\text{Sample size}$
- Quasi-random, practical for lists
- Danger: if list has hidden pattern aligned with $k$, introduces bias

**Multistage Sampling**
- Combination of methods in stages
- Example: first cluster by state, then stratify by income within state, then SRS
- Used in complex surveys (e.g., National Health Interview Survey)

**Convenience Sample**
- Select easily accessible subjects (NOT probabilistic)
- High bias risk, results not generalizable
- Only appropriate for exploratory studies

## Bias and When to Use Each Method

**Undercoverage:** some population members cannot be selected
- Risk in convenience sampling, cluster sampling
- Can lead to systematic bias toward accessible units

**When to use each:**
- **SRS:** diverse, accessible population, sufficient budget
- **Stratified:** population has natural groups; want subgroup estimates
- **Cluster:** population geographically dispersed, cost is concern
- **Systematic:** ordered list available, no hidden periodicity
- **Multistage:** complex population, multiple levels of variation

## Common Mistakes

- Confusing stratified with cluster (stratified ensures each group represented; cluster assumes homogeneity within cluster)
- Using convenience sample and claiming it represents population
- Choosing $k$ without checking for patterns in sampling frame

## Decision Rule

Check: Is population accessible? → SRS
Check: Natural subgroups? → Stratified
Check: Geographically dispersed? → Cluster
Check: Ordered list? → Systematic

## AP Exam Tip

"Describe a sampling method" essays require: define the method, identify strata/clusters, explain how randomization is implemented, and discuss any bias risks.
`
  )

  await updateTopic(
    'observational-vs-experiments',
    `
# 🔬 Observational Studies vs Experiments

## Key Distinction

**Observational Study**
- Researchers observe/record without intervention
- Subjects in treatment groups already exist or self-select
- Can only establish association
- Examples: survey, cohort study, case-control study

**Experiment**
- Researchers randomly assign subjects to treatment groups
- Researcher controls treatment (independent variable)
- Can establish causation
- Examples: randomized controlled trial, laboratory experiment

## Why Causation Requires Random Assignment

**Confounding Variables (Lurking Variables)**
- Variable that affects both treatment and outcome
- Creates spurious association
- Example: Ice cream sales → drowning deaths (both ↑ in summer)

**Without random assignment:**
- Treatment groups may differ in pre-existing ways
- Cannot isolate effect of treatment from confounders
- Example: patients choosing statins may already have healthier behaviors

**With random assignment:**
- Confounders randomly distributed across groups (on average)
- Expected value of confounding effect = 0
- Treatment difference attributable to treatment, not confounders

## Study Design Types

**Cohort Study** (Observational)
- Follow subjects forward in time
- Identify baseline exposure status
- Track outcomes over time
- Can calculate risk/relative risk
- Long, expensive; expensive
- Can study multiple outcomes

**Case-Control Study** (Observational)
- Identify subjects with and without outcome
- Look back at past exposure
- Calculate odds ratio
- Efficient for rare outcomes
- Prone to recall bias
- Example: interviews of heart attack patients vs controls about smoking

**Randomized Controlled Trial (RCT)** (Experiment)
- Randomly assign to treatment or control
- Gold standard for causation
- Expensive, time-consuming
- Ethical concerns if withholding known benefit
- Example: vaccine trials with placebo control

## Common Mistakes

- Claiming causation from observational data
- Ignoring confounders in observational analysis
- Confusing cohort (forward-looking) with case-control (backward-looking)

## Decision Rule

Need causal inference? → Must use random assignment
Only have observational data? → Report association, NOT causation; identify potential confounders

## AP Exam Tip

Always distinguish between "associated with" (observational) and "causes" (experimental). If a study lacks random assignment, you cannot conclude causation no matter how strong the association.
`
  )

  await updateTopic(
    'experimental-design',
    `
# 🧪 Experimental Design Principles

## Key Components

**Random Assignment**
- Each subject has equal probability of assignment to each treatment
- Balances known and unknown confounders
- Implementation: random number generator, random digit table

**Control Group**
- Receives placebo, standard treatment, or no treatment
- Provides baseline for comparison
- Without control, cannot assess treatment effect

**Blinding**
- **Single-blind:** subjects don't know treatment assignment
- **Double-blind:** neither subjects nor researchers know (most rigorous)
- Prevents bias in treatment delivery and assessment
- Impossible for some treatments (surgery, counseling)

**Placebo Effect**
- Improvement from expectation alone
- Blinding controls for placebo effect
- Ethical requirement: inform subjects placebo possible (in informed consent)

**Blocking**
- Divide subjects into homogeneous blocks
- Randomly assign treatments within each block
- Reduces within-group variability
- Example: block by gender, then randomly assign to drug vs placebo within each gender

**Matched Pairs Design**
- Special case of blocking: $n=2$ per block
- Pair subjects by relevant characteristics
- Randomly assign one to each treatment per pair
- More efficient than separate random assignment
- Example: before-after measurements on same subject

**Replication**
- Repeat experiment multiple times
- Increases sample size, reduces sampling variability
- Two meanings: (1) number of subjects per group, (2) independent repetition of entire experiment
- Large $n$ → smaller standard error

## Steps for Well-Designed Experiment

1. **Identify variables:** independent (treatment), dependent (outcome), potential confounders
2. **Select subjects:** random sampling from population (if inferring to population)
3. **Random assignment:** to treatment groups
4. **Control:** use control group, blinding, blocking if relevant
5. **Replicate:** sufficient sample size
6. **Standardize:** same procedure, conditions for all subjects
7. **Measure response:** reliable, valid outcome measurement
8. **Analyze:** compare groups, account for variability, assess statistical significance

## Common Mistakes

- Confusing random sampling (who gets in study) with random assignment (who gets which treatment)
- Omitting control group
- Failing to double-blind when possible
- Insufficient replication (too few subjects)
- Blocking on variable unrelated to outcome (wastes degrees of freedom)

## Decision Rule

**Can you randomly assign?** → Experiment (can infer causation)
**Cannot randomly assign?** → Observational (report association only)

## AP Exam Tip

"Design an experiment" prompts require: statement of hypotheses, identification of variables, treatment groups, control group, blinding method, randomization procedure, outcome measurement, and conclusion.
`
  )

  await updateTopic(
    'bias-sampling-surveys',
    `
# ⚠️ Bias in Sampling and Surveys

## Types of Sampling Bias

**Undercoverage**
- Some population members systematically excluded
- Sampling frame does not include all population members
- Example: telephone survey misses homeless, institutionalized, no-phone individuals
- Results biased toward accessible subgroup

**Nonresponse Bias**
- People who don't respond differ from responders
- Higher rates in mail surveys (~50%), lower in in-person (~80%)
- Cannot be completely eliminated, can be reduced via multiple follow-ups
- Example: survey on financial habits—wealthy more likely to refuse

**Voluntary Response Bias**
- Self-selected responders not representative
- Highly motivated to respond (strongly agree or disagree)
- Example: online polls, call-in surveys
- Results typically more extreme than population opinion

## Types of Response Bias

**Wording Effects**
- Question phrasing influences answer
- Example: "Should government spend more on welfare?" vs "Should government spend more on helping poor?"
- Leading questions subtly suggest preferred answer
- Double negatives confuse respondents

**Interviewer Effects**
- Interviewer appearance, tone, demographics influence response
- Subjects give socially desirable answers (social desirability bias)
- Example: respondent gives less honest answer to attractive interviewer
- Reduced by trained, neutral interviewer

**Question Order Effects**
- Previous questions prime respondents
- Example: ask about healthcare costs, then satisfaction → answers affected
- Randomize or pilot-test question order

**Timing and Setting**
- When/where survey taken affects response
- Example: customer satisfaction survey in store vs. email (both environments bias)

## Strategies to Reduce Bias

| Bias | Reduction |
|------|-----------|
| Undercoverage | Use comprehensive sampling frame; multistage or stratified to reach hard-to-reach groups |
| Nonresponse | Multiple contact attempts, incentives, follow-up with non-respondents |
| Voluntary response | Use random sampling instead |
| Wording | Pilot-test questions; use neutral language; avoid leading questions |
| Interviewer | Train interviewers; use telephone/email; randomize interviewer assignment |
| Social desirability | Ensure anonymity; use indirect questions (third-party phrasing) |

## Common Mistakes

- Assuming larger sample size eliminates bias (bias is fixed-size problem, not variability)
- Confusing bias (systematic) with variability (random)
- Believing no-response survey can be unbiased without follow-up

## Decision Rule

**Is bias fixed (doesn't decrease with larger $n$)?** → Reduce via improved design
**Is variability decreasing with $n$?** → Increase sample size

## AP Exam Tip

When critiquing a survey, identify: potential source of bias (which type), explain mechanism, and propose mitigation strategy. Larger samples fix variability, not bias.
`
  )

  await updateTopic(
    'basic-probability-rules',
    `
# 🎲 Basic Probability Rules

## Fundamental Definitions

**Sample Space ($S$)**
- Set of all possible outcomes
- Example: rolling die → $S = \\{1, 2, 3, 4, 5, 6\\}$

**Event ($A$)**
- Subset of sample space
- Example: $A =$ "roll even" $= \\{2, 4, 6\\}$

**Probability**
- $P(A) = \\frac{\\text{# favorable outcomes}}{\\text{# total outcomes}}$ (assuming equally likely)
- Ranges from 0 (impossible) to 1 (certain)

## The Complement Rule

**Definition:** $A^c$ is the complement (event does NOT occur)

$$P(A^c) = 1 - P(A)$$

**Example:** If $P(\\text{pass}) = 0.7$, then $P(\\text{fail}) = 1 - 0.7 = 0.3$

**Use case:** Sometimes easier to calculate $P(A^c)$ directly

## Mutually Exclusive Events

**Definition:** Events cannot occur simultaneously; $P(A \\cap B) = 0$

**Example:** Single die roll → "even" and "odd" are mutually exclusive

**Implication:** If $A$ and $B$ mutually exclusive, then $P(A \\cap B) = 0$

## Addition Rule for Mutually Exclusive Events

$$P(A \\cup B) = P(A) + P(B)$$

**Example:** $P(\\text{roll 1 or 2}) = P(\\text{roll 1}) + P(\\text{roll 2}) = 1/6 + 1/6 = 1/3$

## General Addition Rule (for Any Events)

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

**Subtract $P(A \\cap B)$ to avoid double-counting**

**Example:** 
- $P(A) = 0.6$, $P(B) = 0.4$, $P(A \\cap B) = 0.1$
- $P(A \\cup B) = 0.6 + 0.4 - 0.1 = 0.9$

## Worked Example

**Scenario:** Polling 1000 voters
- 600 support tax increase
- 400 oppose tax increase  
- 100 of supporters also want education reform

What's the probability a voter supports tax increase OR education reform?

$P(\\text{tax} \\cup \\text{reform}) = P(\\text{tax}) + P(\\text{reform}) - P(\\text{tax} \\cap \\text{reform})$
$= 0.6 + ? - 0.1$

Need $P(\\text{reform})$—not given! Use Venn diagram or two-way table.

## Common Mistakes

- Using addition rule for non-mutually-exclusive events without subtracting overlap
- Confusing "and" ($\\cap$) with "or" ($\\cup$)
- Forgetting to subtract $P(A \\cap B)$ in general rule

## Decision Rule

**Are events mutually exclusive?** → Use $P(A) + P(B)$
**Can they overlap?** → Use $P(A) + P(B) - P(A \\cap B)$

## AP Exam Tip

Draw Venn diagrams or two-way tables for clarity. The general addition rule always works—apply it first when unsure.
`
  )

  await updateTopic(
    'conditional-probability',
    `
# 🔗 Conditional Probability

## Definition

**Conditional probability:** Probability of $A$ given $B$ has occurred

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

**Intuition:** Restrict sample space to outcomes where $B$ occurred; within that, find proportion where $A$ also occurred

**Notation:** "$P(A|B)$" reads as "probability of $A$ given $B$"

## Worked Example with Two-Way Table

**Data:** 200 AP Statistics students

| | Passed Exam | Failed Exam | Total |
|---------|-------------|------------|-------|
| Attended Class | 95 | 5 | 100 |
| Skipped Class | 40 | 60 | 100 |
| Total | 135 | 65 | 200 |

**Question:** What's the probability a student passed, given they attended class?

$$P(\\text{Passed} | \\text{Attended}) = \\frac{P(\\text{Passed} \\cap \\text{Attended})}{P(\\text{Attended})} = \\frac{95/200}{100/200} = \\frac{95}{100} = 0.95$$

**Question:** What's the probability a student attended class, given they passed?

$$P(\\text{Attended} | \\text{Passed}) = \\frac{95/200}{135/200} = \\frac{95}{135} ≈ 0.704$$

Note: $P(A|B) \\neq P(B|A)$

## Tree Diagrams

**For sequential events:**
```
Start
├─ A (prob=0.4)
│  ├─ C (prob=0.7)
│  └─ D (prob=0.3)
└─ B (prob=0.6)
   ├─ C (prob=0.2)
   └─ D (prob=0.8)
```

**Path probabilities:** Multiply along branches
- $P(A \\text{ and } C) = 0.4 × 0.7 = 0.28$
- $P(B \\text{ and } C) = 0.6 × 0.2 = 0.12$

**Total:** $P(C) = 0.28 + 0.12 = 0.40$

## Multiplication Rule (General)

$$P(A \\cap B) = P(A) · P(B|A)$$

Or equivalently: $P(A \\cap B) = P(B) · P(A|B)$

**Use:** To find probability of both events

## Common Mistakes

- Confusing $P(A|B)$ with $P(B|A)$
- Using $P(A \\cap B)$ when conditional probability asked
- Forgetting to divide by $P(B)$ in conditional probability formula

## Decision Rule

**"Given that" in problem?** → Use conditional probability
**Computing $P(A \\text{ and } B)$ first?** → Use multiplication rule

## AP Exam Tip

Always redraw two-way table or tree for conditional probability problems. Shading/circling the condition helps avoid errors.
`
  )

  await updateTopic(
    'independence',
    `
# ⚡ Independence of Events

## Definition

**Events $A$ and $B$ are independent if:**

$$P(A|B) = P(A)$$

**Interpretation:** Knowing $B$ occurred doesn't change probability of $A$

**Equivalently (any of these):**
- $P(A|B) = P(A)$
- $P(B|A) = P(B)$
- $P(A ∩ B) = P(A) · P(B)$

## Multiplication Rule for Independent Events

When $A$ and $B$ independent:

$$P(A \\cap B) = P(A) · P(B)$$

**Example:** Flip two fair coins
- $P(\\text{Coin 1 is heads}) = 0.5$
- $P(\\text{Coin 2 is heads}) = 0.5$
- $P(\\text{Both heads}) = 0.5 × 0.5 = 0.25$

## Testing for Independence

**Method:** Check if $P(A \\cap B) = P(A) · P(B)$

**Example with data:**
- $P(\\text{rain}) = 0.3$
- $P(\\text{pain}) = 0.4$
- $P(\\text{rain and pain}) = 0.11$

Check: $P(\\text{rain}) · P(\\text{pain}) = 0.3 × 0.4 = 0.12$

Since $0.11 \\neq 0.12$, not perfectly independent (likely due to sampling variation, but close)

## Common Real-World Examples

**Independent:**
- Coin flips (fair coin)
- Die rolls (fair die)
- Card draws with replacement
- Gender and eye color (biological context)

**Dependent:**
- Card draws without replacement
- Weather and joint pain (claims lack strong evidence)
- ACT score and college GPA (both reflect ability)
- Smoking and lung cancer (causation, strong dependence)

## Worked Example

**Scenario:** 
- $P(\\text{Student studies}) = 0.8$
- $P(\\text{Student passes}) = 0.9$
- $P(\\text{Studies and passes}) = 0.76$

Are studying and passing independent?

Check: $0.8 × 0.9 = 0.72 \\neq 0.76$

**Conclusion:** Dependent (studying increases probability of passing)

$$P(\\text{Pass} | \\text{Study}) = \\frac{0.76}{0.80} = 0.95 > 0.9 = P(\\text{Pass})$$

## Common Mistakes

- Confusing independent with mutually exclusive (opposite concepts!)
- Assuming real-world events independent without testing
- Using multiplication rule when events are dependent

## Decision Rule

**Are events independent?** → Use $P(A ∩ B) = P(A) · P(B)$
**Are events mutually exclusive?** → Use $P(A ∩ B) = 0$

## AP Exam Tip

"Are A and B independent?" requires checking the definition: does knowing B change the probability of A? If yes, dependent.
`
  )

  await updateTopic(
    'discrete-random-variables',
    `
# 📊 Discrete Random Variables

## Definition and Notation

**Random variable $X$:** Numerical outcome of random process

**Discrete random variable:** Countable set of possible values (integers typically)

**Examples:**
- Number of heads in 3 coin flips: $X \\in \\{0, 1, 2, 3\\}$
- Sum of two dice: $X \\in \\{2, 3, ..., 12\\}$
- Number of free throws made in 10 attempts

## Probability Mass Function (PMF)

**Definition:** $P(X = x)$ for each possible value $x$

**Requirements:**
- $0 ≤ P(X = x) ≤ 1$ for all $x$
- $\\sum P(X = x) = 1$ (probabilities sum to 1)

**Example:** Number of heads in 3 fair coin flips

| $x$ | 0 | 1 | 2 | 3 |
|-----|-------|-------|-------|-------|
| $P(X=x)$ | 1/8 | 3/8 | 3/8 | 1/8 |

**Check:** $1/8 + 3/8 + 3/8 + 1/8 = 1$ ✓

## Expected Value (Mean)

$$E(X) = \\mu_X = \\sum x · P(X = x)$$

**Interpretation:** Long-run average value

**Example:** 
$$E(X) = 0(1/8) + 1(3/8) + 2(3/8) + 3(1/8) = 0 + 3/8 + 6/8 + 3/8 = 12/8 = 1.5$$

**Intuition:** On average, 1.5 heads in 3 flips

## Variance and Standard Deviation

$$\\text{Var}(X) = \\sigma_X^2 = \\sum (x - \\mu)^2 · P(X = x) = E(X^2) - [E(X)]^2$$

$$\\sigma_X = \\sqrt{\\text{Var}(X)}$$

**Example:** For 3 coin flips ($\\mu = 1.5$)

$$\\text{Var}(X) = (0-1.5)^2(1/8) + (1-1.5)^2(3/8) + (2-1.5)^2(3/8) + (3-1.5)^2(1/8)$$
$$= 2.25(1/8) + 0.25(3/8) + 0.25(3/8) + 2.25(1/8) = 0.75$$
$$\\sigma_X = \\sqrt{0.75} ≈ 0.866$$

## Linear Combinations of Random Variables

**If $W = aX + b$:**
$$E(W) = aE(X) + b$$
$$\\text{Var}(W) = a^2 \\text{Var}(X)$$

**If $Y = X_1 + X_2$ (independent):**
$$E(Y) = E(X_1) + E(X_2)$$
$$\\text{Var}(Y) = \\text{Var}(X_1) + \\text{Var}(X_2)$$

**If $Y = X_1 - X_2$ (independent):**
$$E(Y) = E(X_1) - E(X_2)$$
$$\\text{Var}(Y) = \\text{Var}(X_1) + \\text{Var}(X_2)$$ (subtract in means, add in variances!)

## Common Mistakes

- Forgetting variance is additive even for differences ($+ \\text{Var}(X_2)$, not minus)
- Using $\\text{Var}(X_1 + X_2) = \\text{Var}(X_1) + \\text{Var}(X_2)$ when variables are dependent
- Confusing PMF with CDF

## Decision Rule

**Modify random variable?** → Apply linearity rules
**Independent sums?** → Add means and variances

## AP Exam Tip

"Find the probability distribution of X" means: create table with all possible values and their probabilities. Always verify probabilities sum to 1.
`
  )

  await updateTopic(
    'binomial-distribution',
    `
# 🎯 Binomial Distribution

## BINS Conditions

Random variable $X$ ~ Binomial$(n, p)$ if:

- **B**inary: Each trial has two outcomes (success/failure)
- **I**ndependent: Trials independent
- **N**umber: Fixed number $n$ of trials
- **S**ame: Probability $p$ same on every trial

**Example:** Draw 10 cards with replacement, count red cards. $X$ ~ Binomial(10, 0.5)

**NOT binomial:** Drawing without replacement (probabilities change)

## Binomial Probability Formula

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

Where:
- $n$ = number of trials
- $k$ = number of successes (0 to $n$)
- $p$ = probability of success on each trial
- $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ = number of ways to choose $k$ from $n$

## Worked Example

**Scenario:** 80% of AP Stats students pass the exam. If 5 students take the exam, what's $P(X = 4)$ students pass?

- $n = 5$, $k = 4$, $p = 0.8$, $(1-p) = 0.2$

$$P(X = 4) = \\binom{5}{4} (0.8)^4 (0.2)^1 = 5 × 0.4096 × 0.2 = 0.4096$$

**Check:** $P(X = 4) ≈ 0.41$ or 41%

What's $P(X ≥ 4) = P(X=4) + P(X=5)$?

$$P(X=5) = \\binom{5}{5} (0.8)^5 (0.2)^0 = 1 × 0.32768 × 1 = 0.32768$$

$$P(X ≥ 4) ≈ 0.41 + 0.33 ≈ 0.74$$

## Mean and Standard Deviation

$$E(X) = \\mu = np$$

$$\\text{SD}(X) = \\sigma = \\sqrt{np(1-p)}$$

**Example:** 5 students, $p=0.8$
- $E(X) = 5(0.8) = 4$ students
- $SD(X) = \\sqrt{5(0.8)(0.2)} = \\sqrt{0.8} ≈ 0.894$

## Normal Approximation to Binomial

If $n$ large enough ($np ≥ 10$ AND $n(1-p) ≥ 10$), then:

$$X \\text{ approximately } N(np, \\sqrt{np(1-p)})$$

Use normal curve to approximate binomial probabilities (easier than formula!)

**Continuity correction:** For exact binomial, $P(X=k)$ ≈ $P(k-0.5 < X < k+0.5)$ using normal

## Common Mistakes

- Forgetting BINS conditions before applying binomial
- Using $(1-p)^{n-k}$ as $(1-p)^n$
- Confusing $P(X = k)$ with $P(X \\leq k)$
- Sampling without replacement (violates independence)

## Decision Rule

**Two outcomes, fixed $n$, independent trials, constant $p$?** → Binomial
**Need $P(X = k)$?** → Use formula
**Need $P(X \\leq k)$?** → Sum probabilities or use table/calculator

## AP Exam Tip

Always state BINS conditions explicitly: "This is binomial because..." Common calculation: "$P(X=k)$ means exactly $k$ successes"; "$P(X \\geq k)$ means at least $k$ successes."
`
  )

  console.log('\n✅ Done. AP Stats textContent (part 2) expanded.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
}).finally(() => prisma.\$disconnect())
