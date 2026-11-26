import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbols stand for pressure, density and height in Bernoulli's equation, and what are their SI units?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student lists the data for a Bernoulli problem about water in a pipe. Which list gives every quantity its correct symbol and SI unit?`,
        options: [r`P = 80,000 N, ρ = 1000 kg/m³, y = 3 m`, r`P = 80,000 Pa, ρ = 1000 kg/m², y = 3 m`, r`P = 80,000 Pa, ρ = 1000 kg/m³, y = 3 m²`, r`P = 80,000 Pa, ρ = 1000 kg/m³, y = 3 m`],
        correctAnswer: 3,
        explanation: r`Pressure P is in pascals, density ρ is in kilograms per cubic meter, and height y is in meters. The list with N gives pressure the unit of a force. The list with kg/m² divides mass by an area instead of a volume, and the list with m² gives a height the unit of an area.`,
      },
      {
        question: r`Two students solve the same Bernoulli problem for a sloping pipe. One measures y from the floor and the other measures y from the pipe's lowest point, 1 m above the floor. How do their answers for the pressure difference between two points in the pipe compare?`,
        options: [r`The student measuring from the floor gets a larger difference`, r`They agree, since only the difference in y enters the answer`, r`The student measuring from the pipe gets a larger difference`, r`They disagree in sign, since y is negative for one of them`],
        correctAnswer: 1,
        explanation: r`y is a height above a reference level that the solver chooses, and Bernoulli's equation compares two points, so only y₂ − y₁ matters. Moving the reference level by 1 m changes both heights by the same amount and leaves their difference alone. Neither student gets a larger difference, and neither height becomes negative here.`,
      },
    ],
  },
  [r`What three assumptions define the ideal fluid that Bernoulli's equation is built on?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A bicycle pump squeezes air so that its density rises as the air is pushed smoothly toward the valve. Which ideal-fluid assumption does this air break?`,
        options: [r`Incompressible: its density must stay constant`, r`Non-viscous: it must have no internal friction`, r`Laminar: its layers must not cross or mix`, r`Steady: its flow must not change with time`],
        correctAnswer: 0,
        explanation: r`An ideal fluid is incompressible, which means its density stays the same everywhere, and the squeezed air's density rises. Nothing in the description points to internal friction, to layers that mix, or to a flow pattern that changes with time, so the other three assumptions are not the ones being broken.`,
      },
      {
        question: r`An engineer treats the water in a narrowing pipe as an ideal fluid. Which statement is NOT one of the assumptions she is making?`,
        options: [r`Its density is the same at every point`, r`It has no internal friction at all`, r`Its speed is the same at every point`, r`Its layers slide along without mixing`],
        correctAnswer: 2,
        explanation: r`An ideal fluid can move at different speeds at different points: it speeds up in the narrow part of the pipe. Steady flow only means that the speed at any one point does not change with time. Constant density (incompressible), no internal friction (non-viscous) and layers that do not mix (laminar) are the three assumptions.`,
      },
    ],
  },
  [r`What is a streamline?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Dye released at one point in water flowing steadily through a glass pipe draws a thin colored line that bends through a narrowing. What does the colored line show?`,
        options: [r`The points where the water has the same pressure`, r`The path that one small parcel of water follows`, r`The points where the water has the same speed`, r`The edge where smooth flow becomes turbulent`],
        correctAnswer: 1,
        explanation: r`In steady flow, every parcel that passes the release point follows the same path, so the dye marks a streamline: the path of one small parcel of water. The pressure and the speed both change along that line as it passes through the narrowing, and smooth flow has no turbulent edge to mark.`,
      },
      {
        question: r`A student writes Bernoulli's equation between point 1 in a hospital's water pipe and point 2 in a separate oxygen line that is not connected to it. Why is the equation not valid for this pair of points?`,
        options: [r`The two points do not lie at the same height`, r`The two points do not have the same fluid speed`, r`The two points do not have the same pipe width`, r`No parcel of fluid travels through both points`],
        correctAnswer: 3,
        explanation: r`Bernoulli's equation follows one parcel of fluid and compares two points along its streamline, and no parcel passes through both of these points. Different heights, speeds and pipe widths are all allowed: the equation exists to handle exactly those differences along one streamline.`,
      },
    ],
  },
  [r`Write Bernoulli's equation for two points on a streamline.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An irrigation pipe carries water (ρ = 1000 kg/m³) up a slope. At point 1 the pressure is 200 kPa and the water moves at 4 m/s. At point 2, which is 5 m higher, the pipe is wider and the water moves at 2 m/s. With g = 10 m/s² and ideal flow, what is the pressure at point 2?`,
        options: [r`144 kPa`, r`256 kPa`, r`156 kPa`, r`244 kPa`],
        correctAnswer: 2,
        explanation: r`Slowing down raises the pressure by ½ρ(v₁² − v₂²) = 500 × (16 − 4) = 6 kPa, and climbing 5 m lowers it by ρgy = 50 kPa, so P₂ = 200 + 6 − 50 = 156 kPa. 144 kPa subtracts the speed term as well. 244 kPa adds the height term and subtracts the speed term, and 256 kPa adds both.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) enters a riser pipe at 2 m/s where the pressure is 150 kPa. At a point 3 m higher, a gauge reads 114 kPa. With g = 10 m/s² and ideal flow, how fast is the water moving at the higher point?`,
        options: [r`4 m/s`, r`16 m/s`, r`3.5 m/s`, r`8.7 m/s`],
        correctAnswer: 0,
        explanation: r`In kPa, Bernoulli's equation reads 150 + 2 = 114 + 30 + ½ρv₂², so ½ρv₂² = 8000 Pa, v₂² = 16 and v₂ = 4 m/s. 16 m/s forgets the square root. 3.5 m/s leaves out the 2 kPa kinetic term at the start, and 8.7 m/s leaves out the 30 kPa height term.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) runs down a pipe from a hilltop reservoir. Near the top the pressure is 100 kPa and the water moves at 2 m/s. At a valve lower down, where the pipe is narrower, the pressure is 164 kPa and the water moves at 6 m/s. With g = 10 m/s² and ideal flow, how far below the first point is the valve?`,
        options: [r`6.4 m`, r`4.8 m`, r`7.2 m`, r`8 m`],
        correctAnswer: 3,
        explanation: r`Measuring y from the valve, 100 + 2 + ρgy₁ = 164 + 18 in kPa, so ρgy₁ = 80 kPa and y₁ = 8 m. 6.4 m ignores both kinetic terms. 4.8 m subtracts the 16 kPa speed term instead of adding it, and 7.2 m uses (6 − 2)² in place of 6² − 2².`,
      },
      {
        question: r`An unknown liquid speeds up from 1 m/s to 3 m/s as its pipe narrows and rises 2 m, and its pressure falls by 19.2 kPa. With g = 10 m/s² and ideal flow, what is the liquid's density?`,
        options: [r`960 kg/m³`, r`800 kg/m³`, r`1200 kg/m³`, r`4800 kg/m³`],
        correctAnswer: 1,
        explanation: r`The pressure drop is ½ρ(9 − 1) + ρ(10)(2) = 4ρ + 20ρ = 24ρ, so ρ = 19,200 ÷ 24 = 800 kg/m³. 960 kg/m³ uses the height term alone and 4800 kg/m³ uses the speed term alone. 1200 kg/m³ subtracts the two terms and so divides by 16.`,
      },
      {
        question: r`A pump feeds a fountain with water (ρ = 1000 kg/m³). At the pump outlet the pressure is 120 kPa and the water moves at 1 m/s. At a point in the pipe 250 cm higher, the pipe is narrower and the water moves at 5 m/s. With g = 10 m/s² and ideal flow, what is the pressure at the higher point?`,
        options: [r`108 kPa`, r`95 kPa`, r`83 kPa`, r`157 kPa`],
        correctAnswer: 2,
        explanation: r`The rise is 2.5 m, so the height term is 1000 × 10 × 2.5 = 25 kPa, and the speed term is 500 × (25 − 1) = 12 kPa. Both lower the pressure: 120 − 25 − 12 = 83 kPa. 108 kPa leaves out the height term, 95 kPa leaves out the speed term, and 157 kPa adds the two changes.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) flows through the pipework of a brewery. At point 1 the pressure is 50 kPa, the height is 3 m and the speed is 4 m/s. Point 2 is on the same streamline at a height of 0 m, where the speed is 2 m/s. With g = 10 m/s² and ideal flow, what is the pressure at point 2?`,
        options: [r`86 kPa`, r`56 kPa`, r`26 kPa`, r`74 kPa`],
        correctAnswer: 0,
        explanation: r`At point 1 the three terms add to 50 + 30 + 8 = 88 kPa. At point 2 the height term is zero and the kinetic term is 2 kPa, so P₂ = 88 − 2 = 86 kPa. 56 kPa leaves out the height term, 74 kPa subtracts the change in the speed term, and 26 kPa subtracts the height term.`,
      },
    ],
  },
  [r`What does each of the three terms in Bernoulli's equation stand for?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) is held in a reservoir 40 m above a turbine. Taking the turbine as the reference level and g = 10 m/s², how much gravitational potential energy does each cubic meter of this water have, according to the ρgy term?`,
        options: [r`40,000 J per cubic meter, equal to 40 kPa`, r`400,000 J per cubic meter, equal to 400 kPa`, r`400,000 J per cubic meter, equal to 400 Pa`, r`800,000 J per cubic meter, equal to 800 kPa`],
        correctAnswer: 1,
        explanation: r`ρgy = 1000 × 10 × 40 = 400,000 J for each cubic meter, and 1 J/m³ is 1 Pa, so this is 400,000 Pa or 400 kPa. 40,000 J leaves out g. The option ending in 400 Pa has the right energy with the wrong conversion, and 800,000 J doubles the result.`,
      },
      {
        question: r`Each term of Bernoulli's equation is an energy per unit volume, so each cubic meter of water at pressure P can do P joules of work by pushing. In a water main at 300 kPa, how much work can 0.0020 m³ (2.0 L) of water do by pushing?`,
        options: [r`150 J`, r`600,000 J`, r`6000 J`, r`600 J`],
        correctAnswer: 3,
        explanation: r`300 kPa is 300,000 J for each cubic meter, so 0.0020 m³ can do 300,000 × 0.0020 = 600 J of work. 600,000 J treats the 2.0 L as 2.0 m³. 150 J divides 300 by 2 instead of multiplying pressure by volume, and 6000 J slips a power of ten.`,
      },
      {
        question: r`A steady wind (air of density 1.2 kg/m³) carries 60 J of kinetic energy in each cubic meter of air. Using the kinetic term of Bernoulli's equation, how fast is the air moving?`,
        options: [r`10 m/s`, r`100 m/s`, r`50 m/s`, r`7.1 m/s`],
        correctAnswer: 0,
        explanation: r`½ρv² = 60 J/m³ gives v² = 60 ÷ 0.6 = 100, so v = 10 m/s. 100 m/s forgets the square root. 50 m/s divides 60 by 1.2 and stops, and 7.1 m/s is the square root of 50, which leaves out the factor of ½.`,
      },
      {
        question: r`A river speeds up from 2 m/s to 6 m/s as it enters a gorge. How does the kinetic energy carried by each cubic meter of its water change?`,
        options: [r`It becomes 3 times as large`, r`It becomes 6 times as large`, r`It becomes 9 times as large`, r`It becomes 4 times as large`],
        correctAnswer: 2,
        explanation: r`The kinetic energy per unit volume is ½ρv², which depends on the square of the speed. The speed triples, so the energy becomes 3² = 9 times as large (from 2 kPa to 18 kPa for water). A factor of 3 forgets the square, 6 doubles the factor instead of squaring it, and 4 comes from the difference of the two speeds.`,
      },
      {
        question: r`At one point in a pipe, water (ρ = 1000 kg/m³) has a pressure of 20 kPa, a height of 1.5 m above the reference level and a speed of 4 m/s. With g = 10 m/s², what do the three terms of Bernoulli's equation add up to for each cubic meter of this water?`,
        options: [r`51,000 J`, r`43,000 J`, r`29,500 J`, r`37,000 J`],
        correctAnswer: 1,
        explanation: r`P = 20,000 J/m³, ρgy = 1000 × 10 × 1.5 = 15,000 J/m³ and ½ρv² = 500 × 16 = 8000 J/m³, which add to 43,000 J for each cubic meter. 51,000 J leaves the ½ out of the kinetic term. 29,500 J leaves g out of the height term, and 37,000 J does not square the speed.`,
      },
      {
        question: r`Water moves at 10 m/s along a level channel. Through what height would still water have to be lifted for each cubic meter to gain as much gravitational potential energy as each cubic meter of the moving water has in kinetic energy? Use g = 10 m/s².`,
        options: [r`10 m`, r`0.5 m`, r`50 m`, r`5 m`],
        correctAnswer: 3,
        explanation: r`Setting ρgy equal to ½ρv² gives y = v² ÷ (2g) = 100 ÷ 20 = 5 m, whatever the density. 10 m leaves out the factor of ½. 0.5 m does not square the speed, and 50 m is ½v² without dividing by g.`,
      },
    ],
  },
  [r`In Bernoulli's equation, is $y$ a height or a depth, and why does it matter?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) climbs a pipe of constant width from point 1, where the pressure is 90 kPa, to point 2, which is 2 m higher. With g = 10 m/s² and ideal flow, which line of working is correct?`,
        options: [r`y₂ − y₁ = +2 m, so P₂ = 90 + 20 = 110 kPa`, r`y₂ − y₁ = −2 m, so P₂ = 90 + 20 = 110 kPa`, r`y₂ − y₁ = +2 m, so P₂ = 90 − 20 = 70 kPa`, r`y₂ − y₁ = +2 m, so P₂ = 90 − 2 = 88 kPa`],
        correctAnswer: 2,
        explanation: r`y is a height, so the higher point has the larger y and the lower pressure: P₂ = 90 − ρg(2 m) = 90 − 20 = 70 kPa. Both lines that reach 110 kPa treat the climb as an increase in depth, which raises the pressure. The line that reaches 88 kPa has the right sign but leaves g out of ρgy.`,
      },
      {
        question: r`Ideal water flows at constant speed through a sloping pipe of constant width. A gauge at point K reads 30 kPa more than a gauge at point L. With ρ = 1000 kg/m³ and g = 10 m/s², where is point L?`,
        options: [r`3 m higher than point K`, r`3 m lower than point K`, r`30 m higher than point K`, r`0.3 m lower than point K`],
        correctAnswer: 0,
        explanation: r`With the speed unchanged, P + ρgy is constant, so the lower pressure belongs to the greater height: 30,000 Pa ÷ (1000 × 10) = 3 m higher. Placing point L lower reads y as a depth. 30 m and 0.3 m each slip a power of ten in ρg.`,
      },
    ],
  },
  [r`What does Bernoulli's equation reduce to for a fluid at rest?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lake of still fresh water (ρ = 1000 kg/m³) lies under air at 100 kPa. With both speeds set to zero in Bernoulli's equation and g = 10 m/s², what is the pressure 12 m below the surface?`,
        options: [r`120 kPa`, r`220 kPa`, r`112 kPa`, r`1300 kPa`],
        correctAnswer: 1,
        explanation: r`With no kinetic terms, P = P₀ + ρgh = 100 kPa + 1000 × 10 × 12 Pa = 100 + 120 = 220 kPa. 120 kPa is ρgh alone, without the surface pressure. 112 kPa leaves g out of ρgh, and 1300 kPa slips a power of ten in ρgh.`,
      },
      {
        question: r`A pressure sensor on a diver in a still freshwater quarry (ρ = 1000 kg/m³) reads a total pressure of 250 kPa. The air at the surface is at 100 kPa. With g = 10 m/s², how deep is the diver?`,
        options: [r`25 m`, r`35 m`, r`1.5 m`, r`15 m`],
        correctAnswer: 3,
        explanation: r`ρgh = P − P₀ = 250 − 100 = 150 kPa, so h = 150,000 ÷ (1000 × 10) = 15 m. 25 m divides the total pressure by ρg without removing the surface pressure. 35 m adds the surface pressure instead of subtracting it, and 1.5 m slips a power of ten.`,
      },
      {
        question: r`A still liquid fills an open vat under air at 100 kPa. A gauge 2 m below the surface reads a total pressure of 124 kPa. With g = 10 m/s², what is the liquid's density?`,
        options: [r`1200 kg/m³`, r`6200 kg/m³`, r`12,000 kg/m³`, r`480 kg/m³`],
        correctAnswer: 0,
        explanation: r`ρgh = 124 − 100 = 24 kPa, so ρ = 24,000 ÷ (10 × 2) = 1200 kg/m³. 6200 kg/m³ divides the total 124 kPa by gh without removing the surface pressure. 12,000 kg/m³ leaves g out, and 480 kg/m³ multiplies 24 by gh instead of dividing.`,
      },
      {
        question: r`A sealed tank holds still oil (ρ = 900 kg/m³) under a layer of gas. The pressure 4 m below the oil's surface is 96 kPa. With g = 10 m/s², what is the pressure of the gas at the surface?`,
        options: [r`132 kPa`, r`92.4 kPa`, r`60 kPa`, r`36 kPa`],
        correctAnswer: 2,
        explanation: r`ρgh = 900 × 10 × 4 = 36 kPa, and P = P₀ + ρgh gives P₀ = 96 − 36 = 60 kPa. 132 kPa adds ρgh, which would be right for a point 4 m deeper, not for the surface. 92.4 kPa leaves g out of ρgh, and 36 kPa is ρgh itself.`,
      },
      {
        question: r`A measuring cylinder holds still water (ρ = 1000 kg/m³) to a depth of 50 cm and is open to air at 101 kPa. With g = 10 m/s², what is the pressure at the bottom of the water?`,
        options: [r`106 kPa`, r`601 kPa`, r`101.5 kPa`, r`5 kPa`],
        correctAnswer: 0,
        explanation: r`50 cm is 0.50 m, so ρgh = 1000 × 10 × 0.50 = 5000 Pa = 5 kPa and P = 101 + 5 = 106 kPa. 601 kPa uses the depth as 50 m. 101.5 kPa leaves g out of ρgh, and 5 kPa leaves out the pressure of the air on the surface.`,
      },
      {
        question: r`An open swimming pool of still water (ρ = 1000 kg/m³) lies under air at 100 kPa. With g = 10 m/s², at what depth is the total pressure twice the pressure at the surface?`,
        options: [r`20 m`, r`10 m`, r`5 m`, r`100 m`],
        correctAnswer: 1,
        explanation: r`The total must be 200 kPa, and the surface already supplies 100 kPa, so ρgh = 100 kPa and h = 100,000 ÷ 10,000 = 10 m. 20 m sets ρgh alone equal to 200 kPa. 5 m sets ρgh to half the surface pressure, and 100 m leaves g out.`,
      },
    ],
  },
  [r`What does Bernoulli's equation reduce to for flow at one height?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Air (ρ = 1.2 kg/m³) speeds up from 5 m/s to 15 m/s as it passes through the level nozzle of a hair dryer. Treating the air as ideal, how much lower is its pressure where it moves faster?`,
        options: [r`60 Pa`, r`240 Pa`, r`6 Pa`, r`120 Pa`],
        correctAnswer: 3,
        explanation: r`At one height P + ½ρv² is constant, so the drop is ½ρ(v₂² − v₁²) = 0.6 × (225 − 25) = 120 Pa. 60 Pa squares the difference of the speeds, 0.6 × 10². 240 Pa leaves out the factor of ½, and 6 Pa does not square the speeds at all.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 5 m/s through a level pipe where the pressure is 60 kPa. Farther along, a gauge reads 68 kPa. Treating the water as ideal, how fast is it moving at the second gauge?`,
        options: [r`1 m/s`, r`6.4 m/s`, r`3 m/s`, r`9 m/s`],
        correctAnswer: 2,
        explanation: r`P + ½ρv² is 60 + 12.5 = 72.5 kPa, so at the second gauge ½ρv² = 72.5 − 68 = 4.5 kPa, v² = 9 and v = 3 m/s. The pressure rose, so the water must have slowed: 6.4 m/s adds the change to v² instead. 1 m/s subtracts √16 from 5, and 9 m/s forgets the square root.`,
      },
      {
        question: r`A level garden sprayer sends water (ρ = 1000 kg/m³) out of its nozzle at 10 m/s into air at 100 kPa. In the hose just behind the nozzle the water moves at 2 m/s. Treating the water as ideal, what is the pressure in the hose?`,
        options: [r`52 kPa`, r`148 kPa`, r`132 kPa`, r`150 kPa`],
        correctAnswer: 1,
        explanation: r`The slower water in the hose is at the higher pressure: P = 100 kPa + 500 × (100 − 4) Pa = 100 + 48 = 148 kPa. 52 kPa subtracts the 48 kPa. 132 kPa uses (10 − 2)² = 64 in place of 100 − 4, and 150 kPa ignores the water's speed in the hose.`,
      },
      {
        question: r`A sports drink (ρ = 1000 kg/m³) speeds up from 50 cm/s to 150 cm/s along a level filling line. Treating the drink as ideal, by how much does its pressure fall?`,
        options: [r`1000 Pa`, r`500 Pa`, r`2000 Pa`, r`10,000,000 Pa`],
        correctAnswer: 0,
        explanation: r`In SI units the speeds are 0.50 m/s and 1.5 m/s, so the fall is 500 × (2.25 − 0.25) = 1000 Pa. 10,000,000 Pa puts the speeds in as 50 and 150 without converting. 500 Pa squares the difference of the speeds, and 2000 Pa leaves out the factor of ½.`,
      },
      {
        question: r`A wide chamber of nearly still water feeds a narrow tube at the same height. When the water in the tube moves at 2 m/s, the pressure in the tube is 2 kPa below the pressure in the chamber. With the same ideal water moving through the tube at 6 m/s, how far below the chamber's pressure is the pressure in the tube?`,
        options: [r`6 kPa`, r`8 kPa`, r`18 kPa`, r`16 kPa`],
        correctAnswer: 2,
        explanation: r`Starting from rest, the drop equals ½ρv², which grows with the square of the speed: 3 times the speed gives 9 times the drop, 18 kPa (500 × 36 Pa). 6 kPa scales the drop with the speed itself. 8 kPa uses (6 − 2)², and 16 kPa is the increase in the drop, not the drop.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) flows through a level pipe, moving at 8 m/s at point X and at 6 m/s at point Y. Treating the water as ideal, which point has the higher pressure, and by how much?`,
        options: [r`Point X, by 14 kPa`, r`Point Y, by 2 kPa`, r`Point X, by 2 kPa`, r`Point Y, by 14 kPa`],
        correctAnswer: 3,
        explanation: r`At one height the slower water has the higher pressure, so point Y is higher, by 500 × (64 − 36) = 14,000 Pa = 14 kPa. Giving point X the higher pressure pairs fast flow with high pressure. The 2 kPa answers square the difference of the speeds, 500 × 2².`,
      },
    ],
  },
  [r`Why does a fluid speed up as it enters a narrowing?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A small parcel of water is entering the throat of a level pipe. The pressure on its rear face is 50 kPa and the pressure on its front face is 46 kPa, and each face has an area of 2 cm². What net force do these pressures put on the parcel?`,
        options: [r`0.8 N, pointing forward into the throat`, r`0.8 N, pointing backward out of the throat`, r`19.2 N, pointing forward into the throat`, r`8000 N, pointing forward into the throat`],
        correctAnswer: 0,
        explanation: r`The higher pressure behind pushes harder than the lower pressure ahead, so the net force is forward: (50,000 − 46,000) Pa × 2 × 10⁻⁴ m² = 0.8 N. That force is what speeds the parcel up. A backward force would slow it, 19.2 N adds the two pressures, and 8000 N leaves the area in cm².`,
      },
      {
        question: r`An ideal fluid moves along a level pipe. If the pressure just behind a parcel of the fluid were exactly equal to the pressure just ahead of it, what would the parcel do?`,
        options: [r`Speed up steadily as it moves along`, r`Slow down steadily until it stops`, r`Stop at once, as nothing pushes it`, r`Keep moving at the same steady speed`],
        correctAnswer: 3,
        explanation: r`A pressure difference is the net force that changes a parcel's speed. With equal pressures behind and ahead there is no net force, so the parcel keeps its speed, as in a pipe of constant width. Speeding up needs a higher pressure behind, and slowing or stopping needs a higher pressure ahead.`,
      },
    ],
  },
  [r`What is the standard chain of reasoning for a pipe that narrows?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 6 m/s through a level pipe of cross-sectional area 3 cm², which then widens to 9 cm². Treating the water as ideal, what are its speed and its pressure change in the wide section?`,
        options: [r`2 m/s, with the pressure 16 kPa lower`, r`2 m/s, with the pressure 16 kPa higher`, r`18 m/s, with the pressure 144 kPa lower`, r`2 m/s, with the pressure 8 kPa higher`],
        correctAnswer: 1,
        explanation: r`Continuity first: 3 times the area gives one-third of the speed, 2 m/s. Then Bernoulli: the slower water is at higher pressure, by 500 × (36 − 4) = 16 kPa. A lower pressure reverses the chain, 18 m/s inverts the area ratio, and 8 kPa squares the difference of the speeds.`,
      },
      {
        question: r`Oil (ρ = 800 kg/m³) flows at 1 m/s through a level pipe whose diameter then halves. Treating the oil as ideal, what are its speed and its pressure change in the narrow section?`,
        options: [r`2 m/s, with the pressure 1.2 kPa lower`, r`4 m/s, with the pressure 3.6 kPa lower`, r`4 m/s, with the pressure 6 kPa lower`, r`4 m/s, with the pressure 6 kPa higher`],
        correctAnswer: 2,
        explanation: r`Half the diameter is one-quarter of the area, so continuity gives 4 m/s, and Bernoulli then gives a drop of 400 × (16 − 1) = 6 kPa. 2 m/s treats the area as halving with the diameter. 3.6 kPa uses (4 − 1)² in place of 16 − 1, and a higher pressure reverses the last link of the chain.`,
      },
      {
        question: r`A level fuel pipe of cross-sectional area 15 cm² carries kerosene (ρ = 800 kg/m³) at 1 m/s to a nozzle of area 3 cm², where the kerosene leaves into air at 100 kPa. Treating the kerosene as ideal, what is the pressure in the pipe?`,
        options: [r`109.6 kPa`, r`90.4 kPa`, r`106.4 kPa`, r`110 kPa`],
        correctAnswer: 0,
        explanation: r`Continuity gives 1 × (15 ÷ 3) = 5 m/s in the nozzle. Bernoulli then puts the slower kerosene in the pipe at the higher pressure, by 400 × (25 − 1) = 9.6 kPa: 100 + 9.6 = 109.6 kPa. 90.4 kPa subtracts the change. 106.4 kPa uses (5 − 1)² in place of 25 − 1, and 110 kPa ignores the speed in the pipe.`,
      },
      {
        question: r`Two level pipes carry ideal water that enters each at the same speed. Pipe 1 narrows to half of its cross-sectional area, and pipe 2 narrows to one-third of its cross-sectional area. How does the pressure drop in pipe 2 compare with the pressure drop in pipe 1?`,
        options: [r`It is 3/2 as large`, r`It is 9/4 as large`, r`It is 3 times as large`, r`It is 8/3 as large`],
        correctAnswer: 3,
        explanation: r`Continuity gives speeds of 2v and 3v, and Bernoulli gives drops of ½ρ(4v² − v²) = 3 × ½ρv² and ½ρ(9v² − v²) = 8 × ½ρv², a ratio of 8/3. 3/2 compares the speeds and 9/4 compares their squares without subtracting the entry term. A factor of 3 is the area ratio of pipe 2 alone.`,
      },
      {
        question: r`Saline (ρ = 1000 kg/m³) moves at 20 cm/s through level tubing of cross-sectional area 1.0 cm², then through a connector of area 0.20 cm². Treating the saline as ideal, what are its speed and its pressure change in the connector?`,
        options: [r`100 cm/s, with the pressure 320 Pa lower`, r`100 cm/s, with the pressure 480 Pa lower`, r`4 cm/s, with the pressure 19 Pa higher`, r`100 cm/s, with the pressure 500 Pa lower`],
        correctAnswer: 1,
        explanation: r`Continuity gives 20 × (1.0 ÷ 0.20) = 100 cm/s. In SI units the speeds are 1.0 m/s and 0.20 m/s, so the drop is 500 × (1.0 − 0.04) = 480 Pa. 320 Pa squares the difference of the speeds, 500 Pa ignores the entry speed, and 4 cm/s inverts the area ratio.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 2 m/s through the wide section of a level pipe, where the cross-sectional area is 6 cm². In the throat the pressure is 6 kPa lower. Treating the water as ideal, what is the cross-sectional area of the throat?`,
        options: [r`12 cm²`, r`1.5 cm²`, r`3 cm²`, r`0.75 cm²`],
        correctAnswer: 2,
        explanation: r`Run the chain backward. Bernoulli: 500 × (v² − 4) = 6000, so v² = 16 and the throat speed is 4 m/s. Continuity: twice the speed means half the area, 3 cm². 12 cm² inverts the ratio, 0.75 cm² uses 16 m/s without the square root, and 1.5 cm² divides the 6 cm² by the 4 m/s instead of by the ratio of the speeds.`,
      },
    ],
  },
  [r`A pipe climbs as it narrows. How do the two changes affect the pressure?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a pipe that narrows as it climbs, the pressure in the upper, narrow section is 34 kPa lower than in the lower, wide section. The climb by itself accounts for 20 kPa of this. How much does the gain in speed account for?`,
        options: [r`14 kPa`, r`54 kPa`, r`27 kPa`, r`1.7 kPa`],
        correctAnswer: 0,
        explanation: r`Both changes lower the pressure, so the two drops add to the total: 34 − 20 = 14 kPa comes from the gain in speed. 54 kPa adds the climb to the total again. 27 kPa averages the two numbers, and 1.7 kPa divides them.`,
      },
      {
        question: r`Water flows DOWN a pipe that narrows as it descends. On its own, the gain in speed accounts for an 8 kPa pressure change, and on its own the descent accounts for a 30 kPa change. How does the pressure in the lower, narrow section compare with that in the upper, wide section?`,
        options: [r`38 kPa lower`, r`22 kPa lower`, r`22 kPa higher`, r`38 kPa higher`],
        correctAnswer: 2,
        explanation: r`Speeding up lowers the pressure by 8 kPa, but descending raises it by 30 kPa, so here the two changes oppose: 30 − 8 = 22 kPa higher. The 38 kPa answers add the two, which is right only when the pipe climbs as it narrows. 22 kPa lower has the right size with the sign of the larger change reversed.`,
      },
      {
        question: r`Water enters the bottom of a climbing, narrowing pipe at 180 kPa. The 2 m climb accounts for a 20 kPa pressure change and the gain in speed for a 4.5 kPa change. What is the pressure at the top?`,
        options: [r`204.5 kPa`, r`164.5 kPa`, r`195.5 kPa`, r`155.5 kPa`],
        correctAnswer: 3,
        explanation: r`Rising lowers the pressure and speeding up lowers it too, so the drops add: 180 − 20 − 4.5 = 155.5 kPa. 164.5 kPa treats the gain in speed as raising the pressure, 195.5 kPa treats the climb as raising it, and 204.5 kPa adds both changes.`,
      },
      {
        question: r`A pipe WIDENS as it climbs. On its own, the loss of speed accounts for a 10 kPa pressure change, and on its own the climb accounts for a 25 kPa change. How does the pressure in the upper, wide section compare with that in the lower, narrow section?`,
        options: [r`35 kPa lower`, r`15 kPa lower`, r`15 kPa higher`, r`35 kPa higher`],
        correctAnswer: 1,
        explanation: r`Slowing down raises the pressure by 10 kPa while rising lowers it by 25 kPa, so the net change is 25 − 10 = 15 kPa lower. The 35 kPa answers add the two changes, which holds only when the fluid speeds up as it climbs. 15 kPa higher gives the net change the sign of the smaller effect.`,
      },
      {
        question: r`Oil flows up a pipe that narrows as it climbs. The gain in speed lowers the pressure by 2500 Pa and the climb lowers it by 12 kPa. What is the total fall in pressure between the bottom and the top?`,
        options: [r`9.5 kPa`, r`37 kPa`, r`12.25 kPa`, r`14.5 kPa`],
        correctAnswer: 3,
        explanation: r`2500 Pa is 2.5 kPa, and the two drops add: 12 + 2.5 = 14.5 kPa. 9.5 kPa subtracts one drop from the other. 37 kPa converts 2500 Pa to 25 kPa, and 12.25 kPa converts it to 0.25 kPa.`,
      },
      {
        question: r`In a pipe that narrows as it climbs, the climb lowers the water's pressure by 10 kPa and the gain in speed lowers it by 5 kPa. The pipe is rebuilt to climb twice as far, with the same two widths and the same flow rate. What is the total pressure drop now?`,
        options: [r`25 kPa`, r`30 kPa`, r`20 kPa`, r`15 kPa`],
        correctAnswer: 0,
        explanation: r`Doubling the climb doubles the height drop to 20 kPa, while the same widths and flow rate leave the speeds, and so the 5 kPa speed drop, unchanged: 20 + 5 = 25 kPa. 30 kPa doubles both drops. 20 kPa leaves out the speed drop, and 15 kPa is the original total.`,
      },
    ],
  },
  [r`Why does Bernoulli's equation need a non-viscous fluid?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A thick oil flows steadily through a pipeline. Between two points, the sum P + ρgy + ½ρv² falls by 3000 J for each cubic meter of oil. What has happened to that energy?`,
        options: [r`It became kinetic energy as the oil sped up`, r`It became potential energy as the oil rose`, r`It became thermal energy through friction`, r`It was destroyed, as viscous flow loses energy`],
        correctAnswer: 2,
        explanation: r`Viscosity is internal friction, and friction turns some of the fluid's energy into heat, so the three terms no longer add to a constant. Kinetic and gravitational potential energy are already counted inside the sum, so a fall in the sum cannot have gone into either of them. Energy is never destroyed.`,
      },
      {
        question: r`For which of these flows would Bernoulli's equation give the LEAST accurate prediction of the pressure?`,
        options: [r`Water moving smoothly through a short, wide pipe`, r`Thick syrup pushed slowly through a long, thin tube`, r`Air moving smoothly over a small model wing`, r`Water leaving a small hole in a wide, open tank`],
        correctAnswer: 1,
        explanation: r`Bernoulli's equation is conservation of energy for a fluid with no internal friction. Thick syrup in a long, thin tube loses a large share of its energy to heat through viscosity, so the three terms do not stay constant. Water and air in the other three cases have little internal friction over short distances, so the equation works well for them.`,
      },
    ],
  },
  [r`How do speed and wall pressure change in a narrowed artery, and in a widened one?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fatty deposit leaves one segment of a level artery with one-third of the normal cross-sectional area. Blood moves at 30 cm/s in the normal artery, and the flow rate is unchanged. Treating blood as ideal, how does the blood behave in the narrowed segment?`,
        options: [r`90 cm/s, pressing less on the wall`, r`90 cm/s, pressing harder on the wall`, r`10 cm/s, pressing less on the wall`, r`10 cm/s, pressing harder on the wall`],
        correctAnswer: 0,
        explanation: r`Narrower means faster: one-third of the area gives 3 times the speed, 90 cm/s. Faster means lower pressure, so the blood presses less on the wall there. The 10 cm/s answers invert the area ratio, and pressing harder at 90 cm/s pairs fast flow with high pressure.`,
      },
      {
        question: r`A weak spot in an artery wall bulges outward, widening that segment of the artery. In the ideal-fluid picture, why does the bulge tend to grow?`,
        options: [r`Blood speeds up there, so it presses harder on the wall`, r`Blood slows down there, so it presses less on the wall`, r`Blood speeds up there, so it presses less on the wall`, r`Blood slows down there, so it presses harder on the wall`],
        correctAnswer: 3,
        explanation: r`In a widened segment the same flow passes through a larger area, so the blood moves slower, and slower flow means higher pressure on the wall, which pushes the weak spot farther out. Blood does not speed up where a vessel widens, and slower blood presses harder, not less.`,
      },
    ],
  },
  [r`What are the first steps in any Bernoulli problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student sets up a Bernoulli problem. Point 1 has an area of 12 cm², a speed of 0.5 m/s, a pressure of 90 kPa and a height of 0 m. Point 2 has an area of 3 cm² and a height of 2 m. What speed belongs in her list for point 2?`,
        options: [r`0.125 m/s`, r`1.0 m/s`, r`2.0 m/s`, r`8.0 m/s`],
        correctAnswer: 2,
        explanation: r`Continuity gives the unknown speed: v₂ = v₁(A₁/A₂) = 0.5 × (12 ÷ 3) = 2.0 m/s. 0.125 m/s inverts the area ratio. 1.0 m/s multiplies by the square root of the ratio, and 8.0 m/s multiplies by its square.`,
      },
      {
        question: r`Water leaves a narrow pipe of cross-sectional area 2 cm² at 9 m/s and enters a wider pipe of area 6 cm². Before Bernoulli's equation can compare the two pipes, what speed must be listed for the wider one?`,
        options: [r`3 m/s`, r`27 m/s`, r`1 m/s`, r`4.5 m/s`],
        correctAnswer: 0,
        explanation: r`Continuity gives v₂ = v₁(A₁/A₂) = 9 × (2 ÷ 6) = 3 m/s: 3 times the area, one-third of the speed. 27 m/s inverts the area ratio. 1 m/s divides by the square of the ratio, and 4.5 m/s divides the speed by the 2 cm² alone.`,
      },
      {
        question: r`In a Bernoulli problem, point 1 is in a pipe of diameter 6 cm, where water moves at 1 m/s. Point 2 is in a pipe of diameter 2 cm. Using continuity, what is v₂?`,
        options: [r`3 m/s`, r`0.11 m/s`, r`0.33 m/s`, r`9 m/s`],
        correctAnswer: 3,
        explanation: r`Area goes as the square of the diameter, so A₁/A₂ = (6 ÷ 2)² = 9 and v₂ = 1 × 9 = 9 m/s. 3 m/s uses the ratio of the diameters without squaring it. 0.11 m/s and 0.33 m/s invert the ratio, slowing the water where the pipe narrows.`,
      },
      {
        question: r`A student's list for a Bernoulli problem shows v₁ = 2 m/s and A₁ = 10 cm² at point 1, and v₂ = 5 m/s at point 2. What is the cross-sectional area at point 2?`,
        options: [r`25 cm²`, r`4 cm²`, r`1.6 cm²`, r`2.5 cm²`],
        correctAnswer: 1,
        explanation: r`From v₂ = v₁(A₁/A₂), A₂ = A₁(v₁/v₂) = 10 × (2 ÷ 5) = 4 cm². 25 cm² inverts the ratio, giving the faster water the larger area. 1.6 cm² applies the speed ratio twice, and 2.5 cm² is only the ratio of the speeds.`,
      },
      {
        question: r`Coolant moves at 30 cm/s through a hose of cross-sectional area 20 cm² (point 1) and then through a fitting of area 4 cm² (point 2). Bernoulli's equation needs speeds in m/s. What value of v₂ goes into it?`,
        options: [r`150 m/s`, r`0.06 m/s`, r`1.5 m/s`, r`7.5 m/s`],
        correctAnswer: 2,
        explanation: r`Continuity gives v₂ = 30 × (20 ÷ 4) = 150 cm/s, which is 1.5 m/s. 150 m/s leaves the answer in cm/s. 0.06 m/s inverts the area ratio, and 7.5 m/s multiplies 0.30 m/s by the square of the ratio.`,
      },
      {
        question: r`Water moves at 1.2 m/s through the pipe at the foot of a water tower (point 1, taken as y = 0). The pipe climbs 8 m to a section with one-quarter of the cross-sectional area (point 2). Which entries belong in the list for point 2?`,
        options: [r`v₂ = 4.8 m/s and y₂ = 8 m`, r`v₂ = 0.3 m/s and y₂ = 8 m`, r`v₂ = 4.8 m/s and y₂ = 0 m`, r`v₂ = 1.2 m/s and y₂ = 8 m`],
        correctAnswer: 0,
        explanation: r`Point 2 is 8 m above the reference level, and continuity gives v₂ = 1.2 × 4 = 4.8 m/s, since one-quarter of the area means 4 times the speed. 0.3 m/s inverts the area ratio. y₂ = 0 m ignores the climb, and 1.2 m/s skips the continuity step.`,
      },
    ],
  },
  [r`How do you find the pressure change in a level pipe that narrows?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) speeds up from 3 m/s to 5 m/s where a level shower pipe narrows. Treating the water as ideal, how much lower is the pressure in the narrow part?`,
        options: [r`2 kPa`, r`8 kPa`, r`16 kPa`, r`1 kPa`],
        correctAnswer: 1,
        explanation: r`P₁ − P₂ = ½ρ(v₂² − v₁²) = 500 × (25 − 9) = 8000 Pa = 8 kPa. 2 kPa squares the difference of the speeds, 500 × 2². 16 kPa leaves out the factor of ½, and 1 kPa does not square the speeds at all.`,
      },
      {
        question: r`Oil (ρ = 800 kg/m³) moves at 1 m/s in the wide part of a level pipe. Where the pipe narrows, its pressure falls by 3200 Pa. Treating the oil as ideal, how fast does it move in the narrow part?`,
        options: [r`2.8 m/s`, r`9 m/s`, r`8 m/s`, r`3 m/s`],
        correctAnswer: 3,
        explanation: r`½ρ(v₂² − v₁²) = 3200 gives v₂² − 1 = 3200 ÷ 400 = 8, so v₂² = 9 and v₂ = 3 m/s. 2.8 m/s is √8, which leaves out the entry speed. 8 m/s takes v₂² − v₁² as the speed, and 9 m/s forgets the square root.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 10 m/s in the throat of a level pipe, where the pressure is 32 kPa lower than in the wide section. Treating the water as ideal, how fast does it move in the wide section?`,
        options: [r`6 m/s`, r`8 m/s`, r`2 m/s`, r`36 m/s`],
        correctAnswer: 0,
        explanation: r`500 × (100 − v₁²) = 32,000 gives 100 − v₁² = 64, so v₁² = 36 and v₁ = 6 m/s. 8 m/s is √64, the square root of the difference of squares. 2 m/s subtracts that 8 from 10, and 36 m/s forgets the square root.`,
      },
      {
        question: r`Two level pipes carry ideal water (ρ = 1000 kg/m³). In the first, the water speeds up from 1 m/s to 4 m/s at a narrowing. In the second, it speeds up from 4 m/s to 6 m/s. Which narrowing has the larger pressure drop, and by how much?`,
        options: [r`The first pipe, by 2.5 kPa`, r`The second pipe, by 5 kPa`, r`The second pipe, by 2.5 kPa`, r`The first pipe, by 5 kPa`],
        correctAnswer: 2,
        explanation: r`The drops are 500 × (16 − 1) = 7.5 kPa and 500 × (36 − 16) = 10 kPa, so the second pipe's drop is larger by 2.5 kPa, even though its gain in speed is smaller. Choosing the first pipe compares the gains in speed, or their squares, instead of the differences of the squares. 5 kPa leaves out the factor of ½.`,
      },
      {
        question: r`Air (ρ = 1.2 kg/m³) speeds up from 10 m/s to 30 m/s through a level narrowing in a ventilation duct. Treating the air as ideal and incompressible, how much lower, in kilopascals, is the pressure in the narrow part?`,
        options: [r`480 kPa`, r`0.48 kPa`, r`0.24 kPa`, r`0.96 kPa`],
        correctAnswer: 1,
        explanation: r`½ρ(v₂² − v₁²) = 0.6 × (900 − 100) = 480 Pa, and 1000 Pa = 1 kPa, so the drop is 0.48 kPa. 480 kPa keeps the number without converting. 0.24 kPa squares the difference of the speeds, and 0.96 kPa leaves out the factor of ½.`,
      },
      {
        question: r`Water flows through a level pipe that narrows, and the pressure in the narrow section is 3 kPa lower than in the wide section. The flow rate is then doubled, so both speeds double. What is the pressure drop now?`,
        options: [r`6 kPa`, r`9 kPa`, r`1.5 kPa`, r`12 kPa`],
        correctAnswer: 3,
        explanation: r`The drop is ½ρ(v₂² − v₁²). Doubling both speeds makes each squared term 4 times as large, so the drop is 4 × 3 = 12 kPa. 6 kPa scales the drop with the speed itself. 9 kPa triples it, and 1.5 kPa halves it.`,
      },
    ],
  },
  [r`What is the common trap when putting two speeds into Bernoulli's equation?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) speeds up from 2 m/s to 8 m/s in a level pipe. A student reports that the pressure falls by 18 kPa. What did she do, and what is the correct fall?`,
        options: [r`She left out the factor of ½; the fall is 9 kPa`, r`She squared the difference; the fall is 34 kPa`, r`She made no mistake; the fall is exactly 18 kPa`, r`She squared the difference; the fall is 30 kPa`],
        correctAnswer: 3,
        explanation: r`Her 18 kPa is 500 × (8 − 2)² = 500 × 36, the squared difference. Squaring each speed first gives 64 − 4 = 60, and 500 × 60 = 30 kPa. 34 kPa adds the squares, 64 + 4 = 68, instead of subtracting them, and 9 kPa halves her wrong answer again.`,
      },
      {
        question: r`Oil (ρ = 800 kg/m³) speeds up from 1 m/s to 5 m/s where a level pipe narrows. Squaring each speed before subtracting, what is the fall in pressure?`,
        options: [r`6.4 kPa`, r`9.6 kPa`, r`10.4 kPa`, r`1.6 kPa`],
        correctAnswer: 1,
        explanation: r`25 − 1 = 24, and ½ × 800 × 24 = 9600 Pa = 9.6 kPa. 6.4 kPa is the trap: (5 − 1)² = 16 gives 400 × 16. 10.4 kPa adds the squares to get 26, and 1.6 kPa uses the difference of the speeds without squaring anything.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) speeds up from 4 m/s to 10 m/s in a level pipe. One student squares each speed and then subtracts. Another subtracts the speeds and then squares. By how much is the second student's pressure drop too small?`,
        options: [r`18 kPa`, r`42 kPa`, r`24 kPa`, r`8 kPa`],
        correctAnswer: 2,
        explanation: r`The correct drop is 500 × (100 − 16) = 42 kPa. The second student gets 500 × (10 − 4)² = 18 kPa, which is 24 kPa too small. 18 kPa is the second student's own answer and 42 kPa is the correct drop, not the gap between them. 8 kPa is ½ρv² for the 4 m/s alone.`,
      },
      {
        question: r`Air (ρ = 1.2 kg/m³) speeds up from 20 m/s to 30 m/s as it passes over the level roof of a car. Which working gives the fall in pressure?`,
        options: [r`900 − 400 = 500, giving 300 Pa`, r`(30 − 20)² = 100, giving 60 Pa`, r`900 + 400 = 1300, giving 780 Pa`, r`30 − 20 = 10, giving 6 Pa`],
        correctAnswer: 0,
        explanation: r`Square each speed first, then subtract: 900 − 400 = 500, and 0.6 × 500 = 300 Pa. Squaring the difference gives only 100 and 60 Pa, which is the common trap. Adding the squares gives 780 Pa, and using the plain difference of the speeds gives 6 Pa.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) enters a level narrowing at 2 m/s, and its pressure falls by 10.5 kPa. Treating the water as ideal, how fast does it move in the narrow part?`,
        options: [r`6.6 m/s`, r`4.6 m/s`, r`23 m/s`, r`5 m/s`],
        correctAnswer: 3,
        explanation: r`v₂² − v₁² = 10,500 ÷ 500 = 21, so v₂² = 21 + 4 = 25 and v₂ = 5 m/s. 6.6 m/s treats 21 as (v₂ − 2)², the squared difference. 4.6 m/s is √21 with the entry speed left out, and 23 m/s adds 21 to the 2 m/s.`,
      },
      {
        question: r`Milk speeds up from 1 m/s to 3 m/s in a level dairy pipe. How does the correct value of v₂² − v₁² compare with the value a student gets by subtracting the speeds first and then squaring?`,
        options: [r`It is 4 times as large`, r`It is 2 times as large`, r`It is half as large`, r`It is the same size`],
        correctAnswer: 1,
        explanation: r`The correct value is 9 − 1 = 8, and the trap gives (3 − 1)² = 4, so the correct value is 2 times as large, and so is the correct pressure drop. A factor of 4 compares 8 with the plain difference of 2. The trap always gives the smaller value here, so it is neither equal nor larger.`,
      },
    ],
  },
  [r`How do you find the pressure change in a pipe that narrows and climbs?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A fountain pipe narrows as it rises 2 m to the spout, and the water (ρ = 1000 kg/m³) in it speeds up from 1 m/s to 5 m/s. Taking g = 10 m/s² and treating the water as ideal, what is P₁ − P₂ between the bottom of the pipe and the spout?`,
        options: [r`32 kPa`, r`8 kPa`, r`28 kPa`, r`12 kPa`],
        correctAnswer: 0,
        explanation: r`The speed term is 500 × (25 − 1) = 12 kPa and the height term is 1000 × 10 × 2 = 20 kPa, and they add: 32 kPa. 8 kPa subtracts one from the other. 28 kPa uses (5 − 1)² = 16 in the speed term, and 12 kPa leaves out the height term.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) leaves a basement boiler at 200 kPa, moving at 3 m/s. The pipe rises 6 m to a narrower shower line, where the water moves at 5 m/s. With g = 10 m/s² and ideal flow, what is the pressure in the shower line?`,
        options: [r`268 kPa`, r`148 kPa`, r`132 kPa`, r`140 kPa`],
        correctAnswer: 2,
        explanation: r`P₁ − P₂ = 500 × (25 − 9) + 1000 × 10 × 6 = 8 + 60 = 68 kPa, so P₂ = 200 − 68 = 132 kPa. 268 kPa adds the drop. 148 kPa subtracts the height term but adds the speed term, and 140 kPa leaves out the speed term.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) enters a pipe at 2 m/s. The pipe narrows as it rises 1.5 m, and the pressure at the top is 21 kPa lower than at the bottom. With g = 10 m/s² and ideal flow, how fast is the water moving at the top?`,
        options: [r`6.8 m/s`, r`4 m/s`, r`3.5 m/s`, r`16 m/s`],
        correctAnswer: 1,
        explanation: r`The height term is 1000 × 10 × 1.5 = 15 kPa, leaving 21 − 15 = 6 kPa for the speed term: 500 × (v₂² − 4) = 6000, so v₂² = 16 and v₂ = 4 m/s. 6.8 m/s gives the whole 21 kPa to the speed term. 3.5 m/s leaves out the entry speed, and 16 m/s forgets the square root.`,
      },
      {
        question: r`An ideal liquid speeds up from 1 m/s to 5 m/s as its pipe narrows and rises 3.6 m. With g = 10 m/s², what fraction of the total pressure drop comes from the height term?`,
        options: [r`1/4 of the drop`, r`9/11 of the drop`, r`3/5 of the drop`, r`3/4 of the drop`],
        correctAnswer: 3,
        explanation: r`For a density ρ, the speed term is ½ρ(25 − 1) = 12ρ and the height term is ρ × 10 × 3.6 = 36ρ, so the height term is 36 ÷ 48 = 3/4 of the drop, whatever the density. 1/4 is the share of the speed term. 9/11 uses (5 − 1)² in the speed term, and 3/5 leaves the ½ out of it.`,
      },
      {
        question: r`A laboratory supply line of cross-sectional area 8 cm² carries water (ρ = 1000 kg/m³) at 1 m/s. It climbs 50 cm to a tap fitting of area 2 cm². With g = 10 m/s² and ideal flow, what is the pressure drop between the supply line and the fitting?`,
        options: [r`12.5 kPa`, r`7.5 kPa`, r`2.5 kPa`, r`9.5 kPa`],
        correctAnswer: 0,
        explanation: r`Continuity gives 1 × (8 ÷ 2) = 4 m/s, so the speed term is 500 × (16 − 1) = 7.5 kPa. The climb is 0.50 m, so the height term is 1000 × 10 × 0.50 = 5 kPa, and the total is 12.5 kPa. 7.5 kPa leaves out the height term, 2.5 kPa subtracts it, and 9.5 kPa uses (4 − 1)² in the speed term.`,
      },
      {
        question: r`Air (ρ = 1.2 kg/m³) speeds up from 10 m/s to 20 m/s as a ventilation duct narrows and rises 10 m. With g = 10 m/s², and treating the air as ideal and incompressible, how much lower is the pressure at the top?`,
        options: [r`180 Pa`, r`60 Pa`, r`300 Pa`, r`480 Pa`],
        correctAnswer: 2,
        explanation: r`The speed term is 0.6 × (400 − 100) = 180 Pa and the height term is 1.2 × 10 × 10 = 120 Pa, which add to 300 Pa. 180 Pa leaves out the height term and 60 Pa subtracts it. 480 Pa leaves the ½ out of the speed term.`,
      },
    ],
  },
  [r`You have a pressure drop in pascals and an upstream pressure in kilopascals. How do you finish?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Upstream of a narrowing in a fuel line the pressure is 130 kPa. A Bernoulli calculation gives a pressure drop of 4500 Pa through the narrowing. What is the pressure in the narrow part?`,
        options: [r`134.5 kPa`, r`85 kPa`, r`125.5 kPa`, r`129.55 kPa`],
        correctAnswer: 2,
        explanation: r`4500 Pa is 4.5 kPa, and a drop is subtracted: 130 − 4.5 = 125.5 kPa. 134.5 kPa adds the change. 85 kPa converts 4500 Pa to 45 kPa, and 129.55 kPa converts it to 0.45 kPa.`,
      },
      {
        question: r`The pressure in the throat of a level pipe is measured as 96 kPa. A Bernoulli calculation shows that the pressure fell by 12,000 Pa between the wide section upstream and the throat. What was the pressure upstream?`,
        options: [r`84 kPa`, r`97.2 kPa`, r`216 kPa`, r`108 kPa`],
        correctAnswer: 3,
        explanation: r`12,000 Pa is 12 kPa. The throat pressure is the upstream pressure minus the drop, so the upstream pressure is 96 + 12 = 108 kPa. 84 kPa subtracts the drop a second time. 97.2 kPa converts 12,000 Pa to 1.2 kPa, and 216 kPa converts it to 120 kPa.`,
      },
      {
        question: r`Air enters a narrowing duct at 102 kPa, and a Bernoulli calculation gives a pressure drop of 600 Pa. What is the pressure in the narrow part of the duct?`,
        options: [r`102.6 kPa`, r`101.4 kPa`, r`96 kPa`, r`42 kPa`],
        correctAnswer: 1,
        explanation: r`600 Pa is 0.6 kPa, and subtracting the drop gives 102 − 0.6 = 101.4 kPa. 102.6 kPa adds the change. 96 kPa converts 600 Pa to 6 kPa, and 42 kPa converts it to 60 kPa.`,
      },
      {
        question: r`Gauges read 250 kPa upstream of a narrowing and 242.5 kPa inside it. To compare with a Bernoulli calculation done in SI units, what is this pressure drop in pascals?`,
        options: [r`7500 Pa`, r`7.5 Pa`, r`750 Pa`, r`492,500 Pa`],
        correctAnswer: 0,
        explanation: r`The drop is 250 − 242.5 = 7.5 kPa, and 1 kPa = 1000 Pa, so it is 7500 Pa. 7.5 Pa keeps the number without converting. 750 Pa multiplies by 100, and 492,500 Pa adds the two readings instead of subtracting them.`,
      },
      {
        question: r`Water enters a climbing, narrowing pipe at 300 kPa. A Bernoulli calculation gives a speed term of 8000 Pa and a height term of 40,000 Pa, both lowering the pressure. What is the pressure at the top?`,
        options: [r`348 kPa`, r`268 kPa`, r`292 kPa`, r`252 kPa`],
        correctAnswer: 3,
        explanation: r`The total drop is 8000 + 40,000 = 48,000 Pa = 48 kPa, and 300 − 48 = 252 kPa. 348 kPa adds the change. 268 kPa subtracts the height term but adds the speed term, and 292 kPa leaves out the height term.`,
      },
      {
        question: r`Water passes from a narrow section of a level pipe, where the pressure is 75 kPa, into a wide section. A Bernoulli calculation shows that the pressure in the wide section is 9000 Pa HIGHER. What is the pressure in the wide section?`,
        options: [r`66 kPa`, r`84 kPa`, r`165 kPa`, r`75.9 kPa`],
        correctAnswer: 1,
        explanation: r`9000 Pa is 9 kPa, and here the pressure rises, because the water slows in the wide section: 75 + 9 = 84 kPa. 66 kPa subtracts out of habit, which is right only for a drop. 165 kPa converts 9000 Pa to 90 kPa, and 75.9 kPa converts it to 0.9 kPa.`,
      },
    ],
  },
  [r`What quick check works on any Bernoulli answer?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student derives four candidate formulas for P₁ − P₂ in a pipe that climbs from point 1 to point 2. Only one survives the check of stopping the flow. Which one?`,
        options: [r`½ρ(v₂² − v₁²) − ρg(y₂ − y₁)`, r`½ρ(v₂² − v₁²) + ρg(y₂ − y₁)`, r`½ρ(v₂² − v₁²) + ρg(y₂ + y₁)`, r`½ρ(v₂² − v₁²) + ½ρg(y₂ − y₁)`],
        correctAnswer: 1,
        explanation: r`With both speeds zero, a correct formula must leave the hydrostatic result, P₁ − P₂ = ρg(y₂ − y₁): the lower point has the higher pressure. The formula with a minus sign gives the higher point the higher pressure. The one with y₂ + y₁ depends on where the reference level is, and the one with ½ρg gives half the hydrostatic difference.`,
      },
      {
        question: r`In a pipe carrying oil (ρ = 800 kg/m³), point 2 is 2.5 m above point 1. A student tests her expression for P₁ − P₂ by letting both speeds go to zero. With g = 10 m/s², what value should be left?`,
        options: [r`+20 kPa`, r`−20 kPa`, r`+2 kPa`, r`+25 kPa`],
        correctAnswer: 0,
        explanation: r`Only ρg(y₂ − y₁) is left: 800 × 10 × 2.5 = 20,000 Pa, so P₁ − P₂ = +20 kPa, with the lower point at the higher pressure. −20 kPa puts the higher pressure at the top. +2 kPa leaves out g, and +25 kPa uses the density of water.`,
      },
      {
        question: r`For water (ρ = 1000 kg/m³) that speeds up from 2 m/s to 4 m/s while rising 3 m, a student finds P₁ − P₂ = 36 kPa. She then imagines the same pipe with the water at rest. With g = 10 m/s², what pressure difference should remain?`,
        options: [r`36 kPa`, r`6 kPa`, r`30 kPa`, r`0 kPa`],
        correctAnswer: 2,
        explanation: r`Stopping the flow removes the speed term, 500 × (16 − 4) = 6 kPa, and leaves the hydrostatic term, ρg(y₂ − y₁) = 1000 × 10 × 3 = 30 kPa. 36 kPa keeps the speed term. 6 kPa keeps only the speed term, and 0 kPa forgets that still water has a higher pressure lower down.`,
      },
      {
        question: r`A correct Bernoulli formula for a pipe carrying water (ρ = 1000 kg/m³) gives P₁ − P₂ = +55 kPa once both speeds are set to zero. With g = 10 m/s², where is point 2?`,
        options: [r`5.5 m below point 1`, r`55 m above point 1`, r`0.55 m above point 1`, r`5.5 m above point 1`],
        correctAnswer: 3,
        explanation: r`With no flow, P₁ − P₂ = ρg(y₂ − y₁), so y₂ − y₁ = 55,000 ÷ 10,000 = +5.5 m: point 2 is above point 1, where the pressure is lower. Placing point 2 below reads y as a depth. 55 m and 0.55 m each slip a power of ten in ρg.`,
      },
      {
        question: r`In a pipe carrying water (ρ = 1000 kg/m³), point 2 is 1.5 m BELOW point 1. With both speeds set to zero, a student's formula gives P₁ − P₂ = +15 kPa. With g = 10 m/s², does the formula pass the check?`,
        options: [r`No: it should give −15 kPa, as point 2 is lower`, r`Yes: it should give +15 kPa, as point 2 is lower`, r`No: it should give 0 kPa, as nothing is moving`, r`No: it should give −1.5 kPa, as point 2 is lower`],
        correctAnswer: 0,
        explanation: r`With no flow only ρg(y₂ − y₁) is left, and y₂ − y₁ = −1.5 m, so P₁ − P₂ = 1000 × 10 × (−1.5) = −15 kPa: the lower point has the higher pressure. +15 kPa has the sign backward, so the formula fails. 0 kPa ignores the hydrostatic difference, and −1.5 kPa leaves out g.`,
      },
      {
        question: r`Brine (ρ = 1200 kg/m³) flows up a pipe in which point 2 is 50 cm above point 1. With g = 10 m/s², what value of P₁ − P₂ must any correct formula give when the flow is stopped?`,
        options: [r`600 kPa`, r`0.6 kPa`, r`6 kPa`, r`5 kPa`],
        correctAnswer: 2,
        explanation: r`50 cm is 0.50 m, so ρg(y₂ − y₁) = 1200 × 10 × 0.50 = 6000 Pa = 6 kPa. 600 kPa uses the height as 50 m. 0.6 kPa leaves out g, and 5 kPa uses the density of water instead of the brine's.`,
      },
    ],
  },
}
