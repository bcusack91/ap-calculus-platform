import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Line Graphs (Grade 5 Math).
 * Registry key / DB slug: 'line-graphs'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'line-graphs',
    sections: [
      {
        id: 'lg1-intro',
        type: 'text' as const,
        content: `# 📈 Line Graphs

**Part 1 of 5 — What a Line Graph Shows**

---

### Topics in This Part

| Section |
|---------|
| What a Line Graph Is |
| The Two Axes |
| When to Use a Line Graph |

> 🔑 **Key Concept:** A **line graph** shows how something **changes over time**. It uses points connected by lines so you can *see* whether a value is going up, going down, or staying the same.`,
      },
      {
        id: 'lg1-what',
        type: 'text' as const,
        content: `## What Is a Line Graph?

A **line graph** is a picture of **data** (information) that changes. We plot a **point** for each measurement, then connect the points with straight lines.

Here is a line graph of how tall a bean plant grew over 5 days:

| Day | Height (cm) |
|-----|-------------|
| 1 | 2 |
| 2 | 5 |
| 3 | 5 |
| 4 | 8 |
| 5 | 11 |

Each row of the table becomes **one point** on the graph. Day 1 with a height of 2 cm becomes the point $(1, 2)$. Day 4 with a height of 8 cm becomes the point $(4, 8)$.

> 💡 The connecting lines are not extra data — they just help your eye follow the trend from one point to the next.`,
      },
      {
        id: 'lg1-axes',
        type: 'text' as const,
        content: `## The Two Axes

Every line graph has two number lines called **axes**:

- The **x-axis** runs left to right (horizontal). It usually shows **time** — days, hours, months, or years.
- The **y-axis** runs up and down (vertical). It shows **what you measured** — height, temperature, money, and so on.

| Axis | Direction | Usually shows |
|------|-----------|---------------|
| x-axis | horizontal (across) | time |
| y-axis | vertical (up/down) | the measured value |

A point is written as an **ordered pair** $(x, y)$: the x-value first (across), then the y-value (up).

> ⚠️ **Order matters!** $(1, 2)$ means "go across to 1, then up to 2." It is *not* the same as $(2, 1)$.`,
      },
      {
        id: 'lg1-axis-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a line graph showing temperature each hour, what does the x-axis (the across direction) usually show?',
              options: ['The time (the hours)', 'The temperature', 'The number of points', 'Nothing — it is blank'],
              correctAnswer: 0,
              explanation: 'The horizontal x-axis almost always shows time. The temperature (what we measured) goes on the vertical y-axis.',
            },
            {
              question: 'A line graph is the BEST choice when you want to show…',
              options: [
                'how one value changes over time',
                'the parts of a whole pizza',
                'how many students like each pet',
                'a single number with no change',
              ],
              correctAnswer: 0,
              explanation: 'Line graphs are made for showing change over time. A circle (pie) graph shows parts of a whole, and a bar graph compares separate categories like favorite pets.',
            },
          ],
        },
      },
      {
        id: 'lg1-ordered-pairs',
        type: 'text' as const,
        content: `## Reading an Ordered Pair

To plot or read a point, do the x-value first, then the y-value:

$$(x,\\ y) = (\\text{across},\\ \\text{up})$$

**Example:** The point $(3, 5)$ on our plant graph means "on **Day 3**, the plant was **5 cm** tall."

**Example:** The point $(5, 11)$ means "on **Day 5**, the plant was **11 cm** tall."

> 🔑 First number = where on the x-axis (time). Second number = where on the y-axis (the value).`,
      },
      {
        id: 'lg1-pair-drill',
        type: 'input-boxes' as const,
        content: `**Read the Points** 🧮

Use the plant table from above.

| Day | Height (cm) |
|-----|-------------|
| 1 | 2 |
| 2 | 5 |
| 4 | 8 |

**1)** Write the height (the y-value) for the point on Day 2.
**2)** Write the height (the y-value) for the point on Day 4.
**3)** The point $(1, 2)$ means Day 1, height $= \\,?$ cm.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '8', '2'],
          hint1: 'Find the row for the day, then read the Height column.',
          hint2: 'In an ordered pair $(x, y)$, the height is the *second* number, $y$.',
          hint3: 'Day 2 → 5 cm. Day 4 → 8 cm. The point $(1,2)$ has y-value 2.',
          explanation: '1) Day 2 is 5 cm. 2) Day 4 is 8 cm. 3) In $(1,2)$, the second number is the height, so 2 cm.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'line-graphs',
    sections: [
      {
        id: 'lg2-intro',
        type: 'text' as const,
        content: `# 📈 Line Graphs

**Part 2 of 5 — Reading Values From a Graph**

---

> 🔑 **The Skill:** Given any point in time, find its value — and given any value, find when it happened. This is the most important thing a line graph lets you do.`,
      },
      {
        id: 'lg2-read',
        type: 'text' as const,
        content: `## Finding a Value at a Given Time

To read the value at a certain time:

1. Find the time on the **x-axis** (across the bottom).
2. Move **straight up** until you hit the line.
3. Move **straight across** to the **y-axis** to read the value.

We'll use this temperature graph for a single day:

| Time | Temperature (°F) |
|------|------------------|
| 8 AM | 60 |
| 10 AM | 66 |
| 12 PM | 72 |
| 2 PM | 70 |
| 4 PM | 64 |

**Example:** What was the temperature at **10 AM**? Find 10 AM on the bottom, go up to the line, read across: **66°F**.

> 💡 You can also go backward: to find *when* it was 72°F, start at 72 on the y-axis and trace to the matching time — **12 PM**.`,
      },
      {
        id: 'lg2-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the temperature table from above.`,
        exercise: {
          questions: [
            {
              question: 'What was the temperature at 12 PM?',
              options: ['72°F', '66°F', '70°F', '60°F'],
              correctAnswer: 0,
              explanation: 'Find 12 PM on the x-axis, go up to the line, and read across: 72°F. That is also the highest point on this graph.',
            },
            {
              question: 'At what time was the temperature 60°F?',
              options: ['8 AM', '10 AM', '2 PM', '4 PM'],
              correctAnswer: 0,
              explanation: 'Start at 60 on the y-axis and trace across to the line, then down to the time: 8 AM was 60°F.',
            },
          ],
        },
      },
      {
        id: 'lg2-read-drill',
        type: 'input-boxes' as const,
        content: `**Read the Temperatures** 🧮

Use the temperature table.

| Time | Temperature (°F) |
|------|------------------|
| 8 AM | 60 |
| 10 AM | 66 |
| 2 PM | 70 |
| 4 PM | 64 |

**1)** Temperature at 2 PM $= \\,?$ °F
**2)** Temperature at 4 PM $= \\,?$ °F
**3)** Temperature at 8 AM $= \\,?$ °F`,
        exercise: {
          boxes: 3,
          correctAnswers: ['70', '64', '60'],
          hint1: 'Find the time in the left column, then read the temperature beside it.',
          hint2: 'Go up from the time to the line, then across to the y-axis.',
          hint3: '2 PM → 70. 4 PM → 64. 8 AM → 60.',
          explanation: '1) 2 PM is 70°F. 2) 4 PM is 64°F. 3) 8 AM is 60°F.',
        },
      },
      {
        id: 'lg2-between',
        type: 'text' as const,
        content: `## Reading Between the Points

Because the points are connected, you can **estimate** values *between* the marked times. The line shows roughly what was happening in between.

Look at the climb from **10 AM (66°F)** to **12 PM (72°F)**. Halfway between them is **11 AM**. Since the line rises steadily from 66 to 72, at 11 AM the temperature was about **69°F** — right in the middle.

> ⚠️ This is an **estimate**, not an exact reading. We only *measured* at 10 AM and 12 PM; the line just suggests what likely happened at 11 AM.`,
      },
      {
        id: 'lg2-between-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The line rises steadily from 8 AM (60°F) to 10 AM (66°F). About what was the temperature at 9 AM, halfway between?',
              options: ['About 63°F', 'About 60°F', 'About 66°F', 'About 72°F'],
              correctAnswer: 0,
              explanation: 'Halfway between 60°F and 66°F is 63°F. Since the line rises steadily, 9 AM (the midpoint in time) is about 63°F.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'line-graphs',
    sections: [
      {
        id: 'lg3-intro',
        type: 'text' as const,
        content: `# 📈 Line Graphs

**Part 3 of 5 — Trends: Up, Down, and Flat**

---

> 🔑 **Big Idea:** The *slant* of each line segment tells a story. **Up** means increasing, **down** means decreasing, and **flat** means staying the same.`,
      },
      {
        id: 'lg3-trends',
        type: 'text' as const,
        content: `## Reading the Slant

| What the line does | What it means | Example |
|--------------------|---------------|---------|
| Slants **up** ↗ | the value is **increasing** | plant getting taller |
| Slants **down** ↘ | the value is **decreasing** | temperature cooling off |
| Stays **flat** → | the value is **not changing** | plant the same height |
| **Steeper** slant | changing **faster** | a big jump in one step |
| **Gentler** slant | changing **slower** | a small change in one step |

Back to our plant:

| Day | Height (cm) |
|-----|-------------|
| 1 | 2 |
| 2 | 5 |
| 3 | 5 |
| 4 | 8 |
| 5 | 11 |

From **Day 2 to Day 3** the height stays at 5 cm — the line is **flat** (no growth). From **Day 3 to Day 4** it climbs from 5 to 8 — the line slants **up**.

> 💡 A flat line does **not** mean "nothing is there." It means the value held steady.`,
      },
      {
        id: 'lg3-trend-dropdown',
        type: 'dropdown-select' as const,
        content: `**Describe the Trend** 🔽

Use the plant heights: Day 1 = 2, Day 2 = 5, Day 3 = 5, Day 4 = 8, Day 5 = 11 (cm).`,
        exercise: {
          dropdowns: [
            { label: 'From Day 1 to Day 2 the line is:', options: ['going up', 'going down', 'flat'] },
            { label: 'From Day 2 to Day 3 the line is:', options: ['flat', 'going up', 'going down'] },
            { label: 'From Day 3 to Day 4 the line is:', options: ['going up', 'going down', 'flat'] },
          ],
          correctAnswers: ['going up', 'flat', 'going up'],
          hint1: 'Compare the two heights: bigger = up, smaller = down, equal = flat.',
          hint2: 'Day 1→2: 2 then 5, the height grows. Day 2→3: 5 then 5, no change.',
          hint3: 'Day 1→2 goes up (2→5). Day 2→3 is flat (5→5). Day 3→4 goes up (5→8).',
          explanation: 'Day 1→2: 2 to 5 is up. Day 2→3: 5 to 5 is flat. Day 3→4: 5 to 8 is up.',
        },
      },
      {
        id: 'lg3-change',
        type: 'text' as const,
        content: `## How Much Did It Change?

To find the **change** between two points, subtract:

$$\\text{change} = \\text{later value} - \\text{earlier value}$$

A **positive** answer means it went **up**. A **negative** answer means it went **down**. Zero means it was **flat**.

**Example:** From Day 1 (2 cm) to Day 2 (5 cm):
$$5 - 2 = 3 \\text{ cm taller}$$

**Example:** From Day 4 (8 cm) to Day 5 (11 cm):
$$11 - 8 = 3 \\text{ cm taller}$$

> 🔑 Always do **later minus earlier**. If the result is negative, the value dropped.`,
      },
      {
        id: 'lg3-change-drill',
        type: 'input-boxes' as const,
        content: `**Find the Change** 🧮

Plant heights (cm): Day 1 = 2, Day 3 = 5, Day 4 = 8, Day 5 = 11.

**1)** Change from Day 1 to Day 3: $5 - 2 = \\,?$ cm
**2)** Change from Day 3 to Day 5: $11 - 5 = \\,?$ cm
**3)** Change from Day 4 to Day 5: $11 - 8 = \\,?$ cm`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '6', '3'],
          hint1: 'Use later value minus earlier value.',
          hint2: 'Day 1 to Day 3: 5 − 2. Day 3 to Day 5: 11 − 5.',
          hint3: '5 − 2 = 3. 11 − 5 = 6. 11 − 8 = 3.',
          explanation: '1) $5-2 = 3$ cm. 2) $11-5 = 6$ cm. 3) $11-8 = 3$ cm. All positive, so the plant grew each time.',
        },
      },
      {
        id: 'lg3-steepest',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Plant heights (cm): Day 1 = 2, Day 2 = 5, Day 3 = 5, Day 4 = 8, Day 5 = 11.`,
        exercise: {
          questions: [
            {
              question: 'Between which two days did the plant NOT grow at all (the flattest line)?',
              options: ['Day 2 to Day 3', 'Day 1 to Day 2', 'Day 3 to Day 4', 'Day 4 to Day 5'],
              correctAnswer: 0,
              explanation: 'From Day 2 (5 cm) to Day 3 (5 cm) the height is the same, so the change is $5-5=0$. That segment is flat.',
            },
            {
              question: 'A line segment that slants DOWN means the value is…',
              options: ['decreasing', 'increasing', 'staying the same', 'doubling'],
              correctAnswer: 0,
              explanation: 'A downward slant means the value got smaller — it is decreasing. (Our plant never decreased, but a cooling temperature would.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'line-graphs',
    sections: [
      {
        id: 'lg4-intro',
        type: 'text' as const,
        content: `# 📈 Line Graphs

**Part 4 of 5 — Answering Questions With Data**

---

> 🔑 **Putting It Together:** Real questions ask you to find the **highest** value, the **lowest** value, the **total** change, or to **compare** two lines. Let's practice each.`,
      },
      {
        id: 'lg4-highlow',
        type: 'text' as const,
        content: `## Highest, Lowest, and Total Change

We'll use the temperature data again:

| Time | Temperature (°F) |
|------|------------------|
| 8 AM | 60 |
| 10 AM | 66 |
| 12 PM | 72 |
| 2 PM | 70 |
| 4 PM | 64 |

- **Highest** temperature = the **top** point on the graph = **72°F** (at 12 PM).
- **Lowest** temperature = the **bottom** point = **60°F** (at 8 AM).
- **Range** (how spread out) = highest − lowest = $72 - 60 = 12$°F.

The graph also shows the **shape of the day**: it warmed up all morning, peaked at noon, then cooled down all afternoon.

> 💡 The peak (turning point) is where the line stops going up and starts going down — here, 12 PM.`,
      },
      {
        id: 'lg4-highlow-drill',
        type: 'input-boxes' as const,
        content: `**Highest, Lowest, Range** 🧮

Temperatures (°F): 8 AM = 60, 10 AM = 66, 12 PM = 72, 2 PM = 70, 4 PM = 64.

**1)** What was the highest temperature? $\\,?$ °F
**2)** What was the lowest temperature? $\\,?$ °F
**3)** Range $=$ highest $-$ lowest $= 72 - 60 = \\,?$ °F`,
        exercise: {
          boxes: 3,
          correctAnswers: ['72', '60', '12'],
          hint1: 'The highest is the biggest number; the lowest is the smallest.',
          hint2: 'Range means highest minus lowest.',
          hint3: 'Highest = 72, lowest = 60, so range = 72 − 60.',
          explanation: '1) Highest is 72°F (noon). 2) Lowest is 60°F (8 AM). 3) Range $= 72 - 60 = 12$°F.',
        },
      },
      {
        id: 'lg4-compare',
        type: 'text' as const,
        content: `## Comparing Two Lines

Sometimes a graph has **two lines** so you can compare. Suppose two friends saved money over 4 weeks:

| Week | Mia's savings (\\$) | Leo's savings (\\$) |
|------|---------------------|---------------------|
| 1 | 5 | 2 |
| 2 | 8 | 6 |
| 3 | 10 | 10 |
| 4 | 12 | 16 |

Where the two lines **cross**, the friends had the **same** amount: in **Week 3**, both had **\\$10**.

After the crossing point, **Leo's line is higher**, so by Week 4 Leo had more (\\$16 vs. \\$12).

> 🔑 The point where two lines **meet** is where the two values are **equal**.`,
      },
      {
        id: 'lg4-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare the Savers** 🔽

Mia: Wk1 = \\$5, Wk2 = \\$8, Wk3 = \\$10, Wk4 = \\$12.
Leo: Wk1 = \\$2, Wk2 = \\$6, Wk3 = \\$10, Wk4 = \\$16.`,
        exercise: {
          dropdowns: [
            { label: 'In which week did they have the SAME amount?', options: ['Week 3', 'Week 1', 'Week 2', 'Week 4'] },
            { label: 'In Week 1, who had MORE saved?', options: ['Mia', 'Leo', 'They were equal'] },
            { label: 'In Week 4, who had MORE saved?', options: ['Leo', 'Mia', 'They were equal'] },
          ],
          correctAnswers: ['Week 3', 'Mia', 'Leo'],
          hint1: 'Equal amounts happen where the two lines cross.',
          hint2: 'Compare the two numbers for each week: the bigger one is "more."',
          hint3: 'Wk3 both = \\$10 (lines cross). Wk1: Mia \\$5 > Leo \\$2. Wk4: Leo \\$16 > Mia \\$12.',
          explanation: 'The lines cross in Week 3 (both \\$10). In Week 1 Mia had more (\\$5 vs \\$2); by Week 4 Leo had more (\\$16 vs \\$12).',
        },
      },
      {
        id: 'lg4-total',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Mia: Wk1 = \\$5, Wk2 = \\$8, Wk3 = \\$10, Wk4 = \\$12.`,
        exercise: {
          questions: [
            {
              question: "From Week 1 to Week 4, how much did Mia's savings increase in total?",
              options: ['\\$7', '\\$5', '\\$12', '\\$17'],
              correctAnswer: 0,
              explanation: 'Total change = later − earlier = $12 - 5 = 7$ dollars.',
            },
            {
              question: 'Where two lines on a graph cross, the two values are…',
              options: ['equal', 'both zero', 'as far apart as possible', 'always increasing'],
              correctAnswer: 0,
              explanation: 'A crossing point means both lines are at the same height, so the two values are equal at that moment.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'line-graphs',
    sections: [
      {
        id: 'lg5-intro',
        type: 'text' as const,
        content: `# 📈 Line Graphs

**Part 5 of 5 — Building a Graph & Mastery Check**

---

You can now read points, follow trends, find changes, and compare lines. In this last part you'll **build** a graph from a table, then take the Exit Quiz.`,
      },
      {
        id: 'lg5-build',
        type: 'text' as const,
        content: `## Building a Line Graph (4 Steps)

To turn a table of data into a line graph:

1. **Label the axes.** Time on the x-axis (across), the measured value on the y-axis (up).
2. **Choose a scale.** Pick even steps for the y-axis (like 0, 2, 4, 6, …) that reach your biggest value.
3. **Plot each point** as $(\\text{time},\\ \\text{value})$ — across first, then up.
4. **Connect the points** in order, left to right, with straight lines.

**Example table** (rain in a town):

| Month | Rain (in) |
|-------|-----------|
| Mar | 4 |
| Apr | 6 |
| May | 3 |

Plot $(\\text{Mar}, 4)$, $(\\text{Apr}, 6)$, $(\\text{May}, 3)$, then connect. The line goes **up** from March to April, then **down** from April to May.

> ⚠️ Always plot the points in **time order** and connect them left to right — don't skip around.`,
      },
      {
        id: 'lg5-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Plot the Rain Data** 🔽

Rain: Mar = 4 in, Apr = 6 in, May = 3 in.`,
        exercise: {
          dropdowns: [
            { label: 'Time (months) goes on which axis?', options: ['the x-axis (across)', 'the y-axis (up)', 'neither axis'] },
            { label: 'From March to April the line goes:', options: ['up', 'down', 'flat'] },
            { label: 'From April to May the line goes:', options: ['down', 'up', 'flat'] },
          ],
          correctAnswers: ['the x-axis (across)', 'up', 'down'],
          hint1: 'Time always goes on the horizontal x-axis.',
          hint2: 'Compare the rain amounts: 4 then 6 then 3.',
          hint3: 'Mar→Apr: 4 to 6 is up. Apr→May: 6 to 3 is down.',
          explanation: 'Months (time) go on the x-axis. Rain rises 4→6 (up) from Mar to Apr, then falls 6→3 (down) from Apr to May.',
        },
      },
      {
        id: 'lg5-build-drill',
        type: 'input-boxes' as const,
        content: `**Changes in the Rain Data** 🧮

Rain (in): Mar = 4, Apr = 6, May = 3.

**1)** Change from Mar to Apr: $6 - 4 = \\,?$ in
**2)** Highest rainfall amount $= \\,?$ in
**3)** Lowest rainfall amount $= \\,?$ in`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '3'],
          hint1: 'Change = later − earlier. Highest = biggest number; lowest = smallest.',
          hint2: 'Mar to Apr: 6 − 4. Then look for the biggest and smallest of 4, 6, 3.',
          hint3: '6 − 4 = 2. Biggest is 6 (April). Smallest is 3 (May).',
          explanation: '1) $6 - 4 = 2$ in more. 2) Highest is 6 in (April). 3) Lowest is 3 in (May).',
        },
      },
      {
        id: 'lg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | What to do |
|------|------------|
| Read a value | go up from the time to the line, then across to the y-axis |
| Read a point $(x, y)$ | across first ($x$ = time), then up ($y$ = value) |
| Describe a trend | up = increasing, down = decreasing, flat = no change |
| Find the change | later value − earlier value |
| Compare two lines | where they cross, the values are equal |

> 🔑 A line graph turns a list of numbers into a **story you can see**: when it rose, when it fell, and when it held steady.`,
      },
      {
        id: 'lg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson. Use the temperature data: 8 AM = 60°F, 10 AM = 66°F, 12 PM = 72°F, 2 PM = 70°F, 4 PM = 64°F.`,
        exercise: {
          questions: [
            {
              question: 'During which part of the day was the temperature DECREASING (line going down)?',
              options: ['From 12 PM to 4 PM', 'From 8 AM to 12 PM', 'From 8 AM to 10 AM', 'It never decreased'],
              correctAnswer: 0,
              explanation: 'After the noon peak (72°F), the temperature dropped to 70°F at 2 PM and 64°F at 4 PM — the line slants down from 12 PM to 4 PM.',
            },
            {
              question: 'What was the change in temperature from 8 AM (60°F) to 12 PM (72°F)?',
              options: ['Up 12°F', 'Up 8°F', 'Down 12°F', 'No change'],
              correctAnswer: 0,
              explanation: 'Later minus earlier: $72 - 60 = 12$. The answer is positive, so the temperature rose 12°F.',
            },
            {
              question: 'On a line graph of plant height vs. day, a FLAT segment tells you that…',
              options: [
                'the plant stayed the same height',
                'the plant was shrinking',
                'there is no data',
                'the plant doubled in height',
              ],
              correctAnswer: 0,
              explanation: 'A flat (horizontal) line means the value did not change — the plant was the same height on both days.',
            },
          ],
        },
      },
    ],
  },
]
