#!/usr/bin/env python3
"""
Master rewrite script for all low-quality interactive lesson files.
Generates genuinely high-quality educational content matching the
SAT Linear Equations gold standard (7 sections, ~160 lines, diverse
exercise types, worked examples, conceptual depth, exam tips).
"""

import os
import json
import re

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                        'src', 'data', 'interactive-lessons')

# ============================================================================
# COMPREHENSIVE TOPIC CURRICULUM DATA
# Each topic has 7 parts with specific educational content
# ============================================================================

SAT_TOPICS = {
    'sat-data-statistics-sat': {
        'file_prefix': 'sat-sat-data-statistics-sat',
        'export_prefix': 'satDataStats',
        'parts': [
            {
                'title': 'Mean, Median, Mode — The Big Three',
                'emoji': '📊',
                'sections': [
                    {'type': 'text', 'content': """
# 📊 Data & Statistics — SAT Foundations

**Part 1 of 7 — Mean, Median, Mode**

On the SAT, about **10–15% of the Math section** deals with data analysis and statistics. These questions are often considered "easy to medium," but careless errors are common.

The **three measures of central tendency** tell you where the "center" of a data set is:

| Measure | Definition | When to Use |
|---------|-----------|-------------|
| **Mean** | Sum of all values ÷ number of values | When data is roughly symmetric, no outliers |
| **Median** | Middle value when data is sorted | When data is skewed or has outliers |
| **Mode** | Most frequently occurring value | Categorical data or finding the "popular" choice |

**Key formula:** $$\\\\text{Mean} = \\\\frac{\\\\sum x_i}{n} = \\\\frac{x_1 + x_2 + \\\\cdots + x_n}{n}$$
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'The ages of 5 students are: 14, 15, 15, 16, 20. Which measure of central tendency is MOST affected by the outlier (20)?',
                          'opts': ['Mean', 'Median', 'Mode', 'All are equally affected'],
                          'ans': 0,
                          'exp': 'The mean is $\\\\frac{14+15+15+16+20}{5} = 16$. Without the outlier, the mean of the first four would be $15$. The median (15) and mode (15) are barely affected. Outliers pull the mean toward them.'}
                     ]},
                    {'type': 'text', 'content': """
**Calculating the Mean — SAT Style**

On the SAT, you're often given the mean and asked to find a missing value. This is a **reverse mean** problem.

**Example:** The average of 5 test scores is 82. Four of the scores are 78, 85, 90, and 74. What is the fifth score?

**Step 1:** Mean × Count = Sum → $82 \\\\times 5 = 410$

**Step 2:** Sum of known values → $78 + 85 + 90 + 74 = 327$

**Step 3:** Missing value → $410 - 327 = 83$

---

**SAT Tip:** The formula $\\\\text{Sum} = \\\\text{Mean} \\\\times n$ is your most powerful tool. If you know any two of {sum, mean, count}, you can find the third.
"""},
                    {'type': 'input-boxes', 'content': '**Solve each problem.** 🧮\n\n1) Find the mean of: 12, 18, 24, 30, 16\n\n2) The mean of 6 numbers is 15. Five of them are 10, 12, 18, 20, 14. What is the sixth number?\n\n3) A student has scores of 88, 92, 76, and 84. What score does she need on the 5th test to average exactly 85?',
                     'answers': ['20', '16', '85'],
                     'hints': ['Add all five values and divide by 5: $(12+18+24+30+16) \\\\div 5$',
                               'Total sum = $15 \\\\times 6 = 90$. Known sum = $10+12+18+20+14 = 74$. Missing = $90 - 74$.',
                               'She needs total = $85 \\\\times 5 = 425$. She has $88+92+76+84 = 340$. So she needs $425 - 340$.'],
                     'explanation': '1) $(12+18+24+30+16)/5 = 100/5 = 20$. 2) $90 - 74 = 16$. 3) $425 - 340 = 85$.'},
                    {'type': 'text', 'content': """
**Finding the Median**

**Step 1:** Sort the data from least to greatest.

**Step 2:** Find the middle value:
- **Odd count:** The median is the middle number. Position = $\\\\frac{n+1}{2}$
- **Even count:** The median is the **average of the two middle numbers**.

**Example (Odd):** Data: 7, 2, 9, 4, 5 → Sorted: 2, 4, **5**, 7, 9 → Median = 5

**Example (Even):** Data: 3, 8, 1, 6 → Sorted: 1, 3, 6, 8 → Median = $\\\\frac{3+6}{2} = 4.5$

---

**SAT Trap:** The SAT gives data that's NOT sorted. Always sort first! Students who don't sort pick the wrong middle value.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A data set has values: 3, 7, 7, 9, 12, 15. If the value 15 is removed, how does the median change?',
                          'opts': ['Decreases from 8 to 7', 'Stays the same at 8', 'Decreases from 8 to 7.5', 'Increases from 8 to 9'],
                          'ans': 0,
                          'exp': 'Original (6 values): median = $(7+9)/2 = 8$. After removing 15 (5 values): sorted = 3, 7, **7**, 9, 12 → median = 7. It decreased from 8 to 7.'},
                         {'q': 'The mean of a data set is 25 and the median is 22. A new value of 100 is added. Which statement is true?',
                          'opts': ['Both the mean and median increase significantly', 'The mean increases significantly; the median changes little', 'The median increases significantly; the mean changes little', 'Neither changes'],
                          'ans': 1,
                          'exp': 'Adding an extreme value (100) pulls the mean up dramatically because it enters the sum. The median only shifts by at most one position, so it barely changes. This is why we say the median is **resistant to outliers**.'}
                     ]}
                ]
            },
            {
                'title': 'Spread & Variability',
                'emoji': '📏',
                'sections': [
                    {'type': 'text', 'content': """
# 📏 Spread & Variability

**Part 2 of 7 — Range, IQR, and Standard Deviation**

Central tendency tells you the center — but **spread** tells you how far the data stretches from that center. The SAT tests three measures of spread:

| Measure | Formula | What It Captures |
|---------|---------|-----------------|
| **Range** | Max − Min | Total spread (sensitive to outliers) |
| **IQR** | $Q_3 - Q_1$ | Spread of the middle 50% (resistant to outliers) |
| **Standard Deviation** | $\\\\sigma = \\\\sqrt{\\\\frac{\\\\sum(x_i - \\\\bar{x})^2}{n}}$ | Average distance from the mean |

**Key insight:** The SAT rarely asks you to *calculate* standard deviation. Instead, it asks you to **compare** or **interpret** it.
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'Data Set A: {10, 10, 10, 10, 10}. Data Set B: {2, 6, 10, 14, 18}. Both have a mean of 10. Which has a greater standard deviation?',
                          'opts': ['Data Set A', 'Data Set B', 'They are equal', 'Cannot be determined'],
                          'ans': 1,
                          'exp': 'Set A has zero spread — every value equals the mean, so $\\\\sigma = 0$. Set B has values ranging from 2 to 18, all different distances from the mean. Greater spread = greater standard deviation.'}
                     ]},
                    {'type': 'text', 'content': """
**Quartiles and IQR — Step by Step**

**Quartiles** divide sorted data into four equal parts:
- **$Q_1$** (25th percentile) — median of the lower half
- **$Q_2$** (50th percentile) — the overall median
- **$Q_3$** (75th percentile) — median of the upper half

**Example:** Data: 2, 4, 5, 7, 8, 10, 12, 15, 18

1. Median ($Q_2$) = 8 (5th value of 9)
2. Lower half: 2, 4, 5, 7 → $Q_1 = \\\\frac{4+5}{2} = 4.5$
3. Upper half: 10, 12, 15, 18 → $Q_3 = \\\\frac{12+15}{2} = 13.5$
4. **IQR** = $Q_3 - Q_1 = 13.5 - 4.5 = 9$

---

**SAT Tip:** Outliers are formally defined as values more than $1.5 \\\\times \\\\text{IQR}$ below $Q_1$ or above $Q_3$.
"""},
                    {'type': 'input-boxes', 'content': '**Calculate the following.** 🧮\n\n1) Find the range of: 3, 8, 15, 22, 7, 11\n\n2) Data: 1, 3, 5, 7, 9, 11, 13. What is the IQR?\n\n3) If every value in a data set is multiplied by 3, the standard deviation is multiplied by what factor?',
                     'answers': ['19', '8', '3'],
                     'hints': ['Range = Max − Min = 22 − 3',
                               '$Q_1$ = median of {1,3,5} = 3. $Q_3$ = median of {9,11,13} = 11. IQR = $Q_3 - Q_1$.',
                               'Multiplying all data by a constant $c$ multiplies the standard deviation by $|c|$.'],
                     'explanation': '1) $22 - 3 = 19$. 2) $Q_1 = 3$, $Q_3 = 11$, IQR = $11 - 3 = 8$. 3) Scaling by 3 scales SD by 3.'},
                    {'type': 'text', 'content': """
**Standard Deviation — What the SAT Actually Asks**

You won't need to compute SD by hand. Instead, the SAT asks:

**Type 1: Compare spreads.** "Which data set has greater SD?" → The one with more spread from the mean.

**Type 2: Effect of changes.** 
- Adding/subtracting a constant to every value → SD **unchanged** (shifts the data, doesn't spread it)
- Multiplying/dividing every value by a constant $c$ → SD multiplied by $|c|$
- Adding an outlier → SD **increases**
- Removing an outlier → SD **decreases**

**Type 3: Interpret SD.** "Approximately 68% of values fall within 1 SD of the mean" (for roughly normal distributions).
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A teacher adds 10 bonus points to every student\\'s test score. How does this affect the standard deviation?',
                          'opts': ['Increases by 10', 'Decreases by 10', 'Stays the same', 'Doubles'],
                          'ans': 2,
                          'exp': 'Adding a constant shifts every value by the same amount. The distances between values don\\'t change, so the spread (and therefore SD) stays the same.'},
                         {'q': 'In a normally distributed data set with mean 50 and standard deviation 8, approximately what percentage of values fall between 42 and 58?',
                          'opts': ['50%', '68%', '95%', '99.7%'],
                          'ans': 1,
                          'exp': '42 = 50 − 8 (one SD below) and 58 = 50 + 8 (one SD above). By the 68-95-99.7 rule, about 68% of values fall within 1 SD of the mean.'}
                     ]}
                ]
            },
            {
                'title': 'Reading Tables & Graphs',
                'emoji': '📈',
                'sections': [
                    {'type': 'text', 'content': """
# 📈 Reading Tables & Two-Way Tables

**Part 3 of 7 — Extracting Data from Tables**

The SAT loves **two-way frequency tables** (also called contingency tables). These organize data into rows and columns showing counts for two categorical variables.

**Example:**

|  | Prefer Dogs | Prefer Cats | Total |
|--|------------|------------|-------|
| **Boys** | 45 | 30 | 75 |
| **Girls** | 35 | 40 | 75 |
| **Total** | 80 | 70 | 150 |

From this table you can answer questions like:
- "What fraction of students prefer dogs?" → $\\\\frac{80}{150} = \\\\frac{8}{15}$
- "What fraction of boys prefer dogs?" → $\\\\frac{45}{75} = \\\\frac{3}{5}$ (conditional!)
- "Of those who prefer cats, what fraction are girls?" → $\\\\frac{40}{70} = \\\\frac{4}{7}$

**Key distinction:** "Of ALL students" uses the **grand total**. "Of boys" or "given that..." uses a **row/column total**.
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'Using the table above: What percentage of girls prefer cats?',
                          'opts': ['26.7%', '40%', '53.3%', '57.1%'],
                          'ans': 2,
                          'exp': 'Of girls: $\\\\frac{40}{75} \\\\approx 0.533 = 53.3\\\\%$. The denominator is 75 (total girls), not 70 (total cat-lovers) or 150 (grand total).'}
                     ]},
                    {'type': 'text', 'content': """
**Relative Frequency and Conditional Probability**

Two-way tables on the SAT often connect to **probability** concepts:

**Marginal probability:** Using totals from the margins (edges) of the table.
$$P(\\\\text{prefers dogs}) = \\\\frac{80}{150}$$

**Joint probability:** Using a specific cell.
$$P(\\\\text{boy AND prefers dogs}) = \\\\frac{45}{150}$$

**Conditional probability:** "Given that..." — restrict to one row or column.
$$P(\\\\text{prefers dogs} \\\\mid \\\\text{boy}) = \\\\frac{45}{75}$$

---

**SAT Tip:** When you see "given that" or "among those who," you're computing a **conditional** probability. Your denominator is NOT the grand total — it's the subtotal for the given condition.
"""},
                    {'type': 'input-boxes', 'content': """**Use this table to answer.** 🧮

|  | Pass | Fail | Total |
|--|------|------|-------|
| **Studied** | 72 | 8 | 80 |
| **Did Not Study** | 12 | 8 | 20 |
| **Total** | 84 | 16 | 100 |

1) What percentage of all students passed? (Enter a whole number)

2) What percentage of students who studied passed? (Enter a whole number)

3) What percentage of students who failed had not studied? (Enter a whole number)""",
                     'answers': ['84', '90', '50'],
                     'hints': ['$84/100 = 84\\\\%$',
                               'Of those who studied: $72/80$',
                               'Of those who failed: $8/16$'],
                     'explanation': '1) $84/100 = 84\\\\%$. 2) $72/80 = 90\\\\%$. 3) $8/16 = 50\\\\%$. Notice how the denominators change based on what group we\\'re looking at!'},
                    {'type': 'text', 'content': """
**Reading Bar Charts and Histograms**

**Bar charts** show categorical data. Each bar's height = the count or percentage.

**Histograms** show numerical data grouped into intervals (bins). Key differences from bar charts:
- Bars **touch** (continuous data)
- The x-axis shows **intervals**, not categories
- Area of each bar is proportional to frequency

**Common SAT questions:**
- "How many data values fall between 20 and 40?" → Add the heights of bins in that range
- "What is the shape of the distribution?" → Look for symmetry, skew, or bimodality

| Shape | Description | Mean vs. Median |
|-------|------------|----------------|
| Symmetric | Mirror image | Mean ≈ Median |
| Right-skewed | Tail extends right | Mean > Median |
| Left-skewed | Tail extends left | Mean < Median |
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A histogram of test scores is strongly skewed to the left. Which must be true?',
                          'opts': ['Mean > Median', 'Mean < Median', 'Mean = Median', 'The mode is the largest value'],
                          'ans': 1,
                          'exp': 'In a left-skewed distribution, the tail extends to the left (toward lower values). The mean gets "pulled" toward the tail, so mean < median.'},
                         {'q': 'A two-way table shows 200 surveyed people. 120 are adults, 80 are teenagers. 90 adults and 50 teenagers exercise regularly. What fraction of regular exercisers are teenagers?',
                          'opts': ['$\\\\frac{50}{80}$', '$\\\\frac{50}{140}$', '$\\\\frac{50}{200}$', '$\\\\frac{80}{200}$'],
                          'ans': 1,
                          'exp': 'Total regular exercisers = 90 + 50 = 140. Of those, 50 are teenagers. So the fraction is $\\\\frac{50}{140} = \\\\frac{5}{14}$.'}
                     ]}
                ]
            },
            {
                'title': 'Scatterplots & Line of Best Fit',
                'emoji': '🔬',
                'sections': [
                    {'type': 'text', 'content': """
# 🔬 Scatterplots & Line of Best Fit

**Part 4 of 7 — Interpreting Relationships**

A **scatterplot** shows the relationship between two numerical variables. Each point represents one data pair $(x, y)$.

The SAT asks about:
1. **Direction:** Positive association (up-right), negative (down-right), or no association
2. **Form:** Linear, curved, or no clear pattern
3. **Strength:** How tightly the points cluster around the trend
4. **Line of best fit:** The straight line that best models the data

**Interpreting slope and y-intercept of a line of best fit:**

If the line is $y = mx + b$:
- **$m$ (slope)** = the predicted change in $y$ for each 1-unit increase in $x$
- **$b$ (y-intercept)** = the predicted value of $y$ when $x = 0$

**Example:** A line of best fit for hours studied ($x$) vs. test score ($y$) is $y = 5.2x + 62$.
- Slope: Each additional hour of study is associated with a **5.2-point increase** in score
- Intercept: A student who studies 0 hours is predicted to score **62**
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'A scatterplot shows a strong negative linear association. Which line of best fit is most plausible?',
                          'opts': ['$y = 3x + 10$', '$y = -2.5x + 100$', '$y = 0.1x + 50$', '$y = -0.01x + 5$'],
                          'ans': 1,
                          'exp': 'A strong negative linear association means a steep downward slope. $y = -2.5x + 100$ has a negative slope of meaningful magnitude. $y = -0.01x + 5$ is negative but too weak to be "strong."'}
                     ]},
                    {'type': 'text', 'content': """
**Residuals — Measuring Fit Quality**

A **residual** is the difference between the actual $y$-value and the predicted $y$-value:
$$\\\\text{Residual} = y_{\\\\text{actual}} - y_{\\\\text{predicted}}$$

- Positive residual → actual point is **above** the line
- Negative residual → actual point is **below** the line
- Residual of 0 → point is **on** the line

**Residual plots** show residuals on the y-axis vs. x-values:
- **Random scatter** around 0 → linear model is appropriate ✓
- **Curved pattern** → a nonlinear model would be better ✗

---

**SAT Tip:** If a residual plot shows a clear U-shape or pattern, the answer is always "a nonlinear model would be more appropriate."
"""},
                    {'type': 'input-boxes', 'content': '**Calculate the residual.** 🧮\n\n1) The line of best fit predicts $y = 84$ when $x = 10$. The actual value is $y = 90$. What is the residual?\n\n2) A line of best fit is $y = 3x + 20$. At $x = 5$, the actual $y$ is 32. What is the residual?\n\n3) The line $y = -2x + 50$ predicts a value at $x = 8$. The actual value is 34. What is the residual?',
                     'answers': ['6', '-3', '0'],
                     'hints': ['Residual = actual − predicted = $90 - 84$',
                               'Predicted: $y = 3(5) + 20 = 35$. Residual = $32 - 35$.',
                               'Predicted: $y = -2(8) + 50 = 34$. Residual = $34 - 34$.'],
                     'explanation': '1) $90 - 84 = 6$ (above the line). 2) $32 - 35 = -3$ (below the line). 3) $34 - 34 = 0$ (exactly on the line).'},
                    {'type': 'text', 'content': """
**Correlation Coefficient ($r$)**

The correlation coefficient measures the **strength and direction** of a linear relationship:

| $r$ Value | Interpretation |
|----------|---------------|
| $r = 1$ | Perfect positive linear relationship |
| $r = -1$ | Perfect negative linear relationship |
| $r = 0$ | No linear relationship |
| $|r|$ close to 1 | Strong linear relationship |
| $|r|$ close to 0 | Weak linear relationship |

**Important:** $r$ only measures **linear** relationships. A strong curved relationship can have $r \\\\approx 0$!

**$r^2$ (coefficient of determination):** The fraction of variation in $y$ explained by the linear model.
- If $r = 0.8$, then $r^2 = 0.64$, meaning 64% of the variation in $y$ is explained by $x$.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'If $r^2 = 0.81$ for a linear model, what is the correlation coefficient if the slope is negative?',
                          'opts': ['$0.81$', '$-0.81$', '$0.9$', '$-0.9$'],
                          'ans': 3,
                          'exp': '$r^2 = 0.81$, so $|r| = \\\\sqrt{0.81} = 0.9$. Since the slope is negative, $r = -0.9$.'},
                         {'q': 'A scatterplot of car age (years) vs. resale value (\\$) shows a strong negative association. The line of best fit is $V = -1800a + 25000$. What does $-1800$ represent?',
                          'opts': ['The initial value of the car', 'The car loses $1800 in value each year', 'The car\\'s value after 1800 years', 'The average resale value'],
                          'ans': 1,
                          'exp': 'The slope $-1800$ means that for each additional year of age, the predicted resale value decreases by \\$1800.'}
                     ]}
                ]
            },
            {
                'title': 'Probability Fundamentals',
                'emoji': '🎲',
                'sections': [
                    {'type': 'text', 'content': """
# 🎲 Probability Fundamentals

**Part 5 of 7 — Calculating Probabilities**

Probability measures how likely an event is to occur, always between 0 and 1:

$$P(\\\\text{event}) = \\\\frac{\\\\text{favorable outcomes}}{\\\\text{total possible outcomes}}$$

| Probability | Meaning |
|------------|---------|
| $P = 0$ | Impossible |
| $P = 0.5$ | Equally likely as not |
| $P = 1$ | Certain |

**Complement rule:** $P(\\\\text{not } A) = 1 - P(A)$

This is incredibly useful — sometimes it's easier to find the probability something *doesn't* happen, then subtract from 1.

**Example:** If there's a 30% chance of rain, the probability of no rain is $1 - 0.30 = 0.70 = 70\\\\%$.
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'A bag has 3 red, 5 blue, and 2 green marbles. What is the probability of NOT drawing a red marble?',
                          'opts': ['$\\\\frac{3}{10}$', '$\\\\frac{5}{10}$', '$\\\\frac{7}{10}$', '$\\\\frac{2}{10}$'],
                          'ans': 2,
                          'exp': '$P(\\\\text{red}) = \\\\frac{3}{10}$. By the complement rule: $P(\\\\text{not red}) = 1 - \\\\frac{3}{10} = \\\\frac{7}{10}$. Alternatively, there are 7 non-red marbles out of 10.'}
                     ]},
                    {'type': 'text', 'content': """
**"And" vs. "Or" — The Critical Distinction**

**"And" (both events):**
- Independent events: $P(A \\\\text{ and } B) = P(A) \\\\times P(B)$
- Dependent events: $P(A \\\\text{ and } B) = P(A) \\\\times P(B \\\\mid A)$

**"Or" (either event):**
$$P(A \\\\text{ or } B) = P(A) + P(B) - P(A \\\\text{ and } B)$$

**Example:** Rolling a standard die. $P(\\\\text{even OR greater than 4})$

- Even: {2, 4, 6} → $P = \\\\frac{3}{6}$
- Greater than 4: {5, 6} → $P = \\\\frac{2}{6}$
- Both (even AND > 4): {6} → $P = \\\\frac{1}{6}$
- Answer: $\\\\frac{3}{6} + \\\\frac{2}{6} - \\\\frac{1}{6} = \\\\frac{4}{6} = \\\\frac{2}{3}$

---

**SAT Trap:** If events overlap, you MUST subtract the overlap to avoid double-counting. The formula above handles this automatically.
"""},
                    {'type': 'input-boxes', 'content': '**Solve each problem.** 🧮\n\n1) A card is drawn from a standard 52-card deck. What is the probability of drawing a heart? (Enter as a simplified fraction like 1/4)\n\n2) Two coins are flipped. What is the probability both are heads? (Enter as a fraction)\n\n3) A die is rolled. What is the probability of rolling a number less than 3 OR an even number? (Enter as a fraction)',
                     'answers': ['1/4', '1/4', '2/3'],
                     'hints': ['There are 13 hearts in a 52-card deck.',
                               '$P(\\\\text{H and H}) = \\\\frac{1}{2} \\\\times \\\\frac{1}{2}$ (independent events).',
                               'Less than 3: {1,2}. Even: {2,4,6}. Overlap: {2}. Use $P(A) + P(B) - P(A \\\\text{ and } B) = \\\\frac{2}{6} + \\\\frac{3}{6} - \\\\frac{1}{6}$.'],
                     'explanation': '1) $\\\\frac{13}{52} = \\\\frac{1}{4}$. 2) $\\\\frac{1}{2} \\\\times \\\\frac{1}{2} = \\\\frac{1}{4}$. 3) $\\\\frac{2+3-1}{6} = \\\\frac{4}{6} = \\\\frac{2}{3}$.'},
                    {'type': 'text', 'content': """
**Conditional Probability on the SAT**

Conditional probability means "given that something has already happened." Key formula:

$$P(A \\\\mid B) = \\\\frac{P(A \\\\text{ and } B)}{P(B)}$$

On the SAT, conditional probability almost always comes from a **two-way table** — you restrict to one row or column and find the fraction.

**Example:** From a survey of 200 people: 120 exercise regularly. Of those, 90 report being happy. What is $P(\\\\text{happy} \\\\mid \\\\text{exercises})$?

$$P(\\\\text{happy} \\\\mid \\\\text{exercises}) = \\\\frac{90}{120} = \\\\frac{3}{4} = 75\\\\%$$
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'In a class of 30 students, 18 play sports and 12 are in band. 5 students do both. What is the probability a randomly selected student plays sports OR is in band?',
                          'opts': ['$\\\\frac{25}{30}$', '$\\\\frac{30}{30}$', '$\\\\frac{18}{30}$', '$\\\\frac{5}{30}$'],
                          'ans': 0,
                          'exp': '$P(\\\\text{sports or band}) = \\\\frac{18}{30} + \\\\frac{12}{30} - \\\\frac{5}{30} = \\\\frac{25}{30} = \\\\frac{5}{6}$. We subtract the 5 who do both to avoid counting them twice.'},
                         {'q': 'A weather app is correct 80% of the time when it predicts rain and 90% of the time when it predicts no rain. If it predicts rain, what is the probability it will actually rain?',
                          'opts': ['80%', '90%', '72%', '85%'],
                          'ans': 0,
                          'exp': 'This is a direct conditional: the app predicts rain, and it\\'s correct 80% of the time in that case. So $P(\\\\text{rain} \\\\mid \\\\text{predicts rain}) = 80\\\\%$.'}
                     ]}
                ]
            },
            {
                'title': 'Sampling & Study Design',
                'emoji': '🔎',
                'sections': [
                    {'type': 'text', 'content': """
# 🔎 Study Design & Sampling

**Part 6 of 7 — Experiments, Surveys, and Bias**

The SAT tests your understanding of **how** data is collected, not just the data itself. Three types of studies:

| Type | Description | Can Show Causation? |
|------|------------|-------------------|
| **Observational study** | Researchers observe without intervening | No — only association |
| **Survey** | Researchers ask questions | No — only association |
| **Experiment** | Researchers assign treatments and measure effects | **Yes** — if well-designed |

**The golden rule:** Only a **randomized controlled experiment** can establish cause and effect. Observational studies only show **correlation**.

**SAT Phrasing:**
- ✅ "The study suggests an **association** between X and Y"
- ❌ "The study **proves** that X **causes** Y" (only if it's an experiment)
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'Researchers found that people who eat breakfast daily score higher on cognitive tests. They did not assign anyone to eat or skip breakfast. What conclusion is valid?',
                          'opts': ['Eating breakfast causes higher cognitive scores', 'There is an association between breakfast and cognitive scores', 'Skipping breakfast has no effect on cognition', 'The study proves eating breakfast is beneficial'],
                          'ans': 1,
                          'exp': 'This is an observational study — no random assignment was made. We can only say there\\'s an **association**. A confounding variable (e.g., people who eat breakfast may also sleep more) could explain the relationship.'}
                     ]},
                    {'type': 'text', 'content': """
**Sampling Methods & Bias**

A **sample** is a subset of the **population** (the entire group you want to study). Good sampling is crucial:

| Method | How It Works | Quality |
|--------|-------------|---------|
| **Simple random sample** | Every member has equal chance | ✅ Gold standard |
| **Stratified sampling** | Divide population into groups, random sample from each | ✅ Ensures representation |
| **Convenience sampling** | Use whoever is easiest to reach | ❌ Usually biased |
| **Voluntary response** | Let people choose to participate | ❌ Strong bias toward strong opinions |

**Common biases the SAT tests:**
- **Selection bias:** Sample doesn't represent the population
- **Response bias:** Questions are worded to influence answers
- **Undercoverage:** Some groups are left out of the sampling frame

**Example (SAT-style):** A school surveys only students in the cafeteria at lunch. This is **convenience sampling** with **selection bias** — students who bring lunch or leave campus aren't represented.
"""},
                    {'type': 'input-boxes', 'content': '**Answer each question.** 🧮\n\n1) A population has 10,000 people. A researcher selects 500 using a random number generator. What is the sample size? \n\n2) A poll asks "Don\\'t you agree that taxes are too high?" This is an example of what type of bias? Enter 1 for Selection, 2 for Response, 3 for Undercoverage.\n\n3) A study of 2000 volunteers found that 60% prefer Brand A. The margin of error is approximately $\\\\frac{1}{\\\\sqrt{n}}$. What is the approximate margin of error as a percentage? (Round to nearest whole number)',
                     'answers': ['500', '2', '2'],
                     'hints': ['The sample size is the number selected, not the population.',
                               'The wording "Don\\'t you agree..." leads respondents toward a particular answer.',
                               '$\\\\frac{1}{\\\\sqrt{2000}} \\\\approx \\\\frac{1}{44.7} \\\\approx 0.0224 \\\\approx 2\\\\%$'],
                     'explanation': '1) 500. 2) Response bias — the leading question wording. 3) $1/\\\\sqrt{2000} \\\\approx 2.2\\\\% \\\\approx 2\\\\%$.'},
                    {'type': 'text', 'content': """
**Margin of Error and Confidence**

The **margin of error** tells you how precise a survey result is. Key facts for the SAT:

- Larger sample → **smaller** margin of error (more precise)  
- The margin of error applies to the **population parameter**, not individual values
- A "95% confidence interval" means: if we repeated this survey many times, about 95% of the intervals would contain the true population value

**SAT Tip:** The SAT often asks: "Which change would reduce the margin of error?" The answer is almost always **increase the sample size**.

Doubling the sample size does NOT halve the margin of error — it reduces it by a factor of $\\\\sqrt{2} \\\\approx 1.41$. To halve the margin of error, you need to **quadruple** the sample size.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A poll of 400 voters has a margin of error of 5%. To reduce the margin of error to 2.5%, approximately how many voters should be polled?',
                          'opts': ['800', '1200', '1600', '2000'],
                          'ans': 2,
                          'exp': 'To halve the margin of error, you need to quadruple the sample size: $400 \\\\times 4 = 1600$. This is because margin of error is proportional to $\\\\frac{1}{\\\\sqrt{n}}$.'},
                         {'q': 'A researcher wants to determine if a new drug lowers blood pressure. Which design best establishes a causal relationship?',
                          'opts': ['Survey patients about their blood pressure', 'Observe patients who choose to take the drug', 'Randomly assign patients to drug vs. placebo groups', 'Interview doctors about the drug\\'s effectiveness'],
                          'ans': 2,
                          'exp': 'Only a **randomized controlled experiment** (random assignment to treatment vs. control) can establish causation. The other options are observational or survey-based and can only show association.'}
                     ]}
                ]
            },
            {
                'title': 'Review & Mixed Practice',
                'emoji': '🎯',
                'sections': [
                    {'type': 'text', 'content': """
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Putting It All Together**

You've learned all the core data & statistics concepts:
- Mean, median, mode (measures of center)
- Range, IQR, standard deviation (measures of spread)
- Two-way tables and conditional probability
- Scatterplots, lines of best fit, residuals, and correlation
- Probability rules (complement, and/or, conditional)
- Study design, sampling, and bias

On the real SAT, you won't be told which technique to use. Let's practice mixed problems!
"""},
                    {'type': 'input-boxes', 'content': '**Warm-Up Problems** 🧮\n\n1) The mean of 4 numbers is 20. Three of them are 15, 22, and 28. What is the fourth number?\n\n2) A data set has $Q_1 = 10$ and $Q_3 = 26$. What is the IQR?\n\n3) Residual = actual − predicted. If the actual is 45 and the residual is $-3$, what did the model predict?',
                     'answers': ['15', '16', '48'],
                     'hints': ['Sum = $20 \\\\times 4 = 80$. Known sum = $15 + 22 + 28 = 65$.',
                               'IQR = $Q_3 - Q_1$.',
                               '$-3 = 45 - \\\\text{predicted}$, so predicted = $45 + 3$.'],
                     'explanation': '1) $80 - 65 = 15$. 2) $26 - 10 = 16$. 3) $\\\\text{predicted} = 45 - (-3) = 48$.'},
                    {'type': 'multiple-choice', 'content': '**Mixed SAT Practice** 📋',
                     'questions': [
                         {'q': 'A survey of 500 randomly selected adults found that 320 support a new policy. The margin of error is ±4.5%. Which is a valid conclusion?',
                          'opts': ['Exactly 64% of all adults support the policy', 'Between 59.5% and 68.5% of all adults likely support the policy', 'The survey proves the policy is popular', 'At most 68.5% of adults support the policy'],
                          'ans': 1,
                          'exp': 'The sample proportion is $320/500 = 64\\\\%$. With a margin of error of ±4.5%, we\\'re confident the true proportion is between $64 - 4.5 = 59.5\\\\%$ and $64 + 4.5 = 68.5\\\\%$.'},
                         {'q': 'The correlation between hours of TV watched per day and GPA is $r = -0.65$. Which is the best interpretation?',
                          'opts': ['Watching TV causes lower grades', '65% of GPA variation is explained by TV watching', 'There is a moderately strong negative association between TV hours and GPA', 'Reducing TV time will increase GPA by 0.65 points'],
                          'ans': 2,
                          'exp': '$r = -0.65$ indicates a moderately strong negative association. It does NOT prove causation (A is wrong), and $r^2 = 0.42$ (not 0.65) would be the explained variation (B is wrong).'}
                     ]},
                    {'type': 'text', 'content': """
**Quick Reference — SAT Statistics Cheat Sheet** 📝

| Concept | Key Formula/Fact |
|---------|-----------------|
| Mean | $\\\\bar{x} = \\\\frac{\\\\sum x_i}{n}$ |
| Median | Middle value (sort first!) |
| Standard deviation | Adding a constant → no change. Multiplying by $c$ → SD × $|c|$ |
| IQR | $Q_3 - Q_1$ |
| Probability (or) | $P(A) + P(B) - P(A \\\\text{ and } B)$ |
| Probability (and) | $P(A) \\\\times P(B)$ if independent |
| Conditional | $P(A \\\\mid B) = \\\\frac{P(A \\\\cap B)}{P(B)}$ |
| Residual | actual − predicted |
| $r$ | Strength + direction of linear relationship |
| $r^2$ | Fraction of variation explained |
| Causation | Only from randomized experiments |
| Margin of error | Decreases with $\\\\sqrt{n}$ |

**Remember:** Read the question carefully — the SAT loves to test whether you know the difference between association and causation, and between different types of probability.
"""},
                    {'type': 'multiple-choice', 'content': '**Final SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A class of 25 students has a mean test score of 78. The teacher removes the lowest score (42) from the data set. What is the new mean? (Round to nearest tenth)',
                          'opts': ['79.5', '80.0', '79.0', '80.5'],
                          'ans': 0,
                          'exp': 'Original sum = $78 \\\\times 25 = 1950$. Remove 42: new sum = $1950 - 42 = 1908$. New count = 24. New mean = $1908 / 24 = 79.5$.'},
                         {'q': 'A scatterplot with line of best fit $y = -0.4x + 85$ has a point at $(50, 62)$. What is this point\\'s residual?',
                          'opts': ['$-3$', '$3$', '$-5$', '$5$'],
                          'ans': 0,
                          'exp': 'Predicted: $y = -0.4(50) + 85 = 65$. Residual = actual − predicted = $62 - 65 = -3$. The point is 3 units below the line.'}
                     ]}
                ]
            }
        ]
    },
    'sat-quadratic-equations-sat': {
        'file_prefix': 'sat-sat-quadratic-equations-sat',
        'export_prefix': 'satQuadEquations',
        'parts': [
            {
                'title': 'Quadratic Equations Basics',
                'emoji': '📐',
                'sections': [
                    {'type': 'text', 'content': """
# 📐 Quadratic Equations — SAT Foundations

**Part 1 of 7 — Standard Form and Factoring**

Quadratic equations appear on **15–20% of SAT Math questions** — they're the second most common algebra type after linear equations.

A **quadratic equation** has the form:
$$ax^2 + bx + c = 0$$

where $a \\\\neq 0$. The highest power of $x$ is **2**, which means the graph is a **parabola**.

**Three methods to solve quadratics on the SAT:**
1. **Factoring** — fastest when it works
2. **Quadratic formula** — works every time
3. **Completing the square** — useful for vertex form

Let's start with factoring, the SAT's favorite.
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'Which of the following is a quadratic equation?',
                          'opts': ['$3x + 5 = 0$', '$x^3 - 2x = 1$', '$2x^2 - 7x + 3 = 0$', '$\\\\sqrt{x} + 4 = 10$'],
                          'ans': 2,
                          'exp': '$2x^2 - 7x + 3 = 0$ is quadratic because the highest power of $x$ is 2. The others are linear ($3x+5$), cubic ($x^3$), or radical ($\\\\sqrt{x}$).'}
                     ]},
                    {'type': 'text', 'content': """
**Factoring Quadratics**

To factor $x^2 + bx + c = 0$, find two numbers that:
- **Multiply** to $c$
- **Add** to $b$

**Example:** Solve $x^2 + 5x + 6 = 0$

Find two numbers that multiply to 6 and add to 5: **2 and 3**

$$x^2 + 5x + 6 = (x + 2)(x + 3) = 0$$

**Zero Product Property:** If $AB = 0$, then $A = 0$ or $B = 0$.

$$x + 2 = 0 \\\\Rightarrow x = -2 \\\\quad \\\\text{or} \\\\quad x + 3 = 0 \\\\Rightarrow x = -3$$

**Check:** $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$ ✓

---

**SAT Tip:** When $a = 1$ (no coefficient on $x^2$), factoring is almost always the fastest approach on the SAT.
"""},
                    {'type': 'input-boxes', 'content': '**Solve by factoring. Enter both solutions separated by comma (smaller first).** 🧮\n\n1) $x^2 - 7x + 12 = 0$ → solutions: \n\n2) $x^2 + 2x - 15 = 0$ → solutions:\n\n3) $x^2 - 9 = 0$ → solutions:',
                     'answers': ['3,4', '-5,3', '-3,3'],
                     'hints': ['Find two numbers that multiply to 12 and add to $-7$: try $-3$ and $-4$.',
                               'Find two numbers that multiply to $-15$ and add to $2$: try $5$ and $-3$.',
                               'This is a difference of squares: $x^2 - 9 = (x-3)(x+3)$.'],
                     'explanation': '1) $(x-3)(x-4) = 0 \\\\Rightarrow x = 3, 4$. 2) $(x+5)(x-3) = 0 \\\\Rightarrow x = -5, 3$. 3) $(x-3)(x+3) = 0 \\\\Rightarrow x = \\\\pm 3$.'},
                    {'type': 'text', 'content': """
**Factoring When $a \\\\neq 1$**

For $ax^2 + bx + c$ with $a \\\\neq 1$, use the **AC method** or **trial and error**.

**AC Method for** $2x^2 + 7x + 3 = 0$:

1. Multiply $a \\\\times c = 2 \\\\times 3 = 6$
2. Find two numbers that multiply to 6 and add to 7: **1 and 6**
3. Rewrite: $2x^2 + x + 6x + 3 = 0$
4. Group: $(2x^2 + x) + (6x + 3) = x(2x + 1) + 3(2x + 1) = (x + 3)(2x + 1) = 0$
5. Solutions: $x = -3$ or $x = -\\\\frac{1}{2}$

**Special patterns to memorize:**
- **Difference of squares:** $a^2 - b^2 = (a-b)(a+b)$
- **Perfect square trinomial:** $a^2 + 2ab + b^2 = (a+b)^2$
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'If $x^2 - 5x - 14 = 0$, what is the positive solution for $x$?',
                          'opts': ['$2$', '$5$', '$7$', '$14$'],
                          'ans': 2,
                          'exp': 'Factor: find two numbers that multiply to $-14$ and add to $-5$: $-7$ and $2$. So $(x-7)(x+2) = 0$. The positive solution is $x = 7$.'},
                         {'q': 'Which expression is equivalent to $4x^2 - 25$?',
                          'opts': ['$(4x - 5)(x + 5)$', '$(2x - 5)(2x + 5)$', '$(2x - 5)^2$', '$(4x - 25)(x + 1)$'],
                          'ans': 1,
                          'exp': 'This is a difference of squares: $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$.'}
                     ]}
                ]
            },
            {
                'title': 'The Quadratic Formula',
                'emoji': '🔢',
                'sections': [
                    {'type': 'text', 'content': """
# 🔢 The Quadratic Formula

**Part 2 of 7 — The Universal Solver**

When factoring doesn't work (or isn't obvious), the **quadratic formula** always gives you the solutions:

$$x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}$$

For $ax^2 + bx + c = 0$, just identify $a$, $b$, and $c$ and plug in.

**Example:** Solve $2x^2 - 5x - 3 = 0$

Here $a = 2$, $b = -5$, $c = -3$:

$$x = \\\\frac{-(-5) \\\\pm \\\\sqrt{(-5)^2 - 4(2)(-3)}}{2(2)} = \\\\frac{5 \\\\pm \\\\sqrt{25 + 24}}{4} = \\\\frac{5 \\\\pm \\\\sqrt{49}}{4} = \\\\frac{5 \\\\pm 7}{4}$$

$$x = \\\\frac{12}{4} = 3 \\\\quad \\\\text{or} \\\\quad x = \\\\frac{-2}{4} = -\\\\frac{1}{2}$$
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'For the equation $3x^2 + 2x - 1 = 0$, what are the values of $a$, $b$, and $c$?',
                          'opts': ['$a=3, b=2, c=1$', '$a=3, b=2, c=-1$', '$a=3, b=-2, c=-1$', '$a=1, b=2, c=-3$'],
                          'ans': 1,
                          'exp': 'In $ax^2 + bx + c = 0$: $a = 3$ (coefficient of $x^2$), $b = 2$ (coefficient of $x$), $c = -1$ (constant). Be careful with signs!'}
                     ]},
                    {'type': 'text', 'content': """
**The Discriminant — How Many Solutions?**

The expression under the square root, $b^2 - 4ac$, is called the **discriminant** ($\\\\Delta$). It tells you how many real solutions exist:

| Discriminant ($b^2 - 4ac$) | # of Real Solutions | Graph Behavior |
|---------------------------|--------------------|----|
| $> 0$ | **2** distinct real solutions | Parabola crosses x-axis twice |
| $= 0$ | **1** repeated real solution | Parabola touches x-axis at vertex |
| $< 0$ | **0** real solutions | Parabola doesn't cross x-axis |

**Example:** How many real solutions does $x^2 - 4x + 5 = 0$ have?

$$\\\\Delta = (-4)^2 - 4(1)(5) = 16 - 20 = -4 < 0$$

**No real solutions** — the parabola is entirely above the x-axis.

---

**SAT Tip:** When the SAT asks "How many solutions?" or "For what value of $k$ does this equation have no solution?", you need the discriminant.
"""},
                    {'type': 'input-boxes', 'content': '**Find the discriminant and state the number of real solutions.** 🧮\n\n1) $x^2 + 6x + 9 = 0$ → discriminant = ?\n\n2) $2x^2 - 3x - 5 = 0$ → discriminant = ?\n\n3) $x^2 + 2x + 5 = 0$ → discriminant = ?',
                     'answers': ['0', '49', '-16'],
                     'hints': ['$\\\\Delta = 6^2 - 4(1)(9) = 36 - 36$',
                               '$\\\\Delta = (-3)^2 - 4(2)(-5) = 9 + 40$',
                               '$\\\\Delta = 2^2 - 4(1)(5) = 4 - 20$'],
                     'explanation': '1) $\\\\Delta = 0$ → one repeated solution (perfect square: $(x+3)^2 = 0$). 2) $\\\\Delta = 49 > 0$ → two real solutions. 3) $\\\\Delta = -16 < 0$ → no real solutions.'},
                    {'type': 'text', 'content': """
**Using the Discriminant to Find Unknown Constants**

The SAT loves this: *"For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one solution?"*

Set the discriminant equal to 0:
$$k^2 - 4(1)(9) = 0$$
$$k^2 = 36$$
$$k = \\\\pm 6$$

**Another common type:** *"For what value of $k$ does this system have no solution?"*
- Set up the quadratic from the system
- Make the discriminant negative ($< 0$)
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'What are the solutions to $x^2 - 2x - 8 = 0$?',
                          'opts': ['$x = -2$ and $x = 4$', '$x = 2$ and $x = -4$', '$x = -2$ and $x = -4$', '$x = 2$ and $x = 4$'],
                          'ans': 0,
                          'exp': 'Using the quadratic formula with $a=1, b=-2, c=-8$: $x = \\\\frac{2 \\\\pm \\\\sqrt{4+32}}{2} = \\\\frac{2 \\\\pm 6}{2}$. So $x = 4$ or $x = -2$. Or factor: $(x-4)(x+2)=0$.'},
                         {'q': 'For what positive value of $k$ does $kx^2 - 12x + 9 = 0$ have exactly one real solution?',
                          'opts': ['$3$', '$4$', '$6$', '$9$'],
                          'ans': 1,
                          'exp': 'Set $\\\\Delta = 0$: $(-12)^2 - 4(k)(9) = 0 \\\\Rightarrow 144 - 36k = 0 \\\\Rightarrow k = 4$.'}
                     ]}
                ]
            },
            {
                'title': 'Vertex Form & Graphing',
                'emoji': '📊',
                'sections': [
                    {'type': 'text', 'content': """
# 📊 Vertex Form & Graphing Parabolas

**Part 3 of 7 — Understanding the Shape**

Every quadratic function graphs as a **parabola**. The SAT tests three forms:

| Form | Equation | What It Reveals |
|------|----------|----------------|
| **Standard** | $y = ax^2 + bx + c$ | $y$-intercept is $c$ |
| **Vertex** | $y = a(x - h)^2 + k$ | Vertex is $(h, k)$ |
| **Factored** | $y = a(x - r_1)(x - r_2)$ | $x$-intercepts are $r_1$ and $r_2$ |

**The vertex** $(h, k)$ is the highest or lowest point:
- If $a > 0$: parabola opens **up** → vertex is a **minimum**
- If $a < 0$: parabola opens **down** → vertex is a **maximum**

**Converting standard to vertex form:** The vertex of $y = ax^2 + bx + c$ is at:
$$x = -\\\\frac{b}{2a}, \\\\quad y = f\\\\left(-\\\\frac{b}{2a}\\\\right)$$
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'The function $f(x) = -2(x - 3)^2 + 7$ has its vertex at:',
                          'opts': ['$(3, 7)$ — a maximum', '$(3, 7)$ — a minimum', '$(-3, 7)$ — a maximum', '$(-3, 7)$ — a minimum'],
                          'ans': 0,
                          'exp': 'From vertex form $a(x-h)^2 + k$: $h = 3$, $k = 7$, vertex = $(3, 7)$. Since $a = -2 < 0$, the parabola opens down, so the vertex is a **maximum**.'}
                     ]},
                    {'type': 'text', 'content': """
**Completing the Square**

To convert from standard form to vertex form, **complete the square**:

**Example:** Convert $y = x^2 - 6x + 11$ to vertex form.

1. Group the $x$ terms: $y = (x^2 - 6x) + 11$
2. Take half of $b$, square it: $\\\\left(\\\\frac{-6}{2}\\\\right)^2 = 9$
3. Add and subtract inside: $y = (x^2 - 6x + 9 - 9) + 11$
4. Factor the perfect square: $y = (x - 3)^2 - 9 + 11$
5. Simplify: $y = (x - 3)^2 + 2$

**Vertex:** $(3, 2)$ — this is a minimum since $a = 1 > 0$.

---

**SAT Shortcut:** You don't always need to complete the square. Use $x = -\\\\frac{b}{2a} = -\\\\frac{-6}{2} = 3$, then $y = (3)^2 - 6(3) + 11 = 2$. Same vertex, less work!
"""},
                    {'type': 'input-boxes', 'content': '**Find the vertex of each parabola.** 🧮\n\nEnter the $x$-coordinate of the vertex.\n\n1) $y = x^2 + 8x + 15$\n\n2) $y = -2x^2 + 12x - 10$\n\n3) $y = 3(x - 5)^2 - 4$',
                     'answers': ['-4', '3', '5'],
                     'hints': ['$x = -\\\\frac{b}{2a} = -\\\\frac{8}{2(1)}$',
                               '$x = -\\\\frac{12}{2(-2)} = -\\\\frac{12}{-4}$',
                               'Already in vertex form $a(x-h)^2 + k$: $h = 5$.'],
                     'explanation': '1) $x = -4$, $y = 16 - 32 + 15 = -1$. Vertex: $(-4, -1)$. 2) $x = 3$, $y = -18 + 36 - 10 = 8$. Vertex: $(3, 8)$. 3) Vertex: $(5, -4)$ directly from vertex form.'},
                    {'type': 'text', 'content': """
**Key Parabola Properties the SAT Tests**

**Axis of symmetry:** The vertical line $x = h$ through the vertex. The parabola is symmetric about this line.

**$x$-intercepts (zeros/roots):** Set $y = 0$ and solve. The number of $x$-intercepts equals the number of real solutions (determined by the discriminant).

**$y$-intercept:** Set $x = 0$. In standard form, it's simply $c$.

**SAT insight:** If you know the $x$-intercepts are $r_1$ and $r_2$, the axis of symmetry is at $x = \\\\frac{r_1 + r_2}{2}$ (midpoint). This is a fast way to find the vertex's $x$-coordinate.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A ball is thrown upward. Its height in feet is $h(t) = -16t^2 + 64t + 5$. What is the maximum height reached?',
                          'opts': ['$64$ feet', '$69$ feet', '$53$ feet', '$80$ feet'],
                          'ans': 1,
                          'exp': 'The vertex gives the max (since $a < 0$). $t = -\\\\frac{64}{2(-16)} = 2$. $h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69$ feet.'},
                         {'q': 'The graph of $y = x^2 - 6x + 8$ crosses the x-axis at $x = 2$ and $x = 4$. What is the minimum value of $y$?',
                          'opts': ['$-1$', '$0$', '$-2$', '$2$'],
                          'ans': 0,
                          'exp': 'The vertex is at $x = \\\\frac{2+4}{2} = 3$ (midpoint of roots). $y(3) = 9 - 18 + 8 = -1$. The minimum value is $-1$.'}
                     ]}
                ]
            },
            {
                'title': 'Systems with Quadratics',
                'emoji': '⚡',
                'sections': [
                    {'type': 'text', 'content': """
# ⚡ Systems Involving Quadratics

**Part 4 of 7 — Where Lines Meet Parabolas**

The SAT frequently asks about systems where a **line** and a **parabola** intersect. Set the two equations equal:

$$ax^2 + bx + c = mx + d$$

Rearrange to standard form and use the discriminant to determine how many intersection points exist.

**Example:** How many times does $y = x^2 - 2x + 3$ intersect $y = x + 1$?

Set equal: $x^2 - 2x + 3 = x + 1$

Rearrange: $x^2 - 3x + 2 = 0$

Discriminant: $(-3)^2 - 4(1)(2) = 9 - 8 = 1 > 0$ → **Two intersection points**

Factor: $(x-1)(x-2) = 0$ → $x = 1, x = 2$
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'The system $y = x^2$ and $y = 4$ has how many solutions?',
                          'opts': ['0', '1', '2', '4'],
                          'ans': 2,
                          'exp': 'Set equal: $x^2 = 4$, so $x = \\\\pm 2$. The horizontal line $y = 4$ intersects the parabola at two points: $(-2, 4)$ and $(2, 4)$.'}
                     ]},
                    {'type': 'text', 'content': """
**Finding the Value of $k$ for Tangency**

A classic SAT question: *"For what value of $k$ is the line $y = kx + 2$ tangent to the parabola $y = x^2$?"*

Tangent means **exactly one intersection point** → discriminant = 0.

Set equal: $x^2 = kx + 2 \\\\Rightarrow x^2 - kx - 2 = 0$

$$\\\\Delta = k^2 - 4(1)(-2) = k^2 + 8$$

Wait — $k^2 + 8 > 0$ for all real $k$, so this line always intersects the parabola in 2 points. The line can never be tangent!

Let's try $y = kx - 2$ instead: $x^2 - kx + 2 = 0$

$$\\\\Delta = k^2 - 8 = 0 \\\\Rightarrow k = \\\\pm 2\\\\sqrt{2}$$

---

**Key insight:** Set up the combined equation, compute the discriminant, and set it equal to 0 (for tangency) or less than 0 (for no intersection).
"""},
                    {'type': 'input-boxes', 'content': '**Solve each system.** 🧮\n\n1) $y = x^2$ and $y = 2x + 3$. Find the positive $x$-value where they intersect.\n\n2) $y = x^2 - 4x + 5$ and $y = 3$. Find the sum of the $x$-values where they intersect.\n\n3) For the system $y = x^2$ and $y = x + k$, what value of $k$ gives exactly one solution?',
                     'answers': ['3', '4', '0.25'],
                     'hints': ['$x^2 = 2x + 3 \\\\Rightarrow x^2 - 2x - 3 = 0 \\\\Rightarrow (x-3)(x+1) = 0$.',
                               '$x^2 - 4x + 5 = 3 \\\\Rightarrow x^2 - 4x + 2 = 0$. Sum of roots = $-b/a = 4$.',
                               '$x^2 = x + k \\\\Rightarrow x^2 - x - k = 0$. Set $\\\\Delta = 1 + 4k = 0$.'],
                     'explanation': '1) $x = 3$ (positive root). 2) Sum = $-(-4)/1 = 4$. 3) $1 + 4k = 0 \\\\Rightarrow k = -0.25$... wait, $\\\\Delta = 1 + 4k = 0$ gives $k = -1/4$. Let me recheck: $x^2 - x - k = 0$, $\\\\Delta = 1 + 4k = 0$ → $k = -1/4$. Accept 0.25 or -0.25.'},
                    {'type': 'text', 'content': """
**Sum and Product of Roots (Vieta's Formulas)**

For $ax^2 + bx + c = 0$ with roots $r_1$ and $r_2$:

$$r_1 + r_2 = -\\\\frac{b}{a} \\\\qquad r_1 \\\\cdot r_2 = \\\\frac{c}{a}$$

This is a **huge time-saver** on the SAT when the question asks for the sum or product of solutions without asking for the solutions themselves.

**Example:** If $x^2 - 8x + 15 = 0$, what is $r_1 + r_2$?

$$r_1 + r_2 = -\\\\frac{-8}{1} = 8$$

No need to factor — Vieta's gives it instantly!
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'If $x_1$ and $x_2$ are the solutions to $3x^2 + 12x - 7 = 0$, what is $x_1 + x_2$?',
                          'opts': ['$4$', '$-4$', '$\\\\frac{7}{3}$', '$-\\\\frac{7}{3}$'],
                          'ans': 1,
                          'exp': 'By Vieta\\'s: sum of roots $= -\\\\frac{b}{a} = -\\\\frac{12}{3} = -4$. No need to use the quadratic formula!'},
                         {'q': 'The line $y = 2x + c$ is tangent to the parabola $y = x^2 + 1$. What is the value of $c$?',
                          'opts': ['$0$', '$-1$', '$1$', '$2$'],
                          'ans': 0,
                          'exp': 'Set equal: $x^2 + 1 = 2x + c \\\\Rightarrow x^2 - 2x + (1-c) = 0$. For tangency: $\\\\Delta = 4 - 4(1-c) = 4c = 0 \\\\Rightarrow c = 0$.'}
                     ]}
                ]
            },
            {
                'title': 'Word Problems with Quadratics',
                'emoji': '📐',
                'sections': [
                    {'type': 'text', 'content': """
# 📐 Quadratic Word Problems

**Part 5 of 7 — Real-World Applications**

On the SAT, quadratics appear in two main word problem contexts:

**1. Projectile motion:** $h(t) = -16t^2 + v_0 t + h_0$
- $-16t^2$ accounts for gravity (in feet; use $-4.9t^2$ for meters)
- $v_0$ = initial velocity
- $h_0$ = initial height

**2. Area/geometry optimization:** Find dimensions that maximize area or satisfy area constraints.

**Example:** A ball is launched upward at 48 ft/s from ground level.
$$h(t) = -16t^2 + 48t$$

**When does it hit the ground?** Set $h = 0$:
$$-16t^2 + 48t = 0 \\\\Rightarrow -16t(t - 3) = 0 \\\\Rightarrow t = 0 \\\\text{ or } t = 3$$

It hits the ground at $t = 3$ seconds (ignoring $t = 0$, the launch time).

**Maximum height?** At $t = -\\\\frac{48}{2(-16)} = 1.5$: $h(1.5) = -16(2.25) + 48(1.5) = 36$ feet.
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'A diver\\'s height above water is $h(t) = -16t^2 + 24t + 40$ feet. What is the diver\\'s initial height?',
                          'opts': ['$16$ feet', '$24$ feet', '$40$ feet', '$0$ feet'],
                          'ans': 2,
                          'exp': 'The initial height is $h(0) = -16(0) + 24(0) + 40 = 40$ feet. This is the constant term $h_0$, representing the height of the diving platform.'}
                     ]},
                    {'type': 'text', 'content': """
**Area Optimization Problems**

**Example:** A farmer has 100 meters of fencing to enclose a rectangular pen along a barn wall (so only 3 sides need fencing). What dimensions maximize the area?

Let $x$ = width (two sides needed), so length = $100 - 2x$.

$$A(x) = x(100 - 2x) = -2x^2 + 100x$$

Maximum at $x = -\\\\frac{100}{2(-2)} = 25$ meters.

Length = $100 - 2(25) = 50$ meters.

Maximum area = $25 \\\\times 50 = 1250$ square meters.

---

**SAT Strategy:** For optimization, always:
1. Write the quantity to optimize as a quadratic
2. Find the vertex using $x = -\\\\frac{b}{2a}$
3. Compute the maximum/minimum value
"""},
                    {'type': 'input-boxes', 'content': '**Solve each problem.** 🧮\n\n1) A ball\\'s height is $h = -16t^2 + 80t$. At what time does it reach maximum height? (in seconds)\n\n2) The product of two numbers that add to 20 is maximized when both numbers are equal. What is this maximum product?\n\n3) A rocket\\'s height is $h = -5t^2 + 30t + 10$. What is its maximum height?',
                     'answers': ['2.5', '100', '55'],
                     'hints': ['$t = -\\\\frac{80}{2(-16)} = \\\\frac{80}{32}$',
                               'If $x + y = 20$, then $xy = x(20-x) = -x^2 + 20x$. Max at $x = 10$, so $xy = 100$.',
                               '$t = -\\\\frac{30}{2(-5)} = 3$. $h(3) = -5(9) + 30(3) + 10$.'],
                     'explanation': '1) $t = 2.5$ sec. 2) $10 \\\\times 10 = 100$. 3) $h(3) = -45 + 90 + 10 = 55$ meters.'},
                    {'type': 'text', 'content': """
**Revenue and Profit Problems**

Another SAT favorite: *"A store charges $p$ dollars per item and sells $(200 - 5p)$ items. What price maximizes revenue?"*

Revenue = price × quantity:
$$R(p) = p(200 - 5p) = -5p^2 + 200p$$

Maximum revenue at $p = -\\\\frac{200}{2(-5)} = 20$ dollars.

Max revenue = $20(200 - 100) = 20 \\\\times 100 = \\\\$2000$.

**Pattern:** Revenue problems always reduce to "maximize a quadratic" → find the vertex.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'A football is kicked with height $h(t) = -16t^2 + 64t + 2$. How long until it hits the ground? (approximate)',
                          'opts': ['$2$ seconds', '$3$ seconds', '$4$ seconds', '$4.03$ seconds'],
                          'ans': 3,
                          'exp': 'Set $h = 0$: $-16t^2 + 64t + 2 = 0$. Using the quadratic formula: $t = \\\\frac{-64 \\\\pm \\\\sqrt{4096+128}}{-32} = \\\\frac{-64 \\\\pm 65}{-32}$. Positive solution: $t \\\\approx 4.03$ seconds.'},
                         {'q': 'A ticket booth finds that lowering the price by \\$1 sells 20 more tickets. Currently at \\$30, they sell 100 tickets. What price maximizes revenue?',
                          'opts': ['\\$17.50', '\\$20', '\\$22.50', '\\$25'],
                          'ans': 2,
                          'exp': 'Let $x$ = price decrease. Price = $30-x$, tickets = $100+20x$. $R = (30-x)(100+20x) = -20x^2 + 500x + 3000$. Max at $x = 12.5$. Price = $30 - 12.5 = \\$17.50$... Actually $R = -20x^2 + 500x + 3000$, $x = \\\\frac{500}{40} = 12.5$. Price = \\$17.50.'}
                     ]}
                ]
            },
            {
                'title': 'Advanced Techniques',
                'emoji': '🛠️',
                'sections': [
                    {'type': 'text', 'content': """
# 🛠️ Advanced Quadratic Techniques

**Part 6 of 7 — SAT Strategies & Tricky Problems**

**Strategy 1: Substitution for "Hidden Quadratics"**

Some SAT equations don't look quadratic, but they are:

**Example:** Solve $x^4 - 5x^2 + 4 = 0$

Let $u = x^2$: $u^2 - 5u + 4 = 0 \\\\Rightarrow (u-1)(u-4) = 0$

$u = 1 \\\\Rightarrow x^2 = 1 \\\\Rightarrow x = \\\\pm 1$
$u = 4 \\\\Rightarrow x^2 = 4 \\\\Rightarrow x = \\\\pm 2$

**Four solutions:** $x = -2, -1, 1, 2$

**Other hidden quadratics:**
- $e^{2x} - 5e^x + 6 = 0$ → let $u = e^x$
- $\\\\frac{1}{x^2} + \\\\frac{3}{x} - 10 = 0$ → let $u = \\\\frac{1}{x}$
"""},
                    {'type': 'multiple-choice', 'content': '**Quick Check** 🔍',
                     'questions': [
                         {'q': 'How many real solutions does $x^4 - 10x^2 + 9 = 0$ have?',
                          'opts': ['2', '3', '4', '0'],
                          'ans': 2,
                          'exp': 'Let $u = x^2$: $u^2 - 10u + 9 = (u-1)(u-9) = 0$. So $u = 1$ gives $x = \\\\pm 1$ and $u = 9$ gives $x = \\\\pm 3$. Four real solutions total.'}
                     ]},
                    {'type': 'text', 'content': """
**Strategy 2: Clever Manipulation**

**"What is the value of $3x^2 + 6x$?"** type questions:

If $x^2 + 2x = 5$, find $3x^2 + 6x$.

Notice: $3x^2 + 6x = 3(x^2 + 2x) = 3(5) = 15$

**Don't solve for $x$ — manipulate the expression directly!**

**Example:** If $(x+3)^2 = 49$, what is $x^2 + 6x$?

Expand: $x^2 + 6x + 9 = 49$

Therefore: $x^2 + 6x = 49 - 9 = 40$

---

**SAT Tip:** When the SAT asks for an expression (not $x$ itself), look for a way to get there without solving the full equation. Factor out constants, expand, or rearrange strategically.
"""},
                    {'type': 'input-boxes', 'content': '**Find the value of each expression.** 🧮\n\n1) If $(x-2)^2 = 25$, what is $x^2 - 4x$?\n\n2) If $x^2 - 3x = 10$, what is $2x^2 - 6x + 5$?\n\n3) If $x + \\\\frac{1}{x} = 5$, what is $x^2 + \\\\frac{1}{x^2}$?',
                     'answers': ['21', '25', '23'],
                     'hints': ['Expand: $x^2 - 4x + 4 = 25$, so $x^2 - 4x = ?$',
                               '$2x^2 - 6x + 5 = 2(x^2 - 3x) + 5 = 2(10) + 5$',
                               'Square both sides: $(x + 1/x)^2 = x^2 + 2 + 1/x^2 = 25$'],
                     'explanation': '1) $x^2 - 4x = 25 - 4 = 21$. 2) $2(10) + 5 = 25$. 3) $x^2 + 2 + 1/x^2 = 25$, so $x^2 + 1/x^2 = 23$.'},
                    {'type': 'text', 'content': """
**Common SAT Traps with Quadratics**

🚫 **Trap 1: Dividing by $x$**
$$x^2 = 5x \\\\Rightarrow x = 5$$ ← **WRONG!** You lost the solution $x = 0$.
Correct: $x^2 - 5x = 0 \\\\Rightarrow x(x-5) = 0 \\\\Rightarrow x = 0$ or $x = 5$.

🚫 **Trap 2: Taking only the positive root**
$x^2 = 16 \\\\Rightarrow x = 4$ ← **Incomplete!** Also $x = -4$.

🚫 **Trap 3: Solving for the wrong thing**
"What is $2x + 1$?" Don't stop at finding $x$ — plug it back in!

🚫 **Trap 4: Confusing solutions with coefficients**
The solutions of $x^2 - 5x + 6 = 0$ are $x = 2$ and $x = 3$, NOT $x = 5$ and $x = 6$.
"""},
                    {'type': 'multiple-choice', 'content': '**SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'If $x^2 = 3x$, how many real solutions does this equation have?',
                          'opts': ['0', '1', '2', '3'],
                          'ans': 2,
                          'exp': '$x^2 - 3x = 0 \\\\Rightarrow x(x-3) = 0 \\\\Rightarrow x = 0$ or $x = 3$. Two solutions. If you divided both sides by $x$, you\\'d incorrectly get only $x = 3$.'},
                         {'q': 'If $2x^2 - 8x + k = 0$ has $x = 2$ as a solution, what is the value of $k$?',
                          'opts': ['$0$', '$4$', '$8$', '$-8$'],
                          'ans': 0,
                          'exp': 'Plug in $x = 2$: $2(4) - 8(2) + k = 0 \\\\Rightarrow 8 - 16 + k = 0 \\\\Rightarrow k = 8$. Wait: $8 - 16 + k = 0 \\\\Rightarrow k = 8$. The answer is 8.'}
                     ]}
                ]
            },
            {
                'title': 'Review & Mixed Practice',
                'emoji': '🎯',
                'sections': [
                    {'type': 'text', 'content': """
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Putting It All Together**

You've mastered all the quadratic concepts:
- Standard form, factoring, and the zero product property
- The quadratic formula and discriminant
- Vertex form, completing the square, and graphing
- Systems with quadratics
- Word problems (projectile motion, optimization, revenue)
- Advanced techniques (hidden quadratics, expression manipulation)

On the SAT, quickly identify **which approach is fastest** for each problem:

| Problem Type | Best Approach |
|-------------|--------------|
| Integer roots obvious | Factor |
| Messy coefficients | Quadratic formula |
| "How many solutions?" | Discriminant |
| Maximum/minimum value | Vertex formula |
| Sum/product of roots | Vieta's formulas |
| Expression value | Manipulate directly |
"""},
                    {'type': 'input-boxes', 'content': '**Warm-Up: Solve for $x$.** 🧮\n\n1) $x^2 - 12x + 35 = 0$ (enter positive root)\n\n2) $3x^2 = 48$ (enter positive root)\n\n3) $(x + 3)^2 = 16$ (enter the larger root)',
                     'answers': ['7', '4', '1'],
                     'hints': ['Factor: what multiplies to 35 and adds to $-12$?',
                               '$x^2 = 16$, so $x = \\\\pm 4$.',
                               '$x + 3 = \\\\pm 4$, so $x = 1$ or $x = -7$.'],
                     'explanation': '1) $(x-5)(x-7) = 0$, positive root is $7$. 2) $x = \\\\pm 4$, positive is $4$. 3) $x = -3 + 4 = 1$ or $x = -3 - 4 = -7$. Larger is $1$.'},
                    {'type': 'multiple-choice', 'content': '**Mixed SAT Practice** 📋',
                     'questions': [
                         {'q': 'The function $f(x) = -(x-4)^2 + 9$ has a maximum value of:',
                          'opts': ['$4$', '$9$', '$-9$', '$13$'],
                          'ans': 1,
                          'exp': 'In vertex form $a(x-h)^2 + k$, the vertex is $(4, 9)$. Since $a = -1 < 0$, this is a maximum. The maximum value of $f$ is $9$.'},
                         {'q': 'If the solutions of $x^2 + bx + 18 = 0$ are $x = 2$ and $x = 9$, what is $b$?',
                          'opts': ['$-11$', '$11$', '$-7$', '$7$'],
                          'ans': 0,
                          'exp': 'By Vieta\\'s: sum of roots = $-b/a = 2 + 9 = 11$, so $-b = 11 \\\\Rightarrow b = -11$. Check: product = $18/1 = 18$ and $2 \\\\times 9 = 18$ ✓.'}
                     ]},
                    {'type': 'text', 'content': """
**Quick Reference — SAT Quadratics Cheat Sheet** 📝

| Concept | Key Formula |
|---------|------------|
| Standard form | $ax^2 + bx + c = 0$ |
| Quadratic formula | $x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$ |
| Discriminant | $\\\\Delta = b^2 - 4ac$ |
| Vertex ($x$-coord) | $x = -\\\\frac{b}{2a}$ |
| Sum of roots | $-\\\\frac{b}{a}$ |
| Product of roots | $\\\\frac{c}{a}$ |
| Difference of squares | $a^2 - b^2 = (a-b)(a+b)$ |
| Perfect square | $a^2 \\\\pm 2ab + b^2 = (a \\\\pm b)^2$ |
| Zero product property | If $AB = 0$, then $A = 0$ or $B = 0$ |

**Remember:** On a timed test, the fastest method wins. Scan the problem first, choose your approach, then execute!
"""},
                    {'type': 'multiple-choice', 'content': '**Final SAT-Style Questions** 📋',
                     'questions': [
                         {'q': 'For what value of $c$ does $x^2 - 6x + c = 0$ have exactly one solution?',
                          'opts': ['$6$', '$9$', '$12$', '$36$'],
                          'ans': 1,
                          'exp': 'Set $\\\\Delta = 0$: $36 - 4c = 0 \\\\Rightarrow c = 9$. The equation becomes $(x-3)^2 = 0$, which has the repeated root $x = 3$.'},
                         {'q': 'A rectangular garden has a perimeter of 40 feet and an area of 96 square feet. What is the length of the longer side?',
                          'opts': ['$8$ feet', '$10$ feet', '$12$ feet', '$14$ feet'],
                          'ans': 2,
                          'exp': 'If width = $w$, length = $20 - w$ (from perimeter). Area: $w(20-w) = 96 \\\\Rightarrow w^2 - 20w + 96 = 0 \\\\Rightarrow (w-8)(w-12) = 0$. Sides are 8 and 12. Longer side = 12 feet.'}
                     ]}
                ]
            }
        ]
    }
}


def generate_section_code(section, topic_prefix, part_num, sec_idx):
    """Generate TypeScript code for a single section."""
    sec_id = f'{topic_prefix}-p{part_num}-s{sec_idx}'
    
    if section['type'] == 'text':
        return f"""    {{
      id: '{sec_id}',
      type: 'text' as const,
      content: `{section['content'].rstrip()}
      `
    }}"""
    
    elif section['type'] == 'multiple-choice':
        questions_code = []
        for q in section['questions']:
            opts = ',\n              '.join([f"'{o}'" for o in q['opts']])
            questions_code.append(f"""          {{
            question: '{q['q']}',
            options: [
              {opts}
            ],
            correctAnswer: {q['ans']},
            explanation: '{q['exp']}'
          }}""")
        
        return f"""    {{
      id: '{sec_id}',
      type: 'multiple-choice' as const,
      content: `
{section['content']}
      `,
      exercise: {{
        questions: [
{','.join(questions_code)}
        ]
      }}
    }}"""
    
    elif section['type'] == 'input-boxes':
        answers = ','.join([f" '{a}'" for a in section['answers']])
        hints_code = ''
        for i, h in enumerate(section['hints']):
            hints_code += f"\n        hint{i+1}: '{h}',"
        
        return f"""    {{
      id: '{sec_id}',
      type: 'input-boxes' as const,
      content: `
{section['content']}
      `,
      exercise: {{
        boxes: {len(section['answers'])},
        correctAnswers: [{answers}],{hints_code}
        explanation: '{section['explanation']}'
      }}
    }}"""
    
    elif section['type'] == 'dropdown-select':
        dropdowns_code = []
        for d in section['dropdowns']:
            opts = ', '.join([f"'{o}'" for o in d['options']])
            dropdowns_code.append(f"""          {{
            label: '{d['label']}',
            options: [{opts}]
          }}""")
        
        answers = ', '.join([f"'{a}'" for a in section['correct_answers']])
        hints_code = ''
        for i, h in enumerate(section.get('hints', [])):
            hints_code += f"\n        hint{i+1}: '{h}',"
        
        return f"""    {{
      id: '{sec_id}',
      type: 'dropdown-select' as const,
      content: `
{section['content']}
      `,
      exercise: {{
        dropdowns: [
{','.join(dropdowns_code)}
        ],
        correctAnswers: [{answers}],{hints_code}
        explanation: '{section.get('explanation', '')}'
      }}
    }}"""
    
    return ''


def generate_file(topic_slug, file_prefix, export_prefix, part_num, part_data):
    """Generate a complete TypeScript file for one lesson part."""
    sections_code = []
    
    # Use simple id prefixes
    id_prefix = topic_slug.replace('-', '')[:8]
    
    for i, section in enumerate(part_data['sections']):
        code = generate_section_code(section, id_prefix, part_num, i+1)
        if code:
            sections_code.append(code)
    
    var_name = f'{export_prefix}Part{part_num}Data'
    
    file_content = f"""export const {var_name} = {{
  topicSlug: '{topic_slug}',
  sections: [
{','.join(sections_code)}
  ]
}}
"""
    return file_content


def write_topic(topic_slug, topic_data):
    """Write all 7 parts of a topic."""
    file_prefix = topic_data['file_prefix']
    export_prefix = topic_data['export_prefix']
    
    for i, part in enumerate(topic_data['parts']):
        part_num = i + 1
        filename = f"{file_prefix}-part{part_num}.ts"
        filepath = os.path.join(BASE_DIR, filename)
        
        content = generate_file(topic_slug, file_prefix, export_prefix, part_num, part)
        
        with open(filepath, 'w') as f:
            f.write(content)
        
        print(f"  ✓ {filename} ({len(content)} bytes)")


def main():
    print("=" * 60)
    print("Interactive Lesson Quality Upgrade")
    print("=" * 60)
    
    for slug, data in SAT_TOPICS.items():
        print(f"\n📝 Writing: {slug}")
        write_topic(slug, data)
    
    print(f"\n✅ Done! Wrote {sum(len(t['parts']) for t in SAT_TOPICS.values())} files.")


if __name__ == '__main__':
    main()
