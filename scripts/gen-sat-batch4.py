#!/usr/bin/env python3
"""Generate SAT Prep Batch 4: Calculator Strategy (7), Problem Solving & Data (7),
Test Day Strategy (7), Word Problems (7) = 28 files."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        'src', 'data', 'interactive-lessons')

TOPICS = [
    # ── Calculator Strategy ──
    {
        'filename': 'sat-sat-calculator-strategy-sat-part{i}.ts',
        'export_prefix': 'satCalcStrategy',
        'topic_slug': 'sat-calculator-strategy-sat',
        'parts': [
            # Part 1 — When to Use Your Calculator
            {
                'sections': [
                    ('text', 'cs1-intro', """# Calculator Strategy: When to Use It

**Part 1 of 7 — Knowing When the Calculator Helps (and Hurts)**

The Digital SAT provides a built-in **Desmos graphing calculator** for the entire Math section. But using it on every problem wastes time.

### The 30-Second Rule

If a problem takes longer than **30 seconds** by hand, use the calculator. Otherwise, mental math is faster.

### Problems Where Calculator HELPS
- Systems of equations (graph both, find intersection)
- Quadratics that don't factor cleanly
- Problems with ugly arithmetic (large numbers, decimals)
- Checking your algebraic work
- Finding zeros of complex functions

### Problems Where Mental Math is FASTER
- Simple arithmetic (2/3 × 15 = 10)
- Factoring clean quadratics ($x^2 - 5x + 6$)
- Single-variable equations ($3x + 7 = 22$)
- Percent problems (20% of 80 = 16)
- Unit conversions with clean numbers

### Desmos Tip: Intersection
Type both equations, then click the intersection point to get exact coordinates — no algebra needed."""),
                    ('quiz', 'cs1-q1', {
                        'question': 'Which problem would benefit MOST from using the Desmos calculator?',
                        'options': [
                            'What is 3/4 of 120?',
                            'Factor x² - 9',
                            'Find where y = 2x² - 3x + 1 and y = x + 2 intersect',
                            'Solve 5x = 35',
                        ],
                        'correct': 2,
                        'explanation': 'The system with a quadratic and linear equation has non-integer solutions — graphing both in Desmos and clicking the intersection is much faster than solving algebraically.',
                    }),
                    ('quiz', 'cs1-q2', {
                        'question': 'A student uses the calculator for every problem. What is the likely consequence?',
                        'options': [
                            'They will get more answers correct',
                            'They will run out of time on harder problems',
                            'They will avoid all careless errors',
                            'The calculator will not work for some problems',
                        ],
                        'correct': 1,
                        'explanation': 'Using the calculator for simple problems like 3x = 15 wastes 20-30 seconds each. Over 22 Math questions, that adds up to minutes lost on harder problems that actually need more time.',
                    }),
                ],
            },
            # Part 2 — Desmos Graphing Basics
            {
                'sections': [
                    ('text', 'cs2-intro', """# Desmos Graphing Fundamentals

**Part 2 of 7 — Essential Desmos Skills for the SAT**

### Entering Equations
- Type equations directly: `y = 2x + 3`
- Use `^` for exponents: `y = x^2 - 4`
- Use `sqrt()` for square roots: `y = sqrt(x + 1)`
- Fractions: type `(2/3)x` or use the fraction template

### Finding Key Features
| What You Need | What to Do in Desmos |
|---|---|
| x-intercepts (zeros) | Graph the equation, click where it crosses x-axis |
| y-intercept | Look at where the graph crosses y-axis |
| Vertex of parabola | Click the minimum/maximum point |
| Intersection of two graphs | Enter both equations, click the intersection dot |

### The Table Feature
Click the equation number → "Table" to see exact x/y pairs. This is powerful for:
- Verifying which point satisfies an equation
- Finding a pattern in function values
- Checking if a point is on a line

### Sliders
If you type `y = ax + b`, Desmos creates sliders for `a` and `b`. This helps you:
- Match a graph to given constraints
- Understand how changing a coefficient affects the graph
- Find parameter values that satisfy conditions"""),
                    ('quiz', 'cs2-q1', {
                        'question': 'To find where two lines intersect using Desmos, you should:',
                        'options': [
                            'Enter one equation and use the table to guess',
                            'Enter both equations and click the intersection point',
                            'Solve by hand — Desmos cannot find intersections',
                            'Use the slider feature to match the lines',
                        ],
                        'correct': 1,
                        'explanation': 'Enter both equations (e.g., y = 2x + 1 and y = -x + 7) into Desmos. Where the graphs cross, a dot appears — click it to see the exact (x, y) coordinates.',
                    }),
                    ('quiz', 'cs2-q2', {
                        'question': 'You need to find the vertex of y = -2x² + 8x - 3. The fastest Desmos method is:',
                        'options': [
                            'Complete the square by hand',
                            'Use the -b/2a formula',
                            'Graph it and click the maximum point',
                            'Create a table and scan values',
                        ],
                        'correct': 2,
                        'explanation': 'Type y = -2x² + 8x - 3 into Desmos. Since a is negative, the parabola opens downward. Click the highest point to see the vertex coordinates (2, 5). This takes about 5 seconds.',
                    }),
                ],
            },
            # Part 3 — Systems of Equations with Desmos
            {
                'sections': [
                    ('text', 'cs3-intro', """# Solving Systems with Desmos

**Part 3 of 7 — Graphical Solutions to Systems**

### Why Desmos Excels at Systems
Algebraically solving systems can be tedious (substitution, elimination). Desmos finds the intersection in seconds.

### Method: Graph Both Equations
1. Enter equation 1: `y = 3x - 2`
2. Enter equation 2: `y = -x + 6`
3. Click the intersection dot → **(2, 4)**

### Systems with No Solution
If the lines are **parallel** (same slope, different y-intercept), there is no intersection. Desmos shows no dot — the graphs never touch.

### Systems with Infinite Solutions
If both equations represent the **same line**, they overlap completely. This happens when one equation is a multiple of the other.

### Non-Linear Systems
Desmos handles these effortlessly:
- Line + parabola → 0, 1, or 2 intersections
- Two parabolas → 0, 1, 2, 3, or 4 intersections
- Line + circle → 0, 1, or 2 intersections

### SAT Trap: "How many solutions?"
Instead of solving algebraically, graph both equations and **count the intersection points**. This is one of the biggest time-savers on the SAT."""),
                    ('quiz', 'cs3-q1', {
                        'question': 'The system y = x² and y = 4 has how many solutions? (Think graphically)',
                        'options': ['0', '1', '2', '4'],
                        'correct': 2,
                        'explanation': 'y = x² is a parabola opening upward, and y = 4 is a horizontal line. They intersect at two points: (2, 4) and (-2, 4). In Desmos you\'d see two intersection dots.',
                    }),
                    ('quiz', 'cs3-q2', {
                        'question': 'If you graph two linear equations in Desmos and see parallel lines, the system has:',
                        'options': [
                            'Exactly one solution',
                            'Exactly two solutions',
                            'No solution',
                            'Infinitely many solutions',
                        ],
                        'correct': 2,
                        'explanation': 'Parallel lines never intersect, so the system has no solution. On the SAT, this often means the answer is "no solution" or the problem asks you to find the slope/y-intercept that creates parallel lines.',
                    }),
                ],
            },
            # Part 4 — Inequalities and Restrictions
            {
                'sections': [
                    ('text', 'cs4-intro', """# Inequalities & Restrictions in Desmos

**Part 4 of 7 — Shading, Domains, and Constraints**

### Graphing Inequalities
Desmos shades the solution region automatically:
- `y > 2x + 1` → shades above the line
- `y ≤ -x + 3` → shades below and on the line
- Use `<`, `>`, `<=`, `>=` on your keyboard

### Systems of Inequalities
Enter multiple inequalities. The **overlapping shaded region** is the solution set. Desmos uses different colors for each, making the overlap visible.

### Domain Restrictions
Limit a function to certain x-values using braces:
- `y = x^2 {0 < x < 5}` → only shows parabola between x = 0 and x = 5
- `y = 2x + 1 {x >= 0}` → only shows the positive part

### Finding Integer Solutions
When the SAT asks "how many integer values of x satisfy both inequalities":
1. Graph both inequalities
2. Find the overlap region
3. Count the integer x-values within that region
4. The Desmos table feature helps verify specific integer points

### Absolute Value Inequalities
- `|x - 3| < 5` means the distance from 3 is less than 5
- Graph `y = |x - 3|` and `y = 5`, and identify where the V-shape is **below** the horizontal line"""),
                    ('quiz', 'cs4-q1', {
                        'question': 'To find the solution region of y ≥ x + 1 AND y < -2x + 8 in Desmos, you should:',
                        'options': [
                            'Solve the system algebraically first',
                            'Enter both inequalities and look for the overlapping shaded area',
                            'Graph only the boundary lines',
                            'Use the table to test random points',
                        ],
                        'correct': 1,
                        'explanation': 'Enter both inequalities in Desmos. Each will shade a region. The area where both shadings overlap is the solution set. You can then identify boundary points or count integer solutions.',
                    }),
                ],
            },
            # Part 5 — Regression and Data
            {
                'sections': [
                    ('text', 'cs5-intro', """# Regression & Data Analysis in Desmos

**Part 5 of 7 — Tables, Regression, and Curve Fitting**

### Entering Data Tables
Click "+" → "Table" in Desmos. Enter your x and y values. Desmos plots the points automatically.

### Linear Regression
After entering data points, type: `y₁ ~ mx₁ + b`

Desmos finds the best-fit line and gives you:
- **m** (slope) — the rate of change
- **b** (y-intercept) — starting value
- **r²** — how well the line fits (closer to 1 = better fit)

### When the SAT Gives You a Scatterplot
1. Enter the visible data points into a Desmos table
2. Run regression to find the equation
3. Use the equation to predict values or find the slope

### Exponential Regression
For data that curves: `y₁ ~ ab^(x₁)`
- Good for: population growth, compound interest, radioactive decay

### Quadratic Regression
For parabolic data: `y₁ ~ ax₁² + bx₁ + c`
- Good for: projectile motion, area problems, profit/revenue curves

### Residuals
A **residual** = actual value − predicted value. If residuals show a pattern (not random), the model is a poor fit."""),
                    ('quiz', 'cs5-q1', {
                        'question': 'In Desmos, after entering data points into a table, which expression creates a line of best fit?',
                        'options': [
                            'y = mx + b',
                            'y₁ ~ mx₁ + b',
                            'f(x) = ax + b',
                            'table(x, y)',
                        ],
                        'correct': 1,
                        'explanation': 'The tilde (~) tells Desmos to perform regression. y₁ ~ mx₁ + b finds the best-fit linear equation. Desmos then reports the values of m and b.',
                    }),
                ],
            },
            # Part 6 — Advanced Desmos Techniques
            {
                'sections': [
                    ('text', 'cs6-intro', """# Advanced Calculator Techniques

**Part 6 of 7 — Power Moves for the SAT**

### Technique 1: Plugging In Answer Choices
When stuck, enter each answer choice into Desmos and see which one satisfies the conditions. This is **backsolving** with technology.

### Technique 2: Function Notation
- Define `f(x) = x² - 3x + 2`
- Then evaluate: `f(5)` → Desmos gives 12
- Find: `f(a) = 0` → Desmos gives a = 1, 2

### Technique 3: Transformations
Graph `f(x) = x²`, then compare:
- `f(x) + 3` → shifts up 3
- `f(x - 2)` → shifts right 2
- `-f(x)` → reflects over x-axis
- `f(2x)` → horizontal compression

### Technique 4: Using Points to Find Equations
If a parabola passes through (0, 5), (1, 2), and (3, 8):
1. Type `y = ax² + bx + c`
2. Add restrictions: `(0, 5)`, `(1, 2)`, `(3, 8)` as points
3. Adjust sliders until the curve passes through all three

### Technique 5: Absolute Value Equations
Graph `y = |2x - 6|` and `y = 10`. Click intersections to find that x = -2 and x = 8."""),
                    ('quiz', 'cs6-q1', {
                        'question': 'If f(x) = x³ - 4x, what is the fastest way to find f(3) on the SAT?',
                        'options': [
                            'Compute 27 - 12 = 15 mentally',
                            'Graph y = x³ - 4x and use the table to find y when x = 3',
                            'Both are equally fast; choose based on comfort',
                            'Use substitution in the answer choices',
                        ],
                        'correct': 2,
                        'explanation': 'f(3) = 27 - 12 = 15 is quick mental math. Entering it into Desmos would take longer. For harder functions (like f(2.7)), the calculator wins. Choose the faster method for each problem.',
                    }),
                ],
            },
            # Part 7 — Timed Practice & Review
            {
                'sections': [
                    ('text', 'cs7-intro', """# Calculator Strategy Review & Timed Practice

**Part 7 of 7 — Putting It All Together**

### Decision Flowchart
1. **Read the problem** — What is it asking?
2. **Can I solve this in < 30 seconds by hand?** → Do it mentally
3. **Does it involve a system, graph, or ugly numbers?** → Use Desmos
4. **Am I stuck after 1 minute?** → Try graphing the scenario or backsolving with answer choices

### Speed Benchmarks
| Task | Target Time |
|---|---|
| Simple equation (3x + 5 = 20) | 10-15 seconds, no calculator |
| System of equations (graph method) | 20-30 seconds with Desmos |
| Quadratic zeros | 15-20 seconds if factorable, 20-30 seconds with Desmos |
| Regression from data | 30-45 seconds with Desmos |
| Graph analysis (vertex, intercepts) | 15-25 seconds with Desmos |

### Common Calculator Mistakes
- **Parentheses errors**: `2/3x` ≠ `(2/3)x` in Desmos
- **Not zooming**: The intersection might be off-screen — zoom out!
- **Over-reliance**: Don't use Desmos for 2 + 3
- **Forgetting to verify**: Calculator gives numbers, but does the answer make sense in context?"""),
                    ('quiz', 'cs7-q1', {
                        'question': 'A problem asks: "For what value of k does the system y = 3x + k and y = 3x - 5 have no solution?" The fastest approach is:',
                        'options': [
                            'Graph both in Desmos and adjust the slider for k',
                            'Recognize that both have slope 3, so they are parallel when k ≠ -5, meaning any k ≠ -5 gives no solution',
                            'Set 3x + k = 3x - 5 and solve for k',
                            'Substitute test values for k',
                        ],
                        'correct': 1,
                        'explanation': 'Both lines have slope 3 (parallel). They only overlap when k = -5 (same line). For ANY other value of k, the lines are parallel with no intersection. This is conceptual — no calculator needed. The answer is "any value except -5."',
                    }),
                    ('quiz', 'cs7-q2', {
                        'question': 'Which of these SAT Math problems would take the LONGEST to solve without a calculator?',
                        'options': [
                            'What is 15% of 200?',
                            'Find the intersection of y = x² - 3x + 1 and y = 2x - 3',
                            'Solve: 7x = 49',
                            'What is the slope of the line through (0, 3) and (4, 11)?',
                        ],
                        'correct': 1,
                        'explanation': 'Finding the intersection of a quadratic and a line requires setting x² - 3x + 1 = 2x - 3, solving x² - 5x + 4 = 0, factoring, and finding y-values. With Desmos, graph both and click — done in 10 seconds.',
                    }),
                ],
            },
        ],
    },
    # ── Problem Solving & Data Analysis ──
    {
        'filename': 'sat-sat-problem-solving-data-sat-part{i}.ts',
        'export_prefix': 'satProbSolvData',
        'topic_slug': 'sat-problem-solving-data-sat',
        'parts': [
            # Part 1 — Ratios, Rates, and Proportions
            {
                'sections': [
                    ('text', 'psd1-intro', """# Problem Solving: Ratios, Rates & Proportions

**Part 1 of 7 — Setting Up and Solving Proportions**

This is one of the most heavily tested topics on the SAT Math section. About 25-30% of Math questions fall under Problem Solving & Data Analysis.

### Ratios
A ratio compares two quantities: If a recipe uses 3 cups flour to 2 cups sugar, the ratio is **3:2** or **3/2**.

### Setting Up Proportions
**Cross-multiply** to solve:

$$\\frac{3}{5} = \\frac{x}{20} \\implies 3 \\times 20 = 5x \\implies x = 12$$

### Unit Rates
A unit rate has a denominator of 1:
- 240 miles in 4 hours → **60 mph**
- \\$45 for 3 shirts → **\\$15 per shirt**

### SAT Trap: Mixing Up Parts and Wholes
If the ratio of boys to girls is 3:5, there are **8 total parts** (not 5).
- Boys = 3/8 of total
- Girls = 5/8 of total

### Dimensional Analysis
Convert units by multiplying fractions:
$$60 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{1 \\text{ hour}}{60 \\text{ min}} = 1 \\frac{\\text{mile}}{\\text{min}}$$"""),
                    ('quiz', 'psd1-q1', {
                        'question': 'In a class, the ratio of students who passed to those who failed is 7:3. If 40 students took the test, how many passed?',
                        'options': ['7', '21', '28', '30'],
                        'correct': 2,
                        'explanation': 'Total parts = 7 + 3 = 10. Students who passed = (7/10) × 40 = 28. Common trap: choosing 7 (just the ratio number) or 30 (confusing 7:3 with "7 out of 3").',
                    }),
                    ('quiz', 'psd1-q2', {
                        'question': 'A car travels 150 miles using 5 gallons of gas. At this rate, how many gallons are needed for 420 miles?',
                        'options': ['12', '14', '16', '84'],
                        'correct': 1,
                        'explanation': 'Unit rate = 150/5 = 30 mpg. Gallons needed = 420/30 = 14 gallons. Set up: 150/5 = 420/x → 150x = 2100 → x = 14.',
                    }),
                ],
            },
            # Part 2 — Percentages
            {
                'sections': [
                    ('text', 'psd2-intro', """# Percentages: Increase, Decrease & Applications

**Part 2 of 7 — Mastering Percent Problems**

### Percent Formula
$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$

### Percent Increase/Decrease
$$\\text{% Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$

**Shortcut multipliers:**
- 20% increase → multiply by **1.20**
- 15% decrease → multiply by **0.85**
- 8% tax → multiply by **1.08**

### Successive Percent Changes
A 10% increase followed by a 10% decrease is **NOT** back to the original:
$$100 \\xrightarrow{+10\\%} 110 \\xrightarrow{-10\\%} 99$$

### SAT Classic: "What percent of X is Y?"
Translate directly: "What percent of 80 is 24?"
$$\\frac{24}{80} \\times 100 = 30\\%$$

### Percent vs. Percentage Points
"Increased from 40% to 52%" = increase of **12 percentage points** but a **30% increase** (12/40 × 100)."""),
                    ('quiz', 'psd2-q1', {
                        'question': 'A store marks up a $40 item by 25%, then offers a 25% discount on the new price. What is the final price?',
                        'options': ['$40.00', '$37.50', '$42.50', '$50.00'],
                        'correct': 1,
                        'explanation': 'Markup: $40 × 1.25 = $50. Discount: $50 × 0.75 = $37.50. The final price is $37.50, NOT $40 — successive equal percent changes don\'t cancel out.',
                    }),
                ],
            },
            # Part 3 — Tables and Data
            {
                'sections': [
                    ('text', 'psd3-intro', """# Two-Way Tables & Data Interpretation

**Part 3 of 7 — Reading Tables and Finding Probabilities**

### Two-Way Tables
These organize data by two categories. Example:

|  | Freshman | Sophomore | Total |
|---|---|---|---|
| Male | 120 | 100 | 220 |
| Female | 130 | 150 | 280 |
| Total | 250 | 250 | 500 |

### Conditional Probability from Tables
"What fraction of sophomores are female?"
- Look at the **Sophomore column**: 150 female out of 250 total = 150/250 = **3/5**

### "Given that" = Restrict to a Subgroup
"Given that a student is male, what is the probability they are a freshman?"
- Restrict to Male row: 120 freshman out of 220 male = 120/220 = **6/11**

### Marginal vs. Conditional
- **Marginal**: P(Female) = 280/500 — uses the grand total
- **Conditional**: P(Female | Sophomore) = 150/250 — uses a column/row total

### Association vs. Independence
Two variables are **independent** if knowing one doesn't change the probability of the other.
- If P(Female) = P(Female | Sophomore), gender and class year are independent
- If those probabilities differ, there's an association"""),
                    ('quiz', 'psd3-q1', {
                        'question': 'Using the table: 120 male freshmen, 100 male sophomores, 130 female freshmen, 150 female sophomores (500 total). What is P(Freshman | Female)?',
                        'options': ['120/500', '130/500', '130/280', '250/500'],
                        'correct': 2,
                        'explanation': '"Given Female" means restrict to the Female row (total 280). Female freshmen = 130. So P(Freshman | Female) = 130/280 = 13/28.',
                    }),
                ],
            },
            # Part 4 — Statistics & Center/Spread
            {
                'sections': [
                    ('text', 'psd4-intro', """# Statistics: Center, Spread & Shape

**Part 4 of 7 — Mean, Median, Standard Deviation**

### Measures of Center
- **Mean** = sum of all values / count. Sensitive to outliers.
- **Median** = middle value when sorted. Resistant to outliers.

### When to Use Mean vs. Median
- **Symmetric data** → mean ≈ median, use either
- **Skewed data or outliers** → median is more representative

### Standard Deviation
Measures how spread out data is from the mean.
- **Low SD** → data points close to mean (consistent)
- **High SD** → data points far from mean (variable)

You **won't** calculate SD on the SAT, but you must **compare** SDs:
- {10, 10, 10, 10, 10} → SD = 0 (no spread)
- {8, 9, 10, 11, 12} → small SD
- {1, 3, 10, 17, 19} → large SD

### Effect of Adding/Removing Values
- Adding a value **equal to the mean** → mean unchanged, SD decreases
- Adding an **outlier** → mean shifts toward outlier, SD increases
- Removing an **outlier** → mean moves away from outlier, SD decreases

### Shape of Distributions
- **Right-skewed** (tail to right): mean > median
- **Left-skewed** (tail to left): mean < median
- **Symmetric**: mean ≈ median"""),
                    ('quiz', 'psd4-q1', {
                        'question': 'A dataset has values {2, 3, 3, 4, 4, 4, 5, 5, 100}. Which is the better measure of center?',
                        'options': [
                            'Mean, because it uses all values',
                            'Median, because the outlier 100 pulls the mean far from typical values',
                            'Mode, because 4 appears most often',
                            'Range, because it shows the full spread',
                        ],
                        'correct': 1,
                        'explanation': 'The outlier 100 drags the mean to about 14.4, but most values are 2-5. The median (4) better represents the typical value. On the SAT, when data has outliers, the median is usually the better measure.',
                    }),
                ],
            },
            # Part 5 — Scatterplots & Line of Best Fit
            {
                'sections': [
                    ('text', 'psd5-intro', """# Scatterplots & Line of Best Fit

**Part 5 of 7 — Interpreting Trends and Making Predictions**

### Reading Scatterplots
- **Positive association**: as x increases, y increases (upward trend)
- **Negative association**: as x increases, y decreases (downward trend)
- **No association**: no visible pattern

### Line/Curve of Best Fit
The line that minimizes the total distance from all points. Key interpretations:
- **Slope** = rate of change (For each 1-unit increase in x, y changes by [slope])
- **y-intercept** = predicted y-value when x = 0

### Making Predictions
Use the equation to predict values:
- If y = 2.3x + 15 models study hours vs. test score:
- 10 hours → predicted score: 2.3(10) + 15 = **38**

### Interpolation vs. Extrapolation
- **Interpolation** (within data range): reliable predictions
- **Extrapolation** (beyond data range): unreliable — the trend may not continue

### Residuals
Residual = actual – predicted
- **Positive residual**: actual is above the line
- **Negative residual**: actual is below the line
- Random residuals → good model
- Patterned residuals (curved) → wrong model type"""),
                    ('quiz', 'psd5-q1', {
                        'question': 'A scatterplot shows hours studied (x) vs. test score (y) with line of best fit y = 5.2x + 42. A student who studied 8 hours scored 90. What is the residual?',
                        'options': ['6.4', '-6.4', '48', '83.6'],
                        'correct': 0,
                        'explanation': 'Predicted score = 5.2(8) + 42 = 41.6 + 42 = 83.6. Actual score = 90. Residual = actual − predicted = 90 − 83.6 = 6.4. Positive residual means the student scored above the predicted value.',
                    }),
                ],
            },
            # Part 6 — Probability & Counting
            {
                'sections': [
                    ('text', 'psd6-intro', """# Probability & Counting

**Part 6 of 7 — SAT Probability Essentials**

### Basic Probability
$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

### Complement Rule
$$P(\\text{not A}) = 1 - P(A)$$

Often easier: "What's the probability of getting AT LEAST one?" = 1 − P(none).

### "Or" vs. "And"
- **P(A or B)** = P(A) + P(B) − P(A and B)
- **P(A and B)** for independent events = P(A) × P(B)

### SAT Probability Questions — Common Types
1. **From a table**: "A randomly selected student from the table above..."
2. **Cards/marbles**: "If 3 red and 5 blue marbles..."
3. **Surveys**: "Based on the survey results, what proportion..."

### Expected Value
If the SAT asks what value you'd "expect":
$$\\text{Expected} = \\text{Total} \\times P(\\text{event})$$

Example: 200 people surveyed, 35% prefer A → Expected = 200 × 0.35 = 70

### Relative Frequency
Just another word for proportion:
$$\\text{Relative frequency of A} = \\frac{\\text{count of A}}{\\text{total count}}$$"""),
                    ('quiz', 'psd6-q1', {
                        'question': 'A bag has 4 red, 6 blue, and 5 green marbles. What is the probability of NOT drawing a red marble?',
                        'options': ['4/15', '11/15', '6/15', '2/3'],
                        'correct': 1,
                        'explanation': 'P(red) = 4/15. P(not red) = 1 − 4/15 = 11/15. Alternatively: non-red marbles = 6 + 5 = 11, so P(not red) = 11/15.',
                    }),
                ],
            },
            # Part 7 — Review & Mixed Practice
            {
                'sections': [
                    ('text', 'psd7-intro', """# Problem Solving & Data Review

**Part 7 of 7 — Mixed Practice & Strategy**

### Topic Checklist
✓ Ratios, rates, proportions, and unit conversion
✓ Percent increase/decrease and successive changes
✓ Two-way tables and conditional probability
✓ Mean, median, standard deviation, and outliers
✓ Scatterplots, line of best fit, and residuals
✓ Probability, expected value, and counting

### SAT Strategy for This Section
1. **Read the question last** — scan the table/graph first to understand the data
2. **Identify what the denominators should be** — marginal vs. conditional probability
3. **Watch for traps**: part-to-part vs. part-to-whole ratios
4. **Use estimation** — if a scatterplot has a clear trend, estimate before calculating

### Common Mistakes
- Confusing "percent increase" with "percentage points"
- Using the wrong total for conditional probability
- Forgetting that percent change compounds (not additive)
- Extrapolating beyond the data range when the question asks for interpolation"""),
                    ('quiz', 'psd7-q1', {
                        'question': 'A population grows from 1,000 to 1,210 over 2 years with constant percent growth. What is the annual growth rate?',
                        'options': ['10%', '10.5%', '21%', '21.5%'],
                        'correct': 0,
                        'explanation': '1,000 × r² = 1,210 → r² = 1.21 → r = 1.1 → 10% annual growth. Check: 1,000 × 1.1 = 1,100. Then 1,100 × 1.1 = 1,210. ✓ Note: it\'s NOT 21%/2 = 10.5% — growth compounds.',
                    }),
                    ('quiz', 'psd7-q2', {
                        'question': 'In a two-way table, 60 out of 200 surveyed prefer Brand A. Of those 60, 45 are female. What is P(Female | Brand A)?',
                        'options': ['45/200', '60/200', '45/60', '45/140'],
                        'correct': 2,
                        'explanation': '"Given Brand A" restricts to the 60 who prefer Brand A. Of those, 45 are female. P(Female | Brand A) = 45/60 = 3/4 = 75%.',
                    }),
                ],
            },
        ],
    },
    # ── Test Day Strategy ──
    {
        'filename': 'sat-sat-test-day-strategy-sat-part{i}.ts',
        'export_prefix': 'satTestDayStrategy',
        'topic_slug': 'sat-test-day-strategy-sat',
        'parts': [
            # Part 1 — Digital SAT Format
            {
                'sections': [
                    ('text', 'tds1-intro', """# Digital SAT: Format & Structure

**Part 1 of 7 — Know What You're Walking Into**

### The Digital SAT Format (2024+)
| Section | Modules | Questions | Time | Focus |
|---|---|---|---|---|
| Reading & Writing | 2 | 27 each (54 total) | 32 min each (64 min) | Comprehension, grammar, rhetoric |
| Math | 2 | 22 each (44 total) | 35 min each (70 min) | Algebra, geometry, problem solving |
| **Total** | **4** | **98** | **134 min** | |

### Adaptive Testing
- **Module 1** = mix of easy, medium, hard questions
- **Module 2** = difficulty adjusts based on Module 1 performance
  - Did well on Module 1? → Module 2 is harder (higher score ceiling)
  - Struggled on Module 1? → Module 2 is easier (lower score ceiling)

### What This Means for You
- **Every Module 1 question matters** — it determines your Module 2 difficulty
- Module 2 hard = access to 600-800 range per section
- Module 2 easy = score capped around 200-500 per section

### Scoring
- R&W: 200-800
- Math: 200-800
- **Total: 400-1600**

### Built-in Tools
- Desmos graphing calculator (all Math questions)
- Highlight & annotate (R&W passages)
- Mark for review (flag questions to return to within a module)
- Timer (always visible)"""),
                    ('quiz', 'tds1-q1', {
                        'question': 'On the Digital SAT, if you perform well on Math Module 1, what happens?',
                        'options': [
                            'You skip Module 2',
                            'Module 2 becomes harder, giving access to higher scores',
                            'Module 2 stays the same difficulty',
                            'You get extra time on Module 2',
                        ],
                        'correct': 1,
                        'explanation': 'The Digital SAT is adaptive: strong Module 1 performance unlocks a harder Module 2, which has questions that can push your score to 700-800. A weaker Module 1 leads to an easier Module 2 with a lower score ceiling.',
                    }),
                ],
            },
            # Part 2 — Time Management
            {
                'sections': [
                    ('text', 'tds2-intro', """# Time Management on the Digital SAT

**Part 2 of 7 — Pace Yourself for Maximum Score**

### Time Per Question
| Section | Time | Questions | Per Question |
|---|---|---|---|
| R&W Module | 32 min | 27 Qs | ~71 seconds |
| Math Module | 35 min | 22 Qs | ~95 seconds |

### The Two-Pass Strategy
**Pass 1 (first ~60% of time):** Answer every question you can solve quickly. Skip any question that takes more than 90 seconds.

**Pass 2 (remaining ~40% of time):** Return to flagged/skipped questions. By now you've banked time from the easy ones.

### Flagging Strategy
- **Flag and move on** if you've spent 90+ seconds without progress
- **Flag and answer** — always put SOMETHING down before moving on (no penalty for wrong answers)
- Return to flagged questions with fresh eyes

### The Last 2 Minutes
- Scan for any unanswered questions
- Verify you haven't misread any questions
- Don't change answers unless you're genuinely sure

### Common Time Traps
- Re-reading a passage 3+ times (limit to 2 reads max)
- Doing algebra when Desmos would be faster
- Second-guessing your first instinct
- Spending 3+ minutes on one question while easy ones wait"""),
                    ('quiz', 'tds2-q1', {
                        'question': 'You have been working on a Math question for 2 minutes with no clear path forward. What should you do?',
                        'options': [
                            'Keep working — you are close',
                            'Flag it, put your best guess, and move on to easier questions',
                            'Skip it entirely and leave it blank',
                            'Start over with a completely different approach',
                        ],
                        'correct': 1,
                        'explanation': 'After 2 minutes, the opportunity cost is high — easier questions are waiting. Flag it for review, select your best guess (no penalty for guessing), and come back with fresh eyes if time permits.',
                    }),
                ],
            },
            # Part 3 — R&W Strategy
            {
                'sections': [
                    ('text', 'tds3-intro', """# R&W Section Strategy

**Part 3 of 7 — Approaching Reading & Writing Questions**

### Digital SAT R&W Format
Each question is a **short passage** (1-2 paragraphs) followed by **one question**. This is different from the old SAT (long passages, 10-11 questions each).

### The SAT R&W Reading Order
1. **Read the question stem first** — know what you're looking for
2. **Read the passage** with purpose — underline/highlight relevant text
3. **Answer before looking at choices** — form your own answer
4. **Eliminate wrong answers** — cross out choices that don't match

### Question Type Strategy

**Vocabulary in Context** (~6 per module):
- Substitute each answer choice into the sentence
- Pick the one that preserves the original meaning

**Central Ideas** (~4 per module):
- Main point, not a specific detail
- Too narrow or too broad = wrong

**Command of Evidence** (~4 per module):
- Which quote/data best supports the claim?
- Match the evidence to the specific claim, not the general topic

**Grammar & Conventions** (~5 per module):
- Trust your ear first, then apply rules
- Subject-verb agreement, punctuation, and pronoun clarity are most common

**Rhetoric/Expression** (~4 per module):
- Which choice best accomplishes the stated goal?
- Focus on the PURPOSE stated in the question"""),
                    ('quiz', 'tds3-q1', {
                        'question': 'The most effective approach to SAT R&W questions is:',
                        'options': [
                            'Read the passage carefully, then read all answer choices, then reread the passage',
                            'Read the question stem first, then read the passage with purpose, then eliminate wrong answers',
                            'Skim the passage quickly, pick the answer that sounds best',
                            'Read all answer choices first, then find supporting evidence in the passage',
                        ],
                        'correct': 1,
                        'explanation': 'Reading the question first gives you a target — you know what to look for in the passage. This focused reading is faster and more accurate than reading the passage "cold" without knowing the question.',
                    }),
                ],
            },
            # Part 4 — Math Strategy
            {
                'sections': [
                    ('text', 'tds4-intro', """# Math Section Strategy

**Part 4 of 7 — Maximizing Your Math Score**

### The 4 Math Question Types
1. **Algebra** (~35%): Linear equations, systems, inequalities, functions
2. **Advanced Math** (~35%): Quadratics, polynomials, exponentials, rational functions
3. **Problem Solving & Data** (~15%): Ratios, percents, probability, statistics
4. **Geometry & Trig** (~15%): Area, volume, angles, right triangles, trig

### Problem-Solving Approaches (in order of preference)
1. **Direct solve** — set up equation and solve
2. **Backsolve** — plug in answer choices to see which works
3. **Pick numbers** — substitute simple values for variables
4. **Desmos** — graph it and find the answer visually

### When to Backsolve
Best for: "Which value of x satisfies..." or when answer choices are simple numbers.
1. Start with choice B or C (middle value)
2. If too big/small, you know which direction to go
3. Often faster than algebraic manipulation

### When to Pick Numbers
Best for: Problems with variables in the answer choices.
1. Choose simple numbers (x = 2, y = 3 — avoid 0 and 1)
2. Calculate the answer with your numbers
3. Plug the same numbers into each answer choice
4. Only ONE choice will match

### Grid-In (Student-Produced Response)
- ~25% of Math questions are grid-in (type your answer)
- **No negative answers** on grid-in
- Fractions and decimals both accepted
- If you get a range, give any value in the range"""),
                    ('quiz', 'tds4-q1', {
                        'question': 'For a problem that says "If 2x + 3 = ax + 6 has no solution, what is a?" — what approach is fastest?',
                        'options': [
                            'Backsolve with answer choices',
                            'Recognize that no solution means same slope, different constant → a = 2',
                            'Graph both sides in Desmos',
                            'Pick a number for x and test',
                        ],
                        'correct': 1,
                        'explanation': 'For a linear equation to have no solution, the coefficients of x must be equal (parallel lines) but the constants must differ. So a = 2 (matching the coefficient of x on the left). This takes 5 seconds — no calculation needed.',
                    }),
                ],
            },
            # Part 5 — Answer Elimination
            {
                'sections': [
                    ('text', 'tds5-intro', """# Strategic Elimination & Guessing

**Part 5 of 7 — When You're Stuck**

### Process of Elimination (POE)
Even if you can't find the right answer, you can often eliminate 2-3 wrong ones:

**Math POE:**
- Estimate — if the answer should be about 50, eliminate 5 and 500
- Check units — answer needs to be in meters? Eliminate non-meter options
- Check sign — expecting a positive answer? Eliminate negatives
- Reasonableness — can a person be 50 feet tall? No.

**R&W POE:**
- **Too extreme** — words like "always", "never", "completely" are usually wrong
- **Half-right** — the choice starts correctly but ends with something unsupported
- **Out of scope** — the choice discusses something the passage never mentions
- **Opposite** — the choice says the opposite of what the passage states

### Guessing Strategy
**There is NO penalty for guessing on the Digital SAT.** Never leave a question blank.

If you can eliminate:
- 0 choices: 25% chance of guessing correctly (still guess!)
- 1 choice: 33% chance
- 2 choices: 50% chance
- 3 choices: 100% (it's the remaining one)

### "Letter of the Day"
If you must guess randomly on multiple questions, pick the same letter for all of them. Statistically, you'll get about 25% right (same as random, but faster)."""),
                    ('quiz', 'tds5-q1', {
                        'question': 'On the Digital SAT, if you cannot solve a problem and have 15 seconds left in the module, you should:',
                        'options': [
                            'Leave it blank — wrong answers are penalized',
                            'Guess randomly — there is no penalty for wrong answers',
                            'Choose the longest answer — it is usually correct',
                            'Choose A — it is the most common correct answer',
                        ],
                        'correct': 1,
                        'explanation': 'The Digital SAT has NO wrong-answer penalty. Always guess rather than leaving a question blank. Even a random guess gives you a 25% chance. If you can eliminate even one choice, your odds improve to 33%.',
                    }),
                ],
            },
            # Part 6 — Week Before the Test
            {
                'sections': [
                    ('text', 'tds6-intro', """# The Week Before Test Day

**Part 6 of 7 — Final Preparation Checklist**

### 7 Days Before
- [ ] Take one final full-length practice test under real conditions
- [ ] Review your error log — focus on patterns, not individual questions
- [ ] Confirm your test center and registration

### 3-4 Days Before
- [ ] Light review only — flashcards, formula sheets, key concepts
- [ ] **No new material** — this is reinforcement, not learning
- [ ] Get your sleep schedule aligned (wake at test-day time)

### Night Before
- [ ] Lay out everything: ID, admission ticket, charger, snacks
- [ ] Check that your Bluebook app is installed and updated on your device
- [ ] Light review (15-20 min max), then relax
- [ ] **Sleep 8+ hours** — sleep is more valuable than last-minute cramming

### Morning of Test
- [ ] Eat a balanced breakfast (protein + complex carbs — eggs, oatmeal, banana)
- [ ] Arrive 30 minutes early
- [ ] Bring fully charged device + charger
- [ ] Bring snacks for the break (granola bar, water)

### What NOT To Do
- ❌ Cram the night before (diminishing returns)
- ❌ Try to learn new concepts (too late for that)
- ❌ Stay up late studying (sleep deprivation costs ~100 points)
- ❌ Change your routine (eat what you normally eat)"""),
                    ('quiz', 'tds6-q1', {
                        'question': 'Research shows that pulling an all-nighter before the SAT will most likely:',
                        'options': [
                            'Improve your score by ~50 points due to extra review',
                            'Have no significant effect on performance',
                            'Decrease your score due to impaired focus, memory, and processing speed',
                            'Help with Reading but hurt Math performance',
                        ],
                        'correct': 2,
                        'explanation': 'Sleep deprivation impairs working memory, processing speed, and focus — all critical for SAT performance. Studies suggest sleep loss can reduce cognitive performance by 20-25%. A full night\'s sleep is worth more than any last-minute studying.',
                    }),
                ],
            },
            # Part 7 — During the Test
            {
                'sections': [
                    ('text', 'tds7-intro', """# During the Test: Mindset & Tactics

**Part 7 of 7 — Performing Your Best on Test Day**

### Mindset Strategies
- **"Next play" mentality** — if a question was hard, forget it. The next question is a fresh opportunity.
- **Confidence calibration** — trust your preparation. You've practiced this.
- **Anxiety is normal** — some nervousness improves performance. Deep breaths if it gets overwhelming.

### During Each Module
1. **First pass (Minutes 1-20):** Work through questions in order. Flag anything that takes >90 seconds.
2. **Second pass (Minutes 20-30):** Return to flagged questions with fresh perspective.
3. **Final check (Last 2-3 minutes):** Scan for unanswered questions and obvious errors.

### The Break
- You get a **10-minute break** between R&W and Math
- Eat your snack, drink water, use the restroom
- **Do NOT discuss questions** with other test-takers (it only causes anxiety)
- Light stretching or deep breathing to reset

### If You're Running Out of Time
- Answer every remaining question (guess if needed)
- Focus on questions you've already started
- Don't start a new complex question with 30 seconds left — guess and move on

### After the Test
- **Scores arrive in ~2 weeks**
- You can take the SAT **up to 7 times** (most colleges see your best score)
- If you feel bad about a section, remember: the adaptive scoring may have given you harder questions because you did well on Module 1"""),
                    ('quiz', 'tds7-q1', {
                        'question': 'During a Math module, you have 5 minutes left and 4 questions remaining. What is the best strategy?',
                        'options': [
                            'Spend 5 minutes on the hardest one — it is worth the most points',
                            'Quickly attempt each, putting your best guess for any you cannot solve in ~1 minute',
                            'Guess on all 4 and use the time to double-check earlier answers',
                            'Skip them all — they are probably too hard',
                        ],
                        'correct': 1,
                        'explanation': 'With ~75 seconds per question, quickly attempt each one. Some may be easier than they look. If you cannot solve one in 60 seconds, make an educated guess and move to the next. Every question is worth the same — don\'t leave any blank.',
                    }),
                ],
            },
        ],
    },
    # ── Word Problems ──
    {
        'filename': 'sat-sat-word-problems-sat-part{i}.ts',
        'export_prefix': 'satWordProblems',
        'topic_slug': 'sat-word-problems-sat',
        'parts': [
            # Part 1 — Translating Words to Equations
            {
                'sections': [
                    ('text', 'wp1-intro', """# Word Problems: Translating Words to Math

**Part 1 of 7 — Building Equations from Descriptions**

### Translation Guide
| English | Math |
|---|---|
| "is", "equals", "was" | = |
| "more than", "increased by", "sum" | + |
| "less than", "decreased by", "fewer" | − |
| "times", "of", "product" | × |
| "per", "each", "ratio of" | ÷ |
| "what number", "a number" | x (or another variable) |

### Common Sentence Patterns
**"5 more than twice a number is 17"**
$$2x + 5 = 17 \\implies x = 6$$

**"The product of 3 and a number, decreased by 7, equals 14"**
$$3x - 7 = 14 \\implies x = 7$$

### SAT Trap: "Less Than" Order
"5 less than x" = $x - 5$ (NOT $5 - x$)

"3 less than twice a number" = $2x - 3$ (NOT $3 - 2x$)

### Defining Variables
Always state what your variable represents:
- Let $x$ = number of adult tickets
- Let $y$ = number of child tickets
- This prevents confusion in multi-step problems"""),
                    ('quiz', 'wp1-q1', {
                        'question': '"Six more than three times a number is 27." What equation represents this?',
                        'options': [
                            '6(3x) = 27',
                            '3x + 6 = 27',
                            '3x - 6 = 27',
                            '6x + 3 = 27',
                        ],
                        'correct': 1,
                        'explanation': '"Three times a number" = 3x. "Six more than" = + 6. "Is" = equals. So: 3x + 6 = 27. Solving: 3x = 21, x = 7.',
                    }),
                    ('quiz', 'wp1-q2', {
                        'question': '"8 less than the product of 4 and y" translates to:',
                        'options': ['8 - 4y', '4y - 8', '4(y - 8)', '8(4 - y)'],
                        'correct': 1,
                        'explanation': '"Product of 4 and y" = 4y. "8 less than [something]" = [something] − 8 = 4y − 8. Remember: "less than" reverses the order — you subtract FROM the first quantity.',
                    }),
                ],
            },
            # Part 2 — Age Problems & Number Problems
            {
                'sections': [
                    ('text', 'wp2-intro', """# Age Problems & Number Problems

**Part 2 of 7 — Classic SAT Word Problem Types**

### Age Problems Strategy
1. Define variables for **current** ages
2. Write expressions for past/future ages
3. Set up an equation from the given relationship

**Example:** "Maria is 3 times as old as her son. In 12 years, she will be twice as old as him."
- Let son's current age = $s$, Maria's current age = $3s$
- In 12 years: son = $s + 12$, Maria = $3s + 12$
- Equation: $3s + 12 = 2(s + 12)$
- Solve: $3s + 12 = 2s + 24 \\implies s = 12$
- Son is 12, Maria is 36. Check: In 12 years → 24 and 48. 48 = 2(24) ✓

### Number Problems
**Consecutive integers:** $n, n+1, n+2$
**Consecutive even/odd:** $n, n+2, n+4$

**Example:** "The sum of 3 consecutive integers is 72."
$n + (n+1) + (n+2) = 72 \\implies 3n + 3 = 72 \\implies n = 23$
The integers are 23, 24, 25.

### Digit Problems
A two-digit number with tens digit $t$ and units digit $u$ has value $10t + u$.
"Reversing the digits" gives $10u + t$."""),
                    ('quiz', 'wp2-q1', {
                        'question': 'A father is 4 times as old as his daughter. In 20 years, he will be twice her age. How old is the daughter now?',
                        'options': ['5', '8', '10', '12'],
                        'correct': 2,
                        'explanation': 'Let daughter = d, father = 4d. In 20 years: 4d + 20 = 2(d + 20). Simplify: 4d + 20 = 2d + 40 → 2d = 20 → d = 10. Check: Father is 40. In 20 years: 30 and 60. 60 = 2(30) ✓',
                    }),
                ],
            },
            # Part 3 — Rate, Distance, Time
            {
                'sections': [
                    ('text', 'wp3-intro', """# Rate × Time = Distance

**Part 3 of 7 — Motion & Work Problems**

### The Core Formula
$$\\text{Distance} = \\text{Rate} \\times \\text{Time} \\quad (d = rt)$$

Rearranged: $r = d/t$ and $t = d/r$

### Same Direction Problems
Two objects starting at the same point, going the same way:
- The faster one gets farther ahead over time
- Gap = (faster speed − slower speed) × time

### Opposite Direction Problems
Two objects starting at the same point, going opposite directions:
- **Combined rate** = speed₁ + speed₂
- Total distance apart = combined rate × time

### Meeting Problems
Two objects starting at different points, moving toward each other:
- They cover the distance between them at a **combined rate**
- Time to meet = total distance ÷ (speed₁ + speed₂)

**Example:** City A and B are 300 miles apart. Train 1 leaves A at 60 mph, Train 2 leaves B at 40 mph. When do they meet?
- Combined rate = 60 + 40 = 100 mph
- Time = 300/100 = **3 hours**

### Round Trip Problems
- Average speed for a round trip ≠ average of the two speeds
- Use: average speed = total distance / total time"""),
                    ('quiz', 'wp3-q1', {
                        'question': 'A cyclist rides 20 miles at 10 mph, then rides back the same route at 20 mph. What is the average speed for the round trip?',
                        'options': ['15 mph', '13.3 mph', '12 mph', '14 mph'],
                        'correct': 1,
                        'explanation': 'Total distance = 20 + 20 = 40 miles. Time out = 20/10 = 2 hours. Time back = 20/20 = 1 hour. Total time = 3 hours. Average speed = 40/3 ≈ 13.3 mph. Note: this is NOT (10+20)/2 = 15.',
                    }),
                ],
            },
            # Part 4 — Mixture and Cost Problems
            {
                'sections': [
                    ('text', 'wp4-intro', """# Mixture & Cost Problems

**Part 4 of 7 — Combining Values Strategically**

### Mixture Framework
$$\\text{amount₁ × concentration₁} + \\text{amount₂ × concentration₂} = \\text{total amount × final concentration}$$

**Example:** How many liters of 30% acid should be mixed with 10 L of 60% acid to get a 50% solution?
- Let $x$ = liters of 30% acid
- $0.30x + 0.60(10) = 0.50(x + 10)$
- $0.30x + 6 = 0.50x + 5$
- $1 = 0.20x$
- $x = 5$ liters

### Cost/Revenue Problems
**Revenue** = price × quantity
**Profit** = revenue − cost

**Example:** Adult tickets cost \\$12, child tickets cost \\$8. 200 tickets sold for \\$2,000 total.
- Let $a$ = adult tickets: $a + c = 200$ and $12a + 8c = 2000$
- From first equation: $c = 200 - a$
- $12a + 8(200 - a) = 2000$
- $12a + 1600 - 8a = 2000$
- $4a = 400 → a = 100$ adults, $c = 100$ children

### Weighted Average
$$\\text{Weighted avg} = \\frac{\\sum (\\text{value × weight})}{\\sum \\text{weights}}$$"""),
                    ('quiz', 'wp4-q1', {
                        'question': 'A store sells pens for $2 and notebooks for $5. If 50 items are sold for $175 total, how many pens were sold?',
                        'options': ['15', '25', '30', '35'],
                        'correct': 1,
                        'explanation': 'Let p = pens, n = notebooks. p + n = 50 and 2p + 5n = 175. From first: n = 50 − p. Substitute: 2p + 5(50 − p) = 175 → 2p + 250 − 5p = 175 → −3p = −75 → p = 25.',
                    }),
                ],
            },
            # Part 5 — Growth and Decay
            {
                'sections': [
                    ('text', 'wp5-intro', """# Growth & Decay Word Problems

**Part 5 of 7 — Exponential Models in Context**

### Exponential Growth Formula
$$A = A_0(1 + r)^t$$
- $A_0$ = initial amount
- $r$ = growth rate (as decimal)
- $t$ = time periods

### Exponential Decay Formula
$$A = A_0(1 - r)^t$$

### Compound Interest
$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$
- $P$ = principal, $r$ = annual rate, $n$ = compounds per year, $t$ = years

### Population Growth
"A town of 5,000 grows 3% per year. Population after 10 years?"
$$A = 5000(1.03)^{10} \\approx 6,720$$

### Depreciation
"A car worth \\$25,000 loses 15% of its value each year. Value after 4 years?"
$$V = 25000(0.85)^4 \\approx \\$13,050$$

### Half-Life
"A substance has a half-life of 6 hours. Starting with 200g, how much remains after 18 hours?"
- 18 hours = 3 half-lives
- $200 \\times (0.5)^3 = 200 \\times 0.125 = 25$ grams

### SAT Tip: Identifying Growth/Decay
- Multiplier > 1 → growth (e.g., 1.05 = 5% growth)
- Multiplier between 0 and 1 → decay (e.g., 0.85 = 15% decay)"""),
                    ('quiz', 'wp5-q1', {
                        'question': 'A bacteria population doubles every 3 hours. Starting with 500, how many are there after 12 hours?',
                        'options': ['2,000', '4,000', '6,000', '8,000'],
                        'correct': 3,
                        'explanation': '12 hours ÷ 3 hours = 4 doubling periods. 500 × 2⁴ = 500 × 16 = 8,000. Each doubling: 500 → 1,000 → 2,000 → 4,000 → 8,000.',
                    }),
                ],
            },
            # Part 6 — Geometry Word Problems
            {
                'sections': [
                    ('text', 'wp6-intro', """# Geometry in Word Problems

**Part 6 of 7 — Area, Perimeter, and Volume in Context**

### Area and Perimeter
**"A garden's length is 3 feet more than twice its width. Its perimeter is 48 feet."**
- Width = $w$, Length = $2w + 3$
- $2(w) + 2(2w + 3) = 48$
- $2w + 4w + 6 = 48 → 6w = 42 → w = 7$
- Width = 7 ft, Length = 17 ft

### Volume Problems
**Cylinder:** $V = \\pi r^2 h$
**Box:** $V = lwh$

"A cylindrical tank with radius 4 feet is being filled at 2 cubic feet per minute. How long to fill it to a height of 10 feet?"
- Volume = $\\pi(4)^2(10) = 160\\pi \\approx 502.7$ cubic feet
- Time = $502.7 / 2 ≈ 251$ minutes

### Similar Figures
If two figures are similar with scale factor $k$:
- Lengths scale by $k$
- Areas scale by $k^2$
- Volumes scale by $k^3$

**Example:** A model building is 1/50 scale. If the model's area is 2 ft², the real building's area = $2 \\times 50^2 = 5,000$ ft²

### The Pythagorean Theorem in Context
Ladder problems, diagonal walks, line-of-sight distances — always draw a right triangle."""),
                    ('quiz', 'wp6-q1', {
                        'question': 'A photo is enlarged so each dimension is tripled. How does the area change?',
                        'options': [
                            'It triples',
                            'It increases by a factor of 6',
                            'It increases by a factor of 9',
                            'It increases by a factor of 27',
                        ],
                        'correct': 2,
                        'explanation': 'When dimensions are multiplied by k, area is multiplied by k². Since k = 3, area increases by 3² = 9. If the original was 4 × 6 = 24, the enlarged is 12 × 18 = 216 = 24 × 9.',
                    }),
                ],
            },
            # Part 7 — Review & Mixed Practice
            {
                'sections': [
                    ('text', 'wp7-intro', """# Word Problem Review & Strategy

**Part 7 of 7 — Putting It All Together**

### The 4-Step Word Problem Method
1. **Read twice** — first for understanding, second for details
2. **Define variables** — write "Let x = ..."
3. **Build the equation** — translate sentence by sentence
4. **Solve and CHECK** — does your answer make sense in context?

### Common SAT Word Problem Traps
| Trap | Example |
|---|---|
| Answering the wrong question | "How old will she be in 5 years?" (don't give current age) |
| Wrong units | Found hours but need minutes → multiply by 60 |
| Negative/impossible answers | A length can't be -3 feet |
| "Less than" order | "5 less than x" is x - 5, not 5 - x |

### When to Use Each Strategy
| Problem Type | Best Approach |
|---|---|
| Linear relationship in context | Set up equation, solve |
| Exponential growth/decay | Identify base, exponent, plug into formula |
| System of two unknowns | Two equations, two variables |
| Rate/distance/time | d = rt, possibly combined rates |
| "How many integers..." | Inequality, count values |"""),
                    ('quiz', 'wp7-q1', {
                        'question': 'A phone plan costs $30/month plus $0.10 per text. Another plan costs $50/month with unlimited texts. How many texts make the plans equal?',
                        'options': ['100', '150', '200', '300'],
                        'correct': 2,
                        'explanation': 'Set costs equal: 30 + 0.10t = 50. Solve: 0.10t = 20 → t = 200 texts. Below 200 texts, the first plan is cheaper. Above 200, the unlimited plan wins.',
                    }),
                    ('quiz', 'wp7-q2', {
                        'question': 'A pool is being filled at 3 gallons/min and drained at 1 gallon/min simultaneously. If it holds 400 gallons, how long until it is full?',
                        'options': ['100 min', '133 min', '200 min', '400 min'],
                        'correct': 2,
                        'explanation': 'Net fill rate = 3 − 1 = 2 gallons/min. Time = 400/2 = 200 minutes. The drain slows the filling, so it takes longer than 400/3 ≈ 133 minutes.',
                    }),
                ],
            },
        ],
    },
]


def section_to_ts(sec):
    kind, sid, data = sec
    if kind == 'text':
        return (
            "    {\n"
            "      id: '" + sid + "',\n"
            "      type: 'text' as const,\n"
            "      content: `" + data + "`\n"
            "    }"
        )
    else:  # quiz
        q = data['question'].replace("'", "\\'")
        expl = data['explanation'].replace("'", "\\'")
        opts = ',\n'.join("        '" + o.replace("'", "\\'") + "'" for o in data['options'])
        return (
            "    {\n"
            "      id: '" + sid + "',\n"
            "      type: 'quiz' as const,\n"
            "      question: '" + q + "',\n"
            "      options: [\n" + opts + "\n"
            "      ],\n"
            "      correctAnswer: " + str(data['correct']) + ",\n"
            "      explanation: '" + expl + "'\n"
            "    }"
        )


def write_topic(topic):
    count = 0
    for i, part in enumerate(topic['parts'], 1):
        fname = topic['filename'].format(i=i)
        export = f"{topic['export_prefix']}Part{i}Data"
        secs = ',\n'.join(section_to_ts(s) for s in part['sections'])
        content = f"""export const {export} = {{
  topicSlug: '{topic["topic_slug"]}',
  sections: [
{secs}
  ]
}};
"""
        path = os.path.join(BASE_DIR, fname)
        with open(path, 'w') as f:
            f.write(content)
        print(f'  Written: {fname}')
        count += 1
    return count


def main():
    total = 0
    for topic in TOPICS:
        total += write_topic(topic)
    print(f'\nDone! {total} files written.')


if __name__ == '__main__':
    main()
