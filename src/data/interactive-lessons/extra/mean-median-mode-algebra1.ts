import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Measures of Center (Algebra 1).
 * Registry key: 'mean-median-mode-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-algebra1',
    sections: [
      {
        id: 'mmm1-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center

**Part 1 of 5 — What "Center" Means**

---

### Topics in This Part

| Section |
|---------|
| Why We Summarize Data |
| The Three Measures of Center |
| Computing the Mean |

> 🔑 **Key Concept:** A *measure of center* is a single number that represents a "typical" value in a data set. The three you must know are the **mean**, the **median**, and the **mode**.`,
      },
      {
        id: 'mmm1-why',
        type: 'text' as const,
        content: `## Why Summarize Data?

Imagine a teacher records every quiz score in a class:

$$7,\\; 8,\\; 8,\\; 9,\\; 10,\\; 6,\\; 9,\\; 7,\\; 8,\\; 10$$

A list of ten numbers is hard to talk about. Instead we ask: **"What is a typical score?"** That one summary number is a **measure of center**.

The three standard measures answer slightly different questions:

| Measure | Question it answers | One-word idea |
|---------|---------------------|---------------|
| **Mean** | If we shared equally, how much each? | *average* |
| **Median** | What's the middle value? | *middle* |
| **Mode** | What value happens most? | *most common* |

> 💡 They often disagree — and *which one to trust* depends on the data. That's the whole point of this lesson.`,
      },
      {
        id: 'mmm1-mean-teach',
        type: 'text' as const,
        content: `## The Mean (Average)

The **mean** is the sum of all the values divided by how many values there are:

$$\\text{mean} = \\frac{\\text{sum of all values}}{\\text{number of values}}$$

### Worked Example

Find the mean of $\\;4,\\; 8,\\; 15,\\; 16,\\; 23,\\; 42$.

**Step 1 — Add them up:**
$$4 + 8 + 15 + 16 + 23 + 42 = 108$$

**Step 2 — Count the values:** there are $6$ numbers.

**Step 3 — Divide:**
$$\\text{mean} = \\frac{108}{6} = 18$$

> 🔑 **Key Idea:** The mean uses *every* number, so it is pulled toward unusually large or small values. Hold onto that — it becomes important in Part 3.`,
      },
      {
        id: 'mmm1-mean-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which formula gives the mean of a data set?',
              options: [
                '$\\dfrac{\\text{sum of values}}{\\text{number of values}}$',
                '$\\dfrac{\\text{number of values}}{\\text{sum of values}}$',
                'the middle value when sorted',
                'the value that appears most often',
              ],
              correctAnswer: 0,
              explanation: 'The mean is the total of all values divided by the count of values. The "middle value" describes the median, and "most often" describes the mode.',
            },
            {
              question: 'What is the mean of $\\;2,\\; 4,\\; 9$?',
              options: ['$5$', '$4$', '$15$', '$9$'],
              correctAnswer: 0,
              explanation: 'Sum $= 2+4+9 = 15$, and there are $3$ values, so the mean is $15 \\div 3 = 5$.',
            },
          ],
        },
      },
      {
        id: 'mmm1-mean-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Mean** 🧮

Find the mean of each data set. (Decimals are fine.)

**1)** $\\;6,\\; 10,\\; 14$
**2)** $\\;3,\\; 5,\\; 8,\\; 12$
**3)** $\\;20,\\; 20,\\; 30,\\; 40,\\; 40$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '7', '30'],
          hint1: '$(6+10+14) \\div 3 = 30 \\div 3$.',
          hint2: '$(3+5+8+12) \\div 4 = 28 \\div 4$. The answer is a whole number here.',
          hint3: '$(20+20+30+40+40) \\div 5 = 150 \\div 5$.',
          explanation: '1) $30 \\div 3 = 10$.  2) $28 \\div 4 = 7$.  3) $150 \\div 5 = 30$.',
        },
      },
      {
        id: 'mmm1-recap',
        type: 'text' as const,
        content: `## Where We're Headed

You can now compute the **mean** of any list. But the mean is only one of three measures.

In **Part 2** we find the **median** (the middle) and the **mode** (the most common value) — and you'll see they're often easier to read straight off a sorted list. Before we move on, lock in *which name goes with which idea*.

> 💡 Almost every center problem starts the same way: **sort the numbers first.** Keep that habit.`,
      },
      {
        id: 'mmm1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Measure** 🔽

Each measure answers a different question. Match each description to the right measure of center.`,
        exercise: {
          dropdowns: [
            { label: 'Sum of all values divided by the count:', options: ['mean', 'median', 'mode'] },
            { label: 'The value that appears most often:', options: ['mode', 'mean', 'median'] },
            { label: 'The middle value of a sorted list:', options: ['median', 'mean', 'mode'] },
          ],
          correctAnswers: ['mean', 'mode', 'median'],
          hint1: 'Adding everything up and dividing describes the *average*.',
          hint2: '"Most often" points to frequency — the *most common* value.',
          hint3: 'The value in the *middle* of a sorted list has its own name.',
          explanation: 'The **mean** is sum ÷ count, the **mode** is the most frequent value, and the **median** is the middle of a sorted list.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-algebra1',
    sections: [
      {
        id: 'mmm2-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center

**Part 2 of 5 — Median & Mode**

---

> 🔑 **Golden Rule:** To find the **median** or **mode**, *always sort the data from least to greatest first.* An unsorted list will fool you every time.`,
      },
      {
        id: 'mmm2-median-teach',
        type: 'text' as const,
        content: `## The Median (Middle Value)

The **median** is the value in the **middle** of a sorted list.

**Odd number of values** → there is one exact middle value.

$$3,\\; 7,\\; \\boxed{8},\\; 12,\\; 19 \\quad\\Rightarrow\\quad \\text{median} = 8$$

**Even number of values** → there are *two* middle values; the median is their **average**.

$$2,\\; \\boxed{5,\\; 7},\\; 10 \\quad\\Rightarrow\\quad \\text{median} = \\frac{5+7}{2} = 6$$

> ⚠️ **Don't skip the sort!** The median of $9,\\; 2,\\; 5$ is **not** $2$. Sorted, it's $2,\\; 5,\\; 9$, so the median is $5$.`,
      },
      {
        id: 'mmm2-median-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $\\;11,\\; 4,\\; 7,\\; 9,\\; 2$?',
              options: ['$7$', '$9$', '$4$', '$11$'],
              correctAnswer: 0,
              explanation: 'Sort first: $2, 4, 7, 9, 11$. There are $5$ values, so the middle (3rd) value is $7$.',
            },
            {
              question: 'For a data set with an **even** number of values, the median is:',
              options: [
                'the average of the two middle values',
                'always one of the listed values',
                'the largest value',
                'the value that appears most often',
              ],
              correctAnswer: 0,
              explanation: 'With an even count there is no single middle, so you average the two middle values. (That average may not even appear in the list.)',
            },
          ],
        },
      },
      {
        id: 'mmm2-mode-teach',
        type: 'text' as const,
        content: `## The Mode (Most Common Value)

The **mode** is the value that appears **most often**.

$$2,\\; 3,\\; 3,\\; 5,\\; 7,\\; 7,\\; 7,\\; 9 \\quad\\Rightarrow\\quad \\text{mode} = 7 \\;\\;(\\text{appears } 3 \\text{ times})$$

A data set can have special cases:

| Situation | Example | Mode |
|-----------|---------|------|
| One value most common | $4, 4, 6, 9$ | $4$ |
| Two values tie | $1, 1, 5, 8, 8$ | $1$ **and** $8$ (bimodal) |
| Every value appears once | $2, 5, 7, 9$ | **no mode** |

> 💡 The mode is the only measure of center that works for **non-numeric** data — like the most common eye color or favorite sport.`,
      },
      {
        id: 'mmm2-mode-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the mode of $\\;5,\\; 8,\\; 8,\\; 8,\\; 12,\\; 15,\\; 15$?',
              options: ['$8$', '$15$', '$5$', 'no mode'],
              correctAnswer: 0,
              explanation: '$8$ appears three times, while $15$ appears only twice. The most frequent value is $8$.',
            },
            {
              question: 'Which data set has **no mode**?',
              options: ['$1,\\; 4,\\; 6,\\; 9$', '$2,\\; 2,\\; 5$', '$3,\\; 3,\\; 3$', '$7,\\; 7,\\; 8,\\; 8$'],
              correctAnswer: 0,
              explanation: 'In $1, 4, 6, 9$ every value appears exactly once, so there is no mode. The others all have at least one repeated value.',
            },
          ],
        },
      },
      {
        id: 'mmm2-drill',
        type: 'input-boxes' as const,
        content: `**Median & Mode Drill** 🧮

Sort first, then answer.

**1)** Median of $\\;9,\\; 3,\\; 6,\\; 1,\\; 6\\;$ (5 values)
**2)** Median of $\\;10,\\; 2,\\; 6,\\; 8\\;$ (4 values)
**3)** Mode of $\\;4,\\; 7,\\; 4,\\; 9,\\; 4,\\; 7$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '7', '4'],
          hint1: 'Sorted: $1, 3, 6, 6, 9$. The middle (3rd) value is the median.',
          hint2: 'Sorted: $2, 6, 8, 10$. Average the two middle values: $(6+8)\\div 2$.',
          hint3: '$4$ appears three times; $7$ appears twice. Pick the most frequent.',
          explanation: '1) median $= 6$.  2) $(6+8)\\div 2 = 7$.  3) mode $= 4$ (appears $3$ times).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-algebra1',
    sections: [
      {
        id: 'mmm3-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center

**Part 3 of 5 — Outliers & Which Measure to Use**

---

> 🔑 **The Big Question:** When the mean and median disagree, *which one should you report?* The answer depends on whether the data has an **outlier**.`,
      },
      {
        id: 'mmm3-outlier-teach',
        type: 'text' as const,
        content: `## What Is an Outlier?

An **outlier** is a value that is much larger or much smaller than the rest of the data. Watch what one outlier does:

$$\\text{Data: } \\;3,\\; 4,\\; 5,\\; 6,\\; 7$$
$$\\text{mean} = \\frac{25}{5} = 5, \\qquad \\text{median} = 5$$

Now add one huge value, $\\;100$:

$$\\text{Data: } \\;3,\\; 4,\\; 5,\\; 6,\\; 7,\\; 100$$
$$\\text{mean} = \\frac{125}{6} \\approx 20.8, \\qquad \\text{median} = \\frac{5+6}{2} = 5.5$$

The **mean jumped from $5$ to about $20.8$** — but the **median barely moved** (from $5$ to $5.5$).

> ⚠️ **Key Insight:** The **mean is sensitive to outliers**; the **median is resistant** to them. One extreme value can drag the mean far from "typical."`,
      },
      {
        id: 'mmm3-outlier-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Measure** 🔽

For each situation, choose the measure of center that best represents a *typical* value.`,
        exercise: {
          dropdowns: [
            { label: 'Home prices on a street where one mansion costs 10× the others:', options: ['median', 'mean', 'mode', 'range'] },
            { label: 'Test scores that are all close together, no extremes:', options: ['mean', 'median', 'mode', 'outlier'] },
            { label: 'Most popular shoe size sold at a store:', options: ['mode', 'mean', 'median', 'average'] },
          ],
          correctAnswers: ['median', 'mean', 'mode'],
          hint1: 'The mansion is an outlier — use the measure that resists outliers.',
          hint2: 'With no outliers, the mean uses every value and represents the data well.',
          hint3: 'A "size" that sells most often is asking for the most common value.',
          explanation: 'Use the **median** with skewed/outlier data, the **mean** for symmetric data with no outliers, and the **mode** for "most common" (especially categories like shoe size).',
        },
      },
      {
        id: 'mmm3-skew-teach',
        type: 'text' as const,
        content: `## A Quick Rule of Thumb

| If the data... | Best measure | Why |
|----------------|--------------|-----|
| has **no** outliers, fairly symmetric | **mean** | uses all the data |
| has an **outlier** or is **skewed** | **median** | not dragged by extremes |
| is **categorical** or "most common" | **mode** | only one that works for categories |

> 💡 This is why news reports usually quote the **median** household income, not the mean — a few billionaires would inflate the mean and make it misleading.`,
      },
      {
        id: 'mmm3-outlier-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has a single very large outlier. Compared with the median, the mean will be:',
              options: ['larger than the median', 'smaller than the median', 'exactly equal to the median', 'equal to the mode'],
              correctAnswer: 0,
              explanation: 'A large outlier pulls the mean upward toward it, while the median stays near the bulk of the data. So the mean ends up larger than the median.',
            },
            {
              question: 'Which measure of center is **resistant** to outliers?',
              options: ['the median', 'the mean', 'both equally', 'neither'],
              correctAnswer: 0,
              explanation: 'The median depends only on the middle position, so a far-off value barely affects it. The mean uses every value, so an outlier shifts it.',
            },
          ],
        },
      },
      {
        id: 'mmm3-outlier-drill',
        type: 'input-boxes' as const,
        content: `**See the Outlier's Effect** 🧮

Data set: $\\;2,\\; 4,\\; 6,\\; 8,\\; 80$

**1)** Find the **mean**. *(decimal is fine)*
**2)** Find the **median**.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20', '6'],
          hint1: 'Sum $= 2+4+6+8+80 = 100$, and there are $5$ values: $100 \\div 5$.',
          hint2: 'Sorted, the data is already $2, 4, 6, 8, 80$. The middle (3rd) value is the median.',
          hint3: 'Notice the gap: the mean ($20$) is far above the median ($6$) because of the outlier $80$.',
          explanation: 'Mean $= 100 \\div 5 = 20$, but median $= 6$. The outlier $80$ pushed the mean far above the typical value — the median is the better summary here.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-algebra1',
    sections: [
      {
        id: 'mmm4-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center

**Part 4 of 5 — Working Backward & Weighted Means**

---

> 🔑 **Level Up:** Real problems rarely just say "find the mean." They give you the mean and ask for a *missing value*, or they weight some values more than others. This part handles both.`,
      },
      {
        id: 'mmm4-missing-teach',
        type: 'text' as const,
        content: `## Finding a Missing Value

If you know the **mean**, you can find a missing data value. The trick: **mean × count = total sum.**

### Worked Example

Four quiz scores have a mean of $80$. Three of them are $75,\\; 82,\\; 88$. Find the fourth.

**Step 1 — Find the required total** using $\\text{sum} = \\text{mean} \\times \\text{count}$:
$$\\text{sum} = 80 \\times 4 = 320$$

**Step 2 — Add the known scores:**
$$75 + 82 + 88 = 245$$

**Step 3 — Subtract to find the missing score:**
$$320 - 245 = 75$$

> ✅ **Check:** $\\dfrac{75 + 82 + 88 + 75}{4} = \\dfrac{320}{4} = 80$ ✓`,
      },
      {
        id: 'mmm4-missing-drill',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮

**1)** Five numbers have a mean of $12$. What is their **total sum**?
**2)** Three test scores have a mean of $90$. Two of them are $85$ and $92$. Find the third score.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['60', '93'],
          hint1: 'Total sum $= \\text{mean} \\times \\text{count} = 12 \\times 5$.',
          hint2: 'Required total $= 90 \\times 3 = 270$. Known scores sum to $85 + 92 = 177$. Subtract.',
          hint3: 'Missing value $=$ required total $-$ sum of known values $= 270 - 177$.',
          explanation: '1) $12 \\times 5 = 60$.  2) Total needed $= 270$; known $= 177$; missing $= 270 - 177 = 93$.',
        },
      },
      {
        id: 'mmm4-weighted-teach',
        type: 'text' as const,
        content: `## The Weighted Mean

Sometimes values count for different amounts. A **weighted mean** multiplies each value by its weight, then divides by the total weight.

### Worked Example: A Course Grade

Your grade is **40% homework** and **60% exams**. You earned $85$ on homework and $90$ on exams.

$$\\text{grade} = (0.40)(85) + (0.60)(90)$$
$$= 34 + 54 = 88$$

Because the weights ($0.40 + 0.60 = 1$) already add to $1$, you do **not** divide again.

> 💡 A plain mean is just a weighted mean where every value has the **same** weight. Weights let some values "count more."`,
      },
      {
        id: 'mmm4-weighted-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Weighted Mean** 🔽

A grade is **30% quizzes** and **70% final exam**. A student scored $80$ on quizzes and $90$ on the final.`,
        exercise: {
          dropdowns: [
            { label: 'Quiz contribution:', options: ['$(0.30)(80)$', '$(0.70)(80)$', '$(0.30)(90)$', '$(80)(90)$'] },
            { label: 'Final exam contribution:', options: ['$(0.70)(90)$', '$(0.30)(90)$', '$(0.70)(80)$', '$(0.50)(90)$'] },
            { label: 'Final grade:', options: ['$87$', '$85$', '$170$', '$63$'] },
          ],
          correctAnswers: ['$(0.30)(80)$', '$(0.70)(90)$', '$87$'],
          hint1: 'Each contribution is (its weight) × (its score). Quizzes have weight $0.30$.',
          hint2: 'The final exam has weight $0.70$ and a score of $90$.',
          hint3: '$(0.30)(80) + (0.70)(90) = 24 + 63 = 87$.',
          explanation: 'Quiz part $= 0.30 \\times 80 = 24$; final part $= 0.70 \\times 90 = 63$; grade $= 24 + 63 = 87$.',
        },
      },
      {
        id: 'mmm4-weighted-drill',
        type: 'input-boxes' as const,
        content: `**Weighted Mean Practice** 🧮

A class grade is **20% labs** and **80% tests**. A student earned $95$ on labs and $85$ on tests.

**1)** Lab contribution: $(0.20)(95) = \\,?$
**2)** Test contribution: $(0.80)(85) = \\,?$
**3)** Final grade (sum of the two contributions): $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['19', '68', '87'],
          hint1: '$0.20 \\times 95 = 19$.',
          hint2: '$0.80 \\times 85 = 68$.',
          hint3: 'Add the two contributions: $19 + 68$.',
          explanation: '1) $0.20 \\times 95 = 19$.  2) $0.80 \\times 85 = 68$.  3) $19 + 68 = 87$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-algebra1',
    sections: [
      {
        id: 'mmm5-intro',
        type: 'text' as const,
        content: `# 📊 Measures of Center

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) compute the mean, median, and mode, (2) decide which one fits the data, and (3) work backward and use weighted means. Let's put it all together.`,
      },
      {
        id: 'mmm5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Measure | How to find it | Best when |
|---------|----------------|-----------|
| **Mean** | $\\dfrac{\\text{sum}}{\\text{count}}$ | data is symmetric, no outliers |
| **Median** | sort, take the middle (avg the two middles if even) | there's an outlier or skew |
| **Mode** | the most frequent value | "most common" / categorical data |

> ⚠️ **Always sort first** for median and mode. And remember: $\\text{sum} = \\text{mean} \\times \\text{count}$ is the key to every "find the missing value" problem.`,
      },
      {
        id: 'mmm5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Data set: $\\;12,\\; 15,\\; 15,\\; 18,\\; 20$

**1)** Mean *(decimal is fine)*
**2)** Median
**3)** Mode`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '15', '15'],
          hint1: 'Sum $= 12+15+15+18+20 = 80$; divide by $5$.',
          hint2: 'The data is already sorted; the middle (3rd) value is the median.',
          hint3: 'Which value appears more than once?',
          explanation: '1) mean $= 80 \\div 5 = 16$.  2) median $= 15$ (3rd value).  3) mode $= 15$ (appears twice). Here all three are close because there is no outlier.',
        },
      },
      {
        id: 'mmm5-word-bridge',
        type: 'text' as const,
        content: `## From Numbers to Word Problems

On a test, measures of center usually arrive *dressed up* as a story: a missing grade, a misleading average, a weighted course score. The math is identical — the skill is **translating the words into the right move**.

> 🔑 Read the question and ask: *Am I being told the mean (so I can find a total), warned about an outlier (so I should pick the median), or given weights (so I build a weighted mean)?* The next two checks practice exactly that.`,
      },
      {
        id: 'mmm5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Apply It** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Six numbers have a mean of $10$. Five of them are $8, 9, 11, 12, 14$. What is the sixth number?',
              options: ['$6$', '$10$', '$54$', '$8$'],
              correctAnswer: 0,
              explanation: 'Required total $= 10 \\times 6 = 60$. The five known values sum to $8+9+11+12+14 = 54$. So the sixth is $60 - 54 = 6$.',
            },
            {
              question: 'A neighborhood\'s home values are mostly near \\$200{,}000, but one home is worth \\$5 million. Which measure best describes a typical home value?',
              options: ['the median', 'the mean', 'the mode', 'the sum'],
              correctAnswer: 0,
              explanation: 'The \\$5 million home is an outlier that would inflate the mean. The median resists outliers, so it best reflects a typical home value.',
            },
          ],
        },
      },
      {
        id: 'mmm5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the median of $\\;14,\\; 3,\\; 9,\\; 3,\\; 7,\\; 12$?',
              options: ['$8$', '$7$', '$9$', '$3$'],
              correctAnswer: 0,
              explanation: 'Sort first: $3, 3, 7, 9, 12, 14$. With $6$ values, average the two middle ones: $(7+9) \\div 2 = 8$.',
            },
            {
              question: 'Which statement is TRUE about the mean and median?',
              options: [
                'An outlier affects the mean more than the median.',
                'An outlier affects the median more than the mean.',
                'The mean is always larger than the median.',
                'The median always equals the mode.',
              ],
              correctAnswer: 0,
              explanation: 'The mean uses every value, so an extreme value drags it; the median depends only on the middle position and stays put. The other statements are false in general.',
            },
            {
              question: 'A grade is 25% homework and 75% exam. A student scored $88$ on homework and $96$ on the exam. The final grade is:',
              options: ['$94$', '$92$', '$184$', '$90$'],
              correctAnswer: 0,
              explanation: '$(0.25)(88) + (0.75)(96) = 22 + 72 = 94$.',
            },
          ],
        },
      },
    ],
  },
]
