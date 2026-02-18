import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Problem Solving & Data Analysis with thorough content...\n')

  // ============================================================
  // TOPIC 1: Ratios, Proportions, and Percents
  // ============================================================
  const ratios = await prisma.topic.findUnique({
    where: { slug: 'sat-ratios-proportions-percents' }
  })

  if (ratios) {
    await prisma.topic.update({
      where: { id: ratios.id },
      data: {
        textContent: `# Ratios, Proportions, and Percents on the SAT

## Why This Topic Matters

Ratios, proportions, and percents make up roughly **15-20%** of SAT Math questions. They appear in both Calculator and No-Calculator sections.

---

## Ratios

A **ratio** compares two quantities. The ratio of $a$ to $b$ can be written as:
$$a:b \\quad \\text{or} \\quad \\frac{a}{b}$$

### Ratio Problems Strategy

If the ratio of cats to dogs is $3:5$ and there are 40 animals total:
- Total parts = $3 + 5 = 8$
- Each part = $\\frac{40}{8} = 5$
- Cats = $3 \\times 5 = 15$
- Dogs = $5 \\times 5 = 25$

### Part-to-Part vs. Part-to-Whole

- **Part-to-Part:** cats to dogs = $3:5$
- **Part-to-Whole:** cats to total = $3:8$ or $\\frac{3}{8}$

---

## Proportions

A **proportion** is an equation stating two ratios are equal:
$$\\frac{a}{b} = \\frac{c}{d}$$

**Cross multiplication:** $ad = bc$

### Setting Up Proportions

> Keep **consistent units** on corresponding sides.

**Correct:** $\\frac{\\text{miles}_1}{\\text{hours}_1} = \\frac{\\text{miles}_2}{\\text{hours}_2}$

**Wrong:** $\\frac{\\text{miles}_1}{\\text{hours}_1} = \\frac{\\text{hours}_2}{\\text{miles}_2}$

---

## Unit Conversions

Use **dimensional analysis** (multiply by conversion factors):

**Example:** Convert 45 mph to feet per second.
$$45 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{5280 \\text{ feet}}{1 \\text{ mile}} \\times \\frac{1 \\text{ hour}}{3600 \\text{ seconds}} = 66 \\frac{\\text{feet}}{\\text{second}}$$

---

## Percents

### Key Formulas

$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$

$$\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$$

### Percent Change

$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$

- **Percent increase:** New > Original → positive result
- **Percent decrease:** New < Original → negative result

### Multiplier Method (SAT Shortcut!)

Instead of calculating the change, use a **multiplier**:

| Situation | Multiplier |
|---|---|
| 20% increase | $\\times 1.20$ |
| 15% decrease | $\\times 0.85$ |
| 8% sales tax | $\\times 1.08$ |
| 30% discount | $\\times 0.70$ |

**Example:** A \\$80 item with 25% discount and 8% tax:
$$80 \\times 0.75 \\times 1.08 = \\$64.80$$

### Successive Percent Changes

**NEVER add percents!** Use multipliers instead.

A 20% increase followed by a 10% decrease:
$$\\times 1.20 \\times 0.90 = \\times 1.08$$
That's an 8% net increase (NOT 10%!).

---

## SAT Question Types

### Type 1: Direct Proportion
"If 3 widgets cost \\$7.50, how much do 8 widgets cost?"
$$\\frac{3}{7.50} = \\frac{8}{x} \\implies x = \\$20$$

### Type 2: Percent of a Number
"What is 35% of 240?" → $0.35 \\times 240 = 84$

### Type 3: Percent Change
"A price increased from \\$40 to \\$52. What is the percent increase?"
$$\\frac{52 - 40}{40} \\times 100 = 30\\%$$

### Type 4: Working Backward
"After a 20% discount, a jacket costs \\$56. What was the original price?"
$$\\text{Original} \\times 0.80 = 56 \\implies \\text{Original} = \\$70$$

### Type 5: Scale and Maps
"On a map where 1 inch = 25 miles, two cities are 3.5 inches apart. What is the actual distance?"
$$3.5 \\times 25 = 87.5 \\text{ miles}$$

---

## Common SAT Mistakes

1. **Adding successive percents** instead of using multipliers
2. **Using the wrong base** for percent change (always use the ORIGINAL value)
3. **Inconsistent units** in proportions
4. **Confusing "percent of" with "percent more than"** — 30% more than 100 is 130, not 30
5. **Forgetting to convert** between decimals, fractions, and percents

---

## Conversion Quick Reference

| Fraction | Decimal | Percent |
|---|---|---|
| $\\frac{1}{2}$ | 0.50 | 50% |
| $\\frac{1}{3}$ | 0.333... | 33.3% |
| $\\frac{1}{4}$ | 0.25 | 25% |
| $\\frac{1}{5}$ | 0.20 | 20% |
| $\\frac{1}{8}$ | 0.125 | 12.5% |
| $\\frac{3}{4}$ | 0.75 | 75% |
| $\\frac{2}{3}$ | 0.667... | 66.7% |
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: ratios.id,
          order: 10,
          difficulty: 'EASY',
          question: 'The ratio of boys to girls in a class is $3:5$. If there are 24 students in the class, how many girls are there?',
          solution: `**Step 1:** Total parts = $3 + 5 = 8$

**Step 2:** Each part = $\\frac{24}{8} = 3$ students

**Step 3:** Girls = $5 \\times 3 = 15$

**Check:** Boys = $3 \\times 3 = 9$. Total = $9 + 15 = 24$ ✓

**Answer:** 15 girls`
        },
        {
          topicId: ratios.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'A shirt originally priced at \\$45 is on sale for 20% off. Sales tax of 8% is applied after the discount. What is the total cost?',
          solution: `**Step 1:** Apply the 20% discount using a multiplier:
$$\\$45 \\times 0.80 = \\$36$$

**Step 2:** Apply 8% sales tax:
$$\\$36 \\times 1.08 = \\$38.88$$

**One-step method:** $\\$45 \\times 0.80 \\times 1.08 = \\$38.88$

**Answer:** \\$38.88

**SAT Tip:** Use multipliers for efficiency. Discount of 20% → multiply by 0.80. Tax of 8% → multiply by 1.08.`
        },
        {
          topicId: ratios.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A population increased from 12,000 to 15,600 over 5 years. What was the percent increase?',
          solution: `**Use the percent change formula:**
$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$

$$= \\frac{15{,}600 - 12{,}000}{12{,}000} \\times 100$$

$$= \\frac{3{,}600}{12{,}000} \\times 100$$

$$= 0.30 \\times 100 = 30\\%$$

**Answer:** 30% increase

**Key:** Always divide by the ORIGINAL value, not the new value.`
        },
        {
          topicId: ratios.id,
          order: 13,
          difficulty: 'HARD',
          question: 'After a 15% discount, a laptop costs \\$680. What was the original price?',
          solution: `**Step 1:** A 15% discount means the customer pays 85% of the original price.
$$\\text{Original} \\times 0.85 = 680$$

**Step 2:** Solve for the original price:
$$\\text{Original} = \\frac{680}{0.85} = \\$800$$

**Check:** $800 \\times 0.85 = 680$ ✓

**Answer:** \\$800

**Common mistake:** Don't calculate 15% of 680 and add it. That gives $680 + 102 = 782$, which is WRONG because the 15% should be based on the original price, not the sale price.`
        },
        {
          topicId: ratios.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'The value of an investment increases by 10% in the first year and decreases by 10% in the second year. If the initial investment was \\$1,000, what is the value after two years, and what is the net percent change?',
          solution: `**Step 1:** After year 1 (10% increase):
$$\\$1{,}000 \\times 1.10 = \\$1{,}100$$

**Step 2:** After year 2 (10% decrease):
$$\\$1{,}100 \\times 0.90 = \\$990$$

**Step 3:** Net percent change:
$$\\frac{990 - 1000}{1000} \\times 100 = -1\\%$$

**Answer:** \\$990 after two years; net change is a 1% DECREASE.

**Key Insight:** A 10% increase followed by a 10% decrease does NOT return to the original value! The multiplier is $1.10 \\times 0.90 = 0.99$, which is a 1% net decrease. This is because the 10% decrease is applied to a LARGER number.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: ratios.id,
          front: 'What is the multiplier for a 25% decrease?',
          back: '$\\times 0.75$. A 25% decrease means you keep 75% of the original, so multiply by $1 - 0.25 = 0.75$.',
          hint: 'Subtract the percent from 1'
        },
        {
          topicId: ratios.id,
          front: 'What is the formula for percent change?',
          back: '$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$. Always divide by the ORIGINAL value.',
          hint: 'The denominator is always the starting value'
        },
        {
          topicId: ratios.id,
          front: 'Why can\'t you add 20% increase + 10% decrease to get a 10% net increase?',
          back: 'Because the second percent change applies to a DIFFERENT base. Use multipliers: $1.20 \\times 0.90 = 1.08$, which is only an 8% net increase, not 10%.',
          hint: 'The percents are applied to different amounts'
        },
        {
          topicId: ratios.id,
          front: 'If the ratio of A to B is 4:7, what fraction of the total is A?',
          back: '$\\frac{4}{4+7} = \\frac{4}{11}$. To go from a part-to-part ratio to a part-to-whole fraction, put the part over the sum of all parts.',
          hint: 'Add the ratio numbers to get the total'
        },
        {
          topicId: ratios.id,
          front: 'How do you solve: "After a 30% discount, the price is \\$56. What was the original price?"',
          back: 'The customer pays 70% of the original: $\\text{Original} \\times 0.70 = 56$, so $\\text{Original} = \\frac{56}{0.70} = \\$80$. Divide by the remaining percent (not by 0.30).',
          hint: 'Set up: Original × (1 - discount rate) = sale price'
        },
        {
          topicId: ratios.id,
          front: 'What is dimensional analysis?',
          back: 'A method for unit conversion using conversion factors that cancel units. Multiply by fractions where the unwanted unit is in the denominator: $45 \\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ hr}}{3600 \\text{ s}} = 66 \\frac{\\text{ft}}{\\text{s}}$',
          hint: 'Set up fractions so units cancel like in a chain'
        },
        {
          topicId: ratios.id,
          front: 'What does "30% more than $x$" mean as an expression?',
          back: '$1.30x$ or $x + 0.30x$. It means the original value PLUS 30% of the original value. "30% OF $x$" is just $0.30x$ (they are different!).',
          hint: '"More than" means add to the original'
        }
      ]
    })

    console.log('✓ sat-ratios-proportions-percents expanded')
  }

  // ============================================================
  // TOPIC 2: Statistics and Data Interpretation
  // ============================================================
  const statistics = await prisma.topic.findUnique({
    where: { slug: 'sat-statistics-data-interpretation' }
  })

  if (statistics) {
    await prisma.topic.update({
      where: { id: statistics.id },
      data: {
        textContent: `# Statistics and Data Interpretation on the SAT

## Central Tendency: Mean, Median, Mode

### Mean (Average)
$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

**Key property:** The mean is sensitive to outliers.

### Median
The **middle value** when data is arranged in order.
- Odd number of values: the middle one
- Even number of values: average of the two middle ones

**Key property:** The median is resistant to outliers.

### Mode
The most **frequently occurring** value. A data set can have no mode, one mode, or multiple modes.

---

## When to Use Each Measure

| Situation | Best Measure | Why |
|---|---|---|
| Symmetric data, no outliers | Mean | Representative of all values |
| Skewed data or outliers | Median | Not pulled by extremes |
| Categorical data | Mode | Most common category |

**SAT Tip:** The SAT often asks "which measure best represents the data" — choose **median** when there are outliers.

---

## Spread: Range, Standard Deviation, IQR

### Range
$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

### Interquartile Range (IQR)
$$\\text{IQR} = Q_3 - Q_1$$
Measures the spread of the middle 50% of data.

### Standard Deviation
Measures how spread out data is from the mean.
- **Small SD:** Data is clustered near the mean
- **Large SD:** Data is spread out from the mean

You do NOT need to calculate standard deviation on the SAT — just understand what it means!

---

## Box Plots (Box-and-Whisker)

A box plot displays the **5-number summary:**
1. Minimum
2. $Q_1$ (25th percentile)
3. Median (50th percentile)
4. $Q_3$ (75th percentile)
5. Maximum

The **box** spans from $Q_1$ to $Q_3$; the line inside is the median.

---

## Reading Tables and Graphs

### Histograms
- $x$-axis: intervals (bins)
- $y$-axis: frequency
- To find total: add all bar heights
- To find median: count from left until you reach the middle value

### Scatterplots
- Look for positive, negative, or no association
- A **line of best fit** (regression line) approximates the trend
- **Correlation coefficient** $r$: close to +1 (strong positive), close to -1 (strong negative), close to 0 (no correlation)

### Dot Plots
- Each dot = one data point
- Easy to find mode, range, and count

---

## Margin of Error and Confidence Intervals

$$\\text{Confidence Interval} = \\text{Estimate} \\pm \\text{Margin of Error}$$

**Example:** A survey estimates 45% support with a margin of error of 3%. This means the true value is likely between 42% and 48%.

**To decrease margin of error:** Increase sample size.

---

## SAT Question Types

### Type 1: Calculate Mean/Median
"Find the mean of 12, 15, 18, 18, 22" → $\\frac{85}{5} = 17$

### Type 2: Effect of Adding/Removing Values
"If value 100 is added to the set above, how does it affect the mean vs. median?"
Mean changes significantly (sensitive to outliers), median barely changes.

### Type 3: Interpret Graphs
Read values from bar charts, histograms, line graphs. Pay attention to axis labels and scales!

### Type 4: Compare Distributions
"Set A has mean 50 and SD 5. Set B has mean 50 and SD 10. Which is more spread out?"
Set B (larger SD).

---

## Common SAT Mistakes

1. **Confusing mean and median** — the SAT specifically tests whether you know which is affected by outliers
2. **Misreading graph scales** — check if axes start at 0
3. **Confusing correlation with causation** — correlation does NOT prove one variable causes another
4. **Forgetting to order data** before finding the median
5. **Misinterpreting standard deviation** — it's about spread, not about the mean itself
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: statistics.id,
          order: 10,
          difficulty: 'EASY',
          question: 'The ages of 5 students are: 14, 16, 15, 14, 17. What is the median age?',
          solution: `**Step 1:** Arrange in order: 14, 14, 15, 16, 17

**Step 2:** Find the middle value. With 5 values, the median is the 3rd value.

**Answer:** Median = 15

**Note:** Don't forget to sort first! The original order doesn't matter for median.`
        },
        {
          topicId: statistics.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'A data set has a mean of 72 and contains 8 values. If a 9th value of 90 is added, what is the new mean?',
          solution: `**Step 1:** Find the current sum.
$$\\text{Mean} = \\frac{\\text{Sum}}{n} \\implies \\text{Sum} = \\text{Mean} \\times n = 72 \\times 8 = 576$$

**Step 2:** Add the new value.
$$\\text{New Sum} = 576 + 90 = 666$$

**Step 3:** Calculate the new mean.
$$\\text{New Mean} = \\frac{666}{9} = 74$$

**Answer:** New mean = 74

**SAT Tip:** To find the sum from a mean, multiply: Sum = Mean × Count.`
        },
        {
          topicId: statistics.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A class of 20 students has a mean test score of 78. A class of 30 students has a mean test score of 84. What is the combined mean for all 50 students?',
          solution: `**Step 1:** Find each class's total points.
Class 1: $78 \\times 20 = 1{,}560$
Class 2: $84 \\times 30 = 2{,}520$

**Step 2:** Find the combined mean.
$$\\text{Combined Mean} = \\frac{1{,}560 + 2{,}520}{20 + 30} = \\frac{4{,}080}{50} = 81.6$$

**Answer:** 81.6

**Key:** You cannot just average the two means (that would give 81). The combined mean is a **weighted average** because the groups have different sizes.`
        },
        {
          topicId: statistics.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A survey of 500 residents found that 62% support a new park, with a margin of error of 4%. Which of the following is a valid conclusion?\n\nA) Exactly 62% of all residents support the park.\nB) Between 58% and 66% of all residents likely support the park.\nC) At least 58% of all residents definitely support the park.\nD) The survey is unreliable because of the margin of error.',
          solution: `**Analysis of each option:**

**A)** "Exactly 62%" — No. The 62% is an estimate, not an exact figure. ✗

**B)** "Between 58% and 66% likely support" — Yes! The confidence interval is $62\\% \\pm 4\\% = [58\\%, 66\\%]$. "Likely" is the right word because it's a probability statement. ✓

**C)** "At least 58% definitely" — No. "Definitely" is too strong. There's a small chance the true value is outside the interval. ✗

**D)** "Survey is unreliable" — No. All surveys have margins of error; this doesn't make them unreliable. ✗

**Answer:** B

**SAT Tip:** Confidence intervals give a RANGE of plausible values, not a guarantee. Watch for words like "definitely" or "exactly" — they're usually wrong.`
        },
        {
          topicId: statistics.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Two data sets each have 10 values. Set A: {2, 3, 4, 5, 5, 5, 6, 7, 8, 15}. Set B: {4, 4, 5, 5, 5, 5, 6, 6, 7, 8}. Which set has the greater standard deviation, and which measure of center (mean or median) would differ more between the sets?',
          solution: `**Step 1:** Compare the spreads.

**Set A** has values ranging from 2 to 15, with the outlier 15 pulling the data wide.
**Set B** has values from 4 to 8, tightly clustered.

**Set A has the greater standard deviation** because it is more spread out, especially due to the outlier 15.

**Step 2:** Compare the means.
Set A mean: $\\frac{2+3+4+5+5+5+6+7+8+15}{10} = \\frac{60}{10} = 6.0$
Set B mean: $\\frac{4+4+5+5+5+5+6+6+7+8}{10} = \\frac{55}{10} = 5.5$

**Step 3:** Compare the medians.
Set A median: average of 5th and 6th values = $\\frac{5+5}{2} = 5$
Set B median: average of 5th and 6th values = $\\frac{5+5}{2} = 5$

**Step 4:** The means differ by 0.5, but the medians are identical. So the **mean** differs more between the sets.

**Answer:** Set A has the greater standard deviation. The mean differs more between the sets because it is affected by the outlier (15) in Set A, while the median is resistant to outliers.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: statistics.id,
          front: 'Which measure of center is most affected by outliers: mean, median, or mode?',
          back: 'The **mean** is most affected by outliers. The median and mode are resistant to outliers.',
          hint: 'One of these measures uses every value in its calculation'
        },
        {
          topicId: statistics.id,
          front: 'What does a large standard deviation tell you about a data set?',
          back: 'The data values are widely spread out from the mean. A small standard deviation means the data is clustered close to the mean.',
          hint: 'Think about how far values are from the center'
        },
        {
          topicId: statistics.id,
          front: 'How do you find the median when there are an even number of values?',
          back: 'Average the two middle values. For example, in {3, 5, 7, 9}, the median is $\\frac{5+7}{2} = 6$.',
          hint: 'There are two values in the middle position'
        },
        {
          topicId: statistics.id,
          front: 'What is the interquartile range (IQR) and what does it measure?',
          back: '$\\text{IQR} = Q_3 - Q_1$. It measures the spread of the middle 50% of the data. It is not affected by outliers.',
          hint: 'It uses the first and third quartiles'
        },
        {
          topicId: statistics.id,
          front: 'Does correlation imply causation?',
          back: 'No! Correlation means two variables are related, but it does NOT mean one causes the other. There could be a confounding variable or coincidence.',
          hint: 'This is one of the most important statistical concepts on the SAT'
        },
        {
          topicId: statistics.id,
          front: 'How can you decrease the margin of error in a survey?',
          back: 'Increase the sample size. A larger sample gives more precise estimates and a smaller margin of error.',
          hint: 'More data = more precision'
        },
        {
          topicId: statistics.id,
          front: 'How do you find the sum of values if you know the mean and the count?',
          back: '$\\text{Sum} = \\text{Mean} \\times \\text{Count}$. Example: If the mean of 8 values is 72, the sum is $72 \\times 8 = 576$.',
          hint: 'Rearrange the mean formula'
        }
      ]
    })

    console.log('✓ sat-statistics-data-interpretation expanded')
  }

  // ============================================================
  // TOPIC 3: Probability and Two-Way Tables
  // ============================================================
  const probability = await prisma.topic.findUnique({
    where: { slug: 'sat-probability-two-way-tables' }
  })

  if (probability) {
    await prisma.topic.update({
      where: { id: probability.id },
      data: {
        textContent: `# Probability and Two-Way Tables on the SAT

## Basic Probability

$$P(\\text{event}) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$$

- Probability is always between 0 and 1 (or 0% and 100%)
- $P = 0$: impossible
- $P = 1$: certain

---

## Two-Way Tables (Contingency Tables)

A two-way table organizes data by two categorical variables.

**Example:**

|  | Likes Pizza | Doesn't Like Pizza | **Total** |
|---|---|---|---|
| **Students** | 45 | 15 | **60** |
| **Teachers** | 20 | 10 | **30** |
| **Total** | **65** | **25** | **90** |

### Reading the Table

- **Row totals** are on the right
- **Column totals** are on the bottom
- **Grand total** is bottom-right

---

## Types of Probability from Two-Way Tables

### Joint Probability
The probability of two specific categories together.

$P(\\text{Student AND Likes Pizza}) = \\frac{45}{90} = \\frac{1}{2}$

The denominator is the **grand total**.

### Marginal Probability
The probability of just one category.

$P(\\text{Student}) = \\frac{60}{90} = \\frac{2}{3}$

$P(\\text{Likes Pizza}) = \\frac{65}{90} = \\frac{13}{18}$

### Conditional Probability
The probability of one event GIVEN another has occurred.

$P(\\text{Likes Pizza} \\mid \\text{Student}) = \\frac{45}{60} = \\frac{3}{4}$

> **Key:** The denominator is the **subtotal of the given condition**, not the grand total!

$P(\\text{Student} \\mid \\text{Likes Pizza}) = \\frac{45}{65} = \\frac{9}{13}$

---

## Conditional Probability Formula

$$P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

The SAT usually tests this with two-way tables rather than the formula directly.

---

## Complement Rule

$$P(\\text{NOT } A) = 1 - P(A)$$

If the probability of rain is 0.3, the probability of no rain is $1 - 0.3 = 0.7$.

---

## SAT Question Types

### Type 1: "What is the probability that a randomly selected person...?"
- Identify the numerator (favorable outcomes) and denominator (total)
- Watch for whether it's conditional ("...given that they are a student")

### Type 2: "What fraction of [group] are [category]?"
This is conditional probability. The denominator is the SIZE of the given group.

### Type 3: "Which group has a higher proportion of...?"
Compare conditional probabilities between groups.

### Type 4: Complete a Two-Way Table
Fill in missing values using row/column totals. Every row and column must add up.

---

## Common SAT Mistakes

1. **Using the wrong denominator** — the #1 mistake! For conditional probability, use the row/column total, NOT the grand total
2. **Confusing "and" with "given"** — $P(A \\text{ and } B) \\neq P(A \\mid B)$
3. **Misreading which row/column** represents which category
4. **Not simplifying fractions** when answer choices are simplified
5. **Forgetting the complement** — sometimes it's easier to calculate $1 - P(\\text{not happening})$
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: probability.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of randomly selecting a blue marble?',
          solution: `**Step 1:** Count total marbles: $5 + 3 + 2 = 10$

**Step 2:** Apply the probability formula:
$$P(\\text{blue}) = \\frac{\\text{blue marbles}}{\\text{total marbles}} = \\frac{3}{10}$$

**Answer:** $\\frac{3}{10}$ or $0.3$ or $30\\%$`
        },
        {
          topicId: probability.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Use the table below:\n\n| | Passed | Failed | Total |\n|---|---|---|---|\n| Studied | 42 | 8 | 50 |\n| Did Not Study | 18 | 32 | 50 |\n| Total | 60 | 40 | 100 |\n\nWhat is the probability that a student passed, given that they studied?',
          solution: `**Key:** This is a **conditional probability** question because of the phrase "given that they studied."

**Step 1:** Identify the condition: "given that they studied" means we only look at the "Studied" row.

**Step 2:** The denominator is the total who studied: 50
The numerator is those who studied AND passed: 42

$$P(\\text{Passed} \\mid \\text{Studied}) = \\frac{42}{50} = \\frac{21}{25} = 0.84$$

**Answer:** $\\frac{21}{25}$ or $84\\%$

**Common mistake:** Using 100 as the denominator (that would give the joint probability, not the conditional probability).`
        },
        {
          topicId: probability.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Using the same table above, what fraction of students who passed had studied?',
          solution: `**Key:** This question asks "of those who passed" — so the condition is passing.

**Step 1:** The denominator is the total who passed: 60
The numerator is those who passed AND studied: 42

$$P(\\text{Studied} \\mid \\text{Passed}) = \\frac{42}{60} = \\frac{7}{10}$$

**Answer:** $\\frac{7}{10}$

**Important:** Notice this is DIFFERENT from the previous question! $P(\\text{Passed} | \\text{Studied}) = \\frac{42}{50}$ but $P(\\text{Studied} | \\text{Passed}) = \\frac{42}{60}$. The order matters in conditional probability!`
        },
        {
          topicId: probability.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A survey asked 200 people about their exercise habits and diet:\n\n| | Exercises Regularly | Does Not Exercise | Total |\n|---|---|---|---|\n| Healthy Diet | 65 | ? | 100 |\n| Unhealthy Diet | ? | 60 | ? |\n| Total | ? | ? | 200 |\n\nComplete the table and find the probability that a randomly selected person exercises regularly OR has a healthy diet.',
          solution: `**Step 1:** Fill in the table.

Healthy Diet row: Does Not Exercise = $100 - 65 = 35$
Unhealthy Diet total = $200 - 100 = 100$
Unhealthy Diet, Exercises = $100 - 60 = 40$
Exercises total = $65 + 40 = 105$
Does Not Exercise total = $35 + 60 = 95$

**Completed table:**
| | Exercises | Doesn't | Total |
|---|---|---|---|
| Healthy | 65 | 35 | 100 |
| Unhealthy | 40 | 60 | 100 |
| Total | 105 | 95 | 200 |

**Step 2:** Find $P(\\text{Exercises OR Healthy Diet})$

Use the inclusion-exclusion principle:
$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$
$$= \\frac{105}{200} + \\frac{100}{200} - \\frac{65}{200} = \\frac{140}{200} = \\frac{7}{10}$$

**Answer:** $\\frac{7}{10}$ or $70\\%$`
        },
        {
          topicId: probability.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'In a class, the probability of a student playing basketball is 0.4, the probability of playing soccer is 0.3, and the probability of playing both is 0.1. What is the probability that a randomly chosen student plays basketball but NOT soccer?',
          solution: `**Step 1:** Use the relationship:
$$P(\\text{Basketball only}) = P(\\text{Basketball}) - P(\\text{Basketball AND Soccer})$$
$$= 0.4 - 0.1 = 0.3$$

**Step 2:** Verify with a Venn diagram mental model:
- Basketball only: 0.3
- Soccer only: $0.3 - 0.1 = 0.2$
- Both: 0.1
- Neither: $1 - (0.3 + 0.2 + 0.1) = 0.4$

All probabilities sum to 1: $0.3 + 0.2 + 0.1 + 0.4 = 1$ ✓

**Answer:** $0.3$ or $30\\%$

**SAT Tip:** "A but NOT B" means subtract the overlap from A's probability.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: probability.id,
          front: 'In a conditional probability question, what is the denominator?',
          back: 'The total of the GIVEN group, not the grand total. For $P(A \\mid B)$, the denominator is the total count of $B$.',
          hint: '"Given that" tells you which subtotal to use'
        },
        {
          topicId: probability.id,
          front: 'What is the complement rule?',
          back: '$P(\\text{NOT } A) = 1 - P(A)$. The probability of something NOT happening equals 1 minus the probability of it happening.',
          hint: 'All probabilities must add up to 1'
        },
        {
          topicId: probability.id,
          front: 'Is $P(A|B)$ the same as $P(B|A)$?',
          back: 'NO! They are different. $P(\\text{Passed}|\\text{Studied})$ asks "of those who studied, how many passed?" while $P(\\text{Studied}|\\text{Passed})$ asks "of those who passed, how many had studied?" Different denominators!',
          hint: 'The denominators are different'
        },
        {
          topicId: probability.id,
          front: 'What is the inclusion-exclusion principle for probability?',
          back: '$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. You subtract the overlap to avoid counting it twice.',
          hint: 'You need to avoid double-counting the intersection'
        },
        {
          topicId: probability.id,
          front: 'How do you complete a missing cell in a two-way table?',
          back: 'Each row and column must add up to its total. Use subtraction: Missing cell = Row total − Sum of known cells in that row (or Column total − Sum of known cells in that column).',
          hint: 'Rows and columns must add to their margins'
        },
        {
          topicId: probability.id,
          front: 'What is the difference between joint probability and marginal probability?',
          back: '**Joint:** Probability of TWO conditions together, e.g., $P(\\text{Student AND Pizza})$ — denominator is grand total. **Marginal:** Probability of ONE condition, e.g., $P(\\text{Student})$ — also uses grand total but only counts one category.',
          hint: 'Joint involves the intersection; marginal involves a single row/column total'
        },
        {
          topicId: probability.id,
          front: 'If a probability equals 0, what does that mean? What about probability = 1?',
          back: '$P = 0$ means the event is IMPOSSIBLE (can never happen). $P = 1$ means the event is CERTAIN (always happens). All probabilities fall between 0 and 1.',
          hint: 'Think of the extremes of the probability scale'
        }
      ]
    })

    console.log('✓ sat-probability-two-way-tables expanded')
  }

  // ============================================================
  // TOPIC 4: Scatterplots and Line of Best Fit
  // ============================================================
  const scatterplots = await prisma.topic.findUnique({
    where: { slug: 'sat-scatterplots-line-fit' }
  })

  if (scatterplots) {
    await prisma.topic.update({
      where: { id: scatterplots.id },
      data: {
        textContent: `# Scatterplots and Line of Best Fit on the SAT

## What Is a Scatterplot?

A **scatterplot** displays the relationship between two quantitative variables as points on a coordinate plane.
- $x$-axis: independent (explanatory) variable
- $y$-axis: dependent (response) variable

---

## Types of Association

| Pattern | Description | Example |
|---|---|---|
| **Positive** | As $x$ increases, $y$ increases | Height vs. weight |
| **Negative** | As $x$ increases, $y$ decreases | Temperature vs. hot chocolate sales |
| **None** | No clear pattern | Shoe size vs. GPA |

### Strength of Association
- **Strong:** Points cluster tightly around a line/curve
- **Weak:** Points are widely scattered
- **Nonlinear:** Points follow a curve, not a line

---

## Line of Best Fit (Regression Line)

The line of best fit is the straight line that best approximates the data.

$$y = mx + b$$

- **$m$ (slope):** The predicted change in $y$ for each 1-unit increase in $x$
- **$b$ ($y$-intercept):** The predicted value of $y$ when $x = 0$

### Interpreting Slope in Context

> "For each additional [unit of $x$], [the $y$ variable] is predicted to [increase/decrease] by [slope] [units of $y$]."

**Example:** If $y = 2.5x + 10$ models the relationship between hours studied ($x$) and test score ($y$):
"For each additional hour of study, the test score is predicted to increase by 2.5 points."

### Interpreting the $y$-Intercept

> "When [$x$ variable] is 0, the predicted [$y$ variable] is [$b$]."

**Note:** The $y$-intercept may not always make practical sense (e.g., "0 hours of study" may be unrealistic).

---

## Residuals

$$\\text{Residual} = \\text{Actual value} - \\text{Predicted value}$$

- **Positive residual:** Actual > Predicted (point is ABOVE the line)
- **Negative residual:** Actual < Predicted (point is BELOW the line)
- **Zero residual:** Point is exactly ON the line

### Residual Plots
A good model has residuals that are randomly scattered around zero. A pattern in residuals suggests the model is not a good fit.

---

## Correlation Coefficient ($r$)

| $r$ value | Meaning |
|---|---|
| $r = 1$ | Perfect positive linear relationship |
| $r = -1$ | Perfect negative linear relationship |
| $r = 0$ | No linear relationship |
| $|r|$ close to 1 | Strong linear relationship |
| $|r|$ close to 0 | Weak or no linear relationship |

**Remember:**
- $r$ only measures LINEAR relationships
- $r$ does NOT indicate causation
- Outliers can significantly affect $r$

---

## Making Predictions

### Interpolation vs. Extrapolation
- **Interpolation:** Predicting within the range of data → generally reliable
- **Extrapolation:** Predicting beyond the data range → less reliable (may be inaccurate)

---

## SAT Question Types

### Type 1: Describe the Association
"Which best describes the relationship?" → positive/negative, strong/weak, linear/nonlinear

### Type 2: Interpret Slope or $y$-Intercept
"In context, what does the slope represent?" → rate of change per unit

### Type 3: Find a Residual
Given a point and the line equation, calculate residual = actual − predicted.

### Type 4: Make a Prediction
Use the line equation to predict $y$ for a given $x$ value.

### Type 5: Identify an Outlier
The point farthest from the line of best fit (largest residual).

---

## Common SAT Mistakes

1. **Claiming causation** from a scatterplot — scatterplots show ASSOCIATION, not causation
2. **Extrapolating too far** beyond the data range
3. **Misinterpreting slope** — it's per unit change, not total change
4. **Confusing positive and negative residuals** — positive = above the line
5. **Ignoring the context** — always interpret slope and intercept in terms of the actual variables
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: scatterplots.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A scatterplot shows the relationship between hours of sleep ($x$) and alertness score ($y$). The points trend upward from left to right and cluster closely around a line. How would you describe this association?',
          solution: `**Direction:** Points trend upward → **positive** association

**Strength:** Points cluster closely → **strong** association

**Form:** Follows a line → **linear** association

**Answer:** Strong, positive, linear association.

In context: As hours of sleep increase, alertness scores tend to increase.`
        },
        {
          topicId: scatterplots.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'The line of best fit for a scatterplot relating years of experience ($x$) to salary in thousands ($y$) is $y = 3.2x + 32$. Interpret the slope in context.',
          solution: `**The slope is 3.2.**

**Interpretation:** For each additional year of experience, the predicted salary increases by \\$3,200 (3.2 thousand dollars).

**Template:** "For each 1-unit increase in [x-variable], the [y-variable] is predicted to [increase/decrease] by [slope] [units]."

**Note:** The $y$-intercept of 32 means a person with 0 years of experience has a predicted salary of \\$32,000.`
        },
        {
          topicId: scatterplots.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'The line of best fit is $y = -0.5x + 100$. A data point has coordinates $(30, 88)$. What is the residual for this point?',
          solution: `**Step 1:** Find the predicted value at $x = 30$:
$$\\hat{y} = -0.5(30) + 100 = -15 + 100 = 85$$

**Step 2:** Calculate the residual:
$$\\text{Residual} = \\text{Actual} - \\text{Predicted} = 88 - 85 = 3$$

**Answer:** The residual is $+3$.

**Interpretation:** The actual value (88) is 3 units ABOVE the predicted value (85), so this point lies above the line of best fit.`
        },
        {
          topicId: scatterplots.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A researcher collects data and finds a correlation coefficient of $r = 0.85$ between ice cream sales and drowning incidents. Can the researcher conclude that eating ice cream causes drowning?',
          solution: `**Answer:** No!

**Explanation:** A strong correlation ($r = 0.85$) shows that ice cream sales and drowning incidents are **associated** — they tend to increase together. However, correlation does NOT prove causation.

**What's really happening:** There is a **confounding variable** — hot weather. When it's hot:
- More people buy ice cream
- More people go swimming → more drownings

The heat is the common cause. Ice cream doesn't cause drowning.

**SAT Rule:** Only a **randomized controlled experiment** can establish causation. Observational studies can only show association.`
        },
        {
          topicId: scatterplots.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A line of best fit is $y = 1.8x + 22$ for data where $x$ ranges from $5$ to $50$. Which of the following predictions is most reliable?\n\nA) Predicting $y$ when $x = 30$\nB) Predicting $y$ when $x = 80$\nC) Predicting $y$ when $x = 100$\nD) Predicting $y$ when $x = -5$',
          solution: `**Key concept:** Interpolation vs. Extrapolation

The data ranges from $x = 5$ to $x = 50$.

**A) $x = 30$:** This is WITHIN the data range → **interpolation** → most reliable ✓
**B) $x = 80$:** Beyond the range → extrapolation → less reliable ✗
**C) $x = 100$:** Far beyond the range → extrapolation → unreliable ✗
**D) $x = -5$:** Below the range → extrapolation → unreliable ✗

**Answer:** A

**SAT Tip:** Predictions within the data range (interpolation) are more trustworthy than predictions outside it (extrapolation). The farther outside the range, the less reliable the prediction.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: scatterplots.id,
          front: 'What does the slope of a line of best fit represent?',
          back: 'The predicted change in the $y$-variable for each 1-unit increase in the $x$-variable. Always interpret it in the context of the problem.',
          hint: 'Think about rate of change'
        },
        {
          topicId: scatterplots.id,
          front: 'What is a residual and how do you calculate it?',
          back: 'Residual = Actual value − Predicted value. Positive residual means the point is ABOVE the line; negative means BELOW the line.',
          hint: 'Subtract what the model predicted from what actually happened'
        },
        {
          topicId: scatterplots.id,
          front: 'What is the difference between interpolation and extrapolation?',
          back: '**Interpolation:** predicting within the data range — reliable. **Extrapolation:** predicting outside the data range — less reliable, especially far from the data.',
          hint: 'One is "between" existing data, the other is "beyond" it'
        },
        {
          topicId: scatterplots.id,
          front: 'Can a strong correlation ($r$ close to 1 or -1) prove causation?',
          back: 'No! Correlation only shows ASSOCIATION. Causation requires a randomized controlled experiment. There may be confounding variables explaining the relationship.',
          hint: 'This is a famous principle in statistics'
        },
        {
          topicId: scatterplots.id,
          front: 'What does $r = -0.92$ tell you about a scatterplot?',
          back: 'There is a strong NEGATIVE linear association. As $x$ increases, $y$ tends to decrease. The points cluster closely around a downward-sloping line.',
          hint: 'The sign tells direction, the magnitude tells strength'
        },
        {
          topicId: scatterplots.id,
          front: 'What does a pattern in a residual plot indicate?',
          back: 'A pattern (like a curve) in the residual plot suggests the linear model is NOT a good fit for the data. A good model produces randomly scattered residuals.',
          hint: 'Residuals should look random if the model fits well'
        },
        {
          topicId: scatterplots.id,
          front: 'What is an outlier in a scatterplot?',
          back: 'A point that falls far from the general pattern of the data (far from the line of best fit). It has a large residual. Outliers can significantly affect the correlation coefficient and the line of best fit.',
          hint: 'A point that does not fit the trend'
        }
      ]
    })

    console.log('✓ sat-scatterplots-line-fit expanded')
  }

  // ============================================================
  // TOPIC 5: Data and Statistics (if separate slug exists)
  // ============================================================
  const dataStats = await prisma.topic.findUnique({
    where: { slug: 'sat-data-statistics' }
  })

  if (dataStats) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dataStats.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A histogram shows the following frequencies for test scores:\n60-69: 3 students\n70-79: 8 students\n80-89: 12 students\n90-100: 7 students\n\nHow many students scored below 80?',
          solution: `**Step 1:** Add the frequencies for intervals below 80:
$$3 + 8 = 11$$

**Answer:** 11 students scored below 80.

**SAT Tip:** On histograms, "below 80" includes the 60-69 and 70-79 intervals. Be careful about whether the boundary value is included.`
        },
        {
          topicId: dataStats.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'The mean of 6 numbers is 15. When a 7th number is added, the mean becomes 17. What is the 7th number?',
          solution: `**Step 1:** Find the original sum: $6 \\times 15 = 90$

**Step 2:** Find the new sum: $7 \\times 17 = 119$

**Step 3:** The 7th number = $119 - 90 = 29$

**Check:** $(90 + 29) \\div 7 = 119 \\div 7 = 17$ ✓

**Answer:** The 7th number is 29.`
        },
        {
          topicId: dataStats.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'In a box plot, $Q_1 = 30$, $\\text{Median} = 45$, $Q_3 = 60$, $\\text{Min} = 10$, $\\text{Max} = 85$. What is the IQR, and which single value, if added, would most change the mean but least change the median?',
          solution: `**IQR:** $Q_3 - Q_1 = 60 - 30 = 30$

**Effect of adding an extreme value:**
Adding a very large value (e.g., 200) would:
- **Mean:** Increase significantly (the mean is sensitive to extremes)
- **Median:** Change very little (the median is resistant to outliers — it only depends on the middle value)

**Answer:** IQR = 30. An extreme outlier (very large or very small) would most change the mean but least change the median.`
        },
        {
          topicId: dataStats.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A researcher wants to determine if a new teaching method improves test scores. She randomly assigns 50 students to use the new method and 50 to use the traditional method. The new method group has a mean score of 82, while the traditional group has a mean of 78. Can she conclude the new method CAUSES higher scores?',
          solution: `**Answer:** YES — with appropriate caveats.

**Why:** This is a **randomized controlled experiment**, not just an observational study.

**Key features that allow a causal conclusion:**
1. **Random assignment** to treatment groups — this controls for confounding variables
2. **Control group** (traditional method) for comparison
3. **Same number** in each group

**However**, she should also consider:
- **Statistical significance** — is the 4-point difference large enough to not be due to chance? (She'd need a p-value or confidence interval.)
- **Practical significance** — is a 4-point difference meaningful in practice?

**SAT Rule:**
- **Randomized experiment** → CAN conclude causation
- **Observational study** → can only conclude ASSOCIATION`
        },
        {
          topicId: dataStats.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Set A has values {10, 12, 14, 16, 18} and Set B has values {12, 13, 14, 15, 16}. Without calculating, which set has the larger standard deviation? Explain.',
          solution: `**Set A** has the larger standard deviation.

**Reasoning:** Both sets have the same mean: 
- Set A: $\\frac{10+12+14+16+18}{5} = 14$
- Set B: $\\frac{12+13+14+15+16}{5} = 14$

**Set A** has values that are more spread out from 14 (ranging from 10 to 18, each value 2 units apart from the next).

**Set B** has values that are more tightly clustered around 14 (ranging from 12 to 16, each value only 1 unit apart).

Since standard deviation measures how far values are from the mean on average, **Set A has the larger standard deviation**.

**Answer:** Set A

**SAT Tip:** You don't need to calculate SD on the SAT — just understand that wider spread = larger SD.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: dataStats.id,
          front: 'Can you conclude causation from an observational study?',
          back: 'No! Observational studies can only show ASSOCIATION. Only randomized controlled experiments can establish causation.',
          hint: 'Think about whether participants were randomly assigned to groups'
        },
        {
          topicId: dataStats.id,
          front: 'What makes a sample representative of a population?',
          back: 'The sample must be RANDOMLY selected from the population. Every member of the population should have an equal chance of being selected. Convenience samples, voluntary responses, or biased selections are not representative.',
          hint: 'Randomness is key'
        },
        {
          topicId: dataStats.id,
          front: 'What is sampling bias?',
          back: 'When the sample does not accurately represent the population due to the selection method. Examples: surveying only gym members about exercise habits, or using an online poll (only reaches internet users).',
          hint: 'Some groups are over- or under-represented'
        },
        {
          topicId: dataStats.id,
          front: 'How do you read a histogram?',
          back: 'Each bar represents an interval. The HEIGHT of the bar is the FREQUENCY (count). The WIDTH represents the range of values. Total = sum of all bar heights. Median: count from left until you reach the middle position.',
          hint: 'Height = how many, width = the range of the bin'
        },
        {
          topicId: dataStats.id,
          front: 'In a box plot, what does the box represent?',
          back: 'The box spans from $Q_1$ to $Q_3$ and contains the middle 50% of the data. The line inside the box is the median. The whiskers extend to the minimum and maximum (or to the last non-outlier values).',
          hint: 'Think quartiles'
        },
        {
          topicId: dataStats.id,
          front: 'What is the difference between a population parameter and a sample statistic?',
          back: 'A **parameter** describes the entire population (usually unknown). A **statistic** describes a sample and is used to ESTIMATE the parameter. Example: The sample mean $\\bar{x}$ estimates the population mean $\\mu$.',
          hint: 'Population = parameter, Sample = statistic'
        },
        {
          topicId: dataStats.id,
          front: 'When comparing two box plots, what should you look for?',
          back: 'Compare: (1) Centers — which has a higher median? (2) Spread — which has a larger IQR or range? (3) Symmetry — is either skewed? (4) Outliers — does either have extreme values?',
          hint: 'Center, spread, and shape'
        }
      ]
    })

    console.log('✓ sat-data-statistics expanded')
  }

  console.log('\n✅ SAT Problem Solving & Data Analysis expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
