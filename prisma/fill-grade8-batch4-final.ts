import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 8 Math topics - Batch 4 (Final - 4 topics)...\n');

  // Topic 1: Rotations and Dilations
  await prisma.topic.updateMany({
    where: {
      slug: 'rotations-dilations'
    },
    data: {
      textContent: `# Rotations and Dilations

Transformations continue with rotations (turns) and dilations (resizing)! While translations and reflections move shapes, rotations spin them and dilations change their size. These transformations are essential for geometry, art, and computer graphics.

---

## Rotations (Turns)

A **rotation** turns a shape around a fixed point called the center of rotation.

**Think of it as:**
- Spinning a shape
- Turning a clock hand
- Rotating a wheel

**Key elements:**
- **Center of rotation** - fixed point (often the origin)
- **Angle of rotation** - how far to turn (in degrees)
- **Direction** - clockwise or counterclockwise

**Properties:**
- Shape and size stay the same
- Distance from center stays the same
- Orientation changes (shape turns)

---

## Rotation Rules (Around Origin)

**90° Counterclockwise:**
(x, y) → (-y, x)

**90° Clockwise (or 270° Counterclockwise):**
(x, y) → (y, -x)

**180° (either direction - same result):**
(x, y) → (-x, -y)

**270° Counterclockwise (or 90° Clockwise):**
(x, y) → (y, -x)

**360° (Full turn):**
(x, y) → (x, y) - back to original!

---

## Performing Rotations

**Example 1:** Rotate point A(3, 2) by 90° counterclockwise around the origin.

**Solution:**
Rule: (x, y) → (-y, x)
A(3, 2) → A'(-2, 3)

**Answer: A'(-2, 3)**

**Example 2:** Rotate point B(4, -1) by 180° around the origin.

**Solution:**
Rule: (x, y) → (-x, -y)
B(4, -1) → B'(-4, 1)

**Answer: B'(-4, 1)**

**Example 3:** Rotate triangle ABC where A(2, 1), B(5, 1), C(3, 4) by 90° clockwise.

**Solution:**
Rule for 90° clockwise: (x, y) → (y, -x)

A(2, 1) → A'(1, -2)
B(5, 1) → B'(1, -5)
C(3, 4) → C'(4, -3)

**Answer: A'(1, -2), B'(1, -5), C'(4, -3)**

---

## Understanding Rotation Direction

**Counterclockwise (CCW):**
- Standard positive direction
- Like going from x-axis to y-axis
- Most common in mathematics

**Clockwise (CW):**
- Negative direction
- Like clock hands move
- 90° CW = 270° CCW

**Tip:** If not specified, assume counterclockwise!

---

## Visualizing Rotations

**90° Counterclockwise pattern:**
- Quadrant I → Quadrant II
- Quadrant II → Quadrant III
- Quadrant III → Quadrant IV
- Quadrant IV → Quadrant I

**180° pattern:**
- Quadrant I → Quadrant III
- Quadrant II → Quadrant IV
- Quadrant III → Quadrant I
- Quadrant IV → Quadrant II

**Think:** Each 90° rotation moves the point to the next quadrant counterclockwise!

---

## Dilations (Resizing)

A **dilation** changes the size of a shape by a scale factor.

**Think of it as:**
- Zooming in or out
- Enlarging or reducing a photo
- Stretching or shrinking

**Key elements:**
- **Center of dilation** - fixed point (often the origin)
- **Scale factor (k)** - how much to resize

**Properties:**
- Shape stays the same (similar figures)
- Size changes
- Distance from center multiplies by scale factor

---

## Scale Factor (k)

**k > 1:** Enlargement (bigger)
- k = 2 means double the size
- k = 3 means triple the size

**k = 1:** No change (same size)

**0 < k < 1:** Reduction (smaller)
- k = 1/2 means half the size
- k = 0.5 means half the size

**k < 0:** Enlargement/reduction AND rotation 180°
- Rarely used in Grade 8

---

## Dilation Rules (Center at Origin)

**Rule:** (x, y) → (kx, ky)

Where k is the scale factor.

**Multiply both coordinates by k!**

---

## Performing Dilations

**Example 1:** Dilate point P(3, 4) by scale factor k = 2 with center at origin.

**Solution:**
Rule: (x, y) → (2x, 2y)
P(3, 4) → P'(6, 8)

**Answer: P'(6, 8)**

Distance from origin doubled!

**Example 2:** Dilate point Q(6, -3) by scale factor k = 1/3 with center at origin.

**Solution:**
Rule: (x, y) → (x/3, y/3)
Q(6, -3) → Q'(2, -1)

**Answer: Q'(2, -1)**

Distance from origin divided by 3!

**Example 3:** Dilate triangle ABC where A(1, 2), B(3, 2), C(2, 4) by scale factor k = 3.

**Solution:**
Rule: (x, y) → (3x, 3y)

A(1, 2) → A'(3, 6)
B(3, 2) → B'(9, 6)
C(2, 4) → C'(6, 12)

**Answer: A'(3, 6), B'(9, 6), C'(6, 12)**

Triangle is 3 times larger!

---

## Finding Scale Factor

**Given original and image, find k:**

**Formula:** k = (image coordinate)/(original coordinate)

**Example:** Point A(4, 6) dilates to A'(2, 3). Find scale factor.

**Solution:**
k = 2/4 = 1/2 (using x-coordinates)
or k = 3/6 = 1/2 (using y-coordinates)

**Answer: k = 1/2** (reduction to half size)

---

## Properties of Dilations

**What stays the same:**
- **Shape** - angles stay equal
- **Ratios** - proportions preserved
- **Parallelism** - parallel lines stay parallel

**What changes:**
- **Size** - lengths multiply by |k|
- **Perimeter** - multiplies by |k|
- **Area** - multiplies by k²

**Example:** Triangle with area 10 cm² dilated by k = 3
New area = 10 × 3² = 10 × 9 = 90 cm²

---

## Combining Rotations and Dilations

**Example:** Point A(2, 3) is rotated 90° counterclockwise, then dilated by k = 2. Find final position.

**Solution:**

**Step 1:** Rotation (x, y) → (-y, x)
A(2, 3) → (-3, 2)

**Step 2:** Dilation (x, y) → (2x, 2y)
(-3, 2) → (-6, 4)

**Answer: Final position (-6, 4)**

**Note:** Order matters! Different order = different result!

---

## Rigid vs. Non-Rigid Transformations

**Rigid Transformations (Isometries):**
- Preserve size AND shape
- Figures are CONGRUENT
- Examples: Translation, Reflection, Rotation

**Non-Rigid Transformations:**
- Preserve shape but NOT size
- Figures are SIMILAR (not congruent)
- Example: Dilation

---

## Real-World Applications

**Rotations:**

**Clock hands:** Rotating around center
- Hour hand: 360° in 12 hours = 30°/hour
- Minute hand: 360° in 60 minutes = 6°/minute

**Wheels and gears:** Spinning machinery

**Ferris wheels:** Rotating around axis

**Dance/gymnastics:** Spinning moves

**Navigation:** Compass directions

**Dilations:**

**Photography:** Zoom in/out
- Digital zoom = dilation with k > 1
- Zoom out = dilation with k < 1

**Maps:** Scale drawings
- 1 inch = 10 miles means k = 1/(10×63360)

**Architecture:** Scale models
- 1:100 scale means k = 1/100

**Computer graphics:** Resizing images

**Photocopiers:** Enlarging/reducing documents

---

## Rotation Symmetry

Some shapes look the same after rotation!

**Rotation symmetry:** Shape looks unchanged after rotating less than 360°

**Order of symmetry:** How many times it looks the same in one full turn

**Examples:**
- Square: 90° rotation looks same (order 4)
- Equilateral triangle: 120° rotation looks same (order 3)
- Regular hexagon: 60° rotation looks same (order 6)
- Circle: Any rotation looks same (infinite order)

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Mixing up rotation rules
- Wrong: 90° CCW is (y, x)
- Right: 90° CCW is (-y, x)

❌ **Mistake 2:** Forgetting negative signs in rotations
- 180° rotation changes BOTH signs!
- (3, 4) → (-3, -4), not (3, 4)

❌ **Mistake 3:** Not multiplying BOTH coordinates in dilation
- Wrong: (2, 3) with k=2 → (4, 3)
- Right: (2, 3) with k=2 → (4, 6)

❌ **Mistake 4:** Confusing enlargement and reduction
- k > 1 makes it BIGGER
- 0 < k < 1 makes it SMALLER

❌ **Mistake 5:** Wrong order in combined transformations
- Order matters! Rotation then dilation ≠ dilation then rotation

---

## Problem-Solving Strategy

**For Rotations:**
1. Identify center and angle
2. Determine direction (CW or CCW)
3. Apply correct rule
4. Plot new points

**For Dilations:**
1. Identify center and scale factor
2. Determine if enlargement or reduction
3. Multiply coordinates by k
4. Plot new points

**For Combined:**
1. Do transformations in order given
2. Use result from first as input to second
3. Check final answer

---

## Quick Reference

**Rotation Rules (around origin):**
- 90° CCW: (x, y) → (-y, x)
- 90° CW: (x, y) → (y, -x)
- 180°: (x, y) → (-x, -y)
- 270° CCW: (x, y) → (y, -x)

**Dilation Rule (center at origin):**
- (x, y) → (kx, ky)
- k > 1: enlargement
- 0 < k < 1: reduction
- k = 1: no change

**Properties:**
- Rotations: preserve size and shape (congruent)
- Dilations: preserve shape only (similar)

---

## Practice Tips

**Tip 1:** Draw it!
- Sketch before calculating
- Visualize the transformation
- Check if answer makes sense

**Tip 2:** Use reference points
- Origin (0,0) never moves in rotations/dilations centered there
- Points on axes are easier to track

**Tip 3:** Check with distance formula
- After rotation, distance from center should be same
- After dilation, distance should multiply by k

**Tip 4:** Remember the sign patterns
- Each rotation rule has specific sign pattern
- Practice until automatic!

---

## Summary

**Rotations** turn shapes around a point:
- Common angles: 90°, 180°, 270°
- Direction: clockwise or counterclockwise
- Preserve size and shape (congruent)
- Rules depend on angle and direction

**Dilations** resize shapes from a center:
- Scale factor k determines new size
- k > 1: enlargement
- 0 < k < 1: reduction
- Preserve shape, not size (similar)
- Rule: multiply coordinates by k

**Both are essential transformations:**
- Rotations for spinning and turning
- Dilations for scaling and resizing
- Together: complete our transformation toolkit!

Understanding rotations and dilations completes the study of geometric transformations and connects to similarity, congruence, and real-world applications!`
    }
  });
  console.log('✅ Updated: rotations-dilations');

  // Topic 2: Congruence and Similarity
  await prisma.topic.updateMany({
    where: {
      slug: 'congruence-similarity'
    },
    data: {
      textContent: `# Congruence and Similarity

What makes two shapes "the same" or "alike"? Congruence and similarity help us compare geometric figures! These concepts connect transformations to real-world applications in construction, design, and nature.

---

## Congruence

**Congruent figures** have the same size AND the same shape.

**Think of it as:**
- Exact copies
- Perfect matches
- One could fit exactly on top of the other

**Symbol:** ≅ (is congruent to)

**Example:** Triangle ABC ≅ Triangle DEF

**What this means:**
- All corresponding sides are equal
- All corresponding angles are equal
- One is a perfect copy of the other

---

## Properties of Congruent Figures

**For congruent figures:**

**Corresponding sides are equal:**
- If triangle ABC ≅ triangle DEF, then:
- AB = DE
- BC = EF
- AC = DF

**Corresponding angles are equal:**
- ∠A = ∠D
- ∠B = ∠E
- ∠C = ∠F

**Same perimeter and area:**
- Perimeters are equal
- Areas are equal

---

## Rigid Transformations and Congruence

**Rigid transformations** preserve size and shape:
- **Translation** (slide)
- **Reflection** (flip)
- **Rotation** (turn)

**Key fact:** If you can transform one figure into another using ONLY rigid transformations, the figures are CONGRUENT!

**Example:** Triangle A can be reflected and rotated to match Triangle B → They are congruent!

---

## Testing for Congruence

**For triangles, you don't need to check EVERYTHING!**

**Triangle Congruence Shortcuts:**

**SSS (Side-Side-Side):**
- All three sides equal
- Triangles are congruent

**SAS (Side-Angle-Side):**
- Two sides and the included angle equal
- Triangles are congruent

**ASA (Angle-Side-Angle):**
- Two angles and the included side equal
- Triangles are congruent

**AAS (Angle-Angle-Side):**
- Two angles and a non-included side equal
- Triangles are congruent

**HL (Hypotenuse-Leg) - Right Triangles Only:**
- Hypotenuse and one leg equal
- Right triangles are congruent

**NOT a shortcut:**
- **AAA** - Same angles, but could be different sizes!
- **SSA** - Ambiguous (except HL for right triangles)

---

## Examples of Congruence

**Example 1:** Are these triangles congruent?
Triangle 1: sides 3, 4, 5
Triangle 2: sides 3, 4, 5

**Solution:**
All three sides match → SSS
**Answer: Yes, congruent by SSS**

**Example 2:** Are these triangles congruent?
Triangle 1: sides 6, 8; included angle 50°
Triangle 2: sides 6, 8; included angle 50°

**Solution:**
Two sides and included angle match → SAS
**Answer: Yes, congruent by SAS**

**Example 3:** Are these triangles congruent?
Triangle 1: angles 40°, 60°, 80°; side 10
Triangle 2: angles 40°, 60°, 80°; side 5

**Solution:**
Same angles but different side lengths!
**Answer: No, NOT congruent (they're similar though!)**

---

## Similarity

**Similar figures** have the same shape but NOT necessarily the same size.

**Think of it as:**
- One is a resized version of the other
- Same proportions
- Photographs of different sizes

**Symbol:** ~ (is similar to)

**Example:** Triangle ABC ~ Triangle DEF

**What this means:**
- Corresponding angles are equal
- Corresponding sides are proportional (same ratio)
- One is an enlarged or reduced copy

---

## Properties of Similar Figures

**For similar figures:**

**Corresponding angles are equal:**
- ∠A = ∠D
- ∠B = ∠E  
- ∠C = ∠F

**Corresponding sides are proportional:**
- AB/DE = BC/EF = AC/DF = k (scale factor)

**Same shape, different size:**
- Angles match
- Sides are in same ratio

---

## Scale Factor

The **scale factor (k)** tells you how much bigger or smaller.

**Formula:** k = (length in new figure)/(length in original figure)

**Example:** Triangle 1 has side 6 cm, Triangle 2 has corresponding side 9 cm
k = 9/6 = 3/2 = 1.5

Triangle 2 is 1.5 times larger!

**If k > 1:** Enlargement (bigger)
**If k = 1:** Same size (congruent!)
**If 0 < k < 1:** Reduction (smaller)

---

## Testing for Similarity

**For triangles:**

**AA (Angle-Angle):**
- Two angles equal
- Triangles are similar
- (Third angle must be equal too, since angles sum to 180°)

**SSS (Side-Side-Side Proportional):**
- All three sides proportional
- Triangles are similar

**SAS (Side-Angle-Side Proportional):**
- Two sides proportional and included angle equal
- Triangles are similar

**Note:** AA is most common and easiest to use!

---

## Examples of Similarity

**Example 1:** Are these triangles similar?
Triangle 1: angles 50°, 60°, 70°
Triangle 2: angles 50°, 60°, 70°

**Solution:**
Two angles match (actually all three!) → AA
**Answer: Yes, similar by AA**

**Example 2:** Are these triangles similar?
Triangle 1: sides 3, 4, 5
Triangle 2: sides 6, 8, 10

**Solution:**
Check ratios: 6/3 = 2, 8/4 = 2, 10/5 = 2
All ratios equal! → SSS
**Answer: Yes, similar by SSS with scale factor k = 2**

**Example 3:** Triangle 1 has sides 4 and 6 with included angle 40°
Triangle 2 has sides 8 and 12 with included angle 40°

**Solution:**
Ratios: 8/4 = 2, 12/6 = 2 (proportional!)
Included angle equal → SAS
**Answer: Yes, similar by SAS with scale factor k = 2**

---

## Dilations and Similarity

**Key connection:** Dilations create similar figures!

**If you dilate a figure:**
- The image is similar to the original
- Scale factor of dilation = scale factor of similarity

**Example:** Dilate triangle by k = 3
- Original and image are similar
- Corresponding sides ratio is 3:1
- Angles stay the same

---

## Finding Missing Measures

**Using similarity to find unknown lengths:**

**Example:** Triangles ABC ~ DEF with scale factor k = 2
If AB = 5, what is DE?

**Solution:**
k = DE/AB
2 = DE/5
DE = 10

**Answer: DE = 10**

**Example:** Triangles similar with sides 4, 6, x and corresponding sides 10, 15, 20
Find x.

**Solution:**
Set up proportion:
4/10 = 6/15 = x/20

Using first ratio: 4/10 = x/20
Cross multiply: 4(20) = 10x
80 = 10x
x = 8

**Answer: x = 8**

---

## Perimeter and Area of Similar Figures

**Perimeter:**
If scale factor is k, perimeter ratio is also k.

**Example:** Similar rectangles with k = 3
Original perimeter = 20 cm
New perimeter = 20 × 3 = 60 cm

**Area:**
If scale factor is k, area ratio is k².

**Example:** Similar triangles with k = 2
Original area = 10 cm²
New area = 10 × 2² = 10 × 4 = 40 cm²

**Remember:** Area uses k squared!

---

## Comparing Congruence and Similarity

| Property | Congruent | Similar |
|----------|-----------|---------|
| Same shape | ✓ Yes | ✓ Yes |
| Same size | ✓ Yes | ✗ No |
| Equal angles | ✓ Yes | ✓ Yes |
| Equal sides | ✓ Yes | ✗ No (proportional) |
| Scale factor | k = 1 | Any k > 0 |
| Transformation | Rigid | Dilation (+ rigid) |
| Symbol | ≅ | ~ |

**Key insight:** All congruent figures are similar (with k = 1), but not all similar figures are congruent!

---

## Real-World Applications

**Congruence:**

**Manufacturing:** Identical parts
- All iPhone screens are congruent
- Mass-produced items

**Tiles/Patterns:** Repeating designs
- Floor tiles are congruent
- Wallpaper patterns

**Money:** Same denomination bills
- All $20 bills are congruent

**Similarity:**

**Maps:** Scale drawings
- Map is similar to actual area
- 1 inch = 10 miles

**Models:** Miniatures
- Model cars similar to real cars
- Architectural models

**Photography:** Different print sizes
- 4×6 photo similar to 8×10 photo

**Shadows:** Similar to object
- Your shadow is similar to you

**Photocopies:** Enlarged/reduced
- 150% enlargement creates similar image

---

## Indirect Measurement

Use similarity to measure hard-to-reach distances!

**Example:** A tree casts a 30 ft shadow. A 6 ft person casts an 8 ft shadow. How tall is the tree?

**Solution:**
Triangles are similar (sun creates same angle)

Tree height/Tree shadow = Person height/Person shadow
h/30 = 6/8

Cross multiply:
8h = 180
h = 22.5 ft

**Answer: Tree is 22.5 ft tall**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Thinking AAA proves congruence
- Wrong: Same angles → congruent
- Right: Same angles → similar (might not be congruent!)

❌ **Mistake 2:** Forgetting to square for area
- Wrong: k = 2, so area doubles
- Right: k = 2, so area multiplies by 4

❌ **Mistake 3:** Using wrong corresponding sides
- Make sure you match corresponding parts!
- Order matters: ABC ~ DEF means A↔D, B↔E, C↔F

❌ **Mistake 4:** Mixing up congruent and similar symbols
- ≅ is congruent
- ~ is similar

❌ **Mistake 5:** Not simplifying scale factor
- Express 6/9 as 2/3 (simplified)

---

## Problem-Solving Strategy

**To prove congruence:**
1. Identify corresponding parts
2. Check if sides and angles match
3. Use SSS, SAS, ASA, AAS, or HL
4. State conclusion

**To prove similarity:**
1. Check if angles are equal (AA)
2. Or check if sides are proportional (SSS or SAS)
3. Find scale factor if needed
4. State conclusion

**To find missing measures:**
1. Set up proportion using corresponding sides
2. Cross multiply
3. Solve for unknown
4. Check reasonableness

---

## Quick Reference

**Congruence (≅):**
- Same size AND shape
- Rigid transformations
- Tests: SSS, SAS, ASA, AAS, HL
- Perimeter ratio: 1:1
- Area ratio: 1:1

**Similarity (~):**
- Same shape, different size
- Dilations (+ rigid transformations)
- Tests: AA, SSS, SAS
- Perimeter ratio: k:1
- Area ratio: k²:1

**Scale Factor:**
k = (new length)/(original length)

**Remember:**
- All congruent figures are similar
- Not all similar figures are congruent

---

## Practice Tips

**Tip 1:** Draw and label carefully
- Mark equal angles with arcs
- Mark equal sides with tick marks
- Helps visualize corresponding parts

**Tip 2:** Check all the conditions
- For congruence: need size AND shape
- For similarity: shape is enough

**Tip 3:** Set up proportions carefully
- Make sure ratios use corresponding sides
- Keep order consistent

**Tip 4:** Use AA when possible
- Easiest similarity test
- Just need two angles!

---

## Summary

**Congruent figures** are identical:
- Same size and shape
- Created by rigid transformations
- All corresponding parts equal
- Symbol: ≅

**Similar figures** have same shape:
- Different sizes (usually)
- Created by dilations
- Corresponding angles equal
- Corresponding sides proportional
- Symbol: ~

**Key concepts:**
- Scale factor relates similar figures
- Triangle congruence tests: SSS, SAS, ASA, AAS, HL
- Triangle similarity tests: AA, SSS, SAS
- Perimeter scales by k, area scales by k²

**Applications:**
- Manufacturing (congruence)
- Maps and models (similarity)
- Indirect measurement (similarity)
- Design and architecture (both)

Understanding congruence and similarity helps you analyze shapes, solve problems, and see mathematical relationships in the real world!`
    }
  });
  console.log('✅ Updated: congruence-similarity');

  // Topic 3: Scatter Plots
  await prisma.topic.updateMany({
    where: {
      slug: 'scatter-plots'
    },
    data: {
      textContent: `# Scatter Plots

How do you visualize the relationship between two variables? Scatter plots reveal patterns, trends, and correlations in data! They're essential tools for data analysis in science, business, sports, and everyday life.

---

## What Is a Scatter Plot?

A **scatter plot** displays pairs of numerical data as points on a coordinate plane.

**Purpose:**
- Show relationship between two variables
- Identify patterns or trends
- Detect correlations
- Spot outliers

**Structure:**
- **x-axis:** Independent variable (what you control or choose)
- **y-axis:** Dependent variable (what you measure or observe)
- **Points:** Each represents one data pair (x, y)

---

## Creating a Scatter Plot

**Steps:**
1. Collect data pairs (x, y)
2. Choose appropriate scale for axes
3. Label axes with variable names and units
4. Plot each point
5. Don't connect the points!
6. Give the plot a title

**Example:** Study time vs. test scores

| Study Hours (x) | Test Score (y) |
|-----------------|----------------|
| 1 | 65 |
| 2 | 70 |
| 3 | 75 |
| 4 | 85 |
| 5 | 90 |

Plot points: (1, 65), (2, 70), (3, 75), (4, 85), (5, 90)

**Title:** "Study Time vs. Test Scores"
**x-axis:** Hours of Study
**y-axis:** Test Score (%)

---

## Types of Correlation

**Correlation** describes the relationship between variables.

**Positive Correlation:**
- As x increases, y increases
- Points trend upward from left to right
- Example: Study time vs. test scores

**Negative Correlation:**
- As x increases, y decreases
- Points trend downward from left to right
- Example: Absences vs. test scores

**No Correlation:**
- No clear pattern
- Points scattered randomly
- Example: Shoe size vs. test scores

---

## Strength of Correlation

**Strong Correlation:**
- Points close to forming a line
- Clear pattern
- Easy to predict y from x

**Moderate Correlation:**
- Some scatter, but pattern visible
- General trend exists

**Weak Correlation:**
- Points very scattered
- Barely visible pattern
- Hard to predict

**No Correlation:**
- Completely random scatter
- No pattern at all

---

## Describing Scatter Plots

**Complete description includes:**
1. **Type:** Positive, negative, or no correlation
2. **Strength:** Strong, moderate, or weak
3. **Form:** Linear or non-linear
4. **Outliers:** Any unusual points

**Example descriptions:**

"Strong positive linear correlation"
- Points close to a line
- Clear upward trend

"Moderate negative linear correlation"
- General downward trend
- Some scatter

"No correlation"
- Random scatter
- No pattern

---

## Line of Best Fit (Trend Line)

A **line of best fit** (or trend line) is a straight line that best represents the data.

**Purpose:**
- Shows overall trend
- Helps make predictions
- Represents relationship simply

**Characteristics:**
- Goes through the "middle" of the data
- Roughly equal points above and below
- Minimizes distance to all points

**Drawing a trend line:**
1. Look at overall pattern
2. Draw line through middle of points
3. Balance points above and below
4. Line should follow the trend

**Note:** Use a ruler for straight line!

---

## Making Predictions

Use the trend line to predict values!

**Interpolation:**
- Predicting within the data range
- More reliable
- Example: Data from x = 1 to 10, predict for x = 5

**Extrapolation:**
- Predicting outside the data range
- Less reliable (trend may not continue)
- Example: Data from x = 1 to 10, predict for x = 15

**Example:** Trend line equation: y = 5x + 60

**Predict test score for 6 hours of study:**
y = 5(6) + 60 = 30 + 60 = 90

**Prediction: 90%**

---

## Outliers

An **outlier** is a point that doesn't fit the pattern.

**Characteristics:**
- Far from other points
- Far from trend line
- Unusual data value

**Possible causes:**
- Measurement error
- Recording error
- Unusual circumstance
- Genuine unusual case

**Example:** In study time vs. test scores, point (5, 40) would be an outlier
- High study time but low score
- Doesn't fit positive correlation
- Might indicate student was sick on test day

---

## Reading Scatter Plots

**Example:** Temperature vs. Ice Cream Sales

Scatter plot shows positive correlation.

**What it tells us:**
- Warmer temperatures → more ice cream sales
- As x (temperature) increases, y (sales) increases
- Relationship is approximately linear
- Strong correlation (points close to line)

**What it DOESN'T tell us:**
- Causation (does temperature cause sales? Or vice versa? Or both influenced by summer?)
- Exact sales for each temperature (just general trend)

---

## Correlation vs. Causation

**IMPORTANT:** Correlation ≠ Causation!

**Correlation:** Two variables are related

**Causation:** One variable CAUSES the other

**Example 1:** Ice cream sales vs. drowning incidents
- Correlation: Both increase in summer
- Causation: Ice cream doesn't cause drowning!
- **Confounding variable:** Hot weather (summer)

**Example 2:** Study time vs. test scores
- Correlation: Yes, positive
- Causation: Likely yes - studying helps scores
- Makes logical sense!

**Golden rule:** Correlation suggests possible relationship, but doesn't prove cause!

---

## Real-World Applications

**Education:**
- Study time vs. grades
- Class attendance vs. performance
- Practice problems completed vs. test scores

**Sports:**
- Training hours vs. performance
- Height vs. vertical jump
- Speed vs. distance

**Health:**
- Exercise vs. heart rate
- Age vs. bone density
- Screen time vs. sleep quality

**Business:**
- Advertising spending vs. sales
- Price vs. demand
- Experience vs. salary

**Science:**
- Temperature vs. chemical reaction rate
- Fertilizer amount vs. plant growth
- Pressure vs. volume (gases)

---

## Example Analysis

**Data:** Hours of TV per day vs. Hours of Sleep

| TV Hours (x) | Sleep Hours (y) |
|--------------|-----------------|
| 1 | 8.5 |
| 2 | 8 |
| 3 | 7.5 |
| 4 | 7 |
| 5 | 6 |
| 6 | 5.5 |

**Analysis:**
- **Type:** Negative correlation
- **Strength:** Strong (points close to line)
- **Form:** Linear
- **Interpretation:** More TV watching associated with less sleep
- **Outliers:** None visible
- **Trend line:** Approximately y = -0.5x + 9

**Prediction:** For 7 hours of TV:
y = -0.5(7) + 9 = -3.5 + 9 = 5.5 hours of sleep

---

## Non-Linear Patterns

Not all scatter plots are linear!

**Curved patterns:**
- Quadratic (parabola shape)
- Exponential (rapid increase/decrease)
- Other curves

**When to note:**
- If pattern is clearly curved, mention it!
- "Non-linear relationship"
- May need different type of model (beyond Grade 8)

**Example:** Distance fallen vs. time (gravity)
- Curved pattern (quadratic)
- Not best fit with straight line

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Connecting the dots
- Wrong: Draw lines between consecutive points
- Right: Plot points separately, then draw trend line

❌ **Mistake 2:** Forcing a correlation
- Sometimes there really is NO correlation
- Random scatter is a valid pattern (or lack of pattern!)

❌ **Mistake 3:** Assuming causation from correlation
- Correlation doesn't prove cause-and-effect
- Look for confounding variables

❌ **Mistake 4:** Extrapolating too far
- Predictions far outside data range are unreliable
- Trends may not continue indefinitely

❌ **Mistake 5:** Ignoring outliers
- Outliers are important!
- They might be errors OR interesting exceptions

---

## Creating Good Scatter Plots

**Best practices:**

**1. Choose appropriate scales:**
- Include all data points
- Don't waste space
- Use convenient intervals

**2. Label clearly:**
- Both axes with variable names
- Include units
- Give descriptive title

**3. Plot accurately:**
- Use graph paper or technology
- Precise point placement
- Double-check coordinates

**4. Don't force patterns:**
- Describe what you see
- Be honest about weak correlations

---

## Using Technology

**Graphing calculators and software can:**
- Plot points automatically
- Calculate line of best fit (regression line)
- Find correlation coefficient (r)
- Make predictions easily

**Correlation coefficient (r):**
- Number from -1 to 1
- r = 1: Perfect positive correlation
- r = -1: Perfect negative correlation
- r = 0: No correlation
- |r| > 0.7: Strong correlation
- 0.3 < |r| < 0.7: Moderate correlation
- |r| < 0.3: Weak correlation

---

## Problem-Solving Strategy

**Analyzing scatter plots:**
1. Look at overall pattern
2. Identify type of correlation
3. Assess strength
4. Note any outliers
5. Draw or identify trend line
6. Describe in complete sentences

**Making predictions:**
1. Find or draw trend line
2. Identify equation if given
3. Substitute x-value
4. Calculate y-value
5. State prediction with units

---

## Quick Reference

**Parts of Scatter Plot:**
- x-axis: Independent variable
- y-axis: Dependent variable
- Points: Data pairs
- Trend line: Line of best fit

**Types of Correlation:**
- Positive: ↗ (as x ↑, y ↑)
- Negative: ↘ (as x ↑, y ↓)
- None: random scatter

**Strength:**
- Strong: points close to line
- Moderate: some scatter
- Weak: very scattered
- None: random

**Predictions:**
- Interpolation: within data range (reliable)
- Extrapolation: outside data range (less reliable)

---

## Practice Tips

**Tip 1:** Look for real patterns
- Don't force a correlation if it's not there
- Weak/no correlation is a valid observation!

**Tip 2:** Consider the context
- Does the relationship make sense?
- Could there be a confounding variable?

**Tip 3:** Check outliers carefully
- Might be errors to fix
- Or interesting special cases to investigate

**Tip 4:** Use descriptive language
- "Strong positive linear correlation"
- "Moderate negative correlation with outlier at (x, y)"
- Be specific!

---

## Summary

**Scatter plots** display relationships between two numerical variables:

**Key features:**
- Points represent data pairs
- x-axis: independent variable
- y-axis: dependent variable
- Don't connect the points!

**Correlation types:**
- Positive: both increase together
- Negative: one increases, other decreases
- None: no pattern

**Analysis includes:**
- Type and strength of correlation
- Form (linear or non-linear)
- Outliers
- Trend line for predictions

**Important notes:**
- Correlation ≠ causation
- Interpolation > extrapolation
- Outliers tell stories too!

Scatter plots are powerful tools for visualizing data, identifying trends, and making predictions in countless real-world situations!`
    }
  });
  console.log('✅ Updated: scatter-plots');

  // Topic 4: Two-Way Tables
  await prisma.topic.updateMany({
    where: {
      slug: 'two-way-tables'
    },
    data: {
      textContent: `# Two-Way Tables

How do you organize data with two categories? Two-way tables (also called contingency tables) help you analyze relationships between categorical variables! They're essential for comparing groups, finding patterns, and making data-driven decisions.

---

## What Is a Two-Way Table?

A **two-way table** organizes data by two categorical variables.

**Structure:**
- **Rows:** One categorical variable
- **Columns:** Another categorical variable
- **Cells:** Frequency or count for each combination
- **Totals:** Row totals, column totals, grand total

**Also called:**
- Contingency table
- Cross-tabulation
- Frequency table

---

## Reading a Two-Way Table

**Example:** Survey of 100 students about pets and grades

|  | Cat | Dog | No Pet | Row Total |
|---|-----|-----|--------|-----------|
| **A Grade** | 15 | 20 | 10 | 45 |
| **B Grade** | 10 | 15 | 8 | 33 |
| **C Grade** | 5 | 10 | 7 | 22 |
| **Column Total** | 30 | 45 | 25 | 100 |

**Reading the table:**
- 15 students have cats AND A grades
- 20 students have dogs AND A grades
- 45 students total have A grades
- 30 students total have cats
- Grand total: 100 students

---

## Row Totals and Column Totals

**Row totals:**
- Sum of all values in that row
- Represents total for one category

**Column totals:**
- Sum of all values in that column
- Represents total for other category

**Grand total:**
- Sum of all cells
- Sum of all row totals
- Sum of all column totals
- Total number of data points

**Check:** Row totals should sum to grand total!
**Check:** Column totals should sum to grand total!

---

## Joint Frequencies

**Joint frequency** = count in a specific cell

Represents both categories together.

**Example:** From the pet table
- 15 students have BOTH a cat AND an A grade
- This is a joint frequency

**Symbol:** Often just the number in the cell

---

## Marginal Frequencies

**Marginal frequency** = row total or column total

Found in the "margins" of the table.

**Example:** From the pet table
- 45 students have A grades (row total)
- 30 students have cats (column total)
- These are marginal frequencies

**Why "marginal"?**
- They appear in the margins (edges) of the table
- They show totals for just ONE variable

---

## Calculating Frequencies

**Example:** Create a two-way table from data

Survey: 50 students asked about favorite subject (Math/English) and grade level (7th/8th)

**Raw data:**
- 15 seventh-graders like Math
- 10 seventh-graders like English
- 12 eighth-graders like Math
- 13 eighth-graders like English

**Create table:**

|  | Math | English | Row Total |
|---|------|---------|-----------|
| **7th Grade** | 15 | 10 | 25 |
| **8th Grade** | 12 | 13 | 25 |
| **Column Total** | 27 | 23 | 50 |

**Check:** 
- Row totals: 25 + 25 = 50 ✓
- Column totals: 27 + 23 = 50 ✓

---

## Relative Frequency

**Relative frequency** = frequency ÷ total (expressed as fraction, decimal, or percent)

Shows proportion or percentage.

**Types:**

**Joint relative frequency:**
(Cell value) ÷ (Grand total)

**Marginal relative frequency:**
(Row or column total) ÷ (Grand total)

**Conditional relative frequency:**
We'll discuss this next!

---

## Calculating Relative Frequencies

**Example:** Using the pet table (grand total = 100)

**Joint relative frequency for "Cat and A grade":**
15/100 = 0.15 = 15%

**Marginal relative frequency for "A grade":**
45/100 = 0.45 = 45%

**Marginal relative frequency for "Cat":**
30/100 = 0.30 = 30%

**Interpretation:**
- 15% of all students have a cat AND an A grade
- 45% of all students have an A grade
- 30% of all students have a cat

---

## Conditional Relative Frequency

**Conditional relative frequency** answers: "What percent of THIS group has THAT characteristic?"

**Formula:**
(Specific cell) ÷ (Row or column total)

**Two types:**

**1. Given the row:**
What percent of [row category] are in [column category]?

**2. Given the column:**
What percent of [column category] are in [row category]?

---

## Examples of Conditional Relative Frequency

**Using pet table:**

**Question 1:** What percent of A-grade students have cats?

**Solution:**
Given: A-grade students (row)
Find: Those with cats

Conditional frequency = 15/45 = 1/3 ≈ 0.333 = 33.3%

**Answer: 33.3% of A-grade students have cats**

**Question 2:** What percent of cat owners have A grades?

**Solution:**
Given: Cat owners (column)
Find: Those with A grades

Conditional frequency = 15/30 = 1/2 = 0.50 = 50%

**Answer: 50% of cat owners have A grades**

**Note:** These are DIFFERENT questions with different answers!

---

## Conditional Relative Frequency Table

You can create a whole table of conditional relative frequencies!

**Example:** Percent within each grade level

|  | Cat | Dog | No Pet | Row Total |
|---|-----|-----|--------|-----------|
| **A Grade** | 33% | 44% | 22% | 100% |
| **B Grade** | 30% | 45% | 24% | 100% |
| **C Grade** | 23% | 45% | 32% | 100% |

**Each row sums to 100%**

**Calculations:**
- A grade, Cat: 15/45 ≈ 33%
- A grade, Dog: 20/45 ≈ 44%
- A grade, No Pet: 10/45 ≈ 22%

**This shows distribution WITHIN each grade level**

---

## Using Two-Way Tables for Analysis

**Looking for associations:**

Do two variables seem related?

**Example:** Pet ownership and grades

**Compare conditional frequencies:**
- A-grade cat owners: 33%
- B-grade cat owners: 30%
- C-grade cat owners: 23%

**Observation:** A-grade students more likely to have cats
**Question:** Is this association significant or just random variation?

---

## Real-World Applications

**Marketing:**
- Customer age vs. product preference
- Location vs. buying habits
- Gender vs. brand loyalty

**Medicine:**
- Treatment vs. outcome
- Age group vs. symptoms
- Exposure vs. disease occurrence

**Education:**
- Study method vs. test results
- Attendance vs. grades
- Homework completion vs. understanding

**Sports:**
- Position vs. injury type
- Training method vs. performance
- Home vs. away game results

**Social Science:**
- Gender vs. career choice
- Age vs. voting preference
- Income level vs. education

---

## Example Problem

**Survey of 200 people: Exercise frequency and health rating**

|  | Healthy | Average | Poor | Row Total |
|---|---------|---------|------|-----------|
| **Daily Exercise** | 45 | 20 | 5 | 70 |
| **Weekly Exercise** | 30 | 35 | 15 | 80 |
| **Rarely Exercise** | 10 | 25 | 15 | 50 |
| **Column Total** | 85 | 80 | 35 | 200 |

**Questions:**

**a) What percent of people exercise daily?**
70/200 = 0.35 = 35%

**b) What percent of people rate themselves as healthy?**
85/200 = 0.425 = 42.5%

**c) What percent of daily exercisers rate themselves as healthy?**
45/70 ≈ 0.643 = 64.3%

**d) What percent of healthy people exercise daily?**
45/85 ≈ 0.529 = 52.9%

**e) Is there an association between exercise and health rating?**
Yes! Daily exercisers have higher healthy rating (64.3%) than rare exercisers (10/50 = 20%)

---

## Creating Two-Way Tables from Data

**Steps:**
1. Identify the two categorical variables
2. Determine categories for each variable
3. Set up table structure (rows and columns)
4. Count frequencies for each combination
5. Calculate row totals
6. Calculate column totals
7. Find grand total
8. Verify totals match!

**Example:** Survey data - 20 students, gender and sport preference

**Data:** M-Soccer, F-Soccer, M-Basketball, F-Basketball, M-Soccer, F-Soccer, M-Basketball, F-Soccer, M-Soccer, F-Basketball, M-Basketball, F-Soccer, M-Soccer, F-Basketball, M-Soccer, F-Soccer, M-Basketball, F-Basketball, M-Soccer, F-Soccer

**Count:**
- M-Soccer: 7
- M-Basketball: 4
- F-Soccer: 6
- F-Basketball: 3

**Table:**

|  | Soccer | Basketball | Row Total |
|---|--------|-----------|-----------|
| **Male** | 7 | 4 | 11 |
| **Female** | 6 | 3 | 9 |
| **Column Total** | 13 | 7 | 20 |

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing joint and conditional frequencies
- Joint: part of whole (÷ grand total)
- Conditional: part of subgroup (÷ row or column total)

❌ **Mistake 2:** Using wrong total for conditional frequency
- Make sure you divide by the RIGHT total!
- Given row? Use row total.
- Given column? Use column total.

❌ **Mistake 3:** Forgetting to check totals
- Row totals should sum to grand total
- Column totals should sum to grand total

❌ **Mistake 4:** Mixing up rows and columns
- "Percent of A that are B" vs. "Percent of B that are A"
- These are different!

❌ **Mistake 5:** Not converting to percents when asked
- If question asks for percent, don't leave as fraction!
- Multiply by 100 and add % sign

---

## Problem-Solving Strategy

**Reading tables:**
1. Identify what each row represents
2. Identify what each column represents
3. Find the relevant cell or total
4. Interpret in context

**Calculating frequencies:**
1. Identify what type: joint, marginal, or conditional
2. Find numerator (cell value or total)
3. Find denominator (grand total or row/column total)
4. Calculate and express as requested (fraction, decimal, percent)

**Analyzing relationships:**
1. Calculate conditional frequencies for comparison
2. Look for notable differences
3. Consider whether association exists
4. State conclusion in context

---

## Quick Reference

**Parts of Two-Way Table:**
- Rows: One categorical variable
- Columns: Other categorical variable
- Cells: Frequency counts
- Row totals: Marginal frequencies (rows)
- Column totals: Marginal frequencies (columns)
- Grand total: Total number of observations

**Types of Frequencies:**

**Joint frequency:**
Count in a specific cell

**Marginal frequency:**
Row total or column total

**Joint relative frequency:**
(Cell value) ÷ (Grand total)

**Marginal relative frequency:**
(Row or column total) ÷ (Grand total)

**Conditional relative frequency:**
(Cell value) ÷ (Row or column total)

---

## Practice Tips

**Tip 1:** Always verify totals
- Quick check for accuracy
- Catches arithmetic errors

**Tip 2:** Read questions carefully
- "Of A" vs. "of B" matters!
- Determines which total to use

**Tip 3:** Use labels
- Keep track of what each number represents
- Write out calculations clearly

**Tip 4:** Think about context
- Do the numbers make sense?
- Does the pattern seem reasonable?

**Tip 5:** Practice both directions
- Given row, find column percent
- Given column, find row percent

---

## Summary

**Two-way tables** organize data with two categorical variables:

**Structure:**
- Rows and columns for categories
- Cells show frequency counts
- Marginal totals in margins
- Grand total in corner

**Types of frequencies:**
- **Joint:** specific cell (both categories)
- **Marginal:** row or column total (one category)
- **Conditional:** within a specific group

**Relative frequencies:**
- Express as fraction, decimal, or percent
- Divide by appropriate total
- Useful for comparisons

**Applications:**
- Identify associations between variables
- Compare groups
- Make data-driven decisions
- Analyze patterns in categorical data

Two-way tables are powerful tools for organizing, analyzing, and interpreting categorical data in countless real-world situations!`
    }
  });
  console.log('✅ Updated: two-way-tables');

  console.log('\n✨ Successfully updated 4 topics!');
  console.log('\n🎉 All Grade 8 Math content is now complete! (12/12 topics filled)');
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
