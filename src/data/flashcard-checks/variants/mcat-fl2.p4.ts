import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for surface tension, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A food chemist records the surface tension of olive oil in her notebook. Which entry uses the correct symbol and SI unit?`,
        options: [r`$\rho$ = 0.032 N/m`, r`$\gamma$ = 0.032 N/m²`, r`$\gamma$ = 0.032 N/m`, r`$\rho$ = 0.032 N/m²`],
        correctAnswer: 2,
        explanation: r`Surface tension is written $\gamma$ and its SI unit is the newton per meter. The symbol $\rho$ stands for density, not surface tension, and a newton per square meter is a pascal, the unit of pressure.`,
      },
      {
        question: r`A technician reports the surface tension of a cleaning fluid in pascals, and a reviewer rejects the report. What is wrong with the unit?`,
        options: [r`A pascal is a newton per square meter, but γ is in newtons per meter`, r`A pascal is a newton per meter, but γ is in newtons per square meter`, r`A pascal is a newton per cubic meter, but γ is in newtons per meter`, r`A pascal is a newton per meter, but γ is in newtons per cubic meter`],
        correctAnswer: 0,
        explanation: r`A pascal is a newton per square meter and measures pressure. Surface tension γ is a force per unit length, so its SI unit is the newton per meter. The other options either define the pascal wrongly or give γ a unit with square or cubic meters.`,
      },
    ],
  },
  [r`What is the difference between cohesion and adhesion?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Four everyday observations are listed in a lab handout. Which one is an example of adhesion rather than cohesion?`,
        options: [r`Mercury atoms holding together in a bead on a tray`, r`Ethanol molecules attracting one another in a flask`, r`Water molecules hydrogen bonding inside a dewdrop`, r`Honey clinging to a steel spoon lifted from the jar`],
        correctAnswer: 3,
        explanation: r`Adhesion is the attraction between a liquid and a different material, here honey and steel. Mercury to mercury, ethanol to ethanol and water to water are all attractions within one substance, which is cohesion.`,
      },
      {
        question: r`A chemist says that liquid X shows strong cohesion but only weak adhesion to a nylon sheet. What does she mean?`,
        options: [r`X molecules attract nylon strongly and each other weakly`, r`X molecules attract each other strongly and nylon weakly`, r`X molecules attract air strongly and the nylon only weakly`, r`X molecules repel each other strongly and nylon weakly`],
        correctAnswer: 1,
        explanation: r`Cohesion is the attraction among the molecules of X itself, and adhesion is the attraction of X to a different material, the nylon. Strong cohesion with weak adhesion means X holds to itself strongly and to nylon weakly. Swapping the two reverses the terms, and neither term describes repulsion or attraction to the air.`,
      },
    ],
  },
  [r`Why does a drop of water bead up on wax but spread out on clean glass?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Rain beads up on a freshly waxed car hood. Months later the wax has worn away, and rain spreads into a flat sheet on the bare paint. Which comparison now holds on the bare paint?`,
        options: [r`Water's adhesion to the paint beats its cohesion`, r`Water's cohesion beats its adhesion to the paint`, r`Water's density on the paint is lower than on wax`, r`Water's surface tension has dropped to zero there`],
        correctAnswer: 0,
        explanation: r`A drop spreads when the water holds to the surface more strongly than to itself, so adhesion to the paint now beats cohesion. Cohesion winning is what made the drops bead on the wax. The wall under a drop does not change the water's density, and the water still has its surface tension.`,
      },
      {
        question: r`Liquid Z attracts a polished copper plate more strongly than Z attracts itself, and it attracts a nylon sheet less strongly than Z attracts itself. What does a small drop of Z do on each surface?`,
        options: [r`It beads up on copper and spreads on nylon`, r`It beads up on copper and beads up on nylon`, r`It spreads on copper and beads up on nylon`, r`It spreads on copper and spreads on nylon`],
        correctAnswer: 2,
        explanation: r`On copper adhesion wins, so the drop spreads, as water does on clean glass. On nylon cohesion wins, so the drop holds to itself and beads up, as water does on wax. The other options ignore that the stronger attraction is different on the two surfaces, or reverse it.`,
      },
    ],
  },
  [r`Why does the surface of a liquid behave like a stretched skin?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A molecule drifts from the middle of a beaker of ethanol up into the surface layer. How does the net pull of its neighbors on it change?`,
        options: [r`From a net pull toward the interior to no net pull`, r`From no net pull to a net pull toward the interior`, r`From no net pull to a net pull toward the air above`, r`From a net pull toward the air above to no net pull`],
        correctAnswer: 1,
        explanation: r`In the middle the molecule has neighbors on every side, so their pulls cancel. At the surface it has neighbors only beside and below it, so the pulls no longer cancel and the net pull points inward. The other options reverse the order or point the surface pull toward the air.`,
      },
      {
        question: r`Deep inside a tank of liquid nitrogen there is no skin-like tightness, even though the molecules attract one another just as they do at the surface. Why not?`,
        options: [r`Molecules there stop attracting, so there is no pull at all`, r`Neighbors are missing below each one, so it is pulled upward`, r`Pressure there pushes molecules apart, so no pull can act`, r`Neighbors surround each one, so their pulls on it cancel out`],
        correctAnswer: 3,
        explanation: r`A molecule in the interior is pulled equally in every direction by the neighbors all around it, so there is no net pull. Only at the surface, where neighbors are missing on one side, is there a net inward pull that draws the surface tight. The attractions do not switch off at depth, and no neighbors are missing there.`,
      },
    ],
  },
  [r`What two equivalent things does surface tension measure?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A light straight barrier 0.20 m long floats on a trough of water, with a clean water surface of γ = 0.070 N/m pulling on one side of it. Counting only this one surface, how large is the pull on the barrier?`,
        options: [r`0.35 N`, r`2.9 N`, r`0.014 N`, r`0.0028 N`],
        correctAnswer: 2,
        explanation: r`Surface tension is a force per unit length, so the force is γ times the length: 0.070 N/m × 0.20 m = 0.014 N. Dividing γ by the length gives 0.35, dividing the length by γ gives 2.9, and multiplying by the length twice gives 0.0028.`,
      },
      {
        question: r`An oil has a surface tension of 0.030 N/m, which is the same as 0.030 J/m². How much energy does it take to create 0.50 m² of new oil surface as the oil spreads across a tray? Count one surface only.`,
        options: [r`0.015 J`, r`0.060 J`, r`17 J`, r`0.0075 J`],
        correctAnswer: 0,
        explanation: r`Surface tension is equally the energy needed per unit area of new surface, so the energy is 0.030 J/m² × 0.50 m² = 0.015 J. Dividing γ by the area gives 0.060, dividing the area by γ gives about 17, and multiplying by the area twice gives 0.0075.`,
      },
      {
        question: r`In a teaching lab, the single surface of a liquid pulls with a force of 0.0060 N on a straight edge 0.15 m long. What is the liquid's surface tension?`,
        options: [r`0.00090 N/m`, r`25 N/m`, r`0.27 N/m`, r`0.040 N/m`],
        correctAnswer: 3,
        explanation: r`Surface tension is the force per unit length: 0.0060 N ÷ 0.15 m = 0.040 N/m. Multiplying the force by the length gives 0.00090, dividing the length by the force gives 25, and dividing by the length twice gives about 0.27.`,
      },
      {
        question: r`Creating 200 cm² of new surface on a solvent takes 1.0 mJ of energy. Counting one surface only, what is the solvent's surface tension?`,
        options: [r`5.0 × 10⁻⁶ N/m`, r`0.050 N/m`, r`20 N/m`, r`2.0 × 10⁻⁵ N/m`],
        correctAnswer: 1,
        explanation: r`Surface tension is the energy per unit area of new surface, and 1 J/m² equals 1 N/m. The area is 200 cm² = 0.020 m², so γ = 1.0 × 10⁻³ J ÷ 0.020 m² = 0.050 N/m. Leaving the area as 200 gives 5.0 × 10⁻⁶, dividing the area by the energy gives 20, and multiplying the two gives 2.0 × 10⁻⁵.`,
      },
      {
        question: r`A liquid with γ = 0.025 N/m pulls on a thin straight rod lying in its surface with a total force of 0.0050 N. Counting a single surface on one side of the rod, how long is the rod?`,
        options: [r`0.20 m`, r`5.0 m`, r`1.25 × 10⁻⁴ m`, r`0.020 m`],
        correctAnswer: 0,
        explanation: r`Force = γ × length, so the length is 0.0050 N ÷ 0.025 N/m = 0.20 m. Dividing γ by the force gives 5.0, multiplying the two gives 1.25 × 10⁻⁴, and 0.020 comes from a slip of a factor of ten in the division.`,
      },
      {
        question: r`Liquid A has a surface tension of 0.024 N/m and liquid B has 0.072 N/m. Making the same area of new surface takes how many times as much energy for B as for A?`,
        options: [r`One third as much`, r`9 times as much`, r`3 times as much`, r`1.7 times as much`],
        correctAnswer: 2,
        explanation: r`Surface tension is the energy per unit area of new surface, so for the same area the energy is proportional to γ: 0.072 ÷ 0.024 = 3 times as much for B. One third inverts the ratio, 9 squares it, and 1.7 takes its square root.`,
      },
    ],
  },
  [r`Why is the surface tension of water unusually high?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Hexane molecules cannot hydrogen bond with one another, while water molecules can. At the same temperature, which liquid has the higher surface tension, and why?`,
        options: [r`Hexane, because weak cohesion lets its surface pull tight`, r`Water, because hydrogen bonding gives it strong cohesion`, r`Water, because hydrogen bonding gives it a high density`, r`Hexane, because its larger molecules stiffen the surface`],
        correctAnswer: 1,
        explanation: r`Surface tension comes from cohesion, and hydrogen bonding makes water's cohesion unusually strong, so water has the higher surface tension. Weak cohesion gives a weak skin, not a tight one. Density and molecular size are not what set the strength of the surface skin.`,
      },
      {
        question: r`Imagine a change to water's molecules. Which change would be expected to lower its surface tension the most?`,
        options: [r`Gaining extra hydrogen bonds between neighboring molecules`, r`Losing the attraction to the glass wall of the container`, r`Gaining mass with no change in how molecules attract`, r`Losing the ability to hydrogen bond with one another`],
        correctAnswer: 3,
        explanation: r`Water's surface tension is high because hydrogen bonding gives it strong cohesion, so removing the hydrogen bonds between water molecules would weaken the skin most. Extra hydrogen bonds would strengthen it. Attraction to glass is adhesion, and mass alone does not change the attractions that make the skin.`,
      },
    ],
  },
  [r`Why do small droplets pull themselves into spheres?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An astronaut squeezes a small blob of orange juice out of a pouch, and it floats freely in the cabin without touching anything. What shape does the blob settle into, and why?`,
        options: [r`A sphere, the least surface area for its volume`, r`A sphere, the most surface area for its volume`, r`A flat disk, the least surface area for its volume`, r`A thin thread, the most surface area for its volume`],
        correctAnswer: 0,
        explanation: r`A liquid surface always tries to shrink, and the sphere is the shape with the least surface area for a given volume, so the free blob becomes a ball. A sphere has the least area, not the most, and a disk or a thread has more surface area than a sphere of the same volume.`,
      },
      {
        question: r`Two small round beads of mercury on a tray touch and at once merge into a single larger bead. What happens to the total surface area of the mercury, and what does this show?`,
        options: [r`The total area rises, since a surface always tries to grow`, r`The total area stays fixed, since the volume stays fixed`, r`The total area falls, since a surface always tries to shrink`, r`The total area rises, since the new bead is a larger one`],
        correctAnswer: 2,
        explanation: r`One bead has less surface area than two beads holding the same total volume, so merging lets the surface shrink, which is what a liquid surface always tries to do. A surface does not try to grow, and the same volume does not mean the same area: the area depends on the shape and on how the liquid is divided.`,
      },
    ],
  },
  [r`What holds up a water strider, or a steel needle laid gently on water?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A steel paper clip, about 8 times as dense as water, rests on the surface of still water in a cup. A student says buoyancy is holding it up. What is the best objection?`,
        options: [r`Steel is lighter than water, so buoyancy is not needed to hold it`, r`Buoyancy acts only on liquids, so it cannot act on a steel clip`, r`Buoyancy points downward on steel, so it would pull the clip under`, r`Steel is denser than water, so buoyancy alone cannot support it`],
        correctAnswer: 3,
        explanation: r`An object denser than water cannot be held up by buoyancy, because the water it could displace weighs less than it does. The clip rests on the surface skin, which dents but holds: surface tension supports it. Steel is not lighter than water, buoyancy acts on any object in a fluid, and it points upward.`,
      },
      {
        question: r`A steel sewing pin rests on the surface of a bowl of water. A child pokes it completely under the surface and lets go. What happens next, and why?`,
        options: [r`It hovers, since buoyancy alone just equals its weight`, r`It sinks, since buoyancy alone is less than its weight`, r`It rises back, since buoyancy alone exceeds its weight`, r`It rises back, since the surface skin pulls it upward`],
        correctAnswer: 1,
        explanation: r`The pin was resting on the surface skin, held by surface tension. Once it is fully under the water the skin no longer supports it, and steel is far denser than water, so the buoyant force is smaller than its weight and it sinks. Hovering or rising would need buoyancy to match or beat the weight, and the skin does not pull a submerged object up.`,
      },
    ],
  },
  [r`What does a surfactant do to a liquid?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A razor blade rests on the surface of water in beaker A. In beaker B, which holds the same water plus one unknown additive, an identical blade laid down just as gently falls straight through. What is the additive most likely to be?`,
        options: [r`A surfactant, which raises the surface tension`, r`A thickener, which raises the surface tension`, r`A surfactant, which lowers the surface tension`, r`A dense salt, which lowers the buoyant force`],
        correctAnswer: 2,
        explanation: r`The blade is held by the surface skin, so it falls through when the skin is weakened. A surfactant such as soap lowers the surface tension. Raising the surface tension would support the blade better, and dissolving a dense salt would raise the buoyant force, not lower it.`,
      },
      {
        question: r`Insects called pond skaters stand on the surface of a still pond. Detergent from a nearby drain spreads across the pond. What is the danger to the insects?`,
        options: [r`The surface skin weakens, so their legs may break through`, r`The surface skin stiffens, so their legs may become stuck`, r`The water grows denser, so buoyancy lifts them off the pond`, r`The water grows thinner, so buoyancy can no longer hold them`],
        correctAnswer: 0,
        explanation: r`Detergent is a surfactant, and a surfactant lowers the surface tension. The insects are held up by the surface skin, so a weaker skin may let their legs push through. A surfactant does not stiffen the skin, and buoyancy is not what supports these insects in the first place.`,
      },
    ],
  },
  [r`What does a liquid do in a narrow tube when adhesion beats cohesion?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Kerosene attracts the wall of a narrow ceramic tube more strongly than kerosene attracts itself. The tube dips into a dish of kerosene, and the level inside ends up above the dish. What draws the kerosene up?`,
        options: [r`The kerosene's attraction for itself domes it up the tube`, r`The wall's attraction for the kerosene pulls it up the wall`, r`The buoyant force from the dish floats it up the tube`, r`The weight of kerosene in the dish squeezes it up the tube`],
        correctAnswer: 1,
        explanation: r`When adhesion beats cohesion the liquid climbs the wall, because the wall attracts it more strongly than it attracts itself. That gives the concave meniscus and the rise. Cohesion winning would dome the surface and push the level down, and neither buoyancy nor the weight of the dish liquid lifts a level above the level outside.`,
      },
      {
        question: r`Liquid L attracts quartz more strongly than L attracts itself. A narrow quartz tube dips into a dish of L. Where is the surface inside the tube highest, and where does the level sit compared with the dish?`,
        options: [r`Highest at the center, and above the level in the dish`, r`Highest at the wall, and below the level in the dish`, r`Highest at the center, and below the level in the dish`, r`Highest at the wall, and above the level in the dish`],
        correctAnswer: 3,
        explanation: r`With adhesion stronger, the liquid climbs the wall, so the surface is highest at the wall and lowest in the middle (a concave meniscus), and the whole level rises above the dish. A surface highest at the center is a convex meniscus, which goes with cohesion winning and a level pushed down.`,
      },
    ],
  },
  [r`What does a liquid do in a narrow tube when cohesion beats adhesion?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An instrument maker dips a narrow clean glass tube, open at both ends, into a dish of mercury. The mercury inside the tube sits lower than the mercury around it. Which explanation is correct?`,
        options: [r`Mercury atoms attract one another more than they attract glass`, r`Mercury atoms attract glass more than they attract one another`, r`Mercury is denser than glass, so its weight drags the level down`, r`Mercury is denser than water, so buoyancy pushes the level down`],
        correctAnswer: 0,
        explanation: r`A level pushed down below the level outside means cohesion beats adhesion: mercury holds to itself more strongly than to glass. Adhesion winning would make the mercury climb. The densities of mercury and glass do not decide this, and buoyancy does not push a liquid's own level down.`,
      },
      {
        question: r`Liquid Q attracts itself more strongly than it attracts polymer P, but less strongly than it attracts metal M. A narrow tube of P dipping into a dish of Q is swapped for an equally narrow tube of M. How does the meniscus change?`,
        options: [r`From concave and above the dish to convex and below it`, r`From convex and above the dish to concave and below it`, r`From convex and below the dish to concave and above it`, r`From concave and below the dish to convex and above it`],
        correctAnswer: 2,
        explanation: r`In the tube of P cohesion wins, so the surface domes up (convex) and the level is pushed down below the dish. In the tube of M adhesion wins, so the meniscus is concave and the level rises above the dish. The other options start from the wrong case or pair a shape with the wrong direction.`,
      },
    ],
  },
  [r`How does the width of a tube change the capillary rise or fall?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two strips of blotting paper stand with their lower ends in a tray of water. One strip has very fine pores and the other has coarse pores, and water adheres strongly to both. In which strip does the water climb higher, and why?`,
        options: [r`The coarse one, since wider channels give a larger rise`, r`Neither one, since the pore width does not affect the rise`, r`The coarse one, since wider channels can hold more water`, r`The fine one, since narrower channels give a larger rise`],
        correctAnswer: 3,
        explanation: r`Capillary rise is larger the narrower the channel, so the water climbs higher in the fine-pored strip. Expecting the wide channels to show the bigger rise is the usual trap. Wider channels do hold more water, but that is not what sets how high the water climbs.`,
      },
      {
        question: r`A clinic draws fingertip blood into thin glass tubes by capillary action. A new batch of tubes is made of the same glass but has twice the inner width. Held the same way, how does the height the blood climbs compare?`,
        options: [r`It climbs higher, since a wider tube gives a larger rise`, r`It climbs less high, since a wider tube gives a smaller rise`, r`It climbs just as high, since the glass is the same glass`, r`It is pushed down, since a wider tube reverses the effect`],
        correctAnswer: 1,
        explanation: r`The narrower the tube, the larger the capillary rise, so a wider tube of the same glass gives a smaller rise. The same glass means the blood still rises, but width changes how far. A wider tube does not reverse the direction: that depends on which attraction is stronger.`,
      },
    ],
  },
  [r`What does the surface tension of the lining fluid do to an alveolus, and which alveoli are most at risk?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a model lung with no surfactant, a large alveolus and a small alveolus are lined with the same fluid. Which one has the stronger tendency to collapse, and which way does the lining pull on its wall?`,
        options: [r`The large one; the lining pulls its wall inward`, r`The small one; the lining pushes its wall outward`, r`The small one; the lining pulls its wall inward`, r`The large one; the lining pushes its wall outward`],
        correctAnswer: 2,
        explanation: r`The surface tension of the lining fluid pulls the wall inward, and this collapsing effect is stronger the smaller the alveolus. So the small alveolus is more at risk. The lining never pushes outward, and it is not the large sac that is in the most danger.`,
      },
      {
        question: r`The fluid lining the inside of an air sac has a surface that acts like a stretched skin. What does that skin try to do, and what is the effect on the sac?`,
        options: [r`Shrink its area, pulling the sac wall inward toward collapse`, r`Grow its area, pushing the sac wall outward toward bursting`, r`Shrink its area, pushing the sac wall outward to stay open`, r`Grow its area, pulling the sac wall inward toward collapse`],
        correctAnswer: 0,
        explanation: r`A liquid surface always tries to shrink. For the lining of an alveolus, shrinking means drawing inward, which tends to collapse the sac. A surface does not try to grow, and a shrinking lining cannot push the wall outward.`,
      },
    ],
  },
  [r`What does pulmonary surfactant do, and which cells secrete it?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sample of the fluid lining healthy alveoli has a much lower surface tension than plain salt water. Which cells secrete the substance responsible, and what does it do for the lungs?`,
        options: [r`Type I alveolar cells; it keeps small alveoli from collapsing`, r`Type II alveolar cells; it keeps small alveoli from collapsing`, r`Type II alveolar cells; it makes small alveoli collapse sooner`, r`Type I alveolar cells; it makes small alveoli collapse sooner`],
        correctAnswer: 1,
        explanation: r`Pulmonary surfactant is secreted by type II alveolar cells. It lowers the surface tension of the lining fluid, which weakens the inward pull and keeps the small alveoli open. Type I cells do not secrete it, and lowering the surface tension protects against collapse instead of causing it.`,
      },
      {
        question: r`A student writes four statements about pulmonary surfactant in her notes. Which one is incorrect?`,
        options: [r`It is secreted by the type II alveolar cells`, r`It spreads over the fluid lining the alveoli`, r`It helps the smallest alveoli to stay open`, r`It raises the surface tension of the lining`],
        correctAnswer: 3,
        explanation: r`Surfactant lowers the surface tension of the lining fluid; it does not raise it. The other three statements are correct: type II alveolar cells secrete it, it spreads over the lining, and by weakening the inward pull it keeps the small alveoli open.`,
      },
    ],
  },
  [r`Why do premature infants develop respiratory distress syndrome?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A delivery at 29 weeks cannot be avoided, so doctors give the mother a drug that makes the fetal lungs start producing surfactant sooner. Which outcome is the drug meant to prevent in the newborn?`,
        options: [r`High alveolar surface tension that makes the small alveoli collapse`, r`Low alveolar surface tension that makes the small alveoli collapse`, r`High alveolar surface tension that makes the large alveoli overfill`, r`Low alveolar surface tension that makes the large alveoli overfill`],
        correctAnswer: 0,
        explanation: r`A premature infant cannot yet make enough surfactant, so the surface tension in the alveoli stays high and the small alveoli collapse: respiratory distress syndrome. Getting surfactant made sooner heads this off. A lack of surfactant does not give low surface tension, and the danger is collapse of the small alveoli, not overfilling of the large ones.`,
      },
      {
        question: r`A newborn's small alveoli collapse at the end of each breath out, and tests show an unusually high surface tension in the alveolar lining fluid. What is the most likely cause?`,
        options: [r`Too much surfactant, as expected after a premature birth`, r`Too much surfactant, as expected after a full-term birth`, r`Too little surfactant, as expected after a premature birth`, r`Too little surfactant, as expected after a full-term birth`],
        correctAnswer: 2,
        explanation: r`High surface tension and collapsing small alveoli point to a lack of surfactant, which is what happens when a baby is born before the lungs can make enough of it. Too much surfactant would lower the surface tension, not raise it, and a full-term baby is expected to make enough.`,
      },
    ],
  },
  [r`What do you ask first in any problem about a liquid in a narrow tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two students predict what glycerol does in narrow tubes dipped into the same dish. One correctly predicts a rise in her tube, and the other correctly predicts a fall in his. How can both be right?`,
        options: [r`The glycerol is denser in one tube than it is in the other`, r`The glycerol has cohesion in one tube and none in the other`, r`The glycerol feels gravity in one tube and not in the other`, r`The glycerol adheres strongly to one wall and weakly to the other`],
        correctAnswer: 3,
        explanation: r`Whether a liquid rises or falls depends on which attraction is stronger, adhesion to the wall or cohesion within the liquid. Different wall materials can give different winners, so the same liquid can rise in one tube and fall in another. The liquid's density, cohesion and weight are the same in both tubes.`,
      },
      {
        question: r`A problem about a solvent in a narrow steel tube that dips into a dish of the solvent gives one fact: the solvent's adhesion to this steel is weaker than its cohesion. What should you predict?`,
        options: [r`A concave meniscus, and a level raised above the dish`, r`A convex meniscus, and a level pushed below the dish`, r`A convex meniscus, and a level raised above the dish`, r`A concave meniscus, and a level pushed below the dish`],
        correctAnswer: 1,
        explanation: r`The first thing to settle is which attraction is stronger, and here it is cohesion. Cohesion stronger means a convex meniscus and a level pushed down. Concave and up belongs to the case where adhesion is stronger, and the two mixed options pair a shape with the wrong direction.`,
      },
    ],
  },
  [r`What does the shape of a meniscus tell you about a liquid in a tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A technician can see only the top of a liquid column in a narrow tube through a small window; the dish it dips into is hidden. The meniscus is concave. What can she say about the level in the tube?`,
        options: [r`It is below the outside level, because adhesion is winning`, r`It is above the outside level, because cohesion is winning`, r`It is above the outside level, because adhesion is winning`, r`It is below the outside level, because cohesion is winning`],
        correctAnswer: 2,
        explanation: r`A concave meniscus means adhesion to the wall is winning, and that goes with a level that has risen above the level outside. Cohesion winning gives a convex meniscus and a level pushed down, so the options that name cohesion or put the level below do not fit a concave surface.`,
      },
      {
        question: r`A student makes a summary table for liquids in narrow tubes that dip into a dish of the same liquid. Which row of the table is correct?`,
        options: [r`Convex meniscus, cohesion winning, level pushed down`, r`Convex meniscus, adhesion winning, level pushed down`, r`Concave meniscus, cohesion winning, level has risen`, r`Concave meniscus, adhesion winning, level pushed down`],
        correctAnswer: 0,
        explanation: r`Convex goes with cohesion winning and a level pushed down; concave goes with adhesion winning and a level that has risen. The other rows each mix one shape with the winner or the direction that belongs to the other shape.`,
      },
    ],
  },
  [r`What is the common trap when a liquid's surface in a tube is domed?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sketch shows a liquid with a domed surface in a narrow tube that dips into a dish of the same liquid. Many students answer that the liquid has risen. Why is that answer tempting, and what is the truth?`,
        options: [r`A dome looks like liquid sinking, but it marks a level that has risen`, r`A dome looks like liquid bulging up, but it marks a level pushed down`, r`A dome looks like liquid bulging up, and it marks a level that has risen`, r`A dome looks like liquid sinking, and it marks a level pushed down`],
        correctAnswer: 1,
        explanation: r`The dome bulges upward in the middle, so it is easy to read it as a liquid that has climbed. In fact a domed surface is a convex meniscus, which goes with cohesion winning and a level pushed down below the level outside. A dome never marks a risen level, and it does not look like sinking.`,
      },
      {
        question: r`Tube 1 holds a liquid whose surface is domed, highest in the middle. Tube 2 holds a different liquid whose surface is dished, lowest in the middle. Each narrow tube dips into a dish of its own liquid. In which tube is the level below the level in its dish?`,
        options: [r`In tube 2 only, where the surface is dished`, r`In both tubes, since each surface is curved`, r`In neither tube, since each dips into a dish`, r`In tube 1 only, where the surface is domed`],
        correctAnswer: 3,
        explanation: r`A domed surface is a convex meniscus, and convex goes with a level pushed down, so tube 1 is the one below its dish. The dished surface in tube 2 is concave, which goes with a level that has risen. Reading the dome as a rise is the common trap.`,
      },
    ],
  },
  [r`How do you rank tubes of different widths by how far the liquid level moves?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Clean glass tubes of inner diameter 0.4 mm, 0.8 mm and 2 mm stand in one dish of water, and the water rises in each. Rank the tubes from the greatest rise to the least.`,
        options: [r`0.4 mm, then 0.8 mm, then 2 mm`, r`2 mm, then 0.8 mm, then 0.4 mm`, r`0.8 mm, then 0.4 mm, then 2 mm`, r`0.8 mm, then 2 mm, then 0.4 mm`],
        correctAnswer: 0,
        explanation: r`The narrowest tube shows the largest change in level, so the rise is greatest in the 0.4 mm tube, then the 0.8 mm tube, then the 2 mm tube. Ranking the widest tube first is the usual trap, and the middle tube cannot show the largest change.`,
      },
      {
        question: r`Two clean glass tubes stand in one dish of mercury. In tube A the mercury sits 2 mm below the dish level, and in tube B it sits 8 mm below. Which tube is narrower, and why?`,
        options: [r`Tube A, because the narrowest tube shows the smallest change`, r`Tube A, because a wide tube lets the mercury fall further`, r`Tube B, because the narrowest tube shows the largest change`, r`Neither, because width affects a rise but never a fall`],
        correctAnswer: 2,
        explanation: r`The narrowest tube shows the largest change in level whether the liquid rises or is pushed down, so tube B, with the 8 mm drop, is the narrower one. Expecting the wide tube to show the larger change is the trap, and width matters for a fall just as it does for a rise.`,
      },
    ],
  },
  [r`Water rises in a clean glass tube. What does it do in the same tube lined with wax, and why?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two identical narrow glass tubes stand in one dish of water. One is clean, and the inside of the other is lined with wax. How do the water levels inside the tubes compare with the level in the dish?`,
        options: [r`Below the dish in the clean tube, above it in the waxed tube`, r`Above the dish in the clean tube, above it in the waxed tube`, r`Below the dish in the clean tube, below it in the waxed tube`, r`Above the dish in the clean tube, below it in the waxed tube`],
        correctAnswer: 3,
        explanation: r`Water adheres strongly to clean glass, so adhesion wins and the water rises above the dish. Water adheres to wax only weakly, so cohesion wins there and the level is pushed down below the dish. The water is the same in both tubes; the wall decides the result.`,
      },
      {
        question: r`Water climbs in a narrow clean glass tube, but in the same tube with a wax lining its surface domes up and sits below the dish level. Why is the result reversed when the water is the same?`,
        options: [r`The water changed: wax dissolves in it and removes its cohesion`, r`The wall changed: water adheres to wax less than it coheres`, r`The wall changed: water adheres to wax more than it does to glass`, r`The water changed: wax raises its density and makes it sink`],
        correctAnswer: 1,
        explanation: r`Only the wall is different. Water's adhesion to wax is weaker than its cohesion, so cohesion now wins, giving a convex meniscus and a level pushed down, the way mercury behaves in glass. The water itself is unchanged, and stronger adhesion to wax would make it climb, not fall.`,
      },
    ],
  },
  [r`What are the three steps of reasoning about surface tension in the lungs?`]: {
    kind: 'concept',
    more: [
      {
        question: r`After a lung injury, a patient's alveoli make less surfactant than normal. Following the lung reasoning step by step, which alveoli are expected to collapse first, and why?`,
        options: [r`The largest, where the higher surface tension pulls inward hardest`, r`The smallest, where the lower surface tension pulls inward hardest`, r`The smallest, where the higher surface tension pulls inward hardest`, r`The largest, where the lower surface tension pulls inward hardest`],
        correctAnswer: 2,
        explanation: r`Less surfactant means the surface tension of the lining fluid is higher. That surface tension pulls inward, and the effect is strongest in the smallest alveoli, so they collapse first. Losing surfactant does not lower the surface tension, and the largest alveoli are the least at risk.`,
      },
      {
        question: r`A student writes out her reasoning about surface tension in the lungs as four lines. Which line is incorrect?`,
        options: [r`The inward pull is strongest in the largest alveoli`, r`Surface tension in the lining fluid pulls the wall inward`, r`Surfactant lowers the surface tension of the lining fluid`, r`Less surfactant makes the alveoli more likely to collapse`],
        correctAnswer: 0,
        explanation: r`The collapsing effect of surface tension is strongest in the smallest alveoli, not the largest. The other three lines are the correct steps: the lining's surface tension pulls inward, surfactant lowers it, and so less surfactant means more collapse.`,
      },
    ],
  },
  [r`What must every predict-and-explain answer about a liquid surface include?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A question says: 'A steel needle rests on water. Predict what happens when a drop of soap is added, and explain.' Which answer is complete and correct?`,
        options: [r`It sinks, and it comes to rest on the bottom of the bowl`, r`It sinks, because soap lowers the surface tension holding it`, r`It sinks, because soap makes the needle heavier than before`, r`It sinks, because the soap removes the water's buoyant force`],
        correctAnswer: 1,
        explanation: r`A complete answer gives the prediction and its "because" in terms of cohesion, adhesion or surface tension: soap is a surfactant, it lowers the surface tension, and the weakened skin can no longer hold the needle. Saying where the needle ends up gives no reason, and soap changes neither the needle's weight nor the existence of buoyancy.`,
      },
      {
        question: r`A student answers a predict-and-explain question with the single sentence 'The mercury level is pushed down in the narrow glass tube.' The grader marks it incomplete. What is missing?`,
        options: [r`The units: the newtons per meter of the mercury surface`, r`The reason: mercury's adhesion to glass beats its cohesion`, r`The numbers: the exact depth the mercury level is pushed`, r`The reason: mercury's cohesion beats its adhesion to glass`],
        correctAnswer: 3,
        explanation: r`The prediction is right, but every such answer needs its "because", stated in terms of cohesion, adhesion or surface tension. Mercury is pushed down because its cohesion is stronger than its adhesion to glass. Adhesion winning would be the wrong reason, and neither numbers nor units are what the question asks for.`,
      },
    ],
  },
}
