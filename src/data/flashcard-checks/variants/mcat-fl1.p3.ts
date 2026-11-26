import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for atmospheric pressure, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab notebook holds four entries for the pressure of the air in a room at sea level. Which entry is written with the correct SI unit and a sensible size?`,
        options: [r`P₀ = 7.6 × 10² Pa`, r`P₀ = 1.0 × 10⁵ Pa`, r`P₀ = 1.0 × 10⁵ N`, r`P₀ = 1.0 × 10⁵ atm`],
        correctAnswer: 1,
        explanation: r`Atmospheric pressure is written P₀ or P_atm, its SI unit is the pascal, and at sea level it is about 1.0 × 10⁵ Pa. The entry with 7.6 × 10² Pa borrows the number 760 from millimeters of mercury. The newton is a unit of force, and 1.0 × 10⁵ atm would be a hundred thousand atmospheres.`,
      },
      {
        question: r`The air at sea level is at about 1.0 × 10⁵ Pa, and 1 Pa = 1 N/m². Which statement says the same thing in other words?`,
        options: [
          r`The air pushes with about 1.0 × 10⁵ N on every square centimeter`,
          r`The air pushes with about 1.0 × 10⁵ kg on every square meter`,
          r`The air pushes with about 1.0 × 10⁵ J on every square meter`,
          r`The air pushes with about 1.0 × 10⁵ N on every square meter`,
        ],
        correctAnswer: 3,
        explanation: r`A pascal is one newton of force on each square meter, so 1.0 × 10⁵ Pa means about 1.0 × 10⁵ N on every square meter. On a square centimeter, which is 10⁻⁴ m², the force is only about 10 N. The kilogram measures mass and the joule measures energy, so neither can describe a push on a surface.`,
      },
    ],
  },
  [r`Write gauge pressure as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An autoclave sterilizes instruments in steam held at an absolute pressure of 3.1 × 10⁵ Pa. The room's air is at 1.0 × 10⁵ Pa. What gauge pressure does the dial on the autoclave's door show?`,
        options: [r`4.1 × 10⁵ Pa`, r`3.1 × 10⁵ Pa`, r`2.1 × 10⁵ Pa`, r`1.0 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`Gauge pressure is the absolute pressure minus atmospheric pressure: 3.1 × 10⁵ − 1.0 × 10⁵ = 2.1 × 10⁵ Pa. Adding the two gives 4.1 × 10⁵ Pa, which treats the steam's pressure as if it were already a gauge value. The values 3.1 × 10⁵ Pa and 1.0 × 10⁵ Pa are the absolute and atmospheric pressures themselves.`,
      },
      {
        question: r`A sensor sealed inside a basketball reads an absolute pressure of 145 kPa, while a gauge pressed onto the ball's valve reads 60 kPa. What is the pressure of the air in the gym?`,
        options: [r`85 kPa`, r`205 kPa`, r`60 kPa`, r`145 kPa`],
        correctAnswer: 0,
        explanation: r`Since P_gauge = P − P_atm, the atmospheric pressure is P − P_gauge = 145 − 60 = 85 kPa, a value found in a high mountain town. Adding the readings gives 205 kPa. The values 60 kPa and 145 kPa only repeat the two readings.`,
      },
      {
        question: r`The air trapped under a suction cup on a window is at an absolute pressure of 35 kPa. The room's air is at 101 kPa. What is the gauge pressure of the air under the cup?`,
        options: [r`+66 kPa`, r`+136 kPa`, r`−35 kPa`, r`−66 kPa`],
        correctAnswer: 3,
        explanation: r`P_gauge = P − P_atm = 35 − 101 = −66 kPa, negative because the trapped air is below atmospheric pressure. A value of +66 kPa subtracts in the wrong order, and +136 kPa adds the two pressures. A value of −35 kPa just puts a minus sign on the absolute pressure.`,
      },
      {
        question: r`The gauge on a full scuba tank reads 199 atm on a dock at sea level, where the air is at 1 atm. With 1 atm ≈ 1.0 × 10⁵ Pa, what is the absolute pressure of the air in the tank?`,
        options: [r`1.98 × 10⁷ Pa`, r`2.00 × 10⁷ Pa`, r`1.99 × 10⁷ Pa`, r`2.00 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`Absolute = gauge + atmospheric = 199 + 1 = 200 atm, and 200 × 1.0 × 10⁵ Pa = 2.00 × 10⁷ Pa. Subtracting the atmosphere gives 1.98 × 10⁷ Pa, and 1.99 × 10⁷ Pa converts the gauge reading without adding the atmosphere. The value 2.00 × 10⁵ Pa is only 2 atm, a slip in the power of ten.`,
      },
      {
        question: r`Dials that show gauge pressure read 300 kPa on one steam boiler and 200 kPa on a second boiler. The air in the plant is at 100 kPa. The absolute pressure in the first boiler is what multiple of the absolute pressure in the second?`,
        options: [r`4/3`, r`3/2`, r`2/1`, r`3/4`],
        correctAnswer: 0,
        explanation: r`Add the atmosphere to each gauge reading first: the absolute pressures are 400 kPa and 300 kPa, so the ratio is 400/300 = 4/3. The ratio 3/2 compares the gauge readings directly, and 2/1 subtracts the atmosphere from each reading instead of adding it. The ratio 3/4 is the correct ratio turned upside down.`,
      },
      {
        question: r`A ventilator's dial shows that the air in a patient's airway is at a gauge pressure of 18 mmHg. The hospital's air is at 740 mmHg. What is the absolute pressure in the airway?`,
        options: [r`722 mmHg`, r`778 mmHg`, r`758 mmHg`, r`18 mmHg`],
        correctAnswer: 2,
        explanation: r`Absolute = gauge + atmospheric = 18 + 740 = 758 mmHg. Subtracting gives 722 mmHg, and 778 mmHg adds the sea-level value of 760 mmHg instead of the 740 mmHg stated for this hospital. A value of 18 mmHg leaves the gauge reading unchanged, which would be close to a vacuum.`,
      },
    ],
  },
  [r`A tire gauge reads zero. What is the absolute pressure of the air inside the tire?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sealed bottle is opened in a room where the air is at 98 kPa, and the air inside settles to the room's pressure. One sensor in the bottle reads gauge pressure and another reads absolute pressure. What do the two sensors show?`,
        options: [
          r`0 kPa on the gauge sensor and 98 kPa on the absolute sensor`,
          r`98 kPa on the gauge sensor and 98 kPa on the absolute sensor`,
          r`0 kPa on the gauge sensor and 0 kPa on the absolute sensor`,
          r`98 kPa on the gauge sensor and 0 kPa on the absolute sensor`,
        ],
        correctAnswer: 0,
        explanation: r`A gauge reads the amount above atmospheric pressure, so air at exactly the room's pressure gives a gauge reading of zero. That same air still presses with the full 98 kPa, which is what the absolute sensor shows. A zero on the absolute sensor would mean a vacuum, and 98 kPa on the gauge sensor would mean air at almost twice the room's pressure.`,
      },
      {
        question: r`A football has a slow leak, and a gauge on its valve reads zero both at the coast, where the air is at 101 kPa, and later in a mountain town, where the air is at 80 kPa. How does the absolute pressure of the air inside the ball compare in the two places?`,
        options: [
          r`It is zero in both places, just as the gauge reports`,
          r`It is 101 kPa in both places, one full atmosphere`,
          r`It is 21 kPa lower in the mountain town than at the coast`,
          r`It is 21 kPa higher in the mountain town than at the coast`,
        ],
        correctAnswer: 2,
        explanation: r`A gauge reading of zero means the air inside matches the air outside, so the ball holds 101 kPa at the coast and 80 kPa in the mountain town, which is 21 kPa lower. An absolute pressure of zero would be a vacuum, which a zero gauge reading does not mean. The ball cannot stay at 101 kPa or rise above it while its gauge reads zero in 80 kPa air.`,
      },
    ],
  },
  [r`Can a gauge pressure be negative? Can an absolute pressure?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student's report lists four pressure readings taken in a lab at sea level. Which reading must be a mistake?`,
        options: [
          r`A gauge pressure of −30 kPa in a suction line`,
          r`An absolute pressure of −30 kPa in a suction line`,
          r`A gauge pressure of 0 kPa in an open flask of air`,
          r`An absolute pressure of 30 kPa in a vacuum jar`,
        ],
        correctAnswer: 1,
        explanation: r`An absolute pressure is measured up from a perfect vacuum, so it can never be below zero, and −30 kPa is impossible. A gauge pressure of −30 kPa only means 30 kPa below atmospheric, which suction produces easily. A gauge pressure of zero in an open flask and an absolute pressure of 30 kPa in a pumped-down jar are both ordinary readings.`,
      },
      {
        question: r`While a person breathes in, the air in the lungs is at a gauge pressure of about −1 mmHg. The room's air is at 760 mmHg. What does the negative sign tell you?`,
        options: [
          r`The absolute pressure in the lungs is −1 mmHg, below a vacuum`,
          r`The absolute pressure in the lungs is 761 mmHg, above the room's`,
          r`The absolute pressure in the lungs is 759 mmHg, below the room's`,
          r`The absolute pressure in the lungs is 1 mmHg, close to a vacuum`,
        ],
        correctAnswer: 2,
        explanation: r`A negative gauge pressure means below atmospheric: the absolute pressure is 760 − 1 = 759 mmHg, slightly less than the room's. Nothing can be below a vacuum, so an absolute pressure of −1 mmHg is impossible. A value of 761 mmHg ignores the minus sign, and 1 mmHg confuses the gauge reading with the absolute pressure.`,
      },
    ],
  },
  [r`What is the gauge pressure at a depth $h$ in a liquid that is open to the air?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sensor that reads gauge pressure sits 4.0 m below the surface of an open seawater tank at an aquarium. Seawater's density is 1030 kg/m³, g = 10 m/s² and the air above the tank is at 1.0 × 10⁵ Pa. What does the sensor read?`,
        options: [r`1.412 × 10⁵ Pa`, r`4.12 × 10⁴ Pa`, r`4.12 × 10³ Pa`, r`4.00 × 10⁴ Pa`],
        correctAnswer: 1,
        explanation: r`P_gauge = ρgh = (1030)(10)(4.0) = 41,200 Pa = 4.12 × 10⁴ Pa. Adding the atmosphere gives 1.412 × 10⁵ Pa, which is the absolute pressure. The value 4.12 × 10³ Pa leaves out g, and 4.00 × 10⁴ Pa uses the density of fresh water.`,
      },
      {
        question: r`A gauge-pressure sensor on the floor of an open tank of ethanol (800 kg/m³) reads 1.2 × 10⁴ Pa. With g = 10 m/s², how deep is the ethanol?`,
        options: [r`15 m`, r`1.2 m`, r`0.96 m`, r`1.5 m`],
        correctAnswer: 3,
        explanation: r`From P_gauge = ρgh, h = P_gauge/(ρg) = (1.2 × 10⁴)/(800 × 10) = 1.5 m. A depth of 1.2 m uses water's density of 1000 kg/m³, and 0.96 m then multiplies by 0.8 instead of dividing. A depth of 15 m leaves g out of the division.`,
      },
      {
        question: r`Inside a habitat on Mars, a tank of water (1000 kg/m³) is open to the cabin's air. A sensor 2.0 m below the water's surface reads a gauge pressure of 7.4 × 10³ Pa. What is g on Mars?`,
        options: [r`3.7 m/s²`, r`0.37 m/s²`, r`7.4 m/s²`, r`14.8 m/s²`],
        correctAnswer: 0,
        explanation: r`From P_gauge = ρgh, g = P_gauge/(ρh) = (7.4 × 10³)/(1000 × 2.0) = 3.7 m/s². Leaving the depth out gives 7.4 m/s², and multiplying by the depth instead of dividing gives 14.8 m/s². The value 0.37 m/s² is a slip in the power of ten.`,
      },
      {
        question: r`A beekeeper's uncovered settling tank holds honey (1400 kg/m³) that is 50 cm deep. With g = 10 m/s², what is the gauge pressure on the tank's floor in kilopascals?`,
        options: [r`700 kPa`, r`5.0 kPa`, r`7.0 kPa`, r`107 kPa`],
        correctAnswer: 2,
        explanation: r`Convert the depth first: 50 cm = 0.50 m, so P_gauge = ρgh = (1400)(10)(0.50) = 7000 Pa = 7.0 kPa. Leaving the depth as 50 gives 700 kPa, and 5.0 kPa uses water's density. The value 107 kPa adds a 100 kPa atmosphere, which makes it an absolute pressure.`,
      },
      {
        question: r`An open tank holds oil (900 kg/m³) to a depth of 2.0 m. A second open tank holds water (1000 kg/m³) to a depth of 1.5 m. The gauge pressure at the bottom of the oil tank is what multiple of the gauge pressure at the bottom of the water tank?`,
        options: [r`0.83 times`, r`0.90 times`, r`1.33 times`, r`1.20 times`],
        correctAnswer: 3,
        explanation: r`Gauge pressure is ρgh, and g cancels in the ratio: (900 × 2.0)/(1000 × 1.5) = 1800/1500 = 1.20. The value 0.83 is this ratio upside down. The value 0.90 compares only the densities, and 1.33 compares only the depths.`,
      },
      {
        question: r`A town's water tower is vented to the air at the top. The water's surface is 35 m above a closed tap in a house, and the water in the pipes is at rest. With water at 1000 kg/m³, g = 10 m/s² and air at 1.0 × 10⁵ Pa, what is the gauge pressure at the tap?`,
        options: [r`4.5 × 10⁵ Pa`, r`3.5 × 10⁵ Pa`, r`3.5 × 10⁴ Pa`, r`3.5 × 10³ Pa`],
        correctAnswer: 1,
        explanation: r`P_gauge = ρgh = (1000)(10)(35) = 3.5 × 10⁵ Pa. Adding the atmosphere gives 4.5 × 10⁵ Pa, the absolute pressure at the tap. The value 3.5 × 10⁴ Pa leaves out g, and 3.5 × 10³ Pa drops two powers of ten.`,
      },
    ],
  },
  [r`What is one atmosphere in pascals, in millimeters of mercury and in meters of water?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The gas in a sealed bottle of sparkling water is at an absolute pressure of 3.0 atm. With 1 atm = 760 torr, what is this pressure in torr?`,
        options: [r`253 torr`, r`3000 torr`, r`760 torr`, r`2280 torr`],
        correctAnswer: 3,
        explanation: r`Multiply by 760 torr per atmosphere: 3.0 × 760 = 2280 torr. Dividing 760 by 3.0 gives 253 torr, which would be a pressure below one atmosphere. A value of 3000 torr treats one atmosphere as 1000 torr, and 760 torr is just 1 atm.`,
      },
      {
        question: r`A pressure washer delivers water at 1.5 × 10⁷ Pa. With 1 atm ≈ 1.0 × 10⁵ Pa, about how many atmospheres is this?`,
        options: [r`15 atm`, r`150 atm`, r`1500 atm`, r`1.5 atm`],
        correctAnswer: 1,
        explanation: r`Divide by the pascals in one atmosphere: (1.5 × 10⁷)/(1.0 × 10⁵) = 1.5 × 10² = 150 atm. The values 15 atm and 1500 atm are each off by one power of ten. A value of 1.5 atm keeps the leading digits and drops the powers of ten altogether.`,
      },
      {
        question: r`Outside a jet at cruising altitude, the air is at 190 mmHg. With 1 atm ≈ 1.0 × 10⁵ Pa = 760 mmHg, what is this pressure in pascals?`,
        options: [r`4.0 × 10⁵ Pa`, r`1.9 × 10⁴ Pa`, r`2.5 × 10⁴ Pa`, r`2.5 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`190 mmHg is 190/760 = 0.25 atm, and 0.25 × 1.0 × 10⁵ Pa = 2.5 × 10⁴ Pa. Inverting the fraction to 760/190 = 4 gives 4.0 × 10⁵ Pa, which is more than sea-level pressure. The value 1.9 × 10⁴ Pa treats 1 mmHg as 100 Pa, and 2.5 × 10⁵ Pa is a slip in the power of ten.`,
      },
      {
        question: r`A city water main is at a gauge pressure of 4.0 atm. One atmosphere is about the pressure under 10 m of water. About how tall a column of water can this gauge pressure hold up in a vertical pipe that is open at the top?`,
        options: [r`40 m`, r`4.0 m`, r`400 m`, r`50 m`],
        correctAnswer: 0,
        explanation: r`Each atmosphere of gauge pressure holds up about 10 m of water, so 4.0 atm holds up about 4.0 × 10 = 40 m. A height of 50 m adds an extra atmosphere, but the air already presses on the open top of the column. The values 4.0 m and 400 m are slips in the power of ten.`,
      },
      {
        question: r`One atmosphere is the pressure under about 10 m of water or under 760 mm of mercury. A column of water 5.0 m tall gives about the same pressure as a column of mercury of what height?`,
        options: [r`5000 mm`, r`380 mm`, r`1520 mm`, r`38 mm`],
        correctAnswer: 1,
        explanation: r`A 5.0 m column of water gives 5.0/10 = 0.50 atm, and 0.50 × 760 mm = 380 mm of mercury. A height of 1520 mm inverts the fraction to 10/5.0 = 2 atm. A height of 5000 mm assumes the two liquids need equal heights, and 38 mm is a slip in the power of ten.`,
      },
      {
        question: r`A freeze dryer holds its chamber at an absolute pressure of 7.6 torr. With 1 atm ≈ 1.0 × 10⁵ Pa = 760 torr, what is this pressure in pascals?`,
        options: [r`1.0 × 10⁷ Pa`, r`7.6 × 10⁵ Pa`, r`7.6 × 10³ Pa`, r`1.0 × 10³ Pa`],
        correctAnswer: 3,
        explanation: r`7.6 torr is 7.6/760 = 0.010 atm, and 0.010 × 1.0 × 10⁵ Pa = 1.0 × 10³ Pa. Inverting the fraction to 760/7.6 = 100 gives 1.0 × 10⁷ Pa. The value 7.6 × 10⁵ Pa treats torr as atmospheres, and 7.6 × 10³ Pa treats one torr as 1000 Pa.`,
      },
    ],
  },
  [r`What is a millimeter of mercury, and how many pascals is it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sensitive gauge shows a pressure of 2 mmHg, the pressure under a column of mercury 2 mm tall. Mercury's density is 13,600 kg/m³ and g = 10 m/s². About how many pascals is this?`,
        options: [r`272 Pa`, r`27.2 Pa`, r`2720 Pa`, r`2.72 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`Use ρgh with the height in meters: (13,600)(10)(0.002) = 272 Pa, about twice the 133 Pa of a single millimeter. Leaving the height as 2 gives 2.72 × 10⁵ Pa, which is nearly three atmospheres. The values 27.2 Pa and 2720 Pa are each off by one power of ten in the conversion from millimeters.`,
      },
      {
        question: r`Ventilation engineers sometimes state small pressures in millimeters of water: the pressure under a column of water 1 mm tall. Water's density is 1000 kg/m³ and g = 10 m/s². How many pascals is one millimeter of water?`,
        options: [r`1.0 Pa`, r`100 Pa`, r`10 Pa`, r`136 Pa`],
        correctAnswer: 2,
        explanation: r`The same working that defines the millimeter of mercury applies: ρgh = (1000)(10)(0.001) = 10 Pa. The values 1.0 Pa and 100 Pa are slips in converting 1 mm to 0.001 m. A value of 136 Pa uses mercury's density of 13,600 kg/m³ instead of water's.`,
      },
      {
        question: r`One millimeter of mercury is the pressure under a column of mercury 1 mm tall. Mercury is 13.6 times as dense as water. A column of water of what height gives the same pressure?`,
        options: [r`1.0 mm`, r`13.6 mm`, r`0.074 mm`, r`136 mm`],
        correctAnswer: 1,
        explanation: r`The pressure under a column is ρgh, so a liquid 13.6 times less dense needs a column 13.6 times taller: 13.6 mm of water. A height of 0.074 mm divides by 13.6 instead of multiplying. A height of 1.0 mm ignores the difference in density, and 136 mm is off by a power of ten.`,
      },
      {
        question: r`One millimeter of mercury is about 133 Pa. About how many millimeters of mercury make up a pressure of 1 kPa?`,
        options: [r`0.133 mmHg`, r`133 mmHg`, r`75 mmHg`, r`7.5 mmHg`],
        correctAnswer: 3,
        explanation: r`1 kPa is 1000 Pa, and 1000/133 ≈ 7.5 mmHg. A value of 133 mmHg multiplies instead of dividing and forgets the kilo, and 0.133 mmHg divides 133 by 1000. A value of 75 mmHg is off by a power of ten: that is about 10 kPa.`,
      },
      {
        question: r`A column of mercury gives a pressure of 2720 Pa at its base. Mercury's density is 13,600 kg/m³ and g = 10 m/s². How tall is the column?`,
        options: [r`2.0 mm`, r`200 mm`, r`20 mm`, r`27 mm`],
        correctAnswer: 2,
        explanation: r`h = P/(ρg) = 2720/(13,600 × 10) = 0.020 m = 20 mm, which fits with each millimeter of mercury being about 136 Pa when g = 10 m/s². The values 2.0 mm and 200 mm are slips in the power of ten. A height of 27 mm treats one millimeter of mercury as 100 Pa.`,
      },
      {
        question: r`Aviation weather reports state pressure in inches of mercury. One inch of mercury is the pressure under a column of mercury about 25 mm tall. With mercury at 13,600 kg/m³ and g = 10 m/s², about how many pascals is one inch of mercury?`,
        options: [r`3400 Pa`, r`340 Pa`, r`34,000 Pa`, r`133 Pa`],
        correctAnswer: 0,
        explanation: r`ρgh = (13,600)(10)(0.025) = 3400 Pa, which is 25 times the pressure of one millimeter of mercury. The values 340 Pa and 34,000 Pa are slips in converting 25 mm to 0.025 m. A value of 133 Pa is the pressure under just one millimeter of mercury.`,
      },
    ],
  },
  [r`How does a mercury barometer work, and what kind of pressure does it read?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A mercury barometer with a column 760 mm tall stands inside a sealed chamber. A pump then removes essentially ALL of the air from the chamber. What happens to the mercury in the tube?`,
        options: [
          r`It stays at 760 mm, since the vacuum above it holds it up`,
          r`It rises to fill the tube, since the vacuum draws it up`,
          r`It falls to 380 mm, since half of its support is lost`,
          r`It falls level with the dish, since no air presses there`,
        ],
        correctAnswer: 3,
        explanation: r`The column is held up by the air pressing on the mercury in the dish, and its height shows that absolute pressure. With no air left, nothing pushes on the dish, so the column falls until it is level with the dish. A vacuum cannot hold or pull anything, and nothing in the setup would leave half of the support behind.`,
      },
      {
        question: r`In a storm shelter, a mercury barometer's column is 0.70 m tall, with a near vacuum above it. Mercury's density is 13,600 kg/m³ and g = 10 m/s². What is the absolute pressure of the air in the shelter?`,
        options: [
          r`9.52 × 10⁴ Pa, equal to ρgh at the column's base`,
          r`1.95 × 10⁵ Pa, one atmosphere more than that ρgh`,
          r`9.52 × 10³ Pa, equal to ρgh at the column's base`,
          r`−4.8 × 10³ Pa, one atmosphere less than that ρgh`,
        ],
        correctAnswer: 0,
        explanation: r`The column settles when ρgh at its base matches the air pressing on the dish: (13,600)(10)(0.70) = 9.52 × 10⁴ Pa. With a near vacuum on top there is nothing to add or subtract, so this is the air's absolute pressure. The value 9.52 × 10³ Pa leaves out g, and the other two treat the reading as a gauge pressure that needs an atmosphere added or taken away.`,
      },
    ],
  },
  [r`What changes the height of a barometer's mercury column: a wider tube, or a higher altitude?`]: {
    kind: 'concept',
    more: [
      {
        question: r`At the same moment, one mercury barometer reads 760 mm and a second reads 700 mm. Both are in good working order. Which of these could explain the difference?`,
        options: [
          r`The second has a wider tube, so its mercury spreads out`,
          r`The second is at a higher altitude, with less air above`,
          r`The second has a narrower tube, so it holds less mercury`,
          r`The second is at a lower altitude, with more air above`,
        ],
        correctAnswer: 1,
        explanation: r`The column's height is set by ρgh matching the air pressure, so a shorter column means lower air pressure, which is what a higher altitude gives. There is no area in ρgh, so neither a wider nor a narrower tube changes the height. A lower altitude would put more air above the barometer and make its column taller, not shorter.`,
      },
      {
        question: r`A maker builds a new mercury barometer whose tube has twice the cross-sectional area of the old one. Both stand at sea level, where the old one reads 760 mm. How do the height of the new column and the mass of mercury it holds up compare with the old one's?`,
        options: [
          r`The height halves to 380 mm and the mass held up stays the same`,
          r`The height doubles to 1520 mm and the mass held up doubles`,
          r`The height stays at 760 mm and the mass held up stays the same`,
          r`The height stays at 760 mm and the mass held up doubles`,
        ],
        correctAnswer: 3,
        explanation: r`The height depends only on the air pressure, through ρgh, so it stays at 760 mm in any tube. A tube with twice the area holds twice the volume of mercury at that height, so the mass held up doubles; the air pushes on twice the area, so it can support it. Halving the height assumes that the air can hold up only a fixed mass of mercury.`,
      },
    ],
  },
  [r`Why is mercury, not water, used in a barometer?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A barometer is filled with a dense liquid of density 2000 kg/m³ and set up at sea level, where the air is at 1.0 × 10⁵ Pa. With g = 10 m/s², how tall is its column?`,
        options: [r`0.50 m`, r`50 m`, r`5.0 m`, r`0.76 m`],
        correctAnswer: 2,
        explanation: r`The column stands where ρgh matches the air pressure: h = P/(ρg) = (1.0 × 10⁵)/(2000 × 10) = 5.0 m. The values 0.50 m and 50 m are slips in the power of ten. A height of 0.76 m is right only for mercury, which is 6.8 times as dense as this liquid.`,
      },
      {
        question: r`A mercury barometer (13,600 kg/m³) stands at 0.76 m. A second barometer beside it is filled with a liquid of density 1700 kg/m³, which is 8 times less dense than mercury. About how tall is the second barometer's column?`,
        options: [r`6.1 m`, r`0.095 m`, r`0.76 m`, r`10.3 m`],
        correctAnswer: 0,
        explanation: r`For the same air pressure, ρh is the same in both barometers, so a liquid 8 times less dense stands 8 times taller: 8 × 0.76 = 6.08 m, about 6.1 m. Dividing by 8 gives 0.095 m. A height of 0.76 m ignores the change in density, and 10.3 m is the height for water.`,
      },
      {
        question: r`On a hilltop, a barometer filled with water (1000 kg/m³) has a column 9.0 m tall. Ignoring the small amount of water vapor above the column and using g = 10 m/s², what is the air pressure on the hilltop?`,
        options: [r`9.0 × 10³ Pa`, r`1.9 × 10⁵ Pa`, r`1.22 × 10⁶ Pa`, r`9.0 × 10⁴ Pa`],
        correctAnswer: 3,
        explanation: r`The air pressure equals ρgh at the base of the column: (1000)(10)(9.0) = 9.0 × 10⁴ Pa. Leaving out g gives 9.0 × 10³ Pa, and adding a sea-level atmosphere to the reading gives 1.9 × 10⁵ Pa. The value 1.22 × 10⁶ Pa uses mercury's density for a column of water.`,
      },
      {
        question: r`A barometer is filled with a liquid that is 4.0 times as dense as water. Mercury is 13.6 times as dense as water. Compared with a mercury barometer standing beside it, the column of this liquid is:`,
        options: [r`4.0 times taller`, r`3.4 times taller`, r`3.4 times shorter`, r`4.0 times shorter`],
        correctAnswer: 1,
        explanation: r`For the same air pressure the column's height is inversely proportional to the liquid's density. This liquid is 13.6/4.0 = 3.4 times less dense than mercury, so its column is 3.4 times taller. Calling it shorter inverts the relationship, and the factor 4.0 compares the liquid with water instead of with mercury.`,
      },
      {
        question: r`A pump at the top of a pipe lifts oil (800 kg/m³) out of an open tank by lowering the pressure at the top of the pipe. The air on the tank is at 1.0 × 10⁵ Pa and g = 10 m/s². Even with a perfect vacuum at the top, what is the greatest height the oil can be lifted?`,
        options: [r`12.5 m`, r`8.0 m`, r`10 m`, r`125 m`],
        correctAnswer: 0,
        explanation: r`The air can hold up a column only until ρgh matches its pressure, just as in a barometer: h = P/(ρg) = (1.0 × 10⁵)/(800 × 10) = 12.5 m. A height of 10 m is the limit for water, and 8.0 m multiplies that by 0.8 instead of dividing. A height of 125 m leaves out g.`,
      },
      {
        question: r`A mercury barometer stands inside a low-pressure chamber where the air is held at 3.4 × 10⁴ Pa. Mercury's density is 13,600 kg/m³ and g = 10 m/s². How tall is the barometer's column?`,
        options: [r`2.5 m`, r`0.025 m`, r`0.25 m`, r`0.51 m`],
        correctAnswer: 2,
        explanation: r`h = P/(ρg) = (3.4 × 10⁴)/(13,600 × 10) = 0.25 m. The values 2.5 m and 0.025 m are slips in the power of ten. A height of 0.51 m subtracts the correct answer from the sea-level height of 0.76 m.`,
      },
    ],
  },
  [r`What does an open-tube manometer measure?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The gas supply for a lab burner is joined to an open-tube mercury manometer. The mercury stands 5.0 cm higher in the open arm than in the arm joined to the supply. Mercury's density is 13,600 kg/m³, g = 10 m/s² and the room's air is at 1.0 × 10⁵ Pa. What is the gauge pressure of the gas?`,
        options: [r`6.8 × 10² Pa`, r`6.8 × 10³ Pa`, r`6.8 × 10⁴ Pa`, r`1.068 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`An open-tube manometer shows gauge pressure directly: ρgΔh = (13,600)(10)(0.050) = 6800 Pa = 6.8 × 10³ Pa. The values 6.8 × 10² Pa and 6.8 × 10⁴ Pa are slips in converting 5.0 cm to 0.050 m. Adding the room's air pressure gives 1.068 × 10⁵ Pa, which is the absolute pressure.`,
      },
      {
        question: r`A gas tap with a gauge pressure of 1800 Pa is joined to an open-tube manometer filled with oil of density 900 kg/m³. With g = 10 m/s², what height difference appears between the oil's two surfaces?`,
        options: [r`0.18 m`, r`2.0 m`, r`0.020 m`, r`0.20 m`],
        correctAnswer: 3,
        explanation: r`From P_gauge = ρgΔh, Δh = 1800/(900 × 10) = 0.20 m. A value of 0.18 m uses water's density of 1000 kg/m³. The values 2.0 m and 0.020 m are slips in the power of ten.`,
      },
      {
        question: r`A student sucks gently on a hose joined to one arm of an open-tube water manometer. The water settles 40 cm HIGHER in the arm joined to the hose than in the arm open to the room. With water at 1000 kg/m³ and g = 10 m/s², what is the gauge pressure of the air in the hose?`,
        options: [r`−4000 Pa`, r`+4000 Pa`, r`−400 Pa`, r`+400 Pa`],
        correctAnswer: 0,
        explanation: r`The size of the gauge pressure is ρgΔh = (1000)(10)(0.40) = 4000 Pa. The water stands higher on the hose's side, so the room's air has pushed it there and the air in the hose is below atmospheric: −4000 Pa. A positive sign would need the water to stand higher in the open arm, and 400 Pa is a slip in converting 40 cm.`,
      },
      {
        question: r`A nitrogen line feeds one side of a U-shaped tube of mercury whose other side is open to a room at 1.0 × 10⁵ Pa. The mercury surface on the room's side sits 30 mm above the surface on the nitrogen's side. With 1 mmHg ≈ 133 Pa, about what is the nitrogen's gauge pressure?`,
        options: [r`about 30 Pa`, r`about 400 Pa`, r`about 4000 Pa`, r`about 104,000 Pa`],
        correctAnswer: 2,
        explanation: r`A 30 mm difference in mercury levels is a gauge pressure of 30 mmHg, and 30 × 133 Pa = 3990 Pa, about 4000 Pa. A value of 30 Pa treats millimeters of mercury as pascals, and 400 Pa is a slip in the power of ten. About 104,000 Pa is the nitrogen's absolute pressure, with the room's air added.`,
      },
      {
        question: r`A gas at an absolute pressure of 101.2 kPa is joined to an open-tube manometer in a room at 100.0 kPa, and the height difference between the arms is 6.0 cm. The gas is then pumped up to an absolute pressure of 103.6 kPa. What is the new height difference?`,
        options: [r`6.1 cm`, r`12 cm`, r`8.4 cm`, r`18 cm`],
        correctAnswer: 3,
        explanation: r`The height difference follows the GAUGE pressure, which rises from 1.2 kPa to 3.6 kPa, a factor of 3, so Δh becomes 3 × 6.0 = 18 cm. A value of 6.1 cm scales with the absolute pressures, 103.6/101.2. A value of 8.4 cm adds the 2.4 kPa rise to 6.0 as if it were centimeters, and 12 cm only doubles the height.`,
      },
      {
        question: r`To test the strength of the breathing muscles, a patient blows into a hose joined to an open-tube water manometer and reaches a gauge pressure of 1.0 × 10⁴ Pa. The room's air is at 1.0 × 10⁵ Pa, water's density is 1000 kg/m³ and g = 10 m/s². What height difference does the water show?`,
        options: [r`0.10 m`, r`1.0 m`, r`10 m`, r`11 m`],
        correctAnswer: 1,
        explanation: r`Δh = P_gauge/(ρg) = (1.0 × 10⁴)/(1000 × 10) = 1.0 m. A value of 11 m uses the absolute pressure, 1.1 × 10⁵ Pa, but the open arm already carries the atmosphere. The values 0.10 m and 10 m are slips in the power of ten.`,
      },
    ],
  },
  [r`In an open-tube manometer, on which side does the liquid stand lower?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A U-shaped tube of liquid has its left arm joined to a tank of gas at 150 kPa and its right arm joined to a tank of gas at 120 kPa. Neither arm is open to the room, where the air is at 100 kPa. How does the liquid settle?`,
        options: [
          r`Level in both arms, since both tanks are above 100 kPa`,
          r`Lower in the right arm, on the side of the 120 kPa tank`,
          r`Lower in the left arm, on the side of the 150 kPa tank`,
          r`Level in both arms, since neither arm is open to the room`,
        ],
        correctAnswer: 2,
        explanation: r`The liquid is pushed down on whichever side has the higher pressure, so it stands lower in the left arm, next to the 150 kPa tank. Only the difference between the two sides matters, so it does not help that both are above the room's pressure or that neither arm is open. The liquid would be lower on the right only if the 120 kPa tank were the higher-pressure side.`,
      },
      {
        question: r`A flask of gas is joined to an open-tube manometer, and at first the liquid stands 4 cm LOWER on the flask's side than in the open arm. A pump then slowly removes gas until the flask is well below atmospheric pressure. What does the liquid surface on the flask's side do?`,
        options: [
          r`It rises, passes level, and ends higher than the open arm's`,
          r`It rises until level with the open arm's, and then it stops`,
          r`It falls steadily farther below the open arm's the whole time`,
          r`It stays 4 cm lower, since the liquid's density is unchanged`,
        ],
        correctAnswer: 0,
        explanation: r`The liquid stands lower on the higher-pressure side. At first that is the flask's side, but as the flask's pressure drops through atmospheric the two surfaces come level, and below atmospheric the room's air pushes the open arm's surface down and the flask's side up. Stopping at level would mean the flask could not go below atmospheric, and falling farther would need the flask's pressure to rise.`,
      },
    ],
  },
  [r`What does a blood pressure reading of 120/80 mean?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A runner's blood pressure is recorded as 110/70 in a town where atmospheric pressure is 750 mmHg. What is the ABSOLUTE pressure in the artery at the peak of each heartbeat?`,
        options: [r`640 mmHg`, r`820 mmHg`, r`870 mmHg`, r`860 mmHg`],
        correctAnswer: 3,
        explanation: r`The first number is the peak (systolic) gauge pressure, 110 mmHg, so the absolute pressure is 110 + 750 = 860 mmHg. A value of 820 mmHg uses the minimum, 70 mmHg, instead of the peak. A value of 870 mmHg adds 760 mmHg where this town's air is at 750 mmHg, and 640 mmHg subtracts instead of adding.`,
      },
      {
        question: r`A sensor at the tip of a catheter in a patient's artery reads ABSOLUTE pressure. Over each heartbeat it swings between a high of 895 mmHg and a low of 835 mmHg. Atmospheric pressure in the ward is 755 mmHg. How would this patient's blood pressure be written in the usual way?`,
        options: [r`135/75`, r`140/80`, r`895/835`, r`1650/1590`],
        correctAnswer: 1,
        explanation: r`A blood pressure reading gives gauge pressures, peak over minimum, so subtract the atmosphere from each: 895 − 755 = 140 and 835 − 755 = 80, written 140/80. The reading 135/75 subtracts 760 mmHg where the ward's air is at 755 mmHg. Leaving the absolute values gives 895/835, and adding the atmosphere gives 1650/1590.`,
      },
      {
        question: r`A patient's blood pressure is recorded as 135/85 in a mountain clinic where atmospheric pressure is 700 mmHg. By how much does the ABSOLUTE pressure in the artery change between the peak and the minimum of each heartbeat?`,
        options: [r`750 mmHg`, r`220 mmHg`, r`50 mmHg`, r`835 mmHg`],
        correctAnswer: 2,
        explanation: r`The absolute pressures are 135 + 700 = 835 mmHg and 85 + 700 = 785 mmHg, which differ by 50 mmHg; the atmosphere is added to both, so it cancels. A value of 750 mmHg adds the atmosphere to that difference, and 220 mmHg adds the two readings. A value of 835 mmHg is the peak absolute pressure itself.`,
      },
      {
        question: r`A patient's blood pressure is 120/80 at sea level, where atmospheric pressure is 760 mmHg. What is the ratio of the ABSOLUTE pressure at the peak to the ABSOLUTE pressure at the minimum?`,
        options: [r`about 1.05`, r`about 1.50`, r`about 0.95`, r`about 0.67`],
        correctAnswer: 0,
        explanation: r`Both numbers are gauge pressures, so the absolute pressures are 880 mmHg and 840 mmHg, and 880/840 ≈ 1.05. A ratio of 1.50 divides the gauge values, 120/80. The values 0.95 and 0.67 are those two ratios turned upside down.`,
      },
      {
        question: r`A patient's blood pressure is recorded as 160/100 at sea level, where atmospheric pressure is 760 mmHg. With 1 mmHg ≈ 133 Pa, what is the minimum GAUGE pressure in the artery during each heartbeat, in pascals?`,
        options: [r`2.13 × 10⁴ Pa`, r`1.33 × 10⁴ Pa`, r`1.14 × 10⁵ Pa`, r`1.33 × 10² Pa`],
        correctAnswer: 1,
        explanation: r`The second number is the minimum (diastolic) gauge pressure, 100 mmHg, and 100 × 133 Pa = 1.33 × 10⁴ Pa. The value 2.13 × 10⁴ Pa converts the peak, 160 mmHg. The value 1.14 × 10⁵ Pa converts the absolute pressure, 860 mmHg, and 1.33 × 10² Pa is only 1 mmHg.`,
      },
      {
        question: r`A diver lives for a week in an undersea habitat whose air is kept at 1520 mmHg, twice the pressure at sea level. A cuff used inside the habitat shows a blood pressure of 120/80. What is the ABSOLUTE pressure in the diver's artery at the peak of each heartbeat?`,
        options: [r`880 mmHg`, r`1400 mmHg`, r`1600 mmHg`, r`1640 mmHg`],
        correctAnswer: 3,
        explanation: r`The cuff reads gauge pressure, the amount above the surrounding air, so the peak absolute pressure is 120 + 1520 = 1640 mmHg. A value of 880 mmHg adds the sea-level 760 mmHg, which is not the pressure of the air around this cuff. A value of 1600 mmHg uses the minimum, 80 mmHg, and 1400 mmHg subtracts the peak instead of adding it.`,
      },
    ],
  },
  [r`How does blood pressure change with height in a standing person?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A woman stands with one arm raised, so that an artery in her hand is 0.75 m above her heart. The mean arterial pressure at heart level is 95 mmHg. Blood's density is 1060 kg/m³, g = 10 m/s² and 1 mmHg ≈ 133 Pa. About what is the mean pressure in the hand's artery?`,
        options: [r`35 mmHg`, r`155 mmHg`, r`95 mmHg`, r`60 mmHg`],
        correctAnswer: 0,
        explanation: r`The column of blood is worth ρgh = (1060)(10)(0.75) = 7950 Pa, and 7950/133 ≈ 60 mmHg. The hand is above the heart, so subtract: 95 − 60 = 35 mmHg. Adding gives 155 mmHg, which would fit a point below the heart, and 60 mmHg is only the size of the change.`,
      },
      {
        question: r`When a man stands, the mean arterial pressure is 100 mmHg at his heart and about 190 mmHg at his feet, 1.2 m below. He then lies flat on a bed, so his feet and heart are at the same height. Taking only the effect of height into account, about what is the mean arterial pressure at his feet now?`,
        options: [r`about 190 mmHg`, r`about 10 mmHg`, r`about 100 mmHg`, r`about 145 mmHg`],
        correctAnswer: 2,
        explanation: r`The extra 90 mmHg at the feet is ρgh for the 1.2 m column of blood below the heart. Lying flat makes h zero, so the term vanishes and the feet are at about the heart's 100 mmHg. Keeping 190 mmHg ignores the change in height, 10 mmHg subtracts the 90 mmHg, and 145 mmHg removes only half of it.`,
      },
      {
        question: r`In a standing man, an artery at the top of the head is 0.50 m above the heart and an artery in the foot is 1.25 m below it. Blood's density is 1060 kg/m³, g = 10 m/s² and 1 mmHg ≈ 133 Pa. By about how much does the pressure in the foot's artery exceed the pressure in the head's artery, from height alone?`,
        options: [r`60 mmHg`, r`140 mmHg`, r`100 mmHg`, r`40 mmHg`],
        correctAnswer: 1,
        explanation: r`The two arteries are 0.50 + 1.25 = 1.75 m apart vertically, so the difference is ρgh = (1060)(10)(1.75) = 18,550 Pa, and 18,550/133 ≈ 140 mmHg. A value of 60 mmHg subtracts the two distances to get 0.75 m. The values 100 mmHg and 40 mmHg compare the foot or the head with the heart alone.`,
      },
      {
        question: r`A pressure sensor joined to a patient's artery by a fluid-filled line should sit at heart level. By mistake it is clamped 0.20 m BELOW the heart. The fluid in the line has the density of blood, 1060 kg/m³, and g = 10 m/s². How does the error affect the reading?`,
        options: [r`It is 212 Pa too high`, r`It is 2120 Pa too low`, r`It is 212 Pa too low`, r`It is 2120 Pa too high`],
        correctAnswer: 3,
        explanation: r`Below the heart, add ρgh = (1060)(10)(0.20) = 2120 Pa, so the sensor reads 2120 Pa too high. Reading too low would fit a sensor placed above the heart. A size of 212 Pa leaves out g.`,
      },
      {
        question: r`In a seated pilot, the brain is 0.30 m above the heart, and in level flight this column of blood lowers the arterial pressure at the brain by about 24 mmHg. In a tight turn the pilot feels an effective g that is 5 times normal. By about how much does the same column lower the pressure at the brain during the turn?`,
        options: [r`24 mmHg`, r`4.8 mmHg`, r`120 mmHg`, r`29 mmHg`],
        correctAnswer: 2,
        explanation: r`The change with height is ρgh, which is proportional to g, so 5 times the g gives 5 × 24 = 120 mmHg. That is as large as a typical peak pressure at the heart, which is why pilots can black out in such turns. A value of 4.8 mmHg divides by 5, 29 mmHg adds 5, and 24 mmHg ignores g.`,
      },
      {
        question: r`A nurse wants the error from a cuff's height to stay under about 4 mmHg. Blood's density is 1060 kg/m³, g = 10 m/s² and 1 mmHg ≈ 133 Pa. About what is the greatest distance above or below heart level at which the cuff can sit?`,
        options: [r`5 cm`, r`0.5 cm`, r`50 cm`, r`4 cm`],
        correctAnswer: 0,
        explanation: r`4 mmHg is 4 × 133 = 532 Pa, and h = P/(ρg) = 532/(1060 × 10) ≈ 0.050 m = 5 cm. The values 0.5 cm and 50 cm are slips in the power of ten. A value of 4 cm assumes one millimeter of mercury per centimeter of height, but each centimeter is worth only about 0.8 mmHg.`,
      },
    ],
  },
  [r`How do you tell from an open-tube manometer whether a gas is above or below atmospheric pressure?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A child blows up a balloon and slips its neck over one arm of an open-tube water manometer, so the stretched balloon squeezes its air against the water. What does the manometer show?`,
        options: [
          r`Water higher in the balloon's arm, as the balloon's air is above atmospheric`,
          r`Water higher in the open arm, as the balloon's air is above atmospheric`,
          r`Water higher in the open arm, as the balloon's air is below atmospheric`,
          r`Water level in both arms, as the balloon's air is at atmospheric`,
        ],
        correctAnswer: 1,
        explanation: r`The stretched rubber squeezes the air inside, so it is above atmospheric pressure, and a gas above atmospheric pushes the liquid away from itself and up the open arm. Water higher in the balloon's arm would show air below atmospheric. Level water would mean the balloon's air matched the room's, which is true only for a limp balloon.`,
      },
      {
        question: r`Three flasks are each joined to their own open-tube mercury manometer in the same room. For flask X the mercury stands 6 cm higher in the open arm. For flask Y the two arms are level. For flask Z the mercury stands 6 cm higher in the arm joined to the flask. Which order runs from the highest gas pressure to the lowest?`,
        options: [
          r`Z, then Y, then X`,
          r`Y, then X tied with Z`,
          r`X, then Y, then Z`,
          r`X tied with Z, then Y`,
        ],
        correctAnswer: 2,
        explanation: r`Mercury higher in the open arm means the gas has pushed it there, so X is above atmospheric. Level arms put Y at atmospheric, and mercury higher on the flask's side puts Z below atmospheric, giving X, then Y, then Z. The reverse order reads the arms backward, and the tied orders treat the 6 cm differences as equal pressures when they lie on opposite sides of atmospheric.`,
      },
    ],
  },
  [r`How do you get a gas's absolute pressure from an open-tube manometer?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A fermentation tank is joined to an open-tube water manometer. The water stands 0.80 m higher in the open arm than in the arm joined to the tank. Water's density is 1000 kg/m³, g = 10 m/s² and the room's air is at 1.00 × 10⁵ Pa. What is the absolute pressure of the gas in the tank?`,
        options: [r`9.2 × 10⁴ Pa`, r`8.0 × 10³ Pa`, r`1.08 × 10⁵ Pa`, r`1.80 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`The open arm stands higher, so add: P = P_atm + ρgΔh = 1.00 × 10⁵ + (1000)(10)(0.80) = 1.08 × 10⁵ Pa. Subtracting gives 9.2 × 10⁴ Pa, which would fit an open arm that stands lower. The value 8.0 × 10³ Pa is only the gauge pressure, and 1.80 × 10⁵ Pa takes ρgΔh ten times too large.`,
      },
      {
        question: r`A bulb of gas is joined to an open-tube mercury manometer on a day when a barometer in the room reads 745 mmHg. The mercury stands 95 mm higher in the open arm than in the arm joined to the bulb. What is the absolute pressure of the gas?`,
        options: [r`840 mmHg`, r`650 mmHg`, r`95 mmHg`, r`855 mmHg`],
        correctAnswer: 0,
        explanation: r`With mercury in the tube, the height difference in millimeters is the gauge pressure in mmHg. The open arm stands higher, so add: 745 + 95 = 840 mmHg. Subtracting gives 650 mmHg, and 855 mmHg adds to 760 mmHg where the room is at 745 mmHg. A value of 95 mmHg is the gauge pressure alone.`,
      },
      {
        question: r`A filtration flask is joined to an open-tube manometer filled with oil of density 800 kg/m³. The oil in the open arm stands 0.50 m LOWER than the oil in the arm joined to the flask. With g = 10 m/s² and the room's air at 1.00 × 10⁵ Pa, what is the absolute pressure in the flask?`,
        options: [r`1.04 × 10⁵ Pa`, r`4.0 × 10³ Pa`, r`9.5 × 10⁴ Pa`, r`9.6 × 10⁴ Pa`],
        correctAnswer: 3,
        explanation: r`The open arm stands lower, so subtract: P = P_atm − ρgΔh = 1.00 × 10⁵ − (800)(10)(0.50) = 1.00 × 10⁵ − 4.0 × 10³ = 9.6 × 10⁴ Pa. Adding gives 1.04 × 10⁵ Pa, and 4.0 × 10³ Pa is only the size of the difference from atmospheric. The value 9.5 × 10⁴ Pa uses water's density instead of the oil's.`,
      },
      {
        question: r`A gas at an absolute pressure of 1.136 × 10⁵ Pa is joined to an open-tube mercury manometer in a room at 1.000 × 10⁵ Pa. Mercury's density is 13,600 kg/m³ and g = 10 m/s². How do the mercury levels settle?`,
        options: [
          r`0.10 m higher in the gas's arm`,
          r`0.10 m higher in the open arm`,
          r`1.0 m higher in the open arm`,
          r`1.0 m higher in the gas's arm`,
        ],
        correctAnswer: 1,
        explanation: r`The gas is above atmospheric by 1.136 × 10⁵ − 1.000 × 10⁵ = 1.36 × 10⁴ Pa, so Δh = (1.36 × 10⁴)/(13,600 × 10) = 0.10 m. A gas above atmospheric pushes the mercury up the open arm, so the open arm stands higher. A difference of 1.0 m leaves out g, and mercury higher in the gas's arm would mean a gas below atmospheric.`,
      },
      {
        question: r`A sealed reference bulb holds gas at a known absolute pressure of 1.03 × 10⁵ Pa. Joined to an open-tube water manometer, it makes the water stand 0.50 m higher in the open arm than in the bulb's arm. With water at 1000 kg/m³ and g = 10 m/s², what is the pressure of the room's air?`,
        options: [r`9.8 × 10⁴ Pa`, r`1.08 × 10⁵ Pa`, r`5.0 × 10³ Pa`, r`1.03 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`With the open arm higher, P = P_atm + ρgΔh, so P_atm = P − ρgΔh = 1.03 × 10⁵ − (1000)(10)(0.50) = 9.8 × 10⁴ Pa. Adding instead gives 1.08 × 10⁵ Pa, which would put the room above the gas. The value 5.0 × 10³ Pa is the gauge pressure, and 1.03 × 10⁵ Pa is the gas's own pressure.`,
      },
      {
        question: r`In a mountain lab where the air is at 80.0 kPa, a gas line is joined to an open-tube mercury manometer. The mercury stands 0.15 m higher in the open arm than in the arm joined to the line. Mercury's density is 13,600 kg/m³ and g = 10 m/s². What is the absolute pressure in the gas line?`,
        options: [r`59.6 kPa`, r`20.4 kPa`, r`100.4 kPa`, r`120.4 kPa`],
        correctAnswer: 2,
        explanation: r`ρgΔh = (13,600)(10)(0.15) = 20,400 Pa = 20.4 kPa, and the open arm stands higher, so add it to the local air pressure: 80.0 + 20.4 = 100.4 kPa. Subtracting gives 59.6 kPa, and 20.4 kPa is the gauge pressure alone. The value 120.4 kPa adds to a sea-level 100 kPa instead of the lab's 80.0 kPa.`,
      },
    ],
  },
  [r`A manometer's liquid is replaced by a less dense one. How does the height difference change for the same gas?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An open-tube mercury manometer joined to a gas line shows a height difference of 10 mm. The mercury is replaced by water, which is 13.6 times less dense, and the gas line is unchanged. What height difference does the water show?`,
        options: [r`0.74 mm`, r`10 mm`, r`23.6 mm`, r`136 mm`],
        correctAnswer: 3,
        explanation: r`The gauge pressure is the same, so ρ₁Δh₁ = ρ₂Δh₂, and a liquid 13.6 times less dense shows 13.6 times the height: 13.6 × 10 = 136 mm. Dividing by 13.6 gives 0.74 mm, the usual trap. A value of 10 mm ignores the change of liquid, and 23.6 mm adds 13.6 instead of multiplying.`,
      },
      {
        question: r`An open-tube water manometer (1000 kg/m³) joined to a gas tank shows a height difference of 40 cm. The water is replaced by oil of density 800 kg/m³, and the tank is unchanged. What height difference does the oil show?`,
        options: [r`32 cm`, r`50 cm`, r`40 cm`, r`48 cm`],
        correctAnswer: 1,
        explanation: r`From ρ₁Δh₁ = ρ₂Δh₂, Δh₂ = (1000)(40 cm)/800 = 50 cm: the less dense liquid shows the larger difference. Multiplying by 800/1000 gives 32 cm, which wrongly shrinks the height. A value of 48 cm raises 40 cm by 20%, and 40 cm ignores the change of liquid.`,
      },
      {
        question: r`The same gas supply is joined in turn to two open-tube manometers. One, filled with water (1000 kg/m³), shows a height difference of 30 cm. The other, filled with an unknown liquid, shows 25 cm. What is the density of the unknown liquid?`,
        options: [r`833 kg/m³`, r`1050 kg/m³`, r`1200 kg/m³`, r`950 kg/m³`],
        correctAnswer: 2,
        explanation: r`From ρ₁Δh₁ = ρ₂Δh₂, ρ₂ = (1000)(30)/25 = 1200 kg/m³: the liquid that shows the smaller difference is the denser one. Inverting the ratio gives 833 kg/m³, which would make the height larger, not smaller. The values 1050 kg/m³ and 950 kg/m³ add or subtract the 5 cm change as if it were 5%.`,
      },
      {
        question: r`An open-tube manometer filled with a liquid of density 3400 kg/m³ shows a height difference of 20 cm when joined to a gas line. The liquid is replaced by mercury (13,600 kg/m³), which is 4 times as dense, and the gas line is unchanged. What height difference does the mercury show?`,
        options: [r`5.0 cm`, r`80 cm`, r`20 cm`, r`16 cm`],
        correctAnswer: 0,
        explanation: r`From ρ₁Δh₁ = ρ₂Δh₂, a liquid 4 times as dense shows one quarter of the height: 20/4 = 5.0 cm. Multiplying by 4 gives 80 cm, which would be right for a liquid 4 times LESS dense. A value of 16 cm subtracts 4 instead of dividing, and 20 cm ignores the change of liquid.`,
      },
      {
        question: r`The scale beside a manometer can be read to the nearest 1 mm. With mercury in the tube, 1 mm of height difference stands for about 136 Pa. The mercury is replaced by an oil of density 680 kg/m³, which is 20 times less dense. About what pressure does 1 mm of height difference stand for now?`,
        options: [r`2720 Pa`, r`6.8 Pa`, r`136 Pa`, r`68 Pa`],
        correctAnswer: 1,
        explanation: r`For a fixed height difference, ρgΔh is proportional to the liquid's density, so 1 mm of a liquid 20 times less dense stands for 136/20 = 6.8 Pa. That is why the same gas makes the oil move 20 times farther. Multiplying by 20 gives 2720 Pa, 68 Pa is a slip in the power of ten, and 136 Pa ignores the change of liquid.`,
      },
      {
        question: r`An open-tube water manometer (1000 kg/m³) joined to an air duct shows a height difference of 68 cm. The water is replaced by a liquid of density 1700 kg/m³, and the duct is unchanged. What height difference does the new liquid show?`,
        options: [r`116 cm`, r`68 cm`, r`66 cm`, r`40 cm`],
        correctAnswer: 3,
        explanation: r`From ρ₁Δh₁ = ρ₂Δh₂, Δh₂ = (1000)(68 cm)/1700 = 40 cm: the denser liquid shows the smaller difference. Multiplying by 1.7 gives 116 cm, which would fit a less dense liquid. A value of 66 cm subtracts 1.7 instead of dividing by it, and 68 cm ignores the change of liquid.`,
      },
    ],
  },
  [r`A bag of fluid hangs above a needle, with the fluid at rest. What sets the gauge pressure at the needle?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bag of donated blood (1060 kg/m³) hangs with its fluid surface 1.5 m above a needle, and the blood in the line is at rest. With g = 10 m/s² and the room's air at 1.0 × 10⁵ Pa, what is the gauge pressure at the needle?`,
        options: [r`15,900 Pa`, r`15,000 Pa`, r`1590 Pa`, r`115,900 Pa`],
        correctAnswer: 0,
        explanation: r`P_gauge = ρgh = (1060)(10)(1.5) = 15,900 Pa. A value of 15,000 Pa uses water's density instead of the blood's, and 1590 Pa leaves out g. Adding the room's air gives 115,900 Pa, which is the absolute pressure.`,
      },
      {
        question: r`A bag of nutrient solution hangs with its fluid surface 0.50 m above a needle, and the fluid is at rest. A sensor at the needle reads a gauge pressure of 5200 Pa. With g = 10 m/s², what is the density of the solution?`,
        options: [r`520 kg/m³`, r`2600 kg/m³`, r`1040 kg/m³`, r`104 kg/m³`],
        correctAnswer: 2,
        explanation: r`From P_gauge = ρgh, ρ = 5200/(10 × 0.50) = 1040 kg/m³, a little denser than water, as expected for a solution. Leaving out the height gives 520 kg/m³, and multiplying by the height instead of dividing gives 2600 kg/m³. The value 104 kg/m³ is a slip in the power of ten.`,
      },
      {
        question: r`A 500 mL bag of saline hangs with its fluid surface 0.60 m above a needle. It is swapped for a 1 L bag of the same saline, hung so that its fluid surface is 0.90 m above the needle. The fluid is at rest both times. By what factor does the gauge pressure at the needle change?`,
        options: [r`3.0`, r`1.5`, r`2.0`, r`0.67`],
        correctAnswer: 1,
        explanation: r`The gauge pressure is ρgh, so only the height of the surface matters: 0.90/0.60 = 1.5. A factor of 2.0 follows the bag's volume, which has no effect, and 3.0 multiplies the two factors together. A factor of 0.67 is the height ratio upside down.`,
      },
      {
        question: r`A saline bag (1000 kg/m³) hangs with its fluid surface 1.00 m above a needle whose clamp is closed. Some saline is then drained from the bag through a side port, and the surface drops to 0.85 m above the needle. With g = 10 m/s², what is the gauge pressure at the needle afterward?`,
        options: [r`10,000 Pa`, r`1500 Pa`, r`850 Pa`, r`8500 Pa`],
        correctAnswer: 3,
        explanation: r`The gauge pressure follows the height of the fluid's surface: ρgh = (1000)(10)(0.85) = 8500 Pa. A value of 10,000 Pa belongs to the old height of 1.00 m, and 1500 Pa is only the drop between the two. A value of 850 Pa leaves out g.`,
      },
      {
        question: r`For home dialysis, a bag of fluid (1000 kg/m³) hangs with its surface 1.3 m above the end of a tube, and the fluid is at rest. With g = 10 m/s² and the room's air at 100 kPa, what is the gauge pressure at the end of the tube in kilopascals?`,
        options: [r`1.3 kPa`, r`130 kPa`, r`13 kPa`, r`113 kPa`],
        correctAnswer: 2,
        explanation: r`P_gauge = ρgh = (1000)(10)(1.3) = 13,000 Pa = 13 kPa. The values 1.3 kPa and 130 kPa are slips in the power of ten when converting to kilopascals. Adding the room's 100 kPa gives 113 kPa, which is the absolute pressure.`,
      },
      {
        question: r`A saline bag (1000 kg/m³) is joined to a needle by a tube 2.0 m long that hangs in a loop. The fluid is at rest, and the fluid surface in the bag is 0.70 m higher than the needle. With g = 10 m/s², what is the gauge pressure at the needle?`,
        options: [r`7000 Pa`, r`20,000 Pa`, r`27,000 Pa`, r`13,000 Pa`],
        correctAnswer: 0,
        explanation: r`Only the vertical height of the fluid's surface above the needle counts: ρgh = (1000)(10)(0.70) = 7000 Pa. A value of 20,000 Pa uses the tube's length in place of that height. The values 27,000 Pa and 13,000 Pa add or subtract the two lengths, but the path the tube takes changes nothing.`,
      },
    ],
  },
  [r`How do you convert a pressure from pascals to millimeters of mercury?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A monitor reports the pressure of the fluid around a patient's brain as 1995 Pa. With 1 mmHg ≈ 133 Pa, what is this pressure in millimeters of mercury?`,
        options: [r`1.5 mmHg`, r`15 mmHg`, r`150 mmHg`, r`2.65 × 10⁵ mmHg`],
        correctAnswer: 1,
        explanation: r`Divide by 133 Pa per mmHg: 1995/133 = 15 mmHg. The values 1.5 mmHg and 150 mmHg are slips in the power of ten. Multiplying by 133 instead of dividing gives 2.65 × 10⁵ mmHg, hundreds of atmospheres.`,
      },
      {
        question: r`A European blood pressure monitor shows a peak pressure of 16 kPa. With 1 mmHg ≈ 133 Pa, about what is this in millimeters of mercury?`,
        options: [r`12 mmHg`, r`2.1 mmHg`, r`2130 mmHg`, r`120 mmHg`],
        correctAnswer: 3,
        explanation: r`First 16 kPa = 16,000 Pa, then 16,000/133 ≈ 120 mmHg. Forgetting to convert kilopascals to pascals leads to 16/133, and 12 mmHg is a slip of that kind in the power of ten. The values 2130 mmHg and 2.1 mmHg multiply 16 by 133 or by 0.133 instead of dividing.`,
      },
      {
        question: r`A compression sleeve is labeled as squeezing the arm with 60 mmHg. With 1 mmHg ≈ 133 Pa, about what is this pressure in pascals?`,
        options: [r`about 8000 Pa`, r`about 800 Pa`, r`about 0.45 Pa`, r`about 193 Pa`],
        correctAnswer: 0,
        explanation: r`Going from mmHg to pascals, multiply by 133: 60 × 133 = 7980 Pa, about 8000 Pa. Dividing 60 by 133 gives 0.45 Pa, the conversion run in the wrong direction. A value of 800 Pa is a slip in the power of ten, and 193 Pa adds 133 instead of multiplying.`,
      },
      {
        question: r`A patient's mean arterial pressure is 90 mmHg. After a dose of medicine it rises by 2660 Pa. With 1 mmHg ≈ 133 Pa, what is the new mean arterial pressure?`,
        options: [r`70 mmHg`, r`2750 mmHg`, r`110 mmHg`, r`290 mmHg`],
        correctAnswer: 2,
        explanation: r`Convert the rise to the same unit first: 2660/133 = 20 mmHg, so the new pressure is 90 + 20 = 110 mmHg. Adding 2660 directly to 90 gives 2750 mmHg, which mixes pascals with mmHg. A value of 290 mmHg divides by 13.3 instead of 133, and 70 mmHg subtracts a rise.`,
      },
      {
        question: r`A ventilator's alarm is set to sound at an airway gauge pressure of 2.66 × 10³ Pa. With 1 mmHg ≈ 133 Pa, what is this setting in millimeters of mercury?`,
        options: [r`2.0 mmHg`, r`200 mmHg`, r`3.5 × 10⁵ mmHg`, r`20 mmHg`],
        correctAnswer: 3,
        explanation: r`2.66 × 10³ Pa is 2660 Pa, and 2660/133 = 20 mmHg. The values 2.0 mmHg and 200 mmHg are slips in the power of ten. Multiplying by 133 instead of dividing gives 3.5 × 10⁵ mmHg.`,
      },
      {
        question: r`The gas in a neon sign's tube is at an absolute pressure of 665 Pa. One torr is the same as 1 mmHg, about 133 Pa. What is the gas's pressure in torr?`,
        options: [r`0.5 torr`, r`5 torr`, r`50 torr`, r`8.8 × 10⁴ torr`],
        correctAnswer: 1,
        explanation: r`Divide by 133 Pa per torr: 665/133 = 5 torr, a small fraction of the 760 torr in one atmosphere. The values 0.5 torr and 50 torr are slips in the power of ten. Multiplying by 133 instead of dividing gives 8.8 × 10⁴ torr.`,
      },
    ],
  },
  [r`Two connected regions of fluid are at different pressures. Which way does the fluid flow?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A small gas tank A at 300 kPa and a tank B at 200 kPa with ten times the volume are joined by a pipe with a closed valve. Both tanks hold the same gas at the same temperature. Which way does gas flow when the valve is first opened?`,
        options: [
          r`From B to A, since B holds far more gas than A does`,
          r`From B to A, since A is the smaller tank of the two`,
          r`Neither way, since both tanks are above 100 kPa`,
          r`From A to B, since A is at the higher pressure`,
        ],
        correctAnswer: 3,
        explanation: r`Fluid flows from the region of higher pressure to the region of lower pressure, so gas moves from tank A at 300 kPa to tank B at 200 kPa. The amount of gas and the size of each tank do not set the direction. Both tanks being above the room's pressure is beside the point, since only the difference between the two connected regions matters.`,
      },
      {
        question: r`While a person breathes in, air flows from the room into the lungs. The room's air is at 760 mmHg. What must be true of the absolute pressure of the air in the lungs during that flow?`,
        options: [
          r`It is below 760 mmHg, so air moves in toward lower pressure`,
          r`It is above 760 mmHg, so the lungs are able to draw air in`,
          r`It is exactly 760 mmHg, so air is free to move either way`,
          r`It is 0 mmHg, since only a vacuum is able to pull air in`,
        ],
        correctAnswer: 0,
        explanation: r`Air flows from higher pressure to lower, so for air to move from the room into the lungs, the lungs must be below the room's 760 mmHg, even if only by a millimeter or so. A pressure above 760 mmHg would push air out, as in breathing out. Equal pressures give no flow at all, and a full vacuum is far more than the small difference needed.`,
      },
    ],
  },
  [r`How do you find the lowest height at which a hanging bag still pushes fluid into a vein?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The gauge pressure in a vein on the back of an infant's hand is 800 Pa. Saline (1000 kg/m³) is to run in by gravity, and g = 10 m/s². What is the lowest height of the saline's surface above the needle at which it still flows in?`,
        options: [r`0.80 cm`, r`80 cm`, r`8.0 cm`, r`12.5 cm`],
        correctAnswer: 2,
        explanation: r`Set ρgh equal to the vein's gauge pressure: h = 800/(1000 × 10) = 0.080 m = 8.0 cm. The values 0.80 cm and 80 cm are slips in the power of ten. A value of 12.5 cm comes from inverting the fraction, dividing ρg by the pressure.`,
      },
      {
        question: r`The mean gauge pressure in an artery is about 100 mmHg, which is 13,300 Pa. A student suggests running saline (1000 kg/m³) into the artery from a hanging bag. With g = 10 m/s², what is the lowest height of the saline's surface above the needle at which saline would enter?`,
        options: [r`1.33 m`, r`0.133 m`, r`13.3 m`, r`0.75 m`],
        correctAnswer: 0,
        explanation: r`h = P/(ρg) = 13,300/(1000 × 10) = 1.33 m, far higher than a vein needs, which is why arterial lines use pressurized bags. The values 0.133 m and 13.3 m are slips in the power of ten. A height of 0.75 m inverts the fraction, dividing ρg by the pressure.`,
      },
      {
        question: r`A fluid of density 1050 kg/m³ drips from a hanging bag into a vein. As the bag is lowered, the flow stops just as the fluid's surface reaches 0.20 m above the needle. With g = 10 m/s², what is the gauge pressure in the vein?`,
        options: [r`2000 Pa`, r`210 Pa`, r`5250 Pa`, r`2100 Pa`],
        correctAnswer: 3,
        explanation: r`Flow stops when ρgh just equals the vein's gauge pressure: (1050)(10)(0.20) = 2100 Pa. A value of 2000 Pa uses water's density, and 210 Pa leaves out g. A value of 5250 Pa divides the density by the height instead of multiplying.`,
      },
      {
        question: r`A nurse finds that saline (1000 kg/m³) only just enters a patient's arm when the bag's fluid surface hangs 0.20 m above the needle. A denser contrast fluid, 1250 kg/m³, is hung in its place while the patient's venous pressure stays the same. At what surface height does the contrast fluid only just enter?`,
        options: [r`0.25 m`, r`0.16 m`, r`0.20 m`, r`0.04 m`],
        correctAnswer: 1,
        explanation: r`The lowest height is h = P_vein/(ρg), so it is inversely proportional to the density: 0.20 × (1000/1250) = 0.16 m. Multiplying by 1.25 gives 0.25 m, which wrongly makes the denser fluid need more height. A value of 0.20 m ignores the density, and 0.04 m is only the change in height.`,
      },
      {
        question: r`A space station spins to give its crew an artificial g of 2.5 m/s². A crew member's vein is at a gauge pressure of 1500 Pa, and saline (1000 kg/m³) is to run in from a hanging bag. What is the lowest height of the saline's surface above the needle at which it still flows in?`,
        options: [r`0.60 m`, r`0.15 m`, r`6.0 m`, r`0.060 m`],
        correctAnswer: 0,
        explanation: r`h = P_vein/(ρg) = 1500/(1000 × 2.5) = 0.60 m, four times the height needed on Earth because g is four times smaller. A height of 0.15 m uses Earth's 10 m/s². The values 6.0 m and 0.060 m are slips in the power of ten.`,
      },
      {
        question: r`A saline bag (1000 kg/m³) hangs with its surface 0.30 m above a needle in a vein whose gauge pressure is 1800 Pa. With g = 10 m/s², by how much can the bag be lowered before the saline stops flowing in?`,
        options: [r`0.18 m`, r`0.30 m`, r`0.12 m`, r`0.48 m`],
        correctAnswer: 2,
        explanation: r`The lowest working height is h = P_vein/(ρg) = 1800/(1000 × 10) = 0.18 m, so the bag can come down by 0.30 − 0.18 = 0.12 m. A value of 0.18 m is the lowest height itself, not the distance moved. A value of 0.30 m would bring the surface level with the needle, and 0.48 m adds the two heights.`,
      },
    ],
  },
}
