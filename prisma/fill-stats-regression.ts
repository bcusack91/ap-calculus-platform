import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Regression & Correlation (6 topics - FINAL BATCH!)...\n');

  // Topic 1: Scatterplots and Correlation
  await prisma.topic.update({
    where: { slug: 'scatterplots-correlation-stats' },
    data: {
      textContent: `# Scatterplots and Correlation

## Scatterplots

**Scatterplot:** Graph showing relationship between two quantitative variables
- x-axis: Explanatory variable (independent)
- y-axis: Response variable (dependent)
- Each point represents one individual

**Purpose:** Visualize relationship, identify patterns, detect outliers

## Describing Scatterplots: DCFS

**Direction:** Positive, negative, or no association

**Positive:** As x increases, y tends to increase  
**Negative:** As x increases, y tends to decrease  
**No association:** No clear pattern

**Cluster:** Data grouped together or spread evenly

**Form:** Linear or nonlinear

**Linear:** Points follow straight-line pattern  
**Nonlinear:** Curved pattern (quadratic, exponential, etc.)

**Strength:** How closely points follow pattern

**Strong:** Points close to pattern  
**Moderate:** Some scatter but clear pattern  
**Weak:** Lots of scatter, vague pattern

**Outliers:** Points far from overall pattern

## Correlation Coefficient (r)

**Measures:** Strength and direction of **linear** relationship

**Formula:**

$$r = \\frac{1}{n-1} \\sum \\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)$$

**Properties:**
- **Range:** -1 ≤ r ≤ 1
- **r = 1:** Perfect positive linear relationship
- **r = -1:** Perfect negative linear relationship
- **r = 0:** No linear relationship
- **r > 0:** Positive association
- **r < 0:** Negative association

## Interpreting |r|

**|r| = 1:** Perfect linear relationship  
**0.8 < |r| < 1:** Strong linear relationship  
**0.5 < |r| < 0.8:** Moderate linear relationship  
**0 < |r| < 0.5:** Weak linear relationship  
**|r| = 0:** No linear relationship

**Note:** These are rough guidelines, context matters!

## Important Properties of r

**1. Unitless:** No units (standardized)

**2. Not affected by units:** Converting x or y doesn't change r

**3. Not affected by which variable is x or y:** Switching variables doesn't change r

**4. Affected by outliers:** Single outlier can dramatically change r

**5. Measures linear relationship only:** Can be 0 even if strong nonlinear relationship exists!

## Example: Calculating r

**Data:** (1, 2), (2, 4), (3, 5), (4, 7), (5, 8)

$$\\bar{x} = 3$$, $$s_x = 1.58$$  
$$\\bar{y} = 5.2$$, $$s_y = 2.39$$

$$r = \\frac{1}{4}[(-2/1.58)(-3.2/2.39) + ... + (2/1.58)(2.8/2.39)]$$

$$r \\approx 0.982$$ (strong positive)

**In practice:** Use calculator!

## Calculator Method

**TI-83/84:**
1. Enter x-values in L1, y-values in L2
2. STAT → CALC → 8:LinReg(a+bx)
3. r appears (if diagnostics on: 2nd 0 → DiagnosticOn)

## Correlation vs Causation

**CRITICAL:** Correlation does NOT imply causation!

**r = 0.9 means:**
- Strong linear relationship exists
- x and y tend to vary together

**r = 0.9 does NOT mean:**
- x causes y
- y causes x

**Possible explanations for correlation:**
1. x causes y
2. y causes x
3. Confounding variable causes both
4. Coincidence

## Example: Spurious Correlation

**Ice cream sales and drowning deaths:** r ≈ 0.9

**NOT because:**
- Ice cream causes drowning
- Drowning causes ice cream sales

**ACTUALLY:**
- Confounding variable: Summer/temperature
- Both increase in summer

## Outliers and Influential Points

**Outlier:** Point far from overall pattern

**Effect on r:**
- Can increase or decrease r
- Can change sign of r
- Single outlier can dominate

**Always:** Identify outliers, consider their impact

**Influential point:** If removed, would substantially change r or regression line

## When Correlation Inappropriate

**Don't use r if:**
1. **Relationship is nonlinear** (r only measures linear!)
2. **Severe outliers present** (distort r)
3. **Categorical variables** (need different analysis)

**Always plot data first!** Don't rely on r alone.

## Describing Associations

**Template:** "There is a [direction] [form] [strength] association between [x] and [y]."

**Example:** "There is a strong positive linear association between study hours and test scores."

**Add:** "With no outliers" or "With one outlier at..."

## Association vs Relationship

**Association:** Variables vary together (correlation)

**Relationship:** Generic term (could be causal or not)

**Causation:** x directly causes changes in y

**Always distinguish!**

## Quick Reference

**DCFS:** Direction, Cluster, Form, Strength (+ outliers)

**Correlation r:**
- Range: -1 to 1
- Measures linear relationship only
- Unitless
- Affected by outliers

**Key:** **Correlation ≠ Causation**

**Remember:** Always make scatterplot first! r alone can be misleading. A nonlinear relationship might have r ≈ 0 but still be strongly related!
`
    }
  });
  console.log('✅ Filled Scatterplots and Correlation\n');

  // Topic 2: Least-Squares Regression
  await prisma.topic.update({
    where: { slug: 'least-squares-regression' },
    data: {
      textContent: `# Least-Squares Regression

## Regression Line

**Purpose:** Find best-fit line through scatterplot

**Equation:**

$$\\hat{y} = a + bx$$

Where:
- $$\\hat{y}$$ = predicted value of y
- b = slope
- a = y-intercept
- x = value of explanatory variable

## Least-Squares Criterion

**Least-squares regression line:** Line minimizing sum of squared residuals

**Residual:** Difference between observed and predicted

$$\\text{residual} = y - \\hat{y}$$

**Least-squares minimizes:** $$\\sum (y - \\hat{y})^2$$

**Why square?** Positive and negative deviations don't cancel

## Formulas for Slope and Intercept

**Slope:**

$$b = r \\frac{s_y}{s_x}$$

Where:
- r = correlation
- s_y = standard deviation of y
- s_x = standard deviation of x

**y-intercept:**

$$a = \\bar{y} - b\\bar{x}$$

**Key insight:** Line always passes through $$(\\bar{x}, \\bar{y})$$

## Example: Finding Regression Line

**Data:** Height (x) and weight (y) of 5 people

$$\\bar{x} = 68$$, $$s_x = 4$$  
$$\\bar{y} = 150$$, $$s_y = 20$$  
$$r = 0.8$$

**Slope:**

$$b = 0.8 \\times \\frac{20}{4} = 0.8 \\times 5 = 4$$

**Intercept:**

$$a = 150 - 4(68) = 150 - 272 = -122$$

**Equation:**

$$\\hat{y} = -122 + 4x$$

**Interpretation:** For each inch increase in height, predicted weight increases by 4 pounds.

## Interpreting Slope

**Slope b = change in $$\\hat{y}$$ per unit increase in x**

**Template:** "For each [1 unit] increase in [x], predicted [y] [increases/decreases] by [|b|] [y-units]."

**Example:** b = 4 in height/weight

"For each 1-inch increase in height, predicted weight increases by 4 pounds."

**Negative slope:** "decreases by..."

## Interpreting y-Intercept

**y-intercept a = predicted y when x = 0**

**Often meaningless!**
- Height = 0 → weight = -122 pounds? Nonsense!

**Only interpret if x = 0 is meaningful and within data range**

**Example where meaningful:** 
- y = test score, x = hours studied
- a = predicted score with 0 hours studying

## Making Predictions

**Substitute x into equation:**

$$\\hat{y} = a + bx$$

**Example:** Predict weight for height = 70 inches

$$\\hat{y} = -122 + 4(70) = -122 + 280 = 158 \\ \\text{pounds}$$

**Caution:** Extrapolation (predicting outside data range) is risky!

## Extrapolation

**Interpolation:** Predict within range of data ✓

**Extrapolation:** Predict outside range of data ⚠

**Problem with extrapolation:**
- Relationship may not continue
- May become nonlinear
- Other factors may matter

**Example:** Predicting weight for height = 100 inches
- Well outside typical range
- Relationship might not hold
- Prediction unreliable

## Calculator Method

**TI-83/84:**
1. Enter data in L1 (x) and L2 (y)
2. STAT → CALC → 8:LinReg(a+bx)
3. Read a, b, r, r²

**Result shows:**
- y = a + bx
- r (correlation)
- r² (coefficient of determination)

## Properties of Regression Line

**1. Passes through ($$\\bar{x}$$, $$\\bar{y}$$)**

**2. Sum of residuals = 0**
- Positive and negative balance out

**3. Unique** (only one least-squares line)

**4. Sensitive to outliers**
- One outlier can drastically change line

## Residuals

**Residual = observed - predicted = y - $$\\hat{y}$$**

**Positive residual:** Point above line (underestimate)  
**Negative residual:** Point below line (overestimate)  
**Zero residual:** Point on line (exact prediction)

**Example:** Actual weight = 160, predicted = 158
- Residual = 160 - 158 = 2 pounds
- Underestimated by 2 pounds

## Influential Points

**Influential point:** Removing it substantially changes regression line

**Usually:**
- Outliers in x-direction (far from $$\\bar{x}$$)
- Have high leverage (pull line toward them)

**Not all outliers are influential!**
- Outlier in y-direction but near $$\\bar{x}$$ → less influential

**Always identify and investigate influential points**

## Regression Toward the Mean

**Phenomenon:** Extreme x-values tend to predict less extreme y-values

**Why?** Correlation < 1 (not perfect relationship)

**Example:** Very tall parents tend to have shorter children (still tall, but less extreme)

**Slope formula explains:** $$b = r(s_y/s_x)$$
- Since r < 1, predicted change smaller than proportional

## Switching x and y

**Regression NOT symmetric!**

**Different lines:**
- Regression of y on x: $$\\hat{y} = a + bx$$
- Regression of x on y: $$\\hat{x} = c + dy$$

**These are NOT equivalent!**

**Use:** Predict y from x → use y on x line

## Common Mistakes

❌ Interpreting y-intercept when x = 0 meaningless  
❌ Extrapolating beyond data range  
❌ Confusing slope units  
❌ Thinking regression proves causation  
❌ Using regression when relationship nonlinear

## Causation Reminder

**Regression line can be used for prediction**

**Does NOT prove causation!**

**Strong relationship ≠ cause-and-effect**

**Need:** Controlled experiment to establish causation

## Quick Reference

**Equation:** $$\\hat{y} = a + bx$$

**Slope:** $$b = r(s_y/s_x)$$

**Intercept:** $$a = \\bar{y} - b\\bar{x}$$

**Line passes through:** $$(\\bar{x}, \\bar{y})$$

**Residual:** $$y - \\hat{y}$$

**Least-squares minimizes:** $$\\sum(y - \\hat{y})^2$$

**Remember:** Regression gives best prediction line but doesn't prove causation. Beware extrapolation! Always check for influential points.
`
    }
  });
  console.log('✅ Filled Least-Squares Regression\n');

  // Topic 3: Residuals and Residual Plots
  await prisma.topic.update({
    where: { slug: 'residuals-residual-plots' },
    data: {
      textContent: `# Residuals and Residual Plots

## What are Residuals?

**Residual:** Vertical distance from point to regression line

$$\\text{residual} = y - \\hat{y} = \\text{observed} - \\text{predicted}$$

**Positive residual:** Point above line (prediction too low)  
**Negative residual:** Point below line (prediction too high)

**Sum of residuals = 0** (always, for least-squares line)

## Residual Plot

**Residual Plot:** Scatterplot with x on horizontal axis, residuals on vertical axis

**Purpose:**
- Check if linear model appropriate
- Identify patterns suggesting problems
- Detect outliers

## Ideal Residual Plot

**Good residual plot shows:**

1. **Random scatter** around horizontal line at 0
2. **No clear pattern** (no curve, fan shape, etc.)
3. **Constant variability** across x-values
4. **No outliers** (points far from 0)

**Interpretation:** Linear model is appropriate

## Patterns Indicating Problems

**Curved pattern:**
- Linear model inappropriate
- Relationship is nonlinear
- **Solution:** Transform variables or use nonlinear model

**Fan shape (increasing or decreasing spread):**
- Non-constant variance (heteroscedasticity)
- Predictions less reliable for some x-values
- **Solution:** Transform variables

**Outliers:**
- Points far from horizontal band
- Check for errors or unusual cases
- Consider impact on regression line

## Example 1: Good Residual Plot

**Random scatter around 0, no pattern**

Residuals randomly scattered above and below 0 with roughly constant spread.

**Conclusion:** Linear model appropriate

## Example 2: Curved Residual Pattern

**Residuals show U-shape or inverted U**

Residuals form curved pattern (like parabola or inverted parabola).

**Conclusion:** Relationship is nonlinear, linear model inappropriate

**Action:** Try quadratic or other transformation

## Example 3: Fan Shape

**Spread increases (or decreases) with x**

Residuals spread out more (or less) as x increases, forming fan or cone shape.

**Conclusion:** Non-constant variance

**Action:** May need transformation (e.g., log)

## Standard Deviation of Residuals

**Measures:** Typical prediction error

$$s = \\sqrt{\\frac{\\sum(y - \\hat{y})^2}{n-2}}$$

**Interpretation:** "Typical distance of points from regression line is about s [y-units]."

**Smaller s → better predictions** (points closer to line)

**Note:** Denominator is n-2 (loses 2 df for slope and intercept)

## Using s for Predictions

**Rough prediction interval:**

$$\\hat{y} \\pm 2s$$

**Interpretation:** About 95% of predictions within 2s of actual value

**Example:** $$\\hat{y}$$ = 150 pounds, s = 10 pounds

Prediction interval ≈ 150 ± 20 = (130, 170) pounds

## Outliers in Residual Plot

**Outlier:** Residual far from 0

**Investigate:**
- Data entry error?
- Unusual case?
- Measurement error?

**Impact:**
- Can affect regression line
- May indicate different subgroup
- Consider separate analysis with/without outlier

## Checking Conditions for Regression

**Use residual plot to check:**

**1. Linearity:** Random scatter (no curve)

**2. Equal variance:** Constant spread across x-values

**3. Independence:** (Can't check from plot alone, depends on data collection)

**4. Normality:** (Check with histogram or normal probability plot of residuals)

**Acronym:** LINE (Linearity, Independence, Normality, Equal variance)

## Histogram of Residuals

**Purpose:** Check if residuals approximately normal

**Look for:**
- Roughly symmetric
- Bell-shaped
- No severe outliers

**Note:** Normality less critical for large samples (CLT)

## Normal Probability Plot of Residuals

**Purpose:** Check normality of residuals

**Good plot:**
- Points follow straight line
- Little deviation from line

**Bad plot:**
- Strong curvature
- Many points far from line

**Interpretation:** If roughly linear, normality assumption reasonable

## Influential Points

**Identified in residual plot:**
- Large residual AND far from $$\\bar{x}$$ in x-direction

**Test influence:**
1. Calculate regression with point
2. Calculate regression without point
3. Compare: Big change? Point is influential

**Action:** Report both analyses, investigate why point is unusual

## Comparing Models

**Use residual plots to compare different models:**

**Model 1 (linear):** Residuals show pattern  
**Model 2 (quadratic):** Residuals random scatter

**Conclusion:** Model 2 better (quadratic fits better than linear)

**Also compare:** Standard deviation of residuals (s)
- Smaller s = better predictions

## Calculator Methods

**TI-83/84:**

**Get residuals:**
1. Run LinReg (stores residuals automatically in RESID list)
2. 2nd STAT (LIST) → RESID

**Plot residuals:**
1. STAT PLOT → Plot1
2. Type: Scatterplot
3. Xlist: L1, Ylist: RESID
4. ZOOM → 9:ZoomStat

## Common Mistakes

❌ Not checking residual plot (just looking at r²)  
❌ Using linear model when residuals show curve  
❌ Ignoring fan shape in residuals  
❌ Not investigating outliers  
❌ Confusing residuals with errors

## Residuals vs Errors

**Residual:** Observed - Predicted (y - $$\\hat{y}$$)
- Calculated from sample
- Can compute

**Error:** Observed - True (y - E(y))
- Theoretical (unknown)
- Can't compute (don't know true relationship)

**Residuals estimate errors**

## Transformations

**If residual plot shows problems:**

**For curvature:**
- Try log(y), √y, or x²
- Re-fit model with transformed variable
- Check new residual plot

**For fan shape:**
- Try log(y) transformation
- Stabilizes variance

**Goal:** Residuals with no pattern and constant spread

## Quick Reference

**Residual:** $$y - \\hat{y}$$

**Good residual plot:**
- Random scatter around 0
- No pattern
- Constant spread

**s:** Typical prediction error

**Check conditions:** LINE (Linearity, Independence, Normality, Equal variance)

**Problems to look for:**
- Curved pattern → nonlinear
- Fan shape → non-constant variance
- Outliers → investigate

**Remember:** Always examine residual plot! It reveals whether linear model is appropriate and highlights potential problems. Don't rely on correlation alone!
`
    }
  });
  console.log('✅ Filled Residuals and Residual Plots\n');

  // Topic 4: Coefficient of Determination
  await prisma.topic.update({
    where: { slug: 'coefficient-determination' },
    data: {
      textContent: `# Coefficient of Determination (r²)

## What is r²?

**Coefficient of Determination (r²):** Proportion of variability in y explained by linear relationship with x

**Formula:**

$$r^2 = (r)^2$$

Where r is the correlation coefficient

**Range:** 0 ≤ r² ≤ 1 (or 0% to 100%)

## Interpreting r²

**Template:** "About [r² × 100]% of the variability in [y] is explained by the linear relationship with [x]."

**Example:** r² = 0.64

"About 64% of the variability in test scores is explained by the linear relationship with study hours."

**Remaining variability (1 - r²):**
- Due to other variables
- Random variation
- Unexplained by this model

## Example 1: Calculating r²

**Height and weight:** r = 0.8

$$r^2 = (0.8)^2 = 0.64$$

**Interpretation:** "About 64% of the variability in weight is explained by the linear relationship with height. The remaining 36% is due to other factors."

## r² vs r

**r (correlation):**
- Shows strength AND direction
- Range: -1 to 1
- Negative values meaningful

**r² (coefficient of determination):**
- Shows strength only (no direction)
- Range: 0 to 1
- Always positive
- Easier to interpret as percentage

**From r² cannot determine if relationship positive or negative!**
- Need to also report r or slope

## What r² Means

**r² = 0.90:** Model explains 90% of variability (excellent fit)

**r² = 0.70:** Model explains 70% of variability (good fit)

**r² = 0.50:** Model explains 50% of variability (moderate fit)

**r² = 0.25:** Model explains 25% of variability (weak fit)

**r² = 0:** Model explains none of variability (no linear relationship)

**Note:** These are rough guidelines, context dependent!

## Visualizing r²

**Think of variability in y:**

**Total variability:** How much y-values spread out from $$\\bar{y}$$

**Explained variability:** How much $$\\hat{y}$$ varies (due to linear relationship)

**Unexplained variability:** How much points deviate from line (residuals)

$$\\text{Total} = \\text{Explained} + \\text{Unexplained}$$

$$r^2 = \\frac{\\text{Explained}}{\\text{Total}}$$

## Formal Definition

$$r^2 = \\frac{\\sum(\\hat{y} - \\bar{y})^2}{\\sum(y - \\bar{y})^2}$$

**Numerator:** Variability in predictions  
**Denominator:** Total variability in y

**Equivalently:**

$$r^2 = 1 - \\frac{\\sum(y - \\hat{y})^2}{\\sum(y - \\bar{y})^2}$$

$$r^2 = 1 - \\frac{\\text{Unexplained}}{\\text{Total}}$$

## Example 2: Detailed Calculation

**Data:** 5 points with $$\\bar{y}$$ = 10

**Total variability:** $$\\sum(y - \\bar{y})^2$$ = 100

**Unexplained (residuals):** $$\\sum(y - \\hat{y})^2$$ = 25

$$r^2 = 1 - \\frac{25}{100} = 1 - 0.25 = 0.75$$

**Interpretation:** 75% of variability explained, 25% unexplained

## What r² Does NOT Mean

**❌ r² is NOT probability**
- Not "probability model is correct"
- Not "probability prediction is right"

**❌ r² does NOT prove causation**
- High r² doesn't mean x causes y
- Could be coincidence or confounding

**❌ r² alone doesn't guarantee good model**
- Could have high r² but residuals show pattern
- Always check residual plot!

**❌ r² doesn't tell about prediction accuracy for individuals**
- Use s (standard error) for that

## When is r² High?

**High r² occurs when:**
1. Strong linear relationship (|r| close to 1)
2. Points close to regression line
3. Little unexplained variability
4. x is good predictor of y

**Does NOT require:**
- Large sample size (can have high r² with small n)
- Causation
- Practical importance

## When is r² Low?

**Low r² occurs when:**
1. Weak linear relationship
2. Lots of scatter around line
3. Much unexplained variability
4. x is poor predictor of y

**Possible reasons:**
- No relationship exists
- Relationship is nonlinear
- Other variables more important
- High natural variability in y

## Comparing Models

**Use r² to compare models on same data:**

**Model 1:** Height predicting weight, r² = 0.64  
**Model 2:** Age predicting weight, r² = 0.45

**Conclusion:** Height explains more variability (better predictor)

**Caution:** Only compare r² for same response variable!

## Adjusted r²

**For multiple regression** (multiple explanatory variables)

**Problem:** Adding variables always increases r² (even useless variables!)

**Adjusted r²:** Penalizes for number of variables

$$r_{adj}^2 = 1 - \\frac{(1-r^2)(n-1)}{n-k-1}$$

Where k = number of explanatory variables

**Use:** Compare models with different numbers of variables

## Relationship to Standard Error

**Related concepts:**

**r²:** Proportion of variability explained

**s:** Typical prediction error (in original units)

**Both measure model fit:**
- High r² ↔ small s
- Low r² ↔ large s

**s often more useful for predictions** (gives actual error magnitude)

## Common Mistakes

❌ Saying "r² is probability"  
❌ Thinking high r² proves causation  
❌ Using r² alone without checking residual plot  
❌ Comparing r² across different response variables  
❌ Not reporting direction of relationship (r² loses sign)

## Practical Significance

**Statistical vs Practical:**

**High r² in context:**
- Social sciences: r² > 0.50 often considered good
- Physical sciences: r² > 0.90 often expected
- Individual predictions: Even r² = 0.90 may not be precise enough

**Consider:**
- What's typical in your field?
- What's needed for practical use?
- What's the cost of prediction errors?

## Reporting Results

**Complete report includes:**

1. **Correlation (r):** Shows direction and strength
2. **r²:** Shows percent variability explained
3. **Equation:** $$\\hat{y} = a + bx$$
4. **Standard error (s):** Typical prediction error
5. **Residual plot:** Visual check of model appropriateness

**Don't report r² alone!**

## Quick Reference

**r²:** Proportion of variability in y explained by x

**Formula:** r² = (correlation)²

**Range:** 0 to 1 (0% to 100%)

**Interpretation:** "[r² × 100]% of variability in y explained by linear relationship with x"

**High r²:** Good fit, points close to line  
**Low r²:** Poor fit, much unexplained variability

**Remember:** r² measures how well x predicts y, but doesn't prove causation. Always check residual plot! High r² alone doesn't guarantee good model.
`
    }
  });
  console.log('✅ Filled Coefficient of Determination\n');

  // Topic 5: Transformations to Achieve Linearity
  await prisma.topic.update({
    where: { slug: 'transformations-linearity' },
    data: {
      textContent: `# Transformations to Achieve Linearity

## Why Transform?

**Problem:** Many relationships are nonlinear

**Solution:** Transform one or both variables to make relationship linear

**Benefits:**
- Can use linear regression tools
- Easier interpretation
- Better predictions

## When to Transform

**Indicators need transformation:**
1. Scatterplot shows curve (not line)
2. Residual plot shows pattern (not random)
3. Low r² despite clear relationship

**Don't transform if:**
- Relationship already linear
- Residual plot looks good

## Common Transformations

**For y:**
- log(y): Exponential growth/decay
- √y: Moderate curve
- 1/y: Inverse relationship

**For x:**
- log(x): Logarithmic curve
- x²: Quadratic relationship
- √x: Moderate curve

**Both:**
- log(y) vs log(x): Power relationship

## Exponential Model

**Original relationship:** $$y = ab^x$$

**Curved scatterplot, exponential growth/decay**

**Transform:** Take log of y

**Becomes linear:** $$\\log(y) = \\log(a) + x\\log(b)$$

**Regression:** log(y) on x gives linear relationship

**Example:** Population growth, compound interest, radioactive decay

## Example 1: Exponential Transformation

**Bacteria population over time:**

Original data shows exponential growth (curved)

**Transform:** Calculate log(population) for each time

**New scatterplot:** log(population) vs time is linear!

**Regression:** $$\\log(\\hat{y}) = 2 + 0.3x$$

**Back-transform for predictions:**

$$\\hat{y} = 10^{2 + 0.3x}$$

## Power Model

**Original relationship:** $$y = ax^p$$

**Curved relationship**

**Transform:** Take log of both

**Becomes linear:** $$\\log(y) = \\log(a) + p\\log(x)$$

**Regression:** log(y) on log(x) gives linear relationship

**Example:** Area vs radius, metabolic rate vs body mass

## Example 2: Power Transformation

**Planet orbital period vs distance from sun:**

Both variables on logarithmic scale → linear!

**Regression:** $$\\log(\\text{period}) = a + b\\log(\\text{distance})$$

**Slope b ≈ 1.5** (Kepler's third law: $$p \\propto d^{1.5}$$)

## Square Root and Squaring

**√y transformation:**
- Moderate upward curve
- Spread-increasing pattern

**x² transformation:**
- Quadratic relationship (parabola)
- But limited to one side

**Example:** Free-fall distance (d) vs time (t)

$$d = \\frac{1}{2}gt^2$$ suggests regress d on t²

## Choosing the Right Transformation

**Trial and error approach:**
1. Try transformation
2. Make scatterplot of transformed data
3. Check residual plot
4. Check r²
5. If not linear, try different transformation

**Guided approach:**
- Exponential pattern → log(y)
- Power relationship → log-log
- Quadratic → x²
- Fan shape in residuals → log(y)

## Interpreting Transformed Models

**Log(y) on x:**

**Slope interpretation:** "For each unit increase in x, y is multiplied by $$10^b$$"

**Example:** Slope = 0.301 in log(population) vs time

"Each year, population multiplies by $$10^{0.301} \\approx 2$$"

(Population doubles each year)

**Log(y) on log(x):**

**Slope interpretation:** "A 1% increase in x is associated with approximately b% increase in y"

## Back-Transformation

**After fitting model on transformed data:**

**Make predictions on transformed scale, then back-transform**

**Example:** Model is $$\\log(\\hat{y}) = 2 + 0.3x$$

For x = 10:

$$\\log(\\hat{y}) = 2 + 0.3(10) = 5$$

$$\\hat{y} = 10^5 = 100,000$$

**Don't just transform predictions after the fact!**

## Checking the Transformation

**Good transformation produces:**
1. Linear scatterplot
2. Random residual plot
3. Higher r²
4. Roughly constant spread

**Compare before/after:**
- Original r² vs transformed r²
- Original residual plot vs transformed residual plot

## Multiple Transformations

**Sometimes try several:**

**Example:** Comparing transformations for curved data
- log(y) vs x: r² = 0.85
- √y vs x: r² = 0.92
- y vs x²: r² = 0.78

**Choose:** √y vs x (highest r², simplest)

## Common Patterns and Transformations

| Pattern | Try |
|---------|-----|
| Exponential growth/decay | log(y) |
| Power relationship | log(y) and log(x) |
| Quadratic (parabola) | x² |
| Moderate upward curve | √y or √x |
| Spread increases with y | log(y) |

## Residual Plot After Transformation

**Must check!** Transformation successful if:
- No pattern in residuals
- Random scatter around 0
- Constant spread

**If still see pattern:** Try different transformation

## Linearizable vs Non-linearizable

**Linearizable:** Can be made linear with transformation
- Exponential: y = ab^x
- Power: y = ax^p
- Quadratic: y = a + bx + cx²

**Non-linearizable:** Cannot be easily linearized
- Some periodic functions
- Complex curves
- May need nonlinear regression

## Common Mistakes

❌ Not checking residual plot after transformation  
❌ Back-transforming incorrectly  
❌ Transforming when already linear  
❌ Misinterpreting slope of transformed model  
❌ Comparing r² before and after (different y variable!)

## Practical Considerations

**Pros of transformation:**
- Use simple linear methods
- Often theoretically motivated
- Can improve predictions

**Cons of transformation:**
- Harder to interpret
- Must back-transform for predictions
- Not all relationships linearizable

**Alternative:** Modern nonlinear regression (beyond AP Stats)

## Example 3: Complete Transformation

**Original:** y vs x is curved (r² = 0.40, residuals show pattern)

**Transform:** Use log(y)

**New:** log(y) vs x is linear (r² = 0.95, random residuals)

**Equation:** $$\\log(\\hat{y}) = 1.5 + 0.2x$$

**Interpretation:** "Each unit increase in x multiplies y by $$10^{0.2} \\approx 1.58$$"

**For prediction at x = 10:**

$$\\log(\\hat{y}) = 1.5 + 0.2(10) = 3.5$$

$$\\hat{y} = 10^{3.5} \\approx 3162$$

## Quick Reference

**Exponential (y = ab^x):** Use log(y) vs x

**Power (y = ax^p):** Use log(y) vs log(x)

**Quadratic:** Use y vs x²

**Goal:** Linear scatterplot, random residuals, high r²

**Check:** Always examine residual plot of transformed data

**Interpret carefully:** Slopes mean different things after transformation

**Remember:** Transform to fix nonlinearity, but always check if transformation worked! Linear models are powerful when applied to appropriately transformed data.
`
    }
  });
  console.log('✅ Filled Transformations to Achieve Linearity\n');

  // Topic 6: Inference for Regression
  await prisma.topic.update({
    where: { slug: 'inference-regression' },
    data: {
      textContent: `# Inference for Regression

## Beyond Description

**So far:** Described relationship in sample data

**Now:** Make inferences about population relationship
- Confidence interval for slope
- Hypothesis test for slope
- Prediction intervals

## Conditions for Inference (LINE)

**L - Linear relationship:** Check scatterplot

**I - Independent observations:** Random sample, n < 10%N

**N - Normal distribution of residuals:** Check histogram/normal plot of residuals

**E - Equal variance:** Check residual plot (constant spread)

**Must check all before inference!**

## Slope as Parameter

**Sample:** b = slope from data

**Population:** β (beta) = true slope in population

**Question:** Is there really a relationship, or did we just see pattern by chance?

## Hypothesis Test for Slope

**Hypotheses:**
- H₀: β = 0 (no linear relationship)
- Hₐ: β ≠ 0 (linear relationship exists)

**If β = 0:** x has no effect on y

**Test statistic:**

$$t = \\frac{b - 0}{SE_b}$$

**df = n - 2**

**SE_b (standard error of slope):** Provided by calculator/computer

## Example 1: Test for Slope

**Height (x) and weight (y), n = 25:**

b = 4, SE_b = 1.2

**STATE:**
- β = true slope
- H₀: β = 0
- Hₐ: β ≠ 0
- α = 0.05

**PLAN:**
- t-test for slope
- Conditions: LINE all checked ✓

**DO:**

$$t = \\frac{4 - 0}{1.2} \\approx 3.33$$

df = 25 - 2 = 23

P-value = 2 × P(t > 3.33) ≈ 0.003

**CONCLUDE:**
P-value < 0.05, reject H₀. Significant linear relationship between height and weight.

## Confidence Interval for Slope

**Formula:**

$$b \\pm t^* SE_b$$

**df = n - 2**

**Interpretation:** "We are C% confident the true slope is between [L] and [U]."

**Meaning:** For each unit increase in x, y changes by between L and U units (on average in population)

## Example 2: CI for Slope

**Same data:** b = 4, SE_b = 1.2, n = 25

**95% CI:**

df = 23, t* ≈ 2.069

$$CI = 4 \\pm 2.069(1.2) = 4 \\pm 2.48 = (1.52, 6.48)$$

**Interpretation:** "We are 95% confident that for each additional inch of height, weight increases by between 1.52 and 6.48 pounds on average."

## Relationship Between Test and CI

**For two-sided test at α:**

**Check if (1-α) CI contains 0:**
- If 0 in CI → fail to reject H₀
- If 0 not in CI → reject H₀

**Example:** 95% CI is (1.52, 6.48)
- Doesn't contain 0
- Reject H₀: β = 0 at α = 0.05

## Prediction Interval

**Different from confidence interval!**

**Confidence interval:** For mean response  
**Prediction interval:** For individual response

**Prediction interval is wider** (more uncertainty predicting individual)

**Formula (approximate):**

$$\\hat{y} \\pm t^* s$$

Where s = standard deviation of residuals

**More precise formula accounts for:**
- Distance of x from $$\\bar{x}$$ (farther = wider interval)
- Sample size

## Example 3: Prediction Interval

**Predict weight for height = 70:**

$$\\hat{y}$$ = 158, s = 10, n = 25

**95% prediction interval (rough):**

$$158 \\pm 2.069(10) = 158 \\pm 20.69 = (137.31, 178.69)$$

**Interpretation:** "We predict an individual with height 70 inches will weigh between 137 and 179 pounds with 95% confidence."

## Standard Error of Slope

**Formula:**

$$SE_b = \\frac{s}{\\sqrt{\\sum(x - \\bar{x})^2}}$$

Where s = standard deviation of residuals

**Factors making SE_b smaller:**
1. Smaller s (points closer to line)
2. Larger sample size n
3. More spread in x-values

**Smaller SE_b → narrower CI → more precise estimate**

## Checking Conditions

**Linearity:**
- Scatterplot roughly linear
- Residual plot shows no curve

**Independence:**
- Random sample
- No time trends
- Each observation independent

**Normality:**
- Histogram of residuals roughly normal
- Normal probability plot roughly linear
- Less critical for large n (CLT)

**Equal Variance:**
- Residual plot shows constant spread
- No fan shape

## What if Conditions Not Met?

**Nonlinear:** Transform variables or use nonlinear methods

**Not normal (small n):** Be cautious with inference

**Not equal variance:** Consider transformation or weighted regression

**Not independent:** Use time series or other methods

**Don't ignore violations!** Inference may be invalid

## Prediction vs Confidence Interval

**Confidence Interval for Mean Response:**
- "Average y for all individuals with x = x₀"
- Narrower
- Use: Policy decisions, understanding average effect

**Prediction Interval for Individual:**
- "Single y value for one individual with x = x₀"
- Wider (includes individual variability)
- Use: Predicting specific outcome

**Always wider:** Prediction interval > confidence interval

## Multiple Regression Preview

**So far:** One explanatory variable

**Multiple regression:** Several explanatory variables

$$\\hat{y} = a + b_1x_1 + b_2x_2 + ... + b_kx_k$$

**Can test each slope:** Does this variable help predict y (controlling for others)?

**Beyond AP Stats** but important to know exists

## Common Mistakes

❌ Not checking LINE conditions  
❌ Using normal instead of t-distribution  
❌ Confusing prediction and confidence intervals  
❌ Using df = n instead of n - 2  
❌ Making inference when conditions violated

## Practical Significance

**Statistical significance (P < 0.05) doesn't mean practical importance**

**Example:** Slope = 0.01, P = 0.001
- Statistically significant
- But is 0.01 change per unit practically meaningful?

**Consider:**
- Effect size (magnitude of slope)
- Context
- Practical implications

## Quick Reference

**Test for slope:** $$t = \\frac{b}{SE_b}$$, df = n - 2

**CI for slope:** $$b \\pm t^* SE_b$$

**Conditions:** LINE (Linear, Independent, Normal, Equal variance)

**Prediction interval:** Wider than confidence interval

**0 in CI for slope?** → No significant relationship

**Remember:** Check LINE conditions before inference! Inference lets us extend conclusions beyond our sample to the broader population, but only if conditions are met.
`
    }
  });
  console.log('✅ Filled Inference for Regression\n');

  console.log('\n🎉🎉🎉 AP STATISTICS COMPLETE! 🎉🎉🎉');
  console.log('✅ All 34 AP Statistics topics filled with comprehensive content!');
  console.log('\n📊 FINAL SUMMARY:');
  console.log('✅ Exploring Data: 6/6 topics');
  console.log('✅ Sampling & Experimentation: 4/4 topics');
  console.log('✅ Probability: 7/7 topics');
  console.log('✅ Confidence Intervals: 5/5 topics');
  console.log('✅ Hypothesis Testing: 6/6 topics');
  console.log('✅ Regression & Correlation: 6/6 topics');
  console.log('\n🎊 Progress: 34/34 AP Statistics topics complete (100%)');
  console.log('\n🏆 THREE COURSES NOW 100% COMPLETE:');
  console.log('   • SAT Prep: 38/38 topics ✅');
  console.log('   • ACT Prep: 29/29 topics ✅');
  console.log('   • AP Statistics: 34/34 topics ✅');
  console.log('   • Total: 101 comprehensive topics filled! 🚀');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
