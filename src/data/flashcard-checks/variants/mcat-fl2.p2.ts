import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for the average density of an object, and what is its SI unit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed steel thermos, empty except for air, has a mass of 1.2 kg and an outer volume of 1.5 × 10⁻³ m³. What is its average density $\rho_{\text{object}}$?`,
        options: [r`80 kg/m³`, r`800 kg/m³`, r`1,250 kg/m³`, r`8,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`Average density is total mass over total volume, air space included: 1.2 kg ÷ 1.5 × 10⁻³ m³ = 800 kg/m³. The value 1,250 divides the volume by the mass, 8,000 is the density of the steel alone, and 80 slips a power of ten.`,
      },
      {
        question: r`A hollow fishing float has an outer volume of 2.0 × 10⁻⁴ m³, and its average density $\rho_{\text{object}}$ is 250 kg/m³. What is the float's mass?`,
        options: [r`0.50 kg`, r`0.80 kg`, r`5.0 kg`, r`0.050 kg`],
        correctAnswer: 3,
        explanation: r`Mass is average density times total volume: 250 kg/m³ × 2.0 × 10⁻⁴ m³ = 0.050 kg. The values 0.50 kg and 5.0 kg slip one and two powers of ten, and 0.80 comes from dividing 200 by 250 instead of multiplying.`,
      },
      {
        question: r`A sealed research buoy has a total mass of 150 kg, instruments and trapped air included. Its designers want an average density of 500 kg/m³. What outer volume must the buoy have?`,
        options: [r`0.30 m³`, r`3.3 m³`, r`0.030 m³`, r`75,000 m³`],
        correctAnswer: 0,
        explanation: r`Volume is mass over average density: 150 kg ÷ 500 kg/m³ = 0.30 m³. The value 3.3 m³ turns the division upside down, 75,000 multiplies the two numbers, and 0.030 m³ loses a power of ten.`,
      },
      {
        question: r`A sealed plastic toy egg has a mass of 30 g and an outer volume of 40 cm³, most of it air. What is its average density in SI units? (1 g/cm³ = 1000 kg/m³)`,
        options: [r`0.75 kg/m³`, r`1,330 kg/m³`, r`750 kg/m³`, r`75 kg/m³`],
        correctAnswer: 2,
        explanation: r`30 g ÷ 40 cm³ = 0.75 g/cm³, and each g/cm³ is 1000 kg/m³, so the average density is 750 kg/m³. Writing 0.75 kg/m³ skips the conversion, 1,330 kg/m³ divides volume by mass, and 75 kg/m³ converts with the wrong power of ten.`,
      },
      {
        question: r`A capped glass vial holds only air of negligible mass. The glass has a mass of 20 g and takes up 8.0 cm³, and the vial's outer volume is 50 cm³. What average density decides whether the vial floats?`,
        options: [r`2.5 g/cm³`, r`0.48 g/cm³`, r`0.40 g/cm³`, r`0.16 g/cm³`],
        correctAnswer: 2,
        explanation: r`The average density uses the total mass and the total outer volume, air space included: 20 g ÷ 50 cm³ = 0.40 g/cm³. The value 2.5 g/cm³ is the density of the glass alone, 0.48 leaves the glass's own volume out of the total, and 0.16 divides one volume by the other.`,
      },
      {
        question: r`A sealed dry bag of total mass 6.0 kg is inflated from an outer volume of 10 L to 40 L with air of negligible mass. What is its average density once inflated? (1 L = 10⁻³ m³)`,
        options: [r`150 kg/m³`, r`2,400 kg/m³`, r`240 kg/m³`, r`15 kg/m³`],
        correctAnswer: 0,
        explanation: r`The mass stays 6.0 kg while the volume becomes 40 L = 0.040 m³, so the average density is 6.0 ÷ 0.040 = 150 kg/m³, one quarter of the original 600 kg/m³. The value 2,400 multiplies by 4 instead of dividing, 240 multiplies 6.0 by 40, and 15 mishandles the liter conversion.`,
      },
    ],
  },
  [r`What symbol stands for specific gravity, and what is its SI unit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bottle of olive oil is labeled SG = 0.92. Water has a density of 1000 kg/m³. What is the density of the olive oil?`,
        options: [r`0.92 kg/m³`, r`1,087 kg/m³`, r`9,200 kg/m³`, r`920 kg/m³`],
        correctAnswer: 3,
        explanation: r`Specific gravity is a density divided by water's, so the oil's density is 0.92 × 1000 kg/m³ = 920 kg/m³. Writing 0.92 kg/m³ treats the unitless ratio as a density, 1,087 divides water's density by 0.92, and 9,200 slips a power of ten.`,
      },
      {
        question: r`A mineral sample has a mass of 54 g and a volume of 20 cm³. Water has a density of 1.0 g/cm³. How should a lab notebook record the mineral's specific gravity?`,
        options: [r`2.7 g/cm³`, r`2.7, with no unit`, r`0.37, with no unit`, r`2,700 kg/m³`],
        correctAnswer: 1,
        explanation: r`The mineral's density is 54 ÷ 20 = 2.7 g/cm³, and dividing by water's 1.0 g/cm³ cancels the unit, leaving SG = 2.7. The entries in g/cm³ and kg/m³ are densities, not specific gravities, and 0.37 puts water's density on top.`,
      },
      {
        question: r`Whole milk has a specific gravity of 1.03, and one liter of water has a mass of 1000 g. A 2.0 L carton is filled with milk instead of water. How much more mass does the carton hold?`,
        options: [r`60 g`, r`30 g`, r`3.0 g`, r`600 g`],
        correctAnswer: 0,
        explanation: r`An SG of 1.03 means each liter of milk has 1.03 times the mass of a liter of water: 1030 g, which is 30 g more. Over 2.0 L the extra is 60 g. The value 30 g counts only one liter, while 3.0 g and 600 g read the extra 3% as 0.3% and as 30%.`,
      },
      {
        question: r`Liquid A has a specific gravity of 0.80 and liquid B has a specific gravity of 1.20. What is the ratio of liquid B's density to liquid A's density?`,
        options: [r`0.67`, r`1.5`, r`0.40`, r`0.96`],
        correctAnswer: 1,
        explanation: r`Both specific gravities are measured against the same water density, so the density ratio is just 1.20 ÷ 0.80 = 1.5. The value 0.67 is the ratio of A to B, 0.40 is the difference of the two numbers, and 0.96 is their product.`,
      },
      {
        question: r`A fuel tank with a volume of 0.040 m³ is filled by 30 kg of fuel. Water has a density of 1000 kg/m³. What is the specific gravity of the fuel?`,
        options: [r`1.33`, r`7.5`, r`0.75`, r`0.075`],
        correctAnswer: 2,
        explanation: r`The fuel's density is 30 kg ÷ 0.040 m³ = 750 kg/m³, and dividing by water's 1000 kg/m³ gives SG = 0.75. The value 1.33 puts water's density on top, while 7.5 and 0.075 each slip a power of ten.`,
      },
      {
        question: r`An antifreeze mixture has a specific gravity of 1.1. One liter of water has a mass of 1.0 kg. What volume does 2.2 kg of the antifreeze occupy?`,
        options: [r`2.4 L`, r`0.50 L`, r`20 L`, r`2.0 L`],
        correctAnswer: 3,
        explanation: r`An SG of 1.1 means the antifreeze has 1.1 kg in each liter, so 2.2 kg fills 2.2 ÷ 1.1 = 2.0 L. The value 2.4 L multiplies by 1.1 instead of dividing, 0.50 L divides 1.1 by 2.2, and 20 L slips a power of ten.`,
      },
    ],
  },
  [r`How do you predict whether an object will float, hover or sink in a fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed sample jar has a mass of 0.60 kg and an outer volume of 5.0 × 10⁻⁴ m³. A diver lets go of it underwater in a freshwater lake (1000 kg/m³). What does the jar do?`,
        options: [r`Its average density is 830 kg/m³, so it rises`, r`Its average density is 830 kg/m³, so it sinks`, r`Its average density is 1,200 kg/m³, so it rises`, r`Its average density is 1,200 kg/m³, so it sinks`],
        correctAnswer: 3,
        explanation: r`The jar's average density is 0.60 kg ÷ 5.0 × 10⁻⁴ m³ = 1,200 kg/m³, which is above the water's 1000 kg/m³, so it sinks. The 830 kg/m³ options divide the volume by the mass, and a 1,200 kg/m³ object cannot rise in a less dense fluid.`,
      },
      {
        question: r`A plastic bead of density 950 kg/m³ is released in the middle of three beakers: oil (920 kg/m³), water (1000 kg/m³) and glycerin (1260 kg/m³). What does the bead do?`,
        options: [r`It rises in the oil and sinks in the other two`, r`It sinks to the bottom in all three liquids`, r`It sinks in the oil and rises in the other two`, r`It rises to the surface in all three liquids`],
        correctAnswer: 2,
        explanation: r`The bead is denser than the oil (950 above 920), so it sinks there, and less dense than the water and the glycerin, so it rises in both. The reversed option compares the densities the wrong way around, and the all-or-nothing options ignore that the result depends on each liquid.`,
      },
      {
        question: r`An underwater drone has a sealed volume of 0.020 m³. Its operator wants it to hover, neither rising nor sinking, in seawater of density 1025 kg/m³. What total mass must the drone have?`,
        options: [r`19.5 kg`, r`20.5 kg`, r`20.0 kg`, r`51 kg`],
        correctAnswer: 1,
        explanation: r`To hover, the drone's average density must equal the seawater's, so its mass is 1025 kg/m³ × 0.020 m³ = 20.5 kg. A mass of 20.0 kg matches fresh water and would rise here, 19.5 kg moves the 0.5 kg the wrong way, and 51 kg comes from dividing 1025 by 20.`,
      },
      {
        question: r`A melon has a mass of 3.0 kg and a volume of 3.2 L. It is dropped into a tub of fresh water, which has a density of 1.0 kg/L. What does the melon do?`,
        options: [r`It floats, since 0.94 kg/L is less than 1.0 kg/L`, r`It sinks, since 1.07 kg/L is more than 1.0 kg/L`, r`It hovers, since 3.0 and 3.2 are close to equal`, r`It sinks, since 3.0 kg is more than 1.0 kg/L`],
        correctAnswer: 0,
        explanation: r`The melon's average density is 3.0 kg ÷ 3.2 L = 0.94 kg/L, below the water's, so it rises and floats partly submerged. The 1.07 value divides volume by mass, hovering needs the densities to be exactly equal, and a mass cannot be compared with a density.`,
      },
      {
        question: r`A raw egg of average density 1080 kg/m³ rests on the bottom of a glass of fresh water. Salt is stirred in until the brine's density reaches 1100 kg/m³. What does the egg do now?`,
        options: [r`It stays resting on the bottom of the glass`, r`It rises and floats while partly submerged`, r`It hovers wherever it is put in the brine`, r`It rises and floats entirely above the brine`],
        correctAnswer: 1,
        explanation: r`At 1100 kg/m³ the brine is denser than the egg (1080 kg/m³), so the egg rises and floats with part of it under the surface. It would stay down only in a less dense liquid and hover only at exactly 1080 kg/m³, and a floating object always keeps some volume submerged.`,
      },
      {
        question: r`A weather balloon and its gas have a total mass of 240 kg and a volume of 250 m³. The surrounding air has a density of 1.2 kg/m³. What does the balloon do when it is released?`,
        options: [r`It sinks, since 240 kg/m³ is above 1.2 kg/m³`, r`It hovers, since 240 and 250 are nearly equal`, r`It hovers, since 0.96 kg/m³ is close to 1.2 kg/m³`, r`It rises, since 0.96 kg/m³ is below 1.2 kg/m³`],
        correctAnswer: 3,
        explanation: r`The balloon's average density is 240 kg ÷ 250 m³ = 0.96 kg/m³, below the air's 1.2 kg/m³, so it rises. Treating 240 as a density forgets to divide by the volume, and hovering needs exactly equal densities, not close ones.`,
      },
    ],
  },
  [r`Why does a steel ship float when a solid block of steel sinks?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed, empty drum is made from 20 kg of steel (8000 kg/m³) and encloses a total volume of 0.20 m³. Which density should be compared with water's to decide whether the drum floats?`,
        options: [r`100 kg/m³`, r`8,000 kg/m³`, r`1,600 kg/m³`, r`10 kg/m³`],
        correctAnswer: 0,
        explanation: r`What matters is the drum's average density, total mass over total enclosed volume: 20 kg ÷ 0.20 m³ = 100 kg/m³, far below water's. The 8,000 kg/m³ figure is the steel alone, which is the trap, 1,600 multiplies 8000 by 0.20, and 10 slips a power of ten.`,
      },
      {
        question: r`A 27 g sheet of aluminum (2.7 g/cm³) is folded into a toy boat that encloses 90 cm³, then crushed into a solid ball of 10 cm³. What is its average density in each shape?`,
        options: [r`2.7 g/cm³ as a boat, 2.7 g/cm³ as a ball`, r`0.30 g/cm³ as a boat, 0.30 g/cm³ as a ball`, r`0.30 g/cm³ as a boat, 2.7 g/cm³ as a ball`, r`2.7 g/cm³ as a boat, 0.30 g/cm³ as a ball`],
        correctAnswer: 2,
        explanation: r`As a boat the 27 g is spread over 90 cm³, air included, giving 0.30 g/cm³, so it floats in water. As a solid ball it is 27 g ÷ 10 cm³ = 2.7 g/cm³, so it sinks. Using 2.7 g/cm³ for the boat is the trap of taking the metal's density instead of the whole shape's.`,
      },
      {
        question: r`A racing canoe is cast from 120 kg of concrete (2400 kg/m³). Above what total enclosed volume, air space included, is the canoe's average density below that of fresh water (1000 kg/m³)?`,
        options: [r`0.050 m³`, r`2.4 m³`, r`0.12 m³`, r`1.2 m³`],
        correctAnswer: 2,
        explanation: r`The average density is 120 kg over the total volume, and it drops below 1000 kg/m³ once that volume passes 120 ÷ 1000 = 0.12 m³. The value 0.050 m³ is the volume of the concrete itself, 2.4 m³ divides the two densities, and 1.2 m³ slips a power of ten.`,
      },
      {
        question: r`A freighter's hull has a mass of 6.0 × 10⁶ kg and a total volume of 2.0 × 10⁴ m³. It takes on 1.0 × 10⁷ kg of cargo. What is the loaded ship's average density, and does it float in water (1000 kg/m³)?`,
        options: [r`800 kg/m³, so it still floats`, r`500 kg/m³, so it still floats`, r`1,250 kg/m³, so it now sinks`, r`8,000 kg/m³, so it now sinks`],
        correctAnswer: 0,
        explanation: r`The total mass is 6.0 × 10⁶ + 1.0 × 10⁷ = 1.6 × 10⁷ kg, and 1.6 × 10⁷ ÷ 2.0 × 10⁴ = 800 kg/m³, still below water's. The 500 kg/m³ figure counts the cargo but not the hull, 1,250 turns the division over, and 8,000 is the density of steel, not of the ship.`,
      },
      {
        question: r`A steel lifeboat has a mass of 800 kg and a total volume of 2.0 m³. A leak lets 1.5 m³ of water (1000 kg/m³) into the hull. Counting that water as part of the boat, what happens to its average density?`,
        options: [r`It stays at 400 kg/m³, so the boat floats`, r`It rises to 750 kg/m³, so the boat floats`, r`It rises to 1,600 kg/m³, so the boat sinks`, r`It rises to 1,150 kg/m³, so the boat sinks`],
        correctAnswer: 3,
        explanation: r`The water adds 1,500 kg, so the total is 2,300 kg in the same 2.0 m³: 1,150 kg/m³, above water's, and the boat sinks. Replacing the enclosed air with water is what removes the low average density. The 750 figure leaves out the boat's own mass, and 1,600 divides 800 kg by the 0.5 m³ of air left.`,
      },
      {
        question: r`A solid block of steel (8000 kg/m³) is rolled thin and welded into a sealed hollow box with the same mass and 16 times the outer volume. What is the box's average density, and what does it do in water (1000 kg/m³)?`,
        options: [r`8,000 kg/m³, so it sinks`, r`500 kg/m³, so it floats`, r`2,000 kg/m³, so it sinks`, r`128,000 kg/m³, so it sinks`],
        correctAnswer: 1,
        explanation: r`The same mass in 16 times the volume gives 8000 ÷ 16 = 500 kg/m³, below water's, so the box floats. Keeping 8,000 kg/m³ uses the steel's density instead of the whole box's, 2,000 divides by 4 instead of 16, and 128,000 multiplies by 16.`,
      },
    ],
  },
  [r`How do a fish and a swimmer change whether they rise, hover or sink?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A scuba diver hovers at rest in mid-water and wants to start rising without kicking. Which action works, and why?`,
        options: [r`Add air to the vest, raising his volume at the same mass`, r`Vent air from the vest, lowering his volume at the same mass`, r`Add lead to the belt, raising his mass at the same volume`, r`Hold still, since a hovering body drifts upward over time`],
        correctAnswer: 0,
        explanation: r`Adding air to the vest increases the diver's volume with almost no added mass, so his average density drops below the water's and he rises, just as a fish does by adding gas to its swim bladder. Venting air or adding lead raises his average density and makes him sink, and a hovering body stays where it is.`,
      },
      {
        question: r`A fish hovering near the surface swims down to deeper water, where the higher pressure squeezes the gas in its swim bladder into a smaller volume. What must the fish do to hover at the new depth?`,
        options: [r`Release gas from the bladder to bring its density back down`, r`Add gas to the bladder to bring its density back down`, r`Add gas to the bladder to raise its density even further`, r`Release gas from the bladder to raise its density further`],
        correctAnswer: 1,
        explanation: r`The squeezed bladder gives the fish less volume at the same mass, so its average density has gone up and it tends to sink. Adding gas restores the volume and brings the average density back down to the water's. Releasing gas would shrink the bladder more, and adding gas lowers the density, it does not raise it.`,
      },
    ],
  },
  [r`What force balance holds for any object floating at rest?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A log floats at rest on a pond, and the buoyant force on it is $F_b$ = 450 N. What is the log's mass? (g = 10 m/s²)`,
        options: [r`4.5 kg`, r`450 kg`, r`45 kg`, r`4,500 kg`],
        correctAnswer: 2,
        explanation: r`For an object floating at rest $F_b = mg$, so m = 450 N ÷ 10 m/s² = 45 kg. The value 450 kg treats the force as a mass, 4,500 kg multiplies by g instead of dividing, and 4.5 kg divides by g twice.`,
      },
      {
        question: r`A raft floats at rest with 0.30 m³ of its volume below the surface of a freshwater lake (1000 kg/m³). What is the raft's weight? (g = 10 m/s²)`,
        options: [r`30 N`, r`300 N`, r`30,000 N`, r`3,000 N`],
        correctAnswer: 3,
        explanation: r`The weight equals the buoyant force, $\rho_{\text{fluid}} V_{\text{sub}}\, g$ = 1000 × 0.30 × 10 = 3,000 N. The value 300 leaves out g and is the raft's mass in kg, while 30 N and 30,000 N slip powers of ten.`,
      },
      {
        question: r`A 2.0 kg toy boat floats at rest in a bathtub. A 0.50 kg action figure is set on its deck, and the boat again floats at rest. What is the buoyant force on the boat now? (g = 10 m/s²)`,
        options: [r`5.0 N`, r`20 N`, r`2.5 N`, r`25 N`],
        correctAnswer: 3,
        explanation: r`The buoyant force must balance the total weight it supports: (2.0 + 0.50) kg × 10 m/s² = 25 N. The value 20 N ignores the figure, 5.0 N counts only the figure, and 2.5 is the total mass in kg without multiplying by g.`,
      },
      {
        question: r`An 80 g apple floats at rest in a bucket of water. What is the buoyant force on the apple? (g = 10 m/s²)`,
        options: [r`800 N`, r`8.0 N`, r`0.80 N`, r`0.080 N`],
        correctAnswer: 2,
        explanation: r`Convert first: 80 g = 0.080 kg, so $F_b = mg$ = 0.080 × 10 = 0.80 N. The value 800 N uses grams as if they were kilograms, 8.0 N converts with the wrong power of ten, and 0.080 is the mass in kg without the factor of g.`,
      },
      {
        question: r`In a rotating space station the effective gravitational field strength is g = 2.0 m/s². A 5.0 kg float rests on the surface of a water tank there. What is the buoyant force on it?`,
        options: [r`50 N`, r`10 N`, r`2.5 N`, r`0 N`],
        correctAnswer: 1,
        explanation: r`Floating at rest still means $F_b = mg$, with the local g: 5.0 kg × 2.0 m/s² = 10 N. The value 50 N uses Earth's g of 10 m/s², 2.5 N divides the mass by g, and the force is not zero because the float still has weight to balance.`,
      },
      {
        question: r`A 900 N paddleboarder stands on a 100 N board, and the board floats at rest on a lake. What is the buoyant force on the board?`,
        options: [r`1,000 N`, r`900 N`, r`800 N`, r`100 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force balances everything the water holds up: 900 N + 100 N = 1,000 N. The value 900 N leaves out the board, 100 N leaves out the rider, and 800 N subtracts the two weights instead of adding them.`,
      },
    ],
  },
  [r`An object is set down on a fluid and settles into it. Why does it stop where it does?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 N plastic block is set on a pool and is still settling. At one instant it has displaced 8 N of water. How much more water, by weight, must it displace before it can come to rest?`,
        options: [r`8 N`, r`4 N`, r`12 N`, r`20 N`],
        correctAnswer: 1,
        explanation: r`The block stops when it has displaced its own weight of water, 12 N. It has displaced 8 N so far, so it needs 12 − 8 = 4 N more. The value 12 N is the total, not the amount still needed, 8 N is what is already displaced, and 20 N adds the two.`,
      },
      {
        question: r`A 0.50 kg bath toy with a total volume of 800 cm³ is set on water (1.0 g/cm³) and settles. What volume of water has it displaced when it comes to rest?`,
        options: [r`300 cm³`, r`800 cm³`, r`1,300 cm³`, r`500 cm³`],
        correctAnswer: 3,
        explanation: r`It stops when it has displaced its own weight of water: 500 g of water, which is 500 cm³. The value 800 cm³ is the toy's whole volume, which it would displace only if pushed fully under, 300 cm³ is the part left above the surface, and 1,300 adds the two.`,
      },
      {
        question: r`A 30 N marker buoy is set on a vat of oil of density 800 kg/m³ and settles until it floats at rest. What weight of oil has it displaced?`,
        options: [r`30 N`, r`24 N`, r`38 N`, r`6 N`],
        correctAnswer: 0,
        explanation: r`A floating object settles until it has displaced its own weight of fluid, so the buoy displaces 30 N of oil whatever the oil's density. The value 24 N multiplies by 0.80, 38 N divides by 0.80, and 6 N is the difference between 30 and 24. The lower density changes the volume displaced, not the weight.`,
      },
      {
        question: r`A 2.0 N bowl floats at rest in a sink. Coins weighing 3.0 N are placed in it, and it settles deeper and comes to rest again. How much more water, by weight, does the bowl displace than before?`,
        options: [r`1.0 N`, r`2.0 N`, r`3.0 N`, r`5.0 N`],
        correctAnswer: 2,
        explanation: r`The bowl sinks in until the displaced water's weight matches the new total, 5.0 N. It was already displacing 2.0 N, so the extra is 3.0 N, exactly the weight of the coins. The value 5.0 N is the new total, 2.0 N is the old amount, and 1.0 N subtracts the wrong pair.`,
      },
      {
        question: r`A 6.0 N upright cylinder is set on water. Each centimeter that it sinks in displaces another 1.5 N of water. How deep is its base below the surface when it comes to rest?`,
        options: [r`9.0 cm`, r`0.25 cm`, r`4.0 cm`, r`7.5 cm`],
        correctAnswer: 2,
        explanation: r`The buoyant force grows by 1.5 N for each centimeter, and the cylinder stops when that force reaches its 6.0 N weight: 6.0 ÷ 1.5 = 4.0 cm. The value 9.0 multiplies the numbers, 0.25 turns the division upside down, and 7.5 adds them.`,
      },
      {
        question: r`A 2.0 kg block is set on water and is sinking in. At one instant it has displaced 0.50 kg of water. What is the buoyant force then, and what happens next? (g = 10 m/s²)`,
        options: [r`5 N, less than its 20 N weight, so it sinks in further`, r`5 N, equal to the water's weight, so it stops right here`, r`20 N, equal to the block's weight, so it stops right here`, r`15 N, the gap between the two, so it sinks in further`],
        correctAnswer: 0,
        explanation: r`The buoyant force equals the weight of the water displaced so far, 0.50 × 10 = 5 N, which is less than the block's 20 N weight, so the block keeps sinking in until it has displaced 2.0 kg of water. It stops only when the buoyant force matches its own weight, and 15 N is the net force, not the buoyant force.`,
      },
    ],
  },
  [r`Write the submerged fraction of a floating object as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A teak plank of density 840 kg/m³ floats at rest in a dense salt solution of density 1200 kg/m³. What fraction of the plank's volume, $V_{\text{sub}}/V$, lies below the surface?`,
        options: [r`0.30`, r`1.43`, r`0.84`, r`0.70`],
        correctAnswer: 3,
        explanation: r`The submerged fraction is the object's density over the fluid's: 840 ÷ 1200 = 0.70. The value 1.43 turns the ratio upside down, 0.84 divides by water's density instead of the solution's, and 0.30 is the part above the surface.`,
      },
      {
        question: r`A marker float of density 600 kg/m³ rests on an unknown liquid with exactly half of its volume below the surface. What is the liquid's density?`,
        options: [r`300 kg/m³`, r`1,200 kg/m³`, r`600 kg/m³`, r`1,100 kg/m³`],
        correctAnswer: 1,
        explanation: r`From $V_{\text{sub}}/V = \rho_{\text{object}}/\rho_{\text{fluid}}$, the fluid's density is 600 ÷ 0.50 = 1,200 kg/m³. The value 300 multiplies by one half instead of dividing, 600 would make the float hover fully submerged, and 1,100 adds 500 to 600.`,
      },
      {
        question: r`A log with a volume of 2.0 m³ and a density of 650 kg/m³ floats at rest in a freshwater river (1000 kg/m³). What is its submerged volume $V_{\text{sub}}$?`,
        options: [r`1.3 m³`, r`0.70 m³`, r`3.1 m³`, r`0.65 m³`],
        correctAnswer: 0,
        explanation: r`The submerged fraction is 650 ÷ 1000 = 0.65, so $V_{\text{sub}}$ = 0.65 × 2.0 m³ = 1.3 m³. The value 0.70 m³ is the volume above the water, 3.1 m³ divides by 0.65 and exceeds the log's whole volume, and 0.65 is the fraction, not the volume.`,
      },
      {
        question: r`A steel ball bearing of density 7800 kg/m³ floats at rest on a dish of mercury, which has a density of 13,000 kg/m³. What fraction of the bearing's volume is submerged?`,
        options: [r`0.40`, r`0.60`, r`1.67`, r`0.78`],
        correctAnswer: 1,
        explanation: r`The fraction is the bearing's density over the mercury's: 7800 ÷ 13,000 = 0.60. The value 1.67 turns the ratio over, 0.40 is the part above the mercury, and 0.78 divides by 10,000 instead of 13,000.`,
      },
      {
        question: r`A plastic bottle cap of density 0.45 g/cm³ floats at rest on cooking oil of density 0.90 g/cm³. What fraction of the cap's volume is below the oil's surface?`,
        options: [r`0.45`, r`2.0`, r`0.50`, r`0.41`],
        correctAnswer: 2,
        explanation: r`Object over fluid: 0.45 ÷ 0.90 = 0.50. The value 0.45 compares the cap with water instead of with the oil, 2.0 puts the oil's density on top, and 0.41 multiplies the two densities.`,
      },
      {
        question: r`A foam float of density 250 kg/m³ sits at rest in fresh water (1000 kg/m³) with 3.0 L of its volume below the surface. What is the float's whole volume $V$?`,
        options: [r`0.75 L`, r`4.0 L`, r`9.0 L`, r`12 L`],
        correctAnswer: 3,
        explanation: r`The submerged fraction is 250 ÷ 1000 = 0.25, so 3.0 L is one quarter of the float and $V$ = 3.0 ÷ 0.25 = 12 L. The value 0.75 L multiplies by 0.25, 9.0 L is only the part above the water, and 4.0 L divides by 0.75.`,
      },
    ],
  },
  [r`Does the density ratio of a floating object give the part below the surface or the part above it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A maple block of density 850 kg/m³ floats at rest in fresh water (1000 kg/m³). What percentage of the block's volume is above the water?`,
        options: [r`85%`, r`118%`, r`18%`, r`15%`],
        correctAnswer: 3,
        explanation: r`The density ratio, 850 ÷ 1000 = 85%, is the part below the surface, so the part above is the remaining 15%. Answering 85% reports the submerged part, 118% turns the ratio over, and 18% subtracts 100% from that upside-down value.`,
      },
      {
        question: r`A slab of paraffin wax (900 kg/m³) floats at rest on a dense liquid of density 1500 kg/m³. What percentage of the slab's volume sits above the liquid?`,
        options: [r`60%`, r`67%`, r`40%`, r`167%`],
        correctAnswer: 2,
        explanation: r`900 ÷ 1500 = 0.60 is the part below the surface, so 40% is above. Choosing 60% gives the submerged part instead, 167% turns the ratio over, and 67% is that upside-down ratio with 100% taken away.`,
      },
      {
        question: r`A swimming platform is a 5.0 m³ block of foam of density 200 kg/m³ floating at rest on a freshwater lake (1000 kg/m³). What volume of the foam is above the water?`,
        options: [r`1.0 m³`, r`4.0 m³`, r`5.0 m³`, r`25 m³`],
        correctAnswer: 1,
        explanation: r`The ratio 200 ÷ 1000 = 0.20 is the fraction below, so 1.0 m³ is under water and the other 4.0 m³ is above. Answering 1.0 m³ gives the submerged part, 5.0 m³ is the whole block, and 25 m³ divides by 0.20.`,
      },
      {
        question: r`A duck decoy bobs motionless on a lake whose water has a density of 1000 kg/m³. Photographs show that 30% of the decoy rides out of the lake. What must the decoy's average density be?`,
        options: [r`700 kg/m³`, r`300 kg/m³`, r`1,430 kg/m³`, r`3,330 kg/m³`],
        correctAnswer: 0,
        explanation: r`The density ratio matches the part below the surface, which is 100% − 30% = 70%, so the density is 0.70 × 1000 = 700 kg/m³. The value 300 uses the part above, and 1,430 and 3,330 divide water's density by 0.70 and by 0.30.`,
      },
      {
        question: r`A uniform wooden cube 20 cm tall has a density of 600 kg/m³ and floats level in fresh water (1000 kg/m³). How much of its height shows above the water?`,
        options: [r`12 cm`, r`8.0 cm`, r`33 cm`, r`13 cm`],
        correctAnswer: 1,
        explanation: r`The ratio 600 ÷ 1000 = 0.60 is the part below, so 12 cm is under water and 20 − 12 = 8.0 cm shows above. Answering 12 cm gives the submerged depth. The value 33 cm divides the height by 0.60, and 13 cm takes 20 cm away from that.`,
      },
      {
        question: r`An ice cube (920 kg/m³) floats at rest in pure water (1000 kg/m³). How many times as large is the volume of ice below the surface as the volume above it?`,
        options: [r`0.087`, r`1.09`, r`12.5`, r`11.5`],
        correctAnswer: 3,
        explanation: r`The ratio 920 ÷ 1000 puts 92% of the ice below the surface and 8% above, and 92 ÷ 8 = 11.5. The value 0.087 compares above with below, 12.5 compares the whole cube with the part above, and 1.09 is water's density over ice's.`,
      },
    ],
  },
  [r`One object floats first in a fluid and then in a denser fluid. How do the buoyant force and the way it sits compare?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A kayak and its paddler weigh 600 N in total and float at rest on a river (1000 kg/m³). They paddle out into the sea (1025 kg/m³) and float at rest again. What is the buoyant force on the kayak in the sea?`,
        options: [r`600 N`, r`585 N`, r`615 N`, r`1,025 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force on a floating object equals its weight, and the weight is still 600 N, so $F_b$ = 600 N in both. The denser seawater supplies it with less submerged volume. The values 615 N and 585 N scale the force up or down by 2.5%, and 1,025 is the seawater's density.`,
      },
      {
        question: r`A sealed float sits at rest in fresh water (1000 kg/m³) with 6.0 L below the surface. It is moved to a liquid of density 1200 kg/m³ and floats at rest again. What is its submerged volume now?`,
        options: [r`6.0 L`, r`7.2 L`, r`5.0 L`, r`1.2 L`],
        correctAnswer: 2,
        explanation: r`The buoyant force is unchanged, so $\rho_{\text{fluid}} V_{\text{sub}}$ stays the same: 1000 × 6.0 = 1200 × $V_{\text{sub}}$, giving 5.0 L. Keeping 6.0 L ignores that the float rides higher, 7.2 L multiplies by 1.2 instead of dividing, and 1.2 L is the difference between those two.`,
      },
      {
        question: r`A wooden toy floats at rest in liquid A and then in liquid B, which is exactly twice as dense as A. Compared with liquid A, what does the toy have in liquid B?`,
        options: [r`Half the submerged volume, and half the buoyant force`, r`The same submerged volume, and twice the buoyant force`, r`Half the submerged volume, and the same buoyant force`, r`Twice the submerged volume, and the same buoyant force`],
        correctAnswer: 2,
        explanation: r`The toy's weight has not changed, so the buoyant force is the same in both liquids. Since $F_b = \rho_{\text{fluid}} V_{\text{sub}}\, g$, doubling the density halves the submerged volume and the toy rides higher. The force neither halves nor doubles, and a denser liquid never needs more submerged volume.`,
      },
      {
        question: r`A weighted test tube of total mass 90 g floats upright at rest in water (1.0 g/cm³). It is moved to a light oil of density 0.90 g/cm³ and floats at rest again. How does its submerged volume change?`,
        options: [r`It increases by 10 cm³`, r`It decreases by 10 cm³`, r`It decreases by 9 cm³`, r`It stays at 90 cm³`],
        correctAnswer: 0,
        explanation: r`The buoyant force equals the same weight in both, so the tube displaces 90 g of each liquid: 90 cm³ of water, but 90 ÷ 0.90 = 100 cm³ of the less dense oil, an increase of 10 cm³. A decrease would fit a denser liquid, and 9 cm³ multiplies by 0.90 instead of dividing.`,
      },
      {
        question: r`A flat-bottomed ferry with vertical sides sits 2.0 m deep in a freshwater harbor (1000 kg/m³). It is towed into a salt lake of density 1250 kg/m³. How deep does it sit there?`,
        options: [r`2.0 m`, r`2.5 m`, r`1.25 m`, r`1.6 m`],
        correctAnswer: 3,
        explanation: r`The buoyant force still equals the ferry's weight, so the submerged volume, and with it the depth, scales as one over the density: 2.0 m × 1000 ÷ 1250 = 1.6 m. A depth of 2.5 m multiplies by 1.25, as if denser water pulled the hull deeper, and 2.0 m ignores the change in density.`,
      },
      {
        question: r`A sealed bottle floats at rest with 400 cm³ submerged in fresh water (1000 kg/m³). In an unknown liquid it floats at rest with 320 cm³ submerged. What is the unknown liquid's density?`,
        options: [r`800 kg/m³`, r`1,250 kg/m³`, r`1,080 kg/m³`, r`1,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`The buoyant force is the bottle's weight in both, so 1000 × 400 = $\rho$ × 320 and $\rho$ = 1,250 kg/m³. The bottle rides higher, so the liquid must be denser than water. The value 800 turns the ratio over, and 1,080 adds the 80 cm³ difference to 1000.`,
      },
    ],
  },
  [r`Why does a floating ice cube leave the water level unchanged as it melts?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 460 g block of ice (0.92 g/cm³) floats at rest in a bowl of pure water (1.0 g/cm³). What volume of water does the block displace while it floats?`,
        options: [r`460 cm³`, r`500 cm³`, r`423 cm³`, r`40 cm³`],
        correctAnswer: 0,
        explanation: r`Floating ice displaces its own weight of water: 460 g of water, which is 460 cm³. The value 500 cm³ is the ice's whole volume (460 ÷ 0.92), 40 cm³ is only the part above the surface, and 423 cm³ multiplies 460 by 0.92.`,
      },
      {
        question: r`A 184 g ice cube with a volume of 200 cm³ floats in a pitcher of pure water (1.0 g/cm³) and melts completely. What is the volume of the meltwater it becomes?`,
        options: [r`200 cm³`, r`184 cm³`, r`169 cm³`, r`16 cm³`],
        correctAnswer: 1,
        explanation: r`Melting keeps the mass, so the cube becomes 184 g of water, which is 184 cm³. That is exactly the volume the floating cube was displacing, so the level does not move. The value 200 cm³ is the ice's own volume, 16 cm³ is the part that stood above the surface, and 169 cm³ multiplies by 0.92.`,
      },
      {
        question: r`A cylindrical glass of cross-section 50 cm² holds pure water with a 46 g ice cube (volume 50 cm³) floating in it. The water level is 12.00 cm. What is the level after the ice has melted?`,
        options: [r`11.92 cm`, r`12.92 cm`, r`12.00 cm`, r`12.08 cm`],
        correctAnswer: 2,
        explanation: r`The floating cube displaces 46 g of water, 46 cm³, and it melts into 46 cm³ of water, which exactly fills that space, so the level stays at 12.00 cm. The 12.08 cm option adds the 4 cm³ that stood above the surface, 11.92 cm removes it, and 12.92 cm adds the whole meltwater volume a second time.`,
      },
      {
        question: r`A 0.30 kg chunk of ice (920 kg/m³) floats at rest in a tank of pure water (1000 kg/m³). What weight of water does it displace while floating? (g = 10 m/s²)`,
        options: [r`2.76 N`, r`3.26 N`, r`0.24 N`, r`3.0 N`],
        correctAnswer: 3,
        explanation: r`A floating object displaces its own weight of fluid: 0.30 kg × 10 m/s² = 3.0 N of water, which is also the weight of meltwater the chunk will become. The value 2.76 N multiplies by 0.92, 3.26 N divides by 0.92, and 0.24 N is the difference between 3.0 and 2.76.`,
      },
      {
        question: r`A 1000 cm³ block of ice (0.92 g/cm³) floats in pure water (1.0 g/cm³) and then melts. By how much is the meltwater's volume smaller than the ice's volume, and where was that volume while the ice floated?`,
        options: [r`920 cm³, the part that was below the surface`, r`80 cm³, the part that was below the surface`, r`0 cm³, since ice and water share one density`, r`80 cm³, the part that was above the surface`],
        correctAnswer: 3,
        explanation: r`The ice has a mass of 920 g and melts into 920 cm³ of water, 80 cm³ less than the block. The floating block had 92% of itself, 920 cm³, below the surface, so the missing 80 cm³ is the part that stood above it, and the meltwater exactly fills the hole. Ice and water do not share a density, which is why the ice floats.`,
      },
      {
        question: r`A 230 g ice cube (volume 250 cm³) floats in pure water (1.0 g/cm³) and melts. By how much does the meltwater's volume exceed the volume of water the floating cube was displacing?`,
        options: [r`250 cm³`, r`20 cm³`, r`0 cm³`, r`230 cm³`],
        correctAnswer: 2,
        explanation: r`The floating cube displaces its own weight of water, 230 g or 230 cm³, and it melts into 230 g of water, also 230 cm³. The difference is 0 cm³, which is why the level does not change. The 20 cm³ option is the ice that stood above the surface, and 230 and 250 cm³ are the two volumes themselves, not their difference.`,
      },
    ],
  },
  [r`For an object floating in water, how is the submerged fraction related to its specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A plastic foam has a specific gravity of 0.35. A block of it floats at rest in water. What percentage of the block's volume is submerged?`,
        options: [r`65%`, r`35%`, r`3.5%`, r`29%`],
        correctAnswer: 1,
        explanation: r`For an object floating in water the submerged fraction equals its specific gravity, so SG = 0.35 means 35% is submerged. The value 65% is the part above the water, 3.5% slips a power of ten, and 29% comes from working with 1 ÷ 0.35.`,
      },
      {
        question: r`A log floats at rest in water with one quarter of its volume above the surface. What is the specific gravity of the log?`,
        options: [r`0.75`, r`0.25`, r`1.33`, r`4.0`],
        correctAnswer: 0,
        explanation: r`One quarter above means three quarters submerged, and in water the submerged fraction equals the specific gravity: SG = 0.75. The value 0.25 uses the part above the surface, 1.33 is 1 ÷ 0.75, and 4.0 is 1 ÷ 0.25.`,
      },
      {
        question: r`A sealed plastic drum has a volume of 12 L and an overall specific gravity of 0.40. It floats at rest in water. What volume of the drum is submerged?`,
        options: [r`7.2 L`, r`4.8 L`, r`30 L`, r`0.40 L`],
        correctAnswer: 1,
        explanation: r`In water the submerged fraction equals the specific gravity, so $V_{\text{sub}}$ = 0.40 × 12 L = 4.8 L. The value 7.2 L is the volume above the surface, 30 L divides by 0.40 and is more than the whole drum, and 0.40 is the fraction, not a volume.`,
      },
      {
        question: r`A raft with a total volume of 2.0 m³ floats at rest in water with 0.60 m³ below the surface. What is the raft's overall specific gravity?`,
        options: [r`0.70`, r`3.3`, r`1.2`, r`0.30`],
        correctAnswer: 3,
        explanation: r`The submerged fraction is 0.60 ÷ 2.0 = 0.30, and for an object floating in water that equals its specific gravity. The value 0.70 is the fraction above the water, 3.3 turns the division over, and 1.2 multiplies the two volumes.`,
      },
      {
        question: r`Two blocks of equal volume float at rest in water. One has a specific gravity of 0.20 and the other 0.80. How does the second block's submerged volume compare with the first's?`,
        options: [r`4 times as much`, r`0.25 times as much`, r`1.6 times as much`, r`0.60 times as much`],
        correctAnswer: 0,
        explanation: r`Each block's submerged fraction equals its specific gravity, 0.20 and 0.80 of the same volume, so the second has 0.80 ÷ 0.20 = 4 times as much under water. The value 0.25 compares them the wrong way around, 0.60 is the difference of the two numbers, and 1.6 is ten times their product.`,
      },
      {
        question: r`A uniform foam board 10 cm thick has a specific gravity of 0.050 and floats flat at rest on water. How far below the waterline is its bottom face?`,
        options: [r`5.0 cm`, r`9.5 cm`, r`0.50 cm`, r`2.0 cm`],
        correctAnswer: 2,
        explanation: r`The submerged fraction equals the specific gravity, 0.050, and for a flat board that is also the fraction of its thickness under water: 0.050 × 10 cm = 0.50 cm. The value 5.0 cm reads 0.050 as 50%, 9.5 cm is the part above the water, and 2.0 cm divides 10 by 5.`,
      },
    ],
  },
  [r`How does a hydrometer show the specific gravity of a liquid?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A technician looks at the scale printed on a hydrometer's stem. Where is the 1.10 mark compared with the 1.00 mark, and why?`,
        options: [r`Above it: a denser liquid meets the stem higher up`, r`Level with it: the float's weight never changes`, r`Below it: a denser liquid meets the stem lower down`, r`Above it: larger readings go higher on any scale`],
        correctAnswer: 2,
        explanation: r`In a denser liquid the hydrometer rides higher, so more of the stem is out of the liquid and the surface crosses the stem at a lower point. The larger specific gravities are therefore printed lower on the stem. The float's weight is fixed, but the submerged volume that balances it is not.`,
      },
      {
        question: r`A brewer's hydrometer reads 1.050 in fresh, sugary wort. A week later the same hydrometer sits with more of its stem below the surface. What has happened to the liquid?`,
        options: [r`Its density fell, so the reading is now below 1.050`, r`Its density rose, so the reading is now above 1.050`, r`Its density fell, so the reading is now above 1.050`, r`Its density rose, so the reading is now below 1.050`],
        correctAnswer: 0,
        explanation: r`A hydrometer sinks deeper in a less dense liquid, because it needs more submerged volume to displace its own weight, so the density has fallen. Lower density means a lower specific gravity, read where the surface now crosses the stem. Density and reading always move together, so the mixed options cannot be right.`,
      },
    ],
  },
  [r`What does a high urine specific gravity point to?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A patient's urine specific gravity is 1.025 after a long hike. She then drinks several glasses of water. What happens to the specific gravity of the urine she produces next?`,
        options: [r`It stays at 1.025, since the solutes are unchanged`, r`It rises above 1.025 as the urine grows more dilute`, r`It falls below 1.000 as the urine grows more dilute`, r`It falls toward 1.000 as the urine grows more dilute`],
        correctAnswer: 3,
        explanation: r`With plenty of water the kidneys make more dilute urine: less solute per liter, so the density drops toward that of pure water and the specific gravity falls toward 1.000. It cannot go below 1.000, because urine is water with solutes added, and dilution lowers the value, it does not raise it.`,
      },
      {
        question: r`A runner finishes a long race on a hot day without drinking anything. Compared with the urine she passed before the race, how does her urine afterward differ?`,
        options: [r`More solute per liter, so a lower specific gravity`, r`More solute per liter, so a higher specific gravity`, r`Less solute per liter, so a higher specific gravity`, r`Less solute per liter, so a lower specific gravity`],
        correctAnswer: 1,
        explanation: r`Sweating without drinking leaves her dehydrated, so her kidneys hold back water and the urine carries more solute in each liter. More dissolved solute makes the urine denser, which is a higher specific gravity. Less solute per liter describes a well-hydrated person, and more solute never lowers the density.`,
      },
    ],
  },
  [r`What equation starts every floating problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A wooden raft floats at rest on a freshwater pond (1000 kg/m³) with 0.15 m³ of its volume below the surface. What is the raft's mass?`,
        options: [r`150 kg`, r`15 kg`, r`1,500 kg`, r`1.5 kg`],
        correctAnswer: 0,
        explanation: r`Start from $\rho_{\text{fluid}} V_{\text{sub}} = m$: 1000 kg/m³ × 0.15 m³ = 150 kg. The value 1,500 multiplies by g as well and is the weight in newtons, while 15 kg and 1.5 kg slip powers of ten.`,
      },
      {
        question: r`A chemist lowers a sealed 0.36 kg glass bulb into a jar of solvent. The bulb comes to rest floating, having pushed aside 3.0 × 10⁻⁴ m³ of the solvent. How dense is the solvent?`,
        options: [r`120 kg/m³`, r`1,200 kg/m³`, r`830 kg/m³`, r`12,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`From $\rho_{\text{fluid}} V_{\text{sub}} = m$, the density is 0.36 kg ÷ 3.0 × 10⁻⁴ m³ = 1,200 kg/m³. The value 830 divides the volume by the mass, and 120 and 12,000 each mishandle the power of ten.`,
      },
      {
        question: r`A 36 g plastic spoon is dropped into a pot of maple syrup of density 1.2 g/cm³ and comes to rest floating. How much of the spoon's volume is under the syrup?`,
        options: [r`43 cm³`, r`36 cm³`, r`30 cm³`, r`300 cm³`],
        correctAnswer: 2,
        explanation: r`$\rho_{\text{fluid}} V_{\text{sub}} = m$ gives $V_{\text{sub}}$ = 36 g ÷ 1.2 g/cm³ = 30 cm³. The value 43 cm³ multiplies by 1.2 instead of dividing, 36 cm³ would be right only in water, and 300 cm³ slips a power of ten.`,
      },
      {
        question: r`A 75 kg bather floats at rest in a salt lake whose water has a density of 1250 kg/m³. What volume of her body is below the surface? (1 m³ = 1000 L)`,
        options: [r`75 L`, r`94 L`, r`6.0 L`, r`60 L`],
        correctAnswer: 3,
        explanation: r`$V_{\text{sub}}$ = m ÷ $\rho_{\text{fluid}}$ = 75 kg ÷ 1250 kg/m³ = 0.060 m³, which is 60 L. The value 75 L would be right in fresh water, 94 L multiplies by 1.25 instead of dividing, and 6.0 L converts cubic meters to liters wrongly.`,
      },
      {
        question: r`A floating dock rests on a freshwater lake (1000 kg/m³). When a camper steps onto it, the dock settles until an extra 0.065 m³ of it is under water. What is the camper's mass?`,
        options: [r`6.5 kg`, r`650 kg`, r`0.065 kg`, r`65 kg`],
        correctAnswer: 3,
        explanation: r`The extra submerged volume carries the extra mass: $\rho_{\text{fluid}} V_{\text{sub}}$ = 1000 kg/m³ × 0.065 m³ = 65 kg. The value 650 multiplies by g and is her weight in newtons, 6.5 kg slips a power of ten, and 0.065 kg forgets to multiply by the density.`,
      },
      {
        question: r`A 2.6 kg steel bolt (7800 kg/m³) floats at rest in a vat of mercury (13,000 kg/m³). What volume of the bolt is below the mercury's surface?`,
        options: [r`2.0 × 10⁻³ m³`, r`3.3 × 10⁻⁴ m³`, r`2.0 × 10⁻⁴ m³`, r`5.0 × 10³ m³`],
        correctAnswer: 2,
        explanation: r`The equation uses the fluid's density: $V_{\text{sub}}$ = 2.6 kg ÷ 13,000 kg/m³ = 2.0 × 10⁻⁴ m³. Dividing by the steel's own density gives 3.3 × 10⁻⁴ m³, which is the bolt's whole volume. The value 5.0 × 10³ turns the division over, and 2.0 × 10⁻³ slips a power of ten.`,
      },
    ],
  },
  [r`How do you find the density of a floating object from its submerged fraction?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A channel marker floats at rest in fresh water (1000 kg/m³) with three fifths of its volume submerged. What is the marker's average density?`,
        options: [r`400 kg/m³`, r`600 kg/m³`, r`1,670 kg/m³`, r`2,500 kg/m³`],
        correctAnswer: 1,
        explanation: r`The object's density is the submerged fraction times the fluid's density: 0.60 × 1000 = 600 kg/m³. The value 400 uses the two fifths above the surface, and 1,670 and 2,500 divide the water's density by 0.60 and by 0.40.`,
      },
      {
        question: r`A plastic disk floats at rest on a light oil of density 800 kg/m³ with half of its volume below the surface. What is the density of the plastic?`,
        options: [r`400 kg/m³`, r`500 kg/m³`, r`1,600 kg/m³`, r`800 kg/m³`],
        correctAnswer: 0,
        explanation: r`Multiply the submerged fraction by the density of the fluid it floats in: 0.50 × 800 = 400 kg/m³. The value 500 uses water's density instead of the oil's, 1,600 divides by one half, and 800 would make the disk hover fully submerged.`,
      },
      {
        question: r`A harbor crew spots a drifting timber beam, motionless and riding so low in the freshwater harbor (1000 kg/m³) that just one tenth of the beam is visible over the waterline. How dense is the timber?`,
        options: [r`100 kg/m³`, r`900 kg/m³`, r`1,110 kg/m³`, r`10,000 kg/m³`],
        correctAnswer: 1,
        explanation: r`Use the fraction below the surface, 90%: 0.90 × 1000 = 900 kg/m³. The value 100 uses the 10% above, which is the trap here, 1,110 divides by 0.90, and 10,000 divides by 0.10.`,
      },
      {
        question: r`A 40 cm³ rubber stopper bobs motionless in a jar of glycerin (1.25 g/cm³). Of the stopper, 32 cm³ is beneath the glycerin and 8 cm³ is in the air. How dense is the stopper?`,
        options: [r`0.25 g/cm³`, r`1.56 g/cm³`, r`0.80 g/cm³`, r`1.0 g/cm³`],
        correctAnswer: 3,
        explanation: r`The submerged fraction is 32 ÷ 40 = 0.80, and 0.80 × 1.25 g/cm³ = 1.0 g/cm³. Stopping at 0.80 forgets to multiply by the glycerin's density, 0.25 uses the 0.20 above the surface, and 1.56 divides 1.25 by 0.80.`,
      },
      {
        question: r`A brass weight floats at rest in mercury (13,600 kg/m³) with five eighths of its volume submerged. What is the density of the brass?`,
        options: [r`8,500 kg/m³`, r`5,100 kg/m³`, r`21,800 kg/m³`, r`13,600 kg/m³`],
        correctAnswer: 0,
        explanation: r`One eighth of 13,600 is 1,700, and five eighths is 5 × 1,700 = 8,500 kg/m³. The value 5,100 uses the three eighths above the surface, 21,800 divides by the fraction instead of multiplying, and 13,600 is the mercury itself.`,
      },
      {
        question: r`A uniform block 10 cm tall floats level and at rest in a liquid of density 1200 kg/m³, with 3.0 cm of its height above the surface. What is the block's density?`,
        options: [r`360 kg/m³`, r`1,710 kg/m³`, r`840 kg/m³`, r`700 kg/m³`],
        correctAnswer: 2,
        explanation: r`The part below is 7.0 cm of 10 cm, a submerged fraction of 0.70, so the density is 0.70 × 1200 = 840 kg/m³. The value 360 uses the 0.30 above the surface, 700 multiplies by water's density instead of this liquid's, and 1,710 divides 1200 by 0.70.`,
      },
    ],
  },
  [r`An object floats in one fluid with a known submerged fraction. How do you find its submerged fraction in a second fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A foam ball floats at rest in fresh water (1000 kg/m³) with 50% of its volume submerged. What fraction of it is submerged when it floats at rest in an oil of density 800 kg/m³?`,
        options: [r`0.40`, r`0.50`, r`0.625`, r`1.6`],
        correctAnswer: 2,
        explanation: r`First the ball's density: 0.50 × 1000 = 500 kg/m³. Then divide by the oil's density with the ball's on top: 500 ÷ 800 = 0.625. The value 0.40 multiplies by 0.80 instead of dividing, 0.50 assumes the fraction never changes, and 1.6 puts the oil's density on top.`,
      },
      {
        question: r`A wax figure floats at rest on an oil of density 900 kg/m³ with two thirds of its volume submerged. What fraction is submerged when it floats at rest in fresh water (1000 kg/m³)?`,
        options: [r`0.60`, r`0.67`, r`0.74`, r`1.67`],
        correctAnswer: 0,
        explanation: r`The figure's density is (2/3) × 900 = 600 kg/m³, and in water the fraction is 600 ÷ 1000 = 0.60. Keeping 0.67 ignores the change of fluid, 0.74 divides 0.67 by 0.90 as if the water were the lighter liquid, and 1.67 puts water's density over the figure's.`,
      },
      {
        question: r`A bar of soap floats at rest in fresh water (1000 kg/m³) with 0.84 of its volume submerged. What fraction is submerged when it floats at rest in a brine of density 1200 kg/m³?`,
        options: [r`0.84`, r`1.01`, r`1.43`, r`0.70`],
        correctAnswer: 3,
        explanation: r`The soap's density is 0.84 × 1000 = 840 kg/m³, and 840 ÷ 1200 = 0.70. The value 1.01 multiplies 0.84 by 1.2, 1.43 puts the brine's density on top, and both are above 1, which is impossible for a floating object. Keeping 0.84 ignores the denser fluid.`,
      },
      {
        question: r`A hollow glass sphere floats at rest on a dense liquid of density 1500 kg/m³ with 0.20 of its volume submerged. What fraction is submerged when it floats at rest on an oil of density 750 kg/m³?`,
        options: [r`0.10`, r`0.40`, r`0.20`, r`2.5`],
        correctAnswer: 1,
        explanation: r`The sphere's average density is 0.20 × 1500 = 300 kg/m³, and 300 ÷ 750 = 0.40. The oil is half as dense, so the fraction doubles. The value 0.10 halves it instead, 0.20 leaves it unchanged, and 2.5 puts the oil's density over the sphere's.`,
      },
      {
        question: r`A hollow nylon ball rides motionless on a pond (1000 kg/m³) with 60% of it under water. Dropped into a syrup of density 1500 kg/m³, the ball again comes to rest floating. What percentage of the ball then shows over the syrup?`,
        options: [r`60%`, r`40%`, r`90%`, r`10%`],
        correctAnswer: 0,
        explanation: r`The float's density is 0.60 × 1000 = 600 kg/m³. In the second liquid 600 ÷ 1500 = 40% is submerged, so 60% is above the surface. Answering 40% gives the part below, 90% multiplies 0.60 by 1.5, and 10% is what that wrong value would leave above.`,
      },
      {
        question: r`A sealed 10 L container floats at rest in fresh water (1000 kg/m³) with 4.5 L submerged. How much of it is submerged when it floats at rest in an oil of density 900 kg/m³?`,
        options: [r`4.05 L`, r`5.0 L`, r`4.5 L`, r`9.0 L`],
        correctAnswer: 1,
        explanation: r`In water the fraction is 0.45, so the container's average density is 450 kg/m³. In the oil the fraction is 450 ÷ 900 = 0.50, which is 5.0 L of the 10 L. The value 4.05 L multiplies by 0.90 instead of dividing, 4.5 L ignores the change of fluid, and 9.0 L uses the oil's density as the fraction.`,
      },
    ],
  },
  [r`A calculation gives a "submerged fraction" larger than 1. What does that mean?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A cork (240 kg/m³) is seen floating at rest in water (1000 kg/m³). A student's working for its submerged fraction ends in 4.2. What went wrong, and what is the fraction?`,
        options: [r`Nothing is wrong: the cork is about to sink`, r`The ratio is upside down: the fraction is 0.76`, r`The ratio is upside down: the fraction is 0.24`, r`Nothing is wrong: the cork floats 4.2 times over`],
        correctAnswer: 2,
        explanation: r`The cork floats, so its submerged fraction must be below 1. The student divided 1000 by 240; with the object's density on top the fraction is 240 ÷ 1000 = 0.24. The 0.76 value is the part above the surface, and a cork that is less dense than water cannot be about to sink.`,
      },
      {
        question: r`In each case below, the object's density is correctly placed over the fluid's density. Which case gives a result larger than 1, showing that the object sinks instead of floating?`,
        options: [r`Ice (920 kg/m³) placed in water (1000 kg/m³)`, r`Oak (750 kg/m³) placed in an oil (900 kg/m³)`, r`Iron (7900 kg/m³) placed in mercury (13,600 kg/m³)`, r`Glass (2500 kg/m³) placed in water (1000 kg/m³)`],
        correctAnswer: 3,
        explanation: r`Glass over water is 2500 ÷ 1000 = 2.5, larger than 1, so the glass is denser than the water and sinks. The other three ratios are 0.92, about 0.83 and about 0.58, all below 1, so those objects float with that fraction submerged. Iron sinks in water but floats on mercury.`,
      },
    ],
  },
  [r`How do you find how deep a flat-bottomed hull sits in the water?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flat-bottomed pontoon boat with a base area of 8.0 m² has a total mass of 2400 kg and floats level on a freshwater lake (1000 kg/m³). How deep does its hull sit below the waterline?`,
        options: [r`3.3 m`, r`3.0 m`, r`0.030 m`, r`0.30 m`],
        correctAnswer: 3,
        explanation: r`The submerged volume is 2400 kg ÷ 1000 kg/m³ = 2.4 m³, and $d = V_{\text{sub}}/A$ = 2.4 ÷ 8.0 = 0.30 m. The value 3.3 m divides the area by the volume, and 3.0 m and 0.030 m slip powers of ten.`,
      },
      {
        question: r`A flat-bottomed duck punt has a base area of 4.0 m². Loaded with a hunter and gear, it floats level on a marsh (fresh water, 1000 kg/m³) with its bottom 0.25 m below the waterline. What is the total mass of the punt and its load?`,
        options: [r`16 kg`, r`100 kg`, r`1,000 kg`, r`10,000 kg`],
        correctAnswer: 2,
        explanation: r`A flat bottom gives $V_{\text{sub}} = Ad$ = 4.0 × 0.25 = 1.0 m³, and that volume of water has a mass of 1000 × 1.0 = 1,000 kg. The value 16 divides the area by the depth, 10,000 multiplies by g as well and is the weight in newtons, and 100 kg slips a power of ten.`,
      },
      {
        question: r`A 500 kg flat-bottomed floating dock sits exactly 0.10 m deep in fresh water (1000 kg/m³). What is the area of the dock's base?`,
        options: [r`0.50 m²`, r`5.0 m²`, r`50 m²`, r`0.20 m²`],
        correctAnswer: 1,
        explanation: r`The dock displaces 500 ÷ 1000 = 0.50 m³, and since $V_{\text{sub}} = Ad$, the area is 0.50 ÷ 0.10 = 5.0 m². The value 0.50 is the submerged volume, not an area, 0.20 divides the depth by the volume, and 50 slips a power of ten.`,
      },
      {
        question: r`A rectangular plastic tub with a flat 20 cm × 10 cm base holds toys, for a total mass of 600 g. It floats level in a bath (water, 1.0 g/cm³). How deep does the tub sit?`,
        options: [r`3.0 cm`, r`0.33 cm`, r`30 cm`, r`6.0 cm`],
        correctAnswer: 0,
        explanation: r`The tub displaces 600 g of water, 600 cm³, over a base of 20 × 10 = 200 cm², so d = 600 ÷ 200 = 3.0 cm. The value 0.33 cm divides the area by the volume, 30 cm divides by only the 20 cm side, and 6.0 cm takes the base as 100 cm².`,
      },
      {
        question: r`A flat-bottomed barge with vertical sides and a base area of 100 m² floats level in fresh water (1000 kg/m³). A 5000 kg crate is loaded on. How much deeper does the barge sit?`,
        options: [r`0.50 m`, r`0.050 m`, r`5.0 m`, r`0.020 m`],
        correctAnswer: 1,
        explanation: r`The crate needs an extra 5000 ÷ 1000 = 5.0 m³ of displaced water, and over 100 m² that is 5.0 ÷ 100 = 0.050 m deeper. The value 5.0 is the extra volume, not a depth, 0.020 divides the area by the mass, and 0.50 m slips a power of ten.`,
      },
      {
        question: r`A flat-bottomed float of mass 480 kg has a base area of 2.0 m² and floats level in a brine of density 1200 kg/m³. How deep does it sit in the brine?`,
        options: [r`0.24 m`, r`0.29 m`, r`0.40 m`, r`0.20 m`],
        correctAnswer: 3,
        explanation: r`$V_{\text{sub}}$ = 480 kg ÷ 1200 kg/m³ = 0.40 m³, and d = 0.40 ÷ 2.0 = 0.20 m. The value 0.24 m uses fresh water's density, 0.29 m multiplies by 1.2 instead of dividing, and 0.40 is the submerged volume without dividing by the area.`,
      },
    ],
  },
  [r`How do you find the greatest load a floating hull can carry?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed foam raft has a volume of 2.0 m³ and a mass of 100 kg. What is the greatest load it can carry on a freshwater lake (1000 kg/m³) before it is completely under?`,
        options: [r`1,900 kg`, r`2,000 kg`, r`2,100 kg`, r`190 kg`],
        correctAnswer: 0,
        explanation: r`Fully under, the raft displaces 1000 × 2.0 = 2,000 kg of water, the total it can support, so the load is 2,000 − 100 = 1,900 kg. Answering 2,000 kg forgets the raft's own mass, 2,100 kg adds it instead of subtracting, and 190 kg slips a power of ten.`,
      },
      {
        question: r`A sealed drum with a volume of 0.20 m³ and a mass of 20 kg is used as a float in a tank of oil of density 900 kg/m³. What is the greatest load it can carry before it is completely under?`,
        options: [r`180 kg`, r`200 kg`, r`160 kg`, r`162 kg`],
        correctAnswer: 2,
        explanation: r`Fully under, the drum displaces 900 × 0.20 = 180 kg of oil, and taking off its own 20 kg leaves a 160 kg load. Answering 180 kg forgets the drum's mass, 200 kg uses water's density and forgets it too, and 162 kg subtracts first and then multiplies by 0.90.`,
      },
      {
        question: r`A sealed rescue float has a mass of 10 kg and must be able to carry a 90 kg load in fresh water (1000 kg/m³) without going completely under. What is the smallest volume the float can have?`,
        options: [r`0.080 m³`, r`0.090 m³`, r`0.10 m³`, r`1.0 m³`],
        correctAnswer: 2,
        explanation: r`The displaced water must match the total mass, 90 + 10 = 100 kg, so $V_{\text{hull}}$ = 100 ÷ 1000 = 0.10 m³. The value 0.090 m³ leaves out the float's own mass, 0.080 m³ subtracts it instead of adding it, and 1.0 m³ slips a power of ten.`,
      },
      {
        question: r`A sealed pontoon platform has a volume of 1.5 m³ and a mass of 150 kg. How many 75 kg people can it carry on fresh water (1000 kg/m³) before the pontoons are completely under?`,
        options: [r`18 people`, r`20 people`, r`22 people`, r`2 people`],
        correctAnswer: 0,
        explanation: r`Fully under, the pontoons displace 1000 × 1.5 = 1,500 kg of water. Subtracting the platform's 150 kg leaves 1,350 kg, and 1,350 ÷ 75 = 18 people. Twenty forgets the platform's own mass, 22 adds it instead of subtracting, and 2 divides 150 by 75.`,
      },
      {
        question: r`A sealed steel pontoon has a volume of 4.0 m³ and a mass of 600 kg. What is the greatest load it can carry in seawater (1025 kg/m³) before it is completely under?`,
        options: [r`3,400 kg`, r`4,100 kg`, r`4,700 kg`, r`3,500 kg`],
        correctAnswer: 3,
        explanation: r`Fully under, it displaces 1025 × 4.0 = 4,100 kg of seawater, and 4,100 − 600 = 3,500 kg of load. The value 4,100 kg forgets the pontoon's own mass, 4,700 kg adds it, and 3,400 kg uses fresh water's 1000 kg/m³.`,
      },
      {
        question: r`A capped, empty jug with an outer volume of 2.0 L has a mass of 200 g. One liter of water has a mass of 1.0 kg. What is the greatest load the jug can hold up in water before it is completely under?`,
        options: [r`2.2 kg`, r`1.8 kg`, r`2.0 kg`, r`0.20 kg`],
        correctAnswer: 1,
        explanation: r`Fully under, the jug displaces 2.0 L of water, 2.0 kg, and its own 200 g = 0.20 kg comes off that: 1.8 kg. Answering 2.0 kg ignores the jug's mass, 2.2 kg adds it, and 0.20 kg is the jug's own mass.`,
      },
    ],
  },
}
