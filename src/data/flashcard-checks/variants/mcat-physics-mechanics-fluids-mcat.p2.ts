import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-fluids-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How does hydrostatic weighing determine body composition?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A woman weighs 600 N in air. Fully submerged in fresh water with her lungs emptied, her apparent weight is 30 N. What is the volume of her body? (Water: 1000 kg/m³, g = 10 m/s², 1 m³ = 1000 L)`,
        options: [r`60 L`, r`3.0 L`, r`57 L`, r`63 L`],
        correctAnswer: 2,
        explanation: r`The buoyant force is the true weight minus the apparent weight, 600 − 30 = 570 N, and V = F_B/(ρg) = 570/(1000 × 10) = 0.057 m³ = 57 L. 60 L uses the true weight as the buoyant force, 3.0 L uses the apparent weight, and 63 L adds the two weights instead of subtracting.`,
      },
      {
        question: r`An athlete weighs 840 N in air and has an apparent weight of 40 N when fully submerged in fresh water with the lungs emptied. What is the athlete's whole-body density? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`1050 kg/m³`, r`950 kg/m³`, r`1000 kg/m³`, r`21 000 kg/m³`],
        correctAnswer: 0,
        explanation: r`The buoyant force is 840 − 40 = 800 N, so the body's volume is 800/(1000 × 10) = 0.080 m³. The mass is 840/10 = 84 kg, giving 84/0.080 = 1050 kg/m³. 950 kg/m³ inverts the ratio of weight to buoyant force, 1000 kg/m³ is just water, and 21 000 kg/m³ divides the true weight by the apparent weight.`,
      },
      {
        question: r`A subject weighs 630 N in air and has a whole-body density of 1050 kg/m³ with the lungs emptied. What apparent weight is expected when the subject is fully submerged in fresh water? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`600 N`, r`63 N`, r`1230 N`, r`30 N`],
        correctAnswer: 3,
        explanation: r`The mass is 63 kg, so the volume is 63/1050 = 0.060 m³ and the buoyant force is 1000 × 0.060 × 10 = 600 N. Apparent weight = 630 − 600 = 30 N. 600 N is the buoyant force itself, 1230 N adds the buoyant force to the weight instead of subtracting it, and 63 N just reuses the mass.`,
      },
      {
        question: r`A balance reads 62 kg for a subject standing in air. With the subject hanging fully submerged in fresh water, lungs emptied, the same balance reads 2.0 kg. What is the volume of the subject's body? (Water: 1.0 kg/L)`,
        options: [r`62 L`, r`60 L`, r`64 L`, r`2.0 L`],
        correctAnswer: 1,
        explanation: r`The drop in the reading, 62 − 2.0 = 60 kg, is the mass of water displaced, and 60 kg of water at 1.0 kg/L is 60 L. 62 L treats the whole mass as displaced water, 64 L adds the readings, and 2.0 L uses only the underwater reading.`,
      },
      {
        question: r`During underwater weighing, a subject fails to breathe out fully and keeps an extra 1.0 L of air in the lungs. The air's own weight is negligible. How does this change the result? (Water: 1000 kg/m³, g = 10 m/s², 1 L = 0.001 m³)`,
        options: [
          r`Apparent weight reads 10 N higher, so body fat is overestimated`,
          r`Apparent weight reads 10 N lower, so body fat is underestimated`,
          r`Apparent weight reads 10 N lower, so body fat is overestimated`,
          r`Apparent weight reads 10 N higher, so body fat is underestimated`,
        ],
        correctAnswer: 2,
        explanation: r`The extra litre displaces more water, adding a buoyant force of 1000 × 0.001 × 10 = 10 N, so the apparent weight reads 10 N lower. The body then seems larger in volume and lower in density, which looks like more fat. The "higher" answers have the buoyant force acting the wrong way, and "underestimated" reverses the link between low density and fat.`,
      },
      {
        question: r`A 2.2 N sample of lean tissue with a density of 1.1 g/cm³ is hung from a spring scale and lowered until it is fully submerged in fresh water. What does the scale read? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`0.20 N`, r`2.0 N`, r`2.4 N`, r`4.2 N`],
        correctAnswer: 0,
        explanation: r`The mass is 0.22 kg, so the volume is 0.22/1100 = 2.0 × 10⁻⁴ m³ and the buoyant force is 1000 × 2.0 × 10⁻⁴ × 10 = 2.0 N. The scale reads 2.2 − 2.0 = 0.20 N. 2.0 N is the buoyant force rather than the reading, 4.2 N adds the buoyant force to the weight, and 2.4 N multiplies the weight by 1.1.`,
      },
    ],
  },
  [r`What fraction of a floating object sits below the surface?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pine block of density 400 kg/m³ floats at rest in a tank of oil of density 800 kg/m³. What percentage of the block's volume is below the oil surface?`,
        options: [r`40%`, r`50%`, r`80%`, r`32%`],
        correctAnswer: 1,
        explanation: r`The submerged fraction is ρ_obj/ρ_fluid = 400/800 = 0.50, so 50% is below the surface. 40% divides by water's density instead of the oil's, 80% reads the oil's density as a percentage, and 32% multiplies the two densities.`,
      },
      {
        question: r`A plastic float rests in a liquid of density 1200 kg/m³ with 75% of its volume below the surface. What is the density of the plastic?`,
        options: [r`1600 kg/m³`, r`300 kg/m³`, r`1200 kg/m³`, r`900 kg/m³`],
        correctAnswer: 3,
        explanation: r`Submerged fraction = ρ_obj/ρ_fluid, so ρ_obj = 0.75 × 1200 = 900 kg/m³. 1600 kg/m³ divides by 0.75 instead of multiplying (and a denser object would sink), 300 kg/m³ uses the 25% above the surface, and 1200 kg/m³ would leave the float fully submerged.`,
      },
      {
        question: r`A cork with a volume of 80 cm³ and a density of 250 kg/m³ floats at rest in fresh water (1000 kg/m³). What volume of the cork is ABOVE the water surface?`,
        options: [r`60 cm³`, r`20 cm³`, r`80 cm³`, r`320 cm³`],
        correctAnswer: 0,
        explanation: r`The submerged fraction is 250/1000 = 0.25, so 0.25 × 80 = 20 cm³ is below the surface and 80 − 20 = 60 cm³ is above. 20 cm³ is the volume below, 80 cm³ is the whole cork, and 320 cm³ divides by 0.25 instead of multiplying.`,
      },
      {
        question: r`The same block floats with 30% of its volume submerged in liquid X and with 60% of its volume submerged in liquid Y. The density of liquid X is what multiple of the density of liquid Y?`,
        options: [r`0.50`, r`0.30`, r`2.0`, r`0.18`],
        correctAnswer: 2,
        explanation: r`Submerged fraction = ρ_block/ρ_liquid, so the liquid's density is inversely proportional to the fraction: ρ_X/ρ_Y = 0.60/0.30 = 2.0. The block rides higher in the denser liquid. 0.50 inverts the ratio, 0.30 is just one of the fractions, and 0.18 multiplies them.`,
      },
      {
        question: r`A polyethylene bead of density 0.96 g/cm³ floats at rest in a sugar solution of density 1200 kg/m³. What percentage of the bead's volume is below the surface?`,
        options: [r`80%`, r`20%`, r`96%`, r`0.08%`],
        correctAnswer: 0,
        explanation: r`Convert first: 0.96 g/cm³ = 960 kg/m³. The submerged fraction is 960/1200 = 0.80, or 80%. 20% is the part above the surface, 96% compares the bead with water instead of the solution, and 0.08% divides 0.96 by 1200 without converting the units.`,
      },
      {
        question: r`A solid iron nut of density 7.8 g/cm³ floats at rest in a dense liquid with 60% of its volume below the surface. What is the density of the liquid?`,
        options: [r`4.7 g/cm³`, r`19.5 g/cm³`, r`7.8 g/cm³`, r`13 g/cm³`],
        correctAnswer: 3,
        explanation: r`Submerged fraction = ρ_obj/ρ_fluid, so ρ_fluid = 7.8/0.60 = 13 g/cm³. 4.7 g/cm³ multiplies by 0.60 (a liquid less dense than iron could not float it), 19.5 g/cm³ divides by the 40% above the surface, and 7.8 g/cm³ would leave the nut fully submerged.`,
      },
    ],
  },
  [r`A hydraulic lift multiplies force tenfold, so the input piston must move {{c1::ten times farther}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal hydraulic lift has an input piston of area 5 cm² and an output piston of area 100 cm². The input piston is pushed down 40 cm. How far does the output piston rise?`,
        options: [r`800 cm`, r`8 cm`, r`2 cm`, r`40 cm`],
        correctAnswer: 2,
        explanation: r`The liquid is incompressible, so A₁d₁ = A₂d₂ and d₂ = 5 × 40/100 = 2 cm. 800 cm inverts the area ratio (the large piston moves less, not more), 40 cm assumes both pistons move equally, and 8 cm divides 40 by the input area alone.`,
      },
      {
        question: r`In an ideal hydraulic lift, an operator pushes the input piston with 100 N through a distance of 0.60 m. The output piston carries a load of 1500 N. How far does the load rise?`,
        options: [r`0.040 m`, r`9.0 m`, r`0.60 m`, r`0.067 m`],
        correctAnswer: 0,
        explanation: r`Work in equals work out: 100 × 0.60 = 60 J = 1500 × d, so d = 0.040 m. The force is multiplied by 15, so the distance is divided by 15. 9.0 m multiplies the distance by 15 instead, 0.60 m assumes equal movement, and 0.067 m is just the force ratio 100/1500 without the 0.60 m.`,
      },
      {
        question: r`In an ideal hydraulic press, pushing the input piston 0.50 m with a force of 40 N raises the output piston by 5.0 mm. What load is the output piston lifting?`,
        options: [r`400 N`, r`0.40 N`, r`40 N`, r`4000 N`],
        correctAnswer: 3,
        explanation: r`0.50 m is 500 mm, so the input piston moves 100 times as far as the output piston, and the force is multiplied by 100: 40 × 100 = 4000 N. 400 N loses a factor of ten in the unit conversion, 0.40 N divides by 100 instead of multiplying, and 40 N assumes no force multiplication.`,
      },
      {
        question: r`The output piston of an ideal hydraulic jack has 4 times the DIAMETER of its input piston. How far must the input piston be pushed to raise the load by 1.0 cm?`,
        options: [r`4.0 cm`, r`16 cm`, r`0.25 cm`, r`8.0 cm`],
        correctAnswer: 1,
        explanation: r`Area scales with diameter squared, so the output piston has 16 times the area. Equal displaced volumes, A₁d₁ = A₂d₂, give d₁ = 16 × 1.0 = 16 cm. 4.0 cm forgets to square the diameter ratio, 0.25 cm inverts it, and 8.0 cm doubles the ratio instead of squaring it.`,
      },
      {
        question: r`A hand-pumped ideal hydraulic jack has an output piston with 50 times the area of its input piston. Each stroke pushes the input piston down 10 cm, and the pump refills between strokes. How many strokes raise a car by 20 cm?`,
        options: [r`2 strokes`, r`50 strokes`, r`100 strokes`, r`1000 strokes`],
        correctAnswer: 2,
        explanation: r`Equal volumes mean each 10 cm stroke raises the output piston 10/50 = 0.20 cm, so 20 cm takes 20/0.20 = 100 strokes. 2 strokes assumes the two pistons move equal distances, 50 strokes is just the area ratio, and 1000 strokes multiplies 20 by 50 without dividing by the stroke length.`,
      },
      {
        question: r`An ideal hydraulic lift raises a 12 000 N load by 0.050 m while the operator pushes the input piston through a total distance of 2.0 m. What force does the operator apply?`,
        options: [r`600 N`, r`300 N`, r`6000 N`, r`480 000 N`],
        correctAnswer: 1,
        explanation: r`Work out = 12 000 × 0.050 = 600 J, and work in is the same, so F = 600/2.0 = 300 N. 600 N is the work in joules mistaken for a force, 6000 N divides the load by 2.0 without using the 0.050 m, and 480 000 N multiplies the load by the distance ratio instead of dividing.`,
      },
    ],
  },
  [r`State Pascal's principle and its hydraulic consequence.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A dental chair is raised by a hydraulic system with an input piston of area 2 cm² and an output piston of area 60 cm² at the same height. The chair and patient together weigh 900 N. What input force holds them up?`,
        options: [r`27 000 N`, r`30 N`, r`450 N`, r`15 N`],
        correctAnswer: 1,
        explanation: r`The pressure is the same at both pistons, F₁/A₁ = F₂/A₂, so F₁ = 900 × 2/60 = 30 N. 27 000 N inverts the area ratio, 450 N divides the load by the input area alone, and 15 N divides it by the output area alone.`,
      },
      {
        question: r`A force of 500 N is applied to a piston of area 25 cm² that seals a cylinder of oil. By how much does the pressure rise at every point in the oil? (1 cm² = 10⁻⁴ m²)`,
        options: [r`2.0 × 10¹ Pa`, r`2.0 × 10³ Pa`, r`1.25 × 10⁰ Pa`, r`2.0 × 10⁵ Pa`],
        correctAnswer: 3,
        explanation: r`P = F/A = 500/(25 × 10⁻⁴ m²) = 2.0 × 10⁵ Pa, and an enclosed fluid passes this on undiminished. 2.0 × 10¹ Pa divides by 25 without converting cm² to m², 2.0 × 10³ Pa converts with a factor of 100 instead of 10⁴, and 1.25 × 10⁰ Pa multiplies force by area.`,
      },
      {
        question: r`In a car's brake line, the driver's foot applies 60 N to a piston of area 3 cm². The enclosed brake fluid must push a second piston at the same height with 400 N. What area must the second piston have?`,
        options: [r`20 cm²`, r`0.45 cm²`, r`6.7 cm²`, r`60 cm²`],
        correctAnswer: 0,
        explanation: r`The pressure everywhere in the fluid is 60/3 = 20 N/cm², so the second piston needs A = 400/20 = 20 cm². 0.45 cm² inverts the force ratio (3 × 60/400), 6.7 cm² is the force ratio 400/60 without the input area, and 60 cm² confuses the input force with an area.`,
      },
      {
        question: r`A glass bottle is completely filled with water and sealed with a stopper of area 2 cm². A student pushes on the stopper with 10 N. What added force does the water exert on the bottle's flat base, which has an area of 50 cm²?`,
        options: [r`10 N`, r`0.40 N`, r`250 N`, r`500 N`],
        correctAnswer: 2,
        explanation: r`The push adds a pressure of 10/2 = 5 N/cm² that is transmitted undiminished to every part of the enclosed water, so the base feels 5 × 50 = 250 N more. 10 N assumes the force, not the pressure, is transmitted; 0.40 N inverts the area ratio; 500 N forgets to divide by the stopper's area.`,
      },
      {
        question: r`Two pistons at the same height seal a tank of oil. A 2.0 kg mass rests on the small piston, of area 10 cm², and balances a mass M resting on the large piston, of area 150 cm². The pistons' own masses are negligible. What is M?`,
        options: [r`0.13 kg`, r`2.0 kg`, r`300 kg`, r`30 kg`],
        correctAnswer: 3,
        explanation: r`Equal pressures mean the weights are in the ratio of the areas, and so are the masses: M = 2.0 × 150/10 = 30 kg. 0.13 kg inverts the area ratio, 2.0 kg assumes equal forces balance, and 300 kg is too large by a factor of ten.`,
      },
      {
        question: r`The liquid in a hydraulic line is pressurized to 4.0 × 10⁶ Pa by a pump. The line feeds an output piston of area 0.0050 m². What force does the liquid exert on the output piston?`,
        options: [r`2.0 × 10⁴ N`, r`8.0 × 10⁸ N`, r`2.0 × 10³ N`, r`2.0 × 10⁵ N`],
        correctAnswer: 0,
        explanation: r`The pump's pressure reaches the piston undiminished, so F = PA = 4.0 × 10⁶ × 5.0 × 10⁻³ = 2.0 × 10⁴ N. 8.0 × 10⁸ N divides pressure by area instead of multiplying, and the 10³ and 10⁵ answers each misplace one power of ten in 0.0050.`,
      },
    ],
  },
  [r`How does absolute pressure at depth differ from gauge pressure?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sensor resting on a lake bed records an absolute pressure of 3.0 × 10⁵ Pa. The air above the lake is at 1.0 × 10⁵ Pa. What is the gauge pressure at the sensor?`,
        options: [r`3.0 × 10⁵ Pa`, r`4.0 × 10⁵ Pa`, r`2.0 × 10⁵ Pa`, r`1.0 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`Gauge pressure is the excess over atmospheric, the ρgh part alone: 3.0 × 10⁵ − 1.0 × 10⁵ = 2.0 × 10⁵ Pa. 3.0 × 10⁵ Pa is the absolute pressure unchanged, 4.0 × 10⁵ Pa adds the atmosphere a second time, and 1.0 × 10⁵ Pa is only the atmosphere.`,
      },
      {
        question: r`A bicycle tire has gone completely flat, and a tire gauge pressed onto its valve reads 0 kPa. Atmospheric pressure is 101 kPa. What is the absolute pressure of the air inside the tire?`,
        options: [r`101 kPa`, r`0 kPa`, r`−101 kPa`, r`202 kPa`],
        correctAnswer: 0,
        explanation: r`Absolute = gauge + atmospheric = 0 + 101 = 101 kPa: a flat tire still holds air at the pressure of its surroundings. 0 kPa would be a perfect vacuum, −101 kPa subtracts the atmosphere from zero, and 202 kPa counts the atmosphere twice.`,
      },
      {
        question: r`A rigid sealed canister holds gas at a fixed absolute pressure of 150 kPa. At sea level, where the air is at 100 kPa, its gauge reads 50 kPa. The canister is carried at the same temperature up a mountain where the air is at 70 kPa. What does the gauge read there?`,
        options: [r`50 kPa`, r`80 kPa`, r`220 kPa`, r`30 kPa`],
        correctAnswer: 1,
        explanation: r`The gas is unchanged, so its absolute pressure stays 150 kPa, and gauge = absolute − atmospheric = 150 − 70 = 80 kPa. 50 kPa assumes the gauge reading cannot change, 220 kPa adds the local air pressure, and 30 kPa is only the drop in air pressure.`,
      },
      {
        question: r`The absolute pressure on a diver in a freshwater lake is 2.5 × 10⁵ Pa. Atmospheric pressure is 1.0 × 10⁵ Pa. How deep is the diver? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`25 m`, r`35 m`, r`10 m`, r`15 m`],
        correctAnswer: 3,
        explanation: r`Only the gauge part comes from the water: ρgh = 2.5 × 10⁵ − 1.0 × 10⁵ = 1.5 × 10⁵ Pa, so h = 1.5 × 10⁵/(1000 × 10) = 15 m. 25 m sets ρgh equal to the absolute pressure, 35 m adds the atmosphere instead of subtracting, and 10 m is the depth for one atmosphere of water.`,
      },
      {
        question: r`A gas cylinder's gauge reading is raised from 100 kPa to 200 kPa in a room where atmospheric pressure is 100 kPa. By what factor does the ABSOLUTE pressure of the gas increase?`,
        options: [r`1.5`, r`2.0`, r`3.0`, r`0.67`],
        correctAnswer: 0,
        explanation: r`Absolute = gauge + atmospheric, so the gas goes from 100 + 100 = 200 kPa to 200 + 100 = 300 kPa, a factor of 300/200 = 1.5. 2.0 is the ratio of the gauge readings, 3.0 compares the final absolute pressure with the first gauge reading, and 0.67 inverts the ratio.`,
      },
      {
        question: r`A monitor reports a patient's intracranial pressure as 2.0 kPa, a gauge pressure, in a hospital where atmospheric pressure is 101 kPa. What is the absolute pressure inside the skull?`,
        options: [r`9.9 × 10⁴ Pa`, r`2.0 × 10³ Pa`, r`1.03 × 10³ Pa`, r`1.03 × 10⁵ Pa`],
        correctAnswer: 3,
        explanation: r`Absolute = atmospheric + gauge = 101 + 2.0 = 103 kPa = 1.03 × 10⁵ Pa. 9.9 × 10⁴ Pa subtracts the gauge reading, 2.0 × 10³ Pa is the gauge pressure alone, and 1.03 × 10³ Pa drops two powers of ten when converting kPa to Pa.`,
      },
    ],
  },
  [r`Blood has a specific gravity near 1.06, so its density is {{c1::about $1060$ kg/m$^3$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A urine sample has a specific gravity of 1.020. How much more mass does 1.0 L of this urine have than 1.0 L of water? (Water: 1000 kg/m³, which is 1000 g per litre)`,
        options: [r`2.0 g`, r`20 g`, r`200 g`, r`1020 g`],
        correctAnswer: 1,
        explanation: r`The urine's density is 1.020 × 1000 = 1020 kg/m³, or 1020 g per litre, which is 20 g more than a litre of water. 1020 g is the urine's whole mass rather than the difference, and 2.0 g and 200 g each misplace a power of ten.`,
      },
      {
        question: r`A unit of whole blood with a specific gravity of 1.06 has a mass of 530 g. What is its volume? (Water: 1.00 g/mL)`,
        options: [r`562 mL`, r`530 mL`, r`500 mL`, r`50 mL`],
        correctAnswer: 2,
        explanation: r`The blood's density is 1.06 × 1.00 = 1.06 g/mL, so V = m/ρ = 530/1.06 = 500 mL. 562 mL multiplies by 1.06 instead of dividing, 530 mL treats blood as water, and 50 mL loses a factor of ten in the division.`,
      },
      {
        question: r`An open tank holds a solvent with a specific gravity of 0.80. What is the gauge pressure 2.0 m below the solvent's surface? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`16 000 Pa`, r`20 000 Pa`, r`25 000 Pa`, r`16 Pa`],
        correctAnswer: 0,
        explanation: r`The density is 0.80 × 1000 = 800 kg/m³, so P = ρgh = 800 × 10 × 2.0 = 16 000 Pa. 20 000 Pa uses water's density, 25 000 Pa divides by 0.80 instead of multiplying, and 16 Pa puts the dimensionless 0.80 into ρgh as if it were a density in kg/m³.`,
      },
      {
        question: r`Mercury has a specific gravity of 13.6. What volume of mercury has the same mass as 6.8 L of water?`,
        options: [r`92 L`, r`2.0 L`, r`6.8 L`, r`0.50 L`],
        correctAnswer: 3,
        explanation: r`Mercury is 13.6 times as dense as water, so the same mass takes 1/13.6 of the volume: 6.8/13.6 = 0.50 L. 92 L multiplies by 13.6 instead of dividing, 2.0 L inverts the division, and 6.8 L assumes equal masses mean equal volumes.`,
      },
      {
        question: r`A red blood cell has a volume of 9.0 × 10⁻¹⁷ m³ and a specific gravity of 1.1. What is its mass? (Water: 1000 kg/m³)`,
        options: [r`9.9 × 10⁻¹⁷ kg`, r`8.2 × 10⁻²⁰ kg`, r`9.9 × 10⁻¹⁴ kg`, r`9.9 × 10⁻¹¹ kg`],
        correctAnswer: 2,
        explanation: r`The density is 1.1 × 1000 = 1100 kg/m³, so m = ρV = 1100 × 9.0 × 10⁻¹⁷ = 9.9 × 10⁻¹⁴ kg. 9.9 × 10⁻¹⁷ kg uses 1.1 as if it were the density in kg/m³, 8.2 × 10⁻²⁰ kg divides the volume by the density, and 9.9 × 10⁻¹¹ kg is too large by a factor of 1000.`,
      },
      {
        question: r`A flask filled to its mark holds 400 g of water. Emptied, dried and filled to the same mark with an unknown liquid, it holds 320 g of the liquid. What is the liquid's specific gravity?`,
        options: [r`1.25`, r`0.80`, r`0.20`, r`80`],
        correctAnswer: 1,
        explanation: r`The volumes are equal, so the ratio of densities equals the ratio of masses: 320/400 = 0.80. 1.25 inverts the ratio, 0.20 is the fractional difference between the two masses, and 80 is their difference in grams, which is not a ratio at all.`,
      },
    ],
  },
  [r`Pressure in a static fluid depends on depth and density but not on {{c1::the shape or volume of the container}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two dams each hold back fresh water that is 30 m deep at the dam wall. The reservoir behind dam 1 stretches back 50 km; the reservoir behind dam 2 stretches back only 500 m. How do the water pressures at the bases of the two dam walls compare?`,
        options: [
          r`Greater at dam 1, because it holds back more water`,
          r`Greater at dam 2, because its water is squeezed in`,
          r`Greater at dam 1, because its lake is much longer`,
          r`The same at both, because the depths are the same`,
        ],
        correctAnswer: 3,
        explanation: r`Pressure in a static fluid is set by ρgh, and both walls stand under the same 30 m of the same water, so the pressures match. The amount of water behind the wall and the length of the lake do not enter, and a short reservoir does not "squeeze" its water to a higher pressure.`,
      },
      {
        question: r`A sealed-bottom glass tube holding water is tilted so that the water column is 50 cm long measured along the tube, while the water's surface is 30 cm vertically above the bottom of the tube. What is the gauge pressure at the bottom? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`5000 Pa`, r`3000 Pa`, r`2000 Pa`, r`8000 Pa`],
        correctAnswer: 1,
        explanation: r`Only the vertical depth below the free surface counts: P = ρgh = 1000 × 10 × 0.30 = 3000 Pa. 5000 Pa uses the 50 cm length along the tilted tube, 2000 Pa uses the difference between the two lengths, and 8000 Pa uses their sum.`,
      },
    ],
  },
  [r`Why is arterial pressure higher in the feet than at the heart when standing?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A standing man's mean arterial pressure is 100 mmHg at heart level. His feet are 1.25 m below his heart. About what is the mean arterial pressure at his feet? (Blood: 1060 kg/m³, g = 10 m/s², 1 mmHg ≈ 133 Pa)`,
        options: [r`About 200 mmHg`, r`About 100 mmHg`, r`About 113 mmHg`, r`About 0 mmHg`],
        correctAnswer: 0,
        explanation: r`The column of blood adds ρgh = 1060 × 10 × 1.25 = 13 250 Pa, which is about 100 mmHg, so the feet are at about 100 + 100 = 200 mmHg. "About 100 mmHg" ignores the column, "about 113 mmHg" adds 13 kPa to a reading in mmHg without converting, and "about 0 mmHg" subtracts the column instead of adding it.`,
      },
      {
        question: r`In a patient standing still, the arterial pressure at the ankle is 80 mmHg (about 10 600 Pa) higher than at heart level. How far below the heart is the ankle? (Blood: 1060 kg/m³, g = 10 m/s²)`,
        options: [r`10 m`, r`0.075 m`, r`1.0 m`, r`0.10 m`],
        correctAnswer: 2,
        explanation: r`The extra pressure is ρgh, so h = 10 600/(1060 × 10) = 1.0 m. 10 m leaves g out of the division, 0.10 m divides by g twice, and 0.075 m divides the 80 mmHg by the density without converting to pascals.`,
      },
      {
        question: r`A patient lies on her back with one foot raised 0.50 m above the level of her heart. Compared with the arterial pressure at heart level, the arterial pressure in the raised foot is: (Blood: 1060 kg/m³, g = 10 m/s²)`,
        options: [r`5300 Pa higher`, r`530 Pa higher`, r`530 Pa lower`, r`5300 Pa lower`],
        correctAnswer: 3,
        explanation: r`Going UP through a column of blood, the pressure falls by ρgh = 1060 × 10 × 0.50 = 5300 Pa. "5300 Pa higher" applies the rule for a point below the heart, and the two 530 Pa answers leave out the factor g = 10.`,
      },
      {
        question: r`On Earth, the column of blood between a standing astronaut's heart and feet adds 90 mmHg to the arterial pressure at the feet. Standing the same way on the Moon, where g is one sixth as large, about how much does that column add?`,
        options: [r`540 mmHg`, r`15 mmHg`, r`90 mmHg`, r`84 mmHg`],
        correctAnswer: 1,
        explanation: r`The added pressure is ρgh, which is proportional to g, so it becomes 90/6 = 15 mmHg. 540 mmHg multiplies by 6 instead of dividing, 90 mmHg assumes gravity does not matter, and 84 mmHg subtracts 6 instead of dividing by it.`,
      },
      {
        question: r`In a standing adult whose feet are 1.3 m below the heart, the column of blood adds about 100 mmHg to the arterial pressure at the feet. About how much does it add in a standing child whose feet are 0.65 m below the heart?`,
        options: [r`About 200 mmHg`, r`About 100 mmHg`, r`About 50 mmHg`, r`About 25 mmHg`],
        correctAnswer: 2,
        explanation: r`ρgh is proportional to the height of the column, and 0.65 m is half of 1.3 m, so the column adds about 50 mmHg. "About 200 mmHg" inverts the ratio, "about 100 mmHg" ignores the height, and "about 25 mmHg" treats the pressure as depending on height squared.`,
      },
      {
        question: r`A blood pressure cuff is placed on a patient's wrist while the wrist hangs 0.25 m below heart level. Compared with the arterial pressure at heart level, the reading is: (Blood: 1060 kg/m³, g = 10 m/s², 1 mmHg ≈ 133 Pa)`,
        options: [r`About 20 mmHg too high`, r`About 20 mmHg too low`, r`About 2 mmHg too high`, r`About 2 mmHg too low`],
        correctAnswer: 0,
        explanation: r`A point below the heart has an extra ρgh = 1060 × 10 × 0.25 = 2650 Pa, and 2650/133 ≈ 20 mmHg, so the cuff reads about 20 mmHg too high. The "too low" answers reverse the direction, and the 2 mmHg answers leave out the factor g = 10.`,
      },
    ],
  },
  [r`Surface tension arises from {{c1::cohesive forces between liquid molecules}} at an interface.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Compare a water molecule deep inside a glass of water with a water molecule at the water's surface, which has air above it. What is the net cohesive force on each from neighboring water molecules?`,
        options: [
          r`Zero at the surface; directed inward for the deep one`,
          r`Directed outward at the surface; zero for the deep one`,
          r`Zero for the deep one; directed inward at the surface`,
          r`Directed inward for both the deep and the surface one`,
        ],
        correctAnswer: 2,
        explanation: r`A molecule deep in the liquid is pulled equally in every direction, so the attractions cancel. A surface molecule has neighbors beside and below it but almost none above, leaving a net inward pull, which is the origin of surface tension. An outward net force would make the liquid spread, not contract, and the deep molecule has no net force at all.`,
      },
      {
        question: r`A premature infant's lungs make too little pulmonary surfactant. Compared with a healthy lung, what is true of the fluid lining this infant's alveoli and of the effort needed to inflate them?`,
        options: [
          r`Its surface tension is higher, so the alveoli are harder to inflate`,
          r`Its surface tension is lower, so the alveoli are harder to inflate`,
          r`Its surface tension is higher, so the alveoli are easier to inflate`,
          r`Its surface tension is lower, so the alveoli are easier to inflate`,
        ],
        correctAnswer: 0,
        explanation: r`Surfactant sits between the water molecules at the surface and weakens their cohesive pull on one another, lowering surface tension. Without it, the tension is higher, the alveoli tend to collapse, and more pressure is needed to open them. The "lower" answers reverse what surfactant does, and "easier to inflate" reverses the effect of a higher tension.`,
      },
    ],
  },
  [r`Laplace's law for an alveolus gives $P = 2\gamma/r$. What does it predict?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The fluid lining an alveolus of radius 1.0 × 10⁻⁴ m has a surface tension of 0.050 N/m. Using P = 2γ/r, what pressure is needed to keep the alveolus open?`,
        options: [r`500 Pa`, r`250 Pa`, r`2000 Pa`, r`1000 Pa`],
        correctAnswer: 3,
        explanation: r`P = 2γ/r = 2 × 0.050/(1.0 × 10⁻⁴) = 1000 Pa. 500 Pa leaves out the factor 2, 250 Pa leaves out the 2 and also uses the diameter in place of the radius, and 2000 Pa doubles twice.`,
      },
      {
        question: r`An alveolus of radius 50 μm is held open by a pressure of 600 Pa. Using P = 2γ/r, what is the surface tension of the fluid lining it? (1 μm = 10⁻⁶ m)`,
        options: [r`0.030 N/m`, r`0.015 N/m`, r`0.060 N/m`, r`15 N/m`],
        correctAnswer: 1,
        explanation: r`Rearranging, γ = Pr/2 = 600 × 5.0 × 10⁻⁵/2 = 0.015 N/m. 0.030 N/m forgets to divide by 2, 0.060 N/m multiplies by 2 instead, and 15 N/m converts 50 μm as if it were 50 mm.`,
      },
      {
        question: r`A spherical air sac is lined with fluid of surface tension 0.030 N/m, and a pressure of 400 Pa just keeps it open. Using P = 2γ/r, what is its radius? (1 μm = 10⁻⁶ m)`,
        options: [r`150 μm`, r`75 μm`, r`300 μm`, r`15 μm`],
        correctAnswer: 0,
        explanation: r`Rearranging, r = 2γ/P = 2 × 0.030/400 = 1.5 × 10⁻⁴ m = 150 μm. 75 μm leaves out the factor 2, 300 μm doubles twice, and 15 μm drops a power of ten when converting metres to micrometres.`,
      },
      {
        question: r`As an alveolus deflates, its radius falls to half its starting value, and its surfactant becomes more concentrated and lowers the surface tension to one quarter of its starting value. By P = 2γ/r, the pressure needed to keep it open becomes:`,
        options: [r`twice as large`, r`one eighth as large`, r`half as large`, r`one quarter as large`],
        correctAnswer: 2,
        explanation: r`P is proportional to γ/r, so the new pressure is (1/4)/(1/2) = 1/2 of the old one. "Twice as large" considers only the smaller radius, "one quarter as large" considers only the lower surface tension, and "one eighth as large" multiplies the two factors instead of dividing.`,
      },
      {
        question: r`With surfactant present, a small alveolus has a radius of 50 μm and a surface tension of 0.010 N/m, while a large alveolus has a radius of 100 μm and a surface tension of 0.030 N/m. Using P = 2γ/r, what are the two collapsing pressures? (1 μm = 10⁻⁶ m)`,
        options: [
          r`600 Pa in the small one and 400 Pa in the large one`,
          r`200 Pa in the small one and 300 Pa in the large one`,
          r`800 Pa in the small one and 1200 Pa in the large one`,
          r`400 Pa in the small one and 600 Pa in the large one`,
        ],
        correctAnswer: 3,
        explanation: r`Small: 2 × 0.010/(5.0 × 10⁻⁵) = 400 Pa. Large: 2 × 0.030/(1.0 × 10⁻⁴) = 600 Pa. Because surfactant lowers the tension more in the small alveolus, the small one no longer has the higher pressure. The 600 and 400 answer swaps the two, the 200 and 300 answer leaves out the factor 2, and the 800 and 1200 answer doubles twice.`,
      },
      {
        question: r`An air bubble of radius 1.0 μm sits in water, whose surface tension is 0.070 N/m. Using ΔP = 2γ/r, how much higher is the pressure inside the bubble than in the water around it? (1 μm = 10⁻⁶ m)`,
        options: [r`7.0 × 10⁴ Pa`, r`1.4 × 10⁵ Pa`, r`1.4 × 10² Pa`, r`1.4 × 10⁻⁷ Pa`],
        correctAnswer: 1,
        explanation: r`ΔP = 2 × 0.070/(1.0 × 10⁻⁶) = 1.4 × 10⁵ Pa, more than a whole atmosphere, because the radius is so small. 7.0 × 10⁴ Pa leaves out the factor 2, 1.4 × 10² Pa treats 1.0 μm as 1.0 mm, and 1.4 × 10⁻⁷ Pa multiplies by the radius instead of dividing.`,
      },
    ],
  },
  [r`The buoyant force equals the weight of {{c1::the fluid displaced}}, not the weight of the object.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A steel bolt of volume 50 cm³ and density 7800 kg/m³ lies fully submerged at the bottom of a tank of brine of density 1200 kg/m³. What is the buoyant force on the bolt? (g = 10 m/s², 1 cm³ = 10⁻⁶ m³)`,
        options: [r`0.50 N`, r`3.9 N`, r`0.60 N`, r`6.0 N`],
        correctAnswer: 2,
        explanation: r`The bolt displaces 50 cm³ = 5.0 × 10⁻⁵ m³ of brine, so F_B = ρ_fluid V g = 1200 × 5.0 × 10⁻⁵ × 10 = 0.60 N. 3.9 N uses the steel's density and is the bolt's weight, 0.50 N uses fresh water instead of the brine, and 6.0 N slips a power of ten in the volume.`,
      },
      {
        question: r`A swimmer of weight 600 N has a total body volume of 0.062 m³. At one moment in a dive into fresh water, only 0.040 m³ of the body is under the surface. What is the buoyant force at that moment? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`400 N`, r`600 N`, r`620 N`, r`200 N`],
        correctAnswer: 0,
        explanation: r`Only the submerged volume displaces water: F_B = 1000 × 0.040 × 10 = 400 N. 600 N sets the buoyant force equal to the swimmer's weight, which is true only when floating at rest; 620 N uses the whole body volume; 200 N is the weight minus the buoyant force.`,
      },
      {
        question: r`A probe of volume 0.0020 m³ is fully submerged in a lake of liquid methane (density 450 kg/m³) on Titan, where g = 1.4 m/s². What is the buoyant force on the probe?`,
        options: [r`9.0 N`, r`2.8 N`, r`20 N`, r`1.26 N`],
        correctAnswer: 3,
        explanation: r`F_B = ρ_fluid V g = 450 × 0.0020 × 1.4 = 0.90 × 1.4 = 1.26 N. 9.0 N uses Earth's g = 10 m/s², 2.8 N uses water's density with Titan's g, and 20 N uses both water's density and Earth's g.`,
      },
      {
        question: r`Ball X has volume 2V and density 3000 kg/m³. Ball Y has volume 3V and density 8000 kg/m³. Both rest fully submerged on the floor of the same water tank. What is the ratio of the buoyant force on X to the buoyant force on Y?`,
        options: [r`3/2`, r`2/3`, r`1/4`, r`3/8`],
        correctAnswer: 1,
        explanation: r`Both displace the same fluid, so the buoyant forces are in the ratio of the displaced volumes: 2V/3V = 2/3. 1/4 is the ratio of the balls' weights, 3/8 is the ratio of their densities, and 3/2 inverts the volume ratio.`,
      },
      {
        question: r`A beaker is filled to the brim with water. A 400 g stone is lowered in on a thread until it is fully submerged, and 150 g of water spills over the brim. What is the buoyant force on the stone? (g = 10 m/s²)`,
        options: [r`1.5 N`, r`4.0 N`, r`2.5 N`, r`1500 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force equals the weight of the water displaced, which is the water that spilled: 0.150 kg × 10 = 1.5 N. 4.0 N is the stone's own weight, 2.5 N is the stone's weight minus the buoyant force, and 1500 N multiplies 150 by g without converting grams to kilograms.`,
      },
      {
        question: r`A diver carries a flexible bag of air. Near the surface the bag's volume is 6.0 L and the buoyant force on it is 60 N. At depth, the water pressure squeezes the bag to 2.0 L. What is the buoyant force on the bag now? (Water: 1000 kg/m³, g = 10 m/s², 1 L = 0.001 m³)`,
        options: [r`60 N`, r`180 N`, r`20 N`, r`40 N`],
        correctAnswer: 2,
        explanation: r`The bag now displaces 2.0 L = 0.0020 m³ of water, so F_B = 1000 × 0.0020 × 10 = 20 N. 60 N assumes the displaced volume has not changed, 180 N scales the force up with pressure instead of down with volume, and 40 N is the size of the drop rather than the new force.`,
      },
    ],
  },
  [r`Why does a person float higher in salt water than in fresh water?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A swimmer with a whole-body density of 990 kg/m³ floats motionless first in a freshwater lake (1000 kg/m³) and then in a salt lake (1100 kg/m³). What fraction of the body is submerged in each?`,
        options: [
          r`90% in the fresh water and 99% in the salt water`,
          r`99% in the fresh water and 90% in the salt water`,
          r`1% in the fresh water and 10% in the salt water`,
          r`99% in the fresh water and 99% in the salt water`,
        ],
        correctAnswer: 1,
        explanation: r`The submerged fraction is ρ_body/ρ_fluid: 990/1000 = 99% in fresh water and 990/1100 = 90% in the salt lake. The denser water supports the same weight with less displaced volume. Swapping the two has the swimmer riding lower in denser water, the 1% and 10% answer gives the parts above the surface, and equal fractions ignore the change in fluid density.`,
      },
      {
        question: r`A swimmer floating at rest in a freshwater pool wants to ride as high in the water as she does in the sea. Which change would raise her in the pool, and why? (Treat the air she breathes as weightless.)`,
        options: [
          r`Breathing out fully, which lowers her body's average density`,
          r`Breathing in deeply, which raises the buoyant force on her`,
          r`Breathing out fully, which raises the buoyant force on her`,
          r`Breathing in deeply, which lowers her body's average density`,
        ],
        correctAnswer: 3,
        explanation: r`The submerged fraction is ρ_body/ρ_fluid, so it falls either when the fluid gets denser (the sea) or when the body gets less dense. A deep breath adds volume with almost no mass, lowering her average density. Breathing out does the reverse, and the buoyant force on a floater always equals her weight, so it does not rise.`,
      },
    ],
  },
  [r`Does the buoyant force on a fully submerged object increase with depth?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A rigid cube 0.10 m tall is held level in fresh water and lowered until its top face goes from 1 m deep to 10 m deep. What happens to the water pressures on its top and bottom faces? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [
          r`Both pressures rise, and their difference stays 1000 Pa`,
          r`Both pressures rise, and their difference rises tenfold`,
          r`Only the bottom pressure rises, so the difference grows`,
          r`Neither pressure changes, so the difference stays 0 Pa`,
        ],
        correctAnswer: 0,
        explanation: r`Each face gains the same ρg × 9 m = 90 000 Pa, so the difference stays ρg × 0.10 m = 1000 Pa and the buoyant force, which comes from that difference, is unchanged. The difference depends on the cube's height, not its depth, so it does not rise tenfold; both faces are deeper, so both pressures rise.`,
      },
      {
        question: r`A rigid glass sphere and an air-filled rubber balloon are both pulled steadily deeper in a lake. Treat the water as incompressible. How does the buoyant force on each change as it goes deeper?`,
        options: [
          r`It stays constant on the sphere and on the balloon`,
          r`It stays constant on the sphere but grows on the balloon`,
          r`It grows on the sphere and also grows on the balloon`,
          r`It stays constant on the sphere but falls on the balloon`,
        ],
        correctAnswer: 3,
        explanation: r`Buoyant force is ρ_fluid V g. The rigid sphere keeps its volume, so its buoyant force is constant at every depth. The rising pressure squeezes the balloon, which displaces less water, so its buoyant force falls. Depth by itself never raises buoyancy, which rules out the "grows" answers.`,
      },
    ],
  },
  [r`An IV bag must hang high enough that {{c1::$\rho g h$}} exceeds {{c1::the patient's venous pressure}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The surface of the saline in an IV bag is 0.80 m above a patient's vein, where the venous pressure is 1300 Pa. By how much does the pressure from the saline column exceed the venous pressure? (Saline: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`8000 Pa`, r`6700 Pa`, r`9300 Pa`, r`670 Pa`],
        correctAnswer: 1,
        explanation: r`The column gives ρgh = 1000 × 10 × 0.80 = 8000 Pa, which exceeds the venous pressure by 8000 − 1300 = 6700 Pa. 8000 Pa forgets to subtract the venous pressure, 9300 Pa adds it, and 670 Pa drops a power of ten.`,
      },
      {
        question: r`An IV bag's fluid surface hangs 0.40 m above the vein. About what pressure, in mmHg, does this column of saline produce at the vein? (Saline: 1000 kg/m³, g = 10 m/s², 1 mmHg ≈ 133 Pa)`,
        options: [r`About 3 mmHg`, r`About 300 mmHg`, r`About 30 mmHg`, r`About 40 mmHg`],
        correctAnswer: 2,
        explanation: r`ρgh = 1000 × 10 × 0.40 = 4000 Pa, and 4000/133 ≈ 30 mmHg. "About 3 mmHg" leaves out g, "about 300 mmHg" slips a power of ten the other way, and "about 40 mmHg" divides by 100 instead of 133.`,
      },
      {
        question: r`Whole blood (density 1060 kg/m³) is to be transfused by gravity into a vein where the pressure is 1590 Pa. What is the smallest height above the vein at which the surface of the blood in the bag can hang and still push blood in? (g = 10 m/s²)`,
        options: [r`0.15 m`, r`1.5 m`, r`0.015 m`, r`0.67 m`],
        correctAnswer: 0,
        explanation: r`Flow needs ρgh to exceed the venous pressure, so h = 1590/(1060 × 10) = 0.15 m. 1.5 m leaves out g, 0.015 m divides by g twice, and 0.67 m is one tenth of the inverted ratio 10 600/1590.`,
      },
      {
        question: r`A nurse lowers an IV bag until its saline surface is only 0.050 m above a vein where the venous pressure is 1300 Pa. What happens? (Saline: 1000 kg/m³, g = 10 m/s²)`,
        options: [
          r`ρgh is 5000 Pa, above venous pressure, so saline flows in`,
          r`ρgh is 500 Pa, above venous pressure, so saline flows in`,
          r`ρgh is 5000 Pa, below venous pressure, so blood backs up`,
          r`ρgh is 500 Pa, below venous pressure, so blood backs up`,
        ],
        correctAnswer: 3,
        explanation: r`ρgh = 1000 × 10 × 0.050 = 500 Pa, which is less than the 1300 Pa in the vein, so the vein's pressure wins and blood is pushed back up the line. The 5000 Pa answers misplace a power of ten, and 500 Pa is not above 1300 Pa.`,
      },
      {
        question: r`A patient's venous pressure is 1000 Pa. An IV bag is raised so that its saline surface goes from 0.50 m to 1.5 m above the vein. By what factor does the driving pressure, ρgh minus the venous pressure, increase? (Saline: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`3.0`, r`2.0`, r`3.5`, r`1.5`],
        correctAnswer: 2,
        explanation: r`At 0.50 m, ρgh = 5000 Pa and the driving pressure is 5000 − 1000 = 4000 Pa. At 1.5 m, ρgh = 15 000 Pa and the driving pressure is 14 000 Pa, so the factor is 14 000/4000 = 3.5. 3.0 is the ratio of the heights and ignores the venous pressure, and 2.0 and 1.5 come from subtracting the heights rather than taking a ratio.`,
      },
      {
        question: r`A saline drip slows as its bag is lowered and stops flowing just as the saline surface reaches 0.18 m above the patient's vein. What is the patient's venous pressure? (Saline: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`180 Pa`, r`1800 Pa`, r`18 000 Pa`, r`1.8 Pa`],
        correctAnswer: 1,
        explanation: r`Flow stops when ρgh just equals the venous pressure: 1000 × 10 × 0.18 = 1800 Pa. 180 Pa leaves out g, 18 000 Pa slips a power of ten in the height, and 1.8 Pa leaves out the density.`,
      },
    ],
  },
  [r`One mmHg is about {{c1::133 Pa}}, and atmospheric pressure is about {{c1::760 mmHg}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Sensor X reads 266 Pa and sensor Y reads 4 mmHg. Which sensor shows the larger pressure, and by about what factor? (1 mmHg ≈ 133 Pa)`,
        options: [
          r`Sensor X, by a factor of about 2`,
          r`Sensor X, by a factor of about 66`,
          r`Sensor Y, by a factor of about 66`,
          r`Sensor Y, by a factor of about 2`,
        ],
        correctAnswer: 3,
        explanation: r`266 Pa is 266/133 = 2 mmHg, so sensor Y's 4 mmHg is twice as large (equally, 4 mmHg ≈ 532 Pa). The factor of 66 answers compare 266 with 4 without converting units, and choosing sensor X at a factor of 2 inverts the comparison.`,
      },
      {
        question: r`Near the summit of a very high mountain, a barometer shows an air pressure of 253 mmHg. About what is this pressure in atmospheres? (1 atm ≈ 760 mmHg)`,
        options: [r`About 0.33 atm`, r`About 3.0 atm`, r`About 0.25 atm`, r`About 2.5 atm`],
        correctAnswer: 0,
        explanation: r`253/760 ≈ 1/3, so the pressure is about 0.33 atm. "About 3.0 atm" inverts the ratio, and the 0.25 and 2.5 answers just move the decimal point of 253 instead of dividing by 760.`,
      },
      {
        question: r`A patient's systolic blood pressure is 150 mmHg. About what is this pressure in kilopascals? (1 mmHg ≈ 133 Pa)`,
        options: [r`About 2.0 kPa`, r`About 200 kPa`, r`About 20 kPa`, r`About 1.1 kPa`],
        correctAnswer: 2,
        explanation: r`150 × 133 ≈ 20 000 Pa = 20 kPa, about a fifth of an atmosphere. 2.0 kPa and 200 kPa each misplace a power of ten, and 1.1 kPa divides 150 by 133 instead of multiplying.`,
      },
      {
        question: r`A patient's diastolic blood pressure is 76 mmHg. About what fraction of one atmosphere is this? (1 atm ≈ 760 mmHg)`,
        options: [r`About 0.76 atm`, r`About 0.10 atm`, r`About 0.010 atm`, r`About 10 atm`],
        correctAnswer: 1,
        explanation: r`76/760 = 0.10, so the pressure is about one tenth of an atmosphere. 0.76 atm divides by 100 instead of 760, 0.010 atm slips a power of ten, and 10 atm inverts the ratio.`,
      },
      {
        question: r`A patient's blood pressure is 120 mmHg systolic and 80 mmHg diastolic. About what is the difference between the two, the pulse pressure, in pascals? (1 mmHg ≈ 133 Pa)`,
        options: [r`About 5300 Pa`, r`About 530 Pa`, r`About 16 000 Pa`, r`About 27 000 Pa`],
        correctAnswer: 0,
        explanation: r`The difference is 120 − 80 = 40 mmHg, and 40 × 133 ≈ 5300 Pa. 530 Pa drops a power of ten, 16 000 Pa converts the systolic pressure alone, and 27 000 Pa converts the sum of the two readings.`,
      },
      {
        question: r`A weather station reports an air pressure of exactly 100 kPa. About what would a mercury barometer read at that station? (1 mmHg ≈ 133 Pa)`,
        options: [r`About 75 mmHg`, r`About 1330 mmHg`, r`About 13 mmHg`, r`About 750 mmHg`],
        correctAnswer: 3,
        explanation: r`100 kPa = 100 000 Pa, and 100 000/133 ≈ 750 mmHg, just under the 760 mmHg of a standard atmosphere. 75 mmHg loses a power of ten, 1330 mmHg multiplies by 133 instead of dividing, and 13 mmHg both loses powers of ten and uses the wrong operation.`,
      },
    ],
  },
  [r`Why do stiletto heels damage a floor when flat shoes do not, if body weight is unchanged?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An 800 N hiker stands still on two snowshoes, each with an area of 0.20 m² in contact with the snow. What pressure does the hiker exert on the snow?`,
        options: [r`4000 Pa`, r`320 Pa`, r`2000 Pa`, r`160 Pa`],
        correctAnswer: 2,
        explanation: r`The weight is spread over both snowshoes, 0.40 m² in total, so P = F/A = 800/0.40 = 2000 Pa. 4000 Pa puts the whole weight on one snowshoe, and 320 Pa and 160 Pa multiply the force by an area instead of dividing.`,
      },
      {
        question: r`A sheet of lake ice can safely bear a pressure of 5000 Pa. A loaded sled rests on runners with a total contact area of 0.20 m². What is the largest total mass the sled can have? (g = 10 m/s²)`,
        options: [r`100 kg`, r`1000 kg`, r`2500 kg`, r`10 kg`],
        correctAnswer: 0,
        explanation: r`The largest force is F = PA = 5000 × 0.20 = 1000 N, which is the weight of 1000/10 = 100 kg. 1000 kg reads the force in newtons as a mass, 2500 kg divides pressure by area before dividing by g, and 10 kg divides by g twice.`,
      },
      {
        question: r`To prevent pressure sores, the pressure on the skin of a 720 N patient lying in bed should stay below 6000 Pa. What is the smallest contact area that keeps the average pressure at or below this limit?`,
        options: [r`8.3 m²`, r`0.12 m²`, r`0.012 m²`, r`1.2 m²`],
        correctAnswer: 1,
        explanation: r`A = F/P = 720/6000 = 0.12 m². 8.3 m² inverts the division, and 0.012 m² and 1.2 m² each misplace a power of ten. Spreading the same weight over a larger area is what keeps the pressure low.`,
      },
      {
        question: r`A thumb pushes a thumbtack with a force of 10 N. The tack's point has an area of 0.5 mm². What pressure does the point exert on the wall? (1 mm² = 10⁻⁶ m²)`,
        options: [r`2 × 10⁴ Pa`, r`2 × 10¹ Pa`, r`5 × 10⁻⁶ Pa`, r`2 × 10⁷ Pa`],
        correctAnswer: 3,
        explanation: r`The area is 0.5 mm² = 5 × 10⁻⁷ m², so P = F/A = 10/(5 × 10⁻⁷) = 2 × 10⁷ Pa. 2 × 10⁴ Pa converts mm² to m² with 10⁻³ instead of 10⁻⁶, 2 × 10¹ Pa does not convert at all, and 5 × 10⁻⁶ Pa multiplies force by area.`,
      },
      {
        question: r`The tip of a hypodermic needle has an area of 2.0 × 10⁻⁷ m². Skin is pierced when the pressure on it reaches 5.0 × 10⁶ Pa. What force on the needle is needed to pierce the skin?`,
        options: [r`0.10 N`, r`1.0 N`, r`10 N`, r`100 N`],
        correctAnswer: 1,
        explanation: r`F = PA = 5.0 × 10⁶ × 2.0 × 10⁻⁷ = 10 × 10⁻¹ = 1.0 N. A small force is enough because the area is tiny. The other answers each misplace one or two powers of ten when the exponents 6 and −7 are combined.`,
      },
      {
        question: r`A shoe has a circular heel tip. A cobbler replaces it with a circular tip of half the diameter. With the same weight resting on the heel, the pressure on the floor becomes:`,
        options: [r`2 times as large`, r`half as large`, r`4 times as large`, r`one quarter as large`],
        correctAnswer: 2,
        explanation: r`Area scales with diameter squared, so half the diameter means one quarter of the area, and P = F/A becomes 4 times as large. "2 times as large" forgets to square the diameter ratio, and the "half" and "one quarter" answers have pressure falling when the area shrinks.`,
      },
    ],
  },
  [r`Why does a person with a higher body fat fraction float more easily?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Equal-sized cubes of pure fat (0.90 g/cm³) and of pure muscle (1.10 g/cm³) are released in a tank of fresh water (1.00 g/cm³). What happens to each cube?`,
        options: [
          r`The fat sinks and the muscle floats`,
          r`The fat floats and the muscle sinks`,
          r`Both of the cubes float at the top`,
          r`Both of the cubes sink to the floor`,
        ],
        correctAnswer: 1,
        explanation: r`An object floats when it is less dense than the fluid. Fat at 0.90 g/cm³ is less dense than water and floats; muscle at 1.10 g/cm³ is denser and sinks. This is why a body with more fat has a lower average density and floats more easily. The other answers put one or both tissues on the wrong side of 1.00 g/cm³.`,
      },
      {
        question: r`Two tissue models are made by blending fat (0.90 g/cm³) and lean tissue (1.10 g/cm³). Model 1 is 25% fat and 75% lean by volume; model 2 is 75% fat and 25% lean by volume. What happens when each is released in fresh water (1.00 g/cm³)?`,
        options: [
          r`Model 1 sinks at 1.05 g/cm³; model 2 floats at 0.95 g/cm³`,
          r`Model 1 floats at 0.95 g/cm³; model 2 sinks at 1.05 g/cm³`,
          r`Both models sink, at 1.05 g/cm³ and at 1.10 g/cm³`,
          r`Both models float, at 0.90 g/cm³ and at 0.95 g/cm³`,
        ],
        correctAnswer: 0,
        explanation: r`Average density by volume: model 1 is 0.25 × 0.90 + 0.75 × 1.10 = 1.05 g/cm³, denser than water, so it sinks. Model 2 is 0.75 × 0.90 + 0.25 × 1.10 = 0.95 g/cm³, so it floats. More fat pulls the average below water's density. The swapped answer gives the high-fat model the higher density, and the "both" answers ignore the blending.`,
      },
    ],
  },
}
