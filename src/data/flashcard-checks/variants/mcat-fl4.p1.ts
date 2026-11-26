import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for viscosity, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three quantities are recorded for a sample of syrup, in this order: its density, the pressure at the bottom of its tank, and its viscosity. Which set of symbols and SI units is right?`,
        options: [r`η in kg/m³, then P in Pa, then ρ in Pa·s`, r`ρ in kg/m³, then η in Pa, then P in Pa·s`, r`ρ in kg/m³, then P in Pa, then η in Pa·s`, r`ρ in Pa·s, then P in Pa, then η in kg/m³`],
        correctAnswer: 2,
        explanation: r`Viscosity is written η and measured in pascal-seconds, while density is ρ in kg/m³ and pressure is P in pascals. The other sets swap η with ρ, or give the pascal-second to pressure and the plain pascal to viscosity.`,
      },
      {
        question: r`A data sheet lists the viscosity of blood plasma as 1.5 mPa·s. Which line gives this value with the standard symbol and in the SI unit?`,
        options: [r`η = 1.5 × 10⁻³ Pa·s`, r`η = 1.5 × 10³ Pa·s`, r`ρ = 1.5 × 10⁻³ Pa·s`, r`η = 1.5 × 10⁻³ Pa/s`],
        correctAnswer: 0,
        explanation: r`Viscosity takes the symbol η and the unit Pa·s, and the prefix milli means 10⁻³, so 1.5 mPa·s is 1.5 × 10⁻³ Pa·s. The line with 10³ reads milli as a thousand, the line with ρ uses the symbol for density, and Pa/s divides by the second instead of multiplying by it.`,
      },
    ],
  },
  [r`What symbol stands for the Reynolds number, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An engineer works out a flow's Reynolds number with every quantity in SI units. A colleague repeats it with every quantity, the viscosity included, in a consistent set of gram, centimeter and second units. How do the two results compare?`,
        options: [r`They are the same number, since Re has no unit`, r`The second is 100 times larger, in centimeters`, r`The second is 1000 times larger, in grams`, r`They differ, since Re is in pascal-seconds`],
        correctAnswer: 0,
        explanation: r`Every unit in the Reynolds number cancels, so it is a pure number and comes out the same in any consistent set of units. A factor of 100 or 1000 would appear only if the number carried a length or a mass unit, and the pascal-second belongs to viscosity, not to Re.`,
      },
      {
        question: r`Four results for blood in an artery are listed without labels as 1050, 0.40, 3.5 × 10⁻³ and 2400. Three of them mean nothing until an SI unit is added, and one is complete as it stands. Which one is complete?`,
        options: [r`The 1050, which is the blood's density ρ`, r`The 0.40, which is the average speed v`, r`The 3.5 × 10⁻³, which is the viscosity η`, r`The 2400, which is the Reynolds number Re`],
        correctAnswer: 3,
        explanation: r`The Reynolds number, written Re, is a pure number with no unit, so 2400 is complete as written. The density needs kg/m³, the average speed needs m/s and the viscosity needs Pa·s before any of them means anything.`,
      },
    ],
  },
  [r`What is viscosity, and how does warming a liquid change it?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Under the same pressure difference, the same engine oil moves through the same narrow channel far more slowly on a cold morning than when the engine is hot. What does this show about the cold oil?`,
        options: [r`It has a higher viscosity, so its layers resist sliding more`, r`It has a lower viscosity, so its layers resist sliding more`, r`It has a lower density, so its layers resist sliding more`, r`It has a higher viscosity, so its layers slide more freely`],
        correctAnswer: 0,
        explanation: r`Viscosity is the internal friction between a fluid's layers, and it rises as a liquid cools, so the cold oil's layers resist sliding and the flow is slow. A lower viscosity would mean less resistance, not more. Density is not what holds the layers back, and a higher viscosity never makes layers slide more freely.`,
      },
      {
        question: r`Two liquids of nearly the same density, at the same temperature, are poured down identical tilted glass plates. Liquid X runs off in 2 s, and liquid Y creeps down over 60 s. Which statement is correct?`,
        options: [r`X is more viscous: it has more friction between its layers`, r`Y is more viscous: it has more friction between its layers`, r`Y is more viscous: it has more weight pressing on its layers`, r`X is more viscous: it has less friction between its layers`],
        correctAnswer: 1,
        explanation: r`Viscosity is a fluid's internal friction, its resistance to its layers sliding past one another, so the liquid that creeps is the more viscous one. Naming X gets the comparison backwards. The densities are nearly equal, so weight is not the difference, and less friction would mean a lower viscosity.`,
      },
    ],
  },
  [r`How viscous is blood compared with water, and what is hematocrit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 6.0 mL blood sample has a hematocrit of 0.40. What volume of the sample is red cells, and how does the blood's viscosity compare with water's?`,
        options: [r`3.6 mL, and about 3 to 4 times water's viscosity`, r`2.4 mL, and about 30 to 40 times water's viscosity`, r`3.6 mL, and about 30 to 40 times water's viscosity`, r`2.4 mL, and about 3 to 4 times water's viscosity`],
        correctAnswer: 3,
        explanation: r`Hematocrit is the fraction of the blood's volume taken up by red cells, so the cells fill 0.40 × 6.0 mL = 2.4 mL. Blood is about 3 to 4 times as viscous as water. The 3.6 mL is the rest of the sample, not the cells, and 30 to 40 times is too large by a factor of ten.`,
      },
      {
        question: r`A technician adds a cell-free salt solution to a blood sample, so that red cells now make up a smaller fraction of its volume. What happens to the sample's hematocrit and to its viscosity?`,
        options: [r`The hematocrit falls, but the viscosity rises`, r`The hematocrit falls, and the viscosity falls too`, r`The hematocrit rises, and the viscosity rises too`, r`The hematocrit rises, but the viscosity falls`],
        correctAnswer: 1,
        explanation: r`Hematocrit is the fraction of the volume taken up by red cells, so diluting the cells lowers it, and blood's viscosity rises and falls with its hematocrit. The other options either raise the hematocrit when the cell fraction has gone down, or make the viscosity move against the hematocrit.`,
      },
    ],
  },
  [r`How do anemia and polycythemia change the viscosity of blood?`]: {
    kind: 'concept',
    more: [
      {
        question: r`After months at high altitude, a climber's body has made extra red cells, and the hematocrit has gone from 0.45 to 0.58. What is this condition called, and what has it done to the blood?`,
        options: [r`Polycythemia, which has raised its viscosity`, r`Polycythemia, which has lowered its viscosity`, r`Anemia, which has raised its viscosity`, r`Anemia, which has lowered its viscosity`],
        correctAnswer: 0,
        explanation: r`Too many red cells, and so a high hematocrit, is polycythemia, and blood thickens as its hematocrit rises. Anemia is the opposite case, too few red cells. More cells never thin the blood, so the options with a lowered viscosity are wrong as well.`,
      },
      {
        question: r`A patient's blood is found to be noticeably thinner than normal blood, although the plasma itself is normal. Which finding, and which condition, fit this result?`,
        options: [r`A high hematocrit, as is found in anemia`, r`A low hematocrit, as is found in anemia`, r`A low hematocrit, as is found in polycythemia`, r`A high hematocrit, as is found in polycythemia`],
        correctAnswer: 1,
        explanation: r`Thinner blood means fewer red cells in each milliliter, which is a low hematocrit, and too few red cells is anemia. Polycythemia is too many red cells: a high hematocrit and thicker blood. A high hematocrit paired with anemia mixes the two up.`,
      },
    ],
  },
  [r`What does the velocity profile look like for smooth flow through a tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Tiny tracer beads are released into smooth flow in a tube of radius 4.0 mm: one on the central axis, one 2.0 mm from the axis, and one touching the wall. How do their speeds compare?`,
        options: [r`Wall bead fastest, midway bead slower, axis bead at rest`, r`Midway bead fastest, axis bead slower, wall bead at rest`, r`Axis bead, midway bead and wall bead all at one speed`, r`Axis bead fastest, midway bead slower, wall bead at rest`],
        correctAnswer: 3,
        explanation: r`In smooth flow the layer at the wall is at rest and the speed rises steadily toward the center, which moves fastest. Putting the wall bead fastest turns the profile inside out, the fastest layer is not partway out, and one speed for all three would describe a fluid with no viscosity.`,
      },
      {
        question: r`For smooth flow of a viscous liquid in a tube, a graph is drawn of the liquid's speed against position across the tube, from one wall to the opposite wall. What does the graph look like?`,
        options: [r`Zero at both walls, rising to a single peak at the center`, r`Greatest at both walls, falling to zero at the center`, r`One constant value at every point from wall to wall`, r`Zero at one wall, rising steadily to the opposite wall`],
        correctAnswer: 0,
        explanation: r`The fluid touching each wall is at rest and the center moves fastest, so the graph is an arch: zero at both walls with one peak in the middle, a parabola. The other graphs put the fastest fluid at a wall, or give every layer the same speed, which ignores the friction at the walls.`,
      },
    ],
  },
  [r`For a real fluid in a tube, which speed goes into $Q = Av$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Blood flows smoothly through a vessel of cross-sectional area 3.0 cm². The speed is zero at the wall, 60 cm/s at the center, and 30 cm/s on average across the vessel. What is the flow rate?`,
        options: [r`180 cm³/s`, r`0 cm³/s`, r`90 cm³/s`, r`10 cm³/s`],
        correctAnswer: 2,
        explanation: r`Q = Av uses the average speed: 3.0 cm² × 30 cm/s = 90 cm³/s. The 180 cm³/s uses the center speed, which only the middle of the stream has. Zero uses the wall's speed, and 10 cm³/s divides the speed by the area.`,
      },
      {
        question: r`Water flows smoothly through a tube of cross-sectional area 4.0 cm² at a flow rate of 24 cm³/s. A probe on the tube's axis reads 12 cm/s. What is the average speed across the tube?`,
        options: [r`12 cm/s`, r`96 cm/s`, r`0.17 cm/s`, r`6.0 cm/s`],
        correctAnswer: 3,
        explanation: r`The average speed is v = Q/A = 24 cm³/s ÷ 4.0 cm² = 6.0 cm/s. The 12 cm/s is the speed at the center, the fastest in the tube and not the average. 96 cm/s multiplies Q by A, and 0.17 cm/s divides the area by the flow rate.`,
      },
      {
        question: r`A pipe carries oil in smooth layers at a flow rate of 1.2 × 10⁻⁴ m³/s. The oil moves at 0.80 m/s along the pipe's axis and at 0.40 m/s on average across the pipe. What is the pipe's cross-sectional area?`,
        options: [r`1.5 × 10⁻⁴ m²`, r`4.8 × 10⁻⁵ m²`, r`3.0 × 10⁻⁴ m²`, r`3.3 × 10³ m²`],
        correctAnswer: 2,
        explanation: r`A = Q/v with the average speed: 1.2 × 10⁻⁴ m³/s ÷ 0.40 m/s = 3.0 × 10⁻⁴ m². Dividing by the axis speed of 0.80 m/s gives 1.5 × 10⁻⁴ m². The value 4.8 × 10⁻⁵ multiplies Q by v, and 3.3 × 10³ divides v by Q.`,
      },
      {
        question: r`Syrup flows smoothly through a tube of cross-sectional area 0.50 cm². Its speed is 8.0 cm/s at the center and 4.0 cm/s on average across the tube. What volume of syrup leaves the tube in 1.0 minute?`,
        options: [r`120 mL`, r`240 mL`, r`2.0 mL`, r`480 mL`],
        correctAnswer: 0,
        explanation: r`The flow rate is Q = Av with the average speed: 0.50 cm² × 4.0 cm/s = 2.0 cm³/s, which is 120 cm³ = 120 mL in 60 s. The 240 mL uses the center speed, 2.0 mL is the volume in one second, and 480 mL divides the speed by the area before multiplying by 60 s.`,
      },
      {
        question: r`In smooth flow through a tube, a liquid moves at 10 cm/s at the center and at 5.0 cm/s on average. The driving pressure is raised until the flow rate is 3 times as great, and the flow stays smooth in the same tube. What is the new average speed?`,
        options: [r`30 cm/s`, r`5.0 cm/s`, r`1.7 cm/s`, r`15 cm/s`],
        correctAnswer: 3,
        explanation: r`With the area fixed, Q = Av makes the average speed proportional to the flow rate: 3 × 5.0 cm/s = 15 cm/s. The 30 cm/s triples the center speed instead, 5.0 cm/s leaves the speed unchanged, and 1.7 cm/s divides by 3.`,
      },
      {
        question: r`In smooth flow through a vessel of cross-sectional area 0.50 cm², a technician measures 40 cm/s at the center and estimates the flow rate as 20 cm³/s. The average speed across the vessel is in fact 20 cm/s. What is the true flow rate, and how good is the estimate?`,
        options: [r`10 cm³/s, so the estimate is half too small`, r`10 cm³/s, so the estimate is twice too large`, r`20 cm³/s, so the estimate is exactly right`, r`40 cm³/s, so the estimate is half too small`],
        correctAnswer: 1,
        explanation: r`Q = Av needs the average speed: 0.50 cm² × 20 cm/s = 10 cm³/s. The estimate used the center speed, the fastest in the vessel, so its 20 cm³/s is twice the true value. Calling 20 cm³/s right accepts the center speed, and 40 cm³/s divides the speed by the area.`,
      },
    ],
  },
  [r`A viscous fluid flows steadily along a uniform, level tube. What happens to its speed and its pressure?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A viscous oil flows steadily through a uniform, level pipe. Gauges are placed at three points A, B and C, in that order along the direction of flow. Which statement about the three points is correct?`,
        options: [r`Lowest speed at C, and equal pressures at all three`, r`Equal speeds at all three, and the lowest pressure at C`, r`Lowest speed at C, and the lowest pressure at C also`, r`Equal speeds at all three, and equal pressures also`],
        correctAnswer: 1,
        explanation: r`The area is the same everywhere, so continuity keeps the speed the same at all three points, while friction between the layers makes the pressure fall steadily in the direction of flow, leaving it lowest at C. A falling speed breaks continuity, and equal pressures would hold only for a fluid with no viscosity.`,
      },
      {
        question: r`Oil flows steadily along a uniform, level pipe, and its pressure falls along the way. A student concludes that the oil must be slowing down as it goes. Which reply is correct?`,
        options: [r`Yes: the area is constant, so a falling pressure has to slow the oil as it goes`, r`No: the falling pressure speeds the oil up, as Bernoulli's equation says it must`, r`No: the area is constant, so the speed is too, and the lost energy turns to heat`, r`Yes: friction slows the oil, so less volume passes each second farther along`],
        correctAnswer: 2,
        explanation: r`In steady flow the same volume passes every point each second, and with a constant area that fixes the speed. The pressure falls because friction between the layers turns mechanical energy into heat, not because the speed changes. The oil cannot slow down or speed up without breaking continuity.`,
      },
    ],
  },
  [r`Why can Bernoulli's equation not explain the pressure drop along a uniform, level tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Water enters a level tube of constant diameter at a pressure of 120 kPa and a speed of 2.0 m/s, in steady flow. What outlet pressure does Bernoulli's equation predict, and how does the real outlet pressure compare?`,
        options: [r`It predicts 120 kPa, and the real value is lower`, r`It predicts 120 kPa, and the real value is higher`, r`It predicts 118 kPa, and the real value is lower`, r`It predicts 118 kPa, and the real value is equal`],
        correctAnswer: 0,
        explanation: r`The speed and the height are the same at both ends, so Bernoulli's equation, which assumes no energy is lost, predicts no drop at all: 120 kPa. Viscosity makes the real outlet pressure lower. The 118 kPa subtracts the ½ρv² term, but that term is the same at both ends and cancels.`,
      },
      {
        question: r`For which of these steady flows along a level tube of constant diameter does Bernoulli's equation give the right relation between the inlet and outlet pressures?`,
        options: [r`A thick oil in smooth layers, with a steady pressure fall`, r`Blood in a long narrow vessel, with a steady pressure fall`, r`Water with noisy eddies, with a large fall in pressure`, r`An ideal fluid with no viscosity, with equal pressures`],
        correctAnswer: 3,
        explanation: r`Bernoulli's equation assumes no energy is lost, and with the same speed and height at both ends it predicts equal pressures, which is true only for a fluid with no viscosity. In oil, blood and eddying water, friction turns mechanical energy into heat, so the pressure falls and the equation misses the drop.`,
      },
    ],
  },
  [r`Why must the heart keep pumping even when blood moves at a steady speed?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Blood moves at a constant average speed along a uniform, level stretch of artery, so the net force on it is zero. Which description of the forces on the blood in that stretch is correct?`,
        options: [r`The push from the pressure difference balances the viscous drag`, r`No forces act along the stretch, because the speed is constant`, r`The push from the pressure difference exceeds the viscous drag`, r`The viscous drag exceeds the push from the pressure difference`],
        correctAnswer: 0,
        explanation: r`Viscous friction acts against the motion, so a real fluid keeps a constant speed only if a pressure difference pushes forward just as hard: the two balance. Saying that no forces act would be true only of an ideal fluid. An unbalanced push would speed the blood up, and an unbalanced drag would slow it.`,
      },
      {
        question: r`With each beat the heart does work on the blood, yet the blood's average speed around the circulation stays the same from one minute to the next. Where does the energy supplied by the heart go?`,
        options: [r`Into heat, as viscosity acts between the blood's layers`, r`Into kinetic energy, as the blood keeps gaining speed`, r`Into potential energy, as the blood keeps gaining height`, r`Nowhere, as blood at a steady speed needs no energy`],
        correctAnswer: 0,
        explanation: r`Viscosity keeps turning the blood's mechanical energy into heat, and the heart's work replaces that loss, which is why it must keep pumping. The speed is steady, so kinetic energy is not building up, and blood that goes around a loop returns to the same height. Only an ideal fluid would need no energy.`,
      },
    ],
  },
  [r`How does the pressure needed for a given flow compare in laminar and turbulent flow?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a tube, a pressure difference of 3.0 kPa drives a flow of 6.0 mL/s. The pressure difference is raised to 9.0 kPa, and the flow stays laminar throughout. What is the new flow rate?`,
        options: [r`54 mL/s, as laminar flow goes as pressure squared`, r`18 mL/s, as laminar flow is proportional to pressure`, r`10 mL/s, as laminar flow goes as root of pressure`, r`6.0 mL/s, as laminar flow is set by the tube alone`],
        correctAnswer: 1,
        explanation: r`Laminar flow is proportional to the pressure difference, so 3 times the pressure gives 3 times the flow: 18 mL/s. The 54 mL/s squares the factor of 3, and 10 mL/s takes its square root, which is closer to how turbulent flow behaves. A flow that ignored the pressure would stay at 6.0 mL/s.`,
      },
      {
        question: r`For one pipe, a graph of flow rate against pressure difference is a straight line through the origin up to a certain point. Beyond it the line bends over, so that each extra kilopascal adds less flow than before, and the pipe begins to hum. What happens at the bend?`,
        options: [r`The flow turns laminar, and layers waste part of the added pressure`, r`The flow turns turbulent, and eddies help to carry the added fluid`, r`The flow turns turbulent, and eddies waste part of the added pressure`, r`The flow turns laminar, and its layers slide more easily than before`],
        correctAnswer: 2,
        explanation: r`The straight line is laminar flow, where flow is proportional to pressure. Past the bend the flow is turbulent: chaotic, noisy eddies waste energy, so much more pressure is needed for each bit of extra flow. Laminar flow is the silent, proportional part, and eddies hinder the flow instead of helping it.`,
      },
    ],
  },
  [r`What is the Reynolds number?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water of density 1000 kg/m³ and viscosity 1.0 × 10⁻³ Pa·s moves at an average speed of 0.30 m/s through a hose whose inside diameter is 0.010 m. What is the Reynolds number of the flow?`,
        options: [r`3.0`, r`0.0030`, r`3000`, r`30,000`],
        correctAnswer: 2,
        explanation: r`Re = ρvD/η = (1000 × 0.30 × 0.010) ÷ (1.0 × 10⁻³) = 3.0 ÷ 10⁻³ = 3000. The value 3.0 leaves the viscosity out, 0.0030 multiplies by the viscosity instead of dividing by it, and 30,000 slips a power of ten.`,
      },
      {
        question: r`Take blood's density as 1000 kg/m³ and its viscosity as 4.0 × 10⁻³ Pa·s. In an aorta of diameter 0.020 m, at what average speed does the Reynolds number reach 2000?`,
        options: [r`0.80 m/s`, r`0.40 m/s`, r`2.5 m/s`, r`0.10 m/s`],
        correctAnswer: 1,
        explanation: r`Rearranged, v = Re·η/(D·ρ) = (2000 × 4.0 × 10⁻³) ÷ (1000 × 0.020) = 8.0 ÷ 20 = 0.40 m/s. The 0.80 m/s puts in the radius, 0.010 m, where the diameter belongs. 2.5 m/s turns the fraction upside down, and 0.10 m/s uses water's viscosity of 1.0 × 10⁻³ Pa·s.`,
      },
      {
        question: r`An oil of density 800 kg/m³ and viscosity 0.040 Pa·s is pumped at an average speed of 0.50 m/s. In a pipe of what diameter would this flow have a Reynolds number of 500?`,
        options: [r`0.025 m`, r`0.10 m`, r`0.050 m`, r`20 m`],
        correctAnswer: 2,
        explanation: r`Rearranged, D = Re·η/(ρv) = (500 × 0.040) ÷ (800 × 0.50) = 20 ÷ 400 = 0.050 m. The 0.025 m halves this as if the formula gave a diameter that still had to become a radius, 0.10 m doubles it, and 20 m turns the fraction upside down.`,
      },
      {
        question: r`In a candy factory, syrup of density 1200 kg/m³ is pumped at an average speed of 0.50 m/s along a pipe of diameter 0.040 m. Dye streaks show smooth layers, and the Reynolds number is found to be 120. What is the syrup's viscosity?`,
        options: [r`5.0 Pa·s`, r`0.20 Pa·s`, r`0.10 Pa·s`, r`2.0 Pa·s`],
        correctAnswer: 1,
        explanation: r`Rearranged, η = ρvD/Re = (1200 × 0.50 × 0.040) ÷ 120 = 24 ÷ 120 = 0.20 Pa·s. The 5.0 Pa·s divides 120 by 24, 0.10 Pa·s uses the radius of 0.020 m in place of the diameter, and 2.0 Pa·s slips a power of ten.`,
      },
      {
        question: r`In a small vessel of diameter 20 μm, blood moves at an average speed of 3.0 mm/s. Take the blood's density as 1000 kg/m³ and its viscosity as 3.0 × 10⁻³ Pa·s. What is the Reynolds number of the flow?`,
        options: [r`20`, r`2.0 × 10⁴`, r`1.8 × 10⁻⁷`, r`0.020`],
        correctAnswer: 3,
        explanation: r`In SI units D = 2.0 × 10⁻⁵ m and v = 3.0 × 10⁻³ m/s, so Re = (1000 × 3.0 × 10⁻³ × 2.0 × 10⁻⁵) ÷ (3.0 × 10⁻³) = 0.020. The value 20 leaves the speed as 3.0, 2.0 × 10⁴ leaves the diameter as 20, and 1.8 × 10⁻⁷ multiplies by the viscosity instead of dividing.`,
      },
      {
        question: r`Water of density 1000 kg/m³ and viscosity 1.0 × 10⁻³ Pa·s moves at an average speed of 0.10 m/s through a pipe of diameter 0.050 m. Flow in a pipe turns turbulent above a Reynolds number of about 2000. What is Re here, and what kind of flow is likely?`,
        options: [r`5000, so the flow is likely laminar`, r`500, so the flow is likely turbulent`, r`5000, so the flow is likely turbulent`, r`500, so the flow is likely laminar`],
        correctAnswer: 2,
        explanation: r`Re = ρvD/η = (1000 × 0.10 × 0.050) ÷ (1.0 × 10⁻³) = 5.0 ÷ 10⁻³ = 5000, which is above the critical value of about 2000, so turbulence is likely. Calling 5000 laminar reads the comparison backwards, and 500 slips a power of ten.`,
      },
    ],
  },
  [r`Which four changes push a flow toward turbulence?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In severe anemia the blood is thinner than normal, and the heart pumps it through the aorta faster than normal. How do these two changes affect the Reynolds number in the aorta?`,
        options: [r`Lower viscosity raises it, and higher speed raises it`, r`Lower viscosity lowers it, and higher speed lowers it`, r`Lower viscosity lowers it, and higher speed raises it`, r`Lower viscosity raises it, and higher speed lowers it`],
        correctAnswer: 0,
        explanation: r`Speed is on top of the Reynolds number and viscosity is on the bottom, so a higher speed and a LOWER viscosity both raise it and push the flow toward turbulence. Viscosity damps turbulence, so thinner blood is more turbulent, not less, and a faster flow is never the calmer one.`,
      },
      {
        question: r`A liquid flows through a tube with a Reynolds number just above the critical value, and the flow is turbulent. Which one of these changes would be most likely to return it to smooth flow?`,
        options: [r`Replacing the liquid with a more viscous one of equal density`, r`Replacing the tube with a wider one at the same liquid speed`, r`Replacing the liquid with a denser one of equal viscosity`, r`Raising the pump setting so that the average speed doubles`],
        correctAnswer: 0,
        explanation: r`Viscosity damps turbulence, so a more viscous liquid lowers the Reynolds number and favors smooth flow. A wider tube, a denser liquid and a higher speed are three of the four changes that push a flow toward turbulence, so each of them would make matters worse.`,
      },
    ],
  },
  [r`Which flow laws stop working once the flow turns turbulent?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Both Bernoulli's equation and Poiseuille's law fail once eddies form in a flow. Which assumption of each law do the eddies break?`,
        options: [r`Bernoulli: the fluid is viscous. Poiseuille: the fluid moves in smooth layers`, r`Bernoulli: no energy is lost. Poiseuille: the fluid has no viscosity at all`, r`Bernoulli: no energy is lost. Poiseuille: the fluid moves in smooth layers`, r`Bernoulli: the fluid is viscous. Poiseuille: the fluid has no viscosity at all`],
        correctAnswer: 2,
        explanation: r`Bernoulli's equation assumes that no energy is lost, and eddies waste energy. Poiseuille's law assumes smooth layers, and eddies destroy them. Bernoulli's equation does not assume a viscous fluid, and Poiseuille's law is built on viscosity, so it does not assume the fluid has none.`,
      },
      {
        question: r`For a certain flow of water through a pipe, Poiseuille's law gives a pressure difference of 6.0 kPa. The Reynolds number turns out to be far above the critical value, and the flow is full of eddies. How does the real pressure difference compare?`,
        options: [r`Exactly 6.0 kPa: the law holds, as the flow is steady`, r`More than 6.0 kPa: the law fails, as eddies waste energy`, r`Less than 6.0 kPa: the law fails, as eddies aid the flow`, r`Exactly 6.0 kPa: the law holds, as it includes viscosity`],
        correctAnswer: 1,
        explanation: r`Poiseuille's law assumes smooth layers, so it stops working once the flow is turbulent, and the energy wasted in eddies means much more pressure is needed than it predicts. Including viscosity does not rescue the law, and eddies never make a flow easier to drive.`,
      },
    ],
  },
  [r`What are a murmur and a bruit, and where do they arise?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A stethoscope placed on the chest of a patient with a narrowed aortic valve picks up a whooshing sound with each beat. What is the sound called, and why does it arise at the valve?`,
        options: [r`A murmur: blood speeds up through the narrow valve and turns turbulent`, r`A bruit: blood speeds up through the narrow valve and turns turbulent`, r`A murmur: blood slows down through the narrow valve and turns turbulent`, r`A bruit: blood slows down through the narrow valve and stays laminar`],
        correctAnswer: 0,
        explanation: r`The sound of turbulent blood flow over the heart is a murmur, and a narrowed valve forces the blood through faster, which makes turbulence likely. A bruit is the same kind of sound heard over an artery. Blood speeds up in a narrowing, and laminar flow is silent.`,
      },
      {
        question: r`During a hard sprint, a faint whooshing sound can be heard over a healthy runner's heart. It is gone a few minutes after the runner stops. What best explains the sound?`,
        options: [r`Exercise raises the blood's viscosity in the aorta, so the flow turns turbulent`, r`Exercise raises the blood's speed in the aorta, so the flow turns turbulent`, r`Exercise lowers the blood's speed in the aorta, so the flow turns turbulent`, r`Exercise raises the blood's speed in the aorta, so the flow turns laminar`],
        correctAnswer: 1,
        explanation: r`A murmur is the sound of turbulent blood flow, and it arises where blood moves fast, as it does in the aorta during heavy exercise. A higher viscosity or a lower speed would calm the flow instead of making it turbulent, and laminar flow makes no sound.`,
      },
    ],
  },
  [r`How does a blood-pressure cuff use turbulence to find systolic and diastolic pressure?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A cuff on a patient's arm is pumped to 200 mmHg and slowly let down. A stethoscope below the cuff hears nothing until 118 mmHg, then tapping with each beat until 76 mmHg, then nothing again. What are the patient's pressures?`,
        options: [r`Systolic 76 mmHg and diastolic 118 mmHg`, r`Systolic 200 mmHg and diastolic 118 mmHg`, r`Systolic 200 mmHg and diastolic 76 mmHg`, r`Systolic 118 mmHg and diastolic 76 mmHg`],
        correctAnswer: 3,
        explanation: r`The tapping begins when the cuff pressure falls to systolic, 118 mmHg, since blood can then spurt through in a turbulent jet at each peak. It vanishes below diastolic, 76 mmHg, when the artery stays open. The 200 mmHg is only how far the cuff was pumped, and systolic is the higher of the two pressures.`,
      },
      {
        question: r`A blood-pressure cuff is silent both when its pressure is above the systolic pressure and when it is below the diastolic pressure. What is the blood in the artery under the cuff doing in each case?`,
        options: [r`Above systolic it flows smoothly; below diastolic it is stopped`, r`Above systolic it is stopped; below diastolic it is stopped too`, r`Above systolic it is turbulent; below diastolic it flows smoothly`, r`Above systolic it is stopped; below diastolic it flows smoothly`],
        correctAnswer: 3,
        explanation: r`Above systolic the cuff holds the artery shut for the whole beat, so no blood passes and there is nothing to hear. Below diastolic the artery stays open and the flow is smooth, which is silent. The tapping comes only in between, from turbulent spurts, so turbulence cannot be the cause of a silence.`,
      },
    ],
  },
  [r`In steady flow through a uniform tube, how does the pressure change with distance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Oil flows steadily through a uniform, level pipeline 40 m long. The pressure is 500 kPa at the inlet and 300 kPa at the outlet. By how much does the pressure fall in each meter of the pipeline?`,
        options: [r`5.0 kPa`, r`12.5 kPa`, r`7.5 kPa`, r`0.20 kPa`],
        correctAnswer: 0,
        explanation: r`The drop per meter is the total drop divided by the length: (500 − 300) kPa ÷ 40 m = 5.0 kPa in each meter. The 12.5 kPa divides the inlet pressure by the length and 7.5 kPa divides the outlet pressure by it. 0.20 kPa divides the length by the drop.`,
      },
      {
        question: r`A liquid flows steadily through a uniform, level tube 2.0 m long, and the total pressure drop along the tube is 8.0 kPa. How much does the pressure fall across a 0.50 m section in the middle of the tube?`,
        options: [r`4.0 kPa`, r`8.0 kPa`, r`16 kPa`, r`2.0 kPa`],
        correctAnswer: 3,
        explanation: r`The pressure falls by the same amount in every meter: 8.0 kPa ÷ 2.0 m = 4.0 kPa per meter, so a 0.50 m section drops 2.0 kPa wherever it sits. The 4.0 kPa is the drop for a whole meter, 8.0 kPa is the drop for the whole tube, and 16 kPa divides 8.0 by 0.50.`,
      },
      {
        question: r`Water flows steadily through a uniform, level pipe in which the pressure falls by 1.5 kPa in each meter. Two gauges on the pipe read 42 kPa and 30 kPa. How far apart are the gauges?`,
        options: [r`18 m`, r`28 m`, r`8.0 m`, r`20 m`],
        correctAnswer: 2,
        explanation: r`The gauges differ by 42 − 30 = 12 kPa, and at 1.5 kPa per meter that takes 12 ÷ 1.5 = 8.0 m. The 18 m multiplies 12 by 1.5. The 28 m and 20 m divide a single gauge reading, 42 kPa or 30 kPa, by the drop per meter.`,
      },
      {
        question: r`A liquid flows steadily through a uniform, level tube 25 m long. Two gauges 3.0 m apart, near the middle of the tube, read 90 kPa and 84 kPa. What is the total pressure drop along the whole tube?`,
        options: [r`50 kPa`, r`6.0 kPa`, r`150 kPa`, r`75 kPa`],
        correctAnswer: 0,
        explanation: r`The drop per meter is (90 − 84) kPa ÷ 3.0 m = 2.0 kPa, and it is the same in every meter, so the whole tube drops 2.0 × 25 = 50 kPa. The 6.0 kPa is only the drop between the gauges, 150 kPa multiplies that 6.0 kPa by 25, and 75 kPa multiplies the 3.0 m spacing by 25.`,
      },
      {
        question: r`For steady flow in a uniform, level tube 5.0 m long, a graph of pressure against position is a straight line from 60 kPa at the inlet to 20 kPa at the outlet. How much does the pressure fall between the points 1.0 m and 4.0 m from the inlet?`,
        options: [r`40 kPa`, r`32 kPa`, r`24 kPa`, r`8.0 kPa`],
        correctAnswer: 2,
        explanation: r`The line falls (60 − 20) kPa ÷ 5.0 m = 8.0 kPa in every meter, and the two points are 3.0 m apart, so the fall is 24 kPa. The 40 kPa is the fall over the whole tube, 32 kPa uses 4.0 m in place of the 3.0 m between the points, and 8.0 kPa is the fall in a single meter.`,
      },
      {
        question: r`Saline flows steadily through a uniform, level catheter 30 cm long, and the total pressure drop along it is 1.2 kPa. By how much does the pressure fall in each centimeter of the catheter?`,
        options: [r`0.040 Pa`, r`36 Pa`, r`25 Pa`, r`40 Pa`],
        correctAnswer: 3,
        explanation: r`The total drop is 1.2 kPa = 1200 Pa, shared equally over 30 cm: 1200 ÷ 30 = 40 Pa in each centimeter. The 0.040 Pa forgets to turn kilopascals into pascals, 36 Pa multiplies 1.2 by 30, and 25 Pa divides 30 by 1.2.`,
      },
    ],
  },
  [r`How do you find the pressure partway along a uniform tube?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Oil flows steadily through a uniform, level pipe 50 m long. The pressure is 400 kPa at the inlet and 300 kPa at the outlet. What is the pressure at a point 20 m from the inlet?`,
        options: [r`340 kPa`, r`380 kPa`, r`360 kPa`, r`350 kPa`],
        correctAnswer: 2,
        explanation: r`The drop per meter is 100 kPa ÷ 50 m = 2.0 kPa, so P = 400 − 2.0 × 20 = 360 kPa. The 340 kPa measures the 20 m from the outlet instead of the inlet, 380 kPa takes off only 1.0 kPa per meter, and 350 kPa is the pressure at the midpoint.`,
      },
      {
        question: r`Water flows steadily through a uniform, level tube 8.0 m long. The inlet pressure is 100 kPa and the total pressure drop along the tube is 40 kPa. How far from the inlet is the pressure 75 kPa?`,
        options: [r`3.0 m`, r`5.0 m`, r`15 m`, r`6.0 m`],
        correctAnswer: 1,
        explanation: r`The pressure falls 40 kPa ÷ 8.0 m = 5.0 kPa per meter, and it has to fall 100 − 75 = 25 kPa, so x = 25 ÷ 5.0 = 5.0 m. The 3.0 m is the distance from the outlet, 15 m divides 75 by 5.0, and 6.0 m takes 75% of the tube's length.`,
      },
      {
        question: r`A liquid flows steadily through a uniform, level tube 10 m long, and the total pressure drop along the tube is 30 kPa. A gauge 6.0 m from the inlet reads 44 kPa. What is the inlet pressure?`,
        options: [r`62 kPa`, r`26 kPa`, r`74 kPa`, r`56 kPa`],
        correctAnswer: 0,
        explanation: r`The drop per meter is 30 kPa ÷ 10 m = 3.0 kPa, so the pressure has fallen 18 kPa by the gauge, and the inlet is at 44 + 18 = 62 kPa. The 26 kPa subtracts the 18 kPa, 74 kPa adds the whole 30 kPa, and 56 kPa uses the 4.0 m that lie beyond the gauge.`,
      },
      {
        question: r`Blood flows steadily through a uniform, level stretch of vessel 12 cm long. The pressure is 13.0 kPa at the inlet and 12.7 kPa at a point 3.0 cm from the inlet. What is the pressure at the outlet?`,
        options: [r`12.4 kPa`, r`12.1 kPa`, r`11.8 kPa`, r`1.2 kPa`],
        correctAnswer: 2,
        explanation: r`The pressure falls 0.3 kPa in 3.0 cm, which is 0.10 kPa per centimeter, so over 12 cm it falls 1.2 kPa: 13.0 − 1.2 = 11.8 kPa. The 12.4 kPa takes off only one more 0.3 kPa, 12.1 kPa uses 9.0 cm from the inlet, and 1.2 kPa is the total drop, not the outlet pressure.`,
      },
      {
        question: r`Water flows steadily through a uniform, level pipeline 2.0 km long. The pressure is 900 kPa at the inlet and 500 kPa at the outlet. What is the pressure at a point 500 m from the inlet?`,
        options: [r`600 kPa`, r`700 kPa`, r`100 kPa`, r`800 kPa`],
        correctAnswer: 3,
        explanation: r`The pipeline is 2000 m long, so the drop per meter is 400 kPa ÷ 2000 m = 0.20 kPa, and P = 900 − 0.20 × 500 = 800 kPa. The 600 kPa measures the 500 m from the outlet, 700 kPa is the midpoint pressure, and 100 kPa is the drop over the 500 m, not the pressure there.`,
      },
      {
        question: r`A liquid flows steadily through a uniform, level tube. The pressure is 160 kPa at the inlet and 40 kPa at the outlet. What is the pressure at the point three quarters of the way from the inlet to the outlet?`,
        options: [r`130 kPa`, r`100 kPa`, r`70 kPa`, r`120 kPa`],
        correctAnswer: 2,
        explanation: r`The total drop is 120 kPa, and three quarters of the way along the pressure has fallen by three quarters of it, 90 kPa: 160 − 90 = 70 kPa. The 130 kPa is the pressure one quarter of the way along, 100 kPa is the midpoint value, and 120 kPa takes three quarters of the inlet pressure.`,
      },
    ],
  },
  [r`The same flow runs through a longer piece of the same tube. How does the total pressure drop change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pressure difference of 45 kPa drives water steadily through 30 m of uniform pipe. The pipe is replaced by 50 m of the same pipe, and the flow rate must stay the same. What pressure difference is needed?`,
        options: [r`27 kPa`, r`65 kPa`, r`45 kPa`, r`75 kPa`],
        correctAnswer: 3,
        explanation: r`The drop per meter is the same, so the total drop is proportional to the length: 45 kPa × (50 ÷ 30) = 75 kPa. The 27 kPa turns the ratio upside down, 65 kPa adds the extra 20 m as if it were 20 kPa, and 45 kPa ignores the added length.`,
      },
      {
        question: r`A pump can supply a pressure difference of at most 60 kPa. Driving the required flow through 12 m of uniform tubing takes 24 kPa. What is the longest piece of the same tubing through which the pump can drive the same flow?`,
        options: [r`4.8 m`, r`30 m`, r`48 m`, r`120 m`],
        correctAnswer: 1,
        explanation: r`For the same flow the drop is proportional to the length: 24 kPa over 12 m is 2.0 kPa per meter, so 60 kPa covers 60 ÷ 2.0 = 30 m. The 4.8 m turns the ratio upside down, 48 m adds the spare 36 kPa as if it were meters, and 120 m multiplies 60 by 24 ÷ 12.`,
      },
      {
        question: r`A pressure difference of 20 kPa drives a liquid steadily through a uniform tube. The tube is cut down to one quarter of its length, and the flow rate is kept the same. What pressure difference is needed now?`,
        options: [r`80 kPa`, r`1.25 kPa`, r`5.0 kPa`, r`20 kPa`],
        correctAnswer: 2,
        explanation: r`For the same flow in the same tube, the drop is proportional to the length, so one quarter of the length needs one quarter of the drop: 5.0 kPa. The 80 kPa multiplies by 4 instead, 1.25 kPa divides by 16 as if length counted twice over, and 20 kPa ignores the change.`,
      },
      {
        question: r`A pressure difference of 3.0 kPa drives saline through a uniform infusion line 1.2 m long. An extension of the same tubing brings the total length to 2.0 m, and the flow rate must stay the same. How much MORE pressure difference is needed than before?`,
        options: [r`5.0 kPa`, r`1.8 kPa`, r`0.80 kPa`, r`2.0 kPa`],
        correctAnswer: 3,
        explanation: r`The drop per meter is 3.0 kPa ÷ 1.2 m = 2.5 kPa, so 2.0 m needs 5.0 kPa, which is 2.0 kPa more than before. The 5.0 kPa is the new total, not the increase. The 1.8 kPa turns the length ratio upside down, and 0.80 is just the added length in meters.`,
      },
      {
        question: r`A pressure difference of 400 Pa drives a liquid steadily through a uniform tube 50 cm long. The same flow rate is wanted through a 2.0 m piece of the same tube. What pressure difference is needed?`,
        options: [r`16 Pa`, r`100 Pa`, r`10 kPa`, r`1.6 kPa`],
        correctAnswer: 3,
        explanation: r`The new tube is 2.0 m = 200 cm, which is 4 times as long, so it needs 4 times the drop: 1600 Pa = 1.6 kPa. The 16 Pa compares 2.0 with 50 without matching the units, 100 Pa divides by 4 instead of multiplying, and 10 kPa multiplies 400 Pa by 50 ÷ 2.0.`,
      },
      {
        question: r`The same steady flow runs through two pieces of the same uniform tubing: piece X is 15 m long and piece Y is 6.0 m long. The pressure drop along Y is 14 kPa. What is the pressure drop along X?`,
        options: [r`35 kPa`, r`5.6 kPa`, r`23 kPa`, r`84 kPa`],
        correctAnswer: 0,
        explanation: r`With the same flow in the same tubing, the drop is proportional to the length: 14 kPa × (15 ÷ 6.0) = 35 kPa. The 5.6 kPa turns the ratio upside down, 23 kPa adds the extra 9 m as if it were 9 kPa, and 84 kPa multiplies 14 by 6.0.`,
      },
    ],
  },
  [r`Which length goes into the Reynolds number, and in what unit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a distillery, ethanol (density 800 kg/m³, viscosity 1.0 × 10⁻³ Pa·s) is piped at an average speed of 0.25 m/s through a line whose inside radius is 2.5 cm. What is the Reynolds number of the flow?`,
        options: [r`5000`, r`10,000`, r`1,000,000`, r`500,000`],
        correctAnswer: 1,
        explanation: r`The diameter goes in, in meters: D = 2 × 2.5 cm = 0.050 m, so Re = (800 × 0.25 × 0.050) ÷ (1.0 × 10⁻³) = 10 ÷ 10⁻³ = 10,000. The 5000 uses the radius. 1,000,000 uses the diameter left as 5.0 in centimeters, and 500,000 uses the radius left in centimeters.`,
      },
      {
        question: r`In an artery of inside diameter 4.0 mm, blood moves at an average speed of 30 cm/s. Take the blood's density as 1000 kg/m³ and its viscosity as 3.0 × 10⁻³ Pa·s. What is the Reynolds number of the flow?`,
        options: [r`200`, r`400`, r`400,000`, r`40,000`],
        correctAnswer: 1,
        explanation: r`In SI units D = 0.0040 m and v = 0.30 m/s, so Re = (1000 × 0.30 × 0.0040) ÷ (3.0 × 10⁻³) = 1.2 ÷ (3.0 × 10⁻³) = 400. The 200 halves the diameter into a radius, 400,000 leaves the diameter as 4.0, and 40,000 leaves the speed as 30.`,
      },
      {
        question: r`Oil of density 900 kg/m³ and viscosity 0.090 Pa·s flows smoothly through a pipe of diameter 10 cm. Its speed is 1.2 m/s at the center and 0.60 m/s on average across the pipe. What is the Reynolds number of the flow?`,
        options: [r`1200`, r`300`, r`600`, r`60,000`],
        correctAnswer: 2,
        explanation: r`The Reynolds number takes the average speed and the diameter in meters: Re = (900 × 0.60 × 0.10) ÷ 0.090 = 54 ÷ 0.090 = 600. The 1200 uses the center speed, 300 uses the radius of 0.050 m, and 60,000 leaves the diameter as 10 in centimeters.`,
      },
      {
        question: r`A tube has an inside radius of 6.0 mm. With the density, the speed and the viscosity all in SI units, which value goes into Re = ρvD/η for D?`,
        options: [r`0.0060 m`, r`1.2 m`, r`0.12 m`, r`0.012 m`],
        correctAnswer: 3,
        explanation: r`D is the tube's diameter in meters: 2 × 6.0 mm = 12 mm = 0.012 m. The 0.0060 m is the radius. The values 1.2 m and 0.12 m have the right digits, but they treat a millimeter as a tenth or a hundredth of a meter when it is a thousandth.`,
      },
      {
        question: r`A student works out the Reynolds number for a flow in a tube and gets 900, but has put the tube's radius where the diameter belongs. Every other value is right. What is the correct Reynolds number?`,
        options: [r`450`, r`3600`, r`1800`, r`900`],
        correctAnswer: 2,
        explanation: r`The Reynolds number is proportional to the length put into it, and the diameter is twice the radius, so the correct value is 2 × 900 = 1800. The 450 halves the result instead, 3600 doubles it twice as if the length were squared, and 900 leaves the mistake in place.`,
      },
      {
        question: r`A cooling loop is designed so that its coolant moves at an average speed of 0.25 m/s with a Reynolds number of exactly 2000. The coolant has a density of 1000 kg/m³ and a viscosity of 1.0 × 10⁻³ Pa·s. What inside RADIUS must the loop's tubing have?`,
        options: [r`4.0 mm`, r`8.0 mm`, r`16 mm`, r`0.0040 mm`],
        correctAnswer: 0,
        explanation: r`Rearranged, D = Re·η/(ρv) = (2000 × 1.0 × 10⁻³) ÷ (1000 × 0.25) = 2.0 ÷ 250 = 0.0080 m = 8.0 mm, and that is the diameter, so the radius is 4.0 mm. The 8.0 mm stops at the diameter, 16 mm doubles it instead of halving, and 0.0040 mm reads 0.0040 m as millimeters.`,
      },
    ],
  },
  [r`Why does the Reynolds number have no units?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In ρvD/η, density is in kg/m³, speed in m/s, diameter in m and viscosity in Pa·s. Which statement about the units is correct?`,
        options: [r`Top and bottom are both in kg/(m·s), so every unit cancels`, r`Top and bottom are both in kg/m³, so every unit cancels`, r`Top is in kg/(m·s) and bottom in Pa, so a second is left`, r`Top is in kg·m/s and bottom in Pa·s, so a meter is left`],
        correctAnswer: 0,
        explanation: r`On top, (kg/m³)(m/s)(m) = kg/(m·s), and a pascal-second is also a kilogram per meter-second, so everything cancels and the result is a pure number. The top is not kg/m³ or kg·m/s once the speed and diameter are multiplied in, and viscosity is in Pa·s, not in plain pascals.`,
      },
      {
        question: r`A student works out ρvD/η with the diameter in centimeters and every other quantity in SI units, and gets 150,000. What is the Reynolds number, and why is the student's value wrong?`,
        options: [r`150,000, since a pure number allows any units`, r`15,000, since the leftover cm/m is a factor of 10`, r`15,000,000, since the leftover cm/m is a factor of 100`, r`1500, since the leftover cm/m is a factor of 100`],
        correctAnswer: 3,
        explanation: r`The units cancel only when they match. With the diameter in centimeters a cm/m is left over, which is a factor of 100, so the true value is 150,000 ÷ 100 = 1500. Having no unit does not mean that mixed units are allowed. The other values use the wrong factor or multiply instead of dividing.`,
      },
    ],
  },
  [r`How do you compare the Reynolds numbers of two flows without starting over?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water flows through a pipe with a Reynolds number of 800. The same water is then sent at twice the average speed through a pipe of twice the diameter. What is the new Reynolds number?`,
        options: [r`1600`, r`3200`, r`800`, r`200`],
        correctAnswer: 1,
        explanation: r`Re ∝ ρvD/η, and both the speed and the diameter double, so Re becomes 800 × 2 × 2 = 3200. The 1600 counts only one of the two doublings, 800 lets them cancel each other, and 200 divides by both factors.`,
      },
      {
        question: r`A thin oil runs through a hose with a Reynolds number of 1500. On a cold day the oil's viscosity is 5 times as great, while its density, its average speed and the hose are unchanged. What is the Reynolds number on the cold day?`,
        options: [r`7500`, r`300`, r`1500`, r`60`],
        correctAnswer: 1,
        explanation: r`Viscosity is on the bottom of Re ∝ ρvD/η, so 5 times the viscosity divides the Reynolds number by 5: 1500 ÷ 5 = 300. The 7500 multiplies by 5 instead, 1500 ignores the change, and 60 divides by 5 twice.`,
      },
      {
        question: r`Flow A has a Reynolds number of 600. Flow B, in a tube of the same diameter, uses a fluid with 1.5 times the density and 3 times the viscosity, moving at twice the average speed. What is the Reynolds number of flow B?`,
        options: [r`600`, r`5400`, r`1800`, r`200`],
        correctAnswer: 0,
        explanation: r`Multiply by the changes in density and speed and divide by the change in viscosity: 600 × 1.5 × 2 ÷ 3 = 600, so the changes cancel exactly. The 5400 multiplies by the viscosity factor as well, 1800 leaves the viscosity out, and 200 divides by 3 but leaves out the density and speed factors.`,
      },
      {
        question: r`Water moves through a pipe at an average speed of 2.0 m/s, and the Reynolds number is 4000. Changing nothing but the speed, what average speed brings the Reynolds number down to 1000?`,
        options: [r`8.0 m/s`, r`1.0 m/s`, r`0.50 m/s`, r`0.25 m/s`],
        correctAnswer: 2,
        explanation: r`With everything else fixed, Re is proportional to the speed. Going from 4000 to 1000 is one quarter, so the speed must be one quarter of 2.0 m/s, which is 0.50 m/s. The 8.0 m/s multiplies by 4, 1.0 m/s only halves the speed, and 0.25 m/s divides by 4 twice over.`,
      },
      {
        question: r`An oil flowing in a pipe is warmed until its viscosity is half as great, with no change in its density, and the pump is turned up until the average speed is 3 times as great. By what factor does the Reynolds number change?`,
        options: [r`It becomes 1.5 times as large`, r`It becomes 6 times as large`, r`It becomes two thirds as large`, r`It becomes one sixth as large`],
        correctAnswer: 1,
        explanation: r`Re ∝ ρvD/η: multiply by 3 for the speed and divide by one half for the viscosity, which is 3 × 2 = 6. The factor of 1.5 multiplies by the one half instead of dividing by it, two thirds divides by the speed and multiplies by the 2, and one sixth turns the whole result upside down.`,
      },
      {
        question: r`Water flows through a tube with a Reynolds number of 2800. Blood is then sent through the same tube at half the average speed. Take blood as having the same density as water and 3.5 times its viscosity. What is the Reynolds number for the blood?`,
        options: [r`4900`, r`400`, r`1600`, r`800`],
        correctAnswer: 1,
        explanation: r`Divide by the viscosity factor and multiply by the speed factor: 2800 ÷ 3.5 × ½ = 800 × ½ = 400. The 4900 multiplies by 3.5 instead of dividing, 1600 doubles the speed instead of halving it, and 800 leaves the change in speed out.`,
      },
    ],
  },
  [r`At a fixed flow rate, a vessel narrows to half its diameter. What happens to the Reynolds number there?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Blood flows at a fixed flow rate through an artery in which the Reynolds number is 500. Plaque then narrows a short stretch of the artery to half its diameter. What is the Reynolds number in the narrowed stretch?`,
        options: [r`250`, r`2000`, r`500`, r`1000`],
        correctAnswer: 3,
        explanation: r`Half the diameter is a quarter of the area, so at the same flow rate the speed is 4 times as great, and Re ∝ vD changes by 4 × ½ = 2: 500 × 2 = 1000. The 250 scales the diameter alone, 2000 scales the speed alone, and 500 assumes the two changes cancel.`,
      },
      {
        question: r`Water flows at a fixed flow rate through a pipe in which the Reynolds number is 2400. The pipe then widens to 3 times its diameter. What is the Reynolds number in the wide section?`,
        options: [r`7200`, r`2400`, r`800`, r`270`],
        correctAnswer: 2,
        explanation: r`Three times the diameter is 9 times the area, so the speed falls to one ninth, and Re ∝ vD changes by (1/9) × 3 = 1/3: 2400 ÷ 3 = 800. The 7200 scales the diameter alone, 2400 assumes nothing changes, and 270 scales the speed alone.`,
      },
      {
        question: r`At a fixed flow rate, a vessel narrows to one quarter of its diameter. By what factors do the average speed and the Reynolds number change in the narrow part?`,
        options: [r`Speed × 16 and Reynolds number × 4`, r`Speed × 4 and Reynolds number × 1`, r`Speed × 16 and Reynolds number × 16`, r`Speed × 4 and Reynolds number × 4`],
        correctAnswer: 0,
        explanation: r`One quarter of the diameter is one sixteenth of the area, so continuity makes the speed 16 times as great, and Re ∝ vD changes by 16 × ¼ = 4. A speed factor of 4 forgets that the area goes as the diameter squared, and a Reynolds factor of 16 forgets the smaller diameter.`,
      },
      {
        question: r`Blood flows at a fixed flow rate through a vessel. The Reynolds number is 400 in the normal part and 2000 in a narrowed part. How does the diameter of the narrowed part compare with the normal diameter?`,
        options: [r`It is one twenty-fifth of the normal diameter`, r`It is five times the normal diameter`, r`It is one half of the normal diameter`, r`It is one fifth of the normal diameter`],
        correctAnswer: 3,
        explanation: r`At a fixed flow rate the speed goes as 1/D², so Re ∝ vD goes as 1/D. The Reynolds number is 5 times as great, so the diameter is one fifth as great. One twenty-fifth is the change in the area, five times turns the relation upside down, and one half is the change that would only double it.`,
      },
      {
        question: r`In a vessel carrying a fixed flow rate of blood, the Reynolds number is 1800, below the critical value of about 2000. The vessel then narrows to three quarters of its diameter. What is the Reynolds number in the narrow part?`,
        options: [r`1350, which is below the critical value`, r`2400, which is above the critical value`, r`3200, which is above the critical value`, r`1800, which is below the critical value`],
        correctAnswer: 1,
        explanation: r`At a fixed flow rate the Reynolds number goes as 1/D, so three quarters of the diameter gives 4/3 of the value: 1800 × 4/3 = 2400, now above 2000. The 1350 multiplies by three quarters, 3200 scales the speed alone by 16/9, and 1800 assumes that nothing changes.`,
      },
      {
        question: r`Water flows at a fixed flow rate through a tube of diameter 8.0 mm, where the Reynolds number is 300. It then enters a narrower section in which the Reynolds number is 1200. What is the diameter of the narrower section?`,
        options: [r`4.0 mm`, r`2.0 mm`, r`32 mm`, r`0.50 mm`],
        correctAnswer: 1,
        explanation: r`At a fixed flow rate the Reynolds number goes as 1/D. It is 4 times as great, so the diameter is one quarter as great: 8.0 mm ÷ 4 = 2.0 mm. The 4.0 mm takes a square root of the factor, 32 mm multiplies by 4, and 0.50 mm divides by 4 twice.`,
      },
    ],
  },
}
