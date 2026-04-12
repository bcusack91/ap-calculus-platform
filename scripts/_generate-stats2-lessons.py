#!/usr/bin/env python3
"""Generate 8 new AP Statistics lesson files (Topics 12-19)."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'discrete-random-variables-apstats',
        'filePrefix': 'apstats-discrete-random-variables',
        'exportPrefix': 'apStatsDiscreteRV',
        'parts': [
            {
                'title': 'Probability Distributions',
                'content': """# \U0001f3b2 Discrete Random Variables

**Part 1 of 7 \u2014 Probability Distributions**

---

### What Is a Random Variable?

A **random variable** assigns a numerical value to each outcome of a random process.

| Type | Values | Examples |
|------|--------|---------|
| **Discrete** | Countable (finite or countably infinite) | Number of heads in 10 flips, dice roll |
| **Continuous** | Any value in an interval | Height, weight, time |

> \U0001f511 **Key Idea:** A discrete random variable has a **probability distribution** that lists every possible value and its probability.

---

### Probability Distribution Table

| $X$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X)$ | 0.1 | 0.3 | 0.4 | 0.2 |

**Requirements:**
- Every probability is between 0 and 1: $0 \\\\leq P(X = x) \\\\leq 1$
- All probabilities sum to 1: $\\\\sum P(X = x) = 1$

---

### Reading the Table

From the table above:
- $P(X = 2) = 0.4$
- $P(X \\\\geq 2) = P(X=2) + P(X=3) = 0.4 + 0.2 = 0.6$
- $P(X < 2) = P(X=0) + P(X=1) = 0.1 + 0.3 = 0.4$""",
                'mcqs': [
                    ('A valid probability distribution must have probabilities that sum to:',
                     ['0', '1', '0.5', 'It depends on the variable'],
                     1, 'The total probability across all outcomes must equal 1.'),
                    ('If $P(X=1) = 0.3$, $P(X=2) = 0.4$, and $P(X=3) = 0.2$, then $P(X=0)$ equals:',
                     ['0', '0.1', '0.3', 'Cannot be determined'],
                     1, '$P(X=0) = 1 - 0.3 - 0.4 - 0.2 = 0.1$.'),
                    ('A discrete random variable can take:',
                     ['Any value in an interval', 'Only countable values', 'Only positive values', 'Only integer values'],
                     1, 'Discrete = countable number of possible values (though often integers on the AP exam).')
                ],
                'inputs': {
                    'prompt': """**Probability Distribution Practice** \U0001f9ee

Given: $P(X=1) = 0.25$, $P(X=2) = 0.35$, $P(X=3) = 0.30$, $P(X=4) = 0.10$

**1)** $P(X \\\\leq 2)$?

**2)** $P(X > 2)$?

**3)** Do the probabilities sum to 1? (yes or no)""",
                    'boxes': 3,
                    'answers': ['0.60', '0.40', 'yes'],
                    'hints': ['$P(X=1) + P(X=2) = 0.25 + 0.35$', '$P(X=3) + P(X=4) = 0.30 + 0.10$', '$0.25 + 0.35 + 0.30 + 0.10 = 1.00$'],
                    'explanation': '1) 0.25 + 0.35 = 0.60. 2) 0.30 + 0.10 = 0.40. 3) Yes, they sum to 1.'
                }
            },
            {
                'title': 'Expected Value',
                'content': """# \U0001f3af Expected Value (Mean of a Random Variable)

**Part 2 of 7 \u2014 Expected Value**

---

### The Mean of a Discrete Random Variable

$$\\\\mu_X = E(X) = \\\\sum x_i \\\\cdot P(x_i)$$

The expected value is the **long-run average** \u2014 if you repeated the random process many times, the average outcome would approach $E(X)$.

---

### Worked Example

| $X$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X)$ | 0.1 | 0.3 | 0.4 | 0.2 |

$$E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7$$

> \u26a0\ufe0f The expected value does NOT have to be a possible outcome. $X$ can\u2019t actually equal 1.7, but 1.7 is the long-run average.

---

### Interpretation on the AP Exam

\u201cIf we were to repeat this random process many, many times, the average value of $X$ would be approximately 1.7.\u201d""",
                'mcqs': [
                    ('The expected value of a random variable represents:',
                     ['The most likely outcome', 'The long-run average', 'The median', 'The mode'],
                     1, 'Expected value = long-run average over many repetitions.'),
                    ('If $X$ takes values 1, 2, 3 with equal probability $1/3$, then $E(X)$ is:',
                     ['1', '2', '3', '6'],
                     1, '$E(X) = 1(1/3) + 2(1/3) + 3(1/3) = 6/3 = 2$.'),
                    ('Expected value must be one of the possible values of $X$:',
                     ['Always true', 'Sometimes true', 'Never true', 'True only for symmetric distributions'],
                     1, 'Expected value can be any number \u2014 it does not have to be a possible outcome.')
                ],
                'inputs': {
                    'prompt': """**Expected Value Calculation** \U0001f9ee

A game costs $5 to play. You win $20 with probability 0.2, win $5 with probability 0.3, and win $0 with probability 0.5.

Let $X$ = net gain (winnings minus cost).

**1)** $X$ values: $15, $0, and $\\\\underline{\\\\quad}$ (third net gain value)

**2)** $E(X) = ?$ (expected net gain)

**3)** Is this game favorable for the player? (yes or no)""",
                    'boxes': 3,
                    'answers': ['-5', '-1', 'no'],
                    'hints': ['Win $0 minus $5 cost = ?', '$E(X) = 15(0.2) + 0(0.3) + (-5)(0.5)$', 'Negative expected value means you lose money on average.'],
                    'explanation': '1) $0 - $5 = -$5. 2) $E(X) = 15(0.2) + 0(0.3) + (-5)(0.5) = 3 + 0 - 2.5 = -1$. 3) No \u2014 negative expected value.'
                }
            },
            {
                'title': 'Variance & Standard Deviation',
                'content': """# \U0001f4ca Variance & Standard Deviation of a Random Variable

**Part 3 of 7 \u2014 Spread of a Distribution**

---

### Variance

$$\\\\text{Var}(X) = \\\\sigma_X^2 = \\\\sum (x_i - \\\\mu_X)^2 \\\\cdot P(x_i)$$

### Standard Deviation

$$\\\\sigma_X = \\\\sqrt{\\\\text{Var}(X)}$$

---

### Worked Example

Using our distribution: $\\\\mu_X = 1.7$

| $x$ | $x - \\\\mu$ | $(x - \\\\mu)^2$ | $P(x)$ | $(x-\\\\mu)^2 \\\\cdot P(x)$ |
|-----|-------------|-----------------|---------|---------------------------|
| 0 | -1.7 | 2.89 | 0.1 | 0.289 |
| 1 | -0.7 | 0.49 | 0.3 | 0.147 |
| 2 | 0.3 | 0.09 | 0.4 | 0.036 |
| 3 | 1.3 | 1.69 | 0.2 | 0.338 |

$$\\\\sigma^2 = 0.289 + 0.147 + 0.036 + 0.338 = 0.81$$
$$\\\\sigma = \\\\sqrt{0.81} = 0.9$$

> \U0001f511 Standard deviation measures the **typical distance** of outcomes from the mean.""",
                'mcqs': [
                    ('Variance is calculated by:',
                     ['$\\\\sum (x - \\\\mu)^2 \\\\cdot P(x)$', '$\\\\sum x \\\\cdot P(x)$', '$\\\\sum |x - \\\\mu|$', '$\\\\sum P(x)$'],
                     0, 'Variance = weighted average of squared deviations from the mean.'),
                    ('If $\\\\sigma^2 = 4$, then $\\\\sigma$ equals:',
                     ['2', '4', '16', '0.5'],
                     0, '$\\\\sigma = \\\\sqrt{4} = 2$.'),
                    ('A larger standard deviation means:',
                     ['Outcomes are closer to the mean', 'Outcomes are more spread out', 'The mean is larger', 'The distribution is symmetric'],
                     1, 'Larger $\\\\sigma$ = more variability in outcomes.')
                ],
                'inputs': {
                    'prompt': """**Variance Drill** \U0001f9ee

A random variable $X$ has: $\\\\mu = 3$, and outcomes $X = 1, 3, 5$ each with probability $1/3$.

**1)** $(1 - 3)^2 \\\\cdot (1/3) = ?$ (first term of variance calculation)

**2)** $(3 - 3)^2 \\\\cdot (1/3) = ?$

**3)** $\\\\sigma^2 = ?$ (total variance, as a fraction like a/b)""",
                    'boxes': 3,
                    'answers': ['4/3', '0', '8/3'],
                    'hints': ['$(1-3)^2 = 4$, times $1/3$', '$(3-3)^2 = 0$', 'Add all three terms: $4/3 + 0 + 4/3$'],
                    'explanation': '1) $4 \\\\cdot 1/3 = 4/3$. 2) $0 \\\\cdot 1/3 = 0$. 3) $4/3 + 0 + 4/3 = 8/3 \\\\approx 2.67$.'
                }
            },
            {
                'title': 'Transforming Random Variables',
                'content': """# \u2696\ufe0f Transforming Random Variables

**Part 4 of 7 \u2014 Linear Transformations**

---

### Rules for $Y = a + bX$

| Property | Rule |
|----------|------|
| **Mean** | $\\\\mu_Y = a + b\\\\mu_X$ |
| **Variance** | $\\\\sigma_Y^2 = b^2 \\\\sigma_X^2$ |
| **Standard Deviation** | $\\\\sigma_Y = |b| \\\\sigma_X$ |

> \U0001f511 **Adding** a constant shifts the center but does NOT change spread. **Multiplying** by a constant scales both center and spread.

---

### Example: Temperature Conversion

If $X$ is temperature in Celsius with $\\\\mu_X = 20$ and $\\\\sigma_X = 5$:

$Y = 32 + 1.8X$ (Fahrenheit)

- $\\\\mu_Y = 32 + 1.8(20) = 68$\u00b0F
- $\\\\sigma_Y = 1.8(5) = 9$\u00b0F

The mean shifts AND scales; the standard deviation only scales (adding 32 has no effect on spread).""",
                'mcqs': [
                    ('If $Y = 3X + 5$ and $\\\\mu_X = 10$, then $\\\\mu_Y$ equals:',
                     ['15', '35', '30', '50'],
                     1, '$\\\\mu_Y = 3(10) + 5 = 35$.'),
                    ('Adding a constant to every value of $X$:',
                     ['Changes the mean and standard deviation', 'Changes only the mean', 'Changes only the standard deviation', 'Changes neither'],
                     1, 'Adding shifts the center but not the spread.'),
                    ('If $\\\\sigma_X = 4$ and $Y = 2X + 1$, then $\\\\sigma_Y$ equals:',
                     ['4', '5', '8', '9'],
                     2, '$\\\\sigma_Y = |2| \\\\cdot 4 = 8$. The constant 1 has no effect on spread.')
                ],
                'inputs': {
                    'prompt': """**Transformation Practice** \U0001f9ee

$X$ has $\\\\mu_X = 50$ and $\\\\sigma_X = 10$. Let $Y = 2X - 30$.

**1)** $\\\\mu_Y = ?$

**2)** $\\\\sigma_Y = ?$

**3)** $\\\\sigma_Y^2 = ?$ (variance of $Y$)""",
                    'boxes': 3,
                    'answers': ['70', '20', '400'],
                    'hints': ['$\\\\mu_Y = 2(50) - 30$', '$\\\\sigma_Y = 2 \\\\cdot 10$', '$\\\\sigma_Y^2 = (20)^2$'],
                    'explanation': '1) $2(50) - 30 = 70$. 2) $2(10) = 20$. 3) $20^2 = 400$.'
                }
            },
            {
                'title': 'Combining Random Variables',
                'content': """# \U0001f504 Combining Independent Random Variables

**Part 5 of 7 \u2014 Sums & Differences**

---

### Rules for Independent Random Variables

If $X$ and $Y$ are **independent**:

| Combination | Mean | Variance |
|------------|------|----------|
| $X + Y$ | $\\\\mu_X + \\\\mu_Y$ | $\\\\sigma_X^2 + \\\\sigma_Y^2$ |
| $X - Y$ | $\\\\mu_X - \\\\mu_Y$ | $\\\\sigma_X^2 + \\\\sigma_Y^2$ |

> \u26a0\ufe0f **Critical:** Variances always **ADD**, even for differences! Standard deviations do NOT simply add or subtract.

---

### Why Variances Add for Differences

Think of it this way: whether you add or subtract, the **uncertainty** (variability) in each variable contributes to the total uncertainty. Subtracting doesn\u2019t reduce uncertainty \u2014 it compounds it.

---

### Example

$X$: exam score, $\\\\mu_X = 75$, $\\\\sigma_X = 8$
$Y$: quiz score, $\\\\mu_Y = 85$, $\\\\sigma_Y = 6$

$X + Y$: $\\\\mu = 160$, $\\\\sigma^2 = 64 + 36 = 100$, $\\\\sigma = 10$
$X - Y$: $\\\\mu = -10$, $\\\\sigma^2 = 64 + 36 = 100$, $\\\\sigma = 10$""",
                'mcqs': [
                    ('When finding $X - Y$ for independent variables, the variances are:',
                     ['Subtracted', 'Added', 'Multiplied', 'Unchanged'],
                     1, 'Variances always ADD for independent variables, regardless of + or -.'),
                    ('If $\\\\sigma_X = 3$ and $\\\\sigma_Y = 4$ (independent), then $\\\\sigma_{X+Y}$ equals:',
                     ['5', '7', '1', '25'],
                     0, '$\\\\sigma_{X+Y} = \\\\sqrt{9 + 16} = \\\\sqrt{25} = 5$.'),
                    ('$E(X + Y) = E(X) + E(Y)$ is true:',
                     ['Only for independent variables', 'Always', 'Only when variances are equal', 'Never'],
                     1, 'Expected values always add, with or without independence.')
                ],
                'inputs': {
                    'prompt': """**Combining Variables** \U0001f9ee

$X$: $\\\\mu_X = 100$, $\\\\sigma_X = 12$. $Y$: $\\\\mu_Y = 80$, $\\\\sigma_Y = 5$. Independent.

**1)** $E(X + Y) = ?$

**2)** $\\\\text{Var}(X - Y) = ?$

**3)** $\\\\sigma_{X+Y} = ?$ (round to 1 decimal)""",
                    'boxes': 3,
                    'answers': ['180', '169', '13.0'],
                    'hints': ['$100 + 80$', '$12^2 + 5^2 = 144 + 25$', '$\\\\sqrt{169}$'],
                    'explanation': '1) $100 + 80 = 180$. 2) $144 + 25 = 169$. 3) $\\\\sqrt{169} = 13.0$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Problems**

---

### Strategy for Random Variable Problems

1. **Identify** the random variable and its distribution
2. **Calculate** $E(X)$ using $\\\\sum x \\\\cdot P(x)$
3. **Apply** transformation rules if $Y = a + bX$
4. **Combine** using variance addition for independent variables
5. **Interpret** in context for full AP credit

---

### AP Exam Tip

When asked to **interpret** expected value:
\u201cIf [process] were repeated many times, the average [variable] would be approximately [value].\u201d

When asked to **interpret** standard deviation:
\u201cThe [variable] typically varies by about [value] from the mean of [mean].\u201d""",
                'mcqs': [
                    ('A fair die costs $2 to roll. You win $X$ dollars equal to 3 times the face. $E(\\\\text{profit}) = ?$',
                     ['$8.50', '$10.50', '$3.50', '$5.50'],
                     0, '$E(X) = 3 \\\\cdot 3.5 = 10.50$. Profit = $10.50 - $2 = $8.50.'),
                    ('Two independent measurements have $\\\\sigma_1 = 3$ and $\\\\sigma_2 = 4$. The $\\\\sigma$ of their difference is:',
                     ['1', '5', '7', '25'],
                     1, '$\\\\sigma = \\\\sqrt{9 + 16} = 5$. Variances add even for differences.'),
                    ('$X$ has $\\\\mu = 10$, $\\\\sigma = 2$. For $Y = 5X - 3$: $\\\\sigma_Y = ?$',
                     ['7', '10', '13', '50'],
                     1, '$\\\\sigma_Y = 5 \\\\cdot 2 = 10$. Subtracting 3 does not affect spread.')
                ],
                'inputs': {
                    'prompt': """**Insurance Problem** \U0001f9ee

An insurance company charges $300/year. Claims: $0 (prob 0.9), $1000 (prob 0.08), $5000 (prob 0.02).

**1)** Expected claim per customer?

**2)** Expected profit per customer?

**3)** Standard deviation of claims? (round to nearest dollar)""",
                    'boxes': 3,
                    'answers': ['180', '120', '693'],
                    'hints': ['$0(0.9) + 1000(0.08) + 5000(0.02)$', '$300 - E(\\\\text{claim})$', '$\\\\sqrt{\\\\sum(x - 180)^2 \\\\cdot P(x)}$'],
                    'explanation': '1) $0 + 80 + 100 = 180$. 2) $300 - 180 = 120$. 3) $\\\\sqrt{(180)^2(0.9) + (820)^2(0.08) + (4820)^2(0.02)} \\\\approx 693$.'
                }
            },
            {
                'title': 'Review & Applications',
                'content': """# \U0001f4dd Review & Applications

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Formulas Summary

| Concept | Formula |
|---------|---------|
| Expected Value | $E(X) = \\\\sum x_i P(x_i)$ |
| Variance | $\\\\text{Var}(X) = \\\\sum(x_i - \\\\mu)^2 P(x_i)$ |
| Linear Transform Mean | $E(aX + b) = aE(X) + b$ |
| Linear Transform Var | $\\\\text{Var}(aX + b) = a^2 \\\\text{Var}(X)$ |
| Sum of Independent | $\\\\text{Var}(X \\\\pm Y) = \\\\text{Var}(X) + \\\\text{Var}(Y)$ |

### Common Mistakes on the AP Exam
- Adding standard deviations instead of variances
- Subtracting variances for $X - Y$
- Forgetting that $E(X)$ doesn\u2019t have to be a possible value
- Confusing \u201cexpected value\u201d with \u201cmost likely value\u201d""",
                'mcqs': [
                    ('$\\\\text{Var}(3X) = ?$ if $\\\\text{Var}(X) = 10$',
                     ['30', '90', '100', '3'],
                     1, '$\\\\text{Var}(3X) = 9 \\\\cdot 10 = 90$.'),
                    ('For independent $X, Y$: $\\\\text{Var}(X - Y) = \\\\text{Var}(X) + \\\\text{Var}(Y)$ because:',
                     ['Subtraction reduces uncertainty', 'Variability compounds regardless of direction', 'It\u2019s a special case', 'Standard deviations cancel'],
                     1, 'Whether adding or subtracting, both sources of variability contribute to total uncertainty.'),
                    ('The AP exam asks you to \u201cinterpret the expected value.\u201d You should say:',
                     ['The most common outcome is...', 'If repeated many times, the average would be approximately...', 'The probability of the mean is...', 'Half the values are above and half below...'],
                     1, 'Expected value = long-run average. Always phrase it this way on the exam.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

$X$: $\\\\mu = 20$, $\\\\sigma = 3$. $Y$: $\\\\mu = 15$, $\\\\sigma = 4$. Independent.

**1)** $E(2X + Y) = ?$

**2)** $\\\\text{Var}(2X + Y) = ?$

**3)** $\\\\sigma_{2X+Y} = ?$ (round to 2 decimals)""",
                    'boxes': 3,
                    'answers': ['55', '52', '7.21'],
                    'hints': ['$2(20) + 15$', '$4(9) + 16 = 36 + 16$', '$\\\\sqrt{52}$'],
                    'explanation': '1) $40 + 15 = 55$. 2) $4 \\\\cdot 9 + 16 = 52$. 3) $\\\\sqrt{52} \\\\approx 7.21$.'
                }
            }
        ]
    },
    {
        'slug': 'binomial-geometric-apstats',
        'filePrefix': 'apstats-binomial-geometric',
        'exportPrefix': 'apStatsBinomGeom',
        'parts': [
            {'title': 'Binomial Setting', 'content': """# \U0001f3b0 Binomial & Geometric Distributions

**Part 1 of 7 \u2014 The Binomial Setting**

---

### BINS Criteria

A random variable $X$ is binomial if:

| Letter | Condition |
|--------|-----------|
| **B** | Binary outcomes (success/failure) |
| **I** | Independent trials |
| **N** | Fixed Number of trials ($n$) |
| **S** | Same probability of success ($p$) each trial |

---

### Binomial Distribution: $X \\\\sim B(n, p)$

$$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$$

where $\\\\binom{n}{k} = \\\\frac{n!}{k!(n-k)!}$

---

### Mean and Standard Deviation

$$\\\\mu = np \\\\qquad \\\\sigma = \\\\sqrt{np(1-p)}$$

**Example:** 20 free throws, $p = 0.8$
- $\\\\mu = 20(0.8) = 16$
- $\\\\sigma = \\\\sqrt{20(0.8)(0.2)} = \\\\sqrt{3.2} \\\\approx 1.789$""",
             'mcqs': [
                 ('Which is NOT required for a binomial setting?',
                  ['Fixed number of trials', 'Independent trials', 'Constant probability', 'Outcomes must be numerical'],
                  3, 'BINS: Binary, Independent, fixed Number, Same probability. Outcomes just need to be success/failure.'),
                 ('$X \\\\sim B(10, 0.3)$. $E(X) = ?$',
                  ['3', '7', '0.3', '10'],
                  0, '$E(X) = np = 10(0.3) = 3$.'),
                 ('Rolling a die until you get a 6 is NOT binomial because:',
                  ['Outcomes aren\u2019t binary', 'Trials aren\u2019t independent', 'There\u2019s no fixed number of trials', 'Probability changes'],
                  2, 'No fixed $n$ \u2014 you keep rolling until success. This is geometric, not binomial.')
             ],
             'inputs': {
                 'prompt': """**Binomial Basics** \U0001f9ee

A basketball player makes 75% of free throws. She shoots 12.

**1)** Expected number of makes?

**2)** Standard deviation? (round to 2 decimal places)

**3)** $P(X = 12)$? (round to 4 decimal places)""",
                 'boxes': 3,
                 'answers': ['9', '1.50', '0.0317'],
                 'hints': ['$np = 12(0.75)$', '$\\\\sqrt{np(1-p)}$', '$0.75^{12}$'],
                 'explanation': '1) $12(0.75) = 9$. 2) $\\\\sqrt{12(0.75)(0.25)} = \\\\sqrt{2.25} = 1.50$. 3) $\\\\binom{12}{12}(0.75)^{12}(0.25)^0 = 0.75^{12} \\\\approx 0.0317$.'
             }
            },
            {'title': 'Binomial Calculations', 'content': """# \U0001f522 Binomial Calculations

**Part 2 of 7 \u2014 Computing Binomial Probabilities**

---

### Using the Formula

$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$

### Cumulative Probabilities

- $P(X \\\\leq k)$: use `binomcdf(n, p, k)` on calculator
- $P(X \\\\geq k) = 1 - P(X \\\\leq k-1)$
- $P(a \\\\leq X \\\\leq b) = P(X \\\\leq b) - P(X \\\\leq a-1)$

---

### Worked Example

$X \\\\sim B(5, 0.4)$. Find $P(X \\\\geq 3)$.

$P(X \\\\geq 3) = P(3) + P(4) + P(5)$

$= \\\\binom{5}{3}(0.4)^3(0.6)^2 + \\\\binom{5}{4}(0.4)^4(0.6)^1 + \\\\binom{5}{5}(0.4)^5$

$= 10(0.064)(0.36) + 5(0.0256)(0.6) + 1(0.01024)$

$= 0.2304 + 0.0768 + 0.01024 = 0.3174$""",
             'mcqs': [
                 ('$P(X \\\\geq 3)$ equals:',
                  ['$1 - P(X \\\\leq 3)$', '$1 - P(X \\\\leq 2)$', '$P(X \\\\leq 3) - P(X \\\\leq 2)$', '$P(X = 3)$'],
                  1, '$P(X \\\\geq 3) = 1 - P(X \\\\leq 2)$ since we want 3 or more.'),
                 ('$\\\\binom{6}{2}$ equals:',
                  ['12', '15', '30', '6'],
                  1, '$\\\\binom{6}{2} = \\\\frac{6!}{2!4!} = \\\\frac{720}{2 \\\\cdot 24} = 15$.'),
                 ('For $X \\\\sim B(100, 0.05)$, the mean and SD are:',
                  ['$\\\\mu=5, \\\\sigma \\\\approx 2.18$', '$\\\\mu=50, \\\\sigma=5$', '$\\\\mu=5, \\\\sigma=5$', '$\\\\mu=95, \\\\sigma \\\\approx 2.18$'],
                  0, '$\\\\mu = 100(0.05) = 5$, $\\\\sigma = \\\\sqrt{100(0.05)(0.95)} = \\\\sqrt{4.75} \\\\approx 2.18$.')
             ],
             'inputs': {
                 'prompt': """**Binomial Calculation** \U0001f9ee

$X \\\\sim B(4, 0.5)$.

**1)** $P(X = 2) = ?$ (as a fraction, e.g., 3/8)

**2)** $P(X \\\\leq 1) = ?$ (as a fraction)

**3)** $P(X \\\\geq 3) = ?$ (as a fraction)""",
                 'boxes': 3,
                 'answers': ['6/16', '5/16', '5/16'],
                 'hints': ['$\\\\binom{4}{2}(0.5)^4 = 6/16$', '$P(0) + P(1) = 1/16 + 4/16$', 'By symmetry, same as $P(X \\\\leq 1)$'],
                 'explanation': '1) $\\\\binom{4}{2}(0.5)^2(0.5)^2 = 6(1/16) = 6/16$. 2) $1/16 + 4/16 = 5/16$. 3) $4/16 + 1/16 = 5/16$.'
             }
            },
            {'title': 'Geometric Distribution', 'content': """# \U0001f3af Geometric Distribution

**Part 3 of 7 \u2014 Waiting for First Success**

---

### Geometric Setting

- Binary outcomes (success/failure)
- Independent trials
- Same probability $p$ each trial
- Count trials **until first success**

### Geometric Distribution: $X \\\\sim G(p)$

$$P(X = k) = (1-p)^{k-1} p$$

where $k = 1, 2, 3, \\\\ldots$ (first success on trial $k$)

---

### Mean and Standard Deviation

$$\\\\mu = \\\\frac{1}{p} \\\\qquad \\\\sigma = \\\\frac{\\\\sqrt{1-p}}{p}$$

**Example:** Rolling a die until getting a 6 ($p = 1/6$):
- Expected number of rolls: $\\\\mu = 6$
- This means on average you\u2019ll need 6 rolls""",
             'mcqs': [
                 ('The geometric distribution counts:',
                  ['Number of successes in $n$ trials', 'Number of trials until first success', 'Total number of successes', 'Probability of exactly $k$ successes'],
                  1, 'Geometric = waiting time until the first success.'),
                 ('$X \\\\sim G(0.25)$. $E(X) = ?$ trials.',
                  ['0.25', '4', '25', '0.75'],
                  1, '$E(X) = 1/p = 1/0.25 = 4$ trials until first success.'),
                 ('$P(X = 3)$ for $G(0.2)$:',
                  ['$(0.8)^2(0.2)$', '$(0.8)^3(0.2)$', '$(0.2)^3$', '$\\\\binom{3}{1}(0.2)(0.8)^2$'],
                  0, '$P(X = 3) = (1-p)^{3-1} p = (0.8)^2(0.2) = 0.128$.')
             ],
             'inputs': {
                 'prompt': """**Geometric Practice** \U0001f9ee

A quality inspector finds defective items with probability $p = 0.1$.

**1)** Expected inspections until first defect?

**2)** $P(\\\\text{first defect on 3rd item})$? (as a decimal)

**3)** $P(X \\\\leq 3)$? (probability within first 3, as a decimal)""",
                 'boxes': 3,
                 'answers': ['10', '0.081', '0.271'],
                 'hints': ['$1/p = 1/0.1$', '$(0.9)^2(0.1)$', '$P(1) + P(2) + P(3)$'],
                 'explanation': '1) $1/0.1 = 10$. 2) $(0.9)^2(0.1) = 0.081$. 3) $0.1 + 0.09 + 0.081 = 0.271$.'
             }
            },
            {'title': 'Normal Approximation to Binomial', 'content': """# \U0001f4c8 Normal Approximation to Binomial

**Part 4 of 7 \u2014 When $n$ is Large**

---

### When to Use Normal Approximation

The binomial distribution $B(n, p)$ is approximately normal when:

$$np \\\\geq 10 \\\\quad \\\\text{AND} \\\\quad n(1-p) \\\\geq 10$$

This is the **Large Counts Condition**.

Use: $X \\\\dot\\\\sim N(np, \\\\sqrt{np(1-p)})$

---

### Worked Example

$X \\\\sim B(200, 0.35)$

Check: $np = 70 \\\\geq 10$ \u2713, $n(1-p) = 130 \\\\geq 10$ \u2713

$\\\\mu = 70$, $\\\\sigma = \\\\sqrt{200(0.35)(0.65)} = \\\\sqrt{45.5} \\\\approx 6.745$

$P(X \\\\geq 80) \\\\approx P\\\\left(Z \\\\geq \\\\frac{80 - 70}{6.745}\\\\right) = P(Z \\\\geq 1.48) \\\\approx 0.0694$""",
             'mcqs': [
                 ('The Large Counts Condition requires:',
                  ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$p \\\\geq 0.5$', '$np \\\\geq 5$'],
                  1, 'Both $np$ and $n(1-p)$ must be at least 10 for the normal approximation.'),
                 ('$X \\\\sim B(50, 0.1)$. Can we use the normal approximation?',
                  ['Yes, $n$ is large enough', 'No, $np = 5 < 10$', 'Yes, $n(1-p) = 45 \\\\geq 10$', 'No, $p$ is too small'],
                  1, '$np = 50(0.1) = 5 < 10$. The condition fails.'),
                 ('The purpose of the normal approximation is to:',
                  ['Avoid calculator computations', 'Approximate binomial probabilities using the normal curve', 'Make the binomial exact', 'Change discrete to continuous'],
                  1, 'When $n$ is large enough, the bell-shaped normal curve closely matches the binomial distribution.')
             ],
             'inputs': {
                 'prompt': """**Normal Approximation** \U0001f9ee

$X \\\\sim B(400, 0.6)$

**1)** $\\\\mu = ?$

**2)** $\\\\sigma = ?$ (round to 2 decimals)

**3)** $z$-score for $X = 260$? (round to 2 decimals)""",
                 'boxes': 3,
                 'answers': ['240', '9.80', '2.04'],
                 'hints': ['$np = 400(0.6)$', '$\\\\sqrt{400(0.6)(0.4)}$', '$(260 - 240)/\\\\sigma$'],
                 'explanation': '1) $400(0.6) = 240$. 2) $\\\\sqrt{96} \\\\approx 9.80$. 3) $(260-240)/9.80 \\\\approx 2.04$.'
             }
            },
            {'title': 'Binomial vs Geometric Comparison', 'content': """# \U0001f504 Binomial vs Geometric

**Part 5 of 7 \u2014 Choosing the Right Model**

---

### Side-by-Side Comparison

| Feature | Binomial | Geometric |
|---------|----------|-----------|
| **Counts** | Successes in $n$ trials | Trials until 1st success |
| **Fixed** | Number of trials $n$ | Probability $p$ |
| **$n$** | Specified | Not fixed |
| **Values** | $0, 1, 2, \\\\ldots, n$ | $1, 2, 3, \\\\ldots$ |
| **Mean** | $np$ | $1/p$ |
| **Formula** | $\\\\binom{n}{k}p^k(1-p)^{n-k}$ | $(1-p)^{k-1}p$ |

---

### Decision Flowchart

1. Are there binary outcomes with constant $p$? \u2192 If no, neither
2. Is $n$ fixed? \u2192 **Yes**: Binomial. **No**: continue
3. Counting trials until first success? \u2192 **Yes**: Geometric""",
             'mcqs': [
                 ('A student guesses on 20 multiple-choice questions ($p = 0.25$). The number correct is:',
                  ['Binomial', 'Geometric', 'Normal', 'Neither'],
                  0, 'Fixed $n = 20$, binary (correct/incorrect), same $p$ \u2192 Binomial.'),
                 ('A student guesses until getting one right. The number of attempts is:',
                  ['Binomial', 'Geometric', 'Poisson', 'Neither'],
                  1, 'Counting trials until first success with no fixed $n$ \u2192 Geometric.'),
                 ('A survey asks 1000 people yes/no. The number saying \u201cyes\u201d is:',
                  ['Geometric', 'Binomial', 'Uniform', 'Continuous'],
                  1, 'Fixed $n = 1000$, binary outcomes, same $p$ each \u2192 Binomial.')
             ],
             'inputs': {
                 'prompt': """**Model Identification** \U0001f9ee

**1)** Flipping a coin until heads: Binomial or Geometric?

**2)** Number of heads in 50 flips: Binomial or Geometric?

**3)** For scenario 2: $E(X) = ?$""",
                 'boxes': 3,
                 'answers': ['geometric', 'binomial', '25'],
                 'hints': ['No fixed $n$, waiting for first success', 'Fixed $n = 50$, counting successes', '$np = 50(0.5)$'],
                 'explanation': '1) Geometric \u2014 waiting for first success. 2) Binomial \u2014 fixed trials, counting successes. 3) $50(0.5) = 25$.'
             }
            },
            {'title': 'Problem-Solving Workshop', 'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### AP Free-Response Strategy

When the AP exam gives a binomial/geometric scenario:
1. **State** the distribution and parameters: \u201c$X \\\\sim B(n, p)$\u201d or \u201c$X \\\\sim G(p)$\u201d
2. **Verify** conditions (BINS for binomial)
3. **Calculate** using the formula or calculator
4. **Interpret** in context with proper probability language""",
             'mcqs': [
                 ('In a binomial setting with $n = 15$ and $p = 0.6$, $P(X = 10)$ requires:',
                  ['$\\\\binom{15}{10}(0.6)^{10}(0.4)^5$', '$(0.6)^{10}(0.4)^5$', '$\\\\binom{15}{10}(0.6)^{10}$', '$(0.4)^{14}(0.6)$'],
                  0, 'Full binomial formula: $\\\\binom{n}{k}p^k(1-p)^{n-k}$.'),
                 ('A geometric random variable can theoretically take:',
                  ['Only values 0 to $n$', 'Only values 1 to $n$', 'Any positive integer', 'Any nonnegative integer'],
                  2, 'Geometric: $X = 1, 2, 3, \\\\ldots$ (no upper bound, starts at 1).'),
                 ('$P(X > 5)$ for $G(p)$ equals:',
                  ['$1 - [1 - (1-p)^5]$', '$(1-p)^5$', '$(1-p)^4 p$', '$1 - p^5$'],
                  1, '$P(X > 5) = P(\\\\text{first 5 all fail}) = (1-p)^5$.')
             ],
             'inputs': {
                 'prompt': """**Mixed Practice** \U0001f9ee

10% of products are defective. A sample of 20 is inspected.

**1)** $P(\\\\text{exactly 2 defective}) = ?$ (round to 4 decimals)

**2)** Expected number defective?

**3)** If inspecting one at a time, expected items until first defect?""",
                 'boxes': 3,
                 'answers': ['0.2852', '2', '10'],
                 'hints': ['$\\\\binom{20}{2}(0.1)^2(0.9)^{18}$', '$np = 20(0.1)$', 'Geometric: $1/p = 1/0.1$'],
                 'explanation': '1) $\\\\binom{20}{2}(0.1)^2(0.9)^{18} = 190(0.01)(0.1501) \\\\approx 0.2852$. 2) $20(0.1) = 2$. 3) $1/0.1 = 10$.'
             }
            },
            {'title': 'Review & Applications', 'content': """# \U0001f4dd Review & Applications

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Formulas

| Distribution | PMF | Mean | SD |
|-------------|-----|------|----|
| Binomial $B(n,p)$ | $\\\\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $\\\\sqrt{np(1-p)}$ |
| Geometric $G(p)$ | $(1-p)^{k-1}p$ | $1/p$ | $\\\\frac{\\\\sqrt{1-p}}{p}$ |

### Normal Approximation Conditions
$np \\\\geq 10$ AND $n(1-p) \\\\geq 10$

### Common AP Mistakes
- Using geometric when $n$ is fixed (should be binomial)
- Forgetting $\\\\binom{n}{k}$ in binomial formula
- Starting geometric at $k = 0$ instead of $k = 1$""",
             'mcqs': [
                 ('$X \\\\sim B(8, 0.5)$. $\\\\sigma_X = ?$',
                  ['$\\\\sqrt{2} \\\\approx 1.41$', '2', '4', '$\\\\sqrt{8}$'],
                  0, '$\\\\sigma = \\\\sqrt{8(0.5)(0.5)} = \\\\sqrt{2} \\\\approx 1.414$.'),
                 ('For $G(0.5)$, $P(X \\\\leq 2) = ?$',
                  ['0.50', '0.75', '0.25', '1.00'],
                  1, '$P(1) + P(2) = 0.5 + 0.25 = 0.75$.'),
                 ('The geometric distribution is memoryless. This means:',
                  ['Past failures reduce future probability', 'Past failures don\u2019t affect future probability', 'The mean changes over time', 'It becomes normal eventually'],
                  1, '$P(X > s + t | X > s) = P(X > t)$. Previous failures don\u2019t help predict the next trial.')
             ],
             'inputs': {
                 'prompt': """**Final Challenge** \U0001f9ee

$X \\\\sim B(100, 0.3)$

**1)** $\\\\mu_X = ?$

**2)** $\\\\sigma_X = ?$ (round to 2 decimals)

**3)** Using normal approximation, $P(X > 35) \\\\approx ?$ (Standard normal: $P(Z > 1.09) \\\\approx 0.138$)""",
                 'boxes': 3,
                 'answers': ['30', '4.58', '0.138'],
                 'hints': ['$np$', '$\\\\sqrt{np(1-p)}$', '$z = (35-30)/4.58 \\\\approx 1.09$'],
                 'explanation': '1) $100(0.3) = 30$. 2) $\\\\sqrt{100(0.3)(0.7)} = \\\\sqrt{21} \\\\approx 4.58$. 3) $z = 5/4.58 \\\\approx 1.09$, $P(Z > 1.09) \\\\approx 0.138$.'
             }
            }
        ]
    },
]

# Topics 3-8 with skeleton-based generation (detailed Part 1, formulaic remaining parts)
MORE_TOPICS = [
    {
        'slug': 'experimental-design-apstats',
        'filePrefix': 'apstats-experimental-design',
        'exportPrefix': 'apStatsExpDesign',
        'parts': [
            'Principles of Experimental Design',
            'Blocking & Matched Pairs',
            'Randomization Techniques',
            'Control Groups & Placebos',
            'Confounding & Lurking Variables',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    },
    {
        'slug': 'probability-distributions-apstats',
        'filePrefix': 'apstats-probability-distributions',
        'exportPrefix': 'apStatsProbDist',
        'parts': [
            'Conditional Probability & Independence',
            'Bayes Theorem Basics',
            'Tree Diagrams & Two-Way Tables',
            'Multiplication & Addition Rules',
            'Simulations & Probability Models',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    },
    {
        'slug': 'proportions-inference-apstats',
        'filePrefix': 'apstats-proportions-inference',
        'exportPrefix': 'apStatsPropInf',
        'parts': [
            'One-Proportion Z-Test',
            'One-Proportion Z-Interval',
            'Two-Proportion Z-Test',
            'Two-Proportion Z-Interval',
            'Choosing Sample Size',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    },
    {
        'slug': 'means-inference-apstats',
        'filePrefix': 'apstats-means-inference',
        'exportPrefix': 'apStatsMeansInf',
        'parts': [
            'One-Sample T-Test',
            'One-Sample T-Interval',
            'Two-Sample T-Test',
            'Paired T-Procedures',
            'Conditions & Robustness',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    },
    {
        'slug': 'type-errors-power-apstats',
        'filePrefix': 'apstats-type-errors-power',
        'exportPrefix': 'apStatsErrors',
        'parts': [
            'Type I & Type II Errors',
            'Significance Level & Alpha',
            'Power of a Test',
            'Factors Affecting Power',
            'P-Values & Decision Rules',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    },
    {
        'slug': 'exploratory-data-apstats',
        'filePrefix': 'apstats-exploratory-data',
        'exportPrefix': 'apStatsEDA',
        'parts': [
            'Boxplots & Five-Number Summary',
            'Stemplots & Back-to-Back Comparison',
            'Outliers & the 1.5 IQR Rule',
            'Comparing Distributions',
            'Transforming Data',
            'Problem-Solving Workshop',
            'Review & Applications'
        ]
    }
]

# Content for Part 1 of each MORE_TOPICS topic
CONTENT_MAP = {
    'experimental-design-apstats': """# \U0001f52c Experimental Design

**Part 1 of 7 \u2014 Principles of Experimental Design**

---

### Three Principles of Experimental Design

| Principle | Description |
|-----------|-------------|
| **Control** | Compare treatment group to a control group |
| **Randomization** | Randomly assign subjects to treatments |
| **Replication** | Use enough subjects to reduce chance variation |

> \U0001f511 A well-designed experiment uses ALL three principles to establish causation.

---

### Completely Randomized Design (CRD)

All experimental units are randomly assigned to treatment groups with no grouping or blocking.

**Example:** 60 patients randomly assigned to Drug A (30) or Placebo (30).

### Randomized Block Design

Subjects are first grouped into **blocks** based on a characteristic, then randomly assigned within each block.

**Example:** Block by gender, then randomly assign within male and female groups.

---

### Why Randomize?

Randomization:
- Eliminates **systematic bias**
- Distributes **confounding variables** evenly across groups
- Allows us to make **causal conclusions**""",

    'probability-distributions-apstats': """# \U0001f3b2 Probability Rules & Distributions

**Part 1 of 7 \u2014 Conditional Probability & Independence**

---

### Conditional Probability

$$P(A | B) = \\\\frac{P(A \\\\cap B)}{P(B)}$$

\u201cThe probability of $A$ given that $B$ has occurred.\u201d

---

### Independence

Events $A$ and $B$ are independent if knowing one doesn\u2019t change the probability of the other:

$$P(A | B) = P(A) \\\\quad \\\\text{or equivalently} \\\\quad P(A \\\\cap B) = P(A) \\\\cdot P(B)$$

---

### Two-Way Table Example

| | Laptop | Desktop | Total |
|---|--------|---------|-------|
| **Student** | 120 | 30 | 150 |
| **Faculty** | 50 | 50 | 100 |
| **Total** | 170 | 80 | 250 |

- $P(\\\\text{Laptop}) = 170/250 = 0.68$
- $P(\\\\text{Laptop | Student}) = 120/150 = 0.80$
- Since $0.80 \\\\neq 0.68$, device type and role are NOT independent.""",

    'proportions-inference-apstats': """# \U0001f4ca Inference for Proportions

**Part 1 of 7 \u2014 One-Proportion Z-Test**

---

### Hypothesis Test for a Population Proportion

**Hypotheses:**
- $H_0: p = p_0$ (null)
- $H_a: p \\\\neq p_0$ (or $< $ or $>$) (alternative)

**Test Statistic:**
$$z = \\\\frac{\\\\hat{p} - p_0}{\\\\sqrt{\\\\frac{p_0(1-p_0)}{n}}}$$

**Conditions:**
1. Random sample
2. Independence: $n \\\\leq 10\\\\%$ of population (10% condition)
3. Large Counts: $np_0 \\\\geq 10$ and $n(1-p_0) \\\\geq 10$

---

### Worked Example

Claim: 60% of students prefer online classes. Survey of 200 finds $\\\\hat{p} = 0.55$.

$z = \\\\frac{0.55 - 0.60}{\\\\sqrt{\\\\frac{0.60(0.40)}{200}}} = \\\\frac{-0.05}{0.0346} = -1.44$

$p\\\\text{-value} = 2P(Z < -1.44) = 2(0.0749) = 0.1498$

Since $0.1498 > 0.05$, fail to reject $H_0$.""",

    'means-inference-apstats': """# \U0001f4ca Inference for Means

**Part 1 of 7 \u2014 One-Sample T-Test**

---

### When to Use a T-Test

Use a $t$-test when the population standard deviation $\\\\sigma$ is **unknown** (which is almost always the case in practice).

### Hypotheses
- $H_0: \\\\mu = \\\\mu_0$
- $H_a: \\\\mu \\\\neq \\\\mu_0$ (or $<$, $>$)

### Test Statistic

$$t = \\\\frac{\\\\bar{x} - \\\\mu_0}{s / \\\\sqrt{n}}$$

with $df = n - 1$

### Conditions
1. **Random** sample
2. **Independence**: $n \\\\leq 10\\\\%$ of population
3. **Normal/Large Sample**: $n \\\\geq 30$ OR population is approximately normal (check with graph)

---

### Worked Example

Claim: mean study time is 5 hours. Sample: $n = 36$, $\\\\bar{x} = 5.8$, $s = 2.4$.

$$t = \\\\frac{5.8 - 5.0}{2.4/\\\\sqrt{36}} = \\\\frac{0.8}{0.4} = 2.0 \\\\quad (df = 35)$$""",

    'type-errors-power-apstats': """# \u26a0\ufe0f Type I & Type II Errors

**Part 1 of 7 \u2014 Understanding Decision Errors**

---

### The Four Possible Outcomes

| | $H_0$ True | $H_0$ False |
|---|-----------|-------------|
| **Reject $H_0$** | Type I Error ($\\\\alpha$) | Correct! (Power) |
| **Fail to reject** | Correct! | Type II Error ($\\\\beta$) |

---

### Type I Error
- **What:** Rejecting $H_0$ when it\u2019s actually true
- **Probability:** $\\\\alpha$ (significance level)
- **Real-world:** Convicting an innocent person; approving an ineffective drug

### Type II Error
- **What:** Failing to reject $H_0$ when it\u2019s actually false
- **Probability:** $\\\\beta$
- **Real-world:** Acquitting a guilty person; missing an effective drug

### Power
$$\\\\text{Power} = 1 - \\\\beta = P(\\\\text{reject } H_0 | H_0 \\\\text{ is false})$$

> \U0001f511 Power is the probability of correctly detecting a real effect.""",

    'exploratory-data-apstats': """# \U0001f4ca Exploratory Data Analysis

**Part 1 of 7 \u2014 Boxplots & Five-Number Summary**

---

### Five-Number Summary

| Statistic | Description |
|-----------|-------------|
| **Minimum** | Smallest value |
| **Q1** | 25th percentile (median of lower half) |
| **Median** | 50th percentile (middle value) |
| **Q3** | 75th percentile (median of upper half) |
| **Maximum** | Largest value |

### IQR (Interquartile Range)
$$IQR = Q3 - Q1$$

The IQR contains the middle 50% of the data.

---

### Modified Boxplot

A modified boxplot identifies **outliers** using the 1.5 \u00d7 IQR rule:
- **Low outliers:** below $Q1 - 1.5 \\\\times IQR$
- **High outliers:** above $Q3 + 1.5 \\\\times IQR$

Whiskers extend to the most extreme non-outlier values. Outliers are shown as individual dots.

---

### Example
Data: 2, 5, 7, 8, 9, 10, 11, 12, 14, 30
- Min = 2, Q1 = 7, Med = 9.5, Q3 = 12, Max = 30
- IQR = 5, Upper fence = $12 + 7.5 = 19.5$
- 30 is an outlier!"""
}


def esc(s):
    """Escape for TypeScript template literals."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def format_mcqs(mcqs):
    """Format multiple-choice questions."""
    lines = []
    for q, opts, correct, expl in mcqs:
        opts_str = ', '.join(f"'{esc(o)}'" for o in opts)
        lines.append(f"""          {{
            question: '{esc(q)}',
            options: [{opts_str}],
            correctAnswer: {correct},
            explanation: '{esc(expl)}'
          }}""")
    return ',\n'.join(lines)


def generate_rich_lesson(topic, part_idx, part):
    """Generate a rich lesson with all section types."""
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-apstats', '').replace('-', '')

    sections = []

    # Text section
    sections.append(f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(part['content'])}`
    }}""")

    # MCQ section
    if 'mcqs' in part:
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
{format_mcqs(part['mcqs'])}
        ]
      }}
    }}""")

    # Input boxes section
    if 'inputs' in part:
        inp = part['inputs']
        answers_str = ', '.join(f"'{esc(a)}'" for a in inp['answers'])
        hints = ''
        for i, h in enumerate(inp['hints']):
            hints += f"\n        hint{i+1}: '{esc(h)}',"
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-input',
      type: 'input-boxes' as const,
      content: `
{esc(inp['prompt'])}
      `,
      exercise: {{
        boxes: {inp['boxes']},
        correctAnswers: [{answers_str}],{hints}
        explanation: '{esc(inp['explanation'])}'
      }}
    }}""")

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{','.join(sections)}
  ]
}};
"""


def generate_skeleton_lesson(topic, part_idx):
    """Generate a lesson with content for skeleton topics."""
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    title = topic['parts'][part_idx]
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-apstats', '').replace('-', '')

    # Part 1 gets rich content from CONTENT_MAP
    if pn == 1 and slug in CONTENT_MAP:
        text_content = CONTENT_MAP[slug]
    else:
        text_content = f"""# {title}

**Part {pn} of 7 \u2014 {title}**

---

This section covers key concepts and techniques for {title.lower()} in AP Statistics.

Understanding these ideas is essential for both the multiple-choice and free-response sections of the AP exam."""

    sections = f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(text_content)}`
    }},
    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
          {{
            question: 'Which of the following best describes {esc(title.lower())}?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: '{esc(title)} is a core AP Statistics concept tested on the exam.'
          }}
        ]
      }}
    }}"""

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{sections}
  ]
}};
"""


def main():
    os.makedirs(BASE, exist_ok=True)
    count = 0

    # Generate rich topics (Topics 1-2 with full content)
    for topic in TOPICS:
        for i, part in enumerate(topic['parts']):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_rich_lesson(topic, i, part)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    # Generate skeleton topics (Topics 3-8)
    for topic in MORE_TOPICS:
        for i in range(7):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_skeleton_lesson(topic, i)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    print(f"\nTotal: {count} files created")


if __name__ == '__main__':
    main()
