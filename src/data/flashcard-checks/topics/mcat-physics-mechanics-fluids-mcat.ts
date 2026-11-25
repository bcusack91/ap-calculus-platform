import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-mechanics-fluids-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Intrapleural pressure is normally about $-4$ mmHg. What does the negative sign mean, and what is the absolute pressure at sea level?`]: {
    question: r`A wound-suction canister in a mountain clinic shows a gauge reading of −100 mmHg. The local atmospheric pressure is 700 mmHg. What is the absolute pressure inside the canister?`,
    options: [r`800 mmHg`, r`660 mmHg`, r`600 mmHg`, r`−100 mmHg`],
    correctAnswer: 2,
    explanation: r`A negative gauge reading means below the local atmosphere, so absolute pressure is 700 − 100 = 600 mmHg. Adding the reading gives 800 mmHg, and 660 mmHg uses the sea-level 760 mmHg instead of the stated local value. An absolute pressure can never be negative, so −100 mmHg is impossible.`,
  },
  [r`A hydraulic jack's output piston has $5$ times the input piston's diameter. What load can a $200$ N input force support?`]: {
    question: r`A hydraulic dental chair has an output piston with 4 times the diameter of its input piston. The chair and patient together weigh 1600 N. What input force holds them up?`,
    options: [r`100 N`, r`400 N`, r`6400 N`, r`25 600 N`],
    correctAnswer: 0,
    explanation: r`Area scales with diameter squared, so the output area is 16 times the input area and the input force is 1600/16 = 100 N. Dividing by the diameter ratio alone gives 400 N. The values 6400 N and 25 600 N multiply instead of divide, as if the small piston needed the larger force.`,
  },
  [r`A $50.0$ cm$^3$ sample of olive oil has a mass of $46.0$ g. What are its density in SI units and its specific gravity?`]: {
    question: r`A 200 cm³ sample of compact bone has a mass of 380 g. What are its density in SI units and its specific gravity?`,
    options: [r`1.9 kg/m³ and SG 1.9`, r`1900 kg/m³ and SG 1900`, r`530 kg/m³ and SG 0.53`, r`1900 kg/m³ and SG 1.9`],
    correctAnswer: 3,
    explanation: r`Density is 380/200 = 1.9 g/cm³, which is 1900 kg/m³, and dividing by water's 1000 kg/m³ gives a unitless SG of 1.9. Writing 1.9 kg/m³ skips the factor of 1000 between g/cm³ and kg/m³, and SG 1900 forgets to divide by water's density. The 530 and 0.53 pair comes from dividing volume by mass.`,
  },
  [r`Absolute pressure is about $2$ atm at a depth of $10$ m in a freshwater lake, so at $30$ m it is about {{c1::$4$ atm}}.`]: {
    question: r`A diver's gauge shows an absolute pressure of 3 atm at a depth of 20 m in a freshwater lake. At about what depth is the absolute pressure 6 atm, twice as large?`,
    options: [r`40 m`, r`50 m`, r`60 m`, r`30 m`],
    correctAnswer: 1,
    explanation: r`Each 10 m of water adds about 1 atm to the 1 atm at the surface, so 6 atm needs 5 atm of water, which is 50 m. Doubling the depth to 40 m gives only 5 atm, because the surface atmosphere does not double. Choosing 60 m treats all 6 atm as water pressure, and 30 m adds only 1 atm.`,
  },
  [r`A mercury barometer stands at $760$ mm. Filled with water instead, its column would be about {{c1::$10.3$ m}} tall.`]: {
    question: r`A barometer is filled with a liquid of specific gravity 6.8, half that of mercury (13.6). On a day when a mercury barometer stands at 760 mm, how tall is the column in this barometer?`,
    options: [r`0.38 m`, r`1.52 m`, r`0.76 m`, r`5.17 m`],
    correctAnswer: 1,
    explanation: r`Both columns balance the same atmosphere, so density times height is the same: half the density needs twice the height, 2 × 0.76 = 1.52 m. Halving the height to 0.38 m flips the inverse relationship, and 0.76 m ignores the density change. The value 5.17 m multiplies 0.76 m by 6.8.`,
  },
  [r`In an open-tube U manometer, the liquid is pushed down on the {{c1::higher-pressure}} side, and the level difference gives $P - P_{\text{atm}} = \rho g \Delta h$.`]: {
    question: r`An open-tube water manometer is joined to a flask of gas. The water stands 20 cm LOWER in the arm joined to the flask than in the open arm. What is the gauge pressure of the gas? (Water: 1000 kg/m³, g = 10 m/s²)`,
    options: [r`−2000 Pa`, r`+200 Pa`, r`−200 Pa`, r`+2000 Pa`],
    correctAnswer: 3,
    explanation: r`The liquid is pushed down on the higher-pressure side, so the gas is above atmospheric by ρgΔh = 1000 × 10 × 0.20 = 2000 Pa. The negative answers reverse which side is pushed down. The 200 Pa values leave the height as 0.02 m, a slip in converting 20 cm to metres.`,
  },
  [r`Give hydrostatic pressure with depth.`]: {
    question: r`Liquid X has twice the density of water. Both liquids sit in open tanks. At what depth in liquid X does the gauge pressure equal the gauge pressure 6 m deep in the water?`,
    options: [r`12 m`, r`3 m`, r`6 m`, r`1.5 m`],
    correctAnswer: 1,
    explanation: r`Gauge pressure is ρgh, so doubling the density means half the depth gives the same pressure: 3 m. Choosing 12 m flips the inverse relationship, and 6 m ignores density altogether. The 1.5 m answer halves the depth twice.`,
  },
  [r`A submarine is at a depth of 100 m in seawater (ρ = 1025 $kg/m^{3}$). What is the gauge pressure? (g = 9.8 $m/s^{2}$)`]: {
    question: r`A probe is lowered 20 m below the surface of a brine pool of density 1200 kg/m³. What is the gauge pressure on the probe? (g = 10 m/s²)`,
    options: [r`$3.4 \times 10^{5}$ Pa`, r`$2.4 \times 10^{4}$ Pa`, r`$2.0 \times 10^{5}$ Pa`, r`$2.4 \times 10^{5}$ Pa`],
    correctAnswer: 3,
    explanation: r`Gauge pressure is ρgh = 1200 × 10 × 20 = 240 000 Pa. Adding the atmosphere's $1.0 \times 10^{5}$ Pa gives the absolute pressure, $3.4 \times 10^{5}$ Pa, which was not asked for. The $2.4 \times 10^{4}$ Pa answer drops a factor of 10, and $2.0 \times 10^{5}$ Pa uses the density of fresh water.`,
  },
  [r`A hydraulic lift multiplies force tenfold, so the input piston must move {{c1::ten times farther}}.`]: {
    question: r`In an ideal hydraulic press, an input force of 50 N holds an output load of 2000 N. How far must the input piston be pushed to raise the load by 2 cm?`,
    options: [r`0.05 cm`, r`80 cm`, r`2 cm`, r`13 cm`],
    correctAnswer: 1,
    explanation: r`The force is multiplied 40 times, so the input piston must move 40 times farther: 40 × 2 = 80 cm, which keeps work in equal to work out. Dividing 2 cm by 40 gives 0.05 cm and would create energy. Equal travel of 2 cm ignores the area difference, and 13 cm uses the square root of 40.`,
  },
  [r`State Pascal's principle and its hydraulic consequence.`]: {
    question: r`Two water-filled syringes are joined by a tube at the same height. Plunger A has an area of 1 cm² and plunger B has an area of 4 cm². A nurse pushes on A with 8 N. What added pressure reaches plunger B, and what force must hold B still?`,
    options: [r`80 kPa and 8 N`, r`20 kPa and 8 N`, r`20 kPa and 2 N`, r`80 kPa and 32 N`],
    correctAnswer: 3,
    explanation: r`The added pressure is 8 N over 1 cm², which is 80 kPa, and it is transmitted undiminished to B, where it pushes with 80 kPa × 4 cm² = 32 N. The answers with 20 kPa wrongly spread the pressure over the larger area. Keeping 8 N treats force, not pressure, as the quantity that is transmitted.`,
  },
  [r`How does absolute pressure at depth differ from gauge pressure?`]: {
    question: r`A patient's mean arterial pressure is recorded with a cuff as 100 mmHg on a day when atmospheric pressure is 760 mmHg. What is the absolute pressure of the blood in that artery?`,
    options: [r`660 mmHg`, r`100 mmHg`, r`860 mmHg`, r`760 mmHg`],
    correctAnswer: 2,
    explanation: r`A clinical blood pressure is a gauge pressure, the excess above atmosphere, so the absolute pressure is 760 + 100 = 860 mmHg. Subtracting gives 660 mmHg, which would mean blood below atmospheric pressure. The 100 mmHg answer treats the reading as absolute, and 760 mmHg is the atmosphere alone.`,
  },
  [r`Blood has a specific gravity near 1.06, so its density is {{c1::about $1060$ kg/m$^3$}}.`]: {
    question: r`A blood bank pools 5.0 L of plasma, which has a specific gravity of 1.02. What is the mass of the plasma?`,
    options: [r`5.1 kg`, r`4.9 kg`, r`5100 kg`, r`1.02 kg`],
    correctAnswer: 0,
    explanation: r`SG 1.02 means a density of 1020 kg/m³, or 1.02 kg per litre, so 5.0 L has a mass of 5.1 kg. The 4.9 kg answer divides by the specific gravity instead of multiplying. The 5100 kg answer treats litres as cubic metres, and 1.02 kg is the mass of one litre only.`,
  },
  [r`Pressure in a static fluid depends on depth and density but not on {{c1::the shape or volume of the container}}.`]: {
    question: r`A narrow test tube, a wide beaker and a flask that flares out toward its base are each filled with water to a depth of 15 cm. How do the water pressures at the bottoms of the three containers compare?`,
    options: [r`It is greatest in the beaker`, r`They are equal in all three`, r`It is greatest in the test tube`, r`It is greatest in the flask`],
    correctAnswer: 1,
    explanation: r`Pressure in a static fluid depends only on depth and density, and all three have 15 cm of water above the bottom, so the pressures are equal. Picking the beaker or the flask assumes that more water above the base means more pressure. Picking the test tube assumes that a narrow column concentrates the pressure.`,
  },
  [r`Why is arterial pressure higher in the feet than at the heart when standing?`]: {
    question: r`The arterial pressure at a patient's ankle is measured while he stands and again while he lies flat. The pressure at heart level is the same both times. How do the two ankle readings compare?`,
    options: [r`Higher when lying flat, because a column of blood adds ρgh`, r`Higher when standing, because a column of blood adds ρgh`, r`Higher when standing, because blood runs faster in the leg`, r`The same both times, because heart-level pressure is fixed`],
    correctAnswer: 1,
    explanation: r`When he stands, the ankle is more than a metre below the heart, and that column of blood adds ρgh to the pressure there. Lying flat puts the ankle at heart height, so the extra term vanishes; it does not grow. The difference is hydrostatic, not a matter of flow speed, and a fixed heart-level pressure does not fix the pressure at other heights.`,
  },
  [r`An IV bag must hang high enough that {{c1::$\rho g h$}} exceeds {{c1::the patient's venous pressure}}.`]: {
    question: r`A patient's venous pressure is 15 mmHg, about 2000 Pa. What is the smallest height above the vein at which the surface of a saline drip can hang and still push fluid in? (Saline: 1000 kg/m³, g = 10 m/s²)`,
    options: [r`0.20 m`, r`2.0 m`, r`0.020 m`, r`0.15 m`],
    correctAnswer: 0,
    explanation: r`The column must supply ρgh of at least 2000 Pa, so h = 2000/(1000 × 10) = 0.20 m. The 2.0 m and 0.020 m answers are power-of-ten slips, for example leaving out g. The 0.15 m answer reads 15 mmHg as if it were 15 cm of saline.`,
  },
  [r`One mmHg is about {{c1::133 Pa}}, and atmospheric pressure is about {{c1::760 mmHg}}.`]: {
    question: r`A glaucoma patient's intraocular pressure is measured as 30 mmHg. About what is this pressure in pascals?`,
    options: [r`About 400 Pa`, r`About 40 000 Pa`, r`About 0.23 Pa`, r`About 4000 Pa`],
    correctAnswer: 3,
    explanation: r`One mmHg is about 133 Pa, so 30 mmHg is 30 × 133, about 4000 Pa. As a check, 760 mmHg is about 100 000 Pa, and 30 mmHg is about one twenty-fifth of that. The 400 Pa and 40 000 Pa answers are off by a factor of 10, and 0.23 Pa divides by 133 instead of multiplying.`,
  },
  [r`Why do stiletto heels damage a floor when flat shoes do not, if body weight is unchanged?`]: {
    question: r`A nurse presses with a force of 2 N first through a fingertip pad of area 1 cm² and then through a needle tip of area 0.1 mm². How does the pressure under the needle tip compare with the pressure under the fingertip?`,
    options: [r`100 times as large`, r`1000 times as large`, r`10 times as large`, r`exactly the same size`],
    correctAnswer: 1,
    explanation: r`Pressure is force over area, and 1 cm² is 100 mm², which is 1000 times the needle tip's 0.1 mm², so the same force gives 1000 times the pressure. The 10 times answer compares 1 with 0.1 without converting cm² to mm², and 100 times uses the unit conversion alone. Equal force does not mean equal pressure.`,
  },
}
