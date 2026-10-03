export const actScienceDataPart2Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-sdata-p2-intro',
      type: 'text' as const,
      content: `
# 📈 Interpreting Graphs

**Part 2 of 7 — Axes, Scales, Reading Points, and Slopes as Rates**

ACT Science graphs come in a few familiar forms: **line graphs**, **scatterplots**, **bar graphs**, and graphs with **two or more curves**. In this lesson, each graph is described by its plotted points (often listed in a small table), which is exactly the information you would pull off a printed graph.

## Read the Frame Before the Curve

| Check | Why it matters |
|---|---|
| **Axis labels and units** | Tells you which variable is which; the x-axis usually holds the independent variable |
| **Scale** | How much each gridline is worth; it may be 2, 5, 0.1, or 50 per line |
| **Where each axis starts** | An axis that starts at 40 instead of 0 makes small changes look dramatic |
| **Legend** | Which curve or bar belongs to which condition |
| **Which vertical axis** | Some graphs have a left axis and a right axis, each for a different curve |
| **Log scale** | If gridlines go 1, 10, 100, 1,000, each step multiplies by 10 |

## Reading a Point

To find y for a given x: go **up** from the x-value to the curve, then **across** to the y-axis. To find x for a given y, reverse it: across from the y-value to the curve, then **down**. When a point falls between gridlines, estimate using the scale (halfway between 40 and 50 is 45).

## Slope Is a Rate, With Units

The slope of a line between two points is

$$\\text{slope} = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$$

and its **units are (y-units) per (x-units)**. A distance (m) vs. time (s) graph has a slope in m/s, which is speed. A mass (g) vs. time (min) graph has a slope in g/min.

| What the graph does | Slope | What it means |
|---|---|---|
| Rises left to right | Positive | y increases as x increases |
| Falls left to right | Negative | y decreases as x increases |
| Flat | Zero | y is not changing; on a time graph, the process has stopped |
| Gets steeper | Rate growing | Faster and faster change |
| Gets flatter | Rate shrinking | Change is slowing down |

**Rise over run, never run over rise.** Dividing Δx by Δy flips the units (min/°C instead of °C/min), and the ACT includes that flipped value as a choice.

**Average rate** between two points uses only those two points, even if the curve wiggles between them.

## Comparing Steepness on a Curve

A curved graph has a different slope in different places. To find where it is steepest, compute Δy over **equal** Δx intervals and compare. If the intervals are unequal, divide each Δy by its own Δx first.

## Two Curves on One Graph

- Compare curves at the **same x-value**.
- Where two curves **cross**, the two quantities are **equal** at that x.
- With **two vertical axes**, read each curve against its own axis. A point that sits halfway up the graph might be 20 on the left axis and 60 on the right.

## Cumulative Graphs

If the y-axis is a running total (total gas collected, total distance), the curve can only rise or stay flat. Its **slope** is the rate of production, and a **flat** stretch means production stopped. The highest point on the curve is not the fastest moment.

## Common Graph Traps

| Trap | How to avoid it |
|---|---|
| Reading the wrong curve or wrong axis | Check the legend and which axis belongs to the curve |
| Misreading the scale | Find the value of one gridline before reading |
| Run over rise | Always change in y divided by change in x |
| Dropping the sign | Falling graph means negative slope |
| Exaggerated change | Note where the axis starts before judging "large" or "small" |
| Wrong rate units | A per-minute slope is not a per-second slope; convert |
      `
    },
    {
      id: 'act-sdata-p2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Slopes along a heating curve</b></summary>

A beaker of crushed ice was heated steadily. Figure 1 is a line graph of temperature (°C, vertical axis) versus time (min, horizontal axis) through these points:

| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| Temperature (°C) | −20 | −10 | 0 | 0 | 0 | 15 | 30 |

**Question 1:** What is the slope from 0 to 4 min?

$$\\dfrac{0 - (-20)}{4 - 0} = \\dfrac{20}{4} = 5$$

The slope is **5 °C/min**: the temperature rose 5 degrees each minute.

**Question 2:** What does the graph show from 4 to 8 min?

The graph is flat (slope 0): temperature did not change even though heat was still being added. The description explains why (the ice was melting), but the data alone tell you the temperature stayed at 0°C.

**Question 3:** Which stretch is steepest?

From 8 to 12 min the slope is 30 ÷ 4 = 7.5 °C/min, steeper than the 5 °C/min at the start. The liquid water warmed faster than the ice did.
</details>

<details>
<summary><b>Example 2: Two curves, two axes</b></summary>

Figure 2 shows an algae culture over 10 days. One curve is algae density (left axis, thousands of cells/mL); the other is dissolved nitrate (right axis, mg/L).

| Day | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| Algae (thousands of cells/mL) | 5 | 9 | 20 | 38 | 42 | 43 |
| Nitrate (mg/L) | 40 | 34 | 22 | 10 | 4 | 3 |

**Question:** On the day the nitrate level was 10 mg/L, what was the algae density?

1. Read the **nitrate curve** against the **right axis**: 10 mg/L occurs on **Day 6**.
2. Go straight up or down to the **algae curve** and read the **left axis**: **38 thousand cells/mL**.

The trap answer is 10 thousand cells/mL, which reads the nitrate value off the wrong axis. Notice also the relationship: as algae rose, nitrate fell, and both curves flatten after Day 8.
</details>
      `
    },
    {
      id: 'act-sdata-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Points and Slopes** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A graph plots the distance a cart has traveled (m, vertical axis) against time (s, horizontal axis). The line passes through (2, 3) and (8, 15). What is the cart's speed?`,
            options: [`2 m/s`, `0.5 m/s`, `1.875 m/s`, `12 m/s`],
            correctAnswer: 0,
            explanation: `Speed is the slope: (15 − 3) ÷ (8 − 2) = 12 ÷ 6 = 2 m/s. The value 0.5 divides run by rise, which would have units of s/m. The value 1.875 divides one point's coordinates (15 ÷ 8) instead of the changes, and 12 m/s is the change in distance with no division by time.`
          },
          {
            question: `A graph of the mass of a melting ice block (g, vertical axis) versus time (min, horizontal axis) is a straight line from (0, 500) to (25, 300). What is the slope of the line?`,
            options: [`8 g/min`, `-8 g/min`, `-200 g/min`, `-0.125 min/g`],
            correctAnswer: 1,
            explanation: `Slope = (300 − 500) ÷ (25 − 0) = −200 ÷ 25 = −8 g/min, negative because the mass decreases. The positive 8 g/min drops the sign. The value −200 g/min is the total change over 25 minutes, not the change per minute, and −0.125 min/g divides time by mass.`
          },
          {
            question: `A graph of a seedling's height (cm) versus time (days) passes through these points: Day 0, 2 cm; Day 4, 3 cm; Day 8, 7 cm; Day 12, 15 cm; Day 16, 18 cm. Over which interval is the graph steepest?`,
            options: [`Day 0 to Day 4`, `Day 4 to Day 8`, `Day 8 to Day 12`, `Day 12 to Day 16`],
            correctAnswer: 2,
            explanation: `The intervals are all 4 days long, so compare the height gains: 1, 4, 8, and 3 cm. The 8 cm gain from Day 8 to Day 12 makes that stretch the steepest. Day 12 to Day 16 reaches the greatest height, but height is not slope; it gains only 3 cm. The first two intervals gain 1 cm and 4 cm.`
          },
          {
            question: `A graph shows two curves: the number of house finches and the number of chickadees at a feeder, counted every 30 minutes from 6 a.m. to noon. The two curves cross at 9 a.m. What does the crossing point show?`,
            options: [
              `Neither species was counted after 9 a.m.`,
              `Both species had equal daily totals`,
              `Both species peaked at 9 a.m.`,
              `The two species had equal counts at 9 a.m.`
            ],
            correctAnswer: 3,
            explanation: `Where two curves cross, they have the same y-value at that x-value, so the two counts were equal at 9 a.m. A crossing says nothing about counting stopping, since both curves continue to noon. It compares the counts at one time, not the totals for the day, and two curves can cross while one is rising and the other is falling, so neither needs to peak there.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p2-input',
      type: 'input-boxes' as const,
      content: `
**Slopes on a Cumulative Graph** 🧮

A graph of total rainwater collected in a barrel (L, vertical axis) versus time (h, horizontal axis) passes through these points: (0, 0), (2, 6), (5, 15), (9, 15), (10, 19). Enter numbers only.

1) What is the slope from 0 to 2 h, in L/h?

2) What is the slope from 5 to 9 h, in L/h?

3) What is the average rate of collection over the whole 10 hours, in L/h?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0', '1.9'],
        hint1: 'Change in liters divided by change in hours: 6 ÷ 2.',
        hint2: 'The total stayed at 15 L from hour 5 to hour 9.',
        hint3: 'Use only the first and last points: 19 L over 10 h.',
        explanation: '1) 6 ÷ 2 = 3 L/h. 2) (15 − 15) ÷ 4 = 0 L/h, a flat stretch where no rain was collected. 3) (19 − 0) ÷ (10 − 0) = 1.9 L/h, since an average rate uses only the endpoints.'
      }
    },
    {
      id: 'act-sdata-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Set: Two Curves** 📋

Two 50.0 g samples of the same metal, one powdered (Sample P) and one a solid ribbon (Sample R), were placed in separate beakers of acid. Figure 1 is a line graph of the mass remaining (g) versus time (min). The vertical axis runs from **40 g to 52 g** in 2 g gridlines. The plotted points are:

| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| Sample P mass (g) | 50.0 | 47.0 | 45.0 | 44.0 | 43.6 | 43.6 |
| Sample R mass (g) | 50.0 | 49.0 | 48.0 | 47.0 | 46.0 | 45.0 |
      `,
      exercise: {
        questions: [
          {
            question: `During which 2-minute interval did Samples P and R lose mass at the same rate?`,
            options: [`0 to 2 min`, `2 to 4 min`, `4 to 6 min`, `8 to 10 min`],
            correctAnswer: 2,
            explanation: `Sample P loses 3.0, 2.0, 1.0, 0.4, and 0 g in the five intervals, while Sample R loses 1.0 g in every interval. They match only from 4 to 6 min. From 0 to 4 min P loses mass faster, and from 8 to 10 min P loses nothing while R still loses 1.0 g.`
          },
          {
            question: `According to Figure 1, by about what time had Sample P stopped losing mass?`,
            options: [`By about 2 min`, `About 8 min`, `About 10 min`, `It never stopped`],
            correctAnswer: 1,
            explanation: `Sample P's curve is flat at 43.6 g from 8 to 10 min, so its mass stopped changing by about 8 min. At 2 min it was still losing mass quickly. The 10 min point is just the end of the graph, and the flat final stretch shows that it did stop.`
          },
          {
            question: `Which statement about Figure 1 is correct?`,
            options: [
              `Sample R's curve gets steeper as time passes`,
              `Sample P lost more than half of its mass`,
              `Sample R's curve is flat after 8 minutes`,
              `Sample P's curve starts steep and then flattens`
            ],
            correctAnswer: 3,
            explanation: `Sample P loses 3.0 g in the first interval and then less and less, so its curve starts steep and flattens. Sample R loses exactly 1.0 g per interval, so its curve is a straight line that neither steepens nor goes flat. Sample P lost only 6.4 g of 50.0 g; the axis starting at 40 g makes that drop look larger than it is.`
          },
          {
            question: `What was Sample R's average rate of mass loss over the 10 minutes, in grams per second?`,
            options: [`0.0083 g/s`, `0.5 g/s`, `0.05 g/s`, `30 g/s`],
            correctAnswer: 0,
            explanation: `Sample R lost 5.0 g in 10 min, which is 0.5 g/min, and 0.5 ÷ 60 ≈ 0.0083 g/s. The value 0.5 g/s keeps the per-minute rate but labels it per second. The value 0.05 g/s treats 10 minutes as 100 seconds, and 30 g/s multiplies by 60 instead of dividing.`
          }
        ]
      }
    },
    {
      id: 'act-sdata-p2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Give yourself about **one minute**.

A graph shows the speed of a falling parachute (m/s, vertical axis) versus time (s, horizontal axis). The vertical axis has gridlines every 5 m/s. The curve passes through (0, 0), (1, 9), (2, 15), (3, 18), (4, 19), and (6, 19).

**Question:** Between which two times is the average acceleration (the slope) greatest, and what is it?

<details>
<summary><b>Show answer</b></summary>

**From 0 to 1 s, 9 m/s per second.** The speed gains in each 1-second step are 9, 6, 3, and 1 m/s, and the curve is flat (0) from 4 to 6 s. The steepest stretch is at the start, even though the speed is highest later. Notice the units: the slope of a speed vs. time graph is m/s per s, an acceleration.
</details>
      `
    },
    {
      id: 'act-sdata-p2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Read the **frame first**: axis labels, units, gridline scale, where each axis starts, the legend, and which axis belongs to which curve.
- **Slope = Δy ÷ Δx**, with units of **y-units per x-unit**. A falling graph has a **negative** slope; a flat stretch has slope **zero**.
- To find where a curve is **steepest**, compare Δy over equal Δx; the highest point is not the steepest point.
- Where two curves **cross**, the quantities are **equal** at that x-value.
- On a **cumulative** graph, slope is the rate of production and a flat stretch means it stopped.
- Convert rate units when the question asks (per minute ÷ 60 = per second).
      `
    }
  ]
};
