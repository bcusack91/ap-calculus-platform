import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 6 Math topics - Batch 2 (3 topics)...\n');

  // Topic 1: Evaluating Expressions
  await prisma.topic.updateMany({
    where: {
      slug: 'evaluating-expressions'
    },
    data: {
      textContent: `# Evaluating Expressions

Now that you can write algebraic expressions, it's time to learn how to evaluate them! Evaluating means finding the numerical value of an expression by substituting numbers for variables.

## What Does "Evaluate" Mean?

To **evaluate an expression** means to:
1. Replace the variable(s) with given number(s)
2. Perform the operations following the order of operations (PEMDAS)
3. Simplify to get a single numerical answer

**Example:** Evaluate 3x + 5 when x = 4
- Substitute: 3(4) + 5
- Multiply: 12 + 5
- Add: 17
- Answer: 17

## Basic Evaluation with One Variable

### Example 1: Simple Expression

Evaluate: 2n + 7 when n = 5

**Step 1:** Substitute 5 for n
2(5) + 7

**Step 2:** Follow PEMDAS - multiply first
10 + 7

**Step 3:** Add
17

Answer: 17

### Example 2: Expression with Subtraction

Evaluate: 15 - 3x when x = 2

**Step 1:** Substitute 2 for x
15 - 3(2)

**Step 2:** Multiply first
15 - 6

**Step 3:** Subtract
9

Answer: 9

### Example 3: Expression with Division

Evaluate: y/4 + 3 when y = 20

**Step 1:** Substitute 20 for y
20/4 + 3

**Step 2:** Divide first
5 + 3

**Step 3:** Add
8

Answer: 8

## Evaluating with Parentheses

When an expression has parentheses, evaluate what's inside first!

### Example 1: Parentheses First

Evaluate: 5(x + 3) when x = 6

**Step 1:** Substitute 6 for x
5(6 + 3)

**Step 2:** Parentheses first - add inside
5(9)

**Step 3:** Multiply
45

Answer: 45

### Example 2: Multiple Operations

Evaluate: 4(a - 2) + 10 when a = 7

**Step 1:** Substitute 7 for a
4(7 - 2) + 10

**Step 2:** Parentheses first
4(5) + 10

**Step 3:** Multiply
20 + 10

**Step 4:** Add
30

Answer: 30

## Evaluating with Two Variables

When expressions have multiple variables, substitute each one carefully.

### Example 1: Addition with Two Variables

Evaluate: 2x + 3y when x = 4 and y = 5

**Step 1:** Substitute both values
2(4) + 3(5)

**Step 2:** Multiply each term
8 + 15

**Step 3:** Add
23

Answer: 23

### Example 2: Mixed Operations

Evaluate: 5a - 2b when a = 6 and b = 4

**Step 1:** Substitute both values
5(6) - 2(4)

**Step 2:** Multiply each term
30 - 8

**Step 3:** Subtract
22

Answer: 22

### Example 3: More Complex Expression

Evaluate: 3x + 2y - 5 when x = 3 and y = 4

**Step 1:** Substitute both values
3(3) + 2(4) - 5

**Step 2:** Multiply
9 + 8 - 5

**Step 3:** Add and subtract from left to right
9 + 8 = 17
17 - 5 = 12

Answer: 12

## Evaluating with Exponents

Remember: Exponents come before multiplication and division in PEMDAS!

### Example 1: Simple Exponent

Evaluate: x² + 3 when x = 4

**Step 1:** Substitute 4 for x
4² + 3

**Step 2:** Exponent first
16 + 3

**Step 3:** Add
19

Answer: 19

### Example 2: Exponent with Coefficient

Evaluate: 2n² when n = 5

**Step 1:** Substitute 5 for n
2(5²)

**Step 2:** Exponent first (only the 5 is squared, not the 2!)
2(25)

**Step 3:** Multiply
50

Answer: 50

**Important:** In 2n², only n is squared. If it were (2n)², you would square the entire product.

### Example 3: Multiple Terms with Exponents

Evaluate: a² + b² when a = 3 and b = 4

**Step 1:** Substitute both values
3² + 4²

**Step 2:** Calculate each exponent
9 + 16

**Step 3:** Add
25

Answer: 25

## Evaluating Fractions and Decimals

Variables can represent any number, including fractions and decimals.

### Example 1: Fraction Value

Evaluate: 6x + 4 when x = 1/2

**Step 1:** Substitute 1/2 for x
6(1/2) + 4

**Step 2:** Multiply
3 + 4

**Step 3:** Add
7

Answer: 7

### Example 2: Decimal Value

Evaluate: 5y - 2 when y = 1.5

**Step 1:** Substitute 1.5 for y
5(1.5) - 2

**Step 2:** Multiply
7.5 - 2

**Step 3:** Subtract
5.5

Answer: 5.5

## Negative Numbers in Expressions

When substituting negative numbers, use parentheses to avoid errors!

### Example 1: Negative Substitution

Evaluate: 3x + 7 when x = -2

**Step 1:** Substitute -2 for x (use parentheses!)
3(-2) + 7

**Step 2:** Multiply
-6 + 7

**Step 3:** Add
1

Answer: 1

### Example 2: Subtraction with Negative

Evaluate: 10 - 2n when n = -3

**Step 1:** Substitute -3 for n
10 - 2(-3)

**Step 2:** Multiply (negative times negative = positive)
10 - (-6)
10 + 6

**Step 3:** Add
16

Answer: 16

**Key Rule:** Subtracting a negative is the same as adding a positive!

### Example 3: Squaring a Negative

Evaluate: x² - 5 when x = -4

**Step 1:** Substitute -4 for x
(-4)² - 5

**Step 2:** Square the negative (negative × negative = positive)
16 - 5

**Step 3:** Subtract
11

Answer: 11

## Real-World Applications

### Temperature Conversion

**Formula:** F = 9C/5 + 32 (converts Celsius to Fahrenheit)

**Problem:** If the temperature is 20°C, what is it in Fahrenheit?

**Solution:** Evaluate when C = 20
F = 9(20)/5 + 32
F = 180/5 + 32
F = 36 + 32
F = 68

Answer: 68°F

### Distance Formula

**Formula:** d = rt (distance = rate × time)

**Problem:** If you travel at 55 mph for 3 hours, how far do you go?

**Solution:** Evaluate when r = 55 and t = 3
d = 55(3)
d = 165

Answer: 165 miles

### Area of Triangle

**Formula:** A = (1/2)bh (area = one-half × base × height)

**Problem:** Find the area when base = 8 and height = 5

**Solution:** Evaluate when b = 8 and h = 5
A = (1/2)(8)(5)
A = (1/2)(40)
A = 20

Answer: 20 square units

## Common Mistakes to Avoid

**Mistake 1: Forgetting parentheses with negative numbers**
Wrong: 3 × -2 (ambiguous)
Right: 3(-2) = -6

**Mistake 2: Not following PEMDAS**
Wrong: 2 + 3 × 4 = 5 × 4 = 20
Right: 2 + 3 × 4 = 2 + 12 = 14

**Mistake 3: Squaring the coefficient too**
Wrong: 2x² when x = 3 → (2 × 3)² = 6² = 36
Right: 2x² when x = 3 → 2(3²) = 2(9) = 18

**Mistake 4: Sign errors with negatives**
Wrong: 5 - 2(-3) = 5 - 6 = -1
Right: 5 - 2(-3) = 5 - (-6) = 5 + 6 = 11

**Mistake 5: Forgetting to substitute all variables**
If an expression has x and y, you must substitute values for both!

## Order of Operations Review (PEMDAS)

**P**arentheses - ( )
**E**xponents - powers and square roots
**M**ultiplication and **D**ivision - left to right
**A**ddition and **S**ubtraction - left to right

**Example:** Evaluate 3(x + 2)² - 4x when x = 2

Step 1: Substitute
3(2 + 2)² - 4(2)

Step 2: Parentheses
3(4)² - 4(2)

Step 3: Exponents
3(16) - 4(2)

Step 4: Multiply (left to right)
48 - 8

Step 5: Subtract
40

Answer: 40

## Evaluating vs. Simplifying

**Evaluating:** Substituting values and calculating a numerical answer
- Evaluate 2x + 3 when x = 5 → 2(5) + 3 = 13

**Simplifying:** Combining like terms without substituting
- Simplify 2x + 3x → 5x (no numerical answer, still has variables)

You evaluate when you have values to substitute. You simplify when you want to make an expression shorter.

## Practice Strategy

**Step 1:** Write down the expression
**Step 2:** Substitute each variable with its value (use parentheses!)
**Step 3:** Follow PEMDAS strictly
**Step 4:** Show all your work - don't skip steps
**Step 5:** Check your answer - does it make sense?

**Mental Check:** If x = 0, most expressions become much simpler!
- 5x + 3 when x = 0 → 5(0) + 3 = 3

## Creating a Substitution Chart

For complex problems with multiple values, make a chart:

Expression: 2a + 3b

| a | b | 2a + 3b |
|---|---|---------|
| 1 | 2 | 2(1) + 3(2) = 2 + 6 = 8 |
| 3 | 1 | 2(3) + 3(1) = 6 + 3 = 9 |
| 0 | 4 | 2(0) + 3(4) = 0 + 12 = 12 |

This helps you see patterns and practice evaluation!

## Connection to Functions

Evaluating expressions is exactly what you do with functions!

**Function notation:** f(x) = 2x + 5
**Find f(3):** Evaluate 2x + 5 when x = 3
- f(3) = 2(3) + 5 = 6 + 5 = 11

You're already learning the foundation for algebra and functions!

## Why Evaluation Matters

- **Testing formulas:** Science and math formulas need specific values
- **Checking answers:** Substitute your solution back to verify
- **Real-world calculations:** Recipes, budgets, distances all use evaluation
- **Computer programming:** Variables and evaluation are fundamental to coding
- **Building algebra skills:** Evaluation prepares you for solving equations

Master evaluation and you'll breeze through algebra, geometry, science, and beyond!`
    }
  });
  console.log('✅ Updated: evaluating-expressions');

  // Topic 2: Solving One-Step Equations
  await prisma.topic.updateMany({
    where: {
      slug: 'solving-one-step-equations'
    },
    data: {
      textContent: `# Solving One-Step Equations

Welcome to equation solving! An equation is different from an expression - it has an equal sign and asks you to find the value that makes it true. In this topic, you'll learn to solve one-step equations using inverse operations.

## What Is an Equation?

An **equation** is a mathematical sentence that says two expressions are equal.

**Examples:**
- x + 5 = 12 (equation)
- 3n = 21 (equation)
- 2x + 7 (expression - no equal sign!)

**The Goal:** Find the value of the variable that makes the equation true.

## What Does "Solve" Mean?

To **solve an equation** means to find the value of the variable that makes both sides equal.

**Example:** x + 3 = 10
- Try x = 5: 5 + 3 = 8 (not equal to 10) ✗
- Try x = 7: 7 + 3 = 10 (equal!) ✓
- Solution: x = 7

## The Balance Method

Think of an equation like a balanced scale. Whatever you do to one side, you must do to the other side to keep it balanced!

**Key Rule:** If you add, subtract, multiply, or divide on one side, you MUST do the same to the other side.

## Inverse Operations

**Inverse operations** are operations that "undo" each other.

**Pairs of Inverses:**
- Addition ↔ Subtraction
- Multiplication ↔ Division

**How to use them:**
- If a number is added, subtract to undo it
- If a number is subtracted, add to undo it
- If a number is multiplied, divide to undo it
- If a number is divided, multiply to undo it

## Addition Equations

When a number is **added** to the variable, **subtract** that number from both sides.

### Example 1: Basic Addition

Solve: x + 7 = 15

**Step 1:** Identify what's being done to x
x has 7 added to it

**Step 2:** Use inverse operation (subtract 7)
x + 7 - 7 = 15 - 7

**Step 3:** Simplify both sides
x = 8

**Step 4:** Check your answer
8 + 7 = 15 ✓

Answer: x = 8

### Example 2: Addition on Right

Solve: 12 = n + 5

**Step 1:** Subtract 5 from both sides
12 - 5 = n + 5 - 5

**Step 2:** Simplify
7 = n

Answer: n = 7 (or we can write x = 7)

## Subtraction Equations

When a number is **subtracted** from the variable, **add** that number to both sides.

### Example 1: Basic Subtraction

Solve: y - 4 = 10

**Step 1:** Identify what's being done to y
y has 4 subtracted from it

**Step 2:** Use inverse operation (add 4)
y - 4 + 4 = 10 + 4

**Step 3:** Simplify
y = 14

**Step 4:** Check
14 - 4 = 10 ✓

Answer: y = 14

### Example 2: Larger Numbers

Solve: a - 23 = 45

**Step 1:** Add 23 to both sides
a - 23 + 23 = 45 + 23

**Step 2:** Simplify
a = 68

**Step 3:** Check
68 - 23 = 45 ✓

Answer: a = 68

## Multiplication Equations

When a variable is **multiplied** by a number, **divide** both sides by that number.

### Example 1: Basic Multiplication

Solve: 3x = 21

**Step 1:** Identify what's being done to x
x is multiplied by 3

**Step 2:** Use inverse operation (divide by 3)
3x ÷ 3 = 21 ÷ 3

**Step 3:** Simplify
x = 7

**Step 4:** Check
3(7) = 21 ✓

Answer: x = 7

### Example 2: Larger Coefficient

Solve: 8n = 72

**Step 1:** Divide both sides by 8
8n ÷ 8 = 72 ÷ 8

**Step 2:** Simplify
n = 9

**Step 3:** Check
8(9) = 72 ✓

Answer: n = 9

### Example 3: Variable on Right

Solve: 45 = 5y

**Step 1:** Divide both sides by 5
45 ÷ 5 = 5y ÷ 5

**Step 2:** Simplify
9 = y

Answer: y = 9

## Division Equations

When a variable is **divided** by a number, **multiply** both sides by that number.

### Example 1: Basic Division

Solve: x/4 = 5

**Step 1:** Identify what's being done to x
x is divided by 4

**Step 2:** Use inverse operation (multiply by 4)
(x/4) × 4 = 5 × 4

**Step 3:** Simplify
x = 20

**Step 4:** Check
20/4 = 5 ✓

Answer: x = 20

### Example 2: Fraction Form

Solve: n/6 = 3

**Step 1:** Multiply both sides by 6
(n/6) × 6 = 3 × 6

**Step 2:** Simplify
n = 18

**Step 3:** Check
18/6 = 3 ✓

Answer: n = 18

### Example 3: Larger Divisor

Solve: y/12 = 7

**Step 1:** Multiply both sides by 12
(y/12) × 12 = 7 × 12

**Step 2:** Simplify
y = 84

Answer: y = 84

## Equations with Negative Numbers

### Addition with Negatives

Solve: x + (-5) = 8
or written as: x - 5 = 8

**Step 1:** Add 5 to both sides
x - 5 + 5 = 8 + 5

**Step 2:** Simplify
x = 13

Answer: x = 13

### Subtraction with Negatives

Solve: n - (-3) = 10
or: n + 3 = 10

**Step 1:** Subtract 3 from both sides
n + 3 - 3 = 10 - 3

**Step 2:** Simplify
n = 7

Answer: n = 7

### Multiplication with Negatives

Solve: -4x = 28

**Step 1:** Divide both sides by -4
-4x ÷ (-4) = 28 ÷ (-4)

**Step 2:** Simplify (positive ÷ negative = negative)
x = -7

**Step 3:** Check
-4(-7) = 28 ✓

Answer: x = -7

## Equations with Fractions and Decimals

### Fraction Solutions

Solve: 2x = 5

**Step 1:** Divide both sides by 2
2x ÷ 2 = 5 ÷ 2

**Step 2:** Simplify
x = 5/2 or 2.5

Answer: x = 5/2 (or 2.5 or 2 1/2)

### Decimal Equations

Solve: x + 3.5 = 10

**Step 1:** Subtract 3.5 from both sides
x + 3.5 - 3.5 = 10 - 3.5

**Step 2:** Simplify
x = 6.5

Answer: x = 6.5

## Real-World Applications

### Shopping Problem

**Problem:** You have $50 and spend $x on a shirt. You have $27 left. How much did the shirt cost?

**Equation:** 50 - x = 27

**Solution:**
50 - x = 27
50 - x - 50 = 27 - 50
-x = -23
x = 23

Answer: The shirt cost $23

### Distance Problem

**Problem:** A car travels at 60 mph. After how many hours will it have traveled 180 miles?

**Equation:** 60t = 180

**Solution:**
60t = 180
60t ÷ 60 = 180 ÷ 60
t = 3

Answer: 3 hours

### Sharing Problem

**Problem:** You split a prize of x dollars equally among 4 friends. Each person gets $15. What was the total prize?

**Equation:** x/4 = 15

**Solution:**
x/4 = 15
(x/4) × 4 = 15 × 4
x = 60

Answer: $60 total prize

## Checking Your Solution

Always check by substituting your answer back into the original equation!

**Example:** Solve x + 8 = 15

Solution: x = 7

Check: 7 + 8 = 15 ✓ (True, so x = 7 is correct!)

**If the check doesn't work, you made an error and need to try again.**

## Common Mistakes to Avoid

**Mistake 1: Not doing the same thing to both sides**
Wrong: x + 5 = 12 → x = 12
Right: x + 5 = 12 → x + 5 - 5 = 12 - 5 → x = 7

**Mistake 2: Using the wrong inverse operation**
Wrong: 3x = 15 → 3x + 3 = 15 + 3
Right: 3x = 15 → 3x ÷ 3 = 15 ÷ 3 → x = 5

**Mistake 3: Sign errors with negatives**
Wrong: -2x = 10 → x = -20
Right: -2x = 10 → x = -5 (divide both by -2)

**Mistake 4: Forgetting to check**
Always substitute your answer back to verify!

**Mistake 5: Confusing expressions and equations**
Expression: 2x + 5 (can't solve, no equal sign)
Equation: 2x + 5 = 15 (can solve for x)

## Strategy for Solving

**Step 1: Identify the operation**
What is being done to the variable? (added, subtracted, multiplied, divided)

**Step 2: Choose the inverse operation**
Addition → Subtract
Subtraction → Add
Multiplication → Divide
Division → Multiply

**Step 3: Apply to both sides**
Keep the equation balanced!

**Step 4: Simplify**
Perform the arithmetic

**Step 5: Check your answer**
Substitute back into the original equation

## Writing Equations from Words

### Example 1: Addition

**Words:** "A number increased by 8 equals 20"
**Equation:** n + 8 = 20
**Solution:** n = 12

### Example 2: Multiplication

**Words:** "Five times a number is 35"
**Equation:** 5x = 35
**Solution:** x = 7

### Example 3: Division

**Words:** "A number divided by 3 gives 9"
**Equation:** n/3 = 9
**Solution:** n = 27

## Connection to Two-Step Equations

One-step equations are the foundation! Soon you'll solve equations that require two steps:

**One-step:** 2x = 10 (just divide)
**Two-step:** 2x + 3 = 13 (subtract, then divide)

Master one-step equations first, and two-step will be easy!

## Why Equations Matter

- **Solving real problems:** Find unknown values in everyday situations
- **Science formulas:** Rearrange formulas to solve for different variables
- **Financial planning:** Budget problems, savings calculations
- **Construction and design:** Finding measurements and dimensions
- **Computer science:** Programming uses equations constantly

Understanding equations is one of the most powerful tools in all of mathematics. Once you can solve equations, you can answer questions like "How much?" "How many?" and "How long?" in countless real-world situations!`
    }
  });
  console.log('✅ Updated: solving-one-step-equations');

  // Topic 3: Statistical Questions and Data Display
  await prisma.topic.updateMany({
    where: {
      slug: 'statistical-questions-data-display'
    },
    data: {
      textContent: `# Statistical Questions and Data Display

Statistics is the science of collecting, organizing, and analyzing data. In this topic, you'll learn to identify statistical questions and display data effectively using various graphs and charts.

## What Is a Statistical Question?

A **statistical question** is a question that anticipates variability in the data - meaning different answers are expected.

**Statistical Questions:**
- "How tall are students in our class?" (expect different heights)
- "What are people's favorite colors?" (expect different answers)
- "How many hours do 6th graders sleep per night?" (expect variation)

**NOT Statistical Questions:**
- "How tall am I?" (only one answer)
- "What is my favorite color?" (only one person's answer)
- "How many hours did I sleep last night?" (one specific answer)

## Key Difference: One Answer vs. Many Answers

**Statistical:** Expects MANY different data points with variability
**Non-Statistical:** Expects ONE specific answer

### Practice Identifying

**Question:** "How many pets do students in our school have?"
**Answer:** STATISTICAL (different students have different numbers of pets)

**Question:** "How many pets does Sarah have?"
**Answer:** NOT STATISTICAL (one specific answer)

**Question:** "What is the temperature today?"
**Answer:** NOT STATISTICAL (one measurement)

**Question:** "What temperatures did we have this month?"
**Answer:** STATISTICAL (many different temperatures over time)

## Collecting Data

Before you can display data, you need to collect it!

### Methods of Data Collection

**Surveys:** Ask people questions
- Example: "What's your favorite subject?"

**Measurements:** Record numerical data
- Example: Heights of plants over time

**Observations:** Count or record what you see
- Example: Number of cars passing by each hour

**Experiments:** Conduct tests and record results
- Example: How far different paper airplanes fly

## Types of Data

### Categorical Data (Qualitative)

Data that can be grouped into categories or labels.

**Examples:**
- Favorite colors (red, blue, green, etc.)
- Types of pets (dog, cat, fish, bird)
- Eye colors (brown, blue, green, hazel)
- Brands of shoes

**Display methods:** Bar graphs, pie charts, pictographs

### Numerical Data (Quantitative)

Data that consists of numbers and can be measured or counted.

**Examples:**
- Ages (12, 13, 14 years old)
- Heights (60 inches, 65 inches, etc.)
- Test scores (85, 92, 78, etc.)
- Number of siblings (0, 1, 2, 3, etc.)

**Display methods:** Histograms, line plots, stem-and-leaf plots, line graphs

## Organizing Data: Frequency Tables

A **frequency table** shows how often each value appears in a data set.

### Example: Favorite Fruits Survey

Data collected: apple, banana, apple, orange, apple, banana, apple, orange, banana

**Frequency Table:**

| Fruit  | Tally | Frequency |
|--------|-------|-----------|
| Apple  | IIII  | 4         |
| Banana | III   | 3         |
| Orange | II    | 2         |
| **Total** |    | **9**     |

## Displaying Categorical Data

### Bar Graphs

**Bar graphs** use rectangular bars to compare different categories.

**Key Features:**
- Bars can be vertical or horizontal
- Bars should be the same width
- Spaces between bars
- Height/length represents frequency or amount

**When to use:** Comparing different categories

**Example:** Favorite Sports
- Soccer: 12 students
- Basketball: 8 students
- Baseball: 6 students
- Tennis: 4 students

Each sport gets a bar with height showing how many students chose it.

### Pie Charts (Circle Graphs)

**Pie charts** show parts of a whole as slices of a circle.

**Key Features:**
- The whole circle = 100% of the data
- Each slice is proportional to the frequency
- Slices add up to the whole

**When to use:** Showing how parts make up a whole

**Example:** Class Pet Preferences
- Dogs: 40% (largest slice)
- Cats: 30%
- Fish: 20%
- Birds: 10%

### Pictographs

**Pictographs** use pictures or symbols to represent data.

**Key Features:**
- Each symbol represents a certain number
- Must include a key showing what each symbol means

**When to use:** Making data visual and engaging

**Example:** Books Read This Month
(Each book symbol = 2 books)
- Emma: 📚📚📚 = 6 books
- Jake: 📚📚 = 4 books
- Maya: 📚📚📚📚 = 8 books

## Displaying Numerical Data

### Line Plots (Dot Plots)

**Line plots** show numerical data on a number line using Xs or dots.

**Key Features:**
- Number line at the bottom
- X or dot for each data value
- Stack marks when values repeat

**When to use:** Showing distribution of numerical data

**Example:** Number of siblings
- 0 siblings: 1 person (X)
- 1 sibling: 3 people (XXX)
- 2 siblings: 4 people (XXXX)
- 3 siblings: 2 people (XX)
- 4 siblings: 1 person (X)

Shows how data is distributed across values.

### Histograms

**Histograms** group numerical data into ranges (bins) and use bars to show frequency.

**Key Features:**
- Bars touch each other (no gaps)
- X-axis shows ranges of values
- Y-axis shows frequency
- Bars are equal width

**When to use:** Showing distribution of large numerical data sets

**Example:** Test Scores
- 60-69: 2 students
- 70-79: 5 students
- 80-89: 8 students
- 90-100: 5 students

**Difference from Bar Graph:** Histogram bars touch, bar graph bars have spaces.

### Stem-and-Leaf Plots

**Stem-and-leaf plots** organize numerical data by splitting each number into a "stem" and "leaf."

**How it works:**
- Stem = all digits except the last
- Leaf = the last digit

**Example:** Test scores: 68, 72, 75, 78, 81, 85, 85, 88, 92, 95

**Stem-and-Leaf Display:**
- Stem 6: Leaf 8 (represents 68)
- Stem 7: Leaves 2, 5, 8 (represents 72, 75, 78)
- Stem 8: Leaves 1, 5, 5, 8 (represents 81, 85, 85, 88)
- Stem 9: Leaves 2, 5 (represents 92, 95)

Key: 6 | 8 means 68. The stem shows the tens place, leaves show the ones place.

**Advantage:** You can see all the original data values!

## Line Graphs (for Data Over Time)

**Line graphs** show how data changes over time.

**Key Features:**
- Points connected by lines
- X-axis usually shows time
- Y-axis shows the measured value
- Shows trends (increasing, decreasing, constant)

**When to use:** Data that changes over time

**Example:** Temperature Throughout the Day
- Points at 8am, 10am, 12pm, 2pm, 4pm, 6pm
- Connected by lines showing temperature rise and fall

## Choosing the Right Display

### Decision Guide

**Ask yourself:**

**1. Is the data categorical or numerical?**
- Categorical → Bar graph or pie chart
- Numerical → Line plot, histogram, or stem-and-leaf

**2. Am I comparing categories or showing change over time?**
- Comparing categories → Bar graph
- Change over time → Line graph

**3. Do I want to show parts of a whole?**
- Yes → Pie chart

**4. Is the data set small or large?**
- Small → Line plot or stem-and-leaf
- Large → Histogram

### Examples

**"Favorite ice cream flavors of students"**
→ Categorical data, comparing categories → **Bar graph or pie chart**

**"Heights of all students in class"**
→ Numerical data, showing distribution → **Line plot or histogram**

**"Temperature each day for a month"**
→ Numerical data over time → **Line graph**

**"Test scores for 25 students"**
→ Numerical data, see all values → **Stem-and-leaf plot**

## Reading and Interpreting Data Displays

### What to Look For

**1. The Title:** What is the graph about?

**2. The Labels:** What do the axes represent? What are the units?

**3. The Scale:** What values are shown? Are intervals equal?

**4. The Data:** What do the bars, points, or slices show?

**5. Patterns:** What trends or outliers do you notice?

### Example Analysis

**Bar Graph: "Favorite School Subjects"**
- Math: 15 students
- Science: 12 students
- English: 10 students
- History: 8 students
- Art: 10 students

**What we can say:**
- Math is the most popular subject
- History is the least popular
- English and Art are tied
- Total of 55 students surveyed

## Common Mistakes to Avoid

**Mistake 1: Confusing bar graphs and histograms**
- Bar graphs have spaces (categorical data)
- Histograms have touching bars (numerical ranges)

**Mistake 2: Choosing the wrong graph type**
- Don't use a line graph for categorical data
- Don't use a pie chart for data over time

**Mistake 3: Not labeling axes**
Always label what each axis represents and include units!

**Mistake 4: Using inconsistent scales**
Intervals on axes should be equal (0, 10, 20, 30... not 0, 5, 15, 40...)

**Mistake 5: Making pie chart slices that don't add to 100%**
All slices together must equal the whole!

## Creating Effective Displays

### Best Practices

**1. Give it a clear title**
Tell what the data is about

**2. Label everything**
Axes, units, categories, scales

**3. Choose appropriate scale**
Make sure all data fits and is easy to read

**4. Use colors or patterns**
Make it easy to distinguish between categories

**5. Keep it simple**
Don't clutter with unnecessary decoration

**6. Make it accurate**
Represent data truthfully without distortion

## Real-World Applications

**Sports Statistics:**
Bar graphs comparing player performance, line graphs showing improvement over season

**Weather Forecasting:**
Line graphs for temperature changes, bar graphs for rainfall amounts

**Business:**
Pie charts showing budget allocation, line graphs tracking sales over time

**Science:**
Histograms for experimental results, line graphs for plant growth studies

**Social Studies:**
Bar graphs comparing populations, pie charts showing demographic breakdowns

## Why Statistical Thinking Matters

- **Making decisions:** Data helps us make informed choices
- **Identifying trends:** See patterns in information
- **Solving problems:** Use data to find solutions
- **Communicating clearly:** Visual displays make complex data understandable
- **Critical thinking:** Evaluate claims and arguments based on evidence

Statistics and data display are essential skills for the 21st century. Whether in science, business, sports, or everyday life, the ability to collect, organize, and present data clearly is incredibly valuable!`
    }
  });
  console.log('✅ Updated: statistical-questions-and-data-display');

  console.log('\n✨ Successfully updated 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
