/**
 * Exit-quiz pool for the ACT Reading + Science Tips lesson (natural-science
 * Reading passages, Science tables and trends, experimental design, conflicting
 * viewpoints and linked figures, pacing and error logs, predictions and trap
 * elimination, mixed review), written from the lesson itself and tagged by
 * exam-yield tier (see ../lesson-built.ts). Every item carries its own original
 * passage or data in the stem.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────────────────── Part 1 — ACT Reading overview: natural-science passages ─────────────────────────
  {
    question: `Many desert plants open their pores, called *stomata*, only at night. This strategy, known as CAM photosynthesis, lets a plant take in carbon dioxide while the air is cool and humid, store it overnight as an acid, and use it for photosynthesis the next day with its stomata shut. Because closed stomata release almost no water vapor, a CAM plant may lose only a fraction of the water that a similar plant breathing by day would lose.

As it is used in the passage, the word *stomata* refers to:`,
    options: [
      `pores in a plant that it can open and close`,
      `acids that a plant stores overnight`,
      `the cool, humid hours of a desert night`,
      `plants that take in gas only by day`,
    ],
    correctAnswer: 0,
    explanation: `The passage defines the term in its first sentence: plants "open their pores, called stomata," and later keep the stomata "shut," so they are openings that can open and close. The stored acid is what the plant makes from carbon dioxide, not the pores themselves. The cool, humid night is when the pores open, and plants that breathe by day are contrasted with CAM plants rather than named stomata.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `When beavers dam a stream, the water behind the dam spreads out and slows down. Slow water cannot carry as much silt, so the silt settles, and over many years it builds a broad, flat meadow behind the dam. These meadows soak up water like a sponge and release it gradually, which is why streams below beaver dams often keep flowing through dry summers after nearby undammed streams have dried up.

According to the passage, streams below beaver dams often keep flowing in dry summers because:`,
    options: [
      `beavers choose streams that already flow all summer`,
      `dams speed up the water so it carries away more silt`,
      `meadows of settled silt release water slowly`,
      `summer rains fill the ponds behind the dams each year`,
    ],
    correctAnswer: 2,
    explanation: `The passage builds a chain: the dam slows the water, the slow water drops its silt, the silt builds a meadow, and the meadow releases stored water gradually. Saying beavers pick streams that already flow all summer reverses the direction of cause and effect. The dam slows the water rather than speeding it up, and summer rain is never mentioned.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `In a two-year study on three farms, fields bordered by strips of wildflowers had fewer crop-eating aphids than fields without such strips. The strips attract hoverflies, whose larvae feed on aphids. The researchers call their findings preliminary: all three farms grew the same crop in the same region, and the researchers caution that the effect may differ elsewhere.

Which statement is most consistent with the researchers' conclusions as described in the passage?`,
    options: [
      `Wildflower strips remove aphids from fields of every crop`,
      `Hoverflies are the only insects that eat aphids on farms`,
      `Wildflower strips raise aphid numbers where other crops grow`,
      `Wildflower strips may cut aphids, though more testing is needed`,
    ],
    correctAnswer: 3,
    explanation: `The researchers call the results "preliminary" and say the effect "may differ elsewhere," so the supported claim keeps both the benefit and the caution. Claiming the strips work on every crop drops those limits. The passage names hoverflies as one aphid predator without calling them the only one, and it says only that results elsewhere may differ, not that aphids would increase.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `A new method uses satellite images to count elephants from space, and in two open grasslands it matched ground counts to within 5 percent. The result is genuinely impressive, and it could spare survey teams weeks of difficult fieldwork. Still, the method has been tried only where trees are scarce; in dense forest, where many elephants live, the canopy hides animals from above. Until it is tested there, calling it a replacement for ground surveys would be premature.

The author's attitude toward the satellite method is best described as:`,
    options: [
      `dismissive, because it failed in the grassland trials`,
      `impressed, but unsure it will work in every habitat`,
      `certain it should replace ground surveys right away`,
      `indifferent to whether it is ever tested in forests`,
    ],
    correctAnswer: 1,
    explanation: `The author calls the result "genuinely impressive" yet says calling it a replacement "would be premature" until it is tested in forests, which is approval tempered by caution. The method matched ground counts in the grasslands, so it did not fail there. "Premature" rules out certainty, and the author's concern about forest testing is the opposite of indifference.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `(1) Monarch butterflies that emerge in late summer fly thousands of kilometers south to wintering grounds that none of them has ever seen. (2) Researchers suspected that the insects steer by the sun, a method that works only if an animal corrects for the sun's movement across the sky during the day. (3) In one experiment, monarchs whose internal daily clocks had been shifted by six hours under artificial lighting flew in the wrong direction when released. (4) The authors note that the experiment shows a clock is needed but not where in the body it runs, a question still under study.

Sentence 3 mainly serves to:`,
    options: [
      `introduce the puzzle that the passage sets out to explain`,
      `point out an open question that researchers have not solved`,
      `describe an experiment that tests the idea in Sentence 2`,
      `define a term that the author uses later in the passage`,
    ],
    correctAnswer: 2,
    explanation: `Sentence 2 proposes that monarchs steer by the sun with a clock correction, and Sentence 3 reports what happened when that clock was shifted, so it is a test of that idea. The puzzle of reaching never-seen wintering grounds is introduced in Sentence 1, and the unsolved question about where the clock runs appears in Sentence 4. No term is defined in Sentence 3.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `Lichens are partnerships between a fungus and an alga, and they absorb water and nutrients directly from the air. In the 1800s, naturalists noticed that lichens were vanishing from tree trunks near industrial cities. Later studies tied the decline to sulfur dioxide, a gas released by burning coal, which damages the alga partner.

Based on this passage, a new survey finding many lichen species returning to city trees would most likely suggest that:`,
    options: [
      `the trees in the city had grown taller and older`,
      `the fungus partner no longer needs its alga partner`,
      `sulfur dioxide had begun to help lichens to grow`,
      `sulfur dioxide levels in city air had dropped`,
    ],
    correctAnswer: 3,
    explanation: `The passage links lichen loss to sulfur dioxide in the air, so lichens coming back points to cleaner air with less of that gas. Tree age is never connected to lichen survival in the passage. The passage describes the fungus and alga as partners, and it says sulfur dioxide damages lichens rather than helping them.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },

  // ───────────────────────── Part 2 — ACT Science overview: tables, look-ups, trends, changes ─────────────────────────
  {
    question: `A student grew seedlings under four levels of shade.

| Shade (%) | Average height (cm) |
|---|---|
| 0 | 12 |
| 25 | 15 |
| 50 | 17 |
| 75 | 11 |

Which statement is supported by the data?`,
    options: [
      `Height peaked at 50% shade, of the levels tested`,
      `Height rose steadily as shade went from 0% to 75%`,
      `Seedlings grown in 75% shade were the tallest ones`,
      `The amount of shade had no effect on height at all`,
    ],
    correctAnswer: 0,
    explanation: `Heights climb from 12 to 17 cm and then drop to 11 cm, so the tallest average, among the four levels tested, occurred at 50% shade. The drop at 75% rules out a steady rise and makes 75% the shortest group, not the tallest. A spread from 11 to 17 cm shows that shade did affect height.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A student grew radish seedlings under different amounts of daily light and measured them after 3 weeks.

| Light (hours per day) | Leaves per plant | Height (cm) |
|---|---|---|
| 6 | 4 | 3.2 |
| 9 | 6 | 5.0 |
| 12 | 8 | 6.4 |
| 15 | 9 | 6.9 |

According to the table, the seedlings that reached a height of 6.4 cm received how much light per day?`,
    options: [`6.4 hours`, `8 hours`, `12 hours`, `15 hours`],
    correctAnswer: 2,
    explanation: `Find 6.4 in the height column and read left: that row lists 12 hours of light. The 8 comes from the leaves column in the same row, and 6.4 hours copies the height into the light column. Fifteen hours goes with the 6.9 cm row.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `Algae biomass was measured at three river sites over 10 days.

| Day | Site P (g per square meter) | Site Q (g per square meter) | Site R (g per square meter) |
|---|---|---|---|
| 0 | 2.0 | 11.5 | 6.0 |
| 5 | 5.5 | 12.0 | 7.0 |
| 10 | 9.0 | 12.4 | 8.1 |

Which site had the greatest increase in biomass from Day 0 to Day 10, and which site had the greatest biomass on Day 10?`,
    options: [
      `Greatest increase: Site Q; greatest biomass: Site Q`,
      `Greatest increase: Site P; greatest biomass: Site Q`,
      `Greatest increase: Site P; greatest biomass: Site P`,
      `Greatest increase: Site R; greatest biomass: Site Q`,
    ],
    correctAnswer: 1,
    explanation: `Site P rose by 7.0, far more than Site Q (0.9) or Site R (2.1), so P had the greatest increase. On Day 10, though, Site Q's 12.4 is the largest value in that row, so Q had the greatest biomass. Picking P for both confuses the steepest growth with the highest value, and picking Q for both does the reverse; Site R leads neither column.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `A biologist measured the average body length of tadpoles in a tank each week. Near the end, the tadpoles began to absorb their tails.

| Week | Average length (mm) |
|---|---|
| 1 | 8 |
| 2 | 15 |
| 3 | 20 |
| 4 | 23 |
| 5 | 21 |

Between which two consecutive weeks did the average length change by the smallest amount?`,
    options: [`Weeks 1 and 2`, `Weeks 2 and 3`, `Weeks 3 and 4`, `Weeks 4 and 5`],
    correctAnswer: 3,
    explanation: `The changes are +7, +5, +3 and then −2 mm, so the smallest change in size is the 2 mm drop between Weeks 4 and 5. The step from Week 3 to Week 4 is the smallest increase, but 3 mm is still larger than 2 mm, and direction does not matter when only the size of a change is asked. The first two intervals show the largest changes.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `A field biologist recorded air temperature and how many minutes per hour a desert lizard spent basking in the open sun.

| Time | Air temperature (°C) | Basking (minutes per hour) |
|---|---|---|
| 7:00 | 18 | 42 |
| 10:00 | 27 | 25 |
| 13:00 | 35 | 6 |
| 16:00 | 31 | 14 |
| 19:00 | 22 | 33 |

Which statement best describes how basking time was related to air temperature during the day?`,
    options: [
      `Basking time was lower when air temperature was higher`,
      `Basking time rose each time the air temperature rose`,
      `Basking time stayed about the same throughout the day`,
      `Basking time was greatest at the hottest reading, 13:00`,
    ],
    correctAnswer: 0,
    explanation: `The hottest readings (35 °C and 31 °C) go with the least basking (6 and 14 minutes), and the coolest (18 °C and 22 °C) go with the most, so the two moved in opposite directions. Basking fell, not rose, as the morning warmed, and a swing from 42 to 6 minutes is far from steady. At 13:00 basking was at its lowest, not its greatest.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A student timed how long identical tablets took to dissolve in water, one tablet per trial.

| Trial | Dissolving time (s) |
|---|---|
| 1 | 95 |
| 2 | 150 |
| 3 | 118 |
| 4 | 210 |
| 5 | 128 |

How many trials lasted longer than 2 minutes?`,
    options: [`1`, `3`, `4`, `5`],
    correctAnswer: 1,
    explanation: `Two minutes equals 120 seconds, so only the 150 s, 210 s and 128 s trials ran longer, giving 3. Answering 5 treats every number as already larger than 2 and ignores the units. Answering 1 treats a minute as 100 seconds, so only 210 s beats 200 s, and answering 4 wrongly counts the 118 s trial, which is just under 2 minutes.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },

  // ───────────────────────── Part 3 — Cross-section strategies: variables, controls, confounds, hypotheses ─────────────────────────
  {
    question: `To find out whether the color of a container affects how fast the water in it warms, a student filled black, white and silver cans with 300 mL of water at 15 °C, set them in the same sunny spot, and recorded each can's water temperature after 30 minutes. What was the dependent variable?`,
    options: [
      `The color of each can`,
      `The volume of water in each can`,
      `The time the cans spent in the sun`,
      `The final water temperature`,
    ],
    correctAnswer: 3,
    explanation: `The student recorded the water temperature at the end, so that measured result is the dependent variable. Can color was set to three values on purpose, making it the independent variable. The water volume and the 30 minutes in the sun were the same for every can, so they were controlled variables.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `To test whether a plant extract slows mold growth on bread, a researcher sprayed slices with 2 mL of water containing 0%, 1% or 2% extract and stored all slices in identical containers at 22 °C. After 6 days, the researcher measured the moldy area on each slice. What was the main purpose of the slices sprayed with 0% extract?`,
    options: [
      `To show how much mold grows with no extract present`,
      `To make sure the extract spread evenly over each slice`,
      `To raise the number of extract strengths being tested`,
      `To show that mold cannot grow on bread sprayed with water`,
    ],
    correctAnswer: 0,
    explanation: `The 0% slices are the control: they show the baseline amount of mold, so any smaller moldy area on the 1% and 2% slices can be credited to the extract. They contain no extract, so they cannot test how evenly it spreads, and they add a comparison rather than a new strength. Nothing in the setup suggests mold fails to grow on water-sprayed bread; the control exists to measure that growth.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student timed one full swing of a pendulum under several conditions.

| Trial | String length (cm) | Bob mass (g) | Release angle (°) | Swing time (s) |
|---|---|---|---|---|
| 1 | 50 | 100 | 10 | 1.42 |
| 2 | 100 | 100 | 10 | 2.01 |
| 3 | 100 | 200 | 10 | 2.00 |
| 4 | 100 | 200 | 20 | 2.02 |
| 5 | 50 | 200 | 20 | 1.43 |

Which two trials should be compared to determine the effect of the release angle alone on swing time?`,
    options: [`Trials 4 and 5`, `Trials 3 and 4`, `Trials 1 and 5`, `Trials 2 and 4`],
    correctAnswer: 1,
    explanation: `Trials 3 and 4 have the same string length (100 cm) and bob mass (200 g) and differ only in release angle, so they isolate the angle; their swing times (2.00 s and 2.02 s) show it had almost no effect. Trials 4 and 5 also differ in string length. Trials 1 and 5 differ in both mass and angle, and so do Trials 2 and 4, so neither pair can credit a change to the angle alone.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A beekeeper wants to know whether a new hive design increases honey production. Hives of the new design are placed beside a clover field, while hives of the old design are placed beside a parking lot with few flowers. Which change would best allow the beekeeper to credit any difference in honey to the hive design?`,
    options: [
      `Add more new-design hives beside the clover field`,
      `Weigh the old hives' honey twice as often as the new`,
      `Put both kinds of hives in the same location`,
      `Remove the old hives, since they lack the new design`,
    ],
    correctAnswer: 2,
    explanation: `The two groups differ in both hive design and nearby flowers, so location is a confound; placing all the hives in the same spot leaves design as the only difference. Adding more new hives by the clover only repeats the problem. Weighing one group more often does not remove the flower difference, and dropping the old hives leaves nothing to compare the new design against.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student hypothesizes that, between 10 °C and 30 °C, seeds germinate faster as soil temperature increases. Her data:

| Soil temperature (°C) | Days to germinate |
|---|---|
| 10 | 9 |
| 15 | 7 |
| 20 | 5 |
| 25 | 4 |

Which additional result, if accurate, would contradict her hypothesis?`,
    options: [
      `A 12 °C trial that took 8 days to germinate`,
      `A 30 °C trial that took 3 days to germinate`,
      `A 30 °C trial that took 8 days to germinate`,
      `A 22 °C trial that took 4.5 days to germinate`,
    ],
    correctAnswer: 2,
    explanation: `Soil at 30 °C is warmer than at 25 °C, so the hypothesis predicts germination in fewer than 4 days; taking 8 days reverses the pattern. A 3-day result at 30 °C continues the trend. The 12 °C and 22 °C results fall between their neighboring rows, exactly where the hypothesis predicts.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },

  // ───────────────────────── Part 4 — Managing difficult passages: viewpoints, two-theory reading, linked tables ─────────────────────────
  {
    question: `Two geologists discuss a canyon wall made of many thin rock layers.

Geologist 1: The layers formed from mud that settled at the bottom of a lake, one thin layer each year, over about 8,000 years.

Geologist 2: The layers formed from mud that settled at the bottom of a lake during repeated floods, each flood adding several layers within days, over only a few centuries.

Both geologists would most likely agree that the layers:`,
    options: [
      `formed from mud in a lake`,
      `took about 8,000 years to form`,
      `were each laid down over one full year`,
      `formed during a series of floods`,
    ],
    correctAnswer: 0,
    explanation: `Both viewpoints describe mud settling on a lake bottom, so that is their common ground. The 8,000-year time span and one layer per year come only from Geologist 1. The series of floods appears only in Geologist 2's account.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Two scientists explain what triggers a songbird's fall migration.

Scientist 1: Shortening day length is the trigger; temperature has no effect.

Scientist 2: Falling nighttime temperature is the trigger; day length has no effect.

In a lab, Group A birds were kept at a constant 20 °C while daylight was cut from 14 hours to 10 hours; they became restless and faced south. Group B birds were kept at 14 hours of daylight while the temperature fell from 20 °C to 8 °C; they showed no restlessness. These results:`,
    options: [
      `support Scientist 2 and weaken Scientist 1`,
      `weaken both Scientist 1 and Scientist 2`,
      `support Scientist 1 and weaken Scientist 2`,
      `support both Scientist 1 and Scientist 2`,
    ],
    correctAnswer: 2,
    explanation: `Group A showed migration behavior with shorter days and no temperature change, and Group B showed none when only temperature fell, so day length alone produced the response, as Scientist 1 claims. Scientist 2 predicts the opposite outcome in both groups, so the results weaken that view. Because the two scientists make opposite predictions here, the results cannot support or weaken both.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Two scientists explain why many frogs in a pond have recently developed extra hind legs.

Scientist 1: A parasitic flatworm burrows into tadpoles' developing limb buds and disrupts how the legs grow.

Scientist 2: Pesticide runoff from nearby farms interferes with the hormones that guide limb growth.

Which observation would support Scientist 1 but NOT Scientist 2?`,
    options: [
      `Pesticide levels in the pond rose in the years the extra legs appeared`,
      `Tadpoles screened from flatworms in that same polluted water grew normal legs`,
      `Frogs with extra legs also appeared in farm ponds that had no flatworms`,
      `Frogs with extra legs have been found in the pond for two summers`,
    ],
    correctAnswer: 1,
    explanation: `Tadpoles in the same pesticide-carrying water developed normally once flatworms were kept away, which fits Scientist 1 and undercuts the claim that pesticides cause the extra legs. Rising pesticide levels support Scientist 2 instead, and extra legs in ponds without flatworms weaken Scientist 1. The extra legs appearing for two summers is a fact both scientists already accept.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Why did the moa, giant flightless birds of New Zealand, disappear about 600 years ago? One camp has argued that a cooling climate shrank the forests the birds depended on. But moa had survived far colder periods during the last ice age, and their decline lines up closely with the arrival of the first human settlers. Bones from early settlement sites show the birds were hunted heavily, and models suggest that even small numbers of hunters could have wiped out a slow-breeding bird within a few centuries. The hunting explanation is not proven, but it fits the evidence far better.

The author's view of the two explanations for the moa's disappearance is best described as:`,
    options: [
      `both fit the evidence about equally well`,
      `climate change is better supported than hunting`,
      `hunting is the stronger one, though not yet proven`,
      `neither can be tested with current evidence`,
    ],
    correctAnswer: 2,
    explanation: `The author notes that moa survived colder ice-age periods and that their decline matches the arrival of hunters, then says hunting "is not proven, but it fits the evidence far better." That rules out treating the two as equal and reverses any claim that climate is better supported. The author cites bones and models as evidence, so the explanations are not treated as untestable.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `An ecologist studied trout in a deep lake on a summer afternoon.

Table 1: Water temperature at three depths
| Depth (m) | Water temperature (°C) |
|---|---|
| 2 | 19 |
| 6 | 13 |
| 10 | 7 |

Table 2: Water temperature and trout heart rate
| Water temperature (°C) | Heart rate (beats per minute) |
|---|---|
| 6 | 30 |
| 8 | 36 |
| 10 | 42 |
| 12 | 48 |
| 14 | 54 |
| 16 | 60 |

Based on both tables, a trout swimming at a depth of 6 m would most likely have a heart rate of about:`,
    options: [`48 beats per minute`, `51 beats per minute`, `54 beats per minute`, `30 beats per minute`],
    correctAnswer: 1,
    explanation: `Table 1 shows the water at 6 m is 13 °C, and in Table 2, 13 °C lies halfway between 12 °C (48 beats) and 14 °C (54 beats), so the rate is about 51. Choosing 48 or 54 rounds the temperature to one neighbor instead of interpolating. The value 30 comes from using the depth, 6, as if it were a temperature in Table 2.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },

  // ───────────────────────── Part 5 — Score improvement plan: pacing, skip and guess, error log ─────────────────────────
  {
    question: `Suppose a science section gives you 40 minutes for 6 passages. If you want to save 4 minutes at the end to return to marked questions, about how much time should you plan to spend on each passage?`,
    options: [`5 minutes 20 seconds`, `6 minutes`, `6 minutes 40 seconds`, `7 minutes`],
    correctAnswer: 1,
    explanation: `Setting aside 4 minutes leaves 36 minutes, and 36 ÷ 6 = 6 minutes per passage. The 6 minutes 40 seconds budget divides all 40 minutes and leaves no review time. Five minutes 20 seconds subtracts the reserve twice (32 ÷ 6), and 7 minutes would run past the time available.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 5,
  },
  {
    question: `You have 18 minutes left in a section and 21 questions still to answer. About how many seconds can you spend on each remaining question if you want to finish?`,
    options: [`About 43 seconds`, `About 60 seconds`, `About 86 seconds`, `About 51 seconds`],
    correctAnswer: 3,
    explanation: `Eighteen minutes is 1,080 seconds, and 1,080 ÷ 21 ≈ 51 seconds per question. Treating a minute as 100 seconds gives 1,800 ÷ 21 ≈ 86 seconds. Spending a full 60 seconds on each would need 21 minutes, and 43 seconds budgets only about 15 minutes (900 ÷ 21), rushing every question more than needed.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 5,
  },
  {
    question: `A science section allows 40 minutes for 40 questions. After the first 19 questions, you have used 23 minutes. If you keep the same average time per question for the remaining 21 questions, about how many minutes short of finishing will you be?`,
    options: [`About 25 minutes`, `About 17 minutes`, `About 6 minutes`, `About 8 minutes`],
    correctAnswer: 3,
    explanation: `Your pace is 23 ÷ 19 ≈ 1.21 minutes per question, so 21 more questions need about 25.4 minutes, but only 40 − 23 = 17 minutes remain, leaving you about 8 minutes short. The 25-minute figure is the time needed, not the shortfall, and 17 minutes is the time remaining. Six minutes is just the gap between the 23 minutes used and the 17 minutes left, which ignores the pace per question.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 5,
  },
  {
    question: `On the Reading test, you have spent about 90 seconds on an inference question about a natural-science passage and can eliminate only one of the four choices. Six more questions remain on that passage. What is the best move?`,
    options: [
      `Guess from the three choices left, mark it, and move on`,
      `Leave it blank, since wrong answers cost you extra points`,
      `Reread the whole passage until the answer becomes clear`,
      `Skip the passage's last six questions to save some time`,
    ],
    correctAnswer: 0,
    explanation: `The ACT has no penalty for wrong answers, so a guess among the remaining choices can only help, and marking it lets you return with spare time. Leaving it blank earns nothing and rests on the mistaken idea that wrong answers lose points. Rereading the whole passage spends time that six more questions need, and abandoning those questions throws away likely points.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `After a timed Science section, a student sorts her 10 misses: 4 came from reading the wrong column or units, 2 from mixing up the scientists' viewpoints, 2 from running out of time, and 2 from confusing independent and dependent variables. Which focus should come first in her next week of practice?`,
    options: [
      `Writing one-line summaries of each scientist's view`,
      `Strict time caps and checkpoints on every passage`,
      `A figure-first check of headings and units each time`,
      `Memorizing more chemistry and physics facts first`,
    ],
    correctAnswer: 2,
    explanation: `Four of the ten misses came from reading the wrong column or units, the largest category, so a figure-first routine that checks headings and units targets the biggest leak. Viewpoint mix-ups, timing and variable confusion account for only 2 misses each. None of the misses came from missing outside knowledge, so memorizing facts fixes nothing in this log.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `You are about 4 minutes behind pace when you reach a Science passage with a short introduction, one graph showing four labeled curves, and 6 questions. Most of the questions name a specific curve or a range of values on the graph. Which approach will most likely earn the most points in the least time?`,
    options: [
      `Read the full introduction before looking at any question`,
      `Study every curve on the graph before reading the questions`,
      `Answer the questions in reverse order, starting with the last`,
      `Read each question, then check only the graph region it names`,
    ],
    correctAnswer: 3,
    explanation: `Question-first scanning sends you straight to the curve or range each question names, so time goes only to the data that earn points. Reading the whole introduction or studying every curve first spends minutes on details several questions never use. Question order within a passage does not reliably run from easy to hard, so starting with the last question gains nothing.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },

  // ───────────────────────── Part 6 — Problem-solving workshop: predictions, percents, non-linear patterns, traps ─────────────────────────
  {
    question: `A student recorded the height of a burning candle.

| Time (min) | Candle height (cm) |
|---|---|
| 0 | 24.0 |
| 20 | 22.5 |
| 40 | 21.0 |
| 60 | 19.5 |

If the pattern continues, what will the candle's height be at 100 minutes?`,
    options: [`7.5 cm`, `15.0 cm`, `16.5 cm`, `18.0 cm`],
    correctAnswer: 2,
    explanation: `The candle loses 1.5 cm every 20 minutes, so from 60 to 100 minutes (two more steps) it loses 3.0 cm more: 19.5 − 3.0 = 16.5 cm. The value 18.0 cm adds only one step and is the height at 80 minutes, while 15.0 cm adds one step too many. The 7.5 cm figure is the total amount burned by 100 minutes, not the height that remains.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A microbiologist counted the bacterial cells in a culture every 20 minutes.

| Time (min) | Number of cells |
|---|---|
| 0 | 500 |
| 20 | 1,000 |
| 40 | 2,000 |
| 60 | 4,000 |

If the pattern continues, how many cells will the culture contain at 100 minutes?`,
    options: [`8,000`, `16,000`, `6,000`, `32,000`],
    correctAnswer: 1,
    explanation: `The count doubles every 20 minutes, so 80 minutes gives 8,000 and 100 minutes gives 16,000. The value 8,000 is the count one interval too early, and 32,000 doubles one time too many. Getting 6,000 treats the growth as adding a fixed 1,000 cells per step instead of doubling.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A survey counted 160 nesting herons at a lake in 2020 and 200 nesting herons at the same lake in 2024. By what percent did the number of nesting herons increase?`,
    options: [`20%`, `25%`, `40%`, `125%`],
    correctAnswer: 1,
    explanation: `The count rose by 200 − 160 = 40, and percent change divides the change by the starting value: 40 ÷ 160 = 0.25, or 25%. Dividing by the final count gives 40 ÷ 200 = 20%. Forty percent treats the raw change as a percent, and 125% is the final count divided by the initial count, not the increase.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A cart rolled the full length of a 12 m track at several constant speeds.

| Speed (m/s) | Time (s) |
|---|---|
| 1 | 12 |
| 2 | 6 |
| 4 | 3 |
| 6 | 2 |

If the pattern continues, how long would the trip take at 8 m/s?`,
    options: [`1.5 s`, `0.5 s`, `1.0 s`, `2.0 s`],
    correctAnswer: 0,
    explanation: `Doubling the speed from 1 to 2 m/s, and again from 2 to 4 m/s, halved the time each time, so doubling from 4 to 8 m/s halves 3 s to 1.5 s (and 8 × 1.5 = 12 m checks out). Answering 1.0 s continues the 1 s drop from 4 to 6 m/s as if the pattern were linear. Halving twice gives 0.5 s, and 2.0 s assumes the time stops changing after 6 m/s.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Researchers counted nesting songbirds in 15 city parks and found that parks with more native shrubs had more nests. No shrubs were planted or removed during the study. Which change to the study would best allow the researchers to test whether native shrubs cause more nesting?`,
    options: [
      `Add shrubs to some parks, then compare with matched parks`,
      `Survey 30 parks instead of 15, using the same counting method`,
      `Count the nests again in the same 15 parks the next spring`,
      `Measure the average height of the shrubs in each of the parks`,
    ],
    correctAnswer: 0,
    explanation: `The current study only observed existing parks, so it can show that shrubs and nests tend to occur together but not that shrubs cause nesting; changing shrubs on purpose while comparing similar unchanged parks turns it into an experiment. Surveying more parks or recounting the same parks adds observations but still changes nothing. Measuring shrub height adds a variable without testing cause.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A track coach recorded the average distance her runners covered in a 12-minute run during a training season.

| Week | Average distance (m) |
|---|---|
| 0 | 2,400 |
| 4 | 2,650 |
| 8 | 2,800 |
| 12 | 2,880 |

Which conclusion is best supported by the data?`,
    options: [
      `Distance will keep rising by the same amount each month`,
      `Doubling training from 4 to 8 weeks doubled the distance`,
      `Distance stayed about the same throughout the season`,
      `Distance rose all season, but each gain was smaller`,
    ],
    correctAnswer: 3,
    explanation: `The distance rose at every reading, but the gains shrank from 250 to 150 to 80 m, so the improvement slowed. Shrinking gains contradict rising "by the same amount," and predicting beyond Week 12 goes past the data. Going from 2,650 to 2,800 m is nowhere near double, and a 480 m rise over the season is not "about the same."`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },

  // ───────────────────────── Part 7 — Review and applications: mixed natural-science Reading and Science sets ─────────────────────────
  {
    question: `(1) The fur of a three-toed sloth is often tinted green by algae that are found almost nowhere else. (2) For years, biologists assumed the algae were simply taking advantage of a slow-moving host. (3) Recent work points to a more tangled relationship: moths that live in the fur lay eggs in the sloth's dung, and when the moths die, their bodies enrich the fur with nutrients that feed the algae, which the sloth may eat while grooming. (4) Researchers caution that any benefit to the sloth remains a hypothesis, since no one has yet measured how much nourishment the algae provide.

The main purpose of the passage is to:`,
    options: [
      `argue that sloths grow green fur to hide from predators`,
      `describe a possible partnership of sloths, moths, and algae`,
      `explain why the moths living in sloth fur die so quickly`,
      `prove that algae supply most of a sloth's daily food`,
    ],
    correctAnswer: 1,
    explanation: `The passage moves from the green fur to a "tangled relationship" in which moths feed the algae and the sloth may eat them, while noting that the sloth's benefit "remains a hypothesis," so it describes a possible partnership. Hiding from predators is never mentioned. The moths' death is one link in the chain rather than the focus, and the closing caution rules out "prove."`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Glaciers grind the rock beneath them into a powder so fine that it is called glacial flour. Meltwater carries the flour into mountain lakes, where the suspended particles scatter sunlight and give the water a milky turquoise color. As a glacier shrinks, less flour reaches its lake each summer, and the color can begin to fade. In one survey of 40 mountain lakes, turquoise water was found only in lakes fed by active glaciers.

Based on the passage, a turquoise lake whose glacier melted away completely would most likely:`,
    options: [
      `lose much of its milky turquoise coloring`,
      `turn an even deeper shade of turquoise`,
      `receive more glacial flour each summer`,
      `fill with more suspended rock particles`,
    ],
    correctAnswer: 0,
    explanation: `The passage traces the color to glacial flour carried by meltwater and says the color fades as less flour arrives, so with no glacier the flour supply would end and the color would fade. A deeper turquoise reverses that link. More flour and more suspended particles both require an active glacier, which the lake would no longer have.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Some trees appear to warn their neighbors. When caterpillars attack a willow, it releases airborne chemicals, and nearby willows that were never touched soon begin making leaf compounds that caterpillars find distasteful. Early reports of such "talking trees" were met with ridicule, partly because the first studies were small and poorly controlled. Later, more careful experiments reproduced the effect in several species. The metaphor of speech still overstates things, since no tree intends a message, but the chemistry, it turns out, is real.

The author's attitude toward the "talking trees" idea is best described as:`,
    options: [
      `ridiculing it, since the earliest studies were poorly controlled`,
      `fully endorsing the claim that trees deliberately send messages`,
      `unsure, because no experiment has reproduced the effect yet`,
      `accepting the chemical effect while doubting any intent`,
    ],
    correctAnswer: 3,
    explanation: `The author says the metaphor of speech "overstates things" because "no tree intends a message," yet concludes that "the chemistry ... is real," so the author accepts the effect and rejects the idea of intent. Ridicule describes how the early reports were received, not the author's own view. Denying intent rules out full endorsement, and the passage says careful experiments did reproduce the effect.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `A chemist timed how long a reaction took to finish under four conditions.

| Trial | Temperature (°C) | Catalyst (g) | Time to finish (s) |
|---|---|---|---|
| 1 | 25 | 0.5 | 120 |
| 2 | 25 | 1.0 | 80 |
| 3 | 35 | 0.5 | 70 |
| 4 | 35 | 1.0 | 45 |

A student claims that, starting from Trial 1, raising the temperature to 35 °C shortened the reaction time more than doubling the catalyst did. Is the claim supported?`,
    options: [
      `Yes; the temperature change cut 50 s from Trial 1, and doubling catalyst cut 40 s`,
      `Yes; Trial 4, with the higher temperature, was the fastest of all four trials`,
      `No; doubling catalyst cut 40 s from Trial 1, and the temperature change cut 35 s`,
      `No; Trial 2 finished faster than Trial 1, so the catalyst had the larger effect`,
    ],
    correctAnswer: 0,
    explanation: `Changing only temperature (Trial 1 to Trial 3) drops the time from 120 to 70 s, a 50 s cut, while changing only catalyst (Trial 1 to Trial 2) drops it from 120 to 80 s, a 40 s cut, so the claim holds. Trial 4 changes both conditions at once, so its speed cannot credit temperature alone. The 35 s figure comes from Trials 2 and 4, which do not start from Trial 1, and Trial 2 being faster than Trial 1 says nothing about which change mattered more.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Students tested how water depth affects the hatching of pond-snail eggs. Each of four tanks held 250 eggs at 22 °C under the same light, and the students recorded the percent hatched after 10 days.

| Water depth (cm) | Percent hatched |
|---|---|
| 5 | 48 |
| 10 | 64 |
| 20 | 76 |
| 40 | 70 |

How many eggs hatched in the 10 cm tank?`,
    options: [`64`, `90`, `160`, `186`],
    correctAnswer: 2,
    explanation: `Each tank held 250 eggs, and 64% of 250 is 0.64 × 250 = 160. The value 64 reads the percent as a count, and 90 is the number that did not hatch (250 − 160). Subtracting the percent from the total, 250 − 64, gives 186, which mixes a percent with a count.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Students studied duckweed growth in two experiments, counting the new fronds in each jar after 2 weeks.

Experiment 1: Jars kept at 20 °C received 6, 10 or 14 hours of light per day and produced 18, 30 and 37 new fronds.

Experiment 2: Jars received 10 hours of light per day and were kept at 15 °C, 20 °C or 25 °C; they produced 21, 30 and 41 new fronds.

In Experiment 2, which factor was held constant?`,
    options: [
      `The temperature of the jars`,
      `The number of new fronds`,
      `The rate of frond growth`,
      `The hours of light per day`,
    ],
    correctAnswer: 3,
    explanation: `Every jar in Experiment 2 received 10 hours of light per day, so light was held constant. Temperature was the factor deliberately changed in that experiment. The number of new fronds, which shows the rate of growth, was the measured result rather than a condition the students set.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-reading-science-tips-act')
