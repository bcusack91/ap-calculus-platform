import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Reading Graphs and Charts (Pre-Algebra).
 * Registry key: 'reading-graphs-charts' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'reading-graphs-charts',
    sections: [
      {
        id: 'rgc1-intro',
        type: 'text' as const,
        content: `# 📊 Reading Graphs and Charts

**Part 1 of 5 — Bar Graphs**

---

### Topics in This Part

| Section |
|---------|
| What a Bar Graph Shows |
| Reading One Bar at a Time |
| Comparing Two Bars |

> 🔑 **Key Concept:** A graph is a *picture of data*. Every bar, line, slice, or dot stands for a number. Your job is to translate the picture **back into numbers** — and that always starts by reading the **labels and the scale**.`,
      },
      {
        id: 'rgc1-what',
        type: 'text' as const,
        content: `## What a Bar Graph Shows

A **bar graph** uses the **height** of each bar to show a quantity. Taller bar = bigger number.

Three things to read **before** anything else:
- The **title** — what the whole graph is about.
- The **category axis** (usually the horizontal one) — what each bar stands for.
- The **value axis** (usually the vertical one) — the numbers, and especially the **scale** (how much each gridline is worth).

### Example

Pets owned by students in Room 12:

| Pet | Number of students |
|-----|--------------------|
| 🐶 Dog | $8$ |
| 🐱 Cat | $5$ |
| 🐟 Fish | $3$ |
| 🐰 Rabbit | $2$ |

If the value axis counts by $1$, the **Dog** bar rises to the gridline marked $8$, and the **Fish** bar rises to $3$.

> 🔑 **Read the scale first.** If gridlines jump by $2$ (or $5$, or $10$), a bar halfway between two lines is worth a value *in between*.`,
      },
      {
        id: 'rgc1-readbar',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the Room 12 pet table above.`,
        exercise: {
          questions: [
            {
              question: 'How many students own a cat?',
              options: ['$3$', '$5$', '$8$', '$2$'],
              correctAnswer: 1,
              explanation: 'Find the Cat row: it shows $5$ students. The Cat bar would rise to the gridline marked $5$.',
            },
            {
              question: 'Which pet is owned by the fewest students?',
              options: ['Dog', 'Cat', 'Fish', 'Rabbit'],
              correctAnswer: 3,
              explanation: 'The fewest students means the shortest bar / smallest number. Rabbit has $2$, which is less than Fish ($3$), Cat ($5$), and Dog ($8$).',
            },
          ],
        },
      },
      {
        id: 'rgc1-scale',
        type: 'text' as const,
        content: `## When the Scale Counts by More Than 1

Real bar graphs rarely count by $1$. Suppose a graph of **books read this month** uses a value axis where each gridline is worth $5$:

$$0,\\; 5,\\; 10,\\; 15,\\; 20,\\; 25, \\ldots$$

A bar that reaches the **4th gridline** is at $4 \\times 5 = 20$ books. A bar stopping **halfway between** the $10$ and $15$ lines is at about $12$ or $13$ books.

| Bar reaches… | Value |
|--------------|-------|
| 2nd gridline | $2 \\times 5 = 10$ |
| 3rd gridline | $3 \\times 5 = 15$ |
| 6th gridline | $6 \\times 5 = 30$ |

> ⚠️ **The #1 bar-graph mistake:** counting gridlines as if each were worth $1$. Always check what *one step up* is worth before reading any height.`,
      },
      {
        id: 'rgc1-scaledrill',
        type: 'input-boxes' as const,
        content: `**Read the Scale** 🧮

A bar graph of **books read** has a value axis where each gridline is worth $5$ books.

**1)** A bar that reaches the **3rd** gridline shows how many books?
**2)** A bar that reaches the **7th** gridline shows how many books?
**3)** Maria read $40$ books. Her bar reaches which gridline number?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '35', '8'],
          hint1: 'Each gridline is worth $5$. Multiply the gridline number by $5$.',
          hint2: '3rd gridline $= 3 \\times 5$; 7th gridline $= 7 \\times 5$.',
          hint3: 'For Maria, work backwards: $40 \\div 5 = 8$, so her bar reaches the 8th gridline.',
          explanation: '1) $3 \\times 5 = 15$.  2) $7 \\times 5 = 35$.  3) $40 \\div 5 = 8$, the 8th gridline.',
        },
      },
      {
        id: 'rgc1-compare',
        type: 'text' as const,
        content: `## Comparing Two Bars

Two of the most common questions are **"how many more?"** and **"how many times as many?"**

Using the Room 12 pets (Dog $=8$, Cat $=5$, Fish $=3$, Rabbit $=2$):

- **How many more** dogs than fish? Subtract: $8 - 3 = 5$.
- **How many times** as many dogs as rabbits? Divide: $8 \\div 2 = 4$ times as many.

> 💡 "How many **more**" → **subtract**. "How many **times** as many" → **divide**. Picking the right operation is half the battle.

Next up: **pictographs**, where a single symbol can stand for many items.`,
      },
      {
        id: 'rgc1-comparedropdown',
        type: 'dropdown-select' as const,
        content: `**Compare the Bars** 🔽

Use the Room 12 pets (Dog $=8$, Cat $=5$, Fish $=3$, Rabbit $=2$). Pick the right operation, then the answer.`,
        exercise: {
          dropdowns: [
            { label: 'How many MORE students own a cat than a fish?', options: ['$2$', '$8$', '$15$', '$1$'] },
            { label: 'How many students own a dog OR a cat (combined)?', options: ['$3$', '$13$', '$40$', '$5$'] },
            { label: 'Together, how many pets are owned in all?', options: ['$16$', '$18$', '$13$', '$20$'] },
          ],
          correctAnswers: ['$2$', '$13$', '$18$'],
          hint1: '"How many more" means subtract: Cat $-$ Fish $= 5 - 3$.',
          hint2: '"Dog OR cat combined" means add those two bars: $8 + 5$.',
          hint3: 'All pets: add every bar, $8 + 5 + 3 + 2$.',
          explanation: 'More cats than fish: $5 - 3 = 2$. Dog + Cat: $8 + 5 = 13$. All pets: $8 + 5 + 3 + 2 = 18$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'reading-graphs-charts',
    sections: [
      {
        id: 'rgc2-intro',
        type: 'text' as const,
        content: `# 📊 Reading Graphs and Charts

**Part 2 of 5 — Pictographs & Tables**

---

> 🔑 **The Idea:** A **pictograph** uses symbols (like 🍎 or ⭐) instead of bars. The catch: **one symbol can stand for many items**, so you must read the **key** before you count.`,
      },
      {
        id: 'rgc2-pictograph',
        type: 'text' as const,
        content: `## Reading a Pictograph

Every pictograph has a **key** that tells you what one full symbol is worth. A **partial** symbol (half, quarter) is worth a fraction of that.

### Example — Apples Picked

**Key:** 🍎 $= 10$ apples

| Person | Symbols | Apples |
|--------|---------|--------|
| Ana | 🍎🍎🍎 | $3 \\times 10 = 30$ |
| Ben | 🍎🍎 | $2 \\times 10 = 20$ |
| Cy | 🍎🍎🍎🍎½ | $4\\tfrac{1}{2} \\times 10 = 45$ |

So Cy's $4\\tfrac{1}{2}$ apple symbols mean $4.5 \\times 10 = 45$ apples.

> 🔑 **Two-step read:** (1) count the symbols, (2) multiply by the key value. A half symbol counts as half the key.`,
      },
      {
        id: 'rgc2-pictocheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the apple pictograph above, where 🍎 $= 10$ apples.`,
        exercise: {
          questions: [
            {
              question: 'Ana has 3 full apple symbols. How many apples did she pick?',
              options: ['$3$', '$13$', '$30$', '$10$'],
              correctAnswer: 2,
              explanation: 'Each 🍎 is worth $10$ apples, so $3 \\times 10 = 30$.',
            },
            {
              question: 'A pictograph shows 🍎🍎🍎🍎🍎 for Dana. How many apples is that?',
              options: ['$5$', '$50$', '$15$', '$25$'],
              correctAnswer: 1,
              explanation: 'Five symbols, each worth $10$: $5 \\times 10 = 50$ apples.',
            },
          ],
        },
      },
      {
        id: 'rgc2-pictodrill',
        type: 'input-boxes' as const,
        content: `**Pictograph Math** 🧮

A pictograph of **stickers earned** uses the key ⭐ $= 4$ stickers.

**1)** Liam has $6$ full stars. How many stickers?
**2)** Nora has $3\\tfrac{1}{2}$ stars. How many stickers?
**3)** Owen earned $28$ stickers. How many full star symbols should his row show?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '14', '7'],
          hint1: 'Each ⭐ is worth $4$ stickers. Multiply the number of stars by $4$.',
          hint2: 'For Nora, $3\\tfrac{1}{2} = 3.5$ stars, so $3.5 \\times 4$.',
          hint3: 'For Owen, work backwards: $28 \\div 4 = 7$ stars.',
          explanation: '1) $6 \\times 4 = 24$.  2) $3.5 \\times 4 = 14$.  3) $28 \\div 4 = 7$ symbols.',
        },
      },
      {
        id: 'rgc2-tables',
        type: 'text' as const,
        content: `## Reading a Data Table

A **table** lines data up in **rows and columns**. To read a single value, find the **row** and the **column** and look where they meet — the **cell**.

### Example — Tickets Sold

| Day | Adult | Child |
|-----|-------|-------|
| Friday | $40$ | $25$ |
| Saturday | $60$ | $45$ |
| Sunday | $30$ | $20$ |

- **Adult tickets on Saturday?** Row = Saturday, Column = Adult → $60$.
- **Total tickets on Sunday?** Add across the row: $30 + 20 = 50$.
- **Total Child tickets for the weekend?** Add down the column: $25 + 45 + 20 = 90$.

> 💡 **Across a row** = combine one day's categories. **Down a column** = combine one category over all days.`,
      },
      {
        id: 'rgc2-tabledropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Cell** 🔽

Use the ticket table above.`,
        exercise: {
          dropdowns: [
            { label: 'Child tickets on Friday:', options: ['$40$', '$25$', '$45$', '$20$'] },
            { label: 'Adult tickets on Sunday:', options: ['$60$', '$40$', '$30$', '$20$'] },
            { label: 'Total tickets sold on Saturday (Adult + Child):', options: ['$60$', '$45$', '$105$', '$85$'] },
          ],
          correctAnswers: ['$25$', '$30$', '$105$'],
          hint1: 'For Friday Child: find the Friday row, then the Child column.',
          hint2: 'For Sunday Adult: find the Sunday row, then the Adult column → $30$.',
          hint3: 'Saturday total: add across the Saturday row, $60 + 45 = 105$.',
          explanation: 'Friday Child $= 25$. Sunday Adult $= 30$. Saturday total $= 60 + 45 = 105$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'reading-graphs-charts',
    sections: [
      {
        id: 'rgc3-intro',
        type: 'text' as const,
        content: `# 📊 Reading Graphs and Charts

**Part 3 of 5 — Line Graphs & Trends**

---

> 🔑 **Why line graphs:** A **line graph** connects points to show how a value **changes over time**. The *shape* of the line tells a story — rising, falling, or staying flat.`,
      },
      {
        id: 'rgc3-readpoint',
        type: 'text' as const,
        content: `## Reading a Point on a Line Graph

Each **point** has two coordinates: a time (across) and a value (up). To read it, drop straight down to the time axis and straight across to the value axis.

### Example — Plant Height by Week

| Week | Height (cm) |
|------|-------------|
| $1$ | $2$ |
| $2$ | $5$ |
| $3$ | $9$ |
| $4$ | $9$ |
| $5$ | $14$ |

- **Height in Week 3?** Read the Week 3 point: $9$ cm.
- The point for Week 5 sits at $(5, 14)$ — at time $5$, the value is $14$ cm.

> 🔑 A point at $(\\text{week}, \\text{height})$ pairs a **time** with a **value**. Read time across, value up.`,
      },
      {
        id: 'rgc3-trend',
        type: 'text' as const,
        content: `## Trends: Rising, Falling, Flat

The **direction** of the line between two points describes change:

- **Going up** (▲) → the value is **increasing**.
- **Going down** (▼) → the value is **decreasing**.
- **Flat** (▬) → the value **stays the same** (no change).

Using the plant data:
- Week $1 \\to 2$: $2 \\to 5$, **up** by $3$ cm.
- Week $3 \\to 4$: $9 \\to 9$, **flat** — the plant didn't grow that week.
- Week $4 \\to 5$: $9 \\to 14$, **up** by $5$ cm — the **steepest** climb, so the fastest growth.

> 💡 The **steepest** segment = the **fastest** change. A **flat** segment = **no** change. A **downhill** segment = a **decrease**.`,
      },
      {
        id: 'rgc3-trendcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the plant height data (Week 1: $2$, Week 2: $5$, Week 3: $9$, Week 4: $9$, Week 5: $14$).`,
        exercise: {
          questions: [
            {
              question: 'Between which two weeks did the plant NOT grow at all?',
              options: ['Week 1 → 2', 'Week 2 → 3', 'Week 3 → 4', 'Week 4 → 5'],
              correctAnswer: 2,
              explanation: 'From Week 3 to Week 4 the height stayed at $9$ cm ($9 \\to 9$), so the line is flat — no growth.',
            },
            {
              question: 'During which interval did the plant grow the FASTEST (the steepest rise)?',
              options: ['Week 1 → 2 (up 3)', 'Week 2 → 3 (up 4)', 'Week 3 → 4 (up 0)', 'Week 4 → 5 (up 5)'],
              correctAnswer: 3,
              explanation: 'Week 4 → 5 rises from $9$ to $14$, a gain of $5$ cm — larger than $+3$, $+4$, or $0$. Biggest rise = steepest = fastest.',
            },
          ],
        },
      },
      {
        id: 'rgc3-changedrill',
        type: 'input-boxes' as const,
        content: `**How Much Did It Change?** 🧮

Use the plant height data (Week 1: $2$, Week 2: $5$, Week 3: $9$, Week 4: $9$, Week 5: $14$). To find a change, **subtract**: $\\text{later} - \\text{earlier}$.

**1)** Change in height from Week 1 to Week 3 (in cm)?
**2)** Change in height from Week 2 to Week 5 (in cm)?
**3)** Total growth from Week 1 to Week 5 (in cm)?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '9', '12'],
          hint1: 'Change $=$ later value $-$ earlier value.',
          hint2: 'Week 1 to 3: $9 - 2$. Week 2 to 5: $14 - 5$.',
          hint3: 'Week 1 to 5: $14 - 2 = 12$ cm.',
          explanation: '1) $9 - 2 = 7$ cm.  2) $14 - 5 = 9$ cm.  3) $14 - 2 = 12$ cm.',
        },
      },
      {
        id: 'rgc3-double',
        type: 'text' as const,
        content: `## Double Line Graphs

A **double line graph** draws **two lines** (with a key/legend) so you can compare two things at once. Where the lines **cross**, the two values are **equal** at that moment.

### Example — Temperature (°F) by Hour

| Hour | City A | City B |
|------|--------|--------|
| 9 AM | $60$ | $52$ |
| 12 PM | $70$ | $70$ |
| 3 PM | $75$ | $80$ |

At **12 PM** both cities read $70°$ — that's where the two lines **cross**. Before noon City A is warmer; after noon City B is warmer.

> 💡 With two lines, always check the **key** to know which line is which, and watch the **crossing point** — it marks where one overtakes the other.`,
      },
      {
        id: 'rgc3-doubledropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Double Line Graph** 🔽

Use the temperature table (City A: 9 AM $=60$, 12 PM $=70$, 3 PM $=75$; City B: 9 AM $=52$, 12 PM $=70$, 3 PM $=80$).`,
        exercise: {
          dropdowns: [
            { label: 'At what time do the two lines cross (equal temperatures)?', options: ['9 AM', '12 PM', '3 PM', 'they never cross'] },
            { label: 'At 3 PM, which city is warmer?', options: ['City A', 'City B', 'they are equal', 'cannot tell'] },
            { label: 'How many degrees warmer is City A than City B at 9 AM?', options: ['$8$', '$12$', '$2$', '$60$'] },
          ],
          correctAnswers: ['12 PM', 'City B', '$8$'],
          hint1: 'The lines cross where the two temperatures are equal — both read $70°$ at one time.',
          hint2: 'At 3 PM compare $75$ (City A) and $80$ (City B); the larger is warmer.',
          hint3: 'At 9 AM, City A $-$ City B $= 60 - 52$.',
          explanation: 'Both are $70°$ at 12 PM, so the lines cross there. At 3 PM, City B ($80$) > City A ($75$). At 9 AM, $60 - 52 = 8°$ warmer.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'reading-graphs-charts',
    sections: [
      {
        id: 'rgc4-intro',
        type: 'text' as const,
        content: `# 📊 Reading Graphs and Charts

**Part 4 of 5 — Circle (Pie) Graphs**

---

> 🔑 **Big Idea:** A **circle graph** (pie chart) shows how a **whole** is split into **parts**. The whole circle is **100%**, and each slice is a **fraction** of that whole.`,
      },
      {
        id: 'rgc4-whole',
        type: 'text' as const,
        content: `## Parts of a Whole

In a circle graph, **all the slices add up to the whole**:

$$\\text{all percents add to } 100\\% \\qquad\\text{(or all fractions add to } 1\\text{)}$$

### Example — How 200 Students Get to School

| Method | Percent | Students |
|--------|---------|----------|
| Bus | $50\\%$ | $100$ |
| Walk | $25\\%$ | $50$ |
| Car | $15\\%$ | $30$ |
| Bike | $10\\%$ | $20$ |

Check the percents: $50 + 25 + 15 + 10 = 100\\%$ ✓. And the students: $100 + 50 + 30 + 20 = 200$ ✓.

To turn a **percent into a count**, multiply the whole by the percent (as a decimal):
$$\\text{count} = \\text{whole} \\times \\frac{\\text{percent}}{100}$$

**Bus:** $200 \\times \\dfrac{50}{100} = 200 \\times 0.5 = 100$ students.`,
      },
      {
        id: 'rgc4-fraction',
        type: 'text' as const,
        content: `## Quick Fraction Benchmarks

You can often read a pie slice **without exact numbers** using these benchmark sizes:

| Slice | Fraction | Percent |
|-------|----------|---------|
| Half the circle | $\\dfrac{1}{2}$ | $50\\%$ |
| A quarter | $\\dfrac{1}{4}$ | $25\\%$ |
| A tenth | $\\dfrac{1}{10}$ | $10\\%$ |
| Three quarters | $\\dfrac{3}{4}$ | $75\\%$ |

So a slice that takes up **half** the circle is $50\\%$ of the whole, and a slice filling **a quarter** is $25\\%$.

> 🔑 The **biggest slice** is the **most common** category; the **smallest slice** is the **least** common — you can rank them by eye before doing any arithmetic.`,
      },
      {
        id: 'rgc4-piecheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the "how 200 students get to school" table (Bus $50\\%$, Walk $25\\%$, Car $15\\%$, Bike $10\\%$).`,
        exercise: {
          questions: [
            {
              question: 'Which method is used by the most students (the biggest slice)?',
              options: ['Bus', 'Walk', 'Car', 'Bike'],
              correctAnswer: 0,
              explanation: 'Bus is $50\\%$ — bigger than Walk ($25\\%$), Car ($15\\%$), and Bike ($10\\%$). The biggest slice = most students.',
            },
            {
              question: 'How many of the 200 students walk to school ($25\\%$)?',
              options: ['$25$', '$50$', '$75$', '$100$'],
              correctAnswer: 1,
              explanation: '$25\\% = \\frac{25}{100} = \\frac{1}{4}$, and $200 \\times \\frac{1}{4} = 50$ students.',
            },
          ],
        },
      },
      {
        id: 'rgc4-piedropdown',
        type: 'dropdown-select' as const,
        content: `**Slices Add to 100%** 🔽

A circle graph of **favorite fruit** shows: Apple $40\\%$, Banana $30\\%$, Grape $20\\%$, and a missing **Other** slice. A class of $50$ students voted.`,
        exercise: {
          dropdowns: [
            { label: 'The "Other" slice must be (so all add to 100%):', options: ['$5\\%$', '$10\\%$', '$20\\%$', '$30\\%$'] },
            { label: 'Number of students who chose Apple ($40\\%$ of 50):', options: ['$15$', '$20$', '$25$', '$40$'] },
            { label: 'The largest slice belongs to:', options: ['Apple', 'Banana', 'Grape', 'Other'] },
          ],
          correctAnswers: ['$10\\%$', '$20$', 'Apple'],
          hint1: 'All slices add to $100\\%$. Add the three given percents, then subtract from $100$.',
          hint2: '$40 + 30 + 20 = 90$, so Other $= 100 - 90 = 10\\%$.',
          hint3: 'Apple count $= 50 \\times \\frac{40}{100} = 50 \\times 0.4 = 20$. Apple ($40\\%$) is the biggest slice.',
          explanation: 'Other $= 100 - (40+30+20) = 10\\%$. Apple $= 50 \\times 0.4 = 20$ students. Apple at $40\\%$ is the largest slice.',
        },
      },
      {
        id: 'rgc4-piedrill',
        type: 'input-boxes' as const,
        content: `**Percent to Count** 🧮

A survey of $80$ people asked their favorite season.

**1)** Summer is $25\\%$. How many people chose Summer?
**2)** Winter is $10\\%$. How many people chose Winter?
**3)** Spring and Fall together make up $65\\%$. How many people is that?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '8', '52'],
          hint1: 'Count $= $ whole $\\times \\dfrac{\\text{percent}}{100}$, with whole $= 80$.',
          hint2: 'Summer: $80 \\times 0.25$. Winter: $80 \\times 0.10$.',
          hint3: 'Spring + Fall: $80 \\times 0.65 = 52$. (Check: $20 + 8 + 52 = 80$ ✓.)',
          explanation: '1) $80 \\times 0.25 = 20$.  2) $80 \\times 0.10 = 8$.  3) $80 \\times 0.65 = 52$. They sum to $80$. ✓',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'reading-graphs-charts',
    sections: [
      {
        id: 'rgc5-intro',
        type: 'text' as const,
        content: `# 📊 Reading Graphs and Charts

**Part 5 of 5 — Choosing & Interpreting Graphs**

---

You can now read **bar graphs**, **pictographs**, **tables**, **line graphs**, and **circle graphs**. The last skill is knowing **which graph fits which job** — and reading any of them carefully.`,
      },
      {
        id: 'rgc5-which',
        type: 'text' as const,
        content: `## Which Graph for Which Job?

| You want to… | Best graph |
|--------------|-----------|
| **Compare** separate categories | **Bar graph** |
| Show **change over time** | **Line graph** |
| Show **parts of one whole** (percents) | **Circle (pie) graph** |
| Show counts with **symbols** | **Pictograph** |
| Look up **exact values** | **Table** |

> 🔑 **Quick rule:** *time* → line, *parts of a whole* → pie, *compare categories* → bar.`,
      },
      {
        id: 'rgc5-misleading',
        type: 'text' as const,
        content: `## Reading Carefully (Avoiding Traps)

Three habits keep you from being fooled by a graph:

1. **Check the scale.** A value axis that starts at $90$ instead of $0$ can make a tiny difference *look* huge.
2. **Read the key.** In a pictograph one symbol may be worth $10$, not $1$; in a double-line graph the key says which line is which.
3. **Match the question to an operation.** "How many **more**" → **subtract**; "how many **times**" → **divide**; "**percent of**" → multiply by the percent.

> ⚠️ A graph never lies about its numbers, but a careless reader can misread them. Labels, scale, and key come **first**.`,
      },
      {
        id: 'rgc5-mixed',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Choose the best graph for each goal.`,
        exercise: {
          dropdowns: [
            { label: "Show how a town's population changed each year from 2000–2020:", options: ['Bar graph', 'Line graph', 'Circle graph', 'Pictograph'] },
            { label: 'Show what fraction of a budget goes to rent, food, and savings:', options: ['Bar graph', 'Line graph', 'Circle graph', 'Table'] },
            { label: 'Compare the number of goals scored by 5 different teams:', options: ['Circle graph', 'Line graph', 'Bar graph', 'Pictograph'] },
          ],
          correctAnswers: ['Line graph', 'Circle graph', 'Bar graph'],
          hint1: 'Population *over years* is a change over time.',
          hint2: 'Rent/food/savings are *parts of one whole* (a budget) — that is a pie chart.',
          hint3: 'Comparing separate categories (5 teams) is the job of a bar graph.',
          explanation: 'Change over time → line graph. Parts of one whole → circle graph. Comparing categories → bar graph.',
        },
      },
      {
        id: 'rgc5-mixedmc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A pictograph uses 🚗 $= 20$ cars. A row shows 🚗🚗🚗½. How many cars is that?',
              options: ['$3.5$', '$60$', '$70$', '$50$'],
              correctAnswer: 2,
              explanation: '$3\\tfrac{1}{2}$ symbols $\\times 20 = 3.5 \\times 20 = 70$ cars.',
            },
            {
              question: 'On a line graph, a segment that goes downhill from left to right means the value is…',
              options: ['increasing', 'decreasing', 'staying the same', 'doubling'],
              correctAnswer: 1,
              explanation: 'A downhill (falling) line means the value is getting smaller — it is **decreasing**.',
            },
          ],
        },
      },
      {
        id: 'rgc5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: "A bar graph's value axis counts by $4$. A bar reaching the 5th gridline shows what value?",
              options: ['$5$', '$9$', '$20$', '$45$'],
              correctAnswer: 2,
              explanation: 'Each gridline is worth $4$, so the 5th gridline is $5 \\times 4 = 20$.',
            },
            {
              question: 'A circle graph shows Red $45\\%$, Blue $30\\%$, Green $15\\%$, and a missing slice. The missing slice is:',
              options: ['$5\\%$', '$10\\%$', '$15\\%$', '$25\\%$'],
              correctAnswer: 1,
              explanation: 'All slices add to $100\\%$: $45 + 30 + 15 = 90$, so the missing slice is $100 - 90 = 10\\%$.',
            },
            {
              question: 'In a survey of $60$ people, $20\\%$ chose tea. How many people chose tea?',
              options: ['$12$', '$20$', '$6$', '$80$'],
              correctAnswer: 0,
              explanation: '$20\\%$ of $60$ is $60 \\times \\frac{20}{100} = 60 \\times 0.2 = 12$ people.',
            },
          ],
        },
      },
    ],
  },
]
