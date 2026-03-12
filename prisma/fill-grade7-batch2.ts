import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 7 Math topics - Batch 2 (3 topics)...\n');

  // Topic 1: Simple Interest
  await prisma.topic.updateMany({
    where: {
      slug: 'simple-interest'
    },
    data: {
      textContent: `# Simple Interest

When you borrow money or invest money, interest is the cost of borrowing or the reward for saving. **Simple interest** is a straightforward way to calculate interest based on the principal, rate, and time.

---

## What Is Simple Interest?

**Simple interest** is interest calculated only on the principal (original) amount.

**Key Terms:**

- **Principal (P):** The original amount of money borrowed or invested
- **Rate (r):** The percent of interest charged per year (as a decimal)
- **Time (t):** The length of time in years
- **Interest (I):** The amount charged or earned
- **Total Amount (A):** Principal + Interest

---

## The Simple Interest Formula

**Formula:** I = Prt

Where:
- I = Interest earned or paid
- P = Principal (starting amount)
- r = Rate (as a decimal, so 5% = 0.05)
- t = Time (in years)

**Total Amount Formula:** A = P + I  or  A = P(1 + rt)

---

## Calculating Simple Interest

### Example 1: Basic Interest Calculation

You invest $500 at 4% simple interest for 3 years. How much interest will you earn?

**Given:**
- P = $500
- r = 4% = 0.04
- t = 3 years

**Solution:**
I = Prt
I = 500 × 0.04 × 3
I = 500 × 0.12
I = $60

**Answer: You earn $60 in interest**

**Total amount:** A = P + I = $500 + $60 = $560

### Example 2: Interest Over Time

Maria borrows $1,200 at 6% simple interest for 2 years. How much interest will she owe?

**Given:**
- P = $1,200
- r = 6% = 0.06
- t = 2 years

**Solution:**
I = Prt
I = 1,200 × 0.06 × 2
I = 1,200 × 0.12
I = $144

**Answer: She owes $144 in interest**

**Total to repay:** A = $1,200 + $144 = $1,344

### Example 3: Short-Term Interest

A credit card charges 18% annual interest. If you have a $300 balance for 6 months, how much interest accrues?

**Given:**
- P = $300
- r = 18% = 0.18
- t = 6 months = 0.5 years (important!)

**Solution:**
I = Prt
I = 300 × 0.18 × 0.5
I = 300 × 0.09
I = $27

**Answer: $27 in interest for 6 months**

---

## Converting Time to Years

**Important:** Time must be in YEARS for the formula I = Prt!

**Common Conversions:**

**Months to Years:**
- 6 months = 6/12 = 0.5 years
- 9 months = 9/12 = 0.75 years
- 18 months = 18/12 = 1.5 years
- Formula: months ÷ 12 = years

**Days to Years:**
- 90 days = 90/365 years
- 180 days = 180/365 years
- Formula: days ÷ 365 = years

### Example: Converting Time

You invest $800 at 5% for 9 months. Find the interest.

**Step 1:** Convert time to years
- 9 months = 9/12 = 0.75 years

**Step 2:** Calculate interest
I = Prt
I = 800 × 0.05 × 0.75
I = $30

**Answer: $30 interest**

---

## Finding Total Amount

Once you have the interest, add it to the principal!

### Example: Investment Growth

You invest $2,000 at 3% for 4 years. What's the total amount after 4 years?

**Step 1:** Find interest
I = Prt
I = 2,000 × 0.03 × 4
I = $240

**Step 2:** Add to principal
A = P + I
A = $2,000 + $240
A = $2,240

**Answer: Total amount is $2,240**

**Alternate method:** A = P(1 + rt)
A = 2,000(1 + 0.03 × 4)
A = 2,000(1 + 0.12)
A = 2,000 × 1.12
A = $2,240 ✓

---

## Solving for Different Variables

Sometimes you need to find P, r, or t instead of I!

### Finding Principal (P)

**Rearranged formula:** P = I / (rt)

**Example:** How much should you invest at 5% for 2 years to earn $200 interest?

**Given:**
- I = $200
- r = 0.05
- t = 2

**Solution:**
P = I / (rt)
P = 200 / (0.05 × 2)
P = 200 / 0.10
P = $2,000

**Answer: Invest $2,000**

**Check:** I = 2,000 × 0.05 × 2 = $200 ✓

### Finding Rate (r)

**Rearranged formula:** r = I / (Pt)

**Example:** You invest $1,500 for 3 years and earn $180. What was the interest rate?

**Given:**
- I = $180
- P = $1,500
- t = 3

**Solution:**
r = I / (Pt)
r = 180 / (1,500 × 3)
r = 180 / 4,500
r = 0.04
r = 4%

**Answer: 4% interest rate**

**Check:** I = 1,500 × 0.04 × 3 = $180 ✓

### Finding Time (t)

**Rearranged formula:** t = I / (Pr)

**Example:** How long will it take to earn $150 interest on $1,000 at 5%?

**Given:**
- I = $150
- P = $1,000
- r = 0.05

**Solution:**
t = I / (Pr)
t = 150 / (1,000 × 0.05)
t = 150 / 50
t = 3 years

**Answer: 3 years**

**Check:** I = 1,000 × 0.05 × 3 = $150 ✓

---

## Real-World Applications

### Savings Accounts

**Problem:** You deposit $3,500 in a savings account with 2.5% simple interest. How much will you have after 5 years?

**Solution:**
I = Prt = 3,500 × 0.025 × 5 = $437.50
A = P + I = $3,500 + $437.50 = $3,937.50

**Answer: $3,937.50 total**

### Car Loans

**Problem:** A $15,000 car loan at 7% simple interest for 4 years. How much interest will you pay?

**Solution:**
I = Prt = 15,000 × 0.07 × 4 = $4,200

**Answer: $4,200 interest**
**Total to repay: $15,000 + $4,200 = $19,200**

### Short-Term Loans

**Problem:** You borrow $800 for 3 months at 12% annual rate. How much interest?

**Solution:**
- Convert time: 3 months = 3/12 = 0.25 years
- I = Prt = 800 × 0.12 × 0.25 = $24

**Answer: $24 interest**

### Comparing Investments

**Problem:** Which earns more interest?
- Option A: $2,000 at 4% for 3 years
- Option B: $1,500 at 6% for 3 years

**Solution:**
Option A: I = 2,000 × 0.04 × 3 = $240
Option B: I = 1,500 × 0.06 × 3 = $270

**Answer: Option B earns more ($270 vs $240)**

---

## Simple Interest vs. Compound Interest

**Simple Interest:**
- Calculated only on the principal
- Interest does NOT earn interest
- Formula: I = Prt
- Grows linearly (same amount each year)

**Compound Interest:** (You'll learn this later!)
- Calculated on principal PLUS accumulated interest
- Interest earns interest
- Grows exponentially (faster over time)

**Example Comparison:**

$1,000 at 10% for 3 years:

**Simple Interest:**
- Year 1: $1,000 × 0.10 = $100 interest → Total: $1,100
- Year 2: $1,000 × 0.10 = $100 interest → Total: $1,200
- Year 3: $1,000 × 0.10 = $100 interest → Total: $1,300

**Compound Interest:**
- Year 1: $1,000 × 0.10 = $100 interest → Total: $1,100
- Year 2: $1,100 × 0.10 = $110 interest → Total: $1,210
- Year 3: $1,210 × 0.10 = $121 interest → Total: $1,331

Compound interest earns $31 more because interest earns interest!

---

## Using Tables to Track Interest

You can make a table to see how simple interest grows:

**Example:** $500 at 8% simple interest

| Year | Principal | Interest (I = Prt) | Total |
|------|-----------|-------------------|-------|
| 0 | $500 | $0 | $500 |
| 1 | $500 | $40 | $540 |
| 2 | $500 | $80 | $580 |
| 3 | $500 | $120 | $620 |
| 4 | $500 | $160 | $660 |

Notice: Interest increases by $40 each year (linear growth)

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to convert percent to decimal
- **Wrong:** I = 1,000 × 5 × 2 = $10,000
- **Right:** I = 1,000 × 0.05 × 2 = $100

❌ **Mistake 2:** Not converting time to years
- **Wrong:** I = 500 × 0.06 × 6 months = $180
- **Right:** I = 500 × 0.06 × 0.5 = $15

❌ **Mistake 3:** Using interest instead of total amount
- If asked for total, remember: A = P + I

❌ **Mistake 4:** Wrong formula rearrangement
- To find r: r = I/(Pt), not r = Pt/I

❌ **Mistake 5:** Confusing simple with compound interest
- Simple: Interest stays the same each period
- Compound: Interest grows each period

---

## Practice Strategy

**Step 1: Identify what you're finding**
- Interest (I)?
- Total amount (A)?
- Principal (P)?
- Rate (r)?
- Time (t)?

**Step 2: List what you know**
- Write down P, r, t, I, or A

**Step 3: Convert if needed**
- Rate: Convert percent to decimal (5% → 0.05)
- Time: Convert months/days to years

**Step 4: Choose the right formula**
- Finding I: I = Prt
- Finding A: A = P + I or A = P(1 + rt)
- Finding P: P = I/(rt)
- Finding r: r = I/(Pt)
- Finding t: t = I/(Pr)

**Step 5: Solve and check**
- Calculate carefully
- Plug answer back in to verify

---

## Memory Tricks

**"I Put Rabbits Together"** → I = P × r × t

**Rate conversion:**
- 5% = 0.05 (move decimal 2 places left)
- 12.5% = 0.125

**Time conversion:**
- Months: Divide by 12
- Days: Divide by 365

**Check reasonableness:**
- Interest should be less than principal (unless very long time!)
- Higher rate = more interest
- Longer time = more interest

---

## Quick Reference

**Main Formula:** I = Prt

**Derived Formulas:**
- A = P + I
- A = P(1 + rt)
- P = I/(rt)
- r = I/(Pt)
- t = I/(Pr)

**Conversions:**
- Percent to decimal: Divide by 100
- Months to years: Divide by 12
- Days to years: Divide by 365

---

## Summary

**Simple interest** is calculated using I = Prt where:
- P = Principal (original amount)
- r = Rate (as decimal)
- t = Time (in years)

**Key Points:**
- Interest is calculated only on the principal
- Convert rate to decimal (5% = 0.05)
- Convert time to years
- Total amount = Principal + Interest
- Can solve for any variable if you know the others

**Applications:**
- Savings accounts
- Loans
- Bonds
- Short-term investments

Understanding simple interest helps you make smart financial decisions about saving and borrowing money!`
    }
  });
  console.log('✅ Updated: simple-interest');

  // Topic 2: Simplifying Expressions
  await prisma.topic.updateMany({
    where: {
      slug: 'simplifying-expressions'
    },
    data: {
      textContent: `# Simplifying Expressions

Simplifying algebraic expressions makes them shorter and easier to work with. You'll combine like terms, use the distributive property, and clean up expressions to their simplest form!

---

## What Does "Simplify" Mean?

To **simplify an expression** means to make it as short and clean as possible by:
- Combining like terms
- Using the distributive property
- Removing parentheses
- Writing in standard form

**Example:**
- Before: 3x + 2x + 5 - 2
- After: 5x + 3

Both expressions are equal, but the simplified version is cleaner!

---

## Like Terms

**Like terms** have the SAME variable raised to the SAME power.

**Like Terms (can combine):**
- 3x and 5x (both have x)
- -2y and 7y (both have y)
- 4x² and x² (both have x²)
- 6 and -3 (both are constants)

**Unlike Terms (CANNOT combine):**
- 3x and 5y (different variables)
- 4x and 4x² (different exponents)
- 2xy and 3x (different variables)

**Why it matters:** You can only combine like terms!

---

## Combining Like Terms

Add or subtract the coefficients, keep the variable part the same.

### Example 1: Simple Addition

Simplify: 4x + 7x

**Solution:**
- Both terms have x
- Add coefficients: 4 + 7 = 11
- Keep the variable: x
- **Answer: 11x**

Think: 4 apples + 7 apples = 11 apples

### Example 2: With Subtraction

Simplify: 9y - 3y

**Solution:**
- Both terms have y
- Subtract coefficients: 9 - 3 = 6
- **Answer: 6y**

### Example 3: Multiple Terms

Simplify: 5x + 3x - 2x

**Solution:**
- All terms have x
- Combine: 5 + 3 - 2 = 6
- **Answer: 6x**

### Example 4: With Constants

Simplify: 3x + 7 + 2x - 4

**Solution:**
**Step 1:** Group like terms
- x terms: 3x + 2x
- Constants: 7 - 4

**Step 2:** Combine each group
- 3x + 2x = 5x
- 7 - 4 = 3

**Step 3:** Write final answer
- **Answer: 5x + 3**

### Example 5: Negative Coefficients

Simplify: 8a - 5a + 3a

**Solution:**
- All have variable a
- Combine: 8 - 5 + 3 = 6
- **Answer: 6a**

---

## The Distributive Property

**Formula:** a(b + c) = ab + ac

Multiply the number outside the parentheses by EACH term inside.

### Example 1: Basic Distribution

Simplify: 3(x + 4)

**Solution:**
- 3 × x = 3x
- 3 × 4 = 12
- **Answer: 3x + 12**

### Example 2: Negative Distribution

Simplify: -2(y - 5)

**Solution:**
- -2 × y = -2y
- -2 × (-5) = +10
- **Answer: -2y + 10**

**Important:** Distribute the negative sign too!

### Example 3: Variable Outside

Simplify: x(3 + 5)

**Solution:**
- x × 3 = 3x
- x × 5 = 5x
- **Answer: 3x + 5x = 8x**

### Example 4: Distribution with Three Terms

Simplify: 4(2x - 3 + y)

**Solution:**
- 4 × 2x = 8x
- 4 × (-3) = -12
- 4 × y = 4y
- **Answer: 8x - 12 + 4y**

---

## Combining Distribution and Like Terms

Many problems require both steps!

### Example 1: Distribute Then Combine

Simplify: 2(x + 3) + 5x

**Step 1:** Distribute
- 2(x + 3) = 2x + 6

**Step 2:** Rewrite
- 2x + 6 + 5x

**Step 3:** Combine like terms
- x terms: 2x + 5x = 7x
- Constants: 6

**Answer: 7x + 6**

### Example 2: Multiple Distributions

Simplify: 3(x + 2) + 4(x - 1)

**Step 1:** Distribute first parentheses
- 3(x + 2) = 3x + 6

**Step 2:** Distribute second parentheses
- 4(x - 1) = 4x - 4

**Step 3:** Rewrite
- 3x + 6 + 4x - 4

**Step 4:** Combine like terms
- x terms: 3x + 4x = 7x
- Constants: 6 - 4 = 2

**Answer: 7x + 2**

### Example 3: With Negative Distribution

Simplify: 5(2y + 1) - 3(y - 4)

**Step 1:** Distribute
- 5(2y + 1) = 10y + 5
- -3(y - 4) = -3y + 12 (watch the signs!)

**Step 2:** Rewrite
- 10y + 5 - 3y + 12

**Step 3:** Combine
- y terms: 10y - 3y = 7y
- Constants: 5 + 12 = 17

**Answer: 7y + 17**

---

## Removing Parentheses

### Positive Sign Before Parentheses

Just remove the parentheses - nothing changes!

**Example:** 3x + (2x + 5) = 3x + 2x + 5 = 5x + 5

### Negative Sign Before Parentheses

Change the sign of EVERY term inside!

**Example 1:** 4x - (2x + 3)
- Remove parentheses: 4x - 2x - 3
- Combine: 2x - 3

**Example 2:** 7y - (3y - 5)
- Remove parentheses: 7y - 3y + 5
- Combine: 4y + 5

**Think of it as:** -(2x + 3) = -1(2x + 3) = -2x - 3

---

## Simplifying with Multiple Variables

Combine terms with the same variable!

### Example 1: Two Variables

Simplify: 3x + 2y + 5x - y

**Solution:**
- x terms: 3x + 5x = 8x
- y terms: 2y - y = y
- **Answer: 8x + y**

### Example 2: Three Variables

Simplify: 4a + 3b - 2a + 5c - b

**Solution:**
- a terms: 4a - 2a = 2a
- b terms: 3b - b = 2b
- c terms: 5c
- **Answer: 2a + 2b + 5c**

---

## Simplifying with Exponents

Remember: Only combine terms with the same variable AND same exponent!

### Example 1: Same Exponents

Simplify: 5x² + 3x² - 2x²

**Solution:**
- All have x²
- Combine: 5 + 3 - 2 = 6
- **Answer: 6x²**

### Example 2: Different Exponents

Simplify: 4x² + 3x + 2x² - x

**Solution:**
- x² terms: 4x² + 2x² = 6x²
- x terms: 3x - x = 2x
- **Answer: 6x² + 2x**

**Cannot combine x² and x - they're unlike terms!**

### Example 3: Mixed Variables and Exponents

Simplify: 2xy + 3x + xy - 5x

**Solution:**
- xy terms: 2xy + xy = 3xy
- x terms: 3x - 5x = -2x
- **Answer: 3xy - 2x**

---

## Order of Operations in Simplifying

Follow PEMDAS when simplifying!

**Example:** Simplify: 2(3x + 4) - 5 + 3x

**Step 1:** Parentheses/Distribution first
- 2(3x + 4) = 6x + 8

**Step 2:** Rewrite
- 6x + 8 - 5 + 3x

**Step 3:** Combine like terms
- x terms: 6x + 3x = 9x
- Constants: 8 - 5 = 3

**Answer: 9x + 3**

---

## Real-World Applications

### Perimeter Problems

**Problem:** A rectangle has length (3x + 2) and width (x + 5). Write a simplified expression for the perimeter.

**Solution:**
Perimeter = 2(length) + 2(width)
P = 2(3x + 2) + 2(x + 5)
P = 6x + 4 + 2x + 10
P = 8x + 14

**Answer: Perimeter = 8x + 14**

### Shopping

**Problem:** You buy 3 shirts at $x each and 2 pairs of pants at $y each. Then you return 1 shirt. Write a simplified expression for the total cost.

**Solution:**
Total = 3x + 2y - x
Total = 2x + 2y

**Answer: 2x + 2y**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Combining unlike terms
- **Wrong:** 3x + 4y = 7xy
- **Right:** 3x + 4y (cannot combine - different variables!)

❌ **Mistake 2:** Forgetting to distribute negative
- **Wrong:** 5 - (x + 3) = 5 - x + 3 = 8 - x
- **Right:** 5 - (x + 3) = 5 - x - 3 = 2 - x

❌ **Mistake 3:** Distributing to only one term
- **Wrong:** 2(x + 3) = 2x + 3
- **Right:** 2(x + 3) = 2x + 6

❌ **Mistake 4:** Combining different exponents
- **Wrong:** 2x² + 3x = 5x³
- **Right:** 2x² + 3x (cannot combine!)

❌ **Mistake 5:** Sign errors
- **Wrong:** 4x - 2x = 2x or -2x? (confusion)
- **Right:** 4x - 2x = 2x (4 minus 2 is positive 2)

---

## Practice Strategy

**Step 1: Look for parentheses**
- Distribute first!
- Remove negative signs carefully

**Step 2: Identify like terms**
- Circle or underline terms with the same variable/exponent

**Step 3: Combine**
- Add/subtract coefficients
- Keep variable parts the same

**Step 4: Write in standard form**
- Usually highest exponent first
- Then lower exponents
- Then constants

**Step 5: Check**
- Can you combine anything else?
- Are all like terms together?

---

## Standard Form

**Standard form** for polynomials: Write terms in descending order of exponents.

**Example:** Simplify and write in standard form: 5 + 3x² - 2x + x²

**Step 1:** Combine like terms
- x² terms: 3x² + x² = 4x²
- x terms: -2x
- Constants: 5

**Step 2:** Write in standard form (highest exponent first)
- **Answer: 4x² - 2x + 5**

---

## Quick Tips

**Tip 1:** Like terms are "friends" - they can combine!
- 3x and 5x are friends → 8x
- 3x and 5y are NOT friends → stay separate

**Tip 2:** Distribute carefully with negatives
- -(3x - 2) means multiply EVERYTHING by -1
- Result: -3x + 2

**Tip 3:** Use different colors for different variables
- Circle all x terms in blue
- Circle all y terms in red
- Makes it easy to see what combines!

**Tip 4:** Check by substituting a number
- Original: 2(x + 3) + 4x
- Simplified: 6x + 6
- Test with x = 1: 2(1+3) + 4(1) = 2(4) + 4 = 12 ✓
- Check: 6(1) + 6 = 12 ✓

---

## Summary

**Simplifying expressions** means making them as short as possible by:

1. **Using distributive property:** a(b + c) = ab + ac
2. **Combining like terms:** Terms with same variable and exponent
3. **Removing parentheses:** Watch for negative signs!
4. **Writing in standard form:** Highest exponent first

**Key Rules:**
- Only like terms can combine
- Distribute to EVERY term inside parentheses
- Negative before parentheses changes ALL signs inside
- Different variables or exponents = unlike terms

Mastering simplification is essential for solving equations, factoring, and all of algebra!`
    }
  });
  console.log('✅ Updated: simplifying-expressions');

  // Topic 3: Solving Multi-Step Equations
  await prisma.topic.updateMany({
    where: {
      slug: 'solving-multi-step-equations'
    },
    data: {
      textContent: `# Solving Multi-Step Equations

In Grade 6, you solved one-step equations. Now you're ready for equations that require multiple steps to solve! These equations combine the operations you know, requiring you to use inverse operations strategically.

---

## What Is a Multi-Step Equation?

A **multi-step equation** requires two or more steps to isolate the variable.

**Examples:**
- 2x + 5 = 13 (two steps: subtract, then divide)
- 3(x - 4) = 15 (three steps: distribute, add, divide)
- 5x - 3 = 2x + 9 (variables on both sides!)

**Goal:** Get the variable alone on one side of the equation.

---

## The Strategy: Work Backwards!

Think of equations like a wrapped present. To get to the variable inside, you need to unwrap the layers in reverse order!

**Order of Operations (PEMDAS):** Parentheses, Exponents, Multiply/Divide, Add/Subtract

**Solving Strategy (Reverse PEMDAS):**
1. Simplify (combine like terms, distribute)
2. Undo addition/subtraction (add/subtract on both sides)
3. Undo multiplication/division (multiply/divide on both sides)

---

## Two-Step Equations

### Example 1: Addition Then Division

Solve: 2x + 5 = 13

**Step 1:** Subtract 5 from both sides (undo addition)
2x + 5 - 5 = 13 - 5
2x = 8

**Step 2:** Divide both sides by 2 (undo multiplication)
2x ÷ 2 = 8 ÷ 2
x = 4

**Step 3:** Check your answer
2(4) + 5 = 8 + 5 = 13 ✓

**Answer: x = 4**

### Example 2: Subtraction Then Division

Solve: 3x - 7 = 14

**Step 1:** Add 7 to both sides
3x - 7 + 7 = 14 + 7
3x = 21

**Step 2:** Divide both sides by 3
3x ÷ 3 = 21 ÷ 3
x = 7

**Check:** 3(7) - 7 = 21 - 7 = 14 ✓

**Answer: x = 7**

### Example 3: Division Then Subtraction

Solve: x/4 + 3 = 8

**Step 1:** Subtract 3 from both sides
x/4 + 3 - 3 = 8 - 3
x/4 = 5

**Step 2:** Multiply both sides by 4
x/4 × 4 = 5 × 4
x = 20

**Check:** 20/4 + 3 = 5 + 3 = 8 ✓

**Answer: x = 20**

---

## Equations with the Distributive Property

When parentheses appear, distribute first!

### Example 1: Distribute Then Solve

Solve: 2(x + 3) = 16

**Step 1:** Distribute the 2
2x + 6 = 16

**Step 2:** Subtract 6 from both sides
2x = 10

**Step 3:** Divide both sides by 2
x = 5

**Check:** 2(5 + 3) = 2(8) = 16 ✓

**Answer: x = 5**

### Example 2: Negative Distribution

Solve: -3(x - 4) = 21

**Step 1:** Distribute -3
-3x + 12 = 21

**Step 2:** Subtract 12 from both sides
-3x = 9

**Step 3:** Divide both sides by -3
x = -3

**Check:** -3(-3 - 4) = -3(-7) = 21 ✓

**Answer: x = -3**

### Example 3: Distribution Plus More

Solve: 4(x + 2) - 5 = 19

**Step 1:** Distribute the 4
4x + 8 - 5 = 19

**Step 2:** Combine like terms on left
4x + 3 = 19

**Step 3:** Subtract 3 from both sides
4x = 16

**Step 4:** Divide both sides by 4
x = 4

**Answer: x = 4**

---

## Combining Like Terms First

Always simplify before solving!

### Example 1: Combine on One Side

Solve: 3x + 2x + 7 = 22

**Step 1:** Combine like terms (3x + 2x)
5x + 7 = 22

**Step 2:** Subtract 7
5x = 15

**Step 3:** Divide by 5
x = 3

**Answer: x = 3**

### Example 2: Combine on Both Sides

Solve: 2x + 5 + 3x = 4 + 11

**Step 1:** Combine left side (2x + 3x)
5x + 5 = 4 + 11

**Step 2:** Combine right side (4 + 11)
5x + 5 = 15

**Step 3:** Subtract 5
5x = 10

**Step 4:** Divide by 5
x = 2

**Answer: x = 2**

---

## Variables on Both Sides

When the variable appears on both sides, get all variables on one side first!

### Example 1: Basic Variables on Both Sides

Solve: 5x = 3x + 10

**Step 1:** Subtract 3x from both sides
5x - 3x = 3x + 10 - 3x
2x = 10

**Step 2:** Divide by 2
x = 5

**Check:** 5(5) = 3(5) + 10 → 25 = 15 + 10 → 25 = 25 ✓

**Answer: x = 5**

### Example 2: With Constants Too

Solve: 4x + 3 = 2x + 11

**Step 1:** Subtract 2x from both sides
4x - 2x + 3 = 2x - 2x + 11
2x + 3 = 11

**Step 2:** Subtract 3 from both sides
2x = 8

**Step 3:** Divide by 2
x = 4

**Answer: x = 4**

### Example 3: Move Variables to Left

Solve: 7 + 3x = 5x - 9

**Step 1:** Subtract 3x from both sides
7 = 2x - 9

**Step 2:** Add 9 to both sides
16 = 2x

**Step 3:** Divide by 2
8 = x  or  x = 8

**Answer: x = 8**

---

## Equations with Fractions

Clear fractions by multiplying by the LCD!

### Example 1: One Fraction

Solve: (x + 3)/2 = 7

**Step 1:** Multiply both sides by 2
2 × (x + 3)/2 = 7 × 2
x + 3 = 14

**Step 2:** Subtract 3
x = 11

**Answer: x = 11**

### Example 2: Multiple Fractions

Solve: x/3 + x/6 = 5

**Step 1:** Find LCD (6) and multiply everything by it
6 × (x/3) + 6 × (x/6) = 6 × 5
2x + x = 30

**Step 2:** Combine like terms
3x = 30

**Step 3:** Divide by 3
x = 10

**Answer: x = 10**

---

## Equations with Decimals

You can clear decimals by multiplying by powers of 10!

### Example: Clear Decimals

Solve: 0.5x + 1.2 = 3.7

**Method 1:** Work with decimals
0.5x = 2.5
x = 5

**Method 2:** Clear decimals (multiply by 10)
10(0.5x) + 10(1.2) = 10(3.7)
5x + 12 = 37
5x = 25
x = 5

**Answer: x = 5**

---

## Step-by-Step Strategy

**Step 1: Simplify Each Side**
- Distribute if needed
- Combine like terms

**Step 2: Get Variables on One Side**
- Add or subtract to move variables to one side

**Step 3: Get Constants on the Other Side**
- Add or subtract to move numbers to the other side

**Step 4: Solve for the Variable**
- Multiply or divide to get the variable alone

**Step 5: Check Your Answer**
- Substitute back into original equation

---

## Real-World Applications

### Shopping

**Problem:** You have $50. You buy a shirt for $18 and some socks for $4 each. How many pairs of socks can you buy?

**Equation:** 18 + 4x = 50

**Solution:**
4x = 32
x = 8

**Answer: 8 pairs of socks**

### Geometry

**Problem:** The perimeter of a rectangle is 40 cm. The length is 3 cm more than twice the width. Find the width.

**Let w = width, then length = 2w + 3**

**Equation:** 2w + 2(2w + 3) = 40

**Solution:**
2w + 4w + 6 = 40
6w + 6 = 40
6w = 34
w = 34/6 = 17/3 or about 5.67 cm

**Answer: Width = 17/3 cm**

### Temperature

**Problem:** The formula F = 9C/5 + 32 converts Celsius to Fahrenheit. If it's 77°F, what is the Celsius temperature?

**Equation:** 77 = 9C/5 + 32

**Solution:**
45 = 9C/5
225 = 9C
C = 25

**Answer: 25°C**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Not distributing to all terms
- **Wrong:** 2(x + 3) = 2x + 3
- **Right:** 2(x + 3) = 2x + 6

❌ **Mistake 2:** Only doing operation on one side
- **Wrong:** 2x + 5 = 13 → 2x = 13 (forgot to subtract 5 from right side!)
- **Right:** 2x + 5 = 13 → 2x = 8

❌ **Mistake 3:** Sign errors when moving variables
- **Wrong:** 5x = 3x + 10 → 2x = 10 + 3x
- **Right:** 5x = 3x + 10 → 2x = 10

❌ **Mistake 4:** Not combining like terms first
- Simplify before you start solving!

❌ **Mistake 5:** Forgetting to check
- Always substitute your answer back into the original equation!

---

## Practice Tips

**Tip 1: Write neatly and show all steps**
- Sloppy work leads to errors
- Each line should show one operation

**Tip 2: Keep equation balanced**
- Whatever you do to one side, do to the other
- Think of a balanced scale

**Tip 3: Work in order**
- Simplify → Variables to one side → Constants to other side → Solve

**Tip 4: Use inverse operations**
- Addition ↔ Subtraction
- Multiplication ↔ Division

**Tip 5: Check your answer every time**
- Plug it back in
- Both sides should be equal

---

## Special Cases

### Infinite Solutions

Some equations are true for ALL values!

**Example:** 2(x + 3) = 2x + 6

When you simplify: 2x + 6 = 2x + 6 (always true!)

**Answer: All real numbers (infinite solutions)**

### No Solution

Some equations are NEVER true!

**Example:** x + 5 = x + 3

When you simplify: 5 = 3 (false!)

**Answer: No solution**

---

## Summary

**Multi-step equations** require multiple operations to solve.

**Strategy:**
1. Simplify (distribute, combine like terms)
2. Move variables to one side
3. Move constants to other side
4. Divide or multiply to isolate variable
5. Check your answer!

**Key Skills:**
- Distributive property
- Combining like terms
- Inverse operations
- Working with variables on both sides

**Remember:** Whatever you do to one side, you MUST do to the other side. Keep the equation balanced!

Master multi-step equations and you're ready for inequalities, systems of equations, and advanced algebra!`
    }
  });
  console.log('✅ Updated: solving-multi-step-equations');

  console.log('\n✨ Successfully updated 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
