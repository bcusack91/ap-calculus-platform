import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Fluids Part 2 video deck (`mcat-fl2`): one per
 * review card, keyed by the card's exact front text. Each asks the student to
 * use the card's idea in a new situation. Its further questions are in
 * variants/mcat-fl2.p*.ts. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`What symbol stands for the buoyant force, and what is its SI unit?`]: {
    question: r`A lab report lists $F_b$ = 12 for a ball held under oil, but leaves off the unit and the direction. Which reading of the entry is correct?`,
    options: [
      r`A downward force of 12 N from the oil on the ball`,
      r`An upward pressure of 12 Pa from the oil on the ball`,
      r`A density of 12 kg/m³ for the oil around the ball`,
      r`An upward force of 12 N from the oil on the ball`,
    ],
    correctAnswer: 3,
    explanation: r`$F_b$ is the buoyant force: the net upward force a fluid exerts on an object in it, measured in newtons. A fluid at rest never gives a net downward push. A pressure in pascals is a force per area rather than a force, and a density in kg/m³ is a property of the oil alone.`,
  },
  [r`What symbol stands for the submerged volume, and what is its SI unit?`]: {
    question: r`A 6.0 L jug floats in a pool with exactly half of its volume below the surface. What value of $V$ belongs in $F_b = \rho V g$?`,
    options: [r`3.0 × 10⁻³ m³`, r`6.0 × 10⁻³ m³`, r`3.0 m³`, r`6.0 m³`],
    correctAnswer: 0,
    explanation: r`$V$ is the SUBMERGED volume, in cubic meters. Half of 6.0 L is 3.0 L, and 1 L = 10⁻³ m³, so $V$ = 3.0 × 10⁻³ m³. 6.0 × 10⁻³ m³ is the whole jug, including the part above the surface, and 3.0 m³ or 6.0 m³ leaves the volume in liters.`,
  },
  [r`Where does the buoyant force come from?`]: {
    question: r`A thin flat plate lies level under water, so its top and bottom faces are at almost the same depth. Compared with a tall block that has the same face area, the buoyant force on the plate is`,
    options: [
      r`much larger, since a thin plate lets more water push on it`,
      r`the same, since the two objects have equal face areas`,
      r`zero, since water pushes equally on every thin object`,
      r`much smaller, since its two faces feel nearly equal pressures`,
    ],
    correctAnswer: 3,
    explanation: r`The buoyant force is the push up on the bottom face minus the push down on the top face. The plate's faces are at nearly the same depth, so the pressures on them are nearly equal and the difference is small. It is not zero, because the bottom face is still slightly deeper, and face area alone does not set the force.`,
  },
  [r`What is the pressure difference between the top and bottom faces of a block held under a fluid?`]: {
    question: r`A block 0.50 m tall is held under oil of density 800 kg/m³. By how much does the pressure on its bottom face exceed the pressure on its top face? (g = 10 m/s²)`,
    options: [r`400 Pa`, r`4,000 Pa`, r`5,000 Pa`, r`16,000 Pa`],
    correctAnswer: 1,
    explanation: r`The difference is $\Delta P = \rho g h$ over the block's own height: (800)(10)(0.50) = 4,000 Pa. 5,000 Pa uses water's density instead of the oil's, 400 Pa leaves out g, and 16,000 Pa divides by the height instead of multiplying.`,
  },
  [r`How does the pressure difference across a block give the buoyant force on it?`]: {
    question: r`The pressure on the bottom face of a submerged crate is 2,500 Pa greater than the pressure on its top face. Each of those two faces has an area of 0.20 m². What is the buoyant force on the crate?`,
    options: [r`250 N`, r`500 N`, r`2,500 N`, r`12,500 N`],
    correctAnswer: 1,
    explanation: r`$F_b = \Delta P \cdot A$ = (2,500 Pa)(0.20 m²) = 500 N. 12,500 N divides the pressure difference by the area, 2,500 N reports the pressure difference as if it were a force, and 250 N slips a decimal place.`,
  },
  [r`Write the buoyant force as an equation.`]: {
    question: r`A float of volume 2.0 × 10⁻² m³ is held completely under glycerin of density 1250 kg/m³. What is the buoyant force on it? (g = 10 m/s²)`,
    options: [r`25 N`, r`200 N`, r`250 N`, r`2,500 N`],
    correctAnswer: 2,
    explanation: r`$F_b = \rho V g$ with the glycerin's density: (1250)(2.0 × 10⁻²)(10) = 250 N. 200 N uses water's density, 25 N leaves out g and so is the displaced mass in kilograms, and 2,500 N slips a power of ten.`,
  },
  [r`An object pushes aside some fluid. How does the weight of that fluid compare with the buoyant force on the object?`]: {
    question: r`A measuring cylinder holds oil of density 900 kg/m³. A bolt is dropped in and sinks, and the oil level rises by 20 cm³. What is the buoyant force on the bolt? (g = 10 m/s²)`,
    options: [r`0.018 N`, r`0.18 N`, r`0.20 N`, r`18 N`],
    correctAnswer: 1,
    explanation: r`The bolt pushes aside 20 cm³ = 2.0 × 10⁻⁵ m³ of oil. That oil has a mass of (900)(2.0 × 10⁻⁵) = 0.018 kg and a weight of 0.18 N, which is the buoyant force. 0.018 N stops at the mass, 0.20 N uses water's density, and 18 N mishandles the conversion from cm³.`,
  },
  [r`Whose density goes into $F_b = \rho V g$: the fluid's or the object's?`]: {
    question: r`A student computes the buoyant force on an aluminum block (2700 kg/m³) of volume 1.0 × 10⁻³ m³ held fully under water (1000 kg/m³) and gets 27 N. What went wrong? (g = 10 m/s²)`,
    options: [
      r`The water's density was used; the answer is 17 N`,
      r`The volume was left in liters; the answer is 2.7 N`,
      r`Nothing went wrong; the answer of 27 N is correct`,
      r`The block's density was used; the answer is 10 N`,
    ],
    correctAnswer: 3,
    explanation: r`The buoyant force uses the FLUID's density: (1000)(1.0 × 10⁻³)(10) = 10 N. The 27 N came from the aluminum's density, so it is the block's weight. 17 N is the weight minus the buoyant force, and the volume was already in cubic meters.`,
  },
  [r`How does the buoyant force change while an object is lowered through the surface of a fluid?`]: {
    question: r`A crane lowers a buoy into the sea. The buoyant force on the buoy is 300 N when exactly half of it is under water. What is the buoyant force when it is fully under, and when it is then lowered 5 m deeper?`,
    options: [
      r`600 N fully under, and more when deeper`,
      r`300 N fully under, and 300 N when deeper`,
      r`300 N fully under, and 600 N when deeper`,
      r`600 N fully under, and 600 N when deeper`,
    ],
    correctAnswer: 3,
    explanation: r`The force grows with the submerged volume, so doubling the volume under water doubles it to 600 N. Once the buoy is fully under, the submerged volume cannot grow, so the force stays 600 N at any depth. Answers that keep 300 N ignore the extra volume, and a force that grows with depth confuses buoyancy with pressure.`,
  },
  [r`Why is the buoyant force on a fully submerged object the same at any depth?`]: {
    question: r`A cube 0.10 m tall is held under water. With its top face 1 m deep, the pressures on its top and bottom faces differ by 1,000 Pa. What is that difference when the top face is 4 m deep?`,
    options: [r`250 Pa`, r`1,000 Pa`, r`4,000 Pa`, r`30,000 Pa`],
    correctAnswer: 1,
    explanation: r`Going 3 m deeper raises the pressure on BOTH faces by the same 30,000 Pa, so the difference between them is still 1,000 Pa: it is ρgh over the cube's own height, whatever the depth. 4,000 Pa scales the difference with depth, 250 Pa scales it the other way, and 30,000 Pa is the rise in each pressure, not the difference.`,
  },
  [r`Which three things about an object leave the buoyant force on it unchanged?`]: {
    question: r`A solid ball is held fully under water. Which change would alter the buoyant force on it?`,
    options: [
      r`Swapping it for a heavier ball of the same size`,
      r`Swapping it for a denser ball of the same size`,
      r`Lowering it to a point that is twice as deep`,
      r`Swapping it for a larger ball of the same weight`,
    ],
    correctAnswer: 3,
    explanation: r`Only the fluid's density and the submerged volume matter, so a larger ball, which displaces more water, feels a larger buoyant force. A heavier or denser ball of the same size displaces the same water, and depth makes no difference once the ball is fully under.`,
  },
  // Video 2
  [r`How do you find the buoyant force on a block from the pressures on its faces?`]: {
    question: r`A box is held under water. The gauge pressure is 2,000 Pa at its top face and 6,000 Pa at its bottom face, and each of those faces has an area of 0.050 m². What is the buoyant force on the box?`,
    options: [r`100 N`, r`200 N`, r`300 N`, r`400 N`],
    correctAnswer: 1,
    explanation: r`Turn each pressure into a force: (2,000)(0.050) = 100 N down on the top and (6,000)(0.050) = 300 N up on the bottom. The buoyant force is the difference, 300 − 100 = 200 N. 300 N is the bottom face alone, 100 N is the top face alone, and 400 N adds two forces that point in opposite directions.`,
  },
  [r`Why is gauge pressure enough when you find a buoyant force from the face pressures?`]: {
    question: r`A student finds the buoyant force on a submerged block from gauge pressures and gets 60 N. She repeats the work with absolute pressures, adding atmospheric pressure at both faces. What does she get?`,
    options: [
      r`More than 60 N, since both pushes are larger`,
      r`Less than 60 N, since the air pushes down on it`,
      r`Exactly 60 N, since the added pressure cancels`,
      r`Exactly 0 N, since the air balances the water`,
    ],
    correctAnswer: 2,
    explanation: r`Atmospheric pressure adds the same amount to the push on the top face and to the push on the bottom face, so it drops out when the two are subtracted: still 60 N. Both pushes are larger, but their difference is not. The air neither reduces the buoyant force nor balances it.`,
  },
  [r`What is the common trap when a buoyant force is found from the forces on a block's faces?`]: {
    question: r`A submerged cube feels a water force of 90 N on its top face and 150 N on its bottom face. A student reports a buoyant force of 150 N. What is the correct value, and what was the slip?`,
    options: [
      r`60 N; the push down on the top was not subtracted`,
      r`240 N; the push on the top was not added in`,
      r`90 N; the force on the wrong face was reported`,
      r`150 N; the student's answer is already correct`,
    ],
    correctAnswer: 0,
    explanation: r`The buoyant force is the push up on the bottom minus the push down on the top: 150 − 90 = 60 N. Reporting 150 N stops at the bottom face alone. Adding the two forces to get 240 N treats opposite pushes as if they pointed the same way, and 90 N is just the top face.`,
  },
  [r`What unit must the volume have in $F_b = \rho V g$, and how do liters and cubic centimeters convert?`]: {
    question: r`A 250 cm³ glass stopper is fully under water (1000 kg/m³). What is the buoyant force on it? (g = 10 m/s²)`,
    options: [r`0.25 N`, r`2.5 N`, r`25 N`, r`2,500 N`],
    correctAnswer: 1,
    explanation: r`Convert first: 250 cm³ = 250 × 10⁻⁶ m³ = 2.5 × 10⁻⁴ m³. Then $F_b$ = (1000)(2.5 × 10⁻⁴)(10) = 2.5 N. 0.25 N leaves out g, so it is the displaced mass in kilograms; 2,500 N treats cm³ as liters; and 25 N slips a power of ten in the conversion.`,
  },
  [r`How do you find the weight of a solid object from its density?`]: {
    question: r`A solid granite block has a density of 2500 kg/m³ and a volume of 2.0 × 10⁻² m³. It sits fully under water (1000 kg/m³). What is the block's weight? (g = 10 m/s²)`,
    options: [r`50 N`, r`200 N`, r`300 N`, r`500 N`],
    correctAnswer: 3,
    explanation: r`Weight uses the object's own density: W = (2500)(2.0 × 10⁻²)(10) = 500 N, in or out of the water. 200 N uses the water's density and so is the buoyant force, 300 N is the weight minus the buoyant force, and 50 N is the block's mass in kilograms.`,
  },
  [r`How do you find the net force on a fully submerged object at the moment it is released?`]: {
    question: r`A 3.0 kg rock with a volume of 1.0 × 10⁻³ m³ is released fully under oil of density 800 kg/m³. What is the net force on the rock at that moment? (g = 10 m/s²)`,
    options: [r`8.0 N upward`, r`20 N downward`, r`22 N downward`, r`38 N downward`],
    correctAnswer: 2,
    explanation: r`Buoyant force: (800)(1.0 × 10⁻³)(10) = 8.0 N up. Weight: (3.0)(10) = 30 N down. The net force is 30 − 8.0 = 22 N downward, so the rock sinks. 20 N downward uses water's density, 8.0 N upward is the buoyant force alone, and 38 N adds two forces that point in opposite directions.`,
  },
  [r`An object stays fully submerged while the fluid around it is swapped for a denser one. What happens to the buoyant force?`]: {
    question: r`A fully submerged probe feels a buoyant force of 50 N in fresh water (1000 kg/m³). What buoyant force does it feel fully submerged in brine of density 1200 kg/m³?`,
    options: [r`42 N`, r`50 N`, r`60 N`, r`72 N`],
    correctAnswer: 2,
    explanation: r`The submerged volume is the same, so the buoyant force scales with the fluid's density: 50 N × (1200/1000) = 60 N. 50 N ignores the change of fluid, 42 N divides by 1.2 instead of multiplying, and 72 N applies the factor of 1.2 twice.`,
  },
  // Video 3
  [r`What symbol stands for the average density of an object, and what is its SI unit?`]: {
    question: r`A sealed hollow ball has a mass of 0.30 kg and an outer volume of 5.0 × 10⁻⁴ m³, most of it air space. What average density decides whether the ball floats?`,
    options: [r`60 kg/m³`, r`600 kg/m³`, r`1,700 kg/m³`, r`6,000 kg/m³`],
    correctAnswer: 1,
    explanation: r`The average density is the total mass over the total volume, air space included: 0.30/(5.0 × 10⁻⁴) = 600 kg/m³, below water's, so the ball floats. 60 and 6,000 kg/m³ slip a power of ten, and 1,700 comes from dividing the volume by the mass instead.`,
  },
  [r`What symbol stands for specific gravity, and what is its SI unit?`]: {
    question: r`Ethanol has a density of 790 kg/m³, and water has a density of 1000 kg/m³. How should ethanol's specific gravity be reported?`,
    options: [r`0.79, with no unit`, r`0.79 kg/m³`, r`1.27, with no unit`, r`790 kg/m³`],
    correctAnswer: 0,
    explanation: r`Specific gravity is a density divided by water's density: 790/1000 = 0.79. The units cancel, so it carries none. 1.27 turns the ratio upside down, and 790 kg/m³ is the density itself, not the ratio.`,
  },
  [r`How do you predict whether an object will float, hover or sink in a fluid?`]: {
    question: r`Three sealed capsules are released at mid-depth in a tank of liquid of density 1100 kg/m³. Their average densities are 900, 1100 and 1300 kg/m³. What does each capsule do?`,
    options: [
      r`900 sinks, 1100 hovers, 1300 rises`,
      r`900 rises, 1100 rises, 1300 sinks`,
      r`900 rises, 1100 sinks, 1300 sinks`,
      r`900 rises, 1100 hovers, 1300 sinks`,
    ],
    correctAnswer: 3,
    explanation: r`Compare each average density with the liquid's 1100 kg/m³. Less dense rises and floats, equal hovers wherever it is put, and denser sinks. The reversed answer has the comparison backwards, and a capsule that matches the liquid neither rises nor sinks.`,
  },
  [r`Why does a steel ship float when a solid block of steel sinks?`]: {
    question: r`An empty steel hull has a mass of 4.0 × 10⁶ kg and encloses a total volume of 1.0 × 10⁴ m³. Steel's density is about 8000 kg/m³ and water's is 1000 kg/m³. Does the hull float, and why?`,
    options: [
      r`No: steel's density, 8000 kg/m³, is above water's`,
      r`Yes: its average density, 2500 kg/m³, is below steel's`,
      r`No: its average density, 2500 kg/m³, is above water's`,
      r`Yes: its average density, 400 kg/m³, is below water's`,
    ],
    correctAnswer: 3,
    explanation: r`What matters is the average density of the whole hull, air included: (4.0 × 10⁶)/(1.0 × 10⁴) = 400 kg/m³, which is below water's, so it floats. Using the density of the steel itself is the trap, and 2500 kg/m³ comes from dividing the volume by the mass.`,
  },
  [r`How do a fish and a swimmer change whether they rise, hover or sink?`]: {
    question: r`A fish hovering at rest lets some gas out of its swim bladder, so its body takes up slightly less volume while its mass stays the same. What happens next?`,
    options: [
      r`Its average density falls, so it starts to rise`,
      r`Its average density rises, so it starts to rise`,
      r`Its average density is unchanged, so it hovers`,
      r`Its average density rises, so it starts to sink`,
    ],
    correctAnswer: 3,
    explanation: r`Average density is mass over volume. The same mass in a smaller volume is a higher average density, now above the water's, so the fish sinks. Adding gas would do the opposite. A denser object never rises, and the density cannot stay the same when the volume changes.`,
  },
  [r`What force balance holds for any object floating at rest?`]: {
    question: r`A 70 kg swimmer floats motionless on her back in a lake. What is the buoyant force on her? (g = 10 m/s²)`,
    options: [r`0 N`, r`70 N`, r`700 N`, r`7,000 N`],
    correctAnswer: 2,
    explanation: r`Floating at rest means the buoyant force equals the weight: $F_b = mg$ = (70)(10) = 700 N. 70 N leaves out g, 0 N would leave her weight unsupported, and 7,000 N slips a power of ten.`,
  },
  [r`An object is set down on a fluid and settles into it. Why does it stop where it does?`]: {
    question: r`A wooden block is set gently on water and settles down toward its floating position. At the moment it has sunk in only halfway to that position, how does the buoyant force compare with its weight?`,
    options: [
      r`It is smaller than the weight, and still growing`,
      r`It is larger than the weight, and still growing`,
      r`It is equal to the weight, and no longer growing`,
      r`It is zero for now, and appears once it is at rest`,
    ],
    correctAnswer: 0,
    explanation: r`The buoyant force grows as the block displaces more water, and the block stops sinking in when that force has grown to match its weight. Halfway there it has displaced only part of its own weight of water, so the force is still smaller than the weight. It equals the weight only at the floating position, and it is never zero while any of the block is under.`,
  },
  [r`Write the submerged fraction of a floating object as an equation.`]: {
    question: r`A solid rubber ball of density 960 kg/m³ is dropped into a vat of brine of density 1200 kg/m³ and comes to rest floating. How much of the ball lies under the brine's surface?`,
    options: [r`0.20`, r`0.25`, r`0.80`, r`1.25`],
    correctAnswer: 2,
    explanation: r`$V_{\text{sub}}/V = \rho_{\text{object}}/\rho_{\text{fluid}}$ = 960/1200 = 0.80. 0.20 is the part above the surface, 1.25 turns the ratio upside down, which is impossible for a fraction, and 0.25 divides the 240 kg/m³ difference by the ball's density.`,
  },
  [r`Does the density ratio of a floating object give the part below the surface or the part above it?`]: {
    question: r`Kerosene has a density of 800 kg/m³. A pine board of density 600 kg/m³ is laid on a tank of kerosene and floats. How much of the board shows above the kerosene?`,
    options: [r`25%`, r`33%`, r`75%`, r`133%`],
    correctAnswer: 0,
    explanation: r`The density ratio, 600/800 = 0.75, is the part BELOW the surface. The part showing above is the rest: 25%. 75% answers for the wrong part, 133% turns the ratio upside down, and 33% divides the part above by the part below.`,
  },
  [r`One object floats first in a fluid and then in a denser fluid. How do the buoyant force and the way it sits compare?`]: {
    question: r`A 2.0 N cork floats at rest in water. It is moved to a salt solution that is 25% denser than water, where it again floats at rest. What is the buoyant force on the cork in the salt solution?`,
    options: [r`0.50 N`, r`1.6 N`, r`2.0 N`, r`2.5 N`],
    correctAnswer: 2,
    explanation: r`A floating object's buoyant force equals its weight in any fluid: 2.0 N. The denser solution supplies that force with less submerged volume, so the cork rides higher. 2.5 N scales the force with the fluid's density, which is right only for a fully submerged object; 1.6 N divides by 1.25 instead; and 0.50 N is the difference between those two.`,
  },
  [r`Why does a floating ice cube leave the water level unchanged as it melts?`]: {
    question: r`A 90 g ice cube floats in a glass of water. How much water does it displace while it floats, and how much water does it become when it melts?`,
    options: [
      r`100 g displaced, and 90 g of meltwater`,
      r`90 g displaced, and 100 g of meltwater`,
      r`90 g displaced, and 90 g of meltwater`,
      r`83 g displaced, and 90 g of meltwater`,
    ],
    correctAnswer: 2,
    explanation: r`A floating object displaces its own weight of fluid, so the cube displaces 90 g of water. Melting does not change its mass, so it becomes 90 g of water, which exactly fills the space it was displacing. That match is why the level does not move.`,
  },
  [r`For an object floating in water, how is the submerged fraction related to its specific gravity?`]: {
    question: r`A block of wax floats at rest in water with 85% of its volume submerged. What is the specific gravity of the wax?`,
    options: [r`0.15`, r`0.85`, r`1.18`, r`8.5`],
    correctAnswer: 1,
    explanation: r`In water, the submerged fraction equals the object's specific gravity, so the wax has a specific gravity of 0.85. 0.15 is the fraction above the surface, 1.18 turns the ratio upside down and would describe something that sinks, and 8.5 slips a decimal place.`,
  },
  [r`How does a hydrometer show the specific gravity of a liquid?`]: {
    question: r`A hydrometer reads 1.00 when it floats in pure water. It is then floated in battery acid, which is denser than water. How does it sit, and what does it read?`,
    options: [
      r`It rides higher and reads above 1.00`,
      r`It rides higher and reads below 1.00`,
      r`It rides lower and reads above 1.00`,
      r`It rides lower and reads below 1.00`,
    ],
    correctAnswer: 0,
    explanation: r`The hydrometer always displaces its own weight of liquid, and a denser liquid supplies that with less submerged volume, so it rides higher. The scale on the stem is made so that riding higher reads a higher specific gravity: above 1.00 for a liquid denser than water.`,
  },
  [r`What does a high urine specific gravity point to?`]: {
    question: r`Two urine samples have specific gravities of 1.005 and 1.030. Which one came from the more dehydrated patient, and why?`,
    options: [
      r`The 1.005 sample: it holds more dissolved solute`,
      r`The 1.030 sample: it holds more water per liter`,
      r`The 1.030 sample: it holds more dissolved solute`,
      r`The 1.005 sample: it holds less water per liter`,
    ],
    correctAnswer: 2,
    explanation: r`A higher urine specific gravity means denser, more concentrated urine: more dissolved solute in less water, as in dehydration. The 1.005 sample is close to pure water's 1.000, so it is the dilute one.`,
  },
  // Video 4
  [r`What equation starts every floating problem?`]: {
    question: r`An empty canoe of mass 30 kg rests on a calm river (1000 kg/m³). How many liters of river water does the canoe push aside?`,
    options: [r`0.030 L`, r`3.0 L`, r`30 L`, r`300 L`],
    correctAnswer: 2,
    explanation: r`Floating means $\rho_{\text{fluid}} V_{\text{sub}} = m$, so $V_{\text{sub}}$ = 30/1000 = 0.030 m³, which is 30 L: the canoe pushes aside 30 kg of water, its own mass. 0.030 L reports the cubic meters as liters, and 3.0 L and 300 L slip a power of ten.`,
  },
  [r`How do you find the density of a floating object from its submerged fraction?`]: {
    question: r`A cork floats at rest in glycerin (1250 kg/m³) with 20% of its volume submerged. What is the cork's density?`,
    options: [r`200 kg/m³`, r`250 kg/m³`, r`1,000 kg/m³`, r`6,250 kg/m³`],
    correctAnswer: 1,
    explanation: r`The object's density is the submerged fraction times the fluid's density: (0.20)(1250) = 250 kg/m³. 1,000 kg/m³ uses the 80% above the surface, 200 kg/m³ uses water's density instead of glycerin's, and 6,250 kg/m³ divides by 0.20 instead of multiplying.`,
  },
  [r`An object floats in one fluid with a known submerged fraction. How do you find its submerged fraction in a second fluid?`]: {
    question: r`A candle floats at rest in water (1000 kg/m³) with 90% of its volume submerged. What fraction of it is submerged when it floats in a salt solution of density 1200 kg/m³?`,
    options: [r`0.75`, r`0.83`, r`0.90`, r`1.08`],
    correctAnswer: 0,
    explanation: r`From the water: the candle's density is (0.90)(1000) = 900 kg/m³. In the salt solution the fraction is 900/1200 = 0.75. 0.90 ignores the change of fluid, 0.83 is water's density over the solution's with the candle left out, and 1.08 multiplies by 1.2 instead of dividing.`,
  },
  [r`A calculation gives a "submerged fraction" larger than 1. What does that mean?`]: {
    question: r`A student puts the object's density on top, as she should, and finds a submerged fraction of 2.0 for a solid brick (2000 kg/m³) in water (1000 kg/m³). What does the result mean?`,
    options: [
      r`The brick floats with twice its volume submerged`,
      r`The brick floats with half its volume submerged`,
      r`The brick hovers, since the ratio is a whole number`,
      r`The brick sinks, since it is denser than the water`,
    ],
    correctAnswer: 3,
    explanation: r`A submerged fraction cannot be larger than 1. With the ratio the right way up, a value above 1 means the object is denser than the fluid: even fully under, the buoyant force is smaller than its weight, so it sinks. An object cannot have twice its volume submerged, and half submerged would need a ratio of 0.5.`,
  },
  [r`How do you find how deep a flat-bottomed hull sits in the water?`]: {
    question: r`A flat-bottomed barge with a base area of 50 m² has a total mass of 2.0 × 10⁴ kg and floats level in fresh water (1000 kg/m³). How deep does it sit in the water?`,
    options: [r`0.040 m`, r`0.40 m`, r`2.5 m`, r`4.0 m`],
    correctAnswer: 1,
    explanation: r`$V_{\text{sub}}$ = m/ρ = (2.0 × 10⁴)/1000 = 20 m³, and for a flat bottom d = $V_{\text{sub}}$/A = 20/50 = 0.40 m. 2.5 m turns that last division upside down, and 4.0 m and 0.040 m slip a power of ten.`,
  },
  [r`How do you find the greatest load a floating hull can carry?`]: {
    question: r`A sealed plastic crate has a volume of 0.50 m³ and a mass of 80 kg. What is the greatest load it can carry in fresh water (1000 kg/m³) before it is completely under?`,
    options: [r`420 kg`, r`500 kg`, r`580 kg`, r`4,200 kg`],
    correctAnswer: 0,
    explanation: r`Fully under, the crate displaces 0.50 m³, which is (1000)(0.50) = 500 kg of water. That is the TOTAL mass it can float, so the load is 500 − 80 = 420 kg. 500 kg forgets the crate's own mass, 580 kg adds it instead of subtracting, and 4,200 is the load's weight in newtons.`,
  },
  // Video 5
  [r`What symbol stands for apparent weight, and what is its SI unit?`]: {
    question: r`A brass weight has a true weight of 8.0 N. Hanging fully under water from a spring scale, it has an apparent weight of 7.0 N. Which number does the scale display, and what is it?`,
    options: [
      r`8.0 N, the pull of gravity on the brass weight`,
      r`1.0 N, the push of the water on the brass weight`,
      r`7.0 kg, the mass the string still has to hold up`,
      r`7.0 N, the pull the string still has to supply`,
    ],
    correctAnswer: 3,
    explanation: r`The apparent weight is what the scale reads when the object hangs in a fluid: the string's pull, here 7.0 N. Gravity still pulls with the full 8.0 N, and the 1.0 N difference is the buoyant force. A scale reading of a force is in newtons, not kilograms.`,
  },
  [r`Why do the weight of a fully submerged object and the buoyant force on it differ only by a density?`]: {
    question: r`A solid object of density 3000 kg/m³ is fully submerged in a liquid of density 1500 kg/m³. How does the object's weight compare with the buoyant force on it?`,
    options: [
      r`The weight is half the buoyant force`,
      r`The weight equals the buoyant force`,
      r`The weight is twice the buoyant force`,
      r`It cannot be found without the volume`,
    ],
    correctAnswer: 2,
    explanation: r`Fully submerged, the object displaces its own volume, so the weight is $\rho_{\text{object}} V g$ and the buoyant force is $\rho_{\text{fluid}} V g$ with the same $V$. Their ratio is just the density ratio, 3000/1500 = 2, so the volume is not needed. Equal forces would need equal densities.`,
  },
  [r`Why does an object denser than the fluid sink all the way to the bottom?`]: {
    question: r`A sealed rigid capsule is slightly denser than the water around it. A student claims it will sink to a certain depth and then hover there. Why is the claim wrong?`,
    options: [
      r`Neither its weight nor the buoyant force changes with depth`,
      r`Its weight grows with depth faster than the buoyant force`,
      r`The buoyant force drops to zero below a certain depth`,
      r`A capsule denser than water cannot be fully submerged`,
    ],
    correctAnswer: 0,
    explanation: r`A fully submerged rigid object displaces the same volume at every depth, so the buoyant force is the same all the way down, and so is the weight. If the weight is larger at the start, it stays larger, and the capsule sinks to the bottom. Weight does not grow with depth, and the buoyant force never vanishes.`,
  },
  [r`In what order do you draw the forces on an object that is under a fluid?`]: {
    question: r`A diver holds a rubber duck at rest under water; let go, the duck would shoot to the surface. In the usual order, which three forces go on the duck's diagram?`,
    options: [
      r`Weight down, buoyant force up, hand's push up`,
      r`Weight down, buoyant force down, hand's push up`,
      r`Weight up, buoyant force down, hand's push down`,
      r`Weight down, buoyant force up, hand's push down`,
    ],
    correctAnswer: 3,
    explanation: r`First the weight, straight down; second the buoyant force, straight up; third whatever touches the object. The duck would rise, so the buoyant force is larger than its weight and the hand must push DOWN to hold it at rest. The weight never points up, and the buoyant force never points down.`,
  },
  [r`Does an object weigh less when it is under water?`]: {
    question: r`A patient who weighs 800 N stands chest-deep in a therapy pool, where the buoyant force on her is 500 N. What is her true weight while she stands in the pool, and what force must her legs support?`,
    options: [
      r`Weight 300 N; her legs support 300 N`,
      r`Weight 800 N; her legs support 800 N`,
      r`Weight 800 N; her legs support 300 N`,
      r`Weight 300 N; her legs support 500 N`,
    ],
    correctAnswer: 2,
    explanation: r`Being in water never changes the weight itself: gravity still pulls on her with 800 N. The water carries 500 N of it, so her legs supply the rest, 800 − 500 = 300 N. Saying she weighs 300 N confuses the apparent weight with the true weight.`,
  },
  [r`Write the apparent weight of an object hanging in a fluid as an equation.`]: {
    question: r`A 15 N casting hangs from a scale, fully submerged in a liquid that pushes up on it with 6.0 N. What does the scale read?`,
    options: [r`6.0 N`, r`9.0 N`, r`15 N`, r`21 N`],
    correctAnswer: 1,
    explanation: r`$W_{\text{apparent}} = W - F_b$ = 15 − 6.0 = 9.0 N. 15 N ignores the buoyant force, 6.0 N is the buoyant force itself rather than what the scale supports, and 21 N adds the buoyant force as if the liquid pushed down.`,
  },
  [r`What normal force acts on a sunken object resting on the bottom?`]: {
    question: r`A 200 N concrete block rests on the floor of a swimming pool. The buoyant force on the block is 80 N. What normal force does the floor exert on it?`,
    options: [r`80 N`, r`120 N`, r`200 N`, r`280 N`],
    correctAnswer: 1,
    explanation: r`At rest, $N + F_b = W$, so N = 200 − 80 = 120 N. 200 N leaves the buoyant force off the diagram, as if a sunken object felt none; 80 N is the buoyant force itself; and 280 N adds it as if the water pushed down.`,
  },
  [r`What is the tension in a rope that holds a floater under the surface?`]: {
    question: r`An air-filled balloon is tied to the floor of an aquarium by a string and sits at rest fully under water. The buoyant force on it is 12 N and it weighs 0.50 N. What is the tension in the string?`,
    options: [r`0.50 N`, r`11.5 N`, r`12 N`, r`12.5 N`],
    correctAnswer: 1,
    explanation: r`The string pulls down, so $F_b = W + T$ and T = 12 − 0.50 = 11.5 N. 12 N leaves the weight out, 12.5 N adds the weight as if the string had to hold up both, and 0.50 N is the weight alone.`,
  },
  [r`How do a weighing in air and a weighing under a fluid give an object's volume?`]: {
    question: r`A stone weighs 12 N in air and 9.0 N when it hangs fully submerged in water (1000 kg/m³). What is the stone's volume? (g = 10 m/s²)`,
    options: [r`3.0 × 10⁻⁴ m³`, r`9.0 × 10⁻⁴ m³`, r`1.2 × 10⁻³ m³`, r`3.0 × 10⁻³ m³`],
    correctAnswer: 0,
    explanation: r`The drop in the reading is the buoyant force: 12 − 9.0 = 3.0 N. Then V = $F_b$/(ρg) = 3.0/[(1000)(10)] = 3.0 × 10⁻⁴ m³. 9.0 × 10⁻⁴ m³ uses the apparent weight and 1.2 × 10⁻³ m³ the weight in air in place of the buoyant force, and 3.0 × 10⁻³ m³ leaves out g.`,
  },
  [r`Once two weighings have given an object's volume, how do you find its density?`]: {
    question: r`Two weighings show that a sample that weighs 5.0 N in air has a volume of 2.5 × 10⁻⁴ m³. What is the sample's density? (g = 10 m/s²)`,
    options: [r`200 kg/m³`, r`2,000 kg/m³`, r`5,000 kg/m³`, r`20,000 kg/m³`],
    correctAnswer: 1,
    explanation: r`The mass is m = W/g = 5.0/10 = 0.50 kg, so ρ = m/V = 0.50/(2.5 × 10⁻⁴) = 2,000 kg/m³. 20,000 kg/m³ divides the weight, not the mass, by the volume; 200 kg/m³ slips a power of ten; and 5,000 kg/m³ divides the mass by 10⁻⁴ and drops the 2.5.`,
  },
  [r`What is the one-line density ratio from two weighings?`]: {
    question: r`A mineral sample weighs 20 N in air and 15 N when it hangs fully submerged in oil. How many times denser than the oil is the sample?`,
    options: [r`0.25`, r`1.3`, r`3.0`, r`4.0`],
    correctAnswer: 3,
    explanation: r`The buoyant force is 20 − 15 = 5.0 N, and the density ratio is the TRUE weight over the buoyant force: 20/5.0 = 4.0. 3.0 puts the apparent weight on top, 1.3 divides one reading by the other, and 0.25 turns the ratio upside down.`,
  },
  [r`How do a weight in air and a weight in water give a specific gravity?`]: {
    question: r`Gold has a specific gravity of about 19. A pure gold bar with a true weight of 38 N is lowered into a tank of water on a cord. By how much does the tension in the cord drop once the bar is completely covered?`,
    options: [r`0.50 N`, r`2.0 N`, r`19 N`, r`36 N`],
    correctAnswer: 1,
    explanation: r`Specific gravity is the true weight over the weight lost in water, so the weight lost, which is the buoyant force, is 38/19 = 2.0 N: the tension drops by 2.0 N. 36 N is the new tension, not the drop; 19 N reports the specific gravity as a force; and 0.50 N divides the wrong way round.`,
  },
  // Video 6
  [r`How do you check a density found from a weighing in air and a weighing in water?`]: {
    question: r`A sample weighs 6.0 N in air and feels a buoyant force of 1.5 N fully under water. A student's long calculation gives a density of 2500 kg/m³. Does the quick check agree?`,
    options: [
      r`No: 6.0/1.5 = 4, so it should be 4000 kg/m³`,
      r`Yes: 6.0/1.5 = 4, and 4 rounds down to 2.5`,
      r`No: 4.5/1.5 = 3, so it should be 3000 kg/m³`,
      r`Yes: 1.5/6.0 = 0.25, which matches 2500 kg/m³`,
    ],
    correctAnswer: 0,
    explanation: r`The check is the true weight over the buoyant force: 6.0/1.5 = 4, so the sample is 4 times as dense as water, 4000 kg/m³, and the long calculation has a slip. Using 4.5 N puts the apparent weight on top, and 1.5/6.0 turns the ratio upside down.`,
  },
  [r`A hanging submerged object is cut loose and settles on the bottom. How does the normal force compare with the tension the string had?`]: {
    question: r`A lead sinker hangs under water from a fishing line that carries a tension of 1.8 N. The line snaps and the sinker settles on the lake bed. What normal force does the bed exert on it?`,
    options: [
      r`More than 1.8 N, the sinker's full weight`,
      r`Less than 1.8 N, since it is deeper now`,
      r`1.8 N, the same support the line gave`,
      r`0 N, since water holds up a sunken object`,
    ],
    correctAnswer: 2,
    explanation: r`Hanging or resting, the support has to supply the weight minus the buoyant force. The buoyant force is still there on the bottom and has not changed, so the bed pushes up with the same 1.8 N the line supplied. The full weight would leave the buoyant force off the diagram, and depth changes nothing.`,
  },
  [r`How do you tell which way a rope pulls on an object held at rest under a fluid?`]: {
    question: r`An object of weight 30 N is held at rest fully under water by a single rope. The buoyant force on it is 45 N. Which way does the rope pull, and how hard?`,
    options: [
      r`Downward, with 15 N`,
      r`Upward, with 15 N`,
      r`Downward, with 75 N`,
      r`Upward, with 75 N`,
    ],
    correctAnswer: 0,
    explanation: r`The buoyant force, 45 N up, beats the weight, 30 N down, so on its own the object would rise. The rope must pull DOWN with the difference: 45 − 30 = 15 N. A rope pulling up would leave nothing to balance the extra upward force, and 75 N adds two forces that oppose each other.`,
  },
  [r`How do you find the acceleration of a tied-down float at the moment its rope is cut?`]: {
    question: r`A 2.0 kg float is held under water, where the buoyant force on it is 60 N, and then let go. What is its acceleration at that moment? (g = 10 m/s²)`,
    options: [r`6.7 m/s² upward`, r`10 m/s² upward`, r`20 m/s² upward`, r`30 m/s² upward`],
    correctAnswer: 2,
    explanation: r`The weight is (2.0)(10) = 20 N, so the net force is 60 − 20 = 40 N upward and a = 40/2.0 = 20 m/s² upward. 30 m/s² divides the buoyant force alone by the mass and forgets the weight, 6.7 m/s² divides by the 6.0 kg of displaced water, and 10 m/s² is just g.`,
  },
  [r`Which mass goes into $F_{\text{net}} = ma$ for an object released under a fluid?`]: {
    question: r`A 0.50 kg ball displaces 2.0 kg of water when it is fully under. Released there, it feels a net force of 15 N upward. Which calculation gives its acceleration?`,
    options: [
      r`15 N ÷ 2.0 kg = 7.5 m/s²`,
      r`15 N ÷ 2.5 kg = 6.0 m/s²`,
      r`15 N ÷ 1.5 kg = 10 m/s²`,
      r`15 N ÷ 0.50 kg = 30 m/s²`,
    ],
    correctAnswer: 3,
    explanation: r`In $F_{\text{net}} = ma$ the mass is the mass of the thing that accelerates: the ball's own 0.50 kg, so a = 15/0.50 = 30 m/s². The 2.0 kg of displaced water belongs to the buoyant force, not to the ball, and neither the sum nor the difference of the two masses has any meaning here.`,
  },
  [r`A released float rises and comes to rest at the surface. What has happened to the buoyant force on it?`]: {
    question: r`A beach ball that weighs 3.0 N is held fully under water, where the buoyant force on it is 150 N. After it is released and comes to rest floating on the surface, what is the buoyant force on it?`,
    options: [r`3.0 N`, r`147 N`, r`150 N`, r`153 N`],
    correctAnswer: 0,
    explanation: r`Floating at rest, the buoyant force equals the weight again: 3.0 N. The ball rises until only a small part of it is under, displacing just 3.0 N of water. 150 N holds only while the whole ball is submerged, and 147 N was the net force while it was held under.`,
  },
  // Video 7
  [r`What symbol stands for surface tension, and what is its SI unit?`]: {
    question: r`Which of these measurements could be reported with the symbol γ?`,
    options: [
      r`The push of a liquid per square meter of a wall`,
      r`The mass of a liquid per cubic meter of its volume`,
      r`The upward force of a liquid on a submerged object`,
      r`The pull of a liquid surface per meter of its edge`,
    ],
    correctAnswer: 3,
    explanation: r`γ is surface tension: the pull of a liquid's surface per unit length along it, in newtons per meter. A push per square meter is a pressure, a mass per cubic meter is a density, and the upward force on a submerged object is the buoyant force.`,
  },
  [r`What is the difference between cohesion and adhesion?`]: {
    question: r`Raindrops cling to a window pane, and inside each drop the water holds together as one bead. Which attraction does each observation show?`,
    options: [
      r`Clinging to the pane is adhesion; holding together is cohesion`,
      r`Clinging to the pane is cohesion; holding together is adhesion`,
      r`Both show adhesion, since a glass pane is part of each one`,
      r`Both show cohesion, since water molecules are part of each`,
    ],
    correctAnswer: 0,
    explanation: r`Adhesion is the attraction between a liquid and a different material, here water to glass, so it is what makes the drops cling. Cohesion is the attraction between molecules of the same substance, water to water, so it is what holds each drop together.`,
  },
  [r`Why does a drop of water bead up on wax but spread out on clean glass?`]: {
    question: r`A water drop spreads into a thin film on surface P but stays a tall bead on surface Q. What can be concluded?`,
    options: [
      r`Water adheres to P strongly and to Q only weakly`,
      r`Water adheres to Q strongly and to P only weakly`,
      r`Water's cohesion is stronger on P than it is on Q`,
      r`Water's surface tension is zero on the surface P`,
    ],
    correctAnswer: 0,
    explanation: r`Spreading means adhesion to the surface beats the water's cohesion, as on clean glass; beading means cohesion wins, as on wax. So water adheres strongly to P and weakly to Q. The water's own cohesion and surface tension belong to the water and are the same on both surfaces.`,
  },
  [r`Why does the surface of a liquid behave like a stretched skin?`]: {
    question: r`Compare a water molecule at the surface of a pond with one a meter below. Which one has neighbors pulling on it from every direction, and what is the net pull on the other?`,
    options: [
      r`The surface one; the deep one is pulled inward`,
      r`The deep one; the surface one is pulled outward`,
      r`The deep one; the surface one is pulled inward`,
      r`The surface one; the deep one is pulled upward`,
    ],
    correctAnswer: 2,
    explanation: r`A molecule deep in the water has neighbors on every side, so the pulls on it cancel. A surface molecule has neighbors only beside and below it, so it is left with a net pull inward, toward the liquid. That inward pull on every surface molecule is what draws the surface tight.`,
  },
  [r`What two equivalent things does surface tension measure?`]: {
    question: r`Stretching a soap film to make 2 cm² of new surface takes a certain amount of energy. About how much energy does making 4 cm² of new surface take, and why?`,
    options: [
      r`Twice as much: γ is an energy per unit of new area`,
      r`The same: γ is one fixed energy for any one film`,
      r`Half as much: a larger film is easier to stretch`,
      r`Four times as much: the energy goes as area squared`,
    ],
    correctAnswer: 0,
    explanation: r`Surface tension is, equally, the energy needed to create a unit area of new surface. Twice the new area therefore takes twice the energy. The energy is not fixed per film, it does not fall as the film grows, and it is proportional to the area, not to its square.`,
  },
  [r`Why is the surface tension of water unusually high?`]: {
    question: r`Heating water weakens the hydrogen bonding between its molecules. What should happen to the water's surface tension, and why?`,
    options: [
      r`It rises, because the cohesion is weaker`,
      r`It falls, because the adhesion is weaker`,
      r`It falls, because the cohesion is weaker`,
      r`It stays fixed, because it is still water`,
    ],
    correctAnswer: 2,
    explanation: r`Surface tension comes from cohesion, and water's is unusually high because of hydrogen bonding. Weaker hydrogen bonding means weaker cohesion and a weaker surface skin, so the surface tension falls. Adhesion is the attraction to a different material and does not set a liquid's own surface tension.`,
  },
  [r`Why do small droplets pull themselves into spheres?`]: {
    question: r`Lead shot was once made by letting drops of molten lead fall freely down a tall tower, where they cooled into nearly perfect balls. Which property of the liquid metal shaped the drops?`,
    options: [
      r`Buoyancy, which pushes evenly on every side`,
      r`Surface tension, which shrinks the surface area`,
      r`Adhesion, which pulls the metal toward the air`,
      r`Viscosity, which slows the flow of the metal`,
    ],
    correctAnswer: 1,
    explanation: r`A liquid surface behaves like a stretched skin that always tries to shrink, so a free drop settles into the shape with the least surface area for its volume: a sphere. Buoyancy, adhesion and viscosity do not pull a drop toward any particular shape.`,
  },
  [r`What holds up a water strider, or a steel needle laid gently on water?`]: {
    question: r`An insect weighing 1.0 × 10⁻⁵ N stands on a pond. Its feet dimple the surface without breaking through, and almost none of its body is below the water line. What supplies nearly all of the upward 1.0 × 10⁻⁵ N?`,
    options: [
      r`The buoyant force on the insect's submerged feet`,
      r`The adhesion between the water and the air above`,
      r`The pressure of the water a few centimeters down`,
      r`The surface tension of the dimpled water surface`,
    ],
    correctAnswer: 3,
    explanation: r`With almost nothing submerged, the insect displaces almost no water, so the buoyant force is tiny. The dimpled surface acts like a stretched skin, and its surface tension holds the insect up, the same way it holds a steel needle laid gently on water.`,
  },
  [r`What does a surfactant do to a liquid?`]: {
    question: r`Detergent is a surfactant. Why does it help water soak into the tiny gaps between the fibers of a cloth?`,
    options: [
      r`It raises surface tension, so the water is pulled into the fibers`,
      r`It raises the water's density, so the water sinks into the fibers`,
      r`It lowers surface tension, so the water spreads over the fibers`,
      r`It lowers the water's density, so the water rises into the fibers`,
    ],
    correctAnswer: 2,
    explanation: r`A surfactant lowers the surface tension. The water's surface skin weakens, so the water stops beading up and spreads over and between the fibers. A surfactant does not raise the surface tension, and a trace of detergent barely changes the water's density.`,
  },
  [r`What does a liquid do in a narrow tube when adhesion beats cohesion?`]: {
    question: r`A new liquid is tested in a narrow glass tube that dips into a dish of the liquid. It attracts the glass more strongly than its own molecules attract one another. What will be seen in the tube?`,
    options: [
      r`A concave meniscus, with the level above the dish`,
      r`A concave meniscus, with the level below the dish`,
      r`A convex meniscus, with the level above the dish`,
      r`A convex meniscus, with the level below the dish`,
    ],
    correctAnswer: 0,
    explanation: r`Adhesion stronger than cohesion means the liquid climbs the walls: the meniscus is concave and the level rises above the level outside, as for water in glass. A convex meniscus with the level pushed down is the opposite case, cohesion stronger. The two mixed answers pair a meniscus with the wrong direction.`,
  },
  [r`What does a liquid do in a narrow tube when cohesion beats adhesion?`]: {
    question: r`A liquid metal stands in a narrow plastic tube that dips into a dish of the same metal. The level inside the tube is below the level in the dish. What does this show, and what shape is the meniscus?`,
    options: [
      r`Cohesion beats adhesion; the meniscus is concave`,
      r`Adhesion beats cohesion; the meniscus is convex`,
      r`Adhesion beats cohesion; the meniscus is concave`,
      r`Cohesion beats adhesion; the meniscus is convex`,
    ],
    correctAnswer: 3,
    explanation: r`A level pushed down means the liquid holds to itself more strongly than to the wall: cohesion beats adhesion, as for mercury in glass, and the surface domes up into a convex meniscus. Adhesion winning would give a concave meniscus and a rise.`,
  },
  [r`How does the width of a tube change the capillary rise or fall?`]: {
    question: r`Water rises 3 cm in one glass tube and 6 cm in a second glass tube standing in the same dish. What is the most likely difference between the tubes?`,
    options: [
      r`The second tube is wider`,
      r`The second tube is narrower`,
      r`The second tube is taller`,
      r`The second tube is heavier`,
    ],
    correctAnswer: 1,
    explanation: r`The narrower the tube, the larger the capillary rise, so the tube with the 6 cm rise is the narrower one. A wider tube would show a smaller rise, and a tube's height or weight has nothing to do with how far the water climbs.`,
  },
  [r`What does the surface tension of the lining fluid do to an alveolus, and which alveoli are most at risk?`]: {
    question: r`During a breath out, an alveolus shrinks. If its lining fluid had no surfactant, how would its tendency to collapse change as it shrinks?`,
    options: [
      r`It would fade, since a smaller sac has less surface to pull`,
      r`It would stay fixed, since the lining fluid is the same`,
      r`It would reverse, since a smaller sac is pushed outward`,
      r`It would grow, since the effect is stronger in a smaller sac`,
    ],
    correctAnswer: 3,
    explanation: r`The surface tension of the lining fluid pulls inward and tends to collapse the alveolus, and the effect is stronger the smaller the alveolus. So as the sac shrinks, the collapsing tendency grows. This is why the smallest alveoli need surfactant most.`,
  },
  [r`What does pulmonary surfactant do, and which cells secrete it?`]: {
    question: r`A toxin selectively destroys type II alveolar cells. What is the expected effect in the alveoli?`,
    options: [
      r`Less surfactant, lower surface tension, more collapse`,
      r`More surfactant, lower surface tension, less collapse`,
      r`Less surfactant, higher surface tension, more collapse`,
      r`Less surfactant, higher surface tension, less collapse`,
    ],
    correctAnswer: 2,
    explanation: r`Type II alveolar cells secrete pulmonary surfactant, which lowers the surface tension of the lining fluid. Without them there is less surfactant, the surface tension stays high, and the small alveoli collapse. Surfactant lowers surface tension, so losing it cannot lower the tension or reduce collapse.`,
  },
  [r`Why do premature infants develop respiratory distress syndrome?`]: {
    question: r`A baby is born at 26 weeks, before the lungs make much surfactant. Compared with a full-term baby, how do the surface tension in this baby's alveoli and the risk that small alveoli collapse differ?`,
    options: [
      r`Higher surface tension, and a higher risk of collapse`,
      r`Lower surface tension, and a higher risk of collapse`,
      r`Higher surface tension, and a lower risk of collapse`,
      r`Lower surface tension, and a lower risk of collapse`,
    ],
    correctAnswer: 0,
    explanation: r`With too little surfactant, nothing lowers the surface tension of the lining fluid, so it stays high. The inward pull is then strong, small alveoli collapse, and the baby develops respiratory distress syndrome.`,
  },
  // Video 8
  [r`What do you ask first in any problem about a liquid in a narrow tube?`]: {
    question: r`A problem shows a narrow quartz tube dipped into an unfamiliar oil and asks whether the oil rises or falls in the tube. Which comparison settles it?`,
    options: [
      r`The oil's density against the density of the quartz in the tube`,
      r`The oil's attraction to quartz against its attraction to itself`,
      r`The oil's weight against the buoyant force acting on the tube`,
      r`The tube's length against the depth of the oil in the dish`,
    ],
    correctAnswer: 1,
    explanation: r`The first question in any tube problem is which attraction is stronger: adhesion to the wall or cohesion within the liquid. Adhesion stronger gives a concave meniscus and a rise; cohesion stronger gives a convex meniscus and a fall. Densities, buoyancy and the tube's length do not decide the direction.`,
  },
  [r`What does the shape of a meniscus tell you about a liquid in a tube?`]: {
    question: r`A photograph shows a liquid in a thin tube that dips into a dish of the same liquid, with its surface curving upward where it touches the wall and lowest in the middle. What can you conclude?`,
    options: [
      r`Cohesion is winning, and the liquid has risen in the tube`,
      r`Adhesion is winning, and the liquid has risen in the tube`,
      r`Adhesion is winning, and the liquid has been pushed down`,
      r`Cohesion is winning, and the liquid has been pushed down`,
    ],
    correctAnswer: 1,
    explanation: r`A surface that climbs the wall and dips in the middle is a concave meniscus. It shows the liquid is attracted to the wall more strongly than to itself, so adhesion is winning, and such a liquid rises in the tube. Cohesion winning gives a domed, convex surface and a level pushed down.`,
  },
  [r`What is the common trap when a liquid's surface in a tube is domed?`]: {
    question: r`A student sees mercury with a domed top inside a glass tube and writes: 'The mercury has climbed the tube, so adhesion wins.' What should the note say instead?`,
    options: [
      r`The dome is concave: adhesion wins and the level is pushed up`,
      r`The dome is convex: adhesion wins and the level is pushed down`,
      r`The dome is concave: cohesion wins and the level is pushed up`,
      r`The dome is convex: cohesion wins and the level is pushed down`,
    ],
    correctAnswer: 3,
    explanation: r`A domed surface is a convex meniscus, and convex goes with a level pushed DOWN, not a liquid that has climbed. It appears when the liquid's cohesion beats its adhesion to the wall, as for mercury in glass. A concave surface curves up at the walls instead.`,
  },
  [r`How do you rank tubes of different widths by how far the liquid level moves?`]: {
    question: r`Mercury is pushed down in glass tubes of inner diameter 0.5 mm, 1.5 mm and 3 mm standing in the same dish. In which tube does the mercury surface sit lowest, and in which highest?`,
    options: [
      r`Lowest in the 0.5 mm tube, highest in the 3 mm tube`,
      r`Lowest in the 3 mm tube, highest in the 0.5 mm tube`,
      r`Lowest in the 1.5 mm tube, highest in the 3 mm tube`,
      r`Lowest in the 3 mm tube, highest in the 1.5 mm tube`,
    ],
    correctAnswer: 0,
    explanation: r`The narrowest tube shows the largest change, and for mercury in glass the change is a fall. So the mercury is pushed down most in the 0.5 mm tube and least in the 3 mm tube. Expecting the wide tube to show the larger change is the usual trap.`,
  },
  [r`Water rises in a clean glass tube. What does it do in the same tube lined with wax, and why?`]: {
    question: r`A fabric is sprayed with a coating that water adheres to only weakly. What happens when a corner of the fabric touches a puddle?`,
    options: [
      r`Water is drawn up faster, since cohesion now beats adhesion`,
      r`Water is drawn up as before, since the gaps are unchanged`,
      r`Water is not drawn up, since cohesion now beats adhesion`,
      r`Water is not drawn up, since adhesion now beats cohesion`,
    ],
    correctAnswer: 2,
    explanation: r`Water climbs narrow gaps only when it adheres to the walls more strongly than it coheres. With weak adhesion, cohesion wins, so the water is not drawn up, just as water is pushed down in a wax-lined tube. The gaps are the same size; the wall is what changed.`,
  },
  [r`What are the three steps of reasoning about surface tension in the lungs?`]: {
    question: r`Following the three steps of the lung reasoning, what should a drug that boosts surfactant production do in the alveoli?`,
    options: [
      r`Lower the surface tension, weaken the inward pull, reduce collapse`,
      r`Raise the surface tension, weaken the inward pull, reduce collapse`,
      r`Lower the surface tension, strengthen the inward pull, add collapse`,
      r`Raise the surface tension, strengthen the inward pull, add collapse`,
    ],
    correctAnswer: 0,
    explanation: r`The lining fluid's surface tension pulls inward, most strongly in the smallest alveoli, and surfactant lowers that surface tension. More surfactant therefore means a lower surface tension, a weaker inward pull and less collapse. Surfactant never raises the surface tension.`,
  },
  [r`What must every predict-and-explain answer about a liquid surface include?`]: {
    question: r`A question says: 'Predict whether water rises in a clean glass tube, and explain.' Which answer is complete?`,
    options: [
      r`It rises, because water always moves upward in any tube`,
      r`It rises, and the meniscus that it forms there is concave`,
      r`It rises, because its adhesion to glass beats its cohesion`,
      r`It rises, because every glass tube is a narrow container`,
    ],
    correctAnswer: 2,
    explanation: r`A predict-and-explain answer needs its reason, stated in terms of cohesion, adhesion or surface tension: water rises because it adheres to glass more strongly than it coheres. Describing the meniscus adds an observation, not a reason, and water does not rise in every tube: it is pushed down in a wax-lined one.`,
  },
}
