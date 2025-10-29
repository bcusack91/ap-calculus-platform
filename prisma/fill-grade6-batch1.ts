import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 6 Math topics - Batch 1 (3 topics)...\n');

  // Topic 1: Dividing Fractions
  await prisma.topic.updateMany({
    where: {
      slug: 'dividing-fractions'
    },
    data: {
      textContent: `# Dividing Fractions

Welcome to dividing fractions! In Grade 5, you learned to multiply and divide fractions. Now we'll deepen your understanding and tackle more complex problems with confidence.

## Review: The Keep-Change-Flip Method

The most reliable way to divide fractions is using the **Keep-Change-Flip (KCF)** method, also called "multiply by the reciprocal."

**The Three Steps:**
1. **Keep** the first fraction exactly as it is
2. **Change** the division sign to multiplication
3. **Flip** the second fraction (find its reciprocal)

### What Is a Reciprocal?

The reciprocal of a fraction is what you get when you flip the numerator and denominator.

**Examples:**
- Reciprocal of 3/4 is 4/3
- Reciprocal of 2/5 is 5/2
- Reciprocal of 7/1 (or just 7) is 1/7
- Reciprocal of 1/8 is 8/1 (or just 8)

**Important:** Every number (except zero) has a reciprocal. When you multiply a number by its reciprocal, you always get 1.

Examples: 3/4 × 4/3 = 12/12 = 1 ✓

## Basic Division with Fractions

### Example 1: Fraction ÷ Fraction

Divide: 3/4 ÷ 2/5

**Step 1:** Keep the first fraction
3/4

**Step 2:** Change ÷ to ×
3/4 ×

**Step 3:** Flip the second fraction (reciprocal of 2/5 is 5/2)
3/4 × 5/2

**Step 4:** Multiply straight across
(3 × 5)/(4 × 2) = 15/8

**Step 5:** Convert to mixed number if needed
15/8 = 1 7/8

Answer: 1 7/8

### Example 2: Whole Number ÷ Fraction

Divide: 6 ÷ 2/3

**Step 1:** Write the whole number as a fraction
6 = 6/1

**Step 2:** Keep-Change-Flip
6/1 ÷ 2/3 = 6/1 × 3/2

**Step 3:** Multiply
(6 × 3)/(1 × 2) = 18/2 = 9

Answer: 9

**Think about it:** How many 2/3 pieces fit into 6 wholes? Nine pieces!

### Example 3: Fraction ÷ Whole Number

Divide: 3/5 ÷ 4

**Step 1:** Write whole number as fraction
4 = 4/1

**Step 2:** Keep-Change-Flip
3/5 ÷ 4/1 = 3/5 × 1/4

**Step 3:** Multiply
(3 × 1)/(5 × 4) = 3/20

Answer: 3/20

## Dividing Mixed Numbers

When dividing mixed numbers, you must first convert them to improper fractions.

### Example: Mixed Number ÷ Mixed Number

Divide: 2 1/3 ÷ 1 1/2

**Step 1:** Convert to improper fractions
2 1/3 = (2 × 3 + 1)/3 = 7/3
1 1/2 = (1 × 2 + 1)/2 = 3/2

**Step 2:** Keep-Change-Flip
7/3 ÷ 3/2 = 7/3 × 2/3

**Step 3:** Multiply
(7 × 2)/(3 × 3) = 14/9

**Step 4:** Convert back to mixed number
14/9 = 1 5/9

Answer: 1 5/9

## Simplifying Before Multiplying

After using Keep-Change-Flip, you can simplify before multiplying to make the math easier!

### Example with Simplification

Divide: 5/6 ÷ 2/9

**Step 1:** Keep-Change-Flip
5/6 ÷ 2/9 = 5/6 × 9/2

**Step 2:** Look for common factors to cancel
5/6 × 9/2

Notice: 6 and 9 both have 3 as a factor
6 ÷ 3 = 2
9 ÷ 3 = 3

**Step 3:** Simplify (cancel the 3s)
5/6 × 9/2 = 5/2 × 3/1 = (5 × 3)/(2 × 1) = 15/2

**Step 4:** Convert to mixed number
15/2 = 7 1/2

Answer: 7 1/2

## Real-World Applications

### Sharing Problems

**Problem:** You have 3/4 of a pizza and want to divide it equally among 3 people. How much does each person get?

**Solution:** 3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4

Each person gets 1/4 of a whole pizza.

### Measurement Problems

**Problem:** A ribbon is 4 1/2 feet long. You need pieces that are 3/4 foot each. How many pieces can you cut?

**Solution:** 
4 1/2 ÷ 3/4
= 9/2 ÷ 3/4
= 9/2 × 4/3
= 36/6
= 6

You can cut 6 pieces.

### Rate Problems

**Problem:** If you can walk 2 1/2 miles in 1/2 hour, how many miles can you walk in 1 hour?

**Solution:**
2 1/2 ÷ 1/2
= 5/2 × 2/1
= 10/2
= 5

You can walk 5 miles in 1 hour.

## Understanding "Why" Division Works

When you divide by a fraction, you're asking: "How many of this fraction fit into that number?"

**Example:** 1 ÷ 1/4 asks "How many 1/4s are in 1 whole?"
Answer: Four quarters make one whole, so 1 ÷ 1/4 = 4

**Example:** 3 ÷ 1/2 asks "How many halves are in 3 wholes?"
Answer: Each whole has 2 halves, so 3 wholes have 6 halves. Thus 3 ÷ 1/2 = 6

This is why dividing by a fraction less than 1 makes the answer larger!

## Common Mistakes to Avoid

**Mistake 1: Flipping the wrong fraction**
Wrong: 3/4 ÷ 2/5 = 4/3 × 2/5
Right: 3/4 ÷ 2/5 = 3/4 × 5/2
Remember: Keep the first, flip the second!

**Mistake 2: Forgetting to change the operation**
Wrong: 3/4 ÷ 2/5 = 3/4 ÷ 5/2
Right: 3/4 ÷ 2/5 = 3/4 × 5/2
You must change ÷ to ×!

**Mistake 3: Not converting mixed numbers**
Wrong: 2 1/2 ÷ 3/4 = 2 ÷ 3/4 + 1/2 ÷ 3/4
Right: 2 1/2 = 5/2, then 5/2 ÷ 3/4
Always convert mixed numbers to improper fractions first!

**Mistake 4: Dividing numerators and denominators**
Wrong: 6/8 ÷ 2/4 = (6÷2)/(8÷4) = 3/2
Right: 6/8 ÷ 2/4 = 6/8 × 4/2 = 24/16 = 3/2
(You got lucky this time, but this method doesn't work!)

## Division vs. Multiplication: Quick Comparison

**Multiplying fractions:** Makes products smaller (usually)
Example: 1/2 × 1/2 = 1/4 (smaller than 1/2)

**Dividing by fractions less than 1:** Makes quotients larger
Example: 1/2 ÷ 1/4 = 2 (larger than 1/2)

**Why?** When you divide by a small fraction, you're asking how many small pieces fit into something, so the answer is large!

## Practice Strategies

1. **Master the reciprocal:** Practice finding reciprocals quickly
2. **Always use KCF:** Keep-Change-Flip is reliable and works every time
3. **Check reasonableness:** If you divide by a fraction less than 1, expect a larger answer
4. **Simplify when possible:** Look for common factors before multiplying
5. **Convert mixed numbers first:** This prevents errors
6. **Draw pictures:** Visual models help you understand what division means

## Connection to Other Math

**Algebra:** Division by fractions appears in solving equations like (2/3)x = 4

**Geometry:** Calculating how many tiles fit in a space when tile size is fractional

**Cooking:** Adjusting recipes when you need to divide portions

**Science:** Computing rates and ratios with fractional measurements

Understanding fraction division builds your foundation for algebra, ratios, proportions, and much more advanced mathematics!`
    }
  });
  console.log('✅ Updated: dividing-fractions');

  // Topic 2: Decimal Operations
  await prisma.topic.updateMany({
    where: {
      slug: 'decimal-operations'
    },
    data: {
      textContent: `# Decimal Operations

Master all four operations with decimals! In this topic, you'll learn to add, subtract, multiply, and divide decimal numbers with confidence and precision.

## Review: Understanding Decimals

Decimals are another way to represent parts of a whole, just like fractions. The decimal point separates the whole number part from the fractional part.

**Place Value Review:**
- Ones . Tenths Hundredths Thousandths
- Example: 12.345
  - 1 is in the tens place (10)
  - 2 is in the ones place (2)
  - 3 is in the tenths place (3/10 or 0.3)
  - 4 is in the hundredths place (4/100 or 0.04)
  - 5 is in the thousandths place (5/1000 or 0.005)

## Adding Decimals

When adding decimals, the key is to **line up the decimal points**.

### Example 1: Basic Addition

Add: 12.5 + 3.84

**Step 1:** Line up the decimal points vertically

**Step 2:** Add zeros as placeholders if needed
  12.50  (added a 0 in hundredths place)
+  3.84
= 16.34

Answer: 16.34

### Example 2: Adding Multiple Decimals

Add: 5.2 + 13.456 + 0.89

**Solution:** Line up decimals vertically:
   5.200  (added zeros)
  13.456
+  0.890  (added a zero)
= 19.546

Answer: 19.546

**Key Rule:** Line up decimal points vertically, add zeros as placeholders, then add normally.

## Subtracting Decimals

Subtraction follows the same alignment rule as addition.

### Example 1: Basic Subtraction

Subtract: 15.8 - 7.23

**Step 1:** Line up decimal points:
  15.80  (add zero)
-  7.23
=  8.57

Answer: 8.57

### Example 2: Subtracting with Regrouping

Subtract: 10 - 3.76

**Solution:**
  10.00  (whole number = 10.00)
-  3.76
=  6.24

Regroup as needed: Borrow from the ones place to subtract in the hundredths and tenths.

Answer: 6.24

## Multiplying Decimals

When multiplying decimals, **ignore the decimal points at first**, then count total decimal places.

### Example 1: Decimal × Whole Number

Multiply: 3.4 × 5

**Step 1:** Multiply without the decimal
34 × 5 = 170

**Step 2:** Count decimal places in the problem
3.4 has 1 decimal place
5 has 0 decimal places
Total: 1 decimal place

**Step 3:** Place the decimal
170 → 17.0 = 17

Answer: 17

### Example 2: Decimal × Decimal

Multiply: 2.5 × 1.3

**Step 1:** Multiply without decimals
25 × 13 = 325

**Step 2:** Count decimal places
2.5 has 1 decimal place
1.3 has 1 decimal place
Total: 1 + 1 = 2 decimal places

**Step 3:** Place the decimal
325 → 3.25 (2 places from right)

Answer: 3.25

### Example 3: Multiplying Small Decimals

Multiply: 0.4 × 0.3

**Step 1:** Multiply
4 × 3 = 12

**Step 2:** Count decimal places
0.4 has 1 decimal place
0.3 has 1 decimal place
Total: 2 decimal places

**Step 3:** Place decimal
12 → 0.12 (2 places from right)

Answer: 0.12

**Important:** Sometimes you need to add zeros in front!

## Dividing Decimals

Division is the trickiest operation with decimals. The goal is to make the divisor (outside number) a whole number.

### Example 1: Decimal ÷ Whole Number

Divide: 15.6 ÷ 4

**Step 1:** Set up the division and divide normally, keeping the decimal point aligned

15.6 ÷ 4 = 3.9

(4 goes into 15 three times with remainder 3, bring down the 6 to get 36, and 4 goes into 36 nine times)

Answer: 3.9

### Example 2: Whole Number ÷ Decimal

Divide: 12 ÷ 0.4

**Step 1:** Move decimal in divisor to make it whole
0.4 → 4 (moved 1 place right)

**Step 2:** Move decimal in dividend the same amount
12 → 120 (moved 1 place right, added zero)

**Step 3:** Divide
120 ÷ 4 = 30

Answer: 30

### Example 3: Decimal ÷ Decimal

Divide: 3.6 ÷ 0.12

**Step 1:** Move decimal in divisor (0.12) to make it whole
0.12 → 12 (moved 2 places right)

**Step 2:** Move decimal in dividend the same amount
3.6 → 360 (moved 2 places right, needed to add a zero)

**Step 3:** Divide
360 ÷ 12 = 30

Answer: 30

## Estimating with Decimals

Always estimate to check if your answer is reasonable!

### Rounding Strategy

**Addition/Subtraction:** Round to the nearest whole number
- 12.8 + 5.3 ≈ 13 + 5 = 18 (actual: 18.1)

**Multiplication:** Round to make mental math easy
- 4.8 × 3.1 ≈ 5 × 3 = 15 (actual: 14.88)

**Division:** Round both numbers
- 23.7 ÷ 4.9 ≈ 24 ÷ 5 ≈ 5 (actual: 4.8...)

## Real-World Applications

### Money Problems

**Problem:** You buy 3 notebooks at $2.45 each and 2 pens at $1.30 each. How much do you spend?

**Solution:**
Notebooks: 3 × 2.45 = 7.35
Pens: 2 × 1.30 = 2.60
Total: 7.35 + 2.60 = 9.95

Answer: $9.95

### Measurement Problems

**Problem:** A recipe calls for 2.5 cups of flour. You want to make 1/2 of the recipe. How much flour do you need?

**Solution:**
2.5 ÷ 2 = 1.25 cups

Answer: 1.25 cups (or 1 1/4 cups)

### Rate Problems

**Problem:** Gas costs $3.89 per gallon. How much does 12.5 gallons cost?

**Solution:**
3.89 × 12.5 = 48.625 ≈ $48.63 (round to nearest cent)

Answer: $48.63

## Converting Between Fractions and Decimals

**Fraction to Decimal:** Divide the numerator by denominator
- 3/4 = 3 ÷ 4 = 0.75
- 1/8 = 1 ÷ 8 = 0.125

**Decimal to Fraction:** Use place value
- 0.6 = 6/10 = 3/5
- 0.25 = 25/100 = 1/4
- 0.125 = 125/1000 = 1/8

## Common Decimal Equivalents to Memorize

- 1/2 = 0.5
- 1/4 = 0.25
- 3/4 = 0.75
- 1/5 = 0.2
- 1/10 = 0.1
- 1/8 = 0.125
- 1/3 ≈ 0.333... (repeating)
- 2/3 ≈ 0.666... (repeating)

## Common Mistakes to Avoid

**Mistake 1: Not lining up decimal points in addition/subtraction**
Wrong: Not aligning decimals properly
Right: Line up decimal points vertically (12.50 + 3.84)

**Mistake 2: Counting decimal places incorrectly in multiplication**
4.5 × 2.3 has 2 total decimal places (1 + 1), not 3!

**Mistake 3: Moving decimals different amounts in division**
When dividing 3.6 ÷ 0.12, move BOTH decimals the same number of places.

**Mistake 4: Forgetting zeros as placeholders**
0.4 × 0.2 = 0.08, not 0.8 (need the zero placeholder)

**Mistake 5: Not checking reasonableness**
If 5.2 × 3.1 gives you 161.2, something's wrong! (Should be about 15)

## Mental Math Tricks

**Multiplying by 10, 100, 1000:**
Move decimal point right
- 3.45 × 10 = 34.5
- 3.45 × 100 = 345

**Dividing by 10, 100, 1000:**
Move decimal point left
- 67.8 ÷ 10 = 6.78
- 67.8 ÷ 100 = 0.678

**Multiplying by 0.1, 0.01:**
Same as dividing by 10, 100
- 50 × 0.1 = 5
- 50 × 0.01 = 0.5

## Practice Strategies

1. **Master place value:** Know what each digit represents
2. **Always line up decimals:** For addition and subtraction
3. **Count carefully:** Track decimal places in multiplication
4. **Make divisor whole:** In division, always move decimals in divisor first
5. **Estimate first:** Check if your answer makes sense
6. **Use graph paper:** Helps align decimal points correctly
7. **Practice with money:** Real-world context makes it meaningful

Decimal operations are essential for everyday life - shopping, cooking, measuring, and so much more. Master these skills and you'll use them forever!`
    }
  });
  console.log('✅ Updated: decimal-operations');

  // Topic 3: Writing Expressions
  await prisma.topic.updateMany({
    where: {
      slug: 'writing-expressions'
    },
    data: {
      textContent: `# Writing Expressions

Learn to translate words into mathematical expressions! This crucial skill bridges everyday language and algebra, setting you up for success in higher mathematics.

## What Is an Expression?

An **algebraic expression** is a mathematical phrase that contains numbers, variables, and operation symbols. Unlike an equation, it has **no equal sign**.

**Examples of Expressions:**
- 5x + 3
- 2n - 7
- 4(a + 2)
- x/3 + 10

**Not Expressions (these are equations):**
- 5x + 3 = 18
- 2n - 7 = 15

## Understanding Variables

A **variable** is a letter that represents an unknown number. Variables let us write general rules and formulas.

**Common variables:** x, y, n, a, b, t
**What they represent:** Any number (the value can vary, hence "variable")

**Example:** In "5x," the variable is x, and 5 is the coefficient (the number multiplied by x).

## Translating Words to Expressions

### Addition Phrases

When you see these words, think **addition (+)**:

**Key Words:**
- sum
- plus
- more than
- increased by
- added to
- total
- altogether

**Examples:**
- "The sum of x and 8" → x + 8
- "5 more than a number n" → n + 5
- "y increased by 12" → y + 12
- "3 plus twice a number" → 3 + 2x (or 2x + 3)

**Order Matters?** For addition, order doesn't affect the answer:
- "x plus 7" = "7 plus x" = x + 7 = 7 + x

### Subtraction Phrases

When you see these words, think **subtraction (-)**:

**Key Words:**
- difference
- minus
- less than
- decreased by
- subtracted from
- take away
- fewer than

**Examples:**
- "The difference between x and 9" → x - 9
- "5 less than a number n" → n - 5
- "y decreased by 3" → y - 3
- "8 minus a number" → 8 - x

**Order Matters!** For subtraction, order is crucial:
- "5 less than x" → x - 5 (NOT 5 - x)
- "x minus 5" → x - 5
- "5 subtracted from x" → x - 5 (start with x, subtract 5)

**Trick:** With "less than" and "subtracted from," **reverse the order**!
- "7 less than n" means start with n, then subtract 7 → n - 7
- "10 subtracted from y" means start with y, then subtract 10 → y - 10

### Multiplication Phrases

When you see these words, think **multiplication (× or ·)**:

**Key Words:**
- product
- times
- multiplied by
- of (when working with fractions/percents)
- twice (means ×2)
- triple (means ×3)

**Examples:**
- "The product of 6 and x" → 6x
- "4 times a number n" → 4n
- "y multiplied by 5" → 5y
- "Twice a number" → 2x
- "One-half of x" → (1/2)x or x/2

**Note:** In algebra, we usually write multiplication without the × symbol:
- 5 × x = 5x
- 3 × (n + 2) = 3(n + 2)

### Division Phrases

When you see these words, think **division (÷ or /)**:

**Key Words:**
- quotient
- divided by
- ratio
- per
- split

**Examples:**
- "x divided by 4" → x/4 or x ÷ 4
- "The quotient of 20 and n" → 20/n
- "y split into 5 equal parts" → y/5
- "24 per x" → 24/x

**Order Matters!** For division, order is critical:
- "x divided by 5" → x/5 (NOT 5/x)
- "The quotient of 12 and n" → 12/n (first number on top)

## Multi-Step Expressions

Often, you'll translate phrases that require multiple operations.

### Example 1: Two Operations

**Phrase:** "Five more than twice a number"

**Step 1:** Identify the parts
- "twice a number" → 2x
- "five more than" → add 5

**Step 2:** Write the expression
2x + 5

### Example 2: With Grouping

**Phrase:** "Three times the sum of x and 4"

**Step 1:** Identify the parts
- "the sum of x and 4" → x + 4
- "three times" → multiply by 3

**Step 2:** Write with parentheses (grouping is important!)
3(x + 4)

**Note:** This is different from 3x + 4!
- 3(x + 4) = 3x + 12
- 3x + 4 stays as is

### Example 3: Complex Expression

**Phrase:** "Eight less than the product of 6 and a number"

**Step 1:** Identify the parts
- "the product of 6 and a number" → 6n
- "eight less than" → subtract 8 (remember to reverse!)

**Step 2:** Write the expression
6n - 8

**Not** 8 - 6n! ("Less than" means reverse the order)

## Common Patterns to Recognize

### Consecutive Numbers

**Consecutive integers:** n, n+1, n+2
**Example:** If n = 5, then the next two integers are 6 and 7

**Consecutive even integers:** n, n+2, n+4
**Example:** If n = 10, then 12 and 14 follow

**Consecutive odd integers:** n, n+2, n+4
**Example:** If n = 7, then 9 and 11 follow

### Age Problems

**Current age:** a
**Age 5 years from now:** a + 5
**Age 3 years ago:** a - 3
**Twice someone's age:** 2a

### Geometry Formulas

**Perimeter of rectangle:** 2l + 2w (where l = length, w = width)
**Area of rectangle:** lw
**Area of triangle:** (1/2)bh or bh/2 (where b = base, h = height)

## Real-World Applications

### Shopping Problem

**Situation:** Notebooks cost $3 each, and you buy x notebooks.

**Expression for total cost:** 3x

**If you have a $2 coupon:** 3x - 2

### Distance Problem

**Situation:** A car travels at 60 mph for t hours.

**Expression for distance:** 60t

**If the car already traveled 20 miles:** 60t + 20

### Sharing Problem

**Situation:** You have d dollars to split equally among 4 friends.

**Expression for each person's share:** d/4

## Writing Expressions from Tables

Sometimes you identify patterns in tables and write expressions.

### Example Table

| x | y |
|---|---|
| 1 | 5 |
| 2 | 7 |
| 3 | 9 |
| 4 | 11|

**Pattern:** y is always 3 more than twice x

**Expression:** y = 2x + 3

**Check:** When x = 1, y = 2(1) + 3 = 5 ✓

## Common Mistakes to Avoid

**Mistake 1: Order confusion with "less than"**
Wrong: "5 less than x" → 5 - x
Right: "5 less than x" → x - 5

**Mistake 2: Forgetting parentheses**
"Twice the sum of x and 3"
Wrong: 2x + 3
Right: 2(x + 3)

**Mistake 3: Confusing "of" and "more than"**
- "5 more than x" → x + 5 (addition)
- "Half of x" → x/2 or (1/2)x (multiplication)

**Mistake 4: Writing equations instead of expressions**
If the problem says "find an expression," don't include =
Expression: 3x + 7 ✓
Equation: 3x + 7 = 22 (only if problem mentions "equals")

**Mistake 5: Variable confusion**
Be consistent! If you start with n for "a number," don't switch to x halfway through.

## Practice Strategy

**Step 1: Identify the operation words**
Circle or underline key words (sum, product, less than, etc.)

**Step 2: Determine the order**
Watch for "less than" and "subtracted from" - these reverse order!

**Step 3: Check for grouping**
Look for phrases like "the sum of" or "the product of" that need parentheses

**Step 4: Write the expression**
Use clear variable names and proper mathematical notation

**Step 5: Test your expression**
Plug in a number and see if it makes sense

## Connection to Equations

Writing expressions is the first step toward solving equations!

**Expression:** 3x + 7 (a phrase)
**Equation:** 3x + 7 = 22 (a complete sentence with equals)

In the next topic, you'll learn to evaluate these expressions by substituting values for variables!

Master writing expressions and you've unlocked a powerful tool for solving real-world problems with mathematics!`
    }
  });
  console.log('✅ Updated: writing-expressions');

  console.log('\n✨ Successfully updated 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
