/**
 * Exit-quiz pool for the ACT Science Reasoning lesson, aligned to the 7-part
 * lesson: 1 Scientific Method, 2 Hypothesis Testing, 3 Drawing Conclusions,
 * 4 Applying Concepts, 5 Science Passage Strategy, 6 Conflicting Viewpoints,
 * 7 Integrated Practice (mixed passage set: design, random assignment, repeated
 * trials, multi-experiment and multi-table synthesis, passage formats).
 * Yield-tagged; scenarios are original and do not reuse the lesson's examples.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────────────────── Part 1 — Scientific Method ─────────────────────────
  {
    question: `Which statement best describes the difference between a scientific law and a scientific theory?`,
    options: [
      `A theory describes a pattern; a law explains the reason it happens`,
      `A law describes a consistent pattern; a theory explains why it occurs`,
      `A law is a theory that has finally been proven to be completely true`,
      `A theory is an untested guess; a law is a guess that has been tested`,
    ],
    correctAnswer: 1,
    explanation: `A law describes a consistent pattern in nature, while a theory is a well-supported explanation of why things happen. Swapping those roles reverses the definitions. A theory does not "graduate" into a law, and a theory is not an untested guess; it is backed by a large body of evidence.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 1,
  },
  {
    question: `A research team found that a new fertilizer increased tomato yield in greenhouses kept at 20°C. Their report ends by asking whether the fertilizer would have the same effect at 30°C, and they plan a follow-up study. This best illustrates that the scientific method:`,
    options: [
      `ends once the original hypothesis has been fully proven`,
      `requires every experiment to test two variables at once`,
      `turns a supported conclusion into a law after one study`,
      `is iterative, since conclusions lead to new questions`,
    ],
    correctAnswer: 3,
    explanation: `The team's conclusion raised a new question that leads to another experiment, which is what makes the method iterative. Supported hypotheses are never fully proven, and one study does not create a law. The follow-up changes temperature as a new condition; nothing requires testing two variables at once.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 1,
  },
  {
    question: `A student's first draft of a hypothesis reads, "Music is good for studying." Which revision turns it into a testable, falsifiable hypothesis?`,
    options: [
      `Students who study with music will feel happier while studying than those who study in silence`,
      `Studying with music is the most pleasant way for students to learn new material for a quiz`,
      `Students who study with music will score higher on a quiz than those who study in silence`,
      `Some students who study with music may or may not score higher on a quiz than others do`,
    ],
    correctAnswer: 2,
    explanation: `Quiz scores can be measured, and the silent group scoring as high or higher would prove the claim wrong, so that revision is testable and falsifiable. Saying some students "may or may not" score higher fits every possible result, so it can never be shown false. "Happier" and "most pleasant" are vague words with no measurable meaning, so those claims cannot be tested even though they mention studying or a quiz.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `A student's report on earthworms includes the four statements below. Which statement reports data?`,
    options: [
      `"Worms went to the damp side in 9 of 10 trials."`,
      `"After the rain, worms covered the sidewalk outside our school."`,
      `"If one side of a tray is damp, worms will crawl toward that side."`,
      `"In this test, earthworms preferred damp soil to dry soil."`,
    ],
    correctAnswer: 0,
    explanation: `A count of how many trials ended with worms on the damp side is a measured result, which is data. The remark about worms on the sidewalk is an observation made before any test, and the "if... then" sentence is the hypothesis. The statement that worms preferred damp soil interprets the counts, so it is the conclusion.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `Students placed identical ice cubes on plates made of copper, glass, wood, and plastic in the same room and recorded how many minutes each cube took to melt completely. What was the independent variable?`,
    options: [
      `The material each plate was made of`,
      `The time each cube took to melt`,
      `The size of the ice cubes used`,
      `The temperature of the room`,
    ],
    correctAnswer: 0,
    explanation: `The students deliberately changed the plate material, so it is the independent variable. The melting time is what they measured, which makes it the dependent variable. The cubes were identical and the room was the same for every plate, so cube size and room temperature were controlled variables.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `To test whether a new plant food speeds the growth of basil, a gardener grew four groups of basil in the same soil and light. Three groups received 5, 10, or 15 mL of the plant food each week, and one group received only plain water. What is the main purpose of the plain-water group?`,
    options: [
      `It adds a fourth dose of plant food to the test`,
      `It keeps the soil the same in every group of basil`,
      `It shows which dose of plant food works the best`,
      `It is a baseline for growth without the food`,
    ],
    correctAnswer: 3,
    explanation: `The plain-water group gets no plant food, so it is the control group: it shows how basil grows without the treatment, and the fed groups are compared with it. It receives no dose at all, so it is not a fourth dose. The soil was kept the same by giving every group identical soil, and comparing the three fed groups, not the water group, shows which dose works best.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },

  // ───────────────────────── Part 2 — Hypothesis Testing ─────────────────────────
  {
    question: `A student hypothesized, "The mass of a pendulum's bob has no effect on the time it takes to complete one swing." She kept the string length at 1.0 m and recorded the results below.

| Bob mass (g) | Time per swing (s) |
|---|---|
| 50 | 2.01 |
| 100 | 2.00 |
| 200 | 2.01 |
| 400 | 2.00 |

Do the results support her hypothesis?`,
    options: [
      `No, because the swing time did not rise as the bob mass increased`,
      `Yes, because the swing time stayed about the same at every mass`,
      `No, because the swing times were not exactly equal in every trial`,
      `Yes, because the swing time rose steadily as the mass increased`,
    ],
    correctAnswer: 1,
    explanation: `A "no effect" hypothesis predicts that the time stays about the same as mass changes, and the times stayed within 0.01 s of 2.00 s while the mass grew eightfold. A time that did not rise is exactly what the hypothesis predicts, so treating that as a failure misreads the claim. Differences of 0.01 s are ordinary measurement variation, and the times did not rise steadily.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `After 15 trials, every one of which agreed with her prediction, a student writes, "My results prove that adding baking soda makes bread dough rise higher." Which revision of her sentence is most scientifically accurate?`,
    options: [
      `"My results prove a new law: baking soda always makes dough rise."`,
      `"My results support the idea that baking soda makes dough rise higher."`,
      `"My results prove that baking soda makes dough rise at any temperature."`,
      `"My results mean the idea needs no further testing, since all agreed."`,
    ],
    correctAnswer: 1,
    explanation: `Agreeing data support a hypothesis, but a later test could still contradict it, so "support" is the accurate word. Fifteen trials do not create a law or show what happens at temperatures that were never tested. A supported idea always remains open to further testing.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A chemist hypothesized that Reaction T runs faster when more of Catalyst M is added. She timed how long each mixture took to turn cloudy, which marks the end of the reaction.

| Catalyst M (g) | Time to turn cloudy (s) |
|---|---|
| 0.5 | 38 |
| 1.0 | 52 |
| 2.0 | 75 |

What is the best response to these results?`,
    options: [
      `Accept the hypothesis, since more catalyst gave the larger number of seconds`,
      `Accept the hypothesis, since all three mixtures did eventually turn cloudy`,
      `Discard the results, since they disagree with the chemist's prediction`,
      `Revise or reject it, since more catalyst made the reaction take longer`,
    ],
    correctAnswer: 3,
    explanation: `A longer time to turn cloudy means a slower reaction, so adding more catalyst slowed Reaction T, the opposite of the prediction; the hypothesis must be revised or rejected. Reading the larger number of seconds as "faster" reverses the measure. Every mixture reacting says nothing about speed, and data are never discarded just because they contradict a prediction.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `Researchers compared two fertilizers on 4 tomato plants each. The Fertilizer A plants produced 2.1, 3.6, 2.4, and 3.3 kg of fruit (mean 2.85 kg), and the Fertilizer B plants produced 2.6, 3.1, 3.5, and 2.4 kg (mean 2.9 kg). Which change to the study would make its comparison of the two fertilizers most convincing?`,
    options: [
      `Testing many more plants with each fertilizer and averaging the results`,
      `Reporting each group's mean to three decimal places instead of two`,
      `Reweighing the fruit from only the largest plant in each group`,
      `Recording the mass of fruit in grams rather than in kilograms`,
    ],
    correctAnswer: 0,
    explanation: `The means differ by only 0.05 kg while plants within each group differ by up to 1.5 kg, so with four plants a group the gap could be chance; many more plants per group would reduce the effect of that variation. Extra decimal places or a change of units leaves the spread exactly as large. Looking at only the largest plant in each group ignores the variation entirely.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A student hypothesized that the height a ball bounces depends only on the height from which it is dropped. Her results are shown below.

| Trial | Drop height (cm) | Ball | Bounce height (cm) |
|---|---|---|---|
| 1 | 100 | Rubber | 72 |
| 2 | 150 | Rubber | 108 |
| 3 | 150 | Tennis | 81 |
| 4 | 200 | Tennis | 110 |

Which two trials, taken together, contradict the hypothesis?`,
    options: [`Trials 2 and 3`, `Trials 1 and 2`, `Trials 3 and 4`, `Trials 1 and 4`],
    correctAnswer: 0,
    explanation: `Trials 2 and 3 used the same 150 cm drop height but gave different bounce heights, so something besides drop height (the type of ball) matters, which breaks the word "only." Each of the other pairs compares different drop heights that gave different bounces, which is consistent with drop height mattering, as the hypothesis already claims.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A student hypothesizes, "As the salt content of soil increases, the height of bean plants decreases." Which finding would neither support nor weaken this hypothesis?`,
    options: [
      `Beans in saltier soil grew shorter than beans in less salty soil`,
      `Beans in saltier soil grew taller than beans in less salty soil`,
      `Beans in sandy soil grew more leaves than beans in clay soil`,
      `Beans in the saltiest soil were the shortest of all the beans`,
    ],
    correctAnswer: 2,
    explanation: `The hypothesis is about salt and plant height, so a finding about soil texture and leaf number does not test it either way. Shorter beans in saltier soil, including the saltiest soil producing the shortest beans, is the predicted pattern and supports the hypothesis. Taller beans in saltier soil is the opposite pattern and weakens it.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },

  // ───────────────────────── Part 3 — Drawing Conclusions ─────────────────────────
  {
    question: `A survey of 500 dog owners found that dogs taken on more walks per week had fewer joint problems. A student concludes that walking prevents joint problems in dogs. Which statement, if true, offers an alternative explanation for the survey's finding?`,
    options: [
      `Dogs that walk more often show fewer joint problems in the survey`,
      `Walking strengthens the muscles that support a dog's joints`,
      `Dogs with healthy joints are better able to go on more walks`,
      `Owners reported walks per week rather than walks per day`,
    ],
    correctAnswer: 2,
    explanation: `If healthy joints let dogs walk more, the cause runs backward, and walking need not prevent anything; a survey cannot rule this out. Restating that walking and joint health go together repeats the finding rather than explaining it another way. Strengthened muscles is a mechanism for the student's own conclusion, and the time unit for counting walks has no bearing on cause.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student tested two brands of AA battery. She put Brand X batteries in a small flashlight and Brand Y batteries in a large camping lantern, then recorded how many hours each device stayed lit. Brand X lasted longer. Which change would best allow her to conclude which brand lasts longer?`,
    options: [
      `Test both brands in identical devices of one model`,
      `Test both brands again in the same two devices, for longer`,
      `Record how long each device stayed lit in minutes, not hours`,
      `Add a third brand and test it in a mid-sized flashlight`,
    ],
    correctAnswer: 0,
    explanation: `Brand and device changed together, so the lantern's greater power draw could explain the result; putting both brands in identical devices leaves brand as the only difference. Repeating the test in the same two devices keeps the device confounded with brand. Changing the time unit does nothing to the design, and adding a third brand in yet another device adds a new confound.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Researchers measured the chirp rate of one cricket species at four air temperatures.

| Air temperature (°C) | 15 | 20 | 25 | 30 |
|---|---|---|---|---|
| Chirps per minute | 62 | 95 | 128 | 161 |

Which conclusion stays within the scope of this study?`,
    options: [
      `All cricket species chirp faster as the air temperature rises from 15°C to 30°C`,
      `For this species, chirp rate will keep rising as the air warms above 30°C`,
      `For this species, chirp rate fell as air temperature rose from 15°C to 30°C`,
      `For this species, chirp rate rose as air temperature rose from 15°C to 30°C`,
    ],
    correctAnswer: 3,
    explanation: `The table shows chirp rate climbing from 62 to 161 per minute across the tested range for this one species, so that conclusion stays inside the data. Only one species was studied, so a claim about all crickets overreaches even within the tested temperatures, and nothing above 30°C was measured, so predicting the rise continues there goes beyond the data. Saying chirp rate fell reverses the trend.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Students added different masses of fertilizer to identical pots of wheat and measured the grain harvested from each pot.

| Fertilizer (g) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| Grain harvested (g) | 18 | 31 | 40 | 41 | 41 |

Which statement best describes the relationship shown?`,
    options: [
      `Grain harvested rose and then leveled off as fertilizer increased`,
      `Grain harvested rose steadily as the fertilizer increased`,
      `Grain harvested rose and then fell as the fertilizer increased`,
      `Grain harvested showed no consistent trend with fertilizer`,
    ],
    correctAnswer: 0,
    explanation: `The harvest rose from 18 g to 40 g by 20 g of fertilizer and then stayed at 41 g, so it increased and then leveled off. Calling it a steady rise ignores that the last steps add almost nothing, and the harvest never falls. The pattern is clear and consistent, so "no consistent trend" does not fit.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `A scientist recorded how many days the eggs of one fly species took to develop into adults at different temperatures.

| Temperature (°C) | 15 | 20 | 25 | 30 | 35 |
|---|---|---|---|---|---|
| Development time (days) | 21 | 14 | 9 | 11 | 20 |

According to the table, as temperature increased from 15°C to 35°C, development time:`,
    options: [
      `decreased, then increased`,
      `increased, then decreased`,
      `stayed about the same`,
      `decreased only`,
    ],
    correctAnswer: 0,
    explanation: `Development time fell from 21 days to a low of 9 days at 25°C and then rose to 20 days at 35°C, so it decreased and then increased. The endpoints, 21 and 20 days, are nearly equal, which is why reading only the ends wrongly suggests no change. "Decreased only" ignores the rise after 25°C, and increasing first reverses the order.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },

  // ───────────────────────── Part 4 — Applying Concepts ─────────────────────────
  {
    question: `The table lists the speed of sound in dry air at several temperatures.

| Air temperature (°C) | Speed of sound (m/s) |
|---|---|
| 0 | 331 |
| 10 | 337 |
| 20 | 343 |
| 30 | 349 |

Based on the table, the speed of sound at 25°C is closest to:`,
    options: [`343 m/s`, `352 m/s`, `349 m/s`, `346 m/s`],
    correctAnswer: 3,
    explanation: `The speed rises 6 m/s for every 10°C, so 25°C falls halfway between 343 m/s and 349 m/s, at about 346 m/s. The values 343 m/s and 349 m/s are the readings at 20°C and 30°C, not at 25°C. A speed of 352 m/s is beyond even the 30°C value.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `A student connected different resistors to the same battery and measured the current through each one.

| Resistance (Ω) | Current (A) |
|---|---|
| 2 | 6.0 |
| 3 | 4.0 |
| 4 | 3.0 |
| 6 | 2.0 |

If the pattern continues, the current through an 8 Ω resistor would be:`,
    options: [`0.5 A`, `1.0 A`, `1.5 A`, `2.0 A`],
    correctAnswer: 2,
    explanation: `In every row, resistance times current equals 12, so the current is inversely related to resistance and an 8 Ω resistor gives 12 ÷ 8 = 1.5 A. Continuing the straight-line drop from 4 Ω to 6 Ω gives 1.0 A, but the current does not fall by a fixed amount. Keeping 2.0 A assumes the current stops changing, and 0.5 A drops far faster than the pattern.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `In a lab, students found that a sugar cube crushed into small grains dissolved in water much faster than an identical whole cube, because the grains exposed more surface to the water. Which everyday practice relies on the same principle?`,
    options: [
      `Stirring iced tea with a spoon so that the ice melts sooner`,
      `Using hot water so instant coffee granules dissolve faster`,
      `Cutting potatoes into small cubes to cook faster`,
      `Putting a lid on a pot so that its water boils sooner`,
    ],
    correctAnswer: 2,
    explanation: `Small potato cubes expose more surface to the hot water, just as crushed grains exposed more surface to the water in the lab. Stirring speeds melting by moving the liquid around, and hot water speeds dissolving by raising the temperature, so both use a different mechanism. A lid speeds boiling by trapping heat, not by adding surface.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `A student measured the thickness of the ice on a pond each morning during a cold spell.

| Day | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Ice thickness (cm) | 2.0 | 3.5 | 5.0 | 6.5 |

If the trend continues, the ice thickness on Day 6 would be closest to:`,
    options: [`6.5 cm`, `8.0 cm`, `9.5 cm`, `13.0 cm`],
    correctAnswer: 2,
    explanation: `The ice thickens by 1.5 cm each day, so Day 5 gives 8.0 cm and Day 6 gives 9.5 cm. Stopping at 8.0 cm adds only one day's growth, and 6.5 cm assumes the trend stops after Day 4. 13.0 cm doubles the Day 4 value, which treats a steady linear increase as a doubling pattern.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Two experiments measured the percent of brine shrimp eggs that hatched.
Experiment 1 (all eggs at 25°C): salt concentrations of 10, 20, and 30 g/L gave 40%, 62%, and 80% hatching.
Experiment 2 (all eggs at 30 g/L of salt): temperatures of 20°C, 25°C, and 30°C gave 55%, 80%, and 88% hatching.
If eggs were kept at 20 g/L of salt and 30°C, the percent hatching would most likely be:`,
    options: [
      `exactly 62%, since temperature has no effect on hatching`,
      `exactly 88%, since temperature alone sets hatching`,
      `less than 62%, since 20 g/L hatched fewer than 30 g/L`,
      `more than 62%, since 30°C beat 25°C for hatching`,
    ],
    correctAnswer: 3,
    explanation: `The 62% result for 20 g/L was measured at 25°C, and Experiment 2 shows that raising the temperature from 25°C to 30°C increased hatching, so the prediction is above 62%. The lower hatching at 20 g/L is already built into the 62%, so counting it again to predict less is a double count. Experiment 2 shows temperature matters and Experiment 1 shows salt matters, so neither "no effect" nor "temperature alone" fits.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },

  // ───────────────────────── Part 5 — Science Passage Strategy ─────────────────────────
  {
    question: `On a Science passage with six questions, a student reaches the third question and sees that it requires comparing values across three tables. The other questions in the set look like quick lookups. What is her best strategy?`,
    options: [
      `Solve the third question fully before reading any of the others`,
      `Answer the quick lookups first, then go back to the third`,
      `Skip the rest of the passage, since one of its questions looks slow`,
      `Reread the entire passage before attempting any of the questions`,
    ],
    correctAnswer: 1,
    explanation: `Lookups are the fastest points in a set, so answering them first banks those points before she spends time on the slow comparison, which she can still return to. Grinding through the hard question first risks running out of time for easy ones. Abandoning the whole passage throws away the quick points, and rereading everything spends time without answering anything.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 5,
  },
  {
    question: `Researchers measured the rate at which a leaf released oxygen under three lamp settings.

| Lamp setting | Oxygen released (mL per minute) |
|---|---|
| Dim | 0.10 |
| Medium | 0.25 |
| Bright | 0.40 |

At the bright setting, how much oxygen would the leaf release in 1 hour?`,
    options: [`0.4 mL`, `9.6 mL`, `15 mL`, `24 mL`],
    correctAnswer: 3,
    explanation: `The table gives a rate per minute, so 0.40 mL per minute × 60 minutes = 24 mL in an hour. 0.4 mL is the one-minute value with no conversion, and 9.6 mL multiplies by 24 as if converting hours to a day. 15 mL uses the medium setting's 0.25 mL per minute, the wrong row.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Researchers tested a newly discovered compound, lunarin, by adding it to cultures of Bacterium F and counting the cells still alive after 1 hour.

| Lunarin (mg/L) | 0 | 5 | 10 | 20 |
|---|---|---|---|---|
| Surviving cells (thousands) | 480 | 310 | 150 | 40 |

Which statement can NOT be concluded from the table?`,
    options: [
      `Fewer cells survived as the lunarin concentration rose`,
      `Lunarin is safe for humans to take as a medicine`,
      `About 150 thousand cells survived at 10 mg/L lunarin`,
      `The culture with no lunarin had the most surviving cells`,
    ],
    correctAnswer: 1,
    explanation: `The table reports only how Bacterium F responds to lunarin, so nothing in it addresses safety in humans; that claim needs outside information. Survival falling from 480 to 40 thousand as concentration rose, about 150 thousand cells at 10 mg/L, and the most survivors at 0 mg/L can all be read directly from the table.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `The table shows the populations of two algae species in a tank before and after a nutrient was added.

| Species | Before (cells per mL) | After (cells per mL) |
|---|---|---|
| M | 8,000 | 12,000 |
| N | 1,000 | 4,000 |

Which species' population became the greater number of times as large?`,
    options: [
      `Species M, which became 1.5 times as large`,
      `Species N, which became 3 times as large`,
      `Both species, which grew by the same factor`,
      `Species N, which became 4 times as large`,
    ],
    correctAnswer: 3,
    explanation: `Species N went from 1,000 to 4,000 cells per mL, which is 4,000 ÷ 1,000 = 4 times as large. Species M gained more cells (4,000 versus 3,000), but 12,000 ÷ 8,000 is only 1.5 times as large, so M had the larger absolute change and the smaller relative one. Saying N became 3 times as large divides the increase rather than the final value by the starting value, and the two factors clearly differ.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `The table summarizes the heights of two bean varieties grown with different amounts of water.

| Water per day (mL) | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|
| Variety R height (cm) | 8 | 14 | 19 | 22 | 23 |
| Variety S height (cm) | 11 | 15 | 18 | 20 | 21 |

Which statement is supported by the data?`,
    options: [
      `Variety R was taller than Variety S at every watering level from 10 to 50 mL`,
      `Variety S was taller at 10 and 20 mL, and Variety R at 30 mL and above`,
      `Variety R was taller at 10 and 20 mL, and Variety S at 30 mL and above`,
      `Variety S was taller at 10 through 30 mL, and Variety R at 40 mL and above`,
    ],
    correctAnswer: 1,
    explanation: `Checking each column shows Variety S taller at 10 mL (11 vs. 8) and 20 mL (15 vs. 14), and Variety R taller from 30 mL on (19 vs. 18, 22 vs. 20, 23 vs. 21). Variety R being taller "at every watering level" fails the 10 mL and 20 mL columns. Swapping the two varieties reverses every comparison, and placing the switch after 30 mL is wrong because Variety R was already taller at 30 mL (19 vs. 18).`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },

  // ───────────────────────── Part 6 — Conflicting Viewpoints ─────────────────────────
  {
    question: `Two scientists explain the mass extinction at the end of the Cretaceous period.
Scientist 1: The extinction was caused mainly by a single large asteroid impact. The impact would have spread asteroid dust, which is rich in the element iridium, around the world in one thin layer within a very short time.
Scientist 2: The extinction was caused mainly by volcanic eruptions lasting hundreds of thousands of years. The eruptions would have left thick lava deposits and caused species to disappear gradually.
Geologists then find one thin, iridium-rich layer in rocks all over the world, dated to the time of the extinction. This finding:`,
    options: [
      `supports Scientist 2's view more than Scientist 1's view`,
      `supports both scientists' views about equally well`,
      `is unrelated to either scientist's view of the extinction`,
      `supports Scientist 1's view more than Scientist 2's view`,
    ],
    correctAnswer: 3,
    explanation: `Scientist 1 predicted a single thin, worldwide iridium-rich layer, which is exactly what was found. Scientist 2 predicted thick lava deposits and a gradual decline and said nothing about iridium, so the finding fits Scientist 2's view less well. Because the finding matches a prediction one scientist made, it is neither equally supportive nor unrelated.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Two students explain why a metal spoon feels colder to the touch than a wooden spoon that has been in the same room all day.
Student 1: The metal spoon is actually at a lower temperature than the wooden spoon.
Student 2: Both spoons are at the same temperature, but metal conducts heat away from the hand faster, so it feels colder.
A thermometer then shows that both spoons are at 21°C. This result:`,
    options: [
      `weakens Student 2's explanation but is consistent with Student 1's`,
      `weakens Student 1's explanation but is consistent with Student 2's`,
      `weakens the explanations of both students by about the same amount`,
      `supports the explanations of both students by about the same amount`,
    ],
    correctAnswer: 1,
    explanation: `Student 1 claims the metal spoon is colder, so equal readings contradict that view, while Student 2 says the spoons are the same temperature, which matches the measurement. Reversing the two students misreads which claim the reading tests. Because the result agrees with one view and contradicts the other, it cannot weaken or support both equally.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 6,
  },
  {
    question: `Over 20 years, the water from a coastal town's wells has become salty. Two hypotheses explain why.
Hypothesis 1: Heavy pumping lowered the underground water table, so seawater from the nearby coast seeped into the aquifer that supplies the wells.
Hypothesis 2: Road salt spread on the town's streets each winter dissolved in melting snow, soaked through the soil, and reached the aquifer.
Both hypotheses agree that:`,
    options: [
      `seawater has seeped into the aquifer from the coast`,
      `road salt has soaked down through the town's soil`,
      `salt from outside has entered the aquifer feeding the wells`,
      `heavy pumping has lowered the town's water table`,
    ],
    correctAnswer: 2,
    explanation: `Both hypotheses end with salt from an outside source reaching the aquifer; they disagree only about where it came from. Seawater seeping in and the lowered water table appear only in Hypothesis 1. Road salt soaking through the soil appears only in Hypothesis 2.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 6,
  },
  {
    question: `Over 20 years, the water from a coastal town's wells has become salty. Two hypotheses explain why.
Hypothesis 1: Heavy pumping lowered the underground water table, so seawater from the nearby coast seeped into the aquifer that supplies the wells.
Hypothesis 2: Road salt spread on the town's streets each winter dissolved in melting snow, soaked through the soil, and reached the aquifer.
Which finding would support Hypothesis 1 but NOT Hypothesis 2?`,
    options: [
      `Salt levels in the town's wells rose steadily over the 20 years`,
      `Salt levels in the wells peak each spring, after the snow melts`,
      `Coastal wells turned salty first; inland wells by busy roads stayed fresh`,
      `The town's well water tastes saltier now than it did 20 years ago`,
    ],
    correctAnswer: 2,
    explanation: `Seawater would reach the wells nearest the coast first, while road salt should foul wells beside busy roads, so salty coastal wells and fresh roadside wells fit Hypothesis 1 and contradict Hypothesis 2. A spring peak right after snowmelt matches the road-salt mechanism instead. A steady rise in salt and saltier-tasting water are the shared observation both hypotheses explain, so they cannot separate them.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Lizards on Island K are much larger than lizards of the same species on the nearby mainland.
Scientist 1: Island K has no predators, so its lizards live longer and keep growing throughout their longer lives.
Scientist 2: Island K's insects are unusually large, so its lizards get more food and grow bigger.
Suppose predators were brought to Island K while its insects stayed the same. Over many years, Scientist 1 would most likely predict that the average size of Island K lizards would:`,
    options: [
      `increase, since lizards would compete harder for insects`,
      `decrease, since lizards would no longer live as long`,
      `stay the same, since the insects would not change at all`,
      `stay the same, since predators would eat only small lizards`,
    ],
    correctAnswer: 1,
    explanation: `Scientist 1 says the lizards are large because they live long without predators, so adding predators should shorten their lives and shrink their average size. Predicting no change because the insects stay the same applies Scientist 2's food mechanism, not Scientist 1's. Neither scientist mentions competition for insects or which lizards predators would eat.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Three students explain why bread becomes stale, hard, and dry-tasting after a few days.
Student 1: Water evaporates out of the bread into the air, leaving it hard.
Student 2: Starch molecules in the bread slowly rearrange into stiff crystals, which happens even if no water is lost.
Student 3: The bread absorbs moisture from the surrounding air, which makes its crumb tough.
A loaf sealed in an airtight bag lost no water and took in no moisture, yet it became stale in 3 days. This result is consistent with the explanation(s) of:`,
    options: [
      `Student 1 only`,
      `Student 2 only`,
      `Students 1 and 3 only`,
      `Students 1, 2, and 3`,
    ],
    correctAnswer: 1,
    explanation: `Student 2 says staling happens even without water loss, which matches a sealed loaf going stale. Student 1 requires water to leave the bread, and Student 3 requires moisture to enter it from the air; the loaf did neither, so the result contradicts both. Any answer that includes Student 1 or Student 3 therefore fails.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },

  // ───────────────────────── Part 7 — Integrated Practice: Mixed Passage Set ─────────────────────────
  {
    question: `A student wants to test whether the thickness of a plastic sheet affects how much light passes through it. Which experimental design would best test this?`,
    options: [
      `Sheets of one plastic in several thicknesses, all the same distance from one lamp`,
      `Sheets in several thicknesses and colors, all the same distance from one lamp`,
      `Sheets of one plastic in one thickness, set at several distances from one lamp`,
      `Sheets of one plastic in several thicknesses, each lit by a different lamp`,
    ],
    correctAnswer: 0,
    explanation: `Changing only the thickness while keeping the plastic, the lamp, and the distance the same means any difference in light can be traced to thickness. Varying color along with thickness, or using a different lamp for each sheet, adds a second factor that could explain the results. Sheets of a single thickness never change the variable being tested.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Researchers wanted to know whether a new reading app improves vocabulary. They randomly assigned 120 volunteers either to use the app for 6 weeks or to read printed books for 6 weeks, then gave everyone the same vocabulary test. What was the main reason for assigning the volunteers at random?`,
    options: [
      `To make the groups alike except for the app, so a difference could show a cause`,
      `To make the study larger than one in which volunteers chose their own group`,
      `To make sure that every volunteer would score well on the vocabulary test`,
      `To let each volunteer use whichever reading method he or she enjoyed most`,
    ],
    correctAnswer: 0,
    explanation: `Random assignment spreads differences in background, motivation, and habits evenly across the groups, so the app is the main difference and a gap in scores can be traced to it. Randomizing does not change how many people are in the study, and it cannot guarantee high scores. Letting volunteers choose their own method is exactly what random assignment avoids.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `In a study of how the angle of a paper airplane's wings affects its flight distance, students threw each airplane five times at each wing angle and averaged the distances. What is the main purpose of the repeated throws?`,
    options: [
      `To change the wing angle more than once during each throw`,
      `To act as the control group that the experiment needs`,
      `To reduce the effect of random variation in single throws`,
      `To make each paper airplane fly a longer distance`,
    ],
    correctAnswer: 2,
    explanation: `Any single throw can be unusually long or short by chance, so averaging several throws reduces the effect of that random variation. The wing angle stays fixed within each set of throws, and repeated trials are not a control group, which would be a baseline condition. Repeating a throw does not make the airplane fly farther.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Students studied how quickly a gelatin dessert sets.
Experiment 1: Cups of 250 mL of gelatin mixture, each made with 10 g of gelatin powder, were chilled at 2°C, 6°C, and 10°C.
Experiment 2: Cups of 250 mL of gelatin mixture, made with 5 g, 10 g, or 15 g of gelatin powder, were all chilled at 4°C.
In both experiments, the students recorded the time each cup took to set. Which factor was held constant in BOTH experiments?`,
    options: [
      `The temperature at which the cups were chilled`,
      `The mass of gelatin powder used in each cup`,
      `The time each cup took to set`,
      `The volume of gelatin mixture in each cup`,
    ],
    correctAnswer: 3,
    explanation: `Every cup in both experiments held 250 mL of mixture, so the volume was controlled throughout. Chilling temperature was the variable changed in Experiment 1, and the mass of gelatin powder was the variable changed in Experiment 2. The setting time was the result measured in both experiments.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `Table 1 gives the summer water temperature at four sites along a stream. Table 2, from a separate laboratory study, gives the percent of trout eggs that hatch at different water temperatures.

**Table 1**

| Site | A | B | C | D |
|---|---|---|---|---|
| Water temperature (°C) | 9 | 12 | 15 | 18 |

**Table 2**

| Water temperature (°C) | 8 | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|
| Eggs hatched (%) | 70 | 85 | 90 | 72 | 50 | 30 |

Based on both tables, at which site would the greatest percent of trout eggs most likely hatch?`,
    options: [`Site A`, `Site B`, `Site C`, `Site D`],
    correctAnswer: 1,
    explanation: `Site B is at 12°C, the temperature with the highest hatching in Table 2 (90%). Site A's 9°C falls between 70% and 85%, and Site C's 15°C falls between 72% and 50%, so both are lower. Site D's 18°C gives only 30%.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `A Science passage opens with a short paragraph about volcanic soils and then presents "Experiment 1" and "Experiment 2," each with a procedure and a table of results. Which kinds of questions should a student expect this passage to stress most?`,
    options: [
      `Which scientist's explanation a new finding supports`,
      `Which statement both of the viewpoints agree upon`,
      `Variables, controls, and each experiment's design`,
      `Facts about volcanic soils from outside study`,
    ],
    correctAnswer: 2,
    explanation: `Numbered experiments with procedures and results mark a research summary, whose questions mostly test variables, controls, design, and predictions. Questions about which explanation a finding supports, or what two viewpoints agree on, belong to a conflicting viewpoints passage. Outside facts about the topic are not needed, since the answers come from the passage.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-science-reasoning-act')
