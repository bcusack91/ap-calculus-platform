/**
 * Content patches for Grade 6 topics:
 * - grade6-expressions-equations (7 parts)
 * - grade6-integers (7 parts)
 * - grade6-ratios-proportions (7 parts)
 */
module.exports = {

'grade6-expressions-equations': [
  // Part 1: Writing Expressions
  {
    introContent: `
# ✏️ Writing Expressions

**Part 1 of 7 — Writing Expressions**

An **algebraic expression** uses variables, numbers, and operations.

| Phrase | Expression |
|--------|-----------|
| 5 more than x | $x + 5$ |
| 3 times a number | $3n$ |
| a number divided by 4 | $\\frac{n}{4}$ |
| 7 less than y | $y - 7$ |
    `,
    workedContent: `
## Worked Example

**"Twice a number increased by 3"**

"Twice a number" → $2n$
"increased by 3" → $+ 3$
Expression: $2n + 3$ ✅
    `,
    practiceContent: `
## Practice

| # | Phrase | Expression |
|---|-------|-----------|
| 1 | 4 more than a number | $n + 4$ |
| 2 | A number divided by 3 | $n/3$ |
| 3 | 5 times a number minus 2 | $5n - 2$ |
    `,
    mcq1: { questions: [{ question: '"8 less than a number n" is written as:', options: ['$n - 8$','$8 - n$','$8n$','$n + 8$'], correctAnswer: 0, explanation: '"Less than" means subtract from the number: n − 8.' }] },
    mcq2: { questions: [{ question: 'In the expression $3x + 7$, the coefficient of x is:', options: ['3','7','x','10'], correctAnswer: 0, explanation: 'The coefficient is the number multiplied by the variable: 3.' }] },
    input: { boxes: 3, correctAnswers: ['2','7','3'], content: `
**Translate Phrases** 🧮

1) "The sum of a number and 2": $n + $ ?

2) "7 times a number": coefficient of n?

3) "3 less than a number": $n - $ ?
    `, hint1: '"Sum" means add.', hint2: '"7 times" means multiply by 7.', hint3: '"Less than" means subtract.', explanation: '1) n + 2. 2) Coefficient = 7. 3) n − 3.' },
    dropdown: { dropdowns: [{ label: '"The product of 6 and x" means', options: ['6x','6 + x','x − 6','x/6'] }, { label: 'A coefficient is', options: ['The number multiplied by a variable','The variable itself','A constant term','An exponent'] }], correctAnswers: ['6x','The number multiplied by a variable'], hint1: '"Product" means multiply.', hint2: 'It is the number in front.', explanation: 'Product = multiply: 6x. Coefficient = number × variable.' }
  },
  // Part 2: Evaluating Expressions
  {
    introContent: `
# ✏️ Evaluating Expressions

**Part 2 of 7 — Evaluating Expressions**

To **evaluate**, substitute the given value for the variable, then calculate.

Example: Evaluate $3x + 2$ when $x = 4$:
$3(4) + 2 = 12 + 2 = 14$
    `,
    workedContent: `
## Worked Example

**Evaluate $2a^2 - 3$ when $a = 5$.**

$2(5)^2 - 3 = 2(25) - 3 = 50 - 3 = 47$ ✅
    `,
    practiceContent: `
## Practice

| # | Expression | Value | Result |
|---|-----------|-------|--------|
| 1 | $4x + 1$ | $x = 3$ | 13 |
| 2 | $x^2 - 4$ | $x = 6$ | 32 |
| 3 | $\\frac{n}{2} + 5$ | $n = 8$ | 9 |
    `,
    mcq1: { questions: [{ question: 'Evaluate $5n - 4$ when $n = 3$:', options: ['11','15','1','19'], correctAnswer: 0, explanation: '$5(3) - 4 = 15 - 4 = 11$.' }] },
    mcq2: { questions: [{ question: 'Evaluate $x^2 + x$ when $x = 4$:', options: ['20','16','8','12'], correctAnswer: 0, explanation: '$4^2 + 4 = 16 + 4 = 20$.' }] },
    input: { boxes: 3, correctAnswers: ['13','32','9'], content: `
**Evaluate** 🧮

1) $4x + 1$ when $x = 3$

2) $x^2 - 4$ when $x = 6$

3) $\\frac{n}{2} + 5$ when $n = 8$
    `, hint1: '4(3) + 1.', hint2: '6² − 4.', hint3: '8/2 + 5.', explanation: '1) 12+1=13. 2) 36−4=32. 3) 4+5=9.' },
    dropdown: { dropdowns: [{ label: 'To evaluate an expression, you', options: ['Substitute the value and calculate','Solve for the variable','Factor the expression','Graph it'] }, { label: '$3x + 2$ when $x = 0$ equals', options: ['2','3','0','5'] }], correctAnswers: ['Substitute the value and calculate','2'], hint1: 'Replace the variable with its value.', hint2: '3(0) + 2 = ?', explanation: 'Substitute and compute. 3(0)+2 = 2.' }
  },
  // Part 3: Properties of Operations
  {
    introContent: `
# ✏️ Properties of Operations

**Part 3 of 7 — Properties of Operations**

| Property | Example |
|----------|---------|
| Commutative (add) | $a + b = b + a$ |
| Commutative (mult) | $ab = ba$ |
| Associative (add) | $(a+b)+c = a+(b+c)$ |
| Distributive | $a(b+c) = ab + ac$ |
| Identity (add) | $a + 0 = a$ |
| Identity (mult) | $a \\times 1 = a$ |
    `,
    workedContent: `
## Worked Example

**Use the distributive property: $4(x + 3)$**

$4(x + 3) = 4x + 12$ ✅
    `,
    practiceContent: `
## Practice

| # | Expression | Apply |
|---|-----------|-------|
| 1 | $3(x + 5)$ | Distributive |
| 2 | $7 + 0$ | Identity |
| 3 | $2 \\times (5 \\times 3)$ | Associative |
    `,
    mcq1: { questions: [{ question: 'Which property: $3 + 7 = 7 + 3$?', options: ['Commutative','Associative','Distributive','Identity'], correctAnswer: 0, explanation: 'Order changed → commutative.' }] },
    mcq2: { questions: [{ question: '$5(2x + 3) = ?$', options: ['$10x + 15$','$10x + 3$','$7x + 8$','$5x + 15$'], correctAnswer: 0, explanation: 'Distribute: 5(2x) + 5(3) = 10x + 15.' }] },
    input: { boxes: 3, correctAnswers: ['15','12','4'], content: `
**Properties** 🧮

1) $3(x + 5)$: constant term after distributing?

2) $4(x + 3)$: constant term after distributing?

3) $2(2x + 1) = ?x + 2$: coefficient of x?
    `, hint1: '3 × 5 = ?', hint2: '4 × 3 = ?', hint3: '2 × 2x = ?x.', explanation: '1) 3×5=15. 2) 4×3=12. 3) 2(2x)=4x, coefficient=4.' },
    dropdown: { dropdowns: [{ label: '$a(b + c) = ab + ac$ is the', options: ['Distributive property','Commutative property','Associative property','Identity property'] }, { label: 'Any number times 1 equals', options: ['Itself','0','1','2'] }], correctAnswers: ['Distributive property','Itself'], hint1: 'Distributing over addition.', hint2: '1 is the multiplicative identity.', explanation: 'Distributive: a(b+c)=ab+ac. Identity: a×1=a.' }
  },
  // Part 4: Solving One-Step Equations
  {
    introContent: `
# ✏️ Solving One-Step Equations

**Part 4 of 7 — Solving One-Step Equations**

Use **inverse operations** to isolate the variable:
- Addition ↔ Subtraction
- Multiplication ↔ Division

$x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$
$3x = 18 \\Rightarrow x = 18 ÷ 3 = 6$
    `,
    workedContent: `
## Worked Example

**Solve $\\frac{x}{4} = 9$.**

Multiply both sides by 4: $x = 36$ ✅ Check: $36/4 = 9$ ✓
    `,
    practiceContent: `
## Practice

| # | Equation | Inverse |
|---|---------|---------|
| 1 | $x + 7 = 15$ | Subtract 7 |
| 2 | $5x = 45$ | Divide by 5 |
| 3 | $x - 3 = 10$ | Add 3 |
    `,
    mcq1: { questions: [{ question: 'Solve $x + 9 = 14$:', options: ['x = 5','x = 23','x = 9','x = 14'], correctAnswer: 0, explanation: '$x = 14 - 9 = 5$.' }] },
    mcq2: { questions: [{ question: 'Solve $7x = 49$:', options: ['x = 7','x = 42','x = 56','x = 343'], correctAnswer: 0, explanation: '$x = 49 ÷ 7 = 7$.' }] },
    input: { boxes: 3, correctAnswers: ['8','9','13'], content: `
**Solve** 🧮

1) $x + 7 = 15$. $x = ?$

2) $5x = 45$. $x = ?$

3) $x - 3 = 10$. $x = ?$
    `, hint1: 'Subtract 7 from both sides.', hint2: 'Divide both sides by 5.', hint3: 'Add 3 to both sides.', explanation: '1) 15−7=8. 2) 45÷5=9. 3) 10+3=13.' },
    dropdown: { dropdowns: [{ label: 'The inverse of addition is', options: ['Subtraction','Multiplication','Division','Addition'] }, { label: 'Solve $\\\\frac{x}{3} = 6$: $x =$', options: ['18','2','9','3'] }], correctAnswers: ['Subtraction','18'], hint1: 'Undo addition.', hint2: 'Multiply both sides by 3.', explanation: 'Inverse of + is −. x = 6 × 3 = 18.' }
  },
  // Part 5: Inequalities Introduction
  {
    introContent: `
# ✏️ Inequalities Introduction

**Part 5 of 7 — Inequalities Introduction**

An **inequality** compares two expressions:
- $x > 5$: x is greater than 5
- $x < 3$: x is less than 3
- $x \\geq 7$: x is greater than or equal to 7
- $x \\leq 2$: x is less than or equal to 2

Graph on a number line: **open circle** (strict) or **closed circle** (includes endpoint).
    `,
    workedContent: `
## Worked Example

**Solve $x + 4 > 10$.**

Subtract 4: $x > 6$

Graph: Open circle at 6, arrow to the right. ✅
    `,
    practiceContent: `
## Practice

| # | Inequality | Solution |
|---|-----------|----------|
| 1 | $x - 3 > 5$ | $x > 8$ |
| 2 | $2x \\leq 14$ | $x \\leq 7$ |
| 3 | $x + 1 < 6$ | $x < 5$ |
    `,
    mcq1: { questions: [{ question: 'Solve $x - 3 > 5$:', options: ['$x > 8$','$x > 2$','$x < 8$','$x > 5$'], correctAnswer: 0, explanation: 'Add 3: $x > 8$.' }] },
    mcq2: { questions: [{ question: 'What kind of circle for $x \\\\geq 4$?', options: ['Closed (filled)','Open (empty)','No circle','Square'], correctAnswer: 0, explanation: '$\\\\geq$ includes the endpoint → closed circle.' }] },
    input: { boxes: 3, correctAnswers: ['8','7','5'], content: `
**Inequalities** 🧮

1) $x - 3 > 5$: $x > $ ?

2) $2x \\leq 14$: $x \\leq $ ?

3) $x + 1 < 6$: $x < $ ?
    `, hint1: 'Add 3 to both sides.', hint2: 'Divide both sides by 2.', hint3: 'Subtract 1 from both sides.', explanation: '1) 5+3=8. 2) 14÷2=7. 3) 6−1=5.' },
    dropdown: { dropdowns: [{ label: 'An open circle on a number line means', options: ['The endpoint is NOT included','The endpoint IS included','There is no solution','The answer is zero'] }, { label: '$x \\\\leq 3$ means x could be', options: ['3 or any number less than 3','Only numbers less than 3','Only 3','Numbers greater than 3'] }], correctAnswers: ['The endpoint is NOT included','3 or any number less than 3'], hint1: 'Open = strict inequality (< or >).', hint2: '$\\leq$ means less than OR equal.', explanation: 'Open circle = not included. $\\leq$ includes the value.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply expressions and equations to real-world scenarios:
1. Define the variable
2. Write the equation
3. Solve
4. Check the answer
    `,
    workedContent: `
## Worked Example

**A phone plan costs \\$15/month plus \\$0.10/text. Last month: \\$21. How many texts?**

$15 + 0.10t = 21$
$0.10t = 6$
$t = 60$ texts ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Equation |
|---|---------|----------|
| 1 | Age in 5 years is 17 | $x + 5 = 17$ |
| 2 | 3 bags of $x$ apples = 24 | $3x = 24$ |
| 3 | Temperature drops 8° to 15° | $t - 8 = 15$ |
    `,
    mcq1: { questions: [{ question: '"I have $x$ dollars and earn \\$12 more, now I have \\$30." Equation?', options: ['$x + 12 = 30$','$x - 12 = 30$','$12x = 30$','$x/12 = 30$'], correctAnswer: 0, explanation: 'Start with x, add 12, equals 30.' }] },
    mcq2: { questions: [{ question: 'Solve $x + 5 = 17$:', options: ['12','22','5','85'], correctAnswer: 0, explanation: '$x = 17 - 5 = 12$.' }] },
    input: { boxes: 3, correctAnswers: ['12','8','23'], content: `
**Word Problems** 🧮

1) Age in 5 years is 17. Current age?

2) 3 bags of apples = 24. Apples per bag?

3) Temperature drops 8° to 15°. Starting temp?
    `, hint1: 'x + 5 = 17.', hint2: '3x = 24.', hint3: 't − 8 = 15.', explanation: '1) 17−5=12. 2) 24÷3=8. 3) 15+8=23.' },
    dropdown: { dropdowns: [{ label: 'First step in solving a word problem is', options: ['Define the variable','Guess the answer','Add all numbers','Draw a graph'] }, { label: 'If 4 packs cost $20, one pack costs', options: ['$5','$16','$24','$80'] }], correctAnswers: ['Define the variable','$5'], hint1: 'What are you solving for?', hint2: '20 ÷ 4 = ?', explanation: 'Define variable first. $20 ÷ 4 = $5.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Write expressions from verbal phrases
- Evaluate by substituting
- Use properties (distributive, commutative, etc.)
- Solve one-step equations with inverse operations
- Inequalities: <, >, ≤, ≥
    `,
    workedContent: `
## Worked Example

$3(x + 4) = 21$. Distribute: $3x + 12 = 21$. Subtract 12: $3x = 9$. Divide: $x = 3$ ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Evaluate | $2x + 5$ when $x = 4$ |
| 2 | Solve | $x - 6 = 11$ |
| 3 | Distribute | $5(x + 2)$ |
    `,
    mcq1: { questions: [{ question: '$2x + 5$ when $x = 4$:', options: ['13','9','14','11'], correctAnswer: 0, explanation: '$2(4)+5 = 13$.' }] },
    mcq2: { questions: [{ question: 'Solve $x - 6 = 11$:', options: ['17','5','-5','66'], correctAnswer: 0, explanation: '$x = 11 + 6 = 17$.' }] },
    input: { boxes: 3, correctAnswers: ['13','17','10'], content: `
**Review** 🧮

1) $2x + 5$ when $x = 4$?

2) $x - 6 = 11$. $x = ?$

3) $5(x + 2) = ?x + ?$. The constant term?
    `, hint1: '2(4) + 5.', hint2: 'Add 6.', hint3: '5(2) = ?', explanation: '1) 8+5=13. 2) 11+6=17. 3) 5(2)=10.' },
    dropdown: { dropdowns: [{ label: 'Inverse of multiplication is', options: ['Division','Addition','Subtraction','Exponentiation'] }, { label: '$7(x + 1) = 7x + ?$', options: ['7','1','8','x'] }], correctAnswers: ['Division','7'], hint1: 'Undo multiplication.', hint2: 'Distribute 7 to both terms.', explanation: 'Inverse of × is ÷. 7(1)=7.' }
  }
],

'grade6-integers': [
  // Part 1: Positive & Negative Numbers
  {
    introContent: `
# ➕➖ Positive & Negative Numbers

**Part 1 of 7 — Positive & Negative Numbers**

**Integers** = {..., −3, −2, −1, 0, 1, 2, 3, ...}

Real-world examples:
- Temperature: −5°F (below zero)
- Money: −\\$20 (debt)
- Elevation: −100 ft (below sea level)
    `,
    workedContent: `
## Worked Example

**A temperature drops from 8°F to −3°F. How many degrees did it drop?**

From 8 to 0 = 8 degrees. From 0 to −3 = 3 degrees.
Total drop: $8 + 3 = 11$ degrees ✅
    `,
    practiceContent: `
## Practice

| # | Item | Integer |
|---|------|---------|
| 1 | 15° below zero | −15 |
| 2 | Gain of \\$50 | +50 |
| 3 | 200 ft below sea level | −200 |
    `,
    mcq1: { questions: [{ question: 'Which integer represents "a loss of 7 points"?', options: ['−7','7','+7','0'], correctAnswer: 0, explanation: 'A loss is negative: −7.' }] },
    mcq2: { questions: [{ question: 'Which is colder: −5°F or −12°F?', options: ['−12°F','−5°F','They are equal','0°F'], correctAnswer: 0, explanation: '−12 is farther below zero → colder.' }] },
    input: { boxes: 3, correctAnswers: ['-10','25','-50'], content: `
**Write Integers** 🧮

1) 10° below zero = ?

2) Gain of 25 yards = ?

3) 50 feet below sea level = ?
    `, hint1: 'Below zero → negative.', hint2: 'Gain → positive.', hint3: 'Below sea level → negative.', explanation: '1) −10. 2) +25. 3) −50.' },
    dropdown: { dropdowns: [{ label: 'Integers include', options: ['Positive numbers, negative numbers, and zero','Only positive numbers','Only fractions','Only whole numbers'] }, { label: 'A debt of $30 is represented as', options: ['−30','+30','30','0'] }], correctAnswers: ['Positive numbers, negative numbers, and zero','−30'], hint1: 'Integers go in both directions.', hint2: 'Debt is negative.', explanation: 'Integers: …−2,−1,0,1,2… Debt → −30.' }
  },
  // Part 2: Number Line & Absolute Value
  {
    introContent: `
# ➕➖ Number Line & Absolute Value

**Part 2 of 7 — Number Line & Absolute Value**

**Absolute value** = distance from zero (always positive or zero).

$|5| = 5$, $|-5| = 5$, $|0| = 0$

On the number line: numbers increase left to right.
    `,
    workedContent: `
## Worked Example

**Compare: $|-8|$ and $|6|$.**

$|-8| = 8$ and $|6| = 6$. So $|-8| > |6|$. ✅
    `,
    practiceContent: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $|-12|$ | 12 |
| 2 | $|0|$ | 0 |
| 3 | $|7| + |-3|$ | 10 |
    `,
    mcq1: { questions: [{ question: '$|-15| = ?$', options: ['15','−15','0','−1'], correctAnswer: 0, explanation: 'Distance from 0 → always positive: 15.' }] },
    mcq2: { questions: [{ question: 'Which is greater: $-4$ or $-9$?', options: ['$-4$','$-9$','They are equal','Cannot compare'], correctAnswer: 0, explanation: '−4 is closer to 0 → greater.' }] },
    input: { boxes: 3, correctAnswers: ['12','0','10'], content: `
**Absolute Value** 🧮

1) $|-12| = ?$

2) $|0| = ?$

3) $|7| + |-3| = ?$
    `, hint1: 'Distance from 0.', hint2: 'Zero is 0 away from itself.', hint3: '7 + 3.', explanation: '1) 12. 2) 0. 3) 7+3=10.' },
    dropdown: { dropdowns: [{ label: 'Absolute value is always', options: ['Non-negative','Negative','Zero','Positive'], correctAnswer: 0 }, { label: 'On a number line, which is farther from 0: -7 or 5?', options: ['-7','5','Same distance','Cannot tell'] }], correctAnswers: ['Non-negative','-7'], hint1: 'Distance cannot be negative.', hint2: '|-7|=7 vs |5|=5.', explanation: 'Absolute value ≥ 0. |-7|=7 > |5|=5.' }
  },
  // Part 3: Adding Integers
  {
    introContent: `
# ➕➖ Adding Integers

**Part 3 of 7 — Adding Integers**

### Same Signs → Add, Keep the Sign
$5 + 3 = 8$, $(-5) + (-3) = -8$

### Different Signs → Subtract, Keep Sign of Larger Absolute Value
$7 + (-4) = 3$, $(-7) + 4 = -3$
    `,
    workedContent: `
## Worked Example

$(-8) + 5 = ?$

Different signs: $8 - 5 = 3$. Larger absolute value is 8 (negative).

Answer: $-3$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Rule |
|---|---------|------|
| 1 | $6 + (-4)$ | Different signs |
| 2 | $(-3) + (-7)$ | Same signs (negative) |
| 3 | $(-5) + 9$ | Different signs |
    `,
    mcq1: { questions: [{ question: '$(-6) + (-3) = ?$', options: ['$-9$','$-3$','$9$','$3$'], correctAnswer: 0, explanation: 'Same signs: 6+3=9, both negative → −9.' }] },
    mcq2: { questions: [{ question: '$(-12) + 5 = ?$', options: ['$-7$','$-17$','$7$','$17$'], correctAnswer: 0, explanation: 'Different signs: 12−5=7, negative wins → −7.' }] },
    input: { boxes: 3, correctAnswers: ['2','-10','4'], content: `
**Add Integers** 🧮

1) $6 + (-4) = ?$

2) $(-3) + (-7) = ?$

3) $(-5) + 9 = ?$
    `, hint1: 'Different signs: subtract, keep sign of larger.', hint2: 'Same signs: add, keep sign.', hint3: 'Different signs: 9−5=4, positive wins.', explanation: '1) 6−4=2. 2) −(3+7)=−10. 3) 9−5=4.' },
    dropdown: { dropdowns: [{ label: 'Adding two negatives gives a', options: ['Negative result','Positive result','Zero','It depends'] }, { label: '$(-4) + 4 =$', options: ['0','8','−8','4'] }], correctAnswers: ['Negative result','0'], hint1: 'Same sign → keep that sign.', hint2: 'A number + its opposite = ?', explanation: 'Two negatives sum to negative. Opposites sum to 0.' }
  },
  // Part 4: Subtracting Integers
  {
    introContent: `
# ➕➖ Subtracting Integers

**Part 4 of 7 — Subtracting Integers**

### Rule: Add the Opposite
$a - b = a + (-b)$

Examples:
- $5 - 8 = 5 + (-8) = -3$
- $(-3) - (-7) = (-3) + 7 = 4$
    `,
    workedContent: `
## Worked Example

$(-4) - (-9) = (-4) + 9 = 5$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Rewrite |
|---|---------|---------|
| 1 | $7 - 12$ | $7 + (-12)$ |
| 2 | $(-5) - 3$ | $(-5) + (-3)$ |
| 3 | $(-6) - (-4)$ | $(-6) + 4$ |
    `,
    mcq1: { questions: [{ question: '$3 - 10 = ?$', options: ['$-7$','$7$','$13$','$-13$'], correctAnswer: 0, explanation: '$3 + (-10) = -7$.' }] },
    mcq2: { questions: [{ question: '$(-8) - (-3) = ?$', options: ['$-5$','$-11$','$5$','$11$'], correctAnswer: 0, explanation: '$(-8) + 3 = -5$.' }] },
    input: { boxes: 3, correctAnswers: ['-5','-8','-2'], content: `
**Subtract Integers** 🧮

1) $7 - 12 = ?$

2) $(-5) - 3 = ?$

3) $(-6) - (-4) = ?$
    `, hint1: 'Rewrite as 7 + (−12).', hint2: 'Rewrite as (−5) + (−3).', hint3: 'Rewrite as (−6) + 4.', explanation: '1) 7+(−12)=−5. 2) (−5)+(−3)=−8. 3) (−6)+4=−2.' },
    dropdown: { dropdowns: [{ label: 'Subtracting a negative is the same as', options: ['Adding','Subtracting more','Multiplying','Dividing'] }, { label: '$0 - (-5) =$', options: ['5','−5','0','−10'] }], correctAnswers: ['Adding','5'], hint1: 'Two negatives become positive.', hint2: '0 + 5 = ?', explanation: 'Subtracting negative = adding. 0−(−5)=5.' }
  },
  // Part 5: Multiplying & Dividing Integers
  {
    introContent: `
# ➕➖ Multiplying & Dividing Integers

**Part 5 of 7 — Multiplying & Dividing Integers**

### Sign Rules
| Signs | Result |
|-------|--------|
| (+)(+) | + |
| (−)(−) | + |
| (+)(−) | − |
| (−)(+) | − |

Same signs → positive. Different signs → negative.
    `,
    workedContent: `
## Worked Example

$(-4) \\times (-6) = +24$ (same signs) ✅

$(-15) \\div 3 = -5$ (different signs) ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Sign Rule |
|---|---------|-----------|
| 1 | $(-3)(7)$ | Different signs |
| 2 | $(-8)(-5)$ | Same signs |
| 3 | $(-24) \\div (-6)$ | Same signs |
    `,
    mcq1: { questions: [{ question: '$(-5)(8) = ?$', options: ['$-40$','$40$','$-13$','$13$'], correctAnswer: 0, explanation: 'Different signs → negative: −40.' }] },
    mcq2: { questions: [{ question: '$(-36) \\\\div (-4) = ?$', options: ['$9$','$-9$','$-32$','$32$'], correctAnswer: 0, explanation: 'Same signs → positive: 9.' }] },
    input: { boxes: 3, correctAnswers: ['-21','40','4'], content: `
**Multiply & Divide** 🧮

1) $(-3)(7) = ?$

2) $(-8)(-5) = ?$

3) $(-24) \\div (-6) = ?$
    `, hint1: 'Different signs → negative.', hint2: 'Same signs → positive.', hint3: 'Same signs → positive.', explanation: '1) −21. 2) +40. 3) +4.' },
    dropdown: { dropdowns: [{ label: 'Two negative numbers multiplied give a', options: ['Positive result','Negative result','Zero','Cannot determine'] }, { label: '$(-1) \\\\times (-1) \\\\times (-1) =$', options: ['−1','1','0','−3'] }], correctAnswers: ['Positive result','−1'], hint1: 'Same signs → positive.', hint2: '(−1)(−1)=1, then 1(−1)=−1.', explanation: 'Same signs → positive. Three negatives: + × − = −1.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply integer operations to real scenarios:
- Temperature changes
- Money (deposits and withdrawals)
- Elevation changes
    `,
    workedContent: `
## Worked Example

**Temperature: −8°F, rises 15°. New temperature?**

$-8 + 15 = 7$°F ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Expression |
|---|---------|-----------|
| 1 | Bank: \\$50, withdraw \\$75 | $50 - 75$ |
| 2 | Temp: 3°, drops 10° | $3 - 10$ |
| 3 | Elevator: floor −2, up 5 floors | $-2 + 5$ |
    `,
    mcq1: { questions: [{ question: 'Bank balance $50, withdraw $75. Balance?', options: ['−$25','$125','$25','−$125'], correctAnswer: 0, explanation: '$50 − $75 = −$25 (overdrawn).' }] },
    mcq2: { questions: [{ question: 'Temperature: 3°F, drops 10°. New temp?', options: ['−7°F','7°F','13°F','−13°F'], correctAnswer: 0, explanation: '$3 − 10 = −7$°F.' }] },
    input: { boxes: 3, correctAnswers: ['-25','-7','3'], content: `
**Word Problems** 🧮

1) \\$50 − \\$75 = ? (use negative for overdrawn)

2) 3°F drops 10°. New temperature?

3) Elevator on floor −2, goes up 5. New floor?
    `, hint1: '50 − 75.', hint2: '3 − 10.', hint3: '−2 + 5.', explanation: '1) −25. 2) −7. 3) 3.' },
    dropdown: { dropdowns: [{ label: 'A withdrawal from a bank account is', options: ['Subtraction (negative)','Addition (positive)','Multiplication','Division'] }, { label: 'Going from −3 to 4 requires moving', options: ['7 units','1 unit','−7 units','−1 unit'] }], correctAnswers: ['Subtraction (negative)','7 units'], hint1: 'Taking money out.', hint2: 'From −3 to 0 is 3, then 0 to 4 is 4.', explanation: 'Withdrawal → subtraction. −3 to 4 = 7 units.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Integers: positive, negative, zero
- Absolute value: distance from zero
- Add same signs: add, keep sign
- Add different signs: subtract, keep larger sign
- Subtract: add the opposite
- Multiply/divide: same signs = +, different = −
    `,
    workedContent: `
## Worked Example

$(-3)(4) + (-2) = -12 + (-2) = -14$ ✅
    `,
    practiceContent: `
## Practice

| # | Expression | Value |
|---|-----------|-------|
| 1 | $(-5) + 8$ | 3 |
| 2 | $6 - (-4)$ | 10 |
| 3 | $(-3)(-7)$ | 21 |
    `,
    mcq1: { questions: [{ question: '$(-5) + 8 = ?$', options: ['3','−13','13','−3'], correctAnswer: 0, explanation: 'Different signs: 8−5=3, positive wins.' }] },
    mcq2: { questions: [{ question: '$6 - (-4) = ?$', options: ['10','2','-10','-2'], correctAnswer: 0, explanation: '6 + 4 = 10.' }] },
    input: { boxes: 3, correctAnswers: ['3','10','21'], content: `
**Review** 🧮

1) $(-5) + 8 = ?$

2) $6 - (-4) = ?$

3) $(-3)(-7) = ?$
    `, hint1: 'Different signs: subtract.', hint2: 'Subtracting negative = adding.', hint3: 'Same signs (both negative) = positive.', explanation: '1) 8−5=3. 2) 6+4=10. 3) 3×7=21, positive.' },
    dropdown: { dropdowns: [{ label: '$|-9|$ equals', options: ['9','−9','0','81'] }, { label: 'Same sign multiplication gives', options: ['Positive','Negative','Zero','Undefined'] }], correctAnswers: ['9','Positive'], hint1: 'Absolute value = distance from 0.', hint2: 'Both + or both − → ?', explanation: '|-9|=9. Same signs → positive product.' }
  }
],

'grade6-ratios-proportions': [
  // Part 1: Understanding Ratios
  {
    introContent: `
# ⚖️ Understanding Ratios

**Part 1 of 7 — Understanding Ratios**

A **ratio** compares two quantities.

Three ways to write a ratio:
- $3$ to $5$
- $3 : 5$
- $\\frac{3}{5}$

Order matters! "3 cats to 5 dogs" ≠ "5 cats to 3 dogs"
    `,
    workedContent: `
## Worked Example

**A class has 12 boys and 18 girls. Ratio of boys to girls?**

$12 : 18 = 2 : 3$ (simplify by dividing both by 6) ✅
    `,
    practiceContent: `
## Practice

| # | Situation | Ratio |
|---|----------|-------|
| 1 | 8 red, 12 blue | $2:3$ |
| 2 | 15 wins, 5 losses | $3:1$ |
| 3 | 4 adults, 20 children | $1:5$ |
    `,
    mcq1: { questions: [{ question: 'Ratio of 8 red to 12 blue marbles, simplified:', options: ['2:3','8:12','3:2','4:6'], correctAnswer: 0, explanation: 'GCF=4. 8÷4=2, 12÷4=3.' }] },
    mcq2: { questions: [{ question: 'Ratio 15:5 simplifies to:', options: ['3:1','5:1','1:3','15:5'], correctAnswer: 0, explanation: 'Divide both by 5: 3:1.' }] },
    input: { boxes: 3, correctAnswers: ['2','3','1'], content: `
**Write Ratios** 🧮

1) 8 cats to 12 dogs simplifies to ?: 3. First number?

2) 15 wins to 5 losses simplifies to ?: 1. First number?

3) 4 adults to 20 children simplifies to ?: 5. First number?
    `, hint1: 'GCF of 8 and 12 is 4.', hint2: 'Divide both by 5.', hint3: 'Divide both by 4.', explanation: '1) 8÷4=2. 2) 15÷5=3. 3) 4÷4=1.' },
    dropdown: { dropdowns: [{ label: 'A ratio compares', options: ['Two quantities','One quantity to itself','Three quantities','Units of measurement'] }, { label: 'The ratio 10:15 simplified is', options: ['2:3','3:2','10:15','5:5'] }], correctAnswers: ['Two quantities','2:3'], hint1: 'Ratios relate two things.', hint2: 'GCF of 10 and 15 is 5.', explanation: 'Ratios compare two quantities. 10:15 = 2:3.' }
  },
  // Part 2: Equivalent Ratios
  {
    introContent: `
# ⚖️ Equivalent Ratios

**Part 2 of 7 — Equivalent Ratios**

Equivalent ratios have the same simplest form.

$2:3 = 4:6 = 6:9 = 8:12$

Multiply or divide both parts by the same number.
    `,
    workedContent: `
## Worked Example

**Find an equivalent ratio to 3:5 with first term 12.**

$3 \\times 4 = 12$, so $5 \\times 4 = 20$.

$3:5 = 12:20$ ✅
    `,
    practiceContent: `
## Practice

| # | Ratio | Equivalent |
|---|-------|-----------|
| 1 | 2:7 = 6:? | 21 |
| 2 | 5:3 = ?:12 | 20 |
| 3 | 4:9 = 8:? | 18 |
    `,
    mcq1: { questions: [{ question: 'Which is equivalent to 3:4?', options: ['9:12','4:3','7:8','3:5'], correctAnswer: 0, explanation: '3×3=9, 4×3=12. So 3:4 = 9:12.' }] },
    mcq2: { questions: [{ question: '$5:8 = 15:?$', options: ['24','13','40','20'], correctAnswer: 0, explanation: '5×3=15, 8×3=24.' }] },
    input: { boxes: 3, correctAnswers: ['21','20','18'], content: `
**Find Missing Values** 🧮

1) $2:7 = 6:?$

2) $5:3 = ?:12$

3) $4:9 = 8:?$
    `, hint1: '2 × 3 = 6, so 7 × 3 = ?', hint2: '3 × 4 = 12, so 5 × 4 = ?', hint3: '4 × 2 = 8, so 9 × 2 = ?', explanation: '1) 7×3=21. 2) 5×4=20. 3) 9×2=18.' },
    dropdown: { dropdowns: [{ label: 'To create an equivalent ratio, multiply both parts by', options: ['The same number','Different numbers','Zero','Only the larger part'] }, { label: '6:10 simplified is', options: ['3:5','2:5','6:10','1:2'] }], correctAnswers: ['The same number','3:5'], hint1: 'Keep the relationship the same.', hint2: 'GCF of 6 and 10 is 2.', explanation: 'Same multiplier for both. 6÷2=3, 10÷2=5.' }
  },
  // Part 3: Unit Rates
  {
    introContent: `
# ⚖️ Unit Rates

**Part 3 of 7 — Unit Rates**

A **unit rate** has a denominator of 1.

Example: 150 miles in 3 hours → $\\frac{150}{3} = 50$ miles per hour

Key word: **"per"** (per hour, per pound, per item)
    `,
    workedContent: `
## Worked Example

**\\$12 for 4 pounds. Unit rate?**

$\\frac{12}{4} = 3$ → **\\$3 per pound** ✅
    `,
    practiceContent: `
## Practice

| # | Scenario | Unit Rate |
|---|---------|-----------|
| 1 | 240 mi in 4 hr | 60 mph |
| 2 | \\$45 for 9 items | \\$5/item |
| 3 | 180 words in 3 min | 60 wpm |
    `,
    mcq1: { questions: [{ question: '240 miles in 4 hours. Speed?', options: ['60 mph','240 mph','4 mph','960 mph'], correctAnswer: 0, explanation: '240 ÷ 4 = 60 mph.' }] },
    mcq2: { questions: [{ question: 'Which is the better deal: $6 for 3 or $10 for 4?', options: ['$6 for 3 ($2 each)','$10 for 4 ($2.50 each)','They are equal','Cannot tell'], correctAnswer: 0, explanation: '$6/3 = $2 each vs $10/4 = $2.50 each.' }] },
    input: { boxes: 3, correctAnswers: ['60','5','60'], content: `
**Unit Rates** 🧮

1) 240 mi in 4 hours = ? mph

2) \\$45 for 9 items = \\$? per item

3) 180 words in 3 minutes = ? words per minute
    `, hint1: '240 ÷ 4.', hint2: '45 ÷ 9.', hint3: '180 ÷ 3.', explanation: '1) 60. 2) 5. 3) 60.' },
    dropdown: { dropdowns: [{ label: 'A unit rate always has what denominator?', options: ['1','2','10','Any number'] }, { label: 'To find a unit rate, you', options: ['Divide','Multiply','Add','Subtract'] }], correctAnswers: ['1','Divide'], hint1: '"Unit" means one.', hint2: 'Rate = total ÷ number of units.', explanation: 'Unit rate → denominator 1. Calculate by dividing.' }
  },
  // Part 4: Solving Proportions
  {
    introContent: `
# ⚖️ Solving Proportions

**Part 4 of 7 — Solving Proportions**

A **proportion** is two equal ratios: $\\frac{a}{b} = \\frac{c}{d}$

To solve, **cross-multiply**: $ad = bc$, then solve for the unknown.
    `,
    workedContent: `
## Worked Example

$\\frac{3}{5} = \\frac{x}{20}$

Cross-multiply: $3 \\times 20 = 5 \\times x$ → $60 = 5x$ → $x = 12$ ✅
    `,
    practiceContent: `
## Practice

| # | Proportion | Solution |
|---|-----------|----------|
| 1 | $\\frac{2}{3} = \\frac{x}{12}$ | $x = 8$ |
| 2 | $\\frac{x}{5} = \\frac{6}{10}$ | $x = 3$ |
| 3 | $\\frac{4}{7} = \\frac{12}{x}$ | $x = 21$ |
    `,
    mcq1: { questions: [{ question: 'Solve $\\\\frac{2}{3} = \\\\frac{x}{12}$:', options: ['$x = 8$','$x = 6$','$x = 4$','$x = 18$'], correctAnswer: 0, explanation: 'Cross: 2×12 = 3x → 24 = 3x → x = 8.' }] },
    mcq2: { questions: [{ question: 'Cross-multiplication: $\\\\frac{a}{b} = \\\\frac{c}{d}$ gives:', options: ['$ad = bc$','$ab = cd$','$a + d = b + c$','$ac = bd$'], correctAnswer: 0, explanation: '$\\\\frac{a}{b} = \\\\frac{c}{d}$ → $ad = bc$.' }] },
    input: { boxes: 3, correctAnswers: ['8','3','21'], content: `
**Solve Proportions** 🧮

1) $\\frac{2}{3} = \\frac{x}{12}$. $x = ?$

2) $\\frac{x}{5} = \\frac{6}{10}$. $x = ?$

3) $\\frac{4}{7} = \\frac{12}{x}$. $x = ?$
    `, hint1: 'Cross-multiply: 2 × 12 = 3x.', hint2: 'Cross-multiply: 10x = 30.', hint3: 'Cross-multiply: 4x = 84.', explanation: '1) 24÷3=8. 2) 30÷10=3. 3) 84÷4=21.' },
    dropdown: { dropdowns: [{ label: 'To solve a proportion, you can', options: ['Cross-multiply','Add the fractions','Subtract the fractions','Multiply numerators only'] }, { label: '$\\\\frac{5}{8} = \\\\frac{15}{x}$. $x =$', options: ['24','3','40','8'] }], correctAnswers: ['Cross-multiply','24'], hint1: 'Standard method for proportions.', hint2: '5x = 8(15) = 120. x = ?', explanation: 'Cross-multiply to solve. 5x=120 → x=24.' }
  },
  // Part 5: Percent Problems
  {
    introContent: `
# ⚖️ Percent Problems

**Part 5 of 7 — Percent Problems**

**Percent** means "per hundred." $25\\% = \\frac{25}{100} = 0.25$

### Three Types
1. Find the part: $20\\%$ of $50 = 0.20 \\times 50 = 10$
2. Find the percent: $\\frac{\\text{part}}{\\text{whole}} \\times 100$
3. Find the whole: $\\frac{\\text{part}}{\\text{percent}} \\times 100$
    `,
    workedContent: `
## Worked Example

**What is 30% of 80?**

$0.30 \\times 80 = 24$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | 25% of 60 | Find part |
| 2 | 12 is what % of 48? | Find percent |
| 3 | 15 is 30% of what? | Find whole |
    `,
    mcq1: { questions: [{ question: 'What is 15% of 200?', options: ['30','15','300','3'], correctAnswer: 0, explanation: '0.15 × 200 = 30.' }] },
    mcq2: { questions: [{ question: '12 out of 48 is what percent?', options: ['25%','12%','48%','4%'], correctAnswer: 0, explanation: '12/48 = 0.25 = 25%.' }] },
    input: { boxes: 3, correctAnswers: ['15','25','50'], content: `
**Percent Problems** 🧮

1) 25% of 60 = ?

2) 12 is what percent of 48? (number only)

3) 15 is 30% of what?
    `, hint1: '0.25 × 60.', hint2: '12 ÷ 48 × 100.', hint3: '15 ÷ 0.30.', explanation: '1) 15. 2) 25%. 3) 50.' },
    dropdown: { dropdowns: [{ label: '50% is the same as', options: ['One half','One quarter','One third','One fifth'] }, { label: 'To find a percent of a number, multiply by', options: ['The decimal form of the percent','The percent times the number twice','100','The whole number'] }], correctAnswers: ['One half','The decimal form of the percent'], hint1: '50/100 = ?', hint2: 'Convert % to decimal first.', explanation: '50% = 1/2. Multiply by the decimal form.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply ratios, proportions, and percents to real-world problems:
- Best deals & unit pricing
- Scale drawings
- Sales tax & discounts
    `,
    workedContent: `
## Worked Example

**A shirt is \\$40 with 20% off. Sale price?**

Discount: $0.20 \\times 40 = 8$
Sale price: $40 - 8 = 32$ → **\\$32** ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Concept |
|---|---------|---------|
| 1 | \\$60 shirt, 25% off | Discount |
| 2 | Recipe: 2 cups for 4 people → cups for 10? | Proportion |
| 3 | Map: 1 in = 50 mi, 3.5 in = ? mi | Scale |
    `,
    mcq1: { questions: [{ question: '$60 shirt, 25% off. Sale price?', options: ['$45','$15','$42','$35'], correctAnswer: 0, explanation: 'Discount: 0.25 × 60 = 15. Sale: 60 − 15 = 45.' }] },
    mcq2: { questions: [{ question: 'Map scale: 1 in = 50 mi. 3.5 in = ?', options: ['175 mi','50 mi','350 mi','100 mi'], correctAnswer: 0, explanation: '3.5 × 50 = 175 miles.' }] },
    input: { boxes: 3, correctAnswers: ['45','5','175'], content: `
**Real-World Problems** 🧮

1) \\$60 shirt, 25% off. Sale price?

2) Recipe: 2 cups for 4 people. How many cups for 10 people?

3) Map: 1 in = 50 mi. How far is 3.5 inches?
    `, hint1: 'Discount = 0.25 × 60. Then subtract from 60.', hint2: 'Proportion: 2/4 = x/10.', hint3: '3.5 × 50.', explanation: '1) 60−15=45. 2) 2×10÷4=5. 3) 175.' },
    dropdown: { dropdowns: [{ label: 'A 20% discount on $50 saves you', options: ['$10','$20','$40','$5'] }, { label: 'Unit rate helps you', options: ['Compare prices','Add totals','Multiply quantities','Find averages'] }], correctAnswers: ['$10','Compare prices'], hint1: '0.20 × 50 = ?', hint2: 'Price per unit lets you compare.', explanation: '0.20 × 50 = 10. Unit rate = comparison tool.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- **Ratio**: Simplify by GCF
- **Unit rate**: Divide to get denominator 1
- **Proportion**: Cross-multiply to solve
- **Percent**: Part = % × Whole
    `,
    workedContent: `
## Worked Example

**$\\frac{x}{8} = \\frac{9}{12}$. Solve.**

Cross: $12x = 72$ → $x = 6$ ✅
    `,
    practiceContent: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Simplify | 14:21 |
| 2 | Unit rate | \\$24 for 6 |
| 3 | Proportion | x/5 = 8/10 |
    `,
    mcq1: { questions: [{ question: '14:21 simplified:', options: ['2:3','7:10','14:21','1:2'], correctAnswer: 0, explanation: 'GCF=7: 14÷7=2, 21÷7=3.' }] },
    mcq2: { questions: [{ question: '\\$24 for 6 items. Unit rate?', options: ['$4 per item','$6 per item','$24 per item','$18 per item'], correctAnswer: 0, explanation: '24 ÷ 6 = $4.' }] },
    input: { boxes: 3, correctAnswers: ['2','4','4'], content: `
**Review** 🧮

1) 14:21 simplified = ?:3. First number?

2) \\$24 for 6 items = \\$? per item

3) $\\frac{x}{5} = \\frac{8}{10}$. $x = ?$
    `, hint1: 'GCF of 14 and 21.', hint2: '24 ÷ 6.', hint3: 'Cross-multiply: 10x = 40.', explanation: '1) 14÷7=2. 2) 24÷6=4. 3) 40÷10=4.' },
    dropdown: { dropdowns: [{ label: 'Cross-multiplication is used to solve', options: ['Proportions','Equations with one variable','Inequalities','Polynomials'] }, { label: '10% of 250 is', options: ['25','250','2.5','2500'] }], correctAnswers: ['Proportions','25'], hint1: 'Two equal ratios.', hint2: '0.10 × 250.', explanation: 'Cross-multiply for proportions. 0.10 × 250 = 25.' }
  }
]

};
