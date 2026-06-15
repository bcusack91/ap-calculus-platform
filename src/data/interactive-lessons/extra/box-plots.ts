import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Box Plots (Algebra 1).
 * Registry key: 'box-plots' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'box-plots',
    sections: [
      {
        id: 'bp1-intro',
        type: 'text' as const,
        content: `# 📦 Box Plots

**Part 1 of 5 — The Five-Number Summary**

---

### Topics in This Part

| Section |
|---------|
| Why Box Plots Exist |
| Median, Minimum & Maximum |
| The Quartiles $Q_1$ and $Q_3$ |
| The Full Five-Number Summary |

> 🔑 **Key Concept:** A box plot is a picture of **five numbers**: the minimum, $Q_1$, the median, $Q_3$, and the maximum. Master those five numbers in Part 1 and the picture practically draws itself in Part 2.`,
      },
      {
        id: 'bp1-why',
        type: 'text' as const,
        content: `## Why Box Plots Exist

Suppose a class earns these quiz scores:

$$4,\\; 7,\\; 8,\\; 11,\\; 13,\\; 16,\\; 19$$

You *could* stare at the raw list — but a **box plot** instead summarizes the whole data set with a handful of landmark values, so you can see the **center**, the **spread**, and any **lopsidedness** at a glance.

To build one, we first split the data into **four equal groups** using three cut-points:

- the **median** splits the data into a lower half and an upper half,
- the **first quartile** $Q_1$ is the median of the lower half,
- the **third quartile** $Q_3$ is the median of the upper half.

Together with the **min** and **max**, these are the **five-number summary**.

> 💡 "Quartile" comes from *quarter*. The three quartiles ($Q_1$, the median $Q_2$, and $Q_3$) chop the sorted data into four slices, each holding about $25\\%$ of the values.`,
      },
      {
        id: 'bp1-median',
        type: 'text' as const,
        content: `## Step 1 — Sort, Then Find the Median

**Always sort the data from smallest to largest first.** Our scores are already sorted:

$$4,\\; 7,\\; 8,\\; \\underbrace{11}_{\\text{median}},\\; 13,\\; 16,\\; 19$$

There are $n = 7$ values (odd), so the **median** is the single middle value — the $4^{\\text{th}}$ one: **$11$**.

The **minimum** is $4$ and the **maximum** is $19$.

### What if there's an even count?

For $\\;3,\\; 5,\\; 8,\\; 9,\\; 12,\\; 14\\;$ ($n=6$), there is no single middle value. Average the **two** middle numbers ($8$ and $9$):

$$\\text{median} = \\frac{8 + 9}{2} = 8.5$$

> ⚠️ The median is **not** always a number that appears in the data. With an even count it can land *between* two values.`,
      },
      {
        id: 'bp1-median-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $\\;2,\\; 4,\\; 4,\\; 9,\\; 12\\;$?',
              options: ['$4$', '$4.5$', '$9$', '$6.2$'],
              correctAnswer: 0,
              explanation: 'There are $5$ values (odd), so the median is the middle one — the $3^{\\text{rd}}$ value, which is $4$. (Repeated values still count.)',
            },
            {
              question: 'What is the median of $\\;10,\\; 14,\\; 18,\\; 24\\;$?',
              options: ['$14$', '$18$', '$16$', '$17$'],
              correctAnswer: 2,
              explanation: 'With $4$ values (even), average the two middle numbers: $\\frac{14 + 18}{2} = 16$.',
            },
          ],
        },
      },
      {
        id: 'bp1-quartiles',
        type: 'text' as const,
        content: `## Step 2 — Find the Quartiles

Go back to the scores $\\;4,\\, 7,\\, 8,\\, \\mathbf{11},\\, 13,\\, 16,\\, 19\\;$ with median $11$.

When $n$ is **odd**, the median is one specific data value, so we **leave it out** when splitting into halves:

$$\\underbrace{4,\\; 7,\\; 8}_{\\text{lower half}}\\quad\\Big|\\quad \\mathbf{11} \\quad\\Big|\\quad \\underbrace{13,\\; 16,\\; 19}_{\\text{upper half}}$$

- $Q_1$ = median of the lower half $\\;\\{4, 7, 8\\}$ = $\\mathbf{7}$
- $Q_3$ = median of the upper half $\\;\\{13, 16, 19\\}$ = $\\mathbf{16}$

> 🔑 **The rule:** $Q_1$ is the median of all values **below** the overall median; $Q_3$ is the median of all values **above** it. If $n$ is odd, exclude the median itself from both halves. If $n$ is even, the two halves are simply the lower $\\frac{n}{2}$ and upper $\\frac{n}{2}$ values.`,
      },
      {
        id: 'bp1-quartile-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Landmark** 🔽

For the sorted data $\\;2,\\; 4,\\; 6,\\; 8,\\; 10\\;$ ($n = 5$), choose the correct value for each statistic.`,
        exercise: {
          dropdowns: [
            { label: 'Median:', options: ['$6$', '$4$', '$8$', '$5$'] },
            { label: '$Q_1$ (median of the lower half $\\{2, 4\\}$):', options: ['$3$', '$2$', '$4$', '$6$'] },
            { label: '$Q_3$ (median of the upper half $\\{8, 10\\}$):', options: ['$9$', '$8$', '$10$', '$6$'] },
          ],
          correctAnswers: ['$6$', '$3$', '$9$'],
          hint1: 'With $n=5$ (odd), the median is the $3^{\\text{rd}}$ value, $6$, and is excluded from both halves.',
          hint2: 'The lower half is $\\{2, 4\\}$; its median averages the two: $\\frac{2+4}{2} = 3$.',
          hint3: 'The upper half is $\\{8, 10\\}$; its median is $\\frac{8+10}{2} = 9$.',
          explanation: 'Median $= 6$. Lower half $\\{2,4\\}\\Rightarrow Q_1 = 3$. Upper half $\\{8,10\\}\\Rightarrow Q_3 = 9$.',
        },
      },
      {
        id: 'bp1-summary',
        type: 'text' as const,
        content: `## The Five-Number Summary

Putting it all together for the quiz scores $\\;4,\\,7,\\,8,\\,11,\\,13,\\,16,\\,19$:

| Statistic | Value |
|-----------|-------|
| Minimum | $4$ |
| $Q_1$ (first quartile) | $7$ |
| Median ($Q_2$) | $11$ |
| $Q_3$ (third quartile) | $16$ |
| Maximum | $19$ |

These five numbers — and **only** these five — are everything a box plot shows. One more bit of practice, then we'll turn them into the picture.

> 💡 Always list a five-number summary in increasing order. If yours isn't increasing (e.g. $Q_1 > $ median), you made an arithmetic slip — go back and recheck.`,
      },
      {
        id: 'bp1-quartile-drill',
        type: 'input-boxes' as const,
        content: `**Find the Quartiles** 🧮

Daily high temperatures (°F), already sorted:

$$64,\\; 66,\\; 68,\\; 70,\\; 72,\\; 74,\\; 76$$

**1)** Median $= \\,?$
**2)** $Q_1 = \\,?$
**3)** $Q_3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['70', '66', '74'],
          hint1: '$n=7$ (odd). The median is the $4^{\\text{th}}$ value: $70$.',
          hint2: 'Lower half (below $70$) is $\\{64, 66, 68\\}$; its median is $66$.',
          hint3: 'Upper half (above $70$) is $\\{72, 74, 76\\}$; its median is $74$.',
          explanation: 'Median $= 70$. Lower half $\\{64,66,68\\}\\Rightarrow Q_1 = 66$. Upper half $\\{72,74,76\\}\\Rightarrow Q_3 = 74$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'box-plots',
    sections: [
      {
        id: 'bp2-intro',
        type: 'text' as const,
        content: `# 📦 Box Plots

**Part 2 of 5 — Building the Box & Whiskers**

---

> 🔑 **The Idea:** Draw a number line, mark the five summary values, build a **box** from $Q_1$ to $Q_3$ with a line at the median, then extend **whiskers** out to the min and max.`,
      },
      {
        id: 'bp2-anatomy',
        type: 'text' as const,
        content: `## Anatomy of a Box Plot

Every box plot is built from the five-number summary like this:

| Part of the plot | Comes from |
|------------------|-----------|
| Left whisker end | minimum |
| **Left edge of box** | $Q_1$ |
| **Line inside box** | median |
| **Right edge of box** | $Q_3$ |
| Right whisker end | maximum |

A rough sketch on a number line:

$$\\overset{\\text{min}}{|}\\!\\!-\\!\\!-\\!\\!-\\!\\!\\overset{Q_1}{[}\\;\\overset{\\text{med}}{|}\\;\\overset{Q_3}{]}\\!\\!-\\!\\!-\\!\\!-\\!\\!\\overset{\\text{max}}{|}$$

- The **box** spans $Q_1$ to $Q_3$ and holds the **middle $50\\%$** of the data.
- The **whiskers** reach out to the smallest and largest values.

> 💡 The **width of the box** is the most important visual: a wide box means the middle half of the data is spread out; a narrow box means it's tightly clustered.`,
      },
      {
        id: 'bp2-iqr',
        type: 'text' as const,
        content: `## The Interquartile Range (IQR)

The length of the box has a name — the **interquartile range**:

$$\\text{IQR} = Q_3 - Q_1$$

It measures the spread of the **middle $50\\%$** of the data and ignores the extremes entirely.

### Worked Example

A data set has the five-number summary

$$4,\\; 7,\\; 12,\\; 16,\\; 20 \\qquad (\\text{min},\\, Q_1,\\, \\text{med},\\, Q_3,\\, \\text{max}).$$

$$\\text{IQR} = Q_3 - Q_1 = 16 - 7 = 9$$

$$\\text{Range} = \\text{max} - \\text{min} = 20 - 4 = 16$$

> ⚠️ Don't confuse **range** (max $-$ min, the *whole* spread) with **IQR** (the spread of just the middle half). The IQR is much less affected by extreme values.`,
      },
      {
        id: 'bp2-iqr-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A box plot has $Q_1 = 25$ and $Q_3 = 40$. What is the IQR?',
              options: ['$65$', '$15$', '$32.5$', '$40$'],
              correctAnswer: 1,
              explanation: '$\\text{IQR} = Q_3 - Q_1 = 40 - 25 = 15$.',
            },
            {
              question: 'The box of a box plot (from $Q_1$ to $Q_3$) contains about what fraction of the data?',
              options: ['$25\\%$', '$50\\%$', '$75\\%$', '$100\\%$'],
              correctAnswer: 1,
              explanation: 'The box runs from the first to the third quartile, capturing the **middle $50\\%$** of the values.',
            },
          ],
        },
      },
      {
        id: 'bp2-iqr-recap',
        type: 'text' as const,
        content: `## From Summary to IQR

So the full recipe for the box's width is: find $Q_1$ and $Q_3$ exactly as in Part 1, then subtract. That single number, the IQR, is the headline measure of spread for a box plot.

Time to run the whole pipeline yourself — sort is done for you, so go straight to the median, the quartiles, and the IQR.`,
      },
      {
        id: 'bp2-build-drill',
        type: 'input-boxes' as const,
        content: `**Build the Summary** 🧮

These reaction times (ms), already sorted:

$$4,\\; 6,\\; 7,\\; 9,\\; 10,\\; 12,\\; 13,\\; 15,\\; 16,\\; 18,\\; 20$$

There are $n = 11$ values. Find each value for the box plot.

**1)** Median $= \\,?$
**2)** $Q_1 = \\,?$
**3)** $Q_3 = \\,?$
**4)** IQR $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['12', '7', '16', '9'],
          hint1: '$n=11$ (odd). The median is the $6^{\\text{th}}$ value: $12$.',
          hint2: 'Lower half (the $5$ values below $12$) is $\\{4,6,7,9,10\\}$; its median (the $3^{\\text{rd}}$) is $7$. Upper half $\\{13,15,16,18,20\\}$ has median $16$.',
          hint3: 'IQR $= Q_3 - Q_1 = 16 - 7$.',
          explanation: 'Median $=12$. Lower half $\\{4,6,7,9,10\\}\\Rightarrow Q_1=7$; upper half $\\{13,15,16,18,20\\}\\Rightarrow Q_3=16$. IQR $= 16 - 7 = 9$.',
        },
      },
      {
        id: 'bp2-recap',
        type: 'text' as const,
        content: `## Putting the Picture Together

With those five numbers, the box plot for the reaction times draws itself: the **box** runs from $Q_1 = 7$ to $Q_3 = 16$ (a width of $9$, the IQR), a line marks the median at $12$, and the **whiskers** reach left to $4$ and right to $20$.

> 💡 Notice the median line ($12$) is **not** centered in the box — it sits a little right of middle. That tells you the lower quarter of the box is more spread out than the upper quarter. We'll read clues like this in Part 4.

Before moving on, make sure you can name every part of the picture.`,
      },
      {
        id: 'bp2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Label the Picture** 🔽

A box plot is drawn on a number line. Match each feature of the plot to what it represents.`,
        exercise: {
          dropdowns: [
            { label: 'The far-left end of the left whisker marks the:', options: ['minimum', 'maximum', 'median', '$Q_3$'] },
            { label: 'The left edge of the box marks:', options: ['$Q_1$', '$Q_3$', 'the median', 'the minimum'] },
            { label: 'The line drawn inside the box marks:', options: ['the median', '$Q_1$', '$Q_3$', 'the mean'] },
            { label: 'The total length of the box equals:', options: ['the IQR', 'the range', 'the median', 'the maximum'] },
          ],
          correctAnswers: ['minimum', '$Q_1$', 'the median', 'the IQR'],
          hint1: 'Whiskers reach out to the extreme values (min on the left, max on the right).',
          hint2: 'The box spans from $Q_1$ (left edge) to $Q_3$ (right edge).',
          hint3: 'The interior line is the median, and box length $= Q_3 - Q_1 = $ IQR.',
          explanation: 'Left whisker → min; box edges → $Q_1$ and $Q_3$; interior line → median; box length → IQR.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'box-plots',
    sections: [
      {
        id: 'bp3-intro',
        type: 'text' as const,
        content: `# 📦 Box Plots

**Part 3 of 5 — Outliers & the 1.5 × IQR Rule**

---

> 🔑 **Why it matters:** A single freakishly large or small value can stretch a whisker and distort the whole picture. The **$1.5 \\times \\text{IQR}$ rule** gives an objective test for flagging these **outliers**.`,
      },
      {
        id: 'bp3-fences',
        type: 'text' as const,
        content: `## The Fences

An **outlier** is a value that lies unusually far from the middle of the data. To decide *how* far is "too far," we build two **fences**:

$$\\text{Lower fence} = Q_1 - 1.5 \\cdot \\text{IQR}$$

$$\\text{Upper fence} = Q_3 + 1.5 \\cdot \\text{IQR}$$

> 🔑 **The rule:** Any data value **below the lower fence** or **above the upper fence** is an **outlier**. Everything between the fences is considered ordinary.

The fences themselves are *not* drawn on the box plot — they're just the calculation that decides which points get flagged.`,
      },
      {
        id: 'bp3-worked',
        type: 'text' as const,
        content: `## Worked Example: Morning Commute Times

A worker records commute times (minutes), sorted:

$$15,\\; 18,\\; 20,\\; 22,\\; 25,\\; 28,\\; 30,\\; 55$$

**Step 1 — Five-number summary.** With $n=8$ (even), the median is $\\frac{22+25}{2} = 23.5$. The lower half is $\\{15,18,20,22\\}$ so $Q_1 = \\frac{18+20}{2} = 19$; the upper half is $\\{25,28,30,55\\}$ so $Q_3 = \\frac{28+30}{2} = 29$.

**Step 2 — IQR.**
$$\\text{IQR} = Q_3 - Q_1 = 29 - 19 = 10$$

**Step 3 — Fences.**
$$\\text{Lower} = 19 - 1.5(10) = 19 - 15 = 4$$
$$\\text{Upper} = 29 + 1.5(10) = 29 + 15 = 44$$

**Step 4 — Flag outliers.** Is any value below $4$ or above $44$? The $55$-minute commute is above $44$, so **$55$ is an outlier**. ✓

> 💡 When a data set has an outlier, the whisker stops at the most extreme value that is **still inside** the fence (here, $30$), and the outlier is drawn as a separate dot.`,
      },
      {
        id: 'bp3-fence-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has $Q_1 = 20$, $Q_3 = 32$, so IQR $= 12$. What is the upper fence?',
              options: ['$44$', '$50$', '$38$', '$32$'],
              correctAnswer: 1,
              explanation: 'Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = 32 + 1.5(12) = 32 + 18 = 50$.',
            },
            {
              question: 'Using $Q_1 = 20$, $Q_3 = 32$ (IQR $= 12$), the fences are lower $= 20 - 18 = 2$ and upper $= 32 + 18 = 50$. Which value is an outlier?',
              options: ['a value of $5$', 'a value of $58$', 'a value of $30$', 'a value of $48$'],
              correctAnswer: 1,
              explanation: 'Outliers fall below the lower fence ($2$) or above the upper fence ($50$). Only $58 > 50$ clears a fence, so it is the outlier. The values $5$, $30$, and $48$ all sit between $2$ and $50$.',
            },
          ],
        },
      },
      {
        id: 'bp3-checklist',
        type: 'text' as const,
        content: `## Your Outlier Checklist

For any data set, hunting outliers is always the same four moves:

1. Find $Q_1$ and $Q_3$, then $\\text{IQR} = Q_3 - Q_1$.
2. Lower fence $= Q_1 - 1.5\\cdot\\text{IQR}$.
3. Upper fence $= Q_3 + 1.5\\cdot\\text{IQR}$.
4. Any value beyond either fence is an outlier.

Now apply all four steps to a real data set in the drill below.`,
      },
      {
        id: 'bp3-outlier-drill',
        type: 'input-boxes' as const,
        content: `**Hunt the Outlier** 🧮

Test scores, sorted, with $n = 9$:

$$8,\\; 10,\\; 11,\\; 13,\\; 14,\\; 15,\\; 16,\\; 18,\\; 40$$

The five-number summary is min $=8$, $Q_1 = 10.5$, median $=14$, $Q_3 = 17$, max $=40$.

**1)** IQR $= \\,?$
**2)** Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = \\,?$  *(decimal is fine)*
**3)** How many values are outliers? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6.5', '26.75', '1'],
          hint1: 'IQR $= Q_3 - Q_1 = 17 - 10.5 = 6.5$.',
          hint2: 'Upper fence $= 17 + 1.5(6.5) = 17 + 9.75 = 26.75$.',
          hint3: 'Lower fence $= 10.5 - 9.75 = 0.75$. Only $40$ exceeds $26.75$, so there is $1$ outlier.',
          explanation: 'IQR $=6.5$; upper fence $=17 + 9.75 = 26.75$; lower fence $=0.75$. The value $40 > 26.75$ is the only outlier, so the answer is $1$.',
        },
      },
      {
        id: 'bp3-strict',
        type: 'text' as const,
        content: `## A Value *On* the Fence

The fences draw a hard line: a value counts as an outlier only if it is **strictly beyond** a fence — farther out than the fence itself.

- A value **greater than** the upper fence → outlier.
- A value **less than** the lower fence → outlier.
- A value **equal to** a fence → *not* an outlier (it's right on the boundary, still inside).

> ⚠️ A common trap is to flag a point that lands *exactly* on a fence. Don't — equality is not "beyond." Keep this in mind for the next check.`,
      },
      {
        id: 'bp3-fence-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decide: Outlier or Not?** 🔽

A data set has $Q_1 = 30$ and $Q_3 = 50$ (so IQR $= 20$). The fences are: lower $= 30 - 1.5(20) = 0$ and upper $= 50 + 1.5(20) = 80$. For each value, choose whether it's an outlier.`,
        exercise: {
          dropdowns: [
            { label: 'A value of $85$:', options: ['outlier', 'not an outlier'] },
            { label: 'A value of $45$:', options: ['not an outlier', 'outlier'] },
            { label: 'A value of $-5$:', options: ['outlier', 'not an outlier'] },
            { label: 'A value of $80$ (exactly on the upper fence):', options: ['not an outlier', 'outlier'] },
          ],
          correctAnswers: ['outlier', 'not an outlier', 'outlier', 'not an outlier'],
          hint1: 'The fences are $0$ (lower) and $80$ (upper). A value is an outlier only if it is strictly beyond a fence.',
          hint2: '$85 > 80$ → outlier. $-5 < 0$ → outlier. $45$ sits comfortably between $0$ and $80$.',
          hint3: 'A value exactly equal to a fence is **not** beyond it, so $80$ counts as not an outlier.',
          explanation: '$85 > 80$ and $-5 < 0$ are outliers. $45$ is between the fences. $80$ equals the fence (not beyond), so it is not flagged.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'box-plots',
    sections: [
      {
        id: 'bp4-intro',
        type: 'text' as const,
        content: `# 📦 Box Plots

**Part 4 of 5 — Reading & Comparing Box Plots**

---

> 🔑 **Big Payoff:** Box plots really shine when you stack two of them on the **same number line** to compare groups — which has the higher center, which is more spread out, which is skewed.`,
      },
      {
        id: 'bp4-reading',
        type: 'text' as const,
        content: `## Reading a Single Box Plot

You can recover the entire five-number summary just by reading positions off the axis:

| Look at… | To read… |
|----------|----------|
| Left whisker tip | minimum |
| Left box edge | $Q_1$ |
| Line in the box | median |
| Right box edge | $Q_3$ |
| Right whisker tip | maximum |

### Spotting Skew

The median line is rarely centered in the box. Its position tells you about **skew**:

- If the **right** side of the box and whisker is longer (median sits left of center), the data is **skewed right** (a few large values stretch it).
- If the **left** side is longer, the data is **skewed left**.
- If both sides look balanced, the data is roughly **symmetric**.

> 💡 The box plot hides *how many* points sit at each spot — it only shows the five landmarks. So two very different data sets can share the same box plot. It's a summary, not a full picture.`,
      },
      {
        id: 'bp4-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a box plot, the left edge of the box is at $30$ and the right edge is at $48$. What is $Q_1$?',
              options: ['$30$', '$48$', '$39$', '$18$'],
              correctAnswer: 0,
              explanation: 'The **left** edge of the box is always $Q_1$; the right edge is $Q_3$. So $Q_1 = 30$ (and IQR $= 48 - 30 = 18$).',
            },
            {
              question: 'A box plot has a very long right whisker and the median line sits near the left side of the box. The distribution is most likely:',
              options: ['skewed left', 'skewed right', 'perfectly symmetric', 'impossible to tell'],
              correctAnswer: 1,
              explanation: 'A long right tail with the median pushed toward the low end signals data **skewed right** — a few large values stretch the upper end.',
            },
          ],
        },
      },
      {
        id: 'bp4-compare',
        type: 'text' as const,
        content: `## Comparing Two Box Plots

Two classes take the same test. Their five-number summaries:

| | Min | $Q_1$ | Median | $Q_3$ | Max |
|---|---|---|---|---|---|
| **Class A** | $60$ | $65$ | $75$ | $85$ | $90$ |
| **Class B** | $55$ | $60$ | $78$ | $90$ | $95$ |

How to compare them fairly:

- **Center (median):** Class B's median ($78$) is higher than Class A's ($75$) — B's typical score is a bit higher.
- **Spread (IQR):** Class A's IQR is $85 - 65 = 20$; Class B's is $90 - 60 = 30$. Class B's middle half is **more spread out** (less consistent).
- **Overall range:** A spans $90 - 60 = 30$; B spans $95 - 55 = 40$. Again B is wider.

> ⚠️ Always compare **center with center** (median vs. median) and **spread with spread** (IQR vs. IQR). Don't compare one group's median to another group's maximum — that's not a fair comparison.`,
      },
      {
        id: 'bp4-compare-drill',
        type: 'input-boxes' as const,
        content: `**Compare the Classes** 🧮

Use the Class A and Class B summaries from above.

| | Min | $Q_1$ | Median | $Q_3$ | Max |
|---|---|---|---|---|---|
| **Class A** | $60$ | $65$ | $75$ | $85$ | $90$ |
| **Class B** | $55$ | $60$ | $78$ | $90$ | $95$ |

**1)** Class A's IQR $= \\,?$
**2)** Class B's IQR $= \\,?$
**3)** Class B's median minus Class A's median $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '30', '3'],
          hint1: 'Class A IQR $= Q_3 - Q_1 = 85 - 65$.',
          hint2: 'Class B IQR $= 90 - 60$.',
          hint3: 'Median difference $= 78 - 75$.',
          explanation: 'A: $85 - 65 = 20$. B: $90 - 60 = 30$. Median gap: $78 - 75 = 3$. B has a higher center *and* a larger spread.',
        },
      },
      {
        id: 'bp4-conclusions',
        type: 'text' as const,
        content: `## Turning Numbers into Conclusions

The calculations only matter once you translate them into plain-language claims about the two groups:

- **Higher median → higher typical score.** Class B's median ($78$) tops Class A's ($75$), so a typical Class B student scored a bit higher.
- **Smaller IQR → more consistent.** Class A's IQR ($20$) is smaller than Class B's ($30$), so Class A's scores were more tightly clustered.

> 💡 A group can be **better on average yet less consistent** — exactly what we see here. Class B is higher *and* more spread out. Center and spread are two separate questions, so always answer both.`,
      },
      {
        id: 'bp4-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Comparison** 🔽

Still using Class A (median $75$, IQR $20$) and Class B (median $78$, IQR $30$). Choose the best conclusion in each case.`,
        exercise: {
          dropdowns: [
            { label: 'Which class had the higher typical (median) score?', options: ['Class A', 'Class B', 'they tied', 'cannot tell'] },
            { label: 'Which class had more consistent scores (smaller spread)?', options: ['Class A', 'Class B', 'they tied', 'cannot tell'] },
            { label: 'The best single measure to compare the two centers is the:', options: ['median', 'maximum', 'range', 'minimum'] },
          ],
          correctAnswers: ['Class B', 'Class A', 'median'],
          hint1: 'Higher center means higher median: compare $78$ vs. $75$.',
          hint2: 'More consistent means a smaller IQR: compare $20$ vs. $30$.',
          hint3: 'Center is summarized by the median; spread by the IQR.',
          explanation: 'Class B has the higher median ($78 > 75$). Class A has the smaller IQR ($20 < 30$), so it is more consistent. The median is the box-plot measure of center.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'box-plots',
    sections: [
      {
        id: 'bp5-intro',
        type: 'text' as const,
        content: `# 📦 Box Plots

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find a five-number summary, (2) build a box plot and its IQR, (3) flag outliers with the $1.5 \\times \\text{IQR}$ rule, and (4) read and compare plots. Let's put it all together.`,
      },
      {
        id: 'bp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Five-number summary | sort, then min, $Q_1$, median, $Q_3$, max |
| $Q_1$ / $Q_3$ | median of the lower / upper half |
| Box length (IQR) | $\\text{IQR} = Q_3 - Q_1$ |
| Range | $\\text{max} - \\text{min}$ |
| Outlier fences | $Q_1 - 1.5\\cdot\\text{IQR}$ and $Q_3 + 1.5\\cdot\\text{IQR}$ |
| Box contains | the middle $50\\%$ of the data |

> ⚠️ Remember: **sort first**, exclude the median from the halves when $n$ is odd, and a value exactly on a fence is **not** an outlier.`,
      },
      {
        id: 'bp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the five-number summary of $\\;22,\\; 25,\\; 28,\\; 30,\\; 33,\\; 37,\\; 40,\\; 44\\;$. What is the median?',
              options: ['$30$', '$31.5$', '$33$', '$30.5$'],
              correctAnswer: 1,
              explanation: '$n=8$ (even). The two middle values are the $4^{\\text{th}}$ and $5^{\\text{th}}$: $30$ and $33$. Median $= \\frac{30+33}{2} = 31.5$.',
            },
            {
              question: 'A box plot has min $=5$, $Q_1 = 12$, median $=18$, $Q_3 = 24$, max $=40$. What is the IQR?',
              options: ['$35$', '$12$', '$6$', '$24$'],
              correctAnswer: 1,
              explanation: '$\\text{IQR} = Q_3 - Q_1 = 24 - 12 = 12$. (The range would be $40 - 5 = 35$ — do not mix them up.)',
            },
          ],
        },
      },
      {
        id: 'bp5-full-method',
        type: 'text' as const,
        content: `## The Full Method, Start to Finish

Here is the complete workflow for any data set, in order:

1. **Sort** the values from smallest to largest.
2. Find the **median**, then $Q_1$ and $Q_3$ (medians of the lower and upper halves).
3. Record the **min** and **max** for the whole five-number summary.
4. Compute $\\text{IQR} = Q_3 - Q_1$.
5. Build **fences** at $Q_1 - 1.5\\cdot\\text{IQR}$ and $Q_3 + 1.5\\cdot\\text{IQR}$ and flag any **outliers**.

The next drill walks you through every one of these steps on a fresh data set.`,
      },
      {
        id: 'bp5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Full Analysis** 🧮

Hours of sleep recorded for $10$ students, sorted:

$$4,\\; 6,\\; 7,\\; 7,\\; 8,\\; 10,\\; 12,\\; 14,\\; 15,\\; 21$$

The five-number summary is min $=4$, $Q_1 = 7$, median $=9$, $Q_3 = 14$, max $=21$.

**1)** IQR $= \\,?$
**2)** Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = \\,?$  *(decimal is fine)*
**3)** Is the maximum value $21$ an outlier? Enter **yes** or **no**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '24.5', 'no'],
          hint1: 'IQR $= Q_3 - Q_1 = 14 - 7 = 7$.',
          hint2: 'Upper fence $= 14 + 1.5(7) = 14 + 10.5 = 24.5$.',
          hint3: 'Compare $21$ to the upper fence $24.5$. Since $21 < 24.5$, it is inside the fence.',
          explanation: 'IQR $= 7$; upper fence $= 14 + 10.5 = 24.5$. Because $21 < 24.5$ (and $21$ is above the lower fence $7 - 10.5 = -3.5$), it is **not** an outlier — answer: no.',
        },
      },
      {
        id: 'bp5-wrap',
        type: 'text' as const,
        content: `## You're Ready

That last drill used every skill in this lesson at once — five-number summary, IQR, fences, and an outlier decision. If it felt routine, you've got box plots down.

> 🔑 **One-line summary:** A box plot is the five-number summary made visible — a box of the middle $50\\%$, whiskers to the extremes, and dots for any value past the $1.5\\times\\text{IQR}$ fences.

Finish with the exit quiz below.`,
      },
      {
        id: 'bp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For the data $\\;3,\\; 5,\\; 6,\\; 8,\\; 9,\\; 11,\\; 14\\;$ ($n=7$, sorted), what is $Q_1$?',
              options: ['$5$', '$6$', '$8$', '$3$'],
              correctAnswer: 0,
              explanation: 'The median is the $4^{\\text{th}}$ value, $8$. The lower half (below $8$) is $\\{3,5,6\\}$, whose median is $5$. So $Q_1 = 5$.',
            },
            {
              question: 'A distribution has $Q_1 = 40$, $Q_3 = 60$ (IQR $= 20$). What is the lower fence for outliers?',
              options: ['$10$', '$20$', '$30$', '$0$'],
              correctAnswer: 0,
              explanation: 'Lower fence $= Q_1 - 1.5 \\cdot \\text{IQR} = 40 - 1.5(20) = 40 - 30 = 10$.',
            },
            {
              question: 'In a box plot, the box itself (from $Q_1$ to $Q_3$) represents:',
              options: ['the middle $50\\%$ of the data', 'all of the data', 'only the outliers', 'the largest $25\\%$ of the data'],
              correctAnswer: 0,
              explanation: 'The box spans $Q_1$ to $Q_3$, which captures the **middle $50\\%$** of the values. The whiskers and any outlier dots cover the rest.',
            },
          ],
        },
      },
    ],
  },
]
