import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 11 (Final 4 topics)...');

  // Find the topics
  const variation = await prisma.topic.findFirst({
    where: { slug: 'variation-algebra1' }
  });

  const wordProblemsLinear = await prisma.topic.findFirst({
    where: { slug: 'word-problems-linear-algebra1' }
  });

  const slopeInterceptForm = await prisma.topic.findFirst({
    where: { slug: 'slope-intercept-form-algebra1' }
  });

  const inequalityWordProblems = await prisma.topic.findFirst({
    where: { slug: 'inequality-word-problems-algebra1' }
  });

  if (!variation || !wordProblemsLinear || !slopeInterceptForm || !inequalityWordProblems) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Direct and Inverse Variation
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: variation.id,
        question: 'If y varies directly with x, and y = 12 when x = 3, find y when x = 7.',
        solution: `Step 1: Write the direct variation equation:
y = kx (where k is the constant of variation)

Step 2: Find k using the given values:
12 = k(3)
k = 12/3
k = 4

Step 3: Write the specific equation:
y = 4x

Step 4: Find y when x = 7:
y = 4(7)
y = 28

Step 5: Verify with original:
When x = 3: y = 4(3) = 12 ✓

Answer: y = 28`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: variation.id,
        question: 'If y varies inversely with x, and y = 8 when x = 2, find y when x = 4.',
        solution: `Step 1: Write the inverse variation equation:
y = k/x (where k is the constant of variation)

Step 2: Find k using the given values:
8 = k/2
k = 8 × 2
k = 16

Step 3: Write the specific equation:
y = 16/x

Step 4: Find y when x = 4:
y = 16/4
y = 4

Step 5: Verify with original:
When x = 2: y = 16/2 = 8 ✓

Step 6: Note the inverse relationship:
When x doubled (2 to 4), y halved (8 to 4)

Answer: y = 4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: variation.id,
        question: 'The distance d traveled at constant speed varies directly with time t. If d = 120 miles when t = 2 hours, how far will you travel in 5 hours?',
        solution: `Step 1: Identify the type of variation:
Direct variation: d = kt

Step 2: Find the constant k (this represents speed):
120 = k(2)
k = 120/2
k = 60 miles per hour

Step 3: Write the equation:
d = 60t

Step 4: Find d when t = 5:
d = 60(5)
d = 300 miles

Step 5: Interpret:
The constant k = 60 is the speed in mph.
This makes sense: distance = speed × time

Answer: 300 miles`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: variation.id,
        question: 'The time t it takes to complete a job varies inversely with the number of workers n. If 4 workers can complete the job in 6 hours, how long will it take 8 workers?',
        solution: `Step 1: Identify inverse variation:
More workers → less time (inverse relationship)
t = k/n

Step 2: Find k using given information:
6 = k/4
k = 6 × 4
k = 24

Step 3: Interpret k:
k = 24 represents the total "worker-hours" needed
(4 workers × 6 hours = 24 worker-hours)

Step 4: Write the equation:
t = 24/n

Step 5: Find t when n = 8:
t = 24/8
t = 3 hours

Step 6: Verify the relationship:
4 workers × 6 hours = 24 worker-hours
8 workers × 3 hours = 24 worker-hours ✓

Answer: 3 hours`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: variation.id,
        question: 'The volume V of a gas varies directly with temperature T and inversely with pressure P. If V = 30 when T = 300 and P = 2, find V when T = 450 and P = 3.',
        solution: `Step 1: Write the joint variation equation:
V varies directly with T and inversely with P
V = kT/P

Step 2: Find k using given values:
30 = k(300)/2
30 = 150k
k = 30/150
k = 1/5 or 0.2

Step 3: Write the complete equation:
V = 0.2T/P  or  V = T/(5P)

Step 4: Find V when T = 450 and P = 3:
V = 0.2(450)/3
V = 90/3
V = 30

Step 5: Alternative method using T/5P:
V = 450/(5×3)
V = 450/15
V = 30

Step 6: Verify with original values:
V = 0.2(300)/2 = 60/2 = 30 ✓

Step 7: Analyze the change:
Temperature increased by factor of 1.5 (300 to 450)
Pressure increased by factor of 1.5 (2 to 3)
These changes cancelled out, so V stayed at 30

Answer: V = 30`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: variation.id,
        front: 'What is direct variation?',
        back: 'When two variables are related by y = kx, where k is a constant. As x increases, y increases proportionally.',
        hint: 'y = kx, they change together',
        isPremium: false
      },
      {
        topicId: variation.id,
        front: 'What is inverse variation?',
        back: 'When two variables are related by y = k/x, where k is a constant. As x increases, y decreases.',
        hint: 'y = k/x, opposite change',
        isPremium: false
      },
      {
        topicId: variation.id,
        front: 'What is the constant of variation k in direct variation?',
        back: 'The constant k is the ratio y/x. It represents the rate of change.',
        hint: 'k = y/x in direct variation',
        isPremium: false
      },
      {
        topicId: variation.id,
        front: 'What is the constant of variation k in inverse variation?',
        back: 'The constant k is the product xy. It remains constant as x and y change.',
        hint: 'k = xy in inverse variation',
        isPremium: false
      },
      {
        topicId: variation.id,
        front: 'Give a real-world example of direct variation.',
        back: 'Cost varies directly with quantity: if apples cost $2 each, then cost = 2 × quantity. Also: distance = speed × time.',
        hint: 'Things that increase together',
        isPremium: false
      },
      {
        topicId: variation.id,
        front: 'Give a real-world example of inverse variation.',
        back: 'Time to complete a job varies inversely with workers: more workers means less time. Also: speed varies inversely with time for fixed distance.',
        hint: 'One increases, the other decreases',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: variation-algebra1');

  // TOPIC 2: Word Problems with Linear Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: wordProblemsLinear.id,
        question: 'A number increased by 7 is 23. What is the number?',
        solution: `Step 1: Define the variable:
Let x = the unknown number

Step 2: Translate to an equation:
"A number increased by 7" → x + 7
"is 23" → = 23
Equation: x + 7 = 23

Step 3: Solve for x:
x + 7 = 23
x = 23 - 7
x = 16

Step 4: Check the answer:
16 + 7 = 23 ✓

Answer: The number is 16`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        question: 'Three times a number minus 4 equals 17. Find the number.',
        solution: `Step 1: Define the variable:
Let n = the unknown number

Step 2: Translate to an equation:
"Three times a number" → 3n
"minus 4" → -4
"equals 17" → = 17
Equation: 3n - 4 = 17

Step 3: Solve for n:
3n - 4 = 17
3n = 21    (add 4 to both sides)
n = 7      (divide both sides by 3)

Step 4: Check:
3(7) - 4 = 21 - 4 = 17 ✓

Answer: The number is 7`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        question: 'Sarah has twice as many books as Tom. Together they have 36 books. How many books does each person have?',
        solution: `Step 1: Define variables:
Let t = number of books Tom has
Then 2t = number of books Sarah has (twice as many)

Step 2: Set up the equation:
Tom's books + Sarah's books = 36
t + 2t = 36

Step 3: Solve:
3t = 36
t = 12

Step 4: Find each person's amount:
Tom: t = 12 books
Sarah: 2t = 2(12) = 24 books

Step 5: Check:
12 + 24 = 36 ✓
Sarah has twice as many: 24 = 2(12) ✓

Answer: Tom has 12 books, Sarah has 24 books`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        question: 'The sum of three consecutive integers is 72. Find the integers.',
        solution: `Step 1: Define variables for consecutive integers:
Let n = first integer
Then n + 1 = second integer
And n + 2 = third integer

Step 2: Set up the equation:
Sum of all three = 72
n + (n + 1) + (n + 2) = 72

Step 3: Solve:
3n + 3 = 72
3n = 69
n = 23

Step 4: Find all three integers:
First: n = 23
Second: n + 1 = 24
Third: n + 2 = 25

Step 5: Check:
23 + 24 + 25 = 72 ✓
They are consecutive ✓

Answer: The three consecutive integers are 23, 24, and 25`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        question: 'A cell phone plan costs $40 per month plus $0.10 per text message. In one month, the total bill was $52. How many text messages were sent?',
        solution: `Step 1: Define the variable:
Let t = number of text messages sent

Step 2: Identify the costs:
Fixed monthly cost: $40
Cost per text: $0.10
Total cost: $52

Step 3: Write the equation:
Total cost = Fixed cost + (Cost per text × Number of texts)
52 = 40 + 0.10t

Step 4: Solve for t:
52 = 40 + 0.10t
12 = 0.10t         (subtract 40)
t = 12/0.10        (divide by 0.10)
t = 120

Step 5: Alternative method - multiply to eliminate decimal:
52 = 40 + 0.10t
520 = 400 + t      (multiply by 10)
t = 120

Step 6: Check:
Cost = $40 + $0.10(120)
     = $40 + $12
     = $52 ✓

Answer: 120 text messages were sent`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: wordProblemsLinear.id,
        front: 'What is the first step in solving a word problem?',
        back: 'Define the variable(s). Clearly state what the variable represents.',
        hint: 'Let x = ...',
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        front: 'How do you represent "a number increased by 5"?',
        back: 'x + 5 (where x is the number)',
        hint: 'Increased means add',
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        front: 'How do you represent "twice a number"?',
        back: '2x (where x is the number)',
        hint: 'Twice means multiply by 2',
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        front: 'How do you represent consecutive integers?',
        back: 'Use n, n+1, n+2, ... where n is the first integer.',
        hint: 'Each one is 1 more than the previous',
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        front: 'What should you always do after solving a word problem?',
        back: 'Check that your answer makes sense in the context of the problem.',
        hint: 'Verify the solution fits the story',
        isPremium: false
      },
      {
        topicId: wordProblemsLinear.id,
        front: 'What does "is" usually mean in word problems?',
        back: 'Equals (=). "Is" translates to an equals sign.',
        hint: 'Is = equals',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: word-problems-linear-algebra1');

  // TOPIC 3: Slope-Intercept Form
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: slopeInterceptForm.id,
        question: 'What is the slope and y-intercept of y = 3x - 5?',
        solution: `Step 1: Identify the slope-intercept form:
y = mx + b
where m = slope and b = y-intercept

Step 2: Compare to the given equation:
y = 3x - 5

Step 3: Identify m (slope):
m = 3

Step 4: Identify b (y-intercept):
b = -5

Step 5: Interpret:
Slope of 3 means rise/run = 3/1
The line goes up 3 units for every 1 unit right
Y-intercept of -5 means the line crosses y-axis at (0, -5)

Answer: Slope = 3, y-intercept = -5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        question: 'Write the equation of a line with slope -2 and y-intercept 7.',
        solution: `Step 1: Recall slope-intercept form:
y = mx + b

Step 2: Substitute given values:
m = -2 (slope)
b = 7 (y-intercept)

Step 3: Write the equation:
y = -2x + 7

Step 4: Verify it makes sense:
When x = 0: y = -2(0) + 7 = 7 ✓ (passes through (0, 7))
Slope is negative, so line goes down from left to right ✓

Answer: y = -2x + 7`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        question: 'Convert 2x + 3y = 12 to slope-intercept form.',
        solution: `Step 1: Goal - isolate y on one side:
2x + 3y = 12

Step 2: Subtract 2x from both sides:
3y = -2x + 12

Step 3: Divide everything by 3:
y = -2x/3 + 12/3
y = -2/3 x + 4

Step 4: Identify slope and y-intercept:
Slope: m = -2/3
Y-intercept: b = 4

Step 5: Verify:
Check with original equation at (0, 4):
2(0) + 3(4) = 0 + 12 = 12 ✓

Answer: y = -2/3 x + 4`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        question: 'Write the equation of a line that passes through (0, -3) with slope 4.',
        solution: `Step 1: Identify what we know:
The point (0, -3) is the y-intercept (where x = 0)
So b = -3
Slope m = 4

Step 2: Use slope-intercept form:
y = mx + b

Step 3: Substitute values:
y = 4x + (-3)
y = 4x - 3

Step 4: Verify with the given point:
When x = 0: y = 4(0) - 3 = -3 ✓
Point (0, -3) is on the line ✓

Step 5: Check the slope with another point:
When x = 1: y = 4(1) - 3 = 1
From (0, -3) to (1, 1):
Slope = (1 - (-3))/(1 - 0) = 4/1 = 4 ✓

Answer: y = 4x - 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        question: 'Write the equation in slope-intercept form of the line passing through (2, 5) and (6, 13).',
        solution: `Step 1: Find the slope using two points:
m = (y₂ - y₁)/(x₂ - x₁)
m = (13 - 5)/(6 - 2)
m = 8/4
m = 2

Step 2: Use point-slope form first:
y - y₁ = m(x - x₁)
Using point (2, 5):
y - 5 = 2(x - 2)

Step 3: Solve for y (convert to slope-intercept form):
y - 5 = 2x - 4
y = 2x - 4 + 5
y = 2x + 1

Step 4: Verify with both points:
Point (2, 5): y = 2(2) + 1 = 5 ✓
Point (6, 13): y = 2(6) + 1 = 13 ✓

Step 5: Alternative method - use y = mx + b directly:
We know m = 2, so y = 2x + b
Use point (2, 5):
5 = 2(2) + b
5 = 4 + b
b = 1
Therefore: y = 2x + 1 ✓

Answer: y = 2x + 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: slopeInterceptForm.id,
        front: 'What is slope-intercept form?',
        back: 'y = mx + b, where m is the slope and b is the y-intercept.',
        hint: 'y = mx + b',
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        front: 'What does m represent in y = mx + b?',
        back: 'The slope of the line (rise over run).',
        hint: 'm is the slope',
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        front: 'What does b represent in y = mx + b?',
        back: 'The y-intercept - where the line crosses the y-axis (the point (0, b)).',
        hint: 'b is the y-intercept',
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        front: 'If a line has positive slope, how does it look?',
        back: 'It rises from left to right (goes upward as you move right).',
        hint: 'Positive = upward',
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        front: 'If a line has negative slope, how does it look?',
        back: 'It falls from left to right (goes downward as you move right).',
        hint: 'Negative = downward',
        isPremium: false
      },
      {
        topicId: slopeInterceptForm.id,
        front: 'What is the equation of a horizontal line through y = 3?',
        back: 'y = 3 (slope is 0, so y = 0x + 3 = 3)',
        hint: 'Horizontal lines have slope 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: slope-intercept-form-algebra1');

  // TOPIC 4: Inequality Word Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inequalityWordProblems.id,
        question: 'You have $50. Books cost $8 each. Write and solve an inequality for the maximum number of books you can buy.',
        solution: `Step 1: Define the variable:
Let b = number of books

Step 2: Set up the inequality:
Cost of books must be at most $50
8b ≤ 50

Step 3: Solve the inequality:
b ≤ 50/8
b ≤ 6.25

Step 4: Interpret in context:
You can't buy part of a book
So b must be a whole number
Maximum: b = 6 books

Step 5: Check:
6 books: 8(6) = $48 ≤ $50 ✓
7 books: 8(7) = $56 > $50 ✗

Answer: b ≤ 6.25; You can buy at most 6 books`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        question: 'A taxi charges $3 for pickup plus $2 per mile. You have $25. What is the maximum distance you can travel?',
        solution: `Step 1: Define the variable:
Let m = number of miles

Step 2: Identify costs:
Pickup fee: $3
Per mile: $2
Total budget: $25

Step 3: Set up the inequality:
3 + 2m ≤ 25

Step 4: Solve:
2m ≤ 22      (subtract 3)
m ≤ 11       (divide by 2)

Step 5: Check:
11 miles: $3 + $2(11) = $3 + $22 = $25 ✓
12 miles: $3 + $2(12) = $3 + $24 = $27 > $25 ✗

Answer: You can travel at most 11 miles`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        question: 'Your test scores are 82, 78, and 85. What score do you need on the fourth test to have an average of at least 80?',
        solution: `Step 1: Define the variable:
Let x = score on the fourth test

Step 2: Write the average formula:
Average = Sum of all scores / Number of tests
Average = (82 + 78 + 85 + x)/4

Step 3: Set up the inequality:
We want average ≥ 80
(82 + 78 + 85 + x)/4 ≥ 80

Step 4: Simplify the left side:
(245 + x)/4 ≥ 80

Step 5: Solve:
245 + x ≥ 320     (multiply both sides by 4)
x ≥ 75            (subtract 245)

Step 6: Check:
If x = 75: (82 + 78 + 85 + 75)/4 = 320/4 = 80 ✓
If x = 74: (82 + 78 + 85 + 74)/4 = 319/4 = 79.75 < 80 ✗

Answer: You need at least 75 on the fourth test`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        question: 'A movie theater charges $12 for adults and $7 for children. A group has $100 to spend. If they buy 5 adult tickets, how many children tickets can they buy?',
        solution: `Step 1: Define the variable:
Let c = number of children tickets

Step 2: Calculate cost of adult tickets:
5 adult tickets × $12 = $60

Step 3: Find remaining money:
$100 - $60 = $40 available for children tickets

Step 4: Set up the inequality:
Cost of children tickets ≤ Remaining money
7c ≤ 40

Step 5: Solve:
c ≤ 40/7
c ≤ 5.71...

Step 6: Interpret:
Can't buy partial tickets
Maximum: c = 5 children tickets

Step 7: Verify the total:
5 adult tickets: 5 × $12 = $60
5 children tickets: 5 × $7 = $35
Total: $60 + $35 = $95 ≤ $100 ✓

6 children would be: $60 + $42 = $102 > $100 ✗

Answer: They can buy at most 5 children tickets`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        question: 'A phone plan costs $40/month plus $0.05 per text. A competitor charges $50/month with unlimited texts. For what number of texts is the first plan cheaper?',
        solution: `Step 1: Define the variable:
Let t = number of texts per month

Step 2: Write cost expressions:
Plan 1: $40 + $0.05t
Plan 2: $50 (flat rate)

Step 3: Set up the inequality:
We want Plan 1 to cost less than Plan 2
40 + 0.05t < 50

Step 4: Solve:
0.05t < 10        (subtract 40)
t < 10/0.05       (divide by 0.05)
t < 200

Step 5: Alternative method (multiply by 100 first):
40 + 0.05t < 50
4000 + 5t < 5000  (multiply by 100)
5t < 1000
t < 200

Step 6: Interpret:
Plan 1 is cheaper when you send fewer than 200 texts
At exactly 200 texts, costs are equal
Above 200 texts, Plan 2 (unlimited) is cheaper

Step 7: Verify:
t = 199: $40 + $0.05(199) = $40 + $9.95 = $49.95 < $50 ✓
t = 200: $40 + $0.05(200) = $40 + $10 = $50 = $50 (equal)
t = 201: $40 + $0.05(201) = $40 + $10.05 = $50.05 > $50 ✗

Answer: Plan 1 is cheaper when sending fewer than 200 texts per month (t < 200)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inequalityWordProblems.id,
        front: 'What does "at least" mean in inequality problems?',
        back: 'Greater than or equal to (≥). "At least 5" means x ≥ 5.',
        hint: 'At least = ≥',
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        front: 'What does "at most" mean in inequality problems?',
        back: 'Less than or equal to (≤). "At most 10" means x ≤ 10.',
        hint: 'At most = ≤',
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        front: 'What does "more than" mean in inequality problems?',
        back: 'Greater than (>). "More than 3" means x > 3.',
        hint: 'More than = >',
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        front: 'What does "less than" mean in inequality problems?',
        back: 'Less than (<). "Less than 7" means x < 7.',
        hint: 'Less than = <',
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        front: 'When solving inequality word problems, what must you remember about context?',
        back: 'The solution must make sense in the real world. For example, you can\'t buy a fraction of an item or have negative people.',
        hint: 'Context matters - use common sense',
        isPremium: false
      },
      {
        topicId: inequalityWordProblems.id,
        front: 'What happens when you multiply or divide an inequality by a negative number?',
        back: 'You must flip (reverse) the inequality sign. If 2x < 6, then x < 3. But if -2x < 6, then x > -3.',
        hint: 'Flip the sign with negatives',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: inequality-word-problems-algebra1');

  console.log('\n🎉 Successfully added problems and flashcards for all 4 final topics!');
  console.log('🎊 ALGEBRA 1 PROBLEMS & FLASHCARDS NOW 100% COMPLETE! 🎊');
  
  await prisma.$disconnect();
}

main();
