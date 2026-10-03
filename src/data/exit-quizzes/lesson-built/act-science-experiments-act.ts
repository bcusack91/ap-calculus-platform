/**
 * Exit-quiz pool for the ACT Science Experiments lesson (experimental design,
 * variables and controls, research summaries, conflicting viewpoints,
 * evaluating conclusions, combining experiments and predicting new trials, and
 * a timed research summary passage), written from the 7-part lesson and tagged
 * by exam-yield tier (see ../lesson-built.ts). Every item describes its study
 * and data in the stem, and no item reuses a lesson practice scenario.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────────────── Part 1 — Experimental design ─────────────────────
  {
    question: `During a weather-balloon flight, a meteorologist recorded the air pressure when the balloon reached altitudes of 0, 1,000, 2,000, and 3,000 m. What is the dependent variable in this study?`,
    options: [`Balloon size`, `Flight time`, `Altitude`, `Air pressure`],
    correctAnswer: 3,
    explanation: `The meteorologist recorded air pressure at each chosen altitude, so pressure is the measured outcome and therefore the dependent variable. Altitude is the independent variable, the condition at which each measurement was taken. Balloon size and flight time were not the measured outcomes of this study.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `A student dropped the same steel marble into tubes of cooking oil heated to different temperatures and timed how long the marble took to reach the bottom.

| Trial | Oil temperature (°C) | Tube height (cm) | Fall time (s) |
|---|---|---|---|
| 1 | 10 | 50 | 4.8 |
| 2 | 20 | 50 | 3.1 |
| 3 | 30 | 50 | 2.2 |

Which choice correctly identifies the independent variable (IV), the dependent variable (DV), and a constant in this study?`,
    options: [
      `IV: fall time; DV: oil temperature; constant: tube height`,
      `IV: oil temperature; DV: tube height; constant: fall time`,
      `IV: oil temperature; DV: fall time; constant: tube height`,
      `IV: tube height; DV: fall time; constant: oil temperature`,
    ],
    correctAnswer: 2,
    explanation: `The student set the oil temperatures (10, 20, and 30 °C), so temperature is the IV, and the fall time changed in response, so it is the DV. The tube height stayed at 50 cm in every trial, so it is a constant. Reversing temperature and fall time mixes up what was set with what was measured, and neither tube height nor fall time fits the roles the other choices give them, since the height never changed and the fall time did.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `A biologist placed water fleas in beakers containing 0, 10, 20, or 40 mg/L of caffeine. Every beaker held 100 mL of pond water at 22 °C, and the biologist counted each flea's heartbeats per minute. Which statement correctly describes the design?`,
    options: [
      `The 0 mg/L beaker is the control; water volume and temperature are constants`,
      `The 10 mg/L beaker is the control, since it received the lowest dose of caffeine`,
      `Water volume and temperature form the control group used for comparison`,
      `There is no control group, because every beaker held pond water at 22 °C`,
    ],
    correctAnswer: 0,
    explanation: `The control is the untreated baseline, which is the beaker with no caffeine, while water volume and temperature are variables kept the same in every beaker, so they are constants. The 10 mg/L beaker still received caffeine, so its small dose is a treatment level, not a baseline. Water volume and temperature are variables rather than a group of trials, and holding them the same does not remove the untreated beaker.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `A student filled four identical tanks with 20 L of pond water and added 0, 5, 10, or 20 mg of nitrate fertilizer. All tanks sat under the same lamp at 24 °C. After 10 days, she measured the density of algae in each tank. Which hypothesis was the study designed to test?`,
    options: [
      `Algae grow denser in warmer water`,
      `Algae grow denser under brighter light`,
      `Algae grow denser with added nitrate`,
      `Algae grow denser in larger tanks`,
    ],
    correctAnswer: 2,
    explanation: `The only thing that changed from tank to tank was the amount of nitrate, and the outcome measured was algae density, so the study tests a link between nitrate and algae. Every tank was kept at 24 °C under the same lamp, so temperature and light were constants and the study cannot test them. The tanks were identical and held the same 20 L, so tank size was never varied either.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `In a study of a new allergy tablet, one group of patients took the tablet daily and a second group took an identical-looking tablet with no active ingredient. Why did the researchers give the second group a look-alike tablet instead of nothing at all?`,
    options: [
      `To give the second group a smaller dose of the medicine`,
      `To keep the number of patients in each group the same`,
      `To make the tablet the dependent variable of the study`,
      `To capture improvement from expecting to be treated`,
    ],
    correctAnswer: 3,
    explanation: `A look-alike tablet with no drug is a placebo: patients may feel better simply because they expect to, or because allergies ease on their own, and the placebo group measures that baseline so the real tablet can be compared with it. The placebo contains no medicine, so it is not a smaller dose. Group sizes are set by how many patients are assigned, not by what they swallow, and the tablet is the treatment being tested, which makes it the independent variable rather than the dependent one.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },

  // ───────────────────── Part 2 — Variables & controls ─────────────────────
  {
    question: `A student compared how much water two brands of paper towel absorb. She dipped a Brand A sheet into room-temperature water and a Brand B sheet into ice water, then weighed the water each sheet held. Brand A held more. Why can't she conclude that Brand A is more absorbent?`,
    options: [
      `She weighed the water instead of measuring the towels`,
      `The water temperature changed along with the brand`,
      `The brand of towel was her dependent variable`,
      `The water temperature was held constant in both trials`,
    ],
    correctAnswer: 1,
    explanation: `Water temperature differed between the two trials as well as the brand, so it is a confounding variable: either difference could explain why Brand A held more. Weighing the absorbed water is a sensible way to measure the outcome. The brand was the variable she chose, which makes it the independent variable, and the temperature was not held constant, since one sheet went into ice water.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `In a study of a cough syrup, patients received either the syrup or a look-alike liquid with no medicine. Neither the patients nor the nurses who counted each patient's coughs knew who received which. What is the main purpose of keeping the nurses unaware?`,
    options: [
      `To keep their expectations from shaping the counts`,
      `To make sure each group had the same number of patients`,
      `To give the study a control group to compare the syrup with`,
      `To let the nurses assign patients to the groups by chance`,
    ],
    correctAnswer: 0,
    explanation: `This is a double-blind design: a nurse who knew which patients got the real syrup might, without meaning to, count their coughs differently, so keeping the nurses unaware stops expectations from shaping the results. Blinding has nothing to do with how many patients are in each group. The control group is the patients who took the look-alike liquid, and keeping the nurses unaware does not create any extra comparison group. Random assignment is a separate step that blinding does not perform.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A school tested whether a reading app improves vocabulary scores. Teachers chose which students would use the app, and they mostly chose students who already read the most at home. The app group scored higher. Which change would best fix the main flaw?`,
    options: [
      `Have the app group use the app for longer`,
      `Let students switch groups halfway through`,
      `Assign students to groups at random`,
      `Measure reading time instead of vocabulary`,
    ],
    correctAnswer: 2,
    explanation: `Because the strongest home readers ended up in the app group, the groups differed before the study began; random assignment spreads such students evenly so that the only planned difference is the app. Using the app longer keeps the same unequal groups. Switching groups midway mixes the two conditions, and measuring reading time changes the dependent variable without fixing how the groups were formed.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A student measured the mass of soil samples from four gardens, weighing each sample on a different balance. She later learned that one of the balances read 3 g too high. Which kind of problem does this create?`,
    options: [`Sampling bias`, `Observer bias`, `A missing control`, `Measurement bias`],
    correctAnswer: 3,
    explanation: `An instrument that reads too high, made worse by using a different balance for each sample, is measurement bias; the fix is to calibrate one balance and use it throughout. Sampling bias concerns how the samples were chosen, not how they were weighed. Observer bias comes from a person's judgment, which plays no role in reading a balance, and comparing four gardens does not call for an untreated control group.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A research team reported that a certain strain of yeast doubles in number every 90 minutes at 30 °C. Which action by another team would replicate this finding?`,
    options: [
      `Growing a different yeast strain at 30 °C`,
      `Growing the same strain at 30 °C and timing its doubling`,
      `Growing the same strain at 40 °C instead`,
      `Measuring the same strain's cell size at 30 °C`,
    ],
    correctAnswer: 1,
    explanation: `Replication repeats the same procedure on the same material to see whether the result holds, so the second team should grow this strain at 30 °C and time its doubling. A different strain answers a different question. Changing the temperature to 40 °C alters the procedure, and measuring cell size checks a different property entirely.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 2,
  },
  {
    question: `To test whether a new plant food increases tomato growth, a student gave the plant food to 2 tomato plants on a sunny windowsill and gave none to 2 tomato plants in a shaded hallway. After 4 weeks, the fed plants were taller. Which change would most improve the experiment?`,
    options: [
      `Keep every plant in the same sunny spot and use many more plants in each group`,
      `Add a third group of plants placed in a dark closet with the same plant food`,
      `Measure the number of leaves instead of the height of each plant`,
      `Give the fed plants twice as much food so the gap grows larger`,
    ],
    correctAnswer: 0,
    explanation: `The design has two flaws: light changed along with the plant food (a confound), and 2 plants per group is too few to trust; putting every plant in the same spot and using more plants fixes both. A dark-closet group adds yet another uncontrolled difference. Counting leaves changes the dependent variable without fixing the design, and doubling the food makes the conditions more different instead of making the comparison fair.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 2,
  },

  // ───────────────────── Part 3 — Research summaries ─────────────────────
  {
    question: `In Experiment 1, a student counted the oxygen bubbles released per minute by a pondweed sprig in water containing 0.5% baking soda at 25 °C, with a lamp placed 10, 20, 30, or 40 cm away. Experiment 2 repeated the procedure, except that the lamp was kept at 10 cm and the baking soda concentration was set at 0%, 0.25%, 0.5%, or 1.0%. How did Experiment 2 differ from Experiment 1?`,
    options: [
      `Baking soda was varied while lamp distance was held at 10 cm`,
      `Lamp distance was varied while baking soda was held at 0.5%`,
      `Bubble rate was varied while lamp distance was held at 10 cm`,
      `Both baking soda and lamp distance were varied in each trial`,
    ],
    correctAnswer: 0,
    explanation: `The "except" sentence says Experiment 2 kept the lamp at 10 cm and changed the baking soda concentration, the reverse of Experiment 1. Varying lamp distance at 0.5% baking soda describes Experiment 1 itself. The bubble rate was measured in both experiments, so it was never the variable being set, and neither experiment changed two variables at once.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student counted oxygen bubbles released per minute by a pondweed sprig in three experiments.

Experiment 1 (0.5% baking soda, 25 °C):

| Lamp distance (cm) | Bubbles per minute |
|---|---|
| 10 | 42 |
| 20 | 30 |
| 30 | 18 |

Experiment 2 (lamp at 10 cm, 25 °C):

| Baking soda (%) | Bubbles per minute |
|---|---|
| 0.25 | 25 |
| 0.5 | 42 |
| 1.0 | 44 |

Experiment 3 (lamp at 10 cm, 0.5% baking soda):

| Temperature (°C) | Bubbles per minute |
|---|---|
| 15 | 20 |
| 25 | 42 |
| 35 | 28 |

Of all the conditions tested, which produced the most bubbles per minute?`,
    options: [
      `10 cm, 0.5% baking soda, 25 °C`,
      `10 cm, 0.5% baking soda, 35 °C`,
      `20 cm, 0.5% baking soda, 25 °C`,
      `10 cm, 1.0% baking soda, 25 °C`,
    ],
    correctAnswer: 3,
    explanation: `Scanning all three tables, the largest value is 44 bubbles per minute, from Experiment 2 with 1.0% baking soda, the lamp at 10 cm, and 25 °C. The 10 cm, 0.5%, 25 °C condition gave 42, the best value in Experiments 1 and 3 but not overall. The 35 °C trial gave 28, and moving the lamp to 20 cm gave 30.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student counted oxygen bubbles released per minute by a pondweed sprig.

Experiment 1 (0.5% baking soda, 25 °C): with the lamp at 10, 20, 30, and 40 cm, the sprig released 42, 30, 18, and 9 bubbles per minute.

Experiment 3 (lamp at 10 cm, 0.5% baking soda): at water temperatures of 15, 25, and 35 °C, the sprig released 20, 42, and 28 bubbles per minute.

The student hypothesizes that the bubble rate increases steadily as water temperature rises. Do the results support this hypothesis?`,
    options: [
      `Yes; the rate rose from 20 to 42 between 15 and 25 °C`,
      `Yes; the rate rose as the lamp was moved closer to it`,
      `No; the rate fell from 42 to 9 as the lamp was moved away`,
      `No; the rate fell from 42 to 28 from 25 to 35 °C`,
    ],
    correctAnswer: 3,
    explanation: `Experiment 3 is the one that varies temperature, and the bubble rate dropped after 25 °C, which contradicts a steady increase. The rise from 15 to 25 °C is real but covers only part of the range. The lamp results are true facts from Experiment 1, but that experiment held temperature at 25 °C, so it cannot test a hypothesis about temperature.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student counted oxygen bubbles released per minute by a pondweed sprig. In Experiment 1 (0.5% baking soda, 25 °C), the lamp at 10 cm gave 42 bubbles per minute. In Experiment 2 (lamp at 10 cm, 25 °C), 1.0% baking soda gave 44 bubbles per minute. In Experiment 3 (lamp at 10 cm, 0.5% baking soda), the 25 °C trial gave 42 bubbles per minute. Why is it expected that the Experiment 3 trial at 25 °C matched the Experiment 1 trial at 10 cm?`,
    options: [
      `Both trials used the same lamp distance, baking soda level, and temperature`,
      `Temperature has no effect on how fast the pondweed releases oxygen`,
      `Forty-two bubbles per minute is the most the pondweed can produce`,
      `The lamp distance was varied in Experiment 3 as well as Experiment 1`,
    ],
    correctAnswer: 0,
    explanation: `The two trials share every condition (10 cm, 0.5% baking soda, 25 °C), so they repeat the same setup and should agree; this shared condition is a consistency check that links the experiments. Experiment 3 shows temperature does matter, since the rate ranged from 20 to 42. The 44 bubbles per minute in Experiment 2 show that 42 is not a maximum, and Experiment 3 held the lamp at 10 cm rather than varying it.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 3,
  },
  {
    question: `In Experiment 2 of a pondweed study, the student placed the sprig in water with 0%, 0.25%, 0.5%, and then 1.0% baking soda, counting bubbles each time. Between trials, she rinsed the beaker with distilled water before adding the next solution. What was the most likely purpose of this step?`,
    options: [
      `To wash off algae that grew on the glass during the previous trial`,
      `To clear dust off the glass so the lamp's light reaches the sprig`,
      `To keep leftover solution from altering the next concentration`,
      `To leave a thin film of water that dilutes the next solution`,
    ],
    correctAnswer: 2,
    explanation: `Without rinsing, baking soda left from one trial would mix into the next solution, so the actual concentration would not match the planned one; rinsing keeps each trial's concentration accurate. Algae cannot build up on the glass during trials only minutes long, and dust between back-to-back trials would barely change the light from a lamp held at a fixed distance. Any rinse water left behind would dilute the next solution slightly, which works against the goal of matching the planned concentration rather than serving it.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 3,
  },

  // ───────────────────── Part 4 — Conflicting viewpoints ─────────────────────
  {
    question: `Two scientists explain why the fish population of a lake declined sharply after 2015.

Scientist 1: Rising water temperatures lowered the dissolved oxygen in the lake, and the fish could not survive.

Scientist 2: A predatory fish species introduced to the lake in 2015 ate most of the native fish.

Which observation would weaken Scientist 1's explanation but not Scientist 2's?`,
    options: [
      `The predatory species was found in the lake in 2015`,
      `Water temperature stayed constant while fish declined`,
      `Dissolved oxygen dropped as the water warmed each year`,
      `Fish also declined in a nearby lake with no predators`,
    ],
    correctAnswer: 1,
    explanation: `Scientist 1's explanation requires the water to have warmed, so a constant temperature during the decline undercuts it while leaving Scientist 2's predator explanation untouched. Finding the predator in 2015 supports Scientist 2 without weakening Scientist 1. Falling oxygen in warming water supports Scientist 1, and a decline in a lake without predators weakens Scientist 2 instead.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Two scientists explain why the fish population of a lake declined sharply after 2015.

Scientist 1: Rising water temperatures lowered the dissolved oxygen in the lake, and the fish could not survive.

Scientist 2: A predatory fish species introduced to the lake in 2015 ate most of the native fish.

A later survey found that the water temperature and dissolved oxygen were the same throughout the lake, but native fish declined only in the parts of the lake where the predator lived. How does this finding affect the two explanations?`,
    options: [
      `It supports Scientist 1 and weakens Scientist 2`,
      `It weakens both scientists' explanations equally`,
      `It supports Scientist 2 and weakens Scientist 1`,
      `It supports both scientists' explanations equally`,
    ],
    correctAnswer: 2,
    explanation: `If temperature and oxygen were uniform, Scientist 1's cause cannot explain why fish declined in some areas but not others, while the decline tracks exactly where the predator lived, as Scientist 2 predicts. That pattern favors Scientist 2, the reverse of supporting Scientist 1. Because the finding separates the two explanations, it cannot support or weaken both equally.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Two hypotheses explain leaf size in a certain plant species.

Hypothesis 1: Plants grown in shade develop larger leaves to capture more light.

Hypothesis 2: Leaf size depends only on water availability, not on light.

In a study, plants given equal amounts of water were grown in full sun or in shade. The average leaf area was 20 cm² in full sun and 34 cm² in shade. Which hypothesis do these results support?`,
    options: [`Hypothesis 2 only`, `Hypothesis 1 only`, `Both hypotheses`, `Neither hypothesis`],
    correctAnswer: 1,
    explanation: `With water held equal, the shaded plants grew larger leaves, which is exactly what Hypothesis 1 predicts. Hypothesis 2 says light should not matter when water is the same, so the difference in leaf size contradicts it. Because the results favor one hypothesis and contradict the other, they cannot support both or neither.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Two students explain why a puddle dries faster on a windy day than on a calm day with the same air temperature.

Student 1: Wind sweeps away the water vapor just above the puddle, so more water molecules can leave the surface.

Student 2: Wind rubbing against the puddle warms the water, and warmer water evaporates faster.

With which statement would both students agree?`,
    options: [
      `The puddle dries faster in wind`,
      `Wind raises the temperature of the puddle water`,
      `Wind removes the water vapor above the puddle`,
      `Air temperature is what controls drying speed`,
    ],
    correctAnswer: 0,
    explanation: `Both students start from the same observation, that wind makes the puddle dry faster; they disagree only about why. Warming of the water is Student 2's mechanism, which Student 1 never mentions, and sweeping away water vapor is Student 1's mechanism, which Student 2 does not use. Both students describe days with the same air temperature, so neither claims that air temperature explains the difference.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Two students explain why a puddle dries faster on a windy day than on a calm day with the same air temperature.

Student 1: Wind sweeps away the water vapor just above the puddle, so more water molecules can leave the surface.

Student 2: Wind rubbing against the puddle warms the water, and warmer water evaporates faster.

Thermometers are placed in two identical puddles at the same air temperature, one sheltered from the wind and one exposed to it. Based on Student 2's explanation, which result would be expected?`,
    options: [
      `Both puddles' water stays at exactly the same temperature`,
      `The exposed puddle's water ends up warmer than the sheltered one's`,
      `The sheltered puddle's water is warmer than the exposed one's`,
      `The exposed puddle dries more slowly than the sheltered one`,
    ],
    correctAnswer: 1,
    explanation: `Student 2 says the wind warms the water it blows across, so the puddle exposed to the wind should have the warmer water. Equal water temperatures would fit Student 1, who says nothing about warming, rather than Student 2. A warmer sheltered puddle reverses Student 2's mechanism, and both students agree that the windy puddle dries faster, not more slowly.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Three hypotheses explain why a warbler population in a forest declined sharply over ten years.

Hypothesis 1: A pesticide sprayed on nearby farms thinned the birds' eggshells, so fewer eggs hatched.

Hypothesis 2: Logging removed the old trees the birds need for nesting.

Hypothesis 3: A new virus spread through the warbler population.

Researchers then found that warblers in a distant protected forest, where no pesticide is used and no trees have been logged, declined just as sharply, and many dead birds there carried the virus. Which hypotheses does this finding most weaken?`,
    options: [`Hypothesis 1 only`, `Hypothesis 3 only`, `Hypotheses 1 and 2`, `Hypotheses 2 and 3`],
    correctAnswer: 2,
    explanation: `The protected forest had neither pesticide nor logging, yet the birds declined just as sharply, so the decline does not need either of those causes; that weakens both Hypothesis 1 and Hypothesis 2. Weakening only the pesticide explanation ignores that logging was also absent. The virus found in the dead birds fits Hypothesis 3, so any choice that weakens Hypothesis 3 has the finding backward.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },

  // ───────────────────── Part 5 — Evaluating conclusions ─────────────────────
  {
    question: `A gardener sprayed a new insecticide on 50 rose bushes and left 50 other rose bushes unsprayed. Aphids on the sprayed bushes dropped by 90%; no other plants or insects were studied. Which conclusion is best supported?`,
    options: [
      `The spray reduced aphids on the roses tested`,
      `The spray removes aphids from every kind of plant`,
      `The spray kills every insect that feeds on roses`,
      `The spray has no effect on insects besides aphids`,
    ],
    correctAnswer: 0,
    explanation: `The evidence covers only aphids on roses, so the supported conclusion is limited to the rose bushes that were tested. Extending the result to every kind of plant or every rose-feeding insect overgeneralizes beyond the evidence. Claiming no effect on other insects is also unsupported, because no other insects were studied at all.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `To estimate the average one-way commute time of all workers in a large city, researchers surveyed 300 riders on a single express train that runs in from the city's farthest suburb. What is the main weakness of this study?`,
    options: [
      `300 riders is too many people for a reliable average`,
      `Commute time should be the IV rather than the outcome`,
      `The riders likely commute farther than most city workers`,
      `The survey should have asked about cost as well as time`,
    ],
    correctAnswer: 2,
    explanation: `Riders coming in from the farthest suburb probably travel much longer than the city's workers overall, so the sample is biased and the estimate would run high. A larger sample makes an average more reliable, not less. Commute time is correctly the measured outcome of a survey like this, and asking about cost would not fix a sample that misrepresents the city.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Data from 40 towns show that towns with more fire trucks also have more fires each year. A council member concludes that fire trucks cause fires. Which alternative explanation best accounts for the data?`,
    options: [
      `Fire trucks are usually sent out to fires within minutes`,
      `Larger towns have both more buildings to burn and more trucks`,
      `Fires are recorded more carefully than truck purchases`,
      `Some towns share their fire trucks with neighboring towns`,
    ],
    correctAnswer: 1,
    explanation: `Town size is a third factor: a larger town has more buildings that can catch fire and also buys more trucks, so the two rise together without one causing the other. How quickly trucks respond does not explain why towns with more trucks have more fires. Record-keeping differences do not create a shared rise, and sharing trucks between towns would blur the pattern rather than explain it.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `A microbiologist grew one bacterial strain in broth at five pH levels for 24 hours.

| pH | Cells (millions per mL) |
|---|---|
| 4 | 12 |
| 5 | 30 |
| 6 | 55 |
| 7 | 48 |
| 8 | 20 |

A student concludes that growth increases as pH increases from 4 to 8. Is this conclusion supported?`,
    options: [
      `Yes; growth rose from 12 to 55 between pH 4 and pH 6`,
      `Yes; growth at pH 8 was greater than growth at pH 4`,
      `No; growth fell from 55 to 20 between pH 6 and pH 8`,
      `No; growth was lowest of all at pH 4, the most acidic`,
    ],
    correctAnswer: 2,
    explanation: `The cell count peaked at pH 6 and then dropped to 48 and 20, so growth did not increase across the whole range. The rise from pH 4 to pH 6 is real but covers only part of the data, and comparing only the two ends hides the drop in between. The lowest count at pH 4 is a true fact, but it fits a rising trend rather than refuting one, so it gives the wrong reason for rejecting the claim.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `A student grew pea plants in one greenhouse kept at 22 °C, giving them 8, 12, or 16 hours of lamp light per day, and found that the plants given more hours of light grew taller. Do the results show how temperature affects pea plant growth?`,
    options: [
      `Yes, because every plant was kept at 22 °C`,
      `No, because temperature was not varied`,
      `Yes, because plant height differed by group`,
      `No, because the plants grew in a greenhouse`,
    ],
    correctAnswer: 1,
    explanation: `Every plant grew at 22 °C, so temperature was a constant, and a study cannot show the effect of a variable it never changed. Keeping all plants at one temperature is exactly why temperature cannot be evaluated. Height differed among the groups because the hours of light changed, not the temperature, and growing plants in a greenhouse is not itself what prevents the conclusion.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `A student hung loads from a spring and measured its stretch: 1 N stretched it 2.0 cm, 2 N stretched it 4.0 cm, and 3 N stretched it 6.0 cm. She concluded that a 20 N load is certain to stretch the spring exactly 40 cm. Which evaluation of this conclusion is best?`,
    options: [
      `It is supported, because the stretch doubled when the load doubled`,
      `It overreaches, because no load above 3 N was tested`,
      `It contradicts the data, because the stretch grew by less each time`,
      `It is supported, because 20 N lies between two tested loads`,
    ],
    correctAnswer: 1,
    explanation: `The steady 2 cm per newton pattern holds only from 1 to 3 N, and stating an exact, certain value at 20 N goes far beyond the tested range; the spring could bend permanently or stop stretching evenly. The doubling is real within the data, but it cannot make an untested value certain. The stretch grew by the same 2.0 cm each time, not by less, and 20 N lies outside the tested loads rather than between two of them.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 5,
  },

  // ───────────── Part 6 — Combining experiments & predicting new trials ─────────────
  {
    question: `Students wrapped identical jars of 80 °C water in foam of different thicknesses and timed how long each jar took to cool to 40 °C.

| Foam thickness (cm) | Cooling time (min) |
|---|---|
| 1 | 20 |
| 2 | 32 |
| 3 | 44 |
| 4 | 56 |

If a jar wrapped in 2.5 cm of foam had been tested, its cooling time would most likely have been closest to:`,
    options: [`26 min`, `32 min`, `38 min`, `50 min`],
    correctAnswer: 2,
    explanation: `A thickness of 2.5 cm lies halfway between 2 cm (32 min) and 3 cm (44 min), and the time rises a steady 12 min per centimeter, so about 38 min is expected. A time of 26 min fits a thickness between 1 and 2 cm, and 32 min is the result for 2 cm itself. A time of 50 min fits a thickness between 3 and 4 cm.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Students wrapped identical jars of 80 °C water in foam of different thicknesses and timed how long each jar took to cool to 40 °C.

| Foam thickness (cm) | Cooling time (min) |
|---|---|
| 1 | 20 |
| 2 | 32 |
| 3 | 44 |
| 4 | 56 |

If the students had also tested a jar wrapped in 6 cm of foam, its cooling time would most likely have been:`,
    options: [`less than 20 min`, `between 32 and 44 min`, `between 44 and 56 min`, `greater than 56 min`],
    correctAnswer: 3,
    explanation: `Cooling time rose steadily with foam thickness, reaching 56 min at 4 cm, so a thicker 6 cm wrap should take longer than 56 min (about 80 min if the pattern continues). Less than 20 min is shorter than even the thinnest foam produced. Times between 32 and 44 min fit thicknesses from 2 to 3 cm, and times between 44 and 56 min fit thicknesses from 3 to 4 cm, all thinner than 6 cm.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Students measured how fast water evaporated from dishes under a fan.

Experiment 1 (fan at speed 1):

| Dish area (cm²) | Evaporation (g per hour) |
|---|---|
| 10 | 2 |
| 20 | 4 |
| 40 | 8 |

Experiment 2 (dish area 10 cm²):

| Fan speed | Evaporation (g per hour) |
|---|---|
| 0 | 1 |
| 1 | 2 |
| 2 | 3 |
| 3 | 4 |

Assume that at every fan speed, evaporation is proportional to dish area. Based on both experiments, a 40 cm² dish with the fan at speed 3 would most likely lose about how much water per hour?`,
    options: [`4 g`, `8 g`, `12 g`, `16 g`],
    correctAnswer: 3,
    explanation: `The shared condition is a 10 cm² dish at speed 1 (2 g per hour). Experiment 2 shows that at speed 3 the 10 cm² dish loses 4 g per hour, and because evaporation is proportional to dish area at every fan speed, a 40 cm² dish (4 times the area) loses 4 × 4 = 16 g per hour. A value of 4 g ignores the larger dish, and 8 g ignores the faster fan. A value of 12 g adds the 10 cm² dish's speed-3 rate to the 40 cm² dish's speed-1 rate instead of scaling the speed-3 rate by the area.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Students measured evaporation in grams per hour from dishes of water under a fan. Experiment 1 kept the fan at speed 1 and used dishes of 10, 20, and 40 cm². Experiment 2 used a 10 cm² dish at fan speeds 0, 1, 2, and 3. The students now want to test whether dissolving salt in the water changes the evaporation rate, in a way that can be compared with their earlier results. Which new experiment would best do this?`,
    options: [
      `Fresh water and salt water, both in 10 cm² dishes at fan speed 1, measuring grams lost per hour`,
      `Salt water only, in 10, 20, and 40 cm² dishes at fan speed 1, measuring grams lost per hour`,
      `Salt water in a 10 cm² dish at speed 2 and fresh water at speed 1, measuring grams lost per hour`,
      `Fresh water and salt water, both in 10 cm² dishes at fan speed 1, measuring water temperature`,
    ],
    correctAnswer: 0,
    explanation: `Comparing fresh and salt water while holding the dish at 10 cm² and the fan at speed 1, the shared condition of the earlier experiments, changes only the salt and measures the same outcome as before. Testing salt water alone at several dish sizes never compares it with fresh water. Running the two waters at different fan speeds adds a confound, and measuring temperature switches the dependent variable, so the results cannot be compared with the earlier evaporation rates.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A student claims that adding salt to ice makes the ice melt faster. Each trial timed how long 50 g of ice took to melt completely in the same room. Which set of results would best support the claim?`,
    options: [
      `0 g salt: 30 min; 5 g: 30 min; 10 g: 30 min`,
      `0 g salt: 30 min; 5 g: 36 min; 10 g: 43 min`,
      `0 g salt: 30 min; 5 g: 22 min; 10 g: 15 min`,
      `0 g salt: 30 min; 5 g: 22 min; 10 g: 27 min`,
    ],
    correctAnswer: 2,
    explanation: `Melting faster means taking less time, so the claim predicts that the melting time drops each time more salt is added, and only the set falling from 30 to 22 to 15 min shows that. An unchanged time shows no effect, and rising times mean slower melting, the opposite of the claim. A drop followed by a rise at 10 g does not support a consistent effect of adding salt.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Study A found that a calcium supplement increased bone density in young rats by 15% over 8 weeks. Study B gave the same daily dose of the supplement for 8 weeks and found no increase. Which difference between the studies would best explain the conflicting results?`,
    options: [
      `Study B gave the daily dose in the morning instead of at night`,
      `Study B's rats were housed two to a cage rather than alone`,
      `Study B scanned bone density with a newer model of scanner`,
      `Study B's rats were already fed a diet very rich in calcium`,
    ],
    correctAnswer: 3,
    explanation: `If Study B's rats already got plenty of calcium from their food, extra calcium would have little left to add, which explains why the supplement showed no effect there. Giving the same daily dose at a different time of day would not erase a 15% gain built up over 8 weeks. Sharing a cage does not change how much calcium each rat absorbs, and a newer scanner measures both of Study B's groups the same way, so it could not hide a real difference between them.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 6,
  },

  // ───────────── Part 7 — Timed research summary passage ─────────────
  {
    question: `Steel wool gains mass as it rusts. In every trial, 2.0 g of steel wool was sealed in a jar with a paper towel, and the mass it gained after 5 days was measured. Each condition was tested in 3 jars, and the mean is reported.

Experiment 1: The towel was moistened with salt water of different concentrations, and the jars were kept at 20 °C.

| Salt (%) | Mean mass gained (mg) |
|---|---|
| 0 | 40 |
| 1 | 65 |
| 2 | 90 |
| 3 | 110 |
| 4 | 130 |

Experiment 2: The procedure of Experiment 1 was repeated, except that the salt concentration was kept at 3% and the temperature was varied.

| Temperature (°C) | Mean mass gained (mg) |
|---|---|
| 10 | 60 |
| 20 | 110 |
| 30 | 175 |
| 40 | 240 |

Which variable was held constant in Experiment 2 but varied in Experiment 1?`,
    options: [`The salt level`, `The temperature`, `The towel moisture`, `The steel wool mass`],
    correctAnswer: 0,
    explanation: `The "except" sentence says Experiment 2 kept the salt concentration at 3%, while Experiment 1 varied it from 0% to 4%. Temperature is the reverse: held at 20 °C in Experiment 1 and varied in Experiment 2. The towel was moistened in both experiments, and every jar in both held 2.0 g of steel wool.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Steel wool gains mass as it rusts. In every trial, 2.0 g of steel wool was sealed in a jar with a paper towel, and the mass it gained after 5 days was measured. Each condition was tested in 3 jars.

Experiment 1 (towel moistened with salt water, 20 °C): 0% salt, 40 mg; 1%, 65 mg; 2%, 90 mg; 3%, 110 mg; 4%, 130 mg.

Experiment 3: Jars were kept at 20 °C. In half of the jars the towel was moistened with 3% salt water; in the rest the towel was dry.

| Towel | Jar 1 (mg) | Jar 2 (mg) | Jar 3 (mg) | Mean (mg) |
|---|---|---|---|---|
| Moist | 108 | 112 | 110 | 110 |
| Dry | 6 | 4 | 5 | 5 |

What was the main purpose of the dry-towel jars in Experiment 3?`,
    options: [
      `To keep the temperature of the moist jars at 20 °C`,
      `To show how much rust forms when no moisture is present`,
      `To raise the salt concentration in the moist jars`,
      `To double the number of moist jars in the study`,
    ],
    correctAnswer: 1,
    explanation: `The dry jars are the baseline for Experiment 3: they show how much mass the steel wool gains without moisture, so the moist jars' 110 mg can be compared with only 5 mg. The temperature of every jar was set by the setup, not by the dry jars. The dry jars contained no salt water, so they could not change the moist jars' concentration, and they are a separate condition rather than extra copies of the moist jars.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Steel wool gains mass as it rusts. In every trial, 2.0 g of steel wool was sealed in a jar with a paper towel, and the mass it gained after 5 days was measured. Each condition was tested in 3 jars, and the mean is reported.

Experiment 1 (towel moistened with salt water, 20 °C): 0% salt, 40 mg; 1%, 65 mg; 2%, 90 mg; 3%, 110 mg; 4%, 130 mg.

Experiment 2 (towel moistened with 3% salt water):

| Temperature (°C) | Mean mass gained (mg) |
|---|---|
| 10 | 60 |
| 20 | 110 |
| 30 | 175 |
| 40 | 240 |

If jars at 3% salt and 25 °C had been tested in Experiment 2, the mean mass gained would most likely have been closest to:`,
    options: [`110 mg`, `140 mg`, `175 mg`, `205 mg`],
    correctAnswer: 1,
    explanation: `A temperature of 25 °C lies halfway between 20 °C (110 mg) and 30 °C (175 mg), so the expected value is about 142 mg, closest to 140 mg. A value of 110 mg is the result at 20 °C, and 175 mg is the result at 30 °C, both of which are neighbors rather than the value between them. A value of 205 mg would fit a temperature between 30 and 40 °C.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Steel wool gains mass as it rusts. In every trial, 2.0 g of steel wool was sealed in a jar with a paper towel, and the mass it gained after 5 days was measured. Each condition was tested in 3 jars, and the mean is reported.

Experiment 1 (towel moistened with salt water, 20 °C): 0% salt, 40 mg; 1%, 65 mg; 2%, 90 mg; 3%, 110 mg; 4%, 130 mg.

Experiment 2 (towel moistened with 3% salt water): 10 °C, 60 mg; 20 °C, 110 mg; 30 °C, 175 mg; 40 °C, 240 mg.

Experiment 3 (20 °C): towel moistened with 3% salt water, 110 mg; dry towel, 5 mg.

A student concludes that the mass gained depends only on temperature. Is this conclusion supported?`,
    options: [
      `Yes; mass gained rose with each 10 °C increase`,
      `Yes; the most mass was gained at 40 °C`,
      `No; mass gained fell as temperature rose`,
      `No; salt level and moisture also changed the mass`,
    ],
    correctAnswer: 3,
    explanation: `Experiments 1 and 3 held the temperature at 20 °C, yet the mass gained still changed with the salt level and with moisture, so temperature is not the only factor. The rise with each 10 °C step and the maximum at 40 °C are true results, but neither shows that temperature is the sole cause. Mass gained rose, rather than fell, as temperature increased.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `Steel wool gains mass as it rusts. In every trial, 2.0 g of steel wool was sealed in a jar with a paper towel, and the mass it gained after 5 days was measured. Each condition was tested in 3 jars, and the mean is reported.

Experiment 1 (towel moistened with salt water, 20 °C): 0% salt, 40 mg; 1%, 65 mg; 2%, 90 mg; 3%, 110 mg; 4%, 130 mg.

Experiment 2 (towel moistened with 3% salt water): 10 °C, 60 mg; 20 °C, 110 mg; 30 °C, 175 mg; 40 °C, 240 mg.

Based on Experiments 1 and 2, jars with 4% salt kept at 30 °C would most likely gain a mean mass of:`,
    options: [`less than 110 mg`, `between 110 and 130 mg`, `between 130 and 175 mg`, `greater than 175 mg`],
    correctAnswer: 3,
    explanation: `At 3% salt, raising the temperature from 20 to 30 °C raised the mass gained to 175 mg, and Experiment 1 shows that more salt means more rust, so 4% salt at 30 °C should exceed 175 mg. Less than 110 mg is below what 3% salt at only 20 °C produced. Values between 110 and 130 mg match 3% or 4% salt at 20 °C, ignoring the warmer temperature, and values between 130 and 175 mg would mean the extra salt lowered the 30 °C result.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Steel wool gains mass as it rusts. In Experiment 3, 2.0 g of steel wool was sealed in each of 6 jars at 20 °C for 5 days. In 3 jars the paper towel was moistened with 3% salt water; in the other 3 it was dry. The mass each sample gained was measured.

| Towel | Jar 1 (mg) | Jar 2 (mg) | Jar 3 (mg) | Mean (mg) |
|---|---|---|---|---|
| Moist | 108 | 112 | 110 | 110 |
| Dry | 6 | 4 | 5 | 5 |

Which statement about the reliability of these results is best supported?`,
    options: [
      `The jars within each condition gave close values, so the means are reliable`,
      `The moist and dry means differ widely, so the jars are unreliable`,
      `Each condition used only 3 jars, so neither mean can be trusted at all`,
      `The dry jars gained some mass, so the measurements must be wrong`,
    ],
    correctAnswer: 0,
    explanation: `The three moist jars agree within 4 mg and the three dry jars within 2 mg, so repeating each condition gave consistent values and the means are trustworthy. A large gap between conditions is the effect being measured, not a sign of unreliable jars. Three jars per condition is more reliable than one, especially when they agree this closely, and a small gain in the dry jars is a plausible result rather than evidence of a measuring error.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-science-experiments-act')
