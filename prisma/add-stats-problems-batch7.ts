import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 7: Regression Part 2 (3 topics)...\n');

  // Find topics
  const leastSquares = await prisma.topic.findFirst({
    where: { slug: 'least-squares-regression' }
  });

  const residuals = await prisma.topic.findFirst({
    where: { slug: 'residuals-residual-plots' }
  });

  const coefficientDetermination = await prisma.topic.findFirst({
    where: { slug: 'coefficient-determination' }
  });

  if (!leastSquares || !residuals || !coefficientDetermination) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Least-Squares Regression - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: leastSquares.id,
        question: 'A study measures hours studied (x) and test scores (y) for 5 students: (2,65), (3,70), (4,75), (5,80), (6,85). Given x̄ = 4, ȳ = 75, calculate the least-squares regression line.',
        solution: `Step 1: Calculate slope b₁
Formula: b₁ = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²

Create table:
| x | y  | (x-x̄) | (y-ȳ) | (x-x̄)(y-ȳ) | (x-x̄)² |
|---|-------|--------|---------|
| 2 | 65 | -2    | -10   | 20         | 4      |
| 3 | 70 | -1    | -5    | 5          | 1      |
| 4 | 75 | 0     | 0     | 0          | 0      |
| 5 | 80 | 1     | 5     | 5          | 1      |
| 6 | 85 | 2     | 10    | 20         | 4      |

Σ(x-x̄)(y-ȳ) = 50
Σ(x-x̄)² = 10

b₁ = 50/10 = 5

Step 2: Calculate y-intercept b₀
b₀ = ȳ - b₁x̄
b₀ = 75 - 5(4)
b₀ = 75 - 20 = 55

Step 3: Write equation
ŷ = 55 + 5x

Interpretation: Each additional hour studied predicts a 5-point increase in test score.

Answer: ŷ = 55 + 5x`,
        difficulty: 'MEDIUM',
        order: 0,
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        question: 'For data with Σx = 50, Σy = 120, Σx² = 350, Σxy = 720, n = 10, find the least-squares regression line.',
        solution: `Step 1: Calculate means
x̄ = Σx/n = 50/10 = 5
ȳ = Σy/n = 120/10 = 12

Step 2: Calculate slope
Formula: b₁ = [Σxy - n(x̄)(ȳ)] / [Σx² - n(x̄)²]

Numerator: Σxy - n(x̄)(ȳ) = 720 - 10(5)(12) = 720 - 600 = 120
Denominator: Σx² - n(x̄)² = 350 - 10(5)² = 350 - 250 = 100

b₁ = 120/100 = 1.2

Step 3: Calculate intercept
b₀ = ȳ - b₁x̄ = 12 - 1.2(5) = 12 - 6 = 6

Step 4: Write equation
ŷ = 6 + 1.2x

Verification: When x = 5, ŷ = 6 + 6 = 12 = ȳ ✓

Answer: ŷ = 6 + 1.2x`,
        difficulty: 'MEDIUM',
        order: 1,
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        question: 'A regression of car weight (x, in 1000s of lbs) on fuel efficiency (y, mpg) gives ŷ = 45 - 5.2x. Interpret the slope and predict mpg for a 3,500 lb car.',
        solution: `Step 1: Interpret slope
Slope = -5.2 mpg per 1000 lbs

Interpretation: "For each additional 1,000 pounds of car weight, fuel efficiency is predicted to DECREASE by 5.2 miles per gallon."

The negative slope makes sense: heavier cars use more fuel.

Step 2: Convert weight to correct units
Car weight = 3,500 lbs = 3.5 thousands of lbs
So x = 3.5

Step 3: Make prediction
ŷ = 45 - 5.2(3.5)
ŷ = 45 - 18.2
ŷ = 26.8 mpg

Step 4: Complete interpretation
"A car weighing 3,500 pounds is predicted to have fuel efficiency of approximately 26.8 miles per gallon."

Answer: 
Slope: Each 1,000 lb increase predicts 5.2 mpg decrease
Prediction: 26.8 mpg`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        question: 'Given x̄ = 15, ȳ = 240, sₓ = 4, sᵧ = 60, r = 0.75, find the regression line using b₁ = r(sᵧ/sₓ).',
        solution: `Step 1: Calculate slope
Formula: b₁ = r(sᵧ/sₓ)

b₁ = 0.75 × (60/4)
b₁ = 0.75 × 15
b₁ = 11.25

Step 2: Calculate y-intercept
b₀ = ȳ - b₁x̄
b₀ = 240 - 11.25(15)
b₀ = 240 - 168.75
b₀ = 71.25

Step 3: Write regression equation
ŷ = 71.25 + 11.25x

Interpretation: Each 1-unit increase in x predicts an 11.25-unit increase in y.

Answer: ŷ = 71.25 + 11.25x`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        question: 'The regression of temperature (°F) vs ice cream sales ($) is ŷ = -2 + 0.8x. Is it appropriate to predict sales when temp = 0°F? Explain.',
        solution: `Step 1: Make the prediction
ŷ = -2 + 0.8(0) = -2

This predicts -$2 in sales, which is IMPOSSIBLE!

Step 2: Identify the problem
This is EXTRAPOLATION - predicting outside the data range.

Issues:
1. Temperature of 0°F likely outside original data range
2. Linear relationship may not hold at extremes
3. Model gives nonsensical result (negative sales)
4. Y-intercept is just a mathematical constant, not meaningful here

Step 3: Proper approach
Should only use regression for INTERPOLATION (within data range).
If data collected at 60-100°F, only predict in that range.

Answer: NO - This is inappropriate extrapolation resulting in an impossible prediction. Only use regression within the range of observed x-values.`,
        difficulty: 'MEDIUM',
        order: 4,
        isPremium: false
      }
    ]
  });

  // TOPIC 1: Least-Squares Regression - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: leastSquares.id,
        front: 'What is the general form of the least-squares regression line?',
        back: 'ŷ = b₀ + b₁x, where ŷ is predicted y, b₁ is the slope, and b₀ is the y-intercept.',
        hint: 'ŷ = b₀ + b₁x',
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        front: 'What does the slope b₁ represent?',
        back: 'The predicted change in y for each one-unit increase in x. Formula: b₁ = r(sᵧ/sₓ)',
        hint: 'Predicted change per unit',
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        front: 'What point does the regression line always pass through?',
        back: 'The point (x̄, ȳ) - the mean of x and the mean of y.',
        hint: 'Point of means',
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        front: 'What does "least squares" mean?',
        back: 'The regression line minimizes the sum of squared residuals (vertical distances from points to line).',
        hint: 'Minimizes squared residuals',
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        front: 'How do you calculate the y-intercept?',
        back: 'b₀ = ȳ - b₁x̄. May not be meaningful if x = 0 is outside the data range.',
        hint: 'b₀ = ȳ - b₁x̄',
        isPremium: false
      },
      {
        topicId: leastSquares.id,
        front: 'What is the relationship between slope and correlation?',
        back: 'b₁ = r(sᵧ/sₓ). The slope has the same sign as r. If r = 0, then b₁ = 0.',
        hint: 'b₁ = r(sᵧ/sₓ)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 5 problems and 6 flashcards for Least-Squares Regression\n');

  // TOPIC 2: Residuals and Residual Plots - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: residuals.id,
        question: 'For regression ŷ = 10 + 2x, calculate the residual for the point (5, 25).',
        solution: `Step 1: Identify actual value
Point (5, 25): x = 5, y = 25 (actual)

Step 2: Calculate predicted value
ŷ = 10 + 2(5) = 10 + 10 = 20

Step 3: Calculate residual
Residual = y - ŷ
Residual = 25 - 20 = 5

Step 4: Interpret
The residual is POSITIVE (+5), meaning:
- Actual value is ABOVE predicted value
- Point is 5 units above the regression line
- Model UNDERESTIMATES by 5 units

Answer: Residual = 5 (point is above the line)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: residuals.id,
        question: 'A residual plot shows points scattered randomly around zero with no pattern. What does this indicate?',
        solution: `Step 1: Understand what random scatter means
Good residual plot characteristics:
✓ Points scattered RANDOMLY
✓ No curved, U-shaped, or other patterns
✓ Roughly equal spread at all x values
✓ Centered around residual = 0

Step 2: What this indicates
The linear model is APPROPRIATE:

1. Linear relationship is valid (no curved pattern)
2. Constant variance (homoscedasticity)
3. No systematic errors
4. Independence assumption met

Step 3: What to do
✓ Can proceed with predictions
✓ Can trust confidence intervals
✓ Linear regression is validated

Answer: Random scatter indicates the linear model is APPROPRIATE. The relationship is truly linear, variance is constant, and there are no systematic errors.`,
        difficulty: 'MEDIUM',
        order: 1,
        isPremium: false
      },
      {
        topicId: residuals.id,
        question: 'A residual plot shows a curved (U-shaped) pattern. What does this suggest and what should you do?',
        solution: `Step 1: Identify the problem
U-shaped or curved residual plot means: Linear model is INAPPROPRIATE

The relationship is actually nonlinear (curved).

Step 2: Why this is a problem
- Linear model makes systematic errors
- Underestimates in middle, overestimates at extremes (or vice versa)
- Predictions will be biased
- Violates linearity assumption

Step 3: Solutions
Option 1: Transform the data
- Try log(y) vs x, or √y vs x
- Replot residuals - should become random

Option 2: Use nonlinear regression
- Quadratic: y = a + bx + cx²
- Exponential: y = ae^(bx)

Step 4: Check new model
After transformation, residual plot should show random scatter.

Answer: Curved residuals indicate NONLINEAR relationship. Transform variables (log, square root) or use nonlinear regression. Recheck residuals after adjustment.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: residuals.id,
        question: 'For points (1,3), (2,5), (3,6) with regression ŷ = 2 + 1.5x, verify residuals sum to zero.',
        solution: `Step 1: Calculate predicted values
Point 1: ŷ₁ = 2 + 1.5(1) = 3.5
Point 2: ŷ₂ = 2 + 1.5(2) = 5
Point 3: ŷ₃ = 2 + 1.5(3) = 6.5

Step 2: Calculate residuals
Residual = y - ŷ

Point 1: e₁ = 3 - 3.5 = -0.5
Point 2: e₂ = 5 - 5 = 0
Point 3: e₃ = 6 - 6.5 = -0.5

Step 3: Sum residuals
Σ(residuals) = -0.5 + 0 + (-0.5) = -1.0

This is close to zero (small rounding error).

Step 4: Why residuals sum to zero
Mathematical property: For least-squares regression, Σ(y - ŷ) = 0 ALWAYS
- Guaranteed by the formulas
- Positive and negative errors balance
- Line goes through "middle" of data

Answer: Residuals sum to approximately 0. For true least-squares line, they ALWAYS sum exactly to zero.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: residuals.id,
        question: 'A residual plot shows increasing spread (fan shape) as x increases. What does this violate and what are the implications?',
        solution: `Step 1: Identify the violation
Fan-shaped residuals violate: CONSTANT VARIANCE (homoscedasticity)

The spread increases with x (heteroscedasticity).

Step 2: Implications for predictions
- Predictions less reliable at high x (wide spread)
- Predictions more reliable at low x (tight spread)
- Standard errors are WRONG
- Confidence intervals misleading

Step 3: Implications for inference
- t-tests may be invalid
- p-values unreliable
- Hypothesis tests have wrong error rates
- Can't trust significance levels

Note: Estimates (slope, intercept) are still unbiased, but uncertainty measures are wrong.

Step 4: Solutions
- Transform y (try log(y) or √y)
- Use weighted least squares
- Use robust standard errors
- Report with caution

Answer: Violates CONSTANT VARIANCE assumption. Standard errors and confidence intervals unreliable. Solutions: transform y, use weighted least squares, or robust standard errors.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  // TOPIC 2: Residuals and Residual Plots - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: residuals.id,
        front: 'What is a residual?',
        back: 'Residual = y - ŷ (observed minus predicted). Positive means point is above the line.',
        hint: 'y - ŷ; distance to line',
        isPremium: false
      },
      {
        topicId: residuals.id,
        front: 'What is a residual plot?',
        back: 'Scatterplot with x (or ŷ) on horizontal axis and residuals on vertical axis. Checks if linear model is appropriate.',
        hint: 'x vs residuals',
        isPremium: false
      },
      {
        topicId: residuals.id,
        front: 'What does a GOOD residual plot look like?',
        back: 'Random scatter around zero with no pattern and roughly equal spread. Indicates linear model is appropriate.',
        hint: 'Random scatter; no pattern',
        isPremium: false
      },
      {
        topicId: residuals.id,
        front: 'What does a curved pattern in residuals indicate?',
        back: 'Relationship is NOT linear. Need to transform variables or use nonlinear model.',
        hint: 'Nonlinear; need transformation',
        isPremium: false
      },
      {
        topicId: residuals.id,
        front: 'What does a fan shape in residuals indicate?',
        back: 'Non-constant variance (heteroscedasticity). Standard errors and CIs are unreliable.',
        hint: 'Non-constant variance',
        isPremium: false
      },
      {
        topicId: residuals.id,
        front: 'Do residuals always sum to zero?',
        back: 'YES, for least-squares regression, Σ(residual) = 0 always. Guaranteed by formulas.',
        hint: 'Always sum to zero',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 5 problems and 6 flashcards for Residuals and Residual Plots\n');

  // TOPIC 3: Coefficient of Determination - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: coefficientDetermination.id,
        question: 'A regression has correlation r = 0.8. Calculate and interpret R².',
        solution: `Step 1: Calculate R²
Formula: R² = r²

R² = (0.8)² = 0.64

Step 2: Express as percentage
R² = 0.64 = 64%

Step 3: Interpret
"64% of the variability in y is explained by the linear relationship with x."

The remaining 36% is unexplained variation (random error, other factors).

Step 4: Implications
R² = 0.64 suggests:
- Strong relationship (64% explained)
- Model captures most of pattern
- Useful for predictions
- But 36% still unexplained

Answer: R² = 0.64 or 64%. This means 64% of the variation in y is explained by the linear relationship with x.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        question: 'Model A has R² = 0.85, Model B has R² = 0.45. Which is better for predictions?',
        solution: `Step 1: Compare R² values
Model A: R² = 0.85 = 85% explained
Model B: R² = 0.45 = 45% explained

Step 2: Model A interpretation
- 85% of variation explained
- Very strong relationship
- Only 15% unexplained
- More accurate predictions

Step 3: Model B interpretation
- 45% of variation explained
- Moderate relationship
- 55% unexplained
- Less accurate predictions

Step 4: Conclusion
Model A is BETTER because:
- More variation explained (85% vs 45%)
- Smaller residuals on average
- More reliable predictions
- Stronger relationship

Answer: Model A is better. It explains 85% of variation versus only 45% for Model B, meaning more accurate predictions.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        question: 'A regression has R² = 0.49. What is the correlation r? Can you determine the sign?',
        solution: `Step 1: Calculate |r|
R² = r²
0.49 = r²
r = ±√0.49 = ±0.7

So |r| = 0.7

Step 2: Determine sign
From R² ALONE, cannot determine sign!

Both r = +0.7 and r = -0.7 give R² = 0.49

Step 3: How to find sign
Need additional information:
- Look at slope (same sign as r)
- Look at scatterplot direction
- Context (should relationship be positive or negative?)

Step 4: Why R² loses sign
R² = r² means squaring eliminates sign:
(+0.7)² = 0.49
(-0.7)² = 0.49

Answer: |r| = 0.7, but CANNOT determine sign from R² alone. Need slope sign or scatterplot to determine if r = +0.7 or -0.7.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        question: 'Explain why R² must be between 0 and 1.',
        solution: `Step 1: R² definition
R² = r² = (correlation)²

Step 2: Why R² ≥ 0
Any number squared is non-negative:
- Even negative r gives positive R²
- (-0.7)² = 0.49 ≥ 0
- Minimum R² = 0 (no relationship)

Step 3: Why R² ≤ 1
Correlation is bounded: -1 ≤ r ≤ 1

Squaring preserves this:
- Maximum |r| = 1
- Maximum r² = 1² = 1
- Cannot exceed 100% of variation

Step 4: Interpretation
R² = 0: No linear relationship (0% explained)
R² = 1: Perfect linear relationship (100% explained)

You cannot explain less than 0% or more than 100%!

Step 5: If you see R² = 1.5 or R² = -0.3
CALCULATION ERROR! Recheck your work.

Answer: R² must be 0 ≤ R² ≤ 1 because it equals r² (always non-negative) and correlation is bounded by -1 ≤ r ≤ 1. Cannot explain less than 0% or more than 100% of variation.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        question: 'A model has SST = 500 and SSE = 125. Calculate and interpret R².',
        solution: `Step 1: Understand sum of squares
SST = Total Sum of Squares = total variation
SSE = Sum of Squared Errors = unexplained variation
SSR = Regression Sum of Squares = explained variation

Relationship: SST = SSR + SSE

Step 2: Calculate SSR
SSR = SST - SSE
SSR = 500 - 125 = 375

Step 3: Calculate R²
Formula: R² = SSR/SST

R² = 375/500 = 0.75

Alternative: R² = 1 - SSE/SST = 1 - 125/500 = 1 - 0.25 = 0.75 ✓

Step 4: Interpret
R² = 0.75 = 75%

"75% of the total variation in y is explained by the regression model."

Explained: 375/500 = 75%
Unexplained: 125/500 = 25%

Answer: R² = 0.75 or 75%. The model explains 375 out of 500 total units of variation, leaving 125 units (25%) unexplained.`,
        difficulty: 'MEDIUM',
        order: 4,
        isPremium: false
      }
    ]
  });

  // TOPIC 3: Coefficient of Determination - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: coefficientDetermination.id,
        front: 'What is R² (coefficient of determination)?',
        back: 'R² = r² = proportion of variation in y explained by the linear relationship with x. Ranges from 0 to 1.',
        hint: 'Proportion explained',
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        front: 'How do you interpret R² = 0.64?',
        back: '64% of the variability in y is explained by x. The remaining 36% is unexplained variation.',
        hint: '64% explained; 36% not',
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        front: 'What are the formulas for R²?',
        back: 'R² = r² = SSR/SST = 1 - SSE/SST, where SSR = explained, SSE = unexplained, SST = total variation.',
        hint: 'SSR/SST or 1 - SSE/SST',
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        front: 'Can R² be negative or greater than 1?',
        back: 'NO. Must be 0 ≤ R² ≤ 1 because it equals r² and correlation is bounded by -1 ≤ r ≤ 1.',
        hint: '0 ≤ R² ≤ 1 always',
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        front: 'Does high R² mean causation?',
        back: 'NO! High R² shows strong association only. Does NOT prove causation. Need randomized experiment for causation.',
        hint: 'Correlation ≠ causation',
        isPremium: false
      },
      {
        topicId: coefficientDetermination.id,
        front: 'If R² = 0.81, what is |r|?',
        back: '|r| = √R² = √0.81 = 0.9. Sign of r cannot be determined from R² alone.',
        hint: '|r| = √R²',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 5 problems and 6 flashcards for Coefficient of Determination\n');

  console.log('🎉 Batch 7 Complete!');
  console.log('Progress: 30/34 AP Statistics topics complete (88%)');
  console.log('Remaining: 4 topics (Transformations for Linearity + Inference for Regression)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
