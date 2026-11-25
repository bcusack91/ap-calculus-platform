import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-mechanics-fluid-dynamics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Doppler shows blood speeding from $30$ to $270$ cm/s through a stenosis at unchanged flow, so the lumen radius is about {{c1::one-third}} of normal.`]: {
    question: r`Echocardiography shows blood speeding up from 50 cm/s to 200 cm/s as it passes through a narrowed valve, with the flow rate unchanged. The opening's diameter is about what fraction of normal?`,
    options: [r`one-quarter`, r`one-half`, r`one-sixteenth`, r`one-eighth`],
    correctAnswer: 1,
    explanation: r`The speed rose 4-fold, so by continuity the area fell to one-quarter, and since area goes as diameter squared the diameter is one-half of normal. One-quarter is the area ratio, not the diameter ratio. One-sixteenth squares the ratio instead of taking its square root, and one-eighth has no basis in the continuity equation.`,
  },
  [r`Water flows at $1$ m/s through a horizontal pipe of area $10$ cm$^2$ into a throat of area $2$ cm$^2$. How much lower is the throat pressure, and what height difference do the Venturi tubes show?`]: {
    question: r`Water (1000 kg/m³) flows at 2 m/s along a horizontal pipe and enters a section with half the cross-sectional area. How much lower is the pressure in the narrow section?`,
    options: [r`2000 Pa`, r`8000 Pa`, r`1000 Pa`, r`6000 Pa`],
    correctAnswer: 3,
    explanation: r`Continuity doubles the speed to 4 m/s, and Bernoulli gives ΔP = ½(1000)(4² − 2²) = 6000 Pa. Squaring the speed difference, (4 − 2)², gives 2000 Pa. The 8000 Pa answer uses ½ρv² for the narrow section alone, and 1000 Pa uses the speed difference without squaring.`,
  },
  [r`A pitot tube reads a stagnation pressure $250$ Pa above the static pressure in an air stream ($\rho = 1.25$ kg/m$^3$). What is the air speed?`]: {
    question: r`A pitot tube in a water channel (1000 kg/m³) records a stagnation pressure 2000 Pa above the static pressure. How fast is the water moving?`,
    options: [r`2 m/s`, r`4 m/s`, r`1.4 m/s`, r`1 m/s`],
    correctAnswer: 0,
    explanation: r`Stopping the flow at the tip turns ½ρv² into pressure, so ½(1000)v² = 2000, v² = 4 and v = 2 m/s. The 4 m/s answer forgets the square root. The 1.4 m/s answer drops the factor of ½, and 1 m/s halves the correct answer again.`,
  },
  [r`Liquid leaks from a small hole a depth $h$ below the surface of a wide open tank at speed {{c1::$v = \sqrt{2gh}$}}.`]: {
    question: r`Water sprays from a small hole 5 m below the water surface in a wide, open storage tower. With g = 10 m/s², how fast does the water leave the hole?`,
    options: [r`100 m/s`, r`7 m/s`, r`10 m/s`, r`50 m/s`],
    correctAnswer: 2,
    explanation: r`Torricelli's result is v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s, the speed of free fall from the surface. The 100 m/s answer forgets the square root. The 7 m/s answer uses √(gh) without the 2, and 50 m/s is just g times h.`,
  },
  [r`Water at $1$ m/s in a $6$ cm$^2$ pipe rises $2$ m into a $2$ cm$^2$ section. How much lower is the pressure in the upper section? ($g = 10$ m/s$^2$)`]: {
    question: r`Water (1000 kg/m³) runs DOWN a pipe from a rooftop tank. At the top of the pipe it moves at 2 m/s. At a point 3 m lower the pipe is narrower and the water moves at 4 m/s. How does the pressure at the lower point compare with the pressure at the top? (g = 10 m/s²)`,
    options: [r`36 kPa higher`, r`30 kPa higher`, r`24 kPa higher`, r`6 kPa lower`],
    correctAnswer: 2,
    explanation: r`Descending 3 m raises the pressure by ρgh = 30 kPa, and speeding up lowers it by ½(1000)(16 − 4) = 6 kPa, for a net 24 kPa higher. Adding the two terms gives 36 kPa and ignores that they act in opposite directions here. The 30 kPa answer leaves out the speed change, and 6 kPa lower leaves out the height change.`,
  },
  [r`An infusion pump delivers $120$ mL/min through tubing of cross-sectional area $0.10$ cm$^2$. What is the saline's average speed?`]: {
    question: r`A dialysis pump moves blood at 300 mL/min through tubing with a cross-sectional area of 0.50 cm². What is the average speed of the blood in the tubing?`,
    options: [r`10 cm/s`, r`600 cm/s`, r`2.5 cm/s`, r`150 cm/s`],
    correctAnswer: 0,
    explanation: r`The flow rate is 300/60 = 5 cm³/s, and v = Q/A = 5/0.50 = 10 cm/s. Skipping the conversion from minutes to seconds gives 600 cm/s. The 2.5 cm/s answer multiplies by the area instead of dividing, and 150 cm/s makes both mistakes.`,
  },
  [r`Give the continuity equation.`]: {
    question: r`A river 20 m wide and 2 m deep flows at 1 m/s. It enters a gorge where it is 5 m wide and 4 m deep. How fast does the water move in the gorge?`,
    options: [r`4 m/s`, r`0.5 m/s`, r`8 m/s`, r`2 m/s`],
    correctAnswer: 3,
    explanation: r`The cross-sectional area falls from 40 m² to 20 m², so by A₁v₁ = A₂v₂ the speed doubles to 2 m/s. The 4 m/s answer uses the change in width alone and ignores the extra depth. The 0.5 m/s answer inverts the ratio, and 8 m/s multiplies the width and depth ratios instead of comparing areas.`,
  },
  [r`State Bernoulli's principle.`]: {
    question: r`Two sheets of paper hang side by side a few centimetres apart. A student blows a steady stream of air down through the gap between them. What do the sheets do, and why?`,
    options: [r`They swing apart: the faster air between them has higher pressure`, r`They swing together: the faster air between them has lower pressure`, r`They swing apart: the moving air pushes outward on both the sheets`, r`They stay still: the moving air remains at atmospheric pressure`],
    correctAnswer: 1,
    explanation: r`By Bernoulli's principle the fast air in the gap has lower pressure than the still air outside, so the outside air pushes the sheets together. Higher pressure in fast air reverses the principle. The air moves along the sheets, not into them, so it does not push them outward, and moving air at the same height is not at the pressure of still air.`,
  },
  [r`What four assumptions does Bernoulli's equation require?`]: {
    question: r`Blood flows steadily through a long, level vessel of constant diameter, and its pressure falls along the way. Bernoulli's equation would predict a constant pressure here. Which of its assumptions fails?`,
    options: [r`The fluid is incompressible`, r`The flow is steady in time`, r`The flow is along a streamline`, r`The fluid has no viscosity`],
    correctAnswer: 3,
    explanation: r`With no change in height or speed, Bernoulli predicts no pressure change, so the steady fall comes from viscous friction, which the equation leaves out. Blood is effectively incompressible, the flow is described as steady, and the comparison is along the vessel's streamlines. Those three assumptions hold here.`,
  },
  [r`By Bernoulli's principle, where a fluid speeds up at constant height its pressure {{c1::decreases}}.`]: {
    question: r`Wind blows at 10 m/s across the open top of a chimney, while the air inside the room at the bottom is still. Taking air's density as 1.2 kg/m³ and ignoring the height difference, how does the pressure at the top compare with the pressure in the room?`,
    options: [r`60 Pa higher`, r`120 Pa lower`, r`120 Pa higher`, r`60 Pa lower`],
    correctAnswer: 3,
    explanation: r`Where the air moves faster its pressure is lower, by ½ρv² = ½(1.2)(10²) = 60 Pa. The higher answers reverse Bernoulli's principle. The 120 Pa answers leave out the factor of ½ in the kinetic term.`,
  },
  [r`Why is blood slowest in capillaries even though each capillary is tiny?`]: {
    question: r`Blood moves at about 40 cm/s in the aorta and about 0.05 cm/s in the capillaries, with the same volume passing each level every second. How does the capillaries' combined cross-sectional area compare with the aorta's?`,
    options: [r`About 800 times smaller`, r`About 28 times larger`, r`About 800 times larger`, r`About 28 times smaller`],
    correctAnswer: 2,
    explanation: r`With Av constant, the area ratio is the inverse of the speed ratio: 40/0.05 = 800, so the combined capillary area is about 800 times larger. Smaller area would make the blood faster, not slower. The 28 answers take a square root, which would apply to a radius, not to an area.`,
  },
}
