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
  [r`A block floats in water with $60\%$ of its volume submerged. What fraction is submerged when it floats in oil of SG $0.8$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A plastic float sits in fresh water with 45% of its volume submerged. It is moved to a liquid of specific gravity 0.90. What fraction of its volume is submerged now?`,
        options: [r`50%`, r`55%`, r`45%`, r`41%`],
        correctAnswer: 0,
        explanation: r`The fraction submerged equals ρ_object / ρ_fluid. In water that makes the float's SG 0.45, and in the new liquid the fraction is 0.45 / 0.90 = 50%. 41% multiplies by 0.90 instead of dividing, 45% ignores the change of liquid, and 55% is the part above water at the start.`,
      },
      {
        question: r`A block floats in fresh water with 50% of its volume submerged. In an unknown liquid it floats with only 40% of its volume submerged. What is the specific gravity of the unknown liquid?`,
        options: [r`0.90`, r`1.25`, r`0.80`, r`0.20`],
        correctAnswer: 1,
        explanation: r`The block's SG is 0.50 (its submerged fraction in water). In the liquid, 0.40 = 0.50 / SG, so SG = 0.50 / 0.40 = 1.25; riding higher means a denser liquid. 0.80 inverts the ratio, 0.20 multiplies the two fractions, and 0.90 subtracts the difference from 1.`,
      },
      {
        question: r`A wooden block floats in fresh water with 90% of its volume submerged. It is then placed in ethanol of specific gravity 0.80. What happens?`,
        options: [r`It floats 72% submerged`, r`It floats 90% submerged`, r`It floats 89% submerged`, r`It sinks to the bottom`],
        correctAnswer: 3,
        explanation: r`The block's SG is 0.90, which is more than ethanol's 0.80, so the fraction 0.90 / 0.80 would exceed 100% and the block sinks. 72% multiplies 0.90 by 0.80, 90% ignores the change of liquid, and 89% divides 0.80 by 0.90, the ratio upside down.`,
      },
      {
        question: r`A wooden peg of specific gravity 0.60 floats in a liquid of specific gravity 1.5. What fraction of the peg's volume is ABOVE the liquid surface?`,
        options: [r`60%`, r`10%`, r`90%`, r`40%`],
        correctAnswer: 0,
        explanation: r`The submerged fraction is 0.60 / 1.5 = 0.40, so the remaining 60% is above the surface. 40% is the submerged part, not the part asked for; 90% multiplies 0.60 by 1.5, and 10% is what would be left above after that mistake.`,
      },
      {
        question: r`A log of volume 0.020 m³ and density 700 kg/m³ floats in a freshwater pond (1000 kg/m³). What volume of the log is below the water surface?`,
        options: [r`0.006 m³`, r`0.020 m³`, r`0.029 m³`, r`0.014 m³`],
        correctAnswer: 3,
        explanation: r`The submerged fraction is 700 / 1000 = 0.70, so the volume under water is 0.70 × 0.020 = 0.014 m³. 0.006 m³ is the part above the surface, 0.020 m³ is the whole log, and 0.029 m³ divides by 0.70 and is more than the log's own volume.`,
      },
      {
        question: r`A uniform cylinder floats upright in fresh water with 12 cm of its length below the surface. Floating upright in a liquid of specific gravity 1.5, what length of it is below the surface?`,
        options: [r`6.0 cm`, r`18 cm`, r`8.0 cm`, r`12 cm`],
        correctAnswer: 2,
        explanation: r`The submerged fraction goes as 1/ρ_fluid, so the submerged length is 12 / 1.5 = 8.0 cm; it rides higher in the denser liquid. 18 cm multiplies by 1.5, 12 cm ignores the change of liquid, and 6.0 cm halves the length as if the liquid were twice as dense.`,
      },
    ],
  },
  [r`An object denser than oil but less dense than water is dropped into a beaker of oil floating on water. Where does it come to rest?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A beaker holds a layer of oil (specific gravity 0.90) on top of glycerin (specific gravity 1.26). A solid bead dropped in comes to rest at the boundary between the two, partly in each liquid. Which could be the bead's specific gravity?`,
        options: [r`0.85`, r`1.10`, r`1.50`, r`1.30`],
        correctAnswer: 1,
        explanation: r`A bead rests at the boundary only if it is denser than the upper liquid and less dense than the lower one, so its SG lies between 0.90 and 1.26: 1.10. A bead of SG 0.85 would float on top of the oil, and beads of SG 1.30 or 1.50 would sink through the glycerin to the floor.`,
      },
      {
        question: r`A bead of specific gravity 0.85 rests at the boundary in a jar of oil (specific gravity 0.80) on water. It is swapped for a bead of the same size with specific gravity 0.95. Where does the new bead come to rest?`,
        options: [r`At the boundary, with more of its volume in the oil`, r`On the floor of the jar, underneath all the water`, r`At the top of the oil, with part of it up in the air`, r`At the boundary, with more of its volume in the water`],
        correctAnswer: 3,
        explanation: r`0.95 is still between 0.80 and 1.00, so the bead stays at the boundary, but it is heavier, so it must displace more of the denser water to be held up. Sitting more in the oil would give less support, not more; it reaches the floor only above SG 1.00 and the top of the oil only below SG 0.80.`,
      },
    ],
  },
  [r`A floating object displaces its own {{c1::weight}} of fluid; a fully submerged object displaces its own {{c2::volume}} of fluid.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 500 g steel bolt has a volume of 64 cm³. It is dropped into a beaker of fresh water (1.0 g/cm³) and sinks to the bottom. What volume of water does it displace?`,
        options: [r`436 cm³`, r`500 cm³`, r`64 cm³`, r`7.8 cm³`],
        correctAnswer: 2,
        explanation: r`A fully submerged object displaces its own volume, 64 cm³, whatever it weighs. 500 cm³ would be its own weight of water, which only a floating object displaces; 436 cm³ subtracts the two numbers, and 7.8 is the bolt's density, not a volume.`,
      },
      {
        question: r`A 300 g block of wood with a volume of 500 cm³ floats at rest in fresh water (1.0 g/cm³). What volume of water does it displace?`,
        options: [r`200 cm³`, r`300 cm³`, r`800 cm³`, r`500 cm³`],
        correctAnswer: 1,
        explanation: r`A floating object displaces its own weight of fluid: 300 g of water, which is 300 cm³. 500 cm³ is the block's whole volume, which it would displace only if pushed fully under; 200 cm³ is the part above the surface, and 800 cm³ adds the two numbers.`,
      },
      {
        question: r`A loaded rowboat with a total mass of 1200 kg floats at rest on a freshwater lake (1000 kg/m³). What volume of water does it displace?`,
        options: [r`1.2 m³`, r`0.83 m³`, r`12 m³`, r`1200 m³`],
        correctAnswer: 0,
        explanation: r`Floating means it displaces its own weight, so 1200 kg of water, and V = m/ρ = 1200 / 1000 = 1.2 m³. 1200 m³ treats a kilogram of water as a cubic metre, 0.83 m³ divides density by mass, and 12 m³ slips a power of ten.`,
      },
      {
        question: r`A 72 g cork floats at rest in a dish of oil of density 0.90 g/cm³. What volume of oil does it displace?`,
        options: [r`72 cm³`, r`8.0 cm³`, r`80 cm³`, r`65 cm³`],
        correctAnswer: 2,
        explanation: r`The floating cork displaces its own weight of oil, 72 g, and that much oil takes up 72 / 0.90 = 80 cm³. 72 cm³ would be right only in water, 65 cm³ multiplies by 0.90 instead of dividing, and 8.0 cm³ slips a power of ten.`,
      },
      {
        question: r`A 2.0 kg stone with a volume of 800 cm³ lies on the floor of a freshwater tank (1.0 g/cm³). What mass of water does the stone displace?`,
        options: [r`1.2 kg`, r`0.80 kg`, r`2.8 kg`, r`2.0 kg`],
        correctAnswer: 1,
        explanation: r`A submerged object displaces its own volume: 800 cm³ of water, which has a mass of 800 g = 0.80 kg. 2.0 kg is the stone's own mass, which it would displace only if it floated; 1.2 kg is the difference between the two and 2.8 kg is their sum.`,
      },
      {
        question: r`A 240 g ball with a volume of 400 cm³ floats at rest in fresh water (1.0 g/cm³). A student then pushes it down until it is just fully under water. How much MORE water does it displace when held under than when floating?`,
        options: [r`640 cm³`, r`240 cm³`, r`400 cm³`, r`160 cm³`],
        correctAnswer: 3,
        explanation: r`Floating, the ball displaces its own weight of water, 240 g or 240 cm³; held under, it displaces its own volume, 400 cm³. The extra is 400 − 240 = 160 cm³. 240 cm³ and 400 cm³ are the two separate amounts, and 640 cm³ adds them.`,
      },
    ],
  },
  [r`Normal urine specific gravity runs from about {{c1::$1.005$ to $1.030$}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`After drinking a very large volume of water, a volunteer gives a urine sample with a specific gravity of 1.001. How does this reading compare with the normal range?`,
        options: [r`Inside the normal range: fairly dilute urine`, r`Below the normal range: very dilute urine`, r`Inside the normal range: concentrated urine`, r`Above the normal range: concentrated urine`],
        correctAnswer: 1,
        explanation: r`Normal urine runs from about 1.005 to 1.030, so 1.001 is below the range, close to pure water's 1.000, as expected for very dilute urine. It is not inside the range, and a reading this near 1.000 means few dissolved solutes, the opposite of concentrated.`,
      },
      {
        question: r`A 100 mL urine sample is weighed (water: 1.000 g/mL). Which mass of the sample gives a specific gravity inside the normal range for urine?`,
        options: [r`99.0 g`, r`100.1 g`, r`104.5 g`, r`101.5 g`],
        correctAnswer: 3,
        explanation: r`SG is the sample's mass divided by the mass of 100 mL of water (100 g). 101.5 g gives 1.015, inside the normal 1.005 to 1.030. 100.1 g gives 1.001, too low; 104.5 g gives 1.045, too high; and 99.0 g gives 0.990, less dense than water, which urine never is.`,
      },
    ],
  },
  [r`In a narrow glass tube, water forms a {{c1::concave}} meniscus and rises, while mercury forms a {{c2::convex}} meniscus and is depressed.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Water rises in a clean, narrow glass tube. The inside of an identical tube is then coated with a wax that water does not wet, so water's cohesion now beats its adhesion to the wall. What is seen when the coated tube is dipped in water?`,
        options: [r`A concave meniscus, with the level below the water outside`, r`A convex meniscus, with the level above the water outside`, r`A convex meniscus, with the level below the water outside`, r`A concave meniscus, with the level above the water outside`],
        correctAnswer: 2,
        explanation: r`When cohesion wins, the liquid pulls away from the wall, domes upward (convex) and is pushed below the outside level, just as mercury does in glass. A concave surface and a rise belong together and need adhesion to win; the two mixed answers pair a shape with the wrong direction.`,
      },
      {
        question: r`Two narrow glass tubes stand in dishes of two different liquids. In tube 1 the liquid stands 3 cm above the level in its dish; in tube 2 it stands 2 cm below the level in its dish. Which description fits?`,
        options: [r`Tube 1 convex, like mercury; tube 2 concave, like water`, r`Tube 1 concave, like water; tube 2 concave, like water`, r`Tube 1 convex, like mercury; tube 2 convex, like mercury`, r`Tube 1 concave, like water; tube 2 convex, like mercury`],
        correctAnswer: 3,
        explanation: r`A liquid that climbs the glass (adhesion beats cohesion) curves up at the walls, a concave meniscus, as water does; a liquid that is depressed (cohesion wins) domes up, a convex meniscus, as mercury does. Swapping them reverses the link, and the two tubes cannot share a shape when one rises and one falls.`,
      },
    ],
  },
  [r`When an ice cube floating in a glass of water melts completely, the water level {{c1::stays the same}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 46 g ice cube (density 0.92 g/cm³, so volume 50 cm³) floats in a glass of fresh water (1.0 g/cm³). Which pair of volumes explains what the water level does as the cube melts?`,
        options: [r`It displaces 50 cm³ while floating and melts into 50 cm³`, r`It displaces 46 cm³ while floating and melts into 50 cm³`, r`It displaces 50 cm³ while floating and melts into 46 cm³`, r`It displaces 46 cm³ while floating and melts into 46 cm³`],
        correctAnswer: 3,
        explanation: r`Floating ice displaces its own weight of water: 46 g, or 46 cm³. Melting turns it into 46 g of water, also 46 cm³, which exactly fills the space it had displaced, so the level does not move. 50 cm³ is the cube's whole volume, which it neither displaces while floating nor keeps once melted.`,
      },
      {
        question: r`Two identical freshwater ponds each hold the same mass of freshwater ice. In pond 1 the ice floats on the water; in pond 2 it sits on a rock island, out of the water. All the ice melts and the meltwater runs into its pond. Which pond's water level rises?`,
        options: [r`Only the pond whose ice sat on the island`, r`Both ponds, each by the same amount`, r`Neither pond: both levels stay the same`, r`Only the pond whose ice was floating`],
        correctAnswer: 0,
        explanation: r`Floating ice already displaces its own weight of water, so its meltwater just fills that space and the level stays put. Ice resting on the island displaced nothing, so its meltwater is water added to the pond and the level rises. Only that pond changes, so the other three answers fail.`,
      },
    ],
  },
  [r`A rock weighs $50$ N in air and $40$ N when hung fully submerged in water. What is its specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A chunk of granite weighs 90 N in air and 60 N when hung fully submerged in water. What is its specific gravity?`,
        options: [r`3.0`, r`0.33`, r`1.5`, r`2.0`],
        correctAnswer: 0,
        explanation: r`The buoyant force is 90 − 60 = 30 N, the weight of an equal volume of water, so SG = 90 / 30 = 3.0. 1.5 divides the true weight by the apparent weight, 2.0 divides the apparent weight by the buoyant force, and 0.33 is the ratio upside down.`,
      },
      {
        question: r`A marble statue of specific gravity 2.5 has a true weight of 100 N. A diver raises it slowly on a cable. What is the tension in the cable while the statue is still completely under water?`,
        options: [r`250 N`, r`40 N`, r`60 N`, r`97.5 N`],
        correctAnswer: 2,
        explanation: r`SG = W / F_B, so F_B = 100 / 2.5 = 40 N and the cable carries the rest: 100 − 40 = 60 N. 40 N is the buoyant force, not the tension; 97.5 N subtracts the specific gravity as if it were a force, and 250 N multiplies the weight by it.`,
      },
      {
        question: r`A brass fitting of specific gravity 8.0 is hung from a scale. The reading drops by 5.0 N when the fitting is lowered fully into water. What does the fitting weigh in air?`,
        options: [r`45 N`, r`40 N`, r`35 N`, r`1.6 N`],
        correctAnswer: 1,
        explanation: r`The 5.0 N drop is the buoyant force, and SG = W / F_B, so W = 8.0 × 5.0 = 40 N. 35 N is what the scale reads under water (the apparent weight), 45 N adds the buoyant force on again, and 1.6 N divides 8.0 by 5.0.`,
      },
      {
        question: r`A mineral sample reads 240 g on a balance in air. Hung from the same balance and fully submerged in water, it reads 180 g. What is the mineral's density?`,
        options: [r`4000 kg/m³`, r`750 kg/m³`, r`3000 kg/m³`, r`1330 kg/m³`],
        correctAnswer: 0,
        explanation: r`The reading falls by 240 − 180 = 60 g, the mass of an equal volume of water, so SG = 240 / 60 = 4.0 and the density is 4000 kg/m³. 3000 kg/m³ divides the submerged reading by the loss, 1330 kg/m³ divides the two readings, and 750 kg/m³ inverts that.`,
      },
      {
        question: r`Two solid samples each weigh 60 N in air. Hung fully submerged in water, sample X reads 50 N and sample Y reads 40 N. The specific gravity of X is what multiple of the specific gravity of Y?`,
        options: [r`0.50`, r`1.25`, r`2.0`, r`1.5`],
        correctAnswer: 2,
        explanation: r`X loses 10 N, so its SG is 60 / 10 = 6; Y loses 20 N, so its SG is 60 / 20 = 3; the ratio is 6 / 3 = 2.0. 1.25 is the ratio of the submerged readings, 0.50 is the ratio upside down, and 1.5 compares 60 N with 40 N.`,
      },
      {
        question: r`A bone fragment weighs 0.36 N in air and 0.16 N when hung fully submerged in water. What is its specific gravity?`,
        options: [r`0.56`, r`0.80`, r`2.25`, r`1.8`],
        correctAnswer: 3,
        explanation: r`The buoyant force is 0.36 − 0.16 = 0.20 N, so SG = 0.36 / 0.20 = 1.8. 2.25 divides the true weight by the apparent weight, 0.80 divides the apparent weight by the buoyant force, and 0.56 divides the buoyant force by the true weight.`,
      },
    ],
  },
  [r`State Archimedes' principle.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A helium party balloon has a volume of 0.50 m³. The surrounding air has a density of 1.2 kg/m³ and the helium inside has a density of 0.18 kg/m³. What is the buoyant force on the balloon? (g = 10 m/s²)`,
        options: [r`6.0 N`, r`60 N`, r`5.1 N`, r`0.90 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force is the weight of the displaced AIR: F_b = 1.2 × 0.50 × 10 = 6.0 N. 0.90 N uses the helium's density, which gives the weight of the gas inside; 5.1 N is the difference between the two (the net lift), and 60 N slips a power of ten.`,
      },
      {
        question: r`A sealed sample canister held fully under water feels a buoyant force of 25 N. What is the canister's volume? (Water: 1000 kg/m³, g = 10 m/s², 1 m³ = 1000 L)`,
        options: [r`250 L`, r`0.25 L`, r`25 L`, r`2.5 L`],
        correctAnswer: 3,
        explanation: r`V = F_b / (ρg) = 25 / (1000 × 10) = 2.5 × 10⁻³ m³, which is 2.5 L. 25 L forgets to divide by g, and 0.25 L and 250 L slip a power of ten in turning cubic metres into litres.`,
      },
      {
        question: r`A solid block of volume 0.0010 m³ is held fully submerged in an unknown liquid, where the buoyant force on it is 12.6 N. What is the liquid's density? (g = 10 m/s²)`,
        options: [r`126 kg/m³`, r`1260 kg/m³`, r`12 600 kg/m³`, r`794 kg/m³`],
        correctAnswer: 1,
        explanation: r`ρ = F_b / (Vg) = 12.6 / (0.0010 × 10) = 12.6 / 0.010 = 1260 kg/m³. 126 kg/m³ and 12 600 kg/m³ slip a power of ten in that division, and 794 kg/m³ comes from dividing the wrong way round (10 000 / 12.6).`,
      },
      {
        question: r`A solid glass sphere of volume 500 cm³ and density 2500 kg/m³ is fully submerged in water (1000 kg/m³). What is the buoyant force on it? (g = 10 m/s²)`,
        options: [r`5000 N`, r`12.5 N`, r`5.0 N`, r`7.5 N`],
        correctAnswer: 2,
        explanation: r`500 cm³ is 5.0 × 10⁻⁴ m³, so F_b = 1000 × 5.0 × 10⁻⁴ × 10 = 5.0 N, using the WATER's density. 12.5 N uses the glass's density, which gives the sphere's weight; 7.5 N is its apparent weight, and 5000 N skips the cm³ to m³ conversion.`,
      },
      {
        question: r`A steel ball is fully submerged in water, then moved and fully submerged in oil of specific gravity 0.80. The buoyant force on it in the oil is what multiple of the buoyant force in the water?`,
        options: [r`1.00`, r`0.20`, r`1.25`, r`0.80`],
        correctAnswer: 3,
        explanation: r`F_b = ρ_fluid V g, and the submerged volume and g are unchanged, so the force scales with fluid density: 0.80. 1.25 inverts the ratio, 1.00 assumes the force depends on the ball rather than the fluid, and 0.20 is the size of the drop, not the ratio.`,
      },
      {
        question: r`A wooden raft of volume 0.50 m³ floats on a freshwater lake (1000 kg/m³) with 40% of its volume below the surface. What is the buoyant force on the raft? (g = 10 m/s²)`,
        options: [r`3000 N`, r`2000 N`, r`200 N`, r`5000 N`],
        correctAnswer: 1,
        explanation: r`Only the submerged part displaces water: V = 0.40 × 0.50 = 0.20 m³, so F_b = 1000 × 0.20 × 10 = 2000 N. 5000 N uses the raft's whole volume, 3000 N uses the 60% above the surface, and 200 N leaves out g.`,
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
  [r`An object floats when its density is:`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sealed vial with a total mass of 30 g and a volume of 30 cm³ is released from rest, fully submerged, in the middle of a tank of fresh water (1.0 g/cm³). What does the vial do?`,
        options: [r`It rises to just under the surface`, r`It sinks to the floor of the tank`, r`It stays where it was released`, r`It rises and floats partly out`],
        correctAnswer: 2,
        explanation: r`The vial's density is 30 / 30 = 1.0 g/cm³, equal to the water's, so the buoyant force equals its weight at any depth and it hovers where it is put. It would rise only if it were less dense than the water and sink only if it were denser.`,
      },
      {
        question: r`A hollow steel sphere has a total mass of 2.0 kg and an outer volume of 2.5 L. Solid steel has a density of 7.8 g/cm³. What does the sealed sphere do when placed in fresh water (1.0 g/cm³)?`,
        options: [r`It sinks: the density of steel is 7.8 g/cm³`, r`It sinks: its average density is 1.25 g/cm³`, r`It hovers: its average density is 1.0 g/cm³`, r`It floats: its average density is 0.80 g/cm³`],
        correctAnswer: 3,
        explanation: r`What matters is the object's average density: 2000 g / 2500 cm³ = 0.80 g/cm³, less than water's, so it floats. The density of the steel alone does not decide it, 1.25 g/cm³ divides volume by mass, and 1.0 g/cm³ does not follow from these numbers.`,
      },
    ],
  },
}
