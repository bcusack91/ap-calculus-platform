import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Fluids Part 3 video deck (`mcat-fl3`): one
 * per review card, keyed by the card's exact front text. Each asks the student
 * to use the card's idea in a new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`What symbol stands for volume flow rate, and what is its SI unit?`]: {
    question: r`The data sheet for a well pump lists Q = 0.020 m³/s. What does the pump deliver in 5.0 s of steady running?`,
    options: [
      r`0.10 m³, since Q is a volume per second`,
      r`0.10 m, since Q is a distance per second`,
      r`0.10 kg, since Q is a mass per second`,
      r`0.0040 m³, since Q is a volume per second`,
    ],
    correctAnswer: 0,
    explanation: r`Q is the volume flow rate in m³/s, so in 5.0 s the pump delivers (0.020 m³/s)(5.0 s) = 0.10 m³. A distance per second is a speed and a mass per second is a mass flow rate, and neither is what Q stands for. 0.0040 m³ divides by the time instead of multiplying.`,
  },
  [r`Write the volume flow rate in terms of area and speed.`]: {
    question: r`Water fills a rectangular irrigation channel 0.50 m wide and 0.20 m deep, moving along it at 3.0 m/s. What is the volume flow rate?`,
    options: [r`1.5 m³/s`, r`30 m³/s`, r`0.30 m³/s`, r`0.60 m³/s`],
    correctAnswer: 2,
    explanation: r`The cross-sectional area is (0.50 m)(0.20 m) = 0.10 m², so Q = Av = (0.10 m²)(3.0 m/s) = 0.30 m³/s. 30 comes from dividing the speed by the area. 1.5 and 0.60 multiply the speed by only the width or only the depth, which is a length and not an area.`,
  },
  [r`What is the difference between flow rate and flow speed?`]: {
    question: r`A storm drain with a cross-sectional area of 400 cm² carries water at 5 cm/s. A pressure-washer hose with an area of 0.5 cm² carries water at 2000 cm/s. Which statement is correct?`,
    options: [
      r`The hose delivers more volume per second, because its water is faster`,
      r`The drain delivers more volume per second, although its water is slower`,
      r`The two deliver equal volumes per second, because area and speed trade off`,
      r`The drain delivers more volume per second, because its water is faster`,
    ],
    correctAnswer: 1,
    explanation: r`Flow rate is area times speed: the drain carries 400 × 5 = 2000 cm³/s and the hose 0.5 × 2000 = 1000 cm³/s, so the slow drain delivers twice as much. Picking the hose confuses speed (cm/s) with flow rate (cm³/s). The two products are not equal, and the drain's water is the slower of the two, not the faster.`,
  },
  [r`Which two volume conversions turn milliliters and liters into cubic centimeters and cubic meters?`]: {
    question: r`A bag of saline holds 0.25 L. What is that volume in cubic centimeters and in cubic meters?`,
    options: [
      r`25 cm³, which is 2.5 × 10⁻⁵ m³`,
      r`250 cm³, which is 2.5 × 10⁻² m³`,
      r`2500 cm³, which is 2.5 × 10⁻³ m³`,
      r`250 cm³, which is 2.5 × 10⁻⁴ m³`,
    ],
    correctAnswer: 3,
    explanation: r`1 L = 1000 cm³, so 0.25 L = 250 cm³, and 1 L = 10⁻³ m³, so 0.25 L = 2.5 × 10⁻⁴ m³. The answers with 25 cm³ and 2500 cm³ use 100 or 10,000 cm³ per liter. 2.5 × 10⁻² m³ would be 25 L, which comes from treating a cubic meter as only 10⁴ cm³.`,
  },
  [r`What does continuity say about a liquid flowing through a pipe that changes width?`]: {
    question: r`Juice moves at 0.40 m/s through a filling tube with a cross-sectional area of 6.0 cm². The tube tapers to 1.5 cm². How fast does the juice move in the tapered end?`,
    options: [r`0.10 m/s`, r`1.6 m/s`, r`0.80 m/s`, r`0.40 m/s`],
    correctAnswer: 1,
    explanation: r`Continuity gives A₁v₁ = A₂v₂, so v₂ = (0.40 m/s)(6.0/1.5) = 1.6 m/s: a quarter of the area means four times the speed. 0.10 m/s turns the ratio upside down, as if narrower meant slower. 0.80 m/s only doubles the speed, and 0.40 m/s assumes the speed, rather than the flow rate, stays the same.`,
  },
  [r`Why must the flow rate be the same at every cross-section of a pipe?`]: {
    question: r`Water enters a rigid, leak-free pipe at 3.0 L/s. Halfway along, the pipe has half the radius it has at the inlet. How much water passes that halfway cross-section each second?`,
    options: [
      r`3.0 L/s, since water cannot pile up or be compressed`,
      r`6.0 L/s, since water moves faster where it is narrow`,
      r`1.5 L/s, since less water fits where it is narrow`,
      r`12 L/s, since speed goes as one over radius squared`,
    ],
    correctAnswer: 0,
    explanation: r`Water cannot pile up inside a rigid, leak-free pipe and its density is constant, so the same 3.0 L passes every cross-section each second. The water does move 4 times as fast in the narrow part, but through a quarter of the area, so 6.0 and 12 L/s confuse speed with flow rate. 1.5 L/s would mean water collecting upstream.`,
  },
  [r`How does the speed of the flow in a round pipe depend on the pipe's radius?`]: {
    question: r`Oil moves at 0.30 m/s through a round pipe of radius 6 cm. The pipe narrows to a radius of 2 cm. How fast does the oil move in the narrow part?`,
    options: [r`0.90 m/s`, r`0.10 m/s`, r`0.033 m/s`, r`2.7 m/s`],
    correctAnswer: 3,
    explanation: r`Area goes as r², so one-third of the radius is one-ninth of the area and 9 times the speed: 9 × 0.30 = 2.7 m/s. 0.90 m/s uses the radius ratio without squaring it. 0.10 and 0.033 m/s divide by 3 and by 9, which would make the oil slower in the narrow part.`,
  },
  [r`One pipe splits into several branches. How do you find the speed in the branches?`]: {
    question: r`A fuel line with a cross-sectional area of 6.0 cm² carries fuel at 2.0 m/s. It splits into three identical injector lines, each with an area of 1.0 cm². How fast does the fuel move in each injector line?`,
    options: [r`12 m/s`, r`1.0 m/s`, r`4.0 m/s`, r`2.0 m/s`],
    correctAnswer: 2,
    explanation: r`The branch flows add up to the parent flow, so (6.0 cm²)(2.0 m/s) = (3.0 cm²)v and v = 4.0 m/s, using the total branch area of 3.0 cm². 12 m/s divides by one branch's area alone. 1.0 m/s turns the area ratio upside down, and 2.0 m/s assumes the speed does not change at the split.`,
  },
  [r`What is single-tube thinking, and why does it fail in a branching network?`]: {
    question: r`The windpipe has a cross-sectional area of about 2.5 cm². Deep in the lungs the air is shared among 1000 small airways, each with an area of 0.05 cm². A student says: "Each small airway is far narrower, so the air in it must move faster." Treating air as incompressible, what is the verdict?`,
    options: [
      r`Wrong: the total area is 20 times larger, so the air is 20 times slower`,
      r`Right: each airway has 1/50 of the area, so the air is 50 times faster`,
      r`Wrong: the total area is the same, so the air keeps the same speed`,
      r`Right: the total area is 20 times smaller, so the air is 20 times faster`,
    ],
    correctAnswer: 0,
    explanation: r`Continuity uses the total area of all the parallel airways: 1000 × 0.05 = 50 cm², which is 20 times the windpipe's 2.5 cm², so the air moves 20 times slower. Comparing one airway with the windpipe is single-tube thinking and gives the false "50 times faster". The total area is neither equal to nor smaller than the windpipe's.`,
  },
  [r`How do you convert a clinical flow rate such as 5 L/min for use with areas in cm² and speeds in cm/s?`]: {
    question: r`An aquarium filter pumps 4.2 L/min through a hose with a cross-sectional area of 3.5 cm². What is the average speed of the water in the hose?`,
    options: [r`1.2 cm/s`, r`1200 cm/s`, r`20 cm/s`, r`0.020 cm/s`],
    correctAnswer: 2,
    explanation: r`4.2 L/min is 4200 cm³ per 60 s, which is 70 cm³/s, and 70 cm³/s ÷ 3.5 cm² = 20 cm/s. 1.2 divides 4.2 by 3.5 with no conversion at all. 1200 cm/s converts liters but leaves the minutes, and 0.020 cm/s converts the minutes but leaves the liters.`,
  },
  [r`What can the continuity equation tell you, and what can it not?`]: {
    question: r`An engineer knows that water flows through a pipe at 2.0 L/s and that the pipe's cross-sectional area at point X is 4.0 cm². Using the continuity equation alone, what can she state about point X?`,
    options: [
      r`The pressure is 12.5 kPa, but the speed is still unknown`,
      r`The speed is 5.0 m/s, but the pressure is still unknown`,
      r`The speed is 5.0 m/s, and the pressure is 12.5 kPa`,
      r`The speed is 0.50 m/s, but the pressure is still unknown`,
    ],
    correctAnswer: 1,
    explanation: r`Continuity links area to speed: 2000 cm³/s ÷ 4.0 cm² = 500 cm/s = 5.0 m/s. It says nothing about pressure, which needs Bernoulli's equation and a known pressure somewhere else. The 12.5 kPa is only ½ρv², not the pressure itself, and 0.50 m/s is a slip of a factor of 10 in the units.`,
  },

  // Video 2
  [r`How do you find a flow rate from a volume delivered and the time it took?`]: {
    question: r`A fountain pump fills a 45 L tub in 2.5 minutes. What is the pump's flow rate?`,
    options: [r`18 cm³/s`, r`18,000 cm³/s`, r`0.30 cm³/s`, r`300 cm³/s`],
    correctAnswer: 3,
    explanation: r`Q = V/t in matching units: 45 L is 45,000 cm³ and 2.5 min is 150 s, so Q = 45,000/150 = 300 cm³/s. 18 divides liters by minutes and relabels the unit. 18,000 converts the liters but not the minutes, and 0.30 converts the minutes but not the liters.`,
  },
  [r`Once you know the flow rate, how do you find the speed at any cross-section?`]: {
    question: r`Coolant flows at 240 cm³/s through a tube. The tube's cross-sectional area is 8.0 cm² at one point and 3.0 cm² at another. How fast does the coolant move at the 3.0 cm² point?`,
    options: [r`80 cm/s`, r`30 cm/s`, r`720 cm/s`, r`22 cm/s`],
    correctAnswer: 0,
    explanation: r`The speed at any cross-section is the flow rate over that cross-section's area: 240 cm³/s ÷ 3.0 cm² = 80 cm/s. 30 cm/s is the speed at the 8.0 cm² point instead. 720 multiplies by the area, and 22 cm/s divides by the two areas added together.`,
  },
  [r`How do you find the new speed where a pipe narrows?`]: {
    question: r`Milk moves at 0.60 m/s through a dairy pipe with a cross-sectional area of 15 cm². The pipe narrows to 5.0 cm². How fast does the milk move after the narrowing?`,
    options: [r`0.20 m/s`, r`1.0 m/s`, r`1.8 m/s`, r`5.4 m/s`],
    correctAnswer: 2,
    explanation: r`v₂ = v₁(A₁/A₂) = (0.60 m/s)(15/5.0) = 1.8 m/s. 0.20 m/s uses the ratio upside down. 5.4 m/s squares the area ratio, which is only right for a ratio of radii or diameters, and 1.0 m/s takes its square root.`,
  },
  [r`A nozzle has one-third of the hose's diameter. How do the areas and the speeds compare?`]: {
    question: r`The tip of a pressure washer has one-fifth of the inner diameter of the hose that feeds it. How do the tip's area and the water's speed in the tip compare with those in the hose?`,
    options: [
      r`1/5 of the area, so 5 times the speed`,
      r`1/25 of the area, so 5 times the speed`,
      r`1/5 of the area, so 25 times the speed`,
      r`1/25 of the area, so 25 times the speed`,
    ],
    correctAnswer: 3,
    explanation: r`Area goes as the diameter squared, so one-fifth of the diameter is 1/25 of the area, and continuity then gives 25 times the speed. Using 1/5 for the area forgets to square the diameter ratio. The mixed answers break continuity, since the speed must rise by exactly the factor the area falls.`,
  },
  [r`How do you convert a flow rate from cm³/s to L/min?`]: {
    question: r`A drinking fountain delivers water at 25 cm³/s. What is this flow rate in liters per minute?`,
    options: [r`0.025 L/min`, r`1.5 L/min`, r`0.42 L/min`, r`1500 L/min`],
    correctAnswer: 1,
    explanation: r`Multiply by 60 to get 1500 cm³/min, then divide by 1000 to get 1.5 L/min. 1500 stops before turning cubic centimeters into liters. 0.025 changes the volume unit but not the time unit, and 0.42 divides by 60 when a minute holds 60 times as much flow as a second.`,
  },
  [r`How do you find the speed of a fluid in a bed of many parallel vessels?`]: {
    question: r`A hose delivers water at 120 cm³/s into a filter made of 2000 parallel hollow fibers, each with a cross-sectional area of 0.0020 cm². How fast does the water move inside the fibers?`,
    options: [r`60,000 cm/s`, r`480 cm/s`, r`30 cm/s`, r`0.033 cm/s`],
    correctAnswer: 2,
    explanation: r`The total area is 2000 × 0.0020 = 4.0 cm², so v = 120 cm³/s ÷ 4.0 cm² = 30 cm/s. 60,000 cm/s divides the whole flow by a single fiber's area. 480 multiplies the flow rate by the total area, and 0.033 divides the area by the flow rate.`,
  },
  [r`What are three common traps in flow-rate and continuity problems?`]: {
    question: r`A pump sends 6.0 L/min into 20 identical parallel tubes, each with a cross-sectional area of 0.50 cm². Which line of working gives the speed in each tube?`,
    options: [
      r`100 cm³/s ÷ 10 cm² = 10 cm/s`,
      r`100 cm³/s ÷ 0.50 cm² = 200 cm/s`,
      r`6.0 L/min ÷ 10 cm² = 0.60 cm/s`,
      r`6000 cm³/s ÷ 10 cm² = 600 cm/s`,
    ],
    correctAnswer: 0,
    explanation: r`6.0 L/min is 6000 cm³ per 60 s = 100 cm³/s, and the total area is 20 × 0.50 = 10 cm², so the speed is 10 cm/s. Dividing by 0.50 cm² uses one branch's area instead of the total. The 0.60 cm/s line mixes liters and minutes with cm², and the 600 cm/s line converts liters but treats the minute as a second.`,
  },

  // Video 3
  [r`What symbols stand for pressure, density and height in Bernoulli's equation, and what are their SI units?`]: {
    question: r`In a Bernoulli calculation, an oil has ρ = 800 kg/m³ and a point in the pipe has y = 2.5 m. With g = 10 m/s², what does the term ρgy come to at that point?`,
    options: [
      r`20,000 N, the same unit as a force`,
      r`20,000 Pa, the same unit as P`,
      r`2000 Pa, the same unit as P`,
      r`20,000 kg/m³, the same unit as ρ`,
    ],
    correctAnswer: 1,
    explanation: r`ρgy = (800 kg/m³)(10 m/s²)(2.5 m) = 20,000 Pa. Every term in Bernoulli's equation must carry the unit of the pressure P, the pascal, so newtons and kg/m³ cannot be right. 2000 Pa leaves out g.`,
  },
  [r`What three assumptions define the ideal fluid that Bernoulli's equation is built on?`]: {
    question: r`Honey creeps through a level tube in smooth layers, at a rate that does not change with time, and its density stays constant. Which ideal-fluid assumption does the honey break?`,
    options: [
      r`Incompressible: its density must not change`,
      r`Steady: its flow must not change with time`,
      r`Laminar: its layers must not cross or mix`,
      r`Non-viscous: it must have no internal friction`,
    ],
    correctAnswer: 3,
    explanation: r`An ideal fluid is incompressible, non-viscous and in steady laminar flow. Honey has very strong internal friction, so it fails the non-viscous assumption. The question says its density is constant, its rate does not change with time and its layers are smooth, so the other three conditions are met.`,
  },
  [r`What is a streamline?`]: {
    question: r`Thin smoke trails in a wind tunnel mark the paths that small parcels of air follow around a car. For which pair of points is Bernoulli's equation written?`,
    options: [
      r`Two points that lie at the same height above the floor`,
      r`Two points where the air happens to have the same speed`,
      r`Two points that one parcel of air passes through in turn`,
      r`Two points that lie at the same distance from the car`,
    ],
    correctAnswer: 2,
    explanation: r`A streamline is the path traced by one small parcel of fluid, here one smoke trail, and Bernoulli's equation follows that parcel between two points on its path. Equal height, equal speed or equal distance from the car does not put two points on the same streamline, so none of those pairings is what the equation compares.`,
  },
  [r`Write Bernoulli's equation for two points on a streamline.`]: {
    question: r`Water (ρ = 1000 kg/m³) moves at 1 m/s at point 1, where the pressure is 90 kPa. At point 2, which is 2 m LOWER, the pipe is narrower and the water moves at 3 m/s. With g = 10 m/s² and ideal flow, what is the pressure at point 2?`,
    options: [r`106 kPa`, r`66 kPa`, r`114 kPa`, r`74 kPa`],
    correctAnswer: 0,
    explanation: r`P₂ = P₁ + ½ρ(v₁² − v₂²) + ρg(y₁ − y₂) = 90 − 4 + 20 = 106 kPa: speeding up costs 4 kPa and dropping 2 m gains 20 kPa. 66 kPa subtracts both terms, as if the water had risen. 114 kPa adds both, and 74 kPa gets both signs backward.`,
  },
  [r`What does each of the three terms in Bernoulli's equation stand for?`]: {
    question: r`Water (ρ = 1000 kg/m³) moves at 6 m/s. According to the kinetic term of Bernoulli's equation, how much kinetic energy does each cubic meter of this water carry?`,
    options: [
      r`36,000 J per cubic meter, equal to 36 kPa`,
      r`3000 J per cubic meter, equal to 3 kPa`,
      r`18,000 J per cubic meter, equal to 18 Pa`,
      r`18,000 J per cubic meter, equal to 18 kPa`,
    ],
    correctAnswer: 3,
    explanation: r`The term ½ρv² is kinetic energy per unit volume: ½(1000)(6²) = 18,000 J/m³, and 1 J/m³ is 1 Pa, so this is 18 kPa. 36,000 leaves out the ½ and 3000 does not square the speed. 18,000 J/m³ is 18,000 Pa, not 18 Pa.`,
  },
  [r`In Bernoulli's equation, is $y$ a height or a depth, and why does it matter?`]: {
    question: r`A pipe of constant width carries water (ρ = 1000 kg/m³) down a hillside at constant speed. Gauge X sits where y = 12 m and gauge Y where y = 4 m. With g = 10 m/s² and ideal flow, which gauge reads the higher pressure, and by how much?`,
    options: [
      r`Gauge X, by 80 kPa`,
      r`Gauge Y, by 80 kPa`,
      r`Gauge Y, by 40 kPa`,
      r`Gauge X, by 120 kPa`,
    ],
    correctAnswer: 1,
    explanation: r`y is a height, so with the speed unchanged P + ρgy is constant and the pressure is higher where y is smaller: gauge Y, by ρg(12 − 4) = 80 kPa. Choosing gauge X reads y as a depth. 40 kPa uses only gauge Y's own height, and 120 kPa uses gauge X's height instead of the difference.`,
  },
  [r`What does Bernoulli's equation reduce to for a fluid at rest?`]: {
    question: r`A sealed tank holds still water (ρ = 1000 kg/m³) with gas at 150 kPa pressing on its surface. With both speeds set to zero in Bernoulli's equation and g = 10 m/s², what is the pressure 3 m below the surface?`,
    options: [r`120 kPa`, r`153 kPa`, r`180 kPa`, r`30 kPa`],
    correctAnswer: 2,
    explanation: r`With no motion, P + ρgy is constant, which gives P = P₀ + ρgh = 150 + 30 = 180 kPa. 120 kPa subtracts the 30 kPa, as if pressure fell with depth. 153 kPa loses a factor of 10 in ρgh, and 30 kPa leaves out the pressure at the surface.`,
  },
  [r`What does Bernoulli's equation reduce to for flow at one height?`]: {
    question: r`Coolant of density 1000 kg/m³ runs along a horizontal tube. One sensor records 50 kPa where the coolant travels at 2 m/s, and a sensor farther along records 44 kPa. Treating the coolant as ideal, how fast is it travelling at the farther sensor?`,
    options: [r`4 m/s`, r`3.5 m/s`, r`3.2 m/s`, r`16 m/s`],
    correctAnswer: 0,
    explanation: r`At one height P + ½ρv² is constant, so the 6000 Pa drop equals ½(1000)(v² − 2²), giving v² = 16 and v = 4 m/s. 3.5 m/s ignores the starting speed (v² = 12). 3.2 m/s leaves out the ½ (v² = 10), and 16 is v² without the square root.`,
  },
  [r`Why does a fluid speed up as it enters a narrowing?`]: {
    question: r`Water passes from a narrow section of a level pipe into a wider one. Which statement describes the pressures and the net force on the water in the widening?`,
    options: [
      r`The pressure ahead is lower, so the net force slows the water`,
      r`The pressure ahead is higher, so the net force speeds the water up`,
      r`The pressures are equal, so no net force acts on the water`,
      r`The pressure ahead is higher, so the net force slows the water`,
    ],
    correctAnswer: 3,
    explanation: r`A pressure difference is the net force that changes the fluid's speed. Entering a wider section the water slows, so the net force must point backward, which means the pressure ahead (in the wide, slow section) is higher. A lower pressure ahead would speed the water up, and equal pressures would leave its speed unchanged.`,
  },
  [r`What is the standard chain of reasoning for a pipe that narrows?`]: {
    question: r`Water (ρ = 1000 kg/m³) enters a level pipe at 1 m/s. The pipe narrows from 10 cm² to 2 cm². Treating the water as ideal, what are its speed and its pressure change in the narrow section?`,
    options: [
      r`5 m/s, with the pressure 12 kPa higher`,
      r`5 m/s, with the pressure 12 kPa lower`,
      r`0.2 m/s, with the pressure 12 kPa lower`,
      r`0.2 m/s, with the pressure 0.48 kPa higher`,
    ],
    correctAnswer: 1,
    explanation: r`Continuity first: one-fifth of the area gives 5 m/s. Then Bernoulli: the pressure falls by ½(1000)(25 − 1) = 12,000 Pa. A higher pressure at 5 m/s gets the Bernoulli step backward, and both answers with 0.2 m/s get the continuity step backward by slowing the water in the narrow section.`,
  },
  [r`A pipe climbs as it narrows. How do the two changes affect the pressure?`]: {
    question: r`Water flows up a pipe that narrows as it climbs. On its own, the change in speed accounts for a 6 kPa pressure change, and on its own the climb accounts for a 15 kPa change. How does the pressure in the upper, narrow section compare with that in the lower, wide section?`,
    options: [r`21 kPa lower`, r`9 kPa lower`, r`9 kPa higher`, r`21 kPa higher`],
    correctAnswer: 0,
    explanation: r`Speeding up lowers the pressure and rising lowers it too, so the two drops add: 6 + 15 = 21 kPa lower. The 9 kPa answers treat the two effects as opposing each other, which would be true only if the pipe descended or widened. 21 kPa higher gives both effects the wrong sign.`,
  },
  [r`Why does Bernoulli's equation need a non-viscous fluid?`]: {
    question: r`A real, viscous oil flows steadily along a pipe. How does the sum P + ρgy + ½ρv² at a point downstream compare with the same sum upstream?`,
    options: [
      r`Equal, since energy is conserved in every kind of fluid`,
      r`Larger, since friction adds heat to the three terms`,
      r`Smaller, since friction turns some of it into heat`,
      r`Smaller, since a viscous oil cannot be compressed`,
    ],
    correctAnswer: 2,
    explanation: r`Bernoulli's equation is conservation of energy for the three terms. Viscosity is internal friction, which turns some of that energy into heat, so the sum is smaller downstream. Total energy is still conserved, but the heat is not one of the three terms, so the sum is neither equal nor larger. Being incompressible has nothing to do with the loss.`,
  },
  [r`How do speed and wall pressure change in a narrowed artery, and in a widened one?`]: {
    question: r`A surgeon replaces a segment of a level blood vessel with a graft that has twice the vessel's cross-sectional area. The flow rate is unchanged. Treating blood as ideal, how does the blood in the graft compare with the blood in the vessel?`,
    options: [
      r`Half the speed and a lower pressure on the wall`,
      r`Half the speed and a higher pressure on the wall`,
      r`Twice the speed and a lower pressure on the wall`,
      r`Twice the speed and a higher pressure on the wall`,
    ],
    correctAnswer: 1,
    explanation: r`Wider means slower: twice the area gives half the speed. Slower fluid at the same height has a higher pressure, so the blood presses harder on the graft's wall. Half the speed with a lower pressure gets the Bernoulli step backward, and twice the speed gets continuity backward.`,
  },

  // Video 4
  [r`What are the first steps in any Bernoulli problem?`]: {
    question: r`In a level pipe, point 1 has an area of 8 cm², a speed of 1.5 m/s and a pressure of 40 kPa. Point 2 has an area of 2 cm², and its pressure is wanted. Which value must be found before Bernoulli's equation can be used, and how?`,
    options: [
      r`v₂ = 0.375 m/s, from continuity`,
      r`v₂ = 1.5 m/s, since the flow is steady`,
      r`y₂ = 6.0 m, from the ratio of the areas`,
      r`v₂ = 6.0 m/s, from continuity`,
    ],
    correctAnswer: 3,
    explanation: r`After listing P, v and y at each point, the missing speed comes from continuity: v₂ = (1.5 m/s)(8/2) = 6.0 m/s. 0.375 m/s turns the area ratio upside down. Steady flow means the speed at each point does not change with time, not that the two points share a speed, and the areas say nothing about height in a level pipe.`,
  },
  [r`How do you find the pressure change in a level pipe that narrows?`]: {
    question: r`Gasoline (ρ = 700 kg/m³) speeds up from 1 m/s to 3 m/s where a level fuel line narrows. Treating the gasoline as ideal, how much lower is the pressure in the narrow part?`,
    options: [r`1400 Pa`, r`5600 Pa`, r`2800 Pa`, r`700 Pa`],
    correctAnswer: 2,
    explanation: r`P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(700)(9 − 1) = 2800 Pa. 1400 Pa squares the difference of the speeds, (3 − 1)² = 4. 5600 Pa leaves out the ½, and 700 Pa uses the speeds without squaring them.`,
  },
  [r`What is the common trap when putting two speeds into Bernoulli's equation?`]: {
    question: r`Water (ρ = 1000 kg/m³) speeds up from 3 m/s to 7 m/s in a level pipe. Which working gives the fall in pressure?`,
    options: [
      r`49 − 9 = 40, giving 20 kPa`,
      r`(7 − 3)² = 16, giving 8 kPa`,
      r`49 + 9 = 58, giving 29 kPa`,
      r`7 − 3 = 4, giving 2 kPa`,
    ],
    correctAnswer: 0,
    explanation: r`Square each speed first, then subtract: 49 − 9 = 40, and ½(1000)(40) = 20,000 Pa. Squaring the difference, (7 − 3)² = 16, is the common trap and gives too small a drop. Adding the squares or leaving the speeds unsquared does not match ½ρ(v₂² − v₁²) either.`,
  },
  [r`How do you find the pressure change in a pipe that narrows and climbs?`]: {
    question: r`Kerosene (ρ = 800 kg/m³) speeds up from 2 m/s to 6 m/s as its pipe narrows and rises 3 m. With g = 10 m/s² and ideal flow, how much lower is the pressure at the top?`,
    options: [r`11.2 kPa`, r`24.0 kPa`, r`30.4 kPa`, r`36.8 kPa`],
    correctAnswer: 3,
    explanation: r`The speed term is ½(800)(36 − 4) = 12,800 Pa and the height term is (800)(10)(3) = 24,000 Pa, and they add to 36.8 kPa. 11.2 kPa subtracts the two terms. 24.0 kPa is the height term alone, and 30.4 kPa squares the difference of the speeds, (6 − 2)² = 16.`,
  },
  [r`You have a pressure drop in pascals and an upstream pressure in kilopascals. How do you finish?`]: {
    question: r`The pressure upstream of a narrowing is 220 kPa. A Bernoulli calculation shows the pressure falls by 35,000 Pa through the narrowing. What is the pressure downstream?`,
    options: [r`255 kPa`, r`185 kPa`, r`216.5 kPa`, r`223.5 kPa`],
    correctAnswer: 1,
    explanation: r`Convert first: 35,000 Pa is 35 kPa. Then subtract the drop: 220 − 35 = 185 kPa. 255 kPa adds the change, which is the common trap. 216.5 and 223.5 kPa treat 35,000 Pa as 3.5 kPa.`,
  },
  [r`What quick check works on any Bernoulli answer?`]: {
    question: r`Point 2 is 4 m above point 1 in a pipe carrying water (ρ = 1000 kg/m³). A student derives a formula for P₁ − P₂ and checks it by setting both speeds to zero. With g = 10 m/s², what must a correct formula then give?`,
    options: [
      r`−40 kPa, the hydrostatic difference`,
      r`0 kPa, since nothing is moving`,
      r`+40 kPa, the hydrostatic difference`,
      r`+4 kPa, the hydrostatic difference`,
    ],
    correctAnswer: 2,
    explanation: r`With the flow stopped only ρg(y₂ − y₁) is left: (1000)(10)(4) = 40,000 Pa, with the lower point at the higher pressure, so P₁ − P₂ = +40 kPa. A result of −40 kPa would put the higher pressure at the top. Zero forgets that still water has a pressure difference with height, and 4 kPa leaves out g.`,
  },

  // Video 5
  [r`In Torricelli's theorem and the jet's range, what do $h$ and $H$ stand for, and what is their SI unit?`]: {
    question: r`An open tank stands on level ground and holds water 1.8 m deep. A small hole in its side is 0.5 m above the ground. Which values of h and H go into the exit speed and the range of the jet?`,
    options: [
      r`h = 1.3 m and H = 0.5 m`,
      r`h = 0.5 m and H = 1.3 m`,
      r`h = 1.8 m and H = 0.5 m`,
      r`h = 1.3 m and H = 1.8 m`,
    ],
    correctAnswer: 0,
    explanation: r`h is the depth of the hole below the surface, 1.8 − 0.5 = 1.3 m, and H is the hole's height above the ground, 0.5 m. Swapping the two measures h up from the bottom of the tank. Using 1.8 m for either one takes the full depth of the water, which is neither the depth of the hole nor its height.`,
  },
  [r`Which two points does Torricelli's theorem compare?`]: {
    question: r`A student wants the speed of the jet from a small hole in a wide, open vat. Which pair of points lets her set both pressures to atmospheric pressure and one speed to about zero?`,
    options: [
      r`The liquid surface and the floor of the vat`,
      r`The jet just outside the hole and the spot where it lands`,
      r`A point just inside the hole and the jet just outside it`,
      r`The liquid surface and the jet just outside the hole`,
    ],
    correctAnswer: 3,
    explanation: r`Torricelli's theorem compares the liquid surface, which is open to the air and barely moving, with the jet just outside the hole, which is also open to the air. The floor of the vat and a point just inside the hole are under liquid, so the pressure there is above atmospheric. The jet and its landing spot are both at atmospheric pressure, but the liquid is moving fast at both.`,
  },
  [r`Which two simplifications turn Bernoulli's equation into Torricelli's theorem?`]: {
    question: r`Four containers of water each have a hole 0.8 m below the water surface, and the water leaves into the open air. With g = 10 m/s², for which container is √(2gh) = 4 m/s the correct exit speed?`,
    options: [
      r`A wide tank, sealed at the top, with compressed air above the water`,
      r`A wide tank, open to the air at the top, with a small hole in it`,
      r`A narrow tube, open to the air at the top, with a hole as wide as it`,
      r`A wide tank, sealed at the top, with a vacuum above the water`,
    ],
    correctAnswer: 1,
    explanation: r`The theorem needs both points at atmospheric pressure, so the pressures cancel, and a tank far wider than the hole, so the surface speed is about zero. The open wide tank with a small hole meets both. Compressed air or a vacuum above the water makes the two pressures unequal, and in a tube as wide as its hole the surface moves as fast as the jet.`,
  },
  [r`State Torricelli's theorem.`]: {
    question: r`A wide, open rooftop cistern springs a small leak 1.8 m below the water surface. With g = 10 m/s² and ideal flow, how fast does the water leave the leak?`,
    options: [r`36 m/s`, r`4.2 m/s`, r`6.0 m/s`, r`18 m/s`],
    correctAnswer: 2,
    explanation: r`v = √(2gh) = √(2 × 10 × 1.8) = √36 = 6.0 m/s. 36 forgets the square root. 4.2 m/s is √(gh), which leaves out the 2, and 18 is gh with neither the 2 nor the root.`,
  },
  [r`Why does a jet leave a tank at the speed of a stone dropped through the same height?`]: {
    question: r`A small hole is 3.2 m below the surface of the oil in a wide, open tank. Beside the tank, a pebble is dropped from rest and falls 3.2 m. With g = 10 m/s² and no friction or air resistance, how do the speed of the jet and the final speed of the pebble compare?`,
    options: [
      r`The same, 8 m/s: each trades height for speed`,
      r`The jet is faster: pressure adds to its speed`,
      r`The pebble is faster: it falls freely in air`,
      r`The same, 64 m/s: each trades height for speed`,
    ],
    correctAnswer: 0,
    explanation: r`Each parcel of oil trades the potential energy of a 3.2 m drop for kinetic energy, ρgh = ½ρv², exactly as the pebble does with mgh = ½mv². Both give v = √(2 × 10 × 3.2) = √64 = 8 m/s. Neither one is faster, because the density and the mass cancel in the same way, and 64 is v² without the square root.`,
  },
  [r`How does the density of the liquid affect the speed of the jet from a hole in a tank?`]: {
    question: r`Water leaves a small hole in a wide, open tank at 3.0 m/s. The tank is emptied and refilled to the same level with brine, which is 1.2 times as dense as water. How fast does the brine leave the hole?`,
    options: [r`3.6 m/s`, r`3.0 m/s`, r`2.5 m/s`, r`3.3 m/s`],
    correctAnswer: 1,
    explanation: r`Density appears on both sides of ρgh = ½ρv² and cancels, so the exit speed depends only on g and the depth: still 3.0 m/s. 3.6 m/s multiplies by 1.2 and 2.5 m/s divides by it. 3.3 m/s scales by the square root of 1.2, but the density does not enter at all.`,
  },
  [r`How does the speed of the jet depend on the depth of the hole?`]: {
    question: r`A broad, open cider barrel is tapped with two spouts. Cider pours from the upper spout, 0.20 m beneath the top of the cider, at 2.0 m/s. Treating the cider as ideal, how fast does it pour from the lower spout, 1.8 m beneath the top?`,
    options: [r`18 m/s`, r`9.0 m/s`, r`4.5 m/s`, r`6.0 m/s`],
    correctAnswer: 3,
    explanation: r`The speed goes as the square root of the depth. The lower spout is 9 times as deep, so the cider leaves √9 = 3 times as fast: 6.0 m/s. 18 m/s scales the speed directly with the depth. 9.0 and 4.5 m/s use half of the depth ratio or a quarter of it, and neither is a square root.`,
  },
  [r`What happens to the jet as an open tank drains?`]: {
    question: r`A straight-sided open barrel drains through a small hole in its side. The water level takes 40 s to fall from 80 cm above the hole to 60 cm above it. How long does it take to fall from 40 cm above the hole to 20 cm above it?`,
    options: [
      r`Less than 40 s, since a shallower depth gives a faster jet`,
      r`Exactly 40 s, since the same volume of water has to leave`,
      r`More than 40 s, since a shallower depth gives a slower jet`,
      r`Less than 40 s, since less water is left to push out`,
    ],
    correctAnswer: 2,
    explanation: r`As the tank drains, the depth above the hole shrinks, so the exit speed √(2gh) and the flow rate both fall. The same volume (a 20 cm layer) must leave in both stages, but at a lower flow rate, so the second stage takes longer than 40 s. Equal volumes do not mean equal times, and a shallower depth gives a slower jet, not a faster one.`,
  },
  [r`How long does a jet that leaves horizontally take to reach the ground?`]: {
    question: r`Water leaves horizontally from a small hole that is 0.20 m below the water surface and 1.8 m above the ground. With g = 10 m/s², how long does the water take to reach the ground?`,
    options: [r`0.20 s`, r`0.60 s`, r`0.36 s`, r`0.42 s`],
    correctAnswer: 1,
    explanation: r`The fall is set by the hole's height above the ground: t = √(2H/g) = √(3.6/10) = √0.36 = 0.60 s. 0.20 s puts the depth of 0.20 m into the formula, which is the common trap. 0.36 is t² without the square root, and 0.42 s leaves out the 2.`,
  },
  [r`How far from the tank does a horizontal jet land?`]: {
    question: r`A broad rain barrel, open at the top, stands on a patio. A small hole in its wall is 0.90 m beneath the top of the rainwater and 0.40 m above the patio, and the stream starts out horizontal. Treating the flow as ideal, how far from the wall does the stream strike the patio?`,
    options: [r`1.2 m`, r`0.60 m`, r`0.72 m`, r`1.3 m`],
    correctAnswer: 0,
    explanation: r`R = 2√(hH) = 2√(0.90 × 0.40) = 2√0.36 = 1.2 m. 0.60 m leaves out the factor of 2. 0.72 m is 2hH without the square root, and 1.3 m simply adds the depth and the height.`,
  },

  // Video 6
  [r`How do you find the flow rate out of a hole in a tank?`]: {
    question: r`A town reservoir, broad and open to the sky, has a small hole 5.0 m below its water surface. The area of the hole is 0.40 cm². With g = 10 m/s² and ideal flow, what volume leaves through the hole every second?`,
    options: [
      r`4.0 × 10⁻² m³/s`,
      r`2.8 × 10⁻⁴ m³/s`,
      r`4.0 m³/s`,
      r`4.0 × 10⁻⁴ m³/s`,
    ],
    correctAnswer: 3,
    explanation: r`v = √(2 × 10 × 5.0) = 10 m/s, and 0.40 cm² is 4.0 × 10⁻⁵ m², so Q = (4.0 × 10⁻⁵ m²)(10 m/s) = 4.0 × 10⁻⁴ m³/s. 4.0 m³/s leaves the area in cm², and 4.0 × 10⁻² uses 10⁻² m² per cm². 2.8 × 10⁻⁴ takes the speed as √(gh), about 7 m/s.`,
  },
  [r`How do you convert an area from cm² to m², and a flow rate from m³/s to L/s?`]: {
    question: r`The opening of a fire hose measures 25 cm², and the stream leaves it at 2.0 m/s. What is the discharge in SI units and in liters per second?`,
    options: [
      r`5.0 × 10⁻¹ m³/s, which is 500 L/s`,
      r`5.0 × 10⁻⁵ m³/s, which is 0.050 L/s`,
      r`5.0 × 10⁻³ m³/s, which is 5.0 L/s`,
      r`5.0 × 10⁻³ m³/s, which is 0.0050 L/s`,
    ],
    correctAnswer: 2,
    explanation: r`25 cm² is 25 × 10⁻⁴ m², so Q = (25 × 10⁻⁴ m²)(2.0 m/s) = 5.0 × 10⁻³ m³/s, and 10⁻³ m³/s is 1 L/s, so that is 5.0 L/s. The 500 L/s answer uses 10⁻² m² per cm² and the 0.050 L/s answer uses 10⁻⁶. 0.0050 L/s has the right SI value but treats 1 m³/s as 1 L/s.`,
  },
  [r`The depth of water above a hole falls to one-quarter. What happens to the exit speed and the flow rate?`]: {
    question: r`Water leaves a small hole in an open tank at 0.60 L/s when the surface is 2.0 m above the hole. What is the flow rate once the surface has fallen to 0.50 m above the hole?`,
    options: [r`0.30 L/s`, r`0.15 L/s`, r`0.42 L/s`, r`0.075 L/s`],
    correctAnswer: 0,
    explanation: r`The depth has fallen to one-quarter, so the exit speed √(2gh) halves, and half the speed through the same hole is half the flow rate: 0.30 L/s. 0.15 L/s scales the flow directly with the depth. 0.42 L/s is what half the depth would give, and 0.075 L/s squares the depth ratio.`,
  },
  [r`What are the steps for finding where a horizontal jet lands?`]: {
    question: r`A tall brewing vat is broad and open at the top. A drain opening in its wall is 1.25 m beneath the top of the liquid and 0.20 m above the cellar floor, and the liquid shoots out horizontally. With g = 10 m/s² and ideal flow, how far from the vat does the liquid strike the cellar floor?`,
    options: [r`2.5 m`, r`1.0 m`, r`0.40 m`, r`0.50 m`],
    correctAnswer: 1,
    explanation: r`Exit speed from the depth: v = √(2 × 10 × 1.25) = 5 m/s. Fall time from the height: 0.20 = ½(10)t², so t = 0.20 s. Range: R = vt = 1.0 m. 2.5 m uses the depth for the fall time as well (0.50 s), 0.40 m uses the height for the exit speed as well (2 m/s), and 0.50 m is √(hH) without the factor of 2.`,
  },
  [r`For a jet from a tank, which distance sets the exit speed and which sets the fall time?`]: {
    question: r`A broad rain collector is open at the top. A leak in its wall is 0.05 m beneath the top of the rainwater and 1.25 m above the lawn, and the stream starts out horizontal. With g = 10 m/s² and ideal flow, how fast does the stream start out, and for how long is it in the air?`,
    options: [
      r`It starts at 5 m/s and is in the air for 0.1 s`,
      r`It starts at 1 m/s and is in the air for 0.1 s`,
      r`It starts at 5 m/s and is in the air for 0.5 s`,
      r`It starts at 1 m/s and is in the air for 0.5 s`,
    ],
    correctAnswer: 3,
    explanation: r`The depth of the leak below the surface sets the exit speed: √(2 × 10 × 0.05) = 1 m/s. Its height above the lawn sets the fall time: √(2 × 1.25/10) = 0.5 s. Starting at 5 m/s with 0.1 s in the air swaps the two distances, and the other two answers use one distance for both steps.`,
  },
  [r`A tank's water is replaced by oil, filled to the same level. What changes about the jet?`]: {
    question: r`A horizontal jet of water from a small hole in an open tank lands 1.6 m from the tank. The water is replaced by an oil with 0.80 times the density of water, filled to the same level. Treating both liquids as ideal, where does the jet of oil land?`,
    options: [r`2.0 m away`, r`1.3 m away`, r`1.6 m away`, r`1.8 m away`],
    correctAnswer: 2,
    explanation: r`The exit speed √(2gh) has no density in it, and the fall time does not depend on density either, so the range is still 1.6 m. 2.0 m divides by 0.80 and 1.3 m multiplies by it. 1.8 m scales by the square root of the density ratio, but density does not enter at any step.`,
  },

  // Video 7
  [r`In a Venturi meter, what do $\Delta P$ and $\Delta h$ stand for, and what are their SI units?`]: {
    question: r`In a Venturi meter, the liquid in the open tube over the wide section stands 32 cm above the pipe, and the liquid in the tube over the throat stands 20 cm above the pipe. What value of Δh goes into the calculation?`,
    options: [
      r`0.20 m, the level over the throat`,
      r`0.12 m, the gap between the levels`,
      r`0.52 m, the sum of the two levels`,
      r`0.26 m, the mean of the two levels`,
    ],
    correctAnswer: 1,
    explanation: r`Δh is the difference between the liquid levels in the two open tubes: 32 − 20 = 12 cm, or 0.12 m in SI units. The level over the throat alone, the sum of the levels and their mean are not differences, so none of them measures the pressure difference between the two sections.`,
  },
  [r`What is the Venturi effect?`]: {
    question: r`An ideal liquid flows along a level pipe at a pressure of 80 kPa. It passes through a constriction, where its ½ρv² term is 30 kPa larger, and then the pipe widens back to its first size. What is the pressure in the constriction and after it?`,
    options: [
      r`50 kPa in the constriction, then 80 kPa after it`,
      r`50 kPa in the constriction, then 50 kPa after it`,
      r`110 kPa in the constriction, then 80 kPa after it`,
      r`110 kPa in the constriction, then 110 kPa after it`,
    ],
    correctAnswer: 0,
    explanation: r`Pressure drops in a constriction: the kinetic term gains 30 kPa, so the pressure falls to 50 kPa. When the pipe widens to its first size the speed returns to its first value, and the pressure recovers to 80 kPa. Staying at 50 kPa ignores the recovery, and 110 kPa makes the pressure rise where the fluid speeds up.`,
  },
  [r`What is a Venturi meter, and over which section does its liquid stand lower?`]: {
    question: r`A level Venturi meter carries a steady stream of liquid. Open tube X rises from a section of the meter whose area is 12 cm², and open tube Y from a section whose area is 3 cm². In which tube does the liquid stand lower, and why?`,
    options: [
      r`In tube X, where the liquid is faster`,
      r`In tube Y, where the liquid is slower`,
      r`In tube X, where the liquid is slower`,
      r`In tube Y, where the liquid is faster`,
    ],
    correctAnswer: 3,
    explanation: r`Tube Y is over the throat, the narrow section. The liquid is faster there, so its pressure is lower and it holds up a shorter column. The liquid under tube X is the slower, higher-pressure liquid, so its level is the higher one, and the liquid under tube Y is the faster liquid, not the slower.`,
  },
  [r`How does the height difference in a Venturi meter give the pressure difference?`]: {
    question: r`A Venturi meter carries an oil of density 800 kg/m³. The oil levels in its two open tubes differ by 5.0 cm. With g = 10 m/s², what is the pressure difference between the wide section and the throat?`,
    options: [r`40,000 Pa`, r`40 Pa`, r`400 Pa`, r`500 Pa`],
    correctAnswer: 2,
    explanation: r`ΔP = ρgΔh = (800)(10)(0.050) = 400 Pa. 40,000 Pa leaves the height in centimeters. 40 Pa leaves out g, and 500 Pa uses the density of water instead of the oil that fills the tubes.`,
  },
  [r`Which two equations turn a Venturi meter's pressure difference into the two flow speeds?`]: {
    question: r`Water (ρ = 1000 kg/m³) moves at 1 m/s in the wide section of a level Venturi meter. The throat has one-quarter of the wide section's area. What is the pressure difference between the two sections?`,
    options: [r`8000 Pa`, r`7500 Pa`, r`4500 Pa`, r`1500 Pa`],
    correctAnswer: 1,
    explanation: r`Continuity gives the throat speed, 4 × 1 = 4 m/s, and Bernoulli for a level pipe gives ΔP = ½(1000)(16 − 1) = 7500 Pa. 8000 Pa uses the throat speed alone and forgets the wide section's term. 4500 Pa squares the difference of the speeds, and 1500 Pa does not square them at all.`,
  },
  [r`The flow rate through a Venturi meter doubles. What happens to the height difference?`]: {
    question: r`The liquid levels in the two open tubes of a Venturi meter differ by 2.0 cm. The flow rate through the meter is then tripled. What is the new difference between the levels?`,
    options: [r`6.0 cm`, r`3.5 cm`, r`54 cm`, r`18 cm`],
    correctAnswer: 3,
    explanation: r`Tripling the flow rate triples both speeds, and the pressure difference goes as the speed squared, so the height difference becomes 9 × 2.0 = 18 cm. 6.0 cm scales it directly with the flow rate. 3.5 cm uses a square root, and 54 cm uses a cube.`,
  },
  [r`What happens at the open tip of a pitot tube?`]: {
    question: r`A pitot tube points straight into a stream of water that moves at 3 m/s. What are the speed and the pressure of the water right at the tube's open tip?`,
    options: [
      r`0 m/s, with a pressure above that of the stream`,
      r`3 m/s, with a pressure equal to that of the stream`,
      r`0 m/s, with a pressure below that of the stream`,
      r`6 m/s, with a pressure below that of the stream`,
    ],
    correctAnswer: 0,
    explanation: r`The water that meets the tip has nowhere to go and is brought to rest: this is the stagnation point. Its kinetic energy turns into pressure, so the pressure there is above the stream's static pressure. Water that kept moving at 3 m/s would show no pressure change, and stopping cannot lower the pressure or double the speed.`,
  },
  [r`What is the stagnation pressure at the tip of a pitot tube?`]: {
    question: r`Water (ρ = 1000 kg/m³) flows at 4 m/s past a pitot tube. A port on the side of the tube reads a static pressure of 102 kPa. What is the pressure at the tube's tip?`,
    options: [r`94 kPa`, r`118 kPa`, r`110 kPa`, r`104 kPa`],
    correctAnswer: 2,
    explanation: r`The stagnation pressure is P + ½ρv² = 102 kPa + ½(1000)(16) Pa = 102 + 8 = 110 kPa. 94 kPa subtracts the kinetic term when the tip's pressure must be the higher one. 118 kPa leaves out the ½, and 104 kPa does not square the speed.`,
  },
  [r`How does a pitot tube's reading give the speed of the stream?`]: {
    question: r`Engineers testing a racing cyclist mount a pitot tube in their wind tunnel. Its gauge shows 960 Pa between the tip and the side port, and the tunnel's air has a density of 1.2 kg/m³. What is the airspeed in the tunnel?`,
    options: [r`28 m/s`, r`40 m/s`, r`20 m/s`, r`1600 m/s`],
    correctAnswer: 1,
    explanation: r`v = √(2ΔP/ρ) = √(2 × 960/1.2) = √1600 = 40 m/s. 28 m/s leaves out the 2 (√800), and 20 m/s puts the 2 in the denominator (√400). 1600 is v² without the square root.`,
  },
  [r`Why can the pitot formula not be used for a Venturi meter?`]: {
    question: r`Water (ρ = 1000 kg/m³) moves at 1 m/s in the wide section of a Venturi meter and at 3 m/s in its throat. A student finds the pressure difference from ΔP = ½ρv², using the throat's speed. How does her answer compare with the true value?`,
    options: [
      r`4000 Pa too large, since the wide section's water also moves`,
      r`500 Pa too small, since the wide section's water also moves`,
      r`Exactly right, since the throat's speed alone sets the value`,
      r`500 Pa too large, since the wide section's water also moves`,
    ],
    correctAnswer: 3,
    explanation: r`The single-speed formula belongs to a pitot tube, where the fluid at the tip is at rest. In a Venturi meter both points are moving, so ΔP = ½(1000)(9 − 1) = 4000 Pa, while her formula gives ½(1000)(9) = 4500 Pa: 500 Pa too large. Her value cannot be too small, since she left out a term that is subtracted, and 4000 Pa is the true value, not her error.`,
  },
  [r`How does an atomizer lift liquid up its tube?`]: {
    question: r`Air blown across the top of a straw standing in a cup of water (ρ = 1000 kg/m³) lowers the pressure at the top of the straw to 500 Pa below atmospheric pressure. With g = 10 m/s², how far does the water rise in the straw, and what moves it?`,
    options: [
      r`5 cm, pushed up by atmospheric pressure on the cup`,
      r`5 cm, pulled up by suction from the moving air`,
      r`50 cm, pushed up by atmospheric pressure on the cup`,
      r`50 cm, pulled up by suction from the moving air`,
    ],
    correctAnswer: 0,
    explanation: r`The still air over the cup is at full atmospheric pressure, 500 Pa more than at the top of the straw, and that larger pressure pushes the water up until ρgh = 500 Pa, so h = 500/(1000 × 10) = 0.05 m = 5 cm. Nothing pulls or sucks the water up: fluids only push. 50 cm leaves g out of ρgh.`,
  },
  [r`How does a wing produce lift?`]: {
    question: r`In level flight, the air pressure is 90.0 kPa just beneath a wing and 89.2 kPa just above it. The wing's area is 20 m². What net force does the air exert on the wing?`,
    options: [
      r`16,000 N, directed downward`,
      r`800 N, directed upward`,
      r`16,000 N, directed upward`,
      r`40 N, directed upward`,
    ],
    correctAnswer: 2,
    explanation: r`The pressure difference is 90.0 − 89.2 = 0.8 kPa = 800 Pa, with the higher pressure underneath, so F = ΔP · A = (800 Pa)(20 m²) = 16,000 N upward. A downward force would need the higher pressure on top. 800 is the pressure difference in pascals, not a force, and 40 divides by the area.`,
  },

  // Video 8
  [r`What are the steps from a Venturi meter's height difference to its flow rate?`]: {
    question: r`A Venturi gauge is fitted to a level fuel line that carries ethanol. The line's wide section is 20 cm² and the gauge's throat is 5.0 cm². The ethanol stands 0.12 m lower in the open tube above the throat than in the open tube above the wide section. With g = 10 m/s² and ideal flow, how much ethanol passes each second?`,
    options: [r`0.20 L/s`, r`0.80 L/s`, r`3.2 L/s`, r`8.0 L/s`],
    correctAnswer: 1,
    explanation: r`ΔP = ρgΔh, and continuity gives v₂ = 4v₁, so ρg(0.12) = ½ρ(16v₁² − v₁²). The density cancels: 1.2 = 7.5v₁², so v₁ = 0.40 m/s in the wide section. Then Q = A₁v₁ = (20 × 10⁻⁴ m²)(0.40 m/s) = 8.0 × 10⁻⁴ m³/s = 0.80 L/s. 0.20 L/s and 3.2 L/s pair one section's area with the other section's speed, and 8.0 L/s slips a factor of 10 in the units.`,
  },
  [r`A Venturi meter's throat has one-third of the wide section's area. What does the pressure difference reduce to?`]: {
    question: r`The throat of a Venturi meter has one-fifth of the wide section's area. In terms of the speed v₁ in the wide section and the density ρ, what does the pressure difference between the two sections reduce to?`,
    options: [r`$2 \rho v_1^2$`, r`$8 \rho v_1^2$`, r`$12.5 \rho v_1^2$`, r`$12 \rho v_1^2$`],
    correctAnswer: 3,
    explanation: r`Continuity gives v₂ = 5v₁, so ΔP = ½ρ(25v₁² − v₁²) = 12ρv₁². A coefficient of 12.5 keeps only the throat's term and drops the wide section's. A coefficient of 8 squares the difference of the speeds, (5 − 1)² = 16, and 2 does not square the speeds at all.`,
  },
  [r`What is the common trap when solving a Venturi meter for a speed?`]: {
    question: r`An engineer reads a Venturi gauge on a level line that carries glycerin. The gauge's throat has one-third of the area of the line's wide section, and the glycerin stands 0.10 m lower in the open tube above the throat than in the one above the wide section. With g = 10 m/s² and ideal flow, how fast is the glycerin in the wide section?`,
    options: [r`0.50 m/s`, r`1.4 m/s`, r`0.16 m/s`, r`1.5 m/s`],
    correctAnswer: 0,
    explanation: r`ΔP = ρgΔh, and with v₂ = 3v₁ the pressure difference is ½ρ(9v₁² − v₁²) = 4ρv₁². The density cancels: (10)(0.10) = 4v₁², so v₁ = 0.50 m/s. 1.4 m/s sets ΔP equal to ½ρv² with a single speed, which is the common trap. 0.16 m/s leaves g out of ρgΔh, and 1.5 m/s is the speed in the throat.`,
  },
  [r`Which density goes into the pitot-tube formula?`]: {
    question: r`A survey drone carries a pitot tube whose gauge shows 60 Pa between the tip and the side port during a flight. Air has a density of 1.2 kg/m³ and water has a density of 1000 kg/m³. What is the drone's airspeed?`,
    options: [r`0.35 m/s`, r`7.1 m/s`, r`10 m/s`, r`100 m/s`],
    correctAnswer: 2,
    explanation: r`The density in v = √(2ΔP/ρ) is that of the moving fluid, here air: √(2 × 60/1.2) = √100 = 10 m/s. 0.35 m/s puts in the density of water. 7.1 m/s leaves out the 2, and 100 is v² without the square root.`,
  },
  [r`How do you find the pressure difference across a wing from the air speeds above and below it?`]: {
    question: r`A glider soars through air of density 1.2 kg/m³. The airflow passes above its wing at 40 m/s and below the wing at 30 m/s. Ignoring the wing's thickness and treating the air as ideal, by how much does the pressure below the wing exceed the pressure above it?`,
    options: [r`60 Pa`, r`840 Pa`, r`6 Pa`, r`420 Pa`],
    correctAnswer: 3,
    explanation: r`Square each speed first, then subtract: ΔP = ½(1.2)(1600 − 900) = 0.6 × 700 = 420 Pa. 60 Pa squares the difference of the speeds, (40 − 30)² = 100. 840 Pa leaves out the ½, and 6 Pa uses the speeds without squaring them.`,
  },
  [r`A question gives the pressure difference across a wing and asks for the lift. What is the last step?`]: {
    question: r`The pressure beneath the wings of a model aircraft is 60 Pa higher than the pressure above them. The wings have a total area of 0.50 m². What lift do the wings provide?`,
    options: [r`60 N`, r`30 N`, r`120 N`, r`60 Pa`],
    correctAnswer: 1,
    explanation: r`The last step is to multiply the pressure difference by the area: F = ΔP · A = (60 Pa)(0.50 m²) = 30 N. Stopping at 60 Pa gives a pressure, not a force, and writing it as 60 N only changes the unit. 120 N divides by the area instead of multiplying.`,
  },
}
