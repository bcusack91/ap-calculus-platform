import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for the buoyant force, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A diver's notebook has four entries for a camera housing that she holds below the surface of the sea. Which entry is a correctly written buoyant force?`,
        options: [r`$F_b$ = 35 N, directed downward`, r`$F_b$ = 35 Pa, directed upward`, r`$F_b$ = 35 N, directed upward`, r`$F_b$ = 35 kg, directed upward`],
        correctAnswer: 2,
        explanation: r`The buoyant force $F_b$ is a force, so it is measured in newtons, and it is the fluid's net push upward on the object. The downward entry has the direction reversed. Pascals measure a pressure and kilograms measure a mass, so neither can be the unit of a force.`,
      },
      {
        question: r`A cork is tied by a thread to the floor of a fish tank and sits at rest below the surface. Its force diagram has three arrows: the weight, the thread's tension and $F_b$. Which description fits the arrow labeled $F_b$?`,
        options: [r`It points up and is the net push of the water on the cork`, r`It points down and is the net push of the water on the cork`, r`It points up and is the pull of the thread on the cork`, r`It points down and is the pull of the Earth on the cork`],
        correctAnswer: 0,
        explanation: r`$F_b$ is the buoyant force: the net force the surrounding fluid exerts on the object, and it points upward. A downward push from the water has the direction wrong. The pull of the thread is the tension, which here points down, and the pull of the Earth is the weight.`,
      },
    ],
  },
  [r`What symbol stands for the submerged volume, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A log with a total volume of 0.40 m³ floats on a lake with 0.30 m³ of its wood below the waterline. What is $V_{\text{sub}}$ for the log, and what does it measure?`,
        options: [r`0.40 m³, the whole volume of the log`, r`0.10 m³, the part of the log above water`, r`0.70 m³, the log plus the part under water`, r`0.30 m³, the part of the log under water`],
        correctAnswer: 3,
        explanation: r`$V_{\text{sub}}$ is the volume of the object below the surface, which is the volume of water it pushes aside: 0.30 m³. The whole volume, 0.40 m³, would only be right if the log were fully under. The 0.10 m³ above the water displaces no water, and 0.70 m³ counts the submerged part twice.`,
      },
      {
        question: r`A toy boat floats with 150 cm³ of its hull below the waterline. Which entry gives its submerged volume in the SI unit that $F_b = \rho V g$ needs?`,
        options: [r`1.5 × 10⁻⁴ m²`, r`1.5 × 10⁻⁴ m³`, r`1.5 × 10² m³`, r`1.5 × 10⁻⁴ kg`],
        correctAnswer: 1,
        explanation: r`A volume is measured in cubic meters, and 150 cm³ × 10⁻⁶ m³ per cm³ = 1.5 × 10⁻⁴ m³. Square meters measure an area and kilograms a mass, so those entries are not volumes. 1.5 × 10² m³ keeps the number 150 without converting it, which would be a volume the size of a house.`,
      },
    ],
  },
  [r`Where does the buoyant force come from?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A solid cube is held at rest in the middle of a deep tank of water, with two faces level. How do the water's pushes on its six faces compare?`,
        options: [r`The top push beats the bottom push, and the side pushes cancel`, r`The bottom push beats the top push, and the side pushes cancel`, r`The bottom push equals the top push, and the side pushes add up`, r`The bottom push equals the top push, and the side pushes cancel`],
        correctAnswer: 1,
        explanation: r`Pressure grows with depth, so the deeper bottom face is pushed up harder than the top face is pushed down, while pushes on opposite side faces are equal and cancel. What is left over is the upward buoyant force. If the top push were larger the net force would point down, and if top and bottom matched there would be no buoyant force at all.`,
      },
      {
        question: r`Suppose a block were surrounded by a fluid whose pressure was the same at every depth instead of growing with depth. What would the buoyant force on the block be?`,
        options: [r`Upward, since the fluid still pushes on the bottom face`, r`Upward, since the block still pushes fluid out of its way`, r`Zero, since a fluid at one pressure pushes on no face`, r`Zero, since the pushes on the top and bottom faces match`],
        correctAnswer: 3,
        explanation: r`The buoyant force is the difference between the push up on the bottom and the push down on the top. With equal pressures those two pushes are equal, so they cancel and nothing is left. The fluid does still push on every face, so "pushes on no face" gives the wrong reason, and a push on the bottom alone ignores the equal push on the top.`,
      },
    ],
  },
  [r`What is the pressure difference between the top and bottom faces of a block held under a fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An aquarium ornament shaped like a brick is 0.20 m tall and stands fully under water of density 1000 kg/m³. How much greater is the pressure on its bottom face than on its top face? (g = 10 m/s²)`,
        options: [r`200 Pa`, r`2,000 Pa`, r`10,000 Pa`, r`20,000 Pa`],
        correctAnswer: 1,
        explanation: r`$\Delta P = \rho g h$ = 1000 × 10 × 0.20 = 2,000 Pa, using the ornament's own height. 200 Pa leaves out g, 10,000 Pa leaves out the height, and 20,000 Pa reads the height as 2.0 m.`,
      },
      {
        question: r`A pressure sensor on the bottom face of a block held under water (1000 kg/m³) reads 3,000 Pa more than a sensor on its top face. How tall is the block? (g = 10 m/s²)`,
        options: [r`30 m`, r`3.0 m`, r`0.030 m`, r`0.30 m`],
        correctAnswer: 3,
        explanation: r`Rearranging $\Delta P = \rho g h$ gives h = 3,000 ÷ (1000 × 10) = 0.30 m. Dividing by the density alone gives 3.0 m, and the other two values slip a power of ten in the same division.`,
      },
      {
        question: r`A cylinder 0.40 m tall is held upright under an unknown liquid. The pressure on its bottom face is 5,000 Pa greater than the pressure on its top face. What is the liquid's density? (g = 10 m/s²)`,
        options: [r`1,250 kg/m³`, r`2,000 kg/m³`, r`12,500 kg/m³`, r`125 kg/m³`],
        correctAnswer: 0,
        explanation: r`$\rho = \Delta P / (g h)$ = 5,000 ÷ (10 × 0.40) = 5,000 ÷ 4.0 = 1,250 kg/m³. 2,000 multiplies 5,000 by 0.40 instead of dividing, 12,500 leaves out g, and 125 divides by g twice.`,
      },
      {
        question: r`A block 0.10 m tall is held in brine of density 1200 kg/m³ with its top face 2.0 m below the surface. The air pressure above the brine is 100,000 Pa. What is the pressure difference between the block's bottom and top faces? (g = 10 m/s²)`,
        options: [r`24,000 Pa`, r`25,200 Pa`, r`1,200 Pa`, r`101,200 Pa`],
        correctAnswer: 2,
        explanation: r`Only the block's own height matters: $\Delta P = \rho g h$ = 1200 × 10 × 0.10 = 1,200 Pa. The air pressure acts on both faces and cancels. 24,000 Pa and 25,200 Pa are the gauge pressures at the top and bottom faces, not their difference, and 101,200 Pa adds the air pressure to the difference.`,
      },
      {
        question: r`A sealed sample tube 15 cm long hangs upright, fully under water of density 1000 kg/m³. What is the pressure difference between its bottom end and its top end? (g = 10 m/s²)`,
        options: [r`150,000 Pa`, r`15,000 Pa`, r`150 Pa`, r`1,500 Pa`],
        correctAnswer: 3,
        explanation: r`The height must be in meters: 15 cm = 0.15 m, so $\Delta P$ = 1000 × 10 × 0.15 = 1,500 Pa. 150,000 Pa puts in 15 as if it were meters, 15,000 Pa converts 15 cm to 1.5 m, and 150 Pa leaves out g.`,
      },
      {
        question: r`A short post held upright under water has a pressure difference of 600 Pa between its bottom and top faces. A second post, three times as tall, is held upright under the same water. What is the pressure difference across the second post?`,
        options: [r`600 Pa`, r`1,800 Pa`, r`200 Pa`, r`5,400 Pa`],
        correctAnswer: 1,
        explanation: r`$\Delta P = \rho g h$ is proportional to the height, so three times the height gives 3 × 600 = 1,800 Pa. 600 Pa assumes the height does not matter, 200 Pa divides by 3, and 5,400 Pa multiplies by 3 squared.`,
      },
    ],
  },
  [r`How does the pressure difference across a block give the buoyant force on it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A paving slab lies level under a pond. The pressure on its lower face is 800 Pa greater than on its upper face, and each of those faces has an area of 0.050 m². What is the buoyant force on the slab?`,
        options: [r`40 N`, r`4.0 N`, r`400 N`, r`16,000 N`],
        correctAnswer: 0,
        explanation: r`$F_b = \Delta P \cdot A$ = 800 × 0.050 = 40 N. 16,000 N divides the pressure difference by the area instead of multiplying, and 4.0 N and 400 N slip a power of ten in the product.`,
      },
      {
        question: r`A submerged battery pack feels a buoyant force of 90 N. Its top and bottom faces are level and each has an area of 0.030 m². By how much does the pressure on the bottom face exceed the pressure on the top face?`,
        options: [r`2.7 Pa`, r`300 Pa`, r`3,000 Pa`, r`30,000 Pa`],
        correctAnswer: 2,
        explanation: r`Rearranging $F_b = \Delta P \cdot A$ gives $\Delta P$ = 90 ÷ 0.030 = 3,000 Pa. 2.7 Pa multiplies the force by the area, and 300 Pa and 30,000 Pa slip a power of ten when dividing by 0.030.`,
      },
      {
        question: r`A rectangular float held under water feels a buoyant force of 120 N. The pressure difference between its bottom and top faces is 6,000 Pa. What is the area of each of those faces?`,
        options: [r`0.0020 m²`, r`0.020 m²`, r`0.20 m²`, r`50 m²`],
        correctAnswer: 1,
        explanation: r`$A = F_b / \Delta P$ = 120 ÷ 6,000 = 0.020 m². 50 m² divides the pressure difference by the force, which inverts the ratio, and the other two values slip a power of ten.`,
      },
      {
        question: r`A block 0.30 m tall stands fully under water of density 1000 kg/m³. Its top and bottom faces each have an area of 0.010 m². Using the pressure difference across it, what is the buoyant force on the block? (g = 10 m/s²)`,
        options: [r`3.0 N`, r`300 N`, r`3,000 N`, r`30 N`],
        correctAnswer: 3,
        explanation: r`$\Delta P = \rho g h$ = 1000 × 10 × 0.30 = 3,000 Pa, and $F_b = \Delta P \cdot A$ = 3,000 × 0.010 = 30 N. The same result comes from $\rho V g$ with V = 0.0030 m³. 3,000 is the pressure difference with the area step skipped, and 3.0 N and 300 N slip a power of ten.`,
      },
      {
        question: r`A sealed instrument case is submerged in a harbor. The pressure on its bottom face is 2,000 Pa greater than on its top face, and each of those faces measures 400 cm². What is the buoyant force on the case?`,
        options: [r`8.0 N`, r`800 N`, r`80 N`, r`800,000 N`],
        correctAnswer: 2,
        explanation: r`The area must be in square meters: 400 cm² = 400 × 10⁻⁴ m² = 0.040 m², so $F_b$ = 2,000 × 0.040 = 80 N. 800,000 N puts in 400 without converting, and 8.0 N and 800 N convert the area with the wrong power of ten.`,
      },
      {
        question: r`Two blocks with identical top and bottom faces are held under the same liquid. The buoyant force on the shorter block is 25 N. The other block is three times as tall. What is the buoyant force on the taller block?`,
        options: [r`75 N`, r`25 N`, r`50 N`, r`225 N`],
        correctAnswer: 0,
        explanation: r`$F_b = \Delta P \cdot A = \rho (Ah) g$, so with the same face area and liquid the force is proportional to the height: 3 × 25 = 75 N. 25 N assumes the height does not matter, 50 N only doubles the force, and 225 N multiplies by 3 squared.`,
      },
    ],
  },
  [r`Write the buoyant force as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A diver's air cylinder occupies 5.0 × 10⁻³ m³ and lies completely beneath the surface of a swimming pool (1000 kg/m³). How large is $F_b$ on the cylinder? (g = 10 m/s²)`,
        options: [r`5.0 N`, r`500 N`, r`5,000 N`, r`50 N`],
        correctAnswer: 3,
        explanation: r`$F_b = \rho V g$ = 1000 × 5.0 × 10⁻³ × 10 = 50 N. 5.0 N leaves out g, and 500 N and 5,000 N misread the power of ten in the volume.`,
      },
      {
        question: r`A sealed sensor is fully submerged in oil of density 800 kg/m³ and feels a buoyant force of 16 N. What is the sensor's volume? (g = 10 m/s²)`,
        options: [r`2.0 × 10⁻⁴ m³`, r`2.0 × 10⁻³ m³`, r`2.0 × 10⁻² m³`, r`5.0 × 10² m³`],
        correctAnswer: 1,
        explanation: r`$V = F_b / (\rho g)$ = 16 ÷ (800 × 10) = 16 ÷ 8,000 = 2.0 × 10⁻³ m³. 2.0 × 10⁻² m³ leaves out g, 5.0 × 10² m³ inverts the ratio, and 2.0 × 10⁻⁴ m³ slips a power of ten.`,
      },
      {
        question: r`A chemist hangs a glass plummet that occupies 4.0 × 10⁻³ m³ completely beneath the surface of a solvent, and the solvent pushes up on it with 48 N. What is the solvent's density? (g = 10 m/s²)`,
        options: [r`120 kg/m³`, r`192 kg/m³`, r`1,200 kg/m³`, r`12,000 kg/m³`],
        correctAnswer: 2,
        explanation: r`$\rho = F_b / (V g)$ = 48 ÷ (4.0 × 10⁻³ × 10) = 48 ÷ 0.040 = 1,200 kg/m³. 12,000 leaves out g, 192 multiplies 48 by 4.0 instead of dividing, and 120 slips a power of ten.`,
      },
      {
        question: r`A plastic pontoon with a total volume of 0.50 m³ floats on a lake of density 1000 kg/m³ with 0.20 m³ of it below the waterline. What is the buoyant force on the pontoon? (g = 10 m/s²)`,
        options: [r`2,000 N`, r`3,000 N`, r`5,000 N`, r`200 N`],
        correctAnswer: 0,
        explanation: r`Only the submerged volume counts: $F_b = \rho V g$ = 1000 × 0.20 × 10 = 2,000 N. 5,000 N uses the pontoon's whole volume, 3,000 N uses the 0.30 m³ above the water, and 200 N leaves out g.`,
      },
      {
        question: r`In a habitat on another planet, where g = 4 m/s², a tool of volume 3.0 × 10⁻³ m³ lies fully under water of density 1000 kg/m³. What is the buoyant force on the tool?`,
        options: [r`3.0 N`, r`12 N`, r`30 N`, r`120 N`],
        correctAnswer: 1,
        explanation: r`$F_b = \rho V g$ = 1000 × 3.0 × 10⁻³ × 4 = 12 N, with the local value of g. 30 N uses the Earth value of 10 m/s², 3.0 N leaves g out, and 120 N slips a power of ten.`,
      },
      {
        question: r`Air is a fluid too. An advertising blimp that occupies 50 m³ drifts in cold air of density 1.3 kg/m³. How large is the upward push of the air on the blimp? (g = 10 m/s²)`,
        options: [r`65 N`, r`500 N`, r`6,500 N`, r`650 N`],
        correctAnswer: 3,
        explanation: r`$F_b = \rho V g$ = 1.3 × 50 × 10 = 650 N, where the density is that of the surrounding air. 65 N leaves out g, 500 N leaves out the density, and 6,500 N slips a power of ten.`,
      },
    ],
  },
  [r`An object pushes aside some fluid. How does the weight of that fluid compare with the buoyant force on the object?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A jeweler dips a silver bracelet on a wire into a spouted vessel of water. While the bracelet is completely beneath the surface, 0.030 kg of water runs out of the spout into a dish. How large is $F_b$ on the bracelet? (g = 10 m/s²)`,
        options: [r`0.030 N`, r`3.0 N`, r`0.30 N`, r`30 N`],
        correctAnswer: 2,
        explanation: r`The buoyant force equals the weight of the water pushed aside: 0.030 kg × 10 m/s² = 0.30 N. 0.030 N reads the mass as if it were already a weight, and 3.0 N and 30 N slip a power of ten.`,
      },
      {
        question: r`A bronze statue of irregular shape weighs 400 N. Fully submerged in a harbor, it pushes aside water that weighs 150 N. What is the buoyant force on the statue?`,
        options: [r`150 N`, r`250 N`, r`400 N`, r`550 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force equals the weight of the displaced water, 150 N, whatever the object's shape. 400 N is the statue's own weight, 250 N is the weight minus the buoyant force, and 550 N adds the two.`,
      },
      {
        question: r`An anchor lying fully submerged on a riverbed feels a buoyant force of 45 N. What mass of water does the anchor push aside? (g = 10 m/s²)`,
        options: [r`0.45 kg`, r`45 kg`, r`450 kg`, r`4.5 kg`],
        correctAnswer: 3,
        explanation: r`The displaced water weighs as much as the buoyant force, 45 N, so its mass is 45 ÷ 10 = 4.5 kg. 45 kg treats the newtons as kilograms, 450 kg multiplies by g instead of dividing, and 0.45 kg divides by g twice.`,
      },
      {
        question: r`A metal key is dropped into a beaker brim-full of ethanol (800 kg/m³) and sinks. Exactly 500 mL (5.0 × 10⁻⁴ m³) of ethanol overflows. What is the buoyant force on the key? (g = 10 m/s²)`,
        options: [r`0.40 N`, r`4.0 N`, r`5.0 N`, r`40 N`],
        correctAnswer: 1,
        explanation: r`The overflow has mass 800 × 5.0 × 10⁻⁴ = 0.40 kg and weight 0.40 × 10 = 4.0 N, which equals the buoyant force. 0.40 N stops at the mass, 5.0 N uses the density of water instead of ethanol, and 40 N slips a power of ten.`,
      },
      {
        question: r`A pebble hanging fully submerged in water (1000 kg/m³) feels a buoyant force of 6.0 N. What volume of water does the pebble push aside? (g = 10 m/s²)`,
        options: [r`600 cm³`, r`60 cm³`, r`6.0 cm³`, r`6,000 cm³`],
        correctAnswer: 0,
        explanation: r`The displaced water weighs 6.0 N, so its mass is 0.60 kg and its volume is 0.60 ÷ 1000 = 6.0 × 10⁻⁴ m³, which is 600 cm³. 6,000 cm³ leaves out g, and 60 cm³ and 6.0 cm³ convert cubic meters to cubic centimeters with the wrong power of ten.`,
      },
      {
        question: r`In a classroom test, a metal weight is lowered into a full overflow can and the spilled water is caught in a cup. The cup weighs 1.0 N empty and 3.5 N with the spilled water in it. What is the buoyant force on the metal weight?`,
        options: [r`1.0 N`, r`3.5 N`, r`2.5 N`, r`4.5 N`],
        correctAnswer: 2,
        explanation: r`The spilled water alone weighs 3.5 − 1.0 = 2.5 N, and the buoyant force equals the weight of the displaced water. 3.5 N includes the cup's own weight, 1.0 N is the empty cup, and 4.5 N adds the two readings.`,
      },
    ],
  },
  [r`Whose density goes into $F_b = \rho V g$: the fluid's or the object's?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lead fishing sinker (11,000 kg/m³) of volume 3.0 × 10⁻⁵ m³ hangs fully under water (1000 kg/m³). What is the buoyant force on the sinker? (g = 10 m/s²)`,
        options: [r`0.030 N`, r`0.30 N`, r`3.0 N`, r`3.3 N`],
        correctAnswer: 1,
        explanation: r`The fluid's density goes in: $F_b$ = 1000 × 3.0 × 10⁻⁵ × 10 = 0.30 N. 3.3 N uses the lead's density, which gives the sinker's weight. 3.0 N uses the difference of the two densities, and 0.030 N leaves out g.`,
      },
      {
        question: r`A balsa pellet (250 kg/m³) and a nickel-alloy pellet (8000 kg/m³) each occupy 1.0 × 10⁻⁴ m³. Tweezers keep both completely beneath the surface of a dish of water (1000 kg/m³). How large is $F_b$ on each pellet? (g = 10 m/s²)`,
        options: [r`0.25 N on the balsa, 8.0 N on the alloy`, r`8.0 N on the balsa, 0.25 N on the alloy`, r`1.0 N on the balsa, 1.0 N on the alloy`, r`1.0 N on the balsa, 8.0 N on the alloy`],
        correctAnswer: 2,
        explanation: r`Both pellets push aside the same volume of the same water, so each feels 1000 × 1.0 × 10⁻⁴ × 10 = 1.0 N. The values 0.25 N and 8.0 N come from each pellet's own density and are the pellets' weights, not the buoyant forces on them.`,
      },
      {
        question: r`A glass marble (2500 kg/m³) of volume 4.0 × 10⁻⁶ m³ sinks to the bottom of a bottle of olive oil (900 kg/m³). What is the buoyant force on the marble while it is fully submerged? (g = 10 m/s²)`,
        options: [r`0.036 N`, r`0.040 N`, r`0.064 N`, r`0.10 N`],
        correctAnswer: 0,
        explanation: r`The density of the oil goes in: $F_b$ = 900 × 4.0 × 10⁻⁶ × 10 = 0.036 N. 0.10 N uses the glass's density and is the marble's weight, 0.064 N uses the difference between the two densities, and 0.040 N uses the density of water, which is not the fluid here.`,
      },
      {
        question: r`A titanium screw (4500 kg/m³) of volume 2.0 × 10⁻⁵ m³ is fully surrounded by blood of density 1050 kg/m³. What is the buoyant force on the screw? (g = 10 m/s²)`,
        options: [r`0.90 N`, r`0.69 N`, r`0.20 N`, r`0.21 N`],
        correctAnswer: 3,
        explanation: r`The surrounding fluid is blood, so $F_b$ = 1050 × 2.0 × 10⁻⁵ × 10 = 0.21 N. 0.90 N uses the titanium's density and is the screw's weight, 0.69 N uses the difference of the two densities, and 0.20 N uses the density of water instead of blood.`,
      },
      {
        question: r`A ceramic weight of density 3000 kg/m³ and volume 5.0 × 10⁻⁴ m³ is fully submerged in a liquid and feels a buoyant force of 4.0 N. What is the density of the liquid? (g = 10 m/s²)`,
        options: [r`1,000 kg/m³`, r`800 kg/m³`, r`2,200 kg/m³`, r`3,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`The density in $F_b = \rho V g$ belongs to the liquid: $\rho$ = 4.0 ÷ (5.0 × 10⁻⁴ × 10) = 800 kg/m³. 3,000 kg/m³ is the weight's own density, 2,200 kg/m³ subtracts the answer from it, and 1,000 kg/m³ assumes the liquid is water without checking the force.`,
      },
      {
        question: r`A pine block (500 kg/m³) of volume 2.0 × 10⁻³ m³ is pushed down by hand until it is fully under water (1000 kg/m³). What is the buoyant force on the block? (g = 10 m/s²)`,
        options: [r`20 N`, r`10 N`, r`30 N`, r`5.0 N`],
        correctAnswer: 0,
        explanation: r`The water's density goes in: $F_b$ = 1000 × 2.0 × 10⁻³ × 10 = 20 N. 10 N uses the pine's density and is the block's weight, 30 N adds the weight to the buoyant force, and 5.0 N halves the weight again.`,
      },
    ],
  },
  [r`How does the buoyant force change while an object is lowered through the surface of a fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A uniform cylinder is lowered upright into a pool. With one quarter of its volume under water, the buoyant force on it is 2.0 N. What is the buoyant force once it is fully under?`,
        options: [r`2.0 N`, r`4.0 N`, r`6.0 N`, r`8.0 N`],
        correctAnswer: 3,
        explanation: r`The buoyant force grows in proportion to the submerged volume, so going from one quarter under to fully under multiplies it by 4: 4 × 2.0 = 8.0 N. 2.0 N assumes no change, 4.0 N only doubles it, and 6.0 N is the extra force gained, not the total.`,
      },
      {
        question: r`A fully submerged buoy feels a buoyant force of 12 N. A winch then lifts it until only one third of its volume is still under water. What is the buoyant force now?`,
        options: [r`4.0 N`, r`8.0 N`, r`12 N`, r`36 N`],
        correctAnswer: 0,
        explanation: r`With one third of the volume submerged, the buoyant force is one third as large: 12 ÷ 3 = 4.0 N. 8.0 N uses the two thirds that are out of the water, 12 N assumes the force does not change, and 36 N multiplies by 3 instead of dividing.`,
      },
      {
        question: r`A uniform metal cylinder 10 cm tall is lowered upright into oil. The buoyant force reaches 9.0 N at the moment its top face goes under. What is the buoyant force when its bottom face is 5 cm below the surface, and when its bottom face is 20 cm below the surface?`,
        options: [r`9.0 N, then 9.0 N`, r`4.5 N, then 18 N`, r`4.5 N, then 9.0 N`, r`9.0 N, then 18 N`],
        correctAnswer: 2,
        explanation: r`With the bottom 5 cm down, half of the 10 cm cylinder is under, so the force is half of 9.0 N, or 4.5 N. With the bottom 20 cm down the cylinder is fully under, so the force stays at 9.0 N. The options with 18 N let the force keep growing with depth, and 9.0 N at 5 cm ignores that only half is under.`,
      },
      {
        question: r`A block on a spring scale is lowered into water. The buoyant force on the block is 40 N when it is fully under. Partway through the lowering, the buoyant force is 30 N. What part of the block is under water at that moment?`,
        options: [r`One quarter of its volume`, r`Three quarters of its volume`, r`One third of its volume`, r`Two thirds of its volume`],
        correctAnswer: 1,
        explanation: r`The buoyant force is proportional to the submerged volume, so 30 ÷ 40 = three quarters of the block is under. One quarter is the part still out of the water. One third and two thirds do not match the ratio of 30 N to 40 N.`,
      },
      {
        question: r`A sealed 2.0 L bottle is pushed slowly down into a sink of water. The buoyant force on it is 5.0 N when 0.50 L of the bottle is under. What is the buoyant force when 1.5 L of the bottle is under?`,
        options: [r`5.0 N`, r`10 N`, r`20 N`, r`15 N`],
        correctAnswer: 3,
        explanation: r`Three times the submerged volume gives three times the force: 3 × 5.0 = 15 N. 5.0 N assumes the force is constant during lowering, 10 N uses the extra 1.0 L alone, and 20 N is the force with the whole 2.0 L under.`,
      },
      {
        question: r`A crane lowers a crate 0.60 m tall, with straight vertical sides, into a harbor. The buoyant force on the crate is 180 N once it is fully under. What is the buoyant force when the crate's bottom face is 0.20 m below the surface?`,
        options: [r`36 N`, r`120 N`, r`60 N`, r`90 N`],
        correctAnswer: 2,
        explanation: r`With the bottom face 0.20 m down, 0.20 ÷ 0.60 = one third of the crate is under, so the force is 180 ÷ 3 = 60 N. 120 N uses the two thirds still above the water, 90 N assumes half is under, and 36 N multiplies 180 by 0.20 without dividing by the height.`,
      },
    ],
  },
  [r`Why is the buoyant force on a fully submerged object the same at any depth?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A rigid research probe is fully submerged in a lake. At a depth of 10 m the buoyant force on it is 200 N. The probe is then lowered to a depth of 50 m. What is the buoyant force on it there?`,
        options: [r`200 N`, r`40 N`, r`1,000 N`, r`5,000 N`],
        correctAnswer: 0,
        explanation: r`Going deeper raises the pressures on the top and bottom of the probe by the same amount, so their difference, and the buoyant force, stays at 200 N. 1,000 N scales the force with depth, 40 N divides by the depth ratio, and 5,000 N scales it with the depth ratio squared.`,
      },
      {
        question: r`A block is held under water with a gauge pressure of 20,000 Pa on its top face and 23,000 Pa on its bottom face. It is lowered until the gauge pressure on its top face is 30,000 Pa. What is the gauge pressure on its bottom face now?`,
        options: [r`30,000 Pa`, r`34,500 Pa`, r`53,000 Pa`, r`33,000 Pa`],
        correctAnswer: 3,
        explanation: r`Both pressures rise together, so the 3,000 Pa difference is kept: 30,000 + 3,000 = 33,000 Pa. 34,500 Pa scales the bottom pressure by 1.5 as if the difference grew too, 53,000 Pa adds the new top pressure to the old bottom pressure, and 30,000 Pa makes the difference vanish.`,
      },
      {
        question: r`A cube is held under water. Near the surface the water pushes down on its top face with 400 N and up on its bottom face with 480 N. The cube is lowered until the push on its top face is 1,200 N. What is the push on its bottom face at that depth?`,
        options: [r`1,200 N`, r`1,280 N`, r`1,440 N`, r`1,680 N`],
        correctAnswer: 1,
        explanation: r`The two pushes rise together, so their difference stays at 480 − 400 = 80 N, and the bottom push is 1,200 + 80 = 1,280 N. 1,440 N triples the bottom push as if the difference tripled too, 1,680 N adds the old bottom push to the new top push, and 1,200 N leaves no buoyant force at all.`,
      },
      {
        question: r`A block 0.25 m tall is held under oil of density 800 kg/m³, first with its top face 0.50 m deep and then with its top face 2.0 m deep. What is the pressure difference between its bottom and top faces at each depth? (g = 10 m/s²)`,
        options: [r`2,000 Pa, then 8,000 Pa`, r`4,000 Pa, then 16,000 Pa`, r`2,000 Pa at both depths`, r`6,000 Pa, then 18,000 Pa`],
        correctAnswer: 2,
        explanation: r`The difference depends only on the block's height: 800 × 10 × 0.25 = 2,000 Pa at any depth, because both face pressures rise together. The options that grow fourfold scale the difference with depth, and 6,000 Pa and 18,000 Pa are the gauge pressures at the bottom face, not differences.`,
      },
      {
        question: r`A solid steel ball on a wire is fully under water at a depth of 2 m, where the buoyant force on it is 0.50 N. It is lowered to a depth of 8 m. What happens to the buoyant force?`,
        options: [r`It stays at 0.50 N`, r`It rises to 2.0 N`, r`It rises to 3.5 N`, r`It falls to 0.125 N`],
        correctAnswer: 0,
        explanation: r`The pressure at every point on the ball rises by the same amount, so the top-to-bottom pressure difference and the buoyant force stay at 0.50 N. 2.0 N scales the force with the fourfold depth, 3.5 N adds 0.50 N for each extra meter, and 0.125 N divides by 4.`,
      },
      {
        question: r`A brick is held under water. The gauge pressures on its top and bottom faces are 15,000 Pa and 16,500 Pa, and each face has an area of 0.020 m². The brick is lowered until the gauge pressure on its top face is 45,000 Pa. What is the buoyant force on it there?`,
        options: [r`90 N`, r`30 N`, r`900 N`, r`930 N`],
        correctAnswer: 1,
        explanation: r`The pressure difference stays at 16,500 − 15,000 = 1,500 Pa at any depth, so $F_b$ = 1,500 × 0.020 = 30 N. 90 N triples the force along with the top pressure. 900 N and 930 N are the pushes on the top and bottom faces at the new depth, not their difference.`,
      },
    ],
  },
  [r`Which three things about an object leave the buoyant force on it unchanged?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three solid cubes of the same size, made of aluminum, iron and gold, hang on threads fully under water in one tank. The aluminum cube is the lightest and the gold cube is both the densest and the deepest. How do the buoyant forces on them compare?`,
        options: [r`Largest on the gold cube, since it is the densest`, r`Largest on the gold cube, since it is the deepest`, r`Largest on the aluminum cube, since it is lightest`, r`Equal on all three, since size and fluid are shared`],
        correctAnswer: 3,
        explanation: r`Only the fluid's density and the submerged volume set the buoyant force, and the three cubes share both, so the forces are equal. An object's density, its weight and its depth once fully under make no difference, which rules out each of the other three reasons.`,
      },
      {
        question: r`In two trials an object is held fully under a fluid, and its volume is the same in both. Exactly one thing differs between the trials, and the buoyant force is larger in the second. Which change explains this?`,
        options: [r`The fluid was swapped for a denser one`, r`The object was swapped for a denser one`, r`The object was swapped for a heavier one`, r`The object was moved to a deeper point`],
        correctAnswer: 0,
        explanation: r`With the submerged volume fixed, the buoyant force can only change if the fluid's density changes, so the fluid must have been swapped for a denser one. A denser object, a heavier object and a greater depth all leave the buoyant force on a fully submerged object unchanged.`,
      },
    ],
  },
  [r`How do you find the buoyant force on a block from the pressures on its faces?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A crate is held level in a freshwater dock (1000 kg/m³) with its top face 0.50 m deep and its bottom face 1.5 m deep. Each of those faces has an area of 0.20 m². Working from the pressures on the two faces, what is the buoyant force on the crate? (g = 10 m/s²)`,
        options: [r`1,000 N`, r`3,000 N`, r`2,000 N`, r`4,000 N`],
        correctAnswer: 2,
        explanation: r`Gauge pressures: 5,000 Pa at the top and 15,000 Pa at the bottom. Forces: 5,000 × 0.20 = 1,000 N down and 15,000 × 0.20 = 3,000 N up, so $F_b$ = 3,000 − 1,000 = 2,000 N. 1,000 N and 3,000 N are the pushes on single faces, and 4,000 N adds them instead of subtracting.`,
      },
      {
        question: r`A sealed drum is held in a vat of oil of density 800 kg/m³ with its flat top 1.0 m deep and its flat bottom 1.5 m deep. Each flat end has an area of 0.10 m². Working from the pressures on the two ends, what is the buoyant force on the drum? (g = 10 m/s²)`,
        options: [r`500 N`, r`400 N`, r`1,200 N`, r`2,000 N`],
        correctAnswer: 1,
        explanation: r`Gauge pressures: 800 × 10 × 1.0 = 8,000 Pa on top and 800 × 10 × 1.5 = 12,000 Pa below. Forces: 800 N down and 1,200 N up, so $F_b$ = 400 N. 500 N uses the density of water, 1,200 N stops at the push on the bottom, and 2,000 N adds the two pushes.`,
      },
      {
        question: r`A submerged slab has gauge pressures of 3,000 Pa on its top face and 7,000 Pa on its bottom face. The buoyant force on it is 120 N. What is the area of each of those faces?`,
        options: [r`0.012 m²`, r`0.017 m²`, r`0.040 m²`, r`0.030 m²`],
        correctAnswer: 3,
        explanation: r`The buoyant force is the pressure difference times the area: 120 = (7,000 − 3,000) × A, so A = 120 ÷ 4,000 = 0.030 m². 0.040 m² divides by the top pressure alone, 0.017 m² by the bottom pressure alone, and 0.012 m² by the sum of the two.`,
      },
      {
        question: r`A sealed case is held under water. The gauge pressure on its top face is 4,000 Pa, each of its level faces has an area of 0.050 m², and the buoyant force on it is 150 N. What is the gauge pressure on its bottom face?`,
        options: [r`7,000 Pa`, r`3,000 Pa`, r`1,000 Pa`, r`4,150 Pa`],
        correctAnswer: 0,
        explanation: r`The pressure difference is 150 ÷ 0.050 = 3,000 Pa, and the bottom face is the deeper one, so its pressure is 4,000 + 3,000 = 7,000 Pa. 3,000 Pa is only the difference, 1,000 Pa subtracts it from the top pressure, and 4,150 Pa adds a force in newtons to a pressure.`,
      },
      {
        question: r`A cube with 10 cm sides hangs level in water (1000 kg/m³) with its top face 20 cm below the surface. Working from the gauge pressures on its top and bottom faces, what is the buoyant force on the cube? (g = 10 m/s²)`,
        options: [r`20 N`, r`30 N`, r`10 N`, r`50 N`],
        correctAnswer: 2,
        explanation: r`Each face is 0.10 × 0.10 = 0.010 m². The top is at 0.20 m (2,000 Pa, so 20 N down) and the bottom at 0.30 m (3,000 Pa, so 30 N up), giving $F_b$ = 30 − 20 = 10 N. 20 N and 30 N are the pushes on single faces, and 50 N adds them.`,
      },
      {
        question: r`A concrete block is held level in brine of density 1200 kg/m³ with its top face 1.0 m deep and its bottom face 3.0 m deep. Each of those faces has an area of 0.25 m². Working from the two face pressures, what is the buoyant force on the block? (g = 10 m/s²)`,
        options: [r`3,000 N`, r`9,000 N`, r`5,000 N`, r`6,000 N`],
        correctAnswer: 3,
        explanation: r`Gauge pressures: 12,000 Pa on top and 36,000 Pa below. Forces: 12,000 × 0.25 = 3,000 N down and 36,000 × 0.25 = 9,000 N up, so $F_b$ = 6,000 N. 3,000 N and 9,000 N are the pushes on single faces, and 5,000 N uses the density of water instead of brine.`,
      },
    ],
  },
  [r`Why is gauge pressure enough when you find a buoyant force from the face pressures?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A submerged block has level top and bottom faces of area 0.010 m² each. Switching from gauge to absolute pressure adds the air pressure, 100,000 Pa, at both faces. What does this do to the force on each face and to the buoyant force?`,
        options: [r`1,000 N more on each face; buoyant force unchanged`, r`1,000 N more on each face; buoyant force up 2,000 N`, r`1,000 N more on the top only; buoyant force down 1,000 N`, r`1,000 N more on the bottom only; buoyant force up 1,000 N`],
        correctAnswer: 0,
        explanation: r`The air pressure adds 100,000 × 0.010 = 1,000 N to the push down on the top and the same 1,000 N to the push up on the bottom, so the difference between them does not change. Adding the two extra pushes gives the false 2,000 N, and the air pressure never acts on one face alone, since it is passed through the water to both.`,
      },
      {
        question: r`A sealed rigid float is tied below the surface of a lake. A storm arrives and the air pressure above the lake drops by 3 kPa. What happens to the buoyant force on the float?`,
        options: [r`It falls, since the water now pushes less on the bottom face`, r`It rises, since the air now pushes less on the top face`, r`It stays the same, since both face pressures drop by 3 kPa`, r`It falls, since every pressure in the lake drops by 3 kPa`],
        correctAnswer: 2,
        explanation: r`The air pressure is part of the pressure at every depth, so the pushes on the top and the bottom of the float both drop by the same amount and their difference is unchanged. Each wrong answer looks at one face only or forgets that the buoyant force is a difference of two pushes, not their size.`,
      },
    ],
  },
  [r`What is the common trap when a buoyant force is found from the forces on a block's faces?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The water around a submerged storage tank pushes down on its flat top with 250 N and up on its flat bottom with 400 N. What is the buoyant force on the tank?`,
        options: [r`250 N`, r`150 N`, r`400 N`, r`650 N`],
        correctAnswer: 1,
        explanation: r`The buoyant force is the push up on the bottom minus the push down on the top: 400 − 250 = 150 N. 400 N is the trap of stopping at the bottom face, 250 N is the push on the top alone, and 650 N adds the two pushes.`,
      },
      {
        question: r`A submerged box has gauge pressures of 5,000 Pa on its top face and 9,000 Pa on its bottom face, and each face has an area of 0.020 m². A student multiplies 9,000 Pa by 0.020 m² and calls the result the buoyant force. What is the true buoyant force?`,
        options: [r`100 N`, r`180 N`, r`280 N`, r`80 N`],
        correctAnswer: 3,
        explanation: r`The student found only the push on the bottom, 180 N. The push on the top is 5,000 × 0.020 = 100 N, so $F_b$ = 180 − 100 = 80 N. 100 N is the top push alone and 280 N adds the two pushes instead of subtracting.`,
      },
      {
        question: r`A submerged engine block feels a buoyant force of 45 N, and the water pushes up on its bottom face with 120 N. How hard does the water push down on its top face?`,
        options: [r`75 N`, r`45 N`, r`120 N`, r`165 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force is the bottom push minus the top push, so the top push is 120 − 45 = 75 N. 120 N would leave no buoyant force, 45 N confuses the buoyant force with the top push, and 165 N adds where it should subtract.`,
      },
      {
        question: r`The sea pushes down on the top face of a submerged shipping crate with 320 N, and the buoyant force on the crate is 110 N. How hard does the sea push up on its bottom face?`,
        options: [r`110 N`, r`210 N`, r`430 N`, r`320 N`],
        correctAnswer: 2,
        explanation: r`The push on the bottom must beat the push on the top by the buoyant force: 320 + 110 = 430 N. 110 N takes the buoyant force itself to be the bottom push, which is the trap in reverse. 210 N subtracts, and 320 N would give no buoyant force.`,
      },
      {
        question: r`A block with level faces of area 0.050 m² is held under water (1000 kg/m³), its top face 0.60 m deep and its bottom face 0.80 m deep. A student writes "8,000 Pa × 0.050 m² = 400 N, so $F_b$ = 400 N". What is the correct buoyant force, and what should she change? (g = 10 m/s²)`,
        options: [r`700 N; she must add in the 300 N push on the top`, r`100 N; she must subtract the 300 N push on the top`, r`400 N; the push on the bottom is the buoyant force`, r`300 N; the push on the top is the buoyant force`],
        correctAnswer: 1,
        explanation: r`Her 400 N is only the push up on the bottom face. The top face, at 6,000 Pa, is pushed down with 6,000 × 0.050 = 300 N, so $F_b$ = 400 − 300 = 100 N. Adding the pushes gives 700 N, and neither single push is the buoyant force.`,
      },
      {
        question: r`The water pushes up on the bottom face of a submerged block with 240 N and down on its top face with 180 N. A student reports the push on the bottom face as the buoyant force. How does his value compare with the true buoyant force?`,
        options: [r`It is 2 times the true value`, r`It is 3 times the true value`, r`It is 4 times the true value`, r`It is equal to the true value`],
        correctAnswer: 2,
        explanation: r`The true buoyant force is 240 − 180 = 60 N, and the student's 240 N is 240 ÷ 60 = 4 times that. Three times compares the top push, 180 N, with 60 N. Stopping at the bottom face never gives the true value while there is any push on the top.`,
      },
    ],
  },
  [r`What unit must the volume have in $F_b = \rho V g$, and how do liters and cubic centimeters convert?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 6.0 L watermelon is pushed fully under the water (1000 kg/m³) of a rain barrel. What is the buoyant force on it? (g = 10 m/s²)`,
        options: [r`60 N`, r`6.0 N`, r`600 N`, r`60,000 N`],
        correctAnswer: 0,
        explanation: r`6.0 L = 6.0 × 10⁻³ m³, so $F_b$ = 1000 × 6.0 × 10⁻³ × 10 = 60 N. 60,000 N puts the volume in as 6.0 without converting, 6.0 N leaves out g, and 600 N converts liters with the wrong power of ten.`,
      },
      {
        question: r`A 50 cm³ ceramic weight sits fully submerged in brine of density 1200 kg/m³. What is the buoyant force on it? (g = 10 m/s²)`,
        options: [r`0.060 N`, r`0.50 N`, r`0.60 N`, r`6.0 N`],
        correctAnswer: 2,
        explanation: r`50 cm³ = 50 × 10⁻⁶ m³ = 5.0 × 10⁻⁵ m³, so $F_b$ = 1200 × 5.0 × 10⁻⁵ × 10 = 0.60 N. 0.50 N uses the density of water instead of brine, 0.060 N leaves out g, and 6.0 N converts cubic centimeters with the wrong power of ten.`,
      },
      {
        question: r`A toy submarine has a volume of 3,500 cm³. What value of $V$ goes into $F_b = \rho V g$ when the toy is fully submerged?`,
        options: [r`3.5 × 10⁻¹ m³`, r`3.5 × 10⁻³ m³`, r`3.5 × 10⁻⁶ m³`, r`3.5 × 10³ m³`],
        correctAnswer: 1,
        explanation: r`Each cubic centimeter is 10⁻⁶ m³, so 3,500 cm³ = 3.5 × 10³ × 10⁻⁶ = 3.5 × 10⁻³ m³, the same as 3.5 L. 3.5 × 10³ m³ leaves the number unconverted, 3.5 × 10⁻⁶ m³ drops the factor of 1,000 in 3,500, and 3.5 × 10⁻¹ m³ uses 10⁻⁴ per cubic centimeter.`,
      },
      {
        question: r`The upward push of a lake (1000 kg/m³) on a completely immersed thermos is 8.0 N. How many liters does the thermos occupy? (g = 10 m/s²)`,
        options: [r`0.080 L`, r`8.0 L`, r`80 L`, r`0.80 L`],
        correctAnswer: 3,
        explanation: r`$V = F_b / (\rho g)$ = 8.0 ÷ 10,000 = 8.0 × 10⁻⁴ m³, and each liter is 10⁻³ m³, so the thermos occupies 0.80 L. 8.0 L leaves out g, and 0.080 L and 80 L convert cubic meters to liters with the wrong power of ten.`,
      },
      {
        question: r`A 400 cm³ potato sinks in a pot of water (1000 kg/m³). What is the buoyant force on it once it is fully submerged? (g = 10 m/s²)`,
        options: [r`4.0 N`, r`0.40 N`, r`40 N`, r`4,000 N`],
        correctAnswer: 0,
        explanation: r`400 cm³ = 400 × 10⁻⁶ m³ = 4.0 × 10⁻⁴ m³, so $F_b$ = 1000 × 4.0 × 10⁻⁴ × 10 = 4.0 N. 0.40 N leaves out g, 40 N uses 10⁻⁵ per cubic centimeter, and 4,000 N treats the cubic centimeters as liters.`,
      },
      {
        question: r`A sealed 1.5 L flask is held fully under cooking oil of density 800 kg/m³. What is the buoyant force on the flask? (g = 10 m/s²)`,
        options: [r`1.2 N`, r`15 N`, r`12,000 N`, r`12 N`],
        correctAnswer: 3,
        explanation: r`1.5 L = 1.5 × 10⁻³ m³, so $F_b$ = 800 × 1.5 × 10⁻³ × 10 = 12 N. 12,000 N puts the volume in as 1.5 without converting, 15 N uses the density of water instead of the oil, and 1.2 N leaves out g.`,
      },
    ],
  },
  [r`How do you find the weight of a solid object from its density?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A solid iron ball of density 8000 kg/m³ and volume 5.0 × 10⁻⁴ m³ lies at the bottom of a bucket of water (1000 kg/m³). What is the ball's weight? (g = 10 m/s²)`,
        options: [r`4.0 N`, r`5.0 N`, r`35 N`, r`40 N`],
        correctAnswer: 3,
        explanation: r`The weight uses the object's own density: W = 8000 × 5.0 × 10⁻⁴ × 10 = 40 N. 5.0 N uses the water's density and is the buoyant force, 35 N subtracts that from the weight, and 4.0 N leaves out g.`,
      },
      {
        question: r`A solid metal casting has a volume of 2.0 × 10⁻³ m³ and a weight of 54 N. What is the density of the metal? (g = 10 m/s²)`,
        options: [r`270 kg/m³`, r`2,700 kg/m³`, r`1,080 kg/m³`, r`27,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`Rearranging $W = \rho_{\text{object}} V g$ gives $\rho$ = 54 ÷ (2.0 × 10⁻³ × 10) = 54 ÷ 0.020 = 2,700 kg/m³. 27,000 leaves out g, 1,080 multiplies 54 by 2.0 and by 10 instead of dividing, and 270 slips a power of ten.`,
      },
      {
        question: r`A solid oak beam of density 750 kg/m³ weighs 1,500 N. What is the beam's volume? (g = 10 m/s²)`,
        options: [r`0.020 m³`, r`0.15 m³`, r`0.20 m³`, r`2.0 m³`],
        correctAnswer: 2,
        explanation: r`$V = W / (\rho_{\text{object}} g)$ = 1,500 ÷ (750 × 10) = 0.20 m³. 2.0 m³ leaves out g, 0.15 m³ uses the density of water instead of the oak's own density, and 0.020 m³ slips a power of ten.`,
      },
      {
        question: r`A solid glass paperweight of density 2500 kg/m³ has a volume of 200 cm³. It is dropped into a tank of water (1000 kg/m³). What is the paperweight's weight? (g = 10 m/s²)`,
        options: [r`5.0 N`, r`2.0 N`, r`0.50 N`, r`50 N`],
        correctAnswer: 0,
        explanation: r`200 cm³ = 2.0 × 10⁻⁴ m³, and the weight uses the glass's density: W = 2500 × 2.0 × 10⁻⁴ × 10 = 5.0 N. 2.0 N uses the water's density and is the buoyant force, 0.50 N leaves out g, and 50 N converts the volume with the wrong power of ten.`,
      },
      {
        question: r`A block of ice of density 900 kg/m³ and total volume 0.030 m³ floats in fresh water (1000 kg/m³) with nine tenths of its volume below the surface. What is the weight of the ice? (g = 10 m/s²)`,
        options: [r`30 N`, r`243 N`, r`270 N`, r`300 N`],
        correctAnswer: 2,
        explanation: r`The weight uses the ice's own density and its whole volume: W = 900 × 0.030 × 10 = 270 N. 300 N uses the water's density with the whole volume, 243 N uses only the submerged 0.027 m³ with the ice's density, and 30 N leaves out the density of the ice.`,
      },
      {
        question: r`Two solid spheres are the same size. One is aluminum (2700 kg/m³) and weighs 6.0 N. The other is an alloy of density 10,800 kg/m³. What does the alloy sphere weigh?`,
        options: [r`6.0 N`, r`24 N`, r`1.5 N`, r`96 N`],
        correctAnswer: 1,
        explanation: r`With equal volumes the weight is proportional to the object's density, and 10,800 ÷ 2700 = 4, so the alloy sphere weighs 4 × 6.0 = 24 N. 6.0 N assumes equal size means equal weight, 1.5 N divides by 4, and 96 N multiplies by 4 squared.`,
      },
    ],
  },
  [r`How do you find the net force on a fully submerged object at the moment it is released?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A wooden block that weighs 6.0 N is held fully under water, where the buoyant force on it is 10 N. What is the net force on the block at the moment it is let go?`,
        options: [r`4.0 N downward`, r`16 N upward`, r`4.0 N upward`, r`16 N downward`],
        correctAnswer: 2,
        explanation: r`The buoyant force, 10 N up, is larger than the weight, 6.0 N down, so the net force is 10 − 6.0 = 4.0 N upward and the block rises. A downward 4.0 N takes the weight to be the larger force, and 16 N adds the two forces although they point opposite ways.`,
      },
      {
        question: r`A diver lets a 5.0 kg dive weight that occupies 2.0 × 10⁻³ m³ slip from her hand, completely beneath the surface of a lake (1000 kg/m³). What net force acts on it at that instant? (g = 10 m/s²)`,
        options: [r`30 N downward`, r`20 N upward`, r`50 N downward`, r`70 N downward`],
        correctAnswer: 0,
        explanation: r`The weight is 5.0 × 10 = 50 N down and the buoyant force is 1000 × 2.0 × 10⁻³ × 10 = 20 N up, so the net force is 30 N downward. 20 N upward is the buoyant force alone, 50 N downward is the weight alone, and 70 N adds the two.`,
      },
      {
        question: r`A swimmer pulls a foam pool toy of density 250 kg/m³, which occupies 4.0 × 10⁻³ m³, completely beneath the surface of a pool (1000 kg/m³) and lets go. What net force acts on the toy at that instant? (g = 10 m/s²)`,
        options: [r`10 N downward`, r`40 N upward`, r`50 N upward`, r`30 N upward`],
        correctAnswer: 3,
        explanation: r`The weight is 250 × 4.0 × 10⁻³ × 10 = 10 N down and the buoyant force is 1000 × 4.0 × 10⁻³ × 10 = 40 N up, so the net force is 30 N upward. 10 N downward is the weight alone, 40 N upward is the buoyant force alone, and 50 N adds them.`,
      },
      {
        question: r`A sealed capsule of mass 12 kg and volume 0.012 m³ is let go at rest while fully under water (1000 kg/m³). What is the net force on it, and what does it do? (g = 10 m/s²)`,
        options: [r`120 N, so it rises`, r`Zero, so it hovers`, r`120 N, so it sinks`, r`240 N, so it sinks`],
        correctAnswer: 1,
        explanation: r`The weight is 12 × 10 = 120 N down and the buoyant force is 1000 × 0.012 × 10 = 120 N up. They are equal, so the net force is zero and the capsule stays where it is. The 120 N answers count only one of the two forces, and 240 N adds them.`,
      },
      {
        question: r`An object weighing 28 N is let go while fully under water, and at that moment the net force on it is 12 N upward. What is the buoyant force on the object?`,
        options: [r`12 N`, r`16 N`, r`28 N`, r`40 N`],
        correctAnswer: 3,
        explanation: r`The net force points up, so the buoyant force is the larger one: $F_b$ − 28 = 12, which gives $F_b$ = 40 N. 16 N subtracts the net force from the weight, which would make the object sink. 12 N is the net force and 28 N is the weight.`,
      },
      {
        question: r`A 2.0 kg plastic ball of volume 4.0 × 10⁻³ m³ is let go while fully under oil of density 800 kg/m³. What is the net force on the ball at that moment? (g = 10 m/s²)`,
        options: [r`12 N upward`, r`12 N downward`, r`20 N upward`, r`52 N upward`],
        correctAnswer: 0,
        explanation: r`The weight is 2.0 × 10 = 20 N down and the buoyant force is 800 × 4.0 × 10⁻³ × 10 = 32 N up, so the net force is 32 − 20 = 12 N upward. 12 N downward reverses the direction, 20 N upward uses the density of water for the buoyant force, and 52 N adds the two forces.`,
      },
    ],
  },
  [r`An object stays fully submerged while the fluid around it is swapped for a denser one. What happens to the buoyant force?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lead sinker feels a buoyant force of 20 N while fully submerged in oil of density 800 kg/m³. It is moved to a tank of water (1000 kg/m³) and is again fully submerged. What is the buoyant force on it in the water?`,
        options: [r`16 N`, r`25 N`, r`20 N`, r`45 N`],
        correctAnswer: 1,
        explanation: r`With the same submerged volume, the buoyant force scales with the fluid's density: 20 × (1000 ÷ 800) = 20 × 1.25 = 25 N. 16 N inverts the ratio, 20 N assumes the fluid does not matter, and 45 N adds the two results instead of scaling.`,
      },
      {
        question: r`A steel bearing feels a buoyant force of 8.0 N while fully submerged in water (1000 kg/m³). What buoyant force does it feel fully submerged in glycerin of density 1250 kg/m³?`,
        options: [r`6.4 N`, r`8.0 N`, r`10 N`, r`12.5 N`],
        correctAnswer: 2,
        explanation: r`The force grows in proportion to the fluid's density: 8.0 × (1250 ÷ 1000) = 8.0 × 1.25 = 10 N. 6.4 N divides by 1.25 instead of multiplying, 8.0 N assumes no change, and 12.5 N applies the factor of 1.25 twice.`,
      },
      {
        question: r`A glass test mass feels a buoyant force of 30 N fully submerged in water (1000 kg/m³) and 39 N fully submerged in an unknown liquid. What is the density of the unknown liquid?`,
        options: [r`1,300 kg/m³`, r`770 kg/m³`, r`1,090 kg/m³`, r`1,390 kg/m³`],
        correctAnswer: 0,
        explanation: r`The submerged volume is the same, so the densities are in the ratio of the forces: 39 ÷ 30 = 1.3, and 1.3 × 1000 = 1,300 kg/m³. About 770 kg/m³ inverts the ratio, while 1,090 and 1,390 kg/m³ add the force difference or the force itself to the density of water.`,
      },
      {
        question: r`A swimmer holds a rock fully under fresh water (1000 kg/m³) and later holds the same rock fully under very salty water of density 1240 kg/m³. How does the buoyant force in the salty water compare?`,
        options: [r`It is 19% larger`, r`It is 19% smaller`, r`It is 124% larger`, r`It is 24% larger`],
        correctAnswer: 3,
        explanation: r`The force is proportional to the fluid's density, and 1240 ÷ 1000 = 1.24, so it is 24% larger in the salty water. 19% comes from dividing the 240 by 1240 instead of 1000, a smaller force gets the direction wrong, and 124% larger would mean the force more than doubled.`,
      },
      {
        question: r`A steel bolt feels a buoyant force of 0.50 N while fully submerged in water (1000 kg/m³). It is then pushed fully under mercury of density 13,600 kg/m³ and held there. What is the buoyant force on it in the mercury?`,
        options: [r`0.50 N`, r`6.8 N`, r`13.6 N`, r`68 N`],
        correctAnswer: 1,
        explanation: r`Mercury is 13.6 times as dense as water, so the buoyant force on the same submerged volume is 13.6 × 0.50 = 6.8 N. 0.50 N assumes the fluid does not matter, 13.6 N forgets to multiply by the original 0.50 N, and 68 N slips a power of ten.`,
      },
      {
        question: r`A fully submerged valve feels a buoyant force of 18 N in a solvent of density 900 kg/m³. The tank is drained and refilled with a liquid of density 1350 kg/m³, and the valve is again fully submerged. What is the buoyant force now?`,
        options: [r`12 N`, r`18 N`, r`27 N`, r`40.5 N`],
        correctAnswer: 2,
        explanation: r`The density ratio is 1350 ÷ 900 = 1.5, so the buoyant force becomes 1.5 × 18 = 27 N. 12 N divides by 1.5 instead of multiplying, 18 N assumes no change, and 40.5 N applies the factor of 1.5 twice.`,
      },
    ],
  },
}
