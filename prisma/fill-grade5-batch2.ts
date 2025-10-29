import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 5 Math topics - Batch 2 (3 topics)...\n');

  const grade5Course = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' }
  });

  if (!grade5Course) {
    throw new Error('Grade 5 Math course not found');
  }

  const updates = [
    {
      slug: 'prime-composite-numbers',
      content: `# Prime and Composite Numbers

## What are Prime Numbers?

A **prime number** is a number that has EXACTLY TWO factors: 1 and itself.

**Examples of prime numbers:**
- 2 (factors: 1, 2) ✓
- 3 (factors: 1, 3) ✓
- 5 (factors: 1, 5) ✓
- 7 (factors: 1, 7) ✓
- 11 (factors: 1, 11) ✓

**Key fact:** Prime numbers can ONLY be divided evenly by 1 and themselves!

## What are Composite Numbers?

A **composite number** is a number that has MORE than two factors.

**Examples of composite numbers:**
- 4 (factors: 1, 2, 4) ✓ - three factors
- 6 (factors: 1, 2, 3, 6) ✓ - four factors
- 8 (factors: 1, 2, 4, 8) ✓ - four factors
- 9 (factors: 1, 3, 9) ✓ - three factors
- 10 (factors: 1, 2, 5, 10) ✓ - four factors

**Key fact:** Composite numbers can be divided evenly by numbers OTHER than just 1 and themselves!

## The Special Numbers

### The Number 1
**1 is NEITHER prime nor composite!**

Why? Because 1 only has ONE factor (itself).
- Prime needs exactly TWO factors
- Composite needs MORE than two factors
- 1 has only ONE factor

**1 is special and gets its own category!**

### The Number 2
**2 is the ONLY even prime number!**

- Factors of 2: 1, 2 (exactly two) ✓ Prime!
- All other even numbers are composite (divisible by 2)

**2 is the smallest prime number!**

## Prime Numbers 1-100

Here are all the prime numbers from 1 to 100:

**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97**

That's **25 prime numbers** from 1 to 100!

**Notice:** 
- 2 is the only even prime
- All other primes are odd
- They get more spread out as numbers get bigger

## How to Tell if a Number is Prime

**Method: Test for factors**

**Example: Is 17 prime?**

**Step 1:** Try dividing by 2
17 ÷ 2 = 8.5 ✗ (not evenly)

**Step 2:** Try dividing by 3
17 ÷ 3 = 5.67... ✗ (not evenly)

**Step 3:** Try dividing by 4
17 ÷ 4 = 4.25 ✗ (not evenly)

**Step 4:** Try dividing by 5
17 ÷ 5 = 3.4 ✗ (not evenly)

We can stop here! (Why? If there are no factors by now, there won't be any)

**17 is PRIME!** ✓ (only factors are 1 and 17)

## Shortcut: When to Stop Testing

You only need to test up to the **square root** of the number!

**Example: Is 29 prime?**

Square root of 29 ≈ 5.4

Test divisors: 2, 3, 4, 5 (stop at 5!)

- 29 ÷ 2 = 14.5 ✗
- 29 ÷ 3 = 9.67... ✗
- 29 ÷ 4 = 7.25 ✗
- 29 ÷ 5 = 5.8 ✗

**29 is PRIME!** ✓

## Testing Small Numbers

**Is 2 prime?** 
Factors: 1, 2
Yes! ✓

**Is 3 prime?**
Factors: 1, 3
Yes! ✓

**Is 4 prime?**
Factors: 1, 2, 4
No - it's composite! (has more than 2 factors)

**Is 5 prime?**
Factors: 1, 5
Yes! ✓

**Is 6 prime?**
Factors: 1, 2, 3, 6
No - it's composite!

**Is 7 prime?**
Factors: 1, 7
Yes! ✓

**Is 8 prime?**
Factors: 1, 2, 4, 8
No - it's composite!

**Is 9 prime?**
Factors: 1, 3, 9
No - it's composite!

**Is 10 prime?**
Factors: 1, 2, 5, 10
No - it's composite!

## Quick Tests for Composite Numbers

**Divisible by 2?** (even number) → Composite!
- 24, 68, 102 are all composite

**Divisible by 3?** (digit sum divisible by 3) → Composite!
- 27 → 2+7=9, 9÷3=3 → Composite!

**Divisible by 5?** (ends in 0 or 5) → Composite!
- 25, 35, 45, 50 are all composite

**Exception:** 2, 3, and 5 themselves ARE prime!

## Prime or Composite Chart

| Number | Factors | Prime or Composite? |
|--------|---------|---------------------|
| 1 | 1 | Neither |
| 2 | 1, 2 | Prime ✓ |
| 3 | 1, 3 | Prime ✓ |
| 4 | 1, 2, 4 | Composite |
| 5 | 1, 5 | Prime ✓ |
| 6 | 1, 2, 3, 6 | Composite |
| 7 | 1, 7 | Prime ✓ |
| 8 | 1, 2, 4, 8 | Composite |
| 9 | 1, 3, 9 | Composite |
| 10 | 1, 2, 5, 10 | Composite |
| 11 | 1, 11 | Prime ✓ |
| 12 | 1, 2, 3, 4, 6, 12 | Composite |

## Why Do We Care?

**Prime numbers are the "building blocks" of all numbers!**

Every composite number can be broken down into prime factors.

**Example:** 12 = 2 × 2 × 3
- 12 is composite
- It's made up of the primes 2 and 3

This is called **prime factorization** (you'll learn more later)!

## Common Mistakes

❌ **Mistake 1:** Thinking 1 is prime
1 is NEITHER prime nor composite! ✓

❌ **Mistake 2:** Thinking 2 is composite because it's even
2 IS prime (the only even prime)! ✓

❌ **Mistake 3:** Thinking all odd numbers are prime
9, 15, 21, 25, 27 are odd but composite! ✓

## Memory Tricks

**Remember the first few primes:**
"**2**, **3**, **5**, **7**, **11**, **13** went to **17** to buy **19**, **23** happy **29** year-olds **31** books..."

Or just remember: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**

## Identifying Strategy

**To determine if a number is prime or composite:**

**Step 1:** Is it 1? → Neither
**Step 2:** Is it 2? → Prime
**Step 3:** Is it even? → Composite
**Step 4:** Try dividing by small primes (2, 3, 5, 7...)
**Step 5:** If no factors found → Prime!

## Real-World Applications

**Cryptography (Internet Security):**
Prime numbers are used to keep your passwords and credit card info safe online!

**Nature:**
Some cicadas come out every 13 or 17 years (both prime numbers) - this helps them survive!

## Twin Primes

**Twin primes** are prime numbers that differ by 2.

Examples:
- 3 and 5 (5 - 3 = 2) ✓
- 5 and 7 (7 - 5 = 2) ✓
- 11 and 13 (13 - 11 = 2) ✓
- 17 and 19 ✓
- 29 and 31 ✓

Cool pattern! ✓

## The Sieve of Eratosthenes

An ancient method to find all primes up to a certain number!

**How it works (for numbers 1-30):**

1. Write all numbers 1-30
2. Cross out 1 (not prime)
3. Circle 2, cross out all multiples of 2 (4, 6, 8, 10...)
4. Circle 3, cross out all multiples of 3 (6, 9, 12, 15...)
5. Circle 5, cross out all multiples of 5 (10, 15, 20, 25...)
6. Continue...

**Numbers left circled are all prime!** ✓

## Practice Examples

**Example 1:** Is 13 prime or composite?
- Test: 13 ÷ 2 = 6.5 ✗
- Test: 13 ÷ 3 = 4.33... ✗
- Factors: only 1 and 13
- **Answer: Prime!** ✓

**Example 2:** Is 15 prime or composite?
- Factors: 1, 3, 5, 15
- Has more than 2 factors
- **Answer: Composite!** ✓

**Example 3:** Is 23 prime or composite?
- Test: 23 ÷ 2 = 11.5 ✗
- Test: 23 ÷ 3 = 7.67... ✗
- Test: 23 ÷ 5 = 4.6 ✗
- Factors: only 1 and 23
- **Answer: Prime!** ✓

## Quick Reference

**Prime Number:**
- Exactly 2 factors (1 and itself)
- Can't be divided evenly by any other numbers
- Examples: 2, 3, 5, 7, 11, 13...

**Composite Number:**
- More than 2 factors
- Can be divided evenly by numbers other than 1 and itself
- Examples: 4, 6, 8, 9, 10, 12...

**Neither:**
- The number 1 (only has 1 factor)

## Summary

**Every whole number greater than 1 is either prime or composite!**

**Prime:** Building blocks (can't be broken down further)
**Composite:** Made up of primes (can be broken down)

**Remember:**
- 1 is neither
- 2 is the only even prime
- All even numbers (except 2) are composite
- Not all odd numbers are prime!

**To test:** Find all factors. If there are exactly 2 (1 and itself), it's prime! ✓`
    },
    {
      slug: 'gcf-and-lcm',
      content: `# GCF and LCM

## What is GCF?

**GCF** stands for **Greatest Common Factor**

It's the **largest** number that divides evenly into two or more numbers.

**Example:** GCF of 12 and 18

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 18: 1, 2, 3, 6, 9, 18

**Common factors:** 1, 2, 3, 6

**Greatest Common Factor (GCF) = 6** ✓

6 is the biggest number that divides evenly into both 12 and 18!

## Finding GCF - List Method

**Step 1:** List all factors of each number
**Step 2:** Find the common factors
**Step 3:** Pick the greatest (biggest) one

**Example: GCF of 24 and 36**

**Step 1:** List factors
- Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
- Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36

**Step 2:** Common factors
1, 2, 3, 4, 6, 12

**Step 3:** Greatest common factor
**GCF = 12** ✓

## Finding GCF - Prime Factorization Method

**Step 1:** Find prime factorization of each number
**Step 2:** Circle the common prime factors
**Step 3:** Multiply the common primes together

**Example: GCF of 30 and 45**

**Step 1:** Prime factorization
- 30 = 2 × 3 × 5
- 45 = 3 × 3 × 5

**Step 2:** Common primes
- Both have: 3 and 5

**Step 3:** Multiply common primes
GCF = 3 × 5 = **15** ✓

## What is LCM?

**LCM** stands for **Least Common Multiple**

It's the **smallest** number that is a multiple of two or more numbers.

**Example:** LCM of 4 and 6

Multiples of 4: 4, 8, **12**, 16, 20, **24**, 28...
Multiples of 6: 6, **12**, 18, **24**, 30...

**Common multiples:** 12, 24, 36...

**Least Common Multiple (LCM) = 12** ✓

12 is the smallest number that both 4 and 6 divide into evenly!

## Finding LCM - List Method

**Step 1:** List multiples of each number
**Step 2:** Find the common multiples
**Step 3:** Pick the least (smallest) one

**Example: LCM of 3 and 5**

**Step 1:** List multiples
- Multiples of 3: 3, 6, 9, 12, **15**, 18, 21, 24, 27, **30**...
- Multiples of 5: 5, 10, **15**, 20, 25, **30**...

**Step 2:** Common multiples
15, 30, 45, 60...

**Step 3:** Least common multiple
**LCM = 15** ✓

## Finding LCM - Prime Factorization Method

**Step 1:** Find prime factorization of each number
**Step 2:** Take each prime factor the MOST times it appears
**Step 3:** Multiply them together

**Example: LCM of 12 and 18**

**Step 1:** Prime factorization
- 12 = 2 × 2 × 3
- 18 = 2 × 3 × 3

**Step 2:** Take each prime the most it appears
- 2 appears twice in 12 → take 2²
- 3 appears twice in 18 → take 3²

**Step 3:** Multiply
LCM = 2² × 3² = 4 × 9 = **36** ✓

## GCF vs. LCM

**GCF (Greatest Common Factor):**
- Find the BIGGEST number that goes into both
- **Smaller** than both numbers (or equal)
- Use for: simplifying fractions, dividing into groups

**LCM (Least Common Multiple):**
- Find the SMALLEST number both go into
- **Bigger** than both numbers (or equal)
- Use for: adding/subtracting fractions, finding patterns

**Memory trick:**
- **G**CF = **G**oes into (divides into)
- **L**CM = **L**arger number (usually)

## Real-World Examples

### GCF Example: Sharing Equally

**Problem:** You have 24 cookies and 36 brownies. What's the largest number of identical gift bags you can make (using all items)?

**Solution:** Find GCF of 24 and 36

Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36

**GCF = 12**

**Answer: You can make 12 gift bags!** ✓
- Each bag has 2 cookies (24 ÷ 12 = 2)
- Each bag has 3 brownies (36 ÷ 12 = 3)

### LCM Example: Events Repeating

**Problem:** The pizza shop delivers every 3 days. The sushi shop delivers every 4 days. If both deliver today, when will they both deliver on the same day again?

**Solution:** Find LCM of 3 and 4

Multiples of 3: 3, 6, 9, **12**, 15, 18, 21, **24**...
Multiples of 4: 4, 8, **12**, 16, 20, **24**...

**LCM = 12**

**Answer: In 12 days!** ✓

## Special Cases

### When One Number is a Multiple of the Other

**Example: GCF and LCM of 6 and 12**

6 goes into 12 evenly!

**GCF = 6** (the smaller number)
**LCM = 12** (the larger number)

**Rule:** When one number divides evenly into another:
- GCF = smaller number
- LCM = larger number

### When Numbers Have No Common Factors (Relatively Prime)

**Example: GCF and LCM of 8 and 9**

Factors of 8: 1, 2, 4, 8
Factors of 9: 1, 3, 9

Only common factor is 1!

**GCF = 1**
**LCM = 8 × 9 = 72**

**Rule:** When GCF = 1:
- Numbers are "relatively prime"
- LCM = multiply the numbers together

## Using GCF to Simplify Fractions

**Example:** Simplify 24/36

**Step 1:** Find GCF of 24 and 36
GCF = 12

**Step 2:** Divide both by GCF
24 ÷ 12 = 2
36 ÷ 12 = 3

**Answer: 24/36 = 2/3** ✓

## Using LCM to Add Fractions

**Example:** Add 1/4 + 1/6

**Step 1:** Find LCM of 4 and 6
LCM = 12

**Step 2:** Convert both to denominator of 12
1/4 = 3/12
1/6 = 2/12

**Step 3:** Add
3/12 + 2/12 = 5/12 ✓

## Practice Examples

### Example 1: GCF of 18 and 24

Factors of 18: 1, 2, 3, 6, 9, 18
Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24

Common factors: 1, 2, 3, 6

**GCF = 6** ✓

### Example 2: LCM of 6 and 8

Multiples of 6: 6, 12, 18, **24**, 30, 36, 42, **48**...
Multiples of 8: 8, 16, **24**, 32, 40, **48**...

**LCM = 24** ✓

### Example 3: GCF and LCM of 10 and 15

**GCF:**
Factors of 10: 1, 2, 5, 10
Factors of 15: 1, 3, 5, 15
**GCF = 5** ✓

**LCM:**
Multiples of 10: 10, 20, **30**, 40, 50, **60**...
Multiples of 15: 15, **30**, 45, **60**...
**LCM = 30** ✓

## The Ladder Method (Alternative)

You can use the "ladder" or "cake" method for both GCF and LCM!

**Example: GCF of 24 and 36**

Draw a ladder and divide by common factors:
- Divide both by 2 → get 12 and 18
- Divide both by 2 again → get 6 and 9
- Divide both by 3 → get 2 and 3

Multiply the numbers on the left: 2 × 2 × 3 = **12** ✓ (GCF)

For LCM: Multiply left AND bottom: 2 × 2 × 3 × 2 × 3 = **36** ✓

## Common Mistakes

❌ **Mistake 1:** Confusing GCF and LCM
GCF is smaller, LCM is bigger!

❌ **Mistake 2:** Picking a common factor that's not the greatest
Make sure you find the BIGGEST common factor!

❌ **Mistake 3:** Listing multiples incorrectly
Double-check you're multiplying correctly (4, 8, 12, 16... not 4, 5, 6, 7...)

## Quick Check Method

**For GCF:** Can you divide both numbers by your answer? ✓
**For LCM:** Can both numbers divide evenly into your answer? ✓

## Tips for Success

**Finding GCF:**
✅ List factors from smallest to largest
✅ Circle common ones
✅ Pick the biggest!

**Finding LCM:**
✅ List multiples in order
✅ Find the first one that appears in both lists
✅ That's your LCM!

## Summary

**GCF (Greatest Common Factor):**
- Largest number that divides into both numbers
- Find by: listing factors or using prime factorization
- Smaller than or equal to the numbers
- Use for: simplifying fractions, dividing into equal groups

**LCM (Least Common Multiple):**
- Smallest number that both numbers divide into
- Find by: listing multiples or using prime factorization
- Larger than or equal to the numbers
- Use for: adding fractions, finding when events repeat

**Remember:** 
- **G**CF **G**oes into (dividing)
- **L**CM is **L**arger (multiplying)

Both are super useful for working with fractions! ✓`
    },
    {
      slug: 'numerical-expressions',
      content: `# Numerical Expressions

## What is a Numerical Expression?

A **numerical expression** is a math problem with numbers and operations (+, −, ×, ÷) but **NO equal sign**.

**Examples of numerical expressions:**
- 5 + 3
- 12 × 4 - 7
- (8 + 2) ÷ 5
- 20 - 3 × 4 + 6

**NOT expressions (these are equations):**
- 5 + 3 = 8 (has equal sign)
- x + 7 (has a variable)

**Key:** Expressions show a calculation but don't have an answer written yet!

## Parts of an Expression

**Numbers:** 3, 15, 100, etc.
**Operations:** +, −, ×, ÷
**Grouping symbols:** ( ), [ ], { }

**Example:** (12 + 3) × 5 - 2
- Numbers: 12, 3, 5, 2
- Operations: +, ×, −
- Grouping: ( )

## Evaluating Expressions

**To evaluate** means to find the value (solve it).

**Example:** Evaluate 7 + 3

7 + 3 = 10

The **value** of the expression is **10** ✓

## Order of Operations (PEMDAS)

To evaluate expressions with multiple operations, use **PEMDAS**!

**P** - Parentheses
**E** - Exponents
**M** - Multiplication
**D** - Division
**A** - Addition
**S** - Subtraction

**Example:** Evaluate 6 + 3 × 2

**Wrong way:** 6 + 3 = 9, then 9 × 2 = 18 ✗

**Right way:** 3 × 2 = 6, then 6 + 6 = 12 ✓

Always multiply BEFORE adding!

## Simple Expressions

### One Operation

**Example 1:** 8 + 5
Value = 13 ✓

**Example 2:** 20 - 7
Value = 13 ✓

**Example 3:** 6 × 4
Value = 24 ✓

**Example 4:** 15 ÷ 3
Value = 5 ✓

Easy! Just do the one operation.

### Two Operations (Same Level)

**Example:** 12 + 5 + 3

Work left to right:
12 + 5 = 17
17 + 3 = 20 ✓

**Example:** 20 − 8 − 4

Work left to right:
20 − 8 = 12
12 − 4 = 8 ✓

## Expressions with Different Operations

### Addition and Subtraction

Work **left to right**

**Example:** 15 + 7 − 3

15 + 7 = 22
22 − 3 = 19 ✓

### Multiplication and Division

Work **left to right**

**Example:** 20 ÷ 4 × 2

20 ÷ 4 = 5
5 × 2 = 10 ✓

### Mixed Operations (Use PEMDAS!)

**Example:** 5 + 3 × 4

Multiply first: 3 × 4 = 12
Then add: 5 + 12 = 17 ✓

**Example:** 18 ÷ 3 + 2

Divide first: 18 ÷ 3 = 6
Then add: 6 + 2 = 8 ✓

## Using Parentheses

Parentheses tell you **do this first!**

**Example:** (5 + 3) × 4

**Step 1:** Parentheses first
5 + 3 = 8

**Step 2:** Multiply
8 × 4 = 32 ✓

**Compare without parentheses:** 5 + 3 × 4
3 × 4 = 12
5 + 12 = 17 ✓

Different answer! Parentheses matter!

## Writing Expressions from Words

### Key Words

**Addition (+):**
- sum
- total
- plus
- more than
- increased by

**Subtraction (−):**
- difference
- minus
- less than
- decreased by
- fewer than

**Multiplication (×):**
- product
- times
- multiplied by
- of

**Division (÷):**
- quotient
- divided by
- split into
- shared equally

### Examples

**Words:** "The sum of 8 and 5"
**Expression:** 8 + 5 ✓

**Words:** "The product of 6 and 4"
**Expression:** 6 × 4 ✓

**Words:** "12 decreased by 7"
**Expression:** 12 − 7 ✓

**Words:** "20 divided by 4"
**Expression:** 20 ÷ 4 ✓

**Words:** "3 times the sum of 5 and 2"
**Expression:** 3 × (5 + 2) ✓
(Parentheses show "sum of 5 and 2" happens first!)

## Complex Expressions

**Example 1:** Evaluate (15 − 3) ÷ 4 + 5

**Step 1:** Parentheses
15 − 3 = 12

**Step 2:** Division
12 ÷ 4 = 3

**Step 3:** Addition
3 + 5 = 8 ✓

**Example 2:** Evaluate 20 − 4 × 3 + 6

**Step 1:** Multiply (M comes before A and S)
4 × 3 = 12

**Step 2:** Now we have: 20 − 12 + 6

**Step 3:** Work left to right
20 − 12 = 8
8 + 6 = 14 ✓

## Multiple Grouping Symbols

**Example:** 5 × [(12 − 4) ÷ 2]

**Step 1:** Innermost parentheses
12 − 4 = 8

**Step 2:** Now: 5 × [8 ÷ 2]

**Step 3:** Division inside brackets
8 ÷ 2 = 4

**Step 4:** Multiply
5 × 4 = 20 ✓

**Rule:** Work from the inside out!

## Equivalent Expressions

Different expressions can have the **same value**.

**Example:**
- 5 + 5 + 5 = 15
- 3 × 5 = 15
- 10 + 5 = 15
- 30 ÷ 2 = 15

All these expressions equal 15, so they're **equivalent**! ✓

## Distributive Property

**The distributive property** lets you rewrite expressions.

**Example:** 3 × (4 + 2)

**Method 1:** Parentheses first
3 × (4 + 2) = 3 × 6 = 18 ✓

**Method 2:** Distribute (multiply each term inside)
3 × (4 + 2) = (3 × 4) + (3 × 2) = 12 + 6 = 18 ✓

Both give the same answer!

**General form:** a × (b + c) = (a × b) + (a × c)

## Real-World Expressions

**Shopping:** You buy 3 shirts at $12 each and 2 hats at $8 each. Total cost?
**Expression:** 3 × 12 + 2 × 8
**Value:** 36 + 16 = $52 ✓

**Lunch:** You have $20. You spend $7 on lunch and $5 on a snack. Money left?
**Expression:** 20 − 7 − 5
**Value:** 13 − 5 = $8 ✓

**Sharing:** 24 cookies divided equally among 4 friends, then each friend gets 2 more.
**Expression:** 24 ÷ 4 + 2
**Value:** 6 + 2 = 8 cookies each ✓

## Common Mistakes

❌ **Mistake 1:** Ignoring order of operations
Wrong: 5 + 3 × 2 = 8 × 2 = 16 ✗
Right: 5 + 3 × 2 = 5 + 6 = 11 ✓

❌ **Mistake 2:** Forgetting parentheses change everything
(5 + 3) × 2 ≠ 5 + 3 × 2
16 ≠ 11

❌ **Mistake 3:** Working right to left instead of left to right
For same-level operations, go LEFT to RIGHT!

## Writing Your Own Expressions

**Challenge:** Write three different expressions that equal 24.

**Possible answers:**
1. 20 + 4
2. 6 × 4
3. 30 − 6
4. 48 ÷ 2
5. (5 + 1) × 4
6. 10 + 7 + 7

Many possibilities! ✓

## Evaluating Strategy

**Step-by-step process:**

1. **Look** for parentheses → Do these first!
2. **Check** for exponents → Do these next
3. **Find** multiplication and division → Left to right
4. **Complete** addition and subtraction → Left to right
5. **Write** your final answer

## Practice Problems

**Problem 1:** Evaluate 12 ÷ 4 + 5
12 ÷ 4 = 3
3 + 5 = 8 ✓

**Problem 2:** Evaluate 7 × (3 + 2)
3 + 2 = 5
7 × 5 = 35 ✓

**Problem 3:** Evaluate 18 − 6 ÷ 3
6 ÷ 3 = 2
18 − 2 = 16 ✓

**Problem 4:** Write an expression for "8 more than the product of 5 and 3"
Expression: 5 × 3 + 8
Or: (5 × 3) + 8 ✓

## Expressions vs. Equations

**Expression:** 5 + 3 × 2 (no equal sign)
- You can **evaluate** it (find its value)
- Value = 11

**Equation:** 5 + 3 × 2 = 11 (has equal sign)
- You can **solve** it (check if it's true)
- This equation is true! ✓

**Remember:** Expressions don't have = signs!

## Summary

**Numerical Expression:**
- Math problem with numbers and operations
- NO equal sign
- NO variables (letters)

**To Evaluate:**
- Follow PEMDAS
- Do operations in the correct order
- Find the value

**Key Points:**
- Parentheses first
- Multiply/Divide before Add/Subtract
- Work left to right for same-level operations
- Different expressions can have the same value

**Remember:** Expressions are like recipes - they tell you what to do, step by step! ✓`
    }
  ];

  let updatedCount = 0;
  for (const update of updates) {
    const updated = await prisma.topic.updateMany({
      where: {
        slug: update.slug,
        category: {
          course: { slug: 'grade-5-math' }
        }
      },
      data: {
        textContent: update.content
      }
    });
    
    if (updated.count > 0) {
      console.log(`✅ Updated: ${update.slug}`);
      updatedCount++;
    }
  }

  console.log(`\n✨ Successfully updated ${updatedCount} topics!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
