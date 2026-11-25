import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-mechanics-buoyancy-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`A block floats in water with $60\%$ of its volume submerged. What fraction is submerged when it floats in oil of SG $0.8$?`]: {
    question: r`A wooden buoy floats in fresh water with 80% of its volume submerged. It is moved to brine of specific gravity 1.25. What fraction of its volume is submerged now?`,
    options: [r`64%`, r`100%`, r`80%`, r`55%`],
    correctAnswer: 0,
    explanation: r`The submerged fraction is the density ratio, so the buoy's SG is 0.80 and in brine the fraction is 0.80/1.25 = 0.64. Multiplying 0.80 by 1.25 gives 100%, which flips the ratio. Keeping 80% ignores the denser fluid, and 55% subtracts 25 percentage points instead of dividing.`,
  },
  [r`An object denser than oil but less dense than water is dropped into a beaker of oil floating on water. Where does it come to rest?`]: {
    question: r`A tall cylinder holds a layer of water (SG 1.0) on top of mercury (SG 13.6). A solid steel ball (SG 7.8) is released at the top of the water. Where does the ball come to rest?`,
    options: [r`On the floor of the cylinder, under all the mercury`, r`At the top of the water, partly above its surface`, r`At the water–mercury boundary, partly in each liquid`, r`In the middle of the water layer, fully surrounded`],
    correctAnswer: 2,
    explanation: r`Steel is denser than water, so it sinks through the water, but it is less dense than mercury, so it cannot sink into it fully. It settles at the boundary, where the displaced water and mercury together weigh as much as the ball. Resting on the floor would need SG above 13.6, and staying in or on the water would need SG of 1.0 or less.`,
  },
  [r`A floating object displaces its own {{c1::weight}} of fluid; a fully submerged object displaces its own {{c2::volume}} of fluid.`]: {
    question: r`A 60 g egg sinks in fresh water, where it displaces 55 cm³. Salt is stirred in until the egg floats at rest with part of it above the surface. What mass of salt water does the floating egg displace?`,
    options: [r`55 g`, r`5 g`, r`115 g`, r`60 g`],
    correctAnswer: 3,
    explanation: r`A floating object is in equilibrium, so it displaces its own weight of fluid: 60 g of salt water. The 55 g answer comes from the egg's volume, which sets the displacement only while it is fully submerged, and then in cm³, not grams. The 5 g and 115 g answers subtract or add the two given numbers.`,
  },
  [r`Normal urine specific gravity runs from about {{c1::$1.005$ to $1.030$}}.`]: {
    question: r`A runner who has not had a drink for hours gives a urine sample. Which specific gravity reading is near the top of the normal range, as expected for concentrated urine?`,
    options: [r`1.006`, r`1.028`, r`1.280`, r`0.998`],
    correctAnswer: 1,
    explanation: r`Normal urine specific gravity runs from about 1.005 to 1.030, so 1.028 is concentrated but normal. A reading of 1.006 is normal too, but it is at the dilute end. The value 1.280 is far above any urine, and 0.998 would be less dense than water, which dissolved solutes cannot produce.`,
  },
  [r`In a narrow glass tube, water forms a {{c1::concave}} meniscus and rises, while mercury forms a {{c2::convex}} meniscus and is depressed.`]: {
    question: r`A liquid in a narrow glass tube has a surface that domes upward in the middle (a convex meniscus). Which statement about this liquid is correct?`,
    options: [r`Cohesion beats adhesion to glass, and it sits below the outside level`, r`Adhesion to glass beats cohesion, and it sits below the outside level`, r`Cohesion beats adhesion to glass, and it rises above the outside level`, r`Adhesion to glass beats cohesion, and it rises above the outside level`],
    correctAnswer: 0,
    explanation: r`A convex meniscus, as with mercury, means the liquid's cohesion is stronger than its adhesion to glass, so the liquid is depressed below the outside level. Adhesion winning gives a concave meniscus and a rise, as with water. The two mixed statements pair the right force with the wrong direction of movement.`,
  },
  [r`When an ice cube floating in a glass of water melts completely, the water level {{c1::stays the same}}.`]: {
    question: r`A 90 g ice cube (density 0.90 g/cm³) floats in a measuring cylinder of fresh water, and the water level reads 500 mL. What does the level read after the ice has melted completely?`,
    options: [r`510 mL`, r`590 mL`, r`500 mL`, r`490 mL`],
    correctAnswer: 2,
    explanation: r`The floating ice displaces 90 g of water, which is 90 mL, and it melts into exactly 90 mL of water that fills that same space, so the level stays at 500 mL. The 510 mL and 490 mL answers add or subtract the 10 cm³ of ice that was above the surface. The 590 mL answer adds the meltwater as if the ice had displaced nothing.`,
  },
  [r`A rock weighs $50$ N in air and $40$ N when hung fully submerged in water. What is its specific gravity?`]: {
    question: r`A crown weighs 30 N in air and 28 N when hung fully submerged in water. What is the crown's specific gravity?`,
    options: [r`14`, r`1.07`, r`15`, r`2`],
    correctAnswer: 2,
    explanation: r`The buoyant force is 30 − 28 = 2 N, the weight of an equal volume of water, so SG = 30/2 = 15. Dividing the apparent weight by the buoyant force gives 14. The value 1.07 is 30/28, and 2 is just the buoyant force in newtons, not a ratio of densities.`,
  },
  [r`State Archimedes' principle.`]: {
    question: r`A solid aluminum block of volume 0.002 m³ and density 2700 kg/m³ rests fully submerged on the floor of a tank of oil (density 800 kg/m³). What is the buoyant force on the block? (g = 10 m/s²)`,
    options: [r`16 N`, r`54 N`, r`38 N`, r`20 N`],
    correctAnswer: 0,
    explanation: r`The buoyant force is the weight of the displaced fluid: 800 × 0.002 × 10 = 16 N. Using the block's own density gives 54 N, which is its weight. The 38 N answer is the weight minus the buoyant force, and 20 N uses the density of water instead of the oil.`,
  },
  [r`An object floats when its density is:`]: {
    question: r`A solid plastic toy has a volume of 40 cm³ and a mass of 44 g. In which of these liquids will the toy float?`,
    options: [r`Glycerin, density 1.26 g/cm³`, r`Fresh water, density 1.00 g/cm³`, r`Olive oil, density 0.92 g/cm³`, r`Ethanol, density 0.79 g/cm³`],
    correctAnswer: 0,
    explanation: r`The toy's density is 44/40 = 1.1 g/cm³, and an object floats only in a fluid denser than itself, so it floats in glycerin alone. Water, olive oil and ethanol are all less dense than 1.1 g/cm³, so the toy sinks in each. Picking a low-density liquid reverses the rule.`,
  },
  [r`How does hydrostatic weighing determine body composition?`]: {
    question: r`Two men each weigh 800 N in air. Fully submerged with their lungs emptied, man X has an apparent weight of 40 N and man Y has an apparent weight of 20 N. What follows about man X compared with man Y?`,
    options: [r`X has the larger volume and lower density, so more body fat`, r`X has the smaller volume and lower density, so more body fat`, r`X has the larger volume and higher density, so less body fat`, r`X has the smaller volume and higher density, so less body fat`],
    correctAnswer: 3,
    explanation: r`Apparent weight is true weight minus buoyant force, so X feels 760 N of buoyancy and Y feels 780 N. Less buoyancy means X displaces less water, so the same weight is packed into a smaller volume: higher density and less fat. The other statements reverse the volume, or pair a volume with a density that cannot go with it at equal weight.`,
  },
  [r`What fraction of a floating object sits below the surface?`]: {
    question: r`A block of ice (density 900 kg/m³) floats in a brine of density 1200 kg/m³. What fraction of the ice's volume is ABOVE the surface?`,
    options: [r`75%`, r`10%`, r`25%`, r`33%`],
    correctAnswer: 2,
    explanation: r`The submerged fraction is the density ratio 900/1200 = 0.75, so 25% is above the surface. Answering 75% gives the submerged part, not the part asked for. The 10% answer uses fresh water's 1000 kg/m³, and 33% divides the densities the wrong way round.`,
  },
  [r`Surface tension arises from {{c1::cohesive forces between liquid molecules}} at an interface.`]: {
    question: r`The molecules of liquid A attract one another far more strongly than the molecules of liquid B do. Which liquid has the higher surface tension, and why?`,
    options: [r`Liquid A: stronger cohesion pulls its surface molecules inward`, r`Liquid B: weaker cohesion lets its surface molecules spread out`, r`Liquid A: stronger adhesion pulls its surface toward the glass`, r`Liquid B: weaker adhesion lets its surface pull free of glass`],
    correctAnswer: 0,
    explanation: r`Surface tension comes from cohesion: molecules at the surface are pulled inward by their neighbours, and stronger attractions give a tighter surface, so liquid A has more. Weaker cohesion gives lower, not higher, surface tension. Adhesion is attraction to a different material such as glass, and it is not the source of surface tension.`,
  },
  [r`Laplace's law for an alveolus gives $P = 2\gamma/r$. What does it predict?`]: {
    question: r`Two alveoli with the same surface tension and no surfactant are joined by an open airway. One has a radius of 50 μm and the other 100 μm. Using P = 2γ/r, what happens?`,
    options: [r`Air moves from the large alveolus into the small one`, r`No air moves, since the surface tensions are equal`, r`Air moves both ways until the two radii are equal`, r`Air moves from the small alveolus into the large one`],
    correctAnswer: 3,
    explanation: r`With equal surface tension, the smaller radius gives the higher pressure, twice as high here, so the small alveolus empties into the large one. Flow from large to small flips the inverse dependence on radius. Equal tension does not mean equal pressure, and the imbalance grows rather than evening out as the small one shrinks.`,
  },
  [r`The buoyant force equals the weight of {{c1::the fluid displaced}}, not the weight of the object.`]: {
    question: r`Three solid balls of equal volume, made of aluminum, steel and lead, rest fully submerged on the floor of a swimming pool. How do the buoyant forces on them compare?`,
    options: [r`It is greatest on the lead ball`, r`It is greatest on the steel ball`, r`They are equal on all three balls`, r`It is greatest on the aluminum ball`],
    correctAnswer: 2,
    explanation: r`Buoyant force is the weight of the fluid displaced, and equal volumes fully submerged displace equal amounts of water, so the forces are equal. Choosing lead or steel assumes a heavier object feels more buoyancy. Choosing aluminum assumes the least dense object is pushed up hardest; the object's own density sets its weight, not its buoyancy.`,
  },
  [r`Why does a person float higher in salt water than in fresh water?`]: {
    question: r`A loaded cargo ship sails from the ocean into a freshwater river without changing its load. How do its depth in the water and the buoyant force on it change?`,
    options: [r`It rides lower, and the buoyant force becomes smaller`, r`It rides higher, and the buoyant force stays the same`, r`It rides lower, and the buoyant force stays the same`, r`It rides higher, and the buoyant force becomes larger`],
    correctAnswer: 2,
    explanation: r`A floating ship's buoyant force always equals its weight, which has not changed. Fresh water is less dense than seawater, so the ship must displace a larger volume to make up that weight and rides lower. Riding higher reverses the density effect, and a changed buoyant force would mean the ship was no longer in equilibrium.`,
  },
  [r`Does the buoyant force on a fully submerged object increase with depth?`]: {
    question: r`A rigid, solid steel ball sinks slowly in a deep lake. At a depth of 5 m the buoyant force on it is 20 N. Treating water as incompressible, what is the buoyant force on the ball at a depth of 50 m?`,
    options: [r`200 N`, r`20 N`, r`80 N`, r`2 N`],
    correctAnswer: 1,
    explanation: r`The ball displaces the same volume of water of the same density at any depth, so the buoyant force stays 20 N. Pressure rises on the top and the bottom of the ball alike, which leaves their difference unchanged. The 200 N answer scales with depth, 80 N scales with absolute pressure, and 2 N scales inversely with depth.`,
  },
  [r`Why does a person with a higher body fat fraction float more easily?`]: {
    question: r`Swimmer P has a higher body fat fraction than swimmer Q, giving whole-body densities of 0.97 g/cm³ for P and 1.03 g/cm³ for Q. Each relaxes motionless in fresh water (1.00 g/cm³). What happens?`,
    options: [r`P floats, with about 3% of the body submerged`, r`Q floats, with about 97% of the body submerged`, r`P floats, with about 97% of the body submerged`, r`Q floats, with about 3% of the body submerged`],
    correctAnswer: 2,
    explanation: r`Fat is less dense than water, so more fat brings P's density below 1.00 g/cm³ and P floats, while Q is denser than water and sinks. The submerged fraction is the density ratio, 0.97, so only about 3% of P is above the surface. The 3% submerged answers swap the two fractions, and the answers with Q floating reverse the effect of fat on density.`,
  },
}
