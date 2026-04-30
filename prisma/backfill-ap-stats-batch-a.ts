import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

type ProblemSpec = {
  question: string;
  solution: string;
  difficulty: Difficulty;
};

type FlashcardSpec = {
  front: string;
  back: string;
};

type TopicBackfill = {
  slug: string;
  examples?: ProblemSpec[];
  flashcards?: FlashcardSpec[];
};

const topics: TopicBackfill[] = [
  {
    slug: 'types-data-sampling',
    examples: [
      {
        question: "A survey asks students: 'Do you prefer morning or afternoon classes?' and 'How many hours per week do you study?' Classify each variable.",
        solution: "The first variable (morning or afternoon) is **categorical** because it describes a category preference with no numerical value. The second variable (study hours) is **quantitative** (specifically **continuous**) because it represents a measurable quantity that can take any value within a range. In data collection, categorical variables describe qualities while quantitative variables measure quantities.",
        difficulty: 'EASY'
      },
      {
        question: "A researcher wants to estimate the average GPA of all 10,000 students at a university. She randomly selects 250 students and calculates their mean GPA as 3.42. Identify the population, sample, parameter, and statistic.",
        solution: `**Population**: All 10,000 students at the university (the entire group of interest)

**Sample**: The 250 randomly selected students (the subset actually studied)

**Parameter**: The average (mean) GPA of all 10,000 students — this is **unknown** and what the researcher wants to estimate. It's a fixed value describing the population.

**Statistic**: The mean GPA of 3.42 from the sample of 250 students — this is **known** from the data and used to estimate the parameter.

Key distinction: A **parameter** describes a population (usually unknown); a **statistic** describes a sample (known from data) and is used to estimate the parameter.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Explain why a census might be impractical for estimating the average lifespan of light bulbs manufactured by a company, and explain what sampling method you would use instead.",
        solution: `**Why a census is impractical:**

A census requires testing **all** light bulbs produced by the company. This would mean destroying them all to measure their lifespan — the manufacturer would have no product left to sell! This is both destructive and economically infeasible.

**Better approach: Sampling**

Use **random sampling** (specifically, a **simple random sample** or **SRS**) by:
1. Randomly selecting a representative subset of light bulbs from the entire production
2. Testing these to destruction and recording lifespans
3. Computing the sample mean lifespan
4. Using this to estimate the population parameter

This preserves most inventory, is cost-effective, and gives a reliable estimate when the sample size is adequate. The randomness ensures the sample is representative of all bulbs produced.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'describing-distributions',
    examples: [
      {
        question: "A distribution shows most values clustered near 50, with a long tail extending to the right toward 100. Describe the shape and identify where the mean is relative to the median.",
        solution: "This distribution is **skewed to the right** (positively skewed). When data is skewed right, the mean is **pulled toward the tail** (toward the higher values), so the **mean > median**. The long tail of extreme high values increases the average more than it affects the median. This is common in real-world data like incomes or test scores with a ceiling effect.",
        difficulty: 'EASY'
      },
      {
        question: "Two datasets have the same median (both 70) but different shapes: Dataset A is symmetric, while Dataset B is skewed left. Without seeing the distributions, explain what this tells you about their means.",
        solution: `**Dataset A (symmetric)**: Mean ≈ Median ≈ 70, because symmetry means the values balance equally on both sides.

**Dataset B (skewed left)**: Mean < Median. The median is 70, but the mean is pulled **toward the left tail** by the extreme low values. The mean will be less than 70.

**Why?** In a left-skewed distribution, the tail extends toward lower values. These extreme low outliers pull the mean down more than they affect the median (which is just the middle position). This is common in age-at-death data or grade distributions where there's a floor but not a ceiling.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "A histogram shows test scores for a large class with two distinct peaks: one at 70 and another at 85. Interpret this distribution and suggest what might explain it. How would you describe center and spread?",
        solution: `**Distribution characteristics:**

This is a **bimodal distribution** with two peaks (modes) at 70 and 85. The presence of two modes suggests two distinct groups within the class, not a single homogeneous population.

**Possible explanations:**
- Different preparation levels (some students studied more thoroughly than others)
- One mode represents students who barely passed; the other represents strong performers
- The class might contain different ability levels mixed together

**Center & Spread:**
- A single measure of center (like the mean) would be misleading—it would fall around 77-78, not representing either peak well
- **Better approach**: Report both modes separately, or note that the distribution is bimodal
- **Spread**: The distance between the two peaks (15 points) is noteworthy; report the range and/or standard deviation, noting the gap suggests distinct subgroups

**Lesson**: Always look for multiple peaks; they suggest mixture of populations.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'measures-of-spread',
    examples: [
      {
        question: "A dataset has minimum value 10, Q1 = 25, median = 40, Q3 = 55, and maximum = 100. Calculate the range and interquartile range (IQR).",
        solution: `**Range** = Maximum − Minimum = 100 − 10 = **90**

**Interquartile Range (IQR)** = Q3 − Q1 = 55 − 25 = **30**

The range includes all data but is affected by outliers. The IQR represents the spread of the middle 50% and is **resistant to outliers** — the extreme value of 100 doesn't pull it higher.`,
        difficulty: 'EASY'
      },
      {
        question: "Two classes took the same exam. Class A has mean 75 with standard deviation 5. Class B has mean 75 with standard deviation 15. Both classes have the same average performance, but what does the difference in standard deviation tell you?",
        solution: `**Interpretation:**

Even though both classes have the same mean (75), the **standard deviation reveals different patterns**:

**Class A (SD = 5)**: Scores are tightly clustered around 75. Most students scored within about 5-10 points of the mean (roughly 70-80), showing **consistent performance**. Students are more similar to each other.

**Class B (SD = 15)**: Scores are spread out over a wider range. Students deviate much more from 75 on average (roughly 60-90), showing **more variability** in performance. There's greater diversity—some students did much better, some much worse.

**Conclusion**: The standard deviation measures **consistency**. Class A has more uniform understanding, while Class B has greater range in mastery levels. The same average can hide very different distributions!`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Explain why the IQR is considered resistant to outliers while the standard deviation is not. Use an example with a dataset that has an extreme outlier.",
        solution: `**Why IQR is resistant:**

The IQR = Q3 − Q1 depends only on the **25th and 75th percentile positions**. Even if one value becomes extremely large or small, it doesn't change Q1 or Q3 (as long as it's still outside those quartiles). The IQR ignores the extreme value entirely.

**Why standard deviation is not:**

Standard deviation measures average squared distance from the mean:
$$s = \\sqrt{\\frac{\\sum(x - \\bar{x})^2}{n-1}}$$

An extreme outlier creates a **huge squared deviation**, which dramatically increases $s$.

**Example:**
Dataset: 10, 12, 14, 16, 18

- Q1 = 12, Q3 = 16, **IQR = 4**
- Mean = 14, SD ≈ 3.16

Now add extreme outlier: 10, 12, 14, 16, 18, **500**

- Q1 = 12, Q3 = 16, **IQR = 4** (unchanged!)
- Mean = 93.33, SD ≈ 201 (exploded!)

**Lesson**: Use IQR and median when outliers are present; they're more reliable summaries.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'normal-distributions',
    examples: [
      {
        question: "The heights of adult men follow a normal distribution with mean 70 inches and standard deviation 2.5 inches. What is the z-score for a man who is 75 inches tall?",
        solution: `The z-score formula is:
$$z = \\frac{x - \\mu}{\\sigma}$$

where $x$ is the value, $\\mu$ is the mean, and $\\sigma$ is the standard deviation.

$$z = \\frac{75 - 70}{2.5} = \\frac{5}{2.5} = 2$$

**Interpretation**: A height of 75 inches is **2 standard deviations above the mean**. This is quite tall but not extremely rare (about 2.3% of men are taller).`,
        difficulty: 'EASY'
      },
      {
        question: "SAT scores are normally distributed with mean 500 and standard deviation 100. What percentage of test-takers score between 400 and 600?",
        solution: `**Step 1: Find z-scores**

For $x = 400$: $z = \\frac{400 - 500}{100} = -1$

For $x = 600$: $z = \\frac{600 - 500}{100} = +1$

**Step 2: Use the Empirical Rule (68-95-99.7)**

The Empirical Rule states that in a normal distribution:
- **68%** of data falls within 1 SD of the mean (between $\\mu \\pm 1\\sigma$)
- 95% within 2 SDs (between $\\mu \\pm 2\\sigma$)
- 99.7% within 3 SDs

Since scores between 400 and 600 represent the range from $\\mu - 1\\sigma$ to $\\mu + 1\\sigma$:

**Answer: 68% of test-takers score between 400 and 600.**`,
        difficulty: 'MEDIUM'
      },
      {
        question: "A manufacturing process produces bolts with diameter normally distributed: mean = 10 mm, SD = 0.1 mm. The acceptable range is 9.8 to 10.2 mm. What proportion of bolts are acceptable? What z-score defines the upper boundary?",
        solution: `**Step 1: Find z-scores for the boundaries**

Lower boundary ($x = 9.8$): $z = \\frac{9.8 - 10}{0.1} = -2$

Upper boundary ($x = 10.2$): $z = \\frac{10.2 - 10}{0.1} = +2$

**Upper z-score answer: z = +2**

**Step 2: Find the proportion using Empirical Rule**

The range 9.8 to 10.2 is $\\mu \\pm 2\\sigma$ (from -2 to +2 SD).

By the Empirical Rule, **95%** of bolts fall within 2 standard deviations.

**Step 3: Find proportion outside acceptable range**

Proportion defective = 100% − 95% = **5%**

This means 2.5% are too small (below 9.8) and 2.5% are too large (above 10.2).

**Interpretation**: The process produces about 95 acceptable bolts per 100, leaving a 5% defect rate. The manufacturer might adjust the process to center it more tightly or reduce SD.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'observational-vs-experiments',
    examples: [
      {
        question: "A researcher records the average daily coffee consumption and sleep hours for 100 people. She finds that people who drink more coffee sleep fewer hours. Can she conclude that coffee causes reduced sleep? Explain.",
        solution: `**No, she cannot conclude causation.** This is an **observational study** — data is collected without imposing a treatment. The researcher simply observes existing behaviors.

**Confounding variables** may explain the relationship:
- People with demanding jobs drink more coffee AND naturally sleep less (the job, not coffee, causes reduced sleep)
- Stress increases coffee consumption and reduces sleep
- Night-shift workers naturally drink more coffee and sleep differently

**The correlation observed doesn't prove causation.** To conclude that coffee causes sleep reduction, you'd need a **controlled experiment** where people are randomly assigned to drink coffee or not, with other factors held equal.`,
        difficulty: 'EASY'
      },
      {
        question: "In a pharmaceutical trial, some patients receive a new drug while others receive a placebo, randomly assigned. Both groups are followed for 6 months. Is this observational or experimental? Identify the treatment, response variable, and control group.",
        solution: `**Type**: This is an **EXPERIMENT** (also called a Randomized Controlled Trial or RCT).

Why? The researcher **actively assigns** a treatment (new drug vs. placebo) through random assignment, rather than just observing.

**Components:**

**Treatment (Explanatory Variable)**: Type of pill — either the new drug or placebo

**Response Variable**: Outcome measured — likely symptom improvement, side effects, or recovery time over 6 months

**Experimental Group**: Patients receiving the new drug

**Control Group**: Patients receiving the placebo

**Random Assignment**: Crucial for validity — ensures the treatment groups are comparable. Without it, we can't isolate the drug's effect from other differences.

**Key advantage**: Random assignment minimizes confounding variables, making **causation** conclusions possible.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Design either an observational study or experiment to investigate whether a new study app improves student exam scores. Clearly state which you'd choose and justify your choice.",
        solution: `**Best choice: EXPERIMENT** (Randomized Controlled Trial)

**Justification:**
- The question asks about **causation** (does the app **improve** scores — cause-and-effect)
- Observational studies can't eliminate confounding (students who choose to use the app might be more motivated, study harder for other reasons, etc.)
- An experiment with random assignment isolates the app's true effect

**Study Design:**

**Participants**: 200 high school students across multiple schools

**Random Assignment**: Randomly divide into:
- **Treatment group** (100 students): Use the new study app for 8 weeks
- **Control group** (100 students): Use no app (business as usual)

**Blinding** (optional but ideal): If possible, control group could use a **placebo app** (same interface, no learning features) to match the experience

**Response Variable**: Exam scores on a standardized exam administered at week 9 (after 8 weeks of treatment)

**Analysis**: Compare average exam scores between groups; if treatment mean >> control mean, the app shows causal benefit

**Why not observational?** Students self-selecting to use the app differ systematically from non-users in motivation, study habits, etc., making it impossible to isolate the app's effect.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'experimental-design',
    examples: [
      {
        question: "An experiment tests whether adding fertilizer increases tomato plant yield. All 60 plants are kept in the same greenhouse at the same temperature, watered equally, but half receive fertilizer and half don't. Why is this good experimental design?",
        solution: `**Why this design is strong:**

1. **Random Assignment**: The 60 plants are randomly divided into two groups (30 fertilized, 30 not), ensuring the groups are comparable before treatment.

2. **Control of Variables**: All other factors are **held constant** — same greenhouse, temperature, water, light, soil type. This **eliminates confounding variables** so differences in yield come from fertilizer, not other causes.

3. **Control Group**: The unfertilized group serves as a baseline to compare against; without it, we wouldn't know if the treated group's yield is high.

4. **Replication**: Using 60 plants instead of 1 or 2 gives multiple observations, reducing the effect of individual plant variation and increasing reliability.

**Result**: If fertilized plants significantly outyield unfertilized ones, we can confidently conclude **fertilizer causes higher yield** because confounding factors were controlled.`,
        difficulty: 'EASY'
      },
      {
        question: "A researcher wants to compare three new cancer drugs on 150 patients. Suggest a design that uses blocking and explain why blocking improves the experiment.",
        solution: `**Design with Blocking:**

**Block by disease stage** (three blocks):
- **Block 1**: 50 early-stage patients
- **Block 2**: 50 mid-stage patients
- **Block 3**: 50 late-stage patients

**Within each block**, randomly assign 1/3 to Drug A, 1/3 to Drug B, 1/3 to Drug C (so ~17 per group per block).

**Response**: Measure survival time or remission rate after 12 months.

**Why blocking improves the experiment:**

Disease stage is a **confounding variable** — late-stage patients naturally have different outcomes than early-stage regardless of drug. Without blocking, if by chance more late-stage patients got Drug A, its apparent effectiveness would be artificially lowered (confounded with stage).

Blocking **isolates** the drug effect from stage effect by ensuring each block (stage level) has equal numbers on each drug. We can then:
1. **Within each block**: Compare drugs fairly (stage-specific effects)
2. **Across blocks**: See if effects are consistent regardless of stage

This **increases precision** and makes differences between drugs clearer.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Design a double-blind experiment testing whether a memory supplement improves test performance. Explain what 'double-blind' means and why both levels of blinding are essential.",
        solution: `**Study Design:**

**Participants**: 100 college students

**Groups**:
- **Treatment**: 50 students receive memory supplement pills
- **Control**: 50 students receive placebo pills (identical in appearance, taste, packaging)

**Random Assignment**: Students randomly assigned to supplement or placebo

**Blinding**:
- **Single-blind**: Students don't know which group they're in (don't know if taking supplement or placebo)
- **Double-blind**: BOTH students AND researchers don't know who got which pill until after data collection

**Implementation**: A neutral third party prepares identical-looking pills, labels them only with code numbers. After the study, codes are revealed.

**Response**: Test performance measured 8 weeks after starting pills

**Why double-blinding is essential:**

1. **Eliminates placebo effect** (student level): If students knew they got the real supplement, improved performance might come from psychological expectation, not the pill itself. Blinding ensures any improvement is physiological.

2. **Eliminates experimenter bias** (researcher level): If researchers knew who had supplements, they might unconsciously encourage supplement students differently, treat them with more enthusiasm, or score their tests more leniently. Blinding prevents this.

**Result**: Any difference in performance between groups is reliably caused by the supplement, not expectations or bias.

**Without double-blinding**, results are unreliable — we can't tell if the supplement or expectations caused improvement.`,
        difficulty: 'HARD'
      }
    ]
  },
  {
    slug: 'displaying-distributions-graphs',
    examples: [
      {
        question: "A teacher collects quiz scores: 8, 9, 9, 10, 10, 10, 11, 12, 12, 13. Create a stemplot for this data.",
        solution: `**Stemplot (Stem-and-Leaf Plot):**

$$\\text{Stem} | \\text{Leaf}$$
$$0 | \\text{(no leaves — no scores in 0-9 range except...)}$$
$$\\text{or start at 8:}$$
$$8 | \\text{ }$$
$$9 | 0 \\; 0$$
$$10 | 0 \\; 0 \\; 0$$
$$11 | 0$$
$$12 | 0 \\; 0$$
$$13 | 0$$

Wait, let me recalculate. Scores are: 8, 9, 9, 10, 10, 10, 11, 12, 12, 13

Better notation:
- 8 = stem 0, leaf 8 (or stem 8, leaf nothing)
- 9, 9 = stem 0, leaves 9, 9
- 10, 10, 10 = stem 1, leaves 0, 0, 0
- etc.

$$\\text{Stem} | \\text{Leaf}$$
$$0 | 8 \\; 9 \\; 9$$
$$1 | 0 \\; 0 \\; 0 \\; 1 \\; 2 \\; 2 \\; 3$$

Or in traditional format:
$$8 | \\text{ }$$
$$9 | 0 \\; 0$$
$$10 | 0 \\; 0 \\; 0$$
$$11 | 0$$
$$12 | 0 \\; 0$$
$$13 | 0$$

**Interpretation**: Most scores cluster at 10; shape is roughly symmetric with a slight left skew (tail toward lower scores). No outliers.`,
        difficulty: 'EASY'
      },
      {
        question: "Explain when you would use a dotplot vs. a histogram. Give an example for each.",
        solution: `**Dotplot: When to use**

- **Small datasets** (roughly < 20–30 values)
- You want to see **each individual point**
- Data is **discrete** or you want to preserve exact values
- Patterns and clusters matter more than overall frequency

**Example**: 10 students' test scores: 78, 82, 82, 85, 88, 90, 90, 92, 95, 98

Each dot placed above a number line shows exact scores, and you can see two students scored 82, two scored 90, etc.

**Histogram: When to use**

- **Large datasets** (typically 30+ values)
- Data is **continuous** or has many distinct values
- You're interested in **overall shape and frequency distribution**, not individual points
- You want to group values into intervals (bins)

**Example**: Heights of 200 students

Instead of 200 individual dots, group heights into bins: 60–62", 62–64", 64–66", etc. Bars show how many students fall in each interval. The shape (symmetric, skewed, etc.) emerges clearly.

**Key difference**: Dotplots show individual data; histograms show distribution shape and patterns across groups.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "A dataset has 500 values. How would you display it? Compare a histogram, boxplot, and dotplot in terms of what information each reveals.",
        solution: `**Histogram:**
- **Reveals**: Full shape (symmetric, skewed, bimodal), exact frequency in each bin, where most data concentrates
- **Best for**: Overall distribution pattern
- **Drawback**: Bin width choice can mislead; loses individual data points

**Boxplot:**
- **Reveals**: Five-number summary (min, Q1, median, Q3, max), IQR (spread of middle 50%), identification of outliers, left/right skew
- **Best for**: Quick comparison of center and spread; identifying outliers
- **Drawback**: Hides the shape details (can't see if bimodal); loses frequency info

**Dotplot:**
- **Reveals**: Each exact data point, clustering, individual values
- **Best for**: Small datasets or when precision matters
- **Drawback**: With 500 points, it becomes **unreadable** — visual overload; impossible to see patterns

**Recommendation for 500 values:**
1. **Primary**: **Histogram** for overall shape and distribution
2. **Secondary**: Add **boxplot** alongside to highlight outliers and quartiles
3. **Skip dotplot** — too many points obscure the view

This combination gives complete picture: shape (histogram) + resistant summary (boxplot).`,
        difficulty: 'HARD'
      }
    ],
    flashcards: [
      {
        front: "What is a dotplot and when should you use it?",
        back: "A dotplot shows each data point as a dot above a number line. Use it for small datasets (< 20–30 values) where you want to see individual points and clustering."
      },
      {
        front: "What are the main components of a histogram?",
        back: "Bins (intervals on x-axis), bars whose height shows frequency or relative frequency, and no gaps between bars (unlike bar graphs). Used for quantitative data."
      },
      {
        front: "How do you read a stemplot?",
        back: "The stem (left side) shows leading digits, the leaf (right side) shows trailing digits. For example, stem 7, leaf 5 represents 75. Stemplots work best for small datasets."
      },
      {
        front: "What does 'shape, outliers, center, spread' (SOCS) mean?",
        back: "SOCS is a framework for describing distributions: Shape (symmetric, skewed, bimodal), Outliers (unusual points), Center (mean/median), and Spread (range/IQR/SD)."
      },
      {
        front: "When should you use a bar graph vs. a histogram?",
        back: "Bar graphs display categorical data with gaps between bars. Histograms display quantitative data with no gaps. The key difference is the type of variable."
      },
      {
        front: "What does it mean if a distribution is skewed left?",
        back: "The tail extends to the left (toward low values). The mean is pulled left and is less than the median. Few outliers on the lower end."
      },
      {
        front: "What is a bimodal distribution?",
        back: "A distribution with two distinct peaks (modes). Often suggests two different groups mixed together or a process with two popular outcomes."
      },
      {
        front: "How do you choose the right graph for categorical vs. quantitative data?",
        back: "Categorical: bar graph, pie chart, two-way table. Quantitative: histogram, dotplot, stemplot, boxplot. Match the graph type to the data type."
      },
      {
        front: "What is the advantage of a boxplot over a histogram?",
        back: "A boxplot clearly shows outliers and the five-number summary (quartiles), making it easy to compare distributions and identify unusual values."
      },
      {
        front: "How do back-to-back stemplots help compare two distributions?",
        back: "Back-to-back stemplots place two sets of leaves on opposite sides of the same stem, allowing side-by-side visual comparison of two related datasets."
      }
    ]
  },
  {
    slug: 'scatterplots-correlation',
    examples: [
      {
        question: "A scatterplot shows study hours (x-axis) vs. exam scores (y-axis) for 25 students. The points show a clear upward trend from lower-left to upper-right, tightly clustered around a line. Describe the relationship.",
        solution: `This scatterplot shows a **strong positive linear correlation**:

- **Positive**: As study hours increase, exam scores tend to increase (upward trend)
- **Strong**: The points are tightly clustered around a line with little scatter
- **Linear**: The relationship is approximately straight, not curved

The **correlation coefficient** $r$ would be close to **+1** (e.g., $r = 0.92$), indicating a strong positive association. Students who study more score higher; the pattern is predictable.`,
        difficulty: 'EASY'
      },
      {
        question: "Two variables have correlation $r = -0.65$. Interpret what this means about their relationship.",
        solution: `**Interpretation of $r = -0.65$:**

**Correlation direction**: **Negative** ($r < 0$) — as one variable increases, the other tends to decrease.

**Correlation strength**: **Moderate to strong** (absolute value 0.65 is closer to −1 than to 0).

**Visual pattern**: Scatterplot would show points trending **downward** (from upper-left to lower-right) with **moderate scatter** — not perfectly linear, but a clear downward tendency.

**Example**: Temperature (x) vs. heating costs (y) might show $r ≈ −0.7$. As temperature rises, heating costs fall. The relationship is clear but not perfect (other factors like insulation affect costs).

**Important**: $r = −0.65$ describes **association, not causation**. The two variables move together, but one doesn't necessarily cause the other.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Two scatterplots are shown: Plot A has $r = 0.92$ with points close to a line, but there are three extreme points far from the line at the upper-right corner. Plot B has $r = 0.85$ with all points evenly scattered. Explain the correlation coefficient difference and discuss which might be a better summary.",
        solution: `**What the correlations show:**

Both indicate strong positive linear relationships (both r > 0.8). But they tell different stories.

**Plot A (r = 0.92):**
- Three **influential outliers** at upper-right dramatically increase the correlation
- Without those points, r might drop to ~0.75–0.80
- The correlation is **inflated by outliers**
- These extreme points could be data errors, special cases, or true but unusual observations

**Plot B (r = 0.85):**
- More **consistent** relationship across all data
- No outliers distorting the picture
- More representative of the general trend
- Prediction (using regression line) would be more reliable

**Which is a better summary?**

**Neither r alone is sufficient.** Always examine the scatterplot visually:

1. In Plot A, report **both** the correlation AND note the outliers: "r = 0.92, but three upper-right outliers drive this; without them, r ≈ 0.78"
2. In Plot B, r = 0.85 is reliable because it's not overly influenced by extreme points

**Lesson**: Correlation is vulnerable to outliers. **Always make and examine scatterplots**; don't rely on r alone. Correlation ≠ causation anyway.`,
        difficulty: 'HARD'
      }
    ],
    flashcards: [
      {
        front: "What is a scatterplot and what does it show?",
        back: "A scatterplot plots two quantitative variables with points at (x, y) positions. It reveals the direction, form, and strength of the relationship between the variables."
      },
      {
        front: "What does a positive correlation mean?",
        back: "As one variable increases, the other tends to increase. Points trend upward from lower-left to upper-right on a scatterplot."
      },
      {
        front: "What does a negative correlation mean?",
        back: "As one variable increases, the other tends to decrease. Points trend downward from upper-left to lower-right on a scatterplot."
      },
      {
        front: "What is the correlation coefficient r and what range does it take?",
        back: "$r$ measures the strength and direction of a linear relationship. It ranges from −1 to +1, where −1 = perfect negative, 0 = no linear relationship, and +1 = perfect positive."
      },
      {
        front: "How do you interpret r = 0.92?",
        back: "Strong positive linear relationship. As x increases, y tends to increase strongly and predictably; points lie close to a straight line."
      },
      {
        front: "Why should you never conclude causation from correlation alone?",
        back: "Correlation only shows association (two variables move together). Confounding variables, reverse causation, or coincidence can explain the correlation without one causing the other."
      },
      {
        front: "What is an outlier or influential point in a scatterplot?",
        back: "A point far from the general trend. Influential points can dramatically change the regression line and correlation coefficient, especially if they're extreme in the x-direction."
      },
      {
        front: "What is the difference between form and direction in a correlation?",
        back: "Direction: positive (↗) or negative (↘). Form: linear (straight-line pattern) or nonlinear (curved, exponential, or other shapes)."
      },
      {
        front: "What does it mean if a scatterplot shows no correlation (r ≈ 0)?",
        back: "There is no linear relationship. Points are scattered randomly with no clear trend, suggesting x and y are independent or related in a nonlinear way."
      },
      {
        front: "Why is the scatterplot more informative than just the correlation coefficient?",
        back: "A scatterplot shows the actual pattern, reveals outliers, identifies nonlinear relationships, and shows the spread. The same r value can hide very different scatterplot patterns (Anscombe's quartet)."
      }
    ]
  },
  {
    slug: 'sampling-methods',
    examples: [
      {
        question: "Explain the difference between a Simple Random Sample (SRS), a stratified sample, and a cluster sample. Give an example of when each would be appropriate.",
        solution: `**Simple Random Sample (SRS):**

Every possible subset of size $n$ has an equal chance of being selected. Use random methods (random number generator, lottery) with no systematic pattern.

Example: Select 100 voters from a list of 10,000 registered voters by numbering them and using random digits.

Pros: Unbiased, conceptually simple
Cons: Requires complete list; doesn't guarantee representation of subgroups

**Stratified Sample:**

Divide the population into **strata** (groups by characteristic), then randomly sample from each stratum.

Example: A university has 2,000 freshmen, 1,800 sophomores, 1,700 juniors, 1,500 seniors. To survey campus housing, randomly sample 40 from each class (proportional to size).

Pros: Ensures representation of each subgroup; more efficient for comparing groups
Cons: Requires knowing strata beforehand; more complex

**Cluster Sample:**

Divide population into clusters (geographic or natural groups), randomly select a few clusters, then survey all or random sample within selected clusters.

Example: To survey 5,000 high school students across 50 schools, randomly select 5 schools, then survey all or random sample within those 5 schools.

Pros: Cost-efficient (less travel), practical for geographically dispersed populations
Cons: May introduce bias if clusters are not representative; within-cluster similarity can distort results

**When to use:**
- SRS: Small population, complete list available
- Stratified: Known subgroups important to represent fairly
- Cluster: Large geographically dispersed population, cost constraints`,
        difficulty: 'EASY'
      },
      {
        question: "A pollster stands outside a shopping mall on a Saturday and surveys every 10th person who walks by. Is this a probability sampling method? Identify the potential bias.",
        solution: `**Method type**: This is **systematic sampling** (every 10th person) combined with **convenience sampling** (mall intercept). It appears to use a systematic rule but is actually **non-probability** because:

1. Not everyone in the population has an equal (known) chance of selection
2. Only people at the mall on Saturday are included

**Potential biases:**

1. **Undercoverage**: Missing people who don't visit malls (elderly, disabled, those who shop online, night-shift workers)

2. **Temporal bias**: Saturday shoppers differ from weekday shoppers (leisure vs. work-focused, different age/income mix)

3. **Location bias**: Mall shoppers differ from non-mall shoppers; may not represent the broader community

4. **Voluntary response bias** (if participation is optional): People willing to stop and answer differ from those in a hurry

**Result**: The sample is not representative. If surveying about shopping habits or product preferences, the results would **overrepresent mall shoppers** and be unreliable for the general population.

**Better approach**: Use true SRS from voter rolls or census data (if available) or conduct random-digit dialing for phone surveys.`,
        difficulty: 'MEDIUM'
      },
      {
        question: "A researcher wants to estimate average income in a city of 500,000. Evaluate three sampling plans: (A) SRS of 1,000 people, (B) Stratified sample (100 each from 10 neighborhoods), (C) Convenience sample (students from a local university). Which is best and why?",
        solution: `**Plan A: SRS of 1,000**

Pros:
- Unbiased; every resident has equal chance
- Large enough (n=1,000) for reasonable precision
- No need to know neighborhood structure

Cons:
- Requires complete list of all 500,000 people (costly)

**Plan B: Stratified sample (100 per neighborhood)**

Pros:
- Ensures each neighborhood is represented
- Can compare income across neighborhoods
- More practical than getting a citywide list
- Better precision if neighborhoods are similar within but different between

Cons:
- Assumes neighborhoods are meaningful strata
- May still miss income groups (e.g., homeless, institutionalized)

**Plan C: Convenience sample (university students)**

Pros:
- Cheap and easy

Cons:
- **Severely biased**: University students are younger, better educated, and earn less (or earn future income) than city average
- Sample is not representative; results would **underestimate** true city average income
- This would be a **terrible** estimate

**Best choice: Plan B (Stratified by neighborhood)**

Reasoning:
- Better than A (more practical, avoids needing a complete citywide list)
- Much better than C (actually representative; reduces bias)
- Provides neighborhood-level insights
- Balances simplicity with statistical validity

**Conclusion**: C is obviously wrong (not representative). Between A and B, stratified sampling is more practical and achieves high precision with manageable data collection.`,
        difficulty: 'HARD'
      }
    ],
    flashcards: [
      {
        front: "What is a Simple Random Sample (SRS)?",
        back: "A sample where every possible subset of the population has an equal chance of being selected. Uses random methods (random number generator, lottery) with no bias."
      },
      {
        front: "What is a stratified sample?",
        back: "The population is divided into strata (groups by characteristic), then a random sample is selected from each stratum, often proportional to stratum size."
      },
      {
        front: "What is a cluster sample?",
        back: "The population is divided into clusters (often geographic or natural groups), a few clusters are randomly selected, then all or part of each selected cluster is surveyed."
      },
      {
        front: "What is systematic sampling?",
        back: "Every kth unit is selected from an ordered list (e.g., every 10th person). It's simpler than SRS but can be biased if the list has hidden patterns."
      },
      {
        front: "What is convenience sampling and why is it problematic?",
        back: "Selecting easily accessible participants. It's non-random and biased because accessible people differ systematically from the general population."
      },
      {
        front: "What is voluntary response bias?",
        back: "Occurs when people choose whether to participate. Volunteers differ from non-respondents (usually more passionate about the issue), leading to biased results."
      },
      {
        front: "What does undercoverage mean in sampling?",
        back: "Some groups in the population are omitted or less likely to be included in the sample (e.g., surveys missing homeless people or non-English speakers)."
      },
      {
        front: "When should you use stratified sampling instead of SRS?",
        back: "When the population has important subgroups (strata) that should be represented proportionally and when comparing between strata is important."
      },
      {
        front: "What is the main advantage of cluster sampling?",
        back: "It's cost-effective for large, geographically dispersed populations because you only survey people within a few randomly selected clusters, not across the entire region."
      },
      {
        front: "Why is random assignment different from random sampling?",
        back: "Random sampling selects who participates in a study; random assignment (in experiments) divides participants into treatment groups. Both reduce bias but serve different purposes."
      }
    ]
  },
  {
    slug: 'bias-sampling-surveys',
    examples: [
      {
        question: "A survey asking 'Don't you agree that more funding should go to schools?' is an example of what type of bias? Explain what response bias is and how to fix it.",
        solution: `This is an example of **response bias** (specifically **leading question bias** or **wording bias**).

**What response bias means:**
Response bias occurs when question wording, question order, or surveyor behavior influences responses, causing answers to differ from true opinions.

**Why this question is biased:**
The phrasing 'Don't you agree...' is **leading** — it suggests the desired answer is 'yes.' Most respondents will comply rather than disagree with a leading question, inflating support for school funding.

**How to fix it:**

Reword as **neutral** and **balanced** alternatives:
1. 'How should school funding change?' (open-ended)
2. 'Do you support increasing, maintaining, or decreasing school funding?' (balanced options)
3. 'School funding should be increased' vs. 'School funding should be maintained' (state both sides)

**Key principle**: Survey questions must be **neutral** and **not suggest** a particular answer. Both sides of an issue should be presented equally.

**Other response bias types**: Acquiescence bias (always agreeing), social desirability bias (answering what sounds good, not true), and question order effects.`,
        difficulty: 'EASY'
      },
      {
        question: "An online poll asks: 'Have you voted in the last election?' Those who don't respond are removed from the survey. What biases might this introduce?",
        solution: `**Biases introduced:**

**1. Nonresponse bias:**

People who don't respond differ from respondents. Who doesn't respond?
- Busy people (less time to fill out surveys)
- Less interested in voting/politics
- Elderly or tech-unfamiliar people (online survey may exclude them)
- People with contrary opinions (may ignore it)

**Result**: Sample overrepresents voters and politically engaged people; underrepresents non-voters.

**2. Voluntary response bias (self-selection):**

Online polls are voluntary. Who volunteers?
- People with strong opinions (both for and against)
- More motivated individuals
- Those with internet access

**Result**: Response represents passionate people, not average population.

**3. Undercoverage (selection bias):**

Only people with internet access can take online survey. Missing:
- Elderly, rural poor (limited internet)
- Low-income households
- Tech-averse individuals

These groups have different voting patterns than internet users.

**4. If the question assumes voting:**

'Have you voted...?' assumes respondents are voters. People who think they shouldn't answer (non-voters, non-citizens) might skip the survey, creating further nonresponse bias.

**Consequences:**

Estimated voter turnout would be **inflated** — the poll would overestimate how many people actually voted.

**How to reduce bias:**

1. Use random sampling (not voluntary signup)
2. Use multiple data-collection methods (phone, mail, in-person) to reach diverse groups
3. Offer incentives for response
4. Use careful follow-up of non-respondents
5. For online surveys, weight results to match known population characteristics`,
        difficulty: 'MEDIUM'
      },
      {
        question: "Compare three sources of bias in surveys: sampling error, undercoverage, and non-response. Give an example showing how all three could occur in one survey and explain which are most problematic for decision-making.",
        solution: `**Sampling Error:**

**What it is**: Natural variability in sample statistics due to random sampling. Even with a perfectly unbiased sample, different samples give different results.

Example: Two SRS of 500 voters each might give 52% and 48% support for a candidate just by chance.

**Is it a bias?**: NO — it's unavoidable randomness, not systematic error. Reduced by larger sample sizes.

**Undercoverage:**

**What it is**: Some population groups are systematically excluded or harder to reach.

Example: Phone survey doesn't reach people without phones (young, mobile-only) or language minorities.

**Result**: Sample doesn't reflect population structure; biased estimates.

**Is it a bias?**: YES — systematic, not random.

**Non-response:**

**What it is**: People who don't respond differ systematically from those who do.

Example: Survey of job satisfaction has 30% response rate. Non-responders might be very satisfied (don't bother responding) or very dissatisfied (don't want to engage).

**Result**: Biased estimate depending on who non-responders are.

**Is it a bias?**: YES — systematic, not random.

**Example: All three in one survey**

A company conducts phone survey about workplace satisfaction:

- **Sampling error**: They randomly select 300 employees, but by chance, younger workers (more critical) are overrepresented → slight downward bias in satisfaction estimate
- **Undercoverage**: Survey doesn't reach part-time remote workers or recently hired employees without company phones → missing diverse perspectives
- **Non-response**: 40% of called employees don't answer or decline; non-responders are either very satisfied (busy) or very dissatisfied (disengaged) → middle ground overrepresented

**Result**: Satisfaction estimate is biased AND has random variability.

**Which biases are most problematic?**

**Ranking by severity:**

1. **Non-response bias** (most problematic) — directly distorts results; unknown magnitude
2. **Undercoverage** (very problematic) — missing entire subgroups; results don't apply to all
3. **Sampling error** (least problematic) — unavoidable but understood; reduced with larger samples; we can quantify it with confidence intervals

**Why?**: Sampling error is predictable and decreases with n. Biases are systematic distortions we can't easily quantify or correct without knowing the truth.

**Lesson for decision-making**: Always ask: "Who is missing?" (undercoverage) and "Who didn't respond?" (non-response). These are far more problematic than sampling error.`,
        difficulty: 'HARD'
      }
    ],
    flashcards: [
      {
        front: "What is undercoverage in sampling?",
        back: "Some groups in the population are systematically excluded or less likely to be reached (e.g., phone survey missing people without phones, internet survey missing those without internet)."
      },
      {
        front: "What is non-response bias?",
        back: "People who don't respond to a survey differ systematically from those who do, leading to biased estimates of population characteristics."
      },
      {
        front: "What is response bias?",
        back: "Bias caused by how questions are asked, question wording, question order, or surveyor behavior that influences responses (e.g., leading questions, social desirability)."
      },
      {
        front: "What is a leading question and how does it bias survey results?",
        back: "A leading question suggests a desired answer (e.g., 'Don't you agree...?'). It causes response bias because respondents tend to comply rather than genuinely answer."
      },
      {
        front: "What is voluntary response bias?",
        back: "Occurs when participants self-select into a survey. Volunteers typically have stronger opinions than non-volunteers, leading to biased results."
      },
      {
        front: "What is wording bias?",
        back: "The specific wording of a survey question influences how people answer, often unintentionally (e.g., 'tax relief' vs. 'tax cut' frame the issue differently)."
      },
      {
        front: "What is the difference between sampling error and bias?",
        back: "Sampling error is random variability between samples (unavoidable, decreases with larger n). Bias is systematic error that skews results in one direction and can't be reduced by larger sample size."
      },
      {
        front: "How can you reduce non-response bias?",
        back: "Use incentives for response, follow up non-responders multiple times, use multiple collection methods, and if possible, verify that respondents represent the population."
      },
      {
        front: "What is acquiescence bias?",
        back: "A tendency for respondents to agree with statements (answering 'yes' or 'agree') regardless of their true opinion, leading to overestimation of agreement."
      },
      {
        front: "Why is a 'don't know' option important in surveys?",
        back: "It allows respondents who genuinely don't have an opinion to avoid guessing, reducing response bias from forced answers."
      }
    ]
  }
];

async function main() {
  console.log('Backfilling AP Statistics content (batch A: Units 1-3)...');
  for (const t of topics) {
    const topic = await prisma.topic.findUnique({ where: { slug: t.slug } });
    if (!topic) {
      console.warn(`  ⚠ Topic not found: ${t.slug}`);
      continue;
    }

    if (t.flashcards && t.flashcards.length > 0) {
      const existing = await prisma.flashcard.findMany({
        where: { topicId: topic.id },
        select: { front: true },
      });
      const existingFronts = new Set(existing.map(f => f.front.trim()));
      const toCreate = t.flashcards
        .filter(f => !existingFronts.has(f.front.trim()))
        .map(f => ({ topicId: topic.id, ...f }));
      if (toCreate.length) await prisma.flashcard.createMany({ data: toCreate });
    }

    if (t.examples && t.examples.length > 0) {
      const existing = await prisma.exampleProblem.findMany({
        where: { topicId: topic.id },
        select: { question: true, order: true },
      });
      const existingQs = new Set(existing.map(p => p.question.trim()));
      const maxOrder = existing.reduce((m, p) => Math.max(m, p.order ?? 0), 0);
      const toCreate = t.examples
        .filter(e => !existingQs.has(e.question.trim()))
        .map((e, i) => ({ topicId: topic.id, order: maxOrder + i + 1, ...e }));
      if (toCreate.length) await prisma.exampleProblem.createMany({ data: toCreate });
    }

    const fcCount = await prisma.flashcard.count({ where: { topicId: topic.id } });
    const pCount = await prisma.exampleProblem.count({ where: { topicId: topic.id } });
    console.log(`✓ ${t.slug}  flashcards=${fcCount}  problems=${pCount}`);
  }
  console.log('✓ Batch A complete.');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
