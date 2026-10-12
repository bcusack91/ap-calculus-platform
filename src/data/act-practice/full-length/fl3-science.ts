/**
 * Enhanced ACT full-length Form 3 — Science (6 passages, 40 questions, 40 minutes; optional section).
 * Passages: DR air quality index vs traffic · DR sound intensity vs distance ·
 * RS osmosis in potato cores · RS solubility vs temperature ·
 * RS magnet strength and coil turns · CV origin of the Moon.
 * Skills: IOD 18 · SIN 11 · EMI 11.
 */
import type { ActFLPassage } from './types'

export const ACT_FL3_SCIENCE: ActFLPassage[] = [
  // ---------- Passage I: Data Representation (earth science / chemistry) ----------
  {
    id: 'act-fl3-s-01',
    title: 'Air Quality and Traffic',
    kind: 'data-representation',
    text: `Vehicle exhaust releases nitrogen oxides, including nitrogen dioxide (NO₂), and *fine particles* (PM2.5), particles smaller than 2.5 micrometers across. Ground-level ozone (O₃) is not emitted directly by vehicles. It forms when nitrogen oxides and other exhaust gases react in the presence of sunlight, so it builds up most on sunny afternoons. Fresh exhaust also contains nitric oxide (NO), which reacts with and destroys some of the ozone already in the air near a busy road.

Researchers recorded traffic and air pollution on a sunny weekday in July at a monitoring station 50 m from a highway. Table 1 gives the values measured at 8 times of day. Gas concentrations are in parts per billion (ppb), and PM2.5 concentrations are in micrograms per cubic meter (µg/m³).

**Table 1**

| Time of day | Traffic (vehicles per hour) | NO₂ (ppb) | O₃ (ppb) | PM2.5 (µg/m³) |
|---|---|---|---|---|
| 2:00 a.m. | 500 | 14 | 20 | 9 |
| 5:00 a.m. | 1,900 | 24 | 14 | 13 |
| 8:00 a.m. | 6,200 | 48 | 10 | 24 |
| 11:00 a.m. | 3,100 | 28 | 42 | 17 |
| 2:00 p.m. | 3,300 | 21 | 68 | 16 |
| 5:00 p.m. | 5,900 | 38 | 71 | 23 |
| 8:00 p.m. | 2,700 | 30 | 40 | 18 |
| 11:00 p.m. | 1,200 | 22 | 24 | 12 |

At 8:00 a.m. on the same morning, portable monitors measured NO₂ and PM2.5 at 6 distances from the highway along a straight line (Table 2).

**Table 2**

| Distance from highway (m) | NO₂ (ppb) | PM2.5 (µg/m³) |
|---|---|---|
| 20 | 62 | 27 |
| 50 | 48 | 24 |
| 100 | 36 | 21 |
| 200 | 25 | 19 |
| 400 | 18 | 18 |
| 800 | 16 | 17 |

The Air Quality Index (AQI) reports how healthy the air is. Table 3 shows how a 1-hour NO₂ concentration is placed into an AQI category.

**Table 3**

| 1-hour NO₂ concentration (ppb) | AQI category |
|---|---|
| 0–53 | Good |
| 54–100 | Moderate |
| 101–360 | Unhealthy for Sensitive Groups |`,
    questions: [
      {
        id: 'act-fl3-s-01-q1',
        question: 'According to Table 1, the NO₂ concentration at the monitoring station was highest at which of the following times?',
        options: ['8:00 a.m.', '11:00 a.m.', '5:00 p.m.', '8:00 p.m.'],
        correctIndex: 0,
        explanation: 'At 8:00 a.m., the NO₂ concentration was 48 ppb, the highest value in Table 1. It occurred at the same hour as the heaviest traffic, 6,200 vehicles per hour.',
        optionExplanations: [
          'Correct. The NO₂ concentration reached 48 ppb at 8:00 a.m., the highest value in Table 1, during the morning rush of 6,200 vehicles per hour.',
          'At 11:00 a.m., the NO₂ concentration was 28 ppb, well below the 48 ppb measured during the morning rush hour three hours earlier.',
          'At 5:00 p.m., traffic was nearly as heavy as in the morning, but NO₂ reached only 38 ppb. The O₃ column peaks at this hour, which may cause the mix-up.',
          'At 8:00 p.m., the NO₂ concentration was 30 ppb. It is higher than the midday values but far below the 48 ppb measured at 8:00 a.m.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-01-q2',
        question: 'According to Table 1, from 2:00 a.m. to 2:00 p.m., the O₃ concentration at the monitoring station:',
        options: [
          'increased only.',
          'decreased only.',
          'increased and then decreased.',
          'decreased and then increased.',
        ],
        correctIndex: 3,
        explanation: 'The O₃ concentration fell from 20 ppb at 2:00 a.m. to 14 ppb at 5:00 a.m. and 10 ppb at 8:00 a.m., then rose to 42 ppb at 11:00 a.m. and 68 ppb at 2:00 p.m.',
        optionExplanations: [
          'O₃ did rise sharply after 8:00 a.m., but it first fell from 20 ppb at 2:00 a.m. to 10 ppb at 8:00 a.m. It did not increase over the whole interval.',
          'O₃ fell only until 8:00 a.m. It then climbed to 42 ppb at 11:00 a.m. and 68 ppb at 2:00 p.m., so it did not decrease over the whole interval.',
          'This reverses the pattern. O₃ dropped first, from 20 ppb to 10 ppb by 8:00 a.m., and only then rose, reaching 68 ppb at 2:00 p.m.',
          'Correct. O₃ fell from 20 ppb to 14 ppb and then to 10 ppb by 8:00 a.m., then rose to 42 ppb at 11:00 a.m. and 68 ppb at 2:00 p.m.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-01-q3',
        question: 'Based on Table 2, if NO₂ had also been measured at 8:00 a.m. at a distance of 300 m from the highway, the concentration would most likely have been closest to:',
        options: ['14 ppb.', '21 ppb.', '27 ppb.', '36 ppb.'],
        correctIndex: 1,
        explanation: 'NO₂ was 25 ppb at 200 m and 18 ppb at 400 m. A distance of 300 m lies between these, so the concentration should fall between 18 and 25 ppb, near 21 ppb.',
        optionExplanations: [
          'A value of 14 ppb is lower than the 16 ppb measured even at 800 m. At 300 m, closer to the highway, NO₂ should be higher than at 400 m, not lower.',
          'Correct. NO₂ was 25 ppb at 200 m and 18 ppb at 400 m. A distance of 300 m falls between them, so a value near 21 ppb fits.',
          'A value of 27 ppb is higher than the 25 ppb measured at 200 m. Because NO₂ fell steadily with distance, the value at 300 m should be lower than at 200 m.',
          'A value of 36 ppb is the concentration measured at 100 m. Reading the wrong row gives this value; at 300 m, the air had been diluted much more.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-01-q4',
        question: 'Based on Tables 2 and 3, at 8:00 a.m., the NO₂ concentration fell into the Moderate AQI category at which of the distances measured?',
        options: ['20 m only', '20 m and 50 m only', '20 m, 50 m, and 100 m only', 'None of the distances'],
        correctIndex: 0,
        explanation: 'The Moderate category covers 54–100 ppb. Only the 62 ppb measured at 20 m falls in that range; the 48 ppb at 50 m and all lower values are in the Good category.',
        optionExplanations: [
          'Correct. At 20 m, NO₂ was 62 ppb, within the 54–100 ppb Moderate range. At 50 m it was 48 ppb, below 54 ppb, so every other distance was in the Good category.',
          'At 50 m, NO₂ was 48 ppb. That is below the 54 ppb lower limit of the Moderate category, so the 50 m reading counts as Good.',
          'At 100 m, NO₂ was only 36 ppb, and at 50 m it was 48 ppb. Both fall in the 0–53 ppb Good range, not the Moderate range.',
          'The 62 ppb reading at 20 m lies within the 54–100 ppb Moderate range. At least one distance therefore fell into the Moderate category.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-01-q5',
        question: 'Based on the passage and Table 1, which of the following best explains why the O₃ concentration was much higher at 2:00 p.m. than at 8:00 a.m.?',
        options: [
          'Traffic was heavier at 2:00 p.m., so vehicles released more ozone.',
          'The NO₂ concentration was higher at 2:00 p.m. than at 8:00 a.m.',
          'Stronger afternoon sunlight drove ozone-forming reactions.',
          'Vehicles emit ozone directly, and it builds up as traffic thins out.',
        ],
        correctIndex: 2,
        explanation: 'The passage says O₃ is not emitted by vehicles but forms when exhaust gases react in sunlight, building up most on sunny afternoons. Traffic and NO₂ were both lower at 2:00 p.m., so sunlight-driven formation explains the higher O₃.',
        optionExplanations: [
          'Traffic was lighter at 2:00 p.m. (3,300 vehicles per hour) than at 8:00 a.m. (6,200). The passage also says vehicles do not release ozone directly.',
          'NO₂ was lower at 2:00 p.m. (21 ppb) than at 8:00 a.m. (48 ppb). This statement misreads Table 1, so it cannot explain the higher ozone.',
          'Correct. The passage says ozone forms when exhaust gases react in sunlight and builds up most on sunny afternoons. Midafternoon sunlight is much stronger than early-morning sunlight.',
          'The passage states that ground-level ozone is not emitted directly by vehicles. It forms in the air through reactions that need sunlight.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-01-q6',
        question: 'Why did the researchers most likely make all of the Table 2 measurements at the same time on the same morning?',
        options: [
          'Because O₃ is at its highest concentration at that hour',
          'So that every distance would have the same PM2.5 level',
          'Because the AQI can be calculated only for morning hours',
          'So that only the distance from the road would differ',
        ],
        correctIndex: 3,
        explanation: 'Traffic, and therefore pollution, changed greatly over the day (Table 1). Measuring every distance at once kept traffic and weather the same, so differences in concentration could be credited to distance alone.',
        optionExplanations: [
          'At 8:00 a.m., O₃ was at its lowest value in Table 1 (10 ppb), not its highest. O₃ was also not one of the pollutants measured in Table 2.',
          'PM2.5 was not the same at every distance; it ranged from 27 µg/m³ at 20 m to 17 µg/m³ at 800 m. Timing cannot force equal readings.',
          'Nothing in the passage limits the AQI to morning readings. Table 3 categorizes any 1-hour NO₂ concentration, whatever the time of day.',
          'Correct. Traffic and pollution changed a great deal over the day, as Table 1 shows. Measuring all distances at the same moment kept those conditions equal, so distance was the only variable.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
    ],
  },

  // ---------- Passage II: Data Representation (physics) ----------
  {
    id: 'act-fl3-s-02',
    title: 'Sound Intensity and Distance',
    kind: 'data-representation',
    text: `The *intensity* of a sound is the power carried by the sound wave through each square meter of area, in watts per square meter (W/m²). Because the ear responds to an enormous range of intensities, loudness is usually reported as *sound level*, in decibels (dB). Every 10-fold increase in intensity raises the sound level by 10 dB.

**Study 1**

A loudspeaker playing a steady 1,000 Hz tone at constant power was mounted on a tall pole in the middle of a large, open field, far from any buildings. A sound meter was placed at 6 distances from the loudspeaker along a straight line, and the intensity and sound level were recorded at each distance (Table 1).

**Table 1**

| Distance from loudspeaker (m) | Intensity (W/m²) | Sound level (dB) |
|---|---|---|
| 1 | 1.0 × 10⁻³ | 90.0 |
| 2 | 2.5 × 10⁻⁴ | 84.0 |
| 4 | 6.3 × 10⁻⁵ | 78.0 |
| 8 | 1.6 × 10⁻⁵ | 72.0 |
| 16 | 3.9 × 10⁻⁶ | 66.0 |
| 32 | 9.8 × 10⁻⁷ | 60.0 |

**Study 2**

The same loudspeaker, playing the same tone at the same power, was placed at one end of an empty gymnasium 40 m long with hard walls, floor, and ceiling. Sound level was measured at the same 6 distances (Table 2). Inside the gymnasium, the meter received sound traveling directly from the loudspeaker and also sound that had reflected off the room's hard surfaces.

**Table 2**

| Distance from loudspeaker (m) | Sound level (dB) |
|---|---|
| 1 | 90.1 |
| 2 | 84.4 |
| 4 | 79.5 |
| 8 | 76.1 |
| 16 | 74.6 |
| 32 | 74.2 |`,
    questions: [
      {
        id: 'act-fl3-s-02-q1',
        question: 'According to Table 1, in Study 1, each time the distance from the loudspeaker doubled, the sound level decreased by:',
        options: ['3 dB.', '6 dB.', '10 dB.', '12 dB.'],
        correctIndex: 1,
        explanation: 'In Table 1, the sound level fell from 90.0 to 84.0, 78.0, 72.0, 66.0, and 60.0 dB as the distance doubled from 1 m to 32 m. Each doubling lowered the level by 6 dB.',
        optionExplanations: [
          'A drop of 3 dB would mean each doubling only halved the intensity. Table 1 shows the level falling by 6 dB per doubling, from 90.0 to 84.0 to 78.0 dB.',
          'Correct. The sound level dropped from 90.0 dB at 1 m to 84.0 dB at 2 m, to 78.0 dB at 4 m, and so on, losing 6 dB with every doubling of distance.',
          'A drop of 10 dB corresponds to a 10-fold drop in intensity, as the passage explains. Each doubling of distance reduced intensity by much less, a factor of about 4.',
          'A drop of 12 dB is the change over two doublings, such as from 1 m to 4 m (90.0 to 78.0 dB). A single doubling lowered the level by half that much.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-02-q2',
        question: 'Based on Tables 1 and 2, the sound level in the gymnasium was greater than the sound level in the open field by the largest amount at which of the following distances?',
        options: ['2 m', '8 m', '16 m', '32 m'],
        correctIndex: 3,
        explanation: 'The gymnasium-minus-field difference grew with distance: 0.4 dB at 2 m, 4.1 dB at 8 m, 8.6 dB at 16 m, and 14.2 dB at 32 m (74.2 − 60.0). It was largest at 32 m.',
        optionExplanations: [
          'At 2 m, the levels were 84.4 dB in the gymnasium and 84.0 dB in the field, a difference of only 0.4 dB. Close to the loudspeaker, direct sound dominated in both places.',
          'At 8 m, the gymnasium level (76.1 dB) exceeded the field level (72.0 dB) by 4.1 dB. The gap kept widening at greater distances.',
          'At 16 m, the difference was 74.6 − 66.0 = 8.6 dB. That is large, but the difference at 32 m was larger still.',
          'Correct. At 32 m, the gymnasium level was 74.2 dB and the field level was 60.0 dB, a difference of 14.2 dB, the largest gap at any distance measured.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-02-q3',
        question: 'If Study 1 had included a measurement 64 m from the loudspeaker, the sound level would most likely have been closest to:',
        options: ['30.0 dB.', '48.0 dB.', '54.0 dB.', '57.0 dB.'],
        correctIndex: 2,
        explanation: 'In Study 1, each doubling of distance lowered the sound level by 6 dB. Doubling from 32 m (60.0 dB) to 64 m should give 60.0 − 6.0 = 54.0 dB.',
        optionExplanations: [
          'Thirty decibels would mean the sound level itself was halved. In Table 1, each doubling of distance subtracted a fixed 6 dB rather than cutting the level in half.',
          'A level of 48.0 dB is 12 dB below the 32 m reading, the drop expected over two doublings of distance (32 m to 128 m). Going to 64 m is only one doubling.',
          'Correct. Each doubling of distance in Table 1 lowered the level by 6 dB. Continuing the pattern from 60.0 dB at 32 m gives 54.0 dB at 64 m.',
          'A level of 57.0 dB reflects a drop of only 3 dB, half the drop seen for every doubling in Table 1. The level should fall by a full 6 dB.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-02-q4',
        question: 'Why did the researchers most likely use the same loudspeaker, tone, and power in Study 2 as in Study 1?',
        options: [
          'So that any difference in sound level could be credited to the setting',
          'So that the sound level would be equal at every distance in both studies',
          'So that the intensity would fall with the square of distance in both studies',
          'So that reflected sound would reach the meter in the open field as well',
        ],
        correctIndex: 0,
        explanation: 'Keeping the source identical meant that the open field and the gymnasium were the only thing that differed between the studies. Differences in sound level could then be attributed to the setting.',
        optionExplanations: [
          'Correct. With the same loudspeaker, tone, and power, the only difference between the studies was the setting, an open field versus a hard-walled gymnasium, so that difference explains the different results.',
          'Using the same source did not make the levels equal at every distance. In both studies, the sound level fell as the distance from the loudspeaker increased.',
          'The researchers could not force the sound to follow a particular pattern. In fact, the gymnasium levels did not fall as quickly as the open-field levels.',
          'The open field was chosen to be far from buildings, so little reflected sound reached the meter there. Using the same loudspeaker would not add reflections.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-02-q5',
        question: 'A student claimed that in Study 1, the intensity was inversely proportional to the distance from the loudspeaker, so that doubling the distance cut the intensity in half. Do the data in Table 1 support this claim?',
        options: [
          'Yes; each time the distance doubled, the intensity was cut in half.',
          'Yes; the intensity became smaller every time the distance increased.',
          'No; each time the distance doubled, the intensity fell to about 1/4.',
          'No; the intensity increased as the distance from the source increased.',
        ],
        correctIndex: 2,
        explanation: 'Doubling the distance from 1 m to 2 m lowered the intensity from 1.0 × 10⁻³ to 2.5 × 10⁻⁴ W/m², one-fourth as much, and each later doubling did the same. The intensity follows the inverse square of distance, not the inverse.',
        optionExplanations: [
          'Table 1 does not show halving. From 1 m to 2 m, the intensity fell from 1.0 × 10⁻³ to 2.5 × 10⁻⁴ W/m², which is one-fourth of the starting value, not one-half.',
          'The intensity did decrease with distance, but a decrease alone does not show inverse proportion. The claim specifies halving, and the data show a drop to one-fourth.',
          'Correct. Each doubling of distance cut the intensity to about one-fourth, such as from 2.5 × 10⁻⁴ to 6.3 × 10⁻⁵ W/m². The intensity varies with the inverse square of distance.',
          'The rejection is right, but the reason misreads Table 1. The intensity decreased, from 1.0 × 10⁻³ W/m² at 1 m to 9.8 × 10⁻⁷ W/m² at 32 m.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-02-q6',
        question: 'Suppose the walls, floor, and ceiling of the gymnasium were covered with thick panels that absorb most of the sound striking them, and Study 2 were repeated. Based on Studies 1 and 2, the sound level 32 m from the loudspeaker would most likely be:',
        options: [
          'less than 60.0 dB.',
          'between 60.0 dB and 74.2 dB.',
          'between 74.2 dB and 90.1 dB.',
          'greater than 90.1 dB.',
        ],
        correctIndex: 1,
        explanation: 'With few reflections, the gymnasium would behave more like the open field, where the level at 32 m was 60.0 dB. The level would fall below the original 74.2 dB but would not drop below the 60.0 dB carried by direct sound alone.',
        optionExplanations: [
          'Even with no reflections at all, the meter would still receive the sound traveling directly from the loudspeaker, which gave 60.0 dB at 32 m in the open field. The level should not fall below that.',
          'Correct. Absorbing panels would remove most of the reflected sound, so the level would drop from 74.2 dB toward the 60.0 dB measured with direct sound only in the open field.',
          'A level above 74.2 dB would require more reflected sound than before. Absorbing panels reduce reflections, so the level at 32 m should drop, not rise.',
          'A level above 90.1 dB is louder than the reading taken just 1 m from the loudspeaker. Sound 32 m away cannot be louder than sound at 1 m from the same source.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage III: Research Summary (biology) ----------
  {
    id: 'act-fl3-s-03',
    title: 'Osmosis in Potato Cores',
    kind: 'research-summary',
    text: `*Osmosis* is the movement of water across a selectively permeable membrane, such as a cell membrane, from a solution with a lower solute concentration to a solution with a higher solute concentration. A solution whose solute concentration is lower than that inside a cell is *hypotonic* to the cell; a solution whose solute concentration is higher is *hypertonic* to the cell. Students studied osmosis in potato tissue.

In all 3 experiments, cylindrical cores 1.0 cm in diameter were cut from potatoes of a single variety. Each core was blotted dry with a paper towel, weighed, and placed in 50 mL of a sucrose (table sugar) solution at 22°C. After the stated time, each core was removed, blotted dry, and weighed again. The percent mass change of each core was calculated as follows:

percent mass change = (final mass − initial mass) ÷ initial mass × 100

Each result below is the average for 5 cores. A positive value means the cores gained mass, and a negative value means they lost mass.

**Experiment 1**

Cores 4.0 cm long were placed in 8 sucrose solutions, from 0.0 M (distilled water) to 1.0 M, for 24 hours (Table 1).

**Table 1**

| Sucrose concentration (M) | Percent mass change after 24 h |
|---|---|
| 0.0 | +18.0 |
| 0.1 | +11.5 |
| 0.2 | +5.0 |
| 0.3 | −1.5 |
| 0.4 | −7.5 |
| 0.6 | −16.0 |
| 0.8 | −22.5 |
| 1.0 | −26.0 |

**Experiment 2**

Cores 4.0 cm long were placed in either 0.0 M or 0.6 M sucrose. A separate group of 5 cores from each solution was removed and weighed after each of 5 times (Table 2).

**Table 2**

| Time in solution (h) | Percent mass change in 0.0 M sucrose | Percent mass change in 0.6 M sucrose |
|---|---|---|
| 1 | +6.5 | −5.5 |
| 2 | +10.0 | −9.0 |
| 4 | +13.5 | −12.5 |
| 8 | +16.5 | −15.0 |
| 24 | +18.0 | −16.0 |

**Experiment 3**

Cores were cut to 4 different lengths and placed in 0.0 M sucrose for 1 hour. For each length, the students calculated the ratio of the core's surface area to its volume (Table 3).

**Table 3**

| Core length (cm) | Surface area ÷ volume (cm⁻¹) | Percent mass change after 1 h |
|---|---|---|
| 1.0 | 6.00 | +9.0 |
| 2.0 | 5.00 | +7.5 |
| 4.0 | 4.50 | +6.5 |
| 8.0 | 4.25 | +6.0 |`,
    questions: [
      {
        id: 'act-fl3-s-03-q1',
        question: 'According to Table 1, the potato cores gained mass in which of the sucrose solutions?',
        options: [
          '0.0 M only',
          '0.0 M, 0.1 M, and 0.2 M only',
          '0.3 M through 1.0 M only',
          'All 8 of the solutions',
        ],
        correctIndex: 1,
        explanation: 'A positive percent mass change means a gain. Only the 0.0 M (+18.0), 0.1 M (+11.5), and 0.2 M (+5.0) solutions produced positive values; from 0.3 M upward, the values were negative.',
        optionExplanations: [
          'Distilled water produced the largest gain, +18.0%, but it was not the only solution that did. The 0.1 M and 0.2 M solutions also gave positive values.',
          'Correct. The cores gained mass in 0.0 M (+18.0%), 0.1 M (+11.5%), and 0.2 M (+5.0%) sucrose. Every solution from 0.3 M upward produced a loss.',
          'These are the solutions in which the cores lost mass. Their values, from −1.5% to −26.0%, are all negative, which the passage defines as a loss.',
          'Five of the 8 solutions produced negative values, from −1.5% at 0.3 M to −26.0% at 1.0 M. The cores lost mass in those solutions.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-03-q2',
        question: 'Based on Table 1, a sucrose solution in which 4.0 cm cores would show no change in mass after 24 hours would have a concentration closest to:',
        options: ['0.00 M.', '0.10 M.', '0.28 M.', '0.60 M.'],
        correctIndex: 2,
        explanation: 'The percent mass change was +5.0 at 0.2 M and −1.5 at 0.3 M, so it crosses zero between those concentrations, much closer to 0.3 M. A value near 0.28 M fits.',
        optionExplanations: [
          'Distilled water (0.00 M) produced the largest gain of all, +18.0%. Containing no sucrose does not mean the cores stay unchanged; water moved into them.',
          'At 0.10 M, the cores gained 11.5% of their mass. The concentration that causes no change must be higher, where the gains have shrunk to zero.',
          'Correct. The change was +5.0% at 0.2 M and −1.5% at 0.3 M, so it passes through zero between them, closer to 0.3 M. That point is about 0.28 M.',
          'At 0.60 M, the cores lost 16.0% of their mass, a large change. The value changed sign between 0.2 M and 0.3 M, far below 0.60 M.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-03-q3',
        question: 'Based on the passage and the results of Experiment 1, the 0.6 M sucrose solution was ____ to the potato cells, and during the experiment water moved ____ the cells.',
        options: [
          'hypotonic; into',
          'hypotonic; out of',
          'hypertonic; into',
          'hypertonic; out of',
        ],
        correctIndex: 3,
        explanation: 'Cores in 0.6 M sucrose lost 16.0% of their mass, so water left the cells. Water moves toward the higher solute concentration, so the solution had more solute than the cells did; it was hypertonic.',
        optionExplanations: [
          'Cores in 0.6 M sucrose lost mass (−16.0%), so water did not move into the cells. That pairing describes the 0.0 M through 0.2 M solutions instead.',
          'Water did move out of the cells, but a hypotonic solution has a lower solute concentration than the cells. Water would then move into the cells, not out.',
          'A hypertonic solution draws water out of cells, toward its higher solute concentration. Water moving into the cells would have made the cores gain mass.',
          'Correct. The cores lost 16.0% of their mass, so water left the cells. Because water moves toward the higher solute concentration, the 0.6 M solution was hypertonic to the cells.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-03-q4',
        question: 'Why did the students most likely blot each core dry before weighing it after it was removed from its solution?',
        options: [
          'To keep surface liquid from being counted as mass gained',
          'To remove any sucrose that had entered the cells of the potato',
          'To make every core start the experiment with the same mass',
          'To change the sucrose concentration of the solution for later trials',
        ],
        correctIndex: 0,
        explanation: 'Solution clinging to the outside of a core would add mass that had not moved into the cells. Blotting removed it, so the final mass reflected only water gained or lost by the tissue.',
        optionExplanations: [
          'Correct. Liquid clinging to the outside of a core would add mass that never crossed the cell membranes. Blotting removed it so that the measured change reflected osmosis alone.',
          'Blotting touches only the outside of a core. It cannot pull out anything that had moved inside the cells, so it could not remove sucrose from the cells.',
          'Blotting removes surface liquid; it does not trim the cores to equal mass. Percent mass change compares each core with its own initial mass, so equal masses were not needed.',
          'The cores were blotted after they were taken out of the solution, so blotting did not affect the solution. Each trial used its own 50 mL of solution.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-03-q5',
        question: 'According to Table 2, during which of the following time intervals did the mass of the cores in 0.0 M sucrose increase at the fastest average rate?',
        options: ['From 0 h to 1 h', 'From 2 h to 4 h', 'From 4 h to 8 h', 'From 8 h to 24 h'],
        correctIndex: 0,
        explanation: 'The cores gained 6.5% in the first hour, a rate of 6.5% per hour. Each later interval was slower: 3.5% per hour from 1 h to 2 h, 1.75% per hour from 2 h to 4 h, 0.75% per hour from 4 h to 8 h, and under 0.1% per hour after that.',
        optionExplanations: [
          'Correct. The cores gained 6.5% of their mass during the first hour, a rate of 6.5% per hour. No later interval came close to that rate.',
          'From 2 h to 4 h, the cores gained 3.5% (from +10.0% to +13.5%) over 2 hours, only 1.75% per hour, far slower than in the first hour.',
          'From 4 h to 8 h, the cores gained 3.0% over 4 hours, or 0.75% per hour. The rate of gain kept slowing as time went on.',
          'From 8 h to 24 h, the cores gained only 1.5% over 16 hours, less than 0.1% per hour. This interval spans the most time but had the slowest rate.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-03-q6',
        question: 'One group of cores in Experiment 3 was treated in exactly the same way as one group of cores in Experiment 2. Which two groups were these?',
        options: [
          'The 1.0 cm cores, and the cores in 0.0 M sucrose weighed after 1 h',
          'The 4.0 cm cores, and the cores in 0.0 M sucrose weighed after 1 h',
          'The 4.0 cm cores, and the cores in 0.6 M sucrose weighed after 1 h',
          'The 8.0 cm cores, and the cores in 0.0 M sucrose weighed after 8 h',
        ],
        correctIndex: 1,
        explanation: 'Experiment 2 used 4.0 cm cores, and Experiment 3 used 0.0 M sucrose for 1 hour. The 4.0 cm cores in Experiment 3 therefore matched the 0.0 M, 1 h group of Experiment 2, and both gained 6.5%.',
        optionExplanations: [
          'The 1.0 cm cores were shorter than the 4.0 cm cores used throughout Experiment 2. Their 9.0% gain differs from the 6.5% gain of the 1 h group in 0.0 M sucrose.',
          'Correct. Both groups were 4.0 cm cores placed in 0.0 M sucrose and weighed after 1 hour. As expected for identical conditions, both show a gain of 6.5%.',
          'Every core in Experiment 3 was placed in 0.0 M sucrose, not 0.6 M. The 0.6 M cores lost 5.5% after 1 hour, while the 4.0 cm cores gained 6.5%.',
          'All cores in Experiment 3 stayed in solution for only 1 hour, not 8 hours, and Experiment 2 used only 4.0 cm cores, never 8.0 cm cores.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-03-q7',
        question: 'Based on Experiments 2 and 3, if a 2.0 cm core had been placed in 0.6 M sucrose for 1 hour, its percent mass change would most likely have been:',
        options: [
          'a loss of over 5.5%.',
          'a loss of less than 5.5%.',
          'no change in mass at all.',
          'a gain of about 7.5%.',
        ],
        correctIndex: 0,
        explanation: 'A 4.0 cm core lost 5.5% in 0.6 M sucrose after 1 hour (Experiment 2). Experiment 3 shows that shorter cores, with greater surface area relative to volume, changed mass faster, so a 2.0 cm core should lose more than 5.5%.',
        optionExplanations: [
          'Correct. A 4.0 cm core lost 5.5% in 0.6 M sucrose in 1 hour. In Experiment 3, a 2.0 cm core changed mass faster than a 4.0 cm core, so it should lose more.',
          'A smaller loss would mean a shorter core exchanges water more slowly. Experiment 3 shows the opposite: the 2.0 cm cores changed mass faster than the 4.0 cm cores did.',
          'Cores in 0.6 M sucrose lost mass at every time in Table 2. Changing the core length affects how fast water moves, not whether 0.6 M sucrose draws water out.',
          'A gain of 7.5% is what 2.0 cm cores showed in 0.0 M sucrose in Experiment 3. In 0.6 M sucrose, a hypertonic solution, the cores lose mass instead.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage IV: Research Summary (chemistry) ----------
  {
    id: 'act-fl3-s-04',
    title: 'Solubility and Temperature',
    kind: 'research-summary',
    text: `The *solubility* of a substance is the greatest amount of it that can dissolve in a given amount of solvent at a given temperature. A solution that holds exactly that amount is *saturated*. Students studied how temperature affects the solubility of 4 solids and 2 gases in water.

**Experiment 1**

For each solid, potassium nitrate (KNO₃), sodium chloride (NaCl), potassium chloride (KCl), and lithium sulfate (Li₂SO₄), the students added small, weighed portions of the solid to 100 g of water held at a constant temperature, stirring after each addition. They stopped when some of the solid remained undissolved after 10 minutes of stirring and recorded the total mass that had dissolved. This was repeated at 5 temperatures (Table 1).

**Table 1**

| Temperature (°C) | KNO₃ (g per 100 g water) | NaCl (g per 100 g water) | KCl (g per 100 g water) | Li₂SO₄ (g per 100 g water) |
|---|---|---|---|---|
| 0 | 13.3 | 35.7 | 28.0 | 36.1 |
| 20 | 31.6 | 35.9 | 34.2 | 34.8 |
| 40 | 63.9 | 36.4 | 40.1 | 33.7 |
| 60 | 110.0 | 37.1 | 45.8 | 32.6 |
| 80 | 169.0 | 38.0 | 51.3 | 31.4 |

**Experiment 2**

The solubility of a gas depends on both the temperature and the pressure of the gas above the liquid. In each trial, the students saturated 1 L of water held at a constant temperature with a gas, keeping the total pressure above the water at 1 atm. For carbon dioxide (CO₂), pure CO₂ was bubbled through the water. For oxygen (O₂), air was bubbled through the water. The mass of gas dissolved was then measured (Table 2). Note the different units for the 2 gases.

**Table 2**

| Temperature (°C) | CO₂ dissolved (g/L) | O₂ dissolved (mg/L) |
|---|---|---|
| 0 | 3.35 | 14.6 |
| 10 | 2.32 | 11.3 |
| 20 | 1.69 | 9.1 |
| 30 | 1.26 | 7.6 |
| 40 | 0.97 | 6.4 |

**Experiment 3**

The students prepared a saturated solution of each solid in 100 g of water at 80°C. Each solution was then cooled slowly to 20°C. Any crystals that formed were filtered out, dried, and weighed (Table 3).

**Table 3**

| Solid | Mass of crystals formed on cooling from 80°C to 20°C (g) |
|---|---|
| KNO₃ | 137.4 |
| NaCl | 2.1 |
| KCl | 17.1 |
| Li₂SO₄ | 0.0 |`,
    questions: [
      {
        id: 'act-fl3-s-04-q1',
        question: 'According to Table 1, at 20°C, which of the 4 solids had the greatest solubility in water?',
        options: ['KNO₃', 'KCl', 'NaCl', 'Li₂SO₄'],
        correctIndex: 2,
        explanation: 'At 20°C, the solubilities were KNO₃ 31.6 g, NaCl 35.9 g, KCl 34.2 g, and Li₂SO₄ 34.8 g per 100 g of water. NaCl had the greatest value.',
        optionExplanations: [
          'KNO₃ is by far the most soluble solid at 40°C and above, but at 20°C only 31.6 g dissolved, the smallest value of the 4 solids at that temperature.',
          'At 20°C, 34.2 g of KCl dissolved per 100 g of water. That is more than KNO₃ but less than both NaCl (35.9 g) and Li₂SO₄ (34.8 g).',
          'Correct. At 20°C, 35.9 g of NaCl dissolved per 100 g of water, slightly more than Li₂SO₄ (34.8 g), KCl (34.2 g), or KNO₃ (31.6 g).',
          'Li₂SO₄ was the most soluble solid at 0°C (36.1 g), but its solubility fell with warming. At 20°C, its 34.8 g was below the 35.9 g of NaCl.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-04-q2',
        question: 'Based on Table 1, KNO₃ and KCl would have the same solubility at a temperature between:',
        options: ['0°C and 20°C.', '20°C and 40°C.', '40°C and 60°C.', '60°C and 80°C.'],
        correctIndex: 1,
        explanation: 'At 20°C, KCl was more soluble than KNO₃ (34.2 g vs. 31.6 g). At 40°C, KNO₃ was more soluble (63.9 g vs. 40.1 g). The two values must be equal somewhere between 20°C and 40°C.',
        optionExplanations: [
          'At both 0°C and 20°C, KCl was more soluble than KNO₃ (28.0 g vs. 13.3 g, then 34.2 g vs. 31.6 g). Their order did not switch in this range.',
          'Correct. KCl was more soluble at 20°C (34.2 g vs. 31.6 g), but KNO₃ was more soluble at 40°C (63.9 g vs. 40.1 g). Their values cross between these temperatures.',
          'At both 40°C and 60°C, KNO₃ was already far more soluble than KCl (63.9 g vs. 40.1 g, then 110.0 g vs. 45.8 g). The crossing happened earlier.',
          'At 60°C and 80°C, KNO₃ was more than twice as soluble as KCl. The gap between them was widening here, not closing.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-04-q3',
        question: 'Based on Table 2, the mass of O₂ dissolved in 1 L of water at 25°C would most likely be closest to:',
        options: ['7.0 mg.', '8.3 mg.', '9.6 mg.', '11.3 mg.'],
        correctIndex: 1,
        explanation: 'At 20°C, 9.1 mg of O₂ dissolved per liter, and at 30°C, 7.6 mg dissolved. At 25°C, halfway between, the value should be about 8.3 mg.',
        optionExplanations: [
          'A value of 7.0 mg lies between the 30°C (7.6 mg) and 40°C (6.4 mg) values, so it fits a temperature near 35°C. At 25°C, more O₂ should dissolve.',
          'Correct. O₂ solubility was 9.1 mg/L at 20°C and 7.6 mg/L at 30°C. At 25°C, midway between, about 8.3 mg should dissolve.',
          'A value of 9.6 mg is greater than the 9.1 mg measured at 20°C. Because O₂ solubility fell as temperature rose, water at 25°C should hold less than 9.1 mg.',
          'A value of 11.3 mg is the O₂ solubility at 10°C. Water at 25°C is warmer, and warmer water held less dissolved O₂.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-04-q4',
        question: 'A student predicted that the solubility of every substance tested would increase as temperature increased. Which results from Experiments 1 and 2 contradict this prediction?',
        options: [
          'Only the results for Li₂SO₄',
          'Only the results for CO₂ and O₂',
          'The results for NaCl and for KCl',
          'The results for Li₂SO₄, CO₂, and O₂',
        ],
        correctIndex: 3,
        explanation: 'The solubility of Li₂SO₄ fell from 36.1 g to 31.4 g between 0°C and 80°C, and the solubilities of both CO₂ and O₂ fell as temperature rose. All three substances contradict the prediction.',
        optionExplanations: [
          'Li₂SO₄ does contradict the prediction, since its solubility fell from 36.1 g to 31.4 g as the water warmed. But the solubilities of both gases also fell as temperature rose.',
          'Both gases do contradict the prediction, but so does one solid. Li₂SO₄ became less soluble as temperature rose, from 36.1 g at 0°C to 31.4 g at 80°C.',
          'NaCl and KCl both became more soluble as the water warmed. NaCl rose only slightly, from 35.7 g to 38.0 g, but a small increase still fits the prediction.',
          'Correct. Li₂SO₄ solubility fell from 36.1 g to 31.4 g, CO₂ fell from 3.35 g/L to 0.97 g/L, and O₂ fell from 14.6 mg/L to 6.4 mg/L as temperature rose.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-04-q5',
        question: 'In Experiment 1, the students knew that a solution was saturated when:',
        options: [
          'some added solid stayed undissolved after 10 minutes of stirring.',
          'the solution had been heated to a temperature of 80°C.',
          'crystals formed while the solution was cooled to 20°C.',
          'a total of 100 g of the solid had been added to the water.',
        ],
        correctIndex: 0,
        explanation: 'The students stopped adding solid when some remained undissolved after 10 minutes of stirring. At that point, the water held all the solid it could dissolve at that temperature, so the solution was saturated.',
        optionExplanations: [
          'Correct. Solid that stays undissolved after thorough stirring shows that the water cannot dissolve any more. The students used this sign to identify a saturated solution.',
          'Experiment 1 was run at 5 temperatures from 0°C to 80°C, and each solution was saturated at its own temperature. Reaching 80°C was not the sign used.',
          'Cooling saturated solutions to collect crystals was the procedure of Experiment 3, not Experiment 1. In Experiment 1, each solution stayed at one constant temperature.',
          'The 100 g refers to the mass of water, not the solid. The amount of solid that dissolved varied widely, from 13.3 g to 169.0 g.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-04-q6',
        question: 'Suppose a solution saturated with KCl in 100 g of water at 60°C were cooled to 0°C, as in the procedure of Experiment 3. Based on Table 1, about how much KCl would crystallize?',
        options: ['6.2 g', '11.6 g', '17.8 g', '28.0 g'],
        correctIndex: 2,
        explanation: 'At 60°C, 100 g of water holds 45.8 g of KCl; at 0°C, it holds only 28.0 g. The difference, 45.8 − 28.0 = 17.8 g, would come out of solution as crystals.',
        optionExplanations: [
          'A mass of 6.2 g is the drop in solubility from 20°C (34.2 g) to 0°C (28.0 g). The solution starts at 60°C, so the full drop from 45.8 g must be counted.',
          'A mass of 11.6 g is the drop in solubility from 60°C (45.8 g) to 20°C (34.2 g). Cooling continues to 0°C, so more KCl comes out of solution.',
          'Correct. At 60°C, 45.8 g of KCl is dissolved; at 0°C, only 28.0 g can stay dissolved. The extra 45.8 − 28.0 = 17.8 g forms crystals.',
          'A mass of 28.0 g is the amount of KCl that stays dissolved at 0°C, not the amount that crystallizes. The crystals are the excess above that amount.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-04-q7',
        question: 'Why did the students most likely keep the pressure above the water at 1 atm in every trial of Experiment 2?',
        options: [
          'Because gases cannot dissolve in water at any other pressure',
          'So that CO₂ and O₂ would dissolve equally at each temperature',
          'Because the pressure of a gas has no effect on its solubility',
          'So that any change in solubility could be credited to temperature',
        ],
        correctIndex: 3,
        explanation: 'The passage states that gas solubility depends on both temperature and pressure. Holding pressure constant left temperature as the only factor that changed, so changes in solubility could be attributed to temperature.',
        optionExplanations: [
          'Nothing in the passage says gases dissolve only at 1 atm. The passage says gas solubility depends on pressure, which means gases dissolve at other pressures, in different amounts.',
          'CO₂ and O₂ did not dissolve equally; at 0°C, 3.35 g/L of CO₂ dissolved but only 14.6 mg/L of O₂. Constant pressure cannot make two gases equally soluble.',
          'The passage states the opposite: gas solubility depends on the pressure of the gas above the liquid. That dependence is the reason pressure had to be controlled.',
          'Correct. Because gas solubility depends on both temperature and pressure, keeping the pressure at 1 atm meant that temperature was the only factor changing between trials.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
    ],
  },

  // ---------- Passage V: Research Summary (physics) ----------
  {
    id: 'act-fl3-s-05',
    title: 'Electromagnet Strength',
    kind: 'research-summary',
    text: `An *electromagnet* is a coil of insulated wire, usually wrapped around a metal rod called a *core*, that produces a magnetic field while an electric current flows through the wire. Students built electromagnets by winding insulated copper wire evenly along rods 10 cm long and 1 cm in diameter. In every trial, a magnetic field sensor held 1.0 cm from one end of the rod measured the strength of the magnetic field in millitesla (mT).

**Experiment 1**

Coils with different numbers of turns of wire were wound on soft iron rods. A current of 1.00 A flowed through each coil. The students measured the field strength and counted the greatest number of identical small steel paper clips that the electromagnet could lift at one time (Table 1).

**Table 1**

| Number of turns | Field strength (mT) | Paper clips lifted |
|---|---|---|
| 25 | 4.0 | 2 |
| 50 | 8.1 | 5 |
| 75 | 12.0 | 8 |
| 100 | 16.1 | 11 |
| 125 | 20.0 | 14 |

**Experiment 2**

A coil of 100 turns was wound on a soft iron rod. The current through the coil was varied, and the field strength was measured at each current (Table 2).

**Table 2**

| Current (A) | Field strength (mT) |
|---|---|
| 0.25 | 4.1 |
| 0.50 | 8.0 |
| 0.75 | 12.1 |
| 1.00 | 16.1 |
| 1.25 | 20.1 |
| 1.50 | 22.6 |
| 1.75 | 24.3 |
| 2.00 | 25.2 |

**Experiment 3**

Coils of 100 turns were wound on rods of different materials, or on a hollow cardboard tube with no metal core. A current of 1.00 A flowed through each coil. The students measured the field strength while the current was on and again 1 minute after the current was switched off (Table 3).

**Table 3**

| Core | Field strength with current on (mT) | Field strength 1 min after current off (mT) |
|---|---|---|
| None (cardboard tube) | 0.4 | 0.0 |
| Aluminum | 0.4 | 0.0 |
| Copper | 0.4 | 0.0 |
| Hardened steel | 13.8 | 2.9 |
| Soft iron | 16.1 | 0.2 |`,
    questions: [
      {
        id: 'act-fl3-s-05-q1',
        question: 'According to Table 1, how many paper clips did the electromagnet with 75 turns lift?',
        options: ['5', '8', '11', '12'],
        correctIndex: 1,
        explanation: 'In Table 1, the row for 75 turns lists a field strength of 12.0 mT and 8 paper clips lifted.',
        optionExplanations: [
          'Five paper clips were lifted by the electromagnet with 50 turns. The 75-turn electromagnet had a stronger field and lifted more clips.',
          'Correct. The 75-turn row of Table 1 shows that this electromagnet lifted 8 paper clips, with a field strength of 12.0 mT.',
          'Eleven paper clips were lifted by the electromagnet with 100 turns. Reading one row too low in Table 1 gives this value.',
          'The number 12 comes from the field strength column, 12.0 mT, for 75 turns. It is a field strength, not a count of paper clips.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-05-q2',
        question: 'Based on Table 1, if a coil with 60 turns had been tested in Experiment 1, its field strength would most likely have been closest to:',
        options: ['6.0 mT.', '8.1 mT.', '9.7 mT.', '12.0 mT.'],
        correctIndex: 2,
        explanation: 'The field rose by about 4 mT for every 25 turns, or about 0.16 mT per turn. Sixty turns is 10 turns more than 50, so the field should be about 8.1 + 1.6 = 9.7 mT.',
        optionExplanations: [
          'A field of 6.0 mT lies between the 25-turn (4.0 mT) and 50-turn (8.1 mT) values. A coil with 60 turns has more turns than 50, so its field should be above 8.1 mT.',
          'A field of 8.1 mT is the value measured for 50 turns. Because the field grew steadily with the number of turns, 60 turns should give a stronger field than this.',
          'Correct. The field increased by about 0.16 mT per turn. Adding 10 turns to the 50-turn coil (8.1 mT) gives about 8.1 + 1.6 = 9.7 mT, between the 50-turn and 75-turn values.',
          'A field of 12.0 mT is the value measured for 75 turns. A 60-turn coil has fewer turns than that, so its field should be weaker.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-05-q3',
        question: 'Based on Experiments 1 and 2, the field produced by a 50-turn coil carrying 1.00 A was about the same as the field produced by a 100-turn coil carrying:',
        options: ['0.25 A.', '0.50 A.', '1.00 A.', '2.00 A.'],
        correctIndex: 1,
        explanation: 'In Experiment 1, the 50-turn coil at 1.00 A produced 8.1 mT. In Experiment 2, the 100-turn coil produced 8.0 mT at 0.50 A. Halving the turns and halving the current had about the same effect.',
        optionExplanations: [
          'At 0.25 A, the 100-turn coil produced only 4.1 mT, about half the 8.1 mT of the 50-turn coil at 1.00 A. It matches the 25-turn coil instead.',
          'Correct. The 100-turn coil produced 8.0 mT at 0.50 A, nearly equal to the 8.1 mT of the 50-turn coil at 1.00 A. Both coils had the same product of turns and current.',
          'At 1.00 A, the 100-turn coil produced 16.1 mT, about twice the field of the 50-turn coil carrying the same current. Doubling the turns doubled the field.',
          'At 2.00 A, the 100-turn coil produced 25.2 mT, roughly 3 times the field of the 50-turn coil at 1.00 A, not about the same.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-05-q4',
        question: 'According to Table 2, as the current increased from 0.25 A to 2.00 A, the field strength:',
        options: [
          'rose by the same amount with each 0.25 A increase.',
          'rose by larger amounts as the current got higher.',
          'rose at first and then fell at the highest currents.',
          'rose steadily, then more slowly above 1.25 A.',
        ],
        correctIndex: 3,
        explanation: 'Up to 1.25 A, each 0.25 A increase raised the field by about 4 mT. After that, the increases shrank to 2.5 mT, 1.7 mT, and 0.9 mT.',
        optionExplanations: [
          'The field rose by about 4 mT per step only up to 1.25 A. Above that, the steps shrank, to just 0.9 mT between 1.75 A and 2.00 A.',
          'This reverses the pattern. The increases got smaller at higher currents, from about 4 mT per step at low currents to 0.9 mT for the last step.',
          'The field never fell; every value in Table 2 is higher than the one before it. The increases only became smaller at the highest currents.',
          'Correct. Each 0.25 A step raised the field by about 4 mT through 1.25 A (20.1 mT), but the later steps added only 2.5, 1.7, and 0.9 mT.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-05-q5',
        question: 'An electromagnet with 100 turns, a current of 1.00 A, and a soft iron core was tested in which of the experiments?',
        options: [
          'Experiment 1 only',
          'Experiments 1 and 2 only',
          'Experiments 2 and 3 only',
          'Experiments 1, 2, and 3',
        ],
        correctIndex: 3,
        explanation: 'Experiment 1 includes 100 turns on soft iron at 1.00 A, Experiment 2 includes a current of 1.00 A in its 100-turn soft iron coil, and Experiment 3 includes a soft iron core with 100 turns at 1.00 A. All three gave 16.1 mT.',
        optionExplanations: [
          'Experiment 1 did include this electromagnet, but Experiment 2 also tested the 100-turn soft iron coil at 1.00 A, and Experiment 3 tested a soft iron core under the same conditions.',
          'Experiments 1 and 2 both included this setup, but Experiment 3 did too. Its soft iron row used 100 turns and 1.00 A and gave the same 16.1 mT.',
          'Experiments 2 and 3 both included this setup, but so did Experiment 1. Its 100-turn row used a soft iron rod and 1.00 A and measured 16.1 mT.',
          'Correct. All three experiments tested a 100-turn coil on soft iron carrying 1.00 A, and all three recorded the same field strength, 16.1 mT.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-05-q6',
        question: 'A scrap yard needs an electromagnet that lifts steel strongly while the current is on and lets go of it as completely as possible once the current is switched off. Based on Experiment 3, which core would work best?',
        options: [
          'Soft iron; strong field when on, almost none when off',
          'Hardened steel; it kept the strongest field after shutoff',
          'Aluminum; it kept no field at all after the current stopped',
          'No core; its field matched the fields of the metal cores',
        ],
        correctIndex: 0,
        explanation: 'Soft iron produced the strongest field with the current on (16.1 mT) and kept only 0.2 mT after the current was off, so it would hold steel firmly and then release it.',
        optionExplanations: [
          'Correct. Soft iron gave the strongest field with the current on (16.1 mT) and kept only 0.2 mT afterward, so it would grip steel strongly and then release it.',
          'Hardened steel kept 2.9 mT after shutoff, the most of any core. That leftover field could keep steel stuck to the magnet, the opposite of what the yard needs.',
          'Aluminum kept no field after shutoff, but with the current on it produced only 0.4 mT, far too weak to lift steel strongly.',
          'The coil with no core produced only 0.4 mT, the same as aluminum and copper but far weaker than the 13.8 mT and 16.1 mT of the steel and iron cores.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-05-q7',
        question: 'Why did the students most likely hold the sensor 1.0 cm from the end of the rod in every trial?',
        options: [
          'Because no field exists more than 1.0 cm from a coil',
          'So that the sensor could also lift the paper clips',
          'Because field strength depends on distance from the magnet',
          'So that the current in the wire would remain at 1.00 A',
        ],
        correctIndex: 2,
        explanation: 'A magnet\'s field is stronger close to it and weaker farther away. Measuring at the same distance every time kept distance from affecting the readings, so trials could be compared fairly.',
        optionExplanations: [
          'The field of an electromagnet extends beyond 1.0 cm; it simply weakens with distance. A fixed distance was chosen so readings could be compared, not because the field ends there.',
          'The sensor measured field strength; it did not lift anything. The paper clips were lifted by the electromagnet itself in Experiment 1.',
          'Correct. A magnetic field weakens with distance from its source. Holding the sensor at the same 1.0 cm distance kept that factor constant, so differences in readings came from the coils.',
          'The position of the sensor has no effect on the current in the wire. The current was set separately, and Experiment 2 varied it from 0.25 A to 2.00 A.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
    ],
  },

  // ---------- Passage VI: Conflicting Viewpoints (space science) ----------
  {
    id: 'act-fl3-s-06',
    title: 'The Origin of the Moon',
    kind: 'conflicting-viewpoints',
    text: `Compared with the planet it orbits, the Moon is unusually large: its mass is about 1/81 of Earth's mass. Rocks collected by the Apollo missions show that the Moon is about 4.5 billion years old and that its outer layers were once an ocean of molten rock. Table 1 compares Earth and the Moon. Potassium (K) vaporizes far more easily than uranium (U), so a low ratio of potassium to uranium (K/U) in a body's rocks indicates that the body lost much of its potassium to strong heating.

**Table 1**

| Property | Earth | Moon |
|---|---|---|
| Mass (× 10²⁴ kg) | 5.97 | 0.073 |
| Average density (g/cm³) | 5.51 | 3.34 |
| Iron core, as a percent of total mass | about 32% | about 1%–2% |
| K/U ratio in rocks from crust and mantle | about 12,000 | about 2,500 |

Oxygen has several stable isotopes, and the value Δ¹⁷O ("delta-17-O") describes the proportions of those isotopes in a rock. Bodies that formed in different parts of the solar system generally have different Δ¹⁷O values (Table 2).

**Table 2**

| Source of rock samples | Δ¹⁷O (parts per thousand) |
|---|---|
| Earth | 0.00 |
| Moon | within 0.01 of Earth's value |
| Mars (meteorites from Mars) | about +0.30 |
| Asteroid Vesta (meteorites from Vesta) | about −0.24 |

Four students explain how the Moon formed.

**Student 1**

About 4.5 billion years ago, after the young Earth's iron had already sunk to its center to form a core, a planet about the size of Mars struck Earth a glancing blow. The collision melted and vaporized rock mainly from the outer, rocky layers (the mantles) of both bodies and flung it into a disk orbiting Earth, while the impactor's iron core merged with Earth's. The Moon gathered from this disk. Because the disk was mostly mantle rock, the Moon has only a small iron core. The extreme heat drove off elements that vaporize easily, such as potassium, and left the Moon's outer layers molten. The glancing blow also set the Earth–Moon system spinning, giving it its large *angular momentum* (amount of rotational motion). Material from the two bodies mixed thoroughly in the hot disk, so Moon rocks and Earth rocks have the same oxygen isotopes.

**Student 2**

Earth and the Moon formed side by side, at the same time, from the same swarm of rocky debris orbiting the Sun at Earth's distance. Because both were built from the same supply of material, their oxygen isotopes match. No collision was needed. The Moon has little iron because the growing Earth, with its much stronger gravity, swept up most of the dense, iron-rich fragments nearby, leaving mainly lighter rocky material for the Moon.

**Student 3**

The Moon formed as a separate small world somewhere else in the solar system, in a region poor in iron. Later, it passed close to Earth and was captured by Earth's gravity. Large moons can be captured this way; Neptune's largest moon, Triton, orbits in the direction opposite to Neptune's rotation and is thought to be a captured body. The Moon's low density and small core reflect the material available where it formed, not any event involving Earth.

**Student 4**

The young Earth was completely molten and spun extremely fast, completing a rotation in only a few hours. After Earth's iron had sunk to its center, the rapid spin stretched Earth's outer layers into a bulge at the equator, and the bulge eventually broke away to become the Moon. Because the Moon came from Earth's outer, rocky layers, it has only a small iron core and the same oxygen isotopes as Earth. No second body was involved.`,
    questions: [
      {
        id: 'act-fl3-s-06-q1',
        question: 'According to Table 1, the average density of the Moon is about what percent of the average density of Earth?',
        options: ['About 1%', 'About 32%', 'About 60%', 'About 85%'],
        correctIndex: 2,
        explanation: 'The Moon\'s average density is 3.34 g/cm³ and Earth\'s is 5.51 g/cm³. Dividing gives 3.34 ÷ 5.51 ≈ 0.61, or about 60%.',
        optionExplanations: [
          'About 1% is close to the ratio of the Moon\'s mass to Earth\'s mass (0.073 ÷ 5.97 ≈ 0.012). The question asks about density, which differs far less.',
          'The value 32% is the share of Earth\'s mass in its iron core. It comes from a different row of Table 1 and does not compare the two densities.',
          'Correct. Dividing the Moon\'s density, 3.34 g/cm³, by Earth\'s, 5.51 g/cm³, gives about 0.61. The Moon\'s density is about 60% of Earth\'s.',
          'A value of 85% would mean a density of about 4.7 g/cm³ for the Moon. Its actual density, 3.34 g/cm³, is a much smaller fraction of Earth\'s 5.51 g/cm³.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-06-q2',
        question: 'Which of the students state that the Moon formed after Earth\'s iron had sunk to Earth\'s center to form a core?',
        options: [
          'Students 1 and 4 only',
          'Students 2 and 3 only',
          'Student 1 only',
          'Students 1, 2, and 4 only',
        ],
        correctIndex: 0,
        explanation: 'Student 1 says the impact happened after Earth\'s iron had sunk to form a core, and Student 4 says the bulge broke away after Earth\'s iron had sunk to its center. Students 2 and 3 say nothing about when Earth\'s core formed.',
        optionExplanations: [
          'Correct. Student 1 places the impact after Earth\'s iron had formed a core, and Student 4 places the breakup after Earth\'s iron had sunk to its center.',
          'Student 2 says the two bodies formed at the same time, and Student 3 says the Moon formed elsewhere. Neither ties the Moon\'s origin to the formation of Earth\'s core.',
          'Student 1 does make this claim, but so does Student 4, who says Earth\'s iron had sunk to its center before the bulge broke away.',
          'Student 2 describes Earth and the Moon forming together from the same debris and never says that Earth\'s core formed first. Only Students 1 and 4 say so.',
        ],
        skill: 'EMI',
        difficulty: 'easy',
      },
      {
        id: 'act-fl3-s-06-q3',
        question: 'The data in Table 2 are most difficult to reconcile with the viewpoint of which student?',
        options: ['Student 1', 'Student 2', 'Student 3', 'Student 4'],
        correctIndex: 2,
        explanation: 'Table 2 shows that bodies formed in other parts of the solar system, such as Mars and Vesta, have Δ¹⁷O values different from Earth\'s, but the Moon\'s value matches Earth\'s. Student 3 says the Moon formed elsewhere, so it would be expected to differ.',
        optionExplanations: [
          'Student 1 explains the matching isotopes directly: material from the two colliding bodies mixed thoroughly in the hot disk, giving Moon rocks the same oxygen isotopes as Earth rocks.',
          'Student 2 says Earth and the Moon formed from the same supply of material at Earth\'s distance from the Sun, which accounts for their matching Δ¹⁷O values.',
          'Correct. Mars and Vesta, which formed elsewhere, have Δ¹⁷O values unlike Earth\'s. If the Moon had formed elsewhere and been captured, its value should differ too, yet it matches Earth\'s.',
          'Student 4 says the Moon came from Earth\'s own outer layers, so the Moon\'s Δ¹⁷O should match Earth\'s, exactly as Table 2 shows.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-06-q4',
        question: 'Based on the passage, the low K/U ratio of the Moon\'s rocks is accounted for by a process described by which student?',
        options: ['Student 1', 'Student 2', 'Student 3', 'Student 4'],
        correctIndex: 0,
        explanation: 'The passage says a low K/U ratio means a body lost potassium to strong heating. Only Student 1 describes such heating: the extreme heat of the impact drove off easily vaporized elements such as potassium.',
        optionExplanations: [
          'Correct. Student 1 says the extreme heat of the impact drove off elements that vaporize easily, such as potassium. Losing potassium while keeping uranium lowers the K/U ratio.',
          'Student 2 says Earth and the Moon were built from the same supply of material and describes no strong heating. That account predicts similar K/U ratios, not a much lower one for the Moon.',
          'Student 3 attributes the Moon\'s low density and small core to its birthplace but says nothing about heating or potassium, so the viewpoint does not account for the low K/U ratio.',
          'Student 4 says the Moon came from Earth\'s outer layers, so its rocks would start with Earth\'s K/U ratio. The viewpoint describes no later heating that would remove potassium.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-06-q5',
        question: 'Which of the following investigations would best help determine whether Student 1 or Student 4 is correct?',
        options: [
          'Measuring the average density of the Moon more precisely',
          'Comparing the oxygen isotopes of Moon rocks and Earth rocks',
          'Testing whether the Moon\'s outer layers were once molten',
          'Searching Moon rocks for material from another planet',
        ],
        correctIndex: 3,
        explanation: 'Student 1 says the Moon formed partly from the mantle of a second planet, while Student 4 says no second body was involved. Finding, or failing to find, material from another body in Moon rocks would test that difference.',
        optionExplanations: [
          'Both students say the Moon formed from mantle rock and has a small iron core, so both predict a low density. A more precise density would not separate the two viewpoints.',
          'Both students already explain why Moon rocks and Earth rocks share the same oxygen isotopes, so this comparison would fit either viewpoint.',
          'Both viewpoints involve molten rock, Student 1 through the heat of the impact and Student 4 through a molten young Earth. Evidence of a magma ocean fits both.',
          'Correct. Student 1 says the Moon formed partly from the mantle of a second planet; Student 4 says no second body was involved. Material from another body would favor Student 1.',
        ],
        skill: 'SIN',
        difficulty: 'hard',
      },
      {
        id: 'act-fl3-s-06-q6',
        question: 'Suppose calculations showed that, for a molten Earth to spin fast enough to fling off a Moon-sized mass, the Earth–Moon system would need far more angular momentum than it has today, and that no known process could have removed the excess. This finding would most directly weaken the viewpoint of:',
        options: ['Student 1.', 'Student 2.', 'Student 3.', 'Student 4.'],
        correctIndex: 3,
        explanation: 'Only Student 4 requires Earth to spin fast enough to fling off part of itself. If that spin required far more angular momentum than the system has, Student 4\'s mechanism could not have worked.',
        optionExplanations: [
          'Student 1 does not require Earth to spin fast enough to throw off material; the Moon formed from debris of a collision, which also supplied the system\'s angular momentum.',
          'Student 2 says the Moon formed beside Earth from orbiting debris. Nothing in that viewpoint requires Earth to spin fast enough to throw off part of itself.',
          'Student 3 says the Moon formed elsewhere and was captured. A limit on how fast early Earth could spin has no bearing on capture.',
          'Correct. Student 4 says the rapid spin of a molten Earth flung off the Moon. If such a spin required angular momentum that the system never had, that mechanism fails.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl3-s-06-q7',
        question: 'Which of the following investigations would most directly test Student 2\'s claim about when the Moon formed?',
        options: [
          'Measuring how fast the Moon is moving away from Earth today',
          'Dating when Earth and the Moon each finished forming',
          'Comparing the average densities of Earth and the Moon',
          'Measuring the oxygen isotopes of meteorites from Mars',
        ],
        correctIndex: 1,
        explanation: 'Student 2 claims that Earth and the Moon formed at the same time. Dating when each body formed and comparing the results would directly test that claim.',
        optionExplanations: [
          'The Moon\'s present rate of drifting away from Earth describes its orbit today. It says nothing about whether Earth and the Moon formed at the same time.',
          'Correct. Student 2 says Earth and the Moon formed at the same time. Dating the formation of each body and comparing the ages would directly test that timing.',
          'The densities are already known (Table 1) and concern composition, not timing. Comparing them cannot show whether the two bodies formed at the same time.',
          'Mars meteorites show what material from another region looks like, but they cannot reveal when Earth and the Moon formed relative to each other.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
    ],
  },
]
