import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillGrade6Batch3() {
  console.log('Filling Grade 6 Math topics - Batch 3 (Final topic)...\n');

  // Topic 1: Measures of Center and Variability
  await prisma.topic.updateMany({
    where: { slug: 'measures-of-center-and-variability' },
    data: {
      textContent: `# Measures of Center and Variability

Understanding data goes beyond just collecting it—we need ways to describe and compare datasets. **Measures of center** tell us about the "typical" or "average" value, while **measures of variability** tell us how spread out the data is.

---

## Measures of Center

These statistics help us find the "middle" or "typical" value in a dataset.

### Mean (Average)

**Definition:** The sum of all values divided by the number of values.

**Formula:** Mean = (Sum of all values) ÷ (Number of values)

**Example:** Test scores: 85, 90, 78, 92, 85
- Sum: 85 + 90 + 78 + 92 + 85 = 430
- Number of values: 5
- Mean: 430 ÷ 5 = **86**

**When to use:** When you want to include all data values and the data has no extreme outliers.

**Sensitivity to outliers:** The mean is VERY affected by extreme values!

**Example with outlier:**
- Dataset 1: 10, 12, 11, 13, 12 → Mean = 11.6
- Dataset 2: 10, 12, 11, 13, 100 → Mean = 29.2 (much higher!)

The outlier (100) drastically changed the mean, making it less representative of most values.

### Median (Middle Value)

**Definition:** The middle value when data is arranged in order.

**How to find it:**
1. Put all values in order from least to greatest
2. If there's an odd number of values, the median is the middle one
3. If there's an even number of values, the median is the average of the two middle ones

**Example (odd number of values):** 15, 22, 18, 30, 25
- In order: 15, 18, **22**, 25, 30
- Median = **22** (the middle value)

**Example (even number of values):** 8, 12, 15, 20, 22, 25
- In order: 8, 12, **15, 20**, 22, 25
- Two middle values: 15 and 20
- Median = (15 + 20) ÷ 2 = **17.5**

**When to use:** When you have outliers or skewed data. The median is NOT affected much by extreme values.

**Advantage:** More representative when data has outliers.

### Mode (Most Common)

**Definition:** The value that appears most often in a dataset.

**Example 1:** Shoe sizes: 7, 8, 8, 8, 9, 9, 10
- Mode = **8** (appears 3 times, more than any other value)

**Example 2:** Test scores: 75, 80, 85, 90, 95
- No mode (each value appears only once)

**Example 3:** Hours of sleep: 7, 7, 8, 8, 9
- Modes = **7 and 8** (bimodal—two modes)

**When to use:** For categorical data or when you want to know the most popular value.

### Comparing the Three Measures

**Dataset:** 2, 3, 3, 5, 6, 8, 100
- Mean = (2 + 3 + 3 + 5 + 6 + 8 + 100) ÷ 7 = 127 ÷ 7 ≈ **18.1**
- Median = **5** (middle value)
- Mode = **3** (appears twice)

The median (5) best represents the "typical" value because the mean is pulled up by the outlier (100).

---

## Measures of Variability (Spread)

These statistics tell us how spread out or clustered the data is.

### Range

**Definition:** The difference between the largest and smallest values.

**Formula:** Range = Maximum value - Minimum value

**Example:** Test scores: 65, 72, 78, 85, 92
- Maximum: 92
- Minimum: 65
- Range = 92 - 65 = **27**

**Interpretation:** The scores span 27 points.

**Limitation:** The range only uses two values (max and min), so it's very sensitive to outliers.

### Interquartile Range (IQR)

**Definition:** The range of the middle 50% of the data. It measures the spread of the middle half.

**How to find it:**
1. Find the median (Q2) of the entire dataset
2. Find Q1 (median of the lower half)
3. Find Q3 (median of the upper half)
4. IQR = Q3 - Q1

**Example:** Test scores: 60, 65, 70, 75, 80, 85, 90, 95, 100

Step 1: Find the median (Q2)
- Ordered: 60, 65, 70, 75, **80**, 85, 90, 95, 100
- Q2 (median) = **80**

Step 2: Find Q1 (median of lower half)
- Lower half: 60, 65, 70, 75
- Q1 = (65 + 70) ÷ 2 = **67.5**

Step 3: Find Q3 (median of upper half)
- Upper half: 85, 90, 95, 100
- Q3 = (90 + 95) ÷ 2 = **92.5**

Step 4: Calculate IQR
- IQR = Q3 - Q1 = 92.5 - 67.5 = **25**

**Interpretation:** The middle 50% of students scored within a 25-point range.

**Advantage over range:** IQR is NOT affected by outliers because it only uses the middle 50% of data.

### Mean Absolute Deviation (MAD)

**Definition:** The average distance of each data point from the mean.

**How to find it:**
1. Find the mean
2. Find how far each value is from the mean (absolute value)
3. Find the average of those distances

**Example:** Daily temperatures: 70°, 72°, 68°, 75°, 70°

Step 1: Find the mean
- Mean = (70 + 72 + 68 + 75 + 70) ÷ 5 = 355 ÷ 5 = **71°**

Step 2: Find distances from mean
- |70 - 71| = 1
- |72 - 71| = 1
- |68 - 71| = 3
- |75 - 71| = 4
- |70 - 71| = 1

Step 3: Average the distances
- MAD = (1 + 1 + 3 + 4 + 1) ÷ 5 = 10 ÷ 5 = **2°**

**Interpretation:** On average, temperatures were 2° away from the mean (71°).

**Use:** MAD tells us how consistent or variable the data is. Smaller MAD = more consistent data.

---

## Choosing the Right Measures

### When you have outliers:
- **Center:** Use median (not affected by outliers)
- **Spread:** Use IQR (not affected by outliers)

### When you have NO outliers:
- **Center:** Use mean (uses all data values)
- **Spread:** Use range or MAD

### For categorical data:
- **Center:** Use mode (mean and median don't make sense for categories)

---

## Real-World Applications

**Sports:** Compare player consistency
- Player A scores: 20, 22, 21, 19, 23 → Mean = 21, MAD = 1.2 (very consistent!)
- Player B scores: 10, 30, 15, 35, 15 → Mean = 21, MAD = 8.4 (inconsistent!)

Both have the same mean, but Player A is more reliable.

**Weather:** Compare climate variability
- City A temperatures: 65°, 68°, 70°, 72°, 75° → Range = 10° (mild variation)
- City B temperatures: 45°, 55°, 70°, 85°, 95° → Range = 50° (extreme variation)

**Business:** Analyze sales patterns
- Store A daily sales: $500, $520, $510, $530, $515 → Low variability (predictable)
- Store B daily sales: $300, $600, $400, $700, $500 → High variability (unpredictable)

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to order data before finding median
- Wrong: Finding median of 8, 3, 10, 5, 7 without ordering
- Right: Order first → 3, 5, 7, 8, 10 → Median = 7

❌ **Mistake 2:** Using mean when outliers exist
- Dataset: 50, 52, 51, 49, 200 → Mean = 80.4 (not representative!)
- Better: Use median = 51

❌ **Mistake 3:** Calculating IQR incorrectly
- Don't include the median value in both halves when splitting the data

❌ **Mistake 4:** Forgetting absolute value in MAD
- Distances from mean must be positive!

❌ **Mistake 5:** Confusing range with IQR
- Range = max - min (uses ALL data)
- IQR = Q3 - Q1 (uses only middle 50%)

---

## Practice Tips

1. **Always look for outliers first** → This tells you whether to use mean/range or median/IQR

2. **Check your work:** Does the median actually fall in the middle of the ordered data?

3. **For MAD:** Make a table to organize your work (value, mean, distance from mean)

4. **Interpret your answer:** Don't just calculate—explain what the number means in context!

5. **Compare measures:** When datasets have the same center but different spreads, variability tells the real story

---

## Summary

**Measures of Center:**
- **Mean:** Average of all values (sensitive to outliers)
- **Median:** Middle value (resistant to outliers)
- **Mode:** Most frequent value

**Measures of Variability:**
- **Range:** Max - Min (sensitive to outliers)
- **IQR:** Q3 - Q1 (resistant to outliers, middle 50%)
- **MAD:** Average distance from mean (shows consistency)

Understanding both center AND spread gives you a complete picture of your data. Two datasets can have the same mean but very different spreads—always look at both!`
    }
  });
  console.log('✅ Updated: measures-of-center-and-variability');

  console.log('\n✨ Successfully updated 1 topic!');
  console.log('\n🎉 All Grade 6 Math content is now complete! (7/7 topics filled)');
}

fillGrade6Batch3()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
