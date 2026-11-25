import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-buoyancy-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
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
