import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Range and Outliers (Pre-Algebra).
 * Registry key / DB Topic.slug: 'range-and-outliers'.
 * 5 parts forming a pedagogical arc: range (spread) → spotting outliers informally →
 * the 1.5×IQR rule (quartiles, IQR, fences) → how outliers warp statistics
 * (range/mean/median, resistant measures) → mixed mastery + exit quiz.
 * Teach (text) alternates with interactive checks (multiple-choice + input-boxes +
 * dropdown-select). LaTeX uses DOUBLED backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'range-and-outliers',
    sections: [
      {
        id: 'rao1-intro',
        type: 'text' as const,
        content: `# 📏 Range and Outliers

**Part 1 of 5 — Range: Measuring Spread**

---

### Topics in This Part

| Section |
|---------|
| What "Spread" Means |
| Finding Maximum and Minimum |
| Computing the Range |

> 🔑 **Key Concept:** Two data sets can have the *same average* but feel completely different. The **range** is the simplest way to measure how *spread out* a data set is — that's where we start.`,
      },
      {
        id: 'rao1-spread',
        type: 'text' as const,
        content: `## What Does "Spread" Mean?

Compare two basketball players who each average **20 points** per game over five games:

| Player | Game scores | Average |
|--------|-------------|---------|
| Steady Sam | $18, 19, 20, 21, 22$ | $20$ |
| Wild Wendy | $4, 8, 20, 32, 36$ | $20$ |

Same average — but Wendy is far less *consistent*. Her scores are **spread out**; Sam's are **bunched together**.

A measure of **spread** captures this difference. The easiest one is the **range**.

> 💡 **Center vs. Spread:** The *mean* and *median* tell you where data is **centered**. The *range* tells you how **far apart** the values are. You need both to describe a data set well.`,
      },
      {
        id: 'rao1-maxmin',
        type: 'text' as const,
        content: `## Maximum, Minimum, and Range

The **range** is the distance from the smallest value to the largest:

$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

To find it:
1. **Find the maximum** (largest value).
2. **Find the minimum** (smallest value).
3. **Subtract:** maximum $-$ minimum.

### Worked Example

Data set: $7,\\ 3,\\ 9,\\ 12,\\ 5$

Sorting helps you spot the ends: $3,\\ 5,\\ 7,\\ 9,\\ 12$.

- Maximum $= 12$
- Minimum $= 3$

$$\\text{Range} = 12 - 3 = 9$$

> ⚠️ The range is a **single number**, not an interval. Write the answer as $9$, *not* "$3$ to $12$."`,
      },
      {
        id: 'rao1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Pieces** 🔽

Sorted data set: $14,\\ 22,\\ 9,\\ 31,\\ 18,\\ 6$ → sorted: $6,\\ 9,\\ 14,\\ 18,\\ 22,\\ 31$.`,
        exercise: {
          dropdowns: [
            { label: 'Maximum value:', options: ['$31$', '$22$', '$6$', '$18$'] },
            { label: 'Minimum value:', options: ['$6$', '$9$', '$14$', '$31$'] },
            { label: 'Range:', options: ['$25$', '$37$', '$31$', '$6$'] },
          ],
          correctAnswers: ['$31$', '$6$', '$25$'],
          hint1: 'After sorting, the last value is the maximum and the first is the minimum.',
          hint2: 'Maximum $= 31$, minimum $= 6$.',
          hint3: 'Range $= \\text{max} - \\text{min} = 31 - 6$.',
          explanation: 'Sorted, the data runs $6$ to $31$. Maximum $= 31$, minimum $= 6$, so range $= 31 - 6 = 25$.',
        },
      },
      {
        id: 'rao1-context',
        type: 'text' as const,
        content: `## Range in Context

Range works for any kind of numeric data — temperatures, prices, test scores, heights.

**Example — Daily high temperatures (°F):** $68,\\ 72,\\ 65,\\ 80,\\ 71$

- Maximum $= 80$, Minimum $= 65$
- $$\\text{Range} = 80 - 65 = 15$$

So the temperature varied by **15 °F** across the week.

> 💡 Notice the range is **fast and intuitive**, but it uses **only two values** — the highest and the lowest. Keep that fragility in mind as you practice.`,
      },
      {
        id: 'rao1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The range of a data set is calculated as:',
              options: [
                'maximum $-$ minimum',
                'maximum $+$ minimum',
                'the middle value',
                'the most common value',
              ],
              correctAnswer: 0,
              explanation: 'Range measures spread, so it is the distance from the smallest value to the largest: $\\text{max} - \\text{min}$. The middle value is the median; the most common is the mode.',
            },
            {
              question: 'Two data sets both have a mean of $50$. Set A has range $4$ and Set B has range $90$. Which is true?',
              options: [
                'Set B is much more spread out than Set A.',
                'Set A is much more spread out than Set B.',
                'They are equally spread out because the means match.',
                'Range cannot be compared between data sets.',
              ],
              correctAnswer: 0,
              explanation: 'A larger range means the values stretch farther from smallest to largest. Range $90 > 4$, so Set B is far more spread out, even though both share the same center.',
            },
          ],
        },
      },
      {
        id: 'rao1-drill',
        type: 'input-boxes' as const,
        content: `**Find the Range** 🧮

Compute the range (maximum $-$ minimum) of each data set.

**1)** $5,\\ 8,\\ 2,\\ 11,\\ 7$
**2)** $20,\\ 15,\\ 28,\\ 12,\\ 19,\\ 25$
**3)** $100,\\ 45,\\ 67,\\ 89$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '16', '55'],
          hint1: 'Set 1: max $= 11$, min $= 2$, so range $= 11 - 2$.',
          hint2: 'Set 2: max $= 28$, min $= 12$, so range $= 28 - 12$.',
          hint3: 'Set 3: max $= 100$, min $= 45$, so range $= 100 - 45$.',
          explanation: '1) $11 - 2 = 9$.  2) $28 - 12 = 16$.  3) $100 - 45 = 55$. Sorting each set first makes the ends easy to spot.',
        },
      },
      {
        id: 'rao1-outro',
        type: 'text' as const,
        content: `## Looking Ahead

You can now measure spread with the range. But remember: because it depends on **only the two extreme values**, a single unusual data point can change it dramatically.

> 🔑 **Takeaway:** That fragile point is exactly what **Part 2** is about — **outliers**, the values that lie far from the rest.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'range-and-outliers',
    sections: [
      {
        id: 'rao2-intro',
        type: 'text' as const,
        content: `# 📏 Range and Outliers

**Part 2 of 5 — Spotting Outliers**

---

> 🔑 **The Idea:** An **outlier** is a value that lies *far away* from the rest of the data. Outliers can be real surprises, data-entry typos, or rare events — and they can quietly distort your statistics.`,
      },
      {
        id: 'rao2-what',
        type: 'text' as const,
        content: `## What Is an Outlier?

An **outlier** is a data value that is **unusually far** from the others.

**Example — quiz scores (out of 20):**

$$12,\\ 14,\\ 15,\\ 16,\\ 18,\\ 19,\\ 75$$

Wait — a quiz is out of 20, so $75$ is impossible. It's almost certainly a typo for $7.5$ or $17$. Even before any formula, your eye flags it: there's a **big gap** between $19$ and $75$.

When you sort data and one value sits far past a noticeable **gap**, that value is a likely outlier.

> 💡 Outliers aren't always errors. A genuinely tall student, a record-breaking sale, or an unusually cold day are *real* outliers worth keeping. The goal is to **notice** them and decide what they mean.`,
      },
      {
        id: 'rao2-effect',
        type: 'text' as const,
        content: `## How One Outlier Wrecks the Range

Because the range uses only the **max** and **min**, a single extreme value can blow it up.

Using the quiz scores $12,\\ 14,\\ 15,\\ 16,\\ 18,\\ 19,\\ 75$:

| | With the $75$ | Without the $75$ |
|---|---|---|
| Minimum | $12$ | $12$ |
| Maximum | $75$ | $19$ |
| **Range** | $75 - 12 = 63$ | $19 - 12 = 7$ |

One bad value changed the range from a sensible **7** to a misleading **63**.

> ⚠️ This is why range alone can mislead. A statistic that is barely affected by outliers is called **resistant** — we'll meet resistant measures in Part 4.`,
      },
      {
        id: 'rao2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the sorted data $4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 41$, which value is the likely outlier?',
              options: ['$41$', '$4$', '$8$', '$6$'],
              correctAnswer: 0,
              explanation: 'The values $4$ through $8$ are tightly bunched, then there is a huge gap up to $41$. The value far from the rest is the outlier.',
            },
            {
              question: 'Why is the range especially sensitive to outliers?',
              options: [
                'It depends only on the maximum and minimum values.',
                'It uses every value equally.',
                'It always equals the mean.',
                'It ignores the largest value.',
              ],
              correctAnswer: 0,
              explanation: 'Range $= \\text{max} - \\text{min}$, so it is built entirely from the two most extreme values. If one of those is an outlier, the range is thrown off.',
            },
          ],
        },
      },
      {
        id: 'rao2-drill',
        type: 'input-boxes' as const,
        content: `**Outlier vs. Range** 🧮

For each set, find the range **with** the outlier, then the range **without** it (drop the bold value).

**1)** $22,\\ 24,\\ 25,\\ 27,\\ 29,\\ 30,\\ \\mathbf{88}$
&nbsp;&nbsp;&nbsp;Range *with* $88 = \\,?$  &nbsp;&nbsp; Range *without* $88 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['66', '8'],
          hint1: 'With $88$: max $= 88$, min $= 22$, so range $= 88 - 22$.',
          hint2: 'Without $88$: the new max is $30$, min still $22$, so range $= 30 - 22$.',
          hint3: 'Compare: dropping the single outlier shrinks the range from $66$ down to $8$.',
          explanation: 'With $88$: $88 - 22 = 66$. Without $88$: $30 - 22 = 8$. One outlier inflated the range by a factor of more than $8$.',
        },
      },
      {
        id: 'rao2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Data** 🔽

Sorted heights (cm) of a small team: $150,\\ 152,\\ 153,\\ 155,\\ 156,\\ 190$.`,
        exercise: {
          dropdowns: [
            { label: 'The likely outlier is:', options: ['$190$', '$150$', '$153$', '$156$'] },
            { label: 'Range with the outlier:', options: ['$40$', '$6$', '$190$', '$34$'] },
            { label: 'Range without the outlier:', options: ['$6$', '$40$', '$5$', '$156$'] },
          ],
          correctAnswers: ['$190$', '$40$', '$6$'],
          hint1: 'Five values sit between $150$ and $156$; one value jumps to $190$.',
          hint2: 'With $190$: $190 - 150 = 40$.',
          hint3: 'Without $190$: new max $156$, min $150$, so $156 - 150 = 6$.',
          explanation: '$190$ sits far above the cluster, so it is the outlier. Range with it: $190-150=40$; without it: $156-150=6$. The outlier more than sextupled the range.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'range-and-outliers',
    sections: [
      {
        id: 'rao3-intro',
        type: 'text' as const,
        content: `# 📏 Range and Outliers

**Part 3 of 5 — The 1.5 × IQR Rule**

---

> 🔑 **Why a rule?** "It looks far away" isn't precise. Statisticians use the **interquartile range (IQR)** to draw exact boundaries — called **fences** — so an outlier is defined, not guessed.`,
      },
      {
        id: 'rao3-quartiles',
        type: 'text' as const,
        content: `## Quartiles and the IQR

**Quartiles** split sorted data into four equal parts:

- **$Q_1$** (first quartile) — the median of the **lower half**.
- **$Q_2$** — the overall median.
- **$Q_3$** (third quartile) — the median of the **upper half**.

The **interquartile range** is the spread of the *middle 50%* of the data:

$$\\text{IQR} = Q_3 - Q_1$$

> 💡 Unlike the range, the IQR ignores the extreme ends and looks only at the middle — that's what makes it **resistant** to outliers and perfect for detecting them.`,
      },
      {
        id: 'rao3-quartiles-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The interquartile range (IQR) is defined as:',
              options: [
                '$Q_3 - Q_1$',
                '$\\text{max} - \\text{min}$',
                '$Q_1 + Q_3$',
                'the median',
              ],
              correctAnswer: 0,
              explanation: 'The IQR is the spread of the middle half of the data: third quartile minus first quartile, $Q_3 - Q_1$. (Max $-$ min is the ordinary range.)',
            },
            {
              question: '$Q_1$ (the first quartile) is found by taking the median of:',
              options: [
                'the lower half of the sorted data',
                'the entire data set',
                'the upper half of the sorted data',
                'the two smallest values',
              ],
              correctAnswer: 0,
              explanation: '$Q_1$ is the median of the lower half (the values below the overall median). $Q_3$ is the median of the upper half.',
            },
          ],
        },
      },
      {
        id: 'rao3-worked',
        type: 'text' as const,
        content: `## Worked Example — Finding the IQR

Data (already sorted, $8$ values): $4,\\ 8,\\ 11,\\ 13,\\ 15,\\ 18,\\ 21,\\ 24$

**Step 1 — Split into halves** (even count, so split down the middle):

- Lower half: $4,\\ 8,\\ 11,\\ 13$
- Upper half: $15,\\ 18,\\ 21,\\ 24$

**Step 2 — Median of each half:**

$$Q_1 = \\frac{8 + 11}{2} = 9.5 \\qquad Q_3 = \\frac{18 + 21}{2} = 19.5$$

**Step 3 — Subtract:**

$$\\text{IQR} = Q_3 - Q_1 = 19.5 - 9.5 = 10$$

> ⚠️ **Odd number of values?** Leave the middle value out of *both* halves when finding $Q_1$ and $Q_3$. (E.g., for $2,5,6,9,12,14,21$ the median $9$ is skipped: $Q_1 = 5$, $Q_3 = 14$.)`,
      },
      {
        id: 'rao3-fences',
        type: 'text' as const,
        content: `## The Fences: 1.5 × IQR

A value is an **outlier** if it falls outside the **fences**:

$$\\text{Lower fence} = Q_1 - 1.5 \\times \\text{IQR}$$
$$\\text{Upper fence} = Q_3 + 1.5 \\times \\text{IQR}$$

Any value **below** the lower fence or **above** the upper fence is an outlier.

### Example — detecting an outlier

Data: $3,\\ 7,\\ 8,\\ 9,\\ 10,\\ 11,\\ 12,\\ 40$ → $Q_1 = 7.5$, $Q_3 = 11.5$, so $\\text{IQR} = 4$.

$$\\text{Upper fence} = 11.5 + 1.5 \\times 4 = 11.5 + 6 = 17.5$$
$$\\text{Lower fence} = 7.5 - 6 = 1.5$$

Is $40$ an outlier? Since $40 > 17.5$, **yes** — $40$ lies above the upper fence. ✓`,
      },
      {
        id: 'rao3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Fences** 🔽

For a data set, $Q_1 = 20$ and $Q_3 = 32$.`,
        exercise: {
          dropdowns: [
            { label: 'IQR $= Q_3 - Q_1 = $', options: ['$12$', '$52$', '$6$', '$18$'] },
            { label: '$1.5 \\times \\text{IQR} = $', options: ['$18$', '$12$', '$24$', '$8$'] },
            { label: 'Upper fence $= Q_3 + 1.5\\,\\text{IQR} = $', options: ['$50$', '$44$', '$38$', '$32$'] },
            { label: 'Lower fence $= Q_1 - 1.5\\,\\text{IQR} = $', options: ['$2$', '$8$', '$14$', '$-18$'] },
          ],
          correctAnswers: ['$12$', '$18$', '$50$', '$2$'],
          hint1: '$\\text{IQR} = 32 - 20 = 12$.',
          hint2: '$1.5 \\times 12 = 18$.',
          hint3: 'Upper $= 32 + 18 = 50$; Lower $= 20 - 18 = 2$.',
          explanation: 'IQR $= 32 - 20 = 12$; $1.5 \\times 12 = 18$. Upper fence $= 32 + 18 = 50$, lower fence $= 20 - 18 = 2$. Anything below $2$ or above $50$ is an outlier.',
        },
      },
      {
        id: 'rao3-drill',
        type: 'input-boxes' as const,
        content: `**Find the IQR** 🧮

For each sorted set, find $Q_1$, $Q_3$, and the IQR.

**1)** $3,\\ 5,\\ 7,\\ 9,\\ 11,\\ 13,\\ 15,\\ 17$
&nbsp;&nbsp;&nbsp;$Q_1 = \\,?$  &nbsp;&nbsp; $Q_3 = \\,?$  &nbsp;&nbsp; $\\text{IQR} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '14', '8'],
          hint1: 'Lower half $3,5,7,9$ → $Q_1 = \\frac{5+7}{2} = 6$.',
          hint2: 'Upper half $11,13,15,17$ → $Q_3 = \\frac{13+15}{2} = 14$.',
          hint3: '$\\text{IQR} = Q_3 - Q_1 = 14 - 6$.',
          explanation: 'Lower half $3,5,7,9$ gives $Q_1 = 6$; upper half $11,13,15,17$ gives $Q_3 = 14$; so $\\text{IQR} = 14 - 6 = 8$.',
        },
      },
      {
        id: 'rao3-fence-drill',
        type: 'input-boxes' as const,
        content: `**Test the Fence** 🧮

A data set has $Q_1 = 8$, $Q_3 = 13$ (so $\\text{IQR} = 5$). The data includes the value $30$.

**1)** Upper fence $= Q_3 + 1.5 \\times \\text{IQR} = \\,?$
**2)** Is $30$ above the upper fence? Enter **1** for yes (outlier) or **0** for no.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20.5', '1'],
          hint1: '$1.5 \\times 5 = 7.5$, so upper fence $= 13 + 7.5$.',
          hint2: 'Compare $30$ to the upper fence $20.5$.',
          hint3: 'Since $30 > 20.5$, the value lies past the fence — it is an outlier.',
          explanation: 'Upper fence $= 13 + 1.5(5) = 13 + 7.5 = 20.5$. Because $30 > 20.5$, the value $30$ is an outlier, so the answer is $1$ (yes).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'range-and-outliers',
    sections: [
      {
        id: 'rao4-intro',
        type: 'text' as const,
        content: `# 📏 Range and Outliers

**Part 4 of 5 — How Outliers Distort Statistics**

---

> 🔑 **Big Idea:** Outliers pull some statistics hard and barely touch others. Knowing **which** measures resist outliers tells you which number to trust.`,
      },
      {
        id: 'rao4-resistant',
        type: 'text' as const,
        content: `## Resistant vs. Non-Resistant

A statistic is **resistant** (or *robust*) if outliers barely change it.

| Statistic | Resistant to outliers? | Why |
|-----------|------------------------|-----|
| **Range** | ❌ No | Uses only max and min |
| **Mean** | ❌ No | Every value is added in, so a huge value drags it |
| **Median** | ✅ Yes | Only the *position* of the middle matters |
| **IQR** | ✅ Yes | Ignores the extreme ends entirely |

> 💡 **Rule of thumb:** When a data set has outliers, report the **median** and **IQR**. When it's roughly symmetric with no outliers, the **mean** and **range** are fine.`,
      },
      {
        id: 'rao4-meanmedian',
        type: 'text' as const,
        content: `## Mean vs. Median Under an Outlier

Start with five values: $10,\\ 12,\\ 13,\\ 14,\\ 15$.

$$\\text{Mean} = \\frac{10+12+13+14+15}{5} = \\frac{64}{5} = 12.8 \\qquad \\text{Median} = 13$$

Now add one outlier, $100$, giving $10,\\ 12,\\ 13,\\ 14,\\ 15,\\ 100$:

$$\\text{Mean} = \\frac{164}{6} \\approx 27.3 \\qquad \\text{Median} = \\frac{13+14}{2} = 13.5$$

| | Before | After adding $100$ |
|---|---|---|
| Mean | $12.8$ | $\\approx 27.3$ |
| Median | $13$ | $13.5$ |

The **mean more than doubled**; the **median barely moved**. The median is **resistant**.

> ⚠️ A single outlier can drag the mean to a value that no longer represents a "typical" data point. That's why news reports often quote the **median** home price or income.`,
      },
      {
        id: 'rao4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair of statistics is BEST to report for a data set that contains a strong outlier?',
              options: [
                'Median and IQR',
                'Mean and range',
                'Mean and IQR',
                'Range and mode',
              ],
              correctAnswer: 0,
              explanation: 'Median and IQR are both resistant, so they describe the bulk of the data without being distorted by the outlier. Mean and range are pulled by extreme values.',
            },
            {
              question: 'A town’s incomes are mostly near \\$45{,}000, but one resident earns \\$8 million. Compared with the median, the mean income will be:',
              options: [
                'much higher than the median',
                'much lower than the median',
                'exactly equal to the median',
                'unaffected by the \\$8 million',
              ],
              correctAnswer: 0,
              explanation: 'The single huge income is added into the total, dragging the mean far upward, while the median (a middle position) stays near the typical value. So the mean ends up much higher.',
            },
          ],
        },
      },
      {
        id: 'rao4-drill',
        type: 'input-boxes' as const,
        content: `**Measure the Impact** 🧮

Start with $4,\\ 5,\\ 6,\\ 7,\\ 8$. Then add the outlier $50$ to get $4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 50$.

**1)** Mean of the **original** five values $= \\,?$
**2)** Mean **after** adding $50$ $= \\,?$  *(round to 2 decimals)*
**3)** Median **after** adding $50$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '13.33', '6.5'],
          hint1: 'Original mean: $\\frac{4+5+6+7+8}{5} = \\frac{30}{5}$.',
          hint2: 'New mean: $\\frac{30 + 50}{6} = \\frac{80}{6}$.',
          hint3: 'With six sorted values $4,5,6,7,8,50$, the median is the average of the 3rd and 4th: $\\frac{6+7}{2}$.',
          explanation: '1) $\\frac{30}{5} = 6$.  2) $\\frac{80}{6} \\approx 13.33$ — the mean more than doubled.  3) Median $= \\frac{6+7}{2} = 6.5$ — barely changed. The mean was distorted; the median resisted.',
        },
      },
      {
        id: 'rao4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Resistant or Not?** 🔽

Classify each statistic by whether an outlier strongly affects it.`,
        exercise: {
          dropdowns: [
            { label: 'The mean is:', options: ['NOT resistant (strongly affected)', 'Resistant (barely affected)'] },
            { label: 'The median is:', options: ['Resistant (barely affected)', 'NOT resistant (strongly affected)'] },
            { label: 'The range is:', options: ['NOT resistant (strongly affected)', 'Resistant (barely affected)'] },
            { label: 'The IQR is:', options: ['Resistant (barely affected)', 'NOT resistant (strongly affected)'] },
          ],
          correctAnswers: [
            'NOT resistant (strongly affected)',
            'Resistant (barely affected)',
            'NOT resistant (strongly affected)',
            'Resistant (barely affected)',
          ],
          hint1: 'A statistic that uses every value (mean) or the extremes (range) is pulled by outliers.',
          hint2: 'A statistic based on position or the middle (median, IQR) ignores how extreme the ends are.',
          hint3: 'Mean and range = not resistant; median and IQR = resistant.',
          explanation: 'Mean (adds every value) and range (uses max and min) are NOT resistant. Median (middle position) and IQR (middle 50%) ARE resistant — they ignore how extreme the outlier is.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'range-and-outliers',
    sections: [
      {
        id: 'rao5-intro',
        type: 'text' as const,
        content: `# 📏 Range and Outliers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) compute the **range**, (2) **spot outliers** by gaps, (3) use the **1.5 × IQR** fences to define outliers exactly, and (4) judge which statistics **resist** outliers. Time to put it together.`,
      },
      {
        id: 'rao5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Measure spread | $\\text{Range} = \\text{max} - \\text{min}$ |
| Spread of middle 50% | $\\text{IQR} = Q_3 - Q_1$ |
| Outlier boundaries | Upper $= Q_3 + 1.5\\,\\text{IQR}$, Lower $= Q_1 - 1.5\\,\\text{IQR}$ |
| Flag an outlier | value $>$ upper fence **or** value $<$ lower fence |
| Describe data *with* outliers | report **median** and **IQR** (both resistant) |

> ⚠️ **Top mistakes to avoid:** writing range as an interval instead of a single number; forgetting to **sort** before finding quartiles; and using the **mean/range** when an outlier is present (use median/IQR instead).`,
      },
      {
        id: 'rao5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the sorted data $12,\\ 15,\\ 15,\\ 18,\\ 20,\\ 22,\\ 90$, the value $90$ has $Q_1 = 15$ and $Q_3 = 22$. Is $90$ an outlier by the 1.5 × IQR rule?',
              options: [
                'Yes, because $90$ is above the upper fence $32.5$.',
                'No, because $90$ is below the upper fence.',
                'Yes, because $90$ is the maximum value.',
                'It cannot be determined.',
              ],
              correctAnswer: 0,
              explanation: '$\\text{IQR} = 22 - 15 = 7$, so the upper fence $= 22 + 1.5(7) = 22 + 10.5 = 32.5$. Since $90 > 32.5$, the value $90$ is an outlier. (Being the maximum alone does not make a value an outlier.)',
            },
            {
              question: 'A data set has an outlier on the high end. Which statement is correct?',
              options: [
                'The mean will likely be greater than the median.',
                'The mean will likely be less than the median.',
                'The mean and median must be equal.',
                'The median will be the largest value.',
              ],
              correctAnswer: 0,
              explanation: 'A high outlier drags the (non-resistant) mean upward while the (resistant) median stays put, so the mean ends up greater than the median.',
            },
          ],
        },
      },
      {
        id: 'rao5-drill',
        type: 'input-boxes' as const,
        content: `**Full Analysis** 🧮

Sorted data: $40,\\ 42,\\ 45,\\ 48,\\ 50$.

**1)** Range $= \\,?$
**2)** Median $= \\,?$

Now a different set has $Q_1 = 15$ and $Q_3 = 22$.

**3)** Upper fence $= Q_3 + 1.5 \\times \\text{IQR} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '45', '32.5'],
          hint1: 'Range $= 50 - 40$.',
          hint2: 'With five sorted values, the median is the middle (3rd) value.',
          hint3: 'IQR $= 22 - 15 = 7$, so upper fence $= 22 + 1.5(7) = 22 + 10.5$.',
          explanation: '1) $50 - 40 = 10$.  2) Median $= 45$ (the 3rd of five values).  3) IQR $= 7$, so upper fence $= 22 + 10.5 = 32.5$.',
        },
      },
      {
        id: 'rao5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Tool** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Best measure of spread when there is a strong outlier:', options: ['IQR', 'Range', 'Mean'] },
            { label: 'A value above the upper fence is:', options: ['an outlier', 'the median', 'always an error'] },
            { label: 'To find $Q_1$ in $1,3,5,7,9$ (odd count), you take the median of:', options: ['$1, 3$', '$1, 3, 5$', '$5, 7, 9$'] },
          ],
          correctAnswers: ['IQR', 'an outlier', '$1, 3$'],
          hint1: 'The IQR ignores the extreme ends, so outliers do not distort it.',
          hint2: 'Fences are the official outlier boundaries; outliers may be real, not necessarily errors.',
          hint3: 'For an odd count, skip the middle value ($5$); the lower half is $1, 3$, and $Q_1$ is its median.',
          explanation: 'IQR is the resistant measure of spread. A value past a fence is, by definition, an outlier (though it may be a genuine data point, not an error). With odd count $1,3,5,7,9$, drop the median $5$; the lower half is $1,3$, so $Q_1 = 2$.',
        },
      },
      {
        id: 'rao5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the range of $8,\\ 10,\\ 12,\\ 14,\\ 16$?',
              options: ['$8$', '$12$', '$16$', '$5$'],
              correctAnswer: 0,
              explanation: 'Range $= \\text{max} - \\text{min} = 16 - 8 = 8$. ($12$ is the median, and $5$ is the count of values — neither is the range.)',
            },
            {
              question: 'A statistic is "resistant" if it:',
              options: [
                'is barely affected by outliers',
                'is the same as the range',
                'always equals the mean',
                'changes a lot when an outlier appears',
              ],
              correctAnswer: 0,
              explanation: 'A resistant statistic (like the median or IQR) hardly changes when an outlier is added. Statistics that change a lot (mean, range) are NOT resistant.',
            },
            {
              question: 'A data set has $Q_1 = 5$ and $Q_3 = 10$. By the 1.5 × IQR rule, the upper fence is:',
              options: ['$17.5$', '$15$', '$12.5$', '$25$'],
              correctAnswer: 0,
              explanation: '$\\text{IQR} = 10 - 5 = 5$, so the upper fence $= Q_3 + 1.5 \\times \\text{IQR} = 10 + 1.5(5) = 10 + 7.5 = 17.5$.',
            },
          ],
        },
      },
    ],
  },
]
