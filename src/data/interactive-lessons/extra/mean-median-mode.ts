import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Mean, Median, and Mode (Pre-Algebra).
 * Registry key / DB Topic.slug: 'mean-median-mode'.
 * 5 parts, gold-standard structure: what is "center" → mean → median → mode &
 * choosing a measure → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every mean, median, and mode below was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'mean-median-mode',
    sections: [
      {
        id: 'mmm1-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, and Mode

**Part 1 of 5 — Measures of Center**

---

### Topics in This Part

| Section |
|---------|
| What "Average" Really Means |
| The Three Measures of Center |
| Reading a Data Set |

> 🔑 **Key Concept:** A whole list of numbers is hard to picture. A **measure of center** squeezes that list down to one number that stands in for the "typical" value. The three you'll master are the **mean**, the **median**, and the **mode**.`,
      },
      {
        id: 'mmm1-what',
        type: 'text' as const,
        content: `## What "Average" Really Means

When someone says a class has an *average* score of $85$, they mean: one number that summarizes how the whole class did. That's a **measure of center** — it points to the middle, or typical, value of a data set.

There are **three** common ones, and they answer slightly different questions:

| Measure | Answers the question… | One-line definition |
|---------|----------------------|---------------------|
| **Mean** | "If we shared equally, how much each?" | Add all values, divide by how many |
| **Median** | "What's the middle value?" | The middle number when sorted |
| **Mode** | "What shows up most?" | The value that appears most often |

> 💡 The word *average* usually means the **mean**, but median and mode are also kinds of averages. This lesson teaches all three — and, just as importantly, **when to use each one**.`,
      },
      {
        id: 'mmm1-vocab',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which measure of center is found by adding all the values and dividing by how many there are?',
              options: ['The mean', 'The median', 'The mode', 'The range'],
              correctAnswer: 0,
              explanation: 'The **mean** is the sum of the values divided by the count. The median is the middle value, and the mode is the most frequent value.',
            },
            {
              question: 'The "mode" of a data set is:',
              options: ['The value that appears most often', 'The middle value when sorted', 'The largest value', 'The sum of all values'],
              correctAnswer: 0,
              explanation: 'The **mode** is the most frequently occurring value. "Mode" and "most" both start with *mo* — a handy memory hook.',
            },
          ],
        },
      },
      {
        id: 'mmm1-dataset',
        type: 'text' as const,
        content: `## Reading a Data Set

A **data set** is just a list of values you collected. For example, the number of pages five students read last night:

$$7,\\;\\; 4,\\;\\; 9,\\;\\; 4,\\;\\; 6$$

Two words you'll use constantly:

- **Count** ($n$): how many values there are. Here $n = 5$.
- **Sum**: all the values added together. Here $7 + 4 + 9 + 4 + 6 = 30$.

> ⚠️ **Don't confuse count with sum.** The *count* is how many numbers you have ($5$ of them); the *sum* is what you get when you add them ($30$). The mean needs **both**.`,
      },
      {
        id: 'mmm1-count-sum',
        type: 'input-boxes' as const,
        content: `**Count and Sum** 🧮

For the data set $8,\\; 3,\\; 5,\\; 3,\\; 6,\\; 5$:

**1)** How many values are there? (the count $n$)
**2)** What is the sum of all the values?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '30'],
          hint1: 'Count the numbers in the list one by one: $8, 3, 5, 3, 6, 5$.',
          hint2: 'Add them: $8 + 3 + 5 + 3 + 6 + 5$.',
          hint3: '$8 + 3 = 11$, $+5 = 16$, $+3 = 19$, $+6 = 25$, $+5 = 30$.',
          explanation: 'There are $6$ values, so $n = 6$. Their sum is $8+3+5+3+6+5 = 30$. You\'ll feed both of these into the mean in Part 2.',
        },
      },
      {
        id: 'mmm1-bridge',
        type: 'text' as const,
        content: `## Where We're Headed

You now know the **three** measures of center and the two ingredients — **count** and **sum** — that the mean depends on. Next:

- **Part 2:** the **mean**, step by step (including decimals).
- **Part 3:** the **median**, and the special rule for even-sized lists.
- **Part 4:** the **mode**, plus how to **choose** the right measure.
- **Part 5:** mixed practice and an exit quiz.

> 🔑 Keep this in mind: the mean uses *every* value, the median only cares about *position*, and the mode only cares about *frequency*. That difference is the whole story.`,
      },
      {
        id: 'mmm1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Definition** 🔽

Match each measure of center to how you compute it.`,
        exercise: {
          dropdowns: [
            { label: 'Add all the values and divide by the count:', options: ['Mean', 'Median', 'Mode'] },
            { label: 'The middle value once the data is sorted:', options: ['Median', 'Mean', 'Mode'] },
            { label: 'The value that appears most often:', options: ['Mode', 'Mean', 'Median'] },
          ],
          correctAnswers: ['Mean', 'Median', 'Mode'],
          hint1: 'The one that uses *every* value through addition is the mean.',
          hint2: '"Median" and "middle" both start with *m-i-d* — and it needs the data sorted.',
          hint3: '"Mode" and "most" both start with *mo* — it counts frequency.',
          explanation: 'Add-and-divide → **mean**; the sorted middle → **median**; most frequent → **mode**. Keeping these three straight is the foundation for the rest of the lesson.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'mean-median-mode',
    sections: [
      {
        id: 'mmm2-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, and Mode

**Part 2 of 5 — The Mean (the Arithmetic Average)**

---

> 🔑 **The Idea:** The **mean** answers "if everyone shared equally, how much would each get?" You find it by adding all the values and dividing by how many there are.`,
      },
      {
        id: 'mmm2-formula',
        type: 'text' as const,
        content: `## How to Find the Mean

$$\\text{Mean} = \\frac{\\text{sum of all values}}{\\text{number of values}} = \\frac{\\text{sum}}{n}$$

### Worked Example: $7, 4, 9, 4, 6$

**Step 1 — Add the values (the sum):**
$$7 + 4 + 9 + 4 + 6 = 30$$

**Step 2 — Count the values:** there are $n = 5$.

**Step 3 — Divide:**
$$\\text{Mean} = \\frac{30}{5} = 6$$

> ✅ **Check:** A mean of $6$ should land somewhere *inside* the data — and it does ($6$ is between the smallest, $4$, and the largest, $9$). The mean can never be larger than the biggest value or smaller than the smallest.`,
      },
      {
        id: 'mmm2-decimal',
        type: 'text' as const,
        content: `## When the Mean Isn't a Whole Number

The sum doesn't always divide evenly — and that's fine. The mean is often a **decimal or fraction**, even when every value is a whole number.

### Worked Example: $10, 12, 15$

$$\\text{Mean} = \\frac{10 + 12 + 15}{3} = \\frac{37}{3} = 12.33\\overline{3}\\ldots$$

So the mean is about $12.33$. A mean *between* two of the data values is completely normal.

> 💡 The mean does **not** have to be a value that appears in the list. The mean of $10, 12, 15$ is $\\approx 12.33$ — a number that isn't even in the data.`,
      },
      {
        id: 'mmm2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the mean of $3, 7, 5, 9$.',
              options: ['$6$', '$5$', '$24$', '$7$'],
              correctAnswer: 0,
              explanation: 'Sum $= 3+7+5+9 = 24$, and $n = 4$. Mean $= \\frac{24}{4} = 6$.',
            },
            {
              question: 'A data set has a mean of $50$. Which statement must be true?',
              options: ['The mean is between the smallest and largest values', 'The number $50$ appears in the data set', 'Half the values are above $50$', 'The mode is also $50$'],
              correctAnswer: 0,
              explanation: 'The mean always lies between the minimum and maximum. It need not appear in the data, need not split the data in half (that\'s the median), and has no required link to the mode.',
            },
          ],
        },
      },
      {
        id: 'mmm2-tip',
        type: 'text' as const,
        content: `## A Two-Step Habit

For *every* mean, run the same two steps in order:

1. **Sum** — add all the values.
2. **Divide** — by $n$, the count.

> 💡 If your answer comes out *bigger than the largest value* or *smaller than the smallest*, you've made an arithmetic slip — go back and recheck the sum or the division.`,
      },
      {
        id: 'mmm2-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Mean** 🧮

Find the mean of each set. Decimals are fine.

**1)** $4,\\; 8,\\; 6,\\; 2$
**2)** $12,\\; 15,\\; 9$
**3)** $5,\\; 6,\\; 8,\\; 6$  *(decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '12', '6.25'],
          hint1: 'Mean $= \\dfrac{\\text{sum}}{n}$. For set 1: sum $= 4+8+6+2 = 20$, $n = 4$.',
          hint2: 'For set 2: sum $= 12+15+9 = 36$, $n = 3$, so $36 \\div 3$.',
          hint3: 'For set 3: sum $= 5+6+8+6 = 25$, $n = 4$, so $25 \\div 4 = 6.25$.',
          explanation: '1) $20 \\div 4 = 5$.  2) $36 \\div 3 = 12$.  3) $25 \\div 4 = 6.25$. The mean of set 3 is a decimal even though every value is a whole number.',
        },
      },
      {
        id: 'mmm2-missing',
        type: 'text' as const,
        content: `## Working Backwards from the Mean

Because $\\text{mean} = \\dfrac{\\text{sum}}{n}$, you can rearrange to get $\\text{sum} = \\text{mean} \\times n$. This lets you solve **missing-value** problems.

### Example: Find the missing test score

Maria's four test scores are $80, 90, 70,$ and an unknown $x$. Her mean is $85$. Find $x$.

**Step 1 — Total points needed:** $\\text{sum} = \\text{mean} \\times n = 85 \\times 4 = 340$.

**Step 2 — Subtract the known scores:** $x = 340 - (80 + 90 + 70) = 340 - 240 = 100$.

> ✅ **Check:** $\\dfrac{80 + 90 + 70 + 100}{4} = \\dfrac{340}{4} = 85$ ✓`,
      },
      {
        id: 'mmm2-missing-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Value** 🧮

**1)** Three numbers have a mean of $20$. Two of them are $15$ and $18$. What is the third?
**2)** A student's five quiz scores average $8$. Four of the scores are $7, 9, 6,$ and $10$. What is the fifth score?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['27', '8'],
          hint1: 'First find the total: $\\text{sum} = \\text{mean} \\times n$.',
          hint2: 'For 1): total $= 20 \\times 3 = 60$, then subtract $15 + 18 = 33$.',
          hint3: 'For 2): total $= 8 \\times 5 = 40$, then subtract $7+9+6+10 = 32$.',
          explanation: '1) Total $= 60$; $60 - 33 = 27$.  2) Total $= 40$; $40 - 32 = 8$. Working backwards: missing value $= (\\text{mean} \\times n) - (\\text{sum of the rest})$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'mean-median-mode',
    sections: [
      {
        id: 'mmm3-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, and Mode

**Part 3 of 5 — The Median (the Middle Value)**

---

> 🔑 **The Idea:** The **median** is the value sitting in the *middle* once the data is lined up in order. Half the values are below it, half above. The single most important rule: **sort first.**`,
      },
      {
        id: 'mmm3-odd',
        type: 'text' as const,
        content: `## Finding the Median — Odd Number of Values

**Step 1 — Sort** the values from least to greatest.
**Step 2 — Find the middle** value. With an odd count, exactly one value sits in the center.

### Worked Example: $7, 4, 9, 4, 6$

Sort: $\\;4,\\; 4,\\; 6,\\; 7,\\; 9$

There are $5$ values, so the middle one is the **3rd**:

$$4,\\; 4,\\; \\underline{6},\\; 7,\\; 9 \\quad\\Rightarrow\\quad \\text{median} = 6$$

> ⚠️ **The #1 median mistake** is forgetting to sort. If you read straight off the unsorted list $7,4,9,4,6$, the "middle" looks like $9$ — which is wrong. Always sort first.`,
      },
      {
        id: 'mmm3-odd-drill',
        type: 'input-boxes' as const,
        content: `**Median of an Odd List** 🧮

Sort each list in your head, then enter the median.

**1)** $5,\\; 2,\\; 8,\\; 1,\\; 9$
**2)** $12,\\; 7,\\; 7,\\; 15,\\; 10,\\; 7,\\; 20$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '10'],
          hint1: 'Sort least-to-greatest first, then pick the value with equal counts on each side.',
          hint2: 'Set 1 sorted: $1, 2, 5, 8, 9$ — the middle (3rd) value.',
          hint3: 'Set 2 sorted: $7, 7, 7, 10, 12, 15, 20$ — with $7$ values the middle is the 4th.',
          explanation: '1) Sorted $1,2,\\underline{5},8,9$ → median $5$.  2) Sorted $7,7,7,\\underline{10},12,15,20$ → median $10$. Sorting is what makes the middle meaningful.',
        },
      },
      {
        id: 'mmm3-even',
        type: 'text' as const,
        content: `## Finding the Median — Even Number of Values

With an **even** count there's no single middle value — there are **two** middle values. The median is the **mean of those two** (add them, divide by $2$).

### Worked Example: $4, 4, 6, 7, 9, 12$

This list is already sorted and has $6$ values. The two middle ones are the **3rd and 4th**: $6$ and $7$.

$$\\text{median} = \\frac{6 + 7}{2} = \\frac{13}{2} = 6.5$$

> 💡 Just like the mean, the median can be a value **not in the list** — here $6.5$ isn't one of the data points. That's expected for even-sized data sets.`,
      },
      {
        id: 'mmm3-even-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the median of $10, 2, 8, 6$.',
              options: ['$7$', '$6$', '$8$', '$6.5$'],
              correctAnswer: 0,
              explanation: 'Sort: $2, 6, 8, 10$. With $4$ values the two middle ones are $6$ and $8$, so median $= \\frac{6+8}{2} = 7$.',
            },
            {
              question: 'To find the median of a list with an even number of values, you:',
              options: ['Average the two middle values', 'Pick the larger of the two middle values', 'Add the two middle values', 'Take the most frequent value'],
              correctAnswer: 0,
              explanation: 'With an even count, the median is the **mean of the two middle values** — add them and divide by $2$.',
            },
          ],
        },
      },
      {
        id: 'mmm3-position',
        type: 'text' as const,
        content: `## Finding the Middle Position Quickly

For a sorted list of $n$ values, the middle position is $\\dfrac{n+1}{2}$.

- **Odd $n$** (say $n = 7$): $\\dfrac{7+1}{2} = 4$, so the median is the **4th** value.
- **Even $n$** (say $n = 6$): $\\dfrac{6+1}{2} = 3.5$ — *between* the 3rd and 4th values, so average those two.

> 💡 The half-position is a quick reminder that even-sized lists put the median *between* two data points.`,
      },
      {
        id: 'mmm3-even-drill',
        type: 'input-boxes' as const,
        content: `**Median of an Even List** 🧮

Sort first, then average the two middle values. Decimals are fine.

**1)** $3,\\; 9,\\; 5,\\; 1$
**2)** $20,\\; 14,\\; 18,\\; 11,\\; 16,\\; 13$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '15'],
          hint1: 'Sort least-to-greatest, then identify the two values in the middle.',
          hint2: 'Set 1 sorted: $1, 3, 5, 9$ — middle two are $3$ and $5$.',
          hint3: 'Set 2 sorted: $11, 13, 14, 16, 18, 20$ — middle two are $14$ and $16$.',
          explanation: '1) Middle two $3, 5$ → $\\frac{3+5}{2} = 4$.  2) Middle two $14, 16$ → $\\frac{14+16}{2} = 15$. Always average the two middle values for even counts.',
        },
      },
      {
        id: 'mmm3-resistant',
        type: 'text' as const,
        content: `## Why the Median Is "Tougher" Than the Mean

The median only cares about **position**, not size. So one wildly large or small value — an **outlier** — barely moves it.

Compare the data set $2, 3, 4, 5, 6$ with the same set but a typo turns the last value into $600$:

| Data set | Mean | Median |
|----------|------|--------|
| $2, 3, 4, 5, 6$ | $\\frac{20}{5} = 4$ | $4$ |
| $2, 3, 4, 5, 600$ | $\\frac{614}{5} = 122.8$ | $4$ |

The single outlier **dragged the mean from $4$ to $122.8$**, but the median didn't budge. We say the median is **resistant** to outliers — a key idea we'll use in Part 4 to choose between them.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'mean-median-mode',
    sections: [
      {
        id: 'mmm4-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, and Mode

**Part 4 of 5 — The Mode & Choosing a Measure**

---

> 🔑 **The Idea:** The **mode** is the value that appears most often. Unlike the mean and median, a data set can have **no mode, one mode, or several modes** — and the mode is the only measure that works on words and categories, not just numbers.`,
      },
      {
        id: 'mmm4-mode',
        type: 'text' as const,
        content: `## Finding the Mode

**The mode is the value that appears the most times.** A quick way: sort the list, then look for repeats.

### Worked Example: $7, 4, 9, 4, 6$

Sort: $\\;4,\\; 4,\\; 6,\\; 7,\\; 9$. The value $4$ appears **twice**; every other value appears once.

$$\\text{mode} = 4$$

### Special cases

| Situation | Example | Mode |
|-----------|---------|------|
| Every value once | $1, 2, 3, 4$ | **No mode** |
| Two values tie for most | $2, 2, 5, 5, 8$ | **Two modes:** $2$ and $5$ (*bimodal*) |
| Words / categories | red, blue, red, green | **red** |

> 💡 The mode is the **only** measure of center you can use for non-numeric data, like favorite colors or shoe sizes. You can't take the "mean color," but you *can* find the most common one.`,
      },
      {
        id: 'mmm4-mode-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the mode of $6, 3, 6, 9, 3, 6, 1$.',
              options: ['$6$', '$3$', '$9$', 'No mode'],
              correctAnswer: 0,
              explanation: 'Count each value: $6$ appears $3$ times, $3$ appears twice, and $9$ and $1$ appear once. The most frequent is $6$.',
            },
            {
              question: 'Which data set has NO mode?',
              options: ['$4, 7, 2, 9$', '$4, 4, 7, 2$', '$5, 5, 5, 1$', '$3, 3, 8, 8$'],
              correctAnswer: 0,
              explanation: 'In $4, 7, 2, 9$ every value appears exactly once, so there is no mode. Each of the others has at least one repeated value.',
            },
          ],
        },
      },
      {
        id: 'mmm4-tally',
        type: 'text' as const,
        content: `## A Reliable Way to Spot the Mode

When a list is long, it's easy to miscount. A safe method:

1. **Sort** the list (repeats end up side by side).
2. **Tally** how many times each distinct value appears.
3. The value with the **highest tally** is the mode.

> ⚠️ Don't confuse the mode with how *many* times it appears. For $3, 3, 3, 7$, the mode is $\\textbf{3}$ (the value), **not** $3$ as in "three times" — even though they happen to match here, they mean different things.`,
      },
      {
        id: 'mmm4-mode-drill',
        type: 'input-boxes' as const,
        content: `**Find the Mode** 🧮

Enter the mode of each list. (Each of these has exactly one mode.)

**1)** $8,\\; 5,\\; 8,\\; 2,\\; 8,\\; 5$
**2)** $11,\\; 14,\\; 11,\\; 9,\\; 14,\\; 11,\\; 9$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '11'],
          hint1: 'The mode is the value that appears the most times — count up each value.',
          hint2: 'Set 1: $8$ appears three times, $5$ twice, $2$ once.',
          hint3: 'Set 2: $11$ appears three times, while $14$ and $9$ each appear twice.',
          explanation: '1) $8$ appears $3$ times — the most — so the mode is $8$.  2) $11$ appears $3$ times, more than any other value, so the mode is $11$.',
        },
      },
      {
        id: 'mmm4-choose',
        type: 'text' as const,
        content: `## Choosing the Right Measure

Which measure best describes the "typical" value? It depends on the data.

| Use the… | When… | Why |
|----------|-------|-----|
| **Mean** | Data is fairly even, no big outliers | Uses every value |
| **Median** | There are outliers or the data is skewed | Resistant to extreme values |
| **Mode** | Data is categories, or you want "most common" | Only one that works on non-numbers |

**Classic example — house prices on a street:**

\\$180k, \\$190k, \\$200k, \\$210k, \\$5,000k

That one mansion is an outlier. The **mean** (about \\$1,156k) makes the street look far pricier than it is; the **median** (\\$200k) describes a typical home much better.

> ⚠️ Outliers wreck the mean but not the median. When income, home prices, or any data has extreme values, the **median** is usually the fairer summary.`,
      },
      {
        id: 'mmm4-choose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Best Measure** 🔽

Choose the most appropriate measure of center for each situation.`,
        exercise: {
          dropdowns: [
            { label: 'Yearly incomes in a town where one person is a billionaire:', options: ['Median', 'Mean', 'Mode', 'Sum'] },
            { label: 'The most popular ice-cream flavor sold at a shop:', options: ['Mode', 'Mean', 'Median', 'Range'] },
            { label: 'Five quiz scores that are all close together, no outliers:', options: ['Mean', 'Mode', 'Median', 'Count'] },
          ],
          correctAnswers: ['Median', 'Mode', 'Mean'],
          hint1: 'For a measure resistant to one huge outlier, think about which one ignores the *size* of extreme values.',
          hint2: 'Flavors are categories (words), so only one measure even applies.',
          hint3: 'With no outliers, the measure that uses every value gives the most informative average.',
          explanation: 'Income with a billionaire → **median** (resistant to the outlier). Most popular flavor (a category) → **mode**. Tightly clustered numeric scores → **mean**, since it uses every value and there\'s nothing extreme to distort it.',
        },
      },
      {
        id: 'mmm4-properties',
        type: 'text' as const,
        content: `## Four Properties Worth Memorizing

Before the final practice, lock in how the three measures *behave*:

| Property | Mean | Median | Mode |
|----------|------|--------|------|
| Uses every value? | Yes | No | No |
| Affected by outliers? | **A lot** | Barely | No |
| Works on categories (words)? | No | No | **Yes** |
| Can there be more than one? | No | No | **Yes** |

> 🔑 These four rows explain *why* you'd ever pick one measure over another — exactly the judgment the next check asks for.`,
      },
      {
        id: 'mmm4-properties-dropdown',
        type: 'dropdown-select' as const,
        content: `**True Facts About the Measures** 🔽

Complete each statement.`,
        exercise: {
          dropdowns: [
            { label: 'The measure most affected by an outlier is the…', options: ['mean', 'median', 'mode'] },
            { label: 'The only measure that works for non-numeric (category) data is the…', options: ['mode', 'mean', 'median'] },
            { label: 'A data set can have more than one of these:', options: ['mode', 'mean', 'median'] },
          ],
          correctAnswers: ['mean', 'mode', 'mode'],
          hint1: 'One measure adds up every value, so a giant value pulls it; the other two depend on position or frequency.',
          hint2: 'You can\'t average colors, but you can find the most common one.',
          hint3: 'The mean and median are each a single number, but ties in frequency create multiple of one measure.',
          explanation: 'Outliers most affect the **mean** (it uses every value). Only the **mode** works on categories. And only the **mode** can have more than one value at once (bimodal, etc.) — the mean and median are always single numbers.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'mean-median-mode',
    sections: [
      {
        id: 'mmm5-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, and Mode

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now find all three measures of center, handle even-sized lists, work backwards from a mean, and choose the right measure for a situation. Let's put it together — one data set at a time.`,
      },
      {
        id: 'mmm5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Measure | How to find it | Watch out for |
|---------|----------------|---------------|
| **Mean** | $\\dfrac{\\text{sum}}{n}$ | Pulled hard by outliers |
| **Median** | Sort, take the middle (average the two middles if even $n$) | **Must sort first!** |
| **Mode** | The value appearing most often | Can be none, one, or many |

> 🔑 **One data set, three answers.** For $4, 4, 6, 7, 9$: mean $= \\frac{30}{5} = 6$, median $= 6$, mode $= 4$. They needn't agree — each describes the "center" in its own way.

> ⚠️ **Top three slip-ups:** (1) not sorting before finding the median, (2) forgetting to average the two middles on an even list, and (3) confusing *count* ($n$) with *sum* in the mean.`,
      },
      {
        id: 'mmm5-allthree',
        type: 'input-boxes' as const,
        content: `**All Three at Once** 🧮

For the data set $3,\\; 7,\\; 3,\\; 9,\\; 8$, find each measure of center.

**1)** Mean
**2)** Median
**3)** Mode`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '7', '3'],
          hint1: 'Mean $= \\dfrac{\\text{sum}}{n}$: sum $= 3+7+3+9+8 = 30$, $n = 5$.',
          hint2: 'For the median, sort first: $3, 3, 7, 8, 9$, then take the middle of $5$ values.',
          hint3: 'For the mode, find the value that repeats: $3$ appears twice.',
          explanation: 'Mean $= 30 \\div 5 = 6$. Sorted $3,3,\\underline{7},8,9$ → median $= 7$. The value $3$ appears twice → mode $= 3$. Same data, three different centers.',
        },
      },
      {
        id: 'mmm5-checklist',
        type: 'text' as const,
        content: `## Before the Final Check

Run through this mental checklist on any "find the center" problem:

- **Mean?** Sum, then divide by $n$. (Sanity-check: it lands between the min and max.)
- **Median?** *Sort first*, then take the middle — average the two middles if $n$ is even.
- **Mode?** The most frequent value (could be none, one, or several).
- **Which to report?** Outliers or categories? Lean median or mode. Otherwise, the mean.

> 💡 The two questions ahead mix a *direct* computation with a *work-backwards* problem — the same skills from Parts 2–4, now without scaffolding.`,
      },
      {
        id: 'mmm5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the data set $12, 5, 12, 8, 18$, the mean and the mode are:',
              options: ['mean $11$, mode $12$', 'mean $12$, mode $11$', 'mean $11$, mode $5$', 'mean $12$, mode $12$'],
              correctAnswer: 0,
              explanation: 'Sum $= 12+5+12+8+18 = 55$, $n = 5$, so mean $= \\frac{55}{5} = 11$. The value $12$ appears twice, so the mode is $12$.',
            },
            {
              question: 'Four numbers have a mean of $25$. Three of them are $20, 30,$ and $28$. The fourth number is:',
              options: ['$22$', '$25$', '$18$', '$78$'],
              correctAnswer: 0,
              explanation: 'Total needed $= 25 \\times 4 = 100$. The three known values sum to $20+30+28 = 78$, so the fourth is $100 - 78 = 22$.',
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
              question: 'Find the median of $14, 9, 21, 9, 17, 12$.',
              options: ['$13$', '$12$', '$9$', '$12.5$'],
              correctAnswer: 0,
              explanation: 'Sort: $9, 9, 12, 14, 17, 21$. With $6$ values, the two middle ones are $12$ and $14$, so median $= \\frac{12+14}{2} = 13$.',
            },
            {
              question: 'A school records the home states of students. Which measure of center can describe the "typical" state?',
              options: ['The mode', 'The mean', 'The median', 'None of them'],
              correctAnswer: 0,
              explanation: 'States are categories, not numbers, so you can\'t take a mean or median. Only the **mode** — the most common state — applies to non-numeric data.',
            },
            {
              question: 'A real-estate report wants the "typical" home price on a block where most homes are $\\$200$k but one sold for $\\$5$ million. Which measure best represents a typical home?',
              options: ['The median', 'The mean', 'The mode of the dollar amounts', 'The largest value'],
              correctAnswer: 0,
              explanation: 'The $\\$5$ million sale is an outlier that inflates the mean. The **median** is resistant to outliers, so it best describes a typical home price.',
            },
          ],
        },
      },
    ],
  },
]
