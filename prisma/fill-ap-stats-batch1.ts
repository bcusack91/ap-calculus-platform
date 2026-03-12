import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicContent: Record<string, { textContent: string; description: string }> = {
  'types-data-sampling': {
    description: 'Learn to identify categorical vs. quantitative data, and understand different sampling methods.',
    textContent: `# Types of Data and Sampling

## Categorical vs. Quantitative Data

Data can be classified into two main types:

**Categorical (Qualitative) Data** describes qualities or characteristics. Examples include eye color, zip code, or political party. Categorical data can be:
- **Nominal**: No natural ordering (e.g., blood type: A, B, AB, O)
- **Ordinal**: Has a natural order (e.g., satisfaction: low, medium, high)

**Quantitative (Numerical) Data** represents measurable quantities. It can be:
- **Discrete**: Countable values (e.g., number of siblings: 0, 1, 2, 3…)
- **Continuous**: Any value in a range (e.g., height: 5.7 ft, weight: 150.3 lbs)

## Individuals and Variables

- **Individuals** are the objects described by a set of data (people, animals, things)
- **Variables** are characteristics of an individual

## Levels of Measurement

| Level | Description | Example |
|-------|-------------|---------|
| Nominal | Categories with no order | Gender, color |
| Ordinal | Categories with order | Grade level, ranking |
| Interval | Ordered, equal spacing, no true zero | Temperature (°F) |
| Ratio | Ordered, equal spacing, true zero | Weight, height |

## Key Vocabulary

- **Population**: The entire group of interest
- **Sample**: A subset of the population used to draw conclusions
- **Parameter**: A number that describes the population (usually unknown)
- **Statistic**: A number computed from a sample (used to estimate a parameter)

> **AP Tip**: The AP exam frequently tests your ability to classify data types and identify appropriate displays for each type.`
  },

  'displaying-distributions-graphs': {
    description: 'Create and interpret histograms, dotplots, stemplots, bar graphs, and pie charts.',
    textContent: `# Displaying Distributions with Graphs

## Choosing the Right Graph

The type of graph depends on the type of data:

| Data Type | Appropriate Graphs |
|-----------|-------------------|
| Categorical | Bar graph, pie chart, two-way table |
| Quantitative | Histogram, dotplot, stemplot, boxplot |

## Bar Graphs and Pie Charts (Categorical Data)

**Bar graphs** display the frequency or relative frequency of each category. Bars should have **equal width** and **gaps between them**.

**Pie charts** show the proportion of each category relative to the whole. All slices must sum to 100%.

## Histograms (Quantitative Data)

Histograms group data into **bins** (intervals of equal width). The height of each bar represents frequency or relative frequency.

Key features to describe:
- **Shape**: Symmetric, skewed left, skewed right, bimodal, uniform
- **Center**: Where the "middle" of the data falls
- **Spread**: Range from minimum to maximum
- **Outliers**: Unusual values

## Dotplots

Each data point is represented by a dot above a number line. Best for **small datasets**.

## Stemplots (Stem-and-Leaf Plots)

Each data value is split into a **stem** (leading digits) and **leaf** (trailing digit).

Example: For the data 23, 25, 31, 34, 37:
$$\\text{Stem} | \\text{Leaf}$$
$$2 | 3 \\; 5$$
$$3 | 1 \\; 4 \\; 7$$

**Back-to-back stemplots** compare two distributions.

## Describing Shape

- **Symmetric**: Left and right sides are approximately mirror images
- **Skewed right**: Tail extends to the right (mean > median)
- **Skewed left**: Tail extends to the left (mean < median)
- **Bimodal**: Two peaks
- **Uniform**: Approximately equal frequencies

> **AP Tip**: Always describe distributions using **S**hape, **O**utliers, **C**enter, and **S**pread (SOCS).`
  },

  'describing-distributions': {
    description: 'Describe the shape, center, spread, and outliers of a distribution using SOCS.',
    textContent: `# Describing Distributions

## The SOCS Framework

When describing any distribution, address all four components:

### Shape
- **Symmetric**: Mean ≈ Median; bell-shaped or uniform
- **Skewed Right**: Tail extends right; Mean > Median
- **Skewed Left**: Tail extends left; Mean < Median
- **Bimodal**: Two distinct peaks
- **Uniform**: Roughly equal frequencies

### Outliers
Values that fall far from the bulk of the data. Use the **1.5 × IQR rule**:
$$\\text{Outlier if } x < Q_1 - 1.5 \\cdot IQR \\text{ or } x > Q_3 + 1.5 \\cdot IQR$$

### Center
- **Mean** $\\bar{x}$: Arithmetic average; sensitive to outliers
- **Median**: Middle value; resistant to outliers

### Spread
- **Range**: Max − Min (sensitive to outliers)
- **IQR**: $Q_3 - Q_1$ (resistant)
- **Standard Deviation** $s$: Average distance from the mean

## Comparing Distributions

When comparing two distributions, always use **comparative language**:
- "Distribution A has a higher center than Distribution B"
- "Distribution A is more spread out than Distribution B"
- "Both distributions are approximately symmetric"

## Five-Number Summary

$$\\text{Min}, \\; Q_1, \\; \\text{Median}, \\; Q_3, \\; \\text{Max}$$

This summary is used to create **boxplots**. Side-by-side boxplots are excellent for comparing distributions.

> **AP Tip**: On free-response questions, you must use **context** (mention the actual variable). Don't just say "the distribution is skewed right" — say "the distribution of test scores is skewed right."`
  },

  'measures-of-center': {
    description: 'Calculate and interpret mean, median, and mode as measures of central tendency.',
    textContent: `# Measures of Center

## Mean (Arithmetic Average)

The **sample mean** $\\bar{x}$ is the sum of all values divided by the number of values:

$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$

**Properties of the mean**:
- Uses every data value
- Sensitive to outliers and skewness
- The "balance point" of the distribution

## Median

The **median** is the middle value when data is arranged in order.

- If $n$ is odd: median = middle value
- If $n$ is even: median = average of the two middle values

$$\\text{Median position} = \\frac{n + 1}{2}$$

**Properties of the median**:
- Resistant to outliers
- Better measure of center for skewed distributions

## When to Use Which

| Situation | Best Measure |
|-----------|-------------|
| Symmetric distribution | Mean or Median (approximately equal) |
| Skewed distribution | Median (more representative) |
| Outliers present | Median (resistant) |
| Further calculations needed | Mean (used in standard deviation, regression) |

## Effect of Skewness

- **Skewed right**: Mean > Median (mean pulled toward tail)
- **Symmetric**: Mean ≈ Median
- **Skewed left**: Mean < Median

## Weighted Mean

$$\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$

Used when different values have different weights (e.g., GPA calculation).

## Trimmed Mean

Remove a percentage of the highest and lowest values, then calculate the mean. This makes it more **resistant** to outliers.

> **AP Tip**: The AP exam often tests whether students know that the mean is affected by outliers while the median is not. Be ready to explain which measure is more appropriate in context.`
  },

  'measures-of-spread': {
    description: 'Calculate and interpret range, IQR, variance, and standard deviation.',
    textContent: `# Measures of Spread

## Range

$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

Simple but sensitive to outliers. Only uses two values.

## Interquartile Range (IQR)

$$IQR = Q_3 - Q_1$$

- $Q_1$ (first quartile): Median of the lower half
- $Q_3$ (third quartile): Median of the upper half
- IQR captures the **middle 50%** of the data
- **Resistant** to outliers

## Identifying Outliers: 1.5 × IQR Rule

A value is an outlier if:
$$x < Q_1 - 1.5 \\cdot IQR \\quad \\text{or} \\quad x > Q_3 + 1.5 \\cdot IQR$$

## Variance

The **sample variance** $s^2$ measures the average squared deviation from the mean:

$$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n - 1}$$

We divide by $n-1$ (not $n$) because we use **degrees of freedom** to get an unbiased estimate.

## Standard Deviation

$$s = \\sqrt{s^2} = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$

**Interpretation**: The standard deviation measures the **typical distance** of data values from the mean.

**Properties**:
- $s \\geq 0$; $s = 0$ only when all values are identical
- Same units as the original data
- **Not resistant** to outliers
- Affected by skewness

## Effect of Linear Transformations

If $y = a + bx$:
- $\\bar{y} = a + b\\bar{x}$ (center shifts)
- $s_y = |b| \\cdot s_x$ (spread scales by $|b|$)
- Adding a constant $a$ does **not** change spread
- Multiplying by $b$ scales spread by $|b|$

> **AP Tip**: Know the formula for standard deviation, and be able to interpret it in context: "The [variable] values typically differ from the mean by about [s] [units]."`
  },

  'normal-distributions': {
    description: 'Use the Normal distribution, z-scores, and the empirical rule to find probabilities.',
    textContent: `# Normal Distributions

## The Normal Curve

A Normal distribution is a **continuous probability distribution** that is:
- **Symmetric** and bell-shaped
- Defined by two parameters: mean $\\mu$ and standard deviation $\\sigma$
- Notation: $X \\sim N(\\mu, \\sigma)$

## The Empirical Rule (68-95-99.7 Rule)

For any Normal distribution:
- **68%** of data falls within $\\mu \\pm 1\\sigma$
- **95%** of data falls within $\\mu \\pm 2\\sigma$
- **99.7%** of data falls within $\\mu \\pm 3\\sigma$

## Z-Scores (Standard Normal)

A **z-score** tells how many standard deviations a value is from the mean:

$$z = \\frac{x - \\mu}{\\sigma}$$

The **Standard Normal distribution** has $\\mu = 0$ and $\\sigma = 1$: $Z \\sim N(0, 1)$

**Interpretation**: A z-score of 1.5 means the value is 1.5 standard deviations above the mean.

## Finding Probabilities

To find $P(X < a)$ for $X \\sim N(\\mu, \\sigma)$:

1. Standardize: $z = \\frac{a - \\mu}{\\sigma}$
2. Use the **Standard Normal table** (Table A) or calculator
3. $P(X < a) = P(Z < z)$

**Calculator**: normalcdf(lower, upper, $\\mu$, $\\sigma$)

## Finding Values from Probabilities (Inverse Normal)

Given a probability $p$, find the value $x$ such that $P(X < x) = p$:

1. Find $z^*$ from Table A (look up $p$ in the body)
2. Unstandardize: $x = \\mu + z^* \\cdot \\sigma$

**Calculator**: invNorm($p$, $\\mu$, $\\sigma$)

## Assessing Normality

Methods to check if data follows a Normal distribution:
1. **Histogram/Dotplot**: Should be roughly symmetric, bell-shaped
2. **Normal Probability Plot (NPP)**: Points should fall approximately along a straight line
3. **Empirical Rule check**: ~68% within 1 SD, ~95% within 2 SD

> **AP Tip**: Always state the distribution, show the z-score calculation, and sketch the curve with the area shaded when solving Normal distribution problems.`
  },

  'sampling-methods': {
    description: 'Compare simple random sampling, stratified, cluster, and systematic sampling methods.',
    textContent: `# Sampling Methods

## Why Sample?

A **census** (measuring every individual in the population) is often impractical. Instead, we take a **sample** and use statistics to make inferences about the population.

The key requirement: the sample must be **representative** of the population.

## Simple Random Sample (SRS)

Every possible sample of size $n$ has an **equal chance** of being selected.

**How to select an SRS**:
1. Assign a number to each individual in the population
2. Use a random number generator (or table) to select $n$ numbers
3. Include the corresponding individuals in the sample

An SRS ensures that every individual has an equal probability of being selected, and every pair, triple, etc. of individuals is equally likely.

## Stratified Random Sampling

1. Divide the population into **strata** (groups of similar individuals)
2. Take a separate SRS from **each** stratum
3. Combine the results

**When to use**: When the population has distinct subgroups and you want to ensure each subgroup is represented proportionally.

**Example**: Stratify by grade level (9, 10, 11, 12) and sample from each.

## Cluster Sampling

1. Divide the population into **clusters** (naturally occurring groups, often geographic)
2. Randomly select entire clusters
3. Survey **all** individuals in the selected clusters

**When to use**: When the population is spread out geographically and it's costly to reach individuals.

**Example**: Randomly select 5 schools from a district and survey all students at those schools.

## Systematic Sampling

1. Select every $k$th individual from a list
2. Start with a randomly chosen individual from the first $k$

**Example**: Survey every 10th customer entering a store.

## Comparison Summary

| Method | Pros | Cons |
|--------|------|------|
| SRS | Unbiased, simple | May not represent subgroups |
| Stratified | Ensures subgroup representation | Requires knowledge of strata |
| Cluster | Practical for large/spread populations | Higher variability |
| Systematic | Easy to implement | Risk of hidden patterns |

> **AP Tip**: Know the difference between strata and clusters. Strata are homogeneous groups (sample FROM each); clusters are heterogeneous groups (sample entire clusters).`
  },

  'observational-vs-experiments': {
    description: 'Distinguish between observational studies and experiments, and understand causation vs. association.',
    textContent: `# Observational Studies vs. Experiments

## Key Distinction

- **Observational study**: Researchers **observe** and measure variables without attempting to influence responses. No treatment is imposed.
- **Experiment**: Researchers **deliberately impose** a treatment on individuals to observe the response.

## Why It Matters: Causation

> **Only well-designed experiments can establish cause-and-effect relationships.**

Observational studies can show **association** but cannot prove **causation** because of potential **confounding variables**.

## Confounding Variables

A **confounding variable** is a variable that:
1. Is associated with the explanatory variable
2. Also affects the response variable

This makes it impossible to determine which variable is actually causing the observed effect.

**Example**: People who exercise more tend to weigh less. But people who exercise may also eat healthier. Diet is a confounding variable.

## Types of Observational Studies

- **Sample survey**: Collects data at one point in time
- **Retrospective study**: Looks back at past data
- **Prospective study**: Follows subjects into the future

## Lurking Variables

A **lurking variable** is not among the explanatory or response variables but may influence the relationship between them.

## Simpson's Paradox

A trend that appears in several groups of data **reverses** when the groups are combined. This occurs because of a lurking variable.

**Classic example**: A treatment may appear better overall, but worse in every subgroup, due to unequal group sizes.

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Explanatory variable | The variable we think explains or causes changes |
| Response variable | The variable we measure as an outcome |
| Confounding | Two variables whose effects cannot be separated |
| Lurking variable | A hidden variable that affects the relationship |

> **AP Tip**: If asked "can we conclude causation?", the answer is **NO** for observational studies. Always mention confounding variables as the reason.`
  },

  'experimental-design': {
    description: 'Design experiments using control, randomization, replication, and blocking.',
    textContent: `# Experimental Design

## Principles of Good Experimental Design

### 1. Control
- Use a **control group** that receives no treatment (or a placebo)
- Keep all other variables constant (**controlled variables**)

### 2. Randomization
- Randomly assign subjects to treatment groups
- This balances out **confounding variables** (both known and unknown)

### 3. Replication
- Use enough subjects to reduce the effect of chance variation
- More subjects = more precise results

### 4. (Optional) Blinding
- **Single-blind**: Subjects don't know which treatment they receive
- **Double-blind**: Neither subjects nor evaluators know
- Prevents **placebo effect** and **experimenter bias**

## Vocabulary of Experiments

| Term | Definition |
|------|-----------|
| **Experimental units** | The individuals being studied |
| **Subjects** | Experimental units that are people |
| **Factor** | An explanatory variable that is manipulated |
| **Level** | A specific value of a factor |
| **Treatment** | A specific combination of factor levels |
| **Response variable** | What is measured as the outcome |

## Completely Randomized Design (CRD)

All experimental units are randomly assigned to treatments with no grouping.

## Randomized Block Design

1. Group subjects into **blocks** of similar individuals
2. Randomly assign treatments **within each block**
3. This reduces variability due to the blocking variable

**Example**: Block by gender, then randomly assign treatments within each gender group.

**Note**: Blocking is like stratifying in sampling — but blocks are for experiments, strata are for surveys.

## Matched Pairs Design

A special case of blocking where:
- Each "block" has only **2** units (matched on key characteristics)
- One gets Treatment A, the other gets Treatment B

OR:
- Each subject serves as their own control (before/after)

## Inference and Scope

| Design | Can conclude causation? | Can generalize? |
|--------|------------------------|-----------------|
| Experiment + Random assignment | ✅ Yes | Only if random selection was used |
| Random selection + Observational | ❌ No | ✅ Yes, to population |
| Neither | ❌ No | ❌ No |

> **AP Tip**: A well-designed experiment has **random assignment** (to establish causation) and ideally **random selection** (to generalize to a population).`
  },

  'bias-sampling-surveys': {
    description: 'Identify sources of bias in sampling and surveys including voluntary response and convenience sampling.',
    textContent: `# Bias in Sampling and Surveys

## What Is Bias?

**Bias** occurs when the method of collecting data **systematically** favors certain outcomes. A biased study does not accurately represent the population.

## Types of Sampling Bias

### Voluntary Response Bias
People choose whether to participate. Those with **strong opinions** are more likely to respond.

**Example**: An online poll asking "Do you support this policy?" — people who feel strongly will disproportionately respond.

### Convenience Sampling Bias
The researcher selects individuals who are **easy to reach**.

**Example**: Surveying students in the cafeteria to represent all students.

### Undercoverage Bias
Some groups in the population are **left out** of the sampling frame.

**Example**: A phone survey that only calls landlines misses people who only use cell phones.

### Nonresponse Bias
Selected individuals **cannot be contacted** or **refuse** to participate.

**Example**: A mailed survey with only a 20% return rate — the 80% who didn't respond may differ systematically from those who did.

## Types of Response Bias

### Question Wording Bias
The way a question is phrased can **influence** the answer.

**Example**: "Do you agree that the government should protect endangered species?" (leading question)

### Social Desirability Bias
Respondents give answers they think are **socially acceptable** rather than truthful.

**Example**: "How often do you exercise?" — people tend to overreport.

### Interviewer Effect
The presence or characteristics of the interviewer influences responses.

## Summary Table

| Type of Bias | Problem | Solution |
|-------------|---------|----------|
| Voluntary response | Strong opinions overrepresented | Use random sampling |
| Convenience | Not representative | Use random sampling |
| Undercoverage | Some groups excluded | Improve sampling frame |
| Nonresponse | Non-responders differ | Follow up, incentives |
| Question wording | Leading questions | Use neutral wording |
| Social desirability | Dishonest answers | Anonymous surveys |

> **AP Tip**: When identifying bias, (1) name the type of bias, (2) explain the direction of bias (overestimates or underestimates), and (3) explain why in context.`
  }
}

async function main() {
  console.log('📊 Filling AP Statistics content — Batch 1 (Exploring Data + Sampling)...\n')
  let count = 0
  for (const [slug, data] of Object.entries(topicContent)) {
    await prisma.topic.update({
      where: { slug },
      data: { textContent: data.textContent, description: data.description }
    })
    console.log('  ✅ ' + slug)
    count++
  }
  console.log('\n🎉 Updated ' + count + ' topics')
}

main().catch(console.error).finally(() => prisma.$disconnect())
