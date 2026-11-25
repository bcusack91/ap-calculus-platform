import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-fluids-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Intrapleural pressure is normally about $-4$ mmHg. What does the negative sign mean, and what is the absolute pressure at sea level?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A tire gauge on a parked car reads 220 kPa. The air outside is at 100 kPa. What is the absolute pressure of the air inside the tire?`,
        options: [r`100 kPa`, r`120 kPa`, r`220 kPa`, r`320 kPa`],
        correctAnswer: 3,
        explanation: r`A gauge reads the pressure above atmospheric, so absolute = gauge + atmospheric = 220 + 100 = 320 kPa. 120 kPa comes from subtracting instead of adding, 220 kPa treats the gauge reading as the absolute pressure, and 100 kPa is just the outside air.`,
      },
      {
        question: r`A sealed flask is pumped down to an absolute pressure of 300 mmHg in a lab where the atmospheric pressure is 750 mmHg. What does a gauge attached to the flask read?`,
        options: [r`−450 mmHg`, r`+300 mmHg`, r`+450 mmHg`, r`−300 mmHg`],
        correctAnswer: 0,
        explanation: r`Gauge = absolute − atmospheric = 300 − 750 = −450 mmHg; the minus sign says the flask is below atmospheric pressure. +450 mmHg has the subtraction backwards, and the two 300 mmHg answers confuse the absolute pressure with the gauge reading.`,
      },
      {
        question: r`A vacuum chamber has two sensors. The gauge sensor reads −60 kPa and the absolute sensor reads 30 kPa. What is the atmospheric pressure outside the chamber?`,
        options: [r`30 kPa`, r`60 kPa`, r`90 kPa`, r`−30 kPa`],
        correctAnswer: 2,
        explanation: r`Absolute = atmospheric + gauge, so atmospheric = absolute − gauge = 30 − (−60) = 90 kPa. Adding the two readings gives −30 kPa, which no real pressure can be; 30 kPa and 60 kPa just repeat one of the readings.`,
      },
      {
        question: r`A hyperbaric treatment chamber is held at an absolute pressure of 2.5 atm in a room at 1.0 atm. What is the chamber's gauge pressure in mmHg? (1 atm = 760 mmHg)`,
        options: [r`380 mmHg`, r`1140 mmHg`, r`2660 mmHg`, r`1900 mmHg`],
        correctAnswer: 1,
        explanation: r`Gauge = absolute − atmospheric = 2.5 − 1.0 = 1.5 atm, and 1.5 × 760 = 1140 mmHg. 1900 mmHg converts the absolute 2.5 atm without subtracting, 2660 mmHg adds the atmosphere instead (3.5 atm), and 380 mmHg is only half an atmosphere.`,
      },
      {
        question: r`A patient's arterial pressure is measured as 120 mmHg with a cuff in a city where the atmospheric pressure is 630 mmHg. Cuff readings are gauge pressures. What is the absolute pressure of the blood?`,
        options: [r`750 mmHg`, r`880 mmHg`, r`510 mmHg`, r`120 mmHg`],
        correctAnswer: 0,
        explanation: r`Absolute = atmospheric + gauge = 630 + 120 = 750 mmHg. 510 mmHg subtracts the reading, 880 mmHg uses the sea-level 760 mmHg instead of the local 630 mmHg, and 120 mmHg treats the cuff reading as an absolute pressure.`,
      },
      {
        question: r`A surgical suction line at sea level shows a gauge pressure of −0.40 atm. What is the absolute pressure in the line? (1 atm ≈ 100 kPa)`,
        options: [r`140 kPa`, r`40 kPa`, r`60 kPa`, r`−40 kPa`],
        correctAnswer: 2,
        explanation: r`Absolute = 1.00 − 0.40 = 0.60 atm, which is about 60 kPa. 40 kPa is the size of the gauge reading alone, 140 kPa adds 0.40 atm instead of subtracting it, and −40 kPa is the gauge reading converted, not an absolute pressure, which can never be negative.`,
      },
    ],
  },
  [r`A hydraulic jack's output piston has $5$ times the input piston's diameter. What load can a $200$ N input force support?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hydraulic bottle jack has an output piston with 3 times the diameter of its input piston. A mechanic pushes on the input piston with 50 N. What load can the output piston support?`,
        options: [r`150 N`, r`450 N`, r`1350 N`, r`17 N`],
        correctAnswer: 1,
        explanation: r`The pressure is the same at both pistons, so force scales with area, and area scales with diameter squared: 3² = 9 and 50 × 9 = 450 N. 150 N uses the diameter ratio without squaring, 17 N divides by 3, and 1350 N cubes the ratio.`,
      },
      {
        question: r`In a hydraulic press, the input piston has a radius of 2 cm and the output piston a radius of 10 cm. What input force is needed to hold up a 5000 N load on the output piston?`,
        options: [r`25 000 N`, r`125 000 N`, r`1000 N`, r`200 N`],
        correctAnswer: 3,
        explanation: r`The radius ratio is 5, so the area ratio is 5² = 25 and the input force is 5000 / 25 = 200 N. 1000 N divides by the radius ratio without squaring it, while 25 000 N and 125 000 N multiply the load instead of dividing it.`,
      },
      {
        question: r`A hydraulic lift lets a 20 N push on its input piston hold up a 2000 N engine block on its output piston. How many times larger is the output piston's diameter than the input piston's?`,
        options: [r`50 times`, r`200 times`, r`10 times`, r`100 times`],
        correctAnswer: 2,
        explanation: r`The force ratio 2000 / 20 = 100 equals the area ratio, and area goes as diameter squared, so the diameter ratio is √100 = 10. 100 times is the area ratio itself, 50 times halves it instead of taking the square root, and 200 times doubles it.`,
      },
      {
        question: r`A syringe with a plunger 5 mm in diameter is joined by a water-filled tube to a second syringe whose plunger is 2 cm in diameter. A 10 N push on the small plunger gives what force on the large plunger?`,
        options: [r`160 N`, r`0.63 N`, r`40 N`, r`1.6 N`],
        correctAnswer: 0,
        explanation: r`In matching units the diameters are 5 mm and 20 mm, a ratio of 4, so the area ratio is 16 and the force is 10 × 16 = 160 N. 40 N skips the square, 1.6 N uses 2/5 as the ratio without converting units, and 0.63 N divides by 16.`,
      },
      {
        question: r`An engineer redesigns a hydraulic jack so that the output piston's diameter is doubled while the input piston is left unchanged. For the same input force, the load the jack can support becomes:`,
        options: [r`one quarter as large`, r`4 times as large`, r`half as large`, r`2 times as large`],
        correctAnswer: 1,
        explanation: r`The load equals the input force times the area ratio, and doubling the diameter multiplies the output area by 2² = 4, so the load is 4 times as large. Twice as large forgets the square; the two smaller answers turn the relationship upside down.`,
      },
      {
        question: r`A hydraulic lift's input piston is 2 cm in diameter and its output piston is 12 cm in diameter. What input force holds up a 9000 N pallet resting on the output piston?`,
        options: [r`54 000 N`, r`1500 N`, r`324 000 N`, r`250 N`],
        correctAnswer: 3,
        explanation: r`The diameter ratio is 6, so the area ratio is 36 and the input force is 9000 / 36 = 250 N. 1500 N divides by 6 without squaring, and 54 000 N and 324 000 N multiply the load by 6 and by 36 instead of dividing.`,
      },
    ],
  },
  [r`A $50.0$ cm$^3$ sample of olive oil has a mass of $46.0$ g. What are its density in SI units and its specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 25 cm³ sample of gasoline has a mass of 18 g. What are its density in SI units and its specific gravity?`,
        options: [r`1390 kg/m³ and SG 1.39`, r`720 kg/m³ and SG 0.72`, r`720 kg/m³ and SG 720`, r`0.72 kg/m³ and SG 0.72`],
        correctAnswer: 1,
        explanation: r`ρ = 18 / 25 = 0.72 g/cm³, which is 720 kg/m³, and SG = 720 / 1000 = 0.72 with no units. 0.72 kg/m³ leaves out the factor of 1000, SG 720 forgets to divide by water's density, and the 1390 pair divides volume by mass.`,
      },
      {
        question: r`A solid piece of aluminum (specific gravity 2.7) has a mass of 54 g. What is its volume?`,
        options: [r`0.020 cm³`, r`146 cm³`, r`0.050 cm³`, r`20 cm³`],
        correctAnswer: 3,
        explanation: r`SG 2.7 means a density of 2.7 g/cm³, so V = m/ρ = 54 / 2.7 = 20 cm³. 146 cm³ multiplies mass by density, 0.050 cm³ divides density by mass, and 0.020 cm³ divides 54 g by 2700 as if the answer came out in cm³.`,
      },
      {
        question: r`A storage tank holds 2.0 m³ of machine oil with a specific gravity of 0.90. What is the mass of the oil?`,
        options: [r`1.8 kg`, r`2200 kg`, r`1800 kg`, r`180 kg`],
        correctAnswer: 2,
        explanation: r`SG 0.90 means ρ = 0.90 × 1000 = 900 kg/m³, so m = ρV = 900 × 2.0 = 1800 kg. 1.8 kg uses 0.90 as if it were a density in kg/m³, 2200 kg divides by 0.90 instead of multiplying, and 180 kg slips a power of ten.`,
      },
      {
        question: r`A 2.0 L sample of whole blood has a mass of 2.12 kg. What are its density in g/cm³ and its specific gravity?`,
        options: [r`1.06 g/cm³ and SG 1.06`, r`1060 g/cm³ and SG 1.06`, r`1.06 g/cm³ and SG 1060`, r`0.94 g/cm³ and SG 0.94`],
        correctAnswer: 0,
        explanation: r`2.12 kg is 2120 g and 2.0 L is 2000 cm³, so ρ = 2120 / 2000 = 1.06 g/cm³, and SG equals the density in g/cm³, 1.06. 1060 is the density in kg/m³, not g/cm³ and not an SG; 0.94 divides volume by mass.`,
      },
      {
        question: r`Liquid X has a specific gravity of 1.2 and liquid Y has a density of 800 kg/m³. Equal volumes of the two are poured out. The mass of the X sample is what multiple of the mass of the Y sample?`,
        options: [r`0.0015`, r`0.67`, r`1.5`, r`1500`],
        correctAnswer: 2,
        explanation: r`Liquid X has density 1.2 × 1000 = 1200 kg/m³, and for equal volumes mass goes as density, so the ratio is 1200 / 800 = 1.5. 0.67 inverts the ratio; 0.0015 and 1500 compare 1.2 with 800 or 1200 with 0.8 without putting both in the same units.`,
      },
      {
        question: r`A solid metal cube measures 2.0 cm along each edge and has a mass of 21.6 g. What are its density in SI units and its specific gravity?`,
        options: [r`2700 kg/m³ and SG 2.7`, r`5400 kg/m³ and SG 5.4`, r`10 800 kg/m³ and SG 10.8`, r`2.7 kg/m³ and SG 2.7`],
        correctAnswer: 0,
        explanation: r`The volume is 2.0³ = 8.0 cm³, so ρ = 21.6 / 8.0 = 2.7 g/cm³ = 2700 kg/m³ and SG = 2.7. The 5400 pair divides by the face area 4 cm², the 10 800 pair divides by the edge length, and 2.7 kg/m³ leaves out the factor of 1000.`,
      },
    ],
  },
  [r`Absolute pressure is about $2$ atm at a depth of $10$ m in a freshwater lake, so at $30$ m it is about {{c1::$4$ atm}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A research submersible in a freshwater reservoir records an absolute pressure of about 2 atm at a depth of 10 m. About what absolute pressure does it record at 70 m?`,
        options: [r`8 atm`, r`7 atm`, r`14 atm`, r`9 atm`],
        correctAnswer: 0,
        explanation: r`Each 10 m of water adds about 1 atm, so 70 m adds 7 atm to the 1 atm at the surface: 8 atm. 14 atm scales the whole 2 atm by 7, 7 atm leaves out the atmosphere, and 9 atm counts the atmosphere twice.`,
      },
      {
        question: r`A pressure sensor is rated for an absolute pressure of up to 7 atm. Fresh water adds about 1 atm for every 10 m, and the air above the reservoir is at 1 atm. How far below the surface can the sensor be lowered?`,
        options: [r`80 m`, r`70 m`, r`35 m`, r`60 m`],
        correctAnswer: 3,
        explanation: r`Of the 7 atm, 1 atm is the air above the reservoir, so the water may supply 6 atm, which takes 6 × 10 m = 60 m. 70 m forgets to take off the atmosphere, 80 m adds an atmosphere instead of removing one, and 35 m is half of the 70 m mistake.`,
      },
      {
        question: r`A scuba diver in a freshwater quarry descends from 10 m to 90 m. By about what factor does the absolute pressure on the diver increase? (Each 10 m of water adds about 1 atm.)`,
        options: [r`4.5`, r`5`, r`9`, r`10`],
        correctAnswer: 1,
        explanation: r`The absolute pressure is 1 + 1 = 2 atm at 10 m and 1 + 9 = 10 atm at 90 m, a factor of 10 / 2 = 5. A factor of 9 is the ratio of the depths, which holds only for the water's share of the pressure; 10 is the final pressure in atm, and 4.5 divides 9 by 2.`,
      },
      {
        question: r`In a freshwater lake, each 10 m of depth adds about 1 atm. About what is the absolute pressure on a sensor at a depth of 20 m, in pascals? (1 atm ≈ 1 × 10⁵ Pa)`,
        options: [r`2 × 10⁵ Pa`, r`2 × 10⁶ Pa`, r`3 × 10⁵ Pa`, r`3 × 10³ Pa`],
        correctAnswer: 2,
        explanation: r`The water adds 2 atm to the 1 atm at the surface, giving 3 atm = 3 × 10⁵ Pa. 2 × 10⁵ Pa is only the water's share (the gauge pressure), 3 × 10³ Pa slips two powers of ten, and 2 × 10⁶ Pa treats each metre as an atmosphere.`,
      },
      {
        question: r`At a high mountain lake the air pressure at the surface is 0.7 atm. Each 10 m of fresh water adds about 1 atm. About what is the absolute pressure 30 m below the surface?`,
        options: [r`2.8 atm`, r`3.7 atm`, r`4.0 atm`, r`3.0 atm`],
        correctAnswer: 1,
        explanation: r`The water adds 3 atm to whatever presses on the surface, here 0.7 atm, so the total is 3.7 atm. 4.0 atm assumes a full sea-level atmosphere on top, 3.0 atm leaves out the air entirely, and 2.8 atm multiplies 0.7 atm by 4.`,
      },
      {
        question: r`A diver in a freshwater lake rises from a depth of 50 m to a depth of 20 m. The absolute pressure on the diver falls to about what fraction of its value at 50 m? (Each 10 m of water adds about 1 atm.)`,
        options: [r`1/2`, r`3/5`, r`2/5`, r`1/3`],
        correctAnswer: 0,
        explanation: r`The absolute pressure is 1 + 5 = 6 atm at 50 m and 1 + 2 = 3 atm at 20 m, so it falls to 3/6 = 1/2. 2/5 is the ratio of the depths, which ignores the atmosphere on top; 3/5 is the fraction of the depth given up, and 1/3 compares the water's 2 atm at 20 m with the full 6 atm at 50 m.`,
      },
    ],
  },
  [r`A mercury barometer stands at $760$ mm. Filled with water instead, its column would be about {{c1::$10.3$ m}} tall.`]: {
    kind: 'calc',
    more: [
      {
        question: r`On a stormy day a mercury barometer (specific gravity 13.6) stands at 700 mm. About how tall would the column be in a water barometer on the same day?`,
        options: [r`7.0 m`, r`9.5 m`, r`10.3 m`, r`0.051 m`],
        correctAnswer: 1,
        explanation: r`Both columns balance the same air pressure, so the water column is 13.6 times taller: 13.6 × 0.70 m ≈ 9.5 m. 10.3 m is the value for a standard 760 mm day, 0.051 m divides by 13.6 instead of multiplying, and 7.0 m just multiplies by 10.`,
      },
      {
        question: r`A barometer filled with an unknown liquid has a column 1.9 m tall on a day when a mercury barometer (specific gravity 13.6) stands at 0.76 m. What is the specific gravity of the unknown liquid?`,
        options: [r`13.6`, r`2.50`, r`5.44`, r`34.0`],
        correctAnswer: 2,
        explanation: r`The products ρh match: SG × 1.9 = 13.6 × 0.76, so SG = 13.6 × 0.40 = 5.44. A taller column means a less dense liquid; 34.0 multiplies by the height ratio 2.5 instead of dividing, 2.50 is only the height ratio, and 13.6 is mercury itself.`,
      },
      {
        question: r`A suction pump can hold up a column of water at most 5.15 m tall. About how tall a column of mercury (specific gravity 13.6) could the same pressure difference hold up?`,
        options: [r`1520 mm`, r`380 mm`, r`190 mm`, r`760 mm`],
        correctAnswer: 1,
        explanation: r`The same pressure difference supports a column 13.6 times shorter in mercury: 5.15 m / 13.6 ≈ 0.38 m = 380 mm. This is half of the 10.3 m of water that matches 760 mm, so 760 mm is a whole atmosphere, 1520 mm doubles instead of halving, and 190 mm halves twice.`,
      },
      {
        question: r`One barometer is filled with glycerin (specific gravity 1.25) and another with water. On the same day, the height of the glycerin column is what multiple of the height of the water column?`,
        options: [r`1.25`, r`1.00`, r`0.80`, r`0.25`],
        correctAnswer: 2,
        explanation: r`Both balance the same air pressure, so ρh is the same and height goes as 1/density: 1 / 1.25 = 0.80. The denser liquid needs the shorter column, so 1.25 is upside down, 1.00 ignores density, and 0.25 subtracts instead of dividing.`,
      },
      {
        question: r`A central venous pressure is recorded as 13.6 cm of water. What is this pressure in millimetres of mercury? (Mercury's specific gravity is 13.6.)`,
        options: [r`136 mmHg`, r`185 mmHg`, r`1.0 mmHg`, r`10 mmHg`],
        correctAnswer: 3,
        explanation: r`Mercury is 13.6 times denser, so the same pressure needs a column 13.6 times shorter: 13.6 cm / 13.6 = 1.0 cm = 10 mmHg. 1.0 mmHg forgets to turn centimetres into millimetres, 185 mmHg multiplies by 13.6, and 136 mmHg only changes the units.`,
      },
      {
        question: r`Air pressure can hold up a column of water about 10.3 m tall. About how tall a column of ethanol (specific gravity 0.80) can the same air pressure hold up?`,
        options: [r`12.9 m`, r`17.0 m`, r`10.3 m`, r`8.2 m`],
        correctAnswer: 0,
        explanation: r`Equal pressures mean equal ρh, so the less dense liquid stands taller: 10.3 / 0.80 ≈ 12.9 m. 8.2 m multiplies by 0.80 instead of dividing, 10.3 m ignores the density change, and 17.0 m divides mercury's 13.6 by 0.80, which is not a height.`,
      },
    ],
  },
  [r`In an open-tube U manometer, the liquid is pushed down on the {{c1::higher-pressure}} side, and the level difference gives $P - P_{\text{atm}} = \rho g \Delta h$.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An open-tube manometer is filled with oil of density 800 kg/m³ and joined to a tank of gas. The oil stands 50 cm HIGHER in the arm joined to the tank than in the open arm. What is the gauge pressure of the gas? (g = 10 m/s²)`,
        options: [r`−4000 Pa`, r`−400 Pa`, r`+5000 Pa`, r`+4000 Pa`],
        correctAnswer: 0,
        explanation: r`The size is ρgΔh = 800 × 10 × 0.50 = 4000 Pa, and liquid rising on the gas side means the gas is below atmospheric, so the gauge pressure is −4000 Pa. +4000 Pa has the sign backwards, −400 Pa slips a power of ten, and +5000 Pa uses water's density with the wrong sign.`,
      },
      {
        question: r`A gas line has a gauge pressure of +3000 Pa. It is joined to an open-tube water manometer. What is the difference in height between the two water levels? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`3.0 cm`, r`0.30 cm`, r`30 cm`, r`3.0 m`],
        correctAnswer: 2,
        explanation: r`Δh = P_gauge / (ρg) = 3000 / (1000 × 10) = 0.30 m = 30 cm. The other three answers are the same digits with the decimal point moved, from dropping g, dropping the density's factor of 1000, or mishandling the metres to centimetres step.`,
      },
      {
        question: r`A gas at a gauge pressure of 2700 Pa pushes the liquid in an open-tube manometer to a level difference of 2.0 cm. What is the density of the manometer liquid? (g = 10 m/s²)`,
        options: [r`13 500 kg/m³`, r`1350 kg/m³`, r`540 kg/m³`, r`135 kg/m³`],
        correctAnswer: 0,
        explanation: r`ρ = P / (gΔh) = 2700 / (10 × 0.020) = 2700 / 0.20 = 13 500 kg/m³, close to mercury. 135 kg/m³ leaves Δh as 2.0 without converting to metres, 1350 kg/m³ slips one power of ten, and 540 kg/m³ multiplies by gΔh instead of dividing.`,
      },
      {
        question: r`One arm of a mercury U-tube is joined to a glass bulb of gas and the other arm is open to air at 750 mmHg. The mercury surface in the open arm is 150 mm LOWER than the surface in the arm joined to the bulb. What is the absolute pressure of the gas?`,
        options: [r`−150 mmHg`, r`600 mmHg`, r`150 mmHg`, r`900 mmHg`],
        correctAnswer: 1,
        explanation: r`Mercury is pushed down on the higher-pressure side, here the open arm, so the gas is 150 mmHg below atmospheric: 750 − 150 = 600 mmHg. 900 mmHg adds the difference, 150 mmHg is only the size of the difference, and −150 mmHg is the gauge pressure, not the absolute pressure.`,
      },
      {
        question: r`The same gas supply is measured with two open-tube manometers. The one filled with water shows a level difference of 27.2 cm. What level difference does the one filled with mercury (specific gravity 13.6) show?`,
        options: [r`370 cm`, r`13.6 cm`, r`27.2 cm`, r`2.0 cm`],
        correctAnswer: 3,
        explanation: r`The gauge pressure ρgΔh is the same for both, so Δh goes as 1/density: 27.2 / 13.6 = 2.0 cm. 370 cm multiplies by 13.6 instead of dividing, 13.6 cm halves the reading, and 27.2 cm ignores the change of liquid.`,
      },
      {
        question: r`A gas at an absolute pressure of 1.05 × 10⁵ Pa is joined to an open-tube water manometer in a room at 1.00 × 10⁵ Pa. What does the manometer show? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`A 50 cm difference, water lower on the open side`, r`A 5.0 cm difference, water lower on the open side`, r`A 50 cm difference, water lower on the gas side`, r`A 5.0 cm difference, water lower on the gas side`],
        correctAnswer: 2,
        explanation: r`The gauge pressure is 1.05 × 10⁵ − 1.00 × 10⁵ = 5000 Pa, so Δh = 5000 / (1000 × 10) = 0.50 m = 50 cm, and the gas, being above atmospheric, pushes the water down on its own side. The 5.0 cm answers slip a power of ten, and the open-side answers have the direction backwards.`,
      },
    ],
  },
  [r`Give hydrostatic pressure with depth.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An open swimming pool is 5.0 m deep. What is the absolute pressure at the bottom? (Water: 1000 kg/m³, g = 10 m/s², atmospheric pressure 1.0 × 10⁵ Pa)`,
        options: [r`6.0 × 10⁵ Pa`, r`5.0 × 10⁴ Pa`, r`1.05 × 10⁵ Pa`, r`1.5 × 10⁵ Pa`],
        correctAnswer: 3,
        explanation: r`P = P₀ + ρgh = 1.0 × 10⁵ + 1000 × 10 × 5.0 = 1.0 × 10⁵ + 0.5 × 10⁵ = 1.5 × 10⁵ Pa. 5.0 × 10⁴ Pa leaves out the atmosphere, 1.05 × 10⁵ Pa drops g from ρgh, and 6.0 × 10⁵ Pa takes ρgh as 5 × 10⁵ Pa.`,
      },
      {
        question: r`An IV line needs a gauge pressure of 12 000 Pa at the patient's vein. How high above the vein must the surface of the fluid in the bag be? (Fluid: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`12 m`, r`0.83 m`, r`1.2 m`, r`0.12 m`],
        correctAnswer: 2,
        explanation: r`The gauge pressure is ρgh, so h = 12 000 / (1000 × 10) = 1.2 m. 0.12 m and 12 m slip a power of ten, and 0.83 m divides the wrong way round (10 000 / 12 000).`,
      },
      {
        question: r`In an open vat of solvent, the gauge pressure 0.50 m below the surface is 4000 Pa. What is the density of the solvent? (g = 10 m/s²)`,
        options: [r`800 kg/m³`, r`8000 kg/m³`, r`200 kg/m³`, r`2000 kg/m³`],
        correctAnswer: 0,
        explanation: r`ρ = P_gauge / (gh) = 4000 / (10 × 0.50) = 4000 / 5.0 = 800 kg/m³. 8000 kg/m³ divides by the depth but not by g, 2000 kg/m³ multiplies by the depth instead of dividing, and 200 kg/m³ multiplies by the depth and then divides by g.`,
      },
      {
        question: r`A wide open vat and a narrow open tube are both filled with water to a depth of 0.30 m. The gauge pressure at the bottom of the vat is 3000 Pa. The tube holds one tenth as much water as the vat. What is the gauge pressure at the bottom of the tube?`,
        options: [r`30 000 Pa`, r`300 Pa`, r`3000 Pa`, r`1000 Pa`],
        correctAnswer: 2,
        explanation: r`Hydrostatic pressure depends only on depth and density, not on the container's shape or how much liquid it holds, so the same 0.30 m of water gives the same 3000 Pa. 300 Pa scales with the volume, 30 000 Pa scales the opposite way, and 1000 Pa has no basis in ρgh.`,
      },
      {
        question: r`In a standing adult, the feet are 1.2 m below the heart. How much greater is the blood pressure in an artery at the feet than at heart level, from the column of blood alone? (Blood: 1050 kg/m³, g = 10 m/s²)`,
        options: [r`1260 Pa`, r`12 600 Pa`, r`8750 Pa`, r`126 000 Pa`],
        correctAnswer: 1,
        explanation: r`The extra pressure is ρgh = 1050 × 10 × 1.2 = 12 600 Pa. 1260 Pa leaves out g, 126 000 Pa slips a power of ten the other way, and 8750 Pa divides by the height instead of multiplying.`,
      },
      {
        question: r`The gauge pressure at depth h in an open tank of water is P. What is the gauge pressure at depth 3h in an open tank of a liquid with half the density of water?`,
        options: [r`1.5P`, r`3P`, r`6P`, r`0.67P`],
        correctAnswer: 0,
        explanation: r`Gauge pressure is ρgh, so tripling the depth and halving the density gives 3 × ½ = 1.5 times P. 6P doubles for the density instead of halving, 3P ignores the density change, and 0.67P inverts the result.`,
      },
    ],
  },
  [r`A submarine is at a depth of 100 m in seawater (ρ = 1025 $kg/m^{3}$). What is the gauge pressure? (g = 9.8 $m/s^{2}$)`]: {
    kind: 'calc',
    more: [
      {
        question: r`A vertical glass tube holds a column of mercury 0.50 m tall, open at the top. What is the gauge pressure at the bottom of the column? (Mercury: 13 600 kg/m³, g = 10 m/s²)`,
        options: [r`$6.8 \times 10^{4}$ Pa`, r`$6.8 \times 10^{3}$ Pa`, r`$2.7 \times 10^{5}$ Pa`, r`$1.7 \times 10^{5}$ Pa`],
        correctAnswer: 0,
        explanation: r`Gauge pressure is ρgh = 13 600 × 10 × 0.50 = 68 000 Pa = 6.8 × 10⁴ Pa. 6.8 × 10³ Pa leaves out g, 1.7 × 10⁵ Pa adds the atmosphere and so is the absolute pressure, and 2.7 × 10⁵ Pa divides by 0.50 instead of multiplying.`,
      },
      {
        question: r`A dive watch is rated for a gauge pressure of up to 5.0 × 10⁵ Pa. To what depth in fresh water can it be taken? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`40 m`, r`500 m`, r`5.0 m`, r`50 m`],
        correctAnswer: 3,
        explanation: r`h = P_gauge / (ρg) = 5.0 × 10⁵ / (1000 × 10) = 50 m. 5.0 m and 500 m slip a power of ten, and 40 m subtracts an atmosphere first, which is wrong because a gauge pressure already leaves the atmosphere out.`,
      },
      {
        question: r`A storage drum is filled with oil of density 900 kg/m³ to a depth of 250 cm and is open at the top. What is the gauge pressure at the bottom of the drum? (g = 10 m/s²)`,
        options: [r`2.25 kPa`, r`22.5 kPa`, r`122.5 kPa`, r`2250 kPa`],
        correctAnswer: 1,
        explanation: r`With h = 2.5 m, ρgh = 900 × 10 × 2.5 = 22 500 Pa = 22.5 kPa. 2250 kPa leaves the depth as 250 without converting to metres, 2.25 kPa leaves out g, and 122.5 kPa adds 100 kPa of atmosphere, giving the absolute pressure.`,
      },
      {
        question: r`At a depth of 200 m, how much greater is the gauge pressure in seawater (1025 kg/m³) than in fresh water (1000 kg/m³)? (g = 10 m/s²)`,
        options: [r`$2.0 \times 10^{6}$ Pa`, r`$2.05 \times 10^{6}$ Pa`, r`$5.0 \times 10^{4}$ Pa`, r`$5.0 \times 10^{3}$ Pa`],
        correctAnswer: 2,
        explanation: r`The difference is (1025 − 1000) × g × h = 25 × 10 × 200 = 50 000 Pa = 5.0 × 10⁴ Pa. 5.0 × 10³ Pa leaves out g, and 2.0 × 10⁶ Pa and 2.05 × 10⁶ Pa are the full gauge pressures in fresh water and in seawater, not the difference.`,
      },
      {
        question: r`A submarine in seawater descends from a depth of 100 m to a depth of 400 m. By what factor does the GAUGE pressure on its hull increase?`,
        options: [r`4`, r`3.7`, r`16`, r`2`],
        correctAnswer: 0,
        explanation: r`Gauge pressure is ρgh, directly proportional to depth, so 4 times the depth gives 4 times the gauge pressure. About 3.7 is the factor for the absolute pressure (roughly 11 atm to 41 atm), 16 squares the depth ratio, and 2 takes its square root.`,
      },
      {
        question: r`A research habitat sits 30 m deep in a freshwater lake, and the air inside is kept at atmospheric pressure. What net inward force does the water exert on a flat hatch of area 0.50 m²? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`$1.5 \times 10^{4}$ N`, r`$1.5 \times 10^{5}$ N`, r`$2.0 \times 10^{5}$ N`, r`$6.0 \times 10^{5}$ N`],
        correctAnswer: 1,
        explanation: r`The atmosphere acts on both sides, so the net force comes from the gauge pressure: ρgh = 1000 × 10 × 30 = 3.0 × 10⁵ Pa, and F = PA = 3.0 × 10⁵ × 0.50 = 1.5 × 10⁵ N. 6.0 × 10⁵ N divides by the area, 2.0 × 10⁵ N uses the absolute pressure, and 1.5 × 10⁴ N leaves out g.`,
      },
    ],
  },
}
