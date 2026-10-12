/**
 * Enhanced ACT full-length Form 1 — Science (6 passages, 40 questions, 40 minutes; optional section).
 * Passages: DR soil moisture vs crop yield · DR battery capacity vs temperature ·
 * RS enzyme activity and pH · RS pendulum period · RS rock weathering · CV why Mars lost its water.
 * Skills: IOD 18 · SIN 11 · EMI 11.
 */
import type { ActFLPassage } from './types'

export const ACT_FL1_SCIENCE: ActFLPassage[] = [
  // ---------- Passage I: Data Representation (biology / earth science) ----------
  {
    id: 'act-fl1-s-01',
    title: 'Soil Moisture and Crop Yield',
    kind: 'data-representation',
    text: `Agronomists grew corn and soybeans in 70 field plots that all had the same loam soil. Using drip irrigation and removable rain covers, they held the average growing-season soil moisture of each plot at one of 7 levels. Soil moisture is the percent of the soil's volume that is occupied by water. Five plots of each crop were assigned to each moisture level. At harvest, the agronomists measured the grain yield of each plot in metric tons per hectare (t/ha). Table 1 shows the average yields.

**Table 1**

| Soil moisture (% by volume) | Corn yield (t/ha) | Soybean yield (t/ha) |
|---|---|---|
| 10 | 3.2 | 1.1 |
| 15 | 6.0 | 2.0 |
| 20 | 8.6 | 2.9 |
| 25 | 10.4 | 3.5 |
| 30 | 11.1 | 3.3 |
| 35 | 10.2 | 2.7 |
| 40 | 7.9 | 1.9 |

Plant roots need oxygen, which they take from the air in the soil's pore spaces. During the growing season, the agronomists sampled the soil air at a depth of 15 cm in every plot and measured its oxygen concentration as a percent of the soil air by volume. Table 2 shows the average for each moisture level. For comparison, the atmosphere is about 21% oxygen.

**Table 2**

| Soil moisture (% by volume) | Oxygen in soil air (%) |
|---|---|
| 10 | 20.5 |
| 15 | 20.3 |
| 20 | 19.8 |
| 25 | 18.9 |
| 30 | 17.2 |
| 35 | 12.4 |
| 40 | 6.1 |`,
    questions: [
      {
        id: 'act-fl1-s-01-q1',
        question: 'According to Table 1, corn yield was greatest at a soil moisture of:',
        options: ['20%.', '25%.', '30%.', '35%.'],
        correctIndex: 2,
        explanation: 'Corn yield climbed to its highest value, 11.1 t/ha, at 30% soil moisture and then fell at 35% and 40%.',
        optionExplanations: [
          'At 20% moisture, corn yielded only 8.6 t/ha. Yield was still rising steeply at this level, so it had not yet reached its peak of 11.1 t/ha at 30%.',
          'At 25% moisture, corn yielded 10.4 t/ha. Twenty-five percent is where soybean yield peaked; corn yield kept rising to 11.1 t/ha at 30%, so this reads the wrong crop.',
          'Correct. Corn yielded 11.1 t/ha at 30% soil moisture, more than at any other level in Table 1, and its yield dropped at both 35% and 40%.',
          'At 35% moisture, corn yielded 10.2 t/ha, which is less than the 11.1 t/ha at 30%. Yield had already started to decline as the soil got wetter.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-01-q2',
        question: 'According to Table 1, as soil moisture increased from 25% to 40%, soybean yield:',
        options: ['decreased only.', 'increased only.', 'increased and then decreased.', 'decreased and then increased.'],
        correctIndex: 0,
        explanation: 'Soybean yield went from 3.5 to 3.3 to 2.7 to 1.9 t/ha over this range, falling at every step.',
        optionExplanations: [
          'Correct. Starting at 25%, soybean yield fell from 3.5 to 3.3, then 2.7, then 1.9 t/ha. Every increase in soil moisture in this range brought a lower yield.',
          'Soybean yield increased only over the drier range, from 10% to 25%. The question starts at 25%, the soybean peak, and yield dropped after that point.',
          'This describes the full table for soybeans, from 10% to 40%, or corn from 25% to 40%. Over the stated range, soybean yield never rose; it started at its peak.',
          'Soybean yield never turned upward again at the wettest levels. It reached its lowest value in this range, 1.9 t/ha, at 40% moisture.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-01-q3',
        question: 'Based on Table 1, if soybeans had also been grown at a soil moisture of 22%, their yield would most likely have been closest to:',
        options: ['2.5 t/ha.', '3.1 t/ha.', '3.7 t/ha.', '9.3 t/ha.'],
        correctIndex: 1,
        explanation: 'At 20% moisture soybeans yielded 2.9 t/ha and at 25% they yielded 3.5 t/ha, so a yield at 22% should fall between those values, near 3.1 t/ha.',
        optionExplanations: [
          'A yield of 2.5 t/ha falls between the soybean values at 15% and 20% moisture. Since 22% is wetter than 20%, the yield should be above 2.9 t/ha.',
          'Correct. Twenty-two percent lies between 20% (2.9 t/ha) and 25% (3.5 t/ha), closer to 20%. A value of about 3.1 t/ha fits that position in the trend.',
          'A yield of 3.7 t/ha is higher than any soybean yield in Table 1, including the peak of 3.5 t/ha at 25%. A moisture level below the peak cannot exceed it.',
          'This is about what corn would yield at 22% moisture, between 8.6 and 10.4 t/ha. The question asks about soybeans, which yielded far less than corn.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-01-q4',
        question: 'Based on Tables 1 and 2, at which soil moisture was the oxygen concentration in the soil air below 15% while corn yield was still above 10 t/ha?',
        options: ['20%', '25%', '30%', '35%'],
        correctIndex: 3,
        explanation: 'Only at 35% moisture were both conditions met: soil-air oxygen was 12.4% and corn yield was 10.2 t/ha.',
        optionExplanations: [
          'At 20% moisture, soil-air oxygen was 19.8%, well above 15%, and corn yield was 8.6 t/ha, below 10 t/ha. Neither condition is met.',
          'At 25% moisture, corn yield was above 10 t/ha (10.4), but soil-air oxygen was 18.9%, which is not below 15%. Only one condition is met.',
          'At 30% moisture, corn had its highest yield, but soil-air oxygen was 17.2%. Oxygen did not fall below 15% until the soil was wetter than this.',
          'Correct. At 35% moisture, soil-air oxygen was 12.4%, below 15%, and corn still yielded 10.2 t/ha, above 10 t/ha. Both conditions hold only here.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-01-q5',
        question: 'Suppose corn had also been grown at a soil moisture of 45%. Based on Table 1, its yield would most likely have been:',
        options: [
          'less than 7.9 t/ha.',
          'between 7.9 t/ha and 10.2 t/ha.',
          'between 10.2 t/ha and 11.1 t/ha.',
          'greater than 11.1 t/ha.',
        ],
        correctIndex: 0,
        explanation: 'Above 30% moisture, corn yield fell with each increase in moisture (11.1, 10.2, 7.9 t/ha), so continuing the trend to 45% gives a yield below 7.9 t/ha.',
        optionExplanations: [
          'Correct. Corn yield dropped from 11.1 to 10.2 to 7.9 t/ha as moisture rose from 30% to 40%, and the drops were getting larger. Extending the trend puts 45% below 7.9 t/ha.',
          'This range lies between the yields at 35% and 40%. A yield here would mean corn did better at 45% than at 40%, reversing the downward trend in the wet soils.',
          'This range lies between the yields at 30% and 35%, the wettest levels near the peak. It ignores that yield kept falling as the soil became even wetter.',
          'A yield above 11.1 t/ha would beat the best yield in the table. Past 30% moisture, wetter soil lowered corn yield, so 45% should not set a new high.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-01-q6',
        question: 'One agronomist hypothesized that crop yields fall in very wet soil because waterlogged soil supplies too little oxygen to plant roots. Are the data in Tables 1 and 2 consistent with this hypothesis?',
        options: [
          'Yes; as soil moisture rose from 10% to 30%, oxygen in the soil air fell and corn yield also fell.',
          'Yes; above 30% moisture, soil oxygen dropped sharply as both crops\' yields declined.',
          'No; oxygen in the soil air was lowest at the moisture level where corn yield was highest.',
          'No; oxygen in the soil air stayed nearly constant across all the moisture levels tested.',
        ],
        correctIndex: 1,
        explanation: 'Soil-air oxygen fell from 17.2% at 30% moisture to 12.4% and then 6.1%, while corn and soybean yields both fell over the same range, which is consistent with the hypothesis.',
        optionExplanations: [
          'The answer "Yes" is reasonable, but the reason is wrong. From 10% to 30% moisture, corn yield rose from 3.2 to 11.1 t/ha; it did not fall in that range.',
          'Correct. Above 30% moisture, oxygen fell steeply to 12.4% and then 6.1%, and corn and soybean yields both declined. Low oxygen coincides with the falling yields, as the hypothesis predicts.',
          'Oxygen was lowest, 6.1%, at 40% moisture, where corn yielded 7.9 t/ha, not its highest yield. Corn peaked at 30%, where oxygen was still 17.2%.',
          'Oxygen did not stay constant. It ranged from 20.5% in the driest soil to 6.1% in the wettest, with the steepest drop above 30% moisture.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
    ],
  },

  // ---------- Passage II: Data Representation (chemistry / physics) ----------
  {
    id: 'act-fl1-s-02',
    title: 'Battery Capacity and Temperature',
    kind: 'data-representation',
    text: `Engineers tested identical lithium-ion cells, each rated by its manufacturer at 3,000 milliampere-hours (mAh). A cell's *capacity* is the total charge it delivers while discharging from fully charged to a set cutoff voltage.

**Study 1**

Each cell was fully charged at 25°C and then held in a test chamber at one of 6 temperatures for 2 hours. The cell was then discharged at a constant current until its voltage fell to 2.5 V. Each cell was discharged at one of 2 rates: 0.5C (a current of 1,500 mA, which empties a fully charged cell in about 2 hours) or 2C (a current of 6,000 mA, which empties it in about 30 minutes). Table 1 shows the average capacity delivered.

**Table 1**

| Temperature (°C) | Capacity at 0.5C (mAh) | Capacity at 2C (mAh) |
|---|---|---|
| −20 | 1,950 | 1,380 |
| −10 | 2,340 | 1,860 |
| 0 | 2,610 | 2,250 |
| 10 | 2,820 | 2,580 |
| 25 | 2,990 | 2,830 |
| 40 | 3,030 | 2,900 |

**Study 2**

New cells were repeatedly charged and discharged at 1C (3,000 mA) while held at a constant temperature in the test chamber. After 500 complete charge–discharge cycles, each cell's capacity was measured at 25°C and 0.5C and expressed as a percent of its original capacity (Table 2).

**Table 2**

| Cycling temperature (°C) | Capacity retained after 500 cycles (%) |
|---|---|
| 0 | 81 |
| 10 | 88 |
| 25 | 91 |
| 40 | 82 |
| 55 | 64 |`,
    questions: [
      {
        id: 'act-fl1-s-02-q1',
        question: 'According to Table 1, at 0°C, the capacity delivered at 2C was how much less than the capacity delivered at 0.5C?',
        options: ['240 mAh', '360 mAh', '570 mAh', '750 mAh'],
        correctIndex: 1,
        explanation: 'At 0°C the cell delivered 2,610 mAh at 0.5C and 2,250 mAh at 2C, a difference of 2,610 − 2,250 = 360 mAh.',
        optionExplanations: [
          'A 240 mAh gap is the difference at 10°C (2,820 − 2,580). Reading the wrong row of Table 1 gives this value instead of the 0°C difference.',
          'Correct. At 0°C, the 0.5C capacity was 2,610 mAh and the 2C capacity was 2,250 mAh. Subtracting gives 360 mAh.',
          'A 570 mAh gap is the difference at −20°C (1,950 − 1,380), the coldest temperature tested. The question asks about 0°C, where the gap was smaller.',
          'This compares the 2C capacity at 0°C, 2,250 mAh, with the 3,000 mAh rating instead of with the measured 0.5C capacity of 2,610 mAh.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-02-q2',
        question: 'According to Table 1, what is the lowest temperature tested at which a cell discharged at 2C delivered at least 2,700 mAh?',
        options: ['−10°C', '0°C', '10°C', '25°C'],
        correctIndex: 3,
        explanation: 'At 2C, the capacity was 2,580 mAh at 10°C and 2,830 mAh at 25°C, so 25°C is the lowest tested temperature at which it reached 2,700 mAh.',
        optionExplanations: [
          'At −10°C, the 2C cell delivered only 1,860 mAh, far short of 2,700 mAh. Even the 0.5C cell, at 2,340 mAh, fell short at this temperature.',
          'At 0°C, the 2C cell delivered 2,250 mAh, which is 450 mAh below the 2,700 mAh target. Capacity had to rise further with warmer temperatures.',
          'At 10°C, the 0.5C cell delivered 2,820 mAh, but the 2C cell delivered only 2,580 mAh. Choosing this temperature reads the wrong column of Table 1.',
          'Correct. The 2C capacity was 2,580 mAh at 10°C and 2,830 mAh at 25°C. Twenty-five degrees is the first tested temperature at which it reached 2,700 mAh.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-02-q3',
        question: 'Based on Table 1, a cell discharged at 2C at a temperature of 5°C would most likely deliver a capacity closest to:',
        options: ['1,900 mAh.', '2,100 mAh.', '2,400 mAh.', '2,700 mAh.'],
        correctIndex: 2,
        explanation: 'At 2C, capacity was 2,250 mAh at 0°C and 2,580 mAh at 10°C. Halfway between those temperatures, the capacity should be near the midpoint, about 2,400 mAh.',
        optionExplanations: [
          'A capacity of 1,900 mAh is about what the 2C cell delivered at −10°C. At 5°C the cell is warmer than at 0°C, so it should deliver more than 2,250 mAh.',
          'A capacity of 2,100 mAh is below the 2C value at 0°C. Because capacity rose with temperature, the value at 5°C must exceed the 0°C value of 2,250 mAh.',
          'Correct. Five degrees lies halfway between 0°C (2,250 mAh) and 10°C (2,580 mAh) in the 2C column. The midpoint of those capacities is about 2,400 mAh.',
          'A capacity of 2,700 mAh is about what a cell at 5°C would deliver at the slower 0.5C rate, between 2,610 and 2,820 mAh. The question asks about 2C.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-02-q4',
        question: 'Suppose a cell had been cycled 500 times at 70°C in Study 2. Based on Table 2, the capacity it retained would most likely have been:',
        options: ['less than 64%.', 'between 64% and 82%.', 'between 82% and 91%.', 'greater than 91%.'],
        correctIndex: 0,
        explanation: 'Above 25°C, retained capacity fell as cycling temperature rose (91% to 82% to 64%), so a cell cycled at 70°C should retain less than 64%.',
        optionExplanations: [
          'Correct. Retention dropped from 91% at 25°C to 82% at 40°C and 64% at 55°C, with the drop growing larger. Continuing that trend to 70°C gives a value below 64%.',
          'This range lies between the retentions at 40°C and 55°C. A cell cycled at 70°C, hotter than 55°C, would be expected to retain less than 64%, not more.',
          'This range lies between the retentions at 25°C and 40°C, temperatures far cooler than 70°C. It ignores the steep decline above 40°C.',
          'The highest retention in Table 2 was 91%, at 25°C. Hotter cycling lowered retention, so a cell at 70°C should not beat the best value in the table.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-02-q5',
        question: 'In Study 1, which of the following variables was deliberately changed by the engineers in addition to temperature?',
        options: [
          'The rated capacity of the cell',
          'The capacity delivered by the cell',
          'The number of charge–discharge cycles',
          'The rate at which the cell was discharged',
        ],
        correctIndex: 3,
        explanation: 'The engineers chose to discharge each cell at either 0.5C or 2C, so discharge rate was a second independent variable in Study 1.',
        optionExplanations: [
          'Every cell was rated at 3,000 mAh by its manufacturer. Because the cells were identical, rated capacity was held constant rather than changed.',
          'Capacity delivered is what the engineers measured as the outcome of each trial. It is the dependent variable, not a variable they set.',
          'The number of charge–discharge cycles was the focus of Study 2, which ran 500 cycles. Study 1 measured a single discharge of each fully charged cell.',
          'Correct. Each cell in Study 1 was discharged at either 0.5C or 2C, as the two capacity columns in Table 1 show. The engineers chose this rate on purpose.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-02-q6',
        question: 'An engineer claims that, compared with operating a cell at 40°C, operating it at 25°C gives slightly less capacity on each discharge but preserves more capacity over many cycles. Do the results of Studies 1 and 2 support this claim?',
        options: [
          'Yes; at 25°C, both the capacity on one discharge and the capacity retained were higher than at 40°C.',
          'Yes; at 25°C, the capacity on one discharge was lower than at 40°C, but the capacity retained was higher.',
          'No; at 25°C, the capacity on one discharge was higher than at 40°C at both discharge rates.',
          'No; at 25°C, the capacity retained after 500 cycles was lower than at 40°C.',
        ],
        correctIndex: 1,
        explanation: 'Single-discharge capacity at 25°C (2,990 and 2,830 mAh) was slightly below that at 40°C (3,030 and 2,900 mAh), while retention was 91% at 25°C versus 82% at 40°C.',
        optionExplanations: [
          'The capacity retained was higher at 25°C (91% versus 82%), but single-discharge capacity was lower at 25°C than at 40°C at both rates, so this reason misreads Table 1.',
          'Correct. At 25°C, a cell delivered 2,990 mAh at 0.5C versus 3,030 mAh at 40°C, slightly less, yet it retained 91% of its capacity after 500 cycles versus 82% at 40°C.',
          'Table 1 shows the opposite: at both 0.5C and 2C, the 40°C cell delivered slightly more capacity than the 25°C cell. The claim\'s first part is supported.',
          'Table 2 shows the opposite: cells cycled at 25°C retained 91% of their capacity, while cells cycled at 40°C retained only 82%.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage III: Research Summary (biology) ----------
  {
    id: 'act-fl1-s-03',
    title: 'Enzyme Activity and pH',
    kind: 'research-summary',
    text: `*Catalase* is an enzyme that speeds the breakdown of hydrogen peroxide (H₂O₂) into water and oxygen gas (O₂). *Pepsin* and *trypsin* are enzymes that break down proteins; pepsin is secreted into the stomach, and trypsin is secreted into the small intestine. Students performed 3 experiments to study how pH affects the activity of these enzymes.

**Experiment 1**

A catalase extract was made by blending 20 g of raw potato with 100 mL of distilled water and filtering the mixture. For each of 9 pH values, test tubes received 5 mL of 3% H₂O₂ solution containing a buffer that held the solution at that pH. Each tube was placed in a 25°C water bath, 1 mL of extract was added, and the O₂ released during the next 2 minutes was collected and its volume measured. Each pH was tested in 3 trials, and the results were averaged (Table 1).

An additional tube, buffered at pH 7, received 1 mL of extract that had first been boiled for 5 minutes. It released 0.2 mL of O₂ in 2 minutes.

**Table 1**

| pH | O₂ collected in 2 min (mL) |
|---|---|
| 3 | 1.2 |
| 4 | 3.8 |
| 5 | 8.5 |
| 6 | 13.9 |
| 7 | 16.4 |
| 8 | 14.1 |
| 9 | 9.0 |
| 10 | 4.3 |
| 11 | 1.5 |

**Experiment 2**

Cooked egg white was blended into water, forming a cloudy suspension of protein. Tubes of the suspension were buffered at 7 different pH values and held at 37°C. Either 1 mL of pepsin solution or 1 mL of trypsin solution was added to each tube, and the students recorded the time needed for the suspension to turn clear, which happens once the protein has been broken down. A tube still cloudy after 60 minutes was recorded as ">60" (Table 2).

**Table 2**

| pH | Time to clear with pepsin (min) | Time to clear with trypsin (min) |
|---|---|---|
| 1 | 9 | >60 |
| 2 | 6 | >60 |
| 3 | 11 | >60 |
| 4 | 24 | 52 |
| 6 | >60 | 21 |
| 8 | >60 | 8 |
| 10 | >60 | 17 |

**Experiment 3**

Three 10 mL samples of the catalase extract from Experiment 1 were adjusted to pH 3, pH 7, or pH 11 and held at 25°C for 10 minutes. Each sample was then readjusted to pH 7, and 1 mL of it was tested as in Experiment 1 at pH 7 (Table 3).

**Table 3**

| pH during 10-minute hold | O₂ collected in 2 min after return to pH 7 (mL) |
|---|---|
| 3 | 4.1 |
| 7 | 16.2 |
| 11 | 5.0 |`,
    questions: [
      {
        id: 'act-fl1-s-03-q1',
        question: 'According to Table 1, catalase activity, as measured by the volume of O₂ collected, was greatest at which pH?',
        options: ['pH 5', 'pH 6', 'pH 7', 'pH 8'],
        correctIndex: 2,
        explanation: 'The most O₂, 16.4 mL, was collected at pH 7; less was collected at every pH above or below it.',
        optionExplanations: [
          'At pH 5, only 8.5 mL of O₂ was collected, about half the amount at pH 7. Activity was still rising as pH increased toward 7.',
          'At pH 6, 13.9 mL of O₂ was collected. This is high, but it is less than the 16.4 mL at pH 7, so activity had not yet peaked.',
          'Correct. The tube at pH 7 released 16.4 mL of O₂ in 2 minutes, the largest volume in Table 1. Activity was lower at both pH 6 and pH 8.',
          'At pH 8, 14.1 mL of O₂ was collected, the second-highest value in Table 1. It is still below the 16.4 mL measured at pH 7.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-03-q2',
        question: 'In Experiment 2, at which of the following pH values did both pepsin and trypsin clear the suspension within 60 minutes?',
        options: ['pH 3', 'pH 4', 'pH 6', 'pH 8'],
        correctIndex: 1,
        explanation: 'At pH 4, pepsin cleared the suspension in 24 minutes and trypsin in 52 minutes; at every other pH listed, one of the two enzymes took more than 60 minutes.',
        optionExplanations: [
          'At pH 3, pepsin cleared the suspension in 11 minutes, but the trypsin tube was still cloudy after 60 minutes. Only one enzyme met the condition.',
          'Correct. At pH 4, pepsin cleared the suspension in 24 minutes and trypsin cleared it in 52 minutes. This is the only listed pH at which both finished within an hour.',
          'At pH 6, trypsin cleared the suspension in 21 minutes, but pepsin had not cleared it after 60 minutes. Pepsin works only in acidic solutions.',
          'At pH 8, trypsin worked fastest, clearing the suspension in 8 minutes, but pepsin had not cleared it after 60 minutes. Only one enzyme was active.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-03-q3',
        question: 'In Experiment 1, the students most likely included the tube with boiled extract in order to:',
        options: [
          'find the pH at which catalase is most active.',
          'measure how much O₂ the potato itself contains.',
          'test whether heating speeds up the breakdown of H₂O₂.',
          'show that the O₂ released depended on active catalase.',
        ],
        correctIndex: 3,
        explanation: 'Boiling destroys the enzyme. Because the boiled-extract tube released almost no O₂ (0.2 mL versus 16.4 mL), the tube serves as a control showing that active catalase caused the O₂ release.',
        optionExplanations: [
          'The pH of greatest activity was found by comparing the 9 tubes in Table 1. The boiled-extract tube was tested at only one pH, so it cannot locate an optimum.',
          'The tube was not designed to measure gas stored in the potato. It contained H₂O₂, and its purpose was to compare inactive extract with active extract at pH 7.',
          'The tube was boiled before the test but then run at 25°C like the others, so it does not test a hotter reaction. Boiling destroyed the enzyme instead of speeding the reaction.',
          'Correct. Boiling denatures catalase. With inactive extract, only 0.2 mL of O₂ formed, compared with 16.4 mL with active extract at pH 7, so the O₂ came from catalase activity.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-03-q4',
        question: 'In Experiment 2, the dependent variable was the:',
        options: [
          'time for the suspension to turn clear.',
          'pH of the buffered suspension.',
          'enzyme added to the suspension.',
          'temperature of the suspension.',
        ],
        correctIndex: 0,
        explanation: 'The students set the pH and the enzyme and then measured how long the suspension took to clear, so clearing time was the dependent variable.',
        optionExplanations: [
          'Correct. The students measured the time the suspension needed to turn clear in each tube. That outcome depended on the pH and enzyme they chose, so it is the dependent variable.',
          'The students chose the pH of each tube in advance by adding a buffer. pH was an independent variable that they set, not a result they measured.',
          'The students decided whether each tube received pepsin or trypsin. The type of enzyme was set by the students, so it was an independent variable.',
          'Every tube was held at 37°C throughout Experiment 2. Temperature was a controlled variable kept the same in all tubes, not a measured outcome.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-03-q5',
        question: 'The students want to pinpoint the pH at which catalase is most active more precisely. Which of the following pairs of pH values should they test next, using the procedure of Experiment 1?',
        options: ['pH 2 and pH 2.5', 'pH 6.5 and pH 7.5', 'pH 9.5 and pH 10.5', 'pH 11.5 and pH 12'],
        correctIndex: 1,
        explanation: 'Table 1 shows activity peaking at pH 7, with high values at pH 6 and 8, so the true optimum lies between pH 6 and pH 8. Testing pH 6.5 and 7.5 narrows it down.',
        optionExplanations: [
          'These values lie below pH 3, where catalase was already nearly inactive (1.2 mL of O₂). They extend the curve away from the peak instead of narrowing it.',
          'Correct. The greatest activity occurred at pH 7, with lower activity at pH 6 and pH 8, so the optimum lies between pH 6 and pH 8. Testing pH 6.5 and 7.5 brackets the peak more closely.',
          'Activity at pH 9 and pH 10 was already well below the peak (9.0 and 4.3 mL). Testing between them would not locate the pH of greatest activity.',
          'These values lie above pH 11, where catalase produced only 1.5 mL of O₂. Testing even more basic solutions moves farther from the peak.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-03-q6',
        question: 'A student hypothesized that the drop in catalase activity at extreme pH is completely reversed once the extract is returned to pH 7. Do the results of Experiment 3 support this hypothesis?',
        options: [
          'Yes; extract held at pH 3 or pH 11 released as much O₂ as extract held at pH 7.',
          'Yes; extract held at pH 7 released about the same volume of O₂ as in Experiment 1.',
          'No; extract held at pH 3 or pH 11 released more O₂ than extract held at pH 7.',
          'No; extract held at pH 3 or pH 11 released far less O₂ than the pH 7 extract.',
        ],
        correctIndex: 3,
        explanation: 'After being returned to pH 7, extract held at pH 3 or 11 released only 4.1 or 5.0 mL of O₂, versus 16.2 mL for extract held at pH 7, so most of the lost activity was not recovered.',
        optionExplanations: [
          'Table 3 contradicts this. Extract held at pH 3 released 4.1 mL and extract held at pH 11 released 5.0 mL, far less than the 16.2 mL from extract held at pH 7.',
          'The pH 7 result (16.2 mL) does match Experiment 1 (16.4 mL), but it says nothing about recovery. Only the pH 3 and pH 11 samples test whether activity comes back.',
          'The answer "No" is right, but the reason misreads Table 3. The extract held at extreme pH released less O₂, not more, than the extract held at pH 7.',
          'Correct. Even after returning to pH 7, extract held at pH 3 or pH 11 released only 4.1 or 5.0 mL of O₂, compared with 16.2 mL. Most of the activity did not return.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-03-q7',
        question: 'Suppose each protein-digesting enzyme works best at about the pH of the organ into which it is secreted. Based on Experiment 2, which organ is more acidic, and why?',
        options: [
          'The stomach, because pepsin worked fastest at about pH 2 and trypsin at about pH 8.',
          'The stomach, because pepsin worked fastest at about pH 8 and trypsin at about pH 2.',
          'The small intestine, because trypsin worked fastest at about pH 2.',
          'The small intestine, because trypsin worked fastest at about pH 8.',
        ],
        correctIndex: 0,
        explanation: 'Pepsin cleared the suspension fastest at pH 2 (6 minutes) and trypsin at pH 8 (8 minutes). Pepsin is secreted into the stomach, so the stomach is the more acidic organ.',
        optionExplanations: [
          'Correct. Pepsin was fastest at pH 2 and trypsin at pH 8. Since pepsin acts in the stomach and trypsin in the small intestine, the stomach should have the lower, more acidic pH.',
          'The organ is right, but the enzymes are reversed. Pepsin had not cleared the suspension at pH 8 after 60 minutes; it worked fastest at pH 2.',
          'Trypsin never cleared the suspension at pH 2; that tube stayed cloudy for more than 60 minutes. This reverses the trypsin data and names the wrong organ.',
          'Trypsin did work fastest at pH 8, but pH 8 is basic, not acidic. That result points to the small intestine being less acidic than the stomach.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage IV: Research Summary (physics) ----------
  {
    id: 'act-fl1-s-04',
    title: 'Pendulum Period',
    kind: 'research-summary',
    text: `The *period* of a pendulum is the time it takes to complete one full back-and-forth swing. Students built pendulums by hanging a metal bob from a light string tied to a fixed clamp. The *length* of a pendulum was measured from the clamp to the center of the bob. In each trial, the bob was pulled aside until the string made a chosen angle with the vertical (the *release angle*) and then released from rest. The students used a stopwatch to time 10 complete swings and divided that time by 10 to find the period.

**Experiment 1**

The length was 1.00 m and the release angle was 10°. Bobs of 4 different masses were tested (Table 1).

**Table 1**

| Mass of bob (g) | Time for 10 swings (s) | Period (s) |
|---|---|---|
| 50 | 20.1 | 2.01 |
| 100 | 20.1 | 2.01 |
| 200 | 20.0 | 2.00 |
| 400 | 20.1 | 2.01 |

**Experiment 2**

A 100 g bob was released from 10°. The length of the pendulum was varied (Table 2).

**Table 2**

| Length (m) | Period (s) |
|---|---|
| 0.25 | 1.00 |
| 0.50 | 1.42 |
| 1.00 | 2.01 |
| 1.50 | 2.46 |
| 2.00 | 2.84 |

**Experiment 3**

A 100 g bob was hung from a 1.00 m string. The release angle was varied (Table 3).

**Table 3**

| Release angle (°) | Period (s) |
|---|---|
| 10 | 2.01 |
| 20 | 2.02 |
| 30 | 2.04 |
| 45 | 2.09 |
| 60 | 2.15 |`,
    questions: [
      {
        id: 'act-fl1-s-04-q1',
        question: 'According to Table 1, as the mass of the bob increased from 50 g to 400 g, the period of the pendulum:',
        options: ['increased only.', 'decreased only.', 'increased, then decreased.', 'remained nearly constant.'],
        correctIndex: 3,
        explanation: 'The period was 2.01, 2.01, 2.00 and 2.01 s for the four masses, so it stayed essentially the same even though the mass increased eightfold.',
        optionExplanations: [
          'The period did not rise as mass increased. It was 2.01 s for the 50 g bob and still 2.01 s for the 400 g bob, eight times heavier.',
          'The period did not fall steadily. The single 0.01 s dip at 200 g is within timing error, and the 400 g bob had the same period as the 50 g bob.',
          'The values never show a rise followed by a fall. The only change is a 0.01 s dip at 200 g, which is too small to count as a trend.',
          'Correct. Every bob had a period of about 2.01 s, varying by at most 0.01 s. Changing the mass from 50 g to 400 g had no meaningful effect on the period.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-04-q2',
        question: 'Based on Table 2, a pendulum with a length of 0.75 m, a 100 g bob, and a release angle of 10° would most likely have a period closest to:',
        options: ['1.2 s.', '1.7 s.', '2.2 s.', '3.0 s.'],
        correctIndex: 1,
        explanation: 'A length of 0.75 m falls between 0.50 m (1.42 s) and 1.00 m (2.01 s), so the period should fall between those values, at about 1.7 s.',
        optionExplanations: [
          'A period of 1.2 s fits a length between 0.25 m and 0.50 m. A 0.75 m pendulum is longer than 0.50 m, so its period must exceed 1.42 s.',
          'Correct. At 0.50 m the period was 1.42 s and at 1.00 m it was 2.01 s. A 0.75 m pendulum lies between them, with a period of about 1.7 s.',
          'A period of 2.2 s fits a length between 1.00 m and 1.50 m. A 0.75 m pendulum is shorter than 1.00 m, so its period must be less than 2.01 s.',
          'A period of 3.0 s is longer than that of the 2.00 m pendulum, 2.84 s. A 0.75 m pendulum, much shorter, would swing far faster than that.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-04-q3',
        question: 'Based on Table 2, which length produced a period twice as long as the period of the 0.50 m pendulum?',
        options: ['1.00 m', '1.50 m', '2.00 m', '4.00 m'],
        correctIndex: 2,
        explanation: 'The 0.50 m pendulum had a period of 1.42 s. Twice that is 2.84 s, the period of the 2.00 m pendulum, so quadrupling the length doubled the period.',
        optionExplanations: [
          'Doubling the length to 1.00 m raised the period only to 2.01 s, not to 2.84 s. Period does not grow in direct proportion to length.',
          'The 1.50 m pendulum had a period of 2.46 s, which is less than twice 1.42 s. The length must be greater still to double the period.',
          'Correct. Twice the 0.50 m period is 2 × 1.42 s = 2.84 s, which Table 2 lists for the 2.00 m pendulum. Making the pendulum 4 times as long doubled its period.',
          'A 4.00 m pendulum was not tested, and the trend suggests its period would be about 4.0 s, nearly triple 1.42 s. The 2.00 m pendulum already doubles the period.',
        ],
        skill: 'IOD',
        difficulty: 'hard',
      },
      {
        id: 'act-fl1-s-04-q4',
        question: 'Which of the following was held constant in both Experiment 2 and Experiment 3?',
        options: [
          'The mass of the bob',
          'The length of the string',
          'The release angle',
          'The period of the pendulum',
        ],
        correctIndex: 0,
        explanation: 'Both experiments used a 100 g bob. Length was varied in Experiment 2, and release angle was varied in Experiment 3.',
        optionExplanations: [
          'Correct. Experiment 2 and Experiment 3 both used a 100 g bob throughout. Each experiment changed a different variable while keeping the mass the same.',
          'Length was held at 1.00 m in Experiment 3, but it was the variable being changed in Experiment 2, from 0.25 m to 2.00 m. It was not constant in both.',
          'The release angle was held at 10° in Experiment 2, but it was the variable being changed in Experiment 3, from 10° to 60°. It was not constant in both.',
          'The period was the measured result in every trial, not something held constant. It changed from 1.00 s to 2.84 s in Experiment 2 alone.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-04-q5',
        question: 'The students timed 10 complete swings and divided by 10 instead of timing a single swing. The most likely reason for this procedure was to:',
        options: [
          'make the pendulum swing at a steadier rate.',
          'keep the release angle the same in every trial.',
          'measure how the period changed as the swings continued.',
          'reduce the effect of stopwatch timing errors.',
        ],
        correctIndex: 3,
        explanation: 'A person starting and stopping a stopwatch makes an error of a fraction of a second. Spreading that error over 10 swings makes it 10 times smaller in the calculated period.',
        optionExplanations: [
          'How long the students timed the pendulum cannot change how it swings. The timing method affects only the measurement, not the motion of the bob.',
          'The release angle was set by pulling the bob aside before release. Counting more swings afterward has no effect on the angle chosen at the start.',
          'Dividing the total time by 10 gives one average period, which hides any change from swing to swing. This method could not track changes over time.',
          'Correct. Reaction-time errors in starting and stopping the stopwatch happen once per measurement. Dividing a 20 s total by 10 shrinks that error tenfold in each period.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-04-q6',
        question: 'The students want to test whether the material of the bob affects the period. Which of the following pairs of trials would best test this?',
        options: [
          'A 100 g steel bob on a 1.00 m string and a 200 g wooden bob on a 0.50 m string, both released from 10°',
          'A 100 g steel bob released from 10° and a 100 g wooden bob released from 30°, both on 1.00 m strings',
          'A 100 g steel bob and a 100 g wooden bob, both on 1.00 m strings and both released from 10°',
          'A 100 g steel bob on a 0.50 m string and a 100 g steel bob on a 1.00 m string, both released from 10°',
        ],
        correctIndex: 2,
        explanation: 'A fair test changes only the bob material. Keeping mass, length and release angle identical means any difference in period could be attributed to the material.',
        optionExplanations: [
          'This pair changes the material, the mass and the length all at once. Since length strongly affects the period, any difference could not be credited to the material.',
          'This pair changes the material and the release angle together. Table 3 shows that a 30° release lengthens the period slightly, so the effects would be mixed.',
          'Correct. Only the material differs between these trials; mass, length and release angle are all the same. Any difference in period would point to the material.',
          'Both trials use a steel bob, so the material never changes. This pair repeats Experiment 2 by testing length, not material.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-04-q7',
        question: 'A physics textbook states that a pendulum\'s period does not depend on its release angle. Based on Experiment 3, this statement is most accurate for:',
        options: [
          'release angles of 20° or less.',
          'all release angles from 10° to 60°.',
          'release angles of about 45° or more.',
          'none of the release angles tested.',
        ],
        correctIndex: 0,
        explanation: 'The period changed by only 0.01 s between 10° and 20° but rose to 2.09 s and 2.15 s at 45° and 60°, so the statement holds only for small release angles.',
        optionExplanations: [
          'Correct. Between 10° and 20°, the period changed by only 0.01 s (2.01 s to 2.02 s). At larger angles it grew noticeably, so the statement holds only for small angles.',
          'Over the full range, the period rose from 2.01 s to 2.15 s, an increase of about 7%. The period clearly depended on angle once the angle became large.',
          'At large angles the period changed the most, from 2.09 s at 45° to 2.15 s at 60°. These are the angles where the textbook statement fails.',
          'At small angles the period was nearly constant, changing only 0.01 s from 10° to 20°. The statement is a good approximation for those angles.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },

  // ---------- Passage V: Research Summary (earth science) ----------
  {
    id: 'act-fl1-s-05',
    title: 'Rates of Rock Weathering',
    kind: 'research-summary',
    text: `*Weathering* is the breakdown of rock at or near Earth's surface. In *chemical weathering*, minerals react with water and dissolve. In *physical weathering*, rock breaks into smaller pieces without any change in its minerals. Students performed 3 experiments on weathering rates.

**Experiment 1**

Cubes of limestone (made mostly of the mineral calcite) and granite (made mostly of quartz and feldspar), each with a mass of 50.0 g, were placed in separate containers holding 2.0 L of water buffered at pH 3, 4, 5, 6, or 7. The containers were kept at 20°C, and every day the solution in each container was replaced with fresh solution of the same pH. After 30 days, each cube was rinsed, dried, and weighed (Table 1).

**Table 1**

| pH of solution | Mass loss of limestone (mg) | Mass loss of granite (mg) |
|---|---|---|
| 3 | 610 | 9 |
| 4 | 140 | 5 |
| 5 | 45 | 3 |
| 6 | 22 | 2 |
| 7 | 15 | 2 |

**Experiment 2**

Four 50.0 g samples of limestone were each cut into equal-sized cubes, with a different number of cubes for each sample. Each sample was treated as in Experiment 1 at pH 4 for 30 days (Table 2).

**Table 2**

| Number of cubes | Edge length of each cube (cm) | Total surface area (cm²) | Mass loss (mg) |
|---|---|---|---|
| 1 | 2.64 | 42 | 140 |
| 8 | 1.32 | 84 | 265 |
| 64 | 0.66 | 168 | 430 |
| 512 | 0.33 | 335 | 540 |

**Experiment 3**

The students measured the *porosity* (the percent of a rock's volume that is open pore space) of 50.0 g samples of granite, limestone, and sandstone. The samples were soaked in water until saturated and then put through *freeze–thaw cycles*: 12 hours at −10°C followed by 12 hours at 10°C. Fragments that broke off were discarded, and each remaining sample was dried and weighed after 25 and after 50 cycles (Table 3).

**Table 3**

| Rock | Porosity (%) | Mass loss after 25 cycles (mg) | Mass loss after 50 cycles (mg) |
|---|---|---|---|
| Granite | 1 | 20 | 45 |
| Limestone | 6 | 160 | 390 |
| Sandstone | 18 | 720 | 1,650 |`,
    questions: [
      {
        id: 'act-fl1-s-05-q1',
        question: 'According to Table 1, the limestone cube in the pH 3 solution lost about how many times as much mass as the limestone cube in the pH 4 solution?',
        options: ['2 times', '4 times', '14 times', '68 times'],
        correctIndex: 1,
        explanation: 'The limestone lost 610 mg at pH 3 and 140 mg at pH 4. Since 610 ÷ 140 ≈ 4.4, the pH 3 cube lost about 4 times as much.',
        optionExplanations: [
          'About 2 times would mean the pH 3 cube lost roughly 280 mg. It actually lost 610 mg, more than 4 times the 140 mg lost at pH 4.',
          'Correct. Limestone lost 610 mg at pH 3 and 140 mg at pH 4. Dividing gives 610 ÷ 140 ≈ 4.4, or about 4 times as much.',
          'This compares pH 3 with pH 5 (610 ÷ 45 ≈ 14), skipping a row of Table 1. The question compares pH 3 with pH 4.',
          'This compares limestone with granite at pH 3 (610 ÷ 9 ≈ 68). The question compares two limestone cubes in solutions of different pH.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-05-q2',
        question: 'According to Table 3, which of the following lists the rocks in order from least mass loss to greatest mass loss after 50 freeze–thaw cycles?',
        options: [
          'Sandstone, limestone, granite',
          'Granite, sandstone, limestone',
          'Limestone, granite, sandstone',
          'Granite, limestone, sandstone',
        ],
        correctIndex: 3,
        explanation: 'After 50 cycles, granite lost 45 mg, limestone 390 mg, and sandstone 1,650 mg, so the order from least to greatest is granite, limestone, sandstone.',
        optionExplanations: [
          'This list runs from greatest to least mass loss: sandstone lost the most (1,650 mg) and granite the least (45 mg). It reverses the requested order.',
          'Granite does come first, with 45 mg, but sandstone lost far more than limestone (1,650 mg versus 390 mg), so sandstone belongs last.',
          'Limestone lost 390 mg, more than granite\'s 45 mg, so limestone cannot come first. Granite had the least mass loss of the three rocks.',
          'Correct. After 50 cycles, granite lost 45 mg, limestone lost 390 mg and sandstone lost 1,650 mg. This list runs from least to greatest.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-05-q3',
        question: 'Suppose a fifth 50.0 g limestone sample had been cut into cubes with a total surface area of 250 cm² and tested as in Experiment 2. Its mass loss would most likely have been:',
        options: [
          'less than 265 mg.',
          'between 265 mg and 430 mg.',
          'between 430 mg and 540 mg.',
          'greater than 540 mg.',
        ],
        correctIndex: 2,
        explanation: 'In Table 2, mass loss increased with surface area. A surface area of 250 cm² lies between 168 cm² (430 mg) and 335 cm² (540 mg), so the loss should be between 430 and 540 mg.',
        optionExplanations: [
          'Mass losses below 265 mg occurred only for samples with surface areas of 84 cm² or less. A 250 cm² sample has far more exposed surface than those.',
          'This range fits surface areas between 84 cm² and 168 cm². Since 250 cm² is greater than 168 cm², the mass loss should be greater than 430 mg.',
          'Correct. Mass loss rose with surface area, and 250 cm² lies between 168 cm² (430 mg) and 335 cm² (540 mg). The loss should fall between those values.',
          'A loss above 540 mg would exceed that of the 335 cm² sample, which had more surface area than 250 cm². This breaks the increasing trend in Table 2.',
        ],
        skill: 'IOD',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-05-q4',
        question: 'In Experiment 2, the independent variable was the:',
        options: [
          'total surface area of the limestone.',
          'mass of limestone lost in 30 days.',
          'pH of the solution.',
          'total mass of each limestone sample.',
        ],
        correctIndex: 0,
        explanation: 'The students cut each sample into a different number of cubes, changing its total surface area on purpose, and then measured the resulting mass loss.',
        optionExplanations: [
          'Correct. Cutting each 50.0 g sample into 1, 8, 64 or 512 cubes changed its total surface area from 42 cm² to 335 cm². This was the variable the students deliberately varied.',
          'Mass loss is what the students measured at the end of 30 days. It was the outcome that responded to the surface area, so it is the dependent variable.',
          'Every sample in Experiment 2 was tested at pH 4. The pH was varied in Experiment 1, but here it was held constant.',
          'All four samples had the same total mass, 50.0 g. Total mass was kept constant so that only the surface area differed among samples.',
        ],
        skill: 'SIN',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-05-q5',
        question: 'In Experiment 2, why did the students most likely use the same total mass of limestone for every sample?',
        options: [
          'To give every sample the same surface area',
          'To keep the pH of every solution at 4',
          'To make all of the cubes the same size',
          'So surface area alone differed among samples',
        ],
        correctIndex: 3,
        explanation: 'Using 50.0 g in every sample meant that the amount of rock was the same, so differences in mass loss could be traced to surface area alone.',
        optionExplanations: [
          'The samples had very different surface areas, from 42 cm² to 335 cm². Equal mass was used so that surface area could vary while the amount of rock stayed fixed.',
          'The pH was controlled by the acidified solution, which was replaced daily. The mass of rock placed in the solution was not how the pH was set.',
          'The cubes were deliberately different sizes from sample to sample, from 2.64 cm to 0.33 cm on an edge. Equal total mass does not make the cubes equal in size.',
          'Correct. With every sample at 50.0 g, the amount of rock was the same. Any difference in mass loss could then be attributed to surface area rather than to how much rock was present.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-05-q6',
        question: 'In Experiment 1, the students replaced each solution every day most likely in order to:',
        options: [
          'remove fragments that had broken off each cube.',
          'keep the acidity of each solution near its starting value.',
          'keep the temperature of each solution at 20°C.',
          'measure the mass of rock that dissolved each day.',
        ],
        correctIndex: 1,
        explanation: 'As limestone dissolves, it uses up the acid in the solution and raises its pH. Replacing the solution daily kept each container close to its assigned pH.',
        optionExplanations: [
          'Experiment 1 tested chemical weathering, in which minerals dissolve rather than break into fragments. Breaking off pieces was the focus of the freeze–thaw test in Experiment 3.',
          'Correct. Dissolving calcite consumes acid and raises the pH of the solution. Fresh solution each day kept every container near its assigned pH for all 30 days.',
          'Temperature was controlled by keeping the containers at 20°C. Swapping in fresh solution was not needed to hold the temperature steady.',
          'The cubes were weighed only once, after 30 days, so the students did not track daily mass loss. Replacing the solution did not measure anything.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-05-q7',
        question: 'A student claimed that freeze–thaw weathering is fastest in rocks that have the least pore space. Do the results of Experiment 3 support this claim?',
        options: [
          'Yes; granite, the least porous rock, lost the most mass.',
          'Yes; all three rocks lost about the same mass.',
          'No; mass loss increased as porosity increased.',
          'No; mass loss decreased as porosity increased.',
        ],
        correctIndex: 2,
        explanation: 'Granite (1% porosity) lost the least mass and sandstone (18% porosity) lost the most, so freeze–thaw weathering was fastest in the most porous rock, not the least porous.',
        optionExplanations: [
          'Granite was the least porous rock, but it lost the least mass, only 45 mg after 50 cycles. This reason misreads Table 3.',
          'The mass losses were very different: 45 mg, 390 mg and 1,650 mg after 50 cycles. Sandstone lost more than 35 times as much as granite.',
          'Correct. Granite (1%) lost 45 mg, limestone (6%) lost 390 mg and sandstone (18%) lost 1,650 mg. The most porous rock weathered fastest, contradicting the claim.',
          'The answer "No" is right, but the trend is reversed. As porosity rose from 1% to 18%, mass loss rose rather than fell.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
    ],
  },

  // ---------- Passage VI: Conflicting Viewpoints (earth / space science) ----------
  {
    id: 'act-fl1-s-06',
    title: 'Where Did Mars\'s Water Go?',
    kind: 'conflicting-viewpoints',
    text: `Today, most of the water on Mars is ice, in its polar caps and beneath the surface, and its thin atmosphere holds only traces of water vapor. Yet spacecraft and rovers have found dry river valleys, ancient lake beds, and river deltas showing that liquid water flowed across the surface more than 3 billion years ago.

*Deuterium* is a heavier form of hydrogen. When hydrogen escapes from a planet's upper atmosphere into space, ordinary (lighter) hydrogen escapes more easily than deuterium, so the water left behind becomes enriched in deuterium, raising its deuterium-to-hydrogen (D/H) ratio. Table 1 lists D/H ratios measured on Mars by the *Curiosity* rover, each compared with the ratio in Earth's ocean water.

**Table 1**

| Water source | D/H ratio (relative to Earth's ocean water) |
|---|---|
| Earth's ocean water | 1 |
| Water bound in Martian clay minerals that formed about 3 billion years ago | about 3 |
| Water vapor in Mars's atmosphere today | about 6 |

Two scientists explain what happened to Mars's early water.

**Scientist 1**

Most of Mars's early water was lost to space. Early Mars had a global magnetic field that deflected the *solar wind*, the stream of charged particles flowing outward from the Sun. About 4 billion years ago, that magnetic field shut down. With no field to shield it, the atmosphere was exposed, and the solar wind stripped gas from its upper layers. As the atmosphere thinned, the surface pressure fell until liquid water could no longer last at the surface; it evaporated or froze. In the upper atmosphere, ultraviolet sunlight split water molecules into hydrogen and oxygen, and the hydrogen escaped to space, aided by Mars's weak gravity, about 38% of Earth's. The doubling of the D/H ratio between the ancient clays and today's atmosphere shows that a large amount of water has been lost to space. Spacecraft orbiting Mars also measure escape rates that rise sharply during solar storms, when the solar wind is strongest.

**Scientist 2**

Most of Mars's early water never left the planet. When liquid water flowed over and soaked into Mars's volcanic rock, it reacted with the rock to form clays and other *hydrated minerals*, which lock water molecules into their crystal structures. Spacecraft have detected such minerals across Mars's oldest terrain, and the water in them remains trapped in the crust today. Some hydrogen has escaped to space, as the D/H ratios show. However, once most of the water was locked in the crust, only a small amount remained at the surface and in the atmosphere, and losing even a modest amount of hydrogen from so small a reservoir raises its D/H ratio substantially. Present-day escape rates, even if continued for 4 billion years, would remove only a small fraction of the water that once carved Mars's valleys. The rest is locked in the crust or frozen in the polar caps and in ground ice.`,
    questions: [
      {
        id: 'act-fl1-s-06-q1',
        question: 'According to Table 1, the D/H ratio of water vapor in Mars\'s atmosphere today is about how many times the D/H ratio of the water bound in the 3-billion-year-old Martian clay minerals?',
        options: ['2 times', '3 times', '6 times', '18 times'],
        correctIndex: 0,
        explanation: 'Relative to Earth\'s ocean water, today\'s Martian atmospheric water has a D/H ratio of about 6 and the ancient clay water about 3, so the ratio today is about 6 ÷ 3 = 2 times as great.',
        optionExplanations: [
          'Correct. Today\'s atmospheric water has a D/H ratio about 6 times Earth\'s, and the clay water about 3 times Earth\'s. Dividing, 6 ÷ 3 = 2, so today\'s ratio is about twice the clay ratio.',
          'This is how the clay water compares with Earth\'s ocean water, not with today\'s Martian atmosphere. The question compares the two Martian sources with each other.',
          'This is how today\'s Martian atmospheric water compares with Earth\'s ocean water. Measured against the ancient clays instead, it is only about twice as enriched.',
          'This multiplies the two values in Table 1 (3 × 6) instead of dividing them. Both values are relative to Earth\'s ocean water, so they should be compared by division.',
        ],
        skill: 'IOD',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-06-q2',
        question: 'Scientist 1 and Scientist 2 would most likely agree that:',
        options: [
          'most of Mars\'s early water is now held in hydrated minerals.',
          'the loss of Mars\'s magnetic field removed most of its water.',
          'liquid water has never flowed on the surface of Mars.',
          'some hydrogen from Mars\'s water escaped to space.',
        ],
        correctIndex: 3,
        explanation: 'Scientist 1 says large amounts of hydrogen escaped to space, and Scientist 2 says some hydrogen has escaped to space, as the D/H ratios show. They disagree only about how much.',
        optionExplanations: [
          'Only Scientist 2 holds this view. Scientist 1 argues that most of the water was lost to space, not stored in minerals in the crust.',
          'Only Scientist 1 links the magnetic field to water loss. Scientist 2 never mentions the magnetic field and argues that most water stayed on Mars.',
          'Neither scientist says this. Both accept the evidence of river valleys, lake beds and deltas, and both describe what happened to water that once flowed there.',
          'Correct. Scientist 1 says hydrogen escaped to space in large amounts, and Scientist 2 grants that some hydrogen escaped, as the D/H ratios show. They differ only on the amount.',
        ],
        skill: 'EMI',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-06-q3',
        question: 'Suppose measurements showed that Earth, which still has a strong global magnetic field, loses gas from its upper atmosphere to space at about the same rate as Mars does today. This finding would most directly weaken Scientist 1\'s claim that:',
        options: [
          'liquid water once flowed across the surface of Mars.',
          'losing its magnetic field left Mars\'s atmosphere open to stripping.',
          'ultraviolet sunlight splits water molecules in the upper atmosphere.',
          'water reacted with volcanic rock to form hydrated minerals.',
        ],
        correctIndex: 1,
        explanation: 'Scientist 1 argues that the magnetic field shielded the atmosphere and its shutdown allowed stripping. If a planet with a strong field loses gas just as fast, the field would not appear to protect the atmosphere.',
        optionExplanations: [
          'Both scientists accept that liquid water once flowed on Mars, based on valleys, lake beds and deltas. A finding about atmospheric loss on Earth says nothing about this.',
          'Correct. Scientist 1 claims the magnetic field protected Mars\'s atmosphere until it shut down. If Earth loses gas as fast as Mars despite its strong field, that protective role is called into question.',
          'The splitting of water by ultraviolet light does not depend on a magnetic field. Earth\'s rate of gas loss neither supports nor undermines this step.',
          'This is part of Scientist 2\'s viewpoint, not Scientist 1\'s. The question asks which of Scientist 1\'s claims the finding would weaken.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-06-q4',
        question: 'Which of the following discoveries, if made, would most strengthen Scientist 2\'s viewpoint?',
        options: [
          'Escape rates during solar storms are higher than previously measured.',
          'Mars\'s magnetic field shut down earlier than 4 billion years ago.',
          'Deep crustal minerals hold most of the water that carved the valleys.',
          'The D/H ratio of Mars\'s atmospheric water is even higher than 6.',
        ],
        correctIndex: 2,
        explanation: 'Scientist 2 argues that most of the early water is locked in the crust as hydrated minerals. Finding that deep crustal minerals hold most of that water would directly support the claim.',
        optionExplanations: [
          'Higher escape rates would mean more water could have been lost to space. That supports Scientist 1, who argues that escape removed most of the water.',
          'An earlier shutdown would give the solar wind more time to strip the atmosphere, which supports Scientist 1. Scientist 2\'s argument does not rely on the magnetic field.',
          'Correct. Scientist 2 claims that most of the water was locked into hydrated minerals in the crust. Finding most of the valley-carving water bound in deep minerals would directly back that up.',
          'A higher D/H ratio would suggest even more hydrogen escaped to space. That fits Scientist 1\'s argument better than Scientist 2\'s.',
        ],
        skill: 'EMI',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-06-q5',
        question: 'According to Scientist 1, how did hydrogen from Mars\'s water escape to space?',
        options: [
          'Ultraviolet sunlight split water molecules, and the hydrogen escaped.',
          'Water reacted with volcanic rock, releasing hydrogen gas into space.',
          'The magnetic field pulled hydrogen out of the upper atmosphere.',
          'Ice in the polar caps released hydrogen during solar storms.',
        ],
        correctIndex: 0,
        explanation: 'Scientist 1 states that ultraviolet sunlight split water molecules in the upper atmosphere into hydrogen and oxygen and that the hydrogen escaped, helped by Mars\'s weak gravity.',
        optionExplanations: [
          'Correct. Scientist 1 says that in the upper atmosphere, ultraviolet sunlight broke water molecules into hydrogen and oxygen, and the hydrogen then escaped to space.',
          'Reactions between water and volcanic rock come from Scientist 2, who says they locked water into minerals. Neither scientist says these reactions released hydrogen to space.',
          'Scientist 1 describes the magnetic field as a shield that deflected the solar wind. Losing the field allowed escape; the field did not pull hydrogen away.',
          'Scientist 1 links solar storms to higher escape rates from the atmosphere, not from polar ice. The polar caps are mentioned only by Scientist 2 as places water remains.',
        ],
        skill: 'EMI',
        difficulty: 'easy',
      },
      {
        id: 'act-fl1-s-06-q6',
        question: 'Which of the following investigations would best help determine which scientist\'s explanation is more accurate?',
        options: [
          'Remeasuring the D/H ratio of ocean water at several sites on Earth',
          'Photographing more dry river valleys on the surface of Mars',
          'Estimating the total water bound in minerals throughout Mars\'s crust',
          'Measuring the speed of the solar wind as it passes Earth',
        ],
        correctIndex: 2,
        explanation: 'The scientists disagree about where most of the water went: to space or into the crust. Measuring how much water the crust holds tests that disagreement directly.',
        optionExplanations: [
          'Earth\'s ocean water is only the reference value in Table 1. Measuring it again would not reveal where Mars\'s water went.',
          'Both scientists already agree that water flowed on early Mars. More images of valleys would confirm that shared point without settling their disagreement.',
          'Correct. Scientist 2 predicts that the crust holds most of the early water, while Scientist 1 predicts that most was lost to space. Measuring the crust\'s water would test these opposing predictions.',
          'The solar wind near Earth tells little about how much of Mars\'s water escaped. Neither scientist\'s argument depends on the solar wind\'s current speed at Earth.',
        ],
        skill: 'SIN',
        difficulty: 'medium',
      },
      {
        id: 'act-fl1-s-06-q7',
        question: 'How do the two scientists interpret the rise in the D/H ratio from the ancient clays to today\'s atmosphere?',
        options: [
          'Both scientists take it to mean that most of Mars\'s early water was lost to space.',
          'Scientist 1 sees water locked in clays; Scientist 2 sees a large loss of water to space.',
          'Scientist 1 sees a large loss to space; Scientist 2 sees modest loss from a small reservoir.',
          'Scientist 1 sees a large loss to space; Scientist 2 sees deuterium added by clay formation.',
        ],
        correctIndex: 2,
        explanation: 'Scientist 1 cites the doubled D/H ratio as evidence of large water loss to space. Scientist 2 says that losing a modest amount of hydrogen from a small remaining reservoir can raise the ratio substantially.',
        optionExplanations: [
          'Only Scientist 1 reads the D/H rise as evidence that most water was lost to space. Scientist 2 says the rise reflects only some hydrogen escaping.',
          'This reverses the two viewpoints. Scientist 1 argues for loss to space, while Scientist 2 argues that most water was locked in clays and other minerals.',
          'Correct. Scientist 1 says the doubling of the D/H ratio shows that much water was lost to space. Scientist 2 says a modest hydrogen loss from the small leftover reservoir could raise the ratio that much.',
          'Scientist 1 is described correctly, but Scientist 2 never claims that forming clays adds deuterium. Scientist 2 credits the rise to some hydrogen escaping from a small reservoir.',
        ],
        skill: 'EMI',
        difficulty: 'hard',
      },
    ],
  },
]
