/**
 * Exit-quiz pool for the ACT Science Data Analysis lesson (reading tables;
 * interpreting graphs and slopes; identifying trends and proportionality;
 * comparing data sets and error bars; interpolation, extrapolation, and
 * prediction error; variables, controls, and claims; integrated timed
 * practice), written from the lesson itself and tagged by exam-yield tier (see
 * ../lesson-built.ts). Every item carries its own data in the stem, and no item
 * reuses a table or scenario the lesson uses as a teaching example.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ─────────────── Part 1 — Reading data tables ───────────────
  {
    question: `A biologist recorded the total number of turtle eggs that had hatched in a nest by the end of each day.

| Day | Total eggs hatched |
|---|---|
| 1 | 3 |
| 2 | 11 |
| 3 | 24 |
| 4 | 38 |
| 5 | 45 |

How many eggs hatched from the end of Day 2 to the end of Day 4?`,
    options: [`38 eggs`, `14 eggs`, `27 eggs`, `49 eggs`],
    correctAnswer: 2,
    explanation: `The column is a running total, so the eggs that hatched in that span are 38 - 11 = 27. Reading 38 gives every egg hatched since the start, not just since Day 2. The value 14 is only the Day 3 to Day 4 change, and 49 adds the two totals instead of subtracting them.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `The table gives the maximum dissolved oxygen in fresh water and in seawater at three temperatures.

| Temperature (°C) | Fresh water (mg/L) | Seawater (mg/L) |
|---|---|---|
| 10 | 11.3 | 9.0 |
| 20 | 9.1 | 7.4 |
| 30 | 7.6 | 6.2 |

As temperature increases from 10°C to 30°C, the difference between the fresh water and seawater values:`,
    options: [`decreases`, `increases steadily`, `stays the same`, `increases, then decreases`],
    correctAnswer: 0,
    explanation: `The differences are 11.3 - 9.0 = 2.3, 9.1 - 7.4 = 1.7, and 7.6 - 6.2 = 1.4 mg/L, so the gap shrinks at each step. It never grows, so neither a steady increase nor a rise-then-fall fits. Both columns fall, but by different amounts, so the gap does not stay the same.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `The table gives the greatest mass of a salt that will dissolve in 100 g of water at four temperatures.

| Temperature (°C) | Solubility (g per 100 g water) |
|---|---|
| 10 | 21 |
| 30 | 37 |
| 50 | 46 |
| 70 | 58 |

What is the greatest mass of the salt that will dissolve in 50 g of water at 50°C?`,
    options: [`46 g`, `23 g`, `92 g`, `18.5 g`],
    correctAnswer: 1,
    explanation: `The table value is per 100 g of water, and 50 g is half that amount, so half of 46 g, or 23 g, dissolves. Answering 46 g ignores the "per 100 g" basis, and 92 g doubles the value when it should be halved. The value 18.5 g halves the 30°C reading instead of the 50°C reading.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `A student heated different volumes of water in the same kettle and recorded how long each took to boil.

| Volume of water (mL) | Time to boil (s) |
|---|---|
| 100 | 80 |
| 200 | 160 |
| 300 | 240 |
| 500 | 400 |

Which volume of water took 4.0 minutes to boil?`,
    options: [`100 mL`, `200 mL`, `500 mL`, `300 mL`],
    correctAnswer: 3,
    explanation: `The table is in seconds, so convert the question's value: 4.0 min × 60 = 240 s, which matches 300 mL. Choosing 500 mL treats a minute as 100 seconds and looks for 400 s. The 100 mL and 200 mL samples boiled in 80 s and 160 s, both well under 4 minutes.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },

  // ─────────────── Part 2 — Interpreting graphs ───────────────
  {
    question: `The diameter of a bacterial colony was measured over 6 hours.

| Time (h) | Diameter (mm) |
|---|---|
| 0 | 2 |
| 2 | 6 |
| 4 | 11 |
| 6 | 18 |

What was the average rate of increase in diameter from 2 h to 6 h?`,
    options: [`1.5 mm/h`, `3 mm/h`, `4.5 mm/h`, `12 mm/h`],
    correctAnswer: 1,
    explanation: `Average rate is change divided by time: (18 - 6) / (6 - 2) = 12 / 4 = 3 mm/h. The value 12 mm/h is the change in diameter with no division by time. Dividing the final diameter, 18, by 4 gives 4.5 mm/h, and dividing the starting diameter, 6, by 4 gives 1.5 mm/h; both use a single reading instead of the change.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `A beaker of water cooled as shown.

| Time (min) | Temperature (°C) |
|---|---|
| 0 | 85 |
| 5 | 70 |
| 10 | 55 |
| 15 | 40 |

What is the slope of a graph of temperature versus time for these data?`,
    options: [`3 °C/min`, `-15 °C/min`, `-3 °C/min`, `-0.33 min/°C`],
    correctAnswer: 2,
    explanation: `Temperature falls 15°C every 5 minutes, so the slope is -15 / 5 = -3 °C/min, negative because the water is cooling. A positive 3 °C/min drops the sign. The value -15 °C/min is the change per 5-minute row, not per minute, and -0.33 min/°C divides time by temperature, which flips the units.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `Sample A warmed from 20°C to 50°C in 5 minutes. Sample B warmed from 15°C to 63°C in 600 seconds. Which sample warmed at the greater average rate, and by how much?`,
    options: [
      `Sample A, by 1.2 °C/min`,
      `Sample B, by 1.2 °C/min`,
      `Sample B, by 18 °C/min`,
      `Sample A, by 5.9 °C/min`,
    ],
    correctAnswer: 0,
    explanation: `Sample A's rate is 30 / 5 = 6 °C/min; Sample B's 600 seconds is 10 minutes, so its rate is 48 / 10 = 4.8 °C/min, and A is faster by 1.2 °C/min. Naming Sample B, or a gap of 18, compares total temperature changes (48 vs. 30) and ignores the different times. A gap of 5.9 comes from leaving B's rate in °C per second (0.08) and subtracting it from A's per-minute rate.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `Figure 1 shows a lake over one year. One curve is water temperature, read on the left vertical axis (°C); the other is dissolved oxygen, read on the right vertical axis (mg/L). The plotted points are:

| Month | Jan | Mar | May | Jul | Sep | Nov |
|---|---|---|---|---|---|---|
| Water temperature (°C) | 4 | 8 | 15 | 24 | 19 | 9 |
| Dissolved oxygen (mg/L) | 13 | 11 | 9 | 6 | 8 | 11 |

In the month when the dissolved oxygen was 8 mg/L, the water temperature was:`,
    options: [`8°C`, `24°C`, `15°C`, `19°C`],
    correctAnswer: 3,
    explanation: `Reading the oxygen curve against the right axis, 8 mg/L occurs in September, and the temperature curve against the left axis gives 19°C that month. Answering 8°C reads the oxygen value off the temperature axis, which is March's temperature. The value 24°C belongs to July, the month of lowest oxygen, and 15°C belongs to May, when the oxygen was 9 mg/L.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A graph shows the number of bacteria in a culture versus time. The vertical axis is a log scale with evenly spaced gridlines labeled 10, 100, 1,000, 10,000, and 100,000. At 2 h the curve is on the 100 gridline, and at 6 h it is on the 10,000 gridline. By what factor did the number of bacteria increase from 2 h to 6 h?`,
    options: [`2 times`, `20 times`, `100 times`, `10 times`],
    correctAnswer: 2,
    explanation: `On a log scale each gridline step multiplies the value by 10, and the curve rose two steps, so the count grew by 10 × 10 = 100 times (from 100 to 10,000). Answering 2 times counts the gridlines as if each step were a single unit. The value 20 times multiplies the number of steps by 10 instead of multiplying by 10 once per step, and 10 times counts only one step.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 2,
  },
  {
    question: `A graph shows the heights of two bamboo species grown side by side, with one line for each species through these points:

| Week | 0 | 2 | 4 | 6 |
|---|---|---|---|---|
| Species P height (cm) | 40 | 52 | 64 | 76 |
| Species Q height (cm) | 10 | 30 | 50 | 70 |

Which statement is supported by the graph?`,
    options: [
      `P was taller every week, but Q grew faster`,
      `P was taller every week, so P grew faster`,
      `Q grew faster, so Q was taller every week`,
      `Both species grew at the same rate`,
    ],
    correctAnswer: 0,
    explanation: `P's line is higher at every week, but Q's line is steeper: Q gains 20 cm every 2 weeks (10 cm/week) while P gains 12 cm (6 cm/week). Being higher on a graph does not make a line steeper, so P did not grow faster. Q grew faster but was still shorter at every week shown, and gains of 60 cm versus 36 cm are not the same rate.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },

  // ─────────────── Part 3 — Identifying trends ───────────────
  {
    question: `A student measured the boiling point of water at four altitudes.

| Altitude (m) | Boiling point (°C) |
|---|---|
| 0 | 100.0 |
| 1,000 | 96.7 |
| 2,000 | 93.4 |
| 3,000 | 90.0 |

According to the table, as altitude increases, the boiling point of water:`,
    options: [`decreases at a steady rate`, `increases steadily`, `increases, then decreases`, `stays about the same`],
    correctAnswer: 0,
    explanation: `Each 1,000 m step lowers the boiling point by about 3.3°C, so the boiling point decreases steadily. No value in the table rises, so neither a steady increase nor a rise-then-fall fits. A drop of 10°C across the table is far too large to call the values about the same.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `The table shows the activity of an enzyme at five temperatures.

| Temperature (°C) | Activity (units) |
|---|---|
| 20 | 10 |
| 30 | 30 |
| 40 | 41 |
| 50 | 35 |
| 60 | 12 |

Which statement best describes the data?`,
    options: [
      `Activity peaks at 30°C and then levels off`,
      `Activity rises across the entire tested range`,
      `Activity peaks at 40°C and then falls`,
      `Activity peaks at 50°C and then falls sharply`,
    ],
    correctAnswer: 2,
    explanation: `The largest activity, 41 units, occurs at 40°C, and activity then drops to 35 and 12 units, so it peaks and falls. The biggest single gain comes from 20°C to 30°C, but the peak is where the value is largest, and activity keeps rising after 30°C. Activity falls after 40°C, so it does not rise across the whole range, and the 50°C value is below the 40°C value.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `Researchers recorded the average summer surface temperature in five neighborhoods with different amounts of tree cover.

| Tree cover (%) | Surface temperature (°C) |
|---|---|
| 10 | 41 |
| 20 | 38 |
| 30 | 36 |
| 40 | 33 |
| 50 | 31 |

Which statement is best supported by the data?`,
    options: [
      `Adding trees causes the surface temperature to fall`,
      `More tree cover went with lower surface temperatures`,
      `Temperature falls exactly 3°C per 10% of tree cover`,
      `Tree cover and surface temperature are not related`,
    ],
    correctAnswer: 1,
    explanation: `As tree cover rises, surface temperature falls, which shows a negative association between the two. These are observations of existing neighborhoods, so they cannot prove that adding trees causes the drop; other neighborhood differences could matter. The drops are 3, 2, 3, and 2°C, not exactly 3°C each time, and a consistent trend rules out "not related."`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student poured different volumes of water into the same container and measured the total mass of the container plus water.

| Volume of water (mL) | Total mass (g) |
|---|---|
| 100 | 150 |
| 200 | 250 |
| 300 | 350 |
| 400 | 450 |

Is the total mass directly proportional to the volume of water?`,
    options: [
      `Yes, because the mass rises as the volume rises`,
      `Yes, because the mass rises 100 g per 100 mL`,
      `No, because the mass rises by unequal amounts`,
      `No, because mass ÷ volume changes from row to row`,
    ],
    correctAnswer: 3,
    explanation: `Direct proportion requires mass ÷ volume to be constant, but it is 1.5, 1.25, about 1.17, and 1.125; doubling the volume from 100 to 200 mL does not double the mass (150 to 250 g). Rising together shows only a direct trend, and equal 100 g steps show the data are linear, but a line that does not pass through the origin is not proportional. The mass does rise by equal amounts, so "unequal amounts" misreads the table.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 3,
  },
  {
    question: `A cart was timed over the same course at different speeds.

| Speed (m/s) | 2 | 4 | 5 | 8 |
|---|---|---|---|---|
| Time (s) | 20 | 10 | 8 | 5 |

Based on the data, what would the time be at a speed of 10 m/s?`,
    options: [`3 s`, `4 s`, `2.5 s`, `6.25 s`],
    correctAnswer: 1,
    explanation: `Speed × time is 40 in every row, so time is inversely proportional to speed, and at 10 m/s the time is 40 ÷ 10 = 4 s. Continuing the straight-line drop from 5 to 8 m/s (1 s per m/s) gives 3 s, but the data curve rather than fall in a line. Halving 5 s to get 2.5 s treats 8 to 10 m/s as a doubling, and 6.25 s scales time up with speed as if the relationship were direct.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `The table shows the concentration of a drug in a patient's blood after one dose.

| Time after dose (h) | 0 | 1 | 3 | 6 | 10 |
|---|---|---|---|---|---|
| Concentration (mg/L) | 40 | 33 | 24 | 15 | 8 |

Over which interval did the concentration fall at the greatest rate?`,
    options: [`0 to 1 h`, `1 to 3 h`, `3 to 6 h`, `6 to 10 h`],
    correctAnswer: 0,
    explanation: `The time steps are unequal, so divide each drop by its own time: 7 / 1 = 7, 9 / 2 = 4.5, 9 / 3 = 3, and 7 / 4 = 1.75 mg/L per hour. The fastest fall is from 0 to 1 h. The 1-to-3 h and 3-to-6 h intervals have the largest raw drops, 9 mg/L each, but spread over more hours, and the 6-to-10 h interval is the slowest.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },

  // ─────────────── Part 4 — Comparing data sets ───────────────
  {
    question: `Table 1 shows the soil nitrogen level in plots given different amounts of fertilizer. Table 2 shows the chlorophyll content of corn leaves at different soil nitrogen levels.

Table 1

| Fertilizer (kg per plot) | Soil nitrogen (ppm) |
|---|---|
| 0 | 12 |
| 2 | 20 |
| 4 | 31 |
| 6 | 39 |

Table 2

| Soil nitrogen (ppm) | Chlorophyll (mg/g of leaf) |
|---|---|
| 12 | 1.4 |
| 20 | 2.1 |
| 31 | 2.9 |
| 39 | 3.3 |

Based on both tables, the chlorophyll content of corn leaves in a plot given 4 kg of fertilizer would be about:`,
    options: [`31 mg/g`, `2.1 mg/g`, `3.3 mg/g`, `2.9 mg/g`],
    correctAnswer: 3,
    explanation: `Table 1 gives 31 ppm of nitrogen for 4 kg of fertilizer, and Table 2 gives 2.9 mg/g of chlorophyll at 31 ppm. Answering 31 stops at the bridge value, which is a nitrogen level, not a chlorophyll content. The value 2.1 mg/g belongs to the 2 kg plots and 3.3 mg/g to the 6 kg plots.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Table 1 gives soil lead levels at several distances from a smelter. Table 2 gives the percent of earthworms that survived 30 days in soil with different lead levels.

Table 1

| Distance (km) | Soil lead (ppm) |
|---|---|
| 1 | 900 |
| 2 | 600 |
| 4 | 300 |
| 8 | 150 |

Table 2

| Soil lead (ppm) | Survival (%) |
|---|---|
| 150 | 92 |
| 300 | 80 |
| 600 | 52 |
| 900 | 30 |

Assuming linear changes between listed values, the earthworm survival in soil 3 km from the smelter is closest to:`,
    options: [`80%`, `52%`, `66%`, `86%`],
    correctAnswer: 2,
    explanation: `In Table 1, 3 km is halfway between 2 km (600 ppm) and 4 km (300 ppm), so the lead level is about 450 ppm. In Table 2, 450 ppm is halfway between 300 ppm (80%) and 600 ppm (52%), giving about 66%. The values 80% and 52% copy a single row, and 86% interpolates between the 150 and 300 ppm rows, which are not the neighbors of 450 ppm.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Two studies measured the growth of young trout at different water temperatures: Study 1 in laboratory tanks and Study 2 in outdoor ponds.

| Water temperature (°C) | Study 1, tank growth (g/week) | Study 2, pond growth (g/week) |
|---|---|---|
| 8 | 2.2 | 1.8 |
| 12 | 3.5 | 2.9 |
| 16 | 4.1 | 3.4 |
| 20 | 3.6 | 3.7 |

Over which range of temperature do BOTH studies show growth increasing as temperature increases?`,
    options: [`From 8 to 16°C only`, `From 16 to 20°C only`, `From 8 to 20°C throughout`, `Over none of the range`],
    correctAnswer: 0,
    explanation: `From 8 to 12°C and from 12 to 16°C, growth rises in both studies. From 16 to 20°C, Study 2 keeps rising but Study 1 falls from 4.1 to 3.6 g/week, so the studies agree only from 8 to 16°C. That drop also rules out "8 to 20°C throughout" and "16 to 20°C only," and the shared rise below 16°C rules out "none of the range."`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Table 1 gives the water pH of four ponds, and Table 2 gives the number of frog eggs per square meter found in the same ponds.

Table 1

| Pond | Water pH |
|---|---|
| J | 5.0 |
| K | 6.0 |
| L | 7.0 |
| M | 8.0 |

Table 2

| Pond | Frog eggs per square meter |
|---|---|
| L | 48 |
| J | 9 |
| M | 40 |
| K | 27 |

A new pond with a water pH of 6.5 would most likely have a frog egg count between:`,
    options: [`9 and 40`, `27 and 48`, `40 and 48`, `9 and 27`],
    correctAnswer: 1,
    explanation: `pH 6.5 lies between Pond K (pH 6.0) and Pond L (pH 7.0), and matching by label, Table 2 gives those ponds 27 and 48 eggs. The range 9 to 40 comes from matching rows by position instead of by pond. The range 40 to 48 belongs to pH 7.0 to 8.0, and 9 to 27 belongs to pH 5.0 to 6.0.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Four groups were measured, and each mean is shown with its uncertainty.

| Group | Mean | Uncertainty |
|---|---|---|
| W | 20 | ± 3 |
| X | 24 | ± 2 |
| Y | 31 | ± 2 |
| Z | 26 | ± 4 |

Which pair of groups gives the strongest evidence of a real difference?`,
    options: [`W and X`, `Y and Z`, `W and Z`, `X and Y`],
    correctAnswer: 3,
    explanation: `X spans 22 to 26 and Y spans 29 to 33, so their ranges do not overlap at all, which is strong evidence of a difference. W (17 to 23) overlaps both X (22 to 26) and Z (22 to 30). Y (29 to 33) also overlaps Z (22 to 30), so those differences are uncertain.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `A student ran three trials under each of two conditions and recorded the reaction time.

| Condition | Trial 1 (s) | Trial 2 (s) | Trial 3 (s) |
|---|---|---|---|
| P | 8.1 | 8.4 | 8.0 |
| Q | 8.3 | 9.6 | 7.5 |

Which statement is best supported by the data?`,
    options: [
      `Q's mean is higher, so Q clearly gives longer reaction times than P does`,
      `P's mean is higher, and P's narrow spread makes that difference quite clear`,
      `Q's mean is higher, but Q's wide spread makes the difference uncertain`,
      `P's mean is higher, but P's narrow spread makes the difference uncertain`,
    ],
    correctAnswer: 2,
    explanation: `The means are about 8.17 s for P and 8.47 s for Q, so Q's mean is higher, but Q's trials range from 7.5 to 9.6 s and fully contain P's range of 8.0 to 8.4 s. With that much overlap, a 0.3 s gap is weak evidence, so calling Q clearly longer overstates the data. Both statements that make P's mean higher misread the means.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 4,
  },

  // ─────────────── Part 5 — Making predictions ───────────────
  {
    question: `A student hung masses from a spring and measured how far it stretched.

| Mass (g) | Stretch (cm) |
|---|---|
| 100 | 4.0 |
| 200 | 8.0 |
| 300 | 12.0 |
| 400 | 16.0 |

Based on the table, the stretch for a 250 g mass would be closest to:`,
    options: [`8.0 cm`, `10.0 cm`, `12.0 cm`, `25.0 cm`],
    correctAnswer: 1,
    explanation: `250 g lies halfway between 200 g and 300 g, so linear interpolation puts the stretch halfway between 8.0 and 12.0 cm, at 10.0 cm. Choosing 8.0 or 12.0 cm copies a neighboring row instead of estimating between them. The value 25.0 cm treats the mass number as if it were the stretch.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `The sound level from a speaker was measured at four distances.

| Distance (m) | 1 | 2 | 6 | 10 |
|---|---|---|---|---|
| Sound level (dB) | 90 | 84 | 74 | 70 |

Assuming the sound level changes linearly between measured distances, the sound level at 4 m was most likely:`,
    options: [`84 dB`, `74 dB`, `72 dB`, `79 dB`],
    correctAnswer: 3,
    explanation: `The distances are unevenly spaced, so the neighbors of 4 m are 2 m and 6 m; 4 m is halfway between them, giving (84 + 74) / 2 = 79 dB. The values 84 dB and 74 dB copy a neighboring column. The value 72 dB averages the 6 m and 10 m readings, which are not the neighbors of 4 m.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `The table shows the melting point of an alloy made with different percentages of tin.

| Tin (%) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| Melting point (°C) | 327 | 307 | 287 | 267 | 247 |

Based on the table, an alloy that melts at 277°C most likely contains about how much tin?`,
    options: [`25%`, `20%`, `30%`, `50%`],
    correctAnswer: 0,
    explanation: `277°C is halfway between 287°C (20% tin) and 267°C (30% tin), so the tin content is about halfway between, at 25%. Choosing 20% or 30% picks a neighboring column instead of estimating between them. The value 50% reads the 50-degree drop from 327°C as a percentage of tin.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `A model predicted the time for a cart to reach the end of a track, and the time was then measured.

| Trial | Predicted (s) | Measured (s) |
|---|---|---|
| 1 | 12.0 | 13.1 |
| 2 | 15.0 | 13.6 |
| 3 | 18.0 | 18.9 |
| 4 | 21.0 | 22.2 |

In which trial was the absolute error of the prediction largest?`,
    options: [`Trial 1`, `Trial 2`, `Trial 3`, `Trial 4`],
    correctAnswer: 1,
    explanation: `Absolute error is the distance between predicted and measured values, ignoring sign: 1.1, 1.4, 0.9, and 1.2 s. Trial 2's error of 1.4 s is largest even though its measured value is below the prediction. Picking Trial 4 compares only the positive differences, and Trials 1 and 3 have smaller errors.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Seeds were planted in a tray, and the total percent of them that had sprouted was recorded every 3 days.

| Day | 0 | 3 | 6 | 9 |
|---|---|---|---|---|
| Seeds sprouted (% of seeds planted) | 0 | 32 | 64 | 88 |

Which is the most reasonable estimate of the percent sprouted by Day 15?`,
    options: [
      `About 136%, from the latest 3-day gain`,
      `About 152%, from the early 3-day gain`,
      `Between 88% and 100%`,
      `About 70%, since the gains are shrinking`,
    ],
    correctAnswer: 2,
    explanation: `The percent sprouted is a running total, so it cannot fall below 88%, and no more than 100% of the seeds can sprout; with the gains already shrinking from 32 to 24, the value will lie between those limits. Continuing the latest or the early gain gives 136% or 152%, which extrapolates straight past the 100% ceiling. Shrinking gains mean slower sprouting, not fewer sprouted seeds, so a total cannot drop to 70%.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `A student shone a lamp through stacks of identical tinted plastic sheets and measured the light that passed through.

| Number of sheets | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Light passing through (lux) | 960 | 480 | 240 | 120 |

If the pattern continues, how much light would pass through 5 sheets?`,
    options: [`60 lux`, `15 lux`, `0 lux`, `30 lux`],
    correctAnswer: 3,
    explanation: `Each sheet halves the light, a constant ratio, so 4 sheets pass 60 lux and 5 sheets pass 30 lux. The value 60 lux stops one sheet short, and 15 lux goes one sheet too far. Subtracting the last drop of 120 lux for each sheet treats the pattern as a constant difference and reaches 0 lux, but the drops themselves halve each time.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },

  // ─────────────── Part 6 — Variables, controls & claims ───────────────
  {
    question: `A student placed pondweed under a lamp at five different distances and counted the oxygen bubbles released per minute. The water temperature (25°C), the length of the pondweed, and the type of water were the same in every trial. Which is the dependent variable?`,
    options: [`The lamp's distance`, `The water temperature`, `The bubbles per minute`, `The pondweed's length`],
    correctAnswer: 2,
    explanation: `The dependent variable is what is measured in response to the change, here the oxygen bubbles per minute. The lamp's distance is the independent variable the student deliberately changed. Water temperature and pondweed length were held the same, so they are controlled variables.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 6,
  },
  {
    question: `A student timed a ball rolling down a ramp.

| Trial | Ramp angle (°) | Ball mass (g) | Ramp length (m) | Time (s) |
|---|---|---|---|---|
| 1 | 20 | 50 | 2.0 | 1.42 |
| 2 | 20 | 100 | 2.0 | 1.41 |
| 3 | 30 | 100 | 2.0 | 1.18 |
| 4 | 30 | 50 | 1.5 | 1.03 |

Which two trials should be compared to find the effect of ball mass alone on the time?`,
    options: [`Trials 1 and 2`, `Trials 2 and 3`, `Trials 3 and 4`, `Trials 1 and 4`],
    correctAnswer: 0,
    explanation: `Trials 1 and 2 have the same angle and ramp length and differ only in mass, so only they isolate mass. Trials 2 and 3 differ only in angle, so they test angle instead. Trials 3 and 4 differ in both mass and length, and Trials 1 and 4 differ in angle and length, so neither pair can isolate mass.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 6,
  },
  {
    question: `A student tested two brands of paper towel.

| Trial | Brand | Water temperature (°C) | Sheets | Water absorbed (mL) |
|---|---|---|---|---|
| 1 | A | 20 | 2 | 48 |
| 2 | B | 40 | 2 | 61 |

The student claims that Brand B is more absorbent than Brand A. Which evaluation of the claim is best?`,
    options: [
      `Supported, since Brand B absorbed 13 mL more`,
      `Can't tell, since the water temperature also changed`,
      `Supported, since both trials used two sheets each`,
      `Contradicted, since Brand A was tested at 20°C`,
    ],
    correctAnswer: 1,
    explanation: `Brand and water temperature both changed between the trials, so the extra 13 mL could come from the warmer water rather than the brand; the comparison is confounded and cannot test the claim. The 13 mL gap is the very result in question, so it cannot settle the claim, and using two sheets in each trial is good design, not evidence about brand. Nothing in the data shows Brand A is more absorbent, so the claim is not contradicted either.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A student timed pendulum swings in two trials.

| Trial | Length (m) | Mass (g) | Release angle (°) |
|---|---|---|---|
| 1 | 0.5 | 100 | 10 |
| 2 | 1.0 | 200 | 10 |

The student wants to add one trial that, compared with one of the existing trials, shows the effect of length alone. Which trial should be added?`,
    options: [`0.5 m, 200 g, 20°`, `1.0 m, 200 g, 20°`, `0.5 m, 100 g, 20°`, `1.0 m, 100 g, 10°`],
    correctAnswer: 3,
    explanation: `A 1.0 m, 100 g, 10° trial differs from Trial 1 only in length, so comparing them isolates length. A 1.0 m, 200 g, 20° trial differs from Trial 2 only in angle, and a 0.5 m, 100 g, 20° trial differs from Trial 1 only in angle, so both test angle. A 0.5 m, 200 g, 20° trial differs from each existing trial in two variables at once.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A new plant fertilizer is sold dissolved in a liquid carrier. Researchers grew three groups of identical tomato plants for 6 weeks: Group 1 received plain water, Group 2 received the carrier liquid alone, and Group 3 received the carrier liquid with the fertilizer. The mean heights were 30 cm, 34 cm, and 45 cm. About how much growth can be credited to the fertilizer itself, beyond any effect of the carrier?`,
    options: [`15 cm`, `4 cm`, `11 cm`, `45 cm`],
    correctAnswer: 2,
    explanation: `To isolate the fertilizer from the carrier, compare with the group that got the carrier alone: 45 - 34 = 11 cm. Comparing with plain water (45 - 30 = 15 cm) mixes the fertilizer's effect with the carrier's. The 4 cm is the carrier's effect alone, and 45 cm credits the entire height to the fertilizer with no control at all.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Student 1 claims that the mass of rust that forms on an iron nail in one week depends only on humidity. Student 2 claims that it depends on both humidity and whether salt is present.

| Trial | Humidity (%) | Salt present? | Rust formed (mg) |
|---|---|---|---|
| 1 | 50 | no | 12 |
| 2 | 50 | yes | 30 |
| 3 | 90 | no | 25 |

Which student's claim do the data support, and why?`,
    options: [
      `Student 1, since Trials 1 and 3 differ in humidity`,
      `Student 2, since Trials 1 and 2 differ only in salt`,
      `Student 1, since Trial 3 rusted more than Trial 1`,
      `Student 2, since salt was present in Trial 3`,
    ],
    correctAnswer: 1,
    explanation: `Trials 1 and 2 have the same humidity but different rust masses, so salt also matters, which supports Student 2 and defeats Student 1's "only." Trials 1 and 3 do show a humidity effect, but that does not show humidity is the only factor, so they cannot support Student 1. Trial 3 had no salt; salt was present only in Trial 2.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },

  // ─────────────── Part 7 — Integrated timed practice ───────────────
  {
    question: `With little time left, a student reaches a question that begins, "According to Figure 2, ..." The passage has three figures and two paragraphs of description. What is the best first step?`,
    options: [
      `Reread both paragraphs of the description`,
      `Go to Figure 2 and check its axis labels`,
      `Compare the trend in Figure 1 to Figure 3`,
      `Pick the choice that matches prior knowledge`,
    ],
    correctAnswer: 1,
    explanation: `The question names Figure 2, so going straight there and reading its labels and units is the fastest path to an accurate answer. Rereading the description spends time on text the question does not need. Figures 1 and 3 are not referenced, and answers to data questions must come from the data, not outside knowledge.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Researchers tested three soil additives on bean plants; a control group received no additive. Each value is the mean of 8 plants, with its uncertainty.

| Group | Mean height (cm) | Uncertainty (cm) |
|---|---|---|
| Control | 30 | ± 2 |
| Additive 1 | 33 | ± 2 |
| Additive 2 | 39 | ± 3 |
| Additive 3 | 27 | ± 1 |

Which additive gives clear evidence of taller plants than the control, and about how much height can be credited to it?`,
    options: [
      `Additive 2 only, about 39 cm`,
      `Additives 1 and 2, about 3 cm and 9 cm`,
      `Additives 1 and 3, about 3 cm each`,
      `Additive 2 only, about 9 cm`,
    ],
    correctAnswer: 3,
    explanation: `The control spans 28 to 32 cm and Additive 2 spans 36 to 42 cm, entirely above it, and its effect is the difference from the control, 39 - 30 = 9 cm. Crediting 39 cm reports Additive 2's whole height rather than its gain over the control. Additive 1 spans 31 to 35 cm, which overlaps the control, so its 3 cm gain is uncertain, and Additive 3's mean is 3 cm below the control, a drop rather than a gain.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `In a field survey, ecologists measured the mean leaf area of one shrub species at five elevations on a mountain. They did not plant, move, or treat any shrubs.

| Elevation (m) | 500 | 1,000 | 1,500 | 2,000 | 2,500 |
|---|---|---|---|---|---|
| Mean leaf area (cm²) | 24 | 21 | 17 | 14 | 12 |

Which conclusion is best supported by the data?`,
    options: [
      `Shrubs higher up tended to have smaller leaves`,
      `Higher elevation causes the shrub's leaves to shrink`,
      `At 4,000 m, the leaves would average about 6 cm²`,
      `Leaf area falls by the same amount for every 500 m`,
    ],
    correctAnswer: 0,
    explanation: `The ecologists only observed existing shrubs, so the data show an association: leaves were smaller at higher elevations. Saying elevation causes the shrinking overreaches, since other differences between sites could explain it. A prediction at 4,000 m extrapolates far beyond the 2,500 m limit of the data, and the drops of 3, 4, 3, and 2 cm² are not equal.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `The height of a burning candle was recorded every 20 minutes.

| Time (min) | 0 | 20 | 40 | 60 |
|---|---|---|---|---|
| Candle height (cm) | 18.0 | 16.4 | 14.8 | 13.2 |

If the trend continues, at about what time after the start will the candle be 6.0 cm tall?`,
    options: [`1.5 h`, `1.25 h`, `2.5 h`, `3.75 h`],
    correctAnswer: 2,
    explanation: `The candle loses 1.6 cm every 20 min, or 0.08 cm/min; going from 13.2 cm to 6.0 cm takes 7.2 / 0.08 = 90 more minutes, so the clock time is 60 + 90 = 150 min, or 2.5 h. The value 1.5 h is only the extra 90 minutes after the last reading. Dividing 6.0 cm by the rate gives 75 min (1.25 h), and dividing the full 18.0 cm by the rate gives 225 min (3.75 h), the time to burn down to nothing.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `With 3 minutes left in the Science section, a student still has 7 unanswered questions on the last passage. Which plan is best?`,
    options: [
      `Work one hard question carefully, leave six blank`,
      `Leave all seven blank to avoid losing any points`,
      `Reread the passage introduction before starting`,
      `Answer the quickest ones, then guess on all the rest`,
    ],
    correctAnswer: 3,
    explanation: `There is no penalty for wrong answers, so the best plan banks the fast points and then puts a guess on every remaining question. Working one hard question and leaving six blank gives up six free chances, and leaving all seven blank protects nothing because blanks and wrong answers both earn zero. Rereading the introduction spends scarce time on text instead of answers.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `A student hypothesizes that wrapping a cup of hot water in a thicker layer of foam slows its cooling. She plans to wrap identical cups in 0, 1, 2, and 3 cm of foam and record each cup's temperature drop over 30 minutes. If her hypothesis is correct, which set of temperature drops (°C), listed for 0, 1, 2, and 3 cm in that order, would she most likely record?`,
    options: [`30, 22, 16, 12`, `12, 16, 22, 30`, `20, 20, 20, 20`, `30, 16, 22, 12`],
    correctAnswer: 0,
    explanation: `Slower cooling means a smaller temperature drop, so if thicker foam slows cooling, each thicker wrap should show a smaller drop: 30, 22, 16, 12. Drops that grow with thickness would mean thicker foam speeds cooling, the opposite of the hypothesis. Equal drops show no effect of foam, and a set in which the 2 cm cup drops more than the 1 cm cup breaks the predicted direction.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-science-data-act')
