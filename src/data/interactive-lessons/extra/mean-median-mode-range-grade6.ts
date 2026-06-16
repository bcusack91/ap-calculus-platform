import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Mean, Median, Mode, and Range (Grade 6 Math).
 * Registry key / DB Topic.slug: 'mean-median-mode-range-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-range-grade6',
    sections: [
      {
        id: 'mmmr1-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, Mode, and Range

**Part 1 of 5 — Meet the Four Measures**

---

### Topics in This Part

| Section |
|---------|
| What a Data Set Is |
| The Four Words: Mean, Median, Mode, Range |
| Center vs. Spread |

> 🔑 **Key Concept:** A list of numbers can be hard to understand all at once. **Mean, median, mode, and range** are four tools that squeeze a whole list down into a single useful number.`,
      },
      {
        id: 'mmmr1-dataset',
        type: 'text' as const,
        content: `## What Is a Data Set?

A **data set** is just a collection of numbers you've gathered. Each number is a **data value**.

Imagine you asked five friends how many books they read last month and got:

$$7,\\quad 2,\\quad 9,\\quad 4,\\quad 3$$

That list of five numbers is your data set. By itself it's a little messy. The four measures in this lesson each answer a different question about it:

| Measure | The question it answers |
|---------|--------------------------|
| **Mean** | What's the *average* (the "fair share")? |
| **Median** | What's the number in the *middle*? |
| **Mode** | Which number shows up *most often*? |
| **Range** | How *spread out* are the numbers? |

> 💡 The mean, median, and mode all describe the **center** of the data. The range describes the **spread**.`,
      },
      {
        id: 'mmmr1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Word to Its Meaning** 🔽

Pick the measure that answers each question.`,
        exercise: {
          dropdowns: [
            { label: 'Which value appears most often?', options: ['Mode', 'Mean', 'Median', 'Range'] },
            { label: 'What is the middle value?', options: ['Median', 'Mean', 'Mode', 'Range'] },
            { label: 'How far apart are the highest and lowest?', options: ['Range', 'Mode', 'Mean', 'Median'] },
            { label: 'What is the average ("fair share")?', options: ['Mean', 'Median', 'Mode', 'Range'] },
          ],
          correctAnswers: ['Mode', 'Median', 'Range', 'Mean'],
          hint1: '"Mode" and "most" both start with **mo** — the value that shows up the most.',
          hint2: 'The **median** of a road is the strip in the **middle**.',
          hint3: 'The **range** of a mountain stretches from the lowest point to the highest — it measures spread.',
          explanation: 'Mode = most often, Median = middle, Range = spread (high − low), Mean = average.',
        },
      },
      {
        id: 'mmmr1-center-spread',
        type: 'text' as const,
        content: `## Center vs. Spread

Think about a basketball team's heights.

- A **center** number (mean, median, or mode) tells you a *typical* height — about how tall a usual player is.
- A **spread** number (range) tells you how *different* the players are — is everyone about the same height, or are there both very short and very tall players?

You almost always want **both**: one number for the center, and one for the spread. Together they paint the whole picture.

> ⚠️ **Watch out:** "Average" in everyday speech usually means the **mean**, but median and mode are also "averages" in math class. Always read carefully to see which one is being asked for.`,
      },
      {
        id: 'mmmr1-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which measure describes the **spread** of a data set, not its center?',
              options: ['Range', 'Mean', 'Median', 'Mode'],
              correctAnswer: 0,
              explanation: 'The range (highest value − lowest value) tells you how spread out the data is. Mean, median, and mode all describe the center.',
            },
            {
              question: 'A teacher wants to know the most common shoe size in her class. Which measure should she find?',
              options: ['Mode', 'Mean', 'Median', 'Range'],
              correctAnswer: 0,
              explanation: 'The mode is the value that appears most often, so it gives the most common shoe size.',
            },
          ],
        },
      },
      {
        id: 'mmmr1-pickmeasure',
        type: 'dropdown-select' as const,
        content: `**Which Measure Fits?** 🔽

For each real-life question, choose the single best measure to use.`,
        exercise: {
          dropdowns: [
            { label: 'A shoe store wants the size it sells most:', options: ['Mode', 'Mean', 'Median', 'Range'] },
            { label: 'A coach wants each player\'s "fair share" of total points:', options: ['Mean', 'Mode', 'Median', 'Range'] },
            { label: 'A weather report wants the gap between the hottest and coldest day:', options: ['Range', 'Mean', 'Median', 'Mode'] },
          ],
          correctAnswers: ['Mode', 'Mean', 'Range'],
          hint1: '"Most often" points to the **mode** (mode = most).',
          hint2: '"Fair share" of a total is the **mean** (add up, divide by how many).',
          hint3: 'The "gap" between highest and lowest is the **range** (a spread measure).',
          explanation: 'Most common size → mode. Fair share of points → mean. Gap between extremes → range.',
        },
      },
      {
        id: 'mmmr1-wrap',
        type: 'text' as const,
        content: `## What's Next

You now know the **four words** and what each one is *for*:

> 🔑 **Mean** = average · **Median** = middle · **Mode** = most · **Range** = spread.

In the next four parts we'll learn exactly *how to calculate* each one, starting with the mean. Then in Part 5 you'll find all four for the same data set and choose which one best describes it.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-range-grade6',
    sections: [
      {
        id: 'mmmr2-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, Mode, and Range

**Part 2 of 5 — The Mean (Average)**

---

> 🔑 **The Idea:** The **mean** is the "fair share." If everyone put their stuff into one big pile and split it back out equally, each person's equal share is the mean.`,
      },
      {
        id: 'mmmr2-how',
        type: 'text' as const,
        content: `## How to Find the Mean

There are just **two steps**:

$$\\text{Mean} = \\frac{\\text{sum of all the values}}{\\text{how many values there are}}$$

1. **Add** up every number.
2. **Divide** by how many numbers there are.

### Worked Example

Find the mean of $12,\\ 8,\\ 10,\\ 6,\\ 14$.

**Step 1 — Add:**
$$12 + 8 + 10 + 6 + 14 = 50$$

**Step 2 — Divide** by how many numbers (there are $5$):
$$\\text{Mean} = \\frac{50}{5} = 10$$

> ✅ The mean is $10$. Notice it sits right in the middle of the list — that's typical of the mean.`,
      },
      {
        id: 'mmmr2-fairshare',
        type: 'text' as const,
        content: `## Why "Fair Share" Works

Picture five jars holding $12, 8, 10, 6,$ and $14$ marbles. That's $50$ marbles in all. If you poured them together and split them evenly among the $5$ jars, each jar would get:

$$\\frac{50}{5} = 10 \\text{ marbles}$$

So the mean is the amount each jar would hold if everything were shared **equally**. That's why the mean can land on a number that isn't even in the original list!

> 💡 The mean does **not** have to be one of the original values. The mean of $5$ and $8$ is $\\frac{5+8}{2} = 6.5$ — a number that wasn't in the list at all.`,
      },
      {
        id: 'mmmr2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the mean of $3,\\ 7,\\ 7,\\ 9,\\ 14$?',
              options: ['$8$', '$7$', '$10$', '$40$'],
              correctAnswer: 0,
              explanation: 'Sum: $3+7+7+9+14 = 40$. There are $5$ values, so the mean is $40 \\div 5 = 8$.',
            },
            {
              question: 'To find the mean, you divide the sum by…',
              options: ['the number of values', 'the largest value', 'the smallest value', '2'],
              correctAnswer: 0,
              explanation: 'Mean = (sum of values) ÷ (how many values there are). You always divide by the count.',
            },
          ],
        },
      },
      {
        id: 'mmmr2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Mean** 🧮

Add, then divide by how many numbers there are.

**1)** Mean of $5,\\ 5,\\ 8,\\ 2$
**2)** Mean of $90,\\ 85,\\ 100,\\ 95,\\ 80$
**3)** Mean of $6,\\ 8,\\ 10,\\ 12,\\ 14$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '90', '10'],
          hint1: '1) Sum $= 5+5+8+2 = 20$. There are $4$ numbers, so $20 \\div 4 = 5$.',
          hint2: '2) Sum $= 90+85+100+95+80 = 450$. There are $5$ numbers, so $450 \\div 5 = 90$.',
          hint3: '3) Sum $= 6+8+10+12+14 = 50$. There are $5$ numbers, so $50 \\div 5 = 10$.',
          explanation: '1) $20 \\div 4 = 5$.  2) $450 \\div 5 = 90$.  3) $50 \\div 5 = 10$. Always add first, then divide by the count.',
        },
      },
      {
        id: 'mmmr2-missing',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮 *(challenge)*

Sometimes you know the mean and have to find a missing value.

Four numbers have a **mean of $10$**. Three of them are $8,\\ 12,$ and $7$. What is the **fourth** number?`,
        exercise: {
          boxes: 1,
          correctAnswers: ['13'],
          hint1: 'If the mean of $4$ numbers is $10$, the total must be $4 \\times 10 = 40$.',
          hint2: 'The three known numbers add to $8 + 12 + 7 = 27$.',
          hint3: 'The fourth number is the leftover: $40 - 27 = 13$.',
          explanation: 'Total needed $= 4 \\times 10 = 40$. Known sum $= 27$. So the missing value is $40 - 27 = 13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-range-grade6',
    sections: [
      {
        id: 'mmmr3-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, Mode, and Range

**Part 3 of 5 — The Median (Middle)**

---

> 🔑 **The Idea:** The **median** is the number smack in the **middle** of the list — *after you put the numbers in order*. Half the data is below it, half is above it.`,
      },
      {
        id: 'mmmr3-order',
        type: 'text' as const,
        content: `## Step Zero: Always Put the Numbers in Order

The single most common median mistake is forgetting to **sort the numbers first**. The middle of an unsorted list means nothing.

### Worked Example — Odd Number of Values

Find the median of $6,\\ 2,\\ 9,\\ 4,\\ 7$.

**Step 1 — Order them** (smallest to largest):
$$2,\\quad 4,\\quad \\boxed{6},\\quad 7,\\quad 9$$

**Step 2 — Find the middle.** There are $5$ numbers, so the middle one is the $3$rd:

$$\\text{Median} = 6$$

> ✅ With an **odd** count, exactly one number sits in the middle. Two numbers are below it ($2, 4$) and two are above it ($7, 9$).`,
      },
      {
        id: 'mmmr3-even',
        type: 'text' as const,
        content: `## When There's an Even Number of Values

If there are an **even** number of values, *two* numbers share the middle. The median is the **mean of those two middle numbers** (add them and divide by $2$).

### Worked Example — Even Number of Values

Find the median of $3,\\ 8,\\ 5,\\ 2,\\ 9,\\ 6$.

**Step 1 — Order them:**
$$2,\\quad 3,\\quad \\boxed{5,\\ 6},\\quad 8,\\quad 9$$

**Step 2 — The two middle numbers** are $5$ and $6$. Average them:

$$\\text{Median} = \\frac{5 + 6}{2} = \\frac{11}{2} = 5.5$$

> 💡 So the median of an even-length list often lands "between" two numbers — like $5.5$ here. That's perfectly normal.`,
      },
      {
        id: 'mmmr3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Median Step by Step** 🔽

You're finding the median of $10,\\ 4,\\ 7,\\ 1$.`,
        exercise: {
          dropdowns: [
            { label: 'First, put them in order:', options: ['$1, 4, 7, 10$', '$10, 7, 4, 1$', '$4, 1, 10, 7$', '$1, 7, 4, 10$'] },
            { label: 'How many values are there?', options: ['$4$ (even)', '$4$ (odd)', '$2$ (even)', '$5$ (odd)'] },
            { label: 'The two middle numbers are:', options: ['$4$ and $7$', '$1$ and $10$', '$1$ and $4$', '$7$ and $10$'] },
            { label: 'The median is:', options: ['$5.5$', '$5$', '$7$', '$11$'] },
          ],
          correctAnswers: ['$1, 4, 7, 10$', '$4$ (even)', '$4$ and $7$', '$5.5$'],
          hint1: 'Order from smallest to largest: $1, 4, 7, 10$.',
          hint2: 'There are $4$ numbers — an even count — so two numbers share the middle.',
          hint3: 'The middle two are $4$ and $7$. Average them: $\\frac{4+7}{2} = \\frac{11}{2} = 5.5$.',
          explanation: 'Ordered: $1, 4, 7, 10$. Even count, so average the middle two: $\\frac{4+7}{2} = 5.5$.',
        },
      },
      {
        id: 'mmmr3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Median** 🧮

Order first, then find the middle. *(Decimals are fine.)*

**1)** Median of $12,\\ 5,\\ 8,\\ 3,\\ 15,\\ 9$
**2)** Median of $14,\\ 3,\\ 9,\\ 21,\\ 7$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8.5', '9'],
          hint1: '1) Ordered: $3, 5, 8, 9, 12, 15$. That\'s $6$ numbers (even), so average the middle two.',
          hint2: '1) Middle two are $8$ and $9$: $\\frac{8+9}{2} = \\frac{17}{2} = 8.5$.',
          hint3: '2) Ordered: $3, 7, 9, 14, 21$. That\'s $5$ numbers (odd), so the middle one is $9$.',
          explanation: '1) Ordered $3,5,8,9,12,15$; middle two $8,9 \\Rightarrow 8.5$.  2) Ordered $3,7,9,14,21$; middle value $= 9$.',
        },
      },
      {
        id: 'mmmr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Before finding the median, you must always first…',
              options: ['put the numbers in order', 'add the numbers up', 'pick the biggest number', 'divide by 2'],
              correctAnswer: 0,
              explanation: 'The median is the middle of the *ordered* list. You must sort the numbers from smallest to largest before locating the middle.',
            },
            {
              question: 'What is the median of $2,\\ 4,\\ 6,\\ 7,\\ 9$?',
              options: ['$6$', '$5.6$', '$7$', '$4$'],
              correctAnswer: 0,
              explanation: 'The list is already in order and has $5$ values (odd). The middle (3rd) value is $6$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-range-grade6',
    sections: [
      {
        id: 'mmmr4-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, Mode, and Range

**Part 4 of 5 — The Mode and the Range**

---

> 🔑 **Two quick ones:** The **mode** is the value that appears **most** often. The **range** is the **highest value minus the lowest value**. Neither one needs any dividing.`,
      },
      {
        id: 'mmmr4-mode',
        type: 'text' as const,
        content: `## The Mode — Most Often

The **mode** is the number that shows up the most times. A handy trick: **"MOde" and "MOst" both start with MO.**

### Worked Example

Find the mode of $4,\\ 7,\\ 4,\\ 9,\\ 2,\\ 4$.

Count how many times each number appears:

| Value | Times it appears |
|-------|------------------|
| $4$ | **3** ✓ |
| $7$ | 1 |
| $9$ | 1 |
| $2$ | 1 |

The number $4$ appears most (three times), so the **mode is $4$**.

### Special Cases

- **No mode:** If every number appears the same number of times, there is **no mode**. Example: $1, 2, 3, 4$ — each appears once.
- **More than one mode:** If two numbers tie for most, the set has **two modes**. Example: in $2, 3, 3, 5, 5, 8$, both $3$ and $5$ appear twice — so the modes are $3$ **and** $5$.

> ⚠️ The mode is the only one of the four that **must** be an actual value from the list (you're literally picking a number that's there).`,
      },
      {
        id: 'mmmr4-mode-check',
        type: 'multiple-choice' as const,
        content: `**Mode Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the mode of $6,\\ 7,\\ 7,\\ 8,\\ 8,\\ 8,\\ 9$?',
              options: ['$8$', '$7$', '$9$', '$6$'],
              correctAnswer: 0,
              explanation: '$8$ appears three times — more than any other value — so the mode is $8$.',
            },
            {
              question: 'Which data set has **no mode**?',
              options: ['$1,\\ 2,\\ 3,\\ 4,\\ 5$', '$1,\\ 1,\\ 2,\\ 3$', '$5,\\ 5,\\ 5,\\ 6$', '$2,\\ 2,\\ 4,\\ 4$'],
              correctAnswer: 0,
              explanation: 'In $1, 2, 3, 4, 5$ every value appears exactly once, so no value repeats — there is no mode. (The last one has two modes: $2$ and $4$.)',
            },
          ],
        },
      },
      {
        id: 'mmmr4-range',
        type: 'text' as const,
        content: `## The Range — How Spread Out

The **range** measures how far apart the data is. It's the simplest formula in the whole lesson:

$$\\text{Range} = \\text{highest value} - \\text{lowest value}$$

### Worked Example

Find the range of $14,\\ 3,\\ 9,\\ 21,\\ 7$.

- **Highest** value: $21$
- **Lowest** value: $3$

$$\\text{Range} = 21 - 3 = 18$$

> 💡 A **small** range means the numbers are bunched close together. A **large** range means they're widely spread out. The range is a single number, not a pair — say "the range is $18$," not "from $3$ to $21$."`,
      },
      {
        id: 'mmmr4-range-drill',
        type: 'input-boxes' as const,
        content: `**Find the Mode and Range** 🧮

For each set, give the answer asked for.

**1)** **Mode** of $5,\\ 9,\\ 5,\\ 12,\\ 9,\\ 5$
**2)** **Range** of $68,\\ 72,\\ 65,\\ 80,\\ 75,\\ 70$
**3)** **Range** of $6,\\ 7,\\ 7,\\ 8,\\ 8,\\ 8,\\ 9$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '15', '3'],
          hint1: '1) Count each value: $5$ appears three times, more than any other — mode $= 5$.',
          hint2: '2) Highest $= 80$, lowest $= 65$, so range $= 80 - 65 = 15$.',
          hint3: '3) Highest $= 9$, lowest $= 6$, so range $= 9 - 6 = 3$.',
          explanation: '1) Mode $= 5$ (appears 3 times).  2) Range $= 80 - 65 = 15$.  3) Range $= 9 - 6 = 3$.',
        },
      },
      {
        id: 'mmmr4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mode or Range?** 🔽

For the data set $2,\\ 3,\\ 3,\\ 5,\\ 5,\\ 8$, choose the correct value.`,
        exercise: {
          dropdowns: [
            { label: 'The modes are:', options: ['$3$ and $5$', 'only $3$', 'only $5$', 'no mode'] },
            { label: 'The highest value is:', options: ['$8$', '$5$', '$2$', '$3$'] },
            { label: 'The range is:', options: ['$6$', '$8$', '$5$', '$3$'] },
          ],
          correctAnswers: ['$3$ and $5$', '$8$', '$6$'],
          hint1: 'Both $3$ and $5$ appear twice — they tie for most, so there are two modes.',
          hint2: 'The largest number in the list is $8$; the smallest is $2$.',
          hint3: 'Range $=$ highest $-$ lowest $= 8 - 2 = 6$.',
          explanation: 'Modes $= 3$ and $5$ (each appears twice). Highest $= 8$, lowest $= 2$, so range $= 8 - 2 = 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'mean-median-mode-range-grade6',
    sections: [
      {
        id: 'mmmr5-intro',
        type: 'text' as const,
        content: `# 📊 Mean, Median, Mode, and Range

**Part 5 of 5 — All Four Together & Mastery Check**

---

You can now find each measure on its own. The real skill is finding **all four for the same data set** and knowing which one best describes it. Let's put it all together.`,
      },
      {
        id: 'mmmr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Measure | How to find it | Reminder |
|---------|----------------|----------|
| **Mean** | add all values, divide by the count | the "fair share" average |
| **Median** | **order first**, take the middle (average the two middle if even) | half below, half above |
| **Mode** | the value that appears **most** | can be none, one, or several |
| **Range** | highest $-$ lowest | measures **spread**, not center |

### One Full Example — Plant Heights (cm)

A class measured five seedlings: $3,\\ 5,\\ 5,\\ 7,\\ 10$ (already in order).

$$\\text{Mean} = \\frac{3+5+5+7+10}{5} = \\frac{30}{5} = 6$$
$$\\text{Median} = 5 \\;(\\text{the middle of } 3,5,\\boxed{5},7,10)$$
$$\\text{Mode} = 5 \\;(\\text{appears twice})$$
$$\\text{Range} = 10 - 3 = 7$$

> ⚠️ **Mean vs. Median:** One very large value (like a single super-tall plant) pulls the **mean** up but barely moves the **median**. When data has an unusual extreme, the median is often the more "typical" description.`,
      },
      {
        id: 'mmmr5-fullset',
        type: 'input-boxes' as const,
        content: `**All Four at Once** 🧮

Use the data set $4,\\ 8,\\ 6,\\ 8,\\ 4$. Find each measure.

**1)** Mean
**2)** Median
**3)** Range

*(For the mode of this set, note there are actually two — we'll handle that in the quiz.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '6', '4'],
          hint1: '1) Sum $= 4+8+6+8+4 = 30$; there are $5$ values, so mean $= 30 \\div 5 = 6$.',
          hint2: '2) Ordered: $4, 4, 6, 8, 8$. The middle (3rd) value is $6$.',
          hint3: '3) Highest $= 8$, lowest $= 4$, so range $= 8 - 4 = 4$.',
          explanation: 'Ordered: $4,4,6,8,8$. Mean $= 30 \\div 5 = 6$; median $= 6$; range $= 8-4 = 4$. (Modes are $4$ and $8$.)',
        },
      },
      {
        id: 'mmmr5-readcarefully',
        type: 'text' as const,
        content: `## Read the Question Carefully

In a mixed set of problems, the **hardest part is no longer the arithmetic** — it's noticing *which* measure each question is asking for. Slow down and underline the key word:

| If you see… | Find the… |
|-------------|-----------|
| "average," "fair share" | **mean** |
| "middle," "half above/half below" | **median** |
| "most common," "appears most" | **mode** |
| "spread," "difference between high and low" | **range** |

> 💡 The same data set can have a mean, median, mode, and range that are all **different numbers**. Match each answer to the word the question used.`,
      },
      {
        id: 'mmmr5-choose',
        type: 'multiple-choice' as const,
        content: `**Choose the Right Measure** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A store tracks $15,\\ 22,\\ 15,\\ 30,\\ 18$ sales over five days. What is the **mode**?',
              options: ['$15$', '$18$', '$20$', '$22$'],
              correctAnswer: 0,
              explanation: '$15$ appears twice; every other value appears once. So the mode is $15$.',
            },
            {
              question: 'For that same set $15, 22, 15, 30, 18$, what is the **median**?',
              options: ['$18$', '$15$', '$20$', '$22$'],
              correctAnswer: 0,
              explanation: 'Ordered: $15, 15, 18, 22, 30$. There are $5$ values (odd), so the middle (3rd) value is $18$.',
            },
          ],
        },
      },
      {
        id: 'mmmr5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Review** 🔽

Different sets, different measures — read each label carefully.`,
        exercise: {
          dropdowns: [
            { label: 'Mean of $5,\\ 5,\\ 8,\\ 2$:', options: ['$5$', '$4$', '$8$', '$20$'] },
            { label: 'Median of $2,\\ 4,\\ 6,\\ 7,\\ 9$:', options: ['$6$', '$5.6$', '$7$', '$4$'] },
            { label: 'Range of $14,\\ 3,\\ 9,\\ 21,\\ 7$:', options: ['$18$', '$21$', '$3$', '$24$'] },
            { label: 'Mode of $4,\\ 7,\\ 4,\\ 9,\\ 2,\\ 4$:', options: ['$4$', '$7$', '$2$', 'no mode'] },
          ],
          correctAnswers: ['$5$', '$6$', '$18$', '$4$'],
          hint1: 'Mean: $5+5+8+2 = 20$, then $20 \\div 4 = 5$.',
          hint2: 'Median: the list $2,4,6,7,9$ is ordered with $5$ values; the middle is $6$.',
          hint3: 'Range $= 21 - 3 = 18$. Mode $= 4$ (it appears three times).',
          explanation: 'Mean $= 20 \\div 4 = 5$; median $= 6$; range $= 21 - 3 = 18$; mode $= 4$ (appears 3 times).',
        },
      },
      {
        id: 'mmmr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the **mean** of $10,\\ 2,\\ 8,\\ 6,\\ 4$?',
              options: ['$6$', '$8$', '$5$', '$30$'],
              correctAnswer: 0,
              explanation: 'Sum $= 10+2+8+6+4 = 30$. There are $5$ values, so mean $= 30 \\div 5 = 6$.',
            },
            {
              question: 'What is the **median** of $5,\\ 9,\\ 5,\\ 12,\\ 9,\\ 5$?',
              options: ['$7$', '$5$', '$9$', '$7.5$'],
              correctAnswer: 0,
              explanation: 'Ordered: $5, 5, 5, 9, 9, 12$. There are $6$ values (even), so average the middle two: $\\frac{5+9}{2} = \\frac{14}{2} = 7$.',
            },
            {
              question: 'Which statement about the data set $1,\\ 2,\\ 3,\\ 4,\\ 5$ is true?',
              options: ['It has no mode.', 'Its mode is $5$.', 'Its mode is $3$.', 'Its range is $5$.'],
              correctAnswer: 0,
              explanation: 'Every value appears exactly once, so no value repeats — there is no mode. (The range would be $5 - 1 = 4$, not $5$.)',
            },
          ],
        },
      },
    ],
  },
]
