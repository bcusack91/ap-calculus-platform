import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for apparent weight, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A dental technician hangs a porcelain crown from a force sensor and lowers it into a beaker of alcohol until it is fully submerged, at rest and touching nothing. The display shows 0.30. Which notebook line records the reading correctly?`,
        options: [r`$W_{\text{apparent}}$ = 0.30 kg`, r`$W_{\text{apparent}}$ = 0.30 Pa`, r`$W_{\text{apparent}}$ = 0.30 N`, r`$W_{\text{apparent}}$ = 0.30 N/m`],
        correctAnswer: 2,
        explanation: r`The sensor reads the apparent weight, which is a force, so it is recorded in newtons: $W_{\text{apparent}}$ = 0.30 N. The kilogram is a unit of mass, the pascal a unit of pressure, and the newton per meter a unit of surface tension or spring stiffness.`,
      },
      {
        question: r`A steel bolt has $W$ = 4.0 N. It hangs at rest from a spring scale, fully submerged in glycerin and touching nothing, where $F_b$ = 0.60 N. Which quantity in this setup is labeled $W_{\text{apparent}}$?`,
        options: [r`The 3.4 N pull shown on the scale`, r`The 0.60 N push of the glycerin`, r`The 4.0 N pull of gravity on it`, r`The 4.6 N sum of the two forces`],
        correctAnswer: 0,
        explanation: r`The apparent weight is what the scale reads while the object hangs in the fluid: 4.0 N - 0.60 N = 3.4 N. The 0.60 N push is the buoyant force, the 4.0 N pull of gravity is the true weight, and 4.6 N adds two forces that point in opposite directions.`,
      },
    ],
  },
  [r`Why do the weight of a fully submerged object and the buoyant force on it differ only by a density?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A glass marble of density 2500 kg/m³ lies fully submerged in a syrup of density 1250 kg/m³. The buoyant force on the marble is 0.10 N. What is the marble's weight?`,
        options: [r`0.050 N`, r`0.10 N`, r`0.20 N`, r`0.25 N`],
        correctAnswer: 2,
        explanation: r`Fully under, the weight and the buoyant force share the same $V$ and $g$, so their ratio is the density ratio: 2500 ÷ 1250 = 2, and the weight is 2 × 0.10 N = 0.20 N. The value 0.050 N inverts the ratio, 0.10 N treats the two forces as equal, and 0.25 N just reads digits off the densities.`,
      },
      {
        question: r`An aluminum bracket of density 2700 kg/m³ weighs 54 N. It is dropped into a flooded quarry and ends up fully submerged in water of density 1000 kg/m³. What buoyant force acts on it?`,
        options: [r`20 N`, r`27 N`, r`34 N`, r`146 N`],
        correctAnswer: 0,
        explanation: r`The weight is $\rho_{\text{object}} V g$ and the buoyant force is $\rho_{\text{fluid}} V g$, so $F_b$ = 54 N × (1000 ÷ 2700) = 54 N ÷ 2.7 = 20 N. The value 146 N multiplies by 2.7 instead of dividing, 34 N is the weight minus the buoyant force, and 27 N halves the weight for no reason.`,
      },
      {
        question: r`A machine part weighs 18 N. Fully submerged in a coolant of density 1200 kg/m³, it feels a buoyant force of 4.0 N. What is the density of the part?`,
        options: [r`270 kg/m³`, r`1,540 kg/m³`, r`4,500 kg/m³`, r`5,400 kg/m³`],
        correctAnswer: 3,
        explanation: r`Weight over buoyant force equals the density ratio: 18 ÷ 4.0 = 4.5, so the part's density is 4.5 × 1200 = 5,400 kg/m³. The value 4,500 kg/m³ uses water's density instead of the coolant's, 270 kg/m³ divides the coolant's density by 4.5, and 1,540 kg/m³ divides the weight by the 14 N difference.`,
      },
      {
        question: r`An iron anchor of density 8000 kg/m³ lies fully submerged in brine of density 1250 kg/m³. What is the ratio of the anchor's weight to the buoyant force on it?`,
        options: [r`0.16`, r`6.4`, r`6.75`, r`8.0`],
        correctAnswer: 1,
        explanation: r`Both forces contain the same $V$ and $g$, so the ratio is $\rho_{\text{object}}$ over $\rho_{\text{fluid}}$: 8000 ÷ 1250 = 6.4. The value 8.0 would be right in fresh water of density 1000 kg/m³, 0.16 inverts the ratio, and 6.75 subtracts the densities instead of dividing them.`,
      },
      {
        question: r`A rod pushes a plastic cube down so that it sits at rest fully submerged in water of density 1000 kg/m³. The cube weighs 6.0 N and the buoyant force on it is 8.0 N. What is the cube's density?`,
        options: [r`250 kg/m³`, r`750 kg/m³`, r`1,330 kg/m³`, r`1,750 kg/m³`],
        correctAnswer: 1,
        explanation: r`The density ratio equals weight over buoyant force: 6.0 ÷ 8.0 = 0.75, so the cube's density is 0.75 × 1000 = 750 kg/m³, less than water's as expected for something that must be pushed down. The value 1,330 kg/m³ inverts the ratio, 250 kg/m³ uses the 2.0 N difference, and 1,750 kg/m³ adds the ratio to 1.`,
      },
      {
        question: r`A ceramic bead of density 3.0 g/cm³ rests fully submerged in an oil of density 750 kg/m³. The buoyant force on the bead is 0.15 N. What is the bead's weight?`,
        options: [r`0.038 N`, r`0.20 N`, r`0.45 N`, r`0.60 N`],
        correctAnswer: 3,
        explanation: r`First convert: 3.0 g/cm³ = 3000 kg/m³. The weight over the buoyant force is the density ratio, 3000 ÷ 750 = 4, so the weight is 4 × 0.15 N = 0.60 N. The value 0.45 N multiplies by 3 as if the fluid were water, 0.038 N divides by 4, and 0.20 N divides by 0.75.`,
      },
    ],
  },
  [r`Why does an object denser than the fluid sink all the way to the bottom?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A solid steel ball bearing is dropped into a deep tank of water, whose density is the same at every depth. Once it is fully submerged, how does the buoyant force on it at 5 m compare with the force at 1 m?`,
        options: [r`Larger at 5 m, but still smaller than its weight`, r`The same at both depths, and smaller than its weight`, r`Larger at 5 m, where it grows to equal its weight`, r`The same at both depths, and equal to its weight`],
        correctAnswer: 1,
        explanation: r`The buoyant force depends on the fluid's density and the displaced volume, and neither changes with depth, so it is the same at 1 m and 5 m. Steel is denser than water, so that force stays smaller than the weight and the ball keeps sinking. The options with a growing force confuse buoyant force with pressure, and a force equal to the weight would describe a ball that hovers.`,
      },
      {
        question: r`A rigid object is released from rest just under the surface of a still lake. It moves steadily downward and stops only when it touches the lake bed. What must be true of the forces on it while it was sinking?`,
        options: [r`Its weight exceeded the buoyant force only when deep`, r`Its weight equaled the buoyant force at every depth`, r`Its weight equaled the buoyant force only at the bed`, r`Its weight exceeded the buoyant force at every depth`],
        correctAnswer: 3,
        explanation: r`An object that sinks from rest has a weight larger than the buoyant force, and since neither force changes with depth, the weight stays larger all the way down. If the two were equal, the object would have stayed where it was released. Nothing about depth switches the imbalance on or off, so the "only when deep" and "only at the bed" options are wrong.`,
      },
    ],
  },
  [r`In what order do you draw the forces on an object that is under a fluid?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A granite statue rests on the floor of a harbor, fully submerged. A student draws its weight first and the buoyant force second. In the usual order, what is the third force, and which way does it act?`,
        options: [r`The normal force from the floor, acting upward`, r`The normal force from the floor, acting downward`, r`The tension from a rope above it, acting upward`, r`The pressure of the water on it, acting downward`],
        correctAnswer: 0,
        explanation: r`After the weight (down) and the buoyant force (up), the third step is whatever else touches the object. Here that is the floor, which pushes up with a normal force. A floor cannot pull downward, no rope is attached, and the water's pressure is already counted as the buoyant force.`,
      },
      {
        question: r`A wooden buoy is tied to the seabed by a rope and sits at rest fully under water. A student's diagram shows only the weight, pointing down, and the rope's tension, pointing down. What is missing?`,
        options: [r`The normal force, drawn straight up`, r`A second tension, drawn straight up`, r`The buoyant force, drawn straight up`, r`The buoyant force, drawn straight down`],
        correctAnswer: 2,
        explanation: r`Every object under a fluid gets a buoyant force, drawn straight up as the second force on the diagram. Without it, two downward forces could never balance and the buoy could not be at rest. The buoyant force never points down, nothing solid touches the buoy to supply a normal force, and there is only one rope.`,
      },
    ],
  },
  [r`Does an object weigh less when it is under water?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A man who weighs 600 N stands at rest neck-deep in a rehabilitation pool, where the buoyant force on him is 540 N. What is his weight in the pool, and what force does the pool floor supply?`,
        options: [r`Weight 60 N; the floor supplies 60 N`, r`Weight 600 N; the floor supplies 600 N`, r`Weight 60 N; the floor supplies 540 N`, r`Weight 600 N; the floor supplies 60 N`],
        correctAnswer: 3,
        explanation: r`Gravity pulls on him just as hard in the pool, so his weight is still 600 N. The water carries 540 N of it, which leaves 600 N - 540 N = 60 N for the floor. The options with a weight of 60 N confuse the weight with the support force, and a floor force of 600 N ignores the buoyant force.`,
      },
      {
        question: r`A child holds a river rock at rest, fully under water. Gravity pulls on the rock with 50 N in air, and the buoyant force on it in the river is 20 N. What force do her hands supply, and how hard does gravity pull on the rock now?`,
        options: [r`Hands 30 N; gravity pulls with 30 N`, r`Hands 30 N; gravity pulls with 50 N`, r`Hands 50 N; gravity pulls with 50 N`, r`Hands 20 N; gravity pulls with 30 N`],
        correctAnswer: 1,
        explanation: r`The rock's weight is unchanged at 50 N. The water carries 20 N of it, so her hands supply 50 N - 20 N = 30 N. Saying gravity pulls with 30 N mistakes the reduced support for a reduced weight, and hands supplying 50 N leaves out the buoyant force.`,
      },
      {
        question: r`A 12 kg anchor hangs at rest on a chain, fully submerged in seawater, where the buoyant force on it is 15 N. What is the anchor's weight while it is submerged? (g = 10 m/s²)`,
        options: [r`120 N`, r`105 N`, r`135 N`, r`15 N`],
        correctAnswer: 0,
        explanation: r`Weight is the pull of gravity, $mg$ = 12 kg × 10 m/s² = 120 N, and being under water does not change it. The value 105 N is what the chain supports (120 N - 15 N), not the weight. 135 N adds the buoyant force, and 15 N is the buoyant force itself.`,
      },
      {
        question: r`A spring scale reads 24 N for a brick in air. With the brick lowered until it is fully under water and touching nothing, the scale reads 14 N. By how much did the gravitational force on the brick change?`,
        options: [r`By 24 N`, r`By 14 N`, r`By 0 N`, r`By 10 N`],
        correctAnswer: 2,
        explanation: r`The gravitational force on the brick is its weight, 24 N, in air and under water alike, so it changed by 0 N. The 10 N drop in the reading is the buoyant force: the water carries that part, so the scale has less to support. 14 N is the new reading and 24 N is the weight itself.`,
      },
      {
        question: r`An astronaut in a training suit has a total mass of 150 kg. In a deep training pool the suit is adjusted until the buoyant force is 1,500 N, so she hovers at rest with no support. What is her weight in the pool, suit included? (g = 10 m/s²)`,
        options: [r`0 N`, r`150 N`, r`1,500 N`, r`3,000 N`],
        correctAnswer: 2,
        explanation: r`Her weight is $mg$ = 150 kg × 10 m/s² = 1,500 N, the same as on the pool deck. She hovers because the buoyant force balances that weight, not because the weight is gone, so 0 N is the support she needs and not her weight. 150 N drops the factor of g, and 3,000 N adds the two forces.`,
      },
      {
        question: r`A hippo that weighs 15,000 N walks slowly along a river bottom, fully submerged, where the buoyant force on it is 14,400 N. What fraction of its weight do its legs support?`,
        options: [r`0.04 of its weight`, r`0.40 of its weight`, r`0.96 of its weight`, r`1.0 of its weight`],
        correctAnswer: 0,
        explanation: r`The weight is still 15,000 N, but the water carries 14,400 N of it, so the legs support 600 N, and 600 ÷ 15,000 = 0.04. The value 0.96 is the fraction the water carries, 1.0 ignores the buoyant force, and 0.40 slips a power of ten.`,
      },
    ],
  },
  [r`Write the apparent weight of an object hanging in a fluid as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bronze propeller with a true weight of 40 N hangs at rest from a dock scale, fully submerged in seawater and touching nothing. The buoyant force on it is 5.0 N. What does the scale read?`,
        options: [r`5.0 N`, r`35 N`, r`40 N`, r`45 N`],
        correctAnswer: 1,
        explanation: r`$W_{\text{apparent}} = W - F_b$ = 40 N - 5.0 N = 35 N. The value 40 N is the true weight, which the scale reads only in air. 45 N adds the buoyant force instead of subtracting it, and 5.0 N is the buoyant force alone.`,
      },
      {
        question: r`A surgical clamp reads 2.4 N on a spring scale in the open room. Dangling in a jar of saline, completely covered and touching nothing, it reads 2.1 N. What buoyant force does the saline exert on the clamp?`,
        options: [r`4.5 N`, r`2.1 N`, r`1.1 N`, r`0.30 N`],
        correctAnswer: 3,
        explanation: r`Rearranging $W_{\text{apparent}} = W - F_b$ gives $F_b = W - W_{\text{apparent}}$ = 2.4 N - 2.1 N = 0.30 N. The value 2.1 N is the apparent weight itself, 4.5 N adds the two readings, and 1.1 comes from dividing them.`,
      },
      {
        question: r`A glass stopper hangs at rest in a tank of glycerin, fully submerged and touching nothing. Its apparent weight is 0.70 N and the glycerin pushes up on it with 0.50 N. What is the stopper's true weight?`,
        options: [r`0.20 N`, r`0.50 N`, r`1.2 N`, r`0.70 N`],
        correctAnswer: 2,
        explanation: r`From $W_{\text{apparent}} = W - F_b$, the true weight is $W = W_{\text{apparent}} + F_b$ = 0.70 N + 0.50 N = 1.2 N. The value 0.20 N subtracts the two instead, 0.70 N is the apparent weight, and 0.50 N is the buoyant force.`,
      },
      {
        question: r`A 3.0 kg kettlebell hangs at rest from a force sensor, fully under the water of an exercise pool and touching nothing. The buoyant force on it is 4.0 N. What does the sensor read? (g = 10 m/s²)`,
        options: [r`26 N`, r`30 N`, r`34 N`, r`4.0 N`],
        correctAnswer: 0,
        explanation: r`The true weight is $W = mg$ = 3.0 kg × 10 m/s² = 30 N, so $W_{\text{apparent}} = W - F_b$ = 30 N - 4.0 N = 26 N. The value 30 N is the true weight, 34 N adds the buoyant force, and 4.0 N is the buoyant force alone.`,
      },
      {
        question: r`A brass key has a true weight of 0.50 N. Hanging at rest fully submerged in ethanol, it feels a buoyant force of 60 mN. What is its apparent weight, in millinewtons?`,
        options: [r`60 mN`, r`500 mN`, r`560 mN`, r`440 mN`],
        correctAnswer: 3,
        explanation: r`Convert the weight first: 0.50 N = 500 mN. Then $W_{\text{apparent}} = W - F_b$ = 500 mN - 60 mN = 440 mN. The value 500 mN is the true weight, 560 mN adds the buoyant force, and 60 mN is the buoyant force itself.`,
      },
      {
        question: r`A stone statue with a true weight of 900 N hangs at rest on a crane cable. The crane lowers it into a lake until it is fully submerged, where the buoyant force is 300 N. The cable tension in the lake is what fraction of the tension in air?`,
        options: [r`1/3`, r`2/3`, r`1/2`, r`3/2`],
        correctAnswer: 1,
        explanation: r`In air the cable carries the full 900 N. In the lake it carries $W - F_b$ = 900 N - 300 N = 600 N, and 600 ÷ 900 = 2/3. The fraction 1/3 is the buoyant force over the weight, 1/2 is the buoyant force over the new tension, and 3/2 inverts the answer.`,
      },
    ],
  },
  [r`What normal force acts on a sunken object resting on the bottom?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A cast-iron cannon that weighs 5,000 N lies at rest on a flat sandy seabed, fully submerged. The buoyant force on it is 700 N. What normal force does the seabed exert on the cannon?`,
        options: [r`700 N`, r`5,000 N`, r`4,300 N`, r`5,700 N`],
        correctAnswer: 2,
        explanation: r`At rest the upward forces balance the weight, $N + F_b = W$, so $N = W - F_b$ = 5,000 N - 700 N = 4,300 N. The value 5,000 N forgets that the buoyant force still acts on the bottom, 5,700 N adds it, and 700 N is the buoyant force alone.`,
      },
      {
        question: r`A sunken toolbox weighs 90 N. It rests on a force plate set into the floor of a diving pool, and the plate reads 65 N. What buoyant force acts on the toolbox?`,
        options: [r`25 N`, r`65 N`, r`90 N`, r`155 N`],
        correctAnswer: 0,
        explanation: r`The plate reads the normal force. From $N = W - F_b$, the buoyant force is $F_b = W - N$ = 90 N - 65 N = 25 N. The value 65 N is the normal force, 90 N is the weight, and 155 N adds the two.`,
      },
      {
        question: r`A ceramic castle rests on the gravel at the bottom of an aquarium, fully submerged. The gravel pushes up on it with 3.5 N and the water pushes up on it with 1.5 N. What is the castle's weight?`,
        options: [r`1.5 N`, r`2.0 N`, r`3.5 N`, r`5.0 N`],
        correctAnswer: 3,
        explanation: r`At rest the two upward forces together balance the weight: $W = N + F_b$ = 3.5 N + 1.5 N = 5.0 N. The value 2.0 N subtracts them instead, 3.5 N is the normal force alone, and 1.5 N is the buoyant force alone.`,
      },
      {
        question: r`A dumbbell with a true weight of 80 N has rolled into the deep end of a swimming pool and lies at rest on the tiles, fully submerged. It displaces 1.0 kg of water. What normal force do the tiles exert on it? (g = 10 m/s²)`,
        options: [r`10 N`, r`70 N`, r`80 N`, r`90 N`],
        correctAnswer: 1,
        explanation: r`The buoyant force is the weight of the displaced water, 1.0 kg × 10 m/s² = 10 N, so $N = W - F_b$ = 80 N - 10 N = 70 N. The value 80 N leaves out the buoyant force, 90 N adds it, and 10 N is the buoyant force alone.`,
      },
      {
        question: r`A steel safe that weighs 1,600 N has sunk in a harbor and rests on the bottom. Steel is 8.0 times as dense as the water, so the buoyant force on the fully submerged safe is one-eighth of its weight. What is the normal force on the safe?`,
        options: [r`200 N`, r`1,600 N`, r`1,800 N`, r`1,400 N`],
        correctAnswer: 3,
        explanation: r`The buoyant force is 1,600 N ÷ 8.0 = 200 N, so $N = W - F_b$ = 1,600 N - 200 N = 1,400 N. The value 200 N is the buoyant force, 1,600 N treats the buoyant force as zero for a sunken object, and 1,800 N adds it to the weight.`,
      },
      {
        question: r`A marble statue that weighs 2,500 N stands on the floor of an empty fountain. The fountain is then filled until the statue is fully under water, where the buoyant force on it is 1,000 N. By what factor does the normal force from the floor change?`,
        options: [r`It becomes 0.40 times as large`, r`It becomes 0.60 times as large`, r`It becomes 1.0 times as large`, r`It becomes 1.4 times as large`],
        correctAnswer: 1,
        explanation: r`Empty, the floor supports the full 2,500 N. Filled, $N = W - F_b$ = 2,500 N - 1,000 N = 1,500 N, and 1,500 ÷ 2,500 = 0.60. The factor 0.40 is the buoyant force over the weight, 1.0 ignores the buoyant force, and 1.4 adds it to the weight.`,
      },
    ],
  },
  [r`What is the tension in a rope that holds a floater under the surface?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hollow plastic marker buoy that weighs 40 N is chained to a lake bed so that it sits at rest fully under the surface. The buoyant force on it is 250 N. What is the tension in the chain?`,
        options: [r`40 N`, r`250 N`, r`210 N`, r`290 N`],
        correctAnswer: 2,
        explanation: r`The chain pulls down, so the balance is $F_b = W + T$ and $T = F_b - W$ = 250 N - 40 N = 210 N. The value 290 N adds the weight, as if the chain pulled up, 250 N leaves the weight out, and 40 N is the weight alone.`,
      },
      {
        question: r`A cork fishing float that weighs 0.20 N is tied by a thread to a sinker on the river bed and held at rest fully submerged. The tension in the thread is 0.60 N. What buoyant force acts on the float?`,
        options: [r`0.80 N`, r`0.60 N`, r`0.40 N`, r`0.12 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force is the only upward force, and it balances the two downward ones: $F_b = W + T$ = 0.20 N + 0.60 N = 0.80 N. The value 0.40 N subtracts the weight from the tension, 0.60 N ignores the weight, and 0.12 multiplies the two numbers.`,
      },
      {
        question: r`A foam pool noodle is held at rest fully under water by a cord tied to a drain grate. The buoyant force on the noodle is 30 N and the tension in the cord is 28 N. What does the noodle weigh?`,
        options: [r`58 N`, r`30 N`, r`28 N`, r`2.0 N`],
        correctAnswer: 3,
        explanation: r`From $F_b = W + T$, the weight is $W = F_b - T$ = 30 N - 28 N = 2.0 N. The value 58 N adds the two, which would need the cord to pull up, 30 N is the buoyant force, and 28 N is the tension.`,
      },
      {
        question: r`A sealed empty drum of volume 0.20 m³ weighs 300 N. A tether fixed to the seabed holds it at rest, fully submerged in water of density 1000 kg/m³. What is the tension in the tether? (g = 10 m/s²)`,
        options: [r`300 N`, r`1,700 N`, r`2,000 N`, r`2,300 N`],
        correctAnswer: 1,
        explanation: r`The buoyant force is $\rho_{\text{fluid}} V g$ = 1000 × 0.20 × 10 = 2,000 N, and the tether pulls down with $T = F_b - W$ = 2,000 N - 300 N = 1,700 N. The value 2,000 N leaves out the weight, 2,300 N adds it, and 300 N is the weight alone.`,
      },
      {
        question: r`A 0.60 kg block of wood of density 600 kg/m³ is tied to the bottom of a tank and sits at rest fully submerged in water of density 1000 kg/m³. What is the tension in the string? (g = 10 m/s²)`,
        options: [r`4.0 N`, r`6.0 N`, r`10 N`, r`16 N`],
        correctAnswer: 0,
        explanation: r`The block's volume is 0.60 kg ÷ 600 kg/m³ = 1.0 × 10⁻³ m³, so $F_b$ = 1000 × 1.0 × 10⁻³ × 10 = 10 N. Its weight is 6.0 N, and $T = F_b - W$ = 4.0 N. The value 10 N is the buoyant force, 6.0 N is the weight, and 16 N adds them.`,
      },
      {
        question: r`A rigid research float that weighs 50 N is tethered at rest 2 m below the surface of a lake, and the tether tension is 150 N. It is then re-tethered at rest 6 m below the surface in the same water. What is the tether tension now?`,
        options: [r`50 N`, r`200 N`, r`150 N`, r`450 N`],
        correctAnswer: 2,
        explanation: r`$T = F_b - W$, and neither the buoyant force on a fully submerged rigid float nor its weight depends on depth, so the tension is still 150 N. The value 450 N scales the tension with depth as if it were pressure, 200 N is the buoyant force, and 50 N is the weight.`,
      },
    ],
  },
  [r`How do a weighing in air and a weighing under a fluid give an object's volume?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A jeweler's spring scale reads 0.80 N for a pendant in air. With the pendant dangling fully covered by water of density 1000 kg/m³ and touching nothing, it reads 0.70 N. What is the pendant's volume? (g = 10 m/s²)`,
        options: [r`1.0 × 10⁻⁵ m³`, r`7.0 × 10⁻⁵ m³`, r`8.0 × 10⁻⁵ m³`, r`1.0 × 10⁻⁴ m³`],
        correctAnswer: 0,
        explanation: r`The drop in the reading is the buoyant force: $F_b$ = 0.80 N - 0.70 N = 0.10 N. Then $V = F_b / (\rho_{\text{fluid}} g)$ = 0.10 ÷ (1000 × 10) = 1.0 × 10⁻⁵ m³. The values 7.0 × 10⁻⁵ and 8.0 × 10⁻⁵ m³ use one of the readings instead of their difference, and 1.0 × 10⁻⁴ m³ leaves out g.`,
      },
      {
        question: r`An engine part has a true weight of 50 N. Suspended at rest fully submerged in oil of density 800 kg/m³, it pulls on the scale with only 34 N. What is the part's volume? (g = 10 m/s²)`,
        options: [r`1.6 × 10⁻³ m³`, r`4.3 × 10⁻³ m³`, r`6.3 × 10⁻³ m³`, r`2.0 × 10⁻³ m³`],
        correctAnswer: 3,
        explanation: r`$F_b = W - W_{\text{apparent}}$ = 50 N - 34 N = 16 N, and $V = F_b / (\rho_{\text{fluid}} g)$ = 16 ÷ (800 × 10) = 2.0 × 10⁻³ m³. The value 1.6 × 10⁻³ m³ uses water's density instead of the oil's, 4.3 × 10⁻³ m³ uses the 34 N reading, and 6.3 × 10⁻³ m³ uses the 50 N weight.`,
      },
      {
        question: r`A fossil tooth gives a scale reading of 0.45 N in air and 0.30 N when it hangs at rest fully under water of density 1000 kg/m³. What is the tooth's volume, in cm³? (g = 10 m/s²)`,
        options: [r`1.5 cm³`, r`15 cm³`, r`30 cm³`, r`45 cm³`],
        correctAnswer: 1,
        explanation: r`$F_b$ = 0.45 N - 0.30 N = 0.15 N, so $V$ = 0.15 ÷ (1000 × 10) = 1.5 × 10⁻⁵ m³. One m³ is 10⁶ cm³, so that is 15 cm³. The value 1.5 cm³ slips a power of ten in the conversion, while 30 cm³ and 45 cm³ use a single reading instead of the drop between them.`,
      },
      {
        question: r`A solid metal sphere of volume 4.0 × 10⁻⁴ m³ has a true weight of 30 N. It is hung from a scale and lowered into a rain barrel until it is fully submerged, at rest and touching nothing. The water's density is 1000 kg/m³. What does the scale read? (g = 10 m/s²)`,
        options: [r`4.0 N`, r`29.6 N`, r`26 N`, r`34 N`],
        correctAnswer: 2,
        explanation: r`Run the volume relation backward: $F_b = \rho_{\text{fluid}} V g$ = 1000 × 4.0 × 10⁻⁴ × 10 = 4.0 N, so the reading is 30 N - 4.0 N = 26 N. The value 4.0 N is the buoyant force itself, 29.6 N slips a power of ten in the buoyant force, and 34 N adds it.`,
      },
      {
        question: r`A glass cylinder of known volume 2.0 × 10⁻⁴ m³ reads 5.0 N on a scale in air and 2.6 N when it hangs at rest fully submerged in an unknown liquid. What is the liquid's density? (g = 10 m/s²)`,
        options: [r`120 kg/m³`, r`1,300 kg/m³`, r`2,500 kg/m³`, r`1,200 kg/m³`],
        correctAnswer: 3,
        explanation: r`$F_b$ = 5.0 N - 2.6 N = 2.4 N. Rearranging $V = F_b / (\rho_{\text{fluid}} g)$ gives $\rho_{\text{fluid}}$ = 2.4 ÷ (2.0 × 10⁻⁴ × 10) = 1,200 kg/m³. The value 1,300 kg/m³ uses the 2.6 N reading, 2,500 kg/m³ uses the 5.0 N weight (the cylinder's own density), and 120 kg/m³ leaves out g.`,
      },
      {
        question: r`Two solid samples are each weighed in air and then while hanging fully under the same water. The reading for sample X drops by 0.60 N and the reading for sample Y drops by 0.20 N. How do their volumes compare?`,
        options: [r`X has 3 times the volume of Y`, r`X has 1/3 the volume of Y`, r`X has 9 times the volume of Y`, r`X has the same volume as Y`],
        correctAnswer: 0,
        explanation: r`Each drop is a buoyant force, and $V = F_b / (\rho_{\text{fluid}} g)$ with the same fluid and g, so volume is proportional to the drop: 0.60 ÷ 0.20 = 3. One-third inverts the ratio, 9 squares it, and equal volumes would need equal drops.`,
      },
    ],
  },
  [r`Once two weighings have given an object's volume, how do you find its density?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two weighings give a bronze bolt a volume of 5.0 × 10⁻⁵ m³. The bolt weighs 4.0 N in air. What is its density? (g = 10 m/s²)`,
        options: [r`800 kg/m³`, r`1,250 kg/m³`, r`8,000 kg/m³`, r`80,000 kg/m³`],
        correctAnswer: 2,
        explanation: r`The mass is $m = W/g$ = 4.0 ÷ 10 = 0.40 kg, and $\rho = m/V$ = 0.40 ÷ (5.0 × 10⁻⁵) = 8,000 kg/m³. The value 80,000 kg/m³ divides the weight, not the mass, by the volume. 800 kg/m³ slips a power of ten, and 1,250 kg/m³ comes from inverting the division.`,
      },
      {
        question: r`A bone fragment weighs 0.90 N in air, and its two weighings give a volume of 5.0 × 10⁻⁵ m³. What is the density of the fragment? (g = 10 m/s²)`,
        options: [r`560 kg/m³`, r`1,800 kg/m³`, r`18,000 kg/m³`, r`180 kg/m³`],
        correctAnswer: 1,
        explanation: r`$m = W/g$ = 0.90 ÷ 10 = 0.090 kg, so $\rho = m/V$ = 0.090 ÷ (5.0 × 10⁻⁵) = 1,800 kg/m³. The value 18,000 kg/m³ forgets to divide the weight by g, 180 kg/m³ slips a power of ten, and 560 kg/m³ comes from dividing the volume by the mass.`,
      },
      {
        question: r`An alloy has a density of 6000 kg/m³. Two weighings show that a sample of it has a volume of 2.0 × 10⁻⁴ m³. What should the sample weigh in air? (g = 10 m/s²)`,
        options: [r`12 N`, r`1.2 N`, r`30 N`, r`120 N`],
        correctAnswer: 0,
        explanation: r`Rearranging $\rho = m/V$ gives $m$ = 6000 × 2.0 × 10⁻⁴ = 1.2 kg, and the weight is $W = mg$ = 12 N. The value 1.2 N stops at the mass without multiplying by g, 120 N slips a power of ten, and 30 N divides the density by the volume's digits.`,
      },
      {
        question: r`A quartz crystal weighs 0.54 N in air, and two weighings give it a volume of 20 cm³. What is its density, in g/cm³? (g = 10 m/s²)`,
        options: [r`0.027 g/cm³`, r`0.37 g/cm³`, r`27 g/cm³`, r`2.7 g/cm³`],
        correctAnswer: 3,
        explanation: r`$m = W/g$ = 0.54 ÷ 10 = 0.054 kg = 54 g, so $\rho = m/V$ = 54 g ÷ 20 cm³ = 2.7 g/cm³. The value 27 g/cm³ skips the division by g, 0.027 g/cm³ divides newtons by cm³ directly, and 0.37 g/cm³ divides the volume by the mass.`,
      },
      {
        question: r`A mineral of density 2500 kg/m³ is cut into a sample that weighs 7.5 N in air. What volume should its two weighings give? (g = 10 m/s²)`,
        options: [r`3.0 × 10⁻⁵ m³`, r`3.0 × 10⁻⁴ m³`, r`3.0 × 10⁻³ m³`, r`3.3 × 10⁻³ m³`],
        correctAnswer: 1,
        explanation: r`$m = W/g$ = 0.75 kg, and rearranging $\rho = m/V$ gives $V = m/\rho$ = 0.75 ÷ 2500 = 3.0 × 10⁻⁴ m³. The value 3.0 × 10⁻³ m³ uses the weight in place of the mass, 3.0 × 10⁻⁵ m³ slips a power of ten, and 3.3 × 10⁻³ m³ comes from dividing the density by the mass.`,
      },
      {
        question: r`Weighings in air and under water show that samples P and Q have the same volume. P weighs 9.0 N in air and Q weighs 3.0 N in air. How does the density of P compare with the density of Q?`,
        options: [r`1/3 the density of Q`, r`6 times the density of Q`, r`3 times the density of Q`, r`9 times the density of Q`],
        correctAnswer: 2,
        explanation: r`$\rho = m/V$ with $m = W/g$, so at equal volume the density is proportional to the weight in air: 9.0 ÷ 3.0 = 3. One-third inverts the ratio, 9 squares it, and 6 subtracts the weights instead of dividing them.`,
      },
    ],
  },
  [r`What is the one-line density ratio from two weighings?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A meteorite fragment reads 7.2 N on a spring scale in air. Dangling fully immersed in kerosene and touching nothing, it reads 6.0 N. How many times denser than kerosene is the fragment?`,
        options: [r`0.17`, r`1.2`, r`5.0`, r`6.0`],
        correctAnswer: 3,
        explanation: r`$F_b$ = 7.2 N - 6.0 N = 1.2 N, and the density ratio is the true weight over the buoyant force: 7.2 ÷ 1.2 = 6.0. The value 5.0 puts the apparent weight on top, 1.2 divides the two readings, and 0.17 inverts the ratio.`,
      },
      {
        question: r`A coin has a true weight of 0.36 N. Fully submerged in glycerin of density 1250 kg/m³, it feels a buoyant force of 0.045 N. What is the coin's density?`,
        options: [r`10,000 kg/m³`, r`8,750 kg/m³`, r`8,000 kg/m³`, r`156 kg/m³`],
        correctAnswer: 0,
        explanation: r`$\rho_{\text{object}} / \rho_{\text{fluid}} = W / F_b$ = 0.36 ÷ 0.045 = 8, so the coin's density is 8 × 1250 = 10,000 kg/m³. The value 8,000 kg/m³ treats the glycerin as water, 8,750 kg/m³ uses the apparent weight on top (a ratio of 7), and 156 kg/m³ divides the fluid's density by 8.`,
      },
      {
        question: r`A zinc casting is 7.0 times as dense as the water it is lowered into, and its true weight is 35 N. What buoyant force acts on it once it is fully submerged?`,
        options: [r`245 N`, r`30 N`, r`5.0 N`, r`5.8 N`],
        correctAnswer: 2,
        explanation: r`The density ratio is $W / F_b$, so $F_b = W$ ÷ 7.0 = 35 N ÷ 7.0 = 5.0 N. The value 5.8 N divides by 6, as if the ratio used the apparent weight, 30 N is the apparent weight that results, and 245 N multiplies instead of dividing.`,
      },
      {
        question: r`A rock is 2.5 times as dense as the brine in a test tank, and its true weight is 15 N. What does a scale read when the rock hangs from it at rest, fully submerged in the brine?`,
        options: [r`6.0 N`, r`9.0 N`, r`12.5 N`, r`37.5 N`],
        correctAnswer: 1,
        explanation: r`From $W / F_b$ = 2.5, the buoyant force is 15 N ÷ 2.5 = 6.0 N, and the scale reads $W - F_b$ = 9.0 N. The value 6.0 N stops at the buoyant force, 12.5 N subtracts the ratio from the weight, and 37.5 N multiplies the weight by the ratio.`,
      },
      {
        question: r`A steel ball of density 7800 kg/m³ weighs 39 N in air. Hanging at rest fully submerged in an unknown liquid, it has an apparent weight of 33 N. What is the liquid's density?`,
        options: [r`1,420 kg/m³`, r`6,600 kg/m³`, r`50,700 kg/m³`, r`1,200 kg/m³`],
        correctAnswer: 3,
        explanation: r`$F_b$ = 39 N - 33 N = 6.0 N, and $W / F_b$ = 39 ÷ 6.0 = 6.5 is the density ratio, so the liquid's density is 7800 ÷ 6.5 = 1,200 kg/m³. The value 1,420 kg/m³ puts the apparent weight on top (33 ÷ 6.0 = 5.5), 6,600 kg/m³ scales by the two readings, and 50,700 kg/m³ multiplies by 6.5.`,
      },
      {
        question: r`A sample has a true weight of 18 N and an apparent weight of 12 N when it hangs fully submerged in a solvent. Four students each write one line for the sample's density divided by the solvent's density. Which line is correct?`,
        options: [r`18 ÷ 6.0 = 3.0`, r`12 ÷ 6.0 = 2.0`, r`18 ÷ 12 = 1.5`, r`6.0 ÷ 18 = 0.33`],
        correctAnswer: 0,
        explanation: r`The buoyant force is 18 N - 12 N = 6.0 N, and the density ratio is the TRUE weight over the buoyant force: 18 ÷ 6.0 = 3.0. The line 12 ÷ 6.0 puts the apparent weight on top, 18 ÷ 12 divides the two readings, and 6.0 ÷ 18 is upside down.`,
      },
    ],
  },
  [r`How do a weight in air and a weight in water give a specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A silver-colored ring gives a scale reading of 0.63 N in air and 0.57 N when it hangs at rest completely under water. What is the ring's specific gravity?`,
        options: [r`0.095`, r`1.1`, r`10.5`, r`9.5`],
        correctAnswer: 2,
        explanation: r`The weight lost in water is 0.63 N - 0.57 N = 0.06 N, and $SG = W / (W - W_{\text{apparent}})$ = 0.63 ÷ 0.06 = 10.5. The value 9.5 puts the reading in water on top, 1.1 divides the two readings, and 0.095 inverts the ratio.`,
      },
      {
        question: r`Pure gold has a specific gravity of about 19. A crown gives a reading of 57 N in air and 52 N when it hangs at rest fully under water. Which working and verdict are correct?`,
        options: [r`Gold: 57 ÷ 3.0 = 19, matching 19`, r`Not gold: 57 ÷ 5.0 = 11.4, below 19`, r`Not gold: 52 ÷ 5.0 = 10.4, below 19`, r`Gold: 5.0 × 3.8 = 19, matching 19`],
        correctAnswer: 1,
        explanation: r`The crown loses 57 N - 52 N = 5.0 N in water, so $SG$ = 57 ÷ 5.0 = 11.4, well below gold's 19: it is not pure gold. Dividing 52 by 5.0 puts the reading in water on top. The two "gold" lines use a loss of 3.0 N that was never measured or multiply the loss by an invented factor.`,
      },
      {
        question: r`Aluminum has a specific gravity of 2.7. An aluminum block weighs 27 N in air. What will a scale read when the block hangs from it at rest, completely under water?`,
        options: [r`17 N`, r`10 N`, r`24.3 N`, r`27 N`],
        correctAnswer: 0,
        explanation: r`$SG = W / (W - W_{\text{apparent}})$, so the weight lost in water is 27 N ÷ 2.7 = 10 N and the reading is 27 N - 10 N = 17 N. The value 10 N is the loss itself, 24.3 N subtracts 2.7 from 27, and 27 N is the reading in air.`,
      },
      {
        question: r`A lead sinker (specific gravity 11) is lowered on a line until it is fully under water, and the tension in the line drops by 0.20 N. What does the sinker weigh in air?`,
        options: [r`0.018 N`, r`2.0 N`, r`2.4 N`, r`2.2 N`],
        correctAnswer: 3,
        explanation: r`The specific gravity is the weight in air divided by the weight lost in water, so $W$ = 11 × 0.20 N = 2.2 N. The value 2.0 N is the reading under water, 2.4 N adds the loss a second time, and 0.018 N divides the loss by 11.`,
      },
      {
        question: r`A mineral sample hangs below a laboratory balance. The balance shows 150 g with the sample in air and 100 g with the sample at rest fully under water. What is the sample's specific gravity?`,
        options: [r`0.67`, r`3.0`, r`1.5`, r`2.0`],
        correctAnswer: 1,
        explanation: r`Balance readings are proportional to the forces, so $SG$ = reading in air ÷ loss in water = 150 ÷ (150 - 100) = 3.0. The value 2.0 puts the reading in water on top, 1.5 divides the two readings, and 0.67 divides them the other way.`,
      },
      {
        question: r`A type of glass has a specific gravity of 2.5. When a solid piece of it hangs at rest fully under water, its apparent weight is what fraction of its weight in air?`,
        options: [r`0.40`, r`1.5`, r`0.60`, r`2.5`],
        correctAnswer: 2,
        explanation: r`$SG = W / (W - W_{\text{apparent}})$ = 2.5 means the glass loses $W$ ÷ 2.5 = 0.40 of its weight in water, leaving an apparent weight of 0.60 $W$. The value 0.40 is the fraction lost, not the fraction left. 2.5 is the specific gravity itself, and 1.5 subtracts 1 from it.`,
      },
    ],
  },
  [r`How do you check a density found from a weighing in air and a weighing in water?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lab group reports a density of 2700 kg/m³ for a sample with a true weight of 5.4 N that feels a buoyant force of 2.0 N fully under water (1000 kg/m³). Does the quick check agree with the group?`,
        options: [r`No: 3.4/2.0 = 1.7, so 1700 kg/m³`, r`No: 2.0/5.4 = 0.37, so 370 kg/m³`, r`No: 5.4/3.4 = 1.6, so 1600 kg/m³`, r`Yes: 5.4/2.0 = 2.7, so 2700 kg/m³`],
        correctAnswer: 3,
        explanation: r`The check divides the true weight by the buoyant force: 5.4 ÷ 2.0 = 2.7 times water's density, which is 2700 kg/m³, so the report stands. The line with 3.4 on top uses the apparent weight, 2.0/5.4 is upside down, and 5.4/3.4 divides the weight by the apparent weight.`,
      },
      {
        question: r`A pebble has a true weight of 14 N. When it is lowered fully under water (1000 kg/m³) on a thread, the scale reading falls to 12 N. What density does the quick check give?`,
        options: [r`860 kg/m³`, r`1,170 kg/m³`, r`7,000 kg/m³`, r`6,000 kg/m³`],
        correctAnswer: 2,
        explanation: r`The buoyant force is the drop in the reading, 14 N - 12 N = 2.0 N. True weight over buoyant force is 14 ÷ 2.0 = 7, so the density is 7 × 1000 = 7,000 kg/m³. The value 6,000 kg/m³ puts the 12 N reading on top, 1,170 kg/m³ divides the two readings, and 860 kg/m³ divides them the other way.`,
      },
      {
        question: r`A student calculates a density of 8000 kg/m³ for a sample whose true weight is 2.4 N. If she is right, what buoyant force must the sample have felt fully under water (1000 kg/m³)?`,
        options: [r`0.30 N`, r`0.34 N`, r`2.1 N`, r`19 N`],
        correctAnswer: 0,
        explanation: r`A density 8 times water's means the true weight is 8 times the buoyant force, so $F_b$ = 2.4 N ÷ 8 = 0.30 N. The value 0.34 N divides by 7, 2.1 N is the apparent weight that goes with the right answer, and 19 N multiplies by 8.`,
      },
      {
        question: r`A long calculation gives 2500 kg/m³ for a sample with a true weight of 10 N. What reading on the scale, with the sample hanging at rest fully under water (1000 kg/m³), would pass the quick check?`,
        options: [r`2.5 N`, r`6.0 N`, r`4.0 N`, r`7.5 N`],
        correctAnswer: 1,
        explanation: r`A density 2.5 times water's needs a true weight 2.5 times the buoyant force, so $F_b$ = 10 N ÷ 2.5 = 4.0 N and the scale must read 10 N - 4.0 N = 6.0 N. The value 4.0 N is the buoyant force, not the reading, 7.5 N subtracts 2.5 from the weight, and 2.5 N only copies the ratio.`,
      },
      {
        question: r`A fishing weight has a true weight of 0.33 N and feels a buoyant force of 0.030 N fully under water, whose density is 1.0 g/cm³. What density does the quick check give, in g/cm³?`,
        options: [r`0.091 g/cm³`, r`10 g/cm³`, r`110 g/cm³`, r`11 g/cm³`],
        correctAnswer: 3,
        explanation: r`True weight over buoyant force is 0.33 ÷ 0.030 = 11, so the density is 11 times water's: 11 g/cm³. The value 10 g/cm³ puts the apparent weight (0.30 N) on top, 0.091 g/cm³ inverts the ratio, and 110 g/cm³ slips a power of ten.`,
      },
      {
        question: r`Samples A and B have the same true weight. Fully under water, the buoyant force is 2.0 N on sample A and 0.50 N on sample B. By the quick check, how do their densities compare?`,
        options: [r`B is 4 times as dense as A`, r`A is 4 times as dense as B`, r`B is 2 times as dense as A`, r`A is 2 times as dense as B`],
        correctAnswer: 0,
        explanation: r`Each density is the true weight over the buoyant force, times water's density. With equal weights, the smaller buoyant force belongs to the denser sample, and 2.0 ÷ 0.50 = 4, so B is 4 times as dense as A. The reversed option forgets that the buoyant force goes on the bottom, and a factor of 2 takes a square root that is not there.`,
      },
    ],
  },
  [r`A hanging submerged object is cut loose and settles on the bottom. How does the normal force compare with the tension the string had?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A camera housing that weighs 60 N hangs at rest on a cable, fully under seawater, where the buoyant force on it is 22 N. The cable is released and the housing settles on the flat seabed. What normal force does the seabed exert on it?`,
        options: [r`22 N`, r`60 N`, r`38 N`, r`82 N`],
        correctAnswer: 2,
        explanation: r`The cable carried $W - F_b$ = 60 N - 22 N = 38 N, and on the bottom the seabed supplies the same 38 N, because the buoyant force is still there. The value 60 N assumes the buoyant force vanishes on the bottom, 82 N adds it, and 22 N is the buoyant force alone.`,
      },
      {
        question: r`A wrench that weighs 8.0 N rests on the floor of a pool, where the floor pushes up on it with 7.0 N. A diver ties on a string and holds the wrench at rest just above the floor, still fully under water. What is the tension in the string?`,
        options: [r`1.0 N`, r`7.0 N`, r`8.0 N`, r`15 N`],
        correctAnswer: 1,
        explanation: r`Either support supplies the weight minus the buoyant force, so the string carries the same 7.0 N the floor did. The value 8.0 N is the full weight, which ignores the 1.0 N buoyant force, 1.0 N is that buoyant force, and 15 N adds the weight and the normal force.`,
      },
      {
        question: r`A statue hangs at rest on a crane cable, fully under water, with a cable tension of 3,200 N and a buoyant force of 1,800 N. It is then set on the bottom and the cable goes slack. What are the normal force $N$ and the statue's weight $W$?`,
        options: [r`$N$ = 5,000 N and $W$ = 5,000 N`, r`$N$ = 1,400 N and $W$ = 3,200 N`, r`$N$ = 1,800 N and $W$ = 5,000 N`, r`$N$ = 3,200 N and $W$ = 5,000 N`],
        correctAnswer: 3,
        explanation: r`Hanging, $T + F_b = W$, so $W$ = 3,200 N + 1,800 N = 5,000 N. On the bottom the floor replaces the cable and supplies the same $W - F_b$ = 3,200 N. A normal force of 5,000 N drops the buoyant force, 1,800 N is the buoyant force itself, and a weight of 3,200 N confuses the tension with the weight.`,
      },
      {
        question: r`An anchor hangs at rest fully under water with a chain tension of 450 N. It is lowered until it touches the bottom, but the chain stays taut and still carries 150 N. What normal force does the bottom exert on the anchor?`,
        options: [r`300 N`, r`150 N`, r`450 N`, r`600 N`],
        correctAnswer: 0,
        explanation: r`The supports must supply the weight minus the buoyant force, which the first measurement shows is 450 N. With the chain still carrying 150 N, the bottom supplies the rest: 450 N - 150 N = 300 N. The value 450 N ignores the chain, 600 N adds the two, and 150 N is the chain's share.`,
      },
      {
        question: r`A 2.0 kg brass weight hangs at rest from a string, fully under water, where the buoyant force on it is 2.5 N. The string is cut and the weight settles on the tank floor. What were the string's tension before and the normal force after? (g = 10 m/s²)`,
        options: [r`17.5 N, then 20 N`, r`Both are 17.5 N`, r`Both are 20 N`, r`17.5 N, then 2.5 N`],
        correctAnswer: 1,
        explanation: r`The weight is 2.0 kg × 10 m/s² = 20 N, and either support supplies $W - F_b$ = 20 N - 2.5 N = 17.5 N, so both are 17.5 N. A normal force of 20 N assumes the buoyant force disappears on the floor, a tension of 20 N ignores it altogether, and 2.5 N is the buoyant force itself.`,
      },
      {
        question: r`An iron pot that weighs 30 N rests on a lake bed, which pushes up on it with 26 N. If the pot instead hung at rest from a rope at mid-depth, what would the rope's tension be, and what is the buoyant force on the pot?`,
        options: [r`Tension 30 N; buoyant force 4.0 N`, r`Tension 4.0 N; buoyant force 26 N`, r`Tension 26 N; buoyant force 4.0 N`, r`Tension 30 N; buoyant force 26 N`],
        correctAnswer: 2,
        explanation: r`On the bed, $N = W - F_b$, so $F_b$ = 30 N - 26 N = 4.0 N. A rope would have to supply the same weight minus buoyant force, 26 N. A tension of 30 N ignores the buoyant force, and the options with a 26 N buoyant force confuse it with the support.`,
      },
    ],
  },
  [r`How do you tell which way a rope pulls on an object held at rest under a fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed sample jar that weighs 12 N is held at rest fully submerged in a lake by one cord. The buoyant force on the jar is 9.0 N. Which way does the cord pull, and how hard?`,
        options: [r`Downward, with 3.0 N`, r`Upward, with 21 N`, r`Downward, with 21 N`, r`Upward, with 3.0 N`],
        correctAnswer: 3,
        explanation: r`The weight (12 N) is larger than the buoyant force (9.0 N), so the jar would sink and the cord must pull up with $W - F_b$ = 3.0 N. A downward pull belongs to an object that would rise, and 21 N adds the two forces instead of taking their difference.`,
      },
      {
        question: r`A 5.0 kg object of volume 8.0 × 10⁻³ m³ is held at rest fully under water (1000 kg/m³) by a single rope. Which way does the rope pull, and how hard? (g = 10 m/s²)`,
        options: [r`Upward, with 30 N`, r`Downward, with 30 N`, r`Upward, with 130 N`, r`Downward, with 130 N`],
        correctAnswer: 1,
        explanation: r`The weight is 5.0 × 10 = 50 N and the buoyant force is 1000 × 8.0 × 10⁻³ × 10 = 80 N. The buoyant force is larger, so the object would rise and the rope pulls down with $F_b - W$ = 30 N. An upward pull would let it shoot up, and 130 N adds the forces.`,
      },
      {
        question: r`A 3.0 kg block of density 3000 kg/m³ is held at rest fully under water (1000 kg/m³) by a single rope. Which way does the rope pull, and how hard? (g = 10 m/s²)`,
        options: [r`Upward, with 20 N`, r`Downward, with 20 N`, r`Upward, with 40 N`, r`Downward, with 40 N`],
        correctAnswer: 0,
        explanation: r`The block's volume is 3.0 ÷ 3000 = 1.0 × 10⁻³ m³, so $F_b$ = 1000 × 1.0 × 10⁻³ × 10 = 10 N, less than the 30 N weight. The block would sink, so the rope pulls up with $W - F_b$ = 20 N. A downward pull has the direction backward, and 40 N adds the two forces.`,
      },
      {
        question: r`One rope holds an object at rest fully under oil. The rope pulls upward on the object with 8.0 N, and the buoyant force on the object is 14 N. What is the object's weight?`,
        options: [r`6.0 N`, r`8.0 N`, r`22 N`, r`14 N`],
        correctAnswer: 2,
        explanation: r`A rope pulls up only when the weight is the larger force, with $T = W - F_b$, so $W = T + F_b$ = 8.0 N + 14 N = 22 N. The value 6.0 N would be right if the rope pulled down ($W = F_b - T$), 14 N sets the weight equal to the buoyant force, and 8.0 N is the tension.`,
      },
      {
        question: r`A buoy has a specific gravity of 0.25, so fully under water the buoyant force on it is 4 times its 100 N weight. One cable holds it at rest fully under water. Which way does the cable pull, and how hard?`,
        options: [r`Upward, with 300 N`, r`Downward, with 75 N`, r`Upward, with 75 N`, r`Downward, with 300 N`],
        correctAnswer: 3,
        explanation: r`The buoyant force is 4 × 100 N = 400 N, larger than the weight, so the buoy would rise and the cable pulls down with $F_b - W$ = 400 N - 100 N = 300 N. An upward pull has the direction backward, and 75 N takes three-quarters of the weight instead of comparing the two forces.`,
      },
      {
        question: r`A sealed canister weighs 16 N. Fully submerged, the buoyant force on it is 20 N in water but only 14 N in gasoline. It is held at rest fully under gasoline by one string. Which way does the string pull, and how hard?`,
        options: [r`Upward, with 4.0 N`, r`Upward, with 2.0 N`, r`Downward, with 2.0 N`, r`Downward, with 4.0 N`],
        correctAnswer: 1,
        explanation: r`Compare the forces in the fluid it is actually in: in gasoline the weight (16 N) beats the buoyant force (14 N), so the canister would sink and the string pulls up with 16 N - 14 N = 2.0 N. The 4.0 N answers use the buoyant force in water, where the string would pull down, and a downward 2.0 N has the direction backward.`,
      },
    ],
  },
  [r`How do you find the acceleration of a tied-down float at the moment its rope is cut?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 0.40 kg rubber ball is tied to the bottom of a pool, fully under water, where the buoyant force on it is 10 N. The string is cut. What is the ball's acceleration at that moment? (g = 10 m/s²)`,
        options: [r`6.0 m/s² upward`, r`25 m/s² upward`, r`15 m/s² upward`, r`35 m/s² upward`],
        correctAnswer: 2,
        explanation: r`The weight is 0.40 × 10 = 4.0 N, so the net force is $F_b - W$ = 6.0 N upward and $a$ = 6.0 ÷ 0.40 = 15 m/s². The value 25 m/s² divides the buoyant force alone by the mass, 35 m/s² adds the weight to it, and 6.0 m/s² divides the net force by the 1.0 kg of displaced water.`,
      },
      {
        question: r`A 4.0 kg float is tethered at rest fully under water, and the tether tension is 20 N. The tether is cut. What is the float's acceleration at that moment?`,
        options: [r`5.0 m/s² upward`, r`0.20 m/s² upward`, r`10 m/s² upward`, r`15 m/s² upward`],
        correctAnswer: 0,
        explanation: r`While tied, $T = F_b - W$ = 20 N. Cutting the tether leaves exactly that imbalance as the net force, so $a$ = 20 N ÷ 4.0 kg = 5.0 m/s² upward. The value 0.20 m/s² inverts the division, 10 m/s² is g, and 15 m/s² adds g to the answer.`,
      },
      {
        question: r`At the moment its rope is cut, a 3.0 kg float held fully under water accelerates upward at 4.0 m/s². What buoyant force acts on the float? (g = 10 m/s²)`,
        options: [r`12 N`, r`18 N`, r`30 N`, r`42 N`],
        correctAnswer: 3,
        explanation: r`Rearranging $a = (F_b - W)/m$ gives $F_b = W + ma$ = 30 N + 3.0 × 4.0 N = 42 N. The value 12 N is only the net force $ma$, 30 N is the weight, and 18 N subtracts the net force from the weight.`,
      },
      {
        question: r`A wooden block of density 800 kg/m³ is tied down fully under water of density 1000 kg/m³. The string is cut. What is the block's acceleration at that moment? (g = 10 m/s²)`,
        options: [r`2.0 m/s² upward`, r`2.5 m/s² upward`, r`8.0 m/s² upward`, r`12.5 m/s² upward`],
        correctAnswer: 1,
        explanation: r`Fully under, $F_b / W$ = 1000 ÷ 800 = 1.25, so the net force is 0.25 $W$ = 0.25 $mg$ and $a$ = 0.25 × 10 = 2.5 m/s² upward. The value 12.5 m/s² forgets to subtract the weight, 2.0 m/s² divides the net force by the displaced water's mass, and 8.0 m/s² uses the density ratio upside down.`,
      },
      {
        question: r`A 250 g float is tied down fully under water, where the buoyant force on it is 6.0 N. Its string is cut. What is its acceleration at that moment? (g = 10 m/s²)`,
        options: [r`14 m/s² upward`, r`0.014 m/s² upward`, r`24 m/s² upward`, r`34 m/s² upward`],
        correctAnswer: 0,
        explanation: r`Convert the mass: 250 g = 0.25 kg, so $W$ = 2.5 N. The net force is 6.0 N - 2.5 N = 3.5 N and $a$ = 3.5 ÷ 0.25 = 14 m/s² upward. The value 0.014 m/s² divides by 250 without converting, 24 m/s² leaves out the weight, and 34 m/s² adds it.`,
      },
      {
        question: r`A float that weighs 5.0 N is tied down fully under water, where the buoyant force on it is 9.0 N. The rope is cut. What is the float's acceleration at that moment? (g = 10 m/s²)`,
        options: [r`0.80 m/s² upward`, r`18 m/s² upward`, r`28 m/s² upward`, r`8.0 m/s² upward`],
        correctAnswer: 3,
        explanation: r`The float's own mass is $W/g$ = 0.50 kg and the net force is 9.0 N - 5.0 N = 4.0 N, so $a$ = 4.0 ÷ 0.50 = 8.0 m/s² upward. The value 0.80 m/s² divides by the weight as if it were the mass, 18 m/s² leaves the weight out of the net force, and 28 m/s² adds it.`,
      },
    ],
  },
  [r`Which mass goes into $F_{\text{net}} = ma$ for an object released under a fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 4.0 kg buoy displaces 10 kg of water when it is fully under. It is released from rest there. What is its acceleration at that moment? (g = 10 m/s²)`,
        options: [r`4.3 m/s²`, r`6.0 m/s²`, r`15 m/s²`, r`25 m/s²`],
        correctAnswer: 2,
        explanation: r`The buoyant force is the weight of the displaced water, 100 N, and the buoy weighs 40 N, so the net force is 60 N. Dividing by the buoy's own mass gives 60 ÷ 4.0 = 15 m/s². The value 6.0 m/s² divides by the displaced water's 10 kg, 4.3 m/s² divides by the 14 kg total, and 25 m/s² forgets to subtract the weight.`,
      },
      {
        question: r`A 5.0 kg stone displaces 2.0 kg of water when it is fully under. It is released from rest just below the surface of a pond. Ignoring drag, what is its acceleration at that moment? (g = 10 m/s²)`,
        options: [r`4.3 m/s² downward`, r`6.0 m/s² downward`, r`10 m/s² downward`, r`15 m/s² downward`],
        correctAnswer: 1,
        explanation: r`The weight is 50 N and the buoyant force is the weight of the displaced water, 20 N, so the net force is 30 N downward. Dividing by the stone's own 5.0 kg gives 6.0 m/s². The value 15 m/s² divides by the displaced water's 2.0 kg, 4.3 m/s² divides by 7.0 kg, and 10 m/s² ignores the buoyant force.`,
      },
      {
        question: r`A 0.30 kg cork displaces 0.90 kg of water when it is fully under, so the net force on it at release is 6.0 N upward. Which calculation gives its acceleration?`,
        options: [r`6.0 N ÷ 0.90 kg = 6.7 m/s²`, r`6.0 N ÷ 1.2 kg = 5.0 m/s²`, r`6.0 N ÷ 0.60 kg = 10 m/s²`, r`6.0 N ÷ 0.30 kg = 20 m/s²`],
        correctAnswer: 3,
        explanation: r`$F_{\text{net}} = ma$ uses the mass of the thing that accelerates, the cork's own 0.30 kg, so $a$ = 6.0 ÷ 0.30 = 20 m/s². Dividing by 0.90 kg uses the displaced water, which belongs to the buoyant force. 1.2 kg adds the two masses and 0.60 kg subtracts them.`,
      },
      {
        question: r`A 1.0 kg float displaces 5.0 kg of water when it is fully under. Finding its acceleration at release, a student divides the correct net force by the mass of the displaced water. How does her result compare with the correct acceleration?`,
        options: [r`It is 1/5 of the correct value`, r`It is 5 times the correct value`, r`It is 1/4 of the correct value`, r`It is 4 times the correct value`],
        correctAnswer: 0,
        explanation: r`The correct calculation divides the net force by the float's own 1.0 kg. Dividing the same force by 5.0 kg instead gives a result 1/5 as large (8.0 m/s² in place of 40 m/s²). Five times inverts the comparison, and the factors of 4 come from the ratio of the net force to the weight, not from the masses.`,
      },
      {
        question: r`Released fully under water, an object feels a net upward force of 24 N and accelerates at 8.0 m/s². The water it displaces has a mass of 5.4 kg. What is the object's own mass?`,
        options: [r`2.4 kg`, r`3.0 kg`, r`5.4 kg`, r`8.4 kg`],
        correctAnswer: 1,
        explanation: r`$F_{\text{net}} = ma$ with the object's own mass: $m$ = 24 N ÷ 8.0 m/s² = 3.0 kg. The 5.4 kg of displaced water sets the buoyant force (54 N) but is not the mass that accelerates. The value 2.4 kg subtracts the two masses, and 8.4 kg adds them.`,
      },
      {
        question: r`In a wave tank, a 2.0 kg instrument pod pushes aside 4.5 kg of water while a clamp holds it fully under. The clamp lets go. Which pair gives the net force on the pod and its acceleration at that moment? (g = 10 m/s²)`,
        options: [r`25 N and 5.6 m/s²`, r`45 N and 22.5 m/s²`, r`25 N and 12.5 m/s²`, r`45 N and 10 m/s²`],
        correctAnswer: 2,
        explanation: r`The buoyant force is 45 N and the weight is 20 N, so the net force is 25 N upward, and dividing by the pod's own 2.0 kg gives 12.5 m/s². The value 5.6 m/s² divides 25 N by the displaced water's 4.5 kg. The options with 45 N forget to subtract the weight.`,
      },
    ],
  },
  [r`A released float rises and comes to rest at the surface. What has happened to the buoyant force on it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 0.80 kg foam kickboard is pushed fully under water in a pool, where the buoyant force on it is 100 N, and then let go. Once it is floating at rest, what is the buoyant force on it? (g = 10 m/s²)`,
        options: [r`8.0 N`, r`92 N`, r`100 N`, r`108 N`],
        correctAnswer: 0,
        explanation: r`A floating object at rest has a buoyant force equal to its weight: 0.80 kg × 10 m/s² = 8.0 N. The force dropped from 100 N because less of the board is under. 100 N holds only while it is fully submerged, 92 N is the size of the drop, and 108 N adds the weight.`,
      },
      {
        question: r`A float of density 250 kg/m³ is released under water of density 1000 kg/m³ and comes to rest at the surface. What fraction of the float's volume is now under water?`,
        options: [r`4.0`, r`1.0`, r`0.75`, r`0.25`],
        correctAnswer: 3,
        explanation: r`The buoyant force has dropped to equal the weight, which happens when the submerged fraction is the float's density over the fluid's: 250 ÷ 1000 = 0.25. The value 0.75 is the fraction above the surface, 1.0 would mean it is still fully under, and 4.0 inverts the ratio.`,
      },
      {
        question: r`A buoy that weighs 40 N feels a buoyant force of 160 N while it is held fully under water. It is released, rises and comes to rest floating. By how much has the buoyant force on it dropped?`,
        options: [r`40 N`, r`120 N`, r`160 N`, r`200 N`],
        correctAnswer: 1,
        explanation: r`Floating at rest, the buoyant force equals the 40 N weight, so it has dropped by 160 N - 40 N = 120 N. The value 40 N is the new buoyant force, not the drop. 160 N would leave no buoyant force at all, and 200 N adds the two forces.`,
      },
      {
        question: r`A ball that weighs 2.0 N feels a buoyant force of 10 N while it is held fully under water. After it is released and floats at rest, what fraction of its volume is under water?`,
        options: [r`0.25`, r`0.80`, r`0.20`, r`5.0`],
        correctAnswer: 2,
        explanation: r`Floating, the buoyant force must fall from 10 N to the 2.0 N weight. The buoyant force is proportional to the volume under water, so the submerged fraction is 2.0 ÷ 10 = 0.20. The value 0.80 is the fraction above the water, 5.0 inverts the ratio, and 0.25 divides the weight by the 8.0 N difference.`,
      },
      {
        question: r`A 3.0 kg float with a total volume of 1.0 × 10⁻² m³ is released under water (1000 kg/m³) and comes to rest at the surface. What volume of water does it displace now? (g = 10 m/s²)`,
        options: [r`3.0 × 10⁻⁴ m³`, r`7.0 × 10⁻³ m³`, r`1.0 × 10⁻² m³`, r`3.0 × 10⁻³ m³`],
        correctAnswer: 3,
        explanation: r`At rest the buoyant force equals the weight, 30 N, so the displaced volume is 30 ÷ (1000 × 10) = 3.0 × 10⁻³ m³. The value 1.0 × 10⁻² m³ is the whole float, displaced only while fully under, 7.0 × 10⁻³ m³ is the part above the water, and 3.0 × 10⁻⁴ m³ slips a power of ten.`,
      },
      {
        question: r`A float of density 600 kg/m³ that weighs 12 N is released under a liquid of density 1200 kg/m³ and comes to rest at the surface. What is the buoyant force on it now, and what fraction of it is under the liquid?`,
        options: [r`24 N, with 0.50 of it under`, r`12 N, with 0.50 of it under`, r`12 N, with 0.60 of it under`, r`24 N, with 1.0 of it under`],
        correctAnswer: 1,
        explanation: r`At rest on the surface the buoyant force equals the weight, 12 N, and the submerged fraction is the float's density over the liquid's: 600 ÷ 1200 = 0.50. The 24 N values are the buoyant force while fully under, and 0.60 compares the float with water instead of with this liquid.`,
      },
    ],
  },
}
