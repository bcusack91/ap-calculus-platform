import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 5 (3 topics)...');

  // Find the topics
  const scatterPlots = await prisma.topic.findFirst({
    where: { slug: 'scatter-plots-algebra1' }
  });

  const graphingSystems = await prisma.topic.findFirst({
    where: { slug: 'graphing-systems-algebra1' }
  });

  const exponentRules = await prisma.topic.findFirst({
    where: { slug: 'exponent-rules-algebra1' }
  });

  if (!scatterPlots || !graphingSystems || !exponentRules) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Scatter Plots and Correlations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: scatterPlots.id,
        question: 'Describe the correlation shown: As study time increases, test scores increase.',
        solution: `Step 1: Identify the relationship between variables:
Variable 1 (x): Study time
Variable 2 (y): Test scores
Relationship: As x increases, y increases

Step 2: Recall correlation types:
- Positive correlation: Both variables increase together
- Negative correlation: As one increases, the other decreases
- No correlation: No clear relationship

Step 3: Classify this relationship:
Since both study time AND test scores increase together, this is a positive correlation.

Answer: Positive correlation`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        question: 'A scatter plot shows points that form a downward pattern from left to right. What type of correlation is this?',
        solution: `Step 1: Visualize the pattern:
Points going downward from left to right means:
- As x increases (moving right), y decreases (moving down)

Step 2: Recall correlation types:
- Positive: upward pattern (both increase)
- Negative: downward pattern (one increases, other decreases)
- No correlation: random scatter

Step 3: Classify:
A downward pattern indicates a negative correlation.

Example: As temperature decreases, heating costs increase.

Answer: Negative correlation`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        question: 'Points on a scatter plot are tightly clustered around a line. Is this a strong or weak correlation?',
        solution: `Step 1: Understand correlation strength:
- Strong correlation: Points are close to forming a line (tight cluster)
- Weak correlation: Points are scattered, loosely following a pattern
- No correlation: Points show no pattern at all

Step 2: Analyze the given information:
"Tightly clustered around a line" means the points are very close together, following the linear pattern closely.

Step 3: Determine strength:
When points are tightly clustered, the correlation is strong.

Note: A correlation can be:
- Strong positive (tight cluster, upward)
- Strong negative (tight cluster, downward)
- Weak positive (loose scatter, upward trend)
- Weak negative (loose scatter, downward trend)

Answer: Strong correlation`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        question: 'A study finds that ice cream sales and drowning incidents both increase in summer. Does this mean ice cream causes drowning?',
        solution: `Step 1: Identify what we observe:
- Ice cream sales increase in summer
- Drowning incidents increase in summer
- Both variables are correlated (both increase together)

Step 2: Apply the principle: Correlation ≠ Causation
Just because two variables are correlated does NOT mean one causes the other.

Step 3: Find the lurking variable:
The real cause is a third variable: warm weather/summer
- Warm weather → more people buy ice cream
- Warm weather → more people swim → more drowning incidents

Step 4: Conclusion:
Ice cream sales and drowning are correlated, but ice cream does NOT cause drowning. Both are caused by a third factor (summer/warm weather).

This is a classic example of correlation without causation.

Answer: No, correlation does not imply causation. Both are caused by warm weather.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        question: 'A line of best fit for a scatter plot has equation y = 2.5x + 10, where x is hours studied and y is test score. Predict the test score for someone who studies 6 hours.',
        solution: `Step 1: Understand what we're doing:
We're using the line of best fit equation to make a prediction (interpolation, since 6 hours is likely within our data range).

Step 2: Identify the given information:
Equation: y = 2.5x + 10
x (hours studied) = 6
y (test score) = ?

Step 3: Substitute x = 6 into the equation:
y = 2.5(6) + 10

Step 4: Calculate:
y = 15 + 10
y = 25

Step 5: Interpret the result:
According to the line of best fit, a student who studies 6 hours is predicted to score 25 points on the test.

Note: This is a prediction based on the trend; actual scores may vary.

Answer: Predicted test score is 25 points`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: scatterPlots.id,
        front: 'What is a scatter plot?',
        back: 'A graph that shows the relationship between two variables using ordered pairs plotted as points.',
        hint: 'Each point represents one data observation with two values',
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        front: 'What is positive correlation?',
        back: 'When both variables increase together (upward pattern from left to right).',
        hint: 'Both go up together',
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        front: 'What is negative correlation?',
        back: 'When one variable increases while the other decreases (downward pattern from left to right).',
        hint: 'One goes up, the other goes down',
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        front: 'What does "correlation does not imply causation" mean?',
        back: 'Just because two variables are correlated (related) does not mean one causes the other. There may be a third factor.',
        hint: 'Related does not mean one causes the other',
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        front: 'What is a line of best fit?',
        back: 'A line drawn through a scatter plot that best represents the trend of the data, minimizing the distance to all points.',
        hint: 'Also called a trend line or regression line',
        isPremium: false
      },
      {
        topicId: scatterPlots.id,
        front: 'What is the difference between interpolation and extrapolation?',
        back: 'Interpolation predicts within the data range. Extrapolation predicts outside the data range (less reliable).',
        hint: 'Inside vs. outside the existing data',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: scatter-plots-algebra1');

  // TOPIC 2: Graphing Systems of Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: graphingSystems.id,
        question: 'Graph to find the solution: y = x + 1 and y = -x + 5',
        solution: `Step 1: Graph the first equation y = x + 1:
- y-intercept: (0, 1)
- Slope: 1 (rise 1, run 1)
- Another point: (1, 2), (2, 3), etc.

Step 2: Graph the second equation y = -x + 5:
- y-intercept: (0, 5)
- Slope: -1 (rise -1, run 1)
- Another point: (1, 4), (2, 3), etc.

Step 3: Find where the lines intersect:
Both lines pass through the point (2, 3)

Step 4: Verify the solution:
Check in both equations:
y = x + 1: 3 = 2 + 1 = 3 ✓
y = -x + 5: 3 = -2 + 5 = 3 ✓

Answer: (2, 3)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        question: 'What is the solution to a system if the two lines are parallel?',
        solution: `Step 1: Understand what parallel lines mean:
- Parallel lines have the same slope
- Parallel lines never intersect
- They are always the same distance apart

Step 2: Relate to systems of equations:
The solution to a system is the point where the lines intersect.

Step 3: Apply to parallel lines:
If lines are parallel, they never intersect.
No point of intersection = no solution.

Step 4: Name this type of system:
A system with no solution is called inconsistent.

Example: y = 2x + 1 and y = 2x + 5 (same slope 2, different y-intercepts)

Answer: No solution (inconsistent system)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        question: 'Determine the number of solutions by examining the slopes and y-intercepts: y = 3x - 2 and y = -x + 6',
        solution: `Step 1: Identify slope and y-intercept of each line:

Equation 1: y = 3x - 2
- Slope: 3
- y-intercept: -2

Equation 2: y = -x + 6
- Slope: -1
- y-intercept: 6

Step 2: Compare the slopes:
3 ≠ -1 (slopes are different)

Step 3: Determine number of solutions:
- Different slopes → lines intersect at exactly one point → one solution
- Same slope, different y-intercepts → parallel lines → no solution
- Same slope, same y-intercept → same line → infinitely many solutions

Step 4: Conclusion:
Since the slopes are different (3 and -1), the lines will intersect at exactly one point.

Answer: One solution (the system is consistent and independent)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        question: 'What happens if you graph y = 2x + 3 and 2y = 4x + 6?',
        solution: `Step 1: Convert the second equation to slope-intercept form:
2y = 4x + 6
Divide both sides by 2:
y = 2x + 3

Step 2: Compare the two equations:
Equation 1: y = 2x + 3
Equation 2: y = 2x + 3
They are identical!

Step 3: Understand what this means graphically:
Both equations represent the exact same line.
Every point on the line satisfies both equations.

Step 4: Determine number of solutions:
Since the lines are the same (coincident), there are infinitely many solutions - every point on the line is a solution.

Step 5: Name this type of system:
A system with infinitely many solutions is called dependent.

Answer: Infinitely many solutions (the lines are the same)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        question: 'Graph to solve: y = -2x + 4 and x + y = 1. Then verify your solution algebraically.',
        solution: `PART 1 - Graphing:

Step 1: Graph y = -2x + 4:
- y-intercept: (0, 4)
- Slope: -2
- Points: (0, 4), (1, 2), (2, 0)

Step 2: Convert x + y = 1 to slope-intercept form:
y = -x + 1

Step 3: Graph y = -x + 1:
- y-intercept: (0, 1)
- Slope: -1
- Points: (0, 1), (1, 0), (2, -1)

Step 4: Find intersection point:
The lines intersect at (3, -2)

PART 2 - Algebraic Verification:

Step 5: Check in both original equations:
Equation 1: y = -2x + 4
-2 = -2(3) + 4
-2 = -6 + 4
-2 = -2 ✓

Equation 2: x + y = 1
3 + (-2) = 1
1 = 1 ✓

Answer: (3, -2)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphingSystems.id,
        front: 'How do you solve a system of equations by graphing?',
        back: 'Graph both equations on the same coordinate plane. The point where the lines intersect is the solution.',
        hint: 'The intersection point is the solution',
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        front: 'What does it mean if two lines intersect at one point?',
        back: 'The system has exactly one solution (consistent and independent). The intersection point is the solution.',
        hint: 'One intersection = one solution',
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        front: 'What does it mean if two lines are parallel?',
        back: 'The system has no solution (inconsistent). Parallel lines never intersect.',
        hint: 'Parallel means no intersection',
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        front: 'What does it mean if two lines are the same?',
        back: 'The system has infinitely many solutions (dependent). Every point on the line is a solution.',
        hint: 'Same line means infinite solutions',
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        front: 'How can you tell if lines are parallel without graphing?',
        back: 'Check if they have the same slope but different y-intercepts.',
        hint: 'Same slope, different intercept = parallel',
        isPremium: false
      },
      {
        topicId: graphingSystems.id,
        front: 'What are the three types of systems based on number of solutions?',
        back: 'One solution (consistent, independent), no solution (inconsistent), infinitely many solutions (dependent).',
        hint: 'One, none, or infinite',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: graphing-systems-algebra1');

  // TOPIC 3: Exponent Rules
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: exponentRules.id,
        question: 'Simplify: x³ · x⁵',
        solution: `Step 1: Identify the rule to use:
Product Rule: When multiplying with the same base, add the exponents
aᵐ · aⁿ = aᵐ⁺ⁿ

Step 2: Apply the rule:
x³ · x⁵ = x³⁺⁵

Step 3: Simplify:
x³⁺⁵ = x⁸

Step 4: Check by expanding (optional):
x³ · x⁵ = (x·x·x) · (x·x·x·x·x) = x⁸ ✓

Answer: x⁸`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        question: 'Simplify: (y⁴)³',
        solution: `Step 1: Identify the rule to use:
Power Rule: When raising a power to a power, multiply the exponents
(aᵐ)ⁿ = aᵐⁿ

Step 2: Apply the rule:
(y⁴)³ = y⁴·³

Step 3: Simplify:
y⁴·³ = y¹²

Step 4: Check by expanding (optional):
(y⁴)³ = y⁴ · y⁴ · y⁴ = y⁴⁺⁴⁺⁴ = y¹² ✓

Answer: y¹²`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        question: 'Simplify: x⁸/x³',
        solution: `Step 1: Identify the rule to use:
Quotient Rule: When dividing with the same base, subtract the exponents
aᵐ/aⁿ = aᵐ⁻ⁿ

Step 2: Apply the rule:
x⁸/x³ = x⁸⁻³

Step 3: Simplify:
x⁸⁻³ = x⁵

Step 4: Check by expanding (optional):
x⁸/x³ = (x·x·x·x·x·x·x·x)/(x·x·x) = x·x·x·x·x = x⁵ ✓

Answer: x⁵`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        question: 'Simplify: (2x³y²)⁴',
        solution: `Step 1: Identify the rule to use:
Power of a Product Rule: (ab)ⁿ = aⁿbⁿ
Apply the exponent to each factor inside the parentheses

Step 2: Apply the exponent to each factor:
(2x³y²)⁴ = 2⁴ · (x³)⁴ · (y²)⁴

Step 3: Evaluate each part:
2⁴ = 16
(x³)⁴ = x³·⁴ = x¹²
(y²)⁴ = y²·⁴ = y⁸

Step 4: Combine:
16x¹²y⁸

Answer: 16x¹²y⁸`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        question: 'Simplify: (3a²b⁴)³ · (2a³b)²',
        solution: `Step 1: Simplify the first part (3a²b⁴)³:
3³ · (a²)³ · (b⁴)³
= 27 · a⁶ · b¹²
= 27a⁶b¹²

Step 2: Simplify the second part (2a³b)²:
2² · (a³)² · b²
= 4 · a⁶ · b²
= 4a⁶b²

Step 3: Multiply the results:
27a⁶b¹² · 4a⁶b²

Step 4: Multiply coefficients and use product rule for variables:
Coefficients: 27 · 4 = 108
a terms: a⁶ · a⁶ = a⁶⁺⁶ = a¹²
b terms: b¹² · b² = b¹²⁺² = b¹⁴

Step 5: Combine:
108a¹²b¹⁴

Answer: 108a¹²b¹⁴`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: exponentRules.id,
        front: 'What is the Product Rule for exponents?',
        back: 'aᵐ · aⁿ = aᵐ⁺ⁿ. When multiplying with the same base, add the exponents.',
        hint: 'Multiply = add exponents',
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        front: 'What is the Quotient Rule for exponents?',
        back: 'aᵐ/aⁿ = aᵐ⁻ⁿ. When dividing with the same base, subtract the exponents.',
        hint: 'Divide = subtract exponents',
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        front: 'What is the Power Rule for exponents?',
        back: '(aᵐ)ⁿ = aᵐⁿ. When raising a power to a power, multiply the exponents.',
        hint: 'Power to a power = multiply exponents',
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        front: 'What is a⁰ equal to?',
        back: 'a⁰ = 1 (for any non-zero number a). Any non-zero number to the zero power equals 1.',
        hint: 'Anything to the zero power is 1',
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        front: 'What is a⁻ⁿ equal to?',
        back: 'a⁻ⁿ = 1/aⁿ. A negative exponent means reciprocal.',
        hint: 'Negative exponent = flip it',
        isPremium: false
      },
      {
        topicId: exponentRules.id,
        front: 'How do you simplify (ab)ⁿ?',
        back: '(ab)ⁿ = aⁿbⁿ. Apply the exponent to each factor inside the parentheses.',
        hint: 'Distribute the exponent to each factor',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: exponent-rules-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
