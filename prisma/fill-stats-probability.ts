import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Probability (7 topics)...\n');

  // Topic 1: Basic Probability Rules
  await prisma.topic.update({
    where: { slug: 'basic-probability-rules' },
    data: {
      textContent: `# Basic Probability Rules

## Probability Basics

**Probability:** Measure of likelihood an event occurs (0 to 1)

**P(A) = 0** → Event A is impossible  
**P(A) = 1** → Event A is certain  
**0 < P(A) < 1** → Event A may or may not occur

**Complement:** Event A doesn't occur, denoted $$A^c$$ or $$\\bar{A}$$

$$P(A^c) = 1 - P(A)$$

## Sample Space and Events

**Sample Space (S):** Set of all possible outcomes  
**Event:** Subset of sample space

**Example:** Roll a die
- Sample space: S = {1, 2, 3, 4, 5, 6}
- Event "even number": E = {2, 4, 6}
- P(E) = 3/6 = 0.5

## Computing Probability

**Equally likely outcomes:**

$$P(A) = \\frac{\\text{Number of outcomes in A}}{\\text{Total number of outcomes}}$$

**Example:** Deck of cards, P(Heart) = 13/52 = 1/4

**Relative frequency (empirical probability):**

$$P(A) \\approx \\frac{\\text{Number of times A occurred}}{\\text{Total number of trials}}$$

## Addition Rule (OR)

**For any two events A and B:**

$$P(A \\text{ or } B) = P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

**Why subtract P(A ∩ B)?** Avoid double-counting outcomes in both A and B

**Example:** Draw one card
- P(Heart) = 13/52
- P(Face card) = 12/52
- P(Heart and Face) = 3/52
- P(Heart or Face) = 13/52 + 12/52 - 3/52 = 22/52

## Mutually Exclusive Events

**Definition:** Events that cannot both occur (no overlap)

**If A and B are mutually exclusive:** P(A ∩ B) = 0

**Addition Rule simplifies:**

$$P(A \\text{ or } B) = P(A) + P(B)$$

**Example:** Roll a die
- Event A: Roll 2
- Event B: Roll 5
- These are mutually exclusive (can't roll both)
- P(A or B) = 1/6 + 1/6 = 2/6 = 1/3

**Non-example:** P(Heart) and P(Ace) are NOT mutually exclusive (Ace of Hearts is in both)

## Multiplication Rule (AND)

**For any two events:**

$$P(A \\text{ and } B) = P(A \\cap B) = P(A) \\times P(B|A)$$

Where P(B|A) = probability of B given A occurred

**We'll explore this more in conditional probability topic**

## Independent Events (Preview)

**If A and B are independent:** P(B|A) = P(B)

**Multiplication Rule simplifies:**

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example:** Flip coin twice
- P(First heads) = 1/2
- P(Second heads) = 1/2
- P(Both heads) = 1/2 × 1/2 = 1/4

## Probability Rules Summary

**Rule 1:** For any event A, 0 ≤ P(A) ≤ 1

**Rule 2:** P(S) = 1 (something in sample space must occur)

**Rule 3:** Complement Rule: P(A^c) = 1 - P(A)

**Rule 4:** Addition Rule: P(A or B) = P(A) + P(B) - P(A and B)

**Rule 5:** If mutually exclusive: P(A or B) = P(A) + P(B)

**Rule 6:** Multiplication Rule: P(A and B) = P(A) × P(B|A)

**Rule 7:** If independent: P(A and B) = P(A) × P(B)

## Venn Diagrams

Visual tool for probability:

**Union (A or B):** Everything in A or B or both  
**Intersection (A and B):** Overlap of A and B  
**Complement (A^c):** Everything outside A

Use Venn diagrams to visualize and organize probability problems.

## Tree Diagrams

**Useful for sequential events:**
- Each branch represents outcome
- Multiply probabilities along path
- Add probabilities of different paths to same outcome

**Example:** Flip coin twice
- First flip: 1/2 Heads, 1/2 Tails
- Second flip: 1/2 Heads, 1/2 Tails
- P(HH) = 1/2 × 1/2 = 1/4
- P(exactly one head) = P(HT) + P(TH) = 1/4 + 1/4 = 1/2

## Common Mistakes

❌ Adding probabilities when should multiply (AND vs OR confusion)  
❌ Forgetting to subtract overlap in addition rule  
❌ Assuming events are independent when they're not  
❌ Confusing mutually exclusive with independent

## Practice Strategy

1. **Identify:** What event(s) are we finding probability for?
2. **Determine:** AND (multiply) or OR (add)?
3. **Check:** Mutually exclusive? Independent?
4. **Calculate:** Apply appropriate rule
5. **Verify:** Does answer make sense (between 0 and 1)?

## Quick Reference

**Complement:** P(A^c) = 1 - P(A)  
**OR (Addition):** P(A or B) = P(A) + P(B) - P(A and B)  
**AND (Multiplication):** P(A and B) = P(A) × P(B|A)  
**Mutually Exclusive OR:** P(A or B) = P(A) + P(B)  
**Independent AND:** P(A and B) = P(A) × P(B)
`
    }
  });
  console.log('✅ Filled Basic Probability Rules\n');

  // Topic 2: Conditional Probability
  await prisma.topic.update({
    where: { slug: 'conditional-probability-stats' },
    data: {
      textContent: `# Conditional Probability

## What is Conditional Probability?

**Conditional Probability:** Probability of event A given that event B has occurred

**Notation:** P(A|B) (read: "probability of A given B")

**Key insight:** New information (B occurred) changes the probability of A

## Conditional Probability Formula

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

where P(B) > 0

**Interpretation:** Of all outcomes where B occurred, what fraction also have A?

**Denominator P(B):** Reduces sample space to just outcomes in B  
**Numerator P(A ∩ B):** Outcomes in both A and B

## Example 1: Two-Way Table

**Survey of 100 students:**

|           | Male | Female | Total |
|-----------|------|--------|-------|
| Athlete   | 25   | 15     | 40    |
| Non-athlete| 35   | 25     | 60    |
| Total     | 60   | 40     | 100   |

**Find P(Athlete|Male):**

$$P(\\text{Athlete}|\\text{Male}) = \\frac{P(\\text{Athlete and Male})}{P(\\text{Male})} = \\frac{25/100}{60/100} = \\frac{25}{60} = \\frac{5}{12}$$

**Interpretation:** Of the 60 male students, 25 are athletes, so 25/60 = 5/12

**Alternative approach:** Restrict to males only (60 students), find fraction who are athletes (25/60)

## Example 2: Cards

**Draw one card from standard deck.**

P(Ace|Red) = ?

- P(Red) = 26/52
- P(Ace and Red) = 2/52 (Ace of Hearts, Ace of Diamonds)
- P(Ace|Red) = (2/52)/(26/52) = 2/26 = 1/13

**Interpretation:** Of 26 red cards, 2 are aces

## Rearranging the Formula

**Multiplication Rule:**

$$P(A \\cap B) = P(B) \\times P(A|B)$$

Also:

$$P(A \\cap B) = P(A) \\times P(B|A)$$

**Use:** Find probability of both events when you know conditional probability

**Example:** P(Draw 2 aces without replacement)
- P(First ace) = 4/52
- P(Second ace|First ace) = 3/51
- P(Both aces) = (4/52) × (3/51) = 12/2652 = 1/221

## Independence Test

**Events A and B are independent if:**

$$P(A|B) = P(A)$$

**Equivalently:** P(B|A) = P(B)

**Meaning:** Knowing B occurred doesn't change probability of A

**Example:** Flip coin twice
- P(Second heads) = 1/2
- P(Second heads|First heads) = 1/2
- These are equal, so independent

**Non-example:** Cards without replacement
- P(Second ace) = 4/52 (before first draw)
- P(Second ace|First ace) = 3/51
- These differ, so NOT independent

## Tree Diagrams for Conditional Probability

**Example:** Disease testing
- P(Disease) = 0.01
- P(Positive|Disease) = 0.95 (sensitivity)
- P(Positive|No disease) = 0.05 (false positive rate)

**Find P(Positive):**

Tree diagram:
- Branch 1: Disease (0.01) → Positive (0.95): 0.01 × 0.95 = 0.0095
- Branch 2: Disease (0.01) → Negative (0.05): 0.01 × 0.05 = 0.0005
- Branch 3: No disease (0.99) → Positive (0.05): 0.99 × 0.05 = 0.0495
- Branch 4: No disease (0.99) → Negative (0.95): 0.99 × 0.95 = 0.9405

P(Positive) = 0.0095 + 0.0495 = 0.059

## Bayes' Theorem

**Find P(B|A) when you know P(A|B):**

$$P(B|A) = \\frac{P(A|B) \\times P(B)}{P(A)}$$

**Example continued:** Find P(Disease|Positive)

$$P(\\text{Disease}|\\text{Positive}) = \\frac{P(\\text{Positive}|\\text{Disease}) \\times P(\\text{Disease})}{P(\\text{Positive})}$$

$$= \\frac{0.95 \\times 0.01}{0.059} = \\frac{0.0095}{0.059} \\approx 0.161$$

**Interpretation:** Even with positive test, only 16.1% chance of having disease (because disease is rare!)

## Common Two-Way Table Calculations

Given table with events A and B:

**Joint probability:** P(A and B) = (count in both)/(total)

**Marginal probability:** P(A) = (row/column total)/(grand total)

**Conditional probability:** P(A|B) = (count in both)/(count in B)

## Conditional Probability Notation

P(A|B) ≠ P(B|A) (usually)

**Example:**
- P(Positive test|Disease) = 0.95 (sensitivity)
- P(Disease|Positive test) = 0.161 (very different!)

**Always read carefully and identify which event is the condition!**

## Applications

**Medical testing:** P(Disease|Positive test)  
**Quality control:** P(Defective|From certain machine)  
**Weather:** P(Rain tomorrow|Rain today)  
**Sports:** P(Win|Home game)

## Common Mistakes

❌ Confusing P(A|B) with P(B|A)  
❌ Assuming conditional independence means independence  
❌ Forgetting to restrict to condition when calculating from table  
❌ Using wrong denominator in formula

## Practice Approach

1. **Identify condition:** What do we know occurred?
2. **Restrict sample space:** Consider only outcomes where condition is true
3. **Find fraction:** Of those outcomes, what fraction satisfies event?
4. **Check:** P(A|B) should be between 0 and 1

## Quick Reference

**Definition:** $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

**Multiplication Rule:** $$P(A \\cap B) = P(B) \\times P(A|B)$$

**Independence Test:** P(A|B) = P(A)

**Bayes' Theorem:** $$P(B|A) = \\frac{P(A|B) \\times P(B)}{P(A)}$$

**Remember:** Conditional probability is about updating probabilities based on new information!
`
    }
  });
  console.log('✅ Filled Conditional Probability\n');

  // Topic 3: Independence
  await prisma.topic.update({
    where: { slug: 'independence-stats' },
    data: {
      textContent: `# Independence

## What is Independence?

**Independent Events:** Occurrence of one event doesn't affect probability of the other

**Formal definition:** Events A and B are independent if:

$$P(A|B) = P(A)$$

**Equivalently:**
- P(B|A) = P(B)
- P(A ∩ B) = P(A) × P(B)

**Key insight:** Knowing one occurred gives no information about the other

## Testing for Independence

**Method 1: Conditional Probability**

Check if P(A|B) = P(A)

**Example:** Flip coin twice
- P(H on flip 2) = 1/2
- P(H on flip 2|H on flip 1) = 1/2
- Equal → Independent

**Method 2: Multiplication Rule**

Check if P(A and B) = P(A) × P(B)

**Example:** Roll die, flip coin
- P(6 on die) = 1/6
- P(H on coin) = 1/2
- P(6 and H) = 1/12 = 1/6 × 1/2 ✓
- Independent

**Method 3: Two-Way Table**

For independence, each cell should equal (row total × column total)/grand total

## Independence vs Mutually Exclusive

**IMPORTANT:** Independent ≠ Mutually Exclusive

**Mutually Exclusive:** Can't both occur (P(A ∩ B) = 0)  
**Independent:** One doesn't affect other (P(A ∩ B) = P(A) × P(B))

**In fact:** If P(A) > 0 and P(B) > 0, mutually exclusive events are DEPENDENT!

**Why?** If A occurs, B definitely can't occur, so P(B|A) = 0 ≠ P(B)

**Example:**
- A: Roll 2 on die
- B: Roll 5 on die
- Mutually exclusive (can't both happen)
- NOT independent (if A occurs, B can't, so they're dependent)

## Independence in Practice

**Sampling with replacement:** Draws are independent  
**Sampling without replacement:** Draws are dependent

**Example:** Two cards from deck

**With replacement:**
- P(First ace) = 4/52
- P(Second ace|First ace) = 4/52 (replaced first card)
- P(Second ace) = 4/52
- Independent ✓

**Without replacement:**
- P(First ace) = 4/52
- P(Second ace|First ace) = 3/51
- P(Second ace) ≈ 4/52 (overall, across all possible first cards)
- NOT independent (but close if sample is tiny compared to population)

## 10% Condition

**Rule of thumb:** If sample size < 10% of population, treat as independent even without replacement

**Why?** Removing small fraction doesn't appreciably change probabilities

**Example:** 5 cards from deck
- 5/52 ≈ 9.6% < 10%
- Can approximate as independent (slight error)

**Example:** 20 cards from deck
- 20/52 ≈ 38% > 10%
- Must account for dependence

## Multiplication Rule for Independent Events

**If A and B are independent:**

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Extends to multiple events:**

$$P(A_1 \\text{ and } A_2 \\text{ and } ... \\text{ and } A_n) = P(A_1) \\times P(A_2) \\times ... \\times P(A_n)$$

**Example:** Flip coin 3 times, P(HHH) = 1/2 × 1/2 × 1/2 = 1/8

## At Least One Calculations

**"At least one" problems:** Often easier to use complement

P(At least one A) = 1 - P(No A)

**Example:** Flip coin 3 times, find P(at least one head)

**Long way:**
P(1H) + P(2H) + P(3H) = complicated

**Short way:**
P(At least 1H) = 1 - P(No H) = 1 - P(TTT) = 1 - (1/2)³ = 1 - 1/8 = 7/8

**Example:** Shoot basketball, 70% success rate, 3 attempts

P(Make at least one) = 1 - P(Miss all 3) = 1 - (0.3)³ = 1 - 0.027 = 0.973

## Checking Independence from Two-Way Table

**100 students:**

|           | Male | Female | Total |
|-----------|------|--------|-------|
| Athlete   | 24   | 16     | 40    |
| Non-athlete| 36   | 24     | 60    |
| Total     | 60   | 40     | 100   |

**Check independence of Athlete and Male:**

**Method 1:** 
- P(Athlete) = 40/100 = 0.4
- P(Athlete|Male) = 24/60 = 0.4
- Equal → Independent ✓

**Method 2:**
- P(Athlete and Male) = 24/100 = 0.24
- P(Athlete) × P(Male) = (40/100) × (60/100) = 0.4 × 0.6 = 0.24
- Equal → Independent ✓

**Method 3:** Expected cell count
- Expected = (row total × column total)/grand total = (40 × 60)/100 = 24
- Actual = 24
- Equal → Independent ✓

## Real-World Independence

**Independent (usually):**
- Coin flips
- Die rolls
- Different people's responses (if random sample)
- Successive free throws (debatable!)
- Rain in New York and LA on same day

**Dependent:**
- Cards without replacement
- Success/failure of teammates
- Weather on consecutive days
- Stock prices over time
- Contagious disease among contacts

## Independence of Complements

**If A and B are independent:**
- A and B^c are independent
- A^c and B are independent
- A^c and B^c are independent

**Example:** Two independent coin flips
- If flips are independent, then "First heads" and "Second tails" are also independent

## Common Mistakes

❌ Assuming events are independent without checking  
❌ Thinking mutually exclusive means independent (opposite!)  
❌ Forgetting 10% condition for sampling  
❌ Using multiplication rule when events aren't independent  
❌ Confusing P(A and B) with P(A) + P(B)

## Practice Strategy

1. **Question:** Are events independent?
2. **Test:** Check if P(A|B) = P(A) or P(A and B) = P(A) × P(B)
3. **Context:** Does it make sense? (Replacement? Separate processes?)
4. **Calculate:** Use appropriate rule (multiply if independent)

## Quick Reference

**Definition:** P(A|B) = P(A) or P(B|A) = P(B)

**Multiplication:** P(A and B) = P(A) × P(B) if independent

**Complement:** P(At least 1) = 1 - P(None)

**10% Rule:** Treat as independent if n < 0.10N

**Key:** Independent ≠ Mutually Exclusive

**Remember:** Independence means events don't influence each other. Always verify independence before using multiplication rule!
`
    }
  });
  console.log('✅ Filled Independence\n');

  // Topic 4: Discrete Random Variables
  await prisma.topic.update({
    where: { slug: 'discrete-random-variables' },
    data: {
      textContent: `# Discrete Random Variables

## What is a Random Variable?

**Random Variable:** Variable whose value is determined by outcome of random process

**Notation:** Usually capital letters (X, Y, Z)

**Discrete Random Variable:** Takes on countable set of values (often integers)

**Examples:**
- X = number of heads in 3 coin flips (X can be 0, 1, 2, or 3)
- Y = number of students absent (Y can be 0, 1, 2, ...)
- Z = sum when rolling two dice (Z can be 2, 3, ..., 12)

## Probability Distribution

**Probability Distribution:** Lists all possible values and their probabilities

**Requirements:**
1. Each probability between 0 and 1: 0 ≤ P(X = x) ≤ 1
2. Probabilities sum to 1: ΣP(X = x) = 1

**Example:** Flip coin 2 times, X = number of heads

| X | P(X = x) |
|---|----------|
| 0 | 0.25     |
| 1 | 0.50     |
| 2 | 0.25     |

Sum: 0.25 + 0.50 + 0.25 = 1 ✓

## Mean of Discrete Random Variable

**Mean (Expected Value):** $$\\mu_X$$ or E(X)

**Formula:**

$$\\mu_X = E(X) = \\sum x \\cdot P(X = x)$$

**Interpretation:** Long-run average if process repeated many times

**Example:** X = number of heads in 2 flips

$$\\mu_X = 0(0.25) + 1(0.50) + 2(0.25) = 0 + 0.50 + 0.50 = 1$$

**Interpretation:** On average, expect 1 head in 2 flips

**Note:** Mean doesn't have to be possible value! (E.g., average family has 2.3 children)

## Variance and Standard Deviation

**Variance:** $$\\sigma_X^2$$ or Var(X)

**Formula:**

$$\\sigma_X^2 = \\sum (x - \\mu_X)^2 \\cdot P(X = x)$$

**Alternative (easier calculation):**

$$\\sigma_X^2 = \\sum x^2 \\cdot P(X = x) - \\mu_X^2$$

**Standard Deviation:** $$\\sigma_X = \\sqrt{\\sigma_X^2}$$

**Example:** X = heads in 2 flips (μ_X = 1)

$$\\sigma_X^2 = (0-1)^2(0.25) + (1-1)^2(0.50) + (2-1)^2(0.25)$$
$$= 1(0.25) + 0(0.50) + 1(0.25) = 0.50$$

$$\\sigma_X = \\sqrt{0.50} \\approx 0.707$$

**Alternative calculation:**

$$\\sigma_X^2 = [0^2(0.25) + 1^2(0.50) + 2^2(0.25)] - 1^2$$
$$= [0 + 0.50 + 1] - 1 = 0.50$$

## Linear Transformations

**If Y = a + bX:**

$$\\mu_Y = a + b\\mu_X$$

$$\\sigma_Y = |b|\\sigma_X$$

**Note:** Adding constant shifts mean but doesn't change spread. Multiplying affects both.

**Example:** X = quiz score (0-10), μ_X = 7, σ_X = 2
Convert to percentage: Y = 10X

$$\\mu_Y = 10(7) = 70\\%$$
$$\\sigma_Y = 10(2) = 20\\%$$

**Example:** Temperature conversion F = 32 + 1.8C
If μ_C = 20°C, σ_C = 5°C:

$$\\mu_F = 32 + 1.8(20) = 68°F$$
$$\\sigma_F = 1.8(5) = 9°F$$

## Combining Independent Random Variables

**If X and Y are independent:**

**Sum:** Z = X + Y
$$\\mu_Z = \\mu_X + \\mu_Y$$
$$\\sigma_Z^2 = \\sigma_X^2 + \\sigma_Y^2$$

**Difference:** W = X - Y
$$\\mu_W = \\mu_X - \\mu_Y$$
$$\\sigma_W^2 = \\sigma_X^2 + \\sigma_Y^2$$ (variances always add!)

**Example:** X = score on test 1 (μ = 80, σ = 10)
Y = score on test 2 (μ = 75, σ = 12)
Total = X + Y

$$\\mu_{Total} = 80 + 75 = 155$$
$$\\sigma_{Total} = \\sqrt{10^2 + 12^2} = \\sqrt{244} \\approx 15.6$$

**Key:** Standard deviations don't add; variances do!

## Expected Value Applications

**Fair game:** E(winnings) = 0

**Example:** Pay $1, roll die. Win $5 if roll 6, $0 otherwise.

$$E(net) = 5(1/6) + (-1)(5/6) = 5/6 - 5/6 = 0$$

Fair game!

**Expected profit/loss:**

**Example:** Lottery ticket costs $2, prize $1,000,000, probability 1/1,000,000

$$E(net) = 999,998(1/1,000,000) + (-2)(999,999/1,000,000)$$
$$\\approx 1 - 2 = -\\$1$$

Expect to lose $1 per ticket on average

## Probability Histogram

**Visual representation** of probability distribution
- X-axis: Values of X
- Y-axis: Probabilities
- Height of bar = P(X = x)
- Bars don't touch (discrete)

**Properties:**
- Area of bar = probability
- Total area = 1

## Common Notation

P(X = 3): Probability X equals 3  
P(X ≤ 3): Probability X is at most 3 (cumulative)  
P(X < 3): Probability X is less than 3  
P(2 ≤ X ≤ 5): Probability X is between 2 and 5 inclusive

**For discrete variables:** P(X ≤ 3) includes P(X = 3)

## Cumulative Distribution Function (CDF)

**CDF:** P(X ≤ x)

Sum probabilities up to and including x

**Example:** X has distribution in earlier example

P(X ≤ 1) = P(X = 0) + P(X = 1) = 0.25 + 0.50 = 0.75

## Common Discrete Distributions

**Binomial:** Fixed trials, success/failure, constant probability  
**Geometric:** Trials until first success  
**Poisson:** Count of events in interval

(Each has its own topic with specific formulas!)

## Common Mistakes

❌ Forgetting probabilities must sum to 1  
❌ Confusing E(X) with most likely value  
❌ Adding standard deviations instead of variances  
❌ Forgetting absolute value for σ_Y when Y = a + bX  
❌ Using variance formula when independence doesn't hold

## Practice Strategy

1. **List:** All possible values
2. **Find:** Probability for each value
3. **Verify:** Probabilities sum to 1
4. **Calculate:** μ and σ using formulas
5. **Interpret:** What do mean and SD tell us?

## Quick Reference

**Mean:** $$\\mu_X = \\sum x \\cdot P(X = x)$$

**Variance:** $$\\sigma_X^2 = \\sum (x - \\mu_X)^2 \\cdot P(X = x)$$

**Linear Transform:** Y = a + bX gives μ_Y = a + bμ_X, σ_Y = |b|σ_X

**Sum/Difference:** μ adds/subtracts, variances always add

**Remember:** Mean is long-run average. Standard deviation measures variability. For sums/differences of independent variables, variances add!
`
    }
  });
  console.log('✅ Filled Discrete Random Variables\n');

  // Topic 5: Binomial Distribution
  await prisma.topic.update({
    where: { slug: 'binomial-distribution-stats' },
    data: {
      textContent: `# Binomial Distribution

## When to Use Binomial

**BINS conditions:**

**B**inary: Each trial has two outcomes (success/failure)  
**I**ndependent: Trials independent of each other  
**N**umber: Fixed number of trials (n)  
**S**ame: Probability of success (p) same for each trial

**If BINS met → Use Binomial distribution**

**Notation:** X ~ Binomial(n, p)

## Binomial Probability Formula

**Probability of exactly k successes in n trials:**

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

Where:
- $$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$ is the binomial coefficient
- n = number of trials
- k = number of successes
- p = probability of success on each trial

## Example 1: Coin Flips

**Flip fair coin 5 times. Find P(exactly 3 heads).**

Check BINS:
- Binary: Heads or tails ✓
- Independent: Flips independent ✓
- Number: n = 5 trials ✓
- Same: p = 0.5 each flip ✓

Calculate:

$$P(X = 3) = \\binom{5}{3} (0.5)^3 (0.5)^2$$

$$= \\frac{5!}{3!2!} (0.5)^3 (0.5)^2 = 10(0.125)(0.25) = 0.3125$$

## Example 2: Free Throws

**Basketball player makes 70% of free throws. Shoots 10. Find P(exactly 8 makes).**

X ~ Binomial(10, 0.7)

$$P(X = 8) = \\binom{10}{8} (0.7)^8 (0.3)^2$$

$$= 45(0.05764801)(0.09) \\approx 0.2335$$

## Calculating Binomial Coefficient

$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$

**Calculator:** nCr function
- On TI-83/84: 5 nCr 3 = 10

**Example:** $$\\binom{5}{3} = \\frac{5!}{3!2!} = \\frac{120}{6 \\cdot 2} = 10$$

## Mean and Standard Deviation

**Mean (Expected Value):**

$$\\mu_X = np$$

**Standard Deviation:**

$$\\sigma_X = \\sqrt{np(1-p)}$$

**Example:** n = 100 free throws, p = 0.7

$$\\mu_X = 100(0.7) = 70$$
$$\\sigma_X = \\sqrt{100(0.7)(0.3)} = \\sqrt{21} \\approx 4.58$$

**Interpretation:** Expect about 70 makes, typically within about 4.58 of that

## Cumulative Probabilities

**P(X ≤ k):** Use binomcdf on calculator

**P(X < k):** P(X ≤ k-1)

**P(X ≥ k):** 1 - P(X ≤ k-1)

**P(X > k):** 1 - P(X ≤ k)

**Example:** X ~ Binomial(20, 0.3), find P(X ≤ 5)

Calculator: binomcdf(20, 0.3, 5) ≈ 0.4164

**Example:** P(X ≥ 8) = 1 - P(X ≤ 7) = 1 - binomcdf(20, 0.3, 7) ≈ 0.0867

## Calculator Commands (TI-83/84)

**binompdf(n, p, k):** P(X = k)
- Example: binompdf(10, 0.7, 8)

**binomcdf(n, p, k):** P(X ≤ k)
- Example: binomcdf(10, 0.7, 8)

**Access:** 2nd VARS (DISTR) → binompdf or binomcdf

## Probability Distribution Graph

For Binomial(10, 0.5):
- Symmetric (when p = 0.5)
- Centered at mean (np = 5)
- Bell-shaped (approximates normal for large n)

For Binomial(10, 0.2):
- Right-skewed (when p < 0.5)
- Centered at mean (np = 2)

For Binomial(10, 0.8):
- Left-skewed (when p > 0.5)
- Centered at mean (np = 8)

## Normal Approximation

**When n is large, Binomial approximates Normal:**

**Rule of thumb:** Use if np ≥ 10 and n(1-p) ≥ 10

**Then:** X ~ N(np, √(np(1-p))) approximately

**Example:** X ~ Binomial(100, 0.5)
- np = 50 ≥ 10 ✓
- n(1-p) = 50 ≥ 10 ✓
- Approximate: X ~ N(50, 5)

**Use continuity correction:** P(X ≤ 45) ≈ P(Y ≤ 45.5) where Y ~ N(50, 5)

## Sampling Without Replacement

**Technically not binomial** (independence violated)

**10% condition:** If sample size < 10% of population, binomial is good approximation

**Example:** 5 cards from 52-card deck
- 5/52 ≈ 9.6% < 10%
- Can use binomial as approximation

**Example:** 20 cards from 52-card deck
- 20/52 ≈ 38% > 10%
- Should use hypergeometric distribution, not binomial

## Common Applications

**Quality control:** Defective items in sample  
**Medical:** Treatment success in patients  
**Testing:** Correct answers by guessing  
**Genetics:** Offspring with certain trait  
**Sports:** Makes/misses in attempts

## Example 3: Multiple-Choice Test

**20 questions, 5 choices each. Find P(pass by guessing) if passing is 60%.**

X ~ Binomial(20, 0.2)

Pass means X ≥ 12

$$P(X \\geq 12) = 1 - P(X \\leq 11)$$

Calculator: 1 - binomcdf(20, 0.2, 11) ≈ 0.0009

Very unlikely to pass by guessing!

## Common Mistakes

❌ Forgetting to check BINS conditions  
❌ Using binomial when sampling without replacement (>10% of population)  
❌ Confusing P(X ≤ k) with P(X < k)  
❌ Using wrong formula (mean, SD, or probability)  
❌ Calculator syntax errors

## Practice Strategy

1. **Verify BINS:** All four conditions met?
2. **Identify:** n = ? and p = ?
3. **Determine:** What are we finding? P(X = k)? P(X ≤ k)?
4. **Calculate:** Use formula or calculator
5. **Check:** Does answer make sense?

## Quick Reference

**BINS Conditions:** Binary, Independent, Number fixed, Same probability

**Probability:** $$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

**Mean:** $$\\mu = np$$

**SD:** $$\\sigma = \\sqrt{np(1-p)}$$

**Calculator:**
- binompdf(n, p, k) for P(X = k)
- binomcdf(n, p, k) for P(X ≤ k)

**Remember:** Check BINS conditions first! If met, binomial distribution provides powerful tool for calculating probabilities of success counts.
`
    }
  });
  console.log('✅ Filled Binomial Distribution\n');

  // Topic 6: Geometric Distribution
  await prisma.topic.update({
    where: { slug: 'geometric-distribution' },
    data: {
      textContent: `# Geometric Distribution

## When to Use Geometric

**Geometric distribution:** Models number of trials until first success

**Conditions:**

1. **Binary:** Each trial has two outcomes (success/failure)
2. **Independent:** Trials independent
3. **Same:** Probability of success (p) constant
4. **Trials until success:** Count trials up to and including first success

**Key difference from Binomial:** Number of trials NOT fixed (varies randomly)

**Notation:** X ~ Geometric(p)

## Geometric Probability Formula

**Probability first success occurs on trial k:**

$$P(X = k) = (1-p)^{k-1} \\cdot p$$

**Interpretation:**
- Fail (k-1) times: probability (1-p)^(k-1)
- Succeed on kth trial: probability p
- Multiply together

## Example 1: Rolling a Six

**Roll die until get a 6. Find P(first 6 on roll 3).**

p = 1/6 (probability of rolling 6)

$$P(X = 3) = (5/6)^2 \\cdot (1/6) = (25/36)(1/6) = 25/216 \\approx 0.116$$

**Interpretation:** Fail twice, succeed third time

## Example 2: Free Throws

**Player makes 80% of free throws. Find P(first make on shot 4).**

p = 0.8

$$P(X = 4) = (0.2)^3 (0.8) = 0.008(0.8) = 0.0064$$

**Interpretation:** Miss first 3 (unlikely for 80% shooter!), make 4th

## Mean and Standard Deviation

**Mean (Expected Value):**

$$\\mu_X = \\frac{1}{p}$$

**Standard Deviation:**

$$\\sigma_X = \\frac{\\sqrt{1-p}}{p}$$

**Example:** Roll die until 6 (p = 1/6)

$$\\mu_X = \\frac{1}{1/6} = 6$$

$$\\sigma_X = \\frac{\\sqrt{5/6}}{1/6} = \\sqrt{5/6} \\cdot 6 = 6\\sqrt{5/6} \\approx 5.48$$

**Interpretation:** On average, takes 6 rolls to get first 6

## Cumulative Probabilities

**P(X ≤ k):** First success within k trials

$$P(X \\leq k) = 1 - (1-p)^k$$

**Logic:** Complement of "fail all k trials"

**Example:** Die rolling, P(first 6 within 3 rolls)

$$P(X \\leq 3) = 1 - (5/6)^3 = 1 - 125/216 = 91/216 \\approx 0.421$$

**P(X > k):** More than k trials needed

$$P(X > k) = (1-p)^k$$

**Example:** P(need more than 3 rolls for first 6)

$$P(X > 3) = (5/6)^3 = 125/216 \\approx 0.579$$

## Calculator Commands (TI-83/84)

**geometpdf(p, k):** P(X = k)
- Example: geometpdf(1/6, 3)

**geometcdf(p, k):** P(X ≤ k)
- Example: geometcdf(1/6, 3)

**Access:** 2nd VARS (DISTR) → geometpdf or geometcdf

## Geometric vs Binomial

**Binomial:**
- Fixed n trials
- Count successes (X can be 0 to n)
- Question: "How many successes in n trials?"

**Geometric:**
- Variable trials (until first success)
- X = trial number of first success (1, 2, 3, ...)
- Question: "How many trials until first success?"

**Example distinguishing:**
- "Flip 10 coins, count heads" → Binomial
- "Flip until first heads" → Geometric

## Memoryless Property

**Unique property of geometric distribution:**

$$P(X > a + b | X > a) = P(X > b)$$

**Interpretation:** If already waited a trials without success, probability of waiting b more trials same as starting fresh

**Example:** Rolling die
- P(wait more than 6 rolls | already waited 3) = P(wait more than 3 rolls)
- Past failures don't affect future (each roll independent)

## Applications

**Manufacturing:** Inspecting items until find defect  
**Quality control:** Testing until failure  
**Gaming:** Playing until win  
**Biology:** Trials until mutation occurs  
**Sports:** At-bats until hit

## Example 3: Quality Control

**2% of widgets are defective. Inspect widgets one at a time.**

**(a) Expected number inspected until find defect?**

$$\\mu = \\frac{1}{p} = \\frac{1}{0.02} = 50$$

Expect to inspect 50 widgets on average

**(b) P(find defect within 10 inspections)?**

$$P(X \\leq 10) = 1 - (0.98)^{10} = 1 - 0.817 = 0.183$$

**(c) P(need more than 100 inspections)?**

$$P(X > 100) = (0.98)^{100} \\approx 0.133$$

## Probability Distribution Graph

For Geometric(0.3):
- Always right-skewed (starts at X=1)
- Decreasing probabilities (most likely: X=1)
- Long right tail (theoretically infinite)

For Geometric(0.8):
- Strongly concentrated at X=1
- Rapid decrease (high p means quick success likely)

## Relationship to Binomial

**For small p:** Geometric and binomial related

If X ~ Geometric(p), then after n trials, number of successes ~ Binomial(n, p)

But they answer different questions!

## Common Mistakes

❌ Using geometric when trials are fixed (should use binomial)  
❌ Starting count at 0 instead of 1 (X=1 is first trial)  
❌ Confusing P(X = k) with P(X ≤ k)  
❌ Forgetting memoryless property  
❌ Wrong mean formula (it's 1/p, not p)

## Practice Strategy

1. **Identify:** Trials until first success? (→ Geometric)
2. **Find p:** Probability of success each trial
3. **Determine question:** Exactly k trials? At most k? More than k?
4. **Apply formula** or use calculator
5. **Interpret:** Does answer make sense?

## Quick Reference

**Use when:** Counting trials until first success

**Probability:** $$P(X = k) = (1-p)^{k-1} p$$

**Mean:** $$\\mu = \\frac{1}{p}$$

**SD:** $$\\sigma = \\frac{\\sqrt{1-p}}{p}$$

**Cumulative:** $$P(X \\leq k) = 1 - (1-p)^k$$

**Calculator:**
- geometpdf(p, k) for P(X = k)
- geometcdf(p, k) for P(X ≤ k)

**Remember:** Geometric counts trials until first success. Mean = 1/p makes sense: if p=0.5, expect success on trial 2 on average!
`
    }
  });
  console.log('✅ Filled Geometric Distribution\n');

  // Topic 7: Continuous Random Variables
  await prisma.topic.update({
    where: { slug: 'continuous-random-variables' },
    data: {
      textContent: `# Continuous Random Variables

## Discrete vs Continuous

**Discrete Random Variable:** Countable values (0, 1, 2, ...)  
**Continuous Random Variable:** Uncountable values in interval (all real numbers in range)

**Examples of Continuous:**
- Height, weight, temperature
- Time (seconds, measured precisely)
- Distance
- Any measurement on continuous scale

**Key difference:** For continuous variables, P(X = exact value) = 0!

## Why P(X = c) = 0?

**Infinite possible values** in any interval

Probability spread across infinite points → each point has probability 0

**Example:** Height X uniformly distributed from 60 to 72 inches
- P(X = exactly 65.0000000... inches) = 0
- But P(64 < X < 66) > 0 (interval has positive probability)

**Therefore:** For continuous variables, focus on intervals, not exact values

## Probability Density Function (PDF)

**For continuous variable, use PDF: f(x)**

**Properties:**
1. f(x) ≥ 0 for all x
2. Total area under curve = 1
3. P(a < X < b) = area under f(x) from a to b

**Key:** f(x) is NOT a probability! (Can be > 1)  
Area under curve gives probability

## Finding Probabilities

**P(a < X < b) = area under PDF from a to b**

**Methods:**
- Geometry (for simple shapes: rectangles, triangles)
- Integration (for complex functions)
- Calculator/software (normalcdf for normal distribution)

**Example:** Uniform distribution on [0, 10]

f(x) = 1/10 for 0 ≤ x ≤ 10

P(3 < X < 7) = (7-3)(1/10) = 4/10 = 0.4

(Rectangle: width 4, height 1/10)

## Continuous vs Discrete Probabilities

**Discrete:** P(X = 5) has meaning

**Continuous:** 
- P(X = 5) = 0
- P(X < 5) = P(X ≤ 5) (no difference!)
- P(3 < X < 7) = P(3 ≤ X ≤ 7) = P(3 < X ≤ 7) = P(3 ≤ X < 7)

**All intervals with same endpoints have same probability for continuous variables**

## Mean of Continuous Random Variable

**Mean (Expected Value):** $$\\mu$$ or E(X)

**For uniform distribution on [a, b]:**

$$\\mu = \\frac{a + b}{2}$$

**Example:** X uniform on [0, 10]

$$\\mu = \\frac{0 + 10}{2} = 5$$

**General:** Mean is "balance point" of distribution

## Variance and Standard Deviation

**For uniform distribution on [a, b]:**

$$\\sigma^2 = \\frac{(b-a)^2}{12}$$

$$\\sigma = \\frac{b-a}{\\sqrt{12}} = \\frac{b-a}{2\\sqrt{3}}$$

**Example:** X uniform on [0, 10]

$$\\sigma^2 = \\frac{(10-0)^2}{12} = \\frac{100}{12} \\approx 8.33$$

$$\\sigma = \\frac{10}{\\sqrt{12}} \\approx 2.887$$

## Uniform Distribution

**Simplest continuous distribution**

**PDF:** f(x) = 1/(b-a) for a ≤ x ≤ b

**Shape:** Flat rectangle (constant height)

**Properties:**
- Mean: (a+b)/2
- All intervals of same length have same probability
- Symmetric around mean

**Example:** Bus arrives uniformly between 8:00 and 8:20 (20 minutes)

X = arrival time

- Mean: 10 minutes after 8:00
- P(arrive within first 5 min) = 5/20 = 0.25
- P(arrive between 8:05 and 8:15) = 10/20 = 0.5

## Cumulative Distribution Function (CDF)

**CDF:** F(x) = P(X ≤ x)

**For continuous:** Integral of PDF from -∞ to x

**Properties:**
- Increasing function (never decreases)
- lim F(x) as x → -∞ = 0
- lim F(x) as x → ∞ = 1

**Use:** P(a < X < b) = F(b) - F(a)

**Example:** Uniform on [0, 10]

$$F(x) = \\begin{cases} 0 & x < 0 \\\\ x/10 & 0 \\leq x \\leq 10 \\\\ 1 & x > 10 \\end{cases}$$

P(3 < X < 7) = F(7) - F(3) = 0.7 - 0.3 = 0.4

## Normal Distribution (Preview)

**Most important continuous distribution** (covered in depth in other topic)

**Bell-shaped curve**

**Characterized by:** Mean (μ) and standard deviation (σ)

**Notation:** X ~ N(μ, σ)

**Properties:**
- Symmetric around mean
- 68-95-99.7 rule
- Use normalcdf on calculator

## Percentiles and Quantiles

**pth percentile:** Value x where P(X ≤ x) = p

**Quartiles:**
- Q1 (25th percentile): P(X ≤ Q1) = 0.25
- Q2 (50th percentile, median): P(X ≤ Q2) = 0.5
- Q3 (75th percentile): P(X ≤ Q3) = 0.75

**Example:** Uniform on [0, 10]

Median = 5 (P(X ≤ 5) = 0.5)  
Q1 = 2.5 (P(X ≤ 2.5) = 0.25)  
Q3 = 7.5 (P(X ≤ 7.5) = 0.75)

## Linear Transformations

**Same rules as discrete:**

If Y = a + bX:

$$\\mu_Y = a + b\\mu_X$$

$$\\sigma_Y = |b|\\sigma_X$$

**Example:** Temperature
- C uniform on [0, 40]
- F = 32 + 1.8C
- μ_C = 20, σ_C = 40/√12
- μ_F = 32 + 1.8(20) = 68
- σ_F = 1.8(40/√12) = 72/√12

## Combining Independent Variables

**Same rules as discrete:**

If X and Y independent:
- μ_{X+Y} = μ_X + μ_Y
- σ²_{X+Y} = σ²_X + σ²_Y
- μ_{X-Y} = μ_X - μ_Y
- σ²_{X-Y} = σ²_X + σ²_Y (variances add!)

## Common Continuous Distributions

**Uniform:** Constant PDF on interval  
**Normal (Gaussian):** Bell curve  
**Exponential:** Models time until event (memoryless)  
**t-distribution:** Similar to normal, heavier tails (used in inference)  
**Chi-square:** Used in hypothesis testing

## Common Mistakes

❌ Thinking P(X = c) has meaning for continuous X  
❌ Interpreting f(x) as probability (it's density, not probability)  
❌ Confusing P(X < c) with P(X ≤ c) (they're equal for continuous!)  
❌ Adding standard deviations instead of variances  
❌ Using discrete formulas for continuous variables

## Practice Strategy

1. **Identify:** Continuous or discrete?
2. **Determine distribution:** Uniform? Normal? Other?
3. **Find parameters:** Mean, SD, or a and b for uniform
4. **Calculate probability:** Use area/geometry or calculator
5. **Check:** Does answer make sense (between 0 and 1)?

## Quick Reference

**Continuous:** Uncountable values, P(X = c) = 0

**PDF:** f(x) gives density (not probability)  
Area under PDF gives probability

**Uniform [a,b]:**
- Mean: (a+b)/2
- SD: (b-a)/√12
- P in interval: length/total length

**Key:** P(a < X < b) = P(a ≤ X ≤ b) for continuous

**Remember:** For continuous variables, focus on intervals and areas under curves, not individual point probabilities!
`
    }
  });
  console.log('✅ Filled Continuous Random Variables\n');

  console.log('\n🎉🎉🎉 PROBABILITY COMPLETE! 🎉🎉🎉');
  console.log('✅ All 7 Probability topics filled');
  console.log('📊 Progress: 17/34 AP Statistics topics complete (50%)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
