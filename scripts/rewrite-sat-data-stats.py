#!/usr/bin/env python3
"""
Complete rewrite of all low-quality interactive lesson files.
Generates genuinely high-quality educational content matching the
SAT Linear Equations gold standard pattern.
"""

import os
import sys
import json

BASE = '/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data/interactive-lessons'

def esc(s):
    """Escape backticks and ${} for template literals."""
    return s.replace('`', '\\`').replace('${', '\\${')

def write_file(filepath, content):
    with open(filepath, 'w') as f:
        f.write(content)

# ============================================================================
# HELPER: Generate a complete part file
# ============================================================================
def make_part(export_name, part_num, topic_slug, sections_ts):
    """Generate complete TypeScript for one lesson part."""
    return f"""export const {export_name}Part{part_num}Data = {{
  topicSlug: '{topic_slug}',
  sections: [
{sections_ts}
  ]
}}
"""

# ============================================================================
# SAT DATA & STATISTICS — Complete 7-Part Rewrite
# ============================================================================
def write_sat_data_statistics():
    slug = 'sat-data-statistics-sat'
    prefix = 'sat-sat-data-statistics-sat'
    exp = 'satDataStats'
    
    # Part 1: Mean, Median, Mode
    p1 = make_part(exp, 1, slug, """    {
      id: 'sat-ds1-intro',
      type: 'text' as const,
      content: `
# 📊 Data & Statistics — SAT Foundations

**Part 1 of 7 — Mean, Median, Mode**

About **10–15% of the SAT Math section** involves data analysis and statistics. These are often "easy to medium" difficulty — but careless errors are common.

The **three measures of central tendency** describe the "center" of a data set:

| Measure | Definition | When to Use |
|---------|-----------|-------------|
| **Mean** | Sum of all values ÷ number of values | Data is symmetric, no outliers |
| **Median** | Middle value when sorted | Data is skewed or has outliers |
| **Mode** | Most frequently occurring value | Categorical data |

**Key formula:** $$\\\\text{Mean} = \\\\frac{\\\\sum x_i}{n} = \\\\frac{x_1 + x_2 + \\\\cdots + x_n}{n}$$

**The most useful rearrangement:** $\\\\text{Sum} = \\\\text{Mean} \\\\times n$. If you know any two of \\\\{sum, mean, count\\\\}, you can find the third.
      `
    },
    {
      id: 'sat-ds1-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The ages of 5 students are: 14, 15, 15, 16, 20. Which measure of central tendency is MOST affected by the outlier (20)?',
            options: [
              'Mean',
              'Median',
              'Mode',
              'All are equally affected'
            ],
            correctAnswer: 0,
            explanation: 'The mean is $(14+15+15+16+20)/5 = 16$. Without the outlier, the mean of the first four is $15$. The median (15) and mode (15) are barely affected. **Outliers pull the mean toward them.**'
          }
        ]
      }
    },
    {
      id: 'sat-ds1-reverse',
      type: 'text' as const,
      content: `
**Reverse Mean Problems — The SAT's Favorite**

The SAT loves giving you the mean and asking for a missing value. Use: $\\\\text{Sum} = \\\\text{Mean} \\\\times n$

**Example:** The average of 5 test scores is 82. Four scores are 78, 85, 90, and 74. What is the fifth?

**Step 1:** Total sum = $82 \\\\times 5 = 410$

**Step 2:** Known sum = $78 + 85 + 90 + 74 = 327$

**Step 3:** Missing = $410 - 327 = 83$

---

**Another common type:** "If a 6th score of 96 is added, what is the new mean?"

New sum = $410 + 96 = 506$. New mean = $506 \\\\div 6 \\\\approx 84.3$.

**SAT Tip:** When a value is added or removed, the mean changes. Track the **sum** — it's always easier than re-averaging.
      `
    },
    {
      id: 'sat-ds1-practice1',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) Find the mean of: 12, 18, 24, 30, 16

2) The mean of 6 numbers is 15. Five are 10, 12, 18, 20, 14. What is the sixth?

3) A student's scores are 88, 92, 76, 84. What score on the 5th test gives an average of exactly 85?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '16', '85'],
        hint1: 'Add all five and divide by 5: $(12+18+24+30+16) \\\\div 5$.',
        hint2: 'Total sum = $15 \\\\times 6 = 90$. Known sum = $10+12+18+20+14 = 74$. Missing = ?',
        hint3: 'Needed total = $85 \\\\times 5 = 425$. Current sum = $88+92+76+84 = 340$. Need $425-340$.',
        explanation: '1) $100/5 = 20$. 2) $90 - 74 = 16$. 3) $425 - 340 = 85$.'
      }
    },
    {
      id: 'sat-ds1-median',
      type: 'text' as const,
      content: `
**Finding the Median**

**Step 1:** Sort the data from least to greatest.

**Step 2:** Find the middle value:
- **Odd count:** Median = the middle number. Position = $\\\\frac{n+1}{2}$
- **Even count:** Median = average of the two middle numbers

**Example (odd):** Data: 7, 2, 9, 4, 5 → Sorted: 2, 4, **5**, 7, 9 → Median = 5

**Example (even):** Data: 3, 8, 1, 6 → Sorted: 1, 3, 6, 8 → Median = $\\\\frac{3+6}{2} = 4.5$

---

**SAT Trap:** The data is NOT sorted! Students who skip sorting pick the wrong middle value. Always sort first.
      `
    },
    {
      id: 'sat-ds1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each scenario to the best measure of center.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Salaries at a company where the CEO earns $10M',
            options: ['Mean', 'Median', 'Mode']
          },
          {
            label: 'Typical shoe size sold at a store',
            options: ['Mean', 'Median', 'Mode']
          },
          {
            label: 'Average test score when data is symmetric',
            options: ['Mean', 'Median', 'Mode']
          }
        ],
        correctAnswers: ['Median', 'Mode', 'Mean'],
        hint1: 'The CEO salary is an extreme outlier that would inflate the mean.',
        hint2: 'Shoe sizes are categorical — which size is purchased most often?',
        hint3: 'When data is symmetric and has no outliers, mean and median are similar, but mean uses all the data.',
        explanation: 'Use median when outliers exist (CEO salary skews the mean). Use mode for categorical data (most common shoe size). Use mean when data is symmetric.'
      }
    },
    {
      id: 'sat-ds1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A data set has values: 3, 7, 7, 9, 12, 15. If the value 15 is removed, how does the median change?',
            options: [
              'Decreases from 8 to 7',
              'Stays the same at 8',
              'Decreases from 8 to 7.5',
              'Increases from 8 to 9'
            ],
            correctAnswer: 0,
            explanation: 'Original (6 values): median = $(7+9)/2 = 8$. After removing 15 (5 values): sorted = 3, 7, **7**, 9, 12 → median = 7. Decreased from 8 to 7.'
          },
          {
            question: 'The mean of a data set is 25 and the median is 22. A new value of 100 is added. Which is true?',
            options: [
              'Both mean and median increase significantly',
              'The mean increases significantly; the median barely changes',
              'The median increases significantly; the mean barely changes',
              'Neither changes'
            ],
            correctAnswer: 1,
            explanation: 'Adding 100 adds to the sum, dramatically increasing the mean. The median shifts by at most one position — it barely changes. The median is **resistant to outliers**.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part1.ts'), p1)
    
    # Part 2: Spread & Variability  
    p2 = make_part(exp, 2, slug, """    {
      id: 'sat-ds2-intro',
      type: 'text' as const,
      content: `
# 📏 Spread & Variability

**Part 2 of 7 — Range, IQR, and Standard Deviation**

Central tendency tells you the center — **spread** tells you how far data extends from that center. The SAT tests three measures:

| Measure | Formula | Resistant to Outliers? |
|---------|---------|----------------------|
| **Range** | Max − Min | ❌ No |
| **IQR** | $Q_3 - Q_1$ | ✅ Yes |
| **Standard Deviation** | $\\\\sigma = \\\\sqrt{\\\\frac{\\\\sum(x_i - \\\\bar{x})^2}{n}}$ | ❌ No |

**Key insight:** The SAT rarely asks you to *calculate* standard deviation. It asks you to **compare** or **interpret** it.
      `
    },
    {
      id: 'sat-ds2-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Set A: {10, 10, 10, 10, 10}. Set B: {2, 6, 10, 14, 18}. Both have mean 10. Which has greater standard deviation?',
            options: [
              'Set A',
              'Set B',
              'They are equal',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Set A has zero spread — every value equals the mean, so $\\\\sigma = 0$. Set B has values spread from 2 to 18. Greater spread = greater standard deviation.'
          }
        ]
      }
    },
    {
      id: 'sat-ds2-quartiles',
      type: 'text' as const,
      content: `
**Quartiles and IQR — Step by Step**

**Quartiles** divide sorted data into four equal parts:
- $Q_1$ (25th percentile) — median of the lower half
- $Q_2$ (50th percentile) — the overall median
- $Q_3$ (75th percentile) — median of the upper half

**Example:** Data: 2, 4, 5, 7, 8, 10, 12, 15, 18

1. Median ($Q_2$) = 8 (5th of 9 values)
2. Lower half: 2, 4, 5, 7 → $Q_1 = \\\\frac{4+5}{2} = 4.5$
3. Upper half: 10, 12, 15, 18 → $Q_3 = \\\\frac{12+15}{2} = 13.5$
4. **IQR** = $Q_3 - Q_1 = 13.5 - 4.5 = 9$

---

**SAT Tip:** An outlier is formally any value more than $1.5 \\\\times \\\\text{IQR}$ below $Q_1$ or above $Q_3$.
      `
    },
    {
      id: 'sat-ds2-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate the following.** 🧮

1) Find the range of: 3, 8, 15, 22, 7, 11

2) Data: 1, 3, 5, 7, 9, 11, 13. What is the IQR?

3) If every value in a data set is multiplied by 3, the standard deviation is multiplied by what factor?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '8', '3'],
        hint1: 'Range = Max − Min = $22 - 3$.',
        hint2: '$Q_1$ = median of {1,3,5} = 3. $Q_3$ = median of {9,11,13} = 11.',
        hint3: 'Multiplying all data by constant $c$ multiplies SD by $|c|$.',
        explanation: '1) $22 - 3 = 19$. 2) IQR = $11 - 3 = 8$. 3) Scaling data by 3 scales SD by 3.'
      }
    },
    {
      id: 'sat-ds2-sd-concepts',
      type: 'text' as const,
      content: `
**Standard Deviation — What the SAT Actually Asks**

You won't compute SD by hand. Instead:

**Type 1: Compare spreads.** "Which set has greater SD?" → More spread from mean = higher SD.

**Type 2: Effect of changes.**
- Add/subtract a constant to every value → SD **unchanged**
- Multiply/divide every value by $c$ → SD multiplied by $|c|$
- Add an outlier → SD **increases**

**Type 3: 68-95-99.7 rule** (for normal distributions):
- ~68% within 1 SD of mean
- ~95% within 2 SDs
- ~99.7% within 3 SDs
      `
    },
    {
      id: 'sat-ds2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A teacher adds 10 bonus points to every score. How does this affect the standard deviation?',
            options: [
              'Increases by 10',
              'Decreases by 10',
              'Stays the same',
              'Doubles'
            ],
            correctAnswer: 2,
            explanation: 'Adding a constant shifts all values equally. The distances between values do not change, so SD stays the same.'
          },
          {
            question: 'In a normal distribution with mean 50 and SD 8, approximately what percentage of values fall between 42 and 58?',
            options: [
              '50%',
              '68%',
              '95%',
              '99.7%'
            ],
            correctAnswer: 1,
            explanation: '$42 = 50 - 8$ (1 SD below) and $58 = 50 + 8$ (1 SD above). By the 68-95-99.7 rule, about 68% of values fall within 1 SD.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part2.ts'), p2)
    
    # Part 3: Reading Tables & Graphs
    p3 = make_part(exp, 3, slug, """    {
      id: 'sat-ds3-intro',
      type: 'text' as const,
      content: `
# 📈 Reading Tables & Two-Way Tables

**Part 3 of 7 — Extracting Data**

The SAT loves **two-way frequency tables**. They organize data by two categorical variables.

**Example:**

|  | Prefer Dogs | Prefer Cats | Total |
|--|------------|------------|-------|
| **Boys** | 45 | 30 | 75 |
| **Girls** | 35 | 40 | 75 |
| **Total** | 80 | 70 | 150 |

Key questions:
- "What fraction of students prefer dogs?" → $\\\\frac{80}{150}$ (use grand total)
- "What fraction of **boys** prefer dogs?" → $\\\\frac{45}{75}$ (use row total — conditional!)
- "Of those who prefer cats, what fraction are girls?" → $\\\\frac{40}{70}$ (use column total)

**Critical distinction:** "Of ALL students" uses the **grand total**. "Of boys" or "given that..." uses a **row/column total**.
      `
    },
    {
      id: 'sat-ds3-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Using the table above: What percentage of girls prefer cats? (Rounded)',
            options: [
              '27%',
              '40%',
              '53%',
              '57%'
            ],
            correctAnswer: 2,
            explanation: 'Of girls: $40/75 \\\\approx 0.533 = 53\\\\%$. The denominator is 75 (total girls), NOT 70 (cat lovers) or 150 (everyone).'
          }
        ]
      }
    },
    {
      id: 'sat-ds3-probability',
      type: 'text' as const,
      content: `
**Relative Frequency and Conditional Probability**

Two-way tables connect to probability:

**Marginal probability** — uses totals from the margin:
$$P(\\\\text{prefers dogs}) = \\\\frac{80}{150}$$

**Joint probability** — uses a specific cell:
$$P(\\\\text{boy AND prefers dogs}) = \\\\frac{45}{150}$$

**Conditional probability** — "given that..." restricts the denominator:
$$P(\\\\text{prefers dogs} \\\\mid \\\\text{boy}) = \\\\frac{45}{75}$$

---

**SAT Tip:** Words like "given that," "among those who," or "of the students who" signal **conditional probability**. The denominator is NOT the grand total.
      `
    },
    {
      id: 'sat-ds3-practice',
      type: 'input-boxes' as const,
      content: `
**Use this table.** 🧮

|  | Pass | Fail | Total |
|--|------|------|-------|
| **Studied** | 72 | 8 | 80 |
| **Didn't Study** | 12 | 8 | 20 |
| **Total** | 84 | 16 | 100 |

1) What percentage of ALL students passed?

2) What percentage of students who studied passed?

3) What percentage of those who failed had NOT studied?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['84', '90', '50'],
        hint1: '$84/100 = 84\\\\%$.',
        hint2: 'Restrict to "studied" row: $72/80$.',
        hint3: 'Restrict to "fail" column: $8/16$.',
        explanation: '1) $84/100 = 84\\\\%$. 2) $72/80 = 90\\\\%$. 3) $8/16 = 50\\\\%$. The denominator changes depending on which group you are looking at.'
      }
    },
    {
      id: 'sat-ds3-shapes',
      type: 'text' as const,
      content: `
**Histograms and Distribution Shape**

**Histograms** show numerical data in intervals. The shape matters:

| Shape | Description | Mean vs Median |
|-------|------------|---------------|
| Symmetric | Mirror image | Mean ≈ Median |
| Right-skewed | Tail to the right | Mean > Median |
| Left-skewed | Tail to the left | Mean < Median |

**Key rule:** The mean is pulled toward the tail. In a right-skewed distribution, the tail extends right, pulling the mean above the median.

**Bar charts** vs **histograms:** Bar charts are for categories (bars don't touch). Histograms are for continuous data (bars touch, x-axis shows intervals).
      `
    },
    {
      id: 'sat-ds3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A histogram of home prices is strongly skewed right. Which must be true?',
            options: [
              'Mean < Median',
              'Mean = Median',
              'Mean > Median',
              'Mode > Mean'
            ],
            correctAnswer: 2,
            explanation: 'Right-skewed means the tail extends right (toward expensive homes). The mean is pulled toward that tail, so mean > median.'
          },
          {
            question: 'A survey of 200 people: 120 adults, 80 teens. 90 adults and 50 teens exercise regularly. What fraction of regular exercisers are teens?',
            options: [
              '$50/80$',
              '$50/140$',
              '$50/200$',
              '$80/200$'
            ],
            correctAnswer: 1,
            explanation: 'Total exercisers = $90 + 50 = 140$. Of those, 50 are teens. Fraction = $50/140 = 5/14$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part3.ts'), p3)
    
    # Part 4: Scatterplots & Line of Best Fit
    p4 = make_part(exp, 4, slug, """    {
      id: 'sat-ds4-intro',
      type: 'text' as const,
      content: `
# 🔬 Scatterplots & Line of Best Fit

**Part 4 of 7 — Interpreting Relationships**

A **scatterplot** shows the relationship between two numerical variables. The SAT tests:

1. **Direction:** Positive (up-right), negative (down-right), or none
2. **Form:** Linear, curved, or no pattern
3. **Strength:** How tightly points cluster around the trend
4. **Line of best fit:** The equation modeling the trend

**Interpreting $y = mx + b$:**
- **$m$ (slope):** Predicted change in $y$ per 1-unit increase in $x$
- **$b$ (y-intercept):** Predicted $y$ when $x = 0$

**Example:** Line of best fit for study hours ($x$) vs. test score ($y$): $y = 5.2x + 62$
- Each additional hour → predicted 5.2-point increase
- Zero hours → predicted score of 62
      `
    },
    {
      id: 'sat-ds4-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A scatterplot shows a strong negative linear association. Which equation is most plausible?',
            options: [
              '$y = 3x + 10$',
              '$y = -2.5x + 100$',
              '$y = 0.1x + 50$',
              '$y = -0.01x + 5$'
            ],
            correctAnswer: 1,
            explanation: 'Strong negative = steep downward slope. $y = -2.5x + 100$ has a meaningfully negative slope. The $-0.01$ option is too weak for "strong."'
          }
        ]
      }
    },
    {
      id: 'sat-ds4-residuals',
      type: 'text' as const,
      content: `
**Residuals — Measuring Fit Quality**

$$\\\\text{Residual} = y_{\\\\text{actual}} - y_{\\\\text{predicted}}$$

- Positive residual → point is **above** the line
- Negative residual → point is **below** the line
- Zero residual → point is **on** the line

**Residual plots** (residuals vs. x-values):
- **Random scatter** around 0 → linear model is good ✓
- **Curved pattern** → nonlinear model needed ✗

---

**SAT Tip:** If a residual plot shows a U-shape or any pattern, the answer is "a nonlinear model would be a better fit."
      `
    },
    {
      id: 'sat-ds4-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate the residual.** 🧮

1) Predicted $y = 84$ at $x = 10$, actual $y = 90$. Residual = ?

2) Line: $y = 3x + 20$. At $x = 5$, actual $y = 32$. Residual = ?

3) Line: $y = -2x + 50$. At $x = 8$, actual $y = 34$. Residual = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '-3', '0'],
        hint1: 'Residual = actual − predicted = $90 - 84$.',
        hint2: 'Predicted: $3(5)+20 = 35$. Residual = $32-35$.',
        hint3: 'Predicted: $-2(8)+50 = 34$. Residual = $34-34$.',
        explanation: '1) $90-84 = 6$ (above the line). 2) $32-35 = -3$ (below). 3) $34-34 = 0$ (exactly on the line).'
      }
    },
    {
      id: 'sat-ds4-correlation',
      type: 'text' as const,
      content: `
**Correlation Coefficient ($r$) and $r^2$**

| $r$ value | Interpretation |
|-----------|---------------|
| $r = 1$ | Perfect positive linear |
| $r = -1$ | Perfect negative linear |
| $r = 0$ | No linear relationship |
| $|r|$ near 1 | Strong linear |
| $|r|$ near 0 | Weak linear |

**$r^2$ (coefficient of determination):** The fraction of variation in $y$ explained by $x$.
- If $r = 0.8$, then $r^2 = 0.64$ — 64% of $y$'s variation is explained.

**Important:** $r$ only measures *linear* relationships. A strong curve can have $r \\\\approx 0$!
      `
    },
    {
      id: 'sat-ds4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $r^2 = 0.81$ and the slope is negative, what is $r$?',
            options: [
              '$0.81$',
              '$-0.81$',
              '$0.9$',
              '$-0.9$'
            ],
            correctAnswer: 3,
            explanation: '$|r| = \\\\sqrt{0.81} = 0.9$. Since slope is negative, $r = -0.9$.'
          },
          {
            question: 'Car age vs. value: $V = -1800a + 25000$. What does $-1800$ represent?',
            options: [
              'Initial car value',
              'Predicted loss of \\\\$1800 per year',
              'Value after 1800 years',
              'Average resale value'
            ],
            correctAnswer: 1,
            explanation: 'The slope $-1800$ means each additional year predicts a \\\\$1800 decrease in value.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part4.ts'), p4)
    
    # Part 5: Probability
    p5 = make_part(exp, 5, slug, """    {
      id: 'sat-ds5-intro',
      type: 'text' as const,
      content: `
# 🎲 Probability Fundamentals

**Part 5 of 7 — Calculating Probabilities**

$$P(\\\\text{event}) = \\\\frac{\\\\text{favorable outcomes}}{\\\\text{total outcomes}}$$

Probability is always between 0 (impossible) and 1 (certain).

**Complement rule:** $P(\\\\text{not } A) = 1 - P(A)$

This is incredibly useful — sometimes it's easier to find the probability something *doesn't* happen.

**Example:** 30% chance of rain → $P(\\\\text{no rain}) = 1 - 0.30 = 0.70 = 70\\\\%$.
      `
    },
    {
      id: 'sat-ds5-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A bag has 3 red, 5 blue, and 2 green marbles. Probability of NOT drawing red?',
            options: [
              '$3/10$',
              '$5/10$',
              '$7/10$',
              '$2/10$'
            ],
            correctAnswer: 2,
            explanation: '$P(\\\\text{red}) = 3/10$. Complement: $P(\\\\text{not red}) = 1 - 3/10 = 7/10$. Or: 7 non-red out of 10.'
          }
        ]
      }
    },
    {
      id: 'sat-ds5-and-or',
      type: 'text' as const,
      content: `
**"And" vs "Or" — The Critical Distinction**

**"And" (both events):**
- Independent: $P(A \\\\text{ and } B) = P(A) \\\\times P(B)$
- Dependent: $P(A \\\\text{ and } B) = P(A) \\\\times P(B|A)$

**"Or" (at least one):**
$$P(A \\\\text{ or } B) = P(A) + P(B) - P(A \\\\text{ and } B)$$

**Example:** Rolling a die. $P(\\\\text{even OR } > 4)$
- Even: \\\\{2,4,6\\\\} → $3/6$
- $> 4$: \\\\{5,6\\\\} → $2/6$
- Both: \\\\{6\\\\} → $1/6$
- Answer: $3/6 + 2/6 - 1/6 = 4/6 = 2/3$

**SAT Trap:** You MUST subtract the overlap to avoid double-counting!
      `
    },
    {
      id: 'sat-ds5-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) Probability of drawing a heart from a standard 52-card deck? (Enter as a simplified denominator only — e.g., if 1/4, enter 4)

2) Two coins are flipped. Probability both are heads? (Enter denominator)

3) In a class of 30: 18 play sports, 12 are in band, 5 do both. How many do at least one?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '4', '25'],
        hint1: '13 hearts ÷ 52 cards = $1/4$.',
        hint2: '$P(H) \\\\times P(H) = 1/2 \\\\times 1/2 = 1/4$.',
        hint3: 'At least one = $18 + 12 - 5 = 25$ (subtract overlap).',
        explanation: '1) $13/52 = 1/4$. 2) $1/4$. 3) $18 + 12 - 5 = 25$ students do at least one.'
      }
    },
    {
      id: 'sat-ds5-conditional',
      type: 'text' as const,
      content: `
**Conditional Probability on the SAT**

$$P(A|B) = \\\\frac{P(A \\\\text{ and } B)}{P(B)}$$

On the SAT, this almost always comes from a two-way table. Restrict to one row or column and compute the fraction.

**Example:** 200 people surveyed. 120 exercise regularly. Of those, 90 report being happy.
$$P(\\\\text{happy} | \\\\text{exercises}) = \\\\frac{90}{120} = \\\\frac{3}{4} = 75\\\\%$$

**Key words that signal conditional probability:** "given that," "among those who," "of the people who," "knowing that."
      `
    },
    {
      id: 'sat-ds5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A jar has 4 red and 6 blue marbles. You draw two WITHOUT replacement. What is the probability both are red?',
            options: [
              '$4/25$',
              '$2/15$',
              '$16/100$',
              '$4/10$'
            ],
            correctAnswer: 1,
            explanation: '$P(\\\\text{1st red}) = 4/10$. $P(\\\\text{2nd red} | \\\\text{1st red}) = 3/9$. $P(\\\\text{both}) = (4/10)(3/9) = 12/90 = 2/15$.'
          },
          {
            question: 'In a class of 30: 18 play sports, 12 in band, 5 do both. Probability a random student plays sports OR is in band?',
            options: [
              '$25/30$',
              '$30/30$',
              '$18/30$',
              '$5/30$'
            ],
            correctAnswer: 0,
            explanation: '$P = (18+12-5)/30 = 25/30 = 5/6$. Subtract the 5 who do both to avoid double-counting.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part5.ts'), p5)
    
    # Part 6: Study Design & Sampling
    p6 = make_part(exp, 6, slug, """    {
      id: 'sat-ds6-intro',
      type: 'text' as const,
      content: `
# 🔎 Study Design & Sampling

**Part 6 of 7 — Experiments, Surveys, and Bias**

| Study Type | Description | Shows Causation? |
|-----------|-----------|:---------------:|
| **Observational** | Observe without intervening | ❌ Only association |
| **Survey** | Ask questions | ❌ Only association |
| **Experiment** | Assign treatments, measure effects | ✅ Yes (if randomized) |

**The golden rule:** Only a **randomized controlled experiment** establishes cause and effect.

**SAT phrasing clues:**
- ✅ "suggests an **association** between X and Y" — always valid
- ❌ "**proves** X **causes** Y" — only valid for randomized experiments
      `
    },
    {
      id: 'sat-ds6-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers found breakfast eaters score higher on tests. No one was assigned to eat or skip. Valid conclusion?',
            options: [
              'Breakfast causes higher scores',
              'There is an association between breakfast and scores',
              'Skipping breakfast has no effect',
              'The study proves breakfast is beneficial'
            ],
            correctAnswer: 1,
            explanation: 'This is observational — no random assignment. We can only claim **association**, not causation. A confounders (more sleep, better health) could explain it.'
          }
        ]
      }
    },
    {
      id: 'sat-ds6-sampling',
      type: 'text' as const,
      content: `
**Sampling Methods & Bias**

| Method | How It Works | Quality |
|--------|-------------|---------|
| **Simple random sample** | Every member has equal chance | ✅ Gold standard |
| **Stratified** | Divide into groups, sample from each | ✅ Ensures representation |
| **Convenience** | Whoever is easiest to reach | ❌ Usually biased |
| **Voluntary response** | People choose to participate | ❌ Strong opinions overrepresented |

**Common biases:**
- **Selection bias:** Sample doesn't represent the population
- **Response bias:** Questions worded to influence answers
- **Undercoverage:** Some groups excluded from sampling

**Example:** Surveying only cafeteria students = convenience sampling with selection bias — students who bring lunch aren't included.
      `
    },
    {
      id: 'sat-ds6-practice',
      type: 'input-boxes' as const,
      content: `
**Answer each question.** 🧮

1) A population has 10,000 people. 500 are randomly selected. What is the sample size?

2) "Don't you agree taxes are too high?" is an example of what type of bias? Enter: 1 = Selection, 2 = Response, 3 = Undercoverage

3) A poll of 2,500 people has margin of error approximately $1/\\\\sqrt{n}$. What is the approximate margin of error as a percentage? (Round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '2', '2'],
        hint1: 'Sample size = number selected, not population size.',
        hint2: '"Don\\'t you agree..." is a leading question.',
        hint3: '$1/\\\\sqrt{2500} = 1/50 = 0.02 = 2\\\\%$.',
        explanation: '1) 500. 2) Response bias — leading wording. 3) $1/\\\\sqrt{2500} = 2\\\\%$.'
      }
    },
    {
      id: 'sat-ds6-margin',
      type: 'text' as const,
      content: `
**Margin of Error and Confidence**

Key facts for the SAT:
- **Larger sample** → smaller margin of error
- **To halve the margin of error:** quadruple the sample size (because margin ∝ $1/\\\\sqrt{n}$)
- A 95% confidence interval means: if we repeated this survey many times, ~95% of intervals would contain the true value

**SAT phrasing:** "We are 95% confident that between 54% and 62% of adults support the policy" means the sample proportion ± margin of error = the interval.
      `
    },
    {
      id: 'sat-ds6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A poll of 400 voters has margin of error 5%. To reduce it to 2.5%, how many voters should be polled?',
            options: [
              '800',
              '1200',
              '1600',
              '2000'
            ],
            correctAnswer: 2,
            explanation: 'Halving the margin requires quadrupling the sample: $400 \\\\times 4 = 1600$. Margin ∝ $1/\\\\sqrt{n}$.'
          },
          {
            question: 'To determine if a drug lowers blood pressure, which design best establishes causation?',
            options: [
              'Survey patients about their blood pressure',
              'Observe patients who choose the drug',
              'Randomly assign patients to drug vs. placebo',
              'Interview doctors about effectiveness'
            ],
            correctAnswer: 2,
            explanation: 'Only a randomized controlled experiment (random assignment to treatment vs. control) can establish causation.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part6.ts'), p6)
    
    # Part 7: Review & Mixed Practice
    p7 = make_part(exp, 7, slug, """    {
      id: 'sat-ds7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Putting It All Together**

You've learned all the core data & statistics concepts:
- Mean, median, mode and when to use each
- Range, IQR, standard deviation
- Two-way tables (marginal, joint, and conditional probability)
- Scatterplots, residuals, correlation ($r$ and $r^2$)
- Probability rules (complement, AND, OR)
- Study design, sampling bias, and margin of error

Now let's practice mixed problems — just like on the real SAT!
      `
    },
    {
      id: 'sat-ds7-warmup',
      type: 'input-boxes' as const,
      content: `
**Warm-Up** 🧮

1) The mean of 4 numbers is 20. Three are 15, 22, 28. What is the fourth?

2) $Q_1 = 10$, $Q_3 = 26$. What is the IQR?

3) If actual = 45 and residual = $-3$, what was the predicted value?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '16', '48'],
        hint1: 'Sum = $20 \\\\times 4 = 80$. Known = $15+22+28 = 65$.',
        hint2: 'IQR = $Q_3 - Q_1$.',
        hint3: 'Residual = actual − predicted. So $-3 = 45 - \\\\text{predicted}$.',
        explanation: '1) $80 - 65 = 15$. 2) $26 - 10 = 16$. 3) Predicted = $45+3 = 48$.'
      }
    },
    {
      id: 'sat-ds7-mixed1',
      type: 'multiple-choice' as const,
      content: `
**Mixed SAT Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '500 adults surveyed: 320 support a policy. Margin of error ±4.5%. Valid conclusion?',
            options: [
              'Exactly 64% of all adults support the policy',
              'Between 59.5% and 68.5% likely support it',
              'The survey proves the policy is popular',
              'At most 64% support it'
            ],
            correctAnswer: 1,
            explanation: 'Sample proportion = $320/500 = 64\\\\%$. With ±4.5%, true value is likely between 59.5% and 68.5%.'
          },
          {
            question: 'Correlation between daily TV hours and GPA is $r = -0.65$. Best interpretation?',
            options: [
              'TV causes lower grades',
              '65% of GPA variation is explained by TV',
              'Moderately strong negative association between TV and GPA',
              'Reducing TV increases GPA by 0.65'
            ],
            correctAnswer: 2,
            explanation: '$r = -0.65$ shows a moderately strong negative **association** (not causation). $r^2 = 0.42$ (not 65%) would be explained variation.'
          }
        ]
      }
    },
    {
      id: 'sat-ds7-cheat-sheet',
      type: 'text' as const,
      content: `
**Quick Reference — SAT Statistics Cheat Sheet** 📝

| Concept | Key Formula/Fact |
|---------|-----------------|
| Mean | $\\\\bar{x} = \\\\sum x_i / n$ |
| Median | Middle value (sort first!) |
| SD effects | Add constant → no change. Multiply by $c$ → SD × $|c|$ |
| IQR | $Q_3 - Q_1$ |
| $P(A \\\\text{ or } B)$ | $P(A) + P(B) - P(A \\\\cap B)$ |
| $P(A \\\\text{ and } B)$ | $P(A) \\\\times P(B)$ if independent |
| $P(A|B)$ | $P(A \\\\cap B) / P(B)$ |
| Residual | actual − predicted |
| $r$ | Strength + direction of linear fit |
| $r^2$ | Fraction of variation explained |
| Causation | Only from randomized experiments |
| Margin of error | Decreases with $\\\\sqrt{n}$ |
      `
    },
    {
      id: 'sat-ds7-final',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A class of 25 has mean score 78. The lowest score (42) is removed. New mean?',
            options: [
              '79.5',
              '80.0',
              '79.0',
              '80.5'
            ],
            correctAnswer: 0,
            explanation: 'Original sum = $78 \\\\times 25 = 1950$. Remove 42 → new sum = $1908$. New mean = $1908/24 = 79.5$.'
          },
          {
            question: 'Line of best fit: $y = -0.4x + 85$. The point $(50, 62)$ has residual:',
            options: [
              '$-3$',
              '$3$',
              '$-5$',
              '$5$'
            ],
            correctAnswer: 0,
            explanation: 'Predicted: $-0.4(50)+85 = 65$. Residual = $62-65 = -3$ (below the line).'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part7.ts'), p7)
    print(f'  ✓ {slug}: 7 parts written')

# ============================================================================
# Run all writers
# ============================================================================
if __name__ == '__main__':
    write_sat_data_statistics()
    print("Done with SAT Data Statistics!")
