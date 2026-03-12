import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 1: Exploring Data (6 topics)...');

  // Find the topics
  const typesOfData = await prisma.topic.findFirst({
    where: { slug: 'types-data-sampling' }
  });

  const displayingDistributions = await prisma.topic.findFirst({
    where: { slug: 'displaying-distributions-graphs' }
  });

  const describingDistributions = await prisma.topic.findFirst({
    where: { slug: 'describing-distributions' }
  });

  const measuresCenter = await prisma.topic.findFirst({
    where: { slug: 'measures-of-center-stats' }
  });

  const measuresSpread = await prisma.topic.findFirst({
    where: { slug: 'measures-of-spread-stats' }
  });

  const normalDistributions = await prisma.topic.findFirst({
    where: { slug: 'normal-distributions' }
  });

  if (!typesOfData || !displayingDistributions || !describingDistributions || 
      !measuresCenter || !measuresSpread || !normalDistributions) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Types of Data and Sampling
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: typesOfData.id,
        question: 'Classify each variable as categorical or quantitative:\na) Eye color of students\nb) Number of siblings\nc) Brand of smartphone\nd) Height in centimeters',
        solution: `Step 1: Understand the distinction
Categorical: Places individuals into groups/categories
Quantitative: Takes numerical values with meaningful operations

Step 2: Analyze each variable
a) Eye color: Categories (blue, brown, green, etc.) → CATEGORICAL
b) Number of siblings: Numerical count, can calculate average → QUANTITATIVE
c) Brand of smartphone: Categories (Apple, Samsung, etc.) → CATEGORICAL
d) Height in centimeters: Numerical measurement, can calculate mean → QUANTITATIVE

Answer: 
a) Categorical
b) Quantitative
c) Categorical
d) Quantitative`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        question: 'A survey asks students: "Rate your satisfaction with the cafeteria food on a scale of 1-5." Is this categorical or quantitative? Explain.',
        solution: `Step 1: Analyze the data type
Scale: 1-5 (numbers are used)

Step 2: Consider the nature of the scale
- Numbers represent categories of satisfaction (very unsatisfied → very satisfied)
- The numbers are ordinal (ordered categories)
- Differences between numbers aren't necessarily equal
- Can't meaningfully say "2 is twice as satisfied as 1"

Step 3: Classify
This is CATEGORICAL (specifically ordinal categorical data)
- Even though numbers are used, they represent categories
- The numbers are labels for satisfaction levels
- Also called "Likert scale" data

Note: Some statisticians treat ordinal data as quantitative in certain contexts, but strictly speaking, it's categorical with an order.

Answer: Categorical (ordinal)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        question: 'Identify whether each sampling method is: Simple Random Sample (SRS), Stratified, Cluster, or Systematic.\na) Select every 10th person entering a store\nb) Divide school by grade level, then randomly select students from each grade\nc) Randomly select 5 classrooms and survey all students in those classrooms',
        solution: `Step 1: Review sampling methods
SRS: Every individual has equal probability
Stratified: Divide into groups (strata), sample from each
Cluster: Divide into groups, randomly select some groups, use ALL from selected
Systematic: Select every kth individual

Step 2: Classify each method

a) Every 10th person
Pattern: Select at regular intervals
This is SYSTEMATIC sampling

b) Divide by grade, sample from each
Pattern: Create homogeneous groups (grades), sample from ALL groups
This is STRATIFIED sampling

c) Select 5 classrooms, survey all students
Pattern: Groups (clusters) selected, then ALL within those groups surveyed
This is CLUSTER sampling

Answer:
a) Systematic
b) Stratified
c) Cluster`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        question: 'A researcher wants to estimate the average income in a city. She divides the city into neighborhoods based on property values (low, medium, high), then randomly samples 50 households from each neighborhood. What type of sampling is this, and why might it be better than a simple random sample?',
        solution: `Step 1: Identify the sampling method
Process:
1. Divide population into groups (neighborhoods by property value)
2. Sample from EACH group
3. Use proportional or equal sampling from each stratum

This is STRATIFIED sampling

Step 2: Explain advantages over SRS

Why stratified is better here:
1. **Ensures representation**: Guarantees all income levels represented
2. **Reduces variability**: Within each stratum, incomes are more similar
3. **Increases precision**: Can get more accurate estimates with same sample size
4. **Allows subgroup analysis**: Can compare neighborhoods

With SRS:
- Might randomly miss low-income or high-income areas
- Higher chance of sampling error
- Less efficient estimation

Step 3: Statistical benefit
Stratified sampling reduces the standard error of the estimate when:
- Strata are homogeneous within
- Strata are heterogeneous between
- Income varies greatly by neighborhood (which it does!)

Answer: Stratified sampling. It's better because it ensures all income levels are represented, reduces sampling variability, and provides more precise estimates than SRS when the population has distinct subgroups.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        question: 'A college has 10,000 students: 6,000 freshmen, 2,500 sophomores, 1,000 juniors, and 500 seniors. Design a stratified random sample of 200 students that maintains the same proportions. How many students should be selected from each class?',
        solution: `Step 1: Find the proportion of each class
Total students: 10,000

Freshmen: 6,000/10,000 = 0.60 = 60%
Sophomores: 2,500/10,000 = 0.25 = 25%
Juniors: 1,000/10,000 = 0.10 = 10%
Seniors: 500/10,000 = 0.05 = 5%

Step 2: Apply proportions to sample size
Sample size: 200 students

Freshmen: 200 × 0.60 = 120 students
Sophomores: 200 × 0.25 = 50 students
Juniors: 200 × 0.10 = 20 students
Seniors: 200 × 0.05 = 10 students

Step 3: Verify total
120 + 50 + 20 + 10 = 200 ✓

Step 4: Verify proportions maintained
Freshmen: 120/200 = 60% ✓
Sophomores: 50/200 = 25% ✓
Juniors: 20/200 = 10% ✓
Seniors: 10/200 = 5% ✓

Answer: 
Freshmen: 120
Sophomores: 50
Juniors: 20
Seniors: 10`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: typesOfData.id,
        front: 'What is the difference between categorical and quantitative variables?',
        back: 'Categorical variables place individuals into groups/categories (eye color, major). Quantitative variables take numerical values where arithmetic operations make sense (height, GPA).',
        hint: 'Can you calculate a meaningful average?',
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        front: 'What is a Simple Random Sample (SRS)?',
        back: 'A sampling method where every individual and every group of n individuals has an equal chance of being selected. Like drawing names from a hat.',
        hint: 'Every individual has equal probability',
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        front: 'What is stratified sampling?',
        back: 'Divide the population into homogeneous groups (strata), then take a random sample from EACH stratum. Ensures all subgroups are represented.',
        hint: 'Sample from each group',
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        front: 'What is cluster sampling?',
        back: 'Divide population into groups (clusters), randomly select some clusters, then survey ALL individuals in the selected clusters.',
        hint: 'Select groups, use all from selected',
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        front: 'What is systematic sampling?',
        back: 'Select every kth individual from a list. Example: select every 10th person entering a store. Risk: pattern in population can create bias.',
        hint: 'Every kth individual',
        isPremium: false
      },
      {
        topicId: typesOfData.id,
        front: 'What is the difference between a parameter and a statistic?',
        back: 'Parameter: numerical characteristic of a POPULATION (usually unknown). Statistic: numerical characteristic of a SAMPLE (calculated from data). We use statistics to estimate parameters.',
        hint: 'Population vs. sample',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: types-of-data-and-sampling (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Displaying Distributions with Graphs
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: displayingDistributions.id,
        question: 'What type of graph would be most appropriate for displaying:\na) The distribution of test scores (0-100) for a class\nb) The number of students in each major at a university\nc) The relationship between study hours and exam scores',
        solution: `Step 1: Match data type to graph type

a) Test scores (0-100) - Quantitative, continuous
Best choice: HISTOGRAM
- Shows distribution shape
- Can see center, spread, outliers
Alternative: Boxplot, Dotplot (for small datasets)

b) Number of students in each major - Categorical
Best choice: BAR GRAPH
- Each major is a category
- Height shows frequency/count
- Bars should NOT touch (categorical)

c) Study hours vs exam scores - Two quantitative variables
Best choice: SCATTERPLOT
- Shows relationship between two quantitative variables
- Each point represents one student
- Can assess correlation

Answer:
a) Histogram
b) Bar graph
c) Scatterplot`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        question: 'Given this data on ages of 20 people: 18, 19, 19, 20, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 26, 27, 30, 35, 40, 55. Create a stemplot (stem-and-leaf plot) for this data.',
        solution: `Step 1: Organize by stems (tens place)
Stem = tens digit
Leaf = ones digit

Step 2: List all data points by stem
1|8, 9, 9
2|0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7
3|0, 5
4|0
5|5

Step 3: Create the stemplot with key

Stem-and-Leaf Plot:
1 | 8 9 9
2 | 0 0 0 1 1 2 2 3 3 4 5 6 7
3 | 0 5
4 | 0
5 | 5

Key: 1|8 = 18 years old

Step 4: Observations
- Most people in their 20s (heavily concentrated)
- Few outliers in 40s and 50s
- Roughly symmetric in the 18-27 range
- Gap between 30 and 35, and after 40

Answer: See stemplot above`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        question: 'The following histogram shows test scores. Describe the shape, center, and spread of the distribution.\n[Histogram with bins: 50-59(2), 60-69(5), 70-79(12), 80-89(8), 90-99(3)]',
        solution: `Step 1: Determine the shape
Look at the overall pattern:
- Peak at 70-79 (most frequent)
- Decreases on both sides of peak
- Roughly symmetric, slight left skew
- One mode (unimodal)

Shape: Roughly symmetric, unimodal, slightly skewed left

Step 2: Estimate the center
Peak bin: 70-79
Most data in 70-89 range
Approximate mean/median: around 75-77

Step 3: Describe the spread
Range: 50 to 99 (approximately 50 points)
Most data spans about 30-40 points (60-90)
Variability: Moderate spread

Step 4: Look for unusual features
- Small tail on left (50s and 60s)
- Very few extreme scores
- No major outliers
- Gap in very low scores (no scores below 50)

Answer:
Shape: Unimodal, roughly symmetric with slight left skew
Center: Around 75-77
Spread: Scores range from 50s to 90s, with most between 60-90
Unusual: Small left tail, no scores below 50`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        question: 'Compare using histograms vs. boxplots. What are the advantages and disadvantages of each for displaying distributions?',
        solution: `HISTOGRAMS:

Advantages:
1. Show the shape of distribution clearly
2. Can see multiple modes (bimodal, multimodal)
3. Display frequency/count information
4. Show gaps in data
5. Can see actual data density

Disadvantages:
1. Appearance depends on bin width choice
2. Harder to compare multiple distributions
3. Don't show specific summary statistics
4. Take more space for multiple groups

BOXPLOTS:

Advantages:
1. Show 5-number summary clearly (min, Q1, median, Q3, max)
2. Excellent for comparing multiple distributions side-by-side
3. Clearly identify outliers
4. Compact representation
5. Good for large datasets

Disadvantages:
1. Don't show the shape as clearly
2. Can't see multiple modes
3. Hide detailed distribution features
4. Don't show sample size
5. Can't see gaps in data

WHEN TO USE EACH:

Use Histogram when:
- Need to see detailed shape
- Checking for normality
- Looking for multiple modes
- Single distribution to display

Use Boxplot when:
- Comparing multiple groups
- Quick summary needed
- Identifying outliers is priority
- Limited space available

Answer: Histograms show shape better; boxplots better for comparisons and outlier detection. Choice depends on analysis goals.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        question: 'Create a boxplot for this five-number summary: Min=12, Q1=18, Median=23, Q3=29, Max=45. Then identify if there are any outliers using the 1.5×IQR rule.',
        solution: `Step 1: Calculate IQR
IQR = Q3 - Q1 = 29 - 18 = 11

Step 2: Calculate outlier boundaries
Lower fence = Q1 - 1.5×IQR
            = 18 - 1.5(11)
            = 18 - 16.5
            = 1.5

Upper fence = Q3 + 1.5×IQR
            = 29 + 1.5(11)
            = 29 + 16.5
            = 45.5

Step 3: Identify outliers
Any value < 1.5 or > 45.5 is an outlier

Check our values:
Min = 12: Is 12 < 1.5? No → Not an outlier
Max = 45: Is 45 > 45.5? No → Not an outlier

Step 4: Draw the boxplot
No outliers, so whiskers extend to actual min and max

Boxplot:
    |------[====|====]------|
   12     18  23  29      45

Box: From Q1(18) to Q3(29)
Line in box: Median(23)
Left whisker: To Min(12)
Right whisker: To Max(45)

Step 5: Observations
- Median closer to Q1 than Q3 (slight right skew)
- Right whisker longer than left (confirms right skew)
- No outliers

Answer: No outliers. Boxplot shows slight right skew with all data within fences.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: displayingDistributions.id,
        front: 'When should you use a histogram vs. a bar graph?',
        back: 'Histogram: for QUANTITATIVE data, bars touch, shows distribution. Bar graph: for CATEGORICAL data, bars separated, shows frequency of categories.',
        hint: 'Quantitative vs. categorical',
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        front: 'What does a boxplot (box-and-whisker plot) show?',
        back: 'Shows 5-number summary: minimum, Q1, median, Q3, maximum. Box contains middle 50% of data (IQR). Outliers shown as individual points.',
        hint: 'Five-number summary',
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        front: 'What is the 1.5×IQR rule for outliers?',
        back: 'Outliers are values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR. These are the "fences" beyond which values are considered unusual.',
        hint: '1.5 times the IQR from quartiles',
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        front: 'What is a stemplot (stem-and-leaf plot)?',
        back: 'Displays quantitative data where each value is split into "stem" (leading digits) and "leaf" (last digit). Retains actual values while showing distribution shape.',
        hint: 'Splits digits into stem and leaf',
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        front: 'When should you use a scatterplot?',
        back: 'Use scatterplot to display the relationship between TWO quantitative variables. Each point represents an individual. Shows correlation patterns.',
        hint: 'Two quantitative variables',
        isPremium: false
      },
      {
        topicId: displayingDistributions.id,
        front: 'What are the advantages of a boxplot over a histogram?',
        back: 'Boxplots are better for: comparing multiple distributions side-by-side, identifying outliers clearly, showing summary statistics, and taking less space.',
        hint: 'Great for comparisons',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: displaying-distributions-with-graphs (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Describing Distributions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: describingDistributions.id,
        question: 'Describe the shape of a distribution that is:\na) Symmetric\nb) Skewed right\nc) Skewed left',
        solution: `Step 1: Symmetric distribution
- Mirror image on both sides of center
- Mean ≈ Median
- Example: Normal distribution, heights
- Tail length equal on both sides

Step 2: Skewed right (positive skew)
- Tail extends to the right
- Mean > Median (pulled toward tail)
- Example: Income, house prices
- Most data on left, few high values

Step 3: Skewed left (negative skew)
- Tail extends to the left
- Mean < Median (pulled toward tail)
- Example: Test scores (when easy), age at death
- Most data on right, few low values

Memory trick:
"The skew points where the tail points"

Visual summary:
Symmetric: <-center->
Right skew: <-center---->
Left skew: <----center->

Answer:
a) Symmetric: balanced on both sides, mean = median
b) Skewed right: long right tail, mean > median
c) Skewed left: long left tail, mean < median`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        question: 'A dataset has the following properties: Mean = 75, Median = 80. What can you conclude about the shape of the distribution?',
        solution: `Step 1: Compare mean and median
Mean = 75
Median = 80
Mean < Median

Step 2: Recall the relationship
When Mean < Median:
- Distribution is skewed LEFT (negative skew)
- Tail points to lower values
- A few low values pull the mean down

Step 3: Explain why
The mean is sensitive to extreme values
The median is resistant to outliers
If mean is pulled below median, there must be some low outliers or a left tail

Step 4: Visualize
Most data is clustered around 80 (median)
Some lower values around or below 75
These low values drag the mean down below the median

Example: If test scores are mostly in 70s-90s, but a few students scored in 40s-50s, mean would be pulled down while median stays high.

Answer: The distribution is skewed LEFT (negatively skewed) because Mean < Median, indicating a long tail toward lower values.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        question: 'Identify whether each distribution is unimodal, bimodal, or multimodal:\na) Heights of adult humans (all genders)\nb) Test scores where most students got A or F\nc) Ages of people at a kids movie theater',
        solution: `Step 1: Understand modes
Unimodal: One clear peak
Bimodal: Two distinct peaks
Multimodal: More than two peaks

Step 2: Analyze each scenario

a) Heights of all adult humans
- Women cluster around ~5'4" (163 cm)
- Men cluster around ~5'9" (175 cm)
- Two distinct groups
Answer: BIMODAL

b) Test scores with mostly A or F
- Cluster around 90-100 (A students)
- Cluster around 0-60 (F students)
- Few in between (B, C, D)
Answer: BIMODAL

c) Ages at kids movie
- Young children (ages 5-12)
- Parents (ages 30-45)
- Possibly grandparents (ages 60-75)
- Could have 2-3 distinct groups
Answer: BIMODAL or MULTIMODAL (likely 2-3 peaks)

Answer:
a) Bimodal (male and female heights)
b) Bimodal (A and F peaks)
c) Bimodal/Multimodal (children and adults)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        question: 'Describe this distribution using the SOCS framework (Shape, Outliers, Center, Spread): Data shows exam scores with most values between 70-85, mean=77, median=78, one score at 45, and range=40.',
        solution: `SOCS Framework for describing distributions:

S - SHAPE:
Mean (77) ≈ Median (78), very close
This suggests roughly SYMMETRIC distribution
However, presence of low outlier (45) suggests slight left skew
Overall: Roughly symmetric, possibly slight left skew

O - OUTLIERS:
Score of 45 is notably low
With most scores 70-85 and one at 45:
45 is likely an outlier (more than 25 points below typical)
Need to check with 1.5×IQR rule, but appears to be outlier

C - CENTER:
Mean = 77
Median = 78
Typical exam score around 77-78
Mean slightly pulled down by low outlier

S - SPREAD:
Range = 40 points (from 45 to 85)
Most data in 70-85 range (about 15 points)
Without outlier, spread would be smaller
IQR likely around 10-15 points

Complete SOCS description:
"The distribution of exam scores is roughly symmetric with a possible slight left skew due to one low outlier at 45. The center of the distribution is around 77-78 (mean and median nearly equal). The scores spread from 45 to 85, a range of 40 points, though most scores cluster between 70-85. The score of 45 appears to be an outlier, sitting well below the main body of data."

Answer: Symmetric/slight left skew, one low outlier (45), center ~77-78, range=40 with most data in 15-point range.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        question: 'Two distributions have the same mean (50) and same range (20-80). Distribution A is uniform (flat), while Distribution B is normal (bell-shaped). Which distribution would have a larger standard deviation, and why?',
        solution: `Step 1: Visualize both distributions
Both: Mean = 50, Range = 60 (from 20 to 80)

Distribution A (Uniform):
- Data spread EVENLY from 20 to 80
- Every value equally likely
- Flat histogram

Distribution B (Normal):
- Data concentrated near mean (50)
- Fewer values at extremes (20 and 80)
- Bell-shaped curve

Step 2: Understand standard deviation
SD measures average distance from the mean
Larger SD = more spread out from center

Step 3: Compare spread from mean

Distribution A (Uniform):
- Many values far from mean (50)
- Values at 20 and 80 are 30 units from mean
- Lots of data at extremes
- Higher average distance from mean

Distribution B (Normal):
- Most data near mean (50)
- Few values at 20 and 80
- Less data at extremes
- Lower average distance from mean

Step 4: Calculate mental estimate
Uniform: Roughly SD ≈ range/3.5 ≈ 60/3.5 ≈ 17
Normal: Roughly SD ≈ range/6 ≈ 60/6 ≈ 10
(These are approximations)

Answer: Distribution A (uniform) has LARGER standard deviation because more of its data is spread far from the mean, while Distribution B (normal) has most data clustered near the center. Even with the same range, uniform distributions have more variability than normal distributions.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: describingDistributions.id,
        front: 'What does SOCS stand for when describing distributions?',
        back: 'Shape (symmetric, skewed, modes), Outliers (unusual values), Center (mean, median), Spread (range, IQR, standard deviation). A framework for complete distribution description.',
        hint: 'Four key features to describe',
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        front: 'How do you identify the direction of skew?',
        back: 'Skew points where the tail points. Right skew: tail to right, mean > median. Left skew: tail to left, mean < median. Symmetric: mean ≈ median.',
        hint: 'Follow the tail',
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        front: 'What is a unimodal distribution?',
        back: 'A distribution with ONE clear peak or mode. Most common type. Example: normal distribution has one peak at the center.',
        hint: 'One peak',
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        front: 'What is a bimodal distribution?',
        back: 'A distribution with TWO distinct peaks. Often indicates two different groups in the data. Example: heights of adults (male peak and female peak).',
        hint: 'Two peaks, often two groups',
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        front: 'When Mean > Median, what does this tell you about the distribution?',
        back: 'The distribution is skewed RIGHT (positive skew). High values in the right tail pull the mean above the median. Example: income distributions.',
        hint: 'Mean pulled toward tail',
        isPremium: false
      },
      {
        topicId: describingDistributions.id,
        front: 'What features should you always describe when analyzing a distribution?',
        back: 'Always describe: shape (symmetric/skewed, modes), center (mean and/or median), spread (range, IQR, SD), and any outliers or unusual features.',
        hint: 'Use SOCS framework',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: describing-distributions (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Measures of Center
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: measuresCenter.id,
        question: 'Calculate the mean and median for this dataset: 8, 12, 15, 15, 18, 20, 22',
        solution: `Step 1: Calculate the mean
Mean = sum of all values / number of values
Sum = 8 + 12 + 15 + 15 + 18 + 20 + 22 = 110
Number of values (n) = 7
Mean = 110 / 7 ≈ 15.71

Step 2: Calculate the median
Data is already in order: 8, 12, 15, 15, 18, 20, 22
n = 7 (odd number)
Median position = (n + 1) / 2 = (7 + 1) / 2 = 4th value
Median = 15

Step 3: Verify
Count: 1st, 2nd, 3rd, 4th, 5th, 6th, 7th
Values: 8, 12, 15, [15], 18, 20, 22
                    ↑
               median (4th value)

Answer: Mean ≈ 15.71, Median = 15`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        question: 'Five students scored: 85, 90, 88, 92, and 95 on a test. A sixth student who was absent takes the test and scores 40. How does this affect the mean and median?',
        solution: `Step 1: Calculate original statistics
Original data: 85, 88, 90, 92, 95 (already ordered)
n = 5

Original mean = (85 + 88 + 90 + 92 + 95) / 5 = 450 / 5 = 90
Original median = 3rd value = 90

Step 2: Add the new score
New data: 40, 85, 88, 90, 92, 95 (ordered)
n = 6

New mean = (40 + 85 + 88 + 90 + 92 + 95) / 6 = 490 / 6 ≈ 81.67
New median = average of 3rd and 4th values = (88 + 90) / 2 = 89

Step 3: Calculate changes
Mean: 90 → 81.67
  Change = -8.33 points (decreased by 9.3%)

Median: 90 → 89
  Change = -1 point (decreased by 1.1%)

Step 4: Explain the difference
Mean is NOT RESISTANT: Affected greatly by outliers
The score of 40 is much lower than others, pulling mean down significantly

Median is RESISTANT: Only depends on middle values
Adding one value only shifts the middle position slightly

Answer: 
Mean dropped from 90 to 81.67 (decrease of 8.33)
Median dropped from 90 to 89 (decrease of 1)
The mean was much more affected by the outlier than the median.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        question: 'A company has 10 employees with salaries: $30k, $32k, $35k, $35k, $38k, $40k, $42k, $45k, $48k, and the CEO makes $300k. Which measure of center (mean or median) better represents the "typical" employee salary? Explain.',
        solution: `Step 1: Calculate both measures
Data: 30, 32, 35, 35, 38, 40, 42, 45, 48, 300 (in thousands)
n = 10

Mean = (30 + 32 + 35 + 35 + 38 + 40 + 42 + 45 + 48 + 300) / 10
     = 645 / 10
     = $64.5k

Median = average of 5th and 6th values
       = (38 + 40) / 2
       = $39k

Step 2: Compare to actual data
9 employees make: $30k-$48k (most around $35k-$45k)
1 employee (CEO) makes: $300k

Mean ($64.5k): Higher than what 9 out of 10 employees make!
Median ($39k): Right in the middle of what most employees make

Step 3: Determine which is better
The mean is heavily influenced by the CEO's salary
$64.5k doesn't represent what a "typical" employee makes
Most employees make much less than $64.5k

The median is resistant to the outlier
$39k represents the middle of employee salaries
Half make more, half make less

Step 4: Make recommendation
Median is better here because:
1. Data is strongly skewed right (one extreme value)
2. Mean is misleading (inflated by CEO)
3. Median represents actual middle of employee salaries
4. If asked "what's a typical salary?" - $39k is more accurate

Answer: MEDIAN ($39k) better represents typical salary. The mean ($64.5k) is inflated by the CEO's $300k salary. With skewed data and outliers, median is the better measure of center.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        question: 'For what type of distributions should you use the mean vs. median as the measure of center? Provide examples.',
        solution: `USE THE MEAN when:

1. **Distribution is symmetric**
   - Mean and median will be approximately equal
   - Mean uses all data points (more information)
   - Example: Heights, test scores (when roughly normal)

2. **No outliers or extreme values**
   - Mean won't be distorted
   - All values contribute equally
   - Example: Temperatures in summer months

3. **You want a measure that uses all data**
   - Mean incorporates every value
   - More sensitive to changes
   - Example: Quality control where all measurements matter

4. **Normal distribution**
   - Mean is the best measure
   - Optimal statistical properties
   - Example: IQ scores, measurement errors

USE THE MEDIAN when:

1. **Distribution is skewed**
   - Median not affected by skew
   - Better represents "typical" value
   - Example: Income (right-skewed), home prices

2. **Outliers are present**
   - Median is resistant/robust
   - Not influenced by extreme values
   - Example: Salaries with CEO, test scores with one failure

3. **Ordinal data**
   - When data is ranked/ordered but differences aren't equal
   - Can find middle rank
   - Example: Satisfaction ratings (1-5 scale)

4. **Open-ended distributions**
   - When highest/lowest values are unknown
   - Example: Income ">$200k", age "65+"

SUMMARY TABLE:
Symmetric, no outliers → Use MEAN
Skewed or outliers → Use MEDIAN
Want all data used → Use MEAN
Want resistant measure → Use MEDIAN

Answer: Use mean for symmetric distributions without outliers (normal data). Use median for skewed distributions or data with outliers (income, housing prices). Median is resistant; mean uses all data.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        question: 'A dataset has a mean of 50 and a median of 50. If you add a new value of 100 to the dataset, will the mean or median change more? Explain your reasoning.',
        solution: `Step 1: Understand the initial condition
Mean = 50, Median = 50
This suggests symmetric distribution
Data is balanced around 50

Step 2: Analyze effect on MEAN
The mean uses ALL values in its calculation
New mean = (sum of old values + 100) / (n + 1)

Adding 100 (which is 50 above the current mean):
- Pulls the mean UP
- Amount depends on sample size
- But definitely increases

If n = 9 (10 values total after adding 100):
- Old sum ≈ 9 × 50 = 450
- New sum = 450 + 100 = 550
- New mean = 550 / 10 = 55
- Change: +5 points

Step 3: Analyze effect on MEDIAN
The median only depends on MIDDLE position(s)
Adding one value:
- Changes sample size from n to n+1
- May shift which value(s) are in middle
- But only by one position

If n was odd (say 9): old median was 5th value
If n is now even (10): new median is average of 5th and 6th values
The value 100 goes to the end, doesn't become a middle value
Median shifts only slightly (maybe to 50.5 or 51 depending on data)

Step 4: Compare magnitude of changes
Mean: Increased significantly (we calculated +5 for n=9)
Median: Increased minimally (maybe +0 to +2 at most)

The mean is SENSITIVE to extreme values
The median is RESISTANT to extreme values

Answer: The MEAN will change more. It's sensitive to all values, especially outliers. Adding 100 (far above 50) pulls the mean up substantially. The median is resistant - it only depends on middle positions, so adding one extreme value has minimal effect.`,
        difficulty: 'HARD',
        order: 1,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: measuresCenter.id,
        front: 'How do you calculate the mean (average)?',
        back: 'Mean = (sum of all values) / (number of values). Add up all data points and divide by how many there are. Denoted as x̄ (sample) or μ (population).',
        hint: 'Sum divided by count',
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        front: 'How do you find the median?',
        back: 'Order data from smallest to largest. If n is odd, median is the middle value. If n is even, median is the average of the two middle values.',
        hint: 'The middle value when ordered',
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        front: 'What does it mean for a statistic to be "resistant"?',
        back: 'A resistant statistic is not affected much by outliers or extreme values. Median and IQR are resistant. Mean and standard deviation are NOT resistant.',
        hint: 'Not affected by outliers',
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        front: 'When should you use the mean vs. the median?',
        back: 'Use MEAN for symmetric distributions without outliers (it uses all data). Use MEDIAN for skewed distributions or when outliers are present (it\'s resistant).',
        hint: 'Symmetric → mean, Skewed → median',
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        front: 'What is the mode?',
        back: 'The value that appears most frequently in a dataset. A distribution can have one mode (unimodal), two modes (bimodal), or many modes (multimodal).',
        hint: 'Most frequent value',
        isPremium: false
      },
      {
        topicId: measuresCenter.id,
        front: 'Why is the mean not resistant to outliers?',
        back: 'The mean uses ALL values in its calculation, so extreme values heavily influence it. One very large or small value can pull the mean far from the center of most data.',
        hint: 'Uses all values, affected by extremes',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: measures-of-center (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Measures of Spread
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: measuresSpread.id,
        question: 'Calculate the range for this dataset: 45, 52, 48, 61, 55, 49, 58',
        solution: `Step 1: Identify minimum and maximum
Data: 45, 52, 48, 61, 55, 49, 58

Minimum value = 45
Maximum value = 61

Step 2: Calculate range
Range = Maximum - Minimum
Range = 61 - 45
Range = 16

Step 3: Interpret
The data spans 16 units
Difference between highest and lowest values
Simple measure of spread, but affected by outliers

Answer: Range = 16`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        question: 'Given this five-number summary: Min=20, Q1=35, Median=50, Q3=65, Max=90. Calculate the IQR and range.',
        solution: `Step 1: Calculate IQR
IQR = Q3 - Q1
IQR = 65 - 35
IQR = 30

Step 2: Calculate Range
Range = Max - Min
Range = 90 - 20
Range = 70

Step 3: Compare the two measures
IQR = 30 (middle 50% of data spans 30 units)
Range = 70 (all data spans 70 units)

Step 4: Interpret
IQR is resistant to outliers (only uses middle 50%)
Range is sensitive to outliers (uses extremes)
IQR is better for skewed data

Answer: IQR = 30, Range = 70`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        question: 'Two classes took the same test. Both have a mean of 75. Class A has a standard deviation of 5, and Class B has a standard deviation of 15. What does this tell you about the two classes?',
        solution: `Step 1: Understand standard deviation
SD measures average distance from the mean
Higher SD = more spread out
Lower SD = more clustered around mean

Step 2: Analyze Class A (SD = 5)
Scores tightly clustered around mean of 75
Most students scored close to 75
Typical deviation from mean: about 5 points
Likely range: roughly 65-85 (most within 2 SD)
Very consistent performance

Step 3: Analyze Class B (SD = 15)
Scores widely spread around mean of 75
More variability in performance
Typical deviation from mean: about 15 points
Likely range: roughly 45-105 (most within 2 SD)
Very inconsistent performance

Step 4: Compare the classes
Class A: Homogeneous, similar ability levels, consistent
Class B: Heterogeneous, mixed ability levels, varied

Possible explanations for Class B:
- Some students very prepared, others not
- Wider range of abilities
- Some students may have guessed more
- More diverse backgrounds/preparation

Step 5: Teaching implications
Class A: Whole-class instruction may work well
Class B: May need differentiated instruction

Answer: Class A (SD=5) has students performing very similarly, all close to 75. Class B (SD=15) has much more variability - some students did very well, others poorly. Both classes average the same, but Class B is much more spread out.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        question: 'Calculate the standard deviation for this small dataset: 2, 4, 6, 8, 10',
        solution: `Step 1: Calculate the mean
Mean = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6

Step 2: Calculate deviations from mean
Value | Deviation from mean
2     | 2 - 6 = -4
4     | 4 - 6 = -2
6     | 6 - 6 = 0
8     | 8 - 6 = 2
10    | 10 - 6 = 4

Step 3: Square the deviations
(-4)² = 16
(-2)² = 4
(0)² = 0
(2)² = 4
(4)² = 16

Step 4: Find average of squared deviations (variance)
For sample: divide by (n - 1) = 4
Variance = (16 + 4 + 0 + 4 + 16) / 4
         = 40 / 4
         = 10

Step 5: Take square root (standard deviation)
SD = √10 ≈ 3.16

Step 6: Interpret
On average, values deviate about 3.16 units from the mean of 6
Makes sense: values are 2, 4, 6, 8, 10 (spread from -4 to +4)

Note: We used (n-1) because this is sample data
For population, we'd use n

Answer: s ≈ 3.16`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        question: 'Compare and contrast range, IQR, and standard deviation as measures of spread. When should you use each?',
        solution: `RANGE:

Definition: Maximum - Minimum

Advantages:
- Very easy to calculate
- Easy to understand
- Shows total spread

Disadvantages:
- Uses only 2 values (ignores all others)
- Extremely sensitive to outliers
- Doesn't show where data is concentrated

When to use:
- Quick rough measure
- When outliers aren't a concern
- Small datasets

INTERQUARTILE RANGE (IQR):

Definition: Q3 - Q1 (middle 50% spread)

Advantages:
- Resistant to outliers
- Shows spread of middle 50%
- Good with skewed data
- Used to identify outliers

Disadvantages:
- Ignores outer 50% of data
- Doesn't use all information
- Less precise than SD

When to use:
- Skewed distributions
- Data with outliers
- Paired with median
- Five-number summary

STANDARD DEVIATION (SD):

Definition: √[Σ(x - x̄)² / (n-1)]
Average distance from mean

Advantages:
- Uses ALL data values
- Mathematically precise
- Best for normal distributions
- Standard in statistics
- Used in inference

Disadvantages:
- Not resistant to outliers
- Hard to calculate by hand
- Less intuitive
- Assumes interval data

When to use:
- Symmetric distributions
- Normal distributions
- No major outliers
- Paired with mean
- Statistical inference

SUMMARY TABLE:
Resistant? Range: NO, IQR: YES, SD: NO
Uses all data? Range: NO, IQR: NO, SD: YES
Easy to calculate? Range: YES, IQR: MEDIUM, SD: NO
Best for skewed data? Range: NO, IQR: YES, SD: NO
Best for normal data? Range: NO, IQR: NO, SD: YES

PAIRING:
Mean + SD (symmetric data, no outliers)
Median + IQR (skewed data, outliers present)

Answer: Use range for quick estimates. Use IQR for skewed data or outliers (resistant). Use SD for normal distributions (uses all data, best statistical properties). Match with mean (SD) or median (IQR).`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: measuresSpread.id,
        front: 'What is the range?',
        back: 'Range = Maximum - Minimum. The span from lowest to highest value. Simple but sensitive to outliers. Only uses 2 data points.',
        hint: 'Max minus min',
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        front: 'What is the IQR (Interquartile Range)?',
        back: 'IQR = Q3 - Q1. The range of the middle 50% of data. Resistant to outliers. Shows spread between first and third quartiles.',
        hint: 'Q3 minus Q1, middle 50%',
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        front: 'What does standard deviation measure?',
        back: 'Standard deviation measures the typical (average) distance of data points from the mean. Larger SD = more spread out. Uses all data values.',
        hint: 'Average distance from mean',
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        front: 'What is variance?',
        back: 'Variance is the average of squared deviations from the mean: s² = Σ(x - x̄)²/(n-1). Standard deviation is the square root of variance.',
        hint: 'SD squared, s²',
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        front: 'Which measures of spread are resistant to outliers?',
        back: 'IQR is resistant (uses only middle 50%). Range and standard deviation are NOT resistant (affected by extreme values).',
        hint: 'IQR is resistant',
        isPremium: false
      },
      {
        topicId: measuresSpread.id,
        front: 'What summary statistics should you pair together?',
        back: 'For symmetric data: Mean + Standard Deviation. For skewed data or outliers: Median + IQR. Use resistant measures together.',
        hint: 'Match resistant with resistant',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: measures-of-spread (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Normal Distributions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: normalDistributions.id,
        question: 'What percentage of data in a normal distribution falls within:\na) 1 standard deviation of the mean?\nb) 2 standard deviations of the mean?\nc) 3 standard deviations of the mean?',
        solution: `The Empirical Rule (68-95-99.7 Rule):

Step 1: Within 1 standard deviation (μ ± 1σ)
Approximately 68% of data
From (mean - SD) to (mean + SD)
About 2/3 of all data

Step 2: Within 2 standard deviations (μ ± 2σ)
Approximately 95% of data
From (mean - 2SD) to (mean + 2SD)
Nearly all data (only 5% outside)

Step 3: Within 3 standard deviations (μ ± 3σ)
Approximately 99.7% of data
From (mean - 3SD) to (mean + 3SD)
Almost everything (only 0.3% outside)

Visual representation:
   |---68%---|
 |-----95%-----|
|-------99.7%-------|
    μ-3σ μ-2σ μ-1σ μ μ+1σ μ+2σ μ+3σ

Answer:
a) 68%
b) 95%
c) 99.7%`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        question: 'IQ scores are normally distributed with mean 100 and standard deviation 15. What IQ scores represent the middle 68% of the population?',
        solution: `Step 1: Identify given information
μ (mean) = 100
σ (standard deviation) = 15
Need: Middle 68%

Step 2: Apply empirical rule
68% of data falls within 1 standard deviation of the mean
Range: μ ± 1σ

Step 3: Calculate lower bound
Lower bound = μ - 1σ
            = 100 - 15
            = 85

Step 4: Calculate upper bound
Upper bound = μ + 1σ
            = 100 + 15
            = 115

Step 5: Interpret
68% of people have IQs between 85 and 115
About 16% have IQs below 85
About 16% have IQs above 115

Answer: IQ scores from 85 to 115 represent the middle 68% of the population.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        question: 'Heights of adult women are normally distributed with mean 64 inches and standard deviation 2.5 inches. A woman is 69 inches tall. What is her z-score, and what does it mean?',
        solution: `Step 1: Identify given information
μ = 64 inches
σ = 2.5 inches
x = 69 inches

Step 2: Calculate z-score
z = (x - μ) / σ
z = (69 - 64) / 2.5
z = 5 / 2.5
z = 2

Step 3: Interpret the z-score
z = 2 means:
- This woman's height is 2 standard deviations above the mean
- She is taller than the average woman
- Her height is 5 inches above the mean

Step 4: Find percentile using empirical rule
95% of women are within 2 SD of mean (between 59" and 69")
This means 2.5% are above 69" (upper tail)
She is taller than about 97.5% of women

Step 5: Context
A z-score of 2 is quite high (unusual)
Values beyond z = ±2 are sometimes considered "unusual"
She's quite tall compared to most women

Answer: z = 2. This woman's height is 2 standard deviations above the mean, making her taller than approximately 97.5% of women.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        question: 'SAT scores are normally distributed with mean 1050 and standard deviation 200. What percentage of students score above 1450? Use the empirical rule.',
        solution: `Step 1: Identify given information
μ = 1050
σ = 200
x = 1450
Find: P(X > 1450)

Step 2: Calculate z-score
z = (x - μ) / σ
z = (1450 - 1050) / 200
z = 400 / 200
z = 2

Step 3: Apply empirical rule
z = 2 means 1450 is 2 SD above mean
95% of data is within ±2 SD (between 650 and 1450)
This leaves 5% outside this range

Step 4: Find upper tail
5% total is split between two tails
Upper tail (above 1450): 5% / 2 = 2.5%

Step 5: Visualize
   |-------95%--------|
650      1050      1450
μ-2σ      μ        μ+2σ
      2.5%  |  2.5%

Answer: 2.5% of students score above 1450.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        question: 'Test scores are normally distributed with mean 72 and standard deviation 8. Two students scored 84 and 60 respectively. Compare their performances using z-scores. Which score is more unusual?',
        solution: `Step 1: Calculate z-score for student 1 (score = 84)
z₁ = (x - μ) / σ
z₁ = (84 - 72) / 8
z₁ = 12 / 8
z₁ = 1.5

Interpretation:
- 1.5 standard deviations ABOVE mean
- Positive z-score = above average
- Score is 12 points above mean

Step 2: Calculate z-score for student 2 (score = 60)
z₂ = (60 - 72) / 8
z₂ = -12 / 8
z₂ = -1.5

Interpretation:
- 1.5 standard deviations BELOW mean
- Negative z-score = below average
- Score is 12 points below mean

Step 3: Compare absolute values
|z₁| = 1.5
|z₂| = 1.5
Same distance from mean!

Step 4: Determine which is more unusual
Both scores are EQUALLY unusual
Both are exactly 1.5 SD from the mean
One is high, one is low
Both within the typical range (68% rule: within ±1 SD, 95% rule: within ±2 SD)

Step 5: Context using empirical rule
About 68% are within ±1 SD
About 95% are within ±2 SD
Both scores are between 1 and 2 SD away
Not extremely unusual, but somewhat uncommon
Roughly 13-14% of students score this far from mean in each direction

Step 6: Percentiles (approximate)
Student 1 (z = 1.5): ~93rd percentile (better than ~93%)
Student 2 (z = -1.5): ~7th percentile (better than only ~7%)

Answer: Both scores are equally unusual - both have |z| = 1.5, meaning they're the same distance from the mean (1.5 standard deviations). However, student 1 performed much better (top 7%) while student 2 performed poorly (bottom 7%).`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: normalDistributions.id,
        front: 'What is a normal distribution?',
        back: 'A symmetric, bell-shaped distribution. Mean = median = mode (center). Characterized by μ (mean) and σ (standard deviation). Many natural phenomena follow this.',
        hint: 'Bell curve, symmetric',
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        front: 'What is the Empirical Rule (68-95-99.7 rule)?',
        back: 'For normal distributions: 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD of the mean. Quick way to estimate percentages.',
        hint: '68-95-99.7 at 1, 2, 3 SD',
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        front: 'What is a z-score and how do you calculate it?',
        back: 'z = (x - μ)/σ. Measures how many standard deviations a value is from the mean. Positive z = above mean, negative z = below mean.',
        hint: 'Standardized score, (x - mean)/SD',
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        front: 'What does a z-score of 0 mean?',
        back: 'A z-score of 0 means the value equals the mean. It\'s right at the center of the distribution, not above or below average.',
        hint: 'At the mean',
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        front: 'What is the standard normal distribution?',
        back: 'A normal distribution with mean μ = 0 and standard deviation σ = 1. Created by converting raw scores to z-scores. Denoted as N(0,1).',
        hint: 'Mean 0, SD 1, z-scores',
        isPremium: false
      },
      {
        topicId: normalDistributions.id,
        front: 'How do you interpret a z-score of -2.5?',
        back: 'The value is 2.5 standard deviations BELOW the mean. Quite unusual (outside 95% range). In lower 1% approximately. Negative means below average.',
        hint: 'Below mean, quite unusual',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: normal-distributions (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 1 Complete! Exploring Data category finished (6/6 topics)');
  console.log('Progress: 6/34 AP Statistics topics complete (18%)');

  await prisma.$disconnect();
}

main();
