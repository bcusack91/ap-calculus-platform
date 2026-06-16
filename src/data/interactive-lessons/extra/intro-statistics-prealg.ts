import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Statistics (Pre-Algebra).
 * Registry key / DB Topic.slug: 'intro-statistics-prealg'.
 * 5 parts, gold-standard structure: what statistics & data are (categorical vs.
 * numerical, the data cycle) → measures of center (mean, median, mode) →
 * spread & outliers (range, how outliers move mean vs. median) → reading & building
 * data displays (dot plots, bar graphs, frequency tables) → mixed practice + exit quiz.
 * Math is pre-algebra-appropriate: whole numbers, simple fractions/decimals, the
 * four operations, and ordering. LaTeX uses doubled backslashes (JS template strings).
 * Every computed value, drill answer, and correctAnswer index was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'intro-statistics-prealg',
    sections: [
      {
        id: 'stat1-intro',
        type: 'text' as const,
        content: `# 📊 Introduction to Statistics

**Part 1 of 5 — Data, Variables, and Good Questions**

---

### Topics in This Part

| Section |
|---------|
| What Is Statistics? |
| Categorical vs. Numerical Data |
| Statistical Questions |
| The Data Cycle |

> 🔑 **Key Concept:** **Statistics** is the science of collecting, organizing, describing, and drawing conclusions from **data**. Before we ever compute an average, we have to know *what kind* of data we have and *what question* we are trying to answer.`,
      },
      {
        id: 'stat1-what-is',
        type: 'text' as const,
        content: `## What Is Statistics?

Every day you are surrounded by **data** — facts and numbers collected about the world:

- The heights of everyone in your class
- Your favorite ice cream flavors
- The number of pets each student owns
- How many minutes you spent on homework last night

A single fact, like "Maria is 152 cm tall," is one **data value**. A whole collection of values, like the heights of all 25 students, is a **data set**.

> 💡 **Statistics turns a pile of numbers into a story.** Instead of staring at 25 separate heights, statistics lets us say things like "most students are about 150 cm tall" or "the tallest student is 20 cm taller than the shortest."

We do this in four stages: **collect** data, **organize** it, **describe** it, and **draw conclusions** from it.`,
      },
      {
        id: 'stat1-cat-num',
        type: 'text' as const,
        content: `## Two Kinds of Data

Every data set is built from a **variable** — the thing we are measuring or recording. Variables come in two main types.

| Type | What it records | Examples |
|------|-----------------|----------|
| **Categorical** (qualitative) | a *category* or label | eye color, favorite sport, yes/no, type of pet |
| **Numerical** (quantitative) | a *number* you can count or measure | height, age, number of siblings, test score |

A quick test: **"Can I find the average of it and have it make sense?"**
- Average eye color? ❌ — eye color is **categorical**.
- Average height? ✅ — height is **numerical**.

> ⚠️ **Watch out:** Numbers are *not* always numerical data. A jersey number or a ZIP code is just a label — averaging jersey numbers is meaningless, so those are **categorical**.`,
      },
      {
        id: 'stat1-cat-num-check',
        type: 'dropdown-select' as const,
        content: `**Categorical or Numerical?** 🔽

Sort each variable into the correct type.`,
        exercise: {
          dropdowns: [
            { label: 'The color of each car in a parking lot:', options: ['Categorical', 'Numerical'] },
            { label: 'The number of minutes each student studied:', options: ['Categorical', 'Numerical'] },
            { label: 'Each student\'s favorite school subject:', options: ['Categorical', 'Numerical'] },
            { label: 'The temperature at noon each day for a week:', options: ['Categorical', 'Numerical'] },
          ],
          correctAnswers: ['Categorical', 'Numerical', 'Categorical', 'Numerical'],
          hint1: 'Ask: does the value name a *category/label*, or is it a *count or measurement*?',
          hint2: 'Colors and favorite subjects are labels — you cannot meaningfully average them.',
          hint3: 'Minutes and temperatures are amounts you can add and average, so they are numerical.',
          explanation: 'Car color and favorite subject are labels → **categorical**. Minutes studied and temperature are measured amounts → **numerical**.',
        },
      },
      {
        id: 'stat1-questions',
        type: 'text' as const,
        content: `## Statistical Questions

A **statistical question** is one you expect to answer with data that **varies** — the answers are not all the same.

| Question | Statistical? | Why |
|----------|--------------|-----|
| "How tall is my teacher?" | ❌ No | One person, one answer — no variability. |
| "How tall are the students in my class?" | ✅ Yes | Heights differ from student to student. |
| "What is today's date?" | ❌ No | Single fixed fact. |
| "How many hours do 8th graders sleep?" | ✅ Yes | Answers vary across many people. |

> 🔑 **Key Idea:** A statistical question anticipates **variability** — different responses you will need to summarize. A question with exactly one answer is *not* statistical.`,
      },
      {
        id: 'stat1-question-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a statistical question?',
              options: [
                'How many pets does each student in the school own?',
                'How many days are in the month of June?',
                'What is the height of the Eiffel Tower?',
                'What time does this class start?',
              ],
              correctAnswer: 0,
              explanation: 'Pet counts vary from student to student, so we expect many different answers — that variability makes it statistical. The other three each have one fixed answer.',
            },
            {
              question: 'A jersey number printed on a player\'s shirt is what type of data?',
              options: ['Categorical (it is a label)', 'Numerical (it is a measurement)', 'Both at once', 'Neither — numbers cannot be data'],
              correctAnswer: 0,
              explanation: 'Even though it looks like a number, a jersey number is just an identifying label. Averaging jersey numbers is meaningless, so it is categorical.',
            },
          ],
        },
      },
      {
        id: 'stat1-data-cycle',
        type: 'text' as const,
        content: `## The Data Cycle

Statisticians follow a repeating **data cycle**:

1. **Ask** a statistical question.
2. **Collect** data that can answer it.
3. **Organize & display** the data (tables, plots — Part 4).
4. **Analyze** the data using numbers like averages (Parts 2–3).
5. **Interpret** the results and answer the question — which often leads to a new question.

> 💡 In the rest of this lesson we focus on stages 3 and 4: how to **summarize** a data set with a single typical value (**center**), how to describe how **spread out** it is, and how to **display** it so the story is easy to see.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'intro-statistics-prealg',
    sections: [
      {
        id: 'stat2-intro',
        type: 'text' as const,
        content: `# 📊 Introduction to Statistics

**Part 2 of 5 — Measures of Center: Mean, Median, Mode**

---

> 🔑 **The Big Idea:** A **measure of center** is a single number that represents a "typical" value for a whole data set. The three most common are the **mean**, the **median**, and the **mode**.`,
      },
      {
        id: 'stat2-mean',
        type: 'text' as const,
        content: `## The Mean (Average)

The **mean** is what most people call the "average." To find it:

$$\\text{mean} = \\frac{\\text{sum of all the values}}{\\text{how many values there are}}$$

### Worked Example

Five students scored: $7, 9, 10, 6, 8$.

$$\\text{sum} = 7 + 9 + 10 + 6 + 8 = 40$$
$$\\text{mean} = \\frac{40}{5} = 8$$

The mean score is $8$.

> 💡 **Think of it as fair sharing.** If all $40$ points were split equally among the $5$ students, each would get $8$. The mean is the value everyone would have if the total were shared evenly.`,
      },
      {
        id: 'stat2-mean-drill',
        type: 'input-boxes' as const,
        content: `**Find the Mean** 🧮

Add up the values, then divide by how many there are.

**1)** Data: $4, 8, 6, 2$.  Mean $= \\,?$
**2)** Data: $10, 10, 13, 7$.  Mean $= \\,?$
**3)** Data: $3, 5, 9, 6, 2$.  Mean $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '5'],
          hint1: 'Mean = (sum) ÷ (count). For #1 the count is $4$.',
          hint2: '#1: $4+8+6+2 = 20$, and $20 \\div 4 = 5$.',
          hint3: '#2: $10+10+13+7 = 40$, $40 \\div 4 = 10$.  #3: $3+5+9+6+2 = 25$, $25 \\div 5 = 5$.',
          explanation: '1) $20 \\div 4 = 5$.  2) $40 \\div 4 = 10$.  3) $25 \\div 5 = 5$.',
        },
      },
      {
        id: 'stat2-median',
        type: 'text' as const,
        content: `## The Median (Middle Value)

The **median** is the **middle** value when the data is put **in order** from least to greatest.

### Odd number of values

Data: $3, 7, 4, 9, 5$.  First put it in order:
$$3, \\; 4, \\; \\boxed{5}, \\; 7, \\; 9$$
There are $5$ values, so the **3rd** one is the middle. The median is $5$.

### Even number of values

When there is **no single middle**, the median is the **mean of the two middle values**.

Data in order: $2, \\; \\boxed{6, \\; 8}, \\; 10$.  The two middle values are $6$ and $8$:
$$\\text{median} = \\frac{6 + 8}{2} = 7$$

> ⚠️ **Always sort first!** Finding the "middle" of an unsorted list gives the wrong answer.`,
      },
      {
        id: 'stat2-median-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the median of $8, 3, 5, 12, 7$.',
              options: ['$7$', '$5$', '$8$', '$12$'],
              correctAnswer: 0,
              explanation: 'In order: $3, 5, 7, 8, 12$. With $5$ values, the middle (3rd) value is $7$.',
            },
            {
              question: 'Find the median of $4, 10, 6, 8$.',
              options: ['$7$', '$6$', '$8$', '$28$'],
              correctAnswer: 0,
              explanation: 'In order: $4, 6, 8, 10$. The two middle values are $6$ and $8$, and $(6+8)\\div 2 = 7$.',
            },
          ],
        },
      },
      {
        id: 'stat2-mode',
        type: 'text' as const,
        content: `## The Mode (Most Frequent)

The **mode** is the value that appears **most often**.

- Data $2, 4, 4, 4, 7, 9$ → the mode is $4$ (it appears three times).
- A data set can have **more than one mode** if two values tie for "most frequent."
- A data set can have **no mode** if every value appears the same number of times.

| Data set | Mode |
|----------|------|
| $1, 3, 3, 5, 8$ | $3$ |
| $2, 2, 5, 5, 9$ | $2$ and $5$ (two modes) |
| $1, 2, 3, 4$ | no mode |

> 🔑 **Mode is the only measure of center that works for categorical data.** You can find the *most common* eye color even though "average eye color" makes no sense.`,
      },
      {
        id: 'stat2-center-drill',
        type: 'dropdown-select' as const,
        content: `**Match the Measure** 🔽

For the data set $5, 8, 8, 8, 11$, choose each value. *(Notice the values are already in order.)*`,
        exercise: {
          dropdowns: [
            { label: 'The mode:', options: ['$5$', '$8$', '$11$', 'no mode'] },
            { label: 'The median:', options: ['$5$', '$8$', '$11$', '$40$'] },
            { label: 'The mean:', options: ['$8$', '$10$', '$40$', '$11$'] },
          ],
          correctAnswers: ['$8$', '$8$', '$8$'],
          hint1: 'The mode is the value that appears most often — count how many times each value shows up.',
          hint2: 'There are $5$ values in order, so the median is the 3rd one.',
          hint3: 'Mean = $(5+8+8+8+11) \\div 5 = 40 \\div 5 = 8$.',
          explanation: 'Mode: $8$ appears three times. Median: the middle of five sorted values is the 3rd, $8$. Mean: $40 \\div 5 = 8$. Here all three happen to equal $8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'intro-statistics-prealg',
    sections: [
      {
        id: 'stat3-intro',
        type: 'text' as const,
        content: `# 📊 Introduction to Statistics

**Part 3 of 5 — Spread, Range, and Outliers**

---

> 🔑 **The Big Idea:** A center tells you the "typical" value, but two data sets with the *same* mean can look completely different. **Spread** describes how far apart the values are, and **outliers** are values that sit far from the rest.`,
      },
      {
        id: 'stat3-range',
        type: 'text' as const,
        content: `## The Range

The simplest measure of spread is the **range**:

$$\\text{range} = (\\text{largest value}) - (\\text{smallest value})$$

### Worked Example

Daily high temperatures (°C): $18, 22, 15, 24, 20$.

- Largest value: $24$
- Smallest value: $15$
$$\\text{range} = 24 - 15 = 9$$

The temperatures spanned $9$ degrees.

> 💡 A **small range** means the values are close together (consistent); a **large range** means they are spread out. Range uses only the two extremes, so one unusual value can stretch it a lot.`,
      },
      {
        id: 'stat3-range-drill',
        type: 'input-boxes' as const,
        content: `**Find the Range** 🧮

Range = largest − smallest.

**1)** Data: $12, 5, 9, 20, 8$.  Range $= \\,?$
**2)** Data: $44, 50, 47, 41$.  Range $= \\,?$
**3)** Test scores: $70, 95, 88, 70, 100$.  Range $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '9', '30'],
          hint1: 'Find the biggest and smallest numbers first, then subtract.',
          hint2: '#1: largest $20$, smallest $5$, so $20 - 5 = 15$.',
          hint3: '#2: $50 - 41 = 9$.  #3: $100 - 70 = 30$.',
          explanation: '1) $20 - 5 = 15$.  2) $50 - 41 = 9$.  3) $100 - 70 = 30$.',
        },
      },
      {
        id: 'stat3-outliers',
        type: 'text' as const,
        content: `## Outliers

An **outlier** is a value that is much larger or much smaller than the rest of the data.

Consider weekly allowances (\$): $10, 12, 11, 13, 60$.

Four students get around \$10–13, but one gets \$60. That \$60 is an **outlier** — it stands far apart from the rest.

### How an outlier affects the mean

$$\\text{mean} = \\frac{10 + 12 + 11 + 13 + 60}{5} = \\frac{106}{5} = 21.2$$

The mean is \$21.2 — but **no one** actually gets close to that! The single large outlier dragged the mean way up.

> ⚠️ **The mean is sensitive to outliers.** One extreme value can pull it far from where most of the data sits.`,
      },
      {
        id: 'stat3-resistant',
        type: 'text' as const,
        content: `## Median vs. Mean with Outliers

Compare what each measure does to the allowance data $10, 11, 12, 13, 60$ (now in order):

| Measure | Value | Affected by the \$60 outlier? |
|---------|-------|------------------------------|
| Mean | $\\dfrac{106}{5} = 21.2$ | **Yes** — pulled high |
| Median | middle value $= 12$ | **Barely** — still $12$ |

The **median ($12$)** describes a *typical* student far better than the mean ($21.2$) does here.

> 🔑 **Key Idea:** The **median is resistant** — outliers hardly move it. So when a data set has outliers (like incomes or house prices), the **median** is usually the more honest measure of center.`,
      },
      {
        id: 'stat3-outlier-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has an outlier that is much larger than the other values. What happens to the mean?',
              options: [
                'It is pulled higher, toward the outlier.',
                'It is pulled lower, away from the outlier.',
                'It does not change at all.',
                'It always becomes equal to the outlier.',
              ],
              correctAnswer: 0,
              explanation: 'The mean adds in every value, so a single very large value increases the total and pulls the mean upward, toward the outlier.',
            },
            {
              question: 'Which measure of center is LEAST affected by an outlier?',
              options: ['The median', 'The mean', 'The range', 'The sum'],
              correctAnswer: 0,
              explanation: 'The median is just the middle value, so an extreme value at one end barely moves it — the median is "resistant" to outliers. (The range is a measure of spread, not center.)',
            },
          ],
        },
      },
      {
        id: 'stat3-compare-drill',
        type: 'input-boxes' as const,
        content: `**Mean, Median, and an Outlier** 🧮

Data set (in order): $4, 5, 6, 7, 8, 30$.

**1)** What is the **median**? *(even count → average the two middle values)*
**2)** What is the **mean**? *(sum ÷ count; decimal is fine)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6.5', '10'],
          hint1: 'There are $6$ values, so the median is the average of the 3rd and 4th values.',
          hint2: 'Median: the two middle values are $6$ and $7$, so $(6+7)\\div 2 = 6.5$.',
          hint3: 'Mean: $4+5+6+7+8+30 = 60$, and $60 \\div 6 = 10$. The $30$ pulled the mean above every "normal" value.',
          explanation: 'Median $= (6+7)\\div 2 = 6.5$. Mean $= 60 \\div 6 = 10$. The outlier $30$ makes the mean ($10$) larger than the median ($6.5$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'intro-statistics-prealg',
    sections: [
      {
        id: 'stat4-intro',
        type: 'text' as const,
        content: `# 📊 Introduction to Statistics

**Part 4 of 5 — Displaying Data**

---

> 🔑 **The Big Idea:** A good **display** lets you *see* a data set's story at a glance — what's typical, what's rare, and how spread out things are. We'll read and build three common displays: **frequency tables**, **dot plots**, and **bar graphs**.`,
      },
      {
        id: 'stat4-frequency',
        type: 'text' as const,
        content: `## Frequency Tables

A **frequency table** records how many times each value occurs. The **frequency** is the count.

Suppose 12 students reported how many siblings they have:
$$1, 0, 2, 1, 3, 1, 0, 2, 1, 2, 0, 1$$

Tally them up:

| Siblings | Frequency |
|----------|-----------|
| $0$ | $3$ |
| $1$ | $5$ |
| $2$ | $3$ |
| $3$ | $1$ |

> 💡 **Check your work:** the frequencies must add up to the total number of data values. Here $3 + 5 + 3 + 1 = 12$ ✓. The **mode** is easy to spot — it's the value with the highest frequency, $1$ (five students).`,
      },
      {
        id: 'stat4-frequency-drill',
        type: 'input-boxes' as const,
        content: `**Read the Frequency Table** 🧮

Use the siblings table above:

| Siblings | $0$ | $1$ | $2$ | $3$ |
|----------|-----|-----|-----|-----|
| Frequency | $3$ | $5$ | $3$ | $1$ |

**1)** How many students have exactly $2$ siblings?
**2)** How many students have **fewer than $2$** siblings? *(that's $0$ siblings plus $1$ sibling)*
**3)** How many students are in the whole data set? *(add all the frequencies)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '12'],
          hint1: '#1: read straight off the table — the frequency in the "$2$" column.',
          hint2: '#2: "fewer than $2$" means $0$ siblings ($3$ students) plus $1$ sibling ($5$ students).',
          hint3: '#3: add every frequency: $3 + 5 + 3 + 1$.',
          explanation: '1) The "$2$" column shows $3$.  2) $3 + 5 = 8$ students have fewer than $2$.  3) $3+5+3+1 = 12$ students total.',
        },
      },
      {
        id: 'stat4-dotplot',
        type: 'text' as const,
        content: `## Dot Plots

A **dot plot** stacks one dot above a number line for each data value. Same siblings data:

\`\`\`
        ●
        ●
●       ●       ●
●       ●       ●
●       ●       ●       ●
─────────────────────────
0       1       2       3
\`\`\`

- The number of dots above each value equals its **frequency** ($3, 5, 3, 1$).
- The **tallest stack** marks the **mode** ($1$).
- Gaps and lone dots far from the pack reveal **outliers**.

> 💡 A dot plot shows the *shape* of the data — where it clumps and where it thins out — much faster than a list of numbers.`,
      },
      {
        id: 'stat4-dotplot-mc',
        type: 'multiple-choice' as const,
        content: `**Read the Dot Plot** 🎯

A dot plot shows the number of books students read last month:

\`\`\`
●
●           ●
●   ●       ●           ●
──────────────────────────
0   1   2   3   4   5   6
\`\`\`
*(Stacks: 0 → 3 dots, 1 → 1 dot, 3 → 2 dots, 6 → 1 dot.)*`,
        exercise: {
          questions: [
            {
              question: 'What is the mode (most common number of books read)?',
              options: ['$0$ books', '$3$ books', '$6$ books', '$1$ book'],
              correctAnswer: 0,
              explanation: 'The tallest stack is above $0$ (three dots), so the mode is $0$ books.',
            },
            {
              question: 'Which value is an outlier — far from the rest of the data?',
              options: ['$6$ books', '$0$ books', '$1$ book', '$3$ books'],
              correctAnswer: 0,
              explanation: 'Most students read 0–3 books, but one student read 6. That lone dot, separated by a gap, is the outlier.',
            },
            {
              question: 'How many students are shown in the dot plot in total?',
              options: ['$7$', '$6$', '$4$', '$10$'],
              correctAnswer: 0,
              explanation: 'Count every dot: $3 + 1 + 2 + 1 = 7$ students.',
            },
          ],
        },
      },
      {
        id: 'stat4-bargraph',
        type: 'text' as const,
        content: `## Bar Graphs (for Categorical Data)

When data is **categorical**, we use a **bar graph**. Each bar's **height** shows the frequency of that category, and bars have gaps between them.

Favorite fruit of 20 students:

| Fruit | Frequency |
|-------|-----------|
| Apple | $8$ |
| Banana | $5$ |
| Grape | $4$ |
| Orange | $3$ |

The tallest bar (Apple, $8$) is the **most popular** category — for categorical data the most frequent category is the **mode**.

> ⚠️ **Bar graph vs. dot plot.** Use a **bar graph** for *categories* (fruit, color, sport). Use a **dot plot** for *numerical* values you can put on a number line (counts, scores). Don't average categories — "mean fruit" is meaningless.`,
      },
      {
        id: 'stat4-display-choice',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Display** 🔽

Pick the better display for each data set.`,
        exercise: {
          dropdowns: [
            { label: 'Favorite type of music of 30 students:', options: ['Bar graph', 'Dot plot'] },
            { label: 'Number of pets each of 15 students owns:', options: ['Bar graph', 'Dot plot'] },
            { label: 'Eye color of every student in a class:', options: ['Bar graph', 'Dot plot'] },
          ],
          correctAnswers: ['Bar graph', 'Dot plot', 'Bar graph'],
          hint1: 'First decide whether each variable is categorical (a label) or numerical (a count/measure).',
          hint2: 'Categorical data (labels) → bar graph. Numerical data on a number line → dot plot.',
          hint3: 'Music type and eye color are labels (categorical → bar graph). Number of pets is a count (numerical → dot plot).',
          explanation: 'Music type and eye color are categorical, so use a **bar graph**. Number of pets is numerical and fits on a number line, so use a **dot plot**.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'intro-statistics-prealg',
    sections: [
      {
        id: 'stat5-intro',
        type: 'text' as const,
        content: `# 📊 Introduction to Statistics

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell categorical from numerical data, (2) find the mean, median, and mode, (3) measure spread with the range and judge outliers, and (4) read and build data displays. Let's put it all together.`,
      },
      {
        id: 'stat5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | What it tells you / how to find it |
|------|-----------------------------------|
| **Categorical data** | a label (color, sport) — use a **bar graph**, find the **mode** |
| **Numerical data** | a count/measure — use a **dot plot**, find mean/median |
| **Mean** | $(\\text{sum}) \\div (\\text{count})$ — the "fair share"; sensitive to outliers |
| **Median** | middle of the **sorted** data; resistant to outliers |
| **Mode** | most frequent value (works for categorical data too) |
| **Range** | $(\\text{largest}) - (\\text{smallest})$ — a measure of **spread** |
| **Outlier** | a value far from the rest; pulls the **mean** but not the median |

> 🔑 **Choosing a center:** if the data has a big outlier, the **median** usually describes "typical" better than the mean.`,
      },
      {
        id: 'stat5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A class\'s quiz scores are $6, 7, 7, 8, 12$. Which statement is true?',
              options: [
                'The mean is $8$ and the median is $7$.',
                'The mean is $7$ and the median is $8$.',
                'The mean and median are both $7$.',
                'The mode is $8$.',
              ],
              correctAnswer: 0,
              explanation: 'Mean $= (6+7+7+8+12)\\div 5 = 40 \\div 5 = 8$. The data is already sorted, so the median is the middle (3rd) value, $7$. The mode is $7$ (it appears twice), not $8$.',
            },
            {
              question: 'You are recording the favorite sport of each student. To display this data you should use a:',
              options: ['Bar graph, because sport is categorical', 'Dot plot, because sport is numerical', 'Number line of means', 'Range chart'],
              correctAnswer: 0,
              explanation: 'Favorite sport is a category (a label), so categorical data is best shown with a bar graph.',
            },
          ],
        },
      },
      {
        id: 'stat5-build-drill',
        type: 'input-boxes' as const,
        content: `**Put It Together** 🧮

A small data set: $3, 7, 4, 7, 9$.

**1)** Mean $= \\,?$  *(sum ÷ count; decimal is fine)*
**2)** Median $= \\,?$  *(sort first!)*
**3)** Mode $= \\,?$
**4)** Range $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['6', '7', '7', '6'],
          hint1: 'Sum $= 3+7+4+7+9 = 30$; there are $5$ values.',
          hint2: 'Mean $= 30 \\div 5 = 6$. To find the median, sort: $3, 4, 7, 7, 9$.',
          hint3: 'Sorted, the middle (3rd) value is $7$ → median. Mode is the most frequent value, $7$. Range $= 9 - 3 = 6$.',
          explanation: 'Mean $= 30\\div 5 = 6$. Sorted ($3,4,7,7,9$) the median is $7$. Mode $= 7$ (appears twice). Range $= 9 - 3 = 6$.',
        },
      },
      {
        id: 'stat5-concept-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reasoning Check** 🔽

A neighborhood\'s home prices have a few mansions worth far more than the rest.`,
        exercise: {
          dropdowns: [
            { label: 'The mansions act as:', options: ['Outliers', 'Modes', 'Ranges', 'Frequencies'] },
            { label: 'They pull the ___ upward:', options: ['mean', 'median', 'mode', 'range'] },
            { label: 'The better measure of a "typical" home price is the:', options: ['median', 'mean', 'range', 'largest value'] },
          ],
          correctAnswers: ['Outliers', 'mean', 'median'],
          hint1: 'A few values far larger than the rest are outliers.',
          hint2: 'The mean adds in every value, so very large outliers raise it.',
          hint3: 'The median is resistant to outliers, so it better represents a typical home.',
          explanation: 'The mansions are **outliers**. Because the mean uses every value, they pull the **mean** up. The **median** is resistant, so it better describes a typical home price.',
        },
      },
      {
        id: 'stat5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Find the median of $15, 9, 12, 20, 9, 11$.',
              options: ['$11.5$', '$9$', '$12$', '$11$'],
              correctAnswer: 0,
              explanation: 'Sort: $9, 9, 11, 12, 15, 20$. With $6$ values, the median is the average of the 3rd and 4th: $(11+12)\\div 2 = 11.5$.',
            },
            {
              question: 'Which variable is numerical (not categorical)?',
              options: [
                'The number of text messages sent in a day',
                'A person\'s favorite color',
                'The brand of a phone',
                'A student\'s home state',
              ],
              correctAnswer: 0,
              explanation: 'A count of text messages is a number you can add and average → numerical. Favorite color, phone brand, and home state are all labels → categorical.',
            },
            {
              question: 'A data set is $5, 6, 6, 7, 40$. Which measure best describes a "typical" value, and why?',
              options: [
                'The median, because the $40$ is an outlier that inflates the mean',
                'The mean, because it uses every value',
                'The range, because it shows the spread',
                'The mode, because every value is equally common',
              ],
              correctAnswer: 0,
              explanation: 'The $40$ is an outlier. The mean $(5+6+6+7+40)\\div 5 = 64\\div 5 = 12.8$ sits above every "normal" value, while the median ($6$) stays among the typical data, so the median is the better choice.',
            },
          ],
        },
      },
    ],
  },
]
