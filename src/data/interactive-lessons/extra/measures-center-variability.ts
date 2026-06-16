import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Measures of Center and Variability (Grade 6 Math).
 * Registry key / DB slug: 'measures-center-variability'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'measures-center-variability',
    sections: [
      {
        id: 'mcv1-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center and Variability

**Part 1 of 5 — The Mean (Average)**

---

### Topics in This Part

| Section |
|---------|
| What a "Measure of Center" Is |
| Finding the Mean (Fair Share) |
| Working Backward to a Missing Value |

> 🔑 **Key Concept:** A whole list of numbers can be summarized by a single typical value called a **measure of center**. The most famous one is the **mean** — what you probably call the "average."`,
      },
      {
        id: 'mcv1-what',
        type: 'text' as const,
        content: `## What Is a Measure of Center?

A **data set** is just a list of numbers — test scores, heights, the number of pets each kid owns.

A **measure of center** is a single number that describes the "middle" or "typical" value of the whole list. It answers the question:

> "If I had to pick **one** number to stand for this whole group, what would it be?"

In this lesson you'll meet three measures of center — the **mean**, the **median**, and the **mode** — plus measures of **variability** (how spread out the data is). We start with the mean.

| Word | What it tells you |
|------|-------------------|
| **Center** | What's typical (mean, median, mode) |
| **Variability** | How spread out the data is (range, MAD) |`,
      },
      {
        id: 'mcv1-mean',
        type: 'text' as const,
        content: `## The Mean = the "Fair Share"

To find the **mean**, add up all the values, then divide by how many values there are:

$$\\text{mean} = \\frac{\\text{sum of all values}}{\\text{number of values}}$$

Think of it as a **fair share**: if everyone pooled their amounts together and split the total evenly, the mean is what each one would get.

### Worked Example

Four friends have $7, 9, 11,$ and $13$ stickers.

$$\\text{mean} = \\frac{7 + 9 + 11 + 13}{4} = \\frac{40}{4} = 10$$

If they pooled all $40$ stickers and split them evenly, each would get $10$. ✓

> 💡 The mean does **not** have to be a number that actually appears in the list. No friend has exactly $10$ stickers, yet $10$ is still the mean.`,
      },
      {
        id: 'mcv1-mc1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the mean of $2, 4, 6, 8,$ and $10$?',
              options: ['$5$', '$6$', '$8$', '$30$'],
              correctAnswer: 1,
              explanation: 'Sum $= 2+4+6+8+10 = 30$. There are $5$ values, so mean $= 30 \\div 5 = 6$.',
            },
            {
              question: 'Which sentence best describes the mean?',
              options: [
                'The number that appears most often',
                'The middle number when the list is sorted',
                'The fair-share value: the total split evenly among all values',
                'The difference between the biggest and smallest value',
              ],
              correctAnswer: 2,
              explanation: 'The mean is the "fair share" — add everything up and divide by how many there are. (The most-often value is the mode, the middle value is the median, and the biggest-minus-smallest is the range.)',
            },
          ],
        },
      },
      {
        id: 'mcv1-drill1',
        type: 'input-boxes' as const,
        content: `**Find the Mean** 🧮

Add the values and divide by how many there are.

**1)** Mean of $6, 7, 8, 9, 10 = \\,?$
**2)** Mean of $3, 3, 4, 10 = \\,?$
**3)** Mean of $12, 15, 9, 8, 6 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '5', '10'],
          hint1: 'Mean $= \\dfrac{\\text{sum}}{\\text{count}}$. Add first, then divide by the number of values.',
          hint2: '1) $6+7+8+9+10 = 40$, and there are $5$ values.',
          hint3: '2) $3+3+4+10 = 20 \\div 4$.   3) $12+15+9+8+6 = 50 \\div 5$.',
          explanation: '1) $40 \\div 5 = 8$.   2) $20 \\div 4 = 5$.   3) $50 \\div 5 = 10$.',
        },
      },
      {
        id: 'mcv1-backward',
        type: 'text' as const,
        content: `## Working Backward: A Missing Value

If you know the **mean**, you also know the **total** — just multiply:

$$\\text{sum} = \\text{mean} \\times \\text{number of values}$$

### Worked Example

Five quiz scores have a mean of $20$. Four of the scores are $18, 22, 15,$ and $19$. What is the fifth?

$$\\text{total} = 20 \\times 5 = 100$$
$$\\text{four known scores} = 18 + 22 + 15 + 19 = 74$$
$$\\text{fifth score} = 100 - 74 = 26$$

> ✅ **Check:** $\\dfrac{18+22+15+19+26}{5} = \\dfrac{100}{5} = 20$ ✓`,
      },
      {
        id: 'mcv1-drill2',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮

**1)** Six numbers have a mean of $10$. What is their **total**?
**2)** A student's three test scores are $80, 90,$ and $? $. The mean is $85$. What is the missing score?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['60', '85'],
          hint1: 'Total $= \\text{mean} \\times \\text{count}$.',
          hint2: '1) Total $= 10 \\times 6$.',
          hint3: '2) Total must be $85 \\times 3 = 255$; subtract the two known scores $80 + 90 = 170$.',
          explanation: '1) $10 \\times 6 = 60$.   2) Total $= 85 \\times 3 = 255$, and $255 - 170 = 85$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'measures-center-variability',
    sections: [
      {
        id: 'mcv2-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center and Variability

**Part 2 of 5 — Median & Mode**

---

> 🔑 **The Idea:** The mean isn't the only way to find a "center." The **median** is the literal middle of a sorted list, and the **mode** is the value that shows up most often.`,
      },
      {
        id: 'mcv2-median',
        type: 'text' as const,
        content: `## The Median = the Middle

The **median** is the middle value once the data is put **in order** from least to greatest.

**Step 1 — Always sort first.** This is the step students forget most.

**Odd number of values:** the median is the single value in the middle.

$$3,\\; 5,\\; \\boxed{7},\\; 9,\\; 11 \\quad\\Rightarrow\\quad \\text{median} = 7$$

**Even number of values:** there are *two* middle values — the median is the **mean of those two**.

$$2,\\; \\boxed{5,\\; 7},\\; 10 \\quad\\Rightarrow\\quad \\text{median} = \\frac{5+7}{2} = 6$$

> ⚠️ **Sort first, every time.** The median of $5, 2, 9, 2, 7$ is **not** $9$. Sorted it is $2, 2, \\boxed{5}, 7, 9$, so the median is $5$.`,
      },
      {
        id: 'mcv2-mc1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $12, 7, 9, 15, 20, 8, 11$?',
              options: ['$11$', '$15$', '$9$', '$12$'],
              correctAnswer: 0,
              explanation: 'Sort first: $7, 8, 9, \\boxed{11}, 12, 15, 20$. There are $7$ values, so the middle (4th) value is $11$.',
            },
            {
              question: 'What is the median of $6, 2, 8, 4$?',
              options: ['$4$', '$5$', '$6$', '$8$'],
              correctAnswer: 1,
              explanation: 'Sort: $2, 4, 6, 8$. With an even count, average the two middle values: $\\dfrac{4+6}{2} = 5$.',
            },
          ],
        },
      },
      {
        id: 'mcv2-mode',
        type: 'text' as const,
        content: `## The Mode = the Most Common

The **mode** is the value that appears **most often**.

| Data set | Mode |
|----------|------|
| $4, 4, 5, 6, 6, 6, 7$ | $6$ (appears three times) |
| $1, 2, 2, 3, 3$ | $2$ **and** $3$ (a tie — *bimodal*) |
| $1, 2, 3, 4$ | **no mode** (every value appears once) |

> 💡 A data set can have **one** mode, **more than one** mode, or **no** mode at all. That makes the mode different from the mean and median, which a list always has exactly one of.

The mode is the only measure of center that also works for things you can't average — like the most common **color** of car in a parking lot.`,
      },
      {
        id: 'mcv2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Data Set to Its Center** 🔽

Use the data set $90, 85, 100, 75, 95$ (five test scores).`,
        exercise: {
          dropdowns: [
            { label: 'Sorted, the data set is:', options: ['$75, 85, 90, 95, 100$', '$90, 85, 100, 75, 95$', '$100, 95, 90, 85, 75$', '$75, 90, 85, 95, 100$'] },
            { label: 'The median is:', options: ['$90$', '$85$', '$95$', '$87.5$'] },
            { label: 'The mode is:', options: ['no mode', '$90$', '$100$', '$75$'] },
          ],
          correctAnswers: ['$75, 85, 90, 95, 100$', '$90$', 'no mode'],
          hint1: 'To sort, list the scores from least to greatest: smallest is $75$, largest is $100$.',
          hint2: 'With $5$ sorted values, the median is the 3rd one.',
          hint3: 'A mode needs a repeated value. Here every score appears exactly once, so there is no mode.',
          explanation: 'Sorted: $75, 85, \\boxed{90}, 95, 100$ → median $= 90$. No value repeats, so there is no mode.',
        },
      },
      {
        id: 'mcv2-drill',
        type: 'input-boxes' as const,
        content: `**Median & Mode Drill** 🧮

**1)** Median of $4, 8, 15, 16, 23, 42 = \\,?$  *(even count — average the middle two)*
**2)** Mode of $2, 7, 7, 7, 9, 12 = \\,?$
**3)** Median of $5, 2, 9, 2, 7 = \\,?$  *(sort first!)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15.5', '7', '5'],
          hint1: 'Always sort before finding a median. For an even count, average the two middle values.',
          hint2: '1) The two middle values of $4, 8, 15, 16, 23, 42$ are $15$ and $16$.',
          hint3: '3) Sorted, $5, 2, 9, 2, 7$ becomes $2, 2, 5, 7, 9$ — the middle value is the median.',
          explanation: '1) $\\dfrac{15+16}{2} = 15.5$.   2) $7$ appears three times, so the mode is $7$.   3) Sorted $2,2,5,7,9$ → median $= 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'measures-center-variability',
    sections: [
      {
        id: 'mcv3-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center and Variability

**Part 3 of 5 — Range, Outliers & Choosing the Right Center**

---

> 🔑 **The Idea:** Two data sets can have the **same center** but feel completely different because one is more **spread out**. The simplest measure of spread is the **range**, and a single extreme value — an **outlier** — can change which center to trust.`,
      },
      {
        id: 'mcv3-range',
        type: 'text' as const,
        content: `## The Range = Spread from Low to High

The **range** measures **variability** — how spread out the data is. It is the largest value minus the smallest value:

$$\\text{range} = \\text{maximum} - \\text{minimum}$$

### Examples

| Data set | Max | Min | Range |
|----------|-----|-----|-------|
| $4, 8, 15, 16, 23, 42$ | $42$ | $4$ | $42 - 4 = 38$ |
| $12, 15, 9, 8, 6$ | $15$ | $6$ | $15 - 6 = 9$ |
| $5, 5, 5, 5, 5$ | $5$ | $5$ | $5 - 5 = 0$ |

> 💡 A range of $0$ means **every value is the same** — there is no spread at all. The larger the range, the more spread out the data.`,
      },
      {
        id: 'mcv3-mc1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the range of $100, 2, 5, 7, 9$?',
              options: ['$98$', '$100$', '$93$', '$11$'],
              correctAnswer: 0,
              explanation: 'Range $= \\text{max} - \\text{min} = 100 - 2 = 98$. (You do not need to sort the whole list — just find the biggest and smallest.)',
            },
            {
              question: 'The range of a data set is $0$. What must be true?',
              options: [
                'There is exactly one value in the set',
                'Every value in the set is the same',
                'The mean is $0$',
                'The set has no mode',
              ],
              correctAnswer: 1,
              explanation: 'Range $= \\text{max} - \\text{min} = 0$ means the max equals the min, so all the values are identical (for example $5, 5, 5, 5$).',
            },
          ],
        },
      },
      {
        id: 'mcv3-outliers',
        type: 'text' as const,
        content: `## Outliers Pull the Mean

An **outlier** is a value that is much larger or much smaller than the rest. Outliers affect the **mean** a lot, but the **median** barely at all.

### Worked Example

A small online store sold these numbers of items on five days: $2, 3, 4, 5, 86$.

**Mean:** $\\dfrac{2+3+4+5+86}{5} = \\dfrac{100}{5} = 20$

**Median:** sorted is $2, 3, \\boxed{4}, 5, 86$, so the median $= 4$.

The mean ($20$) is bigger than **every value except** the $86$. That one huge day pulled the mean way up, so it doesn't describe a *typical* day. The median ($4$) does.

> 🔑 **Rule of thumb:** When a data set has an outlier, the **median** is usually the better measure of center, because it isn't dragged around by extreme values.`,
      },
      {
        id: 'mcv3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Better Center** 🔽

A class's homework times (in minutes) are $10, 12, 11, 13, 90$. The $90$ is an outlier (someone forgot for weeks!).`,
        exercise: {
          dropdowns: [
            { label: 'The value $90$ is best described as a(n):', options: ['outlier', 'mode', 'median', 'range'] },
            { label: 'The outlier most strongly affects the:', options: ['mean', 'median', 'mode', 'minimum'] },
            { label: 'The better measure of a typical homework time here is the:', options: ['median', 'mean', 'range', 'maximum'] },
          ],
          correctAnswers: ['outlier', 'mean', 'median'],
          hint1: 'A value far from all the others is an outlier.',
          hint2: 'The mean uses every value in its sum, so one huge value drags it up.',
          hint3: 'Because the median only depends on the middle position, it ignores how extreme the outlier is — so it is more typical here.',
          explanation: 'The $90$ is an outlier. It inflates the mean (the mean of these is $27.2$, far above the cluster near $11$–$13$) but the median stays at $12$. With an outlier present, the median is the more typical center.',
        },
      },
      {
        id: 'mcv3-drill',
        type: 'input-boxes' as const,
        content: `**Range Drill** 🧮

Find the range $= \\text{max} - \\text{min}$ for each set.

**1)** $4, 8, 15, 16, 23, 42 \\Rightarrow \\text{range} = \\,?$
**2)** $12, 15, 9, 8, 6 \\Rightarrow \\text{range} = \\,?$
**3)** $7, 7, 7, 7 \\Rightarrow \\text{range} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['38', '9', '0'],
          hint1: 'Range $= \\text{largest value} - \\text{smallest value}$.',
          hint2: '1) Largest is $42$, smallest is $4$.   2) Largest is $15$, smallest is $6$.',
          hint3: '3) When every value is identical, max $=$ min, so the range is $0$.',
          explanation: '1) $42 - 4 = 38$.   2) $15 - 6 = 9$.   3) $7 - 7 = 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'measures-center-variability',
    sections: [
      {
        id: 'mcv4-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center and Variability

**Part 4 of 5 — Mean Absolute Deviation (MAD)**

---

> 🔑 **Big Idea:** The range only looks at the two most extreme values. The **mean absolute deviation (MAD)** uses **every** value to measure spread: it's the *average distance* of the data from the mean.`,
      },
      {
        id: 'mcv4-mad',
        type: 'text' as const,
        content: `## What Is the MAD?

The **mean absolute deviation** answers: *on average, how far is each value from the mean?*

**Steps to find the MAD:**

1. Find the **mean** of the data.
2. Find each value's **distance** from the mean (always positive — that's the "absolute" part).
3. Find the **mean of those distances**.

$$\\text{MAD} = \\frac{\\text{sum of distances from the mean}}{\\text{number of values}}$$

> 💡 "Absolute" just means we drop the minus sign — a distance is never negative. A value $4$ below the mean and a value $4$ above the mean are both a distance of $4$ away.`,
      },
      {
        id: 'mcv4-worked',
        type: 'text' as const,
        content: `## Worked Example: $2, 4, 6, 8, 10$

**Step 1 — Mean:** $\\dfrac{2+4+6+8+10}{5} = \\dfrac{30}{5} = 6$.

**Step 2 — Distance of each value from $6$:**

| Value | $2$ | $4$ | $6$ | $8$ | $10$ |
|-------|-----|-----|-----|-----|------|
| Distance from $6$ | $4$ | $2$ | $0$ | $2$ | $4$ |

**Step 3 — Mean of the distances:**

$$\\text{MAD} = \\frac{4 + 2 + 0 + 2 + 4}{5} = \\frac{12}{5} = 2.4$$

So on average, each value sits **$2.4$ units** away from the mean of $6$.

> ⚠️ Use the **distance** (always positive), not the signed difference. If you forget the absolute value, the positives and negatives cancel and you'll always get $0$.`,
      },
      {
        id: 'mcv4-mc1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the MAD, why do we use the **distance** from the mean instead of the signed difference?',
              options: [
                'Because distances are easier to add',
                'Because the signed differences from the mean always add up to $0$, which would tell us nothing about spread',
                'Because the mean is always negative',
                'Because we want the largest value only',
              ],
              correctAnswer: 1,
              explanation: 'The signed differences from the mean always sum to $0$ (the values above and below cancel out). Taking the absolute value — the distance — keeps every contribution positive so the average actually measures spread.',
            },
            {
              question: 'A data set has a MAD of $0$. What does that tell you?',
              options: [
                'The mean is $0$',
                'Every value equals the mean (no spread)',
                'There is exactly one value',
                'The range is large',
              ],
              correctAnswer: 1,
              explanation: 'MAD $= 0$ means every distance from the mean is $0$, so every value equals the mean — the data has no spread at all (e.g. $4, 4, 4, 4$).',
            },
          ],
        },
      },
      {
        id: 'mcv4-drill1',
        type: 'input-boxes' as const,
        content: `**Build the MAD Step by Step** 🧮

Data set: $5, 8, 8, 11$.

**1)** Mean $= \\,?$
**2)** Sum of the distances from the mean $= \\,?$
**3)** MAD $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '1.5'],
          hint1: '1) Mean $= \\dfrac{5+8+8+11}{4}$.',
          hint2: '2) Distances from $8$: $\\lvert 5-8\\rvert=3$, $\\lvert 8-8\\rvert=0$, $\\lvert 8-8\\rvert=0$, $\\lvert 11-8\\rvert=3$. Add them.',
          hint3: '3) MAD $= \\dfrac{\\text{sum of distances}}{4} = \\dfrac{6}{4}$.',
          explanation: '1) Mean $= \\dfrac{32}{4} = 8$.   2) Distances $3+0+0+3 = 6$.   3) MAD $= \\dfrac{6}{4} = 1.5$.',
        },
      },
      {
        id: 'mcv4-compare',
        type: 'text' as const,
        content: `## Comparing Spread with the MAD

Two groups of five students each have a mean score of $50$, but very different spreads:

| Group | Scores | Mean | MAD |
|-------|--------|------|-----|
| **A** | $48, 49, 50, 51, 52$ | $50$ | $1.2$ |
| **B** | $40, 45, 50, 55, 60$ | $50$ | $6.0$ |

Both groups *center* at $50$, but Group **B** is much more **spread out**. The MAD makes that precise: B's values sit on average $6$ points from the mean, while A's sit only $1.2$ points away.

> 🔑 **A larger MAD means more variability** (more spread). A smaller MAD means the data clusters tightly around the mean.`,
      },
      {
        id: 'mcv4-drill2',
        type: 'input-boxes' as const,
        content: `**MAD Practice** 🧮

**1)** Find the MAD of $3, 5, 7, 9$. *(mean is $6$)*
**2)** Find the MAD of $10, 12, 14, 16, 18$. *(mean is $14$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '2.4'],
          hint1: 'Find each distance from the mean, add them, then divide by the count.',
          hint2: '1) Distances from $6$: $3, 1, 1, 3$. Sum $= 8$, divided by $4$.',
          hint3: '2) Distances from $14$: $4, 2, 0, 2, 4$. Sum $= 12$, divided by $5$.',
          explanation: '1) $\\dfrac{3+1+1+3}{4} = \\dfrac{8}{4} = 2$.   2) $\\dfrac{4+2+0+2+4}{5} = \\dfrac{12}{5} = 2.4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'measures-center-variability',
    sections: [
      {
        id: 'mcv5-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center and Variability

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now find the **mean, median, and mode** (center), the **range and MAD** (variability), and you know when an **outlier** makes the median the smarter choice. Let's put it all together.`,
      },
      {
        id: 'mcv5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Measure | What it is | How to find it |
|---------|-----------|----------------|
| **Mean** | fair-share average | sum $\\div$ count |
| **Median** | middle of sorted list | sort, then take the middle (avg the two middles if even) |
| **Mode** | most common value | the value that repeats most |
| **Range** | total spread | max $-$ min |
| **MAD** | average distance from mean | average of the distances from the mean |

> ⚠️ **Two habits that prevent most mistakes:** (1) always **sort before** finding a median, and (2) always use **positive distances** when finding a MAD.

> 💡 **Center vs. variability:** mean / median / mode describe the *typical value*; range and MAD describe *how spread out* the data is. A full summary of data usually reports **one of each**.`,
      },
      {
        id: 'mcv5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the data set $8, 10, 12, 14, 16$, which two values are correct?',
              options: [
                'Mean $= 12$ and median $= 12$',
                'Mean $= 10$ and median $= 12$',
                'Mean $= 12$ and median $= 14$',
                'Mean $= 60$ and median $= 12$',
              ],
              correctAnswer: 0,
              explanation: 'Mean $= \\dfrac{8+10+12+14+16}{5} = \\dfrac{60}{5} = 12$. The list is already sorted, and the middle (3rd) value is $12$, so the median is also $12$.',
            },
            {
              question: 'What is the mode of $2, 3, 3, 3, 5, 8$?',
              options: ['$3$', '$4$', '$5$', 'no mode'],
              correctAnswer: 0,
              explanation: 'The value $3$ appears three times — more than any other value — so the mode is $3$.',
            },
            {
              question: 'A data set’s MAD increases from $1$ to $9$. What does this tell you?',
              options: [
                'The mean got bigger',
                'The data became more spread out (more variable)',
                'The data became less spread out',
                'The median became the mean',
              ],
              correctAnswer: 1,
              explanation: 'A larger MAD means values sit, on average, farther from the mean — so the data is more spread out (more variable).',
            },
          ],
        },
      },
      {
        id: 'mcv5-drill',
        type: 'input-boxes' as const,
        content: `**Final Computation Drill** 🧮

Use the data set $1, 3, 5, 7$ for #1–#2, then answer #3.

**1)** Mean of $1, 3, 5, 7 = \\,?$
**2)** MAD of $1, 3, 5, 7 = \\,?$
**3)** Range of $14, 8, 21, 5, 17 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '16'],
          hint1: '1) Mean $= \\dfrac{1+3+5+7}{4}$.',
          hint2: '2) Distances from the mean $4$: $3, 1, 1, 3$. Average them.',
          hint3: '3) Range $= \\text{max} - \\text{min} = 21 - 5$.',
          explanation: '1) $\\dfrac{16}{4} = 4$.   2) $\\dfrac{3+1+1+3}{4} = \\dfrac{8}{4} = 2$.   3) $21 - 5 = 16$.',
        },
      },
      {
        id: 'mcv5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Tool** 🔽

Match each goal to the measure you would use.`,
        exercise: {
          dropdowns: [
            { label: 'The "fair-share" typical value:', options: ['mean', 'range', 'mode', 'MAD'] },
            { label: 'The most common shoe size sold:', options: ['mode', 'mean', 'median', 'range'] },
            { label: 'A typical value when there’s a big outlier:', options: ['median', 'mean', 'range', 'mode'] },
            { label: 'How spread out the data is, using every value:', options: ['MAD', 'mode', 'median', 'maximum'] },
          ],
          correctAnswers: ['mean', 'mode', 'median', 'MAD'],
          hint1: 'The "fair share" is the average — sum divided by count.',
          hint2: 'The "most common" value is the mode; "spread using every value" is the MAD.',
          hint3: 'When an outlier would drag the average around, the median is the more typical center.',
          explanation: 'Mean = fair-share average; mode = most common value; median = best center with an outlier; MAD = spread that uses every value (unlike the range, which uses only the two extremes).',
        },
      },
      {
        id: 'mcv5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $8, 3, 5, 9, 3, 7$?',
              options: ['$6$', '$5$', '$7$', '$3$'],
              correctAnswer: 0,
              explanation: 'Sort: $3, 3, 5, 7, 8, 9$. With $6$ values, average the two middle ones: $\\dfrac{5+7}{2} = 6$.',
            },
            {
              question: 'What is the MAD of $2, 4, 6, 8$? *(the mean is $5$)*',
              options: ['$2$', '$3$', '$5$', '$6$'],
              correctAnswer: 0,
              explanation: 'Distances from $5$: $\\lvert 2-5\\rvert=3$, $\\lvert 4-5\\rvert=1$, $\\lvert 6-5\\rvert=1$, $\\lvert 8-5\\rvert=3$. MAD $= \\dfrac{3+1+1+3}{4} = \\dfrac{8}{4} = 2$.',
            },
            {
              question: 'Which statement correctly separates center from variability?',
              options: [
                'Mean and median measure center; range and MAD measure variability',
                'Range and median measure center; mean and mode measure variability',
                'Mode and MAD measure center; mean and median measure variability',
                'All five measure the same thing',
              ],
              correctAnswer: 0,
              explanation: 'Center = typical value (mean, median, mode). Variability = spread (range, MAD). So the first statement is correct.',
            },
          ],
        },
      },
    ],
  },
]
