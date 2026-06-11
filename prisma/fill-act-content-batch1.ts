import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in ACT Math content (Batch 1)...\n');

  // Number and Quantity
  await prisma.topic.update({
    where: { slug: 'act-number-quantity' },
    data: {
      textContent: `# Number and Quantity (ACT Math)

## What the ACT Tests

The ACT Math section includes **Number and Quantity** questions that test your understanding of:
- Real numbers and operations
- Rational and irrational numbers
- Number line concepts
- Absolute value
- Scientific notation
- Number properties and patterns
- Ratios and proportions
- Percentages

## Real Number System

### Types of Numbers

**Natural Numbers (Counting Numbers):** 1, 2, 3, 4, 5, ...

**Whole Numbers:** 0, 1, 2, 3, 4, 5, ... (natural numbers + zero)

**Integers:** ..., -3, -2, -1, 0, 1, 2, 3, ... (positive and negative whole numbers)

**Rational Numbers:** Numbers that can be expressed as $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\neq 0$
- Examples: $\\frac{1}{2}$, $-\\frac{3}{4}$, $5$ (can write as $\\frac{5}{1}$), $0.75$ (equals $\\frac{3}{4}$)
- Includes terminating decimals: $0.5$, $0.125$
- Includes repeating decimals: $0.333...$ (equals $\\frac{1}{3}$), $0.\\overline{6}$

**Irrational Numbers:** Cannot be expressed as a fraction; non-terminating, non-repeating decimals
- Examples: $\\pi$, $e$, $\\sqrt{2}$, $\\sqrt{3}$
- **Note:** $\\sqrt{4} = 2$ is rational (it's a perfect square!)

**Real Numbers:** All rational and irrational numbers combined

### Number Line

**Key concepts:**

**Order:** Numbers increase from left to right  
- $-5 < -2 < 0 < 3 < 7$

**Distance:** The distance between two numbers $a$ and $b$ is $|a - b|$  
- Distance from $-3$ to $5$: $|(-3) - 5| = |-8| = 8$

**Midpoint:** Between $a$ and $b$ is $\\frac{a + b}{2}$  
- Midpoint of $-4$ and $10$: $\\frac{-4 + 10}{2} = \\frac{6}{2} = 3$

## Absolute Value

**Definition:** The distance from zero on the number line (always positive or zero)

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

**Examples:**
- $|5| = 5$
- $|-7| = 7$
- $|0| = 0$
- $|-3.5| = 3.5$

**Properties:**
- $|x| \\geq 0$ (always non-negative)
- $|x| = |-x|$ (same distance from zero)
- $|xy| = |x| \\cdot |y|$
- $\\left|\\frac{x}{y}\\right| = \\frac{|x|}{|y|}$ (where $y \\neq 0$)

**Equations with absolute value:**

**Example:** Solve $|x - 3| = 5$

**Solution:** Two cases
- Case 1: $x - 3 = 5$ → $x = 8$
- Case 2: $x - 3 = -5$ → $x = -2$

**Answers:** $x = 8$ or $x = -2$

## Scientific Notation

**Form:** $a \\times 10^n$ where $1 \\leq |a| < 10$ and $n$ is an integer

**Large numbers (positive exponent):**
- $3,450,000 = 3.45 \\times 10^6$
- $89,000 = 8.9 \\times 10^4$

**Small numbers (negative exponent):**
- $0.00067 = 6.7 \\times 10^{-4}$
- $0.0000002 = 2 \\times 10^{-7}$

**Operations in scientific notation:**

**Multiplication:** Multiply coefficients, add exponents
$$(2 \\times 10^5)(3 \\times 10^7) = 6 \\times 10^{12}$$

**Division:** Divide coefficients, subtract exponents
$$\\frac{8 \\times 10^9}{4 \\times 10^3} = 2 \\times 10^{9-3} = 2 \\times 10^6$$

## Properties of Numbers

### Even and Odd

**Even:** Divisible by 2 (ends in 0, 2, 4, 6, 8)  
**Odd:** Not divisible by 2 (ends in 1, 3, 5, 7, 9)

**Rules:**
- Even + Even = Even
- Odd + Odd = Even
- Even + Odd = Odd
- Even × Even = Even
- Odd × Odd = Odd
- Even × Odd = Even

### Prime Numbers

**Definition:** A number greater than 1 with exactly two factors: 1 and itself

**First ten primes:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

**Note:** 2 is the only even prime number!

**Composite numbers:** Have more than two factors
- Examples: 4, 6, 8, 9, 10, 12, 14, 15, ...

### Divisibility Rules

**Divisible by 2:** Last digit is even  
**Divisible by 3:** Sum of digits is divisible by 3  
**Divisible by 4:** Last two digits form a number divisible by 4  
**Divisible by 5:** Last digit is 0 or 5  
**Divisible by 6:** Divisible by both 2 and 3  
**Divisible by 9:** Sum of digits is divisible by 9  
**Divisible by 10:** Last digit is 0

**Example:** Is 2,346 divisible by 3?  
Sum of digits: $2 + 3 + 4 + 6 = 15$, and $15 ÷ 3 = 5$ → Yes! ✓

## Ratios and Proportions

### Ratios

**A ratio** compares two quantities

**Forms:**
- $3:2$ (ratio notation)
- $\\frac{3}{2}$ (fraction form)
- "3 to 2" (words)

**Example:** If a recipe calls for 2 cups flour to 3 cups sugar, the ratio of flour to sugar is $2:3$ or $\\frac{2}{3}$

### Proportions

**A proportion** states that two ratios are equal

$$\\frac{a}{b} = \\frac{c}{d}$$

**Cross multiply to solve:**
$$a \\cdot d = b \\cdot c$$

**Example:** If $\\frac{x}{5} = \\frac{12}{15}$, find $x$

Cross multiply: $15x = 5 \\cdot 12 = 60$

Solve: $x = \\frac{60}{15} = 4$

### Direct Proportion

**If $y$ varies directly with $x$:** $y = kx$ for some constant $k$

**Example:** If $y = 12$ when $x = 3$, find $y$ when $x = 7$

**Step 1:** Find $k$: $12 = k(3)$ → $k = 4$

**Step 2:** Use $k$ to find new $y$: $y = 4(7) = 28$

### Inverse Proportion

**If $y$ varies inversely with $x$:** $y = \\frac{k}{x}$ for some constant $k$

**Example:** If $y = 6$ when $x = 4$, find $y$ when $x = 8$

**Step 1:** Find $k$: $6 = \\frac{k}{4}$ → $k = 24$

**Step 2:** Use $k$ to find new $y$: $y = \\frac{24}{8} = 3$

## Percentages

### Basic Percent Formula

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

**Example:** What is 35% of 80?
$$\\text{Part} = 0.35 \\times 80 = 28$$

### Percent Change

$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$$

**Example:** A price increases from $50 to $65. What's the percent increase?

$$\\frac{65 - 50}{50} \\times 100\\% = \\frac{15}{50} \\times 100\\% = 30\\%$$

### Percent of Percent

**Example:** If 30% of a number is 60, what is 50% of that number?

**Step 1:** Find the number  
$0.30x = 60$ → $x = 200$

**Step 2:** Find 50% of it  
$0.50 \\times 200 = 100$

## ACT Question Strategies

### Type 1: Classifying Numbers

**Question:** Which of the following is an irrational number?

**Strategy:**
- Perfect squares/cubes → rational
- $\\pi$, $e$, non-perfect roots → irrational
- Fractions, integers, terminating/repeating decimals → rational

### Type 2: Number Line Problems

**Question:** Point $P$ is halfway between $-7$ and $15$ on a number line. What is the coordinate of $P$?

**Strategy:** Use midpoint formula
$$\\frac{-7 + 15}{2} = \\frac{8}{2} = 4$$

### Type 3: Absolute Value

**Question:** What is $|-8| + |3| - |-5|$?

**Strategy:** Evaluate each absolute value first
$$8 + 3 - 5 = 6$$

### Type 4: Scientific Notation

**Question:** $(4 \\times 10^8)(2 \\times 10^{-3}) = ?$

**Strategy:** 
- Multiply coefficients: $4 \\times 2 = 8$
- Add exponents: $8 + (-3) = 5$
- Answer: $8 \\times 10^5$

### Type 5: Properties and Patterns

**Question:** If $n$ is an odd integer, which is always even?

**Strategy:** Test with examples
- $n + 1$: odd + 1 = even ✓
- $2n$: 2 × odd = even ✓
- $n^2$: odd × odd = odd ✗

## Common ACT Mistakes

❌ **Forgetting that $\\sqrt{9} = 3$ is rational** (perfect squares are rational)  
❌ **Not considering both solutions** for $|x| = 5$ (must have $x = 5$ and $x = -5$)  
❌ **Miscounting decimal places** in scientific notation  
❌ **Confusing direct and inverse variation**  
❌ **Using wrong base** for percent change (should be original value)  
❌ **Saying 0 is positive** (it's neither positive nor negative)

## Quick Tips for ACT

✓ **Know your number types** — rational vs irrational is common  
✓ **Absolute value creates TWO solutions** — don't forget negative case  
✓ **Move decimal, adjust exponent** for scientific notation  
✓ **Cross multiply** for proportions — fast and reliable  
✓ **Percent change uses ORIGINAL** as denominator  
✓ **Even × Odd = Even** — useful for eliminating answers  
✓ **Prime numbers > 2 are odd** — 2 is the exception

## Practice Approach

1. **Identify the concept** being tested (absolute value, proportion, etc.)
2. **Recall the rule or formula** for that concept
3. **Apply systematically** — don't rush
4. **Check reasonableness** — does your answer make sense?
5. **Eliminate obviously wrong** answers first

**Remember:** Number and Quantity questions test fundamental concepts. Master these basics and you'll handle them quickly on test day!
`
    }
  });

  console.log('✅ Filled Number and Quantity topic\n');

  // Statistics and Probability
  await prisma.topic.update({
    where: { slug: 'act-statistics-probability' },
    data: {
      textContent: `# Statistics and Probability (ACT Math)

## Statistics on the ACT

### Measures of Central Tendency

**Mean (Average):**

$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

**Example:** Find the mean of 3, 7, 9, 12, 14

$$\\text{Mean} = \\frac{3 + 7 + 9 + 12 + 14}{5} = \\frac{45}{5} = 9$$

**Median (Middle Value):**

**Steps:**
1. Order the data from least to greatest
2. If odd number of values: middle value
3. If even number of values: average of two middle values

**Example 1 (odd):** 3, 5, 7, 9, 11 → **Median = 7**

**Example 2 (even):** 2, 5, 8, 10 → **Median = $\\frac{5 + 8}{2} = 6.5$**

**Mode:**

The value that appears most frequently

**Example:** 2, 3, 3, 5, 7, 7, 7, 9 → **Mode = 7**

**Note:** Can have multiple modes or no mode

### Measures of Spread

**Range:**

$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

**Example:** For data 3, 7, 12, 15, 20

$$\\text{Range} = 20 - 3 = 17$$

**Standard Deviation:**

Measures how spread out the data is from the mean

- **Small standard deviation:** Data clustered near mean
- **Large standard deviation:** Data spread out

**ACT Tip:** You won't calculate standard deviation by hand — just understand what it means!

### Box Plots (Box-and-Whisker Plots)

**Five-number summary:**
1. **Minimum:** Smallest value
2. **Q1 (First Quartile):** Median of lower half
3. **Q2 (Median):** Middle value
4. **Q3 (Third Quartile):** Median of upper half
5. **Maximum:** Largest value

**Interquartile Range (IQR):**
$$\\text{IQR} = Q3 - Q1$$

**Example:** Data: 2, 4, 6, 8, 10, 12, 14, 16, 18

- Minimum: 2
- Q1: 5 (median of 2, 4, 6, 8)
- Median: 10
- Q3: 15 (median of 12, 14, 16, 18)
- Maximum: 18
- IQR: $15 - 5 = 10$

### Outliers

**Definition:** Data points significantly different from others

**Rule:** A value is an outlier if:
- Less than $Q1 - 1.5 \\times \\text{IQR}$, OR
- Greater than $Q3 + 1.5 \\times \\text{IQR}$

**Example:** With $Q1 = 5$, $Q3 = 15$, $\\text{IQR} = 10$:
- Lower fence: $5 - 1.5(10) = -10$
- Upper fence: $15 + 1.5(10) = 30$
- Any value < -10 or > 30 is an outlier

## Probability on the ACT

### Basic Probability

$$P(\\text{event}) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$$

**Requirements:**
- $0 \\leq P(\\text{event}) \\leq 1$
- Probability of 0 = impossible
- Probability of 1 = certain
- Often expressed as fraction, decimal, or percent

**Example:** What's the probability of rolling a 4 on a standard die?

$$P(4) = \\frac{1}{6}$$

### Complementary Events

**Complement rule:**
$$P(\\text{not } A) = 1 - P(A)$$

**Example:** If probability of rain is 0.3, probability of no rain is:
$$P(\\text{no rain}) = 1 - 0.3 = 0.7$$

### Multiple Events

**Independent Events:** One event doesn't affect the other

**Multiplication rule for independent events:**
$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example:** Flip a coin and roll a die. What's the probability of heads AND rolling a 5?

$$P(\\text{heads and 5}) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$$

**Dependent Events:** First event affects the second

**Example:** Draw 2 cards from a deck without replacement. What's the probability both are aces?

**First card:** $P(\\text{ace}) = \\frac{4}{52}$

**Second card:** $P(\\text{ace}|\\text{first was ace}) = \\frac{3}{51}$ (only 3 aces left in 51 cards)

**Both aces:** $\\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$

### "OR" Probabilities

**Addition rule for mutually exclusive events** (can't happen together):
$$P(A \\text{ or } B) = P(A) + P(B)$$

**Example:** Drawing a 5 OR a 6 from a standard deck:
$$P(5 \\text{ or } 6) = \\frac{4}{52} + \\frac{4}{52} = \\frac{8}{52} = \\frac{2}{13}$$

**If NOT mutually exclusive:**
$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

**Example:** Drawing a heart OR a king:
$$P(\\text{heart or king}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

(Subtract $\\frac{1}{52}$ because king of hearts is counted twice)

## Data Interpretation

### Tables and Charts

**ACT will give you data in tables — read carefully!**

**Example:** Survey of 100 students

|           | Freshman | Sophomore | Total |
|-----------|----------|-----------|-------|
| Own car   | 5        | 20        | 25    |
| No car    | 45       | 30        | 75    |
| **Total** | 50       | 50        | 100   |

**Questions:**
- **Probability a randomly selected student is a freshman who owns a car:**  
  $P = \\frac{5}{100} = 0.05$

- **Probability a student owns a car, given they're a sophomore:**  
  $P = \\frac{20}{50} = 0.4$

### Scatterplots

**Correlation types:**

**Positive correlation:** As $x$ increases, $y$ increases  
**Negative correlation:** As $x$ increases, $y$ decreases  
**No correlation:** No clear relationship

**Strong vs weak:**
- **Strong:** Points close to a line
- **Weak:** Points scattered

## ACT Question Types

### Type 1: Calculate Mean, Median, Mode

**Strategy:**
- **Mean:** Add all, divide by count
- **Median:** Order data, find middle
- **Mode:** Find most frequent

**If they add a value and ask new mean:**
$$\\text{New mean} = \\frac{\\text{Old sum} + \\text{New value}}{\\text{New count}}$$

### Type 2: Box Plot Interpretation

**Strategy:**
- Know what each part represents
- Q1, Q2 (median), Q3 are marked
- IQR = $Q3 - Q1$

### Type 3: Basic Probability

**Strategy:**
- Count favorable outcomes (numerator)
- Count total possible outcomes (denominator)
- Simplify fraction

### Type 4: Complementary Probability

**Strategy:**
- If asked "at least one," use complement
- $P(\\text{at least one}) = 1 - P(\\text{none})$

**Example:** Probability at least one head in 3 coin flips?

$$P(\\text{at least one H}) = 1 - P(\\text{all T}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$$

### Type 5: Multiple Events

**Strategy:**
- Identify if independent or dependent
- If independent: multiply probabilities
- If dependent: adjust second probability

### Type 6: Conditional Probability

**"Given that" or "if" signals conditional probability**

**Strategy:** Use only the subset that meets the condition

**Example:** Given a student is a sophomore (from table above), probability they own a car:

$$P(\\text{car}|\\text{sophomore}) = \\frac{20}{50} = 0.4$$

Use **sophomore column** as your total (50), not whole table (100)

## Common ACT Mistakes

❌ **Forgetting to order data** before finding median  
❌ **Dividing by wrong number** for mean (count ALL values)  
❌ **Adding probabilities for "AND"** (should multiply for independent)  
❌ **Not adjusting for dependent events** (deck gets smaller after first card)  
❌ **Using whole population** instead of subset for conditional probability  
❌ **Confusing range with IQR** (range = max - min; IQR = Q3 - Q1)

## Quick Tips for ACT

✓ **Mean is affected by outliers** — median is more resistant  
✓ **Complement rule saves time** for "at least one" problems  
✓ **AND = multiply**, **OR = add** (for mutually exclusive)  
✓ **Dependent events:** Adjust denominator and numerator  
✓ **Conditional probability:** Focus only on the given condition  
✓ **Box plots:** Middle line is MEDIAN, not mean  
✓ **Probability is never > 1** — if you get > 1, you made an error

## Formula Quick Reference

| Concept | Formula |
|---------|---------|
| Mean | $\\frac{\\sum x}{n}$ |
| Range | Max - Min |
| IQR | $Q3 - Q1$ |
| Basic Probability | $\\frac{\\text{favorable}}{\\text{total}}$ |
| Complement | $P(\\text{not } A) = 1 - P(A)$ |
| Independent AND | $P(A \\cap B) = P(A) \\times P(B)$ |
| Mutually Exclusive OR | $P(A \\cup B) = P(A) + P(B)$ |

## Practice Approach

1. **Read carefully** — is it asking for mean, median, or mode?
2. **Organize data** if needed (order for median)
3. **Identify probability type** — basic, complement, AND, OR?
4. **Set up fraction** with favorable/total
5. **Simplify** — ACT usually wants simplified fractions or decimals
6. **Check reasonableness** — probability should be between 0 and 1

**Remember:** Statistics and probability on the ACT test core concepts. Know your formulas, understand the difference between mean/median, and practice probability rules!
`
    }
  });

  console.log('✅ Filled Statistics and Probability topic\n');

  // Modeling and Problem Solving
  await prisma.topic.update({
    where: { slug: 'act-modeling-problem-solving' },
    data: {
      textContent: `# Modeling and Problem Solving (ACT Math)

## What is Mathematical Modeling?

**Mathematical modeling** involves using math to represent real-world situations. On the ACT, this means:
- Translating word problems into equations
- Interpreting graphs and tables
- Applying math to practical scenarios
- Making predictions and drawing conclusions

## Word Problem Strategy

### The 4-Step Process

**Step 1: Understand the Problem**
- What are you asked to find?
- What information is given?
- Are there any constraints or conditions?

**Step 2: Translate to Math**
- Define variables
- Write equations or inequalities
- Identify which operation(s) to use

**Step 3: Solve**
- Apply appropriate mathematical techniques
- Work systematically
- Check your work as you go

**Step 4: Verify and Interpret**
- Does your answer make sense in context?
- Are units correct?
- Did you answer what was asked?

## Common Word Problem Types

### Distance, Rate, and Time

**Formula:** $d = rt$ (distance = rate × time)

**Also useful:**
- $r = \\frac{d}{t}$
- $t = \\frac{d}{r}$

**Example:** A car travels at 60 mph for 2.5 hours. How far does it go?

$$d = 60 \\times 2.5 = 150 \\text{ miles}$$

**Example 2:** Two cars leave the same point going opposite directions at 50 mph and 60 mph. How far apart after 3 hours?

**Car 1:** $d_1 = 50 \\times 3 = 150$ miles  
**Car 2:** $d_2 = 60 \\times 3 = 180$ miles  
**Total distance apart:** $150 + 180 = 330$ miles

### Work Rate Problems

**Formula:** $\\text{Work} = \\text{Rate} \\times \\text{Time}$

**Key:** If someone completes a job in $n$ hours, their rate is $\\frac{1}{n}$ job per hour

**Example:** Alice can paint a room in 6 hours. Bob can paint it in 4 hours. How long if they work together?

**Alice's rate:** $\\frac{1}{6}$ room/hour  
**Bob's rate:** $\\frac{1}{4}$ room/hour  
**Combined rate:** $\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$ room/hour

**Time together:** $\\frac{1}{\\frac{5}{12}} = \\frac{12}{5} = 2.4$ hours

### Mixture Problems

**Strategy:** Set up equation based on the component you're tracking

**Example:** How many liters of 20% acid solution must be added to 10 liters of 50% acid solution to get 30% solution?

Let $x$ = liters of 20% solution

**Equation (acid amounts):**
$$0.20x + 0.50(10) = 0.30(x + 10)$$
$$0.20x + 5 = 0.30x + 3$$
$$2 = 0.10x$$
$$x = 20 \\text{ liters}$$

### Age Problems

**Strategy:** Set up equation comparing ages at different times

**Example:** Sarah is currently 3 times as old as Tom. In 6 years, she'll be twice as old as Tom. How old is Tom now?

Let $t$ = Tom's current age

**Now:** Sarah is $3t$  
**In 6 years:** Tom is $t + 6$, Sarah is $3t + 6$

**Equation:**
$$3t + 6 = 2(t + 6)$$
$$3t + 6 = 2t + 12$$
$$t = 6$$

Tom is currently 6 years old.

### Percent Increase/Decrease

**Percent change:** $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$

**Successive changes:** Must apply one at a time (they don't add!)

**Example:** A price increases 20%, then decreases 20%. Is it back to original?

Start with $100:
- After 20% increase: $100 \\times 1.20 = 120$
- After 20% decrease: $120 \\times 0.80 = 96$

**No!** It's now $96, not $100 (4% less than original)

## Interpreting Graphs and Models

### Linear Models

**Form:** $y = mx + b$
- $m$ = slope (rate of change)
- $b$ = y-intercept (starting value)

**Example:** A gym charges $30 initiation fee plus $15 per month.

**Model:** $C = 15m + 30$
- $C$ = total cost
- $m$ = number of months
- Slope (15) = monthly rate
- Intercept (30) = one-time fee

**Questions:**
- Cost for 8 months? $C = 15(8) + 30 = 150$
- How many months for $180? $180 = 15m + 30$ → $m = 10$

### Quadratic Models

**Form:** $y = ax^2 + bx + c$

**Often models:**
- Projectile motion: $h(t) = -16t^2 + v_0t + h_0$
- Area: $A = x(50 - x)$ for optimization
- Profit: $P = -2x^2 + 100x - 500$

**Example:** A ball is thrown with height $h(t) = -16t^2 + 64t + 5$ (in feet, $t$ in seconds)

**Questions:**
- Maximum height? Find vertex: $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ seconds  
  $h(2) = -16(4) + 64(2) + 5 = 69$ feet

- When does it hit ground? Set $h(t) = 0$ and solve

### Exponential Models

**Growth:** $y = a(1 + r)^t$ where $r$ is growth rate  
**Decay:** $y = a(1 - r)^t$ where $r$ is decay rate

**Example:** Population starts at 10,000 and grows 3% per year.

**Model:** $P(t) = 10000(1.03)^t$

**After 5 years:** $P(5) = 10000(1.03)^5 \\approx 11,593$

## Setting Up Equations from Descriptions

### Key Phrases

**Addition:**
- sum, total, more than, increased by
- "5 more than $x$" → $x + 5$

**Subtraction:**
- difference, less than, decreased by, fewer
- "5 less than $x$" → $x - 5$
- "5 fewer than $x$" → $x - 5$
- **CAREFUL:** "5 subtracted from $x$" → $x - 5$ (NOT $5 - x$)

**Multiplication:**
- product, times, of (with percent/fraction)
- "20% of $x$" → $0.20x$
- "twice $x$" → $2x$

**Division:**
- quotient, per, ratio
- "$x$ divided by 5" → $\\frac{x}{5}$
- "the ratio of $x$ to 5" → $\\frac{x}{5}$

**Equals:**
- is, equals, is equal to, is the same as

## Problem-Solving Strategies

### Strategy 1: Plug In Answer Choices

**When:** Problem asks "which value" or gives numeric choices

**How:** Start with middle choice (often C), test if it works

**Example:** For what value of $x$ does $2x + 5 = 13$?  
A) 2  B) 4  C) 6  D) 8  E) 10

**Try C (6):** $2(6) + 5 = 17$ (too big)  
**Try B (4):** $2(4) + 5 = 13$ ✓

### Strategy 2: Pick Numbers

**When:** Problem has variables and asks "which expression"

**How:** Choose simple numbers for variables, test each answer choice

**Example:** If $n$ is an even integer, which is always odd?

**Pick $n = 4$:**
- $n + 1 = 5$ (odd) ✓
- $2n = 8$ (even)
- $n^2 = 16$ (even)

### Strategy 3: Draw a Diagram

**When:** Geometry or spatial reasoning problems

**How:** Sketch the situation, label what you know

**Helps with:** Triangle problems, distance problems, optimization

### Strategy 4: Work Backwards

**When:** You know the end result and need to find the start

**Example:** After increasing a number by 20% and then subtracting 15, the result is 45. What was the original number?

**Work backwards:**
- Before subtracting 15: $45 + 15 = 60$
- Before 20% increase: $\\frac{60}{1.20} = 50$

**Original number: 50**

### Strategy 5: Create a Table or List

**When:** Pattern problems or multiple cases to track

**How:** Organize information systematically

**Example:** A bacteria population doubles every hour. If it starts at 100, what's the population after 4 hours?

| Hour | Population |
|------|------------|
| 0    | 100        |
| 1    | 200        |
| 2    | 400        |
| 3    | 800        |
| 4    | 1600       |

**Answer: 1600**

## ACT Question Types

### Type 1: Direct Translation

**Strategy:** Convert words to math step-by-step

### Type 2: Rate Problems

**Strategy:** Identify $d = rt$ components, set up equation

### Type 3: Optimization

**Strategy:** 
- Set up equation for what you're maximizing/minimizing
- Often involves quadratic with vertex

### Type 4: Graph Interpretation

**Strategy:**
- Identify what each axis represents
- Read slope as rate of change
- Use points to answer questions

### Type 5: Multi-Step Problems

**Strategy:**
- Break into smaller steps
- Solve one part at a time
- Use first answer to get second

## Common ACT Mistakes

❌ **Solving for wrong variable** — read what they ask for!  
❌ **Not checking answer in context** — negative age? That's impossible!  
❌ **Rushing translation** — "5 less than $x$" is $x - 5$, not $5 - x$  
❌ **Forgetting units** — mixing hours and minutes, miles and feet  
❌ **Adding percents** — 20% increase then 30% increase ≠ 50% increase!  
❌ **Not labeling variables clearly** — leads to equation errors

## Quick Tips for ACT

✓ **Underline what you're asked to find** — stay focused  
✓ **Define variables explicitly** — write "$x$ = number of hours"  
✓ **Draw pictures** for geometry and distance problems  
✓ **Check units** — convert to same units before calculating  
✓ **Estimate first** — helps eliminate wrong answers  
✓ **Use answer choices** — can plug in to check  
✓ **Read ENTIRE problem** before starting

## Formula Reference

| Situation | Formula |
|-----------|---------|
| Distance | $d = rt$ |
| Work Rate | $\\text{Rate} = \\frac{1}{\\text{time to complete}}$ |
| Combined Work | $\\text{Rate}_1 + \\text{Rate}_2 = \\text{Rate}_{\\text{together}}$ |
| Percent Change | $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$ |
| Linear Growth | $y = mx + b$ |
| Exponential Growth | $y = a(1 + r)^t$ |
| Projectile Height | $h(t) = -16t^2 + v_0t + h_0$ |

## Practice Approach

1. **Read twice** — once for overall, once for details
2. **Identify what you're finding** — circle or underline it
3. **List what you know** — write down given information
4. **Choose a strategy** — translate, plug in, draw, etc.
5. **Set up equation carefully** — define variables
6. **Solve systematically** — show work
7. **Check in context** — does answer make sense?
8. **Verify you answered the question** — did they ask for $x$ or $2x + 5$?

**Remember:** Modeling problems test your ability to apply math to real situations. Stay organized, translate carefully, and always check if your answer makes sense!
`
    }
  });

  console.log('✅ Filled Modeling and Problem Solving topic\n');
  console.log('🎉 ACT Math Batch 1 Complete - 3 topics filled!\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
