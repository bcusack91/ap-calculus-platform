/**
 * Enhanced ACT full-length Form 2 — Science (6 passages, 40 questions, 40 minutes; optional section).
 * Passages: DR ocean salinity and depth · DR plant growth under LED colors ·
 * RS reaction rate and catalyst concentration · RS friction on inclined planes ·
 * RS bird beak shape and seed type · CV what causes ice ages.
 * Skills: IOD 18 · SIN 10 · EMI 12.
 */
import type { ActFLPassage } from './types'

export const ACT_FL2_SCIENCE: ActFLPassage[] = [
  // ---------- Passage I: Data Representation (earth science) ----------
  {
    id: 'act-fl2-s-01',
    title: 'Ocean Salinity and Depth',
    kind: 'data-representation',
    text: `*Salinity* is the amount of salt dissolved in seawater, reported in practical salinity units (PSU); a salinity of 35 PSU is roughly 35 g of salt per kilogram of seawater. Evaporation raises the salinity of surface water, while rain, river runoff, and melting ice lower it. Seawater becomes denser as its salinity increases and as its temperature decreases. A *halocline* is a layer of water in which salinity changes rapidly with depth.

In late summer, oceanographers lowered an instrument package from a ship at 2 stations and recorded salinity (Table 1) and temperature (Table 2) at 8 depths. Station A was in the subtropical North Atlantic Ocean, where evaporation exceeds precipitation. Station B was in the subpolar North Pacific Ocean, where precipitation exceeds evaporation.

**Table 1**

| Depth (m) | Salinity at Station A (PSU) | Salinity at Station B (PSU) |
|---|---|---|
| 0 | 36.7 | 33.0 |
| 50 | 36.7 | 33.0 |
| 100 | 36.6 | 33.2 |
| 150 | 36.5 | 33.8 |
| 200 | 36.4 | 34.0 |
| 500 | 35.9 | 34.2 |
| 1,000 | 35.1 | 34.4 |
| 2,000 | 34.9 | 34.6 |

**Table 2**

| Depth (m) | Temperature at Station A (°C) | Temperature at Station B (°C) |
|---|---|---|
| 0 | 25.5 | 11.0 |
| 50 | 24.0 | 9.0 |
| 100 | 21.0 | 6.0 |
| 150 | 19.5 | 5.0 |
| 200 | 18.5 | 4.5 |
| 500 | 16.5 | 4.0 |
| 1,000 | 7.0 | 3.2 |
| 2,000 | 3.5 | 2.2 |`,
    questions: [
      {
        id: 'act-fl2-s-01-q1',
        question: 'According to Table 1, at a depth of 500 m, the salinity at Station A was how much greater than the salinity at Station B?',
        options: ['0.3 PSU', '0.7 PSU', '1.7 PSU', '3.7 PSU'],
        correctIndex: 2,
        explanation: 'At 500 m, salinity was 35.9 PSU at Station A and 34.2 PSU at Station B, a difference of 35.9 − 34.2 = 1.7 PSU.',
        optionExplanations: [
          'A difference of 0.3 PSU is the gap at 2,000 m (34.9 − 34.6). Reading the deepest row of Table 1 instead of the 500 m row gives this value.',
          'A difference of 0.7 PSU is the gap at 1,000 m (35.1 − 34.4). The question asks about 500 m, where the two stations differed by more.',
          'Correct. At 500 m, Station A had a salinity of 35.9 PSU and Station B had 34.2 PSU. Subtracting gives 1.7 PSU.',
          'A difference of 3.7 PSU is the gap at the surface (36.7 − 33.0). The stations differed most near the surface, not at 500 m.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-01-q2',
        question: 'Based on Table 1 and the description in the passage, the halocline at Station B was located between depths of about:',
        options: ['100 m and 200 m.', '200 m and 500 m.', '500 m and 1,000 m.', '1,000 m and 2,000 m.'],
        correctIndex: 0,
        explanation: 'At Station B, salinity rose from 33.2 PSU at 100 m to 34.0 PSU at 200 m, a change of 0.8 PSU in only 100 m. No other layer changed nearly that fast, so the halocline lies between 100 m and 200 m.',
        optionExplanations: [
          'Correct. Salinity at Station B climbed from 33.2 to 34.0 PSU between 100 m and 200 m, a 0.8 PSU change over just 100 m. That is the fastest change with depth in the table.',
          'Between 200 m and 500 m, salinity at Station B rose only from 34.0 to 34.2 PSU, a 0.2 PSU change spread over 300 m. That is a slow change, not a halocline.',
          'Between 500 m and 1,000 m, Station B salinity rose by only 0.2 PSU over 500 m. Station A changed more in this layer, which may be the source of this mistake.',
          'Between 1,000 m and 2,000 m, Station B salinity rose only from 34.4 to 34.6 PSU over a full 1,000 m, the slowest change with depth in the table.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-01-q3',
        question: 'Based on Table 1, if salinity had also been measured at a depth of 750 m at Station A, the value would most likely have been closest to:',
        options: ['34.3 PSU.', '35.5 PSU.', '36.2 PSU.', '36.6 PSU.'],
        correctIndex: 1,
        explanation: 'At Station A, salinity was 35.9 PSU at 500 m and 35.1 PSU at 1,000 m. A depth of 750 m lies halfway between, so the salinity should be about 35.5 PSU.',
        optionExplanations: [
          'A salinity of 34.3 PSU is about what Station B would have at 750 m, between its 34.2 and 34.4 PSU readings. The question asks about Station A.',
          'Correct. Seven hundred fifty meters lies midway between 500 m (35.9 PSU) and 1,000 m (35.1 PSU) at Station A. A value near 35.5 PSU fits that position.',
          'A salinity of 36.2 PSU is higher than the 35.9 PSU measured at 500 m. Because Station A salinity decreased with depth, water at 750 m should be less salty than water at 500 m.',
          'A salinity of 36.6 PSU matches Station A at 100 m, near the surface. Salinity at Station A fell with depth, so water at 750 m should be much fresher than this.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-01-q4',
        question: 'Based on Tables 1 and 2, at which of the following locations was the water both saltier than 35.0 PSU and colder than 10°C?',
        options: ['Station A at 500 m', 'Station A at 2,000 m', 'Station B at 2,000 m', 'Station A at 1,000 m'],
        correctIndex: 3,
        explanation: 'At Station A, the water at 1,000 m had a salinity of 35.1 PSU, above 35.0 PSU, and a temperature of 7.0°C, below 10°C. It is the only listed location that meets both conditions.',
        optionExplanations: [
          'Water at Station A at 500 m was salty enough (35.9 PSU), but its temperature was 16.5°C, which is not colder than 10°C. Only one condition is met.',
          'Water at Station A at 2,000 m was cold (3.5°C), but its salinity was 34.9 PSU, just below 35.0 PSU. It narrowly misses the salinity condition.',
          'Water at Station B at 2,000 m was cold (2.2°C), but its salinity was only 34.6 PSU. No depth at Station B ever reached 35.0 PSU.',
          'Correct. At Station A, the water at 1,000 m had a salinity of 35.1 PSU and a temperature of 7.0°C, so it was both saltier than 35.0 PSU and colder than 10°C.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-01-q5',
        question: 'Based on Tables 1 and 2 and the information in the passage, compared with the surface water at Station B, the water at a depth of 200 m at Station B was most likely:',
        options: [
          'less dense, because it was saltier and colder.',
          'more dense, because it was saltier and colder.',
          'more dense, because it was fresher and colder.',
          'less dense, because it was fresher and warmer.',
        ],
        correctIndex: 1,
        explanation: 'At Station B, the water at 200 m was saltier (34.0 vs. 33.0 PSU) and colder (4.5°C vs. 11.0°C) than the surface water. Both higher salinity and lower temperature make seawater denser.',
        optionExplanations: [
          'The water at 200 m was indeed saltier and colder than the surface water, but the passage says both of those changes make seawater denser, not less dense.',
          'Correct. The 200 m water had a salinity of 34.0 PSU versus 33.0 PSU at the surface and a temperature of 4.5°C versus 11.0°C. Higher salinity and lower temperature both increase density.',
          'The conclusion is right, but the water at 200 m was not fresher. Its salinity, 34.0 PSU, was higher than the 33.0 PSU measured at the surface.',
          'This reverses both readings. The water at 200 m was saltier and colder than the surface water at Station B, and those conditions make it denser, not less dense.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-01-q6',
        question: 'Based on Table 1, the difference in salinity between Station A and Station B was:',
        options: [
          'greatest at 2,000 m and least near the surface.',
          'greatest at 500 m and least near the surface.',
          'greatest near the surface and least at 2,000 m.',
          'greatest at 150 m and least at 1,000 m.',
        ],
        correctIndex: 2,
        explanation: 'The difference was 3.7 PSU at 0 m and 50 m, then shrank with depth to 0.7 PSU at 1,000 m and 0.3 PSU at 2,000 m. It was greatest near the surface and least at 2,000 m.',
        optionExplanations: [
          'This reverses the pattern. The stations differed by only 0.3 PSU at 2,000 m but by 3.7 PSU at the surface, so the gap was least at depth, not greatest.',
          'At 500 m the difference was 1.7 PSU, less than half the 3.7 PSU difference at the surface. The gap was largest near the surface, not at 500 m.',
          'Correct. The salinity gap was 3.7 PSU at 0 m and 50 m and narrowed with depth, reaching only 0.3 PSU at 2,000 m, the smallest difference in Table 1.',
          'At 150 m the gap was 2.7 PSU, less than the 3.7 PSU near the surface. At 1,000 m it was 0.7 PSU, still greater than the 0.3 PSU gap at 2,000 m.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
    ],
  },

  // ---------- Passage II: Data Representation (biology) ----------
  {
    id: 'act-fl2-s-02',
    title: 'Plant Growth Under LED Colors',
    kind: 'data-representation',
    text: `Plant biologists grew lettuce seedlings in 5 growth chambers lit only by light-emitting diodes (LEDs). Each chamber received a different light treatment (Table 1). In every chamber, the LEDs delivered the same *photon flux* (the number of light particles striking a surface each second), 200 micromoles of photons per square meter per second (µmol/m²/s), for 16 hours a day. Temperature, humidity, water, and nutrients were the same in all chambers. After 28 days, 20 plants from each chamber were harvested, and the averages were recorded. *Dry mass* is the mass of a plant after all of its water has been removed.

**Table 1**

| Light treatment | Wavelength (nm) | Dry mass (g per plant) | Leaf area (cm² per plant) | Stem length (mm) |
|---|---|---|---|---|
| Red | 660 | 2.10 | 520 | 38 |
| Blue | 450 | 1.55 | 360 | 14 |
| Green | 530 | 1.20 | 340 | 41 |
| Red + blue (80% red, 20% blue) | 660 and 450 | 2.45 | 560 | 19 |
| White | 400–700 | 2.30 | 545 | 24 |

Chlorophyll absorbs red and blue light strongly and absorbs green light less strongly, reflecting more of it. In a second study, leaves from plants grown under white LEDs were placed in a sealed chamber that measured their *net photosynthesis rate*, the rate at which a leaf takes up carbon dioxide (CO₂), in micromoles of CO₂ per square meter of leaf per second. Each leaf was lit with red, blue, or green light at 6 photon fluxes (Table 2). A negative rate means that the leaf released more CO₂ through respiration than it took up.

**Table 2**

| Photon flux (µmol/m²/s) | Net photosynthesis rate under red light | Net photosynthesis rate under blue light | Net photosynthesis rate under green light |
|---|---|---|---|
| 0 | −1.0 | −1.0 | −1.0 |
| 50 | 2.4 | 1.9 | 1.4 |
| 100 | 5.2 | 4.3 | 3.4 |
| 200 | 9.4 | 8.0 | 6.5 |
| 400 | 13.8 | 12.1 | 10.2 |
| 800 | 16.0 | 14.6 | 13.1 |

*Rates are in µmol CO₂/m²/s.*`,
    questions: [
      {
        id: 'act-fl2-s-02-q1',
        question: 'According to Table 1, which light treatment produced the greatest average dry mass per plant?',
        options: ['Red', 'Blue', 'White', 'Red + blue'],
        correctIndex: 3,
        explanation: 'Plants grown under red + blue light averaged 2.45 g of dry mass, more than plants under white (2.30 g), red (2.10 g), blue (1.55 g), or green (1.20 g) light.',
        optionExplanations: [
          'Red light alone produced 2.10 g per plant, the most of any single color. But the red + blue mixture and white light both produced more dry mass than red alone.',
          'Blue light alone produced only 1.55 g per plant. Among the 5 treatments, only green light produced less dry mass than blue.',
          'White light produced 2.30 g per plant, the second-highest value. The red + blue treatment produced slightly more, 2.45 g.',
          'Correct. Plants grown under the red + blue mixture averaged 2.45 g of dry mass, the highest value in Table 1, ahead of white light at 2.30 g.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-02-q2',
        question: 'According to Table 1, in which 2 treatments was the average stem length less than 20 mm?',
        options: ['Blue and red + blue', 'Blue and white', 'Red and green', 'Green and white'],
        correctIndex: 0,
        explanation: 'Stems averaged 14 mm under blue light and 19 mm under red + blue light. Every other treatment produced stems longer than 20 mm.',
        optionExplanations: [
          'Correct. Stems averaged 14 mm under blue light and 19 mm under red + blue light. These are the only 2 treatments with stems shorter than 20 mm.',
          'Blue-light stems were short (14 mm), but white-light stems averaged 24 mm, which is longer than 20 mm. Only one treatment in this pair qualifies.',
          'This pair has the 2 longest stems in Table 1: 38 mm under red light and 41 mm under green light. Both are far longer than 20 mm.',
          'Green-light stems averaged 41 mm and white-light stems averaged 24 mm. Neither is shorter than 20 mm.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-02-q3',
        question: 'Based on Table 2, if a leaf had been lit with red light at a photon flux of 300 µmol/m²/s, its net photosynthesis rate would most likely have been closest to:',
        options: ['6.5 µmol CO₂/m²/s.', '9.4 µmol CO₂/m²/s.', '11.8 µmol CO₂/m²/s.', '14.9 µmol CO₂/m²/s.'],
        correctIndex: 2,
        explanation: 'Under red light, the rate was 9.4 at 200 µmol/m²/s and 13.8 at 400 µmol/m²/s. A photon flux of 300 µmol/m²/s lies between these, so the rate should be about 11.8.',
        optionExplanations: [
          'A rate of 6.5 is the value under green light at 200 µmol/m²/s. It reads the wrong color and a lower photon flux than the question describes.',
          'A rate of 9.4 is the red-light value at 200 µmol/m²/s. Because the rate kept rising with photon flux, the rate at 300 µmol/m²/s should be higher than this.',
          'Correct. The red-light rate was 9.4 at 200 µmol/m²/s and 13.8 at 400 µmol/m²/s. A value of about 11.8 falls between them, as 300 µmol/m²/s does.',
          'A rate of 14.9 is higher than the 13.8 measured under red light at 400 µmol/m²/s. A lower photon flux of 300 µmol/m²/s should not give a faster rate.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-02-q4',
        question: 'According to Table 2, as the photon flux increased from 0 µmol/m²/s to 800 µmol/m²/s, the difference between the net photosynthesis rate under red light and the rate under green light:',
        options: ['increased only.', 'increased and then decreased.', 'decreased only.', 'decreased and then increased.'],
        correctIndex: 1,
        explanation: 'The red-minus-green difference was 0 at 0 µmol/m²/s, then 1.0, 1.8, 2.9, and 3.6 as photon flux rose to 400 µmol/m²/s, and then fell to 2.9 at 800 µmol/m²/s.',
        optionExplanations: [
          'The difference did grow from 0 to 3.6 as photon flux rose to 400 µmol/m²/s, but it then shrank to 2.9 at 800 µmol/m²/s. It did not increase over the whole range.',
          'Correct. The gap between red and green grew from 0 to 3.6 as photon flux rose to 400 µmol/m²/s, then narrowed to 2.9 (16.0 − 13.1) at 800 µmol/m²/s.',
          'At 0 µmol/m²/s all three colors gave the same rate, so the difference started at 0. It could only grow from there, and it did, up to 400 µmol/m²/s.',
          'This reverses the pattern. The difference grew first, reaching 3.6 at 400 µmol/m²/s, and only then shrank, to 2.9 at 800 µmol/m²/s.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-02-q5',
        question: 'A biologist hypothesized that, among the single-color treatments, a color that produces a faster leaf photosynthesis rate at the growth photon flux of 200 µmol/m²/s will also produce plants with greater dry mass. Are the data in Tables 1 and 2 consistent with this hypothesis?',
        options: [
          'Yes; both the rate and the dry mass ranked red first, blue second, and green third.',
          'Yes; green light gave both the fastest photosynthesis rate and the greatest dry mass.',
          'No; blue light gave a faster photosynthesis rate than red light but less dry mass.',
          'No; red light gave the fastest photosynthesis rate but the smallest dry mass.',
        ],
        correctIndex: 0,
        explanation: 'At 200 µmol/m²/s, the photosynthesis rates were red 9.4, blue 8.0, and green 6.5, and the dry masses were red 2.10 g, blue 1.55 g, and green 1.20 g. The two rankings match, as the hypothesis predicts.',
        optionExplanations: [
          'Correct. At 200 µmol/m²/s, red light gave the fastest rate (9.4), then blue (8.0), then green (6.5). Dry mass followed the same order: 2.10 g, 1.55 g, and 1.20 g.',
          'Green light gave the slowest rate (6.5) and the smallest dry mass (1.20 g) of any treatment. The rankings agree, but green was last in both, not first.',
          'At 200 µmol/m²/s, blue light gave a rate of 8.0, slower than the 9.4 under red light. Blue did not beat red, so there is no mismatch here.',
          'Red light did give the fastest rate, but red-light plants had the largest dry mass of the 3 single colors (2.10 g), not the smallest.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-02-q6',
        question: 'Why did the biologists most likely give every chamber the same photon flux of 200 µmol/m²/s?',
        options: [
          'To make sure that the leaves absorbed every color of light equally well',
          'To measure the photosynthesis rate at several different light levels',
          'To make the plants in every chamber reach the same dry mass by day 28',
          'So that only the color of the light differed among chambers',
        ],
        correctIndex: 3,
        explanation: 'Holding the photon flux constant meant the chambers differed only in light color. Any difference in growth could then be attributed to color instead of to how much light the plants received.',
        optionExplanations: [
          'Equal photon flux does not make leaves absorb colors equally. The passage says chlorophyll absorbs green light less strongly than red or blue light at any flux.',
          'Measuring rates at several light levels was the goal of the second study, which varied photon flux. In the growth chambers, the flux was held at one value.',
          'The plants did not reach the same dry mass; it ranged from 1.20 g to 2.45 g. Controlling the light amount was meant to reveal differences, not to remove them.',
          'Correct. With photon flux, temperature, water, and nutrients the same in every chamber, light color was the only variable that differed, so growth differences could be credited to color.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
    ],
  },

  // ---------- Passage III: Research Summary (chemistry) ----------
  {
    id: 'act-fl2-s-03',
    title: 'Reaction Rate and Catalyst Concentration',
    kind: 'research-summary',
    text: `Hydrogen peroxide (H₂O₂) slowly decomposes into water and oxygen gas:

2H₂O₂ → 2H₂O + O₂

Iodide ions (I⁻), supplied by dissolving potassium iodide (KI) in water, *catalyze* this reaction: they speed it up without being used up. Students studied the catalyzed reaction using the following procedure.

In each trial, 20.0 mL of an H₂O₂ solution containing 0.0100 mol of H₂O₂ was placed in a flask connected to a gas syringe. Then 5.0 mL of a KI solution was added, and the flask was swirled. If all of the H₂O₂ decomposes, 0.0050 mol of O₂ forms, which occupies about 122 mL at 25°C and 1 atm. All gas volumes were measured at 25°C and 1 atm. Each KI concentration given below is the concentration of KI in the 25.0 mL reaction mixture.

**Experiment 1**

Trials were run at 25°C with 6 KI concentrations. The students recorded the volume of O₂ collected during the first 5.0 minutes and the total volume collected after 24 hours (Table 1).

**Table 1**

| KI concentration (M) | O₂ collected in first 5.0 min (mL) | O₂ collected after 24 h (mL) |
|---|---|---|
| 0.025 | 10 | 121 |
| 0.050 | 19 | 122 |
| 0.10 | 36 | 122 |
| 0.20 | 61 | 121 |
| 0.40 | 91 | 122 |
| 0.80 | 114 | 122 |

**Experiment 2**

Trials were run at 25°C with the same 6 KI concentrations. This time the students recorded the time needed to collect the first 10.0 mL of O₂ (Table 2).

**Table 2**

| KI concentration (M) | Time to collect 10.0 mL of O₂ (s) |
|---|---|
| 0.025 | 297 |
| 0.050 | 149 |
| 0.10 | 74 |
| 0.20 | 37 |
| 0.40 | 19 |
| 0.80 | 9 |

**Experiment 3**

Trials were run with a KI concentration of 0.10 M while the flask sat in a water bath at 1 of 4 temperatures. The gas syringe was kept at 25°C. The students recorded the time needed to collect the first 10.0 mL of O₂ (Table 3).

**Table 3**

| Temperature (°C) | Time to collect 10.0 mL of O₂ (s) |
|---|---|
| 15 | 162 |
| 25 | 74 |
| 35 | 36 |
| 45 | 18 |`,
    questions: [
      {
        id: 'act-fl2-s-03-q1',
        question: 'According to Table 1, when the KI concentration was doubled from 0.10 M to 0.20 M, the volume of O₂ collected in the first 5.0 min increased by:',
        options: ['17 mL.', '25 mL.', '30 mL.', '61 mL.'],
        correctIndex: 1,
        explanation: 'The volume collected in the first 5.0 min was 36 mL at 0.10 M and 61 mL at 0.20 M, an increase of 61 − 36 = 25 mL.',
        optionExplanations: [
          'An increase of 17 mL is the change from 0.050 M to 0.10 M (36 − 19). That is the doubling one row earlier in Table 1.',
          'Correct. At 0.10 M, 36 mL of O₂ was collected in the first 5.0 min, and at 0.20 M, 61 mL was collected. The increase is 25 mL.',
          'An increase of 30 mL is the change from 0.20 M to 0.40 M (91 − 61). That is the doubling one row later in Table 1.',
          'Sixty-one milliliters is the total volume collected at 0.20 M, not the increase. The 36 mL already collected at 0.10 M must be subtracted.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-03-q2',
        question: 'If Experiment 3 had included a trial at 30°C, the time needed to collect 10.0 mL of O₂ would most likely have been:',
        options: ['greater than 162 s.', 'between 74 s and 162 s.', 'between 36 s and 74 s.', 'less than 36 s.'],
        correctIndex: 2,
        explanation: 'In Table 3, the time fell as temperature rose, from 74 s at 25°C to 36 s at 35°C. A temperature of 30°C lies between those, so its time should be between 36 s and 74 s.',
        optionExplanations: [
          'A time above 162 s would be slower than the 15°C trial. Since warmer trials collected gas faster, a 30°C trial should be much faster than this.',
          'Times between 74 s and 162 s belong to temperatures between 15°C and 25°C. A 30°C trial is warmer than 25°C, so it should take less than 74 s.',
          'Correct. The time was 74 s at 25°C and 36 s at 35°C. Because 30°C lies between these temperatures, its time should fall between 36 s and 74 s.',
          'A time below 36 s would be faster than the 35°C trial. A cooler 30°C trial should be slower than that, not faster.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-03-q3',
        question: 'Suppose a trial had been run in Experiment 1 with a KI concentration of 1.60 M. The volume of O₂ collected in the first 5.0 min would most likely have been:',
        options: ['between 114 mL and 122 mL.', 'between 122 mL and 150 mL.', 'between 150 mL and 200 mL.', 'about 228 mL.'],
        correctIndex: 0,
        explanation: 'The 5.0-min volume rose more and more slowly as KI increased, approaching 122 mL, the most O₂ the H₂O₂ can produce. At 1.60 M, it should be just above 114 mL but no more than 122 mL.',
        optionExplanations: [
          'Correct. The volume at 0.80 M was already 114 mL, and the gains were shrinking as KI increased. Because 0.0100 mol of H₂O₂ can produce only about 122 mL of O₂, the value must stay at or below 122 mL.',
          'No trial can collect more than about 122 mL, because that is all the O₂ that 0.0100 mol of H₂O₂ can form. Table 1\'s 24-hour totals never exceeded 122 mL.',
          'Volumes this large would require more H₂O₂ than the flask contained. A catalyst speeds the reaction but cannot raise the total O₂ above about 122 mL.',
          'This doubles the 114 mL collected at 0.80 M, assuming volume is proportional to KI concentration. The 5.0-min volume grew less and less with each doubling, and it cannot exceed 122 mL.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-03-q4',
        question: 'How did the design of Experiment 3 differ from the design of Experiment 2?',
        options: [
          'In Experiment 3, the KI concentration was varied and the temperature was held constant.',
          'In Experiment 3, the O₂ volume after 5.0 min was measured instead of a time.',
          'In Experiment 3, a different catalyst was used in place of potassium iodide.',
          'In Experiment 3, the temperature was varied and the KI concentration was held constant.',
        ],
        correctIndex: 3,
        explanation: 'Experiment 2 varied the KI concentration at a constant 25°C. Experiment 3 held the KI concentration at 0.10 M and varied the temperature from 15°C to 45°C.',
        optionExplanations: [
          'This describes Experiment 2, not Experiment 3. In Experiment 2, the KI concentration changed from 0.025 M to 0.80 M while every trial was run at 25°C.',
          'Both Experiment 2 and Experiment 3 measured the time to collect 10.0 mL of O₂. The 5.0-min volume was the measurement in Experiment 1.',
          'All three experiments used KI as the catalyst. Experiment 3 used the same 0.10 M KI concentration in every trial.',
          'Correct. Experiment 3 kept the KI concentration at 0.10 M and changed the water-bath temperature, while Experiment 2 kept the temperature at 25°C and changed the KI concentration.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-03-q5',
        question: 'In Experiment 2, each doubling of the KI concentration about halved the time needed to collect 10.0 mL of O₂. In Experiment 1, however, the O₂ collected in the first 5.0 min rose by smaller amounts at the highest KI concentrations. Which of the following best explains this difference?',
        options: [
          'At high concentrations, KI stopped acting as a catalyst and was used up.',
          'At high concentrations, the reaction mixture cooled and the reaction slowed.',
          'At high concentrations, the KI absorbed some of the O₂ as it was produced.',
          'At high concentrations, most H₂O₂ was used up within 5.0 min.',
        ],
        correctIndex: 3,
        explanation: 'At high KI concentrations the reaction was so fast that most of the H₂O₂ decomposed before 5.0 min had passed, so the 5.0-min volume could only approach the 122 mL maximum. Experiment 2 timed just the first 10.0 mL, when plenty of H₂O₂ remained.',
        optionExplanations: [
          'If KI had stopped catalyzing, the time to collect 10.0 mL would not have kept halving at the highest concentrations in Experiment 2. Also, a catalyst is not used up by the reaction.',
          'Nothing in the experiments suggests the mixture cooled. In Experiment 3, cooler mixtures reacted more slowly, but no trial in Experiment 1 was cooled.',
          'If KI absorbed O₂, the 24-hour totals would fall below 122 mL at high KI concentrations. Instead they stayed at 121 to 122 mL at every concentration.',
          'Correct. At 0.80 M, 114 of the possible 122 mL had already formed within 5.0 min, so little H₂O₂ was left to react. Experiment 2 measured only the first 10.0 mL, before the H₂O₂ ran low.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
      {
        id: 'act-fl2-s-03-q6',
        question: 'In Experiment 1, the students measured the O₂ collected after 24 hours most likely to determine whether the KI concentration affected:',
        options: [
          'how quickly the first 10.0 mL of O₂ formed.',
          'the total amount of O₂ that the H₂O₂ produced.',
          'the temperature of the reaction mixture.',
          'the amount of H₂O₂ placed in the flask.',
        ],
        correctIndex: 1,
        explanation: 'After 24 hours the reaction was complete in every trial, so the 24-hour volume shows the total O₂ produced. It was about 122 mL at every KI concentration, showing that the catalyst changed the rate but not the amount of product.',
        optionExplanations: [
          'The time to form the first 10.0 mL was measured in Experiment 2. A reading taken after 24 hours, long after the reaction ended, cannot show how fast it started.',
          'Correct. By 24 hours the reaction had finished, so this volume shows the total O₂ formed. It stayed near 122 mL at every KI concentration, so the catalyst did not change the amount of product.',
          'Temperature was held at 25°C throughout Experiment 1 and was varied only in Experiment 3. The 24-hour volume says nothing about temperature.',
          'The amount of H₂O₂ was chosen by the students, 0.0100 mol in every trial. It was a controlled variable, not something the KI concentration could affect.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-03-q7',
        question: 'A student suggested that the potassium ions (K⁺) in KI, not the iodide ions, catalyze the decomposition. Which of the following trials, run with the procedure of Experiment 2 at 25°C, would best test this suggestion?',
        options: [
          'Replacing the 0.20 M KI with 0.20 M KNO₃, which supplies K⁺ but no I⁻',
          'Repeating the 0.20 M KI trial at 35°C instead of at 25°C',
          'Repeating the 0.20 M KI trial with twice as much H₂O₂ in the flask',
          'Adding a 1.60 M KI trial to extend the range of Table 2',
        ],
        correctIndex: 0,
        explanation: 'Potassium nitrate supplies the same concentration of K⁺ without any iodide. If K⁺ were the catalyst, this trial would produce O₂ about as fast as 0.20 M KI; if it produced O₂ far more slowly, iodide is the catalyst.',
        optionExplanations: [
          'Correct. A KNO₃ trial keeps the K⁺ but removes the I⁻. If O₂ still formed quickly, K⁺ would be the catalyst; if it formed very slowly, the iodide ions must be responsible.',
          'Changing the temperature tests how temperature affects the rate, which Experiment 3 already did. Both K⁺ and I⁻ would still be present, so their roles could not be separated.',
          'Adding more H₂O₂ changes the amount of reactant, not the catalyst. Every trial would still contain both K⁺ and I⁻, so the suggestion would go untested.',
          'A higher KI concentration adds more K⁺ and more I⁻ together. Because the two ions always rise in step, this trial cannot show which one is the catalyst.',
        ],
        skill: 'SIN',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage IV: Research Summary (physics) ----------
  {
    id: 'act-fl2-s-04',
    title: 'Friction on an Inclined Plane',
    kind: 'research-summary',
    text: `When a block rests on a tilted board, friction acts along the board's surface and keeps the block from sliding. The *coefficient of static friction* (μs) is the greatest static friction force the surfaces can provide divided by the *normal force*, the force pressing the block against the board. If a board is tilted slowly until a block on it just begins to slide, μs equals the tangent of the board's angle at that moment. Similarly, if a block slides down the board at a constant speed after a light tap, the *coefficient of kinetic friction* (μk) equals the tangent of the board's angle.

Students used a pine board hinged at one end and a pine block measuring 5 cm × 12 cm × 16 cm, with a mass of 400 g. In every trial, the longer edge of the face touching the board pointed straight down the slope. Each angle was measured 5 times, and the average was recorded.

**Experiment 1**

The block rested on its largest face (12 cm × 16 cm). Flat brass plates were taped, centered, to the block's top face to change the total mass. For each total mass, the board was raised slowly until the block began to slide (Table 1).

**Table 1**

| Total mass (g) | Angle when sliding began (°) | Maximum static friction force (N) | μs |
|---|---|---|---|
| 400 | 26.4 | 1.74 | 0.50 |
| 600 | 26.6 | 2.63 | 0.50 |
| 800 | 26.5 | 3.50 | 0.50 |
| 1,000 | 26.6 | 4.39 | 0.50 |

**Experiment 2**

The 400 g block, with no added weights, was placed on each of its 3 different faces in turn, and the board was raised slowly until the block began to slide (Table 2).

**Table 2**

| Face touching the board | Contact area (cm²) | Angle when sliding began (°) | μs |
|---|---|---|---|
| 12 cm × 16 cm | 192 | 26.4 | 0.50 |
| 5 cm × 16 cm | 80 | 26.6 | 0.50 |
| 5 cm × 12 cm | 60 | 26.5 | 0.50 |

**Experiment 3**

The largest face of the 400 g block was covered with a thin layer of one of 4 materials or left bare. For each surface, the students found the angle at which the block began to slide and the angle at which the block, after a light tap, slid down the board at a constant speed (Table 3).

**Table 3**

| Surface of block | Angle when sliding began (°) | μs | Angle for constant-speed sliding (°) | μk |
|---|---|---|---|---|
| Bare pine | 26.4 | 0.50 | 16.7 | 0.30 |
| Plastic laminate | 14.0 | 0.25 | 9.6 | 0.17 |
| Felt | 21.8 | 0.40 | 14.0 | 0.25 |
| Sandpaper | 35.0 | 0.70 | 28.8 | 0.55 |
| Rubber | 45.0 | 1.00 | 36.9 | 0.75 |`,
    questions: [
      {
        id: 'act-fl2-s-04-q1',
        question: 'According to Table 1, when the total mass was doubled from 400 g to 800 g, the maximum static friction force:',
        options: ['stayed about the same.', 'decreased by about half.', 'about doubled.', 'increased about fourfold.'],
        correctIndex: 2,
        explanation: 'The maximum static friction force was 1.74 N at 400 g and 3.50 N at 800 g. Since 3.50 is about 2 × 1.74, the force about doubled.',
        optionExplanations: [
          'The angle and μs stayed about the same, but the friction force did not. It rose from 1.74 N to 3.50 N as the mass doubled.',
          'The friction force went up, not down, as mass was added. It grew from 1.74 N at 400 g to 3.50 N at 800 g.',
          'Correct. The friction force was 1.74 N at 400 g and 3.50 N at 800 g, and 3.50 N is about twice 1.74 N. Doubling the mass doubled the normal force and the friction.',
          'A fourfold increase would take the force to about 7 N. The force at 800 g was 3.50 N, only about twice the 1.74 N at 400 g.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-04-q2',
        question: 'According to Table 3, for which surface did the block begin to slide at an angle greater than 30° but slide at a constant speed at an angle less than 30°?',
        options: ['Bare pine', 'Sandpaper', 'Rubber', 'Felt'],
        correctIndex: 1,
        explanation: 'With sandpaper, the block began to slide at 35.0° and slid at constant speed at 28.8°. Only sandpaper had one angle above 30° and the other below 30°.',
        optionExplanations: [
          'With bare pine, both angles were below 30°: 26.4° to start sliding and 16.7° for constant-speed sliding. Neither angle exceeded 30°.',
          'Correct. The sandpaper-covered block began to slide at 35.0°, above 30°, and slid at constant speed at 28.8°, below 30°. It is the only surface that meets both conditions.',
          'With rubber, both angles were above 30°: 45.0° to start sliding and 36.9° for constant-speed sliding. The second angle is not below 30°.',
          'With felt, both angles were well below 30°: 21.8° to start sliding and 14.0° for constant-speed sliding. Neither angle exceeded 30°.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-04-q3',
        question: 'Experiment 2 was most likely designed to determine whether the coefficient of static friction depends on:',
        options: [
          'the mass of the block.',
          'the material covering the block.',
          'the tilt angle of the board.',
          'the area of the block touching the board.',
        ],
        correctIndex: 3,
        explanation: 'In Experiment 2, the same 400 g block was placed on faces with contact areas of 192, 80, and 60 cm². Only the contact area changed, so the experiment tested whether μs depends on contact area.',
        optionExplanations: [
          'Mass was the variable in Experiment 1. In Experiment 2, the block\'s mass stayed at 400 g in every trial.',
          'Surface material was the variable in Experiment 3. In Experiment 2, every face was bare pine.',
          'The tilt angle was what the students measured in every experiment, not a variable they chose to test. It was the result that revealed μs.',
          'Correct. The students placed the same 400 g block on faces with areas of 192, 80, and 60 cm². Contact area was the only thing that changed from trial to trial.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-04-q4',
        question: 'A student claimed that heavier objects need a steeper incline before they begin to slide. Do the results of Experiment 1 support this claim?',
        options: [
          'No; the block began to slide at about 26.5° at every total mass.',
          'No; the block began to slide at smaller angles as mass rose.',
          'Yes; the maximum static friction force grew as mass increased.',
          'Yes; the block began to slide at larger angles as mass rose.',
        ],
        correctIndex: 0,
        explanation: 'From 400 g to 1,000 g, the angle at which sliding began stayed between 26.4° and 26.6°. Heavier blocks did not need a steeper incline, so the claim is not supported.',
        optionExplanations: [
          'Correct. The sliding angle was 26.4°, 26.6°, 26.5°, and 26.6° for the 4 masses, essentially unchanged. Adding mass did not require a steeper board.',
          'The answer "No" is right, but the reason is wrong. The angle did not shrink as mass increased; it stayed between 26.4° and 26.6°.',
          'The friction force did grow with mass, but so did the downhill pull of gravity, by the same proportion. The angle needed to start sliding therefore stayed the same.',
          'The sliding angle did not grow with mass. It varied only from 26.4° to 26.6°, a spread too small to show a trend.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-04-q5',
        question: 'The students most likely measured each angle 5 times and recorded the average in order to:',
        options: [
          'keep the normal force on the block the same in every trial.',
          'make the static friction force larger in each trial.',
          'find both μs and μk from one set of measurements.',
          'reduce the effect of random measurement errors.',
        ],
        correctIndex: 3,
        explanation: 'Small, random errors occur each time an angle is read. Averaging repeated measurements reduces their effect and makes the recorded value more reliable.',
        optionExplanations: [
          'Repeating a measurement does not change the normal force, which depends on the block\'s mass and the board\'s angle, not on how many times the angle is read.',
          'Repeating a trial does not change the friction force between the surfaces. The friction depends on the materials and the normal force, not on how often it is measured.',
          'Averaging 5 trials combines several measurements of one quantity; it does not turn one measurement into two. μs and μk came from two different angles.',
          'Correct. Each reading of the angle can be slightly off in a random direction. Averaging 5 readings lets those errors partly cancel, giving a more reliable value.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-04-q6',
        question: 'Suppose the students covered the 5 cm × 16 cm face of the block with felt, rested the block on that face, added flat brass plates to bring the total mass to 1,000 g, and slowly raised the board. Based on Experiments 1–3, the block would most likely begin to slide at an angle of about:',
        options: ['14.0°.', '21.8°.', '26.5°.', '35.0°.'],
        correctIndex: 1,
        explanation: 'Experiments 1 and 2 show that the sliding angle does not depend on mass or contact area. Experiment 3 shows that a felt surface begins to slide at 21.8°, so the angle should still be about 21.8°.',
        optionExplanations: [
          'An angle of 14.0° is the constant-speed sliding angle for felt, which reflects μk. The question asks when a block at rest begins to slide, which depends on μs.',
          'Correct. Mass (Experiment 1) and contact area (Experiment 2) did not change the sliding angle, so only the surface material matters. Felt began to slide at 21.8°.',
          'An angle of 26.5° is the sliding angle for bare pine. Covering the face with felt changes the surfaces in contact, which lowers the angle to 21.8°.',
          'An angle of 35.0° would mean that the extra mass or smaller face raised the angle. Experiments 1 and 2 showed neither one affects it, and 35.0° is the sandpaper value.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
      {
        id: 'act-fl2-s-04-q7',
        question: 'Based on Table 3, if a block surface had a μs of 0.60 on the pine board, the block would most likely begin to slide at an angle:',
        options: ['less than 21.8°.', 'between 21.8° and 26.4°.', 'between 26.4° and 35.0°.', 'greater than 35.0°.'],
        correctIndex: 2,
        explanation: 'In Table 3, the sliding angle rises with μs: bare pine (μs = 0.50) began to slide at 26.4°, and sandpaper (μs = 0.70) at 35.0°. A μs of 0.60 lies between, so its angle should be between 26.4° and 35.0°.',
        optionExplanations: [
          'Angles below 21.8° go with μs values below 0.40, such as plastic laminate (0.25). A surface with μs = 0.60 grips much better than that.',
          'Angles between 21.8° and 26.4° go with μs values between felt (0.40) and bare pine (0.50). A μs of 0.60 is above 0.50, so the angle should exceed 26.4°.',
          'Correct. Bare pine, with μs = 0.50, began to slide at 26.4°, and sandpaper, with μs = 0.70, at 35.0°. A μs of 0.60 falls between them, so its angle should too.',
          'Angles above 35.0° go with μs values above sandpaper\'s 0.70, such as rubber at 1.00. A μs of 0.60 is below 0.70, so the angle should be below 35.0°.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
    ],
  },

  // ---------- Passage V: Research Summary (biology) ----------
  {
    id: 'act-fl2-s-05',
    title: 'Beak Depth and Seed Type',
    kind: 'research-summary',
    text: `Seed-eating finches crack the hard coat of a seed in their beaks before eating the kernel inside. *Beak depth* is the height of the beak measured at its base. Biologists studied a captive population of one finch species in which beak depth ranged from about 7 mm to 12 mm.

**Study 1**

Each bird bit down on a padded force sensor 5 times, and its greatest bite force was recorded. Birds were grouped by beak depth, and the group averages are shown in Table 1.

**Table 1**

| Beak depth (mm) | Average maximum bite force (N) |
|---|---|
| 7.5 | 9 |
| 8.5 | 13 |
| 9.5 | 18 |
| 10.5 | 24 |
| 11.5 | 31 |

**Study 2**

Ten birds with shallow beaks (7.5 mm) and 10 birds with deep beaks (11.5 mm) were tested one at a time. Each bird was offered 50 seeds of a single type, and only one seed type was tested per session. Four seed types, W–Z, differed in the force needed to crack the seed coat. The biologists recorded the percent of offered seeds that each group cracked and the average *handling time*, the time from picking up a seed to swallowing its kernel (Table 2). A dash (—) means that no seeds were cracked.

**Table 2**

| Seed type | Force needed to crack seed (N) | Shallow beaks: seeds cracked (%) | Shallow beaks: handling time (s) | Deep beaks: seeds cracked (%) | Deep beaks: handling time (s) |
|---|---|---|---|---|---|
| W | 3 | 100 | 1.2 | 100 | 2.0 |
| X | 8 | 94 | 3.5 | 100 | 2.4 |
| Y | 16 | 0 | — | 100 | 4.1 |
| Z | 28 | 0 | — | 88 | 8.5 |

**Study 3**

Two identical outdoor aviaries each held 30 birds: 10 with shallow beaks (7.5 mm), 10 with medium beaks (9.5 mm), and 10 with deep beaks (11.5 mm). For 6 weeks, Aviary 1 was supplied with seeds that were 90% Seed W and 10% Seed X by mass. Aviary 2 was supplied with seeds that were 90% Seeds Y and Z and 10% Seed W by mass. Both aviaries received the same total mass of seeds each day. Each bird's change in body mass over the 6 weeks was recorded (Table 3).

**Table 3**

| Beak depth group | Average change in body mass, Aviary 1 (%) | Average change in body mass, Aviary 2 (%) |
|---|---|---|
| Shallow (7.5 mm) | +4 | −8 |
| Medium (9.5 mm) | +2 | +1 |
| Deep (11.5 mm) | +1 | +3 |`,
    questions: [
      {
        id: 'act-fl2-s-05-q1',
        question: 'Based on Table 1, a finch with a beak depth of 10.0 mm would most likely have an average maximum bite force closest to:',
        options: ['15 N.', '21 N.', '24 N.', '27 N.'],
        correctIndex: 1,
        explanation: 'Birds with 9.5 mm beaks averaged 18 N and birds with 10.5 mm beaks averaged 24 N. A beak depth of 10.0 mm lies halfway between, so its bite force should be about 21 N.',
        optionExplanations: [
          'A bite force of 15 N falls between the values for 8.5 mm (13 N) and 9.5 mm (18 N) beaks. A 10.0 mm beak is deeper than 9.5 mm, so its force should exceed 18 N.',
          'Correct. A depth of 10.0 mm lies midway between 9.5 mm (18 N) and 10.5 mm (24 N). A bite force of about 21 N fits that position.',
          'A bite force of 24 N is the value for 10.5 mm beaks. Because bite force rose with beak depth, a shallower 10.0 mm beak should bite with less force.',
          'A bite force of 27 N falls between the values for 10.5 mm (24 N) and 11.5 mm (31 N) beaks. That is too high for a beak only 10.0 mm deep.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-05-q2',
        question: 'According to Table 2, for which seed type did shallow-beaked birds have a shorter average handling time than deep-beaked birds?',
        options: ['Seed W', 'Seed X', 'Seed Y', 'Seed Z'],
        correctIndex: 0,
        explanation: 'Shallow-beaked birds handled Seed W in 1.2 s, compared with 2.0 s for deep-beaked birds. For Seed X they were slower, and they cracked no Y or Z seeds.',
        optionExplanations: [
          'Correct. Shallow-beaked birds handled Seed W in 1.2 s on average, while deep-beaked birds took 2.0 s. It is the only seed for which shallow beaks were faster.',
          'For Seed X, shallow-beaked birds took 3.5 s, longer than the 2.4 s taken by deep-beaked birds. Here the deep beaks were faster.',
          'Shallow-beaked birds cracked none of the Seed Y offered, so they have no handling time to compare. Only deep-beaked birds ate Seed Y.',
          'Shallow-beaked birds cracked none of the Seed Z offered, so no handling time was recorded for them. Seed Z was the hardest seed tested.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-05-q3',
        question: 'Assume a bird can crack a seed only if its maximum bite force is greater than the force needed to crack that seed. Based on Tables 1 and 2, which is the hardest seed type that a finch with a beak depth of 9.5 mm could crack?',
        options: ['Seed W', 'Seed X', 'Seed Y', 'Seed Z'],
        correctIndex: 2,
        explanation: 'A 9.5 mm beak gives an average bite force of 18 N. That exceeds the 16 N needed for Seed Y but not the 28 N needed for Seed Z, so Seed Y is the hardest seed it could crack.',
        optionExplanations: [
          'A bird with an 18 N bite could crack Seed W, which needs only 3 N. But it could also crack harder seeds, so W is not the hardest it could manage.',
          'An 18 N bite is more than the 8 N needed for Seed X, but Seed X is not the hardest seed within reach. Seed Y, at 16 N, can also be cracked.',
          'Correct. Table 1 gives 9.5 mm beaks a bite force of 18 N. That is greater than the 16 N needed to crack Seed Y but well short of the 28 N needed for Seed Z.',
          'Seed Z needs 28 N to crack, far more than the 18 N bite of a 9.5 mm beak. Only beaks about 11 mm deep or deeper bite that hard.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-05-q4',
        question: 'In Study 2, why did the biologists most likely offer each bird only one seed type per session?',
        options: [
          'So that each bird would eat more seeds than it would in the wild',
          'So that the birds\' bite forces could be measured while they ate',
          'So that every bird would be equally hungry at the start of a test',
          'So that each result matched a single, known seed hardness',
        ],
        correctIndex: 3,
        explanation: 'With only one seed type available, every cracked seed and every handling time came from a seed of known hardness. The results could then be tied directly to that hardness.',
        optionExplanations: [
          'Offering one seed type controls which seed is eaten, not how many. The passage gives no reason to think the birds ate more than they would in the wild.',
          'Bite force was measured in Study 1 with a force sensor, not during feeding. Study 2 recorded cracking success and handling time.',
          'Offering a single seed type does nothing to control hunger. Hunger would depend on when the birds last ate, which the passage does not describe.',
          'Correct. If several seed types were offered at once, a cracked seed or a handling time could not be matched to a single hardness. Testing one type at a time makes each result clear.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-05-q5',
        question: 'In Study 3, the factor that the biologists deliberately made different in the two aviaries was the:',
        options: [
          'types of seeds supplied.',
          'number of birds housed.',
          'beak depths of birds.',
          'length of the study.',
        ],
        correctIndex: 0,
        explanation: 'Aviary 1 received mostly Seed W, and Aviary 2 received mostly Seeds Y and Z. The number of birds, the beak-depth groups, the total seed mass, and the 6-week length were the same in both.',
        optionExplanations: [
          'Correct. Aviary 1 got mostly small, soft Seed W, while Aviary 2 got mostly hard Seeds Y and Z. Seed type was the only factor the biologists set differently.',
          'Both aviaries held 30 birds, so the number of birds was kept the same. It was a controlled variable, not the one being tested.',
          'Each aviary held the same mix of 10 shallow-, 10 medium-, and 10 deep-beaked birds. Beak depth varied within each aviary, not between them.',
          'Both aviaries ran for the same 6 weeks. The length of the study was held constant so it could not explain any differences.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-05-q6',
        question: 'Suppose a drought caused a wild population of this finch species to depend mainly on large, hard seeds for several years. If beak depth is inherited, how would the population\'s average beak depth most likely change over several generations, based on Study 3?',
        options: [
          'It would decrease, because shallow-beaked birds gained body mass on hard seeds.',
          'It would stay the same, because every beak-depth group gained body mass.',
          'It would increase, because deep-beaked birds fared best on hard seeds.',
          'It would decrease, because deep-beaked birds lost body mass on hard seeds.',
        ],
        correctIndex: 2,
        explanation: 'In Aviary 2, where hard seeds dominated, deep-beaked birds gained 3% of their body mass while shallow-beaked birds lost 8%. Deep-beaked birds would be more likely to survive and reproduce, raising the average beak depth.',
        optionExplanations: [
          'In Aviary 2, shallow-beaked birds lost 8% of their body mass; they did not gain. They would be the least likely to survive and pass on their beak depth.',
          'Not every group gained in Aviary 2. Shallow-beaked birds lost 8% of their body mass, so the groups did not fare equally when hard seeds dominated.',
          'Correct. On mostly hard seeds, deep-beaked birds gained 3% while shallow-beaked birds lost 8%. Birds with deep beaks would be favored, so the average beak depth should rise.',
          'Deep-beaked birds gained 3% of their body mass in Aviary 2, the best result of any group. They did not lose mass when hard seeds dominated.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
      {
        id: 'act-fl2-s-05-q7',
        question: 'A biologist noted that finches with deeper beaks also tend to have larger bodies. To test whether beak depth itself, rather than body size, determines bite force, the biologists should compare the bite forces of birds that:',
        options: [
          'differ in both their body masses and their beak depths.',
          'have identical body masses and identical beak depths.',
          'were fed only hard seeds for several weeks beforehand.',
          'have the same body mass but different beak depths.',
        ],
        correctIndex: 3,
        explanation: 'Holding body mass constant while beak depth varies isolates beak depth. If bite force still rises with beak depth among birds of equal size, body size cannot explain the difference.',
        optionExplanations: [
          'If both body mass and beak depth differ, any difference in bite force could come from either one. This repeats the confusion the biologist wants to remove.',
          'If birds match in both body mass and beak depth, nothing differs between them. Such a comparison cannot show which factor affects bite force.',
          'Changing the birds\' diet adds a new variable instead of separating beak depth from body size. Both factors would still vary together.',
          'Correct. Holding body mass constant while beak depth varies removes body size as an explanation. Any difference in bite force could then be credited to beak depth.',
        ],
        skill: 'SIN',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage VI: Conflicting Viewpoints (earth science) ----------
  {
    id: 'act-fl2-s-06',
    title: 'What Causes Ice Ages?',
    kind: 'conflicting-viewpoints',
    text: `During the past 800,000 years, Earth's climate has repeatedly alternated between *glacial periods* (ice ages), when thick ice sheets covered much of North America and northern Europe, and warmer *interglacial periods*, such as the present one. Over this time, a full glacial cycle has lasted about 100,000 years. When water is locked up on land in ice sheets, global sea level falls.

Earth's orbit and axis change in 3 regular cycles that alter how much sunlight reaches different latitudes in different seasons (Table 1).

**Table 1**

| Orbital cycle | What changes | Approximate period (years) |
|---|---|---|
| Eccentricity | Shape of Earth's orbit, from nearly circular to slightly oval | 100,000 |
| Obliquity | Tilt of Earth's axis, between about 22.1° and 24.5° | 41,000 |
| Precession | Direction in which Earth's axis points, which shifts the season when Earth is closest to the Sun | 23,000 |

Table 2 gives approximate values reconstructed from orbital calculations, ice cores, and ocean sediments.

**Table 2**

| Time (thousands of years ago) | Average June sunlight at 65°N (W/m²) | Atmospheric CO₂ (ppm) | Global sea level compared with today (m) |
|---|---|---|---|
| 127 | 550 | 280 | +6 |
| 115 | 440 | 280 | −20 |
| 20 | 470 | 190 | −125 |
| 10 | 520 | 265 | −40 |
| 0 (preindustrial) | 480 | 280 | 0 |

Three scientists explain what causes ice ages.

**Scientist 1**

Ice ages are paced by Earth's orbital cycles. What matters is how much sunlight high northern latitudes, near 65°N, receive in summer, because that is where the great ice sheets grow. When summer sunlight there is low, summers are too cool to melt all of the snow that fell the previous winter. Snow piles up year after year and becomes ice sheets, and the bright ice reflects sunlight, cooling the region further. When summer sunlight rises again, the ice sheets melt back. Layers of ocean sediment record climate cycles with periods of about 100,000, 41,000, and 23,000 years, matching the orbital cycles.

**Scientist 2**

Orbital cycles start the changes, but carbon dioxide (CO₂) makes ice ages severe and global. The orbital cycles mainly shift sunlight between seasons and between hemispheres. The eccentricity cycle changes the total sunlight Earth receives in a year by less than 0.2%, far too little to drive a 100,000-year cycle by itself. Ice cores, however, show that CO₂ was much lower at the height of each glacial period than during interglacials. Less CO₂ weakens the greenhouse effect over the whole planet, which is why both hemispheres cooled together during glacial periods, even though precession makes summer sunlight in the two hemispheres change in opposite directions. Ice sheets begin to grow only after CO₂ has started to fall, and they reach their greatest size only when CO₂ is low.

**Scientist 3**

The oceans control ice ages. The ocean holds about 60 times as much carbon as the atmosphere, most of it in deep water. During glacial periods, colder seas, more sea ice around Antarctica, and slower mixing between deep and surface water kept more carbon stored in the deep ocean, which lowered atmospheric CO₂. The drop in CO₂ is therefore a result of ocean changes, not an independent cause. Ocean currents also move heat: the Atlantic's overturning circulation carries warm surface water northward and warms the North Atlantic region. When floods of fresh meltwater weaken this circulation, the North Atlantic region can cool by several degrees within decades, as it did about 12,900 years ago at the start of the cold period called the Younger Dryas. Shifts in ocean circulation, not changes in sunlight, decide when ice sheets grow and shrink.`,
    questions: [
      {
        id: 'act-fl2-s-06-q1',
        question: 'According to Table 2, global sea level rose by about how many meters between 20,000 years ago and 10,000 years ago?',
        options: ['40 m', '85 m', '125 m', '165 m'],
        correctIndex: 1,
        explanation: 'Sea level was 125 m below today\'s level 20,000 years ago and 40 m below today\'s level 10,000 years ago. It rose by 125 − 40 = 85 m.',
        optionExplanations: [
          'Forty meters is how far below today\'s level the sea stood 10,000 years ago. It is a single reading, not the rise between the two times.',
          'Correct. Sea level went from 125 m below today\'s level to 40 m below it. The rise was 125 − 40 = 85 m.',
          'One hundred twenty-five meters is how far below today\'s level the sea stood 20,000 years ago. The sea had not risen all the way to today\'s level by 10,000 years ago.',
          'This adds the two values (125 + 40) instead of subtracting them. Both are depths below today\'s level, so the rise is their difference.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-06-q2',
        question: 'According to Scientist 1, ice sheets begin to grow when:',
        options: [
          'summer sunlight near 65°N is too weak to melt the winter\'s snow.',
          'atmospheric CO₂ falls far below the level of an interglacial period.',
          'fresh meltwater slows the overturning circulation of the Atlantic Ocean.',
          'Earth receives less total sunlight over the course of a full year.',
        ],
        correctIndex: 0,
        explanation: 'Scientist 1 says that when summer sunlight at high northern latitudes is low, summers are too cool to melt the previous winter\'s snow, so snow builds up into ice sheets.',
        optionExplanations: [
          'Correct. Scientist 1 says that low summer sunlight near 65°N leaves summers too cool to melt the winter\'s snow, which then piles up year after year into ice sheets.',
          'Falling CO₂ is central to Scientist 2\'s explanation of severe ice ages and to Scientist 3\'s account of ocean carbon. Scientist 1 never mentions CO₂.',
          'Weakened overturning circulation is part of Scientist 3\'s viewpoint. Scientist 1 attributes ice-sheet growth to summer sunlight, not ocean currents.',
          'Scientist 1 focuses on summer sunlight at high northern latitudes, not Earth\'s yearly total. Scientist 2 notes that the yearly total barely changes.',
        ],
        skill: 'EMI',
        difficulty: 'easy',
      },
      {
        id: 'act-fl2-s-06-q3',
        question: 'Which of the following data from Table 2 most strongly support Scientist 1\'s viewpoint over Scientist 2\'s viewpoint?',
        options: [
          'At 20,000 years ago, CO₂ was 190 ppm and sea level was 125 m below today\'s.',
          'At 127,000 years ago, CO₂ was 280 ppm and sea level was 6 m above today\'s.',
          'At 10,000 years ago, June sunlight at 65°N was greater than it is today.',
          'At 115,000 years ago, sunlight hit its low and sea level fell, while CO₂ stayed at 280 ppm.',
        ],
        correctIndex: 3,
        explanation: 'By 115,000 years ago, June sunlight at 65°N had reached its lowest value in Table 2 and sea level had dropped 26 m, showing ice growth. CO₂ was still 280 ppm, unchanged since 127,000 years ago, so ice grew before CO₂ began to fall, contrary to Scientist 2\'s claim.',
        optionExplanations: [
          'Low CO₂ alongside the largest ice sheets is what Scientist 2 predicts. These data fit Scientist 2\'s claim that ice sheets are largest only when CO₂ is low.',
          'High CO₂ and high sea level during an interglacial fit both viewpoints. Sunlight was also high then, so these data cannot separate the two scientists.',
          'High sunlight 10,000 years ago, as ice sheets were melting, fits Scientist 1, but CO₂ was rising then too. Both viewpoints explain this, so it does not favor one.',
          'Correct. By 115,000 years ago, sea level had fallen from +6 m to −20 m as ice built up, while sunlight at 65°N was at its lowest value. CO₂ was still 280 ppm, unchanged from 127,000 years ago, so ice grew before CO₂ began to fall, which Scientist 2 says does not happen.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
      {
        id: 'act-fl2-s-06-q4',
        question: 'Scientist 2 would most likely cite which of the following observations about 20,000 years ago to argue that summer sunlight alone cannot explain the size of the ice sheets at that time?',
        options: [
          'June sunlight at 65°N was greater than at any other time in Table 2.',
          'CO₂ was higher than at any other time listed in Table 2.',
          'June sunlight at 65°N was similar to today\'s, but CO₂ was 90 ppm lower.',
          'Sea level was about the same as it was 115,000 years ago.',
        ],
        correctIndex: 2,
        explanation: 'Twenty thousand years ago, June sunlight at 65°N (470 W/m²) was close to today\'s (480 W/m²), yet sea level was 125 m lower. CO₂ was 190 ppm versus 280 ppm today, so low CO₂, not low sunlight, accompanied the huge ice sheets.',
        optionExplanations: [
          'Sunlight at 65°N 20,000 years ago was 470 W/m², lower than the 550 W/m² of 127,000 years ago. It was not the highest value in Table 2.',
          'CO₂ 20,000 years ago was 190 ppm, the lowest value in Table 2, not the highest. Low CO₂ is what Scientist 2 links to large ice sheets.',
          'Correct. Sunlight at 65°N was 470 W/m², close to today\'s 480 W/m², yet the ice sheets were enormous. CO₂ was 190 ppm, 90 ppm below today\'s 280 ppm, matching Scientist 2\'s claim.',
          'Sea level was −125 m 20,000 years ago but only −20 m 115,000 years ago, so the two are far from the same. This comparison also says nothing about sunlight versus CO₂.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-06-q5',
        question: 'Scientist 3 would most likely respond to Scientist 2\'s viewpoint by arguing that the drop in atmospheric CO₂ during glacial periods:',
        options: [
          'resulted from the deep ocean storing more carbon.',
          'was too small to have any effect on Earth\'s average temperature.',
          'was caused by weaker summer sunlight at about 65°N.',
          'occurred only in the Northern Hemisphere, near the ice sheets.',
        ],
        correctIndex: 0,
        explanation: 'Scientist 3 says colder seas, more Antarctic sea ice, and slower mixing kept more carbon in the deep ocean, lowering atmospheric CO₂. To Scientist 3, the CO₂ drop is a result of ocean changes, not an independent cause.',
        optionExplanations: [
          'Correct. Scientist 3 explains that during glacial periods more carbon stayed stored in the deep ocean, lowering atmospheric CO₂. The CO₂ drop is therefore a result of ocean changes.',
          'Scientist 3 never says the CO₂ drop had no effect on temperature. Scientist 3 disputes what caused the drop, not whether it mattered.',
          'Scientist 3 rejects sunlight as the factor that decides when ice sheets grow. Scientist 3 credits the CO₂ drop to the ocean, not to sunlight.',
          'Atmospheric CO₂ mixes around the whole globe. Neither Scientist 2 nor Scientist 3 claims that the drop was limited to one hemisphere.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-06-q6',
        question: 'Which of the following investigations would best help determine whether Scientist 1 or Scientist 3 is correct about what sets the timing of glacial periods?',
        options: [
          'Measuring how much carbon is stored today in deep water at several sites',
          'Dating ocean-circulation shifts relative to sunlight dips at 65°N',
          'Measuring the present tilt of Earth\'s axis more precisely than before',
          'Comparing today\'s CO₂ levels over the Northern and Southern Hemispheres',
        ],
        correctIndex: 1,
        explanation: 'Scientist 1 says summer sunlight at 65°N sets the timing; Scientist 3 says ocean circulation does. Finding whether circulation shifts came before or after drops in sunlight at the start of glacial periods would test which factor led.',
        optionExplanations: [
          'Today\'s deep-ocean carbon shows how much carbon the ocean holds now, during an interglacial. It cannot show whether sunlight or circulation changed first at the start of past glacial periods.',
          'Correct. Scientist 1 predicts that drops in summer sunlight at 65°N came first; Scientist 3 predicts that shifts in ocean circulation did. Dating the two would show which change led.',
          'Both scientists accept that orbital cycles exist. Measuring today\'s tilt more precisely would not show whether sunlight or ocean circulation set the timing of past glacial periods.',
          'Present-day CO₂ in the two hemispheres says little about past glacial periods. Neither Scientist 1 nor Scientist 3 bases the timing of ice ages on today\'s CO₂.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl2-s-06-q7',
        question: 'Which of the following findings, if true, would most weaken Scientist 1\'s viewpoint?',
        options: [
          'Ice sheets grew during periods when summer sunlight at 65°N was low.',
          'Climate cycles in ocean sediments include a period of about 41,000 years.',
          'Several glacial periods began when summer sunlight at 65°N was near a maximum.',
          'CO₂ fell at the start of glacial periods only after ice sheets began to grow.',
        ],
        correctIndex: 2,
        explanation: 'Scientist 1 claims ice sheets grow when summer sunlight at 65°N is low. Glacial periods beginning while that sunlight was near a maximum would contradict this central claim.',
        optionExplanations: [
          'Ice growing when summer sunlight at 65°N was low is exactly what Scientist 1 predicts. This finding would support the viewpoint, not weaken it.',
          'A 41,000-year cycle matches the obliquity cycle in Table 1. Scientist 1 cites such matching periods as evidence, so this finding would support the viewpoint.',
          'Correct. Scientist 1 says ice sheets grow when summer sunlight near 65°N is low. If glacial periods started when that sunlight was near a maximum, the central claim would fail.',
          'CO₂ falling only after ice began to grow suggests that something other than CO₂ started the ice growth. That fits Scientist 1\'s view that sunlight sets the timing.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
    ],
  },
]
